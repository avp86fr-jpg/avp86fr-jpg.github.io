/** Value + FBM noise. Deterministic, no globals. */

function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }

function hash2(ix, iz, seed = 1337) {
  let n = (ix * 374761393 + iz * 668265263 + seed * 1442695041) | 0;
  n = (n ^ (n >> 13)) * 1274126177;
  return ((n ^ (n >> 16)) >>> 0) / 4294967296;
}

export function valueNoise(x, z, seed = 1337) {
  const ix = Math.floor(x);
  const iz = Math.floor(z);
  const fx = fade(x - ix);
  const fz = fade(z - iz);
  const a = hash2(ix, iz, seed);
  const b = hash2(ix + 1, iz, seed);
  const c = hash2(ix, iz + 1, seed);
  const d = hash2(ix + 1, iz + 1, seed);
  const u = a + (b - a) * fx;
  const v = c + (d - c) * fx;
  return u + (v - u) * fz;
}

export function fbm(x, z, oct = 5, seed = 1337, lac = 2, gain = 0.5) {
  let a = 0, amp = 0.5, f = 1, n = 0;
  for (let i = 0; i < oct; i++) {
    a += amp * valueNoise(x * f, z * f, seed + i * 19);
    n += amp;
    f *= lac;
    amp *= gain;
  }
  return a / n;
}

export function ridge(x, z, oct = 4, seed = 9) {
  let a = 0, amp = 0.5, f = 1, n = 0;
  for (let i = 0; i < oct; i++) {
    const v = 1 - Math.abs(valueNoise(x * f, z * f, seed + i * 31) * 2 - 1);
    a += amp * v * v;
    n += amp;
    f *= 2.05;
    amp *= 0.5;
  }
  return a / n;
}
