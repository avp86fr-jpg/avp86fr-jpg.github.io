import * as THREE from "three";
import { MAT, CAM } from "../core/config.js";
import { clamp, lerp, saturate, smootherstep, TAU } from "../core/utils.js";
import { retagGeometry, tagMesh } from "../render/idMaterial.js";

const SKY_VERT = /* glsl */ `
varying vec3 vDir;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vDir = position;
  gl_Position = projectionMatrix * viewMatrix * wp;
  gl_Position.z = gl_Position.w;
}
`;

const SKY_FRAG = /* glsl */ `
precision highp float;
varying vec3 vDir;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uGround;
uniform vec3 uSunDir;
uniform vec3 uSunCol;
uniform float uSunSize;
uniform float uNight;
void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 col = mix(uHorizon, uZenith, smoothstep(-0.05, 0.85, h));
  col = mix(uGround, col, smoothstep(-0.25, 0.05, h));
  // sun disk
  float sk = dot(d, normalize(uSunDir));
  float disc = smoothstep(uSunSize, uSunSize - 0.004, 1.0 - sk);
  float glow = pow(max(sk, 0.0), 24.0) * (1.0 - uNight * 0.7);
  col += uSunCol * (disc * 2.2 + glow * 0.65);
  // night stars are a separate point cloud
  gl_FragColor = vec4(col, 1.0);
}
`;

export function createSky(scene) {
  const hemi = new THREE.HemisphereLight(0x9ec8ff, 0x3a4a28, 0.7);
  const sun = new THREE.DirectionalLight(0xfff3d0, 1.2);
  sun.position.set(200, 400, 100);
  sun.castShadow = false;
  const amb = new THREE.AmbientLight(0x405040, 0.15);

  const skyGeo = new THREE.SphereGeometry(4800, 24, 16);
  retagGeometry(skyGeo, MAT.SKY, 0);
  const skyMat = new THREE.ShaderMaterial({
    uniforms: {
      uZenith: { value: new THREE.Color(0x3aa0d8) },
      uHorizon: { value: new THREE.Color(0xb8dceb) },
      uGround: { value: new THREE.Color(0x6a9aaa) },
      uSunDir: { value: new THREE.Vector3(0.2, 0.9, 0.2) },
      uSunCol: { value: new THREE.Color(0xfff2c4) },
      uSunSize: { value: 0.0018 },
      uNight: { value: 0 },
    },
    vertexShader: SKY_VERT,
    fragmentShader: SKY_FRAG,
    side: THREE.BackSide,
    depthWrite: false,
  });
  const skyMesh = new THREE.Mesh(skyGeo, skyMat);
  skyMesh.frustumCulled = false;
  skyMesh.name = "sky";
  tagMesh(skyMesh, MAT.SKY, 0);

  // Stars
  const starN = 500;
  const sPos = new Float32Array(starN * 3);
  const sCol = new Float32Array(starN * 3);
  const sId = new Float32Array(starN * 2);
  for (let i = 0; i < starN; i++) {
    const a = Math.random() * TAU;
    const h = Math.random() * 0.85 + 0.1;
    const r = 4200;
    sPos[i * 3] = Math.cos(a) * Math.cos(h) * r;
    sPos[i * 3 + 1] = Math.sin(h) * r;
    sPos[i * 3 + 2] = Math.sin(a) * Math.cos(h) * r;
    const b = 0.7 + Math.random() * 0.3;
    sCol[i * 3] = b; sCol[i * 3 + 1] = b; sCol[i * 3 + 2] = 0.85 + Math.random() * 0.15;
    sId[i * 2] = MAT.LIGHT; sId[i * 2 + 1] = 0;
  }
  const sGeo = new THREE.BufferGeometry();
  sGeo.setAttribute("position", new THREE.BufferAttribute(sPos, 3));
  sGeo.setAttribute("color", new THREE.BufferAttribute(sCol, 3));
  sGeo.setAttribute("aId", new THREE.BufferAttribute(sId, 2));
  const stars = new THREE.Points(sGeo, new THREE.PointsMaterial({
    size: 8, sizeAttenuation: false, vertexColors: true, transparent: true, opacity: 0, depthWrite: false,
  }));
  stars.frustumCulled = false;

  // Moon
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(40, 12, 10),
    new THREE.MeshBasicMaterial({ color: 0xe8e4d0 })
  );
  tagMesh(moon, MAT.SNOW, 0);

  scene.add(skyMesh, hemi, sun, amb, stars, moon);

  const fog = new THREE.Fog(0x9ec8dc, 900, 4200);
  scene.fog = fog;

  const state = {
    sunDir: new THREE.Vector3(0.3, 0.9, 0.2),
    sunColor: new THREE.Color(0xfff2c4),
    horizonColor: new THREE.Color(0xb8dceb),
    zenithColor: new THREE.Color(0x3aa0d8),
    fogColor: new THREE.Color(0x9ec8dc),
    hour: 10,
    night: 0,
    lights: [],
  };

  function samplePalette(hour) {
    const h = ((hour % 24) + 24) % 24;
    // keyframes: 0 night, 5 pre-dawn, 6.5 sunrise, 9 morning, 12 noon, 17 golden, 19 dusk, 21 night
    const keys = [
      { t: 0,  z: 0x02030a, ho: 0x0a1020, g: 0x05060c, s: 0xb0c4ff, i: 0.05, si: 0.0, hc: 0x1a2230, ac: 0x0a0c18, fog: 0x0a1020 },
      { t: 5,  z: 0x0a1230, ho: 0x2a2048, g: 0x100818, s: 0xffc8a0, i: 0.12, si: 0.05, hc: 0x3a2858, ac: 0x120818, fog: 0x1a1430 },
      { t: 6.5,z: 0x3a6aaa, ho: 0xff9a62, g: 0x8a4a40, s: 0xffd0a0, i: 0.5,  si: 0.6,  hc: 0xffb080, ac: 0x403020, fog: 0xeeac88 },
      { t: 9,  z: 0x3aa0d8, ho: 0xc5e6f4, g: 0x7aaaa0, s: 0xfff4d0, i: 0.75, si: 1.0,  hc: 0xa8d8ff, ac: 0x3a4a28, fog: 0xb8d8e8 },
      { t: 12, z: 0x2e90d0, ho: 0xb8e0f4, g: 0x6aa0a0, s: 0xfff8e0, i: 1.0, si: 1.55, hc: 0xb0d8ff, ac: 0x5a6a38, fog: 0xa8d0e4 },
      { t: 16.5,z:0x3a88c8, ho: 0xf0c88a, g: 0x8a7050, s: 0xffd08a, i: 0.7,  si: 1.0,  hc: 0xffc888, ac: 0x5a4030, fog: 0xe8c090 },
      { t: 18.5,z:0x1a2a68, ho: 0xff7a4a, g: 0x4a2030, s: 0xffa060, i: 0.35, si: 0.45, hc: 0xff9060, ac: 0x2a1020, fog: 0x8a4060 },
      { t: 20.5,z:0x050818, ho: 0x14182c, g: 0x08060c, s: 0xc0d0ff, i: 0.08, si: 0.02, hc: 0x1a2238, ac: 0x0a0c18, fog: 0x0c101c },
      { t: 24, z: 0x02030a, ho: 0x0a1020, g: 0x05060c, s: 0xb0c4ff, i: 0.05, si: 0.0, hc: 0x1a2230, ac: 0x0a0c18, fog: 0x0a1020 },
    ];
    let a = keys[0], b = keys[1];
    for (let i = 0; i < keys.length - 1; i++) {
      if (h >= keys[i].t && h <= keys[i + 1].t) { a = keys[i]; b = keys[i + 1]; break; }
    }
    const t = saturate((h - a.t) / (b.t - a.t || 1));
    const col = (ca, cb) => new THREE.Color(ca).lerp(new THREE.Color(cb), t);
    return {
      zenith: col(a.z, b.z),
      horizon: col(a.ho, b.ho),
      ground: col(a.g, b.g),
      sun: col(a.s, b.s),
      hemi: col(a.hc, b.hc),
      hemiG: col(a.ac, b.ac),
      fog: col(a.fog, b.fog),
      hemiInt: lerp(a.i, b.i, t),
      sunInt: lerp(a.si, b.si, t),
    };
  }

  function setHour(hour) {
    state.hour = ((hour % 24) + 24) % 24;
    const pal = samplePalette(state.hour);
    // Sun orbit: 6h rise in the east (+X), 18h set west (−X), slightly south (+Z)
    const ang = ((state.hour - 6) / 24) * TAU;
    const elev = Math.sin(ang);
    const az = Math.cos(ang);
    state.sunDir.set(az, Math.max(elev, -0.25), 0.28).normalize();
    sun.position.copy(state.sunDir).multiplyScalar(800);
    const night = saturate(-elev * 2 + 0.15);
    state.night = night;

    skyMat.uniforms.uZenith.value.copy(pal.zenith);
    skyMat.uniforms.uHorizon.value.copy(pal.horizon);
    skyMat.uniforms.uGround.value.copy(pal.ground);
    skyMat.uniforms.uSunDir.value.copy(state.sunDir);
    skyMat.uniforms.uSunCol.value.copy(pal.sun);
    skyMat.uniforms.uNight.value = night;
    state.sunColor.copy(pal.sun);
    state.horizonColor.copy(pal.horizon);
    state.zenithColor.copy(pal.zenith);
    state.fogColor.copy(pal.fog);

    hemi.color.copy(pal.hemi);
    hemi.groundColor.copy(pal.hemiG);
    hemi.intensity = pal.hemiInt;
    sun.color.copy(pal.sun);
    sun.intensity = pal.sunInt;
    amb.intensity = 0.08 + (1 - night) * 0.12;

    fog.color.copy(pal.fog);
    fog.near = night > 0.6 ? 400 : 900;
    fog.far = night > 0.6 ? 2400 : 4200;
    scene.fog = fog;

    stars.material.opacity = saturate((night - 0.35) * 2);
    stars.visible = night > 0.2;

    // moon opposite the sun
    moon.position.copy(state.sunDir).multiplyScalar(-1800).add(new THREE.Vector3(0, 200, 0));
    moon.visible = night > 0.25;
    moon.material.color.set(0xe8e4d0).multiplyScalar(0.6 + 0.4 * night);

    for (const L of state.lights) {
      L.intensity = L.userData.baseInt * saturate((night - 0.2) * 1.8 + (L.userData.always ? 1 : 0));
    }
    return pal;
  }

  function addLamp(pos, color, intensity, distance, always = false) {
    const l = new THREE.PointLight(color, 0, distance);
    l.position.copy(pos);
    l.userData.baseInt = intensity;
    l.userData.always = always;
    scene.add(l);
    state.lights.push(l);
    return l;
  }

  setHour(10);

  return { hemi, sun, amb, skyMesh, stars, moon, fog, state, setHour, addLamp, samplePalette,
    get sunDir() { return state.sunDir; },
    get sunColor() { return state.sunColor; },
    get horizonColor() { return state.horizonColor; },
    get fogColor() { return state.fogColor; },
    get hour() { return state.hour; },
    get night() { return state.night; },
  };
}
