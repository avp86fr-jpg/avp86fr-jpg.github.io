import * as THREE from "three";

const VERT = /* glsl */ `
attribute vec2 aId;
varying vec2 vId;
void main() {
  vId = aId;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const FRAG = /* glsl */ `
precision highp float;
varying vec2 vId;
void main() {
  gl_FragColor = vec4(vId.x / 255.0, vId.y, 0.0, 1.0);
}
`;

let _idMat = null;
export function getIdMaterial() {
  if (!_idMat) {
    _idMat = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      side: THREE.DoubleSide,
    });
  }
  return _idMat;
}

export function tagMesh(object, matId, hero = 0) {
  object.traverse((o) => {
    if (!o.isMesh && !o.isInstancedMesh && !o.isSkinnedMesh) return;
    o.userData.matId = matId;
    o.userData.hero = hero;
    const geo = o.geometry;
    if (!geo) return;
    const pos = geo.getAttribute("position");
    if (!pos) return;
    // Don't overwrite if already tagged with same id (shared geo risk: only set if missing)
    if (geo.getAttribute("aId")) {
      // If shared and already tagged, leave it — callers should clone geo when ids differ
      return;
    }
    const n = pos.count;
    const arr = new Float32Array(n * 2);
    for (let i = 0; i < n; i++) {
      arr[i * 2] = matId;
      arr[i * 2 + 1] = hero;
    }
    geo.setAttribute("aId", new THREE.BufferAttribute(arr, 2));
  });
  return object;
}

export function retagGeometry(geometry, matId, hero = 0) {
  const pos = geometry.getAttribute("position");
  const n = pos.count;
  const arr = new Float32Array(n * 2);
  for (let i = 0; i < n; i++) {
    arr[i * 2] = matId;
    arr[i * 2 + 1] = hero;
  }
  geometry.setAttribute("aId", new THREE.BufferAttribute(arr, 2));
  return geometry;
}
