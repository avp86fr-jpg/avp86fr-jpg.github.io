import * as THREE from './vendor/three.module.js';
import {sampleTrack} from './track.js';
import {CIRCUIT_DISTRICTS,CIRCUIT_EVENTS,getCircuitDistrict} from './circuit-events.js';

const TAU=Math.PI*2;
const surface=(color,roughness=.7,metalness=.15,extra={})=>new THREE.MeshStandardMaterial({color,roughness,metalness,...extra});
function block(g,m,x,y,z,w,h,d){const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;g.add(mesh);return mesh;}
function tube(g,m,a,b,r=.12,sides=8){const from=new THREE.Vector3(...a),to=new THREE.Vector3(...b),delta=to.clone().sub(from),mesh=new THREE.Mesh(new THREE.CylinderGeometry(r,r,delta.length(),sides),m);mesh.position.copy(from).add(to).multiplyScalar(.5);mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());mesh.castShadow=true;g.add(mesh);return mesh;}
function sign(stage,g,label,color,x,y,z,w=15,h=2){const mesh=stage._sign(label,color,w,h);mesh.position.set(x,y,z);g.add(mesh);return mesh;}
function ring(g,m,x,y,z,r,width=.1,arc=TAU){const mesh=new THREE.Mesh(new THREE.TorusGeometry(r,width,6,stageSegments(r),arc),m);mesh.position.set(x,y,z);g.add(mesh);return mesh;}
const stageSegments=r=>r>5?40:20;

function portal(stage,p,kind,label){const g=new THREE.Group(),vault=kind==='vault',color=vault?'#74f8df':'#ffd796';
 for(const side of[-1,1]){block(g,p.dark,side*10.6,3.9,0,.9,7.8,1.4);block(g,p.gold,side*10.6,.35,0,1.4,.7,1.8);block(g,p.cyan,side*10.06,3.8,.2,.07,6.8,.12);}
 if(vault){ring(g,p.steel,0,.8,0,10.6,.26,Math.PI);ring(g,p.cyan,0,.8,.1,10.22,.075,Math.PI);for(let i=0;i<9;i++){const a=i/8*Math.PI,x=Math.cos(a),y=Math.sin(a);tube(g,p.gold,[x*10.3,.8+y*10.3,.1],[x*10.9,.8+y*10.9,.1],.1,5);}}
 else{block(g,p.dark,0,8.5,0,22.2,.55,2);for(const z of[-.9,.9])block(g,p.amber,0,8.18,z,22.2,.08,.1);for(const side of[-1,1]){tube(g,p.gold,[side*10.5,7.8,0],[side*5.5,11.8,0],.2);tube(g,p.amber,[side*10.2,7.9,.2],[side*5.4,11.5,.2],.06);}block(g,p.dark,0,11.7,0,11.5,.55,1.2);block(g,p.cyan,0,11.38,.5,11.2,.06,.08);}
 if(label)sign(stage,g,label,color,0,vault?9.6:9.6,1.05,16,1.25);
 return g;
}
// A corridor is baked against actual centreline samples once, then translated as one object.
// Its support legs remain outside the shoulder even through the middle of a bend.
function corridor(stage,p,start,kind,label){const g=new THREE.Group(),origin=sampleTrack(start,stage.circuit),count=stage.mobile?4:6;
 for(let i=0;i<count;i++){const distance=start+i*16,s=sampleTrack(distance,stage.circuit),arch=portal(stage,p,kind,i===0?label:null);arch.position.set(s.x-origin.x,s.y-origin.y,-(distance-start));arch.rotation.y=s.heading;g.add(arch);}
 const result=stage._batchTemplate(g);result.userData.worldAligned=true;result.userData.corridor=true;return result;
}
function club(stage,p,label){const g=new THREE.Group(),pink=surface('#c84383',.28,.45,{emissive:'#d9428f',emissiveIntensity:1.3});
 block(g,p.dark,0,5.3,-1,23,10.6,12);block(g,p.window,0,4.6,5.05,20,6.7,.12);block(g,p.gold,0,9.6,5.2,24,.25,.4);block(g,p.dark,0,3.5,8,24,.6,7);
 for(const side of[-1,1]){block(g,p.gold,side*10.5,1.7,10,.3,3.4,.3);block(g,pink,side*11.7,6.3,5.25,.12,8.8,.14);}
 for(let i=0;i<8;i++){const x=-9.8+i*2.8;tube(g,p.cyan,[x,3.85,11],[x,3.85,5],.045,4);block(g,p.dark,x,4.8,5.2,.17,6,.2);}
 sign(stage,g,label,'#ff9cca',0,7.3,5.3,19,2.3);for(let i=0;i<5;i++)block(g,p.amber,-8+i*4,.1,12,2,.2,2);
 return stage._batchTemplate(g);
}
function cargoYard(stage,p){const g=new THREE.Group(),rust=surface('#925f4b',.8,.35),blue=surface('#405c69',.7,.4);
 for(let row=0;row<2;row++)for(let col=0;col<3;col++){const x=(col-1)*6.3,z=-row*8,y=1.55+(row?3.1:0),m=(row+col)%2?rust:blue;block(g,m,x,y,z,6,3,7.4);for(let n=0;n<8;n++)block(g,p.dark,x-2.6+n*.74,y,z+3.73,.045,2.7,.035);block(g,p.steel,x,y+1.48,z+3.76,6,.06,.07);}
 sign(stage,g,'MW / BLACKWATER FREIGHT','#cbdad6',0,7.1,3.8,17,1.45);return stage._batchTemplate(g);
}
function crane(stage,p){const g=new THREE.Group();for(const side of[-1,1]){tube(g,p.gold,[side*7,0,0],[side*4.6,29,0],.42);tube(g,p.steel,[side*7,0,-10],[side*4.6,29,0],.32);}
 block(g,p.dark,0,29,0,11,2.6,5);block(g,p.window,2,29.5,2.55,4.4,1.6,.1);
 for(const z of[-1.3,1.3]){tube(g,p.gold,[-22,31,z],[27,31,z],.24);tube(g,p.gold,[-22,34,z],[27,34,z],.24);for(let i=0;i<12;i++){const x=-22+i*4.1;tube(g,p.steel,[x,31,z],[x+2,34,z],.13);tube(g,p.steel,[x+2,34,z],[x+4.1,31,z],.13);}}
 for(const x of[18,22])tube(g,p.dark,[x,31,0],[x,13,0],.045,5);block(g,p.gold,20,12.7,0,5,.35,1);block(g,p.steel,-18,30.2,0,9,2.5,5);
 return stage._batchTemplate(g);
}
function artDeco(stage,p,label){const g=new THREE.Group(),pink=surface('#d7a3a1',.82,.08),cream=surface('#f0dfbd',.83,.04),teal=surface('#529c9e',.38,.35);
 block(g,pink,0,11,-2,24,22,14);block(g,cream,-7.5,16,-3,8,32,13);block(g,cream,7.5,16,-3,8,32,13);block(g,teal,0,21.5,-2,8,17,11);
 for(let floor=0;floor<7;floor++){const y=3+floor*3;block(g,cream,0,y,5.1,25,.22,1.4);for(let x=-9;x<=9;x+=3)block(g,p.window,x,y+1.3,5.13,2.1,1.8,.08);}
 for(const side of[-1,1]){block(g,p.cyan,side*10.2,18,5.7,.11,25,.1);for(let i=0;i<3;i++)block(g,pink,side*7.5,32.2+i*.5,-3,8.8-i*.5,.25,13.8-i*.5);}
 block(g,cream,0,3.5,8,22,.3,6);for(const side of[-1,1])tube(g,teal,[side*8,0,10],[side*8,3.5,10],.16);sign(stage,g,label,'#fee3c8',0,25.1,5.2,15,1.8);
 return stage._batchTemplate(g);
}
function yacht(stage,p,sail=false){const g=new THREE.Group(),white=surface('#ece5cf',.38,.24),navy=surface('#24465b',.35,.5);
 const hull=new THREE.Mesh(new THREE.SphereGeometry(1,24,12),white);hull.scale.set(3.3,1.45,10.5);hull.position.y=.05;hull.castShadow=true;g.add(hull);block(g,navy,0,.9,-1,5.1,.3,15);block(g,white,0,1.9,-1,3.8,1.8,8);block(g,p.window,0,2.25,3.03,3.2,.85,.07);block(g,white,0,3,-2,4.3,.2,9);
 for(const side of[-1,1]){tube(g,p.steel,[side*2.6,1.25,-8],[side*2.6,1.25,6],.035,5);for(let z=-7;z<=6;z+=3)tube(g,p.steel,[side*2.6,.65,z],[side*2.6,1.25,z],.025,5);}
 if(sail){tube(g,p.steel,[0,0,0],[0,17,0],.095);const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute([0,16.6,0,0,3.2,-8.5,0,3.2,0],3));geo.computeVertexNormals();const material=white.clone();material.side=THREE.DoubleSide;g.add(new THREE.Mesh(geo,material));tube(g,p.dark,[0,16,0],[0,1,9],.018,4);}
 else{tube(g,p.steel,[0,2.7,-1],[0,5.5,-1],.06);block(g,p.window,0,3.4,-2,3.4,.6,5);}
 return stage._batchTemplate(g);
}
function pier(stage,p){const g=new THREE.Group(),wood=surface('#8b8270',.93,.02);block(g,wood,0,.2,0,52,.3,7);for(let x=-24;x<=24;x+=4){block(g,p.white,x,-1,2.8,.28,2.4,.28);block(g,p.white,x,-1,-2.8,.28,2.4,.28);block(g,p.white,x,1,2.8,.12,1.6,.12);block(g,p.white,x,1,-2.8,.12,1.6,.12);}for(const z of[-2.8,2.8])tube(g,p.white,[-26,1.8,z],[26,1.8,z],.06,6);return stage._batchTemplate(g);}
function turbine(stage,p){const g=new THREE.Group(),tower=new THREE.Mesh(new THREE.CylinderGeometry(.55,1.3,35,12),p.white);tower.position.y=17.5;tower.castShadow=true;g.add(tower);block(g,p.dark,0,35,0,1.7,1.6,3.3);const rotor=new THREE.Group();rotor.position.set(0,35,1.9);g.add(rotor);
 const points=[[-.19,0],[.4,.35],[.48,5.5],[.03,13],[-.2,9],[-.27,2]],shape=new THREE.Shape();points.forEach(([x,y],i)=>i?shape.lineTo(x,y):shape.moveTo(x,y));shape.closePath();const geo=new THREE.ExtrudeGeometry(shape,{depth:.1,bevelEnabled:false});for(let i=0;i<3;i++){const blade=new THREE.Mesh(geo,p.white);blade.rotation.z=i/3*TAU;rotor.add(blade);}const hub=new THREE.Mesh(new THREE.SphereGeometry(.8,12,8),p.white);rotor.add(hub);g.userData.rotor=rotor;return g;
}
function pumpjack(stage,p){const g=new THREE.Group(),rust=surface('#805744',.87,.5);for(const side of[-1,1]){tube(g,rust,[side*3.5,0,-2],[side*1.4,8,0],.27);tube(g,rust,[side*3.5,0,3],[side*1.4,8,0],.27);}block(g,rust,0,8,0,3.5,.65,14);block(g,p.gold,0,6.2,6,2.8,4.2,1.6);tube(g,p.dark,[0,5.8,6],[0,.5,6],.11);block(g,p.dark,0,1.1,-5,6,2.2,5);for(const s of[-1,1])ring(g,rust,s*3.1,2,-4,1.5,.16);return stage._batchTemplate(g);}
function saltSurface(stage,start,end){const group=new THREE.Group(),first=sampleTrack(start,stage.circuit),material=surface('#ffffff',.97,.01,{vertexColors:true}),soil=new THREE.Color('#a98b6b'),salt=new THREE.Color('#e3e1cf'),tint=new THREE.Color(),count=Math.ceil((end-start)/7);
 for(const side of[-1,1]){const vertices=[],uv=[],colors=[],indices=[];for(let i=0;i<=count;i++){const d=start+(end-start)*i/count,s=sampleTrack(d,stage.circuit),fade=THREE.MathUtils.smoothstep(d-start,0,180)*THREE.MathUtils.smoothstep(end-d,0,180);tint.copy(soil).lerp(salt,fade);for(const lateral of[side*8.7,side*380]){colors.push(tint.r,tint.g,tint.b);vertices.push(s.x-first.x+Math.cos(s.heading)*lateral,s.y-first.y-.085,start-d-Math.sin(s.heading)*lateral);uv.push(lateral/45,d/45);}}for(let i=0;i<count;i++){const k=i*2;side>0?indices.push(k,k+1,k+2,k+1,k+3,k+2):indices.push(k,k+2,k+1,k+1,k+2,k+3);}const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geo.setIndex(indices);geo.computeVertexNormals();const mesh=new THREE.Mesh(geo,material);mesh.receiveShadow=true;group.add(mesh);}
 group.userData.worldAligned=true;group.userData.surface=true;return group;
}
function warning(stage,p,event){const g=new THREE.Group();for(const side of[-1,1]){const panel=stage._sign('CHALLENGE / 100 M',event.accent,5,1.1);panel.position.set(side*11.4,2.6,0);g.add(panel);tube(g,p.steel,[side*11.4,0,0],[side*11.4,2.2,0],.07,6);}return stage._batchTemplate(g);}
function eventGate(stage,p,event){const g=new THREE.Group();for(const side of[-1,1]){block(g,p.dark,side*10.2,3.6,0,.6,7.2,.75);block(g,p.gold,side*10.2,.25,0,1,.5,1.2);block(g,p.cyan,side*9.87,3.6,.3,.055,6.5,.08);}block(g,p.dark,0,7.4,0,21.1,1.15,.7);block(g,p.amber,0,6.8,.1,21.1,.06,.08);sign(stage,g,event.name,event.accent,0,7.4,.38,17,.8);return stage._batchTemplate(g);}

export function createCircuitScenery(stage,p){const group=new THREE.Group();group.name='V6 fixed circuit districts';const anchors=[];const add=(model,distance,lateral=0,rotation=0,range=620)=>{group.add(model);anchors.push({model,distance,lateral,rotation,range});};
 const circuit=stage.circuit;
 if(circuit==='vegas'){
  add(corridor(stage,p,120,'neon','NEON MILE / METAWINNERS'),120);add(club(stage,p,'NO MERCY / MOTO DIVISION'),820,29,-.3);add(corridor(stage,p,2390,'neon','HIGH ROLLER'),2390);add(club(stage,p,'AFTER HOURS / ALL IN'),4050,-29,.25);add(club(stage,p,'THE LAST ROUND'),4730,32,-.3);
 }else if(circuit==='casino'){
  add(corridor(stage,p,115,'vault','VAULT ROW'),115);add(cargoYard(stage,p),2130,28);add(crane(stage,p),2270,53,0,800);add(cargoYard(stage,p),2540,-28,.1);add(crane(stage,p),2810,-59,Math.PI,800);add(corridor(stage,p,4270,'vault','SKYLINE RUN'),4270);
 }else if(circuit==='miami'){
  add(artDeco(stage,p,'OCEAN DRIVE'),190,31,-.2);add(pier(stage,p),1950,-52);add(yacht(stage,p,true),2090,-43,.3);add(yacht(stage,p,false),2310,-61,-.2);add(pier(stage,p),2550,-52);add(yacht(stage,p,true),2760,-46,.4);add(artDeco(stage,p,'THE WINNERS / SOUTH BEACH'),3890,31,-.2);add(artDeco(stage,p,'PINK PARADISE'),4380,34,-.25);
 }else{
  add(pumpjack(stage,p),170,37);add(saltSurface(stage,2110,4190),2110,0,0,2400);for(const [d,x]of[[2330,85],[2550,-95],[2860,110],[3220,-105],[3590,130]])add(turbine(stage,p),d,x,0,850);add(pumpjack(stage,p),4450,34);add(pumpjack(stage,p),4900,-38,.15);add(club(stage,p,'LAST CHANCE / ROAD CREW'),5480,32,-.2);
 }
 const events=CIRCUIT_EVENTS[circuit]||[];for(const event of events){add(warning(stage,p,event),event.start-100,0,0,260);add(eventGate(stage,p,event),event.start,0,0,560);}
 for(const district of CIRCUIT_DISTRICTS[circuit]||[]){if(!district.start)continue;const g=new THREE.Group(),signboard=stage._sign(district.name,stage.theme.night?'#efd6a8':'#e5dfca',7,1.6);signboard.position.set(12,3.1,0);g.add(signboard);tube(g,p.steel,[12,0,0],[12,2.4,0],.1);add(stage._batchTemplate(g),district.start,0,0,400);}
 return {group,anchors,districtId:null};
}
export function updateCircuitScenery(stage,detail,origin,state){if(!detail)return;detail.districtId=getCircuitDistrict(origin.distance,stage.circuit).id;
 for(const a of detail.anchors){const gap=a.distance-origin.distance,model=a.model;model.visible=model.userData.surface?origin.distance>1700&&origin.distance<4450:gap>-110&&gap<Math.min(a.range,stage.mobile?550:850);if(!model.visible)continue;
  if(model.userData.worldAligned){const sample=sampleTrack(a.distance,stage.circuit);model.position.set(sample.x-origin.x,sample.y-origin.y,origin.distance-a.distance);model.rotation.set(0,0,0);}
  else{stage._place(model,a.distance,a.lateral,origin);model.rotation.y+=a.rotation;}
  if(model.userData.rotor)model.userData.rotor.rotation.z=(state.time||0)*.28+a.distance*.01;
 }
}
// Sparse scenery opens the salt-flat horizon; the dock district clears room for cranes.
// These choices are deterministic per world tile, so they never pop as the camera moves.
const CLEARINGS={
 vegas:[[-1,170,430],[1,750,890],[-1,2080,2350],[-1,2760,3040],[-1,3970,4130],[1,4640,4820]],
 casino:[[-1,260,490],[1,265,365],[1,2050,2370],[-1,2470,2900],[-1,4390,4560],[1,4390,4560]],
 miami:[[1,125,265],[1,3820,3970],[1,4300,4460]],
 desert:[[1,125,215],[1,4380,4580],[-1,4830,4980],[-1,5070,5260],[1,5400,5570]]
};
export function sceneryTileVisible(circuit,distance,index,side=0){
 if(side&&(CLEARINGS[circuit]||[]).some(([s,start,end])=>s===side&&distance>=start&&distance<=end))return false;
 const district=getCircuitDistrict(distance,circuit).id;if(circuit==='desert'&&district==='salt-flats')return ((index%7)+7)%7===0;if(circuit==='casino'&&district==='blackwater')return ((index%3)+3)%3===0;if(circuit==='vegas'&&district==='after-hours')return ((index%3)+3)%3!==1;return true;
}
