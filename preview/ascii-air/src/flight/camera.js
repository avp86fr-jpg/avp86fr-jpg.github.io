import * as THREE from "three";
import { CAM } from "../core/config.js";
import { damp, lerp } from "../core/utils.js";

const _fwd = new THREE.Vector3();
const _up = new THREE.Vector3();
const _tgt = new THREE.Vector3();
const _pos = new THREE.Vector3();
const _look = new THREE.Vector3();
const _q = new THREE.Quaternion();

export function createFlightCamera(camera) {
  const state = {
    mode: "chase", // chase | cockpit | cinematic
    comfort: false,
    rollMix: 0,
    shake: 0,
    titleOrbit: 0,
  };

  function cycle() {
    state.mode = state.mode === "chase" ? "cockpit" : state.mode === "cockpit" ? "cinematic" : "chase";
    return state.mode;
  }

  function update(dt, craft, portrait = false) {
    camera.fov = portrait ? CAM.fovPortrait : CAM.fov;
    camera.near = CAM.near;
    camera.far = CAM.far;

    if (state.mode === "title") {
      state.titleOrbit += dt * 0.05;
      const r = 980;
      camera.position.set(Math.cos(state.titleOrbit) * r, 340, Math.sin(state.titleOrbit) * r);
      camera.lookAt(0, 20, 0);
      camera.updateProjectionMatrix();
      return;
    }

    _fwd.set(0, 0, -1).applyQuaternion(craft.quat);
    _up.set(0, 1, 0).applyQuaternion(craft.quat);
    const worldUp = state.comfort ? new THREE.Vector3(0, 1, 0) : _up.clone().lerp(new THREE.Vector3(0, 1, 0), 0.45);

    if (state.mode === "cockpit") {
      _pos.copy(craft.pos).addScaledVector(_fwd, 1.2).addScaledVector(_up, 0.7);
      _look.copy(craft.pos).addScaledVector(_fwd, 40);
      camera.position.copy(_pos);
      camera.up.copy(worldUp);
      camera.lookAt(_look);
    } else if (state.mode === "cinematic") {
      const t = performance.now() * 0.00015;
      const side = Math.sin(t) * 18;
      _pos.copy(craft.pos)
        .addScaledVector(_fwd, -22)
        .addScaledVector(_up, 6)
        .add(new THREE.Vector3(0, 0, 0).copy(_fwd).cross(new THREE.Vector3(0, 1, 0)).normalize().multiplyScalar(side));
      camera.position.lerp(_pos, 1 - Math.exp(-2 * dt));
      camera.up.set(0, 1, 0);
      camera.lookAt(craft.pos);
    } else {
      const dist = CAM.chaseDist + (portrait ? 3 : 0);
      const height = CAM.chaseHeight + (portrait ? 2 : 0);
      _pos.copy(craft.pos).addScaledVector(_fwd, -dist).add(new THREE.Vector3(0, height, 0));
      // keep above terrain slightly — caller can lift
      camera.position.lerp(_pos, 1 - Math.exp(-CAM.chaseLag * dt));
      camera.up.copy(worldUp);
      _look.copy(craft.pos).addScaledVector(_fwd, 8).add(new THREE.Vector3(0, 1.2, 0));
      camera.lookAt(_look);
    }

    if (state.shake > 0) {
      camera.position.x += (Math.random() - 0.5) * state.shake;
      camera.position.y += (Math.random() - 0.5) * state.shake;
      state.shake = Math.max(0, state.shake - dt * 4);
    }
    camera.updateProjectionMatrix();
  }

  function bump(amt = 0.4) { state.shake = Math.max(state.shake, amt); }

  return { state, update, cycle, bump, camera };
}
