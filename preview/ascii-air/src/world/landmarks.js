import * as THREE from "three";
import { MAT, LANDMARKS, QUALITY } from "../core/config.js";
import { isleHeightAt, buildIsleGround, ISLES } from "./isles.js";
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

function boulder(sx, sy, sz, color, matId, hero = 0) {
  const geo = new THREE.SphereGeometry(1, 7, 5);
  geo.scale(sx * 0.5, sy * 0.5, sz * 0.5);
  // Pull a few verts so the silhouette is lumpy, not a clean egg.
  const pos = geo.getAttribute("position");
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const n = 0.86 + 0.18 * Math.sin(x * 2.1 + z * 1.7) * Math.cos(y * 1.4);
    pos.setXYZ(i, x * n, y * (0.92 + 0.08 * Math.sin(z * 2.4)), z * n);
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
  return mesh(geo, color, matId, hero);
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

function house(w, d, h, roofH, wall, roofCol, detailed = true, style = 0) {
  const g = new THREE.Group();
  // Weathered limestone plinth so the body does not read as a bare box
  add(g, box(w + 0.38, Math.min(0.9, h * 0.24), d + 0.38, 0xcfc6b6, MAT.ROCK), 0, Math.min(0.45, h * 0.12), 0);
  add(g, box(w, h, d, wall, MAT.BUILDING), 0, h / 2, 0);
  // Two-storey string course
  if (style === 2 || h > 5.7) {
    add(g, box(w + 0.1, 0.22, d + 0.1, 0xc4a070, MAT.BUILDING), 0, h * 0.52, 0);
  }
  const r = mesh(gableRoofGeo(w + 0.35, d + 0.35, roofH), roofCol, MAT.ROOF);
  r.position.y = h;
  g.add(r);
  if (detailed) {
    if (style === 1) {
      add(g, box(Math.min(1.45, w * 0.34), h * 0.70, 0.20, 0x3a2a1a, MAT.WOOD), 0, h * 0.35, d / 2 + 0.06);
      add(g, box(Math.min(1.9, w * 0.44), 0.22, 0.22, 0xd4c6a8, MAT.ROCK), 0, h * 0.72, d / 2 + 0.09);
    } else {
      add(g, box(Math.min(1.25, w * 0.30), h * 0.62, 0.18, 0x3a2a1a, MAT.WOOD), 0, h * 0.31, d / 2 + 0.06);
    }
    const ww = Math.min(1.05, w * 0.24), wh = Math.min(1.35, h * 0.28);
    const shCol = [0x3a5a7a, 0x3a6a42, 0x8a3a32, 0xc4a46a, 0x2a4a5a][style % 5];
    const winYs = h > 5.4 ? [h * 0.36, h * 0.72] : [h * 0.58];
    const winXs = w > 6.2 ? [-w * 0.32, w * 0.32] : [-w * 0.28, w * 0.28];
    for (const wy of winYs) {
      for (const wx of winXs) {
        add(g, box(ww + 0.16, wh + 0.16, 0.10, 0xf2ead8, MAT.BUILDING), wx, wy, d / 2 + 0.05);
        add(g, box(ww, wh, 0.14, 0x2a3540, MAT.METAL), wx, wy, d / 2 + 0.08);
        add(g, box(0.16, wh, 0.10, shCol, MAT.WOOD), wx - ww * 0.64, wy, d / 2 + 0.10);
        add(g, box(0.16, wh, 0.10, shCol, MAT.WOOD), wx + ww * 0.64, wy, d / 2 + 0.10);
        if (wy < h * 0.5) {
          add(g, box(ww + 0.22, 0.16, 0.30, 0x6a4a28, MAT.WOOD), wx, wy - wh * 0.58, d / 2 + 0.22);
          add(g, box(ww * 0.72, 0.30, 0.22, 0x4a8a32, MAT.FOLIAGE), wx, wy - wh * 0.40, d / 2 + 0.24);
        }
      }
      add(g, box(0.10, wh + 0.12, ww + 0.12, 0xf2ead8, MAT.BUILDING), w / 2 + 0.06, wy, 0);
      add(g, box(0.14, wh, ww, 0x2a3540, MAT.METAL), w / 2 + 0.09, wy, 0);
      add(g, box(0.10, wh + 0.12, ww + 0.12, 0xf2ead8, MAT.BUILDING), -w / 2 - 0.06, wy, 0);
      add(g, box(0.14, wh, ww, 0x2a3540, MAT.METAL), -w / 2 - 0.09, wy, 0);
    }
    if (style === 3) {
      add(g, box(0.22, h * 0.78, 0.22, 0xefe6d2, MAT.BUILDING), -w * 0.28, h * 0.39, d / 2 + 0.55);
      add(g, box(0.22, h * 0.78, 0.22, 0xefe6d2, MAT.BUILDING),  w * 0.28, h * 0.39, d / 2 + 0.55);
      add(g, box(w * 0.72, 0.22, 0.28, 0xe8d8b0, MAT.BUILDING), 0, h * 0.80, d / 2 + 0.55);
    }
    if (h > 5.5 || style === 2) {
      const by = h * 0.58;
      add(g, box(w * 0.62, 0.12, 0.85, 0xcfc6b6, MAT.ROCK), 0, by, d / 2 + 0.50);
      add(g, box(w * 0.62, 0.45, 0.08, 0xf2ead8, MAT.BUILDING), 0, by + 0.28, d / 2 + 0.90);
      add(g, box(0.08, 0.45, 0.85, 0xf2ead8, MAT.BUILDING), -w * 0.30, by + 0.28, d / 2 + 0.50);
      add(g, box(0.08, 0.45, 0.85, 0xf2ead8, MAT.BUILDING),  w * 0.30, by + 0.28, d / 2 + 0.50);
    }
    const cy = h + roofH * 0.38;
    add(g, box(0.7, roofH * 0.65, 0.7, 0x8a4a38, MAT.ROCK), w * 0.22, cy, -d * 0.18);
    add(g, box(0.88, 0.16, 0.88, 0x5a3028, MAT.ROCK), w * 0.22, cy + roofH * 0.36, -d * 0.18);
    if (style === 2) {
      add(g, box(0.55, roofH * 0.5, 0.55, 0x8a4a38, MAT.ROCK), -w * 0.28, cy - 0.1, d * 0.12);
    }
    if (roofH > 2.5 && w > 5.5) {
      add(g, box(1.4, 1.1, 1.1, wall, MAT.BUILDING), -w * 0.12, h + 0.55, d * 0.15);
      const dr = mesh(gableRoofGeo(1.7, 1.3, 0.85), roofCol, MAT.ROOF);
      dr.position.set(-w * 0.12, h + 1.1, d * 0.15);
      g.add(dr);
      add(g, box(0.55, 0.55, 0.12, 0x2a3540, MAT.METAL), -w * 0.12, h + 0.7, d * 0.15 + 0.58);
    }
    if (style === 4 || style % 5 === 4) {
      add(g, box(w * 0.42, h * 0.55, d * 0.55, wall, MAT.BUILDING), w * 0.62, h * 0.28, 0);
      const lean = mesh(gableRoofGeo(w * 0.50, d * 0.62, roofH * 0.55), roofCol, MAT.ROOF);
      lean.position.set(w * 0.62, h * 0.55, 0);
      g.add(lean);
    }
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
  hall.name = "hangar-hall";
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
  mergeVertexColors(roofG, new Set(["hangar-hall"]), "hangar-ribs");
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
  // Door and a small keeper cottage so the base is not a bare cylinder
  add(g, box(1.6, 3.2, 0.35, 0x3a2a1a, MAT.WOOD), 0, 1.7, 4.2);
  add(g, box(0.7, 1.1, 0.2, 0x1a2230, MAT.METAL), 0, 2.6, 4.35);
  add(g, box(6.4, 3.6, 5.2, 0xf4efe4, MAT.BUILDING), 7.2, 1.8, 1.2);
  add(g, box(7.0, 2.2, 5.8, 0xd01418, MAT.ROOF), 7.2, 4.4, 1.2);
  add(g, box(0.9, 1.1, 0.2, 0x1a2230, MAT.METAL), 7.2, 2.2, 3.9);

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
    color: 0xd8d2c8, emissive: 0xc4bcb2, emissiveIntensity: 0.22,
    flatShading: true, transparent: true, opacity: 0.72, depthWrite: false,
  }));
  puffMat.userData.matId = MAT.CLOUD;
  const dummy = new THREE.Object3D();
  const smoke = new THREE.InstancedMesh(new THREE.SphereGeometry(0.7, 6, 5), puffMat, 10);
  smoke.name = "smoke";
  smoke.position.set(0, 8.4, 0.4);
  smoke.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  smoke.frustumCulled = false;
  for (let i = 0; i < 10; i++) {
    dummy.position.set((i % 2) * 0.3, i * 0.85, (i % 3) * 0.15);
    dummy.scale.setScalar(1.0 + i * 0.22);
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
  add(g, box(1.5, 3.2, 0.3, 0x3a2a1a, MAT.WOOD), 0, 1.7, 5.2);
  add(g, box(0.9, 1.15, 0.18, 0x1a2230, MAT.METAL), -2.2, 7.2, 4.6);
  add(g, box(0.9, 1.15, 0.18, 0x1a2230, MAT.METAL),  2.2, 7.2, 4.6);
  add(g, cyl(6.2, 6.2, 0.28, 10, 0xcfc6b6, MAT.ROCK), 0, 14.2, 0);
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
    // Cream limestone, like the cape
    col[i * 3] = 0.86 * hatch * shadeAmt;
    col[i * 3 + 1] = 0.80 * hatch * shadeAmt;
    col[i * 3 + 2] = 0.64 * hatch * shadeAmt;
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  retagGeometry(geo, MAT.ROCK, 0);
  const mesh = new THREE.Mesh(geo, patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: false })));
  mesh.userData.matId = MAT.ROCK;
  g.add(mesh);
  // Rocky toes in the same grey limestone (not beige slabs)
  add(g, box(11, 12, 16, 0xc8b896, MAT.ROCK), -11, 6, 11, 0.10, 0.28, 0.14);
  add(g, box(9, 10, 14, 0xb8a882, MAT.ROCK), 10, 5, 13, -0.12, -0.22, -0.10);
  add(g, box(13, 9, 18, 0xd0c4a4, MAT.ROCK), 1, 4.5, 20, 0.06, 0.16, 0.04);
  add(g, box(8, 14, 11, 0xae9e7c, MAT.ROCK), -5, 7, 26, 0.12, 0.22, 0.08);
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
      uniform float uTime;
      void main() {
        vUv = uv;
        vec3 p = position;
        p.x += sin(uv.y * 9.0 - uTime * 2.4 + uv.x * 5.0) * 0.45;
        p.z += cos(uv.y * 6.0 - uTime * 1.8) * 0.20;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      varying vec2 vUv;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p){
        vec2 i = floor(p), f = fract(p);
        float a = hash(i), b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0)), d = hash(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
      }
      void main() {
        float down = 1.0 - vUv.y;
        vec3 deep = vec3(0.28, 0.58, 0.78);
        vec3 mid  = vec3(0.62, 0.84, 0.94);
        vec3 foam = vec3(0.92, 0.96, 1.00);
        vec3 col = mix(deep, mid, smoothstep(0.0, 0.4, down));
        // Flowing veils
        vec2 uvw = vec2(vUv.x * 3.4, vUv.y * 6.0 - uTime * 1.55);
        float n = noise(uvw) * 0.55 + noise(uvw * 2.2 + vec2(0.0, -uTime * 0.8)) * 0.45;
        float ribbon = smoothstep(0.35, 0.75, n);
        float core = 1.0 - smoothstep(0.18, 0.48, abs(vUv.x - 0.5));
        col = mix(col, foam, ribbon * (0.40 + down * 0.50) * (0.40 + core * 0.60));
        // Spray / mist along the veil
        float spray = noise(vec2(vUv.x * 8.0, vUv.y * 3.0 - uTime * 0.9));
        col = mix(col, foam, spray * core * 0.25);
        // Heavy foam at the splash
        float splash = smoothstep(0.70, 1.0, down) * (0.55 + 0.45 * noise(vec2(vUv.x * 10.0, uTime * 1.4)));
        col = mix(col, foam, splash);
        // Soft volumetric falloff
        float edge = smoothstep(0.0, 0.14, vUv.x) * smoothstep(1.0, 0.86, vUv.x);
        float a = (0.28 + core * 0.58 + ribbon * 0.22 + splash * 0.25) * edge;
        a *= 0.50 + 0.50 * smoothstep(0.0, 0.10, down);
        gl_FragColor = vec4(col, clamp(a, 0.0, 0.95));
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
  // Two-tier floating crag: jagged grey-brown rock, lush green tops,
  // tall ruined colonnade, waterfalls between tiers into mist.
  const g = new THREE.Group();
  g.name = "hanging-keep";
  const stoneLt = 0xf2ebe0, stone = 0xe4ddd0, stoneDk = 0xc8c2b6;
  const moss = 0x3a6e32, grass = 0x4a8a3a, vine = 0x2a5428, earth = 0x5a4632;

  function cragGeo({ rx, rz, top, depth, segs = 40, rings = 22, seed = 1 }) {
    const geo = new THREE.CylinderGeometry(1, 1, 1, segs, rings, false);
    const pos = geo.attributes.position;
    const col = new Float32Array(pos.count * 3);
    const fract = (v) => v - Math.floor(v);
    const hsh = (a, b) => fract(Math.sin(a * 127.1 + b * 311.7 + seed * 19.2) * 43758.5453);
    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i), y0 = pos.getY(i), z = pos.getZ(i);
      const ty = y0 + 0.5;
      const ang = Math.atan2(z, x);
      const rad0 = Math.hypot(x, z);
      // Faceted cliff planes with a little plan irregularity — crisp light/shadow, not a soft blob.
      const facets = 9;
      const fa = Math.round(ang / (Math.PI * 2) * facets) * (Math.PI * 2) / facets;
      const angF = fa * 0.84 + ang * 0.16;
      let plan = 0.70
        + 0.22 * Math.sin(angF * 3 + seed)
        + 0.14 * Math.sin(angF * 5 + seed * 2.1)
        + 0.10 * Math.sin(angF * 8 + seed * 0.7)
        + 0.07 * Math.sin(angF * 13 + seed * 1.4);
      if (hsh(angF, 1.3) > 0.84) plan *= 0.62; // broken bites
      if (hsh(angF, 4.2) > 0.90) plan *= 1.18; // jutting buttress
      // Low-frequency wave only, so each facet stays a readable plane
      const wave = 1.0
        + 0.025 * Math.sin(ty * 11 + seed * 2 + angF * 0.6)
        + 0.016 * Math.sin(ty * 19 + seed * 0.7 + angF * 1.3);
      let prof;
      if (ty > 0.90) {
        prof = plan * (0.82 + 0.20 * Math.sin(angF * 4 + seed) + 0.08 * hsh(angF, 9));
      } else if (ty > 0.58) {
        prof = plan * (0.96 + 0.16 * Math.sin(angF * 3.2 + seed) * (ty < 0.78 ? 1 : 0.25)) * wave;
      } else if (ty > 0.22) {
        const over = 1.05 + 0.28 * Math.max(0, Math.sin(angF * 2.6 + seed * 1.3));
        const under = 1.0 - 0.18 * Math.max(0, Math.sin(angF * 4.1 + seed * 2.0 + 1));
        prof = plan * over * under * wave;
      } else {
        const teeth = 0.28 + 0.48 * Math.abs(Math.sin(angF * 5 + seed)) + 0.22 * Math.abs(Math.sin(angF * 11 + seed * 1.1));
        prof = plan * teeth;
      }
      // Occasional sharp notches, not full ledges
      if (hsh(angF * 0.3, Math.floor(ty * 22)) > 0.84 && ty < 0.9 && ty > 0.22) prof *= 0.90;
      const rMul = (rad0 < 0.001 ? 0 : 1) * prof;
      let y = -depth + (top + depth) * ty;
      // Irregular top and strata notches
      if (ty > 0.84) y += 2.4 * Math.sin(angF * 3 + seed) * ((ty - 0.84) / 0.16);
      y += 0.35 * Math.sin(ty * 14 + seed) * (ty < 0.92 ? 1 : 0.3);
      pos.setXYZ(i, x * rx * rMul, y, z * rz * rMul);
      // Warm lit planes vs cool shade planes; moss only in deep folds
      const sun = Math.cos(angF - 0.55);
      const band = Math.floor((1 - ty) * 7) % 3;
      let r, gC, b;
      if (sun > 0.22) {
        if (band === 0) { r = 1.00; gC = 0.96; b = 0.88; }
        else if (band === 1) { r = 0.96; gC = 0.91; b = 0.80; }
        else { r = 0.90; gC = 0.86; b = 0.76; }
      } else if (sun < -0.12) {
        if (band === 0) { r = 0.62; gC = 0.66; b = 0.68; }
        else if (band === 1) { r = 0.70; gC = 0.72; b = 0.70; }
        else { r = 0.55; gC = 0.58; b = 0.60; }
      } else {
        r = 0.84; gC = 0.82; b = 0.76;
      }
      const crease = plan < 0.50 && hsh(angF, ty * 3) < 0.10;
      if (crease && ty < 0.82 && ty > 0.15) { r = 0.72; gC = 0.76; b = 0.60; }
      if (ty > 0.90) { r = 0.90; gC = 0.87; b = 0.78; }
      const shade = 0.90 + 0.10 * sun;
      col[i * 3] = r * shade; col[i * 3 + 1] = gC * shade; col[i * 3 + 2] = b * shade;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    geo.computeVertexNormals();
    retagGeometry(geo, MAT.ROCK, 0);
    const mesh = new THREE.Mesh(geo, patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
      vertexColors: true, flatShading: false,
    })));
    mesh.userData.matId = MAT.ROCK;
    return mesh;
  }

  // Upper mass and a smaller, offset lower island (not a second cake).
  const upper = cragGeo({ rx: 42, rz: 34, top: 8.0, depth: 34, seed: 1.2 });
  upper.name = "keep-rock";
  g.add(upper);
  const lower = cragGeo({ rx: 18, rz: 15, top: 4.2, depth: 16, segs: 28, rings: 16, seed: 4.8 });
  lower.name = "keep-rock";
  lower.position.set(-8, -30, -22);
  g.add(lower);

  const green = new THREE.Group();
  green.name = "keep-green";

  function turf(y, pts, grassCol) {
    for (const [x, z, s] of pts) {
      const parts = [];
      for (const [ox, oz, k] of [[0, 0, 1], [0.45, 0.2, 0.7], [-0.4, -0.15, 0.65], [0.15, -0.4, 0.6]]) {
        const sg = new THREE.SphereGeometry(s * k, 7, 5);
        sg.scale(1.15, 0.34, 1.05);
        sg.translate(ox * s, 0, oz * s);
        parts.push(retagGeometry(sg, MAT.FOLIAGE));
      }
      const mound = mesh(mergeGeos(parts, MAT.FOLIAGE), grassCol, MAT.FOLIAGE);
      mound.position.set(x, y, z);
      green.add(mound);
    }
  }
  const sage = 0x7ab844, olive = 0x5a8e30, sunLeaf = 0x96d050, midLeaf = 0x6eb83a;
  // No flat lawn boxes — lumpy foliage spilling over the rims.
  turf(7.2, [
    [-10, 8, 8.4], [8, -5, 7.6], [16, 7, 6.8], [-14, -8, 7.2],
    [2, 2, 9.2], [18, -2, 6.4], [-18, 2, 7.0], [6, 14, 6.2],
    [12, 12, 5.8], [-6, -14, 6.6], [20, 6, 5.4], [-20, -6, 5.6],
    [4, -18, 6.0], [-8, -16, 5.6], [14, -12, 5.2],
    [-24, 4, 6.2], [24, 2, 6.0], [0, 18, 7.4], [10, -20, 6.4],
    [-12, 16, 6.6], [22, -10, 5.8], [-22, -12, 6.0], [28, 0, 5.2],
    [0, 0, 10.0], [-8, 4, 7.0], [10, 4, 7.2], [0, -8, 6.8],
  ], sage);
  turf(7.6, [
    [-4, 6, 3.6], [10, 2, 3.4], [-16, 10, 3.2], [16, -8, 3.0], [0, -10, 3.3],
    [6, -2, 4.0], [-10, -4, 3.8],
  ], sunLeaf);
  // Lower island — smaller clumps only
  turf(-30 + 3.8, [
    [-14, -28, 3.2], [-4, -34, 2.8], [-12, -18, 2.6], [2, -26, 2.2],
  ], sage);

  // Bushes spilling over both rims
  for (const [x, y, z, s] of [
    [18, 7.2, 4, 1.6], [-20, 7.0, 8, 1.5], [8, 6.6, -16, 1.8],
    [-12, 6.5, -14, 1.7], [22, 6.8, -4, 1.4], [-22, 6.7, -2, 1.5],
    [4, 6.4, -20, 1.9], [-6, 6.4, 16, 1.5], [14, 7.0, 10, 1.3],
    [-16, -26, -28, 1.4], [-2, -26, -36, 1.3],
  ]) {
    const parts = [];
    for (const [ox, oy, oz, k] of [[0, 0, 0, 1], [0.4, 0.1, 0.15, 0.7], [-0.35, 0.05, -0.12, 0.65]]) {
      const sg = new THREE.SphereGeometry(s * k, 6, 5);
      sg.scale(1.15, 0.55, 1.05);
      sg.translate(ox * s, oy * s, oz * s);
      parts.push(retagGeometry(sg, MAT.FOLIAGE));
    }
    const bsh = mesh(mergeGeos(parts, MAT.FOLIAGE), olive, MAT.FOLIAGE);
    bsh.position.set(x, y, z);
    g.add(bsh);
  }

  // Hanging roots and vines under overhangs
  const hang = [
    [ -10,  -6, 3.4, 24, 0.22], [ 12, -12, 3.0, 22, -0.18],
    [  6,  14, 2.6, 18, 0.28], [-18,  -4, 2.8, 20, -0.24],
    [ 16,   2, 2.4, 16, 0.16], [ -6, -18, 2.6, 18, 0.12],
    [-22,   8, 2.2, 15, -0.20], [ 10,  16, 2.0, 14, 0.24],
    [ 20,  -8, 2.2, 17, 0.14], [-14,  12, 2.0, 15, -0.16],
    [  2, -20, 2.4, 19, 0.10], [-24,   0, 2.0, 14, -0.18],
    // lower island
    [-16, -30, 2.0, 12, 0.16], [ -4, -42, 1.8, 11, -0.14],
    [-20, -36, 1.6, 10, 0.20], [ -8, -24, 1.5, 9, -0.12],
  ];
  for (const [x, z, r, h, lean] of hang) {
    const yBase = (z < -24 || (x < -12 && z < -22)) ? -42 : 2;
    const root = cone(r * 0.22, h, 7, earth, MAT.ROCK);
    root.rotation.x = Math.PI + lean;
    root.rotation.z = lean * 0.5;
    root.position.set(x, yBase - h * 0.15, z);
    g.add(root);
  }
  for (const [x, z, h, y0] of [
    [-20, 6, 20, 2], [18, -10, 18, 2], [10, 16, 16, 2], [-12, -18, 18, 2],
    [22, 4, 14, 2], [-16, 12, 16, 2], [8, -18, 15, 2], [-24, -4, 14, 2],
    [4, 18, 13, 2], [-8, 16, 14, 2],
    [-18, -32, 12, -42], [-2, -44, 11, -42], [-22, -36, 10, -42],
  ]) {
    const v = cyl(0.10, 0.16, h, 4, vine, MAT.FOLIAGE);
    v.position.set(x, y0 - h * 0.22, z);
    v.rotation.z = (x > 0 ? 0.16 : -0.16);
    g.add(v);
    const leaf = mesh(new THREE.SphereGeometry(1.05, 6, 5), moss, MAT.FOLIAGE);
    leaf.position.set(x * 0.98, y0 - h * 0.55, z);
    g.add(leaf);
  }

  function ruinArch(w, h, depth, c) {
    const shape = new THREE.Shape();
    shape.moveTo(-w / 2, 0);
    shape.lineTo(-w / 2, h);
    shape.lineTo(w / 2, h);
    shape.lineTo(w / 2, 0);
    shape.closePath();
    const hole = new THREE.Path();
    const aw = w * 0.28, ah = h * 0.62;
    hole.moveTo(-aw, 0.8);
    hole.lineTo(-aw, ah * 0.45);
    hole.absarc(0, ah * 0.45, aw, Math.PI, 0, true);
    hole.lineTo(aw, 0.8);
    hole.closePath();
    shape.holes.push(hole);
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth, bevelEnabled: true, bevelThickness: 0.28, bevelSize: 0.2, bevelSegments: 2, curveSegments: 8,
    });
    geo.translate(0, 0, -depth / 2);
    geo.computeVertexNormals();
    retagGeometry(geo, MAT.ROCK, 0);
    return new THREE.Mesh(geo, patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
      color: c, flatShading: false,
    })));
  }

  // Tall ruined aqueduct / colonnade on the upper crown, facing the SW camera.
  function colonnade(n, aw, wallH, depth, c, skip) {
    const totalW = n * aw;
    const shape = new THREE.Shape();
    shape.moveTo(-totalW / 2, 0);
    for (let i = 0; i <= n; i++) {
      const x = -totalW / 2 + aw * i;
      const broken = skip && (skip.has(i) || skip.has(i - 1));
      let hh = broken
        ? wallH * (0.42 + (i % 3) * 0.10)
        : wallH * (0.86 + 0.12 * Math.sin(i * 1.7) + ((i === 0 || i === n) ? -0.16 : 0.06));
      if (i > 0 && i < n && !broken) {
        shape.lineTo(x - aw * 0.16, hh * 0.90);
        shape.lineTo(x, hh);
        shape.lineTo(x + aw * 0.16, hh * 0.88);
      } else {
        shape.lineTo(x, hh);
      }
    }
    shape.lineTo(totalW / 2, 0);
    shape.closePath();
    for (let i = 0; i < n; i++) {
      if (skip && skip.has(i)) continue;
      const cx = -totalW / 2 + aw * (i + 0.5);
      const hole = new THREE.Path();
      const hw = aw * 0.32, hh = wallH * 0.62;
      hole.moveTo(cx - hw, 0.8);
      hole.lineTo(cx - hw, 0.8 + hh * 0.48);
      hole.absarc(cx, 0.8 + hh * 0.48, hw, Math.PI, 0, true);
      hole.lineTo(cx + hw, 0.8);
      hole.closePath();
      shape.holes.push(hole);
    }
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth, bevelEnabled: true, bevelThickness: 0.4, bevelSize: 0.28, bevelSegments: 2, curveSegments: 8,
    });
    geo.translate(0, 0, -depth / 2);
    geo.computeVertexNormals();
    retagGeometry(geo, MAT.ROCK, 0);
    return new THREE.Mesh(geo, patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
      color: c, flatShading: false,
    })));
  }
  // Real 3D stone ruins — columns, thick arches, cornices, broken masonry.
  const ruins = new THREE.Group();
  ruins.name = "keep-rock";
  function pier(h, r, c) {
    const grp = new THREE.Group();
    add(grp, cyl(r * 1.25, r * 1.4, 0.7, 8, c, MAT.ROCK), 0, 0.35, 0);
    add(grp, cyl(r, r * 1.06, Math.max(0.8, h - 1.3), 8, c, MAT.ROCK), 0, h * 0.5, 0);
    add(grp, cyl(r * 1.28, r * 1.12, 0.55, 8, c, MAT.ROCK), 0, h - 0.28, 0);
    return grp;
  }
  function thickArch(span, rise, depth, thick, c) {
    const hw = span / 2;
    const shape = new THREE.Shape();
    shape.moveTo(-hw - thick, 0);
    shape.lineTo(-hw - thick, rise * 0.42);
    shape.absarc(0, rise * 0.42, hw + thick, Math.PI, 0, true);
    shape.lineTo(hw + thick, 0);
    shape.lineTo(hw + thick * 0.2, 0);
    shape.lineTo(hw, 0.2);
    shape.lineTo(hw, rise * 0.42);
    shape.absarc(0, rise * 0.42, hw, 0, Math.PI, false);
    shape.lineTo(-hw, 0.2);
    shape.lineTo(-hw - thick * 0.2, 0);
    shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth, bevelEnabled: true, bevelThickness: 0.22, bevelSize: 0.16, bevelSegments: 2, curveSegments: 10,
    });
    geo.translate(0, 0, -depth / 2);
    geo.computeVertexNormals();
    retagGeometry(geo, MAT.ROCK, 0);
    return new THREE.Mesh(geo, patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
      color: c, flatShading: false,
    })));
  }
  function arcadeRow(n, spacing, colH, archRise, depth, c, skip) {
    const grp = new THREE.Group();
    const total = n * spacing;
    for (let i = 0; i <= n; i++) {
      const x = -total / 2 + i * spacing;
      if (skip && skip.has(i)) {
        const stub = pier(colH * (0.32 + (i % 3) * 0.1), 0.9, c);
        stub.position.x = x;
        grp.add(stub);
        add(grp, cyl(0.85, 0.85, 1.6, 8, c, MAT.ROCK), x + 1.15, 0.65, 1.35, 1.15, 0.3, 0.2);
        continue;
      }
      const col = pier(colH, 0.95, c);
      col.position.x = x;
      grp.add(col);
    }
    for (let i = 0; i < n; i++) {
      if (skip && skip.has(i)) continue;
      const arch = thickArch(spacing * 0.78, archRise, depth, 0.75, c);
      arch.position.set(-total / 2 + (i + 0.5) * spacing, colH - 0.15, 0);
      grp.add(arch);
    }
    add(grp, box(total + 2.2, 0.6, depth + 1.1, c, MAT.ROCK), 0, colH + archRise + 0.15, 0);
    add(grp, box(1.4, 1.05, 1.2, c, MAT.ROCK), total * 0.26, colH + archRise + 0.9, 0.2, 0.12, 0.18, 0.1);
    return grp;
  }
  const row0 = arcadeRow(6, 5.6, 9.4, 5.2, 3.8, stoneLt, new Set());
  const row1 = arcadeRow(5, 5.4, 8.6, 4.6, 3.5, stone, new Set([3]));
  row1.position.set(-1.0, 14.8, 0.35);
  const row2 = arcadeRow(4, 5.0, 7.4, 4.0, 3.2, stoneLt, new Set([0, 2]));
  row2.position.set(1.0, 27.6, 0.8);
  ruins.add(row0, row1, row2);
  ruins.position.set(-2, 6.8, -11);
  ruins.rotation.y = 0.16;
  g.add(ruins);

  const side = new THREE.Group();
  side.name = "keep-rock";
  side.add(arcadeRow(4, 5.0, 8.8, 4.6, 3.4, stone, new Set([1])));
  const sideU = arcadeRow(3, 4.8, 7.2, 3.8, 3.0, stone, new Set([2]));
  sideU.position.set(0, 13.6, 0.3);
  side.add(sideU);
  side.position.set(10, 6.8, 2);
  side.rotation.y = 1.05;
  g.add(side);

  // Cream-stone ruined turret (no tall dark brown pillar)
  function turret(h, c) {
    const tw = new THREE.Group();
    tw.name = "keep-rock";
    add(tw, cyl(3.1, 3.5, h, 10, c, MAT.ROCK), 0, h / 2, 0);
    add(tw, cyl(3.4, 3.3, 0.7, 10, c, MAT.ROCK), 0, 0.35, 0);
    add(tw, cyl(3.3, 3.0, 0.55, 10, c, MAT.ROCK), 0, h - 0.2, 0);
    const win = thickArch(2.4, 2.2, 1.6, 0.45, c);
    win.position.set(0, h * 0.42, 3.0);
    tw.add(win);
    for (let i = 0; i < 5; i++) {
      if (i === 2) continue;
      const a = (i / 5) * Math.PI * 2;
      add(tw, box(0.7, 1.05 + (i % 2) * 0.45, 0.7, c, MAT.ROCK), Math.cos(a) * 2.8, h + 0.55, Math.sin(a) * 2.8);
    }
    return tw;
  }
  const twL = turret(15.5, stoneLt);
  twL.position.set(-20, 6.8, -9);
  g.add(twL);
  // Short broken drum on the right, not a brown stick
  const stub = new THREE.Group();
  stub.name = "keep-rock";
  add(stub, cyl(2.3, 2.7, 5.8, 9, stone, MAT.ROCK), 0, 2.9, 0);
  add(stub, box(2.2, 1.1, 1.6, stoneLt, MAT.ROCK), 1.2, 5.6, 0.2, 0.25, 0.3, 0.1);
  stub.position.set(16, 6.8, -8);
  g.add(stub);
  const lintel = new THREE.Group();
  lintel.name = "keep-rock";
  add(lintel, box(7.5, 1.15, 2.0, stone, MAT.ROCK), 0, 0, 0, 0, 0.4, 0.18);
  lintel.position.set(10, 8.0, -6);
  g.add(lintel);

  function leafMass(s, col) {
    const parts = [];
    const blobs = [
      [0, 0, 0, 1.0, 0.48, 1.0],
      [0.55, 0.08, 0.22, 0.72, 0.38, 0.7],
      [-0.5, 0.06, -0.18, 0.68, 0.36, 0.66],
      [0.15, 0.22, -0.45, 0.6, 0.34, 0.62],
      [-0.2, 0.18, 0.48, 0.58, 0.32, 0.6],
      [0.35, -0.12, 0.1, 0.5, 0.28, 0.55],
      [-0.4, -0.08, 0.3, 0.48, 0.26, 0.5],
    ];
    for (const [x, y, z, sx, sy, sz] of blobs) {
      const sg = new THREE.SphereGeometry(s, 6, 5);
      sg.scale(sx, sy, sz);
      sg.rotateZ(x * 0.28);
      sg.rotateX(z * 0.22);
      sg.translate(x * s, y * s, z * s);
      parts.push(retagGeometry(sg, MAT.FOLIAGE));
    }
    return mesh(mergeGeos(parts, MAT.FOLIAGE), col, MAT.FOLIAGE);
  }

  // Trees and leafy masses draping the rims and ruins — big bright canopies, not dark dots
  const bigTrees = [
    [-14, 6.8, -4], [12, 6.8, 6], [-6, 6.8, 12], [8, 6.8, -10], [22, 6.8, -2],
  ];
  for (const [tx, ty0, tz] of bigTrees) {
    const tr = cyl(0.85, 1.25, 13, 7, 0x5a3a22, MAT.WOOD);
    tr.position.set(tx, ty0 + 6.4, tz);
    g.add(tr);
  }
  for (const [ox, oy, oz, r, col] of [
    [-14, 20.4, -4, 8.2, sunLeaf], [-10, 18.0, -2, 6.4, midLeaf], [-18, 17.8, -6, 6.2, midLeaf],
    [-12, 22.0, -6, 5.4, sunLeaf], [-16, 21.6, -1, 5.2, midLeaf],
    [12, 20.4, 6, 7.6, sunLeaf], [16, 18.2, 8, 5.8, midLeaf], [8, 18.0, 4, 5.6, midLeaf],
    [-6, 20.4, 12, 7.2, sunLeaf], [-2, 18.0, 14, 5.4, midLeaf], [-10, 17.8, 10, 5.2, midLeaf],
    [8, 20.4, -10, 7.0, sunLeaf], [12, 18.0, -12, 5.4, midLeaf], [4, 17.8, -8, 5.2, midLeaf],
    [22, 20.4, -2, 6.8, sunLeaf], [26, 18.0, 0, 5.0, midLeaf], [18, 17.8, -4, 5.0, midLeaf],
  ]) {
    const leaf = leafMass(r, col);
    leaf.position.set(ox, oy, oz);
    green.add(leaf);
  }
  for (const [x, z, s, y] of [
    [16, 8, 2.4, 6.8], [20, -4, 2.2, 6.8], [4, -16, 2.15, 6.8],
    [-22, 6, 2.2, 6.8], [-8, 16, 2.15, 6.8], [10, 14, 2.1, 6.8],
    [-18, -8, 2.1, 6.8], [8, -18, 2.0, 6.8],
    [26, 4, 2.05, 6.8], [-26, 0, 2.05, 6.8], [0, 20, 2.3, 6.8],
    [14, 18, 2.0, 6.8], [-14, 18, 2.0, 6.8], [22, -14, 1.9, 6.8],
    [0, -28, 1.8, -30 + 4.0], [-16, -34, 2.0, -30 + 4.0], [-8, -20, 1.7, -30 + 4.0],
  ]) {
    const t2 = cyl(0.28 * s, 0.44 * s, 5.4 * s, 5, 0x5a3a22, MAT.WOOD);
    t2.position.set(x, y + 2.6 * s, z);
    g.add(t2);
    const leaf = leafMass(3.6 * s, (s > 2.1 ? sunLeaf : midLeaf));
    leaf.position.set(x, y + 7.2 * s, z);
    green.add(leaf);
  }
  // Ivy draping the left turret and facade piers
  for (const [x, y, z, s] of [
    [-20, 14, -6, 1.6], [-19, 11, -6.5, 1.4], [-21, 9, -7, 1.3],
    [-8, 12, -12, 1.5], [6, 11, -12, 1.4], [-2, 20, -11, 1.35],
    [4, 24, -10, 1.3], [-14, 10, -10, 1.4],
    [16, 12, -7, 1.45], [12, 16, -9, 1.3], [-6, 18, -10, 1.35],
    [8, 22, -10, 1.2], [-16, 16, -8, 1.3], [2, 28, -9, 1.2],
    [-18, 8, -8, 1.5], [18, 9, -6, 1.4], [0, 8, -16, 1.7],
    [10, 8, 8, 1.45], [-12, 8, 10, 1.4], [22, 10, 0, 1.3],
  ]) {
    const iv = leafMass(s, midLeaf);
    iv.position.set(x, y, z);
    green.add(iv);
  }
  // Hanging masses on the south and side faces — a leafier silhouette
  for (const [x, y, z, s] of [
    [0, 2, -28, 3.6], [8, 0, -26, 3.2], [-8, 1, -27, 3.3],
    [16, 3, -22, 2.8], [-16, 2, -22, 2.8], [4, -8, -24, 2.7],
    [-20, 4, -18, 2.6], [22, 4, -16, 2.6], [10, -4, -20, 2.9],
    [-6, -10, -22, 2.8], [0, 5, 22, 3.2], [12, 1, 18, 2.6],
    [-12, 1, 18, 2.6], [18, -6, -14, 2.4], [-18, -6, -14, 2.4],
    [0, 6, -22, 3.0], [14, 5, -18, 2.4], [-14, 5, -18, 2.4],
  ]) {
    const hv = leafMass(s, sage);
    hv.position.set(x, y, z);
    green.add(hv);
  }
  g.add(green);

  const poolU = box(7, 0.3, 5, 0x2e8aaa, MAT.WATER_DEEP);
  poolU.position.set(6, 7.5, -10);
  g.add(poolU);
  const poolL = box(6, 0.28, 4.5, 0x2e8aaa, MAT.WATER_DEEP);
  poolL.position.set(-8, -30 + 4.0, -28);
  g.add(poolL);

  // Waterfalls — crossed cards, baked into ONE mesh (shared uTime).
  function fallCard(w, h, segs) {
    const a = new THREE.PlaneGeometry(w, h, 1, segs);
    const b = a.clone();
    b.rotateY(Math.PI / 2);
    return mergeGeos([a, b], MAT.WATERFALL);
  }
  const fallGeos = [];
  function placeFall(w, h, x, y, z, rotY, scale) {
    const geo = fallCard(w, h, 12);
    retagGeometry(geo, MAT.WATERFALL, 1);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, rotY, 0));
    m.compose(new THREE.Vector3(x, y, z), q, new THREE.Vector3(scale, scale, scale));
    geo.applyMatrix4(m);
    fallGeos.push(geo);
  }
  // Upper rim pours off the south edge, past the lower island, into mist
  placeFall(16, 36, 2, -8, -20, Math.PI + 0.08, 1.0);
  placeFall(14, 32, -8, -40, -36, Math.PI + 0.04, 1.0);
  placeFall(8, 20, 20, -6, -10, Math.PI * 0.55, 0.8);
  const fallGeo = mergeGeos(fallGeos, MAT.WATERFALL);
  retagGeometry(fallGeo, MAT.WATERFALL, 1);
  const fallMat = makeFallsMat();
  const falls = new THREE.Mesh(fallGeo, fallMat);
  falls.name = "falls";
  g.add(falls);
  g.userData.sheets = [falls];

  const mistMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
    color: 0xe8f2f8, emissive: 0xd8e8f0, emissiveIntensity: 0.35, flatShading: false,
  }));
  mistMat.userData.matId = MAT.CLOUD;
  const mistGeo = retagGeometry(new THREE.SphereGeometry(1, 8, 6), MAT.CLOUD);
  const mist = new THREE.InstancedMesh(mistGeo, mistMat, 8);
  mist.name = "mist";
  const md = new THREE.Object3D();
  [
    [-6, -58, -40, 5.2], [2, -62, -38, 4.0], [-10, -60, -42, 3.8],
    [0, -24, -26, 2.6], [6, -28, -24, 2.2],
    [20, -16, -10, 2.2], [18, -20, -8, 1.7],
    [-4, -68, -36, 3.2],
  ].forEach((s, i) => {
    md.position.set(s[0], s[1], s[2]);
    md.scale.set(s[3] * 1.25, s[3] * 0.42, s[3] * 1.25);
    md.updateMatrix();
    mist.setMatrixAt(i, md.matrix);
  });
  mist.instanceMatrix.needsUpdate = true;
  mist.count = 8;
  g.add(mist);

  return g;
}



function mergeIsleDecor(root) {
  const geos = [];
  root.updateMatrixWorld(true);
  root.traverse((o) => {
    if (!o.isMesh || !o.geometry) return;
    const g = o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    if (!g.getAttribute("normal")) g.computeVertexNormals();
    const pos = g.getAttribute("position");
    const col = new Float32Array(pos.count * 3);
    const existing = g.getAttribute("color");
    const mc = o.material && o.material.color ? o.material.color : null;
    for (let i = 0; i < pos.count; i++) {
      if (existing) {
        col[i * 3] = existing.getX(i);
        col[i * 3 + 1] = existing.getY(i);
        col[i * 3 + 2] = existing.getZ(i);
      } else if (mc) {
        col[i * 3] = mc.r; col[i * 3 + 1] = mc.g; col[i * 3 + 2] = mc.b;
      } else {
        col[i * 3] = 0.45; col[i * 3 + 1] = 0.55; col[i * 3 + 2] = 0.32;
      }
    }
    g.setAttribute("color", new THREE.BufferAttribute(col, 3));
    geos.push(g);
  });
  let n = 0;
  for (const g of geos) n += g.getAttribute("position").count;
  const pos = new Float32Array(n * 3);
  const nrm = new Float32Array(n * 3);
  const col = new Float32Array(n * 3);
  const idx = [];
  let base = 0;
  for (const g of geos) {
    const p = g.getAttribute("position");
    const nn = g.getAttribute("normal");
    const cc = g.getAttribute("color");
    for (let i = 0; i < p.count; i++) {
      pos[(base + i) * 3] = p.getX(i);
      pos[(base + i) * 3 + 1] = p.getY(i);
      pos[(base + i) * 3 + 2] = p.getZ(i);
      if (nn) {
        nrm[(base + i) * 3] = nn.getX(i);
        nrm[(base + i) * 3 + 1] = nn.getY(i);
        nrm[(base + i) * 3 + 2] = nn.getZ(i);
      }
      if (cc) {
        col[(base + i) * 3] = cc.getX(i);
        col[(base + i) * 3 + 1] = cc.getY(i);
        col[(base + i) * 3 + 2] = cc.getZ(i);
      }
    }
    if (g.index) {
      const ia = g.index.array;
      for (let i = 0; i < ia.length; i++) idx.push(ia[i] + base);
    } else {
      for (let i = 0; i < p.count; i++) idx.push(base + i);
    }
    base += p.count;
    g.dispose();
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("normal", new THREE.BufferAttribute(nrm, 3));
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  geo.setIndex(idx);
  retagGeometry(geo, MAT.GRASS, 0);
  const mat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: false }));
  const mesh = new THREE.Mesh(geo, mat);
  mesh.userData.matId = MAT.GRASS;
  mesh.name = "sister-isles";
  return mesh;
}


function makeSisterIsles(H) {
  const root = new THREE.Group();
  root.name = "sister-isles";
  const batch = new THREE.Group();
  batch.add(buildIsleGround("mailCay", 58));
  batch.add(buildIsleGround("cedarIsle", 64));

  function palmAt(x, z, s = 1) {
    const y = Math.max(H(x, z), 0.4);
    add(batch, cyl(0.16 * s, 0.28 * s, 6.4 * s, 6, 0x6a4a28, MAT.WOOD), x, y + 3.2 * s, z);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const fr = new THREE.ConeGeometry(0.52 * s, 3.5 * s, 4);
      fr.rotateX(1.18);
      fr.rotateY(a);
      const m = mesh(retagGeometry(fr, MAT.FOLIAGE), (i % 2) ? 0x3a7a28 : 0x4e8c34, MAT.FOLIAGE);
      m.position.set(x + Math.cos(a) * 0.2 * s, y + 6.4 * s, z + Math.sin(a) * 0.2 * s);
      batch.add(m);
    }
  }
  function pineAt(x, z, s = 1) {
    const y = Math.max(H(x, z), 0.4);
    add(batch, cyl(0.20 * s, 0.32 * s, 5.4 * s, 5, 0x4a3020, MAT.WOOD), x, y + 2.7 * s, z);
    for (const [yy, r, col] of [[5.6, 2.35, 0x2e5a24], [7.5, 1.85, 0x3a6a2c], [9.1, 1.25, 0x2a4e20]]) {
      const cn = mesh(retagGeometry(new THREE.ConeGeometry(r * s, 3.3 * s, 6), MAT.FOLIAGE), col, MAT.FOLIAGE);
      cn.position.set(x, y + yy * s, z);
      batch.add(cn);
    }
  }
  function oliveAt(x, z, s = 1) {
    const y = Math.max(H(x, z), 0.4);
    add(batch, cyl(0.18 * s, 0.28 * s, 3.5 * s, 5, 0x5a4030, MAT.WOOD), x, y + 1.75 * s, z);
    for (const [ox, oy, oz, ss, col] of [
      [0, 3.7, 0, 1.35, 0x6a7a3a], [1.05, 3.4, 0.4, 0.95, 0x5c6e32],
      [-1.0, 3.5, -0.3, 0.9, 0x748446], [0.3, 4.35, -0.75, 0.78, 0x6a7a3a],
    ]) {
      const m = mesh(retagGeometry(new THREE.SphereGeometry(ss * s, 6, 5), MAT.FOLIAGE), col, MAT.FOLIAGE);
      m.position.set(x + ox * s, y + oy * s, z + oz * s);
      batch.add(m);
    }
  }
  function fence(x0, z0, x1, z1, posts = 5) {
    const len = Math.hypot(x1 - x0, z1 - z0) || 1;
    for (let i = 0; i <= posts; i++) {
      const t = i / posts;
      const x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t;
      add(batch, box(0.11, 1.1, 0.11, 0x6a4a28, MAT.WOOD), x, H(x, z) + 0.55, z);
    }
    const rail = box(len, 0.08, 0.08, 0x6a4a28, MAT.WOOD);
    const mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
    rail.position.set(mx, H(mx, mz) + 0.82, mz);
    rail.rotation.y = Math.atan2(x1 - x0, z1 - z0);
    batch.add(rail);
  }

  // ----- South Mail Cay village -----
  const cay = ISLES.mailCay;
  // Grass strip markers (the ground already flattens the runway)
  add(batch, box(108, 0.05, 0.28, 0xf4ead0, MAT.ROAD), cay.x, 12.55, cay.z - 5.0);
  add(batch, box(108, 0.05, 0.28, 0xf4ead0, MAT.ROAD), cay.x, 12.55, cay.z + 5.0);
  const cayWalls = [0xfbf6ea, 0xf2c14e, 0xd4e4f0, 0xf4c4b0, 0xe8d0a0];
  const cayRoofs = [0xc45a3a, 0xa8422c, 0x8a3a22, 0xcc6a44, 0xb4482e];
  const cottages = [
    [cay.x - 28, cay.z + 24, 0],
    [cay.x - 10, cay.z + 26, 0.08],
    [cay.x + 8,  cay.z + 25, -0.06],
    [cay.x + 26, cay.z + 23, 0.12],
    [cay.x - 8,  cay.z + 38, 0.4],
    [cay.x + 18, cay.z + 38, -0.2],
    [cay.x - 22, cay.z + 12, 0.15],
  ];
  cottages.forEach(([x, z, ry], i) => {
    const hs = house(7.0, 6.0, 4.4 + (i % 2) * 0.5, 2.15, cayWalls[i], cayRoofs[i], true, i % 4);
    hs.position.set(x, H(x, z), z);
    hs.rotation.y = ry;
    batch.add(hs);
  });
  fence(cay.x - 36, cay.z + 18, cay.x + 34, cay.z + 17, 8);
  fence(cay.x - 36, cay.z + 18, cay.x - 38, cay.z + 44, 4);
  // Mail post + flag (static, merged)
  add(batch, cyl(0.14, 0.16, 6.2, 6, 0x3a2a1a, MAT.WOOD), cay.x + 8, H(cay.x + 8, cay.z + 10) + 3.1, cay.z + 10);
  add(batch, box(1.6, 0.9, 0.08, 0xc01418, MAT.ROOF), cay.x + 8.85, H(cay.x + 8, cay.z + 10) + 5.6, cay.z + 10);
  // Jetty into the north cove
  const jx = cay.x - 42, jz = cay.z + 52;
  add(batch, box(5.2, 0.85, 26, 0x7a5a32, MAT.WOOD), jx, 1.35, jz);
  for (let k = 0; k < 4; k++) {
    add(batch, box(0.34, 2.1, 0.34, 0x5a4020, MAT.WOOD), jx - 2.1, 0.4, jz - 8 + k * 7);
    add(batch, box(0.34, 2.1, 0.34, 0x5a4020, MAT.WOOD), jx + 2.1, 0.4, jz - 8 + k * 7);
  }
  const skiff = makeSailboat(0xc45a3a);
  skiff.name = "isle-skiff";
  skiff.position.set(jx - 7, 0.45, jz + 4);
  skiff.rotation.y = 0.6;
  skiff.scale.setScalar(0.85);
  batch.add(skiff);
  const skiff2 = makeSailboat(0xf4ead0);
  skiff2.name = "isle-skiff";
  skiff2.position.set(jx + 8, 0.45, jz - 6);
  skiff2.rotation.y = -0.4;
  skiff2.scale.setScalar(0.72);
  batch.add(skiff2);
  // Mini lighthouse on the west hook (no beam — stays inside the merge)
  const lx = cay.x - 78, lz = cay.z - 8;
  const ly = Math.max(H(lx, lz), 2.2);
  const ls = 0.26;
  add(batch, cyl(5.4 * ls, 6.2 * ls, 4.2 * ls, 10, 0x8a8070, MAT.ROCK), lx, ly + 2.1 * ls, lz);
  add(batch, cyl(3.1 * ls, 3.9 * ls, 20 * ls, 12, 0xf8f4ea, MAT.BUILDING), lx, ly + 12 * ls, lz);
  add(batch, cyl(3.4 * ls, 3.7 * ls, 3.4 * ls, 12, 0xd01418, MAT.ROOF), lx, ly + 7 * ls, lz);
  add(batch, cyl(3.2 * ls, 3.4 * ls, 3.4 * ls, 12, 0xd01418, MAT.ROOF), lx, ly + 14.5 * ls, lz);
  add(batch, cyl(2.3 * ls, 2.3 * ls, 2.6 * ls, 8, 0xfff4c0, MAT.LIGHT), lx, ly + 22 * ls, lz);
  add(batch, cone(3.8 * ls, 2.5 * ls, 8, 0xd01418, MAT.ROOF), lx, ly + 24.2 * ls, lz);
  // Palms along the rim, olives near the cottages
  for (const [ox, oz, s] of [
    [-62, -8, 1.15], [-50, 22, 1.05], [48, 10, 1.2], [58, -18, 0.95],
    [30, -36, 1.1], [-22, -40, 1.0], [62, 28, 0.9], [-8, 50, 0.85],
  ]) palmAt(cay.x + ox, cay.z + oz, s);
  for (const [ox, oz, s] of [[-20, 14, 0.95], [16, 14, 1.05], [36, 32, 0.85]]) oliveAt(cay.x + ox, cay.z + oz, s);
  // Crates / nets on the quay
  add(batch, box(1.4, 1.1, 1.4, 0x8a6238, MAT.WOOD), jx + 1.6, 2.3, jz - 4);
  add(batch, box(1.2, 0.9, 1.2, 0x7a5a32, MAT.WOOD), jx - 1.2, 2.2, jz - 5.2);
  // Clothesline and a vegetable patch near the cottages
  add(batch, box(0.08, 1.6, 0.08, 0x5a3a22, MAT.WOOD), cay.x + 4, H(cay.x + 4, cay.z + 32) + 0.8, cay.z + 32);
  add(batch, box(0.08, 1.6, 0.08, 0x5a3a22, MAT.WOOD), cay.x + 14, H(cay.x + 14, cay.z + 33) + 0.8, cay.z + 33);
  add(batch, box(10.2, 0.7, 0.06, 0xf4f0e6, MAT.ROOF), cay.x + 9, H(cay.x + 9, cay.z + 32.5) + 1.55, cay.z + 32.5);
  add(batch, box(6.5, 0.12, 4.2, 0x5a7a32, MAT.FOLIAGE), cay.x - 16, H(cay.x - 16, cay.z + 20) + 0.08, cay.z + 20);

  // ----- Cedar Isle: grove, chapel, west cliffs, falls -----
  const ced = ISLES.cedarIsle;
  // Rock outcrops seated on the west cliff — lumpy boulders, not cubic blocks
  for (const [ox, oz, sx, sy, sz, col, ry] of [
    [-92, 8, 16, 9, 13, 0xd4cbb8, 0.35],
    [-84, -16, 13, 7.5, 11, 0xc8bca8, -0.4],
    [-100, -4, 12, 7, 11, 0xb8aa94, 0.7],
    [-76, 20, 11, 6.5, 9, 0xd0c6b4, -0.25],
    [-68, -8, 8.5, 5.5, 8, 0x9a8c78, 0.55],
    [-96, 18, 7, 4.2, 6.5, 0xc4b8a4, 0.15],
    [-88, -6, 6.2, 3.6, 5.8, 0xaea090, -0.6],
  ]) {
    const x = ced.x + ox, z = ced.z + oz;
    add(batch, boulder(sx, sy, sz, col, MAT.ROCK), x, H(x, z) + sy * 0.18, z, 0.12, ry, 0.08);
  }
  const chap = house(8.5, 7.2, 6.2, 3.4, 0xf6f0e4, 0xb84a32, true, 1);
  const cx = ced.x + 6, cz = ced.z - 8;
  chap.position.set(cx, H(cx, cz), cz);
  chap.rotation.y = -0.35;
  batch.add(chap);
  add(batch, cyl(0.8, 0.9, 7.5, 8, 0xf6f0e4, MAT.BUILDING), cx, H(cx, cz) + 9.2, cz);
  add(batch, cone(2.4, 2.8, 4, 0xb84a32, MAT.ROOF), cx, H(cx, cz) + 14.2, cz);
  // Pines and olives around the crown and east terrace
  for (let i = 0; i < 22; i++) {
    const a = i * 0.62 + 0.15, r = 22 + (i % 6) * 11;
    const x = ced.x + Math.cos(a) * r, z = ced.z + Math.sin(a) * r * 0.78;
    const y = H(x, z);
    if (y < 12) continue;
    const s = 0.95 + (i % 5) * 0.18;
    if (i % 4 === 0) oliveAt(x, z, s * 0.9);
    else pineAt(x, z, s);
  }
  // East jetty + a skiff in the lee
  const ejx = ced.x + 110, ejz = ced.z + 20;
  add(batch, box(4.4, 0.7, 16, 0x7a5a32, MAT.WOOD), ejx, 1.2, ejz);
  const skiff3 = makeSailboat(0x3a6a88);
  skiff3.name = "isle-skiff";
  skiff3.position.set(ejx + 7, 0.45, ejz - 4);
  skiff3.rotation.y = 1.2;
  skiff3.scale.setScalar(0.8);
  batch.add(skiff3);
  // Low stone wall along the east terrace
  for (let i = 0; i < 8; i++) {
    const x = ced.x + 40 + i * 6, z = ced.z + 18;
    add(batch, box(5.4, 0.85, 0.55, 0xc8bca8, MAT.ROCK), x, H(x, z) + 0.4, z);
  }
  // Stone stair down the east apron and a small shed by the chapel
  for (let i = 0; i < 6; i++) {
    const x = ced.x + 28 + i * 4.2, z = ced.z + 4 + i * 1.6;
    add(batch, box(3.6, 0.35, 1.6, 0xc8bca8, MAT.ROCK), x, H(x, z) + 0.12, z);
  }
  const shed = house(5.4, 4.8, 3.4, 1.8, 0xf2ead8, 0x8a3a22, true, 4);
  shed.position.set(ced.x + 18, H(ced.x + 18, ced.z + 6), ced.z + 6);
  shed.rotation.y = 0.4;
  batch.add(shed);

  // Waterfall chute on the NW notch — lips merge, crossed veil reads from every heading
  const fx = ced.x - 88, fz = ced.z - 40;
  const fy = Math.max(H(ced.x - 58, ced.z - 26), 30);
  add(batch, boulder(7.2, 3.2, 4.4, 0xd4cbb8, MAT.ROCK), ced.x - 58, fy - 0.4, ced.z - 26, 0.15, 0.2, 0.05);
  add(batch, boulder(5.0, 4.4, 3.6, 0xb8aa94, MAT.ROCK), ced.x - 66, fy - 3.4, ced.z - 32, 0.1, -0.18, 0.08);
  add(batch, boulder(4.0, 5.2, 3.2, 0x9a8c78, MAT.ROCK), ced.x - 74, fy - 7.6, ced.z - 36, 0.12, 0.14, 0.04);
  for (const [ox, oz, s] of [[-2, 8, 2.1], [2, 10, 1.7], [-5, 9, 1.5], [0, 12, 1.8]]) {
    const sp = mesh(retagGeometry(new THREE.SphereGeometry(s, 6, 5), MAT.FOAM), 0xf2f7fc, MAT.FOAM);
    sp.position.set(fx + ox, 1.6, fz + oz);
    sp.scale.set(1, 0.45, 1);
    batch.add(sp);
  }

  root.add(mergeIsleDecor(batch));

  const cardA = new THREE.PlaneGeometry(12.5, 40, 1, 24);
  const cardB = cardA.clone();
  cardB.rotateY(Math.PI / 2);
  const sheetGeo = mergeGeos([cardA, cardB], MAT.WATERFALL);
  retagGeometry(sheetGeo, MAT.WATERFALL, 1);
  const sheet = new THREE.Mesh(sheetGeo, makeFallsMat());
  sheet.name = "falls";
  sheet.position.set(fx, fy - 16, fz);
  sheet.rotation.y = -Math.PI * 0.72;
  root.add(sheet);
  root.userData.sheets = [sheet];
  return root;
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


function keepRockMat() {
  const mat = triplanarLambert({
    map: loadTex("keep_rock.png"),
    scale: 0.09,
    color: 0xf7f2ea,
    vertexColors: true,
    flatShading: true,
    matId: MAT.ROCK,
  });
  mat.userData.matId = MAT.ROCK;
  return mat;
}

function keepLeafMat() {
  const mat = triplanarLambert({
    map: loadTex("leaf.png"),
    scale: 0.16,
    color: 0xf2ffd8,
    vertexColors: true,
    flatShading: false,
    matId: MAT.FOLIAGE,
  });
  mat.emissive = new THREE.Color(0x2a5818);
  mat.emissiveIntensity = 0.28;
  mat.userData.matId = MAT.FOLIAGE;
  return mat;
}

function mergeNamed(group, name, material, meshName) {
  const items = [];
  const toRemove = [];
  group.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(group.matrixWorld).invert();
  group.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh) return;
    let n = o, hit = false;
    while (n) {
      if (n.name === name) { hit = true; break; }
      n = n.parent;
    }
    if (!hit) return;
    const g = o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    g.applyMatrix4(inv);
    const col = o.material && o.material.color ? o.material.color : new THREE.Color(0xffffff);
    const vc = g.getAttribute("color");
    const p = g.getAttribute("position");
    if (!vc) {
      const colors = new Float32Array(p.count * 3);
      for (let i = 0; i < p.count; i++) {
        colors[i * 3] = col.r; colors[i * 3 + 1] = col.g; colors[i * 3 + 2] = col.b;
      }
      g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    }
    items.push(g);
    toRemove.push(o);
  });
  for (const o of toRemove) { if (o.parent) o.parent.remove(o); }
  if (!items.length) return null;
  const geo = mergeGeos(items, MAT.ROCK);
  // mergeGeos drops color; stitch it back so triplanar * vertex tint is not black.
  let nVert = 0;
  for (const g of items) nVert += g.getAttribute("position").count;
  const colors = new Float32Array(nVert * 3);
  let base = 0;
  for (const g of items) {
    const p = g.getAttribute("position");
    const vc = g.getAttribute("color");
    for (let i = 0; i < p.count; i++) {
      colors[(base + i) * 3] = vc ? vc.getX(i) : 1;
      colors[(base + i) * 3 + 1] = vc ? vc.getY(i) : 1;
      colors[(base + i) * 3 + 2] = vc ? vc.getZ(i) : 1;
    }
    base += p.count;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  retagGeometry(geo, material.userData.matId || MAT.ROCK, 0);
  const mesh = new THREE.Mesh(geo, material);
  mesh.name = meshName || name;
  mesh.userData.matId = material.userData.matId;
  group.add(mesh);
  return mesh;
}

function mergeVertexColors(group, skipNames = new Set(), meshName = "keep-merged") {
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
  mesh.name = meshName;
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



function makeWestCapeCliffs(H) {
  // Vertical cream-grey limestone face on the west (lighthouse) cape.
  const positions = [], colors = [], indices = [];
  function vert(x, y, z, shade, grass) {
    const i = positions.length / 3;
    positions.push(x, y, z);
    const stripe = Math.sin(x * 0.55 + y * 0.35) + 0.5 * Math.sin((x - y) * 0.8 + z * 0.2);
    const hatch = stripe > 0.5 ? 0.78 : stripe > 0.15 ? 0.88 : stripe > -0.2 ? 0.95 : 1;
    const n = 0.04 * Math.sin(x * 0.2 + z * 0.16);
    let r, g, b;
    if (grass) { r = 0.34 + n; g = 0.46 + n * 0.5; b = 0.24; }
    else if (shade) { r = 0.62 * hatch + n; g = 0.58 * hatch + n * 0.7; b = 0.48 * hatch + n * 0.4; }
    else { r = 0.88 * hatch + n; g = 0.82 * hatch + n * 0.7; b = 0.66 * hatch + n * 0.4; }
    colors.push(Math.min(1, r), Math.min(1, g), Math.min(1, b));
    return i;
  }
  const pts = [];
  for (let x = -360; x <= 80; x += 3.5) {
    const nearArch = Math.abs(x - LANDMARKS.arch.x) < 14;
    let zLand = null, h = 0;
    for (let z = -1360; z <= -1140; z += 4) {
      const hh = H(x, z);
      if (hh > 3.5) { zLand = z; h = hh; break; }
    }
    if (zLand == null) continue;
    if (nearArch) continue; // leave the sea-arch window open
    const jag = 3.5 * Math.sin(x * 0.09) + 2.2 * Math.sin(x * 0.21);
    pts.push({ x, z: zLand - 1.4 + jag * 0.35, h: Math.min(42, Math.max(10, h)), jag });
  }
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1];
    if (Math.hypot(b.x - a.x, b.z - a.z) > 28) continue;
    const y0 = 0.2;
    // Nearly vertical face, two shelves so it is not a single card
    const midA = a.h * 0.42, midB = b.h * 0.42;
    const i0 = vert(a.x, y0, a.z - 0.8, true, false);
    const i1 = vert(a.x, midA, a.z + 0.6 + a.jag * 0.08, true, false);
    const i2 = vert(b.x, y0, b.z - 0.8, true, false);
    const i3 = vert(b.x, midB, b.z + 0.6 + b.jag * 0.08, true, false);
    indices.push(i0, i2, i1, i1, i2, i3);
    const i4 = vert(a.x, midA - 0.2, a.z + 0.8, false, false);
    const i5 = vert(a.x, a.h * 0.96, a.z + 3.4, false, false);
    const i6 = vert(b.x, midB - 0.2, b.z + 0.8, false, false);
    const i7 = vert(b.x, b.h * 0.96, b.z + 3.4, false, false);
    indices.push(i4, i6, i5, i5, i6, i7);
    // Green lip
    const i8 = vert(a.x, a.h * 0.96, a.z + 3.4, false, true);
    const i9 = vert(a.x, a.h + 0.6, a.z + 8.0, false, true);
    const i10 = vert(b.x, b.h * 0.96, b.z + 3.4, false, true);
    const i11 = vert(b.x, b.h + 0.6, b.z + 8.0, false, true);
    indices.push(i8, i10, i9, i9, i10, i11);
  }
  if (!indices.length) return null;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  retagGeometry(geo, MAT.ROCK, 0);
  const mesh = new THREE.Mesh(geo, patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
    vertexColors: true, flatShading: false,
  })));
  mesh.userData.matId = MAT.ROCK;
  mesh.name = "west-cape-cliffs";
  const group = new THREE.Group();
  group.name = "west-cape-cliffs";
  group.add(mesh);
  // Leafy tufts on the south face and lip — never dark disks on the plateau.
  const parts = [];
  for (let i = 0; i < pts.length; i += 2) {
    const p = pts[i];
    const blobs = [
      [p.x, p.h * 0.72, p.z - 1.6, 1.6],
      [p.x + 1.2, p.h * 0.88, p.z + 1.2, 1.35],
      [p.x - 0.8, p.h * 0.55, p.z - 2.2, 1.15],
    ];
    if (i % 4 === 0) blobs.push([p.x, p.h + 0.4, p.z + 5.5, 1.5]);
    for (const [x, y, z, s] of blobs) {
      const sg = new THREE.SphereGeometry(s, 6, 5);
      sg.scale(1.25, 0.42, 1.05);
      sg.translate(x, y, z);
      parts.push(retagGeometry(sg, MAT.FOLIAGE));
    }
  }
  if (parts.length) {
    const foliage = new THREE.Mesh(
      mergeGeos(parts, MAT.FOLIAGE),
      patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x4a7a38, flatShading: false }))
    );
    foliage.userData.matId = MAT.FOLIAGE;
    foliage.name = "cape-green";
    group.add(foliage);
  }
  return group;
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
    const base = shade ? [0.78, 0.72, 0.56] : [0.90, 0.85, 0.70];
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
  const mat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: false }));
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
      patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x3d6a34, flatShading: false })),
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
  const houseColors = [0xfbf6ea, 0xf4e4c4, 0xe8d0a0, 0xfff8ec, 0xecd8b0, 0xf8f1dc, 0xe6c98a];
  const roofColors = [0xc45a3a, 0xa8422c, 0xd26540, 0x8a3a22, 0xcc6a44, 0x9a4a28, 0xb45630];
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
          if (rnd() < 0.16) { farList.push({ kind: "gap", x: jx, y: hgt, z: jz }); hi++; continue; }
          const w = 5.6 + rnd() * 3.4, d = 5.2 + rnd() * 2.2, hh = 3.6 + rnd() * 3.4, rh = 1.6 + rnd() * 2.4;
          const h = house(w, d, hh, rh, houseColors[hi % 7], roofColors[hi % 7], true, hi % 4);
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
          if (rnd() < 0.50) { farList.push({ kind: "gap", x: jx, y: hgt, z: jz }); hi++; continue; }
          const wallsFar = [0xfbf6ea, 0xf0d8a8, 0xe2c07a, 0xfff8ec, 0xd4b07c, 0xe8d0a0, 0xf6e6c8];
          const roofsFar = [0xc45a3a, 0xa8422c, 0xd26540, 0x8a3a22, 0xcc6a44, 0xb45630, 0x9a4a28];
          farList.push({ x: jx, y: hgt, z: jz, yaw, s: 0.78 + rnd() * 0.34, hs: 0.72 + rnd() * 0.85, wall: wallsFar[hi % 7], roof: roofsFar[hi % 7], hip: (hi % 3 === 0) });
          hi++;
        }
      }
    }
  }
  if (farList.length) {
    const houses = farList.filter((f) => f.kind !== "gap");
    const gaps = farList.filter((f) => f.kind === "gap");
    const farWallGeo = retagGeometry(new THREE.BoxGeometry(6.2, 4.6, 6.0), MAT.BUILDING, 0);
    const farRoofGeo = retagGeometry(gableRoofGeo(6.2, 6.0, 2.7), MAT.ROOF, 0);
    const farHipGeo = retagGeometry(gableRoofGeo(6.2, 6.0, 1.6), MAT.ROOF, 0);
    const farWallMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: false }));
    farWallMat.userData.matId = MAT.BUILDING;
    const farRoofMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: false }));
    farRoofMat.userData.matId = MAT.ROOF;
    const nGable = houses.filter((f) => !f.hip).length || 1;
    const nHip = houses.filter((f) => f.hip).length || 1;
    const farWalls = new THREE.InstancedMesh(farWallGeo, farWallMat, houses.length);
    const farRoofs = new THREE.InstancedMesh(farRoofGeo, farRoofMat, nGable);
    const farHips = new THREE.InstancedMesh(farHipGeo, farRoofMat, nHip);
    farWalls.name = "far-house";
    farRoofs.name = "far-house";
    farHips.name = "far-house";
    farWalls.userData.matId = MAT.BUILDING;
    farRoofs.userData.matId = MAT.ROOF;
    farHips.userData.matId = MAT.ROOF;
    const dummyF = new THREE.Object3D();
    const wc = new THREE.Color();
    const rc = new THREE.Color();
    let gi = 0, hi2 = 0;
    houses.forEach((f, i) => {
      const hs = f.hs || 1;
      dummyF.position.set(f.x, f.y + 2.3 * f.s * hs, f.z);
      dummyF.rotation.set(0, f.yaw, 0);
      dummyF.scale.set(f.s, f.s * hs, f.s);
      dummyF.updateMatrix();
      farWalls.setMatrixAt(i, dummyF.matrix);
      farWalls.setColorAt(i, wc.setHex(f.wall || 0xf6efe0));
      dummyF.position.set(f.x, f.y + 4.6 * f.s * hs, f.z);
      dummyF.scale.set(f.s, f.s, f.s);
      dummyF.updateMatrix();
      if (f.hip) {
        farHips.setMatrixAt(hi2, dummyF.matrix);
        farHips.setColorAt(hi2, rc.setHex(f.roof || 0xb85a3c));
        hi2++;
      } else {
        farRoofs.setMatrixAt(gi, dummyF.matrix);
        farRoofs.setColorAt(gi, rc.setHex(f.roof || 0xb85a3c));
        gi++;
      }
    });
    farWalls.count = houses.length;
    farRoofs.count = gi;
    farHips.count = hi2;
    farWalls.instanceMatrix.needsUpdate = true;
    farRoofs.instanceMatrix.needsUpdate = true;
    farHips.instanceMatrix.needsUpdate = true;
    if (farWalls.instanceColor) farWalls.instanceColor.needsUpdate = true;
    if (farRoofs.instanceColor) farRoofs.instanceColor.needsUpdate = true;
    if (farHips.instanceColor) farHips.instanceColor.needsUpdate = true;
    group.add(farWalls, farRoofs, farHips);
    // Trees and garden bushes in the gaps, following the terraces
    if (gaps.length) {
      function farCanopy(kind) {
        const trunk = new THREE.CylinderGeometry(0.18, 0.28, 3.4, 5);
        trunk.translate(0, 1.7, 0);
        const parts = [retagGeometry(trunk, MAT.WOOD)];
        if (kind === "umbrella") {
          const a = new THREE.SphereGeometry(1.7, 6, 5);
          a.scale(1.35, 0.4, 1.35);
          a.translate(0, 5.2, 0);
          const b = new THREE.SphereGeometry(0.9, 5, 4);
          b.scale(1.1, 0.38, 1.1);
          b.translate(1.1, 5.15, 0.25);
          parts.push(retagGeometry(a, MAT.FOLIAGE), retagGeometry(b, MAT.FOLIAGE));
        } else if (kind === "olive") {
          const a = new THREE.SphereGeometry(1.15, 6, 5);
          a.scale(1.15, 0.7, 1.1);
          a.translate(0, 4.2, 0);
          const b = new THREE.SphereGeometry(0.8, 5, 4);
          b.scale(1.1, 0.62, 1.0);
          b.translate(0.85, 4.1, 0.35);
          parts.push(retagGeometry(a, MAT.FOLIAGE), retagGeometry(b, MAT.FOLIAGE));
        } else {
          const c = new THREE.ConeGeometry(0.95, 3.6, 7);
          c.translate(0, 3.6, 0);
          const d = new THREE.ConeGeometry(0.65, 2.8, 7);
          d.translate(0, 5.8, 0);
          const e = new THREE.ConeGeometry(0.32, 1.8, 6);
          e.translate(0, 7.4, 0);
          parts.push(retagGeometry(c, MAT.FOLIAGE), retagGeometry(d, MAT.FOLIAGE), retagGeometry(e, MAT.FOLIAGE));
        }
        return mergeGeos(parts, MAT.FOLIAGE);
      }
      const cypressGaps = gaps.filter((_, i) => i % 3 === 0);
      const umbGaps = gaps.filter((_, i) => i % 3 === 1);
      const olvGaps = gaps.filter((_, i) => i % 3 === 2);
      const tmat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x3a6a30, flatShading: false, vertexColors: false }));
      tmat.userData.matId = MAT.FOLIAGE;
      function placeTrees(geo, list, sx, sy, sz) {
        if (!list.length) return null;
        const inst = new THREE.InstancedMesh(geo, tmat, list.length);
        inst.name = "far-house";
        inst.userData.matId = MAT.FOLIAGE;
        list.forEach((f, i) => {
          dummyF.position.set(f.x, f.y, f.z);
          dummyF.rotation.set(0, f.yaw || 0, 0);
          const s = 1.45 + (i % 5) * 0.2;
          dummyF.scale.set(s * sx, s * sy, s * sz);
          dummyF.updateMatrix();
          inst.setMatrixAt(i, dummyF.matrix);
        });
        inst.instanceMatrix.needsUpdate = true;
        group.add(inst);
        return inst;
      }
      placeTrees(farCanopy("cone"), cypressGaps, 0.7, 1.25, 0.7);
      placeTrees(farCanopy("umbrella"), umbGaps, 1.15, 1.0, 1.15);
      placeTrees(farCanopy("olive"), olvGaps, 1.05, 0.95, 1.05);
      const bparts = [];
      for (const [ox, oy, oz, k] of [[0, 0.3, 0, 1], [0.55, 0.2, 0.25, 0.7], [-0.45, 0.15, -0.2, 0.65]]) {
        const sg = new THREE.SphereGeometry(1.0 * k, 6, 5);
        sg.scale(1.2, 0.55, 1.1);
        sg.translate(ox, oy, oz);
        bparts.push(retagGeometry(sg, MAT.FOLIAGE));
      }
      const bgeo = mergeGeos(bparts, MAT.FOLIAGE);
      const bmat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x3a5a28, flatShading: false }));
      bmat.userData.matId = MAT.FOLIAGE;
      const farBush = new THREE.InstancedMesh(bgeo, bmat, gaps.length);
      farBush.name = "far-house";
      gaps.forEach((f, i) => {
        dummyF.position.set(f.x + 2.2, f.y + 0.4, f.z + 1.4);
        dummyF.rotation.set(0, f.yaw || 0, 0);
        dummyF.scale.set(1.4, 0.85, 1.3);
        dummyF.updateMatrix();
        farBush.setMatrixAt(i, dummyF.matrix);
      });
      farBush.instanceMatrix.needsUpdate = true;
      group.add(farBush);
    }
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
    // cloth / flowers skipped this pass to recover two hero draws (target ~135).
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
    [200, -820, 48, 0.9, 0],
    [320, -640, 36, 0.9, 0.4],
    [-40, -700, 40, 0.9, -0.2],
    [60, -480, 28, 0.9, 0.3],
    [140, -740, 32, 0.9, 0.18],
    [260, -700, 40, 0.9, -0.12],
    [80, -620, 36, 0.9, 0.55],
    [180, -560, 44, 0.9, 0.08],
    [300, -560, 30, 0.9, -0.4],
    [40, -800, 34, 0.9, 0.22],
    [240, -480, 28, 0.9, 0.3],
    [-20, -560, 26, 0.9, -0.5],
    [100, -360, 32, 0.9, 0.15],
    [220, -380, 28, 0.9, -0.25],
    [360, -720, 24, 0.9, 0.6],
    [160, -660, 22, 0.9, 1.2],
    [280, -800, 26, 0.9, 0.9],
  ];
  for (const [hx, hz, len, th, yaw] of hedges) {
    const nSeg = Math.max(2, Math.round(len / 7));
    for (let i = 0; i < nSeg; i++) {
      const t = (i + 0.5) / nSeg - 0.5;
      const px = hx + Math.cos(yaw) * t * len;
      const pz = hz + Math.sin(yaw) * t * len;
      const h0 = H(px, pz);
      const h1 = H(px + Math.cos(yaw) * 3, pz + Math.sin(yaw) * 3);
      if (h0 < 4 || h0 > 90) continue;
      if (Math.abs(h1 - h0) > 4.5) continue;
      const hedge = box(len / nSeg + 0.35, 1.7, th, 0x355428, MAT.FOLIAGE);
      hedge.position.set(px, h0 + 0.85, pz);
      hedge.rotation.y = yaw;
      group.add(hedge);
    }
  }

  // Harbor: stone quay on the south bank of the canal, colourful facades facing the water
  const hx = LANDMARKS.harbor.x, hz = LANDMARKS.harbor.z;
  const shoreZ = -1198;
  const quayStone = 0xd8d0c2, quayDk = 0xb8b0a2, quayPav = 0xc8c0b0;
  // Sea wall along the south waterline, facing the canal
  add(group, box(150, 8.2, 3.2, quayStone, MAT.ROCK), hx, 1.6, shoreZ);
  add(group, box(148, 0.45, 16, quayPav, MAT.ROAD), hx, 5.55, shoreZ - 6.0);
  // Mid terrace stepping up the bank toward the houses
  add(group, box(140, 0.4, 8, quayPav, MAT.ROAD), hx, 8.6, shoreZ - 16);
  for (let x = hx - 72; x <= hx + 72; x += 8) {
    add(group, box(7.5, 0.32, 3.2, quayDk, MAT.ROCK), x, 5.82, shoreZ);
  }
  // Steps up the bank toward the houses, and down to the water
  for (const sx of [hx - 40, hx + 40]) {
    for (let s = 0; s < 6; s++) {
      add(group, box(4.4, 0.26, 1.3, quayStone, MAT.ROCK), sx, 4.0 + s * 1.15, shoreZ - 8.5 - s * 1.15);
    }
    for (let s = 0; s < 5; s++) {
      add(group, box(4.4, 0.26, 1.25, quayStone, MAT.ROCK), sx + 8, 3.8 - s * 0.7, shoreZ + 1.2 + s * 1.1);
    }
  }
  // Wooden finger piers into the canal (north)
  for (const px of [hx - 52, hx - 26, hx + 26, hx + 52]) {
    add(group, box(6.2, 1.15, 28, 0x7a5a32, MAT.WOOD), px, 1.55, shoreZ + 16);
    for (let k = 0; k < 3; k++) {
      add(group, box(0.4, 2.5, 0.4, 0x5a4020, MAT.WOOD), px - 2.5, 0.5, shoreZ + 6 + k * 8);
      add(group, box(0.4, 2.5, 0.4, 0x5a4020, MAT.WOOD), px + 2.5, 0.5, shoreZ + 6 + k * 8);
    }
  }
  // Colourful facades on the hill, facing the canal (north)
  const facades = [
    [0xfbf6ea, 0xc45a3a], [0xf2c14e, 0xa8422c], [0xe8d0a0, 0xd26540],
    [0xd4e4f0, 0x8a3a22], [0xf4c4b0, 0xb4482e], [0xf8f1dc, 0xcc6a44],
    [0xe6c98a, 0x9a4a28], [0xcfe0d4, 0xa8422c], [0xf0d8c0, 0xc45a3a],
  ];
  for (let i = 0; i < 9; i++) {
    const x = hx - 72 + i * 18;
    const z = shoreZ - 16;
    const w = 8.2 + (i % 3) * 0.7, d = 7.0, hh = 5.2 + (i % 4) * 0.65, rh = 2.1 + (i % 3) * 0.55;
    const hs = house(w, d, hh, rh, facades[i][0], facades[i][1], true, i % 4);
    hs.position.set(x, Math.max(H(x, z), 8.8), z);
    hs.rotation.y = 0;
    group.add(hs);
  }
  // Fish hall near the harbor beacon on the hill
  {
    const fx = hx + 8, fz = hz - 4;
    add(group, box(14, 5.6, 9.2, 0xe8d8b8, MAT.BUILDING), fx, H(fx, fz) + 2.8, fz);
    add(group, box(15.2, 0.4, 10.2, 0xa8422c, MAT.ROOF), fx, H(fx, fz) + 5.7, fz);
    add(group, box(2.2, 2.4, 0.3, 0x2a3540, MAT.METAL), fx - 4, H(fx, fz) + 3.4, fz + 4.8);
    add(group, box(2.2, 2.4, 0.3, 0x2a3540, MAT.METAL), fx + 4, H(fx, fz) + 3.4, fz + 4.8);
  }
  // Lamp posts along the walk
  for (let i = 0; i < 8; i++) {
    const lx = hx - 70 + i * 20;
    add(group, cyl(0.13, 0.15, 5.4, 6, 0x2c2c2a, MAT.METAL), lx, 8.25, shoreZ - 3.5);
    add(group, box(0.72, 0.55, 0.72, 0xf0d878, MAT.METAL), lx, 11.05, shoreZ - 3.5);
  }
  // Net racks
  for (const nx of [hx - 60, hx - 12, hx + 18, hx + 58]) {
    add(group, box(0.14, 2.6, 0.14, 0x5a4020, MAT.WOOD), nx - 1.6, 5.5, shoreZ - 3.2);
    add(group, box(0.14, 2.6, 0.14, 0x5a4020, MAT.WOOD), nx + 1.6, 5.5, shoreZ - 3.2);
    add(group, box(3.4, 0.1, 0.1, 0x5a4020, MAT.WOOD), nx, 6.6, shoreZ - 3.2);
    add(group, box(3.2, 1.8, 0.06, 0x3a4a40, MAT.METAL), nx, 5.6, shoreZ - 3.2);
  }
  // Light dressing on the north bank of the canal (town/runway side) — wall, lamps, no houses on the runway
  add(group, box(160, 4.2, 2.2, quayStone, MAT.ROCK), hx + 20, 2.2, -1114);
  for (let i = 0; i < 6; i++) {
    const lx = hx - 50 + i * 28;
    add(group, cyl(0.13, 0.15, 5.0, 6, 0x2c2c2a, MAT.METAL), lx, 7.4, -1108);
    add(group, box(0.65, 0.5, 0.65, 0xf0d878, MAT.METAL), lx, 10.0, -1108);
  }
  const boats = [];
  const moorX = [hx - 52, hx - 26, hx + 4, hx + 26, hx + 52];
  for (let i = 0; i < 5; i++) {
    const b = makeBoat([0xc05030, 0x2a6cb6, 0xe8e0c8, 0x3a8a5a, 0xc08020][i]);
    b.position.set(moorX[i], 0.45, shoreZ + 18 + (i % 2) * 6);
    b.rotation.y = (i % 2 === 0 ? 0.08 : -0.08);
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
    [160, -1360, 0xf7f2e4, 1.4], [-80, -1380, 0xe8dcc0, 3.1], [110, -1310, 0xf0e6d0, 5.2],
    [-220, -1340, 0xf4efe4, 2.6], [200, -1410, 0xe8dcc0, 0.3],
  ];
  for (const [x, z, col, a0] of coastal) {
    const b = makeSailboat(col);
    b.position.set(x, 0.45, z);
    b.rotation.y = -0.55;
    b.scale.setScalar(1.7 + (Math.abs(x) % 70) / 80);
    b.userData.cruise = { cx: x, cz: z, rx: 36, rz: 20, a: a0, spd: 0.07 };
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

  // Cape fort removed — the cover's west headland is a terraced village, not a second castle.

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
  mergeVertexColors(arch, new Set());
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
    { x: LANDMARKS.harbor.x + 80, y: 8, z: -1230 },
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
  // Narrow farm tracks breaking up the mid-island meadows
  const farmTracks = [
    [{ x: 200, y: 8, z: -820 }, { x: 320, y: 10, z: -640 }, 2.6],
    [{ x: 80, y: 8, z: -700 }, { x: 180, y: 10, z: -560 }, 2.4],
    [{ x: 40, y: 8, z: -800 }, { x: -20, y: 10, z: -560 }, 2.4],
    [{ x: 240, y: 8, z: -480 }, { x: 360, y: 10, z: -720 }, 2.5],
    [{ x: 100, y: 8, z: -360 }, { x: 220, y: 10, z: -380 }, 2.3],
    [{ x: 160, y: 8, z: -660 }, { x: 160, y: 8, z: -820 }, 2.4],
  ];
  for (const [a, b, w] of farmTracks) group.add(makeRoad(a, b, w, H));

  // Extra décor between missions — chapels, footbridges, dock life, orchards.
  function makeWaysideChapel() {
    const g = new THREE.Group();
    add(g, box(5.4, 4.6, 7.2, 0xf6f0e4, MAT.BUILDING), 0, 2.3, 0);
    const roof = mesh(new THREE.ConeGeometry(5.2, 3.4, 4), 0xb84a32, MAT.ROOF);
    roof.rotation.y = Math.PI / 4;
    roof.position.set(0, 6.3, 0);
    g.add(roof);
    add(g, box(1.8, 3.6, 1.8, 0xf6f0e4, MAT.BUILDING), 0, 6.6, -2.4);
    add(g, cone(1.6, 2.2, 4, 0xb84a32, MAT.ROOF), 0, 9.4, -2.4);
    add(g, box(0.22, 1.6, 0.22, 0xf4f0e6, MAT.METAL), 0, 10.7, -2.4);
    add(g, box(0.9, 0.22, 0.22, 0xf4f0e6, MAT.METAL), 0, 11.3, -2.4);
    add(g, box(1.4, 2.2, 0.28, 0x5a3a20, MAT.WOOD), 0, 1.2, 3.65);
    return g;
  }
  function makeFootbridge(len, yaw) {
    const g = new THREE.Group();
    add(g, box(len, 0.35, 2.4, 0x6a4a28, MAT.WOOD), 0, 1.4, 0);
    add(g, box(len, 0.7, 0.16, 0x9a8a72, MAT.ROCK), 0, 2.0, 1.15);
    add(g, box(len, 0.7, 0.16, 0x9a8a72, MAT.ROCK), 0, 2.0, -1.15);
    add(g, box(1.1, 2.8, 1.1, 0x8a7a62, MAT.ROCK), -len * 0.46, 1.0, 0);
    add(g, box(1.1, 2.8, 1.1, 0x8a7a62, MAT.ROCK), len * 0.46, 1.0, 0);
    g.rotation.y = yaw;
    return g;
  }
  const chapels = [
    { x: -80, z: -720, yaw: 0.3 },
    { x: 360, z: -480, yaw: -0.2 },
    { x: -320, z: -200, yaw: 0.5 },
    { x: 80, z: -200, yaw: -0.4 },
  ];
  for (const c of chapels) {
    const y = H(c.x, c.z);
    if (y < 8) continue;
    const ch = makeWaysideChapel();
    ch.position.set(c.x, y, c.z);
    ch.rotation.y = c.yaw;
    group.add(ch);
  }
  const bridges = [
    [40, -860, 16, 0.2],
    [280, -760, 14, -0.4],
    [-140, -640, 15, 0.5],
  ];
  for (const [x, z, len, yaw] of bridges) {
    const br = makeFootbridge(len, yaw);
    br.position.set(x, H(x, z), z);
    group.add(br);
  }
  // Harbor dock dressing — crates, barrels, bollards on the south-bank walk
  for (let i = 0; i < 14; i++) {
    const cx = hx - 70 + i * 10, cz = shoreZ - 3.2 - (i % 3) * 1.6;
    add(group, box(1.6 + (i % 3) * 0.4, 1.15, 1.3, (i % 2) ? 0x6a4a28 : 0x8a6230, MAT.WOOD), cx, 6.2, cz, 0, (i % 5) * 0.2, 0);
  }
  for (let i = 0; i < 8; i++) {
    add(group, cyl(0.55, 0.6, 1.15, 8, 0x5a3a1a, MAT.WOOD), hx - 64 + i * 18, 6.2, shoreZ - 5.0);
    add(group, cyl(0.28, 0.32, 0.95, 6, 0x8a8a82, MAT.METAL), hx - 70 + i * 20, 5.9, shoreZ + 1.2);
  }
  // Extra market stalls filling the square
  for (let i = 0; i < 5; i++) {
    const st = makeMarketStall(rnd);
    const x = LANDMARKS.market.x - 10 + (i % 3) * 7;
    const z = LANDMARKS.market.z - 10 + Math.floor(i / 3) * 7;
    st.position.set(x, H(x, z), z);
    st.rotation.y = 0.3 + i * 0.15;
    group.add(st);
  }
  // Orchards and a second vineyard (merged foliage/wood)
  const orchards = [
    { x: 420, z: -560, n: 18, yaw: 0.2 },
    { x: -40, z: -500, n: 14, yaw: -0.15 },
    { x: 200, z: -360, n: 16, yaw: 0.4 },
  ];
  for (const o of orchards) {
    for (let i = 0; i < o.n; i++) {
      const col = i % 6, row = Math.floor(i / 6);
      const x = o.x + col * 7 * Math.cos(o.yaw) - row * 8 * Math.sin(o.yaw);
      const z = o.z + col * 7 * Math.sin(o.yaw) + row * 8 * Math.cos(o.yaw);
      const y = H(x, z);
      if (y < 6) continue;
      add(group, cyl(0.22, 0.32, 2.4, 5, 0x5a3a22, MAT.WOOD), x, y + 1.2, z);
      const oparts = [];
      for (const [ox, oy, oz, k] of [[0, 0, 0, 1], [0.7, 0.05, 0.3, 0.72], [-0.6, 0.08, -0.25, 0.68], [0.15, 0.35, -0.55, 0.6]]) {
        const sg = new THREE.SphereGeometry(1.55 * k, 6, 5);
        sg.scale(1.15, 0.7, 1.1);
        sg.translate(ox * 1.55, oy * 1.55, oz * 1.55);
        oparts.push(retagGeometry(sg, MAT.FOLIAGE));
      }
      const canopy = mesh(mergeGeos(oparts, MAT.FOLIAGE), (i % 2) ? 0x6a7a44 : 0x5a6a38, MAT.FOLIAGE);
      canopy.position.set(x, y + 3.15, z);
      group.add(canopy);
    }
  }
  // Vine rows as low foliage strips (second ridge + mill hills)
  for (const [vx, vz, len, yaw] of [
    [470, -620, 36, 0.15], [478, -608, 36, 0.15], [486, -596, 36, 0.15],
    [300, -840, 28, 0.4], [308, -828, 28, 0.4],
    [140, -520, 24, -0.2], [148, -508, 24, -0.2],
  ]) {
    const row = box(len, 1.15, 1.4, 0x3a5a28, MAT.FOLIAGE);
    row.position.set(vx, H(vx, vz) + 0.7, vz);
    row.rotation.y = yaw;
    group.add(row);
  }
  // Town street walls / low garden walls
  for (const [x, z, len, yaw] of [
    [LANDMARKS.town.x - 20, LANDMARKS.town.z + 8, 28, 0.1],
    [LANDMARKS.town.x + 16, LANDMARKS.town.z - 6, 22, 1.2],
    [LANDMARKS.town.x + 4, LANDMARKS.town.z + 24, 18, 0.05],
    [LANDMARKS.harbor.x - 10, LANDMARKS.harbor.z + 18, 24, 0],
  ]) {
    const w = box(len, 1.25, 0.45, 0x9a8a72, MAT.ROCK);
    w.position.set(x, H(x, z) + 0.55, z);
    w.rotation.y = yaw;
    group.add(w);
  }
  // A couple more fishing boats at east cove and the lagoon mouth
  for (const [x, z, col, a0] of [
    [LANDMARKS.eastCove.x - 20, LANDMARKS.eastCove.z + 10, 0xf0e6d0, 1.1],
    [LANDMARKS.eastCove.x + 16, LANDMARKS.eastCove.z - 8, 0xe8dcc0, 2.6],
    [LANDMARKS.lagoon.x + 40, LANDMARKS.lagoon.z + 20, 0xf4efe4, 0.7],
  ]) {
    const b = makeSailboat(col);
    b.position.set(x, 0.45, z);
    b.rotation.y = -0.4;
    b.scale.setScalar(1.45);
    b.userData.cruise = { cx: x, cz: z, rx: 24, rz: 16, a: a0, spd: 0.06 };
    group.add(b);
    boats.push(b);
  }

  const hangingKeep = makeHangingKeep();
  hangingKeep.name = "hanging-keep";
  hangingKeep.position.set(LANDMARKS.hangingKeep.x, 280, LANDMARKS.hangingKeep.z);
  hangingKeep.rotation.y = 0.22;
  hangingKeep.scale.setScalar(2.15);
  mergeVertexColors(hangingKeep, new Set(["falls", "mist", "keep-rock", "keep-green"]));
  mergeNamed(hangingKeep, "keep-rock", keepRockMat(), "keep-rock");
  mergeNamed(hangingKeep, "keep-green", keepLeafMat(), "keep-green");
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
  // Terraced cream-stone / terracotta village on the west cape, like the cover.
  {
    const walls = [0xfbf6ea, 0xf4e4c4, 0xe8d0a0, 0xfff8ec, 0xecd8b0, 0xe6c98a];
    const roofs = [0xc45a3a, 0xb4482e, 0xd26540, 0xa8422c, 0x9a3a28, 0xcc6a44];
    const bands = [
      { z: -1172, x0: -230, x1: -90, plot: 9.2, near: true },
      { z: -1196, x0: -240, x1: -100, plot: 8.6, near: true },
      { z: -1218, x0: -220, x1: -110, plot: 8.2, near: false },
      { z: -1236, x0: -200, x1: -120, plot: 7.8, near: false },
    ];
    let hi = 0;
    const blockedCape = (x, z) => {
      if (Math.hypot(x - LANDMARKS.lighthouse.x, z - LANDMARKS.lighthouse.z) < 18) return true;
      if (Math.hypot(x - LANDMARKS.arch.x, z - LANDMARKS.arch.z) < 22) return true;
      if (H(x, z) < 8) return true;
      return false;
    };
    for (const b of bands) {
      for (let x = b.x0 + b.plot * 0.5; x < b.x1; x += b.plot) {
        const jx = x + ((hi * 13) % 7) * 0.12 - 0.4;
        const jz = b.z + ((hi * 9) % 5) * 0.16 - 0.3;
        if (blockedCape(jx, jz)) { hi++; continue; }
        const hgt = H(jx, jz);
        const w = 5.0 + (hi % 7) * 0.55, d = 4.8 + (hi % 5) * 0.45;
        const hh = 3.4 + (hi % 6) * 0.7, rh = 1.9 + (hi % 4) * 0.35;
        const hs = house(w, d, hh, rh, walls[hi % 6], roofs[hi % 6], b.near || (hi % 3 === 0), hi % 4);
        hs.position.set(jx, hgt, jz);
        hs.rotation.y = Math.PI + ((hi % 5) - 2) * 0.04;
        group.add(hs);
        hi++;
      }
    }
    // Small stone arch on the lower cape (not the inland viaduct)
    {
      const shape = new THREE.Shape();
      shape.moveTo(-8, 0); shape.lineTo(-8, 11); shape.lineTo(8, 11); shape.lineTo(8, 0); shape.closePath();
      const hole = new THREE.Path();
      hole.moveTo(-4.2, 0.2); hole.lineTo(-4.2, 5.2); hole.absarc(0, 5.2, 4.2, Math.PI, 0, true); hole.lineTo(4.2, 0.2); hole.closePath();
      shape.holes.push(hole);
      const geo = new THREE.ExtrudeGeometry(shape, { depth: 6, bevelEnabled: true, bevelThickness: 0.3, bevelSize: 0.2, bevelSegments: 1, curveSegments: 8 });
      geo.translate(0, 0, -3);
      retagGeometry(geo, MAT.ROCK, 0);
      const mesh = new THREE.Mesh(geo, patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0xd8ccb0, flatShading: false })));
      mesh.userData.matId = MAT.ROCK;
      const bxx = -128, bzz = -1232;
      mesh.position.set(bxx, H(bxx, bzz), bzz);
      mesh.rotation.y = 0.15;
      group.add(mesh);
    }
    // Cypress along the lip
    const pineMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x1e3a22, flatShading: true }));
    pineMat.userData.matId = MAT.FOLIAGE;
    const trunkMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0x5a3a22, flatShading: true }));
    trunkMat.userData.matId = MAT.WOOD;
    for (const [cx, cz, s] of [
      [-90, -1168, 1.3], [-150, -1164, 1.15], [-200, -1170, 1.4],
      [-80, -1190, 1.05], [-240, -1184, 1.2], [-110, -1210, 0.95],
      [-175, -1200, 1.1], [-60, -1176, 1.25],
    ]) {
      const hy = H(cx, cz);
      if (hy < 8) continue;
      const tr = new THREE.Mesh(retagGeometry(new THREE.CylinderGeometry(0.18 * s, 0.28 * s, 2.2 * s, 5), MAT.WOOD, 0), trunkMat);
      tr.position.set(cx, hy + 1.1 * s, cz);
      group.add(tr);
      const pne = new THREE.Mesh(retagGeometry(new THREE.ConeGeometry(1.15 * s, 7.5 * s, 7), MAT.FOLIAGE, 0), pineMat);
      pne.position.set(cx, hy + 2.2 * s + 3.6 * s, cz);
      group.add(pne);
    }
  }
  const H2 = (x, z) => Math.max(H(x, z), isleHeightAt(x, z));
  const sister = makeSisterIsles(H2);
  group.add(sister);
  const isleSheets = sister.userData.sheets || [];
  mergeStatic(group, new Set(["blades", "beam", "mist", "falls", "foam", "flag", "lantern", "smoke", "lava", "sock", "steamer", "boat", "winlight", "hangar-roof", "rwyLamp", "rwyGlow", "far-house", "laundry", "garden", "hanging-keep", "keep-merged", "keep-rock", "arch"]));
  {
    const cliffs = makeCoastalCliffs(H);
    const west = makeWestCapeCliffs(H);
    if (west) cliffs.add(west);
    mergeVertexColors(cliffs, new Set(["cape-green"]), "cliffs-merged");
    group.add(cliffs);
  }

  // keep boat meshes (they bob)
  scene.add(group);

  return {
    group, hangar, tower, church, light, pier, wreck, bridge, castle, mills, arch, cave, falls, hangingKeep, boats, windsock, winInst, chimneys, flagPoles,
    _isleSheets: isleSheets,
    _windKt: 6,
    _storm: false,
    setWind(kt, storm) {
      this._windKt = kt ?? this._windKt;
      this._storm = !!storm;
    },
    update(dt, time, hour, night, camera) {
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
            const u = (time * 0.28 + i * 0.11) % 1;
            dummy.position.set(Math.sin(time * 0.7 + i) * u * 1.4, u * 9.5, Math.cos(time * 0.5 + i) * u * 0.9);
            dummy.rotation.set(0, 0, 0);
            dummy.scale.setScalar(0.9 + u * 2.4);
            dummy.updateMatrix();
            sm.setMatrixAt(i, dummy.matrix);
          }
          sm.instanceMatrix.needsUpdate = true;
          if (sm.material) sm.material.opacity = 0.68;
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
      if (this._isleSheets) {
        for (const sh of this._isleSheets) {
          if (sh.material && sh.material.uniforms && sh.material.uniforms.uTime) {
            sh.material.uniforms.uTime.value = time;
          }
          sh.visible = true;
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
