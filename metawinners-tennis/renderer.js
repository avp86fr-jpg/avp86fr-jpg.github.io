import {COURTS,CHARACTERS,clamp,advanceBall} from './engine.js?v=11';
import {gameLayout} from './input.js?v=11';
import {PlayerAnimation,ATLAS} from './animation.js?v=11';
import {PLAYER_PROFILES,STEP_DISTANCE,strokeMotion,smoothstep} from './player-motion.js?v=11';
const TAU=Math.PI*2;
export class CourtRenderer{
 constructor(canvas,assets,spriteMeta){
  Object.assign(this,{canvas,assets,spriteMeta});this.ctx=canvas.getContext('2d',{alpha:false});this.w=1600;this.h=900;this.scale=1;this.ox=this.oy=0;
  this.animation=new PlayerAnimation(assets,spriteMeta);this.surfaceCache=new Map();this.texture=this.makeTexture();this.reduceMotion=typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;this.reset();
 }
 clearScene(){for(const layer of [...this.surfaceCache.values(),this.netCache?.layer,this.sceneCache])if(layer)layer.width=layer.height=1;this.surfaceCache.clear();this.netCache=null;this.sceneCache=null;}
 reset(){for(const layer of this.actorBlends?.values()||[])layer.width=layer.height=1;this.actorBlends=new Map();this.clearScene();this.animation?.reset();this.preview=null;this.clayMarks=[];this.cheer=0;this.stepFrames=new Map();this.actorMotion=new Map();this.shake=0;this.trail=[];this.dust=[];this.ripples=[];this.netPulse=0;}
 resize(width,height,dpr=1,options={}){
  const key=JSON.stringify([width,height,Math.min(dpr,2),options]);if(key===this.resizeKey)return this.layout;this.resizeKey=key;
  this.screenW=width;this.screenH=height;this.dpr=Math.min(dpr,2);this.canvas.width=Math.round(width*this.dpr);this.canvas.height=Math.round(height*this.dpr);
  this.layout=gameLayout(width,height,options);this.w=this.layout.logicalW;this.h=this.layout.logicalH;this.scale=this.layout.scale;this.ox=this.layout.stage.x;this.oy=this.layout.stage.y;
  const near=this.layout.courtHalf;
  this.geometry=this.layout.portrait?{far:.255,near:.435,top:.235,depth:.625,lift:.076}:{far:near*.545,near,top:.31,depth:.55,lift:.082};
  this.worldUnit=this.w*this.geometry.near/5.485*.82;this.clearScene();
  return this.layout;
 }
 project(x,y,z=0){const g=this.geometry,t=(y+11.885)/23.77,k=.70,u=t*k/(1+(k-1)*t),half=g.far+(g.near-g.far)*u,scale=half/g.near;return{x:this.w*(.5+x/5.485*half),y:this.h*(g.top+g.depth*u)-z*this.worldUnit*scale,scale};}
 unproject(x,y){x=(x-this.ox)/this.scale;y=(y-this.oy)/this.scale;const g=this.geometry,u=(y/this.h-g.top)/g.depth,t=u/(.7+.3*u),half=g.far+(g.near-g.far)*u;return{x:(x/this.w-.5)*5.485/half,y:t*23.77-11.885};}
 makeTexture(){const tile=document.createElement('canvas');tile.width=256;tile.height=256;const c=tile.getContext('2d');if(!c?.createImageData)return null;const p=c.createImageData(256,256);let seed=197;for(let i=0;i<p.data.length;i+=4){seed=(seed*1664525+1013904223)>>>0;const v=seed%255;p.data[i]=p.data[i+1]=p.data[i+2]=v;p.data[i+3]=32;}c.putImageData(p,0,0);return tile;}
 event(e){
  if(e.type==='point'||e.type==='finished')this.cheer=2.2;
  if(e.type==='hit'){this.ripples.push({x:e.x,y:e.y,life:.30,color:{topspin:'#7ef2df',slice:'#ffc49d',lob:'#d7b7ff'}[e.kind]||'#e5ff9f'});this.trail=[];this.shake=this.layout?.touch?0:e.perfect?.8:.2;}
  if(e.type==='bounce'){this.ripples.push({x:e.x,y:e.y,life:.42,color:e.surface==='clay'?'#f4c294':e.surface==='carpet'?'#e4c5ff':'#effad3'});if(e.surface==='clay'&&!this.reduceMotion)for(let i=0;i<6&&this.dust.length<60;i++)this.dust.push({x:e.x,y:e.y,z:.04,vx:(Math.random()-.5)*1.3,vy:(Math.random()-.5)*1.3,vz:.4,life:.32,max:.32,color:'#dc9a65'});}
  if(e.type==='point'&&e.reason==='INTO THE NET'||e.type==='fault'&&e.reason==='NET')this.netPulse=1;
  if(e.type==='ready')this.trail=[];
 }
 path(points){const c=this.ctx;c.beginPath();points.forEach(([x,y,z=0],i)=>{const p=this.project(x,y,z);i?c.lineTo(p.x,p.y):c.moveTo(p.x,p.y);});}
 quad(x1,y1,x2,y2){this.path([[x1,y1],[x2,y1],[x2,y2],[x1,y2]]);this.ctx.closePath();}
 line(points,width=2.2,color='rgba(245,251,239,.93)'){const c=this.ctx;this.path(points);c.strokeStyle=color;c.lineWidth=width;c.lineCap='butt';c.lineJoin='miter';c.stroke();}
 cover(img,w,h,zoom=1,anchor=0.5){const s=Math.max(w/img.width,h/img.height)*zoom,dw=img.width*s,dh=img.height*s;this.ctx.drawImage(img,(w-dw)/2,(h-dh)*anchor,dw,dh);}
 background(m){
  const img=this.assets[COURTS[m.court].id+'Plate'],base=Math.max(this.screenW/img.width,this.screenH/img.height),floor=[.375,.340,.365,.470,.302][m.court];
  const goal=this.layout.stage.y+this.layout.stage.h*(this.layout.portrait?.19:.26);
  const scale=Math.max(base,(this.screenH*.8-goal)/(img.height*(.8-floor)));
  this.plate={x:(this.screenW-img.width*scale)/2,y:(this.screenH-img.height*scale)*.8,w:img.width*scale,h:img.height*scale};
  this.cover(img,this.screenW,this.screenH,scale/base,.8);this.ctx.fillStyle='#00152612';this.ctx.fillRect(0,0,this.screenW,this.screenH);
 }
 platePoint(u,v){const p=this.plate;return{x:(p.x+u*p.w-this.ox)/this.scale,y:(p.y+v*p.h-this.oy)/this.scale};}
 atmosphere(m){
  if(this.ambience===false||!this.plate)return;const c=this.ctx,t=this.reduceMotion?0:m.time,P=(u,v)=>this.platePoint(u,v),unit=this.plate.w/this.scale;c.save();
  if(m.court===0||m.court===4){
   // Reflections use the artwork's water coordinates, so resize/cropping cannot
   // move them onto the terrace or playing surface.
   const yacht=m.court===4,left=yacht?.345:.275,right=yacht?.66:.72,top=yacht?.218:.261,depth=yacht?.016:.039;
   for(let i=0;i<24;i++){
    const u=left+((i*.173+Math.sin(t*.28+i)*.006)%1+1)%1*(right-left),v=top+(i*.127%1)*depth,p=P(u,v),wave=Math.sin(t*1.2+i*.8);
    c.strokeStyle=`rgba(255,239,201,${.08+(wave+1)*.045})`;c.lineWidth=.7+(i%3)*.22;c.beginPath();c.moveTo(p.x,p.y);c.lineTo(p.x+unit*(.003+(i%4)*.0017),p.y+.5*wave);c.stroke();
   }
   if(!this.reduceMotion)for(let i=0;i<2;i++){
    const p=P(.34+((t*.0012+i*.17)%.32),.15+i*.018),wing=(.002+Math.sin(t*3+i)*.0009)*unit;
    c.strokeStyle='#f8f2d17a';c.lineWidth=.9;c.beginPath();c.moveTo(p.x-unit*.003,p.y-wing);c.quadraticCurveTo(p.x-unit*.001,p.y-2,p.x,p.y);c.quadraticCurveTo(p.x+unit*.001,p.y-2,p.x+unit*.003,p.y-wing);c.stroke();
   }
  }else if(m.court===1){
   // Chandelier light stays attached to the fixture; no floating particles.
   for(const [u,v,r]of [[.5,.105,.024],[.335,.14,.011],[.665,.14,.011],[.23,.27,.009],[.77,.27,.009]]){
    const p=P(u,v),strength=.11+Math.sin(t*.65+u*8)*.018;this.glow(p.x,p.y,unit*r,`rgba(255,209,121,${strength})`);
   }
  }else if(m.court===2){
   for(const u of [.075,.317,.683,.925]){
    const p=P(u,.203),bottom=P(u,.337),g=c.createLinearGradient(p.x-4,0,p.x+4,0),alpha=.08+Math.sin(t*.55+u*7)*.025;
    g.addColorStop(0,'#62e7ff00');g.addColorStop(.5,`rgba(98,231,255,${alpha})`);g.addColorStop(1,'#62e7ff00');c.fillStyle=g;c.fillRect(p.x-4,p.y,8,bottom.y-p.y);
   }
   for(const u of [.486,.514]){const p=P(u,.323);this.glow(p.x,p.y,unit*.006,`rgba(132,229,255,${.13+Math.sin(t*.7)*.025})`);}
  }else{
   const applause=this.reduceMotion?0:Math.min(1,this.cheer);
   // Sparse spectators are anchored to the two seating tiers, clear of aisles.
   for(let i=0;i<48;i++){
    const u=.095+(i*.173% .81);if(u>.335&&u<.385||u>.65&&u<.70)continue;
    const p=P(u,(i%2?.386:.265)+(i*.037%.039)),sway=this.reduceMotion?0:Math.sin(t*1.4+i)*.65;
    c.globalAlpha=.30+applause*.13;c.fillStyle=['#8eb3be','#d6bc8a','#b6c9c1','#778bab'][i%4];
    c.beginPath();c.ellipse(p.x+sway,p.y,1,1.2,0,0,TAU);c.fill();c.fillRect(p.x-1.3+sway,p.y+1.2,2.6,2.2);
    if(applause>0&&i%3===0){const arm=2+Math.sin(t*7+i)*1.4;c.strokeStyle='#c7d3ce';c.lineWidth=.8;c.beginPath();c.moveTo(p.x-3,p.y-arm);c.lineTo(p.x,p.y+2);c.lineTo(p.x+3,p.y-arm);c.stroke();}
   }
  }c.restore();
 }
 glow(x,y,r,color){const c=this.ctx,g=c.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,color);g.addColorStop(1,'rgba(255,255,255,0)');c.fillStyle=g;c.fillRect(x-r,y-r,r*2,r*2);}
 surfaceMaterial(court){
  if(this.surfaceCache.has(court))return this.surfaceCache.get(court);
  const clay=COURTS[court].surfaceType==='clay',image=clay?this.assets.clay:this.assets.surfaceAtlas;if(!image)return null;
  const layer=document.createElement('canvas');layer.width=this.w;layer.height=this.h;const c=layer.getContext('2d');
  const tw=clay?image.width:image.width/2,th=clay?image.height:image.height/2,sx=clay?2:(court%2)*tw+2,sy=clay?2:Math.floor(court/2)*th+2,rows=160;
  for(let i=0;i<rows;i++){
   const y1=-11.885+i/rows*23.77,y2=-11.885+(i+1)/rows*23.77,top=this.project(-5.485,y1),bottom=this.project(5.485,y2),mid=this.project(-5.485,(y1+y2)/2);
   c.drawImage(image,sx,sy+(th-4)*i/rows,tw-4,(th-4)/rows+1,mid.x,top.y,this.w-2*mid.x,bottom.y-top.y+.65);
  }
  this.surfaceCache.set(court,layer);return layer;
 }
 surface(m){
  const c=this.ctx,v=COURTS[m.court],w=this.w,h=this.h;
  c.save();this.quad(-6.15,-13.2,6.15,13.2);c.fillStyle=m.court===4?'#a24e37ed':m.court===0?'#346f6940':m.court===1?'#392b5090':m.court===2?'#16446377':'#17557488';c.fill();
  this.quad(-5.485,-11.885,5.485,11.885);const g=c.createLinearGradient(0,h*.25,w*.3,h*.9);g.addColorStop(0,v.surface[0]);g.addColorStop(.5,v.surface[1]);g.addColorStop(1,v.surface[2]);c.fillStyle=g;c.fill();c.save();c.clip();
  const material=this.surfaceMaterial(m.court);if(material){c.globalAlpha=m.court===4?.56:m.court===2||m.court===3?.70:.78;c.drawImage(material,0,0);c.globalAlpha=1;}else if(this.texture){c.fillStyle=c.createPattern(this.texture,'repeat');c.globalAlpha=.22;c.fillRect(0,0,w,h);c.globalAlpha=1;}
  this.quad(-4.115,-11.885,4.115,11.885);c.fillStyle='#061c2b13';c.fill();
  const far=this.project(0,-11.885),near=this.project(0,11.885),depth=c.createLinearGradient(0,far.y,0,near.y);depth.addColorStop(0,v.surface[1]+'32');depth.addColorStop(.6,v.surface[1]+'08');depth.addColorStop(1,'#00162009');c.fillStyle=depth;c.fillRect(0,0,w,h);
  // Subtle baseline wear is part of the cached material, never a particle layer.
  for(const y of [-10.65,10.65])for(const x of [-2.8,0,2.8]){const p=this.project(x,y),radius=this.worldUnit*p.scale*.92;c.save();c.translate(p.x,p.y);c.scale(1,.24);const wear=c.createRadialGradient(0,0,0,0,0,radius);wear.addColorStop(0,m.court===4?'#eec49b22':'#d2dfcf0e');wear.addColorStop(1,'#e2ddbf00');c.fillStyle=wear;c.fillRect(-radius,-radius,radius*2,radius*2);c.restore();}

  const light=c.createLinearGradient(0,0,w,h);light.addColorStop(0,'#f8eedb18');light.addColorStop(.42,'#ffffff00');light.addColorStop(1,'#02152325');c.fillStyle=light;c.fillRect(0,0,w,h);c.restore();
  if(v.surfaceType==='clay'){for(let y=-11.5;y<11.9;y+=.24)this.line([[-5.45,y],[5.45,y+.05]],.6,'#edaf7025');for(let i=0;i<70;i++){const x=Math.sin(i*11.71)*5.3,y=Math.cos(i*4.31)*11.7;this.line([[x,y],[x+.03,y+.02]],1,'#4d26181c');}}
  if(v.surfaceType==='carpet'){for(let y=-11.5;y<11.8;y+=1.5){this.quad(-5.45,y,5.45,y+.75);c.fillStyle='#ffffff04';c.fill();}}
  for(const y of[-12.4,12.4]){this.line([[-5.9,y],[5.9,y]],1,v.color+'40');}
  this.line([[-5.485,11.93],[5.485,11.93]],3,'#001b2945');
  for(let x=-5.7;x<5.7;x+=.22)this.line([[x,.18],[x+.22,.85]],.6,'#031e2730');
  this.line([[-5.7,.85],[5.7,.85]],2.2,'#031e2730');
  for(const y of [-11.885,11.885])this.courtMark([-5.485,y],[5.485,y],.075);
  for(const x of [-5.485,-4.115,4.115,5.485])this.courtMark([x,-11.885],[x,11.885],.045);
  for(const y of [-6.4,6.4])this.courtMark([-4.115,y],[4.115,y],.045);
  this.courtMark([0,-6.4],[0,6.4],.045);this.courtMark([0,-11.885],[0,-11.5],.05);this.courtMark([0,11.885],[0,11.5],.05);
  const p=this.project(0,13.6);c.translate(p.x,p.y);c.scale(1,.52);c.font=`700 ${this.layout.portrait?16:18}px Barlow,Arial`;c.textAlign='center';c.fillStyle='#e5f5da91';c.fillText('M E T A W I N N E R S',0,0);c.restore();
 }
 courtMark(from,to,width=.05,color='#f1f4e4'){
  // Paint a physical strip on the ground plane, with a small display minimum.
  const dx=to[0]-from[0],dy=to[1]-from[1],length=Math.hypot(dx,dy),nx=-dy/length*width/2,ny=dx/length*width/2,c=this.ctx;
  this.path([[from[0]+nx,from[1]+ny],[to[0]+nx,to[1]+ny],[to[0]-nx,to[1]-ny],[from[0]-nx,from[1]-ny]]);c.closePath();c.fillStyle=color;c.fill();
  this.line([from,to],(this.layout.touch?.78:.9)/this.scale,color);
 }
 actorSize(q,key){return (PLAYER_PROFILES[key]?.height||1.85)*this.worldUnit*q.scale;}
 courtDetails(m){
  const c=this.ctx;c.save();
  const prop=(key,x,y,height)=>{const img=this.assets[key];if(!img)return;const q=this.project(x,y),dh=this.worldUnit*q.scale*height,dw=dh*img.width/img.height;c.fillStyle='#001a2233';c.beginPath();c.ellipse(q.x,q.y,dw*.42,dh*.04,0,0,TAU);c.fill();c.drawImage(img,q.x-dw/2,q.y-dh,dw,dh);};
  prop('umpire',-6.7,-.25,2.65);prop('bench',6.5,3.8,1.05);
  const p=this.project(0,-14,0),width=this.layout.portrait?230:260;
  c.fillStyle='#0b282ce8';c.fillRect(p.x-width/2,p.y-21,width,28);c.strokeStyle='#d7f08d65';c.lineWidth=1;c.strokeRect(p.x-width/2,p.y-21,width,28);
  c.font='600 12px Barlow,Arial';c.textAlign='center';c.fillStyle='#def6ac';c.fillText('METAWINNERS OPEN',p.x,p.y-2);c.restore();
 }
 courtLife(m,dt){
  const c=this.ctx,w=this.w,h=this.h,t=this.reduceMotion||this.ambience===false?0:m.time;
  if(!m.paused)this.cheer=Math.max(0,this.cheer-dt);
  const banner=this.project(0,-14);c.save();c.fillStyle='#0b282cf5';c.fillRect(banner.x-124,banner.y-20,248,26);c.fillStyle=this.cheer?'#efffa4':'#d3e6b7';c.font='600 12px Barlow,Arial';c.textAlign='center';c.fillText(m.phase==='rally'?`${m.rally} SHOT RALLY  ·  ${m.profile.label.toUpperCase()}`:m.doubles?'DOUBLES  ·  METAWINNERS OPEN':'METAWINNERS  ·  TENNIS CLUB',banner.x,banner.y-2);
  const img=this.assets.attendant;if(img)for(const [x,phase]of [[6.7,0],[-6.7,2]]){const p=this.project(x,-10.8),dh=this.worldUnit*p.scale*1.72,dw=dh*img.width/img.height;c.save();c.translate(p.x,p.y);c.rotate(t?Math.sin(t*.9+phase)*.003:0);c.scale(1,1+Math.sin(t*1.7+phase)*.003);c.fillStyle='#001b2630';c.beginPath();c.ellipse(0,0,dw*.35,dh*.025,0,0,TAU);c.fill();c.drawImage(img,-dw/2,-dh,dw,dh);c.restore();}
  if(!this.reduceMotion&&this.ambience!==false&&this.plate){
   const P=(u,v)=>this.platePoint(u,v),unit=this.plate.w/this.scale;
   if(m.court===0){
    const p=P(.33+(t*.0018% .32),.276);c.globalAlpha=.6;c.fillStyle='#e5ece1';c.beginPath();c.moveTo(p.x-7,p.y);c.lineTo(p.x+10,p.y);c.lineTo(p.x+6,p.y+2);c.lineTo(p.x-5,p.y+2);c.fill();c.fillRect(p.x-3,p.y-2,7,2);
    c.strokeStyle='#fff2cd60';c.lineWidth=.7;c.beginPath();c.moveTo(p.x-21,p.y+3);c.lineTo(p.x-6,p.y+2);c.stroke();
   }
   if(m.court===1){
    for(const u of [.23,.77]){const p=P(u,.275);this.glow(p.x,p.y,unit*.022,`rgba(255,191,92,${.035+Math.sin(t*.5+u*6)*.008})`);}
   }
   if(m.court===4){
    for(const [u,side]of [[.127,1],[.873,-1]]){
     const p=P(u,.29),foot=P(u,.356),width=unit*.014;c.globalAlpha=.72;c.strokeStyle='#dce8e6';c.lineWidth=1.2;c.beginPath();c.moveTo(p.x,foot.y);c.lineTo(p.x,p.y);c.stroke();
     const flutter=Math.sin(t*2.4+side)*2;c.fillStyle='#83bdcb';c.beginPath();c.moveTo(p.x,p.y);c.quadraticCurveTo(p.x+side*width*.5,p.y-2+flutter,p.x+side*width,p.y+1);c.lineTo(p.x+side*width,p.y+9);c.quadraticCurveTo(p.x+side*width*.5,p.y+7+flutter,p.x,p.y+8);c.fill();
    }
   }
  }c.restore();
 }
 positioningGuide(m){
  if(!m.positionGuide||m.phase!=='rally'||m.player.planted)return;
  const receiving=m.ball.last===1&&(!m.doubles||m.teamChaser[0]==='player'),target=receiving?m.receiveTarget:m.recoveryTarget;
  if(!target)return;const c=this.ctx,p=this.project(target.x,target.y),player=this.project(m.player.x,m.player.y),gap=Math.hypot(target.x-m.player.x,target.y-m.player.y),color=this.highContrast?'#ffffff':receiving?(target.reachable?'#8df1e6':'#ffd493'):'#cce5bb';
  const r=Math.max(17*p.scale,8/this.scale);c.save();c.globalAlpha=receiving?.82:.40;c.strokeStyle=color;c.fillStyle=color+'15';c.lineWidth=receiving?2:1.2;c.setLineDash(receiving?[]:[4,5]);c.beginPath();c.ellipse(p.x,p.y,r,r*.34,0,0,TAU);c.fill();c.stroke();
  if(gap>1){c.globalAlpha=receiving?.35:.18;c.setLineDash([3,7]);c.beginPath();c.moveTo(player.x,player.y);c.lineTo(p.x,p.y);c.stroke();}
  c.globalAlpha=receiving?.95:.6;c.setLineDash([]);c.fillStyle=color;c.font=`600 ${Math.max(12,7/this.scale)}px DM,Arial`;c.textAlign='center';c.shadowColor='#0a262c';c.shadowBlur=4;c.fillText(receiving?(target.reachable?'RETURN':'REACH'):'RECOVER',p.x,p.y+r*.34+Math.max(14,9/this.scale));c.restore();
 }
 shadow(p,isPlayer,m,index=isPlayer?m.character:m.opponent,controlled=isPlayer){
  const c=this.ctx,q=this.project(p.x,p.y),key=CHARACTERS[index].id,size=this.actorSize(q,key),lift=!this.reduceMotion&&!p.planted&&p.split>0?Math.sin(p.split/.22*Math.PI):0;c.save();
  c.save();c.translate(q.x,q.y);c.transform(1,0,m.court===0?-.55:-.20,-.22,0,0);c.globalAlpha=m.court===0?.13:.075;c.scale(PLAYER_PROFILES[key].width,1);this.animation.shadow(c,key,!isPlayer,size);c.restore();
  c.fillStyle=`rgba(3,19,24,${.24-lift*.07})`;c.shadowColor='#00101824';c.shadowBlur=5*q.scale;c.beginPath();c.ellipse(q.x,q.y+1,size*.21,size*.043,0,0,TAU);c.fill();c.shadowBlur=0;
  if(isPlayer||m.doubles){c.strokeStyle=controlled?(p.planted?'#f5dfa4':m.canHit(0)?'#efffbf':'#d8f674bb'):isPlayer?'#73e8ddbb':'#ffa4a599';c.lineWidth=controlled?2.2:1.5;c.beginPath();c.ellipse(q.x,q.y+1,size*.23,size*.06,0,0,TAU);c.stroke();if(controlled&&p.planted){c.lineWidth=2;for(const side of [-1,1]){c.beginPath();c.moveTo(q.x+side*size*.29,q.y-3);c.lineTo(q.x+side*size*.29,q.y+4);c.lineTo(q.x+side*size*.23,q.y+4);c.stroke();}}}c.restore();
 }
 drawActor(a,index,isPlayer,dt,m,charging,slot=isPlayer?'player':'ai'){
  const c=this.ctx,q=this.project(a.x,a.y),key=CHARACTERS[index].id;if(!this.assets[key+'Sheet']||!this.spriteMeta[key])return;
  const speed=Math.hypot(a.vx,a.vy),moving=!a.planted&&['rally','serve','toss'].includes(m.phase)&&speed>.28,toss=m.phase==='toss'&&m.servingSlot===slot;
  const base=isPlayer?0:3;let frame=base;
  if(isPlayer&&(a.servePose>0||toss))frame=5;
  else if(a.swing>0&&a.shotAge<a.shotDuration)frame=isPlayer?(a.stroke==='backhand'?2:1):4;
  const size=this.actorSize(q,key),motion=this.reduceMotion?0:1,stroke=strokeMotion(a.shotAge,a.shotDuration,toss?m.timer:null);
  const celebration=a.celebrate>.1?Math.max(0,Math.sin((1.65-a.celebrate)*5.5))*size*.021*motion:0;
  const hop=celebration+(!a.planted&&a.split>0?Math.sin(a.split/.22*Math.PI)*size*.009*motion:0);
  if(moving&&!m.paused&&!this.reduceMotion&&m.court===4){const step=Math.floor(a.foot/STEP_DISTANCE);if(this.stepFrames.get(slot)!==step){this.stepFrames.set(slot,step);if(this.dust.length<60)this.dust.push({x:a.x,y:a.y,z:.025,vx:-a.vx*.10,vy:-a.vy*.10,vz:.06,life:.22,max:.22,color:'#d79a6a'});}}
  if(a.slide>0&&!m.paused&&m.court===4&&!this.reduceMotion&&this.clayMarks.length<40){const last=this.clayMarks.at(-1);if(!last||Math.hypot(last.x-a.x,last.y-a.y)>.12)this.clayMarks.push({x:a.x,y:a.y,angle:Math.atan2(a.vy,a.vx),life:12});}
  const desiredLean=(a.planted?0:clamp(a.vx/6,-1,1)*(.024+(a.slide>0?.012:0))+clamp((a.ax||0)/40,-1,1)*.008)*motion;
  const previous=this.actorMotion.get(slot),elapsed=previous?clamp(m.time-(previous.lastTime??m.time),0,.1):0,lean=previous?(previous.lean??0)+(desiredLean-(previous.lean??0))*(1-Math.exp(-elapsed/.07)):desiredLean;
  const squash=motion*((a.planted?.010:charging&&m.ball.last===1?.007:0)+(a.split>0?.007:0)+(toss?.014*(1-smoothstep(m.timer/.6)):0));
  // Use one authoritative racket pose during recovery. Whole-body crossfades
  // between a swing and ready stance visibly duplicate the arm and racket.
  if(frame!==base&&!toss&&(stroke.settle>.5||moving&&a.shotAge>.19))frame=base;
  const options={front:!isPlayer,direction:a.facing||1,size,run:a.run*1.25,moving:moving&&!this.reduceMotion,frame,actionPhase:stroke.phase,breath:Math.sin(m.time*2.6+index)*motion,lean,squash,hop,mirror:frame===5&&key==='phantom'};
  const stateKey=frame+':'+(a.planted?'plant':options.moving?'run':'ready')+':'+(options.moving?options.direction:0);
  let state=previous;
  if(!state||state.key!==key||m.time<state.time)state={key,stateKey,time:m.time,options};
  else if(state.stateKey!==stateKey){state={key,stateKey,time:m.time,options,from:a.planted||frame!==base||state.options.frame!==base?null:state.options};}
  const blend=this.reduceMotion?1:smoothstep((m.time-state.time)/.04);
  c.save();c.translate(q.x,q.y);c.scale(PLAYER_PROFILES[key].width,1);
  const incoming=state.from&&blend<1?blend:1;
  const poses=[];if(state.from&&incoming<1)poses.push([state.from,1-incoming]);
  poses.push([options,incoming]);
  if(poses.filter(([,weight])=>weight>.001).length>1){
   // Blend into a tiny reusable surface so overlapping body pixels stay opaque.
   // Drawing two translucent people directly onto the court creates a ghost.
   let layer=this.actorBlends.get(slot);if(!layer){layer=document.createElement('canvas');layer.width=ATLAS.width;layer.height=ATLAS.height;this.actorBlends.set(slot,layer);}
   const context=layer.getContext('2d');context.clearRect(0,0,layer.width,layer.height);context.save();context.translate(ATLAS.center,ATLAS.floor);context.globalCompositeOperation='lighter';
   for(const [pose,weight]of poses){if(weight<.001)continue;context.globalAlpha=weight;this.animation.draw(context,key,{...pose,size:ATLAS.body,hop:pose.hop*ATLAS.body/size});}
   context.restore();const scale=size/ATLAS.body;c.drawImage(layer,-ATLAS.center*scale,-ATLAS.floor*scale,ATLAS.width*scale,ATLAS.height*scale);
  }else this.animation.draw(c,key,{...poses.find(([,weight])=>weight>.001)[0],size});
  c.restore();state.options=options;state.lean=lean;state.lastTime=m.time;if(blend===1)state.from=null;this.actorMotion.set(slot,state);
  if(isPlayer&&(!this.layout.touch||m.doubles)){c.save();c.font=`600 ${Math.max(12,7/this.scale)}px DM,Arial`;c.textAlign='center';c.fillStyle=slot==='player'?'#efffcf':'#a4f5ed';c.shadowColor='#001209';c.shadowBlur=4;c.fillText(slot==='partner'?'PARTNER':a.planted?'FEET SET':m.canHit(0)?'READY':'YOU',q.x,q.y+Math.max(15*q.scale,10/this.scale));c.restore();}
 }
 net(m){
  if(this.netPulse>.005){this.paintNet(m);return;}
  if(!this.netCache){const l=this.project(-5.9,0,1.25),r=this.project(5.9,0,0),bounds={x:Math.floor(l.x-8),y:Math.floor(l.y-8),w:Math.ceil(r.x-l.x+16),h:Math.ceil(r.y-l.y+16)};const layer=document.createElement('canvas');layer.width=bounds.w;layer.height=bounds.h;const original=this.ctx;this.ctx=layer.getContext('2d');this.ctx.translate(-bounds.x,-bounds.y);this.paintNet(m);this.ctx=original;this.netCache={layer,...bounds};}
  this.ctx.drawImage(this.netCache.layer,this.netCache.x,this.netCache.y);
 }
 paintNet(m){
  const c=this.ctx,z=x=>.914+.156*Math.pow(x/5.7,2),pulse=this.reduceMotion?0:Math.sin(m.time*40)*this.netPulse*.06;
  c.save();this.path([[-5.7,0,0],[-5.7,0,1.07],[5.7,0,1.07],[5.7,0,0]]);c.closePath();c.fillStyle='#071d2429';c.fill();
  for(let x=-5.7;x<=5.71;x+=.15)this.line([[x,0,0],[x,pulse,z(x)]],.65,'#03182080');
  for(let height=.09;height<.92;height+=.105){const pts=[];for(let x=-5.7;x<=5.71;x+=.4)pts.push([x,pulse,height+Math.pow(x/5.7,2)*.15]);this.line(pts,.75,'#03182091');}
  const band=[];for(let x=-5.7;x<=5.71;x+=.15)band.push([x,pulse,z(x)]);this.line(band,4,'#f3f2df');this.line([[-5.7,0,.025],[5.7,0,.025]],1.7,'#273e42');
  for(const x of[-5.78,5.78]){this.line([[x,0,-.01],[x,0,1.14]],7,m.court===1?'#7b643d':m.court===4?'#d6d7c7':'#18363d');this.line([[x-.025,0,.03],[x-.025,0,1.14]],1.8,'#a3bfba');const q=this.project(x,0,1.15);c.fillStyle='#e5e8c7';c.beginPath();c.ellipse(q.x,q.y,4.5,2,0,0,TAU);c.fill();}
  this.line([[0,pulse,.914],[0,0,.025]],2.6,'#e0ead8d9');c.restore();
 }
 ball(m){
  const c=this.ctx,b=m.ball,p=this.project(b.x,b.y,b.z),g=this.project(b.x,b.y),r=Math.max((this.layout.touch?3.1:2.8)/this.scale,4.8*p.scale)*(this.ballScale||1);c.save();
  c.fillStyle=`rgba(0,10,18,${.4/(1+b.z*.35)})`;c.beginPath();c.ellipse(g.x+1,g.y,r*(1+b.z*.17),r*.33,0,0,TAU);c.fill();
  if(m.phase==='rally'&&!this.reduceMotion)for(let i=1;i<this.trail.length;i++){const a=this.project(this.trail[i-1].x,this.trail[i-1].y,this.trail[i-1].z),q=this.project(this.trail[i].x,this.trail[i].y,this.trail[i].z);c.lineWidth=r*.8*i/this.trail.length;c.strokeStyle=`rgba(242,251,171,${i/this.trail.length*.20})`;c.beginPath();c.moveTo(a.x,a.y);c.lineTo(q.x,q.y);c.stroke();}
  c.translate(p.x,p.y);c.rotate(b.rotation||0);c.shadowColor='#dfff74aa';c.shadowBlur=4;const glow=c.createRadialGradient(-r*.3,-r*.3,0,0,0,r);glow.addColorStop(0,this.highContrast?'#fff':'#f9ffd0');glow.addColorStop(.5,this.highContrast?'#fff':'#e9fb77');glow.addColorStop(1,this.highContrast?'#e6e6e6':'#9cb336');c.fillStyle=glow;c.beginPath();c.arc(0,0,r,0,TAU);c.fill();c.shadowBlur=0;if(this.highContrast){c.strokeStyle='#05150e';c.lineWidth=Math.max(1.3/this.scale,1.6);c.stroke();}c.strokeStyle='#fffff5c9';c.lineWidth=.8;c.beginPath();c.arc(r*.95,0,r*.94,1.8,4.48);c.stroke();c.beginPath();c.arc(-r*.95,0,r*.94,-1.34,1.34);c.stroke();c.restore();
 }
 indicators(m,aim,charging,depth=0,shot='flat',aimTarget=m.aimTarget,power=.7){
  const c=this.ctx;
  this.positioningGuide(m);
  if(!aimTarget||!['serve','toss','rally'].includes(m.phase))return;
  const p=this.project(aimTarget.x,aimTarget.y),color=this.highContrast?'#ffffff':{flat:'#e2ff85',topspin:'#78ece0',slice:'#ffb693',lob:'#d6baff'}[shot]||'#e2ff85';
  const r=Math.max(21*p.scale,9/this.scale),rh=r*.34;c.save();
  if(charging){
   const key=[shot,Math.round(power*20),Math.round(m.player.x*5),Math.round(m.player.y*5),Math.round(aimTarget.x*10),Math.round(aimTarget.y*10)].join(':');
   if(!this.preview||this.preview.key!==key||m.time-this.preview.time>.12)this.preview={key,time:m.time,flight:m.previewShot(shot,power)};
   const flight=this.preview.flight;c.strokeStyle=color+'70';c.lineWidth=this.highContrast?2:1.5;c.setLineDash([5,8]);c.beginPath();
   for(let i=0;i<=28;i++){const b={...flight};advanceBall(b,flight.T*i/28);const q=this.project(b.x,b.y,b.z);i?c.lineTo(q.x,q.y):c.moveTo(q.x,q.y);}c.stroke();c.setLineDash([]);
  }

  c.fillStyle=color+'24';c.strokeStyle=color;c.lineWidth=2.1;c.beginPath();c.ellipse(p.x,p.y,r,rh,0,0,TAU);c.fill();c.stroke();
  c.beginPath();c.moveTo(p.x-r-10,p.y);c.lineTo(p.x-r+3,p.y);c.moveTo(p.x+r-3,p.y);c.lineTo(p.x+r+10,p.y);c.moveTo(p.x,p.y-rh-7);c.lineTo(p.x,p.y-rh+2);c.stroke();
  c.fillStyle=color;c.beginPath();c.ellipse(p.x,p.y,2.8,1.8,0,0,TAU);c.fill();
  c.font=`600 ${Math.max(11,6/this.scale)}px DM,Arial`;c.textAlign='center';c.shadowColor='#001614';c.shadowBlur=4;c.fillText(m.phase==='serve'&&m.servingSlot==='player'?'SERVE TARGET':'TARGET',p.x,p.y-rh-13);c.restore();
 }
 effects(dt,paused){
  const c=this.ctx;if(!paused)this.netPulse=Math.max(0,this.netPulse-dt*2);
  for(const list of [this.ripples])for(let i=list.length-1;i>=0;i--){const p=list[i];if(!paused)p.life-=dt;if(p.life<=0){list.splice(i,1);continue;}const q=this.project(p.x,p.y),r=(1-p.life/.45)*19+3;c.globalAlpha=p.life/.45*.45;c.strokeStyle=p.color||'#effad3';c.lineWidth=list===this.ripples?1.5:2;c.beginPath();c.ellipse(q.x,q.y,r*q.scale,r*q.scale*.32,0,0,TAU);c.stroke();c.globalAlpha=1;}
  for(let i=this.dust.length-1;i>=0;i--){const p=this.dust[i];if(!paused){p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.z+=p.vz*dt;p.vz-=dt*6;}if(p.life<=0){this.dust.splice(i,1);continue;}const q=this.project(p.x,p.y,Math.max(0,p.z));c.globalAlpha=p.life/p.max*.4;c.fillStyle=p.color;c.beginPath();c.ellipse(q.x,q.y,2.6*q.scale,1.1*q.scale,0,0,TAU);c.fill();}c.globalAlpha=1;
 }
 groundEffects(m,dt){
  if(m.court!==4)return;const c=this.ctx;c.save();
  for(let i=this.clayMarks.length-1;i>=0;i--){const mark=this.clayMarks[i];if(!m.paused)mark.life-=dt;if(mark.life<=0){this.clayMarks.splice(i,1);continue;}const q=this.project(mark.x,mark.y);c.strokeStyle='#653020';c.globalAlpha=Math.min(.22,mark.life/12*.22);c.lineWidth=2*q.scale;c.beginPath();const dx=Math.cos(mark.angle)*5*q.scale,dy=Math.sin(mark.angle)*2*q.scale;c.moveTo(q.x-dx,q.y-dy);c.lineTo(q.x+dx,q.y+dy);c.stroke();}c.restore();
 }
 prepareScene(m){
  if(this.sceneCache&&this.sceneCourt===m.court&&this.sceneDoubles===m.doubles)return;
  const layer=document.createElement('canvas');layer.width=this.canvas.width;layer.height=this.canvas.height;
  const original=this.ctx;this.ctx=layer.getContext('2d',{alpha:false});const c=this.ctx;
  c.setTransform(this.dpr,0,0,this.dpr,0,0);this.background(m);c.save();c.translate(this.ox,this.oy);c.scale(this.scale,this.scale);
  this.surface(m);if(m.doubles){this.courtMark([-5.485,-11.885],[-5.485,11.885],.055,'#eff7cf');this.courtMark([5.485,-11.885],[5.485,11.885],.055,'#eff7cf');}this.courtDetails(m);c.restore();this.ctx=original;this.sceneCache=layer;this.sceneCourt=m.court;this.sceneDoubles=m.doubles;
 }
 draw(m,dt,{aim=0,charging=false,depth=0,shot='flat',aimTarget=m.aimTarget,power=.7}={}){
  const c=this.ctx;this.prepareScene(m);c.setTransform(1,0,0,1,0,0);c.drawImage(this.sceneCache,0,0);c.setTransform(this.dpr,0,0,this.dpr,0,0);
  c.save();c.translate(this.ox,this.oy);c.scale(this.scale,this.scale);c.beginPath();c.rect(0,0,this.w,this.h);c.clip();
  if(this.shake>.1&&!m.paused&&!this.reduceMotion){c.translate(Math.sin(m.time*75)*this.shake*.5,Math.cos(m.time*61)*this.shake*.5);this.shake*=.75;}
  this.atmosphere(m);this.courtLife(m,dt);this.groundEffects(m,dt);this.indicators(m,aim,charging,depth,shot,aimTarget,power);
  const actors=m.roster().map(e=>({...e,actor:m[e.slot]})).sort((a,b)=>a.actor.y-b.actor.y);
  for(const e of actors)this.shadow(e.actor,e.team===0,m,e.index,e.slot==='player');
  for(const e of actors.filter(e=>e.team===1))this.drawActor(e.actor,e.index,false,dt,m,false,e.slot);
  if(m.ball.y<0)this.ball(m);this.net(m);
  for(const e of actors.filter(e=>e.team===0))this.drawActor(e.actor,e.index,true,dt,m,charging&&e.slot==='player',e.slot);
  if(m.ball.y>=0)this.ball(m);this.effects(dt,m.paused);
  if(m.phase==='rally'&&!m.paused){this.trail.push({x:m.ball.x,y:m.ball.y,z:m.ball.z,time:m.time});while(this.trail.length>1&&m.time-this.trail[0].time>.055)this.trail.shift();}c.restore();
 }
}
