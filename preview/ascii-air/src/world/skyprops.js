import * as THREE from "three";
import { MAT, QUALITY, LANDMARKS } from "../core/config.js";
import { retagGeometry, tagMesh, patchMaterialIdAlpha } from "../render/idMaterial.js";
import { TAU } from "../core/utils.js";

function paintCloudAtlas() {
  const S = 1024;
  const cnv = document.createElement("canvas");
  cnv.width = S;
  cnv.height = S;
  const ctx = cnv.getContext("2d");
  ctx.clearRect(0, 0, S, S);

  function blob(cx, cy, rx, ry, rgb, a0) {
    const g = ctx.createRadialGradient(cx, cy - ry * 0.28, Math.max(2, rx * 0.06), cx, cy + ry * 0.1, Math.max(rx, ry));
    const [r, gv, b] = rgb;
    g.addColorStop(0, "rgba(" + r + "," + gv + "," + b + "," + a0 + ")");
    g.addColorStop(0.55, "rgba(" + r + "," + gv + "," + b + "," + (a0 * 0.62).toFixed(3) + ")");
    g.addColorStop(1, "rgba(" + r + "," + gv + "," + b + ",0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  function tile(ix, iy, kind) {
    const x0 = ix * 512, y0 = iy * 512;
    ctx.save();
    ctx.beginPath();
    ctx.rect(x0 + 4, y0 + 4, 504, 504);
    ctx.clip();
    const sun = [255, 250, 238];
    const mid = [236, 230, 224];
    const shade = [186, 198, 220];
    const lav = [168, 176, 210];
    // kind 0 wide bank, 1 tall tower, 2 mid puff, 3 anvil
    const stacks = {
      0: [
        [256, 340, 200, 90, lav, 0.75],
        [160, 310, 130, 80, shade, 0.8],
        [360, 315, 140, 78, shade, 0.78],
        [256, 250, 180, 100, mid, 0.88],
        [150, 230, 110, 80, mid, 0.82],
        [370, 235, 120, 84, mid, 0.82],
        [256, 180, 150, 90, sun, 0.92],
        [190, 165, 90, 70, sun, 0.85],
        [330, 160, 95, 68, sun, 0.85],
        [256, 120, 90, 62, sun, 0.8],
      ],
      1: [
        [256, 390, 160, 80, lav, 0.7],
        [180, 350, 110, 80, shade, 0.78],
        [340, 355, 115, 78, shade, 0.78],
        [256, 300, 140, 95, mid, 0.85],
        [200, 250, 100, 80, mid, 0.8],
        [320, 245, 105, 82, mid, 0.8],
        [256, 190, 120, 90, sun, 0.9],
        [210, 150, 80, 70, sun, 0.84],
        [310, 145, 85, 68, sun, 0.84],
        [256, 100, 90, 70, sun, 0.88],
        [256, 60, 60, 46, sun, 0.75],
      ],
      2: [
        [256, 330, 170, 95, lav, 0.72],
        [170, 300, 110, 80, shade, 0.8],
        [350, 305, 115, 78, shade, 0.78],
        [256, 240, 150, 100, mid, 0.88],
        [180, 210, 95, 75, mid, 0.8],
        [340, 205, 100, 76, mid, 0.8],
        [256, 160, 120, 85, sun, 0.9],
        [220, 125, 75, 58, sun, 0.82],
        [300, 120, 78, 56, sun, 0.82],
      ],
      3: [
        [256, 360, 210, 80, lav, 0.7],
        [140, 330, 120, 70, shade, 0.78],
        [380, 335, 125, 70, shade, 0.76],
        [256, 270, 180, 90, mid, 0.85],
        [120, 250, 110, 70, mid, 0.78],
        [400, 248, 115, 70, mid, 0.78],
        [256, 190, 150, 85, sun, 0.9],
        [180, 160, 100, 65, sun, 0.82],
        [340, 155, 105, 64, sun, 0.82],
        [256, 110, 80, 55, sun, 0.8],
      ],
    };
    for (const [x, y, rx, ry, rgb, a] of stacks[kind]) {
      blob(x0 + x, y0 + y, rx, ry, rgb, a);
    }
    // A few smaller highlight dabs on the sunlit crown
    for (let k = 0; k < 8; k++) {
      const px = x0 + 200 + (k * 37) % 140;
      const py = y0 + 90 + (k * 19) % 50;
      blob(px, py, 22 + (k % 3) * 8, 16 + (k % 2) * 6, sun, 0.35);
    }
    ctx.restore();
  }
  tile(0, 0, 0);
  tile(1, 0, 1);
  tile(0, 1, 2);
  tile(1, 1, 3);
  const tex = new THREE.CanvasTexture(cnv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  tex.anisotropy = 4;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = true;
  return tex;
}

function makeCloudMaterial(tex) {
  // Billboard ShaderMaterial. USE_INSTANCING is defined so instanceMatrix is
  // provided by the renderer — do not redeclare the attribute.
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uMap: { value: tex },
      uStorm: { value: 0 },
    },
    defines: { USE_INSTANCING: "" },
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
    fog: false,
    toneMapped: true,
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      attribute float aTile;
      void main() {
        float col = mod(aTile, 2.0);
        float row = floor(aTile / 2.0);
        // Atlas: tile 0 top-left of canvas = uv y 0.5-1 with default flipY.
        vec2 uv0 = uv * 0.96 + 0.02;
        vUv = vec2(uv0.x * 0.5 + col * 0.5, uv0.y * 0.5 + (1.0 - row) * 0.5);
        mat4 im = instanceMatrix;
        vec3 ipos = im[3].xyz;
        float sx = length(im[0].xyz);
        float sy = length(im[1].xyz);
        vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
        vec3 up = vec3(0.0, 1.0, 0.0);
        vec3 wp = ipos + right * position.x * sx + up * position.y * sy;
        gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform sampler2D uMap;
      uniform float uStorm;
      varying vec2 vUv;
      void main() {
        vec4 t = texture2D(uMap, vUv);
        float a = t.a;
        if (a < 0.08) discard;
        float dith = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
        if (a < 0.48 && dith > a * 1.12) discard;
        vec3 col = t.rgb;
        col = mix(col, col * vec3(0.55, 0.60, 0.70), uStorm);
        gl_FragColor = vec4(col, 7.0 / 255.0);
      }
    `,
  });
  mat.userData.matId = MAT.CLOUD;
  return mat;
}

export function createSkyProps(scene, quality = "medium") {
  const q = QUALITY[quality] || QUALITY.medium;
  const group = new THREE.Group();
  group.name = "skyprops";

  const cloudTex = paintCloudAtlas();
  const cloudMat = makeCloudMaterial(cloudTex);
  const clouds = new THREE.Group();
  const nCloud = Math.floor(4 * q.clouds);
  // Frame left/right of the postcard; stay off the hoop (16,27,-1358) and Courrier.
  const heroSpots = [
    [  300,  52, -1310, 160,  80, 0],
    [  420,  70, -1250, 200, 100, 2],
    [  210,  90, -1330, 130,  70, 2],
    [ -260,  50, -1310, 160,  80, 0],
    [ -400,  68, -1250, 200, 100, 2],
    [ -200,  88, -1330, 130,  70, 2],
    [  540,  82, -1200, 220, 110, 3],
    [ -530,  80, -1200, 220, 110, 3],
    // Far banks beside the keep / flanks
    [  520, 110,  -220, 320, 170, 1],
    [ -300, 100,    20, 300, 160, 1],
    [  280, 120,   120, 280, 150, 0],
  ];
  const towerSpots = [
    [ 900,  90, -200, 420, 280, 1],
    [-880, 100,  -80, 400, 270, 1],
  ];
  const nHero = heroSpots.length;
  const nTower = towerSpots.length;
  const nTotal = nCloud + nHero + nTower;
  const cloudGeo = retagGeometry(new THREE.PlaneGeometry(1, 1), MAT.CLOUD);
  const tileArr = new Float32Array(nTotal);
  const cloudInst = new THREE.InstancedMesh(cloudGeo, cloudMat, nTotal);
  cloudInst.name = "clouds";
  const dummy = new THREE.Object3D();
  const cloudData = [];
  function placeCloud(i, x, y, z, sx, sy, tile) {
    dummy.position.set(x, y, z);
    dummy.scale.set(sx, sy, 1);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    cloudInst.setMatrixAt(i, dummy.matrix);
    tileArr[i] = tile;
  }
  for (let i = 0; i < nCloud; i++) {
    const a = (i / Math.max(1, nCloud)) * TAU + 0.3;
    const r = 900 + (i * 97) % 800;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r * 0.85;
    const y = 340 + (i * 13) % 90;
    const sx = 180 + (i * 23) % 120;
    const sy = sx * (0.48 + (i % 5) * 0.06);
    const tile = i % 4;
    placeCloud(i, x, y, z, sx, sy, tile);
    cloudData.push({ x, y, z, sx, sy, a, r, speed: 2 + (i % 5), baseY: y, baseSx: sx, baseSy: sy, tile });
  }
  for (let i = 0; i < nHero; i++) {
    const [x, y, z, sx, sy, tile] = heroSpots[i];
    placeCloud(nCloud + i, x, y, z, sx, sy, tile);
  }
  for (let i = 0; i < nTower; i++) {
    const [x, y, z, sx, sy, tile] = towerSpots[i];
    placeCloud(nCloud + nHero + i, x, y, z, sx, sy, tile);
  }
  cloudGeo.setAttribute("aTile", new THREE.InstancedBufferAttribute(tileArr, 1));
  cloudInst.count = nTotal;
  cloudInst.frustumCulled = false;
  group.add(cloudInst);

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

  // Distant blue mountain ranges on the horizon (in front of the sky far-plane).
  {
    const positions = [], colors = [], indices = [];
    function ridge(cx, cz, len, halfW, peakH, segs, seed, yaw) {
      const ca = Math.cos(yaw), sa = Math.sin(yaw);
      const spine = [];
      for (let i = 0; i <= segs; i++) {
        const t = i / segs;
        const along = (t - 0.5) * len;
        const env = Math.sin(t * Math.PI);
        const jag = 0.75 + 0.25 * Math.sin(t * 7 + seed) + 0.12 * Math.sin(t * 13 + seed * 2);
        const y = Math.max(12, peakH * env * jag);
        const x = cx + ca * along, z = cz + sa * along;
        spine.push({ x, y, z, t });
      }
      for (let i = 0; i < spine.length; i++) {
        const p = spine[i];
        const px = -sa * halfW, pz = ca * halfW;
        const sh = 0.78 + 0.16 * Math.sin(p.t * 6 + seed);
        const c = [0.40 * sh, 0.51 * sh, 0.61 * sh];
        const base = positions.length / 3;
        positions.push(p.x, p.y, p.z); colors.push(c[0], c[1], c[2]);
        positions.push(p.x + px, -10, p.z + pz); colors.push(c[0]*0.9, c[1]*0.9, c[2]*0.9);
        positions.push(p.x - px, -10, p.z - pz); colors.push(c[0]*0.9, c[1]*0.9, c[2]*0.9);
        if (i < spine.length - 1) {
          const n = base + 3;
          indices.push(base, n, base + 1, base + 1, n, n + 1);
          indices.push(base, base + 2, n, n, base + 2, n + 2);
        }
      }
    }
    const ranges = [
      [  200, 2150, 900, 180, 170, 10, 1.1, 0.15],
      [  800, 2000, 700, 160, 140, 8, 2.4, -0.4],
      [ -650, 2050, 800, 170, 155, 9, 3.2, 0.5],
      [ 1400, 1500, 750, 160, 130, 8, 4.0, 0.9],
      [-1400, 1480, 750, 160, 135, 8, 5.1, -0.8],
      [ 1750,  700, 800, 170, 145, 8, 6.3, 1.4],
      [-1750,  650, 800, 170, 150, 8, 7.2, 1.7],
      [  400, 2350, 1100, 200, 190, 12, 8.0, 0.05],
    ];
    for (const r of ranges) ridge(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7]);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    retagGeometry(geo, MAT.ROCK, 0);
    const mat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
      vertexColors: true, flatShading: false, fog: true,
    }));
    const mesh = new THREE.Mesh(geo, mat);
    mesh.name = "horizon-ranges";
    mesh.frustumCulled = false;
    group.add(mesh);
  }

  scene.add(group);

  group.traverse((o) => { if (o.material) patchMaterialIdAlpha(o.material); });
  let stormOn = false;
  return {
    group, cloudInst, cloudData, balloons, blimp, birds,
    setStorm(on) {
      on = !!on;
      if (on === stormOn) return;
      stormOn = on;
      if (cloudMat.uniforms && cloudMat.uniforms.uStorm) {
        cloudMat.uniforms.uStorm.value = on ? 1 : 0;
      }
      if (on) {
        if (balloonInst) balloonInst.visible = false;
        if (blimp) blimp.visible = false;
      } else {
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
        const sx = stormOn ? (c.baseSx || c.sx) * 1.15 : (c.baseSx || c.sx);
        const sy = stormOn ? (c.baseSy || c.sy) * 0.95 : (c.baseSy || c.sy);
        c.y = y;
        dummy.position.set(c.x, y, c.z);
        dummy.scale.set(sx, sy, 1);
        dummy.updateMatrix();
        cloudInst.setMatrixAt(i, dummy.matrix);
      }
      for (let i = 0; i < heroSpots.length; i++) {
        const [x, y, z, sx, sy] = heroSpots[i];
        const yy = stormOn ? 70 + y * 0.22 : y;
        dummy.position.set(x, yy, z);
        dummy.scale.set(stormOn ? sx * 1.2 : sx, stormOn ? sy * 0.9 : sy, 1);
        dummy.updateMatrix();
        cloudInst.setMatrixAt(nCloud + i, dummy.matrix);
      }
      for (let i = 0; i < towerSpots.length; i++) {
        const [x, y, z, sx, sy] = towerSpots[i];
        dummy.position.set(x, stormOn ? y * 0.6 : y, z);
        dummy.scale.set(sx, sy, 1);
        dummy.updateMatrix();
        cloudInst.setMatrixAt(nCloud + heroSpots.length + i, dummy.matrix);
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
