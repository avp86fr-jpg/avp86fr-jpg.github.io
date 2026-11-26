import { MAT, MAT_COUNT } from "../core/config.js";

/**
 * Glyph ramps per material. Each string is dark → bright.
 * Indices refer to the atlas (see atlas.js).
 *
 *   sea: " .-~≈"     sand: " .:;"      grass: " .,\"'"
 *   forest: " .♣♠#"  rock: " .^▲#"    snow: " .:*"
 *   cloud: " ░▒▓"    building: " .▒▓█" generic: " .:-=+*#%@"
 */

export const GLYPHS = [
  " ", ".", ":", "-", "=", "+", "*", "#", "%", "@", // 0-9 generic
  "~", "≈", ";", ",", "\"", "'",                     // 10-15
  "♣", "♠", "^", "▲", "░", "▒", "▓", "█",           // 16-23
  "/", "\\", "|", "—", "_",                          // 24-28 edges
  "O", "o", "0", "◆", "★", "·", "(", ")",           // 29-36 hero / markers
  "A", "I", "R", "S", "C",                           // 37-41 (logo bits, unused in ramps)
];

// Named indices
export const G = {
  SPACE: 0, DOT: 1, COLON: 2, DASH: 3, EQ: 4, PLUS: 5, STAR: 6, HASH: 7, PCT: 8, AT: 9,
  TILDE: 10, WAVE: 11, SEMI: 12, COMMA: 13, QUOTE: 14, APOS: 15,
  CLUB: 16, SPADE: 17, CARET: 18, TRI: 19, SHADE1: 20, SHADE2: 21, SHADE3: 22, BLOCK: 23,
  SLASH: 24, BSLASH: 25, VBAR: 26, HBAR: 27, USCORE: 28,
  BIGO: 29, LITO: 30, ZERO: 31, DIAMOND: 32, STARF: 33, MIDDOT: 34, LPAR: 35, RPAR: 36,
};

const R = {
  generic:  [G.SPACE, G.DOT, G.COLON, G.DASH, G.EQ, G.PLUS, G.STAR, G.HASH, G.PCT, G.AT],
  sea:      [G.SPACE, G.DOT, G.TILDE, G.WAVE, G.WAVE, G.EQ],
  sand:     [G.SPACE, G.DOT, G.COLON, G.SEMI, G.PLUS],
  grass:    [G.SPACE, G.DOT, G.COMMA, G.QUOTE, G.APOS, G.STAR],
  forest:   [G.SPACE, G.DOT, G.CLUB, G.SPADE, G.HASH],
  rock:     [G.SPACE, G.DOT, G.CARET, G.TRI, G.HASH],
  snow:     [G.SPACE, G.DOT, G.COLON, G.STAR],
  cloud:    [G.SPACE, G.SHADE1, G.SHADE2, G.SHADE3],
  building: [G.SPACE, G.DOT, G.SHADE2, G.SHADE3, G.BLOCK],
  road:     [G.SPACE, G.DOT, G.EQ, G.HASH],
  plane:    [G.HASH, G.PCT, G.AT, G.BLOCK],
  hero:     [G.AT, G.BLOCK, G.STARF, G.DIAMOND],
  wood:     [G.SPACE, G.DOT, G.EQ, G.HASH],
  roof:     [G.SPACE, G.SHADE2, G.SHADE3, G.BLOCK],
  metal:    [G.DOT, G.COLON, G.HASH, G.AT],
  foliage:  [G.SPACE, G.CLUB, G.SPADE, G.STAR, G.HASH],
  deep:     [G.SPACE, G.TILDE, G.WAVE, G.EQ],
  foam:     [G.DOT, G.TILDE, G.STAR, G.BLOCK],
  light:    [G.STAR, G.STARF, G.BLOCK, G.AT],
  balloon:  [G.LITO, G.BIGO, G.ZERO, G.AT],
  ring:     [G.LPAR, G.RPAR, G.BIGO, G.AT],
  sky:      [G.SPACE, G.SPACE, G.DOT, G.MIDDOT, G.APOS, G.COLON],
  dirt:     [G.SPACE, G.DOT, G.COLON, G.EQ],
  runway:   [G.DOT, G.DASH, G.EQ, G.HASH],
  fall:     [G.VBAR, G.SLASH, G.WAVE, G.VBAR],
};

const MAT_TO_RAMP = [];
MAT_TO_RAMP[MAT.GENERIC]   = R.generic;
MAT_TO_RAMP[MAT.SEA]       = R.sea;
MAT_TO_RAMP[MAT.SAND]      = R.sand;
MAT_TO_RAMP[MAT.GRASS]     = R.grass;
MAT_TO_RAMP[MAT.FOREST]    = R.forest;
MAT_TO_RAMP[MAT.ROCK]      = R.rock;
MAT_TO_RAMP[MAT.SNOW]      = R.snow;
MAT_TO_RAMP[MAT.CLOUD]     = R.cloud;
MAT_TO_RAMP[MAT.BUILDING]  = R.building;
MAT_TO_RAMP[MAT.ROAD]      = R.road;
MAT_TO_RAMP[MAT.PLANE]     = R.plane;
MAT_TO_RAMP[MAT.HERO]      = R.hero;
MAT_TO_RAMP[MAT.WOOD]      = R.wood;
MAT_TO_RAMP[MAT.ROOF]      = R.roof;
MAT_TO_RAMP[MAT.METAL]     = R.metal;
MAT_TO_RAMP[MAT.FOLIAGE]   = R.foliage;
MAT_TO_RAMP[MAT.WATER_DEEP]= R.deep;
MAT_TO_RAMP[MAT.FOAM]      = R.foam;
MAT_TO_RAMP[MAT.LIGHT]     = R.light;
MAT_TO_RAMP[MAT.BALLOON]   = R.balloon;
MAT_TO_RAMP[MAT.RING]      = R.ring;
MAT_TO_RAMP[MAT.SKY]       = R.sky;
MAT_TO_RAMP[MAT.DIRT]      = R.dirt;
MAT_TO_RAMP[MAT.RUNWAY]    = R.runway;
MAT_TO_RAMP[MAT.WATERFALL] = R.fall;

export const RAMPS = R;
export { MAT_TO_RAMP };

/** Build a 256-wide × MAT_COUNT-tall RGBA texture: R = glyph index. */
export function buildRampTexture(THREE) {
  const W = 64;
  const H = MAT_COUNT;
  const data = new Uint8Array(W * H * 4);
  for (let m = 0; m < H; m++) {
    const ramp = MAT_TO_RAMP[m] || R.generic;
    for (let x = 0; x < W; x++) {
      const t = x / (W - 1);
      const idx = Math.min(ramp.length - 1, Math.floor(t * ramp.length));
      // smoother bucket: interpolate index then round
      const f = t * (ramp.length - 1);
      const i0 = Math.floor(f);
      const i1 = Math.min(ramp.length - 1, i0 + 1);
      const g = (f - i0 < 0.5 ? ramp[i0] : ramp[i1]);
      const o = (m * W + x) * 4;
      data[o] = g;
      data[o + 1] = 0;
      data[o + 2] = 0;
      data[o + 3] = 255;
    }
  }
  const tex = new THREE.DataTexture(data, W, H, THREE.RGBAFormat);
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.needsUpdate = true;
  tex.colorSpace = THREE.NoColorSpace;
  tex.flipY = false;
  return tex;
}
