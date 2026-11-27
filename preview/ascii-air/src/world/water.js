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
  // Several directions + a slow envelope so open water is not a regular corrugation.
  float w1 = sin(p.x * 0.031 + p.z * 0.012 + uTime * 0.8) * 0.14 * chop;
  float w2 = cos(p.z * 0.027 - p.x * 0.01 + uTime * 0.6) * 0.12 * chop;
  float w3 = sin((p.x * 0.7 + p.z) * 0.045 + uTime * 1.1) * 0.07 * chop;
  float w4 = sin(p.x * 0.019 - p.z * 0.023 + uTime * 0.45) * 0.06 * chop;
  float env = 0.65 + 0.35 * sin(p.x * 0.004 + p.z * 0.0035);
  float waves = (w1 + w2 + w3 + w4) * env;
  // Fade regular displacement in the far field (title/hero grazing shots).
  float distCam = length(p.xz - cameraPosition.xz);
  waves *= mix(1.0, 0.35, smoothstep(280.0, 1400.0, distCam));
  p.y += waves;
  vWave = waves;
  float flatN = smoothstep(160.0, 750.0, distCam);
  vec3 t = vec3(1.0, (0.022 * cos(p.x * 0.031 + p.z * 0.012 + uTime * 0.8)
                    + 0.014 * sin(p.x * 0.019 - p.z * 0.023 + uTime * 0.45)) * env * (1.0 - 0.9 * flatN), 0.0);
  vec3 b = vec3(0.0, (0.018 * -sin(p.z * 0.027 - p.x * 0.01 + uTime * 0.6)
                    + 0.010 * cos((p.x * 0.7 + p.z) * 0.045 + uTime * 1.1)) * env * (1.0 - 0.9 * flatN), 1.0);
  vN = normalize(mix(normalize(cross(b, t)), vec3(0.0, 1.0, 0.0), flatN));
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
float hash21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n2(vec2 p){
  vec2 i = floor(p), f = fract(p);
  float a = hash21(i), b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0)), d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
vec2 rot2(vec2 p, float a){ float s = sin(a), c = cos(a); return vec2(c * p.x - s * p.y, s * p.x + c * p.y); }
void main() {
  vec3 N = normalize(vN);
  vec3 V = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - sat(dot(N, V)), 2.2);
  float ndl = sat(dot(N, normalize(uSunDir)));
  float day = 1.0 - sat(uNight);

  // Island ellipse SDF: 0 at the shore, +ve offshore, -ve in lagoons.
  vec2 qIsle = (vWorld.xz - vec2(0.0, -200.0)) / vec2(1120.0, 1320.0);
  float sd = length(qIsle) - 1.0;
  float off = sd * 1200.0; // metres-ish
  float southShore = sat(1.0 - abs(vWorld.z + 1260.0) / 200.0) * sat(1.0 - abs(vWorld.x) / 1100.0);
  float capeShore = sat(1.0 - length(vWorld.xz - vec2(-150.0, -1270.0)) / 260.0);
  float eastShore = sat(1.0 - length(vWorld.xz - vec2(140.0, -1280.0)) / 240.0);
  float beach = sat(1.0 - length(vWorld.xz - vec2(40.0, -1220.0)) / 180.0);
  float foamZone = max(max(southShore * 0.85, capeShore), max(eastShore, beach));
  // Shallow turquoise: lagoons + ~280m off the coast. Deep navy only further out.
  float shallow = sat(1.0 - off / 280.0);
  float midAmt = sat(1.0 - (off - 80.0) / 700.0);

  vec3 turq = uShallow;
  vec3 midB = mix(uDeep, uShallow, 0.42);
  vec3 deepB = uDeep * vec3(0.62, 0.70, 0.88);
  float shore = max(sat(foamZone * 1.2), shallow);
  vec3 water = mix(deepB, midB, midAmt);
  water = mix(water, turq, shallow * 0.92);

  float distCam = length(vWorld.xz - cameraPosition.xz);
  float fg = sat(1.0 - distCam / 640.0);
  // Keep a light foreground cool, but don't crush the sea into a flat navy sheet.
  water = mix(water, water * vec3(0.82, 0.90, 0.98), fg * 0.18);

  // Sky reflection + a warm sun lane. In storm (uChop > 1.6) kill the bright
  // radial disc under the plane — keep only a faint slate sheen.
  vec3 R = reflect(-V, N);
  float storm = sat((uChop - 1.0) / 1.8);
  float skyAmt = fres * 0.42 * day * (1.0 - storm * 0.70);
  water = mix(water, uSky, skyAmt);
  float sunLane = pow(sat(dot(R, normalize(uSunDir))), 10.0);
  float farW = sat((length(vWorld.xz - cameraPosition.xz) - 200.0) / 900.0);
  water += uSunCol * sunLane * mix(0.28, 0.10, farW) * day * (1.0 - storm * 0.88);
  float sp = pow(sat(dot(R, normalize(uSunDir))), 48.0);
  water += uSunCol * sp * 0.22 * (1.0 - farW) * day * (1.0 - storm * 0.94);
  // Night sea: uniforms already carry a moonlit navy. Keep a readable floor, add
  // a soft horizon sheen and a moon path — never a black sheet.
  if (uNight > 0.25) {
    water = max(water, vec3(0.07, 0.16, 0.30) * uNight);
    float horz = sat((distCam - 280.0) / 1600.0);
    water = mix(water, mix(water, uSky * 0.62, 0.50), horz * uNight * 0.70);
    vec3 moonDir = normalize(vec3(-uSunDir.x, max(0.25, -uSunDir.y), -uSunDir.z));
    float moonLane = pow(sat(dot(R, moonDir)), 14.0);
    float moonSp = pow(sat(dot(R, moonDir)), 40.0);
    water += vec3(0.55, 0.66, 0.82) * moonLane * 0.32 * uNight;
    water += vec3(0.75, 0.82, 0.95) * moonSp * 0.22 * uNight;
  }

  // Wave-stroke atlas: two rotated, differently scaled layers, strongly warped so open water does not stripe.
  float nA = n2(vWorld.xz * 0.0036);
  float nB = n2(vWorld.xz * 0.0084 + vec2(4.2, 1.7));
  float nC = n2(vWorld.xz * 0.0018 + vec2(9.1, 2.4));
  vec2 uv1 = rot2(vWorld.xz * 0.0038, 0.72) + vec2(uTime * 0.006, uTime * 0.0028) + vec2(nA - 0.5) * 0.55 + vec2(nC - 0.5) * 0.35;
  vec2 uv2 = rot2(vWorld.xz * 0.0095, -1.15) + vec2(-uTime * 0.0042, uTime * 0.005) + vec2(nB - 0.5) * 0.40;
  vec3 waveTex = mix(texture2D(uWaveTex, uv1).rgb, texture2D(uWaveTex, uv2).rgb, 0.5 + 0.15 * (nC - 0.5));
  // Wave atlas: gentle everywhere, a little stronger in the shallows.
  float texAmt = (0.16 + 0.28 * shallow + 0.08 * fg) * day;
  water *= mix(vec3(1.0), waveTex * 1.06, texAmt);
  // Sparse short ink strokes (irregular, never a regular hatch) + sparkle glints.
  float tick = abs(fract(vWorld.x * 0.016 + vWorld.z * 0.013 + nA * 1.8 + uTime * 0.03) - 0.5);
  float shortStroke = step(0.58, nB) * step(0.32, nC);
  float inkLine = (1.0 - smoothstep(0.0, 0.022, tick)) * shortStroke * (0.12 + 0.28 * shallow) * day;
  water = mix(water, vec3(0.10, 0.26, 0.48), inkLine);
  float spark = step(0.935, n2(vWorld.xz * 0.42 + vec2(uTime * 0.85, uTime * 0.31)));
  water += vec3(0.92, 0.97, 1.0) * spark * 0.40 * day * (0.25 + 0.75 * shallow);

  // No open-water crest dashes — they read as glitchy white curved bands
  // in the foreground. Foam only in a tight strip at the actual shore
  // and as a small wake around boats.
  float boatFoam = 0.0;
  boatFoam = max(boatFoam, sat(1.0 - length(vWorld.xz - uBoat0) / 6.0));
  boatFoam = max(boatFoam, sat(1.0 - length(vWorld.xz - uBoat1) / 6.0));
  boatFoam = max(boatFoam, sat(1.0 - length(vWorld.xz - uBoat2) / 6.5));
  boatFoam = max(boatFoam, sat(1.0 - length(vWorld.xz - uBoat3) / 8.0));
  // White foam line tight to the actual shore (sd ~ 0), plus the named beaches.
  float ringFoam = sat(1.0 - abs(off - 4.0) / 22.0);
  float shoreFoam = max(sat(foamZone * 1.35 - 0.55), ringFoam) * (0.7 + 0.3 * nB);
  float foam = max(shoreFoam * 1.0, boatFoam * 0.75) * (0.55 + 0.45 * day);
  water = mix(water, vec3(0.97, 0.99, 1.0), foam);

  if (uChop > 1.6) {
    // Tiny, sparse whitecaps — high-frequency noise only. Never use the
    // large-scale vWave as a mask (that made ice-floe-sized white blobs).
    float nW = n2(vWorld.xz * 0.62 + vec2(uTime * 1.05, uTime * 0.22));
    float nF = n2(vWorld.xz * 1.8 - vec2(uTime * 0.7, 3.1));
    float nG = n2(vWorld.xz * 0.09 + vec2(2.4, uTime * 0.05));
    float cap = step(0.84, nW) * step(0.68, nF) * step(0.42, nG) * sat((uChop - 1.6) / 2.0);
    cap *= mix(0.7, 1.0, sat(vWave * 1.5 + 0.3));
    water = mix(water, vec3(0.86, 0.90, 0.88), cap * 0.70);
    water = mix(water, water * vec3(0.80, 0.90, 0.82), sat((uChop - 1.6) * 0.4));
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
      uDeep: { value: new THREE.Color(0x0a2f7a) },
      uShallow: { value: new THREE.Color(0x4ad4c6) },
      uSunDir: { value: new THREE.Vector3(0.3, 0.8, 0.2) },
      uSunCol: { value: new THREE.Color(0xfff0c8) },
      uSky: { value: new THREE.Color(0x2a5a90) },
      uMatId: { value: 1.0 },
      uChop: { value: 1.0 },
      uNight: { value: 0 },
      uWaveTex: { value: loadTex("water.png") },
      uBoat0: { value: new THREE.Vector2(155, -1425) },
      uBoat1: { value: new THREE.Vector2(35, -1348) },
      uBoat2: { value: new THREE.Vector2(-90, -1295) },
      uBoat3: { value: new THREE.Vector2(18, -1268) },
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
      const chop = on ? 2.8 : 1.0;
      mat.uniforms.uChop.value = chop;
      if (lakeMat.uniforms.uChop) lakeMat.uniforms.uChop.value = on ? 1.8 : 1.0;
      if (on) {
        mat.uniforms.uDeep.value.setHex(0x1e4458);
        mat.uniforms.uShallow.value.setHex(0x3a6274);
        mat.uniforms.uSky.value.setHex(0x5e7588);
        mat.uniforms.uSunCol.value.setHex(0x7a8ea0);
      }
      // When leaving a storm, do not snap back to day cyan — update() applies the
      // time-of-day (incl. moonlit navy) palette on the next tick.
    },
    setBoats(list) {
      const u = [mat.uniforms.uBoat0, mat.uniforms.uBoat1, mat.uniforms.uBoat2, mat.uniforms.uBoat3];
      if (!list) return;
      for (let i = 0; i < 4 && i < list.length; i++) {
        if (list[i] && u[i]) u[i].value.set(list[i].x, list[i].z);
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
          this._deepNight = new THREE.Color(0x1c4a78);
          this._shalNight = new THREE.Color(0x2a6a8e);
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
