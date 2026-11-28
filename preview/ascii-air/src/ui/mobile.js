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
    <div id="rotate-prompt" class="rotate-prompt" hidden>Rotate your device to landscape</div>
    <div class="stick-base" id="stick" aria-label="Stick">
      <div class="stick-knob" id="stick-knob"></div>
      <div class="ctrl-label">STICK</div>
    </div>
    <div id="thr" class="thr-lever" aria-label="Throttle">
      <div class="thr-track"><div class="thr-knob" id="thr-knob"></div></div>
      <div class="ctrl-label">THROTTLE</div>
    </div>
    <button type="button" class="album-btn boost-btn" id="btn-action">BOOST</button>
    <button type="button" class="album-btn fire-btn hidden" id="btn-fire">FIRE</button>
    <button type="button" class="album-btn pause-btn" id="btn-pause">II</button>
  `;
  root.appendChild(el);

  const stick = el.querySelector("#stick");
  const knob = el.querySelector("#stick-knob");
  const thr = el.querySelector("#thr");
  const thrKnob = el.querySelector("#thr-knob");
  const btnAction = el.querySelector("#btn-action");
  const btnPause = el.querySelector("#btn-pause");
  const btnFire = el.querySelector("#btn-fire");
  const rotate = el.querySelector("#rotate-prompt");

  let stickId = null;
  let thrId = null;
  let orbitId = null;
  let lastTap = 0;
  const opts = { passive: false };

  function isControl(t) {
    return !!(t && t.closest && t.closest("#stick, #thr, #btn-action, #btn-fire, #btn-pause, #rotate-prompt, button, .album-cta, .album-btn"));
  }

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

  function thrAt(cy) {
    const r = thr.getBoundingClientRect();
    const v = 1 - ((cy - r.top) / Math.max(8, r.height));
    const t = Math.max(0, Math.min(1, v));
    input.setThrottleSlider(t);
    paintThr(t);
  }
  function paintThr(t) {
    const y = (1 - t) * 100;
    thrKnob.style.top = `calc(${y}% - 14px)`;
    thr.dataset.v = t.toFixed(2);
  }
  paintThr(0);

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

  bindPtr(thr, (e) => {
    try { thr.setPointerCapture(e.pointerId); } catch {}
    thrId = e.pointerId;
    thrAt(e.clientY);
    e.preventDefault();
    e.stopPropagation();
  }, (e) => {
    if (e.pointerId === thrId) { thrAt(e.clientY); e.preventDefault(); }
  }, (e) => {
    if (e.pointerId === thrId) thrId = null;
  });

  const downBoost = (e) => {
    input.setTouchAction(true);
    input.setTouchBoost?.(true);
    btnAction.classList.add("lit");
    e.preventDefault();
    e.stopPropagation();
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

  function downFire(e) {
    e.preventDefault();
    e.stopPropagation();
    input.setTouchFire?.(true);
    btnFire.classList.add("lit");
  }
  function endFire(e) {
    e.preventDefault();
    e.stopPropagation();
    input.setTouchFire?.(false);
    btnFire.classList.remove("lit");
  }
  btnFire.addEventListener("pointerdown", downFire, opts);
  btnFire.addEventListener("pointerup", endFire, opts);
  btnFire.addEventListener("pointercancel", endFire, opts);
  btnFire.addEventListener("touchstart", downFire, opts);
  btnFire.addEventListener("touchend", endFire, opts);


  btnPause.addEventListener("pointerdown", (e) => { hooks.onPause?.(); e.preventDefault(); e.stopPropagation(); }, opts);

  // Orbit: one finger on empty centre / right, outside the flight controls.
  let lastX = 0, lastY = 0;
  el.addEventListener("pointerdown", (e) => {
    if (isControl(e.target)) return;
    const now = performance.now();
    if (now - lastTap < 280) {
      hooks.onOrbitReset?.();
      lastTap = 0;
      e.preventDefault();
      return;
    }
    lastTap = now;
    orbitId = e.pointerId;
    lastX = e.clientX;
    lastY = e.clientY;
    try { el.setPointerCapture(e.pointerId); } catch {}
    e.preventDefault();
  }, opts);
  el.addEventListener("pointermove", (e) => {
    if (e.pointerId !== orbitId) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    hooks.onOrbitDrag?.(dx, dy);
    e.preventDefault();
  }, opts);
  const endOrbit = (e) => {
    if (e.pointerId !== orbitId) return;
    orbitId = null;
    hooks.onOrbitRelease?.();
  };
  el.addEventListener("pointerup", endOrbit, opts);
  el.addEventListener("pointercancel", endOrbit, opts);

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
      const thrH = Math.min(180, Math.max(120, Math.floor(h * 0.22)));
      thr.style.cssText = `position:absolute;right:${padR}px;bottom:${padB + 64}px;width:40px;height:${thrH}px;`;
      btnAction.style.cssText = `position:absolute;right:${padR}px;bottom:${padB}px;width:56px;height:56px;border-radius:50%;font-size:11px;`;
      btnFire.style.cssText = `position:absolute;right:${padR + 64}px;bottom:${padB}px;width:56px;height:56px;border-radius:50%;font-size:11px;`;
      btnPause.style.cssText = `position:absolute;right:${padR}px;top:${padT + 36}px;min-width:44px;min-height:44px;`;
    } else {
      const stickN = Math.min(120, Math.max(96, Math.floor(Math.min(h * 0.38, w * 0.16))));
      const thrH = Math.min(160, Math.max(110, Math.floor(h * 0.42)));
      stick.style.cssText = `position:absolute;left:${padL}px;bottom:${padB}px;width:${stickN}px;height:${stickN}px;`;
      thr.style.cssText = `position:absolute;right:${padR}px;bottom:${padB}px;width:36px;height:${thrH}px;`;
      btnAction.style.cssText = `position:absolute;right:${padR}px;bottom:${padB + thrH + 26}px;width:52px;height:52px;border-radius:50%;font-size:11px;z-index:6;`;
      btnFire.style.cssText = `position:absolute;right:${padR + 60}px;bottom:${padB + thrH + 26}px;width:52px;height:52px;border-radius:50%;font-size:11px;z-index:6;`;
      btnPause.style.cssText = `position:absolute;right:${padR}px;top:${padT}px;min-width:44px;min-height:44px;z-index:7;`;
    }
  }

  function setThrottle(v) {
    if (v == null) return;
    input.setThrottleSlider(v);
    paintThr(v);
  }

  function setFireVisible(on) {
    btnFire.classList.toggle("hidden", !on);
  }

  return {
    el, layout, setThrottle, setFireVisible, isTouchUI, paintThr,
    buttons: { btnAction, btnFire, btnPause, thr },
  };
}

export function iosFullscreenHint() {
  return isIOS() && !isStandalone();
}
