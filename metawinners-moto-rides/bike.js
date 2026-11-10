import * as THREE from './vendor/three.module.js';
import { GLTFLoader } from './assets/bike/GLTFLoader.js';

/* Adapted from the original CC0 Innerscene race-replica superbike.
   See assets/bike/PROVENANCE.json. All model positions are metres, forward -Z. */
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
const cache={high:null,low:null,promise:null,materials:new Map(),geometries:new Set(),batches:new Map()};
const BASE_URL=new URL('./assets/bike/',import.meta.url);
const Y_AXIS=new THREE.Vector3(0,1,0),X_AXIS=new THREE.Vector3(1,0,0);
const ARTIFACTS={high:new URL('superbike-high.glb',BASE_URL).href,low:new URL('superbike-low.glb',BASE_URL).href};

export async function prepareMotorcycleAssets(options={}){
  if(cache.high&&cache.low)return;
  if(cache.promise)return cache.promise;
  const loader=options.loader||new GLTFLoader();
  const load=quality=>loader.loadAsync(ARTIFACTS[quality],event=>options.onProgress?.({quality,loaded:event.loaded,total:event.total||0}));
  cache.promise=Promise.all([load('high'),load('low')]).then(([high,low])=>{
    cache.high=high.scene;cache.low=low.scene;
    cache.high.traverse(o=>{if(o.isMesh){const name=o.userData.sourceMaterial||o.material.name;cache.materials.set(name,o.material);o.geometry.userData.sharedBikeGeometry=true;o.geometry.userData.shared=true;cache.geometries.add(o.geometry);for(const t of Object.values(o.material)){if(t?.isTexture){t.userData.shared=true;t.anisotropy=8;}}}});
    cache.low.traverse(o=>{if(o.isMesh){o.geometry.userData.sharedBikeGeometry=true;o.geometry.userData.shared=true;cache.geometries.add(o.geometry);}});
  }).catch(error=>{cache.promise=null;throw new Error('The motorcycle model could not load. Check the connection and try again.',{cause:error});});
  return cache.promise;
}
export function motorcycleAssetsReady(){return !!(cache.high&&cache.low);}

function surfaceTextures(){
 const size=64,normal=new Uint8Array(size*size*4),roughness=new Uint8Array(size*size*4);
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  const i=(y*size+x)*4,a=((x>>2)+(y>>2))%2,thread=a?Math.sin(x*Math.PI/4):Math.sin(y*Math.PI/4),grain=Math.sin(x*12.9898+y*78.233)*43758.5453;const noise=grain-Math.floor(grain);
  normal[i]=128+Math.round(thread*(a?11:3));normal[i+1]=128+Math.round(thread*(a?3:11));normal[i+2]=250;normal[i+3]=255;
  const r=105+Math.round(noise*20+Math.abs(thread)*15);roughness.set([r,r,r,255],i);
 }
 const normalMap=new THREE.DataTexture(normal,size,size),roughnessMap=new THREE.DataTexture(roughness,size,size);
 for(const t of[normalMap,roughnessMap]){t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(4,4);t.needsUpdate=true;}
 return{normalMap,roughnessMap};
}
function createLiveryTexture(profile,size){
 if(typeof document==='undefined')return null;const canvas=document.createElement('canvas');canvas.width=size;canvas.height=size;const c=canvas.getContext('2d');if(!c)return null;
 const paint=profile.paint||'#536b77',trim=profile.trim||'#c8ba97',glow=profile.glow||'#78dadf';
 c.fillStyle='#0b1117';c.fillRect(0,0,size,size);
 c.fillStyle=paint;c.beginPath();c.moveTo(0,0);c.lineTo(size*.62,0);c.lineTo(size*.28,size);c.lineTo(0,size);c.fill();
 c.strokeStyle=trim;c.lineWidth=size*.021;c.beginPath();c.moveTo(size*.65,0);c.lineTo(size*.3,size);c.stroke();
 c.globalAlpha=.17;c.strokeStyle=glow;c.lineWidth=1;for(let i=0;i<15;i++){const x=i*size*.08;c.beginPath();c.moveTo(x,0);c.lineTo(x-size*.3,size);c.stroke();}c.globalAlpha=1;
 // Inlaid MetaWinners monogram and actual collection token number.
 c.save();c.translate(size*.56,size*.2);c.scale(size*.23,size*.23);c.lineWidth=.055;c.strokeStyle=trim;c.lineJoin='miter';c.beginPath();c.moveTo(0,1);c.lineTo(0,0);c.lineTo(.5,.48);c.lineTo(1,0);c.lineTo(1,1);c.lineTo(.5,.52);c.closePath();c.moveTo(.18,.78);c.lineTo(.82,.19);c.moveTo(.18,.19);c.lineTo(.82,.78);c.stroke();c.restore();
 c.textAlign='center';c.fillStyle='#edf2ee';c.font=`900 ${Math.floor(size*.145)}px sans-serif`;c.fillText(String(profile.token||'1/1'),size*.65,size*.67);
 c.font=`700 ${Math.floor(size*.044)}px sans-serif`;c.fillStyle=trim;c.fillText(String(profile.name||'METAWINNERS').toUpperCase(),size*.62,size*.77,size*.64);
 c.font=`500 ${Math.floor(size*.024)}px sans-serif`;c.fillStyle='#a8b5bc';c.fillText('MW / FACTORY RACING',size*.62,size*.84);
 for(let i=0;i<7;i++){c.fillStyle=i%2?trim:paint;c.fillRect(size*(.12+i*.035),size*.89,size*.024,size*.016);}
 const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=4;return texture;
}
function createMaterials(profile,quality){
 const paint=new THREE.Color(profile.paint||profile.color||'#738998');
 const trim=new THREE.Color(profile.trim||profile.secondary||'#c0aa76');
 const glow=new THREE.Color(profile.glow||profile.color||'#8ce8ff');
 const materials=new Map(),ownedTextures=new Set();
 const whiteMap=cache.materials.get('Fairing paint, white')?.map;
 for(const[name,source]of cache.materials){
  const painted=name.startsWith('Fairing paint'),m=painted&&quality!=='low'?new THREE.MeshPhysicalMaterial():source.clone();if(painted&&quality!=='low')THREE.MeshStandardMaterial.prototype.copy.call(m,source);m.name='MW '+name;
  if(name==='Fairing paint, white'){m.color.copy(paint);m.roughness=.31;m.metalness=.22;if(m.isMeshPhysicalMaterial){m.clearcoat=1;m.clearcoatRoughness=.16;}}
  if(name==='Fairing paint, red'){m.map=whiteMap||m.map;m.color.copy(trim);m.roughness=.3;m.metalness=.35;if(m.isMeshPhysicalMaterial){m.clearcoat=.85;m.clearcoatRoughness=.12;}}
  if(name==='Fairing paint, gloss black'){m.color.set('#81818b');m.roughness=.22;m.metalness=.35;if(m.isMeshPhysicalMaterial){m.clearcoat=.95;m.clearcoatRoughness=.08;}}
  if(name==='Lamp reflector'){m.emissive.copy(glow);m.emissiveIntensity=2.4;m.color.set('#f5f9ff');}
  if(name==='Red tail lamp lens'){m.emissive.set('#ff1428');m.emissiveIntensity=1.8;}
  if(name.includes('Windscreen')){m.color.set('#6b8b9c');m.opacity=.42;m.transparent=true;m.depthWrite=false;m.roughness=.12;m.metalness=.2;}
  if(name.includes('Clear lamp')){m.opacity=.18;m.transparent=true;m.depthWrite=false;}
  if(name.includes('Tyre')){m.roughness=.86;m.metalness=0;}
  if(name.includes('Seat')){m.roughness=.85;m.metalness=0;}
  if(name.includes('Brushed steel')||name.includes('Brake disc')){m.metalness=.9;m.roughness=.32;}
  if(name.includes('Gold anodised')){m.metalness=.88;m.roughness=.21;}
  m.userData.bikeMaterialCategory=name;m.needsUpdate=true;materials.set(name,m);
 }
 if(quality==='low'){const steel=materials.get('Aluminium frame spars'),dark=materials.get('Black rubber and plastic'),light=materials.get('Lamp reflector');for(const[name,m]of[...materials]){if(['Brushed steel','Cast aluminium','Brake disc steel','Dark steel (chain, fasteners)','Gold anodised / TiN coating'].includes(name)){m.dispose();materials.set(name,steel);}else if(['Engine castings, black','Satin black','Seat, black vinyl','Tyre rubber','Blank number plate','Amber indicator lens','Radiator core','Wheel paint, dark grey'].includes(name)){m.dispose();materials.set(name,dark);}else if(name==='Clear lamp lens (alpha-blended)'){m.dispose();materials.set(name,light);}}}
 const carbon=new THREE.MeshPhysicalMaterial({color:'#151a23',metalness:.3,roughness:.39,clearcoat:.48,clearcoatRoughness:.25});
 if(quality!=='low'){const maps=surfaceTextures();carbon.normalMap=maps.normalMap;carbon.normalScale.set(.28,.28);carbon.roughnessMap=maps.roughnessMap;ownedTextures.add(maps.normalMap);ownedTextures.add(maps.roughnessMap);}
 carbon.userData.bikeMaterialCategory='carbon';if(quality==='low'){carbon.dispose();materials.set('carbon',materials.get('Fairing paint, gloss black'));materials.set('accent',materials.get('Fairing paint, red'));materials.set('light',materials.get('Lamp reflector'));materials.set('dark',materials.get('Black rubber and plastic'));}else{materials.set('carbon',carbon);materials.set('accent',new THREE.MeshStandardMaterial({color:trim,metalness:.72,roughness:.25}));materials.set('light',new THREE.MeshStandardMaterial({color:glow,emissive:glow,emissiveIntensity:2.6,roughness:.3}));materials.set('dark',new THREE.MeshStandardMaterial({color:'#11151d',roughness:.62,metalness:.2}));}
 const identity=createLiveryTexture(profile,quality==='low'?256:512);if(identity){ownedTextures.add(identity);const livery=new THREE.MeshPhysicalMaterial({map:identity,metalness:.24,roughness:.4,clearcoat:.65,clearcoatRoughness:.22,side:THREE.DoubleSide,polygonOffset:true,polygonOffsetFactor:-1});livery.userData.bikeMaterialCategory='identity';materials.set('identity',livery);}return{materials,ownedTextures};
}
function ownedMesh(root,geometry,mat,pos=[0,0,0],rot=[0,0,0]){const mesh=new THREE.Mesh(geometry,mat);mesh.position.set(...pos);mesh.rotation.set(...rot);mesh.castShadow=true;mesh.receiveShadow=true;geometry.userData.ownedBikeGeometry=true;root.add(mesh);return mesh;}
function tube(root,mat,points,radius=.008,segments=12){return ownedMesh(root,new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),segments,radius,5,false),mat);}
function rod(root,mat,from,to,r=.012){const a=new THREE.Vector3(...from),b=new THREE.Vector3(...to),direction=b.clone().sub(a);const mesh=ownedMesh(root,new THREE.CylinderGeometry(r,r,direction.length(),7),mat,a.clone().add(b).multiplyScalar(.5).toArray());mesh.quaternion.setFromUnitVectors(Y_AXIS,direction.normalize());return mesh;}
function panel(root,mat,points,thickness=.018){
 const front=points.map(p=>new THREE.Vector3(...p)),normal=new THREE.Vector3().subVectors(front[1],front[0]).cross(new THREE.Vector3().subVectors(front[2],front[0])).normalize();const positions=[],indices=[];
 for(const p of front)positions.push(...p.toArray());for(const p of front)positions.push(...p.clone().addScaledVector(normal,-thickness).toArray());
 const n=front.length;for(let j=1;j<n-1;j++){indices.push(0,j,j+1,n,n+j+1,n+j);}for(let j=0;j<n;j++){const k=(j+1)%n;indices.push(j,n+j,k,k,n+j,n+k);}
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setIndex(indices);g.computeVertexNormals();g.setAttribute('uv',new THREE.Float32BufferAttribute(Array.from({length:front.length*2},(_,i)=>[i%2,Math.floor(i/2)%2]).flat(),2));return ownedMesh(root,g,mat);
}
function customize(root,profile,quality,mat){
 const archetype=profile.archetype||'sport',low=quality==='low',carbon=mat.get('carbon'),accent=mat.get('accent'),light=mat.get('light');
 // Functional aero blades rather than oversized science-fiction attachments.
 for(const s of[-1,1]){
  panel(root,carbon,[[s*.25,.78,-.63],[s*.41,.75,-.55],[s*.36,.71,-.39],[s*.25,.7,-.45]],.014);
  tube(root,light,[[s*.045,.825,-.919],[s*.085,.828,-.884],[s*.12,.838,-.862]],.004,8);
  tube(root,accent,[[s*.145,.89,.56],[s*.105,.91,.72],[s*.04,.95,.86]],.006,10);
  if(archetype==='heavy'){
   tube(root,carbon,[[s*.27,.57,-.48],[s*.34,.46,-.22],[s*.33,.3,.18],[s*.22,.34,.3]],.021,14);
   panel(root,accent,[[s*.29,.63,-.28],[s*.36,.58,-.14],[s*.33,.43,.05],[s*.26,.45,-.05]],.018);
  }else if(archetype==='street'){
   rod(root,carbon,[s*.18,.91,-.42],[s*.34,1.035,-.41],.013);rod(root,carbon,[s*.34,1.035,-.41],[s*.42,1.035,-.39],.018);
  }
  if(!low){
   // Fine livery pinstripe traces the sculpted side of the tank.
   tube(root,accent,[[s*.118,.94,.02],[s*.184,1.003,-.12],[s*.18,1.003,-.25],[s*.13,.952,-.36]],.003,16);
  }
 }
 // Bespoke factory livery follows the side fairing instead of floating as a billboard.
 const identity=mat.get('identity');
 if(identity)for(const side of[-1,1]){
  const points=[[side*.268,.699,-.407],[side*.3,.635,-.015],[side*.27,.37,.136],[side*.24,.375,-.22]],geo=new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.Float32BufferAttribute(points.flat(),3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(side>0?[1,1,0,1,0,0,1,0]:[0,1,1,1,1,0,0,0],2));geo.setIndex(side>0?[0,1,2,0,2,3]:[0,2,1,0,3,2]);geo.computeVertexNormals();ownedMesh(root,geo,identity);
 }
 if(!low){
  for(const side of[-1,1]){
   for(let i=0;i<3;i++)tube(root,carbon,[[side*.26,.63-i*.035,-.35],[side*.304,.59-i*.035,-.17]],.006,4);
   // Aerodynamic rear seat ribs and a compact carbon tail lip.
   tube(root,carbon,[[side*.09,.91,.51],[side*.105,.92,.66],[side*.065,.91,.79]],.009,12);
  }
  panel(root,carbon,[[-.1,.925,.72],[.1,.925,.72],[.12,.938,.81],[-.12,.938,.81]],.012);
 }
 const exhaust=new THREE.Group();exhaust.name='boost-exhaust';root.add(exhaust);
 const flameMat=new THREE.MeshBasicMaterial({color:profile.glow||'#7fe8ff',transparent:true,opacity:.65,blending:THREE.AdditiveBlending,depthWrite:false});
 const flame=ownedMesh(exhaust,new THREE.ConeGeometry(.035,.3,low?7:12),flameMat,[.215,.4,.52],[Math.PI/2,0,0]);flame.castShadow=false;exhaust.visible=false;
 return{exhaust,flameMat};
}
function streetGeometry(source){
 // Remove only mid/lower side fairing surfaces to expose the same detailed powertrain.
 const g=source.index?source.toNonIndexed():source.clone(),p=g.attributes.position,keep=[];
 for(let i=0;i<p.count;i+=3){const x=(p.getX(i)+p.getX(i+1)+p.getX(i+2))/3,y=(p.getY(i)+p.getY(i+1)+p.getY(i+2))/3,z=(p.getZ(i)+p.getZ(i+1)+p.getZ(i+2))/3;if(!(Math.abs(x)>.14&&y<.64&&y>.26&&z>-.49&&z<.35))keep.push(i,i+1,i+2);}
 const result=new THREE.BufferGeometry();for(const[name,a]of Object.entries(g.attributes)){const values=[];for(const i of keep)for(let j=0;j<a.itemSize;j++)values.push(a.array[i*a.itemSize+j]);result.setAttribute(name,new THREE.Float32BufferAttribute(values,a.itemSize));}result.computeBoundingSphere();result.userData.ownedBikeGeometry=true;g.dispose();return result;
}

function batchPart(part,key){
 const buckets=new Map();for(const o of [...part.children]){if(!o.isMesh)continue;const list=buckets.get(o.material)||[];list.push(o);buckets.set(o.material,list);}
 for(const[mat,objects]of buckets){
  const category=mat.userData.bikeMaterialCategory||mat.name;const cacheKey=key+'/'+category;let geometry=cache.batches.get(cacheKey);
  if(!geometry){
   const data={position:[],normal:[],uv:[]};for(const o of objects){o.updateMatrix();const g=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();g.applyMatrix4(o.matrix);for(const name of['position','normal','uv']){const a=g.attributes[name];if(a){for(const value of a.array)data[name].push(value);}else{for(let i=0;i<g.attributes.position.count*(name==='uv'?2:3);i++)data[name].push(0);}}g.dispose();}
   geometry=new THREE.BufferGeometry();for(const[name,array]of Object.entries(data))geometry.setAttribute(name,new THREE.Float32BufferAttribute(array,name==='uv'?2:3));geometry.computeBoundingSphere();geometry.userData.shared=true;geometry.userData.sharedBikeGeometry=true;cache.batches.set(cacheKey,geometry);
  }
  for(const o of objects){part.remove(o);if(o.geometry.userData.ownedBikeGeometry&&!o.geometry.userData.shared)o.geometry.dispose();}
  const mesh=new THREE.Mesh(geometry,mat);mesh.castShadow=true;mesh.receiveShadow=true;part.add(mesh);
 }
}

export function createMotorcycle(profile={}, {quality='high'}={}){
 if(!motorcycleAssetsReady())throw new Error('Motorcycle assets are not ready. Await prepareMotorcycleAssets() before creating a rider.');
 const level=quality==='low'?'low':'high',template=cache[level];const root=new THREE.Group();root.name='MetaWinners '+(profile.archetype||'sport')+' motorcycle';
 const model=template.clone(true);root.add(model);const{materials,ownedTextures}=createMaterials(profile,level),parts={};
 model.traverse(o=>{if(o.userData.bikePart)parts[o.userData.bikePart]=o;if(!o.isMesh)return;const name=o.userData.sourceMaterial||o.material?.name;const m=materials.get(name);if(m)o.material=m;else{const original=o.material;o.material=original.clone();materials.set('extra-'+o.uuid,o.material);}o.castShadow=true;o.receiveShadow=true;
  if(profile.archetype==='street'&&name?.includes('Fairing')&&o.parent?.userData.bikePart==='body')o.geometry=streetGeometry(o.geometry);
 });
 root.updateMatrixWorld(true);
 // The telescoping fork and wheel are independent: suspension must not squash tyres.
 if(parts.wheelFront)parts.wheelFront.rotation.order='YXZ';
 const extras=customize(parts.body||root,profile,level,materials);
 // Coloured rim tape rotates with each wheel; it is paint, not a floating neon ring.
 for(const name of ['wheelFront','wheelRear'])if(parts[name])for(const side of[-1,1])ownedMesh(parts[name],new THREE.TorusGeometry(name==='wheelFront'?.224:.245,.0035,4,level==='low'?24:48),materials.get('accent'),[side*(name==='wheelFront'?.069:.109),0,0],[0,Math.PI/2,0]);
 for(const[partName,part]of Object.entries(parts))batchPart(part,`${level}/${profile.family||'standard'}/${profile.archetype||'sport'}/${partName}`);
 const basePositions={};for(const[k,o]of Object.entries(parts))basePositions[k]=o.position.clone();
 // Palm centres sit 1 cm above the handlebar axes. Store them in the fork joint so
 // rider IK follows real steering and telescoping motion instead of a frozen pose.
 const gripInverse=new THREE.Matrix4().copy(parts.steering.matrixWorld).invert(),gripLocals={left:new THREE.Vector3(-.285,.965,-.49).applyMatrix4(gripInverse),right:new THREE.Vector3(.285,.965,-.49).applyMatrix4(gripInverse)};
 root.userData={bike:true,quality:level,archetype:profile.archetype||'sport',wheelFront:parts.wheelFront,wheelRear:parts.wheelRear,steering:parts.steering,swingarm:parts.swingarm,body:parts.body,suspensionFront:parts.steering,suspensionRear:parts.swingarm,exhaust:extras.exhaust,materials,ownedTextures,gripLocals,flameMat:extras.flameMat,basePositions,seatPosition:new THREE.Vector3(0,.82,.257),grips:{left:new THREE.Vector3(-.285,.955,-.49),right:new THREE.Vector3(.285,.955,-.49)},wheelbase:1.45,wheelRadii:{front:.3,rear:.326},wheelAngle:0,riderPose:{position:new THREE.Vector3(),rotationX:0},frontWheelRest:parts.wheelFront?.position.clone(),disposed:false};
 return root;
}

export function animateMotorcycle(group,state={},dt=1/60){
 const u=group?.userData;if(!u?.bike||u.disposed)return;dt=clamp(Number(dt)||0,0,.06);const speed=Number(state.speed)||0;u.wheelAngle-=speed*dt;
 if(u.wheelFront)u.wheelFront.rotation.x=u.wheelAngle/u.wheelRadii.front;
 if(u.wheelRear)u.wheelRear.rotation.x=u.wheelAngle/u.wheelRadii.rear;
 if(u.steering)u.steering.rotation.y=clamp(Number(state.steerAngle??state.steeringAngle??((state.steer||0)*.09)),-.32,.32);
 // Suspension telemetry is metres. Pitch is positive for braking dive and already includes wheelie.
 const front=clamp(Number(state.suspensionFront)||0,-.08,.08),rear=clamp(Number(state.suspensionRear)||0,-.08,.08);
 const wheelie=clamp(Number(state.wheelie)||0,0,.2),pitch=clamp(Number(state.pitch)||0,-.25,.25);
 // Rotate about the rear axle so wheelies lift the front tyre without sinking the rear.
 group.rotation.x=wheelie;group.position.y=u.wheelRadii.rear*(1-Math.cos(wheelie))+.725*Math.sin(wheelie);group.position.z=.725*(1-Math.cos(wheelie))-u.wheelRadii.rear*Math.sin(wheelie);
 if(u.body){u.body.position.y=u.basePositions.body.y-(front+rear)*.5;u.body.rotation.x=-pitch-wheelie;}
 if(u.steering){u.steering.position.y=u.basePositions.steering.y-front;u.steering.scale.y=(u.basePositions.steering.y-u.wheelRadii.front-front)/(u.basePositions.steering.y-u.wheelRadii.front);}
 if(u.wheelFront)u.wheelFront.rotation.y=u.steering?.rotation.y||0;
 if(u.swingarm){u.swingarm.position.y=u.basePositions.swingarm.y-rear;u.swingarm.rotation.x=-rear/(.725-u.basePositions.swingarm.z);}
 u.riderPose.position.set(0,u.body?.position.y||0,0).applyAxisAngle(X_AXIS,wheelie).add(group.position);u.riderPose.rotationX=-pitch;
 const tail=u.materials.get('Red tail lamp lens');if(tail)tail.emissiveIntensity=1.25+Math.max(0,Math.min(1,Number(state.braking)||0))*3.8;
 if(u.exhaust){u.exhaust.visible=!!(state.boost??state.boosting);u.exhaust.scale.z=.8+Math.sin((state.time||0)*45)*.18;}
}
export function disposeMotorcycle(group){
 const u=group?.userData;if(!u?.bike||u.disposed)return;u.disposed=true;
 group.traverse(o=>{if(o.geometry?.userData.ownedBikeGeometry)o.geometry.dispose();});
 for(const m of new Set(u.materials.values()))m.dispose();for(const t of u.ownedTextures)t.dispose();u.flameMat?.dispose();group.clear();
}
