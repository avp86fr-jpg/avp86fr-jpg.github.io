import * as THREE from "three";
import { MAT, LANDING } from "../core/config.js";
import { retagGeometry, tagMesh, patchMaterialIdAlpha } from "../render/idMaterial.js";
import { clamp, saturate, formatTime, wrapAngle, shortestAngle } from "../core/utils.js";
import { makeBalloon } from "../world/skyprops.js";
import { MISSIONS, getMission } from "./data.js";
import { resetCraft, launchCraft } from "../flight/physics.js";

function ringMesh(radius = 14) {
  const g = new THREE.Group();
  const tube = 1.15;
  const core = new THREE.Mesh(
    retagGeometry(new THREE.TorusGeometry(radius, tube, 10, 32), MAT.RING, 1),
    patchMaterialIdAlpha(new THREE.MeshBasicMaterial({ color: 0xffe14a, toneMapped: false }))
  );
  const rim = new THREE.Mesh(
    retagGeometry(new THREE.TorusGeometry(radius, tube * 1.28, 8, 32), MAT.RING, 1),
    patchMaterialIdAlpha(new THREE.MeshBasicMaterial({ color: 0x1a140c, toneMapped: false, transparent: true, opacity: 0.85, side: THREE.BackSide }))
  );
  g.add(rim, core);
  g.userData.hero = 1;
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

export function createMissionSystem(scene, world, audio) {
  const group = new THREE.Group();
  group.name = "missions";
  scene.add(group);

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
  }

  function add(o) { group.add(o); state.objects.push(o); return o; }

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

  function setupPhoto(m) {
    const p = markerPole(0x88ddff);
    p.position.set(m.subject.x, m.subject.y, m.subject.z);
    add(p);
    // suggested viewpoint ghost ring
    const r = ringMesh(10);
    r.position.set(m.view.x, m.view.y, m.view.z);
    r.lookAt(m.subject.x, m.subject.y, m.subject.z);
    r.material.color.set(0xffb056);
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
          tint(0x5a2208);
          cur.visible = false;
          if (state.next >= meshes.length) {
            const stars = starsFromTime(m, state.t);
            finish(stars, { line: stars ? formatTime(state.t) : "OVER TIME" });
          }
        }
      }
      // timeout
      const lim = m.timeLimits ? m.timeLimits[0] : 180;
      if (state.t > lim + 8 && !state.result) finish(0, { line: "OVER TIME" });
    }

    if (m.activity === "landing") {
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

    if (m.activity === "photo") {
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

  return { state, group, start, update, clear, abort, photoQuality, getMission, MISSIONS, spawnDemoRing, spawnDemoChain };

}
