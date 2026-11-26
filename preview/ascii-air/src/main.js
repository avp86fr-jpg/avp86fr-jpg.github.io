import * as THREE from "three";
import { CAM, PHYS, DEFAULT_SETTINGS, PLANES, SPAWN, STAR_UNLOCKS, VERSION, MAT } from "./core/config.js";
import { isMobileUA, isIOS, isStandalone, nowMs, clamp, headingFromXZ } from "./core/utils.js";
import { createLigneClaire } from "./post/ligneClaire.js";
import { getIdMaterial, tagMesh, patchMaterialIdAlpha, retagGeometry } from "./render/idMaterial.js";
import { makeColorDepthRT, makeRT } from "./render/targets.js";
import { createBloom } from "./post/bloom.js";
import { createIsland } from "./world/island.js";
import { createWeather } from "./world/weather.js";
import { createPlaneMesh } from "./flight/planes.js";
import { createCraft, resetCraft, launchCraft, stepCraft, startTow } from "./flight/physics.js";
import { createFlightCamera } from "./flight/camera.js";
import { createInput } from "./input/input.js";
import { createAudio } from "./audio/audio.js";
import { loadSave, persist, awardStars, saveSettings, savePhoto, applyUnlocks, totalStars } from "./save/save.js";
import { createMissionSystem } from "./missions/runtime.js";
import { getMission, MISSIONS } from "./missions/data.js";
import { createUI } from "./ui/ui.js";
import { createDebug, autopilot } from "./debug/debug.js";
import { createClock } from "./time/cycle.js";
import { QUALITY } from "./core/config.js";

const canvas = document.getElementById("view");
const uiRoot = document.getElementById("ui-root");

const save = loadSave();
applyUnlocks(save);
const settings = save.settings;

const input = createInput(uiRoot);
const audio = createAudio();
const hooks = { input, audio };
const ui = createUI(uiRoot, {
  input, audio,
  onFreeFlight: () => startFreeFlight(),
  onStartMission: (id) => startMission(id),
  onSelectPlane: (id) => { save.plane = id; persist(save); rebuildPlane(id); },
  onSettings: (s) => { Object.assign(settings, s); saveSettings(save, s); audio.setVolumes(s); applyVisualSettings(); },
  onToggleGyro: () => toggleGyro(),
  onCamera: () => flyCam.cycle(),
  onPause: () => togglePause(),
  onResume: () => { paused = false; mode = "fly"; ui.showHUD(); },
  onGear: () => { craft.gearDown = !craft.gearDown; audio.play("gear"); },
  onFullscreen: () => toggleFullscreen(),
  onRestart: () => restartCurrent(),
  onQuit: () => backToTitle(),
  onNextMission: () => nextMission(),
});
hooks.onFreeFlight = () => startFreeFlight();
hooks.onStartMission = (id) => startMission(id);
hooks.onSelectPlane = (id) => { save.plane = id; persist(save); rebuildPlane(id); };
hooks.onSettings = (s) => { Object.assign(settings, s); saveSettings(save, s); audio.setVolumes(s); applyVisualSettings(); };
hooks.onToggleGyro = () => toggleGyro();
hooks.onCamera = () => flyCam.cycle();
hooks.onPause = () => togglePause();
hooks.onResume = () => { paused = false; mode = "fly"; ui.showHUD(); };
hooks.onGear = () => { craft.gearDown = !craft.gearDown; audio.play("gear"); };
hooks.gearDown = () => !!(craft && craft.gearDown);
hooks.onFullscreen = () => toggleFullscreen();
hooks.onRestart = () => restartCurrent();
hooks.onQuit = () => backToTitle();
hooks.onNextMission = () => nextMission();

const renderer = new THREE.WebGLRenderer({
  canvas, antialias: false, alpha: false, powerPreference: "high-performance",
  stencil: false, depth: true, preserveDrawingBuffer: true,
});
renderer.setPixelRatio(1);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.autoClear = false;
renderer.info.autoReset = false;
renderer.setClearColor(0x8ed7f5, 1);
const backend = renderer.capabilities.isWebGL2 ? "WebGL2" : "WebGL1";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(CAM.fov, 16 / 9, CAM.near, CAM.far);
const flyCam = createFlightCamera(camera);

const look = createLigneClaire();
const bloom = createBloom();
const idMat = getIdMaterial();

let grid = { cols: 1920, rows: 1080, cell: 1 };
let colorRT = null, bloomA = null, bloomB = null;

function allocTargets() {
  const cssW = canvas.clientWidth || window.innerWidth;
  const cssH = canvas.clientHeight || window.innerHeight;
  const q = QUALITY[settings.quality] || QUALITY.medium;
  const mobile = isMobileUA() || cssW < 820;
  const dprCap = mobile ? (settings.quality === "high" ? 1.5 : 1.25) : (settings.quality === "low" ? 1 : 1.5);
  const dpr = Math.min(window.devicePixelRatio || 1, dprCap);
  let outW = Math.max(320, Math.round(cssW * dpr));
  let outH = Math.max(180, Math.round(cssH * dpr));
  const longCap = mobile ? (settings.quality === "high" ? 1600 : settings.quality === "low" ? 1024 : 1280)
    : (settings.quality === "low" ? 1440 : 1920);
  const long = Math.max(outW, outH);
  if (long > longCap) {
    const s = longCap / long;
    outW = Math.max(320, Math.round(outW * s));
    outH = Math.max(180, Math.round(outH * s));
  }
  renderer.setSize(outW, outH, false);
  grid = { cols: outW, rows: outH, cell: 1 };
  const dispose = (rt) => { if (rt) rt.dispose(); };
  dispose(colorRT); dispose(bloomA); dispose(bloomB);
  colorRT = makeColorDepthRT(outW, outH, THREE.LinearFilter);
  const bw = Math.max(64, outW >> 2), bh = Math.max(36, outH >> 2);
  bloomA = makeRT(bw, bh);
  bloomB = makeRT(bw, bh);
  look.uniforms.uRes.value.set(outW, outH);
  look.uniforms.uNearFar.value.set(camera.near, camera.far);
  camera.aspect = cssW / Math.max(1, cssH);
  camera.updateProjectionMatrix();
}

const clock = createClock(10);
ui.setLoad(0.05, "raising the island…");

let island = null;
let weather = null;
let craft = createCraft(save.plane || "trainer");
let planeMesh = null;
let contrail = null;
let missions = null;
const dbg = createDebug(uiRoot);
contrail = createContrail(scene);

function rebuildPlane(id) {
  if (planeMesh) scene.remove(planeMesh);
  planeMesh = createPlaneMesh(id, PLANES[id]);
  flattenLook(planeMesh);
  scene.add(planeMesh);
  if (craft.id !== id) resetCraft(craft, SPAWN.airport, SPAWN.airport.heading, id);
}

function applyVisualSettings() {
  look.uniforms.uContrast.value = settings.highContrast ? 1.12 : 1.04;
  look.uniforms.uOutline.value = settings.highContrast ? 1.15 : 1.0;
  look.uniforms.uBloom.value = (QUALITY[settings.quality] || QUALITY.medium).bloom ? 0.48 : 0.18;
  flyCam.state.comfort = !!settings.motionComfort;
  audio.setVolumes(settings);
  allocTargets();
}

// Auto quality hint
if (!save.settings._autoQ && isMobileUA()) {
  settings.quality = "medium";
}

let mode = "boot"; // boot | title | fly
let paused = false;
let currentMissionId = null;
let accum = 0;
let lastT = nowMs();
let fps = 60, frameMs = 16, fpsAcc = 0, fpsN = 0;
let lastFpsT = nowMs();
let autoPilotOn = false;
let camOverride = null;
let autoPilotTarget = null;
let autoPilotOpts = {};
let pendingResult = null;

function startFreeFlight() {
  audio.unlock();
  currentMissionId = null;
  missions.clear();
  const id = save.unlocked[save.plane] ? save.plane : "trainer";
  resetCraft(craft, SPAWN.airport, SPAWN.airport.heading, id);
  rebuildPlane(craft.id);
  clock.frozen = false;
  if (clock.hour < 6 || clock.hour > 20) clock.set(10);
  flyCam.state.mode = "chase";
  flyCam.state.hero = false;
  if (weather) weather.set("clear");
  mode = "fly";
  paused = false;
  autoPilotOn = false;
  autoPilotTarget = null;
  ui.showHUD();
  audio.setMusic(clock.hour > 19 || clock.hour < 6 ? "music_night" : "music_day", 0.55);
}

function startMission(id) {
  audio.unlock();
  const m = getMission(id);
  if (!m) return;
  currentMissionId = id;
  const pid = m.plane || "trainer";
  resetCraft(craft, m.start || SPAWN.airport, (m.start && m.start.heading) || SPAWN.airport.heading, pid);
  rebuildPlane(pid);
  if (m.start) launchCraft(craft, m.start.speed || 40, 0);
  missions.start(m, craft);
  autoPilotOn = false;
  autoPilotTarget = null;
  clock.set(m.hour ?? 10);
  clock.frozen = true;
  flyCam.state.mode = "chase";
  flyCam.state.hero = false;
  if (weather) weather.set(m.weather || "clear");
  if (m.activity === "landing") { craft.flaps = 1; }
  mode = "fly";
  paused = false;
  pendingResult = null;
  ui.showHUD();
  audio.setMusic(m.hour >= 19 || m.hour < 6 ? "music_night" : "music_day", 0.5);
}

function restartCurrent() {
  if (currentMissionId) startMission(currentMissionId);
  else startFreeFlight();
}

function nextMission() {
  if (!currentMissionId) { backToTitle(); return; }
  const i = MISSIONS.findIndex((m) => m.id === currentMissionId);
  const n = MISSIONS[(i + 1) % MISSIONS.length];
  startMission(n.id);
}

function backToTitle() {
  camOverride = null;
  missions.clear();
  currentMissionId = null;
  pendingResult = null;
  paused = false;
  mode = "title";
  flyCam.state.mode = "title";
  clock.frozen = true;
  clock.set(10.5);
  ui.showTitle(save);
  audio.setMusic("music_day", 0.45);
  // park a plane on the runway for the title loop
  resetCraft(craft, { x: -80, y: 40, z: -900, heading: 0.3 }, 0.3, save.plane || "trainer");
  launchCraft(craft, 46, 0);
  autoPilotOn = true;
  autoPilotTarget = { x: 200, y: 80, z: -700 };
  autoPilotOpts = { speed: 44 };
}

function togglePause() {
  if (mode !== "fly") return;
  paused = !paused;
  if (paused) ui.showPause(save);
  else { ui.closeOverlay(); ui.showHUD(); }
}

async function toggleFullscreen() {
  if (isIOS() && !isStandalone()) {
    ui.showTitle(save); // hint already visible on title; also toast via overlay?
    return;
  }
  try {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      const el = document.getElementById("game");
      const req = el.requestFullscreen || el.webkitRequestFullscreen;
      if (req) await req.call(el);
      if (screen.orientation && screen.orientation.lock && window.innerWidth < 900) {
        try { await screen.orientation.lock("landscape"); } catch {}
      }
    } else {
      const ex = document.exitFullscreen || document.webkitExitFullscreen;
      if (ex) await ex.call(document);
    }
  } catch (err) { console.warn("fullscreen", err); }
}

async function toggleGyro() {
  if (settings.gyroEnabled) {
    input.disableGyro();
    settings.gyroEnabled = false;
    saveSettings(save, settings);
    return;
  }
  const ok = await input.setGyro(true);
  if (ok) {
    input.calibrateGyro();
    settings.gyroEnabled = true;
    saveSettings(save, settings);
  }
}

function handleCraftEvents() {
  const ev = craft.events;
  if (!ev || !ev.length) return;
  for (const e of ev) {
    if (e === "touchdown") audio.play("touchdown");
    if (e === "rough") { audio.play("touchdown"); flyCam.bump(0.5); }
    if (e === "splash") audio.play("splash");
    if (e === "crash") { audio.play("crash"); flyCam.bump(1.2); }
    if (e === "tow-release") audio.play("tow_release");
  }
  craft.events = [];
}

function maybeRespawn() {
  if (craft.crashed && craft.crashTimer <= 0) {
    const sp = craft.spawn || SPAWN.airport;
    resetCraft(craft, sp, sp.heading, craft.id);
    if (currentMissionId) {
      const m = getMission(currentMissionId);
      if (m?.start) launchCraft(craft, m.start.speed || 40, 0);
    }
  }
}

function flattenLook(root) {
  if (!root) return;
  root.traverse((o) => {
    const mats = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
    for (const m of mats) {
      if (!m || m.userData._flat) continue;
      if (m.vertexColors) { m.userData._flat = true; continue; }
      if (m.isMeshLambertMaterial || m.isMeshPhongMaterial || m.isMeshStandardMaterial) {
        const c = (m.color && m.color.clone) ? m.color.clone() : new THREE.Color(0xffffff);
        m.emissive = c.multiplyScalar(0.45);
        m.emissiveIntensity = 0.45;
        if (m.shininess != null) m.shininess = 0;
        m.userData._flat = true;
      }
    }
  });
}

let groundShadow = null;
function ensureShadow() {
  if (groundShadow) return;
  const geo = new THREE.CircleGeometry(4.4, 20);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshBasicMaterial({ color: 0x1a140e, transparent: true, opacity: 0.28, depthWrite: false });
  groundShadow = new THREE.Mesh(geo, mat);
  groundShadow.renderOrder = 2;
  groundShadow.name = "ground-shadow";
  scene.add(groundShadow);
}

function syncPlaneMesh() {
  if (!planeMesh) return;
  planeMesh.position.copy(craft.pos);
  planeMesh.quaternion.copy(craft.quat);
  if (planeMesh.userData.prop && craft.def.engine) {
    planeMesh.userData.prop.rotation.z += (0.4 + craft.throttle * 2.2 + craft.airspeed * 0.03);
  }
  const ud = planeMesh.userData;
  if (ud.elevator) ud.elevator.rotation.x = Math.max(-0.35, Math.min(0.35, -(craft.pitch || 0) * 0.45));
  if (ud.rudder) ud.rudder.rotation.y = Math.max(-0.35, Math.min(0.35, (craft.yawRate || craft.angVel?.y || 0) * 0.4));
  if (ud.ailL) ud.ailL.rotation.x = Math.max(-0.35, Math.min(0.35, (craft.roll || 0) * 0.5));
  if (ud.ailR) ud.ailR.rotation.x = Math.max(-0.35, Math.min(0.35, -(craft.roll || 0) * 0.5));
  if (contrail) {
    const airborne = !craft.onGround && !craft.crashed && craft.airspeed > 18;
    const tail = new THREE.Vector3(0, 0.2, 4).applyQuaternion(craft.quat).add(craft.pos);
    contrail.update(tail, airborne);
  }
  if (groundShadow && island) {
    const gy = Math.max(island.heightAt(craft.pos.x, craft.pos.z), 0.05);
    groundShadow.position.set(craft.pos.x, gy + 0.08, craft.pos.z);
    const agl = Math.max(0.5, craft.pos.y - gy);
    const s = 4.4 * (1 + agl * 0.03);
    groundShadow.scale.set(s / 4.4, 1, s / 4.4 * 0.7);
    groundShadow.material.opacity = 0.28 * (1 / (1 + agl * 0.045));
    groundShadow.visible = !craft.crashed;
  }
}

function coastalAmt() {
  const h = island.heightAt(craft.pos.x, craft.pos.z);
  if (h < 6) return clamp(1 - h / 6, 0, 1);
  // also near shoreline by altitude? use distance to water: if agl high, still hear waves if over water
  return h < 0.5 ? 1 : 0;
}


function createContrail(sc) {
  const N = 36;
  const geo = retagGeometry(new THREE.SphereGeometry(0.14, 5, 4), MAT.CLOUD, 1);
  const mat = new THREE.MeshBasicMaterial({ color: 0xb8deff });
  patchMaterialIdAlpha(mat);
  const inst = new THREE.InstancedMesh(geo, mat, N);
  inst.frustumCulled = false;
  inst.count = 0;
  inst.name = "contrail";
  sc.add(inst);
  const dummy = new THREE.Object3D();
  const hist = [];
  return {
    clear() { hist.length = 0; inst.count = 0; inst.instanceMatrix.needsUpdate = true; },
    update(pos, flying) {
      if (flying && pos) {
        if (!hist.length || hist[hist.length - 1].distanceTo(pos) > 1.6) {
          hist.push(pos.clone());
          if (hist.length > N) hist.shift();
        }
      } else if (hist.length) hist.shift();
      inst.count = hist.length;
      for (let i = 0; i < hist.length; i++) {
        const t = i / Math.max(1, hist.length - 1);
        dummy.position.copy(hist[i]);
        dummy.scale.setScalar(0.18 + t * 0.55);
        dummy.updateMatrix();
        inst.setMatrixAt(i, dummy.matrix);
      }
      inst.instanceMatrix.needsUpdate = true;
    },
  };
}

function renderFrame(time) {
  renderer.info.reset();
  const cssW = canvas.clientWidth || window.innerWidth;
  const cssH = canvas.clientHeight || window.innerHeight;
  camera.aspect = cssW / Math.max(1, cssH);
  const portrait = cssH > cssW;

  if (camOverride) {
    camera.position.copy(camOverride.pos);
    camera.up.set(0, 1, 0);
    camera.lookAt(camOverride.look);
    camera.updateProjectionMatrix();
  } else if (mode === "title") {
    flyCam.state.mode = "title";
    flyCam.update(1 / 60, craft, portrait);
  } else {
    if (flyCam.state.mode === "title") flyCam.state.mode = "chase";
    flyCam.update(1 / 60, craft, portrait);
    if (island) {
      const h = island.heightAt(camera.position.x, camera.position.z);
      if (camera.position.y < h + 2) camera.position.y = h + 2;
    }
  }

  look.uniforms.uTime.value = time;

  renderer.setRenderTarget(colorRT);
  renderer.clear();
  renderer.render(scene, camera);

  const useBloom = (QUALITY[settings.quality] || QUALITY.medium).bloom;
  if (useBloom) {
    bloom.quad.material = bloom.extract;
    bloom.extract.uniforms.tMap.value = colorRT.texture;
    renderer.setRenderTarget(bloomA);
    renderer.clear();
    renderer.render(bloom.scene, bloom.camera);

    bloom.quad.material = bloom.blur;
    bloom.blur.uniforms.tMap.value = bloomA.texture;
    bloom.blur.uniforms.uDir.value.set(1 / bloomA.width, 0);
    renderer.setRenderTarget(bloomB);
    renderer.render(bloom.scene, bloom.camera);
    bloom.blur.uniforms.tMap.value = bloomB.texture;
    bloom.blur.uniforms.uDir.value.set(0, 1 / bloomA.height);
    renderer.setRenderTarget(bloomA);
    renderer.render(bloom.scene, bloom.camera);
    look.uniforms.tBloom.value = bloomA.texture;
    look.uniforms.uBloom.value = 0.48;
  } else {
    look.uniforms.tBloom.value = colorRT.texture;
    look.uniforms.uBloom.value = 0.0;
  }

  look.uniforms.tColor.value = colorRT.texture;
  look.uniforms.tDepth.value = colorRT.depthTexture;
  renderer.setRenderTarget(null);
  renderer.clear();
  renderer.render(look.scene, look.camera);
}

async function warmup() {
  ui.setLoad(0.7, "compiling shaders…");
  // Draw a dummy frame with a variety of objects in view so programs compile
  camera.position.set(200, 180, -400);
  camera.lookAt(0, 40, -200);
  clock.set(10);
  island.sky.setHour(10);
  allocTargets();
  renderFrame(0);
  // night variant (lights)
  island.sky.setHour(21);
  renderFrame(0.1);
  island.sky.setHour(10);
  // force finish
  const gl = renderer.getContext();
  if (gl && gl.finish) gl.finish();
  ui.setLoad(1, "ready");
}

function bindKeys() {
  // UI nav when menus open
}

function step(now) {
  const dtRaw = Math.min(0.05, (now - lastT) / 1000);
  lastT = now;
  const cap = settings.fpsCap === 30 ? 30 : 60;
  // we still raf; physics is fixed

  const inp = input.update(settings);
  if (inp.debug) dbg.on = !dbg.on;
  if (inp.fullscreen && mode !== "boot") toggleFullscreen();
  if (inp.pause && mode === "fly") togglePause();
  if (inp.camera && mode === "fly") flyCam.cycle();

  if (mode === "title" || (ui.overlay && !ui.overlay.classList.contains("hidden") && mode !== "fly") || paused) {
    if (inp.pitch > 0.5) ui.menuMove(1);
    if (inp.pitch < -0.5) ui.menuMove(-1);
    if (inp.actionPressed) ui.menuOk();
  }

  if (!paused && (mode === "fly" || mode === "title")) {
    // autopilot title demo + test hook
    if (autoPilotOn && autoPilotTarget) {
      const d = autopilot(craft, autoPilotTarget, inp, autoPilotOpts);
      if (d < 18 && mode === "title") {
        autoPilotTarget = {
          x: (Math.random() - 0.5) * 1600,
          y: 60 + Math.random() * 80,
          z: -400 + (Math.random() - 0.5) * 800,
        };
      }
    }

    accum += dtRaw;
    const steps = Math.min(24, Math.floor(accum / PHYS.dt));
    for (let i = 0; i < steps; i++) {
      stepCraft(craft, inp, island, PHYS.dt, settings);
      if (mode === "title" && craft.crashed) {
        craft.crashed = false;
        craft.crashTimer = 0;
        launchCraft(craft, 46, 6);
        craft.pos.y = Math.max(craft.pos.y, 80);
      }
      handleCraftEvents();
      maybeRespawn();
      accum -= PHYS.dt;
    }
    clock.step(dtRaw);
    island.update(dtRaw, now / 1000, clock.hour);
    if (weather) {
      weather.update(dtRaw, now / 1000);
      weather.applyToCraft(craft, dtRaw);
      look.uniforms.uRain.value = weather.state.rain;
      look.uniforms.uFlash.value = weather.state.flash;
      if (typeof island.setStorm === "function") island.setStorm(weather.state.id === "storm", weather.state.windKt);
    }

    syncPlaneMesh();

    if (mode === "fly") {
      const st = missions.update(dtRaw, now / 1000, craft, camera, inp);
      if (st.result && !pendingResult) {
        pendingResult = st.result;
        if (st.result.stars > 0) awardStars(save, st.active.id, st.result.stars, { time: st.result.time, grade: st.result.grade, line: st.result.line });
        if (st.result.photo) {
          try {
            const data = canvas.toDataURL("image/jpeg", 0.7);
            savePhoto(save, { id: st.active.id, title: st.result.subject || st.active.title, data, when: Date.now() });
          } catch {}
        }
        setTimeout(() => ui.showResult(save, pendingResult), 700);
      }
      if (inp.actionPressed && craft.id === "glider" && craft.onGround && !currentMissionId) {
        startTow(craft);
      }
      audio.updateFlight(craft, settings, coastalAmt(), craft.thermal);
      if (craft.stalled && !craft.onGround) {
        if (!step._stallT || now - step._stallT > 280) { audio.play("stall", { gain: 0.4 }); step._stallT = now; }
      }
      ui.updateHUD(craft, missions.state, clock.hour, ui.isPortrait(), { weather: weather && weather.state, save: Object.assign({}, save, { starsTotal: totalStars(save) }) });
    }
  }

  renderFrame(now / 1000);

  frameMs = dtRaw * 1000;
  fpsN++; fpsAcc += dtRaw;
  if (now - lastFpsT > 500) {
    fps = fpsN / fpsAcc;
    fpsN = 0; fpsAcc = 0; lastFpsT = now;
  }
  const info = renderer.info;
  dbg.update({
    backend, grid, fps, frameMs, calls: info.render.calls,
    mode: "ligne-claire", quality: settings.quality,
    craft,
  });
}

async function boot() {
  ui.setLoad(0.1, "tuning the radio…");
  try { await audio.loadAll((p) => ui.setLoad(0.1 + p * 0.35, "tuning the radio…")); } catch (e) { console.warn(e); }
  audio.setVolumes(settings);

  ui.setLoad(0.5, "raising the island…");
  island = createIsland(scene, settings.quality || "medium");
  flattenLook(scene);
  ensureShadow();
  weather = createWeather(scene, island.sky, island.water);
  missions = createMissionSystem(scene, island, audio);
  rebuildPlane(save.plane || "trainer");
  resetCraft(craft, SPAWN.airport, SPAWN.airport.heading, craft.id);

  window.addEventListener("resize", () => { allocTargets(); });
  window.addEventListener("orientationchange", () => setTimeout(allocTargets, 200));

  // first click unlocks audio
  const unlock = () => { audio.unlock(); window.removeEventListener("pointerdown", unlock); };
  window.addEventListener("pointerdown", unlock);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && mode === "fly") { paused = true; ui.showPause(save); }
  });

  await warmup();
  allocTargets();
  backToTitle();

  const loop = (t) => { step(t); requestAnimationFrame(loop); };
  requestAnimationFrame(loop);

  exposeAPI();
}



function hudShot() {
  ui.showHUD();
  ui.updateHUD(craft, missions.state, clock.hour, ui.isPortrait(), {
    weather: weather && weather.state,
    save: Object.assign({}, save, { starsTotal: totalStars(save) }),
  });
}

function heroShot(opts = {}) {
  const x = opts.x ?? 240;
  const y = opts.y ?? 68;
  const z = opts.z ?? -1310;
  const tx = opts.tx ?? -20;
  const ty = opts.ty ?? 32;
  const tz = opts.tz ?? -160;
  startFreeFlight();
  if (weather) weather.set(opts.weather || "clear");
  if (typeof island.setStorm === "function") island.setStorm((opts.weather || "clear") === "storm", weather && weather.state.windKt);
  clock.set(opts.hour ?? 11);
  island.sky.setHour(opts.hour ?? 11);
  camOverride = null;
  const hdg = headingFromXZ(tx - x, tz - z);
  resetCraft(craft, { x, y, z, heading: hdg }, hdg, "trainer");
  launchCraft(craft, opts.speed ?? 46, 0);
  craft.gearDown = false;
  craft.onGround = false;
  craft.throttle = 0.78;
  rebuildPlane("trainer");
  flyCam.state.mode = "chase";
  flyCam.state.hero = true;
  craft.angVel.set(0, 0, 0);
  craft.roll = 0;
  craft.pitch = 0;
  flyCam.snap(craft, false);
  paused = true;
  if (opts.showcase !== false) showcaseRings("pro", 3, 12, 27.346, null);
  if (contrail) contrail.clear();
  if (missions.spawnDemoChain) {
    const chain = [];
    for (let i = 0; i < 4; i++) {
      const t = 0.16 + i * 0.13;
      chain.push({
        x: x + (tx - x) * t,
        y: y - 6 - i * 5,
        z: z + (tz - z) * t,
        r: 22 - i * 2,
      });
    }
    missions.spawnDemoChain(chain);
  }
  syncPlaneMesh();
  hudShot();
  return { x, y, z, heading: hdg };
}



function showcaseRings(klass, passed, total, tsec, weatherId) {
  const rings = [];
  for (let i = 0; i < total; i++) rings.push({ x: 0, y: 80, z: 0, r: 16 });
  missions.state.active = {
    id: "showcase",
    activity: "rings",
    klass,
    title: "Ring Course",
    brief: "Fly through all rings!",
    weather: weatherId || null,
    rings,
    timeLimit: 180,
  };
  missions.state.ringsPassed = passed;
  missions.state.t = tsec;
  missions.state.result = null;
}

function landingShot(opts = {}) {
  const m = getMission("land-p1");
  startFreeFlight();
  if (m) {
    currentMissionId = "land-p1";
    missions.start(m, craft);
  }
  if (weather) weather.set("clear", { windDeg: 310, windKt: 8 });
  clock.set(opts.hour ?? 11);
  island.sky.setHour(opts.hour ?? 11);
  camOverride = null;
  const x = opts.x ?? 500;
  const y = opts.y ?? 22;
  const z = opts.z ?? -1100;
  const hdg = Math.PI;
  resetCraft(craft, { x, y, z, heading: hdg }, hdg, "trainer");
  launchCraft(craft, opts.speed ?? 34, -1.0);
  craft.gearDown = true;
  craft.flaps = 1;
  craft.onGround = false;
  craft.throttle = 0.4;
  craft.angVel.set(0, 0, 0);
  craft.roll = 0;
  craft.pitch = -0.08;
  rebuildPlane("trainer");
  flyCam.state.mode = "chase";
  flyCam.state.hero = "landing";
  flyCam.snap(craft, false);
  paused = true;
  syncPlaneMesh();
  if (contrail) contrail.clear();
  hudShot();
  return { x, y, z, heading: hdg };
}

function stormShot(opts = {}) {
  const pose = heroShot({ ...opts, weather: "storm", hour: opts.hour ?? 11, showcase: false });
  if (weather) weather.set("storm", { windDeg: 270, windKt: 22.7, visibility: 4.2, turbulence: 0.7 });
  if (typeof island.setStorm === "function") island.setStorm(true, 22.7);
  island.sky.setHour(opts.hour ?? 11);
  weather.state.flash = 0.42;
  weather.state.rain = 1;
  if (weather.bolt) {
    weather.bolt.visible = true;
    weather.bolt.position.set(380, 280, -200);
    weather.bolt.scale.set(2.4, 3.2, 2.4);
  }
  showcaseRings("ace", 4, 12, 46.219, "storm");
  // ring chain already spawned by heroShot
  flyCam.state.hero = true;
  flyCam.snap(craft, false);
  syncPlaneMesh();
  if (look && weather) {
    look.uniforms.uRain.value = 1;
    look.uniforms.uFlash.value = 0.35;
  }
  hudShot();
  return pose;
}

function exposeAPI() {
  window.ASCII_AIR = {
    version: VERSION,
    ready: true,
    backend,
    settings, save, craft, camera, scene, renderer, island, missions, audio, ui, clock, weather,
    getPerf() {
      return {
        fps, frameMs, calls: renderer.info.render.calls, triangles: renderer.info.render.triangles,
        grid: { ...grid }, backend, displayMode: "ligne-claire",
        quality: settings.quality,
      };
    },
    startMission, startFreeFlight, backToTitle, heroShot, landingShot, stormShot,
    get planeMesh() { return planeMesh; },
    setWeather: (id, opts) => weather && weather.set(id, opts),
    setTime: (h) => { clock.set(h); island.sky.setHour(h); },
    setDisplayMode: () => {},
    setCharSize: () => {},
    setQuality: (q) => { settings.quality = q; applyVisualSettings(); },
    setPlane: (id) => { rebuildPlane(id); resetCraft(craft, craft.spawn, craft.spawn?.heading, id); },
    teleport: (x, y, z) => { craft.pos.set(x, y, z); craft.prevPos.copy(craft.pos); },
    lookFrom(x, y, z, lx, ly, lz) {
      camOverride = {
        pos: new THREE.Vector3(x, y, z),
        look: new THREE.Vector3(lx, ly, lz),
      };
    },
    clearLook() { camOverride = null; },
    launch: (spd) => launchCraft(craft, spd, 2),
    setAutopilot: (on, target, opts) => { autoPilotOn = !!on; autoPilotTarget = target; autoPilotOpts = opts || {}; },
    setPaused: (v) => { paused = !!v; if (!paused) ui.closeOverlay(); },
    getPaused: () => paused,
    // Step live input (held keys / touch) through physics without waiting on the renderer.
    advance(seconds) {
      const steps = Math.max(1, Math.round(seconds / PHYS.dt));
      for (let i = 0; i < steps; i++) {
        const stepInp = input.update(settings);
        if (weather) weather.applyToCraft(craft, PHYS.dt);
        stepCraft(craft, stepInp, island, PHYS.dt, settings);
        handleCraftEvents();
        maybeRespawn();
        if (mode === "fly") missions.update(PHYS.dt, i * PHYS.dt, craft, camera, stepInp);
        flyCam.update(PHYS.dt, craft, ui.isPortrait && ui.isPortrait());
      }
      syncPlaneMesh();
    },

    steerTo: (inp, craft, x, y, z, opts) => autopilot(craft, { x, y, z }, inp, opts || {}),
    completeMissionNow: (stars = 3) => {
      if (missions.state.active) {
        missions.state.result = { stars, line: "DEBUG", time: missions.state.t, mission: missions.state.active };
        awardStars(save, missions.state.active.id, stars, { time: 0 });
      }
    },
    takePhoto: () => { try { return canvas.toDataURL("image/jpeg", 0.8); } catch { return null; } },
    getUIBounds: () => ui.elements(),
    toggleFullscreen, toggleGyro,
    listMissions: () => MISSIONS.map((m) => m.id),
    getMission,
    simulate(seconds, inputFn) {
      const inp = { pitch: 0, roll: 0, yaw: 0, throttle: 0, throttleSet: null, boost: false, brake: false, actionPressed: false, actionHeld: false, gearToggle: false };
      const steps = Math.max(1, Math.floor(seconds * PHYS.hz));
      let t = 0;
      for (let i = 0; i < steps; i++) {
        if (typeof inputFn === "function") inputFn(inp, craft, camera, t, missions.state);
        else if (autoPilotOn && autoPilotTarget) autopilot(craft, autoPilotTarget, inp, autoPilotOpts);
        inp.actionPressed = !!inp.actionPressed;
        stepCraft(craft, inp, island, PHYS.dt, settings);
        if (mode === "title" && craft.crashed) { craft.crashed = false; craft.crashTimer = 0; }
        handleCraftEvents();
        maybeRespawn();
        syncPlaneMesh();
        if (mode === "fly") missions.update(PHYS.dt, t, craft, camera, inp);
        // keep camera with the plane so photo checks work
        flyCam.state.mode = flyCam.state.mode === "title" ? "chase" : flyCam.state.mode;
        if (flyCam.state.mode === "title") flyCam.state.mode = "chase";
        flyCam.update(PHYS.dt, craft, false);
        t += PHYS.dt;
        inp.actionPressed = false;
        if (missions.state.result) break;
        if (craft.crashed && craft.crashTimer > 1.5) {
          // will respawn next maybeRespawn after timer; keep going
        }
      }
      island.update(Math.min(seconds, 0.5), t, clock.hour);
      return {
        result: missions.state.result,
        t,
        craft: { x: craft.pos.x, y: craft.pos.y, z: craft.pos.z, airspeed: craft.airspeed, crashed: craft.crashed },
        mission: missions.state.active && missions.state.active.id,
        popped: missions.state.popped,
        rings: missions.state.ringsPassed,
        photoReady: missions.state.photoReady,
        photoScore: missions.state.photoScore,
      };
    },
  };
}

boot().catch((err) => {
  console.error(err);
  ui.setLoad(1, "error: " + (err && err.message ? err.message : err));
});
