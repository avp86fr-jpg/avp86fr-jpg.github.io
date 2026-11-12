// Singles service boxes also apply in doubles. A ball touching a line is in.
export const SERVE_NAMES={flat:'FLAT',topspin:'KICK',slice:'SLICE',lob:'SAFE'};
export const netHeightAt=x=>.914+.156*Math.min(Math.abs(x)/5.7,1)**2;
export function serviceBounds(side,safe=false){
 const near=safe?.45:-.40,wide=safe?3.70:4.55;
 return {left:side>0?-wide:near,right:side>0?-near:wide,near:1.4,far:safe?5.95:6.85};
}
export function serviceCall(x,y,server,side,radius=.034){
 const direction=server===0?-1:1,cross=direction*side;
 if(y*direction<=0)return 'WRONG SIDE';
 if(x*cross < -radius)return 'WRONG BOX';
 if(Math.abs(x)>4.115+radius)return 'WIDE';
 if(Math.abs(y)>6.4+radius)return 'LONG';
 return null;
}
export function serviceFootFault(actor,server,side,doubles=false){
 const sign=server===0?1:-1,half=doubles?5.485:4.115;
 return actor.y*sign-.13<=11.885||actor.x*sign*side-.13<=0||Math.abs(actor.x)+.13>=half;
}
