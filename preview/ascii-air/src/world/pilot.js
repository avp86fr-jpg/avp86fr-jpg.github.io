import * as THREE from "three";
import { MAT } from "../core/config.js";
import { retagGeometry, patchMaterialIdAlpha } from "../render/idMaterial.js";

function mat(color, matId = MAT.PLANE) {
  const m = new THREE.MeshLambertMaterial({
    color, flatShading: true, emissive: color, emissiveIntensity: 0.6,
  });
  m.userData.matId = matId;
  patchMaterialIdAlpha(m);
  return m;
}

/**
 * Original airmail pilot (not any licensed character):
 * round face, short dark curls, tan cap, amber goggles, ochre jacket, teal scarf.
 */
export function createPilot() {
  const g = new THREE.Group();
  g.name = "pilot";
  const skin = mat(0xf0c8a0, MAT.PLANE);
  const hair = mat(0x2a1a14, MAT.WOOD);
  const cap = mat(0x7a4a28, MAT.WOOD);
  const jacket = mat(0xe0a04a, MAT.ROOF);
  const scarf = mat(0x2aa8a0, MAT.METAL);
  const goggle = mat(0x3a3a3a, MAT.METAL);

  const head = new THREE.Mesh(retagGeometry(new THREE.SphereGeometry(0.28, 8, 6), MAT.PLANE, 1), skin);
  head.position.set(0, 0.42, 0.02);
  const curls = new THREE.Mesh(retagGeometry(new THREE.SphereGeometry(0.3, 8, 6), MAT.WOOD, 1), hair);
  curls.position.set(0, 0.50, -0.02);
  curls.scale.set(1.05, 0.7, 1.05);
  const hat = new THREE.Mesh(retagGeometry(new THREE.SphereGeometry(0.26, 8, 6), MAT.WOOD, 1), cap);
  hat.position.set(0, 0.58, 0);
  hat.scale.set(1.05, 0.42, 1.05);
  const brim = new THREE.Mesh(retagGeometry(new THREE.CylinderGeometry(0.32, 0.32, 0.04, 8), MAT.WOOD, 1), cap);
  brim.position.set(0, 0.50, 0.08);
  brim.rotation.x = -0.3;
  const glassL = new THREE.Mesh(retagGeometry(new THREE.SphereGeometry(0.08, 6, 5), MAT.METAL, 1), goggle);
  glassL.position.set(-0.1, 0.44, 0.22);
  glassL.scale.set(1, 0.8, 0.4);
  const glassR = glassL.clone();
  glassR.position.x = 0.1;
  const body = new THREE.Mesh(retagGeometry(new THREE.SphereGeometry(0.36, 8, 6), MAT.ROOF, 1), jacket);
  body.position.set(0, 0.02, -0.04);
  body.scale.set(0.85, 1.0, 0.7);
  const wrap = new THREE.Mesh(retagGeometry(new THREE.TorusGeometry(0.22, 0.05, 6, 10), MAT.METAL, 1), scarf);
  wrap.position.set(0, 0.22, 0.02);
  wrap.rotation.x = 1.2;
  g.add(head, curls, hat, brim, glassL, glassR, body, wrap);
  g.scale.setScalar(1);
  return g;
}

/** Attach a seated pilot into a plane group's cockpit. */
export function seatPilot(plane) {
  const p = createPilot();
  p.position.set(0, 0.55, 0.7);
  p.scale.setScalar(0.85);
  plane.add(p);
  return p;
}
