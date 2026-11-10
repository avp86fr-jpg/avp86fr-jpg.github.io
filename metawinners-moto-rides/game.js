import { RaceScene } from './scene.js';
import { RaceSimulation } from './simulation.js';
import { RaceAudio } from './audio.js';

const KEY_ACTIONS={ArrowLeft:'left',a:'left',A:'left',ArrowRight:'right',d:'right',D:'right',ArrowDown:'brake',s:'brake',S:'brake',Shift:'boost',' ':'attack',q:'attackLeft',Q:'attackLeft',e:'attackRight',E:'attackRight'};
const STEP=1/60;
const SMOOTH=['distance','x','speed','lean','leanRate','steer','steeringAngle','heading','yawRate','suspensionFront','suspensionRear','pitch','wheelie','time'];
const ACTORS=['rivals','traffic'];
const blend=(a,b,t)=>Number.isFinite(a)&&Number.isFinite(b)?a+(b-a)*t:b;
/** Copy moving actors into reusable buffers; transient effects belong to the current frame. */
export function copyRaceFrame(source,result={}){
 const rivals=result.rivals||[],traffic=result.traffic||[];
 for(const name in source)result[name]=source[name];result.rivals=rivals;result.traffic=traffic;
 for(const key of ACTORS){const actors=source[key]||[],out=result[key];for(let i=0;i<actors.length;i++){
  const actor=actors[i];let target=out[i];if(!target)target=out[i]={};
  if(target.id!==actor.id)for(const name of Object.keys(target))delete target[name];
  for(const name in actor)target[name]=actor[name];
 }out.length=actors.length;}
 return result;
}
function snapshot(sim,result){return copyRaceFrame(sim.frame(),result);}
/** Render between 60 Hz physics steps. A supplied output buffer is borrowed, not retained. */
export function interpolateRaceFrames(previous,current,alpha,result={}){
 copyRaceFrame(current,result);if(!previous)return result;
 alpha=Number.isFinite(alpha)?Math.max(0,Math.min(1,alpha)):1;
 for(const key of SMOOTH)if(Number.isFinite(previous[key])&&Number.isFinite(current[key]))result[key]=previous[key]+(current[key]-previous[key])*alpha;
 for(const key of ACTORS){const before=previous[key]||[],actors=current[key]||[];for(let i=0;i<actors.length;i++){
  const actor=actors[i];let old=before[i];
  if(old?.id!==actor.id){old=undefined;for(let j=0;j<before.length;j++)if(before[j].id===actor.id){old=before[j];break;}}
  if(!old||Math.abs(actor.z-old.z)>15)continue;
  // Fixed field accesses avoid dynamic property lookups in the hot interpolation loop.
  const out=result[key][i];out.x=blend(old.x,actor.x,alpha);out.z=blend(old.z,actor.z,alpha);
  if(actor.lean!==undefined)out.lean=blend(old.lean,actor.lean,alpha);
  if(actor.heading!==undefined)out.heading=blend(old.heading,actor.heading,alpha);
  if(actor.steeringAngle!==undefined)out.steeringAngle=blend(old.steeringAngle,actor.steeringAngle,alpha);
  if(actor.pitch!==undefined)out.pitch=blend(old.pitch,actor.pitch,alpha);
  if(actor.suspensionFront!==undefined)out.suspensionFront=blend(old.suspensionFront,actor.suspensionFront,alpha);
  if(actor.suspensionRear!==undefined)out.suspensionRear=blend(old.suspensionRear,actor.suspensionRear,alpha);
  if(actor.recovery!==undefined)out.recovery=blend(old.recovery,actor.recovery,alpha);
 }}
 return result;
}

export class MotoGame {
 constructor(canvas,options={}){
  this.canvas=canvas;this.options=options;this.audio=options.audio||new RaceAudio();this.ownsAudio=!options.audio;
  this.frame=0;this.lastFrame=0;this.accumulator=0;this.lastCount=4;this.destroyed=false;this.cameraMode='chase';
  this._keyboardPressed=new Map();this._controlInput={};this._renderState={};this._tick=time=>this._loop(time);this._inLoop=false;
  this.scene=options.sceneFactory?options.sceneFactory(canvas):new RaceScene(canvas,{quality:options.quality||'auto',circuit:options.circuit||'vegas',onError:error=>{this.pause();this.options.onError?.(error);}});
  this.sim=new RaceSimulation({
   onUpdate:state=>{
    this.options.onUpdate?.(state);
    const count=Math.ceil(state.countdown);if(count!==this.lastCount&&count>=0){this.lastCount=count;this.audio.tone(count>0?440:880,.13,'sine',.12);}
   },
   onFinish:result=>{this.audio.silence();this.audio.setMode?.('results');this.audio.event({type:'finish',won:result.objectiveComplete});this.options.onFinish?.(result);},
   onPause:paused=>{
    this.input={};
    if(paused){cancelAnimationFrame(this.frame);this.frame=0;this.audio.silence();this.audio.setMode?.('paused');}
    else{this.lastFrame=0;this.accumulator=0;this.scene.renderBudget?.reset();this._resetFrames();this.audio.setMode?.('race');this.audio.unlock();this._scheduleFrame();}
    this.options.onPause?.(paused);
   },
   onEvent:event=>{this.audio.event(event);this.scene.onEvent?.(event);this.options.onEvent?.(event);}
  });
  this._keyDown=event=>{
   if(!this.running||event.defaultPrevented||event.target?.closest?.('input, select, textarea, [contenteditable="true"], [role="slider"]'))return;
   const dialog=document.querySelector?.('dialog[open]');
   if(dialog&&!(dialog.id==='pause-modal'&&this.paused&&['p','P'].includes(event.key)))return;
   if(['Escape','p','P'].includes(event.key)){event.preventDefault();if(!event.repeat)this.paused?this.resume():this.pause();return;}
   if(this.paused)return;
   if(event.key==='c'||event.key==='C'){event.preventDefault();if(!event.repeat)this.cameraMode=this.cameraMode==='close'?'chase':'close';return;}
   if(event.key===' '&&event.target?.closest?.('button, a, [role="button"]'))return;
   const action=KEY_ACTIONS[event.key];if(action){event.preventDefault();const key=event.code||event.key.toLowerCase();if(!this._keyboardPressed.has(key)){this._keyboardPressed.set(key,action);this._syncInput(action);this._unlockOnControl(true);}}
  };
  this._keyUp=event=>{const key=event.code||event.key.toLowerCase(),action=this._keyboardPressed.get(key);if(action){if(this.running)event.preventDefault();this._keyboardPressed.delete(key);this._syncInput(action);}};
  this._blur=()=>{this.input={};this.pause();};
  this._visibility=()=>{if(document.hidden)this._blur();};this._resize=()=>this.resize();
  window.addEventListener('keydown',this._keyDown);window.addEventListener('keyup',this._keyUp);window.addEventListener('blur',this._blur);window.addEventListener('resize',this._resize);document.addEventListener('visibilitychange',this._visibility);
  this._contextLost=event=>{event.preventDefault();this.pause();this.options.onError?.(new Error('The graphics context was interrupted. Restart the race to reconnect.'));};canvas.addEventListener?.('webglcontextlost',this._contextLost);
 }
 get running(){return !!this.sim?.running;}
 get paused(){return !!this.sim?.paused;}
 get input(){return this.sim?.input||{};}
 set input(value){this._keyboardPressed.clear();this._controlInput={...value};if(this.sim)this.sim.input={...value};}
 _resetFrames(){this._currentState=snapshot(this.sim,this._currentState);this._previousState=copyRaceFrame(this._currentState,this._previousState===this._currentState?{}:this._previousState);}
 _scheduleFrame(){if(!this.destroyed&&this.running&&!this.paused&&!this.frame&&!this._inLoop)this.frame=requestAnimationFrame(this._tick);}
 start(config={}){
  if(this.destroyed)throw new Error('This race has been closed.');cancelAnimationFrame(this.frame);this.frame=0;this.input={};
  this.audio.enable(config.sound===true);this.setAudioLevels(config.audio||{});this.audio.setMode?.('race');
  this.lastCount=4;this.lastFrame=0;this.accumulator=0;this.cameraMode=config.camera==='close'?'close':'chase';
  this.scene.setCircuit(config.circuit||'vegas');this.scene.setRider(config.rider||{id:'chief',color:'#a2b66e'},config.weapon||'bat');
  this.sim.start(config);this._resetFrames();
  this.options.onPause?.(false);this.resize();const state=copyRaceFrame(this._currentState,this._renderState);state.cameraMode=this.cameraMode;this.scene.update(state,0);
  this.canvas.focus?.({preventScroll:true});this._scheduleFrame();return this;
 }
 _loop(timestamp){
  this.frame=0;if(this.destroyed||!this.running||this.paused)return;this._inLoop=true;
  try{
  const elapsed=this.lastFrame?Math.min(.08,Math.max(0,(timestamp-this.lastFrame)/1000)):STEP;this.lastFrame=timestamp;
  if(this.running&&!this.paused){
   this.accumulator+=elapsed;
   while(this.accumulator>=STEP&&this.running&&!this.paused&&!this.destroyed){const reusable=this._previousState;this._previousState=this._currentState;this.sim.step(STEP);if(this.destroyed)return;this._currentState=snapshot(this.sim,reusable);this.accumulator-=STEP;}
   if(this.destroyed||this.paused)return;
   if(this.running)this.audio.update(this.sim);else this.audio.silence();
   const state=this.running?interpolateRaceFrames(this._previousState,this._currentState,this.accumulator/STEP,this._renderState):copyRaceFrame(this._currentState,this._renderState);
   state.cameraMode=this.cameraMode;this.scene.update(state,elapsed);
  }
  }catch(error){this.pause();this.options.onError?.(error);}finally{this._inLoop=false;this._scheduleFrame();}
 }
 resize(){this.scene?.resize();}
 _unlockOnControl(value){if(value&&this.audio.enabled&&(this.audio.ctx&&this.audio.ctx.state!=='running'||this.audio.needsGesture))this.audio.unlock();}
 _syncInput(action){let keyboard=false;for(const held of this._keyboardPressed.values())if(held===action){keyboard=true;break;}const control=this._controlInput[action]??false;this.sim.setInput(action,action==='brake'?Math.max(Number(control)||0,keyboard?1:0):keyboard?true:control);}
 setInput(action,value){if(action==='nitro')action='boost';if(this.destroyed||this.paused&&value)return;this._unlockOnControl(value);this._controlInput[action]=value;this._syncInput(action);}
 attack(side=0){this.unlockAudio();return this.sim.attack(side);}
 pause(){this.sim?.pause();}
 resume(){this.sim?.resume();}
 unlockAudio(){this.audio.unlock();}
 setAudioLevels({music,effects}={}){if(Number.isFinite(music))this.audio.setMusicVolume?.(music);if(Number.isFinite(effects))this.audio.setEffectsVolume?.(effects);}
 setSound(enabled){this.audio.enable(enabled);if(this.paused||!this.running)this.audio.silence();}
 destroy(){
  if(this.destroyed)return;this.destroyed=true;cancelAnimationFrame(this.frame);this.sim.destroy();this.scene.dispose();
  if(this.ownsAudio)this.audio.dispose();else this.audio.silence();
  window.removeEventListener('keydown',this._keyDown);window.removeEventListener('keyup',this._keyUp);window.removeEventListener('blur',this._blur);window.removeEventListener('resize',this._resize);document.removeEventListener('visibilitychange',this._visibility);this.canvas.removeEventListener?.('webglcontextlost',this._contextLost);
 }
}
