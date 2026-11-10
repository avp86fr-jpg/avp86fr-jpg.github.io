import { MotoGame } from './game.js';
import { RIDERS } from './roster.js';
import { RACE_RULES } from './simulation.js';
import { prepareRiderModels } from './models.js';
import { audioDirector } from './audio.js';
import { prepareWorldAssets } from './scene.js';
import { CIRCUIT_DISTRICTS, CIRCUIT_EVENTS } from './circuit-events.js';
import { sampleTrack } from './track.js';

const elements=new Map();
const $ = id => {if(!elements.has(id))elements.set(id,document.getElementById(id));return elements.get(id);};
const circuits = [
  {id:'vegas',name:'VEGAS STRIP',label:'NEON NIGHTS. DIRTY FIGHTS.',location:'LAS VEGAS, NEVADA',difficulty:2,difficultyName:'BALANCED',distance:'5.8 KM',targetTime:RACE_RULES.vegas.target,time:'NIGHT RUN'},
  {id:'casino',name:'CASINO CITY',label:'THE HOUSE ALWAYS RACES.',location:'CASINO DISTRICT',difficulty:3,difficultyName:'TECHNICAL',distance:'6.0 KM',targetTime:RACE_RULES.casino.target,time:'AFTER HOURS'},
  {id:'miami',name:'MIAMI HEAT',label:'PALM TREES. FULL THROTTLE.',location:'MIAMI, FLORIDA',difficulty:2,difficultyName:'FAST FLOW',distance:'5.6 KM',targetTime:RACE_RULES.miami.target,time:'GOLDEN HOUR'},
  {id:'desert',name:'DEADLANDS',label:'DUST SETTLES. LEGENDS DON’T.',location:'MOJAVE DESERT',difficulty:3,difficultyName:'ENDURANCE',distance:'6.3 KM',targetTime:RACE_RULES.desert.target,time:'DESERT RUN'}
];
const riders = RIDERS;
const portrait = r => r.portrait || `./assets/nft-${r.id}.webp`;
const thumbnail = r => r.thumbnail || portrait(r);
const weaponSvg = {
 bat:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="m10 39 7-8 3 3-7 8zm7-8L32 9c4-6 11 0 6 5L20 34Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/></svg>',
 chain:'<svg viewBox="0 0 48 48" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2.5"><rect x="11" y="27" width="9" height="15" rx="4.5" transform="rotate(40 15 35)"/><rect x="18" y="18" width="9" height="15" rx="4.5" transform="rotate(40 22 25)"/><rect x="25" y="9" width="9" height="15" rx="4.5" transform="rotate(40 30 17)"/></g></svg>',
 wrench:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M34 7a10 10 0 0 0-12 13L10 33a5 5 0 0 0 7 7l12-14A10 10 0 0 0 41 13l-8 7-5-5 6-8Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/></svg>'
};
const weapons=[{id:'bat',name:'STREET BAT',trait:'HEAVY HIT · 54 DMG'}, {id:'chain',name:'CHAIN REACTION',trait:'LONG REACH · 43 DMG'}, {id:'wrench',name:'THE WRENCH',trait:'FAST SWING · 36 DMG'}];
const modes=[{id:'race',name:'STREET RACE',tag:'FULL CONTACT',description:'Beat seven rivals to the finish.',icon:'01'},{id:'elimination',name:'ELIMINATION',tag:'HUNT THE PACK',description:'Land 5 takedowns before the finish.',icon:'02'},{id:'timeattack',name:'TIME ATTACK',tag:'YOU VS. THE CLOCK',description:'Dodge traffic. Beat the circuit clock.',icon:'03'}];
const readStorage=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}};
const saveStorage=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{return false;}};
const saved=readStorage('mw-moto-loadout',{});
let selection={circuit:circuits.some(c=>c.id===saved.circuit)?saved.circuit:'vegas',rider:riders.some(r=>r.id===saved.rider)?saved.rider:'chief',weapon:weapons.some(w=>w.id===saved.weapon)?saved.weapon:'bat',mode:modes.some(m=>m.id===saved.mode)?saved.mode:'race',quality:['auto','high','low'].includes(saved.quality)?saved.quality:'auto',camera:['chase','close'].includes(saved.camera)?saved.camera:'chase',difficulty:['casual','standard','expert'].includes(saved.difficulty)?saved.difficulty:'standard'};
let sound=readStorage('mw-moto-sound',true)===true,mutedHintShown=false;
const savedAudio=readStorage('mw-moto-audio',{}),level=(value,fallback)=>Number.isFinite(Number(value))?Math.max(0,Math.min(1,Number(value))):fallback;
const audioMix={music:level(savedAudio?.music,.58),effects:level(savedAudio?.effects,.85)};
const rawHistory=readStorage('mw-moto-history',[]);
let history=Array.isArray(rawHistory)?rawHistory.filter(r=>r&&riders.some(v=>v.id===r.rider)&&circuits.some(v=>v.id===r.circuit)&&modes.some(v=>v.id===r.mode)&&Number.isFinite(r.score)&&Number.isFinite(r.time)).slice(0,30):[];
const difficultyName={casual:'ROOKIE',standard:'STREET',expert:'OUTLAW'};
let settingsReturnToPause=false,garageView='portrait',garagePose='idle',garageOrbit=!matchMedia('(prefers-reduced-motion: reduce)').matches,previousTakedowns=0,combatUntil=0;
let game=null,lastConfig=null,toastTimer=null,raceActive=false,garagePreview=null,garageModule=null,garageGeneration=0,raceGeneration=0,steerPointer=null;
let bests=readStorage('mw-moto-bests',{});
if(typeof bests!=='object'||bests===null||Array.isArray(bests))bests={};
const dialogs=[...document.querySelectorAll('dialog')],controlPointers=new Map(),steerKeys=new Set();
const hudValues=new Map();
let rosterFilter=null,rosterPreviewBuilt=false,steerOrigin=0,steerRadius=50;
const coarsePointer=matchMedia('(pointer: coarse)');
function steeringResponse(value){const magnitude=Math.min(1,Math.abs(value));return magnitude<=.065?0:Math.sign(value)*Math.pow((magnitude-.065)/.935,1.35);}
function markRiderSelection(selector,key){for(const card of document.querySelectorAll(selector)){const selected=card.dataset[key]===selection.rider;card.classList.toggle('selected',selected);card.setAttribute('aria-pressed',String(selected));}}
function paintHUD(id,property,value){const key=id+':'+property;if(hudValues.has(key)&&hudValues.get(key)===value)return;hudValues.set(key,value);const e=$(id);if(property.startsWith('style.--'))e.style.setProperty(property.slice(6),value);else if(property.startsWith('style.'))e.style[property.slice(6)]=value;else if(property.startsWith('class.'))e.classList.toggle(property.slice(6),value);else e[property]=value;}
function closeDialogs(){settingsReturnToPause=false;dialogs.forEach(d=>{if(d.open)d.close();});}
function openDialog(id){closeDialogs();$(id).showModal();if(id==='garage-modal'){audioDirector.enable(sound);if(sound)audioDirector.unlock();audioDirector.setMode('menu');openGaragePreview();}}
function openSettings(){audioDirector.enable(sound);if(sound)audioDirector.unlock();if(!raceActive)audioDirector.setMode('menu');const returnToPause=!!(raceActive&&game?.running);if(returnToPause)game.pause();closeDialogs();$('settings-modal').showModal();settingsReturnToPause=returnToPause;}
function applyAudioMix(){audioDirector.setMusicVolume(audioMix.music);audioDirector.setEffectsVolume(audioMix.effects);game?.setAudioLevels?.(audioMix);for(const key of ['music','effects']){$(key+'-volume').value=String(Math.round(audioMix[key]*100));$(key+'-volume-value').textContent=Math.round(audioMix[key]*100)+'%';}saveStorage('mw-moto-audio',audioMix);}
function renderCommandDeck(){const rider=riders.find(r=>r.id===selection.rider),circuit=circuits.find(c=>c.id===selection.circuit),mode=modes.find(m=>m.id===selection.mode);$('deck-portrait').src=thumbnail(rider);$('deck-portrait').alt=rider.name;$('deck-rider-name').textContent=rider.name;$('deck-circuit').textContent=circuit.name;$('mobile-rider-portrait').src=thumbnail(rider);$('mobile-rider-name').textContent=rider.name;$('mobile-circuit-name').textContent=circuit.name;$('deck-mode').textContent=mode.name+' · '+difficultyName[selection.difficulty];const score=Number(bests[selection.circuit+':'+selection.mode+(selection.difficulty==='standard'?'':':'+selection.difficulty)])||0;$('deck-best').textContent=score?Math.round(score).toLocaleString():'—';$('deck-best-label').textContent=score?'STREET POINTS / '+difficultyName[selection.difficulty]:'YOUR FIRST RUN STARTS HERE';}
function renderRunHistory(result){const same=history.filter(r=>r.circuit===result.circuit&&r.mode===result.mode&&(r.difficulty||'standard')===(result.difficulty||lastConfig?.difficulty||'standard')).sort((a,b)=>b.score-a.score).slice(0,3);$('result-history').innerHTML=same.map((r,i)=>`<li><b>0${i+1}</b><span>${riders.find(v=>v.id===r.rider).name}<small>${timeFormat(r.time,true)} · ${r.finished?'FINISHED':'DNF'}</small></span><strong>${Math.round(r.score).toLocaleString()}</strong></li>`).join('');}
function prepareGrid(config){const riderIndex=riders.findIndex(r=>r.id===config.rider.id),grid=Array.from({length:config.mode==='timeattack'?1:8},(_,i)=>riders[(riderIndex+i)%riders.length]),circuit=circuits.find(c=>c.id===config.circuit),mode=modes.find(m=>m.id===config.mode);$('loading-circuit').textContent=circuit.name;$('loading-brief').textContent=mode.description+' / '+difficultyName[config.difficulty];$('loading-grid').innerHTML=grid.map((r,i)=>`<div class="loading-rider ${i===0?'you':''}"><img src="${thumbnail(r)}" alt="${r.name}"><small>${i===0?'YOUR RIDER':'RIVAL 0'+i}</small><strong>${r.name}</strong></div>`).join('');$('loading-tip').textContent=config.difficulty==='casual'?'Rookie assists help with corner entry. Steer smoothly and watch the bend indicator.':'Brake before the corner. Catch the slipstream. Strike when the target turns green.';for(const id of ['grid-intro-portrait','pause-portrait'])$(id).src=thumbnail(config.rider);$('grid-intro-name').textContent=config.rider.name;$('grid-intro-mode').textContent=mode.name+' / '+circuit.name;$('grid-intro-bike').textContent=config.rider.bike;$('pause-rider').textContent=config.rider.name;$('pause-course').textContent=circuit.name+' · '+difficultyName[config.difficulty];return grid;}

function toast(message){$('toast').textContent=message;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),2600);}
function saveLoadout(){renderCommandDeck();const ok=saveStorage('mw-moto-loadout',selection);document.querySelector('.save-note').innerHTML=ok?'<i></i> Loadout saved on this device':'<i></i> Loadout ready for this session';}
function renderCircuitBrief(){
  const circuit=circuits.find(c=>c.id===selection.circuit),districts=CIRCUIT_DISTRICTS[circuit.id],events=CIRCUIT_EVENTS[circuit.id],length=RACE_RULES[circuit.id].length;
  const points=Array.from({length:81},(_,i)=>sampleTrack(i/80*length,circuit.id).x),minimum=Math.min(...points),span=Math.max(1,Math.max(...points)-minimum),line=points.map((x,i)=>`${i?'L':'M'}${(22+i/80*756).toFixed(1)},${(115-(x-minimum)/span*88).toFixed(1)}`).join(' ');
  const kind=event=>selection.mode==='timeattack'&&event.kind==='brawl'?'SPRINT':event.kind.toUpperCase(),markers=events.map(event=>{const x=22+event.start/length*756,at=Math.min(80,Math.round(event.start/length*80)),y=115-(points[at]-minimum)/span*88;return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" fill="${event.accent}"/><text x="${x.toFixed(1)}" y="143" text-anchor="middle">${kind(event)}</text>`;}).join('');
  $('circuit-brief').innerHTML=`<div class="route-heading"><div><span class="eyebrow">THE RUN / ${circuit.distance}</span><h3>${circuit.name}</h3></div><span>03 DISTRICTS <b>↗</b> 03 CHALLENGES</span></div><svg class="route-profile" viewBox="0 0 800 155" role="img" aria-label="${circuit.name} course profile and three challenge locations"><path class="route-shadow" d="${line}"/><path class="route-line" d="${line}"/>${markers}<circle cx="22" cy="${(115-(points[0]-minimum)/span*88).toFixed(1)}" r="4" fill="currentColor"/><circle cx="778" cy="${(115-(points[80]-minimum)/span*88).toFixed(1)}" r="4" fill="currentColor"/></svg><div class="district-preview">${districts.map((district,i)=>`<div><span>0${i+1} <b>${(district.start/1000).toFixed(1)}–${(district.end/1000).toFixed(1)} KM</b></span><strong>${district.name}</strong><p>${district.tagline}</p><small>${events[i].name} / ${kind(events[i])}</small></div>`).join('')}</div>`;
}
function renderCircuits(){
  $('circuit-grid').innerHTML=circuits.map((c,i)=>`<button class="circuit-card ${selection.circuit===c.id?'selected':''}" data-circuit="${c.id}" aria-pressed="${selection.circuit===c.id}" aria-label="Select ${c.name}, ${c.difficultyName.toLowerCase()} circuit"><img src="./assets/${c.id}.svg" alt="${c.name.toLowerCase()} circuit" loading="lazy"><div class="card-top"><span class="track-number">0${i+1}</span><span class="track-status">✓ SELECTED</span></div><div class="card-bottom"><small>${c.label}</small><h3>${c.name}</h3><div class="card-meta"><span><span class="difficulty">${[1,2,3,4].map(n=>`<i class="${n<=c.difficulty?'on':''}"></i>`).join('')}</span> ${c.difficultyName}</span><span>${c.distance} <b>·</b> ${c.time}</span></div></div></button>`).join('');
  $('selected-count').textContent=String(circuits.findIndex(c=>c.id===selection.circuit)+1).padStart(2,'0');
  renderCircuitBrief();
}
function renderModes(){ $('mode-grid').innerHTML=modes.map(m=>`<button class="mode-card ${selection.mode===m.id?'selected':''}" data-mode="${m.id}" aria-pressed="${selection.mode===m.id}"><span class="mode-number">${m.icon}</span><span class="mode-copy"><small>${m.tag}</small><strong>${m.name}</strong><em>${m.description}</em></span><span class="mode-check">${selection.mode===m.id?'✓':'○'}</span></button>`).join(''); }
function renderRoster(){
  const query=$('rider-search').value.trim().toLowerCase(),family=$('rider-family').value;
  const filtered=riders.filter(r=>(family==='all'||r.model?.family===family)&&`${r.name} ${r.token} ${r.bike} ${r.type}`.toLowerCase().includes(query));
  $('roster-count').textContent=`${filtered.length} / ${riders.length} RIDERS`;
  const filter=query+'|'+family;if(rosterFilter===filter){markRiderSelection('[data-rider]','rider');return;}rosterFilter=filter;
  $('rider-grid').innerHTML=filtered.length?filtered.map(r=>`<button class="rider-card ${selection.rider===r.id?'selected':''}" data-rider="${r.id}" aria-pressed="${selection.rider===r.id}" aria-label="Select ${r.name}, MetaWinners #${r.token}"><img src="${thumbnail(r)}" alt="MetaWinners ${r.name} artwork" loading="lazy" decoding="async" width="160" height="160"><div class="rider-card-info"><small>1/1 · #${r.token}</small><h3>${r.name}</h3><p>${r.bike}</p></div></button>`).join(''):'<p class="roster-empty">No riders match. Try a name, token number, or a different style.</p>';
}
function renderRosterPreview(){
  if(rosterPreviewBuilt){markRiderSelection('[data-roster-rider]','rosterRider');return;}rosterPreviewBuilt=true;
  $('roster-preview').innerHTML=riders.map(r=>`<button class="roster-preview-card ${selection.rider===r.id?'selected':''}" data-roster-rider="${r.id}" aria-pressed="${selection.rider===r.id}" aria-label="Inspect ${r.name} in the 3D garage"><img src="${thumbnail(r)}" alt="Original MetaWinners ${r.name} NFT" loading="lazy" decoding="async" width="190" height="240"><em>1/1</em><span><small>METAWINNERS #${r.token}</small><strong>${r.name}</strong></span></button>`).join('');
}
function renderGarage(){
  renderRoster();renderRosterPreview();
  $('weapon-grid').innerHTML=weapons.map(w=>`<button class="weapon-card ${selection.weapon===w.id?'selected':''}" data-weapon="${w.id}" aria-pressed="${selection.weapon===w.id}"><span class="weapon-icon">${weaponSvg[w.id]}</span><strong>${w.name}</strong><small>${w.trait}</small></button>`).join('');
  const r=riders.find(r=>r.id===selection.rider),w=weapons.find(w=>w.id===selection.weapon);
  $('garage-title').innerHTML=`${r.name}<span> #${r.token}</span>`;$('garage-role').textContent=r.type;$('garage-index').innerHTML=`${String(riders.indexOf(r)+1).padStart(2,'0')} <em>/ 25</em>`;
  $('garage-signatures').innerHTML=(r.model.features||[]).map(feature=>`<li>${feature.replaceAll('-',' ')}</li>`).join('');
  $('garage-modal').style.setProperty?.('--rider-accent',r.model.glow);$('garage-pose-label').textContent=(garagePose==='corner'?'LEAN':garagePose.toUpperCase())+' / 3D ADAPTATION';
  $('summary-portrait').src=thumbnail(r);$('summary-portrait').alt=`${r.name} rider`;$('summary-name').textContent=r.name;$('summary-bike').textContent=r.bike;
  document.querySelector('.rider-summary small').textContent=`YOUR RIDER / UNIQUE #${r.token}`;
  $('summary-weapon').textContent=w.name;$('summary-weapon-icon').innerHTML=weaponSvg[w.id];
  $('rider-stats').innerHTML=Object.entries(r.stats).map(([name,value])=>`<div class="stat-row"><span>${name.toUpperCase()}</span><div class="stat-bar"><i style="width:${value}%"></i></div><b>${value}</b></div>`).join('');
  $('garage-nft').src=portrait(r);$('garage-nft').alt=`Original ${r.name} NFT artwork`;$('garage-rider-name').textContent=r.name;$('garage-token').textContent=`METAWINNERS #${r.token}`;$('garage-bike-name').textContent=r.bike;$('garage-fidelity').textContent=r.fidelity;
  if($('garage-modal').open)openGaragePreview();
  $('concept-note').innerHTML=`${r.type}. Original NFT artwork with a custom 3D racing adaptation. <a href="${r.itemUrl||'https://opensea.io/collection/metawinners-1'}" target="_blank" rel="noopener noreferrer">VIEW ORIGINAL ↗</a>`;
}
async function openGaragePreview(){
  const generation=++garageGeneration,rider=riders.find(r=>r.id===selection.rider),weapon=selection.weapon;
  $('garage-fallback').hidden=false;
  $('garage-fallback').innerHTML='<span class="preview-loader"></span><strong>PREPARING YOUR MACHINE</strong><p>Loading the rider studio…</p>';
  garagePreview?.pause();$('garage-canvas').style.visibility='hidden';
  try{
    garageModule=garageModule||await import('./garage.js');
    if(generation!==garageGeneration||!$('garage-modal').open)return;
    await prepareRiderModels([rider]);
    if(generation!==garageGeneration||!$('garage-modal').open)return;
    if(!garagePreview)garagePreview=new garageModule.GaragePreview($('garage-canvas'));
    garagePreview.setRider(rider,weapon);garagePreview.setView?.(garageView);garagePreview.setAutoRotate?.(garageOrbit);garagePreview.setPose?.(garagePose);
    $('garage-canvas').style.visibility='visible';$('garage-fallback').hidden=true;
  }catch(error){
    console.warn('3D garage unavailable:',error);
    if(generation!==garageGeneration)return;
    garagePreview?.dispose();garagePreview=null;
    const assetFailure=/load|fetch|network|artwork|motorcycle asset|texture/i.test(String(error?.message||error));
    $('garage-fallback').innerHTML=assetFailure?'<strong>YOUR MACHINE COULD NOT LOAD</strong><p>Check your connection, then choose your rider again to retry.</p>':'<strong>YOUR ORIGINAL 1/1 IS READY</strong><p>The 3D preview needs WebGL hardware acceleration. Try an updated Chrome, Safari, Firefox or Edge browser.</p>';
  }
}
function closeGaragePreview(){garageGeneration++;garagePreview?.dispose();garagePreview=null;}
function setSound(value,notify=false){sound=value;$('header-audio-state').textContent=sound?'ON · AUDIO + SETTINGS':'MUTED · AUDIO + SETTINGS';document.body.classList.toggle('sound-on',sound);document.querySelectorAll('.sound-toggle').forEach(b=>{b.setAttribute('aria-label',sound?'Turn sound off':'Turn sound on');b.setAttribute('aria-pressed',String(sound));});game?.setSound(sound);if(notify){audioDirector.enable(sound);if(sound)audioDirector.unlock();}if($('settings-sound'))$('settings-sound').textContent=sound?'MUTE ALL AUDIO':'ENABLE SOUND';saveStorage('mw-moto-sound',sound);$('audio-retry').hidden=!sound||!audioDirector.needsGesture;if(notify)toast(sound?'Metal radio on. Ride loud.':'Sound off. Stay focused.');}
function timeFormat(seconds,decimals=false){const s=Number.isFinite(seconds)?Math.max(0,seconds):0,h=Math.floor(s*100+1e-6);return `${String(Math.floor(h/6000)).padStart(2,'0')}:${String(Math.floor(h/100)%60).padStart(2,'0')}${decimals?'.'+String(h%100).padStart(2,'0'):''}`;}
function updateHUD(s){
  const mode=s.mode||lastConfig?.mode||'race',targetTime=s.targetTime||circuits.find(c=>c.id===lastConfig?.circuit)?.targetTime||100;
  paintHUD('hud-speed','textContent',String(Math.round(s.speed)).padStart(3,'0'));
  paintHUD('hud-gear','textContent',String(s.gear||1));paintHUD('hud-rpm','style.width',`${Math.max(0,Math.min(1,(s.rpm||0)>1?(s.rpm||0)/12500:(s.rpm||0)))*100}%`);paintHUD('hud-grip','style.width',`${Math.max(0,Math.min(1,s.grip??1))*100}%`);paintHUD('hud-grip','style.background',s.grip<.45?'#ffb27d':'#addbd4');paintHUD('hud-lean','textContent',`${Math.round(Math.abs(s.lean||0)*180/Math.PI)}°`);
  paintHUD('hud-position','class.time-left',mode==='timeattack');
  paintHUD('hud-position-label','textContent',mode==='timeattack'?'TIME LEFT':mode==='elimination'?'TAKEDOWNS':'POSITION');
  paintHUD('hud-position','innerHTML',mode==='timeattack'?`${Math.max(0,Math.ceil(targetTime-s.time))}<small>SEC</small>`:mode==='elimination'?`${s.takedowns}<small>/ 5</small>`:`${s.position}<small>/ ${s.totalRacers}</small>`);
  paintHUD('hud-time','textContent',timeFormat(s.time,true));paintHUD('hud-progress','style.width',`${s.progress*100}%`);
  paintHUD('hud-health','style.width',`${s.health}%`);paintHUD('hud-health','style.background',s.health<30?'#ff5f73':'var(--lime)');paintHUD('hud-health-text','textContent',`${s.health}%`);
  paintHUD('hud-nitro','style.width',`${s.nitro}%`);paintHUD('hud-takedowns','textContent',`${s.takedowns} TAKEDOWN${s.takedowns===1?'':'S'}`);paintHUD('race-message','textContent',s.message||'');
  paintHUD('hud-objective','textContent',typeof s.objective==='string'?s.objective:(mode==='elimination'?'5 TAKEDOWNS TO WIN':mode==='timeattack'?`FINISH UNDER ${targetTime} SECONDS`:'FIGHT FOR FIRST'));
  paintHUD('hud-score','textContent',`${Math.round(s.score||0).toLocaleString()} STREET POINTS`);
  const countdownVisible=(s.countdown>0)||(s.time<.65&&s.countdown<=0);
  paintHUD('race-countdown','hidden',!countdownVisible);paintHUD('countdown-number','textContent',s.countdown>0?Math.ceil(s.countdown):'RIDE!');paintHUD('countdown-caption','textContent',s.countdown>0?'HOLD YOUR LINE. OWN THE ROAD.':'MAKE IT YOURS.');
  paintHUD('race-countdown','class.go',s.countdown<=0);
  const flow=s.flow||{},charge=Math.max(0,Math.min(100,Number(flow.charge)||0)),overdrive=!!flow.active;
  paintHUD('flow-meter','hidden',countdownVisible);paintHUD('flow-meter','class.ready',!!flow.ready);paintHUD('flow-meter','class.active',overdrive);paintHUD('race-screen','class.overdrive',overdrive);
  paintHUD('touch-attack','hidden',mode==='timeattack');
  const strikeReady=!!s.target&&s.target.inRange!==false&&s.target.ready!==false&&!(s.target.cooldown>0)&&!countdownVisible;
  paintHUD('touch-attack','class.strike-ready',strikeReady);paintHUD('touch-attack-label','textContent',strikeReady?'STRIKE':'HIT');
  paintHUD('touch-boost','style.--charge',String(Math.max(0,Math.min(1,(Number(s.nitro)||0)/100))));
  paintHUD('touch-boost','class.depleted',s.nitro<=1&&!overdrive);
  paintHUD('touch-boost','class.overdrive-ready',!!flow.ready||overdrive);paintHUD('touch-boost-label','textContent',overdrive?'OVERDRIVE':flow.ready?'OVERDRIVE':'NITRO');
  paintHUD('audio-retry','hidden',!sound||!audioDirector.needsGesture);
  paintHUD('flow-label','textContent',overdrive?'OVERDRIVE':flow.ready?'FLOW READY':'FLOW');paintHUD('flow-value','textContent',overdrive?Math.max(0,Number(flow.remaining)||0).toFixed(1)+'s':Math.round(charge)+'%');
  paintHUD('flow-fill','style.transform','scaleX('+((overdrive?Math.max(0,Math.min(100,(Number(flow.remaining)||0)/5*100)):charge)/100).toFixed(3)+')');
  paintHUD('flow-prompt','textContent',overdrive?'MAKE EVERY SECOND COUNT':flow.ready?(coarsePointer.matches?'HOLD NITRO FOR OVERDRIVE':'HOLD SHIFT FOR OVERDRIVE'):'CLEAN PASSES + STRIKES');
  const courseEvent=s.courseEvent,eventVisible=!!courseEvent&&!countdownVisible&&!s.threat;
  paintHUD('course-event','hidden',!eventVisible);
  if(eventVisible){const complete=!!courseEvent.completed,failed=!!courseEvent.failed,target=Math.max(.001,Number(courseEvent.target)||1),value=Math.max(0,Number(courseEvent.value)||0),progress=Math.min(1,value/target);
    paintHUD('course-event','class.completed',complete);paintHUD('course-event','class.failed',failed);paintHUD('course-event','style.borderColor',courseEvent.accent||'#dfb964');
    paintHUD('course-event-kind','textContent',complete?'CONTRACT PAID':failed?'CONTRACT CLOSED':courseEvent.kind.toUpperCase()+' CONTRACT');paintHUD('course-event-range','textContent',Math.max(0,Math.ceil((Number(courseEvent.remainingMetres)||0)/10)*10)+' M');
    paintHUD('course-event-name','textContent',courseEvent.name);paintHUD('course-event-objective','textContent',complete?'+350 POINTS · +20 NITRO · +20 FLOW':courseEvent.objective||courseEvent.description);paintHUD('course-event-progress','style.width',((complete?1:progress)*100).toFixed(1)+'%');
    paintHUD('course-event-status','textContent',complete?'KEEP YOUR MOMENTUM':failed?'NEXT DISTRICT. NEXT CHANCE.':courseEvent.kind==='sprint'?`${Math.min(value,target).toFixed(1)} / ${target} SECONDS`:`${Math.min(Math.floor(value),target)} / ${target} ${courseEvent.kind==='brawl'?'STRIKES':'CLEAN PASS'}`);
  }
  const upcoming=s.upcomingEvent,upcomingVisible=!!upcoming&&!courseEvent&&!countdownVisible&&!s.threat;paintHUD('event-upcoming','hidden',!upcomingVisible);
  if(upcomingVisible){paintHUD('event-upcoming-name','textContent',upcoming.name);paintHUD('event-upcoming-distance','textContent',Math.max(0,Math.ceil(upcoming.distance/10)*10)+' M');}
  paintHUD('target-card','hidden',!s.target||countdownVisible||!!s.threat);
  if(s.target){const left=s.target.side<0;paintHUD('target-name','textContent',s.target.name);paintHUD('target-side','textContent',left?'RIVAL ON YOUR LEFT':'RIVAL ON YOUR RIGHT');const inRange=s.target.inRange!==false,ready=s.target.ready!==false&&!(s.target.cooldown>0);paintHUD('target-card','class.target-ready',inRange&&ready);paintHUD('target-prompt','textContent',!inRange?'CLOSE THE GAP':!ready?'WEAPON RECOVERING':coarsePointer.matches?'TAP HIT TO STRIKE':left?'Q / SPACE TO STRIKE':'E / SPACE TO STRIKE');paintHUD('target-health','style.width',`${Math.max(0,Math.min(100,s.target.hp))}%`);}
  paintHUD('draft-indicator','hidden',!s.drafting);paintHUD('drift-indicator','hidden',!s.drifting);paintHUD('combo-indicator','hidden',!(s.combo>1));paintHUD('combo-indicator','textContent',`${s.combo||1}× COMBO`);
  paintHUD('race-screen','class.boosting',!!s.boosting);
  paintHUD('race-screen','class.low-integrity',s.health<25);
  paintHUD('grid-intro','hidden',!countdownVisible);
  const sector=s.sector||{index:Math.min(3,Math.floor((s.progress||0)*3)+1),total:3,time:0};
  paintHUD('hud-district','textContent',s.district?.name||CIRCUIT_DISTRICTS[lastConfig?.circuit||selection.circuit][Math.min(2,Math.floor((s.progress||0)*3))].name);
  paintHUD('hud-sector','textContent',`SECTOR ${sector.index} / ${sector.total||3}`);paintHUD('hud-sector-time','textContent',timeFormat(sector.time||0,true));
  for(let i=1;i<=3;i++){paintHUD('sector-step-'+i,'class.complete',i<sector.index);paintHUD('sector-step-'+i,'class.current',i===sector.index);}
  const split=sector.last;paintHUD('hud-sector-split','textContent',split?`${split.delta<=0?'−':'+'}${Math.abs(split.delta||0).toFixed(1)}s`:'');paintHUD('hud-sector-split','class.ahead',!!split&&split.delta<=0);
  const corner=s.corner,showCorner=!!corner&&corner.direction!==0&&corner.severity>.12&&!countdownVisible;
  paintHUD('corner-card','hidden',!showCorner);
  if(showCorner){paintHUD('corner-arrow','textContent',corner.direction<0?'↰':'↱');paintHUD('corner-distance','textContent',Math.max(0,Math.round(corner.distance||0))+' M');paintHUD('corner-speed','innerHTML',Math.round(corner.recommendedSpeed||0)+' <em>KM/H</em>');paintHUD('corner-instruction','textContent',corner.brake?'BRAKE NOW':corner.direction<0?'LEFT BEND':'RIGHT BEND');paintHUD('corner-card','class.brake-now',!!corner.brake);}
  const threat=s.threat;paintHUD('race-threat','hidden',!threat||countdownVisible);
  if(threat){paintHUD('race-threat','class.from-left',threat.side<0);paintHUD('race-threat','class.from-right',threat.side>0);paintHUD('threat-arrow','textContent',threat.side<0?'←':'→');paintHUD('threat-name','textContent',threat.name+' WINDING UP');paintHUD('threat-direction','textContent',threat.side<0?'MOVE RIGHT OR COUNTER':'MOVE LEFT OR COUNTER');paintHUD('threat-progress','style.width',Math.max(0,Math.min(100,(threat.progress||0)*100))+'%');}
  if(s.takedowns>previousTakedowns&&s.time>0){combatUntil=s.time+1.45;paintHUD('combat-burst-title','textContent',s.combo>1?s.combo+'× TAKEDOWN':'TAKEDOWN');paintHUD('combat-burst-detail','textContent',s.combo>1?'COMBO ALIVE · STAY ON THE HUNT':'RIVAL DOWN · KEEP IT MOVING');}
  previousTakedowns=s.takedowns||0;paintHUD('combat-burst','hidden',!(s.time<combatUntil)||countdownVisible);paintHUD('race-message','hidden',countdownVisible||s.time<combatUntil);

}
function showResults(result){
  raceActive=false;clearTouchControls();closeDialogs();audioDirector.setMode('results');
  const mode=result.mode||lastConfig?.mode||'race';const objectiveComplete=result.objectiveComplete??(result.finished&&(mode==='elimination'?result.takedowns>=5:mode==='timeattack'?result.time<=(result.targetTime||circuits.find(c=>c.id===result.circuit)?.targetTime||100):true));
  const successfulFinish=result.finished||result.reason==='objective';
  const won=successfulFinish&&(mode==='race'?result.position===1:objectiveComplete);
  const rider=lastConfig?.rider||riders.find(r=>r.id===selection.rider);$('result-portrait').src=portrait(rider);$('result-portrait').alt=rider.name+' original NFT';$('result-rider-name').textContent=rider.name;$('result-rider-token').textContent='METAWINNERS #'+rider.token;$('result-machine').textContent=rider.bike;
  $('result-contracts').hidden=!Number.isFinite(result.challengesCompleted);$('result-contracts').textContent=`${result.challengesCompleted||0}/3 CONTRACTS · ${result.overdriveUses||0} OVERDRIVE${result.overdriveUses===1?'':'S'} · ${result.maxFlowChain||0} BEST FLOW CHAIN`;
  $('results-title').innerHTML=!successfulFinish?(result.reason==='timeout'?'TIME’S UP':'WIPED OUT')+'<span class="lime">.</span>':won?(mode==='race'?'STREETS CONQUERED':'MISSION COMPLETE')+'<span class="lime">.</span>':'RUN COMPLETE<span class="lime">.</span>';
  $('results-eyebrow').textContent=successfulFinish?modes.find(m=>m.id===mode).name+' / RESULTS':'DUST YOURSELF OFF. RIDE AGAIN.';
  const rank=!successfulFinish?'DNF':mode==='race'?String(result.position).padStart(2,'0'):objectiveComplete?'CLEAR':'RETRY';
  $('result-rank').innerHTML=rank+'<span>'+(!successfulFinish?(result.reason==='timeout'?'CLOCK EXPIRED':'BIKE WRECKED'):mode==='race'?'FINISH POSITION':objectiveComplete?'OBJECTIVE COMPLETE':'OBJECTIVE INCOMPLETE')+'</span>';
  $('result-rank').classList.toggle('result-word',rank.length>2);
  $('result-time').textContent=timeFormat(result.time,true);$('result-hits').textContent=result.takedowns;$('result-score').textContent=Math.round(result.score).toLocaleString();
  const bestKey=`${result.circuit}:${mode}${(result.difficulty||lastConfig?.difficulty||'standard')==='standard'?'':':'+(result.difficulty||lastConfig.difficulty)}`,previous=Number(bests[bestKey])||0;
  if(successfulFinish&&result.score>previous){bests[bestKey]=result.score;saveStorage('mw-moto-bests',bests);$('best-message').textContent='NEW PERSONAL BEST · '+Math.round(result.score).toLocaleString()+' STREET POINTS';}
  else $('best-message').textContent=previous?'PERSONAL BEST · '+previous.toLocaleString()+' POINTS':'Every legend starts somewhere. Take another shot.';
  $('result-detail').textContent=`${result.nearMisses||0} NEAR MISSES · ${result.perfectPasses||0} PERFECT PASSES · ${result.cleanSectors||0}/3 CLEAN SECTORS · ${result.maxCombo||result.combo||1}× BEST COMBO`;
  const medal=won?'GOLD':successfulFinish?'FINISHER':'UNFINISHED';$('result-medal').textContent=won?'★':successfulFinish?'MW':'↻';$('result-medal').setAttribute('aria-label',medal);$('result-medal').classList.toggle('gold',won);
  const splits=result.sectorSplits||[];$('result-sectors').hidden=!splits.length;$('result-sectors').innerHTML=splits.map((seconds,i)=>`<div><small>SECTOR 0${i+1}</small><strong>${timeFormat(typeof seconds==='number'?seconds:seconds.time,true)}</strong></div>`).join('');
  const validCircuit=circuits.some(c=>c.id===result.circuit)?result.circuit:selection.circuit;history.unshift({rider:lastConfig?.rider?.id||selection.rider,circuit:validCircuit,mode,difficulty:result.difficulty||lastConfig?.difficulty||'standard',score:Number(result.score)||0,time:Number(result.time)||0,sectors:splits.map(v=>typeof v==='number'?v:v.time).filter(v=>Number.isFinite(v)&&v>0),finished:successfulFinish,won});history=history.slice(0,30);saveStorage('mw-moto-history',history);renderRunHistory({...result,circuit:validCircuit,mode});renderCommandDeck();
  $('results-modal').showModal();
}
function handleRaceError(error){
  console.warn('Race graphics unavailable:',error);returnToLobby();$('race-error').hidden=false;
  const errorMessage=String(error?.message||error),interrupted=/context.*(lost|interrupt)|graphics.*interrupt/i.test(errorMessage),assetFailure=/load|fetch|network|artwork|motorcycle asset|texture/i.test(errorMessage)&&!interrupted;
  $('race-error').querySelector?.('strong')?.replaceChildren(assetFailure?'YOUR RIDER COULD NOT LOAD':interrupted?'GRAPHICS INTERRUPTED':'YOUR RIDE NEEDS 3D ACCELERATION');
  $('race-error-message').textContent=assetFailure?'A rider or motorcycle asset could not be downloaded. Check your connection, then enter the grid again.':interrupted?'Your browser interrupted the graphics session. Close other demanding tabs, then start a new race. Reload this page if the view does not reconnect.':'This 3D edition needs WebGL 2. Enable hardware acceleration in your browser, then reload. Try current Chrome, Safari, Firefox or Edge if your device supports it.';
  $('race-error').scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
}
async function startRace(restart=false){
  audioDirector.enable(sound);if(sound)audioDirector.unlock();audioDirector.setMode('menu');
  const generation=++raceGeneration;
  closeDialogs();closeGaragePreview();game?.destroy();game=null;clearTouchControls();raceActive=false;$('race-error').hidden=true;
  if(!restart||!lastConfig)lastConfig={circuit:selection.circuit,rider:riders.find(r=>r.id===selection.rider),weapon:selection.weapon,sound,mode:selection.mode,quality:selection.quality,camera:selection.camera,difficulty:selection.difficulty,audio:{...audioMix}};
  lastConfig.sound=sound;lastConfig.audio={...audioMix};const priorSectors=history.filter(r=>r.finished&&r.circuit===lastConfig.circuit&&r.mode===lastConfig.mode&&(r.difficulty||'standard')===lastConfig.difficulty&&Array.isArray(r.sectors));lastConfig.sectorBests=Array.from({length:3},(_,i)=>{const times=priorSectors.map(r=>r.sectors[i]).filter(v=>Number.isFinite(v)&&v>0);return times.length?Math.min(...times):0;});previousTakedowns=0;combatUntil=0;hudValues.clear();const config=lastConfig,grid=prepareGrid(config);
  $('race-screen').hidden=true;$('lobby').hidden=false;document.body.style.overflow='';$('race-loading').showModal();
  try{
    await Promise.all([prepareRiderModels(grid),prepareWorldAssets()]);
    if(generation!==raceGeneration)return;
    $('race-loading').close();raceActive=true;$('lobby').hidden=true;$('race-screen').hidden=false;document.body.style.overflow='hidden';
    $('hud-track').textContent=circuits.find(c=>c.id===lastConfig.circuit).name;
    game=new MotoGame($('race-canvas'),{audio:audioDirector,quality:lastConfig.quality,circuit:lastConfig.circuit,onUpdate:updateHUD,onFinish:showResults,onError:handleRaceError,onPause:paused=>{if(paused&&raceActive){clearTouchControls();if(!$('pause-modal').open)$('pause-modal').showModal();}else{if($('pause-modal').open)$('pause-modal').close();if(raceActive&&!document.hidden&&!dialogs.some(d=>d.open))$('race-canvas').focus?.({preventScroll:true});}}});game.start(config);if(document.hidden)game.pause();if(!sound&&!mutedHintShown){mutedHintShown=true;toast('Sound is muted. Tap ♪ for Metal Radio and engine audio.');}
  }catch(error){if(generation===raceGeneration)handleRaceError(error);}
}
function returnToLobby(){raceGeneration++;raceActive=false;closeDialogs();game?.destroy();game=null;clearTouchControls();$('race-screen').hidden=true;$('lobby').hidden=false;document.body.style.overflow='';audioDirector.setMode('menu');renderCommandDeck();}
function setSteer(value){value=Math.max(-1,Math.min(1,value));$('steer-knob').style.transform=`translateX(${value*36}px)`;$('steer-pad').setAttribute('aria-valuenow',String(Math.round(value*100)));game?.setInput('steer',value);}
function clearTouchControls(){
  const pointer=steerPointer;steerPointer=null;steerKeys.clear();setSteer(0);$('steer-pad').classList.remove('active');if(pointer!==null)try{$('steer-pad').releasePointerCapture?.(pointer);}catch{}
  for(const [button,pointers]of controlPointers){const released=[...pointers];pointers.clear();button.classList.remove('pressed');game?.setInput(button.dataset.control,false);for(const id of released)if(typeof id==='number')try{button.releasePointerCapture?.(id);}catch{}}
}
for(const button of document.querySelectorAll('[data-open-settings]'))button.addEventListener('click',openSettings);
$('hud-settings').addEventListener('click',openSettings);$('pause-settings').addEventListener('click',openSettings);
for(const type of ['keydown','keyup'])$('settings-modal').addEventListener(type,e=>e.stopPropagation());
$('settings-modal').addEventListener('close',()=>{if(!$('settings-modal').open&&settingsReturnToPause&&raceActive&&game?.paused){settingsReturnToPause=false;$('pause-modal').showModal();}});
for(const key of ['music','effects'])$(key+'-volume').addEventListener('input',()=>{audioMix[key]=level(Number($(key+'-volume').value)/100,audioMix[key]);applyAudioMix();if(sound){audioDirector.enable(true);audioDirector.unlock();}});
$('fullscreen-toggle').addEventListener('click',()=>{if(document.fullscreenElement){document.exitFullscreen?.().catch(()=>toast('Fullscreen could not close.'));}else if(document.documentElement?.requestFullscreen){document.documentElement.requestFullscreen().catch(()=>toast('Fullscreen is unavailable in this browser.'));}else toast('Fullscreen is unavailable here. Landscape gives the widest view.');});
for(const id of ['deck-choose-circuit','mobile-choose-circuit'])$(id).addEventListener('click',()=>$('circuits').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'}));
for(const b of document.querySelectorAll('[data-garage-view]'))b.addEventListener('click',()=>{garageView=b.dataset.garageView;garagePreview?.setView?.(garageView);for(const other of document.querySelectorAll('[data-garage-view]')){const chosen=other.dataset.garageView===garageView;other.classList.toggle('selected',chosen);other.setAttribute('aria-pressed',String(chosen));}});
for(const b of document.querySelectorAll('[data-garage-pose]'))b.addEventListener('click',()=>{garagePose=b.dataset.garagePose;garagePreview?.setPose?.(garagePose);$('garage-pose-label').textContent=(garagePose==='corner'?'LEAN':garagePose.toUpperCase())+' / 3D ADAPTATION';for(const other of document.querySelectorAll('[data-garage-pose]')){const chosen=other.dataset.garagePose===garagePose;other.classList.toggle('selected',chosen);other.setAttribute('aria-pressed',String(chosen));}});
for(const b of document.querySelectorAll('[data-garage-zoom]'))b.addEventListener('click',()=>garagePreview?.zoomBy?.(b.dataset.garageZoom==='in'?-.25:.25));
function adjacentRider(direction){const index=riders.findIndex(r=>r.id===selection.rider);selection.rider=riders[(index+direction+riders.length)%riders.length].id;$('rider-search').value='';$('rider-family').value='all';renderGarage();saveLoadout();}
$('garage-previous').addEventListener('click',()=>adjacentRider(-1));$('garage-next').addEventListener('click',()=>adjacentRider(1));
$('garage-orbit').addEventListener('click',()=>{garageOrbit=!garageOrbit;garagePreview?.setAutoRotate?.(garageOrbit);$('garage-orbit').setAttribute('aria-pressed',String(garageOrbit));$('garage-orbit').textContent=garageOrbit?'↻ ROTATE':'↻ PAUSED';});
$('mode-grid').addEventListener('click',e=>{const b=e.target.closest('[data-mode]');if(!b)return;selection.mode=b.dataset.mode;renderModes();renderCircuitBrief();saveLoadout();});
$('dismiss-race-error').addEventListener('click',()=>{$('race-error').hidden=true;});
$('garage-modal').addEventListener('close',()=>{if(!$('garage-modal').open)closeGaragePreview();});
$('circuit-grid').addEventListener('click',e=>{const b=e.target.closest('[data-circuit]');if(!b)return;selection.circuit=b.dataset.circuit;renderCircuits();saveLoadout();});
$('rider-grid').addEventListener('click',e=>{const b=e.target.closest('[data-rider]');if(!b||!riders.some(r=>r.id===b.dataset.rider))return;selection.rider=b.dataset.rider;renderGarage();saveLoadout();});
$('roster-preview').addEventListener('click',e=>{const b=e.target.closest('[data-roster-rider]');if(!b||!riders.some(r=>r.id===b.dataset.rosterRider))return;selection.rider=b.dataset.rosterRider;renderGarage();saveLoadout();openDialog('garage-modal');});
$('rider-search').addEventListener('input',renderRoster);$('rider-family').addEventListener('change',renderRoster);
for(const kind of ['quality','camera','difficulty'])$(kind+'-select').addEventListener('change',e=>{selection[kind]=e.target.value;saveLoadout();});
$('weapon-grid').addEventListener('click',e=>{const b=e.target.closest('[data-weapon]');if(!b)return;selection.weapon=b.dataset.weapon;renderGarage();saveLoadout();});
for(const b of document.querySelectorAll('[data-open-garage]'))b.addEventListener('click',()=>openDialog('garage-modal'));
for(const b of document.querySelectorAll('[data-open-guide]'))b.addEventListener('click',()=>openDialog('guide-modal'));
for(const b of document.querySelectorAll('[data-close]'))b.addEventListener('click',()=>b.closest('dialog').close());
for(const b of document.querySelectorAll('[data-nav]'))b.addEventListener('click',()=>{if(b.dataset.nav==='race'){$('circuits').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});}else openDialog(b.dataset.nav==='garage'?'garage-modal':'guide-modal');});
function wakeAudio(e={}){if(!sound||document.hidden||e.repeat)return;if(!audioDirector.enabled)audioDirector.enable(true);else if(audioDirector.needsGesture||audioDirector.ctx&&audioDirector.ctx.state!=='running')audioDirector.unlock();}
// pointerup retains Safari's touch gesture even when racing controls cancel click.
document.addEventListener('pointerup',wakeAudio,true);document.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')wakeAudio(e);},true);
$('audio-retry').addEventListener('click',()=>{audioDirector.enable(sound);if(sound)audioDirector.unlock();});
for(const b of document.querySelectorAll('.sound-toggle'))b.addEventListener('click',()=>setSound(!sound,true));
for(const id of ['ride-now','start-race','mobile-start-race','guide-play'])$(id).addEventListener('click',()=>startRace());
$('save-garage').addEventListener('click',()=>{$('garage-modal').close();toast('Loadout ready. Own the streets.');});
$('pause-race').addEventListener('click',()=>game?.pause());
$('resume-race').addEventListener('click',()=>game?.resume());
$('restart-race').addEventListener('click',()=>startRace(true));
$('quit-race').addEventListener('click',()=>{returnToLobby();openDialog('garage-modal');});
$('race-again').addEventListener('click',()=>startRace(true));
$('back-lobby').addEventListener('click',returnToLobby);
$('cancel-loading').addEventListener('click',()=>{returnToLobby();openDialog('garage-modal');});
$('race-loading').addEventListener('cancel',e=>{e.preventDefault();returnToLobby();});
$('pause-modal').addEventListener('cancel',e=>{e.preventDefault();game?.resume();});
$('results-modal').addEventListener('cancel',e=>{e.preventDefault();returnToLobby();});
for(const d of [$('garage-modal'),$('guide-modal')])d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});
for(const b of document.querySelectorAll('[data-control]')){
  const pointers=new Set();controlPointers.set(b,pointers);
  b.addEventListener('pointerdown',e=>{if(e.button>0||b.hidden||b.disabled||!raceActive||game?.paused)return;e.preventDefault();pointers.add(e.pointerId);try{b.setPointerCapture(e.pointerId);}catch{}b.classList.add('pressed');game?.setInput(b.dataset.control,true);});
  const release=e=>{if(!pointers.delete(e.pointerId))return;e.preventDefault();if(pointers.size)return;b.classList.remove('pressed');game?.setInput(b.dataset.control,false);};
  b.addEventListener('keydown',e=>{if(e.key!==' '&&e.key!=='Enter')return;e.preventDefault();e.stopPropagation();pointers.add('key:'+e.key);b.classList.add('pressed');game?.setInput(b.dataset.control,true);});
  b.addEventListener('keyup',e=>{if(e.key!==' '&&e.key!=='Enter')return;e.stopPropagation();release({pointerId:'key:'+e.key,preventDefault:()=>e.preventDefault()});});
  b.addEventListener('blur',()=>{for(const id of [...pointers])if(typeof id==='string')release({pointerId:id,preventDefault(){}});});
  b.addEventListener('pointerup',release);b.addEventListener('pointercancel',release);b.addEventListener('lostpointercapture',release);b.addEventListener('contextmenu',e=>e.preventDefault());
}
const steerPad=$('steer-pad');
function steerMove(e){if(steerPointer!==e.pointerId)return;e.preventDefault();setSteer(steeringResponse((e.clientX-steerOrigin)/steerRadius));}
steerPad.addEventListener('pointerdown',e=>{if(steerPointer!==null||e.button>0||!raceActive||game?.paused)return;e.preventDefault();steerPointer=e.pointerId;steerOrigin=e.clientX;steerRadius=Math.max(36,Math.min(70,steerPad.getBoundingClientRect().width*.35));try{steerPad.setPointerCapture(e.pointerId);}catch{}steerPad.classList.add('active');setSteer(0);});
steerPad.addEventListener('pointermove',steerMove);
for(const event of ['pointerup','pointercancel','lostpointercapture'])steerPad.addEventListener(event,e=>{if(steerPointer!==e.pointerId)return;e.preventDefault();steerPointer=null;setSteer(0);steerPad.classList.remove('active');});
steerPad.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();e.stopPropagation();steerKeys.add(e.key);setSteer((Number(steerKeys.has('ArrowRight'))-Number(steerKeys.has('ArrowLeft')))*.65);}});
steerPad.addEventListener('keyup',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();e.stopPropagation();steerKeys.delete(e.key);setSteer((Number(steerKeys.has('ArrowRight'))-Number(steerKeys.has('ArrowLeft')))*.65);}});
steerPad.addEventListener('blur',()=>{steerKeys.clear();const pointer=steerPointer;steerPointer=null;setSteer(0);steerPad.classList.remove('active');if(pointer!==null)try{steerPad.releasePointerCapture?.(pointer);}catch{}});
steerPad.addEventListener('contextmenu',e=>e.preventDefault());
window.addEventListener('blur',clearTouchControls);
function pauseForRotation(){clearTouchControls();if(raceActive)game?.pause();}
window.addEventListener('orientationchange',pauseForRotation);window.screen?.orientation?.addEventListener('change',pauseForRotation);
window.addEventListener('pagehide',()=>{game?.pause();garagePreview?.pause();audioDirector.setActive(false);});
document.addEventListener?.('visibilitychange',()=>{audioDirector.setActive(!document.hidden);if(document.hidden){clearTouchControls();game?.pause();garagePreview?.pause();}else if($('garage-modal').open&&$('garage-canvas').style.visibility==='visible')garagePreview?.resume();});
window.addEventListener('pageshow',()=>{audioDirector.setActive(!document.hidden);if(!document.hidden&&$('garage-modal').open&&$('garage-canvas').style.visibility==='visible')garagePreview?.resume();});
$('stage-gesture').textContent=coarsePointer.matches?'SWIPE ↔ ROTATE · ↕ SCROLL · +/− ZOOM':'DRAG TO ORBIT · SCROLL TO ZOOM';
$('year').textContent=new Date().getFullYear();
$('rider-family').innerHTML='<option value="all">ALL STYLES</option>'+[...new Set(riders.map(r=>r.model?.family).filter(Boolean))].sort().map(f=>`<option value="${f}">${f.toUpperCase()}</option>`).join('');
$('rider-family').value='all';$('quality-select').value=selection.quality;$('camera-select').value=selection.camera;$('difficulty-select').value=selection.difficulty;$('garage-orbit').setAttribute('aria-pressed',String(garageOrbit));$('garage-orbit').textContent=garageOrbit?'↻ ROTATE':'↻ PAUSED';
renderCircuits();renderModes();renderGarage();setSound(sound);applyAudioMix();saveLoadout();
