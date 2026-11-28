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
  const m = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color, flatShading: false, ...extra }));
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

  // --- livestock (sheep + cows in farm clearings) ---
  {
    const herds = [
      { x: 220, z: -880, n: 8, cow: false },
      { x: 80, z: -820, n: 6, cow: false },
      { x: 160, z: -740, n: 5, cow: true },
      { x: -20, z: -900, n: 6, cow: false },
      { x: 300, z: -860, n: 5, cow: true },
      { x: 40, z: -700, n: 5, cow: false },
    ];
    const animals = [];
    for (const h of herds) {
      const baseY = H(h.x, h.z);
      if (baseY < 4) continue;
      for (let i = 0; i < Math.max(2, Math.round(h.n * k)); i++) {
        const a = i * 2.2 + h.x * 0.01;
        const r = 4 + (i % 5) * 2.4;
        animals.push({
          cx: h.x, cz: h.z, a, r, spd: 0.18 + (i % 3) * 0.05,
          cow: h.cow && (i % 3 === 0),
          c: (h.cow && i % 3 === 0) ? (i % 2 ? 0x5a3a28 : 0xc8b8a0) : 0xf2eee6,
        });
      }
    }
    if (animals.length) {
      // Simple four-leg body: one merged-looking box proto, instanceColor for hide.
      const inst = instanced(new THREE.BoxGeometry(1.2, 0.7, 0.55), lam(0xf2eee6, MAT.PLANE), animals.map((a) => ({
        x: a.cx, y: 0, z: a.cz, sx: 1, sy: 1, sz: 1, c: a.c,
      })));
      inst.name = "life-herd";
      group.add(inst);
      updaters.push((dt, time) => {
        animals.forEach((a, i) => {
          a.a += dt * a.spd * 0.35;
          const x = a.cx + Math.cos(a.a) * a.r;
          const z = a.cz + Math.sin(a.a) * a.r * 0.7;
          const y = H(x, z) + (a.cow ? 0.7 : 0.45);
          const bob = Math.abs(Math.sin(time * 4 + i)) * 0.04;
          _dummy.position.set(x, y + bob, z);
          _dummy.rotation.set(0, -a.a + Math.PI / 2, 0);
          if (a.cow) _dummy.scale.set(1.55, 1.15, 1.15);
          else _dummy.scale.set(0.95, 0.75, 0.8);
          _dummy.updateMatrix();
          inst.setMatrixAt(i, _dummy.matrix);
          _col.setHex(a.c);
          if (inst.instanceColor) inst.instanceColor.setXYZ(i, _col.r, _col.g, _col.b);
        });
        inst.instanceMatrix.needsUpdate = true;
        if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
      });
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
      [200, -880, 32, 0.2, 0x9a8a72],
      [-60, -620, 28, 0.6, 0x9a8a72],
      [440, -520, 26, -0.25, 0x9a8a72],
      [LM.town.x - 30, LM.town.z - 10, 22, 0.15, 0x9a8a72],
      [120, -300, 24, 0.35, 0x9a8a72],
      [180, -760, 36, 0.05, 0x9a8a72],
      [260, -620, 30, -0.3, 0x9a8a72],
      [40, -640, 28, 0.45, 0x9a8a72],
      [140, -500, 26, 0.2, 0x9a8a72],
      [320, -500, 24, -0.15, 0x9a8a72],
      [80, -860, 22, 0.1, 0x9a8a72],
      [220, -900, 20, 0.35, 0x9a8a72],
    ];
    for (const [x, z, len, yaw, c] of walls) {
      const nSeg = Math.max(2, Math.round(len / 6));
      for (let i = 0; i < nSeg; i++) {
        const t = (i + 0.5) / nSeg - 0.5;
        const px = x + Math.cos(yaw) * t * len;
        const pz = z + Math.sin(yaw) * t * len;
        const h = H(px, pz);
        if (h < 4 || h > 80) continue;
        place.push({ x: px, y: h + 0.7, z: pz, sx: len / nSeg + 0.2, sy: 1.35, sz: 0.4, ry: yaw, c });
      }
    }
    if (k > 0.45) {
      // Vineyard posts (short, so they follow the shelf instead of floating as 36 m slabs)
      const vineyards = [
        [464, -640, 10, 8, 3.6, 7],
        [300, -830, 8, 6, 3.4, 6.5],
        [130, -510, 8, 5, 3.5, 6.8],
      ];
      for (const [x0, z0, nc, nr, dc, dr] of vineyards) {
        for (let r = 0; r < nr; r++) {
          for (let c = 0; c < nc; c++) {
            const x = x0 + c * dc, z = z0 + r * dr;
            const h = H(x, z);
            if (h < 8 || h > 70) continue;
            place.push({ x, y: h + 0.7, z, sx: 0.18, sy: 1.4, sz: 0.18, c: 0x3a5a28 });
          }
        }
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
    const n = Math.floor(72 * k);
    const place = [];
    const zones = [
      [LM.beach.x, LM.beach.z, 28],
      [180, -1228, 28, 10],
      [180, -1204, 36, 3.3],
      [LM.pier.x, LM.pier.z, 16],
      [LM.town.x, LM.town.z + 12, 22],
      [LM.market.x, LM.market.z, 14],
      [LM.church.x, LM.church.z + 8, 10],
      [LM.windmills.x, LM.windmills.z, 16],
      [430, -720, 12],
      [90, -380, 10],
    ];
    const cols = [0xc45a2a, 0x3a6cb6, 0xe8e0c8, 0x3a8a5a, 0xc08020, 0xf0c8a0, 0x4a3a2a];
    for (let i = 0; i < n; i++) {
      const zn = zones[i % zones.length];
      const a = i * 2.4, r = 4 + (i % 7) * 2.4;
      const x = zn[0] + Math.cos(a) * Math.min(r, zn[2]);
      const z = zn[1] + Math.sin(a) * Math.min(r, zn[2]) * 0.8;
      const h = Math.max(H(x, z), zn[3] || -99);
      if (h < 0.8) continue;
      place.push({ x, y: h + 0.85, z, sx: 0.9, sy: 0.95, sz: 0.9, c: cols[i % cols.length] });
    }
    if (place.length) {
      const inst = instanced(new THREE.CapsuleGeometry(0.28, 0.7, 3, 6), lam(0xc45a2a, MAT.PLANE), place);
      inst.name = "life-people";
      group.add(inst);
      place.forEach((p) => { p.ox = p.x; p.oz = p.z; p.a = Math.random() * 6; p.spd = 0.25 + Math.random() * 0.35; });
      updaters.push((dt, time) => {
        place.forEach((p, i) => {
          p.a += dt * p.spd;
          const x = p.ox + Math.cos(p.a) * 1.6;
          const z = p.oz + Math.sin(p.a) * 1.2;
          const y = Math.max(H(x, z), p.y - 0.85) + 0.85;
          _dummy.position.set(x, y, z);
          _dummy.rotation.set(0, -p.a, 0);
          _dummy.scale.set(p.sx, p.sy, p.sz);
          _dummy.updateMatrix();
          inst.setMatrixAt(i, _dummy.matrix);
        });
        inst.instanceMatrix.needsUpdate = true;
      });
    }
  }


  // --- cart / wagon silhouettes (static, one draw) ---
  if (k > 0.35) {
    const carts = [
      [LM.market.x + 6, LM.market.z + 4, 0.4],
      [168, -1224, 1.2],
      [196, -1208, -0.4],
      [LM.town.x + 10, LM.town.z + 8, 0.1],
      [LM.church.x - 8, LM.church.z + 6, -0.3],
      [430, -716, 0.2],
      [LM.pier.x - 6, LM.pier.z + 4, 0.8],
    ];
    const place = [];
    for (const [x, z, yaw] of carts) {
      const h = Math.max(H(x, z), (z < -1190 && z > -1240 && x > 100 && x < 260) ? 4.2 : -99);
      if (h < 0.6) continue;
      place.push({ x, y: h + 0.7, z, sx: 2.4, sy: 1.1, sz: 1.25, ry: yaw, c: 0x5a3a22 });
    }
    if (place.length) {
      const inst = instanced(new THREE.BoxGeometry(1, 1, 1), lam(0x5a3a22, MAT.WOOD), place);
      inst.name = "life-carts";
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
        color: 0xe8e2d8, emissive: 0xc8c0b6, emissiveIntensity: 0.12,
        flatShading: false,
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

  // --- gulls and small birds (one draw) ---
  {
    const birds = [];
    for (let i = 0; i < Math.max(8, Math.round(18 * k)); i++) {
      birds.push({
        cx: LM.harbor.x + (i % 5) * 18 - 36,
        cz: LM.harbor.z - 20 - (i % 4) * 14,
        cy: 16 + (i % 6) * 3.5,
        r: 18 + (i % 5) * 8,
        a: i * 0.7,
        spd: 0.55 + (i % 4) * 0.12,
        gull: i < 12,
        c: i < 12 ? 0xf2f0ea : 0x3a3a38,
      });
    }
    for (let i = 0; i < Math.max(4, Math.round(8 * k)); i++) {
      birds.push({
        cx: 200 + (i % 4) * 30, cz: -900 - i * 20, cy: 22 + (i % 3) * 4,
        r: 10 + i, a: i * 1.1, spd: 0.8, gull: false, c: 0x4a3a2a,
      });
    }
    const inst = instanced(new THREE.BoxGeometry(1, 0.12, 0.35), lam(0xf2f0ea, MAT.PLANE), birds.map((b) => ({ x: b.cx, y: b.cy, z: b.cz, c: b.c })));
    inst.name = "life-birds";
    group.add(inst);
    updaters.push((dt, time) => {
      birds.forEach((b, i) => {
        b.a += dt * b.spd;
        const x = b.cx + Math.cos(b.a) * b.r;
        const z = b.cz + Math.sin(b.a) * b.r * 0.7;
        const y = b.cy + Math.sin(time * 1.4 + i) * 1.4;
        const flap = 1 + Math.sin(time * (b.gull ? 8 : 14) + i) * 0.45;
        _dummy.position.set(x, y, z);
        _dummy.rotation.set(0, -b.a + Math.PI / 2, Math.sin(b.a) * 0.15);
        _dummy.scale.set((b.gull ? 1.6 : 0.9) * flap, b.gull ? 1 : 0.7, b.gull ? 1.1 : 0.7);
        _dummy.updateMatrix();
        inst.setMatrixAt(i, _dummy.matrix);
        _col.setHex(b.c);
        if (inst.instanceColor) inst.instanceColor.setXYZ(i, _col.r, _col.g, _col.b);
      });
      inst.instanceMatrix.needsUpdate = true;
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    });
  }

  // --- mail planes on lazy circuits (one draw) ---
  if (k > 0.3) {
    const proto = (() => {
      // Compact mail biplane: fuselage, staggered wings, fin, stab, cowl — reads as a plane, not a bar.
      const parts = [
        new THREE.BoxGeometry(1.55, 0.28, 0.28),
        new THREE.CylinderGeometry(0.16, 0.18, 0.28, 6),
        new THREE.BoxGeometry(0.16, 0.07, 2.05),
        new THREE.BoxGeometry(0.15, 0.06, 1.7),
        new THREE.BoxGeometry(0.05, 0.22, 0.05),
        new THREE.BoxGeometry(0.05, 0.22, 0.05),
        new THREE.BoxGeometry(0.28, 0.32, 0.08),
        new THREE.BoxGeometry(0.08, 0.06, 0.7),
        new THREE.BoxGeometry(0.04, 0.18, 0.04),
        new THREE.BoxGeometry(0.04, 0.18, 0.04),
      ];
      parts[0].translate(0, 0.04, 0);
      parts[1].rotateZ(Math.PI / 2); parts[1].translate(0.78, 0.04, 0);
      parts[2].translate(0.1, 0.28, 0);
      parts[3].translate(0.05, -0.12, 0);
      parts[4].translate(0.15, 0.08, 0.45);
      parts[5].translate(0.15, 0.08, -0.45);
      parts[6].translate(-0.68, 0.24, 0);
      parts[7].translate(-0.68, 0.08, 0);
      parts[8].translate(0.2, -0.22, 0.16);
      parts[9].translate(0.2, -0.22, -0.16);
      // stitch
      let nV = 0;
      for (const g of parts) nV += g.attributes.position.count;
      const pos = new Float32Array(nV * 3);
      const idx = [];
      let base = 0;
      for (const g of parts) {
        const pr = g.attributes.position;
        for (let i = 0; i < pr.count; i++) {
          pos[(base + i) * 3] = pr.getX(i);
          pos[(base + i) * 3 + 1] = pr.getY(i);
          pos[(base + i) * 3 + 2] = pr.getZ(i);
        }
        const ia = g.index ? g.index.array : null;
        if (ia) { for (let i = 0; i < ia.length; i++) idx.push(ia[i] + base); }
        else { for (let i = 0; i < pr.count; i++) idx.push(base + i); }
        base += pr.count;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setIndex(idx);
      geo.computeVertexNormals();
      return geo;
    })();
    const n = quality === "low" ? 2 : 3;
    const routes = [
      { cx: 80, cz: -1280, cy: 72, rx: 220, rz: 140, spd: 0.12, c: 0xc01418 },
      { cx: 200, cz: -900, cy: 88, rx: 260, rz: 180, spd: 0.09, c: 0x3a7a86 },
      { cx: 260, cz: -1800, cy: 70, rx: 160, rz: 200, spd: 0.11, c: 0xd8c48a },
    ].slice(0, n);
    const planes = routes.map((r, i) => ({ ...r, a: i * 2.1 }));
    const inst = instanced(proto, lam(0xc01418, MAT.PLANE), planes.map((pl) => ({ x: pl.cx, y: pl.cy, z: pl.cz, c: pl.c })));
    inst.name = "life-npc";
    group.add(inst);
    updaters.push((dt) => {
      planes.forEach((pl, i) => {
        pl.a += dt * pl.spd;
        const x = pl.cx + Math.cos(pl.a) * pl.rx;
        const z = pl.cz + Math.sin(pl.a) * pl.rz;
        _dummy.position.set(x, pl.cy + Math.sin(pl.a * 2) * 3, z);
        _dummy.rotation.set(0, -pl.a + Math.PI / 2, Math.sin(pl.a) * 0.12);
        _dummy.scale.set(7.4, 7.4, 7.4);
        _dummy.updateMatrix();
        inst.setMatrixAt(i, _dummy.matrix);
        _col.setHex(pl.c);
        if (inst.instanceColor) inst.instanceColor.setXYZ(i, _col.r, _col.g, _col.b);
      });
      inst.instanceMatrix.needsUpdate = true;
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    });
  }

  // --- night lanterns (town square, quay, pier) ---
  {
    const spots = [
      [LM.town.x + 8, LM.town.z + 6], [LM.town.x - 10, LM.town.z + 14],
      [LM.town.x + 22, LM.town.z - 8], [LM.harbor.x + 6, LM.harbor.z + 4],
      [LM.harbor.x - 8, LM.harbor.z], [LM.pier.x, LM.pier.z],
      [LM.beach.x + 12, LM.beach.z - 8], [200, -1020], [160, -1060],
      [240, -1000],
    ];
    const place = [];
    for (const [x, z] of spots) {
      const h = H(x, z);
      if (h < 0.5) continue;
      place.push({ x, y: h + 3.6, z, s: 0.45, c: 0xffd090 });
    }
    if (place.length) {
      const mat = patchMaterialIdAlpha(new THREE.MeshBasicMaterial({
        color: 0xffd090, toneMapped: false,
      }));
      mat.userData.matId = MAT.LIGHT;
      const inst = instanced(new THREE.SphereGeometry(1, 7, 5), mat, place);
      inst.name = "life-lanterns";
      inst.visible = false;
      group.add(inst);
      updaters.push((_dt, _time, night) => {
        inst.visible = (night || 0) > 0.3;
      });
    }
  }

  function update(dt, time, night, camera) {
    for (const fn of updaters) fn(dt, time, night);
    if (camera) {
      const far = camera.position.y > 180 || Math.hypot(camera.position.x - 200, camera.position.z + 1100) > 2400;
      for (const n of ["life-umbrellas", "life-umb-poles", "life-birds", "life-npc", "life-people", "life-carts"]) {
        const o = group.getObjectByName(n);
        if (o) o.visible = !far;
      }
    }
  }

  function setVisible(on) {
    group.visible = !!on;
  }

  return { group, update, setVisible };
}
