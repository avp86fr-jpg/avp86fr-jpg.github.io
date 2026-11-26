import * as THREE from "three";
import { MAT, LANDMARKS } from "../core/config.js";
import { tagMesh, retagGeometry, patchMaterialIdAlpha } from "../render/idMaterial.js";

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
  // Art-deco curved-roof hall in cream stone, envelope emblem on the façade
  add(g, box(40, 12, 28, 0xd4c4a0, MAT.BUILDING), 0, 6, 0);
  const hall = cyl(14, 14, 40, 16, 0xc4b48c, MAT.ROOF);
  hall.rotation.z = Math.PI / 2;
  hall.position.set(0, 12, 0);
  g.add(hall);
  add(g, box(40, 14, 1.4, 0xcfbf98, MAT.BUILDING), 0, 7, 14.2);
  add(g, box(16, 10, 0.6, 0x3a3428, MAT.WOOD), 0, 5, 14.85);
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
  add(g, box(7.2, 26, 7.2, 0xc4a070, MAT.BUILDING), 0, 13, 0);
  add(g, box(7.6, 1.2, 7.6, 0xb08c5c, MAT.ROCK), 0, 8, 0);
  add(g, box(7.6, 1.2, 7.6, 0xb08c5c, MAT.ROCK), 0, 16, 0);
  add(g, box(11, 6, 11, 0xd0b888, MAT.BUILDING), 0, 29, 0);
  add(g, box(9, 3.1, 0.3, 0x2a2420, MAT.METAL), 0, 29.2, 5.6);
  add(g, box(0.3, 3.1, 9, 0x2a2420, MAT.METAL), 5.6, 29.2, 0);
  add(g, box(12, 0.6, 12, 0x8a3a2a, MAT.ROOF), 0, 32.3, 0);
  add(g, cyl(0.15, 0.15, 8, 6, 0x333333, MAT.METAL), 0, 36.5, 0);
  return g;
}

function makeChurch() {
  const g = new THREE.Group();
  add(g, box(12, 10, 18, 0xd2b07a, MAT.BUILDING), 0, 5, 0);
  const roof = mesh(new THREE.ConeGeometry(11, 6, 4), 0xe02018, MAT.ROOF);
  roof.rotation.y = Math.PI / 4;
  roof.position.y = 13;
  g.add(roof);
  add(g, box(4, 16, 4, 0xd2b07a, MAT.BUILDING), 0, 8, -8);
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
  add(g, cyl(7, 9, 6, 10, 0x6a6258, MAT.ROCK), 0, 3, 0);
  add(g, cyl(5.2, 6.6, 28, 12, 0xf4f0e4, MAT.BUILDING), 0, 20, 0);
  // red bands
  add(g, cyl(5.5, 6.0, 3.2, 12, 0xc03a3a, MAT.ROOF), 0, 14, 0);
  add(g, cyl(5.4, 5.7, 3.2, 12, 0xc03a3a, MAT.ROOF), 0, 24, 0);
  add(g, cyl(6.2, 6.2, 4, 12, 0x2a2a2a, MAT.METAL), 0, 36, 0);
  const lantern = cyl(3.4, 3.4, 4.2, 10, 0xfff4c0, MAT.LIGHT, 1);
  lantern.name = "lantern";
  add(g, lantern, 0, 40, 0);
  add(g, cone(4.2, 3.2, 8, 0x2a2a2a, MAT.METAL), 0, 43.8, 0);
  // gallery
  add(g, cyl(6.6, 6.6, 0.3, 12, 0x888888, MAT.METAL), 0, 37.8, 0);

  // Beam — long thin box / cone that we rotate
  const beamGeo = new THREE.ConeGeometry(18, 220, 8, 1, true);
  beamGeo.rotateX(-Math.PI / 2);
  retagGeometry(beamGeo, MAT.LIGHT, 1);
  const beamMat = new THREE.MeshBasicMaterial({
    color: 0xfff2c0,
    transparent: true,
    opacity: 0.18,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const beam = new THREE.Mesh(beamGeo, beamMat);
  beam.position.set(0, 40, 0);
  beam.name = "beam";
  g.add(beam);
  g.userData.beam = beam;
  return g;
}

function makePier() {
  const g = new THREE.Group();
  const len = 180;
  add(g, box(10, 1, len, 0x7a5a32, MAT.WOOD), 0, 1.2, 0);
  for (let i = -6; i <= 6; i++) {
    add(g, box(0.6, 3.2, 0.6, 0x5a4020, MAT.WOOD), -4, -0.4, i * 12);
    add(g, box(0.6, 3.2, 0.6, 0x5a4020, MAT.WOOD), 4, -0.4, i * 12);
  }
  // end hut
  add(g, box(8, 5, 8, 0x8a6238, MAT.WOOD), 0, 4, len / 2 - 6);
  add(g, cone(6, 4, 4, 0x5a3020, MAT.ROOF), 0, 8.5, len / 2 - 6);
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
  add(g, box(8, 2, 36, 0x8a8478, MAT.ROCK), 0, 0, 0);
  add(g, box(1.2, 3, 36, 0x7a7468, MAT.ROCK), -3.6, 2.2, 0);
  add(g, box(1.2, 3, 36, 0x7a7468, MAT.ROCK), 3.6, 2.2, 0);
  // arches (boxes as piers)
  add(g, box(4, 14, 4, 0x7a7468, MAT.ROCK), 0, -8, -10);
  add(g, box(4, 14, 4, 0x7a7468, MAT.ROCK), 0, -8, 10);
  return g;
}

function makeCastle() {
  const g = new THREE.Group();
  add(g, box(28, 16, 22, 0x8a8680, MAT.ROCK), 0, 8, 0);
  add(g, box(8, 26, 8, 0x8a8680, MAT.ROCK), -12, 13, -8);
  add(g, box(8, 22, 8, 0x8a8680, MAT.ROCK), 12, 11, -8);
  add(g, box(8, 18, 8, 0x8a8680, MAT.ROCK), -12, 9, 8);
  // broken wall
  add(g, box(18, 10, 3, 0x7a7670, MAT.ROCK), 6, 5, 12, 0, 0.2, 0.1);
  add(g, box(6, 5, 4, 0x7a7670, MAT.ROCK), 14, 2, 10, 0.3, 0.5, 0);
  // crenellations
  for (let i = -2; i <= 2; i++) {
    add(g, box(3, 3, 3, 0x8a8680, MAT.ROCK), i * 5, 17.5, -10);
  }
  return g;
}

function makeWindmill() {
  const g = new THREE.Group();
  add(g, cyl(5, 6.5, 16, 8, 0xe8dcc4, MAT.BUILDING), 0, 8, 0);
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
  add(g, box(8, 28, 10, 0x6a6058, MAT.ROCK), -10, 14, 0);
  add(g, box(8, 28, 10, 0x6a6058, MAT.ROCK), 10, 14, 0);
  add(g, box(28, 10, 10, 0x6a6058, MAT.ROCK), 0, 32, 0);
  // inner darker lip
  add(g, box(6, 6, 11, 0x5a5048, MAT.ROCK), -8, 6, 0);
  add(g, box(6, 6, 11, 0x5a5048, MAT.ROCK), 8, 6, 0);
  return g;
}

function makeCave(heightAt) {
  const g = new THREE.Group();
  // recess behind waterfall
  add(g, box(16, 10, 18, 0x2a2420, MAT.ROCK), 0, 5, 0);
  add(g, box(14, 8, 10, 0x1a1612, MAT.ROCK), 0, 4, 6);
  return g;
}

function makeWaterfall() {
  const g = new THREE.Group();
  const geo = new THREE.PlaneGeometry(14, 72, 1, 8);
  retagGeometry(geo, MAT.WATERFALL, 1);
  const mat = new THREE.MeshBasicMaterial({
    color: 0xc8f4ff,
    transparent: true,
    opacity: 0.7,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  const sheet = new THREE.Mesh(geo, mat);
  sheet.name = "falls";
  g.add(sheet);
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
    paintDigit(g, "2", x1 - 70, y + 0.4, z - 16, 6.4);
    paintDigit(g, "7", x1 - 70, y + 0.4, z + 16, 6.4);
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


function mergeStatic(group, skipNames = new Set()) {
  const buckets = new Map();
  const toRemove = [];
  group.updateMatrixWorld(true);
  group.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh) return;
    // skip animated / named specials
    let n = o;
    while (n) {
      if (skipNames.has(n.name)) return;
      n = n.parent;
    }
    const mat = o.material;
    if (!mat || mat.transparent) return;
    const idAttr = o.geometry.getAttribute("aId");
    const mid = (idAttr ? idAttr.getX(0) : (o.userData.matId || 8));
    const col = mat.color ? mat.color.getHex() : 0;
    const key = mid + ":" + col + ":" + (mat.type || "") + ":" + (mat.flatShading ? 1 : 0);
    if (!buckets.has(key)) buckets.set(key, { mat, geos: [] });
    const g = o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    buckets.get(key).geos.push(g);
    toRemove.push(o);
  });
  for (const o of toRemove) {
    if (o.parent) o.parent.remove(o);
  }
  const merged = new THREE.Group();
  merged.name = "landmarks-merged";
  merged.matrixAutoUpdate = false;
  for (const { mat, geos } of buckets.values()) {
    const geo = mergeGeos(geos, (mat.userData && mat.userData.matId) || (geos[0] && geos[0].getAttribute("aId") && geos[0].getAttribute("aId").getX(0)) || 8);
    const mesh = new THREE.Mesh(geo, mat);
    merged.add(mesh);
  }
  group.add(merged);
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

export function createLandmarks(scene, terrain, sky) {
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
  hangar.position.set(LANDMARKS.hangar.x, H(LANDMARKS.hangar.x, LANDMARKS.hangar.z), LANDMARKS.hangar.z);
  hangar.rotation.y = 0.1;
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
  windsock.position.set(LANDMARKS.tower.x + 18, H(LANDMARKS.tower.x + 18, LANDMARKS.tower.z + 12), LANDMARKS.tower.z + 12);
  group.add(windsock);

  const tower = makeTower();
  tower.position.set(LANDMARKS.tower.x, H(LANDMARKS.tower.x, LANDMARKS.tower.z), LANDMARKS.tower.z);
  group.add(tower);
  sky.addLamp(new THREE.Vector3(LANDMARKS.tower.x, tower.position.y + 32, LANDMARKS.tower.z), 0xffe2a0, 4, 80);


  // Mount Glyph: glowing crater, lava and smoke
  {
    const vx = 0, vz = 200;
    const vy = H(vx, vz);
    const lava = cyl(28, 36, 3.2, 14, 0xff3a12, MAT.LIGHT, 1);
    lava.position.set(vx, vy - 6, vz);
    lava.name = "lava";
    group.add(lava);
    const glow = cyl(18, 22, 2.2, 12, 0xffc050, MAT.LIGHT, 1);
    glow.position.set(vx, vy - 4.2, vz);
    glow.name = "lava";
    group.add(glow);
    // bright lava rivers down the south and east flanks
    for (const [dx, dz, len, rot] of [[40, 70, 90, 0.4], [-30, 80, 80, -0.3], [70, 20, 70, 1.1], [-60, 40, 75, -1.0]]) {
      const river = box(7, 2.2, len, 0xff5a18, MAT.LIGHT, 1);
      river.position.set(vx + dx, vy - 18, vz + dz);
      river.rotation.x = 0.35;
      river.rotation.y = rot;
      river.name = "lava";
      group.add(river);
    }
    const n = 70;
    const p = new Float32Array(n * 3);
    const id = new Float32Array(n * 2);
    for (let i = 0; i < n; i++) {
      p[i * 3] = (Math.random() - 0.5) * 40;
      p[i * 3 + 1] = Math.random() * 90;
      p[i * 3 + 2] = (Math.random() - 0.5) * 40;
      id[i * 2] = MAT.CLOUD; id[i * 2 + 1] = 0;
    }
    const pg = new THREE.BufferGeometry();
    pg.setAttribute("position", new THREE.BufferAttribute(p, 3));
    pg.setAttribute("aId", new THREE.BufferAttribute(id, 2));
    const smoke = new THREE.Points(pg, new THREE.PointsMaterial({
      color: 0xb8b0a8, size: 7, sizeAttenuation: true, transparent: true, opacity: 0.65, depthWrite: false,
    }));
    smoke.name = "smoke";
    smoke.position.set(vx, vy + 4, vz);
    group.add(smoke);
    anim.push({ smoke, t: 0 });
  }

  // Town houses
  const houseColors = [0xd2b07a, 0xc4a060, 0xccaa70, 0xd8b878, 0xc8a468];
  const roofColors = [0xe22a1c, 0xc41a14, 0xe03820, 0xd02018, 0xee4a28];
  const spots = [];
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  for (let i = 0; i < 28; i++) {
    const a = rnd() * Math.PI * 2;
    const r = 20 + rnd() * 140;
    const x = LANDMARKS.town.x + Math.cos(a) * r;
    const z = LANDMARKS.town.z + Math.sin(a) * r * 0.7;
    if (Math.abs(z + 1100) < 70) continue;
    const h = house(6 + rnd() * 4, 6 + rnd() * 4, 4 + rnd() * 3, 3 + rnd() * 2, houseColors[i % 5], roofColors[i % 5]);
    h.position.set(x, H(x, z), z);
    h.rotation.y = rnd() * Math.PI * 2;
    group.add(h);
    spots.push(h.position.clone());
  }

  const church = makeChurch();
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

  // Coastal traffic visible from the southern hero view (east is camera-right when looking north)
  const steamer = makeSteamer(0x3a4a58);
  steamer.position.set(980, 0.9, -880);
  steamer.rotation.y = -0.9;
  group.add(steamer);
  boats.push(steamer);
  const coastal = [[720, -1020, 0x2a6cb6], [860, -960, 0xe8e0c8], [1100, -920, 0xc05030]];
  for (const [x, z, col] of coastal) {
    const b = makeSailboat(col);
    b.position.set(x, 0.5, z);
    b.rotation.y = -0.6;
    group.add(b);
    boats.push(b);
  }

  const pier = makePier();
  // pier extends south (+Z in our layout? south is +Z if Z south... we used Z north, south is negative Z)
  // Sunny beach at z=-1280, pier at (240, -1360) extending further south (more negative Z)
  pier.position.set(LANDMARKS.pier.x, 0.6, LANDMARKS.pier.z);
  pier.rotation.y = 0; // pier local Z is its length; rotate so +Z local goes south (−world Z)
  pier.rotation.y = Math.PI;
  group.add(pier);

  const wreck = makeWreck();
  wreck.position.set(LANDMARKS.wreck.x, -0.4, LANDMARKS.wreck.z);
  group.add(wreck);

  const light = makeLighthouse();
  light.position.set(LANDMARKS.lighthouse.x, H(LANDMARKS.lighthouse.x, LANDMARKS.lighthouse.z), LANDMARKS.lighthouse.z);
  group.add(light);
  sky.addLamp(new THREE.Vector3(LANDMARKS.lighthouse.x, light.position.y + 40, LANDMARKS.lighthouse.z), 0xfff2c0, 8, 260);

  const bridge = makeBridge();
  const bx = LANDMARKS.bridge.x, bz = LANDMARKS.bridge.z;
  bridge.position.set(bx, 22, bz);
  // river goes roughly (720,640)->(780,520)->(980,440) so at bridge toward SE
  bridge.rotation.y = -0.6;
  group.add(bridge);

  const castle = makeCastle();
  castle.position.set(LANDMARKS.castle.x, H(LANDMARKS.castle.x, LANDMARKS.castle.z), LANDMARKS.castle.z);
  group.add(castle);

  const mills = [];
  const millSpots = [
    [-960, 180], [-1040, 80], [-880, 260], [-1080, 260], [-900, 40],
  ];
  for (const [x, z] of millSpots) {
    const m = makeWindmill();
    m.position.set(x, H(x, z), z);
    m.rotation.y = 0.4;
    group.add(m);
    mills.push(m);
  }

  const arch = makeArch();
  arch.position.set(LANDMARKS.arch.x, 0, LANDMARKS.arch.z);
  arch.rotation.y = -0.5;
  group.add(arch);

  const cave = makeCave();
  cave.position.set(LANDMARKS.cave.x, 50, LANDMARKS.cave.z);
  cave.rotation.y = 0.4;
  group.add(cave);

  const falls = makeWaterfall();
  // sheet hangs down from ~88 to ~16, center at ~52
  falls.position.set(LANDMARKS.waterfall.x, 52, LANDMARKS.waterfall.z);
  falls.rotation.y = -0.8;
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
    sky.addLamp(bulb.position.clone(), 0xffc878, 2.2, 28);
  }

  mergeStatic(group, new Set(["blades", "beam", "mist", "falls", "lantern", "boat", "smoke", "lava", "windsock", "steamer", "sock"]));
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
        beam.material.opacity = 0.16 + night * 0.2;
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
      }
    },
  };
}
