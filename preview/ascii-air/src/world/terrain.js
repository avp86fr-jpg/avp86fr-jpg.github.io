import * as THREE from "three";
import { WORLD, MAT, LANDMARKS, QUALITY } from "../core/config.js";
import { clamp, lerp, smoothstep, saturate } from "../core/utils.js";
import { fbm, ridge, valueNoise } from "./noise.js";
import { tagMesh, patchMaterialIdAlpha } from "../render/idMaterial.js";
import { terrainLambert } from "../render/textured.js";

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
  const capeSE = dist2(x, z, -180, -1260);
  const capePush = smoothstep(160, 40, capeSE) * 90;
  const r = radius + capePush;

  let mask = smoothstep(r + 90, r - 70, dist);

  // Palm islet
  const islet = dist2(x, z, LANDMARKS.palmIslet.x, LANDMARKS.palmIslet.z);
  const isletMask = smoothstep(90, 28, islet);
  mask = Math.max(mask, isletMask);

  // Force landing pads and the airport to stay on dry land
  const airportPad = Math.max(
    0,
    1 - Math.max(Math.abs(z + 1100) / 36, Math.abs(x - 50) / 400),
    1 - Math.max(Math.abs(z + 1060) / 80, Math.abs(x - 160) / 150)
  );
  const grassPad = Math.max(0, 1 - Math.max(Math.abs(z - 1120) / 48, Math.abs(x + 820) / 190));
  const coveSunny = smoothstep(90, 28, dist2(x, z, 40, -1220));
  const beachCape = smoothstep(90, 28, dist2(x, z, LANDMARKS.lighthouse.x, LANDMARKS.lighthouse.z));
  mask = Math.max(mask, airportPad, grassPad, coveSunny, beachCape);

  // Limestone headland, attached to Cinder Cape
  const archD = dist2(x, z, LANDMARKS.arch.x, LANDMARKS.arch.z);
  const capeNeck = capsuleDist(x, z, LANDMARKS.lighthouse.x, LANDMARKS.lighthouse.z, LANDMARKS.arch.x, LANDMARKS.arch.z);
  mask = Math.max(mask, smoothstep(90, 28, archD), smoothstep(52, 16, capeNeck));

  // Keep the postcard water in front of the south coast deep and clear.
  if (z < -1450) {
    const open = smoothstep(-1450, -1580, z);
    mask *= 1 - open * 0.96;
  }
  // Central postcard bay — water reaches toward the viaduct, splitting airfield (east) from the cape (west).
  const postcardBay = smoothstep(150, 28, Math.abs(x - 10)) * smoothstep(-1160, -1240, z) * smoothstep(-1600, -1360, z);
  mask *= 1 - postcardBay * 0.92;

  // Seabed
  const bed = -8 - 26 * (1 - smoothstep(r - 40, r + 700, dist)) - 4 * fbm(x * 0.002, z * 0.002, 3, 3);

  // Base land. Off the island, drop to a deep seabed so the water is never a pale sand sheet.
  let h = 6 + 28 * fbm(x * 0.0009, z * 0.0009, 5, 1) + 10 * fbm(x * 0.0024, z * 0.0024, 3, 5);
  h = lerp(bed, h, saturate(mask));

  // Volcano — Mount Glyph at (0, 200)
  const vx = 0, vz = 200;
  const vd = dist2(x, z, vx, vz);
  const cone = Math.pow(saturate(1 - vd / 520), 1.08) * 318;
  const crater = smoothstep(135, 28, vd) * 96;
  let volc = cone - crater;
  // Rugged lava-rock shoulders and a broken lip
  volc += ridge(x * 0.0045, z * 0.0045, 4, 8) * 26 * smoothstep(500, 70, vd);
  volc += ridge(x * 0.012, z * 0.01, 2, 3) * 10 * smoothstep(200, 40, vd);
  h = Math.max(h, volc * Math.max(mask, smoothstep(520, 200, vd)));

  // Rolling foothills between the south coast and the cone (keeps runway flat)
  if (z > -850 && z < 160 && Math.abs(x) < 900) {
    const fw = smoothstep(-850, -620, z) * smoothstep(160, 10, z) * smoothstep(900, 520, Math.abs(x));
    h += fw * (18 + 32 * fbm(x * 0.0018, z * 0.0018, 4, 7) + 12 * ridge(x * 0.0055, z * 0.0055, 2, 3));
  }

  // South-face swells visible in the hero (just north of the runway, not on it)
  if (z > -1040 && z < 280 && Math.abs(x) < 820) {
    const runway = 1 - Math.pow(saturate(1 - Math.max(Math.abs(z + 1100) / 58, Math.abs(x) / 400)), 1.35);
    const w = smoothstep(-1040, -900, z) * smoothstep(280, 40, z) * smoothstep(820, 480, Math.abs(x)) * runway;
    h += w * (22 + 36 * fbm(x * 0.0017, z * 0.0016, 4, 11) + 14 * ridge((x + 90) * 0.0044, z * 0.0044, 2, 5));
  }

  // West mill hills
  const hd = dist2(x, z, LANDMARKS.windmills.x, LANDMARKS.windmills.z);
  const hills = smoothstep(260, 50, hd) * (26 + 16 * fbm(x * 0.003, z * 0.003, 4, 21));
  h = Math.max(h, hills * mask);

  // Castle cliff plateau (east of the cone, visible in the hero vista)
  const cd = dist2(x, z, -340, 80);
  let plateau = smoothstep(360, 110, cd) * 96;
  if (z > 860) plateau *= smoothstep(1040, 860, z);
  if (x > 420) plateau *= smoothstep(560, 420, x);
  h = Math.max(h, plateau * mask);

  // Ridge for grass strip (NW)
  const sd = dist2(x, z, -820, 1120);
  const ridgeH = smoothstep(380, 80, sd) * 92;
  h = Math.max(h, ridgeH * mask);

  // Lighthouse / arch cape — steep south face, rocky shelf, not a sand dome
  const ld = dist2(x, z, LANDMARKS.lighthouse.x, LANDMARKS.lighthouse.z);
  const ad = dist2(x, z, LANDMARKS.arch.x, LANDMARKS.arch.z);
  const capeCore = Math.max(smoothstep(200, 36, ld), smoothstep(100, 24, ad));
  let capeH = capeCore * (24 + 16 * ridge(x * 0.012, z * 0.012, 3, 4));
  if (z < LANDMARKS.arch.z - 6 && x < -30) {
    capeH *= smoothstep(LANDMARKS.arch.z - 48, LANDMARKS.arch.z - 6, z);
  }
  h = Math.max(h, capeH * Math.max(mask, capeCore));
  // Shear the west cape's south face into a JAGGED cliff, except the arch window
  if (x < -20 && z < LANDMARKS.arch.z + 6) {
    const slot = (Math.abs(x - LANDMARKS.arch.x) < 11) && (z > LANDMARKS.arch.z - 22);
    if (!slot) {
      const edgeJitter = 11 * (fbm(x * 0.028, 3.1, 3, 17) - 0.5) + 7 * Math.sin(x * 0.065);
      const edgeZ = LANDMARKS.arch.z - 8 + edgeJitter;
      if (z < edgeZ) {
        const faceDepth = 16 + 12 * fbm(x * 0.05, 1.7, 2, 11);
        const drop = saturate((edgeZ - z) / faceDepth);
        const toe = Math.max(1.2, 1.2 + 3.0 * fbm(x * 0.08, z * 0.08, 2, 5) * (1 - drop));
        h = lerp(h, toe, drop * drop);
        if (h < 1.2) h = 1.2;
      }
    }
  }

  // Small sandy cove only — the rest of the south coast is a cliff
  const cove = smoothstep(90, 28, dist2(x, z, 40, -1220));
  h = flatten(h, 1.8, cove * 0.9);

  // Ochre sea-cliffs along the south coast, with noisy inlets
  if (z < -1080 && z > -1420 && Math.abs(x) < 1100) {
    const along = smoothstep(-1080, -1160, z) * smoothstep(-1420, -1260, z);
    const notAirport = 1 - Math.pow(saturate(1 - Math.max(Math.abs(z + 1100) / 50, Math.abs(x - 80) / 280)), 1.2);
    const inlet = fbm(x * 0.0045, z * 0.0045, 3, 29);
    // Slight scallop only — never drop the coast below water (those cuts read as dark oval holes).
    const cut = smoothstep(0.70, 0.90, inlet) * 0.22;
    const cliffH = 16 + 32 * fbm(x * 0.0032, z * 0.0032, 3, 17) + 10 * ridge(x * 0.012, z * 0.01, 2, 5);
    h = Math.max(h, cliffH * along * notAirport * (1 - cut));
  }

  // Ochre sea-cliffs ringing the whole coast, with noisy inlets, sparing the runway.
  {
    const ring = smoothstep(0.12, 0.42, mask) * smoothstep(0.92, 0.62, mask);
    const notAirport = 1 - Math.pow(saturate(1 - Math.max(Math.abs(z + 1100) / 50, Math.abs(x - 80) / 280)), 1.2);
    const inlet = fbm(x * 0.0042, z * 0.0042, 3, 29);
    const cut = smoothstep(0.74, 0.92, inlet) * 0.16;
    const cliffH = 18 + 36 * fbm(x * 0.003, z * 0.003, 3, 17) + 12 * ridge(x * 0.011, z * 0.01, 2, 5);
    h = Math.max(h, cliffH * ring * notAirport * (1 - cut));
    // Never leave a below-water notch on the ringing coast (reads as a dark oval hole).
    if (ring * notAirport > 0.35 && h < 1.2) h = 1.2;
  }

  // Airport flatten — tight runway ribbon only, so the mid-island can roll.
  const ap = Math.max(
    0,
    1 - Math.max(Math.abs(z + 1100) / 62, Math.abs(x) / 420)
  );
  const ap2 = Math.pow(saturate(ap), 1.35);
  h = flatten(h, 4.2, ap2);

  // Town terrace slightly above airport
  const td = dist2(x, z, 280, -980);
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
    [20, 80, 16, 0],
    [30, -300, 16, 0],
    [30, -600, 14, 0],
    [20, -820, 14, 0], // falls
    [0, -870, 14, 1],
    [-20, -920, 18, 0], // viaduct
    [0, -1000, 22, 0],
    [20, -1080, 26, 0],
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

  const up = capsuleDist(x, z, 30, -300, LANDMARKS.waterfall.x, LANDMARKS.waterfall.z);
  const down = capsuleDist(x, z, LANDMARKS.waterfall.x, LANDMARKS.waterfall.z, LANDMARKS.bridge.x, LANDMARKS.bridge.z);
  if (up < 40) h = Math.max(h, 70);
  if (down < 36 && dist2(x, z, 0, -870) < 90) h = Math.min(h, 22);

  // Grass strip flatten
  const gs = Math.max(0, 1 - Math.max(Math.abs(z - 1120) / 28, Math.abs(x + 820) / 160));
  h = flatten(h, 90, Math.pow(gs, 1.2) * 0.95);

  // Mistfall: a high lip and a hard drop so the sheet reads as a waterfall, not a floating tower
  {
    const wd = dist2(x, z, LANDMARKS.waterfall.x, LANDMARKS.waterfall.z);
    if (wd < 90) {
      const lip = smoothstep(90, 18, wd);
      if (z >= LANDMARKS.waterfall.z) h = Math.max(h, lerp(h, 42, lip));
      else h = lerp(h, 18, lip * 0.9);
    }
    const bd = dist2(x, z, LANDMARKS.bridge.x, LANDMARKS.bridge.z);
    if (bd < 60) {
      const bank = smoothstep(60, 18, bd);
      const span = (Math.abs(x - LANDMARKS.bridge.x) < 16) && (Math.abs(z - LANDMARKS.bridge.z) < 20);
      if (span) h = lerp(h, 8, bank);
      else h = Math.max(h, 24 * bank);
    }
  }

  // Mix in islet height
  if (islet < 100) h = Math.max(h, smoothstep(90, 20, islet) * (2.5 + 1.5 * fbm(x * 0.05, z * 0.05, 2, 9)));
  if (archD < 100 || capeNeck < 60) {
    const feet = Math.max(smoothstep(90, 24, archD) * 12, smoothstep(48, 14, capeNeck) * 14);
    h = Math.max(h, feet);
    // Slot under the window so the sea shows through, pillars stay dry
    const slot = (Math.abs(x - LANDMARKS.arch.x) < 9) && (Math.abs(z - LANDMARKS.arch.z) < 16);
    if (slot) h = Math.min(h, -0.4);
  }

  // Kill stray green pyramids / sand islets in open water (keep wreck, palm islet, lagoon bar)
  if (mask < 0.06 && archD > 40 && islet > 80 && dist2(x, z, LANDMARKS.wreck.x, LANDMARKS.wreck.z) > 90) {
    h = Math.min(h, -1.6);
  }

  // Shore clamp: no vertical walls at the waterline
  if (mask < 0.99 && mask > 0.01) {
    const westCliff = x < -20 && z < -1180;
    if (!westCliff) h = lerp(bed * 0.3, h, mask);
  }

  if (mask <= 0.001) h = bed;

  // Re-assert pads after the shore clamp so the runway cannot fall into the sea
  const airportPad2 = Math.max(
    0,
    1 - Math.max(Math.abs(z + 1100) / 28, Math.abs(x - 50) / 400),
    1 - Math.max(Math.abs(z + 1060) / 80, Math.abs(x - 160) / 150)
  );
  const grassPad2 = Math.max(0, 1 - Math.max(Math.abs(z - 1120) / 48, Math.abs(x + 820) / 190));
  const cove2 = smoothstep(90, 28, dist2(x, z, 40, -1220));
  const beachCape2 = smoothstep(90, 28, dist2(x, z, LANDMARKS.lighthouse.x, LANDMARKS.lighthouse.z));
  h = flatten(h, 4.2, Math.pow(saturate(airportPad2), 1.15));
  h = flatten(h, 90, Math.pow(saturate(grassPad2), 1.2) * 0.95);
  h = flatten(h, 1.8, cove2 * 0.9);
  // Only raise the inland cape shelf — do not rebuild a sand dome south of the arch
  const capeInland = smoothstep(LANDMARKS.arch.z - 2, LANDMARKS.lighthouse.z + 10, z);
  h = Math.max(h, (22 + 18 * ridge(x * 0.02, z * 0.02, 2, 4)) * beachCape2 * capeInland);

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

  // Never leave a y=0 sea sheet — it z-fights the water and reads as a pale patch.
  const nearLag = dist2(x, z, -740, -1120) < 280;
  const nearCove = dist2(x, z, 40, -1220) < 120;
  const bayCut = smoothstep(150, 28, Math.abs(x - 10)) * smoothstep(-1160, -1240, z) * smoothstep(-1600, -1360, z);
  h = lerp(h, Math.min(h, -6), bayCut * 0.95);
  if (h < 0.45 && !nearLag && !nearCove && mask < 0.55) h = Math.min(h, bed);

  // Final cape cliff after pads / domes: a jagged limestone face, never a long rectangle
  if (x < -20 && z < LANDMARKS.arch.z + 6) {
    const slot = (Math.abs(x - LANDMARKS.arch.x) < 11) && (z > LANDMARKS.arch.z - 22);
    if (!slot) {
      const edgeJitter = 11 * (fbm(x * 0.028, 3.1, 3, 17) - 0.5) + 7 * Math.sin(x * 0.065);
      const edgeZ = LANDMARKS.arch.z - 8 + edgeJitter;
      if (z < edgeZ) {
        const faceDepth = 16 + 12 * fbm(x * 0.05, 1.7, 2, 11);
        const drop = saturate((edgeZ - z) / faceDepth);
        const toe = Math.max(1.2, 1.2 + 3.0 * fbm(x * 0.08, z * 0.08, 2, 5) * (1 - drop));
        h = lerp(h, toe, drop * drop);
        if (h < 1.2) h = 1.2;
      }
    }
  }

  // East cape: a tighter limestone headland with a vegetated top — not a long sandbar.
  if (x > 70 && x < 280 && z > -1340 && z < -1170) {
    const shelf = smoothstep(70, 110, x) * smoothstep(280, 220, x) * smoothstep(-1340, -1280, z) * smoothstep(-1170, -1220, z);
    const n = fbm(x * 0.018, z * 0.018, 4, 9);
    const beach = 1.2 + 0.6 * n;
    const cliff = 14 + 10 * n + 6 * fbm(x * 0.04, z * 0.04, 3, 21);
    const fromWater = saturate((z + 1340) / 40);
    const top = lerp(beach, cliff, smoothstep(0.18, 0.62, fromWater * shelf));
    h = Math.max(h, lerp(h, top, shelf * 0.88));
  }

  return h;
}

export function computeMaterial(x, z, h, slope) {
  const dist = Math.hypot(x, z);
  if (h < -1.2) return MAT.WATER_DEEP;
  if (h < 0.45) return MAT.SEA;
  // foam / wet sand near water (east beaches only — west cape stays limestone)
  const westCape = x < -40 && z < -1180;
  if (h < 1.6 && !westCape) return MAT.SAND;
  if (westCape) {
    if (slope > 0.30 || h < 7) return MAT.ROCK;
    return MAT.GRASS;
  }
  const vd = dist2(x, z, 0, 200);
  if (vd < 80 && h > 210) return MAT.SNOW;
  const wd = dist2(x, z, LANDMARKS.waterfall.x, LANDMARKS.waterfall.z);
  if (wd < 150) return MAT.GRASS;
  // Only the steep upper cone stays bare rock; mid-flanks are grass/scrub with outcrops.
  if (vd < 160 && h > 185) return MAT.ROCK;
  if (vd < 420 && h > 40 && h < 200 && slope < 0.68) {
    const outcrop = fbm(x * 0.03, z * 0.03, 3, 19);
    if (slope > 0.58 && outcrop > 0.72) return MAT.ROCK;
    return (h > 130 ? MAT.FOREST : MAT.GRASS);
  }
  if (slope > 0.78) return MAT.ROCK;
  // airport / runway
  if (Math.abs(z + 1100) < 28 && Math.abs(x) < 430 && h > 2 && h < 8) return MAT.RUNWAY;
  if (Math.abs(z + 1100) < 90 && Math.abs(x) < 500 && h > 2 && h < 10) return MAT.DIRT;
  // grass strip
  if (Math.abs(z - 1120) < 16 && Math.abs(x + 820) < 140) return MAT.RUNWAY;
  // lagoon sand + the one small cove; south coast is rock
  if (h < 3.5 && dist2(x, z, -740, -1120) < 260) return MAT.SAND;
  if (h < 4.2 && dist2(x, z, 20, -1210) < 90) return MAT.SAND;
  // East-coast headland: sand at the water, rock on the face, pines/grass only on top
  if (x > 70 && x < 280 && z > -1340 && z < -1175) {
    if (h < 2.4) return MAT.SAND;
    if (slope > 0.32 || h < 8) return MAT.ROCK;
    return MAT.GRASS;
  }
  if (h < 4.5 && dist2(x, z, LANDMARKS.lighthouse.x + 40, LANDMARKS.lighthouse.z + 40) < 80) return MAT.SAND;
  if (h < 1.15) return MAT.SAND;
  // Coastal cliffs only — steep faces near the water, not the whole south slope.
  const nearCoast = h > 1.4 && h < 48 && (z < -1180 || dist2(x, z, LANDMARKS.lighthouse.x, LANDMARKS.lighthouse.z) < 180 || dist2(x, z, LANDMARKS.arch.x, LANDMARKS.arch.z) < 120);
  if (nearCoast && slope > 0.22) return MAT.ROCK;
  // Inland hills: grass/scrub with scattered rock outcrops, not a mud slope.
  if (slope > 0.48 && h < 90 && !nearCoast) {
    const outcrop = fbm(x * 0.04, z * 0.04, 2, 23);
    if (outcrop > 0.66) return MAT.ROCK;
    return MAT.GRASS;
  }
  if (slope > 0.70 && h < 80) return MAT.ROCK;
  // forest belts
  const forestN = fbm(x * 0.0022, z * 0.0022, 4, 44);
  if (h > 12 && h < 95 && slope < 0.42 && forestN > 0.40 && vd > 240) return MAT.FOREST;
  // Ochre terraced fields on the mid-south slopes
  const fieldN = fbm(x * 0.0055, z * 0.0055, 3, 12);
  if (h > 8 && h < 55 && slope < 0.28 && fieldN < 0.32 && z > -1050 && z < -200 && Math.abs(x) < 700) return MAT.DIRT;
  return MAT.GRASS;
}

export function createTerrain(quality = "medium") {
  const N = (QUALITY[quality] && QUALITY[quality].terrainN) || 192;
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
      case MAT.SEA: return [0.07, 0.32 + n * 0.04, 0.40];
      case MAT.WATER_DEEP: return [0.06, 0.22, 0.30];
      case MAT.SAND: return [0.90 + n * 0.04, 0.78 + n * 0.04, 0.52 + n * 0.04];
      case MAT.GRASS: {
        const n2 = fbm(x * 0.007, z * 0.007, 3, 7);
        const terrace = Math.abs(Math.sin(h * 0.62 + x * 0.028 + z * 0.018)) < 0.07;
        const ochre = [0.64 + n * 0.05, 0.52 + n * 0.03, 0.24];
        const sage  = [0.48, 0.52, 0.32];
        const olive = [0.40, 0.44, 0.20];
        const pine  = [0.20, 0.34, 0.16];
        const meadow= [0.38 + n * 0.04, 0.50 + n * 0.04, 0.22];
        let col;
        if (n2 < 0.38) {
          const k = Math.min(1, (0.38 - n2) / 0.14);
          const base = n2 < 0.18 ? ochre : sage;
          col = [
            meadow[0] + (base[0] - meadow[0]) * k,
            meadow[1] + (base[1] - meadow[1]) * k,
            meadow[2] + (base[2] - meadow[2]) * k,
          ];
        } else if (n2 < 0.48) col = sage;
        else if (n2 < 0.66) col = olive;
        else if (n2 > 0.82) col = pine;
        else col = meadow;
        if (terrace) col = [col[0] * 0.88, col[1] * 0.86, col[2] * 0.84];
        const n3 = fbm(x * 0.05, z * 0.05, 2, 13);
        col = [col[0] * (0.90 + n3 * 0.18), col[1] * (0.90 + n3 * 0.16), col[2] * (0.90 + n3 * 0.12)];
        return col;
      }
      case MAT.FOREST: return [0.22 + n * 0.05, 0.36 + n * 0.08, 0.18];
      case MAT.ROCK: {
        const vd = Math.hypot(x, z - 200);
        // Crater glow only at the lip — the cone itself is brown/grey rock
        if (vd < 90 && h > 200) {
          const lava = (Math.sin(x * 0.18 + z * 0.14) * Math.sin(h * 0.1)) > 0.35;
          return lava ? [0.95, 0.28, 0.08] : [0.55, 0.32, 0.22];
        }
        if (vd < 280 && h > 170) return [0.46 + n * 0.06, 0.42 + n * 0.04, 0.38];
        // Coastal / cape rock: warm cream limestone, not khaki or cold grey
        const coastal = z < -1080 || (x > 40 && z < -1100) || Math.hypot(x + 170, z + 1190) < 220 || Math.hypot(x + 210, z + 1250) < 140;
        const crevice = (Math.sin(x * 0.35 + z * 0.22) * Math.sin(x * 0.17 - z * 0.31)) > 0.45;
        const base = coastal
          ? [0.82 + n * 0.05, 0.75 + n * 0.04, 0.58 + n * 0.03]
          : [0.62 + n * 0.06, 0.59 + n * 0.05, 0.52 + n * 0.04];
        return crevice ? [base[0] * 0.78, base[1] * 0.76, base[2] * 0.72] : base;
      }
      case MAT.SNOW: return [0.90, 0.92, 0.95];
      case MAT.DIRT: {
        const apron = Math.abs(z + 1100) < 100 && Math.abs(x) < 520;
        if (apron) return [0.66, 0.52, 0.30];
        const plot = fbm(x * 0.004, z * 0.004, 2, 8);
        if (plot > 0.55) return [0.46 + n * 0.05, 0.50 + n * 0.05, 0.24]; // sage crop
        return [0.68 + n * 0.04, 0.56 + n * 0.03, 0.28]; // ochre wheat
      }
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
      // aId.y = 2 marks a crop field (for the terrain shader). Not the airport apron.
      const apron = Math.abs(z + 1100) < 100 && Math.abs(x) < 520;
      const isDirtField = mats[o] === MAT.DIRT && !apron;
      const isOchreGrass = mats[o] === MAT.GRASS && fbm(x * 0.007, z * 0.007, 3, 7) < 0.34;
      aid[o * 2 + 1] = (isDirtField || isOchreGrass) ? 2 : 0;
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
    } else if (vd < 230 && hgt > 85 && (streak > 0.38 || (z < 120 && streak > 0.30))) {
      col[o*3] = 0.98; col[o*3+1] = 0.22 + (streak - 0.30) * 0.65; col[o*3+2] = 0.05;
      aid[o*2] = MAT.LIGHT; aid[o*2+1] = 1;
    } else {
      let sh = 0.78 + 0.34 * ndl;
      const slope = 1 - nrm[o*3+1];
      if (slope > 0.24 && hgt > 1.2) {
        const hatch = Math.sin(x * 0.62 + hgt * 0.8) * Math.sin(z * 0.2 + x * 0.1);
        if (hatch > 0.55) sh *= 0.82;
        if (hatch > 0.82) sh *= 0.8;
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

  const mat = terrainLambert();
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
