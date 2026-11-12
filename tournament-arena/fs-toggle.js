/* Unobtrusive fullscreen toggle for GitHub Pages builds.
   data-corner: tl|tr|bl|br (default tr)
   data-no-f="1" skips the F keyboard shortcut
   data-orientation="portrait" keeps portrait games upright (default landscape)
   Visit with ?fs=1 to enter fullscreen on the first tap/click. */
(function () {
  if (window.__mwFsToggle) return;
  window.__mwFsToggle = true;

  var script = document.currentScript;
  var corner = ((script && script.getAttribute("data-corner")) || "tr").toLowerCase();
  var noF = script && script.getAttribute("data-no-f") === "1";
  var orientation = (script && script.getAttribute("data-orientation")) || "landscape";
  var nudgeY = parseInt((script && script.getAttribute("data-nudge-y")) || "0", 10) || 0;
  var wantAuto = false;
  try {
    wantAuto = /(?:^|[?&])fs=1(?:&|$)/.test(location.search);
  } catch (e) {}

  var css = [
    "#mw-fs-btn{position:fixed;z-index:2147483000;display:inline-flex;align-items:center;gap:.4em;",
    "margin:0;min-width:44px;min-height:44px;justify-content:center;padding:.42em .62em .42em .5em;border:1px solid rgba(255,255,255,.28);",
    "border-radius:999px;background:rgba(8,6,14,.72);color:#f4f0e6;",
    "font:600 11px/1.1 ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif;",
    "letter-spacing:.08em;text-transform:uppercase;cursor:pointer;",
    "-webkit-user-select:none;user-select:none;backdrop-filter:blur(8px);",
    "-webkit-backdrop-filter:blur(8px);box-shadow:0 4px 18px rgba(0,0,0,.35);",
    "pointer-events:auto;touch-action:manipulation;opacity:.88}",
    "#mw-fs-btn:hover,#mw-fs-btn:focus-visible{opacity:1;background:rgba(16,12,24,.88);outline:none;",
    "border-color:rgba(255,220,140,.7)}",
    "#mw-fs-btn:focus-visible{box-shadow:0 0 0 2px #111,0 0 0 4px #ffd56a}",
    "#mw-fs-btn svg{width:14px;height:14px;flex:0 0 auto;display:block}",
    "#mw-fs-btn[data-corner=tr]{top:calc(10px + env(safe-area-inset-top,0px));right:calc(10px + env(safe-area-inset-right,0px))}",
    "#mw-fs-btn[data-corner=tl]{top:calc(10px + env(safe-area-inset-top,0px));left:calc(10px + env(safe-area-inset-left,0px))}",
    "#mw-fs-btn[data-corner=br]{bottom:calc(10px + env(safe-area-inset-bottom,0px));right:calc(10px + env(safe-area-inset-right,0px))}",
    "#mw-fs-btn[data-corner=bl]{bottom:calc(10px + env(safe-area-inset-bottom,0px));left:calc(10px + env(safe-area-inset-left,0px))}",
    "@media (max-width:700px){#mw-fs-btn span{display:none}#mw-fs-btn{padding:.5em}}",
    "html.mw-fs-fallback,html.mw-fs-fallback body{position:fixed!important;inset:0!important;",
    "width:100%!important;height:100%!important;height:100dvh!important;max-height:100dvh!important;",
    "overflow:hidden!important;margin:0!important}",
    "html.mw-fs-fallback #mw-fs-btn{opacity:1}"
  ].join("");

  var style = document.createElement("style");
  style.setAttribute("data-mw-fs", "1");
  style.appendChild(document.createTextNode(css));
  (document.head || document.documentElement).appendChild(style);

  var btn = document.createElement("button");
  btn.id = "mw-fs-btn";
  btn.type = "button";
  btn.setAttribute("data-corner", corner);
  if (nudgeY && (corner === "tr" || corner === "tl")) {
    btn.style.top = "calc(10px + env(safe-area-inset-top, 0px) + " + nudgeY + "px)";
  }
  btn.setAttribute("aria-pressed", "false");
  btn.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"></path></svg>' +
    "<span>Full screen</span>";

  function nativeEl() {
    return document.fullscreenElement || document.webkitFullscreenElement || null;
  }

  function isOn() {
    return !!nativeEl() || document.documentElement.classList.contains("mw-fs-fallback");
  }

  function lockOrientation() {
    try {
      var o = screen.orientation || screen.mozOrientation;
      if (o && o.lock) o.lock(orientation).catch(function () {});
    } catch (e) {}
  }

  function unlockOrientation() {
    try {
      var o = screen.orientation;
      if (o && o.unlock) o.unlock();
    } catch (e) {}
  }

  function enterNative() {
    var el = document.documentElement;
    var fn = el.requestFullscreen || el.webkitRequestFullscreen || el.webkitRequestFullScreen;
    if (!fn) return Promise.reject(new Error("unsupported"));
    try {
      var res = fn.call(el, { navigationUI: "hide" });
      return res && res.then ? res : Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }

  function exitNative() {
    var fn = document.exitFullscreen || document.webkitExitFullscreen || document.webkitCancelFullScreen;
    if (!fn) return Promise.resolve();
    try {
      var res = fn.call(document);
      return res && res.then ? res : Promise.resolve();
    } catch (e) {
      return Promise.resolve();
    }
  }

  function enterFallback() {
    document.documentElement.classList.add("mw-fs-fallback");
    try { window.scrollTo(0, 0); } catch (e) {}
    try { if (document.body) document.body.scrollTop = 0; } catch (e) {}
  }

  function exitFallback() {
    document.documentElement.classList.remove("mw-fs-fallback");
  }

  function sync() {
    var on = isOn();
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    btn.setAttribute("aria-label", on ? "Exit full screen" : "Enter full screen");
    btn.title = on ? "Exit full screen" : "Enter full screen" + (noF ? "" : " (F)");
    var label = btn.querySelector("span");
    if (label) label.textContent = on ? "Exit" : "Full screen";
    btn.querySelector("svg").innerHTML = on
      ? '<path d="M9 3v5H4M15 3v5h5M9 21v-5H4M15 21v-5h5"></path>'
      : '<path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"></path>';
  }

  function enter() {
    return enterNative()
      .then(function () { lockOrientation(); })
      .catch(function () {
        enterFallback();
        lockOrientation();
      })
      .then(sync);
  }

  function exit() {
    if (document.documentElement.classList.contains("mw-fs-fallback")) {
      exitFallback();
      unlockOrientation();
      sync();
      return Promise.resolve();
    }
    return exitNative().then(function () { unlockOrientation(); sync(); });
  }

  function toggle(ev) {
    disarmAuto();
    if (ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    return isOn() ? exit() : enter();
  }

  function mount() {
    (document.body || document.documentElement).appendChild(btn);
    btn.addEventListener("click", toggle, true);
    btn.addEventListener("pointerdown", function (e) { e.stopPropagation(); }, true);
    sync();
  }

  function fullscreenChanged() {
    if (!nativeEl()) unlockOrientation();
    sync();
  }
  document.addEventListener("fullscreenchange", fullscreenChanged);
  document.addEventListener("webkitfullscreenchange", fullscreenChanged);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.documentElement.classList.contains("mw-fs-fallback")) exit();
  });

  if (!noF) {
    document.addEventListener("keydown", function (e) {
      if (e.repeat || e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.code !== "KeyF" && String(e.key).toLowerCase() !== "f") return;
      var tag = (e.target && e.target.tagName) || "";
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag) || (e.target && e.target.isContentEditable)) return;
      e.preventDefault();
      toggle(e);
    });
  }

  var armed = wantAuto;
  function disarmAuto() {
    armed = false;
    document.removeEventListener("pointerdown", once, true);
    document.removeEventListener("click", once, true);
    document.removeEventListener("keydown", once, true);
  }
  function once(e) {
      if (!armed || e.defaultPrevented) return;
      if (e && e.target && (e.target === btn || (btn.contains && btn.contains(e.target)))) return;
      if (e.target && e.target.closest && e.target.closest('a,input,textarea,select,[contenteditable="true"]')) return;
      if (e.type === "keydown" && (e.repeat || e.altKey || e.ctrlKey || e.metaKey || /^(Tab|Shift|Control|Alt|Meta|Escape)$/.test(e.key))) return;
      // Let the explicit shortcut consume its gesture just once.
      if (e.type === "keydown" && !noF && (e.code === "KeyF" || String(e.key).toLowerCase() === "f")) return;
      disarmAuto();
      enter();
  }
  if (wantAuto) {
    document.addEventListener("pointerdown", once, true);
    document.addEventListener("click", once, true);
    document.addEventListener("keydown", once, true);
  }

  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);
})();
