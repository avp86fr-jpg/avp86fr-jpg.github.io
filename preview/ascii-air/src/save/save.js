import { DEFAULT_SETTINGS, PLANES, STAR_UNLOCKS } from "../core/config.js";

const KEY = "ascii-air-m1-v1";

export function defaultSave() {
  return {
    stars: {},          // missionId -> 0-3
    records: {},        // missionId -> { time, grade, score }
    unlocked: { trainer: true, seaplane: false, glider: false },
    photos: [],         // { id, title, data, when }
    settings: { ...DEFAULT_SETTINGS },
    totalStars: 0,
    plane: "trainer",
    seenIntro: false,
  };
}

export function loadSave() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultSave();
    const d = JSON.parse(raw);
    const base = defaultSave();
    return {
      ...base,
      ...d,
      settings: { ...DEFAULT_SETTINGS, ...(d.settings || {}) },
      unlocked: { ...base.unlocked, ...(d.unlocked || {}) },
      stars: d.stars || {},
      records: d.records || {},
      photos: Array.isArray(d.photos) ? d.photos.slice(0, 24) : [],
    };
  } catch {
    return defaultSave();
  }
}

export function persist(save) {
  try { localStorage.setItem(KEY, JSON.stringify(save)); } catch {}
}

export function totalStars(save) {
  let n = 0;
  for (const k of Object.keys(save.stars)) n += save.stars[k] | 0;
  save.totalStars = n;
  return n;
}

export function applyUnlocks(save) {
  const n = totalStars(save);
  if (n >= STAR_UNLOCKS.seaplane) save.unlocked.seaplane = true;
  if (n >= STAR_UNLOCKS.glider) save.unlocked.glider = true;
  return n;
}

export function awardStars(save, missionId, stars, record = {}) {
  const prev = save.stars[missionId] | 0;
  if (stars > prev) save.stars[missionId] = stars;
  const rec = save.records[missionId] || {};
  save.records[missionId] = { ...rec, ...record, stars: Math.max(prev, stars) };
  applyUnlocks(save);
  persist(save);
  return (save.stars[missionId] | 0) - prev;
}

export function savePhoto(save, photo) {
  save.photos.unshift(photo);
  if (save.photos.length > 24) save.photos.length = 24;
  persist(save);
}

export function saveSettings(save, settings) {
  save.settings = { ...save.settings, ...settings };
  persist(save);
}
