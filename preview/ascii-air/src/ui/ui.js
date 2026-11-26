import { TITLE, PLANES, STAR_UNLOCKS } from "../core/config.js";
import { hourToClock, formatTime, pad, isIOS, isStandalone, isMobileUA, safeInsets } from "../core/utils.js";
import { ACTIVITIES, CLASSES, missionsBy, MISSIONS } from "../missions/data.js";
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
      <p class="title-tag">Mail planes over a sunny island</p>
    </div>
    <div class="speech-balloon title-balloon">Ready when you are!</div>
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
    <div class="hint">AEROPOSTALE ISLAND</div>
    <div class="bar"><span id="load-bar"></span></div>
    <div id="load-msg" class="hint" style="margin-top:10px">warming the engine…</div>`;
  wrap.appendChild(loading);

  const title = document.createElement("div");
  title.id = "title-screen";
  title.className = "hidden";
  title.style.cssText = "position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding-bottom:8vh;pointer-events:none;";
  title.innerHTML = `
    <div class="logo-slot" id="logo"></div>
    <div class="hint" style="margin:6px 0 14px">An island in the sun. A little mail plane. Clear skies ahead.</div>
    <div class="album-panel" id="title-menu" style="pointer-events:auto;min-width:min(80vw,360px);padding:10px 0;"></div>
    <div id="ios-hint" class="hint hidden" style="margin-top:10px;max-width:90vw;text-align:center;white-space:normal;padding:0 12px"></div>
  `;
  wrap.appendChild(title);
  wrap.querySelectorAll(".logo-slot").forEach((s) => s.appendChild(paintWordmark()));


  const hud = document.createElement("div");
  hud.id = "hud";
  hud.className = "hidden";
  hud.style.cssText = "position:absolute;inset:0;pointer-events:none;";
  hud.innerHTML = `
    <div class="album-panel balloon" id="hud-stats"></div>
    <div class="album-panel balloon" id="hud-compass"></div>
    <div class="album-panel balloon" id="hud-mission"></div>
    <div class="banner hud-line" id="hud-msg" style="top:18%;font-size:18px;"></div>
    <div class="album-panel balloon hidden" id="hud-minimap"></div>
    <div class="album-panel balloon" id="hud-flight"></div>
    <div class="album-panel balloon hidden" id="hud-photo"></div>
    <div class="album-panel balloon hidden" id="hud-aux"></div>
    <button class="album-btn hidden" id="hud-fs">FULL</button>
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
    state.screen = "title";
    title.classList.remove("hidden");
    const items = [
      { label: "FREE FLIGHT", fn: () => hooks.onFreeFlight?.() },
      { label: "MISSIONS", fn: () => showMissions(save) },
      { label: "HANGAR", fn: () => showHangar(save) },
      { label: "ALBUM", fn: () => showAlbum(save) },
      { label: "OPTIONS", fn: () => showOptions(save) },
    ];
    renderMenu(title.querySelector("#title-menu"), items, save);
    const hint = title.querySelector("#ios-hint");
    if (iosFullscreenHint()) {
      hint.classList.remove("hidden");
      hint.textContent = "iPhone Safari can't go full screen here. Share → Add to Home Screen, then open AEROPOSTALE ISLAND like an app.";
    } else hint.classList.add("hidden");
    mobile.layout(isPortrait(), false);
  }

  function renderMenu(el, items, save) {
    state.menuItems = items;
    state.menuIndex = 0;
    const stars = totalStars(save);
    el.innerHTML = items.map((it, i) =>
      `<div class="menu-item${i === 0 ? " active" : ""}" data-i="${i}">${i === 0 ? "▸ " : "  "}${it.label}</div>`
    ).join("") + `<div class="hint" style="padding:8px 14px;white-space:normal">★ ${stars}    ${isMobileUA() ? "tap to choose" : "W/S  Enter   F fullscreen"}</div>`;
    el.querySelectorAll(".menu-item").forEach((n) => {
      n.addEventListener("click", () => {
        const i = +n.dataset.i;
        hooks.audio?.play("ui_ok");
        items[i].fn();
      });
      n.addEventListener("mouseenter", () => setMenuIndex(+n.dataset.i, el, items));
    });
  }

  function setMenuIndex(i, el, items) {
    state.menuIndex = (i + items.length) % items.length;
    el.querySelectorAll(".menu-item").forEach((n, k) => {
      n.classList.toggle("active", k === state.menuIndex);
      n.textContent = (k === state.menuIndex ? "▸ " : "  ") + items[k].label;
    });
  }

  function menuMove(dir) {
    if (!state.menuItems.length) return;
    hooks.audio?.play("ui_move");
    const el = document.querySelector("#title-menu, #overlay-panel");
    setMenuIndex(state.menuIndex + dir, el, state.menuItems);
  }
  function menuOk() {
    if (!state.menuItems.length) return;
    hooks.audio?.play("ui_ok");
    state.menuItems[state.menuIndex].fn();
  }

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
    overlay.classList.remove("hidden");
    const p = overlay.querySelector("#overlay-panel");
    p.innerHTML = html;
    p.style.whiteSpace = interactive ? "normal" : "pre";
    return p;
  }
  function closeOverlay() { overlay.classList.add("hidden"); state.menuItems = []; }

  function showMissions(save) {
    state.screen = "missions";
    const acts = ACTIVITIES.map((a) => {
      const all = MISSIONS.filter((m) => m.activity === a.id);
      const got = all.reduce((s, m) => s + (save.stars[m.id] | 0), 0);
      return { label: `${a.name}   ${got}/${all.length * 3} ★`, fn: () => showClass(save, a.id) };
    });
    acts.push({ label: "BACK", fn: () => { closeOverlay(); showTitle(save); } });
    const p = openOverlay(`<div style="white-space:pre;margin-bottom:8px">MISSIONS</div><div id="mlist"></div>`);
    renderMenu(p.querySelector("#mlist"), acts, save);
  }

  function showClass(save, activity) {
    const items = CLASSES.map((k) => ({
      label: k.toUpperCase(),
      fn: () => showMissionList(save, activity, k),
    }));
    items.push({ label: "BACK", fn: () => showMissions(save) });
    const p = openOverlay(`<div style="white-space:pre;margin-bottom:8px">${activity.toUpperCase()}</div><div id="mlist"></div>`);
    renderMenu(p.querySelector("#mlist"), items, save);
  }

  function starsStr(n) { return "★".repeat(n) + "☆".repeat(3 - n); }

  function showMissionList(save, activity, klass) {
    state.activity = activity; state.klass = klass;
    const list = missionsBy(activity, klass);
    const items = list.map((m) => ({
      label: `${m.title.padEnd(22)} ${starsStr(save.stars[m.id] | 0)}`,
      fn: () => showBrief(save, m),
    }));
    items.push({ label: "BACK", fn: () => showClass(save, activity) });
    const p = openOverlay(`<div style="white-space:pre;margin-bottom:8px">${activity.toUpperCase()}  ·  ${klass.toUpperCase()}</div><div id="mlist"></div>`);
    renderMenu(p.querySelector("#mlist"), items, save);
  }

  function showBrief(save, m) {
    const lockedPlane = m.plane && m.plane !== "trainer" && !save.unlocked[m.plane];
    const need = m.plane === "seaplane" ? STAR_UNLOCKS.seaplane : STAR_UNLOCKS.glider;
    const html = `
      <pre style="margin:0 0 8px">${m.title.toUpperCase()}
${m.klass.toUpperCase()}  ·  ${m.activity}
plane  ${PLANES[m.plane || "trainer"].name}${lockedPlane ? `  (needs ${need} ★)` : ""}

${wrapText(m.brief, 44)}
</pre>
      <div id="mlist"></div>`;
    const p = openOverlay(html);
    const items = [];
    if (!lockedPlane) items.push({ label: "FLY", fn: () => { closeOverlay(); hooks.onStartMission?.(m.id); } });
    items.push({ label: "BACK", fn: () => showMissionList(save, m.activity, m.klass) });
    renderMenu(p.querySelector("#mlist"), items, save);
  }

  function showHangar(save) {
    const items = Object.values(PLANES).filter((p) => ["trainer", "seaplane", "glider"].includes(p.id)).map((p) => {
      const un = save.unlocked[p.id];
      const need = STAR_UNLOCKS[p.id] || 0;
      return {
        label: un ? `${p.name}${save.plane === p.id ? "  ◂" : ""}` : `${p.name}  LOCKED (${need}★)`,
        fn: () => { if (un) { hooks.onSelectPlane?.(p.id); closeOverlay(); showTitle(save); } },
      };
    });
    items.push({ label: "BACK", fn: () => { closeOverlay(); showTitle(save); } });
    const p = openOverlay(`<div style="margin-bottom:8px">HANGAR</div><div id="mlist"></div>`);
    renderMenu(p.querySelector("#mlist"), items, save);
  }

  function showAlbum(save) {
    const photos = save.photos || [];
    let body = photos.length ? "" : "<div class='hint'>No photographs yet. Fly a photo mission.</div>";
    const p = openOverlay(`<div>ALBUM</div>${body}<div id="photos" style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;max-width:80vw"></div><div id="mlist"></div>`);
    const box = p.querySelector("#photos");
    photos.forEach((ph) => {
      const d = document.createElement("div");
      d.style.cssText = "width:160px;font-size:10px;";
      if (ph.data) {
        const img = document.createElement("img");
        img.src = ph.data;
        img.style.cssText = "width:160px;height:90px;object-fit:cover;image-rendering:pixelated;border:1px solid rgba(140,255,200,0.35)";
        d.appendChild(img);
      }
      const cap = document.createElement("div");
      cap.className = "hint";
      cap.textContent = ph.title || "shot";
      d.appendChild(cap);
      box.appendChild(d);
    });
    renderMenu(p.querySelector("#mlist"), [{ label: "BACK", fn: () => { closeOverlay(); showTitle(save); } }], save);
  }

  function showOptions(save) {
    const s = save.settings;
    const row = (k, v) => `<div style="display:flex;justify-content:space-between;gap:16px;margin:4px 0"><span>${k}</span><span>${v}</span></div>`;
    const p = openOverlay(`<div style="margin-bottom:8px">OPTIONS</div>
      <div class="hint">Tap a row to cycle it.</div>
      <div id="opts"></div>
      <div id="mlist"></div>`);
    const opts = [
      ["Flight assist", "assist", ["full", "light", "off"]],
      ["Invert pitch", "invertPitch", "bool"],
      ["Sensitivity", "sensitivity", "slider"],
      ["Gyro sensitivity", "gyroSensitivity", "slider"],
      ["Motion comfort", "motionComfort", "bool"],
      ["High contrast", "highContrast", "bool"],
      ["Colorblind markers", "colorblind", "bool"],
      ["Quality", "quality", ["low", "medium", "high"]],
      ["Frame cap", "fpsCap", [30, 60]],
      ["Auto throttle", "autoThrottle", "bool"],
      ["Master volume", "masterVol", "slider"],
      ["Music volume", "musicVol", "slider"],
      ["Sfx volume", "sfxVol", "slider"],
    ];
    const box = p.querySelector("#opts");
    function refresh() {
      box.innerHTML = "";
      opts.forEach(([label, key, kind]) => {
        const d = document.createElement("div");
        d.className = "menu-item";
        d.style.display = "flex";
        d.style.justifyContent = "space-between";
        d.style.gap = "16px";
        const val = s[key];
        const shown = kind === "slider" ? Math.round(val * 100) + "%" : kind === "bool" ? (val ? "ON" : "OFF") : String(val).toUpperCase();
        d.innerHTML = `<span>${label}</span><span>${shown}</span>`;
        d.addEventListener("click", () => {
          if (kind === "bool") s[key] = !s[key];
          else if (kind === "slider") s[key] = Math.round(((val + 0.1) % 1.01) * 10) / 10;
          else {
            const i = kind.indexOf(val);
            s[key] = kind[(i + 1) % kind.length];
          }
          hooks.onSettings?.(s);
          hooks.audio?.play("ui_move");
          refresh();
        });
        box.appendChild(d);
      });
      // gyro button
      const g = document.createElement("div");
      g.className = "menu-item";
      g.textContent = s.gyroEnabled ? "Disable gyro" : "Enable gyro (calibrate)";
      g.addEventListener("click", () => hooks.onToggleGyro?.());
      box.appendChild(g);
    }
    refresh();
    renderMenu(p.querySelector("#mlist"), [{ label: "BACK", fn: () => { closeOverlay(); hooks.onSettings?.(s); showTitle(save); } }], save);
  }

  function showPause(save) {
    state.screen = "pause";
    const p = openOverlay(`<div style="margin-bottom:8px">PAUSED</div><div id="mlist"></div>`);
    renderMenu(p.querySelector("#mlist"), [
      { label: "RESUME", fn: () => { closeOverlay(); hooks.onResume?.(); } },
      { label: "FULL SCREEN", fn: () => hooks.onFullscreen?.() },
      { label: "OPTIONS", fn: () => showOptions(save) },
      { label: "RESTART", fn: () => { closeOverlay(); hooks.onRestart?.(); } },
      { label: "HANGAR / MENU", fn: () => { closeOverlay(); hooks.onQuit?.(); } },
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
      { label: "RETRY", fn: () => { closeOverlay(); hooks.onRestart?.(); } },
      { label: "NEXT", fn: () => { closeOverlay(); hooks.onNextMission?.(); } },
      { label: "MISSIONS", fn: () => { closeOverlay(); hooks.onQuit?.(); showMissions(save); } },
    ], save);
  }

  function showHUD() {
    hideAll();
    hud.classList.remove("hidden");
    state.screen = "fly";
    closeOverlay();
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
    const mobileChrome = (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 900);
    const padT = 8 + ins.top + (mobileChrome ? 40 : 0);
    const padB = 8 + ins.bottom + (mobileChrome ? (portrait ? 148 : 56) : 0);
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
    fsBtn.style.top = padT + "px"; fsBtn.style.right = padR + "px";
    miss.style.top = (padT + (mobileChrome ? 44 : 48)) + "px"; miss.style.right = padR + "px";
    mmap.style.left = padL + "px"; mmap.style.bottom = (padB + 48) + "px";
    flight.style.bottom = padB + "px";
    photo.style.right = padR + "px"; photo.style.bottom = (padB + 48) + "px";
    aux.style.right = padR + "px"; aux.style.bottom = (padB + 48) + "px";

    const spd = Math.round(craft.airspeed * 1.94384);
    const altM = Math.max(0, craft.altitude);
    const altFt = Math.round(altM * 3.28084);
    const vs = Math.round(craft.vspeed * 196.85);
    const vsS = (vs >= 0 ? "+" : "") + vs;
    const thr = Math.round(craft.throttle * 100);
    const hdg = ((Math.round((headingToNorth(craft.heading) * 180 / Math.PI) + 360) % 360));
    const gear = craft.gearDown ? "DOWN" : "UP";
    const flaps = (craft.flaps || 0) > 0.5 ? "FULL" : "UP";
    const asp = bar(craft.throttle, 8, "█", "░");
    const spdBar = bar(Math.min(1, (craft.airspeed || 0) / 70), 8, "█", "░");
    const stars = save.starsTotal ?? save.stars ?? 0;
    const photos = (save.photos && save.photos.length) || 0;
    const planeName = (craft.def && craft.def.name) || (craft.id || "TRAINER").toUpperCase();

    stats.textContent = "AEROPOSTALE ISLAND\n★ " + String(stars).padStart(3) + " / 180\n○ " + String(photos).padStart(2) + " / 50 (Treasures)\n★ " + planeName + "  Lv.2";
    comp.textContent = compassStrip(craft.heading, hdg);

    const wx = weather.id === "storm" ? "STORM" : "CLEAR";
    const windLine = String(Math.round(weather.windDeg) % 360).padStart(3, "0") + "° @ " + Math.round(weather.windKt) + " kt";

    miss.style.display = "";
    if (mission && mission.active && !mission.result) {
      const m = mission.active;
      const klass = (m.klass || "").toUpperCase();
      const lines = [];
      if (m.activity === "rings") {
        lines.push("RING COURSE  (" + (klass || "PRO") + ")");
        lines.push("> Fly through all rings!");
        lines.push("> Rings: " + mission.ringsPassed + "/" + m.rings.length);
        lines.push("> Time: " + formatTime(mission.t));
        lines.push("> Wind: " + windLine);
        if (m.weather || weather.id === "storm") lines.push("> Weather: " + wx);
      } else if (m.activity === "landing") {
        const rwy = (m.target && m.target.heading > 2) ? "27" : "09";
        const typ = (m.target && m.target.type === "runway") ? rwy : String((m.target && m.target.type) || "").toUpperCase();
        lines.push("LANDING  (" + (klass || "PRO") + ")");
        lines.push("> Land at the airport.");
        lines.push("> Runway: " + typ);
        lines.push("> Wind: " + windLine);
        lines.push("> Grade: " + (mission.message || "—"));
      } else if (m.activity === "balloons") {
        lines.push(m.title);
        lines.push("> " + mission.popped + "/" + mission.balloons.length + "   " + formatTime(Math.max(0, (m.timeLimit || 90) - mission.t)));
      } else if (m.activity === "photo") {
        lines.push(m.title);
        lines.push(mission.photoReady ? "> IN FRAME — ACTION" : "> find the framing ring");
      } else {
        lines.push(m.title);
      }
      miss.textContent = lines.join("\n");
    } else if (mission && mission.result) {
      miss.textContent = mission.message || "";
    } else {
      miss.textContent = "FREE FLIGHT\n> " + hourToClock(hour) + "\n> Wind: " + windLine + "\n> Weather: " + wx;
    }

    const landing = mission && mission.active && mission.active.activity === "landing" && !mission.result;
    const stormy = weather.id === "storm" || (mission && mission.active && mission.active.weather === "storm");
    if (landing) {
      flight.textContent = "SPD " + String(spd).padStart(3) + " kt   ALT " + String(altFt).padStart(4) + " ft   " + attitude(craft) + "   V/S " + vsS + " fpm   FLAPS " + flaps + "   GEAR " + gear;
    } else if (stormy) {
      flight.textContent = "SPD " + String(spd).padStart(3) + " " + spdBar + "   ALT " + String(altFt).padStart(4) + " ft   " + attitude(craft) + "   THR " + asp + " " + String(thr).padStart(3) + "%   WIND " + windLine;
    } else {
      flight.textContent = "SPD " + String(spd).padStart(3) + " " + spdBar + "   ALT " + String(altFt).padStart(4) + " ft   " + attitude(craft) + "   THR " + asp + " " + String(thr).padStart(3) + "%   " + planeIcon(craft);
    }

    msg.textContent = craft.crashed ? "RECOVERING…" : ((mission && mission.result) ? mission.message : "");

    if (!portrait && !mobileChrome && window.innerWidth > 900 && window.innerHeight > 560) {
      mmap.classList.remove("hidden");
      mmap.textContent = "MAP      N\n" + drawMini(craft);
    } else mmap.classList.add("hidden");

    const showPhoto = mission && mission.active && mission.active.activity === "photo" && !mission.result;
    if (showPhoto) {
      photo.classList.remove("hidden");
      aux.classList.add("hidden");
      const sub = (mission.active.subject && mission.active.subject.name) || "subject";
      photo.classList.toggle("ready", !!mission.photoReady);
      photo.textContent = "PHOTO\n┌────────────┐\n│ " + String(sub).slice(0, 10).padEnd(10) + " │\n│ " + (mission.photoReady ? "  IN FRAME  " : "  find it   ") + " │\n└────────────┘";
    } else if (landing) {
      photo.classList.add("hidden");
      aux.classList.remove("hidden");
      const a = landingAssist(craft, mission.active);
      const glideS = (a.glide >= 0 ? "+" : "") + a.glide.toFixed(1);
      const latS = (a.lat >= 0 ? "+" : "") + a.lat.toFixed(1);
      const etaS = a.eta > 0 ? (Math.round(a.eta) + " s") : "—";
      aux.textContent = "LANDING ASSIST\n> Glide: " + glideS + "°\n> Center: " + latS + " m\n> Speed: " + Math.round(a.spd) + " kt\nTOUCHDOWN    ~" + etaS;
    } else if (stormy && !portrait) {
      photo.classList.add("hidden");
      aux.classList.remove("hidden");
      const turb = weather.turbulence > 0.55 ? "High" : weather.turbulence > 0.2 ? "Med" : "Low";
      const rain = weather.rain > 0.6 ? "Heavy" : weather.rain > 0.2 ? "Light" : "None";
      aux.textContent = "WEATHER\n> " + wx + "\n> Rain: " + rain + "\n> Visibility: " + Number(weather.visibility).toFixed(1) + " km\n> Turbulence: " + turb;
    } else {
      photo.classList.add("hidden");
      aux.classList.add("hidden");
      photo.classList.remove("ready");
    }

    mobile.layout(portrait, state.screen === "fly");
    mobile.setThrottle(craft.throttle);
  }

  function compassStrip(hdg, deg) {
    const n = wrapPos(headingToNorth(hdg) / (Math.PI * 2));
    const width = 29;
    const span = 120;
    let s = "";
    for (let i = 0; i < width; i++) {
      const ang = ((n * 360 - span / 2) + (i / (width - 1)) * span + 360) % 360;
      const near = (d) => Math.min(Math.abs(ang - d), 360 - Math.abs(ang - d)) < (span / width) * 0.7;
      if (near(0)) s += "N";
      else if (near(90)) s += "E";
      else if (near(180)) s += "S";
      else if (near(270)) s += "W";
      else s += (i % 2 === 0) ? "·" : " ";
    }
    return `⟨${s}⟩  ${String(deg).padStart(3, "0")}° ${compass(hdg)}`;
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
    const spd = (craft.airspeed || 0) * 1.94384;
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

  function drawMini(craft) {
    const W = 16, H = 14;
    const rows = [];
    const sx = (x) => Math.round((x + 1500) / 3000 * (W - 1));
    const sz = (z) => Math.round((1 - (z + 1500) / 3000) * (H - 1));
    const g = Array.from({ length: H }, () => Array.from({ length: W }, () => "·"));
    const mark = (x, z, ch) => {
      const i = sx(x), j = sz(z);
      if (i >= 0 && i < W && j >= 0 && j < H) g[j][i] = ch;
    };
    mark(0, -1100, "A");
    mark(1180, -1080, "L");
    mark(0, 200, "^");
    mark(40, 1240, "C");
    mark(-960, 180, "W");
    mark(720, 640, "F");
    mark(1480, -360, "n");
    mark(craft.pos.x, craft.pos.z, "@");
    return g.map((r) => r.join(" ")).join("\n");
  }

  function isPortrait() { return window.innerHeight > window.innerWidth; }

  function showIosToast() {
    // no-op, already on title
  }

  return {
    setLoad, showTitle, showHUD, showPause, showResult, showMissions, showHangar, showOptions, showAlbum, showBrief,
    updateHUD, closeOverlay, menuMove, menuOk, isPortrait, state, wrap, loading, hud, overlay, mobile,
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
