import * as THREE from "three";

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
uniform sampler2D tBloom;
uniform vec2 uRes;
uniform vec2 uNearFar;
uniform float uTime;
uniform float uExposure;
uniform float uSat;
uniform float uOutline;
uniform float uBloom;
uniform float uRain;
uniform float uFlash;
uniform float uContrast;
uniform float uSpeed;
uniform float uBoost;

float linDepth(float d) {
  float zN = uNearFar.x;
  float zF = uNearFar.y;
  float z = d * 2.0 - 1.0;
  return (2.0 * zN * zF) / (zF + zN - z * (zF - zN));
}

float luma(vec3 c) {
  return dot(c, vec3(0.2126, 0.7152, 0.0722));
}

vec3 aces(vec3 x) {
  float a = 2.51;
  float b = 0.03;
  float c = 2.43;
  float d = 0.59;
  float e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

void main() {
  vec2 px = 1.0 / uRes;
  vec4 src4 = texture2D(tColor, vUv);
  vec3 src = src4.rgb;
  float matId = src4.a * 255.0;
  // Plane (10), hero (11), wood struts (12), metal/engine (14) — not roof (13)
  float isPlane = min(1.0, step(9.5, matId) * step(matId, 12.6) + step(13.5, matId) * step(matId, 14.6));
  vec3 col = aces(src * uExposure);
  float L = luma(col);
  col = mix(vec3(L), col, uSat);
  col = mix(vec3(0.5), col, uContrast);

  // Two-tone album shading on land and craft only. Water and sky stay a smooth
  // gradient — posterizing them makes regular open-water stripes.
  float isWater = min(1.0, step(0.5, matId) * step(matId, 1.5) + step(15.5, matId) * step(matId, 17.5));
  float isSky = step(20.5, matId) * step(matId, 21.5) + step(6.5, matId) * step(matId, 7.5);
  float isRing = step(19.5, matId) * step(matId, 20.5);
  float isFoliage = step(14.5, matId) * step(matId, 15.5);
  float isTerrain = step(2.5, matId) * step(matId, 5.5);
  // Runway / road (and leftover ground markings) — a long thin stripe at a
  // glancing angle must not draw as a black ink line across the frame.
  float isRoad = min(1.0, step(8.5, matId) * step(matId, 9.5) + step(22.5, matId) * step(matId, 23.5));
  float dither = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5;
  col = mix(col, floor(col * 5.0 + dither * 0.25 + 0.5) / 5.0, 0.28 * (1.0 - isWater) * (1.0 - isSky) * (1.0 - isRing));

  float d  = linDepth(texture2D(tDepth, vUv).r);
  vec2 o1 = px * 1.6;
  vec2 o2 = px * 2.6;
  float dL = linDepth(texture2D(tDepth, vUv + vec2(-o1.x, 0.0)).r);
  float dR = linDepth(texture2D(tDepth, vUv + vec2( o1.x, 0.0)).r);
  float dU = linDepth(texture2D(tDepth, vUv + vec2(0.0,  o1.y)).r);
  float dDn = linDepth(texture2D(tDepth, vUv + vec2(0.0, -o1.y)).r);
  float dL2 = linDepth(texture2D(tDepth, vUv + vec2(-o2.x, 0.0)).r);
  float dR2 = linDepth(texture2D(tDepth, vUv + vec2( o2.x, 0.0)).r);
  float dU2 = linDepth(texture2D(tDepth, vUv + vec2(0.0,  o2.y)).r);
  float dD2 = linDepth(texture2D(tDepth, vUv + vec2(0.0, -o2.y)).r);
  // Silhouettes only: a one-sided depth step on the near surface.
  // A receding slope has similar jumps both toward and away from the camera
  // and must not fill with ink.
  float dMin = min(min(dL, dR), min(dU, dDn));
  float dMax = max(max(dL, dR), max(dU, dDn));
  float jump = dMax - d;
  float dMin2 = min(min(dL2, dR2), min(dU2, dD2));
  float dMax2 = max(max(dL2, dR2), max(dU2, dD2));
  float jump2 = dMax2 - d;
  float farCut = uNearFar.y * 0.96;
  float notSky = step(d, farCut);
  // Cap outline thickness on the plane so a rounded tail never becomes a black ring.
  float expected = (0.018 * d + 0.75) * uOutline * mix(1.0, 0.62, isPlane) * mix(1.0, 2.4, isRoad) * mix(1.0, 0.70, isFoliage);
  float onNear = step(d - dMin, expected * 0.45 + mix(1.2, 0.45, isPlane));
  float sil = step(expected, jump) * onNear * notSky * (1.0 - isRoad);
  float onNear2 = step(d - dMin2, expected * 0.5 + 1.6);
  float silFar = step(expected * 1.2, jump2) * onNear2 * notSky * step(180.0, d) * (1.0 - isPlane) * (1.0 - isRoad);
  sil = max(sil, silFar);

  vec3 cL = texture2D(tColor, vUv + vec2(-o1.x, 0.0)).rgb;
  vec3 cR = texture2D(tColor, vUv + vec2( o1.x, 0.0)).rgb;
  vec3 cU = texture2D(tColor, vUv + vec2(0.0,  o1.y)).rgb;
  vec3 cD = texture2D(tColor, vUv + vec2(0.0, -o1.y)).rgb;
  float gCol = max(max(abs(luma(cL) - L), abs(luma(cR) - L)), max(abs(luma(cU) - L), abs(luma(cD) - L)));
  float minN = min(min(abs(luma(cL) - L), abs(luma(cR) - L)), min(abs(luma(cU) - L), abs(luma(cD) - L)));
  // Colour edges are too thick on the near plane (red/cream bands, tail cap).
  float colCut = mix(mix(0.20, 0.32, isPlane), 0.14, isFoliage);
  float colEdge = step(colCut, gCol) * step(minN, mix(0.14, 0.10, isPlane)) * notSky * mix(1.0, 0.55, isPlane) * (1.0 - isRing) * (1.0 - isRoad);
  // Terrain: only ink a crest or a material break, never fill a receding slope.
  colEdge *= mix(1.0, step(0.28, gCol) * step(jump, expected * 2.2), isTerrain);

  // Don't ink-hatch the water surface — grazing waves otherwise become regular stripes.
  sil *= 1.0 - isWater * 0.92;
  silFar *= 1.0 - isWater;
  colEdge *= 1.0 - isWater;
  float ink = max(sil, colEdge);
  vec3 inkCol = vec3(0.09, 0.07, 0.05);
  col = mix(col, inkCol, ink * mix(0.94, 0.86, isPlane));

  vec3 bloom = texture2D(tBloom, vUv).rgb;
  col += bloom * uBloom;
  // Soft-knee highlight compress so sky, clouds and sun-facing shots don't blow out.
  float Lh = luma(col);
  float knee = smoothstep(0.78, 1.08, Lh);
  col = mix(col, col * (0.78 / max(Lh, 0.001)), knee * 0.72);
  col = clamp(col, 0.0, 1.0);

  if (uRain > 0.04) {
    // Sparse, long, slightly translucent streaks — never a full-screen hatch.
    // Keep the plane and the ring clear so the player can always read them.
    vec2 ruv = vUv * uRes;
    float axis = ruv.x * 0.48 + ruv.y;
    float id = floor(axis / 52.0);
    float phase = fract(axis / 52.0);
    float drop = fract(ruv.y * 0.010 - uTime * 1.55 + id * 0.31);
    float line = 1.0 - smoothstep(0.0, 0.022, phase);
    float dash = smoothstep(0.08, 0.16, drop) * (1.0 - smoothstep(0.82, 0.94, drop));
    float keep = step(0.42, fract(id * 0.173 + 0.11));
    float offPlane = 1.0 - isPlane;
    float offRing = 1.0 - isRing;
    float mid = smoothstep(0.10, 0.28, distance(vUv, vec2(0.5, 0.52)));
    float rainAmt = line * dash * keep * offPlane * offRing * mid * uRain;
    col = mix(col, vec3(0.86, 0.90, 0.94), rainAmt * 0.48);
    // Mild desat on land only, no global exposure crush
    float Lr = dot(col, vec3(0.2126, 0.7152, 0.0722));
    col = mix(col, vec3(Lr), 0.16 * uRain * offPlane * (1.0 - isWater * 0.4) * (1.0 - isSky));
  }
  if (uSpeed > 0.08) {
    // Thin white streaks, screen edges only (stronger on boost).
    vec2 from = vUv - vec2(0.5, 0.48);
    float ang = atan(from.y, from.x);
    float rad = length(from);
    float id = floor((ang + 4.0) / 0.14);
    float phase = fract((ang + 4.0) / 0.14);
    float dash = fract(rad * 8.0 - uTime * (2.2 + uSpeed * 4.0) + id * 0.37);
    float line = step(phase, 0.045 + 0.035 * uSpeed) * step(0.14, dash) * step(dash, 0.52);
    float lineWide = step(phase, 0.09 + 0.05 * uSpeed) * step(0.10, dash) * step(dash, 0.56);
    float sides = max(smoothstep(0.13, 0.0, vUv.x), smoothstep(0.87, 1.0, vUv.x));
    sides = max(sides, smoothstep(0.11, 0.0, vUv.y));
    sides = max(sides, smoothstep(0.89, 1.0, vUv.y));
    float amt = (0.62 + 0.38 * uBoost) * (0.70 + 0.30 * uSpeed);
    col = mix(col, vec3(0.10, 0.12, 0.16), lineWide * sides * 0.40 * amt);
    col = mix(col, vec3(1.0, 1.0, 0.97), line * sides * amt);
  }
  // Lightning: a readable pulse on sky + terrain, not a white-out
  col *= 1.0 + uFlash * 0.32;
  col += vec3(0.90, 0.93, 1.0) * uFlash * 0.16;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

export function createLigneClaire() {
  const uniforms = {
    tColor: { value: null },
    tDepth: { value: null },
    tBloom: { value: null },
    uRes: { value: new THREE.Vector2(1920, 1080) },
    uNearFar: { value: new THREE.Vector2(0.8, 6200) },
    uTime: { value: 0 },
    uExposure: { value: 1.08 },
    uSat: { value: 1.32 },
    uOutline: { value: 0.42 },
    uBloom: { value: 0.26 },
    uRain: { value: 0 },
    uFlash: { value: 0 },
    uContrast: { value: 1.12 },
    uSpeed: { value: 0 },
    uBoost: { value: 0 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: VERT,
    fragmentShader: FRAG,
    depthTest: false,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
  mesh.frustumCulled = false;
  const scene = new THREE.Scene();
  scene.add(mesh);
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  return { uniforms, material: mat, scene, camera };
}
