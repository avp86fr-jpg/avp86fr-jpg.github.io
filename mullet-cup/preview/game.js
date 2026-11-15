(()=>{
'use strict';
const $=id=>document.getElementById(id);
const cv=$('c'),cx=cv.getContext('2d',{alpha:false});
const TEST=/[?&]test=1/.test(location.search);
const R=Math.random,clamp=(v,a,b)=>v<a?a:v>b?b:v,lerp=(a,b,t)=>a+(b-a)*t,hyp=Math.hypot,PI=Math.PI;
const pick=a=>a[(R()*a.length)|0];
function rng(s){return function(){s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function h53(str,seed=7){let h1=0xdeadbeef^seed,h2=0x41c6ce57^seed;for(let i=0;i<str.length;i++){const c=str.charCodeAt(i);h1=Math.imul(h1^c,2654435761);h2=Math.imul(h2^c,1597334677);}h1=Math.imul(h1^h1>>>16,2246822507)^Math.imul(h2^h2>>>13,3266489909);h2=Math.imul(h2^h2>>>16,2246822507)^Math.imul(h1^h1>>>13,3266489909);return(4294967296*(2097151&h2)+(h1>>>0)).toString(36);}
let VW=960,VH=540,SCL=1,PY=0;
function resize(){const w=innerWidth,h=innerHeight;let d=Math.min(devicePixelRatio||1,2);if(w*h*d*d>2.4e6)d=Math.sqrt(2.4e6/(w*h));
cv.width=Math.round(w*d);cv.height=Math.round(h*d);cv.style.width=w+'px';cv.style.height=h+'px';
VH=540;VW=VH*w/h;if(VW<640){VW=640;VH=VW*h/w;}SCL=cv.width/VW;PY=(VH-540)/2;crowdCv=null;}
addEventListener('resize',resize);
/* ---------- input ---------- */
const keys={},kHit={};let usingTouch=false;
addEventListener('keydown',e=>{if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code))e.preventDefault();if(!e.repeat)kHit[e.code]=(kHit[e.code]||0)+1;keys[e.code]=1;usingTouch=false;audioInit();});
addEventListener('keyup',e=>{keys[e.code]=0;});
const T_={joy:null,jx:0,jy:0,A:0,B:0,ids:{}};
const mkB=()=>({d:0,h:0,pr:0,rel:0,held:0});
const inp={mx:0,my:0,mag:0,A:mkB(),B:mkB(),C:mkB(),nav:{u:0,d:0,l:0,r:0,ok:0,back:0}};
const BA={x:0,y:0,r:46},BB={x:0,y:0,r:58};
function layoutPads(){BA.x=VW-205;BA.y=VH-72;BB.x=VW-88;BB.y=VH-122;}
function toV(e){const r=cv.getBoundingClientRect();return[(e.clientX-r.left)/r.width*VW,(e.clientY-r.top)/r.height*VH];}
cv.addEventListener('pointerdown',e=>{audioInit();const[x,y]=toV(e);if(e.pointerType!=='mouse')usingTouch=true;
 if(scr==='play'&&usingTouch&&e.pointerType!=='mouse'&&M&&(M.phase==='live'||M.phase==='set')){try{cv.setPointerCapture(e.pointerId);}catch(_){}
  layoutPads();
  if(hyp(x-BB.x,y-BB.y)<BB.r*1.3){T_.ids[e.pointerId]='B';T_.B=1;return;}
  if(hyp(x-BA.x,y-BA.y)<BA.r*1.35){T_.ids[e.pointerId]='A';T_.A=1;return;}
  if(x<VW*0.55){T_.ids[e.pointerId]='J';T_.joy={ox:x,oy:y};T_.jx=T_.jy=0;return;}}
 uiClick(x,y);});
cv.addEventListener('pointermove',e=>{const k=T_.ids[e.pointerId];if(k!=='J'||!T_.joy)return;const[x,y]=toV(e);let dx=x-T_.joy.ox,dy=y-T_.joy.oy,d=hyp(dx,dy);
 if(d>70){T_.joy.ox=x-dx/d*70;T_.joy.oy=y-dy/d*70;dx=x-T_.joy.ox;dy=y-T_.joy.oy;d=70;}const m=d<8?0:Math.min(1,d/55);T_.jx=d?dx/d*m:0;T_.jy=d?dy/d*m:0;T_.joy.x=x;T_.joy.y=y;});
function pUp(e){const k=T_.ids[e.pointerId];if(!k)return;delete T_.ids[e.pointerId];if(k==='J'){T_.joy=null;T_.jx=T_.jy=0;}else T_[k]=0;}
cv.addEventListener('pointerup',pUp);cv.addEventListener('pointercancel',pUp);
let padPrev={};
function readInput(dt){let mx=0,my=0;const K=keys;
 if(K.ArrowLeft||K.KeyA)mx-=1;if(K.ArrowRight||K.KeyD)mx+=1;if(K.ArrowUp||K.KeyW)my-=1;if(K.ArrowDown||K.KeyS)my+=1;
 let gA=0,gB=0,gC=0,gP={};const gps=navigator.getGamepads?navigator.getGamepads():[];
 for(const g of gps){if(!g)continue;const ax=g.axes[0]||0,ay=g.axes[1]||0;if(Math.abs(ax)>0.2)mx+=ax;if(Math.abs(ay)>0.2)my+=ay;const b=i=>g.buttons[i]&&g.buttons[i].pressed;
  if(b(14))mx-=1;if(b(15))mx+=1;if(b(12))my-=1;if(b(13))my+=1;gA|=b(0);gB|=b(2)||b(1);gC|=b(3);gP={u:b(12)||ay<-0.6,d:b(13)||ay>0.6,l:b(14)||ax<-0.6,r:b(15)||ax>0.6,ok:b(0)||b(9),back:b(1)||b(8),st:b(9)};break;}
 if(T_.joy){mx+=T_.jx;my+=T_.jy;}
 const m=hyp(mx,my);if(m>1){mx/=m;my/=m;}inp.mx=mx;inp.my=my;inp.mag=Math.min(1,m);
 const st=(o,d)=>{if(d&&!o.d){o.pr=1;o.h=0;}if(!d&&o.d){o.rel=1;o.held=o.h;}o.d=d;if(d)o.h+=dt;};
 st(inp.A,!!(K.KeyX||K.KeyJ||gA||T_.A));st(inp.B,!!(K.KeyC||K.KeyK||K.Space||gB||T_.B));st(inp.C,!!(K.KeyV||K.KeyL||gC));
 const n=inp.nav,e=(k)=>gP[k]&&!padPrev[k];
 const c=(a,b,g)=>(kHit[a]||0)+(kHit[b]||0)+(e(g)?1:0);n.u=c('ArrowUp','KeyW','u');n.d=c('ArrowDown','KeyS','d');n.l=c('ArrowLeft','KeyA','l');n.r=c('ArrowRight','KeyD','r');
 n.ok=kHit.Enter||kHit.Space||kHit.KeyX||kHit.KeyJ||e('ok');n.back=kHit.Escape||kHit.KeyP||kHit.Backspace||e('back');n.pause=kHit.Escape||kHit.KeyP||e('st');
 padPrev=gP;for(const k in kHit)delete kHit[k];}
function endFrameInput(){for(const b of[inp.A,inp.B,inp.C]){b.pr=0;b.rel=0;}}
const hit=b=>b.pr?(b.pr=0,1):0,rel=b=>b.rel?(b.rel=0,1):0;
/* ---------- audio (all synthesized) ---------- */
let AC=null,MG,NB,crowdG,muted=false;
function audioInit(){if(AC){if(AC.state==='suspended')AC.resume();return;}try{AC=new(window.AudioContext||window.webkitAudioContext)();}catch(e){return;}
 MG=AC.createGain();MG.gain.value=0.8;MG.connect(AC.destination);NB=AC.createBuffer(1,AC.sampleRate*2,AC.sampleRate);const d=NB.getChannelData(0);let l=0;for(let i=0;i<d.length;i++){const w=R()*2-1;l=l*0.6+w*0.4;d[i]=l*1.4;}
 const s=AC.createBufferSource();s.buffer=NB;s.loop=true;const f=AC.createBiquadFilter();f.type='bandpass';f.frequency.value=650;f.Q.value=0.5;crowdG=AC.createGain();crowdG.gain.value=0;s.connect(f).connect(crowdG).connect(MG);s.start();}
function crowd(l){if(AC&&crowdG)crowdG.gain.setTargetAtTime(l*0.25,AC.currentTime,0.5);}
function env(g,t,a,p,d){g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(p,t+a);g.gain.exponentialRampToValueAtTime(0.0001,t+a+d);}
function noise(dur,f,q,p,a,type,t0){const t=AC.currentTime+(t0||0),s=AC.createBufferSource();s.buffer=NB;const fl=AC.createBiquadFilter();fl.type=type||'bandpass';fl.frequency.value=f;fl.Q.value=q;const g=AC.createGain();env(g,t,a,p,dur);s.connect(fl).connect(g).connect(MG);s.start(t,R()*1.2);s.stop(t+a+dur+0.05);}
function tone(f,dur,type,p,t0,f2){const t=AC.currentTime+(t0||0),o=AC.createOscillator();o.type=type;o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+dur);const g=AC.createGain();env(g,t,0.01,p,dur);o.connect(g).connect(MG);o.start(t);o.stop(t+dur+0.05);}
const SND={
 kick(p){if(!AC)return;noise(0.05,1400,0.7,0.2+0.35*p,0.002,'lowpass');tone(160,0.09,'sine',0.15+0.35*p,0,45);},
 whistle(n,long){if(!AC)return;for(let i=0;i<(n||1);i++){const t=AC.currentTime+i*0.3,dur=long&&i===n-1?0.85:0.2,o=AC.createOscillator(),l=AC.createOscillator(),lg=AC.createGain(),g=AC.createGain();o.frequency.value=2850;l.frequency.value=32;lg.gain.value=170;l.connect(lg).connect(o.frequency);env(g,t,0.015,0.13,dur);o.connect(g).connect(MG);o.start(t);l.start(t);o.stop(t+dur+0.05);l.stop(t+dur+0.05);}},
 roar(){if(!AC)return;noise(3.4,800,0.5,0.55,0.25);noise(2.6,2100,0.8,0.18,0.3);},
 oo(){if(!AC)return;noise(1.3,450,1.4,0.35,0.15);},
 boo(){if(!AC)return;for(let i=0;i<5;i++)tone(105+i*9,1.3,'sawtooth',0.035,0,90);},
 blip(){if(!AC)return;tone(880,0.05,'square',0.06);},
 sel(){if(!AC)return;tone(660,0.07,'square',0.07);tone(990,0.1,'square',0.07,0.07);},
 post(){if(!AC)return;tone(1300,0.6,'triangle',0.22,0,1150);tone(2400,0.4,'sine',0.07);},
 card(){if(!AC)return;tone(220,0.25,'square',0.08);tone(180,0.3,'square',0.08,0.2);},
 pop(){if(!AC)return;tone(520,0.06,'square',0.05);tone(780,0.08,'square',0.05,0.05);},
 chant(){if(!AC)return;const n=[0,0,0,0,5,4,2,0,0,7,5,4],du=[.3,.3,.3,.3,.45,.3,.3,.6,.3,.45,.3,.6];let t=0;
  for(let i=0;i<n.length;i++){const f=196*Math.pow(2,n[i]/12);for(const dt of[-6,0,7]){const o=AC.createOscillator();o.type='sawtooth';o.frequency.value=f+dt*0.6;const fl=AC.createBiquadFilter();fl.type='bandpass';fl.frequency.value=750;fl.Q.value=2.5;const g=AC.createGain();env(g,AC.currentTime+t,0.05,0.035,du[i]);o.connect(fl).connect(g).connect(MG);o.start(AC.currentTime+t);o.stop(AC.currentTime+t+du[i]+0.1);}t+=du[i];}},
 jingle(seed){if(!AC)return;const r=rng(seed*7919+13),sc=[0,2,4,7,9,12,14,16],root=220*Math.pow(2,((seed%5)-2)/12);let t=0;const bpm=0.21;
  let idx=3;for(let i=0;i<16;i++){idx=clamp(idx+((r()*5)|0)-2,0,7);if(i===15)idx=0;const f=root*Math.pow(2,sc[idx]/12),d=(i%4===3?2:1)*bpm;tone(f*2,d*0.9,'square',0.05,t);tone(f*2*1.005,d*0.9,'triangle',0.05,t);if(i%2===0)tone(root/2*Math.pow(2,(i%8<4?0:7)/12),bpm*1.8,'triangle',0.09,t);t+=d;}
  noise(0.08,4000,1,0.05,0.005,'highpass',0);noise(0.4,4000,1,0.06,0.005,'highpass',t-0.2);},
 fanfare(){if(!AC)return;[0,4,7,12,7,12].forEach((s,i)=>tone(330*Math.pow(2,s/12),i===5?0.6:0.14,'square',0.06,i*0.13));}
};
/* ---------- data: national teams (plain original kits, no crests, made-up players) ---------- */
// k=[shirt,shorts,socks], k2 away, pat: shirt pattern, r=[attack,defence,speed,keeper]
const TEAMS=[
{id:'FRA',n:'France',f:'v|#0055A4|#fff|#EF4135',k:['#1d3f9a','#ffffff','#c8102e'],k2:['#f4f4f4','#1d3f9a','#f4f4f4'],r:[5,4,5,4],names:'Baguettin,Croissard,Fromageau,Escargaud,Petanque,Ratatouil,Beret,Camembear,Brioche,Souffle,Pain-Perdu'},
{id:'BRA',n:'Brazil',f:'bra',k:['#f7d117','#1f4fb5','#ffffff'],k2:['#1f4fb5','#ffffff','#1f4fb5'],r:[5,3,5,3],names:'Sambinho,Caipirinho,Feijoada,Bossanovo,Pastelzinho,Brigadeiro,Queijinho,Carnavalo,Coxinha,Acaizinho,Guaranito'},
{id:'ARG',n:'Argentina',f:'arg',k:['#8ec8f0','#1b2340','#ffffff'],k2:['#2a2a6a','#2a2a6a','#2a2a6a'],pat:'stripes',p2:'#ffffff',r:[5,4,4,4],names:'Asado,Dulcetto,Tangolini,Mateo Mate,Empanadez,Chimichurri,Alfajor,Gauchito,Pampas,Malbecchi,Bandonetti'},
{id:'ENG',n:'England',f:'eng',k:['#f6f6f6','#16234f','#f6f6f6'],k2:['#c8102e','#ffffff','#c8102e'],r:[4,4,4,3],names:'Crumpet,Teacup,Scone,Brolly,Queuesworth,Drizzle,Biscuit-Dunk,Pudding,Marmalade,Chips-Gravy,Banter'},
{id:'GER',n:'Germany',f:'h|#000|#DD0000|#FFCE00',k:['#f6f6f6','#111111','#f6f6f6'],k2:['#1e7a3c','#ffffff','#1e7a3c'],r:[4,5,4,5],names:'Bratwurst,Pretzelmann,Autobahner,Schnitzel,Lederhosen,Strudel,Sauerkraut,Gemutlich,Kartoffel,Punktlich,Bierstein'},
{id:'ESP',n:'Spain',f:'esp',k:['#c60b1e','#1b2a7a','#1b2a7a'],k2:['#f4f4f4','#c60b1e','#f4f4f4'],r:[4,4,4,4],names:'Paella,Siesta,Tapas,Gazpacho,Flamenco,Churro,Sangrio,Chorizo,Ole-Ole,Tortilla,Manchego'},
{id:'ITA',n:'Italy',f:'v|#009246|#fff|#CE2B37',k:['#1f63c6','#ffffff','#1f63c6'],k2:['#ffffff','#1f63c6','#ffffff'],r:[4,5,4,5],names:'Spaghettini,Risotto,Vespa,Tiramisu,Cappuccino,Mammamia,Gelato,Parmigiano,Gesticolo,Lasagnoni,Bellissimo'},
{id:'POR',n:'Portugal',f:'por',k:['#b5121b','#0b5d1e','#b5121b'],k2:['#f4f4f4','#0b5d1e','#f4f4f4'],r:[5,3,4,3],names:'Natinha,Bacalhau,Fadinho,Azulejo,Galo,Sardinha,Tramzinho,Piri-Piri,Verdinho,Saudade,Francesinha'},
{id:'NED',n:'Netherlands',f:'h|#AE1C28|#fff|#21468B',k:['#ff7f00','#111111','#ff7f00'],k2:['#1a2a6c','#1a2a6c','#1a2a6c'],r:[4,4,4,4],names:'Stroopwafel,Van Bikeren,De Tulp,Klompen,Bitterbal,Gouda,Windmolen,Hagelslag,Van Kanaal,De Haring,Frikandel'},
{id:'JPN',n:'Japan',f:'jpn',k:['#142a7a','#ffffff','#142a7a'],k2:['#ffffff','#142a7a','#ffffff'],r:[3,4,5,3],names:'Sushida,Tempura,Ramenaka,Wasabi,Bento,Karaoke,Origami,Teriyaki,Mochimochi,Matcha,Sakeyama'},
{id:'USA',n:'USA',f:'usa',k:['#ffffff','#14285a','#ffffff'],k2:['#14285a','#14285a','#c8102e'],r:[3,3,4,3],names:'Touchdown,Hot Doggerty,Freedomson,Burgerman,Big Gulp,Soccerdad,Tailgate,Corndog,Ranch,Pancakes,Supersize'},
{id:'MAR',n:'Morocco',f:'mar',k:['#c1272d','#0f6b3a','#c1272d'],k2:['#f4f4f4','#c1272d','#f4f4f4'],r:[4,5,4,4],names:'Tajine,Couscous,Atay,Harira,Babouche,Souk,Medina,Argan,Msemmen,Chebakia,Kasbah'},
{id:'CRO',n:'Croatia',f:'cro',k:['#e8212e','#ffffff','#1e3a8a'],k2:['#1e2a5a','#1e2a5a','#1e2a5a'],pat:'check',p2:'#ffffff',r:[4,4,3,4],names:'Cevapi,Burek,Kravata,Sarma,Strukli,Rakija,Dalmatin,Prsut,Ajvar,Kuna,Paprikas'},
{id:'MEX',n:'Mexico',f:'mex',k:['#0f6b3a','#ffffff','#c8102e'],k2:['#f4f4f4','#0f6b3a','#f4f4f4'],r:[4,3,4,4],names:'Taquito,Guacamole,Mariachi,Pinata,Nacho,Churrito,Enchilada,Quesadilla,Tamalito,Salsero,Luchador'},
{id:'BEL',n:'Belgium',f:'v|#000|#FAE042|#ED2939',k:['#c8102e','#c8102e','#c8102e'],k2:['#f6d23c','#111111','#f6d23c'],r:[4,4,4,4],names:'Waffel,Frietje,Praline,Moules,Speculoos,Trappist,Gueuze,Manneken,Chocolatier,Sproutje,Endivo'},
{id:'NGA',n:'Nigeria',f:'v|#008751|#fff|#008751',k:['#2bb24c','#2bb24c','#2bb24c'],k2:['#f4f4f4','#2bb24c','#f4f4f4'],r:[4,3,5,3],names:'Jollof,Suya,Puff-Puff,Egusi,Chin-Chin,Okra,Peppersoup,Plantain,Zobo,Akara,Afrobeat'}
];
TEAMS.forEach((t,i)=>{t.idx=i;t.nm=t.names.split(',');t.str=t.r[0]+t.r[1]+t.r[2]*0.5+t.r[3]*0.5;});
const REFS=['Herr Strictmann','Senor Silbato','Mr. Pedantic','Monsieur Sifflet','Signor Fischietto','Mr. Whistlewood'];
const SPONSORS=['MULLET WAX','PIES 4 U','DUBIOUS TELECOM','HAIRSPRAY XL','OFFSIDE ACCOUNTANTS','SHINPAD INSURANCE','VHS RENTALS','TURBO SOCKS','CASSETTE KING','DIAL-UP NET'];
const DIFF=[{n:'AMATEUR',mul:1,react:0.6,spd:0.9,acc:0.55,gk:-0.14,press:0.5},{n:'NORMAL',mul:1.25,react:0.52,spd:0.94,acc:0.66,gk:-0.06,press:0.52},{n:'PRO',mul:1.5,react:0.45,spd:0.96,acc:0.72,gk:0,press:0.6},{n:'LEGEND',mul:2.25,react:0.26,spd:1.03,acc:0.9,gk:0.08,press:1}];
const LEN=[{n:'2 MIN',s:60},{n:'4 MIN',s:120},{n:'6 MIN',s:180}];
const ROUNDS=['GROUP MATCH 1','GROUP MATCH 2','GROUP MATCH 3','ROUND OF 16','QUARTER-FINAL','SEMI-FINAL','THE FINAL'];
const LINES={
kickoff:['And we are underway! {t} get us started.','Kick-off! The ref blows his whistle like it owes him money.','Here we go. Somewhere, a pundit is already wrong.','{t} kick off. The crowd is louder than a hairdryer in 1994.'],
goal:['GOOOAL! {p} scores for {t}!','{p}! Absolutely ridiculous! Somebody check that boot for a motor!','GOAL! {o} defending like a buffet queue.','{p} finds the net! The keeper wants to file a complaint against physics.','GOAL! That one goes straight onto every VHS tape in the country!','{p} buries it! His mum is crying in Row Z.'],
header:['A HEADER from {p}! The mullet added extra power!','{p} heads it in! Pure forehead, zero regrets.'],
volley:['VOLLEY! {p} hit that before it could even think about bouncing!','On the volley! {p} has been practising that against his garage door.'],
long:['From DISTANCE! {p} shot from a different postcode!','A screamer! {p} from 30 yards. The net asks for compensation.'],
chip:['A CHIP! {p} lobs the keeper! Cheeky. Very cheeky.'],
team:['What a team goal! Pass, pass, pass, PANIC, goal!'],
save:['Great save! The keeper wanted it more than his lunch.','Saved! {k} with gloves like oven mitts, but it works!','What a stop by {k}! He is having the game of his life.','Parried! {k} with a dive his drama teacher would be proud of.'],
catch:['Comfortable for {k}. He gathers it like a hot pizza.','{k} claims it. No drama. Slightly disappointing, honestly.'],
miss:['Wide! That one is still travelling.','Over the bar! A pigeon has been emotionally injured.','{p} misses! He will practise that in the car park all week.','Off target. The fans behind the goal duck in unison.'],
post:['OFF THE WOODWORK! The post is the best defender on the pitch!','CLANG! Hits the frame! You could hear that in the next town.'],
tackle:['Strong tackle by {p}.','{p} wins it back! Takes the ball AND the lunch money.','Clean as a whistle from {p}. Cleaner than the whistle, actually.'],
foul:['Foul! {p} went in like a shopping trolley with a bad wheel.','The ref blows up. {p} looks shocked. Nobody else does.','{p} apologises. Unconvincingly.'],
yellow:['Yellow card for {p}! He asks if it comes in another colour.','{p} is booked. He tells the ref he has a lovely moustache. Too late.'],
red:['RED CARD! {p} is OFF! Early shower and a long think.','Off you go, {p}! He takes the scenic route to the tunnel.'],
dive:['{p} goes down like he got hit by a satellite. Ref says no.','What a dive by {p}! 9.5 for artistic impression. No foul.','{p} rolls seven times. The ref checks his watch.'],
offside:['Offside! {p} was so far off he was nearly in the car park.','The flag is up! {p} was loitering again.'],
corner:['Corner to {t}.','{t} win a corner. Big men forward. Small men also forward.'],
throw:['Throw-in to {t}. Riveting stuff.','Throw-in. The commentary team checks the biscuit tin.'],
goalkick:['Goal kick. The keeper takes his time, as is tradition.','Goal kick to {t}.'],
freekick:['Free kick to {t}.','Free kick. The wall is arguing about who stands where.'],
penalty:['PENALTY! {p} steps up. Nerves of steel or knees of jelly?','PENALTY to {t}! The keeper starts doing silly dances on the line.'],
ref:['The referee adjusts his shorts. Dramatically.','The ref jogs like a man who forgot where he parked.','The referee consults his watch. It is a sundial.','The linesman waves at his mum.','{r} has refereed 400 games and enjoyed none of them.','The ref wants to check the replay. Sadly it is 1994 and the replay is on a VHS tape in a van.','The fourth official is eating a pie. The whole pie.'],
idle:['{t} knocking it about nicely.','Patient build-up from {t}.','The crowd starts a chant. Nobody knows the words.','Someone in the crowd has brought a trumpet. Again.','{p} on the ball. Business at the front, party at the back.','Lovely weather for football. Or for a mullet.','{p} looks up. He sees grass. Lots of it.'],
cele:{plane:'{p} is doing the aeroplane! Cleared for landing!',knee:'Knee slide! That is a grass stain his mum will never forgive.',flip:'A BACKFLIP! Physio on standby!',robot:'{p} is doing the robot. Badly. Wonderfully badly.',shirt:'Shirt over the head! He cannot see a thing! He just ran into the ref!',worm:'{p} is doing the worm! Nobody asked for this!',point:'{p} points to the sky. Thanking his nan. And the weather.'},
golden:['GOLDEN GOAL! Next goal wins it! Nobody blink!'],
coin:['Still level! The referee produces... a coin. This is how legends are made.'],
halftime:['Half-time! Oranges for everyone, and a hairdryer for the manager.','That is the break. Time for a pie of questionable origin.'],
fulltime:['FULL TIME! There goes the final whistle!']
};
/* ---------- match simulation ---------- */
const L=105,W=68,GW=3.66,GH=2.44,CY=W/2;
const FORM=[[0.03,.5,'GK'],[.2,.13,'DF'],[.17,.38,'DF'],[.17,.62,'DF'],[.2,.87,'DF'],[.38,.15,'MF'],[.33,.4,'MF'],[.33,.6,'MF'],[.38,.85,'MF'],[.5,.4,'FW'],[.5,.62,'FW']];
const HAIR=['mullet','mullet','mullet','afro','bald','spiky','bowl','mullet','curly','bowl'];
const SKIN=['#f1c9a5','#e0ac85','#c68a5e','#9a6440','#6e4429','#f5d5b8'];
const HAIRC=['#2a1a10','#5a3a1a','#d9b45a','#111','#8a4a1a','#1a1a1a','#c9c0b0'];
let M=null;
function kitClash(a,b){const c=s=>{const n=parseInt(s.slice(1),16);return[n>>16,n>>8&255,n&255];};const x=c(a),y=c(b);return hyp(x[0]-y[0],x[1]-y[1],x[2]-y[2])<140;}
function newMatch(t0,t1,o){
 const clash=(a,b)=>colD(a[0],b[0])<150||(colD(a[0],b[0])<215&&colD(a[1],b[1])<120);const k0=t0.k;let k1=clash(k0,t1.k)?t1.k2:t1.k;if(clash(k0,k1))k1=colD(k0[0],'#ffffff')<200?['#151515','#151515','#151515']:['#f4f4f4','#f4f4f4','#f4f4f4'];
 const gks=['#ffd400','#33cc66','#ff66cc','#ff8a1e','#9a4dff','#7fe3ff'];const gk=[],used=[k0[0],k1[0]];
 used.push(k0[1],k1[1]);for(let i=0;i<2;i++){gk[i]=gks.find(c=>!used.some(u=>colD(c,u)<160))||'#202020';used.push(gk[i]);}
 const m={t:[],ball:{x:L/2,y:CY,z:0,vx:0,vy:0,vz:0,owner:null,last:null,lastT:0,spin:0,shot:null},phase:'intro',pt:0,clock:0,half:1,halfLen:o.len,human:o.human,diff:DIFF[o.diff],di:o.diff,
  ko:o.knockout,golden:false,ctl:null,offs:new Set(),passTo:null,chain:0,evs:[],rec:[],recI:0,pops:[],say:[],sayT:0,ref:{x:L/2-6,y:W+1,face:0,vx:0,vy:0,st:'run',ph:0,card:null,cardT:0},refName:pick(REFS),
  stopT:0,stopFn:null,sp:null,idleT:6,chantT:14,excite:0,swT:0,stoppage:(1+R()*3)|0,goalLog:[],round:o.round||0,lead:[0,0],trail:false};
 [t0,t1].forEach((td,T)=>{const tm={d:td,kit:T?k1:k0,pat:(T?k1===td.k:true)?td.pat:null,p2:td.p2,gk:gk[T],dir:T?-1:1,score:0,ps:[],st:{shots:0,ont:0,poss:0,tackles:0,fouls:0,yel:0,red:0,passes:0}};
  const r=rng(td.idx*97+(o.seed||1));const tp=[[0,1],[1,2],[0,2]][td.idx%3];
  for(let i=0;i<11;i++){const f=FORM[i];tm.ps.push({T,i,role:f[2],fx:f[0],fy:f[1],x:L/2,y:-2,vx:0,vy:0,z:0,face:PI/2,fs:1,st:'run',stt:0,ph:r()*6,name:td.nm[i],num:i===0?1:i+1,
   hair:HAIR[(r()*HAIR.length)|0],tache:r()<0.3,sk:tp[r()<0.5?0:1],hc:HAIRC[(r()*HAIRC.length)|0],yel:0,off:false,cool:0,think:r()*0.5,react:0.3,spd:6.3+0.22*td.r[2]+(r()-.5)*0.4});}
  m.t.push(tm);});
 SPRES=clamp(Math.round(PPM*1.45*SCL*zoomBase()*0.82),26,48);for(const k in SHEETS)delete SHEETS[k];const tb=performance.now();m.t.forEach((tm,T)=>teamSheets(tm,T));refSheet();SHEET_MS=Math.round(performance.now()-tb);
 return m;}
const U=(T,x)=>M.t[T].dir>0?x:L-x;
const XU=(T,u)=>M.t[T].dir>0?u:L-u;
const oppGoalX=T=>M.t[T].dir>0?L:0, ownGoalX=T=>M.t[T].dir>0?0:L;
const act=p=>!p.off;
function inBox(T,x,y){return U(T,x)<16.5&&Math.abs(y-CY)<20.16;} // T's own box
function aiSkill(T){return T===M.human?{react:0.34,spd:1,acc:0.8,gk:[0.08,0.03,0,-0.05][M.di],press:0.8}:M.human<0?{react:0.35,spd:1,acc:0.75,gk:0,press:0.8}:M.diff;}
function say(cat,o,now){const pool=typeof cat==='string'?LINES[cat]:cat;if(!pool)return;let s=Array.isArray(pool)?pick(pool):pool;o=o||{};
 s=s.replace(/\{p\}/g,o.p||'').replace(/\{t\}/g,o.t||'').replace(/\{o\}/g,o.o||'').replace(/\{k\}/g,o.k||'').replace(/\{r\}/g,M.refName);
 if(now||o.now){M.say=[s];M.sayT=0;}else{if(M.say.length>2)M.say.shift();M.say.push(s);if(M.say.length===1)M.sayT=0;}}
function pop(text,col,big){M.pops.push({text,col:col||'#ffe14a',t:0,big:!!big});if(!big)SND.pop();}
/* ----- score events (human team only) ----- */
const EV={goal:['GOAL',150],header:['HEADER',200],volley:['VOLLEY',250],long:['LONG SHOT',250],chip:['CHIP',300],team:['TEAM GOAL',200],golden:['GOLDEN GOAL',300],tackle:['TACKLE',25],foul:['FOUL',-25],yellow:['YELLOW',-100],red:['RED CARD',-300],conceded:['CONCEDED',-100]};
function ev(k,T){if(M.human<0||T!==M.human)return;M.evs.push([k,Math.round(M.clock+(M.half-1)*M.halfLen)]);const e=EV[k];if(k!=='conceded')pop((e[1]>0?'+':'')+e[1]+' '+e[0],e[1]>0?'#ffe14a':'#ff6b6b');}
/* ----- kicking ----- */
function kickTo(p,tx,ty,spd,vz,kind){const b=M.ball,dx=tx-b.x,dy=ty-b.y,d=hyp(dx,dy)||1;b.vx=dx/d*spd;b.vy=dy/d*spd;b.vz=vz;b.owner=null;b.last=p;b.lastT=p.T;b.shot=null;b.kind=kind;b.cv=0;
 p.cool=0.3;if(p.st!=='slide'&&p.st!=='dive'){p.st='kick';p.stt=0.28;}p.face=Math.atan2(dy,dx);SND.kick(Math.min(1,spd/30));
 if(kind==='pass'){M.t[p.T].st.passes++;markOffside(p.T,p);}else M.offs.clear();}
function passTo(p,tx,ty,lob){const b=M.ball,d=hyp(tx-b.x,ty-b.y);if(lob){const vh=clamp(9+d*0.42,10,24),Tt=d/vh*1.04;kickTo(p,tx,ty,vh,4.9*Tt,'pass');}else kickTo(p,tx,ty,clamp(d*0.78+5,8,27),0,'pass');}
function shoot(p,gy,gz,spd,type){const b=M.ball,gx=oppGoalX(p.T),d=hyp(gx-b.x,gy-b.y),Tt=d/spd;const vz=(gz-b.z+4.9*Tt*Tt)/Tt;kickTo(p,gx,gy,spd,vz,'shot');
 b.shot={p,type,dist:hyp(gx-p.x,CY-p.y)};b.cv=p.T===M.human?0:(R()-.5)*4;if(p.T===M.human)M.after={t:0.55};const st=M.t[p.T].st;st.shots++;if(Math.abs(gy-CY)<GW&&gz<GH)st.ont++;}
function markOffside(T,passer){M.offs.clear();const opp=M.t[1-T].ps.filter(act).map(o=>U(T,o.x)).sort((a,b)=>b-a);const line=Math.max(opp[1]||L,U(T,M.ball.x),L/2);
 for(const q of M.t[T].ps)if(q!==passer&&act(q)&&U(T,q.x)>line+0.4)M.offs.add(q);}
/* ----- helpers ----- */
function nearestOpp(p){let bd=1e9,bo=null;for(const o of M.t[1-p.T].ps){if(!act(o))continue;const d=hyp(o.x-p.x,o.y-p.y);if(d<bd){bd=d;bo=o;}}return[bo,bd];}
function segD(px,py,ax,ay,bx,by){const dx=bx-ax,dy=by-ay,l=dx*dx+dy*dy||1;const t=clamp(((px-ax)*dx+(py-ay)*dy)/l,0,1);return hyp(px-ax-dx*t,py-ay-dy*t);}
function free(p){return p.st==='run'||p.st==='idle'||p.st==='walk';}
function steer(p,dvx,dvy,dt,acc){const a=Math.min(1,dt*(acc||6));p.vx+=(dvx-p.vx)*a;p.vy+=(dvy-p.vy)*a;}
function moveTo(p,tx,ty,f,dt){const dx=tx-p.x,dy=ty-p.y,d=hyp(dx,dy);let sp=p.spd*f*(d<2?d/2:1);if(M.ball.owner===p)sp*=0.9;steer(p,d>0.05?dx/d*sp:0,d>0.05?dy/d*sp:0,dt);}
function predictBall(t){const b=M.ball;if(b.owner)return[b.x+b.vx*t,b.y+b.vy*t];if(b.z>0.3){return[b.x+b.vx*t,b.y+b.vy*t];}const k=0.75,f=(1-Math.exp(-k*t))/k;return[b.x+b.vx*f,b.y+b.vy*f];}
function interceptPt(p){let t=0.3,pt;for(let i=0;i<3;i++){pt=predictBall(t);t=clamp(hyp(pt[0]-p.x,pt[1]-p.y)/p.spd,0,2.5);}return[clamp(pt[0],-1,L+1),clamp(pt[1],-1,W+1)];}
/* ----- AI ----- */
function teamAI(T,dt){const tm=M.t[T],b=M.ball,own=b.owner&&b.owner.T===T,sk=aiSkill(T);const bu=U(T,b.x);const ctl=T===M.human?M.ctl:null;
 let ch=null,ch2=null,cd=1e9,cd2=1e9;for(const p of tm.ps){if(!act(p)||p.role==='GK'||p===ctl)continue;const ip=interceptPt(p),d=hyp(ip[0]-p.x,ip[1]-p.y)/p.spd;if(d<cd){cd2=cd;ch2=ch;cd=d;ch=p;}else if(d<cd2){cd2=d;ch2=p;}}
 const oppU=M.t[1-T].ps.filter(act).map(o=>U(T,o.x)).sort((x,y)=>y-x);const offLine=Math.max(oppU[1]||L,L/2);
 const defLine=own?clamp(bu-26,14,L*0.5):clamp(bu-14,9,L*0.42);const car=b.owner&&b.owner.T!==T?b.owner:null;
 let stepDF=null;if(car){let bd=1e9;for(const p of tm.ps)if(act(p)&&p.role==='DF'&&p!==ctl){const d=hyp(p.x-car.x,p.y-car.y);if(d<bd){bd=d;stepDF=p;}}if(bd>11)stepDF=null;}
 tm.ch=ch;
 for(const p of tm.ps){if(!act(p))continue;if(p.cool>0)p.cool-=dt;
  if(p.role==='GK'){keeperAI(p,dt,sk);continue;}
  if(p===ctl||!free(p))continue;
  if(b.owner===p){carrierAI(p,dt,sk);continue;}
  let u,y,f=0.85;const baseY=CY+(p.fy-0.5)*W*0.8+(b.y-CY)*0.32;
  if(p.role==='DF'){u=defLine+((p.i===1||p.i===4)&&own?7:0);y=CY+(p.fy-0.5)*W*0.72+(b.y-CY)*0.38;}
  else if(p.role==='MF'){u=own?bu*0.5+p.fx*L*0.55+6:Math.max(defLine+11,bu*0.45+p.fx*L*0.45);y=baseY;}
  else{u=own?Math.max(bu+8,L*0.56):Math.max(bu-8,L*0.45);y=baseY;}
  u=clamp(u,2,L-2);y=clamp(y,1.5,W-1.5);let tx=XU(T,u),ty=y;
  if(own){p.supT=(p.supT||0)-dt;if(p.supT<=0||!p.sup){p.supT=0.4+R()*0.35;p.sup=supportSpot(p,tx,ty,offLine);}tx=p.sup[0];ty=p.sup[1];f=M.passTo===p?1.1:0.95;}
  else if(p.role==='MF'){let mk=null,md=8;for(const o of M.t[1-T].ps){if(!act(o)||o===car)continue;const d=hyp(tx-o.x,ty-o.y);if(d<md){md=d;mk=o;}}if(mk){tx=mk.x+(ownGoalX(T)>L/2?1.6:-1.6);ty=lerp(mk.y,CY,0.1);f=0.95;}}
  if(car&&(p===ch||p===stepDF)){const gx=ownGoalX(T);const deep=U(T,car.x)<L*0.38;const stand=(1-sk.press)*2.4+(p===stepDF&&p!==ch?1.2:0)+(deep?0:1.1);const dx=gx-car.x,dy=CY-car.y,dl=hyp(dx,dy)||1;tx=car.x+dx/dl*stand;ty=car.y+dy/dl*stand;f=1.1;
   const d=hyp(car.x-p.x,car.y-p.y);if(p.cool<=0){p.think-=dt;if(p.think<=0){p.think=sk.react*(0.6+R()*0.8);if(d<1.5&&R()<(deep?0.85:0.45))standTackle(p,car);else if(d<3&&R()<0.1*sk.press){p.face=Math.atan2(car.y-p.y,car.x-p.x);slide(p);}}}}
  else if(car&&p===ch2){const gx=ownGoalX(T);tx=lerp(car.x,gx,0.3);ty=lerp(car.y,CY,0.3);f=1;}
  if(!b.owner&&(p===ch||M.passTo===p)){const ip=interceptPt(p);tx=ip[0];ty=ip[1];f=1.12;}
  moveTo(p,tx,ty,f*sk.spd,dt);}}
function supportSpot(p,bx,by,offLine){const T=p.T,b=M.ball;let best=[bx,by],bs=-1e9;const cands=[[bx,by]];for(let i=0;i<8;i++){const a=i*PI/4;cands.push([bx+Math.cos(a)*7,by+Math.sin(a)*7]);}
 if(p.role==='FW'||(p.role==='MF'&&R()<0.3))cands.push([XU(T,offLine-0.8),by+(R()-.5)*10]);
 if(U(T,b.x)>L*0.58&&(p.role==='FW'||p.role==='MF')){cands.push([XU(T,L-10),CY+(R()-.5)*12]);cands.push([XU(T,L-7),CY+(R()-.5)*8]);}
 for(const c of cands){const x=clamp(c[0],2,L-2),y=clamp(c[1],2,W-2);if(U(T,x)>offLine-0.5)continue;let open=12,lane=6;for(const o of M.t[1-T].ps){if(!act(o))continue;open=Math.min(open,hyp(o.x-x,o.y-y));lane=Math.min(lane,segD(o.x,o.y,b.x,b.y,x,y));}
  let mate=99;for(const q of M.t[T].ps)if(q!==p&&act(q)){const qx=q.sup?q.sup[0]:q.x,qy=q.sup?q.sup[1]:q.y;mate=Math.min(mate,hyp(qx-x,qy-y));}
  const dist=hyp(x-b.x,y-b.y);const s=open*0.9+lane*1.4+(U(T,x)-U(T,b.x))*0.12-(dist<7?6:0)-(dist>32?(dist-32)*0.5:0)-(mate<6?(6-mate)*1.2:0)-hyp(x-bx,y-by)*0.15;if(s>bs){bs=s;best=[x,y];}}
 return best;}
function carrierAI(p,dt,sk){const T=p.T,d=M.t[T].dir,gx=oppGoalX(T);const dg=hyp(gx-p.x,CY-p.y);const[,nd]=nearestOpp(p);p.drib=(p.drib||0)+dt;p.think-=dt;
 let ahead=0;for(const o of M.t[1-T].ps){if(!act(o))continue;const dx=(o.x-p.x)*d,dy=o.y-p.y;if(dx>0&&dx<9&&Math.abs(dy)<dx*0.8+1.5)ahead++;}
 if(p.think<=0){p.think=sk.react*(0.6+R()*0.5);
  const fin=U(T,p.x)>L-36;
  const D=M.dbg||(M.dbg={n:0,fin:0,near:0,sh:0,pass:0,u:[0,0,0,0,0,0,0]});D.n++;D.u[Math.min(6,Math.floor(U(T,p.x)/15))]++;if(fin)D.fin++;if(dg<28)D.near++;
  if((dg<30&&Math.abs(p.y-CY)<20&&(dg<19||R()<0.3+(nd<3?0.35:0)+(ahead===0?0.3:0)))||(dg<34&&R()<0.07)){aiShoot(p,sk);return;}
  if(fin&&Math.abs(p.y-CY)>12&&R()<0.55){let cq=null,cs=-1e9;for(const q of M.t[T].ps){if(q===p||!act(q)||M.offs.has(q))continue;if(U(T,q.x)>L-20&&Math.abs(q.y-CY)<12){let open=9;for(const o of M.t[1-T].ps)if(act(o))open=Math.min(open,hyp(o.x-q.x,o.y-q.y));if(open>cs){cs=open;cq=q;}}}
   if(cq){p.drib=0;const tx=cq.x+M.t[T].dir*1.5+(R()-.5)*3,ty=cq.y+(R()-.5)*3;const d=hyp(tx-p.x,ty-p.y),vh=clamp(9+d*0.42,12,24),Tt=d/vh;kickTo(p,tx,ty,vh,4.9*Tt+1.2,'cross');M.passTo=cq;return;}}
  const bp=bestPass(p);const want=fin?((nd<2.4&&p.drib>0.2)||(ahead>1&&p.drib>0.45)||p.drib>1.5||(bp&&bp.prog>8&&p.drib>0.3)):((nd<2.6&&p.drib>0.2)||(ahead>1&&p.drib>0.6&&bp&&bp.prog>-3)||p.drib>2.6||(bp&&bp.prog>8&&bp.s>6&&p.drib>0.3));
  if(bp&&want){D.pr=D.pr||{};const rk=(nd<2.6?'nd':'')+(p.drib>2.4?'dr':'')+(bp.prog>8?'fw':'');D.pr[rk]=(D.pr[rk]||0)+1;p.drib=0;const err=(1-sk.acc)*bp.d*0.08;passTo(p,bp.x+(R()-.5)*err,bp.y+(R()-.5)*err,bp.lob);M.passTo=bp.q;return;}}
 let ax=d*1.0,ay=(CY-p.y)/W*(U(T,p.x)>L-38?3.2:1.2);for(const o of M.t[1-T].ps){if(!act(o))continue;const dx=p.x-o.x,dy=p.y-o.y,dd=hyp(dx,dy);if(dd<6&&dd>0.01){const w=(6-dd)/6;ax+=dx/dd*w*1.4;ay+=dy/dd*w*1.8;}}
 if(p.y<4)ay+=1;if(p.y>W-4)ay-=1;const al=hyp(ax,ay)||1;const sp=p.spd*(ahead?0.8:0.95)*sk.spd;steer(p,ax/al*sp,ay/al*sp,dt);}
function bestPass(p){const T=p.T,b=M.ball;let best=null;
 for(const q of M.t[T].ps){if(q===p||!act(q)||(q.role==='GK'&&U(T,p.x)>30))continue;
  for(const thr of[0,1]){let tx=q.x+q.vx*0.5,ty=q.y+q.vy*0.5;if(thr){if(q.role==='DF'||U(T,q.x)<U(T,p.x))continue;tx+=M.t[T].dir*7;}
   tx=clamp(tx,1,L-1);ty=clamp(ty,1,W-1);const d=hyp(tx-b.x,ty-b.y);if(d<5||d>40)continue;
   let lane=9,open=9;for(const o of M.t[1-T].ps){if(!act(o))continue;lane=Math.min(lane,segD(o.x,o.y,b.x,b.y,tx,ty));open=Math.min(open,hyp(o.x-tx,o.y-ty));}
   const lob=lane<1.4&&d>14&&open>4;const prog=U(T,tx)-U(T,b.x);
   let s=prog*0.6-(prog<-4?3:0)+Math.min(open,8)*0.8-d*0.05-(lane<1.4&&!lob?12:0)-(lane<2.4&&!lob?4:0)-(lob?2:0)-(M.offs.has(q)?20:0);
   if(U(T,q.x)>Math.max(...M.t[1-T].ps.filter(act).map(o=>U(T,o.x)).sort((a,c)=>c-a).slice(1,2),L/2)+0.3)s-=25;
   if(U(T,tx)>L-18&&Math.abs(ty-CY)<14)s+=3;if(!best||s>best.s)best={q,x:tx,y:ty,s,lob,d,prog};}}
 return best&&best.s>-3?best:null;}
function aiShoot(p,sk){const T=p.T,gx=oppGoalX(T);const k=M.t[1-T].ps[0];const side=k.y>CY?-1:1;const d=hyp(gx-p.x,CY-p.y);let gy=CY+side*(GW-0.7)+(R()-.5)*((1-sk.acc)*8+d*0.07);
 const gz=0.3+R()*1.6+(R()<(1-sk.acc)*0.4?1.5:0);shoot(p,gy,gz,clamp(19+d*0.35,20,31),'normal');}
/* ----- keeper ----- */
function keeperAI(k,dt,sk){const T=k.T,gx=ownGoalX(T),d=M.t[T].dir,b=M.ball;
 if(k.st==='dive'){k.stt+=dt;const tt=clamp(k.stt/0.45,0,1);k.y=lerp(k.y0,k.dy,Math.sin(tt*PI/2));k.z=Math.max(0,Math.sin(clamp(k.stt/0.7,0,1)*PI)*Math.min(1.2,k.dz*0.7));k.vx=k.vy=0;
  if(k.stt>1.0){k.st='fall';k.stt=0.5;k.z=0;}return;}
 if(!free(k))return;
 if(b.owner===k){k.hold-=dt;k.vx*=0.8;k.vy*=0.8;if(k.hold<=0){let best=null,bs=-1e9;for(const q of M.t[T].ps){if(q===k||!act(q))continue;const[,od]=nearestOpp(q);const s=Math.min(od,10)+U(T,q.x)*0.12-(hyp(q.x-k.x,q.y-k.y)>55?20:0);if(s>bs){bs=s;best=q;}}
   if(best){const lob=hyp(best.x-k.x,best.y-k.y)>18;passTo(k,best.x,best.y,lob);M.passTo=best;}}return;}
 const toward=d>0?b.vx<-5:b.vx>5;
 if(!b.owner&&toward){const t=(gx-b.x)/b.vx;if(t>0&&t<1.4){const yc=b.y+b.vy*t,zc=b.z+b.vz*t-4.9*t*t;
  if(Math.abs(yc-CY)<GW+0.6&&zc<GH+0.5&&zc>-1){k.react-=dt;if(k.react<=0&&!k.dived){k.dived=true;startDive(k,yc,Math.max(0,zc),t,sk);}}}}
 else{k.react=0.14+(0.12-sk.gk*0.5)*R();if(b.owner)k.dived=false;}
 let tx,ty;const dist=hyp(b.x-gx,b.y-CY);const off=clamp(dist*0.07,0.6,3.5);tx=gx+d*off;ty=CY+clamp((b.y-CY)*0.22,-GW+0.4,GW-0.4);
 let rush=false;if(!b.owner&&b.z<2.4){const ip=interceptPt(k);if(U(T,ip[0])<24&&Math.abs(ip[1]-CY)<22){const my=hyp(ip[0]-k.x,ip[1]-k.y)/k.spd;let them=1e9;for(const o of M.t[1-T].ps)if(act(o)){const oi=interceptPt(o);them=Math.min(them,hyp(oi[0]-o.x,oi[1]-o.y)/o.spd);}if(my<them*(inBox(T,ip[0],ip[1])?1.1:0.85)){tx=ip[0];ty=ip[1];rush=true;}}}
 moveTo(k,tx,ty,rush?1.15:1,dt);}
function startDive(k,yc,zc,t,sk){const b=M.ball,sp=hyp(b.vx,b.vy,b.vz),lat=Math.abs(yc-k.y);const team=M.t[k.T].d;
 let ps=0.72+0.03*team.r[3]+sk.gk-(sp-18)*0.022-Math.max(0,lat-1.1)*0.17-(zc>1.8?0.12:0);if(lat<1&&zc<1.8)ps+=0.15;if(b.shot&&b.shot.pen)ps=ps*0.6-0.05;ps=clamp(ps,0.06,0.96);
 k.save=R()<ps;k.y0=k.y;k.dy=k.save?yc:k.y+(yc-k.y)*(0.45+R()*0.2);k.dz=zc;if(lat<0.7&&zc<1.6){k.dy=yc;k.st='idle';k.stt=0;k.y=lerp(k.y,yc,0.6);return;}
 k.st='dive';k.stt=0;k.ddir=Math.sign(yc-k.y)||1;}
function keeperCheck(prevX){const b=M.ball;if(b.owner)return;
 for(let T=0;T<2;T++){const k=M.t[T].ps[0];if(!act(k))continue;const kx=k.x;if((prevX-kx)*(b.x-kx)>0&&Math.abs(b.x-kx)>0.6)continue;
  const reach=k.st==='dive'?1.15:0.85;const toward=M.t[T].dir>0?b.vx<0:b.vx>0;if(!toward&&hyp(b.vx,b.vy)>4)continue;
  if(Math.abs(b.y-k.y)<reach+(k.save?0.5:0)&&b.z<2.5&&(k.save||k.st!=='dive')&&k.st!=='fall'){const sp=hyp(b.vx,b.vy);const sh=b.shot;
   if(sp<17&&R()<0.6||sp<10){b.owner=k;k.hold=1.3;b.vz=0;b.z=0;M.offs.clear();b.last=k;b.lastT=T;b.shot=null;if(sh){say('catch',{k:k.name});}}
   else{const reb=R()<0.42;b.vx=-b.vx*(reb?0.3:0.22);b.vy=reb?(R()-.5)*6:(k.ddir||((R()<.5)?1:-1))*(5+R()*6);b.vz=reb?0.8+R()*1.8:2.5+R()*3;b.cv=0;if(reb&&sh){M.parries=(M.parries||0)+1;setTimeout(()=>{if(M&&M.phase==='live')pop('PARRIED... LOOSE BALL!','#ffffff');},350);}b.last=k;b.lastT=T;b.shot=null;k.save=false;if(sh){say('save',{k:k.name},1);pop('SAVE!','#7fe3ff');SND.oo();}}
   return;}}}
/* ----- tackles ----- */
function standTackle(p,o){if(p.cool>0||!free(p))return;p.st='tackle';p.stt=0.35;p.cool=0.7;p.face=Math.atan2(o.y-p.y,o.x-p.x);const b=M.ball;if(b.owner!==o)return;
 const tp=M.t[p.T].d,to=M.t[o.T].d;const behind=Math.cos(o.face-p.face)>0.5;let ps=0.5+0.05*(tp.r[1]-to.r[0])+(behind?-0.15:0.05);
 if(o.T===M.human&&M.ctl===o)ps-=[0.22,0.19,0.16,0.1][M.di]; if(p.T===M.human&&M.ctl===p)ps+=0.05;
 if(R()<ps){b.owner=null;b.vx=Math.cos(p.face)*4+(R()-.5)*2;b.vy=Math.sin(p.face)*4+(R()-.5)*2;b.last=p;b.lastT=p.T;b.shot=null;o.cool=0.5;M.offs.clear();M.t[p.T].st.tackles++;ev('tackle',p.T);if(R()<0.35)say('tackle',{p:p.name});
  if(o.T!==M.human&&R()<0.07){o.st='roll';o.stt=1.4;say('dive',{p:o.name},1);pop('PLAY ON!','#ffffff');}else if(R()<0.3){o.st='fall';o.stt=0.6;}}
 else if(R()<(behind?0.35:0.15))foul(p,o);}
function slide(p){if(p.cool>0||!free(p))return;p.st='slide';p.stt=0.6;p.cool=1.2;p.won=false;p.vx=Math.cos(p.face)*9.5;p.vy=Math.sin(p.face)*9.5;}
function slideUpdate(p,dt){const b=M.ball;const f=Math.exp(-2.2*dt);p.vx*=f;p.vy*=f;const fx=p.x+Math.cos(p.face)*0.8,fy=p.y+Math.sin(p.face)*0.8;
 if(!p.won&&b.z<0.7&&hyp(b.x-fx,b.y-fy)<1.1&&b.owner!==p&&!(b.owner&&b.owner.T===p.T)){const o=b.owner;b.owner=null;b.vx=Math.cos(p.face)*7+(R()-.5)*2;b.vy=Math.sin(p.face)*7+(R()-.5)*2;b.vz=0.5;b.last=p;b.lastT=p.T;b.shot=null;p.won=true;M.offs.clear();
  if(o&&o.T!==p.T){o.cool=0.6;o.st=R()<0.08&&o.T!==M.human?'roll':'fall';o.stt=o.st==='roll'?1.4:0.7;M.t[p.T].st.tackles++;ev('tackle',p.T);say(o.st==='roll'?'dive':'tackle',{p:o.st==='roll'?o.name:p.name});}}
 if(!p.won&&b.owner&&b.owner.T!==p.T&&hyp(b.owner.x-p.x,b.owner.y-p.y)<0.95){foul(p,b.owner,true);}}
function foul(off,vic,hard){if(M.phase!=='live')return;const tm=M.t[off.T];tm.st.fouls++;ev('foul',off.T);vic.st='fall';vic.stt=1.2;SND.whistle(1);
 let card=null;const r=R();if(hard&&r<0.06)card='R';else if(r<(hard?0.4:0.18))card='Y';
 if(card==='Y'&&off.yel){card='R';}
 say('foul',{p:off.name},1);
 const x=vic.x,y=vic.y,pen=inBox(off.T,x,y);
 stop(1.6,()=>{if(card){M.ref.card=card;M.ref.cardT=1.8;SND.card();if(card==='Y'){off.yel=1;tm.st.yel++;ev('yellow',off.T);say('yellow',{p:off.name},1);}else{off.off=true;tm.st.red++;ev('red',off.T);say('red',{p:off.name},1);SND.boo();if(M.ctl===off)M.ctl=null;}pop(card==='Y'?'YELLOW CARD':'RED CARD',card==='Y'?'#ffd400':'#ff3030',true);}
  if(pen)setPiece('penalty',vic.T,XU(vic.T,L-11),CY);else setPiece('freekick',vic.T,clamp(x,1,L-1),clamp(y,1,W-1));});}
function stop(t,fn){M.phase='stop';M.stopT=t;M.stopFn=fn;}
/* ----- loose ball contest, headers, volleys ----- */
function contest(){const b=M.ball;if(b.owner)return;let best=null,bd=1e9;
 for(const tm of M.t)for(const p of tm.ps){if(!act(p)||p.cool>0||!(free(p)||p.st==='tackle'||p.st==='kick'))continue;if(p.role==='GK'&&p.st==='dive')continue;
  const gk=p.role==='GK'&&inBox(p.T,p.x,p.y);const d=hyp(p.x-b.x,p.y-b.y);const zr=gk?2.5:1.05;
  if(d<(gk?1.2:0.9)&&b.z<zr&&d<bd){bd=d;best=p;}
  else if(!gk&&d<1.0&&b.z>=1.05&&b.z<2.7&&hyp(b.vx,b.vy)>3)header(p);}
 if(!best)return;
 if(M.offs.has(best)){offside(best);return;}
 const hu=best.T===M.human&&best===M.ctl;const bsp=hyp(b.vx,b.vy);
 if(b.kind==='pass'&&b.lastT!==best.T&&best.role!=='GK'&&bsp>8&&R()>clamp(1.2-bsp/20,0.3,1)){b.vx=b.vx*0.35+(R()-.5)*5;b.vy=b.vy*0.35+(R()-.5)*5;b.vz=1+R()*1.5;b.kind='deflect';best.cool=0.35;SND.kick(0.1);return;}
 if(b.z>0.25&&b.z<1.05&&hyp(b.vx,b.vy)>4&&(hu?(inp.B.d||best.volArm>0):(U(best.T,best.x)>L-22&&Math.abs(best.y-CY)<14&&R()<0.5))){const sk=aiSkill(best.T);const pw=hu?0.75:0.8;
  shoot(best,CY+(hu?inp.my*(GW-0.6):(R()-.5)*(GW*2-1)),0.3+R()*1.4*(1-sk.acc+0.3),18+pw*12,'volley');best.volArm=0;inp.B.pr=0;inp.B.rel=0;return;}
 gain(best);}
function header(p){const b=M.ball;if(p.cool>0)return;const T=p.T,att=U(T,p.x)>L-20&&Math.abs(p.y-CY)<12;const hu=T===M.human&&p===M.ctl;
 if(M.offs.has(p)){offside(p);return;}
 if(att&&(hu?(inp.B.d||p.volArm>0||R()<0.5):R()<0.75)){shoot(p,CY+(R()-.5)*(GW*2-0.6),0.4+R()*1.6,14+R()*6,'header');}
 else{const gx=oppGoalX(T);const tx=clamp(p.x+(gx-p.x)*0.3,1,L-1),ty=clamp(p.y+(R()-.5)*16,2,W-2);kickTo(p,tx,ty,11,4,'header');}
 p.z=0.3;p.cool=0.4;}
function gain(p){const b=M.ball;const prevT=b.lastT,fromPass=b.kind==='pass'&&b.last&&b.last.T===p.T;if(M.dbg&&b.kind==='pass'&&b.last&&b.last!==p){if(fromPass)M.dbg.comp=(M.dbg.comp||0)+1;else M.dbg.int=(M.dbg.int||0)+1;}if(b.shot&&b.shot.p.T!==p.T&&p.role!=='GK'){}
 const inc=hyp(b.vx-p.vx,b.vy-p.vy);if(inc>5){p.ctrlT=0.14;p.vx*=0.7;p.vy*=0.7;SND.kick(0.08);}
 b.owner=p;b.vz=0;b.z=0;b.shot=null;M.offs.clear();M.passTo=null;if(fromPass)M.chain++;else if(prevT!==p.T||b.last!==p)M.chain=0;b.last=p;b.lastT=p.T;p.drib=0;p.think=Math.max(p.think,p.T===M.human?0.15:0.32+R()*0.15);
 if(!(p.ctrlT>0)){b.x=p.x+Math.cos(p.face)*0.5;b.y=p.y+Math.sin(p.face)*0.5;}if(p.role==='GK'){p.hold=1.0;}
 if(p.T===M.human)M.ctl=p.role==='GK'?M.ctl:p;}
function offside(p){SND.whistle(1);say('offside',{p:p.name},1);pop('OFFSIDE','#ffffff',true);M.offs.clear();const x=p.x,y=p.y;stop(1.2,()=>setPiece('freekick',1-p.T,clamp(x,1,L-1),clamp(y,1,W-1)));}
/* ----- ball physics & lines ----- */
function ballUpdate(dt){const b=M.ball;
 if(b.owner){const p=b.owner,sp=hyp(p.vx,p.vy);const dd=0.5+0.05*Math.sin(p.ph*2)*Math.min(1,sp/4);const tx=p.x+Math.cos(p.face)*dd,ty=p.y+Math.sin(p.face)*dd;if(p.ctrlT>0){p.ctrlT-=dt;b.x+=(tx-b.x)*0.35;b.y+=(ty-b.y)*0.35;if(p.ctrlT<=0){b.x=tx;b.y=ty;}}else{b.x=tx;b.y=ty;}b.z=0;b.vx=p.vx;b.vy=p.vy;b.vz=0;b.spin+=sp*dt*3;return;}
 const px=b.x;b.x+=b.vx*dt;b.y+=b.vy*dt;b.z+=b.vz*dt;
 if(b.z>0){b.vz-=9.8*dt;const f=Math.exp(-0.08*dt);b.vx*=f;b.vy*=f;}
 if(b.z<=0){b.z=0;if(b.vz<-1.6){b.vz=-b.vz*0.5;b.vx*=0.86;b.vy*=0.86;if(b.vz>3)SND.kick(0.05);}else{b.vz=0;const f=Math.exp(-0.75*dt);b.vx*=f;b.vy*=f;if(hyp(b.vx,b.vy)<0.2)b.vx=b.vy=0;}}
 if(b.cv){b.vy+=b.cv*dt;b.cv*=Math.exp(-0.5*dt);if(b.z<=0&&hyp(b.vx,b.vy)<9)b.cv=0;}
 b.spin+=hyp(b.vx,b.vy)*dt*3;
 keeperCheck(px);if(b.owner)return;
 if(M.phase!=='live')return;
 for(const gx of[0,L]){const crossed=gx===0?(px>0&&b.x<=0):(px<L&&b.x>=L);if(!crossed)continue;
  const ay=Math.abs(b.y-CY);
  if(Math.abs(ay-GW)<0.3&&b.z<GH+0.1){b.x=gx?L-0.15:0.15;b.vx=-b.vx*0.6;b.vy+=(R()-.5)*4;SND.post();say('post',{},1);pop('WOODWORK!','#ffffff');M.excite=1;b.shot=null;return;}
  if(ay<GW&&Math.abs(b.z-GH)<0.22){b.x=gx?L-0.15:0.15;b.vx=-b.vx*0.5;b.vz=Math.abs(b.vz)*0.4+1;SND.post();say('post',{},1);pop('CROSSBAR!','#ffffff');b.shot=null;return;}
  if(ay<GW&&b.z<GH){goal(gx===L?(M.t[0].dir>0?0:1):(M.t[0].dir>0?1:0));return;}
  outEnd(gx);return;}
 if(b.y<-0.2||b.y>W+0.2){const T=1-b.lastT;say('throw',{t:M.t[T].d.n});stop(1.0,()=>setPiece('throw',T,clamp(b.x,1,L-1),b.y<0?0:W));}}
function outEnd(gx){const b=M.ball;const defT=ownGoalX(0)===gx?0:1;const sh=b.shot;
 if(sh){say('miss',{p:sh.p.name},1);SND.oo();const ay=Math.abs(b.y-CY);if(ay<GW+2.2&&b.z<GH+1.4){M.excite=Math.max(M.excite,0.85);M.nearMiss=(M.nearMiss||0)+1;pop(pick(['SO CLOSE!','OOOOH!','INCHES WIDE!']),'#ffffff');setTimeout(()=>SND.oo(),180);}}
 if(b.lastT===defT){const T=1-defT;say('corner',{t:M.t[T].d.n});stop(1.2,()=>setPiece('corner',T,gx?L-0.5:0.5,b.y<CY?0.5:W-0.5));}
 else{say('goalkick',{t:M.t[defT].d.n});stop(1.2,()=>setPiece('goalkick',defT,gx?L-5.5:5.5,CY+(b.y<CY?-6:6)));}}
function goal(T){const b=M.ball,tm=M.t[T],sh=b.shot;tm.score++;const sc=(sh&&sh.p.T===T)?sh.p:(b.last&&b.last.T===T?b.last:tm.ps.filter(act).sort((a,c)=>hyp(a.x-b.x,a.y-b.y)-hyp(c.x-b.x,c.y-b.y))[0]);
 const own=b.last&&b.last.T!==T;SND.roar();SND.whistle(1);M.excite=1;M.phase='goal';M.pt=0;if(Math.abs(b.vx)<5)b.vx=(b.x<L/2?-1:1)*5;b.vx=clamp(b.vx,-16,16);
 M.goalLog.push({T,name:own?b.last.name+' (OG)':sc.name,min:clockMin()});
 const o={p:sc.name,t:tm.d.n,o:M.t[1-T].d.n};if(M.human>=0&&M.t[M.human].score<M.t[1-M.human].score)M.trail=true;
 if(T===M.human){ev('goal',T);if(sh&&!own){if(sh.type==='header')ev('header',T);if(sh.type==='volley')ev('volley',T);if(sh.type==='chip')ev('chip',T);if(sh.dist>25)ev('long',T);}if(M.chain>=4)ev('team',T);if(M.golden)ev('golden',T);}
 else if(M.human>=0)ev('conceded',M.human);
 if(own)say(['OWN GOAL! '+b.last.name+' has scored a beauty... in the wrong net.'],{},1);
 else if(sh&&sh.type==='header')say('header',o,1);else if(sh&&sh.type==='volley')say('volley',o,1);else if(sh&&sh.type==='chip')say('chip',o,1);else if(sh&&sh.dist>25)say('long',o,1);else if(M.chain>=4)say('team',o,1);else say('goal',o,1);
 pop('GOAL!!','#ffe14a',true);
 const types=['plane','knee','flip','robot','shirt','worm','point','knee','plane'];const ct=pick(types);sc.st='cele';sc.cele=ct;sc.stt=0;sc.cx=XU(T,L-3);sc.cy=W-2;
 M.celeP=sc;setTimeout(()=>{if(M&&M.phase==='goal')say(LINES.cele[ct],o);},1400);
 for(const p of tm.ps)if(act(p)&&p!==sc&&p.role!=='GK'){p.st='run';}
 for(const p of M.t[1-T].ps)if(act(p)){p.st='walk';p.stt=0;}
 const k=M.t[1-T].ps[0];k.st='fall';k.stt=3;}
function clockMin(){return Math.min(45,Math.floor(M.clock/M.halfLen*45))+(M.half===2?45:M.half===3?90:0);}
/* ----- set pieces ----- */
function setPiece(type,T,x,y){const b=M.ball;M.phase='set';b.owner=null;b.vx=b.vy=b.vz=0;b.z=0;b.x=x;b.y=y;b.shot=null;M.offs.clear();M.passTo=null;
 const sp=M.sp={type,T,x,y,t:0,taker:null};const att=M.t[T],def=M.t[1-T];
 // taker
 let tk;if(type==='goalkick')tk=att.ps[0];else{let bd=1e9;for(const p of att.ps){if(!act(p)||p.role==='GK')continue;const d=type==='kickoff'?(p.role==='FW'?0:99):hyp(p.x-x,p.y-y);if(d<bd){bd=d;tk=p;}}}
 sp.taker=tk;
 for(const tm of M.t)for(const p of tm.ps){if(!act(p))continue;p.sx=p.x;p.sy=p.y;p.st='run';p.vx=p.vy=0;const own=p.T===T;let u,yy;const bu=U(p.T,x);
  if(type==='kickoff'){u=Math.min(p.fx*L*0.9,L/2-1.2);if(p.role==='FW'&&!own)u=L/2-9.6;yy=p.fy*W;}
  else if(type==='penalty'){if(p.role==='GK'){u=own?1.5:0.2;yy=CY;}else{u=own?L-22+(p.i%4):18+(p.i%4)*1.5;yy=CY+(p.i-5.5)*3;}}
  else if(type==='corner'){if(p.role==='GK'){u=own?8:1.0;yy=CY;}else if(own){u=(p.i===1||p.i===4)?L*0.5:L-4-R()*9;yy=CY+(R()-.5)*16;}else{u=p.role==='FW'?L*0.42:2.5+R()*9;yy=CY+(R()-.5)*16;}}
  else{u=p.role==='GK'?(own&&type==='goalkick'?5:1.5):p.fx*L*0.55+bu*0.45+(own?6:-3);yy=p.role==='GK'?CY:CY+(p.fy-0.5)*W*0.8+(y-CY)*0.3;}
  let wx=XU(p.T,clamp(u,0.2,L-0.2));
  if(!own&&type!=='kickoff'&&!(type==='penalty'&&p.role==='GK')){const d=hyp(wx-x,yy-y);if(d<9.2){const a=Math.atan2(yy-y,wx-x)||1;wx=x+Math.cos(a)*9.3;yy=y+Math.sin(a)*9.3;}}
  p.tx=clamp(wx,0.3,L-0.3);p.ty=clamp(yy,0.5,W-0.5);}
 // taker spot
 const dir=att.dir;let txk=x-dir*0.7,tyk=y;if(type==='throw'){tyk=y<1?-0.4:W+0.4;txk=x;}if(type==='corner'){txk=x+(x<1?-0.5:0.5);tyk=y+(y<1?-0.5:0.5);}
 tk.tx=txk;tk.ty=tyk;
 if(type==='kickoff'){const f2=att.ps.find(p=>p.role==='FW'&&p!==tk&&act(p));if(f2){f2.tx=x-dir*1.5;f2.ty=CY+4;}}
 if(type==='penalty'){tk.tx=x-dir*1.2;tk.ty=y;}
 if(T===M.human)M.ctl=tk;
 M.ref.x=x-8;M.ref.y=clamp(y+8,2,W+1);
 if(type==='freekick')say('freekick',{t:att.d.n});if(type==='penalty'){say('penalty',{p:tk.name,t:att.d.n},1);pop('PENALTY!','#ffe14a',true);}}
function setUpdate(dt){const sp=M.sp;sp.t+=dt;const e=clamp(sp.t/0.9,0,1),ee=e*e*(3-2*e);
 for(const tm of M.t)for(const p of tm.ps){if(!act(p)||p.tx===undefined)continue;const nx=lerp(p.sx,p.tx,ee),ny=lerp(p.sy,p.ty,ee);p.vx=(nx-p.x)/dt;p.vy=(ny-p.y)/dt;p.x=nx;p.y=ny;p.ph+=hyp(p.vx,p.vy)*dt*2.2;p.st='run';
  if(e>=1){p.vx=p.vy=0;const b=M.ball;p.face=Math.atan2(b.y-p.y,b.x-p.x);}}
 if(e<1)return;const tk=sp.taker,att=M.t[sp.T];tk.face=sp.type==='throw'?(att.dir>0?0:PI)+(sp.y<1?0.6:-0.6)*att.dir:Math.atan2(CY-tk.y,oppGoalX(sp.T)-tk.x);if(sp.type==='kickoff')tk.face=att.dir>0?PI*0.85:PI*0.15;
 if(sp.T===M.human){if(inp.mag>0.3)tk.face=Math.atan2(inp.my,inp.mx);
  if(rel(inp.A)||(sp.t>7)){takeSet(tk,'A',inp.A.held);return;}if(rel(inp.B)){takeSet(tk,'B',inp.B.held);return;}if(hit(inp.C)){takeSet(tk,'C',0);return;}}
 else if(sp.t>1.5){takeSet(tk,null,0);}}
function takeSet(tk,btn,held){const sp=M.sp,T=sp.T,att=M.t[T],b=M.ball;M.phase='live';b.x=sp.x;b.y=sp.y;if(sp.type==='throw'){b.y=clamp(sp.y,0.3,W-0.3);b.z=1.8;}
 tk.x=tk.tx;tk.y=tk.ty;
 if(sp.type==='kickoff'){SND.whistle(1);say('kickoff',{t:att.d.n});crowd(0.9);}
 const hu=T===M.human,sk=aiSkill(T);
 if(sp.type==='penalty'){let gy,pw;if(hu){gy=CY+inp.my*(GW-0.4)+(R()-.5)*0.8;pw=clamp((held||0.5)/0.8,0.4,1);}else{gy=CY+(R()<.5?-1:1)*(GW-0.5-R()*1.5);pw=0.8;}
  const gz=0.3+pw*1.3+(pw>0.95?0.9:0);shoot(tk,gy,gz,18+pw*10,'normal');b.shot.pen=1;b.cv=0;M.after=null;const k=M.t[1-T].ps[0];k.react=0.05;return;}
 if(sp.type==='corner'){let tx=XU(T,L-9-R()*4),ty=CY+(R()-.5)*10;if(hu&&btn==='A'&&held<0.2){const q=nearestMate(tk,null);if(q&&hyp(q.x-tk.x,q.y-tk.y)<20){passTo(tk,q.x,q.y,false);M.passTo=q;return;}}
  kickTo(tk,tx,ty,clamp(9+hyp(tx-b.x,ty-b.y)*0.42,12,24),9.5,'cross');let bq=null,bd=1e9;for(const q of att.ps)if(act(q)&&q!==tk&&q.role!=='GK'){const d=hyp(q.x-tx,q.y-ty);if(d<bd){bd=d;bq=q;}}M.passTo=bq;if(hu&&bq)M.ctl=bq;return;}
 if(sp.type==='goalkick'&&!hu){keeperLong(tk);return;}
 if(hu){if(btn==='B'&&sp.type==='freekick'){humanShoot(tk,clamp(held/0.8,0.3,1));return;}humanPass(tk,btn==='C'?'lob':(held>0.5?'lob':held>0.22?'through':'ground'),sp.type==='throw');return;}
 if(sp.type==='freekick'&&hyp(oppGoalX(T)-sp.x,CY-sp.y)<28&&R()<0.7){aiShoot(tk,sk);return;}
 const bp=bestPass(tk);if(bp){passTo(tk,bp.x,bp.y,bp.lob&&sp.type!=='throw');M.passTo=bp.q;}else{const q=nearestMate(tk,null);passTo(tk,q.x,q.y,false);M.passTo=q;}}
function keeperLong(k){const T=k.T;let best=null,bs=-1e9;for(const q of M.t[T].ps){if(q===k||!act(q))continue;const[,od]=nearestOpp(q);const s=Math.min(od,8)+U(T,q.x)*0.1;if(s>bs){bs=s;best=q;}}passTo(k,best.x,best.y,true);M.passTo=best;}
function nearestMate(p,dir){let best=null,bs=1e9;for(const q of M.t[p.T].ps){if(q===p||!act(q)||q.role==='GK')continue;const dx=q.x-p.x,dy=q.y-p.y,d=hyp(dx,dy);let s=d;if(dir){const a=Math.acos(clamp((dx*dir[0]+dy*dir[1])/(d||1),-1,1));if(a>0.9||d<3)continue;let lane=5;for(const o of M.t[1-p.T].ps)if(act(o))lane=Math.min(lane,segD(o.x,o.y,p.x,p.y,q.x,q.y));s=a*14+d*0.6-lane*2.2-(M.offs.has(q)?-30:0);}if(s<bs){bs=s;best=q;}}return best;}
/* ----- human control ----- */
function humanPass(p,kind,throwIn){const b=M.ball,T=p.T;const dir=inp.mag>0.3?[inp.mx/inp.mag,inp.my/inp.mag]:[Math.cos(p.face),Math.sin(p.face)];
 let q=nearestMate(p,dir);let tx,ty;
 if(q){tx=q.x+q.vx*0.4;ty=q.y+q.vy*0.4;if(kind!=='ground'){tx+=M.t[T].dir*7+q.vx*0.3;ty+=dir[1]*2;}}else{tx=b.x+dir[0]*18;ty=b.y+dir[1]*18;}
 tx=clamp(tx,1,L-1);ty=clamp(ty,1,W-1);
 if(throwIn){const d=Math.min(hyp(tx-b.x,ty-b.y),22);const a=Math.atan2(ty-b.y,tx-b.x);tx=b.x+Math.cos(a)*d;ty=b.y+Math.sin(a)*d;kickTo(p,tx,ty,clamp(d*0.9,7,15),2,'throw');}
 else passTo(p,tx,ty,kind==='lob');
 if(q){M.passTo=q;M.ctl=q;}}
function humanShoot(p,pw,chip){const T=p.T,gx=oppGoalX(T);let gy=CY+(Math.abs(inp.my)>0.25?Math.sign(inp.my)*(GW-0.5):(p.y<CY?1:-1)*1.6);const[,nd]=nearestOpp(p);
 gy+=(R()-.5)*(1.4-pw*0.4+(nd<2?1.2:0));let gz=0.25+pw*1.45+(pw>0.93?(pw-0.93)*30:0),spd=14+20*pw;
 if(chip){gz=1.9;spd=11+5*pw;const d=hyp(gx-p.x,gy-p.y),Tt=d/spd;M.ball.x=p.x+Math.cos(p.face)*0.6;kickTo(p,gx,gy,spd,(gz+4.9*Tt*Tt)/Tt*1.0,'shot');M.ball.shot={p,type:'chip',dist:hyp(gx-p.x,CY-p.y)};M.t[T].st.shots++;return;}
 shoot(p,gy,gz,spd,'normal');}
function switchCtl(force){const tm=M.t[M.human],b=M.ball;let best=null,bd=1e9;const ip=predictBall(0.35);for(const p of tm.ps){if(!act(p)||p.role==='GK')continue;if(force&&p===M.ctl)continue;const d=hyp(p.x-ip[0],p.y-ip[1]);if(d<bd){bd=d;best=p;}}
 if(best){if(!force&&M.ctl&&act(M.ctl)&&M.ctl.role!=='GK'){const dc=hyp(M.ctl.x-ip[0],M.ctl.y-ip[1]);if(dc<bd+3)return;}M.ctl=best;}}
function humanUpdate(dt){if(M.human<0)return;const b=M.ball;const own=b.owner&&b.owner.T===M.human;
 if(own&&b.owner.role!=='GK')M.ctl=b.owner;else{M.swT-=dt;if(M.swT<=0||!M.ctl||!act(M.ctl)){M.swT=0.25;if(!(M.passTo&&M.passTo===M.ctl&&!b.owner))switchCtl(false);}}
 if(M.after&&M.after.t>0){M.after.t-=dt;if(b.shot&&!b.owner&&Math.abs(inp.my)>0.3){b.cv=clamp((b.cv||0)+inp.my*dt*24,-8,8);M.after.used=1;}}
 const p=M.ctl;if(!p||!act(p))return;if(p.volArm>0)p.volArm-=dt;
 const has=b.owner===p;
 if(free(p)){const sp=p.spd*(inp.mag>0.85?1.12:0.95)*(has?0.92:1);steer(p,inp.mx*sp,inp.my*sp,dt,has?6.5:10);if(inp.mag>0.2){const ta=Math.atan2(inp.my,inp.mx);let da=ta-p.face;da=Math.atan2(Math.sin(da),Math.cos(da));p.face+=da*Math.min(1,dt*(has?12:20));}}
 if(has){
  if(rel(inp.A)){const h=inp.A.held;humanPass(p,h<0.22?'ground':h<0.5?'through':'lob');}
  else if(hit(inp.C))humanPass(p,'lob');
  else if(rel(inp.B)){const pw=clamp(inp.B.held/0.8,0.15,1);const back=inp.mag>0.5&&inp.mx*M.t[p.T].dir<-0.5;humanShoot(p,pw,back);}
 }else{
  if(hit(inp.A)){const o=b.owner;if(o&&o.T!==p.T&&hyp(o.x-p.x,o.y-p.y)<1.8)standTackle(p,o);else switchCtl(true);inp.A.rel=0;}
  if(hit(inp.B)){if(!b.owner&&b.z>0.2&&hyp(b.x-p.x,b.y-p.y)<6)p.volArm=0.7;else if(free(p))slide(p);inp.B.rel=0;}
 }}
/* ----- player states & physics ----- */
function playerUpdate(p,dt){if(!act(p))return;
 if(p.st==='slide'){slideUpdate(p,dt);p.stt-=dt;if(p.stt<=0){p.st='fall';p.stt=0.35;}}
 else if(p.st==='kick'||p.st==='tackle'){p.stt-=dt;p.vx*=0.9;p.vy*=0.9;if(p.stt<=0)p.st='run';}
 else if(p.st==='fall'||p.st==='roll'){p.stt-=dt;p.vx*=0.9;p.vy*=0.9;if(p.st==='roll'){p.x+=Math.cos(p.face)*dt*1.5;}if(p.stt<=0)p.st='run';}
 if(p.st!=='dive'){p.x+=p.vx*dt;p.y+=p.vy*dt;}
 if(p.z>0&&p.st!=='dive'){p.z=Math.max(0,p.z-dt*2);}
 p.x=clamp(p.x,-3,L+3);p.y=clamp(p.y,-2.5,W+2.5);const sp=hyp(p.vx,p.vy);
 if(sp>0.5&&(free(p))&&!(p===M.ctl&&inp.mag>0.2)&&M.ball.owner!==p)p.face=Math.atan2(p.vy,p.vx);
 if(M.ball.owner===p&&p.T!==M.human&&sp>0.5)p.face=Math.atan2(p.vy,p.vx);
 p.ph+=sp*dt*2.3;}
function separate(){const all=M.all;for(let i=0;i<all.length;i++){const a=all[i];if(!act(a))continue;for(let j=i+1;j<all.length;j++){const c=all[j];if(!act(c))continue;const dx=c.x-a.x,dy=c.y-a.y,d2=dx*dx+dy*dy;if(d2<0.5&&d2>1e-6){const d=Math.sqrt(d2),o=(0.71-d)*0.5;a.x-=dx/d*o;a.y-=dy/d*o;c.x+=dx/d*o;c.y+=dy/d*o;}}}}
function refUpdate(dt){const r=M.ref,b=M.ball;const tx=clamp(b.x-(b.x>L/2?9:-9),5,L-5),ty=clamp(b.y+14,8,W+1.5);const dx=tx-r.x,dy=ty-r.y,d=hyp(dx,dy);const sp=Math.min(6.5,d*1.2);steer(r,d>0.1?dx/d*sp:0,d>0.1?dy/d*sp:0,dt,4);r.x+=r.vx*dt;r.y+=r.vy*dt;r.ph+=hyp(r.vx,r.vy)*dt*2.3;if(hyp(r.vx,r.vy)>0.5)r.face=Math.atan2(r.vy,r.vx);if(r.cardT>0)r.cardT-=dt;}
/* ----- replay recording ----- */
const STC=['idle','run','kick','slide','tackle','fall','dive','cele','walk','roll'];
function record(){const a=M.all,f=new Float32Array(a.length*7+6);let k=0;for(const p of a){f[k++]=p.x;f[k++]=p.y;f[k++]=p.z;f[k++]=p.face;f[k++]=STC.indexOf(p.st);f[k++]=p.ph;f[k++]=p.off?1:0;}const b=M.ball;f[k++]=b.x;f[k++]=b.y;f[k++]=b.z;f[k++]=b.spin;f[k++]=M.ref.x;f[k++]=M.ref.y;
 if(M.rec.length<200)M.rec.push(f);else{M.rec[M.recI]=f;M.recI=(M.recI+1)%200;}}
function recFrames(){return M.rec.length<200?M.rec.slice():M.rec.slice(M.recI).concat(M.rec.slice(0,M.recI));}
function applyFrame(f){const a=M.all;let k=0;for(const p of a){p.x=f[k++];p.y=f[k++];p.z=f[k++];p.face=f[k++];p.st=STC[f[k++]]||'run';p.ph=f[k++];p.off=f[k++]>0;}const b=M.ball;b.x=f[k++];b.y=f[k++];b.z=f[k++];b.spin=f[k++];M.ref.x=f[k++];M.ref.y=f[k++];b.owner=null;}
/* ----- main step ----- */
let recTick=0;
function matchStep(dt){if(!M.all)M.all=M.t[0].ps.concat(M.t[1].ps);M.pt+=dt;M.excite=Math.max(0,M.excite-dt*0.25);
 for(const pp of M.pops)pp.t+=dt;M.pops=M.pops.filter(x=>x.t<(x.big?2.2:1.6));
 if(M.say.length){M.sayT+=dt;if(M.sayT>3.8){M.say.shift();M.sayT=0;}}
 const ph=M.phase;
 if(ph==='intro'){introStep(dt);return;}
 if(ph==='replay'){M.rp+=M.rpSpd;const fr=M.rpF;const i=Math.floor(M.rp);if(i>=fr.length-1||hit(inp.A)||hit(inp.B)||M.skip){M.skip=0;afterGoal();return;}applyFrame(fr[i]);return;}
 if(ph==='stop'){M.stopT-=dt;for(const p of M.all){p.vx*=0.9;p.vy*=0.9;playerUpdate(p,dt);}ballUpdate(dt);refUpdate(dt);if(M.stopT<=0){const f=M.stopFn;M.stopFn=null;f&&f();}clockStep(dt);return;}
 if(ph==='goal'){goalStep(dt);if(++recTick%2===0&&M.pt<2.2)record();return;}
 if(ph==='set'){setUpdate(dt);refUpdate(dt);clockStep(dt);return;}
 if(ph!=='live')return;
 clockStep(dt);if(M.phase!=='live')return;
 humanUpdate(dt);teamAI(0,dt);teamAI(1,dt);
 for(const p of M.all)playerUpdate(p,dt);separate();ballUpdate(dt);if(M.phase==='live')contest();refUpdate(dt);
 if(M.ball.owner)M.t[M.ball.owner.T].st.poss+=dt;
 if(++recTick%2===0)record();
 M.idleT-=dt;if(M.idleT<=0){M.idleT=9+R()*7;const o=M.ball.owner;if(o&&R()<0.75)say('idle',{p:o.name,t:M.t[o.T].d.n});else say('ref');}
 M.chantT-=dt;if(M.chantT<=0){M.chantT=22+R()*15;SND.chant();}
 // crowd excitement near box
 const b=M.ball;const nearGoal=Math.min(b.x,L-b.x)<20;crowd(nearGoal?1.25:0.9);}
function clockStep(dt){M.clock+=dt;const lim=M.half===3?M.halfLen:M.halfLen;if(M.clock>=lim&&(M.phase==='live'||M.phase==='set')){endHalf();}}
function goalStep(dt){const sc=M.celeP;sc.stt+=dt;
 for(const tm of M.t)for(const p of tm.ps){if(!act(p))continue;
  if(p===sc){const dx=sc.cx-p.x,dy=sc.cy-p.y,d=hyp(dx,dy);if(sc.stt<1.8&&d>1){const s=sc.cele==='knee'&&d<8?9:7.5;p.vx=dx/d*s;p.vy=dy/d*s;}else{p.vx*=0.9;p.vy*=0.9;}}
  else if(tm===M.t[sc.T]&&p.role!=='GK'&&p.st!=='fall'){const dx=sc.x-p.x,dy=sc.y-p.y,d=hyp(dx,dy);if(d>1.6){p.vx=dx/d*6;p.vy=dy/d*6;}else{p.vx*=0.8;p.vy*=0.8;p.st='cele';p.cele='plane';}}
  else if(p.st==='walk'){p.vx=(ownGoalX(p.T)>L/2?0.6:-0.6);p.vy=0;}
  else if(p.st!=='fall'){p.vx*=0.9;p.vy*=0.9;}
  if(p.st==='fall'){p.stt-=dt;if(p.stt<=0)p.st='idle';}
  p.x+=p.vx*dt;p.y+=p.vy*dt;p.ph+=hyp(p.vx,p.vy)*dt*2.3;if(hyp(p.vx,p.vy)>0.5)p.face=Math.atan2(p.vy,p.vx);}
 const b=M.ball,gl=b.x<L/2?0:L,dep=Math.abs(b.x-gl),inside=gl===0?b.x<0.05:b.x>L-0.05;
 if(inside&&dep>1.4&&!M.net)M.net={g:gl?1:0,y:b.y,z:Math.max(0.3,b.z),t:0};if(M.net)M.net.t+=dt;
 if(inside){if(dep<1.9){b.x+=b.vx*dt;b.vx*=0.985;}else{b.x=gl+(gl?1.9:-1.9);b.vx=0;}b.y=clamp(b.y+b.vy*dt*0.5,CY-GW+0.25,CY+GW-0.25);b.vz-=9.8*dt;b.z+=b.vz*dt;if(b.z>GH-0.25){b.z=GH-0.25;b.vz=0;}if(b.z<=0){b.z=0;b.vz=Math.abs(b.vz)*0.35;}b.spin+=dt*4;}
 else{b.x+=b.vx*dt;b.y+=b.vy*dt;b.vx*=0.95;b.vy*=0.95;b.z=Math.max(0,b.z-dt);}
 refUpdate(dt);crowd(1.6);
 if(M.pt>3.2){const fr=recFrames();if(fr.length>40&&!TEST_NOREPLAY()){M.phase='replay';M.rpF=fr.slice(Math.max(0,fr.length-150));M.rp=0;M.rpSpd=0.3;M.saved=M.all.map(p=>[p.st]);inp.A.pr=inp.B.pr=0;}else afterGoal();}}
function TEST_NOREPLAY(){return false;}
function afterGoal(){M.rec=[];M.recI=0;M.net=null;for(const p of M.all)if(p.st==='cele'||p.st==='walk'||p.st==='fall')p.st='run';
 if(M.half===3){endMatch();return;}const T=M.goalLog[M.goalLog.length-1].T;setPiece('kickoff',1-T,L/2,CY);}
function endHalf(){SND.whistle(M.half===1?2:3,1);const b=M.ball;b.owner=null;b.vx=b.vy=0;
 if(M.half===1){say('halftime',{},1);M.phase='ht';onHalfTime();}
 else if(M.half===2&&M.ko&&M.t[0].score===M.t[1].score){M.half=3;M.clock=0;M.halfLen=Math.max(45,M.halfLen*0.6);M.golden=true;say('golden',{},1);pop('GOLDEN GOAL','#ffe14a',true);setPiece('kickoff',R()<.5?0:1,L/2,CY);}
 else if(M.half===3){M.coin=R()<0.5?0:1;say('coin',{},1);pop(M.t[M.coin].d.n.toUpperCase()+' WIN THE COIN TOSS','#ffe14a',true);endMatch();}
 else endMatch();}
function secondHalf(){M.half=2;M.clock=0;M.rec=[];for(const tm of M.t){tm.dir*=-1;}setPiece('kickoff',1,L/2,CY);}
function endMatch(){M.phase='ft';say('fulltime',{},1);crowd(0.6);onFullTime();}
/* ----- intro: walk-out + anthems ----- */
function introStep(dt){const t=M.pt;M.camX=L/2;
 for(const tm of M.t)for(const p of tm.ps){const T=p.T,i=p.i;const lx=L/2+(T?1.6+i*1.25:-1.6-i*1.25),ly=CY+4;const start=i*0.18;
  if(t<start){p.x=L/2+(T?1.2:-1.2);p.y=-1.5;p.st='idle';continue;}
  const dx=lx-p.x,dy=ly-p.y,d=hyp(dx,dy);if(d>0.15){const s=Math.min(3.2,d*3);p.vx=dx/d*s;p.vy=dy/d*s;p.st='walk';}else{p.vx=p.vy=0;p.st='idle';p.face=PI/2;}
  p.x+=p.vx*dt;p.y+=p.vy*dt;p.ph+=hyp(p.vx,p.vy)*dt*2.3;if(hyp(p.vx,p.vy)>0.3)p.face=Math.atan2(p.vy,p.vx);}
 M.ref.x=L/2;M.ref.y=CY+5;M.ref.face=PI/2;M.ref.vx=M.ref.vy=0;
 if(!M.j0&&t>3.2){M.j0=1;SND.jingle(M.t[0].d.idx+3);crowd(0.5);}
 if(!M.j1&&t>7){M.j1=1;SND.jingle(M.t[1].d.idx+3);}
 if(t>11||M.skip){M.skip=0;crowd(0.9);setPiece('kickoff',0,L/2,CY);}}
/* ---------- rendering: 90s broadcast side-on camera ---------- */
const PPM=23;let camX=L/2,camFY=CY,camZ=1.4,zBase=1.5,crowdCv=null,crowdKey='';
const sY=y=>0.72+0.28*y/W;
const bYf=(y,z)=>{const t=y/W;return 350*(t*0.86+0.14*t*t)-(z||0)*PPM*sY(y);};
const SX=(x,y)=>VW/2+(x-camX)*PPM*sY(y)*camZ;
const SY=(y,z)=>VH/2+30+(bYf(y,z)-bYf(camFY,0))*camZ;
const KY=y=>PPM*sY(y)*camZ;
function zoomBase(){return PY>0?1.4:clamp(VW/(PPM*28),1.55,1.95);}
function camUpdate(){const b=M.ball;zBase=zoomBase();let fx=b.x,fy=b.y,zt=zBase,sm=0.07;const ph=M.phase;
 if(ph==='intro'){fx=L/2;fy=CY+3;zt=zBase*0.85;}
 else if(ph==='goal'&&M.celeP){fx=M.celeP.x;fy=M.celeP.y;zt=zBase*1.35;sm=0.05;}
 else if(ph==='replay'){fx=b.x;fy=b.y;zt=zBase*1.12;sm=0.2;}
 else if((ph==='set'||ph==='stop')&&M.sp&&ph==='set'&&['corner','penalty','freekick'].includes(M.sp.type)){fx=M.sp.type==='corner'?XU(M.sp.T,L-12):M.sp.x+M.t[M.sp.T].dir*7;fy=lerp(M.sp.y,CY,0.5);zt=zBase*(M.sp.type==='penalty'?1.2:1.08);}
 else{const o=b.owner;const dir=o?M.t[o.T].dir:(Math.abs(b.vx)>2?Math.sign(b.vx):0);fx=b.x+dir*7+b.vx*0.25;}
 fy=lerp(fy,CY,0.45);camZ=lerp(camZ,zt,0.035);
 const hw=VW/2/(PPM*camZ*0.86),lo=hw-6,hi=L-hw+6;camX=lo<hi?clamp(lerp(camX,fx,sm),lo,hi):L/2;camFY=lerp(camFY,fy,sm);}
function poly(pts,fill){cx.beginPath();for(let i=0;i<pts.length;i+=2){const X=SX(pts[i],pts[i+1]),Y=SY(pts[i+1]);i?cx.lineTo(X,Y):cx.moveTo(X,Y);}cx.closePath();cx.fillStyle=fill;cx.fill();}
function line3(a){cx.beginPath();for(let i=0;i<a.length;i+=3){const X=SX(a[i],a[i+1]),Y=SY(a[i+1],a[i+2]);i?cx.lineTo(X,Y):cx.moveTo(X,Y);}cx.stroke();}
function pline(a){cx.beginPath();for(let i=0;i<a.length;i+=2){const X=SX(a[i],a[i+1]),Y=SY(a[i+1]);i?cx.lineTo(X,Y):cx.moveTo(X,Y);}cx.stroke();}
function arc(x0,y0,r,a0,a1){const a=[];for(let i=0;i<=24;i++){const t=a0+(a1-a0)*i/24;a.push(x0+Math.cos(t)*r,y0+Math.sin(t)*r);}pline(a);}
function buildCrowd(cols){const k=cols.join()+VW+SCL;if(crowdCv&&crowdKey===k)return;crowdKey=k;const wv=(L+60)*PPM*0.72,hv=160;crowdCv=document.createElement('canvas');crowdCv.width=Math.ceil(wv*SCL);crowdCv.height=Math.ceil(hv*SCL);
 const g=crowdCv.getContext('2d');g.scale(SCL,SCL);const gr=g.createLinearGradient(0,0,0,hv);gr.addColorStop(0,'#0d1324');gr.addColorStop(1,'#2a3350');g.fillStyle=gr;g.fillRect(0,0,wv,hv);
 const r=rng(42);const pal=cols.concat(cols,['#e8e0d0','#333','#c33','#ddd','#357','#a85']);
 for(let row=0;row<15;row++){const y=18+row*7.3,sz=2.2+row*0.13;g.fillStyle='rgba(0,0,0,.25)';g.fillRect(0,y+sz,wv,1.2);for(let x=(row%2)*2.5;x<wv;x+=4.6+r()*1.2){if(r()<0.06)continue;g.fillStyle=pal[(r()*pal.length)|0];g.fillRect(x,y,sz*0.9,sz*1.1);g.fillStyle=SKIN[(r()*4)|0];g.fillRect(x+0.2,y-sz*0.6,sz*0.6,sz*0.6);}}
 // roof & floodlights
 g.fillStyle='#070a14';g.fillRect(0,0,wv,14);for(let x=40;x<wv;x+=240){g.fillStyle='#fffbe0';g.fillRect(x,3,26,6);g.fillStyle='rgba(255,250,220,.08)';g.beginPath();g.moveTo(x,9);g.lineTo(x-60,140);g.lineTo(x+86,140);g.lineTo(x+26,9);g.fill();}
 // ad boards
 for(let x=0,i=0;x<wv;x+=170,i++){const c=['#c8102e','#123a8a','#f2c400','#0d7a3a','#111','#ff6a00'][i%6];g.fillStyle=c;g.fillRect(x,134,168,22);g.fillStyle=c==='#f2c400'?'#111':'#fff';g.font='bold 13px Impact,Arial Black,sans-serif';g.textAlign='center';g.fillText(SPONSORS[i%SPONSORS.length],x+84,150);}
 g.fillStyle='#000';g.fillRect(0,156,wv,4);}
function drawWorld(){const b=M.ball;
 camUpdate();
 cx.fillStyle='#0a0f1e';cx.fillRect(0,0,VW,VH);
 buildCrowd([M.t[0].kit[0],M.t[1].kit[0]]);
 const ex=M.excite,bob=ex>0.05?Math.abs(Math.sin(perfT*14))*3*ex*camZ:0;const y0=SY(0,0);
 const ox=VW/2+(-30-camX)*PPM*0.72*camZ;cx.drawImage(crowdCv,ox,y0-160*camZ+2-bob,crowdCv.width/SCL*camZ,160*camZ);
 if(ex>0.3){cx.fillStyle='#fff';for(let i=0;i<14*ex;i++)cx.fillRect(R()*VW,y0-150*camZ+R()*120*camZ,2,2);}
 // grass
 poly([-40,-3,L+40,-3,L+40,W+14,-40,W+14],'#2f7d32');
 for(let i=0;i<20;i++){const x0=i*L/20,x1=(i+1)*L/20;poly([x0,-3,x1,-3,x1,W+6,x0,W+6],i%2?'#3fa142':'#2f8a33');}
 // y-stripe shading for depth
 const sh=cx.createLinearGradient(0,SY(0),0,SY(W));sh.addColorStop(0,'rgba(0,20,0,.2)');sh.addColorStop(1,'rgba(255,255,200,0)');cx.fillStyle=sh;cx.fillRect(0,SY(0)-2,VW,SY(W)-SY(0));
 cx.strokeStyle='rgba(255,255,255,.95)';cx.lineWidth=1.7*camZ;cx.lineCap='round';
 pline([0,0,L,0,L,W,0,W,0,0]);pline([L/2,0,L/2,W]);arc(L/2,CY,9.15,0,PI*2);
 for(const s of[0,1]){const g=s?L:0,d=s?-1:1;pline([g,CY-20.16,g+d*16.5,CY-20.16,g+d*16.5,CY+20.16,g,CY+20.16]);pline([g,CY-9.16,g+d*5.5,CY-9.16,g+d*5.5,CY+9.16,g,CY+9.16]);
  const a=Math.acos(5.5/9.15);if(s)arc(g-11,CY,9.15,PI-a,PI+a);else arc(11,CY,9.15,-a,a);}
 cx.fillStyle='#fff';for(const x of[11,L-11,L/2]){cx.beginPath();cx.ellipse(SX(x,CY),SY(CY),2.2*camZ,1.4*camZ,0,0,PI*2);cx.fill();}
 // flags
 for(const x of[0,L])for(const y of[0,W]){cx.strokeStyle='#eee';cx.lineWidth=1.5;line3([x,y,0,x,y,1.5]);cx.fillStyle='#ffd400';const X=SX(x,y),Y=SY(y,1.5);cx.fillRect(X,Y,7*camZ,5*camZ);}
 // entities sorted by depth
 const ents=[];for(const tm of M.t)for(const p of tm.ps)if(act(p))ents.push(p);ents.push(M.ref);ents.push(b);ents.push({goal:0,y:CY-GW},{goal:1,y:CY-GW},{post:0,y:CY+GW},{post:1,y:CY+GW});
 ents.sort((a,c)=>a.y-c.y);
 // shadows first
 for(const e of ents){if(e.goal!==undefined||e.post!==undefined)continue;const k=KY(e.y);cx.fillStyle='rgba(0,0,0,.28)';cx.beginPath();if(e===b){const s=1/(1+b.z*0.25);cx.ellipse(SX(b.x,b.y),SY(b.y),0.3*k*s,0.12*k*s,0,0,PI*2);}else cx.ellipse(SX(e.x,e.y)-0.2*k,SY(e.y)+0.04*k,0.55*k,0.15*k,0,0,PI*2);cx.fill();}
 for(const e of ents){if(e.goal!==undefined)drawGoalBack(e.goal);else if(e.post!==undefined)drawGoalFront(e.post);else if(e===b)drawBall();else drawMan(e);}
 // markers
 if(M.human>=0&&M.ctl&&act(M.ctl)&&(M.phase==='live'||M.phase==='set')){const p=M.ctl,k=KY(p.y)*1.3,X=SX(p.x,p.y),Y=SY(p.y)-2.25*k-Math.abs(Math.sin(perfT*6))*3;cx.fillStyle='#ffe14a';cx.strokeStyle='#000';cx.lineWidth=1.5;cx.beginPath();cx.moveTo(X-7,Y-9);cx.lineTo(X+7,Y-9);cx.lineTo(X,Y);cx.closePath();cx.fill();cx.stroke();
  if(b.owner===p||M.phase==='set'){cx.font='bold 12px Arial,sans-serif';cx.textAlign='center';cx.lineWidth=3;cx.strokeText(p.num+' '+p.name.toUpperCase(),X,Y-13);cx.fillStyle='#fff';cx.fillText(p.num+' '+p.name.toUpperCase(),X,Y-13);}
  if(inp.B.d&&(b.owner===p||M.phase==='set')){const pw=clamp(inp.B.h/0.8,0,1),by=SY(p.y)+10;cx.fillStyle='#000';cx.fillRect(X-31,by,62,10);const gg=cx.createLinearGradient(X-29,0,X+29,0);gg.addColorStop(0,'#2f6');gg.addColorStop(0.6,'#ff0');gg.addColorStop(1,'#f22');cx.fillStyle=gg;cx.fillRect(X-29,by+2,58*pw,6);cx.strokeStyle='#fff';cx.lineWidth=1;cx.strokeRect(X-31.5,by-0.5,63,11);}}}
function netBul(s,y,z){const n=M.net;if(!n||n.g!==s)return 0;const t=n.t;return 0.55*Math.exp(-t*2.2)*Math.abs(Math.cos(t*8))*Math.exp(-((y-n.y)**2+(z-n.z)**2)/1.1);}
function drawGoalBack(s){const g=s?L:0,d=s?1:-1,bx=g+d*2.2;cx.strokeStyle='rgba(255,255,255,.4)';cx.lineWidth=0.8*camZ;
 for(let i=0;i<=10;i++){const y=CY-GW+i*GW*2/10,a=[g,y,GH];for(let j=0;j<=6;j++){const z=GH*0.8*(1-j/6);a.push(bx+d*netBul(s,y,z),y,z);}line3(a);}
 for(let j=0;j<=5;j++){const z=j*GH*0.8/5,a=[];for(let i=0;i<=10;i++){const y=CY-GW+i*GW*2/10;a.push(bx+d*netBul(s,y,z),y,z);}line3(a);}
 for(let j=0;j<=4;j++){const z=j*GH/4;line3([g,CY-GW,z,bx,CY-GW,z*0.8]);}
 for(let i=0;i<=4;i++){const x=g+d*2.2*i/4;line3([x,CY-GW,GH-(GH*0.2)*i/4,x,CY+GW,GH-(GH*0.2)*i/4]);}
 cx.strokeStyle='#f4f4f4';cx.lineWidth=2.6*sY(CY-GW)*camZ;line3([g,CY-GW,0,g,CY-GW,GH,g,CY+GW,GH]);cx.lineWidth=1;cx.strokeStyle='rgba(255,255,255,.6)';line3([g,CY-GW,GH,bx,CY-GW,GH*0.8,bx,CY-GW,0]);}
function drawGoalFront(s){const g=s?L:0,d=s?1:-1,bx=g+d*2.2;cx.strokeStyle='rgba(255,255,255,.35)';cx.lineWidth=0.8;for(let j=0;j<=4;j++){const z=j*GH/4;line3([g,CY+GW,z,bx,CY+GW,z*0.8]);}
 cx.strokeStyle='rgba(255,255,255,.6)';cx.lineWidth=1;line3([g,CY+GW,GH,bx,CY+GW,GH*0.8,bx,CY+GW,0]);cx.strokeStyle='#f4f4f4';cx.lineWidth=2.8*sY(CY+GW)*camZ;line3([g,CY+GW,0,g,CY+GW,GH]);}
function drawBall(){const b=M.ball,k=KY(b.y)*1.3,X=SX(b.x,b.y),Y=SY(b.y,b.z)-0.22*k*0.6,r=Math.max(2.5,0.2*k);
 cx.fillStyle='#fff';cx.strokeStyle='#222';cx.lineWidth=1;cx.beginPath();cx.arc(X,Y,r,0,PI*2);cx.fill();cx.stroke();cx.fillStyle='#222';const a=b.spin;for(let i=0;i<2;i++){const t=a+i*PI;const c=Math.cos(t);if(c>-0.2){cx.beginPath();cx.arc(X+Math.sin(t)*r*0.5,Y-r*0.15,r*0.32*(0.4+c*0.6),0,PI*2);cx.fill();}}}
const shadeC={};function shade(c){if(shadeC[c])return shadeC[c];const n=parseInt(c.slice(1).padEnd(6,c.slice(1)),16);const r=(n>>16)*0.78|0,g=(n>>8&255)*0.78|0,b=(n&255)*0.78|0;return shadeC[c]='rgb('+r+','+g+','+b+')';}
/* ---------- flags (national flags, no crests) ---------- */
function drawFlag(t,x,y,w,h){cx.save();cx.beginPath();cx.rect(x,y,w,h);cx.clip();const f=t.f.split('|');
 const star=(sx,sy,r,c,fill)=>{cx.beginPath();for(let i=0;i<5;i++){const a=-PI/2+i*PI*4/5;cx.lineTo(sx+Math.cos(a)*r,sy+Math.sin(a)*r);}cx.closePath();if(fill){cx.fillStyle=c;cx.fill();}else{cx.strokeStyle=c;cx.lineWidth=Math.max(1,r*0.18);cx.stroke();}};
 if(f[0]==='v'||f[0]==='h'){const n=f.length-1;for(let i=0;i<n;i++){cx.fillStyle=f[i+1];if(f[0]==='v')cx.fillRect(x+w*i/n,y,w/n+1,h);else cx.fillRect(x,y+h*i/n,w,h/n+1);}}
 else switch(f[0]){
  case'bra':cx.fillStyle='#009c3b';cx.fillRect(x,y,w,h);cx.fillStyle='#ffdf00';cx.beginPath();cx.moveTo(x+w*0.08,y+h/2);cx.lineTo(x+w/2,y+h*0.1);cx.lineTo(x+w*0.92,y+h/2);cx.lineTo(x+w/2,y+h*0.9);cx.fill();cx.fillStyle='#002776';cx.beginPath();cx.arc(x+w/2,y+h/2,h*0.24,0,PI*2);cx.fill();break;
  case'arg':cx.fillStyle='#74acdf';cx.fillRect(x,y,w,h);cx.fillStyle='#fff';cx.fillRect(x,y+h/3,w,h/3);cx.fillStyle='#f6b40e';cx.beginPath();cx.arc(x+w/2,y+h/2,h*0.11,0,PI*2);cx.fill();break;
  case'eng':cx.fillStyle='#fff';cx.fillRect(x,y,w,h);cx.fillStyle='#ce1124';cx.fillRect(x+w*0.44,y,w*0.12,h);cx.fillRect(x,y+h*0.4,w,h*0.2);break;
  case'esp':cx.fillStyle='#c60b1e';cx.fillRect(x,y,w,h);cx.fillStyle='#ffc400';cx.fillRect(x,y+h/4,w,h/2);break;
  case'por':cx.fillStyle='#da291c';cx.fillRect(x,y,w,h);cx.fillStyle='#046a38';cx.fillRect(x,y,w*0.4,h);cx.fillStyle='#ffe900';cx.beginPath();cx.arc(x+w*0.4,y+h/2,h*0.2,0,PI*2);cx.fill();break;
  case'jpn':cx.fillStyle='#fff';cx.fillRect(x,y,w,h);cx.fillStyle='#bc002d';cx.beginPath();cx.arc(x+w/2,y+h/2,h*0.3,0,PI*2);cx.fill();break;
  case'usa':for(let i=0;i<13;i++){cx.fillStyle=i%2?'#fff':'#b22234';cx.fillRect(x,y+h*i/13,w,h/13+1);}cx.fillStyle='#3c3b6e';cx.fillRect(x,y,w*0.42,h*7/13);cx.fillStyle='#fff';for(let i=0;i<4;i++)for(let j=0;j<3;j++)cx.fillRect(x+w*(0.04+i*0.1),y+h*(0.07+j*0.16),1.4,1.4);break;
  case'mar':cx.fillStyle='#c1272d';cx.fillRect(x,y,w,h);star(x+w/2,y+h/2,h*0.28,'#006233',false);break;
  case'cro':cx.fillStyle='#ff0000';cx.fillRect(x,y,w,h/3);cx.fillStyle='#fff';cx.fillRect(x,y+h/3,w,h/3);cx.fillStyle='#171796';cx.fillRect(x,y+2*h/3,w,h/3+1);const s=h*0.1;for(let i=0;i<4;i++)for(let j=0;j<4;j++){cx.fillStyle=(i+j)%2?'#fff':'#f00';cx.fillRect(x+w/2-2*s+i*s,y+h*0.28+j*s,s,s);}break;
  case'mex':cx.fillStyle='#006847';cx.fillRect(x,y,w/3,h);cx.fillStyle='#fff';cx.fillRect(x+w/3,y,w/3,h);cx.fillStyle='#ce1126';cx.fillRect(x+2*w/3,y,w/3+1,h);cx.fillStyle='#8a5a2b';cx.beginPath();cx.arc(x+w/2,y+h/2,h*0.12,0,PI*2);cx.fill();break;}
 cx.restore();cx.strokeStyle='rgba(0,0,0,.6)';cx.lineWidth=1;cx.strokeRect(x+0.5,y+0.5,w-1,h-1);}
/* ---------- PS-era pre-rendered player sprites (3D capsule skeleton -> 8-direction sheets at load) ---------- */
const SKT=['#f0c5a0','#c08a5e','#7a4b2c'];
const FRN=['r0','r1','r2','r3','r4','r5','r6','r7','j0','j1','j2','j3','j4','j5','j6','j7','idle','kick0','kick1','tackle','s1','s2','dL1','dL2','dR1','dR2','fall','celeUp','plane','knee','point'];
const FI={};FRN.forEach((n,i)=>FI[n]=i);
const SPG=0.42,CAM_E=0.36;let SPRES=34,SHEET_MS=0;const SHEETS={};
const DSRC=[0,1,2,1,0,5,6,5],DFLIP=[0,0,0,1,1,0,0,1],DUNI=[0,1,2,5,6];
function hexRgb(c){if(c[0]!=='#'){const m=c.match(/\d+/g);return m.slice(0,3).map(Number);}c=c.replace('#','');if(c.length===3)c=c.split('').map(x=>x+x).join('');const n=parseInt(c,16);return[n>>16,n>>8&255,n&255];}
function mixC(c,t,w){const a=hexRgb(c),b=t==='w'?[255,255,255]:[0,0,0];return'rgb('+a.map((v,i)=>Math.round(v+(b[i]-v)*w)).join(',')+')';}
function colD(a,b){const x=hexRgb(a),y=hexRgb(b);return hyp(x[0]-y[0],x[1]-y[1],x[2]-y[2]);}
function poseOf(n){const P={lean:0.06,legs:[[0.04,0.12],[-0.04,0.12]],arms:[[0.08,0.35,0.14],[0.08,0.35,0.14]],pitch:0,roll:0,lift:0,ground:false};
 if((n[0]==='r'||n[0]==='j')&&n.length===2){const t=+n[1]/8*PI*2,s=Math.sin(t),c=Math.cos(t);
  if(n[0]==='r'){P.lean=0.26;P.legs=[[0.78*s,0.25+1.25*Math.max(0,c)],[-0.78*s,0.25+1.25*Math.max(0,-c)]];P.arms=[[-0.75*s,1.45,0.12],[0.75*s,1.45,0.12]];P.lift=0.045*Math.abs(c);}
  else{P.lean=0.1;P.legs=[[0.42*s,0.2+0.7*Math.max(0,c)],[-0.42*s,0.2+0.7*Math.max(0,-c)]];P.arms=[[-0.35*s,0.95,0.16],[0.35*s,0.95,0.16]];P.lift=0.02*Math.abs(c);}}
 else if(n==='kick0'){P.legs=[[0.15,0.2],[-0.8,1.5]];P.arms=[[0.5,0.4,0.6],[-0.3,0.4,0.6]];P.lean=0.05;}
 else if(n==='kick1'){P.legs=[[-0.1,0.15],[1.35,0.08]];P.arms=[[-0.4,0.3,0.75],[0.6,0.3,0.75]];P.lean=-0.18;}
 else if(n==='tackle'){P.legs=[[-0.35,0.7],[1.05,0.1]];P.arms=[[-0.4,0.5,0.45],[0.3,0.5,0.45]];P.lean=0.5;}
 else if(n==='s1'){P.pitch=-0.75;P.legs=[[0.65,1.0],[1.2,0.1]];P.arms=[[-0.7,0.3,0.7],[0.9,0.4,0.3]];P.ground=true;}
 else if(n==='s2'){P.pitch=-1.22;P.legs=[[1.05,1.45],[1.5,0.0]];P.arms=[[-1.2,0.1,0.5],[1.0,0.4,0.3]];P.ground=true;}
 else if(n==='dL1'||n==='dR1'){P.roll=n==='dL1'?0.75:-0.75;P.legs=[[0.0,0.2],[-0.25,0.55]];P.arms=[[2.4,0.1,0.3],[2.4,0.1,0.3]];P.ground=true;P.lean=0.05;}
 else if(n==='dL2'||n==='dR2'){P.roll=n==='dL2'?1.48:-1.48;P.legs=[[0.1,0.05],[-0.18,0.12]];P.arms=[[3.05,0.0,0.12],[3.05,0.0,0.12]];P.ground=true;P.lean=0;}
 else if(n==='fall'){P.pitch=-1.52;P.legs=[[0.3,0.5],[0.1,0.2]];P.arms=[[0.4,0.4,0.6],[0.2,0.4,0.6]];P.ground=true;P.lean=0;}
 else if(n==='celeUp'){P.arms=[[2.8,0.2,0.35],[2.8,0.2,0.35]];P.legs=[[0.25,0.7],[-0.1,0.25]];P.lift=0.12;P.lean=-0.06;}
 else if(n==='plane'){P.arms=[[0.15,0,1.45],[0.15,0,1.45]];P.legs=[[0.6,0.5],[-0.6,0.9]];P.lean=0.28;P.roll=0.22;}
 else if(n==='knee'){P.legs=[[0.05,1.62],[0.12,1.62]];P.arms=[[1.9,0.3,0.75],[1.9,0.3,0.75]];P.lean=-0.32;P.ground=true;}
 else if(n==='point'){P.arms=[[3.1,0.0,0.15],[0.2,0.5,0.25]];P.legs=[[0.1,0.2],[-0.1,0.2]];P.lean=-0.12;}
 return P;}
function joints(P){const J={},pz=0.95+P.lift,ln=P.lean;J.P=[0,0,pz];J.C=[Math.sin(ln)*0.5,0,pz+Math.cos(ln)*0.5];J.N=[J.C[0]+Math.sin(ln)*0.07,0,J.C[2]+0.08];J.Hd=[J.C[0]+Math.sin(ln)*0.22,0,J.C[2]+0.22];
 for(const s of[1,-1]){const Lg=P.legs[s>0?0:1],H=[0,s*0.115,pz-0.03],a=Lg[0],a2=Lg[0]-Lg[1];const K=[H[0]+Math.sin(a)*0.46,H[1],H[2]-Math.cos(a)*0.46],A=[K[0]+Math.sin(a2)*0.44,K[1],K[2]-Math.cos(a2)*0.44],T=[A[0]+0.2*Math.cos(a2),A[1],A[2]+0.2*Math.sin(a2)];
  const Ar=P.arms[s>0?0:1],b=Ar[0],b2=Ar[0]+Ar[1],c=Ar[2];const S=[J.C[0]-Math.sin(ln)*0.05,s*0.215,J.C[2]-0.05];const E=[S[0]+0.28*Math.sin(b)*Math.cos(c),S[1]+s*0.28*Math.sin(c),S[2]-0.28*Math.cos(b)*Math.cos(c)];const Hn=[E[0]+0.26*Math.sin(b2)*Math.cos(c),E[1]+s*0.26*Math.sin(c),E[2]-0.26*Math.cos(b2)*Math.cos(c)];
  J['H'+s]=H;J['K'+s]=K;J['A'+s]=A;J['T'+s]=T;J['S'+s]=S;J['E'+s]=E;J['W'+s]=Hn;}
 const z0=0.5,ks=Object.keys(J);
 if(P.pitch){const c=Math.cos(P.pitch),s=Math.sin(P.pitch);for(const k of ks){const[x,y,z]=J[k];J[k]=[x*c+(z-z0)*s,y,z0+(z-z0)*c-x*s];}}
 if(P.roll){const c=Math.cos(P.roll),s=Math.sin(P.roll);for(const k of ks){const[x,y,z]=J[k];J[k]=[x,y*c+(z-z0)*s,z0+(z-z0)*c-y*s];}}
 if(P.ground){let mz=9;for(const k of ks)mz=Math.min(mz,J[k][2]);for(const k of ks)J[k][2]+=0.09-mz;}
 return J;}
function buildSheet(kit,skin,gk){const res=SPRES;const[shirt,shorts,socks]=kit;const boot='#161616',glove=gk||null;const ce=Math.cos(CAM_E),se=Math.sin(CAM_E);
 const trim=colD(shirt,shorts)>90?shorts:mixC(shirt,colD(shirt,'#000000')>300?'b':'w',0.45);const band=colD(socks,shirt)>90?shirt:mixC(socks,'w',0.6);
 const cells=[];const L=(a,b,t)=>[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t];
 for(const d of DUNI){const f=d*PI/4,cf=Math.cos(f),sf=Math.sin(f);
  for(let fi=0;fi<FRN.length;fi++){const J=joints(poseOf(FRN[fi]));
   const pr=v=>{const wx=v[0]*cf+v[1]*sf,wy=v[0]*sf-v[1]*cf;return[wx*res,(-v[2]*ce+wy*se)*res,wy*ce+v[2]*se];};
   const parts=[];const cap=(a,b,r,col,bias,sh)=>parts.push([pr(a),pr(b),r*res,col,bias||0,sh==null?1:sh]);
   for(const s of[1,-1]){const H=J['H'+s],K=J['K'+s],A=J['A'+s],T=J['T'+s],S=J['S'+s],E=J['E'+s],Wr=J['W'+s];
    cap(H,L(H,K,0.42),0.118,shorts);cap(L(H,K,0.4),L(H,K,0.43),0.122,mixC(shorts,'b',0.3),0.004,0);cap(L(H,K,0.38),K,0.088,skin);cap(K,L(K,A,0.2),0.08,socks);cap(K,L(K,A,0.06),0.084,band,0.004,0);cap(L(K,A,0.18),A,0.072,socks);cap(A,T,0.066,boot,0.01);cap(L(A,T,0.55),T,0.04,'#e8e8e8',0.02,0);
    cap(S,L(S,E,0.6),0.085,shirt,0.02);cap(L(S,E,0.55),L(S,E,0.62),0.088,gk?mixC(shirt,'b',0.3):trim,0.022,0);cap(L(S,E,0.6),E,0.066,glove||skin,0.02);cap(E,Wr,0.06,glove||skin,0.03);cap(Wr,Wr,glove?0.085:0.062,glove?mixC(glove,'w',0.35):skin,0.035);}
   const P=J.P,C=J.C;const tl=[P[0],0.085,P[2]+0.12],tr=[P[0],-0.085,P[2]+0.12],cl=[C[0],0.1,C[2]-0.02],cr=[C[0],-0.1,C[2]-0.02];
   cap(tl,cl,0.15,shirt,0);cap(tr,cr,0.15,shirt,0);cap(J.S1,J['S-1'],0.11,shirt,0);cap([P[0],0.08,P[2]-0.02],[P[0],-0.08,P[2]-0.02],0.135,shorts,0);cap(C,J.N,0.065,skin,-0.01);cap(L(C,J.N,0.15),L(C,J.N,0.25),0.075,trim,0.005,0);
   for(const q of parts)q.dep=(q[0][2]+q[1][2])/2+q[4];parts.sort((a,b)=>a.dep-b.dep);
   let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;const hd=pr(J.Hd);for(const q of parts)for(const v of[q[0],q[1]]){x0=Math.min(x0,v[0]-q[2]-3);x1=Math.max(x1,v[0]+q[2]+3);y0=Math.min(y0,v[1]-q[2]-3);y1=Math.max(y1,v[1]+q[2]+3);}
   const ch2=pr(L(P,C,0.62));cells.push({d,fi,parts,x0:Math.floor(x0),y0:Math.floor(y0),w:Math.ceil(x1-x0)+1,h:Math.ceil(y1-y0)+1,hd,ch2,fwd:sf});}}
 // shelf-pack into one atlas
 const AW=1536;let x=0,y=0,rh=0;for(const c of cells){if(x+c.w>AW){x=0;y+=rh+1;rh=0;}c.ax=x;c.ay=y;x+=c.w+1;rh=Math.max(rh,c.h);}
 const cv2=document.createElement('canvas');cv2.width=AW;cv2.height=y+rh+1;const g=cv2.getContext('2d');g.lineCap='round';g.lineJoin='round';
 const meta={};
 for(const c of cells){const ox=c.ax-c.x0,oy=c.ay-c.y0;g.save();g.translate(ox,oy);
  g.strokeStyle='rgba(12,12,16,.92)';for(const q of c.parts){if(!q[5])continue;g.lineWidth=q[2]*2+Math.max(2,res*0.06);g.beginPath();g.moveTo(q[0][0],q[0][1]);g.lineTo(q[1][0]+0.01,q[1][1]);g.stroke();}
  for(const q of c.parts){const r=q[2],col=q[3];if(!q[5]){g.strokeStyle=col;g.lineWidth=r*2;g.beginPath();g.moveTo(q[0][0],q[0][1]);g.lineTo(q[1][0]+0.01,q[1][1]);g.stroke();continue;}
   g.strokeStyle=mixC(col,'b',0.34);g.lineWidth=r*2;g.beginPath();g.moveTo(q[0][0],q[0][1]);g.lineTo(q[1][0]+0.01,q[1][1]);g.stroke();
   g.strokeStyle=mixC(col,'b',0.12);g.lineWidth=r*1.7;g.beginPath();g.moveTo(q[0][0]-r*0.1,q[0][1]-r*0.12);g.lineTo(q[1][0]-r*0.1+0.01,q[1][1]-r*0.12);g.stroke();
   g.strokeStyle=col;g.lineWidth=r*1.35;g.beginPath();g.moveTo(q[0][0]-r*0.24,q[0][1]-r*0.26);g.lineTo(q[1][0]-r*0.24+0.01,q[1][1]-r*0.26);g.stroke();
   g.strokeStyle=mixC(col,'w',0.38);g.lineWidth=r*0.5;g.beginPath();g.moveTo(q[0][0]-r*0.48,q[0][1]-r*0.52);g.lineTo(q[1][0]-r*0.48+0.01,q[1][1]-r*0.52);g.stroke();}
  g.restore();meta[c.d*100+c.fi]={sx:c.ax,sy:c.ay,w:c.w,h:c.h,x0:c.x0/res,y0:c.y0/res,hx:c.hd[0]/res,hy:c.hd[1]/res,cx:c.ch2[0]/res,cy:c.ch2[1]/res,fwd:c.fwd};}
 return{cv:cv2,meta,res};}
function teamSheets(tm,T){const key=tm.kit.join()+'|'+SPRES+'|';const gkKit=[tm.gk,'#202428',tm.gk];
 const tones=new Set(tm.ps.filter(p=>p.role!=='GK').map(p=>p.sk));tm.sh=[];for(const i of tones)tm.sh[i]=SHEETS[key+i]||(SHEETS[key+i]=buildSheet(tm.kit,SKT[i],null));
 const gs=tm.ps.find(p=>p.role==='GK').sk;tm.gsh=SHEETS[tm.gk+SPRES+'g'+gs]||(SHEETS[tm.gk+SPRES+'g'+gs]=buildSheet(gkKit,SKT[gs],mixC(tm.gk,'w',0.5)));}
function refSheet(){return SHEETS['ref'+SPRES]||(SHEETS['ref'+SPRES]=buildSheet(['#1c1c1c','#1c1c1c','#1c1c1c'],SKT[0],null));}
function pickFrame(p){const st=p.st,sp=hyp(p.vx||0,p.vy||0);const cyc=n=>n+(((Math.floor(p.ph/(2*PI)*8)%8)+8)%8);
 if(st==='kick')return p.stt>0.16?'kick0':'kick1';if(st==='tackle')return'tackle';if(st==='slide')return p.stt>0.42?'s1':'s2';if(st==='fall'||st==='roll')return'fall';
 if(st==='dive'){const left=(p.ddir||1)*Math.cos(p.face)<0;return(left?'dL':'dR')+(p.stt<0.16?'1':'2');}
 if(st==='cele'){const c=p.cele;if(sp>1.2&&p.stt<1.6&&c!=='plane'&&c!=='knee')return cyc('r');
  if(c==='plane')return sp>0.5?'plane':'celeUp';if(c==='knee')return p.stt>1.0||sp<2?'knee':cyc('r');if(c==='worm')return'fall';if(c==='robot')return Math.floor(perfT*4)%2?'plane':'point';if(c==='point')return'point';return'celeUp';}
 if(sp>5.4)return cyc('r');if(sp>0.6)return cyc('j');return'idle';}
function drawMan(p){const isRef=p===M.ref,tm=isRef?null:M.t[p.T],gk=!isRef&&p.role==='GK';
 const S=isRef?refSheet():gk?tm.gsh:tm.sh[p.sk||0];if(!S)return;
 const k=KY(p.y)*1.45,X=SX(p.x,p.y),Y=SY(p.y,p.z||0);
 const d=((Math.round(p.face/(PI/4))%8)+8)%8,fn=pickFrame(p),fi=FI[fn];const m=S.meta[DSRC[d]*100+fi],fl=DFLIP[d]?-1:1,q=k/S.res;
 cx.save();if(p.st==='roll'){cx.translate(X,Y-0.3*k);cx.rotate(perfT*12*(p.fs||1));cx.translate(-X,-(Y-0.3*k));}
 if(p.st==='cele'&&p.cele==='flip'&&p.stt>1.8){const t=clamp((p.stt-1.8)/0.7,0,1);cx.translate(X,Y-0.9*k-Math.sin(t*PI)*0.8*k);cx.rotate(-t*PI*2);cx.translate(-X,-(Y-0.9*k));}
 const dy=Y+(m.y0+SPG*0)*k;
 if(fl<0){cx.save();cx.translate(X,0);cx.scale(-1,1);cx.drawImage(S.cv,m.sx,m.sy,m.w,m.h,m.x0*k,dy,m.w*q,m.h*q);cx.restore();}else cx.drawImage(S.cv,m.sx,m.sy,m.w,m.h,X+m.x0*k,dy,m.w*q,m.h*q);
 const hx=X+fl*m.hx*k,hy=Y+m.hy*k,tx=X+fl*m.cx*k,ty=Y+m.cy*k;const flat=fn[0]==='d'||fn==='fall'||fn[0]==='s';
 if(!isRef&&m.fwd<-0.35&&!flat){cx.font='bold '+Math.round(0.26*k)+'px Arial';cx.textAlign='center';cx.fillStyle=gk?'#111':colD(tm.kit[0],'#ffffff')<200?'#1a1a1a':'#ffffff';cx.fillText(String(p.num),tx,ty+0.09*k);}
 else if(!isRef&&!gk&&tm.pat&&!flat){cx.fillStyle=tm.p2;if(tm.pat==='stripes'){for(const o of[-0.09,0.02])cx.fillRect(tx+o*k,ty-0.2*k,0.06*k,0.38*k);}else{const u=0.075*k;for(let i=0;i<4;i++)for(let j=0;j<4;j++)if((i+j)%2)cx.fillRect(tx-2*u+i*u,ty-0.2*k+j*u,u,u);}}
 if(p.st==='cele'&&p.cele==='shirt'&&p.stt>0.8){cx.fillStyle=tm.kit[0];cx.strokeStyle='#111';cx.lineWidth=1;cx.beginPath();cx.ellipse(hx,hy-0.03*k,0.2*k,0.19*k,0,0,PI*2);cx.fill();cx.stroke();}
 else drawHead(p,hx,hy,k,d,isRef);
 cx.restore();}
function drawHead(p,X,Y,k,d,isRef){const r=0.155*k,f=d*PI/4,fx=Math.cos(f),fy=Math.sin(f);const skin=isRef?SKT[0]:SKT[p.sk||0],hc=isRef?'#2a2a2a':p.hc,h=isRef?'bowl':p.hair;
 const back=-fx;cx.lineWidth=Math.max(1,0.03*k);cx.strokeStyle='rgba(12,12,16,.9)';
 // hair behind head
 cx.fillStyle=hc;if(h==='mullet'&&fy<0.6){cx.beginPath();cx.ellipse(X+back*r*0.55,Y+r*0.75,r*0.62,r*0.95,0,0,PI*2);cx.fill();cx.stroke();}
 if(h==='afro'){cx.beginPath();cx.arc(X-fx*r*0.15,Y-r*0.3,r*1.35,0,PI*2);cx.fill();cx.stroke();}
 cx.fillStyle=skin;cx.beginPath();cx.arc(X,Y,r,0,PI*2);cx.fill();cx.stroke();cx.fillStyle='rgba(255,255,255,.22)';cx.beginPath();cx.arc(X-r*0.3,Y-r*0.35,r*0.4,0,PI*2);cx.fill();
 const away=fy<-0.5;
 if(!away){const ex=fy>0.5?[-0.38,0.38]:[fx*0.5];cx.fillStyle='#141414';for(const e of ex)cx.fillRect(X+e*r-r*0.1,Y-r*0.12,r*0.2,r*0.24);if(p.tache){cx.fillStyle=hc;cx.fillRect(X+(fy>0.5?-0.35:fx*0.35-0.2)*r,Y+r*0.32,r*(fy>0.5?0.7:0.5),r*0.16);}
  if(Math.abs(fx)>0.5){cx.fillStyle=mixC(skin,'b',0.2);cx.fillRect(X+fx*r*0.85-r*0.1,Y,r*0.22,r*0.15);}}
 cx.fillStyle=hc;cx.beginPath();
 if(h==='bald'){if(away){}}
 else if(h==='spiky'){for(let i=0;i<6;i++){const a=PI*1.05+i*PI/6.5;cx.moveTo(X+Math.cos(a)*r*0.85,Y+Math.sin(a)*r*0.85);cx.lineTo(X+Math.cos(a+0.15)*r*1.45,Y+Math.sin(a+0.15)*r*1.45);cx.lineTo(X+Math.cos(a+0.35)*r*0.85,Y+Math.sin(a+0.35)*r*0.85);}cx.fill();cx.beginPath();cx.arc(X,Y,r*1.0,PI*1.05,PI*1.95);cx.fill();}
 else if(h==='curly'){for(let i=0;i<7;i++){const a=PI*0.95+i*PI/6;cx.moveTo(X+Math.cos(a)*r,Y+Math.sin(a)*r);cx.arc(X+Math.cos(a)*r*0.9,Y+Math.sin(a)*r*0.9,r*0.32,0,PI*2);}cx.fill();}
 else if(h!=='afro'){cx.arc(X+back*r*0.08,Y-r*0.08,r*1.04,away?PI*0.82:PI*1.0+(fx>0.5?0.35:0),away?PI*2.18:PI*2.0-(fx<-0.5?0.35:0));cx.closePath();cx.fill();cx.stroke();}
 if(away&&h!=='bald'&&h!=='afro'){cx.beginPath();cx.arc(X,Y,r*0.98,0,PI*2);cx.fill();}}
/* ---------- scoring, high scores, leaderboard hook ---------- */
const SALT='mc94-'+(0x5f3759df).toString(36);let RUN=null;
function matchScore(m){const T=m.human,gf=m.t[T].score,ga=m.t[1-T].score;const win=gf>ga||(gf===ga&&m.coin===T),draw=gf===ga&&m.coin===undefined;const cnt=k=>m.evs.filter(e=>e[0]===k).length;const lines=[];
 const add=(l,v)=>{if(v)lines.push([l,v]);};add(win?'WIN':draw?'DRAW':'DEFEAT',win?1000:draw?400:0);if(!win&&!draw)lines.push(['DEFEAT',0]);
 add('GOALS x'+cnt('goal'),cnt('goal')*150);add('CONCEDED x'+cnt('conceded'),-cnt('conceded')*100);
 for(const k of['header','volley','long','chip','team','golden'])add(EV[k][0]+' x'+cnt(k),cnt(k)*EV[k][1]);
 if(ga===0)add('CLEAN SHEET',300);if(gf-ga>=3)add('THRASHING (+3 GD)',200);if(win&&m.trail)add('COMEBACK',300);
 add('TACKLES x'+cnt('tackle'),Math.min(500,cnt('tackle')*25));add('FOULS x'+cnt('foul'),-cnt('foul')*25);add('YELLOW x'+cnt('yellow'),-cnt('yellow')*100);add('RED x'+cnt('red'),-cnt('red')*300);
 const sub=Math.max(0,lines.reduce((a,l)=>a+l[1],0));const dm=DIFF[m.di].mul,rm=RUN&&RUN.mode==='cup'?1+0.2*m.round:1;let total=Math.round(sub*dm*rm);
 let champ=0;if(RUN&&RUN.mode==='cup'&&m.round===6&&win){champ=Math.round(3000*dm);}
 return{lines,sub,dm,rm,total:total+champ,champ,win,draw,gf,ga};}
function runAdd(pts,m){const k=RUN.k;const cur=(RUN.v^k)>>>0;if(h53(cur+':'+k+':'+RUN.log.join('|'),3)!==RUN.h){RUN.bad=1;}const nv=cur+pts;RUN.log.push(m.t[m.human].d.id+'-'+m.t[1-m.human].d.id+':'+m.t[0].score+'-'+m.t[1].score+':'+pts+':'+m.evs.length);RUN.v=(nv^k)>>>0;RUN.h=h53(nv+':'+k+':'+RUN.log.join('|'),3);}
function runTotal(){return(RUN.v^RUN.k)>>>0;}
function newRun(mode,team){const k=(R()*0x7fffffff)|0;RUN={mode,team,diff:cfg.diff,round:0,log:[],k,v:k,h:'',opps:[],over:false,bad:0,champ:false};RUN.h=h53('0:'+k+':',3);
 if(mode==='cup'){const pool=TEAMS.filter(t=>t!==team).sort((a,b)=>a.str-b.str+(R()-.5)*2.5);RUN.opps=pool.slice(pool.length-7);RUN.opps.sort((a,b)=>a.str-b.str);}}
function hsLoad(){try{const o=JSON.parse(localStorage.getItem('mc94_hs')||'[]');return o.filter(e=>e.g===h53([e.n,e.s,e.t,e.d,e.m,e.ts].join('|')+SALT)).sort((a,b)=>b.s-a.s).slice(0,10);}catch(e){return[];}}
function hsSave(n,s){if(TEST&&!/[?&]hs=1/.test(location.search))return;const l=hsLoad();const e={n,s,t:RUN.team.id,d:RUN.diff,m:RUN.mode,ts:Date.now()};e.g=h53([e.n,e.s,e.t,e.d,e.m,e.ts].join('|')+SALT);l.push(e);l.sort((a,b)=>b.s-a.s);try{localStorage.setItem('mc94_hs',JSON.stringify(l.slice(0,10)));}catch(_){}}
function finishRun(){RUN.over=true;const s=runTotal();const detail={game:'mullet-cup-94',score:s,mode:RUN.mode,difficulty:DIFF[RUN.diff].n,team:RUN.team.n,matches:RUN.log.length,log:RUN.log.slice(),valid:!RUN.bad,sig:h53(s+'|'+RUN.log.join('|')+SALT)};
 if(!RUN.bad&&!TEST){try{if(typeof window.submitScore==='function')window.submitScore(s,detail);}catch(e){}try{window.dispatchEvent(new CustomEvent('gamescore',{detail}));}catch(e){}try{if(window.parent&&window.parent!==window)window.parent.postMessage({type:'game-score',...detail},'*');}catch(e){}}
 window.__lastScore=TEST?detail:undefined;
 const l=hsLoad();if(!RUN.bad&&s>0&&(l.length<10||s>l[l.length-1].s)){ini={c:[0,0,0],i:0};go('initials');}else go('scores');}
/* ---------- screens ---------- */
let scr='title',paused=false,perfT=0,UIL=[],focus=0,cols=1,ini=null,res=null;
const cfg={diff:1,len:1,team:0,opp:-1,mode:'quick'};try{Object.assign(cfg,JSON.parse(localStorage.getItem('mc94_cfg')||'{}'));}catch(e){}
if(TEST){const dm=location.search.match(/diff=(\d)/);if(dm)cfg.diff=+dm[1];}cfg.diff=clamp(cfg.diff|0,0,3);
function saveCfg(){try{localStorage.setItem('mc94_cfg',JSON.stringify({diff:cfg.diff,len:cfg.len,team:cfg.team}));}catch(e){}}
function go(s){scr=s;focus=0;paused=false;$('pz').style.display=s==='play'?'block':'none';if(s==='title')startDemo();}
function startDemo(){const a=(R()*16)|0;let b=(R()*16)|0;if(b===a)b=(a+5)%16;M=newMatch(TEAMS[a],TEAMS[b],{human:-1,len:99999,diff:1,seed:1});M.all=M.t[0].ps.concat(M.t[1].ps);for(const p of M.all){p.x=L/2;p.y=CY;}setPiece('kickoff',0,L/2,CY);}
function startMatch(){const team=RUN.team;const opp=RUN.mode==='cup'?RUN.opps[RUN.round]:TEAMS[cfg.opp];
 M=newMatch(team,opp,{human:0,len:LEN[cfg.len].s,diff:RUN.diff,knockout:RUN.mode==='cup'&&RUN.round>=3,round:RUN.round,seed:(R()*1e6)|0});M.all=M.t[0].ps.concat(M.t[1].ps);M.phase='intro';M.pt=0;crowd(0.4);go('play');}
function onHalfTime(){M.htT=0;}
function onFullTime(){M.ftT=0;res=matchScore(M);}
function uiBtn(label,x,y,w,h,fn,o){o=o||{};const i=UIL.length;UIL.push({x,y,w,h,fn,nf:o.nf});const f=!o.nf&&i===focus;
 cx.fillStyle=o.bg||(f?'#ffe14a':'rgba(10,16,40,.85)');cx.fillRect(x,y,w,h);cx.strokeStyle=f?'#fff':'#ffe14a';cx.lineWidth=2;cx.strokeRect(x+1,y+1,w-2,h-2);
 if(o.flag){drawFlag(o.flag,x+8,y+(h-o.fh)/2,o.fh*1.5,o.fh);}
 cx.fillStyle=f&&!o.bg?'#111':'#fff';cx.font=(o.font||'bold 18px')+' Impact,Arial Black,Arial,sans-serif';cx.textAlign=o.flag?'left':'center';cx.textBaseline='middle';cx.fillText(label,o.flag?x+16+o.fh*1.5:x+w/2,y+h/2+1);cx.textBaseline='alphabetic';}
function uiClick(x,y){for(let i=UIL.length-1;i>=0;i--){const b=UIL[i];if(x>=b.x&&x<=b.x+b.w&&y>=b.y&&y<=b.y+b.h){SND.sel();b.fn();return;}}
 if(scr==='play'&&M&&(M.phase==='intro'||M.phase==='replay'))M.skip=1;}
function uiNav(){const n=inp.nav,N=UIL.filter(b=>!b.nf).length;if(!N)return;
 if(n.u){focus=((focus-cols*n.u)%N+N*8)%N;SND.blip();}if(n.d){focus=(focus+cols*n.d)%N;SND.blip();}if(cols>1){if(n.l){focus=((focus-n.l)%N+N)%N;SND.blip();}if(n.r){focus=(focus+n.r)%N;SND.blip();}}
 if(n.ok){const b=UIL.filter(b=>!b.nf)[Math.min(focus,N-1)];if(b){SND.sel();b.fn();}}}
function panel(x,y,w,h){cx.fillStyle='rgba(6,10,28,.88)';cx.fillRect(x,y,w,h);cx.strokeStyle='#ffe14a';cx.lineWidth=3;cx.strokeRect(x,y,w,h);cx.fillStyle='rgba(255,255,255,.04)';for(let i=y;i<y+h;i+=4)cx.fillRect(x,i,w,1);}
function txt(s,x,y,size,col,al,font){cx.font=(font||'bold')+' '+size+'px Impact,Arial Black,Arial,sans-serif';cx.textAlign=al||'center';cx.lineWidth=Math.max(2,size/7);cx.strokeStyle='#000';cx.strokeText(s,x,y);cx.fillStyle=col||'#fff';cx.fillText(s,x,y);}
function logo(x,y,s){cx.save();cx.translate(x,y);cx.scale(s,s);cx.transform(1,0,-0.18,1,0,0);cx.font='bold 76px Impact,Arial Black,sans-serif';cx.textAlign='center';
 const g=cx.createLinearGradient(0,-70,0,6);g.addColorStop(0,'#fff6a0');g.addColorStop(0.5,'#ffc400');g.addColorStop(1,'#ff5a00');cx.lineWidth=12;cx.strokeStyle='#000';cx.strokeText('MULLET CUP',0,0);cx.lineWidth=5;cx.strokeStyle='#7a1a00';cx.strokeText('MULLET CUP',0,0);cx.fillStyle=g;cx.fillText('MULLET CUP',0,0);
 cx.restore();cx.save();cx.translate(x+s*215,y-s*62);cx.rotate(0.18);cx.fillStyle='#e0102a';cx.fillRect(-38*s,-22*s,76*s,44*s);cx.strokeStyle='#fff';cx.lineWidth=3;cx.strokeRect(-38*s,-22*s,76*s,44*s);txt("'94",0,13*s,36*s,'#fff');cx.restore();}
function drawTitle(){drawWorld();cx.fillStyle='rgba(4,8,22,.55)';cx.fillRect(0,0,VW,VH);UIL=[];cols=1;const cxm=VW/2;let y=Math.max(40,VH/2-200);
 logo(cxm,y+70,Math.min(1,VW/700));txt('SIDE-ON FOOTBALL MAYHEM  •  16 NATIONS  •  ZERO DIGNITY',cxm,y+102,15,'#9fe0ff');
 const bw=280,bh=40,bx=cxm-bw/2;let by=y+125;
 uiBtn('QUICK MATCH',bx,by,bw,bh,()=>{cfg.mode='quick';ts={stage:0};go('teams');});by+=bh+8;
 uiBtn('MULLET CUP RUN',bx,by,bw,bh,()=>{cfg.mode='cup';ts={stage:0};go('teams');});by+=bh+8;
 uiBtn('DIFFICULTY: '+DIFF[cfg.diff].n,bx,by,bw,bh,()=>{cfg.diff=(cfg.diff+1)%4;saveCfg();});by+=bh+8;
 uiBtn('MATCH LENGTH: '+LEN[cfg.len].n,bx,by,bw,bh,()=>{cfg.len=(cfg.len+1)%3;saveCfg();});by+=bh+8;
 uiBtn('HIGH SCORES',bx,by,bw/2-4,bh,()=>go('scores'),{font:'bold 16px'});uiBtn('HOW TO PLAY',bx+bw/2+4,by,bw/2-4,bh,()=>go('howto'),{font:'bold 16px'});
 if(usingTouch&&innerHeight>innerWidth)txt('Turn your phone sideways for the full stadium',cxm,VH-20,14,'#ffe14a');
 txt('Fan-made parody football. Made-up players, original music. No real crests.',cxm,VH-(usingTouch&&innerHeight>innerWidth?44:16),11,'#8aa');}
let ts={stage:0};
function drawTeams(){drawWorld();cx.fillStyle='rgba(4,8,22,.78)';cx.fillRect(0,0,VW,VH);UIL=[];cols=4;const st=ts.stage;
 txt(st===0?'PICK YOUR NATION':'PICK YOUR OPPONENT',VW/2,PY+46,30,'#ffe14a');txt(cfg.mode==='cup'?'MULLET CUP RUN: 7 matches, one defeat and you go home. Points pile up.':'QUICK MATCH  •  '+DIFF[cfg.diff].n+'  •  '+LEN[cfg.len].n,VW/2,PY+70,13,'#9fe0ff');
 const cw=Math.min(210,(VW-60)/4-10),ch=46,gx=VW/2-(cw*4+30)/2,gy=PY+86;
 TEAMS.forEach((t,i)=>{const x=gx+(i%4)*(cw+10),y=gy+Math.floor(i/4)*(ch+9);const dis=st===1&&i===cfg.team;
  uiBtn(t.n.toUpperCase(),x,y,cw,ch,()=>{if(dis)return;if(st===0){cfg.team=i;saveCfg();if(cfg.mode==='cup'){newRun('cup',TEAMS[i]);startMatch();}else{ts.stage=1;focus=(i+1)%16;}}else{cfg.opp=i;newRun('quick',TEAMS[cfg.team]);startMatch();}},{flag:t,fh:22,font:'bold 15px',bg:dis?'#333':undefined});
  const f=i===focus;const stars='★'.repeat(Math.round(t.str/4))+'☆'.repeat(5-Math.round(t.str/4));cx.font='11px Arial';cx.textAlign='right';cx.fillStyle=f?'#111':'#ffe14a';cx.fillText(stars,x+cw-6,y+ch-6);});
 uiBtn('BACK',VW/2-70,gy+4*(ch+9)+6,140,34,()=>{if(ts.stage===1)ts.stage=0;else go('title');},{font:'bold 15px'});}
function drawHow(){drawWorld();cx.fillStyle='rgba(4,8,22,.85)';cx.fillRect(0,0,VW,VH);UIL=[];cols=1;const x=VW/2;let y=PY+50;
 txt('HOW TO PLAY',x,y,30,'#ffe14a');y+=34;const L2=[['PHONE','Left thumb: joystick (anywhere on the left).  Right: PASS/TACKLE and SHOOT/SLIDE.'],['','Tap PASS = pass  •  hold a bit = through ball  •  hold long = lob.  Hold SHOOT for power.'],['KEYBOARD','Arrows/WASD move  •  X or J = pass/tackle  •  C, K or Space = shoot/slide  •  V or L = lob  •  P/Esc pause'],['GAMEPAD','Stick move  •  A pass/tackle  •  X/B shoot/slide  •  Y lob  •  Start pause'],['TIPS','Without the ball, PASS switches player (or tackles if close). Pull back while shooting = chip.'],['','Hold SHOOT as a high ball arrives = volley or header. Over-hit shots fly into Row Z.'],['SCORE','Win 1000 • Draw 400 • Goal +150 • Conceded -100 • Header +200 • Volley/Long shot +250 • Chip +300'],['','Team goal (4+ passes) +200 • Clean sheet +300 • Comeback +300 • Tackle +25 • Foul -25 • Yellow -100 • Red -300'],['','x Difficulty (1 / 1.25 / 1.5 / 2.25)  x Cup round (1.0 to 2.2)  •  Win the Cup: +3000 x difficulty']];
 for(const[a,b]of L2){cx.textAlign='left';cx.font='bold 13px Arial';cx.fillStyle='#ffe14a';cx.fillText(a,Math.max(20,x-430),y);cx.fillStyle='#fff';cx.font='13px Arial';cx.fillText(b,Math.max(20,x-430)+90,y);y+=24;}
 uiBtn('BACK',x-70,y+10,140,36,()=>go('title'));}
function drawScores(){drawWorld();cx.fillStyle='rgba(4,8,22,.85)';cx.fillRect(0,0,VW,VH);UIL=[];cols=1;const x=VW/2;let y=PY+56;txt('HALL OF MULLETS',x,y,32,'#ffe14a');y+=36;const l=hsLoad();
 if(!l.length)txt('No scores yet. Be the first legend.',x,y+30,16,'#fff');
 l.forEach((e,i)=>{const t=TEAMS.find(t=>t.id===e.t);cx.font='bold 17px Courier New,monospace';cx.textAlign='left';cx.fillStyle=i===0?'#ffe14a':'#fff';cx.fillText(String(i+1).padStart(2,' ')+'. '+e.n,x-200,y);if(t)drawFlag(t,x-70,y-13,22,15);cx.fillText(e.t+' '+(e.m==='cup'?'CUP ':'QUICK')+' '+DIFF[e.d].n.slice(0,3),x-40,y);cx.textAlign='right';cx.fillText(String(e.s).padStart(7,'0'),x+200,y);y+=25;});
 if(RUN&&RUN.over){txt('YOUR RUN: '+runTotal(),x,y+18,20,'#9fe0ff');y+=10;}
 uiBtn('BACK TO TITLE',x-100,Math.max(y+30,PY+380),200,38,()=>go('title'));}
const ABC='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
function drawInitials(){drawWorld();cx.fillStyle='rgba(4,8,22,.85)';cx.fillRect(0,0,VW,VH);UIL=[];cols=1;const x=VW/2,y=PY+120;txt('NEW HIGH SCORE!',x,y-50,34,'#ffe14a');txt(String(runTotal()).padStart(7,'0'),x,y-14,26,'#fff');
 ini.t=(ini.t||0)+1/60;const n=ini.t>0.35?inp.nav:{};if(n.u)ini.c[ini.i]=(ini.c[ini.i]+1)%36;if(n.d)ini.c[ini.i]=(ini.c[ini.i]+35)%36;if(n.l)ini.i=(ini.i+2)%3;if(n.r)ini.i=(ini.i+1)%3;
 for(let i=0;i<3;i++){const bx=x-110+i*80;uiBtn('▲',bx,y+10,60,34,()=>{ini.c[i]=(ini.c[i]+1)%36;ini.i=i;},{nf:1});panel(bx,y+50,60,62);txt(ABC[ini.c[i]],bx+30,y+96,44,i===ini.i?'#ffe14a':'#fff');uiBtn('▼',bx,y+118,60,34,()=>{ini.c[i]=(ini.c[i]+35)%36;ini.i=i;},{nf:1});}
 const ok=()=>{hsSave(ini.c.map(c=>ABC[c]).join(''),runTotal());go('scores');};uiBtn('OK',x+140,y+60,70,50,ok,{nf:1});if(n.ok)ok();}
/* ---------- HUD ---------- */
function hud(){const m=M,t0=m.t[0],t1=m.t[1];
 // scoreboard
 const x=10,y=PY>0?PY-40:10;cx.fillStyle='rgba(8,14,40,.9)';cx.fillRect(x,y,262,30);cx.fillStyle='#ffe14a';cx.fillRect(x,y+30,262,3);drawFlag(t0.d,x+6,y+7,24,16);drawFlag(t1.d,x+148,y+7,24,16);
 cx.font='bold 17px Impact,Arial Black,sans-serif';cx.textAlign='left';cx.fillStyle='#fff';cx.fillText(t0.d.id,x+34,y+22);cx.fillText(t1.d.id,x+176,y+22);cx.fillStyle='#ffe14a';cx.textAlign='center';cx.fillText(t0.score+' - '+t1.score,x+109,y+22);
 const half=m.half,gm=Math.min(m.clock/m.halfLen,1)*45,base=half===2?45:half===3?90:0;let mm=Math.floor(gm)+base,ss=Math.floor((gm%1)*60);const tstr=(half===3?'GG ':'')+String(mm).padStart(2,'0')+':'+String(ss).padStart(2,'0');
 cx.fillStyle='#c8102e';cx.fillRect(x+212,y,50,30);cx.fillStyle='#fff';cx.font='bold 14px Impact,Arial Black,sans-serif';cx.fillText(tstr,x+237,y+21);
 // score
 if(m.human>=0&&RUN){const live=runTotal()+(m.phase==='ft'?0:Math.round(Math.max(0,liveRaw())*DIFF[m.di].mul*(RUN.mode==='cup'?1+0.2*m.round:1)));const sx=VW-112/(innerWidth/VW)+2;cx.fillStyle='rgba(8,14,40,.9)';cx.fillRect(sx-150,y,140,30);cx.fillStyle='#ffe14a';cx.fillRect(sx-150,y+30,140,3);cx.font='bold 11px Arial';cx.fillStyle='#9fe0ff';cx.textAlign='left';cx.fillText(RUN.mode==='cup'?ROUNDS[m.round]:'SCORE',sx-144,y+12);cx.font='bold 16px Courier New,monospace';cx.fillStyle='#fff';cx.fillText(String(live).padStart(7,'0'),sx-144,y+27);}
 // radar
 if(VW<820&&usingTouch&&innerHeight>innerWidth)txt('Turn your phone sideways for the big-screen view',VW/2,PY-70,15,'#ffe14a');
 const rw=150,rh=rw*W/L,rx=VW/2-rw/2,ry=VW<820&&PY>0?PY+548:VH-rh-10;cx.fillStyle='rgba(6,30,12,.72)';cx.fillRect(rx,ry,rw,rh);cx.strokeStyle='rgba(255,255,255,.5)';cx.lineWidth=1;cx.strokeRect(rx,ry,rw,rh);cx.beginPath();cx.moveTo(rx+rw/2,ry);cx.lineTo(rx+rw/2,ry+rh);cx.stroke();
 for(const tm of m.t)for(const p of tm.ps){if(!act(p))continue;cx.fillStyle=p===m.ctl?'#fff':tm.kit[0];cx.fillRect(rx+p.x/L*rw-2.5,ry+p.y/W*rh-2.5,5,5);}cx.fillStyle='#fff';cx.beginPath();cx.arc(rx+m.ball.x/L*rw,ry+m.ball.y/W*rh,2,0,PI*2);cx.fill();
 // commentary
 if(m.say.length){const s=m.say[0],n=Math.min(s.length,Math.floor(m.sayT*45));const top=VW-620>=330;const cw=top?Math.min(560,VW-620):Math.min(600,VW-40),bx=VW/2-cw/2,by=top?y:(PY>0?PY+548+rh+8:VH-rh-60);cx.fillStyle='rgba(6,10,28,.82)';cx.fillRect(bx,by,cw,34);cx.fillStyle='#ffe14a';cx.fillRect(bx,by,5,34);
  cx.font='bold 10px Arial';cx.textAlign='left';cx.fillStyle='#ffe14a';cx.fillText('COMMENTARY',bx+12,by+11);cx.font='14px Arial';cx.fillStyle='#fff';fitText(s.slice(0,n),bx+12,by+27,cw-20);}
 // controlled player panel (desktop)
 if(m.human>=0&&!usingTouch&&m.ctl&&act(m.ctl)&&(m.phase==='live'||m.phase==='set')){const p=m.ctl,px=12,py=VH-44;cx.fillStyle='rgba(8,14,40,.9)';cx.fillRect(px,py,200,32);cx.fillStyle=m.t[0].kit[0];cx.fillRect(px,py,30,32);txt(String(p.num),px+15,py+23,18,'#fff');cx.font='bold 14px Arial';cx.textAlign='left';cx.fillStyle='#fff';cx.fillText(p.name.toUpperCase(),px+38,py+15);cx.font='10px Arial';cx.fillStyle='#9fe0ff';cx.fillText({GK:'GOALKEEPER',DF:'DEFENDER',MF:'MIDFIELDER',FW:'FORWARD'}[p.role]+(p.yel?'  •  BOOKED':''),px+38,py+27);}
 // popups
 let si=0;for(const pp of m.pops){if(pp.big){const t=pp.t,sc=t<0.25?t/0.25*1.3:t<0.4?1.3-(t-0.25):1.15;cx.save();cx.translate(VW/2,PY+230);cx.scale(sc,sc);cx.rotate(-0.06);txt(pp.text,0,0,64,pp.col);cx.restore();}else{txt(pp.text,VW-120,y+60+si*24-pp.t*14,18,pp.col);si++;}}
 if(m.phase==='replay'){cx.fillStyle='#000';cx.fillRect(0,0,VW,PY+36);cx.fillRect(0,VH-36,VW,36);if(Math.sin(perfT*6)>-0.3){cx.fillStyle='#c8102e';cx.fillRect(16,PY+46,110,30);txt('REPLAY',71,PY+69,22,'#fff');}txt(usingTouch?'TAP TO SKIP':'PRESS A / X TO SKIP',VW-100,VH-12,13,'#ccc');cx.fillStyle='rgba(255,255,255,.04)';for(let i=0;i<VH;i+=3)cx.fillRect(0,i,VW,1);}
 if(m.phase==='set'&&m.sp&&m.sp.T===m.human&&m.sp.t>0.9){const t={kickoff:'KICK-OFF',throw:'THROW-IN',corner:'CORNER',goalkick:'GOAL KICK',freekick:'FREE KICK',penalty:'PENALTY'}[m.sp.type];txt(t+(m.sp.type==='penalty'?' — aim with stick, hold SHOOT':' — PASS or SHOOT'),VW/2,PY+130,16,'#ffe14a');}
 if(m.phase==='intro')introOverlay();
 if(m.human>=0&&usingTouch&&(m.phase==='live'||m.phase==='set'))touchPads();}
function liveRaw(){const s=matchScoreLive();return s;}
function matchScoreLive(){let v=0;for(const e of M.evs)v+=EV[e[0]][1];return v;}
function fitText(s,x,y,w){let f=14;cx.font=f+'px Arial';while(cx.measureText(s).width>w&&f>9){f--;cx.font=f+'px Arial';}cx.fillText(s,x,y);}
function introOverlay(){const t=M.pt,a=M.t[0].d,b=M.t[1].d;const y=PY+70;panel(VW/2-300,y,600,96);drawFlag(a,VW/2-286,y+20,60,40);drawFlag(b,VW/2+226,y+20,60,40);txt(a.n.toUpperCase(),VW/2-130,y+50,30);txt('vs',VW/2,y+50,20,'#ffe14a');txt(b.n.toUpperCase(),VW/2+130,y+50,30);
 txt((RUN&&RUN.mode==='cup'?ROUNDS[M.round]+'  •  ':'')+'Referee: '+M.refName,VW/2,y+80,13,'#9fe0ff','center','normal');
 if(t>3.2&&t<7)txt('♪ National anthem of '+a.n+' (unofficial jingle)',VW/2,y+120,15,'#fff');if(t>7&&t<11)txt('♪ National anthem of '+b.n+' (unofficial jingle)',VW/2,y+120,15,'#fff');
 txt(usingTouch?'TAP TO SKIP':'PRESS A / X / ENTER TO SKIP',VW/2,VH-20,13,'#ccc');}
function touchPads(){layoutPads();const j=T_.joy;const jx=j?j.ox:120,jy=j?j.oy:VH-110;cx.globalAlpha=j?0.55:0.3;cx.fillStyle='#000';cx.beginPath();cx.arc(jx,jy,60,0,PI*2);cx.fill();cx.strokeStyle='#fff';cx.lineWidth=2;cx.stroke();cx.globalAlpha=0.8;cx.fillStyle='#fff';cx.beginPath();cx.arc(jx+T_.jx*45,jy+T_.jy*45,26,0,PI*2);cx.fill();cx.globalAlpha=1;
 const has=M.ball.owner===M.ctl||M.phase==='set';const pb=(B,lab,col,on,hold)=>{cx.globalAlpha=on?0.95:0.6;cx.fillStyle=col;cx.beginPath();cx.arc(B.x,B.y,B.r,0,PI*2);cx.fill();cx.strokeStyle='#fff';cx.lineWidth=3;cx.stroke();if(hold>0){cx.strokeStyle='#ffe14a';cx.lineWidth=6;cx.beginPath();cx.arc(B.x,B.y,B.r+6,-PI/2,-PI/2+PI*2*Math.min(1,hold));cx.stroke();}cx.globalAlpha=1;txt(lab,B.x,B.y+6,lab.length>6?14:17,'#fff');};
 const ah=inp.A.d&&has?inp.A.h/0.5:0;pb(BA,has?(ah>1?'LOB':ah>0.44?'THROUGH':'PASS'):'TACKLE','#1f63c6',inp.A.d,ah);pb(BB,has?'SHOOT':'SLIDE','#c8102e',inp.B.d,inp.B.d&&has?inp.B.h/0.8:0);}
function drawPlay(){drawWorld();hud();UIL=[];cols=1;
 if(paused){panel(VW/2-150,PY+150,300,190);txt('PAUSED',VW/2,PY+190,30,'#ffe14a');uiBtn('RESUME',VW/2-110,PY+210,220,40,()=>{paused=false;});uiBtn('QUIT TO TITLE',VW/2-110,PY+260,220,40,()=>{paused=false;go('title');});}
 if(M.phase==='ht'){M.htT=(M.htT||0)+1/60;const s0=M.t[0].st,s1=M.t[1].st,tp=s0.poss+s1.poss||1;panel(VW/2-230,PY+120,460,250);txt('HALF-TIME',VW/2,PY+158,32,'#ffe14a');txt(M.t[0].d.n+'  '+M.t[0].score+' - '+M.t[1].score+'  '+M.t[1].d.n,VW/2,PY+190,20);
  const rows=[['POSSESSION',Math.round(s0.poss/tp*100)+'%',Math.round(s1.poss/tp*100)+'%'],['SHOTS',s0.shots,s1.shots],['ON TARGET',s0.ont,s1.ont],['TACKLES',s0.tackles,s1.tackles],['FOULS',s0.fouls,s1.fouls]];rows.forEach((r,i)=>{const yy=PY+218+i*20;cx.font='bold 14px Arial';cx.fillStyle='#fff';cx.textAlign='right';cx.fillText(r[1],VW/2-80,yy);cx.textAlign='left';cx.fillText(r[2],VW/2+80,yy);cx.textAlign='center';cx.fillStyle='#9fe0ff';cx.fillText(r[0],VW/2,yy);});
  uiBtn('SECOND HALF',VW/2-100,PY+322,200,38,()=>{secondHalf();});}
 if(M.phase==='ft'){M.ftT=(M.ftT||0)+1/60;txt('FULL TIME',VW/2,PY+200,56,'#ffe14a');txt(M.t[0].d.n+'  '+M.t[0].score+' - '+M.t[1].score+'  '+M.t[1].d.n,VW/2,PY+240,24);if(M.coin!==undefined)txt('('+M.t[M.coin].d.n+' win the coin toss!)',VW/2,PY+268,16,'#9fe0ff');
  if(M.ftT>2.5)go('results');}}
function drawResults(){drawWorld();cx.fillStyle='rgba(4,8,22,.8)';cx.fillRect(0,0,VW,VH);UIL=[];cols=1;const r=res,x=VW/2;let y=PY+40;
 txt(r.win?(RUN.mode==='cup'&&M.round===6?'CHAMPIONS OF THE MULLET CUP!':'VICTORY!'):r.draw?'A DRAW':'DEFEAT',x,y,32,r.win?'#ffe14a':r.draw?'#9fe0ff':'#ff6b6b');y+=28;
 txt(M.t[0].d.n+' '+M.t[0].score+' - '+M.t[1].score+' '+M.t[1].d.n,x,y,20);y+=18;cx.font='12px Arial';cx.fillStyle='#ccc';cx.textAlign='center';cx.fillText(M.goalLog.map(g=>g.name+' '+g.min+"'").join('   ')||'No goals. Nobody ever talks about this game again.',x,y);y+=10;
 const pw=380;panel(x-pw/2,y,pw,Math.min(300,r.lines.length*18+92));y+=20;cx.font='bold 13px Courier New,monospace';
 for(const l of r.lines){cx.textAlign='left';cx.fillStyle='#fff';cx.fillText(l[0],x-pw/2+14,y);cx.textAlign='right';cx.fillStyle=l[1]<0?'#ff6b6b':'#ffe14a';cx.fillText((l[1]>0?'+':'')+l[1],x+pw/2-14,y);y+=18;}
 cx.fillStyle='#fff';cx.textAlign='left';cx.fillText('SUBTOTAL '+r.sub+'  x'+r.dm+' ('+DIFF[M.di].n+')'+(r.rm!==1?'  x'+r.rm.toFixed(1)+' (ROUND)':''),x-pw/2+14,y+4);if(r.champ){y+=18;cx.fillStyle='#ffe14a';cx.fillText('CHAMPION BONUS +'+r.champ,x-pw/2+14,y+4);}
 cx.textAlign='right';cx.fillStyle='#ffe14a';cx.font='bold 18px Courier New,monospace';cx.fillText('= '+r.total,x+pw/2-14,y+26);y+=50;
 if(!r.added){runAdd(r.total,M);r.added=1;}
 txt('RUN TOTAL  '+String(runTotal()).padStart(7,'0'),x,y+8,20,'#9fe0ff');y+=24;
 const cont=RUN.mode==='cup'&&(r.win||(r.draw&&M.round<3))&&M.round<6;
 if(cont)uiBtn('NEXT: '+ROUNDS[M.round+1]+' vs '+RUN.opps[M.round+1].n.toUpperCase(),x-190,y,380,40,()=>{RUN.round++;startMatch();},{font:'bold 15px'});
 else uiBtn(RUN.mode==='cup'?(r.win?'LIFT THE TROPHY':'THE RUN IS OVER'):'FINISH',x-140,y,280,40,()=>finishRun());}
/* ---------- main loop ---------- */
let last=0,acc=0,fpsA=60,fpsMin=999,fpsN=0;const SPEED=TEST?(+(location.search.match(/speed=(\d+)/)||[0,1])[1]):1;
function frame(ts){requestAnimationFrame(frame);let dt=(ts-last)/1000;last=ts;if(!(dt>0))dt=1/60;dt=Math.min(dt,0.1);perfT+=dt;fpsA=lerp(fpsA,1/Math.max(dt,0.001),0.05);fpsN++;if(fpsN>120)fpsMin=Math.min(fpsMin,fpsA);
 readInput(dt);
 if(scr==='play'&&inp.nav.pause&&M.human>=0&&(M.phase==='live'||M.phase==='set'||M.phase==='stop')){paused=!paused;focus=0;}
 if(scr==='play'&&M&&(M.phase==='intro'||M.phase==='replay')&&(inp.nav.ok||hit(inp.A)))M.skip=1;
 const sim=scr==='play'?!paused:scr!=='results'&&scr!=='initials';
 if(sim&&M){acc+=dt*SPEED;let n=0;while(acc>=1/60&&n<4*SPEED){matchStep(1/60);acc-=1/60;n++;}if(n>=4*SPEED)acc=0;}
 cx.setTransform(SCL,0,0,SCL,0,0);
 if(scr!=='initials'&&(scr!=='play'||paused||M.phase==='ht'))uiNav();
 if(scr==='title')drawTitle();else if(scr==='teams')drawTeams();else if(scr==='play')drawPlay();else if(scr==='results')drawResults();else if(scr==='scores')drawScores();else if(scr==='howto')drawHow();else if(scr==='initials')drawInitials();
 endFrameInput();}
$('fs').onclick=()=>{audioInit();const d=document,de=d.documentElement;if(d.fullscreenElement||d.webkitFullscreenElement){(d.exitFullscreen||d.webkitExitFullscreen).call(d);}else{const r=de.requestFullscreen||de.webkitRequestFullscreen;if(r){const p=r.call(de,{navigationUI:'hide'});if(p&&p.then)p.then(()=>{try{screen.orientation.lock('landscape').catch(()=>{});}catch(e){}}).catch(()=>{});}}};
$('pz').onclick=()=>{if(scr==='play'&&M.human>=0){paused=!paused;focus=0;}};
resize();go('title');requestAnimationFrame(frame);
if(TEST)window.__MC={get scr(){return scr;},get phase(){return M&&M.phase;},get fps(){return fpsA;},get fpsMin(){return fpsMin;},get score(){return M?[M.t[0].score,M.t[1].score]:null;},get half(){return M&&M.half;},get clock(){return M&&M.clock;},get run(){return RUN?runTotal():null;},get res(){return res;},get evs(){return M&&M.evs;},get poss(){if(!M)return null;const a=M.t[0].st.poss,c=M.t[1].st.poss;return Math.round(a/(a+c||1)*100);},get ctl(){return M&&M.ctl&&M.ctl.name;},get owner(){return M&&M.ball.owner&&(M.ball.owner.T+':'+M.ball.owner.name);},cam(){return camX;},sheet(i){const t=M.t[i||0];return t.sh.filter(Boolean).map(x=>x.cv.toDataURL()).concat([t.gsh.cv.toDataURL()]);},gallery(){const fr=['idle','j1','j5','r1','r5','kick1','tackle','s1','s2','knee','point','celeUp','plane'];const sets=[[M.t[0].sh.find(Boolean),2],[M.t[0].sh.find(Boolean),6],[M.t[0].sh.find(Boolean),0],[M.t[1].sh.find(Boolean),1],[M.t[0].gsh,2]];const gk=['idle','dL1','dL2','dR1','dR2','kick1'];const cw=SPRES*2.2,chh=SPRES*2.6;const c=document.createElement('canvas');c.width=cw*13;c.height=chh*5;const g=c.getContext('2d');g.fillStyle='#3a9a3e';g.fillRect(0,0,c.width,c.height);sets.forEach(([S,d],row)=>{(row===4?gk:fr).forEach((n,i)=>{const m=S.meta[DSRC[d]*100+FI[n]];g.save();g.translate(cw*i+cw/2,chh*row+chh*0.85);if(DFLIP[d])g.scale(-1,1);g.drawImage(S.cv,m.sx,m.sy,m.w,m.h,m.x0*S.res,m.y0*S.res,m.w,m.h);g.restore();});});return c.toDataURL();},testShot(){const p=M.ctl,T=M.human,b=M.ball;p.x=XU(T,L-24);p.y=CY;p.face=M.t[T].dir>0?0:PI;b.owner=p;b.x=p.x+M.t[T].dir*0.5;b.y=CY;inp.my=0;humanShoot(p,0.6);return{cv:b.cv,vy:b.vy};},bcv(){return M&&{cv:M.ball.cv||0,y:M.ball.y,x:M.ball.x,ph:M.phase};},mem(){let px=0;for(const k in SHEETS)px+=SHEETS[k].cv.width*SHEETS[k].cv.height;return{n:Object.keys(SHEETS).length,mpx:+(px/1e6).toFixed(2),res:SPRES,ms:SHEET_MS,z:+camZ.toFixed(2)};},ball(){return M&&{x:M.ball.x,y:M.ball.y,z:M.ball.z};},info(){if(!M||!M.ctl)return null;const b=M.ball,o=b.owner;const[,nd]=nearestOpp(M.ctl);return{nd,od:o&&!(o.ctrlT>0)?hyp(b.x-o.x,b.y-o.y):-1,cx:M.ctl.x,cy:M.ctl.y,bx:b.x,by:b.y,bz:b.z,ot:o?o.T:-1,mine:o===M.ctl,dir:M.t[0].dir,ox:o?o.x:0,oy:o?o.y:0,ph:M.phase,sp:M.sp&&M.sp.T};},fakeEnd(pts){newRun('quick',TEAMS[0]);runAdd(pts,{t:[{d:TEAMS[0],score:1},{d:TEAMS[1],score:0}],human:0,evs:[]});finishRun();},force(k){if(!M)return;const H=M.human;if(k==='pen'||k==='penAI'){const T=k==='pen'?H:1-H;M.phase='live';setPiece('penalty',T,XU(T,L-11),CY);}else if(k==='gg'){M.ko=true;M.half=2;M.clock=M.halfLen-1;M.t[1].score=M.t[0].score;}else if(k==='coin'){M.ko=true;M.half=3;M.golden=true;M.clock=M.halfLen-1;M.t[1].score=M.t[0].score;}return k;},get golden(){return M&&M.golden;},get coin(){return M&&M.coin;},get sp(){return M&&M.sp&&M.sp.type;},stats(){return M&&{st:M.t.map(t=>t.st),parries:M.parries||0,near:M.nearMiss||0,dbg:M.dbg};},ctlPos(){return M&&M.ctl&&{x:M.ctl.x,y:M.ctl.y,dir:M.t[0].dir};}};
})();
