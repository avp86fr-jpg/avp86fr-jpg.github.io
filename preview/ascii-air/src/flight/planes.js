import * as THREE from "three";
import { MAT, PLANES } from "../core/config.js";
import { retagGeometry, tagMesh, patchMaterialIdAlpha } from "../render/idMaterial.js";
import { seatPilot } from "../world/pilot.js";

function mat(color, matId = MAT.PLANE, hero = 1) {
  const m = new THREE.MeshLambertMaterial({ color, flatShading: false, emissive: color, emissiveIntensity: 0.28 });
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

/** Original 1920s airmail biplane — COURRIER C-14 (lookalike, not a licensed type). */
function envelopeDecal(g, cream, dark, x, y, z) {
  add(g, new THREE.BoxGeometry(1.4, 0.06, 0.95), cream, MAT.PLANE, x, y, z);
  add(g, new THREE.BoxGeometry(1.4, 0.05, 0.42), cream, MAT.PLANE, x, y + 0.02, z - 0.18, 0.65, 0, 0);
  add(g, new THREE.BoxGeometry(0.06, 0.08, 0.95), dark, MAT.METAL, x, y + 0.04, z);
  add(g, new THREE.BoxGeometry(1.4, 0.07, 0.05), dark, MAT.METAL, x, y + 0.04, z + 0.18, 0, 0, 0.45);
  add(g, new THREE.BoxGeometry(1.4, 0.07, 0.05), dark, MAT.METAL, x, y + 0.04, z + 0.18, 0, 0, -0.45);
}

function wire(g, dark, x0, y0, z0, x1, y1, z1) {
  const dx = x1 - x0, dy = y1 - y0, dz = z1 - z0;
  const len = Math.hypot(dx, dy, dz) || 0.01;
  const m = add(g, new THREE.CylinderGeometry(0.016, 0.016, len, 3), dark, MAT.METAL, (x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(dx, dy, dz).normalize());
  return m;
}

function buildTrainer(s) {
  const g = new THREE.Group();
  const red = s.body, cream = s.accent, dark = s.dark;

  // fuselage
  add(g, new THREE.CylinderGeometry(0.52, 0.74, 5.8, 14), red, MAT.PLANE, 0, 0.22, -0.15, Math.PI / 2, 0, 0);
  add(g, new THREE.SphereGeometry(0.74, 12, 10), red, MAT.PLANE, 0, 0.24, 2.55);
  add(g, new THREE.SphereGeometry(0.4, 10, 8), red, MAT.PLANE, 0, 0.3, -3.0);
  add(g, new THREE.BoxGeometry(0.9, 0.14, 5.4), cream, MAT.PLANE, 0, -0.28, 0.15);
  add(g, new THREE.TorusGeometry(0.4, 0.055, 6, 14), dark, MAT.METAL, 0, 0.78, 0.18, Math.PI / 2, 0, 0);

  // upper wing + envelope insignia
  add(g, new THREE.BoxGeometry(11.6, 0.14, 1.9), red, MAT.PLANE, 0, 1.62, 0.12);
  add(g, new THREE.CylinderGeometry(0.95, 0.95, 0.14, 12), red, MAT.PLANE, 5.8, 1.62, 0.12, 0, 0, Math.PI / 2);
  add(g, new THREE.CylinderGeometry(0.95, 0.95, 0.14, 12), red, MAT.PLANE, -5.8, 1.62, 0.12, 0, 0, Math.PI / 2);
  envelopeDecal(g, cream, dark, 2.65, 1.72, 0.12);
  envelopeDecal(g, cream, dark, -2.65, 1.72, 0.12);

  // lower wing + ailerons
  add(g, new THREE.BoxGeometry(10.3, 0.13, 1.7), red, MAT.PLANE, 0, -0.06, 0.32);
  add(g, new THREE.CylinderGeometry(0.85, 0.85, 0.13, 12), red, MAT.PLANE, 5.15, -0.06, 0.32, 0, 0, Math.PI / 2);
  add(g, new THREE.CylinderGeometry(0.85, 0.85, 0.13, 12), red, MAT.PLANE, -5.15, -0.06, 0.32, 0, 0, Math.PI / 2);
  const ailL = add(g, new THREE.BoxGeometry(2.3, 0.08, 0.42), red, MAT.PLANE, 2.9, -0.06, 1.08);
  const ailR = add(g, new THREE.BoxGeometry(2.3, 0.08, 0.42), red, MAT.PLANE, -2.9, -0.06, 1.08);

  // struts, cabane, wires
  for (const side of [1, -1]) {
    for (const z of [0.55, -0.18]) {
      add(g, new THREE.BoxGeometry(0.07, 1.72, 0.07), cream, MAT.WOOD, side * 2.45, 0.78, z);
      add(g, new THREE.BoxGeometry(0.07, 1.72, 0.07), cream, MAT.WOOD, side * 4.25, 0.78, z);
    }
    add(g, new THREE.BoxGeometry(0.07, 1.2, 0.07), cream, MAT.WOOD, side * 0.55, 1.08, 0.5, 0, 0, side * 0.28);
    add(g, new THREE.BoxGeometry(0.07, 1.2, 0.07), cream, MAT.WOOD, side * 0.55, 1.08, -0.12, 0, 0, side * 0.28);
    wire(g, dark, side * 2.45, 1.55, 0.55, side * 4.25, 0.0, -0.18);
    wire(g, dark, side * 4.25, 1.55, 0.55, side * 2.45, 0.0, -0.18);
  }

  // radial engine
  add(g, new THREE.CylinderGeometry(0.64, 0.64, 0.72, 14), dark, MAT.METAL, 0, 0.22, 3.1, Math.PI / 2);
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2;
    add(g, new THREE.CylinderGeometry(0.15, 0.15, 0.48, 8), dark, MAT.METAL,
      Math.cos(a) * 0.58, 0.22 + Math.sin(a) * 0.58, 3.1, 0, 0, Math.PI / 2 - a);
  }
  add(g, new THREE.SphereGeometry(0.4, 10, 8), dark, MAT.METAL, 0, 0.22, 3.22);

  // cream tail + control surfaces
  add(g, new THREE.BoxGeometry(0.1, 1.6, 1.2), cream, MAT.PLANE, 0, 1.08, -3.2);
  add(g, new THREE.BoxGeometry(0.12, 1.6, 0.1), red, MAT.PLANE, 0, 1.08, -2.65);
  const rudder = add(g, new THREE.BoxGeometry(0.08, 1.25, 0.42), cream, MAT.PLANE, 0, 1.08, -3.78);
  add(g, new THREE.BoxGeometry(3.15, 0.1, 0.95), cream, MAT.PLANE, 0, 0.36, -3.25);
  const elev = add(g, new THREE.BoxGeometry(2.85, 0.08, 0.4), cream, MAT.PLANE, 0, 0.36, -3.75);

  // gear
  add(g, new THREE.BoxGeometry(0.08, 1.2, 0.08), dark, MAT.METAL, 1.1, -0.68, 0.72);
  add(g, new THREE.BoxGeometry(0.08, 1.2, 0.08), dark, MAT.METAL, -1.1, -0.68, 0.72);
  add(g, new THREE.BoxGeometry(2.3, 0.08, 0.08), dark, MAT.METAL, 0, -1.08, 0.72);
  const wL = add(g, new THREE.CylinderGeometry(0.44, 0.44, 0.2, 14), dark, MAT.METAL, 1.18, -1.25, 0.72, 0, 0, Math.PI / 2);
  const wR = add(g, new THREE.CylinderGeometry(0.44, 0.44, 0.2, 14), dark, MAT.METAL, -1.18, -1.25, 0.72, 0, 0, Math.PI / 2);
  add(g, new THREE.CylinderGeometry(0.22, 0.22, 0.12, 10), cream, MAT.PLANE, 1.18, -1.25, 0.72, 0, 0, Math.PI / 2);
  add(g, new THREE.CylinderGeometry(0.22, 0.22, 0.12, 10), cream, MAT.PLANE, -1.18, -1.25, 0.72, 0, 0, Math.PI / 2);
  add(g, new THREE.BoxGeometry(0.07, 0.72, 0.07), dark, MAT.METAL, 0, -0.32, -2.75, 0.5, 0, 0);
  const wT = add(g, new THREE.CylinderGeometry(0.16, 0.16, 0.1, 8), dark, MAT.METAL, 0, -0.72, -2.9, 0, 0, Math.PI / 2);

  // spinning translucent prop disc (no frozen black-X in stills)
  const prop = new THREE.Group();
  prop.name = "prop";
  add(prop, new THREE.CylinderGeometry(0.12, 0.12, 0.42, 8), dark, MAT.METAL, 0, 0, 0.08, Math.PI / 2);
  add(prop, new THREE.SphereGeometry(0.18, 8, 6), cream, MAT.PLANE, 0, 0, 0.28);
  const discMat = patchMaterialIdAlpha(new THREE.MeshBasicMaterial({
    color: 0xd8c8a0, transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false, toneMapped: false,
  }));
  const disc = new THREE.Mesh(new THREE.CircleGeometry(1.35, 28), discMat);
  prop.add(disc);
  const bladeMat = patchMaterialIdAlpha(new THREE.MeshBasicMaterial({
    color: 0x5a4030, transparent: true, opacity: 0.16, depthWrite: false,
  }));
  const b1 = new THREE.Mesh(new THREE.BoxGeometry(0.16, 2.5, 0.04), bladeMat);
  const b2 = b1.clone();
  b2.rotation.z = Math.PI / 2;
  prop.add(b1, b2);
  prop.position.set(0, 0.22, 3.5);
  g.add(prop);

  const pilot = seatPilot(g);
  pilot.position.set(0, 0.55, 0.12);
  pilot.scale.setScalar(1.08);

  g.userData.prop = prop;
  g.userData.wheels = [wL, wR, wT];
  g.userData.elevator = elev;
  g.userData.rudder = rudder;
  g.userData.ailL = ailL;
  g.userData.ailR = ailR;
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

function mergePlaneStatic(root, keep = []) {
  const keepSet = new Set(keep.filter(Boolean));
  const skip = (o) => {
    let n = o;
    while (n && n !== root) {
      if (keepSet.has(n) || n.name === "prop") return true;
      n = n.parent;
    }
    return false;
  };
  const buckets = new Map();
  const toRemove = [];
  root.updateMatrixWorld(true);
  root.traverse((o) => {
    if (!o.isMesh || skip(o) || !o.geometry || !o.material) return;
    const mat = o.material;
    const col = mat.color ? mat.color.getHex() : 0;
    const key = col + ":" + (mat.type || "") + ":" + (mat.transparent ? 1 : 0) + ":" + ((mat.opacity || 1).toFixed(2));
    if (mat.transparent) return;
    if (!buckets.has(key)) buckets.set(key, { mat, geos: [] });
    const g = o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    buckets.get(key).geos.push(g);
    toRemove.push(o);
  });
  for (const o of toRemove) { if (o.parent) o.parent.remove(o); }
  const merged = new THREE.Group();
  merged.name = "plane-body";
  for (const { mat, geos } of buckets.values()) {
    if (!geos.length) continue;
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
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("normal", new THREE.BufferAttribute(nrm, 3));
    geo.setIndex(idx);
    merged.add(new THREE.Mesh(geo, mat));
  }
  root.add(merged);
  return root;
}

const BUILDERS = { trainer: buildTrainer, seaplane: buildSeaplane, glider: buildGlider };

export function createPlaneMesh(id, colors) {
  const def = PLANES[id];
  const s = scheme(colors?.color || def.color, colors?.accent || def.accent);
  const visual = BUILDERS[id](s);
  // Builders place the nose at +Z; flight/camera forward is -Z, so flip the visual.
  visual.name = "plane-visual";
  visual.rotation.y = Math.PI;
  visual.scale.setScalar(1.2);
  const g = new THREE.Group();
  g.name = "plane-" + id;
  g.add(visual);
  const ud = visual.userData || {};
  g.userData = ud;
  mergePlaneStatic(visual, [ud.prop, ud.elevator, ud.rudder, ud.ailL, ud.ailR]);
  tagMesh(g, MAT.PLANE, 1);
  return g;
}
