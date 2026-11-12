export class RenderBudget{
 constructor(mode='auto'){this.mode=mode;this.scale=1;this.slow=0;this.fast=0;this.warmup=120;}
 setMode(mode){this.mode=['auto','ultra','battery'].includes(mode)?mode:'auto';this.scale=1;this.slow=this.fast=0;this.warmup=120;}
 ratio(width,height,device=1){const limit=this.mode==='ultra'?6000000:this.mode==='battery'?1200000:2800000;return Math.max(.1,Math.min(device,this.mode==='battery'?1:2,Math.sqrt(limit/(width*height)))*this.scale);}
 sample(frameMs,drawMs){
  if(this.mode!=='auto'||frameMs<=0||frameMs>100)return false;
  if(this.warmup-->0)return false;
  if(frameMs>23&&drawMs>7){this.slow++;this.fast=0;}else if(frameMs<19&&drawMs<5){this.fast++;this.slow=Math.max(0,this.slow-1);}else{this.slow=Math.max(0,this.slow-1);this.fast=0;}
  if(this.slow>90&&this.scale>.65){this.scale=Math.max(.65,this.scale-.15);this.slow=this.fast=0;this.warmup=180;return true;}
  if(this.fast>600&&this.scale<1){this.scale=Math.min(1,this.scale+.1);this.fast=0;this.warmup=180;return true;}return false;
 }
}
