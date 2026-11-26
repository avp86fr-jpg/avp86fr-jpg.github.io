import * as THREE from "three";
import { CAM, LANDMARKS as LM } from "../core/config.js";
import { clamp, lerp, wrapAngle } from "../core/utils.js";

const _fwd = new THREE.Vector3();
const _up = new THREE.Vector3();
const _right = new THREE.Vector3();
const _pos = new THREE.Vector3();
const _look = new THREE.Vector3();
const _ray = new THREE.Raycaster();
const _from = new THREE.Vector3();
const _dir = new THREE.Vector3();

export function createFlightCamera(camera) {
  const state = {
    mode: "chase",
    comfort: false,
    hero: false,
    rollMix: 0,
    shake: 0,
    titleOrbit: 0,
    orbitYaw: 0,
    orbitPitch: 0.22,
    orbitDist: CAM.chaseDist,
    orbitActive: false,
    orbitHold: 0,
    lockView: null, // null | "side" | "front"
    lookBack: false,
    world: null,
    colliders: [],
    hasPose: false,
  };

  function setWorld(world, meshes) {
    state.world = world || null;
    state.colliders = (meshes || []).filter((m) => m && m.isObject3D);
  }

  function collide(pos, look) {
    if (state.hero || state.mode === "title" || state.mode === "cockpit") return;
    const world = state.world;
    if (world && typeof world.heightAt === "function") {
      const h = world.heightAt(pos.x, pos.z);
      if (Number.isFinite(h) && pos.y < h + 4.5) pos.y = h + 4.5;
    }
    const meshes = state.colliders;
    if (!meshes.length) return;
    _from.copy(look);
    _dir.copy(pos).sub(_from);
    const dist = _dir.length();
    if (dist < 1.5) return;
    _dir.multiplyScalar(1 / dist);
    _ray.set(_from, _dir);
    _ray.near = 1.2;
    _ray.far = Math.max(1.4, dist - 0.8);
    const hits = _ray.intersectObjects(meshes, true);
    if (hits && hits.length) {
      const hit = hits[0];
      const pull = 2.6;
      pos.copy(hit.point).addScaledVector(_dir, -pull);
    }
    // Side clearance vs the big airport buildings (a look-to-cam ray misses these).
    const ground = (world && world.heightAt) ? world.heightAt.bind(world) : () => 0;
    const boxes = [
      { x: (LM.hangar && LM.hangar.x) || 120, z: (LM.hangar && LM.hangar.z) || -1040, hx: 38, hz: 28, y1: 34 },
      { x: (LM.tower && LM.tower.x) || 220, z: (LM.tower && LM.tower.z) || -1048, hx: 16, hz: 16, y1: 58 },
      { x: (LM.church && LM.church.x) || 330, z: (LM.church && LM.church.z) || -940, hx: 16, hz: 16, y1: 42 },
    ];
    const pad = 10;
    for (const b of boxes) {
      const y0 = (ground(b.x, b.z) || 0) - 1;
      const y1 = y0 + b.y1;
      const cx = Math.min(Math.max(pos.x, b.x - b.hx), b.x + b.hx);
      const cy = Math.min(Math.max(pos.y, y0), y1);
      const cz = Math.min(Math.max(pos.z, b.z - b.hz), b.z + b.hz);
      const dx = pos.x - cx, dy = pos.y - cy, dz = pos.z - cz;
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 < pad * pad) {
        if (d2 < 1e-5) {
          pos.z += (pos.z <= b.z ? -pad : pad);
        } else {
          const d = Math.sqrt(d2);
          const k = (pad - d) / d;
          pos.x += dx * k;
          pos.y += dy * k;
          pos.z += dz * k;
        }
      }
    }
    if (world && typeof world.heightAt === "function") {
      const h = world.heightAt(pos.x, pos.z);
      if (Number.isFinite(h) && pos.y < h + 4.5) pos.y = h + 4.5;
    }
  }

  function cycle() {
    // chase -> side -> front -> chase
    if (state.mode === "title") state.mode = "chase";
    if (!state.lockView) {
      state.lockView = "side";
      state.orbitYaw = Math.PI / 2;
      state.orbitPitch = 0.18;
      state.orbitHold = 0;
    } else if (state.lockView === "side") {
      state.lockView = "front";
      state.orbitYaw = Math.PI;
      state.orbitPitch = 0.14;
      state.orbitHold = 0;
    } else {
      state.lockView = null;
      state.orbitYaw = 0;
      state.orbitPitch = 0.22;
      state.orbitHold = 8;
      state.mode = "chase";
    }
    return state.lockView || "chase";
  }

  function orbitDrag(dx, dy) {
    if (state.hero || state.mode === "title") return;
    state.lockView = null;
    state.orbitActive = true;
    state.orbitHold = 0;
    state.orbitYaw = wrapAngle(state.orbitYaw + dx * 0.0075);
    state.orbitPitch = clamp(state.orbitPitch + dy * 0.0055, -0.12, 0.88);
    state.mode = "chase";
  }

  function orbitRelease() {
    state.orbitActive = false;
    if (!state.lockView) state.orbitHold = 0;
  }

  function orbitReset() {
    state.lockView = null;
    state.orbitActive = false;
    state.lookBack = false;
    state.orbitYaw = 0;
    state.orbitPitch = 0.22;
    state.orbitHold = 8;
  }

  function hardSnap(craft, portrait = false) {
    state.hero = false;
    if (state.mode === "title") state.mode = "chase";
    orbitReset();
    state.hasPose = false;
    snap(craft, portrait);
  }

  function setLookBack(on) {
    state.lookBack = !!on;
    if (on) state.orbitHold = 0;
  }

  function axes(craft) {
    _fwd.set(0, 0, -1).applyQuaternion(craft.quat);
    _up.set(0, 1, 0).applyQuaternion(craft.quat);
    _right.set(1, 0, 0).applyQuaternion(craft.quat);
    _right.y = 0;
    if (_right.lengthSq() < 1e-6) _right.set(1, 0, 0);
    else _right.normalize();
  }

  function orbitRig(craft, portrait, yaw, pitch) {
    axes(craft);
    const pit = clamp(pitch, -0.12, 0.88);
    const dist = (state.orbitDist || CAM.chaseDist) + (portrait ? 3 : 0) + 4;
    const cy = Math.cos(yaw), sy = Math.sin(yaw);
    const cp = Math.cos(pit), sp = Math.sin(pit);
    _pos.copy(craft.pos)
      .addScaledVector(_fwd, -dist * cp * cy)
      .addScaledVector(_right, dist * cp * sy)
      .add(new THREE.Vector3(0, 2.4 + dist * sp, 0));
    _look.copy(craft.pos).add(new THREE.Vector3(0, 1.4, 0));
    return { pos: _pos, look: _look, up: new THREE.Vector3(0, 1, 0) };
  }

  function rig(craft, portrait = false) {
    axes(craft);
    const hero = state.hero;
    const landing = hero === "landing";
    if (state.mode === "cockpit") {
      _pos.copy(craft.pos).addScaledVector(_fwd, 1.2).addScaledVector(_up, 0.7);
      _look.copy(craft.pos).addScaledVector(_fwd, 40);
      return { pos: _pos, look: _look, up: _up };
    }
    if (state.mode === "cinematic") {
      const t = performance.now() * 0.00015;
      const side = Math.sin(t) * 18;
      _pos.copy(craft.pos).addScaledVector(_fwd, -22).addScaledVector(_up, 6)
        .add(_right.clone().multiplyScalar(side));
      _look.copy(craft.pos);
      return { pos: _pos, look: _look, up: new THREE.Vector3(0, 1, 0) };
    }
    if (landing) {
      const dist = 20 + (portrait ? 3 : 0);
      const height = 6.2 + (portrait ? 1.5 : 0);
      _pos.copy(craft.pos).addScaledVector(_fwd, -dist).add(new THREE.Vector3(0, height, 0)).addScaledVector(_right, 5);
      _look.copy(craft.pos).addScaledVector(_fwd, 110).add(new THREE.Vector3(0, -3, 0));
      return { pos: _pos, look: _look, up: new THREE.Vector3(0, 1, 0) };
    }
    if (hero) {
      // 3/4 rear-above over the water, nearly level look INTO the island.
      // Tail nearest the camera, nose pointing away at the vista.
      const dist = 40 + (portrait ? 4 : 0);
      const height = 14 + (portrait ? 1.5 : 0);
      const side = 6.2;
      _pos.copy(craft.pos).addScaledVector(_fwd, -dist).add(new THREE.Vector3(0, height, 0)).addScaledVector(_right, -side);
      // Look a little lower so the plane sits in the lower-middle, not on the HUD.
      _look.set(0, 26, -500);
      return { pos: _pos, look: _look, up: new THREE.Vector3(0, 1, 0) };
    }
    const dist = CAM.chaseDist + (portrait ? 3 : 0);
    const height = CAM.chaseHeight + (portrait ? 2 : 0);
    _pos.copy(craft.pos).addScaledVector(_fwd, -dist).add(new THREE.Vector3(0, height, 0)).addScaledVector(_right, -2.4);
    _look.copy(craft.pos).addScaledVector(_fwd, 18).add(new THREE.Vector3(0, 0.2, 0));
    const up = new THREE.Vector3(Math.sin((craft.roll || 0) * 0.18), 1, 0).normalize();
    return { pos: _pos, look: _look, up };
  }

  function usingOrbitCam() {
    if (state.hero || state.mode === "title") return false;
    if (state.orbitActive || state.lockView || state.lookBack) return true;
    if (Math.abs(state.orbitYaw) > 0.04 || Math.abs(state.orbitPitch - 0.22) > 0.06) return true;
    return false;
  }

  function update(dt, craft, portrait = false) {
    const spd = craft.airspeed || 0;
    const k = clamp((spd - 28) / 48, 0, 1);
    const baseFov = portrait ? CAM.fovPortrait : CAM.fov;
    if (state.hero) camera.fov = 54;
    else if (state.mode === "title") camera.fov = 54;
    else camera.fov = baseFov + k * 8;
    camera.near = CAM.near;
    camera.far = CAM.far;

    if (state.mode === "title") {
      state.titleOrbit += dt * 0.04;
      const t = state.titleOrbit;
      // Stay over the water, south-east, looking in at the vista (not the airfield).
      camera.position.set(
        -30 + Math.sin(t * 0.5) * 50,
        88 + Math.sin(t * 0.35) * 8,
        -1720 + Math.cos(t * 0.5) * 36
      );
      camera.lookAt(0, 28, -480);
      camera.up.set(0, 1, 0);
      camera.updateProjectionMatrix();
      return;
    }

    // Ease back to chase 1.5 s after the player releases the orbit drag.
    if (!state.orbitActive && !state.lockView && !state.lookBack) {
      state.orbitHold += dt;
      if (state.orbitHold > 1.5) {
        const e = 1 - Math.exp(-4.2 * dt);
        let y = state.orbitYaw;
        while (y > Math.PI) y -= Math.PI * 2;
        while (y < -Math.PI) y += Math.PI * 2;
        state.orbitYaw = y * (1 - e);
        state.orbitPitch = lerp(state.orbitPitch, 0.22, e);
      }
    }

    let r;
    if (usingOrbitCam()) {
      const yaw = state.lookBack ? Math.PI : state.orbitYaw;
      const pit = state.lookBack ? 0.16 : state.orbitPitch;
      r = orbitRig(craft, portrait, yaw, pit);
    } else {
      r = rig(craft, portrait);
    }

    if (state.mode === "cockpit" || state.hero) {
      camera.position.copy(r.pos);
      state.hasPose = true;
    } else {
      const err = camera.position.distanceTo(r.pos);
      // Snap when the camera is left behind (mission start, teleport, long
      // physics burst without a render, or a leftover title/orbit pose).
      if (!state.hasPose || err > 28) {
        camera.position.copy(r.pos);
        state.hasPose = true;
      } else {
        let lag = CAM.chaseLag * (0.85 + 0.15 * (1 - k));
        if (err > 12) lag *= 2.6;
        const step = Math.max(0, dt || 1 / 60);
        camera.position.lerp(r.pos, 1 - Math.exp(-lag * step));
      }
    }
    collide(camera.position, r.look);
    camera.up.copy(r.up);
    camera.lookAt(r.look);

    if (!state.hero && state.mode !== "title") {
      const sh = k * k * 0.11;
      const t = (performance.now() * 0.001);
      camera.position.x += Math.sin(t * 37.1) * sh;
      camera.position.y += Math.cos(t * 41.7) * sh * 0.7;
    }
    if (state.shake > 0) {
      camera.position.x += (Math.random() - 0.5) * state.shake;
      camera.position.y += (Math.random() - 0.5) * state.shake;
      state.shake = Math.max(0, state.shake - dt * 4);
    }
    camera.updateProjectionMatrix();
  }

  function bump(amt = 0.4) { state.shake = Math.max(state.shake, amt); }

  function snap(craft, portrait = false) {
    if (state.mode === "title") state.mode = "chase";
    const r = rig(craft, portrait);
    camera.position.copy(r.pos);
    collide(camera.position, r.look);
    camera.up.copy(r.up);
    camera.lookAt(r.look);
    camera.fov = state.hero ? 54 : (portrait ? CAM.fovPortrait : CAM.fov);
    camera.updateProjectionMatrix();
    state.hasPose = true;
  }

  return { state, update, cycle, bump, snap, hardSnap, setWorld, camera, orbitDrag, orbitRelease, orbitReset, setLookBack };
}
