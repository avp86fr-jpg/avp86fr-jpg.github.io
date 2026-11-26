import { safeInsets, isIOS, isStandalone, isMobileUA } from "../core/utils.js";

function isTouchUI() {
  return isMobileUA()
    || (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0)
    || (typeof window !== "undefined" && ("ontouchstart" in window))
    || (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(pointer: coarse)").matches)
    || (typeof window !== "undefined" && (window.innerWidth < 1100 || window.innerHeight < 700));
}

export function createMobileLayer(root, input, hooks) {
  const el = document.createElement("div");
  el.id = "mobile-layer";
  el.innerHTML = `
    <div id="rotate-prompt" class="rotate-prompt" hidden>Tournez l'appareil en paysage</div>
    <div class="stick-base" id="stick" aria-label="Manche">
      <div class="stick-knob" id="stick-knob"></div>
      <div class="ctrl-label">MANCHE</div>
    </div>
    <button type="button" class="album-btn boost-btn" id="btn-action">BOOST</button>
    <button type="button" class="album-btn brake-btn" id="btn-brake">BRAKE</button>
    <button type="button" class="album-btn pause-btn" id="btn-pause">II</button>
  `;
  root.appendChild(el);

  const stick = el.querySelector("#stick");
  const knob = el.querySelector("#stick-knob");
  const btnAction = el.querySelector("#btn-action");
  const btnBrake = el.querySelector("#btn-brake");
  const btnPause = el.querySelector("#btn-pause");
  const rotate = el.querySelector("#rotate-prompt");

  let stickId = null;
  const opts = { passive: false };

  function stickAt(cx, cy) {
    const r = stick.getBoundingClientRect();
    const x = (cx - (r.left + r.width / 2)) / (r.width * 0.42);
    const y = (cy - (r.top + r.height / 2)) / (r.height * 0.42);
    const l = Math.hypot(x, y) || 1;
    const nx = x / Math.max(1, l);
    const ny = y / Math.max(1, l);
    knob.style.transform = `translate(calc(-50% + ${nx * 36}px), calc(-50% + ${ny * 36}px))`;
    input.setStick(nx, ny, true);
  }
  function stickEnd() {
    knob.style.transform = "translate(-50%, -50%)";
    input.setStick(0, 0, false);
    stickId = null;
  }

  function bindPtr(node, onDown, onMove, onUp) {
    node.addEventListener("pointerdown", onDown, opts);
    node.addEventListener("pointermove", onMove, opts);
    node.addEventListener("pointerup", onUp, opts);
    node.addEventListener("pointercancel", onUp, opts);
    node.addEventListener("touchstart", (e) => e.preventDefault(), opts);
    node.addEventListener("touchmove", (e) => e.preventDefault(), opts);
  }

  bindPtr(stick, (e) => {
    try { stick.setPointerCapture(e.pointerId); } catch {}
    stickId = e.pointerId;
    stickAt(e.clientX, e.clientY);
    e.preventDefault();
    e.stopPropagation();
  }, (e) => {
    if (e.pointerId === stickId) { stickAt(e.clientX, e.clientY); e.preventDefault(); }
  }, (e) => {
    if (e.pointerId === stickId) stickEnd();
  });

  const downBoost = (e) => {
    input.setTouchAction(true);
    input.setTouchBoost?.(true);
    btnAction.classList.add("lit");
    e.preventDefault();
  };
  const endBoost = (e) => {
    input.setTouchAction(false);
    input.setTouchBoost?.(false);
    btnAction.classList.remove("lit");
    if (e) e.preventDefault();
  };
  btnAction.addEventListener("pointerdown", downBoost, opts);
  btnAction.addEventListener("pointerup", endBoost, opts);
  btnAction.addEventListener("pointercancel", endBoost, opts);
  btnAction.addEventListener("touchstart", downBoost, opts);
  btnAction.addEventListener("touchend", endBoost, opts);

  const downBrake = (e) => {
    input.setTouchBrake?.(true);
    btnBrake.classList.add("lit");
    e.preventDefault();
  };
  const endBrake = (e) => {
    input.setTouchBrake?.(false);
    btnBrake.classList.remove("lit");
    if (e) e.preventDefault();
  };
  btnBrake.addEventListener("pointerdown", downBrake, opts);
  btnBrake.addEventListener("pointerup", endBrake, opts);
  btnBrake.addEventListener("pointercancel", endBrake, opts);
  btnBrake.addEventListener("touchstart", downBrake, opts);
  btnBrake.addEventListener("touchend", endBrake, opts);

  btnPause.addEventListener("pointerdown", (e) => { hooks.onPause?.(); e.preventDefault(); }, opts);

  let askedFs = false;
  el.addEventListener("pointerdown", () => {
    if (askedFs) return;
    if (document.fullscreenElement || document.webkitFullscreenElement) return;
    askedFs = true;
    hooks.onFullscreen?.();
  }, { capture: true, passive: true });

  function layout(portrait, visible) {
    const ins = safeInsets();
    const show = !!(visible && isTouchUI());
    el.style.display = show ? "block" : "none";
    el.style.pointerEvents = show ? "auto" : "none";
    document.body.classList.toggle("touch-ui", show);
    document.body.classList.toggle("touch-portrait", show && !!portrait);
    if (!show) return;

    const padL = Math.max(12, ins.left + 8);
    const padR = Math.max(12, ins.right + 8);
    const padB = Math.max(8, ins.bottom + 8);
    const padT = Math.max(6, ins.top + 6);
    const h = window.innerHeight || 390;
    const w = window.innerWidth || 844;

    rotate.hidden = !portrait;
    rotate.style.cssText = portrait
      ? `position:absolute;left:50%;top:${padT}px;transform:translateX(-50%);z-index:8;`
      : "";

    if (portrait) {
      const stickN = Math.min(132, Math.max(108, Math.floor(w * 0.28)));
      stick.style.cssText = `position:absolute;left:${padL}px;bottom:${padB}px;width:${stickN}px;height:${stickN}px;`;
      btnAction.style.cssText = `position:absolute;right:${padR}px;bottom:${padB}px;width:88px;height:88px;border-radius:50%;`;
      btnBrake.style.cssText = `position:absolute;right:${padR}px;bottom:${padB + 100}px;min-width:72px;height:48px;`;
      btnPause.style.cssText = `position:absolute;right:${padR}px;top:${padT + 36}px;min-width:44px;min-height:44px;`;
    } else {
      const stickN = Math.min(120, Math.max(96, Math.floor(Math.min(h * 0.38, w * 0.16))));
      const boostN = Math.min(80, Math.max(64, Math.floor(h * 0.22)));
      stick.style.cssText = `position:absolute;left:${padL}px;bottom:${padB}px;width:${stickN}px;height:${stickN}px;`;
      btnAction.style.cssText = `position:absolute;right:${padR}px;bottom:${padB}px;width:${boostN}px;height:${boostN}px;border-radius:50%;`;
      btnBrake.style.cssText = `position:absolute;right:${padR + boostN + 8}px;bottom:${padB}px;min-width:64px;height:48px;`;
      btnPause.style.cssText = `position:absolute;right:${padR}px;top:${padT}px;min-width:44px;min-height:44px;z-index:7;`;
    }
  }

  function setThrottle() { /* arcade: no slider */ }

  return {
    el, layout, setThrottle, isTouchUI,
    buttons: { btnAction, btnBrake, btnPause },
  };
}

export function iosFullscreenHint() {
  return isIOS() && !isStandalone();
}
