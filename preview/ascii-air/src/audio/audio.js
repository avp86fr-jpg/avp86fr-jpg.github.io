import { AUDIO_FILES } from "../core/config.js";
import { clamp } from "../core/utils.js";

export function createAudio() {
  const ac = new (window.AudioContext || window.webkitAudioContext)();
  const master = ac.createGain();
  const musicG = ac.createGain();
  const sfxG = ac.createGain();
  master.connect(ac.destination);
  musicG.connect(master);
  sfxG.connect(master);
  musicG.gain.value = 0.55;
  sfxG.gain.value = 0.7;
  master.gain.value = 0.85;

  const buffers = new Map();
  const loops = new Map();
  let currentMusic = null;
  let unlocked = false;

  async function loadAll(onProg) {
    const base = new URL("../../audio/", import.meta.url);
    let done = 0;
    for (const name of AUDIO_FILES) {
      try {
        const url = new URL(`${name}.ogg`, base).href;
        const res = await fetch(url);
        const arr = await res.arrayBuffer();
        const buf = await ac.decodeAudioData(arr.slice(0));
        buffers.set(name, buf);
      } catch (err) {
        console.warn("audio fail", name, err);
      }
      done++;
      if (onProg) onProg(done / AUDIO_FILES.length, name);
    }
  }

  function unlock() {
    if (unlocked) return;
    if (ac.state === "suspended") ac.resume();
    unlocked = true;
  }

  function play(name, { gain = 1, playbackRate = 1, bus = "sfx" } = {}) {
    const buf = buffers.get(name);
    if (!buf) return null;
    if (ac.state === "suspended") ac.resume();
    const src = ac.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = playbackRate;
    const g = ac.createGain();
    g.gain.value = gain;
    src.connect(g);
    g.connect(bus === "music" ? musicG : sfxG);
    src.start();
    return src;
  }

  function loop(name, { gain = 1, playbackRate = 1, bus = "sfx" } = {}) {
    if (loops.has(name)) {
      const L = loops.get(name);
      L.gain.gain.setTargetAtTime(gain, ac.currentTime, 0.08);
      L.src.playbackRate.setTargetAtTime(playbackRate, ac.currentTime, 0.1);
      return L;
    }
    const buf = buffers.get(name);
    if (!buf) return null;
    if (ac.state === "suspended") ac.resume();
    const src = ac.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    src.playbackRate.value = playbackRate;
    const g = ac.createGain();
    g.gain.value = gain;
    src.connect(g);
    g.connect(bus === "music" ? musicG : sfxG);
    src.start();
    const L = { src, gain: g, name };
    loops.set(name, L);
    return L;
  }

  function stopLoop(name, fade = 0.2) {
    const L = loops.get(name);
    if (!L) return;
    L.gain.gain.setTargetAtTime(0, ac.currentTime, fade / 3);
    setTimeout(() => {
      try { L.src.stop(); } catch {}
      loops.delete(name);
    }, fade * 1000 + 50);
  }

  function setMusic(name, gain = 0.7) {
    if (currentMusic === name) {
      const L = loops.get(name);
      if (L) L.gain.gain.setTargetAtTime(gain, ac.currentTime, 0.3);
      return;
    }
    if (currentMusic) stopLoop(currentMusic, 0.8);
    currentMusic = name;
    if (name) loop(name, { gain, bus: "music" });
  }

  function setVolumes(settings) {
    master.gain.value = clamp(settings.masterVol ?? 0.85, 0, 1);
    musicG.gain.value = clamp(settings.musicVol ?? 0.55, 0, 1);
    sfxG.gain.value = clamp(settings.sfxVol ?? 0.7, 0, 1);
  }

  function updateFlight(craft, settings, nearCoast = 0, inThermal = 0, weather = null) {
    if (!unlocked) return;
    const def = craft.def;
    if (def.engine && !craft.crashed) {
      const rpm = 0.55 + craft.throttle * 0.9 + craft.airspeed * 0.006;
      const vol = 0.07 + craft.throttle * 0.42 + (craft.onGround ? 0.04 : 0);
      loop(def.engineSound, { gain: vol, playbackRate: rpm });
    } else if (def.engineSound) {
      const L = loops.get(def.engineSound);
      if (L) L.gain.gain.setTargetAtTime(0, ac.currentTime, 0.1);
    }
    // wind — a little more body in a squall or storm
    const w = clamp((craft.airspeed - 8) / 62, 0, 1);
    const wet = weather && (weather.id === "squall" || weather.id === "storm") ? 0.22 : 0;
    loop("wind", { gain: 0.06 + w * 0.62 + wet, playbackRate: 0.82 + w * 0.42 + (wet ? 0.08 : 0) });
    loop("waves", { gain: nearCoast * 0.35, playbackRate: 1 });
    if (inThermal > 2) loop("thermal", { gain: clamp(inThermal / 20, 0, 0.25) });
    else {
      const L = loops.get("thermal");
      if (L) L.gain.gain.setTargetAtTime(0, ac.currentTime, 0.2);
    }
  }

  function disposeLoops() {
    for (const name of [...loops.keys()]) stopLoop(name, 0.05);
    currentMusic = null;
  }

  return { ac, loadAll, unlock, play, loop, stopLoop, setMusic, setVolumes, updateFlight, disposeLoops, buffers };
}
