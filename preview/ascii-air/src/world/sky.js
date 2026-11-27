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
  // Soft cerulean — pale aqua mid, warm cream only in a thin horizon band.
  float hz = smoothstep(-0.04, 0.10, h);
  float mid = smoothstep(0.04, 0.42, h);
  float up = smoothstep(0.28, 1.05, h);
  vec3 aqua = mix(uHorizon, uZenith, 0.48);
  vec3 col = mix(uHorizon, aqua, hz);
  col = mix(col, uZenith, mid * 0.72);
  col = mix(col, uZenith, up * 0.55);
  col = mix(uGround, col, smoothstep(-0.25, 0.05, h));
  // sun disk
  float sk = dot(d, normalize(uSunDir));
  float disc = smoothstep(uSunSize, uSunSize - 0.004, 1.0 - sk);
  float glow = pow(max(sk, 0.0), 24.0) * (1.0 - uNight * 0.7);
  col += uSunCol * (disc * 1.15 + glow * 0.08);
  // night stars are a separate point cloud
  gl_FragColor = vec4(col, 21.0 / 255.0); // MAT.SKY packed in alpha
}
`;

export function createSky(scene) {
  const hemi = new THREE.HemisphereLight(0xfff1d8, 0x5a7a98, 1.15);
  const sun = new THREE.DirectionalLight(0xffe6b8, 0.95);
  sun.position.set(200, 400, 100);
  sun.castShadow = false;
  const amb = new THREE.AmbientLight(0xdce6f0, 0.48);
  const fill = new THREE.DirectionalLight(0x8aa8c8, 0.28);
  fill.position.set(-180, 80, -120);

  const skyGeo = new THREE.SphereGeometry(4800, 24, 16);
  retagGeometry(skyGeo, MAT.SKY, 0);
  const skyMat = new THREE.ShaderMaterial({
    uniforms: {
      uZenith: { value: new THREE.Color(0x74b0d8) },
      uHorizon: { value: new THREE.Color(0xf6ebd0) },
      uGround: { value: new THREE.Color(0x6a9aaa) },
      uSunDir: { value: new THREE.Vector3(0.2, 0.9, 0.2) },
      uSunCol: { value: new THREE.Color(0xfff2c4) },
      uSunSize: { value: 0.0036 },
      uNight: { value: 0 },
    },
    vertexShader: SKY_VERT,
    fragmentShader: SKY_FRAG,
    side: THREE.BackSide,
    depthWrite: false,
    toneMapped: false,
  });
  const skyMesh = new THREE.Mesh(skyGeo, skyMat);
  skyMesh.frustumCulled = false;
  skyMesh.name = "sky";
  tagMesh(skyMesh, MAT.SKY, 0);

  // Stars: small soft round points with a gentle twinkle (never chunky squares)
  const starN = 900;
  const sPos = new Float32Array(starN * 3);
  const sCol = new Float32Array(starN * 3);
  const sPhase = new Float32Array(starN);
  const sSize = new Float32Array(starN);
  const sId = new Float32Array(starN * 2);
  for (let i = 0; i < starN; i++) {
    const a = Math.random() * TAU;
    const h = Math.random() * 0.85 + 0.12;
    const r = 4200;
    sPos[i * 3] = Math.cos(a) * Math.cos(h) * r;
    sPos[i * 3 + 1] = Math.sin(h) * r;
    sPos[i * 3 + 2] = Math.sin(a) * Math.cos(h) * r;
    const bright = Math.random();
    const b = 0.72 + bright * 0.28;
    // a few warmer / cooler tints
    const tint = Math.random();
    sCol[i * 3] = b * (tint < 0.15 ? 1.0 : tint > 0.85 ? 0.82 : 0.95);
    sCol[i * 3 + 1] = b * 0.95;
    sCol[i * 3 + 2] = b * (tint > 0.85 ? 1.0 : 0.92);
    sPhase[i] = Math.random();
    sSize[i] = 5.5 + bright * bright * 7.5; // px, small but readable, a few brighter
    sId[i * 2] = MAT.LIGHT; sId[i * 2 + 1] = 0;
  }
  const sGeo = new THREE.BufferGeometry();
  sGeo.setAttribute("position", new THREE.BufferAttribute(sPos, 3));
  sGeo.setAttribute("color", new THREE.BufferAttribute(sCol, 3));
  sGeo.setAttribute("aPhase", new THREE.BufferAttribute(sPhase, 1));
  sGeo.setAttribute("aSize", new THREE.BufferAttribute(sSize, 1));
  sGeo.setAttribute("aId", new THREE.BufferAttribute(sId, 2));
  const starMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uOpacity: { value: 0 },
    },
    vertexShader: /* glsl */ `
      attribute float aPhase;
      attribute float aSize;
      attribute vec3 color;
      uniform float uTime;
      uniform float uOpacity;
      varying vec3 vCol;
      varying float vA;
      void main() {
        float tw = 0.62 + 0.38 * sin(uTime * (1.1 + aPhase * 2.8) + aPhase * 6.28318);
        // a minority twinkle more strongly
        float tw2 = 0.75 + 0.25 * sin(uTime * (3.2 + aPhase * 1.7) + aPhase * 4.1);
        tw = mix(tw, tw2, step(0.7, aPhase));
        vCol = color * (0.85 + 0.55 * tw);
        vA = uOpacity * (0.75 + 0.25 * tw);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = max(2.0, aSize * (0.9 + 0.4 * tw));
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec3 vCol;
      varying float vA;
      void main() {
        vec2 p = gl_PointCoord - vec2(0.5);
        float d = length(p);
        // Soft round disc, not a square. Tight core + faint halo.
        float core = smoothstep(0.38, 0.0, d);
        float halo = smoothstep(0.5, 0.16, d) * 0.35;
        float a = (core + halo) * vA;
        if (a < 0.02) discard;
        gl_FragColor = vec4(vCol, a);
      }
    `,
    transparent: true,
    depthWrite: false,
    depthTest: false,
    blending: THREE.AdditiveBlending,
    vertexColors: false,
    fog: false,
    toneMapped: false,
  });
  // Keep .opacity so setHour can fade them the same way as before.
  Object.defineProperty(starMat, "opacity", {
    get() { return this.uniforms.uOpacity.value; },
    set(v) { this.uniforms.uOpacity.value = v; },
  });
  const stars = new THREE.Points(sGeo, starMat);
  stars.frustumCulled = false;
  stars.renderOrder = 8;
  stars.userData.twinkle = true;

  // Moon
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(40, 12, 10),
    new THREE.MeshBasicMaterial({ color: 0xe8e4d0, fog: false, toneMapped: false })
  );
  tagMesh(moon, MAT.SNOW, 0);

  const moonLit = new THREE.DirectionalLight(0xc4d0ea, 0);
  moonLit.position.copy(moon.position);
  scene.add(skyMesh, hemi, sun, amb, fill, stars, moon, moonLit);

  const fog = new THREE.Fog(0xa4c8e4, 800, 3200);
  scene.fog = fog;

  const state = {
    sunDir: new THREE.Vector3(0.3, 0.9, 0.2),
    sunColor: new THREE.Color(0xfff2c4),
    horizonColor: new THREE.Color(0xb8dceb),
    zenithColor: new THREE.Color(0x3aa0d8),
    fogColor: new THREE.Color(0x9ec8dc),
    hour: 10,
    night: 0,
    storm: false,
    lights: [],
  };

  function samplePalette(hour) {
    const h = ((hour % 24) + 24) % 24;
    // keyframes: 0 night, 5 pre-dawn, 6.5 sunrise, 9 morning, 12 noon, 17 golden, 19 dusk, 21 night
    const keys = [
      { t: 0,  z: 0x1a305c, ho: 0x3a5a88, g: 0x1a2838, s: 0xd0dcff, i: 0.32, si: 0.10, hc: 0x7a98c0, ac: 0x1a2838, fog: 0x1e3a58 },
      { t: 5,  z: 0x1c2860, ho: 0x4a3a78, g: 0x1a1828, s: 0xffc8a0, i: 0.34, si: 0.12, hc: 0x6a5a90, ac: 0x1a1830, fog: 0x2a2848 },
      { t: 6.5,z: 0x3a6aaa, ho: 0xff9a62, g: 0x8a4a40, s: 0xffd0a0, i: 0.5,  si: 0.6,  hc: 0xffb080, ac: 0x403020, fog: 0xeeac88 },
      { t: 9,  z: 0x4a96d0, ho: 0xf0e6c8, g: 0x6a88a8, s: 0xffe8b8, i: 1.10, si: 1.05, hc: 0xfff2dc, ac: 0x5a7a98, fog: 0xa4c8e4 },
      { t: 12, z: 0x3e8ece, ho: 0xf4ead0, g: 0x6e8cb0, s: 0xffecd0, i: 1.12, si: 1.08, hc: 0xfff6e6, ac: 0x5c82a0, fog: 0xa0c4e0 },
      { t: 16.5,z:0x3a88c8, ho: 0xf0c88a, g: 0x8a7050, s: 0xffd08a, i: 0.7,  si: 1.0,  hc: 0xffc888, ac: 0x5a4030, fog: 0xe8c090 },
      { t: 18.5,z:0x1a2a68, ho: 0xff7a4a, g: 0x4a2030, s: 0xffa060, i: 0.35, si: 0.45, hc: 0xff9060, ac: 0x2a1020, fog: 0x8a4060 },
      { t: 20.5,z:0x162a54, ho: 0x2e4e7a, g: 0x152030, s: 0xc8d6ff, i: 0.30, si: 0.08, hc: 0x6a88b8, ac: 0x162030, fog: 0x1a3450 },
      { t: 24, z: 0x1a305c, ho: 0x3a5a88, g: 0x1a2838, s: 0xd0dcff, i: 0.32, si: 0.10, hc: 0x7a98c0, ac: 0x1a2838, fog: 0x1e3a58 },
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
    // Sun orbit: 6h rise in the east (+X), 18h set west (−X), slightly south (−Z)
    // so the postcard (south) face of the island is lit.
    const ang = ((state.hour - 6) / 24) * TAU;
    const elev = Math.sin(ang);
    const az = Math.cos(ang);
    state.sunDir.set(az, Math.max(elev, -0.25), -0.45).normalize();
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
    // Moonlight fill so the land stays readable at night
    if (night > 0.25) hemi.color.lerp(new THREE.Color(0xb0c4e0), night * 0.55);
    hemi.intensity = pal.hemiInt + night * 0.50;
    sun.color.copy(pal.sun);
    sun.intensity = pal.sunInt;
    amb.intensity = 0.46 + (1 - night) * 0.42 + night * 0.32;
    moonLit.position.copy(moon.position);
    moonLit.intensity = night * 0.88;
    moonLit.color.set(0xd4e0f4);

    fog.color.copy(pal.fog);
    fog.near = night > 0.6 ? 1400 : 800;
    fog.far = night > 0.6 ? 3800 : 3200;
    scene.fog = fog;

    stars.material.opacity = saturate((night - 0.2) * 1.8);
    stars.visible = night > 0.2;

    // moon opposite the sun
    moon.position.copy(state.sunDir).multiplyScalar(-1800).add(new THREE.Vector3(0, 200, 0));
    moon.visible = night > 0.25;
    moon.material.color.set(0xe8e4d0).multiplyScalar(0.6 + 0.4 * night);

    for (const L of state.lights) {
      L.intensity = L.userData.baseInt * saturate((night - 0.2) * 1.8 + (L.userData.always ? 1 : 0));
    }
    if (state.storm) applyStormLook();
    return pal;
  }

  function applyStormLook() {
    // Moody slate-blue/grey at ~60% of day exposure — readable ligne-claire, not black.
    skyMat.uniforms.uZenith.value.setHex(0x3a5068);
    skyMat.uniforms.uHorizon.value.setHex(0x5e7588);
    skyMat.uniforms.uGround.value.setHex(0x4a5a64);
    skyMat.uniforms.uSunCol.value.setHex(0xd0d8e0);
    skyMat.uniforms.uNight.value = 0.0;
    state.sunColor.setHex(0xd0d8e0);
    state.horizonColor.setHex(0x5e7588);
    state.zenithColor.setHex(0x3a5068);
    state.fogColor.setHex(0x5a7284);
    hemi.color.setHex(0xa8b8c8);
    hemi.groundColor.setHex(0x4a5850);
    hemi.intensity = 0.80;
    sun.color.setHex(0xd0d8e0);
    sun.intensity = 0.42;
    amb.intensity = 0.50;
    fog.color.setHex(0x5a7284);
    fog.near = 900;
    fog.far = 3400;
    stars.material.opacity = 0;
    stars.visible = false;
    moon.visible = false;
    moonLit.intensity = 0;
    for (const L of state.lights) {
      L.intensity = L.userData.baseInt * (L.userData.always ? 1 : 0.85);
    }
  }

  function setStorm(on) {
    state.storm = !!on;
    setHour(state.hour);
  }

  const _flashWhite = new THREE.Color(0xf4f6fb);
  const _flashFog = new THREE.Color(0xd8e4f0);
  const _lit = {
    amb: 0, hemi: 0, sun: 0,
    zenith: new THREE.Color(),
    horizon: new THREE.Color(),
    fog: new THREE.Color(),
    stored: false,
    flashing: false,
  };
  function captureLit() {
    _lit.amb = amb.intensity;
    _lit.hemi = hemi.intensity;
    _lit.sun = sun.intensity;
    _lit.zenith.copy(state.zenithColor);
    _lit.horizon.copy(state.horizonColor);
    _lit.fog.copy(state.fogColor);
    _lit.stored = true;
  }
  function restoreLit() {
    if (!_lit.stored) return;
    amb.intensity = _lit.amb;
    hemi.intensity = _lit.hemi;
    sun.intensity = _lit.sun;
    skyMat.uniforms.uZenith.value.copy(_lit.zenith);
    skyMat.uniforms.uHorizon.value.copy(_lit.horizon);
    fog.color.copy(_lit.fog);
  }
  // Pulse sky + terrain lights so a lightning flash actually reads on the island.
  function applyFlash(f) {
    f = Math.max(0, Number(f) || 0);
    if (f < 0.02) {
      if (_lit.flashing) {
        restoreLit();
        _lit.flashing = false;
      } else {
        captureLit();
      }
      return;
    }
    if (!_lit.flashing) {
      captureLit();
      _lit.flashing = true;
    }
    amb.intensity = _lit.amb + f * 0.90;
    hemi.intensity = _lit.hemi + f * 1.05;
    sun.intensity = _lit.sun + f * 1.15;
    skyMat.uniforms.uZenith.value.copy(_lit.zenith).lerp(_flashWhite, f * 0.42);
    skyMat.uniforms.uHorizon.value.copy(_lit.horizon).lerp(_flashWhite, f * 0.52);
    fog.color.copy(_lit.fog).lerp(_flashFog, f * 0.32);
  }

  function tickStars(time) {
    if (stars.material.uniforms && stars.material.uniforms.uTime) {
      stars.material.uniforms.uTime.value = time;
    }
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

  return { hemi, sun, amb, skyMesh, stars, moon, fog, state, setHour, setStorm, applyFlash, tickStars, addLamp, samplePalette,
    get sunDir() { return state.sunDir; },
    get sunColor() { return state.sunColor; },
    get horizonColor() { return state.horizonColor; },
    get fogColor() { return state.fogColor; },
    get hour() { return state.hour; },
    get night() { return state.night; },
  };
}
