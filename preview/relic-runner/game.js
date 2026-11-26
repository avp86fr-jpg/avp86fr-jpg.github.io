(()=>{var Ef=0,Zh=1,Tf=2;var od=1,ah=2,ji=3,Sn=0,ze=1,Ce=2,Hi=0,Mn=1,si=2,Jh=3,Kh=4,Af=5,Gn=100,Rf=101,Cf=102,Pf=103,If=104,Lf=200,Df=201,Uf=202,Nf=203,Fl=204,kl=205,Ff=206,kf=207,Bf=208,Of=209,zf=210,Hf=211,Vf=212,Gf=213,Wf=214,Bl=0,Ol=1,zl=2,Is=3,Hl=4,Vl=5,Gl=6,Wl=7,ld=0,Xf=1,qf=2,bn=0,oh=1,lh=2,ch=3,Pr=4,Yf=5,hh=6,uh=7;var cd=300,Ls=301,Ds=302,Xl=303,ql=304,lo=306,mr=1e3,Xn=1001,Yl=1002,fi=1003,$f=1004;var Gr=1005;var Oi=1006,tl=1007;var qn=1008;var rn=1009,hd=1010,ud=1011,gr=1012,dh=1013,Yn=1014,zi=1015,Pi=1016,fh=1017,ph=1018,Us=1020,dd=35902,fd=1021,pd=1022,Ai=1023,md=1024,gd=1025,Rs=1026,Ns=1027,mh=1028,gh=1029,xd=1030,xh=1031;var vh=1033,ya=33776,Ma=33777,ba=33778,Sa=33779,$l=35840,Zl=35841,Jl=35842,Kl=35843,Ql=36196,jl=37492,tc=37496,ec=37808,ic=37809,nc=37810,sc=37811,rc=37812,ac=37813,oc=37814,lc=37815,cc=37816,hc=37817,uc=37818,dc=37819,fc=37820,pc=37821,wa=36492,mc=36494,gc=36495,vd=36283,xc=36284,vc=36285,_c=36286;var Ea=2300,yc=2301,el=2302,Qh=2400,jh=2401,tu=2402;var Zf=3200,Jf=3201;var _d=0,Kf=1,_n="",Je="srgb",Vs="srgb-linear",co="linear",ue="srgb";var os=7680;var eu=519,Qf=512,jf=513,tp=514,yd=515,ep=516,ip=517,np=518,sp=519,Mc=35044,Ii=35048;var iu="300 es",en=2e3,Ta=2001,wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var il=Math.PI/180,Aa=180/Math.PI;function nn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($e[s&255]+$e[s>>8&255]+$e[s>>16&255]+$e[s>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]).toLowerCase()}function Ge(s,t,e){return Math.max(t,Math.min(e,s))}function rp(s,t){return(s%t+t)%t}function nl(s,t,e){return(1-e)*s+e*t}function Bi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function pe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var J=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class s{constructor(t,e,i,n,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],m=i[8],x=n[0],g=n[3],p=n[6],M=n[1],y=n[4],v=n[7],L=n[2],E=n[5],R=n[8];return r[0]=a*x+o*M+l*L,r[3]=a*g+o*y+l*E,r[6]=a*p+o*v+l*R,r[1]=c*x+h*M+u*L,r[4]=c*g+h*y+u*E,r[7]=c*p+h*v+u*R,r[2]=f*x+d*M+m*L,r[5]=f*g+d*y+m*E,r[8]=f*p+d*v+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,m=e*u+i*f+n*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=f*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-o*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(sl.makeScale(t,e)),this}rotate(t){return this.premultiply(sl.makeRotation(-t)),this}translate(t,e){return this.premultiply(sl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},sl=new $t;function Md(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ra(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ap(){let s=Ra("canvas");return s.style.display="block",s}var nu={};function cr(s){s in nu||(nu[s]=!0,console.warn(s))}function op(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function lp(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cp(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var jt={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(s.r=sn(s.r),s.g=sn(s.g),s.b=sn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_n?co:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function sn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var su=[.64,.33,.3,.6,.15,.06],ru=[.2126,.7152,.0722],au=[.3127,.329],ou=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lu=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[Vs]:{primaries:su,whitePoint:au,transfer:co,toXYZ:ou,fromXYZ:lu,luminanceCoefficients:ru,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:su,whitePoint:au,transfer:ue,toXYZ:ou,fromXYZ:lu,luminanceCoefficients:ru,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}});var ls,bc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ls===void 0&&(ls=Ra("canvas")),ls.width=t.width,ls.height=t.height;let i=ls.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ra("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=sn(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(sn(e[i]/255)*255):e[i]=sn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hp=0,Ca=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=nn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(rl(n[a].image)):r.push(rl(n[a]))}else r=rl(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function rl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var up=0,ri=class s extends wn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=Xn,n=Xn,r=Oi,a=qn,o=Ai,l=rn,c=s.DEFAULT_ANISOTROPY,h=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=nn(),this.name="",this.source=new Ca(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mr:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case Yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mr:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case Yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=cd;ri.DEFAULT_ANISOTROPY=1;var me=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(d+1)/2,L=(p+1)/2,E=(h+f)/4,R=(u+x)/4,I=(m+g)/4;return y>v&&y>L?y<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(y),n=E/i,r=R/i):v>L?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=E/n,r=I/n):L<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(L),i=R/r,n=I/r),this.set(i,n,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sc=class extends wn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new ri(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ca(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends Sc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Pa=class extends ri{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=fi,this.minFilter=fi,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wc=class extends ri{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=fi,this.minFilter=fi,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ee=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],f=r[a+0],d=r[a+1],m=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==m){let g=1-o,p=l*f+c*d+h*m+u*x,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let L=Math.sqrt(y),E=Math.atan2(L,p*M);g=Math.sin(g*E)/L,o=Math.sin(o*E)/L}let v=o*M;if(l=l*g+f*v,c=c*g+d*v,h=h*g+m*v,u=u*g+x*v,g===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-o*d,t[e+2]=c*m+h*d+o*f-l*u,t[e+3]=h*m-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),f=l(i/2),d=l(n/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-n)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-n)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*n+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return al.copy(this).projectOnVector(t),this.sub(al)}reflect(t){return this.sub(al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},al=new T,cu=new Ee,an=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(wi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(wi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=wi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,wi):wi.fromBufferAttribute(r,a),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),Xr.subVectors(this.max,js),cs.subVectors(t.a,js),hs.subVectors(t.b,js),us.subVectors(t.c,js),fn.subVectors(hs,cs),pn.subVectors(us,hs),Fn.subVectors(cs,us);let e=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-Fn.z,Fn.y,fn.z,0,-fn.x,pn.z,0,-pn.x,Fn.z,0,-Fn.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-Fn.y,Fn.x,0];return!ol(e,cs,hs,us,Xr)||(e=[1,0,0,0,1,0,0,0,1],!ol(e,cs,hs,us,Xr))?!1:(qr.crossVectors(fn,pn),e=[qr.x,qr.y,qr.z],ol(e,cs,hs,us,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},$i=[new T,new T,new T,new T,new T,new T,new T,new T],wi=new T,Wr=new an,cs=new T,hs=new T,us=new T,fn=new T,pn=new T,Fn=new T,js=new T,Xr=new T,qr=new T,kn=new T;function ol(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){kn.fromArray(s,r);let o=n.x*Math.abs(kn.x)+n.y*Math.abs(kn.y)+n.z*Math.abs(kn.z),l=t.dot(kn),c=e.dot(kn),h=i.dot(kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var dp=new an,tr=new T,ll=new T,En=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):dp.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);let e=tr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(tr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(ll)),this.expandByPoint(tr.copy(t.center).sub(ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zi=new T,cl=new T,Yr=new T,mn=new T,hl=new T,$r=new T,ul=new T,Ia=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,e),Zi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){cl.copy(t).add(e).multiplyScalar(.5),Yr.copy(e).sub(t).normalize(),mn.copy(this.origin).sub(cl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Yr),o=mn.dot(this.direction),l=-mn.dot(Yr),c=mn.lengthSq(),h=Math.abs(1-a*a),u,f,d,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(cl).addScaledVector(Yr,f),d}intersectSphere(t,e){Zi.subVectors(t.center,this.origin);let i=Zi.dot(this.direction),n=Zi.dot(Zi)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,e,i,n,r){hl.subVectors(e,t),$r.subVectors(i,t),ul.crossVectors(hl,$r);let a=this.direction.dot(ul),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mn.subVectors(this.origin,t);let l=o*this.direction.dot($r.crossVectors(mn,$r));if(l<0)return null;let c=o*this.direction.dot(hl.cross(mn));if(c<0||l+c>a)return null;let h=-o*mn.dot(ul);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class s{constructor(t,e,i,n,r,a,o,l,c,h,u,f,d,m,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,u,f,d,m,x,g)}set(t,e,i,n,r,a,o,l,c,h,u,f,d,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),a=1/ds.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=m+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f+x*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*l,d=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fp,t,pp)}lookAt(t,e,i){let n=this.elements;return ui.subVectors(t,e),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),gn.crossVectors(i,ui),gn.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),gn.crossVectors(i,ui)),gn.normalize(),Zr.crossVectors(ui,gn),n[0]=gn.x,n[4]=Zr.x,n[8]=ui.x,n[1]=gn.y,n[5]=Zr.y,n[9]=ui.y,n[2]=gn.z,n[6]=Zr.z,n[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],m=i[2],x=i[6],g=i[10],p=i[14],M=i[3],y=i[7],v=i[11],L=i[15],E=n[0],R=n[4],I=n[8],b=n[12],_=n[1],C=n[5],D=n[9],U=n[13],z=n[2],q=n[6],O=n[10],et=n[14],W=n[3],nt=n[7],ht=n[11],_t=n[15];return r[0]=a*E+o*_+l*z+c*W,r[4]=a*R+o*C+l*q+c*nt,r[8]=a*I+o*D+l*O+c*ht,r[12]=a*b+o*U+l*et+c*_t,r[1]=h*E+u*_+f*z+d*W,r[5]=h*R+u*C+f*q+d*nt,r[9]=h*I+u*D+f*O+d*ht,r[13]=h*b+u*U+f*et+d*_t,r[2]=m*E+x*_+g*z+p*W,r[6]=m*R+x*C+g*q+p*nt,r[10]=m*I+x*D+g*O+p*ht,r[14]=m*b+x*U+g*et+p*_t,r[3]=M*E+y*_+v*z+L*W,r[7]=M*R+y*C+v*q+L*nt,r[11]=M*I+y*D+v*O+L*ht,r[15]=M*b+y*U+v*et+L*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*l*u-n*c*u-r*o*f+i*c*f+n*o*d-i*l*d)+x*(+e*l*d-e*c*f+r*a*f-n*a*d+n*c*h-r*l*h)+g*(+e*c*u-e*o*d-r*a*u+i*a*d+r*o*h-i*c*h)+p*(-n*o*h-e*l*u+e*o*f+n*a*u-i*a*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],M=u*g*c-x*f*c+x*l*d-o*g*d-u*l*p+o*f*p,y=m*f*c-h*g*c-m*l*d+a*g*d+h*l*p-a*f*p,v=h*x*c-m*u*c+m*o*d-a*x*d-h*o*p+a*u*p,L=m*u*l-h*x*l-m*o*f+a*x*f+h*o*g-a*u*g,E=e*M+i*y+n*v+r*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return t[0]=M*R,t[1]=(x*f*r-u*g*r-x*n*d+i*g*d+u*n*p-i*f*p)*R,t[2]=(o*g*r-x*l*r+x*n*c-i*g*c-o*n*p+i*l*p)*R,t[3]=(u*l*r-o*f*r-u*n*c+i*f*c+o*n*d-i*l*d)*R,t[4]=y*R,t[5]=(h*g*r-m*f*r+m*n*d-e*g*d-h*n*p+e*f*p)*R,t[6]=(m*l*r-a*g*r-m*n*c+e*g*c+a*n*p-e*l*p)*R,t[7]=(a*f*r-h*l*r+h*n*c-e*f*c-a*n*d+e*l*d)*R,t[8]=v*R,t[9]=(m*u*r-h*x*r-m*i*d+e*x*d+h*i*p-e*u*p)*R,t[10]=(a*x*r-m*o*r+m*i*c-e*x*c-a*i*p+e*o*p)*R,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*d-e*o*d)*R,t[12]=L*R,t[13]=(h*x*n-m*u*n+m*i*f-e*x*f-h*i*g+e*u*g)*R,t[14]=(m*o*n-a*x*n-m*i*l+e*x*l+a*i*g-e*o*g)*R,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*f+e*o*f)*R,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,m=r*u,x=a*h,g=a*u,p=o*u,M=l*c,y=l*h,v=l*u,L=i.x,E=i.y,R=i.z;return n[0]=(1-(x+p))*L,n[1]=(d+v)*L,n[2]=(m-y)*L,n[3]=0,n[4]=(d-v)*E,n[5]=(1-(f+p))*E,n[6]=(g+M)*E,n[7]=0,n[8]=(m+y)*R,n[9]=(g-M)*R,n[10]=(1-(f+x))*R,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=ds.set(n[0],n[1],n[2]).length(),a=ds.set(n[4],n[5],n[6]).length(),o=ds.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],Ei.copy(this);let c=1/r,h=1/a,u=1/o;return Ei.elements[0]*=c,Ei.elements[1]*=c,Ei.elements[2]*=c,Ei.elements[4]*=h,Ei.elements[5]*=h,Ei.elements[6]*=h,Ei.elements[8]*=u,Ei.elements[9]*=u,Ei.elements[10]*=u,e.setFromRotationMatrix(Ei),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=en){let l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),d,m;if(o===en)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ta)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=en){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(a-r),f=(e+t)*c,d=(i+n)*h,m,x;if(o===en)m=(a+r)*u,x=-2*u;else if(o===Ta)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ds=new T,Ei=new Qt,fp=new T(0,0,0),pp=new T(1,1,1),gn=new T,Zr=new T,ui=new T,hu=new Qt,uu=new Ee,ai=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return hu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uu.setFromEuler(this),this.setFromQuaternion(uu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var La=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mp=0,du=new T,fs=new Ee,Ji=new Qt,Jr=new T,er=new T,gp=new T,xp=new Ee,fu=new T(1,0,0),pu=new T(0,1,0),mu=new T(0,0,1),gu={type:"added"},vp={type:"removed"},ps={type:"childadded",child:null},dl={type:"childremoved",child:null},Le=class s extends wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new T,e=new ai,i=new Ee,n=new T(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Qt},normalMatrix:{value:new $t}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(fu,t)}rotateY(t){return this.rotateOnAxis(pu,t)}rotateZ(t){return this.rotateOnAxis(mu,t)}translateOnAxis(t,e){return du.copy(t).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fu,t)}translateY(t){return this.translateOnAxis(pu,t)}translateZ(t){return this.translateOnAxis(mu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Jr.copy(t):Jr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(er,Jr,this.up):Ji.lookAt(Jr,er,this.up),this.quaternion.setFromRotationMatrix(Ji),n&&(Ji.extractRotation(n.matrixWorld),fs.setFromRotationMatrix(Ji),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gu),ps.child=t,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vp),dl.child=t,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gu),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Le.DEFAULT_UP=new T(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ti=new T,Ki=new T,fl=new T,Qi=new T,ms=new T,gs=new T,xu=new T,pl=new T,ml=new T,gl=new T,xl=new me,vl=new me,_l=new me,yn=class s{constructor(t=new T,e=new T,i=new T){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ti.subVectors(t,e),n.cross(Ti);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Ti.subVectors(n,e),Ki.subVectors(i,e),fl.subVectors(t,e);let a=Ti.dot(Ti),o=Ti.dot(Ki),l=Ti.dot(fl),c=Ki.dot(Ki),h=Ki.dot(fl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qi.x),l.addScaledVector(a,Qi.y),l.addScaledVector(o,Qi.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return xl.setScalar(0),vl.setScalar(0),_l.setScalar(0),xl.fromBufferAttribute(t,e),vl.fromBufferAttribute(t,i),_l.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(xl,r.x),a.addScaledVector(vl,r.y),a.addScaledVector(_l,r.z),a}static isFrontFacing(t,e,i,n){return Ti.subVectors(i,e),Ki.subVectors(t,e),Ti.cross(Ki).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),Ti.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;ms.subVectors(n,i),gs.subVectors(r,i),pl.subVectors(t,i);let l=ms.dot(pl),c=gs.dot(pl);if(l<=0&&c<=0)return e.copy(i);ml.subVectors(t,n);let h=ms.dot(ml),u=gs.dot(ml);if(h>=0&&u<=h)return e.copy(n);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(ms,a);gl.subVectors(t,r);let d=ms.dot(gl),m=gs.dot(gl);if(m>=0&&d<=m)return e.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(gs,o);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return xu.subVectors(r,n),o=(u-h)/(u-h+(d-m)),e.copy(n).addScaledVector(xu,o);let p=1/(g+x+f);return a=x*p,o=f*p,e.copy(i).addScaledVector(ms,a).addScaledVector(gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function yl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var At=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=jt.workingColorSpace){if(t=rp(t,1),e=Ge(e,0,1),i=Ge(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=yl(a,r,t+1/3),this.g=yl(a,r,t),this.b=yl(a,r,t-1/3)}return jt.toWorkingColorSpace(this,n),this}setStyle(t,e=Je){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let i=bd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sn(t.r),this.g=sn(t.g),this.b=sn(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return jt.fromWorkingColorSpace(Ze.copy(this),t),Math.round(Ge(Ze.r*255,0,255))*65536+Math.round(Ge(Ze.g*255,0,255))*256+Math.round(Ge(Ze.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Ze.copy(this),e);let i=Ze.r,n=Ze.g,r=Ze.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Je){jt.fromWorkingColorSpace(Ze.copy(this),t);let e=Ze.r,i=Ze.g,n=Ze.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(xn),this.setHSL(xn.h+t,xn.s+e,xn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(xn),t.getHSL(Kr);let i=nl(xn.h,Kr.h,e),n=nl(xn.s,Kr.s,e),r=nl(xn.l,Kr.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new At;At.NAMES=bd;var _p=0,on=class extends wn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=nn(),this.name="",this.blending=Mn,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=kl,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mn&&(i.blending=this.blending),this.side!==Sn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fl&&(i.blendSrc=this.blendSrc),this.blendDst!==kl&&(i.blendDst=this.blendDst),this.blendEquation!==Gn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},He=class extends on{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new T,Qr=new J,oe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Mc,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Qr.fromBufferAttribute(this,e),Qr.applyMatrix3(t),this.setXY(e,Qr.x,Qr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Bi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),n=pe(n,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mc&&(t.usage=this.usage),t}};var Da=class extends oe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ua=class extends oe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Zt=class extends oe{constructor(t,e,i){super(new Float32Array(t),e,i)}},yp=0,xi=new Qt,Ml=new Le,xs=new T,di=new an,ir=new an,Oe=new T,fe=class s extends wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Md(t)?Ua:Da)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,e,i){return xi.makeTranslation(t,e,i),this.applyMatrix4(xi),this}scale(t,e,i){return xi.makeScale(t,e,i),this.applyMatrix4(xi),this}lookAt(t){return Ml.lookAt(t),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(i,3))}else{for(let i=0,n=e.count;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];di.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let i=this.boundingSphere.center;if(di.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(di.min,ir.min),di.expandByPoint(Oe),Oe.addVectors(di.max,ir.max),di.expandByPoint(Oe)):(di.expandByPoint(ir.min),di.expandByPoint(ir.max))}di.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Oe.fromBufferAttribute(o,c),l&&(xs.fromBufferAttribute(t,c),Oe.add(xs)),n=Math.max(n,i.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oe(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new T,l[I]=new T;let c=new T,h=new T,u=new T,f=new J,d=new J,m=new J,x=new T,g=new T;function p(I,b,_){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,_),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,_),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let C=1/(d.x*m.y-m.x*d.y);isFinite(C)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(C),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(C),o[I].add(x),o[b].add(x),o[_].add(x),l[I].add(g),l[b].add(g),l[_].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,b=M.length;I<b;++I){let _=M[I],C=_.start,D=_.count;for(let U=C,z=C+D;U<z;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let y=new T,v=new T,L=new T,E=new T;function R(I){L.fromBufferAttribute(n,I),E.copy(L);let b=o[I];y.copy(b),y.sub(L.multiplyScalar(L.dot(b))).normalize(),v.crossVectors(E,b);let C=v.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,C)}for(let I=0,b=M.length;I<b;++I){let _=M[I],C=_.start,D=_.count;for(let U=C,z=C+D;U<z;U+=3)R(t.getX(U+0)),R(t.getX(U+1)),R(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let n=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);n.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)n.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new oe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vu=new Qt,Bn=new Ia,jr=new En,_u=new T,ta=new T,ea=new T,ia=new T,bl=new T,na=new T,yu=new T,sa=new T,Tt=class extends Le{constructor(t=new fe,e=new He){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(bl.fromBufferAttribute(u,t),a?na.addScaledVector(bl,h):na.addScaledVector(bl.sub(e),h))}e.add(na)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!(jr.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(jr,_u)===null||Bn.origin.distanceToSquared(_u)>(t.far-t.near)**2))&&(vu.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(vu),!(i.boundingBox!==null&&Bn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,L=y;v<L;v+=3){let E=o.getX(v),R=o.getX(v+1),I=o.getX(v+2);n=ra(this,p,t,i,c,h,u,E,R,I),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let M=o.getX(g),y=o.getX(g+1),v=o.getX(g+2);n=ra(this,a,t,i,c,h,u,M,y,v),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,L=y;v<L;v+=3){let E=v,R=v+1,I=v+2;n=ra(this,p,t,i,c,h,u,E,R,I),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let M=g,y=g+1,v=g+2;n=ra(this,a,t,i,c,h,u,M,y,v),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function Mp(s,t,e,i,n,r,a,o){let l;if(t.side===ze?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===Sn,o),l===null)return null;sa.copy(o),sa.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(sa);return c<e.near||c>e.far?null:{distance:c,point:sa.clone(),object:s}}function ra(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,ta),s.getVertexPosition(l,ea),s.getVertexPosition(c,ia);let h=Mp(s,t,e,i,ta,ea,ia,yu);if(h){let u=new T;yn.getBarycoord(yu,ta,ea,ia,u),n&&(h.uv=yn.getInterpolatedAttribute(n,o,l,c,u,new J)),r&&(h.uv1=yn.getInterpolatedAttribute(r,o,l,c,u,new J)),a&&(h.normal=yn.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new T,materialIndex:0};yn.getNormal(ta,ea,ia,f.normal),h.face=f,h.barycoord=u}return h}var Et=class s extends fe{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,n,a,2),m("x","z","y",1,-1,t,i,-e,n,a,3),m("x","y","z",1,-1,t,e,i,n,r,4),m("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function m(x,g,p,M,y,v,L,E,R,I,b){let _=v/R,C=L/I,D=v/2,U=L/2,z=E/2,q=R+1,O=I+1,et=0,W=0,nt=new T;for(let ht=0;ht<O;ht++){let _t=ht*C-U;for(let Vt=0;Vt<q;Vt++){let re=Vt*_-D;nt[x]=re*M,nt[g]=_t*y,nt[p]=z,c.push(nt.x,nt.y,nt.z),nt[x]=0,nt[g]=0,nt[p]=E>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Vt/R),u.push(1-ht/I),et+=1}}for(let ht=0;ht<I;ht++)for(let _t=0;_t<R;_t++){let Vt=f+_t+q*ht,re=f+_t+q*(ht+1),H=f+(_t+1)+q*(ht+1),X=f+(_t+1)+q*ht;l.push(Vt,re,X),l.push(re,H,X),W+=6}o.addGroup(d,W,b),d+=W,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fs(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function je(s){let t={};for(let e=0;e<s.length;e++){let i=Fs(s[e]);for(let n in i)t[n]=i[n]}return t}function bp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Sd(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var Rn={clone:Fs,merge:je},Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Te=class extends on{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=bp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Na=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=en}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vn=new T,Mu=new J,bu=new J,We=class extends Na{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Aa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vn.x,vn.y).multiplyScalar(-t/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vn.x,vn.y).multiplyScalar(-t/vn.z)}getViewSize(t,e){return this.getViewBounds(t,Mu,bu),e.subVectors(bu,Mu)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(il*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vs=-90,_s=1,Ec=class extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new We(vs,_s,t,e);n.layers=this.layers,this.add(n);let r=new We(vs,_s,t,e);r.layers=this.layers,this.add(r);let a=new We(vs,_s,t,e);a.layers=this.layers,this.add(a);let o=new We(vs,_s,t,e);o.layers=this.layers,this.add(o);let l=new We(vs,_s,t,e);l.layers=this.layers,this.add(l);let c=new We(vs,_s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===en)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Fa=class extends ri{constructor(t,e,i,n,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ls,super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Tc=class extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Fa(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Oi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Et(5,5,5),r=new Te({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ze,blending:Hi});r.uniforms.tEquirect.value=e;let a=new Tt(n,r),o=e.minFilter;return e.minFilter===qn&&(e.minFilter=Oi),new Ec(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}},Sl=new T,Ep=new T,Tp=new $t,tn=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Sl.subVectors(i,e).cross(Ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Sl),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Tp.getNormalMatrix(t),n=this.coplanarPoint(Sl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},On=new En,aa=new T,xr=class{constructor(t=new tn,e=new tn,i=new tn,n=new tn,r=new tn,a=new tn){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=en){let i=this.planes,n=t.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],f=n[7],d=n[8],m=n[9],x=n[10],g=n[11],p=n[12],M=n[13],y=n[14],v=n[15];if(i[0].setComponents(l-r,f-c,g-d,v-p).normalize(),i[1].setComponents(l+r,f+c,g+d,v+p).normalize(),i[2].setComponents(l+a,f+h,g+m,v+M).normalize(),i[3].setComponents(l-a,f-h,g-m,v-M).normalize(),i[4].setComponents(l-o,f-u,g-x,v-y).normalize(),e===en)i[5].setComponents(l+o,f+u,g+x,v+y).normalize();else if(e===Ta)i[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(aa.x=n.normal.x>0?t.max.x:t.min.x,aa.y=n.normal.y>0?t.max.y:t.min.y,aa.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(aa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wd(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ap(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var De=class s extends fe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,f=e/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let M=p*f-a;for(let y=0;y<c;y++){let v=y*u-r;m.push(v,-M,0),x.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let y=M+c*p,v=M+c*(p+1),L=M+1+c*(p+1),E=M+1+c*p;d.push(y,v,E),d.push(v,L,E)}this.setIndex(d),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_m=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ym=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Em=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Am=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Im=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,km=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,n0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,d0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,x0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,M0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,A0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,U0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,N0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,F0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,q0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Q0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:Rp,alphahash_pars_fragment:Cp,alphamap_fragment:Pp,alphamap_pars_fragment:Ip,alphatest_fragment:Lp,alphatest_pars_fragment:Dp,aomap_fragment:Up,aomap_pars_fragment:Np,batching_pars_vertex:Fp,batching_vertex:kp,begin_vertex:Bp,beginnormal_vertex:Op,bsdfs:zp,iridescence_fragment:Hp,bumpmap_pars_fragment:Vp,clipping_planes_fragment:Gp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:Xp,clipping_planes_vertex:qp,color_fragment:Yp,color_pars_fragment:$p,color_pars_vertex:Zp,color_vertex:Jp,common:Kp,cube_uv_reflection_fragment:Qp,defaultnormal_vertex:jp,displacementmap_pars_vertex:tm,displacementmap_vertex:em,emissivemap_fragment:im,emissivemap_pars_fragment:nm,colorspace_fragment:sm,colorspace_pars_fragment:rm,envmap_fragment:am,envmap_common_pars_fragment:om,envmap_pars_fragment:lm,envmap_pars_vertex:cm,envmap_physical_pars_fragment:ym,envmap_vertex:hm,fog_vertex:um,fog_pars_vertex:dm,fog_fragment:fm,fog_pars_fragment:pm,gradientmap_pars_fragment:mm,lightmap_pars_fragment:gm,lights_lambert_fragment:xm,lights_lambert_pars_fragment:vm,lights_pars_begin:_m,lights_toon_fragment:Mm,lights_toon_pars_fragment:bm,lights_phong_fragment:Sm,lights_phong_pars_fragment:wm,lights_physical_fragment:Em,lights_physical_pars_fragment:Tm,lights_fragment_begin:Am,lights_fragment_maps:Rm,lights_fragment_end:Cm,logdepthbuf_fragment:Pm,logdepthbuf_pars_fragment:Im,logdepthbuf_pars_vertex:Lm,logdepthbuf_vertex:Dm,map_fragment:Um,map_pars_fragment:Nm,map_particle_fragment:Fm,map_particle_pars_fragment:km,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:Om,morphinstance_vertex:zm,morphcolor_vertex:Hm,morphnormal_vertex:Vm,morphtarget_pars_vertex:Gm,morphtarget_vertex:Wm,normal_fragment_begin:Xm,normal_fragment_maps:qm,normal_pars_fragment:Ym,normal_pars_vertex:$m,normal_vertex:Zm,normalmap_pars_fragment:Jm,clearcoat_normal_fragment_begin:Km,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:jm,iridescence_pars_fragment:t0,opaque_fragment:e0,packing:i0,premultiplied_alpha_fragment:n0,project_vertex:s0,dithering_fragment:r0,dithering_pars_fragment:a0,roughnessmap_fragment:o0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:h0,shadowmap_vertex:u0,shadowmask_pars_fragment:d0,skinbase_vertex:f0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:x0,specularmap_pars_fragment:v0,tonemapping_fragment:_0,tonemapping_pars_fragment:y0,transmission_fragment:M0,transmission_pars_fragment:b0,uv_pars_fragment:S0,uv_pars_vertex:w0,uv_vertex:E0,worldpos_vertex:T0,background_vert:A0,background_frag:R0,backgroundCube_vert:C0,backgroundCube_frag:P0,cube_vert:I0,cube_frag:L0,depth_vert:D0,depth_frag:U0,distanceRGBA_vert:N0,distanceRGBA_frag:F0,equirect_vert:k0,equirect_frag:B0,linedashed_vert:O0,linedashed_frag:z0,meshbasic_vert:H0,meshbasic_frag:V0,meshlambert_vert:G0,meshlambert_frag:W0,meshmatcap_vert:X0,meshmatcap_frag:q0,meshnormal_vert:Y0,meshnormal_frag:$0,meshphong_vert:Z0,meshphong_frag:J0,meshphysical_vert:K0,meshphysical_frag:Q0,meshtoon_vert:j0,meshtoon_frag:tg,points_vert:eg,points_frag:ig,shadow_vert:ng,shadow_frag:sg,sprite_vert:rg,sprite_frag:ag},ct={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},ki={basic:{uniforms:je([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:je([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new At(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:je([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:je([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:je([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new At(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:je([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:je([ct.points,ct.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:je([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:je([ct.common,ct.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:je([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:je([ct.sprite,ct.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:je([ct.common,ct.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:je([ct.lights,ct.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};ki.physical={uniforms:je([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var oa={r:0,b:0,g:0},zn=new ai,og=new Qt;function lg(s,t,e,i,n,r,a){let o=new At(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function x(M){let y=!1,v=m(M);v===null?p(o,l):v&&v.isColor&&(p(v,1),y=!0);let L=s.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(M,y){let v=m(y);v&&(v.isCubeTexture||v.mapping===lo)?(h===void 0&&(h=new Tt(new Et(1,1,1),new Te({name:"BackgroundCubeMaterial",uniforms:Fs(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),zn.copy(y.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(og.makeRotationFromEuler(zn)),h.material.toneMapped=jt.getTransfer(v.colorSpace)!==ue,(u!==v||f!==v.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Tt(new De(2,2),new Te({name:"BackgroundMaterial",uniforms:Fs(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=jt.getTransfer(v.colorSpace)!==ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(oa,Sd(s)),i.buffers.color.setClear(oa.r,oa.g,oa.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:x,addToRenderList:g}}function cg(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null),r=n,a=!1;function o(_,C,D,U,z){let q=!1,O=u(U,D,C);r!==O&&(r=O,c(r.object)),q=d(_,U,D,z),q&&m(_,U,D,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(_,C,D,U),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function u(_,C,D){let U=D.wireframe===!0,z=i[_.id];z===void 0&&(z={},i[_.id]=z);let q=z[C.id];q===void 0&&(q={},z[C.id]=q);let O=q[U];return O===void 0&&(O=f(l()),q[U]=O),O}function f(_){let C=[],D=[],U=[];for(let z=0;z<e;z++)C[z]=0,D[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:U,object:_,attributes:{},index:null}}function d(_,C,D,U){let z=r.attributes,q=C.attributes,O=0,et=D.getAttributes();for(let W in et)if(et[W].location>=0){let ht=z[W],_t=q[W];if(_t===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(_t=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(_t=_.instanceColor)),ht===void 0||ht.attribute!==_t||_t&&ht.data!==_t.data)return!0;O++}return r.attributesNum!==O||r.index!==U}function m(_,C,D,U){let z={},q=C.attributes,O=0,et=D.getAttributes();for(let W in et)if(et[W].location>=0){let ht=q[W];ht===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(ht=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(ht=_.instanceColor));let _t={};_t.attribute=ht,ht&&ht.data&&(_t.data=ht.data),z[W]=_t,O++}r.attributes=z,r.attributesNum=O,r.index=U}function x(){let _=r.newAttributes;for(let C=0,D=_.length;C<D;C++)_[C]=0}function g(_){p(_,0)}function p(_,C){let D=r.newAttributes,U=r.enabledAttributes,z=r.attributeDivisors;D[_]=1,U[_]===0&&(s.enableVertexAttribArray(_),U[_]=1),z[_]!==C&&(s.vertexAttribDivisor(_,C),z[_]=C)}function M(){let _=r.newAttributes,C=r.enabledAttributes;for(let D=0,U=C.length;D<U;D++)C[D]!==_[D]&&(s.disableVertexAttribArray(D),C[D]=0)}function y(_,C,D,U,z,q,O){O===!0?s.vertexAttribIPointer(_,C,D,z,q):s.vertexAttribPointer(_,C,D,U,z,q)}function v(_,C,D,U){x();let z=U.attributes,q=D.getAttributes(),O=C.defaultAttributeValues;for(let et in q){let W=q[et];if(W.location>=0){let nt=z[et];if(nt===void 0&&(et==="instanceMatrix"&&_.instanceMatrix&&(nt=_.instanceMatrix),et==="instanceColor"&&_.instanceColor&&(nt=_.instanceColor)),nt!==void 0){let ht=nt.normalized,_t=nt.itemSize,Vt=t.get(nt);if(Vt===void 0)continue;let re=Vt.buffer,H=Vt.type,X=Vt.bytesPerElement,ut=H===s.INT||H===s.UNSIGNED_INT||nt.gpuType===dh;if(nt.isInterleavedBufferAttribute){let it=nt.data,Lt=it.stride,Nt=nt.offset;if(it.isInstancedInterleavedBuffer){for(let Ut=0;Ut<W.locationSize;Ut++)p(W.location+Ut,it.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Ut=0;Ut<W.locationSize;Ut++)g(W.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,re);for(let Ut=0;Ut<W.locationSize;Ut++)y(W.location+Ut,_t/W.locationSize,H,ht,Lt*X,(Nt+_t/W.locationSize*Ut)*X,ut)}else{if(nt.isInstancedBufferAttribute){for(let it=0;it<W.locationSize;it++)p(W.location+it,nt.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let it=0;it<W.locationSize;it++)g(W.location+it);s.bindBuffer(s.ARRAY_BUFFER,re);for(let it=0;it<W.locationSize;it++)y(W.location+it,_t/W.locationSize,H,ht,_t*X,_t/W.locationSize*it*X,ut)}}else if(O!==void 0){let ht=O[et];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(W.location,ht);break;case 3:s.vertexAttrib3fv(W.location,ht);break;case 4:s.vertexAttrib4fv(W.location,ht);break;default:s.vertexAttrib1fv(W.location,ht)}}}}M()}function L(){I();for(let _ in i){let C=i[_];for(let D in C){let U=C[D];for(let z in U)h(U[z].object),delete U[z];delete C[D]}delete i[_]}}function E(_){if(i[_.id]===void 0)return;let C=i[_.id];for(let D in C){let U=C[D];for(let z in U)h(U[z].object),delete U[z];delete C[D]}delete i[_.id]}function R(_){for(let C in i){let D=i[C];if(D[_.id]===void 0)continue;let U=D[_.id];for(let z in U)h(U[z].object),delete U[z];delete D[_.id]}}function I(){b(),a=!0,r!==n&&(r=n,c(r.object))}function b(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:I,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function hg(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];e.update(m,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ug(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(R){return!(R!==Ai&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let I=R===Pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==rn&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==zi&&!I)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:L,maxSamples:E}}function dg(s){let t=this,e=null,i=0,n=!1,r=!1,a=new tn,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||n;return n=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!n||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:i,y=M*4,v=p.clippingState||null;l.value=v,v=h(m,f,y,d);for(let L=0;L!==y;++L)v[L]=e[L];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=d;y!==x;++y,v+=4)a.copy(u[y]).applyMatrix4(M,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function fg(s){let t=new WeakMap;function e(a,o){return o===Xl?a.mapping=Ls:o===ql&&(a.mapping=Ds),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Xl||o===ql)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Tc(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var ks=class extends Na{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ts=4,Su=[.125,.215,.35,.446,.526,.582],Wn=20,wl=new ks,wu=new At,El=null,Tl=0,Al=0,Rl=!1,Vn=(1+Math.sqrt(5))/2,ys=1/Vn,Eu=[new T(-Vn,ys,0),new T(Vn,ys,0),new T(-ys,0,Vn),new T(ys,0,Vn),new T(0,Vn,-ys),new T(0,Vn,ys),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],ka=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){El=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(El,Tl,Al),this._renderer.xr.enabled=Rl,t.scissorTest=!1,la(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),El=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:Pi,format:Ai,colorSpace:Vs,depthBuffer:!1},n=Tu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pg(r)),this._blurMaterial=mg(r,t,e)}return n}_compileMaterial(t){let e=new Tt(this._lodPlanes[0],t);this._renderer.compile(e,wl)}_sceneToCubeUV(t,e,i,n){let o=new We(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(wu),h.toneMapping=bn,h.autoClear=!1;let d=new He({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),m=new Tt(new Et,d),x=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,x=!0):(d.color.copy(wu),x=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let y=this._cubeSize;la(n,M*y,p>2?y:0,y,y),h.setRenderTarget(n),x&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Ls||t.mapping===Ds;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());let r=n?this._cubemapMaterial:this._equirectMaterial,a=new Tt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;la(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,wl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Eu[(n-r-1)%Eu.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Tt(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Wn-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Wn;g>Wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Wn}`);let p=[],M=0;for(let R=0;R<Wn;++R){let I=R/x,b=Math.exp(-I*I/2);p.push(b),R===0?M+=b:R<g&&(M+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-i;let v=this._sizeLods[n],L=3*v*(n>y-Ts?n-y+Ts:0),E=4*(this._cubeSize-v);la(e,L,E,3*v,2*v),l.setRenderTarget(e),l.render(u,wl)}};function pg(s){let t=[],e=[],i=[],n=s,r=s-Ts+1+Su.length;for(let a=0;a<r;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>s-Ts?l=Su[a-s+Ts-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,g=2,p=1,M=new Float32Array(x*m*d),y=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let E=0;E<d;E++){let R=E%3*2/3-1,I=E>2?0:-1,b=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];M.set(b,x*m*E),y.set(f,g*m*E);let _=[E,E,E,E,E,E];v.set(_,p*m*E)}let L=new fe;L.setAttribute("position",new oe(M,x)),L.setAttribute("uv",new oe(y,g)),L.setAttribute("faceIndex",new oe(v,p)),t.push(L),n>Ts&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Tu(s,t,e){let i=new ti(s,t,e);return i.texture.mapping=lo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function la(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function mg(s,t,e){let i=new Float32Array(Wn),n=new T(0,1,0);return new Te({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Au(){return new Te({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Ru(){return new Te({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function _h(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gg(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Xl||l===ql,h=l===Ls||l===Ds;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new ka(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&n(d)?(e===null&&(e=new ka(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function n(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function xg(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&cr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function vg(s,t,e,i){let n={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let x=f.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}f.removeEventListener("dispose",a),delete n[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)t.update(f[m],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let m in d){let x=d[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(d!==null){let M=d.array;x=d.version;for(let y=0,v=M.length;y<v;y+=3){let L=M[y+0],E=M[y+1],R=M[y+2];f.push(L,E,E,R,R,L)}}else if(m!==void 0){let M=m.array;x=m.version;for(let y=0,v=M.length/3-1;y<v;y+=3){let L=y+0,E=y+1,R=y+2;f.push(L,E,E,R,R,L)}}else return;let g=new(Md(f)?Ua:Da)(f,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function _g(s,t,e){let i;function n(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(i,d,r,f*a),e.update(d,i,1)}function c(f,d,m){m!==0&&(s.drawElementsInstanced(i,d,r,f*a,m),e.update(d,i,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,i,1)}function u(f,d,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*x[M];e.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function yg(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Mg(s,t,e){let i=new WeakMap,n=new me;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let b=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],y=0;d===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let v=o.attributes.position.count*y,L=1;v>t.maxTextureSize&&(L=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*L*4*u),R=new Pa(E,v,L,u);R.type=zi,R.needsUpdate=!0;let I=y*4;for(let _=0;_<u;_++){let C=g[_],D=p[_],U=M[_],z=v*L*4*_;for(let q=0;q<C.count;q++){let O=q*I;d===!0&&(n.fromBufferAttribute(C,q),E[z+O+0]=n.x,E[z+O+1]=n.y,E[z+O+2]=n.z,E[z+O+3]=0),m===!0&&(n.fromBufferAttribute(D,q),E[z+O+4]=n.x,E[z+O+5]=n.y,E[z+O+6]=n.z,E[z+O+7]=0),x===!0&&(n.fromBufferAttribute(U,q),E[z+O+8]=n.x,E[z+O+9]=n.y,E[z+O+10]=n.z,E[z+O+11]=U.itemSize===4?n.w:1)}}f={count:u,texture:R,size:new J(v,L)},i.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function bg(s,t,e,i){let n=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ba=class extends ri{constructor(t,e,i,n,r,a,o,l,c,h=Rs){if(h!==Rs&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Rs&&(i=Yn),i===void 0&&h===Ns&&(i=Us),super(null,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:fi,this.minFilter=l!==void 0?l:fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ed=new ri,Cu=new Ba(1,1),Td=new Pa,Ad=new wc,Rd=new Fa,Pu=[],Iu=[],Lu=new Float32Array(16),Du=new Float32Array(9),Uu=new Float32Array(4);function Gs(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=Pu[n];if(r===void 0&&(r=new Float32Array(n),Pu[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ue(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ne(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function ho(s,t){let e=Iu[t];e===void 0&&(e=new Int32Array(t),Iu[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Sg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function wg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2fv(this.addr,t),Ne(e,t)}}function Eg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;s.uniform3fv(this.addr,t),Ne(e,t)}}function Tg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4fv(this.addr,t),Ne(e,t)}}function Ag(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;Uu.set(i),s.uniformMatrix2fv(this.addr,!1,Uu),Ne(e,i)}}function Rg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;Du.set(i),s.uniformMatrix3fv(this.addr,!1,Du),Ne(e,i)}}function Cg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;Lu.set(i),s.uniformMatrix4fv(this.addr,!1,Lu),Ne(e,i)}}function Pg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ig(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2iv(this.addr,t),Ne(e,t)}}function Lg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3iv(this.addr,t),Ne(e,t)}}function Dg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4iv(this.addr,t),Ne(e,t)}}function Ug(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Ng(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2uiv(this.addr,t),Ne(e,t)}}function Fg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3uiv(this.addr,t),Ne(e,t)}}function kg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4uiv(this.addr,t),Ne(e,t)}}function Bg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Cu.compareFunction=yd,r=Cu):r=Ed,e.setTexture2D(t||r,n)}function Og(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Ad,n)}function zg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Rd,n)}function Hg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Td,n)}function Vg(s){switch(s){case 5126:return Sg;case 35664:return wg;case 35665:return Eg;case 35666:return Tg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Pg;case 35667:case 35671:return Ig;case 35668:case 35672:return Lg;case 35669:case 35673:return Dg;case 5125:return Ug;case 36294:return Ng;case 36295:return Fg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Hg}}function Gg(s,t){s.uniform1fv(this.addr,t)}function Wg(s,t){let e=Gs(t,this.size,2);s.uniform2fv(this.addr,e)}function Xg(s,t){let e=Gs(t,this.size,3);s.uniform3fv(this.addr,e)}function qg(s,t){let e=Gs(t,this.size,4);s.uniform4fv(this.addr,e)}function Yg(s,t){let e=Gs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function $g(s,t){let e=Gs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Zg(s,t){let e=Gs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Jg(s,t){s.uniform1iv(this.addr,t)}function Kg(s,t){s.uniform2iv(this.addr,t)}function Qg(s,t){s.uniform3iv(this.addr,t)}function jg(s,t){s.uniform4iv(this.addr,t)}function tx(s,t){s.uniform1uiv(this.addr,t)}function ex(s,t){s.uniform2uiv(this.addr,t)}function ix(s,t){s.uniform3uiv(this.addr,t)}function nx(s,t){s.uniform4uiv(this.addr,t)}function sx(s,t,e){let i=this.cache,n=t.length,r=ho(e,n);Ue(i,r)||(s.uniform1iv(this.addr,r),Ne(i,r));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||Ed,r[a])}function rx(s,t,e){let i=this.cache,n=t.length,r=ho(e,n);Ue(i,r)||(s.uniform1iv(this.addr,r),Ne(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Ad,r[a])}function ax(s,t,e){let i=this.cache,n=t.length,r=ho(e,n);Ue(i,r)||(s.uniform1iv(this.addr,r),Ne(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Rd,r[a])}function ox(s,t,e){let i=this.cache,n=t.length,r=ho(e,n);Ue(i,r)||(s.uniform1iv(this.addr,r),Ne(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Td,r[a])}function lx(s){switch(s){case 5126:return Gg;case 35664:return Wg;case 35665:return Xg;case 35666:return qg;case 35674:return Yg;case 35675:return $g;case 35676:return Zg;case 5124:case 35670:return Jg;case 35667:case 35671:return Kg;case 35668:case 35672:return Qg;case 35669:case 35673:return jg;case 5125:return tx;case 36294:return ex;case 36295:return ix;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return ox}}var Ac=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Vg(e.type)}},Rc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lx(e.type)}},Cc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},Cl=/(\w+)(\])?(\[|\.)?/g;function Nu(s,t){s.seq.push(t),s.map[t.id]=t}function cx(s,t,e){let i=s.name,n=i.length;for(Cl.lastIndex=0;;){let r=Cl.exec(i),a=Cl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Nu(e,c===void 0?new Ac(o,s,t):new Rc(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Cc(o),Nu(e,u)),e=u}}}var Ps=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),a=t.getUniformLocation(e,r.name);cx(r,a,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Fu(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var hx=37297,ux=0;function dx(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var ku=new $t;function fx(s){jt._getMatrix(ku,jt.workingColorSpace,s);let t=`mat3( ${ku.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(s)){case co:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Bu(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+dx(s.getShaderSource(t),a)}else return n}function px(s,t){let e=fx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function mx(s,t){let e;switch(t){case oh:e="Linear";break;case lh:e="Reinhard";break;case ch:e="Cineon";break;case Pr:e="ACESFilmic";break;case hh:e="AgX";break;case uh:e="Neutral";break;case Yf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ca=new T;function gx(){jt.getLuminanceCoefficients(ca);let s=ca.x.toFixed(4),t=ca.y.toFixed(4),e=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function vx(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function _x(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function hr(s){return s!==""}function Ou(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(s){return s.replace(yx,bx)}var Mx=new Map;function bx(s,t){let e=Kt[t];if(e===void 0){let i=Mx.get(t);if(i!==void 0)e=Kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Pc(e)}var Sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(s){return s.replace(Sx,wx)}function wx(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Vu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ex(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===od?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ah?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ji&&(t="SHADOWMAP_TYPE_VSM"),t}function Tx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ls:case Ds:t="ENVMAP_TYPE_CUBE";break;case lo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ax(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ds&&(t="ENVMAP_MODE_REFRACTION"),t}function Rx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ld:t="ENVMAP_BLENDING_MULTIPLY";break;case Xf:t="ENVMAP_BLENDING_MIX";break;case qf:t="ENVMAP_BLENDING_ADD";break}return t}function Cx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Px(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ex(e),c=Tx(e),h=Ax(e),u=Rx(e),f=Cx(e),d=xx(e),m=vx(r),x=n.createProgram(),g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(hr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(hr).join(`
`),p.length>0&&(p+=`
`)):(g=[Vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),p=[Vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==bn?mx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,px("linearToOutputTexel",e.outputColorSpace),gx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hr).join(`
`)),a=Pc(a),a=Ou(a,e),a=zu(a,e),o=Pc(o),o=Ou(o,e),o=zu(o,e),a=Hu(a),o=Hu(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=M+g+a,v=M+p+o,L=Fu(n,n.VERTEX_SHADER,y),E=Fu(n,n.FRAGMENT_SHADER,v);n.attachShader(x,L),n.attachShader(x,E),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function R(C){if(s.debug.checkShaderErrors){let D=n.getProgramInfoLog(x).trim(),U=n.getShaderInfoLog(L).trim(),z=n.getShaderInfoLog(E).trim(),q=!0,O=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,L,E);else{let et=Bu(n,L,"vertex"),W=Bu(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+et+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(U===""||z==="")&&(O=!1);O&&(C.diagnostics={runnable:q,programLog:D,vertexShader:{log:U,prefix:g},fragmentShader:{log:z,prefix:p}})}n.deleteShader(L),n.deleteShader(E),I=new Ps(n,x),b=_x(n,x)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=n.getProgramParameter(x,hx)),_},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ux++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=E,this}var Ix=0,Ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Lc(t),e.set(t,i)),i}},Lc=class{constructor(t){this.id=Ix++,this.code=t,this.usedTimes=0}};function Lx(s,t,e,i,n,r,a){let o=new La,l=new Ic,c=new Set,h=[],u=n.logarithmicDepthBuffer,f=n.vertexTextures,d=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,_,C,D,U){let z=D.fog,q=U.geometry,O=b.isMeshStandardMaterial?D.environment:null,et=(b.isMeshStandardMaterial?e:t).get(b.envMap||O),W=et&&et.mapping===lo?et.image.height:null,nt=m[b.type];b.precision!==null&&(d=n.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ht=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_t=ht!==void 0?ht.length:0,Vt=0;q.morphAttributes.position!==void 0&&(Vt=1),q.morphAttributes.normal!==void 0&&(Vt=2),q.morphAttributes.color!==void 0&&(Vt=3);let re,H,X,ut;if(nt){let de=ki[nt];re=de.vertexShader,H=de.fragmentShader}else re=b.vertexShader,H=b.fragmentShader,l.update(b),X=l.getVertexShaderID(b),ut=l.getFragmentShaderID(b);let it=s.getRenderTarget(),Lt=s.state.buffers.depth.getReversed(),Nt=U.isInstancedMesh===!0,Ut=U.isBatchedMesh===!0,Xt=!!b.map,K=!!b.matcap,st=!!et,P=!!b.aoMap,yt=!!b.lightMap,tt=!!b.bumpMap,gt=!!b.normalMap,ot=!!b.displacementMap,Ft=!!b.emissiveMap,dt=!!b.metalnessMap,A=!!b.roughnessMap,S=b.anisotropy>0,B=b.clearcoat>0,$=b.dispersion>0,j=b.iridescence>0,Z=b.sheen>0,bt=b.transmission>0,lt=S&&!!b.anisotropyMap,vt=B&&!!b.clearcoatMap,Ht=B&&!!b.clearcoatNormalMap,rt=B&&!!b.clearcoatRoughnessMap,St=j&&!!b.iridescenceMap,zt=j&&!!b.iridescenceThicknessMap,Gt=Z&&!!b.sheenColorMap,wt=Z&&!!b.sheenRoughnessMap,ee=!!b.specularMap,Jt=!!b.specularColorMap,ge=!!b.specularIntensityMap,N=bt&&!!b.transmissionMap,ft=bt&&!!b.thicknessMap,Y=!!b.gradientMap,Q=!!b.alphaMap,xt=b.alphaTest>0,pt=!!b.alphaHash,qt=!!b.extensions,Re=bn;b.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Re=s.toneMapping);let Ye={shaderID:nt,shaderType:b.type,shaderName:b.name,vertexShader:re,fragmentShader:H,defines:b.defines,customVertexShaderID:X,customFragmentShaderID:ut,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Ut,batchingColor:Ut&&U._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&U.instanceColor!==null,instancingMorph:Nt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Vs,alphaToCoverage:!!b.alphaToCoverage,map:Xt,matcap:K,envMap:st,envMapMode:st&&et.mapping,envMapCubeUVHeight:W,aoMap:P,lightMap:yt,bumpMap:tt,normalMap:gt,displacementMap:f&&ot,emissiveMap:Ft,normalMapObjectSpace:gt&&b.normalMapType===Kf,normalMapTangentSpace:gt&&b.normalMapType===_d,metalnessMap:dt,roughnessMap:A,anisotropy:S,anisotropyMap:lt,clearcoat:B,clearcoatMap:vt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:rt,dispersion:$,iridescence:j,iridescenceMap:St,iridescenceThicknessMap:zt,sheen:Z,sheenColorMap:Gt,sheenRoughnessMap:wt,specularMap:ee,specularColorMap:Jt,specularIntensityMap:ge,transmission:bt,transmissionMap:N,thicknessMap:ft,gradientMap:Y,opaque:b.transparent===!1&&b.blending===Mn&&b.alphaToCoverage===!1,alphaMap:Q,alphaTest:xt,alphaHash:pt,combine:b.combine,mapUv:Xt&&x(b.map.channel),aoMapUv:P&&x(b.aoMap.channel),lightMapUv:yt&&x(b.lightMap.channel),bumpMapUv:tt&&x(b.bumpMap.channel),normalMapUv:gt&&x(b.normalMap.channel),displacementMapUv:ot&&x(b.displacementMap.channel),emissiveMapUv:Ft&&x(b.emissiveMap.channel),metalnessMapUv:dt&&x(b.metalnessMap.channel),roughnessMapUv:A&&x(b.roughnessMap.channel),anisotropyMapUv:lt&&x(b.anisotropyMap.channel),clearcoatMapUv:vt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:wt&&x(b.sheenRoughnessMap.channel),specularMapUv:ee&&x(b.specularMap.channel),specularColorMapUv:Jt&&x(b.specularColorMap.channel),specularIntensityMapUv:ge&&x(b.specularIntensityMap.channel),transmissionMapUv:N&&x(b.transmissionMap.channel),thicknessMapUv:ft&&x(b.thicknessMap.channel),alphaMapUv:Q&&x(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(gt||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(Xt||Q),fog:!!z,useFog:b.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Lt,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Vt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Re,decodeVideoTexture:Xt&&b.map.isVideoTexture===!0&&jt.getTransfer(b.map.colorSpace)===ue,decodeVideoTextureEmissive:Ft&&b.emissiveMap.isVideoTexture===!0&&jt.getTransfer(b.emissiveMap.colorSpace)===ue,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ce,flipSided:b.side===ze,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&b.extensions.multiDraw===!0||Ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function p(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)_.push(C),_.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(M(_,b),y(_,b),_.push(s.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function M(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function y(b,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){let _=m[b.type],C;if(_){let D=ki[_];C=Rn.clone(D.uniforms)}else C=b.uniforms;return C}function L(b,_){let C;for(let D=0,U=h.length;D<U;D++){let z=h[D];if(z.cacheKey===_){C=z,++C.usedTimes;break}}return C===void 0&&(C=new Px(s,_,b,r),h.push(C)),C}function E(b){if(--b.usedTimes===0){let _=h.indexOf(b);h[_]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:L,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:I}}function Dx(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function Ux(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Gu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Wu(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u,f,d,m,x,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function o(u,f,d,m,x,g){let p=a(u,f,d,m,x,g);d.transmission>0?i.push(p):d.transparent===!0?n.push(p):e.push(p)}function l(u,f,d,m,x,g){let p=a(u,f,d,m,x,g);d.transmission>0?i.unshift(p):d.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Ux),i.length>1&&i.sort(f||Gu),n.length>1&&n.sort(f||Gu)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function Nx(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new Wu,s.set(i,[a])):n>=r.length?(a=new Wu,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Fx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new At};break;case"SpotLight":e={position:new T,direction:new T,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new T,halfWidth:new T,halfHeight:new T};break}return s[t.id]=e,e}}}function kx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Bx=0;function Ox(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function zx(s){let t=new Fx,e=kx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new T);let n=new T,r=new Qt,a=new Qt;function o(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,M=0,y=0,v=0,L=0,E=0,R=0;c.sort(Ox);for(let b=0,_=c.length;b<_;b++){let C=c[b],D=C.color,U=C.intensity,z=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=D.r*U,u+=D.g*U,f+=D.b*U;else if(C.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(C.sh.coefficients[O],U);R++}else if(C.isDirectionalLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let et=C.shadow,W=e.get(C);W.shadowIntensity=et.intensity,W.shadowBias=et.bias,W.shadowNormalBias=et.normalBias,W.shadowRadius=et.radius,W.shadowMapSize=et.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=q,i.directionalShadowMatrix[d]=C.shadow.matrix,M++}i.directional[d]=O,d++}else if(C.isSpotLight){let O=t.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(D).multiplyScalar(U),O.distance=z,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,i.spot[x]=O;let et=C.shadow;if(C.map&&(i.spotLightMap[L]=C.map,L++,et.updateMatrices(C),C.castShadow&&E++),i.spotLightMatrix[x]=et.matrix,C.castShadow){let W=e.get(C);W.shadowIntensity=et.intensity,W.shadowBias=et.bias,W.shadowNormalBias=et.normalBias,W.shadowRadius=et.radius,W.shadowMapSize=et.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=q,v++}x++}else if(C.isRectAreaLight){let O=t.get(C);O.color.copy(D).multiplyScalar(U),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=O,g++}else if(C.isPointLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){let et=C.shadow,W=e.get(C);W.shadowIntensity=et.intensity,W.shadowBias=et.bias,W.shadowNormalBias=et.normalBias,W.shadowRadius=et.radius,W.shadowMapSize=et.mapSize,W.shadowCameraNear=et.camera.near,W.shadowCameraFar=et.camera.far,i.pointShadow[m]=W,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=C.shadow.matrix,y++}i.point[m]=O,m++}else if(C.isHemisphereLight){let O=t.get(C);O.skyColor.copy(C.color).multiplyScalar(U),O.groundColor.copy(C.groundColor).multiplyScalar(U),i.hemi[p]=O,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let I=i.hash;(I.directionalLength!==d||I.pointLength!==m||I.spotLength!==x||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==y||I.numSpotShadows!==v||I.numSpotMaps!==L||I.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+L-E,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,I.directionalLength=d,I.pointLength=m,I.spotLength=x,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=y,I.numSpotShadows=v,I.numSpotMaps=L,I.numLightProbes=R,i.version=Bx++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let y=c[p];if(y.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(g),u++}else if(y.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(g),d++}else if(y.isRectAreaLight){let v=i.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:i}}function Xu(s){let t=new zx(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Hx(s){let t=new WeakMap;function e(n,r=0){let a=t.get(n),o;return a===void 0?(o=new Xu(s),t.set(n,[o])):r>=a.length?(o=new Xu(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Dc=class extends on{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Uc=class extends on{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wx(s,t,e){let i=new xr,n=new J,r=new J,a=new me,o=new Dc({depthPacking:Jf}),l=new Uc,c={},h=e.maxTextureSize,u={[Sn]:ze,[ze]:Sn,[Ce]:Ce},f=new Te({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:Vx,fragmentShader:Gx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new fe;m.setAttribute("position",new oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Tt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=od;let p=this.type;this.render=function(E,R,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let b=s.getRenderTarget(),_=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Hi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let U=p!==ji&&this.type===ji,z=p===ji&&this.type!==ji;for(let q=0,O=E.length;q<O;q++){let et=E[q],W=et.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let nt=W.getFrameExtents();if(n.multiply(nt),r.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/nt.x),n.x=r.x*nt.x,W.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/nt.y),n.y=r.y*nt.y,W.mapSize.y=r.y)),W.map===null||U===!0||z===!0){let _t=this.type!==ji?{minFilter:fi,magFilter:fi}:{};W.map!==null&&W.map.dispose(),W.map=new ti(n.x,n.y,_t),W.map.texture.name=et.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let ht=W.getViewportCount();for(let _t=0;_t<ht;_t++){let Vt=W.getViewport(_t);a.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),D.viewport(a),W.updateMatrices(et,_t),i=W.getFrustum(),v(R,I,W.camera,et,this.type)}W.isPointLightShadow!==!0&&this.type===ji&&M(W,I),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(b,_,C)};function M(E,R){let I=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ti(n.x,n.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,I,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,I,d,x,null)}function y(E,R,I,b){let _=null,C=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)_=C;else if(_=I.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let D=_.uuid,U=R.uuid,z=c[D];z===void 0&&(z={},c[D]=z);let q=z[U];q===void 0&&(q=_.clone(),z[U]=q,R.addEventListener("dispose",L)),_=q}if(_.visible=R.visible,_.wireframe=R.wireframe,b===ji?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:u[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let D=s.properties.get(_);D.light=I}return _}function v(E,R,I,b,_){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===ji)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let U=t.update(E),z=E.material;if(Array.isArray(z)){let q=U.groups;for(let O=0,et=q.length;O<et;O++){let W=q[O],nt=z[W.materialIndex];if(nt&&nt.visible){let ht=y(E,nt,b,_);E.onBeforeShadow(s,E,R,I,U,ht,W),s.renderBufferDirect(I,null,U,ht,E,W),E.onAfterShadow(s,E,R,I,U,ht,W)}}}else if(z.visible){let q=y(E,z,b,_);E.onBeforeShadow(s,E,R,I,U,q,null),s.renderBufferDirect(I,null,U,q,E,null),E.onAfterShadow(s,E,R,I,U,q,null)}}let D=E.children;for(let U=0,z=D.length;U<z;U++)v(D[U],R,I,b,_)}function L(E){E.target.removeEventListener("dispose",L);for(let I in c){let b=c[I],_=E.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}var Xx={[Bl]:Ol,[zl]:Gl,[Hl]:Wl,[Is]:Vl,[Ol]:Bl,[Gl]:zl,[Wl]:Hl,[Vl]:Is};function qx(s,t){function e(){let N=!1,ft=new me,Y=null,Q=new me(0,0,0,0);return{setMask:function(xt){Y!==xt&&!N&&(s.colorMask(xt,xt,xt,xt),Y=xt)},setLocked:function(xt){N=xt},setClear:function(xt,pt,qt,Re,Ye){Ye===!0&&(xt*=Re,pt*=Re,qt*=Re),ft.set(xt,pt,qt,Re),Q.equals(ft)===!1&&(s.clearColor(xt,pt,qt,Re),Q.copy(ft))},reset:function(){N=!1,Y=null,Q.set(-1,0,0,0)}}}function i(){let N=!1,ft=!1,Y=null,Q=null,xt=null;return{setReversed:function(pt){if(ft!==pt){let qt=t.get("EXT_clip_control");ft?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);let Re=xt;xt=null,this.setClear(Re)}ft=pt},getReversed:function(){return ft},setTest:function(pt){pt?it(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(pt){Y!==pt&&!N&&(s.depthMask(pt),Y=pt)},setFunc:function(pt){if(ft&&(pt=Xx[pt]),Q!==pt){switch(pt){case Bl:s.depthFunc(s.NEVER);break;case Ol:s.depthFunc(s.ALWAYS);break;case zl:s.depthFunc(s.LESS);break;case Is:s.depthFunc(s.LEQUAL);break;case Hl:s.depthFunc(s.EQUAL);break;case Vl:s.depthFunc(s.GEQUAL);break;case Gl:s.depthFunc(s.GREATER);break;case Wl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=pt}},setLocked:function(pt){N=pt},setClear:function(pt){xt!==pt&&(ft&&(pt=1-pt),s.clearDepth(pt),xt=pt)},reset:function(){N=!1,Y=null,Q=null,xt=null,ft=!1}}}function n(){let N=!1,ft=null,Y=null,Q=null,xt=null,pt=null,qt=null,Re=null,Ye=null;return{setTest:function(de){N||(de?it(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(de){ft!==de&&!N&&(s.stencilMask(de),ft=de)},setFunc:function(de,bi,qi){(Y!==de||Q!==bi||xt!==qi)&&(s.stencilFunc(de,bi,qi),Y=de,Q=bi,xt=qi)},setOp:function(de,bi,qi){(pt!==de||qt!==bi||Re!==qi)&&(s.stencilOp(de,bi,qi),pt=de,qt=bi,Re=qi)},setLocked:function(de){N=de},setClear:function(de){Ye!==de&&(s.clearStencil(de),Ye=de)},reset:function(){N=!1,ft=null,Y=null,Q=null,xt=null,pt=null,qt=null,Re=null,Ye=null}}}let r=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,y=null,v=null,L=null,E=null,R=new At(0,0,0),I=0,b=!1,_=null,C=null,D=null,U=null,z=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,et=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=et>=1):W.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=et>=2);let nt=null,ht={},_t=s.getParameter(s.SCISSOR_BOX),Vt=s.getParameter(s.VIEWPORT),re=new me().fromArray(_t),H=new me().fromArray(Vt);function X(N,ft,Y,Q){let xt=new Uint8Array(4),pt=s.createTexture();s.bindTexture(N,pt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qt=0;qt<Y;qt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(ft+qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return pt}let ut={};ut[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),ut[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ut[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(s.DEPTH_TEST),a.setFunc(Is),tt(!1),gt(Zh),it(s.CULL_FACE),P(Hi);function it(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Lt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Nt(N,ft){return u[N]!==ft?(s.bindFramebuffer(N,ft),u[N]=ft,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ft),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function Ut(N,ft){let Y=d,Q=!1;if(N){Y=f.get(ft),Y===void 0&&(Y=[],f.set(ft,Y));let xt=N.textures;if(Y.length!==xt.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,qt=xt.length;pt<qt;pt++)Y[pt]=s.COLOR_ATTACHMENT0+pt;Y.length=xt.length,Q=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,Q=!0);Q&&s.drawBuffers(Y)}function Xt(N){return m!==N?(s.useProgram(N),m=N,!0):!1}let K={[Gn]:s.FUNC_ADD,[Rf]:s.FUNC_SUBTRACT,[Cf]:s.FUNC_REVERSE_SUBTRACT};K[Pf]=s.MIN,K[If]=s.MAX;let st={[Lf]:s.ZERO,[Df]:s.ONE,[Uf]:s.SRC_COLOR,[Fl]:s.SRC_ALPHA,[zf]:s.SRC_ALPHA_SATURATE,[Bf]:s.DST_COLOR,[Ff]:s.DST_ALPHA,[Nf]:s.ONE_MINUS_SRC_COLOR,[kl]:s.ONE_MINUS_SRC_ALPHA,[Of]:s.ONE_MINUS_DST_COLOR,[kf]:s.ONE_MINUS_DST_ALPHA,[Hf]:s.CONSTANT_COLOR,[Vf]:s.ONE_MINUS_CONSTANT_COLOR,[Gf]:s.CONSTANT_ALPHA,[Wf]:s.ONE_MINUS_CONSTANT_ALPHA};function P(N,ft,Y,Q,xt,pt,qt,Re,Ye,de){if(N===Hi){x===!0&&(Lt(s.BLEND),x=!1);return}if(x===!1&&(it(s.BLEND),x=!0),N!==Af){if(N!==g||de!==b){if((p!==Gn||v!==Gn)&&(s.blendEquation(s.FUNC_ADD),p=Gn,v=Gn),de)switch(N){case Mn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case si:s.blendFunc(s.ONE,s.ONE);break;case Jh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Mn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case si:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,y=null,L=null,E=null,R.set(0,0,0),I=0,g=N,b=de}return}xt=xt||ft,pt=pt||Y,qt=qt||Q,(ft!==p||xt!==v)&&(s.blendEquationSeparate(K[ft],K[xt]),p=ft,v=xt),(Y!==M||Q!==y||pt!==L||qt!==E)&&(s.blendFuncSeparate(st[Y],st[Q],st[pt],st[qt]),M=Y,y=Q,L=pt,E=qt),(Re.equals(R)===!1||Ye!==I)&&(s.blendColor(Re.r,Re.g,Re.b,Ye),R.copy(Re),I=Ye),g=N,b=!1}function yt(N,ft){N.side===Ce?Lt(s.CULL_FACE):it(s.CULL_FACE);let Y=N.side===ze;ft&&(Y=!Y),tt(Y),N.blending===Mn&&N.transparent===!1?P(Hi):P(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let Q=N.stencilWrite;o.setTest(Q),Q&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ft(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function tt(N){_!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),_=N)}function gt(N){N!==Ef?(it(s.CULL_FACE),N!==C&&(N===Zh?s.cullFace(s.BACK):N===Tf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),C=N}function ot(N){N!==D&&(O&&s.lineWidth(N),D=N)}function Ft(N,ft,Y){N?(it(s.POLYGON_OFFSET_FILL),(U!==ft||z!==Y)&&(s.polygonOffset(ft,Y),U=ft,z=Y)):Lt(s.POLYGON_OFFSET_FILL)}function dt(N){N?it(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function A(N){N===void 0&&(N=s.TEXTURE0+q-1),nt!==N&&(s.activeTexture(N),nt=N)}function S(N,ft,Y){Y===void 0&&(nt===null?Y=s.TEXTURE0+q-1:Y=nt);let Q=ht[Y];Q===void 0&&(Q={type:void 0,texture:void 0},ht[Y]=Q),(Q.type!==N||Q.texture!==ft)&&(nt!==Y&&(s.activeTexture(Y),nt=Y),s.bindTexture(N,ft||ut[N]),Q.type=N,Q.texture=ft)}function B(){let N=ht[nt];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ht(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Gt(N){re.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),re.copy(N))}function wt(N){H.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),H.copy(N))}function ee(N,ft){let Y=c.get(ft);Y===void 0&&(Y=new WeakMap,c.set(ft,Y));let Q=Y.get(N);Q===void 0&&(Q=s.getUniformBlockIndex(ft,N.name),Y.set(N,Q))}function Jt(N,ft){let Q=c.get(ft).get(N);l.get(ft)!==Q&&(s.uniformBlockBinding(ft,Q,N.__bindingPointIndex),l.set(ft,Q))}function ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},nt=null,ht={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,y=null,v=null,L=null,E=null,R=new At(0,0,0),I=0,b=!1,_=null,C=null,D=null,U=null,z=null,re.set(0,0,s.canvas.width,s.canvas.height),H.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:Lt,bindFramebuffer:Nt,drawBuffers:Ut,useProgram:Xt,setBlending:P,setMaterial:yt,setFlipSided:tt,setCullFace:gt,setLineWidth:ot,setPolygonOffset:Ft,setScissorTest:dt,activeTexture:A,bindTexture:S,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:St,texImage3D:zt,updateUBOMapping:ee,uniformBlockBinding:Jt,texStorage2D:Ht,texStorage3D:rt,texSubImage2D:Z,texSubImage3D:bt,compressedTexSubImage2D:lt,compressedTexSubImage3D:vt,scissor:Gt,viewport:wt,reset:ge}}function qu(s,t,e,i){let n=Yx(i);switch(e){case fd:return s*t;case md:return s*t;case gd:return s*t*2;case mh:return s*t/n.components*n.byteLength;case gh:return s*t/n.components*n.byteLength;case xd:return s*t*2/n.components*n.byteLength;case xh:return s*t*2/n.components*n.byteLength;case pd:return s*t*3/n.components*n.byteLength;case Ai:return s*t*4/n.components*n.byteLength;case vh:return s*t*4/n.components*n.byteLength;case ya:case Ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ba:case Sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zl:case Kl:return Math.max(s,16)*Math.max(t,8)/4;case $l:case Jl:return Math.max(s,8)*Math.max(t,8)/2;case Ql:case jl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case tc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case nc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case sc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case rc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ac:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case oc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case lc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case cc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case hc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case uc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case dc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case fc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case pc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case wa:case mc:case gc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case vd:case xc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case vc:case _c:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yx(s){switch(s){case rn:case hd:return{byteLength:1,components:1};case gr:case ud:case Pi:return{byteLength:2,components:1};case fh:case ph:return{byteLength:2,components:4};case Yn:case dh:case zi:return{byteLength:4,components:1};case dd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function $x(s,t,e,i,n,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,S){return d?new OffscreenCanvas(A,S):Ra("canvas")}function x(A,S,B){let $=1,j=dt(A);if((j.width>B||j.height>B)&&($=B/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Z=Math.floor($*j.width),bt=Math.floor($*j.height);u===void 0&&(u=m(Z,bt));let lt=S?m(Z,bt):u;return lt.width=Z,lt.height=bt,lt.getContext("2d").drawImage(A,0,0,Z,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+bt+")."),lt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(A,S,B,$,j=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=S;if(S===s.RED&&(B===s.FLOAT&&(Z=s.R32F),B===s.HALF_FLOAT&&(Z=s.R16F),B===s.UNSIGNED_BYTE&&(Z=s.R8)),S===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.R8UI),B===s.UNSIGNED_SHORT&&(Z=s.R16UI),B===s.UNSIGNED_INT&&(Z=s.R32UI),B===s.BYTE&&(Z=s.R8I),B===s.SHORT&&(Z=s.R16I),B===s.INT&&(Z=s.R32I)),S===s.RG&&(B===s.FLOAT&&(Z=s.RG32F),B===s.HALF_FLOAT&&(Z=s.RG16F),B===s.UNSIGNED_BYTE&&(Z=s.RG8)),S===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RG8UI),B===s.UNSIGNED_SHORT&&(Z=s.RG16UI),B===s.UNSIGNED_INT&&(Z=s.RG32UI),B===s.BYTE&&(Z=s.RG8I),B===s.SHORT&&(Z=s.RG16I),B===s.INT&&(Z=s.RG32I)),S===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),B===s.UNSIGNED_INT&&(Z=s.RGB32UI),B===s.BYTE&&(Z=s.RGB8I),B===s.SHORT&&(Z=s.RGB16I),B===s.INT&&(Z=s.RGB32I)),S===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),B===s.UNSIGNED_INT&&(Z=s.RGBA32UI),B===s.BYTE&&(Z=s.RGBA8I),B===s.SHORT&&(Z=s.RGBA16I),B===s.INT&&(Z=s.RGBA32I)),S===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),S===s.RGBA){let bt=j?co:jt.getTransfer($);B===s.FLOAT&&(Z=s.RGBA32F),B===s.HALF_FLOAT&&(Z=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Z=bt===ue?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(A,S){let B;return A?S===null||S===Yn||S===Us?B=s.DEPTH24_STENCIL8:S===zi?B=s.DEPTH32F_STENCIL8:S===gr&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Yn||S===Us?B=s.DEPTH_COMPONENT24:S===zi?B=s.DEPTH_COMPONENT32F:S===gr&&(B=s.DEPTH_COMPONENT16),B}function L(A,S){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==fi&&A.minFilter!==Oi?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function E(A){let S=A.target;S.removeEventListener("dispose",E),I(S),S.isVideoTexture&&h.delete(S)}function R(A){let S=A.target;S.removeEventListener("dispose",R),_(S)}function I(A){let S=i.get(A);if(S.__webglInit===void 0)return;let B=A.source,$=f.get(B);if($){let j=$[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&b(A),Object.keys($).length===0&&f.delete(B)}i.remove(A)}function b(A){let S=i.get(A);s.deleteTexture(S.__webglTexture);let B=A.source,$=f.get(B);delete $[S.__cacheKey],a.memory.textures--}function _(A){let S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let j=0;j<S.__webglFramebuffer[$].length;j++)s.deleteFramebuffer(S.__webglFramebuffer[$][j]);else s.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)s.deleteFramebuffer(S.__webglFramebuffer[$]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let B=A.textures;for(let $=0,j=B.length;$<j;$++){let Z=i.get(B[$]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(B[$])}i.remove(A)}let C=0;function D(){C=0}function U(){let A=C;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),C+=1,A}function z(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function q(A,S){let B=i.get(A);if(A.isVideoTexture&&ot(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){let $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(B,A,S);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+S)}function O(A,S){let B=i.get(A);if(A.version>0&&B.__version!==A.version){H(B,A,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+S)}function et(A,S){let B=i.get(A);if(A.version>0&&B.__version!==A.version){H(B,A,S);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+S)}function W(A,S){let B=i.get(A);if(A.version>0&&B.__version!==A.version){X(B,A,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+S)}let nt={[mr]:s.REPEAT,[Xn]:s.CLAMP_TO_EDGE,[Yl]:s.MIRRORED_REPEAT},ht={[fi]:s.NEAREST,[$f]:s.NEAREST_MIPMAP_NEAREST,[Gr]:s.NEAREST_MIPMAP_LINEAR,[Oi]:s.LINEAR,[tl]:s.LINEAR_MIPMAP_NEAREST,[qn]:s.LINEAR_MIPMAP_LINEAR},_t={[Qf]:s.NEVER,[sp]:s.ALWAYS,[jf]:s.LESS,[yd]:s.LEQUAL,[tp]:s.EQUAL,[np]:s.GEQUAL,[ep]:s.GREATER,[ip]:s.NOTEQUAL};function Vt(A,S){if(S.type===zi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Oi||S.magFilter===tl||S.magFilter===Gr||S.magFilter===qn||S.minFilter===Oi||S.minFilter===tl||S.minFilter===Gr||S.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,nt[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,nt[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,nt[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ht[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ht[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,_t[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===fi||S.minFilter!==Gr&&S.minFilter!==qn||S.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function re(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",E));let $=S.source,j=f.get($);j===void 0&&(j={},f.set($,j));let Z=z(S);if(Z!==A.__cacheKey){j[Z]===void 0&&(j[Z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[Z].usedTimes++;let bt=j[A.__cacheKey];bt!==void 0&&(j[A.__cacheKey].usedTimes--,bt.usedTimes===0&&b(S)),A.__cacheKey=Z,A.__webglTexture=j[Z].texture}return B}function H(A,S,B){let $=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=s.TEXTURE_3D);let j=re(A,S),Z=S.source;e.bindTexture($,A.__webglTexture,s.TEXTURE0+B);let bt=i.get(Z);if(Z.version!==bt.__version||j===!0){e.activeTexture(s.TEXTURE0+B);let lt=jt.getPrimaries(jt.workingColorSpace),vt=S.colorSpace===_n?null:jt.getPrimaries(S.colorSpace),Ht=S.colorSpace===_n||lt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let rt=x(S.image,!1,n.maxTextureSize);rt=Ft(S,rt);let St=r.convert(S.format,S.colorSpace),zt=r.convert(S.type),Gt=y(S.internalFormat,St,zt,S.colorSpace,S.isVideoTexture);Vt($,S);let wt,ee=S.mipmaps,Jt=S.isVideoTexture!==!0,ge=bt.__version===void 0||j===!0,N=Z.dataReady,ft=L(S,rt);if(S.isDepthTexture)Gt=v(S.format===Ns,S.type),ge&&(Jt?e.texStorage2D(s.TEXTURE_2D,1,Gt,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Gt,rt.width,rt.height,0,St,zt,null));else if(S.isDataTexture)if(ee.length>0){Jt&&ge&&e.texStorage2D(s.TEXTURE_2D,ft,Gt,ee[0].width,ee[0].height);for(let Y=0,Q=ee.length;Y<Q;Y++)wt=ee[Y],Jt?N&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,wt.width,wt.height,St,zt,wt.data):e.texImage2D(s.TEXTURE_2D,Y,Gt,wt.width,wt.height,0,St,zt,wt.data);S.generateMipmaps=!1}else Jt?(ge&&e.texStorage2D(s.TEXTURE_2D,ft,Gt,rt.width,rt.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,St,zt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,Gt,rt.width,rt.height,0,St,zt,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Jt&&ge&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Gt,ee[0].width,ee[0].height,rt.depth);for(let Y=0,Q=ee.length;Y<Q;Y++)if(wt=ee[Y],S.format!==Ai)if(St!==null)if(Jt){if(N)if(S.layerUpdates.size>0){let xt=qu(wt.width,wt.height,S.format,S.type);for(let pt of S.layerUpdates){let qt=wt.data.subarray(pt*xt/wt.data.BYTES_PER_ELEMENT,(pt+1)*xt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,pt,wt.width,wt.height,1,St,qt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,wt.width,wt.height,rt.depth,St,wt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Gt,wt.width,wt.height,rt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,wt.width,wt.height,rt.depth,St,zt,wt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Gt,wt.width,wt.height,rt.depth,0,St,zt,wt.data)}else{Jt&&ge&&e.texStorage2D(s.TEXTURE_2D,ft,Gt,ee[0].width,ee[0].height);for(let Y=0,Q=ee.length;Y<Q;Y++)wt=ee[Y],S.format!==Ai?St!==null?Jt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,wt.width,wt.height,St,wt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Gt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?N&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,wt.width,wt.height,St,zt,wt.data):e.texImage2D(s.TEXTURE_2D,Y,Gt,wt.width,wt.height,0,St,zt,wt.data)}else if(S.isDataArrayTexture)if(Jt){if(ge&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Gt,rt.width,rt.height,rt.depth),N)if(S.layerUpdates.size>0){let Y=qu(rt.width,rt.height,S.format,S.type);for(let Q of S.layerUpdates){let xt=rt.data.subarray(Q*Y/rt.data.BYTES_PER_ELEMENT,(Q+1)*Y/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,St,zt,xt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,St,zt,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Gt,rt.width,rt.height,rt.depth,0,St,zt,rt.data);else if(S.isData3DTexture)Jt?(ge&&e.texStorage3D(s.TEXTURE_3D,ft,Gt,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,St,zt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Gt,rt.width,rt.height,rt.depth,0,St,zt,rt.data);else if(S.isFramebufferTexture){if(ge)if(Jt)e.texStorage2D(s.TEXTURE_2D,ft,Gt,rt.width,rt.height);else{let Y=rt.width,Q=rt.height;for(let xt=0;xt<ft;xt++)e.texImage2D(s.TEXTURE_2D,xt,Gt,Y,Q,0,St,zt,null),Y>>=1,Q>>=1}}else if(ee.length>0){if(Jt&&ge){let Y=dt(ee[0]);e.texStorage2D(s.TEXTURE_2D,ft,Gt,Y.width,Y.height)}for(let Y=0,Q=ee.length;Y<Q;Y++)wt=ee[Y],Jt?N&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,St,zt,wt):e.texImage2D(s.TEXTURE_2D,Y,Gt,St,zt,wt);S.generateMipmaps=!1}else if(Jt){if(ge){let Y=dt(rt);e.texStorage2D(s.TEXTURE_2D,ft,Gt,Y.width,Y.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,zt,rt)}else e.texImage2D(s.TEXTURE_2D,0,Gt,St,zt,rt);g(S)&&p($),bt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function X(A,S,B){if(S.image.length!==6)return;let $=re(A,S),j=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);let Z=i.get(j);if(j.version!==Z.__version||$===!0){e.activeTexture(s.TEXTURE0+B);let bt=jt.getPrimaries(jt.workingColorSpace),lt=S.colorSpace===_n?null:jt.getPrimaries(S.colorSpace),vt=S.colorSpace===_n||bt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Ht=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,St=[];for(let Q=0;Q<6;Q++)!Ht&&!rt?St[Q]=x(S.image[Q],!0,n.maxCubemapSize):St[Q]=rt?S.image[Q].image:S.image[Q],St[Q]=Ft(S,St[Q]);let zt=St[0],Gt=r.convert(S.format,S.colorSpace),wt=r.convert(S.type),ee=y(S.internalFormat,Gt,wt,S.colorSpace),Jt=S.isVideoTexture!==!0,ge=Z.__version===void 0||$===!0,N=j.dataReady,ft=L(S,zt);Vt(s.TEXTURE_CUBE_MAP,S);let Y;if(Ht){Jt&&ge&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,ee,zt.width,zt.height);for(let Q=0;Q<6;Q++){Y=St[Q].mipmaps;for(let xt=0;xt<Y.length;xt++){let pt=Y[xt];S.format!==Ai?Gt!==null?Jt?N&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,pt.width,pt.height,Gt,pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,ee,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,pt.width,pt.height,Gt,wt,pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,ee,pt.width,pt.height,0,Gt,wt,pt.data)}}}else{if(Y=S.mipmaps,Jt&&ge){Y.length>0&&ft++;let Q=dt(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,ee,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){Jt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,St[Q].width,St[Q].height,Gt,wt,St[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ee,St[Q].width,St[Q].height,0,Gt,wt,St[Q].data);for(let xt=0;xt<Y.length;xt++){let qt=Y[xt].image[Q].image;Jt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,qt.width,qt.height,Gt,wt,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,ee,qt.width,qt.height,0,Gt,wt,qt.data)}}else{Jt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Gt,wt,St[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ee,Gt,wt,St[Q]);for(let xt=0;xt<Y.length;xt++){let pt=Y[xt];Jt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,Gt,wt,pt.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,ee,Gt,wt,pt.image[Q])}}}g(S)&&p(s.TEXTURE_CUBE_MAP),Z.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ut(A,S,B,$,j,Z){let bt=r.convert(B.format,B.colorSpace),lt=r.convert(B.type),vt=y(B.internalFormat,bt,lt,B.colorSpace),Ht=i.get(S),rt=i.get(B);if(rt.__renderTarget=S,!Ht.__hasExternalTextures){let St=Math.max(1,S.width>>Z),zt=Math.max(1,S.height>>Z);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,Z,vt,St,zt,S.depth,0,bt,lt,null):e.texImage2D(j,Z,vt,St,zt,0,bt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),gt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,j,rt.__webglTexture,0,tt(S)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,j,rt.__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function it(A,S,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){let $=S.depthTexture,j=$&&$.isDepthTexture?$.type:null,Z=v(S.stencilBuffer,j),bt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=tt(S);gt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Z,S.width,S.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Z,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Z,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,A)}else{let $=S.textures;for(let j=0;j<$.length;j++){let Z=$[j],bt=r.convert(Z.format,Z.colorSpace),lt=r.convert(Z.type),vt=y(Z.internalFormat,bt,lt,Z.colorSpace),Ht=tt(S);B&&gt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,vt,S.width,S.height):gt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht,vt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,vt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=i.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);let j=$.__webglTexture,Z=tt(S);if(S.depthTexture.format===Rs)gt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(S.depthTexture.format===Ns)gt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Nt(A){let S=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let $=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=$}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Lt(S.__webglFramebuffer,A)}else if(B){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=s.createRenderbuffer(),it(S.__webglDepthbuffer[$],A,!1);else{let j=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),it(S.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,j)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(A,S,B){let $=i.get(A);S!==void 0&&ut($.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Nt(A)}function Xt(A){let S=A.texture,B=i.get(A),$=i.get(S);A.addEventListener("dispose",R);let j=A.textures,Z=A.isWebGLCubeRenderTarget===!0,bt=j.length>1;if(bt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=S.version,a.memory.textures++),Z){B.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[lt]=[];for(let vt=0;vt<S.mipmaps.length;vt++)B.__webglFramebuffer[lt][vt]=s.createFramebuffer()}else B.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let lt=0;lt<S.mipmaps.length;lt++)B.__webglFramebuffer[lt]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(bt)for(let lt=0,vt=j.length;lt<vt;lt++){let Ht=i.get(j[lt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&gt(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let lt=0;lt<j.length;lt++){let vt=j[lt];B.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[lt]);let Ht=r.convert(vt.format,vt.colorSpace),rt=r.convert(vt.type),St=y(vt.internalFormat,Ht,rt,vt.colorSpace,A.isXRRenderTarget===!0),zt=tt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,St,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,B.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),it(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Vt(s.TEXTURE_CUBE_MAP,S);for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)ut(B.__webglFramebuffer[lt][vt],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,vt);else ut(B.__webglFramebuffer[lt],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let lt=0,vt=j.length;lt<vt;lt++){let Ht=j[lt],rt=i.get(Ht);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),Vt(s.TEXTURE_2D,Ht),ut(B.__webglFramebuffer,A,Ht,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),g(Ht)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,$.__webglTexture),Vt(lt,S),S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)ut(B.__webglFramebuffer[vt],A,S,s.COLOR_ATTACHMENT0,lt,vt);else ut(B.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,lt,0);g(S)&&p(lt),e.unbindTexture()}A.depthBuffer&&Nt(A)}function K(A){let S=A.textures;for(let B=0,$=S.length;B<$;B++){let j=S[B];if(g(j)){let Z=M(A),bt=i.get(j).__webglTexture;e.bindTexture(Z,bt),p(Z),e.unbindTexture()}}}let st=[],P=[];function yt(A){if(A.samples>0){if(gt(A)===!1){let S=A.textures,B=A.width,$=A.height,j=s.COLOR_BUFFER_BIT,Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=i.get(A),lt=S.length>1;if(lt)for(let vt=0;vt<S.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let vt=0;vt<S.length;vt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[vt]);let Ht=i.get(S[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ht,0)}s.blitFramebuffer(0,0,B,$,0,0,B,$,j,s.NEAREST),l===!0&&(st.length=0,P.length=0,st.push(s.COLOR_ATTACHMENT0+vt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(st.push(Z),P.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let vt=0;vt<S.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,bt.__webglColorRenderbuffer[vt]);let Ht=i.get(S[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,Ht,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function tt(A){return Math.min(n.maxSamples,A.samples)}function gt(A){let S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ot(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Ft(A,S){let B=A.colorSpace,$=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Vs&&B!==_n&&(jt.getTransfer(B)===ue?($!==Ai||j!==rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function dt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=q,this.setTexture2DArray=O,this.setTexture3D=et,this.setTextureCube=W,this.rebindTextures=Ut,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=gt}function Zx(s,t){function e(i,n=_n){let r,a=jt.getTransfer(n);if(i===rn)return s.UNSIGNED_BYTE;if(i===fh)return s.UNSIGNED_SHORT_4_4_4_4;if(i===ph)return s.UNSIGNED_SHORT_5_5_5_1;if(i===dd)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===hd)return s.BYTE;if(i===ud)return s.SHORT;if(i===gr)return s.UNSIGNED_SHORT;if(i===dh)return s.INT;if(i===Yn)return s.UNSIGNED_INT;if(i===zi)return s.FLOAT;if(i===Pi)return s.HALF_FLOAT;if(i===fd)return s.ALPHA;if(i===pd)return s.RGB;if(i===Ai)return s.RGBA;if(i===md)return s.LUMINANCE;if(i===gd)return s.LUMINANCE_ALPHA;if(i===Rs)return s.DEPTH_COMPONENT;if(i===Ns)return s.DEPTH_STENCIL;if(i===mh)return s.RED;if(i===gh)return s.RED_INTEGER;if(i===xd)return s.RG;if(i===xh)return s.RG_INTEGER;if(i===vh)return s.RGBA_INTEGER;if(i===ya||i===Ma||i===ba||i===Sa)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$l||i===Zl||i===Jl||i===Kl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ql||i===jl||i===tc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ql||i===jl)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===tc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ec||i===ic||i===nc||i===sc||i===rc||i===ac||i===oc||i===lc||i===cc||i===hc||i===uc||i===dc||i===fc||i===pc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ec)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ic)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ac)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wa||i===mc||i===gc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===wa)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vd||i===xc||i===vc||i===_c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===wa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Us?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var Nc=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ae=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jx={type:"move"},ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jx)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ae;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Kx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Fc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new ri,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Te({vertexShader:Kx,fragmentShader:Qx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new De(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kc=class extends wn{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,x=new Fc,g=e.getContextAttributes(),p=null,M=null,y=[],v=[],L=new J,E=null,R=new We;R.viewport=new me;let I=new We;I.viewport=new me;let b=[R,I],_=new Nc,C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let X=y[H];return X===void 0&&(X=new ur,y[H]=X),X.getTargetRaySpace()},this.getControllerGrip=function(H){let X=y[H];return X===void 0&&(X=new ur,y[H]=X),X.getGripSpace()},this.getHand=function(H){let X=y[H];return X===void 0&&(X=new ur,y[H]=X),X.getHandSpace()};function U(H){let X=v.indexOf(H.inputSource);if(X===-1)return;let ut=y[X];ut!==void 0&&(ut.update(H.inputSource,H.frame,c||a),ut.dispatchEvent({type:H.type,data:H.inputSource}))}function z(){n.removeEventListener("select",U),n.removeEventListener("selectstart",U),n.removeEventListener("selectend",U),n.removeEventListener("squeeze",U),n.removeEventListener("squeezestart",U),n.removeEventListener("squeezeend",U),n.removeEventListener("end",z),n.removeEventListener("inputsourceschange",q);for(let H=0;H<y.length;H++){let X=v[H];X!==null&&(v[H]=null,y[H].disconnect(X))}C=null,D=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,n=null,M=null,re.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(H){if(n=H,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",U),n.addEventListener("selectstart",U),n.addEventListener("selectend",U),n.addEventListener("squeeze",U),n.addEventListener("squeezestart",U),n.addEventListener("squeezeend",U),n.addEventListener("end",z),n.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(L),n.renderState.layers===void 0){let X={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,e,X),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ti(d.framebufferWidth,d.framebufferHeight,{format:Ai,type:rn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let X=null,ut=null,it=null;g.depth&&(it=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=g.stencil?Ns:Rs,ut=g.stencil?Us:Yn);let Lt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(n,e),f=u.createProjectionLayer(Lt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new ti(f.textureWidth,f.textureHeight,{format:Ai,type:rn,depthTexture:new Ba(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),re.setContext(n),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(H){for(let X=0;X<H.removed.length;X++){let ut=H.removed[X],it=v.indexOf(ut);it>=0&&(v[it]=null,y[it].disconnect(ut))}for(let X=0;X<H.added.length;X++){let ut=H.added[X],it=v.indexOf(ut);if(it===-1){for(let Nt=0;Nt<y.length;Nt++)if(Nt>=v.length){v.push(ut),it=Nt;break}else if(v[Nt]===null){v[Nt]=ut,it=Nt;break}if(it===-1)break}let Lt=y[it];Lt&&Lt.connect(ut)}}let O=new T,et=new T;function W(H,X,ut){O.setFromMatrixPosition(X.matrixWorld),et.setFromMatrixPosition(ut.matrixWorld);let it=O.distanceTo(et),Lt=X.projectionMatrix.elements,Nt=ut.projectionMatrix.elements,Ut=Lt[14]/(Lt[10]-1),Xt=Lt[14]/(Lt[10]+1),K=(Lt[9]+1)/Lt[5],st=(Lt[9]-1)/Lt[5],P=(Lt[8]-1)/Lt[0],yt=(Nt[8]+1)/Nt[0],tt=Ut*P,gt=Ut*yt,ot=it/(-P+yt),Ft=ot*-P;if(X.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ft),H.translateZ(ot),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Lt[10]===-1)H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let dt=Ut+ot,A=Xt+ot,S=tt-Ft,B=gt+(it-Ft),$=K*Xt/A*dt,j=st*Xt/A*dt;H.projectionMatrix.makePerspective(S,B,$,j,dt,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function nt(H,X){X===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(X.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(n===null)return;let X=H.near,ut=H.far;x.texture!==null&&(x.depthNear>0&&(X=x.depthNear),x.depthFar>0&&(ut=x.depthFar)),_.near=I.near=R.near=X,_.far=I.far=R.far=ut,(C!==_.near||D!==_.far)&&(n.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,D=_.far),R.layers.mask=H.layers.mask|2,I.layers.mask=H.layers.mask|4,_.layers.mask=R.layers.mask|I.layers.mask;let it=H.parent,Lt=_.cameras;nt(_,it);for(let Nt=0;Nt<Lt.length;Nt++)nt(Lt[Nt],it);Lt.length===2?W(_,R,I):_.projectionMatrix.copy(R.projectionMatrix),ht(H,_,it)};function ht(H,X,ut){ut===null?H.matrix.copy(X.matrixWorld):(H.matrix.copy(ut.matrixWorld),H.matrix.invert(),H.matrix.multiply(X.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Aa*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let _t=null;function Vt(H,X){if(h=X.getViewerPose(c||a),m=X,h!==null){let ut=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let it=!1;ut.length!==_.cameras.length&&(_.cameras.length=0,it=!0);for(let Nt=0;Nt<ut.length;Nt++){let Ut=ut[Nt],Xt=null;if(d!==null)Xt=d.getViewport(Ut);else{let st=u.getViewSubImage(f,Ut);Xt=st.viewport,Nt===0&&(t.setRenderTargetTextures(M,st.colorTexture,f.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(M))}let K=b[Nt];K===void 0&&(K=new We,K.layers.enable(Nt),K.viewport=new me,b[Nt]=K),K.matrix.fromArray(Ut.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Ut.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Nt===0&&(_.matrix.copy(K.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),it===!0&&_.cameras.push(K)}let Lt=n.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){let Nt=u.getDepthInformation(ut[0]);Nt&&Nt.isValid&&Nt.texture&&x.init(t,Nt,n.renderState)}}for(let ut=0;ut<y.length;ut++){let it=v[ut],Lt=y[ut];it!==null&&Lt!==void 0&&Lt.update(it,X,c||a)}_t&&_t(H,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),m=null}let re=new wd;re.setAnimationLoop(Vt),this.setAnimationLoop=function(H){_t=H},this.dispose=function(){}}},Hn=new ai,jx=new Qt;function tv(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Sd(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,M,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ze&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ze&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p),y=M.envMap,v=M.envMapRotation;y&&(g.envMap.value=y,Hn.copy(v),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),g.envMapRotation.value.setFromMatrix4(jx.makeRotationFromEuler(Hn)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function ev(s,t,e,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){let v=y.program;i.uniformBlockBinding(M,v)}function c(M,y){let v=n[M.id];v===void 0&&(m(M),v=h(M),n[M.id]=v,M.addEventListener("dispose",g));let L=y.program;i.updateUBOMapping(M,L);let E=t.render.frame;r[M.id]!==E&&(f(M),r[M.id]=E)}function h(M){let y=u();M.__bindingPointIndex=y;let v=s.createBuffer(),L=M.__size,E=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,L,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let y=n[M.id],v=M.uniforms,L=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let E=0,R=v.length;E<R;E++){let I=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,_=I.length;b<_;b++){let C=I[b];if(d(C,E,b,L)===!0){let D=C.__offset,U=Array.isArray(C.value)?C.value:[C.value],z=0;for(let q=0;q<U.length;q++){let O=U[q],et=x(O);typeof O=="number"||typeof O=="boolean"?(C.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,D+z,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=0,C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=0,C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=0):(O.toArray(C.__data,z),z+=et.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,y,v,L){let E=M.value,R=y+"_"+v;if(L[R]===void 0)return typeof E=="number"||typeof E=="boolean"?L[R]=E:L[R]=E.clone(),!0;{let I=L[R];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return L[R]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function m(M){let y=M.uniforms,v=0,L=16;for(let R=0,I=y.length;R<I;R++){let b=Array.isArray(y[R])?y[R]:[y[R]];for(let _=0,C=b.length;_<C;_++){let D=b[_],U=Array.isArray(D.value)?D.value:[D.value];for(let z=0,q=U.length;z<q;z++){let O=U[z],et=x(O),W=v%L,nt=W%et.boundary,ht=W+nt;v+=nt,ht!==0&&L-ht<et.storage&&(v+=L-ht),D.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=et.storage}}}let E=v%L;return E>0&&(v+=L-E),M.__size=v,M.__cache={},this}function x(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){let y=M.target;y.removeEventListener("dispose",g);let v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(n[y.id]),delete n[y.id],delete r[y.id]}function p(){for(let M in n)s.deleteBuffer(n[M]);a=[],n={},r={}}return{bind:l,update:c,dispose:p}}var Oa=class{constructor(t={}){let{canvas:e=ap(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=bn,this.toneMappingExposure=1;let v=this,L=!1,E=0,R=0,I=null,b=-1,_=null,C=new me,D=new me,U=null,z=new At(0),q=0,O=e.width,et=e.height,W=1,nt=null,ht=null,_t=new me(0,0,O,et),Vt=new me(0,0,O,et),re=!1,H=new xr,X=!1,ut=!1,it=new Qt,Lt=new Qt,Nt=new T,Ut=new me,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},K=!1;function st(){return I===null?W:1}let P=i;function yt(w,F){return e.getContext(w,F)}try{let w={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),P===null){let F="webgl2";if(P=yt(F,w),P===null)throw yt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let tt,gt,ot,Ft,dt,A,S,B,$,j,Z,bt,lt,vt,Ht,rt,St,zt,Gt,wt,ee,Jt,ge,N;function ft(){tt=new xg(P),tt.init(),Jt=new Zx(P,tt),gt=new ug(P,tt,t,Jt),ot=new qx(P,tt),gt.reverseDepthBuffer&&f&&ot.buffers.depth.setReversed(!0),Ft=new yg(P),dt=new Dx,A=new $x(P,tt,ot,dt,gt,Jt,Ft),S=new fg(v),B=new gg(v),$=new Ap(P),ge=new cg(P,$),j=new vg(P,$,Ft,ge),Z=new bg(P,j,$,Ft),Gt=new Mg(P,gt,A),rt=new dg(dt),bt=new Lx(v,S,B,tt,gt,ge,rt),lt=new tv(v,dt),vt=new Nx,Ht=new Hx(tt),zt=new lg(v,S,B,ot,Z,d,l),St=new Wx(v,Z,gt),N=new ev(P,Ft,gt,ot),wt=new hg(P,tt,Ft),ee=new _g(P,tt,Ft),Ft.programs=bt.programs,v.capabilities=gt,v.extensions=tt,v.properties=dt,v.renderLists=vt,v.shadowMap=St,v.state=ot,v.info=Ft}ft();let Y=new kc(v,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(O,et,!1))},this.getSize=function(w){return w.set(O,et)},this.setSize=function(w,F,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,et=F,e.width=Math.floor(w*W),e.height=Math.floor(F*W),V===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(O*W,et*W).floor()},this.setDrawingBufferSize=function(w,F,V){O=w,et=F,W=V,e.width=Math.floor(w*V),e.height=Math.floor(F*V),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(_t)},this.setViewport=function(w,F,V,G){w.isVector4?_t.set(w.x,w.y,w.z,w.w):_t.set(w,F,V,G),ot.viewport(C.copy(_t).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(Vt)},this.setScissor=function(w,F,V,G){w.isVector4?Vt.set(w.x,w.y,w.z,w.w):Vt.set(w,F,V,G),ot.scissor(D.copy(Vt).multiplyScalar(W).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(w){ot.setScissorTest(re=w)},this.setOpaqueSort=function(w){nt=w},this.setTransparentSort=function(w){ht=w},this.getClearColor=function(w){return w.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(w=!0,F=!0,V=!0){let G=0;if(w){let k=!1;if(I!==null){let at=I.texture.format;k=at===vh||at===xh||at===gh}if(k){let at=I.texture.type,mt=at===rn||at===Yn||at===gr||at===Us||at===fh||at===ph,Ct=zt.getClearColor(),Pt=zt.getClearAlpha(),Wt=Ct.r,Yt=Ct.g,It=Ct.b;mt?(m[0]=Wt,m[1]=Yt,m[2]=It,m[3]=Pt,P.clearBufferuiv(P.COLOR,0,m)):(x[0]=Wt,x[1]=Yt,x[2]=It,x[3]=Pt,P.clearBufferiv(P.COLOR,0,x))}else G|=P.COLOR_BUFFER_BIT}F&&(G|=P.DEPTH_BUFFER_BIT),V&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),vt.dispose(),Ht.dispose(),dt.dispose(),S.dispose(),B.dispose(),Z.dispose(),ge.dispose(),N.dispose(),bt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Hh),Y.removeEventListener("sessionend",Vh),Nn.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let w=Ft.autoReset,F=St.enabled,V=St.autoUpdate,G=St.needsUpdate,k=St.type;ft(),Ft.autoReset=w,St.enabled=F,St.autoUpdate=V,St.needsUpdate=G,St.type=k}function pt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function qt(w){let F=w.target;F.removeEventListener("dispose",qt),Re(F)}function Re(w){Ye(w),dt.remove(w)}function Ye(w){let F=dt.get(w).programs;F!==void 0&&(F.forEach(function(V){bt.releaseProgram(V)}),w.isShaderMaterial&&bt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,V,G,k,at){F===null&&(F=Xt);let mt=k.isMesh&&k.matrixWorld.determinant()<0,Ct=bf(w,F,V,G,k);ot.setMaterial(G,mt);let Pt=V.index,Wt=1;if(G.wireframe===!0){if(Pt=j.getWireframeAttribute(V),Pt===void 0)return;Wt=2}let Yt=V.drawRange,It=V.attributes.position,ne=Yt.start*Wt,xe=(Yt.start+Yt.count)*Wt;at!==null&&(ne=Math.max(ne,at.start*Wt),xe=Math.min(xe,(at.start+at.count)*Wt)),Pt!==null?(ne=Math.max(ne,0),xe=Math.min(xe,Pt.count)):It!=null&&(ne=Math.max(ne,0),xe=Math.min(xe,It.count));let ve=xe-ne;if(ve<0||ve===1/0)return;ge.setup(k,G,Ct,V,Pt);let ni,ce=wt;if(Pt!==null&&(ni=$.get(Pt),ce=ee,ce.setIndex(ni)),k.isMesh)G.wireframe===!0?(ot.setLineWidth(G.wireframeLinewidth*st()),ce.setMode(P.LINES)):ce.setMode(P.TRIANGLES);else if(k.isLine){let Dt=G.linewidth;Dt===void 0&&(Dt=1),ot.setLineWidth(Dt*st()),k.isLineSegments?ce.setMode(P.LINES):k.isLineLoop?ce.setMode(P.LINE_LOOP):ce.setMode(P.LINE_STRIP)}else k.isPoints?ce.setMode(P.POINTS):k.isSprite&&ce.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ce.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ce.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Dt=k._multiDrawStarts,Yi=k._multiDrawCounts,he=k._multiDrawCount,Si=Pt?$.get(Pt).bytesPerElement:1,as=dt.get(G).currentProgram.getUniforms();for(let hi=0;hi<he;hi++)as.setValue(P,"_gl_DrawID",hi),ce.render(Dt[hi]/Si,Yi[hi])}else if(k.isInstancedMesh)ce.renderInstances(ne,ve,k.count);else if(V.isInstancedBufferGeometry){let Dt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Yi=Math.min(V.instanceCount,Dt);ce.renderInstances(ne,ve,Yi)}else ce.render(ne,ve)};function de(w,F,V){w.transparent===!0&&w.side===Ce&&w.forceSinglePass===!1?(w.side=ze,w.needsUpdate=!0,Vr(w,F,V),w.side=Sn,w.needsUpdate=!0,Vr(w,F,V),w.side=Ce):Vr(w,F,V)}this.compile=function(w,F,V=null){V===null&&(V=w),p=Ht.get(V),p.init(F),y.push(p),V.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),w!==V&&w.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let G=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let at=k.material;if(at)if(Array.isArray(at))for(let mt=0;mt<at.length;mt++){let Ct=at[mt];de(Ct,V,k),G.add(Ct)}else de(at,V,k),G.add(at)}),y.pop(),p=null,G},this.compileAsync=function(w,F,V=null){let G=this.compile(w,F,V);return new Promise(k=>{function at(){if(G.forEach(function(mt){dt.get(mt).currentProgram.isReady()&&G.delete(mt)}),G.size===0){k(w);return}setTimeout(at,10)}tt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let bi=null;function qi(w){bi&&bi(w)}function Hh(){Nn.stop()}function Vh(){Nn.start()}let Nn=new wd;Nn.setAnimationLoop(qi),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(w){bi=w,Y.setAnimationLoop(w),w===null?Nn.stop():Nn.start()},Y.addEventListener("sessionstart",Hh),Y.addEventListener("sessionend",Vh),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,F,I),p=Ht.get(w,y.length),p.init(F),y.push(p),Lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),H.setFromProjectionMatrix(Lt),ut=this.localClippingEnabled,X=rt.init(this.clippingPlanes,ut),g=vt.get(w,M.length),g.init(),M.push(g),Y.enabled===!0&&Y.isPresenting===!0){let at=v.xr.getDepthSensingMesh();at!==null&&jo(at,F,-1/0,v.sortObjects)}jo(w,F,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(nt,ht),K=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,K&&zt.addToRenderList(g,w),this.info.render.frame++,X===!0&&rt.beginShadows();let V=p.state.shadowsArray;St.render(V,w,F),X===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=g.opaque,k=g.transmissive;if(p.setupLights(),F.isArrayCamera){let at=F.cameras;if(k.length>0)for(let mt=0,Ct=at.length;mt<Ct;mt++){let Pt=at[mt];Wh(G,k,w,Pt)}K&&zt.render(w);for(let mt=0,Ct=at.length;mt<Ct;mt++){let Pt=at[mt];Gh(g,w,Pt,Pt.viewport)}}else k.length>0&&Wh(G,k,w,F),K&&zt.render(w),Gh(g,w,F);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(v,w,F),ge.resetDefaultState(),b=-1,_=null,y.pop(),y.length>0?(p=y[y.length-1],X===!0&&rt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function jo(w,F,V,G){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||H.intersectsSprite(w)){G&&Ut.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Lt);let mt=Z.update(w),Ct=w.material;Ct.visible&&g.push(w,mt,Ct,V,Ut.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||H.intersectsObject(w))){let mt=Z.update(w),Ct=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ut.copy(w.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ut.copy(mt.boundingSphere.center)),Ut.applyMatrix4(w.matrixWorld).applyMatrix4(Lt)),Array.isArray(Ct)){let Pt=mt.groups;for(let Wt=0,Yt=Pt.length;Wt<Yt;Wt++){let It=Pt[Wt],ne=Ct[It.materialIndex];ne&&ne.visible&&g.push(w,mt,ne,V,Ut.z,It)}}else Ct.visible&&g.push(w,mt,Ct,V,Ut.z,null)}}let at=w.children;for(let mt=0,Ct=at.length;mt<Ct;mt++)jo(at[mt],F,V,G)}function Gh(w,F,V,G){let k=w.opaque,at=w.transmissive,mt=w.transparent;p.setupLightsView(V),X===!0&&rt.setGlobalState(v.clippingPlanes,V),G&&ot.viewport(C.copy(G)),k.length>0&&Hr(k,F,V),at.length>0&&Hr(at,F,V),mt.length>0&&Hr(mt,F,V),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Wh(w,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new ti(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Pi:rn,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let at=p.state.transmissionRenderTarget[G.id],mt=G.viewport||C;at.setSize(mt.z,mt.w);let Ct=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(z),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),K&&zt.render(V);let Pt=v.toneMapping;v.toneMapping=bn;let Wt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),X===!0&&rt.setGlobalState(v.clippingPlanes,G),Hr(w,V,G),A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let It=0,ne=F.length;It<ne;It++){let xe=F[It],ve=xe.object,ni=xe.geometry,ce=xe.material,Dt=xe.group;if(ce.side===Ce&&ve.layers.test(G.layers)){let Yi=ce.side;ce.side=ze,ce.needsUpdate=!0,Xh(ve,V,G,ni,ce,Dt),ce.side=Yi,ce.needsUpdate=!0,Yt=!0}}Yt===!0&&(A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at))}v.setRenderTarget(Ct),v.setClearColor(z,q),Wt!==void 0&&(G.viewport=Wt),v.toneMapping=Pt}function Hr(w,F,V){let G=F.isScene===!0?F.overrideMaterial:null;for(let k=0,at=w.length;k<at;k++){let mt=w[k],Ct=mt.object,Pt=mt.geometry,Wt=G===null?mt.material:G,Yt=mt.group;Ct.layers.test(V.layers)&&Xh(Ct,F,V,Pt,Wt,Yt)}}function Xh(w,F,V,G,k,at){w.onBeforeRender(v,F,V,G,k,at),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(v,F,V,G,w,at),k.transparent===!0&&k.side===Ce&&k.forceSinglePass===!1?(k.side=ze,k.needsUpdate=!0,v.renderBufferDirect(V,F,G,k,w,at),k.side=Sn,k.needsUpdate=!0,v.renderBufferDirect(V,F,G,k,w,at),k.side=Ce):v.renderBufferDirect(V,F,G,k,w,at),w.onAfterRender(v,F,V,G,k,at)}function Vr(w,F,V){F.isScene!==!0&&(F=Xt);let G=dt.get(w),k=p.state.lights,at=p.state.shadowsArray,mt=k.state.version,Ct=bt.getParameters(w,k.state,at,F,V),Pt=bt.getProgramCacheKey(Ct),Wt=G.programs;G.environment=w.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(w.isMeshStandardMaterial?B:S).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",qt),Wt=new Map,G.programs=Wt);let Yt=Wt.get(Pt);if(Yt!==void 0){if(G.currentProgram===Yt&&G.lightsStateVersion===mt)return Yh(w,Ct),Yt}else Ct.uniforms=bt.getUniforms(w),w.onBeforeCompile(Ct,v),Yt=bt.acquireProgram(Ct,Pt),Wt.set(Pt,Yt),G.uniforms=Ct.uniforms;let It=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(It.clippingPlanes=rt.uniform),Yh(w,Ct),G.needsLights=wf(w),G.lightsStateVersion=mt,G.needsLights&&(It.ambientLightColor.value=k.state.ambient,It.lightProbe.value=k.state.probe,It.directionalLights.value=k.state.directional,It.directionalLightShadows.value=k.state.directionalShadow,It.spotLights.value=k.state.spot,It.spotLightShadows.value=k.state.spotShadow,It.rectAreaLights.value=k.state.rectArea,It.ltc_1.value=k.state.rectAreaLTC1,It.ltc_2.value=k.state.rectAreaLTC2,It.pointLights.value=k.state.point,It.pointLightShadows.value=k.state.pointShadow,It.hemisphereLights.value=k.state.hemi,It.directionalShadowMap.value=k.state.directionalShadowMap,It.directionalShadowMatrix.value=k.state.directionalShadowMatrix,It.spotShadowMap.value=k.state.spotShadowMap,It.spotLightMatrix.value=k.state.spotLightMatrix,It.spotLightMap.value=k.state.spotLightMap,It.pointShadowMap.value=k.state.pointShadowMap,It.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=Yt,G.uniformsList=null,Yt}function qh(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=Ps.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Yh(w,F){let V=dt.get(w);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function bf(w,F,V,G,k){F.isScene!==!0&&(F=Xt),A.resetTextureUnits();let at=F.fog,mt=G.isMeshStandardMaterial?F.environment:null,Ct=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Vs,Pt=(G.isMeshStandardMaterial?B:S).get(G.envMap||mt),Wt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Yt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),It=!!V.morphAttributes.position,ne=!!V.morphAttributes.normal,xe=!!V.morphAttributes.color,ve=bn;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ve=v.toneMapping);let ni=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ce=ni!==void 0?ni.length:0,Dt=dt.get(G),Yi=p.state.lights;if(X===!0&&(ut===!0||w!==_)){let gi=w===_&&G.id===b;rt.setState(G,w,gi)}let he=!1;G.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Yi.state.version||Dt.outputColorSpace!==Ct||k.isBatchedMesh&&Dt.batching===!1||!k.isBatchedMesh&&Dt.batching===!0||k.isBatchedMesh&&Dt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Dt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Dt.instancing===!1||!k.isInstancedMesh&&Dt.instancing===!0||k.isSkinnedMesh&&Dt.skinning===!1||!k.isSkinnedMesh&&Dt.skinning===!0||k.isInstancedMesh&&Dt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Dt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Dt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Dt.instancingMorph===!1&&k.morphTexture!==null||Dt.envMap!==Pt||G.fog===!0&&Dt.fog!==at||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==rt.numPlanes||Dt.numIntersection!==rt.numIntersection)||Dt.vertexAlphas!==Wt||Dt.vertexTangents!==Yt||Dt.morphTargets!==It||Dt.morphNormals!==ne||Dt.morphColors!==xe||Dt.toneMapping!==ve||Dt.morphTargetsCount!==ce)&&(he=!0):(he=!0,Dt.__version=G.version);let Si=Dt.currentProgram;he===!0&&(Si=Vr(G,F,k));let as=!1,hi=!1,Ks=!1,_e=Si.getUniforms(),Fi=Dt.uniforms;if(ot.useProgram(Si.program)&&(as=!0,hi=!0,Ks=!0),G.id!==b&&(b=G.id,hi=!0),as||_!==w){ot.buffers.depth.getReversed()?(it.copy(w.projectionMatrix),lp(it),cp(it),_e.setValue(P,"projectionMatrix",it)):_e.setValue(P,"projectionMatrix",w.projectionMatrix),_e.setValue(P,"viewMatrix",w.matrixWorldInverse);let un=_e.map.cameraPosition;un!==void 0&&un.setValue(P,Nt.setFromMatrixPosition(w.matrixWorld)),gt.logarithmicDepthBuffer&&_e.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&_e.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),_!==w&&(_=w,hi=!0,Ks=!0)}if(k.isSkinnedMesh){_e.setOptional(P,k,"bindMatrix"),_e.setOptional(P,k,"bindMatrixInverse");let gi=k.skeleton;gi&&(gi.boneTexture===null&&gi.computeBoneTexture(),_e.setValue(P,"boneTexture",gi.boneTexture,A))}k.isBatchedMesh&&(_e.setOptional(P,k,"batchingTexture"),_e.setValue(P,"batchingTexture",k._matricesTexture,A),_e.setOptional(P,k,"batchingIdTexture"),_e.setValue(P,"batchingIdTexture",k._indirectTexture,A),_e.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&_e.setValue(P,"batchingColorTexture",k._colorsTexture,A));let Qs=V.morphAttributes;if((Qs.position!==void 0||Qs.normal!==void 0||Qs.color!==void 0)&&Gt.update(k,V,Si),(hi||Dt.receiveShadow!==k.receiveShadow)&&(Dt.receiveShadow=k.receiveShadow,_e.setValue(P,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Fi.envMap.value=Pt,Fi.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Fi.envMapIntensity.value=F.environmentIntensity),hi&&(_e.setValue(P,"toneMappingExposure",v.toneMappingExposure),Dt.needsLights&&Sf(Fi,Ks),at&&G.fog===!0&&lt.refreshFogUniforms(Fi,at),lt.refreshMaterialUniforms(Fi,G,W,et,p.state.transmissionRenderTarget[w.id]),Ps.upload(P,qh(Dt),Fi,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ps.upload(P,qh(Dt),Fi,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&_e.setValue(P,"center",k.center),_e.setValue(P,"modelViewMatrix",k.modelViewMatrix),_e.setValue(P,"normalMatrix",k.normalMatrix),_e.setValue(P,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let gi=G.uniformsGroups;for(let un=0,dn=gi.length;un<dn;un++){let $h=gi[un];N.update($h,Si),N.bind($h,Si)}}return Si}function Sf(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function wf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,F,V){dt.get(w.texture).__webglTexture=F,dt.get(w.depthTexture).__webglTexture=V;let G=dt.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){let V=dt.get(w);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,V=0){I=w,E=F,R=V;let G=!0,k=null,at=!1,mt=!1;if(w){let Pt=dt.get(w);if(Pt.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(Pt.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Pt.__hasExternalTextures)A.rebindTextures(w,dt.get(w.texture).__webglTexture,dt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let It=w.depthTexture;if(Pt.__boundDepthTexture!==It){if(It!==null&&dt.has(It)&&(w.width!==It.image.width||w.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(mt=!0);let Yt=dt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Yt[F])?k=Yt[F][V]:k=Yt[F],at=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?k=dt.get(w).__webglMultisampledFramebuffer:Array.isArray(Yt)?k=Yt[V]:k=Yt,C.copy(w.viewport),D.copy(w.scissor),U=w.scissorTest}else C.copy(_t).multiplyScalar(W).floor(),D.copy(Vt).multiplyScalar(W).floor(),U=re;if(ot.bindFramebuffer(P.FRAMEBUFFER,k)&&G&&ot.drawBuffers(w,k),ot.viewport(C),ot.scissor(D),ot.setScissorTest(U),at){let Pt=dt.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,Pt.__webglTexture,V)}else if(mt){let Pt=dt.get(w.texture),Wt=F||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Pt.__webglTexture,V||0,Wt)}b=-1},this.readRenderTargetPixels=function(w,F,V,G,k,at,mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(Ct=Ct[mt]),Ct){ot.bindFramebuffer(P.FRAMEBUFFER,Ct);try{let Pt=w.texture,Wt=Pt.format,Yt=Pt.type;if(!gt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-G&&V>=0&&V<=w.height-k&&P.readPixels(F,V,G,k,Jt.convert(Wt),Jt.convert(Yt),at)}finally{let Pt=I!==null?dt.get(I).__webglFramebuffer:null;ot.bindFramebuffer(P.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(w,F,V,G,k,at,mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(Ct=Ct[mt]),Ct){let Pt=w.texture,Wt=Pt.format,Yt=Pt.type;if(!gt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-G&&V>=0&&V<=w.height-k){ot.bindFramebuffer(P.FRAMEBUFFER,Ct);let It=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,It),P.bufferData(P.PIXEL_PACK_BUFFER,at.byteLength,P.STREAM_READ),P.readPixels(F,V,G,k,Jt.convert(Wt),Jt.convert(Yt),0);let ne=I!==null?dt.get(I).__webglFramebuffer:null;ot.bindFramebuffer(P.FRAMEBUFFER,ne);let xe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await op(P,xe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,It),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,at),P.deleteBuffer(It),P.deleteSync(xe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,V=0){w.isTexture!==!0&&(cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);let G=Math.pow(2,-V),k=Math.floor(w.image.width*G),at=Math.floor(w.image.height*G),mt=F!==null?F.x:0,Ct=F!==null?F.y:0;A.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,mt,Ct,k,at),ot.unbindTexture()},this.copyTextureToTexture=function(w,F,V=null,G=null,k=0){w.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],F=arguments[2],k=arguments[3]||0,V=null);let at,mt,Ct,Pt,Wt,Yt,It,ne,xe,ve=w.isCompressedTexture?w.mipmaps[k]:w.image;V!==null?(at=V.max.x-V.min.x,mt=V.max.y-V.min.y,Ct=V.isBox3?V.max.z-V.min.z:1,Pt=V.min.x,Wt=V.min.y,Yt=V.isBox3?V.min.z:0):(at=ve.width,mt=ve.height,Ct=ve.depth||1,Pt=0,Wt=0,Yt=0),G!==null?(It=G.x,ne=G.y,xe=G.z):(It=0,ne=0,xe=0);let ni=Jt.convert(F.format),ce=Jt.convert(F.type),Dt;F.isData3DTexture?(A.setTexture3D(F,0),Dt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),Dt=P.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),Dt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);let Yi=P.getParameter(P.UNPACK_ROW_LENGTH),he=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Si=P.getParameter(P.UNPACK_SKIP_PIXELS),as=P.getParameter(P.UNPACK_SKIP_ROWS),hi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ve.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ve.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Pt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Wt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Yt);let Ks=w.isDataArrayTexture||w.isData3DTexture,_e=F.isDataArrayTexture||F.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Fi=dt.get(w),Qs=dt.get(F),gi=dt.get(Fi.__renderTarget),un=dt.get(Qs.__renderTarget);ot.bindFramebuffer(P.READ_FRAMEBUFFER,gi.__webglFramebuffer),ot.bindFramebuffer(P.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let dn=0;dn<Ct;dn++)Ks&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,dt.get(w).__webglTexture,k,Yt+dn),w.isDepthTexture?(_e&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,dt.get(F).__webglTexture,k,xe+dn),P.blitFramebuffer(Pt,Wt,at,mt,It,ne,at,mt,P.DEPTH_BUFFER_BIT,P.NEAREST)):_e?P.copyTexSubImage3D(Dt,k,It,ne,xe+dn,Pt,Wt,at,mt):P.copyTexSubImage2D(Dt,k,It,ne,xe+dn,Pt,Wt,at,mt);ot.bindFramebuffer(P.READ_FRAMEBUFFER,null),ot.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else _e?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Dt,k,It,ne,xe,at,mt,Ct,ni,ce,ve.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Dt,k,It,ne,xe,at,mt,Ct,ni,ve.data):P.texSubImage3D(Dt,k,It,ne,xe,at,mt,Ct,ni,ce,ve):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,k,It,ne,at,mt,ni,ce,ve.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,k,It,ne,ve.width,ve.height,ni,ve.data):P.texSubImage2D(P.TEXTURE_2D,k,It,ne,at,mt,ni,ce,ve);P.pixelStorei(P.UNPACK_ROW_LENGTH,Yi),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,he),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Si),P.pixelStorei(P.UNPACK_SKIP_ROWS,as),P.pixelStorei(P.UNPACK_SKIP_IMAGES,hi),k===0&&F.generateMipmaps&&P.generateMipmap(Dt),ot.unbindTexture()},this.copyTextureToTexture3D=function(w,F,V=null,G=null,k=0){return w.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,w=arguments[2],F=arguments[3],k=arguments[4]||0),cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,V,G,k)},this.initRenderTarget=function(w){dt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),ot.unbindTexture()},this.resetState=function(){E=0,R=0,I=null,ot.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}},za=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ha=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Va=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mc,this.updateRanges=[],this.version=0,this.uuid=nn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Qe=new T,vr=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Bi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),n=pe(n,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Tn=class extends on{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ms,nr=new T,bs=new T,Ss=new T,ws=new J,sr=new J,Cd=new Qt,ha=new T,rr=new T,ua=new T,Yu=new J,Pl=new J,$u=new J,An=class extends Le{constructor(t=new Tn){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new fe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Va(e,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new vr(i,3,0,!1)),Ms.setAttribute("uv",new vr(i,2,3,!1))}this.geometry=Ms,this.material=t,this.center=new J(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),Cd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-Ss.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;da(ha.set(-.5,-.5,0),Ss,a,bs,n,r),da(rr.set(.5,-.5,0),Ss,a,bs,n,r),da(ua.set(.5,.5,0),Ss,a,bs,n,r),Yu.set(0,0),Pl.set(1,0),$u.set(1,1);let o=t.ray.intersectTriangle(ha,rr,ua,!1,nr);if(o===null&&(da(rr.set(-.5,.5,0),Ss,a,bs,n,r),Pl.set(0,1),o=t.ray.intersectTriangle(ha,ua,rr,!1,nr),o===null))return;let l=t.ray.origin.distanceTo(nr);l<t.near||l>t.far||e.push({distance:l,point:nr.clone(),uv:yn.getInterpolation(nr,ha,rr,ua,Yu,Pl,$u,new J),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function da(s,t,e,i,n,r){ws.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(sr.x=r*ws.x-n*ws.y,sr.y=n*ws.x+r*ws.y):sr.copy(ws),s.copy(t),s.x+=sr.x,s.y+=sr.y,s.applyMatrix4(Cd)}var Bc=class extends ri{constructor(t=null,e=1,i=1,n,r,a,o,l,c=fi,h=fi,u,f){super(null,a,o,l,c,h,n,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $n=class extends oe{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Es=new Qt,Zu=new Qt,fa=[],Ju=new an,iv=new Qt,ar=new Tt,or=new En,Ga=class extends Tt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $n(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,iv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new an),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Es),Ju.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(Ju)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Es),or.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(i),t.ray.intersectsSphere(or)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Es),Zu.multiplyMatrices(i,Es),ar.matrixWorld=Zu,ar.raycast(t,fa);for(let a=0,o=fa.length;a<o;a++){let l=fa[a];l.instanceId=r,l.object=this,e.push(l)}fa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $n(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Bc(new Float32Array(n*this.count),n,this.count,mh,zi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Oc=class extends on{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ku=new Qt,zc=new Ia,pa=new En,ma=new T,Wa=class extends Le{constructor(t=new fe,e=new Oc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(n),pa.radius+=r,t.ray.intersectsSphere(pa)===!1)return;Ku.copy(n).invert(),zc.copy(t.ray).applyMatrix4(Ku);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);ma.fromBufferAttribute(u,g),Qu(ma,g,l,n,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,x=d;m<x;m++)ma.fromBufferAttribute(u,m),Qu(ma,m,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Qu(s,t,e,i,n,r,a){let o=zc.distanceSqToPoint(s);if(o<e){let l=new T;zc.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Xa=class extends ri{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);let h=i[n],f=i[n+1]-h,d=(a-h)/f;return(n+d)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new J:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new T,n=[],r=[],a=[],o=new T,l=new Qt;for(let d=0;d<=t;d++){let m=d/t;n[d]=this.getTangentAt(m,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ge(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(n[d],r[d])}if(e===!0){let d=Math.acos(Ge(r[0].dot(r[t]),-1,1));d/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(n[m],d*m)),a[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},_r=class extends vi{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new J){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Hc=class extends _r{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function yh(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,n(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+i*o}}}var ga=new T,Il=new yh,Ll=new yh,Dl=new yh,Zn=class extends vi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new T){let i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(ga.subVectors(n[0],n[1]).add(n[0]),c=ga);let u=n[o%r],f=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(ga.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=ga),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Il.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,x,g),Ll.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,x,g),Dl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Il.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ll.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Dl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Il.calc(l),Ll.calc(l),Dl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new T().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ju(s,t,e,i,n){let r=(i-t)*.5,a=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*s+e}function nv(s,t){let e=1-s;return e*e*t}function sv(s,t){return 2*(1-s)*s*t}function rv(s,t){return s*s*t}function dr(s,t,e,i){return nv(s,t)+sv(s,e)+rv(s,i)}function av(s,t){let e=1-s;return e*e*e*t}function ov(s,t){let e=1-s;return 3*e*e*s*t}function lv(s,t){return 3*(1-s)*s*s*t}function cv(s,t){return s*s*s*t}function fr(s,t,e,i,n){return av(s,t)+ov(s,e)+lv(s,i)+cv(s,n)}var qa=class extends vi{constructor(t=new J,e=new J,i=new J,n=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new J){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(fr(t,n.x,r.x,a.x,o.x),fr(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vc=class extends vi{constructor(t=new T,e=new T,i=new T,n=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new T){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(fr(t,n.x,r.x,a.x,o.x),fr(t,n.y,r.y,a.y,o.y),fr(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ya=class extends vi{constructor(t=new J,e=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new J){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gc=class extends vi{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$a=class extends vi{constructor(t=new J,e=new J,i=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new J){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(dr(t,n.x,r.x,a.x),dr(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Za=class extends vi{constructor(t=new T,e=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new T){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(dr(t,n.x,r.x,a.x),dr(t,n.y,r.y,a.y),dr(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ja=class extends vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new J){let i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(ju(o,l.x,c.x,h.x,u.x),ju(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new J().fromArray(n))}return this}},Ka=Object.freeze({__proto__:null,ArcCurve:Hc,CatmullRomCurve3:Zn,CubicBezierCurve:qa,CubicBezierCurve3:Vc,EllipseCurve:_r,LineCurve:Ya,LineCurve3:Gc,QuadraticBezierCurve:$a,QuadraticBezierCurve3:Za,SplineCurve:Ja}),Wc=class extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ka[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new Ka[n.type]().fromJSON(n))}return this}},yr=class extends Wc{constructor(t){super(),this.type="Path",this.currentPoint=new J,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ya(this.currentPoint.clone(),new J(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new $a(this.currentPoint.clone(),new J(t,e),new J(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,a){let o=new qa(this.currentPoint.clone(),new J(t,e),new J(i,n),new J(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Ja(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,r,a),this}absarc(t,e,i,n,r,a){return this.absellipse(t,e,i,i,n,r,a),this}ellipse(t,e,i,n,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,a,o,l),this}absellipse(t,e,i,n,r,a,o,l){let c=new _r(t,e,i,n,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Mr=class s extends fe{constructor(t=[new J(0,-.5),new J(.5,0),new J(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Ge(n,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new T,f=new J,d=new T,m=new T,x=new T,g=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let M=0;M<=e;M++){let y=i+M*h*n,v=Math.sin(y),L=Math.cos(y);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*v,u.y=t[E].y,u.z=t[E].x*L,a.push(u.x,u.y,u.z),f.x=M/e,f.y=E/(t.length-1),o.push(f.x,f.y);let R=l[3*E+0]*v,I=l[3*E+1],b=l[3*E+0]*L;c.push(R,I,b)}}for(let M=0;M<e;M++)for(let y=0;y<t.length-1;y++){let v=y+M*t.length,L=v,E=v+t.length,R=v+t.length+1,I=v+1;r.push(L,E,I),r.push(R,I,E)}this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("uv",new Zt(o,2)),this.setAttribute("normal",new Zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},ln=class s extends Mr{constructor(t=1,e=1,i=4,n=8){let r=new yr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},Qa=class s extends fe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new T,h=new J;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*n;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},le=class s extends fe{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,x=[],g=i/2,p=0;M(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(d,2));function M(){let v=new T,L=new T,E=0,R=(e-t)/i;for(let I=0;I<=r;I++){let b=[],_=I/r,C=_*(e-t)+t;for(let D=0;D<=n;D++){let U=D/n,z=U*l+o,q=Math.sin(z),O=Math.cos(z);L.x=C*q,L.y=-_*i+g,L.z=C*O,u.push(L.x,L.y,L.z),v.set(q,R,O).normalize(),f.push(v.x,v.y,v.z),d.push(U,1-_),b.push(m++)}x.push(b)}for(let I=0;I<n;I++)for(let b=0;b<r;b++){let _=x[b][I],C=x[b+1][I],D=x[b+1][I+1],U=x[b][I+1];(t>0||b!==0)&&(h.push(_,C,U),E+=3),(e>0||b!==r-1)&&(h.push(C,D,U),E+=3)}c.addGroup(p,E,0),p+=E}function y(v){let L=m,E=new J,R=new T,I=0,b=v===!0?t:e,_=v===!0?1:-1;for(let D=1;D<=n;D++)u.push(0,g*_,0),f.push(0,_,0),d.push(.5,.5),m++;let C=m;for(let D=0;D<=n;D++){let z=D/n*l+o,q=Math.cos(z),O=Math.sin(z);R.x=b*O,R.y=g*_,R.z=b*q,u.push(R.x,R.y,R.z),f.push(0,_,0),E.x=q*.5+.5,E.y=O*.5*_+.5,d.push(E.x,E.y),m++}for(let D=0;D<n;D++){let U=L+D,z=C+D;v===!0?h.push(z,z+1,U):h.push(z+1,z,U),I+=3}c.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ri=class s extends le{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},br=class s extends fe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let y=new T,v=new T,L=new T;for(let E=0;E<e.length;E+=3)d(e[E+0],y),d(e[E+1],v),d(e[E+2],L),l(y,v,L,M)}function l(M,y,v,L){let E=L+1,R=[];for(let I=0;I<=E;I++){R[I]=[];let b=M.clone().lerp(v,I/E),_=y.clone().lerp(v,I/E),C=E-I;for(let D=0;D<=C;D++)D===0&&I===E?R[I][D]=b:R[I][D]=b.clone().lerp(_,D/C)}for(let I=0;I<E;I++)for(let b=0;b<2*(E-I)-1;b++){let _=Math.floor(b/2);b%2===0?(f(R[I][_+1]),f(R[I+1][_]),f(R[I][_])):(f(R[I][_+1]),f(R[I+1][_+1]),f(R[I+1][_]))}}function c(M){let y=new T;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(M),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let M=new T;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let v=g(M)/2/Math.PI+.5,L=p(M)/Math.PI+.5;a.push(v,1-L)}m(),u()}function u(){for(let M=0;M<a.length;M+=6){let y=a[M+0],v=a[M+2],L=a[M+4],E=Math.max(y,v,L),R=Math.min(y,v,L);E>.9&&R<.1&&(y<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),L<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,y){let v=M*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function m(){let M=new T,y=new T,v=new T,L=new T,E=new J,R=new J,I=new J;for(let b=0,_=0;b<r.length;b+=9,_+=6){M.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),E.set(a[_+0],a[_+1]),R.set(a[_+2],a[_+3]),I.set(a[_+4],a[_+5]),L.copy(M).add(y).add(v).divideScalar(3);let C=g(L);x(E,_+0,M,C),x(R,_+2,y,C),x(I,_+4,v,C)}}function x(M,y,v,L){L<0&&M.x===1&&(a[y]=M.x-1),v.x===0&&v.z===0&&(a[y]=L/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}},ja=class s extends br{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Sr=class extends yr{constructor(t){super(t),this.uuid=nn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new yr().fromJSON(n))}return this}},hv={triangulate:function(s,t,e=2){let i=t&&t.length,n=i?t[0]*e:s.length,r=Pd(s,0,n,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(i&&(r=mv(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let m=e;m<n;m+=e)u=s[m],f=s[m+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return wr(r,a,e,o,l,d,0),a}};function Pd(s,t,e,i,n){let r,a;if(n===Tv(s,t,e,i)>0)for(r=t;r<e;r+=i)a=td(r,s[r],s[r+1],a);else for(r=e-i;r>=t;r-=i)a=td(r,s[r],s[r+1],a);return a&&uo(a,a.next)&&(Tr(a),a=a.next),a}function Jn(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(uo(e,e.next)||we(e.prev,e,e.next)===0)){if(Tr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function wr(s,t,e,i,n,r,a){if(!s)return;!a&&r&&yv(s,i,n,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?dv(s,i,n,r):uv(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Tr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=fv(Jn(s),t,e),wr(s,t,e,i,n,r,2)):a===2&&pv(s,t,e,i,n,r):wr(Jn(s),t,e,i,n,r,1);break}}}function uv(s){let t=s.prev,e=s,i=s.next;if(we(t,e,i)>=0)return!1;let n=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=n<r?n<a?n:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=n>r?n>a?n:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&As(n,o,r,l,a,c,m.x,m.y)&&we(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function dv(s,t,e,i){let n=s.prev,r=s,a=s.next;if(we(n,r,a)>=0)return!1;let o=n.x,l=r.x,c=a.x,h=n.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,x=o>l?o>c?o:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,p=Xc(d,m,t,e,i),M=Xc(x,g,t,e,i),y=s.prevZ,v=s.nextZ;for(;y&&y.z>=p&&v&&v.z<=M;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==n&&y!==a&&As(o,h,l,u,c,f,y.x,y.y)&&we(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==n&&v!==a&&As(o,h,l,u,c,f,v.x,v.y)&&we(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==n&&y!==a&&As(o,h,l,u,c,f,y.x,y.y)&&we(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==n&&v!==a&&As(o,h,l,u,c,f,v.x,v.y)&&we(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function fv(s,t,e){let i=s;do{let n=i.prev,r=i.next.next;!uo(n,r)&&Id(n,i,i.next,r)&&Er(n,r)&&Er(r,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Tr(i),Tr(i.next),i=s=r),i=i.next}while(i!==s);return Jn(i)}function pv(s,t,e,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Sv(a,o)){let l=Ld(a,o);a=Jn(a,a.next),l=Jn(l,l.next),wr(a,t,e,i,n,r,0),wr(l,t,e,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function mv(s,t,e,i){let n=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*i,l=r<a-1?t[r+1]*i:s.length,c=Pd(s,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(bv(c));for(n.sort(gv),r=0;r<n.length;r++)e=xv(n[r],e);return e}function gv(s,t){return s.x-t.x}function xv(s,t){let e=vv(s,t);if(!e)return t;let i=Ld(e,s);return Jn(i,i.next),Jn(e,e.next)}function vv(s,t){let e=t,i=-1/0,n,r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,n=e.x<e.next.x?e:e.next,f===r))return n}e=e.next}while(e!==t);if(!n)return null;let o=n,l=n.x,c=n.y,h=1/0,u;e=n;do r>=e.x&&e.x>=l&&r!==e.x&&As(a<c?r:i,a,l,c,a<c?i:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Er(e,s)&&(u<h||u===h&&(e.x>n.x||e.x===n.x&&_v(n,e)))&&(n=e,h=u)),e=e.next;while(e!==o);return n}function _v(s,t){return we(s.prev,s,t.prev)<0&&we(t.next,s,s.next)<0}function yv(s,t,e,i){let n=s;do n.z===0&&(n.z=Xc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Mv(n)}function Mv(s){let t,e,i,n,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,o--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;e=i}r.nextZ=null,c*=2}while(a>1);return s}function Xc(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function bv(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function As(s,t,e,i,n,r,a,o){return(n-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(n-a)*(i-o)}function Sv(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!wv(s,t)&&(Er(s,t)&&Er(t,s)&&Ev(s,t)&&(we(s.prev,s,t.prev)||we(s,t.prev,t))||uo(s,t)&&we(s.prev,s,s.next)>0&&we(t.prev,t,t.next)>0)}function we(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function uo(s,t){return s.x===t.x&&s.y===t.y}function Id(s,t,e,i){let n=va(we(s,t,e)),r=va(we(s,t,i)),a=va(we(e,i,s)),o=va(we(e,i,t));return!!(n!==r&&a!==o||n===0&&xa(s,e,t)||r===0&&xa(s,i,t)||a===0&&xa(e,s,i)||o===0&&xa(e,t,i))}function xa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function va(s){return s>0?1:s<0?-1:0}function wv(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Id(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Er(s,t){return we(s.prev,s,s.next)<0?we(s,t,s.next)>=0&&we(s,s.prev,t)>=0:we(s,t,s.prev)<0||we(s,s.next,t)<0}function Ev(s,t){let e=s,i=!1,n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function Ld(s,t){let e=new qc(s.i,s.x,s.y),i=new qc(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function td(s,t,e,i){let n=new qc(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Tr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function qc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Tv(s,t,e,i){let n=0;for(let r=t,a=e-i;r<e;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}var pr=class s{static area(t){let e=t.length,i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let i=[],n=[],r=[];ed(t),id(i,t);let a=t.length;e.forEach(ed);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,id(i,e[l]);let o=hv.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ed(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function id(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var to=class s extends fe{constructor(t=new Sr([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Zt(n,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Av,y,v=!1,L,E,R,I;p&&(y=p.getSpacedPoints(h),v=!0,f=!1,L=p.computeFrenetFrames(h,!1),E=new T,R=new T,I=new T),f||(g=0,d=0,m=0,x=0);let b=o.extractPoints(c),_=b.shape,C=b.holes;if(!pr.isClockWise(_)){_=_.reverse();for(let K=0,st=C.length;K<st;K++){let P=C[K];pr.isClockWise(P)&&(C[K]=P.reverse())}}let U=pr.triangulateShape(_,C),z=_;for(let K=0,st=C.length;K<st;K++){let P=C[K];_=_.concat(P)}function q(K,st,P){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(st,P)}let O=_.length,et=U.length;function W(K,st,P){let yt,tt,gt,ot=K.x-st.x,Ft=K.y-st.y,dt=P.x-K.x,A=P.y-K.y,S=ot*ot+Ft*Ft,B=ot*A-Ft*dt;if(Math.abs(B)>Number.EPSILON){let $=Math.sqrt(S),j=Math.sqrt(dt*dt+A*A),Z=st.x-Ft/$,bt=st.y+ot/$,lt=P.x-A/j,vt=P.y+dt/j,Ht=((lt-Z)*A-(vt-bt)*dt)/(ot*A-Ft*dt);yt=Z+ot*Ht-K.x,tt=bt+Ft*Ht-K.y;let rt=yt*yt+tt*tt;if(rt<=2)return new J(yt,tt);gt=Math.sqrt(rt/2)}else{let $=!1;ot>Number.EPSILON?dt>Number.EPSILON&&($=!0):ot<-Number.EPSILON?dt<-Number.EPSILON&&($=!0):Math.sign(Ft)===Math.sign(A)&&($=!0),$?(yt=-Ft,tt=ot,gt=Math.sqrt(S)):(yt=ot,tt=Ft,gt=Math.sqrt(S/2))}return new J(yt/gt,tt/gt)}let nt=[];for(let K=0,st=z.length,P=st-1,yt=K+1;K<st;K++,P++,yt++)P===st&&(P=0),yt===st&&(yt=0),nt[K]=W(z[K],z[P],z[yt]);let ht=[],_t,Vt=nt.concat();for(let K=0,st=C.length;K<st;K++){let P=C[K];_t=[];for(let yt=0,tt=P.length,gt=tt-1,ot=yt+1;yt<tt;yt++,gt++,ot++)gt===tt&&(gt=0),ot===tt&&(ot=0),_t[yt]=W(P[yt],P[gt],P[ot]);ht.push(_t),Vt=Vt.concat(_t)}for(let K=0;K<g;K++){let st=K/g,P=d*Math.cos(st*Math.PI/2),yt=m*Math.sin(st*Math.PI/2)+x;for(let tt=0,gt=z.length;tt<gt;tt++){let ot=q(z[tt],nt[tt],yt);it(ot.x,ot.y,-P)}for(let tt=0,gt=C.length;tt<gt;tt++){let ot=C[tt];_t=ht[tt];for(let Ft=0,dt=ot.length;Ft<dt;Ft++){let A=q(ot[Ft],_t[Ft],yt);it(A.x,A.y,-P)}}}let re=m+x;for(let K=0;K<O;K++){let st=f?q(_[K],Vt[K],re):_[K];v?(R.copy(L.normals[0]).multiplyScalar(st.x),E.copy(L.binormals[0]).multiplyScalar(st.y),I.copy(y[0]).add(R).add(E),it(I.x,I.y,I.z)):it(st.x,st.y,0)}for(let K=1;K<=h;K++)for(let st=0;st<O;st++){let P=f?q(_[st],Vt[st],re):_[st];v?(R.copy(L.normals[K]).multiplyScalar(P.x),E.copy(L.binormals[K]).multiplyScalar(P.y),I.copy(y[K]).add(R).add(E),it(I.x,I.y,I.z)):it(P.x,P.y,u/h*K)}for(let K=g-1;K>=0;K--){let st=K/g,P=d*Math.cos(st*Math.PI/2),yt=m*Math.sin(st*Math.PI/2)+x;for(let tt=0,gt=z.length;tt<gt;tt++){let ot=q(z[tt],nt[tt],yt);it(ot.x,ot.y,u+P)}for(let tt=0,gt=C.length;tt<gt;tt++){let ot=C[tt];_t=ht[tt];for(let Ft=0,dt=ot.length;Ft<dt;Ft++){let A=q(ot[Ft],_t[Ft],yt);v?it(A.x,A.y+y[h-1].y,y[h-1].x+P):it(A.x,A.y,u+P)}}}H(),X();function H(){let K=n.length/3;if(f){let st=0,P=O*st;for(let yt=0;yt<et;yt++){let tt=U[yt];Lt(tt[2]+P,tt[1]+P,tt[0]+P)}st=h+g*2,P=O*st;for(let yt=0;yt<et;yt++){let tt=U[yt];Lt(tt[0]+P,tt[1]+P,tt[2]+P)}}else{for(let st=0;st<et;st++){let P=U[st];Lt(P[2],P[1],P[0])}for(let st=0;st<et;st++){let P=U[st];Lt(P[0]+O*h,P[1]+O*h,P[2]+O*h)}}i.addGroup(K,n.length/3-K,0)}function X(){let K=n.length/3,st=0;ut(z,st),st+=z.length;for(let P=0,yt=C.length;P<yt;P++){let tt=C[P];ut(tt,st),st+=tt.length}i.addGroup(K,n.length/3-K,1)}function ut(K,st){let P=K.length;for(;--P>=0;){let yt=P,tt=P-1;tt<0&&(tt=K.length-1);for(let gt=0,ot=h+g*2;gt<ot;gt++){let Ft=O*gt,dt=O*(gt+1),A=st+yt+Ft,S=st+tt+Ft,B=st+tt+dt,$=st+yt+dt;Nt(A,S,B,$)}}}function it(K,st,P){l.push(K),l.push(st),l.push(P)}function Lt(K,st,P){Ut(K),Ut(st),Ut(P);let yt=n.length/3,tt=M.generateTopUV(i,n,yt-3,yt-2,yt-1);Xt(tt[0]),Xt(tt[1]),Xt(tt[2])}function Nt(K,st,P,yt){Ut(K),Ut(st),Ut(yt),Ut(st),Ut(P),Ut(yt);let tt=n.length/3,gt=M.generateSideWallUV(i,n,tt-6,tt-3,tt-2,tt-1);Xt(gt[0]),Xt(gt[1]),Xt(gt[3]),Xt(gt[1]),Xt(gt[2]),Xt(gt[3])}function Ut(K){n.push(l[K*3+0]),n.push(l[K*3+1]),n.push(l[K*3+2])}function Xt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Rv(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new Ka[n.type]().fromJSON(n)),new s(i,t.options)}},Av={generateTopUV:function(s,t,e,i,n){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new J(r,a),new J(o,l),new J(c,h)]},generateSideWallUV:function(s,t,e,i,n,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[n*3],d=t[n*3+1],m=t[n*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new J(a,1-l),new J(c,1-u),new J(f,1-m),new J(x,1-p)]:[new J(o,1-l),new J(h,1-u),new J(d,1-m),new J(g,1-p)]}};function Rv(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){let r=s[i];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var eo=class s extends br{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},io=class s extends br{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Vi=class s extends fe{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new T,f=new T,d=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){let M=[],y=p/i,v=0;p===0&&a===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let L=0;L<=e;L++){let E=L/e;u.x=-t*Math.cos(n+E*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(n+E*r)*Math.sin(a+y*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(E+v,1-y),M.push(c++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){let y=h[p][M+1],v=h[p][M],L=h[p+1][M],E=h[p+1][M+1];(p!==0||a>0)&&d.push(y,v,E),(p!==i-1||l<Math.PI)&&d.push(v,L,E)}this.setIndex(d),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ar=class s extends fe{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new T,u=new T,f=new T;for(let d=0;d<=i;d++)for(let m=0;m<=n;m++){let x=m/n*r,g=d/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/n),c.push(d/i)}for(let d=1;d<=i;d++)for(let m=1;m<=n;m++){let x=(n+1)*d+m-1,g=(n+1)*(d-1)+m-1,p=(n+1)*(d-1)+m,M=(n+1)*d+m;a.push(x,g,M),a.push(g,p,M)}this.setIndex(a),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Bs=class s extends fe{constructor(t=new Za(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,l=new T,c=new J,h=new T,u=[],f=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(d,2));function x(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),M(),p()}function g(y){h=t.getPointAt(y/e,h);let v=a.normals[y],L=a.binormals[y];for(let E=0;E<=n;E++){let R=E/n*Math.PI*2,I=Math.sin(R),b=-Math.cos(R);l.x=b*v.x+I*L.x,l.y=b*v.y+I*L.y,l.z=b*v.z+I*L.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=e;y++)for(let v=1;v<=n;v++){let L=(n+1)*(y-1)+(v-1),E=(n+1)*y+(v-1),R=(n+1)*y+v,I=(n+1)*(y-1)+v;m.push(L,E,I),m.push(E,R,I)}}function M(){for(let y=0;y<=e;y++)for(let v=0;v<=n;v++)c.x=y/e,c.y=v/n,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Ka[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var no=class extends Te{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Rt=class extends on{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_d,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function _a(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Cv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Os=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yc=class extends Os{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qh,endingEnd:Qh}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case jh:r=t,o=2*e-i;break;case tu:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case jh:a=t,l=2*i-e;break;case tu:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(i-e)/(n-e),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,M=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,y=(-1-d)*g+(1.5+d)*x+.5*m,v=d*g-d*x;for(let L=0;L!==o;++L)r[L]=p*a[h+L]+M*a[c+L]+y*a[l+L]+v*a[u+L];return r}},$c=class extends Os{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Zc=class extends Os{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Ci=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_a(e,this.TimeBufferType),this.values=_a(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:_a(t.times,Array),values:_a(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ea:e=this.InterpolantFactoryMethodDiscrete;break;case yc:e=this.InterpolantFactoryMethodLinear;break;case el:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ea;case this.InterpolantFactoryMethodLinear:return yc;case this.InterpolantFactoryMethodSmooth:return el}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Cv(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===el,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,f=u-i,d=u+i;for(let m=0;m!==i;++m){let x=e[u+m];if(x!==e[f+m]||x!==e[d+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Ci.prototype.TimeBufferType=Float32Array;Ci.prototype.ValueBufferType=Float32Array;Ci.prototype.DefaultInterpolation=yc;var Kn=class extends Ci{constructor(t,e,i){super(t,e,i)}};Kn.prototype.ValueTypeName="bool";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=Ea;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var Jc=class extends Ci{};Jc.prototype.ValueTypeName="color";var Kc=class extends Ci{};Kc.prototype.ValueTypeName="number";var Qc=class extends Os{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ee.slerpFlat(r,0,a,c-o,a,c,l);return r}},so=class extends Ci{InterpolantFactoryMethodLinear(t){return new Qc(this.times,this.values,this.getValueSize(),t)}};so.prototype.ValueTypeName="quaternion";so.prototype.InterpolantFactoryMethodSmooth=void 0;var Qn=class extends Ci{constructor(t,e,i){super(t,e,i)}};Qn.prototype.ValueTypeName="string";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=Ea;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var jc=class extends Ci{};jc.prototype.ValueTypeName="vector";var th=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},Pv=new th,eh=class{constructor(t){this.manager=t!==void 0?t:Pv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};eh.DEFAULT_MATERIAL_NAME="__DEFAULT";var zs=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ro=class extends zs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ul=new Qt,nd=new T,sd=new T,Rr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;nd.setFromMatrixPosition(t.matrixWorld),e.position.copy(nd),sd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sd),e.updateMatrixWorld(),Ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ih=class extends Rr{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Aa*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||n!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ao=class extends zs{constructor(t,e,i=0,n=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ih}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},rd=new Qt,lr=new T,Nl=new T,nh=class extends Rr{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),lr.setFromMatrixPosition(t.matrixWorld),i.position.copy(lr),Nl.copy(i.position),Nl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Nl),i.updateMatrixWorld(),n.makeTranslation(-lr.x,-lr.y,-lr.z),rd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd)}},Hs=class extends zs{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new nh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},sh=class extends Rr{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cr=class extends zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new sh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var oo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ad(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=ad();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function ad(){return performance.now()}var Mh="\\[\\]\\.:\\/",Iv=new RegExp("["+Mh+"]","g"),bh="[^"+Mh+"]",Lv="[^"+Mh.replace("\\.","")+"]",Dv=/((?:WC+[\/:])*)/.source.replace("WC",bh),Uv=/(WCOD+)?/.source.replace("WCOD",Lv),Nv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bh),Fv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bh),kv=new RegExp("^"+Dv+Uv+Nv+Fv+"$"),Bv=["material","materials","bones","map"],rh=class{constructor(t,e,i){let n=i||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},be=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Iv,"")}static parseTrackName(t){let e=kv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Bv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=rh;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var o_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Li={mass:1450,inertia:[2600,3e3,1100],cgHeight:.42,restLength:.62,maxTravel:.46,springK:34e3,damperBump:3200,damperRebound:4600,antiRoll:22e3,wheelRadius:.46,gripLat:1.18,gripLong:1.12,peakSlip:.16,slideFalloff:.72,rearGripHandbrake:.42,engineForce:10200,topSpeed:36,brakeForce:15500,reverseSpeed:9,frontTorque:.42,dragCoef:.42,rollRes:9,maxSteer:.58,steerSpeedFalloff:.55,steerRate:5.2,steerReturn:7.5,airPitch:4.6,airRoll:1.8,airYaw:1.3,nitroForce:7800,nitroTopBoost:9,nitroDur:2.6,nitroCans:3,downforce:2.2,stability:1,driftAssist:.55,yawDamping:.9,assistStrength:1,chaserSpeedMul:1},Ir={low:{pixelRatio:.75,shadows:!1,shadowSize:0,bloom:!1,foliage:.45,drawDist:220,particles:.4,grain:!1,antialias:!1},medium:{pixelRatio:1,shadows:!0,shadowSize:1024,bloom:!0,foliage:.7,drawDist:300,particles:.7,grain:!0,antialias:!1},high:{pixelRatio:1.5,shadows:!0,shadowSize:2048,bloom:!0,foliage:1,drawDist:380,particles:1,grain:!0,antialias:!0}},Lr={explorer:{name:"Explorer",chaser:.86,gap:.8,dmg:.6,startGap:70,fallDeath:!1},adventurer:{name:"Adventurer",chaser:1,gap:1,dmg:1,startGap:60,fallDeath:!1},legend:{name:"Legend",chaser:1.12,gap:1.15,dmg:1.4,startGap:50,fallDeath:!0}},jn=typeof navigator<"u"&&(/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Macintosh/.test(navigator.userAgent));var Mt=(s,t,e)=>s<t?t:s>e?e:s,se=(s,t,e)=>s+(t-s)*e;var Dr=(s,t,e,i)=>se(s,t,1-Math.exp(-e*i)),ye=(s,t,e)=>{let i=Mt((e-s)/(t-s),0,1);return i*i*(3-2*i)};function fo(s,t){let e=s*374761393+t*668265263;return e=(e^e>>>13)*1274126177,((e^e>>>16)>>>0)/4294967296}function Cn(s,t){let e=Math.floor(s),i=Math.floor(t),n=s-e,r=t-i,a=n*n*(3-2*n),o=r*r*(3-2*r),l=fo(e,i),c=fo(e+1,i),h=fo(e,i+1),u=fo(e+1,i+1);return se(se(l,c,a),se(h,u,a),o)}function ts(s,t,e=4){let i=0,n=.5,r=1;for(let a=0;a<e;a++)i+=n*Cn(s*r,t*r),r*=2.03,n*=.5;return i}function Dd(s){let t=2166136261;for(let e=0;e<s.length;e++)t^=s.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}var Me=class{constructor(t=1){this.s=t>>>0||1}next(){let t=this.s=this.s+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}chance(t){return this.next()<t}sign(){return this.next()<.5?-1:1}weighted(t){let e=0;for(let n of t)e+=n.w;let i=this.next()*e;for(let n of t)if(i-=n.w,i<=0)return n.v;return t[t.length-1].v}};var Sh={},kt={on(s,t){(Sh[s]=Sh[s]||[]).push(t)},emit(s,t){let e=Sh[s];if(e)for(let i of e)i(t)}},ie={car:null,carS:0,carLat:0,time:0,running:!1,slowmo:1};var Ud="relicrunner4x4.save.v1",wh=()=>({gold:0,shards:0,relics:{},upgrades:{engine:0,nitro:0,suspension:0,armor:0},vehicle:"bessie",paint:"green",records:{bestDistance:0,bestScore:0,runs:0,totalDistance:0},expeditionLevel:1,missionsDone:0,missions:null,settings:{assist:jn?"full":"light",autoAccel:jn,difficulty:"adventurer",steerSens:1,camDist:1,comfort:!1,flashing:!1,colorblind:!1,subtitle:1,music:.7,sfx:.9,quality:"auto",fps:60,touchMode:"stick",hoodCam:!1},seenIntro:!1});function Nd(){try{let s=localStorage.getItem(Ud);if(!s)return wh();let t=JSON.parse(s),e=wh();return{...e,...t,upgrades:{...e.upgrades,...t.upgrades},records:{...e.records,...t.records},settings:{...e.settings,...t.settings}}}catch{return wh()}}function Fd(s){try{localStorage.setItem(Ud,JSON.stringify(s))}catch{}}var kd=new T(-.55,.36,.75).normalize(),Eh=new At("#b7b48a"),po=class{constructor(t,e){this.canvas=t,this.qualityName=e==="auto"?jn?"low":"high":e,this.q=Ir[this.qualityName];let i=this.renderer=new Oa({canvas:t,antialias:this.q.antialias,powerPreference:"high-performance",stencil:!1});i.outputColorSpace=Je,i.toneMapping=Pr,i.toneMappingExposure=1.05,i.shadowMap.enabled=this.q.shadows,i.shadowMap.type=ah,this.resScale=1,this.scene=new Ha,this.scene.fog=new za(Eh,.0072),this.scene.background=Eh.clone(),this.camera=new We(62,16/9,.3,900),this._lights(),this._sky(),this._far(),this.time={value:0},this.lost=!1,t.addEventListener("webglcontextlost",n=>{n.preventDefault(),this.lost=!0}),t.addEventListener("webglcontextrestored",()=>{this.lost=!1}),this.resize()}setQuality(t){this.qualityName=t,this.q=Ir[t],this.renderer.shadowMap.enabled=this.q.shadows,this.sun.castShadow=this.q.shadows,this.q.shadows&&(this.sun.shadow.mapSize.set(this.q.shadowSize,this.q.shadowSize),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.scene.traverse(e=>{e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>n.needsUpdate=!0)}),this.resize()}_lights(){let t=this.scene;this.hemi=new ro("#cfe3d0","#4a4a24",1.05),t.add(this.hemi);let e=this.sun=new Cr("#ffd49a",3.1);e.castShadow=this.q.shadows,e.shadow.mapSize.set(this.q.shadowSize||1024,this.q.shadowSize||1024);let i=e.shadow.camera;i.left=-38,i.right=38,i.top=38,i.bottom=-38,i.near=1,i.far=220,e.shadow.bias=-6e-4,e.shadow.normalBias=.04,t.add(e),t.add(e.target),this.fill=new Cr("#8fb4c8",.35),this.fill.position.set(10,8,-10),t.add(this.fill)}_sky(){let t=new Vi(800,32,16),e=new Te({side:ze,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:kd},top:{value:new At("#6f9fb8")},mid:{value:new At("#e9d6a2")},hor:{value:Eh}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 sunDir, top, mid, hor; varying vec3 vDir;
        void main(){ vec3 d = normalize(vDir); float h = d.y;
          vec3 c = mix(hor, mid, smoothstep(-0.02, 0.18, h)); c = mix(c, top, smoothstep(0.15, 0.75, h));
          float sd = max(dot(d, sunDir), 0.0);
          c += vec3(1.0,0.78,0.45) * pow(sd, 6.0) * 0.55 + vec3(1.0,0.9,0.7) * pow(sd, 300.0) * 6.0;
          float cl = sin(d.x*9.0+d.z*4.0)*sin(d.z*11.0-d.x*3.0)*0.5+0.5; c = mix(c, vec3(1.0,0.93,0.8), smoothstep(0.55,0.95,cl)*smoothstep(0.05,0.3,h)*(1.0-smoothstep(0.3,0.6,h))*0.35);
          gl_FragColor = vec4(c, 1.0); }`});this.sky=new Tt(t,e),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.scene.add(this.sky)}_far(){let t=new ae,e=new Me(5),i=(n,r,a,o)=>{let c=[],h=[];for(let d=0;d<=160;d++){let m=d/160*Math.PI*2,x=Math.pow(ts(Math.cos(m)*3+o,Math.sin(m)*3,5),1.6)*r+10;c.push(Math.cos(m)*n,-30,Math.sin(m)*n,Math.cos(m)*n,x,Math.sin(m)*n)}for(let d=0;d<160;d++){let m=d*2;h.push(m,m+2,m+1,m+1,m+2,m+3)}let u=new fe;u.setAttribute("position",new Zt(c,3)),u.setIndex(h);let f=new Tt(u,new He({color:a,fog:!1,side:Ce,depthWrite:!1}));return f.renderOrder=-9,f};t.add(i(700,260,new At("#a6ab88"),1)),t.add(i(620,170,new At("#8e9a72"),7));for(let n=0;n<5;n++){let r=e.range(0,6.28),a=e.range(520,590),o=e.range(26,46),l=new ae;for(let h=0;h<6;h++){let u=o*(1-h*.15),f=new Tt(new Et(u*2,o*.28,u*2),new He({color:new At("#878d6c").offsetHSL(0,0,-h*.01),fog:!1}));f.position.y=h*o*.28,l.add(f)}let c=new Tt(new Et(o*.6,o*.4,o*.6),new He({color:"#7c8262",fog:!1}));c.position.y=6*o*.28,l.add(c),l.position.set(Math.cos(r)*a,5,Math.sin(r)*a),l.children.forEach(h=>h.renderOrder=-8),t.add(l)}this.far=t,this.scene.add(t)}follow(t){this.sky.position.copy(this.camera.position),this.far.position.set(this.camera.position.x,t.y*.6,this.camera.position.z),this.sun.position.copy(t).addScaledVector(kd,120),this.sun.target.position.copy(t),this.sun.target.updateMatrixWorld()}resize(){let t=window.innerWidth,e=window.innerHeight,i=Math.min(window.devicePixelRatio||1,this.q.pixelRatio)*this.resScale;this.renderer.setPixelRatio(i),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.w=t,this.h=e,this.pr=i,this.onResize&&this.onResize(t,e,i)}};var mo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var pi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ov=new ks(-1,1,1,-1,0,1),Th=class extends fe{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}},zv=new Th,Pn=class{constructor(t){this._mesh=new Tt(zv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ov)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ws=class extends pi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Te?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Rn.clone(t.uniforms),this.material=new Te({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Pn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ur=class extends pi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},go=class extends pi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var xo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new J);this._width=i.width,this._height=i.height,e=new ti(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ws(mo),this.copyPass.material.blending=Hi,this.clock=new oo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ur!==void 0&&(a instanceof Ur?i=!0:a instanceof go&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var vo=class extends pi{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new At}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}};var Bd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new At(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Xs=class s extends pi{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new J(t.x,t.y):new J(256,256),this.clearColor=new At(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ti(r,a,{type:Pi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new ti(r,a,{type:Pi});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new ti(r,a,{type:Pi});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Bd;this.highPassUniforms=Rn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Te({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new J(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=mo;this.copyUniforms=Rn.clone(h.uniforms),this.blendMaterial=new Te({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:si,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new At,this.oldClearAlpha=1,this.basic=new He,this.fsQuad=new Pn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new J(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Te({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new J(.5,.5)},direction:{value:new J(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Te({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Xs.BlurDirectionX=new J(1,0);Xs.BlurDirectionY=new J(0,1);var Od={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var _o=class extends pi{constructor(){super();let t=Od;this.uniforms=Rn.clone(t.uniforms),this.material=new no({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Pn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},jt.getTransfer(this._outputColorSpace)===ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===oh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===lh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ch?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Pr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===hh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===uh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Hv={uniforms:{tDiffuse:{value:null},time:{value:0},grain:{value:.04},vignette:{value:.9},danger:{value:0},flash:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float time, grain, vignette, danger, flash; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){ vec4 c = texture2D(tDiffuse, vUv);
      // warm grade: lift shadows to teal-olive, push highlights amber
      float l = dot(c.rgb, vec3(0.299,0.587,0.114));
      c.rgb = mix(c.rgb, c.rgb * vec3(1.06,1.0,0.86), smoothstep(0.3, 1.0, l));
      c.rgb += vec3(0.012,0.02,0.01) * (1.0 - l);
      c.rgb = mix(vec3(l), c.rgb, 1.08);
      vec2 d = vUv - 0.5; float v = 1.0 - dot(d, d) * vignette; c.rgb *= v;
      c.rgb = mix(c.rgb, c.rgb * vec3(1.25,0.7,0.6), danger * smoothstep(0.15, 0.7, length(d)));
      c.rgb += (h(vUv * 800.0 + time) - 0.5) * grain;
      c.rgb += flash;
      gl_FragColor = c; }`},yo=class{constructor(t){this.world=t;let e=t.renderer;this.composer=new xo(e),this.composer.addPass(new vo(t.scene,t.camera)),this.bloom=new Xs(new J(256,256),.32,.55,.86),this.composer.addPass(this.bloom),this.composer.addPass(new _o),this.grade=new Ws(Hv),this.composer.addPass(this.grade),this.enabled=t.q.bloom,this.resize()}resize(){let t=this.world;this.composer.setPixelRatio(t.pr),this.composer.setSize(t.w,t.h),this.bloom.resolution.set(t.w*t.pr*.5,t.h*t.pr*.5)}render(t,e){let i=this.world;this.grade.uniforms.time.value=e%100,this.grade.uniforms.grain.value=i.q.grain?.035:0,this.enabled&&i.q.bloom?this.composer.render(t):i.renderer.render(i.scene,i.camera)}};var Xe=1,Bt={OPEN:0,WALL:1,CLIFF:2},te={DIRT:0,MUD:1,STONE:2,PLANK:3,WATER:4,JUNGLE:5,VOID:6},zd=[1,.78,.95,.9,.7,.62,0],Hd=[0,1.6,0,.1,2.6,3.2,0],Mo=class{constructor(){this.S=[],this.base=0,this.res={h:0,nx:0,ny:1,nz:0,surf:0,onRoad:!0,lat:0,idx:0,t:0,isVoid:!1,laneLat:0,lane:0}}get count(){return this.base+this.S.length}get(t){t=Math.floor(t),t<this.base&&(t=this.base);let e=this.count-1;return t>e&&(t=e),this.S[t-this.base]}has(t){return t>=this.base&&t<this.count}push(t){t.i=this.count,this.S.push(t)}trim(t){let e=Math.floor(t)-this.base;e>200&&(this.S.splice(0,e),this.base+=e)}sampleAtS(t){return this.get(t/Xe)}pointAt(t,e,i){let n=Math.floor(t/Xe),r=t/Xe-n,a=this.get(n),o=this.get(n+1),l=a.rx+(o.rx-a.rx)*r,c=a.rz+(o.rz-a.rz)*r;return i.x=a.x+(o.x-a.x)*r+l*e,i.z=a.z+(o.z-a.z)*r+c*e,i.y=a.y+(o.y-a.y)*r+e*(a.bank+(o.bank-a.bank)*r),i}headingAt(t){let e=Math.floor(t/Xe),i=t/Xe-e,n=this.get(e),r=this.get(e+1);return n.th+(r.th-n.th)*i}locate(t,e,i){let n=Mt(Math.floor(i),this.base,this.count-2);for(let r=0;r<64;r++){let a=this.S[n-this.base];if((t-a.x)*a.fx+(e-a.z)*a.fz<0&&n>this.base){n--;continue}if(n+1<this.count-1){let l=this.S[n+1-this.base];if((t-l.x)*l.fx+(e-l.z)*l.fz>=0){n++;continue}}break}return n}roadY(t,e){return t.y+e*t.bank}terrainY(t,e){let i=t.fork+t.hw,n=Math.abs(e),r=e<0?t.edgeL:t.edgeR,a=ts(t.s*.045+(e<0?17:3),n*.06,3);if(t.gap||t.bridge){let h=ye(26,46,n);return t.floorY+a*2.5+h*(t.y-t.floorY+6+a*8)}if(t.fork>0&&n<t.fork-t.hw-.6){let h=t.fork-t.hw-.6,u=ye(0,2.5,h-n);return t.y+.2+u*(1.6+a*2.2)}if(n<=i+.6)return this.roadY(t,Mt(e,-i,i))-.12;let o=n-i;if(r===Bt.CLIFF){let h=ye(24,44,o);return t.floorY+a*3+h*(t.y-t.floorY+10+a*10)+(o<1.6?(t.y-t.floorY)*(1-ye(.6,1.6,o)):0)}let l=this.roadY(t,Math.sign(e)*i)-.15;t.ford&&(l=Math.min(l,t.waterY-.6+ye(3,18,o)*2));let c=r===Bt.WALL?ye(.5,5,o)*(1.2+a*1.5):0;return l+c+ye(2,26,o)*(1.5+a*7)+(Cn(t.s*.4,o*.5)-.5)*.25*ye(.5,3,o)}query(t,e,i){let n=this.res,r=this.locate(t,e,i),a=this.S[r-this.base],o=this.S[Math.min(r+1,this.count-1)-this.base],l=t-a.x,c=e-a.z,h=Mt((l*a.fx+c*a.fz)/Xe,0,1),u=a.rx+(o.rx-a.rx)*h,f=a.rz+(o.rz-a.rz)*h,d=l*u+c*f;n.idx=r,n.t=h,n.lat=d;let m=h>.5?o:a,x=m.fork+m.hw,g=d,p=0;m.fork>0&&(p=d<0?-1:1,g=d-p*m.fork),n.laneLat=g,n.lane=p;let M=Math.abs(g)<=m.hw+.25,y=m.gap||m.hole,v=a.y+(o.y-a.y)*h,L=a.bank+(o.bank-a.bank)*h,E=(o.y-a.y)/Xe;if(M&&!y)return n.onRoad=!0,n.isVoid=!1,n.surf=m.surf,n.h=v+d*L,m.bridge&&(n.h+=m.bridgeSway||0),m.bump&&(n.h+=m.bump(d,h)),this._normal(n,a,E,L),n;if(n.onRoad=!1,y&&Math.abs(d)<x+2.5)return n.isVoid=!0,n.surf=te.VOID,n.h=m.floorY,n.nx=0,n.ny=1,n.nz=0,n;let R=d<0?m.edgeL:m.edgeR,I=Math.abs(d)-x;if((R===Bt.CLIFF||m.bridge||m.gap)&&I>.7&&!(m.fork>0&&Math.abs(d)<m.fork))return n.isVoid=!0,n.surf=te.VOID,n.h=this.terrainY(m,d),n.nx=0,n.ny=1,n.nz=0,n;n.isVoid=!1,n.surf=m.ford?te.WATER:te.JUNGLE;let b=this.terrainY(a,d),_=this.terrainY(o,d);n.h=b+(_-b)*h;let C=.5,D=this.terrainY(m,d+C),U=this.terrainY(m,d-C),z=(D-U)/(2*C),q=(_-b)/Xe,O=-q*a.fx-z*a.rx,et=-q*a.fz-z*a.rz,W=1,nt=Math.hypot(O,W,et);return n.nx=O/nt,n.ny=W/nt,n.nz=et/nt,n}_normal(t,e,i,n){let r=-i*e.fx-n*e.rx,a=-i*e.fz-n*e.rz,o=1,l=Math.hypot(r,o,a);t.nx=r/l,t.ny=o/l,t.nz=a/l}limits(t){let e=t.fork+t.hw,i=t.edgeL===Bt.WALL?e+.35:t.edgeL===Bt.OPEN&&!t.bridge&&!t.gap?e+10:1/0,n=t.edgeR===Bt.WALL?e+.35:t.edgeR===Bt.OPEN&&!t.bridge&&!t.gap?e+10:1/0,r=t.fork>t.hw+.6?t.fork-t.hw-.35:0;return{L:i,R:n,island:r}}};var cn={vmax:33,accel:4.2,mu:1,launchEff:.84,minRadiusPerHw:2.6,headingWindow:1.2};function es(s){return Math.sqrt(cn.mu*9.81*Math.max(s,1))*1.12}function In(s,t,e=cn.vmax){return Math.min(e,Math.sqrt(s*s+2*cn.accel*t))}function Vv(s,t,e,i,n=3.2){let r=s*Math.cos(t),a=s*Math.sin(t),o=(e+n)/Math.max(r,.1);return a*o-.5*9.81*o*o>=-i+.25}function Gv(s,t,e){let i=0,n=80;for(let r=0;r<30;r++){let a=(i+n)/2;Vv(s,t,a,e)?i=a:n=a}return i}function Ah(s,t,e){let i=s*Math.cos(t),n=e/i;return s*Math.sin(t)*n-.5*9.81*n*n}var bo=class{constructor(){this.log=[],this.stats={gapsShrunk:0,runupsExtended:0,turnsWidened:0,headingFlips:0,forks:0,gapsOk:0,failures:0}}note(t){this.log.push(t),this.log.length>40&&this.log.shift()}planJump(t,e,i,n,r=18,a=90){let o=r,l=i;for(;;){let c=In(t,o+10)*cn.launchEff,h=Gv(c,e,n)*.9;if(l<=h)return this.stats.gapsOk++,{runup:o,gap:l,vLaunch:c/cn.launchEff};if(o<a){o+=8,this.stats.runupsExtended++;continue}return this.stats.gapsShrunk++,this.note(`gap ${i.toFixed(1)}\u2192${h.toFixed(1)} m`),{runup:o,gap:Math.max(5,h),vLaunch:c/cn.launchEff}}}checkTurn(t,e){let i=e*cn.minRadiusPerHw;return t<i?(this.stats.turnsWidened++,i):t}turnDir(t,e,i){let n=cn.headingWindow,r=a=>Math.abs(t+a*e)<=n;return r(i)?i:r(-i)?(this.stats.headingFlips++,-i):t>0?-1:1}checkSamples(t){let e=t[0],i=t[t.length-1],n=!0;i.fork>.01&&(n=!1,this.note("fork did not rejoin"));for(let r of t)if(!isFinite(r.x+r.y+r.z)){n=!1;break}return Math.abs(i.th)>cn.headingWindow+.35&&(n=!1,this.note("heading window exceeded")),n||this.stats.failures++,n&&!!e}};var Rh=["bridgeCollapse","pillars","croc","waterfall","blades","statue"],Ch={bridgeCollapse:"Collapsing Rope Bridge",pillars:"Falling Pillars",croc:"Crocodile Ford",waterfall:"Waterfall Jump",blades:"Tunnel of Blades",statue:"Falling Colossus"},So=class{constructor(t,e,i={}){this.track=t,this.rng=new Me(e),this.seed=e,this.val=new bo,this.gapMul=i.gapMul||1,this.cur={x:0,y:0,z:0,th:0},this.pieces=[],this.pieceId=0,this.vDesign=0,this.nextSet=260,this.bag=[],this.forced=null,this.lastType="",this.sinceGap=999}get s(){return this.track.count*Xe}emit(t){let e=this.cur,i=e.th,n=Math.sin(i),r=Math.cos(i),a={x:e.x,y:e.y,z:e.z,th:i,fx:n,fz:r,rx:-r,rz:n,s:this.track.count*Xe,hw:t.hw??4.3,bank:t.bank??Mt((t.k||0)*5,-.1,.1),surf:t.surf??te.DIRT,edgeL:t.edgeL??Bt.OPEN,edgeR:t.edgeR??Bt.OPEN,gap:!!t.gap,hole:!1,fork:t.fork||0,floorY:t.floorY??e.y-30,ford:!!t.ford,waterY:t.waterY??-999,bridge:!!t.bridge,tunnel:!!t.tunnel,k:t.k||0,hairpin:!!t.hairpin,ramp:t.ramp||0,piece:this._piece,lanes:t.lanes||null,bridgeSway:0,bump:null};return this.track.push(a),e.th+=(t.k||0)*Xe,e.x+=n*Xe,e.z+=r*Xe,e.y+=(t.grade||0)*Xe,a}begin(t,e={}){let i={id:this.pieceId++,type:t,i0:this.track.count,i1:0,s0:this.s,s1:0,seed:this.rng.int(1,1e9),pickups:[],set:null,...e};return this._piece=i,i}end(t){return t.i1=this.track.count-1,t.s1=this.s,this.pieces.push(t),this._piece=null,this.lastType=t.type,t}edgePick(t){return this.rng.weighted([{w:5,v:Bt.OPEN},{w:2.5,v:Bt.WALL},{w:1+t*2,v:Bt.CLIFF}])}homeGrade(){return Mt(-this.cur.y*.004,-.05,.05)}coinLine(t,e,i,n,r=4){for(let a=e;a<=i;a+=r)t.pickups.push({kind:"coin",s:a,lat:n(a),y:.9})}straight(t,e=this.rng.range(34,70)){let i=this.begin("straight"),n=this.rng,r=this.edgePick(t*.6),a=this.edgePick(t*.6),o=n.range(4.1,4.7),l=this.homeGrade(),c=n.range(.02,.07),h=n.range(0,6);for(let f=0;f<e;f++)this.emit({hw:o,grade:l+Math.sin(f/e*Math.PI*2+h)*c,edgeL:r,edgeR:a,surf:n.chance(.04)?te.MUD:te.DIRT});let u=n.range(-2,2);return this.coinLine(i,i.s0+8,i.s0+e-8,f=>u+Math.sin(f*.08)*1.4,4),n.chance(.25)&&i.pickups.push({kind:"nitro",s:i.s0+e*.6,lat:-u,y:1}),this.vDesign=In(this.vDesign,e),this.end(i)}curve(t,e=!1){let i=this.begin("curve"),n=this.rng,r=n.range(4.2,4.8),a=e?n.range(26,40):se(n.range(55,95),n.range(30,50),t);a=this.val.checkTurn(a,r);let o=n.range(.45,1.15),l=this.val.turnDir(this.cur.th,o,n.sign()),c=Math.round(o*a),h=l/a,u=l>0?"edgeR":"edgeL",f=l>0?"edgeL":"edgeR",d=n.chance(.3+t*.3)?Bt.CLIFF:n.chance(.5)?Bt.WALL:Bt.OPEN,m=this.homeGrade()+n.range(-.03,.03);for(let x=0;x<c;x++){let g=Math.min(ye(0,.22,x/c),ye(0,.22,1-x/c));this.emit({hw:r,k:h*(.35+.65*g)*1.18,grade:m,[u]:d,[f]:Bt.OPEN})}return this.coinLine(i,i.s0+6,i.s1-6,x=>-l*2*Math.sin((x-i.s0)/c*Math.PI),5),this.vDesign=Math.min(In(this.vDesign,c*.3),es(a)),i.radius=a,i.dir=l,this.end(i)}sbend(t){return this.curve(t,this.rng.chance(t)),this.curve(t,!1)}hairpin(t){let e=this.begin("brakezone"),i=this.rng;for(let g=0;g<26;g++)this.emit({hw:4.6+g*.03,grade:this.homeGrade()});e.hint="hairpin",this.end(e);let n=this.begin("hairpin"),r=5.4,a=this.val.checkTurn(i.range(14,18),r),o=this.cur.th>.15?-i.range(.5,.9):this.cur.th<-.15?i.range(.5,.9):i.sign()*i.range(.5,.9),l=Math.abs(o-this.cur.th),c=Math.sign(o-this.cur.th),h=Math.round(l*a),u=c/a,f=c>0?"edgeR":"edgeL",d=c>0?"edgeL":"edgeR",m=i.chance(.55)?Bt.CLIFF:Bt.WALL,x=i.range(-.06,.06);for(let g=0;g<h;g++){let p=Math.min(ye(0,.18,g/h),ye(0,.18,1-g/h));this.emit({hw:r,k:u*(.3+.7*p)*1.12,grade:x,surf:te.STONE,[f]:m,[d]:Bt.WALL,hairpin:!0,bank:Mt(u*3,-.07,.07)})}return this.coinLine(n,n.s0+4,n.s1-4,()=>-c*2.5,4),this.vDesign=es(a),n.radius=a,n.dir=c,this.end(n)}crest(t){let e=this.begin("crest"),i=this.rng,n=i.range(24,32),r=i.range(30,40),a=i.range(.07,.11),o=-i.range(.1,.15);for(let l=0;l<n;l++)this.emit({hw:4.4,grade:a*ye(0,.4,l/n)});for(let l=0;l<r;l++)this.emit({hw:4.4,grade:se(o,0,ye(.5,1,l/r))});return this.coinLine(e,e.s0+n-6,e.s0+n+14,()=>0,3),e.pickups.forEach(l=>l.y=1.6),this.vDesign=In(this.vDesign,n+r),this.end(e)}gap(t,e=!1){let i=this.rng,n=e?.27:i.range(.21,.27),r=e?4:2.2,a=(e?se(18,26,t):se(8,17,t)*i.range(.85,1.1))*this.gapMul,o=this.val.planJump(this.vDesign,n,a,r,e?40:22),l=this.begin(e?"waterfall":"gap");l.gapLen=o.gap,l.vLaunch=o.vLaunch,l.angle=n;let c=e?4.6:4.4,h=this.cur.y-(e?42:30);for(let g=0;g<o.runup;g++)this.emit({hw:c,grade:0,edgeL:Bt.OPEN,edgeR:Bt.OPEN,floorY:g>o.runup-6?h:void 0});let u=11;for(let g=0;g<u;g++){let p=Math.tan(n)*ye(0,1,(g+1)/u);this.emit({hw:c,grade:p,surf:te.STONE,ramp:p,edgeL:Bt.CLIFF,edgeR:Bt.CLIFF,floorY:h})}l.lipS=this.s;let f=this.cur.y,d=Math.round(o.gap);for(let g=0;g<d;g++){let p=g/d;this.emit({hw:c,gap:!0,grade:-r/d,floorY:h,edgeL:Bt.CLIFF,edgeR:Bt.CLIFF})}l.landS=this.s;let m=44;for(let g=0;g<m;g++)this.emit({hw:c+.4,grade:se(-.27,0,ye(.3,1,g/m)),surf:g<10?te.STONE:te.DIRT,edgeL:g<6?Bt.CLIFF:Bt.OPEN,edgeR:g<6?Bt.CLIFF:Bt.OPEN,floorY:g<8?h:void 0});let x=o.vLaunch*.9;for(let g=2;g<d+14;g+=2.5){let p=Ah(x,n,g);if(p<-r-3)break;l.pickups.push({kind:"coin",s:l.lipS+g,lat:0,yAbs:f+p+1.1})}return e&&l.pickups.push({kind:"relic",s:l.lipS+d*.55,lat:0,yAbs:f+Ah(x,n,d*.55)+1.3}),this.vDesign=In(o.vLaunch*.8,m),this.sinceGap=0,this.end(l)}bridge(t,e=!1){let i=this.rng,n=Math.round(e?i.range(80,100):i.range(44,74)),r=this.begin("bridgeApproach");for(let d=0;d<14;d++)this.emit({hw:4-d*.08,grade:0,edgeL:Bt.WALL,edgeR:Bt.WALL,surf:te.STONE});this.end(r);let a=this.begin(e?"bridgeCollapse":"bridge"),o=this.cur.y-i.range(34,48),l=this.cur.y,c=Math.min(2.2,n*.025),h=e?0:i.chance(.4)?i.sign()*i.range(.002,.005):0,u=0;for(let d=0;d<n;d++){let m=(d+1)/n,x=-Math.sin(m*Math.PI)*c;this.emit({hw:2.55,grade:(x-u)/Xe,bridge:!0,surf:te.PLANK,edgeL:Bt.CLIFF,edgeR:Bt.CLIFF,floorY:o,k:h,bank:0}),u=x}this.cur.y=l+u,a.floorY=o,this.coinLine(a,a.s0+5,a.s1-5,()=>0,3.5),e&&a.pickups.push({kind:"relic",s:a.s0+n*.7,lat:0,y:1.1}),a.collapse=e,this.end(a);let f=this.begin("bridgeExit");for(let d=0;d<14;d++)this.emit({hw:3+d*.1,grade:0,edgeL:Bt.WALL,edgeR:Bt.WALL,surf:te.STONE});return this.end(f),this.vDesign=Math.min(this.vDesign,26),a}fork(t){let e=this.rng,i=this.begin("fork"),n=140,r=3.4,a=r+e.range(4.5,7);i.danger=e.sign();let o=this.homeGrade();for(let c=0;c<n;c++){let h=c/n,u=a*Math.min(ye(0,.24,h),ye(0,.24,1-h)),f=u>.05,d=Bt.CLIFF;this.emit({hw:f?r+(1-Math.min(1,u/a))*1:4.4,fork:f?u:0,grade:o,bank:0,edgeL:i.danger<0?d:Bt.WALL,edgeR:i.danger>0?d:Bt.WALL,surf:te.DIRT})}let l=i.s0+n/2;i.forkO=a,i.hazards=[];for(let c=i.s0+36;c<i.s0+n-36;c+=4)i.pickups.push({kind:"coin",s:c,lat:-i.danger*a,y:.9});for(let c=i.s0+34;c<i.s0+n-34;c+=2.5)i.pickups.push({kind:"coin",s:c,lat:i.danger*a+Math.sin(c*.3)*1.2,y:.9,value:2});i.pickups.push({kind:"relic",s:l+12,lat:i.danger*a,y:1.1,rare:!0});for(let c=0;c<4;c++)i.hazards.push({s:i.s0+44+c*14+e.range(-3,3),lat:i.danger*a+e.pick([-1.6,1.6,0])});return this.val.stats.forks++,this.vDesign=Math.min(In(this.vDesign,n),30),this.end(i)}ford(t,e=!1){let i=this.rng,n=this.begin(e?"croc":"ford"),r=e?64:40,a=e?5:4.6,o=this.cur.y,l=e?1.2:.85,c=o-l+(e?.75:.5),h=0;for(let u=0;u<r;u++){let f=(u+1)/r,d=-l*ye(0,.3,f)*ye(0,.3,1-f);this.emit({hw:a,grade:(d-h)/Xe,ford:!0,waterY:c,surf:f>.15&&f<.85?te.WATER:te.MUD,floorY:o-30}),h=d}return this.cur.y=o+h,n.waterY=c,this.coinLine(n,n.s0+6,n.s1-6,u=>Math.sin(u*.2)*2.5,4),e&&n.pickups.push({kind:"nitro",s:n.s1-4,lat:0,y:1}),this.vDesign=Math.min(this.vDesign,22),this.end(n)}colonnade(t,e){let i=this.rng,n=this.begin(e),r=e==="blades"?92:e==="statue"?120:150,a=e==="statue"?5.6:e==="blades"?4.2:5.4;for(let o=0;o<r;o++)this.emit({hw:a,grade:e==="blades"?-.02:this.homeGrade(),edgeL:Bt.WALL,edgeR:Bt.WALL,surf:te.STONE,tunnel:e==="blades"&&o>6&&o<r-6});return e!=="pillars"&&this.coinLine(n,n.s0+8,n.s1-8,()=>0,5),e==="statue"&&(n.side=i.sign()),this.vDesign=In(this.vDesign,r),this.end(n)}templeStart(){let t=this.begin("temple");for(let e=0;e<70;e++)this.emit({hw:e<30?6.5:se(6.5,4.4,ye(30,70,e)),grade:0,edgeL:Bt.WALL,edgeR:Bt.WALL,surf:e<50?te.STONE:te.DIRT});return this.vDesign=18,t.valid=!0,this.end(t)}nextSetPiece(){if(this.forced){let t=this.forced;return this.forced=null,t}if(!this.bag.length){this.bag=Rh.slice();for(let t=this.bag.length-1;t>0;t--){let e=this.rng.int(0,t);[this.bag[t],this.bag[e]]=[this.bag[e],this.bag[t]]}}return this.bag.pop()}emitSetPiece(t,e){switch(t){case"bridgeCollapse":{let i=this.bridge(e,!0);return i.set={type:t},i}case"croc":{let i=this.ford(e,!0);return i.set={type:t},i}case"waterfall":{let i=this.gap(e,!0);return i.set={type:t},i}default:{let i=this.colonnade(e,t);return i.set={type:t},i}}}generateNext(){let t=this.s,e=Mt(t/4500,0,1),i=this.rng;if(this.track.count===0)return this.templeStart();let n=this.pieces.length;if(t>=this.nextSet||this.forced){let o=this.nextSetPiece();this.straight(e,24);let l=this.emitSetPiece(o,e);return this.nextSet=t+se(400,230,e)+i.range(-40,60),this.straight(e,22),this._check(n),l}this.sinceGap++;let r=i.weighted([{w:3,v:"straight"},{w:4,v:"curve"},{w:1.5+e*2,v:"sbend"},{w:.7+e*1.4,v:"hairpin"},{w:1.6,v:"crest"},{w:this.sinceGap>2?1.5+e*1.5:0,v:"gap"},{w:1.1,v:"bridge"},{w:this.lastType==="fork"?0:.9+e*.4,v:"fork"},{w:.7,v:"ford"}]),a=this[r](e);return this._check(n),a}_check(t){for(let e=t;e<this.pieces.length;e++){let i=this.pieces[e],n=[];for(let r=i.i0;r<=i.i1;r++)n.push(this.track.get(r));i.valid=this.val.checkSamples(n)}}ensure(t){let e=0;for(;this.s<t&&e<50;)this.generateNext(),e++;return e}};var Ot={};function Gi(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function qe(s,t=!0,e=!0){let i=new Xa(s);return t&&(i.wrapS=i.wrapT=mr),i.anisotropy=4,e&&(i.colorSpace=Je),i.needsUpdate=!0,i}function Wv(s,t,e){let i=new Me(e),n=new Float32Array(t*t);for(let a=0;a<n.length;a++)n[a]=i.next();let r=new Float32Array(s*s);for(let a=0;a<s;a++)for(let o=0;o<s;o++){let l=o/s*t,c=a/s*t,h=Math.floor(l),u=Math.floor(c),f=l-h,d=c-u,m=f*f*(3-2*f),x=d*d*(3-2*d),g=n[u%t*t+h%t],p=n[u%t*t+(h+1)%t],M=n[(u+1)%t*t+h%t],y=n[(u+1)%t*t+(h+1)%t];r[a*s+o]=(g+(p-g)*m)*(1-x)+(M+(y-M)*m)*x}return r}function Ve(s,t,e=5,i=4){let n=new Float32Array(s*s),r=.5,a=0;for(let o=0;o<e;o++){let l=Wv(s,i<<o,t+o*31);for(let c=0;c<n.length;c++)n[c]+=l[c]*r;a+=r,r*=.5}for(let o=0;o<n.length;o++)n[o]/=a;return n}function yi(s,t){let e=Gi(s,s),i=e.getContext("2d"),n=i.createImageData(s,s),r=n.data;for(let a=0;a<s;a++)for(let o=0;o<s;o++){let l=a*s+o,c=t(o,a,l);r[l*4]=c[0],r[l*4+1]=c[1],r[l*4+2]=c[2],r[l*4+3]=c[3]??255}return i.putImageData(n,0,0),e}var Ph=(s,t,e)=>s+(t-s)*e,Ae=(s,t,e)=>[Ph(s[0],t[0],e),Ph(s[1],t[1],e),Ph(s[2],t[2],e)],Di=s=>s<0?0:s>1?1:s;function Vd(){if(Ot.dirt)return Ot.dirt;let s=512,t=Ve(s,11,6,4),e=Ve(s,77,3,16),i=yi(s,(n,r,a)=>{let o=n/s,l=Math.exp(-Math.pow((o-.3)/.05,2))+Math.exp(-Math.pow((o-.7)/.05,2)),c=e[a]>.72?(e[a]-.72)*3:0,h=Ae([128,96,64],[92,70,46],t[a]);h=Ae(h,[70,52,36],l*.55),h=Ae(h,[168,150,120],c);let u=Di((Math.abs(o-.5)-.38)*9+(t[a]-.5)*2);return h=Ae(h,[72,92,40],u*.85),h});return Ot.dirt=qe(i)}function Gd(){if(Ot.stone)return Ot.stone;let s=512,t=Ve(s,5,5,4),e=Ve(s,9,4,8),i=new Me(3),n=Gi(s,s),r=n.getContext("2d"),a=yi(s,(l,c,h)=>{let u=t[h],f=Ae([118,110,92],[86,82,70],u);return f=Ae(f,[64,86,44],Di((e[h]-.55)*3)),f});r.drawImage(a,0,0),r.strokeStyle="rgba(30,26,20,0.85)",r.lineWidth=5;let o=6;for(let l=0;l<o;l++){let c=l*s/o;r.beginPath(),r.moveTo(0,c),r.lineTo(s,c),r.stroke();let h=l%2*.5;for(let u=0;u<4;u++){let f=(u+h)/4*s+i.range(-10,10);r.beginPath(),r.moveTo(f,c),r.lineTo(f,c+s/o),r.stroke()}}r.strokeStyle="rgba(90,120,50,0.5)",r.lineWidth=2;for(let l=0;l<140;l++){r.beginPath();let c=i.range(0,s),h=i.range(0,s);r.moveTo(c,h),r.lineTo(c+i.range(-6,6),h+i.range(-6,6)),r.stroke()}return Ot.stone=qe(n)}function Wd(){if(Ot.ground)return Ot.ground;let s=512,t=Ve(s,21,6,4),e=Ve(s,41,4,12),i=yi(s,(n,r,a)=>{let o=Ae([56,74,30],[92,98,40],t[a]);o=Ae(o,[86,66,40],Di((e[a]-.55)*4)),o=Ae(o,[118,128,56],Di((t[a]-.7)*5)*.5);let l=e[a]>.68?.4:0;return o=Ae(o,[130,90,40],l*.5),o});return Ot.ground=qe(i)}function qs(){if(Ot.rock)return Ot.rock;let s=512,t=Ve(s,61,6,3),e=Ve(s,62,4,10),i=yi(s,(n,r,a)=>{let o=.5+.5*Math.sin(r/s*Math.PI*14+t[a]*6),l=Ae([92,84,72],[140,128,108],t[a]*.7+o*.3);return l=Ae(l,[58,84,40],Di((e[a]-.6)*3.5)*.8),l=Ae(l,[40,36,30],Di((.3-t[a])*4)),l});return Ot.rock=qe(i)}function Ys(){if(Ot.ruin)return Ot.ruin;let s=512,t=Ve(s,71,6,4),e=Ve(s,72,5,6),i=new Me(9),n=yi(s,(o,l,c)=>{let h=Ae([150,138,112],[104,98,84],t[c]);return h=Ae(h,[70,96,44],Di((e[c]-.5)*3)*.9),h}),r=Gi(s,s),a=r.getContext("2d");a.drawImage(n,0,0),a.strokeStyle="rgba(36,30,22,0.8)",a.lineWidth=4;for(let o=0;o<=4;o++){let l=o*s/4;a.beginPath(),a.moveTo(0,l),a.lineTo(s,l),a.stroke();for(let c=0;c<3;c++){let h=(c+o%2*.5)/3*s;a.beginPath(),a.moveTo(h,l),a.lineTo(h,l+s/4),a.stroke()}}a.strokeStyle="rgba(40,34,26,0.55)",a.lineWidth=3;for(let o=0;o<10;o++){let l=i.range(20,s-60),c=i.range(20,s-60),h=i.range(18,34);a.strokeRect(l,c,h,h),a.beginPath(),a.arc(l+h/2,c+h/2,h/4,0,Math.PI*2),a.stroke()}return Ot.ruin=qe(r)}function Xd(){if(Ot.planks)return Ot.planks;let s=256,t=Ve(s,81,4,4),e=yi(s,(i,n,r)=>{let a=.5+.5*Math.sin(n*.35+t[r]*10),o=Ae([118,82,48],[78,54,32],a*.6+t[r]*.4);return(i<4||i>s-4)&&(o=[40,28,18]),o});return Ot.planks=qe(e)}function qd(){if(Ot.crate)return Ot.crate;let s=256,t=Ve(s,91,4,4),e=Gi(s,s),i=e.getContext("2d");return i.drawImage(yi(s,(n,r,a)=>{let o=.5+.5*Math.sin(n*.25+t[a]*8);return Ae([168,124,72],[118,82,46],o*.5+t[a]*.5)}),0,0),i.strokeStyle="#3a2614",i.lineWidth=10,i.strokeRect(5,5,s-10,s-10),i.lineWidth=12,i.beginPath(),i.moveTo(10,10),i.lineTo(s-10,s-10),i.stroke(),i.fillStyle="rgba(40,24,12,0.7)",i.font="bold 30px serif",i.textAlign="center",i.fillText("FRAGILE",s/2,s/2+60),Ot.crate=qe(e,!1)}function Ih(s=[74,88,52]){let t="paint"+s.join();if(Ot[t])return Ot[t];let e=512,i=Ve(e,101,5,4),n=new Me(5),r=Ve(e,102,4,16),a=Gi(e,e),o=a.getContext("2d");o.drawImage(yi(e,(l,c,h)=>{let u=Ae(s,s.map(f=>f*.7),i[h]);return u=Ae(u,[120,66,34],Di((r[h]-.74)*6)),u=Ae(u,[150,130,100],Di((i[h]-.72)*4)*.5),u}),0,0),o.strokeStyle="rgba(200,190,160,0.35)",o.lineWidth=1;for(let l=0;l<220;l++){let c=n.range(0,e),h=n.range(0,e),u=n.range(0,6.28),f=n.range(4,26);o.beginPath(),o.moveTo(c,h),o.lineTo(c+Math.cos(u)*f,h+Math.sin(u)*f),o.stroke()}return Ot[t]=qe(a)}function Yd(){if(Ot.leather)return Ot.leather;let s=256,t=Ve(s,111,5,8);return Ot.leather=qe(yi(s,(e,i,n)=>Ae([92,52,28],[140,86,44],t[n])))}function $d(){if(Ot.tire)return Ot.tire;let s=Gi(256,64),t=s.getContext("2d");t.fillStyle="#1d1a17",t.fillRect(0,0,256,64),t.fillStyle="#0c0b0a";for(let e=0;e<16;e++){let i=e*16;t.beginPath(),t.moveTo(i,0),t.lineTo(i+9,0),t.lineTo(i+3,30),t.lineTo(i+9,64),t.lineTo(i,64),t.lineTo(i-6,30),t.fill()}t.fillStyle="rgba(110,80,50,0.35)";for(let e=0;e<300;e++)t.fillRect(Math.random()*256,Math.random()*64,2,2);return Ot.tire=qe(s)}function wo(s="broad"){let t="leaf"+s;if(Ot[t])return Ot[t];let e=256,i=Gi(e,e),n=i.getContext("2d"),r=new Me(s.length*13),a=["#2f5a1e","#3d6e24","#4e7d2a","#27491a","#5d8a30"];if(s==="frond"){n.strokeStyle="#3a5a20",n.lineWidth=4,n.beginPath(),n.moveTo(e/2,e),n.lineTo(e/2,0),n.stroke();for(let l=0;l<26;l++){let c=e-l*(e/26),h=Math.sin(l/26*Math.PI)*e*.48+10;for(let u of[-1,1])n.fillStyle=a[r.int(0,4)],n.beginPath(),n.moveTo(e/2,c),n.quadraticCurveTo(e/2+u*h*.6,c-18,e/2+u*h,c-30),n.quadraticCurveTo(e/2+u*h*.5,c-8,e/2,c-6),n.fill()}}else if(s==="vine")for(let l=0;l<6;l++){let c=r.range(20,e-20);n.strokeStyle="#3b4f1c",n.lineWidth=3,n.beginPath(),n.moveTo(c,0);for(let h=0;h<e;h+=16)n.lineTo(c+Math.sin(h*.05+l)*8,h);n.stroke();for(let h=8;h<e*r.range(.6,1);h+=10)n.fillStyle=a[r.int(0,4)],n.beginPath(),n.ellipse(c+Math.sin(h*.05+l)*8+r.range(-8,8),h,7,4,r.range(0,3),0,6.3),n.fill()}else for(let l=0;l<70;l++){let c=r.range(30,e-30),h=r.range(30,e-30),u=r.range(0,6.28),f=r.range(18,40);n.save(),n.translate(c,h),n.rotate(u),n.fillStyle=a[r.int(0,4)],n.beginPath(),n.moveTo(0,-f),n.quadraticCurveTo(f*.55,0,0,f),n.quadraticCurveTo(-f*.55,0,0,-f),n.fill(),n.strokeStyle="rgba(160,190,90,0.35)",n.lineWidth=1.2,n.beginPath(),n.moveTo(0,-f),n.lineTo(0,f),n.stroke(),n.restore()}let o=qe(i,!1);return Ot[t]=o}function Zd(){if(Ot.bark)return Ot.bark;let s=256,t=Ve(s,131,5,4);return Ot.bark=qe(yi(s,(e,i,n)=>{let r=.5+.5*Math.sin(e/s*Math.PI*18+t[n]*5),a=Ae([62,50,36],[104,88,66],r*.6+t[n]*.4);return a=Ae(a,[70,96,44],Di((t[n]-.6)*3)),a}))}function Jd(){if(Ot.wn)return Ot.wn;let s=256,t=Ve(s,141,4,6),e=yi(s,(i,n,r)=>{let a=t[n*s+(i+1)%s]-t[r],o=t[(n+1)%s*s+i]-t[r];return[128+a*900,128+o*900,255]});return Ot.wn=qe(e,!0,!1)}function Eo(){if(Ot.streak)return Ot.streak;let s=256,t=Ve(s,151,4,8),e=yi(s,(i,n,r)=>{let a=t[n%s*s+i],o=Math.pow(Di(.4+.5*Math.sin(i*.4+t[i]*30)+a*.4),2);return[210+o*45,230+o*25,240,90+o*160]});return Ot.streak=qe(e,!0)}function is(){if(Ot.dot)return Ot.dot;let s=Gi(64,64),t=s.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Ot.dot=qe(s,!1)}function Kd(){if(Ot.shaft)return Ot.shaft;let s=Gi(128,256),t=s.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"rgba(255,230,170,0.9)"),e.addColorStop(1,"rgba(255,230,170,0)"),t.fillStyle=e,t.fillRect(0,0,128,256);let i=t.createLinearGradient(0,0,128,0);return i.addColorStop(0,"rgba(0,0,0,1)"),i.addColorStop(.5,"rgba(0,0,0,0)"),i.addColorStop(1,"rgba(0,0,0,1)"),t.globalCompositeOperation="destination-out",t.fillStyle=i,t.fillRect(0,0,128,256),Ot.shaft=qe(s,!1)}function Qd(s){let t="glyph"+s;if(Ot[t])return Ot[t];let e=Gi(256,256),i=e.getContext("2d");if(i.drawImage(Ys().image,0,0,256,256),i.lineWidth=12,i.lineCap="round",s==="safe"){i.strokeStyle="#e8c35a",i.fillStyle="#e8c35a",i.beginPath(),i.arc(128,128,38,0,6.3),i.fill();for(let n=0;n<12;n++){let r=n/12*6.283;i.beginPath(),i.moveTo(128+Math.cos(r)*56,128+Math.sin(r)*56),i.lineTo(128+Math.cos(r)*86,128+Math.sin(r)*86),i.stroke()}}else i.fillStyle="#d8462b",i.beginPath(),i.moveTo(128,30),i.lineTo(226,210),i.lineTo(30,210),i.closePath(),i.fill(),i.fillStyle="#1c140e",i.beginPath(),i.arc(128,132,34,0,6.3),i.fill(),i.fillRect(108,150,40,30),i.fillStyle="#d8462b",i.beginPath(),i.arc(114,128,9,0,6.3),i.arc(142,128,9,0,6.3),i.fill();return Ot[t]=qe(e,!1)}function oi(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new fe,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=jd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][f]);let m=jd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function jd(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new oe(a,e,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){let x=h.getComponent(f,m);o.setComponent(f+u,m,x)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}function Lh(s,t,e=.35){return s.onBeforeCompile=i=>{i.uniforms.uTime=t,i.vertexShader=`uniform float uTime;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
      #else
        vec3 ip = vec3(0.0);
      #endif
      float sway = max(position.y, 0.0) * ${e.toFixed(3)} * 0.08;
      transformed.x += sin(uTime * 1.3 + ip.x * 0.37 + ip.z * 0.11 + position.y * 0.4) * sway;
      transformed.z += cos(uTime * 1.1 + ip.z * 0.29 + position.x * 0.5) * sway * 0.7;`)},s.customProgramCacheKey=()=>"wind"+e,s}function To(s,t){let e=s.attributes.position.count,i=new Float32Array(e*3);for(let n=0;n<e;n++)i[n*3]=t.r,i[n*3+1]=t.g,i[n*3+2]=t.b;return s.setAttribute("color",new oe(i,3)),s}function tf(s,t,e="x"){let i=s.attributes.position;for(let n=0;n<i.count;n++){let r=i.getY(n);i.setX(n,i.getX(n)+(e==="x"?t*r*r:0)),i.setZ(n,i.getZ(n)+(e==="z"?t*r*r:0))}return s.computeVertexNormals(),s}function Ao(s,t,e){let i=new Me(e),n=s.attributes.position,r=new Map;for(let a=0;a<n.count;a++){let o=`${n.getX(a).toFixed(3)},${n.getY(a).toFixed(3)},${n.getZ(a).toFixed(3)}`,l=r.get(o);l||(l=[i.range(-t,t),i.range(-t,t),i.range(-t,t)],r.set(o,l)),n.setXYZ(a,n.getX(a)+l[0],n.getY(a)+l[1],n.getZ(a)+l[2])}return s.computeVertexNormals(),s}function ef(s,t,e=0){let i=new De(s,t,1,3);return i.translate(0,t/2+e,0),i}function nf(s){let t={},e=Lh(new Rt({map:wo("broad"),alphaTest:.45,side:Ce,roughness:.85,vertexColors:!0}),s,.5),i=Lh(new Rt({map:wo("frond"),alphaTest:.4,side:Ce,roughness:.8,vertexColors:!0}),s,.7),n=Lh(new Rt({map:wo("vine"),alphaTest:.4,side:Ce,roughness:.9}),s,.9),r=new Rt({map:Zd(),roughness:.95}),a=new Rt({map:Ys(),roughness:.92}),o=new Rt({map:qs(),roughness:.9,flatShading:!1}),l=new At(1,1,1);{let c=new Me(1),h=[],u=new le(.35,.75,16,9,6);u.translate(0,8,0),tf(u,.006),h.push(u);for(let d=0;d<4;d++){let m=new Ri(.5,2.4,4);m.translate(0,1,0),m.rotateY(d*1.57),m.translate(Math.cos(d*1.57)*.5,0,Math.sin(d*1.57)*.5),h.push(m)}t.treeTrunk={geo:oi(h.map(d=>d.toNonIndexed?d.toNonIndexed():d)),mat:r};let f=[];for(let d=0;d<14;d++){let m=ef(c.range(4,6.5),c.range(3.5,5));m.rotateX(-c.range(.6,1.3)),m.rotateY(c.range(0,6.28)),m.translate(c.range(-2.5,2.5),c.range(13,18),c.range(-2.5,2.5)),To(m,new At().setHSL(.24+c.range(-.03,.03),.5,c.range(.32,.5))),f.push(m)}t.treeCanopy={geo:oi(f),mat:e}}{let c=new Me(2),h=[],u=new le(.2,.34,9,7,8);u.translate(0,4.5,0),tf(u,.03),t.palmTrunk={geo:u,mat:r};for(let f=0;f<9;f++){let d=new De(1.3,5.2,1,6);d.translate(0,2.6,0);let m=d.attributes.position;for(let x=0;x<m.count;x++){let g=m.getY(x);m.setZ(x,-g*g*.07)}d.rotateX(-1.1),d.rotateY(f/9*6.28+c.range(-.2,.2)),d.translate(.03*81,9,0),To(d,new At().setHSL(.22+c.range(-.03,.03),.55,c.range(.32,.45))),h.push(d)}t.palmLeaves={geo:oi(h),mat:i}}{let c=new Me(3),h=[];for(let f=0;f<9;f++){let d=new De(.9,2.6,1,4);d.translate(0,1.3,0);let m=d.attributes.position;for(let x=0;x<m.count;x++){let g=m.getY(x);m.setZ(x,-g*g*.12)}d.rotateY(f/9*6.28+c.range(-.3,.3)),To(d,new At().setHSL(.25+c.range(-.04,.03),.55,c.range(.28,.42))),h.push(d)}t.fern={geo:oi(h),mat:i};let u=[];for(let f=0;f<7;f++){let d=ef(c.range(2,3),c.range(1.6,2.4),-.3);d.rotateY(f*.9),d.rotateX(c.range(-.3,.3)),To(d,new At().setHSL(.23+c.range(-.03,.03),.5,c.range(.25,.4))),u.push(d)}t.bush={geo:oi(u),mat:e}}{let c=[];for(let h=0;h<3;h++){let u=new De(3,7,1,4);u.translate(h-1,-3.5,h*.3),c.push(u)}t.vines={geo:oi(c),mat:n}}{let c=new Et(2.2,1.3,1.4,2,2,2);Ao(c,.06,4),t.block={geo:c,mat:a}}{let c=[new le(.62,.66,5.5,12,3).translate(0,2.75,0),new Et(1.8,.5,1.8).translate(0,.25,0),new le(.85,.66,.5,12).translate(0,5.6,0)];t.column={geo:Ao(oi(c.map(h=>h.toNonIndexed())),.03,5),mat:a}}{let c=[new Et(2.4,3,2.2,3,3,3),new Et(2.8,.5,.6).translate(0,.45,1.1),new Et(.6,1.1,.7).translate(0,-.2,1.3),new Et(1.6,.35,.4).translate(0,-.95,1.15),new Et(.5,.35,.3).translate(-.6,0,1.15),new Et(.5,.35,.3).translate(.6,0,1.15),new Et(3,.7,2.6).translate(0,1.7,0)];t.head={geo:Ao(oi(c.map(h=>h.toNonIndexed())),.05,6).translate(0,1.5,0),mat:a}}{let c=new ja(1.2,1);Ao(c,.28,7),c.scale(1.3,.8,1.1),t.rock={geo:c,mat:o}}{let c=new le(.12,.16,1.9,6).translate(0,.95,0);t.post={geo:c,mat:new Rt({color:"#5a4630",roughness:.9})}}return t.mats={leafBroad:e,leafFrond:i,vineMat:n,bark:r,ruin:a,rock:o},t}var Fe=class{constructor(t,e,i,n={}){this.mesh=new Ga(e.geo,e.mat,i),this.mesh.instanceMatrix.setUsage(Ii),this.mesh.castShadow=!!n.shadow,this.mesh.receiveShadow=n.receive!==!1,this.mesh.frustumCulled=!1,this.cap=i,this.free=[];for(let a=i-1;a>=0;a--)this.free.push(a);let r=new Qt().makeScale(0,0,0);for(let a=0;a<i;a++)this.mesh.setMatrixAt(a,r);n.color&&(this.mesh.instanceColor=new $n(new Float32Array(i*3).fill(1),3)),this.zero=r,this.dirty=!0,this.used=0,this.alive=new Uint8Array(i),this.hi=0,this.mesh.count=0,t.add(this.mesh)}add(t,e){let i=this.free.pop();return i===void 0?-1:(this.mesh.setMatrixAt(i,t),e&&this.mesh.instanceColor&&this.mesh.setColorAt(i,e),this.alive[i]=1,i>=this.hi&&(this.hi=i+1),this.dirty=!0,this.used++,i)}set(t,e){t>=0&&(this.mesh.setMatrixAt(t,e),this.dirty=!0)}release(t){if(!(t<0)){for(this.mesh.setMatrixAt(t,this.zero),this.free.push(t),this.alive[t]=0;this.hi>0&&!this.alive[this.hi-1];)this.hi--;this.dirty=!0,this.used--}}flush(){this.dirty&&(this.mesh.count=this.hi,this.free.sort((t,e)=>e-t),this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.dirty=!1)}};var Ro=new Qt,Co=new Ee,sf=new ai,Po=new T,rf=new T,Nr={};function ns(){return Nr.m||(Nr.m={ruin:new Rt({map:Ys(),roughness:.9}),rock:new Rt({map:qs(),roughness:.92}),metal:new Rt({color:"#8a8478",metalness:.85,roughness:.38}),rust:new Rt({color:"#6e4a30",metalness:.5,roughness:.7}),croc:new Rt({color:"#3f4a2a",roughness:.65,metalness:.05}),crocBelly:new Rt({color:"#8d8a5a",roughness:.7}),eye:new Rt({color:"#e6c440",emissive:"#a07a10",emissiveIntensity:.8}),flame:new Tn({map:is(),color:"#ffb050",blending:si,transparent:!0,depthWrite:!1}),water:new He({map:Eo(),transparent:!0,depthWrite:!1,side:Ce,opacity:.85,color:"#e8f4f0"}),mist:new Tn({map:is(),color:"#e8f0ea",transparent:!0,depthWrite:!1,opacity:.35}),spike:new Rt({color:"#6b6355",metalness:.6,roughness:.5}),gold:new Rt({color:"#d8b04a",metalness:1,roughness:.3,emissive:"#3a2a04"})},Nr.m.water.map.repeat.set(2,1)),Nr.m}function Ln(s,t){return{p:s,ctx:t,obstacles:[],objs:[],t:0,done:!1,hits:0,add(e){return t.scene.add(e),this.objs.push(e),e},dispose(){for(let e of this.objs)t.scene.remove(e);this.objs.length=0,this.obstacles.length=0},finish(e,i){this.done||(this.done=!0,kt.emit("setpiece",{type:s.set?s.set.type:s.type,ok:e,label:i}))}}}var ke=(s,t,e,i={x:0,y:0,z:0})=>s.pointAt(t,e,i);function Xv(s,t){let e=Ln(s,t),i=t.track,n=t.builder.pools.plank,r=-1,a=!1,o=13.5;return e.update=(l,c)=>{if(!a&&c>s.s0+3&&(a=!0,r=s.s0-4,kt.emit("bark",{who:"penny",text:"Dusty, the planks are going!"}),kt.emit("sfx",{name:"crack"})),!!a){o=Math.min(o+l*.9,19),r=Math.min(r+o*l,c+30),r>s.s1+2&&!e.done&&e.finish(c>s.s1,"Bridge Crossed");for(let h of s.planks){if(!h.fallen&&h.i+.5<r){h.fallen=!0,h.vy=-se(1,4,Math.random()),h.rx=(Math.random()-.5)*4,h.rz=(Math.random()-.5)*6,h.ry=0,h.px=h.x,h.py=h.y,h.pz=h.z,h.a=h.pitch,h.b=0;let u=i.get(h.i);u.hole=!0,Math.random()<.2&&kt.emit("fx",{kind:"splinter",x:h.x,y:h.y,z:h.z,n:6})}if(h.fallen&&h.py>s.floorY-5&&(h.vy-=18*l,h.py+=h.vy*l,h.a+=h.rx*l,h.b+=h.rz*l,Co.setFromEuler(sf.set(h.a,h.th,h.b,"YXZ")),Po.set(1,1,1),Ro.compose(rf.set(h.px,h.py,h.pz),Co,Po),n.set(h.slot,Ro)),!h.fallen&&Math.abs(h.i-c)<14){let u=Math.sin(ie.time*9+h.i)*.03*(1-Math.abs(h.i-c)/14);Co.setFromEuler(sf.set(h.pitch,h.th,u,"YXZ")),Po.set(1,1,1),Ro.compose(rf.set(h.x,h.y+u,h.z),Co,Po),n.set(h.slot,Ro)}}r>s.s0&&r<s.s1&&kt.emit("shake",{amount:.08});for(let h of[s.rope0,s.rope1])h&&r>(s.s0+s.s1)/2&&(h.position.y-=l*6*ye(s.s0,s.s1,r),h.rotation.z+=l*.02)}},e}function qv(s,t){let e=Ln(s,t),i=t.track,n=ns(),r=new Me(s.seed),a=t.lib.column.geo,o=[],l=5,c=s.s1-s.s0;for(let h=0;h<l;h++){let u=s.s0+18+h*(c-30)/(l-1),f=h%2?1:-1,d=i.sampleAtS(u),m=d.hw,x=m+1.2,g=new ae,p=new Tt(a,n.ruin);p.userData.shared=!0,p.castShadow=!0,p.scale.set(1.05,x/6.1,1.05),g.add(p);let M=ke(i,u,f*(m+.9));g.position.set(M.x,M.y-.1,M.z),g.rotation.order="YXZ",g.rotation.y=d.th,e.add(g),o.push({g,s:u,side:f,a:d,ang:0,w:0,state:0,length:x,ob:null,bp:M})}return e.apLat=h=>{let u=p=>-p.side*(p.a.hw*.5+.2),f=o.findIndex(p=>p.s>h);if(f<0)return u(o[o.length-1]);if(f===0)return u(o[0]);let d=o[f-1],m=o[f],x=(h-d.s)/(m.s-d.s),g=x<.3?0:x>.85?1:(1-Math.cos((x-.3)/.55*Math.PI))/2;return u(d)+(u(m)-u(d))*g},e.update=(h,u)=>{let f=Math.max(ie.car?ie.car.speed:20,12);for(let d of o)if(d.state===0&&d.s-u<f*1.55+8&&(d.state=1,kt.emit("sfx",{name:"crack"})),d.state===1){if(d.w+=(3.2+Math.sin(d.ang)*9)*h,d.ang+=d.w*h,d.ang>=Math.PI/2){d.ang=Math.PI/2-.04,d.state=2;let m=ke(i,d.s+.8,d.side*(d.a.hw+.9-d.length));if(d.ob={x:d.bp.x,z:d.bp.z,x2:m.x,z2:m.z,r:.78,yMin:d.bp.y-1,yMax:d.bp.y+1.5,active:!0,solid:!0,bounce:.25,onHit:(x,g,p,M)=>{(M||0)>4&&(x.damage(6+(M||0)*.9,"pillar"),e.hits++,kt.emit("crash",{}))}},e.obstacles.push(d.ob),kt.emit("fx",{kind:"dust",x:(d.bp.x+m.x)/2,y:d.bp.y+.5,z:(d.bp.z+m.z)/2,n:18,spread:d.length/2}),kt.emit("shake",{amount:.6,at:d.bp}),kt.emit("sfx",{name:"slam"}),ie.car&&Math.abs(u-d.s)<2.2){let x=ie.carLat,g=d.side*(d.a.hw+.9),p=g-d.side*d.length;(x-p)*(x-g)<0&&(ie.car.damage(22,"pillar"),kt.emit("crash",{}),e.hits++)}}d.g.rotation.z=-d.side*d.ang}!e.done&&u>s.s1-4&&e.finish(e.hits===0,e.hits===0?"Pillar Slalom!":"Pillars Survived")},e}function Yv(s){let t=new ae,e=new Tt(new ln(.42,2.6,4,10).rotateX(Math.PI/2).scale(1.15,.62,1),s.croc);t.add(e);let i=new Tt(new Ri(.36,2.4,8).rotateX(-Math.PI/2).scale(1,.5,1),s.croc);i.position.z=-2.4,t.add(i);let n=new Tt(new Et(.5,.18,1.3).translate(0,.06,.65),s.croc),r=new Tt(new Et(.46,.14,1.25).translate(0,-.06,.62),s.crocBelly),a=new ae;a.position.set(0,.05,1.65),a.add(n,r),t.add(a);for(let o of[-.17,.17]){let l=new Tt(new Vi(.08,8,6),s.eye);l.position.set(o,.2,.25),a.add(l)}for(let o=0;o<9;o++){let l=new Tt(new Ri(.07,.18,4),s.croc);l.position.set(0,.3,1-o*.42),t.add(l)}return t.userData={jawU:n,jawL:r,tail:i},t}function $v(s,t){let e=Ln(s,t),i=t.track,n=ns(),r=new Me(s.seed),a=[];for(let c=0;c<6;c++){let h=s.s0+10+c*(s.s1-s.s0-20)/5+r.range(-3,3),u=r.sign(),f=i.sampleAtS(h),d=Yv(n),m=u*(f.hw+r.range(3,9)),x=ke(i,h,m);d.position.set(x.x,s.waterY-.12,x.z),d.rotation.y=f.th+(u>0?-1:1)*Math.PI/2+r.range(-.4,.4),d.traverse(p=>p.castShadow=!1),e.add(d);let g={g:d,s:h,lat:m,side:u,a:f,snap:0,bitten:!1,ph:r.range(0,6)};g.ob={x:x.x,z:x.z,r:.75,yMin:s.waterY-1,yMax:s.waterY+.4,active:!0,solid:!0,bounce:.4,onHit:p=>{p.damage(5,"croc")}},e.obstacles.push(g.ob),a.push(g)}let o=0,l=!1;return e.update=(c,h)=>{e.t+=c;let u=h>s.s0+6&&h<s.s1-6,f=ie.car?ie.car.speed:0;u&&!l&&(l=!0,kt.emit("bark",{who:"penny",text:"Crocodiles! Keep it moving!"})),u&&f<9?o+=c:o=Math.max(0,o-c);for(let d of a){let m=d.s-h;if(Math.abs(m)<26){let g=Mt(ie.carLat+d.side*2.2,-d.a.hw-4,d.a.hw+4);d.lat+=Mt(g-d.lat,-3.5*c,3.5*c)}let x=ke(i,d.s,d.lat);if(d.g.position.x=x.x,d.g.position.z=x.z,d.g.position.y=s.waterY-.14+Math.sin(e.t*2+d.ph)*.04,d.ob.x=x.x,d.ob.z=x.z,d.g.userData.tail.rotation.y=Math.sin(e.t*4+d.ph)*.35,Math.abs(m)<5&&Math.abs(d.lat-ie.carLat)<3.6&&d.snap<=0&&(d.snap=.7,kt.emit("sfx",{name:"snap"}),f<11&&!d.bitten&&(d.bitten=!0,ie.car.damage(11,"croc"),e.hits++,kt.emit("bark",{who:"dusty",text:"Get off my tire, you overgrown handbag!"}),kt.emit("shake",{amount:.4}))),d.snap>0){d.snap-=c;let g=Math.sin((.7-d.snap)/.7*Math.PI)*.7;d.g.userData.jawU.rotation.x=-g,d.g.userData.jawL.rotation.x=g*.4}}o>1.4&&(o=0,ie.car.damage(9,"croc"),e.hits++,kt.emit("sfx",{name:"snap"}),kt.emit("shake",{amount:.35})),!e.done&&h>s.s1-3&&e.finish(e.hits===0,e.hits===0?"Crocodile Ford Cleared":"Ford Crossed")},e}function Zv(s,t){let e=Ln(s,t),i=t.track,n=ns(),r=(s.lipS+s.landS)/2,a=i.sampleAtS(r),o=ke(i,r,0),c=i.sampleAtS(s.lipS).y+15,h=oi([new Et(34,4,7).translate(0,0,0).toNonIndexed(),new Et(6,26,7).translate(-16,-13,0).toNonIndexed(),new Et(6,26,7).translate(16,-13,0).toNonIndexed()]),u=h.attributes.position;for(let L=0;L<u.count;L++){let E=u.getX(L),R=u.getY(L),I=u.getZ(L);u.setXYZ(L,E+Math.sin(R*.7+I)*.6,R+Math.sin(E*.5)*.7,I+Math.cos(E*.6+R)*.5)}h.computeVertexNormals();let f=new Tt(h,n.rock);f.position.set(o.x,c,o.z),f.rotation.y=a.th+Math.PI/2,f.castShadow=!0,e.add(f);let d=new Tt(new De(22,c-a.floorY+2,1,1),n.water);d.position.set(o.x,(c+a.floorY)/2,o.z),d.rotation.y=a.th+Math.PI/2,d.renderOrder=3,e.add(d);let m=d.clone();m.scale.set(.6,1.2,1);let x=ke(i,r+6,-24);m.position.set(x.x,d.position.y+4,x.z),m.rotation.y=a.th,e.add(m);let g=d.clone();g.scale.set(.5,1.1,1);let p=ke(i,r-4,26);g.position.set(p.x,d.position.y+2,p.z),g.rotation.y=a.th,e.add(g);let M=[];for(let L=0;L<14;L++){let E=new An(n.mist),R=ke(i,r+(Math.random()-.5)*14,(Math.random()-.5)*30);E.position.set(R.x,a.floorY+2+Math.random()*4,R.z),E.scale.setScalar(8+Math.random()*8),e.add(E),M.push(E)}let y=!1,v=!1;return e.update=(L,E)=>{e.t+=L,n.water.map.offset.y+=L*1.6*.15;for(let R of M)R.material.opacity=.25+Math.sin(e.t+R.position.x)*.08;if(!y&&E>r-1){y=!0;let R=ie.car;R&&!R.grounded&&(kt.emit("fx",{kind:"water",x:R.pos.x,y:R.pos.y+.5,z:R.pos.z,n:50}),R.mud=0,kt.emit("sfx",{name:"splash"}),kt.emit("bark",{who:"penny",text:"Well \u2014 that\u2019s one way to wash the car!"}))}!e.done&&E>s.landS+8&&ie.car&&ie.car.grounded&&e.finish(!0,"Waterfall Jump!")},e.slowmo={s:s.lipS+2},e}function Jv(s,t){let e=Ln(s,t),i=t.track,n=ns(),r=new Me(s.seed),a=s.s0+6,o=s.s1-6,l=Math.ceil(o-a)+1,c=11,h=[],u=[],f=[];for(let b=0;b<l;b++){let _=a+b,C=i.sampleAtS(_);for(let D=0;D<c;D++){let U=Math.PI*D/(c-1),z=-Math.cos(U)*(C.hw+1.1),q=Math.sin(U)*3.4+(D===0||D===c-1?0:3.2),O=ke(i,_,z);h.push(O.x,C.y-.3+q+(D===0||D===c-1,0),O.z),u.push(D/2,_/4)}}for(let b=0;b<l-1;b++)for(let _=0;_<c-1;_++){let C=b*c+_,D=C+c;f.push(C,D,C+1,C+1,D,D+1)}let d=new fe;d.setAttribute("position",new Zt(h,3)),d.setAttribute("uv",new Zt(u,2)),d.setIndex(f),d.computeVertexNormals();let m=n.tunnel||(n.tunnel=new Rt({map:Ys(),roughness:.95,side:Ce,color:"#b8a888"})),x=new Tt(d,m);x.castShadow=!0,x.receiveShadow=!0,e.add(x);for(let b of[a,o]){let _=i.sampleAtS(b),C=ke(i,b,0),D=new Tt(new Et(2*_.hw+6,2.2,1.6),n.ruin);D.position.set(C.x,_.y+7.2,C.z),D.rotation.y=_.th,D.castShadow=!0,e.add(D);for(let U of[-1,1]){let z=ke(i,b,U*(_.hw+2.2)),q=new Tt(new Et(2.2,8,1.8),n.ruin);q.position.set(z.x,_.y+3.5,z.z),q.rotation.y=_.th,e.add(q)}}let g=[];for(let b=a+4;b<o;b+=9)for(let _ of[-1,1]){let C=i.sampleAtS(b),D=ke(i,b,_*(C.hw+.7)),U=new An(n.flame);U.position.set(D.x,C.y+2.6,D.z),U.scale.setScalar(.9),e.add(U),g.push(U)}let p=new Hs("#ffa040",0,26,1.6);e.add(p);let M=new Sr;M.moveTo(-1.6,0),M.quadraticCurveTo(0,-1.25,1.6,0),M.quadraticCurveTo(0,-.45,-1.6,0);let y=new to(M,{depth:.08,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:1}).translate(0,0,-.04),v=new le(.07,.07,1,6).translate(0,-.5,0),L=[],E=5,R=5.1;for(let b=0;b<E;b++){let _=a+12+b*(o-a-22)/(E-1),C=i.sampleAtS(_),D=ke(i,_,0),U=new ae;U.position.set(D.x,C.y+6.6,D.z),U.rotation.order="YXZ",U.rotation.y=C.th;let z=new Tt(v,n.rust);z.scale.y=R,U.add(z);let q=new Tt(y,n.metal);q.position.y=-R,q.castShadow=!0,U.add(q),e.add(U);let O={pivot:U,s:_,a:C,ph:b*1.25+r.range(0,.5),per:r.range(2,2.5),amp:1.05,phi:0,cd:0};L.push(O)}let I=!1;return e.update=(b,_)=>{e.t+=b;for(let D of g)D.scale.setScalar(.8+Math.sin(e.t*23+D.position.x)*.12+Math.random()*.08);let C=_>a&&_<o;C&&!I&&(I=!0,kt.emit("bark",{who:"penny",text:"Blades! Time the swings \u2014 now!"})),ie.car&&(p.position.set(ie.car.pos.x,ie.car.pos.y+2.4,ie.car.pos.z),p.intensity=C?26+Math.sin(e.t*17)*4:0);for(let D of L){D.phi=Math.sin(e.t*Math.PI*2/D.per+D.ph)*D.amp,D.pivot.rotation.z=D.phi;let U=-Math.sin(D.phi)*R,z=6.6-Math.cos(D.phi)*R;if(D.cd>0&&(D.cd-=b),ie.car&&Math.abs(_-D.s)<1.7&&z<2.05&&Math.abs(U-ie.carLat)<1.9&&D.cd<=0){D.cd=.8,e.hits++;let q=Math.cos(e.t*Math.PI*2/D.per+D.ph)>0?-1:1,O=ie.car;O.vel.x+=D.a.rx*q*5,O.vel.z+=D.a.rz*q*5,O.w.y+=q*1.2,O.damage(13,"blade"),kt.emit("fx",{kind:"sparks",x:O.pos.x,y:O.pos.y+1,z:O.pos.z,n:30}),kt.emit("shake",{amount:.5}),kt.emit("sfx",{name:"clang"}),kt.emit("crash",{})}ie.car&&Math.abs(_-D.s)<5&&Math.abs(D.phi)<.12&&D.cd<=0&&(D.cd=.3,kt.emit("sfx",{name:"swoosh"}),Math.abs(_-D.s)<2.5&&!e.done&&kt.emit("style",{kind:"nearmiss",label:"Close shave!",pts:150}))}!e.done&&_>o&&e.finish(e.hits===0,e.hits===0?"Untouched by the Blades!":"Through the Blades")},e.tunnel={s0:a,s1:o},e}function Kv(s){let t=new ae,e=(r,a,o,l)=>{let c=new Tt(r,s.ruin);return c.position.set(a,o,l),c.castShadow=!0,t.add(c),c};e(new Et(5,3,4),0,1.5,0),e(new Et(3.6,5.5,2.6),0,5.8,0),e(new Et(4.6,1.2,2.8),0,8.4,0),e(new Et(1.1,4.6,1.1),-2.6,6,.4),e(new Et(1.1,4.6,1.1),2.6,6,.4),e(new Et(2.4,2.8,2.4),0,10.4,0),e(new Et(3.4,1.4,2.8),0,12.3,0),e(new Et(.5,1.2,.5),0,13.5,0);let i=new Tt(new Et(1.6,.3,.2),s.gold);i.position.set(0,10.8,1.25),t.add(i);let n=new Tt(new le(.18,.18,11,6),s.rust);return n.position.set(2.6,7.5,1),t.add(n),t}function Qv(s,t){let e=Ln(s,t),i=t.track,n=ns(),r=(s.s0+s.s1)/2+6,a=i.sampleAtS(r),o=s.side,l=a.hw,c=1.2,h=13.8*c,u=o*(l+2),f=Kv(n);f.scale.setScalar(c),f.rotation.y=o*Math.PI/2;let d=ke(i,r,u),m=new ae;m.position.set(d.x,a.y-.2,d.z),m.add(f),m.rotation.order="YXZ",m.rotation.y=a.th,e.add(m);let x=-o*(l+.95),g=1.7,p=Math.asin(Mt(Math.abs(u-x)/h,0,.98))+.04,M=0,y=0,v=0;e.apLat=()=>-o*(l-1.8);let L=()=>{for(let E=1;E<=8;E++){let R=E/8,I=R*h,b=u-o*Math.sin(y)*I,_=a.y-.2+Math.cos(y)*I*.93+1.2,C=ke(i,r,b),D=1.7*c*(R>.7?.8:1);e.obstacles.push({x:C.x,z:C.z,r:1.3,yMin:_-D,yMax:_+D,active:!0,solid:!0,bounce:.2,onHit:(U,z,q,O)=>{(O||0)>4&&(U.damage(8+(O||0),"statue"),e.hits++,kt.emit("crash",{}))}})}};return e.update=(E,R)=>{let I=Math.max(ie.car?ie.car.speed:20,12);if(M===0&&r-R<I*2.4+18&&(M=1,kt.emit("bark",{who:"dusty",text:"That statue\u2019s coming down \u2014 hang on!"}),kt.emit("sfx",{name:"rumble"})),M===1){if(v+=(.45+Math.sin(y)*2.2)*E,y+=v*E,y>=p){y=p,M=2,kt.emit("shake",{amount:1.2}),kt.emit("sfx",{name:"slam"});let b=ke(i,r,x);kt.emit("fx",{kind:"dust",x:(d.x+b.x)/2,y:a.y+1,z:(d.z+b.z)/2,n:70,spread:8}),L();let _=ie.car;if(_&&Math.abs(R-r)<2.6){let C=!1;for(let D of e.obstacles)Math.hypot(_.pos.x-D.x,_.pos.z-D.z)<D.r+1&&_.pos.y+1.2>D.yMin&&(C=!0);C&&(_.damage(28,"statue"),e.hits++,kt.emit("crash",{}))}else _&&R>r&&R<r+16&&kt.emit("style",{kind:"nearmiss",label:"Under the Colossus!",pts:400})}m.rotation.z=-o*y}!e.done&&R>s.s1-4&&e.finish(e.hits===0,e.hits===0?"Colossus Dodged!":"Colossus Survived")},e}function af(s,t){let e=Ln(s,t),i=t.track,n=ns(),r=s.s0+26,a=i.sampleAtS(r);for(let c of[-1,1]){let h=c===s.danger?"danger":"safe",u=new Rt({map:Qd(h),roughness:.8,emissive:h==="danger"?"#401006":"#3a2c04",emissiveIntensity:.6}),f=new ae,d=new Tt(new Et(2.1,2.1,.3),u);d.position.y=3.2,f.add(d);let m=new Tt(new Et(.45,3,.45),n.ruin);m.position.y=1.5,f.add(m);let x=ke(i,r,c*(a.fork-a.hw-1.4));f.position.set(x.x,i.terrainY(a,0)-.3,x.z),f.rotation.y=a.th+Math.PI,f.rotation.z=0,d.castShadow=!0,e.add(f)}let o=[],l=oi(Array.from({length:9},(c,h)=>new Ri(.16,1.1,5).translate((h%3-1)*.55,.55,(Math.floor(h/3)-1)*.55)));for(let c of s.hazards){let h=ke(i,c.s,c.lat),u=i.sampleAtS(c.s),f=new Tt(l,n.spike);f.position.set(h.x,u.y-1.1,h.z),f.rotation.y=u.th,e.add(f);let d=new Tt(new Et(2,.05,2),new Rt({color:"#2a2014",roughness:1}));d.position.set(h.x,u.y+.03,h.z),d.rotation.y=u.th,e.add(d);let m={g:f,q:h,y0:u.y,ph:Math.random()*6,up:0};m.ob={x:h.x,z:h.z,r:.9,yMin:u.y-1,yMax:u.y+.9,active:!1,solid:!1,onHit:x=>{x.damage(9,"spikes"),x.vel.multiplyScalar(.8),kt.emit("fx",{kind:"sparks",x:x.pos.x,y:x.pos.y,z:x.pos.z,n:16}),kt.emit("sfx",{name:"clang"}),kt.emit("crash",{})}},e.obstacles.push(m.ob),o.push(m)}return e.update=(c,h)=>{e.t+=c;for(let u of o){let f=Math.sin(e.t*2.4+u.ph)>.1?1:0;u.up+=(f-u.up)*Math.min(1,c*14),u.g.position.y=u.y0-1.1+u.up*1.05,u.ob.active=u.up>.55,u.ob._hitCd&&(u.ob._hitCd=Math.max(0,u.ob._hitCd-c))}!e.announced&&h>s.s0-30&&(e.announced=!0,kt.emit("bark",{who:"penny",text:(s.danger>0?"Right":"Left")+" glyph says death\u2026 and treasure. Your call, Dusty."}))},e}function of(s,t){let e=Ln(s,t),i=t.track,n=ns(),r=i.get(s.i0+2),a=ke(i,r.s,0),o=new ae;o.position.set(a.x,r.y,a.z),o.rotation.y=r.th;let l=(f,d,m,x,g=n.ruin)=>{let p=new Tt(f,g);return p.position.set(d,m,x),p.castShadow=!0,p.receiveShadow=!0,o.add(p),p};for(let f=0;f<6;f++)l(new Et(44-f*6,4,26-f*3),0,2+f*4,-16-f*.5);l(new Et(10,6,8),0,27,-18),l(new Et(4,12,4),-8,6,-2.2),l(new Et(4,12,4),8,6,-2.2),l(new Et(22,3,4.5),0,13.2,-2.2);let c=l(new Et(6,5,1.2),0,17.2,-.6),h=l(new Et(3.6,.5,.3),0,17.8,.1,n.gold),u=[l(new Et(6,11.5,.8),-3,5.75,-2.6),l(new Et(6,11.5,.8),3,5.75,-2.6)];for(let f of[-1,1]){let d=new An(n.flame);d.position.set(f*6.3,3.4,1.5),d.scale.setScalar(1.3),o.add(d);let m=l(new le(.18,.25,3,6),f*6.3,1.5,1.5)}return e.add(o),e.update=f=>{if(e.t+=f,e.bursting)for(let d of u)d.userData.v=(d.userData.v||0)-18*f,d.position.z+=9*f,d.position.y=Math.max(.4,d.position.y+d.userData.v*f*.3),d.rotation.x=Math.min(1.5,d.rotation.x+f*3)},e.burst=()=>{e.bursting=!0,kt.emit("fx",{kind:"dust",x:a.x-r.fx*2,y:r.y+4,z:a.z-r.fz*2,n:80,spread:7}),kt.emit("shake",{amount:1.4}),kt.emit("sfx",{name:"slam"})},e.doorPos=new T(a.x-r.fx*6,r.y,a.z-r.fz*6),t.builder.templeGate=e,e}function lf(s,t){let e=s.set.type;return e==="bridgeCollapse"?Xv(s,t):e==="pillars"?qv(s,t):e==="croc"?$v(s,t):e==="waterfall"?Zv(s,t):e==="blades"?Jv(s,t):e==="statue"?Qv(s,t):{update(){},dispose(){},obstacles:[]}}var cf=210,Dh=19,Ui=new Qt,Dn=new Ee,Uh=new ai,Un=new T,Io=new T,li=new At,Fr=class{constructor(t,e,i,n={}){this.scene=t,this.mat=e,this.cols=i,this.free=[],this.opts=n,this.created=0}get(){let t=this.free.pop();if(!t){let e=new fe,i=cf*this.cols;e.setAttribute("position",new oe(new Float32Array(i*3),3).setUsage(Ii)),e.setAttribute("normal",new oe(new Float32Array(i*3),3).setUsage(Ii)),e.setAttribute("uv",new oe(new Float32Array(i*2),2).setUsage(Ii)),this.opts.color&&e.setAttribute("color",new oe(new Float32Array(i*3),3).setUsage(Ii));let n=[];for(let r=0;r<cf-1;r++)for(let a=0;a<this.cols-1;a++){let o=r*this.cols+a,l=o+this.cols;n.push(o,o+1,l,l,o+1,l+1)}e.setIndex(n),t=new Tt(e,this.mat),t.receiveShadow=!0,t.castShadow=!!this.opts.cast,t.frustumCulled=!0,this.created++}return this.scene.add(t),t}put(t){this.scene.remove(t),this.free.push(t)}},Lo=class{constructor(t,e,i,n,r){this.scene=t,this.track=e,this.gen=i,this.time=n,this.q=r;let a=this.lib=nf(n),o=Vd(),l=Gd(),c=Wd();this.mats={dirt:new Rt({map:o,roughness:.95}),stone:new Rt({map:l,roughness:.85}),terrain:new Rt({map:c,roughness:.97,vertexColors:!0}),plank:new Rt({map:Xd(),roughness:.8}),rope:new Rt({color:"#8b7348",roughness:1})},this.roadPools={dirt:new Fr(t,this.mats.dirt,7),stone:new Fr(t,this.mats.stone,7)},this.terrainPool=new Fr(t,this.mats.terrain,Dh,{color:!0});let h=r.foliage,u=r.shadows;this.pools={treeTrunk:new Fe(t,a.treeTrunk,Math.round(700*h)+60,{shadow:u}),treeCanopy:new Fe(t,a.treeCanopy,Math.round(700*h)+60,{shadow:u}),palmTrunk:new Fe(t,a.palmTrunk,Math.round(420*h)+40,{shadow:u}),palmLeaves:new Fe(t,a.palmLeaves,Math.round(420*h)+40,{shadow:u}),fern:new Fe(t,a.fern,Math.round(1500*h)+80,{}),bush:new Fe(t,a.bush,Math.round(900*h)+60,{}),vines:new Fe(t,a.vines,Math.round(260*h)+30,{}),block:new Fe(t,a.block,1400,{shadow:u,color:!0}),column:new Fe(t,a.column,260,{shadow:u}),head:new Fe(t,a.head,60,{shadow:u}),rock:new Fe(t,a.rock,900,{shadow:u,color:!0}),post:new Fe(t,a.post,500,{}),plank:new Fe(t,{geo:new Et(5.8,.12,.42),mat:this.mats.plank},1400,{shadow:u})},this._pickupMeshes(),this._waterMats(),this.shaftMat=new He({map:Kd(),transparent:!0,depthWrite:!1,blending:si,opacity:.22,side:Ce,fog:!0}),this.shaftGeo=new De(7,40).translate(0,-20,0),this.built=[],this.nextIdx=0,this.pickups=[]}_pickupMeshes(){let t=new le(.42,.42,.09,18).rotateX(Math.PI/2),e=new Rt({color:"#f0c24a",metalness:1,roughness:.25,emissive:"#6a4a08",emissiveIntensity:.6}),i=(c,h)=>(c.onBeforeCompile=u=>{u.uniforms.uTime=this.time,u.vertexShader=`uniform float uTime;
`+u.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float ph = instanceMatrix[3][0] * 0.3 + instanceMatrix[3][2] * 0.17; float a = uTime * ${h} + ph; float ca = cos(a), sa = sin(a);
        transformed = vec3(ca * transformed.x + sa * transformed.z, transformed.y + sin(uTime * 2.0 + ph) * 0.12, -sa * transformed.x + ca * transformed.z);
        objectNormal = vec3(ca * objectNormal.x + sa * objectNormal.z, objectNormal.y, -sa * objectNormal.x + ca * objectNormal.z);`).replace("#include <beginnormal_vertex>","#include <beginnormal_vertex>")},c.customProgramCacheKey=()=>"spin"+h,c),n=(c,h)=>(c.onBeforeCompile=u=>{u.uniforms.uTime=this.time,u.vertexShader=`uniform float uTime;
`+u.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        float ph = instanceMatrix[3][0] * 0.3 + instanceMatrix[3][2] * 0.17; float a = uTime * ${h} + ph; float ca = cos(a), sa = sin(a);
        objectNormal = vec3(ca * objectNormal.x + sa * objectNormal.z, objectNormal.y, -sa * objectNormal.x + ca * objectNormal.z);`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed = vec3(ca * transformed.x + sa * transformed.z, transformed.y + sin(uTime * 2.0 + ph) * 0.12, -sa * transformed.x + ca * transformed.z);`)},c.customProgramCacheKey=()=>"spin"+h,c);this.coinPool=new Fe(this.scene,{geo:t,mat:n(e,"3.0")},600,{});let r=new io(.55,0).scale(.8,1.3,.8),a=new Rt({color:"#7fe0c0",metalness:.6,roughness:.15,emissive:"#1f8a6a",emissiveIntensity:1.6});this.relicPool=new Fe(this.scene,{geo:r,mat:n(a,"1.5")},30,{});let o=new le(.28,.28,.9,12),l=new Rt({color:"#c8322a",metalness:.7,roughness:.3,emissive:"#5a0a04",emissiveIntensity:.8});this.nitroPool=new Fe(this.scene,{geo:o,mat:n(l,"2.0")},40,{}),this.haloMat=new Tn({map:is(),color:"#9fffe0",transparent:!0,blending:si,depthWrite:!1,opacity:.9})}_waterMats(){let t=Jd();this.waterMat=new Rt({color:"#3d5a3a",roughness:.08,metalness:.1,normalMap:t,normalScale:new J(.6,.6),transparent:!0,opacity:.86}),this.riverMat=new Rt({color:"#4d6e58",roughness:.12,metalness:.05,normalMap:t,normalScale:new J(.9,.9)}),this.foamMat=new He({map:Eo(),transparent:!0,depthWrite:!1,opacity:.55})}update(t,e){let i=this.gen.pieces;for(;this.nextIdx<i.length-1&&i[this.nextIdx].s0<t+this.q.drawDist;)this.buildPiece(i[this.nextIdx]),this.nextIdx++;for(;this.built.length&&this.built[0].p.s1<t-140;)this.releasePiece(this.built.shift());for(let n of this.built)n.set&&n.set.update(e,t);this.waterMat.normalMap.offset.x+=e*.03,this.waterMat.normalMap.offset.y+=e*.05;for(let n in this.pools)this.pools[n].flush();this.coinPool.flush(),this.relicPool.flush(),this.nitroPool.flush()}get obstacles(){let t=[];for(let e of this.built)if(e.set&&e.set.obstacles)for(let i of e.set.obstacles)t.push(i);return t}buildPiece(t){let e=this.track,i={p:t,meshes:[],inst:[],objs:[],pk:[],set:null},n=new Me(t.seed),r=t.i0,a=Math.min(t.i1+1,e.count-1),o=this.terrainPool.get();this._fillTerrain(o,r,a),i.meshes.push(["terrain",o]);let l=null,c=()=>{if(l&&l.b-l.a>=1){let f=this.roadPools[l.kind].get();this._fillRoad(f,l.a,l.b,l.lane),i.meshes.push([l.kind,f])}l=null};for(let u of t.type==="fork"?[-1,1]:[0]){for(let f=r;f<=a;f++){let d=e.get(f),m=d.gap||d.bridge,x=d.surf===te.STONE?"stone":"dirt";if(m){l&&(l.b=f,c());continue}l?l.kind!==x&&(l.b=f,c(),l={a:f,b:f,kind:x,lane:u}):l={a:f,b:f,kind:x,lane:u},l.b=f}c()}this._edgesAndProps(t,i,n,r,t.i1),(t.type==="bridge"||t.type==="bridgeCollapse")&&this._bridge(t,i),(t.type==="gap"||t.type==="waterfall"||t.type==="bridge"||t.type==="bridgeCollapse")&&this._river(t,i),(t.type==="ford"||t.type==="croc")&&this._ford(t,i);for(let u of t.pickups)this._addPickup(u,i);let h={scene:this.scene,track:e,lib:this.lib,mats:this.mats,builder:this,time:this.time,q:this.q};t.set?i.set=lf(t,h):t.type==="fork"?i.set=af(t,h):t.type==="temple"&&(i.set=of(t,h)),this.built.push(i),this.onBuilt&&this.onBuilt(t,i)}releasePiece(t){for(let[e,i]of t.meshes)e==="terrain"?this.terrainPool.put(i):this.roadPools[e]?this.roadPools[e].put(i):(this.scene.remove(i),i.geometry.dispose());for(let[e,i]of t.inst)e.release(i);for(let e of t.objs)this.scene.remove(e),e.traverse?.(i=>{i.geometry&&!i.userData.shared&&i.geometry.dispose()});for(let e of t.pk)e.taken||e.pool.release(e.slot),e.halo&&this.scene.remove(e.halo),e.dead=!0;this.pickups=this.pickups.filter(e=>!e.dead),t.set&&t.set.dispose()}inst(t,e,i,n,r,a,o,l,c){Dn.setFromEuler(Uh.set(0,a,0)),Un.set(o,l??o,o),Ui.compose(Io.set(i,n,r),Dn,Un);let h=this.pools[e].add(Ui,c);return h>=0&&t.inst.push([this.pools[e],h]),h}instM(t,e,i,n){let r=this.pools[e].add(i,n);return r>=0&&t.inst.push([this.pools[e],r]),r}_fillTerrain(t,e,i){let n=this.track,r=t.geometry,a=r.attributes.position.array,o=r.attributes.uv.array,l=r.attributes.color.array,c=0;for(let h=e;h<=i;h++){let u=n.get(h),f=u.fork+u.hw,d=u.fork>u.hw+.6?u.fork-u.hw-.6:0,m=[-52,-36,-24,-14,-(f+6),-(f+2.4),-(f+.9),-(f+.2),-Math.max(d,.01)-0,-d*.5,0,d*.5,Math.max(d,.01),f+.2,f+.9,f+2.4,f+6,14,24];m[18]=36;let x=[-52,-36,-22,-(f+6),-(f+2.4),-(f+.9),-(f+.2),-(d||.02),-d*.5,0,d*.5,d||.02,f+.2,f+.9,f+2.4,f+6,22,36,52];for(let g=0;g<Dh;g++){let p=x[g],M=n.terrainY(u,p);!u.gap&&!u.bridge&&Math.abs(p)<=f+.25&&!(d&&Math.abs(p)<d)&&(M=n.roadY(u,p)-.22),a[c*3]=u.x+u.rx*p,a[c*3+1]=M,a[c*3+2]=u.z+u.rz*p,o[c*2]=p/9,o[c*2+1]=u.s/9;let y=Mt((u.y-M)/30,0,1),v=Mt((M-u.y)/8,0,1);li.setRGB(.95-y*.45+v*.1,.95-y*.3+v*.05,.85-y*.25),u.ford&&Math.abs(p)>f&&Math.abs(p)<f+16&&li.multiplyScalar(.75),l[c*3]=li.r,l[c*3+1]=li.g,l[c*3+2]=li.b,c++}}this._finish(r,i-e+1,Dh)}_fillRoad(t,e,i,n){let r=this.track,a=t.geometry,o=a.attributes.position.array,l=a.attributes.uv.array,c=0;for(let h=e;h<=i;h++){let u=r.get(h),f=n*u.fork,d=u.hw,m=[-d-.35,-d,-d*.5,0,d*.5,d,d+.35];for(let x=0;x<7;x++){let g=f+m[x],p=x===0||x===6;o[c*3]=u.x+u.rx*g,o[c*3+1]=r.roadY(u,g)+(p?-.2:.015)+(u.bump,0),o[c*3+2]=u.z+u.rz*g,l[c*2]=(m[x]+d)/(2*d)*.92+.04,l[c*2+1]=u.s/8,c++}}this._finish(a,i-e+1,7)}_finish(t,e,i){t.setDrawRange(0,(e-1)*(i-1)*6),t.attributes.position.needsUpdate=!0,t.attributes.uv.needsUpdate=!0,t.attributes.color&&(t.attributes.color.needsUpdate=!0);let n=t.attributes.position.array,r=t.attributes.normal.array;for(let f=0;f<e;f++)for(let d=0;d<i;d++){let m=f*i+d,x=f*i+Math.max(d-1,0),g=f*i+Math.min(d+1,i-1),p=Math.max(f-1,0)*i+d,M=Math.min(f+1,e-1)*i+d,y=n[g*3]-n[x*3],v=n[g*3+1]-n[x*3+1],L=n[g*3+2]-n[x*3+2],E=n[M*3]-n[p*3],R=n[M*3+1]-n[p*3+1],I=n[M*3+2]-n[p*3+2],b=v*I-L*R,_=L*E-y*I,C=y*R-v*E,D=Math.hypot(b,_,C)||1;_<0&&(b=-b,_=-_,C=-C),r[m*3]=b/D,r[m*3+1]=_/D,r[m*3+2]=C/D}t.attributes.normal.needsUpdate=!0,t.computeBoundingSphere();let a=t.boundingSphere,o=0,l=0,c=0,h=e*i;for(let f=0;f<h;f++)o+=n[f*3],l+=n[f*3+1],c+=n[f*3+2];o/=h,l/=h,c/=h;let u=0;for(let f=0;f<h;f++)u=Math.max(u,Math.hypot(n[f*3]-o,n[f*3+1]-l,n[f*3+2]-c));a.center.set(o,l,c),a.radius=u+2}_edgesAndProps(t,e,i,n,r){let a=this.track,o=this.q.foliage,l=t.type==="temple"||t.type==="pillars"||t.type==="statue"||t.type==="blades";for(let c=n;c<=r;c++){let h=a.get(c),u=h.fork+h.hw;for(let f of[-1,1]){let d=f<0?h.edgeL:h.edgeR;if(d===Bt.WALL&&!h.gap&&!h.bridge&&(c-n)%2===0&&!h.tunnel){let x=f*(u+.95),g=a.roadY(h,f*u);li.setHSL(.13,.12,i.range(.42,.6)),this.inst(e,"block",h.x+h.rx*x,g+.35+i.range(-.1,.1),h.z+h.rz*x,h.th+i.range(-.08,.08),1,i.range(.8,1.25),li),i.chance(.22)&&this.inst(e,"block",h.x+h.rx*x,g+1.5,h.z+h.rz*x,h.th+i.range(-.2,.2),i.range(.75,.95),1,li),i.chance(.05*o*10/10)&&this.inst(e,"fern",h.x+h.rx*(x+f*.8),g+1.2,h.z+h.rz*(x+f*.8),i.range(0,6),i.range(.6,1))}if(d===Bt.CLIFF&&!h.gap&&!h.bridge&&(c-n)%3===0&&i.chance(.6)){let x=f*(u+.45);li.setHSL(.1,.1,i.range(.4,.55)),this.inst(e,"rock",h.x+h.rx*x,a.roadY(h,f*u)-.15,h.z+h.rz*x,i.range(0,6),i.range(.22,.4),void 0,li)}if(c%2)continue;if(h.gap||h.bridge){if(i.chance(.08*o)){let x=f*i.range(8,30);this._palm(e,i,h.x+h.rx*x,a.terrainY(h,x)-.3,h.z+h.rz*x,i.range(1.2,1.8))}if(i.chance(.12)){let x=f*i.range(4,34);li.setHSL(.1,.1,i.range(.35,.55)),this.inst(e,"rock",h.x+h.rx*x,a.terrainY(h,x),h.z+h.rz*x,i.range(0,6),i.range(.8,2.6),void 0,li)}if(i.chance(.18*o)){let x=f*i.range(32,46),g=a.terrainY(h,x);this._tree(e,i,h,x,g)}continue}let m=d===Bt.CLIFF;if(i.chance(.42*o)){let x=f*(u+(m?i.range(36,48):d===Bt.WALL?i.range(4.5,28):i.range(6.5,30)));this._tree(e,i,h,x,a.terrainY(h,x))}if(!m&&i.chance(.3*o)){let x=f*(u+i.range(3.5,20));this._palm(e,i,h.x+h.rx*x,a.terrainY(h,x)-.2,h.z+h.rz*x,i.range(.85,1.35))}if(!m&&i.chance(.85*o)){let x=f*(u+i.range(1.2,9));this.inst(e,"fern",h.x+h.rx*x,a.terrainY(h,x)-.1,h.z+h.rz*x,i.range(0,6),i.range(.7,1.5))}if(!m&&i.chance(.5*o)){let x=f*(u+i.range(4,22));this.inst(e,"bush",h.x+h.rx*x,a.terrainY(h,x),h.z+h.rz*x,i.range(0,6),i.range(.9,1.8))}if(i.chance(.06)){let x=f*(u+i.range(2,16));li.setHSL(.1,.12,i.range(.35,.55)),this.inst(e,"rock",h.x+h.rx*x,a.terrainY(h,x)-.2,h.z+h.rz*x,i.range(0,6),i.range(.5,1.6),void 0,li)}if(!m&&i.chance(l?.09:.025)){let x=f*(u+i.range(3,10));this.inst(e,"column",h.x+h.rx*x,a.terrainY(h,x)-.3,h.z+h.rz*x,i.range(0,6),1,i.chance(.5)?i.range(.35,.8):1)}if(!m&&i.chance(l?.02:.006)){let x=f*(u+i.range(4,9));this.inst(e,"head",h.x+h.rx*x,a.terrainY(h,x)-.6,h.z+h.rz*x,h.th+(f<0?1.57:-1.57)+i.range(-.4,.4),i.range(.9,1.4))}if(i.chance(.07*o)&&!h.tunnel){let x=f*(u+i.range(-.5,2.5));this.inst(e,"vines",h.x+h.rx*x,a.roadY(h,f*u)+i.range(8.5,11),h.z+h.rz*x,h.th+i.range(-.4,.4),i.range(.8,1.2))}}if(h.fork>h.hw+1.5&&c%3===0){let f=h.fork-h.hw-.6;i.chance(.5)&&this.inst(e,"fern",h.x,a.terrainY(h,0),h.z,i.range(0,6),i.range(.8,1.4)),f>2&&i.chance(.35)&&this._tree(e,i,h,i.range(-f+1,f-1),a.terrainY(h,0)),f>1.5&&i.chance(.15)&&this.inst(e,"column",h.x,a.terrainY(h,0)-.2,h.z,i.range(0,6),.9,i.range(.4,1))}if(c%37===0&&i.chance(.55)&&!h.tunnel){let f=new Tt(this.shaftGeo,this.shaftMat);f.userData.shared=!0;let d=i.range(-u-4,u+4);f.position.set(h.x+h.rx*d,h.y+26,h.z+h.rz*d),f.rotation.set(0,h.th+i.range(-.6,.6),.38),f.rotation.order="YXZ",f.rotateZ(0),f.scale.set(i.range(.7,1.6),1,1),this.scene.add(f),e.objs.push(f)}}}_palm(t,e,i,n,r,a){Dn.setFromEuler(Uh.set(e.range(-.08,.08),e.range(0,6.28),e.range(-.08,.08))),Un.set(a,a,a),Ui.compose(Io.set(i,n,r),Dn,Un),this.instM(t,"palmTrunk",Ui),this.instM(t,"palmLeaves",Ui)}_tree(t,e,i,n,r){let a=e.range(.75,1.35),o=e.range(0,6.28),l=i.x+i.rx*n,c=i.z+i.rz*n;this.inst(t,"treeTrunk",l,r-.3,c,o,a,a*e.range(.9,1.25));let[h,u]=t.inst[t.inst.length-1]||[];h&&(h.mesh.getMatrixAt(u,Ui),this.instM(t,"treeCanopy",Ui))}_bridge(t,e){let i=this.track;t.planks=[];for(let r=t.i0;r<=t.i1;r++)for(let a=0;a<2;a++){let o=r+a*.5,l=i.get(r),c=i.get(r+1),h=a*.5,u=l.x+(c.x-l.x)*h,f=l.y+(c.y-l.y)*h-.07,d=l.z+(c.z-l.z)*h,m=Math.sin(o*12.9)*.5*.06;Dn.setFromEuler(Uh.set(Math.atan2(c.y-l.y,1)*-1,l.th+m,0,"YXZ")),Un.set(l.hw/2.6*(.94+Math.abs(m)),1,1),Ui.compose(Io.set(u,f,d),Dn,Un);let x=this.pools.plank.add(Ui);x>=0&&(e.inst.push([this.pools.plank,x]),t.planks.push({slot:x,i:r,x:u,y:f,z:d,th:l.th,pitch:Math.atan2(c.y-l.y,1)*-1,fallen:!1,vy:0,rx:0,rz:0}))}let n=[[],[]];for(let r=t.i0-2;r<=t.i1+2;r+=2){let a=i.get(r);for(let o=0;o<2;o++){let l=(o?1:-1)*(a.hw+.25);n[o].push(new T(a.x+a.rx*l,a.y+1.05,a.z+a.rz*l))}}for(let r=0;r<2;r++){let a=new Zn(n[r]),o=new Tt(new Bs(a,n[r].length*2,.05,5),this.mats.rope);o.castShadow=!1,this.scene.add(o),e.objs.push(o),t["rope"+r]=o}for(let r=t.i0;r<=t.i1;r+=4){let a=i.get(r);for(let o of[-1,1])this.inst(e,"post",a.x+a.rx*o*(a.hw+.25),a.y-.75,a.z+a.rz*o*(a.hw+.25),a.th,1,1)}for(let r of[t.i0-1,t.i1+1]){let a=i.get(r);for(let o of[-1,1])this.inst(e,"column",a.x+a.rx*o*(a.hw+.9),a.y-.6,a.z+a.rz*o*(a.hw+.9),a.th,.6,.45)}}_river(t,e){let i=this.track,n=[],r=t.type.startsWith("bridge")?t.i0:Math.max(t.i0,Math.round(t.lipS)-4),a=t.type.startsWith("bridge")?t.i1:Math.round(t.landS)+4,o=i.get(r),l=i.get(a),c=i.get(r+a>>1),h=c.floorY+1.2,u=c.x,f=c.z,d=new De(26+(a-r),120,1,1);d.rotateX(-Math.PI/2);let m=new Tt(d,this.riverMat);m.position.set(u,h,f),m.rotation.y=c.th,m.receiveShadow=!0,this.scene.add(m),e.objs.push(m)}_ford(t,e){let i=this.track,n=i.get(t.i0+t.i1>>1),r=new De(90,(t.i1-t.i0)*.78,1,1);r.rotateX(-Math.PI/2);let a=new Tt(r,this.waterMat);a.position.set(n.x,t.waterY,n.z),a.rotation.y=n.th,a.renderOrder=2,this.scene.add(a),e.objs.push(a)}_addPickup(t,e){let i=this.track;if(!i.sampleAtS(t.s))return;let r=i.pointAt(t.s,t.lat,{x:0,y:0,z:0}),a=t.yAbs!==void 0?t.yAbs:r.y+(t.y||1),o=t.kind==="coin"?this.coinPool:t.kind==="relic"?this.relicPool:this.nitroPool;Dn.identity(),Un.set(1,1,1),Ui.compose(Io.set(r.x,a,r.z),Dn,Un);let l=o.add(Ui);if(l<0)return;let c={kind:t.kind,x:r.x,y:a,z:r.z,s:t.s,pool:o,slot:l,taken:!1,value:t.value||1,rare:t.rare};if(t.kind==="relic"){let h=new An(this.haloMat);h.scale.set(3.2,3.2,1),h.position.set(r.x,a,r.z),this.scene.add(h),c.halo=h}e.pk.push(c),this.pickups.push(c)}take(t){t.taken=!0,t.pool.release(t.slot),t.halo&&(this.scene.remove(t.halo),t.halo=null)}stats(){let t=0;for(let e in this.pools)t+=this.pools[e].used;return{pieces:this.built.length,instances:t,ribbons:this.terrainPool.created+this.roadPools.dirt.created+this.roadPools.stone.created}}reset(){for(;this.built.length;)this.releasePiece(this.built.shift());this.nextIdx=0,this.pickups=[]}};var Pe=()=>new T,hf=Pe(),jv=Pe(),Be=Pe(),Ke=Pe(),hn=Pe(),Se=Pe(),Zs=Pe(),Nh=Pe(),Ni=Pe(),ei=Pe(),uf=Pe(),kr=new Ee,Do=new Ee,df=[[0,9,1],[9,16,.8],[16,23,.64],[23,30,.52],[30,99,.44]],Uo=class{constructor(t,e){this.track=t,this.T=e,this.pos=Pe(),this.vel=Pe(),this.w=Pe(),this.q=new Ee,this.fwd=Pe(),this.up=Pe(),this.left=Pe();let i=.84,n=1.38,r=-1.3,a=.08;this.wheels=[{lp:new T(i,a,n),front:!0,side:1},{lp:new T(-i,a,n),front:!0,side:-1},{lp:new T(i,a,r),front:!1,side:1},{lp:new T(-i,a,r),front:!1,side:-1}].map(o=>({...o,comp:0,compPrev:0,contact:!1,hint:0,spin:0,rot:0,slipLat:0,slipLong:0,surf:0,load:0,cp:Pe(),center:Pe(),n:Pe(0,1,0),touchT:0})),this.probes=[];for(let o of[-.95,.95])for(let l of[-2.05,2.15])this.probes.push({lp:new T(o,-.32,l),roof:!1}),this.probes.push({lp:new T(o*.8,1.05,l*.55),roof:!0});this.probes.push({lp:new T(0,1.15,-.2),roof:!0}),this.wallPts=[];for(let o of[-.98,.98])for(let l of[-2.1,0,2.2])this.wallPts.push(new T(o,.1,l));this.events=[],this.setUpgrades({engine:0,nitro:0,suspension:0,armor:0}),this.reset(0,0,0,0,0)}setUpgrades(t){this.up_=t,this.maxHp=100+t.armor*25,this.dmgMul=1-t.armor*.07,this.nitroCap=this.T.nitroCans+Math.floor((t.nitro+1)/2),this.landTol=1+t.suspension*.14}reset(t,e,i,n,r,a=0){this.pos.set(t,e,i),this.q.setFromAxisAngle(hf.set(0,1,0),n),this.updateAxes(),this.vel.copy(this.fwd).multiplyScalar(r),this.w.set(0,0,0);for(let o of this.wheels)o.comp=o.compPrev=.1,o.contact=!0,o.hint=a;this.hint=a,this.steer=0,this.airTime=0,this.grounded=!0,this.contacts=4,this.gear=0,this.rpm=900,this.shiftT=0,this.throttle=0,this.nitroT=0,this.nitroing=!1,this.flipT=0,this.stuckT=0,this.landing=null,this.roofHit=!1,this.drift=0,this.slipAngle=0,this.speed=r,this.fwdSpeed=r,this.impactVn=0,this.wasAir=!1,this.lastSurf=0,this._preVel=new T().copy(this.vel),this.groundN=new T(0,1,0),this.hp===void 0&&(this.hp=this.maxHp,this.nitro=this.nitroCap,this.mud=0,this.wear=0)}fullReset(){this.hp=this.maxHp,this.nitro=this.nitroCap,this.mud=.05,this.wear=0,this.invincible=this.invincible||!1}updateAxes(){this.fwd.set(0,0,1).applyQuaternion(this.q),this.up.set(0,1,0).applyQuaternion(this.q),this.left.set(1,0,0).applyQuaternion(this.q)}damage(t,e){if(this.invincible)return;let i=t*this.dmgMul*(this.dmgScale||1);this.hp=Math.max(0,this.hp-i),this.wear=Math.min(1,this.wear+i/160),this.events.push({type:"damage",amount:i,why:e})}_angAcc(t,e){let i=this.T.inertia;return Do.copy(this.q).invert(),e.copy(t).applyQuaternion(Do),e.set(e.x/i[0],e.y/i[1],e.z/i[2]).applyQuaternion(this.q),e}_invMassAlong(t,e){return Ke.crossVectors(t,e),this._angAcc(Ke,Be),Be.cross(t),1/this.T.mass+Be.dot(e)}applyImpulse(t,e){this.vel.addScaledVector(e,1/this.T.mass),ei.subVectors(t,this.pos),uf.crossVectors(ei,e),this._angAcc(uf,Be),this.w.add(Be)}step(t,e,i){let n=this.T,r=n.mass,a=this.track;this.updateAxes();let o=hf.set(0,-9.81*r,0),l=jv.set(0,0,0),c=(H,X)=>{o.add(H),ei.subVectors(X,this.pos),l.add(Ke.crossVectors(ei,H))},h=this.vel.length();this.speed=h;let u=this.vel.dot(this.fwd);this.fwdSpeed=u;let f=i.assist,d=i.steerSens||1,m=n.maxSteer/(1+Math.max(0,Math.abs(u)-4)*n.steerSpeedFalloff/10),x=Mt(e.steer*d,-1,1)*m,g=(Math.abs(x)<Math.abs(this.steer)?n.steerReturn:n.steerRate)*t;this.steer+=Mt(x-this.steer,-g,g);let p=e.throttle,M=e.brake,y=df[this.gear];this.shiftT>0&&(this.shiftT-=t),u>y[1]+.5&&this.gear<4?(this.gear++,this.shiftT=.14,this.events.push({type:"shift",up:!0})):u<y[0]-1.5&&this.gear>0&&(this.gear--,this.events.push({type:"shift",up:!1}));let v=df[this.gear],L=Mt((Math.abs(u)-v[0])/(v[1]-v[0]),0,1.15),E=this.grounded?1100+L*5200:1100+p*5600;this.rpm=se(this.rpm,Math.max(900+p*1200,E),1-Math.exp(-12*t));let R=this.up_,I=n.topSpeed+R.engine*1.7+(this.nitroing?n.nitroTopBoost+R.nitro*.8:0),b=.78+.22*Math.sin(Mt((this.rpm-1e3)/5600,0,1)*Math.PI),_=p*n.engineForce*(1+R.engine*.08)*v[2]*b*Mt(1-Math.pow(Math.max(u,0)/I,4),0,1);this.shiftT>0&&(_*=.35);let C=!1;M>0&&u<1&&p<.1&&(C=!0,_=-M*n.engineForce*.55*Mt(1-Math.max(-u,0)/n.reverseSpeed,0,1)),e.nitroPressed&&!this.nitroing&&this.nitro>=1&&(this.nitro-=1,this.nitroing=!0,this.nitroT=n.nitroDur+R.nitro*.2,this.events.push({type:"nitro"})),this.nitroing&&(this.nitroT-=t,this.nitroT<=0&&(this.nitroing=!1));let D=0,U=Se.set(0,0,0),z=0,q=0,O=n.maxTravel+R.suspension*.04,et=n.restLength+n.wheelRadius,W=e.handbrake;for(let H=0;H<4;H++){let X=this.wheels[H],ut=hn.copy(X.lp).applyQuaternion(this.q).add(this.pos),it=a.query(ut.x,ut.z,X.hint);X.hint=it.idx,X.surf=it.surf,Se.set(it.nx,it.ny,it.nz);let Lt=this.up.dot(Se),Nt=1/0;if(!it.isVoid&&Lt>.25&&(Nt=(ut.y-it.h)*Se.y/Lt),X.compPrev=X.comp,Nt<et){X.comp=Math.min(et-Nt,O+.12),X.contact||(X.touchT=this.airTime),X.contact=!0,D++,U.add(Se),X.cp.copy(ut).addScaledVector(this.up,-Nt);let Ut=(X.comp-X.compPrev)/t,Xt=n.springK*X.comp+(Ut>0?n.damperBump:n.damperRebound)*Ut;X.comp>O&&(Xt+=(X.comp-O)*26e4+Math.max(0,Ut)*9e3);let K=this.wheels[H^1];Xt+=(X.comp-K.comp)*n.antiRoll,Xt=Math.max(0,Xt),X.load=Xt,c(Be.copy(this.up).multiplyScalar(Xt),X.cp);let st=X.front?this.steer:0;Zs.copy(this.fwd).multiplyScalar(Math.cos(st)).addScaledVector(this.left,-Math.sin(st)),Zs.addScaledVector(Se,-Zs.dot(Se)).normalize(),Nh.crossVectors(Se,Zs),ei.subVectors(X.cp,this.pos),Ni.crossVectors(this.w,ei).add(this.vel);let P=Ni.dot(Zs),yt=Ni.dot(Nh),tt=Math.min(Xt,3.2*r*9.81/4),gt=zd[it.surf]*(i.grip||1),ot=W&&!X.front,Ft=Math.atan2(yt,Math.max(Math.abs(P),3)),dt=Math.abs(Ft)/n.peakSlip,A=dt<1?1.5*dt-.5*dt*dt*dt:Math.max(n.slideFalloff,1-(dt-1)*.3),S=n.gripLat*gt*(ot?n.rearGripHandbrake:1);!X.front&&this.drift>.2&&(S*=se(1,.8,f*0));let B=-Math.sign(yt)*S*tt*A;Math.abs(P)<2&&Math.abs(yt)<1.5&&(B=Mt(-yt*r*.25/t/4,-S*tt,S*tt));let $=0,j=X.front?n.frontTorque/2:(1-n.frontTorque)/2;if($+=_*j,M>0&&!C){let Ht=n.brakeForce*(X.front?.3:.2)*M;$-=Mt(P*r/4/t,-Ht,Ht)}if(ot){let Ht=n.gripLong*gt*tt*.75;$=-Mt(P*r/4/t,-Ht,Ht)}$-=P*(n.rollRes+Hd[it.surf]*42);let Z=Math.max(n.gripLat,n.gripLong)*gt*tt,bt=Math.hypot(B,$),lt=0;if(bt>Z&&bt>0){let Ht=Z/bt;lt=1-Ht,B*=Ht,$*=Ht}X.slipLat=Math.abs(Ft),X.slipLong=lt,X.front||(z+=Math.abs(Ft)*.5),q+=it.surf===te.WATER?1:0;let vt=Be.copy(X.cp).addScaledVector(this.up,.62);c(Ke.copy(Zs).multiplyScalar($).addScaledVector(Nh,B),vt),X.spin=P/n.wheelRadius*(1+lt*2)*(ot?0:1),X.center.copy(ut).addScaledVector(this.up,-(Nt-n.wheelRadius))}else X.contact=!1,X.comp=Math.max(0,X.comp-t*3),X.load=0,X.spin=se(X.spin,p*60,t*2),X.center.copy(ut).addScaledVector(this.up,-n.restLength);X.rot+=X.spin*t}this.contacts=D;let nt=D>0;D?U.normalize():U.set(0,1,0),this.groundN.copy(U);let ht=Be.copy(this.vel).addScaledVector(U,-this.vel.dot(U));this.slipAngle=h>4?Math.atan2(ht.dot(this.left),Math.max(.1,ht.dot(this.fwd))):0;let _t=nt&&h>9&&Math.abs(this.slipAngle)>.22;if(this.drift=_t?Math.min(1,this.drift+t*3):Math.max(0,this.drift-t*4),c(Be.copy(this.vel).multiplyScalar(-h*n.dragCoef),this.pos),D>=2&&c(Be.copy(U).multiplyScalar(-n.downforce*h*h),this.pos),this.nitroing&&c(Be.copy(this.fwd).multiplyScalar(n.nitroForce*(1+R.nitro*.1)*(nt?1:.35)),this.pos),nt){let H=this.w.dot(this.up),X=2.68,ut=u*Math.tan(this.steer)/X*-1,it=Math.abs(this.slipAngle)-(.62-f*.12);it>0&&l.addScaledVector(this.up,Math.sign(this.slipAngle)*it*n.inertia[1]*9*(.5+f)),l.addScaledVector(this.up,-(H-ut)*n.inertia[1]*n.yawDamping*(W?.15:.6+f*.6)*(_t?.35:1)),_t&&p>.2&&c(Be.copy(ht).normalize().multiplyScalar(r*n.driftAssist*3.2*p),this.pos),Ke.crossVectors(this.up,U);let Lt=Ke.dot(this.fwd),Nt=Ke.dot(this.left),Ut=this.w.dot(this.fwd),Xt=this.w.dot(this.left);if(l.addScaledVector(this.fwd,(Lt*30-Ut*4)*n.inertia[2]*n.stability),l.addScaledVector(this.left,(Nt*6-Xt*1.2)*n.inertia[0]*n.stability*.5),W&&h>8&&l.addScaledVector(this.up,-this.steer*n.inertia[1]*3.2),i.lane&&f>0){let K=i.lane,st=Math.abs(K.laneLat)/K.hw,P=f*(K.narrow?1:.35)*Mt((st-.35)/.65,0,1)*(1-Math.abs(e.steer)*.6);if(P>0){c(Be.set(K.rx,0,K.rz).multiplyScalar(-Math.sign(K.laneLat)*r*4.5*P),this.pos);let yt=Math.atan2(this.fwd.x,this.fwd.z)-K.th,tt=Math.atan2(Math.sin(yt),Math.cos(yt));l.addScaledVector(this.up,-tt*n.inertia[1]*5*P)}}}if(nt)this.wasAir;else{this.airTime+=t,Do.copy(this.q).invert();let H=Be.copy(this.w).applyQuaternion(Do),X=e.pitch,ut=e.steer;if(Math.abs(X)>.05&&(H.x=se(H.x,X*n.airPitch*.62,1-Math.exp(-3.2*t))),Math.abs(ut)>.05&&(H.z=se(H.z,ut*n.airRoll*.6,1-Math.exp(-2.2*t)),H.y=se(H.y,-ut*n.airYaw*.6,1-Math.exp(-2*t))),this.w.copy(H.applyQuaternion(this.q)).multiplyScalar(1-.25*t),i.landAssist>0&&i.landN){Ke.crossVectors(this.up,i.landN);let it=i.landAssist*(Math.abs(X)>.05?.35:1);l.addScaledVector(Ke,14*n.inertia[0]*it),l.addScaledVector(this.w,-2.2*n.inertia[0]*it)}}if(nt&&this.airTime>.38&&!this.landing&&(this.landing={t:0,first:this.airTime,air:this.airTime,vn:-this._preVel.dot(U),ang:0,minUp:1,wheels:0}),this.landing){let H=this.landing;H.t+=t,H.minUp=Math.min(H.minUp,this.up.dot(U)),H.wheels=Math.max(H.wheels,D),(D>=3||H.t>.22||this.roofHit)&&this._judgeLanding()}nt&&!this.landing&&(this.airTime=0),this.grounded=nt,this._preVel=(this._preVel||Pe()).copy(this.vel),this.vel.addScaledVector(o,t/r),this._angAcc(l,Be),this.w.addScaledVector(Be,t),nt&&this.w.multiplyScalar(1-.4*t);let Vt=this.w.length();if(Vt>9&&this.w.multiplyScalar(9/Vt),this.pos.addScaledVector(this.vel,t),kr.set(this.w.x*t*.5,this.w.y*t*.5,this.w.z*t*.5,0).multiply(this.q),this.q.x+=kr.x,this.q.y+=kr.y,this.q.z+=kr.z,this.q.w+=kr.w,this.q.normalize(),this._bodyCollide(t),this._walls(t,i),i.obstacles&&this._obstacles(i.obstacles),nt){let H=this.wheels[2].surf;this.lastSurf=H,(H===te.MUD||H===te.JUNGLE||H===te.WATER)&&(this.mud=Math.min(1,this.mud+t*.04*Math.min(h,20)/20))}q>1&&h>6&&this.events.push({type:"splash",speed:h}),this.throttle=p,this.up.y<.3&&h<5?this.flipT+=t:this.flipT=Math.max(0,this.flipT-t*2),e.throttle>.5&&h<1.2&&!this.landing?this.stuckT+=t:this.stuckT=Math.max(0,this.stuckT-t)}_judgeLanding(){let t=this.landing;this.landing=null;let e=this.landTol,i=Math.acos(Mt(t.minUp,-1,1))*57.3,n=Math.max(0,t.vn),r=this.wheels.reduce((o,l)=>l.contact?Math.max(o,Math.abs(l.touchT-t.first)):o,0),a;this.roofHit||t.minUp<.25?a="CRASH":i<11*e&&n<12.5*e&&r<.14?a="PERFECT":i<22*e&&n<17*e?a="GOOD":i<48?a="ROUGH":a="CRASH",a==="PERFECT"&&this.vel.multiplyScalar(1.03),a==="ROUGH"&&(this.vel.multiplyScalar(.86),this.damage(5+n*.4,"landing")),a==="CRASH"&&(this.vel.multiplyScalar(.55),this.damage(14+n,"crash")),this.events.push({type:"land",quality:a,air:t.air,vn:n,ang:i}),this.airTime=0,this.roofHit=!1}_bodyCollide(t){let e=this.T.mass,i=!1;for(let r of this.probes){let a=hn.copy(r.lp).applyQuaternion(this.q).add(this.pos),o=this.track.query(a.x,a.z,this.hint);if(o.isVoid)continue;let l=o.h-a.y;if(l<=0||l>2.5)continue;Se.set(o.nx,o.ny,o.nz),ei.subVectors(a,this.pos),Ni.crossVectors(this.w,ei).add(this.vel);let c=Ni.dot(Se);if(this.pos.addScaledVector(Se,l*.35),c<0){let h=-1.18*c/this._invMassAlong(ei,Se),u=Be.copy(Se).multiplyScalar(h);Ke.copy(Ni).addScaledVector(Se,-c);let f=Ke.length();f>.01&&u.addScaledVector(Ke.normalize(),-Math.min(h*.55,f*e*.2)),this.applyImpulse(a,u),r.roof&&-c>1.5&&(i=!0),-c>4&&this.events.push({type:"impact",speed:-c,roof:r.roof}),-c>6&&this.damage((-c-6)*1.6,"body")}}i&&(this.roofHit=!0,!this.landing&&this.airTime>.2&&(this.landing={t:0,first:this.airTime,air:this.airTime,vn:0,minUp:this.up.y,wheels:0}));let n=this.track.query(this.pos.x,this.pos.z,this.hint);this.hint=n.idx,this.lat=n.lat,this.laneLat=n.laneLat,this.lane=n.lane,this.overVoid=n.isVoid,this.groundH=n.h,this.onRoad=n.onRoad}_walls(t,e){for(let i of this.wallPts){let n=hn.copy(i).applyQuaternion(this.q).add(this.pos),r=this.track.query(n.x,n.z,this.hint),a=this.track.get(r.idx),o=this.track.limits(a),l=r.lat,c=0,h=0;if(l>o.R?(c=l-o.R,h=-1):l<-o.L?(c=-o.L-l,h=1):o.island>0&&Math.abs(l)<o.island&&n.y<a.y+2.5&&(c=o.island-Math.abs(l),h=Math.sign(l)||1),c<=0||n.y>a.y+3.2)continue;Se.set(a.rx*h,0,a.rz*h),this.pos.addScaledVector(Se,c*.8),ei.subVectors(n,this.pos),Ni.crossVectors(this.w,ei).add(this.vel);let u=Ni.dot(Se);if(u<0){let f=-1.25*u/this._invMassAlong(ei,Se),d=Be.copy(Se).multiplyScalar(f);Ke.copy(Ni).addScaledVector(Se,-u),Ke.y=0;let m=Ke.length();m>.01&&d.addScaledVector(Ke.normalize(),-Math.min(f*.25,m*this.T.mass*.1)),this.applyImpulse(n,d),-u>2.5&&this.events.push({type:"wall",speed:-u,x:n.x,y:n.y,z:n.z}),-u>7&&this.damage((-u-7)*1.3,"wall")}}}_obstacles(t){for(let e of t)if(e.active)for(let i=-1;i<=1;i++){let n=this.pos.x+this.fwd.x*i*1.45,r=this.pos.z+this.fwd.z*i*1.45,a=this.pos.y,o=e.x,l=e.z;if(e.x2!==void 0){let g=e.x2-e.x,p=e.z2-e.z,M=g*g+p*p,y=Mt(((n-e.x)*g+(r-e.z)*p)/(M||1),0,1);o=e.x+g*y,l=e.z+p*y}let c=n-o,h=r-l,u=Math.hypot(c,h),f=e.r+1.05;if(u>=f||a+1.2<e.yMin||a-.6>e.yMax)continue;let d=u>.001?c/u:-this.fwd.x,m=u>.001?h/u:-this.fwd.z;if(e.solid===!1){e.onHit&&!e._hitCd&&(e.onHit(this,d,m),e._hitCd=.6);continue}this.pos.x+=d*(f-u)*.9,this.pos.z+=m*(f-u)*.9,Se.set(d,0,m),hn.set(n,a,r),ei.subVectors(hn,this.pos),Ni.crossVectors(this.w,ei).add(this.vel);let x=Ni.dot(Se);if(x<0){let g=-(1+(e.bounce??.3))*x/this._invMassAlong(ei,Se);this.applyImpulse(hn,Be.copy(Se).multiplyScalar(g)),e.onHit&&!e._hitCd&&(e.onHit(this,d,m,-x),e._hitCd=.5),this.events.push({type:"impact",speed:-x,x:hn.x,y:hn.y+.5,z:hn.z})}}}};var Br=new T;function Mi(s,t,e,i,n,r){let a=2*Math.PI*n/4,o=Math.max(r-2*n,0),l=Math.PI/4;Br.copy(t),Br[i]=0,Br.normalize();let c=.5*a/(a+o),h=1-Br.angleTo(s)/l;return Math.sign(Br[e])===1?h*c:o/(a+o)+c+c*(1-h)}var No=class extends Et{constructor(t=1,e=1,i=1,n=2,r=.1){if(n=n*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,n,n,n),n===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new T,l=new T,c=new T(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,m=new T,x=.5/n;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(o.fromArray(h,g),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[g+0]=c.x*Math.sign(o.x)+l.x*r,h[g+1]=c.y*Math.sign(o.y)+l.y*r,h[g+2]=c.z*Math.sign(o.z)+l.z*r,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/d)){case 0:m.set(1,0,0),f[p+0]=Mi(m,l,"z","y",r,i),f[p+1]=1-Mi(m,l,"y","z",r,e);break;case 1:m.set(-1,0,0),f[p+0]=1-Mi(m,l,"z","y",r,i),f[p+1]=1-Mi(m,l,"y","z",r,e);break;case 2:m.set(0,1,0),f[p+0]=1-Mi(m,l,"x","z",r,t),f[p+1]=Mi(m,l,"z","x",r,i);break;case 3:m.set(0,-1,0),f[p+0]=1-Mi(m,l,"x","z",r,t),f[p+1]=1-Mi(m,l,"z","x",r,i);break;case 4:m.set(0,0,1),f[p+0]=1-Mi(m,l,"x","y",r,t),f[p+1]=1-Mi(m,l,"y","x",r,e);break;case 5:m.set(0,0,-1),f[p+0]=Mi(m,l,"x","y",r,t),f[p+1]=1-Mi(m,l,"y","x",r,e);break}}};var ss={green:[74,88,52],sand:[168,146,104],red:[138,46,34],safari:[196,176,128]};function Or(s,t){return s.onBeforeCompile=e=>{e.uniforms.uMud=t.mud,e.uniforms.uCarY=t.carY,e.uniforms.uWear=t.wear,e.vertexShader=`varying float vMudY; varying vec3 vMudP;
`+e.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
      vec4 mwp = modelMatrix * vec4(transformed, 1.0); vMudY = mwp.y; vMudP = mwp.xyz;`),e.fragmentShader=`uniform float uMud, uCarY, uWear; varying float vMudY; varying vec3 vMudP;
`+e.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
      float mn = fract(sin(dot(floor(vMudP.xz * 9.0), vec2(12.9898, 78.233))) * 43758.5453);
      float h = vMudY - uCarY;
      float mud = smoothstep(0.15 + uMud * 0.9, -0.35, h + (mn - 0.5) * 0.25) * clamp(uMud * 1.6, 0.0, 1.0);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.27, 0.2, 0.12), mud * 0.85);
      diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.92, 0.88, 0.8) + vec3(0.05, 0.04, 0.02), clamp(uMud, 0.0, 1.0) * 0.35);
      diffuseColor.rgb *= 1.0 - uWear * 0.25 * mn;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
      roughnessFactor = mix(roughnessFactor, 1.0, mud);`)},s.customProgramCacheKey=()=>"mud",s}var Fo=class{constructor(t,e="green"){this.uni={mud:{value:.1},carY:{value:0},wear:{value:0}};let i=this.uni,n=this.mats={paint:Or(new Rt({map:Ih(ss[e]||ss.green),roughness:.62,metalness:.25}),i),dark:Or(new Rt({color:"#23211e",roughness:.7,metalness:.6}),i),chrome:new Rt({color:"#cfc8b8",roughness:.22,metalness:1}),brass:new Rt({color:"#b48a3c",roughness:.35,metalness:1}),leather:new Rt({map:Yd(),roughness:.6}),wood:new Rt({map:qd(),roughness:.85}),canvas:new Rt({color:"#9c8d68",roughness:.95}),rubber:Or(new Rt({map:$d(),roughness:.92}),i),rim:Or(new Rt({color:"#d7cfb4",roughness:.5,metalness:.4}),i),glass:new Rt({color:"#c8dcd8",roughness:.05,metalness:.2,transparent:!0,opacity:.22}),lens:new Rt({color:"#fff4d8",emissive:"#ffe2a0",emissiveIntensity:1.4,roughness:.1}),skin:new Rt({color:"#c98d64",roughness:.7}),jacket:new Rt({color:"#6a3f22",roughness:.75}),khaki:new Rt({color:"#b9a57a",roughness:.85}),hat:new Rt({color:"#7a5c3c",roughness:.9}),hair:new Rt({color:"#8a3e1e",roughness:.8}),scarf:new Rt({color:"#b8302a",roughness:.9,side:Ce}),jerry:Or(new Rt({color:"#4c5a34",roughness:.6,metalness:.4}),i),flame:new He({color:"#ffb46a",transparent:!0,opacity:.85,blending:si,depthWrite:!1}),flameCore:new He({color:"#c8e4ff",transparent:!0,opacity:.9,blending:si,depthWrite:!1})},r=this.root=new ae,a=this.body=new ae;r.add(a);let o=(p,M,y,v,L,E=a)=>{let R=new Tt(p,M);return R.position.set(y,v,L),R.castShadow=!0,R.receiveShadow=!0,E.add(R),R},l=(p,M,y,v=.05)=>new No(p,M,y,2,v);o(new Et(.14,.16,4.1),n.dark,.55,-.34,.05),o(new Et(.14,.16,4.1),n.dark,-.55,-.34,.05),o(l(1.64,.62,2.3,.07),n.paint,0,.05,-.6),o(l(1.5,.5,.42,.06),n.paint,0,.14,.62);let c=o(l(1.14,.46,1.42,.06),n.paint,0,.06,1.3);{let p=c.geometry.attributes.position;for(let M=0;M<p.count;M++){let y=p.getZ(M);y>.2&&(p.setX(M,p.getX(M)*(1-(y-.2)*.12)),p.setY(M,p.getY(M)-(p.getY(M)>0?(y-.2)*.06:0)))}c.geometry.computeVertexNormals()}for(let p=0;p<4;p++)o(new Et(.02,.18,.5),n.dark,(p<2?1:-1)*.575,.02,1.05+p%2*0);o(l(1,.56,.08,.02),n.dark,0,.02,2.02);for(let p=0;p<9;p++)o(new Et(.035,.48,.04),n.chrome,-.4+p*.1,.02,2.07);let h=(p,M,y=.6)=>{let v=new le(y,y,.42,18,1,!0,-Math.PI*.62,Math.PI*1.24);v.rotateZ(Math.PI/2);let L=o(v,n.paint,p,-.44,M);L.material=n.paint;let E=new Tt(v,n.dark);return E.scale.set(.96,.97,.97),L.add(E),E.material=new Rt({color:"#191715",side:ze,roughness:.9}),L};for(let p of[.84,-.84])h(p,1.38),h(p,-1.3),o(new Et(.34,.05,1.7),n.dark,p*1.02,-.33,.04);o(l(1.84,.16,.18,.04),n.dark,0,-.36,2.18),o(new le(.11,.11,.5,12).rotateZ(Math.PI/2),n.brass,0,-.2,2.2),o(l(1.7,.14,.16,.04),n.dark,0,-.32,-1.86),this.lenses=[];for(let p of[.66,-.66]){let M=o(new le(.15,.13,.18,16).rotateX(Math.PI/2),n.chrome,p,.34,1.86),y=o(new Qa(.125,16),n.lens.clone(),0,0,.092,M);this.lenses.push(y)}for(let p of[.73,-.73])o(new Et(.05,.66,.05),n.dark,p,.72,.78);o(new Et(1.5,.05,.05),n.dark,0,1.05,.76);let u=o(new De(1.42,.6),n.glass,0,.72,.775);u.castShadow=!1,u.rotation.y=Math.PI;let f=o(new De(1.42,.6),n.glass,0,.72,.776);f.castShadow=!1,o(new le(.05,.05,.02,12).rotateX(Math.PI/2),n.brass,.25,.38,.84),o(new le(.05,.05,.02,12).rotateX(Math.PI/2),n.brass,.12,.38,.84),this.wheelSteer=o(new Ar(.19,.022,8,20),n.dark,.38,.6,.5),this.wheelSteer.rotation.x=-.75,o(new le(.02,.02,.5,6).rotateX(.82),n.dark,.38,.45,.66);for(let p of[.38,-.38])o(l(.52,.16,.52,.06),n.leather,p,.32,.05),o(l(.52,.56,.14,.06),n.leather,p,.62,-.24);o(l(1.3,.16,.5,.06),n.leather,0,.32,-.95);{let p=new Zn([new T(-.76,.35,-.42),new T(-.72,1.12,-.42),new T(0,1.22,-.42),new T(.72,1.12,-.42),new T(.76,.35,-.42)]);o(new Bs(p,20,.04,6),n.dark,0,0,0)}this.crates=[];let d=(p,M,y,v,L,E,R=0)=>{let I=o(l(p,M,y,.02),n.wood,v,L,E);return I.rotation.y=R,this.crates.push(I),I};d(.62,.48,.5,.32,.62,-1.4,.05),d(.55,.42,.46,-.34,.6,-1.42,-.08),d(.46,.36,.4,.05,1.02,-1.42,.25);for(let p of[.88,-.88]){let M=o(l(.12,.42,.3,.02),n.jerry,p,.25,-1.3);M.castShadow=!0}o(new Ar(.2,.06,6,14).rotateX(Math.PI/2),n.canvas,-.35,.42,-.62);let m=new ae;m.position.set(0,.16,-1.98),a.add(m),this._makeWheel(m,!0),o(new Et(.06,.06,1.2),new Rt({color:"#6a4a2a"}),.83,.42,-.4).rotation.x=.2,o(new le(.05,.05,.6,8).rotateX(Math.PI/2),n.dark,-.55,-.42,-1.85),this.dusty=this._person(.38,!0),this.penny=this._person(-.38,!1),this.flames=new ae,this.flames.position.set(-.55,-.42,-2.18),a.add(this.flames);let x=new Tt(new Ri(.16,1.4,10,1,!0).rotateX(-Math.PI/2).translate(0,0,-.7),n.flame);this.flames.add(x);let g=new Tt(new Ri(.08,.8,8,1,!0).rotateX(-Math.PI/2).translate(0,0,-.4),n.flameCore);this.flames.add(g),this.flames.visible=!1,this.flameLight=new Hs("#ff9a40",0,8,2),this.flameLight.position.set(-.55,-.2,-2.6),a.add(this.flameLight),this.head=new ao("#ffe8c0",0,60,.55,.5,1.4),this.head.position.set(0,.4,2),this.head.target.position.set(0,-1.2,14),a.add(this.head),a.add(this.head.target),this.wheels=[];for(let p=0;p<4;p++){let M=new ae;r.add(M);let y=new ae;M.add(y),this._makeWheel(y,!1,p%2===1),this.wheels.push({g:M,spin:y})}this.root.traverse(p=>{p.isMesh&&p.material===n.glass&&(p.castShadow=!1)}),this._bake(a,[this.wheelSteer,...this.crates,...this.lenses]);for(let p of this.wheels)this._bake(p.spin,[]);this._bake(m,[]),t.add(r),this.crateFall=[],this.lightsBroken=!1}_bake(t,e){let i=new Map,n=[];t.updateMatrix();for(let r of t.children){if(!r.isMesh||e.includes(r)||r.children.length)continue;r.updateMatrix();let a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(r.matrix);for(let o of Object.keys(a.attributes))["position","normal","uv"].includes(o)||a.deleteAttribute(o);a.attributes.uv||a.setAttribute("uv",new oe(new Float32Array(a.attributes.position.count*2),2)),i.has(r.material)||i.set(r.material,[]),i.get(r.material).push(a),n.push(r)}for(let r of n)t.remove(r);for(let[r,a]of i){let o=new Tt(oi(a),r);o.castShadow=r!==this.mats.glass,o.receiveShadow=!0,t.add(o)}}_makeWheel(t,e,i){let n=this.mats,r=[],a=.46,o=.32,l=.27;r.push(new J(l,-o/2)),r.push(new J(a-.06,-o/2)),r.push(new J(a-.01,-o/2+.04)),r.push(new J(a,-o/2+.09)),r.push(new J(a,o/2-.09)),r.push(new J(a-.01,o/2-.04)),r.push(new J(a-.06,o/2)),r.push(new J(l,o/2));let c=new Tt(new Mr(r,28).rotateZ(Math.PI/2),n.rubber);c.castShadow=!0,t.add(c);let h=new Tt(new le(.28,.28,.22,18).rotateZ(Math.PI/2),n.rim);t.add(h);let u=new Tt(new le(.09,.11,.26,10).rotateZ(Math.PI/2),n.chrome);t.add(u);for(let f=0;f<5;f++){let d=f/5*Math.PI*2,m=new Tt(new le(.018,.018,.27,5).rotateZ(Math.PI/2),n.dark);m.position.set(0,Math.cos(d)*.17,Math.sin(d)*.17),t.add(m)}e&&(t.rotation.y=Math.PI/2)}_person(t,e){let i=this.mats,n=new ae;n.position.set(t,.42,0),this.body.add(n);let r=(c,h,u,f,d,m=n)=>{let x=new Tt(c,h);return x.position.set(u,f,d),x.castShadow=!0,m.add(x),x};r(new ln(.17,.32,4,10),e?i.jacket:i.khaki,0,.36,-.06).scale.set(1.15,1,.8),e&&(r(new Et(.05,.42,.04),i.leather,.08,.38,.08).rotation.z=.6);let o=new ae;if(o.position.set(0,.78,-.02),n.add(o),r(new Vi(.12,14,12),i.skin,0,0,0,o).scale.set(.92,1.08,.98),r(new Et(.18,.04,.06),i.skin,0,-.03,.1,o),e){r(new le(.25,.26,.025,20),i.hat,0,.07,0,o);let c=r(new le(.115,.135,.15,14),i.hat,0,.15,0,o);c.scale.z=.9,r(new le(.137,.137,.035,14),new Rt({color:"#3a2a1c"}),0,.1,0,o),r(new Et(.14,.02,.02),new Rt({color:"#4a3020"}),0,-.07,.11,o)}else{r(new Vi(.135,12,10),i.hair,0,.03,-.03,o).scale.set(1,1,1.05),r(new Vi(.07,10,8),i.hair,0,.02,-.15,o);for(let h of[-.05,.05])r(new le(.035,.035,.03,10).rotateX(Math.PI/2),i.brass,h,.1,.1,o);let c=r(new De(.1,.5,1,4),i.scarf,.05,-.15,-.14,o);this.scarf=c}let l=[];for(let c of[-1,1]){let h=new ae;h.position.set(c*.2,.55,-.02),n.add(h),r(new ln(.05,.24,3,6),e?i.jacket:i.khaki,0,-.14,0,h);let u=new ae;u.position.set(0,-.28,0),h.add(u),r(new ln(.045,.22,3,6),e?i.skin:i.khaki,0,-.12,0,u),h.rotation.x=-.9,u.rotation.x=-.7,l.push({sh:h,el:u})}for(let c of[-.09,.09])r(new ln(.06,.38,3,6),i.khaki,c,0,.28).rotation.x=1.4;return{g:n,head:o,arms:l}}setPaint(t){this.mats.paint.map=Ih(ss[t]||ss.green),this.mats.paint.needsUpdate=!0}sync(t,e,i,n,r,a={}){this.root.position.copy(e),this.root.quaternion.copy(i),this.root.updateMatrixWorld();let o=this._inv||(this._inv=new Qt);o.copy(this.root.matrixWorld).invert();for(let m=0;m<4;m++){let x=t.wheels[m],g=this.wheels[m],p=(g._lp||(g._lp=new T)).copy(x.center).sub(t.pos).add(e).applyMatrix4(o);g.g.position.copy(p),g.g.rotation.set(0,x.front?-t.steer:0,0),g.spin.rotation.x=x.rot}let l=t.steer;this.wheelSteer.rotation.z=-l*2.2;let c=this.dusty,h=this.penny;c.head.rotation.y=-l*.6,c.g.rotation.z=l*.12+Math.sin(r*13)*.01*Math.min(t.speed,30)/30,c.arms[0].sh.rotation.z=-l*.4,c.arms[1].sh.rotation.z=-l*.4;let u=!t.grounded;if(h.g.rotation.z=l*.18,h.head.rotation.y=a.lookBack?2.2:-l*.3,h.arms[0].sh.rotation.x=u?-2.6:-.9,h.arms[1].sh.rotation.x=u?-2.7:-.9,this.scarf&&(this.scarf.rotation.x=-.9-Math.min(t.speed,30)/30*.6+Math.sin(r*17)*.15),this.flames.visible=t.nitroing,t.nitroing){let m=.8+Math.random()*.5;this.flames.scale.set(m,m,.8+Math.random()*.7),this.flameLight.intensity=6+Math.random()*4}else this.flameLight.intensity=0;this.head.intensity=this.lightsBroken?0:a.headlights?60:0;for(let m of this.lenses)m.material.emissiveIntensity=this.lightsBroken?0:a.headlights?3:.6;this.uni.mud.value+=(t.mud-this.uni.mud.value)*Math.min(1,n*3),this.uni.carY.value=e.y,this.uni.wear.value=t.wear;let f=t.hp/t.maxHp,d=f<.25?3:f<.5?2:f<.75?1:0;for(;this.crateFall.length<d&&this.crates.length>this.crateFall.length;){let m=this.crates[this.crates.length-1-this.crateFall.length],x=new T;m.getWorldPosition(x);let g=new Ee;m.getWorldQuaternion(g),m.visible=!1;let p=m.clone();p.visible=!0,p.position.copy(x),p.quaternion.copy(g),this.root.parent.add(p),this.crateFall.push({m:p,v:t.vel.clone().multiplyScalar(.6).add(new T((Math.random()-.5)*4,4,0)),w:new T(Math.random()*6,Math.random()*6,Math.random()*6),t:0,src:m}),this.onCrate&&this.onCrate(x)}for(let m of this.crateFall)m.t<3&&(m.t+=n,m.v.y-=9.8*n,m.m.position.addScaledVector(m.v,n),m.m.rotation.x+=m.w.x*n,m.m.rotation.y+=m.w.y*n,m.t>=3&&(m.m.visible=!1));f<.3&&!this.lightsBroken&&(this.lightsBroken=!0,this.onBreak&&this.onBreak())}repair(){for(let t of this.crateFall)this.root.parent&&this.root.parent.remove(t.m),t.src.visible=!0;this.crateFall=[],this.lightsBroken=!1,this.uni.mud.value=.05}};var ko=class{constructor(t,e){this.track=e,this.R=6.2;let i=new eo(this.R,4),n=i.attributes.position,r=new T;for(let l=0;l<n.count;l++){r.fromBufferAttribute(n,l).normalize();let c=ts(r.x*2.2+3,r.y*2.2+r.z*1.7,4),h=Math.abs(Math.sin(r.x*7+r.z*5))*.15,u=this.R*(.9+c*.22+h*.4);n.setXYZ(l,r.x*u,r.y*u,r.z*u)}i.computeVertexNormals();let a=new Float32Array(n.count*3);for(let l=0;l<n.count;l++){r.fromBufferAttribute(n,l).normalize();let c=Math.abs(r.y)<.12?.62:1,h=.85+ts(r.x*6,r.z*6+r.y*3,2)*.25;a[l*3]=h*c,a[l*3+1]=h*c*.96,a[l*3+2]=h*c*.88}i.setAttribute("color",new oe(a,3));let o=new Rt({map:qs(),roughness:.88,vertexColors:!0});this.mesh=new Tt(i,o),this.mesh.castShadow=!0,this.group=new ae,this.group.add(this.mesh),t.add(this.group),this.s=0,this.v=0,this.rot=0,this.active=!1,this.mul=1,this.pos=new T,this.q=new Ee,this._a=new T,this.dust=0}start(t,e){this.s=t,this.v=0,this.active=!0,this.mul=e,this.t=0}update(t,e,i,n=1){if(!this.active)return;this.t+=t;let r=e-this.s,a=(17.5+Math.min(e,6e3)/6e3*11)*this.mul*n,o=a;r>95?o=Math.max(a,i+4):r>60?o=Math.max(a,i*.92):r<22&&(o=a*.93);let l=Mt(this.t/3.5,0,1);o*=l,this.v=se(this.v,o,1-Math.exp(-1.4*t)),this.s+=this.v*t;let c=this.track,h=Math.max(this.s,c.base+1),u=c.pointAt(h,0,this.pos),f=u.y;this.s<c.base+1;let d=c.sampleAtS(h);(d.gap||d.hole)&&(f=Math.max(d.floorY+this.R,f-6)),this.pos.set(u.x-(this.s<0?d.fx*-this.s:0),f+this.R*.92,u.z-(this.s<0?d.fz*-this.s:0)),this.group.position.lerp(this.pos,this.group.position.lengthSq()===0?1:1-Math.exp(-12*t)),this.rot+=this.v*t/this.R,this._a.set(-d.fz,0,d.fx).negate(),this.q.setFromAxisAngle(this._a.set(d.rx,0,d.rz).multiplyScalar(-1),this.rot),this.mesh.quaternion.copy(this.q),this.gap=r}};var t_=new T,e_=new T,zr=new T,Bo=class{constructor(t,e){this.cam=t,this.track=e,this.pos=new T,this.look=new T,this.dir=new T(0,0,1),this.trauma=0,this.fov=62,this.mode="chase",this.cine=0,this.cineSide=1,this.t=0,this.distMul=1,this.comfort=!1,this.inited=!1}addShake(t){this.comfort&&(t*=.3),this.trauma=Math.min(1.2,this.trauma+t)}snap(){this.inited=!1}update(t,e,i,n){this.t+=t;let r=this.cam,a=e.speed;zr.copy(e.vel),zr.y=0;let o=t_.set(e.fwd.x,0,e.fwd.z).normalize();zr.lengthSq()>9&&(zr.normalize(),o.lerp(zr,Mt(a/25,0,.6)).normalize()),this.inited||this.dir.copy(o),this.dir.lerp(o,1-Math.exp(-(e.grounded?4.5:1.2)*t)).normalize();let l=Mt(a/36,0,1.2),c=se(7.6,6.3,l)*this.distMul,h=se(3.3,2.35,l)*(.9+this.distMul*.1),u=e_.copy(i).addScaledVector(this.dir,-c);u.y+=h;let f=new T().copy(i);f.y+=1.15,n.ahead&&f.lerp(n.ahead,.28);let d=n.cine&&!this.comfort;if(this.cine=Dr(this.cine,d?1:0,d?5:3,t),this.cine>.01){let M=new T(-this.dir.z,0,this.dir.x).multiplyScalar(this.cineSide),y=new T().copy(i).addScaledVector(M,9.5).addScaledVector(this.dir,3.5);y.y=i.y-.6,u=u.lerp(y,this.cine)}this.mode==="hood"&&(u.copy(i).addScaledVector(e.up,1.55).addScaledVector(e.fwd,.1),f.copy(i).addScaledVector(e.fwd,20).addScaledVector(e.up,1)),this.mode==="fall"&&(u.copy(this.pos),f.copy(i)),n.override&&(u.copy(n.override.pos),f.copy(n.override.look)),this.inited||(this.pos.copy(u),this.look.copy(f),this.inited=!0);let m=this.mode==="hood"?40:n.override?n.override.k||6:e.grounded?9:5;if(this.pos.lerp(u,1-Math.exp(-m*t)),this.look.lerp(f,1-Math.exp(-(this.mode==="hood"?40:14)*t)),this.mode!=="hood"){let M=this.track.query(this.pos.x,this.pos.z,e.hint);!M.isVoid&&this.pos.y<M.h+1.2&&(this.pos.y=M.h+1.2)}let x=62+l*9+(e.nitroing&&!this.comfort?9:0)+this.cine*6;this.fov=Dr(this.fov,x,3,t),r.fov=this.fov,r.updateProjectionMatrix(),this.trauma=Math.max(0,this.trauma-t*1.4);let g=n.rumble||0,p=Math.pow(Math.min(this.trauma,1),2)*.9+g*(this.comfort?.03:.12);r.position.copy(this.pos),r.position.x+=(Cn(this.t*22,1)-.5)*p,r.position.y+=(Cn(this.t*22,7)-.5)*p,r.position.z+=(Cn(this.t*22,13)-.5)*p*.5,r.lookAt(this.look),p>0&&r.rotateZ((Cn(this.t*15,3)-.5)*p*.08)}};var Fh={dust:{col:[.62,.52,.38],size:[1.3,3],life:[1.2,2.4],g:-.6,drag:1.6,alpha:.22,grow:1.6,add:!1},mud:{col:[.28,.2,.12],size:[.25,.5],life:[.6,1.1],g:14,drag:.4,alpha:.95,grow:.2,add:!1},water:{col:[.86,.93,.95],size:[.5,1.4],life:[.5,1.1],g:11,drag:.6,alpha:.7,grow:1.2,add:!1},smoke:{col:[.42,.4,.38],size:[1,2.2],life:[.8,1.6],g:-1.2,drag:1.2,alpha:.32,grow:2.2,add:!1},splinter:{col:[.45,.3,.16],size:[.18,.35],life:[1,1.8],g:14,drag:.2,alpha:1,grow:0,add:!1},sparks:{col:[1,.7,.3],size:[.12,.3],life:[.25,.6],g:12,drag:.3,alpha:1,grow:-.5,add:!0},coin:{col:[1,.85,.35],size:[.2,.45],life:[.35,.7],g:4,drag:1,alpha:1,grow:-.6,add:!0},relic:{col:[.6,1,.85],size:[.3,.8],life:[.8,1.5],g:-2,drag:1,alpha:1,grow:.5,add:!0},flame:{col:[1,.55,.2],size:[.4,.9],life:[.15,.3],g:-3,drag:2,alpha:.9,grow:1.5,add:!0}},Oo=class{constructor(t,e,i){this.cap=e,this.n=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.c=new Float32Array(e*4),this.s=new Float32Array(e),this.life=new Float32Array(e),this.max=new Float32Array(e),this.k=new Array(e);let n=this.geo=new fe;n.setAttribute("position",new oe(this.p,3).setUsage(Ii)),n.setAttribute("color",new oe(this.c,4).setUsage(Ii)),n.setAttribute("size",new oe(this.s,1).setUsage(Ii)),this.mat=new Te({uniforms:{map:{value:is()},scale:{value:600},fogColor:{value:new At},fogDensity:{value:0}},vertexShader:`attribute float size; attribute vec4 color; varying vec4 vC; varying float vFog; uniform float scale, fogDensity;
        void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * scale / max(-mv.z, 0.1); gl_Position = projectionMatrix * mv; float d = -mv.z; vFog = 1.0 - exp(-fogDensity*fogDensity*d*d); }`,fragmentShader:`uniform sampler2D map; uniform vec3 fogColor; varying vec4 vC; varying float vFog; void main(){ vec4 t = texture2D(map, gl_PointCoord); vec4 c = vec4(vC.rgb, vC.a * t.a); ${i?"c.rgb *= c.a * (1.0 - vFog);":"c.rgb = mix(c.rgb, fogColor, vFog);"} if (c.a < 0.01) discard; gl_FragColor = c; }`,transparent:!0,depthWrite:!1,blending:i?si:Mn}),this.pts=new Wa(n,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=5,t.add(this.pts)}spawn(t,e,i,n,r,a,o,l=1){if(this.n>=this.cap)return;let c=this.n++,h=Fh[t];this.p[c*3]=e,this.p[c*3+1]=i,this.p[c*3+2]=n,this.v[c*3]=r,this.v[c*3+1]=a,this.v[c*3+2]=o,this.max[c]=this.life[c]=h.life[0]+Math.random()*(h.life[1]-h.life[0]),this.s[c]=(h.size[0]+Math.random()*(h.size[1]-h.size[0]))*l,this.k[c]=h;let u=.9+Math.random()*.2;this.c[c*4]=h.col[0]*u,this.c[c*4+1]=h.col[1]*u,this.c[c*4+2]=h.col[2]*u,this.c[c*4+3]=h.alpha}update(t){let e=0;for(;e<this.n;){if(this.life[e]-=t,this.life[e]<=0){let a=--this.n;if(e!==a){for(let o=0;o<3;o++)this.p[e*3+o]=this.p[a*3+o],this.v[e*3+o]=this.v[a*3+o];for(let o=0;o<4;o++)this.c[e*4+o]=this.c[a*4+o];this.s[e]=this.s[a],this.life[e]=this.life[a],this.max[e]=this.max[a],this.k[e]=this.k[a]}continue}let i=this.k[e],n=Math.exp(-i.drag*t);this.v[e*3]*=n,this.v[e*3+1]=this.v[e*3+1]*n-i.g*t,this.v[e*3+2]*=n,this.p[e*3]+=this.v[e*3]*t,this.p[e*3+1]+=this.v[e*3+1]*t,this.p[e*3+2]+=this.v[e*3+2]*t,this.s[e]=Math.max(.02,this.s[e]+i.grow*t);let r=this.life[e]/this.max[e];this.c[e*4+3]=i.alpha*Math.min(1,r*2.2)*Math.min(1,(1-r)*8+.2),e++}this.geo.setDrawRange(0,this.n),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0}},zo=class{constructor(t,e){this.q=e.particles,this.norm=new Oo(t,Math.round(1800*this.q)+200,!1),this.add=new Oo(t,Math.round(600*this.q)+100,!0)}setFog(t,e,i){for(let n of[this.norm,this.add])n.mat.uniforms.fogColor.value.copy(t.color),n.mat.uniforms.fogDensity.value=t.density,n.mat.uniforms.scale.value=e*i*.5}burst(t,e,i,n,r=10,a=4,o=.5,l=.5,c=1){r=Math.max(1,Math.round(r*this.q));let h=Fh[t].add?this.add:this.norm;for(let u=0;u<r;u++){let f=Math.random()*6.283,d=Math.random();h.spawn(t,e+(Math.random()-.5)*o*2,i+Math.random()*o*.5,n+(Math.random()-.5)*o*2,Math.cos(f)*a*d,(l+Math.random())*a*.6,Math.sin(f)*a*d,c)}}emit(t,e,i,n,r,a,o,l){(Fh[t].add?this.add:this.norm).spawn(t,e,i,n,r,a,o,l)}update(t){this.norm.update(t),this.add.update(t)}get count(){return this.norm.n+this.add.n}};var Ho=class{constructor(t){this.settings=t,this.keys=new Set,this.pressed=new Set,this.out={steer:0,throttle:0,brake:0,handbrake:!1,pitch:0,nitroPressed:!1},this.touch={steer:0,pitch:0,nitro:!1,hb:!1,brake:!1,active:!1},this.tilt={gamma:0,zero:0,ok:!1},this.lastDevice="keyboard",addEventListener("keydown",e=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),this.keys.has(e.code)||this.pressed.add(e.code),this.keys.add(e.code),this.lastDevice="keyboard"}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("blur",()=>this.keys.clear()),this.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0}bindTouch(t){let e=t.querySelector("#tStick"),i=t.querySelector("#tKnob"),n=t.querySelector("#tBase"),r=null,a=0,o=0,l=this.touch;e.addEventListener("touchstart",f=>{f.preventDefault();let d=f.changedTouches[0];r=d.identifier,a=d.clientX,o=d.clientY,n.style.left=a+"px",n.style.top=o+"px",n.classList.add("on"),l.active=!0,this.lastDevice="touch"},{passive:!1});let c=f=>{for(let d of f.changedTouches)if(d.identifier===r){let m=d.clientX-a,x=d.clientY-o;l.steer=Mt(m/55,-1,1),l.pitch=Mt(-x/55,-1,1),i.style.transform=`translate(${Mt(m,-55,55)}px, ${Mt(x,-55,55)}px)`}},h=f=>{for(let d of f.changedTouches)d.identifier===r&&(r=null,l.steer=0,l.pitch=0,i.style.transform="",n.classList.remove("on"))};e.addEventListener("touchmove",c,{passive:!0}),e.addEventListener("touchend",h),e.addEventListener("touchcancel",h);let u=(f,d)=>{let m=t.querySelector(f),x=p=>{p.preventDefault(),l[d]=!0,m.classList.add("down"),d==="nitro"&&this.pressed.add("TouchNitro")},g=()=>{l[d]=!1,m.classList.remove("down")};m.addEventListener("touchstart",x,{passive:!1}),m.addEventListener("touchend",g),m.addEventListener("touchcancel",g),m.addEventListener("mousedown",x),m.addEventListener("mouseup",g)};u("#tNitro","nitro"),u("#tHB","hb"),u("#tBrake","brake")}async enableGyro(){try{return typeof DeviceOrientationEvent<"u"&&DeviceOrientationEvent.requestPermission&&await DeviceOrientationEvent.requestPermission()!=="granted"?!1:(addEventListener("deviceorientation",t=>{let e=Math.abs(window.orientation||0)===90||innerWidth>innerHeight;this.tilt.gamma=e?(t.beta||0)*(window.orientation===-90?-1:1):t.gamma||0,this.tilt.ok=!0}),!0)}catch{return!1}}calibrate(){this.tilt.zero=this.tilt.gamma}wasPressed(t){return this.pressed.has(t)}anyPressed(){return this.pressed.size>0}update(t){let e=this.keys,i=this.out,n=this.settings,r=0,a=0,o=0,l=!1,c=0,h=!1;(e.has("KeyA")||e.has("ArrowLeft"))&&(r-=1),(e.has("KeyD")||e.has("ArrowRight"))&&(r+=1),(e.has("KeyW")||e.has("ArrowUp"))&&(a=1),(e.has("KeyS")||e.has("ArrowDown"))&&(o=1),e.has("Space")&&(l=!0),(this.pressed.has("ShiftLeft")||this.pressed.has("ShiftRight"))&&(h=!0);let u=navigator.getGamepads?navigator.getGamepads():[];for(let d of u){if(!d)continue;let m=d.axes[0]||0,x=d.axes[1]||0;Math.abs(m)>.12&&(r=m,this.lastDevice="pad");let g=d.buttons[7]?d.buttons[7].value:0,p=d.buttons[6]?d.buttons[6].value:0;g>.05&&(a=Math.max(a,g),this.lastDevice="pad"),p>.05&&(o=Math.max(o,p)),d.buttons[0]&&d.buttons[0].pressed&&(l=!0);let M=d.buttons[1]&&d.buttons[1].pressed;M&&!this._padB&&(h=!0),this._padB=M,t&&Math.abs(x)>.15&&(c=x);let y=d.buttons[9]&&d.buttons[9].pressed;y&&!this._padStart&&this.pressed.add("Escape"),this._padStart=y;let v=d.buttons[3]&&d.buttons[3].pressed;v&&!this._padY&&this.pressed.add("KeyC"),this._padY=v;let L=d.buttons[0]&&d.buttons[0].pressed;L&&!this._padA&&this.pressed.add("PadA"),this._padA=L,t&&Math.abs(x)>.15&&(c=-x)}let f=this.touch;if(n.touchMode==="tilt"&&this.tilt.ok){let d=this.tilt.gamma-this.tilt.zero;Math.abs(d)>1.5&&(r=Mt(d/22,-1,1))}else f.active&&Math.abs(f.steer)>.05&&(r=f.steer);return f.active&&Math.abs(f.pitch)>.1&&t&&(c=f.pitch),f.hb&&(l=!0),f.brake&&(o=1),this.pressed.has("TouchNitro")&&(h=!0),n.autoAccel&&!o&&(a=Math.max(a,1)),t&&!c&&(c=(e.has("KeyW")||e.has("ArrowUp")?1:0)-(e.has("KeyS")||e.has("ArrowDown")?1:0)),i.steer=r,i.throttle=a,i.brake=o,i.handbrake=l,i.pitch=c,i.nitroPressed=h,i}endFrame(){this.pressed.clear()}};var Wi=s=>440*Math.pow(2,(s-69)/12),i_=[{r:50,ch:[62,65,69]},{r:46,ch:[58,62,65]},{r:48,ch:[60,64,67]},{r:45,ch:[61,64,69]}],n_=[0,7,3,7,0,7,5,7,0,7,3,7,10,7,5,7],s_=[[0,62,1],[1,69,1],[2,74,3],[5,72,1],[6,69,2],[8,70,1.5],[9.5,69,.5],[10,67,2],[12,69,4]],Vo=class{constructor(t){this.settings=t,this.ctx=null,this.started=!1,this.intensity=0,this.musicMode="title"}start(){if(this.started){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.started=!0,this.master=e.createGain(),this.master.gain.value=.9;let i=e.createDynamicsCompressor();i.threshold.value=-14,i.ratio.value=4,this.master.connect(i),i.connect(e.destination),this.sfxBus=e.createGain(),this.sfxBus.connect(this.master),this.musBus=e.createGain(),this.musBus.connect(this.master),this.verb=e.createConvolver();let n=e.sampleRate*2.2,r=e.createBuffer(2,n,e.sampleRate);for(let l=0;l<2;l++){let c=r.getChannelData(l);for(let h=0;h<n;h++)c[h]=(Math.random()*2-1)*Math.pow(1-h/n,3)}this.verb.buffer=r;let a=e.createGain();a.gain.value=.22,this.verb.connect(a),a.connect(this.master),this.noiseBuf=e.createBuffer(1,e.sampleRate*2,e.sampleRate);let o=this.noiseBuf.getChannelData(0);for(let l=0;l<o.length;l++)o[l]=Math.random()*2-1;this._engine(),this._loops(),this.applyVolumes(),this.nextNote=e.currentTime+.1,this.step=0,this.timer=setInterval(()=>this._schedule(),60)}applyVolumes(){this.ctx&&(this.sfxBus.gain.value=this.settings.sfx,this.musBus.gain.value=this.settings.music*.55)}noise(t=!0){let e=this.ctx.createBufferSource();return e.buffer=this.noiseBuf,e.loop=t,e}_engine(){let t=this.ctx;this.eg=t.createGain(),this.eg.gain.value=0,this.eg.connect(this.sfxBus),this.elp=t.createBiquadFilter(),this.elp.type="lowpass",this.elp.frequency.value=600,this.elp.Q.value=2.5,this.elp.connect(this.eg);let e=t.createWaveShaper(),i=new Float32Array(256);for(let l=0;l<256;l++){let c=l/128-1;i[l]=Math.tanh(c*2.6)}e.curve=i,e.connect(this.elp),this.o1=t.createOscillator(),this.o1.type="sawtooth",this.o2=t.createOscillator(),this.o2.type="square",this.o3=t.createOscillator(),this.o3.type="sawtooth";let n=t.createGain(),r=t.createGain(),a=t.createGain();n.gain.value=.5,r.gain.value=.35,a.gain.value=.25,this.o1.connect(n),this.o2.connect(r),this.o3.connect(a),n.connect(e),r.connect(e),a.connect(e),this.lfo=t.createOscillator(),this.lfo.type="square";let o=t.createGain();o.gain.value=.18,this.lfo.connect(o),o.connect(n.gain),[this.o1,this.o2,this.o3,this.lfo].forEach(l=>l.start())}_loopNoise(t,e,i){let n=this.ctx,r=this.noise(),a=n.createBiquadFilter();a.type=t,a.frequency.value=e,a.Q.value=i;let o=n.createGain();return o.gain.value=0,r.connect(a),a.connect(o),o.connect(this.sfxBus),r.start(n.currentTime,Math.random()),{g:o,fl:a}}_loops(){this.skid=this._loopNoise("bandpass",1100,3),this.gravel=this._loopNoise("highpass",2400,.7),this.wind=this._loopNoise("lowpass",700,.5),this.water=this._loopNoise("bandpass",600,.6),this.rumble=this._loopNoise("lowpass",140,1.2);let t=this.ctx;this.rumbleOsc=t.createOscillator(),this.rumbleOsc.frequency.value=34;let e=t.createGain();e.gain.value=0,this.rumbleOsc.connect(e),e.connect(this.sfxBus),this.rumbleOsc.start(),this.rumbleG=e}update(t,e){if(!this.ctx)return;let i=this.ctx.currentTime,n=(l,c,h=.06)=>l.setTargetAtTime(c,i,h),r=e.rpm||900,a=r/60*1.5;n(this.o1.frequency,a),n(this.o2.frequency,a*.5),n(this.o3.frequency,a*1.01*2),n(this.lfo.frequency,a*.25),n(this.elp.frequency,280+r*.32*(.5+e.throttle*.7)+(e.nitro?900:0)),n(this.eg.gain,e.running?.16+e.throttle*.12:0,.1),n(this.skid.g.gain,e.running?Mt(e.slip,0,1)*.22:0),n(this.gravel.g.gain,e.running&&e.grounded?Mt(e.speed/30,0,1)*(e.surf===3?.05:.09):0),this.gravel.fl.frequency.value=e.surf===3?900:2400,n(this.wind.g.gain,e.running?Mt(e.speed/40,0,1)**2*.22+(e.grounded?0:.05):0),n(this.water.g.gain,e.running&&e.inWater?.3:0);let o=Mt(e.boulder||0,0,1);n(this.rumble.g.gain,o*.85),n(this.rumbleG.gain,o*.25),this.intensity=Mt(e.intensity||0,0,1)}setMusic(t){this.musicMode=t}_schedule(){let t=this.ctx;if(!t)return;let e=this.musicMode==="run"?142:this.musicMode==="title"?92:100,i=60/e/4;for(;this.nextNote<t.currentTime+.25;)this._play(this.step,this.nextNote,i),this.nextNote+=i,this.step++}_tone(t,e,i,n,r,a,o={}){let l=this.ctx,c=l.createOscillator(),h=l.createGain();c.type=t,c.frequency.setValueAtTime(e,i),o.slide&&c.frequency.exponentialRampToValueAtTime(o.slide,i+n),o.detune&&(c.detune.value=o.detune);let u=o.a||.005;h.gain.setValueAtTime(0,i),h.gain.linearRampToValueAtTime(r,i+u),h.gain.exponentialRampToValueAtTime(8e-4,i+n);let f=c;if(o.lp){let d=l.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(o.lp,i),o.lpEnd&&d.frequency.exponentialRampToValueAtTime(o.lpEnd,i+n),c.connect(d),f=d}f.connect(h),h.connect(a||this.musBus),o.verb&&h.connect(this.verb),c.start(i),c.stop(i+n+.05)}_hit(t,e,i,n,r,a=0,o=3e3){if(this._tone("sine",e,t,n,r,this.musBus,{slide:i}),a){let l=this.ctx,c=this.noise(!1),h=l.createBiquadFilter(),u=l.createGain();h.type="bandpass",h.frequency.value=o,h.Q.value=.8,u.gain.setValueAtTime(a,t),u.gain.exponentialRampToValueAtTime(.001,t+n*.5),c.connect(h),h.connect(u),u.connect(this.musBus),c.start(t,Math.random()),c.stop(t+n)}}_play(t,e,i){let n=this.musicMode;if(n==="off")return;let r=Math.floor(t/16)%4,a=t%16,o=i_[r],l=n==="run"?this.intensity:n==="title"?.35:.15;if(a%4===0&&this._tone("sawtooth",Wi(o.r-12),e,i*3.6,.13,this.musBus,{lp:420,lpEnd:160}),n==="run"||a%2===0){let c=o.r+12+n_[a];this._tone("sawtooth",Wi(c),e,i*1.6,.035+l*.02,this.musBus,{lp:1800,detune:6}),this._tone("sawtooth",Wi(c),e,i*1.6,.025,this.musBus,{lp:1600,detune:-8})}if(a===0)for(let c of o.ch)this._tone("triangle",Wi(c),e,i*15,.03,this.musBus,{a:.3,verb:!0});if(n==="run"?((a===0||a===10)&&this._hit(e,82,46,.5,.42,.05,800),l>.25&&(a===4||a===12)&&this._hit(e,180,120,.18,.12,.22,2400),l>.45&&a%2===0&&this._hit(e,110,70,.14,.12,.03,600),l>.75&&a%2===1&&this._hit(e,120,80,.1,.07,0,600)):a===0&&this._hit(e,70,45,.9,.25,.02,600),n==="run"&&l>.55||n==="title"&&Math.floor(t/64)%2===1){let c=t%64/4;for(let[h,u,f]of s_)if(Math.abs(c-h)<.01){let d=f*i*4,m=n==="run"?.06+l*.04:.045;this._tone("sawtooth",Wi(u),e,d,m,this.musBus,{a:.04,lp:2600,lpEnd:900,verb:!0}),this._tone("sawtooth",Wi(u-12),e,d,m*.6,this.musBus,{a:.05,lp:1400,lpEnd:500})}}}sfx(t,e=1){let i=this.ctx;if(!i)return;let n=i.currentTime,r=this.sfxBus,a=(o,l,c,h,u,f)=>{let d=this.noise(!1),m=i.createBiquadFilter(),x=i.createGain();m.type=l,m.frequency.setValueAtTime(c,n),f&&m.frequency.exponentialRampToValueAtTime(f,n+o),m.Q.value=h,x.gain.setValueAtTime(u,n),x.gain.exponentialRampToValueAtTime(.001,n+o),d.connect(m),m.connect(x),x.connect(r),d.start(n,Math.random()),d.stop(n+o+.05)};switch(t){case"coin":this._tone("sine",1568,n,.12,.08*e,r),this._tone("sine",2093,n+.05,.18,.07*e,r);break;case"relic":[0,4,7,12,16].forEach((o,l)=>this._tone("triangle",Wi(74+o),n+l*.07,.9,.06,r,{verb:!0}));break;case"nitro":a(.9,"bandpass",300,.7,.4,2400),this._tone("sawtooth",60,n,.6,.15,r,{slide:30,lp:300});break;case"land":a(.25,"lowpass",300,1,.5*e),this._tone("sine",70,n,.25,.4*e,r,{slide:40});break;case"impact":a(.3,"lowpass",900,1,.5*e),this._tone("square",140,n,.12,.08*e,r,{slide:60});break;case"clang":[523,1187,1730,2410].forEach((o,l)=>this._tone("sine",o,n,.6-l*.1,.07,r,{verb:!0})),a(.1,"highpass",3e3,1,.3);break;case"crack":a(.35,"highpass",1800,1,.5);for(let o=0;o<5;o++)this._tone("square",300+Math.random()*500,n+o*.04,.03,.08,r);break;case"slam":a(1.4,"lowpass",400,1,.9,80),this._tone("sine",55,n,1,.6,r,{slide:28});break;case"snap":a(.08,"bandpass",1500,2,.6),this._tone("square",220,n,.05,.1,r);break;case"swoosh":a(.35,"bandpass",600,3,.35,2400);break;case"splash":a(.9,"bandpass",900,.6,.55,300);break;case"rumble":a(2.2,"lowpass",160,1,.8,60);break;case"shift":this._tone("square",90,n,.05,.05,r);break;case"ui":this._tone("triangle",880,n,.08,.06,r),this._tone("triangle",1320,n+.04,.1,.05,r);break;case"mission":[62,66,69,74].forEach((o,l)=>this._tone("sawtooth",Wi(o),n+l*.11,.5,.05,r,{lp:2400,verb:!0}));break;case"perfect":[69,74,78].forEach((o,l)=>this._tone("triangle",Wi(o+12),n+l*.06,.4,.06,r,{verb:!0}));break;case"crash":a(.8,"lowpass",1200,1,.8,200),this._tone("sawtooth",90,n,.4,.12,r,{slide:40,lp:500});break;case"gameover":[62,61,60,55].forEach((o,l)=>this._tone("sawtooth",Wi(o-12),n+l*.35,.6,.08,r,{lp:900,verb:!0}));break}}voice(t,e){let i=this.ctx;if(!i)return;let n=i.currentTime,r=t==="penny"?330:t==="prof"?160:200,a=Math.min(14,Math.ceil(e.length/5));for(let o=0;o<a;o++)this._tone("square",r*(.85+Math.random()*.4),n+o*.075,.06,.025,this.sfxBus,{lp:1400})}};var kh={};function Go(s,t=128){if(kh[s])return kh[s];let e=document.createElement("canvas");e.width=e.height=t;let i=e.getContext("2d");i.scale(t/128,t/128);let n=i.createRadialGradient(64,50,10,64,64,80);n.addColorStop(0,s==="penny"?"#6a8a8a":s==="prof"?"#7a6a4a":"#8a6a3a"),n.addColorStop(1,"#2a1a0e"),i.fillStyle=n,i.fillRect(0,0,128,128);let r=s==="prof"?"#e0b898":"#d09468";if(i.fillStyle=s==="dusty"?"#6a3f22":s==="penny"?"#b9a57a":"#3a3a44",i.beginPath(),i.ellipse(64,132,52,34,0,0,6.3),i.fill(),s==="penny"&&(i.fillStyle="#b8302a",i.beginPath(),i.moveTo(40,104),i.quadraticCurveTo(64,120,88,104),i.lineTo(84,116),i.quadraticCurveTo(64,128,44,116),i.fill()),i.fillStyle=r,i.fillRect(54,84,20,18),s==="penny"&&(i.fillStyle="#8a3e1e",i.beginPath(),i.ellipse(64,58,34,38,0,0,6.3),i.fill()),i.fillStyle=r,i.beginPath(),i.ellipse(64,62,24,29,0,0,6.3),i.fill(),i.fillStyle="#1a120c",i.beginPath(),i.ellipse(55,60,3,3.6,0,0,6.3),i.ellipse(73,60,3,3.6,0,0,6.3),i.fill(),i.strokeStyle=s==="prof"?"#e8e8e0":"#3a2010",i.lineWidth=3,i.beginPath(),i.moveTo(48,52),i.lineTo(60,51),i.moveTo(68,51),i.lineTo(80,52),i.stroke(),i.strokeStyle="#6a2a1a",i.lineWidth=2.5,i.beginPath(),s==="dusty"?(i.moveTo(54,78),i.quadraticCurveTo(66,84,76,75)):i.arc(64,74,7,.3,2.8),i.stroke(),i.fillStyle="rgba(120,60,30,.35)",i.beginPath(),i.ellipse(64,68,4,6,0,0,6.3),i.fill(),s==="dusty")i.fillStyle="rgba(60,40,24,.35)",i.beginPath(),i.ellipse(64,80,20,10,0,0,Math.PI),i.fill(),i.fillStyle="#7a5c3c",i.beginPath(),i.ellipse(64,40,48,11,-.05,0,6.3),i.fill(),i.fillStyle="#6a4c30",i.beginPath(),i.moveTo(40,40),i.quadraticCurveTo(42,14,64,14),i.quadraticCurveTo(86,14,88,40),i.fill(),i.fillStyle="#3a2a1c",i.fillRect(41,33,46,6);else if(s==="penny"){i.fillStyle="#8a3e1e",i.beginPath(),i.ellipse(64,38,28,12,0,Math.PI,0),i.fill(),i.fillStyle="#b48a3c",i.strokeStyle="#5a4018",i.lineWidth=2;for(let a of[52,76])i.beginPath(),i.arc(a,38,9,0,6.3),i.fill(),i.stroke(),i.fillStyle="#9ad0d8",i.beginPath(),i.arc(a,38,5.5,0,6.3),i.fill(),i.fillStyle="#b48a3c"}else i.fillStyle="#ecece4",i.beginPath(),i.ellipse(40,50,8,14,0,0,6.3),i.ellipse(88,50,8,14,0,0,6.3),i.fill(),i.beginPath(),i.moveTo(50,72),i.quadraticCurveTo(64,64,78,72),i.quadraticCurveTo(64,78,50,72),i.fill(),i.strokeStyle="#8a6a32",i.lineWidth=2,i.beginPath(),i.arc(55,60,8,0,6.3),i.moveTo(81,60),i.arc(73,60,8,0,6.3),i.moveTo(63,60),i.lineTo(65,60),i.stroke();return kh[s]=e,e}var ff={dusty:"DUSTY",penny:"PENNY",prof:"PROF. ABERNATHY"};var ii=(s,t=document)=>t.querySelector(s),Wo=class{constructor(t){t.innerHTML=`
      <div class="scroll"><div class="v" id="hDist">0 m</div><div class="l">EXPEDITION DISTANCE</div></div>
      <div class="counters"><div class="ctr"><i class="coin"></i><span id="hCoins">0</span></div><div class="ctr"><i class="relicI"></i><span id="hRelics">0</span></div></div>
      <div class="scoreBox"><div class="v" id="hScore">0</div><div class="mult" id="hMult">\xD71.0</div></div>
      <div class="missions" id="hMissions"></div>
      <div class="danger" id="hDanger"><div class="idol">\u{1F5FF}</div><div class="tube"><div class="fill" id="hDFill"></div></div><div class="lbl" id="hDLbl">60 m</div></div>
      <canvas id="mini" width="340" height="340"></canvas>
      <canvas id="speedo" width="460" height="400"></canvas>
      <div class="bark off" id="hBark"><canvas width="128" height="128"></canvas><div><div class="who"></div><div class="txt"></div></div></div>
      <div class="popups" id="hPops"></div>
      <div id="hBanner"></div>
      <div class="hint hidden" id="hHint">BRAKE</div>`,this.root=t,this.el={dist:ii("#hDist",t),coins:ii("#hCoins",t),relics:ii("#hRelics",t),score:ii("#hScore",t),mult:ii("#hMult",t),missions:ii("#hMissions",t),danger:ii("#hDanger",t),dfill:ii("#hDFill",t),dlbl:ii("#hDLbl",t),bark:ii("#hBark",t),pops:ii("#hPops",t),banner:ii("#hBanner",t),hint:ii("#hHint",t)},this.mini=ii("#mini",t).getContext("2d"),this.speedo=ii("#speedo",t).getContext("2d"),this.barkQ=[],this.barkT=0,this.last={},this.mt=0}set(t,e){this.last[t]!==e&&(this.last[t]=e,this.el[t].textContent=e)}bark(t,e,i){this.barkQ.length>2&&this.barkQ.shift(),this.barkQ.push({who:t,text:e}),this.barkT<=0&&this._nextBark(i),this.audio=i}_nextBark(t){let e=this.barkQ.shift();if(!e){this.el.bark.classList.add("off");return}let n=this.el.bark.querySelector("canvas").getContext("2d");n.clearRect(0,0,128,128),n.drawImage(Go(e.who),0,0,128,128),this.el.bark.querySelector(".who").textContent=ff[e.who],this.el.bark.querySelector(".txt").textContent=e.text,this.el.bark.classList.remove("off"),this.barkT=2.6+e.text.length*.03,t&&t.voice(e.who,e.text)}popup(t,e,i={}){let n=document.createElement("div");for(n.className="pop"+(i.big?" big":"")+(i.bad?" bad":""),n.innerHTML=t+(e?`<small>+${e.toLocaleString()}</small>`:""),this.el.pops.appendChild(n),setTimeout(()=>n.remove(),1400);this.el.pops.children.length>3;)this.el.pops.firstChild.remove();this.el.mult.classList.add("pop"),setTimeout(()=>this.el.mult.classList.remove("pop"),120)}banner(t,e){let i=document.createElement("div");i.className="banner",i.innerHTML=`${t}${e?`<small>${e}</small>`:""}`,this.el.banner.innerHTML="",this.el.banner.appendChild(i)}missions(t){let e=t.map(i=>i.id+":"+Math.floor(i.p)+(i.done?"d":"")).join("|");e!==this.mkey&&(this.mkey=e,this.el.missions.innerHTML='<div class="mtitle">FIELD JOURNAL</div>'+t.map(i=>`<div class="mcard ${i.p>=i.goal?"done":""}">${i.text}<div class="bar"><b style="width:${Mt(i.p/i.goal,0,1)*100}%"></b></div></div>`).join(""))}update(t,e){this.set("dist",Math.floor(e.dist).toLocaleString()+" m"),this.set("coins",String(e.coins)),this.set("relics",String(e.relics)),this.set("score",e.score.toLocaleString()),this.set("mult","\xD7"+e.mult.toFixed(1));let i=Mt(e.gap,0,120),n=Mt(1-(i-8)/80,0,1);this.el.dfill.style.height=(n*100).toFixed(1)+"%",this.set("dlbl",Math.max(0,Math.round(i))+" m"),this.el.danger.classList.toggle("hot",n>.72),this.el.hint.classList.toggle("hidden",!e.brakeHint),this.el.hint.classList.toggle("cb",!!e.colorblind),this.barkT>0&&(this.barkT-=t,this.barkT<=0&&this._nextBark(this.audio)),this.mt-=t,this.mt<=0&&(this.mt=1/20,this._mini(e),this._speedo(e))}_mini(t){let e=this.mini,i=340,n=160;e.clearRect(0,0,i,i),e.save(),e.translate(i/2,i/2);let r=e.createRadialGradient(0,0,10,0,0,n);r.addColorStop(0,"#efdcb0"),r.addColorStop(.85,"#c8a870"),r.addColorStop(1,"#8a6a3a"),e.fillStyle=r,e.beginPath(),e.arc(0,0,n,0,6.3),e.fill(),e.lineWidth=12,e.strokeStyle="#a07a30",e.stroke(),e.lineWidth=3,e.strokeStyle="#f0d080",e.beginPath(),e.arc(0,0,n-7,0,6.3),e.stroke(),e.beginPath(),e.arc(0,0,n-12,0,6.3),e.clip();let a=t.trackPts,o=1.15,l=t.heading,c=Math.cos(l),h=Math.sin(l),u=(d,m)=>{let x=d-t.cx,g=m-t.cz,p=-(x*c-g*h),M=-(x*h+g*c);return[p*o,M*o]};if(a&&a.length){e.lineCap="round",e.lineJoin="round";for(let[m,x]of[[26,"rgba(90,60,30,.35)"],[12,"#7a5228"]]){e.lineWidth=m,e.strokeStyle=x,e.beginPath();let g=!0;for(let p of a){if(p.mark)continue;let[M,y]=u(p.x,p.z);g?(e.moveTo(M,y),g=!1):e.lineTo(M,y)}e.stroke()}e.setLineDash([6,8]),e.lineWidth=2,e.strokeStyle="#3a2410",e.beginPath();let d=!0;for(let m of a){if(m.mark)continue;let[x,g]=u(m.x,m.z);d?(e.moveTo(x,g),d=!1):e.lineTo(x,g)}e.stroke(),e.setLineDash([]);for(let m of a)if(m.mark){let[x,g]=u(m.x,m.z);e.fillStyle=m.mark==="set"?"#c83a1a":m.mark==="fork"?"#2a6a9a":"#e0a020",e.beginPath(),e.arc(x,g,7,0,6.3),e.fill()}}if(t.bx!==void 0){let[d,m]=u(t.bx,t.bz);e.fillStyle="#5a4a3a",e.strokeStyle="#d8402a",e.lineWidth=4,e.beginPath(),e.arc(d,m,13,0,6.3),e.fill(),e.stroke()}e.restore(),e.save(),e.translate(i/2,i/2),e.fillStyle="#c8321a",e.strokeStyle="#fff",e.lineWidth=2,e.beginPath(),e.moveTo(0,-16),e.lineTo(11,12),e.lineTo(0,6),e.lineTo(-11,12),e.closePath(),e.fill(),e.stroke();let f=l;e.rotate(f),e.fillStyle="#7a1a0a",e.font="bold 26px Cinzel, serif",e.textAlign="center",e.fillText("N",0,-n+38),e.restore()}_speedo(t){let e=this.speedo,i=460,n=400;e.clearRect(0,0,i,n);let r=250,a=220,o=170,l=e.createRadialGradient(r,a-30,20,r,a,o);l.addColorStop(0,"#3a2818"),l.addColorStop(1,"#160e08"),e.fillStyle=l,e.beginPath(),e.arc(r,a,o,0,6.3),e.fill(),e.lineWidth=14;let c=e.createLinearGradient(0,a-o,0,a+o);c.addColorStop(0,"#f0d080"),c.addColorStop(.5,"#a07a30"),c.addColorStop(1,"#5a4018"),e.strokeStyle=c,e.stroke();let h=Math.PI*.8,u=Math.PI*2.2,f=180;e.lineWidth=3,e.strokeStyle="#e8d8b0",e.fillStyle="#e8d8b0",e.font="600 22px Oswald, sans-serif",e.textAlign="center",e.textBaseline="middle";for(let g=0;g<=f;g+=10){let p=h+(u-h)*g/f,M=g%30===0;e.beginPath(),e.moveTo(r+Math.cos(p)*(o-14),a+Math.sin(p)*(o-14)),e.lineTo(r+Math.cos(p)*(o-(M?34:24)),a+Math.sin(p)*(o-(M?34:24))),e.stroke(),M&&e.fillText(g,r+Math.cos(p)*(o-56),a+Math.sin(p)*(o-56))}e.lineWidth=8,e.strokeStyle="rgba(216,70,43,.85)",e.beginPath(),e.arc(r,a,o-18,h+(u-h)*140/f,u),e.stroke();let d=t.speed*3.6,m=h+(u-h)*Mt(d/f,0,1.03);e.lineWidth=7,e.strokeStyle="#ff5a30",e.lineCap="round",e.beginPath(),e.moveTo(r-Math.cos(m)*18,a-Math.sin(m)*18),e.lineTo(r+Math.cos(m)*(o-30),a+Math.sin(m)*(o-30)),e.stroke(),e.fillStyle="#c49a48",e.beginPath(),e.arc(r,a,16,0,6.3),e.fill(),e.fillStyle="#fff4d8",e.font="600 56px Oswald, sans-serif",e.fillText(Math.round(d),r,a+62),e.font="500 18px Oswald",e.fillStyle="#c8b890",e.fillText("KM/H  \xB7  GEAR "+(t.gear+1),r,a+100),e.textAlign="left",e.font="700 20px Oswald",e.fillStyle=t.nitroing?"#ffb060":"#f0d8a0",e.fillText("NITRO",12,30);for(let g=0;g<t.nitroCap;g++){let p=Mt(t.nitro-g,0,1),M=12+g*30;e.fillStyle="#2a1a10",e.fillRect(M,46,22,46),e.fillStyle=p>=1?"#d8402a":"#8a3020",e.fillRect(M+2,48+42*(1-p),18,42*p),e.strokeStyle="#c49a48",e.lineWidth=2,e.strokeRect(M,46,22,46),e.fillStyle="#c49a48",e.fillRect(M+6,40,10,6)}let x=Mt(t.hp/t.maxHp,0,1);e.fillStyle="#f0d8a0",e.fillText("HP",12,n-22),e.fillStyle="#2a1a10",e.fillRect(52,n-36,150,24),e.fillStyle=x>.5?"#7aa83a":x>.25?"#e0a020":"#d8402a",e.fillRect(54,n-34,146*x,20),e.strokeStyle="#c49a48",e.strokeRect(52,n-36,150,24)}};var Xo=[{id:"jade_mask",name:"Jade Mask of Ix-Tamun",rarity:"common",shape:"mask",col:"#4fbf8a",lore:"Worn by a priest-king who never blinked. The eyes still follow you.",curse:"Wakes the Great Boulder."},{id:"sun_disc",name:"Sun Disc of Kaal",rarity:"common",shape:"disc",col:"#e8b84a",lore:"Hammered gold that hums at noon.",curse:"Doors seal behind the bearer."},{id:"serpent_staff",name:"Serpent Staff Head",rarity:"common",shape:"serpent",col:"#78c06a",lore:"Coiled bronze, tongue of obsidian.",curse:"River beasts grow hungry."},{id:"obsidian_blade",name:"Obsidian Sacrifice Blade",rarity:"common",shape:"blade",col:"#6b6a80",lore:"Sharper than any steel of 1936.",curse:"Blades swing in the dark."},{id:"feather_crown",name:"Crown of Quetzal Plumes",rarity:"rare",shape:"crown",col:"#3fb6c8",lore:"The feathers have not faded in a thousand years.",curse:"Bridges forget their ropes."},{id:"monkey_idol",name:"Laughing Monkey Idol",rarity:"common",shape:"idol",col:"#c9a24a",lore:"It is definitely laughing at you.",curse:"Pillars lose their footing."},{id:"rain_bowl",name:"Rain-Caller Bowl",rarity:"common",shape:"bowl",col:"#5aa0d8",lore:"Never empty, never spills.",curse:"Waterfalls roar louder."},{id:"jaguar_fang",name:"Jaguar Fang Necklace",rarity:"common",shape:"fang",col:"#e8dcc0",lore:"Each fang from a different legend.",curse:"Something stalks the canopy."},{id:"star_map",name:"Star Map Tablet",rarity:"rare",shape:"tablet",col:"#b8a070",lore:"Shows a sky that has not existed for ages.",curse:"Paths fork without warning."},{id:"colossus_eye",name:"Eye of the Colossus",rarity:"rare",shape:"eye",col:"#f0d060",lore:"Pried from a statue that did not appreciate it.",curse:"Giants fall toward the thief."},{id:"heart_stone",name:"Heartstone of the Deep Temple",rarity:"legendary",shape:"heart",col:"#e04848",lore:"Warm to the touch. It beats, faintly.",curse:"The whole temple wants it back."},{id:"emerald_skull",name:"Emerald Skull",rarity:"legendary",shape:"skull",col:"#38d080",lore:"Cut from a single stone. Nobody knows how.",curse:"Every trap remembers your face."}],r_={common:10,rare:3.5,legendary:1};function mf(s,t){let e=Xo.map(i=>({w:r_[i.rarity]*(t&&i.rarity!=="common"?2.5:1),v:i}));return s.weighted(e)}function gf(s,t=128,e=!0){let i=document.createElement("canvas");i.width=i.height=t;let n=i.getContext("2d"),r=t/128;n.scale(r,r);let a=n.createRadialGradient(64,60,4,64,64,64);a.addColorStop(0,e?"rgba(255,230,160,0.55)":"rgba(80,70,60,0.3)"),a.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=a,n.fillRect(0,0,128,128);let o=e?s.col:"#3a342c",l=e?"rgba(0,0,0,0.35)":"rgba(0,0,0,0.5)",c=n.createLinearGradient(30,20,100,110);c.addColorStop(0,e?"#fff6d8":"#4a443a"),c.addColorStop(.25,o),c.addColorStop(1,e?pf(o,-.45):"#221e18"),n.fillStyle=c,n.strokeStyle=e?pf(o,-.6):"#1a1612",n.lineWidth=3;let h=()=>{n.fill(),n.stroke()};switch(n.beginPath(),s.shape){case"mask":n.moveTo(64,18),n.bezierCurveTo(104,18,104,70,92,92),n.lineTo(64,112),n.lineTo(36,92),n.bezierCurveTo(24,70,24,18,64,18),h(),n.fillStyle=l,n.fillRect(42,50,16,8),n.fillRect(70,50,16,8),n.fillRect(54,82,20,6);break;case"disc":n.arc(64,64,44,0,6.3),h(),n.beginPath(),n.strokeStyle=l;for(let u=0;u<16;u++){let f=u/16*6.28;n.moveTo(64+Math.cos(f)*20,64+Math.sin(f)*20),n.lineTo(64+Math.cos(f)*38,64+Math.sin(f)*38)}n.stroke(),n.beginPath(),n.arc(64,64,14,0,6.3),n.fillStyle=l,n.fill();break;case"serpent":n.lineWidth=14,n.strokeStyle=o,n.moveTo(30,100),n.bezierCurveTo(10,60,110,70,90,34),n.stroke(),n.beginPath(),n.lineWidth=3,n.fillStyle=c,n.ellipse(90,30,14,10,-.5,0,6.3),n.fill();break;case"blade":n.moveTo(64,12),n.lineTo(82,70),n.lineTo(64,84),n.lineTo(46,70),n.closePath(),h(),n.fillStyle="#7a5030",n.fillRect(56,84,16,30);break;case"crown":n.moveTo(24,96),n.lineTo(30,46),n.lineTo(46,70),n.lineTo(64,26),n.lineTo(82,70),n.lineTo(98,46),n.lineTo(104,96),n.closePath(),h();break;case"idol":n.ellipse(64,46,24,22,0,0,6.3),h(),n.beginPath(),n.moveTo(44,64),n.lineTo(84,64),n.lineTo(92,112),n.lineTo(36,112),n.closePath(),h(),n.fillStyle=l,n.beginPath(),n.arc(56,44,4,0,6.3),n.arc(72,44,4,0,6.3),n.fill(),n.beginPath(),n.arc(64,54,8,.2,2.9),n.stroke();break;case"bowl":n.moveTo(20,60),n.lineTo(108,60),n.bezierCurveTo(104,100,24,100,20,60),h(),n.fillStyle="#9fd8ff",n.beginPath(),n.ellipse(64,60,44,8,0,0,6.3),n.fill();break;case"fang":for(let u=0;u<5;u++){n.beginPath();let f=28+u*18;n.moveTo(f-6,50),n.lineTo(f+6,50),n.lineTo(f,76+(u===2?14:0)),n.closePath(),h()}n.beginPath(),n.strokeStyle="#8a6a3a",n.lineWidth=3,n.moveTo(16,40),n.quadraticCurveTo(64,64,112,40),n.stroke();break;case"tablet":n.roundRect?n.roundRect(28,18,72,92,8):n.rect(28,18,72,92),h(),n.fillStyle=e?"#fff4c0":"#555";for(let u=0;u<9;u++)n.beginPath(),n.arc(40+u*37%50,32+u*8,2.5,0,6.3),n.fill();break;case"eye":n.moveTo(14,64),n.quadraticCurveTo(64,14,114,64),n.quadraticCurveTo(64,114,14,64),h(),n.beginPath(),n.fillStyle=l,n.arc(64,64,16,0,6.3),n.fill();break;case"heart":n.moveTo(64,108),n.bezierCurveTo(10,70,24,20,64,44),n.bezierCurveTo(104,20,118,70,64,108),h();break;case"skull":n.ellipse(64,56,34,32,0,0,6.3),h(),n.fillRect(46,80,36,22),n.strokeRect(46,80,36,22),n.fillStyle=l,n.beginPath(),n.ellipse(51,56,9,10,0,0,6.3),n.ellipse(77,56,9,10,0,0,6.3),n.fill();break}return e&&(n.globalCompositeOperation="lighter",n.fillStyle="rgba(255,255,255,0.25)",n.beginPath(),n.ellipse(52,36,12,5,-.6,0,6.3),n.fill()),i}function pf(s,t){let e=parseInt(s.slice(1),16),i=e>>16,n=e>>8&255,r=e&255,a=o=>Math.round(Math.max(0,Math.min(255,o+o*t)));return`rgb(${a(i)},${a(n)},${a(r)})`}var xf=[{id:"engine",name:"Engine",desc:"More torque and top speed",icon:"\u2699"},{id:"nitro",name:"Nitro",desc:"More canisters, stronger burn",icon:"\u{1F525}"},{id:"suspension",name:"Suspension",desc:"Longer travel, softer landings",icon:"\u26D3"},{id:"armor",name:"Roll Cage & Armor",desc:"More HP, less damage",icon:"\u{1F6E1}"}],qo=5;function Yo(s){return{gold:[150,350,700,1200,2e3][s]??1/0,shards:[0,0,2,4,8][s]??1/0}}function Bh(s,t){let e=s.upgrades[t];if(e>=qo)return!1;let i=Yo(e);return s.gold>=i.gold&&s.shards>=i.shards}function vf(s,t){if(!Bh(s,t))return!1;let e=Yo(s.upgrades[t]);return s.gold-=e.gold,s.shards-=e.shards,s.upgrades[t]++,!0}var ci=(s,t=document)=>t.querySelector(s),_f=["Splendid haul, my boy! Though do try to bring the car back in one piece.","Every relic carries a curse, Dusty. Every single one. Do read the labels.","The museum board wants more legendary pieces. No pressure.","Miss Marlowe tells me you jumped a waterfall. On purpose?","Upgrade that suspension. My spine still remembers the last expedition."],$o=class{constructor(t,e){this.root=t,this.g=e,this.cur=null,this.tab="relics"}show(t,e){if(this.root.innerHTML="",this.cur=t,!t)return;let i=document.createElement("div");i.className="screen",i.id=t,this.root.appendChild(i),this["_"+t](i,e),i.querySelectorAll("button").forEach(r=>r.addEventListener("click",()=>this.g.audio.sfx("ui")));let n=i.querySelector("button.btn");n&&n.classList.add("sel")}_title(t){let e=this.g.save;t.innerHTML=`<div class="logo"><div class="l1">RELIC RUNNER</div><div class="l2">4\xD74</div><div class="tag">A PULP ADVENTURE \xB7 1936</div></div>
      <div class="menu"><button class="btn" id="bStart">START EXPEDITION</button><button class="btn alt" id="bMuseum">MUSEUM &amp; WORKSHOP</button><button class="btn alt" id="bOpt">OPTIONS</button></div>
      <div class="foot">${this.g.input.isTouch?"Touch: left thumb steers \xB7 auto-accelerate \xB7 NITRO / DRIFT buttons":"W/S throttle \xB7 brake \xB7 A/D steer \xB7 SPACE handbrake \xB7 SHIFT nitro \xB7 W/S in the air to pitch \xB7 C camera"}<br>Best: ${Math.floor(e.records.bestDistance).toLocaleString()} m \xB7 ${e.records.bestScore.toLocaleString()} pts \xB7 Expedition Lv ${e.expeditionLevel}</div>`,ci("#bStart",t).onclick=()=>this.g.startRun(),ci("#bMuseum",t).onclick=()=>this.g.toMuseum(),ci("#bOpt",t).onclick=()=>this.show("options",{back:"title"})}_museum(t){let e=this.g.save;t.classList.add("dim");let i=_f[(e.records.runs+3)%_f.length];t.innerHTML=`<div class="panel"><h1>THE ABERNATHY MUSEUM</h1>
      <div class="prof"><canvas width="128" height="128"></canvas><div><b>Prof. Abernathy</b><br><i>\u201C${i}\u201D</i></div></div>
      <div class="wallet"><span>\u{1FA99} ${e.gold.toLocaleString()} gold</span><span>\u25C6 ${e.shards} relic shards</span><span>\u2605 Expedition Lv ${e.expeditionLevel}</span></div>
      <div class="tabs">${["relics","workshop","missions","garage"].map(r=>`<div class="tab clickable ${this.tab===r?"on":""}" data-t="${r}">${r.toUpperCase()}</div>`).join("")}</div>
      <div id="tabBody"></div>
      <div class="row"><button class="btn" id="bGo">START EXPEDITION</button><button class="btn alt" id="bBack">BACK</button></div></div>`,t.querySelector(".prof canvas").getContext("2d").drawImage(Go("prof"),0,0),t.querySelectorAll(".tab").forEach(r=>r.onclick=()=>{this.tab=r.dataset.t,this.g.audio.sfx("ui"),this.show("museum")});let n=ci("#tabBody",t);if(this.tab==="relics"){let r=Object.keys(e.relics).length;n.innerHTML=`<h2>JUNGLE TEMPLE COLLECTION \u2014 ${r} / ${Xo.length}</h2><div class="grid"></div>`;let a=ci(".grid",n);for(let o of Xo){let l=e.relics[o.id]||0,c=document.createElement("div");c.className="relicCard",c.appendChild(gf(o,128,l>0)),c.insertAdjacentHTML("beforeend",`<b>${l?o.name:"???"}</b><span class="r ${o.rarity}">${o.rarity}${l>1?" \xD7"+l:""}</span><p>${l?o.lore+"<br><i>Curse: "+o.curse+"</i>":"Not yet recovered."}</p>`),a.appendChild(c)}}else this.tab==="workshop"?(n.innerHTML="<h2>WORKSHOP \u2014 OLD BESSIE</h2>"+xf.map(r=>{let a=e.upgrades[r.id],o=Yo(a);return`<div class="upg"><div class="ic">${r.icon}</div><div class="nm"><b>${r.name}</b><br><small>${r.desc}</small><div class="pips">${"\u25CF".repeat(a)}${"\u25CB".repeat(qo-a)}</div></div><button class="btn" data-u="${r.id}" ${Bh(e,r.id)?"":"disabled"}>${a>=qo?"MAXED":`${o.gold} \u{1FA99}${o.shards?" + "+o.shards+" \u25C6":""}`}</button></div>`}).join(""),n.querySelectorAll("button[data-u]").forEach(r=>r.onclick=()=>{vf(e,r.dataset.u)&&(this.g.persist(),this.g.audio.sfx("mission"),this.show("museum"))})):this.tab==="missions"?n.innerHTML="<h2>ACTIVE MISSIONS</h2>"+this.g.missions.active.map(r=>`<div class="upg"><div class="ic">\u{1F4DC}</div><div class="nm"><b>${r.text}</b><br><small>${Math.min(Math.floor(r.p),r.goal)} / ${r.goal}${r.perRun?" (in one run)":""}</small></div></div>`).join("")+`<p>Completing missions raises your Expedition Level: every level adds +10% to the final score. Missions done: ${e.missionsDone}.</p>`:(n.innerHTML=`<h2>GARAGE \u2014 PAINT</h2><div class="paints">${Object.keys(ss).map(r=>`<div class="paint clickable ${e.paint===r?"on":""}" data-p="${r}" style="background: rgb(${ss[r].join(",")})" title="${r}"></div>`).join("")}</div><p>Old Bessie: balanced 4\xD74, 4WD (42% front), long-travel suspension, winch, spare tire and far too many crates.<br>More vehicles (Army Jeep, Desert Truck, Sidecar Motorcycle, Half-Track) arrive in later expeditions.</p>`,n.querySelectorAll(".paint").forEach(r=>r.onclick=()=>{e.paint=r.dataset.p,this.g.car3d.setPaint(e.paint),this.g.persist(),this.show("museum")}));ci("#bGo",t).onclick=()=>this.g.startRun(),ci("#bBack",t).onclick=()=>this.g.toTitle()}_results(t,e){t.classList.add("dim");let i=e.relics.map(n=>`<span title="${n.name}">${n.name}${n.isNew?" <b>(NEW)</b>":""}</span>`).join(", ")||"\u2014";t.innerHTML=`<div class="panel"><h1>${e.reason}</h1>
      <div style="display:flex;gap:24px;align-items:center;justify-content:center;flex-wrap:wrap"><div class="rank">${e.rank}</div><div style="font-family:Oswald;font-size:2.4rem">${e.score.toLocaleString()} pts${e.best?' <small style="color:#a8321a;font-size:1rem">NEW BEST!</small>':""}</div></div>
      <h2>EXPEDITION LOG</h2><div class="res">
        <div><span>Distance</span><b>${Math.floor(e.dist).toLocaleString()} m</b></div><div><span>Gold</span><b>${e.coins}</b></div>
        <div><span>Style points</span><b>${e.style.toLocaleString()}</b></div><div><span>Max combo</span><b>\xD7${e.maxMult.toFixed(1)}</b></div>
        <div><span>Landings P / G / R / C</span><b>${e.stats.perfect} / ${e.stats.good} / ${e.stats.rough} / ${e.stats.crash}</b></div><div><span>Airtime</span><b>${e.stats.air.toFixed(1)} s</b></div>
        <div><span>Set pieces clean</span><b>${e.stats.setClean} / ${e.stats.setTotal}</b></div><div><span>Top speed</span><b>${Math.round(e.stats.maxSpeed*3.6)} km/h</b></div>
        <div><span>Expedition multiplier</span><b>\xD7${e.expMul.toFixed(1)}</b></div><div><span>Relic shards</span><b>+${e.shardsGained}</b></div></div>
      <h2>RELICS RECOVERED</h2><p>${i}</p>
      ${e.missionsDone.length?`<h2>MISSIONS COMPLETE</h2><p>${e.missionsDone.map(n=>"\u2714 "+n.text).join("<br>")}</p>`:""}
      <div class="row"><button class="btn" id="bRetry">RUN AGAIN</button><button class="btn alt" id="bMus">MUSEUM &amp; WORKSHOP</button></div></div>`,ci("#bRetry",t).onclick=()=>this.g.startRun(),ci("#bMus",t).onclick=()=>this.g.toMuseum()}_pause(t){t.classList.add("dim"),t.innerHTML='<div class="panel" style="max-width:420px;text-align:center"><h1>PAUSED</h1><div class="menu"><button class="btn" id="bRes">RESUME</button><button class="btn alt" id="bOpt">OPTIONS</button><button class="btn alt" id="bQuit">ABANDON RUN</button></div></div>',ci("#bRes",t).onclick=()=>this.g.resume(),ci("#bOpt",t).onclick=()=>this.show("options",{back:"pause"}),ci("#bQuit",t).onclick=()=>this.g.endRun("EXPEDITION ABANDONED")}_options(t,e){t.classList.add("dim");let i=this.g.save.settings,n=(o,l)=>`<select data-k="${o}">${l.map(([c,h])=>`<option value="${c}" ${String(i[o])===String(c)?"selected":""}>${h}</option>`).join("")}</select>`,r=(o,l,c,h)=>`<input type="range" data-k="${o}" min="${l}" max="${c}" step="${h}" value="${i[o]}">`,a=o=>`<input type="checkbox" data-k="${o}" ${i[o]?"checked":""}>`;t.innerHTML=`<div class="panel" style="max-width:640px"><h1>OPTIONS</h1>
      <div class="opt"><span>Driving assist</span>${n("assist",[["full","Full"],["light","Light"],["off","Off (realistic)"]])}</div>
      <div class="opt"><span>Auto-accelerate</span>${a("autoAccel")}</div>
      <div class="opt"><span>Difficulty</span>${n("difficulty",[["explorer","Explorer"],["adventurer","Adventurer"],["legend","Legend"]])}</div>
      <div class="opt"><span>Steering sensitivity</span>${r("steerSens",.5,1.5,.05)}</div>
      <div class="opt"><span>Camera distance</span>${r("camDist",.8,1.3,.05)}</div>
      <div class="opt"><span>Touch steering</span>${n("touchMode",[["stick","Virtual stick"],["tilt","Tilt (gyro)"]])} <button class="btn alt" id="bGyro" style="min-width:0;padding:4px 10px;font-size:.8rem">ENABLE / CALIBRATE GYRO</button></div>
      <div class="opt"><span>Motion comfort (less shake &amp; FOV kick)</span>${a("comfort")}</div>
      <div class="opt"><span>Reduce flashing</span>${a("flashing")}</div>
      <div class="opt"><span>Colorblind-friendly hazard markers</span>${a("colorblind")}</div>
      <div class="opt"><span>Subtitle size</span>${r("subtitle",.8,1.6,.1)}</div>
      <div class="opt"><span>Music volume</span>${r("music",0,1,.05)}</div>
      <div class="opt"><span>Effects volume</span>${r("sfx",0,1,.05)}</div>
      <div class="opt"><span>Quality</span>${n("quality",[["auto","Auto"],["low","Low (mobile)"],["medium","Medium"],["high","High"]])}</div>
      <div class="opt"><span>Frame rate cap</span>${n("fps",[[60,"60 fps"],[30,"30 fps (battery)"]])}</div>
      <div class="row"><button class="btn" id="bDone">DONE</button></div></div>`,t.querySelectorAll("[data-k]").forEach(o=>o.addEventListener("input",()=>{let l=o.dataset.k;i[l]=o.type==="checkbox"?o.checked:o.type==="range"||l==="fps"?+o.value:o.value,this.g.applySettings(l)})),ci("#bGyro",t).onclick=async()=>{await this.g.input.enableGyro()&&(setTimeout(()=>this.g.input.calibrate(),300),i.touchMode="tilt",this.g.applySettings("touchMode"))},ci("#bDone",t).onclick=()=>{this.g.persist(),e&&e.back==="pause"?this.show("pause"):this.g.toTitle()}}};var Zo=class{constructor(t,e){this.g=e,this.el=document.createElement("div"),this.el.id="debug",this.el.className="hidden",t.appendChild(this.el),this.el.innerHTML=`<div id="dbgTxt"></div><hr><div>Force set piece: ${Rh.map(i=>`<button data-sp="${i}">${i}</button>`).join("")}</div>
      <label><input type="checkbox" id="dbgInv"> invincible</label><hr>
      ${[["gripLat",.6,1.8,.02],["springK",18e3,7e4,1e3],["maxSteer",.3,.8,.01],["assistStrength",0,1,.05],["chaserSpeedMul",.5,1.5,.02],["airPitch",1,8,.1],["driftAssist",0,1.5,.05],["engineForce",5e3,16e3,200]].map(([i,n,r,a])=>`<div>${i} <input type="range" data-t="${i}" min="${n}" max="${r}" step="${a}" value="${Li[i]}"> <span>${Li[i]}</span></div>`).join("")}`,this.txt=this.el.querySelector("#dbgTxt"),this.el.querySelectorAll("[data-sp]").forEach(i=>i.onclick=()=>{e.gen.forced=i.dataset.sp}),this.el.querySelector("#dbgInv").onchange=i=>{e.car.invincible=i.target.checked},this.el.querySelectorAll("[data-t]").forEach(i=>i.oninput=()=>{Li[i.dataset.t]=+i.value,i.nextElementSibling.textContent=i.value}),this.on=!1,this.t=0}toggle(){this.on=!this.on,this.el.classList.toggle("hidden",!this.on)}update(t,e){if(!this.on||(this.t-=t,this.t>0))return;this.t=.2;let i=this.g.car,n=i.wheels;this.txt.innerHTML=`fps ${e.fps.toFixed(0)} \xB7 frame ${e.frameMs.toFixed(1)} ms \xB7 sim ${e.simMs.toFixed(2)} ms<br>draw calls ${e.calls} \xB7 tris ${(e.tris/1e3).toFixed(0)}k \xB7 quality ${e.quality} \xB7 res ${e.res.toFixed(2)}<br>
      speed ${(i.speed*3.6).toFixed(0)} km/h \xB7 gear ${i.gear+1} \xB7 rpm ${i.rpm.toFixed(0)} \xB7 slip ${(i.slipAngle*57.3).toFixed(0)}\xB0 \xB7 drift ${i.drift.toFixed(2)}<br>
      susp ${n.map(r=>r.comp.toFixed(2)).join(" ")} \xB7 contacts ${i.contacts} \xB7 air ${i.airTime.toFixed(2)}s<br>
      wheel slip lat ${n.map(r=>(r.slipLat*57.3).toFixed(0)).join(" ")}<br>hp ${i.hp.toFixed(0)}/${i.maxHp} \xB7 nitro ${i.nitro.toFixed(2)} \xB7 mud ${i.mud.toFixed(2)}<br>
      chaser gap ${e.gap.toFixed(1)} m \xB7 v ${(e.bv*3.6).toFixed(0)} km/h<br>piece ${e.piece} \xB7 biome JUNGLE TEMPLE \xB7 seed ${this.g.seed}<br>
      s ${this.g.carS.toFixed(0)} \xB7 built ${e.built.pieces} \xB7 inst ${e.built.instances} \xB7 particles ${e.particles}<br>validator ${JSON.stringify(this.g.gen.val.stats)}`}};var Jo=class{constructor(){this.reset(1)}reset(t){this.dist=0,this.coins=0,this.relics=[],this.style=0,this.combo=0,this.comboT=0,this.expMul=1+(t-1)*.1,this.breakdown={landings:0,drift:0,air:0,nearMiss:0,setPieces:0,gaps:0},this.stats={perfect:0,good:0,rough:0,crash:0,air:0,maxAir:0,gaps:0,setClean:0,setTotal:0,hairpins:0,maxSpeed:0,nitroUsed:0,danger:0,falls:0},this.popups=[]}get mult(){return Math.min(8,1+this.combo*.1)}add(t,e,i){let n=Math.round(t*this.mult);return this.style+=n,i&&(this.breakdown[i]=(this.breakdown[i]||0)+n),this.combo+=1,this.comboT=5,e&&this.popups.push({label:e,pts:n}),n}breakCombo(){this.combo>0&&this.popups.push({label:"Combo lost",pts:0,bad:!0}),this.combo=0}update(t){this.comboT>0&&(this.comboT-=t,this.comboT<=0&&this.combo>0&&(this.combo=Math.max(0,this.combo-3),this.comboT=this.combo?2:0))}get total(){return Math.round((this.dist*1+this.coins*10+this.relics.length*500+this.style)*this.expMul)}rank(){let t=this.total;return t>6e4?"S":t>3e4?"A":t>14e3?"B":t>5e3?"C":"D"}};var Oh=[{id:"gaps3",text:"Jump 3 gaps in a row",goal:3,ev:"gapStreak",perRun:!0},{id:"hairpin5",text:"Drift through 5 hairpins",goal:5,ev:"hairpinDrift"},{id:"nonitro500",text:"Outrun the boulder without nitro for 500 m",goal:500,ev:"noNitroDist",perRun:!0},{id:"perfect3",text:"Land 3 PERFECT jumps in one run",goal:3,ev:"perfect",perRun:!0},{id:"coins150",text:"Collect 150 gold in one run",goal:150,ev:"coins",perRun:!0},{id:"danger3",text:"Take the dangerous path 3 times",goal:3,ev:"danger"},{id:"bridges2",text:"Outrun 2 collapsing bridges",goal:2,ev:"bridgeCollapse"},{id:"dist2000",text:"Travel 2,000 m in one run",goal:2e3,ev:"distance",perRun:!0},{id:"setpieces4",text:"Clear 4 set pieces cleanly",goal:4,ev:"setClean"},{id:"air10",text:"Rack up 10 s of airtime in one run",goal:10,ev:"airtime",perRun:!0},{id:"relic2",text:"Find 2 relics in one run",goal:2,ev:"relic",perRun:!0},{id:"nearmiss3",text:"Pull 3 close calls with the boulder",goal:3,ev:"boulderClose"}],Ko=class{constructor(t){this.save=t,(!t.missions||!Array.isArray(t.missions)||t.missions.length!==3)&&(t.missions=["gaps3","hairpin5","nonitro500"].map(e=>({id:e,p:0}))),this.justDone=[]}def(t){return Oh.find(e=>e.id===t)}get active(){return this.save.missions.map(t=>({...this.def(t.id),p:t.p}))}startRun(){for(let t of this.save.missions)this.def(t.id).perRun&&(t.p=0);this.justDone=[]}report(t,e=1,i=!1){let n=[];for(let r of this.save.missions){let a=this.def(r.id);a.ev!==t||r.done||(r.p=i?Math.max(r.p,e):r.p+e,t==="gapStreak"&&e===0&&(r.p=0),r.p>=a.goal&&(r.done=!0,n.push(a)))}for(let r of n)this.justDone.push(r);return n}resetStreak(t){for(let e of this.save.missions)this.def(e.id).ev===t&&!e.done&&(e.p=0)}refresh(){let t=0,e=new Set(this.save.missions.map(i=>i.id));return this.save.missions=this.save.missions.map(i=>{if(!i.done)return i;t++;let n=Oh.filter(a=>!e.has(a.id)),r=n[Math.floor(Math.random()*n.length)]||Oh[0];return e.add(r.id),{id:r.id,p:0}}),t&&(this.save.missionsDone+=t,this.save.expeditionLevel=1+Math.floor(this.save.missionsDone/3),this.save.shards+=t*2),t}};var Qo=class{constructor(t){this.track=t,this.lanePref=0,this.skill=1}update(t,e,i,n={}){let r=this.track,a=Math.max(t.speed,5),o=Mt(a*.55,7,20),l=e+o,c=r.sampleAtS(l),h=0,u=!1;if(c.fork>0&&(h=(this.lanePref||n.danger||1)*c.fork),n.hint){let I=n.hint(l,e);I!=null&&(h=I,u=!0)}if(!u&&n.obstacles&&n.obstacles.length){let I=h,b=1e9;for(let _=-c.hw+1.2;_<=c.hw-1.2;_+=.6){let C=Math.abs(_-h)*.3;for(let D of n.obstacles){if(!D.active)continue;let U=D._s??(D._s=r.locate(D.x,D.z,e)),z=U-e;if(z<-2||z>40)continue;let O=r.query(D.x,D.z,U).lat,et=O;D.x2!==void 0&&(et=r.query(D.x2,D.z2,U).lat);let W=Math.min(O,et)-D.r-1.4,nt=Math.max(O,et)+D.r+1.4;_>W&&_<nt&&t.pos.y+1.2>D.yMin&&(C+=100)}C<b&&(b=C,I=_)}h=I}this.lat=this.lat===void 0?h:this.lat+(h-this.lat)*.25;let f=r.pointAt(l,this.lat,{x:0,y:0,z:0}),d=f.x-t.pos.x,m=f.z-t.pos.z,x=t.fwd.x,g=t.fwd.z,p=t.left.x,M=t.left.z,y=d*x+m*g,v=d*p+m*M,L=Math.atan2(v,Math.max(y,.5));i.steer=Mt(-L*2.6,-1,1);let E=40,R=!1;for(let I=5;I<70;I+=5){let b=r.sampleAtS(e+I);if(Math.abs(b.k)>1e-4){let _=es(1/Math.abs(b.k))*1.05,C=Math.sqrt(_*_+14*I);E=Math.min(E,C)}(b.gap||b.ramp>0)&&(R=!0),b.bridge&&(E=Math.min(E,30))}if(R&&(E=40),u&&(E=Math.min(E,n.hintV||23)),i.throttle=t.speed<E?1:0,i.brake=t.speed>E+2.5?1:0,i.handbrake=!1,i.pitch=0,i.nitroPressed=R&&t.nitro>=1&&!t.nitroing&&n.allowNitro!==!1&&t.speed<30,!t.grounded){let I=t.fwd.y+.12;i.pitch=Mt(I*3,-1,1),i.steer=0}return i}};var Xi=new URLSearchParams(location.search),Js=1/120,rs=42,mi=s=>document.getElementById(s),a_={full:1,light:.55,off:0},yf={start:[["dusty","Ha! Another one for the museum."],["penny","Dusty, the floor is humming. Floors should not hum."]],close:[["dusty","It's gaining on us!"],["penny","Faster, Dusty! It has our scent!"],["dusty","Come on, old girl, give me everything!"]],perfect:[["penny","Textbook landing! Nobody will ever believe me."],["dusty","Did you see that? Tell me you saw that."],["penny","Ten out of ten. Possibly eleven."]],crash:[["penny","My spine filed a complaint."],["dusty","She's fine! She's fine. Probably fine."]],lowhp:[["penny","Bessie's falling apart, Dusty!"],["dusty","Hold together, sweetheart, just a little longer!"]],relic:[["penny","Ooh \u2014 the {r}! Professor Abernathy will faint."],["dusty","Grab it! Yes \u2014 the {r}!"]],fall:[["penny","That was not a road, Dusty!"],["dusty","Well, that was a bad idea."]],danger:[["dusty","Danger path it is. Hold your hat!"],["penny","Why do we ALWAYS take the skull side?"]],nitro:[["dusty","Hang on to something!"]]},zh=class{constructor(){this.save=Nd();let t=this.save.settings;Xi.get("quality")&&(t.quality=Xi.get("quality")),this.test={autopilot:Xi.has("autopilot"),skipIntro:Xi.has("skipIntro"),fixed:Xi.has("fixed")},this.input=new Ho(t),this.audio=new Vo(t),this.world=new po(mi("game"),t.quality),this.post=new yo(this.world),this.fx=new zo(this.world.scene,this.world.q),this.world.onResize=()=>{this.post.resize(),this.fx.setFog(this.world.scene.fog,this.world.h,this.world.pr)},this.fx.setFog(this.world.scene.fog,this.world.h,this.world.pr),this.time=this.world.time,this.seed=1,this._newTrack(this._pickSeed(!0)),this.builder=new Lo(this.world.scene,this.track,this.gen,this.time,this.world.q),this.car=new Uo(this.track,Li),this.car3d=new Fo(this.world.scene,this.save.paint),this.car3d.onCrate=e=>{this.fx.burst("splinter",e.x,e.y,e.z,14,5,.6),this.audio.sfx("crash",.6)},this.car3d.onBreak=()=>this.bark("dusty","There go the headlights!",!0),this.boulder=new ko(this.world.scene,this.track),this.cam=new Bo(this.world.camera,this.track),this.autopilot=new Qo(this.track),this.apOut={steer:0,throttle:0,brake:0,handbrake:!1,pitch:0,nitroPressed:!1},this.holdInp={steer:0,throttle:0,brake:0,handbrake:!0,pitch:0,nitroPressed:!1},this.score=new Jo,this.missions=new Ko(this.save),this.hud=new Wo(mi("hud")),this.screens=new $o(mi("screens"),this),this.debug=new Zo(mi("ui"),this),this.input.bindTouch(mi("touch")),document.body.classList.toggle("touch",this.input.isTouch),mi("pauseBtn").addEventListener("click",()=>this.pause()),ie.car=this.car,this.prevPos=new T,this.prevQ=new Ee,this.rPos=new T,this.rQ=new Ee,this.acc=0,this.alpha=1,this.last=performance.now(),this.slow={t:0,scale:1},this.perf={fps:60,frameMs:16,simMs:0,realMs:16,win:0,winN:0,winT:0,drops:0},this.flash=0,this.carS=rs,this.run={curPiece:null},this.landN=new T(0,1,0),this._ahead=new T,this._tmp={x:0,y:0,z:0},this.tunnel=0,this.lastBark=-99,this._bindBus(),this.applySettings("all"),addEventListener("pointerdown",()=>this.audio.start(),{once:!1}),addEventListener("keydown",()=>this.audio.start()),window.__rr=this,this.toTitle(),requestAnimationFrame(e=>this.loop(e))}_pickSeed(t){if(Xi.has("daily")){let e=new Date;return Dd("daily-"+e.getUTCFullYear()+"-"+e.getUTCMonth()+"-"+e.getUTCDate())}return Xi.get("seed")?+Xi.get("seed")+0>>>0:Math.random()*1e9>>>0}_newTrack(t){this.seed=t;let e=Lr[this.save.settings.difficulty]||Lr.adventurer;this.track=new Mo,this.gen=new So(this.track,t,{gapMul:e.gap}),this.gen.ensure(900),this.builder&&(this.builder.reset(),this.builder.track=this.track,this.builder.gen=this.gen,this.builder.templeGate=null);for(let i of[this.car,this.boulder,this.cam,this.autopilot])i&&(i.track=this.track);this.pieceIdx=0}_placeCar(t,e=0){let i=this.track.sampleAtS(t),n=this.track.pointAt(t,0,this._tmp);this.car.reset(n.x,n.y+1,n.z,i.th,e,i.i),this.prevPos.copy(this.car.pos),this.prevQ.copy(this.car.q),this.carS=t,this.cam.snap()}_bindBus(){kt.on("sfx",t=>this.audio.sfx(t.name,t.v??1)),kt.on("bark",t=>this.bark(t.who,t.text,!0)),kt.on("fx",t=>this.fx.burst(t.kind,t.x,t.y,t.z,t.n||10,t.speed||(t.kind==="dust"?3:5),t.spread||.6,.4,t.size||1)),kt.on("shake",t=>{let e=t.amount;if(t.at){let i=this.car.pos.distanceTo(t.at);e*=Mt(1-i/60,0,1)}this.cam.addShake(e)}),kt.on("crash",()=>{this.state==="run"&&(this.score.breakCombo(),this.audio.sfx("crash",.8),this.cam.addShake(.5))}),kt.on("style",t=>{if(this.state!=="run")return;let e=this.score.add(t.pts||100,t.label,t.kind==="nearmiss"?"nearMiss":void 0);this.hud.popup(t.label,e)}),kt.on("setpiece",t=>{if(this.state!=="run")return;let e=this.score.stats;if(e.setTotal++,t.ok){e.setClean++;let i=this.score.add(1e3,t.label,"setPieces");this.hud.popup(t.label,i,{big:!0}),this._mission("setClean",1),t.type==="bridgeCollapse"&&this._mission("bridgeCollapse",1),this.audio.sfx("perfect")}else this.hud.popup(t.label||"Survived",0)})}applySettings(t){let e=this.save.settings;if(t==="all"||t==="quality"){let n=e.quality==="auto"?jn?"low":Xi.get("quality")||this.world.qualityName:e.quality;Ir[n]&&n!==this.world.qualityName&&(this.world.setQuality(n),this.post.enabled=this.world.q.bloom)}(t==="all"||t==="music"||t==="sfx")&&this.audio.applyVolumes(),this.cam.distMul=e.camDist,this.cam.comfort=!!e.comfort,document.documentElement.style.setProperty("--sub",e.subtitle);let i=document.querySelector("#hBark .txt");i&&(i.style.fontSize=e.subtitle*100+"%")}persist(){Fd(this.save)}bark(t,e,i){!i&&this.time.value-this.lastBark<6||(this.lastBark=this.time.value,this.hud.bark(t,e,this.audio))}_barkSet(t,e){let i=yf[t],[n,r]=i[Math.floor(Math.random()*i.length)];this.bark(n,e?r.replace("{r}",e):r,t==="relic")}_mission(t,e=1,i=!1){if(this.state!=="run"&&this.state!=="dead")return;let n=this.missions.report(t,e,i);for(let r of n)this.hud.banner("MISSION COMPLETE",r.text),this.bannerT=2.6,this.audio.sfx("mission")}_show(t,e){mi("hud").classList.toggle("hidden",!t),mi("touch").classList.toggle("hidden",!(e&&this.input.isTouch))}_startAttract(){this._newTrack(this._pickSeed(!0)),this.car.fullReset(),this.car.invincible=!0,this.car3d.repair(),this._placeCar(rs+40,12),this.builder.update(this.carS,.016),this.boulder.active=!1,this.boulder.group.visible=!1,this.attract=!0,this.orbitT=0}toTitle(){this.state="title",this._show(!1,!1),mi("letter").classList.remove("on"),this.attract||this._startAttract(),this.screens.show("title"),this.audio.setMusic("title")}toMuseum(){this.attract||this._startAttract(),this.state="museum",this._show(!1,!1),this.screens.show("museum"),this.audio.setMusic("museum")}startRun(){let t=this.save.settings,e=this.diff=Lr[t.difficulty]||Lr.adventurer;this.attract=!1,this._newTrack(this._pickSeed(!1)),this.car.invincible=!!window.__inv||this.car.invincible==="debug",this.car.setUpgrades(this.save.upgrades),this.car.fullReset(),this.car3d.repair();let i=this.save.upgrades;Li.engineForce=10200*(1+i.engine*.06),Li.topSpeed=36+i.engine*1.2,this.car.dmgScale=e.dmg,this._placeCar(rs,0),this.builder.update(this.carS,.016),this.boulder.group.visible=!0,this.boulder.active=!1,this.boulder.s=rs-e.startGap,this.boulder.v=0,this.boulder.active=!0,this.boulder.t=0,this.boulder.group.position.set(0,0,0),this.boulder.update(1e-4,this.carS,0),this.boulder.active=!1,this.score.reset(this.save.expeditionLevel),this.missions.startRun(),this.run={curPiece:null,startS:rs,maxS:rs,gapsDone:new Set,hairpins:new Map,forks:new Set,announced:new Set,noNitroS:rs,close:!1,lowHp:!1,driftT:0,fallT:0,deadT:0,maxMult:1,t:0,brakeHint:!1},this.score.stats.maxSpeed=0,this.screens.show(null),this._show(!0,!0),this.hud.missions(this.missions.active),this.cam.mode=this.save.settings.hoodCam?"hood":"chase",this.audio.setMusic("run"),this.slow={t:0,scale:1},this.test.skipIntro||this.test.autopilot&&!Xi.has("intro")?this._go(!0):(this.state="intro",this.introT=0,this.introFlags={},mi("letter").classList.add("on"),this._show(!1,!1))}_go(t){this.state="run",mi("letter").classList.remove("on"),this._show(!0,!0),this.builder.templeGate&&!this.builder.templeGate.bursting&&this.builder.templeGate.burst(),this.boulder.start(this.boulder.s,this.diff.chaser),t&&(this.boulder.t=2.5),this.hud.banner("FLOOR IT!","THE TEMPLE WANTS IT BACK"),this.bannerT=1.8,this.cam.snap()}pause(){this.state==="run"&&(this.state="pause",this.screens.show("pause"))}resume(){this.state==="pause"&&(this.state="run",this.screens.show(null),this.last=performance.now())}_die(t){this.state==="run"&&(this.state="dead",this.run.deadT=1.8,this.deathReason=t,this.slow={t:1.6,scale:.35},this.audio.sfx("crash"),this.cam.addShake(1),this.fx.burst("smoke",this.car.pos.x,this.car.pos.y+1,this.car.pos.z,30,3,1.2))}endRun(t){if(!["run","dead","pause","intro"].includes(this.state))return;let e=this.save,i=this.score,n=i.stats,r=this.run;i.dist=Math.max(0,r.maxS-r.startS),this._mission("distance",i.dist,!0),this._mission("coins",i.coins,!0),this._mission("airtime",n.air,!0),this.state="results";let a=0,o=[];for(let f of i.relics){let d=!e.relics[f.id];e.relics[f.id]=(e.relics[f.id]||0)+1,d||a++,o.push({name:f.name,isNew:d})}e.gold+=i.coins;let l=this.missions.justDone.slice(),c=e.shards;this.missions.refresh(),a+=e.shards-c,e.shards+=a-(e.shards-c);let h=i.total,u=h>e.records.bestScore;e.records.runs++,e.records.totalDistance+=i.dist,e.records.bestDistance=Math.max(e.records.bestDistance,i.dist),u&&(e.records.bestScore=h),e.seenIntro=!0,this.persist(),this._show(!1,!1),mi("letter").classList.remove("on"),this.slow={t:0,scale:1},this.audio.setMusic("results"),this.audio.sfx("gameover"),this.lastResults={reason:t,rank:i.rank(),score:h,best:u,dist:i.dist,coins:i.coins,style:i.style,maxMult:r.maxMult,stats:n,expMul:i.expMul,shardsGained:a,relics:o,missionsDone:l},this.screens.show("results",this.lastResults)}loop(t){if(requestAnimationFrame(r=>this.loop(r)),this.save.settings.fps===30&&t-this.last<30)return;let i=Math.min(.1,(t-this.last)/1e3);this.perf.realMs=se(this.perf.realMs||16,t-this.last,.1),this.test.fixed&&(i=1/30),this.last=t,this._keys(),this.time.value+=i,ie.time=this.time.value,this.slow.t>0&&(this.slow.t-=i,this.slow.t<=0&&(this.slow.scale=1));let n=performance.now();this.state!=="pause"&&this.state!=="results"&&this.simulate(i*this.slow.scale,i),this.perf.simMs=se(this.perf.simMs,performance.now()-n,.1),this.render(i,i*this.slow.scale),this.input.endFrame(),this._autoQuality(i)}_keys(){let t=this.input;t.wasPressed("Backquote")&&this.debug.toggle(),(t.wasPressed("Escape")||t.wasPressed("KeyP"))&&(this.state==="run"?this.pause():this.state==="pause"&&this.resume()),t.wasPressed("KeyC")&&(this.state==="run"||this.state==="intro")&&(this.cam.mode=this.cam.mode==="hood"?"chase":"hood",this.save.settings.hoodCam=this.cam.mode==="hood",this.cam.snap()),this.state==="intro"&&this.introT>.4&&t.anyPressed()&&!t.wasPressed("Backquote")&&this._go(!1),(this.state==="title"||this.state==="results")&&(t.wasPressed("Enter")||t.wasPressed("PadA"))&&this.startRun()}warp(t,e=1/30){for(let i=0;i<t&&(this.time.value+=e,ie.time=this.time.value,this.slow.t>0&&(this.slow.t-=e,this.slow.t<=0&&(this.slow.scale=1)),!(this.state==="pause"||this.state==="results"));i+=e)this.simulate(e*this.slow.scale,e),this.render(e,e*this.slow.scale,!0)}simulate(t,e){let i=this.car,n=this.attract||this.test.autopilot,r=this.input.update(!i.grounded);this.acc+=t;let a=0;for(this._obs=this.builder.obstacles;this.acc>=Js&&a<14;)this._step(Js,n?null:r),this.acc-=Js,a++;this.acc>Js&&(this.acc=Js*.999),this.alpha=this.acc/Js,this._frame(t,e)}_step(t,e){let i=this.car,n=this.save.settings;if(this.state==="intro")e=this.holdInp;else if(!e){let u=f=>{for(let d of this.builder.built)if(d.set&&d.set.apLat&&f>d.p.s0&&f<d.p.s1)return d.set.apLat(f);return null};e=this.autopilot.update(i,this.carS,this.apOut,{danger:this.test.autopilot?1:0,obstacles:this._obs,hint:u,allowNitro:!this.attract||!0})}this.state==="dead"&&(e=this.holdInp);let r=this.track.get(i.hint),a=(this.attract||this.test.autopilot?1:a_[n.assist]??.55)*Li.assistStrength,o=r.bridge||r.edgeL===Bt.CLIFF||r.edgeR===Bt.CLIFF,l=this._cfg||(this._cfg={lane:{}});l.assist=a,l.steerSens=n.steerSens,l.grip=1,l.obstacles=this._obs;let c=l.lane;if(c.laneLat=i.laneLat??0,c.hw=r.hw,c.rx=r.rx,c.rz=r.rz,c.th=r.th,c.narrow=o,i.grounded)l.landAssist=0;else{let u=i.pos.x+i.vel.x*.35,f=i.pos.z+i.vel.z*.35,d=this.track.query(u,f,i.hint);this.landN.set(d.nx,d.ny,d.nz),l.landN=this.landN,l.landAssist=.25+a*.55}this.prevPos.copy(i.pos),this.prevQ.copy(i.q),i.step(t,e,l);let h=this.track.get(i.hint);if(this.carS=h.s+((i.pos.x-h.x)*h.fx+(i.pos.z-h.z)*h.fz),ie.carS=this.carS,ie.carLat=i.lat||0,i.events.length){for(let u of i.events)this._carEvent(u);i.events.length=0}}_carEvent(t){let e=this.car,i=this.score,n=i.stats,r=this.state==="run";switch(t.type){case"land":{let a=t.air>.9;if(this.fx.burst("dust",e.pos.x,e.pos.y-.6,e.pos.z,a?26:12,a?6:4,1.4,.2),this.audio.sfx("land",Mt(t.vn/10,.3,1.2)),this.cam.addShake(Mt(t.vn/25,.1,.7)),!r)break;if(n.air+=t.air,n.maxAir=Math.max(n.maxAir,t.air),t.quality==="PERFECT"){n.perfect++;let o=i.add(400+t.air*250,"PERFECT LANDING","landings");this.hud.popup("PERFECT LANDING",o,{big:!0}),this.audio.sfx("perfect"),this.save.settings.flashing||(this.flash=.22),this._mission("perfect",1),Math.random()<.35&&this._barkSet("perfect")}else if(t.quality==="GOOD"){n.good++;let o=i.add(200+t.air*120,"Good landing","landings");this.hud.popup("Good landing",o)}else t.quality==="ROUGH"?(n.rough++,this.hud.popup("Rough landing",0,{bad:!0})):(n.crash++,i.breakCombo(),this.hud.popup("CRASH LANDING",0,{bad:!0}),this.audio.sfx("crash"),Math.random()<.5&&this._barkSet("crash"));if(t.air>1.2&&t.quality!=="CRASH"){let o=i.add(t.air*150,"Big air "+t.air.toFixed(1)+"s","air")}break}case"impact":case"wall":t.speed>3&&(this.audio.sfx("impact",Mt(t.speed/12,.3,1)),this.cam.addShake(Mt(t.speed/20,.1,.6)),t.x!==void 0&&this.fx.burst("sparks",t.x,t.y,t.z,10,5,.3)),r&&t.speed>7&&i.breakCombo();break;case"damage":r&&t.amount>8&&Math.random()<.3&&this._barkSet("crash");break;case"nitro":this.audio.sfx("nitro"),this.cam.addShake(.25),r&&(n.nitroUsed++,this.run.noNitroS=this.carS,Math.random()<.3&&this._barkSet("nitro"));break;case"splash":if(Math.random()<.3){let a=e.wheels[2].cp;this.fx.burst("water",a.x,a.y+.3,a.z,6,5,.6,.6)}break;case"shift":this.audio.sfx("shift");break}}_frame(t,e){let i=this.car,n=this.track,r=this.run;this.gen.ensure(this.carS+this.world.q.drawDist+260),n.trim(Math.min(this.carS,this.boulder.active?this.boulder.s:this.carS)/1-260),this.builder.update(this.carS,t);let a=this.gen.pieces;for(;this.pieceIdx<a.length-1&&a[this.pieceIdx].s1<=this.carS;)this.pieceIdx++;for(;this.pieceIdx>0&&a[this.pieceIdx].s0>this.carS;)this.pieceIdx--;let o=a[this.pieceIdx];r.curPiece=o,this._wheelFx(t),this.fx.update(t),this.score.update(t);let l=n.get(i.hint);if(this.tunnel=Dr(this.tunnel,l.tunnel?1:0,4,t),this.world.hemi.intensity=se(1.05,.22,this.tunnel),this.world.sun.intensity=se(3.1,.25,this.tunnel),this.attract)return this._attractLogic(t);if(this.state==="intro")return this._intro(t);if(this.boulder.active&&(this.boulder.update(t,this.carS,i.speed,Li.chaserSpeedMul),Math.random()<t*14)){let c=this.boulder.group.position;this.fx.burst("dust",c.x,c.y-5.5,c.z,3,4,3,.3)}if(this.state==="dead"){r.deadT-=e,r.deadT<=0&&this.endRun(this.deathReason);return}this.state==="run"&&this._runLogic(t,o,l)}_runLogic(t,e,i){let n=this.car,r=this.run,a=this.score,o=a.stats;if(r.t+=t,r.maxS=Math.max(r.maxS,this.carS),a.dist=r.maxS-r.startS,o.maxSpeed=Math.max(o.maxSpeed,n.speed),r.maxMult=Math.max(r.maxMult,a.mult),this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&(this.hud.el.banner.innerHTML="")),r.fallT>0){r.fallT-=t,r.fallT<=0&&this._respawn();return}if(n.overVoid&&n.pos.y<i.y-5.5){if(this.diff.fallDeath&&!n.invincible){this._die("LOST IN THE GORGE");return}r.fallT=1.1,r.pendingGap=null,this.cam.mode="fall",o.falls++,a.breakCombo(),this.missions.resetStreak("gapStreak"),this.audio.sfx("crash",.6),this._barkSet("fall");return}(n.flipT>1.4||n.stuckT>2.2)&&this._respawn(this.carS,!0);for(let c of this.builder.pickups){if(c.taken||Math.abs(c.s-this.carS)>5)continue;let h=c.x-n.pos.x,u=c.y-(n.pos.y+.4),f=c.z-n.pos.z,d=c.kind==="relic"?2.9:2.3;if(!(h*h+u*u*.6+f*f>d*d))if(this.builder.take(c),c.kind==="coin")a.coins+=c.value,this.audio.sfx("coin",.7),this.fx.burst("coin",c.x,c.y,c.z,5,2,.2);else if(c.kind==="nitro")n.nitro=Math.min(n.nitroCap,n.nitro+1),this.audio.sfx("coin",1.2),this.hud.popup("+1 NITRO",0);else{let m=mf(this.relicRng||(this.relicRng=new Me(this.seed^23505)),c.rare);a.relics.push(m),this.audio.sfx("relic"),this.fx.burst("relic",c.x,c.y,c.z,30,4,.5);let x=a.add(500,"RELIC: "+m.name,"setPieces");this.hud.popup("RELIC: "+m.name,x,{big:!0}),this._mission("relic",1),this._barkSet("relic",m.name)}}if((e.type==="gap"||e.type==="waterfall")&&!r.gapsDone.has(e.id)&&this.carS>e.lipS&&(r.gapsDone.add(e.id),r.pendingGap=e),r.pendingGap&&n.grounded&&this.carS>r.pendingGap.landS&&n.speed>3){let c=r.pendingGap;r.pendingGap=null,o.gaps++;let h=a.add(250+c.gapLen*12,"Gap cleared "+Math.round(c.gapLen)+" m","gaps");this.hud.popup("Gap cleared "+Math.round(c.gapLen)+" m",h),this._mission("gapStreak",1)}if(e.type==="hairpin"){let c=r.hairpins.get(e.id)||{t:0,done:!1};if(r.hairpins.set(e.id,c),n.drift>.3&&n.grounded&&(c.t+=t),!c.done&&c.t>.6&&this.carS>e.s0+(e.s1-e.s0)*.6){c.done=!0,o.hairpins++;let h=a.add(350,"Hairpin drift!","drift");this.hud.popup("Hairpin drift!",h),this._mission("hairpinDrift",1)}}if(n.drift>.45&&n.grounded&&n.speed>11){if(r.driftT+=t,r.driftT>1.2){r.driftT=0;let c=a.add(120,"Drift","drift");this.hud.popup("Drift",c)}}else r.driftT=Math.max(0,r.driftT-t*2);if(e.type==="fork"&&!r.forks.has(e.id)&&this.carS>(e.s0+e.s1)/2&&(r.forks.add(e.id),Math.sign(n.lat)===e.danger)){o.danger++;let c=a.add(400,"Danger path!");this.hud.popup("Danger path!",c),this._mission("danger",1),this._barkSet("danger")}if(e.set&&!r.announced.has(e.id)&&this.carS>e.s0-25)r.announced.add(e.id),this.hud.banner(Ch[e.set.type].toUpperCase(),"SET PIECE"),this.bannerT=2.4,this.audio.sfx("rumble",.5);else if(!e.set){let c=this.gen.pieces[this.pieceIdx+1];c&&c.set&&!r.announced.has(c.id)&&this.carS>c.s0-25&&(r.announced.add(c.id),this.hud.banner(Ch[c.set.type].toUpperCase(),"SET PIECE"),this.bannerT=2.4,this.audio.sfx("rumble",.5))}(o.nitroUsed===0||this.carS-r.noNitroS>0)&&this._mission("noNitroDist",this.carS-r.noNitroS,!0),Math.floor(r.t*2)!==Math.floor((r.t-t)*2)&&(this._mission("distance",a.dist,!0),this._mission("coins",a.coins,!0),this._mission("airtime",o.air,!0),this.hud.missions(this.missions.active));let l=this.boulder.gap;if(l<12&&!r.close&&(r.close=!0),r.close&&l>24){r.close=!1;let c=a.add(300,"Close call!","nearMiss");this.hud.popup("Close call!",c),this._mission("boulderClose",1)}if(l<18&&Math.random()<t*.25&&this._barkSet("close"),l<6.8)if(n.invincible)this.boulder.s-=25;else{n.hp=0,this.cam.addShake(1.2),this._die("FLATTENED BY THE BOULDER");return}if(!r.lowHp&&n.hp<n.maxHp*.3&&(r.lowHp=!0,this._barkSet("lowhp")),n.hp<=0){this._die("OLD BESSIE GAVE OUT");return}r.brakeHint=!1;for(let c=15;c<75;c+=6){let h=this.track.sampleAtS(this.carS+c);if(h.hairpin){let u=es(1/Math.max(Math.abs(h.k),.001));n.speed>u+5+c*.12&&(r.brakeHint=!0);break}}}_respawn(t,e){let i=this.car,n=this.track,r=this.run,a=Math.max(t??this.carS,r.maxS-40),o=u=>{let f=n.sampleAtS(u);return f.gap||f.hole||f.bridge||f.ford||f.ramp>0};e||(a+=4);for(let u=0;u<400;u++){let f=!0;for(let d=-2;d<14;d+=2)if(o(a+d)){f=!1;break}if(f)break;a+=2}let l=n.sampleAtS(a),c=l.fork>0?Math.sign(i.lat||1)*l.fork:0,h=n.pointAt(a,c,this._tmp);i.reset(h.x,h.y+1,h.z,l.th,e?6:14,l.i),i.damage(e?4:14,e?"jolt":"fall"),this.prevPos.copy(i.pos),this.prevQ.copy(i.q),this.carS=a,this.cam.mode=this.save.settings.hoodCam?"hood":"chase",this.cam.snap(),this.boulder.gap<30&&(this.boulder.s=a-30),r.fallT=0,e||this.hud.popup("Back on track",0,{bad:!0})}_intro(t){let e=this.introFlags;this.introT+=t;let i=this.introT;!e.a&&i>.3&&(e.a=!0,this.bark("dusty",yf.start[0][1],!0)),!e.b&&i>1.3&&(e.b=!0,this.audio.sfx("rumble"),this.cam.addShake(.35)),!e.c&&i>1.9&&(e.c=!0,this.bark("penny","Dusty\u2026 what is that noise?",!0)),!e.d&&i>2.6&&(e.d=!0,this.builder.templeGate&&this.builder.templeGate.burst(),this.boulder.start(this.boulder.s,this.diff.chaser),this.boulder.t=1.2),e.d&&this.boulder.update(t,this.carS,0,Li.chaserSpeedMul*.6),!e.e&&i>3.3&&(e.e=!0,this.bark("dusty","Oh no.",!0)),i>4.1&&this._go(!1)}_attractLogic(t){let e=this.car;if(this.orbitT+=t,e.flipT>1||e.stuckT>2||e.overVoid&&e.pos.y<this.track.get(e.hint).y-5||this.carS>4e3)if(this.carS>4e3)this._startAttract();else{let i=this.run;this.run={maxS:this.carS},this._respawn(this.carS,!0),this.run=i,e.hp=e.maxHp}for(let i of this.builder.pickups)!i.taken&&Math.abs(i.s-this.carS)<2.5&&this.builder.take(i)}_wheelFx(t){let e=this.car;if(!e.grounded||e.speed<6)return;let i=this.world.q.particles,n=e.speed;for(let r=2;r<4;r++){let a=e.wheels[r];if(!a.contact)continue;let o=Math.abs(a.slipLat)+e.drift*.6,l=(n/30+o*2)*22*i*t;if(Math.random()>l)continue;let c=a.surf===te.MUD||a.surf===te.JUNGLE?"mud":a.surf===te.WATER?"water":a.surf===te.STONE||a.surf===te.PLANK?o>.3?"smoke":null:"dust";c&&this.fx.emit(c,a.cp.x,a.cp.y+.15,a.cp.z,-e.vel.x*.15+(Math.random()-.5)*2,.8+Math.random()*(c==="mud"||c==="water"?4:1),-e.vel.z*.15+(Math.random()-.5)*2,c==="dust"?.45+o*.5:c==="water"?.6:1)}}render(t,e,i){let n=this.car,r=this.world;this.rPos.lerpVectors(this.prevPos,n.pos,this.alpha),this.rQ.slerpQuaternions(this.prevQ,n.q,this.alpha);let a=this.tunnel>.3||this.state==="intro";this.car3d.sync(n,this.rPos,this.rQ,e,this.time.value,{headlights:a,lookBack:this.boulder.active&&this.boulder.gap<30});let o=this._camCtx||(this._camCtx={}),l=this.track.pointAt(this.carS+16,(n.lat||0)*.5,this._ahead);o.ahead=this._ahead.set(l.x,l.y+1,l.z);let c=this.track.get(n.hint),h=!n.grounded&&n.airTime>.3&&(c.gap||c.ramp>0||n.overVoid);h&&!this._wasCine&&(this.cam.cineSide=-this.cam.cineSide),this._wasCine=h,o.cine=h&&this.state==="run"&&!(this.run.curPiece&&this.run.curPiece.type==="waterfall"),o.rumble=this.boulder.active?Mt(1-(this.boulder.gap-10)/60,0,1):0,o.override=null,this.attract?o.override=this._orbit():this.state==="intro"&&(o.override=this._introCam()),this.cam.update(t,n,this.rPos,o),r.follow(this.rPos);let u=this.state==="run"||this.state==="dead"?o.rumble:0;this.flash=Math.max(0,this.flash-t*1.6),this.post.grade.uniforms.danger.value=u*.55,this.post.grade.uniforms.flash.value=this.flash;let f=mi("vign"),d=(u*.5).toFixed(2);if(f._a!==d&&(f._a=d,f.style.boxShadow=`inset 0 0 160px 40px rgba(200,30,10,${d})`),(this.state==="run"||this.state==="dead"||this.state==="intro")&&this._hud(t),this.audio.update(t,{rpm:n.rpm,throttle:n.throttle||0,nitro:n.nitroing,running:this.state!=="results"&&this.state!=="pause",slip:Math.abs(n.slipAngle)*2+n.drift*.5,grounded:n.grounded,speed:n.speed,surf:n.lastSurf,inWater:n.lastSurf===te.WATER&&n.grounded,boulder:this.boulder.active?o.rumble:0,intensity:this.state==="run"?.3+o.rumble*.7:.2}),i)return;r.renderer.info.autoReset=!1,r.renderer.info.reset(),r.lost||this.post.render(t,this.time.value);let m=r.renderer.info;this.perf.calls=m.render.calls,this.perf.tris=m.render.triangles,this.debug.update(t,{fps:this.perf.fps,frameMs:this.perf.realMs,simMs:this.perf.simMs,calls:m.render.calls,tris:m.render.triangles,quality:r.qualityName,res:r.resScale,gap:this.boulder.gap||0,bv:this.boulder.v||0,piece:this.run.curPiece?this.run.curPiece.type:"-",built:this.builder.stats(),particles:this.fx.count})}_orbit(){let t=this.rPos,e=this.orbitT*.16,i=this.state==="museum"?9:11,n=this._orb||(this._orb={pos:new T,look:new T,k:3}),r=this.car.fwd,a=Math.atan2(r.x,r.z)+Math.PI*.75+Math.sin(e)*.9;return n.pos.set(t.x+Math.sin(a)*i,t.y+2.6+Math.sin(e*.7)*.8,t.z+Math.cos(a)*i),n.look.set(t.x+r.x*4,t.y+.9,t.z+r.z*4),n}_introCam(){let t=this.car,e=this.rPos,i=this.introT,n=this._ic||(this._ic={pos:new T,look:new T,k:3}),r=new T(-t.fwd.z,0,t.fwd.x);if(i<1.8)n.pos.copy(e).addScaledVector(t.fwd,7.5-i*.6).addScaledVector(r,2.2),n.pos.y+=1.8,n.look.copy(e),n.look.y+=1.2,n.k=4;else{let a=this.builder.templeGate?this.builder.templeGate.doorPos:e;n.pos.copy(e).addScaledVector(t.fwd,8).addScaledVector(r,3),n.pos.y+=2.6,n.look.copy(a),n.look.y+=4,n.look.lerp(e,.25),n.k=3}return n}_hud(t){let e=this.car,i=this.score,n=this.run,r=this.track,a=this._pts||(this._pts=[]);a.length=0;for(let u=Math.max(r.base+1,this.carS-70);u<this.carS+170;u+=6){let f=r.sampleAtS(u);a.push({x:f.x,z:f.z,mark:null})}for(let u of this.gen.pieces){if(u.s0<this.carS-20||u.s0>this.carS+170)continue;let f=r.sampleAtS(u.s0);u.set?a.push({x:f.x,z:f.z,mark:"set"}):u.type==="fork"&&a.push({x:f.x,z:f.z,mark:"fork"})}let o=a.filter(u=>!u.mark),l=a.filter(u=>u.mark),c=this._hd||(this._hd={});c.dist=n.maxS-n.startS,c.coins=i.coins,c.relics=i.relics.length,c.score=i.total,c.mult=i.mult,c.gap=this.boulder.active?this.boulder.gap:80,c.brakeHint=n.brakeHint,c.colorblind=this.save.settings.colorblind,c.trackPts=o,c.marks=l,c.heading=Math.atan2(e.fwd.x,e.fwd.z),c.cx=e.pos.x,c.cz=e.pos.z;let h=this.boulder.group.position;c.bx=this.boulder.active?h.x:void 0,c.bz=h.z,c.speed=e.speed,c.gear=e.gear,c.nitroing=e.nitroing,c.nitro=e.nitro,c.nitroCap=e.nitroCap,c.hp=e.hp,c.maxHp=e.maxHp,c.trackPts=o.concat(l),this.hud.update(t,c)}_autoQuality(t){let e=this.perf;if(e.fps=se(e.fps,1/Math.max(t,.001),.05),this.save.settings.quality!=="auto"||this.test.fixed||this.state!=="run"||(e.winT+=t,e.win+=t,e.winN++,e.winT<2.5))return;let i=e.winN/e.win;e.winT=0,e.win=0,e.winN=0;let n=this.world;i<45?n.resScale>.75?(n.resScale=Math.max(.7,n.resScale-.1),n.resize()):n.qualityName!=="low"&&(n.setQuality(n.qualityName==="high"?"medium":"low"),this.post.enabled=n.q.bloom,n.resScale=.9,n.resize()):i>58&&n.resScale<1&&(n.resScale=Math.min(1,n.resScale+.05),n.resize())}};function Mf(){try{new zh}catch(t){console.error(t),document.getElementById("loading").textContent="Error: "+t.message;return}let s=document.getElementById("loading");s.style.opacity=0,setTimeout(()=>s.remove(),700)}document.fonts&&document.fonts.load?Promise.race([Promise.all([document.fonts.load("900 40px Cinzel"),document.fonts.load("700 20px Zilla"),document.fonts.load("600 20px Oswald")]),new Promise(s=>setTimeout(s,1500))]).then(()=>setTimeout(Mf,30)):Mf();})();
