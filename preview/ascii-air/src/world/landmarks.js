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

function house(w, d, h, roofH, wall, roof, bodyId = MAT.BUILDING, roofId = MAT.ROOF) {
  const g = new THREE.Group();
  add(g, box(w, h, d, wall, bodyId), 0, h / 2, 0);
  // prism roof
  const roofGeo = new THREE.ConeGeometry(Math.hypot(w, d) * 0.42, roofH, 4);
  const r = mesh(roofGeo, roof, roofId);
  r.rotation.y = Math.PI / 4;
  r.position.y = h + roofH / 2;
  g.add(r);
  // door
  add(g, box(Math.min(1.2, w * 0.25), h * 0.55, 0.2, 0x3a2a1a, MAT.WOOD), 0, h * 0.28, d / 2 + 0.05);
  return g;
}

function makeHangar() {
  const g = new THREE.Group();
  g.name = "hangar";
  // Cream hall, barrel roof running east-west so the arched profile faces the south (hero)
  add(g, box(36, 8, 24, 0xfffaf0, MAT.BUILDING), 0, 4, 0);
  // Top-half barrel only (a full cylinder plus two arched walls read as cat-ears from the runway)
  const hallGeo = new THREE.CylinderGeometry(16, 16, 38, 22, 1, false, -Math.PI / 2, Math.PI);
  const hall = mesh(hallGeo, 0xfff8ee, MAT.BUILDING);
  hall.rotation.z = Math.PI / 2;
  hall.position.set(0, 11, 0);
  g.add(hall);
  const face = new THREE.Shape();
  face.moveTo(-20, 0); face.lineTo(-20, 11); face.absarc(0, 11, 16, Math.PI, 0, true); face.lineTo(20, 0); face.closePath();
  const door = new THREE.Path();
  door.moveTo(-7, 0); door.lineTo(-7, 8); door.absarc(0, 8, 7, Math.PI, 0, true); door.lineTo(7, 0); door.closePath();
  face.holes.push(door);
  const faceGeo = new THREE.ExtrudeGeometry(face, { depth: 1.2, bevelEnabled: false });
  faceGeo.translate(0, 0, 12.6);
  g.add(mesh(faceGeo, 0xfffaf0, MAT.BUILDING));
  // South face (hero-facing): same arched wall — never a blank khaki slab
  const faceS = face.clone();
  const faceGeoS = new THREE.ExtrudeGeometry(faceS, { depth: 1.2, bevelEnabled: false });
  faceGeoS.rotateY(Math.PI);
  faceGeoS.translate(0, 0, -12.6);
  g.add(mesh(faceGeoS, 0xfffaf0, MAT.BUILDING));
  // Dark windows + red door so the hall reads as a building, not a box
  add(g, box(3.2, 3.6, 0.5, 0x1a2230, MAT.METAL), -10, 6.2, -13.5);
  add(g, box(3.2, 3.6, 0.5, 0x1a2230, MAT.METAL), 10, 6.2, -13.5);
  add(g, box(3.2, 3.6, 0.5, 0x1a2230, MAT.METAL), -10, 6.2, 13.5);
  add(g, box(3.2, 3.6, 0.5, 0x1a2230, MAT.METAL), 10, 6.2, 13.5);
  add(g, box(6.5, 8, 0.6, 0x9a2018, MAT.ROOF), 0, 4.2, -13.6);
  // envelope emblem
  add(g, box(6.2, 4.2, 0.4, 0xf4ead0, MAT.BUILDING), 0, 16.2, 15.0);
  add(g, box(6.2, 0.2, 0.45, 0x1a140c, MAT.METAL), 0, 16.2, 15.2);
  add(g, box(0.2, 4.2, 0.45, 0x1a140c, MAT.METAL), 0, 16.2, 15.2);
  add(g, box(4.4, 0.2, 0.45, 0x1a140c, MAT.METAL), 0, 17.6, 15.2, 0, 0, 0.55);
  add(g, box(4.4, 0.2, 0.45, 0x1a140c, MAT.METAL), 0, 17.6, 15.2, 0, 0, -0.55);
  add(g, box(38, 0.4, 26, 0x3a3a3a, MAT.ROAD), 0, 0.2, 0);
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
  add(g, box(12, 10, 18, 0xfaf6ee, MAT.BUILDING), 0, 5, 0);
  const roof = mesh(new THREE.ConeGeometry(11, 6, 4), 0xe02018, MAT.ROOF);
  roof.rotation.y = Math.PI / 4;
  roof.position.y = 13;
  g.add(roof);
  add(g, box(4, 16, 4, 0xfaf6ee, MAT.BUILDING), 0, 8, -8);
  add(g, cone(3, 7, 4, 0xe02018, MAT.ROOF), 0, 20, -8);
  add(g, box(0.4, 3.5, 0.4, 0xeeeeee, MAT.METAL), 0, 24.5, -8);
  add(g, box(1.6, 0.4, 0.4, 0xeeeeee, MAT.METAL), 0, 25.5, -8); // cross
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

function makeSailboat(color = 0xc05030) {
  const g = new THREE.Group();
  g.name = "boat";
  add(g, box(3.2, 1.1, 9.4, color, MAT.WOOD), 0, 0.55, 0);
  add(g, box(2.2, 0.9, 2.2, color, MAT.WOOD), 0, 0.7, 4.4);
  add(g, cyl(0.12, 0.12, 11, 6, 0xefe6d2, MAT.WOOD), 0, 6.2, 0.4);
  const sail = box(0.12, 7.2, 4.6, 0xf4f0e4, MAT.BUILDING);
  sail.position.set(0.15, 5.4, 0.2);
  g.add(sail);
  add(g, box(0.08, 0.08, 5.5, 0x3a2a1a, MAT.WOOD), 0, 1.4, 0.2);
  return g;
}

function makeSteamer(color = 0x3a4a58) {
  const g = new THREE.Group();
  g.name = "steamer";
  add(g, box(7.5, 2.2, 22, color, MAT.METAL), 0, 1.1, 0);
  add(g, box(5.4, 2.4, 8, 0xe8e0d0, MAT.BUILDING), 0, 3.2, -2);
  add(g, box(4.2, 1.6, 4, 0xe8e0d0, MAT.BUILDING), 0, 4.8, -2);
  add(g, cyl(1.1, 1.1, 4.4, 8, 0x2a2a2c, MAT.METAL), 0, 6.6, 1.2);
  add(g, cyl(1.15, 1.15, 0.7, 8, 0xe8e0d0, MAT.BUILDING), 0, 7.8, 1.2);
  add(g, cyl(0.12, 0.12, 6, 6, 0x333333, MAT.METAL), 0, 6.2, -6);
  add(g, box(6.6, 0.4, 2.2, 0xc01418, MAT.ROOF), 0, 2.4, 8.5);
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
  const stone = 0xd6cebe;
  const shade = 0xb8ae9c;
  // Deck runs east-west; arches open to the south camera.
  add(g, box(72, 1.8, 12, stone, MAT.ROCK), 0, 10, 0);
  add(g, box(72, 2.6, 1.2, shade, MAT.ROCK), 0, 12.2, -5.5);
  add(g, box(72, 2.6, 1.2, shade, MAT.ROCK), 0, 12.2, 5.5);
  for (let i = -6; i <= 6; i++) {
    add(g, box(1.4, 1.3, 1.4, stone, MAT.ROCK), i * 5.5, 13.8, -5.5);
    add(g, box(1.4, 1.3, 1.4, stone, MAT.ROCK), i * 5.5, 13.8, 5.5);
  }
  for (let i = -2; i <= 2; i++) {
    const x = i * 14;
    add(g, box(3.6, 18, 10, stone, MAT.ROCK), x, 1, 0);
    const torus = new THREE.TorusGeometry(5.6, 1.45, 7, 16, Math.PI);
    retagGeometry(torus, MAT.ROCK, 0);
    const arch = new THREE.Mesh(torus, patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: shade, flatShading: true })));
    arch.userData.matId = MAT.ROCK;
    arch.position.set(x, 4.4, 0);
    g.add(arch);
  }
  return g;
}

function makeCastle() {
  const g = new THREE.Group();
  const stone = 0xd8d0c0;
  const shade = 0xc0b6a6;
  // Keep and curtain wall
  add(g, box(30, 16, 24, stone, MAT.ROCK), 0, 8, 0);
  add(g, box(32, 2.2, 26, shade, MAT.ROCK), 0, 16.8, 0);
  // Four corner towers
  const towers = [[-13, 14, -10, 28], [13, 12, -10, 24], [-13, 11, 10, 22], [13, 11, 10, 22]];
  for (const [x, y, z, h] of towers) {
    add(g, box(9, h, 9, stone, MAT.ROCK), x, h / 2, z);
    add(g, box(10.2, 1.4, 10.2, shade, MAT.ROCK), x, h + 0.4, z);
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i !== 0 && j !== 0) continue;
        add(g, box(2.2, 2.4, 2.2, stone, MAT.ROCK), x + i * 4.2, h + 2.0, z + j * 4.2);
      }
    }
  }
  // Gate arch
  add(g, box(8, 10, 3, shade, MAT.ROCK), 0, 5, 13);
  const gate = new THREE.TorusGeometry(3.2, 1.1, 6, 12, Math.PI);
  retagGeometry(gate, MAT.ROCK, 0);
  const gm = new THREE.Mesh(gate, patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: shade, flatShading: true })));
  gm.userData.matId = MAT.ROCK;
  gm.position.set(0, 4.2, 14.2);
  g.add(gm);
  // Curtain crenellations
  for (let i = -3; i <= 3; i++) {
    add(g, box(2.4, 2.6, 2.4, stone, MAT.ROCK), i * 4.2, 19.2, -11.6);
    add(g, box(2.4, 2.6, 2.4, stone, MAT.ROCK), i * 4.2, 19.2, 11.6);
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
    const b = box(1.4, 14, 0.3, bladeCol, MAT.WOOD);
    b.position.set(0, 7, 0);
    const pivot = new THREE.Group();
    pivot.rotation.z = (i * Math.PI) / 2;
    pivot.add(b);
    hub.add(pivot);
  }
  g.add(hub);
  g.userData.blades = hub;
  return g;
}

function makeArch() {
  const g = new THREE.Group();
  g.name = "arch";
  const pale = 0xe4d6b4;
  const mid = 0xd2c4a0;
  const shade = 0xc0b08a;
  const dark = 0x8a7a5c;
  // Tall pale-ochre limestone headland with an arch CUT through, facing south.
  const shape = new THREE.Shape();
  const W = 14, Hgt = 58;
  shape.moveTo(-W, 0);
  shape.lineTo(-W - 4, 10);
  shape.lineTo(-W + 2, 28);
  shape.lineTo(-W + 1, Hgt);
  shape.lineTo(W - 2, Hgt - 2);
  shape.lineTo(W + 3, 26);
  shape.lineTo(W + 2, 8);
  shape.lineTo(W, 0);
  shape.closePath();
  const hole = new THREE.Path();
  hole.absellipse(0, 18, 6.2, 16, 0, Math.PI * 2, true);
  shape.holes.push(hole);
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: 14, bevelEnabled: true, bevelThickness: 1.6, bevelSize: 1.2, bevelSegments: 2, curveSegments: 16,
  });
  geo.translate(0, 0, -7);
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const stripe = Math.sin(x * 0.55 + y * 1.15) + 0.5 * Math.sin((x - y) * 1.8 + z * 0.2);
    const hatch = stripe > 0.35 ? 0.62 : stripe > 0.0 ? 0.8 : stripe > -0.3 ? 0.92 : 1;
    const shadeAmt = (z > 4 ? 0.82 : 1) * (y < 4 ? 0.85 : 1);
    col[i * 3] = 0.86 * hatch * shadeAmt;
    col[i * 3 + 1] = 0.78 * hatch * shadeAmt;
    col[i * 3 + 2] = 0.58 * hatch * shadeAmt;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  retagGeometry(geo, MAT.ROCK, 0);
  const mesh = new THREE.Mesh(geo, patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true })));
  mesh.userData.matId = MAT.ROCK;
  g.add(mesh);
  // Irregular rocky toes under the arch — never rectangular buttress boxes
  add(g, box(5.5, 7, 8, dark, MAT.ROCK), -10, 3.2, 6, 0.1, 0.4, 0.15);
  add(g, box(6.0, 6, 7, shade, MAT.ROCK), 10, 2.8, 5, -0.08, -0.35, -0.12);
  add(g, box(4.5, 5, 9, mid, MAT.ROCK), 0, 2.0, 11, 0.2, 0.2, 0);
  return g;
}

function makeCave(heightAt) {
  const g = new THREE.Group();
  // Intentionally empty — the previous solid boxes read as a dark mid-frame slab.
  return g;
}

function makeWaterfall() {
  const g = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({
    color: 0xd8f4ff,
    transparent: true,
    opacity: 0.55,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  const geo = new THREE.PlaneGeometry(8, 36, 1, 10);
  retagGeometry(geo, MAT.WATERFALL, 1);
  const sheet = new THREE.Mesh(geo, mat);
  sheet.name = "falls";
  g.add(sheet);
  const sheet2 = new THREE.Mesh(geo.clone(), mat.clone());
  sheet2.name = "falls";
  sheet2.position.set(6, -4, 3);
  sheet2.rotation.y = 0.12;
  sheet2.scale.set(0.75, 0.9, 1);
  g.add(sheet2);
  // mist particles
  const n = 80;
  const p = new Float32Array(n * 3);
  const id = new Float32Array(n * 2);
  for (let i = 0; i < n; i++) {
    p[i * 3] = (Math.random() - 0.5) * 16;
    p[i * 3 + 1] = Math.random() * 70 - 35;
    p[i * 3 + 2] = (Math.random() - 0.5) * 6;
    id[i * 2] = MAT.FOAM; id[i * 2 + 1] = 0;
  }
  const pg = new THREE.BufferGeometry();
  pg.setAttribute("position", new THREE.BufferAttribute(p, 3));
  pg.setAttribute("aId", new THREE.BufferAttribute(id, 2));
  const pts = new THREE.Points(pg, new THREE.PointsMaterial({
    color: 0xe8ffff, size: 3, sizeAttenuation: true, transparent: true, opacity: 0.7,
  }));
  pts.name = "mist";
  g.add(pts);
  g.userData.mist = pts;
  g.userData.sheet = sheet;
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

function makeRunwayLights(parent, x0, x1, z, y) {
  const g = new THREE.Group();
  const len = Math.abs(x1 - x0);
  const wide = len > 500; // main runway
  const edge = wide ? 17 : 10;
  for (let x = x0; x <= x1; x += wide ? 14 : 24) {
    for (const s of [-edge, edge]) {
      const l = box(wide ? 1.6 : 0.9, wide ? 1.15 : 0.55, wide ? 1.6 : 0.9, 0xffb018, MAT.LIGHT, 1);
      l.position.set(x, y, z + s);
      g.add(l);
    }
  }
  add(g, box(len, 0.22, 1.1, 0xf8f6e8, MAT.LIGHT, 1), (x0 + x1) / 2, y, z - edge);
  add(g, box(len, 0.22, 1.1, 0xf8f6e8, MAT.LIGHT, 1), (x0 + x1) / 2, y, z + edge);
  for (const side of [x0, x1]) {
    const dir = side === x0 ? 1 : -1;
    for (let i = 0; i < (wide ? 8 : 3); i++) {
      add(g, box(2.4, 0.28, wide ? 24 : 12, 0xffffff, MAT.LIGHT, 1), side + dir * (6 + i * 3.2), y, z);
    }
  }
  for (let x = x0 + 28; x < x1 - 28; x += wide ? 16 : 22) {
    add(g, box(wide ? 12 : 8, 0.24, 1.4, 0xffffff, MAT.LIGHT, 1), x, y, z);
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

function makeRoad(from, to, width = 8) {
  const dx = to.x - from.x, dz = to.z - from.z;
  const len = Math.hypot(dx, dz);
  const y = (from.y + to.y) * 0.5 + 0.08;
  const m = box(len, 0.2, width, 0x3a3a3a, MAT.ROAD);
  m.position.set((from.x + to.x) / 2, y, (from.z + to.z) / 2);
  m.rotation.y = Math.atan2(dx, dz) + Math.PI / 2; // wait
  // box length is along X, so rotate so X aligns with path
  m.rotation.y = -Math.atan2(dz, dx);
  return m;
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
  if (kind === "rock") mat = triplanarLambert({ map: loadTex("rock.png"), scale: 0.045, vertexColors: true, flatShading: true, matId: MAT.ROCK });
  else if (kind === "stone") mat = triplanarLambert({ map: loadTex("stone.png"), scale: 0.06, vertexColors: true, flatShading: true, matId: MAT.ROCK });
  else if (kind === "plaster") mat = triplanarLambert({ map: loadTex("plaster.png"), scale: 0.08, vertexColors: true, flatShading: true, matId: MAT.BUILDING });
  else if (kind === "roof") mat = triplanarLambert({ map: loadTex("roof.png"), scale: 0.12, vertexColors: true, flatShading: true, matId: MAT.ROOF });
  else mat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }));
  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = name;
  mesh.matrixAutoUpdate = false;
  return mesh;
}

function mergeStatic(group, skipNames = new Set()) {
  const buckets = { rock: [], stone: [], plaster: [], roof: [], plain: [] };
  const toRemove = [];
  group.updateMatrixWorld(true);
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
  for (const kind of ["plain", "plaster", "stone", "rock", "roof"]) {
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
  const idx = [];
  let base = 0;
  for (const g of geos) {
    const p = g.getAttribute("position");
    const nn = g.getAttribute("normal");
    const id = g.getAttribute("aId");
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
  out.setIndex(idx);
  out.computeBoundingSphere();
  return out;
}


function makeCoastalCliffs(H) {
  const positions = [];
  const colors = [];
  const indices = [];
  // Only the west limestone cape and the far-east headland — never a wall in front of the airport.
  const ranges = [
    { x0: -480, x1: -40, z0: -1470, z1: -1080 },
    { x0: 60, x1: 300, z0: -1420, z1: -1200 },
    { x0: 520, x1: 900, z0: -1400, z1: -1080 },
  ];
  const pts = [];
  for (const R of ranges) {
    for (let x = R.x0; x <= R.x1; x += 7) {
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
          zx += n * 14;
          hx = Math.min(hMax, Math.max(8, hx * (0.65 + 0.55 * (0.5 + 0.5 * Math.sin(x * 0.11)))));
          // Leave the arch window and a couple of coves open
          if (Math.abs(x - LANDMARKS.arch.x) < 12) continue;
          if (Math.abs((x + 320) % 47) < 7) continue;
        }
        pts.push({ x, z: zx, h: hx, band: R.x0 });
      }
    }
  }
  function vert(x, y, z, shade) {
    const i = positions.length / 3;
    positions.push(x, y, z);
    const stripe = Math.sin(x * 1.15 + y * 1.6) + 0.7 * Math.sin((x - y) * 2.2 + z * 0.22);
    const hatch = stripe > 0.45 ? 0.28 : stripe > 0.1 ? 0.48 : stripe > -0.2 ? 0.74 : 0.94;
    // Grey-ochre rock (not sandy beige)
    const base = shade ? [0.36, 0.32, 0.26] : [0.50, 0.44, 0.36];
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
    const y0 = -0.6;
    const jA = west ? 3.5 * Math.sin(a.x * 0.21) : 0;
    const jB = west ? 3.5 * Math.sin(b.x * 0.21) : 0;
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
    if ((i % 2) === 0) bushPts.push({ x: (a.x + b.x) * 0.5, y: (a.h + b.h) * 0.5, z: (a.z + b.z) * 0.5 + 8 });
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  retagGeometry(geo, MAT.ROCK, 0);
  const mat = triplanarLambert({ map: loadTex("rock.png"), scale: 0.09, vertexColors: true, flatShading: true, matId: MAT.ROCK });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.userData.matId = MAT.ROCK;
  mesh.name = "cliffs";
  const group = new THREE.Group();
  group.name = "cliffs";
  group.add(mesh);
  // Vegetation tufts along the lip (one instanced draw)
  if (bushPts.length) {
    const inst = new THREE.InstancedMesh(
      retagGeometry(new THREE.SphereGeometry(2.1, 6, 5), MAT.FOLIAGE, 0),
      patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x2f8a32, flatShading: true })),
      bushPts.length
    );
    inst.userData.matId = MAT.FOLIAGE;
    const dummy = new THREE.Object3D();
    bushPts.forEach((p, i) => {
      dummy.position.set(p.x, p.y, p.z);
      const s = 1.1 + (i % 5) * 0.25;
      dummy.scale.set(s, s * (0.8 + (i % 3) * 0.15), s);
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

  // Runway lights & marks
  makeRunwayLights(group, -400, 400, -1100, 4.4);
  // Grass strip marks
  makeRunwayLights(group, -930, -710, 1120, 90.3);

  // Hangar
  const hangar = makeHangar();
  hangar.scale.setScalar(1.55);
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
  tower.scale.setScalar(1.65);
  tower.position.set(LANDMARKS.hangar.x - 8, H(LANDMARKS.hangar.x - 8, LANDMARKS.hangar.z - 42), LANDMARKS.hangar.z - 42);
  group.add(tower);
  sky.addLamp(new THREE.Vector3(LANDMARKS.tower.x, tower.position.y + 32, LANDMARKS.tower.z), 0xffe2a0, 6, 140);
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
    const puffMat = new THREE.MeshLambertMaterial({ color: 0xddd6cc, emissive: 0xc8c0b6, emissiveIntensity: 0.12, flatShading: false, transparent: true, opacity: 0.4, depthWrite: false });
    patchMaterialIdAlpha(puffMat);
    puffMat.userData.matId = MAT.CLOUD;
    const puffGeo = retagGeometry(new THREE.SphereGeometry(1, 10, 8), MAT.CLOUD, 0);
    const spots = [
      [0, 8, 0, 5], [3, 16, 2, 4], [-2, 22, -1, 3.2],
    ];
    const inst = new THREE.InstancedMesh(puffGeo, puffMat, spots.length);
    inst.name = "smoke";
    const dummy = new THREE.Object3D();
    spots.forEach((s, i) => {
      dummy.position.set(s[0], s[1], s[2]);
      dummy.scale.set(s[3], s[3] * 0.72, s[3]);
      dummy.rotation.set(0, i * 0.4, 0);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);
    });
    inst.instanceMatrix.needsUpdate = true;
    plume.add(inst);
    group.add(plume);
    anim.push({ smoke: plume, t: 0 });
  }

  // Dense white / terracotta village on the south-facing hillside, facing the hero camera.
  const houseColors = [0xfbf6ea, 0xfffaf2, 0xf4eee0, 0xf8f1dc, 0xfff8ec];
  const roofColors = [0xe02018, 0xc41010, 0xff3020, 0xd01814, 0xff3a22];
  const spots = [];
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  const houseFrac = (q && q.houses != null) ? q.houses : 1;
  const terraces = [
    { cx: LANDMARKS.town.x, cz: LANDMARKS.town.z, rx: 95, rz: 65, n: 120, s: 2.25 },
    { cx: LANDMARKS.town.x - 30, cz: LANDMARKS.town.z - 90, rx: 110, rz: 48, n: 100, s: 2.4 },
    { cx: LANDMARKS.town.x + 55, cz: LANDMARKS.town.z + 70, rx: 70, rz: 52, n: 60, s: 2.05 },
    { cx: LANDMARKS.town.x + 10, cz: LANDMARKS.town.z - 140, rx: 80, rz: 34, n: 48, s: 2.3 },
  ];
  let hi = 0;
  for (const ter of terraces) {
    const nH = Math.floor(ter.n * houseFrac);
    for (let i = 0; i < nH; i++) {
      const a = rnd() * Math.PI * 2;
      const rr = Math.sqrt(rnd());
      const x = ter.cx + Math.cos(a) * rr * ter.rx;
      const z = ter.cz + Math.sin(a) * rr * ter.rz;
      if (Math.abs(z + 1100) < 64) continue;
      if (Math.hypot(x - LANDMARKS.hangar.x, z - LANDMARKS.hangar.z) < 48) continue;
      const hgt = H(x, z);
      if (hgt < 3.5) continue;
      const h = house(5.2 + rnd() * 3.2, 5.0 + rnd() * 2.6, 4.0 + rnd() * 2.4, 3.2 + rnd() * 1.6, houseColors[hi % 5], roofColors[hi % 5]);
      h.position.set(x, hgt, z);
      h.rotation.y = rnd() * Math.PI * 2;
      h.scale.setScalar(ter.s);
      group.add(h);
      spots.push(h.position.clone());
      hi++;
    }
  }

  const church = makeChurch();
  church.scale.setScalar(1.45);
  church.position.set(LANDMARKS.church.x, H(LANDMARKS.church.x, LANDMARKS.church.z), LANDMARKS.church.z);
  group.add(church);

  for (let i = 0; i < 6; i++) {
    const st = makeMarketStall(rnd);
    const x = LANDMARKS.market.x + (i - 2.5) * 8;
    const z = LANDMARKS.market.z + (i % 2) * 8;
    st.position.set(x, H(x, z), z);
    st.rotation.y = (i % 2) * 0.2;
    group.add(st);
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
  const steamer = makeSteamer(0x3a4a58);
  steamer.position.set(-80, 0.9, -1310);
  steamer.rotation.y = -0.55;
  steamer.scale.setScalar(2.35);
  group.add(steamer);
  boats.push(steamer);
  const coastal = [
    [130, -1410, 0x2a6cb6], [20, -1335, 0xe8e0c8], [-40, -1270, 0xc05030],
  ];
  for (const [x, z, col] of coastal) {
    const b = makeSailboat(col);
    b.position.set(x, 0.5, z);
    b.rotation.y = -0.55;
    b.scale.setScalar(1.85);
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
  light.scale.setScalar(2.2);
  light.position.set(LANDMARKS.lighthouse.x, H(LANDMARKS.lighthouse.x, LANDMARKS.lighthouse.z), LANDMARKS.lighthouse.z);
  group.add(light);
  sky.addLamp(new THREE.Vector3(LANDMARKS.lighthouse.x, light.position.y + 40, LANDMARKS.lighthouse.z), 0xfff2c0, 8, 260);

  const bridge = makeBridge();
  const bx = LANDMARKS.bridge.x, bz = LANDMARKS.bridge.z;
  bridge.scale.set(3.4, 2.8, 2.6);
  bridge.position.set(bx, Math.max(22, H(bx, bz) + 8), bz);
  bridge.rotation.y = 0.08;
  group.add(bridge);

  const castle = makeCastle();
  castle.scale.setScalar(2.05);
  castle.position.set(LANDMARKS.castle.x, H(LANDMARKS.castle.x, LANDMARKS.castle.z), LANDMARKS.castle.z);
  group.add(castle);
  // Cape fort on the west ridge, readable in the hero (master's right side)
  const capeFort = makeCastle();
  capeFort.scale.setScalar(1.45);
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
    m.scale.setScalar(1.95);
    m.position.set(x, H(x, z), z);
    m.rotation.y = 0.4;
    group.add(m);
    mills.push(m);
  }

  const arch = makeArch();
  arch.scale.set(0.88, 0.78, 0.85);
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
  falls.scale.set(0.7, 0.55, 0.7);
  falls.position.set(wx, H(wx, wz) - 6, wz - 10);
  // Dark rock flanks so the sheet reads as a fall, not a white slab
  const lip = box(8, 4, 8, 0x8a7a60, MAT.ROCK);
  lip.position.set(wx, H(wx, wz) + 4, wz + 1);
  group.add(lip);
  const wallL = box(3, 12, 5, 0x8a7a60, MAT.ROCK);
  wallL.position.set(wx - 6, H(wx, wz) - 2, wz);
  group.add(wallL);
  const wallR = box(3, 11, 5, 0x8a7a60, MAT.ROCK);
  wallR.position.set(wx + 6, H(wx, wz) - 2, wz);
  group.add(wallR);

  falls.rotation.y = 0.05;
  group.add(falls);

  // Roads
  group.add(makeRoad(
    { x: -80, y: 4.4, z: -1100 },
    { x: LANDMARKS.town.x, y: 8.6, z: LANDMARKS.town.z },
    7
  ));
  group.add(makeRoad(
    { x: LANDMARKS.town.x, y: 8.6, z: LANDMARKS.town.z },
    { x: LANDMARKS.harbor.x, y: 1.4, z: LANDMARKS.harbor.z },
    6
  ));

  // Town lamps
  for (const p of spots.slice(0, 10)) {
    const lamp = cyl(0.15, 0.15, 6, 5, 0x333333, MAT.METAL);
    lamp.position.set(p.x + 3, H(p.x + 3, p.z) + 3, p.z);
    group.add(lamp);
    const bulb = box(0.5, 0.5, 0.5, 0xffe8a0, MAT.LIGHT, 1);
    bulb.position.set(p.x + 3, lamp.position.y + 3, p.z);
    group.add(bulb);
    sky.addLamp(bulb.position.clone(), 0xffc878, 4.0, 70);
  }

  mergeStatic(group, new Set(["blades", "beam", "mist", "falls", "lantern", "smoke", "lava", "sock"]));
  group.add(makeCoastalCliffs(H));
  // keep boat meshes (they bob)
  scene.add(group);

  return {
    group, hangar, tower, church, light, pier, wreck, bridge, castle, mills, arch, cave, falls, boats, windsock,
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
        beam.visible = true;
        beam.material.opacity = 0.48 + night * 0.22;
      }
      const blow = this._storm ? 0.7 : 0.15;
      for (const b of boats) {
        const amp = b.name === "steamer" ? (this._storm ? 1.15 : 0.28) : (this._storm ? 0.55 : 0.15);
        b.position.y = 0.5 + Math.sin(time * 0.7 + b.position.x * 0.05) * amp;
        b.rotation.z = Math.sin(time * 0.5 + b.position.z) * (this._storm ? 0.16 : 0.03);
        b.rotation.x = Math.sin(time * 0.65 + b.position.x * 0.02) * (b.name === "steamer" && this._storm ? 0.14 : 0.02);
      }
      if (windsock && windsock.userData.sock) {
        const sock = windsock.userData.sock;
        const to = Math.min(1.15, 0.35 + (this._windKt || 6) / 28);
        sock.scale.z += (to - sock.scale.z) * Math.min(1, dt * 3);
        sock.rotation.y = -Math.PI / 2 + Math.sin(time * (this._storm ? 6 : 2)) * 0.12;
        sock.rotation.x = this._storm ? 0.15 : 0.05;
      }
      if (falls.userData.mist) {
        const arr = falls.userData.mist.geometry.attributes.position.array;
        for (let i = 0; i < arr.length; i += 3) {
          arr[i + 1] -= dt * 12;
          if (arr[i + 1] < -36) arr[i + 1] = 36;
        }
        falls.userData.mist.geometry.attributes.position.needsUpdate = true;
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
        } else {
          a.smoke.rotation.y += dt * 0.08;
        }
      }
    },
  };
}
