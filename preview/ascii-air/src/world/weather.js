import * as THREE from "three";
import { MAT } from "../core/config.js";
import { retagGeometry, patchMaterialIdAlpha } from "../render/idMaterial.js";

const STORM_SKY = {
  zenith: 0x0a1535,
  horizon: 0x1a2a58,
  ground: 0x0a1520,
  sun: 0x8890aa,
  hemi: 0x2a3060,
  amb: 0x101018,
  fog: 0x101828,
  hemiInt: 0.22,
  sunInt: 0.18,
};

export function createWeather(scene, sky, water) {
  const state = {
    id: "clear",
    rain: 0,
    flash: 0,
    windDeg: 40,
    windKt: 6,
    visibility: 12,
    turbulence: 0,
  };

  const bolt = makeBolt();
  bolt.visible = false;
  scene.add(bolt);

  let flashT = 0;
  let nextBolt = 2 + Math.random() * 3;

  function set(id = "clear", opts = {}) {
    state.id = id === "storm" ? "storm" : "clear";
    if (state.id === "storm") {
      state.windDeg = opts.windDeg ?? 270;
      state.windKt = opts.windKt ?? 24;
      state.visibility = opts.visibility ?? 4.2;
      state.turbulence = opts.turbulence ?? 0.7;
      state.rain = opts.instant === false ? state.rain : 1;
      applyStormSky(true);
    } else {
      state.windDeg = opts.windDeg ?? 40;
      state.windKt = opts.windKt ?? 6;
      state.visibility = opts.visibility ?? 12;
      state.turbulence = 0;
      state.flash = 0;
      state.rain = opts.instant === false ? state.rain : 0;
      bolt.visible = false;
      applyStormSky(false);
    }
    return state;
  }

  function applyStormSky(on) {
    if (!sky) return;
    if (on) {
      const pal = STORM_SKY;
      if (sky.uniforms || sky.skyMat) {
        /* sky exposes setHour; we also poke current uniforms if present */
      }
      if (typeof sky.setStorm === "function") sky.setStorm(true, pal);
      if (water && typeof water.setStorm === "function") water.setStorm(true);
    } else {
      if (typeof sky.setStorm === "function") sky.setStorm(false);
      if (water && typeof water.setStorm === "function") water.setStorm(false);
      if (typeof sky.setHour === "function") {
        /* caller will restore hour */
      }
    }
  }

  function update(dt, time) {
    const wantRain = state.id === "storm" ? 1 : 0;
    state.rain += (wantRain - state.rain) * Math.min(1, dt * 1.8);
    if (state.id !== "storm") {
      state.flash *= Math.max(0, 1 - dt * 6);
      bolt.visible = false;
      return state;
    }
    nextBolt -= dt;
    if (state.flash > 0) {
      state.flash = Math.max(0, state.flash - dt * 4.2);
      bolt.visible = state.flash > 0.12;
      if (bolt.visible) bolt.rotation.y = bolt.userData.yaw || 0;
    }
    if (nextBolt <= 0) {
      state.flash = 1;
      nextBolt = 2.2 + Math.random() * 4.5;
      const a = -0.6 + Math.random() * 0.8;
      bolt.position.set(Math.sin(time * 0.1) * 400 + 200, 220, Math.cos(time * 0.07) * 500 + 100);
      bolt.userData.yaw = a;
      bolt.rotation.y = a;
      bolt.visible = true;
    }
    return state;
  }

  function applyToCraft(craft, dt) {
    if (!craft || state.turbulence <= 0) return;
    const t = state.turbulence;
    const n = Math.sin(craft.pos.x * 0.03 + craft.pos.z * 0.02 + (craft.airTime || 0) * 7.1);
    const n2 = Math.cos(craft.pos.z * 0.04 + (craft.airTime || 0) * 5.3);
    if (craft.vel) {
      craft.vel.y += n * t * 6 * dt;
      craft.vel.x += n2 * t * 4 * dt;
    }
    if (craft.angVel) {
      craft.angVel.x += (n - 0.1) * t * 0.7 * dt;
      craft.angVel.z += n2 * t * 0.8 * dt;
    }
  }

  return { state, set, update, applyToCraft, bolt };
}

function makeBolt() {
  const g = new THREE.Group();
  g.name = "lightning";
  const pts = [];
  let x = 0, y = 80, z = 0;
  pts.push(new THREE.Vector3(x, y, z));
  for (let i = 0; i < 8; i++) {
    x += (Math.random() - 0.5) * 18;
    y -= 14 + Math.random() * 10;
    z += (Math.random() - 0.5) * 8;
    pts.push(new THREE.Vector3(x, y, z));
  }
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i];
    const dir = b.clone().sub(a);
    const len = dir.length();
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const geo = retagGeometry(new THREE.BoxGeometry(1.6, len, 1.6), MAT.LIGHT, 1);
    const mat = patchMaterialIdAlpha(new THREE.MeshBasicMaterial({
      color: 0xd8b8ff, toneMapped: false,
    }));
    const m = new THREE.Mesh(geo, mat);
    m.position.copy(mid);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
    g.add(m);
  }
  // glow core
  const core = new THREE.Mesh(
    retagGeometry(new THREE.BoxGeometry(4.5, 90, 4.5), MAT.LIGHT, 1),
    patchMaterialIdAlpha(new THREE.MeshBasicMaterial({
      color: 0xf4eeff, transparent: true, opacity: 0.55, toneMapped: false,
    }))
  );
  core.position.y = 20;
  g.add(core);
  return g;
}
