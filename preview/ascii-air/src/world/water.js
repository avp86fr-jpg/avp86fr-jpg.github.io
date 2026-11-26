import * as THREE from "three";
import { WORLD, MAT } from "../core/config.js";
import { tagMesh, retagGeometry } from "../render/idMaterial.js";
import { loadTex } from "../render/textured.js";

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
uniform float uNight;
uniform sampler2D uWaveTex;
uniform vec2 uBoat0;
uniform vec2 uBoat1;
uniform vec2 uBoat2;
uniform vec2 uBoat3;
float sat(float x){ return clamp(x, 0.0, 1.0); }
void main() {
  vec3 N = normalize(vN);
  vec3 V = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - sat(dot(N, V)), 2.2);
  float ndl = sat(dot(N, normalize(uSunDir)));
  float day = 1.0 - sat(uNight);

  // Shore proximity (turquoise only in a tight coastal band)
  float radial = length(vWorld.xz - vec2(0.0, -200.0));
  float southShore = sat(1.0 - abs(vWorld.z + 1260.0) / 160.0) * sat(1.0 - abs(vWorld.x) / 1100.0);
  float capeShore = sat(1.0 - length(vWorld.xz - vec2(-150.0, -1270.0)) / 220.0);
  float eastShore = sat(1.0 - length(vWorld.xz - vec2(140.0, -1280.0)) / 200.0);
  float beach = sat(1.0 - length(vWorld.xz - vec2(40.0, -1220.0)) / 140.0);
  float foamZone = max(max(southShore * 0.85, capeShore), max(eastShore, beach));
  float nearIsle = sat(1.0 - (radial - 900.0) / 800.0);

  // Depth colours: near-shore turquoise, mid blue, deep navy. Not a flat cyan sheet.
  vec3 turq = uShallow;
  vec3 midB = mix(uDeep, uShallow, 0.38);
  vec3 deepB = uDeep * vec3(0.70, 0.75, 0.90);
  float shore = sat(foamZone * 1.6);
  vec3 water = mix(deepB, midB, sat(nearIsle * 0.65 + 0.15 * ndl));
  water = mix(water, turq, shore * 0.85);

  // Darker in the foreground (near the camera), mid-blue further out.
  float distCam = length(vWorld.xz - cameraPosition.xz);
  float fg = sat(1.0 - distCam / 520.0);
  water = mix(water, water * vec3(0.42, 0.52, 0.78), fg * 0.62);

  // Sky reflection + a warm sun lane
  vec3 R = reflect(-V, N);
  float skyAmt = fres * 0.42 * day;
  water = mix(water, uSky, skyAmt);
  float sunLane = pow(sat(dot(R, normalize(uSunDir))), 10.0);
  water += uSunCol * sunLane * 0.28 * day;
  float sp = pow(sat(dot(R, normalize(uSunDir))), 48.0);
  water += uSunCol * sp * 0.22 * day;

  // Wave-stroke atlas + ink hatching
  vec2 uvw = vWorld.xz * 0.0075 + vec2(uTime * 0.008, uTime * 0.005);
  vec3 waveTex = texture2D(uWaveTex, uvw).rgb;
  water *= mix(vec3(1.0), waveTex * 1.05, 0.32 * day);
  float wstroke = abs(fract(vWorld.x * 0.014 + vWorld.z * 0.019 + uTime * 0.03) - 0.5);
  float inkLine = (1.0 - smoothstep(0.0, 0.028, wstroke)) * (0.28 + 0.35 * nearIsle);
  float wstroke2 = abs(fract(vWorld.x * 0.009 - vWorld.z * 0.016 + 0.3) - 0.5);
  inkLine = max(inkLine, (1.0 - smoothstep(0.0, 0.022, wstroke2)) * 0.18);
  water = mix(water, vec3(0.06, 0.14, 0.32), inkLine * 0.80 * (1.0 - shore * 0.55));

  // White crest dashes
  float crest = sat(vWave * uChop + 0.15);
  float dash = step(0.62, fract(vWorld.x * 0.07 + vWorld.z * 0.055 + uTime * 0.15));
  float crestDash = crest * dash * (1.0 - shore * 0.35) * day;
  water = mix(water, vec3(0.93, 0.97, 1.0), crestDash * 0.45);

  // Foam around the shore, rocks, and boats
  float foamLine = sat(1.0 - abs(foamZone - 0.28) * 12.0);
  float boatFoam = 0.0;
  boatFoam = max(boatFoam, sat(1.0 - length(vWorld.xz - uBoat0) / 9.0));
  boatFoam = max(boatFoam, sat(1.0 - length(vWorld.xz - uBoat1) / 9.0));
  boatFoam = max(boatFoam, sat(1.0 - length(vWorld.xz - uBoat2) / 11.0));
  boatFoam = max(boatFoam, sat(1.0 - length(vWorld.xz - uBoat3) / 14.0));
  float foam = max(foamLine * 0.75, boatFoam * 0.85) * (0.35 + 0.65 * day);
  water = mix(water, vec3(0.92, 0.96, 0.98), foam);
  float foamEdge = sat((foam - 0.40) * 14.0) * (1.0 - sat((foam - 0.72) * 16.0));
  water = mix(water, vec3(0.12, 0.16, 0.22), foamEdge * 0.35);

  if (uChop > 2.0) {
    float spray = step(0.92, fract(sin(dot(vWorld.xz, vec2(12.9898, 78.233)) + uTime * 6.0) * 43758.5));
    water = mix(water, vec3(0.93, 0.96, 1.0), spray * 0.35 * sat(crest));
  }
  gl_FragColor = vec4(water, uMatId / 255.0);
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
      uDeep: { value: new THREE.Color(0x0a3888) },
      uShallow: { value: new THREE.Color(0x3ec8c0) },
      uSunDir: { value: new THREE.Vector3(0.3, 0.8, 0.2) },
      uSunCol: { value: new THREE.Color(0xfff0c8) },
      uSky: { value: new THREE.Color(0x2a5a90) },
      uMatId: { value: 1.0 },
      uChop: { value: 1.0 },
      uNight: { value: 0 },
      uWaveTex: { value: loadTex("water.png") },
      uBoat0: { value: new THREE.Vector2(130, -1410) },
      uBoat1: { value: new THREE.Vector2(20, -1335) },
      uBoat2: { value: new THREE.Vector2(-40, -1270) },
      uBoat3: { value: new THREE.Vector2(-80, -1310) },
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
        mat.uniforms.uDeep.value.setHex(0x0a3888);
        mat.uniforms.uShallow.value.setHex(0x3ec8c0);
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
        const night = sky.night || 0;
        if (!this._deepDay) {
          this._deepDay = new THREE.Color(0x0a3888);
          this._shalDay = new THREE.Color(0x3ec8c0);
          this._deepNight = new THREE.Color(0x061828);
          this._shalNight = new THREE.Color(0x163048);
        }
        mat.uniforms.uDeep.value.copy(this._deepDay).lerp(this._deepNight, night);
        mat.uniforms.uShallow.value.copy(this._shalDay).lerp(this._shalNight, night);
        if (mat.uniforms.uNight) mat.uniforms.uNight.value = night;
        if (lakeMat.uniforms.uNight) lakeMat.uniforms.uNight.value = night;
      } else if (sky) {
        mat.uniforms.uSunDir.value.copy(sky.sunDir);
        lakeMat.uniforms.uSunDir.value.copy(sky.sunDir);
      }
    },
  };
}
