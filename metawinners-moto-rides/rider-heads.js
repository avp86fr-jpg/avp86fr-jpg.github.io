import * as THREE from './vendor/three.module.js';

// Physical openings, silhouettes and material groups are chosen per original artwork.
// Crop bounds document the reference proportions; portraits are not pasted onto heads.
const OVAL=[[-.1,-1],[-.46,-.87],[-.76,-.48],[-.98,.18],[-.91,.65],[-.57,.93],[0,1],[.57,.93],[.91,.65],[.98,.18],[.76,-.48],[.46,-.87],[.1,-1]];
const TAPER=[[-.1,-1],[-.43,-.85],[-.64,-.45],[-.88,.08],[-1,.51],[-.76,.85],[-.42,1],[-.22,.84],[.22,.84],[.42,1],[.76,.85],[1,.51],[.88,.08],[.64,-.45],[.43,-.85],[.1,-1]];
const CHIEF=[[-.31,-1],[-.68,-.81],[-.82,-.34],[-1,.27],[-.85,.73],[-.59,1],[-.33,.78],[.33,.78],[.59,1],[.85,.73],[1,.27],[.82,-.34],[.68,-.81],[.31,-1]];
const SKULL=[[-.15,-1],[-.59,-.85],[-.77,-.37],[-.97,.13],[-.94,.59],[-.69,.89],[0,1],[.69,.89],[.94,.59],[.97,.13],[.77,-.37],[.59,-.85],[.15,-1]];
const VISOR=[[-.53,-1],[-.9,-.66],[-1,.05],[-.79,.77],[-.43,1],[.43,1],[.79,.77],[1,.05],[.9,-.66],[.53,-1]];
// rx, ry, depth, face width/height/offset, reference bounds, shell color, opening kind.
export const HEAD_REFERENCE_PROFILES={
 chief:{rx:.157,ry:.215,depth:.143,face:[.121,.166,.017],crop:[.375,.635,.118,.52],color:'#819474',shape:CHIEF,rim:'trim'},
 bloodbath:{rx:.164,ry:.235,depth:.145,face:[.154,.215,0],crop:[.31,.69,.08,.64],color:'#210910',shape:SKULL,skin:true},
 optimus:{rx:.136,ry:.229,depth:.133,face:[.124,.207,-.005],crop:[.356,.642,.105,.59],color:'#081b22',shape:TAPER,rim:'glow'},
 arachnia:{rx:.137,ry:.221,depth:.132,face:[.121,.195,-.006],crop:[.372,.635,.09,.56],color:'#10151a',shape:TAPER,rim:'glow'},
 chaos:{rx:.148,ry:.211,depth:.138,face:[.112,.149,.028],crop:[.39,.625,.147,.475],color:'#d7dfd4',shape:CHIEF,rim:'dark'},
 'gold-mage':{rx:.145,ry:.224,depth:.14,face:[.113,.186,-.005],crop:[.38,.62,.12,.58],color:'#ab7c2d',shape:TAPER,rim:'trim'},
 poison:{rx:.143,ry:.225,depth:.14,face:[.126,.197,-.006],crop:[.37,.62,.13,.56],color:'#061318',shape:TAPER,rim:'dark'},
 hunter:{rx:.166,ry:.22,depth:.151,face:[.154,.201,-.002],crop:[.305,.69,.075,.61],color:'#263e37',shape:SKULL,skin:true},
 medusa:{rx:.135,ry:.213,depth:.137,face:[.106,.155,-.015],crop:[.405,.605,.28,.61],color:'#102923',shape:OVAL,rim:'dark'},
 gladiator:{rx:.135,ry:.225,depth:.132,face:[.113,.194,-.012],crop:[.375,.62,.12,.57],color:'#473b25',shape:OVAL,rim:'trim'},
 elemental:{rx:.14,ry:.228,depth:.134,face:[.118,.197,-.005],crop:[.385,.615,.135,.61],color:'#d5e4dd',shape:TAPER,rim:'trim'},
 fire:{rx:.139,ry:.221,depth:.137,face:[.105,.119,.065],crop:[.40,.61,.19,.42],color:'#0b121c',shape:VISOR,rim:'trim'},
 ice:{rx:.141,ry:.225,depth:.137,face:[.103,.119,.063],crop:[.39,.61,.17,.42],color:'#132637',shape:VISOR,rim:'dark'},
 blue:{rx:.137,ry:.235,depth:.132,face:[.115,.207,-.011],crop:[.375,.64,.09,.61],color:'#156375',shape:TAPER,rim:'glow'},
 manga:{rx:.144,ry:.222,depth:.14,face:[.115,.19,-.008],crop:[.37,.62,.09,.57],color:'#30343b',shape:TAPER,rim:'trim'},
 mask:{rx:.145,ry:.213,depth:.141,face:[.112,.13,.048],crop:[.365,.64,.10,.42],color:'#655332',shape:VISOR,rim:'trim'},
 alien:{rx:.163,ry:.241,depth:.145,face:[.146,.218,-.002],crop:[.31,.69,.08,.62],color:'#536449',shape:SKULL,skin:true},
 'digital-punk':{rx:.144,ry:.218,depth:.136,face:[.116,.182,-.004],crop:[.375,.635,.12,.57],color:'#b5c4b5',shape:OVAL,rim:'dark'},
 assimilator:{rx:.142,ry:.226,depth:.141,face:[.121,.19,-.001],crop:[.35,.65,.12,.61],color:'#152c42',shape:TAPER,rim:'dark'},
 steampunk:{rx:.139,ry:.215,depth:.137,face:[.116,.17,-.026],crop:[.375,.635,.20,.62],color:'#9b8b54',shape:OVAL,rim:'trim'},
 quarterback:{rx:.153,ry:.215,depth:.145,face:[.124,.183,-.004],crop:[.37,.63,.12,.57],color:'#a0b1b4',shape:CHIEF,rim:'glow'},
 sheikh:{rx:.132,ry:.218,depth:.13,face:[.104,.177,-.015],crop:[.4,.6,.22,.61],color:'#c4ad6b',shape:OVAL,rim:'trim'},
 neural:{rx:.134,ry:.224,depth:.134,face:[.118,.198,-.009],crop:[.37,.64,.135,.59],color:'#10243f',shape:TAPER,rim:'glow'},
 cowboy:{rx:.14,ry:.215,depth:.137,face:[.117,.169,-.03],crop:[.385,.62,.29,.62],color:'#756343',shape:OVAL,rim:'trim'},
 'hockey-mask':{rx:.155,ry:.218,depth:.135,face:[.148,.207,0],crop:[.335,.665,.09,.62],color:'#a4b6a4',shape:SKULL,skin:true}
};
function curveFace(spec,low){
 const shape=spec.shape,segments=low?2:4,rings=low?5:10,outline=[];
 for(let i=0;i<shape.length;i++){const a=shape[i],b=shape[(i+1)%shape.length];for(let k=0;k<segments;k++)outline.push([a[0]+(b[0]-a[0])*k/segments,a[1]+(b[1]-a[1])*k/segments]);}
 let area=0;for(let i=0;i<outline.length;i++){const a=outline[i],b=outline[(i+1)%outline.length];area+=a[0]*b[1]-a[1]*b[0];}if(area>0)outline.reverse();
 const p=[],uv=[],ix=[],[fw,fh,cy]=spec.face,[left,right,top,bottom]=spec.crop,n=outline.length;
 function vertex(x,y){const px=x*fw,py=y*fh+cy,z=-spec.depth-.018+.043*x*x+.012*y*y;p.push(px,py,z);uv.push((left+right)/2+x*(right-left)/2,1-((top+bottom)/2-y*(bottom-top)/2));}
 vertex(0,0);for(let j=1;j<=rings;j++)for(const pt of outline)vertex(pt[0]*j/rings,pt[1]*j/rings);
 for(let i=0;i<n;i++)ix.push(0,1+i,1+(i+1)%n);
 for(let j=1;j<rings;j++)for(let i=0;i<n;i++){const a=1+(j-1)*n+i,an=1+(j-1)*n+(i+1)%n,b=1+j*n+i,bn=1+j*n+(i+1)%n;ix.push(a,b,an,an,b,bn);}
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(p,3));geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geometry.setIndex(ix);geometry.computeVertexNormals();
 return{geometry,contour:outline.map(([x,y])=>[x*fw,y*fh+cy,-spec.depth-.021+.043*x*x+.012*y*y])};
}
function solidShell(head,mat,spec,low,loft){
 const [rx,ry,depth]=[spec.rx,spec.ry,spec.depth],chin=spec.skin?.27:spec.shape===CHIEF?.37:.18;
 const rings=[[-1,chin,.39],[-.83,.5,.67],[-.5,.77,.91],[-.05,.98,1],[.34,1,.99],[.7,.85,.85],[.91,.51,.53],[1,.07,.12]].map(([y,w,d])=>[y*ry,w*rx,d*depth,0,spec.skin?.003:.024]);
 return loft(head,mat,rings,low,[0,0,0],[0,0,0],spec.skin?.52:.87);
}
function taperedTube(group,material,curve,radius,segments,sides,mesh){
 const geometry=new THREE.TubeGeometry(curve,segments,radius,sides,false),positions=geometry.attributes.position,centers=Array.from({length:segments+1},(_,i)=>curve.getPointAt(i/segments)),point=new THREE.Vector3();
 for(let i=0;i<=segments;i++){const scale=i===segments?.015:Math.max(.07,1-(i/segments)**1.65);for(let j=0;j<=sides;j++){const k=i*(sides+1)+j;point.fromBufferAttribute(positions,k).sub(centers[i]).multiplyScalar(scale).add(centers[i]);positions.setXYZ(k,point.x,point.y,point.z);}}
 geometry.computeVertexNormals();return mesh(group,geometry,material);
}
const detailMaps=new Map();
function skinDetail(kind){
 if(detailMaps.has(kind))return detailMaps.get(kind);const n=128,data=new Uint8Array(n*n*4);
 const height=(x,y)=>{const a=x/n*Math.PI*2,b=y/n*Math.PI*2;if(kind==='sinew')return Math.cos(a*7+Math.sin(b*4)*1.4)**12*.52+Math.sin(a*23+b*13)*.035+Math.cos(b*18+Math.sin(a*9))*.08;if(kind==='worn')return Math.sin(a*37+b*29)*Math.cos(a*13-b*23)*.12+Math.sin(a*5+b*7)*.18;return Math.sin(a*18+Math.sin(b*5))*.11+Math.cos(b*21+Math.sin(a*8))*.09;};
 for(let y=0;y<n;y++)for(let x=0;x<n;x++){const dx=(height(x+1,y)-height(x-1,y))*3,dy=(height(x,y+1)-height(x,y-1))*3,len=Math.sqrt(dx*dx+dy*dy+1),i=(y*n+x)*4;data[i]=Math.round(128-127*dx/len);data[i+1]=Math.round(128-127*dy/len);data[i+2]=Math.round(128+127/len);data[i+3]=255;}
 const map=new THREE.DataTexture(data,n,n);map.wrapS=map.wrapT=THREE.RepeatWrapping;map.needsUpdate=true;map.userData.shared=true;detailMaps.set(kind,map);return map;
}
function skullSurface(spec,x,y){
 const nodes=[[-1,.27,.39],[-.83,.5,.67],[-.5,.77,.91],[-.05,.98,1],[.34,1,.99],[.7,.85,.85],[.91,.51,.53],[1,.07,.12]],yn=Math.max(-1,Math.min(1,y/spec.ry));let w=.1,d=.1;
 for(let i=1;i<nodes.length;i++)if(yn<=nodes[i][0]){const a=nodes[i-1],b=nodes[i],t=(yn-a[0])/(b[0]-a[0]);w=a[1]+(b[1]-a[1])*t;d=a[2]+(b[2]-a[2])*t;break;}
 const t=Math.min(.999,Math.abs(x)/(w*spec.rx));return .003-d*spec.depth*Math.max(.001,1-t**(2/.52))**(.52/2);
}
function drawGlyph(head,material,width,height,cy,depth,rod){
 // Piecewise-linear rods preserve the actual angular MW outline. Catmull-Rom
 // smoothing turns this small logo into a butterfly and is deliberately avoided.
 const outlines=[[[-1,-1],[-1,1],[-.73,1],[0,.25],[.73,1],[1,1],[1,-1],[.73,-1],[0,-.25],[-.73,-1],[-1,-1]],[[-.73,.61],[-.73,-.61],[-.2,0],[-.73,.61]],[[.73,.61],[.2,0],[.73,-.61],[.73,.61]]];
 for(const outline of outlines)for(let i=1;i<outline.length;i++){const a=outline[i-1],b=outline[i],ax=a[0]*width,ay=a[1]*height+cy,bx=b[0]*width,by=b[1]*height+cy;rod(head,material,[ax,ay,depth(ax,ay)],[bx,by,depth(bx,by)],.0011,.0011,4);}
}
function sculptEye(head,material,points,spec,low,mesh){
 const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(p[0],p[1],0)),true,'centripetal'),outline=curve.getPoints(low?18:36).slice(0,-1).map(p=>[p.x,p.y]),cx=outline.reduce((sum,p)=>sum+p[0],0)/outline.length,cy=outline.reduce((sum,p)=>sum+p[1],0)/outline.length,face=curveFace({shape:outline.map(p=>[p[0]-cx,p[1]-cy]),face:[1,1,0],crop:[0,1,0,1],depth:spec.depth},low),positions=face.geometry.attributes.position;
 for(let i=0;i<positions.count;i++){const x=positions.getX(i)+cx,y=positions.getY(i)+cy;positions.setXYZ(i,x,y,skullSurface(spec,x,y)-.006);}
 face.geometry.computeVertexNormals();const eye=mesh(head,face.geometry,material);eye.name='Curved organic white eye lobe';return eye;
}
function closedHood(head,m,low,id,mesh,path){
 const cloth=m.cloth.clone();cloth.color.set(id==='ice'?'#263f56':id==='assimilator'?'#1b2c43':'#161d27');cloth.metalness=0;cloth.roughness=.98;cloth.clearcoat=0;cloth.side=THREE.DoubleSide;
 const nodes=[[-.3,.195],[-.18,.205],[0,.195],[.15,.18],[.22,.135],[.26,.074],[.278,.001]],ny=low?18:34,nx=low?26:52,p=[],uv=[],ix=[],edges=[[],[]];
 for(let j=0;j<=ny;j++){const y=-.3+j/ny*.578;let r=.001;for(let k=1;k<nodes.length;k++)if(y<=nodes[k][0]){const a=nodes[k-1],b=nodes[k],t=(y-a[0])/(b[0]-a[0]);r=a[1]+(b[1]-a[1])*t;break;}const gap=.62*Math.max(0,Math.min(1,(.25-y)/.1));
  for(let i=0;i<=nx;i++){const a=gap+(Math.PI*2-gap*2)*i/nx,fold=Math.sin(a*15+y*7)*.0038*Math.min(1,r/.1),x=Math.sin(a)*(r+fold),z=-Math.cos(a)*(r*.9+fold)+.035;p.push(x,y,z);uv.push(i/nx,j/ny);if(i===0)edges[0].push([x,y,z-.002]);if(i===nx)edges[1].push([x,y,z-.002]);}
 }
 for(let j=0;j<ny;j++)for(let i=0;i<nx;i++){const a=j*(nx+1)+i;ix.push(a,a+nx+1,a+1,a+1,a+nx+1,a+nx+2);}
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(p,3));geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geometry.setIndex(ix);geometry.computeVertexNormals();const hood=mesh(head,geometry,cloth);hood.name='Continuous closed-crown '+id+' hood';
 for(const edge of edges)path(head,m.trim,edge,.0028,low?24:48,4);
}
export function createReferenceHead(r,m,low,api){const {tint,mesh,oval,rod,path,torus,plate,block,loft,armor,clothDrape,emblem,clothHood,batch,TAU}=api;const head=new THREE.Group();head.name=r.name+' reference head';const id=r.id,spec=HEAD_REFERENCE_PROFILES[id],rx=spec.rx,ry=spec.ry,rz=spec.depth;
 head.userData.referenceProfile=id;head.userData.secondaryParts=[];
 const shell=m.paint.clone();shell.color.set(spec.color);shell.roughness=spec.skin?.46:.29;shell.metalness=spec.skin?.08:.4;shell.clearcoat=spec.skin?.18:.7;
 const solid=solidShell(head,shell,spec,low,loft);if(id==='hunter'){shell.metalness=.63;shell.roughness=.37;shell.clearcoat=.38;}
 const face=curveFace(spec,low);
 if(spec.skin){
  shell.name='Sculpted '+r.name+' opaque skull';shell.normalMap=skinDetail(id==='bloodbath'?'sinew':id==='hockey-mask'?'worn':'etched');shell.normalScale=new THREE.Vector2(id==='bloodbath'?.35:.18,id==='bloodbath'?.35:.18);head.userData.faceConstruction='sculpted-opaque';face.geometry.dispose();
  const ink=new THREE.MeshBasicMaterial({color:id==='bloodbath'?'#dfb66a':id==='alien'?'#bfcf8f':id==='hockey-mask'?'#913ba6':r.model.glow,toneMapped:false}),cy=id==='bloodbath'?.085:id==='alien'?.115:id==='hunter'?.085:.043,w=id==='bloodbath'?.024:.026,h=id==='bloodbath'?.039:.035;
  drawGlyph(head,ink,w,h,cy,(x,y)=>skullSurface(spec,x,y)-.004,rod);

 }else{
  const glass=m.black.clone();glass.color.set(id==='elemental'?'#0c3e5c':id==='neural'?'#0c1835':'#03090d');glass.metalness=id==='elemental'?.46:.28;glass.roughness=id==='elemental'?.27:.13;glass.clearcoat=1;glass.clearcoatRoughness=.15;
  glass.name='Sculpted '+r.name+' visor glass';const patch=mesh(head,face.geometry,glass);patch.name='Recessed '+r.name+' glass visor';head.userData.faceConstruction='sculpted-visor';
  const ink=new THREE.MeshBasicMaterial({color:r.model.glow,toneMapped:false}),w=id==='chief'?.031:.029,h=.043,cy=['fire','ice','mask'].includes(id)?spec.face[2]:id==='cowboy'?-.012:.023,z=-spec.depth-.024;
  drawGlyph(head,ink,w,h,cy,(x,y)=>z+.043*(x/spec.face[0])**2+.012*((y-spec.face[2])/spec.face[1])**2,rod);
 }
 if(spec.rim){const rim=spec.rim==='trim'?m.trim:spec.rim==='glow'?m.glow:m.dark;path(head,rim,[...face.contour,face.contour[0]],spec.rim==='glow'?.0016:.0042,low?face.contour.length:face.contour.length*2,4);}
 // Recessed side seams give the shell depth without painting the source background onto it.
 if(!spec.skin&& !['sheikh','fire','ice','assimilator'].includes(id))for(const side of[-1,1])path(head,m.dark,[[side*rx*.75,ry*.68,.032],[side*rx,ry*.23,.035],[side*rx*.88,-ry*.34,.035],[side*rx*.55,-ry*.8,.035]],.0038,low?8:18,4);
 if(['chief','quarterback','hunter','manga','gold-mage'].includes(id))for(const s of[-1,1]){
  plate(head,m.paint,[[-.035,.11],[.035,.07],[.032,-.12],[-.025,-.15],[-.048,-.04]],.024,[s*.13,-.012,-.035],[0,s*.66,0]);
  if(id==='chief'||id==='quarterback')for(let i=0;i<3;i++)block(head,m.dark,[s*.153,.005-i*.025,-.017],[.012,.008,.055]);
 }
 if(['fire','ice','assimilator'].includes(id))closedHood(head,m,low,id,mesh,path);
 if(['bloodbath','poison'].includes(id)){
  const sinew=m.paint.clone();sinew.color.set(id==='bloodbath'?'#360b14':'#081418');sinew.roughness=.42;sinew.metalness=.04;sinew.clearcoat=.3;
  for(let i=0;i<(low?7:15);i++){const a=i/(low?7:15)*TAU,si=Math.sin(a),co=Math.cos(a),points=[[si*.10,co*.15,.075],[si*.171,co*.201,.1],[si*(.20+.028*Math.sin(i)),co*.258,.046],[si*.204+.018,co*.28,-.021]],curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));taperedTube(head,sinew,curve,.008+(i%2)*.004,low?9:20,low?5:7,mesh);}
 }
 if(id==='medusa'){
  const snake=m.paint.clone();snake.color.set('#52685a');snake.roughness=.68;snake.metalness=.01;snake.clearcoat=.08;
  const serpents=new THREE.Group();serpents.name='Asymmetric sculpted serpent crown';head.add(serpents);
  const ends=[[-.205,.145,-.175],[.208,.047,-.179],[-.18,-.076,-.178],[.166,.22,-.15],[-.124,.288,-.121],[.216,-.132,-.166],[-.193,-.186,-.16],[.212,.15,-.167],[-.209,.035,-.182],[.173,-.057,-.185],[-.05,.292,-.12]];
  for(let i=0;i<(low?7:11);i++){const side=i%2?1:-1,k=Math.floor(i/2),end=ends[i];
   path(serpents,snake,[[side*.065,.17,.06],[-side*.04,.28+.025*Math.sin(i*2),-.038],[side*.13,.26-k*.009,-.13],[side*(.21+k*.002),.16-k*.026,-.162],end],.021+(i%3)*.0025,low?16:32,low?6:9);
   const headRig=new THREE.Group();headRig.position.set(...end);headRig.rotation.set(.05,-side*.22,side*.11);serpents.add(headRig);
   oval(headRig,snake,[0,.005,-.008],[.033,.025,.052],low);
   oval(headRig,m.dark,[0,-.01,-.043],[.028,.007,.016],low);
   oval(headRig,snake,[0,-.021,-.009],[.028,.011,.044],low);
   for(const eyeSide of[-1,1])oval(headRig,m.dark,[eyeSide*.025,.013,-.046],[.005,.005,.005],true);
   if(i<4)for(const toothSide of[-1,1])rod(headRig,m.trim,[toothSide*.017,-.005,-.047],[toothSide*.016,-.019,-.047],.0027,.0006,5);
  }
  // Irregular front crossings make a crown of separate animals, not a U-shaped wig.
  const crossings=[
   [[-.16,.12,-.15],[-.14,.23,-.173],[-.015,.275,-.169],[.15,.20,-.175],[.195,.08,-.174]],
   [[.148,.16,-.163],[.112,.269,-.177],[-.031,.302,-.15],[-.16,.21,-.172],[-.18,.08,-.171]],
   [[-.105,.265,-.15],[-.075,.193,-.185],[.019,.16,-.185],[.116,.249,-.168],[.17,.227,-.166]]
  ];
  for(const points of crossings)path(serpents,snake,points,.022,low?18:32,low?6:9);
  for(const rig of [...serpents.children])if(rig.isGroup){rig.updateMatrix();for(const child of [...rig.children]){child.updateMatrix();new THREE.Matrix4().multiplyMatrices(rig.matrix,child.matrix).decompose(child.position,child.quaternion,child.scale);serpents.add(child);}serpents.remove(rig);}
  batch(serpents);for(const child of serpents.children)child.position.y-=.15;serpents.position.y=.15;serpents.userData.spring={kind:'cable',strength:.3,seed:2};head.userData.secondaryParts.push(serpents);
 }
 if(id==='hunter'){
  const locks=new THREE.Group();locks.name='Banded hunter locks';head.add(locks);
  for(let i=0;i<(low?8:14);i++){const a=.65+i/(low?7:13)*(TAU-1.3),x=Math.sin(a),z=Math.cos(a);path(locks,m.dark,[[x*.12,.12,-z*.09],[x*.19,.02,-z*.17],[x*.2,-.2,-z*.18],[x*.21,-.39,-z*.18+.1]],.016,low?10:22,low?6:8);
   for(let j=0;j<(low?1:3);j++){const y=-.09-j*.087;rod(locks,m.trim,[x*.2,y-.009,-z*.18+.015*j],[x*.2,y+.009,-z*.18+.015*j],.018,.018,low?6:10);}
  }
  batch(locks);for(const child of locks.children)child.position.y-=.12;locks.position.y=.12;locks.userData.spring={kind:'cable',strength:.52,seed:4};head.userData.secondaryParts.push(locks);
  for(const side of[-1,1])plate(head,m.trim,[[-.025,-.07],[0,.18],[.025,-.07]],.012,[side*.08,.09,.08],[.3,side*.2,side*.3]);
 }
 if(id==='gladiator'){
  const crest=m.dark.clone();crest.color.set('#442619');for(let i=0;i<(low?12:25);i++){const t=i/(low?11:24),z=-.09+t*.28,y=.2+Math.sin(t*Math.PI)*.1;rod(head,crest,[0,y-.02,z],[0,y+.1,z+.014],.011,.006,5);}path(head,m.trim,[[0,.19,-.12],[0,.25,0],[0,.2,.14]],.022,16,7);
 }
 if(['gold-mage','manga'].includes(id))for(const s of[-1,1]){
  armor(head,m.trim,[[-.023,-.065],[.021,-.015],[.034,.049],[.005,.081],[-.008,.025],[-.029,-.015]],.017,[s*.128,.169,-.034],[0,s*.42,-s*.22],.003);plate(head,m.paint,[[-.028,-.03],[0,.084],[.028,-.03]],.015,[s*.09,.15,-.08],[0,s*.6,s*.35]);
  path(head,m.trim,[[s*.1,-.08,.09],[s*.14,.02,.14],[s*.12,.17,.1]],.007,14,5);
 }
 if(id==='blue'){
  for(const s of[-1,1])for(let i=0;i<3;i++){const blue=tint(m.trim,i%2?'#746da6':'#42cde6');plate(head,blue,[[-.02,-.01],[.025,.09],[.055,.12],[.045,.015]],.007,[s*.145,-.025+i*.025,.01],[0,s*.65,s*-.55]);}
  const braid=m.dark.clone();braid.color.set('#102d35');for(let i=0;i<3;i++)path(head,braid,[[.04+i*.02,.18,.09],[.13,.03,.17],[.17,-.15,.18],[.18,-.46,.19]],.015,22,6);
  for(let i=0;i<10;i++){const a=i/10*TAU;path(head,braid,[[Math.sin(a)*.08,.18,Math.cos(a)*.06],[Math.sin(a)*.06,.27,Math.cos(a)*.05]],.01,8,5);}
 }
 if(id==='digital-punk')for(const s of[-1,1])for(let i=0;i<4;i++){const green=tint(m.paint,'#16a77b');path(head,green,[[s*.13,.02+i*.03,.03],[s*.17,-.14,.08+i*.01],[s*.22,-.3,.13]],.01,14,5);}
 if(id==='alien')for(const s of[-1,1])path(head,m.dark,[[s*.12,.1,.07],[s*.19,-.07,.15],[s*.21,-.28,.13],[s*.12,-.4,.02]],.012,20,7);
 if(id==='assimilator'){
  rod(head,m.metal,[.082,.045,-.105],[.082,.045,-.19],.052,.045,16);rod(head,m.dark,[.082,.045,-.188],[.082,.045,-.194],.034,.034,16);oval(head,m.glow,[.082,.045,-.198],[.022,.022,.009],low);torus(head,m.trim,[.082,.045,-.195],.039,.004,[0,0,0]);path(head,m.dark,[[.12,.01,-.13],[.18,-.05,-.11],[.16,-.29,.08]],.016,18,6);
 }
 if(id==='steampunk'){
  for(const s of[-1,1]){rod(head,m.trim,[s*.07,.16,-.06],[s*.07,.16,-.15],.048,.048,18);rod(head,m.glass,[s*.07,.16,-.15],[s*.07,.16,-.154],.036,.036,16);torus(head,m.trim,[s*.07,.16,-.155],.041,.005,[0,0,0]);}rod(head,m.trim,[-.027,.16,-.13],[.027,.16,-.13],.007,.007,8);
 }
 if(id==='cowboy'){
  const hat=m.cloth.clone();hat.color.set('#51463a');hat.roughness=.96;hat.metalness=0;hat.clearcoat=0;hat.side=THREE.DoubleSide;
  const brimGeo=new THREE.CircleGeometry(.245,low?28:64),bp=brimGeo.attributes.position;for(let i=0;i<bp.count;i++){const x=bp.getX(i),y=bp.getY(i);bp.setXYZ(i,x*1.25,y*.83,.012+Math.abs(x/.245)**3*.043-Math.max(0,-y/.245)*.015);}brimGeo.computeVertexNormals();mesh(head,brimGeo,hat,[0,.16,.015],[1,1,1],[-Math.PI/2,0,0]);
  const crown=loft(head,hat,[[.158,.141,.105],[.193,.137,.105],[.266,.117,.091],[.297,.101,.082],[.316,.071,.065],[.321,.026,.033]],low,[0,0,.02],[0,0,0],.7),p=crown.geometry.attributes.position;
  for(let i=0;i<p.count;i++){const y=p.getY(i);if(y>.275)p.setY(i,y-.026*Math.max(0,1-Math.abs(p.getX(i))/.055)*Math.min(1,(y-.275)/.035));}p.needsUpdate=true;crown.geometry.computeVertexNormals();
  const band=m.dark.clone();band.color.set('#2d2923');const ring=torus(head,band,[0,.184,.02],.135,.011,[Math.PI/2,0,0],low?24:48);ring.scale.z=.76;
  for(const side of[-1,1])block(head,m.trim,[side*.119,.191,-.042],[.016,.022,.007]);
 }
 if(id==='sheikh'){
  const cloth=m.cloth.clone();cloth.color.set('#d4d1c3');cloth.roughness=.98;cloth.metalness=0;cloth.clearcoat=0;cloth.side=THREE.DoubleSide;
  const crown=loft(head,cloth,[[.105,.155,.13],[.155,.166,.141],[.2,.149,.134],[.248,.103,.105],[.262,.025,.047]],low,[0,0,.037],[0,0,0],.86);
  const nx=low?22:48,ny=low?13:26,p=[],uv=[],ix=[];
  for(let j=0;j<=ny;j++){const t=j/ny,y=.155-t*.615;for(let i=0;i<=nx;i++){const a=.64+(TAU-1.28)*i/nx,width=.163+t*.072,fold=Math.sin(a*12+t*.7)*(.002+t*.006),x=Math.sin(a)*(width+fold),z=-Math.cos(a)*(.136+t*.045)+.036+t*.03;p.push(x,y+Math.sin(a*5)*.007*t,z);uv.push(i/nx,t);}}
  for(let j=0;j<ny;j++)for(let i=0;i<nx;i++){const a=j*(nx+1)+i;ix.push(a,a+nx+1,a+1,a+1,a+nx+1,a+nx+2);}
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(p,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(ix);geo.computeVertexNormals();mesh(head,geo,cloth).name='Continuous woven ghutra wrap';
  const rope=m.dark.clone();rope.color.set('#11130f');rope.roughness=.98;for(const y of[.145,.164]){const ring=torus(head,rope,[0,y,.037],.165,.011,[Math.PI/2,0,0],low?28:56);ring.scale.z=.85;}
 }
 if(id==='quarterback')for(const side of[-1,1])path(head,m.glow,[[side*.105,.13,-.13],[side*.081,.075,-.165],[side*.111,-.025,-.14],[side*.06,-.14,-.15],[side*.019,-.19,-.116]],.0016,low?12:24,4);
 if(id==='neural')for(const s of[-1,1]){path(head,m.glow,[[s*.12,.12,.1],[s*.14,-.02,.14],[s*.1,-.17,.11]],.003,14,4);oval(head,m.glass,[s*.155,.035,.01],[.02,.045,.02],low);}
 if(id==='elemental')for(const s of[-1,1])for(let i=0;i<4;i++){const green=tint(m.trim,'#238c69');path(head,green,[[s*.12,.04-i*.015,.06],[s*.19,-.08,.14+i*.015],[s*.25,-.3,.12+i*.02]],.004,18,4);}


 if(id==='chief'){
  armor(head,shell,[[-.09,.027],[-.055,.058],[.052,.058],[.09,.027],[.037,-.013],[-.036,-.013]],.012,[0,.171,-.069],[.05,0,0],.004);
  for(const side of[-1,1])path(head,m.dark,[[side*.056,.216,-.048],[side*.101,.173,-.064],[side*.119,.115,-.062]],.0028,14,4);
  armor(head,shell,[[-.068,.019],[-.046,.055],[.045,.055],[.067,.017],[.052,-.042],[0,-.062],[-.052,-.042]],.025,[0,-.165,-.132],[0,0,0],.007);
  for(const side of[-1,1])path(head,m.trim,[[side*.111,.168,-.064],[side*.136,.079,-.061],[side*.13,-.067,-.064],[side*.085,-.166,-.085]],.0035,18,4);
 }
 if(id==='bloodbath'){
  const bone=m.paint.clone();bone.color.set('#b7c5a3');bone.roughness=.44;bone.metalness=.04;bone.clearcoat=.1;
  const eyes=bone.clone();eyes.color.set('#c4dce0');eyes.roughness=.42;eyes.normalMap=skinDetail('worn');eyes.normalScale=new THREE.Vector2(.08,.08);
  for(const side of[-1,1])sculptEye(head,eyes,[[-.132,.127],[-.127,.067],[-.101,.014],[-.042,-.025],[-.035,-.013],[-.053,.056],[-.085,.086],[-.112,.12]].map(([x,y])=>[x*side,y]),spec,low,mesh);
  const cavity=m.dark.clone();cavity.color.set('#020405');cavity.roughness=.33;
  const mouth=oval(head,cavity,[0,-.13,-.134],[.111,.081,.022],low);mouth.rotation.z=-.045;
  for(const side of[-1,1]){
   path(head,shell,[[side*.126,-.057,-.153],[side*.132,-.112,-.147],[side*.087,-.201,-.135],[0,-.224,-.128]],.012,low?12:24,6);

  }
  for(let i=0;i<10;i++){const x=(i-4.5)*.021,edge=Math.abs(i-4.5)/4.5,top=-.067-edge*.024,bottom=-.197+edge*.036,tip=-.124-.028*(1-edge)-.009*Math.sin(i*2.3);
   const tooth=new THREE.CatmullRomCurve3([new THREE.Vector3(x,top,-.143+edge*.018),new THREE.Vector3(x*.93,top-.03,-.166),new THREE.Vector3(x*.83,tip,-.174)]);
   taperedTube(head,bone,tooth,.0078,low?7:12,low?5:7,mesh);
   const lower=new THREE.CatmullRomCurve3([new THREE.Vector3(x,bottom,-.137+edge*.018),new THREE.Vector3(x*.94,bottom+.024,-.159),new THREE.Vector3(x*.84,-.129+edge*.01+.008*Math.cos(i*1.7),-.168)]);
   taperedTube(head,bone,lower,.0058,low?6:10,low?5:7,mesh);
  }
 }
 if(id==='chaos'){
  const pale=m.paint.clone();pale.color.set('#e2e5d7');pale.roughness=.47;const green=tint(m.trim,'#28a860');
  for(const side of[-1,1]){armor(head,green,[[-.023,.091],[.027,.063],[.034,-.074],[-.008,-.121],[-.034,-.033]],.023,[side*.13,-.009,-.044],[0,side*.45,side*.07],.006);armor(head,pale,[[-.079,.022],[.004,-.014],[.061,.028],[.042,-.043],[-.004,-.066],[-.047,-.047]],.016,[side*.061,-.146,-.117],[0,side*.13,side*.12],.004);path(head,m.red,[[side*.123,-.096,-.123],[side*.089,-.139,-.145],[side*.042,-.156,-.147],[0,-.157,-.145]],.0036,16,4);}
 }
 if(id==='hunter'){
  for(const side of[-1,1]){armor(head,m.trim,[[-.026,.083],[.026,.057],[.036,-.041],[.011,-.099],[-.021,-.062]],.027,[side*.109,-.082,-.117],[.06,side*.3,-side*.24],.005);path(head,shell,[[side*.035,.218,-.025],[side*.102,.182,-.077],[side*.142,.097,-.078],[side*.12,.034,-.116]],.014,20,6);for(let i=0;i<3;i++)path(head,m.dark,[[side*.03,.164-i*.031,-.128],[side*.078,.139-i*.026,-.145],[side*.113,.113-i*.022,-.127]],.003,12,4);}
 }
 if(id==='fire'||id==='ice'){
  const jaw=m.trim.clone();jaw.color.set(id==='ice'?'#b9d9df':'#b19351');jaw.roughness=id==='ice'?.59:.38;jaw.metalness=id==='ice'?.08:.63;
  for(const side of[-1,1]){
   armor(head,jaw,[[-.024,.063],[.028,.04],[.038,-.052],[.011,-.09],[-.031,-.047]],.024,[side*.085,-.071,-.131],[.03,side*.17,-side*.23],.005);
   path(head,jaw,[[side*.102,-.036,-.151],[side*.077,-.086,-.167],[side*.056,-.145,-.158],[0,-.19,-.133]],.011,20,6);
   path(head,m.dark,[[side*.045,-.025,-.169],[side*.016,-.052,-.179],[side*.028,-.082,-.17]],.008,12,5);
  }
  for(let i=0;i<9;i++){const x=(i-4)*.014,edge=Math.abs(i-4)/4;rod(head,jaw,[x,-.068-edge*.015,-.175],[x*.8,-.114-edge*.006,-.178],.0068,.0042,low?5:8);}
  if(id==='ice')for(let i=0;i<11;i++){const x=(i-5)*.013;rod(head,jaw,[x,-.103,-.164],[x*.65,-.232+Math.abs(i-5)*.013-.008*(i%2),-.133],.0105,.0015,low?5:7);}else armor(head,jaw,[[-.047,.013],[.046,.013],[.025,-.051],[0,-.069],[-.027,-.046]],.02,[0,-.143,-.142],[0,0,0],.004);
 }
 if(id==='mask'){
  const pipe=m.trim.clone();pipe.color.set('#9b8c62');pipe.roughness=.35;
  for(let i=0;i<11;i++){const x=(i-5)*.019,edge=Math.abs(i-5)/5;path(head,pipe,[[x,-.018-edge*.012,-.137],[x*1.08,-.067,-.181],[x*.84,-.143+edge*.025,-.173],[x*.64,-.169+edge*.02,-.14]],.0057,low?8:16,low?5:7);}
  armor(head,m.dark,[[-.045,.012],[.044,.012],[.035,-.023],[-.034,-.023]],.014,[0,-.166,-.137],[0,0,0],.004);
 }
 if(id==='alien'){
  const eye=m.black.clone();eye.color.set('#03080b');eye.roughness=.12;eye.metalness=.18;eye.clearcoat=1;
  for(const side of[-1,1]){const e=oval(head,eye,[side*.082,.035,-.158],[.041,.065,.014],low,[0,side*.15,-side*.36]);e.name='Slanted alien eye socket';path(head,m.dark,[[side*.118,.205,-.01],[side*.151,.133,-.052],[side*.153,.013,-.061],[side*.112,-.153,-.032]],.008,24,6);}
 }
 if(id==='elemental')for(const side of[-1,1]){
  path(head,m.trim,[[0,.17,-.151],[side*.042,.12,-.154],[side*.026,.047,-.157],[side*.07,-.035,-.148],[side*.04,-.11,-.147]],.0019,low?10:20,4);
  path(head,m.trim,[[side*.043,.119,-.153],[side*.093,.08,-.13],[side*.118,.011,-.112]],.0016,12,4);
 }
 if(id==='arachnia')for(const side of[-1,1]){
  for(let i=0;i<3;i++){const y=.12-i*.083;path(head,m.glow,[[side*.102,y,-.11],[side*.07,y-.027,-.151],[side*.091,y-.07,-.132]],.0012,10,4);oval(head,m.glow,[side*.103,y,-.117],[.003,.003,.003],true);}
 }
 if(id==='hockey-mask'){
  const rubber=m.dark.clone();rubber.color.set('#050b0e');rubber.roughness=.88;
  for(const side of[-1,1]){oval(head,rubber,[side*.059,.054,-.152],[.031,.018,.005],low,[0,0,-side*.15]);path(head,m.dark,[[side*.143,.065,-.031],[side*.153,.06,.082],[side*.107,.03,.163]],.012,12,6);}
  const holes=[];for(const y of [.147,.117,-.027,-.062,-.097,-.13])for(const side of[-1,1])for(const x of [0.032,.068,.102])if(!(y<-.09&&x>.09))holes.push([side*x,y]);for(const x of[-.026,0,.026])holes.push([x,-.163]);
  for(const [x,y]of holes){const z=-spec.depth-.023+.043*(x/spec.face[0])**2+.012*(y/spec.face[1])**2;oval(head,rubber,[x,y,z],[.0048,.0061,.0022],true);}
 }

 if(id==='gold-mage'||id==='manga'){
  const ornament=id==='manga'?tint(m.trim,'#afb4b8'):m.trim;
  for(const side of[-1,1]){armor(head,ornament,[[-.024,-.045],[.013,.051],[.044,.103],[.028,.009],[.038,-.049],[0,-.081]],.015,[side*.12,.123,-.042],[.05,side*.28,-side*.24],.003);path(head,ornament,[[side*.116,-.13,-.073],[side*.138,-.038,-.077],[side*.121,.052,-.091],[side*.153,.111,-.015]],.005,24,5);}
 }
 if(id==='neural')for(const side of[-1,1]){
  const violet=tint(m.glow,'#975bff');oval(head,violet,[side*.124,.045,-.055],[.009,.009,.005],low,[0,side*.7,0]);path(head,violet,[[side*.119,.115,-.074],[side*.079,.073,-.13],[side*.097,.032,-.121],[side*.057,-.017,-.149],[side*.074,-.051,-.132]],.0013,low?10:20,4);
 }
 if(id==='steampunk'){
  const strap=torus(head,m.dark,[0,.151,.02],.144,.009,[Math.PI/2,0,0],low?22:44);strap.scale.z=.79;
  for(const side of[-1,1]){rod(head,m.trim,[side*.139,.134,.006],[side*.151,.134,.006],.029,.027,low?10:18);torus(head,m.trim,[side*.153,.134,.006],.022,.0035,[0,Math.PI/2,0],low?12:24);}
 }

 if(id==='bloodbath')for(const side of[-1,1]){
  for(let i=0;i<(low?3:6);i++){const y=.055+i*.023,x=side*(.021+i*.008),points=[[x,y],[x+side*.014,y+.024],[x+side*.006,y+.055],[x+side*.023,y+.075]].map(([px,py])=>[px,py,skullSurface(spec,px,py)-.0025]);path(head,shell,points,.0028,low?7:14,4);}
 }
 if(id==='alien')for(const side of[-1,1]){
  path(head,m.dark,[[side*.034,.223,-.031],[side*.064,.19,-.065],[side*.087,.17,-.091],[side*.112,.12,-.097]],.0034,18,4);
  path(head,shell,[[side*.022,.207,-.063],[side*.044,.176,-.096],[side*.061,.15,-.12]],.0055,18,5);
 }

 if(id==='hunter'){
  const recess=m.dark.clone();recess.color.set('#030b0c');recess.roughness=.28;recess.metalness=.45;
  const jaw=[[-.05,-.025],[-.092,-.062],[-.067,-.148],[-.031,-.196],[0,-.214],[.031,-.196],[.067,-.148],[.092,-.062],[.05,-.025],[0,-.046]];
  sculptEye(head,recess,jaw,spec,low,mesh).name='Hunter dark biomechanical mandible';
  for(const side of[-1,1]){
   const eye=[[-.129,.057],[-.078,.033],[-.033,.017],[-.062,-.017],[-.117,.002]].map(([x,y])=>[x*side,y]);sculptEye(head,recess,eye,spec,low,mesh).name='Hunter recessed angular eye';
   for(let i=0;i<3;i++){const y=.115+i*.032;path(head,shell,[[side*.009,y+.046,-.101],[side*.053,y+.022,-.14],[side*.112,y-.015,-.117],[side*.148,y-.04,-.066]],.009-i*.0013,low?10:20,6);}
   path(head,m.trim,[[side*.117,-.04,-.106],[side*.103,-.113,-.13],[side*.064,-.18,-.097]],.006,18,5);
   armor(head,shell,[[-.022,.054],[.025,.034],[.031,-.047],[.007,-.079],[-.022,-.039]],.028,[side*.116,-.087,-.09],[.06,side*.3,-side*.21],.004);
  }
 }
 batch(head);return head;
}
