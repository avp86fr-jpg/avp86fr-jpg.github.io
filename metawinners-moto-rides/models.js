import { createReferenceHead } from './rider-heads.js';
import { createReferenceBody } from './rider-bodies.js';
import * as THREE from './vendor/three.module.js';
import { RIDERS, RIDER_BY_ID } from './roster.js';
import { createMotorcycle, animateMotorcycle, prepareMotorcycleAssets, disposeMotorcycle } from './bike.js';

// The 25 portrait references guide distinct sculpted heads and costumes.
// Original artwork stays in the dossier; model loading does not decode unused portrait textures.
const Y=new THREE.Vector3(0,1,0),TAU=Math.PI*2;
const textures=new Map(),pending=new Map(),tintCache=new WeakMap();
function tint(base,color){let values=tintCache.get(base);if(!values){values=new Map();tintCache.set(base,values);}if(!values.has(color)){const m=base.clone();m.color.set(color);values.set(color,m);}return values.get(color);}
const crop={
 chief:[.325,.675,.065,.63],bloodbath:[.28,.70,.02,.64],optimus:[.345,.655,.075,.64],arachnia:[.34,.66,.07,.62],chaos:[.32,.69,.07,.64],
 'gold-mage':[.32,.67,.07,.63],poison:[.32,.69,.08,.62],hunter:[.28,.69,.08,.65],medusa:[.355,.66,.19,.68],gladiator:[.36,.65,.12,.62],elemental:[.34,.67,.09,.65],fire:[.345,.66,.12,.65],ice:[.34,.66,.12,.66],blue:[.34,.66,.09,.63],alien:[.32,.68,.065,.65],manga:[.32,.68,.08,.64],mask:[.34,.67,.08,.61],
 'digital-punk':[.34,.66,.09,.63],assimilator:[.32,.68,.10,.65],steampunk:[.34,.67,.12,.64],quarterback:[.32,.69,.07,.63],sheikh:[.36,.65,.16,.64],neural:[.34,.66,.10,.64],cowboy:[.35,.65,.23,.66],'hockey-mask':[.33,.68,.065,.64]
};
export const RIDER_MODEL_PROFILES=Object.fromEntries(RIDERS.map(r=>[r.id,r.model]));
export function installRiderTexture(id,texture){texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=4;texture.userData.shared=true;textures.set(id,texture);return texture;}
async function loadPortrait(rider,resolution){
 const cached=textures.get(rider.id);if(cached&&(cached.userData.resolution||cached.image.width)>=resolution)return cached;
 if(pending.has(rider.id)){await pending.get(rider.id);return loadPortrait(rider,resolution);}
 const task=new Promise((resolve,reject)=>{const loader=new THREE.TextureLoader(),source=resolution<=512?(rider.thumbnail||rider.portrait):rider.portrait;
 loader.load(new URL(source,import.meta.url).href,loaded=>{try{let image=loaded.image;if(image.width>resolution&&typeof document!=='undefined'){const canvas=document.createElement('canvas');canvas.width=resolution;canvas.height=Math.round(image.height*resolution/image.width);canvas.getContext('2d').drawImage(image,0,0,canvas.width,canvas.height);image=canvas;}const texture=textures.get(rider.id)||loaded;texture.image=image;texture.needsUpdate=true;texture.userData.resolution=resolution;if(texture!==loaded)loaded.dispose();installRiderTexture(rider.id,texture);resolve(texture);}catch(error){reject(error);}},undefined,()=>reject(new Error(`Could not load ${rider.name}'s character artwork. Please reload and retry.`)));});
 pending.set(rider.id,task);try{return await task;}finally{pending.delete(rider.id);}
}
export async function prepareRiderModels(_riders=RIDERS){await prepareMotorcycleAssets();}
const v=p=>new THREE.Vector3(...p);
function mesh(g,geometry,material,p=[0,0,0],s=[1,1,1],r=[0,0,0]){const m=new THREE.Mesh(geometry,material);m.position.set(...p);m.scale.set(...s);m.rotation.set(...r);m.castShadow=true;m.receiveShadow=true;g.add(m);return m;}
function oval(g,m,p,s,low=false,r=[0,0,0]){return mesh(g,new THREE.SphereGeometry(1,low?12:28,low?8:18),m,p,s,r);}
function rod(g,m,a,b,r=.014,r2=r,segments=10){const A=v(a),B=v(b),d=B.clone().sub(A),o=mesh(g,new THREE.CylinderGeometry(r2,r,d.length(),segments),m,A.clone().add(B).multiplyScalar(.5).toArray());o.quaternion.setFromUnitVectors(Y,d.normalize());return o;}
function path(g,m,pts,r=.006,segments=20,sides=6){return mesh(g,new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map(v)),segments,r,sides,false),m);}
function torus(g,m,p,R,r=.01,rotation=[Math.PI/2,0,0],segments=32){return mesh(g,new THREE.TorusGeometry(R,r,6,segments),m,p,[1,1,1],rotation);}
function plate(g,m,pts,depth,p=[0,0,0],r=[0,0,0]){const shape=new THREE.Shape();pts.forEach((pt,i)=>i?shape.lineTo(...pt):shape.moveTo(...pt));shape.closePath();return mesh(g,new THREE.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelSize:.004,bevelThickness:.003,bevelSegments:m.userData.low?1:2,curveSegments:2}),m,p,[1,1,1],r);}
function block(g,m,p,s,r=[0,0,0]){return mesh(g,new THREE.BoxGeometry(1,1,1),m,p,s,r);}
// Shaped cross sections make clothing and anatomy continuous instead of stacked primitives.
function loftGeometry(rings,segments=24,power=.86){
 const p=[],uv=[],ix=[];for(let j=0;j<rings.length;j++){const [y,rx,rz,cx=0,cz=0]=rings[j];for(let i=0;i<=segments;i++){const a=i/segments*TAU,si=Math.sin(a),co=Math.cos(a);p.push(cx+Math.sign(si)*Math.abs(si)**power*rx,y,cz+Math.sign(co)*Math.abs(co)**power*rz);uv.push(i/segments,j/(rings.length-1));}}
 for(let j=0;j<rings.length-1;j++)for(let i=0;i<segments;i++){const a=j*(segments+1)+i;ix.push(a,a+1,a+segments+1,a+1,a+segments+2,a+segments+1);}
 for(const end of[0,rings.length-1]){const [y,rx,rz,cx=0,cz=0]=rings[end],center=p.length/3;p.push(cx,y,cz);uv.push(.5,.5);for(let i=0;i<segments;i++){const a=end*(segments+1)+i;end?ix.push(center,a,a+1):ix.push(center,a+1,a);}}
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(ix);g.computeVertexNormals();return g;
}
function loft(g,m,rings,low=false,p=[0,0,0],r=[0,0,0],power=.86){return mesh(g,loftGeometry(rings,low?12:28,power),m,p,[1,1,1],r);}
function limb(g,m,a,b,radius,low=false,flatten=.86){const A=v(a),B=v(b),d=B.clone().sub(A),len=d.length(),rings=radius.map(([t,w])=>[t*len,w,w*flatten]);const o=mesh(g,loftGeometry(rings,low?10:22,.88),m,A.toArray());o.quaternion.setFromUnitVectors(Y,d.normalize());return o;}
function armor(g,m,points,depth=.025,p=[0,0,0],r=[0,0,0],bevel=.008){const shape=new THREE.Shape();points.forEach((pt,i)=>i?shape.lineTo(...pt):shape.moveTo(...pt));shape.closePath();return mesh(g,new THREE.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelSize:bevel,bevelThickness:bevel*.65,bevelSegments:m.userData.low?1:3,curveSegments:1}),m,p,[1,1,1],r);}
function portraitArmor(g,m,points,depth,p,r,bevel=.006){const o=armor(g,m,points,depth,p,r,bevel),pos=o.geometry.attributes.position,uv=o.geometry.attributes.uv,point=new THREE.Vector3();o.updateMatrix();for(let i=0;i<pos.count;i++){point.fromBufferAttribute(pos,i).applyMatrix4(o.matrix);uv.setXY(i,.2+(point.x/.46+.5)*.6,1-(.57+(1-(point.y+.21)/.47)*.42));}uv.needsUpdate=true;return o;}
function clothDrape(g,m,side,low){const nx=low?6:14,ny=low?12:24,p=[],uv=[],ix=[];for(let j=0;j<=ny;j++){const t=j/ny;for(let i=0;i<=nx;i++){const u=i/nx;p.push(side*(.148+t*.077+u*.062),.15-t*.64,.014+t*.13+u*.075+Math.sin(u*TAU*2.5)*.009*(.3+t));uv.push(u,t);}}for(let j=0;j<ny;j++)for(let i=0;i<nx;i++){const a=j*(nx+1)+i;ix.push(a,a+nx+1,a+1,a+1,a+nx+1,a+nx+2);}const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(p,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(ix);geo.computeVertexNormals();const mat=m.clone();mat.side=THREE.DoubleSide;return mesh(g,geo,mat);}
function visorInsignia(head,r,m,rx,ry,rz,low){if(['bloodbath','hockey-mask','alien','assimilator'].includes(r.id))return;const box=crop[r.id],sourceY=({medusa:.365,cowboy:.38,sheikh:.335,blue:.29})[r.id]||.3,y=ry*(1-2*(sourceY-box[2])/(box[3]-box[2])),width=['optimus','medusa'].includes(r.id)?.034:.041,height=.051;
 const core=new THREE.MeshBasicMaterial({color:r.model.glow,toneMapped:false});const lines=[[[-1,-1],[-1,1],[-.72,1],[0,.26],[.72,1],[1,1],[1,-1],[.72,-1],[0,-.28],[-.72,-1],[-1,-1]],[[-.72,.6],[-.72,-.6],[-.2,0],[-.72,.6]],[[.72,.6],[.2,0],[.72,-.6],[.72,.6]]];
 for(const line of lines){const pts=line.map(([x,v])=>{const px=x*width,py=y+v*height,[w,d]=helmetProfile(py/ry),theta=Math.asin(Math.max(-.97,Math.min(.97,px/(rx*w))));return[px,py,-rz*1.045*d*(.5+.5*Math.cos(theta))-.012];});path(head,core,pts,low?.00125:.0011,low?line.length*2:line.length*4,4);}}
function helmetProfile(y){const keys=[[-1,.15,.32],[-.85,.49,.58],[-.55,.73,.83],[-.18,.95,.99],[.26,1,1],[.64,.88,.91],[.9,.54,.62],[1,.08,.18]];for(let i=1;i<keys.length;i++)if(y<=keys[i][0]){const a=keys[i-1],b=keys[i],t=(y-a[0])/(b[0]-a[0]);return[a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t];}return[.08,.18];}
function helmetShell(g,m,rx,ry,rz,low){const rings=[];for(let j=0;j<=(low?16:36);j++){const yn=-1+2*j/(low?16:36),[w,d]=helmetProfile(yn);rings.push([yn*ry,w*rx,d*rz,0,.018]);}return loft(g,m,rings,low,[0,0,0],[0,0,0],.92);}
function cloakPanel(g,m,low){const nx=low?10:24,ny=low?10:22,p=[],uv=[],ix=[];for(let j=0;j<=ny;j++){const t=j/ny,y=.2-t*.61,w=.19+t*.065;for(let i=0;i<=nx;i++){const u=i/nx,x=(u-.5)*w*2,z=.14+t*.07+Math.sin(u*TAU*6)*(.003+t*.006)+Math.sin(t*Math.PI)*.022;p.push(x,y+Math.sin(u*TAU*2)*.008*t,z);uv.push(u,t);}}for(let j=0;j<ny;j++)for(let i=0;i<nx;i++){const a=j*(nx+1)+i;ix.push(a,a+1,a+nx+1,a+1,a+nx+2,a+nx+1);}const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(p,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(ix);geo.computeVertexNormals();const mat=m.clone();mat.side=THREE.DoubleSide;return mesh(g,geo,mat);}
function riderBadge(g,r,m,low){
 if(typeof document==='undefined')return;const c=document.createElement('canvas');c.width=256;c.height=256;const ctx=c.getContext('2d');if(!ctx)return;
 ctx.fillStyle='#10171a';ctx.fillRect(0,0,256,256);ctx.strokeStyle=r.model.trim;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(20,15);ctx.lineTo(236,15);ctx.lineTo(227,187);ctx.lineTo(128,242);ctx.lineTo(29,187);ctx.closePath();ctx.stroke();ctx.setLineDash([4,5]);ctx.lineWidth=1;ctx.strokeRect(28,25,200,157);ctx.setLineDash([]);ctx.strokeStyle=r.model.glow;ctx.lineWidth=5;
 const logo=[[65,136],[65,47],[83,47],[128,91],[173,47],[191,47],[191,136],[173,136],[128,94],[83,136],[65,136]];ctx.beginPath();logo.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.stroke();ctx.font='700 18px sans-serif';ctx.textAlign='center';ctx.fillStyle='#eef1ea';ctx.fillText(r.name,128,171);ctx.fillStyle=r.model.trim;ctx.font='600 13px sans-serif';ctx.fillText('1 / 1   •   #'+String(r.token).padStart(3,'0'),128,199);
 const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;const mat=new THREE.MeshStandardMaterial({map:t,color:0xffffff,roughness:.87,metalness:.02,emissiveMap:t,emissive:0xffffff,emissiveIntensity:.08});mesh(g,new THREE.PlaneGeometry(.177,.177),mat,[0,.087,.164]);
}
function batch(g){const groups=new Map();for(const o of [...g.children]){if(!o.isMesh||o.isInstancedMesh||Array.isArray(o.material))continue;o.updateMatrix();const geo=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();geo.applyMatrix4(o.matrix);if(!groups.has(o.material))groups.set(o.material,[]);groups.get(o.material).push(geo);g.remove(o);o.geometry.dispose();}for(const [mat,geos]of groups){let count=geos.reduce((n,a)=>n+a.attributes.position.count,0),at=0;const pos=new Float32Array(count*3),norm=new Float32Array(count*3),uv=new Float32Array(count*2);for(const geo of geos){const p=geo.attributes.position;pos.set(p.array,at*3);if(geo.attributes.normal)norm.set(geo.attributes.normal.array,at*3);if(geo.attributes.uv)uv.set(geo.attributes.uv.array,at*2);at+=p.count;geo.dispose();}const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(pos,3));geo.setAttribute('normal',new THREE.BufferAttribute(norm,3));geo.setAttribute('uv',new THREE.BufferAttribute(uv,2));geo.computeBoundingSphere();mesh(g,geo,mat);}}
let weave,wear;
function detailTexture(type){let existing=type==='fabric'?weave:wear;if(existing)return existing;const n=128,data=new Uint8Array(n*n*4);for(let y=0;y<n;y++)for(let x=0;x<n;x++){const i=(y*n+x)*4,h=(Math.sin(x*127.1+y*311.7)*43758.5453)%1;const value=type==='fabric'?Math.sin(x*Math.PI/2)*Math.cos(y*Math.PI/2)*22:Math.sin(x*1.7+y*.12)*5+h*8;data[i]=128+value;data[i+1]=128+(type==='fabric'?Math.sin(y*Math.PI/2)*18:h*4);data[i+2]=253;data[i+3]=255;}const t=new THREE.DataTexture(data,n,n);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(type==='fabric'?7:2,type==='fabric'?9:3);t.needsUpdate=true;t.userData.shared=true;if(type==='fabric')weave=t;else wear=t;return t;}
function materials(r,low){const p=r.model||{},paint=p.paint||r.color||'#596573',glow=p.glow||'#72eddf',trim=p.trim||'#a8afb5';const physical=(color,roughness=.36,metalness=.6,extra={})=>new THREE.MeshPhysicalMaterial({color,roughness,metalness,clearcoat:.65,clearcoatRoughness:.2,userData:{low},...extra});
 return{paint:physical(paint,.42,.32,{normalMap:detailTexture('armor'),normalScale:new THREE.Vector2(.16,.16)}),trim:physical(trim,.32,.78),dark:physical('#11161d',.72,.08,{clearcoat:0,normalMap:detailTexture('fabric'),normalScale:new THREE.Vector2(.3,.3)}),cloth:physical(paint,.8,.03,{clearcoat:0,normalMap:detailTexture('fabric'),normalScale:new THREE.Vector2(.3,.3)}),black:physical('#03080b',.18,.35),metal:physical('#afb7bf',.23,.86),glow:new THREE.MeshStandardMaterial({color:glow,emissive:glow,emissiveIntensity:1.15,metalness:.2,roughness:.25}),ivory:physical('#d7d4b7',.48,.12),glass:physical('#152b31',.08,.6,{clearcoat:1}),red:physical('#a52d38',.35,.2),face:null,chest:null};}
function portraitMaterial(texture,type){const face=type==='face';return new THREE.MeshPhysicalMaterial({color:face?0x3f3f3f:0xb8b8b8,map:texture,emissiveMap:texture,emissive:0xffffff,emissiveIntensity:face?.38:.12,metalness:face?0:.1,roughness:face?.8:.56,clearcoat:face?.03:.15,clearcoatRoughness:.6,side:THREE.FrontSide});}
function portraitPatch(g,mat,cropBox,rx,ry,rz,low=false){
 const nx=low?14:34,ny=low?18:40,pos=[],uv=[],indices=[];for(let j=0;j<=ny;j++){const yn=-.94+1.9*j/ny,[w,d]=helmetProfile(yn);for(let i=0;i<=nx;i++){const theta=(i/nx-.5)*2.62,px=Math.sin(theta)*rx*w,py=yn*ry,pz=-rz*d*(.5+.5*Math.cos(theta));pos.push(px,py,pz);uv.push(cropBox[0]+((px/rx+1)*.5)*(cropBox[1]-cropBox[0]),1-(cropBox[2]+((1-yn)*.5)*(cropBox[3]-cropBox[2])));}}
 for(let j=0;j<ny;j++)for(let i=0;i<nx;i++){const a=j*(nx+1)+i;indices.push(a,a+nx+1,a+1,a+1,a+nx+1,a+nx+2);}const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(indices);geo.computeVertexNormals();return mesh(g,geo,mat);
}
function chestPatch(g,mat){const n=18,pos=[],uv=[],ind=[];for(let j=0;j<=n;j++){const t=j/n,y=-.21+t*.47,w=.155+.061*Math.sin(t*Math.PI*.82),depth=.118+.032*Math.exp(-(((t-.67)/.23)**2));for(let i=0;i<=n;i++){const x=i/n,posX=(x-.5)*w*2;pos.push(posX,y,-depth-Math.sin(x*Math.PI)*.029);uv.push(.2+(posX/.46+.5)*.6,1-(.57+(1-t)*.42));}}for(let j=0;j<n;j++)for(let i=0;i<n;i++){const a=j*(n+1)+i;ind.push(a,a+n+1,a+1,a+1,a+n+1,a+n+2);}const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(ind);geo.computeVertexNormals();return mesh(g,geo,mat);}
function emblem(g,m,x,y,z,size=.04){
 // Same angular outline as the site/collection mark. Curved splines turn this into a bow-tie.
 const lines=[[[3,44],[3,4],[10,4],[21,17],[32,4],[39,4],[39,44],[32,44],[21,31],[10,44],[3,44]],[[10,14],[10,34],[18,24],[10,14]],[[32,14],[24,24],[32,34],[32,14]]],radius=Math.min(.0019,size*.045);
 for(const line of lines)for(let i=1;i<line.length;i++){
  const a=line[i-1],b=line[i];rod(g,m,[x+(a[0]-21)/18*size,y+(24-a[1])/20*size*1.12,z],[x+(b[0]-21)/18*size,y+(24-b[1])/20*size*1.12,z],radius,radius,4);
 }
}
function clothHood(head,m,low,id){const N=low?18:40,K=low?10:20,pos=[],uv=[],ix=[];for(let j=0;j<=K;j++){const t=j/K,y=-.28+t*.5,r=.18+Math.sin(t*Math.PI)*.025-Math.max(0,t-.8)*.3;for(let i=0;i<=N;i++){const a=.65+(TAU-1.3)*i/N,fold=Math.cos(a*14)*.007*Math.sin(t*Math.PI);pos.push(Math.sin(a)*(r+fold),y,-Math.cos(a)*(r*.94+fold)+.025);uv.push(i/N,t);}}for(let j=0;j<K;j++)for(let i=0;i<N;i++){const a=j*(N+1)+i;ix.push(a,a+N+1,a+1,a+1,a+N+1,a+N+2);}const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(ix);geo.computeVertexNormals();const cloth=m.cloth.clone();cloth.side=THREE.DoubleSide;if(id==='ice')cloth.color.set('#29475f');if(id==='fire')cloth.color.set('#20222a');mesh(head,geo,cloth);for(const s of[-1,1])path(head,m.trim,[[s*.12,.17,-.12],[s*.17,.06,-.16],[s*.18,-.12,-.11],[s*.15,-.26,-.08]],.004,18,5);}
const MODEL_TOOLS={crop,tint,mesh,oval,rod,path,torus,plate,block,loft,limb,armor,portraitArmor,clothDrape,visorInsignia,helmetProfile,helmetShell,portraitPatch,chestPatch,emblem,clothHood,cloakPanel,riderBadge,batch,v,TAU,Y,detailTexture,makeHead};
function makeHead(r,m,low){return createReferenceHead(r,m,low,MODEL_TOOLS);}
function makeBody(r,m,low){return createReferenceBody(r,m,low,MODEL_TOOLS);}
let batWood;
function woodTexture(){if(batWood)return batWood;const w=128,h=256,data=new Uint8Array(w*h*4);for(let y=0;y<h;y++)for(let x=0;x<w;x++){const i=(y*w+x)*4,grain=Math.sin(x*.74+Math.sin(y*.029)*.8)*13+Math.sin(x*2.7+y*.013)*5,speck=Math.sin(x*19+y*7)*2;data[i]=132+grain+speck;data[i+1]=89+grain*.72;data[i+2]=48+grain*.43;data[i+3]=255;}batWood=new THREE.DataTexture(data,w,h);batWood.colorSpace=THREE.SRGBColorSpace;batWood.wrapS=THREE.RepeatWrapping;batWood.needsUpdate=true;batWood.userData.shared=true;return batWood;}
// The chain keeps its buffers for its lifetime; the race loop does not allocate geometry or vectors.
function animateChainWeapon(g,phase,time,speed){const u=g.userData;if(!u.chainLinks)return;const c=u.chainPose;g.updateWorldMatrix(true,false);g.getWorldQuaternion(c.rotation).invert();c.direction.set(0,-1,0).applyQuaternion(c.rotation).lerp(Y,Math.min(1,phase*1.35)).normalize();const bend=(1-phase)*.085+phase*.018;
 for(let i=0;i<u.chainCount;i++){const t=(i+.5)/u.chainCount,d=t*u.chainLength;c.position.copy(c.direction).multiplyScalar(d);c.position.y+=.145;c.position.z+=Math.sin(t*Math.PI)*bend+Math.sin(time*9-i*.25)*.005*(1-phase)*Math.min(1,Math.abs(speed)/30);c.tangent.copy(c.direction);c.tangent.z+=Math.cos(t*Math.PI)*bend*Math.PI/u.chainLength;c.tangent.normalize();c.quaternion.setFromUnitVectors(Y,c.tangent);if(i%2)c.quaternion.multiply(c.quarterTurn);c.matrix.compose(c.position,c.quaternion,c.scale);u.chainLinks.setMatrixAt(i,c.matrix);}
 u.chainLinks.instanceMatrix.needsUpdate=true;u.chainWeight.position.copy(c.direction).multiplyScalar(u.chainLength+.017);u.chainWeight.position.y+=.145;
}
function weaponMesh(type,m,low){const g=new THREE.Group();g.name='MetaWinners '+type;
 if(type==='chain'){
  rod(g,m.dark,[0,0,0],[0,.142,0],.015,.016,low?8:14);for(let i=0;i<5;i++)torus(g,m.metal,[0,.017+i*.026,0],.016,.0025,[Math.PI/2,0,0],12);
  const count=low?12:16,links=new THREE.InstancedMesh(new THREE.TorusGeometry(.0205,.0045,low?4:7,low?10:18),m.metal,count);links.name='Articulated interlocking chain links';links.castShadow=true;links.receiveShadow=true;links.frustumCulled=false;links.instanceMatrix.setUsage(THREE.DynamicDrawUsage);g.add(links);
  const weight=new THREE.Group();g.add(weight);mesh(weight,new THREE.IcosahedronGeometry(.029,0),m.metal);for(const axis of[[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]])rod(weight,m.metal,axis.map(n=>n*.023),axis.map(n=>n*.044),.007,.001,5);batch(weight);Object.assign(g.userData,{chainLinks:links,chainWeight:weight,chainCount:count,chainLength:.53,chainPose:{rotation:new THREE.Quaternion(),direction:new THREE.Vector3(),position:new THREE.Vector3(),tangent:new THREE.Vector3(),quaternion:new THREE.Quaternion(),quarterTurn:new THREE.Quaternion().setFromAxisAngle(Y,Math.PI/2),matrix:new THREE.Matrix4(),scale:new THREE.Vector3(1,1.25,1)}});
 }else if(type==='wrench'){
  armor(g,m.metal,[[-.014,-.02],[.015,-.02],[.019,.33],[.029,.382],[-.029,.382],[-.018,.33]],.015,[0,0,-.007],[0,0,0],.004);
  armor(g,m.metal,[[-.035,.365],[-.059,.396],[-.063,.44],[-.045,.476],[-.022,.481],[-.027,.433],[.027,.433],[.022,.481],[.045,.476],[.063,.44],[.059,.396],[.035,.365]],.021,[0,0,-.0105],[0,0,0],.003);
  const boxEnd=torus(g,m.metal,[0,-.015,0],.025,.008,[0,0,0],6);boxEnd.scale.y=1.12;
  armor(g,m.dark,[[-.016,.025],[.016,.025],[.018,.175],[-.018,.175]],.017,[0,0,-.0085],[0,0,0],.003);for(let i=0;i<5;i++)block(g,m.metal,[0,.047+i*.023,-.019],[.025,.003,.002]);
 }else{
  const wood=m.paint.clone();wood.color.set('#ffffff');wood.map=woodTexture();wood.normalMap=null;wood.metalness=.02;wood.roughness=.64;wood.clearcoat=.15;
  rod(g,wood,[0,0,0],[0,.535,0],.014,.033,low?12:24);mesh(g,new THREE.SphereGeometry(.033,low?12:24,low?6:12,0,TAU,0,Math.PI/2),wood,[0,.535,0]);
  rod(g,m.dark,[0,.015,0],[0,.15,0],.018,.019,low?10:18);for(let i=0;i<(low?6:10);i++)torus(g,m.dark,[0,.022+i*(low?.021:.013),0],.0186,.0018,[Math.PI/2,0,0],low?10:18);rod(g,m.metal,[0,-.015,0],[0,.005,0],.026,.022,low?10:16);torus(g,m.trim,[0,.177,0],.02,.002,[Math.PI/2,0,0],low?12:20);
 }
 batch(g);if(type==='chain')animateChainWeapon(g,0,0,0);return g;
}
function deduplicateMaterials(root){
 const variants=new Map(),retired=new Set();
 root.traverse(o=>{if(!o.isMesh||Array.isArray(o.material))return;const m=o.material;
  const key=[m.type,m.color?.getHex(),m.emissive?.getHex(),m.emissiveIntensity,m.roughness,m.metalness,m.clearcoat,m.clearcoatRoughness,m.opacity,m.transparent,m.alphaTest,m.side,m.depthWrite,m.toneMapped,m.polygonOffset,m.polygonOffsetFactor,m.normalScale?.x,m.normalScale?.y,...['map','normalMap','roughnessMap','metalnessMap','emissiveMap','alphaMap'].map(k=>m[k]?.uuid)].join('/');
  const prior=variants.get(key);if(prior&&prior!==m){o.material=prior;retired.add(m);}else variants.set(key,m);
 });return retired;
}
function flattenJoint(joint,keep=[]){
 joint.updateWorldMatrix(true,true);const inverse=new THREE.Matrix4().copy(joint.matrixWorld).invert(),parts=[];
 joint.traverse(o=>{if(!o.isMesh)return;let a=o;while(a&&a!==joint){if(keep.includes(a))return;a=a.parent;}parts.push(o);});
 for(const o of parts){const transform=new THREE.Matrix4().multiplyMatrices(inverse,o.matrixWorld);o.removeFromParent();transform.decompose(o.position,o.quaternion,o.scale);joint.add(o);}
 for(const child of [...joint.children])if(!child.isMesh&&!keep.includes(child))joint.remove(child);batch(joint);
}
const STRIKE_MOTION={bat:{release:.17,contact:.38,returnAt:.62,reach:.61,height:.05,forward:.23},chain:{release:.22,contact:.45,returnAt:.72,reach:.64,height:.10,forward:.19},wrench:{release:.12,contact:.30,returnAt:.52,reach:.48,height:.015,forward:.31}};
const easeRange=(start,end,value)=>{const t=THREE.MathUtils.clamp((value-start)/(end-start),0,1);return t*t*(3-2*t);};
/** Distinct wind-up, contact and follow-through, with a continuous return to the grip. */
export function riderStrikeMotion(type,attack,result={},contactTiming){
 const profile=STRIKE_MOTION[type]||STRIKE_MOTION.bat,progress=attack>0?1-THREE.MathUtils.clamp(attack,0,1):0;
 // Opponents telegraph longer than the player; their visible contact follows the actual AI hit time.
 const contact=Number.isFinite(contactTiming)?THREE.MathUtils.clamp(contactTiming,.08,.94):profile.contact;
 const t=progress<=contact?progress/contact*profile.contact:profile.contact+(progress-contact)/(1-contact)*(1-profile.contact);
 result.amount=attack>0?easeRange(0,.12,t)*(1-easeRange(profile.returnAt,1,t)):0;
 result.windup=easeRange(0,profile.release,t)*(1-easeRange(profile.release,profile.contact,t));
 result.contact=easeRange(profile.release,profile.contact,t)*(1-easeRange(profile.contact,profile.returnAt+.16,t));
 result.follow=easeRange(profile.contact,profile.returnAt,t)*(1-easeRange(profile.returnAt,1,t));
 result.x=.29+(profile.reach-.29)*result.contact+.13*result.follow;
 result.y=profile.height+.15*result.windup-.12*result.follow;
 result.z=.17*result.windup-profile.forward*result.contact-.11*result.follow;
 return result;
}
function secondaryRig(part,index){const cfg=part.userData.spring||{};return{part,base:part.rotation.clone(),angle:[0,0],velocity:[0,0],kind:cfg.kind||'cloth',strength:THREE.MathUtils.clamp(cfg.strength??.7,0,1),seed:cfg.seed??index};}
function animateSecondary(parts,pose,overdrive,speed,time,dt){
 const wind=Math.min(1,Math.abs(speed)/70),active=overdrive?1.25:1;
 for(const rig of parts){const cloth=rig.kind==='cloth',strength=rig.strength,omega=cloth?9:12,decay=Math.exp(-omega*dt),flutter=Math.sin(time*(cloth?5.2:3.8)+rig.seed*2.17)*wind;
  for(let axis=0;axis<2;axis++){
   const target=strength*(axis===0?-(cloth?.14:.07)*wind*active+.06*pose.braking+.018*flutter:-pose.lean*(cloth?.10:.045)+.025*flutter);
   const offset=rig.angle[axis]-target,impulse=(rig.velocity[axis]+omega*offset)*dt;
   rig.angle[axis]=THREE.MathUtils.clamp(target+(offset+impulse)*decay,-.25,.25);rig.velocity[axis]=(rig.velocity[axis]-omega*impulse)*decay;
  }
  rig.part.rotation.set(rig.base.x+rig.angle[0],rig.base.y,rig.base.z+rig.angle[1],rig.base.order);
 }
}
export function createRiderBike(rider={}, {weapon='bat',quality='high'}={}){
 const data=RIDER_BY_ID[rider.id]||RIDERS.find(r=>r.name===rider.name)||RIDERS[0],low=quality==='low';const m=materials(data,low);if(data.id==='hockey-mask'){m.paint.color.set('#242c30');m.paint.metalness=.02;m.paint.roughness=.92;m.paint.clearcoat=0;m.paint.normalMap=detailTexture('fabric');m.cloth.color.set('#263034');m.cloth.roughness=.95;m.trim.color.set('#70796f');m.trim.metalness=.15;m.trim.roughness=.8;}if(['organic','serpent','alien','tribal'].includes(data.model.family)){m.paint.metalness=.06;m.paint.roughness=.38;m.paint.clearcoat=.24;}const image=textures.get(data.id);if(image){m.face=portraitMaterial(image,'face');m.chest=portraitMaterial(image,'chest');m.face.userData.low=low;m.chest.userData.low=low;}
 if(low){for(const key of ['metal','black','glass','ivory','red'])m[key].dispose();m.metal=m.trim;m.black=m.dark;m.glass=m.dark;m.ivory=m.trim;m.red=m.glow;}
 const root=new THREE.Group();root.name='MetaWinners '+data.name;const bike=createMotorcycle({...data.model,name:data.name,id:data.id,token:data.token,paint:data.model.paint,trim:data.model.trim,glow:data.model.glow,archetype:['armored','sport','gladiator'].includes(data.model.family)?'heavy':['western','robed','brass','punk','respirator'].includes(data.model.family)?'street':'sport'},{quality});root.add(bike);
 const body=makeBody(data,m,low);body.torso.updateMatrix();root.add(body.rider);
 const headParts=body.head.userData.secondaryParts||[],bodyParts=body.secondaryParts||[],secondaryParts=[...headParts,...bodyParts];
 // Keep articulated torso/head islands on opponents; batch each island independently.
 // Baking the whole rival into its hips used to remove every upper-body animation.
 const retiredMaterials=low?deduplicateMaterials(body.rider):new Set();
 if(low){flattenJoint(body.head,headParts);flattenJoint(body.torso,[body.head,...bodyParts]);flattenJoint(body.rider,[body.torso,...body.arms]);}
 const weaponRig=weaponMesh(weapon,m,low);body.arms[1].userData.foreRig.add(weaponRig);weaponRig.position.copy(body.arms[1].userData.hand);weaponRig.rotation.z=-.22;weaponRig.rotation.x=.6;
 root.userData={id:data.id,quality,bike,body:bike,rider:body.rider,torso:body.torso,head:body.head,armLeft:body.arms[0],armRight:body.arms[1],weapon:weaponRig,weaponType:weapon,wheelFront:bike.userData.wheelFront,wheelRear:bike.userData.wheelRear,steering:bike.userData.steering,exhaust:bike.userData.exhaust,materials:m,retiredMaterials,secondary:secondaryParts.map(secondaryRig),pose:{boost:0,braking:0,recoil:0,lean:0,headYaw:0,strike:{},inverseRider:new THREE.Matrix4(),gripMatrix:new THREE.Matrix4(),weaponDirection:new THREE.Vector3(),weaponAim:new THREE.Vector3(),inverseFore:new THREE.Quaternion(),waistAnchor:new THREE.Vector3(0,-.2,.02).applyMatrix4(body.torso.matrix),waistOffset:new THREE.Vector3()},forward:'-Z',rideHeight:1.72,referenceId:data.id,referencePortrait:data.portrait,portraitMapped:false,restHeadRotation:.19,features:data.model.features,modelRevision:6};
 for(const arm of body.arms){const a=arm.userData;a.ik={grip:new THREE.Vector3(),target:new THREE.Vector3(),direction:new THREE.Vector3(),pole:new THREE.Vector3(),elbow:new THREE.Vector3(),foreDirection:new THREE.Vector3(),attackTarget:new THREE.Vector3(),upperDirection:a.restE.clone().normalize(),foreRestDirection:a.hand.clone().normalize()};}
 return root;
}
export function animateRiderBike(group,state={},dt=1/60){const u=group.userData;if(!u?.bike)return;
 const speed=Number(state.speed)||0,time=Number(state.time)||0,attack=THREE.MathUtils.clamp(Number(state.attack)||0,0,1),side=state.attackSide<0?-1:1,steer=THREE.MathUtils.clamp(Number(state.steer)||0,-1,1),overdrive=!!(state.flow?.active&&state.boosting),p=u.pose,motion=riderStrikeMotion(u.weaponType,attack,p.strike,state.attackContact),phase=motion.amount;
 const delta=THREE.MathUtils.clamp(Number(dt)||0,0,.06),blend=1-Math.exp(-delta*12),fast=1-Math.exp(-delta*20),pitch=THREE.MathUtils.clamp(Number(state.pitch)||0,-.25,.25),lean=THREE.MathUtils.clamp(Number(state.lean)||0,-1.2,1.2);
 p.boost+=((overdrive?1.22:state.boost||state.boosting?1:0)-p.boost)*blend;p.braking+=(THREE.MathUtils.clamp(Number(state.braking)||0,0,1)-p.braking)*blend;p.lean+=(lean-p.lean)*fast;p.recoil+=(THREE.MathUtils.clamp(Number(state.hit)||0,0,1)-p.recoil)*fast;
 const look=THREE.MathUtils.clamp(-steer*.16-p.lean*.12-(state.threat?.side||0)*.09,-.34,.34);p.headYaw+=(look-p.headYaw)*blend;
 animateMotorcycle(u.bike,state,dt);const ride=u.bike.userData.riderPose;u.rider.position.copy(ride.position);u.rider.rotation.x=ride.rotationX;
 if(u.torso){
  u.torso.rotation.set(-.49-p.boost*.10+p.braking*.075+pitch*.18+p.recoil*.075,u.steering.rotation.y*.65+side*phase*(-motion.windup*.045+motion.contact*.13+motion.follow*.055),-p.lean*.14-p.recoil*.045*Math.sin(time*24));
  // Rotate the chest around the belt so the jacket remains connected to the hips.
  p.waistOffset.set(0,-.2,.02).applyEuler(u.torso.rotation);u.torso.position.copy(p.waistAnchor).sub(p.waistOffset);u.torso.updateMatrix();
 }
 if(u.head){u.head.rotation.set(.19+p.boost*.055-p.braking*.04-pitch*.15-p.recoil*.10+Math.sin(time*9)*Math.min(.004,Math.abs(speed)*.0001),p.headYaw+side*phase*.10,p.lean*.045);}
 // Actual fork transforms, including steering, compression and rear-axle wheelie pivot.
 // Convert once to rider space, then solve both arms without transient allocations.
 u.rider.updateWorldMatrix(true,false);u.steering.updateWorldMatrix(true,false);p.inverseRider.copy(u.rider.matrixWorld).invert();p.gripMatrix.multiplyMatrices(p.inverseRider,u.steering.matrixWorld);
 for(let i=0;i<2;i++){const a=(i?u.armRight:u.armLeft).userData;a.ik.grip.copy(i?u.bike.userData.gripLocals.right:u.bike.userData.gripLocals.left).applyMatrix4(p.gripMatrix);}
 // Acceleration raises the chassis relative to the fork. Reach from the belt,
 // rather than stretching the arms or silently leaving a hand off its grip.
 let extraTuck=0;
 for(let pass=0;pass<7;pass++){
  let excess=0;for(let i=0;i<2;i++){const arm=i?u.armRight:u.armLeft,a=arm.userData;arm.position.copy(a.shoulder).applyMatrix4(u.torso.matrix);if(a.side!==side||phase<.001)excess=Math.max(excess,a.ik.grip.distanceTo(arm.position)-a.lengthUpper-a.lengthFore+.0003);}
  if(excess<.00001)break;const correction=Math.min(.13,excess*3.6,.55-extraTuck);if(correction<=0)break;extraTuck+=correction;u.torso.rotation.x-=correction;p.waistOffset.set(0,-.2,.02).applyEuler(u.torso.rotation);u.torso.position.copy(p.waistAnchor).sub(p.waistOffset);u.torso.updateMatrix();
 }
 if(u.head)u.head.rotation.x+=extraTuck*.48;
 for(let i=0;i<2;i++){
  const arm=i?u.armRight:u.armLeft,a=arm.userData,k=a.ik,amount=a.side===side?phase:0;
  arm.position.copy(a.shoulder).applyMatrix4(u.torso.matrix);
  k.target.copy(k.grip).sub(arm.position);
  k.attackTarget.set(a.side*motion.x,motion.y,motion.z);k.target.lerp(k.attackTarget,amount);
  const distance=THREE.MathUtils.clamp(k.target.length(),Math.abs(a.lengthUpper-a.lengthFore)+.0001,a.lengthUpper+a.lengthFore-.0001);k.direction.copy(k.target).normalize();k.target.copy(k.direction).multiplyScalar(distance);
  const along=(a.lengthUpper*a.lengthUpper-a.lengthFore*a.lengthFore+distance*distance)/(2*distance),height=Math.sqrt(Math.max(0,a.lengthUpper*a.lengthUpper-along*along));
  k.pole.copy(a.pole);k.attackTarget.set(a.side*.4,.65,.12);k.pole.lerp(k.attackTarget,amount*.75);k.pole.addScaledVector(k.direction,-k.pole.dot(k.direction)).normalize();k.elbow.copy(k.direction).multiplyScalar(along).addScaledVector(k.pole,height);
  k.foreDirection.copy(k.elbow).normalize();a.upperRig.quaternion.setFromUnitVectors(k.upperDirection,k.foreDirection);a.foreRig.position.copy(k.elbow);k.foreDirection.copy(k.target).sub(k.elbow).normalize();a.foreRig.quaternion.setFromUnitVectors(k.foreRestDirection,k.foreDirection);
 }
 if(u.weapon){const arm=side<0?u.armLeft:u.armRight,a=arm.userData,fore=a.foreRig;if(u.weapon.parent!==fore)fore.add(u.weapon);u.weapon.position.copy(a.hand);p.weaponDirection.set(side*.18,.8,.5).normalize();p.weaponAim.set(side*(u.weaponType==='chain'?1.1:.85),.34+motion.windup*.4-motion.follow*.6,motion.windup*.4-motion.contact*(u.weaponType==='wrench'?.8:.4)).normalize();p.inverseFore.copy(fore.quaternion).invert();p.weaponDirection.lerp(p.weaponAim,phase).normalize().applyQuaternion(p.inverseFore);u.weapon.quaternion.setFromUnitVectors(Y,p.weaponDirection);if(u.weaponType==='chain')animateChainWeapon(u.weapon,phase*Math.max(.2,motion.contact),time,speed);}
 animateSecondary(u.secondary,p,overdrive,speed,time,delta);
}

export function disposeRiderBike(group){const bike=group.userData.bike;if(bike){group.remove(bike);disposeMotorcycle(bike);}const geos=new Set(),mats=new Set([...Object.values(group.userData.materials||{}).filter(Boolean),...(group.userData.retiredMaterials||[])]),maps=new Set();group.traverse(o=>{if(o.isInstancedMesh)o.dispose();if(o.geometry)geos.add(o.geometry);for(const m of(Array.isArray(o.material)?o.material:[o.material]))if(m){mats.add(m);for(const name of['map','normalMap','roughnessMap','metalnessMap','emissiveMap'])if(m[name]&&!m[name].userData.shared)maps.add(m[name]);}});geos.forEach(g=>{if(!g.userData.shared)g.dispose();});mats.forEach(m=>{if(!m.userData.shared)m.dispose();});maps.forEach(t=>t.dispose());group.clear();}
