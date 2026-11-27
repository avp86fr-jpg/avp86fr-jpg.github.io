import * as THREE from "three";
import { MAT } from "../core/config.js";
import { retagGeometry, patchMaterialIdAlpha } from "../render/idMaterial.js";

/** Cheap feel FX: one spark mesh, one dust mesh, a few reusable skid marks. */
export function createFeelFX(scene) {
  const group = new THREE.Group();
  group.name = "feel-fx";
  scene.add(group);

  const sparkN = 48;
  const sparkGeo = retagGeometry(new THREE.SphereGeometry(0.28, 5, 4), MAT.LIGHT, 1);
  const sparkMat = patchMaterialIdAlpha(new THREE.MeshBasicMaterial({
    color: 0xffe86a, toneMapped: false, transparent: true, opacity: 1, depthWrite: false, fog: true,
  }));
  const sparks = new THREE.InstancedMesh(sparkGeo, sparkMat, sparkN);
  sparks.frustumCulled = false;
  sparks.count = sparkN;
  group.add(sparks);
  const sparkLive = [];
  const dummy = new THREE.Object3D();
  dummy.scale.set(0, 0, 0);
  dummy.updateMatrix();
  for (let i = 0; i < sparkN; i++) sparks.setMatrixAt(i, dummy.matrix);
  sparks.instanceMatrix.needsUpdate = true;

  const dustN = 28;
  const dustGeo = retagGeometry(new THREE.SphereGeometry(0.7, 5, 4), MAT.FOAM, 1);
  const dustMat = patchMaterialIdAlpha(new THREE.MeshBasicMaterial({
    color: 0xd8c8a0, toneMapped: false, transparent: true, opacity: 0.7, depthWrite: false, fog: true,
  }));
  const dust = new THREE.InstancedMesh(dustGeo, dustMat, dustN);
  dust.frustumCulled = false;
  dust.count = dustN;
  group.add(dust);
  const dustLive = [];
  for (let i = 0; i < dustN; i++) dust.setMatrixAt(i, dummy.matrix);
  dust.instanceMatrix.needsUpdate = true;

  const skids = [];
  const skidGeo = retagGeometry(new THREE.PlaneGeometry(1.1, 9), MAT.DIRT, 0);
  skidGeo.rotateX(-Math.PI / 2);
  const skidMat = patchMaterialIdAlpha(new THREE.MeshBasicMaterial({
    color: 0x2a241c, transparent: true, opacity: 0.55, depthWrite: false, fog: true,
  }));
  for (let i = 0; i < 6; i++) {
    const m = new THREE.Mesh(skidGeo, skidMat.clone());
    m.visible = false;
    m.position.y = 0.08;
    group.add(m);
    skids.push({ mesh: m, life: 0 });
  }
  let skidI = 0;
  let sparkI = 0;
  let dustI = 0;

  function burst(kind, pos, count, speed, life, color) {
    const isDust = kind === "dust";
    const live = isDust ? dustLive : sparkLive;
    const mesh = isDust ? dust : sparks;
    let idx = isDust ? dustI : sparkI;
    const cap = isDust ? dustN : sparkN;
    if (color && !isDust) sparkMat.color.setHex(color);
    for (let i = 0; i < count; i++) {
      const slot = idx % cap;
      idx++;
      const dir = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        Math.random() * (isDust ? 1.2 : 1.6),
        (Math.random() - 0.5) * 2
      ).normalize().multiplyScalar(speed * (0.4 + Math.random() * 0.8));
      live[slot] = {
        x: pos.x, y: pos.y, z: pos.z,
        vx: dir.x, vy: dir.y, vz: dir.z,
        life, max: life,
        s: isDust ? 0.9 + Math.random() * 1.4 : 0.5 + Math.random() * 0.9,
      };
    }
    if (isDust) dustI = idx; else sparkI = idx;
    mesh.instanceMatrix.needsUpdate = true;
  }

  function burstRing(pos) {
    burst("spark", pos, 18, 14, 0.55, 0xffe86a);
  }
  function burstMail(pos, drop = true) {
    burst("spark", { x: pos.x, y: pos.y - 2, z: pos.z }, drop ? 16 : 10, drop ? 10 : 8, 0.6, drop ? 0xf4e0a0 : 0xfff4c8);
    if (drop) burst("dust", { x: pos.x, y: pos.y - 4, z: pos.z }, 8, 5, 0.7);
  }
  function touchdown(pos, heading = 0, surface = "runway") {
    const wet = surface === "water" || surface === "lagoon";
    if (wet) {
      burst("dust", { x: pos.x, y: 1.2, z: pos.z }, 16, 8, 0.9);
      return;
    }
    burst("dust", { x: pos.x, y: pos.y + 0.4, z: pos.z }, 20, 9, 1.05);
    const s = skids[skidI % skids.length];
    skidI++;
    s.life = 8;
    s.mesh.visible = true;
    s.mesh.position.set(pos.x, (pos.y || 0) + 0.06, pos.z);
    s.mesh.rotation.y = -heading + Math.PI / 2;
    s.mesh.scale.set(1.1, 1, 1.4);
    s.mesh.material.opacity = 0.58;
  }

  function update(dt) {
    const tick = (live, mesh, n, grav) => {
      let dirty = false;
      dummy.rotation.set(0, 0, 0);
      for (let i = 0; i < n; i++) {
        const p = live[i];
        if (!p || p.life <= 0) {
          if (p) {
            dummy.position.set(0, -999, 0);
            dummy.scale.set(0, 0, 0);
            dummy.updateMatrix();
            mesh.setMatrixAt(i, dummy.matrix);
            live[i] = null;
            dirty = true;
          }
          continue;
        }
        p.life -= dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;
        p.vy += grav * dt;
        const k = Math.max(0, p.life / p.max);
        dummy.position.set(p.x, p.y, p.z);
        dummy.scale.setScalar(p.s * (0.4 + 0.6 * k));
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        dirty = true;
      }
      if (dirty) mesh.instanceMatrix.needsUpdate = true;
    };
    tick(sparkLive, sparks, sparkN, -8);
    tick(dustLive, dust, dustN, -4);
    sparkMat.opacity = 1;
    dustMat.opacity = 0.65;
    for (const s of skids) {
      if (s.life <= 0) { s.mesh.visible = false; continue; }
      s.life -= dt;
      s.mesh.material.opacity = 0.58 * Math.max(0, Math.min(1, s.life / 3));
      if (s.life <= 0) s.mesh.visible = false;
    }
  }

  return { group, burstRing, burstMail, touchdown, update };
}
