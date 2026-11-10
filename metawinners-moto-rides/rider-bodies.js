import * as THREE from './vendor/three.module.js';

// Garments/anatomy are rebuilt from the actual portraits. The lower half is a
// riding adaptation because the source NFTs are bust portraits, not full rigs.
export const BODY_REFERENCE_STYLES={
 chief:{kind:'armor',main:'#778268',accent:'#b9c0ad',trim:'#bdac74'},
 bloodbath:{kind:'organic',main:'#410b14',accent:'#85202a',trim:'#140b10'},
 optimus:{kind:'porcelain',main:'#e8f3ef',accent:'#42e2e6',trim:'#94c3bf'},
 arachnia:{kind:'circuit',main:'#101318',accent:'#b52237',trim:'#6c2a31'},
 chaos:{kind:'tailored',main:'#66336f',accent:'#34a84d',trim:'#acaeb3'},
 'gold-mage':{kind:'ornate',main:'#9d742c',accent:'#582b20',trim:'#dac180'},
 poison:{kind:'organic',main:'#050d0c',accent:'#c4c6b7',trim:'#a89458'},
 hunter:{kind:'tactical',main:'#303d31',accent:'#88947b',trim:'#8f794e'},
 medusa:{kind:'ornate',main:'#173c32',accent:'#275548',trim:'#a89953'},
 gladiator:{kind:'armor',main:'#24272a',accent:'#8c7653',trim:'#ab9162'},
 elemental:{kind:'crystal',main:'#c4d3c1',accent:'#204f7f',trim:'#b59e4c'},
 fire:{kind:'hooded',main:'#342c24',accent:'#815a31',trim:'#bc934f'},
 ice:{kind:'hooded',main:'#233847',accent:'#607786',trim:'#c0d5dc'},
 blue:{kind:'tribal',main:'#3e342d',accent:'#237785',trim:'#b5a367'},
 manga:{kind:'ornate',main:'#25262a',accent:'#4a4b51',trim:'#b9b8b3'},
 mask:{kind:'aviator',main:'#49392b',accent:'#b9b6a7',trim:'#a58b57'},
 alien:{kind:'organic',main:'#2c332b',accent:'#555b49',trim:'#999b7f'},
 'digital-punk':{kind:'leather',main:'#181d1e',accent:'#a72c73',trim:'#a4abad'},
 assimilator:{kind:'tactical',main:'#202d3e',accent:'#34465e',trim:'#61708a'},
 steampunk:{kind:'tailored',main:'#292a27',accent:'#423a2a',trim:'#bcaa68'},
 quarterback:{kind:'sport',main:'#465159',accent:'#a92b33',trim:'#b9c3c0'},
 sheikh:{kind:'robe',main:'#dad7c5',accent:'#b4ac8c',trim:'#b49b56'},
 neural:{kind:'circuit',main:'#101e3c',accent:'#3b87bf',trim:'#25d8e4'},
 cowboy:{kind:'western',main:'#655b48',accent:'#b4b09b',trim:'#987b4c'},
 'hockey-mask':{kind:'workwear',main:'#222f32',accent:'#38464a',trim:'#68786d'}
};

export function createReferenceBody(r,m,low,api){
 const {tint,mesh,oval,rod,path,torus,plate,block,loft,limb,armor,portraitArmor,cloakPanel,riderBadge,batch,v,TAU,detailTexture,makeHead,emblem}=api;
 const rider=new THREE.Group(),torso=new THREE.Group(),secondaryParts=[];
 torso.position.set(0,1.055,.16);torso.rotation.x=-.49;rider.add(torso);
 const id=r.id,family=r.model.family,style=BODY_REFERENCE_STYLES[id],kind=style.kind;
 const organic=kind==='organic',cloth=['tailored','hooded','tribal','aviator','leather','robe','western','workwear'].includes(kind),armored=['armor','ornate','crystal','sport'].includes(kind),technical=['circuit','porcelain','tactical'].includes(kind),workwear=kind==='workwear';
 const bulk=['chief','quarterback'].includes(id)?1.12:family==='organic'?1.07:family==='streamlined'?.94:1;
 const main=tint(cloth?m.cloth:m.paint,style.main),accent=tint(cloth?m.cloth:m.paint,style.accent),edge=tint(m.trim,style.trim),dark=m.dark;
 main.roughness=organic?.35:cloth?.88:kind==='porcelain'?.23:.43;main.metalness=organic?.04:cloth?.025:kind==='porcelain'?.18:.48;main.clearcoat=organic?.3:cloth?0:.35;
 if(organic){main.normalMap=detailTexture('armor');main.normalScale.set(.07,.07);}
 const foundation=id==='bloodbath'?tint(m.paint,'#140c12'):id==='optimus'?tint(m.paint,'#070e13'):id==='blue'?tint(m.paint,'#225e74'):main;foundation.roughness=id==='blue'?.48:main.roughness;foundation.metalness=id==='blue'?.06:main.metalness;foundation.clearcoat=id==='blue'?.1:main.clearcoat;
 const jacket=main,sleeve=organic||id==='optimus'||id==='blue'?foundation:id==='gold-mage'?accent:main,glove=organic?foundation:dark,trouser=organic?foundation:kind==='robe'?main:dark;
 const tags=[];const tag=name=>{tags.push(name);};
 rider.userData.bodyReference={id,kind,features:tags};
 loft(rider,trouser,[[-.065,.13,.14],[0,.18,.18],[.075,.16,.14]],low,[0,.86,.245],[0,0,0],cloth?.94:.69);
 // A continuous base supports each costume; the visible topology is selected by material family.
 loft(torso,foundation,[[-.235,.135,.104],[-.19,.154,.112],[-.1,.176,.118],[.02,.213*bulk,.127],[.13,.236*bulk,.13],[.215,.214*bulk,.114],[.266,.135,.085],[.285,.083,.07]],low,[0,0,0],[0,0,0],cloth?1:organic?1:.78);
 for(const side of[-1,1]){
  const sx=side*.237*bulk;
  loft(torso,foundation,[[-.065,.065,.09],[0,.079,.105],[.066,.062,.08]],low,[sx,.17,.006],[0,0,side*-.35],cloth?1:.76);
  if(armored){
   const pauldron=kind==='sport'?[[-.12,.045],[-.08,.105],[.07,.105],[.135,.025],[.11,-.07],[-.10,-.065]]:[[-.108,.045],[-.071,.087],[.035,.085],[.099,.029],[.073,-.073],[-.027,-.086],[-.1,-.035]];
   armor(torso,main,pauldron,.035,[sx,.183,-.078],[.12,side*.66,side*-.23],.011);
   path(torso,edge,[[sx-side*.09,.24,-.07],[sx,.267,-.085],[sx+side*.07,.212,-.055],[sx+side*.07,.135,-.05]],.004,low?8:18,5);
  }
  if(cloth){
   path(torso,edge,[[side*.202,.13,.12],[side*.19,-.015,.137],[side*.145,-.195,.114]],.0025,low?8:15,4);
   for(let j=0;j<(low?2:4);j++)path(torso,main,[[side*.20,.19-j*.035,.075],[side*.235,.165-j*.035,.07],[side*.27,.13-j*.03,.015]],.003,8,4);
  }
 }
 if(armored){
  const smooth=kind==='porcelain';
  for(const side of[-1,1]){
   const points=smooth?[[-.076,.09],[.047,.09],[.075,.04],[.059,-.083],[-.06,-.073],[-.084,.015]]:[[-.098,.052],[-.072,.105],[.037,.105],[.084,.06],[.064,-.04],[-.02,-.066],[-.092,-.038]];
   armor(torso,main,points,smooth?.018:.029,[side*.105,.125,-.145],[0,side*.12,side*-.06],smooth?.018:.006);
   if(!smooth)for(let j=0;j<3;j++)armor(torso,j%2?accent:main,[[-.068,.024],[.073,.028],[.06,-.022],[-.059,-.025]],.015,[side*.076,.025-j*.063,-.137],[0,side*.08,side*.055],.005);
  }
 }
 if(armored||kind==='tactical'){
  for(const side of[-1,1])armor(torso,main,[[-.066,.066],[.069,.065],[.079,.018],[.045,-.111],[-.027,-.09],[-.073,-.026]],.02,[side*.13,.117,.11],[0,side*-.18,side*.08],.008);
  for(let j=0;j<5;j++)armor(torso,j%2?dark:main,[[-.055,.028],[.055,.028],[.065,.002],[.041,-.025],[-.041,-.025],[-.065,.002]],.012,[0,.18-j*.073,.124],[0,0,0],.005);
 }else if(organic){
  // Muscle/fascia, not pectoral plates: smooth lobes are joined by curved tendons.
  for(const side of[-1,1]){
   oval(torso,id==='bloodbath'?foundation:main,[side*.1,.13,-.105],[.112,.095,.08],low,[0,side*.13,side*-.12]);
   for(let j=0;j<5;j++){const y=.13-j*.065,wave=id==='bloodbath'?Math.sin(j*1.7+side)*.012:0;path(torso,id==='poison'?accent:main,[[side*.018,y+wave,-.179],[side*.095,y+.035-wave,-.204],[side*.18,y+.06+wave,-.167],[side*.226,y+.072,-.061]],id==='poison'?.013:id==='bloodbath'?.007+j%2*.003:.009,low?11:21,low?5:7);path(torso,main,[[side*.025,y,.139],[side*.13,y+.025-wave,.157],[side*.21,y+.06+wave,.08]],.008,low?9:17,5);}
   if(id==='bloodbath')for(let j=0;j<(low?4:7);j++){const t=j/(low?3:6);path(torso,j%2?main:accent,[[side*.018,.22-t*.085,-.178],[side*.09,.21-t*.075,-.203],[side*.17,.225-t*.077,-.172],[side*.245,.21-t*.025,-.065]],.004+(j%3)*.0013,low?11:22,5);}
  }
  for(let j=0;j<6;j++)oval(torso,main,[0,.18-j*.064,.132],[.035,.027,.025],low);
  tag(id==='poison'?'ivory rib and spider anatomy':id==='bloodbath'?'wet red sinew and exposed ribs':'olive biomechanical anatomy');
 }
 // Narrow neck, then the existing animated head mount. Cloth collars are added below.
 limb(torso,id==='blue'?foundation:organic?main:dark,[0,.23,0],[0,.32,-.01],[[0,.069],[.3,.064],[.8,.058],[1,.063]],low);
 if(!organic)for(let j=0;j<3;j++)torus(torso,dark,[0,.268+j*.018,-.005],.063,.004,[Math.PI/2,0,0],low?16:28);
 if(!organic&&kind!=='robe'){
  for(let j=0;j<2;j++)torus(torso,dark,[0,-.185+j*.018,0],.151,.008,[Math.PI/2,0,0],low?18:32).scale.z=.78;
  armor(torso,edge,[[-.033,.018],[.033,.018],[.033,-.018],[-.033,-.018]],.008,[0,-.167,-.134],[0,0,0],.003);
 }
 const head=makeHead(r,m,low);head.position.set(0,.46,-.01);head.rotation.x=.19;torso.add(head);
 const arms=[];torso.updateMatrix();
 for(const side of[-1,1]){
  const shoulder=new THREE.Vector3(side*.237*bulk,.168,.008).applyMatrix4(torso.matrix),elbow=new THREE.Vector3(side*.317,1.015,-.18),hand=new THREE.Vector3(side*.285,.965,-.49);
  const arm=new THREE.Group();arm.position.copy(shoulder);arm.userData.side=side;arm.userData.shoulder=new THREE.Vector3(side*.237*bulk,.168,.008);rider.add(arm);
  const E=elbow.clone().sub(shoulder),H=hand.clone().sub(shoulder),fore=E.clone().lerp(H,.56),upperRig=new THREE.Group(),foreRig=new THREE.Group();arm.add(upperRig,foreRig);
  limb(upperRig,sleeve,[0,0,0],E.toArray(),[[0,.06],[.18,.072],[.48,.068],[.78,.056],[1,.052]],low,.81);
  limb(foreRig,sleeve,E.toArray(),H.toArray(),[[0,.049],[.18,.057],[.5,.055],[.78,.043],[1,.035]],low,.84);
  if(armored||technical){
   armor(foreRig,main,[[-.053,.036],[.052,.04],[.062,-.013],[.026,-.049],[-.036,-.045]],.021,[E.x,E.y+.017,E.z-.04],[.4,0,side*.1],.008);
   armor(foreRig,main,[[-.044,.085],[.04,.085],[.044,-.045],[.025,-.091],[-.028,-.091],[-.05,-.027]],.018,[fore.x,fore.y+.027,fore.z-.035],[1.1,side*.03,0],.007);
  }else if(cloth){
   for(let j=0;j<3;j++)path(foreRig,id==='blue'&&low?dark:main,[[fore.x-.047,fore.y+.033,fore.z-.07+j*.035],[fore.x,fore.y+.052,fore.z-.075+j*.035],[fore.x+.047,fore.y+.033,fore.z-.07+j*.035]],.005,8,5);
  }else if(organic){
   for(let j=0;j<(id==='bloodbath'?5:3);j++)path(foreRig,id==='bloodbath'?(j%2?main:accent):main,[[E.x+(j-1)*.018,E.y+.024,E.z-.032],[fore.x+(j-1)*.014,fore.y+.052,fore.z-.04],[H.x+(j-1)*.011,H.y+.019,H.z]],.006,low?7:14,5);
  }
  // Boxed palm, individual curled fingers, thumb and raised knuckle strip.
  loft(foreRig,glove,[[-.035,.034,.041],[0,.043,.047],[.025,.037,.04]],low,[H.x,H.y,H.z],[.1,0,0],.62);
  if(!cloth&&!organic)armor(foreRig,main,[[-.035,.017],[.031,.017],[.036,-.011],[-.029,-.015]],.008,[H.x,H.y+.028,H.z-.026],[1.25,0,0],.004);
  for(let j=0;j<(low?3:4);j++){const x=H.x+(j-1.5)*.017;path(foreRig,glove,[[x,H.y+.019,H.z-.026],[x,H.y+.008,H.z-.057],[x,H.y-.015,H.z-.055],[x,H.y-.022,H.z-.027]],.008,low?6:10,5);}
  path(foreRig,glove,[[H.x+side*.035,H.y+.008,H.z+.004],[H.x+side*.048,H.y-.005,H.z-.027],[H.x+side*.028,H.y-.021,H.z-.038]],.011,10,6);
  if(!organic)path(foreRig,edge,[[E.x+side*.043,E.y+.025,E.z],[fore.x+side*.047,fore.y+.03,fore.z],[H.x+side*.032,H.y+.018,H.z]],.0028,12,4);
  if(id==='bloodbath')for(let j=0;j<4;j++){const offset=(j-1.5)*.017;path(upperRig,j%2?main:accent,[[offset,0,-.04],[E.x*.45+offset,E.y*.45+.025,E.z*.45-.05],[E.x*.85+offset*.6,E.y*.85,E.z*.85-.035]],.006+(j%2)*.002,low?9:18,5);}
  if(!low)for(let j=0;j<5;j++){const t=.3+j*.1,pt=E.clone().multiplyScalar(t);path(upperRig,sleeve,[[pt.x-.041,pt.y,pt.z],[pt.x,pt.y+.015,pt.z-.014],[pt.x+.041,pt.y,pt.z]],.003,8,4);}
  for(const child of foreRig.children)child.position.sub(E);foreRig.position.copy(E);const direction=H.clone().normalize(),pole=E.clone().addScaledVector(direction,-E.dot(direction)).normalize();Object.assign(arm.userData,{hand:H.clone().sub(E),restE:E,restH:H,upperRig,foreRig,pole,lengthUpper:E.length(),lengthFore:H.clone().sub(E).length()});batch(upperRig);batch(foreRig);arms.push(arm);
 }
 for(const side of[-1,1]){
  const hip=[side*.126,.87,.25],knee=[side*.243,.595,-.065],ankle=[side*.208,.355,.255];
  limb(rider,trouser,hip,knee,[[0,.084],[.15,.091],[.45,.088],[.72,.074],[1,.057]],low,.8);
  limb(rider,trouser,knee,ankle,[[0,.059],[.2,.063],[.45,.055],[.8,.043],[1,.041]],low,.86);
  if(armored||technical){
   const thigh=v(hip).lerp(v(knee),.52);armor(rider,main,[[-.053,.102],[.054,.102],[.063,.019],[.039,-.104],[-.04,-.104],[-.061,.008]],.017,[thigh.x,thigh.y+.018,thigh.z-.052],[.79,side*.15,side*-.13],.009);
   armor(rider,main,[[-.064,.034],[.049,.047],[.073,.002],[.029,-.06],[-.044,-.054],[-.071,-.009]],.026,[side*.247,.606,-.105],[.3,side*.1,0],.01);
   const shin=v(knee).lerp(v(ankle),.55);armor(rider,main,[[-.043,.086],[.041,.086],[.04,-.072],[.021,-.104],[-.028,-.093],[-.046,-.026]],.017,[shin.x,shin.y+.01,shin.z-.041],[.86,side*.1,0],.007);
  }else if(organic){
   for(let j=0;j<3;j++)path(rider,id==='bloodbath'?accent:main,[[side*.16,.84-j*.015,.15],[side*(.24+j*.012),.64,-.07],[side*.235,.46,.1]],.007,low?9:18,5);
  }else{
   for(let j=0;j<4;j++)path(rider,trouser,[[side*.21-.047,.63-j*.026,-.059+j*.025],[side*.24,.65-j*.026,-.089+j*.025],[side*.21+.047,.63-j*.026,-.059+j*.025]],.004,8,4);
  }
  loft(rider,glove,[[.285,.057,.099],[.309,.058,.115],[.34,.053,.111],[.38,.044,.065],[.44,.041,.045]],low,[side*.213,0,.198],[0,0,0],.57);
  armor(rider,glove,[[-.057,.095],[.057,.095],[.061,-.055],[.044,-.129],[-.042,-.129],[-.058,-.071]],.021,[side*.213,.284,.2],[Math.PI/2,0,0],.007);
  if(!cloth&&!organic)armor(rider,main,[[-.043,.025],[.043,.025],[.046,-.017],[-.037,-.025]],.008,[side*.213,.347,.103],[1.12,0,0],.005);
  if(!organic)for(let j=0;j<2;j++)path(rider,edge,[[side*.213-.047,.377+j*.026,.23],[side*.213,.388+j*.026,.258],[side*.213+.047,.377+j*.026,.23]],.004,10,5);
  if(armored||technical)path(rider,edge,[[side*.3,.604,-.077],[side*.276,.485,.067],[side*.253,.38,.199]],.0035,16,5);
 }
 // Small construction helpers keep repeated details on shared material batches.
 const band=(a,b,width,mat,z=-.166)=>{const dx=b[0]-a[0],dy=b[1]-a[1],len=Math.hypot(dx,dy),nx=-dy/len*width/2,ny=dx/len*width/2;return armor(torso,mat,[[a[0]+nx,a[1]+ny],[b[0]+nx,b[1]+ny],[b[0]-nx,b[1]-ny],[a[0]-nx,a[1]-ny]],.006,[0,0,z],[0,0,0],.002);};
 const lapels=(mat,width=1)=>{for(const side of[-1,1])armor(torso,mat,[[-.036,.24],[.043,.23],[.081,.104],[.012,.032],[-.032,.113]],.013,[side*.12,.015,-.155],[0,side*.09,side*-.17],.006).scale.x=width;};
 const node=(x,y,z,radius,mat=edge)=>{rod(torso,mat,[x,y,z+.012],[x,y,z],radius,radius,low?10:20);};
 const medal=(radius=.053,mat=edge,y=.005)=>{const z=-.191;node(0,y,z,radius,mat);torus(torso,mat,[0,y,z-.007],radius*.88,.004,[0,0,0],low?18:32);node(0,y,z-.012,radius*.67,kind==='organic'&&id==='bloodbath'?accent:dark);emblem(torso,id==='manga'?edge:m.glow,0,y,z-.019,radius*.37);};
 const seam=(points,mat=edge,width=.003)=>path(torso,mat,points,width,low?10:20,4);
 const collarFur=(color)=>{const fur=tint(m.cloth,color);fur.roughness=1;fur.metalness=0;fur.clearcoat=0;for(const side of[-1,1]){
  loft(torso,fur,[[-.1,.038,.023],[0,.056,.033],[.12,.068,.036],[.24,.054,.028]],low,[side*.136,.04,-.168],[0,side*.08,side*-.22],.95);
  for(let j=0;j<(low?10:22);j++){const t=j/(low?9:21),y=.27-t*.34,x=side*(.10+t*.07);mesh(torso,new THREE.IcosahedronGeometry(.014,0),fur,[x+Math.sin(j*5)*.012,y,-.205+Math.cos(j*7)*.006],[1,.8,1],[j,j*.7,0]);}
 }tag('broad pale shearling collar');};
 const shoulderPetal=(side,mat,raise=.15)=>armor(torso,mat,[[-.035,-.08],[-.04,.02],[-.015,raise],[.015,raise+.03],[.038,.015],[.025,-.07]],.012,[side*.265,.21,.04],[.15,side*.3,-side*.5],.004);

 if(id==='chief'){
  for(const side of[-1,1]){
   const pod=new THREE.Group();pod.name='CHIEF raised rectangular shoulder vent';pod.position.set(side*.2,.29,.008);pod.rotation.set(.13,side*.08,-side*.49);torso.add(pod);
   armor(pod,main,[[-.043,.085],[.039,.085],[.048,.052],[.039,-.09],[-.039,-.09],[-.049,-.055]],.047,[0,0,0],[0,0,0],.006);armor(pod,dark,[[-.031,.069],[.03,.069],[.03,-.069],[-.031,-.069]],.004,[0,0,-.007],[0,0,0],.002);
   for(let j=0;j<4;j++)armor(pod,edge,[[-.027,.004],[.027,.004],[.027,-.004],[-.027,-.004]],.004,[0,.045-j*.029,-.013],[0,0,0],.001);batch(pod);
   band([side*.03,.19],[side*.18,.135],.037,accent,-.18);
   seam([[side*.22,.21,.14],[side*.15,.14,.16],[side*.10,-.14,.145]],edge,.004);
  }
  armor(torso,main,[[-.19,.165],[-.06,.045],[0,.069],[.06,.045],[.19,.165],[.135,.185],[0,.108],[-.135,.185]],.014,[0,0,-.185],[0,0,0],.004);
  seam([[-.19,.165,-.19],[-.06,.045,-.19],[0,.069,-.19],[.06,.045,-.19],[.19,.165,-.19]],edge,.0028);
  medal(.065);riderBadge(torso,r,m,low);tag('olive chevron armor and raised shoulder vents');
 }
 if(id==='bloodbath'||id==='poison'){
  for(const side of[-1,1]){
   for(let j=0;j<(low?3:5);j++){
    const points=[[side*.18,.19,.05],[side*(.29+j*.012),.26-j*.045,.10],[side*(.34+j*.008),.35-j*.035,.04],[side*(.29+j*.013),.38-j*.035,-.01]],curve=new THREE.CatmullRomCurve3(points.map(v)),segments=low?9:19,sides=5,geo=new THREE.TubeGeometry(curve,segments,.008+(j%2)*.003,sides,false),positions=geo.attributes.position,point=new THREE.Vector3();
    for(let ring=0;ring<=segments;ring++){const t=ring/segments,center=curve.getPointAt(t),scale=(1-t)**.65;for(let k=0;k<=sides;k++){const index=ring*(sides+1)+k;point.fromBufferAttribute(positions,index).sub(center).multiplyScalar(scale).add(center);positions.setXYZ(index,point.x,point.y,point.z);}}
    geo.computeVertexNormals();mesh(torso,geo,id==='bloodbath'?accent:main);
   }
   seam([[side*.015,-.13,-.148],[side*.07,-.04,-.188],[side*.17,.12,-.17],[side*.22,.21,-.08]],id==='bloodbath'?accent:main,.008);
  }
  medal(id==='bloodbath'?.043:.047,id==='bloodbath'?accent:edge,-.022);
 }
 if(id==='optimus'){
  // White fitted vest with a long black neck opening; the underlying arms stay black.
  armor(torso,main,[[-.16,-.20],[-.175,.04],[-.18,.17],[-.12,.25],[-.07,.26],[-.065,.12],[-.03,.075],[.03,.075],[.065,.12],[.07,.26],[.12,.25],[.18,.17],[.175,.04],[.16,-.20]],.009,[0,0,-.147],[0,0,0],.01);
  for(const side of[-1,1]){
   const cyan=m.glow;
   seam([[side*.073,.273,-.086],[side*.094,.195,-.162],[side*.07,.11,-.162],[side*.09,.01,-.162],[side*.071,-.14,-.160]],cyan,.0055);
   seam([[side*.09,.255,.085],[side*.16,.20,.132],[side*.155,.04,.149],[side*.105,-.17,.127]],cyan,.004);
   seam([[side*.14,.245,.03],[side*.21,.255,0],[side*.285,.20,-.025],[side*.30,.115,-.01]],main,.014);
   seam([[side*.16,.247,.014],[side*.22,.25,-.016],[side*.286,.19,-.041],[side*.30,.13,-.025]],cyan,.0035);
  }
  medal(.052,m.glow,-.025);tag('smooth porcelain surfaces and continuous cyan channels');
 }
 if(id==='arachnia'||id==='neural'){
  const light=id==='neural'?tint(m.glow,'#33c7e1'):m.glow;
  if(id==='neural'){light.emissive.set('#2dd9f5');light.emissiveIntensity=.75;}
  for(const side of[-1,1]){
   const lines=[[[side*.025,-.12,-.15],[side*.05,-.035,-.174],[side*.16,.035,-.171],[side*.215,.14,-.111]],[[side*.028,-.075,-.16],[side*.07,.085,-.186],[side*.13,.16,-.166],[side*.12,.245,-.105]],[[side*.03,.02,-.18],[side*.1,.11,-.185],[side*.20,.18,-.139],[side*.29,.21,-.06]],[[side*.025,-.13,.133],[side*.075,.005,.153],[side*.17,.10,.15],[side*.26,.22,.055]],[[side*.05,.01,.15],[side*.06,.18,.14],[side*.15,.24,.11]]];
   for(const points of lines)seam(points,light,id==='neural'?.0037:.0026);
   if(id==='arachnia')armor(torso,main,[[-.065,-.035],[-.025,.08],[.075,.065],[.096,.025],[.025,-.04]],.013,[side*.244,.19,-.06],[.15,side*.7,side*-.15],.003);
   else{
    const pink=m.glow;band([side*.08,.13],[side*.18,.19],.014,pink,-.18);band([side*.075,-.06],[side*.16,.012],.016,pink,-.18);
    rod(torso,dark,[side*.21,.23,.075],[side*.28,.33,.09],.007,.007,6);oval(torso,light,[side*.28,.33,.09],[.024,.024,.024],low);node(side*.19,.14,-.14,.013,pink);
    seam([[side*.26,.32,.10],[side*.16,.28,.13],[side*.11,.18,.15]],pink,.0014);
   }
  }
  medal(.043,id==='neural'?light:edge,-.043);tag(id==='neural'?'cyan branching circuits, magenta insets and attached shoulder emitters':'black angular armor with fine red circuit branches');
 }
 if(id==='chaos'||id==='digital-punk'||id==='steampunk'){
  armor(torso,accent,[[-.085,.228],[.086,.228],[.093,-.16],[-.091,-.16]],.005,[0,0,-.143],[0,0,0],.004);
  lapels(main,id==='chaos'?1.2:1);
  for(const side of[-1,1]){
   band([side*.20,.235],[side*.20,.04],.029,dark,-.13);
   seam([[side*.10,.25,-.17],[side*.17,.15,-.18],[side*.113,.03,-.176]],id==='chaos'?accent:edge,.0035);
   for(let j=0;j<4;j++)node(side*.205,.21-j*.045,-.128,.006,edge);
  }
  if(id==='chaos'){
   for(const side of[-1,1])armor(torso,dark,[[-.027,0],[.027,.025],[.025,-.026]],.009,[side*.028,.214,-.177],[0,0,side<0?Math.PI:0],.003);
   const flower=new THREE.Group();flower.name='CHAOS lapel flower';flower.position.set(.14,.114,-.19);torso.add(flower);for(let j=0;j<6;j++){const a=j/6*TAU;oval(flower,m.ivory,[Math.sin(a)*.014,Math.cos(a)*.014,0],[.009,.011,.004],low,[0,0,-a]);}oval(flower,m.glow,[0,0,-.006],[.006,.006,.004],low);batch(flower);tag('violet blazer, green shirt, bow tie and lapel flower');
  }else if(id==='digital-punk'){
   const green=tint(m.glow,'#24a65c');green.emissive.set('#1b733e');green.emissiveIntensity=.25;
   for(const side of[-1,1]){for(let j=0;j<5;j++)node(side*.255,.22-j*.023,-.08,.0065,edge);node(side*.12,.16,-.191,.014,junkPin(side));path(torso,green,[[side*.07,.27,-.074],[side*.105,.20,-.17],[side*.055,.09,-.18],[0,.072,-.18]],.009,low?10:20,6);}
   band([-.065,.07],[.065,.07],.035,green,-.151);tag('black leather lapels, studs, pins and bright graphic shirt');
   function junkPin(side){return side<0?edge:green;}
  }else{
   const bow=tint(m.cloth,'#46272a');for(const side of[-1,1])armor(torso,bow,[[-.025,0],[.029,.022],[.027,-.02]],.01,[side*.024,.215,-.169],[0,0,side<0?Math.PI:0],.003);
   for(const side of[-1,1]){
    band([side*.21,.238],[side*.13,-.16],.028,accent,-.159);
    const y=.04;torus(torso,edge,[side*.15,y,-.172],.034,.005,[0,0,0],low?16:26);for(let j=0;j<8;j++){const a=j/8*TAU;rod(torso,edge,[side*.15+Math.sin(a)*.022,y+Math.cos(a)*.022,-.173],[side*.15+Math.sin(a)*.038,y+Math.cos(a)*.038,-.173],.003,.003,4);}
    oval(torso,edge,[side*.255,.235,.025],[.05,.028,.055],low);
   }
   const cylinder=new THREE.Group();cylinder.name='STEAMPUNK shoulder pressure vessel';cylinder.position.set(-.27,.29,.09);cylinder.rotation.z=.35;torso.add(cylinder);rod(cylinder,edge,[0,-.1,0],[0,.07,0],.028,.028,low?10:18);for(const y of[-.07,.04])torus(cylinder,dark,[0,y,0],.029,.004,[Math.PI/2,0,0],12);node(-.27,.29,-.005,.014,m.glow);batch(cylinder);tag('tailored coat, brass piping, red bow tie and clockwork');
  }
  medal(.042,edge,-.046);
 }
 if(id==='gold-mage'||id==='manga'||id==='medusa'){
  if(id==='gold-mage'){accent.metalness=.03;accent.roughness=.8;accent.clearcoat=0;for(const side of[-1,1])armor(torso,accent,[[-.035,.23],[.037,.23],[.07,-.19],[-.07,-.19]],.006,[side*.075,0,-.164],[0,0,side*.17],.003);}
  for(const side of[-1,1]){
   const scrolls=[[[side*.02,.21,-.177],[side*.11,.24,-.168],[side*.19,.16,-.158],[side*.15,.085,-.19],[side*.095,.11,-.191],[side*.12,.15,-.185]],[[side*.04,-.08,-.17],[side*.105,-.025,-.187],[side*.17,-.07,-.17],[side*.12,-.14,-.153]],[[side*.025,.19,.15],[side*.15,.22,.147],[side*.21,.10,.145],[side*.14,.025,.165],[side*.09,.07,.167]],[[side*.08,.03,.165],[side*.16,-.06,.155],[side*.13,-.15,.145],[side*.06,-.10,.15]]];
   for(const points of scrolls)seam(points,edge,id==='medusa'?.006:.004);
   if(id!=='medusa'){
    const pauldron=new THREE.Group();pauldron.name=id==='manga'?'MANGA raised dragon shoulder':'GOLD MAGE curling shoulder ornament';pauldron.position.set(side*.255,.225,.03);pauldron.rotation.z=-side*.35;torso.add(pauldron);
    path(pauldron,edge,[[0,-.035,.025],[side*.06,.02,.035],[side*.09,.10,.02],[side*.045,.15,-.02],[0,.10,-.045]],.012,low?10:22,6);oval(pauldron,edge,[side*.04,.13,-.025],[.026,.036,.04],low,[.2,side*.4,side*.3]);for(let j=0;j<3;j++)rod(pauldron,edge,[side*(.035+j*.012),.12-j*.027,.035],[side*(.065+j*.015),.145-j*.027,.05],.006,.001,5);batch(pauldron);
   }
   if(id==='manga')for(let j=0;j<4;j++)seam([[side*.02,.19-j*.06,-.17],[side*.045,.16-j*.06,-.181],[side*.077,.19-j*.06,-.182],[side*.1,.15-j*.06,-.188]],edge,.002);
  }
  medal(id==='medusa'?.052:.057);tag(id==='medusa'?'emerald armor with raised gold scrolls':id==='manga'?'engraved monochrome armor with dragon shoulders':'ochre cloth, gold flourishes and cyan jewels');
 }
 if(id==='hunter'){
  for(const side of[-1,1]){
   for(let j=0;j<3;j++)armor(torso,j%2?main:edge,[[-.055,-.035],[-.03,.055],[.088,.025],[.055,-.045]],.014,[side*(.24+j*.017),.22-j*.038,.02-j*.025],[.1,side*.7,side*-.35],.003);
   const skull=new THREE.Group();skull.name='HUNTER anchored skull trophy';skull.position.set(side*.16,.19,-.17);skull.rotation.z=-side*.22;torso.add(skull);const bone=tint(m.ivory,'#b4b19a');oval(skull,bone,[0,0,0],[.026,.031,.022],low);oval(skull,dark,[-.01,.004,-.018],[.007,.008,.005],true);oval(skull,dark,[.01,.004,-.018],[.007,.008,.005],true);for(let j=0;j<3;j++)rod(skull,bone,[(j-1)*.009,-.019,-.007],[(j-1)*.009,-.039,-.01],.004,.002,5);batch(skull);
   seam([[side*.06,.25,-.1],[side*.15,.14,-.18],[0,.04,-.197]],dark,.008);shoulderPetal(side,edge,.13);
  }
  medal(.061,m.glow,-.019);tag('layered pointed armor and attached skull trophies');
 }
 if(id==='gladiator'||id==='hockey-mask'){
  for(const side of(id==='gladiator'?[-1,1]:[1])){
   const rig=new THREE.Group();rig.name=id==='hockey-mask'?'Connected back machete':'Connected back gladius';rig.position.set(side*.18,.315,.195);rig.rotation.set(.06,0,-side*.5);torso.add(rig);
   const blade=id==='hockey-mask'?[[-.025,.012],[.031,.012],[.045,-.42],[.016,-.6],[-.026,-.566]]:[[-.026,.012],[.026,.012],[.026,-.49],[0,-.6],[-.026,-.49]];
   armor(rig,m.metal,blade,.01,[0,0,-.005],[0,0,0],.002);block(rig,edge,[0,.02,0],[.145,.04,.034]);rod(rig,dark,[0,.035,0],[0,.204,0],.018,.018,low?8:14);rod(rig,m.metal,[0,.197,0],[0,.225,0],.025,.025,low?8:14);for(let j=0;j<(low?4:7);j++)torus(rig,dark,[0,.05+j*(low?.045:.024),0],.019,.0025,[Math.PI/2,0,0],low?10:16);batch(rig);
  }
  if(id==='gladiator'){
   for(const side of[-1,1]){
    armor(torso,main,[[-.085,.065],[.075,.065],[.098,.03],[.08,-.075],[-.085,-.075]],.036,[side*.255,.22,-.04],[.1,side*.65,side*-.15],.006);
    for(let j=0;j<3;j++)band([side*.18,.26-j*.043],[side*.31,.25-j*.043],.008,edge,-.085);
    for(let j=0;j<(low?4:7);j++)seam([[side*.06,.15-j*.04,-.18],[side*.105,.18-j*.04,-.185],[side*.16,.15-j*.04,-.172]],edge,.0023);
   }
   medal(.068,edge,.003);for(let j=0;j<9;j++){const a=j/9*TAU;armor(torso,edge,[[-.014,-.025],[0,.025],[.014,-.025]],.006,[Math.sin(a)*.073,.003+Math.cos(a)*.073,-.181],[0,0,-a],.002);}tag('stepped bronze shoulders and crossed back swords');
  }else{
   for(const side of[-1,1]){
    band([side*.145,.24],[side*.125,-.18],.032,dark,-.153);node(side*.127,.152,-.168,.007,edge);
    armor(torso,accent,[[-.036,.041],[.035,.041],[.035,-.038],[-.035,-.038]],.004,[side*.12,.037,-.159],[0,side*.04,0],.002);band([side*.084,.074],[side*.156,.074],.014,main,-.169);
    armor(torso,main,[[-.035,.04],[.033,.04],[.045,-.033],[-.025,-.025]],.012,[side*.085,.265,-.092],[0,side*.5,side*.15],.005);
   }
   armor(torso,dark,[[-.039,.039],[.038,.039],[.038,-.038],[-.039,-.038]],.003,[0,-.025,-.154],[0,0,0],.002);emblem(torso,edge,0,-.025,-.16,.018);tag('distressed work jacket, pockets and attached back machete');
  }
 }
 if(id==='elemental'){
  const blue=tint(m.paint,'#1e507e'),warm=tint(m.paint,'#975837'),green=tint(m.paint,'#4b704e');
  for(const side of[-1,1]){
   const pieces=[{p:[side*.13,.17,-.181],q:[[-.055,.04],[.034,.055],[.065,.005],[.014,-.052],[-.042,-.035]],m:blue},{p:[side*.15,.055,-.17],q:[[-.035,.05],[.04,.045],[.059,-.034],[-.022,-.055]],m:side<0?green:warm},{p:[side*.074,-.10,-.153],q:[[-.035,.045],[.036,.048],[.043,-.04],[-.033,-.045]],m:blue}];
   for(const piece of pieces){armor(torso,piece.m,piece.q,.008,piece.p,[0,side*.12,0],.002);const pts=piece.q.map(([x,y])=>[x+piece.p[0],y+piece.p[1],piece.p[2]-.004]);pts.push(pts[0]);seam(pts,edge,.0024);}
   for(let j=0;j<3;j++)path(torso,green,[[side*.1,.24,.09],[side*.25,.30+j*.02,.13],[side*.32,.18,.18],[side*.24,-.02,.16]],.0035,low?12:24,4);
   seam([[side*.06,.20,.15],[side*.15,.22,.14],[side*.19,.075,.16],[side*.105,.015,.16],[side*.18,-.14,.13]],edge,.003);
  }
  medal(.049);tag('blue and multicolor crystal facets with gold fracture seams');
 }
 if(id==='fire'||id==='ice'){
  if(id==='ice')collarFur('#bbc8c9');else lapels(edge,1.15);
  for(const side of[-1,1]){
   shoulderPetal(side,edge,id==='ice'?.24:.17);
   for(let j=0;j<3;j++)armor(torso,id==='ice'?m.ivory:edge,[[-.014,-.035],[.005,.08+j*.018],[.025,-.018]],.01,[side*(.25+j*.024),.23-j*.024,.045],[.2,side*.3,-side*.55],.002);
   path(torso,id==='ice'?edge:accent,[[side*.045,.235,-.10],[side*.13,.20,-.16],[side*.23,.18,-.09],[side*.28,.27,.035]],.006,low?10:22,5);
   if(id==='fire')for(let j=0;j<(low?5:9);j++){const t=j/(low?4:8),x=side*(.07+t*.21),y=.25-Math.sin(t*Math.PI)*.085,z=-.10+t*.11;torus(torso,edge,[x,y,z],.012,.003,[Math.PI/2,j%2?Math.PI/2:0,0],low?8:12);}
  }
  medal(.062,edge,-.015);tag(id==='ice'?'pale fur, frosted shoulder blades and silver trim':'gold-edged collar, shoulder blades and anchored chain links');
 }
 if(id==='blue'||id==='cowboy'){
  const weave=tint(m.cloth,id==='blue'?'#297e89':'#28938f');weave.roughness=.92;weave.metalness=.01;weave.clearcoat=0;
  if(id==='blue'){band([-.19,.237],[.14,-.16],.115,main,-.168);for(const side of[-1,1])band([side*.18,.25],[side*.08,-.10],.035,main,-.160);}
  band([-.19,.237],[.14,-.16],.075,weave,-.179);
  for(let j=0;j<(low?10:20);j++){const t=j/(low?9:19),x=-.19+t*.33,y=.237-t*.397;band([x-.028,y-.021],[x+.027,y+.023],.0035,id==='blue'?edge:accent,-.19);}
  if(id==='blue'){
   const colored=tint(m.cloth,'#a25c71');band([-.215,.21],[.115,-.185],.008,colored,-.19);band([-.164,.25],[.166,-.147],.008,edge,-.19);
   for(const side of[-1,1]){seam([[side*.19,.245,.12],[side*.23,.11,.15],[side*.15,-.17,.13]],weave,.006);armor(torso,main,[[-.058,.05],[.052,.06],[.066,-.026],[-.035,-.06]],.008,[side*.24,.19,-.05],[.2,side*.6,side*-.2],.004);}
   medal(.057,m.glow,-.015);tag('blue and teal skin with brown tribal straps and multicolor woven band');
  }else{
   lapels(main,1.15);
   armor(torso,accent,[[-.095,.249],[.095,.249],[.125,.14],[.035,.04],[-.052,.115],[-.12,.17]],.022,[0,0,-.177],[0,0,0],.01);
   for(let j=0;j<4;j++)seam([[-.075,.245-j*.022,-.204],[-.015,.23-j*.025,-.218],[.078,.22-j*.02,-.208]],main,.0025);
   for(let j=0;j<8;j++){const t=j/7;rod(torso,edge,[.18-t*.25,.22-t*.29,-.18],[.202-t*.25,.245-t*.29,-.18],.007,.007,low?6:10);}
   for(const side of[-1,1])band([side*.21,.22],[side*.18,.03],.03,dark,-.14);
   tag('loose pale bandana, worn duster and turquoise ammunition bandolier');
  }
 }
 if(id==='mask'){
  lapels(main,1.2);collarFur('#b8b9aa');for(const side of[-1,1]){
   band([side*.09,.23],[side*.072,-.15],.029,dark,-.159);node(side*.2,.16,-.135,.007,edge);
   armor(torso,dark,[[-.047,.024],[.05,.027],[.046,-.03],[-.04,-.03]],.009,[side*.255,.195,-.055],[.2,side*.6,side*-.2],.006);
  }
  medal(.054,m.glow,-.015);tag('weathered brown aviator leather and broad shearling lapels');
 }
 if(id==='alien'){
  for(const side of[-1,1]){
   for(let j=0;j<3;j++)path(torso,j%2?accent:main,[[side*.05,.26,.09],[side*.15,.22,.15],[side*.205,.08,.13],[side*.12,-.12,.145]],.007,low?10:22,5);
   path(torso,dark,[[side*.065,.27,-.055],[side*.16,.18,-.157],[side*.1,.03,-.187],[0,-.02,-.183]],.009,low?11:22,6);
   for(let j=0;j<4;j++){const t=j/3;oval(torso,edge,[side*(.14-t*.09),.17-t*.14,-.173],[.009,.012,.008],low);}
  }
  medal(.043,edge,-.06);tag('biomechanical collar tendons and pale necklace nodes');
 }
 if(id==='assimilator'){
  for(const side of[-1,1]){
   for(let j=0;j<3;j++)path(torso,dark,[[side*.07,.25,.10],[side*.25,.29-j*.035,.14],[side*.29,.15-j*.025,.06],[side*.17,.075-j*.026,-.16]],.012,low?11:24,6);
   const port=new THREE.Group();port.position.set(side*.22,.16,-.10);port.rotation.set(.15,side*.55,0);torso.add(port);rod(port,accent,[0,0,.02],[0,0,-.005],.048,.048,low?12:24);torus(port,edge,[0,0,-.008],.041,.0025,[0,0,0],low?14:28);for(let j=0;j<(low?5:10);j++){const a=j/(low?5:10)*TAU;rod(port,edge,[Math.sin(a)*.036,Math.cos(a)*.036,-.012],[Math.sin(a)*.041,Math.cos(a)*.041,-.012],.0018,.0018,4);}batch(port);
   for(let j=0;j<3;j++)band([side*.07,.14-j*.065],[side*.15,.15-j*.065],.009,accent,-.175);
  }
  medal(.056,edge,-.04);tag('navy quilted tactical suit, stitched ports and shoulder hose bundles');
 }
 if(id==='quarterback'){
  for(const side of[-1,1]){
   band([side*.21,.23],[side*.075,-.09],.059,dark,-.185);band([side*.21,.23],[side*.075,-.09],.009,accent,-.194);
   for(let j=0;j<3;j++)rod(torso,accent,[side*(.25+j*.016),.21,.08],[side*(.23+j*.016),.29,.095],.007,.007,low?6:12);
   // Two squared red zero/2-like markings read as the reference's numbered harness.
   for(let j=0;j<2;j++){const x=side*(.153-j*.033),y=.13-j*.061;path(torso,accent,[[x-.012,y+.013,-.194],[x+.012,y+.013,-.194],[x+.012,y-.013,-.194],[x-.012,y-.013,-.194],[x-.012,y+.013,-.194]],.0028,8,4);}
   seam([[side*.22,.20,.14],[side*.15,.025,.163],[side*.10,-.14,.14]],accent,.008);
  }
  medal(.066,edge,-.015);tag('dark gunmetal sports armor, silver edging, numbered red harness and red shoulder tubes');
 }
 if(id==='sheikh'){
  const red=tint(m.cloth,'#6d3030'),green=tint(m.cloth,'#3e6046');
  for(const side of[-1,1]){
   band([side*.13,.27],[side*.135,-.23],.041,edge,-.145);
   band([side*.157,.265],[side*.161,-.23],.006,red,-.153);band([side*.17,.265],[side*.174,-.23],.004,green,-.154);
   for(let j=0;j<(low?8:15);j++){const y=.238-j*(low?.059:.032);path(torso,main,[[side*.116,y,-.156],[side*.13,y+.013,-.158],[side*.145,y,-.156],[side*.13,y-.013,-.158],[side*.116,y,-.156]],.0025,8,4);}
   // Soft vertical cloth folds continue past the belt; no manufactured limb armor.
   loft(rider,main,[[-.03,.047,.035],[.06,.06,.045],[.18,.065,.046],[.32,.068,.044]],low,[side*.17,.57,.275],[.12,0,side*.10],1);
   seam([[side*.115,.23,.126],[side*.135,.06,.154],[side*.13,-.21,.124]],edge,.0035);
  }
  medal(.054,edge,-.005);tag('ivory robe, wide gold embroidery and fine red/green edge stripes');
 }
 // Flexible back cloth is attached at the shoulder seam, then animated by the common rig.
 if(['sheikh','cowboy','fire','ice'].includes(id)){
  const tail=new THREE.Group();tail.name=r.name+' attached fabric back drape';tail.position.set(0,.20,.14);torso.add(tail);
  cloakPanel(tail,main,low);
  for(const side of[-1,1])path(tail,edge,[[side*.19,.18,.149],[side*.22,-.09,.196],[side*.255,-.4,.224]],.003,low?10:18,4);
  for(const child of tail.children)child.position.sub(tail.position);
  tail.userData.spring={kind:'cloth',strength:id==='sheikh'?.75:.55,seed:0};tail.userData.baseRotation=tail.rotation.toArray().slice(0,3);batch(tail);secondaryParts.push(tail);tag('shoulder-attached flexible fabric drape');
 }
 if(cloth&&!['sheikh','cowboy','hockey-mask'].includes(id)){
  seam([[-.16,.22,.143],[0,.205,.15],[.16,.22,.143]],edge,.0025);
  for(const side of[-1,1])seam([[side*.14,.19,.146],[side*.16,.03,.155],[side*.12,-.18,.13]],edge,.0025);
 }
 batch(torso);batch(rider);return{rider,torso,head,arms,secondaryParts};
}
