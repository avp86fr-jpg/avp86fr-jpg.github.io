import { LANDMARKS } from "../core/config.js";

const L = LANDMARKS;

function ring(x, y, z, r = 14, moving = false, amp = 0, axis = "y") {
  return { x, y, z, r, moving, amp, axis, speed: 0.6 };
}

function pathRings(pts, r) {
  return pts.map((p) => ring(p[0], p[1], p[2], p[3] ?? r, !!p[4], p[5] || 0, p[6] || "y"));
}

export const ACTIVITIES = [
  { id: "rings", name: "RING COURSES", blurb: "Fly the glowing rings in order." },
  { id: "landing", name: "LANDINGS", blurb: "Bring her in clean. Graded on speed, line and stop." },
  { id: "balloons", name: "BALLOON POP", blurb: "Burst the drifting balloons before the clock runs out." },
  { id: "photo", name: "PHOTO FLIGHTS", blurb: "Frame the landmark and take the shot." },
];

export const CLASSES = ["beginner", "pro"];

export const MISSIONS = [
  // ---------- RINGS BEGINNER ----------
  {
    id: "rings-b1", activity: "rings", klass: "beginner", title: "Airport Circuit",
    brief: "A gentle loop of six large rings around Harbor Airport. Watch your height and keep the wings level.",
    hour: 10, plane: "trainer",
    start: { x: -200, y: 45, z: -1100, heading: 0, speed: 44 },
    timeLimits: [90, 70, 55],
    rings: pathRings([
      [80, 40, -1100, 16], [200, 50, -980, 16], [40, 55, -860, 16],
      [-200, 50, -980, 16], [-200, 45, -1200, 16], [0, 40, -1220, 16],
    ], 16),
  },
  {
    id: "rings-b2", activity: "rings", klass: "beginner", title: "Coast Run",
    brief: "Follow the south beach from the lagoon to the lighthouse cape. Stay low and enjoy the water.",
    hour: 9, plane: "trainer",
    start: { x: -750, y: 40, z: -1240, heading: 0, speed: 44 },
    timeLimits: [100, 80, 65],
    rings: pathRings([
      [-600, 35, -1240, 16], [-300, 32, -1320, 16], [0, 30, -1360, 16],
      [280, 35, -1400, 16], [600, 40, -1320, 16], [900, 50, -1200, 16], [1100, 55, -1100, 16],
    ], 16),
  },
  {
    id: "rings-b3", activity: "rings", klass: "beginner", title: "Town Tour",
    brief: "A sightseeing hop over Harbor Town, the chapel and the docks.",
    hour: 16.5, plane: "trainer",
    start: { x: 40, y: 45, z: -1100, heading: Math.PI, speed: 44 },
    timeLimits: [85, 68, 54],
    rings: pathRings([
      [-80, 40, -1100, 15], [-200, 45, -1000, 15], [-310, 50, -940, 15],
      [-180, 40, -1180, 15], [-40, 45, -1220, 15], [80, 40, -1100, 15],
    ], 15),
  },
  {
    id: "rings-b4", activity: "rings", klass: "beginner", title: "Lighthouse Loop",
    brief: "Circle Cinder Cape Light and come back along the rocks.",
    hour: 17, plane: "trainer",
    start: { x: 800, y: 55, z: -1000, heading: 0.3, speed: 44 },
    timeLimits: [95, 75, 60],
    rings: pathRings([
      [640, 50, -980, 15], [720, 55, -900, 15], [820, 60, -1020, 15],
      [720, 55, -1180, 15], [600, 50, -1140, 15], [640, 45, -1040, 15],
    ], 15),
  },
  // ---------- RINGS PRO ----------
  {
    id: "rings-p1", activity: "rings", klass: "pro", title: "Volcano Climb",
    brief: "A rising spiral up Mount Glyph. Mind the crater rim on the last gates.",
    hour: 11, plane: "trainer",
    start: { x: 200, y: 90, z: -80, heading: 1.2, speed: 44 },
    timeLimits: [130, 100, 80],
    rings: pathRings([
      [200, 60, 0, 13], [280, 100, 120, 13], [180, 150, 280, 13],
      [0, 200, 360, 12], [-160, 240, 260, 12], [-40, 280, 210, 12], [50, 315, 170, 12],
    ], 12),
  },
  {
    id: "rings-p2", activity: "rings", klass: "pro", title: "Mistfall Run",
    brief: "Thread the valley, dive past the falls and slip under the stone bridge.",
    hour: 8, plane: "trainer",
    start: { x: 320, y: 120, z: 560, heading: 0.4, speed: 44 },
    timeLimits: [100, 80, 64],
    rings: pathRings([
      [400, 110, 600, 12], [620, 100, 640, 11], [720, 80, 640, 12],
      [780, 48, 520, 12], [980, 42, 440, 13], [1240, 40, 340, 13],
    ], 12),
  },
  {
    id: "rings-p3", activity: "rings", klass: "pro", title: "Mill Waltz",
    brief: "Some of these rings drift on the west wind. Stay light on the stick.",
    hour: 15, plane: "trainer",
    start: { x: -400, y: 90, z: 40, heading: -0.8, speed: 44 },
    timeLimits: [105, 85, 68],
    rings: pathRings([
      [-420, 70, 80, 11, 1, 18, "x"], [-560, 80, 20, 11], [-620, 90, 120, 11, 1, 16, "y"],
      [-480, 85, 80, 11], [-400, 75, 140, 11, 1, 20, "z"], [-520, 70, -40, 11],
    ], 11),
  },
  {
    id: "rings-p4", activity: "rings", klass: "pro", title: "Arch & Isle",
    brief: "Tight rings through the sea arch, then a hop to One-Palm Isle.",
    hour: 12, plane: "trainer",
    start: { x: 700, y: 45, z: -400, heading: 0.2, speed: 44 },
    timeLimits: [100, 78, 62],
    rings: pathRings([
      [760, 40, -500, 11], [820, 22, -620, 9], [700, 30, -800, 11],
      [500, 35, -1400, 11], [300, 30, -1700, 11], [180, 22, -1880, 10],
    ], 11),
  },

  {
    id: "rings-a1", activity: "rings", klass: "ace", title: "Storm Circuit",
    brief: "A ring course in a heavy storm. Watch the wind and the turbulence.",
    hour: 11, plane: "trainer", weather: "storm",
    start: { x: 80, y: 130, z: -1680, heading: 1.5708, speed: 46 },
    timeLimits: [140, 110, 90],
    rings: pathRings([
      [80, 120, -1320, 18], [200, 110, -1100, 16], [40, 130, -860, 16],
      [-160, 140, -700, 16], [0, 160, -400, 16], [80, 130, -200, 16],
      [200, 120, 40, 16], [40, 140, 200, 16],
    ], 16),
  },

  // ---------- LANDINGS BEGINNER ----------
  {
    id: "land-b1", activity: "landing", klass: "beginner", title: "Main Runway 09",
    brief: "Approach from the west and land on Harbor Airport's long runway. Gear down, easy flare.",
    hour: 10, plane: "trainer",
    start: { x: -900, y: 80, z: -1100, heading: 0, speed: 44 },
    target: { type: "runway", x: 0, z: -1100, heading: 0, len: 700, wid: 36 },
  },
  {
    id: "land-b2", activity: "landing", klass: "beginner", title: "Sunny Beach",
    brief: "Settle onto the firm sand south of town. Keep the nose high and the vertical speed kind.",
    hour: 9, plane: "trainer",
    start: { x: -400, y: 70, z: -1500, heading: 0.3, speed: 42 },
    target: { type: "beach", x: 80, z: -1280, heading: 0.2, len: 260, wid: 50 },
  },
  {
    id: "land-b3", activity: "landing", klass: "beginner", title: "Ridge Strip",
    brief: "A short grass strip on the north-west cliff. Line up early — there's no go-around room.",
    hour: 15, plane: "trainer",
    start: { x: -200, y: 160, z: 1120, heading: Math.PI, speed: 42 },
    target: { type: "grass", x: -820, z: 1120, heading: Math.PI, len: 240, wid: 22 },
  },
  {
    id: "land-b4", activity: "landing", klass: "beginner", title: "Lagoon Kiss",
    brief: "Take the Lagoon Skimmer and settle on the quiet lagoon. Floats down, gentle splash.",
    hour: 11, plane: "seaplane",
    start: { x: -1100, y: 60, z: -900, heading: 0.6, speed: 38 },
    target: { type: "lagoon", x: -740, z: -1120, heading: 0.4, len: 200, wid: 80 },
  },
  // ---------- LANDINGS PRO ----------
  {
    id: "land-p1", activity: "landing", klass: "pro", title: "Short Field 27",
    brief: "Land east-to-west and stop before the hangar. Precision counts.",
    hour: 16, plane: "trainer",
    start: { x: 900, y: 70, z: -1100, heading: Math.PI, speed: 44 },
    target: { type: "runway", x: -80, z: -1100, heading: Math.PI, len: 380, wid: 30, stopX: -200, stopZ: -1100, stopR: 80 },
  },
  {
    id: "land-p2", activity: "landing", klass: "pro", title: "Cape Sands",
    brief: "A narrower beach near the lighthouse rocks. Watch the cape on short final.",
    hour: 17.2, plane: "trainer",
    start: { x: 1500, y: 80, z: -800, heading: -2.2, speed: 42 },
    target: { type: "beach", x: 720, z: -1180, heading: -2.0, len: 180, wid: 28 },
  },
  {
    id: "land-p3", activity: "landing", klass: "pro", title: "Ridge Tight",
    brief: "Same grass strip, lower and slower. A firm arrival still scores, a bounce does not.",
    hour: 8, plane: "trainer",
    start: { x: -400, y: 130, z: 1280, heading: -2.6, speed: 40 },
    target: { type: "grass", x: -820, z: 1120, heading: Math.PI, len: 180, wid: 16 },
  },
  {
    id: "land-p4", activity: "landing", klass: "pro", title: "Lagoon Center",
    brief: "Put the skimmer in the very middle of the lagoon and come to a stop. No beach taxi.",
    hour: 12, plane: "seaplane",
    start: { x: -400, y: 70, z: -900, heading: -2.4, speed: 40 },
    target: { type: "lagoon", x: -740, z: -1120, heading: -2.4, len: 120, wid: 50, stopX: -740, stopZ: -1120, stopR: 40 },
  },

  // ---------- BALLOONS BEGINNER ----------
  {
    id: "bal-b1", activity: "balloons", klass: "beginner", title: "Apron Fest",
    brief: "Eight balloons over the airport. Ninety seconds. Stay in the pattern.",
    hour: 10, plane: "trainer", start: { x: 0, y: 60, z: -1100, heading: 0, speed: 42 },
    timeLimit: 90, count: 8,
    area: { cx: 0, cz: -1100, r: 280, y0: 30, y1: 90 },
  },
  {
    id: "bal-b2", activity: "balloons", klass: "beginner", title: "Pier Party",
    brief: "Balloons along the beach and the long pier.",
    hour: 16, plane: "trainer", start: { x: 180, y: 50, z: -1360, heading: 0, speed: 42 },
    timeLimit: 95, count: 9,
    area: { cx: 180, cz: -1360, r: 320, y0: 20, y1: 80 },
  },
  {
    id: "bal-b3", activity: "balloons", klass: "beginner", title: "Harbor Day",
    brief: "Pop them over the town roofs and the docks. Mind the tower.",
    hour: 11, plane: "trainer", start: { x: -220, y: 55, z: -1040, heading: 0, speed: 42 },
    timeLimit: 90, count: 9,
    area: { cx: -220, cz: -1040, r: 260, y0: 25, y1: 85 },
  },
  {
    id: "bal-b4", activity: "balloons", klass: "beginner", title: "Cape Dots",
    brief: "A string of balloons around Cinder Cape Light.",
    hour: 17, plane: "trainer", start: { x: 720, y: 70, z: -1020, heading: 0, speed: 42 },
    timeLimit: 95, count: 8,
    area: { cx: 720, cz: -1020, r: 260, y0: 30, y1: 100 },
  },
  // ---------- BALLOONS PRO ----------
  {
    id: "bal-p1", activity: "balloons", klass: "pro", title: "Crater Circus",
    brief: "Balloons on the volcano shoulders. Thermals will try to help — and hinder.",
    hour: 12, plane: "trainer", start: { x: 0, y: 330, z: 200, heading: 0, speed: 44 },
    timeLimit: 100, count: 10,
    area: { cx: 0, cz: 200, r: 360, y0: 120, y1: 340 },
  },
  {
    id: "bal-p2", activity: "balloons", klass: "pro", title: "Valley Drift",
    brief: "Tight air over Mistfall. Don't clip the cliffs.",
    hour: 8, plane: "trainer", start: { x: 300, y: 130, z: 400, heading: 0.3, speed: 44 },
    timeLimit: 95, count: 10,
    area: { cx: 340, cz: 460, r: 300, y0: 50, y1: 180 },
  },
  {
    id: "bal-p3", activity: "balloons", klass: "pro", title: "Ruin Rise",
    brief: "North cliffs and the castle ruins. Wind along the ridge.",
    hour: 16.5, plane: "trainer", start: { x: 280, y: 150, z: 780, heading: 0, speed: 44 },
    timeLimit: 95, count: 10,
    area: { cx: 280, cz: 780, r: 300, y0: 70, y1: 180 },
  },
  {
    id: "bal-p4", activity: "balloons", klass: "pro", title: "Island Sweep",
    brief: "A mixed circuit: mills, lagoon and the sea arch. Keep moving.",
    hour: 11, plane: "trainer", start: { x: -480, y: 90, z: 80, heading: 0, speed: 44 },
    timeLimit: 110, count: 12,
    spots: [
      [-480, 90, 80], [-740, 40, -1120], [0, 60, -1100],
      [720, 70, -1020], [820, 40, -620], [180, 30, -1880],
      [280, 130, 780], [320, 80, 480], [-820, 110, 1120],
      [0, 160, 200], [-260, 50, -980], [-200, 40, -1280],
    ],
  },

  // ---------- PHOTO BEGINNER ----------
  {
    id: "pho-b1", activity: "photo", klass: "beginner", title: "Airport Portrait",
    brief: "Photograph Harbor Airport from the south, hangar in frame.",
    hour: 10, plane: "trainer",
    start: { x: 80, y: 90, z: -2050, heading: 1.5708, speed: 36 },
    subject: { x: 0, y: 8, z: -1100, name: "Harbor Airport" },
    view: { x: 80, y: 70, z: -1450, maxDist: 520, minDist: 80, facingDot: 0.35 },
  },
  {
    id: "pho-b2", activity: "photo", klass: "beginner", title: "The Light",
    brief: "Frame Cinder Cape Light with the sea behind it.",
    hour: 17.4, plane: "trainer",
    start: { x: 520, y: 95, z: -1480, heading: 0.4, speed: 36 },
    subject: { x: L.lighthouse.x, y: 40, z: L.lighthouse.z, name: "Cinder Cape Light" },
    view: { x: 980, y: 80, z: -1300, maxDist: 480, minDist: 60, facingDot: 0.3 },
  },
  {
    id: "pho-b3", activity: "photo", klass: "beginner", title: "Harbor Boats",
    brief: "A postcard of the docks and the little fishing boats.",
    hour: 9, plane: "trainer",
    start: { x: -40, y: 80, z: -1950, heading: 1.5708, speed: 36 },
    subject: { x: L.harbor.x, y: 4, z: L.harbor.z, name: "Harbor" },
    view: { x: -40, y: 60, z: -1400, maxDist: 420, minDist: 50, facingDot: 0.3 },
  },
  {
    id: "pho-b4", activity: "photo", klass: "beginner", title: "Long Pier",
    brief: "Shoot the pier stretching into the turquoise water.",
    hour: 16, plane: "trainer",
    start: { x: 500, y: 75, z: -2150, heading: 1.5708, speed: 36 },
    subject: { x: L.pier.x, y: 4, z: L.pier.z, name: "Long Pier" },
    view: { x: 500, y: 55, z: -1600, maxDist: 420, minDist: 50, facingDot: 0.3 },
  },
  // ---------- PHOTO PRO ----------
  {
    id: "pho-p1", activity: "photo", klass: "pro", title: "Crater Eye",
    brief: "Photograph the crater lake from above the rim.",
    hour: 12, plane: "trainer",
    start: { x: 420, y: 380, z: -80, heading: 2.7, speed: 36 },
    subject: { x: 0, y: 240, z: 200, name: "Crater Lake" },
    view: { x: 80, y: 340, z: 80, maxDist: 280, minDist: 40, facingDot: 0.45 },
  },
  {
    id: "pho-p2", activity: "photo", klass: "pro", title: "Mistfall",
    brief: "Catch the waterfall and the stone bridge in one frame.",
    hour: 8.5, plane: "trainer",
    start: { x: 1280, y: 120, z: 200, heading: 2.6, speed: 36 },
    subject: { x: L.waterfall.x, y: 50, z: L.waterfall.z, name: "Mistfall" },
    view: { x: 900, y: 90, z: 420, maxDist: 320, minDist: 40, facingDot: 0.4 },
  },
  {
    id: "pho-p3", activity: "photo", klass: "pro", title: "Cliff Ruins",
    brief: "The castle ruins on the north cliff, late light.",
    hour: 17, plane: "trainer",
    start: { x: -200, y: 210, z: 780, heading: 0.5, speed: 36 },
    subject: { x: L.castle.x, y: 120, z: L.castle.z, name: "Cliff Ruins" },
    view: { x: 200, y: 180, z: 1000, maxDist: 360, minDist: 50, facingDot: 0.4 },
  },
  {
    id: "pho-p4", activity: "photo", klass: "pro", title: "Sea Arch",
    brief: "Frame the rock arch with One-Palm Isle in the distance if you can.",
    hour: 15, plane: "trainer",
    start: { x: 900, y: 80, z: -850, heading: 0.55, speed: 36 },
    subject: { x: L.arch.x, y: 16, z: L.arch.z, name: "Sea Arch" },
    view: { x: 1280, y: 50, z: -600, maxDist: 320, minDist: 30, facingDot: 0.4 },
  },
];

export function missionsBy(activity, klass) {
  return MISSIONS.filter((m) => m.activity === activity && m.klass === klass);
}

export function getMission(id) {
  return MISSIONS.find((m) => m.id === id);
}

export const MISSION_COUNT = MISSIONS.length;
