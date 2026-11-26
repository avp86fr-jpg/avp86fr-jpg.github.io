import { deg, pad } from "../core/utils.js";
import { LANDMARKS } from "../core/config.js";

export function createDebug(root) {
  const el = document.createElement("div");
  el.id = "debug-ov";
  el.className = "hidden";
  root.appendChild(el);
  let on = false;
  function toggle() { on = !on; el.classList.toggle("hidden", !on); }
  function update(info) {
    if (!on) return;
    const c = info.craft;
    el.textContent =
`AEROPOSTALE ISLAND  ${info.backend}  ${info.grid.cols}×${info.grid.rows}px
fps ${info.fps.toFixed(0)}  frame ${info.frameMs.toFixed(1)}ms  calls ${info.calls}
mode ${info.mode}  q ${info.quality}

pos ${c.pos.x.toFixed(0)}  ${c.pos.y.toFixed(1)}  ${c.pos.z.toFixed(0)}
ias ${c.airspeed.toFixed(1)}  alt ${c.altitude.toFixed(1)}  agl ${c.agl.toFixed(1)}
hdg ${deg(c.heading).toFixed(0)}  pit ${deg(c.pitch).toFixed(0)}  rol ${deg(c.roll).toFixed(0)}
aoa ${deg(c.aoa).toFixed(1)}  vs ${c.vspeed.toFixed(1)}  thr ${(c.throttle * 100).toFixed(0)}
stall ${c.stalled}  gear ${c.gearDown}  gnd ${c.onGround}  wat ${c.waterborne}
thermal ${c.thermal.toFixed(1)}  plane ${c.id}`;
  }
  return { toggle, update, get on() { return on; }, set on(v) { on = v; el.classList.toggle("hidden", !on); }, el };
}

/** Autopilot used by tests and the debug fly-to. Holds a target bank instead of a raw roll rate so it cannot invert. */
export function autopilot(craft, target, input, opts = {}) {
  const dx = target.x - craft.pos.x;
  const dz = target.z - craft.pos.z;
  const dist = Math.hypot(dx, dz);
  const wantHdg = Math.atan2(dz, dx);
  let dh = wantHdg - craft.heading;
  while (dh > Math.PI) dh -= Math.PI * 2;
  while (dh < -Math.PI) dh += Math.PI * 2;
  const wantAlt = target.y ?? craft.altitude;
  const altErr = wantAlt - craft.pos.y;
  const maxBank = opts.maxBank ?? 0.72;
  let wantSpeed = opts.speed ?? craft.def.cruise;
  if (Math.abs(dh) > 0.35 && !opts.cut && !opts.cutThrottle) wantSpeed = Math.min(wantSpeed, 36);
  const targetRoll = -Math.max(-maxBank, Math.min(maxBank, dh * 1.4));
  input.roll = Math.max(-0.7, Math.min(0.7, -(targetRoll - craft.roll) * 1.8));
  input.yaw = Math.max(-0.45, Math.min(0.45, dh * 0.35));
  let pitch = Math.max(-0.28, Math.min(0.4, altErr * 0.04 - (craft.vspeed || 0) * 0.05));
  if (opts.flare && dist < 80 && altErr < 20) pitch = 0.35;
  if (opts.cut) pitch = Math.max(pitch, 0.2);
  if ((craft.vspeed || 0) < -8) pitch = Math.max(pitch, 0.45);
  if (craft.stalled) pitch = Math.min(pitch, 0.12);
  if ((craft.agl ?? 99) < 18 && !opts.flare && !opts.cut) pitch = Math.max(pitch, 0.45);
  if (craft.pos.y < (opts.minY ?? 12) && !opts.flare && !opts.cut) pitch = Math.max(pitch, 0.5);
  // don't balloon on short final
  if ((opts.flare || opts.cut) && (craft.agl ?? 99) > 14) pitch = Math.min(pitch, 0.15);
  if ((opts.flare || opts.cut) && (craft.agl ?? 99) < 8) pitch = Math.max(Math.min(pitch, 0.28), 0.12);
  input.pitch = pitch;
  if (craft.def.engine) {
    let thr = opts.throttle ?? 0.66;
    if (craft.airspeed < wantSpeed - 4) thr = 0.9;
    else if (craft.airspeed > wantSpeed + 4) thr = 0.4;
    if (opts.cutThrottle || opts.cut) thr = 0.08;
    input.throttleSet = thr;
  }
  input.throttle = 0;
  return dist;
}
