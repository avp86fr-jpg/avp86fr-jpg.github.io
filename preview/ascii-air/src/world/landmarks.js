import * as THREE from "three";
import { MAT, LANDMARKS, QUALITY } from "../core/config.js";
import { tagMesh, retagGeometry, patchMaterialIdAlpha } from "../render/idMaterial.js";
import { triplanarLambert, loadTex } from "../render/textured.js";

const _col = new THREE.Color();

function lam(color, opts = {}) {
  const m = new THREE.MeshLambertMaterial({ color, flatShading: true, ...opts });
  patchMaterialIdAlpha(m);
  return m;
}

function mesh(geo, color, matId, hero = 0) {
  retagGeometry(geo, matId, hero);
  const m = new THREE.Mesh(geo, lam(color));
  m.userData.matId = matId;
  m.userData.hero = hero;
  m.castShadow = false;
  return m;
}

function box(w, h, d, color, matId, hero = 0) {
  return mesh(new THREE.BoxGeometry(w, h, d), color, matId, hero);
}

// Horizontal paint only — no vertical faces, so a chase camera looking along
// the strip cannot rasterise a glancing black edge across the frame.
function slab(w, d, color, matId, hero = 0) {
  const m = mesh(new THREE.PlaneGeometry(w, d), color, matId, hero);
  orientHorizontal(m, 0);
  return m;
}

// Yaw first, then pitch the plane flat. Euler XYZ with x=-90 gimbal-locks
// and turns a yawed road into a near-vertical black slab.
function orientHorizontal(m, yaw = 0) {
  m.rotation.order = "YXZ";
  m.rotation.set(-Math.PI / 2, yaw, 0);
}

function cyl(rTop, rBot, h, segs, color, matId, hero = 0) {
  return mesh(new THREE.CylinderGeometry(rTop, rBot, h, segs), color, matId, hero);
}

function cone(r, h, segs, color, matId) {
  return mesh(new THREE.ConeGeometry(r, h, segs), color, matId);
}

function add(parent, m, x, y, z, rx = 0, ry = 0, rz = 0) {
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  parent.add(m);
  return m;
}

function gableRoofGeo(w, d, roofH) {
  const shape = new THREE.Shape();
  const oh = 0.42;
  shape.moveTo(-w / 2 - oh, 0);
  shape.lineTo(0, roofH);
  shape.lineTo(w / 2 + oh, 0);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: d + oh * 2, bevelEnabled: false, curveSegments: 1 });
  geo.translate(0, 0, -(d + oh * 2) / 2);
  geo.computeVertexNormals();
  return geo;
}

function house(w, d, h, roofH, wall, roofCol, detailed = true) {
  const g = new THREE.Group();
  add(g, box(w, h, d, wall, MAT.BUILDING), 0, h / 2, 0);
  const r = mesh(gableRoofGeo(w, d, roofH), roofCol, MAT.ROOF);
  r.position.y = h;
  g.add(r);
  if (detailed) {
    add(g, box(Math.min(1.25, w * 0.30), h * 0.62, 0.18, 0x3a2a1a, MAT.WOOD), 0, h * 0.31, d / 2 + 0.06);
    const ww = Math.min(1.15, w * 0.26), wh = h * 0.34;
    add(g, box(ww, wh, 0.14, 0x2a3540, MAT.METAL), -w * 0.28, h * 0.64, d / 2 + 0.07);
    add(g, box(ww, wh, 0.14, 0x2a3540, MAT.METAL),  w * 0.28, h * 0.64, d / 2 + 0.07);
    add(g, box(0.14, wh, ww, 0x2a3540, MAT.METAL), w / 2 + 0.08, h * 0.60, 0);
    add(g, box(0.14, wh, ww, 0x2a3540, MAT.METAL), -w / 2 - 0.08, h * 0.60, 0);
    const cy = h + roofH * 0.38;
    add(g, box(0.7, roofH * 0.65, 0.7, 0x8a4a38, MAT.ROCK), w * 0.22, cy, -d * 0.18);
    add(g, box(0.88, 0.16, 0.88, 0x5a3028, MAT.ROCK), w * 0.22, cy + roofH * 0.36, -d * 0.18);
  }
  return g;
}

function makeHangar() {
  const g = new THREE.Group();
  g.name = "hangar";
  // Cream hall, barrel roof running east-west so the arched profile faces the south (hero)
  add(g, box(36, 8, 24, 0xf3e6cc, MAT.BUILDING), 0, 4, 0);
  // Warm ochre plinth so the south face is not a washed-out slab
  add(g, box(37.2, 1.3, 25.2, 0xb88958, MAT.ROCK), 0, 0.55, 0);
  // Top-half barrel only (a full cylinder plus two arched walls read as cat-ears from the runway)
  // Own group so it is not merged into the terracotta tile atlas — close-up it must read as corrugated metal.
  const roofG = new THREE.Group();
  roofG.name = "hangar-roof";
  const hallGeo = new THREE.CylinderGeometry(16, 16, 38, 22, 1, false, -Math.PI / 2, Math.PI);
  const hallMat = triplanarLambert({
    map: loadTex("corrugate.png"), scale: 0.16, color: 0xe6c898,
    vertexColors: false, flatShading: false, matId: MAT.METAL,
  });
  retagGeometry(hallGeo, MAT.METAL, 0);
  const hall = new THREE.Mesh(hallGeo, hallMat);
  hall.userData.matId = MAT.METAL;
  hall.rotation.z = Math.PI / 2;
  hall.position.set(0, 11, 0);
  roofG.add(hall);
  for (let i = -4; i <= 4; i++) {
    const ribGeo = new THREE.CylinderGeometry(16.28, 16.28, 0.34, 22, 1, true, -Math.PI / 2, Math.PI);
    const rib = mesh(ribGeo, 0x6a5440, MAT.METAL);
    rib.rotation.z = Math.PI / 2;
    rib.position.set(i * 4.2, 11, 0);
    roofG.add(rib);
  }
  add(roofG, box(38.6, 0.3, 0.7, 0x6a5440, MAT.METAL), 0, 27.2, 0);
  g.add(roofG);
  const face = new THREE.Shape();
  face.moveTo(-20, 0); face.lineTo(-20, 11); face.absarc(0, 11, 16, Math.PI, 0, true); face.lineTo(20, 0); face.closePath();
  const door = new THREE.Path();
  door.moveTo(-7, 0); door.lineTo(-7, 8); door.absarc(0, 8, 7, Math.PI, 0, true); door.lineTo(7, 0); door.closePath();
  face.holes.push(door);
  const faceGeo = new THREE.ExtrudeGeometry(face, { depth: 1.2, bevelEnabled: false });
  faceGeo.translate(0, 0, 12.6);
  g.add(mesh(faceGeo, 0xf3e6cc, MAT.BUILDING));
  // South face (hero-facing): same arched wall — never a blank khaki slab
  const faceS = face.clone();
  const faceGeoS = new THREE.ExtrudeGeometry(faceS, { depth: 1.2, bevelEnabled: false });
  faceGeoS.rotateY(Math.PI);
  faceGeoS.translate(0, 0, -12.6);
  g.add(mesh(faceGeoS, 0xf3e6cc, MAT.BUILDING));
  // Dark interior so the door opening reads as a hall, not a hole through the building
  add(g, box(13.2, 10.5, 8, 0x2a2218, MAT.WOOD), 0, 5.2, 0);
  // Dark windows + red door so the hall reads as a building, not a box
  add(g, box(3.2, 3.6, 0.5, 0x1a2230, MAT.METAL), -10, 6.2, -13.5);
  add(g, box(3.2, 3.6, 0.5, 0x1a2230, MAT.METAL), 10, 6.2, -13.5);
  add(g, box(3.2, 3.6, 0.5, 0x1a2230, MAT.METAL), -10, 6.2, 13.5);
  add(g, box(3.2, 3.6, 0.5, 0x1a2230, MAT.METAL), 10, 6.2, 13.5);
  add(g, box(6.5, 8, 0.6, 0x9a2018, MAT.ROOF), 0, 4.2, -13.6);
  // Terracotta arch trim on the south face
  add(g, box(16.4, 0.55, 0.45, 0xa03a28, MAT.ROOF), 0, 16.4, -13.4);
  // envelope emblem
  add(g, box(6.2, 4.2, 0.4, 0xf4ead0, MAT.BUILDING), 0, 16.2, 15.0);
  add(g, box(6.2, 0.2, 0.45, 0x1a140c, MAT.METAL), 0, 16.2, 15.2);
  add(g, box(0.2, 4.2, 0.45, 0x1a140c, MAT.METAL), 0, 16.2, 15.2);
  add(g, box(4.4, 0.2, 0.45, 0x1a140c, MAT.METAL), 0, 17.6, 15.2, 0, 0, 0.55);
  add(g, box(4.4, 0.2, 0.45, 0x1a140c, MAT.METAL), 0, 17.6, 15.2, 0, 0, -0.55);
  add(g, slab(22, 16, 0xd8d1c4, MAT.ROAD), 0, 0.12, 2, -Math.PI / 2);
  return g;
}

function makeTower() {
  const g = new THREE.Group();
  g.name = "tower";
  // Slim white shaft with a dark window strip and a readable cab — not a pale stacked keep
  add(g, box(4.4, 24, 4.4, 0xfffaf4, MAT.BUILDING), 0, 12, 0);
  for (const y of [6, 11, 16]) {
    add(g, box(1.6, 2.2, 0.35, 0x1a2230, MAT.METAL), 0, y, 2.3);
    add(g, box(0.35, 2.2, 1.6, 0x1a2230, MAT.METAL), 2.3, y, 0);
  }
  add(g, box(4.8, 0.8, 4.8, 0x8a3a2a, MAT.ROOF), 0, 24.4, 0);
  add(g, box(7.6, 5.2, 7.6, 0xfffaf4, MAT.BUILDING), 0, 27.4, 0);
  add(g, box(6.4, 2.8, 0.28, 0x1a3048, MAT.METAL), 0, 27.4, 3.9);
  add(g, box(0.28, 2.8, 6.4, 0x1a3048, MAT.METAL), 3.9, 27.4, 0);
  add(g, box(6.4, 2.8, 0.28, 0x1a3048, MAT.METAL), 0, 27.4, -3.9);
  add(g, box(0.28, 2.8, 6.4, 0x1a3048, MAT.METAL), -3.9, 27.4, 0);
  add(g, box(8.2, 0.5, 8.2, 0x8a3a2a, MAT.ROOF), 0, 30.2, 0);
  add(g, cyl(0.12, 0.12, 6, 6, 0x333333, MAT.METAL), 0, 33.4, 0);
  return g;
}

function makeChurch() {
  const g = new THREE.Group();
  g.name = "church";
  // Nave
  add(g, box(14, 10, 22, 0xfaf6ee, MAT.BUILDING), 0, 5, 2);
  const roof = mesh(new THREE.ConeGeometry(13, 7, 4), 0xc45a3a, MAT.ROOF);
  roof.rotation.y = Math.PI / 4;
  roof.position.set(0, 13.5, 2);
  g.add(roof);
  // Square bell tower with a belfry and a cross — readable on the hillside
  add(g, box(6.6, 28, 6.6, 0xfaf6ee, MAT.BUILDING), 0, 14, -10);
  add(g, box(7.4, 8.4, 7.4, 0xfaf6ee, MAT.BUILDING), 0, 30.2, -10);
  add(g, box(2.4, 4.4, 0.45, 0x1a2230, MAT.METAL), 0, 30.6, -6.2);
  add(g, box(2.4, 4.4, 0.45, 0x1a2230, MAT.METAL), 0, 30.6, -13.8);
  add(g, box(0.45, 4.4, 2.4, 0x1a2230, MAT.METAL), 3.95, 30.6, -10);
  add(g, box(0.45, 4.4, 2.4, 0x1a2230, MAT.METAL), -3.95, 30.6, -10);
  add(g, cyl(0.75, 0.9, 1.5, 8, 0xd4a02a, MAT.METAL), 0, 29.6, -10);
  add(g, cone(5.6, 8.5, 4, 0xc45a3a, MAT.ROOF), 0, 38.4, -10);
  add(g, box(0.38, 3.4, 0.38, 0xeeeeee, MAT.METAL), 0, 43.6, -10);
  add(g, box(1.7, 0.38, 0.38, 0xeeeeee, MAT.METAL), 0, 45.0, -10);
  add(g, box(2.4, 4.4, 0.35, 0x5a3a20, MAT.WOOD), 0, 2.4, 13.15);
  add(g, cyl(1.7, 1.7, 0.3, 12, 0x3a4a6a, MAT.METAL), 0, 7.4, 13.15);
  return g;
}

function makeMarketStall(rng) {
  const g = new THREE.Group();
  const cloth = rng() > 0.5 ? 0xe06a4f : rng() > 0.5 ? 0xf2c14e : 0x3aa0d0;
  add(g, box(5, 0.3, 4, 0x6a4a2a, MAT.WOOD), 0, 0.4, 0);
  add(g, box(0.2, 3.2, 0.2, 0x5a3a1a, MAT.WOOD), -2.2, 2, -1.6);
  add(g, box(0.2, 3.2, 0.2, 0x5a3a1a, MAT.WOOD), 2.2, 2, -1.6);
  add(g, box(0.2, 2.4, 0.2, 0x5a3a1a, MAT.WOOD), -2.2, 1.6, 1.6);
  add(g, box(0.2, 2.4, 0.2, 0x5a3a1a, MAT.WOOD), 2.2, 1.6, 1.6);
  add(g, box(5.2, 0.15, 4.2, cloth, MAT.ROOF), 0, 3.4, 0, 0.15, 0, 0);
  return g;
}

function makeLighthouse() {
  const g = new THREE.Group();
  g.name = "lighthouse";
  const white = 0xf8f4ea;
  const red = 0xd01418;
  // Slim white tower with crisp red bands
  add(g, cyl(5.4, 6.4, 4.5, 12, 0x8a8070, MAT.ROCK), 0, 2.2, 0);
  add(g, cyl(3.15, 4.05, 36, 14, white, MAT.BUILDING), 0, 22, 0);
  add(g, cyl(3.65, 4.00, 5.6, 14, red, MAT.ROOF), 0, 11, 0);
  add(g, cyl(3.50, 3.75, 5.6, 14, red, MAT.ROOF), 0, 22, 0);
  add(g, cyl(3.35, 3.55, 5.6, 14, red, MAT.ROOF), 0, 33, 0);
  // Gallery and lantern
  add(g, cyl(4.4, 4.4, 0.45, 14, 0x2a2a2a, MAT.METAL), 0, 40.4, 0);
  add(g, cyl(4.15, 4.15, 1.1, 14, 0x2a2a2a, MAT.METAL), 0, 41.1, 0);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    add(g, box(0.22, 4.2, 0.22, 0x2a2a2a, MAT.METAL), Math.cos(a) * 3.5, 43.3, Math.sin(a) * 3.5);
  }
  const lantern = cyl(3.0, 3.0, 4.0, 12, 0xfff4c0, MAT.LIGHT, 1);
  lantern.name = "lantern";
  add(g, lantern, 0, 43.4, 0);
  // Gallery rail ring (posts already in place)
  const rail = new THREE.TorusGeometry(3.7, 0.07, 5, 24);
  retagGeometry(rail, MAT.METAL, 0);
  const railM = new THREE.Mesh(rail, patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0xd8d4cc, flatShading: true })));
  railM.userData.matId = MAT.METAL;
  railM.rotation.x = Math.PI / 2;
  railM.position.set(0, 42.55, 0);
  g.add(railM);
  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(2.6, 12, 10),
    new THREE.MeshBasicMaterial({ color: 0xfff1b0, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false })
  );
  glow.name = "lantern";
  glow.position.set(0, 43.4, 0);
  g.add(glow);
  g.userData.glow = glow;
  add(g, cone(4.0, 3.0, 8, red, MAT.ROOF), 0, 47.0, 0);
  add(g, cyl(0.28, 0.28, 1.6, 6, 0x2a2a2a, MAT.METAL), 0, 49.0, 0);

  // Beam — long thin box / cone that we rotate
  const beamGeo = new THREE.ConeGeometry(18, 220, 8, 1, true);
  beamGeo.rotateX(-Math.PI / 2);
  retagGeometry(beamGeo, MAT.LIGHT, 1);
  const beamMat = new THREE.MeshBasicMaterial({
    color: 0xfff2c0,
    transparent: true,
    opacity: 0.52,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const beam = new THREE.Mesh(beamGeo, beamMat);
  beam.position.set(0, 43.4, 0);
  beam.name = "beam";
  g.add(beam);
  g.userData.beam = beam;
  return g;
}

function makePier() {
  const g = new THREE.Group();
  const len = 56;
  add(g, box(8, 1, len, 0x7a5a32, MAT.WOOD), 0, 1.2, 0);
  for (let i = -2; i <= 2; i++) {
    add(g, box(0.6, 3.2, 0.6, 0x5a4020, MAT.WOOD), -3.4, -0.4, i * 10);
    add(g, box(0.6, 3.2, 0.6, 0x5a4020, MAT.WOOD), 3.4, -0.4, i * 10);
  }
  add(g, box(6, 4, 6, 0x8a6238, MAT.WOOD), 0, 3.6, len / 2 - 4);
  add(g, cone(5, 3.2, 4, 0x5a3020, MAT.ROOF), 0, 7.2, len / 2 - 4);
  return g;
}

function makeBoat(color = 0xc05030) {
  return makeSailboat(color);
}

function makeSailboat(color = 0xc8b48a) {
  const g = new THREE.Group();
  g.name = "boat";
  // Pointed wooden/white hull (not a blue box)
  const hull = new THREE.Shape();
  hull.moveTo(0, 5.2);
  hull.lineTo(1.15, 1.6);
  hull.lineTo(1.05, -4.6);
  hull.lineTo(0, -5.0);
  hull.lineTo(-1.05, -4.6);
  hull.lineTo(-1.15, 1.6);
  hull.closePath();
  const hullGeo = new THREE.ExtrudeGeometry(hull, { depth: 1.15, bevelEnabled: false });
  hullGeo.rotateX(Math.PI / 2);
  hullGeo.translate(0, 0, -0.575);
  const hullMesh = mesh(hullGeo, 0xf4efe4, MAT.WOOD);
  hullMesh.position.y = 0.55;
  g.add(hullMesh);
  add(g, box(1.7, 0.45, 4.4, 0xd8c8a0, MAT.WOOD), 0, 1.05, -0.4);
  // Waterline / keel ink
  add(g, box(2.15, 0.12, 9.6, 0x2a2218, MAT.WOOD), 0, 0.12, 0);
  // Mast + boom
  add(g, cyl(0.08, 0.10, 10.2, 6, 0x3a2a18, MAT.WOOD), 0, 6.1, 0.3);
  add(g, box(0.08, 0.08, 5.2, 0x3a2a18, MAT.WOOD), 0, 1.55, -0.4);
  // Triangular sail (not a rectangular slab)
  const sailShape = new THREE.Shape();
  sailShape.moveTo(0, 0);
  sailShape.lineTo(0, 8.4);
  sailShape.lineTo(-0.05, 8.4);
  sailShape.lineTo(4.4, 0.4);
  sailShape.closePath();
  const sailGeo = new THREE.ExtrudeGeometry(sailShape, { depth: 0.08, bevelEnabled: false });
  sailGeo.translate(0, 0, -0.04);
  const sailMesh = mesh(sailGeo, 0xf7f2e4, MAT.BUILDING);
  sailMesh.position.set(0.08, 1.7, 0.35);
  sailMesh.rotation.y = 0.08;
  g.add(sailMesh);
  return g;
}

function makeSteamer(color = 0x1e4a78) {
  const g = new THREE.Group();
  g.name = "steamer";
  const navy = color || 0x1e4a78;
  const white = 0xf6f2ea;
  // Navy lower hull (never black) + tapered bow/stern
  add(g, box(5.2, 1.15, 24, navy, MAT.METAL), 0, 0.72, -1.2);
  add(g, box(4.0, 1.05, 4.8, navy, MAT.METAL), 0, 0.68, 12.8);
  add(g, box(2.6, 0.90, 3.4, navy, MAT.METAL), 0, 0.62, 16.0);
  add(g, box(1.5, 0.72, 2.4, navy, MAT.METAL), 0, 0.56, 18.2);
  add(g, box(4.4, 1.00, 3.4, navy, MAT.METAL), 0, 0.66, -14.8);
  add(g, box(3.2, 0.82, 2.2, navy, MAT.METAL), 0, 0.58, -17.0);
  // White topsides sitting on the navy
  add(g, box(5.28, 0.78, 24.2, white, MAT.BUILDING), 0, 1.62, -1.2);
  add(g, box(4.05, 0.70, 4.9, white, MAT.BUILDING), 0, 1.52, 12.8);
  add(g, box(2.65, 0.58, 3.4, white, MAT.BUILDING), 0, 1.38, 16.0);
  add(g, box(1.55, 0.48, 2.4, white, MAT.BUILDING), 0, 1.22, 18.2);
  add(g, box(4.45, 0.65, 3.5, white, MAT.BUILDING), 0, 1.48, -14.8);
  add(g, box(3.25, 0.52, 2.2, white, MAT.BUILDING), 0, 1.32, -17.0);
  // Portholes on the white band
  for (const z of [-10, -7, -4, -1, 2, 5, 8, 11]) {
    add(g, cyl(0.16, 0.16, 0.12, 6, 0x7aa0b8, MAT.METAL), 2.66, 1.58, z, 0, 0, Math.PI / 2);
    add(g, cyl(0.16, 0.16, 0.12, 6, 0x7aa0b8, MAT.METAL), -2.66, 1.58, z, 0, 0, Math.PI / 2);
  }
  // Red waterline (no black boot)
  add(g, box(5.50, 0.42, 32.4, 0xc01418, MAT.ROOF), 0, 0.28, -0.2);
  // White superstructure
  add(g, box(4.4, 1.45, 14.5, 0xfffaf2, MAT.BUILDING), 0, 2.70, -1.6);
  add(g, box(3.6, 1.15, 6.2, 0xffffff, MAT.BUILDING), 0, 4.00, -0.8);
  add(g, box(3.1, 0.7, 3.0, 0xfffaf2, MAT.BUILDING), 0, 4.90, 0.6);
  // Bridge windows (navy, not black)
  add(g, box(3.2, 0.45, 0.2, 0x1e3a62, MAT.METAL), 0, 4.05, 2.35);
  add(g, box(0.2, 0.4, 4.4, 0x1e3a62, MAT.METAL), 1.85, 2.70, -1.4);
  // Two buff funnels with a red band — black only as a thin cap ring
  const funnels = [-2.2, 2.4];
  for (const fz of funnels) {
    add(g, cyl(0.78, 0.88, 3.2, 10, 0xf0d8a8, MAT.BUILDING), 0, 6.35, fz);
    add(g, cyl(0.94, 0.94, 0.85, 10, 0xc01418, MAT.ROOF), 0, 5.95, fz);
    add(g, cyl(0.72, 0.80, 0.28, 10, 0x3a342e, MAT.METAL), 0, 7.95, fz);
  }
  add(g, cyl(0.08, 0.08, 6.4, 6, 0x6a645c, MAT.METAL), 0, 5.0, -8.4);
  add(g, cyl(0.08, 0.08, 5.2, 6, 0x6a645c, MAT.METAL), 0, 4.4, 8.8);
  // Deck rails along both sides of the midships
  for (const side of [-1, 1]) {
    for (let i = -6; i <= 5; i++) {
      add(g, cyl(0.04, 0.04, 0.9, 5, 0xd8d4cc, MAT.METAL), side * 2.2, 3.5, i * 1.15);
    }
    add(g, box(0.05, 0.05, 13.4, 0xe8e4dc, MAT.METAL), side * 2.2, 3.98, -0.55);
  }
  // Lifeboats on davits
  for (const side of [-1, 1]) {
    for (const k of [-1, 1]) {
      add(g, cyl(0.06, 0.06, 1.7, 5, 0x333333, MAT.METAL), side * 2.55, 3.75, k * 4.2);
      add(g, box(0.75, 0.38, 1.9, 0xf4f0e4, MAT.WOOD), side * 2.55, 2.85, k * 4.2);
      add(g, box(0.75, 0.12, 1.9, 0xc01418, MAT.ROOF), side * 2.55, 3.08, k * 4.2);
    }
  }
  const puffMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
    color: 0xcec8c0, emissive: 0xb8b0a8, emissiveIntensity: 0.12,
    flatShading: true, transparent: true, opacity: 0.5, depthWrite: false,
  }));
  puffMat.userData.matId = MAT.CLOUD;
  const dummy = new THREE.Object3D();
  const smoke = new THREE.InstancedMesh(new THREE.SphereGeometry(0.5, 6, 5), puffMat, 6);
  smoke.name = "smoke";
  smoke.position.set(0, 8.3, 0.4);
  smoke.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  smoke.frustumCulled = false;
  for (let i = 0; i < 6; i++) {
    dummy.position.set(0, i * 0.65, 0);
    dummy.scale.setScalar(0.8 + i * 0.12);
    dummy.updateMatrix();
    smoke.setMatrixAt(i, dummy.matrix);
  }
  smoke.instanceMatrix.needsUpdate = true;
  g.add(smoke);
  g.userData.smoke = smoke;
  return g;
}

function makeWindsock() {
  const g = new THREE.Group();
  g.name = "windsock";
  add(g, cyl(0.12, 0.12, 9, 6, 0xcccccc, MAT.METAL), 0, 4.5, 0);
  const sock = new THREE.Group();
  sock.name = "sock";
  sock.position.set(0, 8.6, 0);
  const cols = [0xc01418, 0xf4f4f0, 0xc01418, 0xf4f4f0];
  for (let i = 0; i < 4; i++) {
    const r0 = 0.7 - i * 0.12, r1 = 0.58 - i * 0.12;
    const seg = cyl(r1, r0, 1.15, 8, cols[i], MAT.ROOF);
    seg.rotation.x = Math.PI / 2;
    seg.position.z = 0.7 + i * 1.15;
    sock.add(seg);
  }
  g.add(sock);
  g.userData.sock = sock;
  return g;
}

function makeCrate() {
  const g = new THREE.Group();
  add(g, box(1.6, 1.2, 1.2, 0x8a6238, MAT.WOOD), 0, 0.6, 0);
  add(g, box(1.65, 0.08, 1.25, 0x6a4a28, MAT.WOOD), 0, 1.22, 0);
  return g;
}

function makeCrew() {
  const g = new THREE.Group();
  add(g, cyl(0.28, 0.32, 1.1, 6, 0xc45a2a, MAT.PLANE), 0, 0.7, 0);
  add(g, cyl(0.24, 0.24, 0.36, 6, 0xf0c8a0, MAT.PLANE), 0, 1.45, 0);
  add(g, cyl(0.28, 0.28, 0.16, 6, 0x3a2a1a, MAT.WOOD), 0, 1.68, 0);
  return g;
}

function makeTruck(color = 0xc45a3a) {
  const g = new THREE.Group();
  add(g, box(3.6, 1.3, 1.8, color, MAT.METAL), 0, 0.95, 0);
  add(g, box(1.5, 1.15, 1.7, 0x3a2a1a, MAT.METAL), -1.4, 2.0, 0);
  add(g, box(0.08, 0.7, 1.5, 0x9ad4e8, MAT.METAL), -2.16, 2.05, 0);
  add(g, cyl(0.38, 0.38, 0.28, 8, 0x2a2a2c, MAT.METAL), -1.2, 0.38, 1.05, Math.PI / 2, 0, 0);
  add(g, cyl(0.38, 0.38, 0.28, 8, 0x2a2a2c, MAT.METAL), -1.2, 0.38, -1.05, Math.PI / 2, 0, 0);
  add(g, cyl(0.38, 0.38, 0.28, 8, 0x2a2a2c, MAT.METAL), 1.2, 0.38, 1.05, Math.PI / 2, 0, 0);
  add(g, cyl(0.38, 0.38, 0.28, 8, 0x2a2a2c, MAT.METAL), 1.2, 0.38, -1.05, Math.PI / 2, 0, 0);
  return g;
}

function makeWreck() {
  const g = new THREE.Group();
  add(g, box(8, 3, 28, 0x4a3a2a, MAT.WOOD), 0, 1, 0, 0.15, 0.4, 0.2);
  add(g, box(6, 4, 8, 0x3a2e20, MAT.WOOD), 0, 3, -4, 0.2, 0.4, 0.15);
  add(g, cyl(0.5, 0.5, 14, 6, 0x2a2a2a, MAT.WOOD), 1, 6, -2, 0.6, 0, 0.3);
  return g;
}

function makeBridge() {
  const g = new THREE.Group();
  g.name = "viaduct";
  // Pale stone facade with REAL arch cutouts so sky and land show through.
  const shape = new THREE.Shape();
  const L = 72, deckY = 16, deckT = 2.4, hw = 5.15;
  shape.moveTo(-L / 2, 0);
  shape.lineTo(-L / 2, deckY + deckT);
  shape.lineTo(L / 2, deckY + deckT);
  shape.lineTo(L / 2, 0);
  shape.closePath();
  for (let i = -2; i <= 2; i++) {
    const cx = i * 13.6;
    const hole = new THREE.Path();
    hole.moveTo(cx - hw, 0.08);
    hole.lineTo(cx + hw, 0.08);
    hole.lineTo(cx + hw, 6.2);
    hole.absarc(cx, 6.2, hw, 0, Math.PI, false);
    hole.closePath();
    shape.holes.push(hole);
  }
  const geo = new THREE.ExtrudeGeometry(shape, { depth: 11, bevelEnabled: false, curveSegments: 16 });
  geo.translate(0, 0, -5.5);
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const hatch = 0.9 + 0.08 * Math.sin(x * 0.55 + y * 0.8) + 0.05 * Math.sin(z * 0.4);
    const shade = z > 4 ? 0.92 : 1;
    col[i * 3] = 0.90 * hatch * shade;
    col[i * 3 + 1] = 0.86 * hatch * shade;
    col[i * 3 + 2] = 0.76 * hatch * shade;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  retagGeometry(geo, MAT.ROCK, 0);
  const mesh = new THREE.Mesh(geo, patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
    vertexColors: true, flatShading: true,
  })));
  mesh.userData.matId = MAT.ROCK;
  g.add(mesh);
  // End pylons and pilasters so a side-on view is not a flat beige slab
  const pier = 0xc4bba8, pierDk = 0x8a8274;
  add(g, box(4.4, deckY + 4, 14, pier, MAT.ROCK), -L / 2 - 0.4, (deckY + 4) / 2, 0);
  add(g, box(4.4, deckY + 4, 14, pier, MAT.ROCK),  L / 2 + 0.4, (deckY + 4) / 2, 0);
  add(g, box(5.2, 2.2, 15, pierDk, MAT.ROCK), -L / 2 - 0.4, deckY + 3.2, 0);
  add(g, box(5.2, 2.2, 15, pierDk, MAT.ROCK),  L / 2 + 0.4, deckY + 3.2, 0);
  for (let i = -2; i <= 2; i++) {
    const cx = i * 13.6;
    add(g, box(1.6, deckY, 12.2, pierDk, MAT.ROCK), cx, deckY / 2, 0);
  }
  // Pale parapet posts along the deck
  for (let i = -6; i <= 6; i++) {
    add(g, box(1.3, 1.5, 1.3, 0xe6dece, MAT.ROCK), i * 5.5, deckY + deckT + 0.9, -5.2);
    add(g, box(1.3, 1.5, 1.3, 0xe6dece, MAT.ROCK), i * 5.5, deckY + deckT + 0.9, 5.2);
  }
  add(g, box(72, 0.7, 1.1, 0xddd4c4, MAT.ROCK), 0, deckY + deckT + 1.7, -5.2);
  add(g, box(72, 0.7, 1.1, 0xddd4c4, MAT.ROCK), 0, deckY + deckT + 1.7, 5.2);
  return g;
}

function makeCastle() {
  const g = new THREE.Group();
  g.name = "castle";
  const stone = 0x9a9386;
  const shade = 0x6f6a60;
  const dark = 0x4a4640;
  const roof = 0x8a2a22;
  // Hollow courtyard: four thinner curtain walls
  add(g, box(36, 10, 2.6, stone, MAT.ROCK), 0, 5, -13.7);
  add(g, box(36, 10, 2.6, stone, MAT.ROCK), 0, 5, 13.7);
  add(g, box(2.6, 10, 24.8, stone, MAT.ROCK), -16.7, 5, 0);
  add(g, box(2.6, 10, 24.8, stone, MAT.ROCK), 16.7, 5, 0);
  add(g, box(37, 1.15, 3.4, shade, MAT.ROCK), 0, 10.4, -13.7);
  add(g, box(37, 1.15, 3.4, shade, MAT.ROCK), 0, 10.4, 13.7);
  add(g, box(3.4, 1.15, 24.8, shade, MAT.ROCK), -16.7, 10.4, 0);
  add(g, box(3.4, 1.15, 24.8, shade, MAT.ROCK), 16.7, 10.4, 0);
  add(g, box(28, 0.4, 22, 0xb8ae9a, MAT.ROCK), 0, 0.2, 0);
  // Inner keep
  add(g, box(12, 16, 12, stone, MAT.ROCK), 0, 8, -1);
  add(g, box(13.2, 1.3, 13.2, shade, MAT.ROCK), 0, 16.4, -1);
  for (const i of [-1, 0, 1]) {
    add(g, box(2.1, 2.2, 2.1, stone, MAT.ROCK), i * 4.4, 18.2, -6.9);
    add(g, box(2.1, 2.2, 2.1, stone, MAT.ROCK), i * 4.4, 18.2, 4.9);
  }
  // Three round towers with conical terracotta roofs
  const towers = [
    { x: -17.6, z: -14.6, h: 22, r: 5.1 },
    { x: 17.6, z: -14.6, h: 20, r: 4.7 },
    { x: -17.6, z: 14.6, h: 18, r: 4.5 },
  ];
  g.userData.flagLocals = [];
  for (const t of towers) {
    add(g, cyl(t.r, t.r + 0.55, t.h, 10, stone, MAT.ROCK), t.x, t.h / 2, t.z);
    add(g, cyl(t.r + 0.65, t.r + 0.65, 0.75, 10, shade, MAT.ROCK), t.x, t.h, t.z);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      add(g, box(1.45, 1.9, 1.45, stone, MAT.ROCK), t.x + Math.cos(a) * (t.r + 0.15), t.h + 1.15, t.z + Math.sin(a) * (t.r + 0.15));
    }
    add(g, cone(t.r + 1.05, 7.6, 10, roof, MAT.ROOF), t.x, t.h + 5.0, t.z);
    add(g, cyl(0.12, 0.12, 2.6, 5, 0xdddddd, MAT.METAL), t.x, t.h + 9.4, t.z);
    g.userData.flagLocals.push({ x: t.x, y: t.h + 10.2, z: t.z });
  }
  // Gatehouse on the south wall with a dark arched doorway
  add(g, box(10, 12, 5, shade, MAT.ROCK), 0, 6, 14.6);
  add(g, box(3.6, 7.2, 1.2, 0x2a2420, MAT.ROCK), 0, 3.8, 17.2);
  const gate = new THREE.TorusGeometry(2.4, 0.7, 6, 12, Math.PI);
  retagGeometry(gate, MAT.ROCK, 0);
  const gm = new THREE.Mesh(gate, patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: dark, flatShading: true })));
  gm.userData.matId = MAT.ROCK;
  gm.position.set(0, 6.6, 17.3);
  g.add(gm);
  add(g, box(0.7, 8.4, 1.4, dark, MAT.ROCK), -2.4, 4.2, 17.15);
  add(g, box(0.7, 8.4, 1.4, dark, MAT.ROCK), 2.4, 4.2, 17.15);
  // Curtain merlons (skip the gate gap on the south face)
  for (let i = -4; i <= 4; i++) {
    add(g, box(2.0, 2.3, 1.55, stone, MAT.ROCK), i * 3.8, 12.15, -15.1);
    if (Math.abs(i) >= 2) add(g, box(2.0, 2.3, 1.55, stone, MAT.ROCK), i * 3.8, 12.15, 15.1);
  }
  for (let i = -3; i <= 3; i++) {
    add(g, box(1.55, 2.3, 2.0, stone, MAT.ROCK), -18.2, 12.15, i * 3.6);
    add(g, box(1.55, 2.3, 2.0, stone, MAT.ROCK), 18.2, 12.15, i * 3.6);
  }
  return g;
}

function makeWindmill() {
  const g = new THREE.Group();
  add(g, cyl(5, 6.5, 16, 8, 0xf7f1e4, MAT.BUILDING), 0, 8, 0);
  add(g, cone(6.4, 5, 8, 0x8a3a2a, MAT.ROOF), 0, 18.5, 0);
  const hub = new THREE.Group();
  hub.position.set(0, 14, 5.2);
  hub.name = "blades";
  const bladeCol = 0xf4f0e6;
  for (let i = 0; i < 4; i++) {
    const pivot = new THREE.Group();
    pivot.rotation.z = (i * Math.PI) / 2;
    const b = box(2.15, 15.2, 0.28, bladeCol, MAT.WOOD);
    b.position.set(0, 7.6, 0);
    pivot.add(b);
    const stripe = box(2.25, 1.1, 0.32, 0x2a2a28, MAT.WOOD);
    stripe.position.set(0, 11.2, 0);
    pivot.add(stripe);
    const stripe2 = box(2.25, 1.1, 0.32, 0xc01418, MAT.ROOF);
    stripe2.position.set(0, 7.6, 0);
    pivot.add(stripe2);
    hub.add(pivot);
  }
  mergeStatic(hub, new Set());
  g.add(hub);
  g.userData.blades = hub;
  return g;
}

function makeArch() {
  const g = new THREE.Group();
  g.name = "arch";
  // Rough natural limestone arch: jagged silhouette, irregular opening.
  const shape = new THREE.Shape();
  const pts = [
    [-16, 0], [-21, 4], [-19, 9], [-24, 13], [-20, 19], [-25, 25],
    [-19, 32], [-22, 40], [-16, 48], [-12, 56], [-6, 61], [1, 64],
    [8, 61], [13, 55], [11, 47], [16, 40], [13, 32], [18, 24],
    [15, 17], [19, 11], [14, 6], [16, 0],
  ];
  shape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
  shape.closePath();
  const hole = new THREE.Path();
  // Irregular opening — not a clean ellipse in a slab
  const holePts = [
    [-3.4, 10], [-4.6, 16], [-3.8, 24], [-2.6, 32], [-0.4, 38],
    [2.2, 36], [3.6, 28], [3.2, 20], [2.0, 13], [-0.6, 9],
  ];
  hole.moveTo(holePts[0][0], holePts[0][1]);
  for (let i = 1; i < holePts.length; i++) hole.lineTo(holePts[i][0], holePts[i][1]);
  hole.closePath();
  shape.holes.push(hole);
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: 14, bevelEnabled: true, bevelThickness: 2.2, bevelSize: 1.8, bevelSegments: 3, curveSegments: 8,
  });
  geo.translate(0, 0, -7);
  // Nibble the surface so the mass is not a flat extruded wall
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const nibble = 0.55 * Math.sin(x * 0.55 + y * 0.31) + 0.4 * Math.sin(y * 0.7 + z * 0.45) + 0.25 * Math.sin((x + z) * 0.9);
    if (y > 2 && y < 62) {
      pos.setX(i, x + nibble * 0.7);
      pos.setZ(i, z + nibble * 0.5);
    }
    x = pos.getX(i); z = pos.getZ(i);
    const stripe = Math.sin(x * 0.35 + y * 0.48) + 0.5 * Math.sin((x - y) * 0.8 + z * 0.25);
    const hatch = stripe > 0.45 ? 0.62 : stripe > 0.05 ? 0.76 : stripe > -0.35 ? 0.88 : 1;
    const crevice = (Math.sin(x * 0.8 + z * 0.45) * Math.sin(y * 0.5)) > 0.55 ? 0.58 : 1;
    const shadeAmt = (z > 5 ? 0.86 : 1) * (y < 5 ? 0.88 : 1) * crevice;
    // Grey limestone, not beige
    col[i * 3] = 0.58 * hatch * shadeAmt;
    col[i * 3 + 1] = 0.56 * hatch * shadeAmt;
    col[i * 3 + 2] = 0.50 * hatch * shadeAmt;
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  retagGeometry(geo, MAT.ROCK, 0);
  const mesh = new THREE.Mesh(geo, patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true })));
  mesh.userData.matId = MAT.ROCK;
  g.add(mesh);
  // Rocky toes in the same grey limestone (not beige slabs)
  add(g, box(11, 12, 16, 0x8a867a, MAT.ROCK), -11, 6, 11, 0.10, 0.28, 0.14);
  add(g, box(9, 10, 14, 0x7a766c, MAT.ROCK), 10, 5, 13, -0.12, -0.22, -0.10);
  add(g, box(13, 9, 18, 0x918c80, MAT.ROCK), 1, 4.5, 20, 0.06, 0.16, 0.04);
  add(g, box(8, 14, 11, 0x6e6a62, MAT.ROCK), -5, 7, 26, 0.12, 0.22, 0.08);
  // Vegetation on the crown
  const bushMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x2a4a28, flatShading: true }));
  bushMat.userData.matId = MAT.FOLIAGE;
  const pineMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x1e3a22, flatShading: true }));
  pineMat.userData.matId = MAT.FOLIAGE;
  const tufts = [[-8, 58, -2], [-2, 63, 1], [4, 61, -3], [8, 54, 2], [-12, 50, 4], [10, 48, -4]];
  for (const [x, y, z] of tufts) {
    const b = new THREE.Mesh(retagGeometry(new THREE.SphereGeometry(2.4, 6, 5), MAT.FOLIAGE, 0), bushMat);
    b.position.set(x, y, z);
    b.scale.set(1, 0.7, 1);
    g.add(b);
  }
  const pines = [[-6, 62, 2], [3, 64, 0], [9, 56, 3]];
  for (const [x, y, z] of pines) {
    const pne = new THREE.Mesh(retagGeometry(new THREE.ConeGeometry(1.8, 6.5, 6), MAT.FOLIAGE, 0), pineMat);
    pne.position.set(x, y + 3, z);
    g.add(pne);
  }
  return g;
}

function makeCave(heightAt) {
  const g = new THREE.Group();
  // Intentionally empty — the previous solid boxes read as a dark mid-frame slab.
  return g;
}

function makeFallsMat() {
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uMatId: { value: MAT.WATERFALL },
    },
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    toneMapped: false,
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        float down = 1.0 - vUv.y;
        vec3 deep = vec3(0.22, 0.48, 0.68);
        vec3 mid  = vec3(0.48, 0.72, 0.86);
        vec3 foam = vec3(0.72, 0.86, 0.94);
        vec3 col = mix(deep, mid, smoothstep(0.0, 0.45, down));
        col = mix(col, foam, smoothstep(0.62, 1.0, down));
        // Soft scrolling streaks — no hard barcode bands, no square dots.
        float sx = vUv.x * 7.0 + sin(vUv.y * 14.0 + uTime * 0.4) * 0.15;
        float ribbon = smoothstep(0.22, 0.0, abs(fract(sx) - 0.5) - 0.28);
        float flow = fract(vUv.y * 2.8 - uTime * 1.25 + sin(vUv.x * 16.0) * 0.05);
        float streak = smoothstep(0.22, 0.0, abs(flow - 0.5) - 0.16);
        col = mix(col, foam, (ribbon * 0.35 + streak * 0.50) * (0.45 + down * 0.4));
        float edge = smoothstep(0.0, 0.07, vUv.x) * smoothstep(1.0, 0.93, vUv.x);
        float a = 0.78 * edge;
        gl_FragColor = vec4(col, a);
      }
    `,
  });
  return mat;
}

function makeWaterfall() {
  const g = new THREE.Group();
  const lime = 0xc2bbb0;
  const limeDk = 0x9a9488;
  const limeLt = 0xd4cfc4;
  // Jagged limestone cliff: irregular silhouette, a recessed chute for the ribbon.
  const cliffShape = new THREE.Shape();
  const outline = [
    [-18, -20], [-20, -11], [-16.5, -3], [-19, 5], [-15, 11],
    [-17, 16.5], [-13, 20.8], [-8, 19.4], [-3.2, 21.6], [0, 20.2],
    [3.6, 21.8], [8, 19.6], [13, 21.0], [17, 16], [15.2, 9],
    [18.5, 2], [15, -6], [19, -13], [15.5, -20],
  ];
  cliffShape.moveTo(outline[0][0], outline[0][1]);
  for (let i = 1; i < outline.length; i++) cliffShape.lineTo(outline[i][0], outline[i][1]);
  cliffShape.closePath();
  const chute = new THREE.Path();
  chute.moveTo(-5.4, 18.6);
  chute.lineTo(5.4, 18.6);
  chute.lineTo(6.2, 8);
  chute.lineTo(5.6, -4);
  chute.lineTo(4.8, -18.5);
  chute.lineTo(-4.8, -18.5);
  chute.lineTo(-5.8, -4);
  chute.lineTo(-6.2, 8);
  chute.closePath();
  cliffShape.holes.push(chute);
  const cliffGeo = new THREE.ExtrudeGeometry(cliffShape, { depth: 10, bevelEnabled: true, bevelThickness: 1.4, bevelSize: 1.1, bevelSegments: 2, curveSegments: 4 });
  cliffGeo.translate(0, 0, -9);
  const cpos = cliffGeo.attributes.position;
  const ccol = new Float32Array(cpos.count * 3);
  for (let i = 0; i < cpos.count; i++) {
    const x = cpos.getX(i), y = cpos.getY(i), z = cpos.getZ(i);
    const hatch = 0.86 + 0.10 * Math.sin(x * 0.7 + y * 0.45) + 0.06 * Math.sin(z * 0.5);
    const shade = z > -2 ? 0.9 : 1;
    ccol[i * 3] = 0.76 * hatch * shade;
    ccol[i * 3 + 1] = 0.72 * hatch * shade;
    ccol[i * 3 + 2] = 0.64 * hatch * shade;
  }
  cliffGeo.setAttribute("color", new THREE.BufferAttribute(ccol, 3));
  cliffGeo.computeVertexNormals();
  retagGeometry(cliffGeo, MAT.ROCK, 0);
  const cliffM = new THREE.Mesh(cliffGeo, patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true })));
  cliffM.userData.matId = MAT.ROCK;
  g.add(cliffM);
  // Broken lip stones and side buttresses
  add(g, box(7, 2.4, 8, limeLt, MAT.ROCK), -10, 21.4, -1.2);
  add(g, box(6.4, 2.1, 7, lime, MAT.ROCK), 10, 21.0, -0.6);
  add(g, box(4.2, 2.8, 6, limeDk, MAT.ROCK), -6, 20.6, 1.4);
  add(g, box(3.6, 2.2, 5.5, lime, MAT.ROCK), 5.5, 20.4, 1.8);
  add(g, box(3.8, 6, 5, limeDk, MAT.ROCK), -14, 8, -1.5);
  add(g, box(3.4, 5, 4.6, lime, MAT.ROCK), 14, 6, -1.2);
  add(g, box(16, 2.4, 8, lime, MAT.ROCK), 0, -19.2, 3.0);
  const geo = new THREE.PlaneGeometry(11, 40, 1, 24);
  retagGeometry(geo, MAT.WATERFALL, 1);
  const sheet = new THREE.Mesh(geo, makeFallsMat());
  sheet.name = "falls";
  sheet.position.set(0, 1.2, 2.2);
  g.add(sheet);
  const sheet2 = new THREE.Mesh(geo.clone(), makeFallsMat());
  sheet2.name = "falls";
  sheet2.position.set(0.8, 0.4, 2.8);
  sheet2.rotation.y = 0.06;
  sheet2.scale.set(0.72, 0.96, 1);
  if (sheet2.material.uniforms) sheet2.material.uniforms.uTime = sheet.material.uniforms.uTime;
  g.add(sheet2);
  // Soft round foam puffs at the plunge (no square particles)
  const foamMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
    color: 0xf2f7fc, emissive: 0xc8dce8, emissiveIntensity: 0.12,
    flatShading: false, transparent: true, opacity: 0.78, depthWrite: false,
  }));
  foamMat.userData.matId = MAT.FOAM;
  const foamSpecs = [
    [0, -18.2, 4.2, 4.6, 1.3, 4.0],
    [2.2, -17.8, 5.4, 2.8, 1.0, 2.4],
    [-2.0, -17.9, 5.2, 2.6, 0.95, 2.2],
    [0.6, -17.4, 6.4, 2.0, 0.8, 1.8],
    [-0.8, -17.5, 6.0, 1.8, 0.75, 1.6],
    [0, -16.8, 3.2, 3.2, 0.9, 2.2],
  ];
  const foam = new THREE.InstancedMesh(retagGeometry(new THREE.SphereGeometry(1, 10, 8), MAT.FOAM, 1), foamMat, foamSpecs.length);
  foam.name = "foam";
  foam.frustumCulled = false;
  const fd = new THREE.Object3D();
  foamSpecs.forEach((sp, i) => {
    fd.position.set(sp[0], sp[1], sp[2]);
    fd.scale.set(sp[3], sp[4], sp[5]);
    fd.updateMatrix();
    foam.setMatrixAt(i, fd.matrix);
  });
  foam.instanceMatrix.needsUpdate = true;
  foam.userData.specs = foamSpecs;
  g.add(foam);
  // Plunge pool
  const poolGeo = new THREE.CircleGeometry(7.2, 20);
  poolGeo.rotateX(-Math.PI / 2);
  retagGeometry(poolGeo, MAT.WATER_DEEP, 1);
  const poolMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
    color: 0x3a8aaa, emissive: 0x1a4050, emissiveIntensity: 0.08, flatShading: true,
  }));
  poolMat.userData.matId = MAT.WATER_DEEP;
  const pool = new THREE.Mesh(poolGeo, poolMat);
  pool.position.set(0, -19.0, 6.5);
  g.add(pool);
  // Greenery on the lip and flanks
  const bushMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x3a6a32, flatShading: true }));
  bushMat.userData.matId = MAT.FOLIAGE;
  const pineMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x2a4a28, flatShading: true }));
  pineMat.userData.matId = MAT.FOLIAGE;
  const tufts = [[-12, 23, 2], [-9, 22.5, 3], [10, 22.8, 2], [13, 22, 3], [-14, 16, -1], [14, 14, -1], [-8, -16, 6], [8, -15, 7], [0, 22.6, -4], [-6, -17, 8]];
  for (const [x, y, z] of tufts) {
    const b = new THREE.Mesh(retagGeometry(new THREE.SphereGeometry(1.8, 6, 5), MAT.FOLIAGE, 0), bushMat);
    b.position.set(x, y, z);
    b.scale.set(1.2, 0.75, 1.1);
    g.add(b);
  }
  // Pines on the flanks of the lip only — never a row of turrets over the fall.
  for (const [x, y, z] of [[-13, 22.5, -1], [13, 22.8, 0], [-15, 18, -2], [15, 17, -2]]) {
    const pne = new THREE.Mesh(retagGeometry(new THREE.ConeGeometry(1.6, 5.8, 6), MAT.FOLIAGE, 0), pineMat);
    pne.position.set(x, y + 2.6, z);
    g.add(pne);
  }
  g.userData.sheets = [sheet, sheet2];
  g.userData.foam = foam;
  g.userData.sheet = sheet;
  return g;
}

function makeStream(H) {
  const g = new THREE.Group();
  const pts = [
    [130, -932], [90, -942], [40, -952], [-10, -962],
    [-20, -980], [0, -1020], [16, -1080], [28, -1160], [36, -1220],
  ];
  const mat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
    color: 0x3a90a8, emissive: 0x163848, emissiveIntensity: 0.1, flatShading: true,
  }));
  mat.userData.matId = MAT.WATER_DEEP;
  const segs = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1];
    const dx = b[0] - a[0], dz = b[1] - a[1];
    const len = Math.hypot(dx, dz);
    const mx = (a[0] + b[0]) / 2, mz = (a[1] + b[1]) / 2;
    const y = Math.max(0.35, (H(mx, mz) + H(a[0], a[1]) + H(b[0], b[1])) / 3 + 0.18);
    const geo = new THREE.PlaneGeometry(len + 1.2, i < 2 ? 7.5 : 5.4);
    geo.rotateX(-Math.PI / 2);
    retagGeometry(geo, MAT.WATER_DEEP, 1);
    const m = new THREE.Mesh(geo, mat);
    m.position.set(mx, y, mz);
    m.rotation.y = -Math.atan2(dz, dx);
    g.add(m);
    segs.push(m);
  }
  return g;
}

function makeParkedPlane() {
  const g = new THREE.Group();
  add(g, box(1.4, 1.2, 6.2, 0xf4f4f8, MAT.PLANE, 0), 0, 0.7, 0);
  add(g, box(10.2, 0.16, 1.6, 0xf4f4f8, MAT.PLANE, 0), 0, 1.2, 0.3);
  add(g, box(10.2, 0.05, 0.25, 0xe01820, MAT.PLANE, 0), 0, 1.3, 0.3);
  add(g, box(0.12, 1.4, 1.0, 0xf4f4f8, MAT.PLANE, 0), 0, 1.5, -2.8);
  add(g, box(2.4, 0.1, 0.7, 0xf4f4f8, MAT.PLANE, 0), 0, 0.8, -2.8);
  return g;
}
function makeCar(color) {
  const g = new THREE.Group();
  add(g, box(3.2, 1.0, 1.5, color, MAT.METAL, 0), 0, 0.7, 0);
  add(g, box(1.6, 0.7, 1.4, 0x9ad4e8, MAT.METAL, 0), -0.2, 1.3, 0);
  return g;
}

function paintDigit(g, ch, x, y, z, scale = 1) {
  // 5x7 strokes using bright hero bars, readable in ASCII
  const on = {
    "0": ["111","101","101","101","111"],
    "9": ["111","101","111","001","111"],
    "2": ["111","001","111","100","111"],
    "7": ["111","001","010","010","010"],
  }[ch];
  if (!on) return;
  const w = 2.2 * scale, h = 2.4 * scale, t = 0.7 * scale;
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 3; c++) {
      if (on[r][c] === "1") add(g, box(w, 0.28, h, 0xffffff, MAT.LIGHT, 1), x + (c - 1) * w * 1.15, y, z + (2 - r) * h * 1.15);
    }
  }
}

function chevronPair(g, x, y, z, dir, scale = 1) {
  // V pointing along +X if dir=+1 (toward increasing x / runway 09), -1 for 27
  const len = 9 * scale, thick = 1.15 * scale, w = 5.5 * scale;
  const col = 0x3cff6a;
  const L = box(len, 0.3, thick, col, MAT.LIGHT, 1);
  const R = box(len, 0.3, thick, col, MAT.LIGHT, 1);
  L.position.set(x, y, z - w * 0.35);
  R.position.set(x, y, z + w * 0.35);
  L.rotation.y = dir * 0.55;
  R.rotation.y = -dir * 0.55;
  g.add(L, R);
}

function makeRunwayLights(parent, x0, x1, z, y, H = null) {
  const g = new THREE.Group();
  const len = Math.abs(x1 - x0);
  const wide = len > 500; // main runway
  const edge = wide ? 17 : 10;
  const step = wide ? 20 : 28;
  const positions = [];
  for (let x = x0; x <= x1; x += step) {
    for (const s of [-edge, edge]) {
      const zz = z + s;
      const hy = H ? H(x, zz) : y;
      if (hy < 2.8) continue;
      positions.push([x, hy, zz]);
    }
  }
  const nL = positions.length;
  const poleGeo = retagGeometry(new THREE.CylinderGeometry(wide ? 0.13 : 0.1, wide ? 0.16 : 0.12, wide ? 2.2 : 1.7, 6), MAT.METAL, 0);
  const poleMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x2c2c2a, flatShading: true }));
  const poles = new THREE.InstancedMesh(poleGeo, poleMat, nL);
  poles.name = "rwyLamp";
  poles.userData.matId = MAT.METAL;
  const headGeo = retagGeometry(new THREE.BoxGeometry(wide ? 0.4 : 0.3, 0.2, wide ? 0.44 : 0.32), MAT.METAL, 0);
  const headMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x3a3a36, flatShading: true }));
  const heads = new THREE.InstancedMesh(headGeo, headMat, nL);
  heads.name = "rwyLamp";
  heads.userData.matId = MAT.METAL;
  const glowGeo = retagGeometry(new THREE.SphereGeometry(wide ? 0.48 : 0.34, 8, 6), MAT.LIGHT, 1);
  const glowMat = patchMaterialIdAlpha(new THREE.MeshBasicMaterial({
    color: 0xffc45a, toneMapped: false, transparent: true, opacity: 0.85, depthWrite: false,
    blending: THREE.AdditiveBlending,
  }));
  const glows = new THREE.InstancedMesh(glowGeo, glowMat, nL);
  glows.name = "rwyGlow";
  glows.userData.matId = MAT.LIGHT;
  glows.visible = false;
  const dummyL = new THREE.Object3D();
  const poleH = wide ? 2.2 : 1.7;
  positions.forEach((p, i) => {
    dummyL.position.set(p[0], p[1] + poleH * 0.5, p[2]);
    dummyL.scale.set(1, 1, 1);
    dummyL.rotation.set(0, 0, 0);
    dummyL.updateMatrix();
    poles.setMatrixAt(i, dummyL.matrix);
    dummyL.position.y = p[1] + poleH + 0.05;
    dummyL.updateMatrix();
    heads.setMatrixAt(i, dummyL.matrix);
    dummyL.position.y = p[1] + poleH;
    dummyL.scale.set(1, 0.65, 1);
    dummyL.updateMatrix();
    glows.setMatrixAt(i, dummyL.matrix);
  });
  poles.instanceMatrix.needsUpdate = true;
  heads.instanceMatrix.needsUpdate = true;
  glows.instanceMatrix.needsUpdate = true;
  g.add(poles, heads, glows);
  g.userData.glow = glows;
  // No continuous edge ribbon — a long thin box seen end-on inks as a black line across the chase view. Lamps already mark the edges.
  for (const side of [x0, x1]) {
    const dir = side === x0 ? 1 : -1;
    for (let i = 0; i < (wide ? 8 : 3); i++) {
      add(g, box(2.4, 0.28, wide ? 24 : 12, 0xffffff, MAT.LIGHT, 1), side + dir * (6 + i * 3.2), y, z);
    }
  }
  for (let x = x0 + 28; x < x1 - 28; x += wide ? 16 : 22) {
    add(g, slab(wide ? 12 : 8, 1.6, 0xffffff, MAT.RUNWAY, 1), x, y, z, -Math.PI / 2);
  }
  if (wide) {
    // 09 at the west threshold, 27 at the east — large centreline numerals
    paintDigit(g, "0", x0 + 48, y + 0.25, z - 8, 2.4);
    paintDigit(g, "9", x0 + 48, y + 0.25, z + 8, 2.4);
    paintDigit(g, "2", x1 - 48, y + 0.25, z - 8, 2.4);
    paintDigit(g, "7", x1 - 48, y + 0.25, z + 8, 2.4);
    // green chevrons leading in: west of 09 (dir +X), east of 27 (dir -X)
    for (let i = 0; i < 5; i++) {
      chevronPair(g, x0 - 28 - i * 16, y, z, +1, 1.15);
      chevronPair(g, x1 + 28 + i * 16, y, z, -1, 1.15);
    }
  }
  parent.add(g);
  return g;
}




function makeHangingKeep() {
  // Original floating island: rocky underside, hanging roots and vines,
  // ruined keep and a great tree, water falling into mist, small companion rocks.
  const g = new THREE.Group();
  g.name = "hanging-keep";
  const lime = 0xc4b48c, limeLt = 0xd4c6a0, limeDk = 0x7a6a4c, moss = 0x3a6a32, vine = 0x2a5428;

  // UV sphere (even rings) so the bowl has enough verts after the Y stretch.
  // An icosahedron stretched 30 m deep turns into a handful of huge facets.
  const bodyGeo = new THREE.SphereGeometry(1, 28, 20);
  const pos = bodyGeo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const top = Math.max(0, y);
    const bot = Math.max(0, -y);
    const jag = 1 + 0.06 * Math.sin(x * 4.4 + z * 3.6) + 0.04 * Math.sin(y * 5.0 + x * 2.4);
    const rx = 44 * jag * (1 + bot * 0.10);
    const rz = 38 * jag * (1 + bot * 0.09);
    let yOut = top * 6.2 - bot * 24 * (1 + 0.08 * Math.abs(Math.sin(x * 3.2 + z * 2.6)));
    x *= rx; z *= rz; y = yOut;
    if (y > 5.2) y = 5.2 + (y - 5.2) * 0.08;
    pos.setXYZ(i, x, y, z);
    const mossK = Math.max(0, Math.min(1, (y + 4) / 12));
    const shade = 0.62 + 0.20 * Math.sin(x * 0.08 + z * 0.1);
    // Warm rock, darker than daylight wash; moss toward the rim.
    col[i * 3]     = (0.48 * (1 - mossK) + 0.28 * mossK) * shade;
    col[i * 3 + 1] = (0.42 * (1 - mossK) + 0.46 * mossK) * shade;
    col[i * 3 + 2] = (0.32 * (1 - mossK) + 0.22 * mossK) * shade;
  }
  bodyGeo.computeVertexNormals();
  retagGeometry(bodyGeo, MAT.ROCK, 0);
  const body = new THREE.Mesh(bodyGeo, patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
    vertexColors: true, flatShading: false,
  })));
  body.userData.matId = MAT.ROCK;
  g.add(body);

  // Hanging stone roots — irregular, not a single pillar
  for (const [x, z, r, h, lean] of [
    [-12, 8, 5.5, 28, 0.18], [10, -10, 4.8, 24, -0.15],
    [4, 14, 3.6, 20, 0.22], [-18, -6, 4.0, 22, -0.2],
    [16, 4, 3.2, 18, 0.12], [-4, -14, 3.8, 21, 0.1],
  ]) {
    const root = cone(r * 0.18, h, 7, limeDk, MAT.ROCK);
    root.rotation.x = Math.PI + lean;
    root.rotation.z = lean * 0.6;
    root.position.set(x, -h * 0.32, z);
    g.add(root);
  }
  // Vines
  for (const [x, z, h] of [[-20, 2, 16], [18, -8, 14], [8, 16, 12], [-8, -16, 15], [22, 6, 11], [-16, 12, 13]]) {
    const v = cyl(0.12, 0.18, h, 4, vine, MAT.FOLIAGE);
    v.position.set(x, -h * 0.25, z);
    v.rotation.z = (x > 0 ? 0.15 : -0.15);
    g.add(v);
    const leaf = mesh(new THREE.SphereGeometry(0.7, 5, 4), moss, MAT.FOLIAGE);
    leaf.position.set(x * 0.96, -h * 0.55, z);
    g.add(leaf);
  }

  // Living terrace
  add(g, box(40, 1.5, 28, lime, MAT.ROCK), 0, 6.6, 0);
  // Ruined keep + broken arch, overgrown
  add(g, box(14, 9, 12, limeLt, MAT.BUILDING), -7, 11.6, -1);
  add(g, box(7.5, 16, 7.5, lime, MAT.BUILDING), 8, 15.0, 3);
  add(g, box(3.2, 2.2, 7.5, limeDk, MAT.ROCK), 8, 23.4, 3);
  add(g, box(10, 5.2, 2.2, lime, MAT.BUILDING), 0, 10.0, 9);
  add(g, box(2.2, 6.4, 10, limeDk, MAT.BUILDING), -16, 10.5, 1);
  // broken arch
  add(g, box(1.7, 7.5, 1.7, limeDk, MAT.ROCK), -2, 10.8, 12);
  add(g, box(1.7, 5.6, 1.7, lime, MAT.ROCK), 3.4, 9.9, 12);
  add(g, box(6.8, 1.4, 1.9, limeLt, MAT.ROCK), 0.7, 15.0, 12);
  // ivy patches on the walls
  for (const [x, y, z, s] of [[-7, 10, 5.2, 2.4], [8, 14, 7.1, 1.8], [0, 11, 10.2, 1.6], [-16, 11, 4, 1.7]]) {
    const ivy = mesh(new THREE.SphereGeometry(s, 5, 4), moss, MAT.FOLIAGE);
    ivy.scale.set(1.2, 0.55, 0.4);
    ivy.position.set(x, y, z);
    g.add(ivy);
  }

  // Great tree on the west terrace
  const tr = cyl(0.55, 0.9, 10, 6, 0x5a3a22, MAT.WOOD);
  tr.position.set(-14, 12.0, -4);
  g.add(tr);
  for (const [ox, oy, oz, r] of [[0, 7, 0, 5.2], [3.2, 5.6, 1.4, 3.6], [-3.0, 5.8, -1.6, 3.4], [1.2, 8.4, -2, 2.8], [-1.5, 8.2, 2.2, 2.6]]) {
    const leaf = mesh(new THREE.SphereGeometry(r, 8, 6), moss, MAT.FOLIAGE);
    leaf.position.set(-14 + ox, 12.0 + oy, -4 + oz);
    g.add(leaf);
  }
  // Smaller rim trees
  for (const [x, z, s] of [[16, 12, 0.95], [20, -8, 1.1], [10, -16, 0.85], [-6, -16, 0.9], [4, 16, 0.7]]) {
    const t2 = cyl(0.22 * s, 0.36 * s, 4.4 * s, 5, 0x5a3a22, MAT.WOOD);
    t2.position.set(x, 7.4 + 2.2 * s, z);
    g.add(t2);
    const leaf = mesh(new THREE.SphereGeometry(2.2 * s, 6, 5), moss, MAT.FOLIAGE);
    leaf.position.set(x, 7.4 + 5.4 * s, z);
    g.add(leaf);
  }

  const pool = box(12, 0.4, 9, 0x3a90b8, MAT.WATER_DEEP);
  pool.position.set(6, 7.4, -10);
  g.add(pool);

  // Waterfalls — crossed cards so they never collapse to an edge-on stick
  const fallA = new THREE.PlaneGeometry(14, 38, 1, 14);
  const fallB = fallA.clone();
  fallB.rotateY(Math.PI / 2);
  const fallGeo = mergeGeos([fallA, fallB], MAT.WATERFALL);
  retagGeometry(fallGeo, MAT.WATERFALL, 1);
  const sheets = [];
  const s1 = new THREE.Mesh(fallGeo, makeFallsMat());
  s1.name = "falls";
  s1.position.set(8, -14, -40);
  s1.rotation.y = Math.PI + 0.18;
  g.add(s1); sheets.push(s1);
  const s2 = new THREE.Mesh(fallGeo.clone(), makeFallsMat());
  s2.name = "falls";
  s2.position.set(36, -14, 6);
  s2.rotation.y = Math.PI * 0.5 - 0.2;
  s2.scale.set(0.72, 0.82, 0.72);
  if (s2.material.uniforms && s1.material.uniforms) s2.material.uniforms.uTime = s1.material.uniforms.uTime;
  g.add(s2); sheets.push(s2);
  const s3 = new THREE.Mesh(fallGeo.clone(), makeFallsMat());
  s3.name = "falls";
  s3.position.set(-14, -13, -36);
  s3.rotation.y = Math.PI - 0.4;
  s3.scale.set(0.55, 0.7, 0.55);
  if (s3.material.uniforms && s1.material.uniforms) s3.material.uniforms.uTime = s1.material.uniforms.uTime;
  g.add(s3); sheets.push(s3);
  g.userData.sheets = sheets;

  // Plunge mist (opaque soft puffs — no id-alpha transparency bug)
  const mistMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
    color: 0xe8f2f8, emissive: 0xd8e8f0, emissiveIntensity: 0.35, flatShading: false,
  }));
  mistMat.userData.matId = MAT.CLOUD;
  const mistGeo = retagGeometry(new THREE.SphereGeometry(1, 8, 6), MAT.CLOUD);
  const mist = new THREE.InstancedMesh(mistGeo, mistMat, 10);
  mist.name = "mist";
  const md = new THREE.Object3D();
  const mistSpots = [
    [8, -36, -42, 5.5], [14, -40, -38, 4.2], [2, -38, -44, 4.8],
    [38, -32, 6, 4.0], [34, -36, 10, 3.4], [-14, -32, -38, 3.6],
    [10, -44, -36, 3.2], [22, -30, -20, 2.8],
    [4, -28, -46, 3.0], [40, -28, -2, 2.6],
  ];
  mistSpots.forEach((s, i) => {
    md.position.set(s[0], s[1], s[2]);
    md.scale.setScalar(s[3]);
    md.updateMatrix();
    mist.setMatrixAt(i, md.matrix);
  });
  mist.instanceMatrix.needsUpdate = true;
  mist.count = mistSpots.length;
  g.add(mist);

  // Companion rocks
  const rockGeo = new THREE.IcosahedronGeometry(1, 1);
  retagGeometry(rockGeo, MAT.ROCK, 0);
  const rockMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: limeDk, flatShading: false }));
  const crumbs = new THREE.InstancedMesh(rockGeo, rockMat, 7);
  crumbs.name = "keep-rocks";
  [
    [38, 2, -8, 4.2], [-36, -4, 10, 3.4], [28, -12, 22, 2.8],
    [-24, 8, 28, 3.0], [42, -6, 14, 2.2], [-40, -10, -16, 2.6], [20, 14, -30, 2.4],
  ].forEach((s, i) => {
    md.position.set(s[0], s[1], s[2]);
    md.scale.set(s[3], s[3] * 0.7, s[3] * 0.85);
    md.rotation.set(s[1] * 0.1, i, 0.2);
    md.updateMatrix();
    crumbs.setMatrixAt(i, md.matrix);
  });
  crumbs.instanceMatrix.needsUpdate = true;
  g.add(crumbs);

  // Soft wreath of local cloud (one draw)
  const wPuff = retagGeometry(new THREE.SphereGeometry(1, 8, 6), MAT.CLOUD);
  const wMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
    color: 0xfffaf4, emissive: 0xfff3e0, emissiveIntensity: 0.22, flatShading: false,
  }));
  wMat.userData.matId = MAT.CLOUD;
  const wreath = new THREE.InstancedMesh(wPuff, wMat, 8);
  wreath.name = "keep-wreath";
  [
    [-36, 2, -10, 6], [38, 3, 10, 6.5], [10, 1, 34, 5.5], [-20, 0, 32, 5],
    [30, -10, -26, 5.5], [-34, -8, -24, 5], [4, 6, -36, 6], [22, 8, 24, 4.5],
  ].forEach((s, i) => {
    md.position.set(s[0], s[1], s[2]);
    md.scale.set(s[3], s[3] * 0.55, s[3] * 0.9);
    md.updateMatrix();
    wreath.setMatrixAt(i, md.matrix);
  });
  wreath.instanceMatrix.needsUpdate = true;
  g.add(wreath);

  return g;
}

function makeRoad(from, to, width = 8, H = null) {
  const dx = to.x - from.x, dz = to.z - from.z;
  const len = Math.hypot(dx, dz);
  const yaw = -Math.atan2(dz, dx);
  // Short segments snapped to terrain. Yaw uses YXZ so the slab stays horizontal
  // (Euler XYZ + x=-90 used to gimbal-lock and stand the road up as a black wall).
  const g = new THREE.Group();
  g.name = "road";
  const seg = 16;
  const nx = dx / (len || 1), nz = dz / (len || 1);
  for (let t = 0; t < len; t += seg) {
    const w = Math.min(seg, len - t) * 0.94;
    const mid = t + Math.min(seg, len - t) * 0.5;
    const x = from.x + nx * mid;
    const z = from.z + nz * mid;
    const h = H ? H(x, z) : (from.y + (to.y - from.y) * (mid / (len || 1)));
    if (h < 2.4) continue;
    const y = h + 0.16;
    const m = slab(w, width, 0xcfc8bc, MAT.ROAD);
    m.position.set(x, y, z);
    orientHorizontal(m, yaw);
    g.add(m);
  }
  return g;
}


function patchGlanceDiscard(material) {
  // Drop fragments seen almost edge-on. A long thin slab otherwise rasterises
  // as a 1 px ink line when the chase camera looks along it.
  const prev = material.onBeforeCompile;
  material.onBeforeCompile = (shader, renderer) => {
    if (typeof prev === "function") prev(shader, renderer);
    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      "#include <common>\nvarying vec3 vViewPos;\nvarying vec3 vViewN;"
    );
    shader.vertexShader = shader.vertexShader.replace(
      "#include <project_vertex>",
      "#include <project_vertex>\nvViewPos = mvPosition.xyz;\nvViewN = normalize(normalMatrix * vec3(0.0, 1.0, 0.0));"
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <common>",
      "#include <common>\nvarying vec3 vViewPos;\nvarying vec3 vViewN;"
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <dithering_fragment>",
      "if (abs(dot(normalize(vViewN), normalize(-vViewPos))) < 0.16) discard;\n#include <dithering_fragment>"
    );
  };
  const prevKey = material.customProgramCacheKey ? material.customProgramCacheKey.bind(material) : () => "";
  material.customProgramCacheKey = () => prevKey() + "|glance-discard-v1";
  material.needsUpdate = true;
  return material;
}

function bucketOf(o, mid) {
  let n = o;
  while (n) {
    if (n.name === "arch") return "rock";
    n = n.parent;
  }
  if (mid === MAT.ROOF) return "roof";
  if (mid === MAT.BUILDING) return "plaster";
  if (mid === MAT.ROCK) return "stone";
  if (mid === MAT.RUNWAY) {
    // Keep the airport ribbon (y~4) off the ridge strip (y~90) so a merge
    // can never form a long sliver through mid-air.
    o.updateWorldMatrix(true, false);
    const y = o.matrixWorld.elements[13];
    return y > 40 ? "runwayHi" : "runway";
  }
  if (mid === MAT.ROAD) return "road";
  return "plain";
}

function mergeBucket(items, name, kind) {
  if (!items.length) return null;
  const geo = mergeGeos(items.map((it) => it.g), items[0].mid);
  let n = 0;
  for (const it of items) n += it.g.getAttribute("position").count;
  const cols = new Float32Array(n * 3);
  let base = 0;
  for (const it of items) {
    const c = it.g.getAttribute("color");
    const p = it.g.getAttribute("position");
    for (let i = 0; i < p.count; i++) {
      cols[(base + i) * 3] = c.getX(i);
      cols[(base + i) * 3 + 1] = c.getY(i);
      cols[(base + i) * 3 + 2] = c.getZ(i);
    }
    base += p.count;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(cols, 3));
  let mat;
  if (kind === "rock") mat = triplanarLambert({ map: loadTex("rock.png"), scale: 0.028, vertexColors: true, flatShading: false, matId: MAT.ROCK });
  else if (kind === "stone") mat = triplanarLambert({ map: loadTex("stone.png"), scale: 0.038, vertexColors: true, flatShading: false, matId: MAT.ROCK });
  else if (kind === "plaster") mat = triplanarLambert({ map: loadTex("plaster.png"), scale: 0.055, vertexColors: true, flatShading: false, matId: MAT.BUILDING });
  else if (kind === "roof") mat = triplanarLambert({ map: loadTex("roof.png"), scale: 0.09, vertexColors: true, flatShading: false, matId: MAT.ROOF });
  else if (kind === "runway" || kind === "runwayHi") mat = patchMaterialIdAlpha(patchGlanceDiscard(new THREE.MeshBasicMaterial({ vertexColors: true, matId: MAT.RUNWAY, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 })));
  else if (kind === "road") mat = patchMaterialIdAlpha(patchGlanceDiscard(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: false, matId: MAT.ROAD, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 })));
  else mat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: false }));
  if (kind === "runway" || kind === "runwayHi") retagGeometry(geo, MAT.RUNWAY, 0);
  if (kind === "road") retagGeometry(geo, MAT.ROAD, 0);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = name;
  mesh.userData.matId = (kind === "runway" || kind === "runwayHi") ? MAT.RUNWAY : mesh.userData.matId;
  mesh.matrixAutoUpdate = false;
  return mesh;
}


function mergeVertexColors(group, skipNames = new Set()) {
  // Merge into a single untextured Lambert mesh. Avoids triplanar atlas tiling
  // and tint bleed on large painted volumes such as the hanging keep.
  const items = [];
  const toRemove = [];
  group.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(group.matrixWorld).invert();
  group.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh) return;
    let n = o;
    while (n) {
      if (skipNames.has(n.name)) return;
      n = n.parent;
    }
    const mat = o.material;
    if (!mat || mat.transparent || mat.isShaderMaterial) return;
    const g = o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    g.applyMatrix4(inv);
    const idAttr = g.getAttribute("aId");
    const mid = (idAttr ? idAttr.getX(0) : (o.userData.matId || 8));
    const col = mat.color ? mat.color : new THREE.Color(0xffffff);
    const vc = g.getAttribute("color");
    const p = g.getAttribute("position");
    const colors = new Float32Array(p.count * 3);
    for (let i = 0; i < p.count; i++) {
      if (vc) {
        colors[i * 3] = vc.getX(i);
        colors[i * 3 + 1] = vc.getY(i);
        colors[i * 3 + 2] = vc.getZ(i);
      } else {
        colors[i * 3] = col.r;
        colors[i * 3 + 1] = col.g;
        colors[i * 3 + 2] = col.b;
      }
    }
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    items.push({ g, mid });
    toRemove.push(o);
  });
  for (const o of toRemove) {
    if (o.parent) o.parent.remove(o);
  }
  if (!items.length) return null;
  const geo = mergeGeos(items.map((it) => it.g), items[0].mid);
  const n = geo.getAttribute("position").count;
  const cols = new Float32Array(n * 3);
  let base = 0;
  for (const it of items) {
    const c = it.g.getAttribute("color");
    const p = it.g.getAttribute("position");
    for (let i = 0; i < p.count; i++) {
      cols[(base + i) * 3] = c.getX(i);
      cols[(base + i) * 3 + 1] = c.getY(i);
      cols[(base + i) * 3 + 2] = c.getZ(i);
    }
    base += p.count;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(cols, 3));
  geo.computeVertexNormals();
  const mat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
    vertexColors: true, flatShading: false,
  }));
  mat.userData.matId = items[0].mid;
  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = "keep-merged";
  mesh.matrixAutoUpdate = false;
  group.add(mesh);
  return mesh;
}

function mergeStatic(group, skipNames = new Set()) {
  const buckets = { rock: [], stone: [], plaster: [], roof: [], road: [], runway: [], runwayHi: [], plain: [] };
  const toRemove = [];
  group.updateMatrixWorld(true);
  // Bake into the root group's local space (not world), so a positioned
  // boat/steamer can be merged without the mesh flying off to 2x its position.
  const inv = new THREE.Matrix4().copy(group.matrixWorld).invert();
  group.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh) return;
    let n = o;
    while (n) {
      if (skipNames.has(n.name)) return;
      n = n.parent;
    }
    const mat = o.material;
    if (!mat || mat.transparent) return;
    const g = o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    g.applyMatrix4(inv);
    const idAttr = g.getAttribute("aId");
    const mid = (idAttr ? idAttr.getX(0) : (o.userData.matId || 8));
    const col = mat.color ? mat.color : new THREE.Color(0xffffff);
    const vc = g.getAttribute("color");
    const p = g.getAttribute("position");
    const colors = new Float32Array(p.count * 3);
    for (let i = 0; i < p.count; i++) {
      if (vc) {
        colors[i * 3] = vc.getX(i);
        colors[i * 3 + 1] = vc.getY(i);
        colors[i * 3 + 2] = vc.getZ(i);
      } else {
        colors[i * 3] = col.r;
        colors[i * 3 + 1] = col.g;
        colors[i * 3 + 2] = col.b;
      }
    }
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const kind = bucketOf(o, mid);
    buckets[kind].push({ g, mid });
    toRemove.push(o);
  });
  for (const o of toRemove) {
    if (o.parent) o.parent.remove(o);
  }
  let main = null;
  for (const kind of ["plain", "plaster", "stone", "rock", "roof", "road", "runway", "runwayHi"]) {
    const mesh = mergeBucket(buckets[kind], main ? "landmarks-merged-" + kind : "landmarks-merged", kind);
    if (!mesh) continue;
    if (!main) main = mesh;
    group.add(mesh);
  }
}

function mergeGeos(geos, fallbackId = 8) {
  let n = 0;
  for (const g of geos) n += g.getAttribute("position").count;
  const pos = new Float32Array(n * 3);
  const nrm = new Float32Array(n * 3);
  const aid = new Float32Array(n * 2);
  const hasUV = geos.some((g) => g.getAttribute("uv"));
  const uv = hasUV ? new Float32Array(n * 2) : null;
  const idx = [];
  let base = 0;
  for (const g of geos) {
    const p = g.getAttribute("position");
    const nn = g.getAttribute("normal");
    const id = g.getAttribute("aId");
    const uvs = g.getAttribute("uv");
    for (let i = 0; i < p.count; i++) {
      pos[(base + i) * 3] = p.getX(i);
      pos[(base + i) * 3 + 1] = p.getY(i);
      pos[(base + i) * 3 + 2] = p.getZ(i);
      if (nn) {
        nrm[(base + i) * 3] = nn.getX(i);
        nrm[(base + i) * 3 + 1] = nn.getY(i);
        nrm[(base + i) * 3 + 2] = nn.getZ(i);
      }
      if (id) { aid[(base + i) * 2] = id.getX(i); aid[(base + i) * 2 + 1] = id.getY(i); }
      else { aid[(base + i) * 2] = fallbackId; }
      if (uv && uvs) {
        uv[(base + i) * 2] = uvs.getX(i);
        uv[(base + i) * 2 + 1] = uvs.getY(i);
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
  out.setAttribute("aId", new THREE.BufferAttribute(aid, 2));
  if (uv) out.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  out.setIndex(idx);
  out.computeBoundingSphere();
  return out;
}


function makeCoastalCliffs(H) {
  const positions = [];
  const colors = [];
  const indices = [];
  // Only the west limestone cape and the far-east headland — never a wall in front of the airport.
  // East and far-east headlands only. The west cape is sculpted in the
  // heightfield — a coarse addon mesh there read as giant khaki prisms.
  const ranges = [
    { x0: 80, x1: 280, z0: -1420, z1: -1220 },
    { x0: 540, x1: 880, z0: -1400, z1: -1120 },
  ];
  const pts = [];
  for (const R of ranges) {
    for (let x = R.x0; x <= R.x1; x += 4) {
      let zLand = null, h = 0;
      for (let z = R.z0; z <= R.z1; z += 5) {
        const hh = H(x, z);
        if (hh > (R.x0 === 60 ? 4.2 : 7)) { zLand = z; h = hh; break; }
      }
      if (zLand != null) {
        const hMin = R.x0 === 60 ? 6 : 10;
        const hMax = R.x0 === 60 ? 22 : 56;
        // Jitter the west cape so it is never a long straight beige wall
        let zx = zLand - 1.2, hx = Math.min(Math.max(h, hMin), hMax);
        if (R.x0 === -480) {
          const n = Math.sin(x * 0.07) * 0.5 + Math.sin(x * 0.19) * 0.3;
          zx += n * 4;
          hx = Math.min(hMax, Math.max(8, hx * (0.65 + 0.55 * (0.5 + 0.5 * Math.sin(x * 0.11)))));
          // Leave the arch window open; do not punch regular coves (they read as black holes)
          if (Math.abs(x - LANDMARKS.arch.x) < 12) continue;
        }
        pts.push({ x, z: zx, h: hx, band: R.x0 });
      }
    }
  }
  function vert(x, y, z, shade) {
    const i = positions.length / 3;
    positions.push(x, y, z);
    const stripe = Math.sin(x * 1.15 + y * 1.6) + 0.7 * Math.sin((x - y) * 2.2 + z * 0.22);
    // Soft hatching only — never near-black 'cave' holes on the cliff face
    const hatch = stripe > 0.45 ? 0.72 : stripe > 0.1 ? 0.82 : stripe > -0.2 ? 0.92 : 1;
    const base = shade ? [0.50, 0.44, 0.36] : [0.62, 0.55, 0.44];
    const n = 0.07 * Math.sin(x * 0.18 + z * 0.14);
    colors.push(
      Math.min(1, base[0] * hatch + n),
      Math.min(1, base[1] * hatch + n * 0.7),
      Math.min(1, base[2] * hatch + n * 0.4)
    );
    return i;
  }
  const bushPts = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1];
    if (Math.hypot(b.x - a.x, b.z - a.z) > 36) continue;
    const west = a.band === -480;
    const y0 = 0.25;
    const jA = west ? 1.15 * Math.sin(a.x * 0.21) : 0;
    const jB = west ? 1.15 * Math.sin(b.x * 0.21) : 0;
    const midF = west ? 0.40 + 0.18 * (0.5 + 0.5 * Math.sin(a.x * 0.13)) : 0.48;
    const topF = west ? 0.74 + 0.16 * (0.5 + 0.5 * Math.sin(a.x * 0.09)) : 0.82;
    // Lower dark shelf
    const i0 = vert(a.x, y0, a.z - 1 + jA, true);
    const i1 = vert(a.x, a.h * midF, a.z + 1.5 + jA * 0.4, true);
    const i2 = vert(b.x, y0, b.z - 1 + jB, true);
    const i3 = vert(b.x, b.h * midF, b.z + 1.5 + jB * 0.4, true);
    indices.push(i0, i2, i1, i1, i2, i3);
    // Mid shelf, set back, irregular lip
    const i4 = vert(a.x, a.h * (midF - 0.04), a.z + 2 + jA, false);
    const i5 = vert(a.x, a.h * topF, a.z + 5 + jA * 1.4, false);
    const i6 = vert(b.x, b.h * (midF - 0.04), b.z + 2 + jB, false);
    const i7 = vert(b.x, b.h * topF, b.z + 5 + jB * 1.4, false);
    indices.push(i4, i6, i5, i5, i6, i7);
    // Top cap / lip
    const i8 = vert(a.x, a.h * topF, a.z + 5 + jA * 1.4, false);
    const i9 = vert(a.x, a.h * (0.92 + 0.08 * Math.sin(a.x * 0.3)), a.z + 9 + jA, false);
    const i10 = vert(b.x, b.h * topF, b.z + 5 + jB * 1.4, false);
    const i11 = vert(b.x, b.h * (0.92 + 0.08 * Math.sin(b.x * 0.3)), b.z + 9 + jB, false);
    indices.push(i8, i10, i9, i9, i10, i11);
    if ((i % 2) === 0 && !west) {
      const bx = (a.x + b.x) * 0.5, bz = (a.z + b.z) * 0.5 + 6;
      const bh = H(bx, bz);
      if (bh > 8) bushPts.push({ x: bx, y: bh + 1.15, z: bz, band: a.band });
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  retagGeometry(geo, MAT.ROCK, 0);
  const mat = triplanarLambert({ map: loadTex("rock.png"), scale: 0.09, vertexColors: true, flatShading: false, matId: MAT.ROCK });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.userData.matId = MAT.ROCK;
  mesh.name = "cliffs";
  const group = new THREE.Group();
  group.name = "cliffs";
  group.add(mesh);
  // Vegetation tufts along the lip (one instanced draw). Skip the west cape —
  // dark spheres there punched circular ink holes in the lighthouse plateau.
  const lipBushes = bushPts.filter((p) => p.band !== -480 && p.y > 8);
  if (lipBushes.length) {
    const inst = new THREE.InstancedMesh(
      retagGeometry(new THREE.SphereGeometry(1.6, 6, 5), MAT.FOLIAGE, 0),
      patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x3d6a34, flatShading: true })),
      lipBushes.length
    );
    inst.userData.matId = MAT.FOLIAGE;
    const dummy = new THREE.Object3D();
    lipBushes.forEach((p, i) => {
      dummy.position.set(p.x, p.y, p.z);
      const s = 0.85 + (i % 5) * 0.18;
      dummy.scale.set(s, s * 0.45, s);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);
    });
    inst.instanceMatrix.needsUpdate = true;
    group.add(inst);
  }
  return group;
}


export function createLandmarks(scene, terrain, sky, quality = "medium") {
  const q = (typeof QUALITY !== "undefined" && QUALITY[quality]) ? QUALITY[quality] : { houses: 1 };
  const group = new THREE.Group();
  group.name = "landmarks";
  const anim = [];

  const H = (x, z) => terrain.heightAt(x, z);

  // Runway lights & marks (lamp posts; glow toggled at night)
  const rwyGlows = [];
  rwyGlows.push(makeRunwayLights(group, -400, 400, -1100, 4.4, H).userData.glow);
  rwyGlows.push(makeRunwayLights(group, -930, -710, 1120, 90.3, H).userData.glow);

  // Hangar
  const hangar = makeHangar();
  hangar.scale.setScalar(0.95);
  hangar.position.set(LANDMARKS.hangar.x, H(LANDMARKS.hangar.x, LANDMARKS.hangar.z), LANDMARKS.hangar.z);
  hangar.rotation.y = 0;
  group.add(hangar);

  // Parked trainer on the apron + a few cars
  {
    const apronY = H(LANDMARKS.hangar.x + 28, LANDMARKS.hangar.z + 6) + 1.2;
    const pk = makeParkedPlane();
    pk.position.set(LANDMARKS.hangar.x + 18, apronY, LANDMARKS.hangar.z + 2);
    pk.rotation.y = 1.2;
    group.add(pk);
    const truck = makeTruck(0xc45a3a);
    truck.position.set(LANDMARKS.hangar.x + 36, apronY, LANDMARKS.hangar.z - 16);
    truck.rotation.y = 0.2;
    group.add(truck);
    for (let i = 0; i < 5; i++) {
      const cr = makeCrate();
      cr.position.set(LANDMARKS.hangar.x + 24 + (i % 3) * 2.2, apronY, LANDMARKS.hangar.z - 8 - Math.floor(i / 3) * 2.2);
      group.add(cr);
    }
    for (let i = 0; i < 3; i++) {
      const c = makeCrew();
      c.position.set(LANDMARKS.hangar.x + 20 + i * 3.5, apronY, LANDMARKS.hangar.z + 8);
      c.rotation.y = 0.4 * i;
      group.add(c);
    }
  }

  const windsock = makeWindsock();
  windsock.scale.setScalar(2.3);
  windsock.position.set(LANDMARKS.hangar.x - 22, H(LANDMARKS.hangar.x - 22, LANDMARKS.hangar.z - 36), LANDMARKS.hangar.z - 36);
  group.add(windsock);

  const tower = makeTower();
  tower.scale.setScalar(0.85);
  tower.position.set(LANDMARKS.hangar.x - 8, H(LANDMARKS.hangar.x - 8, LANDMARKS.hangar.z - 42), LANDMARKS.hangar.z - 42);
  group.add(tower);
  sky.addLamp(new THREE.Vector3(LANDMARKS.tower.x, tower.position.y + 30.2 * tower.scale.y + 2, LANDMARKS.tower.z), 0xffe2a0, 6, 140);
  // Hangar apron + runway threshold lamps so Night Mail has a lit path
  sky.addLamp(new THREE.Vector3(LANDMARKS.hangar.x, H(LANDMARKS.hangar.x, LANDMARKS.hangar.z) + 14, LANDMARKS.hangar.z), 0xffe2a0, 5, 120);
  for (const x of [-200, -80, 40, 160, 280]) {
    sky.addLamp(new THREE.Vector3(x, H(x, -1100) + 2.4, -1100 - 22), 0xffc070, 2.4, 36);
    sky.addLamp(new THREE.Vector3(x, H(x, -1100) + 2.4, -1100 + 22), 0xffc070, 2.4, 36);
  }



  // Mount Glyph: glowing crater, lava and smoke
  {
    const vx = 0, vz = 200;
    const vy = H(vx, vz);
    const lava = cyl(20, 26, 2.8, 14, 0xff3a12, MAT.LIGHT, 1);
    lava.position.set(vx, vy - 6, vz);
    lava.name = "lava";
    group.add(lava);
    const glow = cyl(12, 16, 2.0, 12, 0xffc050, MAT.LIGHT, 1);
    glow.position.set(vx, vy - 4.2, vz);
    glow.name = "lava";
    group.add(glow);
    // No flank rivers — those read as a flat orange cone from the hero.
    const plume = new THREE.Group();
    plume.name = "smoke";
    plume.position.set(vx, vy + 8, vz);
    // Opaque body (id-alpha overwrites gl_FragColor.a, so transparent puffs vanish).
    const puffMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
      color: 0xfffdf8, emissive: 0xfff6ea, emissiveIntensity: 0.55, flatShading: false, fog: true,
    }));
    puffMat.userData.matId = MAT.CLOUD;
    const inkMat = patchMaterialIdAlpha(new THREE.MeshBasicMaterial({
      color: 0x6a7a88, side: THREE.BackSide,
    }));
    inkMat.userData.matId = MAT.CLOUD;
    const puffGeo = retagGeometry(new THREE.SphereGeometry(1, 8, 6), MAT.CLOUD, 0);
    // Long wind-drifted column: up, then trailing west (−X, image-right) into the sky.
    const spots = [
      [0, 10, -10, 28],
      [-8, 36, -18, 36],
      [-22, 68, -26, 44],
      [-40, 104, -32, 50],
      [-62, 146, -36, 52],
      [-88, 190, -38, 48],
      [-116, 232, -34, 42],
      [-146, 270, -28, 36],
      [-176, 302, -20, 30],
      [-208, 328, -10, 24],
    ];
    const inst = new THREE.InstancedMesh(puffGeo, puffMat, spots.length);
    inst.name = "smoke";
    const ink = new THREE.InstancedMesh(puffGeo, inkMat, spots.length);
    ink.name = "smoke";
    const dummy = new THREE.Object3D();
    spots.forEach((s, i) => {
      dummy.position.set(s[0], s[1], s[2]);
      dummy.scale.set(s[3], s[3] * 0.78, s[3]);
      dummy.rotation.set(0, i * 0.4, 0);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);
      dummy.scale.multiplyScalar(1.04);
      dummy.updateMatrix();
      ink.setMatrixAt(i, dummy.matrix);
    });
    inst.instanceMatrix.needsUpdate = true;
    ink.instanceMatrix.needsUpdate = true;
    inst.frustumCulled = false;
    ink.frustumCulled = false;
    plume.add(ink);
    plume.add(inst);
    group.add(plume);
    anim.push({ smoke: plume, inst, ink, spots, dummy, t: 0 });
  }

  // Street / terrace village: no overlapping footprints, consistent roof orientation.
  // Near the flight path (runway / hangar) = real houses with doors, windows, chimneys.
  // Further up the hill = denser instanced impostors so the postcard still reads as a town.
  const houseColors = [0xfbf6ea, 0xfffaf2, 0xf4eee0, 0xf8f1dc, 0xfff8ec];
  const roofColors = [0xc45a3a, 0xb04a32, 0xd46a48, 0xa84830, 0xbe6240];
  const spots = [];
  const chimneys = [];
  const winData = [];
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  const houseFrac = (q && q.houses != null) ? q.houses : 1;
  const cX = LANDMARKS.church.x - 10, cZ = LANDMARKS.church.z + 80;
  const blocked = (x, z) => {
    if (Math.abs(z + 1100) < 38) return true;
    if (Math.hypot(x - LANDMARKS.hangar.x, z - LANDMARKS.hangar.z) < 48) return true;
    if (Math.hypot(x - LANDMARKS.tower.x, z - LANDMARKS.tower.z) < 22) return true;
    if (Math.hypot(x - cX, z - cZ) < 36) return true;
    if (Math.hypot(x - LANDMARKS.market.x, z - LANDMARKS.market.z) < 16) return true;
    if (Math.hypot(x - LANDMARKS.waterfall.x, z - LANDMARKS.waterfall.z) < 22) return true;
    if (H(x, z) < 4.0) return true;
    return false;
  };
  const bands = [
    { z0: -1088, z1: -1068, x0: 128, x1: 300, near: true,  plot: 11.0, gap: 2.6 },
    { z0: -1066, z1: -1046, x0: 136, x1: 318, near: true,  plot: 10.8, gap: 2.5 },
    { z0: -1044, z1: -1024, x0: 142, x1: 336, near: true,  plot: 10.6, gap: 2.4 },
    { z0: -1022, z1: -1002, x0: 140, x1: 350, near: true,  plot: 10.4, gap: 2.3 },
    { z0: -1000, z1: -980,  x0: 138, x1: 362, near: true,  plot: 10.2, gap: 2.2 },
    { z0: -978,  z1: -958,  x0: 150, x1: 378, near: false, plot: 8.0,  gap: 1.7 },
    { z0: -956,  z1: -936,  x0: 158, x1: 388, near: false, plot: 7.6,  gap: 1.6 },
    { z0: -934,  z1: -916,  x0: 166, x1: 380, near: false, plot: 7.4,  gap: 1.5 },
    { z0: -914,  z1: -898,  x0: 174, x1: 360, near: false, plot: 7.2,  gap: 1.5 },
    { z0: -896,  z1: -882,  x0: 186, x1: 340, near: false, plot: 7.0,  gap: 1.4 },
  ];
  const farList = [];
  let hi = 0;
  for (const b of bands) {
    const rowH = b.plot * (b.near ? 0.82 : 0.78);
    const rows = Math.max(1, Math.floor((b.z1 - b.z0) / rowH));
    const zStep = (b.z1 - b.z0) / rows;
    const xStep = b.plot + b.gap;
    for (let r = 0; r < rows; r++) {
      const zMid = b.z0 + (r + 0.5) * zStep;
      // Low stone terrace wall along the downhill edge of each near street
      if (b.near && r === 0) {
        for (let wx = b.x0 + 4; wx < b.x1 - 4; wx += 8) {
          if (blocked(wx, b.z0 + 0.6)) continue;
          const wall = box(7.4, 1.15, 0.55, 0x9a8a72, MAT.ROCK);
          wall.position.set(wx, H(wx, b.z0 + 0.6) + 0.4, b.z0 + 0.6);
          group.add(wall);
        }
      }
      for (let x = b.x0 + xStep * 0.5; x < b.x1; x += xStep) {
        const jx = x + (rnd() - 0.5) * Math.min(1.15, b.gap * 0.35);
        const jz = zMid + (rnd() - 0.5) * 0.9;
        if (blocked(jx, jz)) continue;
        if (!b.near && rnd() > Math.max(0.72, Math.min(1, houseFrac + 0.15))) continue;
        const hgt = H(jx, jz);
        const yaw = Math.PI + (rnd() - 0.5) * 0.08; // face south, almost aligned
        if (b.near) {
          const w = 6.4 + rnd() * 1.8, d = 6.0 + rnd() * 1.2, hh = 4.2 + rnd() * 1.6, rh = 2.6 + rnd() * 0.8;
          const h = house(w, d, hh, rh, houseColors[hi % 5], roofColors[hi % 5], true);
          h.position.set(jx, hgt, jz);
          h.rotation.y = yaw;
          group.add(h);
          spots.push(h.position.clone());
          chimneys.push({ x: jx, y: hgt + hh + rh * 0.7, z: jz });
          winData.push({
            x: jx + Math.sin(yaw) * (d * 0.52),
            y: hgt + hh * 0.62,
            z: jz + Math.cos(yaw) * (d * 0.52),
            s: 1,
            yaw,
          });
          hi++;
        } else {
          farList.push({ x: jx, y: hgt, z: jz, yaw, s: 0.88 + rnd() * 0.16 });
        }
      }
    }
  }
  if (farList.length) {
    const farWallGeo = retagGeometry(new THREE.BoxGeometry(6.2, 4.6, 6.0), MAT.BUILDING, 0);
    const farRoofGeo = retagGeometry(gableRoofGeo(6.2, 6.0, 2.7), MAT.ROOF, 0);
    const farWallMat = triplanarLambert({ map: loadTex("plaster.png"), scale: 0.08, color: 0xf6efe0, flatShading: false, matId: MAT.BUILDING });
    const farRoofMat = triplanarLambert({ map: loadTex("roof.png"), scale: 0.12, color: 0xb85a3c, vertexColors: false, flatShading: false, matId: MAT.ROOF });
    const farWalls = new THREE.InstancedMesh(farWallGeo, farWallMat, farList.length);
    const farRoofs = new THREE.InstancedMesh(farRoofGeo, farRoofMat, farList.length);
    farWalls.name = "far-house";
    farRoofs.name = "far-house";
    farWalls.userData.matId = MAT.BUILDING;
    farRoofs.userData.matId = MAT.ROOF;
    const dummyF = new THREE.Object3D();
    farList.forEach((f, i) => {
      dummyF.position.set(f.x, f.y + 2.3 * f.s, f.z);
      dummyF.rotation.set(0, f.yaw, 0);
      dummyF.scale.setScalar(f.s);
      dummyF.updateMatrix();
      farWalls.setMatrixAt(i, dummyF.matrix);
      dummyF.position.set(f.x, f.y + 4.6 * f.s, f.z);
      dummyF.updateMatrix();
      farRoofs.setMatrixAt(i, dummyF.matrix);
    });
    farWalls.instanceMatrix.needsUpdate = true;
    farRoofs.instanceMatrix.needsUpdate = true;
    group.add(farWalls, farRoofs);
  }

  let winInst = null;
  if (winData.length) {
    const winGeo = retagGeometry(new THREE.BoxGeometry(0.85, 0.65, 0.14), MAT.LIGHT, 1);
    const winMat = patchMaterialIdAlpha(new THREE.MeshBasicMaterial({
      color: 0xffc45a, toneMapped: false, fog: true,
    }));
    winInst = new THREE.InstancedMesh(winGeo, winMat, winData.length);
    winInst.name = "winlight";
    winInst.userData.matId = MAT.LIGHT;
    const dummyW = new THREE.Object3D();
    winData.forEach((w, i) => {
      dummyW.position.set(w.x, w.y, w.z);
      dummyW.scale.setScalar((w.s || 1) * 0.9);
      dummyW.rotation.set(0, w.yaw || 0, 0);
      dummyW.updateMatrix();
      winInst.setMatrixAt(i, dummyW.matrix);
    });
    winInst.instanceMatrix.needsUpdate = true;
    winInst.visible = false;
    group.add(winInst);
  }

  // Lived-in yards: laundry lines, small gardens, a few sheds (instanced, one draw each)
  if (spots.length) {
    const nYard = Math.min(spots.length, 16);
    const clothGeo = retagGeometry(new THREE.PlaneGeometry(1.15, 0.85), MAT.BUILDING, 0);
    const clothMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
      color: 0xf4f0e6, side: THREE.DoubleSide, flatShading: true,
    }));
    clothMat.userData.matId = MAT.BUILDING;
    const cloth = new THREE.InstancedMesh(clothGeo, clothMat, nYard * 3);
    cloth.name = "laundry";
    const lineGeo = retagGeometry(new THREE.BoxGeometry(4.6, 0.04, 0.04), MAT.METAL, 0);
    const lineMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x3a342c }));
    const lines = new THREE.InstancedMesh(lineGeo, lineMat, nYard);
    lines.name = "laundry";
    const bedGeo = retagGeometry(new THREE.BoxGeometry(2.6, 0.28, 1.8), MAT.FOLIAGE, 0);
    const bedMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x3a6a28, flatShading: true }));
    const beds = new THREE.InstancedMesh(bedGeo, bedMat, nYard);
    beds.name = "garden";
    const flGeo = retagGeometry(new THREE.SphereGeometry(0.16, 5, 4), MAT.FOLIAGE, 0);
    const flMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ vertexColors: false, color: 0xe04870, flatShading: true }));
    const flowers = new THREE.InstancedMesh(flGeo, flMat, nYard * 4);
    flowers.name = "garden";
    const d = new THREE.Object3D();
    const clothCols = [0xf4f0e6, 0xc01418, 0x3a7eb8, 0xf2d24a, 0xe8e0d0];
    let ci = 0, fi = 0;
    for (let i = 0; i < nYard; i++) {
      const p = spots[i];
      const yaw = Math.PI + (i % 5) * 0.04;
      const ca = Math.cos(yaw), sa = Math.sin(yaw);
      const lx = p.x + ca * 4.2, lz = p.z + sa * 4.2;
      const y = H(lx, lz) + 2.15;
      d.position.set(lx, y, lz);
      d.rotation.set(0, yaw, 0);
      d.scale.set(1, 1, 1);
      d.updateMatrix();
      lines.setMatrixAt(i, d.matrix);
      for (let k = 0; k < 3; k++) {
        const off = (k - 1) * 1.2;
        d.position.set(lx + sa * off, y - 0.55, lz - ca * off);
        d.rotation.set(0.08 * ((k % 2) * 2 - 1), yaw, 0.12 * (k - 1));
        d.scale.set(1, 1, 1);
        d.updateMatrix();
        cloth.setMatrixAt(ci++, d.matrix);
      }
      const gx = p.x - ca * 3.4, gz = p.z - sa * 3.4;
      const gy = H(gx, gz) + 0.2;
      d.position.set(gx, gy, gz);
      d.rotation.set(0, yaw, 0);
      d.scale.set(1, 1, 1);
      d.updateMatrix();
      beds.setMatrixAt(i, d.matrix);
      for (let k = 0; k < 4; k++) {
        d.position.set(gx + (k % 2 - 0.5) * 0.8, gy + 0.34, gz + (Math.floor(k / 2) - 0.5) * 0.6);
        d.rotation.set(0, 0, 0);
        d.scale.setScalar(0.8 + (k % 3) * 0.15);
        d.updateMatrix();
        flowers.setMatrixAt(fi++, d.matrix);
      }
    }
    cloth.count = ci;
    lines.count = nYard;
    beds.count = nYard;
    flowers.count = fi;
    cloth.instanceMatrix.needsUpdate = true;
    lines.instanceMatrix.needsUpdate = true;
    beds.instanceMatrix.needsUpdate = true;
    flowers.instanceMatrix.needsUpdate = true;
    group.add(lines, cloth, beds, flowers);
  }

  const church = makeChurch();
  church.scale.setScalar(0.78);
  // Higher on the hill so the bell tower reads over the terraces
  church.position.set(cX, H(cX, cZ), cZ);
  group.add(church);

  for (let i = 0; i < 6; i++) {
    const st = makeMarketStall(rnd);
    const x = LANDMARKS.market.x + (i - 2.5) * 8;
    const z = LANDMARKS.market.z + (i % 2) * 8;
    st.position.set(x, H(x, z), z);
    st.rotation.y = (i % 2) * 0.2;
    group.add(st);
  }

  // Small farms in the mid-island fields: house + barn + stone wall + hedge
  const farms = [
    { x: 430, z: -720, yaw: 0.2 },
    { x: -80, z: -560, yaw: -0.3 },
    { x:  90, z: -380, yaw: 0.15 },
    { x: 520, z: -500, yaw: -0.15 },
    { x: -200, z: -720, yaw: 0.35 },
  ];
  for (const f of farms) {
    const y = H(f.x, f.z);
    if (y < 6) continue;
    const fh = house(8.2, 7.2, 5.0, 3.1, 0xf6efe0, 0xb04a32, true);
    fh.position.set(f.x, y, f.z);
    fh.rotation.y = f.yaw;
    group.add(fh);
    chimneys.push({ x: f.x, y: y + 7.4, z: f.z });
    const barn = house(11.5, 7.0, 4.2, 4.0, 0xe8d4a8, 0x8a3a28, false);
    barn.position.set(f.x + 16, H(f.x + 16, f.z + 4), f.z + 4);
    barn.rotation.y = f.yaw + 0.04;
    group.add(barn);
    // yard wall
    for (const [wx, wz, ww, wd] of [
      [f.x + 6, f.z - 10, 22, 0.6],
      [f.x + 6, f.z + 14, 22, 0.6],
      [f.x - 5, f.z + 2, 0.6, 24],
      [f.x + 17, f.z + 2, 0.6, 24],
    ]) {
      const wall = box(ww, 1.3, wd, 0x9a8a72, MAT.ROCK);
      wall.position.set(wx, H(wx, wz) + 0.45, wz);
      group.add(wall);
    }
    // hedge along the downhill side
    for (let i = 0; i < 6; i++) {
      const hx = f.x - 8 + i * 4.2, hz = f.z - 13;
      const hedge = box(3.6, 1.8, 1.1, 0x3a5a28, MAT.FOLIAGE);
      hedge.position.set(hx, H(hx, hz) + 0.9, hz);
      group.add(hedge);
    }
  }
  // A few long field hedges between the airport and the mid slopes
  const hedges = [
    [200, -820, 48, 0.8, 0],
    [320, -640, 36, 0.8, 0.4],
    [-40, -700, 40, 0.8, -0.2],
    [60, -480, 28, 0.8, 0.3],
  ];
  for (const [hx, hz, len, th, yaw] of hedges) {
    const hedge = box(len, 1.7, th, 0x355428, MAT.FOLIAGE);
    hedge.position.set(hx, H(hx, hz) + 0.85, hz);
    hedge.rotation.y = yaw;
    group.add(hedge);
  }

  // Harbor docks
  const dock = box(80, 1, 12, 0x6a4a28, MAT.WOOD);
  dock.position.set(LANDMARKS.harbor.x, 1.2, LANDMARKS.harbor.z);
  group.add(dock);
  const boats = [];
  for (let i = 0; i < 5; i++) {
    const b = makeBoat([0xc05030, 0x2a6cb6, 0xe8e0c8, 0x3a8a5a, 0xc08020][i]);
    b.position.set(LANDMARKS.harbor.x - 30 + i * 16, 0.4, LANDMARKS.harbor.z + 14 + (i % 2) * 8);
    b.rotation.y = 0.2 + i * 0.1;
    group.add(b);
    boats.push(b);
  }

  // Postcard-bay traffic (looking north: left = east/+X, right = west/−X)
  const steamer = makeSteamer(0x1e4a78);
  // Mid-bay, farther into the scene, hull broadside so it reads as a long low ship
  steamer.position.set(-36, 0.22, -1330);
  steamer.rotation.y = 1.05;
  steamer.scale.setScalar(2.35);
  steamer.userData.cruise = { cx: -36, cz: -1330, rx: 40, rz: 28, a: 2.4, spd: 0.055 };
  group.add(steamer);
  boats.push(steamer);
  const coastal = [
    [70, -1390, 0xf4efe4, 0.8], [20, -1335, 0xf0e6d0, 2.1], [-150, -1310, 0xe8dcc0, 4.0],
  ];
  for (const [x, z, col, a0] of coastal) {
    const b = makeSailboat(col);
    b.position.set(x, 0.45, z);
    b.rotation.y = -0.55;
    b.scale.setScalar(2.25);
    b.userData.cruise = { cx: x, cz: z, rx: 28, rz: 16, a: a0, spd: 0.08 };
    group.add(b);
    boats.push(b);
  }

  const pier = makePier();
  // pier extends south (+Z in our layout? south is +Z if Z south... we used Z north, south is negative Z)
  // Sunny beach at z=-1280, pier at (240, -1360) extending further south (more negative Z)
  pier.position.set(LANDMARKS.pier.x, 0.6, LANDMARKS.pier.z);
  // Deck runs west into the harbor, never along the south-looking hero camera.
  pier.rotation.y = Math.PI / 2;
  group.add(pier);

  const wreck = makeWreck();
  wreck.position.set(LANDMARKS.wreck.x, -2.4, LANDMARKS.wreck.z);
  group.add(wreck);

  const light = makeLighthouse();
  light.scale.setScalar(1.10);
  light.position.set(LANDMARKS.lighthouse.x, H(LANDMARKS.lighthouse.x, LANDMARKS.lighthouse.z), LANDMARKS.lighthouse.z);
  group.add(light);
  sky.addLamp(new THREE.Vector3(LANDMARKS.lighthouse.x, light.position.y + 43.4 * light.scale.y + 2, LANDMARKS.lighthouse.z), 0xfff2c0, 8, 260);

  const bridge = makeBridge();
  const bx = LANDMARKS.bridge.x, bz = LANDMARKS.bridge.z;
  bridge.scale.set(2.15, 1.90, 2.05);
  bridge.position.set(bx, Math.max(22, H(bx, bz) + 8), bz);
  bridge.rotation.y = 0.08;
  group.add(bridge);

  const castle = makeCastle();
  castle.scale.setScalar(3.35);
  castle.position.set(LANDMARKS.castle.x, H(LANDMARKS.castle.x, LANDMARKS.castle.z), LANDMARKS.castle.z);
  castle.rotation.y = Math.PI; // gate faces the airport / south
  group.add(castle);
  const flagPoles = [];
  const cs = castle.scale.x || 3.35;
  const ca = Math.cos(castle.rotation.y), sa = Math.sin(castle.rotation.y);
  const flagCols = [0xc01418, 0xf4f0e6];
  (castle.userData.flagLocals || []).slice(0, 2).forEach((lp, i) => {
    flagPoles.push({
      x: castle.position.x + (lp.x * ca + lp.z * sa) * cs,
      y: castle.position.y + lp.y * cs,
      z: castle.position.z + (-lp.x * sa + lp.z * ca) * cs,
      c: flagCols[i % 2],
    });
  });
  flagPoles.push({ x: LANDMARKS.harbor.x + 8, y: H(LANDMARKS.harbor.x + 8, LANDMARKS.harbor.z) + 9, z: LANDMARKS.harbor.z, c: 0x3a6cb6 });

  // Cape fort on the west ridge, readable in the hero (master's right side)
  const capeFort = makeCastle();
  capeFort.scale.setScalar(1.15);
  const fX = LANDMARKS.lighthouse.x - 36, fZ = LANDMARKS.lighthouse.z + 85;
  capeFort.position.set(fX, H(fX, fZ), fZ);
  capeFort.rotation.y = 0.3;
  group.add(capeFort);

  const mills = [];
  const mx = LANDMARKS.windmills.x, mz = LANDMARKS.windmills.z;
  const millSpots = [
    [mx, mz], [mx + 55, mz + 30], [mx - 40, mz + 45], [mx + 70, mz - 25], [mx - 55, mz - 20],
  ];
  for (const [x, z] of millSpots) {
    const m = makeWindmill();
    m.scale.setScalar(1.22);
    m.position.set(x, H(x, z), z);
    m.rotation.y = 0.4;
    group.add(m);
    mills.push(m);
  }

  const arch = makeArch();
  arch.scale.set(1.15, 1.05, 1.20);
  const aH = Math.max(0, H(LANDMARKS.arch.x, LANDMARKS.arch.z + 16));
  arch.position.set(LANDMARKS.arch.x, aH, LANDMARKS.arch.z);
  arch.rotation.y = 0.08;
  group.add(arch);

  const cave = makeCave();
  cave.position.set(LANDMARKS.cave.x, 50, LANDMARKS.cave.z);
  cave.rotation.y = 0.4;
  group.add(cave);

  const falls = makeWaterfall();
  // sheet hangs down from ~88 to ~16, center at ~52
  const wx = LANDMARKS.waterfall.x, wz = LANDMARKS.waterfall.z;
  falls.scale.set(1.15, 1.05, 1.15);
  // Sheet sits on the south face of the limestone lip; pool at the foot.
  falls.position.set(wx, H(wx, wz) + 2, wz - 2);
  falls.rotation.y = Math.PI + 0.04;
  group.add(falls);
  group.add(makeStream(H));

  // Roads
  group.add(makeRoad(
    { x: -80, y: 4.4, z: -1100 },
    { x: LANDMARKS.town.x, y: 8.6, z: LANDMARKS.town.z },
    7,
    H
  ));
  group.add(makeRoad(
    { x: LANDMARKS.town.x, y: 8.6, z: LANDMARKS.town.z },
    { x: LANDMARKS.harbor.x, y: 1.4, z: LANDMARKS.harbor.z },
    6,
    H
  ));
  group.add(makeRoad(
    { x: LANDMARKS.town.x, y: 8.6, z: LANDMARKS.town.z },
    { x: LANDMARKS.windmills.x, y: 12, z: LANDMARKS.windmills.z },
    5.4,
    H
  ));
  group.add(makeRoad(
    { x: LANDMARKS.town.x, y: 8.6, z: LANDMARKS.town.z },
    { x: 430, y: 10, z: -720 },
    5.2,
    H
  ));
  group.add(makeRoad(
    { x: -80, y: 8, z: -1100 },
    { x: LANDMARKS.lighthouse.x + 40, y: 8, z: LANDMARKS.lighthouse.z + 40 },
    5.0,
    H
  ));

  const hangingKeep = makeHangingKeep();
  hangingKeep.name = "hanging-keep";
  hangingKeep.position.set(LANDMARKS.hangingKeep.x, 368, LANDMARKS.hangingKeep.z);
  hangingKeep.rotation.y = 0.35;
  hangingKeep.scale.setScalar(1.0);
  mergeVertexColors(hangingKeep, new Set(["falls", "mist", "keep-wreath", "keep-rocks"]));
  group.add(hangingKeep);

  // Town lamps
  for (const p of spots.slice(0, 10)) {
    const lamp = cyl(0.15, 0.15, 6, 5, 0x333333, MAT.METAL);
    lamp.position.set(p.x + 3, H(p.x + 3, p.z) + 3, p.z);
    group.add(lamp);
    const cap = box(0.45, 0.22, 0.45, 0x3a3a36, MAT.METAL);
    cap.position.set(p.x + 3, lamp.position.y + 3, p.z);
    group.add(cap);
    sky.addLamp(cap.position.clone(), 0xffc878, 4.0, 70);
  }

  // Collapse each boat/steamer to a handful of meshes so they can still
  // bob as groups without blowing the 150-draw cap.
  for (const b of boats) mergeStatic(b, new Set(["smoke"]));
  mergeStatic(group, new Set(["blades", "beam", "mist", "falls", "foam", "flag", "lantern", "smoke", "lava", "sock", "steamer", "boat", "winlight", "hangar-roof", "rwyLamp", "rwyGlow", "far-house", "laundry", "garden", "hanging-keep", "keep-merged"]));
  group.add(makeCoastalCliffs(H));
  // keep boat meshes (they bob)
  scene.add(group);

  return {
    group, hangar, tower, church, light, pier, wreck, bridge, castle, mills, arch, cave, falls, hangingKeep, boats, windsock, winInst, chimneys, flagPoles,
    _windKt: 6,
    _storm: false,
    setWind(kt, storm) {
      this._windKt = kt ?? this._windKt;
      this._storm = !!storm;
    },
    update(dt, time, hour, night) {
      for (const m of mills) {
        if (m.userData.blades) m.userData.blades.rotation.z += dt * (0.8 + (this._windKt || 6) * 0.04);
      }
      // lighthouse beam — visible even in daylight, as in the album plates
      const beam = light.userData.beam;
      if (beam) {
        beam.rotation.y += dt * 0.6;
        // Day: no 500 m pale shaft across the sky. Night: a real sweeping beam.
        beam.visible = night > 0.28;
        beam.material.opacity = 0.22 + night * 0.50;
      }
      if (light.userData.glow) {
        const gl = light.userData.glow;
        gl.material.opacity = 0.28 + night * 0.5 + Math.sin(time * 4.2) * 0.06;
        const sc = 1 + Math.sin(time * 3.1) * 0.08;
        gl.scale.setScalar(sc);
      }
      if (winInst) winInst.visible = night > 0.35;
      for (const gl of rwyGlows) if (gl) gl.visible = night > 0.35;
      const blow = this._storm ? 0.7 : 0.15;
      for (const b of boats) {
        const cruise = b.userData.cruise;
        if (cruise) {
          cruise.a += dt * cruise.spd * (this._storm ? 1.15 : 1);
          b.position.x = cruise.cx + Math.cos(cruise.a) * cruise.rx;
          b.position.z = cruise.cz + Math.sin(cruise.a) * cruise.rz;
          b.rotation.y = -cruise.a + Math.PI / 2;
        }
        const amp = b.name === "steamer" ? (this._storm ? 1.15 : 0.28) : (this._storm ? 0.55 : 0.15);
        b.position.y = 0.5 + Math.sin(time * 0.7 + b.position.x * 0.05) * amp;
        b.rotation.z = Math.sin(time * 0.5 + b.position.z) * (this._storm ? 0.16 : 0.03);
        b.rotation.x = Math.sin(time * 0.65 + b.position.x * 0.02) * (b.name === "steamer" && this._storm ? 0.14 : 0.02);
        if (b.userData.smoke) {
          const sm = b.userData.smoke;
          const dummy = b.userData._smokeDummy || (b.userData._smokeDummy = new THREE.Object3D());
          for (let i = 0; i < sm.count; i++) {
            const u = (time * 0.35 + i * 0.16) % 1;
            dummy.position.set(Math.sin(time * 0.8 + i) * u * 0.8, u * 5.5, Math.cos(time * 0.6 + i) * u * 0.5);
            dummy.rotation.set(0, 0, 0);
            dummy.scale.setScalar(0.5 + u * 1.6);
            dummy.updateMatrix();
            sm.setMatrixAt(i, dummy.matrix);
          }
          sm.instanceMatrix.needsUpdate = true;
          if (sm.material) sm.material.opacity = 0.45;
        }
      }
      if (windsock && windsock.userData.sock) {
        const sock = windsock.userData.sock;
        const to = Math.min(1.15, 0.35 + (this._windKt || 6) / 28);
        sock.scale.z += (to - sock.scale.z) * Math.min(1, dt * 3);
        sock.rotation.y = -Math.PI / 2 + Math.sin(time * (this._storm ? 6 : 2)) * 0.12;
        sock.rotation.x = this._storm ? 0.15 : 0.05;
      }
      if (falls.userData.sheets) {
        for (const sh of falls.userData.sheets) {
          if (sh.material && sh.material.uniforms && sh.material.uniforms.uTime) {
            sh.material.uniforms.uTime.value = time;
          }
        }
      }
      if (hangingKeep && hangingKeep.userData && hangingKeep.userData.sheets) {
        for (const sh of hangingKeep.userData.sheets) {
          if (sh.material && sh.material.uniforms && sh.material.uniforms.uTime) {
            sh.material.uniforms.uTime.value = time;
          }
        }
      }
      if (falls.userData.foam && falls.userData.foam.isInstancedMesh) {
        const foam = falls.userData.foam;
        const specs = foam.userData.specs || [];
        const fd = foam.userData._dummy || (foam.userData._dummy = new THREE.Object3D());
        specs.forEach((sp, i) => {
          const p = 1 + Math.sin(time * 2.4 + i * 1.1) * 0.08;
          fd.position.set(sp[0], sp[1], sp[2]);
          fd.rotation.set(0, 0, 0);
          fd.scale.set(sp[3], sp[4] * p, sp[5]);
          fd.updateMatrix();
          foam.setMatrixAt(i, fd.matrix);
        });
        foam.instanceMatrix.needsUpdate = true;
      }
      if (falls.userData.mist) {
        const arr = falls.userData.mist.geometry.attributes.position.array;
        for (let i = 0; i < arr.length; i += 3) {
          arr[i + 1] -= dt * 12;
          if (arr[i + 1] < -36) arr[i + 1] = 36;
        }
        falls.userData.mist.geometry.attributes.position.needsUpdate = true;
      }
      if (hangingKeep && hangingKeep.userData.sheets) {
        for (const sh of hangingKeep.userData.sheets) {
          if (sh.material && sh.material.uniforms && sh.material.uniforms.uTime) {
            sh.material.uniforms.uTime.value = time;
          }
        }
      }
      for (const a of anim) {
        if (!a.smoke) continue;
        if (a.smoke.isPoints && a.smoke.geometry && a.smoke.geometry.attributes.position) {
          const arr = a.smoke.geometry.attributes.position.array;
          for (let i = 0; i < arr.length; i += 3) {
            arr[i + 1] += dt * (10 + (i % 5) * 2);
            arr[i] += Math.sin(time * 0.6 + i) * dt * 2.2;
            arr[i + 2] += Math.cos(time * 0.4 + i * 0.3) * dt * 1.6;
            if (arr[i + 1] > 120) {
              arr[i + 1] = 0;
              arr[i] = (Math.random() - 0.5) * 40;
              arr[i + 2] = (Math.random() - 0.5) * 40;
            }
          }
          a.smoke.geometry.attributes.position.needsUpdate = true;
        } else if (a.inst && a.spots) {
          a.t = (a.t || 0) + dt;
          const dummy = a.dummy;
          for (let i = 0; i < a.spots.length; i++) {
            const s = a.spots[i];
            const wobble = Math.sin(a.t * 0.35 + i * 0.9);
            dummy.position.set(s[0] + wobble * 1.6, s[1] + Math.sin(a.t * 0.25 + i) * 2.2, s[2] + Math.cos(a.t * 0.3 + i) * 1.4);
            const sc = s[3] * (1 + 0.06 * Math.sin(a.t * 0.4 + i));
            dummy.scale.set(sc, sc * 0.78, sc);
            dummy.rotation.set(0, a.t * 0.08 + i * 0.4, 0);
            dummy.updateMatrix();
            a.inst.setMatrixAt(i, dummy.matrix);
            if (a.ink) {
              dummy.scale.multiplyScalar(1.04);
              dummy.updateMatrix();
              a.ink.setMatrixAt(i, dummy.matrix);
            }
          }
          a.inst.instanceMatrix.needsUpdate = true;
          if (a.ink) a.ink.instanceMatrix.needsUpdate = true;
        } else {
          a.smoke.rotation.y += dt * 0.08;
        }
      }
    },
  };
}
