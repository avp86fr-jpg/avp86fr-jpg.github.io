import * as THREE from "three";
import { MAT, PLANES } from "../core/config.js";
import { retagGeometry, tagMesh, patchMaterialIdAlpha } from "../render/idMaterial.js";
import { seatPilot } from "../world/pilot.js";

function mat(color, matId = MAT.PLANE, hero = 1) {
  const m = new THREE.MeshLambertMaterial({ color, flatShading: true, emissive: color, emissiveIntensity: 0.35 });
  m.userData.matId = matId;
  patchMaterialIdAlpha(m);
  return m;
}
function add(g, geo, material, matId, x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  retagGeometry(geo, matId, 1);
  const mesh = new THREE.Mesh(geo, material);
  mesh.position.set(x, y, z);
  mesh.rotation.set(rx, ry, rz);
  mesh.scale.set(sx, sy, sz);
  mesh.castShadow = false;
  g.add(mesh);
  return mesh;
}

function scheme(base, accent) {
  return {
    body: mat(base, MAT.PLANE, 1),
    accent: mat(accent, MAT.PLANE, 1),
    dark: mat(0x2a2a2c, MAT.METAL, 1),
    glass: mat(0x9ad4e8, MAT.METAL, 1),
    prop: mat(0x3a2a1a, MAT.WOOD, 1),
  };
}

/** Original island-hopper: chubby high-wing, rounded tail, coral accents. */
function buildTrainer(s) {
  const g = new THREE.Group();
  // fuselage
  add(g, new THREE.CylinderGeometry(0.7, 0.9, 6.4, 8), s.body, MAT.PLANE, 0, 0, 0.2, Math.PI / 2, 0, 0);
  add(g, new THREE.SphereGeometry(0.9, 8, 6), s.body, MAT.PLANE, 0, 0.05, 2.4);
  add(g, new THREE.SphereGeometry(0.55, 8, 6), s.body, MAT.PLANE, 0, 0.1, -3.0);
  // cockpit bulge
  add(g, new THREE.SphereGeometry(0.7, 8, 6), s.glass, MAT.METAL, 0, 0.55, 0.8, 0, 0, 0, 1, 0.7, 1.1);
  // high wing
  add(g, new THREE.BoxGeometry(10.2, 0.16, 1.7), s.body, MAT.PLANE, 0, 1.15, 0.4);
  add(g, new THREE.BoxGeometry(10.2, 0.05, 0.25), s.accent, MAT.PLANE, 0, 1.24, 0.4);
  // struts
  add(g, new THREE.BoxGeometry(0.08, 1.3, 0.08), s.dark, MAT.METAL, 1.6, 0.5, 0.5, 0, 0, 0.35);
  add(g, new THREE.BoxGeometry(0.08, 1.3, 0.08), s.dark, MAT.METAL, -1.6, 0.5, 0.5, 0, 0, -0.35);
  // tail
  add(g, new THREE.BoxGeometry(0.12, 1.6, 1.1), s.body, MAT.PLANE, 0, 0.9, -3.0);
  add(g, new THREE.BoxGeometry(2.6, 0.1, 0.8), s.body, MAT.PLANE, 0, 0.15, -3.1);
  add(g, new THREE.BoxGeometry(0.12, 1.6, 0.12), s.accent, MAT.PLANE, 0, 0.9, -3.5);
  // gear
  add(g, new THREE.BoxGeometry(0.1, 1.1, 0.1), s.dark, MAT.METAL, 1.1, -0.7, 0.6);
  add(g, new THREE.BoxGeometry(0.1, 1.1, 0.1), s.dark, MAT.METAL, -1.1, -0.7, 0.6);
  add(g, new THREE.BoxGeometry(0.08, 0.8, 0.08), s.dark, MAT.METAL, 0, -0.4, -2.4, 0.4, 0, 0);
  const wL = add(g, new THREE.CylinderGeometry(0.28, 0.28, 0.18, 8), s.dark, MAT.METAL, 1.1, -1.25, 0.6, 0, 0, Math.PI / 2);
  const wR = add(g, new THREE.CylinderGeometry(0.28, 0.28, 0.18, 8), s.dark, MAT.METAL, -1.1, -1.25, 0.6, 0, 0, Math.PI / 2);
  const wT = add(g, new THREE.CylinderGeometry(0.18, 0.18, 0.14, 8), s.dark, MAT.METAL, 0, -0.85, -2.6, 0, 0, Math.PI / 2);
  // prop
  const prop = new THREE.Group();
  prop.name = "prop";
  add(prop, new THREE.CylinderGeometry(0.12, 0.12, 0.4, 8), s.dark, MAT.METAL, 0, 0, 0.15, Math.PI / 2);
  add(prop, new THREE.BoxGeometry(0.15, 2.2, 0.08), s.prop, MAT.WOOD, 0, 0, 0);
  add(prop, new THREE.BoxGeometry(2.2, 0.15, 0.08), s.prop, MAT.WOOD, 0, 0, 0);
  prop.position.set(0, 0, 3.4);
  g.add(prop);
  g.userData.prop = prop;
  g.userData.wheels = [wL, wR, wT];
  seatPilot(g);
  return g;
}

/** Lagoon skimmer: mid-wing, twin floats, blue-white. */
function buildSeaplane(s) {
  const g = new THREE.Group();
  add(g, new THREE.CylinderGeometry(0.65, 0.85, 7.0, 8), s.body, MAT.PLANE, 0, 0.4, 0, Math.PI / 2);
  add(g, new THREE.SphereGeometry(0.85, 8, 6), s.body, MAT.PLANE, 0, 0.45, 2.6);
  add(g, new THREE.SphereGeometry(0.5, 8, 6), s.body, MAT.PLANE, 0, 0.5, -3.3);
  add(g, new THREE.SphereGeometry(0.65, 8, 6), s.glass, MAT.METAL, 0, 0.95, 0.9, 0, 0, 0, 1, 0.65, 1.1);
  add(g, new THREE.BoxGeometry(12.0, 0.16, 1.8), s.body, MAT.PLANE, 0, 0.7, 0.2);
  add(g, new THREE.BoxGeometry(12.0, 0.05, 0.22), s.accent, MAT.PLANE, 0, 0.8, 0.2);
  add(g, new THREE.BoxGeometry(0.12, 1.5, 1.0), s.body, MAT.PLANE, 0, 1.3, -3.2);
  add(g, new THREE.BoxGeometry(2.8, 0.1, 0.8), s.body, MAT.PLANE, 0, 0.5, -3.3);
  // floats
  const floatL = add(g, new THREE.CylinderGeometry(0.32, 0.28, 5.6, 8), s.body, MAT.PLANE, 1.5, -1.1, 0.2, Math.PI / 2);
  const floatR = add(g, new THREE.CylinderGeometry(0.32, 0.28, 5.6, 8), s.body, MAT.PLANE, -1.5, -1.1, 0.2, Math.PI / 2);
  add(g, new THREE.SphereGeometry(0.32, 6, 5), s.body, MAT.PLANE, 1.5, -1.1, 3.0);
  add(g, new THREE.SphereGeometry(0.32, 6, 5), s.body, MAT.PLANE, -1.5, -1.1, 3.0);
  add(g, new THREE.BoxGeometry(0.08, 1.4, 0.08), s.dark, MAT.METAL, 1.5, -0.3, 0.6);
  add(g, new THREE.BoxGeometry(0.08, 1.4, 0.08), s.dark, MAT.METAL, -1.5, -0.3, 0.6);
  add(g, new THREE.BoxGeometry(0.08, 1.4, 0.08), s.dark, MAT.METAL, 1.5, -0.3, -0.8);
  add(g, new THREE.BoxGeometry(0.08, 1.4, 0.08), s.dark, MAT.METAL, -1.5, -0.3, -0.8);
  const prop = new THREE.Group();
  prop.name = "prop";
  add(prop, new THREE.BoxGeometry(0.12, 2.0, 0.07), s.prop, MAT.WOOD, 0, 0, 0);
  add(prop, new THREE.BoxGeometry(2.0, 0.12, 0.07), s.prop, MAT.WOOD, 0, 0, 0);
  prop.position.set(0, 0.5, 3.55);
  g.add(prop);
  g.userData.prop = prop;
  g.userData.floats = [floatL, floatR];
  seatPilot(g);
  return g;
}

/** Ridge whisper: long slender wings, orange tips, no engine. */
function buildGlider(s) {
  const g = new THREE.Group();
  add(g, new THREE.CylinderGeometry(0.38, 0.48, 6.6, 8), s.body, MAT.PLANE, 0, 0.15, 0, Math.PI / 2);
  add(g, new THREE.SphereGeometry(0.48, 8, 6), s.body, MAT.PLANE, 0, 0.15, 3.1);
  add(g, new THREE.SphereGeometry(0.32, 8, 6), s.body, MAT.PLANE, 0, 0.2, -3.2);
  add(g, new THREE.SphereGeometry(0.46, 8, 6), s.glass, MAT.METAL, 0, 0.45, 0.9, 0, 0, 0, 1, 0.55, 1.2);
  add(g, new THREE.BoxGeometry(15.4, 0.12, 1.15), s.body, MAT.PLANE, 0, 0.22, 0.15);
  add(g, new THREE.BoxGeometry(1.2, 0.13, 1.15), s.accent, MAT.PLANE, 7.1, 0.23, 0.15);
  add(g, new THREE.BoxGeometry(1.2, 0.13, 1.15), s.accent, MAT.PLANE, -7.1, 0.23, 0.15);
  add(g, new THREE.BoxGeometry(0.1, 1.3, 0.9), s.body, MAT.PLANE, 0, 0.9, -3.0);
  add(g, new THREE.BoxGeometry(2.4, 0.08, 0.7), s.body, MAT.PLANE, 0, 0.2, -3.1);
  // skid
  add(g, new THREE.BoxGeometry(0.2, 0.15, 1.6), s.dark, MAT.METAL, 0, -0.4, 0.4);
  seatPilot(g);
  return g;
}

const BUILDERS = { trainer: buildTrainer, seaplane: buildSeaplane, glider: buildGlider };

export function createPlaneMesh(id, colors) {
  const def = PLANES[id];
  const s = scheme(colors?.color || def.color, colors?.accent || def.accent);
  const g = BUILDERS[id](s);
  g.name = "plane-" + id;
  tagMesh(g, MAT.PLANE, 1);
  return g;
}
