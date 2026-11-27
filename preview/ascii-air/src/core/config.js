/** AEROPOSTALE AIR — global configuration. */

export const VERSION = "m1.0";
export const TITLE = "AEROPOSTALE AIR";

export const WORLD = {
  size: 3000,          // island extent, meters (approx 3×3 km)
  waterLevel: 0,
  maxHeight: 320,
  gravity: 9.81,
  airDensity: 1.2,
};

export const TIME = {
  startHour: 10.0,
  // Slow free-flight cycle: 24h in 24 real minutes (1h = 60s). Missions freeze time.
  freeFlightHoursPerSecond: 1 / 60,
};

export const PHYS = {
  hz: 120,
  dt: 1 / 120,
};

export const CAM = {
  fov: 55,
  fovPortrait: 62,
  near: 0.8,
  far: 6200,
  chaseDist: 26,
  chaseHeight: 9.5,
  chaseLag: 4.2,
};

/** Material IDs written to the ID target (0–255). */
export const MAT = {
  GENERIC: 0,
  SEA: 1,
  SAND: 2,
  GRASS: 3,
  FOREST: 4,
  ROCK: 5,
  SNOW: 6,
  CLOUD: 7,
  BUILDING: 8,
  ROAD: 9,
  PLANE: 10,
  HERO: 11,
  WOOD: 12,
  ROOF: 13,
  METAL: 14,
  FOLIAGE: 15,
  WATER_DEEP: 16,
  FOAM: 17,
  LIGHT: 18,
  BALLOON: 19,
  RING: 20,
  SKY: 21,
  DIRT: 22,
  RUNWAY: 23,
  WATERFALL: 24,
};

export const MAT_COUNT = 25;

export const CHAR_SIZE = {
  // CSS pixels per cell before DPR tightening. Medium PC at 1920 is ~213×120 (~1.33× denser than 160×90).
  large:  { desktop: 9, mobile: 8 },
  medium: { desktop: 6,  mobile: 6 },
  fine:   { desktop: 5,  mobile: 5.5 },
};

export const GRID_CAPS = {
  desktop: { cols: 320, rows: 180 },
  mobile:  { cols: 180, rows: 140 },
};

export const QUALITY = {
  low:    { trees: 0.40, clouds: 0.45, houses: 0.40, bloom: false, shadows: false, particles: 0.3, resScale: 0.75, terrainN: 192 },
  medium: { trees: 0.85, clouds: 0.90, houses: 0.85, bloom: true,  shadows: false, particles: 0.7, resScale: 1,    terrainN: 256 },
  high:   { trees: 1,    clouds: 1,    houses: 1,    bloom: true,  shadows: true,  particles: 1,   resScale: 1,    terrainN: 256 },
};

export const STAR_UNLOCKS = {
  seaplane: 6,
  glider: 14,
  colorSchemes: 4,
  timeControl: 10,
};

export const PLANES = {
  trainer: {
    id: "trainer",
    name: "COURRIER C-14",
    unlocked: true,
    mass: 680,
    wingArea: 16.4,
    wingspan: 10.2,
    maxThrust: 3200,
    cd0: 0.028,
    kInduced: 0.048,
    clMax: 1.55,
    stallAoA: 0.26,
    rollRate: 1.7,
    pitchRate: 1.35,
    yawRate: 0.9,
    cruise: 46,
    stallSpeed: 22,
    maxSpeed: 68,
    gearHeight: 1.15,
    waterCapable: false,
    engine: true,
    color: "#c01418",
    accent: "#f4ead0",
    engineSound: "engine_trainer",
  },
  seaplane: {
    id: "seaplane",
    name: "LAGOON SKIMMER",
    unlocked: false,
    mass: 820,
    wingArea: 18.5,
    wingspan: 12.0,
    maxThrust: 3400,
    cd0: 0.036,
    kInduced: 0.05,
    clMax: 1.6,
    stallAoA: 0.27,
    rollRate: 1.45,
    pitchRate: 1.2,
    yawRate: 0.85,
    cruise: 42,
    stallSpeed: 21,
    maxSpeed: 62,
    gearHeight: 1.6,
    waterCapable: true,
    engine: true,
    color: "#eef6ff",
    accent: "#2a6cb6",
    engineSound: "engine_seaplane",
  },
  glider: {
    id: "glider",
    name: "RIDGE WHISPER",
    unlocked: false,
    mass: 380,
    wingArea: 14.8,
    wingspan: 15.4,
    maxThrust: 0,
    cd0: 0.014,
    kInduced: 0.032,
    clMax: 1.45,
    stallAoA: 0.24,
    rollRate: 1.5,
    pitchRate: 1.15,
    yawRate: 0.7,
    cruise: 34,
    stallSpeed: 18,
    maxSpeed: 58,
    gearHeight: 0.7,
    waterCapable: false,
    engine: false,
    color: "#fff6e8",
    accent: "#ef8b2c",
    engineSound: null,
  },
};

export const LANDING = {
  perfectVSpeed: 1.6,   // m/s down
  goodVSpeed: 3.2,
  roughVSpeed: 5.5,
  crashVSpeed: 9.0,
  maxBank: 0.35,
  maxPitch: 0.28,
  alignGood: 0.22,      // radians yaw vs runway
  alignOk: 0.45,
};

export const DEFAULT_SETTINGS = {
  glow: 0.7,
  assist: "full",          // full | light | off
  invertPitch: false,
  sensitivity: 0.7,
  gyroSensitivity: 0.7,
  motionComfort: false,
  highContrast: false,
  colorblind: false,
  masterVol: 0.85,
  musicVol: 0.55,
  sfxVol: 0.7,
  quality: "medium",
  fpsCap: 60,
  autoThrottle: true,
  gyroEnabled: false,
  rumble: true,
  uiTypeSounds: false,
};

export const KEYS = {
  // Clean scheme: arrows (and A/D) fly the plane; W/S and Shift/Ctrl are the throttle lever.
  pitchUp: ["ArrowUp"],
  pitchDown: ["ArrowDown"],
  rollLeft: ["KeyA", "ArrowLeft"],
  rollRight: ["KeyD", "ArrowRight"],
  yawLeft: ["KeyQ"],
  yawRight: ["KeyE"],
  throttleUp: ["KeyW", "ShiftLeft", "ShiftRight"],
  throttleDown: ["KeyS", "ControlLeft", "ControlRight"],
  brake: ["KeyX", "KeyZ"],
  action: ["Space"],
  camera: ["KeyC"],
  map: ["KeyM"],
  pause: ["Escape"],
  gear: ["KeyG"],
  fullscreen: ["KeyF"],
  look: ["KeyV"],
  debug: ["Backquote"],
};

export const HERO_VIEW = {
  // Postcard + a true rear-3/4 of the plane (~22° down, ~21° side).
  // shiftY is a film-gate offset (fraction of frame) so the horizon can
  // stay high while the camera sits above the plane.
  plane: { x: 55, y: 54, z: -1540 },
  look:  { x: 8, y: 22, z: -820 },
  dist: 41,
  height: 16.2,
  side: 18.0,
  fov: 60,
  shiftY: 0.16,
};

export const SPAWN = {
  airport: { x: -280, y: 6, z: -1100, heading: 0 }, // heading 0 = +X (east) along runway
  lagoon: { x: -720, y: 4, z: -1080, heading: 0.4 },
  cliff: { x: -800, y: 96, z: 1100, heading: 2.4 },
};

export const LANDMARKS = {
  airport:      { x: 0,    z: -1100, name: "Harbor Airport" },
  hangar:       { x: 100,  z: -1040, name: "Hangar" },
  tower:        { x: 160,  z: -1048, name: "Control Tower" },
  town:         { x: 200,  z: -1000, name: "Harbor Town" },
  church:       { x: 240,  z: -960,  name: "Chapel" },
  market:       { x: 175,  z: -980,  name: "Market" },
  harbor:       { x: 180,  z: -1220, name: "Harbor" },
  lighthouse:   { x: -170, z: -1190, name: "Cinder Cape Light" },
  pier:         { x: 200,  z: -1280, name: "Long Pier" },
  beach:        { x: 40,   z: -1220, name: "Sunny Beach" },
  lagoon:       { x: -740, z: -1120, name: "Quiet Lagoon" },
  wreck:        { x: -820, z: -1680, name: "Shallow Wreck" },
  volcano:      { x: 0,    z: 200,   name: "Mount Glyph" },
  crater:       { x: 0,    z: 200,   name: "Crater Lake" },
  waterfall:    { x: 130,  z: -920,  name: "Mistfall" },
  bridge:       { x: -40,  z: -960,  name: "Stone Bridge" },
  cave:         { x: 30,   z: -800,  name: "Fall Cave" },
  castle:       { x: -280, z: 40,    name: "Cliff Ruins" },
  windmills:    { x: 260,  z: -900,  name: "Mill Hills" },
  grassStrip:   { x: -820, z: 1120,  name: "Ridge Strip" },
  palmIslet:    { x: 180,  z: -1880, name: "One-Palm Isle" },
  arch:         { x: -210, z: -1250, name: "Sea Arch" },
};

export const AUDIO_FILES = [
  "music_day", "music_night",
  "engine_trainer", "engine_seaplane",
  "wind", "waves", "thermal",
  "ring", "balloon_pop", "shutter", "gear", "stall",
  "touchdown", "splash", "success", "crash",
  "ui_move", "ui_ok", "seagull", "tow_release", "photo_ok", "star",
];
