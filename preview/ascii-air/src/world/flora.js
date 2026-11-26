import * as THREE from "three";
import { MAT, QUALITY } from "../core/config.js";
import { retagGeometry, patchMaterialIdAlpha } from "../render/idMaterial.js";
import { fbm } from "./noise.js";

const GREENS = [0x3cb44a, 0x2a8f34, 0x5bc45a];

function trunkGeo() {
  return retagGeometry(new THREE.CylinderGeometry(0.28, 0.48, 4.4, 6), MAT.WOOD);
}
function canopyGeo(kind) {
  if (kind === "cone") return retagGeometry(new THREE.ConeGeometry(2.15, 5.4, 7), MAT.FOLIAGE);
  const g = retagGeometry(new THREE.SphereGeometry(2.35, 7, 5), MAT.FOLIAGE);
  return g;
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
    emissiveIntensity: 0.58,
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
    dummy.scale.setScalar(p.s);
    dummy.updateMatrix();
    inst.setMatrixAt(i, dummy.matrix);
  }
  inst.instanceMatrix.needsUpdate = true;
  inst.count = cap;
  inst.frustumCulled = true;
  return inst;
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
      const h = terrain.heightAt(jx, jz);
      const m = terrain.materialAt(jx, jz);
      if (h < 1.6 || h > 145) continue;
      if (m === MAT.RUNWAY || m === MAT.ROAD || m === MAT.DIRT) continue;
      if (Math.abs(jz + 1100) < 95 && Math.abs(jx) < 520) continue;
      if (Math.abs(jz - 1120) < 32 && Math.abs(jx + 820) < 170) continue;
      const n = fbm(jx * 0.004, jz * 0.004, 3, 77);
      const dx = jx + 40, dz = jz + 1220;
      const inCove = dx * dx + dz * dz < 110 * 110;
      if (inCove && h < 8 && n > 0.3) {
        palms.push({ x: jx, y: h, z: jz, s: 0.9 + n * 0.45, r: n * 6 });
      } else if (m === MAT.FOREST || (m === MAT.GRASS && n > (z < -200 && z > -1000 ? 0.18 : 0.26) && h > 5)) {
        const bucket = (Math.abs((jx * 13 + jz * 7) | 0) % 3);
        trees[bucket].push({ x: jx, y: h, z: jz, s: 0.75 + n * 0.7, r: n * 8, cone: n > 0.55 });
      }
    }
  }
  const groves = [
    [-80, -1180], [70, -1160], [-220, -980], [160, -860],
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
      const h = terrain.heightAt(x, z);
      if (h < 1.5 || h > 150) continue;
      if (Math.abs(z + 1100) < 95 && Math.abs(x) < 520) continue;
      blobs.push({ x, y: h + 1.2, z, s: 1.6 + (i % 4) * 0.45, r: a });
    }
  }

  const treeFrac = q.trees == null ? 1 : q.trees;
  const caps = trees.map((list) => Math.min(list.length, Math.floor(list.length * treeFrac)));
  const maxP = Math.min(palms.length, Math.floor(palms.length * Math.min(1, treeFrac + 0.15)));

  const allTrees = [];
  trees.forEach((list, i) => { for (let k = 0; k < caps[i]; k++) allTrees.push(list[k]); });
  if (allTrees.length) {
    const tg = trunkGeo();
    tg.translate(0, 2.2, 0);
    const cg = canopyGeo("sphere");
    cg.translate(0, 5.4, 0);
    const treeG = mergeGeos([tg, cg], MAT.FOLIAGE);
    group.add(instance(treeG, flatMat(0x2a9a2a, MAT.FOLIAGE), allTrees, allTrees.length));
  }

  // Palms share the foliage-blob instance so flora stays at two draws (trees + blobs).
  for (const p of palms.slice(0, maxP)) {
    blobs.push({ x: p.x, y: p.y + 3.2, z: p.z, s: 1.3 + p.s * 0.4, r: p.r });
    blobs.push({ x: p.x, y: p.y + 6.4, z: p.z, s: 0.9 + p.s * 0.25, r: p.r + 1 });
  }
  if (blobs.length) {
    const bg = canopyGeo("sphere");
    bg.scale(1.8, 1.15, 1.8);
    group.add(instance(bg, flatMat(0x2f8a38, MAT.FOLIAGE), blobs, blobs.length));
  }

  scene.add(group);
  return { group, treeCount: allTrees.length, palmCount: maxP, blobCount: blobs.length };
}
