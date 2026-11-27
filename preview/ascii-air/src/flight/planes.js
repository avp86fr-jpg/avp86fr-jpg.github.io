import * as THREE from "three";
import { MAT, PLANES } from "../core/config.js";
import { retagGeometry, tagMesh, patchMaterialIdAlpha } from "../render/idMaterial.js";
import { seatPilot } from "../world/pilot.js";

let _propDiscTex = null;
function makePropDiscTex() {
  if (_propDiscTex) return _propDiscTex;
  const c = typeof document !== "undefined" ? document.createElement("canvas") : null;
  if (!c) {
    _propDiscTex = null;
    return null;
  }
  c.width = c.height = 256;
  const ctx = c.getContext("2d");
  ctx.clearRect(0, 0, 256, 256);
  const g = ctx.createRadialGradient(128, 128, 8, 128, 128, 126);
  g.addColorStop(0.0, "rgba(245, 236, 210, 0.18)");
  g.addColorStop(0.28, "rgba(214, 200, 168, 0.32)");
  g.addColorStop(0.62, "rgba(196, 184, 150, 0.38)");
  g.addColorStop(0.82, "rgba(170, 158, 128, 0.28)");
  g.addColorStop(0.90, "rgba(28, 22, 16, 0.88)");
  g.addColorStop(0.96, "rgba(18, 14, 10, 0.95)");
  g.addColorStop(1.0, "rgba(18, 14, 10, 0.0)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(128, 128, 126, 0, Math.PI * 2);
  ctx.fill();
  // faint spinning-blade streaks
  ctx.save();
  ctx.translate(128, 128);
  ctx.strokeStyle = "rgba(40, 32, 22, 0.18)";
  ctx.lineWidth = 6;
  for (let i = 0; i < 8; i++) {
    ctx.rotate(Math.PI / 8);
    ctx.beginPath();
    ctx.moveTo(16, 0);
    ctx.lineTo(118, 0);
    ctx.stroke();
  }
  ctx.restore();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  _propDiscTex = tex;
  return tex;
}

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

  // Builder space: +Z is the nose (prop), -Z is the tail. Flipped later to flight -Z.
  // Fat cowling, mid cockpit, then a slim tail boom — never a rear disc.
  add(g, new THREE.CylinderGeometry(0.80, 0.66, 2.15, 14), red, MAT.PLANE, 0, 0.28, 2.20, Math.PI / 2, 0, 0);
  add(g, new THREE.SphereGeometry(0.80, 12, 10), red, MAT.PLANE, 0, 0.28, 3.28);
  add(g, new THREE.CylinderGeometry(0.66, 0.34, 2.05, 14), red, MAT.PLANE, 0, 0.28, 0.10, Math.PI / 2, 0, 0);
  add(g, new THREE.CylinderGeometry(0.34, 0.11, 3.55, 12), red, MAT.PLANE, 0, 0.30, -2.60, Math.PI / 2, 0, 0);
  add(g, new THREE.BoxGeometry(0.80, 0.12, 5.0), cream, MAT.PLANE, 0, -0.16, 0.35);

  // Radial engine + cowling rings, clearly at the FRONT
  add(g, new THREE.CylinderGeometry(0.92, 0.92, 0.22, 16), dark, MAT.METAL, 0, 0.28, 3.22, Math.PI / 2);
  add(g, new THREE.TorusGeometry(0.78, 0.06, 6, 16), dark, MAT.METAL, 0, 0.28, 3.12, Math.PI / 2, 0, 0);
  add(g, new THREE.TorusGeometry(0.72, 0.05, 6, 16), dark, MAT.METAL, 0, 0.28, 3.32, Math.PI / 2, 0, 0);
  add(g, new THREE.CylinderGeometry(0.70, 0.70, 0.70, 14), dark, MAT.METAL, 0, 0.28, 3.38, Math.PI / 2);
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2;
    add(g, new THREE.CylinderGeometry(0.16, 0.16, 0.52, 8), dark, MAT.METAL,
      Math.cos(a) * 0.62, 0.28 + Math.sin(a) * 0.62, 3.38, 0, 0, Math.PI / 2 - a);
  }
  add(g, new THREE.SphereGeometry(0.36, 10, 8), dark, MAT.METAL, 0, 0.28, 3.48);

  // Cockpit rim behind the engine; pilot sits here
  add(g, new THREE.TorusGeometry(0.42, 0.055, 6, 14), dark, MAT.METAL, 0, 0.92, 0.85, Math.PI / 2, 0, 0);
  add(g, new THREE.BoxGeometry(0.7, 0.08, 0.22), cream, MAT.PLANE, 0, 1.08, 1.35, 0.35, 0, 0);

  // Stagger: UPPER wing slightly AHEAD of the lower wing (classic biplane).
  // Flat, thin, straight panels — no dihedral curl, no bulbous tips.
  const zU = 0.62, zL = -0.08;
  // Cream wings, red leading/trailing stripes, straight thin panels.
  add(g, new THREE.BoxGeometry(12.6, 0.09, 1.95), cream, MAT.PLANE, 0, 1.78, zU);
  add(g, new THREE.BoxGeometry(12.6, 0.07, 0.48), red, MAT.PLANE, 0, 1.88, zU + 0.74);
  add(g, new THREE.BoxGeometry(12.6, 0.07, 0.40), red, MAT.PLANE, 0, 1.88, zU - 0.78);
  add(g, new THREE.BoxGeometry(1.35, 0.07, 1.7), red, MAT.PLANE, 4.4, 1.88, zU);
  add(g, new THREE.BoxGeometry(1.35, 0.07, 1.7), red, MAT.PLANE, -4.4, 1.88, zU);
  add(g, new THREE.BoxGeometry(11.4, 0.08, 1.72), cream, MAT.PLANE, 0, 0.02, zL);
  add(g, new THREE.BoxGeometry(11.4, 0.06, 0.40), red, MAT.PLANE, 0, 0.10, zL + 0.66);
  add(g, new THREE.BoxGeometry(11.4, 0.06, 0.34), red, MAT.PLANE, 0, 0.10, zL - 0.70);
  envelopeDecal(g, cream, dark, 2.7, 1.90, zU);
  envelopeDecal(g, cream, dark, -2.7, 1.90, zU);

  // Ailerons on the TRAILING edge of the lower wing (toward the tail, -Z)
  const ailZ = zL - 1.02;
  const ailL = add(g, new THREE.BoxGeometry(2.35, 0.08, 0.42), red, MAT.PLANE, 2.7, 0.02, ailZ);
  const ailR = add(g, new THREE.BoxGeometry(2.35, 0.08, 0.42), red, MAT.PLANE, -2.7, 0.02, ailZ);

  // Dark, readable interplane struts and cabane
  for (const side of [1, -1]) {
    add(g, new THREE.BoxGeometry(0.10, 1.78, 0.10), dark, MAT.WOOD, side * 2.55, 0.90, 0.42);
    add(g, new THREE.BoxGeometry(0.10, 1.78, 0.10), dark, MAT.WOOD, side * 2.55, 0.90, -0.08);
    add(g, new THREE.BoxGeometry(0.10, 1.78, 0.10), dark, MAT.WOOD, side * 4.35, 0.90, 0.42);
    add(g, new THREE.BoxGeometry(0.10, 1.78, 0.10), dark, MAT.WOOD, side * 4.35, 0.90, -0.08);
    add(g, new THREE.BoxGeometry(0.09, 1.25, 0.09), dark, MAT.WOOD, side * 0.55, 1.18, 0.70, 0, 0, side * 0.26);
    add(g, new THREE.BoxGeometry(0.09, 1.25, 0.09), dark, MAT.WOOD, side * 0.55, 1.18, 0.10, 0, 0, side * 0.26);
    wire(g, dark, side * 2.45, 1.70, 0.85, side * 4.20, 0.08, -0.55);
    wire(g, dark, side * 4.20, 1.70, 0.85, side * 2.45, 0.08, -0.55);
  }

  // Cream vertical fin + red rudder stripe and leading edge; slim so it never reads as a disc
  add(g, new THREE.BoxGeometry(0.08, 2.55, 1.90), cream, MAT.PLANE, 0, 1.62, -3.95);
  add(g, new THREE.BoxGeometry(0.09, 2.55, 0.22), red, MAT.PLANE, 0, 1.62, -4.82);
  add(g, new THREE.BoxGeometry(0.09, 2.55, 0.14), red, MAT.PLANE, 0, 1.62, -3.05);
  const rudder = add(g, new THREE.BoxGeometry(0.08, 2.10, 0.50), cream, MAT.PLANE, 0, 1.48, -5.05);
  add(g, new THREE.BoxGeometry(4.55, 0.10, 1.40), cream, MAT.PLANE, 0, 0.38, -4.05);
  const elev = add(g, new THREE.BoxGeometry(4.15, 0.09, 0.42), cream, MAT.PLANE, 0, 0.38, -4.75);
  add(g, new THREE.BoxGeometry(0.16, 0.12, 1.40), red, MAT.PLANE, 1.95, 0.46, -4.05);
  add(g, new THREE.BoxGeometry(0.16, 0.12, 1.40), red, MAT.PLANE, -1.95, 0.46, -4.05);

  // Gear under the forward fuselage
  add(g, new THREE.BoxGeometry(0.08, 1.25, 0.08), dark, MAT.METAL, 1.12, -0.62, 0.85);
  add(g, new THREE.BoxGeometry(0.08, 1.25, 0.08), dark, MAT.METAL, -1.12, -0.62, 0.85);
  add(g, new THREE.BoxGeometry(2.35, 0.08, 0.08), dark, MAT.METAL, 0, -1.10, 0.85);
  const wL = add(g, new THREE.CylinderGeometry(0.46, 0.46, 0.22, 14), dark, MAT.METAL, 1.20, -1.28, 0.85, 0, 0, Math.PI / 2);
  const wR = add(g, new THREE.CylinderGeometry(0.46, 0.46, 0.22, 14), dark, MAT.METAL, -1.20, -1.28, 0.85, 0, 0, Math.PI / 2);
  add(g, new THREE.CylinderGeometry(0.24, 0.24, 0.14, 10), cream, MAT.PLANE, 1.20, -1.28, 0.85, 0, 0, Math.PI / 2);
  add(g, new THREE.CylinderGeometry(0.24, 0.24, 0.14, 10), cream, MAT.PLANE, -1.20, -1.28, 0.85, 0, 0, Math.PI / 2);
  add(g, new THREE.BoxGeometry(0.07, 0.78, 0.07), dark, MAT.METAL, 0, -0.28, -2.70, 0.5, 0, 0);
  const wT = add(g, new THREE.CylinderGeometry(0.16, 0.16, 0.10, 8), dark, MAT.METAL, 0, -0.70, -2.88, 0, 0, Math.PI / 2);

  // Prop at the very front, with a blur disc for high RPM
  const prop = new THREE.Group();
  prop.name = "prop";
  add(prop, new THREE.CylinderGeometry(0.12, 0.12, 0.42, 8), dark, MAT.METAL, 0, 0, 0.08, Math.PI / 2);
  add(prop, new THREE.SphereGeometry(0.20, 8, 6), cream, MAT.PLANE, 0, 0, 0.30);
  const discMat = patchMaterialIdAlpha(new THREE.MeshBasicMaterial({
    map: makePropDiscTex(),
    transparent: true,
    opacity: 0.92,
    side: THREE.DoubleSide,
    depthWrite: false,
    toneMapped: false,
  }));
  const disc = new THREE.Mesh(new THREE.CircleGeometry(1.42, 32), discMat);
  disc.name = "prop-blur";
  disc.renderOrder = 2;
  prop.add(disc);
  // Thin ink rim so the spinning disc reads from behind-above
  const rim = new THREE.Mesh(
    new THREE.TorusGeometry(1.40, 0.03, 6, 32),
    patchMaterialIdAlpha(new THREE.MeshBasicMaterial({
      color: 0x1a1410, transparent: true, opacity: 0.85, depthWrite: false, toneMapped: false,
    }))
  );
  rim.name = "prop-rim";
  prop.add(rim);
  const bladeMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
    color: 0x4a3424, transparent: true, opacity: 0.55, depthWrite: false,
  }));
  const b1 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 2.6, 0.05), bladeMat);
  const b2 = b1.clone();
  b2.rotation.z = Math.PI / 2;
  prop.add(b1, b2);
  prop.position.set(0, 0.28, 3.82);
  g.add(prop);

  const pilot = seatPilot(g);
  pilot.position.set(0, 1.08, 0.85);
  pilot.scale.setScalar(0.78);

  g.userData.prop = prop;
  g.userData.propBlur = disc;
  g.userData.propBlades = [b1, b2];
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
  visual.scale.setScalar(1.32);
  const g = new THREE.Group();
  g.name = "plane-" + id;
  g.add(visual);
  const ud = visual.userData || {};
  g.userData = ud;
  mergePlaneStatic(visual, [ud.prop, ud.elevator, ud.rudder, ud.ailL, ud.ailR]);
  tagMesh(g, MAT.PLANE, 1);
  return g;
}
