/* Moto Rides motorcycle dynamics. Distances/metres, velocities/m/s, angles/radians.
   Bike frame: front=-Z, positive yaw/roll=left. Road-follow balance is assisted,
   but yaw and lateral motion come from lean-generated tire forces. */
import { sampleTrack } from './track.js';
import { CIRCUIT_EVENTS, getCircuitEvent, getCircuitDistrict } from './circuit-events.js';
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const approach=(a,b,t)=>a+(b-a)*(1-Math.exp(-t));
const hash=n=>{const f=Math.sin(n*127.1+311.7)*43758.5453;return f-Math.floor(f);};
// First overlap of two swept, relative positions. All contacts use the same time
// interval, so equal-speed bikes do not acquire a false half-step closing gap.
function sweptContact(x0,z0,x1,z1,width,length){
 if(z0>=length&&z1>=length||z0<=-length&&z1<=-length)return -1;
 let enter=0,leave=1;
 for(let axis=0;axis<2;axis++){
  const start=axis?z0:x0,delta=(axis?z1:x1)-start,extent=axis?length:width;
  if(Math.abs(delta)<1e-10){if(Math.abs(start)>=extent)return -1;continue;}
  let a=(-extent-start)/delta,b=(extent-start)/delta;if(a>b){const swap=a;a=b;b=swap;}
  enter=Math.max(enter,a);leave=Math.min(leave,b);if(enter>=leave)return -1;
 }
 return enter;
}
import { RIDERS } from './roster.js';
const BIKERS=RIDERS;
export const RACE_RULES={vegas:{length:5800,target:110},casino:{length:6000,target:118},miami:{length:5600,target:106},desert:{length:6300,target:124}};
export const WEAPONS={bat:{damage:54,range:2.6,lateral:1.9,cooldown:.68,windup:.12,duration:.46},chain:{damage:43,range:3.15,lateral:2.35,cooldown:.82,windup:.17,duration:.58},wrench:{damage:36,range:2.1,lateral:1.65,cooldown:.44,windup:.08,duration:.34}};
export const DIFFICULTIES={casual:{rivalSpeed:-2.6,damage:.6,clock:1.12,bankAssist:.94,cornerABS:.92,brakeAssist:true,windup:.82},standard:{rivalSpeed:0,damage:1,clock:1,bankAssist:.9,cornerABS:.82,brakeAssist:false,windup:.66},expert:{rivalSpeed:2,damage:1.12,clock:.96,bankAssist:.76,cornerABS:.55,brakeAssist:false,windup:.56}};
export class RaceSimulation {
 constructor(options={}){this.options=options;this.track=options.sampleTrack||sampleTrack;this.running=false;this.input={};}
 start(config={}){
  this.config=config;this.circuit=RACE_RULES[config.circuit]?config.circuit:'vegas';this.difficulty=DIFFICULTIES[config.difficulty]?config.difficulty:'standard';this.assists=DIFFICULTIES[this.difficulty];this.rules={...RACE_RULES[this.circuit],target:Math.round(RACE_RULES[this.circuit].target*this.assists.clock)};this.rider=config.rider||BIKERS[0];this.weapon=WEAPONS[config.weapon]?config.weapon:'bat';this.mode=['race','elimination','timeattack'].includes(config.mode)?config.mode:'race';
  this.running=true;this.finished=false;this.paused=false;this.input={};this.distance=0;this.x=0;this.lateralSpeed=0;this.speed=0;this.lean=0;this.leanRate=0;this.heading=0;this.yawRate=0;this.steer=0;this.steeringAngle=0;this.throttle=1;this.braking=0;this.acceleration=0;this.frontLoad=.46;this.rearLoad=.54;this.suspensionFront=0;this.suspensionRear=0;this.pitch=0;this.wheelie=0;this.slip=0;this.grip=1;this.lateralAcceleration=0;this.tireLoad=0;this.surface='asphalt';this.gear=1;this.rpm=1800;this.shiftTimer=0;this.previousSteer=0;this.wallCooldown=0;this.time=0;this.countdown=3;this.health=100;this.nitro=100;this.takedowns=0;this.nearMisses=0;this.score=0;this.combo=0;this.maxCombo=0;this.comboTimer=0;this.drifting=false;this.drafting=false;this.driftCharge=0;this.driftBoost=0;this.boosting=false;this.attackTimer=0;this.attackCooldown=0;this.pendingHit=null;this.attackSide=1;this.hit=0;this.crash=0;this.invincible=0;this.message='';this.messageTimer=0;this.uiTimer=0;this.offRoadTimer=0;this.sparkEvents=[];this.sectorSplits=[];this.sectorStartTime=0;this.sectorClean=true;this.cleanSectors=0;this.lastSector=null;this.perfectPasses=0;this.draftCharge=0;this.impact={kind:'none',side:0,strength:0,timer:0};this.lastDamageTime=-10;this.eventId=0;this.previousX=0;this.previousDistance=0;
  const stats=this.rider.stats||{};this.topSpeed=60.8+(Number(stats.speed||85)-85)*.15;this.handling=.95+(Number(stats.handling||83)-83)*.007;this.armor=clamp(1-(Number(stats.armor||80)-80)*.012,.76,1.2);
  const riderIndex=Math.max(0,BIKERS.findIndex(r=>r.id===this.rider.id));
  this.rivals=this.mode==='timeattack'?[]:Array.from({length:7},(_,i)=>({id:i,rider:BIKERS[(riderIndex+i+1)%BIKERS.length],name:BIKERS[(riderIndex+i+1)%BIKERS.length].name,x:((i%3)-1)*2.8,z:8+i*5.8,speed:0,baseSpeed:53+hash(i+24)*3.5+this.assists.rivalSpeed,baseLane:((i%4)-1.5)*2.7,hp:100,down:0,recovery:1,recoverTimer:0,finishedAt:null,hit:0,attack:0,attackContact:this.assists.windup/.95,attackSide:1,attackCooldown:2+i*.5,collisionCooldown:0,lean:0,leanRate:0,lateralSpeed:0,heading:0,yawRate:0,braking:0,phase:hash(i+23)*6.28,aggression:.5+hash(i+11)*.5,takedowns:0,planTimer:0,laneTarget:((i%3)-1)*2.8,draftTime:0,passAwarded:false}));
  this.traffic=Array.from({length:15},(_,i)=>this._newTraffic(i,120+i*53));
  this.pickups=Array.from({length:10},(_,i)=>this._newPickup(i,140+i*115));
  this.flowCharge=0;this.flowChain=0;this.flowTimer=0;this.maxFlowChain=0;this.overdriveTime=0;this.overdriveUses=0;this.challengeStates=new Map();this.courseChallenge=null;this.courseFeedbackTime=0;this.challengesCompleted=0;
  this.options.onEvent?.({type:'start'});this.emit();return this;
 }
 _newTraffic(id,z){const lane=Math.floor(hash(id*13+31)*4);return{id,x:(lane-1.5)*2.85,z,speed:23+hash(id+12)*17,type:hash(id+15)>.77?'van':'car',color:['#5c707c','#c0b99e','#814c54','#47718a','#c8c9cb'][id%5],near:false,collided:false,collisionCooldown:0};}
 _newPickup(id,z){return{id,x:(Math.floor(hash(id*7+9)*4)-1.5)*2.8,z,type:id%4===2?'repair':'nitro',active:true};}
 setInput(action,value){if(action==='nitro')action='boost';if(action==='steer'){this.input.steer=clamp(Number(value)||0,-1,1);return;}if(action==='throttle'||action==='brake'){this.input[action]=typeof value==='number'?clamp(Number.isFinite(value)?value:0,0,1):value?1:0;return;}this.input[action]=!!value;if(value&&(action==='attack'||action==='attackLeft'||action==='attackRight'))this.attack(action==='attackLeft'?-1:action==='attackRight'?1:0);}
 attack(side=0){
  if(!this.running||this.paused||this.countdown>0||this.attackCooldown>0)return false;
  const w=WEAPONS[this.weapon],rival=this._selectTarget(w,1.5,side);
  this.attackSide=side||(rival&&rival.x<this.x?-1:1);this.attackTimer=w.duration;this.attackCooldown=w.cooldown;this.pendingHit={remaining:w.windup,active:.12,side:this.attackSide};this.options.onEvent?.({type:'swing',weapon:this.weapon,side:this.attackSide});return true;
 }
 _withinReach(r,weapon=WEAPONS[this.weapon],scale=1){return ((r.x-this.x)/weapon.lateral)**2+((r.z-this.distance)/weapon.range)**2<scale*scale;}
 _selectTarget(weapon=WEAPONS[this.weapon],scale=1,side=0){
  let selected=null,best=scale*scale;
  for(const r of this.rivals){if(r.down>0||r.recoverTimer>0)continue;const dx=r.x-this.x;if(side&&Math.sign(dx)!==side&&Math.abs(dx)>=.4)continue;const reach=(dx/weapon.lateral)**2+((r.z-this.distance)/weapon.range)**2;if(reach<best){selected=r;best=reach;}}
  return selected;
 }
 _resolveHit(side,quiet=false){
  const w=WEAPONS[this.weapon],rival=this._selectTarget(w,1,side);
  if(!rival){if(!quiet)this.say('CLOSE THE GAP TO STRIKE',.6);return false;}
  const counter=!!rival.pendingStrike,damage=w.damage+(counter?10:0);rival.hp-=damage;rival.hit=counter?.8:.55;rival.pendingStrike=null;rival.attack=0;rival.speed*=.98;rival.x=clamp(rival.x+side*.38,-6.5,6.5);this.score+=counter?125:75;this._spark(rival.x,rival.z,'hit');this.impact={kind:'hit',side,strength:counter?1:.72,timer:.18};this.options.onEvent?.({type:'hit',weapon:this.weapon,side,counter,strength:counter?1:.72,relativeZ:rival.z-this.distance});this._addFlow(counter?18:12,'hit');this._challengeAction('hit');
  if(rival.hp<=0){rival.down=4.5;rival.recovery=0;rival.recoverTimer=0;rival.crashSide=side;rival.takedowns=(rival.takedowns||0)+1;rival.speed*=.35;this.takedowns++;this._addFlow(18,'takedown');this.combo=this.comboTimer>0?Math.min(4,this.combo+1):1;this.maxCombo=Math.max(this.maxCombo,this.combo);this.comboTimer=10;this.nitro=Math.min(100,this.nitro+24);this.score+=350*this.combo;this.impact={kind:'takedown',side,strength:1,timer:.38};this.say(this.combo>1?`${this.combo}× COMBO  ·  TAKEDOWN`:'TAKEDOWN  +350',1.5);this.options.onEvent?.({type:'takedown',weapon:this.weapon,side,combo:this.combo,strength:1});if(this.mode==='elimination'&&this.takedowns>=5)this.finish(true,'objective');}
  else this.say(counter?`COUNTER  ·  ${rival.name} STAGGERED`:`${rival.name}  ·  ${Math.max(0,rival.hp)} INTEGRITY`,.8);
  return true;
 }
 _spark(x,z,type){this.sparkEvents.push({x,z,type,time:this.time,id:++this.eventId});if(this.sparkEvents.length>12)this.sparkEvents.shift();}
 say(message,duration=1){this.message=message;this.messageTimer=duration;}
 _addFlow(amount,reason){
  this.flowChain=this.flowTimer>0?Math.min(6,this.flowChain+1):1;this.flowTimer=7;this.maxFlowChain=Math.max(this.maxFlowChain,this.flowChain);
  const previous=this.flowCharge;this.flowCharge=clamp(previous+amount*(1+(this.flowChain-1)*.08),0,100);
  if(previous<100&&this.flowCharge===100)this.options.onEvent?.({type:'flowReady',reason});
 }
 _ensureChallenge(definition){
  if(!definition)return null;let challenge=this.challengeStates.get(definition.id);
  if(!challenge){const solo=definition.kind==='brawl'&&this.mode==='timeattack',kind=solo?'sprint':definition.kind,target=kind==='sprint'?4:kind==='precision'?1:2;
   challenge={...definition,kind,target,value:0,completed:false,failed:false,closed:false,description:solo?'Carry clean speed through this solo challenge.':definition.description,objective:kind==='sprint'?`${solo?'SOLO RUN · ':''}HOLD 190 KM/H CLEAN FOR 4s`:kind==='precision'?'MAKE A CLEAN NEAR MISS OR SLINGSHOT':'LAND 2 STRIKES IN THE WINDOW'};
   this.challengeStates.set(definition.id,challenge);this.options.onEvent?.({type:'challengeStart',id:challenge.id,name:challenge.name,kind});this.say(`${challenge.name} · ${challenge.objective}`,2.2);
  }
  this.courseChallenge=challenge;return challenge;
 }
 _completeChallenge(challenge){
  if(!challenge||challenge.completed||challenge.closed)return;challenge.completed=true;challenge.value=challenge.target;this.challengesCompleted++;this.score+=350;this.nitro=Math.min(100,this.nitro+20);this._addFlow(20,'challenge');
  this.say(`${challenge.name} · CLEARED +350`,2);this.options.onEvent?.({type:'challengeComplete',id:challenge.id,name:challenge.name,kind:challenge.kind,score:350});
 }
 _challengeAction(action){
  const challenge=this._ensureChallenge(getCircuitEvent(this.distance,this.circuit));if(!challenge||challenge.closed||challenge.completed)return;
  if(challenge.kind==='precision'&&(action==='nearMiss'||action==='perfectPass')||challenge.kind==='brawl'&&action==='hit'){challenge.value++;if(challenge.value>=challenge.target)this._completeChallenge(challenge);}
 }
 _updateCourse(previousDistance,dt){
  const definition=getCircuitEvent(previousDistance,this.circuit)||getCircuitEvent(this.distance,this.circuit),challenge=this._ensureChallenge(definition);
  if(challenge&&!challenge.completed&&!challenge.closed&&challenge.kind==='sprint'){
   const travel=this.distance-previousDistance,inside=travel>0?clamp((Math.min(this.distance,challenge.end)-Math.max(previousDistance,challenge.start))/travel,0,1):1;
   if(this.speed*3.6>=190&&Math.abs(this.x)<6.7&&this.hit===0&&this.slip<.22)challenge.value+=dt*inside;else challenge.value=0;
   if(challenge.value>=challenge.target-1e-9)this._completeChallenge(challenge);
  }
  const active=this.courseChallenge;if(active&&!active.closed&&this.distance>=active.end){active.closed=true;active.failed=!active.completed;this.courseFeedbackTime=2.5;if(active.failed)this.options.onEvent?.({type:'challengeEnd',id:active.id,completed:false});}
 }
 _courseState(){const c=this.courseChallenge;if(!c||c.closed&&this.courseFeedbackTime<=0)return null;return{id:c.id,name:c.name,kind:c.kind,description:c.description,objective:c.objective,accent:c.accent,target:c.target,value:c.value,progress:clamp(c.value/c.target,0,1),completed:c.completed,failed:c.failed,remainingMetres:Math.max(0,Math.ceil(c.end-this.distance))};}
 _upcomingEvent(){for(const event of CIRCUIT_EVENTS[this.circuit]||[]){const distance=event.start-this.distance;if(distance>0&&distance<=180)return{name:event.name,kind:event.kind==='brawl'&&this.mode==='timeattack'?'sprint':event.kind,distance:Math.ceil(distance),accent:event.accent};}return null;}
 _flowState(){return{charge:this.flowCharge,ready:this.flowCharge>=100,active:this.overdriveTime>0,remaining:this.overdriveTime,chain:this.flowChain};}
 step(dt){if(!this.running||this.paused)return;dt=clamp(Number(dt)||0,0,.1);if(dt<=0)return;const steps=Math.max(1,Math.ceil(dt*120-1e-9));for(let i=0;i<steps&&this.running;i++)this._step(dt/steps);}
 _step(dt){
  if(this.countdown>0){const previous=Math.ceil(this.countdown),wait=Math.min(dt,this.countdown);this.countdown-=wait;dt-=wait;if(this.countdown<1e-9)this.countdown=0;if(Math.ceil(this.countdown)!==previous||this.countdown===0)this.emit();if(dt<1e-9)return;}
  if(this.mode==='timeattack'){dt=Math.min(dt,Math.max(0,this.rules.target-this.time));if(dt===0){this.finish(false,'timeout');return;}}
  this.countdown=Math.max(-2,this.countdown-dt);const previousTime=this.time;this.time+=dt;const previousDistance=this.distance;this.previousDistance=this.distance;this.previousX=this.x;this.impact.timer=Math.max(0,this.impact.timer-dt);
  for(const key of ['attackTimer','attackCooldown','hit','crash','invincible','messageTimer','comboTimer','driftBoost','flowTimer','overdriveTime','courseFeedbackTime'])this[key]=Math.max(0,this[key]-dt);
  if(this.flowTimer===0)this.flowChain=0;
  if(this.messageTimer===0)this.message='';if(this.comboTimer===0)this.combo=0;
  if(this.pendingHit){const strike=this.pendingHit;strike.remaining-=dt;if(strike.remaining<=0){if(this._resolveHit(strike.side,true)){this.pendingHit=null;if(!this.running)return;}else if(strike.remaining<=-strike.active){this.pendingHit=null;this.say('CLOSE THE GAP TO STRIKE',.6);}}}
  if(this.input.attack||this.input.attackLeft||this.input.attackRight)this.attack(this.input.attackLeft?-1:this.input.attackRight?1:0);
  this._motorcyclePhysics(dt);
  // Stop the clock at the physical line crossing, including a finish inside the
  // final clock tick. Contacts and rivals then advance only to that same instant.
  if(this.distance>=this.rules.length&&this.distance>previousDistance){const fraction=clamp((this.rules.length-previousDistance)/(this.distance-previousDistance),0,1);dt*=fraction;this.time=previousTime+dt;this.distance=this.rules.length;this.x=this.previousX+(this.x-this.previousX)*fraction;}
  this._updateRivals(dt);this._updateTraffic(dt);this._updatePickups();this._updateCourse(previousDistance,dt);this._updateSectors(previousDistance,dt);
  if(this.health<=0)this.finish(false,'wreck');
  else if(this.distance>=this.rules.length)this.finish(true,'finish');
  else if(this.mode==='timeattack'&&this.time>=this.rules.target)this.finish(false,'timeout');
  this.uiTimer+=dt;if(this.uiTimer>=.06){this.uiTimer=0;this.emit();}
 }
 _motorcyclePhysics(dt){
  const g=9.81,wheelbase=1.48,cgHeight=.62;
  const digital=(this.input.right?1:0)-(this.input.left?1:0);
  const command=clamp((this.input.steer??0)+digital,-1,1);
  this.steer=approach(this.steer,command,dt*14);
  const track=this.track(this.distance,this.circuit),curvature=track.curve;
  const offroad=Math.abs(this.x)>7;this.surface=offroad?'shoulder':'asphalt';
  // Grip varies smoothly on the shoulder. No sideways position steering is used.
  const surfaceMu=offroad?.58:1.22;const tireLimit=surfaceMu*g;
  let brakeInput=Number(this.input.brake)||0;if(this.assists.brakeAssist){const ahead=Math.abs(this.track(this.distance+55,this.circuit).curve),safe=Math.sqrt(8.5/Math.max(.0001,ahead));brakeInput=Math.max(brakeInput,clamp((this.speed-safe)*.1,0,.5));}this.braking=approach(this.braking,brakeInput,dt*13);
  const requestedThrottle=this.input.throttle===undefined?1:Number(this.input.throttle);
  this.throttle=approach(this.throttle,this.braking>.04?0:requestedThrottle,dt*9);
  this.drafting=this.rivals.some(r=>r.down<=0&&r.z-this.distance>4&&r.z-this.distance<21&&Math.abs(r.x-this.x)<1.15)&&this.speed>28;
  const boostRequested=!!(this.input.boost&&this.braking<.06&&this.throttle>.5);
  if(boostRequested&&this.flowCharge>=100&&this.overdriveTime===0){this.flowCharge=0;this.overdriveTime=5;this.overdriveUses++;this.say('OVERDRIVE · OWN THE STRAIGHT',1.8);this.options.onEvent?.({type:'overdrive',duration:5});}
  this.boosting=boostRequested&&(this.nitro>1||this.overdriveTime>0);
  const overdrive=this.boosting&&this.overdriveTime>0;
  if(this.boosting)this.nitro=Math.max(0,this.nitro-dt*(overdrive?0:20));
  else this.nitro=Math.min(100,this.nitro+dt*(this.drafting?10.5:3.8));
  // Engine force falls with speed; drag, grade, tire scrub and braking remove energy.
  const v=Math.max(0,this.speed),powerSpeed=this.topSpeed+(this.boosting?15.2:0)+(overdrive?4:0);
  let engine=11.2*this.throttle*Math.max(0,1-(v/(powerSpeed*1.16))**2);
  if(this.boosting)engine*=overdrive?1.28:1.2;if(this.shiftTimer>0)engine*=.48;if(this.hit>.25)engine*=.35;
  const driveLimit=tireLimit*this.rearLoad;
  const drive=Math.min(engine,driveLimit);
  // ABS limits straight braking; in a turn the same tire budget is shared.
  const brakeRequest=this.braking*12.5;
  const lateralReserve=Math.min(tireLimit*.9,Math.abs(g*Math.tan(this.lean))*this.assists.cornerABS);
  const brake=Math.min(brakeRequest,tireLimit*.95,Math.sqrt(Math.max(0,tireLimit*tireLimit-lateralReserve*lateralReserve)));
  const longitudinalTire=drive-brake;
  const drag=.00102*v*v*(this.drafting?.72:1)+.13+(offroad?1.5:0);
  const scrub=Math.min(3.4,Math.abs(this.lean)*this.slip*v*.06);
  const acceleration=longitudinalTire-drag-track.slope*g-scrub;
  this.acceleration=approach(this.acceleration,acceleration,dt*14);
  // Axle normal loads transfer under acceleration/braking and feed available traction.
  const frontTarget=clamp(.46-longitudinalTire*cgHeight/(wheelbase*g),.065,.88);
  this.frontLoad=approach(this.frontLoad,frontTarget,dt*9);this.rearLoad=1-this.frontLoad;
  const frontLong=brake*.74,rearLong=drive-brake*.26;
  const frontLateral=Math.sqrt(Math.max(0,(tireLimit*this.frontLoad)**2-frontLong**2));
  const rearLateral=Math.sqrt(Math.max(0,(tireLimit*this.rearLoad)**2-rearLong**2));
  const combinedLateral=Math.sqrt(Math.max(0,tireLimit*tireLimit-longitudinalTire*longitudinalTire));
  const availableLateral=Math.max(.5,Math.min(frontLateral+rearLateral,combinedLateral));
  // Counter-steering makes bank build over time; gyro resistance slows high-speed swaps.
  const requiredBank=Math.atan(curvature*v*v/g);
  const bankAssist=requiredBank*this.assists.bankAssist;
  const maxLean=(.54+Math.min(v,60)*.0035)*clamp(v/10,.12,1);
  const headingStability=this.heading*9+(this.yawRate-curvature*v)*3.4;
  const desiredLean=clamp(bankAssist-this.steer*maxLean-headingStability,-.93,.93);
  const naturalFrequency=(10.5-v*.045)*this.handling;
  const leanAccel=(desiredLean-this.lean)*naturalFrequency*naturalFrequency-2*.93*naturalFrequency*this.leanRate;
  this.leanRate+=leanAccel*dt;this.lean=clamp(this.lean+this.leanRate*dt,-1.02,1.02);
  const demandedLateral=g*Math.tan(this.lean);
  const actualLateral=clamp(demandedLateral,-availableLateral,availableLateral);
  this.lateralAcceleration=actualLateral;
  const lateralUse=Math.abs(demandedLateral)/Math.max(.1,availableLateral);
  const rearUtilization=Math.abs(rearLong)/Math.max(.1,tireLimit*this.rearLoad);
  const slipTarget=clamp((lateralUse-.88)*.75+Math.max(0,rearUtilization-.82)*Math.abs(this.lean)*.45,0,1);
  this.slip=approach(this.slip,slipTarget,dt*(slipTarget>this.slip?8:4));
  this.grip=clamp(1-this.slip*.72-(offroad?.22:0),.08,1);
  this.tireLoad=clamp(Math.hypot(longitudinalTire,actualLateral)/tireLimit,0,1.5);
  const yawTarget=actualLateral/Math.max(v,5);
  this.yawRate=approach(this.yawRate,yawTarget,dt*(7+this.handling));
  const forwardSpeed=v*Math.max(.7,Math.cos(this.heading));
  this.heading=clamp(this.heading+(this.yawRate-curvature*forwardSpeed)*dt,-.48,.48);
  // Slip is a rear-tire loss of alignment, strongest under braking while banked.
  const rearSlide=-Math.sign(this.lean)*this.slip*this.braking*Math.min(v*.018,1.25);
  const headingVelocity=-Math.sin(this.heading)*v+rearSlide;
  // Impacts add velocity; the tires progressively absorb that lateral impulse.
  const impulse=this.lateralSpeed-headingVelocity;
  this.lateralSpeed=headingVelocity+impulse*Math.exp(-dt*16*this.grip);
  this.x+=this.lateralSpeed*dt;
  this.speed=Math.max(0,v+acceleration*dt);this.distance+=Math.max(0,this.speed*Math.cos(this.heading))*dt;
  // Slip scores style, but costs real speed/grip: there is no free exit boost.
  const wasDrifting=this.drifting;this.drifting=this.slip>.13&&Math.abs(this.lean)>.18&&this.braking>.25&&this.speed>19&&!offroad;
  if(this.drifting){this.driftCharge+=dt;this.score+=dt*22;}
  else if(wasDrifting&&this.driftCharge>.35){this.say('CLEAN RECOVERY  ·  GRIP RESTORED',.7);this.options.onEvent?.({type:'drift'});this._addFlow(10,'drift');this.driftCharge=0;}
  this.driftBoost=0;
  // Model-space animation channels are physical responses, separate from camera effects.
  this.suspensionFront=approach(this.suspensionFront,(this.frontLoad-.46)*.16,dt*11);
  this.suspensionRear=approach(this.suspensionRear,(this.rearLoad-.54)*.14,dt*10);
  this.wheelie=approach(this.wheelie,this.boosting?clamp((.17-this.frontLoad)*1.25,0,.12):0,dt*8);
  this.pitch=approach(this.pitch,-longitudinalTire*.008-this.wheelie,dt*7);
  this.steeringAngle=clamp(Math.atan(wheelbase*this.yawRate/Math.max(v,3))-this.leanRate*.035,-.24,.24);
  // Six-speed gearbox with a short torque interruption during an automatic shift.
  this.shiftTimer=Math.max(0,this.shiftTimer-dt);
  const gearSpeeds=[13,23,34,45,57,75];let nextGear=this.gear;
  if(v>gearSpeeds[this.gear-1]&&this.gear<6)nextGear++;
  else if(this.gear>1&&v<gearSpeeds[this.gear-2]*.79)nextGear--;
  if(nextGear!==this.gear){this.gear=nextGear;this.shiftTimer=.105;this.options.onEvent?.({type:'shift',gear:this.gear});}
  const lower=this.gear===1?0:gearSpeeds[this.gear-2]*.66;
  this.rpm=approach(this.rpm,clamp(2800+(v-lower)/Math.max(4,gearSpeeds[this.gear-1]-lower)*8700,1600,12500),dt*10);
  this.wallCooldown=Math.max(0,this.wallCooldown-dt);
  if(Math.abs(this.x)>9.1){this.x=clamp(this.x,-9.1,9.1);this.heading=-this.heading*.35;this.lateralSpeed=-this.lateralSpeed*.25;if(this.wallCooldown===0){this.speed*=.78;this.wallCooldown=1.5;this.damage(12,'BARRIER HIT');this._spark(this.x,this.distance,'impact');}}
  if(offroad&&this.speed>32){this.health=Math.max(0,this.health-dt*.65);this.sectorClean=false;this.offRoadTimer+=dt;if(this.offRoadTimer>1.5){this.say('LOW GRIP  ·  RETURN TO ASPHALT',.7);this.offRoadTimer=0;}}else this.offRoadTimer=0;
 }
 _updateRivals(dt){
  this.draftCharge=0;
  const pitchEase=1-Math.exp(-dt*7),frontEase=1-Math.exp(-dt*11),rearEase=1-Math.exp(-dt*10);
  for(const r of this.rivals){for(const key of ['hit','attack','attackCooldown','collisionCooldown'])r[key]=Math.max(0,r[key]-dt);
   const previousZ=r.z,previousX=r.x;
   r.recoverTimer=Math.max(0,(r.recoverTimer||0)-dt);
   if(r.down>0){
    r.pendingStrike=null;r.down=Math.max(0,r.down-dt);r.speed=Math.max(0,r.speed-8*dt);r.z+=r.speed*dt;r.lateralSpeed=approach(r.lateralSpeed||0,0,dt*4);r.x=clamp(r.x+r.lateralSpeed*dt,-6.5,6.5);r.recovery=clamp(1-r.down/.9,0,1);
    if(r.down===0){r.hp=100;r.recovery=1;r.recoverTimer=1.2;r.attackCooldown=Math.max(r.attackCooldown,2);r.collisionCooldown=Math.max(r.collisionCooldown,1.2);r.planTimer=0;}
    continue;
   }
   const gap=r.z-this.distance,road=this.track(r.z,this.circuit),curveAhead=this.track(r.z+65,this.circuit).curve;
   if(gap>3&&gap<22&&Math.abs(r.x-this.x)<1.15&&this.speed>28){r.draftTime=Math.min(1.5,(r.draftTime||0)+dt);this.draftCharge=Math.max(this.draftCharge,Math.min(1,r.draftTime/.9));}
   else if(gap>22||(Math.abs(r.x-this.x)>3&&gap>0))r.draftTime=Math.max(0,(r.draftTime||0)-dt*.4);
   if(!r.passAwarded&&gap<-.8&&gap>-8&&(r.draftTime||0)>=.9&&Math.abs(r.x-this.x)>.9&&this.time-this.lastDamageTime>1){r.passAwarded=true;this.perfectPasses++;this.score+=180;this.nitro=Math.min(100,this.nitro+12);this.say('SLINGSHOT PASS  +180',.9);this.options.onEvent?.({type:'perfectPass',side:r.x<this.x?-1:1});this._addFlow(28,'perfectPass');this._challengeAction('perfectPass');}
   r.planTimer=Math.max(0,(r.planTimer||0)-dt);
   if(r.planTimer===0){
    r.planTimer=.28+hash(r.id+12)*.14;
    const fighting=Math.abs(gap)<8&&r.aggression>.7&&r.attackCooldown<1.1;
    const choices=[-4.5,-2.9,-1.45,0,1.45,2.9,4.5];if(fighting)choices.push(clamp(this.x+(r.x>this.x?1.5:-1.5),-5.4,5.4));
    let best=Infinity,selected=r.x;
    for(const lane of choices){let cost=Math.abs(lane-r.x)*.18+Math.abs(lane-r.baseLane)*.055+Math.abs(lane-(r.laneTarget??r.x))*.1;
     if(fighting)cost+=Math.abs(Math.abs(lane-this.x)-1.5)*.8;
     for(const car of this.traffic){const d=car.z-r.z,closing=Math.max(4,r.speed-car.speed),ttc=d/closing;if(d>-5&&ttc<3.8&&Math.abs(car.x-lane)<1.9)cost+=Math.max(0,4.1-ttc)*5;}
     for(const other of this.rivals){if(other===r||other.down>0)continue;const d=other.z-r.z;if(d>-2&&d<26&&Math.abs(other.x-lane)<1.05)cost+=(27-d)*.17;}
     if(Math.abs(gap)<5&&Math.abs(lane-this.x)<.95)cost+=8;
     if(cost<best){best=cost;selected=lane;}
    }r.laneTarget=selected;
   }
   const laneForce=clamp(((r.laneTarget??r.baseLane)-r.x)*2.6-(r.lateralSpeed||0)*3.25,-5.8,5.8);r.lateralSpeed=(r.lateralSpeed||0)+laneForce*dt;r.x=clamp(r.x+r.lateralSpeed*dt,-6.1,6.1);r.lean=approach(r.lean,Math.atan((road.curve*r.speed*r.speed-laneForce)/9.81),dt*5);r.heading=-Math.atan2(r.lateralSpeed,Math.max(8,r.speed));r.yawRate=road.curve*r.speed-laneForce/Math.max(8,r.speed);
   const cornerSpeed=Math.sqrt(8.7/Math.max(.0001,Math.abs(curveAhead)));let target=Math.min(cornerSpeed,r.baseSpeed+(gap<-85?2.3:gap>65?-5.2:0));if(r.hit>0)target*=.94;
   for(const car of this.traffic){const d=car.z-r.z;if(d>0&&d<Math.max(22,(r.speed-car.speed)*2.4)&&Math.abs(car.x-r.x)<1.5)target=Math.min(target,car.speed+Math.max(0,d-8)*.38);}
   for(const other of this.rivals){const d=other.z-r.z;if(other!==r&&other.down<=0&&d>0&&d<8&&Math.abs(other.x-r.x)<.85)target=Math.min(target,other.speed*.97);}
   r.braking=target<r.speed-1?.5:0;const accel=clamp((target-r.speed)*.75,-9,7.5);r.speed=Math.max(0,r.speed+accel*dt);r.z+=r.speed*Math.cos(r.heading)*dt;
   r.steer=clamp(-laneForce/5.8,-1,1);r.steeringAngle=clamp(Math.atan(1.48*r.yawRate/Math.max(8,r.speed)),-.24,.24);r.pitch=(r.pitch||0)+(-accel*.008-(r.pitch||0))*pitchEase;r.suspensionFront=(r.suspensionFront||0)+(-accel*.0068-(r.suspensionFront||0))*frontEase;r.suspensionRear=(r.suspensionRear||0)+(accel*.006-(r.suspensionRear||0))*rearEase;
   if(r.finishedAt==null&&previousZ<this.rules.length&&r.z>=this.rules.length)r.finishedAt=this.time-dt+dt*clamp((this.rules.length-previousZ)/Math.max(1e-9,r.z-previousZ),0,1);
   const endGap=r.z-this.distance;
   if(r.pendingStrike){r.pendingStrike.remaining-=dt;if(r.pendingStrike.remaining<=0){const side=r.pendingStrike.side;r.pendingStrike=null;if(Math.hypot(endGap/2.6,(r.x-this.x)/1.95)<1&&(Math.sign(this.x-r.x)===side||Math.abs(this.x-r.x)<.3)&&r.hit===0&&r.recoverTimer===0){this.damage(8,'RIVAL ATTACK  ·  FIGHT BACK',{kind:'rival',side:r.x<this.x?-1:1});this._spark(this.x,this.distance,'hit');}}}
   if(r.collisionCooldown===0&&r.recoverTimer===0&&sweptContact(previousX-this.previousX,previousZ-this.previousDistance,r.x-this.x,endGap,.78,1.65)>=0){r.collisionCooldown=1.1;this.damage(7,'BIKE CONTACT',{kind:'scrape',side:r.x<this.x?-1:1});this.lateralSpeed+=(r.x>this.x?-1:1)*2;r.speed*=.92;this._spark(this.x,this.distance,'scrape');}
   if(r.recoverTimer===0&&Math.hypot(endGap/3.1,(r.x-this.x)/2.15)<1&&r.attackCooldown===0){r.attackCooldown=2.9+(1-r.aggression)*2;r.attack=.95;r.attackContact=this.assists.windup/.95;r.attackSide=this.x<r.x?-1:1;r.pendingStrike={remaining:this.assists.windup,side:r.attackSide,duration:this.assists.windup};this.options.onEvent?.({type:'rivalWindup',side:r.x<this.x?-1:1,name:r.name});}
  }
 }
 _updateTraffic(dt){
  for(let i=0;i<this.traffic.length;i++){const t=this.traffic[i],previousGap=t.z-this.previousDistance;t.z+=t.speed*dt;t.collisionCooldown=Math.max(0,t.collisionCooldown-dt);const dz=t.z-this.distance,width=t.type==='van'?1.15:1.02,contact=sweptContact(t.x-this.previousX,previousGap,t.x-this.x,dz,width,2.5);
   if(contact>=0&&t.collisionCooldown===0){t.collisionCooldown=1.7;t.collided=true;this.damage(t.type==='van'?27:21,'TRAFFIC HIT',{kind:'traffic',side:this.x<t.x?1:-1});this.speed*=.58;this.lateralSpeed+=(this.x<t.x?-1:1)*3.5;this.crash=.4;this._spark(this.x,this.distance,'impact');}
   if(previousGap>=0&&dz<0&&!t.near&&!t.collided&&this.speed>38){const crossing=previousGap/Math.max(1e-9,previousGap-dz),clearance=Math.abs(t.x-(this.previousX+(this.x-this.previousX)*crossing));if(clearance>width+.08&&clearance<2.05){t.near=true;this.nearMisses++;this.nitro=Math.min(100,this.nitro+7);this.score+=120;this.say('NEAR MISS  +120',.8);this.options.onEvent?.({type:'nearMiss',side:t.x<this.x?-1:1});this._addFlow(20,'nearMiss');this._challengeAction('nearMiss');}}
   if(dz<-35){const next=this._newTraffic(t.id+15,this.distance+450+hash(t.id+1)*360);this.traffic[i]=next;}
  }
 }
 _updatePickups(){for(let i=0;i<this.pickups.length;i++){const p=this.pickups[i],gap=p.z-this.distance;if(p.active&&sweptContact(p.x-this.previousX,p.z-this.previousDistance,p.x-this.x,gap,1.25,2.2)>=0){p.active=false;if(p.type==='repair'){this.health=Math.min(100,this.health+25);this.say('REPAIR  +25 INTEGRITY',1);}else{this.nitro=Math.min(100,this.nitro+35);this.say('NITRO CELL  +35',1);}this.score+=75;this.options.onEvent?.({type:'pickup',kind:p.type});}if(gap<-12)this.pickups[i]=this._newPickup(p.id+10,this.distance+600+hash(p.id+3)*420);}}
 damage(amount,message,{kind='impact',side=0}={}){if(this.invincible>0)return;const injury=amount*this.armor*this.assists.damage;this.health=Math.max(0,this.health-injury);this.hit=.65;this.invincible=.7;this.sectorClean=false;this.lastDamageTime=this.time;this.flowCharge=Math.max(0,this.flowCharge-25);this.flowChain=0;this.flowTimer=0;this.overdriveTime=Math.max(0,this.overdriveTime-1);for(const rival of this.rivals)rival.draftTime=0;this.draftCharge=0;this.impact={kind:'damage',side,strength:clamp(amount/24,.3,1),timer:.3};this.say(message,.8);this.options.onEvent?.({type:'damage',amount:injury,kind,side,strength:this.impact.strength});}
 _updateSectors(previousDistance,dt){
  while(this.sectorSplits.length<3&&this.distance>=(this.sectorSplits.length+1)*this.rules.length/3){
   const index=this.sectorSplits.length+1,boundary=index*this.rules.length/3,fraction=clamp((boundary-previousDistance)/Math.max(.001,this.distance-previousDistance),0,1),at=this.time-dt+fraction*dt,time=at-this.sectorStartTime,personal=Number(this.config.sectorBests?.[index-1]),reference=personal>0?personal:this.rules.target/3,clean=this.sectorClean,bonus=clean?250:0;
   this.sectorSplits.push(time);this.sectorStartTime=at;this.lastSector={index,time,delta:time-reference,reference:personal>0?'best':'target',clean,bonus};if(clean){this.cleanSectors++;this.score+=bonus;this.nitro=Math.min(100,this.nitro+10);}this.sectorClean=true;
   this.say(clean?`SECTOR ${index}  ·  CLEAN RUN +250`:`SECTOR ${index}  ·  ${time.toFixed(2)}s`,1.5);this.options.onEvent?.({type:'sector',...this.lastSector});
  }
 }
 _cornerAdvice(){
  let best={curve:0,distance:60};for(const distance of [40,70,110,150]){const curve=this.track(this.distance+distance,this.circuit).curve;if(Math.abs(curve)>Math.abs(best.curve))best={curve,distance};}
  const severity=clamp((Math.abs(best.curve)-.00065)/.0028,0,1),recommended=Math.min(this.topSpeed+10,Math.sqrt(8.4/Math.max(.0001,Math.abs(best.curve))));return{direction:severity>.08?-Math.sign(best.curve):0,recommendedSpeed:Math.round(recommended*3.6/5)*5,distance:best.distance,severity,brake:this.speed>recommended+1.5,assisted:this.assists.brakeAssist};
 }
 _threat(){const r=this.rivals.filter(r=>r.down<=0&&r.pendingStrike&&Math.abs(r.z-this.distance)<5&&Math.abs(r.x-this.x)<3).sort((a,b)=>a.pendingStrike.remaining-b.pendingStrike.remaining)[0];return r?{side:r.x<this.x?-1:1,remaining:Math.max(0,r.pendingStrike.remaining),progress:clamp(1-r.pendingStrike.remaining/(r.pendingStrike.duration||this.assists.windup),0,1),name:r.name}:null;}
 _sectorState(){const index=Math.min(3,this.sectorSplits.length+1);return{index,total:3,progress:this.sectorSplits.length===3?1:clamp((this.distance-(index-1)*this.rules.length/3)/(this.rules.length/3),0,1),time:this.sectorSplits.length===3?this.sectorSplits[2]:Math.max(0,this.time-this.sectorStartTime),last:this.lastSector,splits:[...this.sectorSplits]};}
 position(){let position=1;for(const r of this.rivals)if(this.distance>=this.rules.length?r.finishedAt!=null&&r.finishedAt<this.time-1e-9||r.z>this.distance+1e-8:r.z>this.distance)position++;return position;}
 target(){const w=WEAPONS[this.weapon],r=this._selectTarget(w,1.5);if(!r)return null;const inRange=this._withinReach(r,w);return{name:r.name,hp:Math.max(0,r.hp),side:r.x<this.x?-1:1,inRange,cooldown:this.attackCooldown,ready:inRange&&this.attackCooldown===0,attacking:!!r.pendingStrike,windup:r.pendingStrike?clamp(1-r.pendingStrike.remaining/(r.pendingStrike.duration||this.assists.windup),0,1):0};}
 emit(){const progress=clamp(this.distance/this.rules.length,0,1),target=this.target(),objective=this.mode==='elimination'?`${this.takedowns} / 5 TAKEDOWNS`:this.mode==='timeattack'?`${Math.max(0,Math.ceil(this.rules.target-this.time))}s REMAINING`:'FINISH FIRST';this.options.onUpdate?.({speed:Math.round(this.speed*3.6),position:this.position(),totalRacers:this.rivals.length+1,progress,health:Math.max(0,Math.round(this.health)),nitro:Math.round(this.nitro),takedowns:this.takedowns,time:this.time,lap:1,totalLaps:1,message:this.message,paused:this.paused,countdown:this.countdown,combo:this.combo,maxCombo:this.maxCombo,nearMisses:this.nearMisses,drifting:this.drifting,drafting:this.drafting,draftCharge:this.draftCharge,target,mode:this.mode,objective,score:Math.round(this.score),targetTime:this.rules.target,boosting:this.boosting,gear:this.gear,rpm:Math.round(this.rpm),lean:this.lean,heading:this.heading,yawRate:this.yawRate,slip:this.slip,grip:this.grip,frontLoad:this.frontLoad,rearLoad:this.rearLoad,suspensionFront:this.suspensionFront,suspensionRear:this.suspensionRear,pitch:this.pitch,wheelie:this.wheelie,braking:this.braking,throttle:this.throttle,surface:this.surface,tireLoad:this.tireLoad,difficulty:this.difficulty,sector:this._sectorState(),corner:this._cornerAdvice(),threat:this._threat(),perfectPasses:this.perfectPasses,cleanSectors:this.cleanSectors,impact:{...this.impact},flow:this._flowState(),district:getCircuitDistrict(this.distance,this.circuit),courseEvent:this._courseState(),upcomingEvent:this._upcomingEvent(),challengesCompleted:this.challengesCompleted,overdriveUses:this.overdriveUses});}
 frame(){return{distance:this.distance,x:this.x,speed:this.speed,lean:this.lean,leanRate:this.leanRate,steer:this.steer,steeringAngle:this.steeringAngle,heading:this.heading,yawRate:this.yawRate,slip:this.slip,grip:this.grip,frontLoad:this.frontLoad,rearLoad:this.rearLoad,suspensionFront:this.suspensionFront,suspensionRear:this.suspensionRear,pitch:this.pitch,wheelie:this.wheelie,gear:this.gear,rpm:this.rpm,braking:this.braking,throttle:this.throttle,surface:this.surface,time:this.time,boosting:this.boosting,drifting:this.drifting,drafting:this.drafting,draftCharge:this.draftCharge,hit:this.hit,attack:this.attackTimer/WEAPONS[this.weapon].duration,attackSide:this.attackSide,crash:this.crash,countdown:this.countdown,curve:this.track(this.distance,this.circuit).curve,rivals:this.rivals.map(r=>({...r,attack:r.attack/.95})),traffic:this.traffic,pickups:this.pickups,particles:this.sparkEvents,sector:this._sectorState(),corner:this._cornerAdvice(),threat:this._threat(),impact:{...this.impact},checkpoints:[1,2].map(index=>({distance:this.rules.length*index/3,index,passed:this.sectorSplits.length>=index})),finishDistance:this.rules.length,flow:this._flowState(),district:getCircuitDistrict(this.distance,this.circuit),courseEvent:this._courseState(),upcomingEvent:this._upcomingEvent()};}
 finish(finished,reason){if(this.finished)return;this.finished=true;this.running=false;const position=this.position(),objectiveComplete=finished&&(this.mode==='elimination'?this.takedowns>=5:this.mode==='timeattack'?this.time<=this.rules.target:position===1),score=Math.round(this.score+(finished?(this.rivals.length+2-position)*450:0)+this.health*8+(objectiveComplete?1200:0));this.emit();this.options.onFinish?.({position,time:this.time,takedowns:this.takedowns,maxCombo:this.maxCombo,nearMisses:this.nearMisses,score,finished,circuit:this.circuit,mode:this.mode,objectiveComplete,reason,targetTime:this.rules.target,difficulty:this.difficulty,sectorSplits:[...this.sectorSplits],bestSector:this.sectorSplits.length?Math.min(...this.sectorSplits):null,cleanSectors:this.cleanSectors,perfectPasses:this.perfectPasses,challengesCompleted:this.challengesCompleted,overdriveUses:this.overdriveUses,maxFlowChain:this.maxFlowChain});}
 pause(){if(this.running&&!this.paused){this.paused=true;this.input={};this.options.onPause?.(true);}}
 resume(){if(this.running&&this.paused){this.paused=false;this.options.onPause?.(false);}}
 destroy(){this.running=false;this.input={};}
}
