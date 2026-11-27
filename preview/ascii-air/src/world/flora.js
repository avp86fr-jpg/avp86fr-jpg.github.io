import * as THREE from "three";
import { MAT, QUALITY } from "../core/config.js";
import { retagGeometry, patchMaterialIdAlpha } from "../render/idMaterial.js";
import { fbm } from "./noise.js";

const GREENS = [0x3a5228, 0x2a4324, 0x4a5a32, 0x1e3a22, 0x3d4f2c];

function trunkGeo() {
  return retagGeometry(new THREE.CylinderGeometry(0.28, 0.48, 4.4, 6), MAT.WOOD);
}
function canopyGeo(kind) {
  if (kind === "cone") return retagGeometry(new THREE.ConeGeometry(2.15, 5.4, 7), MAT.FOLIAGE);
  const g = retagGeometry(new THREE.SphereGeometry(2.35, 7, 5), MAT.FOLIAGE);
  return g;
}
function paintColors(geo, fn) {
  const pos = geo.getAttribute("position");
  const col = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const c = fn(pos.getX(i), pos.getY(i), pos.getZ(i));
    col[i * 3] = ((c >> 16) & 255) / 255;
    col[i * 3 + 1] = ((c >> 8) & 255) / 255;
    col[i * 3 + 2] = (c & 255) / 255;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  return geo;
}
function treePrototype(kind) {
  const tg = trunkGeo();
  tg.translate(0, 2.2, 0);
  const parts = [tg];
  if (kind === "broad") {
    const blobs = [
      [0, 5.7, 0, 1.85],
      [2.05, 5.15, 0.7, 1.55],
      [-1.95, 5.25, -0.65, 1.5],
    ];
    for (const [x, y, z, r] of blobs) {
      const s = new THREE.SphereGeometry(r, 5, 4);
      s.scale(1, 0.82, 1);
      s.translate(x, y, z);
      parts.push(retagGeometry(s, MAT.FOLIAGE));
    }
  } else {
    // Pine / cypress: 3 stacked cones (cypress instances get a tall thin scale)
    const cones = [
      [0, 3.7, 0, 1.85, 4.2],
      [0.12, 6.3, 0.08, 1.35, 3.5],
      [-0.06, 8.6, 0, 0.78, 2.5],
    ];
    for (const [x, y, z, r, h] of cones) {
      const c = new THREE.ConeGeometry(r, h, 5);
      c.translate(x, y, z);
      parts.push(retagGeometry(c, MAT.FOLIAGE));
    }
  }
  const geo = mergeGeos(parts, MAT.FOLIAGE);
  paintColors(geo, (x, y, z) => {
    const r = Math.hypot(x, z);
    if (r < 0.62 && y < 4.4) return 0x5a3a22;
    if (kind === "broad") {
      if (x > 0.9) return 0x3cb03a;
      if (x < -0.8) return 0x1e7a30;
      if (y > 6.4) return 0x4cbc48;
      return 0x2d9a32;
    }
    return y > 7.6 ? 0x2a6a2c : 0x1a5224;
  });
  return geo;
}
function bushPrototype() {
  const parts = [];
  const blobs = [[0, 0.2, 0, 1.15], [0.85, 0.05, 0.35, 0.85], [-0.7, 0.0, -0.3, 0.8]];
  for (const [x, y, z, r] of blobs) {
    const s = new THREE.SphereGeometry(r, 5, 4);
    s.translate(x, y, z);
    parts.push(retagGeometry(s, MAT.FOLIAGE));
  }
  const geo = mergeGeos(parts, MAT.FOLIAGE);
  paintColors(geo, (x, y) => (x > 0.4 ? 0x3aa83a : x < -0.3 ? 0x1f6e2c : 0x2c8a32));
  return geo;
}
function foliageMat() {
  const m = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    vertexColors: true,
    flatShading: true,
    emissive: 0x142814,
    emissiveIntensity: 0.10,
  });
  m.userData.matId = MAT.FOLIAGE;
  patchMaterialIdAlpha(m);
  return m;
}
function farPrototype(kind) {
  // Very low-poly stand-in (a few dozen tris). Reads as a tree past ~100 m.
  const tg = new THREE.CylinderGeometry(0.22, 0.38, 3.8, 3);
  tg.translate(0, 1.9, 0);
  const parts = [retagGeometry(tg, MAT.WOOD)];
  if (kind === "broad") {
    const a = new THREE.SphereGeometry(1.85, 4, 3);
    a.scale(1.15, 0.78, 1.15);
    a.translate(0, 4.7, 0);
    const b = new THREE.SphereGeometry(1.15, 4, 3);
    b.scale(1.05, 0.75, 1.05);
    b.translate(1.15, 4.4, 0.25);
    parts.push(retagGeometry(a, MAT.FOLIAGE), retagGeometry(b, MAT.FOLIAGE));
  } else if (kind === "bush") {
    const a = new THREE.SphereGeometry(1.2, 4, 3);
    a.scale(1.4, 0.7, 1.3);
    a.translate(0, 0.4, 0);
    parts.length = 0;
    parts.push(retagGeometry(a, MAT.FOLIAGE));
  } else {
    const c = new THREE.ConeGeometry(1.55, 6.8, 4);
    c.translate(0, 5.4, 0);
    parts.push(retagGeometry(c, MAT.FOLIAGE));
  }
  const geo = mergeGeos(parts, MAT.FOLIAGE);
  paintColors(geo, (x, y, z) => {
    const r = Math.hypot(x, z);
    if (kind !== "bush" && r < 0.55 && y < 3.6) return 0x5a3a22;
    if (kind === "broad") return x > 0.6 ? 0x3cb03a : 0x2d9a32;
    if (kind === "bush") return 0x2c8a32;
    return y > 6.5 ? 0x2a6a2c : 0x1a5224;
  });
  return geo;
}

function instanceLod(nearGeo, farGeo, material, placements, cap, nearR) {
  const nInst = new THREE.InstancedMesh(nearGeo, material, Math.max(1, cap));
  const fInst = new THREE.InstancedMesh(farGeo, material, Math.max(1, cap));
  for (const inst of [nInst, fInst]) {
    inst.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    inst.userData.matId = material.userData.matId;
    inst.frustumCulled = true;
    inst.count = 0;
    let maxR = 16;
    for (let i = 0; i < cap; i++) {
      const p = placements[i];
      const s = Math.max(p.s || 1, p.sy || 1, p.sx || 1);
      const r = Math.hypot(p.x, p.y, p.z) + 12 * s;
      if (r > maxR) maxR = r;
    }
    inst.geometry.computeBoundingSphere();
    inst.geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), maxR);
    inst.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), maxR);
  }
  // Prime far with every placement so the first frame is populated.
  const dummy = new THREE.Object3D();
  for (let i = 0; i < cap; i++) {
    const p = placements[i];
    dummy.position.set(p.x, p.y, p.z);
    dummy.rotation.set(0, p.r, 0);
    if (p.sx != null) dummy.scale.set(p.sx, p.sy, p.sz);
    else dummy.scale.setScalar(p.s);
    dummy.updateMatrix();
    fInst.setMatrixAt(i, dummy.matrix);
  }
  fInst.count = cap;
  fInst.instanceMatrix.needsUpdate = true;
  nInst.count = 0;
  nInst.instanceMatrix.needsUpdate = true;
  return { near: nInst, far: fInst, placements, cap, nearR, dummy, _acc: 1 };
}

function tickLod(lod, cam, force) {
  if (!lod || !cam) return;
  lod._acc = (lod._acc || 0) + 1;
  if (!force && lod._acc < 8) return; // ~8 frames at 60fps ≈ 0.13s
  lod._acc = 0;
  const cx = cam.position.x, cy = cam.position.y, cz = cam.position.z;
  const nearR = lod.nearR;
  const nearR2 = nearR * nearR;
  const dummy = lod.dummy;
  let nN = 0, nF = 0;
  for (let i = 0; i < lod.cap; i++) {
    const p = lod.placements[i];
    const dx = p.x - cx, dy = p.y - cy, dz = p.z - cz;
    const d2 = dx * dx + dy * dy + dz * dz;
    dummy.position.set(p.x, p.y, p.z);
    dummy.rotation.set(0, p.r, 0);
    if (p.sx != null) dummy.scale.set(p.sx, p.sy, p.sz);
    else dummy.scale.setScalar(p.s);
    dummy.updateMatrix();
    if (d2 < nearR2) {
      lod.near.setMatrixAt(nN++, dummy.matrix);
    } else {
      lod.far.setMatrixAt(nF++, dummy.matrix);
    }
  }
  lod.near.count = nN;
  lod.far.count = nF;
  lod.near.instanceMatrix.needsUpdate = true;
  lod.far.instanceMatrix.needsUpdate = true;
}

function palmTrunkGeo() {
  return retagGeometry(new THREE.CylinderGeometry(0.16, 0.3, 7.6, 6), MAT.WOOD);
}
function palmCrownGeo() {
  const parts = [];
  for (let i = 0; i < 6; i++) {
    const g = new THREE.ConeGeometry(0.55, 3.8, 4);
    g.rotateX(1.15);
    g.rotateY((i / 6) * Math.PI * 2);
    g.translate(0, 7.6, 1.4);
    parts.push(retagGeometry(g, MAT.FOLIAGE));
  }
  return mergeGeos(parts, MAT.FOLIAGE);
}

function mergeGeos(geos, matId) {
  let n = 0;
  for (const g of geos) n += g.getAttribute("position").count;
  const pos = new Float32Array(n * 3);
  const nrm = new Float32Array(n * 3);
  const idx = [];
  let base = 0;
  for (const g of geos) {
    const p = g.getAttribute("position");
    const nn = g.getAttribute("normal");
    for (let i = 0; i < p.count; i++) {
      pos[(base + i) * 3] = p.getX(i);
      pos[(base + i) * 3 + 1] = p.getY(i);
      pos[(base + i) * 3 + 2] = p.getZ(i);
      if (nn) {
        nrm[(base + i) * 3] = nn.getX(i);
        nrm[(base + i) * 3 + 1] = nn.getY(i);
        nrm[(base + i) * 3 + 2] = nn.getZ(i);
      }
    }
    if (g.index) {
      const ia = g.index.array;
      for (let i = 0; i < ia.length; i++) idx.push(ia[i] + base);
    } else {
      for (let i = 0; i < p.count; i++) idx.push(base + i);
    }
    base += p.count;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  out.setAttribute("normal", new THREE.BufferAttribute(nrm, 3));
  out.setIndex(idx);
  return retagGeometry(out, matId);
}

function flatMat(color, matId) {
  const m = new THREE.MeshLambertMaterial({
    color,
    flatShading: true,
    emissive: color,
    emissiveIntensity: 0.16,
  });
  m.userData.matId = matId;
  patchMaterialIdAlpha(m);
  return m;
}

function instance(geo, material, placements, cap) {
  const inst = new THREE.InstancedMesh(geo, material, Math.max(1, cap));
  inst.instanceMatrix.setUsage(THREE.StaticDrawUsage);
  inst.userData.matId = material.userData.matId;
  const dummy = new THREE.Object3D();
  for (let i = 0; i < cap; i++) {
    const p = placements[i];
    dummy.position.set(p.x, p.y, p.z);
    dummy.rotation.set(0, p.r, 0);
    if (p.sx != null) dummy.scale.set(p.sx, p.sy, p.sz);
    else dummy.scale.setScalar(p.s);
    dummy.updateMatrix();
    inst.setMatrixAt(i, dummy.matrix);
  }
  inst.instanceMatrix.needsUpdate = true;
  inst.count = cap;
  inst.frustumCulled = true;
  // InstancedMesh culls against the prototype sphere at the origin unless we
  // enclose every instance; otherwise far groves pop or (worse) a stale sphere
  // can show a lone cluster in mid-air.
  let maxR = 12;
  for (let i = 0; i < cap; i++) {
    const p = placements[i];
    const r = Math.hypot(p.x, p.y, p.z) + 10 * (p.s || 1);
    if (r > maxR) maxR = r;
  }
  inst.geometry.computeBoundingSphere();
  inst.geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), maxR);
  inst.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), maxR);
  return inst;
}

function plantOk(terrain, x, z, minH = 5, maxH = 145, maxSlope = 0.9) {
  const h = terrain.heightAt(x, z);
  if (!(h >= minH && h <= maxH)) return null;
  const m = terrain.materialAt(x, z);
  if (m === MAT.SEA || m === MAT.WATER_DEEP || m === MAT.RUNWAY || m === MAT.ROAD) return null;
  const d = 3.5;
  const hx = terrain.heightAt(x + d, z) - terrain.heightAt(x - d, z);
  const hz = terrain.heightAt(x, z + d) - terrain.heightAt(x, z - d);
  if (Math.hypot(hx, hz) / (2 * d) > maxSlope) return null;
  return h;
}

export function createFlora(scene, terrain, quality = "medium") {
  const q = QUALITY[quality] || QUALITY.medium;
  const group = new THREE.Group();
  group.name = "flora";

  const trees = [[], [], []]; // three greens
  const palms = [];
  const blobs = [];
  const SIZE = 1450;
  const step = 10;
  for (let x = -SIZE; x < SIZE; x += step) {
    for (let z = -SIZE + ((x / step) % 2) * step * 0.5; z < SIZE; z += step) {
      const jx = x + ((Math.sin(x * 0.11 + z * 0.07) * 6) | 0);
      const jz = z + ((Math.cos(x * 0.09 + z * 0.13) * 6) | 0);
      const h = plantOk(terrain, jx, jz, 5, 145, 0.9);
      if (h == null) continue;
      const m = terrain.materialAt(jx, jz);
      if (jz < -1180 && h < 10 && jx < 40) continue;
      if (m === MAT.DIRT) continue;
      if (Math.abs(jz + 1100) < 95 && Math.abs(jx) < 520) continue;
      if (Math.abs(jz - 1120) < 32 && Math.abs(jx + 820) < 170) continue;
      const n = fbm(jx * 0.004, jz * 0.004, 3, 77);
      const dx = jx + 40, dz = jz + 1220;
      const inCove = dx * dx + dz * dz < 110 * 110;
      if (inCove && h >= 3.2 && h < 9 && n > 0.35 && jz > -1240) {
        palms.push({ x: jx, y: h, z: jz, s: 0.9 + n * 0.45, r: n * 6 });
      } else if (m === MAT.FOREST || (m === MAT.GRASS && n > (z < -200 && z > -1000 ? 0.18 : 0.26) && h > 5)) {
        const bucket = (Math.abs((jx * 13 + jz * 7) | 0) % 3);
        const eastHead = jx > 40 && jz < -1180;
        trees[bucket].push({ x: jx, y: h, z: jz, s: 0.75 + n * 0.7, r: n * 8, cone: eastHead ? n > 0.20 : n > 0.34 });
      }
    }
  }
  const groves = [
    [80, -1320], [150, -1280], [210, -1260], [50, -1300], [180, -1340], [240, -1220], [100, -1250],
    [-220, -980], [160, -860],
    [-360, -620], [240, -520], [80, -400], [-180, -300],
    [200, 80], [340, 260], [-300, 200], [120, 420],
    [-80, 60], [40, -200], [220, -700], [90, -640],
    [-120, -720], [300, -780], [-40, -500], [40, -860],
    [180, -1080], [-160, -1080], [260, -940],
    [40, -780], [-60, -680], [140, -620], [-200, -800],
    [80, -560], [-140, -480], [200, -440], [-40, -360],
    [120, -300], [0, -240], [-80, -180], [260, -600],
    [-240, -400], [60, -720], [-160, -640], [180, -200],
  ];
  for (const [gx, gz] of groves) {
    const seed = fbm(gx * 0.01, gz * 0.01, 2, 19);
    const nBlob = 6 + ((seed * 7) | 0);
    for (let i = 0; i < nBlob; i++) {
      const a = (i / nBlob) * Math.PI * 2 + seed * 4;
      const r = 8 + (i % 5) * 5 + seed * 10;
      const x = gx + Math.cos(a) * r;
      const z = gz + Math.sin(a) * r * 0.8;
      const h = plantOk(terrain, x, z, 5, 150, 0.9);
      if (h == null) continue;
      if (z < -1180 && h < 10 && x < 40) continue;
      if (Math.abs(z + 1100) < 95 && Math.abs(x) < 520) continue;
      // On the hero-left headland, plant pines / cypress — not a lawn of green blobs
      if (x > 40 && z < -1180) {
        if (h < 8) continue;
        const bucket = i % 3;
        trees[bucket].push({ x, y: h, z, s: 0.95 + (i % 4) * 0.25, r: a, cone: i % 2 === 0 });
        continue;
      }
      blobs.push({ x, y: h + 1.2, z, s: 1.6 + (i % 4) * 0.45, r: a });
    }
  }

  const treeFrac = q.trees == null ? 1 : q.trees;
  const caps = trees.map((list) => Math.min(list.length, Math.floor(list.length * treeFrac)));
  const maxP = Math.min(palms.length, Math.floor(palms.length * Math.min(1, treeFrac + 0.15)));

  const allTrees = [];
  trees.forEach((list, i) => { for (let k = 0; k < caps[i]; k++) allTrees.push(list[k]); });
  const broads = allTrees.filter((p) => !p.cone);
  const conifers = allTrees.filter((p) => p.cone).map((p) => {
    // Cypress: tall thin; pine: regular stacked cones
    const cypress = ((Math.abs((p.x * 11 + p.z * 5) | 0) % 3) === 0) || p.z < -1180;
    if (cypress) {
      const s = p.s;
      return { ...p, sx: s * 0.52, sy: s * 1.22, sz: s * 0.52 };
    }
    return p;
  });
  const nearR = quality === "low" ? 70 : quality === "high" ? 130 : 100;
  const lods = [];
  const matNear = foliageMat();
  const matFar = foliageMat();
  if (broads.length) {
    const lod = instanceLod(treePrototype("broad"), farPrototype("broad"), matNear, broads, broads.length, nearR);
    group.add(lod.near, lod.far);
    lods.push(lod);
  }
  if (conifers.length) {
    const lod = instanceLod(treePrototype("cone"), farPrototype("cone"), matNear, conifers, conifers.length, nearR);
    group.add(lod.near, lod.far);
    lods.push(lod);
  }

  for (const p of palms.slice(0, maxP)) {
    blobs.push({ x: p.x, y: p.y + 3.2, z: p.z, s: 1.3 + p.s * 0.4, r: p.r });
    blobs.push({ x: p.x, y: p.y + 6.4, z: p.z, s: 0.9 + p.s * 0.25, r: p.r + 1 });
  }
  if (blobs.length) {
    const lod = instanceLod(bushPrototype(), farPrototype("bush"), matFar, blobs, blobs.length, nearR * 0.75);
    group.add(lod.near, lod.far);
    lods.push(lod);
  }

  scene.add(group);
  return {
    group, treeCount: allTrees.length, palmCount: maxP, blobCount: blobs.length,
    update(cam) {
      if (!cam) return;
      for (const lod of lods) tickLod(lod, cam, false);
    },
    refresh(cam) {
      if (!cam) return;
      for (const lod of lods) tickLod(lod, cam, true);
    },
  };
}
