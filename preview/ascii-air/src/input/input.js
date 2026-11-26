import { KEYS } from "../core/config.js";
import { clamp, isMobileUA } from "../core/utils.js";

export function createInput(root) {
  const keys = new Set();
  const state = {
    pitch: 0, roll: 0, yaw: 0,
    throttle: 0,
    throttleSet: null,
    action: false,
    actionHeld: false,
    actionPressed: false,
    camera: false,
    pause: false,
    gearToggle: false,
    map: false,
    fullscreen: false,
    autoThrottle: false,
    pointerX: 0, pointerY: 0,
    usingTouch: false,
    usingGyro: false,
    gyroCal: { b: 0, g: 0 },
    stick: { x: 0, y: 0, active: false },
  };

  let actionWas = false;
  const pulses = { camera: false, pause: false, gearToggle: false, map: false, fullscreen: false, debug: false };

  function onKey(e, down) {
    if (e.repeat) return;
    if (down) keys.add(e.code); else keys.delete(e.code);
    if (down && KEYS.camera.includes(e.code)) pulses.camera = true;
    if (down && KEYS.pause.includes(e.code)) pulses.pause = true;
    if (down && KEYS.gear.includes(e.code)) pulses.gearToggle = true;
    if (down && KEYS.map.includes(e.code)) pulses.map = true;
    if (down && KEYS.fullscreen.includes(e.code)) pulses.fullscreen = true;
    if (down && KEYS.debug.includes(e.code)) pulses.debug = true;
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) e.preventDefault();
  }

  window.addEventListener("keydown", (e) => onKey(e, true), { passive: false });
  window.addEventListener("keyup", (e) => onKey(e, false));
  window.addEventListener("blur", () => keys.clear());

  // Gamepad polled in update
  function readGamepad() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    let p = null;
    for (const g of pads) if (g && g.connected) { p = g; break; }
    if (!p) return null;
    const dead = (v) => Math.abs(v) < 0.12 ? 0 : v;
    return {
      roll: dead(p.axes[0] || 0),
      pitch: dead(p.axes[1] || 0),
      yaw: (p.buttons[4]?.pressed ? -1 : 0) + (p.buttons[5]?.pressed ? 1 : 0),
      throttleSet: p.buttons[7] ? p.buttons[7].value : null,
      action: !!(p.buttons[0]?.pressed),
      camera: !!(p.buttons[3]?.pressed && !p._cam),
    };
  }

  function any(list) { return list.some((k) => keys.has(k)); }

  function update(settings) {
    const gp = readGamepad();
    let pitch = 0, roll = 0, yaw = 0, throttle = 0, throttleSet = null;
    if (any(KEYS.pitchUp)) pitch += 1;
    if (any(KEYS.pitchDown)) pitch -= 1;
    if (any(KEYS.rollLeft)) roll -= 1;
    if (any(KEYS.rollRight)) roll += 1;
    if (any(KEYS.yawLeft)) yaw -= 1;
    if (any(KEYS.yawRight)) yaw += 1;
    if (any(KEYS.throttleUp)) throttle += 1;
    if (any(KEYS.throttleDown)) throttle -= 1;

    if (state.stick.active) {
      roll = state.stick.x;
      pitch = state.stick.y;
    }
    if (state.usingGyro) {
      roll = clamp(roll + state.gyroRoll, -1, 1);
      pitch = clamp(pitch + state.gyroPitch, -1, 1);
    }
    if (gp) {
      roll = roll || gp.roll;
      pitch = pitch || gp.pitch;
      yaw = yaw || gp.yaw;
      if (gp.throttleSet != null) throttleSet = gp.throttleSet;
      if (gp.action) state.actionHeld = true;
    }

    if (state.throttleSlider != null) throttleSet = state.throttleSlider;

    const actionHeld = any(KEYS.action) || state.touchAction || !!(gp && gp.action);
    const actionPressed = actionHeld && !actionWas;
    actionWas = actionHeld;

    const out = {
      pitch, roll, yaw, throttle, throttleSet,
      action: actionPressed,
      actionHeld,
      actionPressed,
      camera: pulses.camera || state.touchCamera || !!(gp && gp.camera),
      pause: pulses.pause,
      gearToggle: pulses.gearToggle,
      map: pulses.map,
      fullscreen: pulses.fullscreen,
      debug: pulses.debug,
      autoThrottle: settings?.autoThrottle,
    };
    pulses.camera = pulses.pause = pulses.gearToggle = pulses.map = pulses.fullscreen = pulses.debug = false;
    state.touchCamera = false;
    Object.assign(state, out);
    return out;
  }

  function setStick(x, y, active) {
    state.stick.x = clamp(x, -1, 1);
    state.stick.y = clamp(y, -1, 1);
    state.stick.active = active;
    if (!active) { state.stick.x = 0; state.stick.y = 0; }
  }

  function setThrottleSlider(v) { state.throttleSlider = v == null ? null : clamp(v, 0, 1); }
  function setTouchAction(v) { state.touchAction = v; }

  let gyroOn = false;
  function setGyro(on) {
    gyroOn = on;
    state.usingGyro = false;
    if (!on) return Promise.resolve(false);
    const req = typeof DeviceOrientationEvent !== "undefined" && DeviceOrientationEvent.requestPermission;
    const start = () => {
      window.addEventListener("deviceorientation", onOrient);
      state.usingGyro = true;
      return true;
    };
    if (req) {
      return DeviceOrientationEvent.requestPermission().then((r) => r === "granted" ? start() : false).catch(() => false);
    }
    start();
    return Promise.resolve(true);
  }
  function calibrateGyro() {
    state.gyroCal.b = state._beta || 0;
    state.gyroCal.g = state._gamma || 0;
  }
  function onOrient(e) {
    state._beta = e.beta || 0;
    state._gamma = e.gamma || 0;
    const sens = 1;
    // gamma: left-right tilt, beta: front-back
    state.gyroRoll = clamp(((e.gamma || 0) - state.gyroCal.g) / 35 * sens, -1, 1);
    state.gyroPitch = clamp(((e.beta || 0) - state.gyroCal.b) / 35 * sens, -1, 1);
  }
  function disableGyro() {
    window.removeEventListener("deviceorientation", onOrient);
    state.usingGyro = false;
    state.gyroRoll = 0;
    state.gyroPitch = 0;
  }

  return { update, setStick, setThrottleSlider, setTouchAction, setGyro, disableGyro, calibrateGyro, state, keys };
}
