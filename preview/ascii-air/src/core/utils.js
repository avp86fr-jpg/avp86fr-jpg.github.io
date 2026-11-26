export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const invlerp = (a, b, v) => (v - a) / (b - a + 1e-12);
export const remap = (v, a, b, c, d) => lerp(c, d, clamp(invlerp(a, b, v), 0, 1));
export const saturate = (v) => clamp(v, 0, 1);
export const sign = (v) => (v < 0 ? -1 : v > 0 ? 1 : 0);
export const deg = (r) => r * (180 / Math.PI);
export const rad = (d) => d * (Math.PI / 180);
export const TAU = Math.PI * 2;

export function smootherstep(e0, e1, x) {
  const t = saturate((x - e0) / (e1 - e0));
  return t * t * t * (t * (t * 6 - 15) + 10);
}

export function smoothstep(e0, e1, x) {
  const t = saturate((x - e0) / (e1 - e0));
  return t * t * (3 - 2 * t);
}

export function damp(current, target, lambda, dt) {
  return lerp(current, target, 1 - Math.exp(-lambda * dt));
}

export function dampAngle(current, target, lambda, dt) {
  let d = wrapAngle(target - current);
  return current + d * (1 - Math.exp(-lambda * dt));
}

export function wrapAngle(a) {
  while (a > Math.PI) a -= TAU;
  while (a < -Math.PI) a += TAU;
  return a;
}

export function headingFromXZ(x, z) {
  return Math.atan2(z, x); // 0 = +X (east), PI/2 = +Z (north)
}

export function shortestAngle(from, to) {
  return wrapAngle(to - from);
}

export function isMobileUA() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  const coarse = typeof matchMedia === "function" && matchMedia("(pointer: coarse)").matches;
  return coarse || /Mobi|Android|iPhone|iPad|iPod|Mobile/i.test(ua);
}

export function isIOS() {
  if (typeof navigator === "undefined") return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

export function isStandalone() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(display-mode: standalone)").matches ||
    window.matchMedia("(display-mode: fullscreen)").matches ||
    window.navigator.standalone === true;
}

export function safeInsets() {
  const s = getComputedStyle(document.documentElement);
  const num = (v) => {
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : 0;
  };
  // Prefer visualViewport + CSS env via a probe element
  let top = 0, right = 0, bottom = 0, left = 0;
  if (!document.getElementById("__safe-probe")) {
    const p = document.createElement("div");
    p.id = "__safe-probe";
    p.style.cssText = "position:fixed;top:env(safe-area-inset-top);right:env(safe-area-inset-right);bottom:env(safe-area-inset-bottom);left:env(safe-area-inset-left);visibility:hidden;pointer-events:none;";
    document.body.appendChild(p);
  }
  const p = document.getElementById("__safe-probe");
  if (p) {
    const r = p.getBoundingClientRect();
    top = r.top;
    left = r.left;
    right = window.innerWidth - r.right;
    bottom = window.innerHeight - r.bottom;
  }
  return {
    top: Math.max(0, top),
    right: Math.max(0, right),
    bottom: Math.max(0, bottom),
    left: Math.max(0, left),
  };
}

export function formatTime(sec) {
  sec = Math.max(0, sec);
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  const cs = Math.floor((sec * 100) % 100);
  return `${m}:${String(s).padStart(2, "0")}.${String(cs).padStart(2, "0")}`;
}

export function pad(n, w = 3) {
  const s = String(Math.round(Math.abs(n)));
  return (n < 0 ? "-" : "") + s.padStart(w, "0");
}

export function hourToClock(h) {
  const hh = ((h % 24) + 24) % 24;
  const H = Math.floor(hh);
  const M = Math.floor((hh - H) * 60);
  return `${String(H).padStart(2, "0")}:${String(M).padStart(2, "0")}`;
}

export function supportsWebGPU() {
  return typeof navigator !== "undefined" && !!navigator.gpu;
}

export function nowMs() {
  return (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();
}

export function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
