import * as THREE from "three";
import { MAT, QUALITY, LANDMARKS } from "../core/config.js";
import { retagGeometry, tagMesh, patchMaterialIdAlpha } from "../render/idMaterial.js";
import { TAU } from "../core/utils.js";

function cloudPuff(mat) {
  const g = new THREE.Group();
  const geo = retagGeometry(new THREE.SphereGeometry(1, 12, 10), MAT.CLOUD);
  // Stacked cumulus cluster — enough vertical overlap that a chase view
  // never collapses the puff into a flat ellipse / UFO disc.
  const spots = [
    [0, 0, 0, 1.7],
    [1.65, 0.15, 0.35, 1.35],
    [-1.55, 0.12, -0.3, 1.3],
    [0.45, 0.18, 1.25, 1.15],
    [-0.55, 0.12, -1.15, 1.1],
    [0.2, 1.1, 0.15, 1.28],
    [1.15, 0.9, -0.45, 0.95],
    [-1.05, 0.95, 0.4, 0.95],
    [0.15, 1.95, 0.08, 1.0],
    [0.75, 1.6, 0.45, 0.72],
    [-0.65, 1.55, -0.3, 0.68],
  ];
  for (const [x, y, z, s] of spots) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.scale.setScalar(s);
    g.add(m);
  }
  return g;
}

export function createSkyProps(scene, quality = "medium") {
  const q = QUALITY[quality] || QUALITY.medium;
  const group = new THREE.Group();
  group.name = "skyprops";

  const cloudMat = patchMaterialIdAlpha(new THREE.MeshLambertMaterial({
    color: 0xffffff,
    vertexColors: true,
    emissive: 0xeef4ff,
    emissiveIntensity: 0.18,
    flatShading: false,
  }));
  const clouds = new THREE.Group();
  const nCloud = Math.floor(10 * q.clouds);
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
    // left horizon bank
    [-520, 245, -200, 52], [-380, 230, -80, 44], [-240, 250, 40, 48],
    // right horizon bank
    [280, 240, 60, 50], [440, 255, -80, 46], [580, 235, -220, 40],
    // far mid skyline, just above the volcano
    [-40, 280, 200, 56], [120, 270, 160, 42],
    // a few large high ones
    [-180, 430, -600, 58], [260, 450, -500, 54], [40, 470, -200, 62],
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
      // Bright white crown, only a light-blue wash at the base — not grey
      const b = k * k; // more of the puff is white
      col[i * 3] = 0.88 + 0.12 * b;
      col[i * 3 + 1] = 0.91 + 0.09 * b;
      col[i * 3 + 2] = 0.96 + 0.04 * b;
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
    const y = 220 + (i * 11) % 80;
    const s = 36 + (i * 13) % 24;
    dummy.position.set(x, y, z);
    dummy.scale.set(s, s * 0.88, s * 1.05);
    dummy.rotation.y = a;
    dummy.updateMatrix();
    cloudInst.setMatrixAt(i, dummy.matrix);
    cloudData.push({ x, y, z, s, a, r, speed: 2 + (i % 5), baseY: y, baseS: s });
  }
  for (let i = 0; i < heroSpots.length; i++) {
    const [x, y, z, s] = heroSpots[i];
    dummy.position.set(x, y, z);
    dummy.scale.set(s, s * 0.86, s * 1.08);
    dummy.rotation.y = i * 0.7;
    dummy.updateMatrix();
    cloudInst.setMatrixAt(nCloud + i, dummy.matrix);
  }
  cloudInst.count = nCloud + heroSpots.length;
  group.add(cloudInst);
  // Ink outline hulls (back-face, slightly larger) so cumulus read as ligne-claire volumes
  const inkMat = patchMaterialIdAlpha(new THREE.MeshBasicMaterial({
    color: 0x4a5868,
    side: THREE.BackSide,
    fog: true,
    transparent: true,
    opacity: 0.7,
  }));
  inkMat.userData.matId = MAT.CLOUD;
  const cloudInk = new THREE.InstancedMesh(cloudGeo, inkMat, nCloud + heroSpots.length);
  const _p = new THREE.Vector3(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _m = new THREE.Matrix4();
  for (let i = 0; i < cloudInst.count; i++) {
    cloudInst.getMatrixAt(i, _m);
    _m.decompose(_p, _q, _s);
    _s.multiplyScalar(1.022);
    _m.compose(_p, _q, _s);
    cloudInk.setMatrixAt(i, _m);
  }
  cloudInk.count = cloudInst.count;
  cloudInk.instanceMatrix.needsUpdate = true;
  group.add(cloudInk);

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
  const birds = makeBirdFlock(18);
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
        cloudMat.color.setHex(0x6a7a8a);
        cloudMat.emissive.setHex(0x3a4a58);
        cloudMat.emissiveIntensity = 0.12;
        inkMat.color.setHex(0x2a3440);
        inkMat.opacity = 0.85;
        if (balloonInst) balloonInst.visible = false;
        if (blimp) blimp.visible = false;
      } else {
        cloudMat.color.setHex(0xfffdf8);
        cloudMat.emissive.setHex(0xf0f4ff);
        cloudMat.emissiveIntensity = 0.55;
        inkMat.color.setHex(0x4a5868);
        inkMat.opacity = 0.7;
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
        dummy.scale.set(s * (stormOn ? 1.15 : 1), s * (stormOn ? 0.92 : 0.88), s * (stormOn ? 1.35 : 1.05));
        dummy.rotation.y = c.a;
        dummy.updateMatrix();
        cloudInst.setMatrixAt(i, dummy.matrix);
      }
      for (let i = 0; i < heroSpots.length; i++) {
        const [x, y, z, s] = heroSpots[i];
        const yy = stormOn ? 70 + y * 0.22 : y;
        const ss = stormOn ? s * 1.45 : s;
        dummy.position.set(x, yy, z);
        dummy.scale.set(ss * (stormOn ? 1.2 : 1), ss * (stormOn ? 0.9 : 0.86), ss * (stormOn ? 1.4 : 1.08));
        dummy.rotation.y = i * 0.7;
        dummy.updateMatrix();
        cloudInst.setMatrixAt(nCloud + i, dummy.matrix);
      }
      cloudInst.instanceMatrix.needsUpdate = true;
      if (cloudInk) {
        for (let i = 0; i < cloudInst.count; i++) {
          cloudInst.getMatrixAt(i, _m);
          _m.decompose(_p, _q, _s);
          _s.multiplyScalar(1.022);
          _m.compose(_p, _q, _s);
          cloudInk.setMatrixAt(i, _m);
        }
        cloudInk.instanceMatrix.needsUpdate = true;
      }

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
  const inst = new THREE.InstancedMesh(v, new THREE.MeshBasicMaterial({ color: 0x222220, side: THREE.DoubleSide }), n);
  const dummy = new THREE.Object3D();
  const data = [];
  for (let i = 0; i < n; i++) {
    data.push({
      a: (i / n) * TAU,
      r: 200 + i * 20,
      y: 80 + (i % 7) * 10,
      s: 1.2,
    });
  }
  return {
    group: inst,
    update(dt, time) {
      for (let i = 0; i < n; i++) {
        const d = data[i];
        d.a += dt * 0.4;
        const x = Math.cos(d.a) * d.r + LANDMARKS.beach.x;
        const z = Math.sin(d.a) * d.r * 0.4 + LANDMARKS.beach.z;
        const y = d.y + Math.sin(time * 3 + i) * 2;
        dummy.position.set(x, y, z);
        dummy.rotation.set(0, -d.a, Math.sin(time * 8 + i) * 0.4);
        dummy.scale.setScalar(1.6);
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
      color: 0xffe0a0, size: 4, sizeAttenuation: true, transparent: true, opacity: 0.7, depthWrite: false,
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
