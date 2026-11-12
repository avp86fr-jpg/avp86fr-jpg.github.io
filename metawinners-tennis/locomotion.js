// Steering operates on a velocity vector, so turning and diagonal travel
// share the same response. Neutral input settles to zero in a short distance.
export function steerVelocity(vx,vy,ix,iy,speed,dt,{gentle=false,traction=1}={}){
 const length=Math.hypot(ix,iy);
 if(length>1){ix/=length;iy/=length;}
 if(length<(gentle?.002:.10))ix=iy=0;
 const current=Math.hypot(vx,vy),tx=ix*speed,ty=iy*speed;
 if(ix===0&&iy===0){
  const next=Math.max(0,(current+.45)*Math.exp(-dt/.036)-.45),ratio=current>0?next/current:0;
  return next===0?{vx:0,vy:0}:{vx:vx*ratio,vy:vy*ratio};
 }
 const reversing=vx*tx+vy*ty<0,response=1-Math.exp(-dt/((reversing?.065:gentle?.09:.065)/traction));
 let dx=(tx-vx)*response,dy=(ty-vy)*response;
 const delta=Math.hypot(dx,dy),limit=(reversing?(gentle?34:50):(gentle?25:44))*traction*dt;
 if(delta>limit){dx*=limit/delta;dy*=limit/delta;}
 return {vx:vx+dx,vy:vy+dy};
}
