import * as THREE from "three";
import { WORLD, MAT } from "../core/config.js";
import { tagMesh, retagGeometry } from "../render/idMaterial.js";

const VERT = /* glsl */ `
varying vec3 vWorld;
varying vec3 vN;
uniform float uTime;
void main() {
  vec3 p = position;
  float w1 = sin(p.x * 0.03 + uTime * 0.8) * 0.18;
  float w2 = cos(p.z * 0.025 + uTime * 0.6) * 0.16;
  float w3 = sin((p.x + p.z) * 0.045 + uTime * 1.1) * 0.08;
  p.y += w1 + w2 + w3;
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
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform vec3 uSunDir;
uniform vec3 uSunCol;
uniform vec3 uSky;
uniform float uTime;
float sat(float x){ return clamp(x, 0.0, 1.0); }
void main() {
  vec3 N = normalize(vN);
  vec3 V = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - sat(dot(N, V)), 3.0);
  float ndl = sat(dot(N, normalize(uSunDir)));
  // depth cue from absolute y around 0 is useless; use distance from origin-ish
  float shore = 0.0;
  vec3 water = mix(uDeep, uShallow, 0.25 + 0.15 * ndl);
  // sparkle
  float sp = pow(sat(dot(reflect(-normalize(uSunDir), N), V)), 40.0);
  vec3 col = water + uSky * fres * 0.45 + uSunCol * sp * 0.65;
  gl_FragColor = vec4(col, 1.0);
}
`;

export function createWater() {
  const geo = new THREE.PlaneGeometry(WORLD.size * 1.6, WORLD.size * 1.6, 80, 80);
  geo.rotateX(-Math.PI / 2);
  retagGeometry(geo, MAT.SEA, 0);
  // deep water further out: we still use SEA id; color shader handles it

  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uDeep: { value: new THREE.Color(0x0a3a58) },
      uShallow: { value: new THREE.Color(0x2bb3c4) },
      uSunDir: { value: new THREE.Vector3(0.3, 0.8, 0.2) },
      uSunCol: { value: new THREE.Color(0xfff0c8) },
      uSky: { value: new THREE.Color(0x87c8ea) },
    },
    vertexShader: VERT,
    fragmentShader: FRAG,
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
  }
  const lake = new THREE.Mesh(lakeGeo, lakeMat);
  lake.position.set(0, 236, 200);
  lake.name = "crater-lake";
  tagMesh(lake, MAT.WATER_DEEP, 0);

  return {
    mesh, lake, materials: [mat, lakeMat],
    update(t, sky) {
      mat.uniforms.uTime.value = t;
      lakeMat.uniforms.uTime.value = t;
      if (sky) {
        mat.uniforms.uSunDir.value.copy(sky.sunDir);
        lakeMat.uniforms.uSunDir.value.copy(sky.sunDir);
        mat.uniforms.uSunCol.value.copy(sky.sunColor);
        mat.uniforms.uSky.value.copy(sky.horizonColor);
        lakeMat.uniforms.uSunCol.value.copy(sky.sunColor);
      }
    },
  };
}
