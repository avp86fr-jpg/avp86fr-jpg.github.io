import * as THREE from "three";
import { MAT } from "../core/config.js";
import { patchMaterialIdAlpha } from "./idMaterial.js";

const loader = new THREE.TextureLoader();
const cache = {};

const ready = {};

export function loadTex(name) {
  if (cache[name]) return cache[name];
  let resolve;
  ready[name] = new Promise((r) => { resolve = r; });
  const t = loader.load("./textures/" + name, () => resolve(t), undefined, () => resolve(t));
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.magFilter = THREE.LinearFilter;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.anisotropy = 4;
  t.colorSpace = THREE.SRGBColorSpace;
  t.generateMipmaps = true;
  cache[name] = t;
  return t;
}

export function texturesReady() {
  const names = ["rock.png", "grass.png", "plaster.png", "roof.png", "sand.png", "stone.png", "water.png", "backdrop.png", "corrugate.png", "crops.png", "keep_rock.png", "leaf.png"];
  for (const n of names) loadTex(n);
  return Promise.all(Object.values(ready));
}

function injectWorldVaryings(shader) {
  if (shader.vertexShader.indexOf("vWorldPos") >= 0) return;
  shader.vertexShader = shader.vertexShader.replace(
    "#include <common>",
    "#include <common>\nvarying vec3 vWorldPos;\nvarying vec3 vWorldN;"
  );
  const hook = shader.vertexShader.indexOf("#include <worldpos_vertex>") >= 0
    ? "#include <worldpos_vertex>"
    : "#include <project_vertex>";
  shader.vertexShader = shader.vertexShader.replace(
    hook,
    hook + "\nvWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;\nvWorldN = normalize(mat3(modelMatrix) * objectNormal);"
  );
  shader.fragmentShader = shader.fragmentShader.replace(
    "#include <common>",
    "#include <common>\nvarying vec3 vWorldPos;\nvarying vec3 vWorldN;"
  );
}

function triplanarSample(scaleExpr = "uTriScale") {
  return `
    vec3 _n = normalize(vWorldN);
    vec3 _b = pow(abs(_n), vec3(4.0));
    _b /= max(_b.x + _b.y + _b.z, 0.0001);
    vec3 _tp = vWorldPos * ${scaleExpr};
    vec3 _tx = texture2D(uTriMap, _tp.yz).rgb;
    vec3 _ty = texture2D(uTriMap, _tp.xz).rgb;
    vec3 _tz = texture2D(uTriMap, _tp.xy).rgb;
    vec3 tri = _tx * _b.x + _ty * _b.y + _tz * _b.z;
  `;
}

/** MeshLambert with a single triplanar map, multiplied by the material / vertex colour. */
export function triplanarLambert({
  map,
  scale = 0.08,
  color = 0xffffff,
  vertexColors = false,
  flatShading = true,
  matId = null,
} = {}) {
  const mat = new THREE.MeshLambertMaterial({ color, vertexColors, flatShading });
  mat.userData.triMap = map;
  mat.userData.triScale = scale;
  if (matId != null) mat.userData.matId = matId;
  patchMaterialIdAlpha(mat);
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (shader, renderer) => {
    if (typeof prev === "function") prev(shader, renderer);
    shader.uniforms.uTriMap = { value: mat.userData.triMap };
    shader.uniforms.uTriScale = { value: mat.userData.triScale };
    injectWorldVaryings(shader);
    if (shader.fragmentShader.indexOf("uTriMap") < 0) {
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <common>",
        "#include <common>\nuniform sampler2D uTriMap;\nuniform float uTriScale;"
      );
    }
    if (shader.fragmentShader.indexOf("vec3 tri =") < 0) {
      const hook = shader.fragmentShader.indexOf("#include <color_fragment>") >= 0
        ? "#include <color_fragment>"
        : "#include <lights_lambert_fragment>";
      shader.fragmentShader = shader.fragmentShader.replace(
        hook,
        hook + "\n" + triplanarSample() + "\ndiffuseColor.rgb *= mix(vec3(1.0), tri * 1.15, 0.55);\n"
      );
    }
  };
  const prevKey = mat.customProgramCacheKey.bind(mat);
  mat.customProgramCacheKey = () => prevKey() + "|tri-v1";
  mat.needsUpdate = true;
  return mat;
}

/** Terrain: pick grass / rock / sand from the per-vertex material id, then tint with vertex colour. */
export function terrainLambert() {
  const grass = loadTex("grass.png");
  const rock = loadTex("rock.png");
  const sand = loadTex("sand.png");
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: false });
  mat.userData.matId = MAT.GRASS;
  patchMaterialIdAlpha(mat);
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (shader, renderer) => {
    if (typeof prev === "function") prev(shader, renderer);
    shader.uniforms.uTexGrass = { value: grass };
    shader.uniforms.uTexRock = { value: rock };
    shader.uniforms.uTexSand = { value: sand };
    injectWorldVaryings(shader);
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <common>",
      `#include <common>
uniform sampler2D uTexGrass;
uniform sampler2D uTexRock;
uniform sampler2D uTexSand;`
    );
    const hook = shader.fragmentShader.indexOf("#include <color_fragment>") >= 0
      ? "#include <color_fragment>"
      : "#include <lights_lambert_fragment>";
    shader.fragmentShader = shader.fragmentShader.replace(
      hook,
      hook + `
      {
        vec3 n = normalize(vWorldN);
        vec3 b = pow(abs(n), vec3(3.0));
        b /= max(b.x + b.y + b.z, 0.0001);
        vec3 tpG = vWorldPos * 0.08;
        vec3 tpGd = vWorldPos * 0.23;
        vec3 tpR = vWorldPos * 0.045;
        vec3 tpRd = vWorldPos * 0.13;
        vec3 tpS = vWorldPos * 0.09;
        vec3 grassA = texture2D(uTexGrass, tpG.yz).rgb * b.x + texture2D(uTexGrass, tpG.xz).rgb * b.y + texture2D(uTexGrass, tpG.xy).rgb * b.z;
        vec3 grassB = texture2D(uTexGrass, tpGd.yz).rgb * b.x + texture2D(uTexGrass, tpGd.xz).rgb * b.y + texture2D(uTexGrass, tpGd.xy).rgb * b.z;
        vec3 grassT = mix(grassA, grassB, 0.42);
        vec3 rockA  = texture2D(uTexRock,  tpR.yz).rgb * b.x + texture2D(uTexRock,  tpR.xz).rgb * b.y + texture2D(uTexRock,  tpR.xy).rgb * b.z;
        vec3 rockB  = texture2D(uTexRock,  tpRd.yz).rgb * b.x + texture2D(uTexRock,  tpRd.xz).rgb * b.y + texture2D(uTexRock,  tpRd.xy).rgb * b.z;
        vec3 rockT  = mix(rockA, rockB, 0.40);
        vec3 sandT  = texture2D(uTexSand,  tpS.yz).rgb * b.x + texture2D(uTexSand,  tpS.xz).rgb * b.y + texture2D(uTexSand,  tpS.xy).rgb * b.z;
        float mid = vId.x;
        vec3 tex = grassT;
        // Coastal limestone: cream-grey, less of the atlas showing through
        float coastal = step(vWorldPos.z, -1080.0) + step(length(vWorldPos.xz - vec2(-170.0, -1190.0)), 230.0);
        coastal = clamp(coastal, 0.0, 1.0);
        if (mid > 4.5 && mid < 6.5) {
          tex = mix(rockT, vec3(0.86, 0.80, 0.66), coastal * 0.55);
        }
        else if (mid > 1.5 && mid < 2.5) tex = sandT;
        else if (mid > 22.5 && mid < 23.5) tex = sandT; // runway
        else if (mid > 21.5 && mid < 22.5) tex = sandT; // dirt / apron, may be overwritten by crops
        else if (mid > 3.5 && mid < 4.5) tex = mix(grassT, rockT * vec3(0.45, 0.7, 0.35), 0.35); // forest
        // Crop rows on fields (DIRT, and grass tagged aId.y = 2). Skip the airport apron.
        float isField = (mid > 21.5 && mid < 22.5 ? 1.0 : 0.0) + (vId.y > 1.5 ? 1.0 : 0.0);
        float apron = step(abs(vWorldPos.z + 1100.0), 100.0) * step(abs(vWorldPos.x), 520.0);
        isField *= (1.0 - apron);
        if (isField > 0.5) {
          float hash = fract(sin(floor(vWorldPos.x * 0.028) * 127.1 + floor(vWorldPos.z * 0.028) * 311.7) * 43758.5);
          float ang = hash * 3.14159;
          float ca = cos(ang), sa = sin(ang);
          float u = vWorldPos.x * ca + vWorldPos.z * sa;
          float v = -vWorldPos.x * sa + vWorldPos.z * ca;
          float row = 0.5 + 0.5 * sin(u * 2.05);
          float furrow = smoothstep(0.82, 0.98, abs(sin(u * 2.05)));
          vec3 cropA = vec3(0.72, 0.60, 0.28);
          vec3 cropB = vec3(0.46, 0.50, 0.22);
          vec3 crop = mix(cropB, cropA, row);
          crop = mix(crop, crop * 0.70, furrow);
          // Soft plot breaks / hedge hints every ~24 m
          float plot = smoothstep(0.88, 0.98, abs(sin(v * 0.26)));
          crop = mix(crop, crop * vec3(0.55, 0.64, 0.38), plot * 0.55);
          tex = crop;
        } else if (mid < 4.5) {
          // Close-range grass mottling so flat meadows are not a single green slab
          float g1 = 0.5 + 0.5 * sin(vWorldPos.x * 0.13) * sin(vWorldPos.z * 0.11);
          float g2 = 0.5 + 0.5 * sin(vWorldPos.x * 0.037 + vWorldPos.z * 0.029);
          float g3 = fract(sin(dot(floor(vWorldPos.xz * 0.08), vec2(127.1, 311.7))) * 43758.5);
          vec3 mott = mix(vec3(0.30, 0.40, 0.18), vec3(0.42, 0.52, 0.26), g1);
          mott = mix(mott, vec3(0.58, 0.52, 0.28), g2 * 0.4);
          tex = mix(tex, mott * (0.85 + 0.25 * grassT), 0.34 + 0.10 * g3);
          float terr = smoothstep(0.82, 0.98, abs(sin(vWorldPos.y * 0.70 + vWorldPos.x * 0.02)));
          tex *= 1.0 - terr * 0.10 * clamp(n.y, 0.0, 1.0);
        }
        // Steeper faces lean toward rock even on grass ids
        float slope = 1.0 - clamp(n.y, 0.0, 1.0);
        tex = mix(tex, rockT, smoothstep(0.4, 0.75, slope) * 0.85);
        diffuseColor.rgb *= mix(vec3(1.0), tex * 1.15, 0.55);
      }
      `
    );
  };
  const prevKey = mat.customProgramCacheKey.bind(mat);
  mat.customProgramCacheKey = () => prevKey() + "|terrain-tri-v4-paint";
  mat.needsUpdate = true;
  return mat;
}

export function makeBackdrop() {
  const tex = loadTex("backdrop.png");
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  const geo = new THREE.CylinderGeometry(2400, 2400, 900, 48, 1, true);
  geo.scale(-1, 1, 1);
  const mat = new THREE.MeshBasicMaterial({
    map: tex,
    side: THREE.FrontSide,
    depthWrite: false,
    fog: false,
    toneMapped: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.y = 200;
  mesh.name = "backdrop";
  mesh.renderOrder = -10;
  mesh.frustumCulled = false;
  return mesh;
}
