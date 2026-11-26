/** Mulberry32 + helpers. Seeded RNG for daily flights and world gen. */

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function createRng(seed) {
  const rnd = mulberry32(seed >>> 0);
  const api = {
    next: rnd,
    float(a = 0, b = 1) { return a + (b - a) * rnd(); },
    int(a, b) { return a + Math.floor(rnd() * (b - a + 1)); },
    pick(arr) { return arr[Math.floor(rnd() * arr.length)]; },
    chance(p) { return rnd() < p; },
    gauss(mean = 0, std = 1) {
      // Box-Muller
      let u = 0, v = 0;
      while (u === 0) u = rnd();
      while (v === 0) v = rnd();
      return mean + std * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    },
    seed,
  };
  return api;
}

export function dateSeed(d = new Date()) {
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  return (y * 10000 + m * 100 + day) >>> 0;
}
