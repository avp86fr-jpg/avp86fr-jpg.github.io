const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));

// Layout and hit testing use CSS pixels, never device pixels or screen coordinates.
export function gameLayout(width,height,{touch=false,safe={},leftHanded=false}={}){
 const inset={top:safe.top||0,right:safe.right||0,bottom:safe.bottom||0,left:safe.left||0};
 const portrait=width<height*.92;
 const area={x:inset.left,y:inset.top,w:width-inset.left-inset.right,h:height-inset.top-inset.bottom};
 let stage={...area},logicalW=1600,logicalH=900;
 if(portrait){
  logicalW=900;logicalH=1200;
  stage.y+=82;stage.h-=348;
  stage.h=Math.max(190,stage.h);
 }
 const scale=Math.min(stage.w/logicalW,stage.h/logicalH);
 stage={x:stage.x+(stage.w-logicalW*scale)/2,y:stage.y+(stage.h-logicalH*scale)/2,w:logicalW*scale,h:logicalH*scale};
 const bottom=height-inset.bottom;
 const stick={x:inset.left+68,y:bottom-79,r:50};
 // Four distinct shots in a thumb-sized 2 × 2 cluster, clear of the court.
 const right=width-inset.right-38,left=right-62,low=bottom-43,high=low-63;
 const buttons={hit:{x:left,y:low,r:28},topspin:{x:left,y:high,r:28},slice:{x:right,y:low,r:28},lob:{x:right,y:high,r:28}};
 if(leftHanded){const axis2=inset.left+width-inset.right;stick.x=axis2-stick.x;for(const b of Object.values(buttons))b.x=axis2-b.x;}
 const shotCenter=(Math.min(...Object.values(buttons).map(b=>b.x))+Math.max(...Object.values(buttons).map(b=>b.x)))/2;
 const panelX=clamp(shotCenter-66,inset.left,width-inset.right-132);
 const power={x:panelX,y:bottom-182,w:132,h:44};
 const aimTop=Math.max(inset.top+55,bottom-280);
 const aimPad={x:panelX,y:Math.min(aimTop,power.y-65),w:132,h:Math.min(88,Math.max(55,power.y-10-aimTop))};
 const leftLimit=leftHanded?Math.max(aimPad.x+aimPad.w,...Object.values(buttons).map(b=>b.x+b.r)):stick.x+stick.r;
 const rightLimit=leftHanded?stick.x-stick.r:Math.min(aimPad.x,...Object.values(buttons).map(b=>b.x-b.r));
 const center=stage.x+stage.w/2;
 const courtHalf=!portrait?Math.min(.33,Math.max(.18,Math.min(center-leftLimit-12,rightLimit-center-12)/stage.w)):.33;
 return {width,height,touch,portrait,stage,logicalW,logicalH,scale,stick,buttons,aimPad,power,courtHalf,safe:inset};
}

export function localPoint(clientX,clientY,rect,width=rect.width,height=rect.height){
 return {x:(clientX-rect.left)*width/Math.max(1,rect.width),y:(clientY-rect.top)*height/Math.max(1,rect.height)};
}

export function stickVector(clientX,clientY,rect,origin=null,sensitivity=.85){
 const center=origin||{x:rect.left+rect.width/2,y:rect.top+rect.height/2};
 const dx=clientX-center.x,dy=clientY-center.y,d=Math.hypot(dx,dy),travel=Math.max(60,rect.width*.57),raw=Math.min(1,d/travel);
 const magnitude=raw<=.18?0:Math.pow(clamp((raw-.18)/.82,0,1),1.65)*clamp(sensitivity,.6,1.1);
 const visual=Math.min(d/travel,1)*rect.width*.34;
 return {x:d?dx/d*magnitude:0,y:d?dy/d*magnitude:0,knobX:d?dx/d*visual:0,knobY:d?dy/d*visual:0};
}
export function touchAim(delta){const amount=Math.max(0,Math.abs(delta)-18)/95;return Math.sign(delta)*Math.pow(Math.min(1,amount),1.4);}

function capture(element,pointerId){try{element.setPointerCapture?.(pointerId);}catch{}}
function releaseCapture(element,pointerId){if(pointerId===null||pointerId===undefined)return;try{element.releasePointerCapture?.(pointerId);}catch{}}

// Absolute aiming uses the whole pad in either hand; the same position always
// chooses the same court target regardless of where the gesture begins.
export class AimPadControls{
 constructor({element,onStart,onAim,onRelease,onCancel}){
  Object.assign(this,{element,onStart,onAim,onRelease,onCancel});this.pointer=null;
  this.listen('pointerdown',e=>{
   if(this.pointer!==null||e.button>0)return;e.preventDefault();
   if(this.onStart?.(e)===false)return;
   this.pointer=e.pointerId;capture(element,e.pointerId);element.classList.add('pressed');this.aim(e);
  });
  this.listen('pointermove',e=>{if(e.pointerId!==this.pointer)return;e.preventDefault();this.aim(e);});
  this.listen('pointerup',e=>{if(e.pointerId!==this.pointer)return;e.preventDefault();this.aim(e);this.clear();this.onRelease?.();});
  for(const type of ['pointercancel','lostpointercapture'])this.listen(type,e=>{if(e.pointerId!==this.pointer)return;this.clear();this.onCancel?.();});
 }
 listen(type,fn){this.element.addEventListener(type,fn,{passive:false});}
 aim(e){const rect=this.element.getBoundingClientRect(),x=(e.clientX-rect.left-8)/Math.max(1,rect.width-16),depth=1-(e.clientY-rect.top-22)/Math.max(1,rect.height-30);this.onAim?.(clamp(x*2-1,-1,1),clamp(depth,0,1));}
 clear(){const pointer=this.pointer;this.pointer=null;this.element.classList.remove('pressed');releaseCapture(this.element,pointer);}
 reset(){const active=this.pointer!==null;this.clear();if(active)this.onCancel?.();}
}

export class TouchControls{
 constructor({stick,knob,buttons,onMove,onCharge,onAim,onRelease,onCancel,sensitivity=.85}){
  Object.assign(this,{stick,knob,buttons,onMove,onCharge,onAim,onRelease,onCancel,sensitivity});this.movePointer=null;this.shotPointer=null;
  this.listen(stick,'pointerdown',e=>{if(this.movePointer!==null||e.button>0)return;e.preventDefault();this.movePointer=e.pointerId;this.moveOrigin={x:e.clientX,y:e.clientY};capture(stick,e.pointerId);this.move(e);});
  this.listen(stick,'pointermove',e=>{if(e.pointerId===this.movePointer)this.move(e);});
  for(const type of ['pointerup','pointercancel','lostpointercapture'])this.listen(stick,type,e=>{if(e.pointerId===this.movePointer)this.resetMove();});
  for(const [kind,button]of Object.entries(buttons)){
   this.listen(button,'pointerdown',e=>{if(this.shotPointer!==null||e.button>0)return;e.preventDefault();if(this.onCharge(kind,e)===false)return;this.shotPointer=e.pointerId;this.shotButton=button;this.kind=kind;this.startX=e.clientX;this.startY=e.clientY;capture(button,e.pointerId);button.classList.add('pressed');});
   this.listen(button,'pointermove',e=>{if(e.pointerId!==this.shotPointer)return;e.preventDefault();this.onAim(touchAim(e.clientX-this.startX),touchAim((this.startY-e.clientY)*.8));});
   this.listen(button,'pointerup',e=>{if(e.pointerId!==this.shotPointer)return;e.preventDefault();const kind=this.kind;this.clearShot();this.onRelease(kind);});
   for(const type of ['pointercancel','lostpointercapture'])this.listen(button,type,e=>{if(e.pointerId===this.shotPointer){this.clearShot();this.onCancel();}});
  }
 }
 listen(el,type,fn){el.addEventListener(type,fn,{passive:false});}
 move(e){e.preventDefault();const value=stickVector(e.clientX,e.clientY,this.stick.getBoundingClientRect(),this.moveOrigin,this.sensitivity);this.knob.style.transform=`translate(${value.knobX}px,${value.knobY}px)`;this.onMove(value.x,value.y);}
 resetMove(){const pointer=this.movePointer;this.movePointer=null;this.moveOrigin=null;this.knob.style.transform='translate(0px,0px)';releaseCapture(this.stick,pointer);this.onMove(0,0);}
 clearShot(){const pointer=this.shotPointer,button=this.shotButton;this.shotPointer=null;this.shotButton=null;for(const button of Object.values(this.buttons))button.classList.remove('pressed');if(button)releaseCapture(button,pointer);}
 reset(){this.resetMove();this.clearShot();this.onCancel();}
}
