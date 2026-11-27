import * as THREE from "three";
import { MAT, QUALITY, LANDMARKS } from "../core/config.js";
import { retagGeometry, tagMesh, patchMaterialIdAlpha } from "../render/idMaterial.js";
import { TAU } from "../core/utils.js";

function cloudPuff(mat) {
  const g = new THREE.Group();
  const geo = retagGeometry(new THREE.SphereGeometry(1, 8, 6), MAT.CLOUD);
  // Stacked cumulus cluster — enough vertical overlap that a chase view
  // never collapses the puff into a flat ellipse / UFO disc.
  const spots = [
    [0, 0, 0, 1.9],
    [1.85, 0.2, 0.4, 1.5],
    [-1.75, 0.16, -0.35, 1.45],
    [0.55, 0.22, 1.45, 1.25],
    [-0.65, 0.16, -1.3, 1.2],
    [1.2, 1.15, 1.0, 1.15],
    [-1.15, 1.05, -0.9, 1.1],
    [0.25, 1.35, 0.18, 1.45],
    [1.25, 1.15, -0.5, 1.05],
    [-1.15, 1.2, 0.45, 1.05],
    [0.2, 2.25, 0.1, 1.15],
    [0.9, 1.9, 0.5, 0.85],
    [-0.8, 1.85, -0.35, 0.82],
    [0.15, 3.15, 0.08, 0.95],
    [0.45, 3.7, 0.14, 0.62],
    [-0.32, 3.45, -0.16, 0.56],
    [0.06, 4.2, 0.05, 0.42],
  ];
  for (const [x, y, z, s] of spots) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.scale.setScalar(s);
    g.add(m);
  }
  return g;
}


function makeCloudMaterial() {
  // Custom shader so we can pack matId in alpha AND soften rims with dither
  // (patchMaterialIdAlpha would overwrite a true soft-alpha edge).
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uSun: { value: new THREE.Vector3(0.42, 0.82, 0.28) },
      uTint: { value: new THREE.Color(0xffffff) },
      uEmissive: { value: new THREE.Color(0xfff4e4) },
      uEmit: { value: 0.28 },
      fogColor: { value: new THREE.Color(0xb8d6ea) },
      fogNear: { value: 800 },
      fogFar: { value: 5200 },
    },
    vertexColors: true,
    transparent: false,
    depthWrite: true,
    side: THREE.FrontSide,
    vertexShader: /* glsl */ `
      attribute vec3 color;
      varying vec3 vCol;
      varying vec3 vN;
      varying vec3 vW;
      varying float vFog;
      void main() {
        vCol = color;
        vN = normalize(normalMatrix * normal);
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vW = wp.xyz;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        vFog = -mv.z;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uSun;
      uniform vec3 uTint;
      uniform vec3 uEmissive;
      uniform float uEmit;
      uniform vec3 fogColor;
      uniform float fogNear;
      uniform float fogFar;
      varying vec3 vCol;
      varying vec3 vN;
      varying vec3 vW;
      varying float vFog;
      void main() {
        vec3 n = normalize(vN);
        vec3 v = normalize(cameraPosition - vW);
        float ndv = abs(dot(n, v));
        float fres = pow(1.0 - ndv, 2.4);
        float lit = 0.62 + 0.50 * max(0.0, dot(n, normalize(uSun)));
        vec3 col = vCol * uTint * lit + uEmissive * uEmit;
        // Warm bright rim, so the volume never reads as a grey rock
        col = mix(col, vec3(1.0, 0.98, 0.94), fres * 0.62);
        // Soft silhouette: screen-door the glancing edge instead of a hard outline
        float dither = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
        float keep = smoothstep(0.04, 0.32, ndv);
        if (keep < 0.12 && dither > keep + 0.15) discard;
        float fg = smoothstep(fogNear, fogFar, vFog);
        col = mix(col, fogColor, fg * 0.55);
        gl_FragColor = vec4(col, 7.0 / 255.0);
      }
    `,
  });
  mat.userData.matId = 7; // MAT.CLOUD
  return mat;
}

export function createSkyProps(scene, quality = "medium") {
  const q = QUALITY[quality] || QUALITY.medium;
  const group = new THREE.Group();
  group.name = "skyprops";

  const cloudMat = makeCloudMaterial();
  const clouds = new THREE.Group();
  const nCloud = Math.floor(4 * q.clouds);
  const puff = cloudPuff(cloudMat);
  puff.updateMatrixWorld(true);
  // instance each sub-sphere of a puff? Simpler: clone groups (few dozen is ok-ish)
  // To keep draw calls down, merge one puff and instance it.
  const merged = new THREE.BufferGeometry();
  const geos = [];
  puff.traverse((o) => {
    if (!o.isMesh) return;
    const g = o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    geos.push(g);
  });
  let cloudGeo;
  if (THREE.BufferGeometryUtils) {
    cloudGeo = THREE.BufferGeometryUtils.mergeGeometries(geos);
  } else {
    // manual merge of positions
    cloudGeo = mergeSimple(geos, MAT.CLOUD);
  }
  // Horizon banks behind the island + a few large high clouds. Not a cluttered field.
  const heroSpots = [
    // Large sunlit banks in the postcard sky (south bay looks north)
    [  40, 200, -620, 88],
    [-280, 190, -780, 76],
    [ 300, 185, -800, 74],
    [-720, 240, 80, 64],
    [ 760, 230, 40, 62],
  ];
  // White tops, soft blue undersides — album cumulus, not grey blobs
  {
    const pos = cloudGeo.getAttribute("position");
    const col = new Float32Array(pos.count * 3);
    let ymin = Infinity, ymax = -Infinity;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      if (y < ymin) ymin = y;
      if (y > ymax) ymax = y;
    }
    const span = Math.max(0.001, ymax - ymin);
    for (let i = 0; i < pos.count; i++) {
      const k = (pos.getY(i) - ymin) / span;
      // Warm-lit white crowns, soft lavender-blue undersides — not grey
      const b = Math.pow(k, 0.65);
      col[i * 3]     = 0.70 + 0.30 * b;
      col[i * 3 + 1] = 0.74 + 0.24 * b;
      col[i * 3 + 2] = 0.88 + 0.10 * b;
    }
    cloudGeo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  }
  const cloudInst = new THREE.InstancedMesh(cloudGeo, cloudMat, nCloud + heroSpots.length);
  const dummy = new THREE.Object3D();
  const cloudData = [];
  for (let i = 0; i < nCloud; i++) {
    const a = (i / nCloud) * TAU + 0.3;
    const r = 900 + (i * 97) % 800;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r * 0.85;
    const y = 340 + (i * 13) % 90;
    const s = 26 + (i * 11) % 16;
    dummy.position.set(x, y, z);
    dummy.scale.set(s, s * 1.22, s * 1.05);
    dummy.rotation.y = a;
    dummy.updateMatrix();
    cloudInst.setMatrixAt(i, dummy.matrix);
    cloudData.push({ x, y, z, s, a, r, speed: 2 + (i % 5), baseY: y, baseS: s });
  }
  for (let i = 0; i < heroSpots.length; i++) {
    const [x, y, z, s] = heroSpots[i];
    dummy.position.set(x, y, z);
    dummy.scale.set(s, s * 1.26, s * 1.08);
    dummy.rotation.y = i * 0.7;
    dummy.updateMatrix();
    cloudInst.setMatrixAt(nCloud + i, dummy.matrix);
  }
  cloudInst.count = nCloud + heroSpots.length;

  group.add(cloudInst);

  // Two colossal horizon thunderheads — many soft volumes, one draw
  function towerPuff(mat) {
    const tg = new THREE.Group();
    const geo = retagGeometry(new THREE.SphereGeometry(1, 8, 6), MAT.CLOUD);
    const spots = [];
    // Wide base, stacked body, anvil top
    for (let k = 0; k < 14; k++) {
      const yy = k * 0.42;
      const rad = k < 14 ? 1.5 + k * 0.08 : 2.4 - (k - 14) * 0.12;
      const anvil = k > 16 ? 1.0 + (k - 16) * 0.35 : 1.0;
      const a = k * 2.2;
      spots.push([Math.cos(a) * rad * 0.55 * anvil, yy, Math.sin(a) * rad * 0.45 * anvil, rad * 0.7]);
    }
    spots.push([0, 9.4, 0, 2.1], [1.8, 9.0, 0.6, 1.6], [-1.6, 8.9, -0.5, 1.5], [0.4, 10.0, 0.2, 1.2]);
    for (const [x, y, z, s] of spots) {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      m.scale.set(s * 1.15, s * 0.85, s * 1.05);
      tg.add(m);
    }
    return tg;
  }
  const towerSrc = towerPuff(cloudMat);
  towerSrc.updateMatrixWorld(true);
  const tgeos = [];
  towerSrc.traverse((o) => {
    if (!o.isMesh) return;
    const g2 = o.geometry.clone();
    g2.applyMatrix4(o.matrixWorld);
    tgeos.push(g2);
  });
  const towerGeo = mergeSimple(tgeos, MAT.CLOUD);
  {
    const pos = towerGeo.getAttribute("position");
    const col = new Float32Array(pos.count * 3);
    let ymin = Infinity, ymax = -Infinity;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      if (y < ymin) ymin = y;
      if (y > ymax) ymax = y;
    }
    const span = Math.max(0.001, ymax - ymin);
    for (let i = 0; i < pos.count; i++) {
      const b = Math.pow((pos.getY(i) - ymin) / span, 0.65);
      col[i * 3]     = 0.68 + 0.32 * b;
      col[i * 3 + 1] = 0.73 + 0.25 * b;
      col[i * 3 + 2] = 0.88 + 0.10 * b;
    }
    towerGeo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  }
  const towers = new THREE.InstancedMesh(towerGeo, cloudMat, 2);
  towers.name = "cloud-towers";
  const tdummy = new THREE.Object3D();
  // East (left of postcard) and west (right) horizon walls
  const towerSpots = [
    [ 820, 80,  40, 36],
    [-800, 90, 120, 34],
  ];
  towerSpots.forEach((s, i) => {
    tdummy.position.set(s[0], s[1], s[2]);
    tdummy.scale.set(s[3], s[3] * 1.35, s[3] * 1.05);
    tdummy.rotation.y = i * 0.8;
    tdummy.updateMatrix();
    towers.setMatrixAt(i, tdummy.matrix);
  });
  towers.instanceMatrix.needsUpdate = true;
  towers.count = 2;
  group.add(towers);

  // Balloons — one instanced mesh (ambient; mission balloons stay separate)
  const balloonProto = makeBalloon(0xe06a4f);
  balloonProto.updateMatrixWorld(true);
  const bGeos = [];
  balloonProto.traverse((o) => {
    if (!o.isMesh) return;
    const g = o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    bGeos.push(g);
  });
  // simple merge
  let bn = 0;
  for (const g of bGeos) bn += g.getAttribute("position").count;
  const bpos = new Float32Array(bn * 3);
  const bidx = [];
  let bbase = 0;
  for (const g of bGeos) {
    const p = g.getAttribute("position");
    for (let i = 0; i < p.count; i++) {
      bpos[(bbase + i) * 3] = p.getX(i);
      bpos[(bbase + i) * 3 + 1] = p.getY(i);
      bpos[(bbase + i) * 3 + 2] = p.getZ(i);
    }
    if (g.index) { for (let i = 0; i < g.index.array.length; i++) bidx.push(g.index.array[i] + bbase); }
    else { for (let i = 0; i < p.count; i++) bidx.push(bbase + i); }
    bbase += p.count;
  }
  const balloonGeo = new THREE.BufferGeometry();
  balloonGeo.setAttribute("position", new THREE.BufferAttribute(bpos, 3));
  balloonGeo.setIndex(bidx);
  balloonGeo.computeVertexNormals();
  retagGeometry(balloonGeo, MAT.BALLOON, 1);
  const balloonMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({ color: 0xe06a4f, flatShading: true }));
  const nBal = 6;
  const balloonInst = new THREE.InstancedMesh(balloonGeo, balloonMat, nBal);
  const balloons = [];
  for (let i = 0; i < nBal; i++) {
    const a = i * 0.9;
    const home = { x: Math.cos(a) * 700, y: 140 + i * 12, z: Math.sin(a) * 700 + 100 };
    dummy.position.set(home.x, home.y, home.z);
    dummy.scale.setScalar(1);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    balloonInst.setMatrixAt(i, dummy.matrix);
    balloons.push({ home, phase: i });
  }
  group.add(balloonInst);

  // Blimp
  const blimp = makeBlimp();
  group.add(blimp);

  // Birds
  const birds = makeBirdFlock(36);
  group.add(birds.group);

  scene.add(group);

  group.traverse((o) => { if (o.material) patchMaterialIdAlpha(o.material); });
  let stormOn = false;
  return {
    group, cloudInst, cloudData, balloons, blimp, birds,
    setStorm(on) {
      on = !!on;
      if (on === stormOn) return;
      stormOn = on;
      if (on) {
        if (cloudMat.uniforms && cloudMat.uniforms.uTint) {
          cloudMat.uniforms.uTint.value.setHex(0x9aa8b8);
          cloudMat.uniforms.uEmissive.value.setHex(0x3a4a58);
          cloudMat.uniforms.uEmit.value = 0.10;
        }
        if (balloonInst) balloonInst.visible = false;
        if (blimp) blimp.visible = false;
      } else {
        if (cloudMat.uniforms && cloudMat.uniforms.uTint) {
          cloudMat.uniforms.uTint.value.setHex(0xffffff);
          cloudMat.uniforms.uEmissive.value.setHex(0xfff4e4);
          cloudMat.uniforms.uEmit.value = 0.28;
        }
        if (balloonInst) balloonInst.visible = true;
        if (blimp) blimp.visible = true;
      }
    },
    update(dt, time) {
      // drift clouds slowly — skip matrix rewrite every frame if costly; update every 0.25s is ok
      dummy.rotation.set(0, 0, 0);
      for (let i = 0; i < cloudData.length; i++) {
        const c = cloudData[i];
        c.a += dt * 0.003 * c.speed;
        c.x = Math.cos(c.a) * c.r;
        c.z = Math.sin(c.a) * c.r * 0.8;
        const y = stormOn ? 85 + ((c.baseY || c.y) - 220) * 0.18 + (i % 5) * 8 : (c.baseY || c.y);
        const s = stormOn ? (c.baseS || c.s) * 1.28 : (c.baseS || c.s);
        c.y = y;
        dummy.position.set(c.x, y, c.z);
        dummy.scale.set(s * (stormOn ? 1.15 : 1), s * (stormOn ? 0.92 : 1.18), s * (stormOn ? 1.35 : 1.05));
        dummy.rotation.y = c.a;
        dummy.updateMatrix();
        cloudInst.setMatrixAt(i, dummy.matrix);
      }
      for (let i = 0; i < heroSpots.length; i++) {
        const [x, y, z, s] = heroSpots[i];
        const yy = stormOn ? 70 + y * 0.22 : y;
        const ss = stormOn ? s * 1.45 : s;
        dummy.position.set(x, yy, z);
        dummy.scale.set(ss * (stormOn ? 1.2 : 1), ss * (stormOn ? 0.9 : 1.22), ss * (stormOn ? 1.4 : 1.08));
        dummy.rotation.y = i * 0.7;
        dummy.updateMatrix();
        cloudInst.setMatrixAt(nCloud + i, dummy.matrix);
      }
      cloudInst.instanceMatrix.needsUpdate = true;

      for (let i = 0; i < balloons.length; i++) {
        const b = balloons[i];
        dummy.position.set(
          b.home.x + Math.sin(time * 0.12 + b.phase) * 40,
          b.home.y + Math.sin(time * 0.3 + b.phase) * 8,
          b.home.z + Math.cos(time * 0.1 + b.phase) * 40
        );
        dummy.rotation.set(0, time * 0.2 + b.phase, 0);
        dummy.scale.setScalar(1);
        dummy.updateMatrix();
        balloonInst.setMatrixAt(i, dummy.matrix);
      }
      balloonInst.instanceMatrix.needsUpdate = true;
      const ba = time * 0.03;
      blimp.position.set(Math.cos(ba) * 900, 260, Math.sin(ba) * 900);
      blimp.rotation.y = ba + Math.PI / 2;
      birds.update(dt, time);
    },
  };
}

function mergeSimple(geos, matId) {
  let n = 0;
  for (const g of geos) n += g.getAttribute("position").count;
  const pos = new Float32Array(n * 3);
  const nrm = new Float32Array(n * 3);
  const aid = new Float32Array(n * 2);
  let o = 0;
  const idx = [];
  let base = 0;
  for (const g of geos) {
    const p = g.getAttribute("position");
    const nn = g.getAttribute("normal");
    for (let i = 0; i < p.count; i++) {
      pos[(base + i) * 3] = p.getX(i);
      pos[(base + i) * 3 + 1] = p.getY(i);
      pos[(base + i) * 3 + 2] = p.getZ(i);
      if (nn) {
        nrm[(base + i) * 3] = nn.getX(i);
        nrm[(base + i) * 3 + 1] = nn.getY(i);
        nrm[(base + i) * 3 + 2] = nn.getZ(i);
      }
      aid[(base + i) * 2] = matId;
      aid[(base + i) * 2 + 1] = 0;
    }
    if (g.index) {
      const ia = g.index.array;
      for (let i = 0; i < ia.length; i++) idx.push(ia[i] + base);
    } else {
      for (let i = 0; i < p.count; i++) idx.push(base + i);
    }
    base += p.count;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  out.setAttribute("normal", new THREE.BufferAttribute(nrm, 3));
  out.setAttribute("aId", new THREE.BufferAttribute(aid, 2));
  out.setIndex(idx);
  return out;
}

export function makeBalloon(color) {
  const g = new THREE.Group();
  const sph = new THREE.Mesh(
    retagGeometry(new THREE.SphereGeometry(4.2, 10, 8), MAT.BALLOON, 1),
    new THREE.MeshLambertMaterial({ color, flatShading: true })
  );
  sph.position.y = 6;
  const basket = new THREE.Mesh(
    retagGeometry(new THREE.BoxGeometry(1.6, 1.2, 1.6), MAT.WOOD),
    new THREE.MeshLambertMaterial({ color: 0x6a4a28, flatShading: true })
  );
  basket.position.y = 0;
  g.add(sph, basket);
  g.userData.hero = 1;
  g.userData.matId = MAT.BALLOON;
  g.userData.radius = 4.5;
  return g;
}

function makeBlimp() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(
    retagGeometry(new THREE.SphereGeometry(1, 10, 8), MAT.CLOUD),
    new THREE.MeshLambertMaterial({ color: 0xf6e8d0, flatShading: true })
  );
  body.scale.set(18, 6, 6);
  const gondola = new THREE.Mesh(
    retagGeometry(new THREE.BoxGeometry(6, 2, 2.4), MAT.WOOD),
    new THREE.MeshLambertMaterial({ color: 0x5a3a20, flatShading: true })
  );
  gondola.position.y = -5;
  const fin = new THREE.Mesh(
    retagGeometry(new THREE.BoxGeometry(3, 4, 0.3), MAT.ROOF),
    new THREE.MeshLambertMaterial({ color: 0xe06a4f, flatShading: true })
  );
  fin.position.set(-16, 2, 0);
  g.add(body, gondola, fin);
  return g;
}

function makeBirdFlock(n) {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(n * 9); // 3 verts * n as little V shapes via lines? use triangles
  // Use instanced simple V mesh
  const v = new THREE.BufferGeometry();
  const vp = new Float32Array([-1, 0, 0, 0, 0, 0.2, 1, 0, 0, 0, 0.15, 0, 0, 0, 0.2, 0, 0, -0.1]);
  v.setAttribute("position", new THREE.BufferAttribute(vp, 3));
  v.setIndex([0, 1, 3, 1, 2, 3, 3, 1, 5]);
  retagGeometry(v, MAT.ROCK, 0);
  const inst = new THREE.InstancedMesh(v, new THREE.MeshBasicMaterial({ color: 0xece6dc, side: THREE.DoubleSide }), n);
  inst.name = "seagulls";
  const dummy = new THREE.Object3D();
  const data = [];
  const roosts = [
    [LANDMARKS.beach.x, LANDMARKS.beach.z - 20],
    [LANDMARKS.town.x + 40, LANDMARKS.town.z - 80],
    [LANDMARKS.harbor.x, LANDMARKS.harbor.z - 30],
    [430, -720],
    [LANDMARKS.lighthouse.x - 40, LANDMARKS.lighthouse.z + 20],
  ];
  for (let i = 0; i < n; i++) {
    const ro = roosts[i % roosts.length];
    data.push({
      a: (i / n) * TAU + (i % 5) * 0.4,
      r: 40 + (i % 8) * 14,
      y: 16 + (i % 7) * 4.2 + (i % roosts.length) * 3,
      s: 1.0 + (i % 3) * 0.15,
      cx: ro[0] + (i % 5 - 2) * 10,
      cz: ro[1] - (i % 4) * 8,
    });
  }
  return {
    group: inst,
    update(dt, time) {
      for (let i = 0; i < n; i++) {
        const d = data[i];
        d.a += dt * (0.55 + (i % 4) * 0.08);
        const x = Math.cos(d.a) * d.r + d.cx;
        const z = Math.sin(d.a) * d.r * 0.55 + d.cz;
        const y = d.y + Math.sin(time * 3.4 + i) * 1.6;
        dummy.position.set(x, y, z);
        dummy.rotation.set(0, -d.a + Math.PI / 2, Math.sin(time * 9 + i) * 0.45);
        dummy.scale.setScalar(2.1 * d.s);
        dummy.updateMatrix();
        inst.setMatrixAt(i, dummy.matrix);
      }
      inst.instanceMatrix.needsUpdate = true;
    },
  };
}

/** Rising thermal particles (glyph-friendly bright points). */
export function createThermals(scene, fields) {
  const group = new THREE.Group();
  const pieces = [];
  for (const f of fields) {
    const n = 36;
    const pos = new Float32Array(n * 3);
    const id = new Float32Array(n * 2);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * TAU;
      const r = Math.random() * f.r * 0.6;
      pos[i * 3] = f.x + Math.cos(a) * r;
      pos[i * 3 + 1] = f.y + Math.random() * f.h;
      pos[i * 3 + 2] = f.z + Math.sin(a) * r;
      id[i * 2] = MAT.LIGHT; id[i * 2 + 1] = 0;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aId", new THREE.BufferAttribute(id, 2));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({
      color: 0xffe0a0, size: 4, sizeAttenuation: true, transparent: true, opacity: 0.48, depthWrite: false,
    }));
    group.add(pts);
    pieces.push({ pts, f, n, pos });
  }
  scene.add(group);
  return {
    group, fields,
    update(dt) {
      for (const p of pieces) {
        for (let i = 0; i < p.n; i++) {
          p.pos[i * 3 + 1] += dt * (6 + (i % 5));
          if (p.pos[i * 3 + 1] > p.f.y + p.f.h) p.pos[i * 3 + 1] = p.f.y;
        }
        p.pts.geometry.attributes.position.needsUpdate = true;
      }
    },
  };
}
