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
uniform float uContrast;     // high-contrast hero boost
uniform float uQuantize;
uniform float uEdge;
uniform float uFog;
uniform vec3 uFogColor;
uniform float uGlowBoost;
uniform float uTrail;        // unused here (done in JS mix)
uniform vec3 uTint;
uniform vec3 uPaperBg;
uniform vec3 uPaperFg;

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

void main() {
  vec2 cell = floor(vUv * uGrid);
  vec2 cellUv = (cell + 0.5) / uGrid;
  vec2 fracuv = fract(vUv * uGrid);

  vec4 colS = texture2D(tColor, cellUv);
  vec4 idS  = texture2D(tId, cellUv);
  float matId = floor(idS.r * 255.0 + 0.5);
  float hero  = idS.g;
  float lum   = clamp(pow(max(luma(colS.rgb), 0.0), 0.85) * 1.15, 0.0, 1.0);

  // Edges from linearized depth discontinuities
  float d  = linDepth(texture2D(tDepth, cellUv).r);
  float dl = linDepth(texture2D(tDepth, cellUv + vec2(-1.0, 0.0) / uGrid).r);
  float dr = linDepth(texture2D(tDepth, cellUv + vec2( 1.0, 0.0) / uGrid).r);
  float du = linDepth(texture2D(tDepth, cellUv + vec2( 0.0, 1.0) / uGrid).r);
  float dd = linDepth(texture2D(tDepth, cellUv + vec2( 0.0,-1.0) / uGrid).r);
  float gx = dr - dl;
  float gy = du - dd;
  float gabsx = abs(gx);
  float gabsy = abs(gy);
  // Ignore invalid / sky-sky depth (far plane) and tiny numerical noise
  float valid = step(uNearFar.x + 0.5, d) * step(d, uNearFar.y * 0.98);
  float vL = step(uNearFar.x + 0.5, dl) * step(dl, uNearFar.y * 0.98);
  float vR = step(uNearFar.x + 0.5, dr) * step(dr, uNearFar.y * 0.98);
  float vU = step(uNearFar.x + 0.5, du) * step(du, uNearFar.y * 0.98);
  float vD = step(uNearFar.x + 0.5, dd) * step(dd, uNearFar.y * 0.98);
  float thr = uEdge * (1.0 + d * 0.02);
  float isEdge = valid * step(thr, max(gabsx, gabsy)) * step(1.5, vL+vR+vU+vD);

  // Glyph from ramp (mat row, luminance column)
  float row = (matId + 0.5) / float(${MAT_COUNT});
  float glyph = texture2D(tRamps, vec2(clamp(lum, 0.0, 0.999), row)).r * 255.0;

  // Directional edge glyphs (skip for hero / rings / balloons / lights — keep them solid)
  float skipEdge = step(0.5, hero) + step(17.5, matId) * step(matId, 20.5) + step(matId, 18.5) * step(17.5, matId);
  if (isEdge > 0.5 && skipEdge < 0.5 && matId != 21.0) {
    if (gabsx > gabsy * 1.55) {
      glyph = ${G.VBAR}.0;
    } else if (gabsy > gabsx * 1.55) {
      glyph = ${G.HBAR}.0;
    } else if (gx * gy > 0.0) {
      glyph = ${G.BSLASH}.0;
    } else {
      glyph = ${G.SLASH}.0;
    }
  }

  // Sky stays sparse
  if (matId == 21.0 && lum < 0.92) {
    // keep ramp (dots)
  }

  // Hero / plane / ring / balloon always use dense glyphs
  if (hero > 0.5 || matId == 10.0 || matId == 11.0 || matId == 19.0 || matId == 20.0) {
    float hLum = clamp(lum * 1.15 + 0.15 * uContrast, 0.0, 1.0);
    glyph = mix(29.0, 23.0, hLum); // O .. █-ish; then override properly below
    if (matId == 19.0) glyph = (lum > 0.55) ? 29.0 : 30.0;          // O / o
    else if (matId == 20.0) glyph = (fracuv.x < 0.5) ? 35.0 : 36.0; // ( )
    else if (matId == 18.0) glyph = 33.0;                            // ★
    else glyph = (hLum > 0.72) ? 23.0 : (hLum > 0.4 ? 9.0 : 7.0);  // █ @ #
  }

  // Fog: thin the glyphs with distance (move toward space / first ramp)
  float fogAmt = clamp((d - 80.0) / max(uFog, 1.0), 0.0, 1.0);
  if (matId != 21.0 && matId != 18.0 && hero < 0.5) {
    if (fogAmt > 0.65 && lum < 0.8) {
      // sparser
      if (fogAmt > 0.88) glyph = 0.0;
      else if (lum < 0.35) glyph = 0.0;
      else glyph = 1.0; // dot
    }
  }

  // Sample atlas
  float gi = floor(glyph + 0.5);
  float ax = mod(gi, ${ATLAS_COLS}.0);
  float ay = floor(gi / ${ATLAS_COLS}.0);
  // atlas is packed top-down (flipY=false) so v grows downward
  vec2 uvA = (vec2(ax, ay) + fracuv) / vec2(${ATLAS_COLS}.0, ${ATLAS_ROWS}.0);
  float g = texture2D(tAtlas, uvA).r;
  // slight sharpen
  g = smoothstep(0.18, 0.78, g);

  vec3 col = colS.rgb;
  col = mix(col, quantize(col, uQuantize), step(2.0, uQuantize));
  col = mix(uFogColor, col, 1.0 - fogAmt * 0.55);

  if (hero > 0.5 || matId == 10.0 || matId == 20.0 || matId == 19.0) {
    col *= 1.0 + 0.35 * uContrast;
    col = mix(col, vec3(1.0), 0.08);
  }

  vec3 bg, fg;
  if (uMode > 2.5) {
    // Paper: black glyphs on cream
    bg = uPaperBg;
    fg = uPaperFg * (0.4 + luma(col) * 0.8);
    gl_FragColor = vec4(mix(bg, fg, g), 1.0);
  } else if (uMode > 0.5) {
    // Green / Amber phosphor
    float L = luma(col);
    vec3 tint = uTint;
    bg = tint * (0.015 + L * 0.04);
    fg = tint * (0.25 + L * 1.35);
    vec3 outc = mix(bg, fg, g);
    // slight phosphor bloom contribution baked as lift
    outc += tint * g * 0.12 * uGlowBoost;
    gl_FragColor = vec4(outc, 1.0);
  } else {
    bg = col * 0.055;
    fg = col * (0.28 + 1.35 * g);
    vec3 outc = mix(bg, fg, g);
    outc += col * g * 0.15 * uGlowBoost;
    gl_FragColor = vec4(outc, 1.0);
  }
}
`;

export function computeGrid(cssW, cssH, charSize, qualityScale = 1) {
  const mobile = isMobileUA() || cssW < 820;
  const table = CHAR_SIZE[charSize] || CHAR_SIZE.medium;
  let cell = mobile ? table.mobile : table.desktop;
  cell = cell / (qualityScale || 1);
  cell = Math.max(4, cell);
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
    uEdge: { value: 18.0 },
    uFog: { value: 2800 },
    uFogColor: { value: new THREE.Color(0x8ec8e8) },
    uGlowBoost: { value: 0.7 },
    uTrail: { value: 0 },
    uTint: { value: new THREE.Color(0x5aff90) },
    uPaperBg: { value: new THREE.Color(0xf0e6c8) },
    uPaperFg: { value: new THREE.Color(0x1a140c) },
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
