import * as THREE from "three";
import { MAT, MAT_COUNT } from "../core/config.js";
import { G, buildRampTexture } from "./ramps.js";
import { buildGlyphAtlas, ATLAS_COLS, ATLAS_ROWS } from "./atlas.js";
import { CHAR_SIZE, GRID_CAPS } from "../core/config.js";
import { isMobileUA } from "../core/utils.js";

const VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform sampler2D tColor;
uniform sampler2D tDepth;
uniform sampler2D tId;
uniform sampler2D tAtlas;
uniform sampler2D tRamps;
uniform vec2 uGrid;
uniform vec2 uNearFar;
uniform float uTime;
uniform float uMode;         // 0 color, 1 green, 2 amber, 3 paper
uniform float uContrast;
uniform float uQuantize;
uniform float uEdge;
uniform float uFog;
uniform vec3 uFogColor;
uniform float uGlowBoost;
uniform float uTrail;
uniform vec3 uTint;
uniform vec3 uPaperBg;
uniform vec3 uPaperFg;
uniform float uRain;
uniform float uFlash;

float linDepth(float d) {
  float zN = uNearFar.x;
  float zF = uNearFar.y;
  float z = d * 2.0 - 1.0;
  return (2.0 * zN * zF) / (zF + zN - z * (zF - zN));
}

float luma(vec3 c) {
  return dot(c, vec3(0.2126, 0.7152, 0.0722));
}

vec3 quantize(vec3 c, float steps) {
  if (steps < 2.0) return c;
  return floor(c * steps + 0.5) / steps;
}

float matFrom(vec4 idS, vec4 colS) {
  float fromA = floor(colS.a * 255.0 + 0.5);
  if (fromA >= 0.5 && fromA <= 24.5) return fromA;
  return floor(idS.r * 255.0 + 0.5);
}

void main() {
  vec2 cell = floor(vUv * uGrid);
  vec2 cellUv = (cell + 0.5) / uGrid;
  vec2 fracuv = fract(vUv * uGrid);
  vec2 texel = 1.0 / uGrid;

  vec4 colS = texture2D(tColor, cellUv);
  vec4 idS  = texture2D(tId, cellUv);
  float matId = matFrom(idS, colS);
  float hero  = idS.g;
  if (matId == 10.0 || matId == 11.0 || matId == 19.0 || matId == 20.0 || matId == 18.0) hero = 1.0;

  // Expose the full ramp: lift midtones so a sunny scene actually uses bright glyphs
  float rawL = luma(colS.rgb);
  float lum = clamp(pow(max(rawL, 0.0), 0.78) * 1.28 + 0.04, 0.0, 1.0);

  // Depth + colour + material edges for precise silhouettes, coasts, runway lines
  float d  = linDepth(texture2D(tDepth, cellUv).r);
  vec4 cL = texture2D(tColor, cellUv + vec2(-1.0, 0.0) * texel);
  vec4 cR = texture2D(tColor, cellUv + vec2( 1.0, 0.0) * texel);
  vec4 cU = texture2D(tColor, cellUv + vec2( 0.0, 1.0) * texel);
  vec4 cD = texture2D(tColor, cellUv + vec2( 0.0,-1.0) * texel);
  float dL = linDepth(texture2D(tDepth, cellUv + vec2(-1.0, 0.0) * texel).r);
  float dR = linDepth(texture2D(tDepth, cellUv + vec2( 1.0, 0.0) * texel).r);
  float dU = linDepth(texture2D(tDepth, cellUv + vec2( 0.0, 1.0) * texel).r);
  float dDn = linDepth(texture2D(tDepth, cellUv + vec2( 0.0,-1.0) * texel).r);
  float valid = step(uNearFar.x + 0.5, d) * step(d, uNearFar.y * 0.98);
  float vL = step(uNearFar.x + 0.5, dL) * step(dL, uNearFar.y * 0.98);
  float vR = step(uNearFar.x + 0.5, dR) * step(dR, uNearFar.y * 0.98);
  float vU = step(uNearFar.x + 0.5, dU) * step(dU, uNearFar.y * 0.98);
  float vD = step(uNearFar.x + 0.5, dDn) * step(dDn, uNearFar.y * 0.98);
  float gx = dR - dL;
  float gy = dU - dDn;
  float gabsx = abs(gx);
  float gabsy = abs(gy);
  float thr = uEdge * (1.0 + d * 0.012);
  float depthEdge = valid * step(thr, max(gabsx, gabsy)) * step(1.5, vL+vR+vU+vD);
  float colEdge = valid * step(0.09, max(max(abs(luma(cL.rgb)-rawL), abs(luma(cR.rgb)-rawL)), max(abs(luma(cU.rgb)-rawL), abs(luma(cD.rgb)-rawL))));
  float mL = matFrom(texture2D(tId, cellUv + vec2(-1.0, 0.0) * texel), cL);
  float mR = matFrom(texture2D(tId, cellUv + vec2( 1.0, 0.0) * texel), cR);
  float mU = matFrom(texture2D(tId, cellUv + vec2( 0.0, 1.0) * texel), cU);
  float mD = matFrom(texture2D(tId, cellUv + vec2( 0.0,-1.0) * texel), cD);
  float matEdge = valid * step(0.5, max(max(abs(mL-matId), abs(mR-matId)), max(abs(mU-matId), abs(mD-matId))));
  float isEdge = max(depthEdge, max(colEdge * 0.85, matEdge));

  // Glyph from per-material ramp
  float row = (matId + 0.5) / float(${MAT_COUNT});
  float glyph = texture2D(tRamps, vec2(clamp(lum, 0.0, 0.999), row)).r * 255.0;

  // Directional silhouette / coastline / runway / plane outline glyphs
  // Keep lights as solid stars; everything else can take an outline.
  float skipEdge = step(17.5, matId) * step(matId, 18.5);
  if (isEdge > 0.5 && skipEdge < 0.5 && matId != 21.0) {
    if (gabsx > gabsy * 1.4) {
      glyph = ${G.VBAR}.0;
    } else if (gabsy > gabsx * 1.4) {
      glyph = ${G.HBAR}.0;
    } else if (gx * gy > 0.0) {
      glyph = ${G.BSLASH}.0;
    } else {
      glyph = ${G.SLASH}.0;
    }
    // colour-only edges (runway paint, material seams) prefer horizontal/vertical by luma grad
    if (depthEdge < 0.5) {
      float cgx = luma(cR.rgb) - luma(cL.rgb);
      float cgy = luma(cU.rgb) - luma(cD.rgb);
      if (abs(cgx) > abs(cgy) * 1.3) glyph = ${G.VBAR}.0;
      else if (abs(cgy) > abs(cgx) * 1.3) glyph = ${G.HBAR}.0;
    }
  }

  // Sky: DENSE bright glyphs on a dark field — stars, colons, middots. Never a flat wash.
  if (matId == 21.0) {
    float sh = fract(sin(cell.x * 12.9898 + cell.y * 78.233) * 43758.5453);
    if (lum > 0.93) glyph = ${G.STARF}.0;
    else if (sh > 0.965) glyph = ${G.STAR}.0;
    else if (sh > 0.70) glyph = ${G.COLON}.0;
    else if (sh > 0.38) glyph = ${G.MIDDOT}.0;
    else glyph = ${G.DOT}.0;
  }

  // Clouds: soft ░▒ shapes, not noise
  if (matId == 7.0) {
    glyph = lum > 0.78 ? ${G.SHADE3}.0 : (lum > 0.52 ? ${G.SHADE2}.0 : (lum > 0.28 ? ${G.SHADE1}.0 : 0.0));
  }
  // Sea sparkle: occasional bright glyphs on already-bright wave peaks
  if (matId == 1.0 || matId == 16.0) {
    float wh = fract(sin(cell.x * 19.13 + cell.y * 47.71 + uTime * 0.35) * 93731.3);
    if (lum > 0.62 && wh > 0.86) glyph = ${G.STAR}.0;
    else if (lum > 0.55 && wh > 0.72) glyph = ${G.WAVE}.0;
  }

  // Hero / plane / ring / balloon — dense, popping glyphs, with outline already applied if edged
  if (hero > 0.5 || matId == 10.0 || matId == 11.0 || matId == 19.0 || matId == 20.0) {
    if (!(isEdge > 0.5 && skipEdge < 0.5)) {
      float hLum = clamp(lum * 1.15 + 0.18 * uContrast, 0.0, 1.0);
      if (matId == 19.0) glyph = (hLum > 0.55) ? 29.0 : 30.0;          // O / o
      else if (matId == 20.0) glyph = (fracuv.x < 0.5) ? 35.0 : 36.0; // ( )
      else if (matId == 18.0) glyph = 33.0;                            // ★
      else glyph = (hLum > 0.72) ? 23.0 : (hLum > 0.4 ? 9.0 : 7.0);  // █ @ #
    }
  }

  // Distant fog: thin glyphs only very far away, never mush the island
  float fogAmt = clamp((d - 1400.0) / max(uFog, 1.0), 0.0, 1.0);
  if (matId != 21.0 && matId != 18.0 && hero < 0.5 && fogAmt > 0.88) {
    if (lum < 0.35) glyph = ${G.DOT}.0;
  }

  // Sample atlas — tight smoothstep keeps cells sharp, not mushy
  float gi = floor(glyph + 0.5);
  float ax = mod(gi, ${ATLAS_COLS}.0);
  float ay = floor(gi / ${ATLAS_COLS}.0);
  vec2 uvA = (vec2(ax, ay) + fracuv) / vec2(${ATLAS_COLS}.0, ${ATLAS_ROWS}.0);
  float g = texture2D(tAtlas, uvA).r;
  g = smoothstep(0.34, 0.66, g);

  vec3 col = colS.rgb;
  // Saturate and keep a healthy midtone range so ramps actually change
  float L0 = luma(col);
  col = mix(vec3(L0), col, 1.62);
  col = col * 1.06;
  col = mix(col, quantize(col, uQuantize), step(2.0, uQuantize));
  // Distant haze stays deep blue, never a white wall
  vec3 haze = vec3(0.06, 0.12, 0.28);
  col = mix(col, haze, fogAmt * 0.22);

  if (hero > 0.5 || matId == 10.0 || matId == 20.0 || matId == 19.0 || matId == 18.0) {
    col *= 1.0 + 0.45 * uContrast;
    col = mix(col, vec3(1.0), 0.12);
  }

  vec3 bg, fg, outc;
  float L = luma(col);
  if (uMode > 2.5) {
    bg = uPaperBg;
    fg = uPaperFg * (0.4 + luma(col) * 0.8);
    outc = mix(bg, fg, g);
  } else if (uMode > 0.5) {
    L = luma(col);
    vec3 tint = uTint;
    bg = tint * (0.03 + L * 0.08);
    fg = tint * (0.40 + L * 1.50);
    outc = mix(bg, fg, g);
    outc += tint * g * g * 0.22 * uGlowBoost;
  } else {
    // Reference look: dark navy cell background, BRIGHT saturated glyphs, glow on the ink.
    col = clamp(col, 0.0, 1.6);
    L = clamp(luma(col), 0.0, 1.0);
    vec3 bgNavy = vec3(0.03, 0.08, 0.18);
    if (matId == 21.0) {
      bgNavy = mix(vec3(0.05, 0.14, 0.36), vec3(0.02, 0.05, 0.18), pow(clamp(vUv.y, 0.0, 1.0), 0.85));
      col = mix(vec3(0.20, 0.50, 1.0), vec3(0.55, 0.82, 1.0), clamp(0.2 + vUv.y * 0.45, 0.0, 1.0));
      if (rawL > 0.94) col = mix(col, vec3(1.0, 0.95, 0.72), 0.75);
    } else if (matId == 7.0) {
      col = mix(vec3(0.62, 0.74, 0.95), vec3(1.0, 1.0, 1.0), clamp(L0 * 1.15, 0.0, 1.0));
    } else if (matId == 1.0 || matId == 16.0) {
      col = mix(vec3(L), col, 1.45);
      col = max(col, vec3(0.02, 0.18, 0.42));
      col.b = max(col.b, col.r * 1.25 + 0.08);
      // lift so glyphs stay turquoise even if the colour RT is dark
      col *= 1.25;
    } else {
      // Land / buildings: keep hue, give glyphs a readable brightness floor
      vec3 hue = col / max(L, 0.08);
      col = hue * mix(0.42, 1.15, pow(L, 0.65));
    }
    L = clamp(luma(col), 0.0, 1.0);
    bg = mix(bgNavy, col * 0.20, 0.55);
    fg = col * (1.25 + 0.55 * L) + vec3(0.05);
    if (matId == 20.0 || matId == 18.0 || matId == 11.0) {
      fg *= 1.25;
      fg = mix(fg, vec3(1.0, 0.85, 0.35), matId == 20.0 ? 0.25 : 0.0);
    }
    outc = mix(bg, max(fg, col * 0.9), g);
    outc += fg * g * g * 0.42 * uGlowBoost;
  }
  // Storm: diagonal rain glyphs and a lightning flash over the whole frame
  if (uRain > 0.04) {
    outc *= 1.0 - 0.08 * uRain;
    float colH = fract(sin(cell.x * 17.13 + 1.7) * 931.7);
    float streak = fract((cell.x + cell.y * 1.35) * 0.37 - uTime * 11.0);
    float slash = 1.0 - smoothstep(0.07, 0.15, abs(fracuv.x - (1.0 - fracuv.y)));
    if (colH > 0.32 && streak > 0.84) {
      outc = mix(outc, vec3(0.55, 0.78, 1.0), slash * 0.8 * uRain);
    }
    // white foam already in the sea; add a little extra spray near mid
  }
  outc += vec3(0.55, 0.42, 0.95) * uFlash;
  outc += vec3(0.25, 0.28, 0.4) * uFlash * 0.6;
  gl_FragColor = vec4(outc, 1.0);
}


`;

export function computeGrid(cssW, cssH, charSize, qualityScale = 1, dpr = 1) {
  const mobile = isMobileUA() || cssW < 820;
  const table = CHAR_SIZE[charSize] || CHAR_SIZE.medium;
  let cell = mobile ? table.mobile : table.desktop;
  // Retina: slightly denser character grid, not a full 2× (keeps mobile smooth)
  if (dpr >= 2.25) cell *= 0.78;
  else if (dpr >= 1.75) cell *= 0.84;
  else if (dpr >= 1.4) cell *= 0.9;
  cell = cell / (qualityScale || 1);
  cell = Math.max(mobile ? 5.5 : 5, cell);
  let cols = Math.max(48, Math.round(cssW / cell));
  let rows = Math.max(28, Math.round(cssH / cell));
  const cap = mobile ? GRID_CAPS.mobile : GRID_CAPS.desktop;
  if (cols > cap.cols) {
    const s = cap.cols / cols;
    cols = cap.cols;
    rows = Math.max(28, Math.round(rows * s));
  }
  if (rows > cap.rows) {
    const s = cap.rows / rows;
    rows = cap.rows;
    cols = Math.max(48, Math.round(cols * s));
  }
  return { cols, rows, cell: cssW / cols };
}

export function createAsciiPipeline() {
  const atlas = buildGlyphAtlas();
  const ramps = buildRampTexture(THREE);

  const uniforms = {
    tColor: { value: null },
    tDepth: { value: null },
    tId: { value: null },
    tAtlas: { value: atlas.texture },
    tRamps: { value: ramps },
    uGrid: { value: new THREE.Vector2(160, 90) },
    uNearFar: { value: new THREE.Vector2(0.8, 6200) },
    uTime: { value: 0 },
    uMode: { value: 0 },
    uContrast: { value: 1 },
    uQuantize: { value: 0 },
    uEdge: { value: 12.0 },
    uFog: { value: 4200 },
    uFogColor: { value: new THREE.Color(0xb8dcf0) },
    uGlowBoost: { value: 0.85 },
    uTrail: { value: 0 },
    uTint: { value: new THREE.Color(0x5aff90) },
    uPaperBg: { value: new THREE.Color(0xf0e6c8) },
    uPaperFg: { value: new THREE.Color(0x1a140c) },
    uRain: { value: 0 },
    uFlash: { value: 0 },
  };

  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: VERT,
    fragmentShader: FRAG,
    depthTest: false,
    depthWrite: false,
  });

  const geom = new THREE.PlaneGeometry(2, 2);
  const mesh = new THREE.Mesh(geom, mat);
  mesh.frustumCulled = false;
  const scene = new THREE.Scene();
  scene.add(mesh);
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  function setMode(mode) {
    const map = { color: 0, green: 1, amber: 2, paper: 3 };
    uniforms.uMode.value = map[mode] ?? 0;
    if (mode === "green") uniforms.uTint.value.set(0x4dff88);
    if (mode === "amber") uniforms.uTint.value.set(0xffb84a);
  }

  return { uniforms, material: mat, scene, camera, atlas, ramps, setMode };
}
