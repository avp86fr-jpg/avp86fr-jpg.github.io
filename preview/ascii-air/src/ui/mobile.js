import { safeInsets, isIOS, isStandalone, isMobileUA } from "../core/utils.js";

export function createMobileLayer(root, input, hooks) {
  const el = document.createElement("div");
  el.id = "mobile-layer";
  el.innerHTML = `
    <div class="stick-base" id="stick" aria-label="Stick">
      <div class="stick-knob" id="stick-knob"></div>
    </div>
    <div class="throttle-track" id="thr" aria-label="Throttle">
      <div class="throttle-fill" id="thr-fill"></div>
      <div class="throttle-knob" id="thr-knob"></div>
    </div>
    <button class="ascii-btn" id="btn-action">ACTION</button>
    <button class="ascii-btn" id="btn-cam">CAM</button>
    <button class="ascii-btn" id="btn-pause">II</button>
    <button class="ascii-btn" id="btn-gear">GEAR</button>
    <button class="ascii-btn" id="btn-fs">FULL</button>
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
  const pointers = new Map();

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

  stick.addEventListener("pointerdown", (e) => {
    stick.setPointerCapture(e.pointerId);
    stickId = e.pointerId;
    stickAt(e.clientX, e.clientY);
    e.preventDefault();
  });
  stick.addEventListener("pointermove", (e) => { if (e.pointerId === stickId) stickAt(e.clientX, e.clientY); });
  stick.addEventListener("pointerup", (e) => { if (e.pointerId === stickId) stickEnd(); });
  stick.addEventListener("pointercancel", (e) => { if (e.pointerId === stickId) stickEnd(); });

  thr.addEventListener("pointerdown", (e) => {
    thr.setPointerCapture(e.pointerId);
    thrId = e.pointerId;
    thrAt(e.clientY);
    e.preventDefault();
  });
  thr.addEventListener("pointermove", (e) => { if (e.pointerId === thrId) thrAt(e.clientY); });
  thr.addEventListener("pointerup", (e) => { if (e.pointerId === thrId) thrId = null; });

  btnAction.addEventListener("pointerdown", (e) => { input.setTouchAction(true); btnAction.classList.add("lit"); e.preventDefault(); });
  const endAct = () => { input.setTouchAction(false); btnAction.classList.remove("lit"); };
  btnAction.addEventListener("pointerup", endAct);
  btnAction.addEventListener("pointercancel", endAct);
  btnCam.addEventListener("click", () => { input.state.touchCamera = true; hooks.onCamera?.(); });
  btnPause.addEventListener("click", () => hooks.onPause?.());
  btnGear.addEventListener("click", () => hooks.onGear?.());
  btnFs.addEventListener("click", () => hooks.onFullscreen?.());

  function layout(portrait, visible) {
    const ins = safeInsets();
    const show = visible && (isMobileUA() || window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1000 || window.innerHeight < 520);
    el.style.display = show ? "block" : "none";
    const padL = Math.max(16, ins.left + 10);
    const padR = Math.max(16, ins.right + 10);
    const padB = Math.max(16, ins.bottom + 12);
    const padT = Math.max(8, ins.top + 8);

    if (portrait) {
      stick.style.left = padL + "px";
      stick.style.bottom = padB + "px";
      stick.style.top = "auto";
      stick.style.width = "140px";
      stick.style.height = "140px";
      thr.style.right = padR + "px";
      thr.style.bottom = (padB + 10) + "px";
      thr.style.height = "170px";
      btnAction.style.cssText = `position:absolute;right:${padR + 56}px;bottom:${padB + 10}px;width:86px;height:86px;border-radius:50%;`;
      btnCam.style.cssText = `position:absolute;right:${padR}px;top:${padT + 96}px;`;
      btnPause.style.cssText = `position:absolute;right:${padR}px;top:${padT + 40}px;min-width:48px;`;
      btnGear.style.cssText = `position:absolute;left:${padL}px;top:${padT + 40}px;`;
      btnFs.style.cssText = `position:absolute;left:${padL + 64}px;top:${padT + 40}px;`;
    } else {
      stick.style.left = padL + "px";
      stick.style.bottom = padB + "px";
      stick.style.width = "128px";
      stick.style.height = "128px";
      thr.style.right = padR + "px";
      thr.style.bottom = (padB + 90) + "px";
      thr.style.height = "160px";
      btnAction.style.cssText = `position:absolute;right:${padR}px;bottom:${padB}px;width:78px;height:78px;border-radius:50%;`;
      btnCam.style.cssText = `position:absolute;right:${padR + 88}px;bottom:${padB}px;`;
      btnPause.style.cssText = `position:absolute;right:${padR}px;top:${padT}px;min-width:48px;`;
      btnGear.style.cssText = `position:absolute;left:${padL}px;top:${padT + 4}px;`;
      btnFs.style.cssText = `position:absolute;left:${padL + 64}px;top:${padT + 4}px;`;
    }
  }

  function setThrottle(t) { if (thrId == null) setThrVisual(t); }

  return { el, layout, setThrottle, buttons: { btnAction, btnCam, btnPause, btnGear, btnFs } };
}

export function iosFullscreenHint() {
  return isIOS() && !isStandalone();
}
