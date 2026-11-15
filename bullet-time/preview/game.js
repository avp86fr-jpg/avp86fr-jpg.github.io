'use strict';
(function(){
const W=1280,H=720;
const Q=new URLSearchParams(location.search);
const TEST=Q.has('test'), BOT=Q.has('bot'), SPEED=+(Q.get('speed')||1);
const cv=document.getElementById('c'), cx=cv.getContext('2d',{alpha:false});
let SC=1,DPR=1,OX=0,OY=0,VW=0,VH=0;
function resize(){VW=innerWidth;VH=innerHeight;const s=Math.min(VW/W,VH/H);DPR=Math.min(devicePixelRatio||1,1.75)*(window.__RS||1);
 const cw=Math.round(W*s),ch=Math.round(H*s);OX=(VW-cw)/2;OY=(VH-ch)/2;
 cv.style.width=cw+'px';cv.style.height=ch+'px';cv.style.left=OX+'px';cv.style.top=OY+'px';
 const bw=Math.min(1920,Math.round(cw*DPR));cv.width=bw;cv.height=Math.round(bw*H/W);SC=cv.width/W;}
addEventListener('resize',resize);resize();
// ---------- RNG / hash ----------
function rng(seed){let s=seed>>>0||1;return function(){s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function hstr(str){let h=2166136261>>>0;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619)>>>0;}return h>>>0;}
const clamp=(v,a,b)=>v<a?a:v>b?b:v, lerp=(a,b,t)=>a+(b-a)*t;
// ---------- assets ----------
const IMG={};let SPR={};let loaded=0,toLoad=0;
function img(name){toLoad++;const i=new Image();i.onload=()=>loaded++;i.onerror=()=>{loaded++;console.warn('missing '+name)};i.src='assets/'+name;IMG[name]=i;return i;}
const BGS=['west','chicago','japan','rome','pirate','garage','london','egypt','miami','future','end','lab'];BGS.forEach(b=>{img('bg_'+b+'.webp');if(b!=='lab')img('fg_'+b+'.webp');if(b!=='lab'&&b!=='garage')img('cedge_'+b+'.webp');});
['west','chicago','japan','rome','pirate','london','egypt','miami','future'].forEach(b=>img('inv_'+b+'.webp'));
let assetsReady=false;
fetch('assets/sprites.json').then(r=>r.json()).then(j=>{SPR=j;for(const k in j)j[k].forEach(f=>img(f.f));assetsReady=true;});
function fr(key,i){const l=SPR[key];if(!l)return null;const f=l[Math.min(i,l.length-1)];return {im:IMG[f.f],w:f.w,h:f.h};}
// ---------- audio ----------
let AC=null,MASTER=null,MUSG=null,SFXG=null,LP=null;
function audioInitBase(){if(AC)return;try{AC=new (window.AudioContext||window.webkitAudioContext)();}catch(e){return;}
 MASTER=AC.createGain();MASTER.gain.value=0.8;LP=AC.createBiquadFilter();LP.type='lowpass';LP.frequency.value=18000;
 MUSG=AC.createGain();MUSG.gain.value=0.42;SFXG=AC.createGain();SFXG.gain.value=0.9;
 MUSG.connect(LP);LP.connect(MASTER);SFXG.connect(MASTER);MASTER.connect(AC.destination);
 const len=AC.sampleRate*1.0;NOISE=AC.createBuffer(1,len,AC.sampleRate);const d=NOISE.getChannelData(0);for(let i=0;i<len;i++)d[i]=Math.random()*2-1;}
let NOISE=null;
function tone(f,dur,type,vol,dest,t0,slide){if(!AC)return;t0=t0||AC.currentTime;const o=AC.createOscillator(),g=AC.createGain();o.type=type||'sine';o.frequency.setValueAtTime(f,t0);if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(20,slide),t0+dur);
 g.gain.setValueAtTime(0.0001,t0);g.gain.exponentialRampToValueAtTime(vol||0.2,t0+0.008);g.gain.exponentialRampToValueAtTime(0.0001,t0+dur);o.connect(g);g.connect(dest||SFXG);o.start(t0);o.stop(t0+dur+0.05);}
function noise(dur,vol,fType,fFreq,dest,t0,q){if(!AC)return;t0=t0||AC.currentTime;const s=AC.createBufferSource();s.buffer=NOISE;const f=AC.createBiquadFilter();f.type=fType||'lowpass';f.frequency.value=fFreq||3000;if(q)f.Q.value=q;const g=AC.createGain();
 g.gain.setValueAtTime(vol,t0);g.gain.exponentialRampToValueAtTime(0.0001,t0+dur);s.connect(f);f.connect(g);g.connect(dest||SFXG);s.start(t0,Math.random()*0.5);s.stop(t0+dur+0.02);}
const SFX={
 shot(){noise(0.18,0.7,'lowpass',2600);tone(140,0.16,'sine',0.5,null,0,45);tone(900,0.04,'square',0.08);},
 hit(){noise(0.08,0.4,'bandpass',1800,null,0,2);tone(220,0.08,'triangle',0.2,null,0,90);},
 head(){tone(1320,0.12,'sine',0.25);tone(1980,0.18,'sine',0.15,null,AC&&AC.currentTime+0.05);},
 parry(){tone(2400,0.25,'triangle',0.25,null,0,1200);tone(3600,0.2,'sine',0.12);noise(0.1,0.3,'highpass',5000);},
 eshot(){noise(0.12,0.35,'bandpass',900,null,0,1.5);tone(300,0.1,'sawtooth',0.08,null,0,120);},
 lock(){tone(1600,0.05,'square',0.05);},
 hurt(){tone(160,0.35,'sawtooth',0.3,null,0,50);noise(0.3,0.5,'lowpass',600);},
 reload(){tone(600,0.04,'square',0.08);tone(420,0.05,'square',0.08,null,AC&&AC.currentTime+0.09);noise(0.05,0.2,'highpass',3000,null,AC&&AC.currentTime+0.16);},
 empty(){tone(2000,0.03,'square',0.06);},
 civ(){tone(700,0.4,'triangle',0.25,null,0,240);},
 btOn(){tone(900,1.0,'sawtooth',0.12,null,0,60);noise(0.9,0.25,'bandpass',600,null,0,3);},
 btOff(){tone(80,0.6,'sawtooth',0.1,null,0,700);},
 boom(){noise(0.9,0.9,'lowpass',500);tone(70,0.8,'sine',0.6,null,0,30);},
 glitch(){for(let i=0;i<6;i++)tone(200+Math.random()*1800,0.05,'square',0.05,null,AC&&AC.currentTime+i*0.05);noise(0.5,0.2,'bandpass',2500,null,0,8);},
 ui(){tone(880,0.06,'triangle',0.12);},
 clang(){tone(520,0.3,'square',0.1,null,0,300);noise(0.15,0.35,'highpass',4000);},
};
function sfx(n){if(AC&&SFX[n])try{SFX[n]();}catch(e){}}
// music: tiny lookahead sequencer, original patterns per era
const ERAMUS={
 title:{bpm:96,root:45,scale:[0,3,7,10,12,15],wave:'sawtooth',pad:[0,7,15],drum:1},
 west:{bpm:112,root:43,scale:[0,3,5,7,10,12],wave:'triangle',pad:[0,7,12],drum:2},
 chicago:{bpm:124,root:41,scale:[0,3,5,6,7,10],wave:'square',pad:[0,3,10],drum:3},
 japan:{bpm:104,root:45,scale:[0,1,5,7,8,12],wave:'triangle',pad:[0,5,12],drum:2},
 miami:{bpm:118,root:40,scale:[0,3,7,10,14,15],wave:'sawtooth',pad:[0,7,10],drum:1},
 garage:{bpm:138,root:38,scale:[0,3,5,7,10,12],wave:'square',pad:[0,7,12],drum:1},
 future:{bpm:128,root:42,scale:[0,2,3,7,10,14],wave:'sawtooth',pad:[0,3,7],drum:1},
 end:{bpm:90,root:37,scale:[0,1,3,7,8,12],wave:'sawtooth',pad:[0,3,8],drum:3},
};
let mus={on:false,cfg:null,step:0,next:0,slow:1};
function musicPlay(name){if(!AC)return;mus.cfg=ERAMUS[name]||ERAMUS.title;mus.step=0;mus.next=AC.currentTime+0.05;mus.on=true;mus.name=name;}
function musicStop(){mus.on=false;}
function mtof(m){return 440*Math.pow(2,(m-69)/12);}
function musicTick(){if(!AC||!mus.on)return;const c=mus.cfg;const spb=60/c.bpm/4*mus.slow;
 while(mus.next<AC.currentTime+0.15){const t=mus.next,s=mus.step%64,bar=(mus.step>>4)%4;const prog=[0,-4,3,-2][bar];
  // bass
  if(s%4===0||s%16===14)tone(mtof(c.root+prog),spb*1.6,'sawtooth',0.12,MUSG,t);
  // arp
  const arp=c.scale[(s*3+bar)%c.scale.length];if(s%2===0)tone(mtof(c.root+24+prog+arp),spb*1.2,c.wave,0.035,MUSG,t);
  // pad
  if(s%16===0)c.pad.forEach(p=>tone(mtof(c.root+12+prog+p),spb*15,'triangle',0.03,MUSG,t));
  // drums
  if(c.drum){if(s%4===0)tone(110,0.18,'sine',0.35,MUSG,t,40);if(s%8===4)noise(0.14,0.22,'bandpass',1800,MUSG,t,0.8);if(c.drum!==2&&s%2===1)noise(0.03,0.06,'highpass',7000,MUSG,t);if(c.drum===3&&s%16===10)noise(0.1,0.15,'bandpass',1200,MUSG,t);}
  mus.next+=spb;mus.step++;}}
// ---------- stages ----------
const STAGES=[
 {id:'west',bg:'west',place:'SILVER GULCH',region:'ARIZONA TERRITORY',year:'1881',enemy:'sp_west',vtype:'throw',civ:0,boss:'boss_west',bossName:'IRON JACK ROURKE',far:525,near:712,fx:[470,770],nx:[170,1110],hf:118,hn:400,
  props:[[0,300,0.82,'wood'],[2,985,0.74,'wood'],[1,650,0.42,'wood']],xb:[820,0.52],weak:[[0.47,0.33],[0.84,0.53]],par:115,pal:['#ffb347','#2ad1c9'],acc:'#ffb347'},
 {id:'chicago',bg:'chicago',place:'CHICAGO',region:'SOUTH SIDE',year:'1929',enemy:'sp_chicago',vtype:'heavy',civ:1,boss:'boss_chicago',bossName:'BIG SAL MARETTI',far:520,near:712,fx:[430,660],nx:[140,1080],hf:112,hn:395,
  props:[[3,320,0.84,'stone'],[1,930,0.76,'wood'],[0,610,0.4,'wood']],xb:[470,0.6],weak:[[0.5,0.43],[0.49,0.1]],par:115,pal:['#ffcc66','#5fbf8f'],acc:'#5fbf8f'},
 {id:'japan',bg:'japan',place:'TAKAMORI CASTLE',region:'JAPAN',year:'1587',enemy:'sp_japan',vtype:'throw',civ:2,boss:'boss_japan',bossName:'LORD KUROGANE',far:480,near:712,fx:[380,900],nx:[110,820],hf:110,hn:390,
  props:[[4,215,0.8,'stone'],[1,700,0.58,'wood'],[0,470,0.36,'wood']],xb:[560,0.7],weak:[[0.56,0.33],[0.5,0.15]],par:115,pal:['#ff6b8b','#7b6cff'],acc:'#ff6b8b'},
 {id:'rome',bg:'rome',place:'GLADIATOR RUSH',region:'THE COLOSSEUM',year:'80 AD',enemy:'sp_rome',vtype:'throw',civ:-1,boss:'boss_rome',bossName:'MAXIMUS FERRO & HANNIBELLA',far:490,near:712,fx:[300,1000],nx:[80,1200],hf:118,hn:400,
  props:[[7,330,0.82,'wood'],[6,960,0.74,'stone'],[11,640,0.42,'stone']],xb:[780,0.55],weak:[[0.5,0.25],[0.5,0.07],[0.18,0.56]],par:115,pal:['#ffcf6b','#d6463a'],acc:'#d6463a',veh:0,bossH:540},
 {id:'pirate',bg:'pirate',place:'BLACK FLAG STORM',region:'THE CARIBBEAN',year:'1715',enemy:'sp_pirate',vtype:'throw',civ:-1,boss:'boss_pirate',bossName:'CAPTAIN MORROW, THE DROWNED',far:505,near:712,fx:[380,720],nx:[130,960],hf:115,hn:400,
  props:[[8,330,0.84,'metal'],[0,880,0.76,'wood'],[1,600,0.42,'wood']],xb:[470,0.62],weak:[[0.42,0.15],[0.48,0.45]],par:115,pal:['#7fe3d0','#ff9a3c'],acc:'#4fd1c5',veh:2,balls:1},
 {id:'garage',bg:'garage',place:"THE CLOCKMAKER'S GARAGE",region:'BONUS STAGE',year:'2049',bonus:true,par:30,pal:['#ffb04a','#38c8ff'],acc:'#38c8ff'},
 {id:'london',bg:'london',place:'FOG OF LONDON',region:'WHITECHAPEL',year:'1888',enemy:'sp_london',vtype:'heavy',civ:-1,boss:'boss_london',bossName:'DR. ORSON GRAVES',far:585,near:715,fx:[560,790],nx:[260,1020],hf:95,hn:370,
  props:[[9,360,0.84,'metal'],[1,890,0.78,'wood'],[9,700,0.4,'metal']],xb:[560,0.66],weak:[[0.5,0.37],[0.5,0.6],[0.5,0.05]],par:115,pal:['#e8c27a','#8fb8d8'],acc:'#e8c27a',veh:1,bossH:520},
 {id:'egypt',bg:'egypt',place:"PHARAOH'S CURSE",region:'VALLEY OF THE KINGS',year:'1320 BC',enemy:'sp_egypt',vtype:'throw',civ:-1,boss:'boss_egypt',bossName:'THE WAKING SPHINX',far:495,near:712,fx:[480,800],nx:[200,1080],hf:105,hn:395,
  props:[[10,300,0.8,'metal'],[11,960,0.74,'stone'],[6,640,0.4,'stone']],xb:[780,0.6],weak:[[0.5,0.11],[0.5,0.57]],par:115,pal:['#f2c14e','#2ec4b6'],acc:'#2ec4b6',bossH:430},
 {id:'miami',bg:'miami',place:'MIAMI BEACH',region:'OCEAN DRIVE',year:'1986',enemy:'sp_miami',vtype:'heavy',civ:3,boss:'boss_miami',bossName:'RICO "SUNSET" VANCE',far:430,near:712,fx:[600,800],nx:[240,1010],hf:100,hn:405,
  props:[[1,820,0.72,'wood'],[0,420,0.84,'wood'],[3,660,0.42,'stone']],xb:[560,0.62],weak:[[0.5,0.4],[0.62,0.17]],par:115,pal:['#ff3fa4','#29e6ff'],acc:'#ff3fa4'},
 {id:'future',bg:'future',place:'NEO-ARCOLOGY',region:'SKYBRIDGE 88',year:'2187',enemy:'sp_future',vtype:'heavy',civ:4,boss:'boss_future',bossName:'WARDEN-9',far:470,near:712,fx:[330,900],nx:[110,1120],hf:112,hn:400,armor:1,
  props:[[5,300,0.8,'metal'],[5,960,0.72,'metal'],[1,640,0.42,'wood']],xb:[470,0.6],weak:[[0.5,0.45],[0.12,0.62],[0.88,0.62]],par:115,pal:['#7d6bff','#33d6ff'],acc:'#7d6bff',hover:1},
 {id:'end',bg:'end',place:'THE END OF TIME',region:'BEYOND THE LAST SECOND',year:'\u221e',enemy:'sp_future',civ:-1,boss:'boss_end',bossName:'THE CLOCKMAKER',far:445,near:600,fx:[420,880],nx:[260,1020],hf:110,hn:300,mixed:1,
  props:[[4,330,0.78,'stone'],[5,950,0.7,'metal']],weak:[[0.53,0.11],[0.7,0.27]],par:120,pal:['#ffd36b','#a06bff'],acc:'#ffd36b',final:1},
];
const PROPREL=[0.62,0.42,0.6,0.55,0.9,0.75,0.78,0.6,0.42,0.8,0.92,0.6];
const DIFFS=[{n:'ROOKIE',m:1,aim:1.7,bul:0.75,cad:1},{n:'DETECTIVE',m:1.5,aim:1.3,bul:0.62,cad:0.85},{n:'HARD-BOILED',m:2.25,aim:1.0,bul:0.52,cad:0.72}];
// ---------- run state ----------
let G=null; // current run
function newRun(mode,diff){const seed=mode==='daily'?dailySeed():hstr('story-v1-'+diff);
 G={mode,diff,D:DIFFS[diff],seed,score:0,hp:5,stages:[],si:0,over:false,submitted:false,totalShots:0,totalHits:0,started:performance.now()};}
function dailySeed(){const d=new Date();return +(d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate());}
function dailyKey(){return String(dailySeed());}
let S=null; // stage state
function stageInitBase(idx,daily){
 const st=daily?STAGES[daily.order[0]]:STAGES[idx];
 S={def:st,idx,R:rng((G.seed^hstr(st.id))>>>0),t:0,ents:[],bullets:[],parts:[],pops:[],props:[],phase:'intro',phaseT:0,group:0,groupT:0,groups:daily?999:9,
  ammo:6,cover:false,coverT:0,inv:0,bt:0,btOn:0,btFlash:0,chain:0,mult:1,shake:0,dmgFlash:0,muzzle:0,
  st:{kills:0,heads:0,parries:0,civ:0,shots:0,hits:0,maxMult:1,dmg:0,killPts:0,parryPts:0,bossPts:0,civPts:0,carPts:0,accBonus:0,timeBonus:0,ndBonus:0,wreck:0,partsDown:0,total:0},
  boss:null,bossT:0,daily:daily||null,segment:0,car:null,clearT:0};
 setupStage(st);
 musicPlay(st.id);
}
function setupStageOrig(st){S.def=st;S.props=(st.props||[]).map(p=>({i:p[0],x:p[1],z:p[2],mat:p[3],hits:0,holes:[]}));if(st.xb)S.props.push({i:0,x:st.xb[0],z:st.xb[1],mat:'wood',hits:0,holes:[],xb:1});
 if(st.bonus){const f=fr('car',0);const sc=1.55;S.car={x:640,y:700,sc,w:f.w*sc,h:f.h*sc,parts:[
  {n:'WINDSHIELD',r:[0.27,0.03,0.73,0.27]},{n:'HOOD',r:[0.3,0.28,0.7,0.52]},{n:'LEFT LAMP',r:[0.04,0.44,0.27,0.72]},{n:'RIGHT LAMP',r:[0.73,0.44,0.96,0.72]},
  {n:'GRILLE',r:[0.3,0.62,0.7,0.86]},{n:'LEFT COIL',r:[0.0,0.72,0.14,0.98]},{n:'RIGHT COIL',r:[0.86,0.72,1.0,0.98]}].map(p=>({...p,hp:8,down:false}))};}
}
function groundY(z){return lerp(S.def.far,S.def.near,z);}
function heightAt(z){return lerp(S.def.hf,S.def.hn,z);}
function spawnX(z,u){const d=S.def;const a=lerp(d.fx[0],d.nx[0],z),b=lerp(d.fx[1],d.nx[1],z);return lerp(a,b,u);}
function enemyKey(){const d=S.def;if(d.mixed){const ks=['sp_west','sp_chicago','sp_japan','sp_miami','sp_future'];return ks[Math.floor(S.R()*5)];}return d.enemy;}
function spawnEnemy(opts){const R=S.R;const key=opts&&opts.key||enemyKey();let z,x,mode;
 const usable=S.props.filter(p=>p.z>0.3);
 if(usable.length&&R()<0.45&&!(opts&&opts.noPop)){const p=usable[Math.floor(R()*usable.length)];z=p.z-0.03;x=p.x+(R()-0.5)*40;mode='pop';}
 else{z=0.08+R()*0.85;x=spawnX(z,R());mode=R()<0.5?'slide':'warp';}
 const f0=fr(key,0);const e={kind:'e',key,x,z,tx:x,mode,st:'enter',t:0,hp:(S.def.armor&&key==='sp_future')?2:1,aimT:G.D.aim*(0.85+R()*0.4),idle:0.35+R()*0.9,shots:0,rs:R(),f0,flash:0,id:Math.random()};
 if(mode==='slide'){const side=x<640?-1:1;e.x=side<0?-120:W+120;}
 S.ents.push(e);return e;}
function spawnCiv(){const R=S.R;let ci=S.def.civ;if(ci<0)return;const z=0.45+R()*0.45;const dir=R()<0.5?1:-1;
 S.ents.push({kind:'c',key:'sp_civ',fi:ci,x:dir>0?-140:W+140,z,vx:dir*(140+R()*70),st:'walk',t:0,hitOnce:false,f0:fr('sp_civ',ci)});}
function spawnBoss(){const d=S.def;const f0=fr(d.boss,0);const hp=S.daily?36:(d.final?130:85);
 S.boss={kind:'b',key:d.boss,x:640,z:0.62,hp,max:hp,t:0,atk:1.6,rings:[],weak:0,weakT:0,f0,flash:0,dead:false,deadT:0,summon:0};
 S.bossT=0;banner(d.bossName,'BOSS',2.0);}
let BAN=null;function banner(a,b,t){BAN={a,b,t,max:t};}
// ---------- scoring ----------
function addPts(n,x,y,label,col){n=Math.round(n);S.st.total+=n;G.score=Math.max(0,G.score+n);if(x!=null)S.pops.push({x,y,t:0,txt:(n>=0?'+':'')+n,label,col:col||'#fff'});}
function chainHit(){S.chain++;S.mult=Math.min(8,1+Math.floor(S.chain/3));if(S.mult>S.st.maxMult)S.st.maxMult=S.mult;}
function chainBreak(){S.chain=0;S.mult=1;}
function btGain(v){S.bt=Math.min(100,S.bt+v);}
// ---------- geometry ----------
function entGeom(e){const h=heightAt(e.z);const s=h/e.f0.h;const y=groundY(e.z);let rise=0;
 if(e.mode==='pop'&&e.st==='enter')rise=(1-clamp(e.t/0.35,0,1))*h*0.75;
 return {s,h,y:y+rise,x:e.x,w:e.f0.w*s};}
function bossGeom(b){const d=S.def;let h=d.hover?400:500;if(d.final)h=470;const s=h/b.f0.h;let y=d.hover?440+Math.sin(b.t*1.3)*18:groundY(b.z)+10;if(d.final)y=600;return {s,h,y,x:b.x,w:b.f0.w*s};}
// ---------- shooting ----------
function shoot(px,py){
 if(!S||S.phase==='intro'||S.phase==='clear'||S.phase==='done')return;
 if(S.cover){return;}
 if(S.ammo<=0){sfx('empty');S.pops.push({x:px,y:py-30,t:0,txt:'RELOAD!',col:'#ff5a5a',small:1});return;}
 S.ammo--;S.muzzle=0.06;sfx('shot');S.shake=Math.max(S.shake,3);
 const st=S.st;const D=G.D;let res=null;
 // 1. bullets (parry only in bullet time)
 if(S.btOn>0){for(const b of S.bullets){if(b.dead)continue;const p=bulletPos(b);if(Math.hypot(px-p.x,py-p.y)<p.r+22){b.dead=true;st.shots++;st.hits++;st.parries++;chainHit();const v=250*D.m;st.parryPts+=v;addPts(v,p.x,p.y,'PARRY','#7ff8ff');sfx('parry');burst(p.x,p.y,'#bff',14,240);btGain(3);return;}}}
 // 2. civilians (front-most first)
 const order=S.ents.filter(e=>e.st!=='gone').sort((a,b)=>b.z-a.z);
 // boss check
 if(S.boss&&!S.boss.dead){const b=S.boss,g=bossGeom(b);const wp=S.def.weak[b.weak];const wx=g.x+(wp[0]-0.5)*g.w,wy=g.y-g.h+wp[1]*g.h;const wr=Math.max(28,g.h*0.075);
  // enemies in front of boss handled first
  const front=order.find(e=>e.z>b.z&&e.kind==='e'&&e.st!=='dead'&&hitEnt(e,px,py));
  if(!front){if(Math.hypot(px-wx,py-wy)<wr){bossDamage(4,px,py,true);return;}
   if(px>g.x-g.w*0.42&&px<g.x+g.w*0.42&&py>g.y-g.h&&py<g.y){bossDamage(1,px,py,false);return;}}}
 for(const e of order){
  if(e.kind==='c'){const g=entGeom(e);if(px>g.x-g.w*0.35&&px<g.x+g.w*0.35&&py>g.y-g.h&&py<g.y){st.shots++;if(!e.hitOnce){e.hitOnce=true;st.civ++;st.civPts-=500;addPts(-500,px,py,'CIVILIAN!','#ff4d4d');chainBreak();sfx('civ');e.vx*=2.2;e.flash=0.5;}return;}continue;}
  if(e.st==='dead'){if(hitEnt(e,px,py,true)){return;}continue;} // corpse: neutral, no points
  const h=hitEnt(e,px,py);if(!h)continue;
  st.shots++;st.hits++;chainHit();e.flash=0.12;const g=entGeom(e);
  if(h==='head'||e.hp<=1){e.hp=0;e.st='dead';e.t=0;st.kills++;const head=h==='head';if(head)st.heads++;const v=100*(head?2:1)*S.mult*D.m;st.killPts+=v;
   addPts(v,px,py,head?'HEADSHOT':null,head?'#ffe066':'#fff');sfx(head?'head':'hit');btGain(head?14:6+(S.mult>=3?3:0));burst(px,py,head?'#ffd27a':'#ff9b6a',head?16:10,300);S.shake=Math.max(S.shake,head?7:4);}
  else{e.hp--;e.st='hit';e.t=0;const v=20*S.mult*D.m;st.killPts+=v;addPts(v,px,py,'ARMOR','#9fd');sfx('clang');burst(px,py,'#ffe9a8',8,260);btGain(2);}
  return;}
 // props: tiny capped reward
 for(const p of S.props){const r=propRect(p);if(px>r.x&&px<r.x+r.w&&py>r.y&&py<r.y+r.h){if(p.hits<2){p.hits++;st.shots++;st.hits++;addPts(10*D.m,px,py,null,'#ccc');}burst(px,py,'#d9b48a',6,180);sfx('hit');return;}}
 // car (bonus)
 if(S.car&&S.phase==='play'){const c=S.car,f=fr('car',carFrame());const x0=c.x-c.w/2,y0=c.y-c.h;
  for(const p of c.parts){if(p.down)continue;const r=p.r;if(px>x0+r[0]*c.w&&px<x0+r[2]*c.w&&py>y0+r[1]*c.h&&py<y0+r[3]*c.h){st.shots++;st.hits++;chainHit();p.hp--;const v=50*D.m;st.carPts+=v;addPts(v,px,py,null,'#bfe');sfx('clang');burst(px,py,'#9df',10,300);
    if(p.hp<=0){p.down=true;st.partsDown++;const v2=1000*D.m;st.carPts+=v2;addPts(v2,px,py-40,p.n+' DOWN','#ffd166');sfx('boom');S.shake=10;burst(px,py,'#ffb347',30,420);
     if(c.parts.every(q=>q.down)){const v3=10000*D.m+Math.round(Math.max(0,30-S.t))*200*D.m;st.wreck=v3;st.carPts+=v3;addPts(v3,640,300,'FULL WRECK!','#ff3fa4');S.phase='clear';S.clearT=0;banner('FULL WRECK','TOTALLED',2);}}
    return;}}
  if(px>x0&&px<x0+c.w&&py>y0+c.h*0.05&&py<c.y){st.shots++;st.hits++;chainHit();const v=10*D.m;st.carPts+=v;addPts(v,px,py,null,'#9ab');burst(px,py,'#cde',5,200);sfx('hit');return;}}
 // miss
 st.shots++;chainBreak();burst(px,py,'#aaa',4,120);
}
function hitEnt(e,px,py,corpse){const g=entGeom(e);const f=fr(e.key,corpse?4:0);
 if(corpse){const s=g.s,w=f.w*s,h=f.h*s;return px>g.x-w/2&&px<g.x+w/2&&py>g.y-h&&py<g.y;}
 const top=g.y-g.h;if(py<top||py>g.y)return null;
 if(py<top+g.h*0.17&&Math.abs(px-g.x)<g.w*0.17)return 'head';
 if(Math.abs(px-g.x)<g.w*0.33)return 'body';return null;}
function bossDamage(n,px,py,weak){const b=S.boss,st=S.st,D=G.D;st.shots++;st.hits++;chainHit();b.hp-=n;b.flash=0.12;
 const sf=clamp(2-S.bossT/40,0.5,2);
 if(weak){const v=Math.round(300*sf*D.m*Math.min(S.mult,4)/2);st.bossPts+=v;addPts(v,px,py,'WEAK POINT','#ff6bd6');sfx('head');btGain(8);burst(px,py,'#ff9bf0',18,340);S.shake=8;}
 else{const v=20*D.m*S.mult;st.bossPts+=v;addPts(v,px,py,null,'#fff');sfx('hit');burst(px,py,'#ffd',6,220);btGain(1);}
 if(b.hp<=0&&!b.dead){b.dead=true;b.deadT=0;const v=Math.round(3000*sf*D.m);st.bossPts+=v;addPts(v,640,260,'BOSS DOWN x'+sf.toFixed(2),'#ffd166');sfx('boom');S.shake=16;S.bullets.forEach(q=>q.dead=true);
  S.ents.forEach(e=>{if(e.kind==='e'&&e.st!=='dead'){e.st='dead';e.t=0;}});}}
function propRect(p){const h=heightAt(p.z)*PROPREL[p.i];const f=p.i<6?fr('props',p.i):fr('props2',p.i-6);const w=f.w*h/f.h;return {x:p.x-w/2,y:groundY(p.z)-h+6,w,h,f};}
function carFrame(){const c=S.car;if(!c)return 0;const d=c.parts.filter(p=>p.down).length;return d>=7?2:d>=3?1:0;}
// ---------- bullets ----------
function fireBullet(x,y){const R=S.R;const tx=640+(R()-0.5)*700,ty=420+(R()-0.5)*260;S.bullets.push({x0:x,y0:y,x1:tx,y1:ty,t:0,dur:G.D.bul*(0.9+R()*0.2),dead:false,trail:[]});sfx('eshot');}
function bulletPos(b){const k=clamp(b.t/b.dur,0,1);const e=k*k;return {x:lerp(b.x0,b.x1,e),y:lerp(b.y0,b.y1,e),r:lerp(3,30,e),k};}
function hurt(){if(S.inv>0||S.cover)return false;G.hp--;S.st.dmg++;S.inv=1.1;S.dmgFlash=1;S.shake=18;chainBreak();sfx('hurt');if(G.hp<=0){G.hp=0;gameOver();}return true;}
// ---------- particles ----------
function burst(x,y,col,n,sp){for(let i=0;i<n&&S.parts.length<350;i++){const a=Math.random()*6.283,v=sp*(0.3+Math.random()*0.7);S.parts.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-60,t:0,life:0.35+Math.random()*0.4,col,s:2+Math.random()*3});}}
// ---------- update ----------
const BTSCALE=0.28;
function aliveEnemies(){let n=0;for(const e of S.ents)if(e.kind==='e'&&e.st!=='dead'&&e.st!=='gone')n++;return n;}
function startBT(){if(!S||S.bt<100||S.btOn>0||S.phase!=='play')return;S.btOn=5.0;S.bt=0;S.btFlash=1;sfx('btOn');mus.slow=2.2;if(LP)LP.frequency.setTargetAtTime(900,AC.currentTime,0.08);}
function endBT(){S.btOn=0;sfx('btOff');mus.slow=1;if(LP)LP.frequency.setTargetAtTime(18000,AC.currentTime,0.2);}
let pending=[];
function scheduleGroup(){const R=S.R;const gi=S.group;let n=Math.min(6,3+Math.floor(gi/2)+(G.diff>0&&gi>3?1:0));if(S.daily)n=Math.min(6,2+Math.floor(S.t/18));
 let at=S.t;for(let i=0;i<n;i++){pending.push({at,fn:()=>spawnEnemy()});at+=(0.45+R()*0.7)*G.D.cad;}
 if(S.def.civ>=0&&R()<0.4)pending.push({at:S.t+0.3+R()*2,fn:spawnCiv});S.group++;S.groupT=0;}
function stageUpdate(dt){
 if(S.btOn>0){S.btOn-=dt;if(S.btOn<=0)endBT();}
 const w=S.btOn>0?dt*BTSCALE:dt;
 S.btFlash=Math.max(0,S.btFlash-dt*2);S.dmgFlash=Math.max(0,S.dmgFlash-dt*2.5);S.shake=Math.max(0,S.shake-dt*40);S.muzzle-=dt;S.inv-=dt;
 if(S.cover){S.coverT+=dt;if(S.coverT>0.32&&S.ammo<6){S.ammo=6;sfx('reload');}}
 for(const p of S.parts){p.t+=w;p.x+=p.vx*w;p.y+=p.vy*w;p.vy+=600*w;}S.parts=S.parts.filter(p=>p.t<p.life);
 for(const p of S.pops)p.t+=dt;S.pops=S.pops.filter(p=>p.t<1.1);
 if(BAN){BAN.t-=dt;if(BAN.t<=0)BAN=null;}
 S.phaseT+=dt;
 if(S.phase==='intro'){if(S.phaseT>1.0){S.phase='play';S.phaseT=0;}return;}
 if(S.phase==='done')return;
 if(S.phase==='play'||S.phase==='boss')S.t+=w;
 if(S.boss)S.bossT+=w;
 // daily segments
 if(S.daily&&S.phase!=='clear'){const seg=Math.min(2,Math.floor(S.t/30));if(seg!==S.segment){S.segment=seg;setupStage(STAGES[S.daily.order[seg]]);S.ents=S.ents.filter(e=>e.st==='dead');pending=[];glitch(0.7);musicPlay(S.def.id);banner(S.def.place,S.def.year,1.6);if(seg===2)spawnBoss();}
  if(S.t>=90){S.phase='clear';S.clearT=0;banner('TIME!','DAILY CHALLENGE',2);}}
 // waves
 if(S.phase==='play'&&!S.def.bonus){S.groupT+=w;
  if(S.group<S.groups){if((aliveEnemies()===0&&pending.length===0&&S.groupT>0.6)||S.groupT>14)scheduleGroup();}
  else if(aliveEnemies()===0&&pending.length===0&&!S.daily){S.phase='boss';spawnBoss();}}
 if(S.daily&&S.phase==='boss'){S.groupT+=w;if(aliveEnemies()<2&&pending.length===0&&S.groupT>6){scheduleGroup();}}
 for(let i=pending.length-1;i>=0;i--)if(S.t>=pending[i].at){const p=pending[i];pending.splice(i,1);p.fn();}
 // bonus timer
 if(S.def.bonus&&S.phase==='play'&&S.t>=30){S.phase='clear';S.clearT=0;banner("TIME'S UP",'CUFF RECHARGED',2);}
 // entities
 for(const e of S.ents){e.t+=w;e.flash=Math.max(0,(e.flash||0)-dt);
  if(e.kind==='c'){e.x+=e.vx*w;if(e.x<-200||e.x>W+200)e.st='gone';continue;}
  switch(e.st){
   case 'enter':if(e.mode==='slide'){const d=e.tx-e.x;const step=560*w;if(Math.abs(d)<=step){e.x=e.tx;e.st='idle';e.t=0;}else e.x+=Math.sign(d)*step;}else if(e.t>(e.mode==='pop'?0.35:0.45)){e.st='idle';e.t=0;}break;
   case 'idle':if(e.t>e.idle){if(e.shots>=4){e.st='gone';burstWarp(e);}else{e.st='aim';e.t=0;sfx('lock');}}break;
   case 'aim':if(e.t>e.aimT){const g=entGeom(e);fireBullet(g.x+g.w*0.02,g.y-g.h*0.62);e.st='fire';e.t=0;}break;
   case 'fire':if(e.t>0.18){e.st='idle';e.t=0;e.shots++;e.idle=(1.1+e.rs*1.1)*G.D.cad;}break;
   case 'hit':if(e.t>0.28){e.st='idle';e.t=0;e.idle=0.4;}break;
   case 'dead':if(e.t>1.5)e.st='gone';break;}}
 S.ents=S.ents.filter(e=>e.st!=='gone');
 // boss
 const b=S.boss;if(b){b.t+=w;b.flash=Math.max(0,b.flash-dt);
  if(!b.dead){b.x=640+Math.sin(b.t*0.45)*(S.def.final?260:200);b.weakT+=w;if(b.weakT>4.5){b.weakT=0;b.weak=(b.weak+1)%S.def.weak.length;}
   b.atk-=w;if(b.atk<=0){const R=S.R;if(R()<0.28&&aliveEnemies()<2){spawnEnemy({noPop:true});spawnEnemy({noPop:true});b.atk=2.2*G.D.cad;}
    else{const n=2+(b.hp<b.max/2?1:0)+(S.def.final&&b.hp<b.max/3?1:0);for(let i=0;i<n;i++)b.rings.push({ox:(R()-0.5)*0.6,oy:0.2+R()*0.4,t:-i*0.25,aim:G.D.aim*0.95});b.atk=(2.4+R()*0.8)*G.D.cad;sfx('lock');}}
   const g=bossGeom(b);for(const r of b.rings){r.t+=w;if(r.t>=r.aim){r.done=true;fireBullet(g.x+r.ox*g.w,g.y-g.h+r.oy*g.h);}}b.rings=b.rings.filter(r=>!r.done);}
  else{b.deadT+=dt;if(b.deadT>2.2&&S.phase!=='clear'){if(S.daily){S.boss=null;}else{S.phase='clear';S.clearT=0;banner('CORE FRAGMENT SECURED',S.def.final?'THE CHRONO-CORE SHATTERS':'NEXT RIFT OPENING',2.2);}}}}
 // bullets
 for(const q of S.bullets){if(q.dead)continue;q.t+=w;const p=bulletPos(q);q.trail.push([p.x,p.y]);if(q.trail.length>8)q.trail.shift();
  if(q.t>=q.dur){q.dead=true;if(!hurt()&&S.cover)S.pops.push({x:p.x,y:p.y,t:0,txt:'DODGED',col:'#9cf',small:1});}}
 S.bullets=S.bullets.filter(q=>!q.dead);
 if(S.phase==='clear'){S.clearT+=dt;if(S.clearT>2.4)stageEnd();}
}
function burstWarp(e){const g=entGeom(e);burst(g.x,g.y-g.h/2,'#7ff',14,200);}
// ---------- stage end / ranks ----------
const RANKS=['D','C','B','A','S'];
function stageRank(st,bonus){let r;if(bonus)r=st.partsDown/7*70+(st.wreck?30:0);else{const acc=st.hits/Math.max(1,st.shots);r=acc*40+(st.dmg===0?30:Math.max(0,30-st.dmg*10))+st.maxMult/8*30-st.civ*5;}
 return r>=85?'S':r>=70?'A':r>=55?'B':r>=40?'C':'D';}
function stageEnd(){if(S.phase==='done')return;S.phase='done';const st=S.st,d=S.def,m=G.D.m;
 if(S.btOn>0)endBT();
 st.acc=st.hits/Math.max(1,st.shots);st.time=S.t;
 if(!d.bonus){st.accBonus=Math.round(st.acc*st.acc*4000*m);st.timeBonus=S.daily?0:Math.round(Math.max(0,d.par-S.t)*25*m);st.ndBonus=st.dmg===0?Math.round(5000*m):0;}
 const add=st.accBonus+st.timeBonus+st.ndBonus;st.total+=add;G.score+=add;st.rank=stageRank(st,d.bonus);st.name=S.daily?'DAILY CHALLENGE':d.place;st.id=d.id;st.bonus=!!d.bonus;
 G.totalShots+=st.shots;G.totalHits+=st.hits;G.stages.push(st);G.hp=Math.min(5,G.hp+1);
 if(S.daily){finishRun(false);go('final');}else go('sres');}
function gameOver(){S.phase='done';if(S.btOn>0)endBT();const st=S.st;st.acc=st.hits/Math.max(1,st.shots);st.time=S.t;st.rank='D';st.name=(S.daily?'DAILY CHALLENGE':S.def.place)+' (KO)';st.id=S.def.id;
 G.totalShots+=st.shots;G.totalHits+=st.hits;G.stages.push(st);G.over=true;finishRun(true);setTimeout(()=>go('gameover'),50);}
function runGrade(){const st=G.stages.filter(s=>s.rank);if(!st.length)return 'D';const v=st.reduce((a,s)=>a+RANKS.indexOf(s.rank),0)/st.length;let g=RANKS[Math.round(v)];if(G.over)return g==='S'?'A':g;
 if(G.mode==='story'&&G.stages.every(s=>s.rank==='S'))g='S+';return g;}
function finishRun(dnf){if(G.submitted)return;G.submitted=true;G.grade=runGrade();G.dnf=dnf;
 const detail={game:'bullet-time',mode:G.mode,difficulty:G.D.n,score:Math.round(G.score),grade:G.grade,completed:!dnf,stages:G.stages.length,accuracy:Math.round(G.totalHits/Math.max(1,G.totalShots)*1000)/10,seed:G.seed};
 G.detail=detail;window.__BT_SUBMITS=(window.__BT_SUBMITS||0)+1;
 try{if(typeof window.submitScore==='function')window.submitScore(detail.score,detail);}catch(e){}
 try{window.dispatchEvent(new CustomEvent('gamescore',{detail}));}catch(e){}
 try{if(window.parent&&window.parent!==window)window.parent.postMessage({type:'game-score',...detail},'*');}catch(e){}}
// ---------- local signed top-10 ----------
const SALT='bt-kane-2049-\u23f1';
function lbKey(mode){return 'bullettime.top.'+(mode==='daily'?'daily.'+dailyKey():'story');}
function sign(e){return hstr(SALT+'|'+e.n+'|'+e.s+'|'+e.g+'|'+e.d+'|'+e.t).toString(36);}
function lbLoad(mode){let a=[];try{a=JSON.parse(localStorage.getItem(lbKey(mode))||'[]');}catch(e){}return a.filter(e=>e&&e.sig===sign(e)).sort((x,y)=>y.s-x.s).slice(0,10);}
function lbQualifies(mode,s){const a=lbLoad(mode);return s>0&&(a.length<10||s>a[a.length-1].s);}
function lbAdd(mode,n,s,g,d){const a=lbLoad(mode);const e={n,s:Math.round(s),g,d,t:Date.now()};e.sig=sign(e);a.push(e);a.sort((x,y)=>y.s-x.s);const out=a.slice(0,10);try{localStorage.setItem(lbKey(mode),JSON.stringify(out));}catch(err){}return out.indexOf(e);}
// ---------- render helpers ----------
let AIM={x:640,y:360},T=0;
const FONT_T='Anton, Impact, sans-serif',FONT_C='Bangers, Impact, sans-serif';
function txt(s,x,y,size,col,align,font,stroke){cx.font=size+'px '+(font||FONT_T);cx.textAlign=align||'left';cx.textBaseline='alphabetic';if(stroke){cx.lineWidth=stroke;cx.strokeStyle='rgba(0,0,0,0.85)';cx.lineJoin='round';cx.strokeText(s,x,y);}cx.fillStyle=col||'#fff';cx.fillText(s,x,y);}
function chromaTxt(s,x,y,size,align,font,a){const o=Math.max(2,size*0.03);cx.globalAlpha=a==null?1:a;txt(s,x-o,y,size,'#ff2d7a',align,font);txt(s,x+o,y,size,'#20e8ff',align,font);txt(s,x,y,size,'#fff',align,font);cx.globalAlpha=1;}
function rrect(x,y,w,h,r){cx.beginPath();cx.moveTo(x+r,y);cx.arcTo(x+w,y,x+w,y+h,r);cx.arcTo(x+w,y+h,x,y+h,r);cx.arcTo(x,y+h,x,y,r);cx.arcTo(x,y,x+w,y,r);cx.closePath();}
function drawBG(name,ox,oy,zoom){const im=IMG['bg_'+name+'.webp'];if(!im||!im.complete)return;const z=zoom||1.08;const w=W*z,h=H*z;cx.drawImage(im,(W-w)/2+ox,(H-h)/2+oy,w,h);}
function wrap(s,maxw,size,font){cx.font=size+'px '+(font||FONT_C);const words=s.split(' ');const lines=[];let cur='';for(const w of words){const t=cur?cur+' '+w:w;if(cx.measureText(t).width>maxw&&cur){lines.push(cur);cur=w;}else cur=t;}if(cur)lines.push(cur);return lines;}
// ---------- animated era FX ----------
const FXP=[];for(let i=0;i<140;i++)FXP.push({x:Math.random()*W,y:Math.random()*H,s:Math.random(),p:Math.random()*6.28});
function eraFXBase(id,t){cx.save();
 if(id==='west'){cx.fillStyle='rgba(255,200,140,0.35)';for(const p of FXP){const x=(p.x+t*(20+p.s*40))%W,y=p.y*0.8+Math.sin(t+p.p)*8;cx.fillRect(x,y,1.5+p.s*2,1.5+p.s*2);}
  for(let i=0;i<6;i++){const k=((t*0.25+i/6)%1);cx.globalAlpha=0.35*(1-k);cx.fillStyle='#3b3330';cx.beginPath();cx.arc(592+k*60,430-k*170,14+k*50,0,6.28);cx.fill();}
  cx.globalAlpha=1;const tw=((t*0.09)%1.6)-0.3;if(tw>-0.2&&tw<1.2){const x=tw*W,y=655;cx.strokeStyle='rgba(120,80,40,0.8)';cx.lineWidth=2;cx.beginPath();for(let a=0;a<12;a++){cx.arc(x,y-Math.abs(Math.sin(t*6))*20,18,a+t*8,a+t*8+0.9);}cx.stroke();}}
 if(id==='chicago'||id==='future'){const fut=id==='future';cx.strokeStyle=fut?'rgba(160,190,255,0.32)':'rgba(200,220,200,0.25)';cx.lineWidth=1.2;cx.beginPath();for(const p of FXP){const x=(p.x+t*80)%W,y=(p.y+t*(900+p.s*500))%H;cx.moveTo(x,y);cx.lineTo(x-6,y-26);}cx.stroke();}
 if(id==='chicago'){const k=((t/14)%1);const x=-900+k*(W+1800);cx.fillStyle='rgba(15,12,8,0.95)';cx.fillRect(x,40,820,60);for(let i=0;i<14;i++){cx.fillStyle=(i+Math.floor(t*3))%7?'rgba(255,214,120,0.9)':'rgba(255,160,60,0.6)';cx.fillRect(x+20+i*57,52,36,24);}cx.fillStyle='rgba(255,220,150,0.12)';cx.fillRect(x,100,820,30);
  for(const [sx,sy] of [[150,600],[1150,585]])for(let i=0;i<5;i++){const k2=((t*0.3+i/5)%1);cx.globalAlpha=0.22*(1-k2);cx.fillStyle='#cfd8cf';cx.beginPath();cx.arc(sx+Math.sin(t+i)*20,sy-k2*220,20+k2*60,0,6.28);cx.fill();}}
 if(id==='japan'){for(const p of FXP){const x=(p.x+t*(30+p.s*30)+Math.sin(t*1.3+p.p)*30)%W,y=(p.y+t*(40+p.s*40))%H;cx.save();cx.translate(x,y);cx.rotate(t*2+p.p);cx.fillStyle='rgba(255,170,200,0.75)';cx.beginPath();cx.ellipse(0,0,4+p.s*3,2+p.s,0,0,6.28);cx.fill();cx.restore();}
  for(const [lx,ly] of [[122,440],[1150,410],[400,430],[985,450]]){const f=0.25+0.1*Math.sin(t*9+lx);const g=cx.createRadialGradient(lx,ly,0,lx,ly,90);g.addColorStop(0,'rgba(255,190,90,'+f+')');g.addColorStop(1,'rgba(255,190,90,0)');cx.fillStyle=g;cx.fillRect(lx-90,ly-90,180,180);}}
 if(id==='miami'){cx.lineCap='round';for(let i=0;i<10;i++){const k=((t*0.6+i/10)%1);const a=k*k;const x0=lerp(700,-200,a),y0=lerp(405,560,a)+(i%3)*12,x1=lerp(700,-200,Math.max(0,a-0.06)),y1=lerp(405,560,Math.max(0,a-0.06))+(i%3)*12;cx.strokeStyle=i%2?'rgba(255,60,160,0.8)':'rgba(255,240,240,0.7)';cx.lineWidth=1+a*5;cx.beginPath();cx.moveTo(x0,y0);cx.lineTo(x1,y1);cx.stroke();}
  const f=0.08+0.06*Math.sin(t*13)*Math.sin(t*3.1);cx.fillStyle='rgba(255,40,170,'+f+')';cx.fillRect(0,0,380,420);
  for(let i=0;i<20;i++){const x=1040+((i*37+t*90)%220),y=455+Math.sin(i+t*4)*6;cx.fillStyle='rgba(255,255,255,'+(0.3+0.3*Math.sin(t*8+i))+')';cx.fillRect(x,y,3,2);}}
 if(id==='future'){for(let l=0;l<4;l++){const y=[300,345,390,250][l];for(let i=0;i<3;i++){const sp=[160,-220,120,-90][l];let x=((t*sp+i*520+l*170)%(W+400));if(x<0)x+=W+400;x-=200;const g=cx.createLinearGradient(x-sp*0.5,0,x,0);g.addColorStop(0,'rgba(255,140,60,0)');g.addColorStop(1,l%2?'rgba(120,200,255,0.9)':'rgba(255,150,70,0.9)');cx.strokeStyle=g;cx.lineWidth=2;cx.beginPath();cx.moveTo(x-sp*0.5,y);cx.lineTo(x,y);cx.stroke();cx.fillStyle='#e8f4ff';cx.fillRect(x-7,y-3,14,5);}}
  const hf=0.06+0.05*Math.sin(t*7)*Math.sin(t*2.3);cx.fillStyle='rgba(160,120,255,'+hf+')';cx.fillRect(290,40,170,400);}
 if(id==='garage'){for(let i=0;i<14;i++){const k=((t*1.3+i/14)%1);cx.fillStyle='rgba(255,'+(200-k*120|0)+',80,'+(1-k)+')';cx.fillRect(1210+Math.cos(i*2.1)*k*120,470-k*60+k*k*240,3,3);}
  cx.save();cx.translate(1080,282);for(let i=0;i<5;i++){cx.rotate(t*0.8+i);cx.strokeStyle='rgba(120,210,255,'+(0.18+0.08*i/5)+')';cx.lineWidth=3;cx.beginPath();cx.arc(0,0,60+i*22,0,2.2);cx.stroke();}cx.restore();}
 if(id==='end'){cx.save();cx.translate(590,140);for(let i=0;i<7;i++){cx.rotate(t*0.25+i*0.9);cx.strokeStyle='rgba(255,220,150,'+(0.12+i*0.02)+')';cx.lineWidth=4;cx.beginPath();cx.arc(0,0,40+i*28,0,1.6);cx.stroke();}cx.restore();
  for(const p of FXP){const y=(p.y-t*(15+p.s*30)+H*2)%H,x=p.x+Math.sin(t*0.7+p.p)*20;cx.fillStyle='rgba(255,215,120,'+(0.25+p.s*0.5)+')';cx.fillRect(x,y,2+p.s*2,2+p.s*2);}}
 // drifting fog band (all eras)
 const fg=cx.createLinearGradient(0,H*0.45,0,H*0.8);const fc=id==='west'?'230,180,120':id==='japan'?'200,180,230':id==='miami'?'255,120,200':id==='end'?'200,160,255':'170,190,210';fg.addColorStop(0,'rgba('+fc+',0)');fg.addColorStop(0.5,'rgba('+fc+','+(0.07+0.03*Math.sin(t*0.5))+')');fg.addColorStop(1,'rgba('+fc+',0)');cx.fillStyle=fg;cx.fillRect(0,H*0.45,W,H*0.35);
 cx.restore();}
// ---------- stage render ----------
function drawStage(){const d=S.def;const sh=S.shake;const shx=(Math.random()-0.5)*sh,shy=(Math.random()-0.5)*sh;
 const cov=S.cover?1:0;const cxo=(640-AIM.x)*0.035,cyo=(360-AIM.y)*0.025;
 cx.save();cx.translate(shx,shy+cov*30);
 // sky/far plate with parallax + slow drift
 drawBG(d.bg,cxo+Math.sin(T*0.07)*10,cyo,1.1+cov*0.03);
 cx.save();cx.translate(cxo*1.4,cyo*1.2);eraFX(d.id,T);
 // world (mid/foreground parallax)
 cx.translate(cxo*0.6,cyo*0.4);
 const list=[];for(const p of S.props)list.push({z:p.z,p});for(const e of S.ents)list.push({z:e.z,e});if(S.boss)list.push({z:S.boss.z,b:S.boss});
 list.sort((a,b)=>a.z-b.z);
 if(S.car)drawCar();
 for(const o of list){if(o.p)drawProp(o.p);else if(o.e)drawEnt(o.e);else drawBoss(o.b);}
 for(const e of S.ents)if(e.st==='aim')drawRing(entGeom(e).x,entGeom(e).y-entGeom(e).h*0.6,e.t/e.aimT,entGeom(e).h);
 if(S.boss&&!S.boss.dead){const g=bossGeom(S.boss);for(const r of S.boss.rings)if(r.t>0)drawRing(g.x+r.ox*g.w,g.y-g.h+r.oy*g.h,r.t/r.aim,260);}
 // bullets
 for(const q of S.bullets){const p=bulletPos(q);cx.strokeStyle=S.btOn>0?'rgba(140,240,255,0.7)':'rgba(255,190,90,0.7)';cx.lineWidth=Math.max(1,p.r*0.4);cx.beginPath();q.trail.forEach((t,i)=>i?cx.lineTo(t[0],t[1]):cx.moveTo(t[0],t[1]));cx.stroke();
  const g=cx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*1.8);g.addColorStop(0,'#fff');g.addColorStop(0.35,S.btOn>0?'#7ff':'#ffb347');g.addColorStop(1,'rgba(255,120,40,0)');cx.fillStyle=g;cx.beginPath();cx.arc(p.x,p.y,p.r*1.8,0,6.28);cx.fill();
  if(S.btOn>0){cx.strokeStyle='rgba(120,255,255,'+(0.5+0.4*Math.sin(T*20))+')';cx.lineWidth=2;cx.beginPath();cx.arc(p.x,p.y,p.r+20,0,6.28);cx.stroke();}}
 for(const p of S.parts){cx.globalAlpha=1-p.t/p.life;cx.fillStyle=p.col;cx.fillRect(p.x,p.y,p.s,p.s);}cx.globalAlpha=1;
 cx.restore();cx.restore();
 // muzzle flash at crosshair
 if(S.muzzle>0){const g=cx.createRadialGradient(AIM.x,AIM.y,0,AIM.x,AIM.y,60);g.addColorStop(0,'rgba(255,250,220,0.9)');g.addColorStop(1,'rgba(255,200,80,0)');cx.fillStyle=g;cx.fillRect(AIM.x-60,AIM.y-60,120,120);}
 // cover overlay (painted foreground ledge)
 if(S.cover){const g=cx.createLinearGradient(0,H*0.45,0,H);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(0.35,'rgba(8,8,14,0.85)');g.addColorStop(1,'rgba(4,4,8,0.98)');cx.fillStyle=g;cx.fillRect(0,H*0.45,W,H*0.55);txt(S.ammo<6?'RELOADING':'IN COVER',640,600,44,'#9fe8ff','center',FONT_T,6);}
 // slow-mo post FX
 if(S.btOn>0||S.btFlash>0){const a=S.btOn>0?1:S.btFlash;cx.save();cx.setTransform(1,0,0,1,0,0);cx.globalAlpha=0.22*a;cx.globalCompositeOperation='screen';cx.drawImage(cv,-8*SC,0);cx.drawImage(cv,8*SC,0);cx.restore();cx.save();cx.setTransform(SC,0,0,SC,0,0);
  cx.fillStyle='rgba(30,140,255,'+(0.14*a)+')';cx.fillRect(0,0,W,H);const vg=cx.createRadialGradient(640,360,200,640,360,760);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,30,60,'+0.65*a+')');cx.fillStyle=vg;cx.fillRect(0,0,W,H);
  if(S.btFlash>0){const r=(1-S.btFlash)*900;cx.strokeStyle='rgba(200,255,255,'+S.btFlash+')';cx.lineWidth=10*S.btFlash;cx.beginPath();cx.arc(640,360,r,0,6.28);cx.stroke();}
  if(S.btOn>0){cx.save();cx.translate(640,360);cx.rotate(-T*0.6);cx.strokeStyle='rgba(150,240,255,0.15)';cx.lineWidth=3;for(let i=0;i<12;i++){cx.rotate(Math.PI/6);cx.beginPath();cx.moveTo(300,0);cx.lineTo(330,0);cx.stroke();}cx.beginPath();cx.arc(0,0,315,0,6.28);cx.stroke();cx.restore();txt('BULLET TIME',640,120,40,'rgba(160,250,255,0.9)','center',FONT_T,5);}
  cx.restore();}
 if(S.dmgFlash>0){cx.fillStyle='rgba(255,20,40,'+0.4*S.dmgFlash+')';cx.fillRect(0,0,W,H);}
 if(G.hp===1&&!S.cover){cx.fillStyle='rgba(255,0,40,'+(0.08+0.06*Math.sin(T*6))+')';cx.fillRect(0,0,W,H);}
 drawHUD();}
function drawRing(x,y,k,h){k=clamp(k,0,1);const r=lerp(Math.max(70,h*0.42),16,k);const col=k<0.6?'255,220,60':'255,60,60';const blink=k>0.75&&Math.floor(T*16)%2;cx.strokeStyle='rgba('+col+','+(blink?0.5:0.95)+')';cx.lineWidth=3+k*3;cx.beginPath();cx.arc(x,y,r,0,6.28);cx.stroke();
 cx.save();cx.translate(x,y);cx.rotate(T*3);for(let i=0;i<4;i++){cx.rotate(Math.PI/2);cx.beginPath();cx.moveTo(r+4,0);cx.lineTo(r+14,0);cx.stroke();}cx.restore();cx.fillStyle='rgba('+col+',0.9)';cx.beginPath();cx.arc(x,y,4,0,6.28);cx.fill();}
function drawProp(p){const r=propRect(p);if(!r.f||!r.f.im.complete)return;cx.fillStyle='rgba(0,0,0,0.35)';cx.beginPath();cx.ellipse(p.x,r.y+r.h-4,r.w*0.5,r.h*0.06,0,0,6.28);cx.fill();cx.drawImage(r.f.im,r.x,r.y,r.w,r.h);}
function entFrame(e){if(e.kind==='c')return e.fi;switch(e.st){case 'aim':return 1;case 'fire':return 2;case 'hit':return 3;case 'dead':return e.t<0.16?3:4;default:return 0;}}
function drawEnt(e){const g=entGeom(e);const f=fr(e.key,entFrame(e));if(!f||!f.im.complete)return;const w=f.w*g.s,h=f.h*g.s;
 let a=1;if(e.st==='enter'&&e.mode==='warp')a=clamp(e.t/0.45,0,1);if(e.st==='dead'&&e.t>1.0)a=1-(e.t-1.0)/0.5;
 cx.fillStyle='rgba(0,0,0,'+0.35*a+')';cx.beginPath();cx.ellipse(g.x,groundY(e.z),g.w*0.32,g.h*0.035,0,0,6.28);cx.fill();
 cx.save();if(e.mode==='pop'&&e.st==='enter'){cx.beginPath();cx.rect(g.x-w,0,w*2,groundY(e.z));cx.clip();}
 cx.globalAlpha=a;let fx=g.x;if(e.kind==='c'&&e.vx<0){cx.translate(g.x,0);cx.scale(-1,1);fx=0;}
 if(e.st==='enter'&&e.mode==='warp'){for(let i=0;i<6;i++){const sy=g.y-h+i*h/6;cx.drawImage(f.im,0,f.h*i/6,f.w,f.h/6,fx-w/2+(Math.random()-0.5)*30*(1-a),sy,w,h/6);}}
 else cx.drawImage(f.im,fx-w/2,g.y-h,w,h);
 if(e.flash>0){cx.globalAlpha=0.55;cx.globalCompositeOperation='lighter';cx.drawImage(f.im,fx-w/2,g.y-h,w,h);}
 cx.restore();
 if(e.kind==='c'&&e.hitOnce){txt('!',g.x,g.y-g.h-10,40,'#ff4d4d','center',FONT_T,5);}}
function drawBossBase(b){const g=bossGeom(b);const k=b.hp/b.max;const fi=k>0.66?0:k>0.33?1:2;const f=fr(b.key,fi);if(!f||!f.im.complete)return;const w=f.w*g.s,h=f.h*g.s;
 let a=1;if(b.dead)a=clamp(1-b.deadT/2,0,1);cx.save();cx.globalAlpha=a;if(!S.def.hover){cx.fillStyle='rgba(0,0,0,0.4)';cx.beginPath();cx.ellipse(g.x,g.y,w*0.4,16,0,0,6.28);cx.fill();}
 const jx=b.dead?(Math.random()-0.5)*14:0;cx.drawImage(f.im,g.x-w/2+jx,g.y-h,w,h);if(b.flash>0){cx.globalAlpha=0.5;cx.globalCompositeOperation='lighter';cx.drawImage(f.im,g.x-w/2,g.y-h,w,h);}cx.restore();
 if(!b.dead){const wp=S.def.weak[b.weak];const wx=g.x+(wp[0]-0.5)*g.w,wy=g.y-g.h+wp[1]*g.h;const wr=Math.max(28,g.h*0.075);const p=0.5+0.5*Math.sin(T*8);
  cx.strokeStyle='rgba(255,80,220,'+(0.6+0.4*p)+')';cx.lineWidth=3;cx.beginPath();cx.arc(wx,wy,wr+p*6,0,6.28);cx.stroke();cx.save();cx.translate(wx,wy);cx.rotate(T*2);for(let i=0;i<3;i++){cx.rotate(2.094);cx.beginPath();cx.moveTo(wr+10,0);cx.lineTo(wr+22,-6);cx.lineTo(wr+22,6);cx.closePath();cx.fillStyle='rgba(255,80,220,0.9)';cx.fill();}cx.restore();}}
function drawCar(){const c=S.car;const f=fr('car',carFrame());if(!f||!f.im.complete)return;const w=f.w*c.sc,h=f.h*c.sc;cx.fillStyle='rgba(0,0,0,0.5)';cx.beginPath();cx.ellipse(c.x,c.y-6,w*0.5,24,0,0,6.28);cx.fill();cx.drawImage(f.im,c.x-w/2,c.y-h,w,h);
 const x0=c.x-c.w/2,y0=c.y-c.h;for(const p of c.parts){const r=p.r;const px=x0+(r[0]+r[2])/2*c.w,py=y0+(r[1]+r[3])/2*c.h;if(p.down){for(let i=0;i<3;i++){const k=((T*0.6+i/3+r[0])%1);cx.globalAlpha=0.35*(1-k);cx.fillStyle='#222';cx.beginPath();cx.arc(px+Math.sin(T+i)*10,py-k*160,10+k*40,0,6.28);cx.fill();}cx.globalAlpha=1;if(Math.random()<0.3)burst(px,py,'#ffb347',1,160);}
  else{const k=p.hp/8;cx.strokeStyle='rgba(120,230,255,'+(0.25+0.25*Math.sin(T*5+r[0]*9))+')';cx.lineWidth=2;cx.strokeRect(x0+r[0]*c.w,y0+r[1]*c.h,(r[2]-r[0])*c.w,(r[3]-r[1])*c.h);cx.fillStyle='rgba(120,230,255,0.8)';cx.fillRect(x0+r[0]*c.w,y0+r[1]*c.h-6,(r[2]-r[0])*c.w*k,3);}}}
// ---------- HUD ----------
const BTN={cover:{x:1172,y:612,r:72},bt:{x:104,y:612,r:62},fs:{x:1236,y:40,r:26},pause:{x:1180,y:40,r:26}};
function drawHUD(){const st=S.st;
 // score
 cx.fillStyle='rgba(0,0,0,0.45)';rrect(18,14,330,92,14);cx.fill();txt(String(Math.round(G.score)).padStart(8,'0'),32,66,50,'#fff','left',FONT_T);txt((S.daily?'DAILY  ':'')+S.def.place+'  '+S.def.year,32,94,18,S.def.pal[1],'left',FONT_T);
 // combo
 const m=S.mult;cx.fillStyle='rgba(0,0,0,0.45)';rrect(520,14,240,74,14);cx.fill();txt('x'+m,560,70,m>=8?58:50,m>=6?'#ff3fa4':m>=3?'#ffd166':'#fff','center',FONT_T,4);txt('COMBO',660,40,18,'#bcd','center',FONT_T);
 const seg=S.chain%3;for(let i=0;i<3;i++){cx.fillStyle=m>=8?'#ff3fa4':i<seg?'#ffd166':'rgba(255,255,255,0.18)';cx.fillRect(612+i*42,52,36,10);}txt(S.chain+' HITS',660,82,14,'#9ab','center',FONT_T);
 // timer
 if(S.daily)txt(Math.max(0,90-S.t).toFixed(1),880,64,44,'#fff','center',FONT_T,5);else if(S.def.bonus)txt(Math.max(0,30-S.t).toFixed(1),880,64,44,'#ffd166','center',FONT_T,5);else txt(Math.floor(S.t)+'s',880,58,26,'#cde','center',FONT_T,4);
 // boss bar
 if(S.boss&&!S.boss.dead){const k=S.boss.hp/S.boss.max;cx.fillStyle='rgba(0,0,0,0.55)';rrect(340,118,600,30,8);cx.fill();const gr=cx.createLinearGradient(340,0,940,0);gr.addColorStop(0,'#ff3fa4');gr.addColorStop(1,'#ffd166');cx.fillStyle=gr;cx.fillRect(346,124,588*k,18);txt(S.def.bossName,640,168,22,'#fff','center',FONT_T,4);txt('SPEED x'+clamp(2-S.bossT/40,0.5,2).toFixed(2),940,168,16,'#ffd166','right',FONT_T,3);}
 // bullet time button
 const b=BTN.bt,k=S.bt/100;cx.fillStyle='rgba(0,0,0,0.5)';cx.beginPath();cx.arc(b.x,b.y,b.r,0,6.28);cx.fill();cx.strokeStyle=S.bt>=100?'rgba(120,255,255,'+(0.6+0.4*Math.sin(T*8))+')':'#38c8ff';cx.lineWidth=9;cx.beginPath();cx.arc(b.x,b.y,b.r-6,-1.57,-1.57+6.283*(S.btOn>0?S.btOn/5:k));cx.stroke();
 txt(S.btOn>0?S.btOn.toFixed(1):S.bt>=100?'READY':Math.floor(S.bt)+'%',b.x,b.y+6,S.bt>=100?24:22,'#e9fbff','center',FONT_T);txt('BULLET TIME',b.x,b.y+b.r+22,15,'#9fe8ff','center',FONT_T,3);txt('[F]',b.x,b.y-24,13,'#7ab','center',FONT_T);
 // cover button + ammo + hearts
 const c=BTN.cover;cx.fillStyle=S.cover?'rgba(56,200,255,0.55)':'rgba(0,0,0,0.5)';cx.beginPath();cx.arc(c.x,c.y,c.r,0,6.28);cx.fill();cx.strokeStyle='#9fe8ff';cx.lineWidth=3;cx.stroke();txt('COVER',c.x,c.y+4,24,'#fff','center',FONT_T);txt('RELOAD',c.x,c.y+26,13,'#9fe8ff','center',FONT_T);
 for(let i=0;i<6;i++){const x=1080-i*20,y=690;cx.fillStyle=i<S.ammo?'#ffd166':'rgba(255,255,255,0.15)';rrect(x-6,y-30,12,30,4);cx.fill();}
 if(S.ammo===0&&!S.cover&&Math.floor(T*4)%2)txt('RELOAD!',640,560,50,'#ff4d4d','center',FONT_T,6);
 for(let i=0;i<5;i++){const x=1110-i*36,y=520;cx.fillStyle=i<G.hp?'#ff3b5c':'rgba(255,255,255,0.15)';cx.beginPath();cx.moveTo(x,y+10);cx.bezierCurveTo(x-18,y-6,x-8,y-18,x,y-8);cx.bezierCurveTo(x+8,y-18,x+18,y-6,x,y+10);cx.fill();}
 // fullscreen + pause
 drawFSBtn();
 // pops
 for(const p of S.pops){const a=1-p.t/1.1;cx.globalAlpha=a;const y=p.y-p.t*70;if(p.label)txt(p.label,p.x,y-30,p.small?16:22,p.col,'center',FONT_T,4);txt(p.txt,p.x,y,p.small?22:30,p.col,'center',FONT_T,5);}cx.globalAlpha=1;
 if(BAN){const a=Math.min(1,BAN.t*3,(BAN.max-BAN.t)*4);cx.globalAlpha=a;cx.fillStyle='rgba(0,0,0,0.55)';cx.fillRect(0,300,W,120);chromaTxt(BAN.a,640,372,60,'center');txt(BAN.b,640,404,22,'#ffd166','center',FONT_T);cx.globalAlpha=1;}
 if(S.phase==='intro'){chromaTxt('ACTION!',640,380,90,'center',FONT_T,Math.min(1,S.phaseT*3));}}
function drawFSBtn(){const f=BTN.fs;cx.fillStyle='rgba(0,0,0,0.5)';cx.beginPath();cx.arc(f.x,f.y,f.r,0,6.28);cx.fill();cx.strokeStyle='#fff';cx.lineWidth=3;const s=9;cx.beginPath();
 for(const [sx,sy] of [[-1,-1],[1,-1],[1,1],[-1,1]]){cx.moveTo(f.x+sx*s,f.y+sy*(s-6));cx.lineTo(f.x+sx*s,f.y+sy*s);cx.lineTo(f.x+sx*(s-6),f.y+sy*s);}cx.stroke();}
function drawCross(){const x=AIM.x,y=AIM.y;let over=false;if(SCR==='play'&&S){for(const e of S.ents)if(e.kind==='e'&&e.st!=='dead'&&hitEnt(e,x,y))over=true;}
 const col=S&&S.btOn>0&&SCR==='play'?'#7ff8ff':over?'#ff4d5e':'#ffffff';cx.strokeStyle='rgba(0,0,0,0.6)';cx.lineWidth=5;cx.beginPath();cx.arc(x,y,22,0,6.28);cx.stroke();cx.strokeStyle=col;cx.lineWidth=2.5;cx.beginPath();cx.arc(x,y,22,0,6.28);cx.stroke();
 cx.beginPath();for(const [a,b] of [[1,0],[-1,0],[0,1],[0,-1]]){cx.moveTo(x+a*12,y+b*12);cx.lineTo(x+a*32,y+b*32);}cx.stroke();cx.fillStyle=col;cx.fillRect(x-2,y-2,4,4);}
// ---------- comics ----------
const CM=['boss_end',0],CM2=['boss_end',2];
const H0=['hero2',0],H1=['hero2',1],H2=['hero2',2],H3=['hero2',3];
const COMICS={
 prologue:[[{bg:'future',f:0.5,z:0.7,tint:'rgba(20,40,90,0.25)',caps:['2049. A rain-soaked city that never sleeps.','Me? Detective Jack Kane. I don\u2019t sleep either.'],ch:[H0,'r']},
            {bg:'lab',f:0.15,z:0.6,caps:['A tip-off: the lab of a thief they call THE CLOCKMAKER.'],ch:[CM,'l'],say:'You\u2019re late, detective. How fitting.'},
            {bg:'lab',f:0.6,z:0.55,caps:['He\u2019d stolen the CHRONO-CORE: a pocket watch that tears holes in time.'],ch:[H1,'r'],wide:1}],
           [{bg:'end',f:0.4,z:0.6,caps:['He jumped through a time rift. I grabbed his broken prototype: the CHRONO-CUFF.'],ch:[H2,'l'],say:'Not tonight, Clockmaker!'},
            {bg:'end',f:0.6,z:0.5,tint:'rgba(0,120,200,0.2)',caps:['The cuff follows his rift trail. It also slows time for a few seconds: my BULLET TIME.','Catch: each jump only reaches the next rift. Clear the era, grab his stolen core fragment, and the next rift opens.'],ch:[H1,'r']}]],
 a0:[[{bg:'chicago',f:0.5,z:0.8,caps:['Fragment one. The cuff hums. The next rift is open.','Chicago, 1929. Rain again. Some things never change.'],ch:[H0,'r']}]],
 a1:[[{bg:'japan',f:0.5,z:0.8,caps:['Big Sal folded like a cheap suit.','The trail bent east. Four centuries back.'],ch:[H1,'r']}]],
 a2:[[{bg:'rome',f:0.5,z:0.8,caps:['Kurogane\u2019s crystal: fragment three.','The rift threw me west and way back. I heard the crowd before I saw the sand.'],ch:[H0,'r']}]],
 a3:[[{bg:'pirate',f:0.4,z:0.8,caps:['Rome loves a winner. I didn\u2019t stay for the parade.','1715. The rift dropped me on a deck in the middle of a hurricane.'],ch:[H2,'r'],say:'Who brings an elephant to a gunfight?'}]],
 a4:[[{bg:'garage',f:0.4,z:0.8,caps:['The rift flickered. I landed home: 2049, in HIS garage.','The cuff needs 30 seconds to recharge.','His car was sitting right there. I needed to blow off steam.'],ch:[H2,'r'],say:'Nice ride. Shame about it.'}]],
 a5:[[{bg:'london',f:0.5,z:0.8,caps:['Cuff\u2019s charged. The trail ran back through London, 1888.','Fog, gaslight, and a genius on the Clockmaker\u2019s payroll.'],ch:[H1,'r']}]],
 a6:[[{bg:'egypt',f:0.5,z:0.8,caps:['The walker went down hard. Fragment six.','Next jump: 1320 BC. A tomb nobody was supposed to open.'],ch:[H0,'r']}]],
 a7:[[{bg:'miami',f:0.4,z:0.8,caps:['Three thousand years of dust in my coat.','Next stop: neon, sunburn and synthesizers.'],ch:[H0,'r']}]],
 a8:[[{bg:'future',f:0.5,z:0.8,caps:['Fragment eight. One more out there.','2187. The city of tomorrow, owned by a thief.'],ch:[H1,'r']}]],
 a9:[[{bg:'end',f:0.5,z:0.8,caps:['Nine fragments. The Chrono-Core is screaming.','He\u2019s gone where nothing ticks: the End of Time.','He wants to rewrite history. I want my coat dry.'],ch:[H1,'r'],ch2:[CM,'l']}]],
 epilogue:[[{bg:'end',f:0.5,z:0.6,caps:['The Core shattered. Time snapped back like a rubber band.'],ch:[CM2,'l']},
            {bg:'future',f:0.5,z:0.6,tint:'rgba(20,40,90,0.3)',caps:['2049. The same rainy night. One second after I left.'],ch:[H3,'r'],say:'Clockmaker\u2019s off the clock. Case closed.'}]],
};
const LAY={1:[[24,24,1232,672]],2:[[24,24,610,672],[646,24,610,672]],3:[[24,24,610,330],[646,24,610,330],[24,366,1232,330]]};
let COM=null; // {key,page,shown,t,next}
let HALF=null;function halftone(){const c=document.createElement('canvas');c.width=c.height=8;const g=c.getContext('2d');g.fillStyle='rgba(0,0,0,0.22)';g.beginPath();g.arc(4,4,1.4,0,6.28);g.fill();HALF=cx.createPattern(c,'repeat');}
function panelLayout(p,r){const [x,y,w,h]=r;const capW=p.say?w/2-36:w-40;let lines=[];p.caps.forEach(c=>lines=lines.concat(wrap(c,capW-28,26)));lines=lines.slice(0,8);
 const capH=lines.length*30+22;let sayLines=p.say?wrap(p.say,w/2-70,26):[];const sayH=sayLines.length*30+26;const band=Math.max(capH,p.say?sayH+26:0);
 const chars=[];const avail=h-band-30;
 for(const c of [p.ch,p.ch2]){if(!c)continue;const [key,i]=c[0];const f=fr(key,i);if(!f)continue;const boss=key.indexOf('hero')<0;const srcH=boss?f.h*0.55:f.h;let dh=avail;let dw=f.w*dh/srcH;if(dw>w*0.55){dw=w*0.55;dh=dw*srcH/f.w;}
  const dx=c[1]==='r'?x+w-dw-16:x+16;const dy=y+h-dh;chars.push({f,boss,srcH,dx,dy,dw,dh,side:c[1],face:[dx+dw*0.15,dy,dw*0.7,dh*(boss?0.36:0.42)]});}
 const capSide=p.say&&chars[0]&&chars[0].side==='l'?'r':'l';
 const cap={x:capSide==='l'?x+16:x+w-capW-16,y:y+14,w:capW,h:capH,lines};
 let say=null;if(p.say){const sp=chars[0];const sw=w/2-40;say={x:sp.side==='l'?x+20:x+w-sw-20,y:y+14,w:sw,h:sayH,lines:sayLines,tx:sp.dx+sp.dw/2,ty:sp.dy-6};}
 return {cap,say,chars};}
function drawPanel(p,r,a){const [x,y,w,h]=r;const L=panelLayout(p,r);cx.save();cx.globalAlpha=a;cx.beginPath();cx.rect(x,y,w,h);cx.clip();
 const im=IMG['bg_'+p.bg+'.webp'];if(im&&im.complete){const ar=w/h;let sw=1920*p.z,sh=sw/ar;if(sh>1080){sh=1080;sw=sh*ar;}if(sw>1920){sw=1920;sh=sw/ar;}const sx=p.f*(1920-sw),sy=0.5*(1080-sh);cx.drawImage(im,sx,sy,sw,sh,x,y,w,h);}
 if(p.tint){cx.fillStyle=p.tint;cx.fillRect(x,y,w,h);}const vg=cx.createLinearGradient(0,y,0,y+h);vg.addColorStop(0,'rgba(0,0,0,0.25)');vg.addColorStop(1,'rgba(0,0,0,0.5)');cx.fillStyle=vg;cx.fillRect(x,y,w,h);
 for(const c of L.chars){cx.drawImage(c.f.im,0,0,c.f.w,c.srcH,c.dx,c.dy,c.dw,c.dh);}
 if(HALF){cx.fillStyle=HALF;cx.fillRect(x,y,w,h);}
 const c=L.cap;cx.fillStyle='#ffe9a8';cx.fillRect(c.x,c.y,c.w,c.h);cx.strokeStyle='#111';cx.lineWidth=3;cx.strokeRect(c.x,c.y,c.w,c.h);c.lines.forEach((l,i)=>txt(l,c.x+14,c.y+38+i*30,26,'#141414','left',FONT_C));
 if(L.say){const s=L.say;cx.fillStyle='#fff';rrect(s.x,s.y,s.w,s.h,22);cx.fill();cx.stroke();const bx=clamp(s.tx,s.x+40,s.x+s.w-40);cx.beginPath();cx.moveTo(bx-16,s.y+s.h-2);cx.lineTo(clamp(s.tx,bx-60,bx+60),Math.min(s.ty,s.y+s.h+34));cx.lineTo(bx+16,s.y+s.h-2);cx.closePath();cx.fill();cx.stroke();cx.fillStyle='#fff';cx.fillRect(bx-14,s.y+s.h-6,28,6);
  s.lines.forEach((l,i)=>txt(l,s.x+s.w/2,s.y+40+i*30,26,'#111','center',FONT_C));}
 cx.restore();cx.save();cx.globalAlpha=a;cx.strokeStyle='#000';cx.lineWidth=8;cx.strokeRect(x,y,w,h);cx.strokeStyle='#f2efe6';cx.lineWidth=2;cx.strokeRect(x+5,y+5,w-10,h-10);cx.restore();return L;}
function comicRects(){if(!COM)return null;const pg=COMICS[COM.key][COM.page];const lay=LAY[pg.length];const out=[];pg.forEach((p,i)=>{const L=panelLayout(p,lay[i]);out.push({cap:[L.cap.x,L.cap.y,L.cap.w,L.cap.h],say:L.say?[L.say.x,L.say.y,L.say.w,L.say.h]:null,faces:L.chars.map(c=>c.face)});});return out;}
function startComic(key,next){COM={key,page:0,shown:1,t:0,next};go('comic');}
function comicAdvance(){const pg=COMICS[COM.key][COM.page];if(COM.shown<pg.length){COM.shown++;COM.t=0;sfx('ui');return;}if(COM.page<COMICS[COM.key].length-1){COM.page++;COM.shown=1;COM.t=0;glitch(0.4);return;}const n=COM.next;COM=null;n();}
function drawComic(dt){COM.t+=dt;cx.fillStyle='#0b0a10';cx.fillRect(0,0,W,H);const pg=COMICS[COM.key][COM.page];const lay=LAY[pg.length];
 for(let i=0;i<COM.shown;i++){const a=i===COM.shown-1?clamp(COM.t*3,0,1):1;drawPanel(pg[i],lay[i],a);}
 if(Math.floor(T*2)%2)txt('TAP \u25B6',1250,712,18,'#ffe9a8','right',FONT_T);}
// ---------- glitch transition ----------
let GLT=0,GLMAX=0;function glitch(t){GLT=GLMAX=t;sfx('glitch');}
function drawGlitch(){if(GLT<=0)return;const k=GLT/GLMAX;cx.save();cx.setTransform(1,0,0,1,0,0);const hh=cv.height;for(let i=0;i<12;i++){const y=Math.random()*hh,h=hh*(0.02+Math.random()*0.06),o=(Math.random()-0.5)*cv.width*0.12*k;cx.drawImage(cv,0,y,cv.width,h,o,y,cv.width,h);}cx.restore();
 cx.fillStyle='rgba(255,40,140,'+0.25*k+')';cx.fillRect(0,Math.random()*H,W,8+Math.random()*20);cx.fillStyle='rgba(40,230,255,'+0.25*k+')';cx.fillRect(0,Math.random()*H,W,6+Math.random()*16);}
// ---------- screens ----------
let SCR='load',SCRT=0,UI=[],paused=false,NEXT=null,NAME={l:[0,0,0],i:0},BOARD='story',LASTPOS=-1;
function go(s){SCR=s;SCRT=0;UI=[];if(s==='title'||s==='diff'||s==='how'||s==='board')musicPlay('title');}
function button(x,y,w,h,label,fn,opt){opt=opt||{};const hov=AIM.x>x&&AIM.x<x+w&&AIM.y>y&&AIM.y<y+h;cx.fillStyle=hov?'rgba(56,200,255,0.35)':'rgba(8,10,20,0.72)';rrect(x,y,w,h,12);cx.fill();cx.strokeStyle=opt.col||(hov?'#7ff8ff':'rgba(255,255,255,0.5)');cx.lineWidth=2;cx.stroke();
 txt(label,x+w/2,y+h/2+(opt.size||28)*0.36,opt.size||28,opt.col||'#fff','center',FONT_T);if(opt.sub)txt(opt.sub,x+w/2,y+h-10,15,'#9fe8ff','center',FONT_T);UI.push({x,y,w,h,fn});}
function startStory(diff){newRun('story',diff);startComic('prologue',()=>toCard(0));}
function startDaily(){newRun('daily',1);const R=rng(G.seed);const pool=[0,1,2,3,4,6,7,8,9];for(let i=pool.length-1;i>0;i--){const j=Math.floor(R()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
 G.dailyOrder=pool.slice(0,3);toCard(-1);}
let CARD=null;function toCard(i){CARD={i};glitch(0.8);go('card');}
function beginPlay(){pending=[];if(CARD.i<0)stageInit(0,{order:G.dailyOrder});else stageInit(CARD.i);if(Q.has('bt'))S.bt=100;go('play');glitch(0.5);}
function afterStageBase(){const i=S.idx;if(i>=STAGES.length-1){startComic('epilogue',()=>go('final'));finishRun(false);return;}startComic('a'+i,()=>toCard(i+1));}
function drawTitle(){drawBG('end',Math.sin(T*0.1)*14,0,1.12);eraFX('end',T);cx.fillStyle='rgba(5,4,12,0.55)';cx.fillRect(0,0,W,H);
 const h=fr('hero2',1),c=fr('boss_end',0);if(h&&h.im.complete){cx.globalAlpha=0.95;cx.drawImage(h.im,-30,H-560,h.w*560/h.h,560);}if(c&&c.im.complete){cx.globalAlpha=0.85;const ch=600;cx.drawImage(c.im,0,0,c.w,c.h*0.8,W-c.w*ch/(c.h*0.8)+10,H-ch,c.w*ch/(c.h*0.8),ch);}cx.globalAlpha=1;
 const j=Math.random()<0.05?(Math.random()-0.5)*20:0;chromaTxt('BULLET TIME',640+j,200,150,'center');txt('THE CHRONO-CUFF CASE',640,248,28,'#ffd166','center',FONT_T,4);
 button(470,300,340,64,'STORY MODE',()=>{go('diff');},{sub:''});button(470,378,340,64,'DAILY CHALLENGE',()=>startDaily());txt('90 SECONDS \u00b7 SAME RUN FOR EVERYONE TODAY',640,462,14,'#9fe8ff','center',FONT_T);
 button(470,476,165,54,'HOW TO PLAY',()=>go('how'),{size:20});button(645,476,165,54,'HIGH SCORES',()=>{BOARD='story';go('board');},{size:20});
 txt('CLICK / TAP TO SHOOT \u00b7 RIGHT-CLICK OR HOLD COVER TO RELOAD \u00b7 F = BULLET TIME',640,700,16,'#cde','center',FONT_T);drawFSBtn();UI.push({x:1210,y:14,w:52,h:52,fn:toggleFS});}
function drawDiff(){drawBG('future',0,0,1.1);cx.fillStyle='rgba(5,4,12,0.7)';cx.fillRect(0,0,W,H);chromaTxt('CHOOSE YOUR BADGE',640,110,64,'center');
 const info=[['Slower shots, longer lock-on rings.','Score x1'],['The real deal. Faster draw.','Score x1.5'],['No mercy. Blink and you\u2019re history.','Score x2.25']];
 DIFFS.forEach((d,i)=>{const x=90+i*380;button(x,190,340,330,'',()=>startStory(i));txt(d.n,x+170,280,46,i===2?'#ff3fa4':i===1?'#ffd166':'#7ff8ff','center',FONT_T,4);txt(info[i][1],x+170,340,30,'#fff','center',FONT_T);
  wrap(info[i][0],280,24).forEach((l,k)=>txt(l,x+170,410+k*30,24,'#cde','center',FONT_C));});button(540,580,200,54,'BACK',()=>go('title'),{size:22});}
function drawHow(){drawBG('garage',0,0,1.1);cx.fillStyle='rgba(5,4,12,0.8)';cx.fillRect(0,0,W,H);chromaTxt('HOW TO PLAY',640,84,56,'center');
 const L=[['SHOOT','Click or tap anywhere. Your crosshair is your gun.'],['LOCK-ON RINGS','A shrinking ring means a shot is coming. Drop him before it closes.'],['COVER + RELOAD','Hold COVER, right-click or Space. You reload and dodge.'],['BULLET TIME','Headshots and combos fill the cuff. Press F or the button: time slows and you can shoot bullets out of the air.'],['CIVILIANS','Don\u2019t shoot them. -500 and your combo resets.'],['BOSSES','Hit the glowing weak point. Faster kills score more.']];
 L.forEach((r,i)=>{const y=128+i*68;txt(r[0],120,y+26,26,'#ffd166','left',FONT_T);wrap(r[1],760,22).forEach((l,k)=>txt(l,400,y+24+k*24,22,'#e8f2ff','left',FONT_C));});
 const sc=['KILL 100 \u00b7 HEADSHOT x2','COMBO UP TO x8 (MISS OR GET SHOT = RESET)','PARRY +250 \u00b7 CIVILIAN -500','STAGE: ACCURACY, TIME, NO-DAMAGE BONUSES','DIFFICULTY x1 / x1.5 / x2.25'];sc.forEach((s,i)=>txt(s,640,560+i*24,18,'#9fe8ff','center',FONT_T));
 button(540,668,200,44,'BACK',()=>go('title'),{size:20});}
function drawCard(){const d=CARD.i<0?STAGES[G.dailyOrder[0]]:STAGES[CARD.i];drawBG(d.bg,-SCRT*20,0,1.12);cx.fillStyle='rgba(0,0,0,'+(0.55-Math.min(0.3,SCRT*0.1))+')';cx.fillRect(0,0,W,H);
 const a=clamp(SCRT*2,0,1);if(CARD.i<0){chromaTxt('DAILY CHALLENGE',640,320,96,'center',FONT_T,a);txt(new Date().toDateString().toUpperCase()+' \u00b7 90 SECONDS',640,380,30,'#ffd166','center',FONT_T,4);}
 else{txt((d.bonus?'BONUS \u00b7 ':'ERA '+(CARD.i<4?CARD.i+1:CARD.i)+' \u00b7 ')+d.region,640,270,26,d.pal[1],'center',FONT_T,4);chromaTxt(d.place,640,370,d.place.length>16?78:104,'center',FONT_T,a);chromaTxt(d.year,640,470,90,'center',FONT_T,a);
  if(d.bonus)txt('DESTROY THE HYPERCAR IN 30 SECONDS',640,540,26,'#fff','center',FONT_T,4);}
 if(SCRT>2.6)beginPlay();}
function catRows(list){const sum=k=>list.reduce((a,s)=>a+(s[k]||0),0);return [['KILLS ('+sum('kills')+', '+sum('heads')+' HEADSHOTS)',sum('killPts')],['BULLETS PARRIED ('+sum('parries')+')',sum('parryPts')],['BOSS WEAK POINTS + SPEED',sum('bossPts')],['HYPERCAR PARTS + WRECK',sum('carPts')],['ACCURACY BONUS',sum('accBonus')],['TIME BONUS',sum('timeBonus')],['NO-DAMAGE BONUS',sum('ndBonus')],['CIVILIANS SHOT ('+sum('civ')+')',sum('civPts')]];}
function rankCol(r){return r[0]==='S'?'#ff3fa4':r==='A'?'#ffd166':r==='B'?'#7ff8ff':'#cde';}
function drawSResBase(){const st=G.stages[G.stages.length-1];drawBG(S.def.bg,0,0,1.1);cx.fillStyle='rgba(5,4,12,0.78)';cx.fillRect(0,0,W,H);chromaTxt(st.bonus?'BONUS CLEAR':'ERA CLEAR',640,90,64,'center');txt(st.name+' \u00b7 '+S.def.year,640,130,24,'#ffd166','center',FONT_T);
 const rows=catRows([st]);const k=clamp(SCRT*1.5,0,1);rows.forEach((r,i)=>{const y=190+i*44;txt(r[0],170,y,24,'#e8f2ff','left',FONT_T);txt(String(Math.round(r[1]*k)),800,y,26,r[1]<0?'#ff6b6b':'#fff','right',FONT_T);});
 txt('ACCURACY '+(st.acc*100).toFixed(1)+'%   MAX COMBO x'+st.maxMult+'   DAMAGE '+st.dmg,170,560,22,'#9fe8ff','left',FONT_T);txt('STAGE TOTAL '+st.total,170,600,30,'#ffd166','left',FONT_T);txt('RUN '+Math.round(G.score),800,600,30,'#fff','right',FONT_T);
 if(SCRT>0.8){txt('RANK',1040,210,30,'#cde','center',FONT_T);chromaTxt(st.rank,1040,400,220,'center');txt('+1 HEART',1040,460,22,'#ff6b8b','center',FONT_T);}
 if(SCRT>1)button(940,600,220,60,S&&S.idx<STAGES.length-1&&!S.daily?'NEXT ▶':'CONTINUE',()=>afterStage());}
function drawFinalBase(){drawBG(G.mode==='daily'?'end':'future',0,0,1.1);cx.fillStyle='rgba(5,4,12,0.82)';cx.fillRect(0,0,W,H);chromaTxt(G.over?'CASE COLD':G.mode==='daily'?'DAILY COMPLETE':'CASE CLOSED',640,78,60,'center');
 txt((G.mode==='daily'?'DAILY '+dailyKey():'STORY')+' \u00b7 '+G.D.n+' x'+G.D.m,640,112,22,'#ffd166','center',FONT_T);
 const rows=catRows(G.stages);rows.forEach((r,i)=>{const y=160+i*Math.min(32,330/Math.max(1,G.stages.length-1));txt(r[0],80,y,21,'#e8f2ff','left',FONT_T);txt(String(Math.round(r[1])),640,y,23,r[1]<0?'#ff6b6b':'#fff','right',FONT_T);});
 const acc=G.totalHits/Math.max(1,G.totalShots);txt('ACCURACY '+(acc*100).toFixed(1)+'%  \u00b7  BEST COMBO x'+Math.max(1,...G.stages.map(s=>s.maxMult||1)),80,488,21,'#9fe8ff','left',FONT_T);
 txt('FINAL SCORE',80,540,26,'#cde','left',FONT_T);txt(String(Math.round(G.score)),640,540,44,'#ffd166','right',FONT_T,4);
 G.stages.forEach((s,i)=>{const y=170+i*Math.min(44,320/Math.max(1,G.stages.length-1));txt(s.name+(s.invRank?' \u00b7 CLUES '+s.invRank:''),720,y,17,'#e8f2ff','left',FONT_T);txt(String(s.total),1080,y,20,'#fff','right',FONT_T);txt(s.rank,1150,y+2,30,rankCol(s.rank),'center',FONT_T,3);});
 txt('RUN GRADE',1040,600,22,'#cde','center',FONT_T);chromaTxt(G.grade||'-',1040,690,84,'center');
 if(SCRT>0.8)button(470,600,340,64,'CONTINUE',()=>{if(lbQualifies(G.mode,G.score)){NAME={l:[10,0,13],i:0};go('name');}else{BOARD=G.mode;LASTPOS=-1;go('board');}});}
function drawGameOver(){drawStage();cx.fillStyle='rgba(30,0,10,'+Math.min(0.8,SCRT)+')';cx.fillRect(0,0,W,H);chromaTxt("TIME'S UP, DETECTIVE",640,330,80,'center');txt('THE CLOCKMAKER GOT AWAY... THIS TIME.',640,390,26,'#ffd166','center',FONT_T);if(SCRT>1.2)button(490,460,300,60,'SEE THE FILE',()=>go('final'));}
const ABC='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function drawName(){drawBG('end',0,0,1.1);cx.fillStyle='rgba(5,4,12,0.8)';cx.fillRect(0,0,W,H);chromaTxt('NEW HIGH SCORE',640,120,70,'center');txt(String(Math.round(G.score)),640,180,40,'#ffd166','center',FONT_T);txt('ENTER YOUR INITIALS',640,236,24,'#cde','center',FONT_T);
 for(let i=0;i<3;i++){const x=470+i*120;button(x,270,100,50,'\u25B2',()=>{NAME.l[i]=(NAME.l[i]+1)%26;NAME.i=i;},{size:24});cx.fillStyle=NAME.i===i?'rgba(56,200,255,0.3)':'rgba(0,0,0,0.5)';rrect(x,330,100,110,12);cx.fill();txt(ABC[NAME.l[i]],x+50,418,84,'#fff','center',FONT_T);button(x,450,100,50,'\u25BC',()=>{NAME.l[i]=(NAME.l[i]+25)%26;NAME.i=i;},{size:24});}
 button(520,540,240,60,'SAVE',saveName);}
function saveName(){const n=NAME.l.map(i=>ABC[i]).join('');LASTPOS=lbAdd(G.mode,n,G.score,G.grade,G.D.n);BOARD=G.mode;go('board');}
function drawBoard(){drawBG('chicago',0,0,1.1);cx.fillStyle='rgba(5,4,12,0.82)';cx.fillRect(0,0,W,H);chromaTxt(BOARD==='daily'?'DAILY TOP 10':'STORY TOP 10',640,86,60,'center');if(BOARD==='daily')txt('SEED '+dailyKey()+' \u00b7 LOCAL, SIGNED',640,118,18,'#9fe8ff','center',FONT_T);else txt('LOCAL, SIGNED',640,118,18,'#9fe8ff','center',FONT_T);
 const a=lbLoad(BOARD);if(!a.length)txt('NO SCORES YET. GO MAKE HISTORY.',640,330,30,'#cde','center',FONT_T);
 a.forEach((e,i)=>{const y=170+i*42;const hl=i===LASTPOS&&BOARD===(G&&G.mode);if(hl){cx.fillStyle='rgba(255,209,102,0.2)';cx.fillRect(250,y-30,780,40);}txt((i+1)+'.',300,y,28,'#ffd166','right',FONT_T);txt(e.n,330,y,28,'#fff','left',FONT_T);txt(String(e.s),720,y,28,'#fff','right',FONT_T);txt(e.g||'',800,y,28,rankCol(e.g||'D'),'center',FONT_T);txt(e.d||'',1010,y,20,'#9ab','right',FONT_T);});
 button(330,640,280,56,BOARD==='daily'?'SHOW STORY':'SHOW DAILY',()=>{BOARD=BOARD==='daily'?'story':'daily';LASTPOS=-1;},{size:22});button(670,640,280,56,'TITLE',()=>go('title'),{size:22});}
function drawPauseBase(){cx.fillStyle='rgba(0,0,0,0.7)';cx.fillRect(0,0,W,H);chromaTxt('PAUSED',640,260,90,'center');button(490,320,300,60,'RESUME',()=>{paused=false;});button(490,400,300,60,'QUIT TO TITLE',()=>{paused=false;musicStop();go('title');});}
function drawLoad(){cx.fillStyle='#07060d';cx.fillRect(0,0,W,H);const k=toLoad?loaded/toLoad:0;chromaTxt('BULLET TIME',640,330,90,'center');cx.fillStyle='rgba(255,255,255,0.15)';cx.fillRect(440,380,400,8);cx.fillStyle='#38c8ff';cx.fillRect(440,380,400*k,8);
 if(assetsReady&&loaded>=toLoad&&toLoad>20&&document.fonts.check('20px Anton')){halftone();go('title');boot();}}
// ---------- input ----------
let coverPtr=null;
function toLogical(e){const r=cv.getBoundingClientRect();return {x:(e.clientX-r.left)*W/r.width,y:(e.clientY-r.top)*H/r.height};}

function toggleFS(){const d=document;try{if(!d.fullscreenElement&&!d.webkitFullscreenElement){const el=d.documentElement;(el.requestFullscreen?el.requestFullscreen({navigationUI:'hide'}):el.webkitRequestFullscreen&&el.webkitRequestFullscreen());setTimeout(()=>{try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock('landscape').catch(()=>{});}catch(e){}},200);}else{(d.exitFullscreen||d.webkitExitFullscreen).call(d);}}catch(e){}}
function inCirc(p,b){return Math.hypot(p.x-b.x,p.y-b.y)<b.r+6;}
cv.addEventListener('contextmenu',e=>e.preventDefault());
cv.addEventListener('pointerdown',e=>{e.preventDefault();audioInit();if(AC&&AC.state==='suspended')AC.resume();const p=toLogical(e);if(e.pointerType!=='mouse'||true){AIM.x=p.x;AIM.y=p.y;}
 if(SCR==='play'&&!paused&&S){if(inCirc(p,BTN.fs)){toggleFS();return;}if(inCirc(p,BTN.pause)){paused=true;return;}if(inCirc(p,BTN.bt)){startBT();return;}
  if(e.button===1){startBT();return;}if(inCirc(p,BTN.cover)||e.button===2){coverPtr=e.pointerId;setCover(true);return;}{const q=aimAssist(p.x,p.y-(e.pointerType==='touch'?SET.off:0),e.pointerType==='touch');AIM.x=q.x;AIM.y=q.y;shoot(q.x,q.y);}return;}
 for(const b of UI)if(p.x>b.x&&p.x<b.x+b.w&&p.y>b.y&&p.y<b.y+b.h){sfx('ui');b.fn();return;}
 advance();});
addEventListener('pointerup',e=>{if(e.pointerId===coverPtr){coverPtr=null;setCover(false);}});
addEventListener('pointercancel',e=>{if(e.pointerId===coverPtr){coverPtr=null;setCover(false);}});
cv.addEventListener('pointermove',e=>{const p=toLogical(e);AIM.x=clamp(p.x,0,W);AIM.y=clamp(p.y,0,H);});
function advance(){if(SCR==='inv'){invTap(AIM.x,AIM.y);return;}if(SCR==='comic')comicAdvance();else if(SCR==='card'&&SCRT>0.6)beginPlay();else if(SCR==='title'){}}
addEventListener('keydown',e=>{audioInit();if(e.repeat)return;const k=e.code;
 if(SCR==='play'){if(k==='Space'||k==='ShiftLeft'||k==='ShiftRight'){setCover(true);e.preventDefault();}else if(k==='KeyR'){quickReload();}else if(k==='KeyF')startBT();else if(k==='KeyP'||k==='Escape')paused=!paused;else if(k==='Enter'&&!paused)shoot(AIM.x,AIM.y);return;}
 if(SCR==='name'){if(/^Key[A-Z]$/.test(k)){NAME.l[NAME.i]=k.charCodeAt(3)-65;NAME.i=Math.min(2,NAME.i+1);}else if(k==='Backspace')NAME.i=Math.max(0,NAME.i-1);else if(k==='Enter')saveName();return;}
 if(k==='Enter'||k==='Space'){if(SCR==='title')go('diff');else if(SCR==='sres'&&SCRT>1)afterStage();else if(SCR==='final'&&SCRT>0.8)UI.length&&UI[UI.length-1].fn();else if(SCR==='gameover'&&SCRT>1.2)go('final');else advance();}});
addEventListener('keyup',e=>{if(SCR==='play'&&(e.code==='Space'||e.code==='ShiftLeft'||e.code==='ShiftRight')&&coverPtr==null)setCover(false);});
// ---------- bot (test autoplay) ----------
let botCd=0,botCov=0;
function botTick(dt){if(SCR!=='play'){botCd-=dt;if(botCd<=0){botCd=SCR==='card'?3:0.9;if(SCR==='title')go('diff');else if(SCR==='diff')startStory(+(Q.get('diff')||1));else if(SCR==='comic')comicAdvance();else if(SCR==='sres'&&SCRT>1)afterStage();else if(SCR==='gameover'&&SCRT>1.3)go('final');else if(SCR==='final'&&SCRT>1){if(lbQualifies(G.mode,G.score)){NAME={l:[1,14,19],i:0};saveName();}else go('board');}}return;}
 if(!S||S.phase==='intro'||S.phase==='done')return;
 if(botCov>0){botCov-=dt;if(botCov<=0)setCover(false);return;}
 botCd-=dt;if(botCd>0)return;botCd=0.17+Math.random()*0.08;
 if(S.ammo===0){setCover(true);botCov=0.45;return;}
 if(S.bt>=100&&(S.bullets.length>0||S.boss||S.ents.some(e=>e.st==='aim')))startBT();
 if(S.btOn>0&&S.bullets.length){const q=S.bullets.slice().sort((a,b)=>b.t/b.dur-a.t/a.dur)[0];const p=bulletPos(q);AIM.x=p.x;AIM.y=p.y;shoot(p.x,p.y);return;}
 if(S.btOn<=0&&S.bullets.some(q=>q.t/q.dur>0.55)&&Math.random()<0.8){setCover(true);botCov=0.4;return;}
 let tg=null,best=-1;for(const e of S.ents){if(e.kind!=='e'||e.st==='dead'||e.st==='enter')continue;const u=e.st==='aim'?1+e.t/e.aimT:e.z;if(u>best){best=u;tg=e;}}
 let x,y;if(tg){const g=entGeom(tg);const head=Math.random()<0.55;x=g.x+(Math.random()-0.5)*g.w*0.12;y=head?g.y-g.h*0.92:g.y-g.h*0.55;}
 else if(S.boss&&!S.boss.dead){const b=S.boss,g=bossGeom(b),wp=S.def.weak[b.weak];x=g.x+(wp[0]-0.5)*g.w;y=g.y-g.h+wp[1]*g.h;}
 else if(S.car){const c=S.car,p=c.parts.find(p=>!p.down);if(!p)return;x=c.x-c.w/2+(p.r[0]+p.r[2])/2*c.w;y=c.y-c.h+(p.r[1]+p.r[3])/2*c.h;}
 else return;
 if(Math.random()<0.07){x+=(Math.random()-0.5)*300;y+=(Math.random()-0.5)*200;}
 AIM.x=x;AIM.y=y;shoot(x,y);}
// ---------- loop ----------
let last=performance.now(),fpsA=60;
function frame(now){requestAnimationFrame(frame);let dt=Math.min(0.05,(now-last)/1000);last=now;fpsA=fpsA*0.95+(1/Math.max(0.001,dt))*0.05;
 let total=dt*SPEED;while(total>0){const d=Math.min(0.05,total);total-=d;step(d);}
 cx.setTransform(SC,0,0,SC,0,0);render(dt);musicTick();}
function step(dt){T+=dt;uxStep(dt);SCRT+=dt;if(GLT>0)GLT-=dt;if(BOT)botTick(dt);if(SCR==='play'&&S&&!paused)stageUpdate(dt);}
function render(dt){UI=[];switch(SCR){case 'load':drawLoad();break;case 'title':drawTitle();break;case 'diff':drawDiff();break;case 'how':drawHow();break;case 'comic':drawComic(dt);break;case 'card':drawCard();break;
 case 'play':drawStage();if(paused)drawPause();break;case 'sres':drawSRes();break;case 'final':drawFinal();break;case 'gameover':drawGameOver();break;case 'name':drawName();break;case 'board':drawBoard();break;case 'brand':drawBrand();break;case 'inv':drawInv(dt);break;case 'set':drawSet();break;}
 if(SCR!=='load')drawPost();drawGlitch();if(SCR!=='load')drawCross();}
function boot(){if(Q.has('brand')){go('brand');return;}const st=Q.get('stage');if(st!=null){newRun('story',+(Q.get('diff')||1));toCard(+st);}else if(Q.get('comic')){newRun('story',1);startComic(Q.get('comic'),()=>go('title'));}else if(Q.has('daily')){startDaily();}}
document.fonts&&document.fonts.load('20px Anton');document.fonts&&document.fonts.load('20px Bangers');
requestAnimationFrame(frame);
window.__BT={get diffInfo(){return {L:typeof LV==='function'?LV():0}},get scr(){return SCR},get S(){return S},get G(){return G},get fps(){return fpsA},comicRects,go,comicShow:(k,pg)=>{COM={key:k,page:pg,shown:COMICS[k][pg].length,t:5,next:()=>go('title')};SCR='comic';},comicKeys:()=>Object.keys(COMICS).map(k=>[k,COMICS[k].length]),shoot,startBT,STAGES,stageEnd,lbLoad,get submits(){return window.__BT_SUBMITS||0}};
// ===================== EXTENSION PASS: difficulty, bullet time 2.0, variants, VFX, brand, audio =====================
const MODES=[{n:'ROOKIE',m:1,hp:6,cont:1,aim:[1.6,1.0],bul:[0.8,0.6],max:[3,4],civ:[0.2,0.4],fair:1,bossHp:1},
 {n:'DETECTIVE',m:1.5,hp:5,cont:1,aim:[1.25,0.8],bul:[0.66,0.5],max:[3,5],civ:[0.25,0.5],fair:1,bossHp:1.15},
 {n:'HARD-BOILED',m:2.25,hp:6,cont:0,aim:[1.08,0.68],bul:[0.64,0.49],max:[3,4],civ:[0.3,0.55],fair:1,bossHp:1.2}];
DIFFS.length=0;MODES.forEach(m=>DIFFS.push(m));
const COMBAT=STAGES.map((s,i)=>i).filter(i=>!STAGES[i].bonus&&!STAGES[i].final);
function LV(){if(!S)return 0;if(S.daily)return 4;const k=COMBAT.indexOf(S.idx);return k<0?9:k;}
function DP(){const M=G.D,t=Math.pow(LV()/9,1.4);return {aim:lerp(M.aim[0],M.aim[1],t),bul:lerp(M.bul[0],M.bul[1],t),max:Math.round(lerp(M.max[0],M.max[1],t)),civ:lerp(M.civ[0],M.civ[1],t),groups:7+Math.floor(LV()/3)};}
function newRun(mode,diff){if(mode==='daily')diff=1;const seed=mode==='daily'?dailySeed():hstr('story-v2-'+diff);
 G={mode,diff,D:DIFFS[diff],seed,score:0,hp:DIFFS[diff].hp,stages:[],si:0,over:false,submitted:false,totalShots:0,totalHits:0,conts:0,started:performance.now(),tut:{}};}
// ---------- VFX pool ----------
let QUAL=1;const SMOKE=(()=>{const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d');for(let i=0;i<14;i++){const x=40+Math.random()*48,y=40+Math.random()*48,r=22+Math.random()*30;const gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,'rgba(255,255,255,0.22)');gr.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=gr;g.fillRect(0,0,128,128);}return c;})();
const GLOW=(()=>{const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d');const gr=g.createRadialGradient(64,64,0,64,64,64);gr.addColorStop(0,'rgba(255,250,220,1)');gr.addColorStop(0.25,'rgba(255,190,80,0.8)');gr.addColorStop(0.6,'rgba(255,90,20,0.25)');gr.addColorStop(1,'rgba(255,60,0,0)');g.fillStyle=gr;g.fillRect(0,0,128,128);return c;})();
const GRAIN=(()=>{const c=document.createElement('canvas');c.width=c.height=192;const g=c.getContext('2d');const d=g.createImageData(192,192);for(let i=0;i<d.data.length;i+=4){const v=Math.random()*255;d.data[i]=d.data[i+1]=d.data[i+2]=v;d.data[i+3]=26;}g.putImageData(d,0,0);return c;})();
let GRAINP=null;
function vfx(o){if(!S)return;const cap=380*QUAL;if(S.fx.length>=cap)return;S.fx.push(Object.assign({t:0,life:1,vx:0,vy:0,g:0,r:10,gr:0,a:1,rot:0,vr:0},o));}
function smoke(x,y,n,r,col,up){for(let i=0;i<n*QUAL;i++)vfx({k:'smoke',x:x+(Math.random()-0.5)*r,y:y+(Math.random()-0.5)*r*0.5,vx:(Math.random()-0.5)*40,vy:-(up||30)-Math.random()*30,r:r*(0.5+Math.random()*0.5),gr:r*1.2,life:1.2+Math.random()*1.4,a:0.55,col:col||'#888',rot:Math.random()*6,vr:(Math.random()-0.5)*1.5});}
function explode(x,y,s){s=s||1;vfx({k:'flash',x,y,r:220*s,life:0.18});vfx({k:'ring',x,y,r:20,gr:900*s,life:0.45,a:0.9});for(let i=0;i<8;i++)vfx({k:'fire',x:x+(Math.random()-0.5)*80*s,y:y+(Math.random()-0.5)*60*s,vx:(Math.random()-0.5)*120,vy:-60-Math.random()*90,r:60*s,gr:80*s,life:0.5+Math.random()*0.4});
 for(let i=0;i<18*QUAL;i++){const a=Math.random()*6.28,v=(200+Math.random()*500)*s;vfx({k:'debris',x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-250,g:900,r:3+Math.random()*6,life:1+Math.random()*0.6,col:Math.random()<0.5?'#2a2018':'#5a4a38',vr:(Math.random()-0.5)*14});}
 smoke(x,y-20,10,90*s,'#4a4440',40);S.shake=Math.max(S.shake,18*s);sfx('boom');}
function impact(x,y,mat){const c={wood:['#c99a5b','#7a5530'],stone:['#cfc4b0','#8a8478'],metal:['#fff3c0','#ffd27a'],flesh:['#ffd27a','#ff9b6a'],glass:['#dff6ff','#9fe8ff']}[mat||'flesh'];
 for(let i=0;i<8*QUAL;i++){const a=-Math.PI/2+(Math.random()-0.5)*2.4,v=150+Math.random()*350;vfx({k:mat==='metal'||mat==='flesh'?'spark':'debris',x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,g:900,r:mat==='metal'?2:2+Math.random()*3,life:0.35+Math.random()*0.35,col:c[i%2]});}
 if(mat==='stone'||mat==='wood')smoke(x,y,2,18,mat==='stone'?'#bbb':'#9a8466',20);}
function fxUpdate(dt){for(const f of S.fx){f.t+=dt;f.x+=f.vx*dt;f.y+=f.vy*dt;f.vy+=f.g*dt;f.r+=f.gr*dt*(f.k==='ring'?1:0.4);f.rot+=f.vr*dt;if(f.k==='smoke'){f.vx*=0.98;f.vy*=0.985;}}S.fx=S.fx.filter(f=>f.t<f.life);
 if(S.burns)for(const b of S.burns){b.t-=dt;if(Math.random()<0.5*QUAL)vfx({k:'fire',x:b.x+(Math.random()-0.5)*b.w,y:b.y,vy:-80-Math.random()*60,r:18,gr:30,life:0.5});if(Math.random()<0.15*QUAL)smoke(b.x,b.y-30,1,40,'#333',50);}}
function fxDraw(){for(const f of S.fx){const k=f.t/f.life;
  if(f.k==='smoke'){cx.globalAlpha=0.55*f.a*(1-k)*Math.min(1,f.t*6);cx.save();cx.translate(f.x,f.y);cx.rotate(f.rot);const s=f.r*2;cx.filter='none';cx.drawImage(SMOKE,-s/2,-s/2,s,s);cx.globalCompositeOperation='source-atop';cx.restore();}
  else if(f.k==='fire'){cx.globalCompositeOperation='lighter';cx.globalAlpha=(1-k);const s=f.r*2*(1-k*0.3);cx.drawImage(GLOW,f.x-s/2,f.y-s/2,s,s);cx.globalCompositeOperation='source-over';}
  else if(f.k==='flash'){cx.globalCompositeOperation='lighter';cx.globalAlpha=1-k;cx.drawImage(GLOW,f.x-f.r,f.y-f.r,f.r*2,f.r*2);cx.globalCompositeOperation='source-over';}
  else if(f.k==='ring'){cx.globalAlpha=f.a*(1-k);cx.strokeStyle='#fff6dd';cx.lineWidth=6*(1-k)+1;cx.beginPath();cx.arc(f.x,f.y,f.r,0,6.28);cx.stroke();}
  else if(f.k==='spark'){cx.globalAlpha=1-k;cx.strokeStyle=f.col;cx.lineWidth=2;cx.beginPath();cx.moveTo(f.x,f.y);cx.lineTo(f.x-f.vx*0.03,f.y-f.vy*0.03);cx.stroke();}
  else if(f.k==='debris'){cx.globalAlpha=1-k*k;cx.save();cx.translate(f.x,f.y);cx.rotate(f.rot);cx.fillStyle=f.col;cx.fillRect(-f.r/2,-f.r/2,f.r,f.r*0.7);cx.restore();}
  else if(f.k==='tracer'){cx.globalAlpha=1-k;cx.strokeStyle='#bff8ff';cx.lineWidth=4*(1-k)+1;cx.beginPath();cx.moveTo(f.x,f.y);cx.lineTo(f.x2,f.y2);cx.stroke();}
  else if(f.k==='muzzle'){cx.globalCompositeOperation='lighter';cx.globalAlpha=1-k;const s=f.r*(1+k);cx.save();cx.translate(f.x,f.y);cx.rotate(f.rot);cx.drawImage(GLOW,-s,-s*0.35,s*2,s*0.7);cx.drawImage(GLOW,-s*0.35,-s,s*0.7,s*2);cx.restore();cx.globalCompositeOperation='source-over';}}
 cx.globalAlpha=1;cx.globalCompositeOperation='source-over';}
// ---------- stage init hook ----------

function stageInit(idx,daily){G.pre={score:G.score,n:G.stages.length,hp:G.hp};stageInitBase(idx,daily);S.fx=[];S.burns=[];S.charge=G.tut.carry||0;S.marks=[];S.execQ=[];S.fires=[];S.pdCd=0;S.btFree=0;S.punch=0;S.xh=0;S.xk=0;S.clock=null;S.clockDone=false;S.bossAtkN=0;S.groups=daily?999:DP().groups;S.breather=idx>0&&!daily?1.6:0;S.lastCover=-9;S.ctrl={};ambStart(S.def.id);}
// ---------- spawning ----------
function variantKey(){const d=S.def;if(d.mixed){const ks=['west','chicago','japan','rome','pirate','london','egypt','miami','future'];const id=ks[Math.floor(S.R()*ks.length)];return S.R()<0.5?['sp_'+id,'gun']:['v_'+id,STAGES.find(s=>s.id===id).vtype];}
 if(S.R()<0.3+LV()*0.02&&SPR['v_'+d.id])return ['v_'+d.id,d.vtype];return [d.enemy,'gun'];}
function spawnEnemy(opts){const R=S.R;let [key,typ]=opts&&opts.key?[opts.key,'gun']:variantKey();let z,x,mode;
 const usable=S.props.filter(p=>p.z>0.3&&!p.xb&&!p.gone);
 if(usable.length&&R()<0.4&&!(opts&&opts.noPop)){const p=usable[Math.floor(R()*usable.length)];z=p.z-0.03;x=p.x+(R()-0.5)*30;mode='pop';}
 else{z=0.08+R()*0.85;x=spawnX(z,R());mode=typ==='heavy'||R()<0.18?'dash':R()<0.5?'slide':'warp';}
 // keep clear of other cover so nobody stands inside a prop
 for(const p of S.props){if(mode==='pop'||p.gone)continue;const r=propRect(p);if(Math.abs(z-p.z)<0.12&&x>r.x-30&&x<r.x+r.w+30)x=x<p.x?r.x-40:r.x+r.w+40;}
 x=clamp(x,60,W-60);
 const f0=fr(key,0);const hp=typ==='heavy'?3:(S.def.armor&&key==='sp_future')?2:1;const elite=G.diff===2&&typ==='heavy';
 const e={kind:'e',key,typ,x,z,tx:x,mode,st:'enter',t:0,hp,hpMax:hp,elite,aimT:DP().aim*(typ==='heavy'?1.15:1)*(0.9+R()*0.3),idle:0.4+R()*0.8,shots:0,rs:R(),f0,flash:0,kx:0,id:R()};
 if(mode==='slide'||mode==='dash'){const side=x<640?-1:1;e.x=side<0?-140:W+140;e.sx=e.x;}
 S.ents.push(e);return e;}
function scheduleGroup(){const R=S.R,gi=S.group,P=DP();let n=Math.min(P.max,2+Math.floor(gi/3)+Math.floor(LV()/3));if(S.daily)n=Math.min(5,2+Math.floor(S.t/20));if(S.breather>0&&gi===0)n=2;
 let at=S.t+(gi===0?S.breather:0);for(let i=0;i<n;i++){pending.push({at,fn:()=>{if(aliveEnemies()<P.max+1)spawnEnemy();}});at+=(0.5+R()*0.8);}
 if(S.def.civ>=0&&R()<P.civ)pending.push({at:S.t+0.3+R()*2,fn:spawnCiv});S.group++;S.groupT=0;}
function spawnBoss(){const d=S.def;const f0=fr(d.boss,0);const base=S.daily?40:(d.final?130:70+LV()*5);const hp=Math.round(base*G.D.bossHp);
 S.boss={kind:'b',key:d.boss,x:640,z:0.62,hp,max:hp,t:0,atk:1.8,rings:[],weak:0,weakT:0,f0,flash:0,dead:false,deadT:0,booms:0,lunge:0};
 S.bossT=0;banner(d.bossName,'BOSS',2.0);sfx('stinger');musicBoss(true);}
function bossGeom(b){const d=S.def;let h=d.bossH||(d.hover?400:500);if(d.final)h=470;const s=h/b.f0.h;let y=d.hover?440+Math.sin(b.t*1.3)*18:groundY(b.z)+10;if(d.final)y=600;
 const lg=Math.sin(Math.min(1,b.lunge)*Math.PI)*24;return {s,h:h+lg,y:y+lg*0.4,x:b.x,w:b.f0.w*s*(1+lg/h)};}
// ---------- projectiles ----------
const PKIND={sp_rome:'arrow',v_rome:'spear',v_west:'dyn',v_japan:'star',v_pirate:'bomb',v_egypt:'disc',sp_egypt:'blast',v_future:'gren',sp_future:'plasma',v_london:'steam'};
function fireBullet(x,y,kind,src){const R=S.R,P=DP();const tx=clamp(640+(R()-0.5)*700,120,1160),ty=420+(R()-0.5)*240;kind=kind||'bullet';
 const thrown=['dyn','star','bomb','disc','spear','gren','ball'].includes(kind);let dur=P.bul*(0.9+R()*0.2)*(thrown?1.55:1)*(kind==='orb'?1.6:1);
 S.bullets.push({x0:x,y0:y,x1:tx,y1:ty,t:0,dur,dead:false,trail:[],kind,thrown,dmg:src&&src.elite?2:1,src});S.fires.push(S.t);
 vfx({k:'muzzle',x,y,r:thrown?0:26,life:0.09,rot:R()*3});if(!thrown)smoke(x,y,2,14,'#bbb',25);sfx(kind==='orb'||kind==='ball'?'cannon':thrown?'throw':'eshot');}
function bulletPos(b){const k=clamp(b.t/b.dur,0,1);const e=b.thrown?k:k*k;let y=lerp(b.y0,b.y1,e);if(b.thrown)y-=Math.sin(k*Math.PI)*140;return {x:lerp(b.x0,b.x1,e),y,r:lerp(b.thrown?8:3,b.kind==='orb'?46:b.thrown?34:30,e),k};}
// ---------- hurt / continues ----------
function hurt(dmg){if(S.inv>0||S.cover)return false;dmg=dmg||1;G.hp-=dmg;S.st.dmg+=dmg;S.inv=1.1;S.dmgFlash=1;S.shake=18;chainBreak();sfx('hurt');if(G.hp<=0){G.hp=0;gameOver();}return true;}
function gameOver(){S.phase='done';if(S.btOn>0)endBT();if(G.D.cont&&!S.daily){go('gameover');return;}
 const st=S.st;st.acc=st.hits/Math.max(1,st.shots);st.time=S.t;st.rank='D';st.name=(S.daily?'DAILY CHALLENGE':S.def.place)+' (KO)';st.id=S.def.id;G.totalShots+=st.shots;G.totalHits+=st.hits;G.stages.push(st);G.over=true;finishRun(true);setTimeout(()=>go('gameover'),50);}
function continueRun(){const cost=Math.round(G.score*0.3);G.score-=cost;G.conts++;G.hp=G.D.hp;S.phase=S.boss?'boss':'play';S.inv=2.5;S.bullets=[];chainBreak();go('play');SCR='play';banner('CONTINUE','-'+cost+' POINTS',1.6);glitch(0.5);}
function giveUp(){const st=S.st;st.acc=st.hits/Math.max(1,st.shots);st.time=S.t;st.rank='D';st.name=S.def.place+' (KO)';st.id=S.def.id;G.totalShots+=st.shots;G.totalHits+=st.hits;G.stages.push(st);G.over=true;finishRun(true);go('final');}
// ---------- bullet time 2.0 ----------
function startBTBase(){if(!S||S.phase==='intro'||S.phase==='done'||S.phase==='clear')return;if(S.btOn>0){executeMarks();return;}if(S.charge<100)return;S.charge-=100;S.btOn=4.0;S.btFlash=1;S.marks=[];sfx('btOn');btAudio(true);
 if(!G.tut.mark){G.tut.mark=1;banner('TAP ENEMIES TO MARK','TAP THE CUFF AGAIN TO EXECUTE',2.4);}}
function endBT(){if(S.marks&&S.marks.length)executeMarks();S.btOn=0;S.btFree=0;sfx('btOff');btAudio(false);}
function executeMarksBase(){const list=S.marks.filter(e=>e.st!=='dead'&&e.st!=='gone');S.marks=[];if(!list.length){if(S.btOn>0){S.btOn=0.01;}return;}
 list.forEach((e,i)=>S.execQ.push({e,at:i*0.09}));S.execT=0;S.execN=0;if(S.btOn>0)S.btOn=Math.max(0.01,Math.min(S.btOn,0.6));}
function execStep(dt){if(!S.execQ.length)return;S.execT+=dt;while(S.execQ.length&&S.execQ[0].at<=S.execT){const {e}=S.execQ.shift();if(e.st==='dead'||e.st==='gone')continue;const g=entGeom(e);const hx=g.x,hy=g.y-g.h*0.9;
  e.hp=0;e.st='dead';e.t=0;e.kx=(e.x<640?-1:1)*160;S.st.kills++;S.st.heads++;S.st.hits++;S.st.shots++;chainHit();const mul=[1,2,4,8,8,8][S.execN]||8;const v=(100*2*S.mult+250*mul)*G.D.m;S.st.execPts=(S.st.execPts||0)+v;S.st.killPts+=v;
  addPts(v,hx,hy,'EXECUTE x'+mul,'#7ff8ff');S.execN++;vfx({k:'tracer',x:640,y:740,x2:hx,y2:hy,life:0.25});impact(hx,hy,'flesh');sfx('head');sfx('shot');S.punch=1;S.shake=Math.max(S.shake,10);}}
// ---------- shooting ----------
function propMetal(p){return p.mat==='metal'||p.i===4;}
function shoot(px,py){
 if(!S||S.phase==='intro'||S.phase==='clear'||S.phase==='done')return;if(S.cover)return;
 const st=S.st,D=G.D,bt=S.btOn>0;
 // bullet-time: parry / deflect / mark (no ammo used for marks)
 if(bt){for(const b of S.bullets){if(b.dead)continue;const p=bulletPos(b);if(Math.hypot(px-p.x,py-p.y)<p.r+24){shotFx();b.dead=true;st.shots++;st.hits++;st.parries++;chainHit();
   if(b.kind==='orb'&&S.boss&&!S.boss.dead){const g=bossGeom(S.boss);vfx({k:'tracer',x:p.x,y:p.y,x2:g.x,y2:g.y-g.h*0.5,life:0.4});bossDamage(6,g.x,g.y-g.h*0.5,true,true);addPts(600*D.m,p.x,p.y,'DEFLECT','#ffd166');}
   else{const v=250*D.m;st.parryPts+=v;addPts(v,p.x,p.y,'PARRY','#7ff8ff');}sfx('parry');impact(p.x,p.y,'metal');S.charge=Math.min(300,S.charge+8);S.xh=1;return;}}
  const tgt=S.ents.filter(e=>e.kind==='e'&&e.st!=='dead'&&e.st!=='gone').sort((a,b)=>b.z-a.z).find(e=>hitEnt(e,px,py));
  if(tgt&&S.marks.length<6&&!S.marks.includes(tgt)){S.marks.push(tgt);sfx('lock');S.xh=1;return;}}
 if(S.ammo<=0){sfx('empty');S.pops.push({x:px,y:py-30,t:0,txt:G.diff===0?'HOLD COVER TO RELOAD':'RELOAD!',col:'#ff5a5a',small:1});return;}
 S.ammo--;S.muzzle=0.06;shotFx();S.shake=Math.max(S.shake,3);
 // shootable-anytime projectiles (thrown, cannonballs)
 for(const b of S.bullets){if(b.dead||!(b.thrown||b.kind==='ball'))continue;const p=bulletPos(b);if(Math.hypot(px-p.x,py-p.y)<p.r+20){b.dead=true;st.shots++;st.hits++;st.parries++;chainHit();const v=250*D.m;st.parryPts+=v;addPts(v,p.x,p.y,b.kind==='ball'?'CANNONBALL':'INTERCEPT','#7ff8ff');
   if(b.kind==='dyn'||b.kind==='bomb'||b.kind==='gren'){explode(p.x,p.y,0.6);blastKill(p.x,p.y,170);}else impact(p.x,p.y,'metal');sfx('parry');return;}}
 // clock pickup
 if(S.clock&&Math.hypot(px-S.clock.x,py-S.clock.y)<34){st.shots++;st.hits++;chainHit();if(G.hp<G.D.hp){G.hp++;addPts(0,S.clock.x,S.clock.y,'+1 HEART','#ff6b8b');}else addPts(2000*D.m,S.clock.x,S.clock.y,'POCKET WATCH','#ffd166');sfx('chime');impact(S.clock.x,S.clock.y,'glass');S.clock=null;S.clockDone=true;return;}
 const order=S.ents.filter(e=>e.st!=='gone').sort((a,b)=>b.z-a.z);
 if(S.boss&&!S.boss.dead){const b=S.boss,g=bossGeom(b);const wp=S.def.weak[b.weak];const wx=g.x+(wp[0]-0.5)*g.w,wy=g.y-g.h+wp[1]*g.h;const wr=Math.max(28,g.h*0.075);
  const front=order.find(e=>e.z>b.z&&e.kind==='e'&&e.st!=='dead'&&hitEnt(e,px,py));
  if(!front){if(Math.hypot(px-wx,py-wy)<wr){bossDamage(4,px,py,true);return;}if(px>g.x-g.w*0.42&&px<g.x+g.w*0.42&&py>g.y-g.h&&py<g.y){bossDamage(1,px,py,false);return;}}}
 for(const e of order){
  if(e.kind==='c'){const g=entGeom(e);if(px>g.x-g.w*0.35&&px<g.x+g.w*0.35&&py>g.y-g.h&&py<g.y){st.shots++;if(!e.hitOnce){e.hitOnce=true;st.civ++;st.civPts-=500;addPts(-500,px,py,'CIVILIAN!','#ff4d4d');chainBreak();sfx('civ');e.vx*=2.2;e.flash=0.5;}return;}continue;}
  if(e.st==='dead'){if(hitEnt(e,px,py,true))return;continue;}
  const h=hitEnt(e,px,py);if(!h)continue;
  st.shots++;st.hits++;chainHit();e.flash=0.12;S.xh=1;
  if(h==='head'||e.hp<=1){killEnt(e,h==='head',px,py);}
  else{e.hp--;e.st='hit';e.t=0;e.kx=(px<e.x?1:-1)*60;const v=20*S.mult*D.m;st.killPts+=v;addPts(v,px,py,'ARMOR','#9fd');sfx('clang');impact(px,py,'metal');S.charge=Math.min(300,S.charge+3);}
  return;}
 // props: explosive barrel, ricochet in slow-mo, capped chips
 for(const p of S.props){if(p.gone)continue;const r=propRect(p);if(px>r.x&&px<r.x+r.w&&py>r.y&&py<r.y+r.h){
   if(p.xb){p.gone=true;st.shots++;st.hits++;chainHit();const cx0=p.x,cy0=r.y+r.h*0.5;explode(cx0,cy0,1.1);S.burns.push({x:cx0,y:r.y+r.h,w:r.w,t:6});const n=blastKill(cx0,cy0,260);addPts(100*D.m,cx0,cy0-60,'KABOOM','#ffb347');return;}
   if(bt&&propMetal(p)&&!p.rico){const tg=S.ents.filter(e=>e.kind==='e'&&e.st!=='dead').sort((a,b)=>Math.hypot(a.x-px,groundY(a.z)-py)-Math.hypot(b.x-px,groundY(b.z)-py))[0];
    if(tg){p.rico=1;st.shots++;st.hits++;const g=entGeom(tg);vfx({k:'tracer',x:px,y:py,x2:g.x,y2:g.y-g.h*0.9,life:0.4});killEnt(tg,true,g.x,g.y-g.h*0.9);const v=500*D.m;st.ricoPts=(st.ricoPts||0)+v;st.killPts+=v;addPts(v,px,py,'RICOCHET','#ffd166');sfx('rico');return;}}
   if(p.hits<2){p.hits++;st.shots++;st.hits++;addPts(10*D.m,px,py,null,'#ccc');}if(p.holes.length<10)p.holes.push([(px-r.x)/r.w,(py-r.y)/r.h]);impact(px,py,p.mat);sfx(p.mat==='metal'?'rico':p.mat==='wood'?'wood':p.mat==='glass'?'glass':'hit');return;}}
 // hypercar
 if(S.car&&S.phase==='play'){const c=S.car;const x0=c.x-c.w/2,y0=c.y-c.h;
  for(const p of c.parts){if(p.down)continue;const r=p.r;if(px>x0+r[0]*c.w&&px<x0+r[2]*c.w&&py>y0+r[1]*c.h&&py<y0+r[3]*c.h){st.shots++;st.hits++;chainHit();p.hp--;const v=50*D.m;st.carPts+=v;addPts(v,px,py,null,'#bfe');const glass=/WIND|LAMP/.test(p.n);impact(px,py,glass?'glass':'metal');sfx(glass?'glass':'clang');
    if(p.hp<=0){p.down=true;st.partsDown++;const v2=1000*D.m;st.carPts+=v2;addPts(v2,px,py-40,p.n+' DOWN','#ffd166');S.shake=10;
     if(glass){for(let i=0;i<20;i++)impact(px+(Math.random()-0.5)*60,py,'glass');sfx('glass');}else if(/COIL/.test(p.n)){explode(px,py,0.5);}else{explode(px,py,0.6);S.burns.push({x:px,y:py+20,w:80,t:99});}
     if(c.parts.every(q=>q.down)){const v3=10000*D.m+Math.round(Math.max(0,30-S.t))*200*D.m;st.wreck=v3;st.carPts+=v3;addPts(v3,640,300,'FULL WRECK!','#ff3fa4');explode(640,520,2);setTimeout(()=>S&&S.car&&explode(500,560,1.2),250);S.phase='clear';S.clearT=0;banner('FULL WRECK','TOTALLED',2);}}
    return;}}
  if(px>x0&&px<x0+c.w&&py>y0+c.h*0.05&&py<c.y){st.shots++;st.hits++;chainHit();const v=10*D.m;st.carPts+=v;addPts(v,px,py,null,'#9ab');impact(px,py,'metal');sfx('hit');return;}}
 st.shots++;chainBreak();impact(px,py,'stone');}
function shotFx(){sfx('shot');}
function killEntBase(e,head,px,py){const st=S.st,D=G.D;e.hp=0;e.st='dead';e.t=0;e.kx=(px<e.x?1:-1)*(head?190:130);st.kills++;if(head)st.heads++;const v=100*(head?2:1)*S.mult*D.m*(e.elite?1.5:1);st.killPts+=v;
 addPts(v,px,py,head?'HEADSHOT':e.typ==='heavy'?'HEAVY DOWN':null,head?'#ffe066':'#fff');sfx(head?'head':'hit');S.charge=Math.min(300,S.charge+(head?26:9)+(S.mult>=3?5:0));impact(px,py,'flesh');S.shake=Math.max(S.shake,head?7:4);S.xk=1;
 if(S.charge>=100&&!G.tut.bt&&S.def.id==='west'){G.tut.bt=1;banner('CHRONO-CUFF CHARGED','TAP THE CUFF OR PRESS F',2.4);}}
function blastKill(x,y,r){let n=0;for(const e of S.ents){if(e.kind!=='e'||e.st==='dead')continue;const g=entGeom(e);if(Math.hypot(g.x-x,(g.y-g.h/2)-y)<r){killEnt(e,false,g.x,g.y-g.h/2);n++;const v=300*G.D.m;S.st.killPts+=v;addPts(v,g.x,g.y-g.h,'CHAIN','#ffb347');}}
 for(const e of S.ents)if(e.kind==='c'){const g=entGeom(e);if(Math.hypot(g.x-x,(g.y-g.h/2)-y)<r*0.8&&!e.hitOnce){e.hitOnce=true;S.st.civ++;S.st.civPts-=500;addPts(-500,g.x,g.y-g.h,'CIVILIAN!','#ff4d4d');chainBreak();}}return n;}
function bossDamage(n,px,py,weak,noScore){const b=S.boss,st=S.st,D=G.D;if(!noScore){st.shots++;st.hits++;}chainHit();b.hp-=n;b.flash=0.12;S.xh=1;
 const sf=clamp(2-S.bossT/45,0.5,2);
 if(weak){const v=Math.round(300*sf*D.m*Math.min(S.mult,4)/2);st.bossPts+=v;if(!noScore)addPts(v,px,py,'WEAK POINT','#ff6bd6');sfx('head');S.charge=Math.min(300,S.charge+8);impact(px,py,'metal');S.shake=8;}
 else{const v=20*D.m*S.mult;st.bossPts+=v;addPts(v,px,py,null,'#fff');sfx('hit');impact(px,py,'metal');S.charge=Math.min(300,S.charge+1);}
 if(b.hp<=0&&!b.dead){b.dead=true;b.deadT=0;const v=Math.round(3000*sf*D.m);st.bossPts+=v;addPts(v,640,260,'BOSS DOWN x'+sf.toFixed(2),'#ffd166');S.bullets.forEach(q=>q.dead=true);S.btFree=1.4;S.btOn=Math.max(S.btOn,1.4);S.xk=1;sfx('stinger2');musicBoss(false);
  S.ents.forEach(e=>{if(e.kind==='e'&&e.st!=='dead'){e.st='dead';e.t=0;}});}}
// ---------- update ----------
function setCoverBase(v){if(!S||SCR!=='play')return;if(v&&!S.cover){S.cover=true;S.coverT=0;S.lastCover=S.t;
  // perfect dodge: a shot about to land
  if(S.pdCd<=0&&S.btOn<=0&&S.bullets.some(q=>!q.dead&&q.dur-q.t<0.25)){S.pdCd=8;S.btFree=1.5;S.btOn=1.5;S.btFlash=1;btAudio(true);const v=300*G.D.m;S.st.pdPts=(S.st.pdPts||0)+v;addPts(v,640,300,'PERFECT DODGE','#7ff8ff');sfx('btOn');}}
 else if(!v&&S.cover)S.cover=false;}
function stageUpdate(dt){
 if(S.btOn>0){S.btOn-=dt;if(S.btOn<=0)endBT();}
 const w=S.btOn>0?dt*0.2:dt;
 QUAL=fpsA<40?0.45:fpsA<50?0.7:1;
 S.btFlash=Math.max(0,S.btFlash-dt*2);S.dmgFlash=Math.max(0,S.dmgFlash-dt*2.5);S.shake=Math.max(0,S.shake-dt*40);S.muzzle-=dt;S.inv-=dt;S.pdCd-=dt;S.punch=Math.max(0,S.punch-dt*4);S.xh=Math.max(0,S.xh-dt*5);S.xk=Math.max(0,S.xk-dt*3);
 if(S.cover){S.coverT+=dt;if(S.coverT>0.32&&S.ammo<6){S.ammo=6;sfx('reload');}}
 execStep(dt);
 for(const p of S.parts){p.t+=w;p.x+=p.vx*w;p.y+=p.vy*w;p.vy+=600*w;}S.parts=S.parts.filter(p=>p.t<p.life);
 fxUpdate(w);
 for(const p of S.pops)p.t+=dt;S.pops=S.pops.filter(p=>p.t<1.1);
 if(BAN){BAN.t-=dt;if(BAN.t<=0)BAN=null;}
 S.phaseT+=dt;
 if(S.phase==='intro'){if(S.phaseT>1.0){S.phase='play';S.phaseT=0;}return;}
 if(S.phase==='done')return;
 if(S.phase==='play'||S.phase==='boss')S.t+=w;if(S.boss)S.bossT+=w;
 if(S.daily&&S.phase!=='clear'){const seg=Math.min(2,Math.floor(S.t/30));if(seg!==S.segment){S.segment=seg;setupStage(STAGES[S.daily.order[seg]]);S.ents=S.ents.filter(e=>e.st==='dead');pending=[];glitch(0.7);musicPlay(S.def.id);ambStart(S.def.id);banner(S.def.place,S.def.year,1.6);if(seg===2)spawnBoss();}
  if(S.t>=90){S.phase='clear';S.clearT=0;banner('TIME!','DAILY CHALLENGE',2);}}
 if(S.phase==='play'&&!S.def.bonus){S.groupT+=w;
  if(S.group<S.groups){if((pending.length===0&&((aliveEnemies()===0&&S.groupT>0.4)||(aliveEnemies()===1&&S.groupT>4.5)))||S.groupT>12)scheduleGroup();}
  else if(aliveEnemies()===0&&pending.length===0&&!S.daily){S.phase='boss';spawnBoss();}}
 if(S.daily&&S.boss&&!S.boss.dead){S.groupT+=w;if(aliveEnemies()<2&&pending.length===0&&S.groupT>6)scheduleGroup();}
 for(let i=pending.length-1;i>=0;i--)if(S.t>=pending[i].at){const p=pending[i];pending.splice(i,1);p.fn();}
 if(S.def.bonus&&S.phase==='play'&&S.t>=30){S.phase='clear';S.clearT=0;banner("TIME'S UP",'CUFF RECHARGED',2);}
 // hidden pocket watch (heart pickup), once per stage
 if(!S.def.bonus&&!S.clockDone&&!S.clock&&S.t>18){const R=S.R;S.clock={x:200+R()*880,y:250+R()*200,t:0};}
 if(S.clock){S.clock.t+=w;if(S.clock.t>7){S.clock=null;S.clockDone=true;}}
 // pirate broadside: background ship fires shootable cannonballs
 if(S.def.balls&&S.phase==='play'){S.ballT=(S.ballT||4)-w;if(S.ballT<=0){S.ballT=(G.D.fair?9:5.5)-LV()*0.2;fireBullet(862,388,'ball');S.flashSky=0.3;}}
 const P=DP();
 for(const e of S.ents){e.t+=w;e.flash=Math.max(0,(e.flash||0)-dt);e.kx*=Math.pow(0.02,w);e.x+=e.kx*w;
  if(e.kind==='c'){e.x+=e.vx*w;if(e.x<-200||e.x>W+200)e.st='gone';continue;}
  switch(e.st){
   case 'enter':if(e.mode==='slide'||e.mode==='dash'){const sp=e.mode==='dash'?1250:600;const d=e.tx-e.x;const step=sp*w*(0.35+0.65*Math.min(1,Math.abs(d)/180));if(Math.abs(d)<=step+1){e.x=e.tx;e.st='idle';e.t=0;if(e.mode==='dash')smoke(e.x,groundY(e.z),2,20,'#a98',10);}else e.x+=Math.sign(d)*step;}else if(e.t>(e.mode==='pop'?0.35:0.45)){e.st='idle';e.t=0;}break;
   case 'idle':if(e.t>e.idle){if(e.shots>=4){e.st='exit';e.t=0;}else{e.st='aim';e.t=0;sfx('lock');}}break;
   case 'aim':if(e.t>e.aimT){if(G.D.fair&&S.fires.filter(t=>S.t-t<0.3).length>=2){e.t=e.aimT-0.3;break;}const g=entGeom(e);const kind=PKIND[e.key]||(S.def.balls&&e.key==='sp_pirate'?'bullet':'bullet');fireBullet(g.x+g.w*0.02,g.y-g.h*0.62,kind,e);e.st='fire';e.t=0;}break;
   case 'fire':if(e.t>0.2){e.st='idle';e.t=0;e.shots++;e.idle=(1.1+e.rs*1.1);}break;
   case 'hit':if(e.t>0.28){e.st='idle';e.t=0;e.idle=0.4;}break;
   case 'exit':if(e.t>0.5)e.st='gone';break;
   case 'dead':if(e.t>1.6)e.st='gone';break;}}
 S.fires=S.fires.filter(t=>S.t-t<1);
 S.ents=S.ents.filter(e=>e.st!=='gone');S.marks=S.marks.filter(e=>e.st!=='gone'&&e.st!=='dead');
 const b=S.boss;if(b){b.t+=w;b.flash=Math.max(0,b.flash-dt);b.lunge=Math.max(0,b.lunge-w*2);
  if(!b.dead){b.x=640+Math.sin(b.t*0.45)*(S.def.final?260:200);b.weakT+=w;if(b.weakT>4.5){b.weakT=0;b.weak=(b.weak+1)%S.def.weak.length;}
   const ph=b.hp<b.max/3?2:b.hp<b.max*2/3?1:0;
   b.atk-=w;if(b.atk<=0){const R=S.R;S.bossAtkN++;b.lunge=1;
    if(S.bossAtkN%5===2){b.atk=bossSig(b,ph);}else if(S.bossAtkN%3===0){const g=bossGeom(b);fireBullet(g.x,g.y-g.h*0.5,'orb');if(!G.tut.orb){G.tut.orb=1;banner('SLOW TIME TO DEFLECT IT!','OR TAKE COVER',2);}b.atk=2.6;}
    else if(R()<0.25&&aliveEnemies()<2){spawnEnemy({noPop:true});spawnEnemy({noPop:true});b.atk=2.2;}
    else{const n=Math.min(G.D.fair?2:4,1+ph+(G.diff>0?1:0));for(let i=0;i<n;i++)b.rings.push({ox:(R()-0.5)*0.6,oy:0.2+R()*0.4,t:-i*0.32,aim:DP().aim*0.95});b.atk=(2.6-ph*0.35-G.diff*0.2+R()*0.6);sfx('lock');}}
   const g=bossGeom(b);for(const r of b.rings){r.t+=w;if(r.t>=r.aim){r.done=true;fireBullet(g.x+r.ox*g.w,g.y-g.h+r.oy*g.h,S.def.balls?'ball':'bullet');}}b.rings=b.rings.filter(r=>!r.done);}
  else{b.deadT+=dt;const g=bossGeom(b);if(b.booms<7&&b.deadT>b.booms*0.25){b.booms++;explode(g.x+(Math.random()-0.5)*g.w*0.7,g.y-g.h*(0.2+Math.random()*0.6),b.booms===7?1.8:0.8);}
   if(b.deadT>2.4&&S.phase!=='clear'){if(S.daily){S.boss=null;}else{S.phase='clear';S.clearT=0;banner('CORE FRAGMENT SECURED',S.def.final?'THE CHRONO-CORE SHATTERS':'NEXT RIFT OPENING',2.2);}}}}
 for(const q of S.bullets){if(q.dead)continue;q.t+=w;const p=bulletPos(q);q.trail.push([p.x,p.y]);if(q.trail.length>(S.btOn>0?16:8))q.trail.shift();
  if(q.t>=q.dur){q.dead=true;if(S.cover){coverHit(p);if(S.t-S.lastCover<0.6){const v=100*G.D.m;S.st.ccPts=(S.st.ccPts||0)+v;addPts(v,p.x,p.y,'CLOSE CALL','#9cf');S.charge=Math.min(300,S.charge+25);}else S.pops.push({x:p.x,y:p.y,t:0,txt:'DODGED',col:'#9cf',small:1});}
   else{if(q.thrown&&(q.kind==='dyn'||q.kind==='bomb'||q.kind==='gren'))explode(p.x,p.y,0.5);hurt(q.dmg);}}}
 S.bullets=S.bullets.filter(q=>!q.dead);
 if(S.phase==='clear'){S.clearT+=dt;if(S.clearT>2.6)stageEnd();}}
function catRows(list){const sum=k=>list.reduce((a,s)=>a+(s[k]||0),0);return [['KILLS ('+sum('kills')+', '+sum('heads')+' HEADSHOTS) + EXECUTES',sum('killPts')],['PARRIES + INTERCEPTS ('+sum('parries')+')',sum('parryPts')],['PERFECT DODGE + CLOSE CALLS',sum('pdPts')+sum('ccPts')],['BOSS WEAK POINTS + SPEED',sum('bossPts')],['HYPERCAR PARTS + WRECK',sum('carPts')],['ACCURACY BONUS',sum('accBonus')],['TIME BONUS',sum('timeBonus')],['NO-DAMAGE BONUS',sum('ndBonus')],['INVESTIGATIONS',sum('inv')],['CIVILIANS SHOT ('+sum('civ')+')',sum('civPts')]];}

function stageEnd(){if(S.phase==='done')return;S.phase='done';const st=S.st,d=S.def,m=G.D.m;if(S.btOn>0)endBT();G.tut.carry=Math.min(100,S.charge);
 st.acc=st.hits/Math.max(1,st.shots);st.time=S.t;
 if(!d.bonus){st.accBonus=Math.round(st.acc*st.acc*4000*m);st.timeBonus=S.daily?0:Math.round(Math.max(0,d.par-S.t)*25*m);st.ndBonus=st.dmg===0?Math.round(5000*m):0;}
 const add=st.accBonus+st.timeBonus+st.ndBonus;st.total+=add;G.score+=add;st.rank=stageRank(st,d.bonus);st.name=S.daily?'DAILY CHALLENGE':d.place;st.id=d.id;st.bonus=!!d.bonus;
 G.totalShots+=st.shots;G.totalHits+=st.hits;G.stages.push(st);G.hp=Math.min(G.D.hp,G.hp+1);sfx('jingle');musicStop();ambStop();(window.__BTLOG=window.__BTLOG||[]).push({id:d.id,t:Math.round(S.t),dmg:st.dmg,conts:G.conts,rank:st.rank,diff:G.D.n,bt:st.btN||0,tmo:st.tmo||0,acc:st.shots?Math.round(st.hits/st.shots*100):0});
 if(S.daily){finishRun(false);go('final');}else go('sres');}
// ===================== brand, HUD, draw, audio, bot =====================
const BR={noir:'#07060d',cyan:'#38e8ff',brass:'#d9a441',brass2:'#8a5a1c',ivory:'#f3ead7'};
function brassGrad(x0,y0,x1,y1){const g=cx.createLinearGradient(x0,y0,x1,y1);g.addColorStop(0,'#f6d68a');g.addColorStop(0.45,BR.brass);g.addColorStop(1,BR.brass2);return g;}
function bezel(x,y,r,fill){cx.fillStyle=fill||'rgba(7,6,13,0.78)';cx.beginPath();cx.arc(x,y,r,0,6.28);cx.fill();cx.strokeStyle=brassGrad(x-r,y-r,x+r,y+r);cx.lineWidth=5;cx.beginPath();cx.arc(x,y,r-2,0,6.28);cx.stroke();cx.strokeStyle='rgba(56,232,255,0.35)';cx.lineWidth=1.5;cx.beginPath();cx.arc(x,y,r-7,0,6.28);cx.stroke();}
function button(x,y,w,h,label,fn,opt){opt=opt||{};const hov=AIM.x>x&&AIM.x<x+w&&AIM.y>y&&AIM.y<y+h;const g=cx.createLinearGradient(0,y,0,y+h);g.addColorStop(0,hov?'rgba(30,60,80,0.92)':'rgba(18,16,26,0.9)');g.addColorStop(1,'rgba(6,5,10,0.92)');cx.fillStyle=g;rrect(x,y,w,h,10);cx.fill();
 cx.strokeStyle=brassGrad(x,y,x+w,y+h);cx.lineWidth=2.5;cx.stroke();if(hov){cx.strokeStyle='rgba(56,232,255,0.8)';cx.lineWidth=1.5;rrect(x+4,y+4,w-8,h-8,7);cx.stroke();}
 cx.fillStyle=BR.brass;for(const [a,b] of [[x+9,y+9],[x+w-9,y+9],[x+9,y+h-9],[x+w-9,y+h-9]]){cx.beginPath();cx.arc(a,b,2.2,0,6.28);cx.fill();}
 if(label)txt(label,x+w/2,y+h/2+(opt.size||28)*0.36,opt.size||28,opt.col||(hov?'#e9fbff':BR.ivory),'center',FONT_T);if(opt.sub)txt(opt.sub,x+w/2,y+h-10,15,'#9fe8ff','center',FONT_T);UI.push({x,y,w,h,fn});}
function drawLogo(x,y,s,a){s=s||1;cx.save();cx.globalAlpha=a==null?1:a;cx.translate(x,y);cx.scale(s,s);
 // clock face
 const R=92;cx.fillStyle='rgba(7,6,13,0.75)';cx.beginPath();cx.arc(0,-40,R,0,6.28);cx.fill();cx.strokeStyle=brassGrad(-R,-R-40,R,R-40);cx.lineWidth=8;cx.beginPath();cx.arc(0,-40,R,0,6.28);cx.stroke();
 for(let i=0;i<12;i++){const an=i*Math.PI/6;cx.strokeStyle=i%3?'rgba(217,164,65,0.7)':BR.brass;cx.lineWidth=i%3?2:5;cx.beginPath();cx.moveTo(Math.cos(an)*(R-12),-40+Math.sin(an)*(R-12));cx.lineTo(Math.cos(an)*(R-26),-40+Math.sin(an)*(R-26));cx.stroke();}
 const t=T*0.4;cx.strokeStyle=BR.ivory;cx.lineWidth=5;cx.beginPath();cx.moveTo(0,-40);cx.lineTo(Math.cos(-2.2+t*0.05)*48,-40+Math.sin(-2.2+t*0.05)*48);cx.stroke();cx.lineWidth=3;cx.beginPath();cx.moveTo(0,-40);cx.lineTo(Math.cos(-0.9+t)*70,-40+Math.sin(-0.9+t)*70);cx.stroke();
 // bullet trail cutting through the clock
 const g=cx.createLinearGradient(-330,60,330,-140);g.addColorStop(0,'rgba(56,232,255,0)');g.addColorStop(0.75,'rgba(56,232,255,0.9)');g.addColorStop(1,'#fff');cx.strokeStyle=g;cx.lineWidth=7;cx.beginPath();cx.moveTo(-330,60);cx.lineTo(250,-118);cx.stroke();
 cx.fillStyle=brassGrad(240,-130,290,-100);cx.save();cx.translate(262,-124);cx.rotate(-0.3);rrect(-18,-7,36,14,7);cx.fill();cx.restore();
 // crack where the bullet passes
 cx.strokeStyle='rgba(243,234,215,0.6)';cx.lineWidth=1.5;cx.beginPath();cx.moveTo(-40,-20);cx.lineTo(-58,-2);cx.lineTo(-50,12);cx.moveTo(30,-60);cx.lineTo(52,-70);cx.stroke();
 // wordmark with cyan / amber split
 const word='BULLET TIME',fs=128;cx.font=fs+'px '+FONT_T;cx.textAlign='center';cx.textBaseline='alphabetic';const gl=Math.random()<0.04?(Math.random()-0.5)*14:0;
 cx.fillStyle='rgba(56,232,255,0.95)';cx.fillText(word,-5+gl,40);cx.fillStyle='rgba(217,164,65,0.95)';cx.fillText(word,5-gl,40);cx.fillStyle=BR.ivory;cx.fillText(word,0,40);
 cx.lineWidth=2;cx.strokeStyle=BR.noir;cx.strokeText(word,0,40);
 cx.fillStyle=BR.noir;cx.fillRect(-300,6,600,5);txt('THE CHRONO-CUFF CASE',0,82,26,BR.brass,'center',FONT_T);cx.restore();}
function drawPostBase(){if(!GRAINP)GRAINP=cx.createPattern(GRAIN,'repeat');cx.save();cx.translate(-Math.random()*190,-Math.random()*190);cx.fillStyle=GRAINP;cx.globalAlpha=0.5;cx.fillRect(0,0,W+200,H+200);cx.restore();
 if(!drawPost.v){drawPost.v=cx.createRadialGradient(640,360,330,640,360,820);drawPost.v.addColorStop(0,'rgba(0,0,0,0)');drawPost.v.addColorStop(1,'rgba(0,0,0,0.55)');}cx.fillStyle=drawPost.v;cx.fillRect(0,0,W,H);}
// ---------- era FX additions ----------

// subtle painterly ambience only: no moving vehicles, no big shapes
function rainFX(t,a,sl){cx.strokeStyle='rgba(200,215,230,'+a+')';cx.lineWidth=1;cx.beginPath();for(let i=0;i<FXP.length;i++){const p=FXP[i];const x=(p.x+t*sl*0.12)%W,y=(p.y+t*(820+p.s*380))%H;cx.moveTo(x,y);cx.lineTo(x-sl*0.012,y-16-p.s*8);}cx.stroke();}
function motes(t,col,n,sp,up){cx.fillStyle=col;for(let i=0;i<n;i++){const p=FXP[i];const x=(p.x+t*(6+p.s*10)+Math.sin(t*0.6+p.p)*14+W*8)%W,y=((up?p.y-t*sp*(0.5+p.s):p.y+Math.sin(t*0.5+p.p)*10)+H*8)%H;const r=0.8+p.s*1.4;cx.globalAlpha=0.25+0.35*p.s;cx.fillRect(x,y,r,r);}cx.globalAlpha=1;}
function flicker(pts,col,r,a,t){for(const [lx,ly] of pts){const f=a*(0.82+0.18*Math.sin(t*9+lx)*Math.sin(t*3.7+ly));const g=cx.createRadialGradient(lx,ly,0,lx,ly,r);g.addColorStop(0,'rgba('+col+','+f+')');g.addColorStop(1,'rgba('+col+',0)');cx.fillStyle=g;cx.fillRect(lx-r,ly-r,r*2,r*2);}}
function fogBand(t,col,a,y0,y1){const g=cx.createLinearGradient(0,y0,0,y1);g.addColorStop(0,'rgba('+col+',0)');g.addColorStop(0.5,'rgba('+col+','+(a*(0.85+0.15*Math.sin(t*0.3)))+')');g.addColorStop(1,'rgba('+col+',0)');cx.fillStyle=g;cx.fillRect(0,y0,W,y1-y0);}
function eraFX(id,t){cx.save();
 if(id==='west'){motes(t,'#ffd9a8',50,0,0);}
 else if(id==='chicago'){rainFX(t,0.16,300);}
 else if(id==='japan'){for(let i=0;i<34;i++){const p=FXP[i];const x=(p.x+t*(18+p.s*20)+Math.sin(t*1.1+p.p)*24)%W,y=(p.y+t*(26+p.s*24))%H;cx.save();cx.translate(x,y);cx.rotate(t*1.5+p.p);cx.fillStyle='rgba(255,180,205,0.55)';cx.beginPath();cx.ellipse(0,0,2.5+p.s*2,1.2+p.s*0.8,0,0,6.28);cx.fill();cx.restore();}}
 else if(id==='rome'){motes(t,'#ffe2a8',50,0,0);}
 else if(id==='pirate'){rainFX(t,0.2,500);if(Math.sin(t*0.9)*Math.sin(t*2.3)>0.96){cx.fillStyle='rgba(220,235,255,0.08)';cx.fillRect(0,0,W,H);}}
 else if(id==='garage'){motes(t,'#ffb070',24,20,1);}
 else if(id==='london'){fogBand(t,'185,195,210',0.12,H*0.42,H*0.8);flicker([[233,300],[510,470],[570,505],[890,480],[815,478]],'255,200,120',60,0.13,t);}
 else if(id==='egypt'){motes(t,'#ffdca0',40,0,0);flicker([[222,380],[1030,375]],'255,170,80',80,0.14,t);}
 else if(id==='miami'){motes(t,'#ffd0f0',24,0,0);}
 else if(id==='future'){rainFX(t,0.13,200);}
 else if(id==='end'){motes(t,'#ffd78a',60,22,1);}
 cx.restore();}
function vehicle(i,x,y,h,a){const f=fr('veh',i);if(!f||!f.im.complete)return;const w=f.w*h/f.h;cx.globalAlpha=a;cx.drawImage(f.im,x-w/2,y-h,w,h);cx.globalAlpha=1;}
// ---------- stage drawing ----------
function drawStage(){const d=S.def;const sh=S.shake;const shx=(Math.random()-0.5)*sh,shy=(Math.random()-0.5)*sh;const cov=S.cover?1:0;const cxo=(640-AIM.x)*0.035,cyo=(360-AIM.y)*0.025;const bt=S.btOn>0;
 cx.save();const z=1+S.punch*0.035;cx.translate(640,360);cx.scale(z,z);if(d.id==='pirate')cx.rotate(Math.sin(T*0.6)*0.012);cx.translate(-640,-360);cx.translate(shx,shy);camApply();
 drawBG(d.bg,cxo+Math.sin(T*0.07)*10,cyo,1.1);
 cx.save();cx.translate(cxo*1.4,cyo*1.2);eraFX(d.id,T);cx.translate(cxo*0.6,cyo*0.4);
 const list=[];for(const p of S.props)if(!p.gone)list.push({z:p.z,p});for(const e of S.ents)list.push({z:e.z,e});if(S.boss)list.push({z:S.boss.z,b:S.boss});list.sort((a,b)=>a.z-b.z);
 if(S.car)drawCar();for(const o of list){if(o.p)drawProp(o.p);else if(o.e)drawEnt(o.e);else drawBoss(o.b);}
 if(S.burns)for(const b of S.burns){cx.fillStyle='rgba(10,8,6,0.55)';cx.beginPath();cx.ellipse(b.x,b.y,b.w*0.6,12,0,0,6.28);cx.fill();}
 fxDraw();
 if(S.clock){const c=S.clock,p=0.6+0.4*Math.sin(T*8);cx.save();cx.translate(c.x,c.y+Math.sin(T*3)*4);cx.globalCompositeOperation='lighter';cx.globalAlpha=0.5*p;cx.drawImage(GLOW,-40,-40,80,80);cx.restore();cx.save();cx.translate(c.x,c.y+Math.sin(T*3)*4);bezel(0,0,16,'#f3ead7');cx.strokeStyle='#222';cx.lineWidth=2;cx.beginPath();cx.moveTo(0,0);cx.lineTo(0,-9);cx.moveTo(0,0);cx.lineTo(Math.cos(T*4)*8,Math.sin(T*4)*8);cx.stroke();cx.fillStyle=BR.brass;cx.fillRect(-3,-22,6,6);cx.restore();}
 cx.restore();
 // foreground strip: strongest parallax
 const fg=IMG['fg_'+d.bg+'.webp'];if(fg&&fg.complete)cx.drawImage(fg,(W-W*1.12)/2+cxo*2.2,(H-H*1.12)/2+H*0.06+cyo*1.5,W*1.12,H*1.12);
 cx.restore();
 {const GC={west:'#ff9a50',chicago:'#3f7a6c',japan:'#c070a0',rome:'#ffc070',pirate:'#3f6a82',garage:'#406080',london:'#5a7ea0',egypt:'#ff9a40',miami:'#c050c0',future:'#4a50c8',end:'#9060d0'}[d.id];if(GC){cx.save();cx.globalCompositeOperation='soft-light';cx.globalAlpha=0.22;cx.fillStyle=GC;cx.fillRect(0,0,W,H);cx.restore();}}
 // bullet-time noir grade: desaturate world, keep bullets / marks in colour
 if(bt){cx.save();cx.globalCompositeOperation='saturation';cx.fillStyle='rgba(128,128,128,0.85)';cx.fillRect(0,0,W,H);cx.globalCompositeOperation='source-over';cx.fillStyle='rgba(20,120,200,0.12)';cx.fillRect(0,0,W,H);cx.restore();}
 cx.save();cx.translate(cxo,cyo);
 for(const e of S.ents)if(e.st==='aim'){const g=entGeom(e);drawRing(g.x,g.y-g.h*0.6,e.t/e.aimT,g.h,e.elite);}
 if(S.boss&&!S.boss.dead){const g=bossGeom(S.boss);for(const r of S.boss.rings)if(r.t>0)drawRing(g.x+r.ox*g.w,g.y-g.h+r.oy*g.h,r.t/r.aim,260);}
 for(const q of S.bullets){const p=bulletPos(q);const hot=bt||q.thrown||q.kind==='ball';cx.strokeStyle=bt?'rgba(140,240,255,0.75)':q.kind==='orb'?'rgba(255,220,120,0.8)':'rgba(255,190,90,0.7)';cx.lineWidth=Math.max(1,p.r*0.4);cx.beginPath();q.trail.forEach((t,i)=>i?cx.lineTo(t[0],t[1]):cx.moveTo(t[0],t[1]));cx.stroke();
  if(q.kind==='ball'||q.kind==='bomb'){cx.fillStyle='#141414';cx.beginPath();cx.arc(p.x,p.y,p.r*0.8,0,6.28);cx.fill();cx.strokeStyle='rgba(255,160,60,0.9)';cx.lineWidth=2;cx.stroke();}
  else if(q.thrown){cx.save();cx.translate(p.x,p.y);cx.rotate(T*14);cx.fillStyle=q.kind==='dyn'?'#c33':q.kind==='disc'?'#f2c14e':'#ccd';cx.fillRect(-p.r*0.6,-p.r*0.18,p.r*1.2,p.r*0.36);cx.restore();}
  const g=cx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*1.8);g.addColorStop(0,'#fff');g.addColorStop(0.35,bt?'#7ff':q.kind==='orb'?'#ffd166':'#ffb347');g.addColorStop(1,'rgba(255,120,40,0)');cx.fillStyle=g;cx.beginPath();cx.arc(p.x,p.y,p.r*(q.kind==='ball'?1:1.8),0,6.28);cx.fill();
  if(hot){cx.strokeStyle='rgba(120,255,255,'+(0.5+0.4*Math.sin(T*20))+')';cx.lineWidth=2;cx.beginPath();cx.arc(p.x,p.y,p.r+18,0,6.28);cx.stroke();}}
 S.marks.forEach((e,i)=>{const g=entGeom(e);const x=g.x,y=g.y-g.h*0.9,r=26;cx.strokeStyle='#7ff8ff';cx.lineWidth=3;for(const [a,b] of [[-1,-1],[1,-1],[1,1],[-1,1]]){cx.beginPath();cx.moveTo(x+a*r,y+b*(r-10));cx.lineTo(x+a*r,y+b*r);cx.lineTo(x+a*(r-10),y+b*r);cx.stroke();}txt(String(i+1),x+r+6,y-r+4,22,'#7ff8ff','left',FONT_T,4);});
 cx.restore();
 if(S.muzzle>0){cx.globalCompositeOperation='lighter';cx.globalAlpha=0.35;cx.drawImage(GLOW,AIM.x-22,AIM.y-22,44,44);cx.globalAlpha=1;cx.globalCompositeOperation='source-over';}
 if(S.camK>0.01)drawCoverEdge();
 if(bt||S.btFlash>0){const a=bt?1:S.btFlash;cx.save();cx.setTransform(1,0,0,1,0,0);cx.globalAlpha=0.16*a;cx.globalCompositeOperation='screen';cx.drawImage(cv,-7*SC,0);cx.drawImage(cv,7*SC,0);cx.restore();cx.save();cx.setTransform(SC,0,0,SC,0,0);
  const vg=cx.createRadialGradient(640,360,220,640,360,760);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,25,50,'+0.6*a+')');cx.fillStyle=vg;cx.fillRect(0,0,W,H);
  if(S.btFlash>0){for(let i=0;i<2;i++){const r=(1-S.btFlash)*(900-i*200);cx.strokeStyle='rgba(200,255,255,'+S.btFlash*(1-i*0.4)+')';cx.lineWidth=12*S.btFlash;cx.beginPath();cx.arc(640,360,Math.max(1,r),0,6.28);cx.stroke();}}
  if(bt){cx.save();cx.translate(640,360);cx.rotate(-T*0.6);cx.strokeStyle='rgba(150,240,255,0.14)';cx.lineWidth=3;for(let i=0;i<12;i++){cx.rotate(Math.PI/6);cx.beginPath();cx.moveTo(300,0);cx.lineTo(330,0);cx.stroke();}cx.beginPath();cx.arc(0,0,315,0,6.28);cx.stroke();cx.restore();
   txt(S.btFree>0&&!S.marks.length?'SLOW-MO':S.marks.length?'MARKED '+S.marks.length+'/6 \u00b7 TAP CUFF TO EXECUTE':'BULLET TIME \u00b7 TAP TO MARK',640,124,30,'rgba(170,250,255,0.95)','center',FONT_T,5);}
  cx.restore();}
 if(S.dmgFlash>0){cx.fillStyle='rgba(255,20,40,'+0.4*S.dmgFlash+')';cx.fillRect(0,0,W,H);}
 if(G.hp===1&&!S.cover){cx.fillStyle='rgba(255,0,40,'+(0.08+0.06*Math.sin(T*6))+')';cx.fillRect(0,0,W,H);}
 drawHUD();}
function drawRing(x,y,k,h,elite){k=clamp(k,0,1);const r=lerp(Math.max(70,h*0.42),16,k);const col=elite?'255,40,60':k<0.6?'255,220,60':'255,60,60';const blink=k>0.75&&Math.floor(T*16)%2;cx.strokeStyle='rgba('+col+','+(blink?0.55:0.95)+')';cx.lineWidth=3+k*3+(elite?2:0);cx.beginPath();cx.arc(x,y,r,0,6.28);cx.stroke();
 cx.save();cx.translate(x,y);cx.rotate(T*3);for(let i=0;i<4;i++){cx.rotate(Math.PI/2);cx.beginPath();cx.moveTo(r+4,0);cx.lineTo(r+14,0);cx.stroke();}cx.restore();cx.fillStyle='rgba('+col+',0.9)';cx.beginPath();cx.arc(x,y,4,0,6.28);cx.fill();if(elite)txt('ELITE',x,y-r-10,16,'#ff4d5e','center',FONT_T,3);}
function drawProp(p){const r=propRect(p);if(!r.f||!r.f.im.complete)return;cx.fillStyle='rgba(0,0,0,0.38)';cx.beginPath();cx.ellipse(p.x,r.y+r.h-4,r.w*0.5,r.h*0.06,0,0,6.28);cx.fill();cx.drawImage(r.f.im,r.x,r.y,r.w,r.h);
 if(p.xb){cx.save();cx.globalCompositeOperation='multiply';cx.fillStyle='#d23a2a';cx.beginPath();cx.ellipse(p.x,r.y+r.h*0.55,r.w*0.42,r.h*0.45,0,0,6.28);cx.fill();cx.restore();cx.fillStyle='#ffd166';cx.beginPath();cx.moveTo(p.x,r.y+r.h*0.3);cx.lineTo(p.x+r.w*0.12,r.y+r.h*0.52);cx.lineTo(p.x-r.w*0.12,r.y+r.h*0.52);cx.closePath();cx.fill();txt('!',p.x,r.y+r.h*0.5,r.h*0.18,'#111','center',FONT_T);}
 cx.fillStyle='rgba(15,10,8,0.85)';for(const h of p.holes){cx.beginPath();cx.arc(r.x+h[0]*r.w,r.y+h[1]*r.h,2.6,0,6.28);cx.fill();}}
function drawEntLook(e){const g=entGeom(e);const f=fr(e.key,entFrame(e));if(!f||!f.im.complete)return;const w=f.w*g.s,h=f.h*g.s;
 let a=1;if(e.st==='enter'&&e.mode==='warp')a=clamp(e.t/0.45,0,1);if(e.st==='exit')a=1-clamp(e.t/0.5,0,1);if(e.st==='dead'&&e.t>1.1)a=1-(e.t-1.1)/0.5;
 cx.fillStyle='rgba(0,0,0,'+0.38*a+')';cx.beginPath();cx.ellipse(g.x,groundY(e.z),g.w*0.32,g.h*0.035,0,0,6.28);cx.fill();
 if(e.elite&&e.st!=='dead'){cx.strokeStyle='rgba(255,40,60,0.8)';cx.lineWidth=3;cx.beginPath();cx.ellipse(g.x,groundY(e.z),g.w*0.36,g.h*0.045,0,0,6.28);cx.stroke();}
 cx.save();if(e.mode==='pop'&&e.st==='enter'){cx.beginPath();cx.rect(g.x-w,0,w*2,groundY(e.z));cx.clip();}
 cx.globalAlpha=a;let fx=g.x;if(e.kind==='c'&&e.vx<0){cx.translate(g.x,0);cx.scale(-1,1);fx=0;}
 const fall=e.st==='dead'?Math.min(1,e.t/0.25):0;
 if((e.st==='enter'&&e.mode==='warp')||e.st==='exit'){for(let i=0;i<6;i++){const sy=g.y-h+i*h/6;cx.drawImage(f.im,0,f.h*i/6,f.w,f.h/6,fx-w/2+(Math.random()-0.5)*34*(1-a),sy,w,h/6);}}
 else cx.drawImage(f.im,fx-w/2,g.y-h+(e.st==='dead'?(1-fall)*-10:0),w,h);
 if(e.flash>0){cx.globalAlpha=0.6;cx.globalCompositeOperation='lighter';cx.drawImage(f.im,fx-w/2,g.y-h,w,h);}
 cx.restore();if(e.st==='dead'&&e.t<0.3&&!e.dust){e.dust=1;}if(e.st==='dead'&&e.t>0.25&&e.dust===1){e.dust=2;smoke(g.x,groundY(e.z),2,g.h*0.12,'#a99',8);}
 if(e.kind==='c'&&e.hitOnce)txt('!',g.x,g.y-g.h-10,40,'#ff4d4d','center',FONT_T,5);}
// ---------- HUD (brand kit) ----------
function shell(x,y,full){const g=cx.createLinearGradient(x-6,0,x+6,0);g.addColorStop(0,full?'#8a5a1c':'#333');g.addColorStop(0.5,full?'#ffe1a0':'#555');g.addColorStop(1,full?'#a8701f':'#2a2a2a');cx.fillStyle=g;rrect(x-6,y-24,12,24,2);cx.fill();cx.fillStyle=full?'#c0703a':'#3a3a3a';cx.beginPath();cx.moveTo(x-6,y-24);cx.quadraticCurveTo(x,y-38,x+6,y-24);cx.fill();}
function drawHUD(){const st=S.st;
 cx.fillStyle='rgba(7,6,13,0.72)';rrect(16,12,340,96,10);cx.fill();cx.strokeStyle=brassGrad(16,12,356,108);cx.lineWidth=2;cx.stroke();
 txt(String(Math.round(G.score)).padStart(8,'0'),32,64,48,BR.ivory,'left',FONT_T);txt((S.daily?'DAILY \u00b7 ':'')+S.def.place+' \u00b7 '+S.def.year,32,94,17,S.def.acc||BR.cyan,'left',FONT_T);
 // combo dial (watch face)
 const m=S.mult,dx=640,dy=62;bezel(dx,dy,50);for(let i=0;i<8;i++){const an=-Math.PI/2+i*Math.PI/4;cx.strokeStyle=i<m?(m>=8?'#ff3fa4':BR.cyan):'rgba(243,234,215,0.25)';cx.lineWidth=4;cx.beginPath();cx.moveTo(dx+Math.cos(an)*34,dy+Math.sin(an)*34);cx.lineTo(dx+Math.cos(an)*42,dy+Math.sin(an)*42);cx.stroke();}
 const an=-Math.PI/2+(m-1+(S.chain%3)/3)*Math.PI/4;cx.strokeStyle=BR.brass;cx.lineWidth=3;cx.beginPath();cx.moveTo(dx,dy);cx.lineTo(dx+Math.cos(an)*30,dy+Math.sin(an)*30);cx.stroke();txt('x'+m,dx,dy+14,m>=8?36:32,m>=6?'#ff3fa4':m>=3?'#ffd166':BR.ivory,'center',FONT_T,4);txt('COMBO',dx,dy+66,13,BR.brass,'center',FONT_T);
 if(S.daily)txt(Math.max(0,90-S.t).toFixed(1),790,72,40,BR.ivory,'center',FONT_T,5);else if(S.def.bonus)txt(Math.max(0,30-S.t).toFixed(1),790,72,40,'#ffd166','center',FONT_T,5);else txt(Math.floor(S.t)+'s',780,70,24,'#cde','center',FONT_T,4);
 if(S.boss&&!S.boss.dead){const k=S.boss.hp/S.boss.max;cx.fillStyle='rgba(7,6,13,0.7)';rrect(340,128,600,26,6);cx.fill();cx.strokeStyle=brassGrad(340,128,940,154);cx.lineWidth=2;cx.stroke();const gr=cx.createLinearGradient(340,0,940,0);gr.addColorStop(0,'#ff3fa4');gr.addColorStop(1,'#ffd166');cx.fillStyle=gr;cx.fillRect(346,134,588*k,14);
  for(const q of [1/3,2/3]){cx.fillStyle=BR.noir;cx.fillRect(346+588*q-1,132,3,18);}txt(S.boss.key.indexOf('end')>=0?S.def.bossName:S.def.bossName,640,176,20,BR.ivory,'center',FONT_T,4);txt('SPEED x'+clamp(2-S.bossT/45,0.5,2).toFixed(2),940,176,15,'#ffd166','right',FONT_T,3);}
 // chrono-cuff gauge
 const b=BTN.bt;bezel(b.x,b.y,b.r);const ch=S.charge/100;for(let i=0;i<3;i++){const a0=-Math.PI/2+i*2.094+0.08,a1=a0+2.094-0.16;cx.strokeStyle='rgba(56,232,255,0.15)';cx.lineWidth=10;cx.beginPath();cx.arc(b.x,b.y,b.r-16,a0,a1);cx.stroke();const f=clamp(ch-i,0,1);if(f>0){cx.strokeStyle=f>=1?BR.cyan:'rgba(56,232,255,0.55)';cx.beginPath();cx.arc(b.x,b.y,b.r-16,a0,a0+(a1-a0)*f);cx.stroke();}}
 if(S.btOn>0){cx.strokeStyle='#fff';cx.lineWidth=3;cx.beginPath();cx.arc(b.x,b.y,b.r-28,-Math.PI/2,-Math.PI/2+6.283*S.btOn/4);cx.stroke();txt(S.marks.length?'EXECUTE':'SLOW',b.x,b.y+8,S.marks.length?18:22,'#e9fbff','center',FONT_T);}
 else{txt(String(Math.floor(ch)),b.x,b.y+12,34,ch>=1?BR.cyan:'rgba(243,234,215,0.5)','center',FONT_T);if(ch>=1){cx.globalAlpha=0.3+0.3*Math.sin(T*6);cx.strokeStyle=BR.cyan;cx.lineWidth=4;cx.beginPath();cx.arc(b.x,b.y,b.r+4,0,6.28);cx.stroke();cx.globalAlpha=1;}}
 txt('CHRONO-CUFF [F]',b.x,b.y+b.r+20,14,BR.brass,'center',FONT_T,3);
 // cover + brass shells + hearts
 const c=BTN.cover;bezel(c.x,c.y,c.r,S.cover?'rgba(56,200,255,0.45)':null);cx.fillStyle=BR.ivory;cx.beginPath();cx.moveTo(c.x,c.y-34);cx.lineTo(c.x+22,c.y-24);cx.lineTo(c.x+18,c.y-2);cx.lineTo(c.x,c.y+8);cx.lineTo(c.x-18,c.y-2);cx.lineTo(c.x-22,c.y-24);cx.closePath();cx.globalAlpha=0.8;cx.fill();cx.globalAlpha=1;txt('COVER',c.x,c.y+32,20,BR.ivory,'center',FONT_T);
 for(let i=0;i<6;i++)shell(1076-i*18,700,i<S.ammo);
 if(S.ammo===0&&!S.cover&&Math.floor(T*4)%2)txt(G.diff===0?'HOLD COVER TO RELOAD':'RELOAD!',640,560,G.diff===0?40:50,'#ff4d4d','center',FONT_T,6);
 for(let i=0;i<G.D.hp;i++){const x=36+i*32,y=126;cx.fillStyle=i<G.hp?'#ff3b5c':'rgba(255,255,255,0.15)';cx.beginPath();cx.moveTo(x,y+10);cx.bezierCurveTo(x-18,y-6,x-8,y-18,x,y-8);cx.bezierCurveTo(x+8,y-18,x+18,y-6,x,y+10);cx.fill();}
 drawFSBtn();
 for(const p of S.pops){const a=1-p.t/1.1;cx.globalAlpha=a;const y=p.y-p.t*70;const sc=1+Math.max(0,0.25-p.t)*1.6;if(p.label)txt(p.label,p.x,y-30,(p.small?16:22)*sc,p.col,'center',FONT_T,4);if(p.txt!=='+0')txt(p.txt,p.x,y,(p.small?22:30)*sc,p.col,'center',FONT_T,5);}cx.globalAlpha=1;
 if(BAN){const a=Math.min(1,BAN.t*3,(BAN.max-BAN.t)*4);cx.globalAlpha=a;const bw=Math.min(W,Math.max(520,BAN.a.length*30+80));cx.fillStyle='rgba(7,6,13,0.62)';cx.fillRect(640-bw/2,196,bw,74);cx.fillStyle=brassGrad(0,196,W,198);cx.fillRect(640-bw/2,196,bw,2);cx.fillRect(640-bw/2,268,bw,2);chromaTxt(BAN.a,640,236,BAN.a.length>22?30:40,'center');txt(BAN.b,640,260,16,'#ffd166','center',FONT_T);cx.globalAlpha=1;}
 if(S.phase==='intro')chromaTxt('ACTION!',640,380,90,'center',FONT_T,Math.min(1,S.phaseT*3));}
function drawFSBtn(){const f=BTN.fs;bezel(f.x,f.y,f.r);cx.strokeStyle=BR.ivory;cx.lineWidth=3;const s=9;cx.beginPath();for(const [sx,sy] of [[-1,-1],[1,-1],[1,1],[-1,1]]){cx.moveTo(f.x+sx*s,f.y+sy*(s-6));cx.lineTo(f.x+sx*s,f.y+sy*s);cx.lineTo(f.x+sx*(s-6),f.y+sy*s);}cx.stroke();}
function drawCross(){const x=AIM.x,y=AIM.y;let over=false;const play=SCR==='play'&&S;if(play)for(const e of S.ents)if(e.kind==='e'&&e.st!=='dead'&&hitEnt(e,x,y))over=true;
 const bt=play&&S.btOn>0;const col=bt?'#7ff8ff':over?'#ff4d5e':BR.ivory;const xh=play?S.xh:0,xk=play?S.xk:0;const r=22+xh*10;
 cx.strokeStyle='rgba(0,0,0,0.6)';cx.lineWidth=5;cx.beginPath();cx.arc(x,y,r,0,6.28);cx.stroke();cx.strokeStyle=xh>0.2?'#ffd166':col;cx.lineWidth=2.5;
 if(bt){cx.save();cx.translate(x,y);cx.rotate(T*2);for(let i=0;i<6;i++){cx.beginPath();cx.arc(0,0,r,i*1.047,i*1.047+0.7);cx.stroke();}cx.restore();}else{cx.beginPath();cx.arc(x,y,r,0,6.28);cx.stroke();}
 cx.beginPath();for(const [a,b] of [[1,0],[-1,0],[0,1],[0,-1]]){cx.moveTo(x+a*(r-10),y+b*(r-10));cx.lineTo(x+a*(r+10),y+b*(r+10));}cx.stroke();cx.fillStyle=col;cx.fillRect(x-2,y-2,4,4);
 if(xk>0){cx.strokeStyle='rgba(255,60,80,'+xk+')';cx.lineWidth=4;cx.beginPath();cx.moveTo(x-14,y-14);cx.lineTo(x+14,y+14);cx.moveTo(x+14,y-14);cx.lineTo(x-14,y+14);cx.stroke();}}
// ---------- screens ----------
let VOL=+(localStorage.getItem('bt.vol')||0.8);
function setVol(v){VOL=v;try{localStorage.setItem('bt.vol',String(v));}catch(e){}if(MASTER)MASTER.gain.value=VOL;}
function drawTitle(){drawBG('end',Math.sin(T*0.1)*14,0,1.12);eraFX('end',T);cx.fillStyle='rgba(5,4,12,0.58)';cx.fillRect(0,0,W,H);
 const h=fr('hero2',1),c=fr('boss_end',0);if(h&&h.im.complete){cx.drawImage(h.im,-20,H-560,h.w*560/h.h,560);}if(c&&c.im.complete){cx.globalAlpha=0.85;const ch=600;cx.drawImage(c.im,0,0,c.w,c.h*0.8,W-c.w*ch/(c.h*0.8)+10,H-ch,c.w*ch/(c.h*0.8),ch);}cx.globalAlpha=1;
 drawLogo(640,190,0.9);
 button(470,300,340,62,'STORY MODE',()=>go('diff'));button(470,374,340,62,'DAILY CHALLENGE',()=>startDaily());txt('90 SECONDS \u00b7 DETECTIVE RULES \u00b7 SAME RUN FOR EVERYONE TODAY',640,456,13,'#9fe8ff','center',FONT_T);
 button(470,470,110,50,'HOW TO',()=>go('how'),{size:18});button(585,470,110,50,'SCORES',()=>{BOARD='story';go('board');},{size:18});button(700,470,110,50,'SETTINGS',()=>{SETBACK='title';go('set');},{size:16});
 txt('TAP / CLICK TO SHOOT \u00b7 HOLD COVER (RIGHT-CLICK / SPACE) TO RELOAD \u00b7 CUFF (F) = BULLET TIME',640,704,15,'#cde','center',FONT_T);drawFSBtn();UI.push({x:1210,y:14,w:52,h:52,fn:toggleFS});}
function drawDiff(){drawBG('future',0,0,1.1);cx.fillStyle='rgba(5,4,12,0.72)';cx.fillRect(0,0,W,H);chromaTxt('CHOOSE YOUR BADGE',640,110,64,'center');
 const info=[['6 hearts. Slow lock-on rings. Continues allowed (cost 30% of score).','Score x1'],['5 hearts. The intended fight. Continues cost 30% of score.','Score x1.5'],['4 hearts. No continues. Marked elites hit for 2.','Score x2.25']];
 DIFFS.forEach((d,i)=>{const x=90+i*380;button(x,190,340,330,'',()=>startStory(i));txt(d.n,x+170,280,46,i===2?'#ff3fa4':i===1?'#ffd166':'#7ff8ff','center',FONT_T,4);txt(info[i][1],x+170,340,30,BR.ivory,'center',FONT_T);
  wrap(info[i][0],280,24).forEach((l,k)=>txt(l,x+170,400+k*30,24,'#cde','center',FONT_C));});button(540,580,200,54,'BACK',()=>go('title'),{size:22});}
function drawHow(){drawBG('garage',0,0,1.1);cx.fillStyle='rgba(5,4,12,0.82)';cx.fillRect(0,0,W,H);chromaTxt('HOW TO PLAY',640,80,54,'center');
 const L=[['SHOOT','Click or tap. Your crosshair is your gun. A shrinking ring = a shot is coming.'],['COVER','Hold COVER, right-click or Space to reload and dodge. Duck just before a shot lands for a PERFECT DODGE.'],['CHRONO-CUFF','3 charges, filled by headshots, combos and close calls. Tap the cuff or press F to slow time.'],['IN SLOW-MO','Shoot bullets out of the air. Tap up to 6 enemies to MARK them, tap the cuff again to EXECUTE.'],['TRICKS','Thrown bombs and cannonballs can be shot any time. Volatile era objects (powder, oil, gas) explode — watch for a faint spark. Metal cover ricochets in slow-mo.'],['DON\u2019T','Shoot civilians (-500, combo reset). Find the hidden pocket watch for a heart.']];
 L.forEach((r,i)=>{const y=120+i*72;txt(r[0],100,y+26,24,'#ffd166','left',FONT_T);wrap(r[1],800,22).forEach((l,k)=>txt(l,330,y+22+k*24,22,'#e8f2ff','left',FONT_C));});
 txt('KILL 100 \u00b7 HEADSHOT x2 \u00b7 COMBO UP TO x8 \u00b7 PARRY +250 \u00b7 RICOCHET +500 \u00b7 PERFECT DODGE +300 \u00b7 EXECUTE CHAIN x1/2/4/8',640,580,16,'#9fe8ff','center',FONT_T);txt('STAGE BONUSES: ACCURACY, TIME, NO DAMAGE \u00b7 DIFFICULTY x1 / x1.5 / x2.25',640,606,16,'#9fe8ff','center',FONT_T);
 button(540,640,200,50,'BACK',()=>go('title'),{size:20});}
function drawGameOver(){drawStage();cx.fillStyle='rgba(30,0,10,'+Math.min(0.8,SCRT)+')';cx.fillRect(0,0,W,H);chromaTxt("TIME'S UP, DETECTIVE",640,300,80,'center');
 if(G.D.cont&&!G.over&&!G.daily){txt('CONTINUE COSTS 30% OF YOUR SCORE (-'+Math.round(G.score*0.3)+')',640,360,24,'#ffd166','center',FONT_T,4);if(SCRT>0.8){button(380,400,250,60,'CONTINUE',continueRun);button(650,400,250,60,'GIVE UP',giveUp);}}
 else{txt('THE CLOCKMAKER GOT AWAY... THIS TIME.',640,360,26,'#ffd166','center',FONT_T);if(SCRT>1.2)button(490,420,300,60,'SEE THE FILE',()=>go('final'));}}
function drawLoad(){cx.fillStyle=BR.noir;cx.fillRect(0,0,W,H);drawLogo(640,300,0.8);const k=toLoad?loaded/toLoad:0;cx.fillStyle='rgba(255,255,255,0.12)';cx.fillRect(440,430,400,6);cx.fillStyle=BR.cyan;cx.fillRect(440,430,400*k,6);
 if(assetsReady&&loaded>=toLoad&&toLoad>20){halftone();go('title');boot();}}
function drawComicBase(dt){COM.t+=dt;cx.fillStyle=BR.noir;cx.fillRect(0,0,W,H);const pg=COMICS[COM.key][COM.page];const lay=LAY[pg.length];
 for(let i=0;i<COM.shown;i++){const a=i===COM.shown-1?clamp(COM.t*2.4,0,1):1;const r=lay[i];const e=1-Math.pow(1-a,3);cx.save();cx.beginPath();cx.rect(r[0]-6,r[1]-6,(r[2]+12)*e,r[3]+12);cx.clip();cx.translate((1-e)*40,0);drawPanel(pg[i],r,1);cx.restore();
  if(a<1){cx.fillStyle=BR.cyan;cx.fillRect(r[0]+(r[2]+12)*e-8,r[1],4,r[3]);}}
 if(Math.floor(T*2)%2)txt('TAP \u25B6',1250,712,18,'#ffe9a8','right',FONT_T);}
function drawBrand(){cx.fillStyle=BR.noir;cx.fillRect(0,0,W,H);drawLogo(400,200,0.75);
 const sw=[['NOIR',BR.noir],['RIFT CYAN',BR.cyan],['BRASS',BR.brass],['IVORY',BR.ivory]];sw.forEach((s,i)=>{cx.fillStyle=s[1];rrect(760+i*125,60,110,80,8);cx.fill();cx.strokeStyle=BR.brass;cx.lineWidth=1.5;cx.stroke();txt(s[0],815+i*125,162,15,BR.ivory,'center',FONT_T);});
 STAGES.forEach((s,i)=>{cx.fillStyle=s.acc;rrect(760+(i%6)*82,190+Math.floor(i/6)*72,70,36,6);cx.fill();txt(s.id.toUpperCase(),795+(i%6)*82,244+Math.floor(i/6)*72,12,'#cde','center',FONT_T);});
 button(80,380,300,60,'BUTTON',()=>{});bezel(500,410,50);txt('x3',500,424,32,'#ffd166','center',FONT_T);bezel(640,410,58);for(let i=0;i<3;i++){cx.strokeStyle=i<2?BR.cyan:'rgba(56,232,255,0.2)';cx.lineWidth=10;cx.beginPath();cx.arc(640,410,42,-1.57+i*2.094+0.08,-1.57+(i+1)*2.094-0.08);cx.stroke();}txt('2',640,422,32,BR.cyan,'center',FONT_T);
 for(let i=0;i<6;i++)shell(760+i*20,440,i<4);const sv=AIM;AIM={x:960,y:410};drawCross();AIM=sv;txt('ANTON + BANGERS \u00b7 BRASS BEZELS \u00b7 RIFT GLOW \u00b7 FILM GRAIN',640,520,20,BR.brass,'center',FONT_T);
 drawPanel({bg:'lab',f:0.5,z:0.6,caps:['Caption style: cream box, ink border, Bangers lettering.'],ch:[H1,'r'],say:'Speech bubble.'},[80,550,1120,160],1);}
// ---------- audio: richer original score ----------
let REV=null,AMB=null,BTA=null;
function audioPlus(){if(!AC||REV)return;MASTER.gain.value=VOL;REV=AC.createConvolver();const len=AC.sampleRate*2.4;const ir=AC.createBuffer(2,len,AC.sampleRate);for(let c=0;c<2;c++){const d=ir.getChannelData(c);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,3);}REV.buffer=ir;const rg=AC.createGain();rg.gain.value=0.28;MUSG.connect(REV);REV.connect(rg);rg.connect(MASTER);
 const comp=AC.createDynamicsCompressor();comp.threshold.value=-14;comp.ratio.value=4;SFXG.disconnect();SFXG.connect(comp);comp.connect(MASTER);}
function voice(f,t,dur,type,vol,cut,det,dest){const o=AC.createOscillator(),o2=det?AC.createOscillator():null,fl=AC.createBiquadFilter(),g=AC.createGain();o.type=type;o.frequency.value=f;if(o2){o2.type=type;o2.frequency.value=f;o2.detune.value=det;}
 fl.type='lowpass';fl.frequency.setValueAtTime(cut*2,t);fl.frequency.exponentialRampToValueAtTime(Math.max(80,cut*0.5),t+dur);g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+Math.min(0.03,dur*0.2));g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
 o.connect(fl);if(o2)o2.connect(fl);fl.connect(g);g.connect(dest||MUSG);o.start(t);o.stop(t+dur+0.05);if(o2){o2.start(t);o2.stop(t+dur+0.05);}}
Object.assign(ERAMUS,{rome:{bpm:108,root:41,scale:[0,2,3,5,7,8,10],lead:'sawtooth',drum:4},pirate:{bpm:132,root:43,scale:[0,2,3,5,7,8,10],lead:'square',drum:2},london:{bpm:100,root:44,scale:[0,2,3,5,7,8,11],lead:'triangle',drum:3},egypt:{bpm:96,root:40,scale:[0,1,4,5,7,8,10],lead:'sawtooth',drum:4}});
const LEADS={};function leadFor(name){if(LEADS[name])return LEADS[name];const R=rng(hstr('lead-'+name));const ph=[];for(let i=0;i<32;i++)ph.push(R()<0.55?Math.floor(R()*7):-1);return LEADS[name]=ph;}
let BOSSM=false;function musicBoss(v){BOSSM=v;}
function musicTickLook(){if(!AC||!mus.on)return;audioPlus();const c=mus.cfg;const spb=60/c.bpm/4*mus.slow;const lead=leadFor(mus.name||'title');const sc=c.scale;
 while(mus.next<AC.currentTime+0.15){const t=mus.next,s=mus.step%64,bar=(mus.step>>4)%4;const prog=[0,-4,3,-2][bar];const r=c.root+prog;const I=BOSSM?1:0;
  try{
  if(s%4===0||s%16===14||(I&&s%2===0))voice(mtof(r),t,spb*1.8,'sawtooth',0.13,400+I*300,8);
  if(s%16===0)for(const p of [0,sc[2]||3,7,12])voice(mtof(r+12+p),t,spb*16,'sawtooth',0.022,1400,12);
  if(s%2===0){const n=sc[(s*3+bar*2)%sc.length];voice(mtof(r+24+n),t,spb*1.4,c.wave||'triangle',0.03,2600,0);}
  if(s%2===0){const li=lead[(mus.step>>1)%32];if(li>=0&&mus.name!=='title'||li>=0&&s%4===0)voice(mtof(r+36+sc[li%sc.length]),t,spb*(li%3===0?3.5:1.8),c.lead||'square',0.028,3200,6);}
  if(c.drum){if(s%4===0)tone(110,0.2,'sine',0.42,MUSG,t,38);if(s%8===4){noise(0.16,0.26,'bandpass',1900,MUSG,t,0.7);tone(190,0.08,'triangle',0.12,MUSG,t,120);}
   if(s%2===1)noise(0.03,0.05+I*0.04,'highpass',8000,MUSG,t);if(c.drum===4&&s%8===6)tone(70,0.4,'sine',0.3,MUSG,t,50);if(c.drum===3&&s%16===10)noise(0.12,0.15,'bandpass',1200,MUSG,t);if(I&&s%16===15)noise(0.5,0.12,'highpass',5000,MUSG,t);}
  }catch(e){}
  mus.next+=spb;mus.step++;}
 // bullet-time heartbeat + clock ticks
 if(S&&S.btOn>0&&SCR==='play'){if(!btTick.n||AC.currentTime>btTick.n){btTick.n=AC.currentTime+0.42;btTick.k=(btTick.k||0)+1;tone(2600,0.03,'square',0.06);if(btTick.k%2===0){tone(55,0.18,'sine',0.5,null,0,40);tone(55,0.16,'sine',0.35,null,AC.currentTime+0.16,40);}}}}
function btTick(){}
function btAudio(on){if(!AC)return;if(LP)LP.frequency.setTargetAtTime(on?700:18000,AC.currentTime,on?0.06:0.25);mus.slow=on?2.4:1;}
function ambStart(id){if(!AC||!NOISE)return;ambStop();const src=AC.createBufferSource();src.buffer=NOISE;src.loop=true;const f=AC.createBiquadFilter();const g=AC.createGain();
 const cfg={west:['bandpass',500,0.05],chicago:['highpass',1500,0.07],japan:['bandpass',700,0.03],rome:['bandpass',900,0.06],pirate:['lowpass',700,0.12],garage:['lowpass',300,0.05],london:['bandpass',350,0.06],egypt:['bandpass',450,0.04],miami:['lowpass',500,0.05],future:['highpass',1800,0.07],end:['bandpass',250,0.05]}[id]||['lowpass',400,0.03];
 f.type=cfg[0];f.frequency.value=cfg[1];g.gain.value=cfg[2];const lfo=AC.createOscillator(),lg=AC.createGain();lfo.frequency.value=0.13;lg.gain.value=cfg[2]*0.6;lfo.connect(lg);lg.connect(g.gain);lfo.start();src.connect(f);f.connect(g);g.connect(MASTER);src.start();AMB={src,lfo};}
function ambStop(){if(AMB){try{AMB.src.stop();AMB.lfo.stop();}catch(e){}AMB=null;}}
Object.assign(SFX,{
 shot(){noise(0.22,0.8,'lowpass',3200);noise(0.05,0.5,'highpass',4000);tone(120,0.2,'sine',0.6,null,0,40);tone(1400,0.02,'square',0.08);},
 rico(){tone(3000,0.25,'sine',0.18,null,0,900);tone(4200,0.18,'triangle',0.08,null,AC.currentTime+0.02,1500);},
 glass(){for(let i=0;i<5;i++)tone(3000+Math.random()*3000,0.12,'triangle',0.06,null,AC.currentTime+i*0.02);noise(0.2,0.25,'highpass',6000);},
 cannon(){noise(0.8,0.7,'lowpass',380);tone(60,0.7,'sine',0.5,null,0,28);},
 throw(){noise(0.25,0.18,'bandpass',1500,null,0,4);},
 chime(){[0,4,7,12].forEach((n,i)=>tone(mtof(84+n),0.5,'sine',0.12,null,AC.currentTime+i*0.06));},
 stinger(){[0,-5,-12].forEach((n,i)=>{voice(mtof(48+n),AC.currentTime,0.9,'sawtooth',0.12,1200,10,SFXG);});noise(1.2,0.25,'highpass',5000);tone(40,1,'sine',0.5,null,0,30);},
 stinger2(){[0,7,12,19].forEach((n,i)=>voice(mtof(60+n),AC.currentTime,1.2,'sawtooth',0.07,3000,8,SFXG));},
 jingle(){[0,4,7,11,12,16].forEach((n,i)=>tone(mtof(72+n),0.28,'triangle',0.12,null,AC.currentTime+i*0.09));},
 btOn(){tone(900,1.0,'sawtooth',0.12,null,0,60);noise(1.0,0.3,'bandpass',500,null,0,2);tone(40,0.8,'sine',0.5,null,0,25);},
});
function audioInitLook(){audioInitBase();audioPlus();}
// ---------- human-like bot ----------
let HB={cd:0,cov:0,tgt:null,react:0,marks:0};
function botTickBase(dt){window.__BTLOG=window.__BTLOG||[];
 if(SCR!=='play'){HB.cd-=dt;if(HB.cd>0)return;HB.cd=SCR==='card'?3:0.9;
  if(SCR==='title')go('diff');else if(SCR==='diff')startStory(+(Q.get('diff')||1));else if(SCR==='comic')comicAdvance();else if(SCR==='card')beginPlay();else if(SCR==='sres'&&SCRT>1)afterStage();
  else if(SCR==='gameover'&&SCRT>1.3){if(G.D.cont&&!G.over&&!G.daily){window.__BTLOG.push({cont:S.def.id,t:Math.round(S.t)});continueRun();}else go('final');}
  else if(SCR==='final'&&SCRT>1){if(lbQualifies(G.mode,G.score)){NAME={l:[1,14,19],i:0};saveName();}else go('board');}return;}
 if(!S||S.phase==='intro'||S.phase==='done')return;
 if(HB.cov>0){HB.cov-=dt;if(HB.cov<=0)setCover(false);return;}
 HB.cd-=dt;HB.react-=dt;
 for(const q of S.bullets){if(q.seen||q.dead)continue;if(S.btOn<=0&&(q.dur-q.t)<0.4){q.seen=1;if(!(q.thrown||q.kind==='ball')||Math.random()<0.6){if(Math.random()<0.62){setCover(true);HB.cov=0.5;return;}}}}
 if(S.ammo===0){setCover(true);HB.cov=0.5;return;}
 if(S.btOn<=0&&S.charge>=btCost()&&(S.ents.filter(e=>e.st==='aim').length>=2||S.bullets.some(q=>q.kind==='orb'))){startBT();HB.marks=0;return;}
 if(HB.cd>0)return;HB.cd=0.22+Math.random()*0.12;
 const acc=0.75;const shootAt=(x,y,big)=>{let ok=Math.random()<acc;if(!ok){const a=Math.random()*6.28,d=50+Math.random()*80;x+=Math.cos(a)*d;y+=Math.sin(a)*d;}AIM.x=x;AIM.y=y;shoot(x,y);};
 if(S.btOn>0){const orb=S.bullets.find(q=>q.kind==='orb');if(orb){const p=bulletPos(orb);shootAt(p.x,p.y);return;}
  const cand=S.ents.filter(e=>e.kind==='e'&&e.st!=='dead'&&e.st!=='enter'&&!S.marks.includes(e));if(cand.length&&S.marks.length<4&&Math.random()<0.8){const g=entGeom(cand[0]);AIM.x=g.x;AIM.y=g.y-g.h*0.6;shoot(AIM.x,AIM.y);return;}
  if(S.marks.length>=2){startBT();return;}const q=S.bullets[0];if(q&&Math.random()<0.5){const p=bulletPos(q);shootAt(p.x,p.y);return;}}
 if(S.clock&&Math.random()<0.3){shootAt(S.clock.x,S.clock.y);return;}
 let tg=null,best=-1;for(const e of S.ents){if(e.kind!=='e'||e.st==='dead'||e.st==='enter'||e.st==='exit')continue;const u=e.st==='aim'?1+e.t/e.aimT:e.z;if(u>best){best=u;tg=e;}}
 const th=S.bullets.find(q=>(q.thrown||q.kind==='ball')&&q.t/q.dur>0.25);if(th&&Math.random()<0.45){const p=bulletPos(th);shootAt(p.x,p.y);return;}
 if(tg){if(HB.tgt!==tg){HB.tgt=tg;HB.react=0.25+Math.random()*0.15;return;}if(HB.react>0)return;const g=entGeom(tg);const head=Math.random()<0.35;shootAt(g.x+(Math.random()-0.5)*g.w*0.1,head?g.y-g.h*0.92:g.y-g.h*0.55);return;}
 if(S.boss&&!S.boss.dead){const b=S.boss,g=bossGeom(b),wp=S.def.weak[b.weak];shootAt(g.x+(wp[0]-0.5)*g.w,g.y-g.h+wp[1]*g.h);return;}
 if(S.car){const c=S.car,p=c.parts.find(p=>!p.down);if(!p)return;shootAt(c.x-c.w/2+(p.r[0]+p.r[2])/2*c.w,c.y-c.h+(p.r[1]+p.r[3])/2*c.h);}}
// ===================== era cover props (painted, graded, grounded) =====================
// [frameIndex, x, z, material, relHeight(vs. character height at that depth), flip]
const CVP={
 west:[[0,300,.82,'wood',.56],[1,985,.74,'wood',.42],[1,640,.42,'wood',.42,1]],
 chicago:[[1,300,.84,'wood',.55],[1,960,.74,'wood',.55,1]],
 japan:[[2,215,.8,'wood',.55,1],[1,700,.58,'stone',.7],[2,470,.36,'wood',.55]],
 rome:[[0,330,.82,'stone',.34],[1,960,.74,'wood',.62],[0,640,.42,'stone',.34,1]],
 pirate:[[0,330,.84,'metal',.5],[1,880,.76,'wood',.6],[1,600,.42,'wood',.55,1]],
 london:[[0,360,.84,'wood',.5],[1,890,.78,'metal',.78],['props2',3,700,.4,'metal',.8]],
 egypt:[[0,300,.8,'stone',.4],[0,960,.74,'stone',.4,1]],
 miami:[[0,820,.72,'stone',.7],[0,400,.84,'stone',.7,1]],
 future:[[0,300,.8,'metal',.5],[1,960,.72,'metal',.4],[0,640,.42,'metal',.5,1]],
 end:[[0,330,.78,'metal',.55],[1,950,.7,'stone',.62]]};
const XBP={west:[.34,'wood'],chicago:[.5,'metal'],japan:[.42,'wood'],rome:[.46,'stone'],pirate:[.44,'wood'],london:[.46,'metal'],egypt:[.46,'stone'],miami:[.42,'metal'],future:[.5,'metal'],end:[.5,'stone']};
const XBTIP={west:[.62,.33],chicago:[.36,.22],japan:[.7,.42],rome:[.3,.32],pirate:[.5,.72],london:[.5,.12],egypt:[.6,.06],miami:[.88,.25],future:[.5,.42],end:[.5,.2]};
function setupStageBase0(st){setupStageOrig(st);}
function setupStage(st){setupStageOrig(st);const L=CVP[st.id];if(!L)return;
 S.props=L.map(p=>typeof p[0]==='string'?{k:p[0],fi:p[1],x:p[2],z:p[3],mat:p[4],rel:p[5],hits:0,holes:[]}:{k:'cv_'+st.id,fi:p[0],x:p[1],z:p[2],mat:p[3],rel:p[4],flip:p[5]||0,hits:0,holes:[]});
 const xb=st.xb||(st.id==='end'?[780,0.55]:null);if(xb&&XBP[st.id])S.props.push({k:'xb_'+st.id,fi:0,x:xb[0],z:xb[1],mat:XBP[st.id][1],rel:XBP[st.id][0],hits:0,holes:[],xb:1});}
function propRect(p){let f,h;if(p.k){f=fr(p.k,p.fi);h=heightAt(p.z)*p.rel;}else{h=heightAt(p.z)*PROPREL[p.i];f=p.i<6?fr('props',p.i):fr('props2',p.i-6);}
 if(!f)return {x:p.x,y:groundY(p.z),w:1,h:1,f:null};let w=f.w*h/f.h;const maxW=heightAt(p.z)*1.25;if(w>maxW){h*=maxW/w;w=maxW;}return {x:p.x-w/2,y:groundY(p.z)-h+4,w,h,f};}
function drawProp(p){const r=propRect(p);if(!r.f||!r.f.im.complete)return;const gy=r.y+r.h-3;
 // soft contact shadow + ambient occlusion line
 cx.save();cx.translate(p.x,gy);cx.scale(1,0.16);const g=cx.createRadialGradient(0,0,0,0,0,r.w*0.62);g.addColorStop(0,'rgba(0,0,0,0.55)');g.addColorStop(0.6,'rgba(0,0,0,0.28)');g.addColorStop(1,'rgba(0,0,0,0)');cx.fillStyle=g;cx.fillRect(-r.w*0.7,-r.w*0.7,r.w*1.4,r.w*1.4);cx.restore();
 cx.fillStyle='rgba(0,0,0,0.35)';cx.fillRect(r.x+r.w*0.12,gy-1,r.w*0.76,3);
 cx.save();if(p.flip){cx.translate(p.x*2,0);cx.scale(-1,1);}cx.drawImage(r.f.im,r.x,r.y,r.w,r.h);cx.restore();
 // subtle hint on volatile pieces: a tiny flickering spark, nothing else
 if(p.xb){const tp=XBTIP[S.def.id]||[.5,.2];const sx=r.x+tp[0]*r.w,sy=r.y+tp[1]*r.h;const fl=0.5+0.5*Math.sin(T*23+p.x)*Math.sin(T*7.3);if(fl>0.25){cx.save();cx.globalCompositeOperation='lighter';cx.globalAlpha=0.35*fl;cx.drawImage(GLOW,sx-9,sy-9,18,18);cx.globalAlpha=0.9*fl;cx.fillStyle='#ffe2a0';cx.fillRect(sx-1,sy-1,2,2);cx.restore();}}
 cx.fillStyle='rgba(15,10,8,0.85)';for(const h of p.holes){const hx=p.flip?r.x+(1-h[0])*r.w:r.x+h[0]*r.w;cx.beginPath();cx.arc(hx,r.y+h[1]*r.h,2.4,0,6.28);cx.fill();cx.fillStyle='rgba(255,240,200,0.18)';cx.beginPath();cx.arc(hx-0.8,r.y+h[1]*r.h-0.8,1.2,0,6.28);cx.fill();cx.fillStyle='rgba(15,10,8,0.85)';}}
function drawCoverEdgeOld(){const id=S.def.id;const im=IMG['cedge_'+(CVP[id]?id:'west')+'.webp'];const sw=Math.sin(T*1.6)*4;
 cx.fillStyle='rgba(0,0,0,0.25)';cx.fillRect(0,0,W,H);
 if(im&&im.complete){const w=1500,h=im.height*w/im.width;cx.drawImage(im,640-w/2+sw,H-h*0.92,w,h);cx.fillStyle='rgba(0,0,0,0.5)';cx.fillRect(0,H-h*0.92+h*0.98,W,H);}
 else{cx.fillStyle='rgba(6,6,10,0.92)';cx.fillRect(0,H*0.62,W,H*0.38);}
 txt(S.ammo<6?'RELOADING':'IN COVER',640,560,40,'#9fe8ff','center',FONT_T,6);}
// ===================== hidden-object investigations =====================
const CLUEN=['BRASS GEAR','TORN TICKET','CALLING CARD','BROKEN WATCH','CHRONO-CORE FRAGMENT','BRASS KEY','BLUEPRINT','MONOCLE'];
const CLUEL=['Teeth of a clock that never kept honest time.','Half a ticket. The other half is somewhere in another century.','Black card, gold clock. He signs his work.','Stopped at the second he walked out.','The fragment hums. The next rift is open.','A key to a door that has not been built yet.','Plans for a machine that eats years.','He likes to watch. Now so do I.'];
const INV={
 west:{place:"SHERIFF'S OFFICE",sp:[[310,480],[595,100],[860,625],[1130,362],[1025,512],[700,268]],i:"The sheriff's office. Somebody searched it before me. Badly.",o:"Dust, gunsmoke and a calling card. He was here."},
 chicago:{place:"THE BOSS'S OFFICE",sp:[[425,492],[188,188],[1000,268],[800,525],[1225,431],[700,412]],i:"The big man's office. Cigars, ledgers and a safe nobody opened.",o:"The boss kept books. The Clockmaker kept time."},
 japan:{place:'THE TEA HOUSE',sp:[[475,500],[288,412],[1050,393],[750,575],[138,612],[1175,625]],i:'Tea gone cold. Someone left in a hurry, politely.',o:'Even here, the clocks were wrong.'},
 rome:{place:'GLADIATOR BARRACKS',sp:[[362,550],[500,162],[812,512],[1075,412],[100,600],[700,475]],i:'Straw, sweat and steel. The champion slept here.',o:'Bread for the fighters. Gears for the Clockmaker.'},
 pirate:{place:"THE CAPTAIN'S CABIN",sp:[[312,525],[375,350],[625,431],[988,412],[1125,562],[112,462]],i:"The captain's cabin. Charts to places that don't exist yet.",o:'The sea keeps secrets. I took a few.'},
 london:{place:"THE INVENTOR'S WORKSHOP",sp:[[412,562],[238,156],[700,181],[875,587],[1088,500],[800,487]],i:"Graves's workshop. Every gear in London ends up here.",o:'Blueprints for the end of the world. Neat handwriting.'},
 egypt:{place:'THE BURIAL CHAMBER',sp:[[412,525],[188,325],[700,525],[1025,456],[588,650],[1075,625]],i:'A king sleeps here. Something else woke up.',o:'Three thousand years of silence, and one ticking sound.'},
 miami:{place:"THE KINGPIN'S PENTHOUSE",sp:[[562,525],[288,312],[700,587],[1062,375],[1225,525],[500,400]],i:'Neon, glass and money. The kingpin had taste. Bad taste.',o:'Everything here was for sale. Even time.'},
 future:{place:'THE HACKER DEN',sp:[[350,562],[312,462],[700,450],[1000,500],[1225,550],[862,375]],i:'A den full of screens. All of them are watching me.',o:"The last clue. The Clockmaker's waiting at the end of time."}};
function invTimer(){return [75,60,45][G.diff]||60;}
function startInv(id,next){const d=INV[id];const R=rng(hstr('inv-'+id));const pool=[0,1,2,3,5,6,7];for(let i=pool.length-1;i>0;i--){const j=Math.floor(R()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
 const kinds=[4].concat(pool.slice(0,5));const sp=d.sp.slice();const clues=kinds.map((k,i)=>({k,x:sp[i][0],y:sp[i][1],rot:(R()-0.5)*0.8,s:0.2+R()*0.05,found:false,ft:0}));
 IV={id,d,clues,t:0,max:invTimer(),pts:0,wrong:0,wpen:0,cd:0,streak:0,lastF:-9,hint:null,hints:0,cap:'',capT:0,done:false,doneT:0,next};IV.cap=d.i;IV.capT=4;go('inv');musicPlay(id);}
let IV=null;
function addPop(x,y,t,col,label){if(IV)(IV.pops=IV.pops||[]).push({x,y,t:0,txt:t,col,label});}
function drawIvPops(dt){for(const p of IV.pops||[]){p.t+=dt;const a=Math.max(0,1-p.t/1.2);cx.globalAlpha=a;if(p.label)txt(p.label,p.x,p.y-p.t*60-28,18,p.col,'center',FONT_T,4);txt(p.txt,p.x,p.y-p.t*60,28,p.col,'center',FONT_T,5);}cx.globalAlpha=1;if(IV.pops)IV.pops=IV.pops.filter(p=>p.t<1.2);}
Object.assign(SFX,{coin(){tone(1320,0.08,'triangle',0.12);tone(1760,0.12,'triangle',0.1,null,AC.currentTime+0.06);},tick(){tone(2400,0.03,'square',0.06);}});
function botTick(dt){if(SCR==='inv'&&IV){IV.bt=(IV.bt||0)-dt;if(IV.bt>0)return;IV.bt=0.9+Math.random()*1.2;if(IV.done){if(IV.doneT>1.2&&!IV.left){IV.left=1;IV.next();}return;}
 const c=IV.clues.find(c=>!c.found);if(!c)return;if(Math.random()<0.15){AIM.x=200+Math.random()*900;AIM.y=150+Math.random()*450;invTap(AIM.x,AIM.y);return;}AIM.x=c.x+(Math.random()-0.5)*40;AIM.y=c.y+(Math.random()-0.5)*40;invTap(AIM.x,AIM.y);return;}botTickBase(dt);}
function invTap(x,y){const v=IV;if(!v||v.done||v.t<0.4)return;
 let best=null,bd=1e9;for(const c of v.clues){if(c.found)continue;const dd=Math.hypot(x-c.x,y-c.y);if(dd<bd){bd=dd;best=c;}}
 const R=TOUCH?86:68;if(best&&bd<R){best.found=true;best.ft=v.t;const left=Math.max(0,v.max-v.t);const quick=v.t-v.lastF<4;v.streak=quick?v.streak+1:0;v.lastF=v.t;
  const p=500+Math.round(left*20)+v.streak*150;v.pts+=p;addPop(best.x,best.y-50,'+'+p,'#ffd166',CLUEN[best.k]);sfx(best.k===4?'chime':'coin');vib(25);
  v.cap=CLUEL[best.k];v.capT=3.2;if(v.clues.every(c=>c.found))invEnd();return;}
 if(v.cd>0)return;v.cd=0.6;v.wrong++;const pen=Math.min(100,1000-v.wpen);if(pen>0){v.wpen+=pen;v.pts-=pen;addPop(x,y-30,'-'+pen,'#ff6b6b');}sfx('empty');}
function invHint(){const v=IV;if(!v||v.done)return;const c=v.clues.find(c=>!c.found);if(!c)return;v.hint={c,t:2.2};v.hints++;v.pts-=250;addPop(1180,110,'-250','#ff6b6b','HINT');sfx('tick');}
function invEnd(){const v=IV;if(v.done)return;v.done=true;v.doneT=0;const n=v.clues.filter(c=>c.found).length;const left=Math.max(0,v.max-v.t);
 v.rank=n===6&&left>v.max*0.45&&v.hints===0?'S':n===6&&left>v.max*0.2?'A':n===6?'B':n>=4?'C':'D';v.pts=Math.round(Math.max(0,v.pts)*G.D.m);
 if(!v.clues[0].found){v.pts=Math.round(v.pts*0.8);} // fragment always recovered by the rift at the end; finding it yourself pays more
 const st=G.stages[G.stages.length-1];if(st){st.inv=(st.inv||0)+v.pts;st.invRank=v.rank;st.total=(st.total||0)+v.pts;}G.score+=v.pts;v.cap=v.d.o;v.capT=5;sfx('jingle');}
function invUpdate(dt){const v=IV;v.t+=v.done?0:dt;if(v.cd>0)v.cd-=dt;if(v.capT>0)v.capT-=dt;if(v.hint){v.hint.t-=dt;if(v.hint.t<=0)v.hint=null;}
 if(!v.done&&v.t>=v.max)invEnd();if(v.done){v.doneT+=dt;if(v.doneT>4.2&&!v.left){v.left=1;v.next();}}}
function drawInv(dt){const v=IV;invUpdate(dt);const im=IMG['inv_'+v.id+'.webp'];const px=(640-AIM.x)*0.01,py=(360-AIM.y)*0.008;
 if(im&&im.complete)cx.drawImage(im,-12+px,-8+py,W+24,H+16);
 const GC={west:'#ff9a50',chicago:'#3f7a6c',japan:'#c070a0',rome:'#ffc070',pirate:'#3f6a82',london:'#5a7ea0',egypt:'#ff9a40',miami:'#c050c0',future:'#4a50c8'}[v.id];
 for(const c of v.clues){const f=fr('clue',c.k);if(!f||!f.im.complete)continue;const s=c.s*(c.found?1+Math.min(1,(v.t-c.ft)*3)*0.3:1);const w=f.w*s,h=f.h*s;
  cx.save();cx.translate(c.x+px,c.y+py);cx.rotate(c.rot);if(c.found){cx.globalAlpha=Math.max(0,1-(v.t-c.ft)*1.5);}
  cx.fillStyle='rgba(0,0,0,0.35)';cx.beginPath();cx.ellipse(3,h*0.42,w*0.45,h*0.1,0,0,6.28);cx.fill();cx.drawImage(f.im,-w/2,-h/2,w,h);
  if(GC){cx.globalCompositeOperation='source-atop';}cx.restore();}
 if(GC){cx.save();cx.globalCompositeOperation='soft-light';cx.globalAlpha=0.22;cx.fillStyle=GC;cx.fillRect(0,0,W,H);cx.restore();}
 if(v.hint){const c=v.hint.c;const a=Math.min(1,v.hint.t);const ox=Math.sin(c.x)*60,oy=Math.cos(c.y)*40;cx.save();cx.globalCompositeOperation='lighter';cx.globalAlpha=0.6*a*(0.7+0.3*Math.sin(T*10));cx.drawImage(GLOW,c.x+ox-80,c.y+oy-80,160,160);cx.restore();}
 // clue list (noir file card)
 cx.fillStyle='rgba(7,6,13,0.8)';rrect(14,80,236,40+6*50,10);cx.fill();cx.strokeStyle=brassGrad(14,80,250,420);cx.lineWidth=2;cx.stroke();txt('CLUES',30,108,22,BR.brass,'left',FONT_T);
 v.clues.forEach((c,i)=>{const y=122+i*50;const f=fr('clue',c.k);if(f&&f.im.complete){const s=40/Math.max(f.w,f.h);cx.globalAlpha=c.found?0.35:1;cx.drawImage(f.im,30,y,f.w*s,f.h*s);cx.globalAlpha=1;}
  txt(CLUEN[c.k],80,y+28,c.k===4?15:18,c.found?'rgba(243,234,215,0.4)':c.k===4?BR.cyan:BR.ivory,'left',FONT_T);if(c.found){cx.fillStyle=BR.brass;cx.fillRect(78,y+20,150,2);}});
 cx.fillStyle='rgba(7,6,13,0.75)';rrect(440,10,400,62,10);cx.fill();txt(v.d.place,640,36,20,BR.brass,'center',FONT_T);const left=Math.max(0,v.max-v.t);txt(left.toFixed(1)+'s  \u00b7  '+Math.round(v.pts),640,64,26,left<10?'#ff6b6b':BR.ivory,'center',FONT_T);
 if(!v.done)button(1110,90,150,58,'HINT',invHint,{size:22,sub:'-250'});
 if(v.capT>0){const a=Math.min(1,v.capT*2);cx.globalAlpha=a;cx.fillStyle='#ffe9a8';const w=Math.min(900,v.cap.length*13+60);cx.fillRect(640-w/2,624,w,64);cx.strokeStyle='#111';cx.lineWidth=3;cx.strokeRect(640-w/2,624,w,64);txt(v.cap,640,666,24,'#141414','center',FONT_C);cx.globalAlpha=1;}
 if(v.done){cx.fillStyle='rgba(5,4,12,'+Math.min(0.7,v.doneT)+')';cx.fillRect(0,0,W,H);chromaTxt('CASE NOTES: '+v.rank,640,300,70,'center');txt(v.clues.filter(c=>c.found).length+'/6 CLUES \u00b7 +'+v.pts,640,360,30,'#ffd166','center',FONT_T);
  if(v.doneT>1)button(540,420,200,58,'NEXT',()=>{if(!v.left){v.left=1;v.next();}},{size:24});}
 drawIvPops(dt);if(v.t<1.2&&!v.done){chromaTxt('INVESTIGATE',640,330,70,'center',FONT_T,1-v.t/1.2);}}
function afterStage(){const i=S.idx;const id=S.def.id;if(G.mode==='story'&&INV[id]&&!S.daily){startInv(id,()=>afterStageBase());return;}afterStageBase();}
// ===================== mouse + mobile UX, mechanics polish =====================
const TOUCH=(window.matchMedia&&matchMedia('(pointer:coarse)').matches)||('ontouchstart' in window);
let SET={off:TOUCH?40:0,shake:1,lefty:0};try{Object.assign(SET,JSON.parse(localStorage.getItem('bt.set')||'{}'));}catch(e){}
function saveSet(){try{localStorage.setItem('bt.set',JSON.stringify(SET));}catch(e){}applyHand();}
function applyHand(){BTN.cover.x=SET.lefty?108:1172;BTN.bt.x=SET.lefty?1172:104;}applyHand();
function vib(ms){try{if(navigator.vibrate&&TOUCH)navigator.vibrate(ms);}catch(e){}}
cv.style.cursor='none';
// aim assist: slight snap toward the nearest enemy body/head (never fires by itself)
function aimAssist(x,y,touch){if(!S||SCR!=='play')return {x,y};const R=touch?44:16,k=touch?0.55:0.35;let best=null,bd=R;
 for(const e of S.ents){if(e.kind!=='e'||e.st==='dead'||e.st==='enter')continue;const g=entGeom(e);for(const ty of [g.y-g.h*0.9,g.y-g.h*0.55]){const d=Math.hypot(x-g.x,y-ty);if(d<bd&&!hitEnt(e,x,y)){bd=d;best={x:g.x,y:ty};}}}
 for(const c of S.civs||[])if(best&&hitEnt(c,lerp(x,best.x,k),lerp(y,best.y,k)))return {x,y};
 return best?{x:lerp(x,best.x,k),y:lerp(y,best.y,k)}:{x,y};}
// cover with perfect-reload rhythm: pop out 0.25-0.55 s after ducking with a refilled gun
function setCover(v){if(!S||SCR!=='play')return;const was=S.cover;const ammo0=S.ammo;setCoverBase(v);
 if(was&&!v&&S.coverIn!=null){const d=S.t-S.coverIn;if(S.reloadFrom<6&&d>0.25&&d<0.55){const st=S.st;st.pdPts=(st.pdPts||0)+150;G.score+=150;S.charge=Math.min(300,S.charge+15);S.pops.push({x:640,y:520,t:0,txt:'+150',col:'#7ff8ff',label:'PERFECT RELOAD'});sfx('chime');}S.coverIn=null;}
 if(!was&&v){S.coverIn=S.t;S.reloadFrom=ammo0;if(S.ammo<6){S.ammo=6;sfx('reload');}}}
function quickReload(){if(!S||SCR!=='play'||S.cover||S.ammo>=6)return;setCover(true);S.qr=0.4;}
function killEnt(e,head,px,py){killEntBase(e,head,px,py);vib(head?40:22);S.xk=1;sfx("kill");if(S.secT!=null)S.secT=Math.min(45,S.secT+5);}
// tutorial beat in level 1
const TUT=[[1.5,'SHOOT','Click or tap an enemy. Rings show who is about to fire.'],[8,'COVER','Hold COVER / SPACE / RIGHT-CLICK. You reload in cover.'],[15,'PERFECT RELOAD','Pop out right after ducking for a bonus.'],[22,'BULLET TIME','Press F or tap the CUFF when it glows.'],[29,'MARK & EXECUTE','In slow-mo tap enemies to mark them, then tap the CUFF.']];
let PTR={down:false,t:0};cv.addEventListener('pointerdown',()=>{PTR.down=true;PTR.t=0;firstTap();});addEventListener('pointerup',()=>{PTR.down=false;});
let FT=0;function firstTap(){if(FT||!TOUCH)return;FT=1;try{const el=document.documentElement;if(el.requestFullscreen)el.requestFullscreen().then(()=>{try{const o=screen.orientation&&screen.orientation.lock&&screen.orientation.lock('landscape');if(o&&o.catch)o.catch(()=>{});}catch(e){}}).catch(()=>{});}catch(e){}}
function uxStep(dt){secStep(dt);perfStep(dt);if(PTR.down){PTR.t+=dt;if(SCR==='comic'&&PTR.t>0.8){PTR.t=-99;skipComic();}}
 if(SCR==='play'&&S){if(!SET.shake)S.shake=0;if(S.qr>0){S.qr-=dt;if(S.qr<=0&&S.cover&&coverPtr==null)setCover(false);}
  if(S.idx===0&&!S.daily&&G.mode==='story'){S.tut=S.tut||0;const n=TUT[S.tut];if(n&&S.t>n[0]&&!BAN){BAN={a:n[1],b:n[2],t:0,max:4.5};S.tut++;}}}}
function skipComic(){let g=0;while(SCR==='comic'&&g++<60)comicAdvance();}
// HUD extras: pause button, keyboard hints on hover
const _dh=drawHUD;
function drawFSBtn(){drawMuteBtn();if(SCR==='play'&&S&&S.secT!=null&&S.secT<12&&!S.daily)txt('MOVE! '+Math.ceil(S.secT),640,118,26,S.secT<5?'#ff5a5a':'#ffcf6a','center',FONT_T,4);for(const [b,ic] of (SCR==='play'?[[BTN.fs,'fs'],[BTN.pause,'p']]:[[BTN.fs,'fs']])){bezel(b.x,b.y,b.r);cx.strokeStyle=BR.ivory;cx.lineWidth=3;cx.beginPath();if(ic==='fs'){const s=9;for(const [sx,sy] of [[-1,-1],[1,-1],[1,1],[-1,1]]){cx.moveTo(b.x+sx*s,b.y+sy*(s-6));cx.lineTo(b.x+sx*s,b.y+sy*s);cx.lineTo(b.x+sx*(s-6),b.y+sy*s);}}else{cx.moveTo(b.x-5,b.y-9);cx.lineTo(b.x-5,b.y+9);cx.moveTo(b.x+5,b.y-9);cx.lineTo(b.x+5,b.y+9);}cx.stroke();}
 if(!TOUCH&&SCR==='play'){for(const [b,t] of [[BTN.cover,'SPACE / SHIFT / RIGHT-CLICK'],[BTN.bt,'F / MIDDLE-CLICK']])if(Math.hypot(AIM.x-b.x,AIM.y-b.y)<b.r+30){const R=b.x>640;txt(t,R?b.x-b.r-14:b.x+b.r+14,b.y+5,15,'#9fe8ff',R?'right':'left',FONT_T,3);};}}
// results: quick retry / next
function drawSRes(){drawSResBase();if(SCRT>0.8&&G.pre&&!S.daily){button(120,600,220,60,'RETRY ERA',retryStage,{size:24});}}
function retryStage(){const i=S.idx;G.score=G.pre.score;G.stages.length=G.pre.n;G.hp=G.pre.hp;toCard(i);}
const _si=stageInit;
// settings panel
function drawSet(){drawBG('end',0,0,1.1);cx.fillStyle='rgba(5,4,12,0.82)';cx.fillRect(0,0,W,H);chromaTxt('SETTINGS',640,100,60,'center');
 const rows=[['SOUND '+Math.round(VOL*100)+'%',()=>setVol(VOL>=0.8?0.5:VOL>=0.5?0.25:VOL>0?0:0.8)],['TOUCH AIM OFFSET '+SET.off+'PX',()=>{SET.off=SET.off===0?40:SET.off===40?70:0;saveSet();}],['SCREEN SHAKE '+(SET.shake?'ON':'OFF'),()=>{SET.shake=SET.shake?0:1;saveSet();}],['LEFT-HANDED '+(SET.lefty?'ON':'OFF'),()=>{SET.lefty=SET.lefty?0:1;saveSet();}]];
 rows.forEach((r,i)=>button(400,150+i*86,480,70,r[0],r[1],{size:26}));button(540,510,200,64,'BACK',()=>go(SETBACK||'title'),{size:26});}
let SETBACK='title';
function drawComic(dt){drawComicBase(dt);button(1110,16,150,52,'SKIP \u25B6\u25B6',skipComic,{size:18});if(Math.floor(T*2)%2)txt('TAP: NEXT \u00b7 HOLD: SKIP',1250,712,16,'#ffe9a8','right',FONT_T);}
Object.assign(window.__BT||{},{startInv:(a,b)=>startInv(a,b),IV:()=>IV,SET:()=>SET});
// cheap per-sprite era tint: cached tinted copies of enemy/boss frames, tint = era background mean
const TINTC={},ERAT={};let TINTON=0;
function eraTint(id){if(ERAT[id]!==undefined)return ERAT[id];const im=IMG['bg_'+id+'.webp'];if(!im||!im.complete||!im.naturalWidth)return null;try{const c=document.createElement('canvas');c.width=c.height=8;const g=c.getContext('2d');g.drawImage(im,0,0,8,8);const d=g.getImageData(0,0,8,8).data;let r=0,gg=0,b=0;for(let i=0;i<d.length;i+=4){r+=d[i];gg+=d[i+1];b+=d[i+2];}const n=d.length/4;ERAT[id]=`rgb(${r/n|0},${gg/n|0},${b/n|0})`;}catch(e){ERAT[id]=0;}return ERAT[id];}
function tintIm(im,id){const t=eraTint(id);if(!t||!im.naturalWidth)return im;const k=im.src+'|'+id;let c=TINTC[k];if(c)return c;c=document.createElement('canvas');c.width=im.naturalWidth;c.height=im.naturalHeight;const g=c.getContext('2d');g.drawImage(im,0,0);g.globalCompositeOperation='source-atop';g.globalAlpha=0.16;g.fillStyle=t;g.fillRect(0,0,c.width,c.height);
 const gr=g.createLinearGradient(0,0,c.width,0);gr.addColorStop(0,'rgba(255,235,200,0.10)');gr.addColorStop(0.25,'rgba(255,235,200,0)');g.globalAlpha=1;g.fillStyle=gr;g.fillRect(0,0,c.width,c.height);c.complete=true;TINTC[k]=c;return c;}
function fr(key,i){const l=SPR[key];if(!l)return null;const f=l[Math.min(i,l.length-1)];let im=IMG[f.f];if(TINTON&&S&&S.def&&im&&im.complete)im=tintIm(im,S.def.bg);return {im,w:f.w,h:f.h};}
function drawEnt(e){TINTON=1;try{drawEntLook(e);}finally{TINTON=0;}}
function drawBoss(b){TINTON=1;try{drawBossBase(b);}finally{TINTON=0;}}
// ===================== AUDIO 2: stems, mix bus, layered SFX =====================
const MBPM={title:104,west:108,chicago:126,japan:96,rome:100,pirate:116,garage:132,london:112,egypt:102,miami:110,future:124,end:100,};
let MIX=null;const STB={};let STEM=null;let PEAK=0;
function audioInit(){audioInitLook();mixUp();}
function mixUp(){if(!AC||MIX)return;audioPlus();MIX={};
 const c1=AC.createDynamicsCompressor();c1.threshold.value=-12;c1.ratio.value=3;c1.knee.value=8;c1.attack.value=0.004;c1.release.value=0.22;
 const lim=AC.createDynamicsCompressor();lim.threshold.value=-2;lim.knee.value=0;lim.ratio.value=20;lim.attack.value=0.001;lim.release.value=0.08;
 const an=AC.createAnalyser();an.fftSize=1024;MASTER.disconnect();MASTER.connect(c1);c1.connect(lim);lim.connect(AC.destination);lim.connect(an);MIX.an=an;MIX.buf=new Float32Array(1024);
 const duck=AC.createGain();MUSG.disconnect();MUSG.connect(duck);duck.connect(LP);MIX.duck=duck;
 const send=AC.createGain();send.gain.value=0.14;SFXG.connect(send);send.connect(REV);
}
function duck(a,hold){if(!MIX)return;const g=MIX.duck.gain,t=AC.currentTime;g.cancelScheduledValues(t);g.setTargetAtTime(1-a,t,0.004);g.setTargetAtTime(1,t+(hold||0.05),0.16);}
async function stemLoad(n){if(STB[n])return STB[n];STB[n]=Promise.all(['a','b','c'].map(k=>fetch('assets/music/'+n+'_'+k+'.mp3').then(r=>{if(!r.ok)throw 0;return r.arrayBuffer();}).then(b=>new Promise((ok,no)=>AC.decodeAudioData(b,ok,no)))));
 try{return await STB[n];}catch(e){STB[n]=null;return null;}}
function lead(b){const d=b.getChannelData(0);const lim=Math.min(d.length,b.sampleRate*0.12);for(let i=0;i<lim;i++)if(Math.abs(d[i])>0.01)return i/b.sampleRate;return 0;}
function musicPlay(name){if(!AC)return;mixUp();const n=MBPM[name]?name:'title';if(STEM&&STEM.n===n)return;musicStop();mus.on=false;const tok={n,dead:false};STEM=tok;
 stemLoad(n).then(bufs=>{if(tok.dead)return;if(!bufs){mus.cfg=ERAMUS[name]||ERAMUS.title;mus.step=0;mus.next=AC.currentTime+0.05;mus.on=true;return;}
  const L=32*60/MBPM[n],t0=AC.currentTime+0.06;tok.src=[];tok.g=[];
  bufs.forEach((b,i)=>{const s=AC.createBufferSource();s.buffer=b;s.loop=true;const o=lead(b);s.loopStart=o;s.loopEnd=Math.min(b.duration,o+L);const g=AC.createGain();g.gain.value=0.0001;s.connect(g);g.connect(MUSG);s.start(t0,o);tok.src.push(s);tok.g.push(g);});
  tok.live=true;});}
function musicStop(){mus.on=false;if(STEM){const s=STEM;s.dead=true;if(s.src){const t=AC.currentTime;s.g.forEach(g=>{g.gain.cancelScheduledValues(t);g.gain.setTargetAtTime(0.0001,t,0.18);});setTimeout(()=>s.src.forEach(x=>{try{x.stop();}catch(e){}}),1200);}STEM=null;}}
let BTW=0,HBT=0;
function musicTick(){musicTickLook();if(!AC||!MIX)return;
 // layer targets
 if(STEM&&STEM.live){const play=SCR==='play'&&S;const menu=!play;let a=0.9,b=0.25,c=0;
  if(play){const m=S.mult||1,en=(S.ents||[]).filter(e=>e.kind==='e'&&e.st!=='dead').length;b=Math.min(1,0.2+(m-1)*0.22+en*0.07);if(S.boss){c=0.95;b=Math.max(b,0.55);}if(S.phase==='done'||S.phase==='clear'){b=0.15;c=0;}}
  else if(SCR==='title'||SCR==='diff'){b=0.6;}else if(SCR==='inv'){a=0.55;b=0.1;}else if(SCR==='gameover'){a=0.3;b=0;}
  const t=AC.currentTime;[a,b,c].forEach((v,i)=>STEM.g[i].gain.setTargetAtTime(Math.max(0.0001,v*0.8),t,0.4));
  const bt=play&&S.btOn>0;STEM.src.forEach(s=>s.playbackRate.setTargetAtTime(bt?0.82:1,t,bt?0.08:0.3));}
 // slow-mo heartbeat + clock (only when stems drive the music; the legacy sequencer has its own)
 if(!mus.on&&S&&S.btOn>0&&SCR==='play'){if(AC.currentTime>HBT){HBT=AC.currentTime+0.5;BTW++;SFX.tick();if(BTW%2===0){tone(52,0.2,'sine',0.55,null,0,38);tone(50,0.18,'sine',0.38,null,AC.currentTime+0.17,36);}}}
 if(S&&SCR==='play'){const on=S.btOn>0;if(MIX.bt&&!on)sfx('btOff');MIX.bt=on;}
 if(MIX.an&&(T*60|0)%6===0){MIX.an.getFloatTimeDomainData(MIX.buf);for(const v of MIX.buf){const a=Math.abs(v);if(a>PEAK)PEAK=a;}}}
// ---- layered SFX ----
const GUN={west:[2600,110,0.55,1],chicago:[3400,150,0.25,1],japan:[2200,95,0.6,1],rome:[1800,80,0.5,0],pirate:[1500,70,0.8,0],garage:[3800,140,0.3,1],london:[2400,105,0.6,1],egypt:[2000,90,0.5,0],miami:[3600,130,0.4,1],future:[5200,180,0.35,0],end:[3000,100,0.6,1],lab:[3000,120,0.4,1]};
function era(){return S&&S.def?S.def.bg:'title';}
function shell(t){for(let i=0;i<3;i++){const tt=t+0.32+i*0.07+Math.random()*0.03;tone(5200+Math.random()*2500,0.05,'triangle',0.05/(i+1),null,tt);tone(3100+Math.random()*900,0.07,'sine',0.03/(i+1),null,tt);}}
Object.assign(SFX,{
 shot(){const g=GUN[era()]||GUN.lab,t=AC.currentTime;duck(0.5,0.07);
  tone(1900,0.012,'square',0.12,null,t);noise(0.06,0.9,'highpass',g[0],null,t);noise(0.16,0.85,'bandpass',g[0]*0.45,null,t,0.8);
  tone(g[1]*1.6,0.18,'sine',0.75,null,t,g[1]*0.4);noise(g[2],0.22,'lowpass',700,null,t+0.01);noise(g[2]*1.6,0.06,'lowpass',260,null,t+0.05);
  if(era()==='future'){tone(1800,0.14,'sawtooth',0.08,null,t,300);}
  if(g[3])shell(t);},
 eshot(){const t=AC.currentTime;noise(0.1,0.35,'bandpass',1400,null,t,1);tone(140,0.12,'sine',0.25,null,t,50);noise(0.4,0.08,'lowpass',500,null,t+0.03);},
 hit(){const t=AC.currentTime;noise(0.09,0.55,'bandpass',900,null,t,1.2);tone(190,0.12,'sine',0.45,null,t,60);noise(0.04,0.25,'highpass',3000,null,t);},
 head(){const t=AC.currentTime;SFX.hit();tone(2400,0.12,'triangle',0.12,null,t+0.01,1500);noise(0.12,0.3,'bandpass',2200,null,t+0.015,3);},
 kill(){const t=AC.currentTime;tone(85,0.32,'sine',0.75,null,t+0.02,32);noise(0.25,0.35,'lowpass',240,null,t+0.02);noise(0.5,0.06,'bandpass',600,null,t+0.12,0.7);},
 empty(){const t=AC.currentTime;tone(1500,0.015,'square',0.16,null,t);tone(900,0.02,'square',0.1,null,t+0.05);},
 reload(){const t=AC.currentTime;noise(0.03,0.35,'bandpass',2600,null,t,4);noise(0.18,0.12,'bandpass',1200,null,t+0.06,2);tone(1700,0.02,'square',0.14,null,t+0.25);noise(0.04,0.4,'bandpass',3200,null,t+0.27,5);tone(600,0.05,'square',0.08,null,t+0.3);},
 rico(){const t=AC.currentTime;tone(3200+Math.random()*800,0.32,'sine',0.14,null,t,900);noise(0.05,0.3,'highpass',4000,null,t);noise(0.3,0.05,'bandpass',2500,null,t+0.02,8);},
 clang(){const t=AC.currentTime;[1,2.76,5.4].forEach((m,i)=>tone(420*m,0.5/(i+1),'sine',0.14/(i+1),null,t));noise(0.05,0.4,'bandpass',3000,null,t,2);},
 wood(){const t=AC.currentTime;tone(260,0.12,'triangle',0.35,null,t,120);noise(0.12,0.4,'bandpass',700,null,t,1.5);for(let i=0;i<3;i++)noise(0.04,0.1,'bandpass',1500,null,t+0.05+i*0.04,2);},
 boom(){const t=AC.currentTime;duck(0.7,0.4);tone(62,1.3,'sine',0.9,null,t,24);noise(1.4,0.9,'lowpass',650,null,t);noise(0.2,0.6,'highpass',1800,null,t);
  for(let i=0;i<9;i++){const tt=t+0.25+Math.random()*1.3;noise(0.06,0.1+Math.random()*0.1,'bandpass',900+Math.random()*3000,null,tt,2);}},
 cannon(){SFX.boom();},
 btOn(){const t=AC.currentTime;duck(0.6,0.5);noise(0.9,0.4,'bandpass',3200,null,t,1.5);noise(0.9,0.0001+0.3,'bandpass',300,null,t+0.1,1);tone(1200,0.9,'sawtooth',0.08,null,t,70);tone(45,1.0,'sine',0.6,null,t+0.05,28);SFX.tick();},
 btOff(){const t=AC.currentTime;tone(70,0.5,'sawtooth',0.06,null,t,900);noise(0.5,0.25,'bandpass',600,null,t,1);noise(0.35,0.2,'highpass',3000,null,t+0.25);},
 tick(){const t=AC.currentTime;noise(0.025,0.4,'bandpass',4200,null,t,6);tone(3400,0.02,'square',0.04,null,t);},
 exec(){const t=AC.currentTime;duck(0.6,0.3);[0,3,7,12].forEach((n,i)=>voice(mtof(57+n),t,0.6,'sawtooth',0.07,2600,10,SFXG));tone(110,0.6,'sine',0.5,null,t,40);[0,0.12].forEach(d=>noise(0.03,0.4,'bandpass',4200,null,t+d,6));tone(mtof(93),1.2,'sine',0.08,null,t+0.25);},
 lock(){const t=AC.currentTime;tone(1800,0.05,'square',0.06,null,t);tone(2700,0.08,'sine',0.08,null,t+0.04);},
 ui(){const t=AC.currentTime;tone(1100,0.03,'triangle',0.12,null,t);noise(0.015,0.15,'highpass',5000,null,t);},
 coin(){const t=AC.currentTime;[0,7,12,16].forEach((n,i)=>{tone(mtof(81+n),0.6,'sine',0.1,null,t+i*0.055);tone(mtof(93+n),0.3,'triangle',0.03,null,t+i*0.055);});},
 hurt(){const t=AC.currentTime;duck(0.6,0.2);tone(90,0.35,'sawtooth',0.25,null,t,40);noise(0.3,0.5,'lowpass',900,null,t);noise(0.08,0.3,'highpass',2500,null,t);},
 stinger(){const t=AC.currentTime;duck(0.8,0.8);[0,3,7,10].forEach(n=>voice(mtof(45+n),t,1.1,'sawtooth',0.1,1800,12,SFXG));tone(38,1.2,'sine',0.8,null,t,26);noise(1.3,0.3,'lowpass',400,null,t);[0.0,0.5,1.0].forEach(d=>SFXt(d));},
});
function SFXt(d){setTimeout(()=>{if(AC)SFX.tick();},d*1000);}
function executeMarks(){const n=S&&S.marks?S.marks.length:0;if(n)sfx('exec');return executeMarksBase();}
Object.assign(window.__BT||{},{peak:()=>PEAK,stem:()=>STEM&&STEM.live?STEM.n:null});
// ---- mobile audio unlock: Chrome/Android only grant activation on pointerup/touchend/click/keydown ----
let MUTED=0;try{MUTED=+localStorage.getItem('bt.mute')||0;}catch(e){}
function unlockAudio(){try{audioInit();if(!AC)return;if(AC.state!=='running')AC.resume();if(!unlockAudio.done){const b=AC.createBuffer(1,1,22050),s=AC.createBufferSource();s.buffer=b;s.connect(AC.destination);s.start(0);unlockAudio.done=1;}
 applyMute();if(!STEM&&!mus.on)musicPlay(SCR==='play'&&S&&S.def?S.def.id:SCR==='inv'&&IV?IV.id:'title');}catch(e){}}
['pointerup','touchend','click','keydown'].forEach(ev=>addEventListener(ev,unlockAudio,{capture:true,passive:true}));
document.addEventListener('visibilitychange',()=>{if(AC){if(document.hidden)AC.suspend();else if(unlockAudio.done)AC.resume();}});
function applyMute(){if(MASTER&&AC)MASTER.gain.setTargetAtTime(MUTED?0:VOL,AC.currentTime,0.02);}
BTN.mute={x:1124,y:40,r:26};
addEventListener('pointerdown',e=>{const p=toLogical(e);if(Math.hypot(p.x-BTN.mute.x,p.y-BTN.mute.y)<BTN.mute.r+8){e.stopPropagation();e.preventDefault();MUTED=MUTED?0:1;try{localStorage.setItem('bt.mute',MUTED);}catch(x){}unlockAudio();applyMute();}},true);
function drawMuteBtn(){const b=BTN.mute;bezel(b.x,b.y,b.r);cx.save();cx.fillStyle=BR.ivory;cx.strokeStyle=BR.ivory;cx.lineWidth=2.5;cx.beginPath();cx.moveTo(b.x-11,b.y-5);cx.lineTo(b.x-5,b.y-5);cx.lineTo(b.x+2,b.y-11);cx.lineTo(b.x+2,b.y+11);cx.lineTo(b.x-5,b.y+5);cx.lineTo(b.x-11,b.y+5);cx.closePath();cx.fill();
 cx.beginPath();if(MUTED){cx.moveTo(b.x+6,b.y-6);cx.lineTo(b.x+14,b.y+6);cx.moveTo(b.x+14,b.y-6);cx.lineTo(b.x+6,b.y+6);}else{cx.arc(b.x+3,b.y,7,-0.9,0.9);cx.moveTo(b.x+9,b.y-10);cx.arc(b.x+3,b.y,12,-0.9,0.9);}cx.stroke();cx.restore();
 if(!AC||AC.state!=='running'){if(Math.floor(T*2)%2)txt('TAP FOR SOUND',b.x-36,b.y+6,15,'#ffe9a8','right',FONT_T,3);}}
function rms(){if(!MIX)return 0;MIX.an.getFloatTimeDomainData(MIX.buf);let s=0;for(const v of MIX.buf)s+=v*v;return Math.sqrt(s/MIX.buf.length);}
Object.assign(window.__BT||{},{ac:()=>AC&&AC.state,rms,stems:()=>Object.keys(STB).filter(k=>STB[k]),muted:()=>MUTED});
// ===================== boss signatures, BT economy, menus, perf =====================
const SIG={west:['QUICK-DRAW FAN',3,0.32,'bullet','fan'],chicago:['TOMMY SWEEP',5,0.2,'bullet','line'],japan:['SHURIKEN CROSS',4,0.38,'bullet','cross'],rome:['JAVELIN VOLLEY',3,0,'bullet','volley'],
 pirate:['BROADSIDE',3,0.45,'ball','line'],london:['CLOCKWORK BURST',4,0.5,'bullet','clock'],egypt:["PHARAOH'S CURSE",2,0.9,'orb','fan'],miami:['DRIVE-BY',4,0.24,'bullet','diag'],future:['DRONE LATTICE',3,0.42,'orb','cross'],end:['TIME COLLAPSE',4,0.4,'bullet','clock']};
function bossSig(b,ph){const id=S.def.bg,sg=SIG[id]||SIG.end;let n=sg[1];if(G.D.fair&&sg[3]==='bullet')n=Math.min(n,G.diff===0?2:3);if(ph===0)n=Math.max(2,n-1);
 const g=bossGeom(b);S.pops.push({x:g.x,y:g.y-g.h-20,t:0,txt:sg[0],col:'#ffcf6a',label:'SIGNATURE'});sfx('stinger2');
 if(sg[3]==='bullet'){const aim=DP().aim*(sg[4]==='volley'?1.35:1.1);for(let i=0;i<n;i++){let ox=0,oy=0.35;const k=n>1?i/(n-1):0.5;
   if(sg[4]==='fan'||sg[4]==='line'){ox=-0.3+k*0.6;oy=sg[4]==='fan'?0.25+Math.abs(k-0.5)*0.3:0.3;}else if(sg[4]==='cross'){ox=[-0.3,0.3,-0.15,0.15][i%4];oy=[0.25,0.25,0.55,0.55][i%4];}
   else if(sg[4]==='clock'){const a=i/n*6.283;ox=Math.cos(a)*0.28;oy=0.4+Math.sin(a)*0.22;}else if(sg[4]==='diag'){ox=-0.3+k*0.6;oy=0.2+k*0.4;}else{ox=-0.25+k*0.5;oy=0.3;}
   b.rings.push({ox,oy,t:-i*sg[2],aim});}}
 else{for(let i=0;i<n;i++)pending.push({at:S.t+i*sg[2],fn:()=>{if(S.boss&&!S.boss.dead){const gg=bossGeom(S.boss);fireBullet(gg.x+(i-(n-1)/2)*gg.w*0.3,gg.y-gg.h*0.5,sg[3]);}}});}
 b.weakT=Math.min(b.weakT,1);return 3.0+n*Math.max(sg[2],0.15)*0.6-ph*0.3;}
// BT economy: count uses per stage; slight cost tune (100 -> 90 per use, kills give a bit more)
function startBT(){const was=S&&S.btOn>0;const ex=was?0:btCost()-100;if(S&&!was&&S.charge<100+ex){if(S.charge>=100)S.pops.push({x:104,y:520,t:0,txt:'NEED '+(100+ex),col:'#9fe8ff',small:1});return;}startBTBase();if(S&&!was&&S.btOn>0){S.st.btN=(S.st.btN||0)+1;S.charge=Math.max(0,S.charge-ex);}}
// pause menu with settings
let PSET=0;
function setRows(back){const rows=[['SOUND '+Math.round(VOL*100)+'%',()=>setVol(VOL>=0.8?0.5:VOL>=0.5?0.25:VOL>0?0:0.8)],['TOUCH AIM OFFSET '+SET.off+'PX',()=>{SET.off=SET.off===0?40:SET.off===40?70:0;saveSet();}],['SCREEN SHAKE '+(SET.shake?'ON':'OFF'),()=>{SET.shake=SET.shake?0:1;saveSet();}],['LEFT-HANDED '+(SET.lefty?'ON':'OFF'),()=>{SET.lefty=SET.lefty?0:1;saveSet();}]];
 rows.forEach((r,i)=>button(400,150+i*86,480,70,r[0],r[1],{size:26}));button(540,510,200,64,'BACK',back,{size:26});}
function drawSet(){drawBG('end',0,0,1.1);cx.fillStyle='rgba(5,4,12,0.82)';cx.fillRect(0,0,W,H);chromaTxt('SETTINGS',640,100,60,'center');setRows(()=>go(SETBACK||'title'));}
function drawPause(){if(PSET){cx.fillStyle='rgba(0,0,0,0.8)';cx.fillRect(0,0,W,H);chromaTxt('SETTINGS',640,100,60,'center');setRows(()=>{PSET=0;});return;}drawPauseBase();button(490,480,300,60,'SETTINGS',()=>{PSET=1;},{size:24});}
// final: restart
function drawFinalBase2(){}
function drawFinal(){drawFinalBase();if(SCRT>1)button(120,610,220,60,'RESTART',()=>{if(G.mode==='daily')startDaily();else startStory(G.diff);},{size:24});}
// ===== cover camera (Time Crisis style), per-anchor tunable data =====
// dx: sideways shift (px), dy: camera drop (scene rises, px), zoom, cy: zoom anchor y, tin/tout: ease seconds, fill: share of frame the cover fills, sway: idle sway px
const CAM0={dx:-40,dy:46,zoom:1.07,cy:300,tin:0.22,tout:0.22,ease:'outCubic',fill:0.5,sway:0.5,mat:'wood'};
const CAMS={west:{dx:-50},chicago:{dx:44,fill:0.46},japan:{dx:-36,fill:0.52},rome:{dx:40,fill:0.5,mat:'stone'},pirate:{dx:-30,dy:52,fill:0.55},garage:{dx:0,dy:36,fill:0.42,mat:'metal'},london:{dx:46,fill:0.48},egypt:{dx:-44,fill:0.52,mat:'stone'},miami:{dx:38,fill:0.45,mat:'metal'},future:{dx:-38,fill:0.47,mat:'metal'},end:{dx:0,dy:56,zoom:1.09,fill:0.58,mat:'metal'}};
try{const q=new URLSearchParams(location.search).get('cam');if(q)Object.assign(CAM0,JSON.parse(q));}catch(e){}
const EASE={linear:k=>k,outCubic:k=>1-Math.pow(1-k,3),inOut:k=>k<0.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2};
function camCfg(){return Object.assign({},CAM0,CAMS[S.def.id]||{});}
let CAMT=0;
function camStep(){if(!S)return;const c=camCfg(),dt=Math.min(0.05,T-CAMT);CAMT=T;S.camR=S.camR||0;const tgt=S.cover&&SCR==='play'?1:0;
 const sp=1/Math.max(0.01,tgt?c.tin:c.tout);S.camR=tgt?Math.min(1,S.camR+dt*sp):Math.max(0,S.camR-dt*sp);S.camK=(EASE[c.ease]||EASE.outCubic)(S.camR);}
function camApply(){camStep();const k=S.camK||0;if(k<=0)return;const c=camCfg();const z=1+(c.zoom-1)*k;cx.translate(640,c.cy);cx.scale(z,z);cx.translate(-640,-c.cy);cx.translate(c.dx*k,-c.dy*k);}
function drawCoverEdge(){const k=S.camK||0;const c=camCfg();const id=S.def.id;const im=IMG['cedge_'+(CVP[id]?id:'west')+'.webp'];const sw=Math.sin(T*1.6)*c.sway;
 cx.fillStyle='rgba(0,0,0,'+(0.22*k)+')';cx.fillRect(0,0,W,H);const hh=c.fill*H;
 const fb=fgBlur(S.def.bg);if(fb){const fw=1400,fh=fb.height*fw/fb.width,s2=Math.max(1,hh*1.05/fh);cx.drawImage(fb,640-fw*s2/2-c.dx*0.25*k,H-hh*k*1.02,fw*s2,fh*s2);}
 if(im&&im.complete&&im.width){let w=1500,h=im.height*w/im.width;const s=Math.max(1,hh/(h*0.92));w*=s;h*=s;const y=H-hh*k;cx.drawImage(im,640-w/2+sw-c.dx*0.4*k,y-h*0.06,w,h);if(y+h*0.92<H){cx.fillStyle='rgba(8,6,10,0.9)';cx.fillRect(0,y+h*0.9,W,H);}}
 else{cx.fillStyle='rgba(6,6,10,0.92)';cx.fillRect(0,H-hh*k,W,hh);}
 if(k>0.6)txt(S.ammo<6?'RELOADING':'IN COVER',640,H-hh*0.45,36,'#9fe8ff','center',FONT_T,6);}
Object.assign(window.__BT||{},{CAM0,CAMS});

const FGB={};function fgBlur(id){if(FGB[id]!==undefined)return FGB[id];const im=IMG['fg_'+id+'.webp'];if(!im||!im.complete||!im.width)return null;try{const c=document.createElement('canvas');c.width=700;c.height=Math.round(im.height*700/im.width);const g=c.getContext('2d');g.filter='blur(3px) brightness(0.5)';g.drawImage(im,0,0,c.width,c.height);FGB[id]=c;}catch(e){FGB[id]=0;}return FGB[id];}

// bullets that arrive while hidden smack the cover prop's face
function coverHit(p){const c=camCfg();const x=clamp(p.x,200,1080)+(Math.random()-0.5)*80,y=H-c.fill*H*(0.55+Math.random()*0.3);impact(x,y,c.mat);sfx(c.mat==='metal'?'clang':c.mat==='wood'?'wood':'hit');S.shake=Math.max(S.shake,4);}
// anti-camping section timer: ~40 s per wave, refilled when the wave is cleared; timeout costs a heart (never the last one)
function secStep(dt){if(!S||SCR!=='play'||S.daily||S.def.bonus||paused)return;if(S.phase!=='play'||S.boss){S.secT=45;return;}if(S.secT==null)S.secT=45;
 if(aliveEnemies()===0&&!S.boss)S.secT=45;else S.secT-=dt*(S.btOn>0?0.2:1);
 if(S.secT<=0){S.secT=45;if(G.hp>1){G.hp--;S.dmgFlash=1;sfx('hurt');S.st.tmo=(S.st.tmo||0)+1;}banner('TOO SLOW!','KEEP MOVING',1.4);}}
function btCost(){return 100+30*((S&&S.st&&S.st.btN)||0);}
// adaptive performance: drop render scale + post FX when the frame rate sags (low-end phones / CPU throttle)
let LOWP=0,LOWT=0;
function drawPost(){if(!LOWP)drawPostBase();}
function perfStep(dt){if(SCR!=='play')return;if(fpsA<38){LOWT+=dt;if(LOWT>2.5){LOWT=0;if(!LOWP){LOWP=1;}else if((window.__RS||1)>0.6){window.__RS=(window.__RS||1)*0.8;resize();}}}else LOWT=Math.max(0,LOWT-dt*0.5);}
Object.assign(window.__BT||{},{perf:()=>({LOWP,RS:window.__RS||1})});
})();
