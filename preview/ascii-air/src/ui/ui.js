import { TITLE, PLANES, STAR_UNLOCKS } from "../core/config.js";
import { hourToClock, formatTime, pad, isIOS, isStandalone, isMobileUA, safeInsets } from "../core/utils.js";
import { ACTIVITIES, CLASSES, missionsBy, MISSIONS, MISSION_COUNT } from "../missions/data.js";
import { totalStars } from "../save/save.js";
import { createMobileLayer, iosFullscreenHint } from "./mobile.js";


function pilotSvg() {
  // Original airmail pilot (Tess): short dark curls, tan cap, teal scarf. Not any licensed character.
  return `<svg class="pilot-mark" viewBox="0 0 80 96" width="92" height="110" aria-hidden="true">
    <g fill="none" stroke="#1a140e" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round">
      <ellipse cx="40" cy="78" rx="22" ry="16" fill="#e0a04a"/>
      <ellipse cx="40" cy="40" rx="18" ry="20" fill="#f0c8a0"/>
      <path d="M24 36c2-16 30-16 32 0" fill="#2a1a14"/>
      <ellipse cx="40" cy="24" rx="20" ry="10" fill="#7a4a28"/>
      <path d="M18 30h44" />
      <circle cx="32" cy="42" r="4.5" fill="#3a3a3a"/>
      <circle cx="48" cy="42" r="4.5" fill="#3a3a3a"/>
      <path d="M36.5 42h7"/>
      <path d="M33 54c4 4 10 4 14 0" />
      <path d="M22 70c6-10 30-10 36 0" fill="#2aa8a0"/>
    </g>
  </svg>`;
}

export function paintWordmark() {
  const el = document.createElement("div");
  el.className = "title-plaque";
  el.innerHTML = `
    ${pilotSvg()}
    <div class="title-copy">
      <h1 class="title-wordmark">${TITLE}</h1>
      <p class="title-tag">Airmail planes over a sunlit island</p>
    </div>
    <div class="speech-balloon title-balloon">Ready for takeoff!</div>
  `;
  return el;
}

export function createUI(root, hooks) {
  root.innerHTML = "";
  const wrap = document.createElement("div");
  wrap.style.cssText = "position:absolute;inset:0;pointer-events:none;";
  root.appendChild(wrap);

  const loading = document.createElement("div");
  loading.id = "loading";
  loading.innerHTML = `<div class="logo-slot"></div>
    <div class="hint">AEROPOSTALE AIR</div>
    <div class="bar"><span id="load-bar"></span></div>
    <div id="load-msg" class="hint" style="margin-top:10px">warming up the engine…</div>`;
  wrap.appendChild(loading);

  const title = document.createElement("div");
  title.id = "title-screen";
  title.className = "hidden";
  title.style.cssText = "position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;pointer-events:none;";
  title.innerHTML = `
    <div class="title-cover">
      <div class="logo-slot" id="logo"></div>
      <nav class="title-nav" id="title-menu"></nav>
      <div id="ios-hint" class="hint hidden"></div>
    </div>
  `;
  wrap.appendChild(title);
  wrap.querySelectorAll(".logo-slot").forEach((s) => s.appendChild(paintWordmark()));


  const hud = document.createElement("div");
  hud.id = "hud";
  hud.className = "hidden";
  hud.style.cssText = "position:absolute;inset:0;pointer-events:none;";
  hud.innerHTML = `
    <div class="album-panel" id="hud-stats"></div>
    <div class="album-panel" id="hud-compass">
      <div class="compass-caret" aria-hidden="true"></div>
      <div class="compass-mark" aria-hidden="true"></div>
      <div class="compass-window"><canvas id="compass-tape" width="640" height="56"></canvas></div>
    </div>
    <div class="album-panel" id="hud-mission"></div>
    <div class="banner hud-line" id="hud-msg"></div>
    <div class="album-panel hidden" id="hud-minimap"></div>
    <div class="album-panel flight-bar" id="hud-flight">
      <div class="gauge-box" id="g-vit"></div>
      <div class="gauge-box" id="g-alt"></div>
      <canvas id="g-horizon" width="96" height="96" aria-label="Horizon"></canvas>
      <div class="gauge-box" id="g-vs"></div>
      <div class="gauge-box" id="g-flaps"></div>
      <div class="gauge-box" id="g-gear"></div>
    </div>
    <div class="album-panel hidden" id="hud-photo"></div>
    <div class="album-panel hidden" id="hud-aux"></div>
    <div class="speech-balloon hidden" id="hud-hint"></div>
    <button type="button" class="album-btn hidden" id="hud-fs">FULL SCREEN</button>
  `;
  wrap.appendChild(hud);

  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.className = "hidden";
  overlay.style.cssText = "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.35);pointer-events:auto;";
  overlay.innerHTML = `<div class="album-panel" id="overlay-panel" style="padding:16px 18px;max-width:92vw;max-height:86vh;overflow:auto;white-space:pre;"></div>`;
  wrap.appendChild(overlay);

  const mobile = createMobileLayer(wrap, hooks.input, {
    onCamera: () => hooks.onCamera?.(),
    onPause: () => hooks.onPause?.(),
    onGear: () => hooks.onGear?.(),
    onFullscreen: () => hooks.onFullscreen?.(),
    onOrbitDrag: (dx, dy) => hooks.onOrbitDrag?.(dx, dy),
    onOrbitRelease: () => hooks.onOrbitRelease?.(),
    onOrbitReset: () => hooks.onOrbitReset?.(),
  });

  const state = { screen: "loading", menuIndex: 0, menuItems: [], activity: "rings", klass: "beginner" };

  function setLoad(p, msg) {
    const bar = loading.querySelector("#load-bar");
    if (bar) bar.style.width = `${Math.round(p * 100)}%`;
    const m = loading.querySelector("#load-msg");
    if (m && msg) m.textContent = msg;
  }

  function hideAll() {
    loading.classList.add("hidden");
    title.classList.add("hidden");
    hud.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  function showTitle(save) {
    hideAll();
    closeOverlay();
    state.screen = "title";
    state.optionsBack = "title";
    title.classList.remove("hidden");
    const stars = totalStars(save);
    const canContinue = !!(save.lastMode || save.lastMission || stars);
    const items = [
      {
        label: canContinue ? "Continue" : "PLAY",
        primary: true,
        fn: () => {
          if (canContinue && save.lastMode === "mission" && save.lastMission) hooks.onStartMission?.(save.lastMission);
          else hooks.onFreeFlight?.();
        },
      },
      { label: "Missions", fn: () => showMissions(save) },
      { label: "Free Flight", fn: () => hooks.onFreeFlight?.() },
      { label: "Options", fn: () => showOptions(save, "title") },
      { label: "Credits", fn: () => showCredits(save) },
    ];
    renderMenu(title.querySelector("#title-menu"), items, save);
    const hint = title.querySelector("#ios-hint");
    if (iosFullscreenHint()) {
      hint.classList.remove("hidden");
      hint.textContent = "iPhone Safari can't go full screen here. Share → Add to Home Screen, then open AEROPOSTALE AIR as an app.";
    } else hint.classList.add("hidden");
    mobile.layout(isPortrait(), false);
  }

  let menuArmedAt = 0;
  function renderMenu(el, items, save, opts) {
    opts = opts || {};
    menuArmedAt = (typeof performance !== "undefined" ? performance.now() : Date.now()) + 180;
    state.menuItems = items;
    state.menuIndex = 0;
    if (!el) return;
    const stars = totalStars(save);
    el.classList.add("album-nav");
    el.innerHTML = items.map((it, i) =>
      `<button type="button" class="album-cta${it.primary ? " primary" : ""}${i === 0 ? " active" : ""}" data-i="${i}">${it.label}</button>`
    ).join("") + (opts.hideHint ? "" : `<div class="nav-hint">★ ${stars} · ${isMobileUA() || (typeof window !== "undefined" && window.innerWidth < 1100) ? "Tap a button" : "↑↓  Enter"}</div>`);
    el.querySelectorAll(".album-cta").forEach((n) => {
      n.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const i = +n.dataset.i;
        state.menuIndex = i;
        hooks.audio?.play("ui_ok");
        items[i].fn();
      });
      n.addEventListener("pointerenter", () => setMenuIndex(+n.dataset.i, el, items));
      n.addEventListener("focus", () => setMenuIndex(+n.dataset.i, el, items));
    });
  }

  function setMenuIndex(i, el, items) {
    if (!items || !items.length) return;
    state.menuIndex = (i + items.length) % items.length;
    const root = el || document;
    root.querySelectorAll(".album-cta").forEach((n, k) => {
      n.classList.toggle("active", k === state.menuIndex);
    });
  }

  function menuMove(dir) {
    if (!state.menuItems.length) return;
    hooks.audio?.play("ui_move");
    const el = document.querySelector("#title-menu") || document.querySelector("#mlist") || document.querySelector(".album-nav");
    setMenuIndex(state.menuIndex + dir, el, state.menuItems);
    const btn = el && el.querySelector(".album-cta.active");
    if (btn && btn.focus) btn.focus({ preventScroll: true });
  }
  function menuOk() {
    if (!state.menuItems.length) return;
    const now = typeof performance !== "undefined" ? performance.now() : Date.now();
    if (now < menuArmedAt) return;
    hooks.audio?.play("ui_ok");
    state.menuItems[state.menuIndex].fn();
  }

  window.addEventListener("keydown", (e) => {
    const menuOpen = state.screen === "title" || state.screen === "missions" || state.screen === "pause"
      || (overlay && !overlay.classList.contains("hidden"));
    if (!menuOpen) return;
    if (["ArrowDown", "ArrowRight", "KeyS", "KeyD"].includes(e.code)) {
      e.preventDefault();
      menuMove(1);
    } else if (["ArrowUp", "ArrowLeft", "KeyW", "KeyA"].includes(e.code)) {
      e.preventDefault();
      menuMove(-1);
    } else if (e.code === "Enter" || e.code === "NumpadEnter" || e.code === "Space") {
      if (e.target && e.target.closest && e.target.closest("button")) return;
      e.preventDefault();
      menuOk();
    }
  });

  function box(title, body, footer) {
    const w = 48;
    const line = "─".repeat(w - 2);
    return `┌${line}┐
│ ${title.padEnd(w - 4)} │
├${line}┤
${body.split("\n").map((r) => "│ " + r.padEnd(w - 4).slice(0, w - 4) + " │").join("\n")}
${footer ? "├" + line + "┤\n│ " + footer.padEnd(w - 4) + " │\n" : ""}└${line}┘`;
  }

  function openOverlay(html, interactive = true) {
    title.classList.add("hidden");
    overlay.classList.remove("hidden");
    const p = overlay.querySelector("#overlay-panel");
    p.innerHTML = html;
    p.style.whiteSpace = interactive ? "normal" : "pre";
    p.style.display = "flex";
    p.style.flexDirection = "column";
    p.style.minHeight = "0";
    return p;
  }
  function closeOverlay() { overlay.classList.add("hidden"); state.menuItems = []; }

  const ACT_FR = { rings: "Rings", landing: "Landings", balloons: "Balloons", photo: "Photos", mail: "Mail", storm: "Storm", night: "Night Mail", rescue: "Rescue" };
  const CLASS_FR = { beginner: "Beginner", pro: "Pro", ace: "Ace" };

  function showMissions(save) {
    state.screen = "missions";
    const cards = ACTIVITIES.map((a) => {
      const all = MISSIONS.filter((m) => m.activity === a.id);
      const got = all.reduce((s, m) => s + (save.stars[m.id] | 0), 0);
      const max = all.length * 3;
      return `<button type="button" class="mission-card" data-act="${a.id}">
        <strong>${ACT_FR[a.id] || a.name}</strong>
        <span class="mission-stars">★ ${got} / ${max}</span>
      </button>`;
    }).join("");
    const p = openOverlay(`<div class="album-sheet">
      <h2>Mission Map</h2>
      <div class="mission-map">${cards}</div>
      <div id="mlist" class="album-nav"></div>
    </div>`);
    p.querySelectorAll(".mission-card").forEach((btn) => {
      btn.addEventListener("click", (e) => { e.preventDefault(); showClass(save, btn.dataset.act); });
    });
    renderMenu(p.querySelector("#mlist"), [
      { label: "Back", fn: () => { closeOverlay(); showTitle(save); } },
    ], save, { hideHint: true });
  }

  function showClass(save, activity) {
    const items = CLASSES.map((k) => {
      const list = missionsBy(activity, k);
      const got = list.reduce((s, m) => s + (save.stars[m.id] | 0), 0);
      return { label: `${CLASS_FR[k] || k}  ★ ${got}/${list.length * 3}`, fn: () => showMissionList(save, activity, k) };
    });
    items.push({ label: "Back", fn: () => showMissions(save) });
    const p = openOverlay(`<div class="album-sheet">
      <h2>${ACT_FR[activity] || activity}</h2>
      <div id="mlist" class="album-nav"></div>
    </div>`);
    renderMenu(p.querySelector("#mlist"), items, save);
  }

  function starsStr(n) { return "★".repeat(n) + "☆".repeat(3 - n); }

  function showMissionList(save, activity, klass) {
    state.activity = activity; state.klass = klass;
    const list = missionsBy(activity, klass);
    const items = list.map((m) => ({
      label: `${m.title}  ${starsStr(save.stars[m.id] | 0)}`,
      fn: () => showBrief(save, m),
    }));
    items.push({ label: "Back", fn: () => showClass(save, activity) });
    const p = openOverlay(`<div class="album-sheet">
      <h2>${ACT_FR[activity] || activity} · ${CLASS_FR[klass] || klass}</h2>
      <div id="mlist" class="album-nav"></div>
    </div>`);
    renderMenu(p.querySelector("#mlist"), items, save);
  }

  function showBrief(save, m) {
    const lockedPlane = m.plane && m.plane !== "trainer" && !save.unlocked[m.plane];
    const need = m.plane === "seaplane" ? STAR_UNLOCKS.seaplane : STAR_UNLOCKS.glider;
    const planeName = PLANES[m.plane || "trainer"].name;
    const p = openOverlay(`<div class="album-sheet">
      <h2>${m.title}</h2>
      <p class="sheet-meta">${CLASS_FR[m.klass] || m.klass} · ${ACT_FR[m.activity] || m.activity} · ${planeName}${lockedPlane ? "  (needs " + need + " ★)" : ""}</p>
      <p class="sheet-brief">${m.brief}</p>
      <div id="mlist" class="album-nav"></div>
    </div>`);
    const items = [];
    if (!lockedPlane) items.push({ label: "Take off!", primary: true, fn: () => { closeOverlay(); hooks.onStartMission?.(m.id); } });
    items.push({ label: "Back", fn: () => showMissionList(save, m.activity, m.klass) });
    renderMenu(p.querySelector("#mlist"), items, save);
  }

  function showHangar(save) {
    const items = Object.values(PLANES).filter((p) => ["trainer", "seaplane", "glider"].includes(p.id)).map((p) => {
      const un = save.unlocked[p.id];
      const need = STAR_UNLOCKS[p.id] || 0;
      return {
        label: un ? `${p.name}${save.plane === p.id ? "  ✓" : ""}` : `${p.name}  (${need}★)`,
        fn: () => { if (un) { hooks.onSelectPlane?.(p.id); closeOverlay(); showTitle(save); } },
      };
    });
    items.push({ label: "Back", fn: () => showOptions(save, "title") });
    const p = openOverlay(`<div class="album-sheet"><h2>Hangar</h2><div id="mlist" class="album-nav"></div></div>`);
    renderMenu(p.querySelector("#mlist"), items, save);
  }

  function showAlbum(save) {
    const photos = save.photos || [];
    const body = photos.length ? "" : "<p class='hint'>No photographs yet. Try a photo mission.</p>";
    const p = openOverlay(`<div class="album-sheet"><h2>Album</h2>${body}<div id="photos" class="photo-row"></div><div id="mlist" class="album-nav"></div></div>`);
    const box = p.querySelector("#photos");
    photos.forEach((ph) => {
      const d = document.createElement("div");
      d.className = "photo-card";
      if (ph.data) {
        const img = document.createElement("img");
        img.src = ph.data;
        img.alt = ph.title || "photo";
        d.appendChild(img);
      }
      const cap = document.createElement("div");
      cap.className = "hint";
      cap.textContent = ph.title || "cliché";
      d.appendChild(cap);
      box.appendChild(d);
    });
    renderMenu(p.querySelector("#mlist"), [{ label: "Back", fn: () => { closeOverlay(); showTitle(save); } }], save, { hideHint: true });
  }

  function showOptions(save, back) {
    state.optionsBack = back || state.optionsBack || "title";
    const s = save.settings;
    const p = openOverlay(`<div class="album-sheet options-sheet">
      <h2>Options</h2>
      <div class="opt-groups">
        <section><h3>Controls</h3><div id="opts-controls" class="opt-list"></div></section>
        <section><h3>Graphics</h3><div id="opts-gfx" class="opt-list"></div></section>
        <section><h3>Sound</h3><div id="opts-sound" class="opt-list"></div></section>
      </div>
      <div id="mlist" class="album-nav"></div>
    </div>`);
    const groups = {
      controls: [
        ["Flight assist", "assist", ["full", "light", "off"], { full: "Full", light: "Light", off: "Off" }],
        ["Invert pitch", "invertPitch", "bool"],
        ["Sensitivity", "sensitivity", "slider"],
        ["Gyro", "gyroEnabled", "gyro"],
        ["Gyro sensitivity", "gyroSensitivity", "slider"],
      ],
      gfx: [
        ["Quality", "quality", ["low", "medium", "high"], { low: "Performance", medium: "Medium", high: "High" }],
        ["Frame cap", "fpsCap", [30, 60]],
        ["Motion comfort", "motionComfort", "bool"],
        ["High contrast", "highContrast", "bool"],
      ],
      sound: [
        ["Master volume", "masterVol", "slider"],
        ["Music", "musicVol", "slider"],
        ["Effects", "sfxVol", "slider"],
      ],
    };
    function labelVal(kind, val, names) {
      if (kind === "slider") return Math.round(val * 100) + " %";
      if (kind === "bool" || kind === "gyro") return val ? "Yes" : "No";
      if (names && names[val] != null) return names[val];
      return String(val).toUpperCase();
    }
    function paint(box, rows) {
      box.innerHTML = "";
      rows.forEach(([label, key, kind, names]) => {
        const d = document.createElement("button");
        d.type = "button";
        d.className = "opt-row";
        const shown = labelVal(kind, s[key], names);
        d.innerHTML = `<span>${label}</span><span class="opt-val">${shown}</span>`;
        d.addEventListener("click", () => {
          if (kind === "gyro") { hooks.onToggleGyro?.(); }
          else if (kind === "bool") s[key] = !s[key];
          else if (kind === "slider") s[key] = Math.round((((s[key] || 0) + 0.1) % 1.01) * 10) / 10;
          else {
            const i = kind.indexOf(s[key]);
            s[key] = kind[(i + 1) % kind.length];
          }
          hooks.onSettings?.(s);
          hooks.audio?.play("ui_move");
          paint(box, rows);
        });
        box.appendChild(d);
      });
    }
    paint(p.querySelector("#opts-controls"), groups.controls);
    paint(p.querySelector("#opts-gfx"), groups.gfx);
    paint(p.querySelector("#opts-sound"), groups.sound);
    const backTo = back || state.optionsBack || "title";
    state.optionsBack = backTo;
    const backFn = () => {
      closeOverlay();
      hooks.onSettings?.(s);
      if (backTo === "pause") showPause(save);
      else showTitle(save);
    };
    renderMenu(p.querySelector("#mlist"), [
      { label: "Hangar", fn: () => showHangar(save) },
      { label: "Album", fn: () => showAlbum(save) },
      { label: "Back", fn: backFn },
    ], save);
  }

  function showCredits(save) {
    const p = openOverlay(`<div class="album-sheet credits-sheet">
      <h2>Credits</h2>
      <p><strong>AEROPOSTALE AIR</strong> is an original aviation game.</p>
      <p>Island, aircraft and interface drawn in ligne claire. No licensed trademarks or characters.</p>
      <p>The <em>Courrier C-14</em> is an imaginary airmail plane.</p>
      <p>Fonts: Itim and Patrick Hand, SIL Open Font License.</p>
      <p>Thank you for flying with us.</p>
      <div id="mlist" class="album-nav"></div>
    </div>`);
    renderMenu(p.querySelector("#mlist"), [
      { label: "Back", fn: () => { closeOverlay(); showTitle(save); } },
    ], save, { hideHint: true });
  }

  function showPause(save) {
    state.screen = "pause";
    state.optionsBack = "pause";
    const gearLabel = hooks.gearDown?.() === false ? "Gear  (up)" : "Gear  (down)";
    const p = openOverlay(`<div class="album-sheet"><h2>Pause</h2><div id="mlist" class="album-nav"></div></div>`);
    renderMenu(p.querySelector("#mlist"), [
      { label: "Resume", primary: true, fn: () => { closeOverlay(); hooks.onResume?.(); } },
      { label: "Fullscreen", fn: () => hooks.onFullscreen?.() },
      { label: gearLabel, fn: () => { hooks.onGear?.(); showPause(save); } },
      { label: "Camera", fn: () => hooks.onCamera?.() },
      { label: "Options", fn: () => showOptions(save, "pause") },
      { label: "Restart", fn: () => { closeOverlay(); hooks.onRestart?.(); } },
      { label: "Menu", fn: () => { closeOverlay(); hooks.onQuit?.(); } },
    ], save);
  }

  function showResult(save, result) {
    state.screen = "result";
    const stars = result.stars | 0;
    const p = openOverlay(`<pre style="margin:0 0 10px">${result.mission?.title || "MISSION"}

${"★".repeat(stars)}${"☆".repeat(3 - stars)}   ${result.line || ""}
time  ${formatTime(result.time || 0)}
</pre><div id="mlist"></div>`);
    renderMenu(p.querySelector("#mlist"), [
      { label: "Retry", fn: () => { closeOverlay(); hooks.onRestart?.(); } },
      { label: "Next", primary: true, fn: () => { closeOverlay(); hooks.onNextMission?.(); } },
      { label: "Missions", fn: () => { closeOverlay(); hooks.onQuit?.(); showMissions(save); } },
    ], save);
  }

  let flyHudAt = 0;
  function showHUD() {
    hideAll();
    hud.classList.remove("hidden");
    state.screen = "fly";
    flyHudAt = performance.now();
    const statsEl = hud.querySelector("#hud-stats");
    if (statsEl) statsEl.classList.remove("is-settled");
    closeOverlay();
    mobile.layout(isPortrait(), true);
    maybeFlyHint();
  }
  function maybeFlyHint() {
    const h = hud.querySelector("#hud-hint");
    if (!h) return;
    try { if (localStorage.getItem("apa_flyhint")) return; } catch {}
    h.classList.remove("hidden");
    h.textContent = "Hold BOOST or Space: the plane takes off on its own. Arrow keys (or the stick) turn and pitch. W/S or Shift/Ctrl set the throttle. Right-drag, or drag an empty area, to orbit the camera. V looks back. Release the stick to level out.";
    const hide = () => {
      h.classList.add("hidden");
      try { localStorage.setItem("apa_flyhint", "1"); } catch {}
    };
    state._hideHint = hide;
    setTimeout(hide, 12000);
    h.addEventListener("pointerdown", hide, { once: true });
  }

  function compass(hdg) {
    const labels = "NNEENESESESESWWSWNWNNW";
    // 16 points, heading 0 = east in our system? heading 0 = +X = east.
    // For display, 0 should be north. Our heading: 0 east, PI/2 north? 
    // heading = atan2(-z, x) so 0=+X east, PI/2 = -Z? atan2(-z, x): north -Z would be atan2(1,0)=PI/2 yes if -Z is north.
    // Wait: z north is +Z in our world (castle at +1240). I used Z north!
    // headingFromXZ was atan2(-z, x) which would make +Z south. Inconsistency!
    // In physics I set heading 0 = +X east with yaw = -heading - PI/2, forward -Z becomes +X. Good.
    // Display compass: 0 rad heading = east. North is heading = PI/2 if north is -Z...
    // World: castle at z=+1240, I called it north. So +Z is north.
    // heading 0 = +X east. North (+Z): need forward to be +Z. Body forward is -Z_body.
    // yaw = -heading - PI/2: heading=0, yaw=-90°, -Z_body → +X. Yes east.
    // For north (+Z): want -Z_body → +Z, which is yaw=0. -heading - PI/2 = 0 → heading = -PI/2.
    // That's west of my earlier assumption.
    // Compass: convert heading so 0=N. northHeading = heading + PI/2. If heading=-PI/2, northHeading=0. Good.
    const n = wrapPos(headingToNorth(hdg) / (Math.PI * 2));
    const idx = Math.round(n * 16) % 16;
    const names = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
    return names[idx];
  }
  function headingToNorth(h) { return Math.PI / 2 - h; }
  function wrapPos(t) { t %= 1; return t < 0 ? t + 1 : t; }

  function updateHUD(craft, mission, hour, portrait, ctx) {
    ctx = ctx || {};
    const weather = ctx.weather || { id: "clear", rain: 0, windDeg: 40, windKt: 6, visibility: 12, turbulence: 0 };
    const save = ctx.save || {};
    const ins = safeInsets();
    const touch = !!(mobile && mobile.isTouchUI && mobile.isTouchUI());
    document.body.classList.toggle("touch-ui", touch && state.screen === "fly");
    const padT = (touch ? 6 : 8) + ins.top;
    const padB = (touch ? 4 : 8) + ins.bottom;
    const padL = 8 + ins.left;
    const padR = 8 + ins.right;
    const stats = hud.querySelector("#hud-stats");
    const comp = hud.querySelector("#hud-compass");
    const miss = hud.querySelector("#hud-mission");
    const mmap = hud.querySelector("#hud-minimap");
    const flight = hud.querySelector("#hud-flight");
    const photo = hud.querySelector("#hud-photo");
    const aux = hud.querySelector("#hud-aux");
    const fsBtn = hud.querySelector("#hud-fs");
    const msg = hud.querySelector("#hud-msg");

    stats.style.top = padT + "px"; stats.style.left = padL + "px";
    comp.style.top = padT + "px";
    fsBtn.style.display = "none";
    miss.style.top = padT + "px";
    miss.style.right = (touch ? padR + 52 : padR) + "px";
    mmap.style.left = padL + "px"; mmap.style.bottom = (padB + 48) + "px";
    flight.style.bottom = padB + "px";
    photo.style.right = padR + "px"; photo.style.bottom = (padB + 48) + "px";
    aux.style.right = padR + "px"; aux.style.bottom = (padB + 48) + "px";

    const spd = Math.round((craft.airspeed || 0) * 3.6);
    const altM = Math.max(0, Math.round(craft.altitude || 0));
    const vs = craft.vspeed || 0;
    const vsS = (vs >= 0 ? "+" : "") + vs.toFixed(1);
    const hdg = ((Math.round((headingToNorth(craft.heading) * 180 / Math.PI) + 360) % 360));
    const flapN = (craft.flaps || 0) > 0.66 ? 3 : (craft.flaps || 0) > 0.33 ? 2 : (craft.flaps || 0) > 0.1 ? 1 : 0;
    const starMax = MISSION_COUNT * 3;
    const stars = (typeof save.starsTotal === "number") ? save.starsTotal : (typeof save.stars === "number" ? save.stars : 0);
    const photos = (save.photos && save.photos.length) || 0;
    const planeName = (craft.def && craft.def.name) || (craft.id || "TRAINER").toUpperCase();

    function sbar(v, max) {
      const n = 10, k = Math.round((max ? v / max : 0) * n);
      return '<span class="sbar">' + "█".repeat(k) + "░".repeat(n - k) + "</span>";
    }
    function ico(kind) {
      const common = 'class="hud-ico" viewBox="0 0 24 24" aria-hidden="true"';
      if (kind === "mail") return '<svg '+common+'><path d="M2 5h20v14H2V5zm0 0l10 8L22 5" fill="none" stroke="#14100a" stroke-width="2.4" stroke-linejoin="round"/></svg>';
      if (kind === "star") return '<svg '+common+'><path d="M12 2.2l2.6 6.6 7.2.6-5.4 4.6 1.6 7-6-3.6-6 3.6 1.6-7-5.4-4.6 7.2-.6z" fill="#14100a" stroke="#14100a" stroke-width="1.2" stroke-linejoin="round"/></svg>';
      if (kind === "gem") return '<svg '+common+'><path d="M12 3l8 6-8 12L4 9z" fill="none" stroke="#14100a" stroke-width="2.3" stroke-linejoin="round"/><path d="M4 9h16M12 3v18M8 9l4 12 4-12" fill="none" stroke="#14100a" stroke-width="1.6"/></svg>';
      // plane
      return '<svg '+common+'><path d="M3 13.5l8-1.2V7.5l2.2 4.6 7.3-1.1-1.2 2.4-6.1.4v3.2l2.4 1.6v.9l-3.6-.8-3.6.8v-.9l2.4-1.6v-3.2L3 15.7z" fill="#14100a"/></svg>';
    }
    if (touch) {
      stats.innerHTML = '<div class="stat-pill">' + ico("star") + " " + stars + "　" + ico("gem") + " " + photos + "</div>";
    } else {
      stats.innerHTML = '<div class="stats-banner"><span class="stats-title">AEROPOSTALE AIR</span>' + ico("mail") + "</div>"
        + '<div class="stat-row">' + ico("star") + " " + String(stars).padStart(3) + " / " + starMax + " " + sbar(stars, starMax) + "</div>"
        + '<div class="stat-row">' + ico("gem") + " " + String(photos).padStart(2) + " / 50 " + sbar(photos, 50) + "</div>"
        + '<div class="stat-row">' + ico("plane") + " " + planeName + "</div>";
    }
    const freeFlight = !(mission && mission.active && !mission.result);
    const settled = freeFlight && flyHudAt && (performance.now() - flyHudAt > 4500);
    stats.classList.toggle("is-settled", !!settled);
    paintCompassTape(craft.heading);

    const wx = weather.id === "storm" ? "STORM" : "CLEAR";
    const windKmh = Math.round((weather.windKt || 0) * 1.852);
    const windLine = String(Math.round(weather.windDeg) % 360).padStart(3, "0") + "° at " + windKmh + " km/h";

    miss.style.display = "";
    if (mission && mission.active && !mission.result) {
      const m = mission.active;
      const klass = (m.klass || "").toUpperCase();
      const lines = [];
      if (m.activity === "rings") {
        lines.push("RING COURSE  (" + (klass || "PRO") + ")");
        lines.push("> Fly the " + m.rings.length + " rings");
        lines.push("> Rings: " + mission.ringsPassed + " / " + m.rings.length);
        lines.push("> Time: " + formatTime(mission.t));
        if (m.timeLimits && m.timeLimits.length >= 3) lines.push("> Stars: ★3 " + formatTime(m.timeLimits[2]) + "  ★2 " + formatTime(m.timeLimits[1]) + "  ★1 " + formatTime(m.timeLimits[0]));
        else if (m.timeLimits && m.timeLimits[0]) lines.push("> Target time: " + formatTime(m.timeLimits[0]));
        if (m.rival) {
          const d = mission.rivalDelta || 0;
          const ahead = d >= 0;
          lines.push("> RIVAL " + (ahead ? "−" : "+") + formatTime(Math.abs(d)) + (ahead ? "  (ahead)" : "  (behind)"));
        }
        const best = (save.best && save.best[m.id]) ? formatTime(save.best[m.id]) : "—";
        lines.push("> Best: " + best);
        lines.push("> Wind: " + windLine);
        if (m.weather || weather.id === "storm") lines.push("> Weather: " + (weather.id === "storm" ? "STORM" : "CLEAR"));
      } else if (m.activity === "landing" || (m.activity === "night" && m.target && !m.stops)) {
        const rwy = (m.target && m.target.heading > 2) ? "27" : "09";
        const typ = (m.target && m.target.type === "runway") ? rwy : String((m.target && m.target.type) || "").toUpperCase();
        lines.push("LANDING  (" + (klass || "PRO") + ")");
        lines.push("> Land at the airfield.");
        lines.push("> Runway: " + typ);
        lines.push("> Wind: " + windLine);
        lines.push("> Notes: " + (mission.message || "—"));
      } else if (m.activity === "balloons") {
        lines.push(m.title);
        lines.push("> " + mission.popped + "/" + mission.balloons.length + "   " + formatTime(Math.max(0, (m.timeLimit || 90) - mission.t)));
      } else if (m.activity === "photo" || (m.activity === "night" && m.subject)) {
        lines.push(m.title);
        lines.push(mission.photoReady ? "> IN FRAME — ACTION" : "> find the framing ring");
      } else if (m.activity === "night" && m.mode === "rescue") {
        const stops = m.stops || [];
        const cur = stops[mission.next];
        const done = mission.next || 0;
        lines.push("NIGHT RESCUE  (" + (klass || "PRO") + ")");
        if (cur) lines.push("> " + (cur.type === "raft" ? "Drop a raft at " : (m.flares ? "Follow the flares to " : "Mark ")) + cur.name);
        lines.push("> Marks: " + done + " / " + stops.length);
        lines.push("> Time: " + formatTime(mission.t));
        if (m.timeLimits && m.timeLimits.length >= 3) lines.push("> Stars: ★3 " + formatTime(m.timeLimits[2]) + "  ★2 " + formatTime(m.timeLimits[1]) + "  ★1 " + formatTime(m.timeLimits[0]));
        lines.push("> Wind: " + windLine);
      } else if (m.activity === "mail" || m.activity === "night" && m.stops) {
        const stops = m.stops || [];
        const cur = stops[mission.next] || stops[stops.length - 1];
        const done = Math.max(0, (mission.next || 0) - 1);
        const drops = stops.filter((s) => s.type === "drop").length;
        lines.push((m.activity === "night" ? "NIGHT MAIL" : "MAIL LINE") + "  (" + (klass || "PRO") + ")");
        if (!mission.mailHasBag && cur && cur.type === "pickup") {
          lines.push("> Pick up the bag at the " + cur.name);
        } else if (cur && cur.moving === "steamer") {
          lines.push("> Drop the bag on the moving steamer");
        } else if (cur) {
          lines.push("> Drop at " + cur.name);
        }
        lines.push("> Drops: " + Math.max(0, done) + " / " + drops);
        lines.push("> Time: " + formatTime(mission.t));
        if (m.timeLimits && m.timeLimits.length >= 3) lines.push("> Stars: ★3 " + formatTime(m.timeLimits[2]) + "  ★2 " + formatTime(m.timeLimits[1]) + "  ★1 " + formatTime(m.timeLimits[0]));
        else if (m.timeLimits && m.timeLimits[0]) lines.push("> Target time: " + formatTime(m.timeLimits[0]));
        lines.push("> Wind: " + windLine);
      } else if (m.activity === "storm") {
        const stops = m.stops || [];
        const cur = stops[mission.next];
        const done = mission.next || 0;
        lines.push((m.mode === "rescue" ? "STORM RESCUE" : "STORM CROSSING") + "  (" + (klass || "PRO") + ")");
        if (m.mode === "rescue" && cur) lines.push("> " + (cur.type === "raft" ? "Drop a raft at " : (m.flares ? "Follow the flares to " : "Mark ")) + cur.name);
        else if (cur) lines.push("> Beacon: " + cur.name);
        else if (m.target) lines.push("> Land on the ridge strip");
        lines.push((m.mode === "rescue" ? "> Marks: " : "> Beacons: ") + done + " / " + stops.length);
        lines.push("> Time: " + formatTime(mission.t));
        if (m.timeLimits && m.timeLimits.length >= 3) lines.push("> Stars: ★3 " + formatTime(m.timeLimits[2]) + "  ★2 " + formatTime(m.timeLimits[1]) + "  ★1 " + formatTime(m.timeLimits[0]));
        else if (m.timeLimits && m.timeLimits[0]) lines.push("> Target time: " + formatTime(m.timeLimits[0]));
        lines.push("> Wind: " + windLine);
        lines.push("> Weather: STORM");
      } else if (m.activity === "rescue") {
        const stops = m.stops || [];
        const cur = stops[mission.next];
        const done = mission.next || 0;
        lines.push((m.mode === "race" ? "CAPE RACE" : "RESCUE") + "  (" + (klass || "PRO") + ")");
        if (cur) lines.push("> " + (cur.type === "raft" ? "Drop a raft at " : "Pylon: ") + cur.name);
        lines.push("> Marks: " + done + " / " + stops.length);
        lines.push("> Time: " + formatTime(mission.t));
        if (m.timeLimits && m.timeLimits.length >= 3) lines.push("> Stars: ★3 " + formatTime(m.timeLimits[2]) + "  ★2 " + formatTime(m.timeLimits[1]) + "  ★1 " + formatTime(m.timeLimits[0]));
        else if (m.timeLimits && m.timeLimits[0]) lines.push("> Target time: " + formatTime(m.timeLimits[0]));
        lines.push("> Wind: " + windLine);
      } else {
        lines.push(m.title);
      }
      if (touch) {
        if (m.activity === "rings") {
          let t = "Rings " + mission.ringsPassed + "/" + m.rings.length;
          if (m.rival) {
            const d = mission.rivalDelta || 0;
            t += "  RIVAL " + (d >= 0 ? "−" : "+") + formatTime(Math.abs(d));
          }
          miss.textContent = t;
        }
        else if (m.activity === "landing" || (m.activity === "night" && m.target && !m.stops)) miss.textContent = "Landing";
        else if (m.activity === "balloons") miss.textContent = (m.title || "Balloons") + "  " + mission.popped + "/" + (mission.balloons && mission.balloons.length || 0);
        else if (m.activity === "night" && m.mode === "rescue") {
          const cur = (m.stops || [])[mission.next];
          miss.textContent = cur ? ((cur.type === "raft" ? "Raft: " : "Mark: ") + cur.name) : "Night rescue";
        }
        else if (m.activity === "mail" || (m.activity === "night" && m.stops)) {
          const stops = m.stops || [];
          const cur = stops[mission.next];
          miss.textContent = cur ? ((cur.type === "pickup" ? "Pick up: " : (cur.moving === "steamer" ? "Drop: moving steamer" : "Drop: ")) + (cur.moving === "steamer" ? "" : cur.name)) : "Mail";
        }
        else if (m.activity === "storm") {
          const cur = (m.stops || [])[mission.next];
          miss.textContent = cur ? ((m.mode === "rescue" ? (cur.type === "raft" ? "Raft: " : "Mark: ") : "Beacon: ") + cur.name) : (m.target ? "Land: Ridge" : "Storm");
        }
        else if (m.activity === "rescue") {
          const cur = (m.stops || [])[mission.next];
          miss.textContent = cur ? ((cur.type === "raft" ? "Raft: " : (m.mode === "race" || cur.type === "pylon" ? "Pylon: " : "Mark: ")) + cur.name) : "Rescue";
        }
        else miss.textContent = m.title || "Mission";
      } else miss.textContent = lines.join("\n");
    } else if (mission && mission.result) {
      miss.textContent = mission.message || "";
    } else if (touch) {
      miss.textContent = weather.id === "storm" ? "Free Flight · Storm" : "Free Flight";
    } else {
      miss.textContent = "FREE FLIGHT\n> " + hourToClock(hour) + "\n> Wind: " + windLine + "\n> Weather: " + (weather.id === "storm" ? "STORM" : "CLEAR");
    }

    const landing = mission && mission.active && (mission.active.activity === "landing" || (mission.active.activity === "night" && mission.active.target && !mission.active.stops) || (mission.active.activity === "storm" && mission.active.target && mission.next >= (mission.active.stops || []).length)) && !mission.result;
    const stormy = weather.id === "storm" || (mission && mission.active && mission.active.weather === "storm");
    const vitEl = flight.querySelector("#g-vit");
    const altEl = flight.querySelector("#g-alt");
    const vsEl = flight.querySelector("#g-vs");
    const flEl = flight.querySelector("#g-flaps");
    const geEl = flight.querySelector("#g-gear");
    if (vitEl) vitEl.innerHTML = '<div class="g-lab">SPEED</div><div class="g-row">' + gaugeBars(spd, 200, 8) + '<div class="g-num"><div class="g-val">' + String(spd).padStart(3, " ") + '</div><div class="g-unit">km/h</div></div></div>';
    if (altEl) altEl.innerHTML = '<div class="g-lab">ALT</div><div class="g-row">' + gaugeBars(altM, 1200, 8) + '<div class="g-num"><div class="g-val">' + String(altM).padStart(4, " ") + '</div><div class="g-unit">m</div></div></div>';
    if (vsEl) vsEl.innerHTML = '<div class="g-lab">V/S</div><div class="g-val">' + vsS + '</div><div class="g-unit">m/s</div>';
    if (flEl) {
      const ticks = [0, 1, 2, 3].map((n) => '<span class="' + (n === flapN ? "on" : "") + '">' + n + "</span>").join(" ");
      flEl.innerHTML = '<div class="g-lab">FLAPS</div><div class="g-val flaps">' + ticks + "</div>";
    }
    if (geEl) geEl.innerHTML = '<div class="g-lab">GEAR</div><div class="g-val gear">' + (craft.gearDown ? "▼" : "▲") + "</div>";
    drawHorizon(flight.querySelector("#g-horizon"), craft);

    const msgText = craft.crashed ? "RECOVERING…" : ((mission && mission.result) ? (mission.message || "") : "");
    msg.textContent = msgText;
    msg.classList.toggle("hidden", !msgText);
    if (state._hideHint && !craft.onGround && (craft.altitude || 0) > 8) state._hideHint();


    if (!touch && !portrait && window.innerWidth > 900 && window.innerHeight > 560) {
      mmap.classList.remove("hidden");
      drawMini(craft);
    } else mmap.classList.add("hidden");

    const plate = !touch && mission && mission.active && mission.active.id === "showcase";
    const showPhoto = !touch && mission && mission.active && (mission.active.activity === "photo" || (mission.active.activity === "night" && mission.active.subject)) && !mission.result;
    if (showPhoto) {
      photo.classList.remove("hidden");
      aux.classList.add("hidden");
      const sub = (mission.active.subject && mission.active.subject.name) || "subject";
      photo.classList.toggle("ready", !!mission.photoReady);
      photo.textContent = "PHOTO MISSION\n┌────────────┐\n│ " + String(sub).slice(0, 10).padEnd(10) + " │\n│ " + (mission.photoReady ? "  FRAMED!   " : "  search    ") + " │\n└────────────┘";
    } else if (plate) {
      photo.classList.remove("hidden");
      aux.classList.add("hidden");
      photo.textContent = "PHOTO MISSION\n> Frame the castle\n  from the south-east\n  (range and angle)";
    } else if (landing && !touch) {
      photo.classList.add("hidden");
      aux.classList.remove("hidden");
      const a = landingAssist(craft, mission.active);
      const glideS = (a.glide >= 0 ? "+" : "") + a.glide.toFixed(1);
      const latS = (a.lat >= 0 ? "+" : "") + a.lat.toFixed(1);
      const etaS = a.eta > 0 ? (Math.round(a.eta) + " s") : "—";
      aux.textContent = "LANDING AID\n> Glide: " + glideS + "°\n> Line: " + latS + " m\n> Speed: " + Math.round(a.spd) + " km/h\nTOUCHDOWN  ~" + etaS;
    } else if (stormy && !portrait && !touch) {
      photo.classList.add("hidden");
      aux.classList.remove("hidden");
      const turb = weather.turbulence > 0.55 ? "high" : weather.turbulence > 0.2 ? "medium" : "light";
      const rain = weather.rain > 0.6 ? "heavy" : weather.rain > 0.2 ? "light" : "none";
      aux.textContent = "WEATHER: STORM\n> Rain: " + rain + "\n> Visibility: " + Number(weather.visibility).toFixed(1) + " km\n> Turbulence: " + turb;
    } else {
      photo.classList.add("hidden");
      aux.classList.add("hidden");
      photo.classList.remove("ready");
    }

    mobile.layout(portrait, state.screen === "fly");
    mobile.setThrottle(craft.throttle);
  }


  function gaugeBars(value, max, steps) {
    const filled = Math.max(0, Math.min(steps, Math.round((value / max) * steps)));
    let html = '<div class="g-bars" aria-hidden="true">';
    for (let i = 0; i < steps; i++) {
      html += '<i class="' + (i < filled ? "on" : "") + '"></i>';
    }
    return html + "</div>";
  }

  function drawHorizon(cv, craft) {
    if (!cv || !cv.getContext) return;
    const ctx = cv.getContext("2d");
    const w = cv.width, h = cv.height;
    ctx.clearRect(0, 0, w, h);
    const roll = craft.roll || 0;
    const pitch = craft.pitch || 0;
    ctx.save();
    ctx.beginPath(); ctx.arc(w/2, h/2, w/2 - 2, 0, Math.PI * 2); ctx.clip();
    ctx.translate(w/2, h/2);
    ctx.rotate(-roll);
    ctx.translate(0, pitch * 70);
    ctx.fillStyle = "#6eb7e8";
    ctx.fillRect(-w, -h * 2, w * 2, h * 2);
    ctx.fillStyle = "#c9a36a";
    ctx.fillRect(-w, 0, w * 2, h * 2);
    ctx.strokeStyle = "#1a140c";
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(-w, 0); ctx.lineTo(w, 0); ctx.stroke();
    ctx.restore();
    ctx.strokeStyle = "#1a140c";
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(w/2, h/2, w/2 - 2, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = "#c01418";
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(8, h/2); ctx.lineTo(w * 0.32, h/2); ctx.moveTo(w * 0.68, h/2); ctx.lineTo(w - 8, h/2); ctx.stroke();
    ctx.fillStyle = "#e8b01a";
    ctx.strokeStyle = "#1a140c";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(w/2 - 16, h/2);
    ctx.lineTo(w/2 - 4, h/2);
    ctx.lineTo(w/2, h/2 - 3);
    ctx.lineTo(w/2 + 4, h/2);
    ctx.lineTo(w/2 + 16, h/2);
    ctx.lineTo(w/2 + 4, h/2 + 3);
    ctx.lineTo(w/2, h/2 + 5);
    ctx.lineTo(w/2 - 4, h/2 + 3);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  function paintCompassTape(hdg) {
    const canvas = hud.querySelector("#compass-tape");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width, h = canvas.height;
    const headingDeg = ((headingToNorth(hdg) * 180 / Math.PI) + 360) % 360;
    const span = 200; // degrees visible, ~5 labels like the master
    const px = w / span;
    ctx.clearRect(0, 0, w, h);
    const labels = { 0: "N", 45: "NE", 90: "E", 135: "SE", 180: "S", 225: "SO", 270: "O", 315: "NO" };
    ctx.fillStyle = "#1a140c";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (let d = -360; d <= 720; d += 15) {
      let delta = d - headingDeg;
      const x = w / 2 + delta * px;
      if (x < -30 || x > w + 30) continue;
      const major = ((d % 360) + 360) % 360 % 45 === 0;
      ctx.fillRect(x - (major ? 1 : 0.6), major ? 6 : 14, major ? 2 : 1.2, major ? 16 : 8);
      if (major) {
        const lab = labels[((d % 360) + 360) % 360];
        if (lab) {
          ctx.font = lab === "N" && Math.abs(delta) < 8 ? "bold 26px Nunito, Trebuchet MS, sans-serif" : "bold 22px Nunito, Trebuchet MS, sans-serif";
          ctx.fillText(lab, x, h - 14);
        }
      }
    }
  }


  function attitude(craft) {
    const b = craft.roll || 0;
    const p = craft.pitch || 0;
    const mid = p > 0.15 ? "▴" : p < -0.15 ? "▾" : "●";
    if (b > 0.28) return `\\\\${mid}\\\\`;
    if (b < -0.28) return `/${mid}/`;
    return `-${mid}-`;
  }

  function landingAssist(craft, m) {
    const tgt = (m && m.target) || { x: 0, z: -1100, heading: 0, len: 800 };
    const hdg = tgt.heading || 0;
    const fx = Math.cos(hdg), fz = Math.sin(hdg);
    const len = tgt.len || 800;
    const thx = (tgt.x || 0) - fx * (len * 0.45);
    const thz = (tgt.z != null ? tgt.z : -1100) - fz * (len * 0.45);
    const dx = thx - craft.pos.x, dz = thz - craft.pos.z;
    const along = dx * fx + dz * fz;
    const lat = -dx * fz + dz * fx;
    const alt = Math.max(0, (craft.altitude || 0) - 4);
    const glide = along > 8 ? -(Math.atan2(alt, along) * 180 / Math.PI) : 0;
    const spd = (craft.airspeed || 0) * 3.6;
    const eta = Math.max(0, (along > 0 && craft.airspeed > 5) ? along / craft.airspeed : 0);
    return { glide, lat, spd, eta, along };
  }

  function planeIcon(craft) {
    return craft.gearDown ? "▸═▼═◂" : "▸═●═◂";
  }

  function bar(t, n, on, off) {
    const k = Math.round(clamp01(t) * n);
    return on.repeat(k) + off.repeat(n - k);
  }
  function clamp01(t) { return t < 0 ? 0 : t > 1 ? 1 : t; }

  let miniSpec = null;
  function setMiniMap(spec) { miniSpec = spec; }

  function ensureMiniCanvas() {
    const mmap = hud.querySelector("#hud-minimap");
    if (!mmap) return null;
    let c = mmap.querySelector("canvas");
    if (!c) {
      mmap.textContent = "";
      const cap = document.createElement("div");
      cap.className = "mini-cap";
      cap.innerHTML = "<strong>MAP</strong><span>N ↑</span>";
      c = document.createElement("canvas");
      c.width = 220;
      c.height = 220;
      c.setAttribute("aria-label", "Island map");
      const sc = document.createElement("div");
      sc.className = "mini-scale";
      sc.textContent = "3 km";
      mmap.appendChild(cap);
      mmap.appendChild(c);
      mmap.appendChild(sc);
    }
    return c;
  }

  function drawMini(craft) {
    const c = ensureMiniCanvas();
    if (!c) return;
    const ctx = c.getContext("2d");
    const S = c.width;
    const W = (miniSpec && miniSpec.world) || 3000;
    const n = (miniSpec && miniSpec.S) || 0;
    const data = miniSpec && miniSpec.data;
    if (data && n) {
      const img = ctx.createImageData(S, S);
      for (let y = 0; y < S; y++) {
        for (let x = 0; x < S; x++) {
          const i = Math.min(n - 1, Math.floor(x / S * n));
          const j = Math.min(n - 1, Math.floor(y / S * n));
          const h = data[j * n + i];
          const o = (y * S + x) * 4;
          if (h > 0) {
            const k = h / 255;
            img.data[o] = Math.round(62 + k * 70);
            img.data[o + 1] = Math.round(140 + k * 55);
            img.data[o + 2] = Math.round(48);
            img.data[o + 3] = 255;
          } else {
            img.data[o] = 70;
            img.data[o + 1] = 160;
            img.data[o + 2] = 210;
            img.data[o + 3] = 255;
          }
        }
      }
      ctx.putImageData(img, 0, 0);
      // Ink silhouette: outline land/water boundary
      ctx.fillStyle = "#14100a";
      const step = 2;
      for (let y = 1; y < S - 1; y += 1) {
        for (let x = 1; x < S - 1; x += 1) {
          const i = Math.min(n - 1, Math.floor(x / S * n));
          const j = Math.min(n - 1, Math.floor(y / S * n));
          const h = data[j * n + i];
          if (h <= 0) continue;
          const inb = (xx, yy) => data[Math.min(n - 1, Math.floor(yy / S * n)) * n + Math.min(n - 1, Math.floor(xx / S * n))] <= 0;
          if (inb(x - step, y) || inb(x + step, y) || inb(x, y - step) || inb(x, y + step)) {
            ctx.fillRect(x - 1, y - 1, 3, 3);
          }
        }
      }
    } else {
      ctx.fillStyle = "#5aa8c8";
      ctx.fillRect(0, 0, S, S);
    }
    ctx.strokeStyle = "#14100a";
    ctx.lineWidth = 5;
    ctx.strokeRect(2, 2, S - 4, S - 4);
    const toX = (x) => ((x + W / 2) / W) * S;
    const toY = (z) => (1 - (z + W / 2) / W) * S;
    const px = toX(craft.pos.x), py = toY(craft.pos.z);
    const ang = headingToNorth(craft.heading);
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(ang);
    ctx.fillStyle = "#c01418";
    ctx.strokeStyle = "#14100a";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, -10);
    ctx.lineTo(7, 9);
    ctx.lineTo(0, 4);
    ctx.lineTo(-7, 9);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  function isPortrait() { return window.innerHeight > window.innerWidth; }

  function showIosToast() {
    // no-op, already on title
  }

  return {
    setLoad, showTitle, showHUD, showPause, showResult, showMissions, showHangar, showOptions, showAlbum, showBrief, showCredits,
    updateHUD, closeOverlay, menuMove, menuOk, isPortrait, setMiniMap, state, wrap, loading, hud, overlay, mobile,
    elements() {
      // all visible interactive + hud boxes for overlap tests
      const els = [];
      wrap.querySelectorAll("button, .menu-item, .stick-base, .throttle-track, .album-panel, .album-panel balloon, .hud-line, #hud-msg").forEach((e) => {
        if (e.offsetParent === null && !e.getClientRects().length) return;
        const r = e.getBoundingClientRect();
        if (r.width > 2 && r.height > 2) els.push({ id: e.id || e.className, r });
      });
      return els;
    },
  };
}

function wrapText(s, w) {
  const words = s.split(" ");
  const lines = [];
  let cur = "";
  for (const wd of words) {
    if ((cur + " " + wd).trim().length > w) { lines.push(cur); cur = wd; }
    else cur = (cur + " " + wd).trim();
  }
  if (cur) lines.push(cur);
  return lines.join("\n");
}
