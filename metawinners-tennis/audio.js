// Original, locally synthesised score and court sound design. No network/audio files.
export const AUDIO_DEFAULTS=Object.freeze({enabled:false,music:.42,effects:.8,ambience:.32});
const clamp=(n,a=0,b=1)=>Math.max(a,Math.min(b,Number.isFinite(Number(n))?Number(n):a));
const midi=n=>440*2**((n-69)/12);
const PALETTES=[
 {name:'Miami',root:0,bpm:108,cutoff:2800,room:.06,body:172,bounce:230,air:540,airLevel:.13,chords:[[52,55,59,66],[48,52,55,62],[43,50,55,59],[50,54,57,64]]},
 {name:'Royal Casino',root:-2,bpm:104,cutoff:2200,room:.15,body:154,bounce:188,air:720,airLevel:.075,chords:[[50,53,57,60],[46,50,53,57],[43,50,53,57],[45,52,55,60]]},
 {name:'Bugatti Garage',root:2,bpm:116,cutoff:3400,room:.24,body:188,bounce:260,air:280,airLevel:.09,chords:[[54,57,61,68],[50,54,57,64],[45,52,57,61],[52,56,59,66]]},
 {name:'Center Court',root:0,bpm:114,cutoff:3000,room:.12,body:178,bounce:244,air:1150,airLevel:.12,chords:[[52,55,59,66],[48,55,59,62],[55,59,62,69],[50,54,57,64]]},
 {name:'Riviera Yacht',root:-5,bpm:106,cutoff:2450,room:.035,body:164,bounce:202,air:410,airLevel:.16,chords:[[47,50,54,61],[43,47,50,57],[50,54,57,62],[45,49,52,59]]}
];

export class ClubAudio{
 constructor({createContext,random=Math.random,setInterval:timer=setInterval,clearInterval:clear=clearInterval,setTimeout:defer=setTimeout,clearTimeout:cancel=clearTimeout}={}){
  this.createContext=createContext||(()=>{const C=globalThis.AudioContext||globalThis.webkitAudioContext;return C?new C({latencyHint:'interactive'}):null;});
  this.random=random;this.timer=timer;this.clearTimer=clear;this.defer=defer;this.cancel=cancel;this.settings={...AUDIO_DEFAULTS};
  this.scene={active:false,court:0,paused:false,phase:'lobby',rally:0};
  this.context=null;this.unlocked=false;this.suspended=false;this.disposed=false;this.interval=null;this.voices=new Set();
  this.step=0;this.nextNote=0;this.nextAmbience=0;this.generation=0;this.lastEvent=new Map();this.error=null;this.scheduledSteps=0;this.maxVoices=48;
 }
 async unlock(){
  if(this.disposed||!this.settings.enabled)return false;
  this.suspended=false;this.unlocked=true;this._cancelSuspension();
  try{
   // Called synchronously from the gesture, before awaiting resume.
   if(!this.context){this.context=this.createContext();if(!this.context){this.error='Web Audio is unavailable';return false;}this._build();}
   if(this.scene.paused)return false;
   const generation=this.generation;
   if(this.suspendPromise)await this.suspendPromise;
   if(this.context.state!=='running'&&this.context.state!=='closed')await this.context.resume();
   if(this.disposed||this.suspended||!this.settings.enabled||this.scene.paused){this._suspendContext();return false;}
   // An old gesture must not suspend a newer, still-authorised resume.
   if(generation!==this.generation)return false;
   if(this.context.state!=='running'){this.error='Audio has not resumed';return false;}
   this.error=null;this._start();return true;
  }catch(e){this.error=e?.message||'Audio could not start';return false;}
 }
 configure(values={}){
  if(this.disposed)return {...this.settings};
  const wasEnabled=this.settings.enabled;
  for(const key of ['music','effects','ambience'])if(key in values)this.settings[key]=clamp(values[key]);
  if('enabled'in values)this.settings.enabled=!!values.enabled;
  if(this.context)this._volumes();
  if(!this.settings.enabled){this._halt();this._suspendContext();}
  else if(!wasEnabled&&this.unlocked&&!this.suspended&&!this.scene.paused)this.unlock();
  return {...this.settings};
 }
 setScene(values={}){
  if(this.disposed)return;
  const previous=this.scene;
  this.scene={...previous,...values,court:clamp(values.court??previous.court,0,4)|0,rally:Math.max(0,Number(values.rally??previous.rally)||0)};
  const changed=previous.active!==this.scene.active||previous.court!==this.scene.court;
  if(changed){this._stopVoices('music');this._stopVoices('ambience');this.step=0;this.nextNote=(this.context?.currentTime||0)+.06;this.nextAmbience=this.nextNote;this.lastEvent.clear();if(this.roomWet)this._ramp(this.roomWet.gain,PALETTES[this.scene.court].room,.12);}
  if(this.scene.paused){if(!previous.paused){this._halt();this._suspendContext();}}
  else if(previous.paused&&this.unlocked&&!this.suspended&&this.settings.enabled)this.unlock();
 }
 suspend(){this.suspended=true;this._halt();this._suspendContext();}
 dispose(){if(this.disposed)return;this.disposed=true;this.suspended=true;this._cancelSuspension();this._halt();this.context?.close?.().catch?.(()=>{});this.context=null;this.noise=null;}
 getState(){return{settings:{...this.settings},scene:{...this.scene},unlocked:this.unlocked,suspended:this.suspended,contextState:this.context?.state||'not-created',running:this.interval!==null,voices:this.voices.size,scheduledSteps:this.scheduledSteps,error:this.error};}
 _cancelSuspension(){const job=this.suspendJob;if(job&&job.timer!==null){this.cancel(job.timer);job.resolve();this.suspendJob=null;this.suspendPromise=null;}}
 _suspendContext(){
  if(!this.context||this.suspendPromise||!['running','interrupted'].includes(this.context.state))return;
  // Let the 8 ms source fades reach the output before suspending hardware.
  const context=this.context,generation=this.generation,job={timer:null,resolve:null};
  const promise=new Promise(resolve=>{job.resolve=resolve;job.timer=this.defer(async()=>{
   job.timer=null;
   if(generation===this.generation&&(this.disposed||this.suspended||!this.settings.enabled||this.scene.paused))try{await context.suspend();}catch{}
   resolve();
  },20);});
  this.suspendJob=job;this.suspendPromise=promise;promise.finally(()=>{if(this.suspendPromise===promise){this.suspendPromise=null;this.suspendJob=null;}});
 }
 _hold(param,now){if(typeof param.cancelAndHoldAtTime==='function')param.cancelAndHoldAtTime(now);else{param.cancelScheduledValues(now);param.setValueAtTime(param.value,now);}}
 _ramp(param,value,duration=.035){const now=this.context.currentTime;this._hold(param,now);param.linearRampToValueAtTime(value,now+duration);}
 _volumes(){if(!this.buses)return;for(const key of ['music','effects','ambience'])this._ramp(this.buses[key].gain,this.settings[key]);this._ramp(this.master.gain,this.settings.enabled?.8:0);}
 _build(){
  const c=this.context;this.master=c.createGain();this.master.gain.value=.8;
  const compressor=c.createDynamicsCompressor();compressor.threshold.value=-13;compressor.knee.value=12;compressor.ratio.value=4;compressor.attack.value=.004;compressor.release.value=.16;
  this.master.connect(compressor);compressor.connect(c.destination);
  this.buses={};for(const key of ['music','effects','ambience']){this.buses[key]=c.createGain();this.buses[key].gain.value=this.settings[key];}
  this.musicDuck=c.createGain();this.musicDuck.gain.value=1;this.musicLevel=c.createGain();this.musicLevel.gain.value=2;this.buses.music.connect(this.musicDuck);this.musicDuck.connect(this.musicLevel);this.musicLevel.connect(this.master);
  this.buses.effects.connect(this.master);this.buses.ambience.connect(this.master);
  // Shared short reflection, with no expensive long convolution or per-hit delay nodes.
  this.room=c.createConvolver();const length=Math.ceil(c.sampleRate*.27),impulse=c.createBuffer(2,length,c.sampleRate);
  for(let channel=0;channel<2;channel++){const data=impulse.getChannelData(channel);for(let i=0;i<length;i++)data[i]=(this.random()*2-1)*Math.exp(-i/(c.sampleRate*.048))*.24;}
  this.room.buffer=impulse;this.roomWet=c.createGain();this.roomWet.gain.value=PALETTES[this.scene.court].room;this.buses.effects.connect(this.room);this.room.connect(this.roomWet);this.roomWet.connect(this.master);
  this.noise=c.createBuffer(1,c.sampleRate*2,c.sampleRate);const white=this.noise.getChannelData(0);for(let i=0;i<white.length;i++)white[i]=this.random()*2-1;
  this._volumes();
 }
 _start(){
  if(this.interval!==null||!this._audible())return;
  this.nextNote=this.context.currentTime+.035;this.nextAmbience=this.context.currentTime+.08;this.step=0;this.lastEvent.clear();
  this.interval=this.timer(()=>this._tick(),40);this._tick();
 }
 _halt(){this.generation++;if(this.interval!==null){this.clearTimer(this.interval);this.interval=null;}this._stopVoices();this.nextNote=0;this.nextAmbience=0;}
 _stopVoices(bus){for(const voice of [...this.voices])if(!bus||voice.bus===bus)this._retire(voice,true);}
 _retire(voice,stop=false){
  if(voice.done)return;voice.done=true;this.voices.delete(voice);
  const disconnect=()=>{for(const node of voice.nodes){try{node.disconnect();}catch{}}};
  if(stop&&this.context?.state==='running'&&!this.disposed&&voice.at<=this.context.currentTime){
   const now=this.context.currentTime;this._hold(voice.envelope.gain,now);voice.envelope.gain.linearRampToValueAtTime(0,now+.008);
   voice.source.onended=disconnect;try{voice.source.stop(now+.012);}catch{disconnect();}return;
  }
  if(stop){try{voice.source.stop();}catch{}}disconnect();
 }
 _audible(){return !this.disposed&&this.settings.enabled&&this.unlocked&&!this.suspended&&!this.scene.paused&&this.context?.state==='running';}
 _voice(source,nodes,bus,at,duration,envelope){
  // Sources scheduled in the short lookahead also count against this budget.
  if(this.voices.size>=this.maxVoices){const old=[...this.voices].find(v=>v.bus==='ambience')||[...this.voices].find(v=>v.bus==='music')||this.voices.values().next().value;this._retire(old,true);}
  const voice={source,nodes,bus,at,end:at+duration+.04,envelope,done:false};this.voices.add(voice);source.onended=()=>this._retire(voice);
  source.start(at);source.stop(voice.end);return voice;
 }
 _route(source,{at,duration,level,attack=.003,release=.04,pan=0,bus='effects',cutoff=8000,filter='lowpass',q=.6}){
  if(!this._audible()||!this.settings[bus])return null;
  const c=this.context,g=c.createGain(),f=c.createBiquadFilter();f.type=filter;f.frequency.value=cutoff;f.Q.value=q;
  g.gain.setValueAtTime(0,at);g.gain.linearRampToValueAtTime(level,at+Math.min(attack,duration*.3));g.gain.exponentialRampToValueAtTime(Math.max(.0001,level*.12),at+Math.max(attack+.001,duration-release));g.gain.linearRampToValueAtTime(0,at+duration);
  source.connect(f);f.connect(g);const nodes=[source,f,g];let tail=g;
  if(c.createStereoPanner){const p=c.createStereoPanner();p.pan.value=clamp(pan,-.8,.8);g.connect(p);tail=p;nodes.push(p);}
  tail.connect(this.buses[bus]);return this._voice(source,nodes,bus,at,duration,g);
 }
 _note(freq,{at=this.context.currentTime+.004,duration=.17,level=.06,type='triangle',glide, ...options}={}){
  if(!this._audible()||!this.settings[options.bus||'effects'])return null;
  const o=this.context.createOscillator();o.type=type;o.frequency.setValueAtTime(freq,at);if(glide)o.frequency.exponentialRampToValueAtTime(glide,at+Math.min(duration*.75,.16));
  return this._route(o,{at,duration,level,...options});
 }
 _noise({at=this.context.currentTime+.004,duration=.12,level=.06, ...options}={}){
  if(!this._audible()||!this.settings[options.bus||'effects'])return null;
  const source=this.context.createBufferSource();source.buffer=this.noise;source.loop=true;source.playbackRate.value=.88+this.random()*.24;
  return this._route(source,{at,duration,level,...options});
 }
 _tick(){
  if(!this._audible()){this._halt();return;}
  const now=this.context.currentTime;
  // Covers throttled tabs and implementations whose ended callbacks arrive late.
  for(const voice of [...this.voices])if(voice.end<now-.08)this._retire(voice,true);
  if(this.nextNote<now-.12)this.nextNote=now+.025;
  let scheduled=0;
  while(this.nextNote<now+.11&&scheduled++<4){
   if(this.step%16===0){this.barEnergy=this.scene.active&&this.scene.phase==='rally'?clamp(.25+this.scene.rally*.055):this.scene.active?.14:0;this.bpm=this.scene.active?PALETTES[this.scene.court].bpm:92;}
   if(this.settings.music)this._music(Math.max(this.nextNote,now+.003),this.step);
   this.scheduledSteps++;this.step++;this.nextNote+=60/(this.bpm||108)/4;
  }
  if(this.settings.ambience&&this.nextAmbience<now+.11){this._atmosphere(Math.max(now+.01,this.nextAmbience));this.nextAmbience=now+3.8;}
 }
 _music(at,step){
  const p=PALETTES[this.scene.court],bar=Math.floor(step/16),s=step%16,chord=p.chords[bar%4],energy=this.barEnergy||0,active=this.scene.active,beat=60/(this.bpm||108);
  if(s===0){for(let i=0;i<chord.length;i++)this._note(midi(chord[i]),{at,duration:beat*4+.12,level:active?.025:.032,type:'sine',attack:.18,release:.3,cutoff:1500,pan:(i-1.5)*.25,bus:'music'});}
  if(s%2===0&&(active||s%4===0)){
   const sequence=bar%2?[2,0,3,1,2,3,1,0]:[0,2,1,3,2,1,3,2],index=sequence[(s/2)|0],note=chord[index]+12;
   this._note(midi(note),{at,duration:beat*.65,level:active?.055:.047,type:'triangle',attack:.005,release:.08,cutoff:p.cutoff,pan:Math.sin(s*.7)*.5,bus:'music'});
   if(s%4===2)this._note(midi(note),{at:at+beat*.75,duration:beat*.5,level:.013,type:'sine',cutoff:2000,pan:-Math.sin(s*.7)*.6,bus:'music'});
  }
  if(!active)return;
  if([0,3,6,8,11,14].includes(s))this._note(midi(chord[0]-12+(s===14?12:0)),{at,duration:beat*.7,level:.105,type:'triangle',cutoff:550,attack:.006,release:.06,bus:'music'});
  if(s%4===0)this._note(132,{at,duration:.22,glide:46,level:.22,type:'sine',cutoff:1600,bus:'music'});
  if(s===4||s===12){this._noise({at,duration:.13,level:.07,cutoff:2100,filter:'bandpass',q:.6,bus:'music'});this._note(185,{at,duration:.09,level:.045,cutoff:800,bus:'music'});}
  if(s%2===0||energy>.65)this._noise({at,duration:s%4===2?.065:.035,level:s%2?.012:.024,cutoff:7200,filter:'highpass',pan:s%4===0?-.3:.3,bus:'music'});
  if(energy>.5&&s%4===3)this._note(midi(chord[(s+bar)%4]+24),{at,duration:.13,level:.019,cutoff:2800,type:'sine',pan:Math.sin(s)*.5,bus:'music'});
 }
 _atmosphere(at){
  const court=this.scene.court,p=PALETTES[court],active=this.scene.active,level=p.airLevel*(active?1:.6);
  this._noise({at,duration:4.25,level,attack:.85,release:1.1,cutoff:p.air,filter:'lowpass',pan:-.2,bus:'ambience'});
  if(court===0||court===4){
   this._noise({at:at+.45,duration:3.4,level:.045,attack:.9,release:1.1,cutoff:1450,filter:'bandpass',q:.35,pan:.35,bus:'ambience'});
   if(court===4)this._note(58,{at,duration:3.9,level:.009,attack:.8,release:1.2,type:'sine',cutoff:180,bus:'ambience'});
  }else if(court===2){
   this._note(82,{at,duration:4.2,level:.012,attack:.8,release:1.0,type:'sine',cutoff:250,pan:.3,bus:'ambience'});
  }else if(court===3){
   this._noise({at:at+.3,duration:3.7,level:.045,attack:.8,release:1.0,cutoff:480,filter:'bandpass',q:.7,pan:.35,bus:'ambience'});
  }else this._noise({at:at+.3,duration:3.7,level:.025,attack:.8,release:1.0,cutoff:360,filter:'bandpass',q:1,pan:.3,bus:'ambience'});
 }
 _duck(amount=.72){if(!this.musicDuck)return;const p=this.musicDuck.gain,t=this.context.currentTime;this._hold(p,t);p.linearRampToValueAtTime(amount,t+.012);p.linearRampToValueAtTime(1,t+.25);}
 _allowed(key,seconds){const t=this.context.currentTime,old=this.lastEvent.get(key)??-Infinity;if(t-old<seconds)return false;this.lastEvent.set(key,t);return true;}
 event(e={}){
  if(!this._audible())return;
  const p=PALETTES[this.scene.court],pan=clamp((e.x||0)/7,-.65,.65),far=e.y<0?.76:1,variation=.97+this.random()*.06,at=this.context.currentTime+.004;
  switch(e.type){
   case 'hit':{
    if(!this._allowed('hit',.045))return;
    const power=clamp(e.power??.65,.2,1),kind=e.kind||'flat',soft=kind==='lob'?.72:kind==='volley'?.84:kind==='smash'?1.18:1;
    this._duck(kind==='smash'?.62:.74);
    this._noise({at,duration:.045,level:(.13+power*.07)*soft*far,cutoff:kind==='slice'?3800:2350,filter:'bandpass',q:.75,pan});
    this._note(p.body*variation*(kind==='volley'?1.12:1),{at,duration:.115,level:(.16+power*.04)*soft*far,glide:p.body*.72,type:'sine',cutoff:1200,pan});
    this._note(585*variation,{at:at+.003,duration:.055,level:.035*far,glide:405,type:'triangle',cutoff:2200,pan});
    this._noise({at:at+.01,duration:kind==='slice'?.14:.075,level:kind==='slice'?.065:.024,attack:.007,cutoff:kind==='topspin'?3300:1800,filter:'bandpass',q:.6,pan});
    if(this.scene.court===4&&e.footwork>2)this.event({type:'slide',x:e.x,y:e.y,speed:e.footwork});
    break;
   }
   case 'bounce':{
    if(!this._allowed('bounce',.06))return;
    const clay=e.surface==='clay'||this.scene.court===4,carpet=e.surface==='carpet'||this.scene.court===1;
    const level=carpet?.055:clay?.075:.10;
    this._note(p.bounce*variation,{at,duration:carpet?.06:.085,level:level*far,glide:p.bounce*.56,type:'sine',cutoff:clay?750:1400,pan});
    this._noise({at,duration:clay?.075:.022,level:clay?.047:carpet?.018:.035,cutoff:clay?1500:3000,filter:'bandpass',q:.55,pan});
    break;
   }
   case 'step':{
    if(!this._allowed('step-'+(e.slot||Math.round((e.x||0)*.5)),.14))return;
    const clay=this.scene.court===4||e.surface==='clay',carpet=this.scene.court===1||e.surface==='carpet',speed=clamp((e.speed||3)/7,.2,1);
    this._noise({at,duration:clay?.11:.045,level:(clay?.05:carpet?.022:.035)*speed*far,cutoff:clay?1550:850,filter:'bandpass',q:.5,pan});
    this._note(90*variation,{at,duration:.055,level:.035*speed*far,glide:65,type:'sine',cutoff:350,pan});
    break;
   }
   case 'slide':
    if(this._allowed('slide',.23))this._noise({at,duration:.28,level:.075*far,attack:.025,release:.09,cutoff:this.scene.court===4?1850:2750,filter:'bandpass',q:.4,pan});
    break;
   case 'toss':this._noise({at,duration:.07,level:.025,cutoff:1000,filter:'bandpass',q:.5,pan});break;
   case 'miss':if(this._allowed('miss',.35))this._noise({at,duration:.12,level:.025,attack:.025,cutoff:2300,filter:'bandpass',q:.6,pan});break;
   case 'fault':
    if(e.reason==='NET')this._net(at);this._sting([47,43],at+.1,.034,.11);break;
   case 'point':
    if(e.reason==='INTO THE NET')this._net(at);
    this._duck(.58);this._sting(e.winner===0?[64,67,71]:[59,55],at+.09,e.reason==='GAME'?.07:.05,.11);
    this._cheer(at+.08,e.reason==='GAME'?1:.55);break;
   case 'finished':
    this._duck(.52);this._sting(e.winner===0?[64,67,71,74,76]:[62,59,55,52],at+.08,.085,.15);this._cheer(at+.06,1.4);break;
   case 'ready':if(this.scene.active&&e.attempt===2)this.ui('select');break;
  }
 }
 _net(at){for(let i=0;i<3;i++){this._noise({at:at+i*.042,duration:.065,level:.065/(i+1),cutoff:1250,filter:'bandpass',q:1.8,pan:(i-1)*.2});this._note(115+i*24,{at:at+i*.035,duration:.13,level:.025/(i+1),cutoff:800});}}
 _sting(notes,at,level=.05,spacing=.12){for(let i=0;i<notes.length;i++){this._note(midi(notes[i]),{at:at+i*spacing,duration:.36,level,type:'triangle',attack:.012,release:.1,cutoff:2600,pan:(i-(notes.length-1)/2)*.12});this._note(midi(notes[i]-12),{at:at+i*spacing,duration:.35,level:level*.32,type:'sine',cutoff:900});}}
 _cheer(at,strength){
  const stadium=this.scene.court===3,level=(stadium?.14:.055)*strength;
  for(let i=0;i<3;i++)this._noise({at:at+i*.035,duration:1.15+strength*.35,level:level*.5,attack:.14,release:.45,cutoff:[650,1100,1800][i],filter:'bandpass',q:.7,pan:(i-1)*.55,bus:'ambience'});
 }
 ui(kind='select'){
  if(!this._audible()||!this._allowed('ui',.06))return;
  const at=this.context.currentTime+.004;
  if(kind==='confirm')this._sting([64,71],at,.035,.075);
  else if(kind==='back')this._sting([59,55],at,.024,.06);
  else{this._noise({at,duration:.018,level:.025,cutoff:2400,filter:'bandpass',q:.8});this._note(740,{at,duration:.065,level:.022,type:'sine',glide:610,cutoff:1800});}
 }
}
