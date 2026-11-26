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

  // Sky: mostly background colour, never a dense dot field.
  // Only the sun (very bright) and a few soft cloud patches get glyphs.
  if (matId == 21.0) {
    float sh = fract(sin(cell.x * 12.9898 + cell.y * 78.233) * 43758.5453);
    if (lum > 0.94) {
      glyph = ${G.STARF}.0;
    } else if (lum > 0.82 && rawL > 0.78) {
      glyph = ${G.SHADE1}.0; // soft sun glow / bright cloud
    } else if (sh > 0.993) {
      glyph = ${G.STAR}.0; // sparse day stars — stylized, never a dot field
    } else if (sh > 0.987) {
      glyph = ${G.MIDDOT}.0;
    } else {
      glyph = 0.0;
    }
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
  if (matId != 21.0 && matId != 18.0 && hero < 0.5) {
    if (fogAmt > 0.75 && lum < 0.55) {
      if (fogAmt > 0.92) glyph = 0.0;
      else glyph = 1.0;
    }
  }

  // Sample atlas — tight smoothstep keeps cells sharp, not mushy
  float gi = floor(glyph + 0.5);
  float ax = mod(gi, ${ATLAS_COLS}.0);
  float ay = floor(gi / ${ATLAS_COLS}.0);
  vec2 uvA = (vec2(ax, ay) + fracuv) / vec2(${ATLAS_COLS}.0, ${ATLAS_ROWS}.0);
  float g = texture2D(tAtlas, uvA).r;
  g = smoothstep(0.34, 0.66, g);

  vec3 col = colS.rgb;
  // Recover a sunny exposure if the source is a bit low
  col = col * 1.04 + 0.01;
  col = mix(col, quantize(col, uQuantize), step(2.0, uQuantize));
  col = mix(uFogColor, col, 1.0 - fogAmt * 0.35);

  if (hero > 0.5 || matId == 10.0 || matId == 20.0 || matId == 19.0) {
    col *= 1.0 + 0.4 * uContrast;
    col = mix(col, vec3(1.0), 0.10);
  }

  vec3 bg, fg, outc;
  // Screen-space fallback for a rich daytime sky if the colour RT blows out.
  vec3 styledSky = mix(vec3(0.42, 0.70, 0.94), vec3(0.07, 0.28, 0.72), pow(clamp(vUv.y, 0.0, 1.0), 0.85));
  if (uMode > 2.5) {
    bg = uPaperBg;
    fg = uPaperFg * (0.4 + luma(col) * 0.8);
    outc = mix(bg, fg, g);
  } else if (uMode > 0.5) {
    float L = luma(col);
    vec3 tint = uTint;
    bg = tint * (0.03 + L * 0.10);
    fg = tint * (0.35 + L * 1.45);
    outc = mix(bg, fg, g);
    outc += tint * g * g * 0.18 * uGlowBoost;
  } else if (matId == 21.0) {
    // Always a saturated sky field; never a white wall or a black void.
    vec3 src = clamp(col, 0.0, 1.0);
    float srcL = luma(src);
    float trust = step(0.08, src.b - src.r * 0.7) * step(srcL, 0.78) * step(0.12, srcL);
    vec3 skyCol = mix(styledSky, src, trust * 0.55);
    if (rawL > 0.94) skyCol = mix(skyCol, vec3(1.0, 0.96, 0.78), 0.8);
    bg = skyCol;
    fg = mix(skyCol, vec3(1.0), 0.4);
    outc = mix(bg, fg, g);
    outc += skyCol * g * g * 0.15 * uGlowBoost;
  } else if (matId == 7.0) {
    // White puffy clouds on the sky
    vec3 cloud = mix(vec3(0.90, 0.94, 1.0), vec3(1.0), clamp(luma(col) * 0.6, 0.0, 1.0));
    bg = mix(styledSky, cloud, 0.35 + 0.5 * g);
    fg = cloud;
    outc = mix(bg, fg, g);
    outc += cloud * g * g * 0.2 * uGlowBoost;
  } else {
    // Tinted cell background + sharp glyph. Never a near-black field.
    float L = luma(col);
    bg = col * (0.28 + 0.18 * L);
    fg = col * (1.05 + 0.45 * g) + vec3(0.04) * g;
    outc = mix(bg, max(fg, col * 0.85), g);
    outc += col * g * g * 0.26 * uGlowBoost;
  }
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
