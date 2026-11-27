import * as THREE from "three";
import { PLANES, PHYS, WORLD, LANDING, SPAWN } from "../core/config.js";
import { clamp, lerp, damp, wrapAngle, saturate, TAU } from "../core/utils.js";

const _fwd = new THREE.Vector3();
const _up = new THREE.Vector3();
const _right = new THREE.Vector3();
const _velB = new THREE.Vector3();
const _liftDir = new THREE.Vector3();
const _force = new THREE.Vector3();
const _tmp = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _qDot = new THREE.Quaternion();
const _euler = new THREE.Euler(0, 0, 0, "YXZ");

export function createCraft(planeId = "trainer") {
  const def = PLANES[planeId];
  return {
    id: planeId,
    def,
    pos: new THREE.Vector3(SPAWN.airport.x, SPAWN.airport.y, SPAWN.airport.z),
    prevPos: new THREE.Vector3(),
    vel: new THREE.Vector3(0, 0, 0),
    quat: new THREE.Quaternion(),
    angVel: new THREE.Vector3(), // body space
    throttle: 0,
    gearDown: true,
    flaps: 0,
    onGround: true,
    waterborne: false,
    stalled: false,
    crashed: false,
    crashTimer: 0,
    airspeed: 0,
    altitude: 4,
    agl: 4,
    heading: SPAWN.airport.heading,
    pitch: 0,
    roll: 0,
    aoa: 0,
    vspeed: 0,
    gForce: 1,
    thermal: 0,
    groundedTime: 0,
    airTime: 0,
    lastSurface: "runway",
    spawn: { ...SPAWN.airport },
    tow: null, // { t, phase }
    smoke: 0,
  };
}

export function resetCraft(c, spawn, heading, planeId) {
  if (planeId && planeId !== c.id) {
    c.id = planeId;
    c.def = PLANES[planeId];
  }
  const sp = spawn || c.spawn || SPAWN.airport;
  c.pos.set(sp.x, sp.y, sp.z);
  c.prevPos.copy(c.pos);
  const h = heading ?? sp.heading ?? 0;
  // heading 0 = +X (east). Body forward is -Z, so yaw = -heading - PI/2? 
  // If heading 0 should look east (+X): yaw around Y so -Z maps to +X → yaw = -PI/2
  _euler.set(0, -h - Math.PI / 2, 0, "YXZ");
  c.quat.setFromEuler(_euler);
  c.vel.set(0, 0, 0);
  c.angVel.set(0, 0, 0);
  c.throttle = 0;
  c.gearDown = true;
  c.flaps = 0;
  c.onGround = true;
  c.waterborne = false;
  c.stalled = false;
  c.crashed = false;
  c.crashTimer = 0;
  c.airspeed = 0;
  c.heading = h;
  c.pitch = 0;
  c.roll = 0;
  c.aoa = 0;
  c.tow = null;
  c.airTime = 0;
  c.groundedTime = 0;
  c.unstickT = 0;
  c.vspeed = 0;
  c.events = [];
  c.spawn = { x: sp.x, y: sp.y, z: sp.z, heading: h };
  // Sit on the surface if a world height is already known; otherwise SPAWN.y is a safe default.
}

/** Apply a launch velocity along current heading. */
export function launchCraft(c, speed, climb = 0) {
  axes(c);
  c.vel.copy(_fwd).multiplyScalar(speed);
  c.vel.y += climb;
  c.onGround = false;
  c.waterborne = false;
  c.throttle = c.def.engine ? 0.8 : 0;
  c.airspeed = speed;
}

function axes(c) {
  _fwd.set(0, 0, -1).applyQuaternion(c.quat);
  _up.set(0, 1, 0).applyQuaternion(c.quat);
  _right.set(1, 0, 0).applyQuaternion(c.quat);
}

function liftCurve(aoa, clMax, stallAoA) {
  const a = Math.abs(aoa);
  const s = Math.sign(aoa) || 1;
  if (a < stallAoA) return s * (clMax / stallAoA) * a;
  // gentle stall: lift drops to ~0.45*clMax then recovers as nose drops
  const drop = saturate((a - stallAoA) / 0.18);
  return s * clMax * (1 - 0.55 * drop);
}

/**
 * input: { pitch, roll, yaw, throttle, gearToggle } each -1..1 except throttle 0..1
 * assist: 'full' | 'light' | 'off'
 */
export function stepCraft(c, input, world, dt, settings) {
  if (c.crashed) {
    c.crashTimer -= dt;
    return;
  }

  const def = c.def;
  const inv = settings?.invertPitch ? -1 : 1;
  const sens = settings?.sensitivity ?? 0.85;

  axes(c);

  if (c.tow) {
    stepTow(c, world, dt);
    finishKinematics(c, world, input);
    return;
  }

  const boost = !!(input.boost || input.actionHeld);
  const brake = !!(input.brake);

  if (def.engine) {
    let lever = input.throttleSet;
    if (lever == null) lever = c.throttle || 0;
    if (boost) lever = 1;
    c.throttle = clamp(lever, 0, 1);
  } else {
    c.throttle = 0;
  }

  if (input.gearToggle) c.gearDown = !c.gearDown;

  _euler.setFromQuaternion(c.quat, "YXZ");
  let pitch = _euler.x;
  let yaw = _euler.y;
  let roll = _euler.z;

  const turn = clamp(((input.roll || 0) + (input.yaw || 0)) * sens, -1, 1);
  const inPitch = clamp((input.pitch || 0) * inv * sens, -1, 1);

  const maxPitch = 38 * Math.PI / 180;
  const maxBank = 52 * Math.PI / 180;
  const yawRate = 2.05;

  const takeoffSpd = Math.max(16, (def.stallSpeed || 22) * 0.68);
  const minSpd = Math.max(16, (def.stallSpeed || 22) * 0.85);
  const cruise = def.cruise || 46;
  const maxSpd = def.maxSpeed || 68;

  // Coordinated bank-to-turn with slight inertia and light auto-level.
  if (c._turn == null) c._turn = 0;
  c._turn = damp(c._turn, turn, 2.8, dt);

  if (c.onGround || c.waterborne) {
    const targetPitch = c.throttle > 0.95 && c.airspeed > takeoffSpd * 0.75 ? 0.16 : 0;
    pitch = damp(pitch, targetPitch, 8, dt);
    roll = damp(roll, 0, 10, dt);
    if (Math.abs(c._turn) > 0.15 && c.airspeed > 4) yaw -= c._turn * yawRate * 0.35 * dt;
  } else {
    let targetPitch;
    if (Math.abs(inPitch) < 0.08) {
      // Light auto-level; a hint of climb at high power.
      targetPitch = c.throttle > 0.85 ? 0.06 : 0;
    } else {
      targetPitch = inPitch * maxPitch;
    }
    // Gentle mush near min speed: nose wants to drop, no stall.
    const mush = c.airspeed < minSpd * 1.05 ? saturate((minSpd * 1.05 - c.airspeed) / (minSpd * 0.35)) : 0;
    if (mush > 0) targetPitch = lerp(targetPitch, Math.min(targetPitch, -0.06), mush);
    pitch = damp(pitch, clamp(targetPitch, -maxPitch, maxPitch), 6.2, dt);
    pitch = clamp(pitch, -maxPitch, maxPitch);
    const targetBank = clamp(-c._turn * maxBank, -maxBank, maxBank);
    roll = damp(roll, targetBank, 3.5, dt);
    roll = clamp(roll, -maxBank, maxBank);
    // Yaw follows bank, with a little extra stick for agility.
    yaw += (roll / maxBank) * yawRate * dt;
    yaw -= c._turn * yawRate * 0.18 * dt;
  }

  c.angVel.set(0, (roll / Math.max(0.01, maxBank)) * yawRate, 0);
  c.yawRate = (roll / Math.max(0.01, maxBank)) * yawRate;
  _euler.set(pitch, yaw, roll, "YXZ");
  c.quat.setFromEuler(_euler);
  axes(c);

  const horiz = Math.hypot(c.vel.x, c.vel.z);
  let spd;
  if (c.onGround || c.waterborne) {
    const accel = c.throttle > 0.08 ? c.throttle * 22 - 2 : (brake ? -32 : -12);
    spd = Math.max(0, horiz + accel * dt);
    if (c.throttle < 0.08 && horiz < 1.2) spd = 0;
  } else if (!def.engine) {
    const dive = Math.sin(pitch);
    const want = clamp(32 - dive * 48, 16, 64);
    spd = damp(Math.hypot(c.vel.x, c.vel.y, c.vel.z) || horiz, want, 1.5, dt);
  } else {
    // Speed from throttle plus gravity: diving gains speed, climbing loses it.
    // Full power still climbs strongly (bleed shrinks as throttle rises).
    const wantLevel = minSpd + c.throttle * (maxSpd - minSpd);
    const bleed = (26 - 12 * c.throttle) * Math.sin(pitch);
    let want = wantLevel - bleed;
    if (boost && c.throttle > 0.95) want += 6;
    want = clamp(want, minSpd * 0.82, maxSpd + 8);
    const cur = Math.hypot(c.vel.x, c.vel.y, c.vel.z) || horiz;
    spd = damp(cur, want, 1.7, dt);
  }

  const wantY = _fwd.y * Math.max(spd, 1);
  c.vel.x = _fwd.x * spd;
  c.vel.z = _fwd.z * spd;

  const surf = world.landingSurface ? world.landingSurface(c.pos.x, c.pos.z) : "";
  const pad = surf === "runway" || surf === "grass" || surf === "beach"
    || (def.waterCapable && (surf === "lagoon" || surf === "water"));
  const flaring = !c.onGround && !c.waterborne && pad && c.agl < 55 && c.throttle < 0.92 && !boost && inPitch < 0.15;

  if ((c.onGround || c.waterborne) && !(boost && spd >= takeoffSpd)) {
    c.vel.y = 0;
  } else if (flaring) {
    const wantVs = c.agl < 2.5 ? -1.8 : c.agl < 7 ? -1.3 : c.agl < 18 ? -2.6 : -4.0;
    c.vel.y = damp(c.vel.y, wantVs, 5, dt);
    const landSpd = Math.min(spd, cruise * 0.62);
    c.vel.x = _fwd.x * landSpd;
    c.vel.z = _fwd.z * landSpd;
    if (c.agl < 16) {
      _euler.setFromQuaternion(c.quat, "YXZ");
      _euler.x = damp(_euler.x, c.agl < 7 ? 0.12 : 0.02, 5, dt);
      _euler.z = damp(_euler.z, 0, 5, dt);
      c.quat.setFromEuler(_euler);
      c.gearDown = true;
    }
    if (c.agl < 1.8) c.vel.y = Math.min(c.vel.y, -2.4);
  } else {
    c.vel.y = damp(c.vel.y, wantY, 5, dt);
  }
  c.airspeed = Math.max(spd, Math.hypot(c.vel.x, c.vel.y, c.vel.z) * 0.5);

  c.prevPos.copy(c.pos);
  c.pos.addScaledVector(c.vel, dt);
  c.stalled = false;
  c.aoa = 0;

  finishKinematics(c, world, input);
}

function stepTow(c, world, dt) {
  c.tow.t += dt;
  const t = c.tow.t;
  // 6s: roll, rotate, climb to 150m, release
  const phase = saturate(t / 6);
  c.throttle = 0;
  const hdg = c.spawn.heading ?? 0;
  const dirx = Math.cos(hdg), dirz = -Math.sin(hdg);
  const dist = lerp(0, 280, Math.min(1, t / 4));
  const alt = c.spawn.y + lerp(0, 150, saturate((t - 1.2) / 4.5));
  c.pos.set(c.spawn.x + dirx * dist, alt, c.spawn.z + dirz * dist);
  const pitch = -saturate((t - 1.2) / 2) * 0.18;
  _euler.set(pitch, -hdg - Math.PI / 2, 0, "YXZ");
  c.quat.setFromEuler(_euler);
  c.vel.set(dirx * 38, t > 1.2 ? 18 : 0, dirz * 38);
  c.onGround = t < 1.2;
  c.airspeed = 38;
  if (t >= 6) {
    c.tow = null;
    launchCraft(c, 40, 4);
    c.events = c.events || [];
    c.events.push("tow-release");
  }
}

function finishKinematics(c, world) {
  axes(c);
  _euler.setFromQuaternion(c.quat, "YXZ");
  c.pitch = _euler.x;
  c.heading = wrapAngle(-_euler.y - Math.PI / 2);
  c.roll = _euler.z;
  c.vspeed = c.vel.y;
  c.altitude = c.pos.y;

  const th = world.heightAt(c.pos.x, c.pos.z);
  const gear = c.gearDown ? c.def.gearHeight : c.def.gearHeight * 0.35;
  c.agl = c.pos.y - th - gear;

  const surface = world.landingSurface(c.pos.x, c.pos.z);
  const water = th < 0.35;
  const padSurf = surface === "runway" || surface === "grass" || surface === "beach"
    || (c.def.waterCapable && (surface === "lagoon" || surface === "water"));
  if (!c.onGround && !c.waterborne && padSurf && c.agl < 1.7 && c.throttle < 0.95 && c.airTime > 0.3 && c.vel.y < 3) {
    c.pos.y = th + gear;
    c.agl = 0;
  }
  if (c.unstickT > 0) {
    c.unstickT -= PHYS.dt;
    if (c.throttle > 0.45 && c.airspeed >= c.def.stallSpeed * 0.7) {
      if (c.pos.y - gear < th + 0.4) {
        c.pos.y = th + gear + 0.5;
        c.vel.y = Math.max(c.vel.y, 4.0);
      }
      _euler.setFromQuaternion(c.quat, "YXZ");
      _euler.x = Math.max(_euler.x, 0.10);
      c.quat.setFromEuler(_euler);
      c.onGround = false;
      c.waterborne = false;
      c.airTime += PHYS.dt;
      c.groundedTime = 0;
      c.altitude = c.pos.y;
      c.agl = c.pos.y - th - gear;
      return;
    } else {
      c.unstickT = 0;
    }
  }

  const hit = c.pos.y - gear <= th + 0.02 || (water && c.pos.y <= 1.15 && c.def.waterCapable);

  if (!hit) {
    c.onGround = false;
    c.waterborne = false;
    c.airTime += PHYS.dt;
    c.groundedTime = 0;
    return;
  }

  // Collision / landing — arcade: bounce and recover on light touches, no stalls or tumbles.
  const bank = Math.abs(c.roll);
  const pitchAbs = Math.abs(c.pitch);
  const vDown = -c.vel.y;
  const validLand =
    (surface === "runway" || surface === "grass" || surface === "beach" ||
      (c.def.waterCapable && (surface === "lagoon" || surface === "water"))) &&
    (c.gearDown || (c.def.waterCapable && water) || (c.id === "glider" && surface));

  // Extreme slam into a cliff only; otherwise bounce back and level out.
  if (!validLand && !c.onGround && !c.waterborne && c.airTime > 0.4 && vDown > 22) {
    crash(c);
    return;
  }
  if (!validLand && !c.onGround && !c.waterborne && (vDown > 4 || c.agl < 0.4)) {
    c.vel.y = Math.max(5, vDown * 0.4);
    c.pos.y = th + gear + 1.4;
    _euler.setFromQuaternion(c.quat, "YXZ");
    _euler.x = 0.12;
    _euler.z = 0;
    c.quat.setFromEuler(_euler);
    c.onGround = false;
    c.waterborne = false;
    return;
  }

  // Snap onto surface
  if (water && c.def.waterCapable) {
    c.pos.y = Math.max(c.pos.y, 1.05);
    c.waterborne = true;
    c.onGround = false;
    c.lastSurface = surface === "lagoon" ? "lagoon" : "water";
    // splash damping
    if (c.vel.y < -0.5) c.events = (c.events || []).concat("splash");
    c.vel.y = 0;
    const wd = Math.exp(-0.2 * PHYS.dt);
    c.vel.x *= wd;
    c.vel.z *= wd;
    // level out
    _euler.setFromQuaternion(c.quat, "YXZ");
    _euler.x = damp(_euler.x, 0, 4, PHYS.dt);
    _euler.z = damp(_euler.z, 0, 4, PHYS.dt);
    c.quat.setFromEuler(_euler);
  } else {
    c.pos.y = th + gear;
    c.onGround = true;
    c.waterborne = false;
    c.lastSurface = surface || "terrain";
    if (c.vel.y < -0.8 && c.airTime > 0.4) {
      c.events = (c.events || []).concat(vDown > LANDING.roughVSpeed ? "rough" : "touchdown");
      // bounce if a bit hard
      if (vDown > LANDING.goodVSpeed && vDown <= LANDING.crashVSpeed) {
        c.vel.y = vDown * 0.32;
        c.onGround = false;
        return;
      }
    }
    c.vel.y = 0;
    // rolling resistance as an exponential decay (dt-safe)
    const kRoll = (surface === "runway" || surface === "grass" || surface === "beach") ? 0.06 : 0.18;
    const kBrake = c.throttle < 0.08 ? 1.15 : 0;
    const rollDamp = Math.exp(-(kRoll + kBrake) * PHYS.dt);
    c.vel.x *= rollDamp;
    c.vel.z *= rollDamp;
    const vr = Math.max(16, c.def.stallSpeed * 0.68);
    const ready = c.def.engine && c.throttle > 0.95 && c.airspeed >= vr;
    _euler.setFromQuaternion(c.quat, "YXZ");
    if (ready) {
      // Automatic gentle rotation and unstick — dead-simple takeoff
      _euler.x = 0.14;
      _euler.z = damp(_euler.z, 0, 8, PHYS.dt);
      c.quat.setFromEuler(_euler);
      c.vel.y = Math.max(c.vel.y, 7.2);
      c.pos.y = th + gear + 1.2;
      c.onGround = false;
      c.airTime = 0.05;
      c.unstickT = 1.25;
      return;
    }
    _euler.x = damp(_euler.x, 0, 6, PHYS.dt);
    _euler.z = damp(_euler.z, 0, 6, PHYS.dt);
    c.quat.setFromEuler(_euler);
  }
  c.groundedTime += PHYS.dt;
  c.airTime = 0;
}

function crash(c) {
  c.crashed = true;
  c.crashTimer = 1.6;
  c.vel.set(0, 0, 0);
  c.events = (c.events || []).concat("crash");
}

export function startTow(c) {
  c.tow = { t: 0 };
  c.crashed = false;
}

export function interpCraft(c, alpha) {
  // position only (quat slerp done by caller if needed)
  return _tmp.copy(c.prevPos).lerp(c.pos, alpha);
}
