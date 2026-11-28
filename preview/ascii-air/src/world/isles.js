/** Off-map sister isles — height queries for landing, placement, and meshes. */
import * as THREE from "three";
import { MAT } from "../core/config.js";
import { retagGeometry, patchMaterialIdAlpha } from "../render/idMaterial.js";
import { fbm, valueNoise } from "./noise.js";

export const ISLES = {
  mailCay:   { x: 260,  z: -2280, rx: 95,  rz: 72,  h: 16, name: "South Mail Cay" },
  cedarIsle: { x: 1980, z: -380,  rx: 138, rz: 108, h: 58, name: "Cedar Isle" },
};

/** Shoreline wrinkle used by both height and the water foam shader. */
export function isleWrinkle(kind, ang) {
  if (kind === "cay") return 1 + 0.16 * Math.sin(ang * 3 + 0.4) + 0.07 * Math.sin(ang * 5 - 0.8);
  return 1 + 0.18 * Math.sin(ang * 2.2 + 0.2) + 0.08 * Math.sin(ang * 4.1 + 1.1);
}

function cayHeight(x, z) {
  const i = ISLES.mailCay;
  const lx = x - i.x, lz = z - i.z;
  const ang = Math.atan2(lz, lx);
  const wr = isleWrinkle("cay", ang);
  const dx = lx / (i.rx * wr), dz = lz / (i.rz * wr);
  const r2 = dx * dx + dz * dz;
  if (r2 >= 1.02) return -99;
  const fall = Math.max(0, 1 - r2);
  const n = fbm(x * 0.035, z * 0.035, 4, 21);
  // North cove (jetty side) dips slightly; west hook is rockier.
  const cove = Math.max(0, Math.cos(ang - 1.15)) * 0.22;
  let h;
  if (fall > 0.30) {
    // Grassy plateau, almost flat along the east-west strip.
    h = 11.4 + (fall - 0.30) * 6.2;
    h += (n - 0.5) * 1.15;
    // Keep the landing strip itself very even.
    if (Math.abs(lz) < 14 && Math.abs(lx) < 68) h = 12.4 + (n - 0.5) * 0.15;
  } else if (fall > 0.12) {
    h = 4.2 + (fall - 0.12) * 40;
    h += (n - 0.5) * 1.6;
  } else {
    h = fall * fall * 28;
  }
  h -= cove * 3.4;
  // A low terrace on the south lip
  if (lz > 18 && fall > 0.18 && fall < 0.45) h = Math.max(h, 6.5 + (n - 0.4) * 1.2);
  return h;
}

function cedarHeight(x, z) {
  const i = ISLES.cedarIsle;
  const lx = x - i.x, lz = z - i.z;
  const ang = Math.atan2(lz, lx);
  const wr = isleWrinkle("cedar", ang);
  // Steeper west face (cliffs), gentler east apron.
  const west = lx < 0 ? 0.86 : 1.12;
  const dx = lx / (i.rx * wr * west), dz = lz / (i.rz * wr);
  const r2 = dx * dx + dz * dz;
  if (r2 >= 1.03) return -99;
  const fall = Math.max(0, 1 - r2);
  const n = fbm(x * 0.022, z * 0.022, 4, 44);
  const rid = fbm(x * 0.06, z * 0.06, 3, 9);
  let h = Math.pow(fall, 1.15) * i.h;
  h += (n - 0.5) * 6.5;
  // West cliff: a sharper drop, plus a stepped ledge
  if (lx < -20 && fall > 0.08) {
    const ledge = lx < -70 ? 0.55 : 0.82;
    h *= ledge;
    h += Math.max(0, 10 - Math.abs(lx + 82)) * 0.35;
  }
  // Mid terrace on the east slope
  if (lx > 20 && fall > 0.28 && fall < 0.62) {
    h = Math.max(h, 24 + (n - 0.5) * 2.4);
  }
  // Waterfall notch on the north-west shoulder
  const nx = lx + 70, nz = lz + 36;
  const notch = Math.exp(-(nx * nx + nz * nz) * 0.00115);
  h -= notch * 11;
  // Soft grassy dome on the very crown only — keep the west wall as a cliff.
  if (fall > 0.68) {
    const t = Math.min(1, (fall - 0.68) / 0.22);
    const dome = 50 + t * 8 + (n - 0.5) * 2.0 + (rid - 0.5) * 1.2;
    const blend = t * t * (3 - 2 * t);
    h = h * (1 - blend) + dome * blend;
  }
  h += (rid - 0.5) * 1.2;
  return Math.max(0.05, h);
}

export function isleHeightAt(x, z) {
  const a = cayHeight(x, z);
  const b = cedarHeight(x, z);
  const m = a > b ? a : b;
  return m;
}

export function isleNormalAt(x, z) {
  const e = 1.6;
  const h = isleHeightAt(x, z);
  if (h < -1) return null;
  const dx = isleHeightAt(x + e, z) - isleHeightAt(x - e, z);
  const dz = isleHeightAt(x, z + e) - isleHeightAt(x, z - e);
  const n = { x: -dx, y: 2 * e, z: -dz };
  const len = Math.hypot(n.x, n.y, n.z) || 1;
  return { x: n.x / len, y: n.y / len, z: n.z / len };
}

/** Painterly displaced ground for one isle. Vertex colours carry sand, grass mottling and rock strata. */
export function buildIsleGround(kind, segs = 56) {
  const i = ISLES[kind];
  const pad = 1.12;
  const geo = new THREE.PlaneGeometry(i.rx * 2 * pad, i.rz * 2 * pad, segs, Math.max(28, Math.floor(segs * 0.75)));
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const sand = new THREE.Color(0xf0e2b0);
  const sandWet = new THREE.Color(0xd8c48a);
  const grassA = new THREE.Color(0x6ea84a);
  const grassB = new THREE.Color(0x4e7c32);
  const grassC = new THREE.Color(0x8ab85a);
  const grassD = new THREE.Color(0xc2c25a);
  const grassE = new THREE.Color(0x2f5c24);
  const grassF = new THREE.Color(0x9bcc68);
  const dirt = new THREE.Color(0x8a6a3a);
  const dirtWet = new THREE.Color(0x6a5230);
  const rockA = new THREE.Color(0xd4cbb8);
  const rockB = new THREE.Color(0xb8aa94);
  const rockC = new THREE.Color(0x9a8c78);
  const bloomY = new THREE.Color(0xe8d46a);
  const bloomP = new THREE.Color(0xd48a9a);
  const bloomW = new THREE.Color(0xe8f0c8);
  const heather = new THREE.Color(0x7a6a4a);
  const tmp = new THREE.Color();
  for (let k = 0; k < pos.count; k++) {
    const lx = pos.getX(k), lz = pos.getZ(k);
    const x = i.x + lx, z = i.z + lz;
    let h = isleHeightAt(x, z);
    if (h < -1) h = -0.4;
    pos.setY(k, Math.max(-0.2, h));
  }
  geo.computeVertexNormals();
  const nrm = geo.attributes.normal;
  for (let k = 0; k < pos.count; k++) {
    const x = i.x + pos.getX(k), z = i.z + pos.getZ(k);
    const h = pos.getY(k);
    const ny = nrm.getY(k);
    const n = fbm(x * 0.05, z * 0.05, 4, 7);
    const plot = valueNoise(x * 0.08, z * 0.08, 31);
    // Dirt track hints — jetty to the houses, and a chapel walk on Cedar.
    let path = 0;
    if (kind === "mailCay") {
      const toJet = Math.abs((z + 2280) - 0.35 * (x - 220)) < 3.4 && x < 280 && x > 200;
      const along = Math.abs(z + 2258) < 2.6 && Math.abs(x - 260) < 48;
      const toWell = Math.abs(z + 2260) < 2.0 && x > 240 && x < 270;
      if (toJet || along || toWell) path = 1;
    } else {
      const spiral = Math.abs(Math.hypot(x - 1980, z + 380) - 36) < 3.4 && h > 28;
      const toJet = Math.abs((z + 360) - 0.18 * (x - 1986)) < 2.8 && x > 1980 && x < 2090 && h > 4;
      const toHamlet = Math.abs((z + 392) - 0.4 * (x - 1986)) < 2.4 && x > 1984 && x < 2020 && h > 16;
      if (spiral || toJet || toHamlet) path = 1;
    }
    if (h < 0.15) {
      tmp.copy(sandWet);
    } else if (h < 2.4 || (h < 4.5 && ny < 0.72)) {
      tmp.copy(sand).lerp(sandWet, 1 - Math.min(1, h / 2.4));
      tmp.lerp(grassA, Math.max(0, (h - 1.6) * 0.4));
    } else if (ny < 0.55 && h < 42) {
      // Cliff strata on the wall; grass takes over above ~42 m
      const band = Math.sin(h * 0.85 + n * 4) * 0.5 + 0.5;
      tmp.copy(rockA).lerp(rockB, band);
      if (band > 0.72) tmp.lerp(rockC, 0.45);
      if (h > 34 && ny > 0.4) tmp.lerp(grassA, (h - 34) / 16);
    } else {
      tmp.copy(grassA).lerp(grassB, 0.2 + n * 0.7);
      tmp.lerp(grassC, Math.max(0, plot - 0.32) * 1.5);
      const patch = valueNoise(x * 0.14, z * 0.14, 19);
      const fine = valueNoise(x * 0.31, z * 0.29, 53);
      tmp.lerp(grassD, Math.max(0, patch - 0.48) * 1.8);
      tmp.lerp(grassE, Math.max(0, 0.48 - n) * 1.15);
      tmp.lerp(grassF, Math.max(0, fine - 0.55) * 1.35);
      if (kind === "mailCay") {
        const wide = valueNoise(x * 0.045, z * 0.045, 71);
        tmp.lerp(grassD, Math.max(0, wide - 0.5) * 1.2);
        tmp.lerp(grassE, Math.max(0, 0.45 - wide) * 0.9);
      } else {
        // Heath and darker turf on the mid slopes
        const heath = valueNoise(x * 0.06, z * 0.06, 61);
        tmp.lerp(heather, Math.max(0, heath - 0.55) * 0.9);
        tmp.lerp(grassE, Math.max(0, 0.42 - heath) * 0.85);
      }
      // Soft rock lip just below the grass cap
      if (ny < 0.62 && h > 20) tmp.lerp(rockA, (0.62 - ny) * 0.7);
      const bloom = valueNoise(x * 0.42, z * 0.39, 91);
      if (!path && bloom > 0.72 && ny > 0.78 && h > 3 && h < 46) {
        if (bloom > 0.90) tmp.lerp(bloomP, 0.38);
        else if (bloom > 0.82) tmp.lerp(bloomY, 0.42);
        else tmp.lerp(bloomW, 0.24);
      }
      if (path) tmp.lerp(dirt, 0.82).lerp(dirtWet, 0.12);
      else if (plot > 0.82) tmp.lerp(dirt, 0.25);
    }
    col[k * 3] = tmp.r;
    col[k * 3 + 1] = tmp.g;
    col[k * 3 + 2] = tmp.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  retagGeometry(geo, MAT.GRASS, 0);
  const mat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
    vertexColors: true, flatShading: false, vertexColors: true,
  }));
  const mesh = new THREE.Mesh(geo, mat);
  mesh.userData.matId = MAT.GRASS;
  mesh.name = "isle-ground-" + kind;
  mesh.position.set(i.x, 0, i.z);
  return mesh;
}
