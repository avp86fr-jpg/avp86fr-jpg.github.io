/** Off-map sister isles — height queries for landing and placement. */

export const ISLES = {
  mailCay:   { x: 260,  z: -2280, rx: 95,  rz: 72,  h: 15, name: "South Mail Cay" },
  cedarIsle: { x: 1980, z: -380,  rx: 130, rz: 100, h: 54, name: "Cedar Isle" },
};

export function isleHeightAt(x, z) {
  let max = -99;
  for (const i of Object.values(ISLES)) {
    const dx = (x - i.x) / i.rx, dz = (z - i.z) / i.rz;
    const r2 = dx * dx + dz * dz;
    if (r2 >= 1) continue;
    const fall = 1 - r2;
    // Flatter crown on Mail Cay so a grass strip can sit cleanly.
    const plateau = i.h < 25 ? (fall > 0.28 ? 0.82 + (fall - 0.28) * 0.45 : fall * fall) : fall * fall;
    const h = plateau * i.h;
    if (h > max) max = h;
  }
  return max;
}

export function isleNormalAt(x, z) {
  const e = 1.6;
  const h = isleHeightAt(x, z);
  if (h < -1) return null;
  const dx = isleHeightAt(x + e, z) - isleHeightAt(x - e, z);
  const dz = isleHeightAt(x, z + e) - isleHeightAt(x, z - e);
  const n = { x: -dx, y: 2 * e, z: -dz };
  const len = Math.hypot(n.x, n.y, n.z) || 1;
  return { x: n.x / len, y: n.y / len, z: n.z / len };
}
