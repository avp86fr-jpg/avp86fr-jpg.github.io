import { TIME } from "../core/config.js";

export function createClock(hour = TIME.startHour) {
  return {
    hour,
    frozen: false,
    set(h) { this.hour = ((h % 24) + 24) % 24; },
    step(dt) {
      if (this.frozen) return this.hour;
      this.hour = ((this.hour + dt * TIME.freeFlightHoursPerSecond) % 24 + 24) % 24;
      return this.hour;
    },
  };
}
