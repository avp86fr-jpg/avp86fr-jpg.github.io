import * as THREE from "three";
import { MAT, LANDING } from "../core/config.js";
import { retagGeometry, tagMesh, patchMaterialIdAlpha } from "../render/idMaterial.js";
import { clamp, saturate, formatTime, wrapAngle, shortestAngle } from "../core/utils.js";
import { makeBalloon } from "../world/skyprops.js";
import { MISSIONS, getMission } from "./data.js";
import { resetCraft, launchCraft } from "../flight/physics.js";

function ringMesh(radius = 14) {
  const g = new THREE.Group();
  const tube = 1.2;
  const core = new THREE.Mesh(
    retagGeometry(new THREE.TorusGeometry(radius, tube, 10, 32), MAT.RING, 1),
    patchMaterialIdAlpha(new THREE.MeshBasicMaterial({ color: 0xffc20a, toneMapped: false }))
  );
  const rim = new THREE.Mesh(
    retagGeometry(new THREE.TorusGeometry(radius, tube * 1.28, 8, 32), MAT.RING, 1),
    patchMaterialIdAlpha(new THREE.MeshBasicMaterial({ color: 0x6a4810, toneMapped: false, transparent: true, opacity: 0.75, side: THREE.BackSide }))
  );
  const glow = new THREE.Mesh(
    retagGeometry(new THREE.TorusGeometry(radius, tube * 2.15, 8, 24), MAT.RING, 1),
    patchMaterialIdAlpha(new THREE.MeshBasicMaterial({
      color: 0xffe07a, toneMapped: false, transparent: true, opacity: 0.55,
      depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    }))
  );
  glow.renderOrder = 2;
  g.add(rim, core, glow);
  g.userData.hero = 1;
  g.userData.core = core;
  g.userData.rim = rim;
  g.userData.glow = glow;
  return g;
}

function markerPole(color = 0xffee88) { // color passed to MeshBasic
  const g = new THREE.Group();
  const p = new THREE.Mesh(retagGeometry(new THREE.CylinderGeometry(0.3, 0.3, 10, 6), MAT.HERO, 1),
    patchMaterialIdAlpha(new THREE.MeshBasicMaterial({ color })));
  p.position.y = 5;
  const top = new THREE.Mesh(retagGeometry(new THREE.SphereGeometry(1.2, 8, 6), MAT.HERO, 1),
    patchMaterialIdAlpha(new THREE.MeshBasicMaterial({ color })));
  top.position.y = 11;
  g.add(p, top);
  return g;
}

function makeRivalCraft() {
  const g = new THREE.Group();
  g.name = "rival";
  const fuse = new THREE.Mesh(
    retagGeometry(new THREE.BoxGeometry(1.15, 1.05, 6.4), MAT.PLANE, 0),
    patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x1e3a6a, flatShading: true }))
  );
  const wing = new THREE.Mesh(
    retagGeometry(new THREE.BoxGeometry(9.6, 0.16, 1.5), MAT.PLANE, 0),
    patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0xf4efe4, flatShading: true }))
  );
  wing.position.y = 0.45;
  const stripe = new THREE.Mesh(
    retagGeometry(new THREE.BoxGeometry(9.6, 0.05, 0.22), MAT.PLANE, 0),
    patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0xc01418, flatShading: true }))
  );
  stripe.position.set(0, 0.55, 0.15);
  const fin = new THREE.Mesh(
    retagGeometry(new THREE.BoxGeometry(0.12, 1.5, 1.05), MAT.PLANE, 0),
    patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0xf4efe4, flatShading: true }))
  );
  fin.position.set(0, 1.15, -2.7);
  const stab = new THREE.Mesh(
    retagGeometry(new THREE.BoxGeometry(2.6, 0.1, 0.7), MAT.PLANE, 0),
    patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0xf4efe4, flatShading: true }))
  );
  stab.position.set(0, 0.7, -2.7);
  g.add(fuse, wing, stripe, fin, stab);
  g.scale.setScalar(1.45);
  return g;
}

export function createMissionSystem(scene, world, audio) {
  const group = new THREE.Group();
  group.name = "missions";
  scene.add(group);
  let feelFX = null;
  function setFeelFX(f) { feelFX = f; }

  function fadeNearCam(mesh, cam, highlight) {
    if (!mesh || !cam) return;
    const rad = (mesh.userData.base && mesh.userData.base.r) || (mesh.userData.stop && mesh.userData.stop.r) || 16;
    const d = cam.position.distanceTo(mesh.position);
    // Hide inside the torus, or when a nearly edge-on gate would fill the frame.
    const gap = d - rad;
    const axis = fadeNearCam._axis || (fadeNearCam._axis = new THREE.Vector3());
    const toCam = fadeNearCam._toCam || (fadeNearCam._toCam = new THREE.Vector3());
    mesh.updateMatrixWorld(true);
    axis.set(0, 0, 1).transformDirection(mesh.matrixWorld);
    toCam.copy(cam.position).sub(mesh.position).normalize();
    const edgeOn = 1 - Math.abs(toCam.dot(axis));
    if (d < rad * 1.12 || gap < 48 || (edgeOn > 0.55 && gap < 92) || (rad >= 20 && gap < 86)) {
      mesh.visible = false;
      return;
    }
    if (mesh.userData._forceHidden) { mesh.visible = false; return; }
    mesh.visible = true;
    // The ring AHEAD stays a solid saturated gold with a glow. Later rings
    // stay gold too, just dimmer — never a grey/white hoop. Only fade the
    // current ring when it is about to clip the lens.
    const fade = Math.max(0, Math.min(1, (gap - 48) / 90));
    const GOLD = 0xffc20a, GOLD_FAR = 0xe0a410, GLOW = 0xffe07a, GLOW_FAR = 0xe8c050;
    let vis;
    if (highlight) vis = (gap < 58 || edgeOn > 0.7) ? Math.max(0.88, fade) : 1;
    else vis = Math.max(0.62, 0.55 + fade * 0.35);
    const core = mesh.userData.core, rim = mesh.userData.rim, glow = mesh.userData.glow;
    if (core && core.material) {
      core.material.color.setHex(highlight ? GOLD : GOLD_FAR);
      core.material.transparent = vis < 0.98;
      core.material.opacity = vis;
      core.material.depthWrite = vis > 0.55;
    }
    if (rim && rim.material) {
      if (rim.userData.baseOp == null) rim.userData.baseOp = rim.material.opacity || 0.75;
      rim.material.opacity = rim.userData.baseOp * (highlight ? Math.max(0.7, vis) : vis * 0.7);
    }
    if (glow && glow.material) {
      glow.material.color.setHex(highlight ? GLOW : GLOW_FAR);
      glow.material.opacity = highlight ? 0.55 * vis : 0.20 * vis;
    }
  }

  const state = {
    active: null,
    objects: [],
    t: 0,
    next: 0,
    popped: 0,
    result: null,
    grade: null,
    photoReady: false,
    photoTaken: false,
    photoScore: 0,
    ringsPassed: 0,
    landing: null,
    balloons: [],
    message: "",
    starsAwarded: 0,
    mailStops: [],
    mailHasBag: false,
  };

  function clear() {
    for (const o of state.objects) {
      group.remove(o);
      o.traverse((c) => {
        if (c.geometry) c.geometry.dispose?.();
      });
    }
    state.objects.length = 0;
    state.balloons.length = 0;
    state.active = null;
    state.result = null;
    state.grade = null;
    state.photoReady = false;
    state.photoTaken = false;
    state.message = "";
    state.t = 0;
    state.next = 0;
    state.popped = 0;
    state.ringsPassed = 0;
    state.landing = null;
    state.starsAwarded = 0;
    state.mailStops = [];
    state.mailHasBag = false;
    state.rival = null;
    state.rivalDelta = 0;
  }

  function add(o) { group.add(o); state.objects.push(o); return o; }

  function plantFlares(m) {
    let cx, cz;
    if (m.flareAt) { cx = m.flareAt.x; cz = m.flareAt.z; }
    else {
      const s = (m.stops || []).find((st) => st.type === "raft" || st.type === "mark") || (m.stops || [])[0];
      if (!s) return;
      cx = s.x; cz = s.z;
    }
    const n = m.flareCount || 8;
    const rad = m.flareR || 28;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const x = cx + Math.cos(a) * rad;
      const z = cz + Math.sin(a) * rad;
      const p = markerPole(i % 2 ? 0xffee88 : 0xff4a2a);
      p.position.set(x, world.heightAt(x, z) + 1, z);
      add(p);
    }
  }

  function followMoving(mesh) {
    if (!mesh) return;
    const s = mesh.userData.stop || mesh.userData.base;
    if (!s || !s.moving) return;
    if (s.moving === "steamer") {
      const boats = world.landmarks && world.landmarks.boats;
      const st = boats && boats.find((b) => b.name === "steamer");
      if (st) {
        mesh.position.x = st.position.x;
        mesh.position.z = st.position.z;
        mesh.position.y = s.y != null ? s.y : (st.position.y + 16);
        if (mesh.userData.stop) {
          mesh.userData.stop.x = st.position.x;
          mesh.userData.stop.z = st.position.z;
        }
      }
    }
  }

  function setupRival(m) {
    const start = m.start || { x: 0, y: 40, z: 0 };
    const pts = [new THREE.Vector3(start.x, start.y, start.z)];
    (m.rings || []).forEach((r) => pts.push(new THREE.Vector3(r.x, r.y, r.z)));
    let plen = 0;
    for (let i = 1; i < pts.length; i++) plen += pts[i].distanceTo(pts[i - 1]);
    const dur = (m.timeLimits && m.timeLimits[1]) || 80;
    const mesh = makeRivalCraft();
    mesh.position.copy(pts[0]);
    add(mesh);
    state.rival = { mesh, pts, plen, dur, t: 1.2, finished: false, finishTime: dur };
    state.rivalDelta = 0;
  }

  function tickRival(dt, time) {
    const r = state.rival;
    if (!r) return;
    if (!r.finished) {
      r.t += dt;
      const u = Math.min(0.999, r.t / r.dur);
      let dist = u * r.plen;
      let i = 0;
      while (i < r.pts.length - 2) {
        const seg = r.pts[i + 1].distanceTo(r.pts[i]);
        if (dist <= seg) break;
        dist -= seg;
        i++;
      }
      const a = r.pts[i], b = r.pts[Math.min(i + 1, r.pts.length - 1)];
      const seg = Math.max(0.001, b.distanceTo(a));
      const f = dist / seg;
      r.mesh.position.lerpVectors(a, b, f);
      r.mesh.lookAt(b.x, b.y, b.z);
      if (r.t >= r.dur) {
        r.finished = true;
        r.finishTime = r.dur;
        r.mesh.position.copy(r.pts[r.pts.length - 1]);
      }
    }
  }

  function start(id, craft) {
    clear();
    const m = typeof id === "string" ? getMission(id) : id;
    if (!m) return null;
    state.active = m;
    state.t = 0;
    state.next = 0;
    state.result = null;
    state.message = m.title;

    if (m.start) {
      resetCraft(craft, m.start, m.start.heading, m.plane || craft.id);
      launchCraft(craft, m.start.speed || 40, 0);
    } else if (m.plane && m.plane !== craft.id) {
      resetCraft(craft, craft.spawn, craft.spawn.heading, m.plane);
    }

    if (m.activity === "rings") setupRings(m);
    if (m.activity === "landing") setupLanding(m);
    if (m.activity === "balloons") setupBalloons(m);
    if (m.activity === "photo") setupPhoto(m);
    if (m.activity === "mail") setupMail(m);
    if (m.activity === "storm") setupStorm(m);
    if (m.activity === "night") setupNight(m);
    if (m.activity === "rescue") setupRescue(m);
    return m;
  }

  function setupRings(m) {
    m.rings.forEach((r, i) => {
      const mesh = ringMesh(r.r);
      mesh.position.set(r.x, r.y, r.z);
      mesh.userData.base = { ...r };
      mesh.userData.index = i;
      // face roughly along path
      const n = m.rings[i + 1] || m.rings[i - 1];
      if (n) {
        const dx = (m.rings[Math.min(i + 1, m.rings.length - 1)].x - (m.rings[Math.max(0, i - 1)].x));
        const dz = (m.rings[Math.min(i + 1, m.rings.length - 1)].z - (m.rings[Math.max(0, i - 1)].z));
        mesh.rotation.y = Math.atan2(dx, dz);
      }
      add(mesh);
    });
    if (m.rival) setupRival(m);
  }

  function setupLanding(m) {
    const t = m.target;
    const pole = markerPole(0xffe080);
    pole.position.set(t.x, world.heightAt(t.x, t.z) + 1, t.z);
    add(pole);
    // aim chevrons — two side lights at threshold
    const hdg = t.heading || 0;
    const fx = Math.cos(hdg), fz = Math.sin(hdg);
    const px = -fz, pz = fx;
    for (const s of [-t.wid * 0.5, t.wid * 0.5]) {
      const p = markerPole(0x80ffc0);
      p.position.set(t.x - fx * t.len * 0.4 + px * s, world.heightAt(t.x, t.z) + 1, t.z - fz * t.len * 0.4 + pz * s);
      add(p);
    }
    if (m.flares) {
      for (let i = 0; i < 10; i++) {
        const d = t.len * 0.1 + i * Math.max(22, t.len * 0.08);
        for (const s of [-t.wid * 0.55, t.wid * 0.55]) {
          const col = i % 2 === 0 ? 0xffee88 : 0xff4a2a;
          const p = markerPole(col);
          const x = t.x - fx * d + px * s;
          const z = t.z - fz * d + pz * s;
          p.position.set(x, world.heightAt(x, z) + 1, z);
          add(p);
        }
      }
    }
  }

  function setupBalloons(m) {
    const cols = [0xe06a4f, 0xf2c14e, 0x3aa0d0, 0xd45aaa, 0x3aa86a, 0xf4f0e6];
    const spots = m.spots ? m.spots.slice() : [];
    if (!spots.length) {
      const a = m.area;
      for (let i = 0; i < m.count; i++) {
        const ang = (i / m.count) * Math.PI * 2 + 0.3;
        const rr = a.r * (0.3 + (i * 0.37) % 0.7);
        spots.push([
          a.cx + Math.cos(ang) * rr,
          a.y0 + ((i * 19) % (a.y1 - a.y0)),
          a.cz + Math.sin(ang) * rr,
        ]);
      }
    }
    spots.forEach((s, i) => {
      const b = makeBalloon(cols[i % cols.length]);
      b.position.set(s[0], s[1], s[2]);
      b.userData.home = new THREE.Vector3(s[0], s[1], s[2]);
      b.userData.phase = i;
      b.userData.alive = true;
      add(b);
      state.balloons.push(b);
    });
    state.popped = 0;
  }

  function setupStorm(m) {
    if (m.mode === "rescue") {
      setupRescue(m);
      if (m.target) setupLanding(m);
      if (m.flares) plantFlares(m);
      return;
    }
    state.mailHasBag = false;
    state.mailStops = [];
    (m.stops || []).forEach((s, i) => {
      const ground = world.heightAt(s.x, s.z);
      const y = s.y != null ? s.y : ground + 28;
      const mesh = ringMesh(s.r || 20);
      mesh.traverse((o) => {
        if (o.material && o.material.color && !o.material.transparent) o.material.color.set(0x9ad8ff);
      });
      mesh.position.set(s.x, y, s.z);
      mesh.userData.stop = { ...s, y, r: s.r || 20 };
      mesh.userData.base = { x: s.x, y, z: s.z, r: s.r || 20 };
      mesh.userData.index = i;
      add(mesh);
      state.mailStops.push(mesh);
      const pole = markerPole(0x9ad8ff);
      pole.position.set(s.x, ground + 1, s.z);
      add(pole);
    });
    if (m.target) setupLanding(m);
    if (m.flares) plantFlares(m);
  }

  function setupMail(m) {
    state.mailHasBag = false;
    state.mailStops = [];
    (m.stops || []).forEach((s, i) => {
      const ground = world.heightAt(s.x, s.z);
      const y = s.y != null ? s.y : ground + (s.type === "pickup" ? 18 : 22);
      const mesh = ringMesh(s.r || 18);
      const col = s.type === "pickup" ? 0xffe14a : 0xf0d8a8;
      mesh.traverse((o) => {
        if (o.material && o.material.color && !o.material.transparent) o.material.color.set(col);
      });
      mesh.position.set(s.x, y, s.z);
      mesh.userData.stop = { ...s, y, r: s.r || 18 };
      mesh.userData.base = { x: s.x, y, z: s.z, r: s.r || 18 };
      mesh.userData.index = i;
      add(mesh);
      state.mailStops.push(mesh);
      const pole = markerPole(s.type === "pickup" ? 0xffe14a : 0xc01418);
      pole.position.set(s.x, ground + 1, s.z);
      add(pole);
    });
  }

  function setupNight(m) {
    if (m.mode === "rescue" || (m.stops && m.stops.some((s) => s.type === "raft" || s.type === "mark"))) setupRescue(m);
    else if (m.stops) setupMail(m);
    if (m.target) setupLanding(m);
    if (m.subject) setupPhoto(m);
    if (m.flares && !m.target) plantFlares(m);
  }

  function makeRaft() {
    const g = new THREE.Group();
    const wood = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0xc4a06a, flatShading: true }));
    const tube = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0xe24a22, flatShading: true, emissive: 0x6a1808, emissiveIntensity: 0.25 }));
    const flag = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0xffee66, flatShading: true, emissive: 0xaa8800, emissiveIntensity: 0.35 }));
    const deck = new THREE.Mesh(new THREE.CylinderGeometry(2.8, 2.8, 0.35, 10), wood);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(2.8, 0.45, 6, 12), tube);
    rim.rotation.x = Math.PI / 2;
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 3.2, 5), wood);
    mast.position.y = 1.7;
    const fl = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.8, 0.08), flag);
    fl.position.set(0.6, 2.6, 0);
    g.add(deck, rim, mast, fl);
    g.traverse((o) => { if (o.isMesh) { o.userData.matId = 12; } });
    return g;
  }

  function setupRescue(m) {

    state.mailHasBag = false;
    state.mailStops = [];
    (m.stops || []).forEach((s, i) => {
      const ground = world.heightAt(s.x, s.z);
      const y = s.y != null ? s.y : ground + (s.type === "raft" ? 16 : 26);
      const mesh = ringMesh(s.r || 20);
      const col = s.type === "raft" ? 0xffe14a : (m.mode === "race" ? 0xff7a3a : 0x7ad0ff);
      mesh.traverse((o) => {
        if (o.material && o.material.color && !o.material.transparent) o.material.color.set(col);
      });
      mesh.position.set(s.x, y, s.z);
      mesh.userData.stop = { ...s, y, r: s.r || 20 };
      mesh.userData.base = { x: s.x, y, z: s.z, r: s.r || 20 };
      mesh.userData.index = i;
      add(mesh);
      state.mailStops.push(mesh);
      const pole = markerPole(col);
      pole.position.set(s.x, ground + 1, s.z);
      add(pole);
      if (s.type === "raft") {
        const raft = makeRaft();
        raft.scale.setScalar(2.1);
        raft.position.set(s.x, Math.max(0.6, ground + 0.5), s.z);
        add(raft);
      }
    });
  }

  function setupPhoto(m) {
    const p = markerPole(0x88ddff);
    p.position.set(m.subject.x, m.subject.y, m.subject.z);
    add(p);
    // suggested viewpoint ghost ring
    const r = ringMesh(10);
    r.position.set(m.view.x, m.view.y, m.view.z);
    r.lookAt(m.subject.x, m.subject.y, m.subject.z);
    r.traverse((o) => {
      if (o.material && o.material.color && !o.material.transparent) o.material.color.set(0xffb056);
    });
    add(r);
  }

  function ringWorldPos(mesh, time) {
    const b = mesh.userData.base;
    const p = new THREE.Vector3(b.x, b.y, b.z);
    if (b.moving) {
      const w = Math.sin(time * (b.speed || 0.6) + mesh.userData.index);
      if (b.axis === "x") p.x += w * b.amp;
      else if (b.axis === "z") p.z += w * b.amp;
      else p.y += w * b.amp;
    }
    return p;
  }

  function finish(stars, detail = {}) {
    if (state.result) return;
    state.result = { stars, ...detail, time: state.t, mission: state.active };
    state.starsAwarded = stars;
    if (stars > 0) audio?.play(stars >= 3 ? "star" : "success");
    state.message = stars > 0
      ? `${"★".repeat(stars)}${"☆".repeat(3 - stars)}  ${detail.line || "COMPLETE"}`
      : (detail.line || "FAILED");
  }

  function starsFromTime(m, t) {
    const lim = m.timeLimits || [120, 90, 70];
    if (t <= lim[2]) return 3;
    if (t <= lim[1]) return 2;
    if (t <= lim[0]) return 1;
    return 0;
  }

  function gradeLanding(craft, m) {
    const t = m.target;
    const vDown = Math.max(0, -craft.vspeed);
    const bank = Math.abs(craft.roll);
    const align = Math.abs(wrapAngle(craft.heading - (t.heading || 0)));
    const dx = craft.pos.x - t.x, dz = craft.pos.z - t.z;
    const alongFwdX = Math.cos(t.heading || 0), alongFwdZ = Math.sin(t.heading || 0);
    const along = dx * alongFwdX + dz * alongFwdZ;
    const lat = -dx * alongFwdZ + dz * alongFwdX;
    const centered = Math.abs(lat) <= t.wid * 0.6 && Math.abs(along) <= t.len * 0.55;

    let vScore = vDown < LANDING.perfectVSpeed ? 3 : vDown < LANDING.goodVSpeed ? 2 : vDown < LANDING.roughVSpeed ? 1 : 0;
    let aScore = align < LANDING.alignGood ? 3 : align < LANDING.alignOk ? 2 : 1;
    let cScore = centered ? 3 : (Math.abs(lat) < t.wid && Math.abs(along) < t.len * 0.8) ? 2 : 1;

    let stopOk = true;
    if (t.stopR) {
      const d = Math.hypot(craft.pos.x - t.stopX, craft.pos.z - t.stopZ);
      stopOk = d <= t.stopR;
      if (!stopOk && craft.airspeed < 2) cScore = Math.min(cScore, 1);
    }

    const avg = (vScore + aScore + cScore) / 3;
    const grade = avg >= 2.6 ? "PERFECT" : avg >= 1.8 ? "GOOD" : "ROUGH";
    const stars = grade === "PERFECT" ? 3 : grade === "GOOD" ? 2 : 1;
    const onPad = Math.abs(lat) <= t.wid * 0.9 && Math.abs(along) <= t.len * 0.6;
    const surfaceOk = onPad ||
      (t.type === "runway" && (craft.lastSurface === "runway" || craft.lastSurface === "beach")) ||
      (t.type === "beach" && (craft.lastSurface === "beach" || craft.lastSurface === "runway" || craft.lastSurface === "sand")) ||
      (t.type === "grass" && (craft.lastSurface === "grass" || craft.lastSurface === "runway")) ||
      (t.type === "lagoon" && (craft.lastSurface === "lagoon" || craft.lastSurface === "water" || craft.lastSurface === "beach"));
    return { grade, stars: surfaceOk ? stars : 0, vDown, align, centered, surfaceOk, stopOk, line: surfaceOk ? grade : "WRONG SURFACE" };
  }

  function photoQuality(craft, cam, m) {
    const s = m.subject;
    const to = new THREE.Vector3(s.x - cam.position.x, s.y - cam.position.y, s.z - cam.position.z);
    const dist = to.length();
    to.normalize();
    const fwd = new THREE.Vector3();
    cam.getWorldDirection(fwd);
    const dot = fwd.dot(to);
    const v = m.view;
    let score = 0;
    if (dist >= v.minDist && dist <= v.maxDist) score += 0.45;
    else score += 0.45 * saturate(1 - Math.abs(dist - (v.minDist + v.maxDist) / 2) / v.maxDist);
    if (dot >= v.facingDot) score += 0.55 * saturate((dot - v.facingDot) / (1 - v.facingDot));
    else score += 0.15 * saturate((dot + 0.2) / (v.facingDot + 0.2));
    // height reasonableness
    if (cam.position.y > s.y + 8) score += 0.05;
    return { score: clamp(score, 0, 1), dist, dot };
  }

  function update(dt, time, craft, cam, input) {
    const m = state.active;
    if (!m || state.result) {
      // still animate leftover? 
      return state;
    }
    state.t += dt;
    if (cam) {
      const curRing = (m.activity === "rings") ? state.objects[state.next]
        : (state.mailStops[state.next] || state.objects[state.next]);
      for (const o of state.objects) fadeNearCam(o, cam, o === curRing);
      for (const o of state.mailStops) fadeNearCam(o, cam, o === curRing);
    }

    if (m.activity === "rings") {
      const meshes = state.objects;
      const cur = meshes[state.next];
      if (cur) {
        const p = ringWorldPos(cur, time);
        cur.position.copy(p);
        cur.rotation.z = time * 0.6;
        const tint = (color) => {
          cur.traverse((o) => { if (o.material && o.material.color && o.material.color.set && !o.material.transparent) o.material.color.set(color); });
        };
        tint(0xffc45a);
        const d = craft.pos.distanceTo(p);
        const rad = (cur.userData.base && cur.userData.base.r) || 18;
        if (d < rad + 5.5) {
          state.next++;
          state.ringsPassed++;
          audio?.play("ring");
          feelFX?.burstRing(p);
          tint(0x5a2208);
          cur.visible = false;
          cur.userData._forceHidden = true;
          if (state.next >= meshes.length) {
            if (m.rival && state.rival) {
              const beat = state.t < state.rival.finishTime;
              const margin = state.rival.finishTime - state.t;
              let stars = starsFromTime(m, state.t);
              if (beat && margin >= 2 && state.t <= ((m.timeLimits && m.timeLimits[2]) || state.t)) stars = 3;
              else if (beat) stars = Math.max(stars, 2);
              else if (stars >= 3) stars = 2;
              finish(stars, { line: beat ? ("BEAT RIVAL  " + formatTime(Math.abs(margin))) : ("RIVAL +" + formatTime(Math.abs(margin))) });
            } else {
              const stars = starsFromTime(m, state.t);
              finish(stars, { line: stars ? formatTime(state.t) : "OVER TIME" });
            }
          }
        }
      }
      if (m.rival) {
        tickRival(dt, time);
        const r = state.rival;
        if (r) {
          let L = 0;
          const end = Math.min(state.next + 1, r.pts.length - 1);
          for (let i = 0; i < end; i++) L += r.pts[i + 1].distanceTo(r.pts[i]);
          state.rivalDelta = (L / Math.max(1, r.plen)) * r.dur - state.t;
        }
      }
      // timeout
      const lim = m.timeLimits ? m.timeLimits[0] : 180;
      if (state.t > lim + 8 && !state.result) finish(0, { line: "OVER TIME" });
    }

    if (m.activity === "landing" || (m.activity === "night" && m.target && !m.stops)) {
      if (craft.crashed) finish(0, { line: "CRASHED" });
      else if ((craft.onGround || craft.waterborne) && craft.groundedTime > 0.9 && craft.airspeed < 6) {
        const g = gradeLanding(craft, m);
        state.grade = g.grade;
        finish(g.stars, g);
      } else if (state.t > 90 && !craft.onGround && !craft.waterborne) {
        // still flying after 90s — fail if very far
        const t = m.target;
        if (Math.hypot(craft.pos.x - t.x, craft.pos.z - t.z) > 2000) finish(0, { line: "LEFT AREA" });
      }
    }

    if (m.activity === "balloons") {
      for (const b of state.balloons) {
        if (!b.userData.alive) continue;
        const h = b.userData.home;
        b.position.x = h.x + Math.sin(time * 0.4 + b.userData.phase) * 8;
        b.position.y = h.y + Math.sin(time * 0.7 + b.userData.phase) * 3;
        b.position.z = h.z + Math.cos(time * 0.35 + b.userData.phase) * 8;
        if (craft.pos.distanceTo(b.position) < 14) {
          b.userData.alive = false;
          b.visible = false;
          state.popped++;
          audio?.play("balloon_pop");
        }
      }
      if (state.popped >= state.balloons.length) {
        const lim = m.timeLimit || 90;
        const stars = state.t < lim * 0.6 ? 3 : state.t < lim * 0.8 ? 2 : 1;
        finish(stars, { line: `${state.popped} / ${state.balloons.length}` });
      } else if (state.t > (m.timeLimit || 90)) {
        const frac = state.popped / state.balloons.length;
        const stars = frac >= 0.85 ? 2 : frac >= 0.6 ? 1 : 0;
        finish(stars, { line: `${state.popped} / ${state.balloons.length}` });
      }
    }

    if (m.activity === "mail" || m.activity === "storm" || m.activity === "rescue" || (m.activity === "night" && m.stops)) {
      const cur = state.mailStops[state.next];
      if (cur) {
        followMoving(cur);
        cur.rotation.z = time * 0.55;
        const stop = cur.userData.stop;
        const d = craft.pos.distanceTo(cur.position);
        if (d < stop.r + 6) {
          if (stop.type === "pickup") state.mailHasBag = true;
          state.next++;
          if (stop.type === "drop") {
            audio?.play("success");
            feelFX?.burstMail(cur.position, true);
          } else if (stop.type === "pickup") {
            audio?.play("ui_ok");
            feelFX?.burstMail(cur.position, false);
          } else {
            audio?.play("ring");
            feelFX?.burstRing(cur.position);
          }
          cur.visible = false;
          cur.userData._forceHidden = true;
          if (state.next >= state.mailStops.length && !m.target) {
            const stars = starsFromTime(m, state.t);
            finish(stars, { line: stars ? formatTime(state.t) : "OVER TIME" });
          }
        }
      } else if (m.activity === "storm" && m.target && state.next >= state.mailStops.length) {
        if (craft.crashed) finish(0, { line: "CRASHED" });
        else if ((craft.onGround || craft.waterborne) && craft.groundedTime > 0.9 && craft.airspeed < 8) {
          const g = gradeLanding(craft, m);
          finish(g.stars, g);
        }
      }
      const lim = m.timeLimits ? m.timeLimits[0] : 180;
      if (state.t > lim + 12 && !state.result) finish(0, { line: "OVER TIME" });
    }

    if (m.activity === "photo" || (m.activity === "night" && m.subject)) {
      const q = photoQuality(craft, cam, m);
      state.photoReady = q.score > 0.45 && q.dot > 0.2;
      state.photoScore = q.score;
      if (input.actionPressed && !state.photoTaken) {
        state.photoTaken = true;
        audio?.play("shutter");
        const stars = q.score > 0.82 ? 3 : q.score > 0.6 ? 2 : q.score > 0.4 ? 1 : 0;
        if (stars) audio?.play("photo_ok");
        finish(stars, { line: stars ? "NICE SHOT" : "MISFRAMED", score: q.score, photo: true, subject: m.subject.name });
      } else if (state.t > 120) finish(0, { line: "OVER TIME" });
    }

    if (craft.crashed && m.activity !== "landing" && !state.result) {
      finish(0, { line: "CRASHED" });
    }
    return state;
  }

  function abort() { clear(); }

  function clearDemoRings() {
    const stale = [];
    group.traverse((o) => { if (o.userData && o.userData.demoRing) stale.push(o); });
    stale.forEach((o) => o.parent && o.parent.remove(o));
  }

  function spawnDemoRing(x, y, z, radius = 18, clear = true) {
    if (clear) clearDemoRings();
    const mesh = ringMesh(radius);
    mesh.position.set(x, y, z);
    mesh.lookAt(x, y, z + 40);
    mesh.userData.demoRing = true;
    mesh.userData.base = { x, y, z, r: radius };
    group.add(mesh);
    if (!group.parent) scene.add(group);
    return mesh;
  }

  function spawnDemoChain(rings) {
    clearDemoRings();
    const meshes = [];
    for (let i = 0; i < rings.length; i++) {
      const r = rings[i];
      const mesh = spawnDemoRing(r.x, r.y, r.z, r.r ?? 18, false);
      const n = rings[i + 1] || rings[i - 1] || r;
      mesh.lookAt(n.x, n.y, n.z);
      meshes.push(mesh);
    }
    return meshes;
  }

  function applyRingNight(night) {
    const dark = night > 0.4;
    group.traverse((o) => {
      const rim = o.userData && o.userData.rim;
      const core = o.userData && o.userData.core;
      if (rim && rim.material) {
        rim.material.color.setHex(dark ? 0xd4a84a : 0x6a4810);
        rim.material.opacity = dark ? 0.65 : 0.75;
        rim.userData.baseOp = rim.material.opacity;
      }
      if (core && core.material) {
        core.material.color.setHex(dark ? 0xffd24a : 0xffc20a);
      }
      const glow = o.userData.glow;
      if (glow && glow.material) {
        glow.material.color.setHex(dark ? 0xffe07a : 0xffe07a);
        glow.material.opacity = dark ? 0.48 : 0.38;
        glow.userData.baseOp = glow.material.opacity;
      }
    });
  }
  return { state, group, start, update, clear, abort, photoQuality, getMission, MISSIONS, spawnDemoRing, spawnDemoChain, applyRingNight, setFeelFX };


}
