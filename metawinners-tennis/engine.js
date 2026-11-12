export const CONTRACT = '0x74f70713b0515e9f520d6c764352e45e227839b7';
export const CHARACTERS = [
 {id:'joker',name:'CHAOS',token:2,style:'THE WILD CARD',class:'Spin specialist',line:'Unpredictable. Unmissable.',power:8,speed:9,control:7,color:'#be8cff'},
 {id:'outlaw',name:'COWBOY',token:814,style:'THE SHARPSHOOTER',class:'Precision player',line:'One shot. Right on the line.',power:8,speed:7,control:10,color:'#62dfd4'},
 {id:'phantom',name:'HOCKEY MASK',token:1,style:'THE SILENT THREAT',class:'Power baseline',line:'Quiet game. Heavy forehand.',power:10,speed:6,control:8,color:'#b8e3d1'},
 {id:'royal',name:'SHEIKH',token:6,style:'THE GOLD STANDARD',class:'All-court artist',line:'Every point. Pure class.',power:8,speed:8,control:9,color:'#f5d27d'},
 {id:'volt',name:'QUARTERBACK',token:8878,style:'BUILT FOR THE BIG POINT',class:'Athletic attacker',line:'Explosive footwork. Total commitment.',power:9,speed:10,control:6,color:'#ff8567'},
 {id:'medusa',name:'MEDUSA',token:8968,spriteVersion:7,style:'THE SERPENT QUEEN',class:'Angle artist',line:'Every angle. Under your spell.',power:7,speed:8,control:10,color:'#75d9c0'},
 {id:'ice',name:'ICE',token:4,spriteVersion:7,style:'COLD PRECISION',class:'Counterpuncher',line:'Stay cool. Own the return.',power:8,speed:9,control:9,color:'#89dafa'},
 {id:'fire',name:'FIRE',token:8,spriteVersion:7,style:'TURN UP THE HEAT',class:'Aggressive all-court',line:'Pressure every point.',power:10,speed:8,control:7,color:'#ffb66b'}
];
export const COURTS = [
 {id:'miami',short:'MIAMI',name:'MIAMI AFTER HOURS',title:'MIAMI<br>AFTER HOURS',location:'MIAMI, FLORIDA',tag:'GOLDEN HOUR COLLECTION',tags:['HARD COURT','OCEANFRONT','GOLDEN HOUR'],position:'0% 0%',color:'#f2b59a',surface:['#246f69','#237c73','#359087'],apron:'#bf777b',surfaceType:'acrylic',surfaceName:'ACRYLIC HARD',surfaceHint:'Balanced pace · reliable bounce',pace:3,kick:3,grip:3,traction:1,spinGrip:1,bounce:.76,friction:.91,speed:1},
 {id:'casino',short:'THE CASINO',name:'THE ROYAL CASINO',title:'THE ROYAL<br>CASINO',location:'MONTE CARLO, MONACO',tag:'HIGH ROLLERS COLLECTION',tags:['INDOOR','LOW-BOUNCE CARPET','AFTER DARK'],position:'100% 0%',color:'#e8bd6c',surface:['#42325e','#58416e','#65507b'],apron:'#322b42',surfaceType:'carpet',surfaceName:'INDOOR CARPET',surfaceHint:'Low bounce · skidding slices',pace:4,kick:1,grip:4,traction:1.07,spinGrip:.72,bounce:.66,friction:.95,speed:1.04},
 {id:'garage',short:'BUGATTI GARAGE',name:'BUGATTI GARAGE',title:'BUGATTI<br>GARAGE',location:'MOLSHEIM, FRANCE',tag:'HYPERCOURT COLLECTION',tags:['INDOOR','FAST SURFACE','HYPERCAR CLUB'],position:'0% 100%',color:'#78d9ec',surface:['#183b5c','#24557c','#32698e'],apron:'#232f42',surfaceType:'resin',surfaceName:'FAST RESIN',surfaceHint:'Quick pace · attack early',pace:5,kick:2,grip:2,traction:.94,spinGrip:.86,bounce:.70,friction:.96,speed:1.10},
 {id:'stadium',short:'THE STADIUM',name:'CENTER COURT',title:'CENTER<br>COURT',location:'THE METAWINNERS OPEN',tag:'CHAMPIONSHIP COLLECTION',tags:['HARD COURT','NIGHT SESSION','CENTER STAGE'],position:'100% 100%',color:'#97c4ff',surface:['#146078','#197d96','#329aad'],apron:'#194d79',surfaceType:'hard',surfaceName:'CHAMPIONSHIP HARD',surfaceHint:'High grip · heavy topspin',pace:3,kick:4,grip:5,traction:1.08,spinGrip:1.15,bounce:.80,friction:.90,speed:1.01},
 {id:'yacht',short:'YACHT CLUB',name:'THE RIVIERA YACHT',title:'THE RIVIERA<br>YACHT',location:'FRENCH RIVIERA',tag:'OFFSHORE CLAY COLLECTION',tags:['RED CLAY','ON DECK','FRENCH RIVIERA'],position:'50% 50%',color:'#f0b38b',surface:['#a94c33','#bd6541','#ce8052'],apron:'#c39b6e',surfaceType:'clay',surfaceName:'RED CLAY',surfaceHint:'Slower pace · high kick · longer rallies',pace:1,kick:5,grip:2,traction:.84,spinGrip:1.32,bounce:.85,friction:.84,speed:.88}
];
export const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const DIFFICULTIES={
 rookie:{label:'Rookie',description:'Room to recover. Slower pace, central returns, longer reactions.',speed:4.5,reaction:.26,error:.48,width:.56,power:.52,flight:1.14,serveDelay:1.4},
 club:{label:'Club',description:'Varied rallies. Measured angles and occasional net approaches.',speed:5.75,reaction:.16,error:.23,width:.80,power:.67,flight:1.03,serveDelay:1.15},
 pro:{label:'Pro',description:'Quick reactions. Wider placement, stronger serves and net pressure.',speed:6.65,reaction:.085,error:.10,width:.94,power:.78,flight:.97,serveDelay:1.0},
 champion:{label:'Champion',description:'Relentless coverage. Fast pace and precise attacks into open space.',speed:7.15,reaction:.05,error:.035,width:1,power:.86,flight:.93,serveDelay:.9}
};
export const PHYSICS={step:1/120,gravity:9.81,drag:.10,radius:.034,halfWidth:4.115,halfLength:11.885,service:6.4};
const approach=(v,target,d)=>v<target?Math.min(target,v+d):Math.max(target,v-d);
export function pointLabels(points){const[a,b]=points;if(a>=3&&b>=3)return a===b?['40','40']:a>b?['AD','40']:['40','AD'];return points.map(n=>['0','15','30','40'][Math.min(n,3)]);}
export function advanceBall(b,dt){const d=PHYSICS.drag,g=PHYSICS.gravity+(b.spin||0)*2.0,curve=b.curve||0,e=Math.exp(-d*dt),f=(1-e)/d;b.x+=b.vx*f+curve*(dt-f)/d;b.y+=b.vy*f;b.z+=(b.vz+g/d)*f-g*dt/d;b.vx=b.vx*e+curve*f;b.vy*=e;b.vz=(b.vz+g/d)*e-g/d;b.rotation=(b.rotation||0)+dt*(8+(b.spin||0)*14);}
export function solveFlight(start,target,T,spin=0,curve=0){const d=PHYSICS.drag,g=PHYSICS.gravity+spin*2,e=Math.exp(-d*T),f=(1-e)/d;return{vx:(target.x-start.x-curve*(T-f)/d)/f,vy:(target.y-start.y)/f,vz:(PHYSICS.radius-start.z+g*T/d)/f-g/d};}
export function bounceBall(b,court){b.z=PHYSICS.radius;b.vz=Math.abs(b.vz)*(court.bounce+clamp(b.spin||0,-.75,1.5)*.08*(court.spinGrip||1));const grip=court.friction+(b.spin<0?.025:0);b.vx*=grip;b.vy*=grip;b.vx+=(b.curve||0)*.11;b.spin*=.45;b.curve*=.4;b.bounces++;}
export function groundContact(ball,dt){
 let lo=0,hi=dt;for(let n=0;n<12;n++){const t=(lo+hi)/2,probe={...ball};advanceBall(probe,t);if(probe.z>PHYSICS.radius)lo=t;else hi=t;}return hi;
}
export function predictTrajectory(ball,court,maxTime=3.4){
 const b={...ball},samples=[],dt=1/60;
 for(let t=dt;t<maxTime;t+=dt){const old={...b};advanceBall(b,dt);
  if(b.z<=PHYSICS.radius){if(b.bounces>=1)break;const contact=old.z>PHYSICS.radius?groundContact(old,dt):0;Object.assign(b,old);advanceBall(b,contact);bounceBall(b,court);advanceBall(b,dt-contact);}
  samples.push({x:b.x,y:b.y,z:b.z,t,bounces:b.bounces});
 }return samples;
}
export function shotFlight(start,target,{kind='flat',power=.7,spin=.15,curve=0,serve=false,smash=false,volley=false,mobile=false,court=COURTS[0],explicit=true,flightScale=1}={}){
 // Find the fastest safe trajectory first. Add the selected touch/pace after
 // clearance is solved, so a short target cannot erase the power difference.
 // Power changes travel time and arc; placement remains independent and exact.
 let T=serve?.93:kind==='lob'?1.85:kind==='slice'?1.14:kind==='topspin'?1.02:.88;
 if(!serve){T*=clamp(Math.abs(target.y-start.y)/19,.58,1.15);T/=court.speed;T=Math.max(T,kind==='lob'?1.55:smash?.50:volley?.60:.70);if(smash)T*=.84;if(explicit&&kind!=='lob')T*=.94;}
 if(mobile)T*=1.16;T*=flightScale;const origin={...start,z:Math.max(start.z,.25)};let velocity;
 for(let tries=0;tries<24;tries++){velocity=solveFlight(origin,target,T,spin,curve);const factor=1+PHYSICS.drag*origin.y/velocity.vy,netTime=factor>0?-Math.log(factor)/PHYSICS.drag:T;const probe={...origin,...velocity,spin,curve};advanceBall(probe,clamp(netTime,0,T));const net=.914+.156*Math.min(Math.abs(probe.x)/5.7,1)**2;
  if(probe.z>net+.17||tries===23)break;T+=.035;
 }
 const touchTime=(1-clamp(power,0,1))*(serve?.22:kind==='lob'?.32:kind==='slice'?.48:kind==='topspin'?.48:.50)*(mobile?1.16:1)*flightScale;
 T+=touchTime;velocity=solveFlight(origin,target,T,spin,curve);
 return{...velocity,T,spin,curve,z:origin.z};
}
export class TennisMatch{
 constructor({character=0,opponent=4,court=0,difficulty='club',practice=false,assist=false,mobile=false,doubles=false,positionAssist=false,positionGuide=true,partnerCharacter=null,rivalCharacter=null,random=Math.random,onEvent=()=>{}}={}){Object.assign(this,{character,opponent,court,difficulty,practice,assist,mobile,doubles,positionAssist,positionGuide,random,onEvent});this.setDifficulty(difficulty);const remaining=CHARACTERS.map((_,i)=>i).filter(i=>i!==character&&i!==opponent);this.partnerCharacter=remaining.includes(partnerCharacter)?partnerCharacter:remaining[0];this.rivalCharacter=remaining.includes(rivalCharacter)&&rivalCharacter!==this.partnerCharacter?rivalCharacter:remaining.find(i=>i!==this.partnerCharacter);this.lineup=[{slot:'player',team:0,index:character},{slot:'ai',team:1,index:opponent},...(doubles?[{slot:'partner',team:0,index:this.partnerCharacter},{slot:'rival',team:1,index:this.rivalCharacter}]:[])];this.stateNames=[...this.lineup.map(e=>e.slot),'ball'];this.serviceTurn=0;this.points=[0,0];this.games=[0,0];this.server=0;this.totalPoints=0;this.rally=0;this.bestRally=0;this.perfects=0;this.winners=0;this.elapsed=0;this.paused=false;this.time=0;this.accumulator=0;this.pointNumber=0;this.serveAttempt=1;this.lastSpeed=0;this.longestPoint=0;this.pointWinner=null;this.hitStop=0;this.resetPoint();this.capturePrevious();}
 emit(type,detail={}){this.onEvent({type,...detail});}
 get halfWidth(){return this.doubles?5.485:PHYSICS.halfWidth;}
 get servingSlot(){return this.server===0?(this.doubles&&this.serviceTurn>=2?'partner':'player'):(this.doubles&&this.serviceTurn>=2?'rival':'ai');}
 get receiverSlot(){return this.server===0?(this.doubles&&this.serveSide<0?'rival':'ai'):(this.doubles&&this.serveSide<0?'partner':'player');}
 roster(){return this.lineup;}
 setDifficulty(value){this.difficulty=DIFFICULTIES[value]?value:'club';this.profile=DIFFICULTIES[this.difficulty];}
 playerSpeed(){return (this.mobile?5.4:6.9)+(CHARACTERS[this.character].speed-8)*.12;}
 recoveryPosition(){
  const atNet=this.player.y<5.8&&this.ball.kind!=='lob';
  const x=this.doubles?clamp(this.player.x*.25-(this.partner.x>=0?1.8:-1.8),-3.3,3.3):clamp(-(this.target?.x||0)*.23,-1.4,1.4);
  return {x,y:atNet?4.7:COURTS[this.court].surfaceType==='clay'?10.9:10.3};
 }
 setAimTarget(x,y){
  const serving=['serve','toss'].includes(this.phase)&&this.servingSlot==='player';
  if(serving){const side=-this.serveSide;this.aimTarget={x:side*clamp(x*side,.45,3.70),y:clamp(y,-5.95,-1.4)};}
  else this.aimTarget={x:clamp(x,-this.halfWidth+.28,this.halfWidth-.28),y:clamp(y,-11.40,-1.45)};
  if(this.pendingShot&&(this.pendingShot.target||this.pendingShot.buffered)){this.pendingShot.target={...this.aimTarget};this.pendingShot.aim=this.aimTarget.x/this.halfWidth;}
  return this.aimTarget;
 }
 setAimPreset(lane,depth='deep'){
  const serving=['serve','toss'].includes(this.phase)&&this.servingSlot==='player';
  return this.setAimTarget(serving?-this.serveSide*2+clamp(lane,-1,1)*1.4:clamp(lane,-1,1)*(this.halfWidth-.65),serving?(depth==='short'?-2.6:-5.5):depth==='short'?-3.2:-10.2);
 }
 previewShot(kind='flat',power=.7){
  const serving=['serve','toss'].includes(this.phase)&&this.servingSlot==='player';
  const start=this.canHit(0)?{...this.ball}:{x:this.player.x,y:this.player.y-.35,z:serving?2.55:1.2};
  const spin=serving?.25:kind==='topspin'?1.5:kind==='slice'?-.75:kind==='lob'?.25:.15;
  const curve=serving?0:(kind==='slice'?.65:kind==='topspin'?.45:0)*this.aimTarget.x/this.halfWidth;
  return{...start,...shotFlight(start,this.aimTarget,{kind,power,spin,curve,serve:serving,mobile:this.mobile,court:COURTS[this.court],flightScale:1-(CHARACTERS[this.character].power-8)*.014,volley:!serving&&this.canHit(0)&&this.ball.bounces===0,smash:!serving&&this.canHit(0)&&this.ball.z>1.85&&Math.abs(this.player.y)<7&&power>.7}),bounces:0};
 }
 resetPoint(retry=false){
  this.returnPlanTime=0;this.recoveryTarget=null;this.positioning=false;this.pointNumber++;this.rally=0;this.pointWinner=null;this.receiveTarget=null;this.phase='serve';this.timer=0;if(!retry)this.serveAttempt=1;
  const side=(this.points[0]+this.points[1])%2===0?1:-1;this.serveSide=side;
  this.player=this.actor(this.server===0?side*1.15:0,this.server===0?12.25:10.3);this.ai=this.actor(this.server===1?-side*1.15:0,this.server===1?-12.25:-10.2);
  if(this.doubles){
   this.partner=this.actor(-2.6,4.8);this.rival=this.actor(2.6,-4.8);
   for(const e of this.roster()){const a=this[e.slot],sign=e.team===0?1:-1;
    if(e.slot===this.servingSlot){a.x=sign*side*2.2;a.y=sign*12.25;}
    else if(e.slot===this.receiverSlot){a.x=sign*side*2.6;a.y=sign*10.4;}
    else {a.x=-sign*side*2.6;a.y=sign*4.8;}
   }
  }
  const a=this[this.servingSlot];this.ball={x:a.x+.42,y:a.y,z:1,vx:0,vy:0,vz:0,bounces:0,last:this.server,lastActor:this.servingSlot,spin:0,curve:0,rotation:0,isServe:false};
  this.target=null;this.pendingShot=null;this.aiTarget={x:0,y:-10};this.aiReaction=0;this.aiPlans={};this.teamChaser=['player','ai'];this.teamReaction=[0,0];
  this.aimTarget=this.servingSlot==='player'?{x:-side*2,y:-5.25}:{x:0,y:-9.2};this.emit('ready',{server:this.server,serverSlot:this.servingSlot,attempt:this.serveAttempt});
 }
 actor(x,y){return{x,y,vx:0,vy:0,facing:1,slide:0,split:0,swing:0,run:0,pose:'ready',stroke:'forehand',servePose:0,foot:0,shotAge:1,shotDuration:.42,celebrate:0,stepAge:0};}
 serve(power=.65,aim=0,target=null){if(this.phase!=='serve'||this.paused)return;this.phase='toss';this.timer=0;this.serveOptions={power,aim,target:target?{...target}:null,slot:this.servingSlot};const p=this[this.servingSlot];p.servePose=1;p.pose='serve';p.vx=p.vy=0;this.ball.x=p.x+.4;this.ball.y=p.y;this.ball.z=1.3;this.ball.vz=5.0;this.emit('toss',{who:this.server});}
 queueShot(kind='flat',power=.6,aim=0,depth=0,target=null,{buffered=false}={}){
  if(this.paused||!['serve','toss','rally'].includes(this.phase))return false;
  if(this.phase==='serve'&&this.servingSlot==='player'){this.serve(power,aim,target);return true;}
  // A prepared return belongs to one opportunity, never to a repeating hold.
  // Preparing while an AI serves must not make the human serve out of turn.
  if(!buffered&&(this.phase!=='rally'||this.ball.last===0))return false;
  if(buffered&&this.phase==='toss'&&this.servingSlot==='player')return false;
  this.pendingShot={kind,power,aim,target:target?{...target}:null,depth:clamp(depth,-1,1),buffered,waiting:buffered&&(this.phase!=='rally'||this.ball.last===0),ttl:buffered?6:this.mobile?(this.assist?1.8:.70):.30,age:0};
  if(!buffered){this.player.swing=.38;this.player.stroke=this.ball.x<this.player.x?'backhand':'forehand';}
  return true;
 }
 cancelShot(){this.pendingShot=null;}
 canHit(who,slot=who===0?'player':'ai'){const p=this[slot],b=this.ball;if(!p||this.doubles&&b.isServe&&slot!==this.receiverSlot)return false;if(b.last===who||b.z<.13||b.z>2.8||b.isServe&&b.bounces===0)return false;if(who===0?b.y<.12:b.y>-.12)return false;const control=CHARACTERS[this.lineup.find(e=>e.slot===slot)?.index??this.character].control,reach=(slot==='player'&&this.assist?1.34:1.12)+(control-8)*.018;const dy=(p.y-b.y)/(slot==='player'&&this.assist?1.28:1.10),dx=(p.x-b.x)/reach;return dx*dx+dy*dy<1.30;}
 hit(who,{kind='flat',power=.6,aim=0,depth=0,serve=false,target:chosenTarget=null,slot=who===0?'player':'ai'}={}){const b=this.ball,p=this[slot],dir=who===0?-1:1,c=CHARACTERS[this.roster().find(e=>e.slot===slot).index],court=COURTS[this.court];power=clamp(power,.18,1.2);const clean=power>=.62&&power<=.88,footwork=Math.hypot(p.vx,p.vy),placement=(this.random()-.5)*(.06+(10-c.control)*.025),reach=Math.hypot(p.x-b.x,p.y-b.y);let spin=kind==='topspin'?1.5:kind==='slice'?-.75:kind==='lob'?.25:.15;let curve=kind==='slice'?clamp(aim,-1,1)*.65:kind==='topspin'?clamp(aim,-1,1)*.45:0;const volley=!serve&&b.bounces===0;const smash=!serve&&b.z>1.85&&Math.abs(p.y)<7&&power>.7;let target;
  if(serve){const boxSign=who===0?-this.serveSide:this.serveSide;target={x:boxSign*(2+clamp(aim,-1,1)*1.25),y:dir*(4.5+clamp(power,0,1)*1.1)};if(chosenTarget)target={x:boxSign*clamp(chosenTarget.x*boxSign,.45,3.70),y:dir*clamp(Math.abs(chosenTarget.y),1.4,5.95)};spin=.25;}
  else{const over=Math.max(0,power-.94),baseDepth=kind==='slice'?5.5+power*1.9:kind==='lob'?9.8:7.8+power*1.6+over*16;target={x:clamp(aim,-1,1)*(3.55+over*1.5)+placement,y:dir*(clamp(baseDepth+clamp(depth,-1,1)*2.1,3.2,11.25)+over*12)};if(chosenTarget)target={x:clamp(chosenTarget.x,-this.halfWidth+.28,this.halfWidth-.28),y:dir*clamp(Math.abs(chosenTarget.y),1.45,11.40)};}
  const flight=shotFlight(b,target,{kind,power,spin,curve,serve,smash,volley,mobile:this.mobile,court,explicit:!!chosenTarget,flightScale:(who===1?this.profile.flight:1)*(1-(c.power-8)*.014)});const {T:flightTime,...velocity}=flight;
  Object.assign(b,velocity,{kind,spin,curve,bounces:0,last:who,lastActor:slot,isServe:serve});this.target={...target};this.rally++;this.bestRally=Math.max(this.bestRally,this.rally);p.swing=.42;p.shotAge=0;p.shotDuration=.42;p.stroke=serve||smash?'serve':b.x<p.x?'backhand':'forehand';p.servePose=serve||smash?.45:0;
  if(who===1&&this.pendingShot?.buffered){this.pendingShot.waiting=false;this.pendingShot.ttl=6;this.pendingShot.age=0;}else this.pendingShot=null;
  this.lastSpeed=Math.round(Math.hypot(b.vx,b.vy,b.vz)*3.6);const perfect=clean&&reach<1.0&&b.z>.55&&b.z<2.1&&!serve;if(slot==='player'&&perfect)this.perfects++;
  for(const e of this.lineup)if(e.team!==who)this[e.slot].split=.22;if(slot==='player')this.recoveryTarget=this.recoveryPosition();
  if(serve&&slot==='player')this.aimTarget={x:0,y:-9.2};if(this.doubles)this.planDoubles(1-who);else if(who===0)this.planAI();else this.planReceive();this.emit('hit',{who,slot,kind:smash?'smash':volley?'volley':kind,perfect,power,speed:this.lastSpeed,x:b.x,y:b.y,z:b.z,rally:this.rally,stroke:p.stroke,footwork});
 }
 planAI(){const b=this.ball,a=this.ai,samples=predictTrajectory(b,COURTS[this.court]);const reaction=this.profile.reaction;this.aiReaction=reaction;const speed=this.aiSpeed();const candidates=samples.filter(p=>p.y<-.9&&p.y>-13.1&&p.z>.45&&p.z<2.25&&(!b.isServe||p.bounces>0));let best=candidates.find(p=>Math.hypot(p.x-a.x,p.y-a.y)<speed*Math.max(0,p.t-reaction)+.55);if(!best)best=candidates.at(-1)||{x:this.target?.x||0,y:-10};const error=this.profile.error*(1+(8-CHARACTERS[this.opponent].control)*.08);this.aiTarget={x:clamp(best.x+(this.random()-.5)*error,-5.7,5.7),y:clamp(best.y-.25,-13.1,-1.0)};}
 planReceive(samples=null){
  this.returnPlanTime=this.time+.22;this.receiveTarget=null;
  if(this.ball.last!==1||this.doubles&&this.ball.isServe&&this.receiverSlot!=='player')return;
  samples ||= predictTrajectory(this.ball,COURTS[this.court]);
  const p=this.player,speed=this.playerSpeed()*(this.mobile?.85:1),depthScale=this.mobile?.78:1;let best=null,bestCost=Infinity,fallback=null,leastMiss=Infinity;
  for(const b of samples){
   if(b.y<.8||b.y>14.1||b.z<.48||b.z>2.05||this.ball.isServe&&b.bounces===0||b.bounces===0&&p.y>6.6)continue;
   const target={x:clamp(b.x,-5.75,5.75),y:clamp(b.y+.45,1.1,13.05),t:b.t,contactAt:this.time+b.t,reachable:false};
   if(Math.hypot(target.x-b.x,target.y-b.y)>1.05)continue;
   const travel=Math.hypot(target.x-p.x,(target.y-p.y)/depthScale),capacity=speed*Math.max(0,b.t-.07)+.55,miss=travel-capacity;
   const cost=b.t+Math.abs(b.z-1.15)*.32+travel*.025;
   if(miss<=0&&cost<bestCost){best=target;best.reachable=true;bestCost=cost;}
   if(miss<leastMiss){leastMiss=miss;fallback=target;}
  }
  this.receiveTarget=best||fallback;
 }
 positioningInput(input){
  this.positioning=false;const x=input.x||0,y=input.y||0;
  if(!this.positionAssist||this.phase!=='rally'||!(input.prepare||this.pendingShot)||Math.hypot(x,y)>.002)return {x,y};
  const incoming=this.ball.last===1;
  if(incoming&&this.doubles&&this.teamChaser[0]==='partner')return {x,y};
  const target=incoming?this.receiveTarget:this.ball.lastActor==='player'?this.recoveryTarget:null;
  if(!target)return {x,y};
  const dx=target.x-this.player.x,dy=(target.y-this.player.y)/(this.mobile?.78:1),d=Math.hypot(dx,dy);
  if(d<.20)return {x:0,y:0};const strength=Math.min(incoming?.85:.65,(d-.2)*1.6);this.positioning=true;return {x:dx/d*strength,y:dy/d*strength};
 }
 planDoubles(team){
  const samples=predictTrajectory(this.ball,COURTS[this.court]),sign=team===0?1:-1,reaction=team===0?.10:this.profile.reaction;
  this.teamReaction[team]=reaction;const options=[];
  for(const e of this.roster().filter(e=>e.team===team)){
   if(this.ball.isServe&&e.slot!==this.receiverSlot)continue;
   const a=this[e.slot],speed=e.slot==='player'?this.playerSpeed()*(this.mobile?.85:1):this.aiSpeed(e.slot);
   const choices=samples.filter(p=>p.y*sign>.9&&p.y*sign<13.1&&p.z>.45&&p.z<2.5&&(!this.ball.isServe||p.bounces>0));
   const best=choices.find(p=>Math.hypot(p.x-a.x,(p.y-a.y)/(e.slot==='player'&&this.mobile?.78:1))<speed*Math.max(0,p.t-reaction)+.6)||choices.at(-1);
   if(best){const distance=Math.hypot(best.x-a.x,(best.y-a.y)/(e.slot==='player'&&this.mobile?.78:1));options.push({slot:e.slot,x:best.x,y:best.y+sign*.18,cost:Math.max(best.t,distance/speed)+(e.slot==='partner'?.16:0)});}
  }
  options.sort((a,b)=>a.cost-b.cost);const best=options[0];if(best){this.teamChaser[team]=best.slot;this.aiPlans[best.slot]=best;}
  if(team===0)this.planReceive(samples);
 }
 moveTo(a,target,speed,dt){const dx=target.x-a.x,dy=target.y-a.y,d=Math.hypot(dx,dy),f=Math.min(1,d/.4);this.moveActor(a,d>.035?dx/d*f:0,d>.035?dy/d*f:0,speed,dt);a.x=clamp(a.x,-6.1,6.1);a.y=(a.y<0?-1:1)*clamp(Math.abs(a.y),.8,13.4);}
 updateDoubles(dt){
  for(let team=0;team<2;team++)this.teamReaction[team]=Math.max(0,this.teamReaction[team]-dt);
  for(const e of this.roster().filter(e=>e.slot!=='player')){
   const a=this[e.slot],sign=e.team===0?1:-1,chaser=this.teamChaser[e.team],incoming=this.ball.last!==e.team;
   let target;
   if(incoming&&chaser===e.slot&&this.teamReaction[e.team]<=0)target=this.aiPlans[e.slot];
   if(!target){const mate=e.team===0?this.player:this[e.slot==='ai'?'rival':'ai'],lane=mate.x>=0?-2.6:2.6;target={x:lane,y:sign*(Math.abs(mate.y)<6.3?9.5:4.5)};}
   this.moveTo(a,target,this.aiSpeed(e.slot),dt);
  }
  // The human keeps full control; the partner yields if their paths converge.
  for(const [left,right]of [['player','partner'],['ai','rival']]){const a=this[left],b=this[right],dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy);if(d<.82){const shift=Math.min(.07,.82-d);b.x+=(d?dx/d:1)*shift;b.y+=(d?dy/d:0)*shift;}}
 }
 doublesReturn(team,slot){
  const defenders=this.roster().filter(e=>e.team!==team).map(e=>this[e.slot]),sign=team===0?-1:1,w=(this.halfWidth-.55)*(team===0?.82:this.profile.width);
  const lanes=[-w,0,w],x=lanes.sort((a,b)=>Math.min(...defenders.map(p=>Math.abs(b-p.x)))-Math.min(...defenders.map(p=>Math.abs(a-p.x))))[this.rally%4===0?1:0];
  const surface=COURTS[this.court].surfaceType,netPressure=defenders.every(p=>Math.abs(p.y)<6.8),kind=netPressure?'lob':surface==='clay'&&this.rally%3!==0?'topspin':surface==='carpet'&&this.rally%3===0?'slice':this.rally%5===0?'slice':this.rally%3===0?'topspin':'flat';
  this.hit(team,{slot,kind,power:team===0?.69:this.profile.power,aim:x/w,target:{x:x+(this.random()-.5)*(team===0?.15:this.profile.error),y:sign*(kind==='slice'?3.8:kind==='lob'?10.5:8.8)}});
 }
 singlesReturn(){
  const p=this.player,profile=this.profile,surface=COURTS[this.court].surfaceType,openSide=p.x+p.vx*.18>=0?-1:1;
  // Build a point: stretch into space, occasionally go behind a moving player,
  // and change depth against a deep defender. Every target stays legal.
  const wrongFoot=this.rally%7===0&&Math.abs(p.vx)>1.4&&this.difficulty!=='rookie';
  const side=wrongFoot?-openSide:openSide,bodyBall=this.rally%4===0;
  const x=bodyBall?clamp(p.x*.35,-1.3,1.3):side*(this.halfWidth-.45)*profile.width;
  const drop=p.y>9.8&&this.rally%5===0&&this.difficulty!=='rookie';
  const kind=p.y<5.5?'lob':drop?'slice':surface==='clay'&&this.rally%3!==0?'topspin':surface==='carpet'&&this.rally%3===0?'slice':this.rally%3===0?'topspin':'flat';
  const y=kind==='lob'?10.6:drop?3.5:surface==='clay'?10.4:this.rally%4===0?8.4:10.0;
  this.hit(1,{kind,power:clamp(profile.power+(this.random()-.5)*.12,.42,.90),aim:side*profile.width,target:{x:x+(this.random()-.5)*profile.error,y}});
 }
 aiSpeed(slot='ai'){const speed=slot==='partner'?DIFFICULTIES.club.speed:this.profile.speed,index=this.lineup.find(e=>e.slot===slot)?.index??this.opponent;return speed*(this.mobile?.82:1)*(1+(CHARACTERS[index].speed-8)*.025);}
 score(winner,reason='WINNER'){if(this.phase!=='rally'&&this.phase!=='toss')return;this.phase='point';this.pointWinner=winner;for(const e of this.roster().filter(e=>e.team===winner))this[e.slot].celebrate=1.65;this.timer=0;this.totalPoints++;this.pendingShot=null;if(winner===0)this.winners++;if(!this.practice){this.points[winner]++;if(this.points[winner]>=4&&this.points[winner]-this.points[1-winner]>=2){this.games[winner]++;this.points=[0,0];this.server=1-this.server;this.serviceTurn=(this.serviceTurn+1)%4;reason='GAME';if(this.games[winner]>=3){this.phase='finished';this.emit('finished',{winner});return;}}}this.emit('point',{winner,reason});}
 fault(reason){this.cancelShot();if(this.serveAttempt===1&&!this.practice){this.serveAttempt=2;this.phase='fault';this.timer=0;this.emit('fault',{reason,attempt:2});}else this.score(1-this.ball.last,'DOUBLE FAULT');}
 moveActor(p,ix,iy,speed,dt,gentle=false){const length=Math.hypot(ix,iy);if(length>1){ix/=length;iy/=length;}if(length<(gentle?.002:.10))ix=iy=0;const tx=ix*speed,ty=iy*speed;const brake=ix===0&&iy===0?90:Math.sign(tx)!==Math.sign(p.vx)||Math.sign(ty)!==Math.sign(p.vy)?(gentle?28:66):(gentle?20:48);const traction=COURTS[this.court].traction||1;if(traction<.9&&Math.abs(p.vx)>2.6&&tx*p.vx<0)p.slide=.20;const acceleration=(ix===0&&iy===0)?brake:brake*traction;p.vx=approach(p.vx,tx,acceleration*dt);p.vy=approach(p.vy,ty,acceleration*dt);if(Math.abs(p.vx)>.55)p.facing=p.vx<0?-1:1;p.x+=p.vx*dt;p.y+=p.vy*dt;const moved=Math.hypot(p.vx,p.vy)*dt;p.run+=moved*2.8;p.foot+=moved;p.stepAge+=moved;p.pose=Math.hypot(p.vx,p.vy)>.35?'run':'ready';}
 capturePrevious(){
  if(!this.previous)this.previous={player:{},ai:{},ball:{}};
  for(const name of this.stateNames){const source=this[name],target=this.previous[name]||(this.previous[name]={});for(const key of ['x','y','z','run'])target[key]=source[key]||0;}
 }
 renderState(){
  if(!this.view){this.view=Object.create(this);this.view.player={};this.view.ai={};this.view.ball={};}
  const alpha=this.paused||this.phase==='finished'?1:clamp(this.accumulator/PHYSICS.step,0,1);
  for(const name of this.stateNames){const source=this[name],target=Object.hasOwn(this.view,name)?this.view[name]:(this.view[name]={}),old=this.previous?.[name]||source;Object.assign(target,source);for(const key of ['x','y','z','run'])if(key in source)target[key]=old[key]+(source[key]-old[key])*alpha;}
  return this.view;
 }
 update(dt,input={x:0,y:0}){if(this.paused||this.phase==='finished')return;this.accumulator+=clamp(dt,0,.1);while(this.accumulator+1e-10>=PHYSICS.step){this.accumulator-=PHYSICS.step;this.capturePrevious();const phase=this.phase,last=this.ball.last;this.step(PHYSICS.step,input);if(phase!==this.phase||last!==this.ball.last)this.capturePrevious();if(this.phase==='finished')break;}}
 step(dt,input){this.elapsed+=dt;this.time+=dt;this.timer+=dt;const p=this.player,a=this.ai,b=this.ball;for(const entry of this.lineup){const actor=this[entry.slot];actor.slide=Math.max(0,actor.slide-dt);actor.split=Math.max(0,actor.split-dt);actor.swing=Math.max(0,actor.swing-dt);actor.servePose=Math.max(0,actor.servePose-dt);actor.shotAge+=dt;actor.celebrate=Math.max(0,actor.celebrate-dt);}
  if(this.phase==='point'||this.phase==='fault'){advanceBall(b,dt);if(b.z<PHYSICS.radius){b.z=PHYSICS.radius;b.vz=Math.abs(b.vz)*.35;b.vx*=.85;b.vy*=.85;}if(this.timer>1.65)this.resetPoint(this.phase==='fault');return;}
  if(this.phase==='toss'){b.z=1.3+5.0*this.timer-4.905*this.timer*this.timer;if(this.timer>.6){this.phase='rally';this.hit(this.server,{...this.serveOptions,serve:true});this.emit('serve',{who:this.server});}return;}
  if(this.phase==='rally'&&b.last===1&&this.time>=this.returnPlanTime)this.planReceive();const movement=this.positioningInput(input),playerSpeed=this.playerSpeed();this.moveActor(p,movement.x,movement.y*(this.mobile?.78:1),playerSpeed*(input.precise?.43:1),dt,this.mobile);p.x=clamp(p.x,-6,6);p.y=clamp(p.y,.7,13.4);
  if(this.phase==='serve'){const actor=this[this.servingSlot];if(this.servingSlot==='player'){p.y=clamp(p.y,12.08,13.25);p.x=clamp(p.x,this.serveSide>0?.35:-3.8,this.serveSide>0?3.8:-.35);}b.x=actor.x+.42;b.y=actor.y;b.z=1.15+Math.sin(this.time*3)*.05;if(this.servingSlot!=='player'&&this.timer>this.profile.serveDelay)this.serve(this.profile.power,(this.random()-.5)*1.3);return;}
  if(this.doubles)this.updateDoubles(dt);else{
  this.aiReaction=Math.max(0,this.aiReaction-dt);const tx=b.last===0&&this.aiReaction<=0?this.aiTarget.x:clamp(-p.x*.22,-1.1,1.1),ty=b.last===0&&this.aiReaction<=0?this.aiTarget.y:(b.last===1&&p.y>8&&a.y>-6?-4.5:-9.8),dx=tx-a.x,dy=ty-a.y,dist=Math.hypot(dx,dy);const aispeed=this.aiSpeed();const factor=Math.min(1,dist/.5);this.moveActor(a,dist>.035?dx/dist*factor:0,dist>.035?dy/dist*factor:0,aispeed,dt);a.x=clamp(a.x,-6,6);a.y=clamp(a.y,-13.4,-.7);
  }
  let groundRemainder=0;const old={...b};advanceBall(b,dt);if(b.z<=PHYSICS.radius&&old.z>PHYSICS.radius){const t=groundContact(old,dt),contact={...old};advanceBall(contact,t);Object.assign(b,contact);groundRemainder=dt-t;}
  if(old.y*b.y<0){const frac=-old.y/(b.y-old.y),crossZ=old.z+(b.z-old.z)*frac,crossX=old.x+(b.x-old.x)*frac,netHeight=.914+.156*Math.pow(Math.min(Math.abs(crossX)/5.7,1),2);if(crossZ<netHeight+PHYSICS.radius&&Math.abs(crossX)<5.8){b.y=Math.sign(old.y)*.035;b.vy*=-.15;b.vx*=.2;b.vz=-.7;if(b.isServe)this.fault('NET');else this.score(1-b.last,'INTO THE NET');return;}}
  if(b.z<=PHYSICS.radius){const first=b.bounces===0;if(first){const out=Math.abs(b.x)>(b.isServe?PHYSICS.halfWidth:this.halfWidth)+PHYSICS.radius||Math.abs(b.y)>PHYSICS.halfLength+PHYSICS.radius||(b.last===0?b.y>=0:b.y<=0);if(b.isServe){const correctX=b.last===0?-this.serveSide:this.serveSide;if(out||Math.abs(b.y)>PHYSICS.service||Math.sign(b.x)!==correctX){this.fault('SERVICE FAULT');return;}}else if(out){this.score(1-b.last,'OUT');return;}}if(b.bounces>=1){this.score(b.last,'DOUBLE BOUNCE');return;}bounceBall(b,COURTS[this.court]);this.emit('bounce',{x:b.x,y:b.y,speed:Math.hypot(b.vx,b.vy),spin:b.spin,surface:COURTS[this.court].surfaceType});if(groundRemainder>0)advanceBall(b,groundRemainder);}
  if(this.pendingShot&&!this.pendingShot.waiting){this.pendingShot.age+=dt;if(this.canHit(0)){const shot=this.pendingShot;this.hit(0,shot);}else{this.pendingShot.ttl-=dt;if(this.pendingShot.ttl<=0){this.pendingShot=null;this.emit('miss',{who:0,reason:Math.abs(p.x-b.x)>1.5?'MOVE TO THE BALL':b.y<0?'WAIT FOR YOUR RETURN':'SWING A LITTLE LATER'});}}}
  if(!this.doubles&&this.phase==='rally'&&b.last===0&&this.aiReaction<=0&&this.canHit(1))this.singlesReturn();
  if(this.doubles&&this.phase==='rally'){
   const receiving=1-b.last,preferred=this.teamChaser[receiving];
   const candidates=this.roster().filter(e=>e.team===receiving&&e.slot!=='player').sort((a,b)=>(a.slot===preferred?-1:0)-(b.slot===preferred?-1:0));
   for(const e of candidates){if(this.teamReaction[receiving]<=0&&this.canHit(e.team,e.slot)&&!(e.slot==='partner'&&this.canHit(0))){this.doublesReturn(e.team,e.slot);break;}}
  }
  if(this.phase==='rally'&&(Math.abs(b.y)>18||Math.abs(b.x)>9))this.score(b.bounces?b.last:1-b.last,b.bounces?'WINNER':'OUT');
 }
}
