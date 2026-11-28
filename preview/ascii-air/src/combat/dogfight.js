/** Friendly arcade dogfight — smoke, break-offs, no gore. On-demand meshes so airmail keeps its draw budget. */
import * as THREE from "three";
import { LANDMARKS, MAT } from "../core/config.js";
import { retagGeometry, patchMaterialIdAlpha } from "../render/idMaterial.js";

const HANGAR = LANDMARKS.hangar;
const MAX_BANDITS = 8;
const MAX_TRACERS = 48;
const MAX_SMOKE = 36;
const FWD = new THREE.Vector3();
const TMP = new THREE.Vector3();
const TMP2 = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);
const M4 = new THREE.Matrix4();
const Q = new THREE.Quaternion();
const S = new THREE.Vector3();
const EULER = new THREE.Euler();

function mergeGroup(root) {
  const geos = [];
  const colors = [];
  root.updateMatrixWorld(true);
  root.traverse((o) => {
    if (!o.isMesh || !o.geometry) return;
    const g = o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    if (!g.getAttribute("normal")) g.computeVertexNormals();
    const pos = g.getAttribute("position");
    const col = o.material && o.material.color ? o.material.color : new THREE.Color(0x8a5a32);
    const ca = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      ca[i * 3] = col.r; ca[i * 3 + 1] = col.g; ca[i * 3 + 2] = col.b;
    }
    g.setAttribute("color", new THREE.BufferAttribute(ca, 3));
    geos.push(g);
  });
  // stitch
  let n = 0;
  for (const g of geos) n += g.getAttribute("position").count;
  const pos = new Float32Array(n * 3);
  const nrm = new Float32Array(n * 3);
  const col = new Float32Array(n * 3);
  const idx = [];
  let base = 0;
  for (const g of geos) {
    const p = g.getAttribute("position");
    const nn = g.getAttribute("normal");
    const cc = g.getAttribute("color");
    for (let i = 0; i < p.count; i++) {
      pos[(base + i) * 3] = p.getX(i);
      pos[(base + i) * 3 + 1] = p.getY(i);
      pos[(base + i) * 3 + 2] = p.getZ(i);
      if (nn) {
        nrm[(base + i) * 3] = nn.getX(i);
        nrm[(base + i) * 3 + 1] = nn.getY(i);
        nrm[(base + i) * 3 + 2] = nn.getZ(i);
      }
      if (cc) {
        col[(base + i) * 3] = cc.getX(i);
        col[(base + i) * 3 + 1] = cc.getY(i);
        col[(base + i) * 3 + 2] = cc.getZ(i);
      }
    }
    if (g.index) {
      const ia = g.index.array;
      for (let i = 0; i < ia.length; i++) idx.push(ia[i] + base);
    } else {
      for (let i = 0; i < p.count; i++) idx.push(base + i);
    }
    base += p.count;
    g.dispose();
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("normal", new THREE.BufferAttribute(nrm, 3));
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  retagGeometry(geo, MAT.PLANE, 1);
  return geo;
}

function buildBanditProto(kind = "scout") {
  const g = new THREE.Group();
  const ace = kind === "ace";
  const raider = kind === "raider";
  const bodyCol = ace ? 0x6fb887 : raider ? 0x8a5340 : 0x8a5a32;
  const trimCol = ace ? 0xf0e6c8 : raider ? 0xd43828 : 0xc4a056;
  const rust = new THREE.MeshLambertMaterial({ color: bodyCol });
  const gold = new THREE.MeshLambertMaterial({ color: trimCol });
  const dark = new THREE.MeshLambertMaterial({ color: 0x2a2420 });
  const cream = new THREE.MeshLambertMaterial({ color: 0xefe6d2 });
  const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.rotation.set(rx, ry, rz);
    m.scale.set(sx, sy, sz);
    g.add(m);
  };
  // Builder space: +Z nose, later heading aims -Z world via quat
  if (raider) {
    // Heavier, blunt-nosed sesquiplane — a distinct silhouette from the scouts.
    add(new THREE.CylinderGeometry(0.55, 0.38, 4.2, 8), rust, 0, 0.22, 0.1, Math.PI / 2);
    add(new THREE.SphereGeometry(0.55, 8, 6), rust, 0, 0.22, 2.15);
    add(new THREE.ConeGeometry(0.38, 1.4, 8), rust, 0, 0.24, -2.6, -Math.PI / 2);
    add(new THREE.BoxGeometry(8.4, 0.10, 1.45), rust, 0, 1.35, 0.15);
    add(new THREE.BoxGeometry(4.6, 0.08, 1.05), rust, 0, -0.05, -0.15);
    add(new THREE.BoxGeometry(0.9, 0.09, 1.35), gold, 3.6, 1.42, 0.15);
    add(new THREE.BoxGeometry(0.9, 0.09, 1.35), gold, -3.6, 1.42, 0.15);
    for (const s of [1, -1]) {
      add(new THREE.BoxGeometry(0.09, 1.35, 0.09), dark, s * 1.8, 0.65, 0.2);
      add(new THREE.BoxGeometry(0.09, 1.35, 0.09), dark, s * 3.1, 0.65, 0.2);
    }
    add(new THREE.BoxGeometry(2.6, 0.08, 0.9), rust, 0, 0.28, -2.7);
    add(new THREE.BoxGeometry(0.12, 1.35, 0.85), gold, 0, 0.95, -2.65);
    add(new THREE.CylinderGeometry(0.62, 0.62, 0.38, 10), dark, 0, 0.22, 2.4, Math.PI / 2);
  } else if (ace) {
    // Baron Rook — longer, cream belly, forked tail, gold chevrons.
    add(new THREE.CylinderGeometry(0.46, 0.26, 4.2, 10), rust, 0, 0.22, 0.05, Math.PI / 2);
    add(new THREE.SphereGeometry(0.46, 8, 6), rust, 0, 0.22, 2.1);
    add(new THREE.ConeGeometry(0.26, 1.8, 8), rust, 0, 0.24, -2.85, -Math.PI / 2);
    add(new THREE.BoxGeometry(0.42, 0.08, 4.4), cream, 0, -0.08, 0.05);
    add(new THREE.BoxGeometry(7.4, 0.08, 1.2), cream, 0, 1.22, 0.25);
    add(new THREE.BoxGeometry(6.6, 0.07, 1.05), cream, 0, -0.02, -0.05);
    add(new THREE.BoxGeometry(0.85, 0.08, 1.15), gold, 3.15, 1.30, 0.25);
    add(new THREE.BoxGeometry(0.85, 0.08, 1.15), gold, -3.15, 1.30, 0.25);
    add(new THREE.BoxGeometry(0.55, 0.07, 0.55), gold, 1.6, 1.30, 0.25);
    add(new THREE.BoxGeometry(0.55, 0.07, 0.55), gold, -1.6, 1.30, 0.25);
    for (const s of [1, -1]) {
      add(new THREE.BoxGeometry(0.08, 1.22, 0.08), dark, s * 1.7, 0.6, 0.2);
      add(new THREE.BoxGeometry(0.08, 1.22, 0.08), dark, s * 2.7, 0.6, 0.2);
    }
    add(new THREE.BoxGeometry(1.2, 0.07, 0.85), cream,  1.5, 0.26, -2.85, 0,  0.4, 0);
    add(new THREE.BoxGeometry(1.2, 0.07, 0.85), cream, -1.5, 0.26, -2.85, 0, -0.4, 0);
    add(new THREE.BoxGeometry(0.10, 1.15, 0.7), gold, 0, 0.9, -2.85);
    add(new THREE.CylinderGeometry(0.55, 0.55, 0.32, 10), dark, 0, 0.22, 2.35, Math.PI / 2);
  } else {
    add(new THREE.CylinderGeometry(0.42, 0.28, 3.4, 8), rust, 0, 0.2, 0, Math.PI / 2);
    add(new THREE.SphereGeometry(0.42, 8, 6), rust, 0, 0.2, 1.7);
    add(new THREE.ConeGeometry(0.28, 1.6, 8), rust, 0, 0.22, -2.4, -Math.PI / 2);
    add(new THREE.BoxGeometry(6.8, 0.08, 1.15), rust, 0, 1.15, 0.2);
    add(new THREE.BoxGeometry(6.2, 0.07, 1.0), rust, 0, -0.05, -0.1);
    add(new THREE.BoxGeometry(0.7, 0.08, 1.05), gold, 2.9, 1.22, 0.2);
    add(new THREE.BoxGeometry(0.7, 0.08, 1.05), gold, -2.9, 1.22, 0.2);
    add(new THREE.BoxGeometry(0.08, 1.15, 0.08), dark, 1.6, 0.55, 0.15);
    add(new THREE.BoxGeometry(0.08, 1.15, 0.08), dark, -1.6, 0.55, 0.15);
    add(new THREE.BoxGeometry(0.08, 1.15, 0.08), dark, 2.5, 0.55, 0.15);
    add(new THREE.BoxGeometry(0.08, 1.15, 0.08), dark, -2.5, 0.55, 0.15);
    add(new THREE.BoxGeometry(2.2, 0.07, 0.7), rust, 0, 0.25, -2.5);
    add(new THREE.BoxGeometry(0.08, 0.95, 0.6), gold, 0, 0.8, -2.45);
    add(new THREE.CylinderGeometry(0.5, 0.5, 0.3, 10), dark, 0, 0.2, 1.95, Math.PI / 2);
  }
  const geo = mergeGroup(g);
  rust.dispose(); gold.dispose(); dark.dispose(); cream.dispose();
  return geo;
}

function buildEscortProto() {
  const g = new THREE.Group();
  const red = new THREE.MeshLambertMaterial({ color: 0xc01418 });
  const cream = new THREE.MeshLambertMaterial({ color: 0xf0e6d2 });
  const dark = new THREE.MeshLambertMaterial({ color: 0x2a2420 });
  const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.rotation.set(rx, ry, rz);
    g.add(m);
  };
  // +Z nose, mail-red fuselage, cream wings — reads as a friendly crate, not a Gale bandit.
  add(new THREE.CylinderGeometry(0.40, 0.26, 3.6, 8), red, 0, 0.18, 0, Math.PI / 2);
  add(new THREE.SphereGeometry(0.40, 8, 6), red, 0, 0.18, 1.8);
  add(new THREE.ConeGeometry(0.26, 1.3, 8), red, 0, 0.2, -2.4, -Math.PI / 2);
  add(new THREE.BoxGeometry(6.4, 0.09, 1.2), cream, 0, 1.05, 0.15);
  add(new THREE.BoxGeometry(5.6, 0.08, 1.05), cream, 0, -0.02, -0.1);
  add(new THREE.BoxGeometry(0.7, 0.08, 1.1), red, 2.7, 1.12, 0.15);
  add(new THREE.BoxGeometry(0.7, 0.08, 1.1), red, -2.7, 1.12, 0.15);
  for (const s of [1, -1]) {
    add(new THREE.BoxGeometry(0.09, 1.05, 0.09), dark, s * 1.55, 0.52, 0.15);
    add(new THREE.BoxGeometry(0.09, 1.05, 0.09), dark, s * 2.45, 0.52, 0.15);
  }
  add(new THREE.BoxGeometry(2.0, 0.07, 0.7), cream, 0, 0.22, -2.45);
  add(new THREE.BoxGeometry(0.09, 0.9, 0.55), red, 0, 0.72, -2.4);
  add(new THREE.CylinderGeometry(0.48, 0.48, 0.28, 10), dark, 0, 0.18, 2.05, Math.PI / 2);
  add(new THREE.BoxGeometry(0.7, 0.45, 0.9), cream, 0, 0.55, 0.15); // bag / cabin
  const geo = mergeGroup(g);
  red.dispose(); cream.dispose(); dark.dispose();
  return geo;
}

function headingToQuat(heading, pitch, roll, out) {
  // Same convention as the player craft: yaw = -heading - PI/2, forward is -Z.
  EULER.set(pitch || 0, -heading - Math.PI / 2, roll || 0, "YXZ");
  out.setFromEuler(EULER);
  return out;
}

function forwardFromQuat(q, out) {
  out.set(0, 0, -1).applyQuaternion(q);
  return out;
}

export function createCombat(scene) {
  const group = new THREE.Group();
  group.name = "combat";
  group.visible = false;
  scene.add(group);

  const banditGeo = buildBanditProto("scout");
  const raiderGeo = buildBanditProto("raider");
  const bossGeo = buildBanditProto("ace");
  const banditMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: false }));
  const inst = new THREE.InstancedMesh(banditGeo, banditMat, MAX_BANDITS);
  inst.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  inst.count = 0;
  inst.frustumCulled = false;
  inst.castShadow = false;
  group.add(inst);
  const raiderInst = new THREE.InstancedMesh(raiderGeo, banditMat, MAX_BANDITS);
  raiderInst.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  raiderInst.count = 0;
  raiderInst.frustumCulled = false;
  raiderInst.visible = false;
  group.add(raiderInst);

  const outlineMat = patchMaterialIdAlpha(new THREE.MeshBasicMaterial({
    color: 0x1a140c, side: THREE.BackSide, toneMapped: false, depthWrite: false,
  }));
  const outline = new THREE.InstancedMesh(banditGeo, outlineMat, MAX_BANDITS);
  outline.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  outline.count = 0;
  outline.frustumCulled = false;
  outline.name = "bandit-outline";
  group.add(outline);
  const raiderOutline = new THREE.InstancedMesh(raiderGeo, outlineMat, MAX_BANDITS);
  raiderOutline.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  raiderOutline.count = 0;
  raiderOutline.frustumCulled = false;
  raiderOutline.visible = false;
  group.add(raiderOutline);
  const bossOutlineMat = patchMaterialIdAlpha(new THREE.MeshBasicMaterial({
    color: 0x1a140c, side: THREE.BackSide, toneMapped: false, depthWrite: false,
  }));
  const bossOutline = new THREE.Mesh(bossGeo, bossOutlineMat);
  bossOutline.scale.setScalar(1.22 * 1.03);
  bossOutline.visible = false;
  group.add(bossOutline);

  const bossMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ vertexColors: true }));
  const bossMesh = new THREE.Mesh(bossGeo, bossMat);
  bossMesh.visible = false;
  bossMesh.scale.setScalar(1.22);
  group.add(bossMesh);

  const escortGeo = buildEscortProto();
  const escortMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ vertexColors: true }));
  const escortMesh = new THREE.Mesh(escortGeo, escortMat);
  escortMesh.name = "escort-mail";
  escortMesh.visible = false;
  escortMesh.scale.setScalar(1.08);
  group.add(escortMesh);

  const tracerGeo = new THREE.BoxGeometry(0.08, 0.08, 4.2);
  const tracerMat = patchMaterialIdAlpha(new THREE.MeshBasicMaterial({ color: 0xffe29a, toneMapped: false }));
  const tracersMesh = new THREE.InstancedMesh(tracerGeo, tracerMat, MAX_TRACERS);
  tracersMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  tracersMesh.count = 0;
  tracersMesh.frustumCulled = false;
  group.add(tracersMesh);

  const smokeGeo = new THREE.SphereGeometry(1.1, 6, 5);
  const smokeMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
    color: 0x9a9488, transparent: true, opacity: 0.45, depthWrite: false,
  }));
  const smokeMesh = new THREE.InstancedMesh(smokeGeo, smokeMat, MAX_SMOKE);
  smokeMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  smokeMesh.count = 0;
  smokeMesh.frustumCulled = false;
  group.add(smokeMesh);

  let active = false;
  let mission = null;
  let health = 100;
  let cool = 0;
  let enemyCool = 0;
  let wave = 0;
  let waveWait = 0;
  let message = "";
  let msgT = 0;
  let done = null;
  let t = 0;
  let hitFlash = 0;
  const events = { fired: false, hits: 0, broke: null, playerHit: false, banter: null };
  let banter = "";
  let banterT = 0;
  let gunMul = 1;
  let _cam = null;
  let escort = null;
  const enemies = [];
  const tracers = [];
  const smokes = [];

  function hideAllInstances() {
    escortMesh.visible = false;
    inst.count = 0;
    outline.count = 0;
    tracersMesh.count = 0;
    smokeMesh.count = 0;
    inst.instanceMatrix.needsUpdate = true;
    outline.instanceMatrix.needsUpdate = true;
    tracersMesh.instanceMatrix.needsUpdate = true;
    smokeMesh.instanceMatrix.needsUpdate = true;
    bossMesh.visible = false;
  }

  function spawnEnemy(spec) {
    const e = {
      live: true,
      boss: !!spec.boss,
      kind: spec.boss ? "ace" : (spec.kind || "scout"),
      hp: spec.boss ? 90 : (spec.kind === "raider" ? 48 : 32),
      max: spec.boss ? 90 : (spec.kind === "raider" ? 48 : 32),
      x: spec.x, y: spec.y, z: spec.z,
      heading: spec.heading || 0,
      pitch: 0,
      roll: 0,
      speed: spec.speed || (spec.boss ? 58 : (spec.kind === "raider" ? 44 : 52)),
      state: "chase",
      stateT: 0,
      slot: enemies.length,
    };
    enemies.push(e);
    return e;
  }

  function spawnWave(list, craft) {
    const origin = craft ? craft.pos : { x: 80, y: 90, z: -1280 };
    const hdg = craft ? craft.heading : 0;
    const fx = Math.cos(hdg), fz = Math.sin(hdg);
    list.forEach((s, i) => {
      const side = (i % 2 === 0 ? 1 : -1) * (40 + i * 18);
      const ahead = s.ahead != null ? s.ahead : 220 + i * 30;
      spawnEnemy({
        boss: !!s.boss,
        kind: s.kind,
        x: s.x != null ? s.x : origin.x + fx * ahead + (-fz) * side,
        y: s.y != null ? s.y : (origin.y || 90) + 8 + (i % 3) * 10,
        z: s.z != null ? s.z : origin.z + fz * ahead + fx * side,
        heading: s.heading != null ? s.heading : hdg + Math.PI + (i - 1) * 0.15,
        speed: s.speed,
      });
    });
  }

  function start(m, craft) {
    end();
    mission = m;
    active = true;
    group.visible = true;
    health = 100;
    cool = 0;
    enemyCool = 0.8;
    wave = 0;
    waveWait = 0;
    message = m.title || "DEFEND THE MAIL";
    msgT = 2.4;
    done = null;
    t = 0;
    hitFlash = 0;
    events.fired = false; events.hits = 0; events.broke = null; events.playerHit = false;
    enemies.length = 0;
    tracers.length = 0;
    smokes.length = 0;
    const waves = m.waves || [{ n: m.bandits || 2 }];
    const first = waves[0];
    const list = first.units || Array.from({ length: first.n || 2 }, (_, i) => ({ boss: !!first.boss && i === 0, kind: first.kind }));
    if (first.boss && !list.some((u) => u.boss)) list[0] = { ...list[0], boss: true };
    spawnWave(list, craft);
    escort = null;
    if (m.escort) {
      escort = {
        live: true,
        hp: 90,
        max: 90,
        x: 90, y: 92, z: -1188,
        heading: Math.atan2(-1168 - (-1188), -20 - 90),
        pitch: 0,
        roll: 0,
        speed: 26,
        pathI: 0,
        progress: 0,
        path: [
          { x: 90, y: 92, z: -1188 },
          { x: -20, y: 98, z: -1168 },
          { x: -170, y: 104, z: -1210 },
          { x: -280, y: 112, z: -1360 },
          { x: -380, y: 120, z: -1540 },
        ],
      };
      message = "STAY WITH THE MAIL PLANE";
      msgT = 2.6;
    }
    syncMeshes();
    say(m.escort ? "PIP: Stay between the bag and the scouts." : "PIP: I have your wing.");
    gunMul = (craft && craft.upgrades && craft.upgrades.guns) ? 1.28 : 1;
    return getState();
  }

  function say(line) {
    if (banterT > 0.4 && banter) return;
    banter = line;
    banterT = 2.4;
    events.banter = line;
  }

  function end() {
    active = false;
    mission = null;
    group.visible = false;
    enemies.length = 0;
    tracers.length = 0;
    smokes.length = 0;
    escort = null;
    hideAllInstances();
    done = null;
  }

  function living() {
    return enemies.filter((e) => e.live);
  }

  function nearest(px, py, pz, pred) {
    let best = null, bd = 1e9;
    for (const e of enemies) {
      if (!e.live) continue;
      if (pred && !pred(e)) continue;
      const d = Math.hypot(e.x - px, e.y - py, e.z - pz);
      if (d < bd) { bd = d; best = e; }
    }
    return best;
  }

  function firePlayer(craft, input) {
    if (cool > 0) return;
    if (!(input && (input.fireHeld || input.fire))) return;
    const q = craft.quat;
    forwardFromQuat(q, FWD);
    // Aim assist — gentle pull if a bandit sits in a tight cone
    const aim = nearest(craft.pos.x, craft.pos.y, craft.pos.z);
    if (aim) {
      TMP.set(aim.x - craft.pos.x, aim.y - craft.pos.y, aim.z - craft.pos.z);
      const dist = TMP.length() || 1;
      TMP.multiplyScalar(1 / dist);
      const ang = Math.acos(Math.min(1, Math.max(-1, FWD.dot(TMP))));
      if (ang < 18 * Math.PI / 180 && dist < 280) {
        FWD.lerp(TMP, 0.42).normalize();
      }
    }
    cool = gunMul > 1 ? 0.08 : 0.11;
    events.fired = true;
    const muzzle = TMP2.copy(craft.pos).addScaledVector(FWD, 6);
    muzzle.y += 0.4;
    spawnTracer(muzzle.x, muzzle.y, muzzle.z, FWD.x, FWD.y, FWD.z, 220, "player");
    spawnTracer(muzzle.x + FWD.z * 0.4, muzzle.y, muzzle.z - FWD.x * 0.4, FWD.x, FWD.y, FWD.z, 220, "player");
    // Hits — soft "break off", never graphic
    for (const e of enemies) {
      if (!e.live) continue;
      TMP.set(e.x - muzzle.x, e.y - muzzle.y, e.z - muzzle.z);
      const along = TMP.dot(FWD);
      if (along < 4 || along > 280) continue;
      const close = TMP.lengthSq() - along * along;
      if (close < 4.2 * 4.2) {
        e.hp -= gunMul > 1 ? 14 : 11;
        events.hits++;
        puff(e.x, e.y, e.z, 0.7);
        if (e.hp <= 0) {
          e.state = "flee";
          e.stateT = 0;
          e.hp = 0;
          message = e.boss ? "BARON ROOK BREAKS OFF" : "BANDIT BREAKS OFF";
          msgT = 2.2;
          events.broke = e.boss ? "boss" : "bandit";
          say(e.boss ? "PIP: The Baron is trailing smoke!" : "PIP: He's breaking — let him go.");
        } else if (e.state === "chase") {
          e.state = "break";
          e.stateT = 0;
        }
      }
    }
  }

  function spawnTracer(x, y, z, dx, dy, dz, speed, who) {
    if (tracers.length >= MAX_TRACERS) tracers.shift();
    const len = Math.hypot(dx, dy, dz) || 1;
    tracers.push({
      x, y, z,
      vx: dx / len * speed, vy: dy / len * speed, vz: dz / len * speed,
      life: 0.55, who,
    });
  }

  function puff(x, y, z, scale) {
    if (smokes.length >= MAX_SMOKE) smokes.shift();
    smokes.push({ x, y, z, life: 1.4, age: 0, scale: scale || 1, vy: 2.5 });
  }

  function steerToward(e, tx, ty, tz, dt, turn) {
    const dx = tx - e.x, dz = tz - e.z;
    const want = Math.atan2(dz, dx);
    let d = want - e.heading;
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    const max = (turn || 1.4) * dt;
    e.heading += Math.max(-max, Math.min(max, d));
    const wantP = Math.atan2(ty - e.y, Math.hypot(dx, dz) || 1);
    e.pitch += Math.max(-0.8 * dt, Math.min(0.8 * dt, wantP - e.pitch));
    e.roll = Math.max(-0.7, Math.min(0.7, d * 1.4));
  }

  function tickAI(dt, craft) {
    const px = craft.pos.x, py = craft.pos.y, pz = craft.pos.z;
    forwardFromQuat(craft.quat, FWD);
    for (const e of enemies) {
      if (!e.live) continue;
      e.stateT += dt;
      const huntEscort = !!(escort && escort.live && !e.boss && (e.slot % 2 === 0));
      const tx = huntEscort ? escort.x : px;
      const ty = huntEscort ? escort.y : py;
      const tz = huntEscort ? escort.z : pz;
      const dx = tx - e.x, dy = ty - e.y, dz = tz - e.z;
      const dist = Math.hypot(dx, dy, dz);
      if (e.state === "chase") {
        const lead = 0.7 + (e.boss ? 0.25 : 0);
        if (huntEscort) steerToward(e, tx, ty + 2, tz, dt, 1.25);
        else steerToward(e, px + FWD.x * 18 * lead, py + 2, pz + FWD.z * 18 * lead, dt, e.boss ? 1.55 : 1.35);
        headingToQuat(e.heading, e.pitch, e.roll, Q);
        forwardFromQuat(Q, TMP);
        TMP2.set(dx, dy, dz).normalize();
        const ang = Math.acos(Math.min(1, Math.max(-1, TMP.dot(TMP2))));
        if (dist < 170 && ang < 0.22 && enemyCool <= 0) {
          spawnTracer(e.x, e.y, e.z, TMP.x, TMP.y, TMP.z, 200, "enemy");
          enemyCool = e.boss ? 0.28 : (huntEscort ? 0.85 : 0.55);
          if (ang < 0.14 && dist < 140) {
            if (huntEscort) {
              escort.hp = Math.max(0, escort.hp - 4);
              puff(escort.x, escort.y, escort.z, 0.8);
              message = "THE MAIL PLANE IS HIT";
              msgT = 1.2;
              say("PIP: They're on the bag!");
              if (escort.hp <= 0) {
                escort.live = false;
                escort.hp = 0;
                message = "THE MAIL WAS FORCED DOWN";
                msgT = 2.4;
              }
            } else {
              health = Math.max(0, health - (e.boss ? 8 : 6));
              hitFlash = 0.35;
              events.playerHit = true;
              message = "HIT — BREAK OFF";
              msgT = 1.1;
              say("PIP: Shake him, I am with you.");
            }
          }
        }
        if (e.hp / e.max < 0.32) { e.state = "flee"; e.stateT = 0; }
        else if (e.stateT > 2.3 + (e.slot % 3) * 0.6) {
          const pick = (e.slot + Math.floor(t * 3) + Math.floor(e.stateT)) % 5;
          e.state = pick === 0 ? "yo-yo" : pick === 1 ? "scissor" : pick === 2 ? "split" : "chase";
          e.stateT = 0;
        }
      } else if (e.state === "yo-yo") {
        steerToward(e, px + 8, py + 58, pz - 8, dt, 1.55);
        e.pitch = Math.min(0.55, e.pitch + 0.45 * dt);
        if (e.stateT > 1.05) { e.state = "dive"; e.stateT = 0; }
      } else if (e.state === "dive") {
        steerToward(e, px, py - 16, pz, dt, 1.75);
        e.pitch = Math.max(-0.52, e.pitch - 0.55 * dt);
        if (e.stateT > 1.35) { e.state = "chase"; e.stateT = 0; }
      } else if (e.state === "scissor") {
        e.heading += Math.sin(e.stateT * 4.2) * 2.8 * dt * (e.slot % 2 ? 1 : -1);
        e.roll = Math.sin(e.stateT * 4.2) * 0.85;
        steerToward(e, px, py + 8, pz, dt, 0.65);
        if (e.stateT > 2.15) { e.state = "chase"; e.stateT = 0; }
      } else if (e.state === "split") {
        e.heading += (e.slot % 2 ? 1 : -1) * 1.7 * dt;
        e.pitch = e.stateT < 0.45 ? Math.min(0.42, e.pitch + 0.75 * dt) : Math.max(-0.48, e.pitch - 0.85 * dt);
        if (e.stateT > 1.75) { e.state = "chase"; e.stateT = 0; }
      } else if (e.state === "break") {
        e.heading += (e.slot % 2 ? 1 : -1) * 2.1 * dt;
        e.pitch = Math.max(-0.25, e.pitch - 0.15 * dt);
        e.roll = (e.slot % 2 ? 1 : -1) * 0.7;
        if (e.stateT > 1.8) { e.state = e.hp / e.max < 0.32 ? "flee" : "chase"; e.stateT = 0; }
      } else if (e.state === "flee") {
        steerToward(e, e.x - dx * 2, e.y + 40, e.z - dz * 2, dt, 1.8);
        e.speed = Math.min(76, e.speed + 8 * dt);
        if (e.stateT > 0.2) puff(e.x, e.y - 0.6, e.z, e.boss ? 1.3 : 0.9);
        if (e.stateT > 3.2 || dist > 520) {
          e.live = false;
        }
      }
      const fx = Math.cos(e.heading), fz = Math.sin(e.heading);
      e.x += fx * e.speed * dt;
      e.z += fz * e.speed * dt;
      e.y += Math.sin(e.pitch) * e.speed * dt;
      if (e.y < 28) { e.y = 28; e.pitch = Math.max(e.pitch, 0.05); }
      if (e.y > 280) { e.y = 280; e.pitch = Math.min(e.pitch, 0); }
    }
  }

  function tickTracers(dt) {
    for (let i = tracers.length - 1; i >= 0; i--) {
      const tr = tracers[i];
      tr.x += tr.vx * dt; tr.y += tr.vy * dt; tr.z += tr.vz * dt;
      tr.life -= dt;
      if (tr.life <= 0) tracers.splice(i, 1);
    }
  }

  function tickSmoke(dt) {
    for (let i = smokes.length - 1; i >= 0; i--) {
      const s = smokes[i];
      s.age += dt;
      s.y += s.vy * dt;
      s.life -= dt;
      if (s.life <= 0) smokes.splice(i, 1);
    }
    // Trail for fleeing bandits already puffed in AI
  }

  function syncMeshes() {
    let n = 0, nr = 0;
    let boss = null;
    for (const e of enemies) {
      if (!e.live) continue;
      headingToQuat(e.heading, e.pitch, e.roll, Q);
      if (e.boss) {
        boss = e;
        continue;
      }
      const raider = e.kind === "raider";
      const slot = raider ? nr : n;
      const mesh = raider ? raiderInst : inst;
      const ink = raider ? raiderOutline : outline;
      const bodyS = raider ? 1.12 : 1;
      M4.compose(TMP.set(e.x, e.y, e.z), Q, S.set(bodyS, bodyS, bodyS));
      mesh.setMatrixAt(slot, M4);
      let inkS = bodyS * 1.03;
      if (_cam) {
        const d = Math.hypot(_cam.position.x - e.x, _cam.position.y - e.y, _cam.position.z - e.z);
        if (d < 22 || d > 180) inkS = 0.001;
      }
      M4.compose(TMP.set(e.x, e.y, e.z), Q, S.set(inkS, inkS, inkS));
      ink.setMatrixAt(slot, M4);
      if (raider) nr++; else n++;
    }
    inst.count = n;
    outline.count = n;
    raiderInst.count = nr;
    raiderOutline.count = nr;
    raiderInst.visible = nr > 0;
    raiderOutline.visible = nr > 0;
    inst.instanceMatrix.needsUpdate = true;
    outline.instanceMatrix.needsUpdate = true;
    raiderInst.instanceMatrix.needsUpdate = true;
    raiderOutline.instanceMatrix.needsUpdate = true;
    if (boss) {
      headingToQuat(boss.heading, boss.pitch, boss.roll, Q);
      bossMesh.visible = true;
      bossMesh.position.set(boss.x, boss.y, boss.z);
      bossMesh.quaternion.copy(Q);
      let showInk = true;
      if (_cam) {
        const d = Math.hypot(_cam.position.x - boss.x, _cam.position.y - boss.y, _cam.position.z - boss.z);
        showInk = d >= 22 && d <= 180;
      }
      bossOutline.visible = showInk;
      bossOutline.position.set(boss.x, boss.y, boss.z);
      bossOutline.quaternion.copy(Q);
    } else {
      bossMesh.visible = false;
      bossOutline.visible = false;
    }
    if (escort) {
      headingToQuat(escort.heading, escort.pitch, escort.roll, Q);
      escortMesh.visible = !!escort.live || escort.y > 14;
      escortMesh.position.set(escort.x, escort.y, escort.z);
      escortMesh.quaternion.copy(Q);
    } else {
      escortMesh.visible = false;
    }

    let tn = 0;
    for (const tr of tracers) {
      const spd = Math.hypot(tr.vx, tr.vy, tr.vz) || 1;
      Q.setFromUnitVectors(UP, TMP.set(tr.vx / spd, tr.vy / spd, tr.vz / spd)); // will fix — tracers along Z
      // Orient box's +Z along velocity
      M4.lookAt(TMP.set(tr.x, tr.y, tr.z), TMP2.set(tr.x + tr.vx, tr.y + tr.vy, tr.z + tr.vz), UP);
      M4.setPosition(tr.x, tr.y, tr.z);
      tracersMesh.setMatrixAt(tn++, M4);
    }
    tracersMesh.count = tn;
    tracersMesh.instanceMatrix.needsUpdate = true;

    let sn = 0;
    for (const s of smokes) {
      const k = Math.max(0.3, s.scale * (0.7 + s.age * 0.9));
      M4.compose(TMP.set(s.x, s.y, s.z), Q.set(0, 0, 0, 1), S.set(k, k, k));
      smokeMesh.setMatrixAt(sn++, M4);
    }
    smokeMesh.count = sn;
    smokeMesh.instanceMatrix.needsUpdate = true;
  }

  function tickEscort(dt) {
    if (!escort) return;
    headingToQuat(escort.heading, escort.pitch, escort.roll, Q);
    escortMesh.position.set(escort.x, escort.y, escort.z);
    escortMesh.quaternion.copy(Q);
    escortMesh.visible = !!escort.live;
    if (!escort.live) {
      // Settle toward the water without a crash spectacle
      escort.y = Math.max(14, escort.y - 8 * dt);
      escort.pitch = Math.max(-0.35, escort.pitch - 0.2 * dt);
      return;
    }
    const path = escort.path;
    const i = Math.min(escort.pathI, path.length - 1);
    const a = path[i];
    const b = path[Math.min(i + 1, path.length - 1)];
    steerToward(escort, b.x, b.y, b.z, dt, 0.85);
    const fx = Math.cos(escort.heading), fz = Math.sin(escort.heading);
    escort.x += fx * escort.speed * dt;
    escort.z += fz * escort.speed * dt;
    escort.y += Math.sin(escort.pitch) * escort.speed * dt;
    const d = Math.hypot(escort.x - b.x, escort.z - b.z);
    if (d < 52 && escort.pathI < path.length - 1) escort.pathI += 1;
    // 0..1 along the remaining polyline
    let total = 0, remain = 0;
    for (let k = 0; k < path.length - 1; k++) {
      const leg = Math.hypot(path[k + 1].x - path[k].x, path[k + 1].z - path[k].z);
      total += leg;
      if (k > escort.pathI) remain += leg;
      else if (k === escort.pathI) remain += Math.hypot(escort.x - path[k + 1].x, escort.z - path[k + 1].z);
    }
    escort.progress = total > 0 ? Math.max(0, Math.min(1, 1 - remain / total)) : 1;
    if (escort.progress >= 0.99) {
      escort.progress = 1;
      escort.speed = Math.max(18, escort.speed - 4 * dt);
    }
  }

  function maybeNextWave(craft) {
    if (living().length) return;
    const waves = mission.waves || [{ n: mission.bandits || 2 }];
    if (wave + 1 < waves.length) {
      if (waveWait <= 0) {
        waveWait = 2.2;
        message = "ANOTHER FLIGHT INBOUND";
        msgT = 2.0;
      }
      return;
    }
    if (escort && escort.live && escort.progress < 1) return;
    if (escort && !escort.live) {
      if (!done) done = { stars: 0, line: "BAG LOST" };
      return;
    }
    if (!done) {
      const stars = health > 70 && t < ((mission.timeLimits && mission.timeLimits[2]) || 90) ? 3
        : health > 40 && t < ((mission.timeLimits && mission.timeLimits[1]) || 140) ? 2
        : 1;
      const line = escort
        ? "BAG IS CLEAR OF THE CAPE"
        : (mission.boss || (mission.waves && mission.waves.some((w) => w.boss))
          ? "THE SKY IS CLEAR"
          : "MAIL IS SAFE");
      done = { stars, line };
    }
  }

  function update(dt, craft, input, camera) {
    if (camera) _cam = camera;
    if (!active || done) return getState();
    events.fired = false; events.hits = 0; events.broke = null; events.playerHit = false; events.banter = null;
    t += dt;
    if (banterT > 0) banterT -= dt;
    if (banterT <= 0) banter = "";
    cool = Math.max(0, cool - dt);
    enemyCool = Math.max(0, enemyCool - dt);
    hitFlash = Math.max(0, hitFlash - dt);
    if (msgT > 0) msgT -= dt;
    // Repair on the hangar apron — low and slow
    const hd = Math.hypot((craft.pos.x - HANGAR.x), (craft.pos.z - HANGAR.z));
    const alt = craft.pos.y - (craft.altitude != null ? (craft.pos.y - (craft.altitude || 0)) : 6);
    const low = craft.pos.y < 22 || (craft.onGround);
    if (hd < 42 && low && health < 100) {
      health = Math.min(100, health + 12 * dt);
      message = "REPAIRING";
      msgT = 0.3;
    }
    firePlayer(craft, input);
    tickAI(dt, craft);
    tickEscort(dt);
    tickTracers(dt);
    tickSmoke(dt);
    if (escort && !escort.live && !done) {
      done = { stars: 0, line: "BAG LOST" };
      message = "THE MAIL WAS FORCED DOWN";
      msgT = 2.4;
    }
    if (waveWait > 0) {
      waveWait -= dt;
      if (waveWait <= 0) {
        wave += 1;
        const waves = mission.waves || [];
        const w = waves[wave];
        if (w) {
          const list = w.units || Array.from({ length: w.n || 2 }, (_, i) => ({ boss: !!w.boss && i === 0, kind: w.kind }));
          if (w.boss && !list.some((u) => u.boss)) list[0] = { ...list[0], boss: true };
          spawnWave(list, craft);
          message = w.boss ? "BARON ROOK TAKES THE FIELD" : "BANDITS AHEAD";
          msgT = 2.2;
        }
      }
    }
    maybeNextWave(craft);
    if (health <= 0 && !done) {
      done = { stars: 0, line: "FORCED HOME" };
      message = "FORCED HOME";
      msgT = 2;
    }
    const lim = mission.timeLimits && mission.timeLimits[0];
    if (lim && t > lim + 8 && !done) {
      if (escort && escort.live && escort.progress >= 1 && !living().length) {
        done = { stars: 1, line: "BAG IS CLEAR OF THE CAPE" };
      } else if (escort && !(escort.live && escort.progress >= 1)) {
        done = { stars: 0, line: "OVER TIME" };
      } else {
        done = { stars: living().length ? 0 : 1, line: living().length ? "OVER TIME" : "MAIL IS SAFE" };
      }
    }
    syncMeshes();
    return getState();
  }

  function forceWave(index, craft) {
    if (!active || !mission) return getState();
    for (const e of enemies) e.live = false;
    const waves = mission.waves || [{ n: mission.bandits || 2 }];
    wave = Math.max(0, Math.min(waves.length - 1, index | 0));
    waveWait = 0;
    const w = waves[wave];
    if (w) {
      const list = w.units || Array.from({ length: w.n || 2 }, (_, i) => ({ boss: !!w.boss && i === 0, kind: w.kind }));
      if (w.boss && !list.some((u) => u.boss)) list[0] = { ...list[0], boss: true };
      spawnWave(list, craft);
      message = w.boss ? "BARON ROOK TAKES THE FIELD" : "BANDITS AHEAD";
      msgT = 2.2;
    }
    syncMeshes();
    return getState();
  }

  function getState() {
    const left = living().length;
    return {
      active,
      health: Math.round(health),
      left,
      message: msgT > 0 ? message : (left ? (left + " bandit" + (left === 1 ? "" : "s") + " in the air") : message),
      t,
      done: !!(done),
      stars: done ? done.stars : 0,
      line: done ? done.line : "",
      hitFlash,
      banter: banterT > 0 ? banter : "",
      aim: cool <= 0,
      enemies: enemies.filter((e) => e.live).map((e) => ({
        x: e.x, y: e.y, z: e.z, boss: !!e.boss, kind: e.kind, state: e.state,
        heading: e.heading, speed: e.speed, hp: e.hp, max: e.max,
      })),
      events: { fired: events.fired, hits: events.hits, broke: events.broke, playerHit: events.playerHit },
      escort: escort ? { live: !!escort.live, hp: escort.hp, max: escort.max, progress: escort.progress, x: escort.x, y: escort.y, z: escort.z } : null,
    };
  }

  const _proj = new THREE.Vector3();
  function projectMarks(camera, w, h) {
    const marks = [];
    if (!active || !camera) return marks;
    for (const e of enemies) {
      if (!e.live) continue;
      _proj.set(e.x, e.y, e.z).project(camera);
      const behind = _proj.z > 1;
      const sx = (_proj.x * 0.5 + 0.5) * w;
      const sy = (-_proj.y * 0.5 + 0.5) * h;
      const tLead = 0.7;
      _proj.set(
        e.x + Math.cos(e.heading) * e.speed * tLead,
        e.y + Math.sin(e.pitch || 0) * e.speed * tLead,
        e.z + Math.sin(e.heading) * e.speed * tLead,
      ).project(camera);
      const lx = (_proj.x * 0.5 + 0.5) * w;
      const ly = (-_proj.y * 0.5 + 0.5) * h;
      marks.push({
        x: sx, y: sy, lx, ly, behind,
        on: !behind && _proj.z <= 1 && sx > -40 && sx < w + 40 && sy > -40 && sy < h + 40,
        hp: e.max ? e.hp / e.max : 1,
        boss: !!e.boss,
        state: e.state,
      });
    }
    return marks;
  }

  return { start, end, update, getState, forceWave, projectMarks, get active() { return active; }, group };

}
