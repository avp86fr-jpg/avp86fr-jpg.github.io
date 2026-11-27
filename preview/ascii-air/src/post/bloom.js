import * as THREE from "three";

const VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const EXTRACT = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform sampler2D tMap;
uniform float uThresh;
void main() {
  vec3 c = texture2D(tMap, vUv).rgb;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  float m = smoothstep(uThresh, uThresh + 0.25, l);
  gl_FragColor = vec4(c * m, 1.0);
}
`;

const BLUR = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform sampler2D tMap;
uniform vec2 uDir;
void main() {
  vec2 px = uDir;
  vec3 c = texture2D(tMap, vUv).rgb * 0.227027;
  c += texture2D(tMap, vUv + px * 1.3846).rgb * 0.316216;
  c += texture2D(tMap, vUv - px * 1.3846).rgb * 0.316216;
  c += texture2D(tMap, vUv + px * 3.2308).rgb * 0.070270;
  c += texture2D(tMap, vUv - px * 3.2308).rgb * 0.070270;
  gl_FragColor = vec4(c, 1.0);
}
`;

const COMPOSE = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform sampler2D tSrc;
uniform sampler2D tBloom;
uniform float uStrength;
uniform float uCrt;
uniform float uTime;
uniform vec2 uRes;
uniform float uPaper;
void main() {
  vec2 uv = vUv;
  if (uCrt > 0.01) {
    // mild curvature
    vec2 cc = uv * 2.0 - 1.0;
    cc *= 1.0 + uCrt * 0.06 * dot(cc, cc);
    uv = cc * 0.5 + 0.5;
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
      return;
    }
  }
  vec3 col = texture2D(tSrc, uv).rgb;
  vec3 bloom = texture2D(tBloom, uv).rgb;
  col += bloom * uStrength;
  if (uCrt > 0.01) {
    float scan = 0.88 + 0.12 * sin(uv.y * uRes.y * 3.14159);
    col *= mix(1.0, scan, uCrt * 0.7);
    // very slight flicker
    col *= 1.0 - 0.012 * uCrt * sin(uTime * 23.0);
    // vignette
    vec2 vc = uv * (1.0 - uv);
    float vig = vc.x * vc.y * 16.0;
    col *= mix(1.0, pow(vig, 0.18), uCrt * 0.5);
  }
  gl_FragColor = vec4(col, 1.0);
}
`;

function makePass(frag) {
  return new THREE.ShaderMaterial({
    uniforms: {},
    vertexShader: VERT,
    fragmentShader: frag,
    depthTest: false,
    depthWrite: false,
  });
}

export function createBloom() {
  const extract = makePass(EXTRACT);
  extract.uniforms.tMap = { value: null };
  extract.uniforms.uThresh = { value: 0.80 };

  const blur = makePass(BLUR);
  blur.uniforms.tMap = { value: null };
  blur.uniforms.uDir = { value: new THREE.Vector2() };

  const compose = makePass(COMPOSE);
  compose.uniforms.tSrc = { value: null };
  compose.uniforms.tBloom = { value: null };
  compose.uniforms.uStrength = { value: 0.36 };
  compose.uniforms.uCrt = { value: 0 };
  compose.uniforms.uTime = { value: 0 };
  compose.uniforms.uRes = { value: new THREE.Vector2(1280, 720) };
  compose.uniforms.uPaper = { value: 0 };

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), extract);
  quad.frustumCulled = false;
  scene.add(quad);

  return { extract, blur, compose, scene, camera, quad };
}
