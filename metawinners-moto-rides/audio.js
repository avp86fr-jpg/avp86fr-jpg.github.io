/** MetaWinners audio director: recorded motorcycle layers + licensed metal soundtrack.
 * Sources and adapted-recording licenses: assets/audio/CREDITS.txt.
 * The singleton survives races; pass it to MotoGame as options.audio.
 */
const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,Number(x)||0));
const smooth=(a,b,x)=>{const t=clamp((x-a)/(b-a));return t*t*(3-2*t);};
const asset=name=>new URL('./assets/audio/'+name,import.meta.url).href;
export const AUDIO_TRACKS={
 menu:{title:'Once More [Metal]',artist:'nene',file:'once-more-metal.mp3',license:'CC0',url:'https://opengameart.org/content/once-more-metal'},
 race:{title:'Fight Them Until We Can’t',artist:'Zander Noriega',file:'fight-them-until-we-cant.mp3',license:'CC BY 3.0',url:'https://opengameart.org/content/fight-them-until-we-cant'}
};
export class RaceAudio {
 constructor(options={}){
  this.options=options;this.ctx=null;this.nodes=null;this.enabled=false;this.active=true;this.mode='menu';this.musicVolume=.6;this.effectsVolume=.8;this.disposed=false;this.needsGesture=false;
  this.buffers=new Map();this.loading=null;this.tracks=new Map();this.voices=new Set();this.timers=new Set();this.lastGear=0;this.lastBoost=false;this.lastSpeed=0;this.lastWhoosh=-99;this.duckUntil=0;this.enginePlaying=false;this.lastTelemetry=null;this.resuming=null;this.targets=new WeakMap();
 }
 _target(param,value,tau=.045){if(param&&this.ctx&&this.targets.get(param)!==value){this.targets.set(param,value);param.setTargetAtTime(value,this.ctx.currentTime,tau);}}
 _refreshStatus(){const selected=this.tracks.get(this.mode==='menu'?'menu':'race');this.needsGesture=!!(this.enabled&&this.active&&(!this.ctx||this.ctx.state!=='running'||selected?.failed));}
 _later(fn,ms){const timer=setTimeout(()=>{this.timers.delete(timer);if(!this.disposed)fn();},ms);this.timers.add(timer);return timer;}
 _createGraph(){
  if(this.ctx||this.disposed)return;
  const Context=this.options.AudioContext||globalThis.AudioContext||globalThis.webkitAudioContext||globalThis.window?.AudioContext||globalThis.window?.webkitAudioContext;
  if(!Context)return;
  const c=this.ctx=new Context({latencyHint:'interactive'}),master=c.createGain(),compressor=c.createDynamicsCompressor(),effects=c.createGain(),music=c.createGain(),musicFilter=c.createBiquadFilter(),engine=c.createGain();
  master.gain.value=.78;effects.gain.value=this.effectsVolume;music.gain.value=0;engine.gain.value=0;compressor.threshold.value=-8;compressor.knee.value=8;compressor.ratio.value=5;compressor.attack.value=.003;compressor.release.value=.17;
  musicFilter.type='lowpass';musicFilter.frequency.value=18000;musicFilter.Q.value=.3;music.connect(musicFilter);musicFilter.connect(master);engine.connect(effects);effects.connect(master);master.connect(compressor);compressor.connect(c.destination);
  const engineFilter=c.createBiquadFilter();engineFilter.type='lowpass';engineFilter.frequency.value=2400;engineFilter.Q.value=.55;engineFilter.connect(engine);
  const growl=c.createOscillator(),sub=c.createOscillator(),growlGain=c.createGain(),subGain=c.createGain();
  const re=new Float32Array(25),im=new Float32Array(25);for(let i=1;i<25;i++)im[i]=(i%2?.8:.42)*Math.pow(i,-.88);growl.setPeriodicWave(c.createPeriodicWave(re,im));growl.frequency.value=60;sub.type='triangle';sub.frequency.value=30;growlGain.gain.value=0;subGain.gain.value=0;growl.connect(growlGain);growlGain.connect(engineFilter);sub.connect(subGain);subGain.connect(engine);growl.start();sub.start();
  const noise=this._noiseBuffer(2.5);this.buffers.set('noise',noise);
  const wind=this._noiseLoop(noise,'highpass',650,engine),skid=this._noiseLoop(noise,'bandpass',1600,engine),gravel=this._noiseLoop(noise,'lowpass',1250,engine);
  skid.filter.Q.value=1.8;wind.filter.Q.value=.2;gravel.filter.Q.value=.5;
  const skidTone=c.createOscillator(),skidToneGain=c.createGain();skidTone.type='sawtooth';skidTone.frequency.value=750;skidToneGain.gain.value=0;skidTone.connect(skidToneGain);skidToneGain.connect(skid.filter);skidTone.start();
  this.nodes={master,compressor,effects,music,musicFilter,engine,engineFilter,growl,growlGain,sub,subGain,wind,skid,gravel,skidTone,skidToneGain,recorded:[]};
  this._makeImpactBuffers();this._loadRecordings();this._createTracks();
  c.onstatechange=()=>{if(this.disposed)return;this._refreshStatus();if(c.state==='running')this._applyMix();};
 }
 _noiseBuffer(seconds){const c=this.ctx,b=c.createBuffer(1,Math.floor(c.sampleRate*seconds),c.sampleRate),d=b.getChannelData(0);let low=0;for(let i=0;i<d.length;i++){const white=Math.random()*2-1;low=.92*low+.08*white;d[i]=white*.55+low*1.4;}return b;}
 _noiseLoop(buffer,type,frequency,destination){const c=this.ctx,source=c.createBufferSource(),filter=c.createBiquadFilter(),gain=c.createGain();source.buffer=buffer;source.loop=true;filter.type=type;filter.frequency.value=frequency;gain.gain.value=0;source.connect(filter);filter.connect(gain);gain.connect(destination);source.start();return{source,filter,gain};}
 _makeImpactBuffers(){
  const c=this.ctx,make=(name,duration,fn)=>{const b=c.createBuffer(1,Math.ceil(c.sampleRate*duration),c.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=clamp(fn(i/c.sampleRate,Math.random()*2-1),-1,1);this.buffers.set(name,b);};
  make('thud',.48,(t,n)=>Math.sin(2*Math.PI*(75*t-39*t*t))*Math.exp(-t*16)*.7+n*Math.exp(-t*75)*.35);
  make('crunch',.65,(t,n)=>n*(Math.exp(-t*13)*.48+Math.exp(-Math.pow((t-.055)*42,2))*.22)+Math.sin(2*Math.PI*47*t)*Math.exp(-t*9)*.35);
  make('chain',.7,(t,n)=>{let v=0;for(const f of[740,1130,1720,2510,3390])v+=Math.sin(2*Math.PI*f*t)*.095*Math.exp(-t*(4+f/800));return v+n*Math.exp(-t*19)*.17;});
  make('click',.065,(t,n)=>n*Math.exp(-t*105)*.45+Math.sin(2*Math.PI*310*t)*Math.exp(-t*90)*.2);
  make('starter',.5,(t,n)=>(Math.sin(2*Math.PI*91*t)+Math.sin(2*Math.PI*183*t)*.35)*(.6+.4*Math.sin(2*Math.PI*26*t))*Math.exp(-t*5)*.19+n*Math.exp(-t*20)*.14);
 }
 async _loadRecordings(){
  if(this.loading)return this.loading;
  this.loading=Promise.allSettled([['idle','engine-idle.wav'],['load','engine-load.wav'],['clack','metal-clack.wav']].map(async([name,file])=>{
   const response=await (this.options.fetch||globalThis.fetch)(asset(file));if(!response.ok)throw new Error('Audio download failed: '+file);const bytes=await response.arrayBuffer();if(this.disposed)return;const buffer=await this.ctx.decodeAudioData(bytes);if(this.disposed)return;this.buffers.set(name,buffer);if(name==='idle'||name==='load')this._addEngineLayer(name,buffer);
  }));return this.loading;
 }
 _addEngineLayer(name,buffer){const c=this.ctx,s=c.createBufferSource(),g=c.createGain();s.buffer=buffer;s.loop=true;g.gain.value=0;s.connect(g);g.connect(this.nodes.engineFilter);s.start();this.nodes.recorded.push({name,source:s,gain:g});}
 _createTracks(){
  const AudioClass=this.options.Audio||globalThis.Audio;if(!AudioClass)return;
  for(const[name,track]of Object.entries(AUDIO_TRACKS)){
   const element=new AudioClass();element.src=asset(track.file);element.loop=true;element.preload='none';element.playsInline=true;element.setAttribute?.('playsinline','');element.volume=1;
   const source=this.ctx.createMediaElementSource(element),gain=this.ctx.createGain();gain.gain.value=0;source.connect(gain);gain.connect(this.nodes.music);this.tracks.set(name,{name,element,source,gain,primed:false,pending:false,failed:false});
  }
 }
 enable(value){if(this.disposed)return;this.enabled=!!value;if(this.enabled)this.unlock();else{this.silence();this._applyMix();for(const t of this.tracks.values())this._pauseTrack(t);}}
 unlock(){
  if(!this.enabled||!this.active||this.disposed)return;
  try{this._createGraph();if(!this.ctx){this.needsGesture=true;return;}
   // iOS can report "interrupted" after a call, lock screen, or app switch.
   // Keep resume() in the trusted gesture and share its pending request.
   if(this.ctx.state!=='running'&&this.ctx.state!=='closed'&&!this.resuming){
    this.resuming=Promise.resolve(this.ctx.resume()).then(()=>{if(!this.disposed){this._refreshStatus();this._applyMix();}},()=>{if(!this.disposed&&this.enabled&&this.active)this.needsGesture=true;}).finally(()=>{this.resuming=null;});
   }
   // Prime both media elements in the same trusted gesture. Safari can then resume either later.
   const selected=this.mode==='menu'?'menu':'race';
   for(const[name,t]of this.tracks)if(!t.primed||name===selected)this._playTrack(t,!t.primed);
   this._applyMix();this._refreshStatus();
  }catch{this.needsGesture=true;}
 }
 _playTrack(track,prime=false){
  if(!this.enabled||!this.active||this.disposed||track.pending)return;
  if(!prime&&!track.element.paused)return;
  const request=track.request=(track.request||0)+1;track.pending=true;track.primed=true;
  const failed=()=>{if(request!==track.request)return;track.pending=false;track.primed=false;track.failed=true;this._refreshStatus();};
  try{Promise.resolve(track.element.play()).then(()=>{
   if(request===track.request){track.pending=false;track.failed=false;}
   // A pending play can settle after pause(), a mode change or disposal.
   if(this.disposed||!this.enabled||!this.active||track.name!==(this.mode==='menu'?'menu':'race'))track.element.pause();
   if(request===track.request)this._refreshStatus();
  },failed);}catch{failed();}
 }
 _pauseTrack(track){track.request=(track.request||0)+1;track.pending=false;track.element.pause();}
 setMusicVolume(value){this.musicVolume=clamp(value);this._applyMix();}
 setEffectsVolume(value){this.effectsVolume=clamp(value);this._applyMix();}
 setActive(value){if(this.disposed)return;this.active=!!value;if(!this.ctx)return;if(!this.active){this.silence();for(const t of this.tracks.values())this._pauseTrack(t);this._target(this.nodes.master.gain,0,.025);Promise.resolve(this.ctx.suspend?.()).catch(()=>{});}else if(this.enabled){this.unlock();this._target(this.nodes.master.gain,.78,.07);}}
 setMode(mode){if(!['menu','race','paused','results'].includes(mode))return;const previous=this.mode;this.mode=mode;if(mode!=='race')this.silence();if(mode==='race'&&previous!=='paused'){this.lastGear=0;this.lastBoost=false;this.lastSpeed=0;}this._applyMix();this._refreshStatus();}
 _applyMix(){
  if(!this.nodes||this.disposed)return;const live=this.enabled&&this.active;
  this._target(this.nodes.master.gain,live?.78:0,.04);this._target(this.nodes.effects.gain,live?this.effectsVolume:0,.04);
  const selected=this.mode==='menu'?'menu':'race',musicLevel=this.mode==='paused'?.23:this.mode==='race'?.66:this.mode==='results'?.8:.82;
  const duck=this.ctx.currentTime<this.duckUntil?.48:1;this._target(this.nodes.music.gain,live?this.musicVolume*musicLevel*.58*duck:0,.12);this._target(this.nodes.musicFilter.frequency,this.mode==='paused'?1450:18000,.16);
  for(const[name,t]of this.tracks){this._target(t.gain.gain,live&&name===selected?1:0,.22);if(name===selected&&t.pauseTimer){clearTimeout(t.pauseTimer);this.timers.delete(t.pauseTimer);t.pauseTimer=null;}if(live&&name===selected&&t.primed)this._playTrack(t);else if(name!==selected&&!t.pauseTimer)t.pauseTimer=this._later(()=>{t.pauseTimer=null;if(name!==(this.mode==='menu'?'menu':'race'))this._pauseTrack(t);},850);}
 }
 silence(){this.enginePlaying=false;if(!this.nodes)return;this._target(this.nodes.engine.gain,0,.035);this.lastBoost=false;}
 update(sim){
  if(!this.enabled||!this.active||!this.nodes||this.disposed||this.mode!=='race')return;
  const n=this.nodes,t=this.ctx.currentTime,rpm=clamp(sim.rpm||1800,1400,13500),rev=clamp((rpm-1800)/10500),speed=clamp(sim.speed,0,110),load=clamp(sim.throttle??1),brake=clamp(sim.braking),slip=clamp(sim.slip),offroad=sim.surface==='shoulder'||sim.surface==='gravel'||sim.surface==='dirt',countdown=sim.countdown>0,shift=sim.shiftTimer>0?.3:1,mix=smooth(2400,5000,rpm);
  this.enginePlaying=true;this.lastTelemetry={rpm,load,brake,slip,speed,gear:sim.gear||1,offroad};this._target(n.engine.gain,countdown?.58:1,.045);
  for(const layer of n.recorded){const idle=layer.name==='idle';this._target(layer.source.playbackRate,idle?clamp(rpm/1850,.72,2.4):clamp(rpm/4900,.53,2.65),.055);this._target(layer.gain.gain,(idle?(.3*(1-mix)+.025):mix*(.24+.21*load))*shift*(countdown?.48:1),.035);}
  const recorded=n.recorded.length>0;this._target(n.growl.frequency,rpm/30,.045);this._target(n.sub.frequency,rpm/60,.045);this._target(n.growlGain.gain,(recorded?.012:.10)*(countdown?.3:1)*shift*(.5+load*.5),.025);this._target(n.subGain.gain,(.012+load*.015)*shift,.035);this._target(n.engineFilter.frequency,1200+rev*3800+load*1500,.07);
  this._target(n.wind.gain.gain,Math.pow(speed/100,1.8)*.11+(sim.boosting?.035:0),.12);this._target(n.wind.filter.frequency,500+speed*8,.15);this._target(n.skid.gain.gain,slip>.11&&speed>14?slip*.19:0,.05);this._target(n.skid.filter.frequency,900+speed*15,.07);this._target(n.skidTone.frequency,650+speed*12+Math.sin(t*19)*24,.03);this._target(n.skidToneGain.gain,slip>.18&&speed>14?slip*.045:0,.035);this._target(n.gravel.gain.gain,offroad?Math.min(.13,speed*.0025):0,.07);
  if(sim.boosting&&!this.lastBoost)this._noiseShot(.43,.15,0,'highpass',430);this.lastBoost=!!sim.boosting;this.lastGear=sim.gear||1;this.lastSpeed=speed;
  if(this.duckUntil&&t>this.duckUntil){this.duckUntil=0;this._applyMix();}
 }
 _voice(buffer,{gain=.3,rate=1,pan=0,duration,attack=.003,release=.08}={}){
  if(!buffer||!this.enabled||!this.active||!this.nodes||this.disposed)return null;
  this._reserveVoice();
  const c=this.ctx,source=c.createBufferSource(),envelope=c.createGain(),panner=c.createStereoPanner?.(),end=Math.min(duration||buffer.duration/rate,buffer.duration/rate),now=c.currentTime;
  source.buffer=buffer;source.playbackRate.value=rate;envelope.gain.setValueAtTime(0,now);envelope.gain.linearRampToValueAtTime(clamp(gain,0,.9),now+Math.min(attack,end*.2));envelope.gain.setValueAtTime(clamp(gain,0,.9),now+Math.max(attack,end-release));envelope.gain.linearRampToValueAtTime(0,now+end);
  source.connect(envelope);if(panner){panner.pan.value=clamp(pan,-1,1);envelope.connect(panner);panner.connect(this.nodes.effects);}else envelope.connect(this.nodes.effects);
  const voice={source,envelope,panner};this.voices.add(voice);source.onended=()=>this._cleanVoice(voice);source.start(now);source.stop(now+end+.015);return voice;
 }
 _reserveVoice(){if(this.voices.size>=20){const old=this.voices.values().next().value;try{old.source.stop();}catch{}this._cleanVoice(old);}}
 _cleanVoice(v){if(!v||!this.voices.has(v))return;this.voices.delete(v);v.source.onended=null;v.source.disconnect();v.envelope.disconnect();v.panner?.disconnect();v.filter?.disconnect();}
 _noiseShot(duration,gain,pan=0,type='bandpass',frequency=900){
  const voice=this._voice(this.buffers.get('noise'),{gain,pan,duration,attack:Math.min(.025,duration*.15),release:duration*.7});if(!voice)return;
  const filter=this.ctx.createBiquadFilter();filter.type=type;filter.frequency.value=frequency;filter.Q.value=.6;voice.source.disconnect();voice.source.connect(filter);filter.connect(voice.envelope);voice.filter=filter;
 }
 _duck(seconds=.32){if(!this.ctx)return;this.duckUntil=Math.max(this.duckUntil,this.ctx.currentTime+seconds);this._applyMix();if(this.duckTimer){clearTimeout(this.duckTimer);this.timers.delete(this.duckTimer);}this.duckTimer=this._later(()=>{this.duckTimer=null;if(this.ctx&&this.ctx.currentTime>=this.duckUntil){this.duckUntil=0;this._applyMix();}},Math.max(0,this.duckUntil-this.ctx.currentTime)*1000+50);}
 tone(freq,duration,type='sine',volume=.1,end=freq){
  if(!this.enabled||!this.active||!this.ctx||!this.nodes||this.disposed)return;
  this._reserveVoice();const c=this.ctx,o=c.createOscillator(),g=c.createGain(),now=c.currentTime;o.type=type;o.frequency.setValueAtTime(freq,now);o.frequency.exponentialRampToValueAtTime(Math.max(1,end),now+duration);g.gain.setValueAtTime(0,now);g.gain.linearRampToValueAtTime(volume,now+.004);g.gain.exponentialRampToValueAtTime(.001,now+duration);o.connect(g);g.connect(this.nodes.effects);o.start();o.stop(now+duration+.01);const voice={source:o,envelope:g};this.voices.add(voice);o.onended=()=>this._cleanVoice(voice);
 }
 event(e={}){
  if(!this.enabled||!this.active||!this.ctx||!this.nodes||this.disposed)return;const pan=clamp((e.side||0)*.65,-1,1),strength=clamp(e.strength??.7,.25,1),metal=this.buffers.get('clack')||this.buffers.get('chain');
  switch(e.type){
   case 'start':this._voice(this.buffers.get('starter'),{gain:.38});break;
   case 'ui':this._voice(this.buffers.get('click'),{gain:.2,rate:1.4});break;
   case 'shift':this._voice(metal,{gain:.1,rate:1.3,duration:.13});this._voice(this.buffers.get('thud'),{gain:.12,rate:1.4,duration:.1});break;
   case 'swing':this._noiseShot(e.weapon==='chain'?.29:.17,.13,pan,'bandpass',e.weapon==='bat'?680:1450);if(e.weapon==='chain')this._voice(this.buffers.get('chain'),{gain:.17,rate:1.15,pan,duration:.27});break;
   case 'hit':this._voice(this.buffers.get('thud'),{gain:.42*strength,rate:e.weapon==='bat'?.8:1.05,pan});this._voice(e.weapon==='bat'?this.buffers.get('crunch'):metal,{gain:.38*strength,rate:.8+Math.random()*.25,pan});if(e.counter)this._voice(this.buffers.get('chain'),{gain:.18,rate:1.3,pan});this._duck(.23);break;
   case 'damage':this._voice(this.buffers.get('crunch'),{gain:.5*strength,rate:.75,pan});this._voice(metal,{gain:.25,rate:.72,pan});this._duck(.36);break;
   case 'takedown':this._voice(this.buffers.get('crunch'),{gain:.54,rate:.69,pan});this._voice(this.buffers.get('chain'),{gain:.4,rate:.72,pan});this._noiseShot(.65,.2,pan,'lowpass',1900);this._duck(.4);break;
   case 'nearMiss':case 'perfectPass':this._noiseShot(.28,e.type==='perfectPass'?.24:.17,pan,'bandpass',1250);break;
   case 'rivalWindup':this._voice(this.buffers.get('chain'),{gain:.14,rate:.85,pan,duration:.3});break;
   case 'pickup':this.tone(520,.13,'triangle',.055,1040);this._later(()=>this.tone(780,.18,'sine',.04,1040),85);break;
   case 'sector':this._voice(this.buffers.get('click'),{gain:.2,rate:1.1});if(e.clean)this.tone(660,.2,'triangle',.04,880);break;
   case 'challengeStart':this._voice(this.buffers.get('click'),{gain:.15,rate:.85});break;
   case 'challengeComplete':this._voice(metal,{gain:.15,rate:1.35,duration:.2});this.tone(440,.3,'triangle',.04,880);this.tone(660,.32,'triangle',.025,1320);break;
   case 'flowReady':this.tone(392,.26,'triangle',.035,784);this.tone(588,.26,'triangle',.02,1176);break;
   case 'overdrive':this._voice(this.buffers.get('thud'),{gain:.2,rate:.72,duration:.3});this._noiseShot(.6,.1,0,'bandpass',1100);this.tone(110,.45,'sawtooth',.025,55);break;
   case 'drift':this._noiseShot(.25,.09,0,'bandpass',650);break;
   case 'finish':this._voice(this.buffers.get(e.won?'chain':'thud'),{gain:.3,rate:e.won?1.15:.65});this._duck(.2);break;
  }
 }
 dispose(){
  if(this.disposed)return;this.silence();this.disposed=true;for(const timer of this.timers)clearTimeout(timer);this.timers.clear();
  for(const voice of [...this.voices]){try{voice.source.stop();}catch{}this._cleanVoice(voice);}
  for(const t of this.tracks.values()){this._pauseTrack(t);t.element.removeAttribute?.('src');t.element.load?.();t.source.disconnect();t.gain.disconnect();}this.tracks.clear();
  if(this.nodes){for(const source of [this.nodes.growl,this.nodes.sub,this.nodes.skidTone,...this.nodes.recorded.map(x=>x.source),this.nodes.wind.source,this.nodes.skid.source,this.nodes.gravel.source])try{source.stop();source.disconnect();}catch{}}
  if(this.ctx){this.ctx.onstatechange=null;Promise.resolve(this.ctx.close()).catch(()=>{});this.ctx=null;}this.nodes=null;this.buffers.clear();
 }
}
export const audioDirector=new RaceAudio();
