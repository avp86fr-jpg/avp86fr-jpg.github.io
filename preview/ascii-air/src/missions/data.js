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
  { id: "mail", name: "THE MAIL LINE", blurb: "Pick up a bag at the hangar and drop it at the island posts." },
  { id: "storm", name: "STORM CROSSING", blurb: "Follow the beacons through the gale. Some runs finish on the ridge strip." },
  { id: "night", name: "NIGHT MAIL", blurb: "Night drops, the cape beam, a flare path on runway 09, and a night photo." },
  { id: "rescue", name: "RESCUE & RACE", blurb: "Aid the wreck and steamer, then race pylons around the cape, arch, volcano and viaduct." },
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
    hour: 6.8, plane: "trainer",
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
    start: { x: -280, y: 55, z: -1480, heading: -0.3, speed: 44 },
    timeLimits: [95, 75, 60],
    rings: pathRings([
      [-400, 50, -1400, 15], [-520, 55, -1260, 15], [-620, 60, -1300, 15],
      [-560, 50, -1180, 15], [-420, 50, -1200, 15], [-480, 45, -1320, 15],
    ], 15),
  },
  {
    id: "rings-b5", activity: "rings", klass: "beginner", title: "Isle Hop",
    brief: "A sunny hop from the harbour out to South Mail Cay, then across the water to Cedar Isle and home along the east shore.",
    hour: 16.5, plane: "trainer",
    start: { x: 80, y: 50, z: -1180, heading: -0.5, speed: 44 },
    timeLimits: [160, 125, 95],
    rings: pathRings([
      [80, 45, -1400, 16], [180, 40, -1880, 15], [260, 32, -2280, 16],
      [800, 50, -1400, 16], [1600, 60, -700, 16], [1980, 70, -380, 16],
      [1200, 55, -900, 16], [400, 45, -1100, 16],
    ], 16),
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
    start: { x: 80, y: 140, z: -200, heading: -0.2, speed: 44 },
    timeLimits: [100, 80, 64],
    rings: pathRings([
      [60, 130, -280, 12], [50, 110, -400, 11], [40, 90, -520, 12],
      [10, 55, -610, 12], [-40, 42, -760, 12], [-20, 42, -900, 11],
      [-40, 38, -960, 9], [-86, 40, -1004, 11],
    ], 12),
  },
  {
    id: "rings-p3", activity: "rings", klass: "pro", title: "Mill Waltz",
    brief: "Some of these rings drift on the west wind. Stay light on the stick.",
    hour: 15, plane: "trainer",
    start: { x: 400, y: 90, z: -700, heading: 0.8, speed: 44 },
    timeLimits: [105, 85, 68],
    rings: pathRings([
      [520, 80, -860, 11, 1, 18, "x"], [600, 90, -800, 11], [460, 85, -780, 11, 1, 16, "y"],
      [580, 90, -920, 11], [440, 80, -900, 11, 1, 20, "z"], [520, 75, -820, 11],
    ], 11),
  },
  {
    id: "rings-p4", activity: "rings", klass: "pro", title: "Arch & Isle",
    brief: "Tight rings through the sea arch, then a hop to One-Palm Isle.",
    hour: 12, plane: "trainer",
    start: { x: -500, y: 45, z: -1100, heading: -0.4, speed: 44 },
    timeLimits: [100, 78, 62],
    rings: pathRings([
      [-560, 40, -1220, 11], [-640, 22, -1400, 9], [-720, 30, -1520, 11],
      [-500, 35, -1680, 11], [-300, 30, -1800, 11], [180, 22, -1880, 10],
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
    target: { type: "beach", x: 40, z: -1220, heading: 0.2, len: 180, wid: 46 },
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
  {
    id: "land-b5", activity: "landing", klass: "beginner", title: "Cay Strip",
    brief: "Settle onto the short grass strip on South Mail Cay. East-to-west, easy flare, stop before the cottages.",
    hour: 16.5, plane: "trainer",
    start: { x: -40, y: 55, z: -2280, heading: 0, speed: 40 },
    target: { type: "grass", x: 260, z: -2280, heading: 0, len: 140, wid: 18 },
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
    target: { type: "beach", x: -400, z: -1340, heading: 2.0, len: 180, wid: 28 },
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
    start: { x: -360, y: 95, z: -1520, heading: -0.4, speed: 36 },
    subject: { x: L.lighthouse.x, y: 40, z: L.lighthouse.z, name: "Cinder Cape Light" },
    view: { x: -700, y: 80, z: -1400, maxDist: 480, minDist: 60, facingDot: 0.3 },
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
    start: { x: 80, y: 120, z: -900, heading: 1.2, speed: 36 },
    subject: { x: L.waterfall.x, y: 50, z: L.waterfall.z, name: "Mistfall" },
    view: { x: 40, y: 90, z: -680, maxDist: 320, minDist: 40, facingDot: 0.4 },
  },
  {
    id: "pho-p3", activity: "photo", klass: "pro", title: "Cliff Ruins",
    brief: "The castle ruins on the north cliff, late light.",
    hour: 17, plane: "trainer",
    start: { x: -80, y: 180, z: -200, heading: -0.3, speed: 36 },
    subject: { x: L.castle.x, y: 120, z: L.castle.z, name: "Cliff Ruins" },
    view: { x: -180, y: 160, z: -80, maxDist: 360, minDist: 50, facingDot: 0.4 },
  },
  {
    id: "pho-p4", activity: "photo", klass: "pro", title: "Sea Arch",
    brief: "Frame the rock arch with One-Palm Isle in the distance if you can.",
    hour: 15, plane: "trainer",
    start: { x: -880, y: 80, z: -1600, heading: 1.0, speed: 36 },
    subject: { x: L.arch.x, y: 16, z: L.arch.z, name: "Sea Arch" },
    view: { x: -900, y: 50, z: -1280, maxDist: 320, minDist: 30, facingDot: 0.4 },
  },

  {
    id: "rings-a2", activity: "rings", klass: "ace", title: "Castle & Falls",
    brief: "A tight descent from the castle cliff, past Mistfall and under the viaduct.",
    hour: 16, plane: "trainer",
    start: { x: 400, y: 160, z: 40, heading: -1.2, speed: 46 },
    timeLimits: [95, 75, 60],
    rings: pathRings([
      [340, 140, 80, 12], [280, 110, -200, 12], [260, 90, -520, 11],
      [200, 50, -700, 11], [80, 46, -880, 11], [-40, 38, -960, 9],
      [-40, 42, -1100, 12],
    ], 11),
  },
  {
    id: "land-a1", activity: "landing", klass: "ace", title: "Cape Light Pad",
    brief: "A short, windy landing on the rocks just south of Cinder Cape Light.",
    hour: 17.2, plane: "trainer",
    start: { x: -200, y: 90, z: -1600, heading: -0.4, speed: 42 },
    target: { type: "beach", x: -400, z: -1340, heading: -0.4, len: 140, wid: 24 },
  },
  {
    id: "pho-a1", activity: "photo", klass: "ace", title: "The Postcard",
    brief: "Frame the whole southern vista: volcano, viaduct, castle and the cape light.",
    hour: 11, plane: "trainer",
    start: { x: 150, y: 90, z: -1900, heading: 1.5708, speed: 36 },
    subject: { x: 80, y: 80, z: -200, name: "The Island" },
    view: { x: 150, y: 78, z: -1620, maxDist: 400, minDist: 80, facingDot: 0.35 },
  },

  // ---------- MAIL BEGINNER (M2 The Mail Line) ----------
  {
    id: "mail-b1", activity: "mail", klass: "beginner", title: "First Bag",
    brief: "Pick up the mail bag at the hangar and drop it over Harbor Town. A short, gentle first run.",
    hour: 10, plane: "trainer",
    start: { x: -80, y: 28, z: -1100, heading: 0, speed: 40 },
    timeLimits: [80, 60, 45],
    stops: [
      { type: "pickup", name: "Hangar", x: L.hangar.x, z: L.hangar.z, r: 20 },
      { type: "drop", name: "Harbor Town", x: L.town.x, z: L.town.z, r: 22 },
    ],
  },
  {
    id: "mail-b2", activity: "mail", klass: "beginner", title: "Mill Post",
    brief: "Collect the bag at the hangar and deliver it to the mill hills.",
    hour: 10, plane: "trainer",
    start: { x: -80, y: 28, z: -1100, heading: 0, speed: 42 },
    timeLimits: [90, 70, 52],
    stops: [
      { type: "pickup", name: "Hangar", x: L.hangar.x, z: L.hangar.z, r: 20 },
      { type: "drop", name: "Mill Hills", x: L.windmills.x, z: L.windmills.z, r: 24 },
    ],
  },
  {
    id: "mail-b3", activity: "mail", klass: "beginner", title: "Cape Letter",
    brief: "A bag for Cinder Cape Light. Pick up at the hangar, follow the coast, and drop at the lighthouse.",
    hour: 9, plane: "trainer",
    start: { x: 40, y: 30, z: -1100, heading: Math.PI, speed: 42 },
    timeLimits: [100, 78, 58],
    stops: [
      { type: "pickup", name: "Hangar", x: L.hangar.x, z: L.hangar.z, r: 20 },
      { type: "drop", name: "Cinder Cape Light", x: L.lighthouse.x, z: L.lighthouse.z, r: 24 },
    ],
  },
  {
    id: "mail-b4", activity: "mail", klass: "beginner", title: "Castle Post",
    brief: "Take the bag from the hangar all the way to the cliff ruins. Climb steadily and watch the ridge.",
    hour: 11, plane: "trainer",
    start: { x: -80, y: 32, z: -1100, heading: 0, speed: 44 },
    timeLimits: [120, 95, 72],
    stops: [
      { type: "pickup", name: "Hangar", x: L.hangar.x, z: L.hangar.z, r: 20 },
      { type: "drop", name: "Cliff Ruins", x: L.castle.x, z: L.castle.z, r: 26 },
    ],
  },
  {
    id: "mail-b5", activity: "mail", klass: "beginner", title: "Cay Letter",
    brief: "A bag for the new post on South Mail Cay. Pick up at the hangar, hop south over the water, and drop it by the flag.",
    hour: 10, plane: "trainer",
    start: { x: -80, y: 36, z: -1100, heading: -0.4, speed: 44 },
    timeLimits: [130, 100, 75],
    stops: [
      { type: "pickup", name: "Hangar", x: L.hangar.x, z: L.hangar.z, r: 20 },
      { type: "drop", name: "South Mail Cay", x: L.mailCay.x, z: L.mailCay.z, r: 28 },
    ],
  },
  // ---------- MAIL PRO ----------
  {
    id: "mail-p1", activity: "mail", klass: "pro", title: "Town and Mills",
    brief: "One bag, two drops: Harbor Town then the mill hills. Keep the throttle honest.",
    hour: 10, plane: "trainer",
    start: { x: -80, y: 30, z: -1100, heading: 0, speed: 44 },
    timeLimits: [100, 78, 60],
    stops: [
      { type: "pickup", name: "Hangar", x: L.hangar.x, z: L.hangar.z, r: 18 },
      { type: "drop", name: "Harbor Town", x: L.town.x, z: L.town.z, r: 20 },
      { type: "drop", name: "Mill Hills", x: L.windmills.x, z: L.windmills.z, r: 22 },
    ],
  },
  {
    id: "mail-p2", activity: "mail", klass: "pro", title: "Two Coasts",
    brief: "Hangar pickup, drop at the lighthouse, then back east to Harbor Town.",
    hour: 16, plane: "trainer",
    start: { x: 40, y: 32, z: -1100, heading: Math.PI, speed: 44 },
    timeLimits: [120, 95, 75],
    stops: [
      { type: "pickup", name: "Hangar", x: L.hangar.x, z: L.hangar.z, r: 18 },
      { type: "drop", name: "Cinder Cape Light", x: L.lighthouse.x, z: L.lighthouse.z, r: 22 },
      { type: "drop", name: "Harbor Town", x: L.town.x, z: L.town.z, r: 20 },
    ],
  },
  {
    id: "mail-p3", activity: "mail", klass: "pro", title: "Castle Express",
    brief: "A fast bag to the cliff ruins. Tight times — climb early and cut the corners.",
    hour: 11, plane: "trainer",
    start: { x: 0, y: 40, z: -1180, heading: 0.6, speed: 46 },
    timeLimits: [90, 70, 52],
    stops: [
      { type: "pickup", name: "Hangar", x: L.hangar.x, z: L.hangar.z, r: 18 },
      { type: "drop", name: "Cliff Ruins", x: L.castle.x, z: L.castle.z, r: 22 },
    ],
  },
  {
    id: "mail-p4", activity: "mail", klass: "pro", title: "The Mail Line",
    brief: "The full run: hangar pickup, then drops at town, mills, the lighthouse and the castle. This is the Line.",
    hour: 11, plane: "trainer",
    start: { x: -80, y: 32, z: -1100, heading: 0, speed: 44 },
    timeLimits: [180, 145, 115],
    stops: [
      { type: "pickup", name: "Hangar", x: L.hangar.x, z: L.hangar.z, r: 18 },
      { type: "drop", name: "Harbor Town", x: L.town.x, z: L.town.z, r: 20 },
      { type: "drop", name: "Mill Hills", x: L.windmills.x, z: L.windmills.z, r: 22 },
      { type: "drop", name: "Cinder Cape Light", x: L.lighthouse.x, z: L.lighthouse.z, r: 22 },
      { type: "drop", name: "Cliff Ruins", x: L.castle.x, z: L.castle.z, r: 24 },
    ],
  },
  {
    id: "mail-p6", activity: "mail", klass: "pro", title: "Isle Express",
    brief: "A fast bag from the hangar to South Mail Cay, then across the water to Cedar Isle. Tight times — climb early.",
    hour: 16.5, plane: "trainer",
    start: { x: -80, y: 40, z: -1100, heading: 0, speed: 46 },
    timeLimits: [150, 115, 88],
    stops: [
      { type: "pickup", name: "Hangar", x: L.hangar.x, z: L.hangar.z, r: 18 },
      { type: "drop", name: "South Mail Cay", x: L.mailCay.x, z: L.mailCay.z, r: 24 },
      { type: "drop", name: "Cedar Isle", x: L.cedarIsle.x, z: L.cedarIsle.z, r: 28 },
    ],
  },

  // ---------- M3 STORM CROSSING ----------
  {
    id: "storm-b1", activity: "storm", klass: "beginner", title: "Beacon Path",
    brief: "A gale is up. Follow the three beacons along the south coast to the hangar.",
    hour: 15, plane: "trainer", weather: "storm",
    start: { x: -80, y: 40, z: -1580, heading: 0.3, speed: 44 },
    timeLimits: [90, 70, 52],
    stops: [
      { type: "beacon", name: "South Bay", x: 40, z: -1480, r: 22 },
      { type: "beacon", name: "Sunny Beach", x: L.beach.x, z: L.beach.z, r: 22 },
      { type: "beacon", name: "Hangar", x: L.hangar.x, z: L.hangar.z, r: 22 },
    ],
  },
  {
    id: "storm-b2", activity: "storm", klass: "beginner", title: "Cape Beam",
    brief: "Use the lighthouse beam in the rain. Beacons lead you out to Cinder Cape Light.",
    hour: 16, plane: "trainer", weather: "storm",
    start: { x: 80, y: 40, z: -1200, heading: Math.PI, speed: 44 },
    timeLimits: [90, 70, 52],
    stops: [
      { type: "beacon", name: "Harbor", x: L.harbor.x, z: L.harbor.z, r: 22 },
      { type: "beacon", name: "Mid Cape", x: -80, z: -1280, r: 22 },
      { type: "beacon", name: "Cinder Cape Light", x: L.lighthouse.x, z: L.lighthouse.z, r: 24 },
    ],
  },
  {
    id: "storm-b3", activity: "storm", klass: "beginner", title: "Ridge Bound",
    brief: "Cross the island in the gale and pick up the last beacons on the way to the ridge strip.",
    hour: 15, plane: "trainer", weather: "storm",
    start: { x: 0, y: 70, z: -1200, heading: 1.4, speed: 46 },
    timeLimits: [120, 95, 72],
    stops: [
      { type: "beacon", name: "Viaduct", x: L.bridge.x, z: L.bridge.z, r: 24 },
      { type: "beacon", name: "West Slope", x: -400, z: 200, r: 24 },
      { type: "beacon", name: "Ridge Strip", x: L.grassStrip.x, z: L.grassStrip.z, r: 26 },
    ],
  },
  {
    id: "storm-p1", activity: "storm", klass: "pro", title: "Gale Circuit",
    brief: "A longer beacon chain in a full storm: beach, town, mills, then the cape.",
    hour: 16, plane: "trainer", weather: "storm",
    start: { x: -200, y: 50, z: -1400, heading: 0.2, speed: 46 },
    timeLimits: [130, 105, 82],
    stops: [
      { type: "beacon", name: "Sunny Beach", x: L.beach.x, z: L.beach.z, r: 20 },
      { type: "beacon", name: "Harbor Town", x: L.town.x, z: L.town.z, r: 20 },
      { type: "beacon", name: "Mill Hills", x: L.windmills.x, z: L.windmills.z, r: 22 },
      { type: "beacon", name: "Cinder Cape Light", x: L.lighthouse.x, z: L.lighthouse.z, r: 22 },
    ],
  },
  {
    id: "storm-p2", activity: "storm", klass: "pro", title: "Cape to Ridge",
    brief: "Beacons from the cape, over the volcano shoulder, then land on the ridge strip.",
    hour: 15, plane: "trainer", weather: "storm",
    start: { x: -200, y: 50, z: -1400, heading: 0, speed: 46 },
    timeLimits: [150, 120, 95],
    stops: [
      { type: "beacon", name: "Cinder Cape Light", x: L.lighthouse.x, z: L.lighthouse.z, r: 22 },
      { type: "beacon", name: "West Shoulder", x: -280, z: 200, r: 24 },
      { type: "beacon", name: "Ridge Approach", x: -600, z: 1120, r: 24 },
    ],
    target: { type: "grass", x: -820, z: 1120, heading: Math.PI, len: 240, wid: 22 },
  },
  {
    id: "storm-p3", activity: "storm", klass: "pro", title: "Ace in the Storm",
    brief: "Tight beacons over the falls and the volcano, then a short-field landing on the ridge in the gale.",
    hour: 17, plane: "trainer", weather: "storm",
    start: { x: 0, y: 70, z: -1000, heading: 1.2, speed: 48 },
    timeLimits: [140, 110, 88],
    stops: [
      { type: "beacon", name: "Mistfall", x: L.waterfall.x, z: L.waterfall.z, r: 20 },
      { type: "beacon", name: "Volcano Shoulder", x: 80, z: 200, r: 22 },
      { type: "beacon", name: "Cliff Ruins", x: L.castle.x, z: L.castle.z, r: 22 },
      { type: "beacon", name: "Ridge Approach", x: -600, z: 1120, r: 22 },
    ],
    target: { type: "grass", x: -820, z: 1120, heading: Math.PI, len: 240, wid: 22 },
  },

  // ---------- M4 NIGHT MAIL ----------
  {
    id: "night-b1", activity: "night", klass: "beginner", title: "Night Pickup",
    brief: "After dark, pick up the bag at the hangar and drop it over Harbor Town.",
    hour: 21, plane: "trainer",
    start: { x: -80, y: 28, z: -1100, heading: 0, speed: 40 },
    timeLimits: [90, 70, 50],
    stops: [
      { type: "pickup", name: "Hangar", x: L.hangar.x, z: L.hangar.z, r: 20 },
      { type: "drop", name: "Harbor Town", x: L.town.x, z: L.town.z, r: 22 },
    ],
  },
  {
    id: "night-b2", activity: "night", klass: "beginner", title: "Beam Run",
    brief: "Follow Cinder Cape Light's beam and drop the night bag at the lighthouse.",
    hour: 21.5, plane: "trainer",
    start: { x: -80, y: 28, z: -1100, heading: 0, speed: 40 },
    timeLimits: [100, 80, 58],
    stops: [
      { type: "pickup", name: "Hangar", x: L.hangar.x, z: L.hangar.z, r: 20 },
      { type: "drop", name: "Cinder Cape Light", x: L.lighthouse.x, z: L.lighthouse.z, r: 24 },
    ],
  },
  {
    id: "night-b3", activity: "night", klass: "beginner", title: "Flare 09",
    brief: "A flare path lights runway 09. Approach from the west and land after dark.",
    hour: 21.2, plane: "trainer", flares: true,
    start: { x: -900, y: 80, z: -1100, heading: 0, speed: 44 },
    target: { type: "runway", x: 0, z: -1100, heading: 0, len: 700, wid: 36 },
  },
  {
    id: "night-p1", activity: "night", klass: "pro", title: "Night Line",
    brief: "A longer night run: hangar to town, then the mills.",
    hour: 22, plane: "trainer",
    start: { x: -80, y: 28, z: -1100, heading: 0, speed: 42 },
    timeLimits: [130, 105, 82],
    stops: [
      { type: "pickup", name: "Hangar", x: L.hangar.x, z: L.hangar.z, r: 20 },
      { type: "drop", name: "Harbor Town", x: L.town.x, z: L.town.z, r: 22 },
      { type: "drop", name: "Mill Hills", x: L.windmills.x, z: L.windmills.z, r: 22 },
    ],
  },
  {
    id: "night-p2", activity: "night", klass: "pro", title: "Night Photo",
    brief: "Frame Cinder Cape Light at night, with the beam cutting the dark water.",
    hour: 22, plane: "trainer",
    start: { x: -360, y: 95, z: -1520, heading: -0.4, speed: 36 },
    subject: { x: L.lighthouse.x, y: 40, z: L.lighthouse.z, name: "Cinder Cape Light" },
    view: { x: -700, y: 80, z: -1400, maxDist: 480, minDist: 60, facingDot: 0.3 },
  },
  {
    id: "night-p3", activity: "night", klass: "pro", title: "Night Arrival",
    brief: "Land east-to-west on 27 after dark, flare path on, and stop short of the hangar.",
    hour: 22.4, plane: "trainer", flares: true,
    start: { x: 900, y: 70, z: -1100, heading: Math.PI, speed: 44 },
    target: { type: "runway", x: -80, z: -1100, heading: Math.PI, len: 380, wid: 30, stopX: -200, stopZ: -1100, stopR: 80 },
  },

  // ---------- M5 RESCUE & CAPE RACE ----------
  {
    id: "res-b1", activity: "rescue", klass: "beginner", title: "The Wreck",
    brief: "Find the shallow wreck off the south-west and drop a raft through the gold ring.",
    hour: 10, plane: "seaplane", mode: "rescue",
    start: { x: -640, y: 38, z: -1480, heading: -2.30, speed: 40 },
    timeLimits: [90, 70, 50],
    stops: [
      { type: "mark", name: "Shallow Wreck", x: L.wreck.x, z: L.wreck.z, r: 24, y: 22 },
      { type: "raft", name: "Shallow Wreck", x: L.wreck.x, z: L.wreck.z - 40, r: 18, y: 16 },
    ],
  },
  {
    id: "res-b2", activity: "rescue", klass: "beginner", title: "Steamer Aid",
    brief: "A steamer sits off the south cape. Fly the mark, then drop a raft beside her.",
    hour: 11, plane: "seaplane", mode: "rescue",
    start: { x: 80, y: 40, z: -1500, heading: -0.4, speed: 40 },
    timeLimits: [90, 70, 50],
    stops: [
      { type: "mark", name: "Steamer", x: -90, z: -1480, r: 24, y: 22 },
      { type: "raft", name: "Steamer", x: -130, z: -1520, r: 18, y: 16 },
    ],
  },
  {
    id: "res-b3", activity: "rescue", klass: "beginner", title: "Circle the Steamer",
    brief: "Three rings around the steamer. Keep it tight and stay off the water.",
    hour: 12, plane: "seaplane", mode: "rescue",
    start: { x: 40, y: 36, z: -1580, heading: 0, speed: 40 },
    timeLimits: [100, 80, 58],
    stops: [
      { type: "mark", name: "East of Steamer", x: -20, z: -1480, r: 20, y: 22 },
      { type: "mark", name: "North of Steamer", x: -90, z: -1400, r: 20, y: 22 },
      { type: "raft", name: "West of Steamer", x: -170, z: -1500, r: 18, y: 18 },
    ],
  },
  {
    id: "res-b4", activity: "rescue", klass: "beginner", title: "Arch Watch",
    brief: "A lookout ring at the sea arch, then a raft drop on the lee side.",
    hour: 15, plane: "trainer", mode: "rescue",
    start: { x: 40, y: 40, z: -1500, heading: -0.2, speed: 42 },
    timeLimits: [90, 70, 52],
    stops: [
      { type: "mark", name: "Sea Arch", x: L.arch.x, z: L.arch.z, r: 22, y: 28 },
      { type: "raft", name: "Lee of the Arch", x: L.arch.x - 40, z: L.arch.z - 50, r: 18, y: 18 },
    ],
  },
  {
    id: "res-p1", activity: "rescue", klass: "pro", title: "Cape Race",
    brief: "Pylons around the cape: beach, lighthouse, sea arch and back to the harbor.",
    hour: 14, plane: "trainer", mode: "race",
    start: { x: 80, y: 40, z: -1400, heading: -0.3, speed: 48 },
    timeLimits: [120, 95, 72],
    stops: [
      { type: "pylon", name: "Sunny Beach", x: L.beach.x, z: L.beach.z, r: 20 },
      { type: "pylon", name: "Cinder Cape Light", x: L.lighthouse.x, z: L.lighthouse.z, r: 22 },
      { type: "pylon", name: "Sea Arch", x: L.arch.x, z: L.arch.z, r: 22 },
      { type: "pylon", name: "Harbor", x: L.harbor.x, z: L.harbor.z, r: 22 },
    ],
  },
  {
    id: "res-p2", activity: "rescue", klass: "pro", title: "Volcano Lap",
    brief: "A high pylon lap around the volcano: viaduct, west shoulder, crater and castle.",
    hour: 13, plane: "glider", mode: "race",
    start: { x: 0, y: 140, z: -600, heading: 1.2, speed: 40 },
    timeLimits: [130, 105, 82],
    stops: [
      { type: "pylon", name: "Viaduct", x: L.bridge.x, z: L.bridge.z, r: 22 },
      { type: "pylon", name: "West Shoulder", x: -280, z: 200, r: 24 },
      { type: "pylon", name: "Crater", x: 0, z: 200, r: 26, y: 220 },
      { type: "pylon", name: "Cliff Ruins", x: L.castle.x, z: L.castle.z, r: 22 },
    ],
  },
  {
    id: "res-p3", activity: "rescue", klass: "pro", title: "Viaduct Cut",
    brief: "Cut the viaduct, skim the falls, then take the town and mills pylons.",
    hour: 11, plane: "trainer", mode: "race",
    start: { x: -200, y: 70, z: -800, heading: 0.4, speed: 46 },
    timeLimits: [110, 88, 68],
    stops: [
      { type: "pylon", name: "Under the Viaduct", x: L.bridge.x, z: L.bridge.z, y: 38, r: 14 },
      { type: "pylon", name: "Mistfall", x: L.waterfall.x, z: L.waterfall.z, r: 20 },
      { type: "pylon", name: "Harbor Town", x: L.town.x, z: L.town.z, r: 20 },
      { type: "pylon", name: "Mill Hills", x: L.windmills.x, z: L.windmills.z, r: 20 },
    ],
  },
  {
    id: "res-p4", activity: "rescue", klass: "pro", title: "Grand Cape",
    brief: "The long race: cape, arch, volcano, viaduct and home to the hangar.",
    hour: 15, plane: "trainer", mode: "race",
    start: { x: 80, y: 50, z: -1400, heading: -0.4, speed: 48 },
    timeLimits: [180, 145, 115],
    stops: [
      { type: "pylon", name: "Cinder Cape Light", x: L.lighthouse.x, z: L.lighthouse.z, r: 22 },
      { type: "pylon", name: "Sea Arch", x: L.arch.x, z: L.arch.z, r: 22 },
      { type: "pylon", name: "Volcano Shoulder", x: 80, z: 200, r: 24 },
      { type: "pylon", name: "Viaduct", x: L.bridge.x, z: L.bridge.z, r: 22 },
      { type: "pylon", name: "Hangar", x: L.hangar.x, z: L.hangar.z, r: 22 },
    ],
  },

  // ---------- ITERATE 16 STANDOUTS ----------
  {
    id: "rings-p5", activity: "rings", klass: "pro", title: "Viaduct Crawl",
    brief: "A low canyon run through the stone viaduct arches. Keep the wings level and thread every span.",
    hour: 9.5, plane: "trainer",
    start: { x: 230, y: 54, z: -1040, heading: Math.PI + 0.28, speed: 46 },
    timeLimits: [70, 52, 40],
    rings: pathRings([
      [160, 48, -1010, 12], [80, 44, -980, 11], [8, 40, -968, 10],
      [-40, 37, -960, 8], [-86, 37, -964, 8], [-170, 48, -990, 12],
    ], 10),
  },
  {
    id: "rings-p6", activity: "rings", klass: "pro", title: "Rival Run",
    brief: "Race Léo's yellow Courrier around Harbor Airport. Beat him to the last ring — three stars if you finish first and under the ★3 time.",
    hour: 11, plane: "trainer", rival: true,
    start: { x: -80, y: 48, z: -1100, heading: 0, speed: 48 },
    timeLimits: [88, 70, 56],
    rings: pathRings([
      [40, 42, -1100, 14], [200, 50, -1000, 13], [80, 55, -860, 13],
      [-160, 50, -900, 13], [-240, 45, -1100, 13], [-80, 42, -1240, 13],
      [80, 42, -1220, 14],
    ], 13),
  },
  {
    id: "mail-p5", activity: "mail", klass: "pro", title: "Ship Drop",
    brief: "Pick up the bag at the hangar and drop it onto the moving steamer in the bay. Stay with her wake.",
    hour: 10.5, plane: "trainer",
    start: { x: 40, y: 42, z: -1100, heading: 0, speed: 42 },
    timeLimits: [110, 85, 68],
    stops: [
      { type: "pickup", name: "Hangar", x: L.hangar.x, z: L.hangar.z, r: 18 },
      { type: "drop", name: "Steamer", moving: "steamer", x: 18, z: -1268, y: 16, r: 22 },
    ],
  },
  {
    id: "storm-p4", activity: "storm", klass: "pro", title: "Gale Rescue",
    brief: "A wreck is adrift in the gale. Follow the flare ring, mark the site, then drop a raft in the swell.",
    hour: 16, plane: "trainer", weather: "storm", mode: "rescue", flares: true,
    start: { x: -560, y: 50, z: -1520, heading: Math.atan2(L.wreck.z + 1520, L.wreck.x + 560), speed: 46 },
    timeLimits: [130, 100, 78],
    flareAt: { x: L.wreck.x, z: L.wreck.z },
    stops: [
      { type: "mark", name: "Flare Ring", x: L.wreck.x, z: L.wreck.z, r: 22 },
      { type: "raft", name: "Wreck Raft", x: L.wreck.x + 40, z: L.wreck.z - 20, r: 20 },
    ],
  },
  {
    id: "night-p4", activity: "night", klass: "pro", title: "Night Flare Rescue",
    brief: "The wreck is lit only by flares. Mark it, drop a raft, and get clear in the dark.",
    hour: 21.2, plane: "trainer", mode: "rescue", flares: true,
    start: { x: -560, y: 50, z: -1520, heading: Math.atan2(L.wreck.z + 1520, L.wreck.x + 560), speed: 44 },
    timeLimits: [140, 108, 85],
    flareAt: { x: L.wreck.x, z: L.wreck.z },
    stops: [
      { type: "mark", name: "Flare Ring", x: L.wreck.x, z: L.wreck.z, r: 22 },
      { type: "raft", name: "Night Raft", x: L.wreck.x + 36, z: L.wreck.z - 18, r: 20 },
    ],
  },
];

export function missionsBy(activity, klass) {
  return MISSIONS.filter((m) => m.activity === activity && m.klass === klass);
}

export function getMission(id) {
  return MISSIONS.find((m) => m.id === id) || DOGFIGHTS.find((m) => m.id === id);
}

export const MISSION_COUNT = MISSIONS.length;

export const DOGFIGHTS = [
  {
    id: "df-b1", activity: "dogfight", klass: "beginner", title: "First Pass",
    brief: "A pair of Gilded Gale scouts has been circling the harbour. Wave them off and keep the mail bag on board. Friendly shots, no one gets hurt — they will break off and trail smoke when they have had enough.",
    hour: 16.5, plane: "fighter",
    start: { x: 80, y: 130, z: -1280, heading: 0.15, speed: 52 },
    timeLimits: [180, 120, 80],
    bandits: 2,
    waves: [{ n: 2 }],
    story: [
      { who: "Skipper Wren", text: "Bag is sealed. A couple of painted crates have been hanging over the harbour — belong to the Gilded Gale. See them off, then come home for tea." },
      { who: "You", text: "If they eye the bag, I will give them a polite nudge." },
    ],
  },
  {
    id: "df-b2", activity: "dogfight", klass: "beginner", title: "Mail Escort",
    brief: "Two flights of Gale riders try to crowd the mail run. Hold the line, duck when they break, and let a smoking crate flee. Repair on the hangar apron if you take a knock.",
    hour: 11, plane: "fighter",
    start: { x: 40, y: 130, z: -1200, heading: -0.2, speed: 54 },
    timeLimits: [210, 150, 100],
    waves: [{ n: 2 }, { n: 3 }],
    story: [
      { who: "Skipper Wren", text: "Second bag of the morning, and the Gale is getting cheeky. Escort it past the cape. If they come in waves, be patient." },
      { who: "Tess", text: "I will keep the wings between them and the harbour." },
    ],
  },
  {
    id: "df-p1", activity: "dogfight", klass: "pro", title: "Cay Ambush",
    brief: "The Gale is waiting over South Mail Cay. Break their surprise, then deal with the second flight that climbs out of the glare.",
    hour: 16.2, plane: "fighter",
    start: { x: 260, y: 120, z: -2000, heading: -Math.PI / 2, speed: 56 },
    timeLimits: [200, 140, 95],
    waves: [{ n: 3 }, { n: 3 }],
    story: [
      { who: "Skipper Wren", text: "Cay says they have visitors — gold-trimmed crates, hanging in the afternoon light. Do not let them sit on the strip." },
      { who: "You", text: "I will clear the air over the cay." },
    ],
  },
  {
    id: "df-p2", activity: "dogfight", klass: "pro", title: "Baron's Ace",
    brief: "Baron Rook himself leads a last flight. His gold-trimmed Swallow is bigger and brasher. Wave the wingmen off, then make the Baron break away trailing smoke. The island stays peaceful when he leaves.",
    hour: 17.0, plane: "fighter", boss: true,
    start: { x: 400, y: 140, z: -900, heading: 0.4, speed: 56 },
    timeLimits: [240, 170, 120],
    waves: [{ n: 2 }, { n: 2, boss: true }],
    story: [
      { who: "Baron Rook", text: "Little mail bird. The Gilded Gale claims this sky. Fold your wings, or I shall fold them for you." },
      { who: "You", text: "The bag stays on board, Baron. After you." },
      { who: "Skipper Wren", text: "Bring yourself home in one piece. The tea will wait." },
    ],
  },
];
