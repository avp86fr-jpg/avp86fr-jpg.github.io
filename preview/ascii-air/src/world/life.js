import * as THREE from "three";
import { MAT, QUALITY, LANDMARKS as LM } from "../core/config.js";
import { retagGeometry, patchMaterialIdAlpha } from "../render/idMaterial.js";

const _dummy = new THREE.Object3D();
const _col = new THREE.Color();

function instanced(geo, mat, placements) {
  const n = Math.max(1, placements.length);
  const inst = new THREE.InstancedMesh(retagGeometry(geo, mat.userData.matId || MAT.WOOD, 0), mat, n);
  inst.userData.matId = mat.userData.matId;
  inst.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  const hasColor = placements.some((p) => p.c);
  if (hasColor) {
    const cols = new Float32Array(n * 3);
    inst.instanceColor = new THREE.InstancedBufferAttribute(cols, 3);
  }
  placements.forEach((p, i) => {
    _dummy.position.set(p.x, p.y, p.z);
    _dummy.rotation.set(p.rx || 0, p.ry || 0, p.rz || 0);
    _dummy.scale.set(p.sx || p.s || 1, p.sy || p.s || 1, p.sz || p.s || 1);
    _dummy.updateMatrix();
    inst.setMatrixAt(i, _dummy.matrix);
    if (hasColor) {
      _col.setHex(p.c || 0x888888);
      inst.instanceColor.setXYZ(i, _col.r, _col.g, _col.b);
    }
  });
  inst.instanceMatrix.needsUpdate = true;
  if (hasColor) inst.instanceColor.needsUpdate = true;
  inst.count = n;
  inst.frustumCulled = false;
  return inst;
}

function lam(color, matId, extra = {}) {
  const m = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color, flatShading: true, ...extra }));
  m.userData.matId = matId;
  return m;
}

function roadPoints() {
  const a = [{ x: -80, z: -1100 }, { x: 200, z: -1000 }, { x: 180, z: -1220 }];
  const pts = [];
  for (let s = 0; s < a.length - 1; s++) {
    const p0 = a[s], p1 = a[s + 1];
    const len = Math.hypot(p1.x - p0.x, p1.z - p0.z);
    const n = Math.max(2, Math.round(len / 8));
    for (let i = 0; i < n; i++) {
      const t = i / n;
      pts.push({
        x: p0.x + (p1.x - p0.x) * t,
        z: p0.z + (p1.z - p0.z) * t,
        yaw: -Math.atan2(p1.z - p0.z, p1.x - p0.x),
      });
    }
  }
  return pts;
}

export function createLife(scene, terrain, landmarks, quality = "medium") {
  const q = QUALITY[quality] || QUALITY.medium;
  const k = q.life != null ? q.life : (q.particles || 0.7);
  const H = (x, z) => terrain.heightAt(x, z);
  const group = new THREE.Group();
  group.name = "life";
  scene.add(group);

  const road = roadPoints();
  const updaters = [];

  // --- rocks ---
  {
    const n = Math.floor(90 * k);
    const place = [];
    let i = 0, guard = 0;
    while (place.length < n && guard++ < 4000) {
      const x = (Math.sin(i * 17.13) * 0.5 + Math.cos(i * 3.7) * 0.5) * 1100;
      const z = (Math.cos(i * 13.91) * 0.5 + Math.sin(i * 5.1) * 0.5) * 1300;
      i++;
      const h = H(x, z);
      if (h < 1.6 || h > 130) continue;
      if (Math.abs(z + 1100) < 90 && Math.abs(x) < 500) continue;
      const s = 0.7 + (i % 5) * 0.45;
      place.push({ x, y: h + s * 0.35, z, s, rx: (i % 5) * 0.2, ry: i * 0.7, c: [0x8a7a64, 0x9a8a70, 0x7a6a54, 0xa09078][i % 4] });
    }
    if (place.length) {
      const geo = new THREE.DodecahedronGeometry(1.1, 0);
      const mat = lam(0x8a7a64, MAT.ROCK);
      const inst = instanced(geo, mat, place);
      inst.name = "life-rocks";
      group.add(inst);
    }
  }

  // --- flower patches ---
  if (k > 0.4) {
    const n = Math.floor(110 * k);
    const place = [];
    let i = 0, guard = 0;
    while (place.length < n && guard++ < 5000) {
      const x = 80 + Math.sin(i * 9.2) * 520 + (i % 7) * 8;
      const z = -700 + Math.cos(i * 11.1) * 420;
      i++;
      const h = H(x, z);
      if (h < 5 || h > 90) continue;
      if (Math.abs(z + 1100) < 80 && Math.abs(x) < 480) continue;
      const cols = [0xe06080, 0xf2c14e, 0xffffff, 0xd45aaa, 0x7ab03a];
      place.push({ x, y: h + 0.35, z, sx: 0.5, sy: 0.45, sz: 0.5, c: cols[i % cols.length] });
    }
    if (place.length) {
      const inst = instanced(new THREE.SphereGeometry(0.7, 5, 4), lam(0xe06080, MAT.FOLIAGE), place);
      inst.name = "life-flowers";
      group.add(inst);
    }
  }

  // --- stone walls + vineyard posts (one instanced box, two colours) ---
  {
    const place = [];
    const walls = [
      [240, -720, 42, 0, 0x9a8a72],
      [300, -680, 28, 0.4, 0x9a8a72],
      [160, -640, 36, -0.2, 0x9a8a72],
      [80, -580, 30, 0.15, 0x9a8a72],
      [360, -760, 24, -0.5, 0x9a8a72],
    ];
    for (const [x, z, len, yaw, c] of walls) {
      const h = H(x, z);
      if (h < 4) continue;
      place.push({ x, y: h + 0.7, z, sx: len, sy: 1.4, sz: 0.45, ry: yaw, c });
    }
    if (k > 0.45) {
      // Vineyard rows on a mid-island shelf
      for (let r = 0; r < 8; r++) {
        const z = -640 + r * 7;
        const x = 480, len = 36;
        const h = H(x, z);
        if (h < 8) continue;
        place.push({ x, y: h + 0.55, z, sx: len, sy: 1.15, sz: 0.55, ry: 0.08, c: 0x3a5a28 });
      }
    }
    if (place.length) {
      const inst = instanced(new THREE.BoxGeometry(1, 1, 1), lam(0x9a8a72, MAT.ROCK), place);
      inst.name = "life-walls";
      group.add(inst);
    }
  }

  // --- beach umbrellas ---
  if (k > 0.35) {
    const place = [];
    const spots = [
      [28, -1210], [48, -1216], [62, -1204], [18, -1228], [54, -1234], [36, -1198], [72, -1220],
    ];
    const cloth = [0xe06a4f, 0xf2c14e, 0x3aa0d0, 0xf4f0e6, 0xc01418];
    spots.forEach((p, i) => {
      const h = H(p[0], p[1]);
      if (h < -0.2 || h > 10) return;
      place.push({ x: p[0], y: Math.max(1.2, h) + 2.1, z: p[1], sx: 2.2, sy: 0.18, sz: 2.2, c: cloth[i % cloth.length] });
    });
    if (place.length) {
      const inst = instanced(new THREE.ConeGeometry(1, 1, 7), lam(0xe06a4f, MAT.ROOF), place);
      inst.name = "life-umbrellas";
      group.add(inst);
      // poles as thin instances of the same mesh, scaled
      const poles = place.map((p) => ({ x: p.x, y: p.y - 1.1, z: p.z, sx: 0.12, sy: 2.2, sz: 0.12, c: 0xc8c0b0 }));
      const instP = instanced(new THREE.CylinderGeometry(0.5, 0.5, 1, 5), lam(0xc8c0b0, MAT.WOOD), poles);
      instP.name = "life-umb-poles";
      group.add(instP);
    }
  }

  // --- people dots (beach, quay, pier) ---
  {
    const n = Math.floor(28 * k);
    const place = [];
    const zones = [
      [LM.beach.x, LM.beach.z, 28],
      [LM.harbor.x, LM.harbor.z, 22],
      [LM.pier.x, LM.pier.z, 16],
      [LM.town.x, LM.town.z + 20, 18],
    ];
    const cols = [0xc45a2a, 0x3a6cb6, 0xe8e0c8, 0x3a8a5a, 0xc08020, 0xf0c8a0, 0x4a3a2a];
    for (let i = 0; i < n; i++) {
      const zn = zones[i % zones.length];
      const a = i * 2.4, r = 4 + (i % 7) * 2.4;
      const x = zn[0] + Math.cos(a) * Math.min(r, zn[2]);
      const z = zn[1] + Math.sin(a) * Math.min(r, zn[2]) * 0.8;
      const h = H(x, z);
      if (h < 0.8) continue;
      place.push({ x, y: h + 0.7, z, sx: 0.35, sy: 1.15, sz: 0.35, c: cols[i % cols.length] });
    }
    if (place.length) {
      const inst = instanced(new THREE.CylinderGeometry(0.5, 0.55, 1, 5), lam(0xc45a2a, MAT.PLANE), place);
      inst.name = "life-people";
      group.add(inst);
    }
  }

  // --- cars (road) + train cars (viaduct), one instanced mesh ---
  const vehicles = [];
  {
    const nCar = Math.max(2, Math.round(4 * k));
    for (let i = 0; i < nCar; i++) {
      vehicles.push({ kind: "car", t: i / nCar, spd: 0.035 + (i % 3) * 0.008, c: [0xc45a3a, 0x3a5a8a, 0xd8c48a, 0x4a4a48][i % 4] });
    }
    if (k > 0.45 && landmarks && landmarks.bridge) {
      for (let i = 0; i < 4; i++) {
        vehicles.push({ kind: "train", t: i * 0.046, spd: 0.018, c: 0x6a3a2a, car: i });
      }
    }
    const place = vehicles.map(() => ({ x: 0, y: 0, z: 0, sx: 1, sy: 1, sz: 1, c: 0x888888 }));
    const inst = instanced(new THREE.BoxGeometry(1, 1, 1), lam(0x888888, MAT.METAL), place);
    inst.name = "life-vehicles";
    group.add(inst);
    updaters.push((dt, time) => {
      const br = landmarks && landmarks.bridge;
      const by = br ? br.position.y + 18.4 * (br.scale.y || 1) + 1.2 : 50;
      const bx = br ? br.position.x : -40;
      const bz = br ? br.position.z : -960;
      const yawB = br ? br.rotation.y : 0.08;
      const half = 118;
      vehicles.forEach((v, i) => {
        v.t = (v.t + dt * v.spd) % 1;
        if (v.kind === "car") {
          const u = v.t * (road.length - 1);
          const i0 = Math.floor(u), i1 = Math.min(road.length - 1, i0 + 1), f = u - i0;
          const p0 = road[i0], p1 = road[i1];
          const x = p0.x + (p1.x - p0.x) * f;
          const z = p0.z + (p1.z - p0.z) * f;
          const y = H(x, z) + 0.95;
          const yaw = p0.yaw;
          _dummy.position.set(x, y, z);
          _dummy.rotation.set(0, yaw, 0);
          _dummy.scale.set(3.4, 1.25, 1.7);
        } else {
          const along = (v.t * 2 - 1) * half + v.car * 7.4;
          const x = bx + Math.cos(yawB) * along;
          const z = bz + Math.sin(yawB) * along;
          _dummy.position.set(x, by, z);
          _dummy.rotation.set(0, yawB, 0);
          _dummy.scale.set(6.4, 2.2, 2.4);
        }
        _dummy.updateMatrix();
        inst.setMatrixAt(i, _dummy.matrix);
        _col.setHex(v.c);
        if (inst.instanceColor) inst.instanceColor.setXYZ(i, _col.r, _col.g, _col.b);
      });
      inst.instanceMatrix.needsUpdate = true;
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    });
  }

  // --- chimney smoke (village + farms) ---
  {
    const chimneys = (landmarks && landmarks.chimneys) || [];
    const extra = [
      [430, -720], [-80, -560], [90, -380],
      [LM.town.x, LM.town.z],
    ];
    const bases = chimneys.length ? chimneys.slice() : [];
    if (!bases.length) {
      for (const [x, z] of extra) bases.push({ x, y: H(x, z) + 7.5, z });
      // a handful around the town band
      for (let i = 0; i < 8; i++) {
        const x = 180 + (i % 4) * 22, z = -1040 + Math.floor(i / 4) * 28;
        bases.push({ x, y: H(x, z) + 7.2, z });
      }
    }
    const nPuff = Math.max(8, Math.floor(bases.length * 3 * k));
    const puffs = [];
    for (let i = 0; i < nPuff; i++) {
      const b = bases[i % bases.length];
      puffs.push({ b, age: (i / nPuff), s: 0.7 + (i % 3) * 0.25 });
    }
    const inst = instanced(
      new THREE.SphereGeometry(1, 6, 5),
      patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
        color: 0xddd6cc, emissive: 0xc8c0b6, emissiveIntensity: 0.1,
        flatShading: true, transparent: true, opacity: 0.45, depthWrite: false,
      })),
      puffs.map(() => ({ x: 0, y: 0, z: 0, s: 1 }))
    );
    inst.name = "life-smoke";
    inst.material.userData.matId = MAT.CLOUD;
    group.add(inst);
    updaters.push((dt, time) => {
      puffs.forEach((p, i) => {
        p.age += dt * 0.18;
        if (p.age > 1) p.age -= 1;
        const a = p.age;
        const x = p.b.x + Math.sin(time * 0.7 + i) * a * 1.6;
        const y = p.b.y + a * 7.5;
        const z = p.b.z + Math.cos(time * 0.5 + i * 0.4) * a * 1.2;
        const s = p.s * (0.5 + a * 1.4);
        _dummy.position.set(x, y, z);
        _dummy.rotation.set(0, 0, 0);
        _dummy.scale.set(s, s * 0.8, s);
        _dummy.updateMatrix();
        inst.setMatrixAt(i, _dummy.matrix);
      });
      inst.instanceMatrix.needsUpdate = true;
      inst.material.opacity = 0.45;
    });
  }

  // --- fluttering flags (castle + cape fort + quay) ---
  {
    const poles = (landmarks && landmarks.flagPoles && landmarks.flagPoles.length)
      ? landmarks.flagPoles.slice()
      : [];
    if (!poles.length && landmarks && landmarks.castle) {
      const c = landmarks.castle.position;
      poles.push({ x: c.x - 36, y: c.y + 64, z: c.z - 30, c: 0xc01418 });
      poles.push({ x: c.x + 36, y: c.y + 58, z: c.z - 30, c: 0xf4f0e6 });
    }
    if (!poles.some((p) => p.c === 0x3a6cb6)) {
      poles.push({ x: LM.harbor.x + 8, y: H(LM.harbor.x + 8, LM.harbor.z) + 9, z: LM.harbor.z, c: 0x3a6cb6 });
    }
    const inst = instanced(new THREE.BoxGeometry(1, 1, 1), lam(0xc01418, MAT.ROOF), poles.map((p) => ({ ...p, sx: 2.6, sy: 1.4, sz: 0.08 })));
    inst.name = "life-flags";
    group.add(inst);
    updaters.push((dt, time) => {
      poles.forEach((p, i) => {
        const flap = 1 + Math.sin(time * 6 + i) * 0.12;
        const yaw = Math.sin(time * 4 + i * 1.3) * 0.35;
        _dummy.position.set(p.x + 1.3, p.y, p.z);
        _dummy.rotation.set(0, yaw, Math.sin(time * 5 + i) * 0.12);
        _dummy.scale.set(2.6 * flap, 1.4, 0.08);
        _dummy.updateMatrix();
        inst.setMatrixAt(i, _dummy.matrix);
        _col.setHex(p.c);
        if (inst.instanceColor) inst.instanceColor.setXYZ(i, _col.r, _col.g, _col.b);
      });
      inst.instanceMatrix.needsUpdate = true;
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    });
  }

  function update(dt, time) {
    for (const fn of updaters) fn(dt, time);
  }

  function setVisible(on) {
    group.visible = !!on;
  }

  return { group, update, setVisible };
}
