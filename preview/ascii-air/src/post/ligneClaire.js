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
  vec3 src = texture2D(tColor, vUv).rgb;
  vec3 col = aces(src * uExposure);
  float L = luma(col);
  col = mix(vec3(L), col, uSat);
  col = mix(vec3(0.5), col, uContrast);

  // Two-tone album shading, then thin ink only — never fill a slope or the horizon.
  col = mix(col, floor(col * 5.0 + 0.5) / 5.0, 0.28);

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
  float expected = (0.018 * d + 0.75) * uOutline;
  float onNear = step(d - dMin, expected * 0.45 + 1.2);
  float sil = step(expected, jump) * onNear * notSky;
  float onNear2 = step(d - dMin2, expected * 0.5 + 1.6);
  float silFar = step(expected * 1.2, jump2) * onNear2 * notSky * step(180.0, d);
  sil = max(sil, silFar);

  vec3 cL = texture2D(tColor, vUv + vec2(-o1.x, 0.0)).rgb;
  vec3 cR = texture2D(tColor, vUv + vec2( o1.x, 0.0)).rgb;
  vec3 cU = texture2D(tColor, vUv + vec2(0.0,  o1.y)).rgb;
  vec3 cD = texture2D(tColor, vUv + vec2(0.0, -o1.y)).rgb;
  float gCol = max(max(abs(luma(cL) - L), abs(luma(cR) - L)), max(abs(luma(cU) - L), abs(luma(cD) - L)));
  float minN = min(min(abs(luma(cL) - L), abs(luma(cR) - L)), min(abs(luma(cU) - L), abs(luma(cD) - L)));
  float colEdge = step(0.20, gCol) * step(minN, 0.14) * notSky;

  float ink = max(sil, colEdge);
  vec3 inkCol = vec3(0.09, 0.07, 0.05);
  col = mix(col, inkCol, ink * 0.94);

  vec3 bloom = texture2D(tBloom, vUv).rgb;
  col += bloom * uBloom;

  if (uRain > 0.04) {
    // Dense diagonal comic-book rain slashes
    vec2 ruv = vUv * uRes;
    float axis = ruv.x * 0.62 + ruv.y;
    float id = floor(axis / 13.0);
    float phase = fract(axis / 13.0);
    float drop = fract(ruv.y * 0.035 - uTime * 1.9 + id * 0.41);
    float line = step(phase, 0.11);
    float dash = step(0.28, drop) * step(drop, 0.92);
    col = mix(col, vec3(0.78, 0.84, 0.92), line * dash * 0.62 * uRain);
    col *= 1.0 - 0.07 * uRain;
  }
  if (uSpeed > 0.12) {
    vec2 ruv = vUv * uRes;
    float axis = ruv.x * 0.18 + ruv.y;
    float id = floor(axis / 19.0);
    float phase = fract(axis / 19.0);
    float dash = fract(ruv.y * 0.02 + uTime * (1.4 + uSpeed * 2.2) + id * 0.37);
    float line = step(phase, 0.045 + 0.04 * uSpeed) * step(0.35, dash) * step(dash, 0.92);
    // Keep streaks out of the very center so the plane stays clean.
    float rim = smoothstep(0.18, 0.55, distance(vUv, vec2(0.5, 0.52)));
    col = mix(col, vec3(0.95, 0.96, 0.92), line * rim * 0.45 * uSpeed);
  }
  // Brief cool-white screen flash; the bolt mesh itself carries the purple-white colour
  col += vec3(0.85, 0.88, 1.0) * uFlash * 0.22;

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
    uExposure: { value: 1.20 },
    uSat: { value: 1.32 },
    uOutline: { value: 1.15 },
    uBloom: { value: 0.55 },
    uRain: { value: 0 },
    uFlash: { value: 0 },
    uContrast: { value: 1.12 },
    uSpeed: { value: 0 },
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
