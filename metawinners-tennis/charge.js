// Power follows real held time, independently of match speed and frame rate.
export const CHARGE_SECONDS=1.05;
export const TAP_POWER=.32;
export function powerForHold(seconds,duration=CHARGE_SECONDS){
 const time=Number.isFinite(seconds)?Math.max(0,seconds):0;
 const full=Number.isFinite(duration)&&duration>0?duration:CHARGE_SECONDS;
 return Math.min(1,TAP_POWER+(1-TAP_POWER)*time/full);
}
