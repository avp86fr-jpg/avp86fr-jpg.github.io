import * as THREE from "three";
import { CAM } from "../core/config.js";

const _fwd = new THREE.Vector3();
const _up = new THREE.Vector3();
const _right = new THREE.Vector3();
const _tgt = new THREE.Vector3();
const _pos = new THREE.Vector3();
const _look = new THREE.Vector3();

export function createFlightCamera(camera) {
  const state = {
    mode: "chase",
    comfort: false,
    hero: false,
    rollMix: 0,
    shake: 0,
    titleOrbit: 0,
  };

  function cycle() {
    state.mode = state.mode === "chase" ? "cockpit" : state.mode === "cockpit" ? "cinematic" : "chase";
    return state.mode;
  }

  function rig(craft, portrait = false) {
    _fwd.set(0, 0, -1).applyQuaternion(craft.quat);
    _up.set(0, 1, 0).applyQuaternion(craft.quat);
    _right.set(1, 0, 0).applyQuaternion(craft.quat);
    _right.y = 0;
    if (_right.lengthSq() < 1e-6) _right.set(1, 0, 0);
    else _right.normalize();

    const hero = state.hero;
    const landing = hero === "landing";
    if (state.mode === "cockpit") {
      _pos.copy(craft.pos).addScaledVector(_fwd, 1.2).addScaledVector(_up, 0.7);
      _look.copy(craft.pos).addScaledVector(_fwd, 40);
      return { pos: _pos, look: _look, up: _up };
    }
    if (state.mode === "cinematic") {
      const t = performance.now() * 0.00015;
      const side = Math.sin(t) * 18;
      _pos.copy(craft.pos).addScaledVector(_fwd, -22).addScaledVector(_up, 6)
        .add(_right.clone().multiplyScalar(side));
      _look.copy(craft.pos);
      return { pos: _pos, look: _look, up: new THREE.Vector3(0, 1, 0) };
    }
    if (landing) {
      const dist = 20 + (portrait ? 3 : 0);
      const height = 6.2 + (portrait ? 1.5 : 0);
      _pos.copy(craft.pos).addScaledVector(_fwd, -dist).add(new THREE.Vector3(0, height, 0)).addScaledVector(_right, 5);
      _look.copy(craft.pos).addScaledVector(_fwd, 110).add(new THREE.Vector3(0, -3, 0));
      return { pos: _pos, look: _look, up: new THREE.Vector3(0, 1, 0) };
    }
    if (hero) {
      // Higher, further back, slight side offset, looking down ~12–15°.
      // Wingspan ~11.6 m at ~36 m back ≈ 30% of a 55° frame.
      const dist = 38 + (portrait ? 4 : 0);
      const height = 13 + (portrait ? 1.5 : 0);
      const side = 12;
      _pos.copy(craft.pos).addScaledVector(_fwd, -dist).add(new THREE.Vector3(0, height, 0)).addScaledVector(_right, -side);
      _look.copy(craft.pos).addScaledVector(_fwd, 52).add(new THREE.Vector3(0, -14, 0));
      return { pos: _pos, look: _look, up: new THREE.Vector3(0, 1, 0) };
    }
    const dist = CAM.chaseDist + (portrait ? 3 : 0);
    const height = CAM.chaseHeight + (portrait ? 2 : 0);
    _pos.copy(craft.pos).addScaledVector(_fwd, -dist).add(new THREE.Vector3(0, height, 0)).addScaledVector(_right, 3.2);
    _look.copy(craft.pos).addScaledVector(_fwd, 18).add(new THREE.Vector3(0, 0.2, 0));
    // Horizon stays level; a hint of bank so turns feel alive, never a rolled camera.
    const up = new THREE.Vector3(Math.sin((craft.roll || 0) * 0.18), 1, 0).normalize();
    return { pos: _pos, look: _look, up };
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

    const r = rig(craft, portrait);
    if (state.mode === "cockpit") {
      camera.position.copy(r.pos);
    } else if (state.hero) {
      camera.position.copy(r.pos);
    } else {
      camera.position.lerp(r.pos, 1 - Math.exp(-CAM.chaseLag * dt));
    }
    camera.up.copy(r.up);
    camera.lookAt(r.look);

    if (state.shake > 0) {
      camera.position.x += (Math.random() - 0.5) * state.shake;
      camera.position.y += (Math.random() - 0.5) * state.shake;
      state.shake = Math.max(0, state.shake - dt * 4);
    }
    camera.updateProjectionMatrix();
  }

  function bump(amt = 0.4) { state.shake = Math.max(state.shake, amt); }

  function snap(craft, portrait = false) {
    if (state.mode === "title") state.mode = "chase";
    const r = rig(craft, portrait);
    camera.position.copy(r.pos);
    camera.up.copy(r.up);
    camera.lookAt(r.look);
    camera.fov = portrait ? CAM.fovPortrait : CAM.fov;
    camera.updateProjectionMatrix();
  }

  return { state, update, cycle, bump, snap, camera };
}
