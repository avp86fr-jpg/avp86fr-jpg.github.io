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
  const SIZE = 1450;
  const step = 11;
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
      const isPalm = (m === MAT.SAND && h < 7) || (jz < -1180 && h < 9 && n > 0.32);
      if (isPalm) {
        if (n < 0.28) continue;
        palms.push({ x: jx, y: h, z: jz, s: 0.85 + n * 0.5, r: n * 6 });
      } else if (m === MAT.FOREST || (m === MAT.GRASS && n > 0.40 && h > 6)) {
        const bucket = (Math.abs((jx * 13 + jz * 7) | 0) % 3);
        trees[bucket].push({ x: jx, y: h, z: jz, s: 0.75 + n * 0.7, r: n * 8, cone: n > 0.55 });
      }
    }
  }

  const treeFrac = q.trees == null ? 1 : q.trees;
  const caps = trees.map((list) => Math.min(list.length, Math.floor(list.length * treeFrac)));
  const maxP = Math.min(palms.length, Math.floor(palms.length * Math.min(1, treeFrac + 0.15)));

  const trunkM = flatMat(0x6a4424, MAT.WOOD);
  const trunkG = trunkGeo();
  // one trunk instanced mesh for all trees (concat placements)
  const allTrees = [];
  trees.forEach((list, i) => { for (let k = 0; k < caps[i]; k++) allTrees.push(list[k]); });
  if (allTrees.length) group.add(instance(trunkG, trunkM, allTrees, allTrees.length));

  const sphereG = canopyGeo("sphere");
  const coneG = canopyGeo("cone");
  for (let i = 0; i < 3; i++) {
    const list = trees[i].slice(0, caps[i]);
    const spheres = list.filter((p) => !p.cone);
    const cones = list.filter((p) => p.cone);
    const mat = flatMat(GREENS[i], MAT.FOLIAGE);
    if (spheres.length) group.add(instance(sphereG, mat, spheres, spheres.length));
    if (cones.length) group.add(instance(coneG, mat, cones, cones.length));
  }

  if (maxP) {
    group.add(instance(palmTrunkGeo(), flatMat(0x8a6230, MAT.WOOD), palms, maxP));
    group.add(instance(palmCrownGeo(), flatMat(0x3aa24a, MAT.FOLIAGE), palms, maxP));
  }

  scene.add(group);
  return { group, treeCount: allTrees.length, palmCount: maxP };
}
