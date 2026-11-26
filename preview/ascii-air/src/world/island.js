import * as THREE from "three";
import { LANDMARKS } from "../core/config.js";
import { createTerrain } from "./terrain.js";
import { createWater } from "./water.js";
import { createSky } from "./sky.js";
import { createLandmarks } from "./landmarks.js";
import { createFlora } from "./flora.js";
import { createSkyProps, createThermals } from "./skyprops.js";

export const THERMAL_FIELDS = [
  { id: "volcano-e", x: 220, z: 280, r: 80, y: 40, h: 220, strength: 14 },
  { id: "volcano-w", x: -180, z: 160, r: 70, y: 40, h: 200, strength: 12 },
  { id: "mills", x: -480, z: 80, r: 90, y: 50, h: 160, strength: 9 },
  { id: "ridge", x: -700, z: 1100, r: 70, y: 90, h: 160, strength: 11 },
  { id: "castle", x: 280, z: 780, r: 70, y: 80, h: 140, strength: 8 },
  { id: "valley", x: 360, z: 440, r: 60, y: 40, h: 120, strength: 7 },
];

export function createIsland(scene, quality = "medium") {
  const terrain = createTerrain(quality);
  scene.add(terrain.mesh);

  const sky = createSky(scene);
  const water = createWater();
  scene.add(water.mesh, water.lake);

  const landmarks = createLandmarks(scene, terrain, sky, quality);
  const flora = createFlora(scene, terrain, quality);
  const skyprops = createSkyProps(scene, quality);
  const thermals = createThermals(scene, THERMAL_FIELDS);

  function heightAt(x, z) { return terrain.heightAt(x, z); }
  function materialAt(x, z) { return terrain.materialAt(x, z); }
  function normalAt(x, z) { return terrain.normalAt(x, z); }

  function isWater(x, z) {
    return heightAt(x, z) < 0.35;
  }

  function landingSurface(x, z) {
    // returns 'runway' | 'beach' | 'grass' | 'lagoon' | 'water' | null
    const h = heightAt(x, z);
    if (Math.abs(z + 1100) < 30 && Math.abs(x) < 450 && h > 1.5 && h < 12) return "runway";
    if (Math.abs(z - 1120) < 18 && Math.abs(x + 820) < 150 && h > 80) return "grass";
    const dLag = Math.hypot(x + 740, z + 1120);
    const dSunny = Math.hypot(x - 40, z + 1220);
    const dCape = Math.hypot(x - LANDMARKS.lighthouse.x, z - LANDMARKS.lighthouse.z);
    if (dLag < 220 && h < 2.2) return "lagoon";
    if (h < 0.35) return "water";
    if (dSunny < 110 && h < 6) return "beach";
    if (dCape < 140 && h < 8) return "beach";
    if (h < 2.8 && dLag < 280) return "beach";
    return null;
  }

  function thermalAt(x, z, y) {
    let sum = 0;
    for (const f of THERMAL_FIELDS) {
      const d = Math.hypot(x - f.x, z - f.z);
      if (d < f.r && y < f.y + f.h && y > f.y - 10) {
        const rad = 1 - d / f.r;
        const vert = 1 - Math.abs(((y - f.y) / f.h) - 0.4);
        sum += f.strength * Math.max(0, rad) * Math.max(0, vert);
      }
    }
    // ridge lift on windward (west) cliffs
    const n = terrain.normalAt(x, z);
    if (n.x > 0.35 && y < heightAt(x, z) + 80 && y > heightAt(x, z) - 5) {
      sum += n.x * 6;
    }
    return sum;
  }

  function update(dt, time, hour) {
    sky.setHour(hour);
    water.update(time, sky);
    landmarks.update(dt, time, hour, sky.night);
    skyprops.update(dt, time);
    thermals.update(dt);
  }

  function setStorm(on, windKt) {
    if (skyprops && typeof skyprops.setStorm === "function") skyprops.setStorm(on);
    if (landmarks && typeof landmarks.setWind === "function") landmarks.setWind(windKt, on);
  }

  return {
    terrain, sky, water, landmarks, flora, skyprops, thermals,
    heightAt, materialAt, normalAt, isWater, landingSurface, thermalAt,
    update, setStorm, LANDMARKS,
  };
}
