import * as THREE from "three";
import { MAT, QUALITY } from "../core/config.js";
import { retagGeometry, patchMaterialIdAlpha } from "../render/idMaterial.js";
import { fbm } from "./noise.js";

function makeBroadleaf() {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(
    retagGeometry(new THREE.CylinderGeometry(0.28, 0.45, 4.2, 5), MAT.WOOD),
    patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x5a3a1e, flatShading: true }))
  );
  trunk.position.y = 2.1;
  const canopy = new THREE.Mesh(
    retagGeometry(new THREE.IcosahedronGeometry(2.4, 0), MAT.FOLIAGE),
    patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x2f7a38, flatShading: true }))
  );
  canopy.position.y = 4.6;
  canopy.scale.set(1, 0.9, 1.05);
  g.add(trunk, canopy);
  return g;
}

function makePalm() {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(
    retagGeometry(new THREE.CylinderGeometry(0.18, 0.32, 7.5, 5), MAT.WOOD),
    patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x8a6230, flatShading: true }))
  );
  trunk.position.y = 3.7;
  trunk.rotation.z = 0.08;
  g.add(trunk);
  const leafMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x3a9a4a, flatShading: true, side: THREE.DoubleSide }));
  for (let i = 0; i < 6; i++) {
    const leaf = new THREE.Mesh(retagGeometry(new THREE.ConeGeometry(0.4, 3.6, 3), MAT.FOLIAGE), leafMat);
    leaf.position.set(0, 7.4, 0);
    leaf.rotation.set(1.05, (i / 6) * Math.PI * 2, 0);
    g.add(leaf);
  }
  return g;
}

export function createFlora(scene, terrain, quality = "medium") {
  const q = QUALITY[quality] || QUALITY.medium;
  const group = new THREE.Group();
  group.name = "flora";

  const protoT = makeBroadleaf();
  const protoP = makePalm();

  // Collect leaves to instance: trunk + canopy as two instanced meshes for broadleaf;
  // palms are fewer, can be cloned in small batches or instanced similarly.
  // For simplicity and draw-call budget, instance trunks and canopies separately,
  // and instance palm trunks + one merged leaf set.

  const trees = [];
  const palms = [];
  const SIZE = 1500;
  const step = 28;
  for (let x = -SIZE; x < SIZE; x += step) {
    for (let z = -SIZE + ((x / step) % 2) * step * 0.5; z < SIZE; z += step) {
      const jx = x + ((Math.sin(x * 0.11 + z * 0.07) * 10) | 0);
      const jz = z + ((Math.cos(x * 0.09 + z * 0.13) * 10) | 0);
      const h = terrain.heightAt(jx, jz);
      const m = terrain.materialAt(jx, jz);
      if (h < 1.8 || h > 130) continue;
      if (m === MAT.RUNWAY || m === MAT.ROAD || m === MAT.DIRT) continue;
      if (Math.abs(jz + 1100) < 90 && Math.abs(jx) < 500) continue; // airport
      if (Math.abs(jz - 1120) < 30 && Math.abs(jx + 820) < 170) continue; // strip
      const n = fbm(jx * 0.004, jz * 0.004, 3, 77);
      const isPalm = (m === MAT.SAND && h < 6) || (jz < -1200 && h < 8 && n > 0.4);
      if (isPalm) {
        if (n < 0.35) continue;
        palms.push({ x: jx, y: h, z: jz, s: 0.85 + n * 0.5, r: n * 6 });
      } else if (m === MAT.FOREST || (m === MAT.GRASS && n > 0.62 && h > 8)) {
        trees.push({ x: jx, y: h, z: jz, s: 0.8 + n * 0.7, r: n * 8 });
      }
    }
  }

  const maxT = Math.floor(trees.length * q.trees);
  const maxP = Math.floor(palms.length * Math.min(1, q.trees + 0.2));

  function instanceFromGroup(proto, placements, cap) {
    // Flatten proto meshes into instanced copies per submesh
    const parts = [];
    proto.updateMatrixWorld(true);
    proto.traverse((o) => {
      if (!o.isMesh) return;
      const geo = o.geometry.clone();
      geo.applyMatrix4(o.matrixWorld);
      const inst = new THREE.InstancedMesh(geo, o.material, cap);
      inst.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      inst.userData.matId = o.userData.matId || MAT.FOLIAGE;
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
      group.add(inst);
      parts.push(inst);
    });
    return parts;
  }

  instanceFromGroup(protoT, trees, maxT);
  instanceFromGroup(protoP, palms, maxP);

  scene.add(group);
  return { group, treeCount: maxT, palmCount: maxP };
}
