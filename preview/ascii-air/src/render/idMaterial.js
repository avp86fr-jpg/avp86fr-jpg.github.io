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
    if (o.material) patchMaterialIdAlpha(o.material);
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


/** Write aId.x / 255 into fragment alpha so the color pass also carries a material ID. */
export function patchMaterialIdAlpha(material) {
  if (!material) return material;
  if (!material.userData) material.userData = {};
  if (material.userData._idAlpha) return material;
  // Sky, water and other custom shaders already pack a mat-id in alpha. Do not rewrite them.
  if (material.isShaderMaterial || material.isRawShaderMaterial || material.isPointsMaterial || material.isLineBasicMaterial || material.isLineDashedMaterial) {
    return material;
  }
  material.userData._idAlpha = true;
  const prev = material.onBeforeCompile;
  material.onBeforeCompile = (shader, renderer) => {
    if (typeof prev === "function") prev(shader, renderer);
    const vs = shader.vertexShader || "";
    const hasCommon = vs.indexOf("#include <common>") >= 0;
    if (!hasCommon) return; // built-in materials only
    if (vs.indexOf("attribute vec2 aId") < 0) {
      shader.vertexShader = vs.replace(
        "#include <common>",
        "#include <common>\nattribute vec2 aId;\nvarying vec2 vId;"
      );
      if (shader.vertexShader.indexOf("#include <begin_vertex>") >= 0) {
        shader.vertexShader = shader.vertexShader.replace(
          "#include <begin_vertex>",
          "#include <begin_vertex>\nvId = aId;"
        );
      }
    }
    const fs = shader.fragmentShader || "";
    if (fs.indexOf("#include <common>") < 0) return;
    if (fs.indexOf("varying vec2 vId") < 0) {
      shader.fragmentShader = fs.replace(
        "#include <common>",
        "#include <common>\nvarying vec2 vId;"
      );
    }
    if (shader.fragmentShader.indexOf("vId.x / 255.0") < 0 && shader.fragmentShader.indexOf("#include <dithering_fragment>") >= 0) {
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <dithering_fragment>",
        "#include <dithering_fragment>\ngl_FragColor.a = vId.x / 255.0;\n"
      );
    }
  };
  const prevKey = material.customProgramCacheKey.bind(material);
  material.customProgramCacheKey = () => (prevKey ? prevKey() : "") + "|id-alpha-v2";
  material.needsUpdate = true;
  return material;
}
