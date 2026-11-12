// Physical stature is independent of hats, crowns, rackets and cape width.
// Small, foot-anchored pose adjustments give the original five longer legs
// while retaining the silhouette and costume detail of each MetaWinner.
export const PLAYER_PROFILES={
 joker:{height:1.84,width:.94,legLift:.025},
 outlaw:{height:1.88,width:.96,legLift:.018},
 phantom:{height:1.92,width:.95,legLift:.029},
 royal:{height:1.88,width:.96,legLift:.018},
 volt:{height:1.92,width:.96,legLift:.018},
 medusa:{height:1.85,width:.99,legLift:.008},
 ice:{height:1.85,width:.99,legLift:.008},
 fire:{height:1.85,width:.99,legLift:.008}
};
export const STRIDE_RATE=3.5;
export const STEP_DISTANCE=Math.PI/STRIDE_RATE;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const smoothstep=value=>{const t=clamp(value,0,1);return t*t*(3-2*t);};
// Height above the feet, in units of body height. The feet and crown stay fixed.
export function proportionHeight(v,key){
 const lift=PLAYER_PROFILES[key]?.legLift||0;
 if(v<=0||v>=1)return v;
 if(v<.48)return v+lift*v/.48;
 if(v<.76)return v+lift;
 return v+lift*(1-v)/.24;
}
export function strokeMotion(age,duration=.42,toss=null){
 if(toss!==null)return {phase:.35*smoothstep(toss/.6),settle:0};
 const elapsed=clamp(age/Math.max(.01,duration),0,1);
 return {phase:.35+.65*smoothstep(elapsed/.66),settle:smoothstep((elapsed-.76)/.24)};
}
