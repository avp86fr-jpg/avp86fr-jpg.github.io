import * as THREE from "three";
import { MAT } from "../core/config.js";
import { retagGeometry, patchMaterialIdAlpha } from "../render/idMaterial.js";

const STORM_SKY = {
  zenith: 0x24344c,
  horizon: 0x6a7a90,
  ground: 0x3a4a58,
  sun: 0xc8d0dc,
  hemi: 0x8898ac,
  amb: 0x3a4038,
  fog: 0x4a5868,
  hemiInt: 0.7,
  sunInt: 0.22,
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
    if (id === "storm") {
      state.id = "storm";
      state.windDeg = opts.windDeg ?? 270;
      state.windKt = opts.windKt ?? 24;
      state.visibility = opts.visibility ?? 4.2;
      state.turbulence = opts.turbulence ?? 0.7;
      state.rain = opts.instant === false ? state.rain : 1;
      applyStormSky(true);
    } else if (id === "squall") {
      // Rain squall: gusty crosswind in cells, rain, no lightning.
      state.id = "squall";
      state.windDeg = opts.windDeg ?? 300;
      state.windKt = opts.windKt ?? 20;
      state.visibility = opts.visibility ?? 6.2;
      state.turbulence = opts.turbulence ?? 0.85;
      state.flash = 0;
      state.rain = opts.instant === false ? state.rain : 0.75;
      bolt.visible = false;
      applyStormSky(true);
    } else {
      state.id = "clear";
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

  function update(dt, time, focus) {
    const wantRain = state.id === "storm" ? 1 : state.id === "squall" ? 0.75 : 0;
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
      nextBolt = 2.0 + Math.random() * 3.8;
      const a = -0.6 + Math.random() * 0.8;
      const fx = focus && focus.x != null ? focus.x : Math.sin(time * 0.1) * 400;
      const fz = focus && focus.z != null ? focus.z : Math.cos(time * 0.07) * 500;
      // Strike ahead of the plane so the bolt is in frame, not over the far north
      bolt.position.set(fx + Math.sin(time) * 220 + 80, 160 + Math.random() * 80, fz + 180 + Math.cos(time * 0.7) * 160);
      bolt.userData.yaw = a;
      bolt.rotation.y = a;
      bolt.scale.set(2.8, 3.6, 2.8);
      bolt.visible = true;
    }
    return state;
  }

  function applyToCraft(craft, dt) {
    if (!craft || (state.id !== "storm" && state.id !== "squall")) return;
    const t = state.turbulence;
    const at = craft.airTime || 0;
    // Storm: a steady gust. Squall: cells that punch then ease, so the plane yaws and drifts.
    const gust = state.id === "squall"
      ? 0.25 + 0.75 * Math.max(0, Math.sin(at * 0.72) * Math.sin(at * 0.21 + 0.4))
      : 0.55 + 0.45 * Math.sin(at * 0.55) * Math.sin(at * 0.17 + 1.2);
    const rad = ((state.windDeg || 270) * Math.PI) / 180;
    const push = (state.windKt || 20) * (state.id === "squall" ? 0.125 : 0.085) * gust;
    if (craft.vel) {
      craft.vel.x += Math.cos(rad) * push * dt;
      craft.vel.z += Math.sin(rad) * push * dt;
      if (t > 0) {
        const n = Math.sin(craft.pos.x * 0.03 + craft.pos.z * 0.02 + at * 7.1);
        const n2 = Math.cos(craft.pos.z * 0.04 + at * 5.3);
        craft.vel.y += n * t * 4.2 * dt;
        craft.vel.x += n2 * t * 2.8 * dt;
        if (craft.angVel) {
          craft.angVel.x += (n - 0.1) * t * 0.45 * dt;
          craft.angVel.z += n2 * t * 0.5 * dt;
          if (state.id === "squall") craft.angVel.y += n2 * t * 0.55 * dt;
        }
      }
    }
  }

  return { state, set, update, applyToCraft, bolt };
}


function makeBolt() {
  const pts = [];
  let x = 0, y = 80, z = 0;
  pts.push(new THREE.Vector3(x, y, z));
  for (let i = 0; i < 8; i++) {
    x += (Math.random() - 0.5) * 18;
    y -= 14 + Math.random() * 10;
    z += (Math.random() - 0.5) * 8;
    pts.push(new THREE.Vector3(x, y, z));
  }
  const geos = [];
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i];
    const dir = b.clone().sub(a);
    const len = dir.length();
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const geo = new THREE.BoxGeometry(1.6, len, 1.6);
    const m = new THREE.Matrix4();
    m.makeTranslation(mid.x, mid.y, mid.z);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
    const r = new THREE.Matrix4().makeRotationFromQuaternion(q);
    m.multiply(r);
    geo.applyMatrix4(m);
    geos.push(geo);
  }
  const core = new THREE.BoxGeometry(4.2, 90, 4.2);
  core.translate(0, 20, 0);
  geos.push(core);
  // merge
  let n = 0;
  for (const g of geos) n += g.getAttribute("position").count;
  const pos = new Float32Array(n * 3);
  const idx = [];
  let base = 0;
  for (const g of geos) {
    const p = g.getAttribute("position");
    for (let i = 0; i < p.count; i++) {
      pos[(base + i) * 3] = p.getX(i);
      pos[(base + i) * 3 + 1] = p.getY(i);
      pos[(base + i) * 3 + 2] = p.getZ(i);
    }
    if (g.index) {
      const ia = g.index.array;
      for (let i = 0; i < ia.length; i++) idx.push(ia[i] + base);
    } else {
      for (let i = 0; i < p.count; i++) idx.push(base + i);
    }
    base += p.count;
  }
  const merged = new THREE.BufferGeometry();
  merged.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  merged.setIndex(idx);
  merged.computeVertexNormals();
  retagGeometry(merged, MAT.LIGHT, 1);
  const mesh = new THREE.Mesh(merged, patchMaterialIdAlpha(new THREE.MeshBasicMaterial({
    color: 0xf6f2ff, toneMapped: false, fog: false,
  })));
  mesh.name = "lightning";
  mesh.scale.setScalar(2.4);
  return mesh;
}
