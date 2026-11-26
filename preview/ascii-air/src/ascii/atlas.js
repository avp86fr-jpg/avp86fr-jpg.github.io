import * as THREE from "three";
import { GLYPHS, G } from "./ramps.js";

export const ATLAS_COLS = 16;
export const ATLAS_ROWS = 8;
export const ATLAS_CELL = 64;

function roundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawPixelGlyph(ctx, x, y, s, dots, cols = 5, rows = 7) {
  const px = s / (cols + 2);
  const py = s / (rows + 2);
  ctx.fillStyle = "#fff";
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dots[r] && dots[r][c] === "1") {
        ctx.fillRect(x + (c + 1) * px, y + (r + 1) * py, px + 0.4, py + 0.4);
      }
    }
  }
}

// 5x7 bitmaps for a few punctuation fallbacks
const BITS = {
  " ": "00000 00000 00000 00000 00000 00000 00000",
  ".": "00000 00000 00000 00000 00000 01100 01100",
  ":": "00000 01100 01100 00000 01100 01100 00000",
  "-": "00000 00000 00000 11111 00000 00000 00000",
  "=": "00000 00000 11111 00000 11111 00000 00000",
  "+": "00000 00100 00100 11111 00100 00100 00000",
  "*": "00000 10101 01110 00100 01110 10101 00000",
  "#": "01110 10101 01110 10101 01110 10101 01110",
  "%": "11001 11010 00100 01000 01011 10011 00000",
  "@": "01110 10001 10111 10101 10111 10000 01110",
  "~": "00000 00000 01001 10110 00000 00000 00000",
  ";": "00000 01100 01100 00000 01100 00100 01000",
  ",": "00000 00000 00000 00000 01100 00100 01000",
  "\"": "01010 01010 01010 00000 00000 00000 00000",
  "'": "00100 00100 00100 00000 00000 00000 00000",
  "^": "00100 01010 10001 00000 00000 00000 00000",
  "/": "00001 00010 00100 01000 10000 00000 00000",
  "\\": "10000 01000 00100 00010 00001 00000 00000",
  "|": "00100 00100 00100 00100 00100 00100 00100",
  "_": "00000 00000 00000 00000 00000 00000 11111",
  "O": "01110 10001 10001 10001 10001 10001 01110",
  "o": "00000 00000 01110 10001 10001 10001 01110",
  "0": "01110 10001 10011 10101 11001 10001 01110",
  "(": "00010 00100 01000 01000 01000 00100 00010",
  ")": "01000 00100 00010 00010 00010 00100 01000",
  "A": "01110 10001 10001 11111 10001 10001 10001",
  "I": "11111 00100 00100 00100 00100 00100 11111",
  "R": "11110 10001 10001 11110 10100 10010 10001",
  "S": "01111 10000 10000 01110 00001 00001 11110",
  "C": "01110 10001 10000 10000 10000 10001 01110",
};

function bitsOf(ch) {
  const s = BITS[ch];
  if (!s) return null;
  return s.split(" ").map((row) => row.split(""));
}

function drawSpecial(ctx, ch, x, y, s) {
  const cx = x + s / 2;
  const cy = y + s / 2;
  const pad = s * 0.16;
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#fff";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = Math.max(4, s * 0.11);

  if (ch === "≈") {
    ctx.beginPath();
    for (let k = 0; k < 2; k++) {
      const yy = cy + (k === 0 ? -s * 0.1 : s * 0.12);
      ctx.moveTo(x + pad, yy);
      ctx.bezierCurveTo(x + s * 0.35, yy - s * 0.12, x + s * 0.55, yy + s * 0.12, x + s - pad, yy);
    }
    ctx.stroke();
    return true;
  }
  if (ch === "▲") {
    ctx.beginPath();
    ctx.moveTo(cx, y + pad);
    ctx.lineTo(x + s - pad, y + s - pad);
    ctx.lineTo(x + pad, y + s - pad);
    ctx.closePath();
    ctx.fill();
    return true;
  }
  if (ch === "░" || ch === "▒" || ch === "▓") {
    const dens = ch === "░" ? 0.28 : ch === "▒" ? 0.5 : 0.78;
    const step = s / 8;
    for (let iy = 0; iy < 8; iy++) {
      for (let ix = 0; ix < 8; ix++) {
        const on = ((ix + iy) % 2 === 0) ? dens > 0.4 : dens > 0.25;
        const force = dens > 0.7 || (on && (ix * 3 + iy * 7) % 10 < dens * 10);
        if (force) ctx.fillRect(x + ix * step, y + iy * step, step + 0.3, step + 0.3);
      }
    }
    return true;
  }
  if (ch === "█") {
    ctx.fillRect(x + s * 0.04, y + s * 0.04, s * 0.92, s * 0.92);
    return true;
  }
  if (ch === "—") {
    ctx.fillRect(x + pad, cy - s * 0.06, s - pad * 2, s * 0.12);
    return true;
  }
  if (ch === "♣") {
    const r = s * 0.16;
    const drawC = (ox, oy) => { ctx.beginPath(); ctx.arc(ox, oy, r, 0, Math.PI * 2); ctx.fill(); };
    drawC(cx, cy - r * 1.15);
    drawC(cx - r * 1.1, cy + r * 0.2);
    drawC(cx + r * 1.1, cy + r * 0.2);
    ctx.fillRect(cx - s * 0.07, cy, s * 0.14, s * 0.28);
    return true;
  }
  if (ch === "♠") {
    ctx.beginPath();
    ctx.moveTo(cx, y + pad);
    ctx.bezierCurveTo(x + s - pad, cy, cx + s * 0.1, cy + s * 0.15, cx, cy + s * 0.08);
    ctx.bezierCurveTo(cx - s * 0.1, cy + s * 0.15, x + pad, cy, cx, y + pad);
    ctx.fill();
    ctx.fillRect(cx - s * 0.07, cy, s * 0.14, s * 0.28);
    return true;
  }
  if (ch === "◆") {
    ctx.beginPath();
    ctx.moveTo(cx, y + pad);
    ctx.lineTo(x + s - pad, cy);
    ctx.lineTo(cx, y + s - pad);
    ctx.lineTo(x + pad, cy);
    ctx.closePath();
    ctx.fill();
    return true;
  }
  if (ch === "★") {
    ctx.beginPath();
    const spikes = 5;
    const ro = s * 0.38, ri = s * 0.16;
    for (let i = 0; i < spikes * 2; i++) {
      const a = -Math.PI / 2 + i * Math.PI / spikes;
      const r = i % 2 === 0 ? ro : ri;
      const px = cx + Math.cos(a) * r;
      const py = cy + Math.sin(a) * r;
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    return true;
  }
  if (ch === "·") {
    ctx.beginPath();
    ctx.arc(cx, cy, s * 0.07, 0, Math.PI * 2);
    ctx.fill();
    return true;
  }
  return false;
}

export function buildGlyphAtlas() {
  const w = ATLAS_COLS * ATLAS_CELL;
  const h = ATLAS_ROWS * ATLAS_CELL;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);

  // Try a stacked monospace for standard ASCII, then overdraw specials.
  const fontPx = Math.floor(ATLAS_CELL * 0.78);
  ctx.font = `700 ${fontPx}px ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", "Courier New", monospace`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#fff";

  for (let i = 0; i < GLYPHS.length; i++) {
    const ch = GLYPHS[i];
    const col = i % ATLAS_COLS;
    const row = Math.floor(i / ATLAS_COLS);
    const x = col * ATLAS_CELL;
    const y = row * ATLAS_CELL;
    if (drawSpecial(ctx, ch, x, y, ATLAS_CELL)) continue;
    const bits = bitsOf(ch);
    if (bits) {
      drawPixelGlyph(ctx, x, y, ATLAS_CELL, bits);
      continue;
    }
    ctx.fillStyle = "#fff";
    ctx.fillText(ch, x + ATLAS_CELL / 2, y + ATLAS_CELL / 2 + 1);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter; // linear inside the cell; compose smoothstep keeps it sharp
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.NoColorSpace;
  tex.flipY = false;
  tex.needsUpdate = true;
  tex.generateMipmaps = false;
  return { texture: tex, canvas, cols: ATLAS_COLS, rows: ATLAS_ROWS, cell: ATLAS_CELL, count: GLYPHS.length };
}
