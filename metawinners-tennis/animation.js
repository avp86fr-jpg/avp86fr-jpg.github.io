import {proportionHeight} from './player-motion.js?v=12';
import animationMeta from './animation-meta.js?v=7';
// Animation sheets are prepared offline. Gameplay only samples existing frames.
export const ATLAS={width:352,height:304,body:236,center:176,floor:288,columns:8,frames:128};
const TAU=Math.PI*2;
// Phone sprites occupy about 45–65 CSS pixels. Prepare a smaller texture once,
// retaining roughly two texture pixels per screen pixel with less repeated downsampling during drawing.
export function prepareCharacterTexture(source,compact=false){
 if(!compact)return source;
 const out=document.createElement('canvas');out.width=Math.ceil(source.width/2);out.height=Math.ceil(source.height/2);
 const c=out.getContext('2d');c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';c.drawImage(source,0,0,out.width,out.height);
 out.spriteScaleX=out.width/source.width;out.spriteScaleY=out.height/source.height;return out;
}
export class PlayerAnimation{
 constructor(assets,meta){this.assets=assets;this.meta=meta;this.cache=new Map();}
 reset(){for(const layer of this.cache.values()){layer.width=layer.height=1;}this.cache.clear();}
 pose(key,frame){
  const cacheKey=key+':'+frame;if(this.cache.has(cacheKey))return this.cache.get(cacheKey);
  const f=this.meta[key].frames[frame],source=this.assets[key+'Sheet'],out=document.createElement('canvas');out.width=ATLAS.width;out.height=ATLAS.height;
  const ctx=out.getContext('2d'),unit=ATLAS.body/(f.bodyHeight||this.meta[key].bodyHeight);
  ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
  const rx=source.spriteScaleX||1,ry=source.spriteScaleY||1;
  ctx.drawImage(source,f.sx*rx,f.sy*ry,f.sw*rx,f.sh*ry,ATLAS.center-f.ax*unit,ATLAS.floor-f.ay*unit,f.sw*unit,f.sh*unit);
  this.cache.set(cacheKey,out);return out;
 }
 shadow(ctx,key,front,size){
  const name=key+':shadow:'+front;if(!this.cache.has(name)){const source=this.pose(key,front?3:0),layer=document.createElement('canvas');layer.width=source.width;layer.height=source.height;const c=layer.getContext('2d');c.drawImage(source,0,0);c.globalCompositeOperation='source-in';c.fillStyle='#001820';c.fillRect(0,0,layer.width,layer.height);this.cache.set(name,layer);}
  const s=size/ATLAS.body;this.drawProportioned(ctx,key,this.cache.get(name),0,0,ATLAS.width,ATLAS.height,-ATLAS.center,-ATLAS.floor,s);
 }
 drawProportioned(ctx,key,image,sx,sy,sw,sh,x,y,scale,rx=1,ry=1){
  // A few contiguous strips: no extra textures or per-frame pixel processing.
  const bottom=y+sh,cuts=[y,...[-ATLAS.body,-ATLAS.body*.76,-ATLAS.body*.48,0].filter(v=>v>y&&v<bottom),bottom];
  for(let i=1;i<cuts.length;i++){
   const top=cuts[i-1],end=cuts[i],dy=-proportionHeight(-top/ATLAS.body,key)*ATLAS.body,db=-proportionHeight(-end/ATLAS.body,key)*ATLAS.body;
   ctx.drawImage(image,sx*rx,(sy+top-y)*ry,sw*rx,(end-top)*ry,x*scale,dy*scale,sw*scale,(db-dy)*scale);
  }
 }
 draw(ctx,key,{front=false,direction=1,size,run=0,moving=false,frame=front?3:0,actionPhase=0,breath=0,lean=0,squash=0,hop=0,mirror=false}){
  const anim=this.assets[key+'Animation'],s=size/ATLAS.body;let cell=null;
  if(moving&&frame===(front?3:0))cell=(front?48:0)+(direction<0?0:24)+Math.floor(((run%TAU)+TAU)%TAU/TAU*24);
  else if([1,2,4,5].includes(frame))cell=({1:96,2:104,4:112,5:120})[frame]+Math.min(7,Math.max(0,Math.floor(actionPhase*8)));
  ctx.save();ctx.translate(0,-hop);ctx.rotate(lean);ctx.scale((mirror?-1:1)*(1+breath*.0015),1+breath*.003-squash);
  if(anim&&cell!==null){const f=animationMeta[key].frames[cell],rx=anim.spriteScaleX||1,ry=anim.spriteScaleY||1;this.drawProportioned(ctx,key,anim,f.sx,f.sy,f.sw,f.sh,-f.ax,-f.ay,s,rx,ry);}
  else this.drawProportioned(ctx,key,this.pose(key,frame),0,0,ATLAS.width,ATLAS.height,-ATLAS.center,-ATLAS.floor,s);
  ctx.restore();
 }
}
