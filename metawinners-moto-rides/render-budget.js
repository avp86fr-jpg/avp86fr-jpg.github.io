// Keep pixel cost bounded on high-DPI phones/tablets. Physics always stays at 60 Hz.
export function resolutionLimit(width, height, deviceRatio = 1, quality = 'auto', mobile = false) {
  const area = Math.max(1, width * height);
  const budget = mobile ? 1250000 : quality === 'high' ? 4000000 : 3000000;
  return Math.min(Math.max(.1, deviceRatio || 1), mobile ? 1.25 : 1.5, Math.sqrt(budget / area));
}

export class RenderBudget {
  constructor(limit = 1) {
    this.ratio = this.limit = limit;
    this.reset();
  }
  reset() {
    this.warmup = 1;
    this.seconds = this.frames = this.slow = this.fast = 0;
  }
  resize(limit) {
    this.limit = Math.max(.1, limit);
    this.ratio = Math.min(this.ratio, this.limit);
    this.reset();
    return this.ratio;
  }
  sample(dt) {
    // A suspended tab, debugger pause or first frame is not GPU load evidence.
    if (!Number.isFinite(dt) || dt <= 0 || dt > .12) { this.reset(); return this.ratio; }
    if (this.warmup > 0) { this.warmup -= dt; return this.ratio; }
    this.seconds += dt;
    this.frames++;
    if (this.seconds < 1.25) return this.ratio;
    const milliseconds = this.seconds / this.frames * 1000;
    this.seconds = this.frames = 0;
    this.slow = milliseconds > 23 ? this.slow + 1 : 0;
    this.fast = milliseconds < 18.2 ? this.fast + 1 : 0;
    if (this.slow >= 2) {
      this.ratio = Math.max(Math.min(.75, this.limit * .8), this.ratio - .1);
      this.slow = this.fast = 0;
    } else if (this.fast >= 4) {
      this.ratio = Math.min(this.limit, this.ratio + .05);
      this.slow = this.fast = 0;
    }
    return this.ratio;
  }
}
