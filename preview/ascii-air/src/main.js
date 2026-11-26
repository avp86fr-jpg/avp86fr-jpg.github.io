import * as THREE from "three";
import { CAM, PHYS, DEFAULT_SETTINGS, PLANES, SPAWN, STAR_UNLOCKS, VERSION } from "./core/config.js";
import { isMobileUA, isIOS, isStandalone, nowMs, clamp } from "./core/utils.js";
import { createAsciiPipeline, computeGrid } from "./ascii/asciiPass.js";
import { getIdMaterial, tagMesh } from "./render/idMaterial.js";
import { makeColorDepthRT, makeRT } from "./render/targets.js";
import { createBloom } from "./post/bloom.js";
import { createIsland } from "./world/island.js";
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
renderer.setClearColor(0x07090b, 1);
const backend = renderer.capabilities.isWebGL2 ? "WebGL2" : "WebGL1";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(CAM.fov, 16 / 9, CAM.near, CAM.far);
const flyCam = createFlightCamera(camera);

const ascii = createAsciiPipeline();
const bloom = createBloom();
const idMat = getIdMaterial();

let grid = { cols: 160, rows: 90, cell: 12 };
let colorRT = null, idRT = null, asciiRT = null, bloomA = null, bloomB = null;

function allocTargets() {
  const cssW = canvas.clientWidth || window.innerWidth;
  const cssH = canvas.clientHeight || window.innerHeight;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const outW = Math.max(320, Math.round(cssW * dpr));
  const outH = Math.max(180, Math.round(cssH * dpr));
  renderer.setSize(outW, outH, false);
  const q = QUALITY[settings.quality] || QUALITY.medium;
  grid = computeGrid(cssW, cssH, settings.charSize || "medium", q.gridScale);
  const dispose = (rt) => { if (rt) rt.dispose(); };
  dispose(colorRT); dispose(idRT); dispose(asciiRT); dispose(bloomA); dispose(bloomB);
  colorRT = makeColorDepthRT(grid.cols, grid.rows);
  idRT = makeRT(grid.cols, grid.rows, THREE.NearestFilter);
  asciiRT = makeRT(outW, outH, THREE.LinearFilter, THREE.SRGBColorSpace);
  const bw = Math.max(64, outW >> 2), bh = Math.max(36, outH >> 2);
  bloomA = makeRT(bw, bh);
  bloomB = makeRT(bw, bh);
  ascii.uniforms.uGrid.value.set(grid.cols, grid.rows);
  ascii.uniforms.uNearFar.value.set(camera.near, camera.far);
  bloom.compose.uniforms.uRes.value.set(outW, outH);
  camera.aspect = cssW / cssH;
  camera.updateProjectionMatrix();
}

const clock = createClock(10);
ui.setLoad(0.05, "raising the island…");

let island = null;
let craft = createCraft(save.plane || "trainer");
let planeMesh = null;
let missions = null;
const dbg = createDebug(uiRoot);

function rebuildPlane(id) {
  if (planeMesh) scene.remove(planeMesh);
  planeMesh = createPlaneMesh(id, PLANES[id]);
  scene.add(planeMesh);
  if (craft.id !== id) resetCraft(craft, SPAWN.airport, SPAWN.airport.heading, id);
}

function applyVisualSettings() {
  ascii.setMode(settings.displayMode || "color");
  ascii.uniforms.uGlowBoost.value = settings.glow ?? 0.7;
  ascii.uniforms.uContrast.value = settings.highContrast ? 1.5 : 1.0;
  ascii.uniforms.uQuantize.value = settings.displayMode === "color" ? 0 : 0;
  bloom.compose.uniforms.uCrt.value = settings.crt ?? 0;
  bloom.compose.uniforms.uStrength.value = (settings.glow ?? 0.7) * (QUALITY[settings.quality]?.bloom ? 0.7 : 0.15);
  flyCam.state.comfort = !!settings.motionComfort;
  audio.setVolumes(settings);
  allocTargets();
}

// Auto quality hint
if (!save.settings._autoQ && isMobileUA()) {
  settings.quality = "medium";
  settings.charSize = "medium";
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
  mode = "fly";
  paused = false;
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
  clock.set(m.hour ?? 10);
  clock.frozen = true;
  flyCam.state.mode = "chase";
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

function syncPlaneMesh() {
  if (!planeMesh) return;
  planeMesh.position.copy(craft.pos);
  planeMesh.quaternion.copy(craft.quat);
  if (planeMesh.userData.prop && craft.def.engine) {
    planeMesh.userData.prop.rotation.z += (0.4 + craft.throttle * 2.2 + craft.airspeed * 0.03);
  }
}

function coastalAmt() {
  const h = island.heightAt(craft.pos.x, craft.pos.z);
  if (h < 6) return clamp(1 - h / 6, 0, 1);
  // also near shoreline by altitude? use distance to water: if agl high, still hear waves if over water
  return h < 0.5 ? 1 : 0;
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

  ascii.uniforms.uTime.value = time;
  bloom.compose.uniforms.uTime.value = time;
  if (island) {
    ascii.uniforms.uFogColor.value.copy(island.sky.fogColor);
  }

  // 1. Color + depth
  renderer.setRenderTarget(colorRT);
  renderer.clear();
  renderer.render(scene, camera);

  // 2. ID pass (hide points/lines — override shader is mesh-only)
  const hidden = [];
  scene.traverse((o) => {
    if (o.isPoints || o.isLine || o.isLineSegments) { hidden.push([o, o.visible]); o.visible = false; }
  });
  scene.overrideMaterial = idMat;
  renderer.setRenderTarget(idRT);
  renderer.clear();
  renderer.render(scene, camera);
  scene.overrideMaterial = null;
  for (const [o, v] of hidden) o.visible = v;

  // 3. ASCII compose
  ascii.uniforms.tColor.value = colorRT.texture;
  ascii.uniforms.tDepth.value = colorRT.depthTexture;
  ascii.uniforms.tId.value = idRT.texture;
  renderer.setRenderTarget(asciiRT);
  renderer.clear();
  renderer.render(ascii.scene, ascii.camera);

  const useBloom = (QUALITY[settings.quality] || QUALITY.medium).bloom && (settings.glow ?? 0.7) > 0.05
    && settings.displayMode !== "paper";

  if (useBloom) {
    bloom.quad.material = bloom.extract;
    bloom.extract.uniforms.tMap.value = asciiRT.texture;
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

    bloom.quad.material = bloom.compose;
    bloom.compose.uniforms.tSrc.value = asciiRT.texture;
    bloom.compose.uniforms.tBloom.value = bloomA.texture;
    renderer.setRenderTarget(null);
    renderer.clear();
    renderer.render(bloom.scene, bloom.camera);
  } else {
    bloom.quad.material = bloom.compose;
    bloom.compose.uniforms.tSrc.value = asciiRT.texture;
    bloom.compose.uniforms.tBloom.value = asciiRT.texture;
    bloom.compose.uniforms.uStrength.value = 0;
    bloom.compose.uniforms.uCrt.value = settings.crt ?? 0;
    renderer.setRenderTarget(null);
    renderer.clear();
    renderer.render(bloom.scene, bloom.camera);
  }
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
    const steps = Math.min(8, Math.floor(accum / PHYS.dt));
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
      ui.updateHUD(craft, missions.state, clock.hour, ui.isPortrait());
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
    mode: settings.displayMode, charSize: settings.charSize, quality: settings.quality,
    craft,
  });
}

async function boot() {
  ui.setLoad(0.1, "tuning the radio…");
  try { await audio.loadAll((p) => ui.setLoad(0.1 + p * 0.35, "tuning the radio…")); } catch (e) { console.warn(e); }
  audio.setVolumes(settings);

  ui.setLoad(0.5, "raising the island…");
  island = createIsland(scene, settings.quality || "medium");
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

function exposeAPI() {
  window.ASCII_AIR = {
    version: VERSION,
    ready: true,
    backend,
    settings, save, craft, camera, scene, renderer, island, missions, audio, ui, clock,
    getPerf() {
      return {
        fps, frameMs, calls: renderer.info.render.calls, triangles: renderer.info.render.triangles,
        grid: { ...grid }, backend, displayMode: settings.displayMode, charSize: settings.charSize,
        quality: settings.quality,
      };
    },
    startMission, startFreeFlight, backToTitle,
    setTime: (h) => { clock.set(h); island.sky.setHour(h); },
    setDisplayMode: (m) => { settings.displayMode = m; applyVisualSettings(); },
    setCharSize: (s) => { settings.charSize = s; applyVisualSettings(); },
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
      const inp = { pitch: 0, roll: 0, yaw: 0, throttle: 0, throttleSet: 0.7, actionPressed: false, actionHeld: false, gearToggle: false };
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
