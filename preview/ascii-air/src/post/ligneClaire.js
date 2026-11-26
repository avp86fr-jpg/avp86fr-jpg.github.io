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

  // Uniform-width ink: sample a 1.5px ring so lines stay even (no thick/thin taper).
  // Depth edges (silhouettes) get a slightly firmer mark; colour seams stay hairline.
  float d  = linDepth(texture2D(tDepth, vUv).r);
  vec2 o1 = px * 1.15;
  float dL = linDepth(texture2D(tDepth, vUv + vec2(-o1.x, 0.0)).r);
  float dR = linDepth(texture2D(tDepth, vUv + vec2( o1.x, 0.0)).r);
  float dU = linDepth(texture2D(tDepth, vUv + vec2(0.0,  o1.y)).r);
  float dDn = linDepth(texture2D(tDepth, vUv + vec2(0.0, -o1.y)).r);
  float gDepth = max(abs(dR - dL), abs(dU - dDn)) / max(d, 1.0);
  float sil = step(0.018 * uOutline, gDepth);

  vec3 cL = texture2D(tColor, vUv + vec2(-o1.x, 0.0)).rgb;
  vec3 cR = texture2D(tColor, vUv + vec2( o1.x, 0.0)).rgb;
  vec3 cU = texture2D(tColor, vUv + vec2(0.0,  o1.y)).rgb;
  vec3 cD = texture2D(tColor, vUv + vec2(0.0, -o1.y)).rgb;
  float gCol = max(max(abs(luma(cL) - L), abs(luma(cR) - L)), max(abs(luma(cU) - L), abs(luma(cD) - L)));
  float colEdge = step(0.22, gCol);
  float notSky = step(d, uNearFar.y * 0.90);
  float ink = max(sil, colEdge * 0.85) * notSky;

  vec3 inkCol = vec3(0.08, 0.07, 0.06);
  col = mix(col, inkCol, ink);

  vec3 bloom = texture2D(tBloom, vUv).rgb;
  col += bloom * uBloom;

  if (uRain > 0.04) {
    float streak = fract((vUv.x * uRes.x + vUv.y * uRes.y * 1.35) * 0.07 - uTime * 9.0);
    float slash = abs(fract(vUv.x * 90.0 + vUv.y * 120.0) - 0.5);
    if (streak > 0.86 && slash < 0.08) {
      col = mix(col, vec3(0.78, 0.86, 0.95), 0.45 * uRain);
    }
    col *= 1.0 - 0.10 * uRain;
  }
  // Cool white flash, never a purple wash
  col += vec3(0.82, 0.88, 1.0) * uFlash * 0.28;

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
    uExposure: { value: 1.12 },
    uSat: { value: 1.22 },
    uOutline: { value: 1.0 },
    uBloom: { value: 0.55 },
    uRain: { value: 0 },
    uFlash: { value: 0 },
    uContrast: { value: 1.06 },
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
