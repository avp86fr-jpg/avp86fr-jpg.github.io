// Continuous centreline in metres; Three world forward is -Z.
// Broad sweepers link two deliberately tighter bends per circuit.
const PRESETS={vegas:{seed:.4,bend:1,hills:.38,length:5800},casino:{seed:1.8,bend:1.14,hills:.55,length:6000},miami:{seed:3.2,bend:.82,hills:.28,length:5600},desert:{seed:5.1,bend:1.04,hills:1.2,length:6300}};
export const CIRCUIT_CONFIG=Object.fromEntries(Object.entries(PRESETS).map(([id,p])=>[id,{...p,roadWidth:14,halfWidth:7}]));
export function sampleTrack(distance,circuit='vegas'){
 const p=PRESETS[circuit]||PRESETS.vegas,s=Number(distance)||0,k=p.seed,b=p.bend;
 let x=(Math.sin(s/260+k)*58+Math.sin(s/580+k*.7)*112+Math.sin(s/115+k*1.3)*7)*b;
 let dx=(Math.cos(s/260+k)*58/260+Math.cos(s/580+k*.7)*112/580+Math.cos(s/115+k*1.3)*7/115)*b;
 let ddx=(-Math.sin(s/260+k)*58/(260*260)-Math.sin(s/580+k*.7)*112/(580*580)-Math.sin(s/115+k*1.3)*7/(115*115))*b;
 for(const [center,amplitude,width]of[[1050+k*30,18*b,135],[3120+k*25,-24*b,155],[4860+k*17,17*b,150]]){const u=(s-center)/width,e=Math.exp(-u*u);x+=amplitude*e;dx+=amplitude*e*(-2*u)/width;ddx+=amplitude*e*(4*u*u-2)/(width*width);}
 const y=(Math.sin(s/230+k)*4+Math.sin(s/510)*5)*p.hills;
 const slope=(Math.cos(s/230+k)*4/230+Math.cos(s/510)*5/510)*p.hills;
 return{x,y,heading:-Math.atan(dx),curve:-ddx/(1+dx*dx),slope};
}
