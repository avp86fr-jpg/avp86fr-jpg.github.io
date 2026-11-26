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
    <div class="stick-base" id="stick" aria-label="Manche">
      <div class="stick-knob" id="stick-knob"></div>
      <div class="ctrl-label">MANCHE</div>
    </div>
    <div class="throttle-track" id="thr" aria-label="Gaz">
      <div class="throttle-fill" id="thr-fill"></div>
      <div class="throttle-knob" id="thr-knob"></div>
      <div class="ctrl-label">GAZ</div>
    </div>
    <button type="button" class="album-btn" id="btn-action">GO</button>
    <button type="button" class="album-btn" id="btn-cam">CAM</button>
    <button type="button" class="album-btn" id="btn-pause">II</button>
    <button type="button" class="album-btn" id="btn-gear">TRAIN</button>
    <button type="button" class="album-btn" id="btn-fs">PLEIN ÉCRAN</button>
  `;
  root.appendChild(el);

  const stick = el.querySelector("#stick");
  const knob = el.querySelector("#stick-knob");
  const thr = el.querySelector("#thr");
  const thrFill = el.querySelector("#thr-fill");
  const thrKnob = el.querySelector("#thr-knob");
  const btnAction = el.querySelector("#btn-action");
  const btnCam = el.querySelector("#btn-cam");
  const btnPause = el.querySelector("#btn-pause");
  const btnGear = el.querySelector("#btn-gear");
  const btnFs = el.querySelector("#btn-fs");

  let stickId = null, thrId = null;

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
  function thrAt(cy) {
    const r = thr.getBoundingClientRect();
    const v = 1 - (cy - r.top) / r.height;
    const t = Math.max(0, Math.min(1, v));
    setThrVisual(t);
    input.setThrottleSlider(t);
  }
  function setThrVisual(t) {
    thrFill.style.height = `${t * 100}%`;
    thrKnob.style.bottom = `${t * 100}%`;
  }
  setThrVisual(0);

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

  const downAct = (e) => { input.setTouchAction(true); btnAction.classList.add("lit"); e.preventDefault(); };
  const endAct = (e) => { input.setTouchAction(false); btnAction.classList.remove("lit"); if (e) e.preventDefault(); };
  btnAction.addEventListener("pointerdown", downAct, opts);
  btnAction.addEventListener("pointerup", endAct, opts);
  btnAction.addEventListener("pointercancel", endAct, opts);
  btnAction.addEventListener("touchstart", downAct, opts);
  btnAction.addEventListener("touchend", endAct, opts);
  btnCam.addEventListener("pointerdown", (e) => { input.state.touchCamera = true; hooks.onCamera?.(); e.preventDefault(); }, opts);
  btnPause.addEventListener("pointerdown", (e) => { hooks.onPause?.(); e.preventDefault(); }, opts);
  btnGear.addEventListener("pointerdown", (e) => { hooks.onGear?.(); e.preventDefault(); }, opts);
  btnFs.addEventListener("pointerdown", (e) => { hooks.onFullscreen?.(); e.preventDefault(); }, opts);

  function layout(portrait, visible) {
    const ins = safeInsets();
    const show = !!(visible && isTouchUI());
    el.style.display = show ? "block" : "none";
    el.style.pointerEvents = show ? "auto" : "none";
    const padL = Math.max(16, ins.left + 10);
    const padR = Math.max(16, ins.right + 10);
    const padB = Math.max(16, ins.bottom + 12);
    const padT = Math.max(8, ins.top + 8);

    if (portrait) {
      stick.style.cssText = `position:absolute;left:${padL}px;bottom:${padB}px;width:132px;height:132px;`;
      thr.style.cssText = `position:absolute;right:${padR}px;bottom:${padB + 96}px;width:56px;height:180px;`;
      thr.classList.remove("slim");
      btnAction.style.cssText = `position:absolute;right:${padR}px;bottom:${padB}px;width:84px;height:84px;border-radius:50%;`;
      btnCam.style.cssText = `position:absolute;right:${padR + 96}px;bottom:${padB}px;min-width:56px;min-height:56px;`;
      btnPause.style.cssText = `position:absolute;right:${padR}px;top:${padT}px;min-width:48px;min-height:48px;`;
      btnGear.style.cssText = `position:absolute;left:${padL}px;top:${padT}px;min-width:56px;min-height:48px;`;
      btnFs.style.cssText = `position:absolute;left:${padL + 72}px;top:${padT}px;min-width:56px;min-height:48px;font-size:12px;`;
    } else {
      stick.style.cssText = `position:absolute;left:${padL}px;bottom:${padB}px;width:118px;height:118px;`;
      // Wide, easy-to-grab power lever on the far right — never a 20px sliver
      thr.style.cssText = `position:absolute;right:${padR}px;bottom:${padB + 84}px;width:56px;height:160px;`;
      thr.classList.remove("slim");
      btnAction.style.cssText = `position:absolute;right:${padR}px;bottom:${padB}px;width:72px;height:72px;border-radius:50%;`;
      btnCam.style.cssText = `position:absolute;right:${padR + 84}px;bottom:${padB}px;min-width:52px;min-height:52px;`;
      btnPause.style.cssText = `position:absolute;right:${padR}px;top:${padT}px;min-width:48px;min-height:48px;`;
      btnGear.style.cssText = `position:absolute;left:${padL}px;top:${padT}px;min-width:56px;min-height:48px;`;
      btnFs.style.cssText = `position:absolute;left:${padL + 68}px;top:${padT}px;min-width:56px;min-height:48px;font-size:12px;`;
    }
  }

  function setThrottle(t) { if (thrId == null) setThrVisual(t); }

  return { el, layout, setThrottle, buttons: { btnAction, btnCam, btnPause, btnGear, btnFs }, isTouchUI };
}

export function iosFullscreenHint() {
  return isIOS() && !isStandalone();
}
