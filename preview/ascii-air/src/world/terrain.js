import * as THREE from "three";
import { WORLD, MAT, LANDMARKS } from "../core/config.js";
import { clamp, lerp, smoothstep, saturate } from "../core/utils.js";
import { fbm, ridge, valueNoise } from "./noise.js";
import { tagMesh, patchMaterialIdAlpha } from "../render/idMaterial.js";

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
  const capeSE = dist2(x, z, 720, -1020);
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
  const coveSunny = smoothstep(90, 28, dist2(x, z, -40, -1220));
  const beachCape = smoothstep(200, 50, dist2(x, z, 620, -1140));
  mask = Math.max(mask, airportPad, grassPad, coveSunny, beachCape);

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
  const cone = Math.pow(saturate(1 - vd / 500), 1.12) * 305;
  const crater = smoothstep(120, 38, vd) * 78;
  let volc = cone - crater;
  // gentle lava-rock shoulders
  volc += ridge(x * 0.004, z * 0.004, 3, 8) * 18 * smoothstep(480, 80, vd);
  h = Math.max(h, volc * Math.max(mask, smoothstep(520, 200, vd)));

  // Rolling foothills between the south coast and the cone (keeps runway flat)
  if (z > -850 && z < 160 && Math.abs(x) < 900) {
    const fw = smoothstep(-850, -620, z) * smoothstep(160, 10, z) * smoothstep(900, 520, Math.abs(x));
    h += fw * (14 + 24 * fbm(x * 0.0020, z * 0.0020, 4, 7) + 8 * ridge(x * 0.006, z * 0.006, 2, 3));
  }

  // West mill hills
  const hd = dist2(x, z, -480, 80);
  const hills = smoothstep(620, 80, hd) * (58 + 22 * fbm(x * 0.003, z * 0.003, 4, 21));
  h = Math.max(h, hills * mask);

  // Castle cliff plateau (east of the cone, visible in the hero vista)
  const cd = dist2(x, z, 380, 520);
  let plateau = smoothstep(360, 110, cd) * 96;
  if (z > 860) plateau *= smoothstep(1040, 860, z);
  if (x > 420) plateau *= smoothstep(560, 420, x);
  h = Math.max(h, plateau * mask);

  // Ridge for grass strip (NW)
  const sd = dist2(x, z, -820, 1120);
  const ridgeH = smoothstep(380, 80, sd) * 92;
  h = Math.max(h, ridgeH * mask);

  // Lighthouse cape height
  const ld = dist2(x, z, 620, -1140);
  const capeH = smoothstep(340, 36, ld) * (28 + 22 * ridge(x * 0.01, z * 0.01, 3, 4));
  h = Math.max(h, capeH * Math.max(mask, smoothstep(380, 90, ld)));

  // Small sandy cove only — the rest of the south coast is a cliff
  const cove = smoothstep(90, 28, dist2(x, z, -40, -1220));
  h = flatten(h, 1.8, cove * 0.9);

  // Ochre sea-cliffs along the south coast, with noisy inlets
  if (z < -1080 && z > -1420 && Math.abs(x) < 1100) {
    const along = smoothstep(-1080, -1160, z) * smoothstep(-1420, -1260, z);
    const notAirport = 1 - Math.pow(saturate(1 - Math.max(Math.abs(z + 1100) / 130, Math.abs(x) / 500)), 1.2);
    const inlet = fbm(x * 0.0045, z * 0.0045, 3, 29);
    const cut = smoothstep(0.62, 0.82, inlet);
    const cliffH = 16 + 32 * fbm(x * 0.0032, z * 0.0032, 3, 17) + 10 * ridge(x * 0.012, z * 0.01, 2, 5);
    h = Math.max(h, cliffH * along * notAirport * (1 - cut * 0.85));
    h = lerp(h, -1.2, along * cut * 0.7 * notAirport);
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
    [80, 300, 16, 0],
    [180, 400, 16, 0],
    [280, 480, 14, 0],
    [320, 480, 14, 0], // falls
    [400, 400, 14, 1],
    [520, 360, 18, 0],
    [700, 280, 22, 0],
    [980, 200, 26, 0],
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

  const up = capsuleDist(x, z, 180, 400, 320, 480);
  const down = capsuleDist(x, z, 320, 480, 400, 400);
  if (up < 40) h = Math.max(h, 72);
  if (down < 36 && dist2(x, z, 400, 400) < 80) h = Math.min(h, 22);

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
  const cove2 = smoothstep(90, 28, dist2(x, z, -40, -1220));
  const beachCape2 = smoothstep(200, 50, dist2(x, z, 620, -1140));
  h = flatten(h, 4.2, Math.pow(saturate(airportPad2), 1.15));
  h = flatten(h, 90, Math.pow(saturate(grassPad2), 1.2) * 0.95);
  h = flatten(h, 1.8, cove2 * 0.9);
  h = Math.max(h, (18 + 16 * fbm(x * 0.01, z * 0.01, 2, 4)) * beachCape2);

  // South-east ochre sea-cliffs
  if (x > 280 && x < 1000 && z < -680 && z > -1400) {
    const band = smoothstep(280, 440, x) * smoothstep(1000, 800, x) * smoothstep(-680, -900, z) * smoothstep(-1400, -1220, z);
    const cliffH = 18 + 36 * fbm(x * 0.0038, z * 0.0038, 3, 17);
    h = Math.max(h, cliffH * band);
  }
  // South-west cliffs, keep the lagoon scooped
  if (x < -300 && x > -1100 && z < -680 && z > -1360 && dist2(x, z, -740, -1120) > 300) {
    const band = smoothstep(-300, -460, x) * smoothstep(-1100, -860, x) * smoothstep(-680, -880, z) * smoothstep(-1360, -1180, z);
    const cliffH = 12 + 22 * fbm(x * 0.0036, z * 0.0036, 3, 19);
    h = Math.max(h, cliffH * band);
  }

  // Soft terraces on inland rolling ground
  if (h > 10 && h < 88 && Math.abs(z + 1100) > 200 && dist2(x, z, 0, 200) > 250) {
    const stepH = 7;
    const terr = Math.round(h / stepH) * stepH;
    h = lerp(h, terr, 0.52);
  }

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
  // lagoon sand + the one small cove; south coast is rock
  if (h < 3.5 && dist2(x, z, -740, -1120) < 260) return MAT.SAND;
  if (h < 3.2 && dist2(x, z, -40, -1220) < 100) return MAT.SAND;
  if (h < 2.2) return MAT.SAND;
  // lighthouse cape and south sea-cliffs
  if (dist2(x, z, 620, -1140) < 260 && (slope > 0.22 || h > 6)) return MAT.ROCK;
  if (z < -1080 && h > 2 && (slope > 0.22 || h > 8)) return MAT.ROCK;
  if (h > 3 && h < 55 && slope > 0.38 && (z < -700 || x > 420)) return MAT.ROCK;
  // forest belts
  const forestN = fbm(x * 0.0022, z * 0.0022, 4, 44);
  if (h > 12 && h < 95 && slope < 0.42 && forestN > 0.40 && vd > 240) return MAT.FOREST;
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
      case MAT.SEA: return [0.16, 0.62 + n * 0.08, 0.88];
      case MAT.WATER_DEEP: return [0.10, 0.36, 0.70];
      case MAT.SAND: return [0.96, 0.88, 0.62 + n * 0.06];
      case MAT.GRASS: return [0.48 + n * 0.16, 0.82 + n * 0.12, 0.22 + n * 0.06];
      case MAT.FOREST: return [0.18, 0.52 + n * 0.10, 0.16];
      case MAT.ROCK: return [0.80 + n * 0.06, 0.56 + n * 0.04, 0.30];
      case MAT.SNOW: return [0.90, 0.92, 0.95];
      case MAT.DIRT: return [0.66, 0.52, 0.30];
      case MAT.RUNWAY: return [0.22, 0.23, 0.26];
      default: return [0.48, 0.62, 0.32];
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
  // Light the south face (the postcard view) and keep a warm fill so slopes stay readable.
  const sunX = 0.35, sunY = 0.82, sunZ = -0.40;
  for (let o = 0; o < verts * verts; o++) {
    const ndl = Math.max(0, nrm[o*3]*sunX + nrm[o*3+1]*sunY + nrm[o*3+2]*sunZ);
    const x = pos[o*3], z = pos[o*3+2];
    const hgt = pos[o*3+1];
    const vd = Math.hypot(x, z - 200);
    const streak = fbm(x * 0.025, z * 0.025, 3, 11);
    if (vd < 48 && hgt > 175) {
      col[o*3] = 1.0; col[o*3+1] = 0.38 + streak * 0.32; col[o*3+2] = 0.06;
      aid[o*2] = MAT.LIGHT; aid[o*2+1] = 1;
    } else if (vd < 210 && hgt > 100 && streak > 0.46) {
      col[o*3] = 0.98; col[o*3+1] = 0.22 + (streak - 0.46) * 0.7; col[o*3+2] = 0.05;
      aid[o*2] = MAT.LIGHT; aid[o*2+1] = 1;
    } else {
      let sh = 0.78 + 0.34 * ndl;
      const slope = 1 - nrm[o*3+1];
      if (slope > 0.32 && hgt > 1.5) {
        const hatch = Math.sin(x * 0.55 + hgt * 0.7) * Math.sin(z * 0.16 + x * 0.08);
        if (hatch > 0.72) sh *= 0.78;
      }
      if (sh < 0.72) sh = 0.72;
      if (sh > 1.12) sh = 1.12;
      col[o*3] *= sh; col[o*3+1] *= sh; col[o*3+2] *= sh;
    }
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
  patchMaterialIdAlpha(mat);
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
