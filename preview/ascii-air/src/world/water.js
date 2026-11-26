import * as THREE from "three";
import { WORLD, MAT } from "../core/config.js";
import { tagMesh, retagGeometry } from "../render/idMaterial.js";

const VERT = /* glsl */ `
varying vec3 vWorld;
varying vec3 vN;
varying float vWave;
uniform float uTime;
uniform float uChop;
void main() {
  vec3 p = position;
  float chop = max(uChop, 1.0);
  float w1 = sin(p.x * 0.03 + uTime * 0.8) * 0.18 * chop;
  float w2 = cos(p.z * 0.025 + uTime * 0.6) * 0.16 * chop;
  float w3 = sin((p.x + p.z) * 0.045 + uTime * 1.1) * 0.08 * chop;
  p.y += w1 + w2 + w3;
  vWave = w1 + w2 + w3;
  vec3 t = vec3(1.0, 0.03 * cos(p.x * 0.03 + uTime * 0.8), 0.0);
  vec3 b = vec3(0.0, 0.025 * -sin(p.z * 0.025 + uTime * 0.6), 1.0);
  vN = normalize(cross(b, t));
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const FRAG = /* glsl */ `
precision highp float;
varying vec3 vWorld;
varying vec3 vN;
varying float vWave;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform vec3 uSunDir;
uniform vec3 uSunCol;
uniform vec3 uSky;
uniform float uTime;
uniform float uMatId;
uniform float uChop;
float sat(float x){ return clamp(x, 0.0, 1.0); }
void main() {
  vec3 N = normalize(vN);
  vec3 V = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - sat(dot(N, V)), 3.0);
  float ndl = sat(dot(N, normalize(uSunDir)));
  // Layered water: deep ocean, mid teal, a thin coastal shallow — not a huge pale disk.
  float radial = length(vWorld.xz - vec2(0.0, -200.0));
  float mid = sat(1.0 - (radial - 700.0) / 1600.0);
  float shore = sat(1.0 - abs(radial - 1080.0) / 160.0);
  vec3 midCol = mix(uDeep, uShallow, 0.38);
  vec3 water = mix(uDeep, midCol, mid * 0.28 + 0.06 * ndl);
  water = mix(water, uShallow, shore * 0.35);
  float sp = pow(sat(dot(reflect(-normalize(uSunDir), N), V)), 64.0);
  vec3 col = water + uSky * fres * 0.07 + uSunCol * sp * 0.22 * (0.35 + shore * 0.65);
  float stroke = step(0.96, fract(vWorld.x * 0.07 + vWorld.z * 0.06 + vWave * 2.0));
  col = mix(col, vec3(0.78, 0.93, 0.90), stroke * (0.18 + 0.35 * shore));
  // Thin foam only in a narrow shore band
  float surf = shore * sat(vWave * 1.8) * 0.42;
  float crest = sat(vWave * uChop - 0.85);
  float crestThin = crest * (1.0 - sat((vWave * uChop - 1.25) * 2.4));
  float foamAmt = crestThin * sat(uChop - 1.35);
  col = mix(col, vec3(0.96, 0.98, 1.0), max(surf, foamAmt * 0.85));
  float foamEdge = sat((foamAmt - 0.35) * 12.0) * (1.0 - sat((foamAmt - 0.62) * 14.0));
  col = mix(col, vec3(0.14, 0.16, 0.20), foamEdge * 0.5);
  if (uChop > 2.0) {
    float spray = step(0.92, fract(sin(dot(vWorld.xz, vec2(12.9898, 78.233)) + uTime * 6.0) * 43758.5));
    col = mix(col, vec3(0.93, 0.96, 1.0), spray * 0.35 * sat(crest));
  }
  gl_FragColor = vec4(col, uMatId / 255.0);
}
`;

export function createWater() {
  const geo = new THREE.PlaneGeometry(WORLD.size * 1.6, WORLD.size * 1.6, 160, 160);
  geo.rotateX(-Math.PI / 2);
  retagGeometry(geo, MAT.SEA, 0);
  // deep water further out: we still use SEA id; color shader handles it

  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uDeep: { value: new THREE.Color(0x0d5e6c) },
      uShallow: { value: new THREE.Color(0x3bb8b0) },
      uSunDir: { value: new THREE.Vector3(0.3, 0.8, 0.2) },
      uSunCol: { value: new THREE.Color(0xfff0c8) },
      uSky: { value: new THREE.Color(0x2a5a90) },
      uMatId: { value: 1.0 },
      uChop: { value: 1.0 },
    },
    vertexShader: VERT,
    fragmentShader: FRAG,
    toneMapped: false,
  });
  // Patch in saturate if needed — already defined in frag
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.y = WORLD.waterLevel;
  mesh.name = "water";
  mesh.userData.matId = MAT.SEA;
  tagMesh(mesh, MAT.SEA, 0);

  // Crater lake
  const lakeGeo = new THREE.CircleGeometry(68, 24);
  lakeGeo.rotateX(-Math.PI / 2);
  retagGeometry(lakeGeo, MAT.WATER_DEEP, 0);
  const lakeMat = mat.clone();
  if (lakeMat.uniforms.uDeep.value === mat.uniforms.uDeep.value) {
    // ensure unique uniform values after clone
    lakeMat.uniforms.uDeep.value = new THREE.Color(0x1a3a6a);
    lakeMat.uniforms.uShallow.value = new THREE.Color(0x3a7aaa);
  } else {
    lakeMat.uniforms.uDeep.value.set(0x1a3a6a);
    lakeMat.uniforms.uShallow.value.set(0x3a7aaa);
    if (lakeMat.uniforms.uMatId) lakeMat.uniforms.uMatId.value = 16.0;
  }
  const lake = new THREE.Mesh(lakeGeo, lakeMat);
  lake.position.set(0, -80, 200);
  lake.visible = false;
  lake.name = "crater-lake";
  tagMesh(lake, MAT.WATER_DEEP, 0);

  return {
    mesh, lake, materials: [mat, lakeMat],
    _storm: false,
    setStorm(on) {
      this._storm = !!on;
      const chop = on ? 2.6 : 1.0;
      mat.uniforms.uChop.value = chop;
      if (lakeMat.uniforms.uChop) lakeMat.uniforms.uChop.value = on ? 1.6 : 1.0;
      if (on) {
        mat.uniforms.uDeep.value.setHex(0x2a5580);
        mat.uniforms.uShallow.value.setHex(0x4a7a9a);
        mat.uniforms.uSky.value.setHex(0x6a8498);
      } else {
        mat.uniforms.uDeep.value.setHex(0x0d5e6c);
        mat.uniforms.uShallow.value.setHex(0x3ab0a8);
        mat.uniforms.uSky.value.setHex(0xa8e0f4);
      }
    },
    update(t, sky) {
      mat.uniforms.uTime.value = t;
      lakeMat.uniforms.uTime.value = t;
      if (sky && !this._storm) {
        mat.uniforms.uSunDir.value.copy(sky.sunDir);
        lakeMat.uniforms.uSunDir.value.copy(sky.sunDir);
        mat.uniforms.uSunCol.value.copy(sky.sunColor);
        mat.uniforms.uSky.value.copy(sky.horizonColor);
        lakeMat.uniforms.uSunCol.value.copy(sky.sunColor);
      } else if (sky) {
        mat.uniforms.uSunDir.value.copy(sky.sunDir);
        lakeMat.uniforms.uSunDir.value.copy(sky.sunDir);
      }
    },
  };
}
