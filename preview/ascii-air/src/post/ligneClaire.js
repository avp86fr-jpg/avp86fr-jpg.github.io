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

  // Two-tone album shading, then thin ink only — never fill a slope or the horizon.
  col = mix(col, floor(col * 6.0 + 0.5) / 6.0, 0.22);

  float d  = linDepth(texture2D(tDepth, vUv).r);
  vec2 o1 = px * 1.4; // ~2px at 1080p
  float dL = linDepth(texture2D(tDepth, vUv + vec2(-o1.x, 0.0)).r);
  float dR = linDepth(texture2D(tDepth, vUv + vec2( o1.x, 0.0)).r);
  float dU = linDepth(texture2D(tDepth, vUv + vec2(0.0,  o1.y)).r);
  float dDn = linDepth(texture2D(tDepth, vUv + vec2(0.0, -o1.y)).r);
  // Near-side occlusion only: a neighbour must be much farther than this pixel.
  // Gradual slopes have a small jump and are ignored.
  float jump = max(max(dL, dR), max(dU, dDn)) - d;
  float rel = jump / max(d, 1.0);
  float farCut = uNearFar.y * 0.80;
  float notSky = step(d, farCut);
  float sil = step(0.055 * uOutline, rel) * notSky;

  vec3 cL = texture2D(tColor, vUv + vec2(-o1.x, 0.0)).rgb;
  vec3 cR = texture2D(tColor, vUv + vec2( o1.x, 0.0)).rgb;
  vec3 cU = texture2D(tColor, vUv + vec2(0.0,  o1.y)).rgb;
  vec3 cD = texture2D(tColor, vUv + vec2(0.0, -o1.y)).rgb;
  float gCol = max(max(abs(luma(cL) - L), abs(luma(cR) - L)), max(abs(luma(cU) - L), abs(luma(cD) - L)));
  float minN = min(min(abs(luma(cL) - L), abs(luma(cR) - L)), min(abs(luma(cU) - L), abs(luma(cD) - L)));
  // Colour seams only if they are a thin ridge (one side similar, the other jumps).
  float colEdge = step(0.42, gCol) * step(minN, 0.10) * notSky;

  float ink = max(sil, colEdge);
  vec3 inkCol = vec3(0.10, 0.08, 0.06);
  col = mix(col, inkCol, ink);

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
