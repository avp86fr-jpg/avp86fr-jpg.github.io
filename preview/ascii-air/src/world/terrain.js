import * as THREE from "three";
import { WORLD, MAT, LANDMARKS } from "../core/config.js";
import { clamp, lerp, smoothstep, saturate } from "../core/utils.js";
import { fbm, ridge, valueNoise } from "./noise.js";
import { tagMesh } from "../render/idMaterial.js";

const N = 192;
const SIZE = WORLD.size;
const HALF = SIZE * 0.5;

function dist2(x, z, ox, oz) {
  const dx = x - ox, dz = z - oz;
  return Math.hypot(dx, dz);
}

function smoothMin(a, b, k) {
  const h = clamp(0.5 + 0.5 * (b - a) / k, 0, 1);
  return lerp(b, a, h) - k * h * (1 - h);
}

function flatten(h, target, amount) {
  return lerp(h, target, saturate(amount));
}

function capsuleDist(x, z, ax, az, bx, bz) {
  const px = x - ax, pz = z - az;
  const dx = bx - ax, dz = bz - az;
  const l2 = dx * dx + dz * dz || 1;
  const t = saturate((px * dx + pz * dz) / l2);
  return Math.hypot(px - dx * t, pz - dz * t);
}

export function islandRadius(ang) {
  return (
    1280
    + 200 * Math.sin(ang * 2.0 + 0.35)
    + 130 * Math.sin(ang * 3.0 + 1.1)
    + 70 * Math.sin(ang * 5.0 + 0.4)
    + 90 * Math.sin(ang * 1.0 - 0.6)
  );
}

export function computeHeight(x, z) {
  const ang = Math.atan2(z, x);
  const dist = Math.hypot(x, z);
  const ncoast = (fbm(x * 0.0018, z * 0.0018, 4, 11) - 0.5) * 160;
  const radius = islandRadius(ang) + ncoast;

  // Extra capes
  const capeSE = dist2(x, z, 1180, -1080);
  const capePush = smoothstep(380, 80, capeSE) * 220;
  const r = radius + capePush;

  let mask = smoothstep(r + 90, r - 70, dist);

  // Palm islet
  const islet = dist2(x, z, LANDMARKS.palmIslet.x, LANDMARKS.palmIslet.z);
  const isletMask = smoothstep(90, 28, islet);
  mask = Math.max(mask, isletMask);

  // Force landing pads and the airport to stay on dry land
  const airportPad = Math.max(0, 1 - Math.max(Math.abs(z + 1100) / 170, Math.abs(x) / 560));
  const grassPad = Math.max(0, 1 - Math.max(Math.abs(z - 1120) / 48, Math.abs(x + 820) / 190));
  const beachSunny = smoothstep(220, 50, dist2(x, z, 80, -1280));
  const beachCape = smoothstep(180, 45, dist2(x, z, 1000, -1240));
  mask = Math.max(mask, airportPad, grassPad, beachSunny, beachCape);

  // Arch rock islet
  const archD = dist2(x, z, LANDMARKS.arch.x, LANDMARKS.arch.z);
  mask = Math.max(mask, smoothstep(70, 22, archD));

  // Seabed
  const bed = -6 - 22 * (1 - smoothstep(r - 40, r + 700, dist)) - 4 * fbm(x * 0.002, z * 0.002, 3, 3);

  // Base land
  let h = 6 + 28 * fbm(x * 0.0009, z * 0.0009, 5, 1) + 10 * fbm(x * 0.0024, z * 0.0024, 3, 5);
  h *= mask;

  // Volcano — Mount Glyph at (0, 200)
  const vx = 0, vz = 200;
  const vd = dist2(x, z, vx, vz);
  const cone = Math.pow(saturate(1 - vd / 480), 1.15) * 290;
  const crater = smoothstep(95, 55, vd) * 55;
  let volc = cone - crater;
  // gentle lava-rock shoulders
  volc += ridge(x * 0.004, z * 0.004, 3, 8) * 18 * smoothstep(480, 80, vd);
  h = Math.max(h, volc * Math.max(mask, smoothstep(520, 200, vd)));

  // West mill hills
  const hd = dist2(x, z, -960, 180);
  const hills = smoothstep(620, 80, hd) * (58 + 22 * fbm(x * 0.003, z * 0.003, 4, 21));
  h = Math.max(h, hills * mask);

  // North castle cliff plateau
  const cd = dist2(x, z, 40, 1240);
  let plateau = smoothstep(420, 140, cd) * 108;
  // drop sharply to the north (positive Z? castle is at z=1240, north is +Z)
  if (z > 1280) {
    plateau *= smoothstep(1480, 1280, z);
  }
  h = Math.max(h, plateau * mask);

  // Ridge for grass strip (NW)
  const sd = dist2(x, z, -820, 1120);
  const ridgeH = smoothstep(380, 80, sd) * 92;
  h = Math.max(h, ridgeH * mask);

  // Lighthouse cape height
  const ld = dist2(x, z, 1180, -1080);
  const capeH = smoothstep(360, 40, ld) * (22 + 18 * ridge(x * 0.01, z * 0.01, 3, 4));
  h = Math.max(h, capeH * Math.max(mask, smoothstep(400, 100, ld)));

  // South beaches: keep low and gentle
  if (z < -900 && Math.abs(x) < 900) {
    const beach = smoothstep(-900, -1300, z);
    h = lerp(h, 2 + 3 * fbm(x * 0.004, z * 0.004, 2, 2), beach * 0.85);
  }

  // Airport flatten (runway east-west at z=-1100, y=4)
  const ap = Math.max(
    0,
    1 - Math.max(Math.abs(z + 1100) / 140, Math.abs(x) / 520)
  );
  const ap2 = Math.pow(saturate(ap), 1.2);
  h = flatten(h, 4.2, ap2);

  // Town terrace slightly above airport
  const td = dist2(x, z, -260, -980);
  const townF = smoothstep(220, 60, td);
  h = flatten(h, 8.5, townF * 0.85);

  // Lagoon basin — scooped below water, sandbar ring
  const lag = dist2(x, z, -740, -1120);
  if (lag < 260) {
    const basin = smoothstep(230, 70, lag);
    const bar = smoothstep(70, 110, lag) * smoothstep(230, 180, lag);
    h = lerp(h, -2.4, basin * 0.95);
    h = lerp(h, 1.6, bar * 0.7);
  }

  // River carve: volcano NE slope → waterfall → bridge → east sea
  const riverPts = [
    [180, 360, 18, 0],
    [400, 520, 16, 0],
    [620, 640, 16, 0],
    [720, 640, 14, 0], // falls
    [780, 520, 14, 1],
    [980, 440, 18, 0],
    [1240, 360, 22, 0],
    [1500, 280, 26, 0],
  ];
  for (let i = 0; i < riverPts.length - 1; i++) {
    const a = riverPts[i], b = riverPts[i + 1];
    const d = capsuleDist(x, z, a[0], a[1], b[0], b[1]);
    const halfw = lerp(a[2], b[2], 0.5);
    const carve = smoothstep(halfw + 10, halfw * 0.35, d);
    // Before waterfall (i < 3) river sits high; after, lower
    const target = (i < 3) ? Math.min(h, lerp(96, 86, i / 3)) - 6 : Math.min(h, 18) - 5;
    if (i === 3) {
      // waterfall step itself stays as a cliff — only narrow notch after
    }
    h = lerp(h, Math.min(h, target), carve * (i === 3 ? 0.35 : 0.9));
  }

  // Waterfall cliff: keep a sharp drop around (720, 640)
  const wd = dist2(x, z, 720, 640);
  // south of falls should be high, north-east lower? path goes to (780,520) which is southish.
  // Points: (720,640) -> (780,520) so after the falls, z decreases (south).
  // High side is toward volcano (west/south-west of falls).
  // We'll impose a terrace: if near falls and "upstream", keep ~90, downstream ~16
  const up = capsuleDist(x, z, 620, 640, 720, 640);
  const down = capsuleDist(x, z, 720, 640, 780, 520);
  if (up < 40) h = Math.max(h, 88);
  if (down < 36 && dist2(x, z, 780, 520) < 80) h = Math.min(h, 18);

  // Grass strip flatten
  const gs = Math.max(0, 1 - Math.max(Math.abs(z - 1120) / 28, Math.abs(x + 820) / 160));
  h = flatten(h, 90, Math.pow(gs, 1.2) * 0.95);

  // Mix in islet height
  if (islet < 100) h = Math.max(h, smoothstep(90, 20, islet) * (2.5 + 1.5 * fbm(x * 0.05, z * 0.05, 2, 9)));
  if (archD < 80) h = Math.max(h, smoothstep(70, 15, archD) * 8);

  // Shore clamp: no vertical walls at the waterline
  if (mask < 0.99 && mask > 0.01) {
    h = lerp(bed * 0.3, h, mask);
  }

  if (mask <= 0.001) h = bed;

  // Re-assert pads after the shore clamp so the runway cannot fall into the sea
  const airportPad2 = Math.max(0, 1 - Math.max(Math.abs(z + 1100) / 170, Math.abs(x) / 560));
  const grassPad2 = Math.max(0, 1 - Math.max(Math.abs(z - 1120) / 48, Math.abs(x + 820) / 190));
  const beachSunny2 = smoothstep(220, 50, dist2(x, z, 80, -1280));
  const beachCape2 = smoothstep(180, 45, dist2(x, z, 1000, -1240));
  h = flatten(h, 4.2, Math.pow(saturate(airportPad2), 1.15));
  h = flatten(h, 90, Math.pow(saturate(grassPad2), 1.2) * 0.95);
  h = flatten(h, 1.9, Math.max(beachSunny2, beachCape2) * 0.92);

  return h;
}

export function computeMaterial(x, z, h, slope) {
  const dist = Math.hypot(x, z);
  if (h < -1.2) return MAT.WATER_DEEP;
  if (h < 0.45) return MAT.SEA;
  // foam / wet sand near water
  if (h < 1.6) return MAT.SAND;
  const vd = dist2(x, z, 0, 200);
  if (vd < 160 && h > 200) return MAT.SNOW;
  if (vd < 420 && (slope > 0.55 || h > 130)) return MAT.ROCK;
  if (slope > 0.62) return MAT.ROCK;
  // airport / runway
  if (Math.abs(z + 1100) < 28 && Math.abs(x) < 430 && h > 2 && h < 8) return MAT.RUNWAY;
  if (Math.abs(z + 1100) < 90 && Math.abs(x) < 500 && h > 2 && h < 10) return MAT.DIRT;
  // grass strip
  if (Math.abs(z - 1120) < 16 && Math.abs(x + 820) < 140) return MAT.RUNWAY;
  // beaches
  if (h < 4.5 && z < -900) return MAT.SAND;
  if (h < 3.5 && dist2(x, z, -740, -1120) < 260) return MAT.SAND;
  if (h < 3.2) return MAT.SAND;
  // lighthouse cape
  if (dist2(x, z, 1180, -1080) < 220 && (slope > 0.28 || h > 8)) return MAT.ROCK;
  // forest belts
  const forestN = fbm(x * 0.0022, z * 0.0022, 4, 44);
  if (h > 14 && h < 95 && slope < 0.38 && forestN > 0.52 && vd > 280) return MAT.FOREST;
  return MAT.GRASS;
}

export function createTerrain() {
  const verts = N + 1;
  const heights = new Float32Array(verts * verts);
  const mats = new Uint8Array(verts * verts);
  const step = SIZE / N;

  for (let j = 0; j < verts; j++) {
    const z = -HALF + j * step;
    for (let i = 0; i < verts; i++) {
      const x = -HALF + i * step;
      heights[j * verts + i] = computeHeight(x, z);
    }
  }
  // slope + materials
  const hx = (i, j) => heights[j * verts + i];
  for (let j = 0; j < verts; j++) {
    for (let i = 0; i < verts; i++) {
      const x = -HALF + i * step;
      const z = -HALF + j * step;
      const il = Math.max(0, i - 1), ir = Math.min(N, i + 1);
      const jd = Math.max(0, j - 1), ju = Math.min(N, j + 1);
      const dx = (hx(ir, j) - hx(il, j)) / ((ir - il) * step);
      const dz = (hx(i, ju) - hx(i, jd)) / ((ju - jd) * step);
      const slope = Math.hypot(dx, dz);
      mats[j * verts + i] = computeMaterial(x, z, hx(i, j), slope);
    }
  }

  const pos = new Float32Array(verts * verts * 3);
  const col = new Float32Array(verts * verts * 3);
  const nrm = new Float32Array(verts * verts * 3);
  const uv = new Float32Array(verts * verts * 2);
  const aid = new Float32Array(verts * verts * 2);

  const matColor = (m, h, x, z) => {
    const n = fbm(x * 0.02, z * 0.02, 2, 3);
    switch (m) {
      case MAT.SEA: return [0.15 + n * 0.06, 0.55, 0.68];
      case MAT.WATER_DEEP: return [0.06, 0.22, 0.40];
      case MAT.SAND: return [0.95, 0.86, 0.58 + n * 0.06];
      case MAT.GRASS: return [0.38 + n * 0.12, 0.72 + n * 0.12, 0.22];
      case MAT.FOREST: return [0.16, 0.48 + n * 0.1, 0.18];
      case MAT.ROCK: return [0.52 + n * 0.12, 0.46, 0.42];
      case MAT.SNOW: return [0.95, 0.96, 0.98];
      case MAT.DIRT: return [0.58, 0.48, 0.28];
      case MAT.RUNWAY: return [0.32, 0.33, 0.36];
      default: return [0.5, 0.55, 0.35];
    }
  };

  for (let j = 0; j < verts; j++) {
    const z = -HALF + j * step;
    for (let i = 0; i < verts; i++) {
      const x = -HALF + i * step;
      const o = (j * verts + i);
      const h = heights[o];
      pos[o * 3] = x;
      pos[o * 3 + 1] = h;
      pos[o * 3 + 2] = z;
      uv[o * 2] = i / N;
      uv[o * 2 + 1] = j / N;
      const c = matColor(mats[o], h, x, z);
      col[o * 3] = c[0]; col[o * 3 + 1] = c[1]; col[o * 3 + 2] = c[2];
      aid[o * 2] = mats[o];
      aid[o * 2 + 1] = 0;
    }
  }
  // normals
  for (let j = 0; j < verts; j++) {
    for (let i = 0; i < verts; i++) {
      const il = Math.max(0, i - 1), ir = Math.min(N, i + 1);
      const jd = Math.max(0, j - 1), ju = Math.min(N, j + 1);
      const dx = (hx(ir, j) - hx(il, j));
      const dz = (hx(i, ju) - hx(i, jd));
      const sx = (ir - il) * step;
      const sz = (ju - jd) * step;
      // normal from (-dh/dx, 1, -dh/dz)
      let nx = -dx / sx, ny = 1, nz = -dz / sz;
      const len = Math.hypot(nx, ny, nz) || 1;
      const o = (j * verts + i) * 3;
      nrm[o] = nx / len; nrm[o + 1] = ny / len; nrm[o + 2] = nz / len;
    }
  }

  const geo = new THREE.BufferGeometry();
  // baked hillshade so glyphs vary even under flat lighting
  const sunX = 0.45, sunY = 0.8, sunZ = 0.25;
  for (let o = 0; o < verts * verts; o++) {
    const ndl = Math.max(0, nrm[o*3]*sunX + nrm[o*3+1]*sunY + nrm[o*3+2]*sunZ);
    const sh = 0.42 + 0.7 * ndl;
    col[o*3] *= sh; col[o*3+1] *= sh; col[o*3+2] *= sh;
  }
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("normal", new THREE.BufferAttribute(nrm, 3));
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  geo.setAttribute("aId", new THREE.BufferAttribute(aid, 2));

  const idx = [];
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      const a = j * verts + i;
      const b = a + 1;
      const c = a + verts;
      const d = c + 1;
      idx.push(a, c, b, b, c, d);
    }
  }
  geo.setIndex(idx);
  geo.computeBoundingSphere();

  const mat = new THREE.MeshLambertMaterial({
    vertexColors: true,
    flatShading: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  mesh.userData.matId = MAT.GRASS;
  mesh.name = "terrain";

  function heightAt(x, z) {
    const u = (x + HALF) / SIZE * N;
    const v = (z + HALF) / SIZE * N;
    if (u < 0 || v < 0 || u > N || v > N) {
      return computeHeight(x, z);
    }
    const i = Math.floor(u);
    const j = Math.floor(v);
    const fu = u - i;
    const fv = v - j;
    const i1 = Math.min(N, i + 1);
    const j1 = Math.min(N, j + 1);
    const h00 = heights[j * verts + i];
    const h10 = heights[j * verts + i1];
    const h01 = heights[j1 * verts + i];
    const h11 = heights[j1 * verts + i1];
    return lerp(lerp(h00, h10, fu), lerp(h01, h11, fu), fv);
  }

  function materialAt(x, z) {
    const u = (x + HALF) / SIZE * N;
    const v = (z + HALF) / SIZE * N;
    if (u < 0 || v < 0 || u > N || v > N) return MAT.SEA;
    const i = clamp(Math.round(u), 0, N);
    const j = clamp(Math.round(v), 0, N);
    return mats[j * verts + i];
  }

  function normalAt(x, z) {
    const e = 4;
    const hL = heightAt(x - e, z);
    const hR = heightAt(x + e, z);
    const hD = heightAt(x, z - e);
    const hU = heightAt(x, z + e);
    const n = new THREE.Vector3(hL - hR, 2 * e, hD - hU).normalize();
    return n;
  }

  return { mesh, heightAt, materialAt, normalAt, heights, mats, N, SIZE };
}
