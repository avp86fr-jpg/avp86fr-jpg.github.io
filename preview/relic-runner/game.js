(()=>{var lp=0,Ru=1,cp=2;var Od=1,Ah=2,vi=3,Xi=0,je=1,_e=2,ni=0,ii=1,rn=2,Cu=3,Pu=4,hp=5,cs=100,up=101,dp=102,fp=103,pp=104,mp=200,gp=201,xp=202,vp=203,ic=204,sc=205,yp=206,_p=207,Mp=208,bp=209,Sp=210,wp=211,Ep=212,Tp=213,Ap=214,rc=0,ac=1,oc=2,js=3,lc=4,cc=5,hc=6,uc=7,Hd=0,Rp=1,Cp=2,Gi=0,Rh=1,Ch=2,Ph=3,$r=4,Pp=5,Ih=6,Lh=7;var Vd=300,tr=301,er=302,dc=303,fc=304,Mo=306,fs=1e3,us=1001,pc=1002,Sn=1003,Ip=1004;var la=1005;var ti=1006,Ml=1007;var ds=1008;var Si=1009,Gd=1010,Wd=1011,Fr=1012,Dh=1013,ps=1014,ei=1015,Gn=1016,Uh=1017,Nh=1018,nr=1020,Xd=35902,qd=1021,Yd=1022,On=1023,$d=1024,Zd=1025,Js=1026,ir=1027,kh=1028,Fh=1029,Jd=1030,zh=1031;var Bh=1033,Ba=33776,Oa=33777,Ha=33778,Va=33779,mc=35840,gc=35841,xc=35842,vc=35843,yc=36196,_c=37492,Mc=37496,bc=37808,Sc=37809,wc=37810,Ec=37811,Tc=37812,Ac=37813,Rc=37814,Cc=37815,Pc=37816,Ic=37817,Lc=37818,Dc=37819,Uc=37820,Nc=37821,Ga=36492,kc=36494,Fc=36495,Kd=36283,zc=36284,Bc=36285,Oc=36286;var Wa=2300,Hc=2301,bl=2302,Iu=2400,Lu=2401,Du=2402;var Lp=3200,Dp=3201;var Qd=0,Up=1,Hi="",sn="srgb",fr="srgb-linear",bo="linear",me="srgb";var Cs=7680;var Uu=519,Np=512,kp=513,Fp=514,jd=515,zp=516,Bp=517,Op=518,Hp=519,Vc=35044,Wn=35048;var Nu="300 es",_i=2e3,Xa=2001,qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Sl=Math.PI/180,qa=180/Math.PI;function Mi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function Ke(s,t,e){return Math.max(t,Math.min(e,s))}function Vp(s,t){return(s%t+t)%t}function wl(s,t,e){return(1-e)*s+e*t}function jn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ve(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Z=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class s{constructor(t,e,n,i,r,a,o,l,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,h)}set(t,e,n,i,r,a,o,l,h){let c=this.elements;return c[0]=t,c[1]=i,c[2]=o,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],c=n[4],f=n[7],d=n[2],u=n[5],g=n[8],x=i[0],p=i[3],m=i[6],v=i[1],y=i[4],_=i[7],C=i[2],w=i[5],R=i[8];return r[0]=a*x+o*v+l*C,r[3]=a*p+o*y+l*w,r[6]=a*m+o*_+l*R,r[1]=h*x+c*v+f*C,r[4]=h*p+c*y+f*w,r[7]=h*m+c*_+f*R,r[2]=d*x+u*v+g*C,r[5]=d*p+u*y+g*w,r[8]=d*m+u*_+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return e*a*c-e*o*h-n*r*c+n*o*l+i*r*h-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],f=c*a-o*h,d=o*l-c*r,u=h*r-a*l,g=e*f+n*d+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(i*h-c*n)*x,t[2]=(o*n-i*a)*x,t[3]=d*x,t[4]=(c*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=u*x,t[7]=(n*l-h*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-i*h,i*l,-i*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(El.makeScale(t,e)),this}rotate(t){return this.premultiply(El.makeRotation(-t)),this}translate(t,e){return this.premultiply(El.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},El=new Qt;function tf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ya(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gp(){let s=Ya("canvas");return s.style.display="block",s}var ku={};function Lr(s){s in ku||(ku[s]=!0,console.warn(s))}function Wp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Xp(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qp(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var oe={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hi?bo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Fu=[.64,.33,.3,.6,.15,.06],zu=[.2126,.7152,.0722],Bu=[.3127,.329],Ou=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hu=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[fr]:{primaries:Fu,whitePoint:Bu,transfer:bo,toXYZ:Ou,fromXYZ:Hu,luminanceCoefficients:zu,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:Fu,whitePoint:Bu,transfer:me,toXYZ:Ou,fromXYZ:Hu,luminanceCoefficients:zu,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}});var Ps,Gc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ps===void 0&&(Ps=Ya("canvas")),Ps.width=t.width,Ps.height=t.height;let n=Ps.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ps}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ya("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=bi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yp=0,$a=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Tl(i[a].image)):r.push(Tl(i[a]))}else r=Tl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Tl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Gc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $p=0,gn=class s extends qi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=us,i=us,r=ti,a=ds,o=On,l=Si,h=s.DEFAULT_ANISOTROPY,c=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Mi(),this.name="",this.source=new $a(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fs:t.x=t.x-Math.floor(t.x);break;case us:t.x=t.x<0?0:1;break;case pc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fs:t.y=t.y-Math.floor(t.y);break;case us:t.y=t.y<0?0:1;break;case pc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Vd;gn.DEFAULT_ANISOTROPY=1;var ye=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,h=l[0],c=l[4],f=l[8],d=l[1],u=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(h+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(h+1)/2,_=(u+1)/2,C=(m+1)/2,w=(c+d)/4,R=(f+x)/4,P=(g+p)/4;return y>_&&y>C?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=R/n):_>C?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=w/i,r=P/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=R/r,i=P/r),this.set(n,i,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(f-x)/v,this.z=(d-c)/v,this.w=Math.acos((h+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wc=class extends qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new gn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new $a(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Wc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Za=class extends gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xc=class extends gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var we=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],h=n[i+1],c=n[i+2],f=n[i+3],d=r[a+0],u=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=u,t[e+2]=g,t[e+3]=x;return}if(f!==x||l!==d||h!==u||c!==g){let p=1-o,m=l*d+h*u+c*g+f*x,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let C=Math.sqrt(y),w=Math.atan2(C,m*v);p=Math.sin(p*w)/C,o=Math.sin(o*w)/C}let _=o*v;if(l=l*p+d*_,h=h*p+u*_,c=c*p+g*_,f=f*p+x*_,p===1-o){let C=1/Math.sqrt(l*l+h*h+c*c+f*f);l*=C,h*=C,c*=C,f*=C}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],h=n[i+2],c=n[i+3],f=r[a],d=r[a+1],u=r[a+2],g=r[a+3];return t[e]=o*g+c*f+l*u-h*d,t[e+1]=l*g+c*d+h*f-o*u,t[e+2]=h*g+c*u+o*d-l*f,t[e+3]=c*g-o*f-l*d-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),c=o(i/2),f=o(r/2),d=l(n/2),u=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*c*f+h*u*g,this._y=h*u*f-d*c*g,this._z=h*c*g+d*u*f,this._w=h*c*f-d*u*g;break;case"YXZ":this._x=d*c*f+h*u*g,this._y=h*u*f-d*c*g,this._z=h*c*g-d*u*f,this._w=h*c*f+d*u*g;break;case"ZXY":this._x=d*c*f-h*u*g,this._y=h*u*f+d*c*g,this._z=h*c*g+d*u*f,this._w=h*c*f-d*u*g;break;case"ZYX":this._x=d*c*f-h*u*g,this._y=h*u*f+d*c*g,this._z=h*c*g-d*u*f,this._w=h*c*f+d*u*g;break;case"YZX":this._x=d*c*f+h*u*g,this._y=h*u*f+d*c*g,this._z=h*c*g-d*u*f,this._w=h*c*f-d*u*g;break;case"XZY":this._x=d*c*f-h*u*g,this._y=h*u*f-d*c*g,this._z=h*c*g+d*u*f,this._w=h*c*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],c=e[6],f=e[10],d=n+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(c-l)*u,this._y=(r-h)*u,this._z=(a-i)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(c-l)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+h)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-h)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(l+c)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-i)/u,this._x=(r+h)/u,this._y=(l+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+a*o+i*h-r*l,this._y=i*c+a*l+r*o-n*h,this._z=r*c+a*h+n*l-i*o,this._w=a*c-n*o-i*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,o),f=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*i-o*n),c=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+l*h+a*f-o*c,this.y=n+l*c+o*h-r*f,this.z=i+l*f+r*c-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Al.copy(this).projectOnVector(t),this.sub(Al)}reflect(t){return this.sub(Al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Al=new A,Vu=new we,wi=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ca.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(t.matrixWorld),this.union(ca)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),ha.subVectors(this.max,br),Is.subVectors(t.a,br),Ls.subVectors(t.b,br),Ds.subVectors(t.c,br),Ni.subVectors(Ls,Is),ki.subVectors(Ds,Ls),ns.subVectors(Is,Ds);let e=[0,-Ni.z,Ni.y,0,-ki.z,ki.y,0,-ns.z,ns.y,Ni.z,0,-Ni.x,ki.z,0,-ki.x,ns.z,0,-ns.x,-Ni.y,Ni.x,0,-ki.y,ki.x,0,-ns.y,ns.x,0];return!Rl(e,Is,Ls,Ds,ha)||(e=[1,0,0,0,1,0,0,0,1],!Rl(e,Is,Ls,Ds,ha))?!1:(ua.crossVectors(Ni,ki),e=[ua.x,ua.y,ua.z],Rl(e,Is,Ls,Ds,ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},fi=[new A,new A,new A,new A,new A,new A,new A,new A],Fn=new A,ca=new wi,Is=new A,Ls=new A,Ds=new A,Ni=new A,ki=new A,ns=new A,br=new A,ha=new A,ua=new A,is=new A;function Rl(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){is.fromArray(s,r);let o=i.x*Math.abs(is.x)+i.y*Math.abs(is.y)+i.z*Math.abs(is.z),l=t.dot(is),h=e.dot(is),c=n.dot(is);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var Zp=new wi,Sr=new A,Cl=new A,Yi=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Zp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);let e=Sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Sr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(Cl)),this.expandByPoint(Sr.copy(t.center).sub(Cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},pi=new A,Pl=new A,da=new A,Fi=new A,Il=new A,fa=new A,Ll=new A,Ja=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Pl.copy(t).add(e).multiplyScalar(.5),da.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(Pl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(da),o=Fi.dot(this.direction),l=-Fi.dot(da),h=Fi.lengthSq(),c=Math.abs(1-a*a),f,d,u,g;if(c>0)if(f=a*l-o,d=a*o-l,g=r*c,f>=0)if(d>=-g)if(d<=g){let x=1/c;f*=x,d*=x,u=f*(f+a*d+2*o)+d*(a*f+d+2*l)+h}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+h;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+h;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+h):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+h):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+h);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Pl).addScaledVector(da,d),u}intersectSphere(t,e){pi.subVectors(t.center,this.origin);let n=pi.dot(this.direction),i=pi.dot(pi)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,h=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),c>=0?(r=(t.min.y-d.y)*c,a=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,a=(t.min.y-d.y)*c),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,n,i,r){Il.subVectors(e,t),fa.subVectors(n,t),Ll.crossVectors(Il,fa);let a=this.direction.dot(Ll),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fi.subVectors(this.origin,t);let l=o*this.direction.dot(fa.crossVectors(Fi,fa));if(l<0)return null;let h=o*this.direction.dot(Il.cross(Fi));if(h<0||l+h>a)return null;let c=-o*Fi.dot(Ll);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},te=class s{constructor(t,e,n,i,r,a,o,l,h,c,f,d,u,g,x,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,h,c,f,d,u,g,x,p)}set(t,e,n,i,r,a,o,l,h,c,f,d,u,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=h,m[6]=c,m[10]=f,m[14]=d,m[3]=u,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),a=1/Us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),h=Math.sin(i),c=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*c,u=a*f,g=o*c,x=o*f;e[0]=l*c,e[4]=-l*f,e[8]=h,e[1]=u+g*h,e[5]=d-x*h,e[9]=-o*l,e[2]=x-d*h,e[6]=g+u*h,e[10]=a*l}else if(t.order==="YXZ"){let d=l*c,u=l*f,g=h*c,x=h*f;e[0]=d+x*o,e[4]=g*o-u,e[8]=a*h,e[1]=a*f,e[5]=a*c,e[9]=-o,e[2]=u*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*c,u=l*f,g=h*c,x=h*f;e[0]=d-x*o,e[4]=-a*f,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*c,e[9]=x-d*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*c,u=a*f,g=o*c,x=o*f;e[0]=l*c,e[4]=g*h-u,e[8]=d*h+x,e[1]=l*f,e[5]=x*h+d,e[9]=u*h-g,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,u=a*h,g=o*l,x=o*h;e[0]=l*c,e[4]=x-d*f,e[8]=g*f+u,e[1]=f,e[5]=a*c,e[9]=-o*c,e[2]=-h*c,e[6]=u*f+g,e[10]=d-x*f}else if(t.order==="XZY"){let d=a*l,u=a*h,g=o*l,x=o*h;e[0]=l*c,e[4]=-f,e[8]=h*c,e[1]=d*f+x,e[5]=a*c,e[9]=u*f-g,e[2]=g*f-u,e[6]=o*c,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jp,t,Kp)}lookAt(t,e,n){let i=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),zi.crossVectors(n,Mn),zi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),zi.crossVectors(n,Mn)),zi.normalize(),pa.crossVectors(Mn,zi),i[0]=zi.x,i[4]=pa.x,i[8]=Mn.x,i[1]=zi.y,i[5]=pa.y,i[9]=Mn.y,i[2]=zi.z,i[6]=pa.z,i[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],c=n[1],f=n[5],d=n[9],u=n[13],g=n[2],x=n[6],p=n[10],m=n[14],v=n[3],y=n[7],_=n[11],C=n[15],w=i[0],R=i[4],P=i[8],b=i[12],M=i[1],T=i[5],L=i[9],U=i[13],B=i[2],q=i[6],H=i[10],j=i[14],G=i[3],rt=i[7],pt=i[11],vt=i[15];return r[0]=a*w+o*M+l*B+h*G,r[4]=a*R+o*T+l*q+h*rt,r[8]=a*P+o*L+l*H+h*pt,r[12]=a*b+o*U+l*j+h*vt,r[1]=c*w+f*M+d*B+u*G,r[5]=c*R+f*T+d*q+u*rt,r[9]=c*P+f*L+d*H+u*pt,r[13]=c*b+f*U+d*j+u*vt,r[2]=g*w+x*M+p*B+m*G,r[6]=g*R+x*T+p*q+m*rt,r[10]=g*P+x*L+p*H+m*pt,r[14]=g*b+x*U+p*j+m*vt,r[3]=v*w+y*M+_*B+C*G,r[7]=v*R+y*T+_*q+C*rt,r[11]=v*P+y*L+_*H+C*pt,r[15]=v*b+y*U+_*j+C*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],c=t[2],f=t[6],d=t[10],u=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+r*l*f-i*h*f-r*o*d+n*h*d+i*o*u-n*l*u)+x*(+e*l*u-e*h*d+r*a*d-i*a*u+i*h*c-r*l*c)+p*(+e*h*f-e*o*u-r*a*f+n*a*u+r*o*c-n*h*c)+m*(-i*o*c-e*l*f+e*o*d+i*a*f-n*a*d+n*l*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],f=t[9],d=t[10],u=t[11],g=t[12],x=t[13],p=t[14],m=t[15],v=f*p*h-x*d*h+x*l*u-o*p*u-f*l*m+o*d*m,y=g*d*h-c*p*h-g*l*u+a*p*u+c*l*m-a*d*m,_=c*x*h-g*f*h+g*o*u-a*x*u-c*o*m+a*f*m,C=g*f*l-c*x*l-g*o*d+a*x*d+c*o*p-a*f*p,w=e*v+n*y+i*_+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return t[0]=v*R,t[1]=(x*d*r-f*p*r-x*i*u+n*p*u+f*i*m-n*d*m)*R,t[2]=(o*p*r-x*l*r+x*i*h-n*p*h-o*i*m+n*l*m)*R,t[3]=(f*l*r-o*d*r-f*i*h+n*d*h+o*i*u-n*l*u)*R,t[4]=y*R,t[5]=(c*p*r-g*d*r+g*i*u-e*p*u-c*i*m+e*d*m)*R,t[6]=(g*l*r-a*p*r-g*i*h+e*p*h+a*i*m-e*l*m)*R,t[7]=(a*d*r-c*l*r+c*i*h-e*d*h-a*i*u+e*l*u)*R,t[8]=_*R,t[9]=(g*f*r-c*x*r-g*n*u+e*x*u+c*n*m-e*f*m)*R,t[10]=(a*x*r-g*o*r+g*n*h-e*x*h-a*n*m+e*o*m)*R,t[11]=(c*o*r-a*f*r-c*n*h+e*f*h+a*n*u-e*o*u)*R,t[12]=C*R,t[13]=(c*x*i-g*f*i+g*n*d-e*x*d-c*n*p+e*f*p)*R,t[14]=(g*o*i-a*x*i-g*n*l+e*x*l+a*n*p-e*o*p)*R,t[15]=(a*f*i-c*o*i+c*n*l-e*f*l-a*n*d+e*o*d)*R,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,h=r*a,c=r*o;return this.set(h*a+n,h*o-i*l,h*l+i*o,0,h*o+i*l,c*o+n,c*l-i*a,0,h*l-i*o,c*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,c=a+a,f=o+o,d=r*h,u=r*c,g=r*f,x=a*c,p=a*f,m=o*f,v=l*h,y=l*c,_=l*f,C=n.x,w=n.y,R=n.z;return i[0]=(1-(x+m))*C,i[1]=(u+_)*C,i[2]=(g-y)*C,i[3]=0,i[4]=(u-_)*w,i[5]=(1-(d+m))*w,i[6]=(p+v)*w,i[7]=0,i[8]=(g+y)*R,i[9]=(p-v)*R,i[10]=(1-(d+x))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Us.set(i[0],i[1],i[2]).length(),a=Us.set(i[4],i[5],i[6]).length(),o=Us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],zn.copy(this);let h=1/r,c=1/a,f=1/o;return zn.elements[0]*=h,zn.elements[1]*=h,zn.elements[2]*=h,zn.elements[4]*=c,zn.elements[5]*=c,zn.elements[6]*=c,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,e.setFromRotationMatrix(zn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=_i){let l=this.elements,h=2*r/(e-t),c=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i),u,g;if(o===_i)u=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Xa)u=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=_i){let l=this.elements,h=1/(e-t),c=1/(n-i),f=1/(a-r),d=(e+t)*h,u=(n+i)*c,g,x;if(o===_i)g=(a+r)*f,x=-2*f;else if(o===Xa)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Us=new A,zn=new te,Jp=new A(0,0,0),Kp=new A(1,1,1),zi=new A,pa=new A,Mn=new A,Gu=new te,Wu=new we,Je=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],h=i[5],c=i[9],f=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Je.DEFAULT_ORDER="XYZ";var Ka=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qp=0,Xu=new A,Ns=new we,mi=new te,ma=new A,wr=new A,jp=new A,t0=new we,qu=new A(1,0,0),Yu=new A(0,1,0),$u=new A(0,0,1),Zu={type:"added"},e0={type:"removed"},ks={type:"childadded",child:null},Dl={type:"childremoved",child:null},Ge=class s extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new A,e=new Je,n=new we,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new te},normalMatrix:{value:new Qt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(qu,t)}rotateY(t){return this.rotateOnAxis(Yu,t)}rotateZ(t){return this.rotateOnAxis($u,t)}translateOnAxis(t,e){return Xu.copy(t).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qu,t)}translateY(t){return this.translateOnAxis(Yu,t)}translateZ(t){return this.translateOnAxis($u,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ma.copy(t):ma.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(wr,ma,this.up):mi.lookAt(ma,wr,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),Ns.setFromRotationMatrix(mi),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zu),ks.child=t,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(e0),Dl.child=t,this.dispatchEvent(Dl),Dl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zu),ks.child=t,this.dispatchEvent(ks),ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,jp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let f=l[h];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),h=a(t.textures),c=a(t.images),f=a(t.shapes),d=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ge.DEFAULT_UP=new A(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bn=new A,gi=new A,Ul=new A,xi=new A,Fs=new A,zs=new A,Ju=new A,Nl=new A,kl=new A,Fl=new A,zl=new ye,Bl=new ye,Ol=new ye,Vi=class s{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Bn.subVectors(t,e),i.cross(Bn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Bn.subVectors(i,e),gi.subVectors(n,e),Ul.subVectors(t,e);let a=Bn.dot(Bn),o=Bn.dot(gi),l=Bn.dot(Ul),h=gi.dot(gi),c=gi.dot(Ul),f=a*h-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(h*l-o*c)*d,g=(a*c-o*l)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(a,xi.y),l.addScaledVector(o,xi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return zl.setScalar(0),Bl.setScalar(0),Ol.setScalar(0),zl.fromBufferAttribute(t,e),Bl.fromBufferAttribute(t,n),Ol.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(zl,r.x),a.addScaledVector(Bl,r.y),a.addScaledVector(Ol,r.z),a}static isFrontFacing(t,e,n,i){return Bn.subVectors(n,e),gi.subVectors(t,e),Bn.cross(gi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Bn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Fs.subVectors(i,n),zs.subVectors(r,n),Nl.subVectors(t,n);let l=Fs.dot(Nl),h=zs.dot(Nl);if(l<=0&&h<=0)return e.copy(n);kl.subVectors(t,i);let c=Fs.dot(kl),f=zs.dot(kl);if(c>=0&&f<=c)return e.copy(i);let d=l*f-c*h;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),e.copy(n).addScaledVector(Fs,a);Fl.subVectors(t,r);let u=Fs.dot(Fl),g=zs.dot(Fl);if(g>=0&&u<=g)return e.copy(r);let x=u*h-l*g;if(x<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(zs,o);let p=c*g-u*f;if(p<=0&&f-c>=0&&u-g>=0)return Ju.subVectors(r,i),o=(f-c)/(f-c+(u-g)),e.copy(i).addScaledVector(Ju,o);let m=1/(p+x+d);return a=x*m,o=d*m,e.copy(n).addScaledVector(Fs,a).addScaledVector(zs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},ga={h:0,s:0,l:0};function Hl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=Vp(t,1),e=Ke(e,0,1),n=Ke(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Hl(a,r,t+1/3),this.g=Hl(a,r,t),this.b=Hl(a,r,t-1/3)}return oe.toWorkingColorSpace(this,i),this}setStyle(t,e=sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){let n=ef[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return oe.fromWorkingColorSpace(nn.copy(this),t),Math.round(Ke(nn.r*255,0,255))*65536+Math.round(Ke(nn.g*255,0,255))*256+Math.round(Ke(nn.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(nn.copy(this),e);let n=nn.r,i=nn.g,r=nn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,h,c=(o+a)/2;if(o===a)l=0,h=0;else{let f=a-o;switch(h=c<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=sn){oe.fromWorkingColorSpace(nn.copy(this),t);let e=nn.r,n=nn.g,i=nn.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(ga);let n=wl(Bi.h,ga.h,e),i=wl(Bi.s,ga.s,e),r=wl(Bi.l,ga.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new bt;bt.NAMES=ef;var n0=0,Ei=class extends qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Mi(),this.name="",this.blending=ii,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=sc,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==Xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ic&&(n.blendSrc=this.blendSrc),this.blendDst!==sc&&(n.blendDst=this.blendDst),this.blendEquation!==cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},We=class extends Ei{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ze=new A,xa=new Z,ie=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vc,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix3(t),this.setXY(e,xa.x,xa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vc&&(t.usage=this.usage),t}};var Qa=class extends ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ja=class extends ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xt=class extends ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},i0=0,Pn=new te,Vl=new Ge,Bs=new A,bn=new wi,Er=new wi,Ze=new A,ue=class s extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tf(t)?ja:Qa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return Vl.lookAt(t),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(bn.min,Er.min),bn.expandByPoint(Ze),Ze.addVectors(bn.max,Er.max),bn.expandByPoint(Ze)):(bn.expandByPoint(Er.min),bn.expandByPoint(Er.max))}bn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Ze.fromBufferAttribute(o,h),l&&(Bs.fromBufferAttribute(t,h),Ze.add(Bs)),i=Math.max(i,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ie(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new A,l[P]=new A;let h=new A,c=new A,f=new A,d=new Z,u=new Z,g=new Z,x=new A,p=new A;function m(P,b,M){h.fromBufferAttribute(n,P),c.fromBufferAttribute(n,b),f.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),u.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),c.sub(h),f.sub(h),u.sub(d),g.sub(d);let T=1/(u.x*g.y-g.x*u.y);isFinite(T)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(T),p.copy(f).multiplyScalar(u.x).addScaledVector(c,-g.x).multiplyScalar(T),o[P].add(x),o[b].add(x),o[M].add(x),l[P].add(p),l[b].add(p),l[M].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,b=v.length;P<b;++P){let M=v[P],T=M.start,L=M.count;for(let U=T,B=T+L;U<B;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let y=new A,_=new A,C=new A,w=new A;function R(P){C.fromBufferAttribute(i,P),w.copy(C);let b=o[P];y.copy(b),y.sub(C.multiplyScalar(C.dot(b))).normalize(),_.crossVectors(w,b);let T=_.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,T)}for(let P=0,b=v.length;P<b;++P){let M=v[P],T=M.start,L=M.count;for(let U=T,B=T+L;U<B;U+=3)R(t.getX(U+0)),R(t.getX(U+1)),R(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new A,r=new A,a=new A,o=new A,l=new A,h=new A,c=new A,f=new A;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),c.subVectors(a,r),f.subVectors(i,r),c.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,p),o.add(c),l.add(c),h.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),c.subVectors(a,r),f.subVectors(i,r),c.cross(f),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,f=o.normalized,d=new h.constructor(l.length*c),u=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?u=l[x]*o.data.stride+o.offset:u=l[x]*c;for(let m=0;m<c;m++)d[g++]=h[u++]}return new ie(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],h=t(l,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let c=0,f=h.length;c<f;c++){let d=h[c],u=t(d,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let f=0,d=h.length;f<d;f++){let u=h[f];c.push(u.toJSON(t.data))}c.length>0&&(i[l]=c,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let h in i){let c=i[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],f=r[h];for(let d=0,u=f.length;d<u;d++)c.push(f[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,c=a.length;h<c;h++){let f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ku=new te,ss=new Ja,va=new Yi,Qu=new A,ya=new A,_a=new A,Ma=new A,Gl=new A,ba=new A,ju=new A,Sa=new A,_t=class extends Ge{constructor(t=new ue,e=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){ba.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=o[l],f=r[l];c!==0&&(Gl.fromBufferAttribute(f,t),a?ba.addScaledVector(Gl,c):ba.addScaledVector(Gl.sub(e),c))}e.add(ba)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(va.containsPoint(ss.origin)===!1&&(ss.intersectSphere(va,Qu)===null||ss.origin.distanceToSquared(Qu)>(t.far-t.near)**2))&&(Ku.copy(r).invert(),ss.copy(t.ray).applyMatrix4(Ku),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=a[p.materialIndex],v=Math.max(p.start,u.start),y=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let _=v,C=y;_<C;_+=3){let w=o.getX(_),R=o.getX(_+1),P=o.getX(_+2);i=wa(this,m,t,n,h,c,f,w,R,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let p=g,m=x;p<m;p+=3){let v=o.getX(p),y=o.getX(p+1),_=o.getX(p+2);i=wa(this,a,t,n,h,c,f,v,y,_),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=a[p.materialIndex],v=Math.max(p.start,u.start),y=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let _=v,C=y;_<C;_+=3){let w=_,R=_+1,P=_+2;i=wa(this,m,t,n,h,c,f,w,R,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let p=g,m=x;p<m;p+=3){let v=p,y=p+1,_=p+2;i=wa(this,a,t,n,h,c,f,v,y,_),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function s0(s,t,e,n,i,r,a,o){let l;if(t.side===je?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Xi,o),l===null)return null;Sa.copy(o),Sa.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(Sa);return h<e.near||h>e.far?null:{distance:h,point:Sa.clone(),object:s}}function wa(s,t,e,n,i,r,a,o,l,h){s.getVertexPosition(o,ya),s.getVertexPosition(l,_a),s.getVertexPosition(h,Ma);let c=s0(s,t,e,n,ya,_a,Ma,ju);if(c){let f=new A;Vi.getBarycoord(ju,ya,_a,Ma,f),i&&(c.uv=Vi.getInterpolatedAttribute(i,o,l,h,f,new Z)),r&&(c.uv1=Vi.getInterpolatedAttribute(r,o,l,h,f,new Z)),a&&(c.normal=Vi.getInterpolatedAttribute(a,o,l,h,f,new A),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let d={a:o,b:l,c:h,normal:new A,materialIndex:0};Vi.getNormal(ya,_a,Ma,d.normal),c.face=d,c.barycoord=f}return c}var It=class s extends ue{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],f=[],d=0,u=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Xt(h,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(f,2));function g(x,p,m,v,y,_,C,w,R,P,b){let M=_/R,T=C/P,L=_/2,U=C/2,B=w/2,q=R+1,H=P+1,j=0,G=0,rt=new A;for(let pt=0;pt<H;pt++){let vt=pt*T-U;for(let Ot=0;Ot<q;Ot++){let $t=Ot*M-L;rt[x]=$t*v,rt[p]=vt*y,rt[m]=B,h.push(rt.x,rt.y,rt.z),rt[x]=0,rt[p]=0,rt[m]=w>0?1:-1,c.push(rt.x,rt.y,rt.z),f.push(Ot/R),f.push(1-pt/P),j+=1}}for(let pt=0;pt<P;pt++)for(let vt=0;vt<R;vt++){let Ot=d+vt+q*pt,$t=d+vt+q*(pt+1),J=d+(vt+1)+q*(pt+1),ot=d+(vt+1)+q*pt;l.push(Ot,$t,ot),l.push($t,J,ot),G+=6}o.addGroup(u,G,b),u+=G,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function sr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ln(s){let t={};for(let e=0;e<s.length;e++){let n=sr(s[e]);for(let i in n)t[i]=n[i]}return t}function r0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function nf(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var ai={clone:sr,merge:ln},a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Re=class extends Ei{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sr(t.uniforms),this.uniformsGroups=r0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},to=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=_i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Oi=new A,td=new Z,ed=new Z,Qe=class extends to{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Sl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qa*2*Math.atan(Math.tan(Sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z)}getViewSize(t,e){return this.getViewBounds(t,td,ed),e.subVectors(ed,td)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Sl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/h,i*=a.width/l,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Os=-90,Hs=1,qc=class extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Qe(Os,Hs,t,e);i.layers=this.layers,this.add(i);let r=new Qe(Os,Hs,t,e);r.layers=this.layers,this.add(r);let a=new Qe(Os,Hs,t,e);a.layers=this.layers,this.add(a);let o=new Qe(Os,Hs,t,e);o.layers=this.layers,this.add(o);let l=new Qe(Os,Hs,t,e);l.layers=this.layers,this.add(l);let h=new Qe(Os,Hs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let h of e)this.remove(h);if(t===_i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,c]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,c),t.setRenderTarget(f,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},eo=class extends gn{constructor(t,e,n,i,r,a,o,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:tr,super(t,e,n,i,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Yc=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new eo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new It(5,5,5),r=new Re({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:ni});r.uniforms.tEquirect.value=e;let a=new _t(i,r),o=e.minFilter;return e.minFilter===ds&&(e.minFilter=ti),new qc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},Wl=new A,l0=new A,c0=new Qt,yi=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Wl.subVectors(n,e).cross(l0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Wl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||c0.getNormalMatrix(t),i=this.coplanarPoint(Wl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},rs=new Yi,Ea=new A,zr=class{constructor(t=new yi,e=new yi,n=new yi,i=new yi,r=new yi,a=new yi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_i){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],h=i[4],c=i[5],f=i[6],d=i[7],u=i[8],g=i[9],x=i[10],p=i[11],m=i[12],v=i[13],y=i[14],_=i[15];if(n[0].setComponents(l-r,d-h,p-u,_-m).normalize(),n[1].setComponents(l+r,d+h,p+u,_+m).normalize(),n[2].setComponents(l+a,d+c,p+g,_+v).normalize(),n[3].setComponents(l-a,d-c,p-g,_-v).normalize(),n[4].setComponents(l-o,d-f,p-x,_-y).normalize(),e===_i)n[5].setComponents(l+o,d+f,p+x,_+y).normalize();else if(e===Xa)n[5].setComponents(o,f,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ea.x=i.normal.x>0?t.max.x:t.min.x,Ea.y=i.normal.y>0?t.max.y:t.min.y,Ea.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sf(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function h0(s){let t=new WeakMap;function e(o,l){let h=o.array,c=o.usage,f=h.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,h,c),o.onUploadCallback();let u;if(h instanceof Float32Array)u=s.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)u=s.SHORT;else if(h instanceof Uint32Array)u=s.UNSIGNED_INT;else if(h instanceof Int32Array)u=s.INT;else if(h instanceof Int8Array)u=s.BYTE;else if(h instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,h){let c=l.array,f=l.updateRanges;if(s.bindBuffer(h,o),f.length===0)s.bufferSubData(h,0,c);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){let g=f[d],x=f[u];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){let x=f[u];s.bufferSubData(h,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:i,remove:r,update:a}}var Me=class s extends ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),h=o+1,c=l+1,f=t/o,d=e/l,u=[],g=[],x=[],p=[];for(let m=0;m<c;m++){let v=m*d-a;for(let y=0;y<h;y++){let _=y*f-r;g.push(_,-v,0),x.push(0,0,1),p.push(y/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let y=v+h*m,_=v+h*(m+1),C=v+1+h*(m+1),w=v+1+h*m;u.push(y,_,w),u.push(_,C,w)}this.setIndex(u),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},u0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d0=`#ifdef USE_ALPHAHASH
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
#endif`,f0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x0=`#ifdef USE_AOMAP
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
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y0=`#ifdef USE_BATCHING
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
#endif`,_0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w0=`#ifdef USE_IRIDESCENCE
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
#endif`,E0=`#ifdef USE_BUMPMAP
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,U0=`#define PI 3.141592653589793
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
} // validated`,N0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k0=`vec3 transformedNormal = objectNormal;
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
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",V0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q0=`#ifdef USE_GRADIENTMAP
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
}`,j0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nm=`uniform bool receiveShadow;
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
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lm=`PhysicalMaterial material;
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
#endif`,cm=`struct PhysicalMaterial {
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
}`,hm=`
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
#endif`,um=`#if defined( RE_IndirectDiffuse )
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
#endif`,dm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_m=`#if defined( USE_POINTS_UV )
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
#endif`,Mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`#ifdef USE_MORPHTARGETS
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
#endif`,Am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dm=`#ifdef USE_NORMALMAP
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
#endif`,Um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zm=`float getShadowMask() {
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
}`,Jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Km=`#ifdef USE_SKINNING
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
#endif`,Qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jm=`#ifdef USE_SKINNING
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
#endif`,tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ig=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sg=`#ifdef USE_TRANSMISSION
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
#endif`,rg=`#ifdef USE_TRANSMISSION
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ug=`uniform sampler2D t2D;
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`#include <common>
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
}`,xg=`#if DEPTH_PACKING == 3200
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
}`,vg=`#define DISTANCE
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
}`,yg=`#define DISTANCE
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`uniform float scale;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,wg=`#include <common>
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
}`,Eg=`uniform vec3 diffuse;
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
}`,Tg=`#define LAMBERT
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
}`,Ag=`#define LAMBERT
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
}`,Rg=`#define MATCAP
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
}`,Cg=`#define MATCAP
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
}`,Pg=`#define NORMAL
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
}`,Ig=`#define NORMAL
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
}`,Lg=`#define PHONG
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
}`,Dg=`#define PHONG
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
}`,Ug=`#define STANDARD
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
}`,Ng=`#define STANDARD
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
}`,kg=`#define TOON
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
}`,Fg=`#define TOON
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
}`,zg=`uniform float size;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,Og=`#include <common>
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
}`,Hg=`uniform vec3 color;
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
}`,Vg=`uniform float rotation;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:u0,alphahash_pars_fragment:d0,alphamap_fragment:f0,alphamap_pars_fragment:p0,alphatest_fragment:m0,alphatest_pars_fragment:g0,aomap_fragment:x0,aomap_pars_fragment:v0,batching_pars_vertex:y0,batching_vertex:_0,begin_vertex:M0,beginnormal_vertex:b0,bsdfs:S0,iridescence_fragment:w0,bumpmap_pars_fragment:E0,clipping_planes_fragment:T0,clipping_planes_pars_fragment:A0,clipping_planes_pars_vertex:R0,clipping_planes_vertex:C0,color_fragment:P0,color_pars_fragment:I0,color_pars_vertex:L0,color_vertex:D0,common:U0,cube_uv_reflection_fragment:N0,defaultnormal_vertex:k0,displacementmap_pars_vertex:F0,displacementmap_vertex:z0,emissivemap_fragment:B0,emissivemap_pars_fragment:O0,colorspace_fragment:H0,colorspace_pars_fragment:V0,envmap_fragment:G0,envmap_common_pars_fragment:W0,envmap_pars_fragment:X0,envmap_pars_vertex:q0,envmap_physical_pars_fragment:im,envmap_vertex:Y0,fog_vertex:$0,fog_pars_vertex:Z0,fog_fragment:J0,fog_pars_fragment:K0,gradientmap_pars_fragment:Q0,lightmap_pars_fragment:j0,lights_lambert_fragment:tm,lights_lambert_pars_fragment:em,lights_pars_begin:nm,lights_toon_fragment:sm,lights_toon_pars_fragment:rm,lights_phong_fragment:am,lights_phong_pars_fragment:om,lights_physical_fragment:lm,lights_physical_pars_fragment:cm,lights_fragment_begin:hm,lights_fragment_maps:um,lights_fragment_end:dm,logdepthbuf_fragment:fm,logdepthbuf_pars_fragment:pm,logdepthbuf_pars_vertex:mm,logdepthbuf_vertex:gm,map_fragment:xm,map_pars_fragment:vm,map_particle_fragment:ym,map_particle_pars_fragment:_m,metalnessmap_fragment:Mm,metalnessmap_pars_fragment:bm,morphinstance_vertex:Sm,morphcolor_vertex:wm,morphnormal_vertex:Em,morphtarget_pars_vertex:Tm,morphtarget_vertex:Am,normal_fragment_begin:Rm,normal_fragment_maps:Cm,normal_pars_fragment:Pm,normal_pars_vertex:Im,normal_vertex:Lm,normalmap_pars_fragment:Dm,clearcoat_normal_fragment_begin:Um,clearcoat_normal_fragment_maps:Nm,clearcoat_pars_fragment:km,iridescence_pars_fragment:Fm,opaque_fragment:zm,packing:Bm,premultiplied_alpha_fragment:Om,project_vertex:Hm,dithering_fragment:Vm,dithering_pars_fragment:Gm,roughnessmap_fragment:Wm,roughnessmap_pars_fragment:Xm,shadowmap_pars_fragment:qm,shadowmap_pars_vertex:Ym,shadowmap_vertex:$m,shadowmask_pars_fragment:Zm,skinbase_vertex:Jm,skinning_pars_vertex:Km,skinning_vertex:Qm,skinnormal_vertex:jm,specularmap_fragment:tg,specularmap_pars_fragment:eg,tonemapping_fragment:ng,tonemapping_pars_fragment:ig,transmission_fragment:sg,transmission_pars_fragment:rg,uv_pars_fragment:ag,uv_pars_vertex:og,uv_vertex:lg,worldpos_vertex:cg,background_vert:hg,background_frag:ug,backgroundCube_vert:dg,backgroundCube_frag:fg,cube_vert:pg,cube_frag:mg,depth_vert:gg,depth_frag:xg,distanceRGBA_vert:vg,distanceRGBA_frag:yg,equirect_vert:_g,equirect_frag:Mg,linedashed_vert:bg,linedashed_frag:Sg,meshbasic_vert:wg,meshbasic_frag:Eg,meshlambert_vert:Tg,meshlambert_frag:Ag,meshmatcap_vert:Rg,meshmatcap_frag:Cg,meshnormal_vert:Pg,meshnormal_frag:Ig,meshphong_vert:Lg,meshphong_frag:Dg,meshphysical_vert:Ug,meshphysical_frag:Ng,meshtoon_vert:kg,meshtoon_frag:Fg,points_vert:zg,points_frag:Bg,shadow_vert:Og,shadow_frag:Hg,sprite_vert:Vg,sprite_frag:Gg},xt={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Qn={basic:{uniforms:ln([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:ln([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new bt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:ln([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:ln([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:ln([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new bt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:ln([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:ln([xt.points,xt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:ln([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:ln([xt.common,xt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:ln([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:ln([xt.sprite,xt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:ln([xt.common,xt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:ln([xt.lights,xt.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Qn.physical={uniforms:ln([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var Ta={r:0,b:0,g:0},as=new Je,Wg=new te;function Xg(s,t,e,n,i,r,a){let o=new bt(0),l=r===!0?0:1,h,c,f=null,d=0,u=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1,_=g(v);_===null?m(o,l):_&&_.isColor&&(m(_,1),y=!0);let C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(v,y){let _=g(y);_&&(_.isCubeTexture||_.mapping===Mo)?(c===void 0&&(c=new _t(new It(1,1,1),new Re({name:"BackgroundCubeMaterial",uniforms:sr(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),as.copy(y.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(as)),c.material.toneMapped=oe.getTransfer(_.colorSpace)!==me,(f!==_||d!==_.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new _t(new Me(2,2),new Re({name:"BackgroundMaterial",uniforms:sr(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=oe.getTransfer(_.colorSpace)!==me,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,f=_,d=_.version,u=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function m(v,y){v.getRGB(Ta,nf(s)),n.buffers.color.setClear(Ta.r,Ta.g,Ta.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(o,l)},render:x,addToRenderList:p}}function qg(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(M,T,L,U,B){let q=!1,H=f(U,L,T);r!==H&&(r=H,h(r.object)),q=u(M,U,L,B),q&&g(M,U,L,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,_(M,T,L,U),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function h(M){return s.bindVertexArray(M)}function c(M){return s.deleteVertexArray(M)}function f(M,T,L){let U=L.wireframe===!0,B=n[M.id];B===void 0&&(B={},n[M.id]=B);let q=B[T.id];q===void 0&&(q={},B[T.id]=q);let H=q[U];return H===void 0&&(H=d(l()),q[U]=H),H}function d(M){let T=[],L=[],U=[];for(let B=0;B<e;B++)T[B]=0,L[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:L,attributeDivisors:U,object:M,attributes:{},index:null}}function u(M,T,L,U){let B=r.attributes,q=T.attributes,H=0,j=L.getAttributes();for(let G in j)if(j[G].location>=0){let pt=B[G],vt=q[G];if(vt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor)),pt===void 0||pt.attribute!==vt||vt&&pt.data!==vt.data)return!0;H++}return r.attributesNum!==H||r.index!==U}function g(M,T,L,U){let B={},q=T.attributes,H=0,j=L.getAttributes();for(let G in j)if(j[G].location>=0){let pt=q[G];pt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor));let vt={};vt.attribute=pt,pt&&pt.data&&(vt.data=pt.data),B[G]=vt,H++}r.attributes=B,r.attributesNum=H,r.index=U}function x(){let M=r.newAttributes;for(let T=0,L=M.length;T<L;T++)M[T]=0}function p(M){m(M,0)}function m(M,T){let L=r.newAttributes,U=r.enabledAttributes,B=r.attributeDivisors;L[M]=1,U[M]===0&&(s.enableVertexAttribArray(M),U[M]=1),B[M]!==T&&(s.vertexAttribDivisor(M,T),B[M]=T)}function v(){let M=r.newAttributes,T=r.enabledAttributes;for(let L=0,U=T.length;L<U;L++)T[L]!==M[L]&&(s.disableVertexAttribArray(L),T[L]=0)}function y(M,T,L,U,B,q,H){H===!0?s.vertexAttribIPointer(M,T,L,B,q):s.vertexAttribPointer(M,T,L,U,B,q)}function _(M,T,L,U){x();let B=U.attributes,q=L.getAttributes(),H=T.defaultAttributeValues;for(let j in q){let G=q[j];if(G.location>=0){let rt=B[j];if(rt===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){let pt=rt.normalized,vt=rt.itemSize,Ot=t.get(rt);if(Ot===void 0)continue;let $t=Ot.buffer,J=Ot.type,ot=Ot.bytesPerElement,Rt=J===s.INT||J===s.UNSIGNED_INT||rt.gpuType===Dh;if(rt.isInterleavedBufferAttribute){let ct=rt.data,k=ct.stride,W=rt.offset;if(ct.isInstancedInterleavedBuffer){for(let O=0;O<G.locationSize;O++)m(G.location+O,ct.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let O=0;O<G.locationSize;O++)p(G.location+O);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let O=0;O<G.locationSize;O++)y(G.location+O,vt/G.locationSize,J,pt,k*ot,(W+vt/G.locationSize*O)*ot,Rt)}else{if(rt.isInstancedBufferAttribute){for(let ct=0;ct<G.locationSize;ct++)m(G.location+ct,rt.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ct=0;ct<G.locationSize;ct++)p(G.location+ct);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let ct=0;ct<G.locationSize;ct++)y(G.location+ct,vt/G.locationSize,J,pt,vt*ot,vt/G.locationSize*ct*ot,Rt)}}else if(H!==void 0){let pt=H[j];if(pt!==void 0)switch(pt.length){case 2:s.vertexAttrib2fv(G.location,pt);break;case 3:s.vertexAttrib3fv(G.location,pt);break;case 4:s.vertexAttrib4fv(G.location,pt);break;default:s.vertexAttrib1fv(G.location,pt)}}}}v()}function C(){P();for(let M in n){let T=n[M];for(let L in T){let U=T[L];for(let B in U)c(U[B].object),delete U[B];delete T[L]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;let T=n[M.id];for(let L in T){let U=T[L];for(let B in U)c(U[B].object),delete U[B];delete T[L]}delete n[M.id]}function R(M){for(let T in n){let L=n[T];if(L[M.id]===void 0)continue;let U=L[M.id];for(let B in U)c(U[B].object),delete U[B];delete L[M.id]}}function P(){b(),a=!0,r!==i&&(r=i,h(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function Yg(s,t,e){let n;function i(h){n=h}function r(h,c){s.drawArrays(n,h,c),e.update(c,n,1)}function a(h,c,f){f!==0&&(s.drawArraysInstanced(n,h,c,f),e.update(c,n,f))}function o(h,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,f);let u=0;for(let g=0;g<f;g++)u+=c[g];e.update(u,n,1)}function l(h,c,f,d){if(f===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<h.length;g++)a(h[g],c[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(n,h,0,c,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=c[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $g(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==On&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let P=R===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Si&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ei&&!P)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:C,maxSamples:w}}function Zg(s){let t=this,e=null,n=0,i=!1,r=!1,a=new yi,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=c(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,m=s.get(f);if(!i||g===null||g.length===0||r&&!p)r?c(null):h();else{let v=r?0:n,y=v*4,_=m.clippingState||null;l.value=_,_=c(g,d,y,u);for(let C=0;C!==y;++C)_[C]=e[C];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(f,d,u,g){let x=f!==null?f.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=u+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,_=u;y!==x;++y,_+=4)a.copy(f[y]).applyMatrix4(v,o),a.normal.toArray(p,_),p[_+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Jg(s){let t=new WeakMap;function e(a,o){return o===dc?a.mapping=tr:o===fc&&(a.mapping=er),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===dc||o===fc)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let h=new Yc(l.height);return h.fromEquirectangularTexture(s,a),t.set(a,h),a.addEventListener("dispose",i),e(h.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var rr=class extends to{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},$s=4,nd=[.125,.215,.35,.446,.526,.582],hs=20,Xl=new rr,id=new bt,ql=null,Yl=0,$l=0,Zl=!1,ls=(1+Math.sqrt(5))/2,Vs=1/ls,sd=[new A(-ls,Vs,0),new A(ls,Vs,0),new A(-Vs,0,ls),new A(Vs,0,ls),new A(0,ls,-Vs),new A(0,ls,Vs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],ar=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ql,Yl,$l),this._renderer.xr.enabled=Zl,t.scissorTest=!1,Aa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===tr||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Gn,format:On,colorSpace:fr,depthBuffer:!1},i=rd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kg(r)),this._blurMaterial=Qg(r,t,e)}return i}_compileMaterial(t){let e=new _t(this._lodPlanes[0],t);this._renderer.compile(e,Xl)}_sceneToCubeUV(t,e,n,i){let o=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(id),c.toneMapping=Gi,c.autoClear=!1;let u=new We({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new _t(new It,u),x=!1,p=t.background;p?p.isColor&&(u.color.copy(p),t.background=null,x=!0):(u.color.copy(id),x=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(o.up.set(0,l[m],0),o.lookAt(h[m],0,0)):v===1?(o.up.set(0,0,l[m]),o.lookAt(0,h[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,h[m]));let y=this._cubeSize;Aa(i,v*y,m>2?y:0,y,y),c.setRenderTarget(i),x&&c.render(g,o),c.render(t,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=f,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===tr||t.mapping===er;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Aa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Xl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=sd[(i-r-1)%sd.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,f=new _t(this._lodPlanes[i],h),d=h.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*hs-1),x=r/g,p=isFinite(r)?1+Math.floor(c*x):hs;p>hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hs}`);let m=[],v=0;for(let R=0;R<hs;++R){let P=R/x,b=Math.exp(-P*P/2);m.push(b),R===0?v+=b:R<p&&(v+=2*b)}for(let R=0;R<m.length;R++)m[R]=m[R]/v;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let _=this._sizeLods[i],C=3*_*(i>y-$s?i-y+$s:0),w=4*(this._cubeSize-_);Aa(e,C,w,3*_,2*_),l.setRenderTarget(e),l.render(f,Xl)}};function Kg(s){let t=[],e=[],n=[],i=s,r=s-$s+1+nd.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-$s?l=nd[a-s+$s-1]:a===0&&(l=0),n.push(l);let h=1/(o-2),c=-h,f=1+h,d=[c,c,f,c,f,f,c,c,f,f,c,f],u=6,g=6,x=3,p=2,m=1,v=new Float32Array(x*g*u),y=new Float32Array(p*g*u),_=new Float32Array(m*g*u);for(let w=0;w<u;w++){let R=w%3*2/3-1,P=w>2?0:-1,b=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];v.set(b,x*g*w),y.set(d,p*g*w);let M=[w,w,w,w,w,w];_.set(M,m*g*w)}let C=new ue;C.setAttribute("position",new ie(v,x)),C.setAttribute("uv",new ie(y,p)),C.setAttribute("faceIndex",new ie(_,m)),t.push(C),i>$s&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function rd(s,t,e){let n=new cn(s,t,e);return n.texture.mapping=Mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Aa(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Qg(s,t,e){let n=new Float32Array(hs),i=new A(0,1,0);return new Re({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ad(){return new Re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function od(){return new Re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Oh(){return`

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
	`}function jg(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,h=l===dc||l===fc,c=l===tr||l===er;if(h||c){let f=t.get(o),d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ar(s)),f=h?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{let u=o.image;return h&&u&&u.height>0||c&&u&&i(u)?(e===null&&(e=new ar(s)),f=h?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function i(o){let l=0,h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function r(o){let l=o.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function tx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Lr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ex(s,t,e,n){let i={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}d.removeEventListener("dispose",a),delete i[d.id];let u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let u=f.morphAttributes;for(let g in u){let x=u[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],s.ARRAY_BUFFER)}}function h(f){let d=[],u=f.index,g=f.attributes.position,x=0;if(u!==null){let v=u.array;x=u.version;for(let y=0,_=v.length;y<_;y+=3){let C=v[y+0],w=v[y+1],R=v[y+2];d.push(C,w,w,R,R,C)}}else if(g!==void 0){let v=g.array;x=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let C=y+0,w=y+1,R=y+2;d.push(C,w,w,R,R,C)}}else return;let p=new(tf(d)?ja:Qa)(d,1);p.version=x;let m=r.get(f);m&&t.remove(m),r.set(f,p)}function c(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&h(f)}else h(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function nx(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),e.update(u,n,1)}function h(d,u,g){g!==0&&(s.drawElementsInstanced(n,u,r,d*a,g),e.update(u,n,g))}function c(d,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=u[m];e.update(p,n,1)}function f(d,u,g,x){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)h(d[m]/a,u[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,r,d,0,x,0,g);let m=0;for(let v=0;v<g;v++)m+=u[v]*x[v];e.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function ix(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function sx(s,t,e){let n=new WeakMap,i=new ye;function r(a,o,l){let h=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0,d=n.get(o);if(d===void 0||d.count!==f){let b=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],y=0;u===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=o.attributes.position.count*y,C=1;_>t.maxTextureSize&&(C=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*C*4*f),R=new Za(w,_,C,f);R.type=ei,R.needsUpdate=!0;let P=y*4;for(let M=0;M<f;M++){let T=p[M],L=m[M],U=v[M],B=_*C*4*M;for(let q=0;q<T.count;q++){let H=q*P;u===!0&&(i.fromBufferAttribute(T,q),w[B+H+0]=i.x,w[B+H+1]=i.y,w[B+H+2]=i.z,w[B+H+3]=0),g===!0&&(i.fromBufferAttribute(L,q),w[B+H+4]=i.x,w[B+H+5]=i.y,w[B+H+6]=i.z,w[B+H+7]=0),x===!0&&(i.fromBufferAttribute(U,q),w[B+H+8]=i.x,w[B+H+9]=i.y,w[B+H+10]=i.z,w[B+H+11]=U.itemSize===4?i.w:1)}}d={count:f,texture:R,size:new Z(_,C)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let u=0;for(let x=0;x<h.length;x++)u+=h[x];let g=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",h)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function rx(s,t,e,n){let i=new WeakMap;function r(l){let h=n.render.frame,c=l.geometry,f=t.get(l,c);if(i.get(f)!==h&&(t.update(f),i.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return f}function a(){i=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}var no=class extends gn{constructor(t,e,n,i,r,a,o,l,h,c=Js){if(c!==Js&&c!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Js&&(n=ps),n===void 0&&c===ir&&(n=nr),super(null,i,r,a,o,l,c,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},rf=new gn,ld=new no(1,1),af=new Za,of=new Xc,lf=new eo,cd=[],hd=[],ud=new Float32Array(16),dd=new Float32Array(9),fd=new Float32Array(4);function pr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=cd[i];if(r===void 0&&(r=new Float32Array(i),cd[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Xe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function qe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function So(s,t){let e=hd[t];e===void 0&&(e=new Int32Array(t),hd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ax(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function ox(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2fv(this.addr,t),qe(e,t)}}function lx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;s.uniform3fv(this.addr,t),qe(e,t)}}function cx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4fv(this.addr,t),qe(e,t)}}function hx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;fd.set(n),s.uniformMatrix2fv(this.addr,!1,fd),qe(e,n)}}function ux(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;dd.set(n),s.uniformMatrix3fv(this.addr,!1,dd),qe(e,n)}}function dx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;ud.set(n),s.uniformMatrix4fv(this.addr,!1,ud),qe(e,n)}}function fx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function px(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2iv(this.addr,t),qe(e,t)}}function mx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;s.uniform3iv(this.addr,t),qe(e,t)}}function gx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4iv(this.addr,t),qe(e,t)}}function xx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function vx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2uiv(this.addr,t),qe(e,t)}}function yx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;s.uniform3uiv(this.addr,t),qe(e,t)}}function _x(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4uiv(this.addr,t),qe(e,t)}}function Mx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ld.compareFunction=jd,r=ld):r=rf,e.setTexture2D(t||r,i)}function bx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||of,i)}function Sx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||lf,i)}function wx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||af,i)}function Ex(s){switch(s){case 5126:return ax;case 35664:return ox;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return ux;case 35676:return dx;case 5124:case 35670:return fx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return xx;case 36294:return vx;case 36295:return yx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return wx}}function Tx(s,t){s.uniform1fv(this.addr,t)}function Ax(s,t){let e=pr(t,this.size,2);s.uniform2fv(this.addr,e)}function Rx(s,t){let e=pr(t,this.size,3);s.uniform3fv(this.addr,e)}function Cx(s,t){let e=pr(t,this.size,4);s.uniform4fv(this.addr,e)}function Px(s,t){let e=pr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ix(s,t){let e=pr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Lx(s,t){let e=pr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Dx(s,t){s.uniform1iv(this.addr,t)}function Ux(s,t){s.uniform2iv(this.addr,t)}function Nx(s,t){s.uniform3iv(this.addr,t)}function kx(s,t){s.uniform4iv(this.addr,t)}function Fx(s,t){s.uniform1uiv(this.addr,t)}function zx(s,t){s.uniform2uiv(this.addr,t)}function Bx(s,t){s.uniform3uiv(this.addr,t)}function Ox(s,t){s.uniform4uiv(this.addr,t)}function Hx(s,t,e){let n=this.cache,i=t.length,r=So(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||rf,r[a])}function Vx(s,t,e){let n=this.cache,i=t.length,r=So(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||of,r[a])}function Gx(s,t,e){let n=this.cache,i=t.length,r=So(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||lf,r[a])}function Wx(s,t,e){let n=this.cache,i=t.length,r=So(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||af,r[a])}function Xx(s){switch(s){case 5126:return Tx;case 35664:return Ax;case 35665:return Rx;case 35666:return Cx;case 35674:return Px;case 35675:return Ix;case 35676:return Lx;case 5124:case 35670:return Dx;case 35667:case 35671:return Ux;case 35668:case 35672:return Nx;case 35669:case 35673:return kx;case 5125:return Fx;case 36294:return zx;case 36295:return Bx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Wx}}var $c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ex(e.type)}},Zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xx(e.type)}},Jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Jl=/(\w+)(\])?(\[|\.)?/g;function pd(s,t){s.seq.push(t),s.map[t.id]=t}function qx(s,t,e){let n=s.name,i=n.length;for(Jl.lastIndex=0;;){let r=Jl.exec(n),a=Jl.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===i){pd(e,h===void 0?new $c(o,s,t):new Zc(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new Jc(o),pd(e,f)),e=f}}}var Qs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);qx(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function md(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Yx=37297,$x=0;function Zx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var gd=new Qt;function Jx(s){oe._getMatrix(gd,oe.workingColorSpace,s);let t=`mat3( ${gd.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(s)){case bo:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function xd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Zx(s.getShaderSource(t),a)}else return i}function Kx(s,t){let e=Jx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qx(s,t){let e;switch(t){case Rh:e="Linear";break;case Ch:e="Reinhard";break;case Ph:e="Cineon";break;case $r:e="ACESFilmic";break;case Ih:e="AgX";break;case Lh:e="Neutral";break;case Pp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ra=new A;function jx(){oe.getLuminanceCoefficients(Ra);let s=Ra.x.toFixed(4),t=Ra.y.toFixed(4),e=Ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function ev(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function nv(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Dr(s){return s!==""}function vd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(s){return s.replace(iv,rv)}var sv=new Map;function rv(s,t){let e=jt[t];if(e===void 0){let n=sv.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Kc(e)}var av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _d(s){return s.replace(av,ov)}function ov(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Md(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function lv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Od?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ah?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function cv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case tr:case er:t="ENVMAP_TYPE_CUBE";break;case Mo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hv(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===er&&(t="ENVMAP_MODE_REFRACTION"),t}function uv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Hd:t="ENVMAP_BLENDING_MULTIPLY";break;case Rp:t="ENVMAP_BLENDING_MIX";break;case Cp:t="ENVMAP_BLENDING_ADD";break}return t}function dv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function fv(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=lv(e),h=cv(e),c=hv(e),f=uv(e),d=dv(e),u=tv(e),g=ev(r),x=i.createProgram(),p,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),m.length>0&&(m+=`
`)):(p=[Md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),m=[Md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gi?"#define TONE_MAPPING":"",e.toneMapping!==Gi?jt.tonemapping_pars_fragment:"",e.toneMapping!==Gi?Qx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Kx("linearToOutputTexel",e.outputColorSpace),jx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Dr).join(`
`)),a=Kc(a),a=vd(a,e),a=yd(a,e),o=Kc(o),o=vd(o,e),o=yd(o,e),a=_d(a),o=_d(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=v+p+a,_=v+m+o,C=md(i,i.VERTEX_SHADER,y),w=md(i,i.FRAGMENT_SHADER,_);i.attachShader(x,C),i.attachShader(x,w),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(T){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(x).trim(),U=i.getShaderInfoLog(C).trim(),B=i.getShaderInfoLog(w).trim(),q=!0,H=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,C,w);else{let j=xd(i,C,"vertex"),G=xd(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+L+`
`+j+`
`+G)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(U===""||B==="")&&(H=!1);H&&(T.diagnostics={runnable:q,programLog:L,vertexShader:{log:U,prefix:p},fragmentShader:{log:B,prefix:m}})}i.deleteShader(C),i.deleteShader(w),P=new Qs(i,x),b=nv(i,x)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,Yx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$x++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=w,this}var pv=0,Qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jc(t),e.set(t,n)),n}},jc=class{constructor(t){this.id=pv++,this.code=t,this.usedTimes=0}};function mv(s,t,e,n,i,r,a){let o=new Ka,l=new Qc,h=new Set,c=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures,u=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return h.add(b),b===0?"uv":`uv${b}`}function p(b,M,T,L,U){let B=L.fog,q=U.geometry,H=b.isMeshStandardMaterial?L.environment:null,j=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),G=j&&j.mapping===Mo?j.image.height:null,rt=g[b.type];b.precision!==null&&(u=i.getMaxPrecision(b.precision),u!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));let pt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,vt=pt!==void 0?pt.length:0,Ot=0;q.morphAttributes.position!==void 0&&(Ot=1),q.morphAttributes.normal!==void 0&&(Ot=2),q.morphAttributes.color!==void 0&&(Ot=3);let $t,J,ot,Rt;if(rt){let xe=Qn[rt];$t=xe.vertexShader,J=xe.fragmentShader}else $t=b.vertexShader,J=b.fragmentShader,l.update(b),ot=l.getVertexShaderID(b),Rt=l.getFragmentShaderID(b);let ct=s.getRenderTarget(),k=s.state.buffers.depth.getReversed(),W=U.isInstancedMesh===!0,O=U.isBatchedMesh===!0,lt=!!b.map,X=!!b.matcap,nt=!!j,D=!!b.aoMap,mt=!!b.lightMap,st=!!b.bumpMap,ht=!!b.normalMap,ft=!!b.displacementMap,zt=!!b.emissiveMap,St=!!b.metalnessMap,I=!!b.roughnessMap,S=b.anisotropy>0,V=b.clearcoat>0,Q=b.dispersion>0,it=b.iridescence>0,tt=b.sheen>0,Pt=b.transmission>0,yt=S&&!!b.anisotropyMap,Mt=V&&!!b.clearcoatMap,ee=V&&!!b.clearcoatNormalMap,at=V&&!!b.clearcoatRoughnessMap,At=it&&!!b.iridescenceMap,Ht=it&&!!b.iridescenceThicknessMap,Vt=tt&&!!b.sheenColorMap,Ct=tt&&!!b.sheenRoughnessMap,se=!!b.specularMap,qt=!!b.specularColorMap,de=!!b.specularIntensityMap,N=Pt&&!!b.transmissionMap,ut=Pt&&!!b.thicknessMap,K=!!b.gradientMap,et=!!b.alphaMap,Tt=b.alphaTest>0,wt=!!b.alphaHash,Jt=!!b.extensions,Ue=Gi;b.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Ue=s.toneMapping);let tn={shaderID:rt,shaderType:b.type,shaderName:b.name,vertexShader:$t,fragmentShader:J,defines:b.defines,customVertexShaderID:ot,customFragmentShaderID:Rt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:O,batchingColor:O&&U._colorsTexture!==null,instancing:W,instancingColor:W&&U.instanceColor!==null,instancingMorph:W&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:fr,alphaToCoverage:!!b.alphaToCoverage,map:lt,matcap:X,envMap:nt,envMapMode:nt&&j.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:mt,bumpMap:st,normalMap:ht,displacementMap:d&&ft,emissiveMap:zt,normalMapObjectSpace:ht&&b.normalMapType===Up,normalMapTangentSpace:ht&&b.normalMapType===Qd,metalnessMap:St,roughnessMap:I,anisotropy:S,anisotropyMap:yt,clearcoat:V,clearcoatMap:Mt,clearcoatNormalMap:ee,clearcoatRoughnessMap:at,dispersion:Q,iridescence:it,iridescenceMap:At,iridescenceThicknessMap:Ht,sheen:tt,sheenColorMap:Vt,sheenRoughnessMap:Ct,specularMap:se,specularColorMap:qt,specularIntensityMap:de,transmission:Pt,transmissionMap:N,thicknessMap:ut,gradientMap:K,opaque:b.transparent===!1&&b.blending===ii&&b.alphaToCoverage===!1,alphaMap:et,alphaTest:Tt,alphaHash:wt,combine:b.combine,mapUv:lt&&x(b.map.channel),aoMapUv:D&&x(b.aoMap.channel),lightMapUv:mt&&x(b.lightMap.channel),bumpMapUv:st&&x(b.bumpMap.channel),normalMapUv:ht&&x(b.normalMap.channel),displacementMapUv:ft&&x(b.displacementMap.channel),emissiveMapUv:zt&&x(b.emissiveMap.channel),metalnessMapUv:St&&x(b.metalnessMap.channel),roughnessMapUv:I&&x(b.roughnessMap.channel),anisotropyMapUv:yt&&x(b.anisotropyMap.channel),clearcoatMapUv:Mt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(b.sheenRoughnessMap.channel),specularMapUv:se&&x(b.specularMap.channel),specularColorMapUv:qt&&x(b.specularColorMap.channel),specularIntensityMapUv:de&&x(b.specularIntensityMap.channel),transmissionMapUv:N&&x(b.transmissionMap.channel),thicknessMapUv:ut&&x(b.thicknessMap.channel),alphaMapUv:et&&x(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ht||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(lt||et),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:k,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ue,decodeVideoTexture:lt&&b.map.isVideoTexture===!0&&oe.getTransfer(b.map.colorSpace)===me,decodeVideoTextureEmissive:zt&&b.emissiveMap.isVideoTexture===!0&&oe.getTransfer(b.emissiveMap.colorSpace)===me,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===_e,flipSided:b.side===je,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Jt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&b.extensions.multiDraw===!0||O)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return tn.vertexUv1s=h.has(1),tn.vertexUv2s=h.has(2),tn.vertexUv3s=h.has(3),h.clear(),tn}function m(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let T in b.defines)M.push(T),M.push(b.defines[T]);return b.isRawShaderMaterial===!1&&(v(M,b),y(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function _(b){let M=g[b.type],T;if(M){let L=Qn[M];T=ai.clone(L.uniforms)}else T=b.uniforms;return T}function C(b,M){let T;for(let L=0,U=c.length;L<U;L++){let B=c[L];if(B.cacheKey===M){T=B,++T.usedTimes;break}}return T===void 0&&(T=new fv(s,M,b,r),c.push(T)),T}function w(b){if(--b.usedTimes===0){let M=c.indexOf(b);c[M]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:_,acquireProgram:C,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:P}}function gv(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function xv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function bd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Sd(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(f,d,u,g,x,p){let m=s[t];return m===void 0?(m={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:x,group:p},s[t]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=u,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=x,m.group=p),t++,m}function o(f,d,u,g,x,p){let m=a(f,d,u,g,x,p);u.transmission>0?n.push(m):u.transparent===!0?i.push(m):e.push(m)}function l(f,d,u,g,x,p){let m=a(f,d,u,g,x,p);u.transmission>0?n.unshift(m):u.transparent===!0?i.unshift(m):e.unshift(m)}function h(f,d){e.length>1&&e.sort(f||xv),n.length>1&&n.sort(d||bd),i.length>1&&i.sort(d||bd)}function c(){for(let f=t,d=s.length;f<d;f++){let u=s[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:c,sort:h}}function vv(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Sd,s.set(n,[a])):i>=r.length?(a=new Sd,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function yv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new bt};break;case"SpotLight":e={position:new A,direction:new A,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function _v(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Mv=0;function bv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Sv(s){let t=new yv,e=_v(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new A);let i=new A,r=new te,a=new te;function o(h){let c=0,f=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let u=0,g=0,x=0,p=0,m=0,v=0,y=0,_=0,C=0,w=0,R=0;h.sort(bv);for(let b=0,M=h.length;b<M;b++){let T=h[b],L=T.color,U=T.intensity,B=T.distance,q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)c+=L.r*U,f+=L.g*U,d+=L.b*U;else if(T.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(T.sh.coefficients[H],U);R++}else if(T.isDirectionalLight){let H=t.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let j=T.shadow,G=e.get(T);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[u]=G,n.directionalShadowMap[u]=q,n.directionalShadowMatrix[u]=T.shadow.matrix,v++}n.directional[u]=H,u++}else if(T.isSpotLight){let H=t.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(L).multiplyScalar(U),H.distance=B,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,n.spot[x]=H;let j=T.shadow;if(T.map&&(n.spotLightMap[C]=T.map,C++,j.updateMatrices(T),T.castShadow&&w++),n.spotLightMatrix[x]=j.matrix,T.castShadow){let G=e.get(T);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=q,_++}x++}else if(T.isRectAreaLight){let H=t.get(T);H.color.copy(L).multiplyScalar(U),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=H,p++}else if(T.isPointLight){let H=t.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){let j=T.shadow,G=e.get(T);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=T.shadow.matrix,y++}n.point[g]=H,g++}else if(T.isHemisphereLight){let H=t.get(T);H.skyColor.copy(T.color).multiplyScalar(U),H.groundColor.copy(T.groundColor).multiplyScalar(U),n.hemi[m]=H,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=f,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==u||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==_||P.numSpotMaps!==C||P.numLightProbes!==R)&&(n.directional.length=u,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,P.directionalLength=u,P.pointLength=g,P.spotLength=x,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=_,P.numSpotMaps=C,P.numLightProbes=R,n.version=Mv++)}function l(h,c){let f=0,d=0,u=0,g=0,x=0,p=c.matrixWorldInverse;for(let m=0,v=h.length;m<v;m++){let y=h[m];if(y.isDirectionalLight){let _=n.directional[f];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),f++}else if(y.isSpotLight){let _=n.spot[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),u++}else if(y.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function wd(s){let t=new Sv(s),e=[],n=[];function i(c){h.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function a(c){n.push(c)}function o(){t.setup(e)}function l(c){t.setupView(e,c)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function wv(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new wd(s),t.set(i,[o])):r>=a.length?(o=new wd(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var th=class extends Ei{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},eh=class extends Ei{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tv=`uniform sampler2D shadow_pass;
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
}`;function Av(s,t,e){let n=new zr,i=new Z,r=new Z,a=new ye,o=new th({depthPacking:Dp}),l=new eh,h={},c=e.maxTextureSize,f={[Xi]:je,[je]:Xi,[_e]:_e},d=new Re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:Ev,fragmentShader:Tv}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new ue;g.setAttribute("position",new ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new _t(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Od;let m=this.type;this.render=function(w,R,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;let b=s.getRenderTarget(),M=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),L=s.state;L.setBlending(ni),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=m!==vi&&this.type===vi,B=m===vi&&this.type!==vi;for(let q=0,H=w.length;q<H;q++){let j=w[q],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let rt=G.getFrameExtents();if(i.multiply(rt),r.copy(G.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/rt.x),i.x=r.x*rt.x,G.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/rt.y),i.y=r.y*rt.y,G.mapSize.y=r.y)),G.map===null||U===!0||B===!0){let vt=this.type!==vi?{minFilter:Sn,magFilter:Sn}:{};G.map!==null&&G.map.dispose(),G.map=new cn(i.x,i.y,vt),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let pt=G.getViewportCount();for(let vt=0;vt<pt;vt++){let Ot=G.getViewport(vt);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),L.viewport(a),G.updateMatrices(j,vt),n=G.getFrustum(),_(R,P,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===vi&&v(G,P),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(b,M,T)};function v(w,R){let P=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new cn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(R,null,P,d,x,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(R,null,P,u,x,null)}function y(w,R,P,b){let M=null,T=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)M=T;else if(M=P.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let L=M.uuid,U=R.uuid,B=h[L];B===void 0&&(B={},h[L]=B);let q=B[U];q===void 0&&(q=M.clone(),B[U]=q,R.addEventListener("dispose",C)),M=q}if(M.visible=R.visible,M.wireframe=R.wireframe,b===vi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:f[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let L=s.properties.get(M);L.light=P}return M}function _(w,R,P,b,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===vi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);let U=t.update(w),B=w.material;if(Array.isArray(B)){let q=U.groups;for(let H=0,j=q.length;H<j;H++){let G=q[H],rt=B[G.materialIndex];if(rt&&rt.visible){let pt=y(w,rt,b,M);w.onBeforeShadow(s,w,R,P,U,pt,G),s.renderBufferDirect(P,null,U,pt,w,G),w.onAfterShadow(s,w,R,P,U,pt,G)}}}else if(B.visible){let q=y(w,B,b,M);w.onBeforeShadow(s,w,R,P,U,q,null),s.renderBufferDirect(P,null,U,q,w,null),w.onAfterShadow(s,w,R,P,U,q,null)}}let L=w.children;for(let U=0,B=L.length;U<B;U++)_(L[U],R,P,b,M)}function C(w){w.target.removeEventListener("dispose",C);for(let P in h){let b=h[P],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var Rv={[rc]:ac,[oc]:hc,[lc]:uc,[js]:cc,[ac]:rc,[hc]:oc,[uc]:lc,[cc]:js};function Cv(s,t){function e(){let N=!1,ut=new ye,K=null,et=new ye(0,0,0,0);return{setMask:function(Tt){K!==Tt&&!N&&(s.colorMask(Tt,Tt,Tt,Tt),K=Tt)},setLocked:function(Tt){N=Tt},setClear:function(Tt,wt,Jt,Ue,tn){tn===!0&&(Tt*=Ue,wt*=Ue,Jt*=Ue),ut.set(Tt,wt,Jt,Ue),et.equals(ut)===!1&&(s.clearColor(Tt,wt,Jt,Ue),et.copy(ut))},reset:function(){N=!1,K=null,et.set(-1,0,0,0)}}}function n(){let N=!1,ut=!1,K=null,et=null,Tt=null;return{setReversed:function(wt){if(ut!==wt){let Jt=t.get("EXT_clip_control");ut?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);let Ue=Tt;Tt=null,this.setClear(Ue)}ut=wt},getReversed:function(){return ut},setTest:function(wt){wt?ct(s.DEPTH_TEST):k(s.DEPTH_TEST)},setMask:function(wt){K!==wt&&!N&&(s.depthMask(wt),K=wt)},setFunc:function(wt){if(ut&&(wt=Rv[wt]),et!==wt){switch(wt){case rc:s.depthFunc(s.NEVER);break;case ac:s.depthFunc(s.ALWAYS);break;case oc:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case lc:s.depthFunc(s.EQUAL);break;case cc:s.depthFunc(s.GEQUAL);break;case hc:s.depthFunc(s.GREATER);break;case uc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}et=wt}},setLocked:function(wt){N=wt},setClear:function(wt){Tt!==wt&&(ut&&(wt=1-wt),s.clearDepth(wt),Tt=wt)},reset:function(){N=!1,K=null,et=null,Tt=null,ut=!1}}}function i(){let N=!1,ut=null,K=null,et=null,Tt=null,wt=null,Jt=null,Ue=null,tn=null;return{setTest:function(xe){N||(xe?ct(s.STENCIL_TEST):k(s.STENCIL_TEST))},setMask:function(xe){ut!==xe&&!N&&(s.stencilMask(xe),ut=xe)},setFunc:function(xe,Nn,ui){(K!==xe||et!==Nn||Tt!==ui)&&(s.stencilFunc(xe,Nn,ui),K=xe,et=Nn,Tt=ui)},setOp:function(xe,Nn,ui){(wt!==xe||Jt!==Nn||Ue!==ui)&&(s.stencilOp(xe,Nn,ui),wt=xe,Jt=Nn,Ue=ui)},setLocked:function(xe){N=xe},setClear:function(xe){tn!==xe&&(s.clearStencil(xe),tn=xe)},reset:function(){N=!1,ut=null,K=null,et=null,Tt=null,wt=null,Jt=null,Ue=null,tn=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,h=new WeakMap,c={},f={},d=new WeakMap,u=[],g=null,x=!1,p=null,m=null,v=null,y=null,_=null,C=null,w=null,R=new bt(0,0,0),P=0,b=!1,M=null,T=null,L=null,U=null,B=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=j>=2);let rt=null,pt={},vt=s.getParameter(s.SCISSOR_BOX),Ot=s.getParameter(s.VIEWPORT),$t=new ye().fromArray(vt),J=new ye().fromArray(Ot);function ot(N,ut,K,et){let Tt=new Uint8Array(4),wt=s.createTexture();s.bindTexture(N,wt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Jt=0;Jt<K;Jt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ut,0,s.RGBA,1,1,et,0,s.RGBA,s.UNSIGNED_BYTE,Tt):s.texImage2D(ut+Jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Tt);return wt}let Rt={};Rt[s.TEXTURE_2D]=ot(s.TEXTURE_2D,s.TEXTURE_2D,1),Rt[s.TEXTURE_CUBE_MAP]=ot(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[s.TEXTURE_2D_ARRAY]=ot(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Rt[s.TEXTURE_3D]=ot(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(s.DEPTH_TEST),a.setFunc(js),st(!1),ht(Ru),ct(s.CULL_FACE),D(ni);function ct(N){c[N]!==!0&&(s.enable(N),c[N]=!0)}function k(N){c[N]!==!1&&(s.disable(N),c[N]=!1)}function W(N,ut){return f[N]!==ut?(s.bindFramebuffer(N,ut),f[N]=ut,N===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ut),N===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ut),!0):!1}function O(N,ut){let K=u,et=!1;if(N){K=d.get(ut),K===void 0&&(K=[],d.set(ut,K));let Tt=N.textures;if(K.length!==Tt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let wt=0,Jt=Tt.length;wt<Jt;wt++)K[wt]=s.COLOR_ATTACHMENT0+wt;K.length=Tt.length,et=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,et=!0);et&&s.drawBuffers(K)}function lt(N){return g!==N?(s.useProgram(N),g=N,!0):!1}let X={[cs]:s.FUNC_ADD,[up]:s.FUNC_SUBTRACT,[dp]:s.FUNC_REVERSE_SUBTRACT};X[fp]=s.MIN,X[pp]=s.MAX;let nt={[mp]:s.ZERO,[gp]:s.ONE,[xp]:s.SRC_COLOR,[ic]:s.SRC_ALPHA,[Sp]:s.SRC_ALPHA_SATURATE,[Mp]:s.DST_COLOR,[yp]:s.DST_ALPHA,[vp]:s.ONE_MINUS_SRC_COLOR,[sc]:s.ONE_MINUS_SRC_ALPHA,[bp]:s.ONE_MINUS_DST_COLOR,[_p]:s.ONE_MINUS_DST_ALPHA,[wp]:s.CONSTANT_COLOR,[Ep]:s.ONE_MINUS_CONSTANT_COLOR,[Tp]:s.CONSTANT_ALPHA,[Ap]:s.ONE_MINUS_CONSTANT_ALPHA};function D(N,ut,K,et,Tt,wt,Jt,Ue,tn,xe){if(N===ni){x===!0&&(k(s.BLEND),x=!1);return}if(x===!1&&(ct(s.BLEND),x=!0),N!==hp){if(N!==p||xe!==b){if((m!==cs||_!==cs)&&(s.blendEquation(s.FUNC_ADD),m=cs,_=cs),xe)switch(N){case ii:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rn:s.blendFunc(s.ONE,s.ONE);break;case Cu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ii:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Cu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,y=null,C=null,w=null,R.set(0,0,0),P=0,p=N,b=xe}return}Tt=Tt||ut,wt=wt||K,Jt=Jt||et,(ut!==m||Tt!==_)&&(s.blendEquationSeparate(X[ut],X[Tt]),m=ut,_=Tt),(K!==v||et!==y||wt!==C||Jt!==w)&&(s.blendFuncSeparate(nt[K],nt[et],nt[wt],nt[Jt]),v=K,y=et,C=wt,w=Jt),(Ue.equals(R)===!1||tn!==P)&&(s.blendColor(Ue.r,Ue.g,Ue.b,tn),R.copy(Ue),P=tn),p=N,b=!1}function mt(N,ut){N.side===_e?k(s.CULL_FACE):ct(s.CULL_FACE);let K=N.side===je;ut&&(K=!K),st(K),N.blending===ii&&N.transparent===!1?D(ni):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let et=N.stencilWrite;o.setTest(et),et&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),zt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):k(s.SAMPLE_ALPHA_TO_COVERAGE)}function st(N){M!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),M=N)}function ht(N){N!==lp?(ct(s.CULL_FACE),N!==T&&(N===Ru?s.cullFace(s.BACK):N===cp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):k(s.CULL_FACE),T=N}function ft(N){N!==L&&(H&&s.lineWidth(N),L=N)}function zt(N,ut,K){N?(ct(s.POLYGON_OFFSET_FILL),(U!==ut||B!==K)&&(s.polygonOffset(ut,K),U=ut,B=K)):k(s.POLYGON_OFFSET_FILL)}function St(N){N?ct(s.SCISSOR_TEST):k(s.SCISSOR_TEST)}function I(N){N===void 0&&(N=s.TEXTURE0+q-1),rt!==N&&(s.activeTexture(N),rt=N)}function S(N,ut,K){K===void 0&&(rt===null?K=s.TEXTURE0+q-1:K=rt);let et=pt[K];et===void 0&&(et={type:void 0,texture:void 0},pt[K]=et),(et.type!==N||et.texture!==ut)&&(rt!==K&&(s.activeTexture(K),rt=K),s.bindTexture(N,ut||Rt[N]),et.type=N,et.texture=ut)}function V(){let N=pt[rt];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ht(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Vt(N){$t.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),$t.copy(N))}function Ct(N){J.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),J.copy(N))}function se(N,ut){let K=h.get(ut);K===void 0&&(K=new WeakMap,h.set(ut,K));let et=K.get(N);et===void 0&&(et=s.getUniformBlockIndex(ut,N.name),K.set(N,et))}function qt(N,ut){let et=h.get(ut).get(N);l.get(ut)!==et&&(s.uniformBlockBinding(ut,et,N.__bindingPointIndex),l.set(ut,et))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},rt=null,pt={},f={},d=new WeakMap,u=[],g=null,x=!1,p=null,m=null,v=null,y=null,_=null,C=null,w=null,R=new bt(0,0,0),P=0,b=!1,M=null,T=null,L=null,U=null,B=null,$t.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:k,bindFramebuffer:W,drawBuffers:O,useProgram:lt,setBlending:D,setMaterial:mt,setFlipSided:st,setCullFace:ht,setLineWidth:ft,setPolygonOffset:zt,setScissorTest:St,activeTexture:I,bindTexture:S,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:it,texImage2D:At,texImage3D:Ht,updateUBOMapping:se,uniformBlockBinding:qt,texStorage2D:ee,texStorage3D:at,texSubImage2D:tt,texSubImage3D:Pt,compressedTexSubImage2D:yt,compressedTexSubImage3D:Mt,scissor:Vt,viewport:Ct,reset:de}}function Ed(s,t,e,n){let i=Pv(n);switch(e){case qd:return s*t;case $d:return s*t;case Zd:return s*t*2;case kh:return s*t/i.components*i.byteLength;case Fh:return s*t/i.components*i.byteLength;case Jd:return s*t*2/i.components*i.byteLength;case zh:return s*t*2/i.components*i.byteLength;case Yd:return s*t*3/i.components*i.byteLength;case On:return s*t*4/i.components*i.byteLength;case Bh:return s*t*4/i.components*i.byteLength;case Ba:case Oa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ha:case Va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gc:case vc:return Math.max(s,16)*Math.max(t,8)/4;case mc:case xc:return Math.max(s,8)*Math.max(t,8)/2;case yc:case _c:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Mc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case wc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Cc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Pc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Dc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Uc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Nc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ga:case kc:case Fc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Kd:case zc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Bc:case Oc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pv(s){switch(s){case Si:case Gd:return{byteLength:1,components:1};case Fr:case Wd:case Gn:return{byteLength:2,components:1};case Uh:case Nh:return{byteLength:2,components:4};case ps:case Dh:case ei:return{byteLength:4,components:1};case Xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Iv(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Z,c=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,S){return u?new OffscreenCanvas(I,S):Ya("canvas")}function x(I,S,V){let Q=1,it=St(I);if((it.width>V||it.height>V)&&(Q=V/Math.max(it.width,it.height)),Q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let tt=Math.floor(Q*it.width),Pt=Math.floor(Q*it.height);f===void 0&&(f=g(tt,Pt));let yt=S?g(tt,Pt):f;return yt.width=tt,yt.height=Pt,yt.getContext("2d").drawImage(I,0,0,tt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+tt+"x"+Pt+")."),yt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),I;return I}function p(I){return I.generateMipmaps}function m(I){s.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(I,S,V,Q,it=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let tt=S;if(S===s.RED&&(V===s.FLOAT&&(tt=s.R32F),V===s.HALF_FLOAT&&(tt=s.R16F),V===s.UNSIGNED_BYTE&&(tt=s.R8)),S===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(tt=s.R8UI),V===s.UNSIGNED_SHORT&&(tt=s.R16UI),V===s.UNSIGNED_INT&&(tt=s.R32UI),V===s.BYTE&&(tt=s.R8I),V===s.SHORT&&(tt=s.R16I),V===s.INT&&(tt=s.R32I)),S===s.RG&&(V===s.FLOAT&&(tt=s.RG32F),V===s.HALF_FLOAT&&(tt=s.RG16F),V===s.UNSIGNED_BYTE&&(tt=s.RG8)),S===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(tt=s.RG8UI),V===s.UNSIGNED_SHORT&&(tt=s.RG16UI),V===s.UNSIGNED_INT&&(tt=s.RG32UI),V===s.BYTE&&(tt=s.RG8I),V===s.SHORT&&(tt=s.RG16I),V===s.INT&&(tt=s.RG32I)),S===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(tt=s.RGB8UI),V===s.UNSIGNED_SHORT&&(tt=s.RGB16UI),V===s.UNSIGNED_INT&&(tt=s.RGB32UI),V===s.BYTE&&(tt=s.RGB8I),V===s.SHORT&&(tt=s.RGB16I),V===s.INT&&(tt=s.RGB32I)),S===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(tt=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(tt=s.RGBA16UI),V===s.UNSIGNED_INT&&(tt=s.RGBA32UI),V===s.BYTE&&(tt=s.RGBA8I),V===s.SHORT&&(tt=s.RGBA16I),V===s.INT&&(tt=s.RGBA32I)),S===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(tt=s.RGB9_E5),S===s.RGBA){let Pt=it?bo:oe.getTransfer(Q);V===s.FLOAT&&(tt=s.RGBA32F),V===s.HALF_FLOAT&&(tt=s.RGBA16F),V===s.UNSIGNED_BYTE&&(tt=Pt===me?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function _(I,S){let V;return I?S===null||S===ps||S===nr?V=s.DEPTH24_STENCIL8:S===ei?V=s.DEPTH32F_STENCIL8:S===Fr&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ps||S===nr?V=s.DEPTH_COMPONENT24:S===ei?V=s.DEPTH_COMPONENT32F:S===Fr&&(V=s.DEPTH_COMPONENT16),V}function C(I,S){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Sn&&I.minFilter!==ti?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function w(I){let S=I.target;S.removeEventListener("dispose",w),P(S),S.isVideoTexture&&c.delete(S)}function R(I){let S=I.target;S.removeEventListener("dispose",R),M(S)}function P(I){let S=n.get(I);if(S.__webglInit===void 0)return;let V=I.source,Q=d.get(V);if(Q){let it=Q[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&b(I),Object.keys(Q).length===0&&d.delete(V)}n.remove(I)}function b(I){let S=n.get(I);s.deleteTexture(S.__webglTexture);let V=I.source,Q=d.get(V);delete Q[S.__cacheKey],a.memory.textures--}function M(I){let S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let it=0;it<S.__webglFramebuffer[Q].length;it++)s.deleteFramebuffer(S.__webglFramebuffer[Q][it]);else s.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[Q]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let V=I.textures;for(let Q=0,it=V.length;Q<it;Q++){let tt=n.get(V[Q]);tt.__webglTexture&&(s.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(V[Q])}n.remove(I)}let T=0;function L(){T=0}function U(){let I=T;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),T+=1,I}function B(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function q(I,S){let V=n.get(I);if(I.isVideoTexture&&ft(I),I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){let Q=I.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(V,I,S);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+S)}function H(I,S){let V=n.get(I);if(I.version>0&&V.__version!==I.version){J(V,I,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+S)}function j(I,S){let V=n.get(I);if(I.version>0&&V.__version!==I.version){J(V,I,S);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+S)}function G(I,S){let V=n.get(I);if(I.version>0&&V.__version!==I.version){ot(V,I,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+S)}let rt={[fs]:s.REPEAT,[us]:s.CLAMP_TO_EDGE,[pc]:s.MIRRORED_REPEAT},pt={[Sn]:s.NEAREST,[Ip]:s.NEAREST_MIPMAP_NEAREST,[la]:s.NEAREST_MIPMAP_LINEAR,[ti]:s.LINEAR,[Ml]:s.LINEAR_MIPMAP_NEAREST,[ds]:s.LINEAR_MIPMAP_LINEAR},vt={[Np]:s.NEVER,[Hp]:s.ALWAYS,[kp]:s.LESS,[jd]:s.LEQUAL,[Fp]:s.EQUAL,[Op]:s.GEQUAL,[zp]:s.GREATER,[Bp]:s.NOTEQUAL};function Ot(I,S){if(S.type===ei&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ti||S.magFilter===Ml||S.magFilter===la||S.magFilter===ds||S.minFilter===ti||S.minFilter===Ml||S.minFilter===la||S.minFilter===ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,rt[S.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,rt[S.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,rt[S.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,pt[S.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,pt[S.minFilter]),S.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,vt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Sn||S.minFilter!==la&&S.minFilter!==ds||S.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function $t(I,S){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",w));let Q=S.source,it=d.get(Q);it===void 0&&(it={},d.set(Q,it));let tt=B(S);if(tt!==I.__cacheKey){it[tt]===void 0&&(it[tt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),it[tt].usedTimes++;let Pt=it[I.__cacheKey];Pt!==void 0&&(it[I.__cacheKey].usedTimes--,Pt.usedTimes===0&&b(S)),I.__cacheKey=tt,I.__webglTexture=it[tt].texture}return V}function J(I,S,V){let Q=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=s.TEXTURE_3D);let it=$t(I,S),tt=S.source;e.bindTexture(Q,I.__webglTexture,s.TEXTURE0+V);let Pt=n.get(tt);if(tt.version!==Pt.__version||it===!0){e.activeTexture(s.TEXTURE0+V);let yt=oe.getPrimaries(oe.workingColorSpace),Mt=S.colorSpace===Hi?null:oe.getPrimaries(S.colorSpace),ee=S.colorSpace===Hi||yt===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let at=x(S.image,!1,i.maxTextureSize);at=zt(S,at);let At=r.convert(S.format,S.colorSpace),Ht=r.convert(S.type),Vt=y(S.internalFormat,At,Ht,S.colorSpace,S.isVideoTexture);Ot(Q,S);let Ct,se=S.mipmaps,qt=S.isVideoTexture!==!0,de=Pt.__version===void 0||it===!0,N=tt.dataReady,ut=C(S,at);if(S.isDepthTexture)Vt=_(S.format===ir,S.type),de&&(qt?e.texStorage2D(s.TEXTURE_2D,1,Vt,at.width,at.height):e.texImage2D(s.TEXTURE_2D,0,Vt,at.width,at.height,0,At,Ht,null));else if(S.isDataTexture)if(se.length>0){qt&&de&&e.texStorage2D(s.TEXTURE_2D,ut,Vt,se[0].width,se[0].height);for(let K=0,et=se.length;K<et;K++)Ct=se[K],qt?N&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,Ct.width,Ct.height,At,Ht,Ct.data):e.texImage2D(s.TEXTURE_2D,K,Vt,Ct.width,Ct.height,0,At,Ht,Ct.data);S.generateMipmaps=!1}else qt?(de&&e.texStorage2D(s.TEXTURE_2D,ut,Vt,at.width,at.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,at.width,at.height,At,Ht,at.data)):e.texImage2D(s.TEXTURE_2D,0,Vt,at.width,at.height,0,At,Ht,at.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qt&&de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,Vt,se[0].width,se[0].height,at.depth);for(let K=0,et=se.length;K<et;K++)if(Ct=se[K],S.format!==On)if(At!==null)if(qt){if(N)if(S.layerUpdates.size>0){let Tt=Ed(Ct.width,Ct.height,S.format,S.type);for(let wt of S.layerUpdates){let Jt=Ct.data.subarray(wt*Tt/Ct.data.BYTES_PER_ELEMENT,(wt+1)*Tt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,wt,Ct.width,Ct.height,1,At,Jt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Ct.width,Ct.height,at.depth,At,Ct.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,Vt,Ct.width,Ct.height,at.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Ct.width,Ct.height,at.depth,At,Ht,Ct.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,Vt,Ct.width,Ct.height,at.depth,0,At,Ht,Ct.data)}else{qt&&de&&e.texStorage2D(s.TEXTURE_2D,ut,Vt,se[0].width,se[0].height);for(let K=0,et=se.length;K<et;K++)Ct=se[K],S.format!==On?At!==null?qt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,Ct.width,Ct.height,At,Ct.data):e.compressedTexImage2D(s.TEXTURE_2D,K,Vt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?N&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,Ct.width,Ct.height,At,Ht,Ct.data):e.texImage2D(s.TEXTURE_2D,K,Vt,Ct.width,Ct.height,0,At,Ht,Ct.data)}else if(S.isDataArrayTexture)if(qt){if(de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,Vt,at.width,at.height,at.depth),N)if(S.layerUpdates.size>0){let K=Ed(at.width,at.height,S.format,S.type);for(let et of S.layerUpdates){let Tt=at.data.subarray(et*K/at.data.BYTES_PER_ELEMENT,(et+1)*K/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,at.width,at.height,1,At,Ht,Tt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,At,Ht,at.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Vt,at.width,at.height,at.depth,0,At,Ht,at.data);else if(S.isData3DTexture)qt?(de&&e.texStorage3D(s.TEXTURE_3D,ut,Vt,at.width,at.height,at.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,At,Ht,at.data)):e.texImage3D(s.TEXTURE_3D,0,Vt,at.width,at.height,at.depth,0,At,Ht,at.data);else if(S.isFramebufferTexture){if(de)if(qt)e.texStorage2D(s.TEXTURE_2D,ut,Vt,at.width,at.height);else{let K=at.width,et=at.height;for(let Tt=0;Tt<ut;Tt++)e.texImage2D(s.TEXTURE_2D,Tt,Vt,K,et,0,At,Ht,null),K>>=1,et>>=1}}else if(se.length>0){if(qt&&de){let K=St(se[0]);e.texStorage2D(s.TEXTURE_2D,ut,Vt,K.width,K.height)}for(let K=0,et=se.length;K<et;K++)Ct=se[K],qt?N&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,At,Ht,Ct):e.texImage2D(s.TEXTURE_2D,K,Vt,At,Ht,Ct);S.generateMipmaps=!1}else if(qt){if(de){let K=St(at);e.texStorage2D(s.TEXTURE_2D,ut,Vt,K.width,K.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,At,Ht,at)}else e.texImage2D(s.TEXTURE_2D,0,Vt,At,Ht,at);p(S)&&m(Q),Pt.__version=tt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function ot(I,S,V){if(S.image.length!==6)return;let Q=$t(I,S),it=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+V);let tt=n.get(it);if(it.version!==tt.__version||Q===!0){e.activeTexture(s.TEXTURE0+V);let Pt=oe.getPrimaries(oe.workingColorSpace),yt=S.colorSpace===Hi?null:oe.getPrimaries(S.colorSpace),Mt=S.colorSpace===Hi||Pt===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let ee=S.isCompressedTexture||S.image[0].isCompressedTexture,at=S.image[0]&&S.image[0].isDataTexture,At=[];for(let et=0;et<6;et++)!ee&&!at?At[et]=x(S.image[et],!0,i.maxCubemapSize):At[et]=at?S.image[et].image:S.image[et],At[et]=zt(S,At[et]);let Ht=At[0],Vt=r.convert(S.format,S.colorSpace),Ct=r.convert(S.type),se=y(S.internalFormat,Vt,Ct,S.colorSpace),qt=S.isVideoTexture!==!0,de=tt.__version===void 0||Q===!0,N=it.dataReady,ut=C(S,Ht);Ot(s.TEXTURE_CUBE_MAP,S);let K;if(ee){qt&&de&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,se,Ht.width,Ht.height);for(let et=0;et<6;et++){K=At[et].mipmaps;for(let Tt=0;Tt<K.length;Tt++){let wt=K[Tt];S.format!==On?Vt!==null?qt?N&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,0,0,wt.width,wt.height,Vt,wt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,se,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,0,0,wt.width,wt.height,Vt,Ct,wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,se,wt.width,wt.height,0,Vt,Ct,wt.data)}}}else{if(K=S.mipmaps,qt&&de){K.length>0&&ut++;let et=St(At[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,se,et.width,et.height)}for(let et=0;et<6;et++)if(at){qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,At[et].width,At[et].height,Vt,Ct,At[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,se,At[et].width,At[et].height,0,Vt,Ct,At[et].data);for(let Tt=0;Tt<K.length;Tt++){let Jt=K[Tt].image[et].image;qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,0,0,Jt.width,Jt.height,Vt,Ct,Jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,se,Jt.width,Jt.height,0,Vt,Ct,Jt.data)}}else{qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Vt,Ct,At[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,se,Vt,Ct,At[et]);for(let Tt=0;Tt<K.length;Tt++){let wt=K[Tt];qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,0,0,Vt,Ct,wt.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,se,Vt,Ct,wt.image[et])}}}p(S)&&m(s.TEXTURE_CUBE_MAP),tt.__version=it.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Rt(I,S,V,Q,it,tt){let Pt=r.convert(V.format,V.colorSpace),yt=r.convert(V.type),Mt=y(V.internalFormat,Pt,yt,V.colorSpace),ee=n.get(S),at=n.get(V);if(at.__renderTarget=S,!ee.__hasExternalTextures){let At=Math.max(1,S.width>>tt),Ht=Math.max(1,S.height>>tt);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,tt,Mt,At,Ht,S.depth,0,Pt,yt,null):e.texImage2D(it,tt,Mt,At,Ht,0,Pt,yt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),ht(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,it,at.__webglTexture,0,st(S)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,it,at.__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(I,S,V){if(s.bindRenderbuffer(s.RENDERBUFFER,I),S.depthBuffer){let Q=S.depthTexture,it=Q&&Q.isDepthTexture?Q.type:null,tt=_(S.stencilBuffer,it),Pt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=st(S);ht(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt,tt,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,tt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,tt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pt,s.RENDERBUFFER,I)}else{let Q=S.textures;for(let it=0;it<Q.length;it++){let tt=Q[it],Pt=r.convert(tt.format,tt.colorSpace),yt=r.convert(tt.type),Mt=y(tt.internalFormat,Pt,yt,tt.colorSpace),ee=st(S);V&&ht(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,Mt,S.width,S.height):ht(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,Mt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Mt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function k(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);let it=Q.__webglTexture,tt=st(S);if(S.depthTexture.format===Js)ht(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0);else if(S.depthTexture.format===ir)ht(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function W(I){let S=n.get(I),V=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let Q=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){let it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",it)};Q.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=Q}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");k(S.__webglFramebuffer,I)}else if(V){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=s.createRenderbuffer(),ct(S.__webglDepthbuffer[Q],I,!1);else{let it=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ct(S.__webglDepthbuffer,I,!1);else{let Q=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,it),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,it)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function O(I,S,V){let Q=n.get(I);S!==void 0&&Rt(Q.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&W(I)}function lt(I){let S=I.texture,V=n.get(I),Q=n.get(S);I.addEventListener("dispose",R);let it=I.textures,tt=I.isWebGLCubeRenderTarget===!0,Pt=it.length>1;if(Pt||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=S.version,a.memory.textures++),tt){V.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[yt]=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)V.__webglFramebuffer[yt][Mt]=s.createFramebuffer()}else V.__webglFramebuffer[yt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let yt=0;yt<S.mipmaps.length;yt++)V.__webglFramebuffer[yt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Pt)for(let yt=0,Mt=it.length;yt<Mt;yt++){let ee=n.get(it[yt]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),a.memory.textures++)}if(I.samples>0&&ht(I)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let yt=0;yt<it.length;yt++){let Mt=it[yt];V.__webglColorRenderbuffer[yt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[yt]);let ee=r.convert(Mt.format,Mt.colorSpace),at=r.convert(Mt.type),At=y(Mt.internalFormat,ee,at,Mt.colorSpace,I.isXRRenderTarget===!0),Ht=st(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,At,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,V.__webglColorRenderbuffer[yt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),ct(V.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Ot(s.TEXTURE_CUBE_MAP,S);for(let yt=0;yt<6;yt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)Rt(V.__webglFramebuffer[yt][Mt],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Mt);else Rt(V.__webglFramebuffer[yt],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);p(S)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let yt=0,Mt=it.length;yt<Mt;yt++){let ee=it[yt],at=n.get(ee);e.bindTexture(s.TEXTURE_2D,at.__webglTexture),Ot(s.TEXTURE_2D,ee),Rt(V.__webglFramebuffer,I,ee,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,0),p(ee)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let yt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(yt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(yt,Q.__webglTexture),Ot(yt,S),S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)Rt(V.__webglFramebuffer[Mt],I,S,s.COLOR_ATTACHMENT0,yt,Mt);else Rt(V.__webglFramebuffer,I,S,s.COLOR_ATTACHMENT0,yt,0);p(S)&&m(yt),e.unbindTexture()}I.depthBuffer&&W(I)}function X(I){let S=I.textures;for(let V=0,Q=S.length;V<Q;V++){let it=S[V];if(p(it)){let tt=v(I),Pt=n.get(it).__webglTexture;e.bindTexture(tt,Pt),m(tt),e.unbindTexture()}}}let nt=[],D=[];function mt(I){if(I.samples>0){if(ht(I)===!1){let S=I.textures,V=I.width,Q=I.height,it=s.COLOR_BUFFER_BIT,tt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pt=n.get(I),yt=S.length>1;if(yt)for(let Mt=0;Mt<S.length;Mt++)e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Mt=0;Mt<S.length;Mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),yt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[Mt]);let ee=n.get(S[Mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,V,Q,0,0,V,Q,it,s.NEAREST),l===!0&&(nt.length=0,D.length=0,nt.push(s.COLOR_ATTACHMENT0+Mt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(nt.push(tt),D.push(tt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),yt)for(let Mt=0;Mt<S.length;Mt++){e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[Mt]);let ee=n.get(S[Mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,ee,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let S=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function st(I){return Math.min(i.maxSamples,I.samples)}function ht(I){let S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ft(I){let S=a.render.frame;c.get(I)!==S&&(c.set(I,S),I.update())}function zt(I,S){let V=I.colorSpace,Q=I.format,it=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==fr&&V!==Hi&&(oe.getTransfer(V)===me?(Q!==On||it!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function St(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=O,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=ht}function Lv(s,t){function e(n,i=Hi){let r,a=oe.getTransfer(i);if(n===Si)return s.UNSIGNED_BYTE;if(n===Uh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Nh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Xd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Gd)return s.BYTE;if(n===Wd)return s.SHORT;if(n===Fr)return s.UNSIGNED_SHORT;if(n===Dh)return s.INT;if(n===ps)return s.UNSIGNED_INT;if(n===ei)return s.FLOAT;if(n===Gn)return s.HALF_FLOAT;if(n===qd)return s.ALPHA;if(n===Yd)return s.RGB;if(n===On)return s.RGBA;if(n===$d)return s.LUMINANCE;if(n===Zd)return s.LUMINANCE_ALPHA;if(n===Js)return s.DEPTH_COMPONENT;if(n===ir)return s.DEPTH_STENCIL;if(n===kh)return s.RED;if(n===Fh)return s.RED_INTEGER;if(n===Jd)return s.RG;if(n===zh)return s.RG_INTEGER;if(n===Bh)return s.RGBA_INTEGER;if(n===Ba||n===Oa||n===Ha||n===Va)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mc||n===gc||n===xc||n===vc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yc||n===_c||n===Mc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yc||n===_c)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bc||n===Sc||n===wc||n===Ec||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Uc||n===Nc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ec)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ac)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ic)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===kc||n===Fc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ga)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kd||n===zc||n===Bc||n===Oc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var nh=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ne=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dv={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),m=this._getHandJoint(h,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let c=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],d=c.position.distanceTo(f.position),u=.02,g=.005;h.inputState.pinching&&d>u+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=u-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Uv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nv=`
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

}`,ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new gn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Re({vertexShader:Uv,fragmentShader:Nv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new Me(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sh=class extends qi{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,f=null,d=null,u=null,g=null,x=new ih,p=e.getContextAttributes(),m=null,v=null,y=[],_=[],C=new Z,w=null,R=new Qe;R.viewport=new ye;let P=new Qe;P.viewport=new ye;let b=[R,P],M=new nh,T=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ot=y[J];return ot===void 0&&(ot=new Ur,y[J]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(J){let ot=y[J];return ot===void 0&&(ot=new Ur,y[J]=ot),ot.getGripSpace()},this.getHand=function(J){let ot=y[J];return ot===void 0&&(ot=new Ur,y[J]=ot),ot.getHandSpace()};function U(J){let ot=_.indexOf(J.inputSource);if(ot===-1)return;let Rt=y[ot];Rt!==void 0&&(Rt.update(J.inputSource,J.frame,h||a),Rt.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",q);for(let J=0;J<y.length;J++){let ot=_[J];ot!==null&&(_[J]=null,y[J].disconnect(ot))}T=null,L=null,x.reset(),t.setRenderTarget(m),u=null,d=null,f=null,i=null,v=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",B),i.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){let ot={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,ot),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new cn(u.framebufferWidth,u.framebufferHeight,{format:On,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ot=null,Rt=null,ct=null;p.depth&&(ct=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=p.stencil?ir:Js,Rt=p.stencil?nr:ps);let k={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};f=new XRWebGLBinding(i,e),d=f.createProjectionLayer(k),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new cn(d.textureWidth,d.textureHeight,{format:On,type:Si,depthTexture:new no(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await i.requestReferenceSpace(o),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(J){for(let ot=0;ot<J.removed.length;ot++){let Rt=J.removed[ot],ct=_.indexOf(Rt);ct>=0&&(_[ct]=null,y[ct].disconnect(Rt))}for(let ot=0;ot<J.added.length;ot++){let Rt=J.added[ot],ct=_.indexOf(Rt);if(ct===-1){for(let W=0;W<y.length;W++)if(W>=_.length){_.push(Rt),ct=W;break}else if(_[W]===null){_[W]=Rt,ct=W;break}if(ct===-1)break}let k=y[ct];k&&k.connect(Rt)}}let H=new A,j=new A;function G(J,ot,Rt){H.setFromMatrixPosition(ot.matrixWorld),j.setFromMatrixPosition(Rt.matrixWorld);let ct=H.distanceTo(j),k=ot.projectionMatrix.elements,W=Rt.projectionMatrix.elements,O=k[14]/(k[10]-1),lt=k[14]/(k[10]+1),X=(k[9]+1)/k[5],nt=(k[9]-1)/k[5],D=(k[8]-1)/k[0],mt=(W[8]+1)/W[0],st=O*D,ht=O*mt,ft=ct/(-D+mt),zt=ft*-D;if(ot.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(zt),J.translateZ(ft),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),k[10]===-1)J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let St=O+ft,I=lt+ft,S=st-zt,V=ht+(ct-zt),Q=X*lt/I*St,it=nt*lt/I*St;J.projectionMatrix.makePerspective(S,V,Q,it,St,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function rt(J,ot){ot===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ot.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ot=J.near,Rt=J.far;x.texture!==null&&(x.depthNear>0&&(ot=x.depthNear),x.depthFar>0&&(Rt=x.depthFar)),M.near=P.near=R.near=ot,M.far=P.far=R.far=Rt,(T!==M.near||L!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,L=M.far),R.layers.mask=J.layers.mask|2,P.layers.mask=J.layers.mask|4,M.layers.mask=R.layers.mask|P.layers.mask;let ct=J.parent,k=M.cameras;rt(M,ct);for(let W=0;W<k.length;W++)rt(k[W],ct);k.length===2?G(M,R,P):M.projectionMatrix.copy(R.projectionMatrix),pt(J,M,ct)};function pt(J,ot,Rt){Rt===null?J.matrix.copy(ot.matrixWorld):(J.matrix.copy(Rt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ot.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=qa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let vt=null;function Ot(J,ot){if(c=ot.getViewerPose(h||a),g=ot,c!==null){let Rt=c.views;u!==null&&(t.setRenderTargetFramebuffer(v,u.framebuffer),t.setRenderTarget(v));let ct=!1;Rt.length!==M.cameras.length&&(M.cameras.length=0,ct=!0);for(let W=0;W<Rt.length;W++){let O=Rt[W],lt=null;if(u!==null)lt=u.getViewport(O);else{let nt=f.getViewSubImage(d,O);lt=nt.viewport,W===0&&(t.setRenderTargetTextures(v,nt.colorTexture,d.ignoreDepthValues?void 0:nt.depthStencilTexture),t.setRenderTarget(v))}let X=b[W];X===void 0&&(X=new Qe,X.layers.enable(W),X.viewport=new ye,b[W]=X),X.matrix.fromArray(O.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(O.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(lt.x,lt.y,lt.width,lt.height),W===0&&(M.matrix.copy(X.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ct===!0&&M.cameras.push(X)}let k=i.enabledFeatures;if(k&&k.includes("depth-sensing")){let W=f.getDepthInformation(Rt[0]);W&&W.isValid&&W.texture&&x.init(t,W,i.renderState)}}for(let Rt=0;Rt<y.length;Rt++){let ct=_[Rt],k=y[Rt];ct!==null&&k!==void 0&&k.update(ct,ot,h||a)}vt&&vt(J,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}let $t=new sf;$t.setAnimationLoop(Ot),this.setAnimationLoop=function(J){vt=J},this.dispose=function(){}}},os=new Je,kv=new te;function Fv(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,nf(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,y,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),c(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&u(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,y):m.isSpriteMaterial?h(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===je&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===je&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=t.get(m),y=v.envMap,_=v.envMapRotation;y&&(p.envMap.value=y,os.copy(_),os.x*=-1,os.y*=-1,os.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),p.envMapRotation.value.setFromMatrix4(kv.makeRotationFromEuler(os)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===je&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zv(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let _=y.program;n.uniformBlockBinding(v,_)}function h(v,y){let _=i[v.id];_===void 0&&(g(v),_=c(v),i[v.id]=_,v.addEventListener("dispose",p));let C=y.program;n.updateUBOMapping(v,C);let w=t.render.frame;r[v.id]!==w&&(d(v),r[v.id]=w)}function c(v){let y=f();v.__bindingPointIndex=y;let _=s.createBuffer(),C=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,C,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,_),_}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=i[v.id],_=v.uniforms,C=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,R=_.length;w<R;w++){let P=Array.isArray(_[w])?_[w]:[_[w]];for(let b=0,M=P.length;b<M;b++){let T=P[b];if(u(T,w,b,C)===!0){let L=T.__offset,U=Array.isArray(T.value)?T.value:[T.value],B=0;for(let q=0;q<U.length;q++){let H=U[q],j=x(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,L+B,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,B),B+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(v,y,_,C){let w=v.value,R=y+"_"+_;if(C[R]===void 0)return typeof w=="number"||typeof w=="boolean"?C[R]=w:C[R]=w.clone(),!0;{let P=C[R];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return C[R]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(v){let y=v.uniforms,_=0,C=16;for(let R=0,P=y.length;R<P;R++){let b=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,T=b.length;M<T;M++){let L=b[M],U=Array.isArray(L.value)?L.value:[L.value];for(let B=0,q=U.length;B<q;B++){let H=U[B],j=x(H),G=_%C,rt=G%j.boundary,pt=G+rt;_+=rt,pt!==0&&C-pt<j.storage&&(_+=C-pt),L.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=j.storage}}}let w=_%C;return w>0&&(_+=C-w),v.__size=_,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function p(v){let y=v.target;y.removeEventListener("dispose",p);let _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function m(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:h,dispose:m}}var io=class{constructor(t={}){let{canvas:e=Gp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;let g=new Uint32Array(4),x=new Int32Array(4),p=null,m=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=Gi,this.toneMappingExposure=1;let _=this,C=!1,w=0,R=0,P=null,b=-1,M=null,T=new ye,L=new ye,U=null,B=new bt(0),q=0,H=e.width,j=e.height,G=1,rt=null,pt=null,vt=new ye(0,0,H,j),Ot=new ye(0,0,H,j),$t=!1,J=new zr,ot=!1,Rt=!1,ct=new te,k=new te,W=new A,O=new ye,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},X=!1;function nt(){return P===null?G:1}let D=n;function mt(E,F){return e.getContext(E,F)}try{let E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),D===null){let F="webgl2";if(D=mt(F,E),D===null)throw mt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let st,ht,ft,zt,St,I,S,V,Q,it,tt,Pt,yt,Mt,ee,at,At,Ht,Vt,Ct,se,qt,de,N;function ut(){st=new tx(D),st.init(),qt=new Lv(D,st),ht=new $g(D,st,t,qt),ft=new Cv(D,st),ht.reverseDepthBuffer&&d&&ft.buffers.depth.setReversed(!0),zt=new ix(D),St=new gv,I=new Iv(D,st,ft,St,ht,qt,zt),S=new Jg(_),V=new jg(_),Q=new h0(D),de=new qg(D,Q),it=new ex(D,Q,zt,de),tt=new rx(D,it,Q,zt),Vt=new sx(D,ht,I),at=new Zg(St),Pt=new mv(_,S,V,st,ht,de,at),yt=new Fv(_,St),Mt=new vv,ee=new wv(st),Ht=new Xg(_,S,V,ft,tt,u,l),At=new Av(_,tt,ht),N=new zv(D,zt,ht,ft),Ct=new Yg(D,st,zt),se=new nx(D,st,zt),zt.programs=Pt.programs,_.capabilities=ht,_.extensions=st,_.properties=St,_.renderLists=Mt,_.shadowMap=At,_.state=ft,_.info=zt}ut();let K=new sh(_,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=st.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=st.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(H,j,!1))},this.getSize=function(E){return E.set(H,j)},this.setSize=function(E,F,Y=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,j=F,e.width=Math.floor(E*G),e.height=Math.floor(F*G),Y===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(H*G,j*G).floor()},this.setDrawingBufferSize=function(E,F,Y){H=E,j=F,G=Y,e.width=Math.floor(E*Y),e.height=Math.floor(F*Y),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(vt)},this.setViewport=function(E,F,Y,$){E.isVector4?vt.set(E.x,E.y,E.z,E.w):vt.set(E,F,Y,$),ft.viewport(T.copy(vt).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Ot)},this.setScissor=function(E,F,Y,$){E.isVector4?Ot.set(E.x,E.y,E.z,E.w):Ot.set(E,F,Y,$),ft.scissor(L.copy(Ot).multiplyScalar(G).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(E){ft.setScissorTest($t=E)},this.setOpaqueSort=function(E){rt=E},this.setTransparentSort=function(E){pt=E},this.getClearColor=function(E){return E.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(E=!0,F=!0,Y=!0){let $=0;if(E){let z=!1;if(P!==null){let dt=P.texture.format;z=dt===Bh||dt===zh||dt===Fh}if(z){let dt=P.texture.type,Et=dt===Si||dt===ps||dt===Fr||dt===nr||dt===Uh||dt===Nh,Ut=Ht.getClearColor(),Nt=Ht.getClearAlpha(),Yt=Ut.r,Kt=Ut.g,kt=Ut.b;Et?(g[0]=Yt,g[1]=Kt,g[2]=kt,g[3]=Nt,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Yt,x[1]=Kt,x[2]=kt,x[3]=Nt,D.clearBufferiv(D.COLOR,0,x))}else $|=D.COLOR_BUFFER_BIT}F&&($|=D.DEPTH_BUFFER_BIT),Y&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Mt.dispose(),ee.dispose(),St.dispose(),S.dispose(),V.dispose(),tt.dispose(),de.dispose(),N.dispose(),Pt.dispose(),K.dispose(),K.removeEventListener("sessionstart",_u),K.removeEventListener("sessionend",Mu),es.stop()};function et(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let E=zt.autoReset,F=At.enabled,Y=At.autoUpdate,$=At.needsUpdate,z=At.type;ut(),zt.autoReset=E,At.enabled=F,At.autoUpdate=Y,At.needsUpdate=$,At.type=z}function wt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Jt(E){let F=E.target;F.removeEventListener("dispose",Jt),Ue(F)}function Ue(E){tn(E),St.remove(E)}function tn(E){let F=St.get(E).programs;F!==void 0&&(F.forEach(function(Y){Pt.releaseProgram(Y)}),E.isShaderMaterial&&Pt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,Y,$,z,dt){F===null&&(F=lt);let Et=z.isMesh&&z.matrixWorld.determinant()<0,Ut=rp(E,F,Y,$,z);ft.setMaterial($,Et);let Nt=Y.index,Yt=1;if($.wireframe===!0){if(Nt=it.getWireframeAttribute(Y),Nt===void 0)return;Yt=2}let Kt=Y.drawRange,kt=Y.attributes.position,he=Kt.start*Yt,Se=(Kt.start+Kt.count)*Yt;dt!==null&&(he=Math.max(he,dt.start*Yt),Se=Math.min(Se,(dt.start+dt.count)*Yt)),Nt!==null?(he=Math.max(he,0),Se=Math.min(Se,Nt.count)):kt!=null&&(he=Math.max(he,0),Se=Math.min(Se,kt.count));let Te=Se-he;if(Te<0||Te===1/0)return;de.setup(z,$,Ut,Y,Nt);let mn,fe=Ct;if(Nt!==null&&(mn=Q.get(Nt),fe=se,fe.setIndex(mn)),z.isMesh)$.wireframe===!0?(ft.setLineWidth($.wireframeLinewidth*nt()),fe.setMode(D.LINES)):fe.setMode(D.TRIANGLES);else if(z.isLine){let Ft=$.linewidth;Ft===void 0&&(Ft=1),ft.setLineWidth(Ft*nt()),z.isLineSegments?fe.setMode(D.LINES):z.isLineLoop?fe.setMode(D.LINE_LOOP):fe.setMode(D.LINE_STRIP)}else z.isPoints?fe.setMode(D.POINTS):z.isSprite&&fe.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)fe.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))fe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ft=z._multiDrawStarts,di=z._multiDrawCounts,pe=z._multiDrawCount,kn=Nt?Q.get(Nt).bytesPerElement:1,Rs=St.get($).currentProgram.getUniforms();for(let _n=0;_n<pe;_n++)Rs.setValue(D,"_gl_DrawID",_n),fe.render(Ft[_n]/kn,di[_n])}else if(z.isInstancedMesh)fe.renderInstances(he,Te,z.count);else if(Y.isInstancedBufferGeometry){let Ft=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,di=Math.min(Y.instanceCount,Ft);fe.renderInstances(he,Te,di)}else fe.render(he,Te)};function xe(E,F,Y){E.transparent===!0&&E.side===_e&&E.forceSinglePass===!1?(E.side=je,E.needsUpdate=!0,oa(E,F,Y),E.side=Xi,E.needsUpdate=!0,oa(E,F,Y),E.side=_e):oa(E,F,Y)}this.compile=function(E,F,Y=null){Y===null&&(Y=E),m=ee.get(Y),m.init(F),y.push(m),Y.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),E!==Y&&E.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();let $=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let dt=z.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){let Ut=dt[Et];xe(Ut,Y,z),$.add(Ut)}else xe(dt,Y,z),$.add(dt)}),y.pop(),m=null,$},this.compileAsync=function(E,F,Y=null){let $=this.compile(E,F,Y);return new Promise(z=>{function dt(){if($.forEach(function(Et){St.get(Et).currentProgram.isReady()&&$.delete(Et)}),$.size===0){z(E);return}setTimeout(dt,10)}st.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Nn=null;function ui(E){Nn&&Nn(E)}function _u(){es.stop()}function Mu(){es.start()}let es=new sf;es.setAnimationLoop(ui),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(E){Nn=E,K.setAnimationLoop(E),E===null?es.stop():es.start()},K.addEventListener("sessionstart",_u),K.addEventListener("sessionend",Mu),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(F),F=K.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,F,P),m=ee.get(E,y.length),m.init(F),y.push(m),k.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),J.setFromProjectionMatrix(k),Rt=this.localClippingEnabled,ot=at.init(this.clippingPlanes,Rt),p=Mt.get(E,v.length),p.init(),v.push(p),K.enabled===!0&&K.isPresenting===!0){let dt=_.xr.getDepthSensingMesh();dt!==null&&_l(dt,F,-1/0,_.sortObjects)}_l(E,F,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(rt,pt),X=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,X&&Ht.addToRenderList(p,E),this.info.render.frame++,ot===!0&&at.beginShadows();let Y=m.state.shadowsArray;At.render(Y,E,F),ot===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=p.opaque,z=p.transmissive;if(m.setupLights(),F.isArrayCamera){let dt=F.cameras;if(z.length>0)for(let Et=0,Ut=dt.length;Et<Ut;Et++){let Nt=dt[Et];Su($,z,E,Nt)}X&&Ht.render(E);for(let Et=0,Ut=dt.length;Et<Ut;Et++){let Nt=dt[Et];bu(p,E,Nt,Nt.viewport)}}else z.length>0&&Su($,z,E,F),X&&Ht.render(E),bu(p,E,F);P!==null&&(I.updateMultisampleRenderTarget(P),I.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(_,E,F),de.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],ot===!0&&at.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function _l(E,F,Y,$){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||J.intersectsSprite(E)){$&&O.setFromMatrixPosition(E.matrixWorld).applyMatrix4(k);let Et=tt.update(E),Ut=E.material;Ut.visible&&p.push(E,Et,Ut,Y,O.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||J.intersectsObject(E))){let Et=tt.update(E),Ut=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),O.copy(E.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),O.copy(Et.boundingSphere.center)),O.applyMatrix4(E.matrixWorld).applyMatrix4(k)),Array.isArray(Ut)){let Nt=Et.groups;for(let Yt=0,Kt=Nt.length;Yt<Kt;Yt++){let kt=Nt[Yt],he=Ut[kt.materialIndex];he&&he.visible&&p.push(E,Et,he,Y,O.z,kt)}}else Ut.visible&&p.push(E,Et,Ut,Y,O.z,null)}}let dt=E.children;for(let Et=0,Ut=dt.length;Et<Ut;Et++)_l(dt[Et],F,Y,$)}function bu(E,F,Y,$){let z=E.opaque,dt=E.transmissive,Et=E.transparent;m.setupLightsView(Y),ot===!0&&at.setGlobalState(_.clippingPlanes,Y),$&&ft.viewport(T.copy($)),z.length>0&&aa(z,F,Y),dt.length>0&&aa(dt,F,Y),Et.length>0&&aa(Et,F,Y),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Su(E,F,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new cn(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Gn:Si,minFilter:ds,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let dt=m.state.transmissionRenderTarget[$.id],Et=$.viewport||T;dt.setSize(Et.z,Et.w);let Ut=_.getRenderTarget();_.setRenderTarget(dt),_.getClearColor(B),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),X&&Ht.render(Y);let Nt=_.toneMapping;_.toneMapping=Gi;let Yt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),ot===!0&&at.setGlobalState(_.clippingPlanes,$),aa(E,Y,$),I.updateMultisampleRenderTarget(dt),I.updateRenderTargetMipmap(dt),st.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let kt=0,he=F.length;kt<he;kt++){let Se=F[kt],Te=Se.object,mn=Se.geometry,fe=Se.material,Ft=Se.group;if(fe.side===_e&&Te.layers.test($.layers)){let di=fe.side;fe.side=je,fe.needsUpdate=!0,wu(Te,Y,$,mn,fe,Ft),fe.side=di,fe.needsUpdate=!0,Kt=!0}}Kt===!0&&(I.updateMultisampleRenderTarget(dt),I.updateRenderTargetMipmap(dt))}_.setRenderTarget(Ut),_.setClearColor(B,q),Yt!==void 0&&($.viewport=Yt),_.toneMapping=Nt}function aa(E,F,Y){let $=F.isScene===!0?F.overrideMaterial:null;for(let z=0,dt=E.length;z<dt;z++){let Et=E[z],Ut=Et.object,Nt=Et.geometry,Yt=$===null?Et.material:$,Kt=Et.group;Ut.layers.test(Y.layers)&&wu(Ut,F,Y,Nt,Yt,Kt)}}function wu(E,F,Y,$,z,dt){E.onBeforeRender(_,F,Y,$,z,dt),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(_,F,Y,$,E,dt),z.transparent===!0&&z.side===_e&&z.forceSinglePass===!1?(z.side=je,z.needsUpdate=!0,_.renderBufferDirect(Y,F,$,z,E,dt),z.side=Xi,z.needsUpdate=!0,_.renderBufferDirect(Y,F,$,z,E,dt),z.side=_e):_.renderBufferDirect(Y,F,$,z,E,dt),E.onAfterRender(_,F,Y,$,z,dt)}function oa(E,F,Y){F.isScene!==!0&&(F=lt);let $=St.get(E),z=m.state.lights,dt=m.state.shadowsArray,Et=z.state.version,Ut=Pt.getParameters(E,z.state,dt,F,Y),Nt=Pt.getProgramCacheKey(Ut),Yt=$.programs;$.environment=E.isMeshStandardMaterial?F.environment:null,$.fog=F.fog,$.envMap=(E.isMeshStandardMaterial?V:S).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Yt===void 0&&(E.addEventListener("dispose",Jt),Yt=new Map,$.programs=Yt);let Kt=Yt.get(Nt);if(Kt!==void 0){if($.currentProgram===Kt&&$.lightsStateVersion===Et)return Tu(E,Ut),Kt}else Ut.uniforms=Pt.getUniforms(E),E.onBeforeCompile(Ut,_),Kt=Pt.acquireProgram(Ut,Nt),Yt.set(Nt,Kt),$.uniforms=Ut.uniforms;let kt=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(kt.clippingPlanes=at.uniform),Tu(E,Ut),$.needsLights=op(E),$.lightsStateVersion=Et,$.needsLights&&(kt.ambientLightColor.value=z.state.ambient,kt.lightProbe.value=z.state.probe,kt.directionalLights.value=z.state.directional,kt.directionalLightShadows.value=z.state.directionalShadow,kt.spotLights.value=z.state.spot,kt.spotLightShadows.value=z.state.spotShadow,kt.rectAreaLights.value=z.state.rectArea,kt.ltc_1.value=z.state.rectAreaLTC1,kt.ltc_2.value=z.state.rectAreaLTC2,kt.pointLights.value=z.state.point,kt.pointLightShadows.value=z.state.pointShadow,kt.hemisphereLights.value=z.state.hemi,kt.directionalShadowMap.value=z.state.directionalShadowMap,kt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,kt.spotShadowMap.value=z.state.spotShadowMap,kt.spotLightMatrix.value=z.state.spotLightMatrix,kt.spotLightMap.value=z.state.spotLightMap,kt.pointShadowMap.value=z.state.pointShadowMap,kt.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=Kt,$.uniformsList=null,Kt}function Eu(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Qs.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Tu(E,F){let Y=St.get(E);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function rp(E,F,Y,$,z){F.isScene!==!0&&(F=lt),I.resetTextureUnits();let dt=F.fog,Et=$.isMeshStandardMaterial?F.environment:null,Ut=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:fr,Nt=($.isMeshStandardMaterial?V:S).get($.envMap||Et),Yt=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Kt=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),kt=!!Y.morphAttributes.position,he=!!Y.morphAttributes.normal,Se=!!Y.morphAttributes.color,Te=Gi;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Te=_.toneMapping);let mn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,fe=mn!==void 0?mn.length:0,Ft=St.get($),di=m.state.lights;if(ot===!0&&(Rt===!0||E!==M)){let Cn=E===M&&$.id===b;at.setState($,E,Cn)}let pe=!1;$.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==di.state.version||Ft.outputColorSpace!==Ut||z.isBatchedMesh&&Ft.batching===!1||!z.isBatchedMesh&&Ft.batching===!0||z.isBatchedMesh&&Ft.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ft.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ft.instancing===!1||!z.isInstancedMesh&&Ft.instancing===!0||z.isSkinnedMesh&&Ft.skinning===!1||!z.isSkinnedMesh&&Ft.skinning===!0||z.isInstancedMesh&&Ft.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ft.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ft.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ft.instancingMorph===!1&&z.morphTexture!==null||Ft.envMap!==Nt||$.fog===!0&&Ft.fog!==dt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==at.numPlanes||Ft.numIntersection!==at.numIntersection)||Ft.vertexAlphas!==Yt||Ft.vertexTangents!==Kt||Ft.morphTargets!==kt||Ft.morphNormals!==he||Ft.morphColors!==Se||Ft.toneMapping!==Te||Ft.morphTargetsCount!==fe)&&(pe=!0):(pe=!0,Ft.__version=$.version);let kn=Ft.currentProgram;pe===!0&&(kn=oa($,F,z));let Rs=!1,_n=!1,_r=!1,Ae=kn.getUniforms(),Kn=Ft.uniforms;if(ft.useProgram(kn.program)&&(Rs=!0,_n=!0,_r=!0),$.id!==b&&(b=$.id,_n=!0),Rs||M!==E){ft.buffers.depth.getReversed()?(ct.copy(E.projectionMatrix),Xp(ct),qp(ct),Ae.setValue(D,"projectionMatrix",ct)):Ae.setValue(D,"projectionMatrix",E.projectionMatrix),Ae.setValue(D,"viewMatrix",E.matrixWorldInverse);let Di=Ae.map.cameraPosition;Di!==void 0&&Di.setValue(D,W.setFromMatrixPosition(E.matrixWorld)),ht.logarithmicDepthBuffer&&Ae.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ae.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,_n=!0,_r=!0)}if(z.isSkinnedMesh){Ae.setOptional(D,z,"bindMatrix"),Ae.setOptional(D,z,"bindMatrixInverse");let Cn=z.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Ae.setValue(D,"boneTexture",Cn.boneTexture,I))}z.isBatchedMesh&&(Ae.setOptional(D,z,"batchingTexture"),Ae.setValue(D,"batchingTexture",z._matricesTexture,I),Ae.setOptional(D,z,"batchingIdTexture"),Ae.setValue(D,"batchingIdTexture",z._indirectTexture,I),Ae.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Ae.setValue(D,"batchingColorTexture",z._colorsTexture,I));let Mr=Y.morphAttributes;if((Mr.position!==void 0||Mr.normal!==void 0||Mr.color!==void 0)&&Vt.update(z,Y,kn),(_n||Ft.receiveShadow!==z.receiveShadow)&&(Ft.receiveShadow=z.receiveShadow,Ae.setValue(D,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Kn.envMap.value=Nt,Kn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&F.environment!==null&&(Kn.envMapIntensity.value=F.environmentIntensity),_n&&(Ae.setValue(D,"toneMappingExposure",_.toneMappingExposure),Ft.needsLights&&ap(Kn,_r),dt&&$.fog===!0&&yt.refreshFogUniforms(Kn,dt),yt.refreshMaterialUniforms(Kn,$,G,j,m.state.transmissionRenderTarget[E.id]),Qs.upload(D,Eu(Ft),Kn,I)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Qs.upload(D,Eu(Ft),Kn,I),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ae.setValue(D,"center",z.center),Ae.setValue(D,"modelViewMatrix",z.modelViewMatrix),Ae.setValue(D,"normalMatrix",z.normalMatrix),Ae.setValue(D,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Cn=$.uniformsGroups;for(let Di=0,Ui=Cn.length;Di<Ui;Di++){let Au=Cn[Di];N.update(Au,kn),N.bind(Au,kn)}}return kn}function ap(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function op(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,F,Y){St.get(E.texture).__webglTexture=F,St.get(E.depthTexture).__webglTexture=Y;let $=St.get(E);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){let Y=St.get(E);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,Y=0){P=E,w=F,R=Y;let $=!0,z=null,dt=!1,Et=!1;if(E){let Nt=St.get(E);if(Nt.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(Nt.__webglFramebuffer===void 0)I.setupRenderTarget(E);else if(Nt.__hasExternalTextures)I.rebindTextures(E,St.get(E.texture).__webglTexture,St.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let kt=E.depthTexture;if(Nt.__boundDepthTexture!==kt){if(kt!==null&&St.has(kt)&&(E.width!==kt.image.width||E.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(E)}}let Yt=E.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Et=!0);let Kt=St.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Kt[F])?z=Kt[F][Y]:z=Kt[F],dt=!0):E.samples>0&&I.useMultisampledRTT(E)===!1?z=St.get(E).__webglMultisampledFramebuffer:Array.isArray(Kt)?z=Kt[Y]:z=Kt,T.copy(E.viewport),L.copy(E.scissor),U=E.scissorTest}else T.copy(vt).multiplyScalar(G).floor(),L.copy(Ot).multiplyScalar(G).floor(),U=$t;if(ft.bindFramebuffer(D.FRAMEBUFFER,z)&&$&&ft.drawBuffers(E,z),ft.viewport(T),ft.scissor(L),ft.setScissorTest(U),dt){let Nt=St.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Nt.__webglTexture,Y)}else if(Et){let Nt=St.get(E.texture),Yt=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nt.__webglTexture,Y||0,Yt)}b=-1},this.readRenderTargetPixels=function(E,F,Y,$,z,dt,Et){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Ut=Ut[Et]),Ut){ft.bindFramebuffer(D.FRAMEBUFFER,Ut);try{let Nt=E.texture,Yt=Nt.format,Kt=Nt.type;if(!ht.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-$&&Y>=0&&Y<=E.height-z&&D.readPixels(F,Y,$,z,qt.convert(Yt),qt.convert(Kt),dt)}finally{let Nt=P!==null?St.get(P).__webglFramebuffer:null;ft.bindFramebuffer(D.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(E,F,Y,$,z,dt,Et){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Ut=Ut[Et]),Ut){let Nt=E.texture,Yt=Nt.format,Kt=Nt.type;if(!ht.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-$&&Y>=0&&Y<=E.height-z){ft.bindFramebuffer(D.FRAMEBUFFER,Ut);let kt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,kt),D.bufferData(D.PIXEL_PACK_BUFFER,dt.byteLength,D.STREAM_READ),D.readPixels(F,Y,$,z,qt.convert(Yt),qt.convert(Kt),0);let he=P!==null?St.get(P).__webglFramebuffer:null;ft.bindFramebuffer(D.FRAMEBUFFER,he);let Se=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Wp(D,Se,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,kt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,dt),D.deleteBuffer(kt),D.deleteSync(Se),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,Y=0){E.isTexture!==!0&&(Lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);let $=Math.pow(2,-Y),z=Math.floor(E.image.width*$),dt=Math.floor(E.image.height*$),Et=F!==null?F.x:0,Ut=F!==null?F.y:0;I.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,Et,Ut,z,dt),ft.unbindTexture()},this.copyTextureToTexture=function(E,F,Y=null,$=null,z=0){E.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,E=arguments[1],F=arguments[2],z=arguments[3]||0,Y=null);let dt,Et,Ut,Nt,Yt,Kt,kt,he,Se,Te=E.isCompressedTexture?E.mipmaps[z]:E.image;Y!==null?(dt=Y.max.x-Y.min.x,Et=Y.max.y-Y.min.y,Ut=Y.isBox3?Y.max.z-Y.min.z:1,Nt=Y.min.x,Yt=Y.min.y,Kt=Y.isBox3?Y.min.z:0):(dt=Te.width,Et=Te.height,Ut=Te.depth||1,Nt=0,Yt=0,Kt=0),$!==null?(kt=$.x,he=$.y,Se=$.z):(kt=0,he=0,Se=0);let mn=qt.convert(F.format),fe=qt.convert(F.type),Ft;F.isData3DTexture?(I.setTexture3D(F,0),Ft=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(I.setTexture2DArray(F,0),Ft=D.TEXTURE_2D_ARRAY):(I.setTexture2D(F,0),Ft=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let di=D.getParameter(D.UNPACK_ROW_LENGTH),pe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),kn=D.getParameter(D.UNPACK_SKIP_PIXELS),Rs=D.getParameter(D.UNPACK_SKIP_ROWS),_n=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Te.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Te.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Nt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Yt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Kt);let _r=E.isDataArrayTexture||E.isData3DTexture,Ae=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Kn=St.get(E),Mr=St.get(F),Cn=St.get(Kn.__renderTarget),Di=St.get(Mr.__renderTarget);ft.bindFramebuffer(D.READ_FRAMEBUFFER,Cn.__webglFramebuffer),ft.bindFramebuffer(D.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Ui=0;Ui<Ut;Ui++)_r&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(E).__webglTexture,z,Kt+Ui),E.isDepthTexture?(Ae&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(F).__webglTexture,z,Se+Ui),D.blitFramebuffer(Nt,Yt,dt,Et,kt,he,dt,Et,D.DEPTH_BUFFER_BIT,D.NEAREST)):Ae?D.copyTexSubImage3D(Ft,z,kt,he,Se+Ui,Nt,Yt,dt,Et):D.copyTexSubImage2D(Ft,z,kt,he,Se+Ui,Nt,Yt,dt,Et);ft.bindFramebuffer(D.READ_FRAMEBUFFER,null),ft.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ae?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ft,z,kt,he,Se,dt,Et,Ut,mn,fe,Te.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ft,z,kt,he,Se,dt,Et,Ut,mn,Te.data):D.texSubImage3D(Ft,z,kt,he,Se,dt,Et,Ut,mn,fe,Te):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,kt,he,dt,Et,mn,fe,Te.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,kt,he,Te.width,Te.height,mn,Te.data):D.texSubImage2D(D.TEXTURE_2D,z,kt,he,dt,Et,mn,fe,Te);D.pixelStorei(D.UNPACK_ROW_LENGTH,di),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,kn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Rs),D.pixelStorei(D.UNPACK_SKIP_IMAGES,_n),z===0&&F.generateMipmaps&&D.generateMipmap(Ft),ft.unbindTexture()},this.copyTextureToTexture3D=function(E,F,Y=null,$=null,z=0){return E.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,E=arguments[2],F=arguments[3],z=arguments[4]||0),Lr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,Y,$,z)},this.initRenderTarget=function(E){St.get(E).__webglFramebuffer===void 0&&I.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?I.setTextureCube(E,0):E.isData3DTexture?I.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?I.setTexture2DArray(E,0):I.setTexture2D(E,0),ft.unbindTexture()},this.resetState=function(){w=0,R=0,P=null,ft.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}},so=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Br=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Je,this.environmentIntensity=1,this.environmentRotation=new Je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ro=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Vc,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},on=new A,Or=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array),r=ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},si=class extends Ei{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gs,Tr=new A,Ws=new A,Xs=new A,qs=new Z,Ar=new Z,cf=new te,Ca=new A,Rr=new A,Pa=new A,Td=new Z,Kl=new Z,Ad=new Z,Hn=class extends Ge{constructor(t=new si){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ro(e,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new Or(n,3,0,!1)),Gs.setAttribute("uv",new Or(n,2,3,!1))}this.geometry=Gs,this.material=t,this.center=new Z(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),cf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Xs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Ia(Ca.set(-.5,-.5,0),Xs,a,Ws,i,r),Ia(Rr.set(.5,-.5,0),Xs,a,Ws,i,r),Ia(Pa.set(.5,.5,0),Xs,a,Ws,i,r),Td.set(0,0),Kl.set(1,0),Ad.set(1,1);let o=t.ray.intersectTriangle(Ca,Rr,Pa,!1,Tr);if(o===null&&(Ia(Rr.set(-.5,.5,0),Xs,a,Ws,i,r),Kl.set(0,1),o=t.ray.intersectTriangle(Ca,Pa,Rr,!1,Tr),o===null))return;let l=t.ray.origin.distanceTo(Tr);l<t.near||l>t.far||e.push({distance:l,point:Tr.clone(),uv:Vi.getInterpolation(Tr,Ca,Rr,Pa,Td,Kl,Ad,new Z),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ia(s,t,e,n,i,r){qs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ar.x=r*qs.x-i*qs.y,Ar.y=i*qs.x+r*qs.y):Ar.copy(qs),s.copy(t),s.x+=Ar.x,s.y+=Ar.y,s.applyMatrix4(cf)}var rh=class extends gn{constructor(t=null,e=1,n=1,i,r,a,o,l,h=Sn,c=Sn,f,d){super(null,a,o,l,h,c,i,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ms=class extends ie{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ys=new te,Rd=new te,La=[],Cd=new wi,Bv=new te,Cr=new _t,Pr=new Yi,Ti=class extends _t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ms(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Bv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),Cd.copy(t.boundingBox).applyMatrix4(Ys),this.boundingBox.union(Cd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),Pr.copy(t.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Cr.geometry=this.geometry,Cr.material=this.material,Cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(n),t.ray.intersectsSphere(Pr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ys),Rd.multiplyMatrices(n,Ys),Cr.matrixWorld=Rd,Cr.raycast(t,La);for(let a=0,o=La.length;a<o;a++){let l=La[a];l.instanceId=r,l.object=this,e.push(l)}La.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new rh(new Float32Array(i*this.count),i,this.count,kh,ei));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ah=class extends Ei{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pd=new te,oh=new Ja,Da=new Yi,Ua=new A,ao=class extends Ge{constructor(t=new ue,e=new ah){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(i),Da.radius+=r,t.ray.intersectsSphere(Da)===!1)return;Pd.copy(i).invert(),oh.copy(t.ray).applyMatrix4(Pd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);for(let g=d,x=u;g<x;g++){let p=h.getX(g);Ua.fromBufferAttribute(f,p),Id(Ua,p,l,i,t,e,this)}}else{let d=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let g=d,x=u;g<x;g++)Ua.fromBufferAttribute(f,g),Id(Ua,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Id(s,t,e,n,i,r,a){let o=oh.distanceSqToPoint(s);if(o<e){let l=new A;oh.closestPointToPoint(s,l),l.applyMatrix4(n);let h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var oo=class extends gn{constructor(t,e,n,i,r,a,o,l,h){super(t,e,n,i,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,h;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),h=n[i]-a,h<0)o=i+1;else if(h>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let c=n[i],d=n[i+1]-c,u=(a-c)/d;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Z:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new A,i=[],r=[],a=[],o=new A,l=new te;for(let u=0;u<=t;u++){let g=u/t;i[u]=this.getTangentAt(g,new A)}r[0]=new A,a[0]=new A;let h=Number.MAX_VALUE,c=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);c<=h&&(h=c,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),d<=h&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(i[u-1],i[u]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ke(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,g))}a[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(Ke(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],u*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Hr=class extends In{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Z){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=h-this.aY;l=d*c-u*f+this.aX,h=d*f+u*c+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},lh=class extends Hr{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Hh(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){i(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,c,f){let d=(a-r)/h-(o-r)/(h+c)+(o-a)/c,u=(o-a)/c-(l-a)/(c+f)+(l-o)/f;d*=c,u*=c,i(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var Na=new A,Ql=new Hh,jl=new Hh,tc=new Hh,gs=class extends In{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let h,c;this.closed||o>0?h=i[(o-1)%r]:(Na.subVectors(i[0],i[1]).add(i[0]),h=Na);let f=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?c=i[(o+2)%r]:(Na.subVectors(i[r-1],i[r-2]).add(i[r-1]),c=Na),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(h.distanceToSquared(f),u),x=Math.pow(f.distanceToSquared(d),u),p=Math.pow(d.distanceToSquared(c),u);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Ql.initNonuniformCatmullRom(h.x,f.x,d.x,c.x,g,x,p),jl.initNonuniformCatmullRom(h.y,f.y,d.y,c.y,g,x,p),tc.initNonuniformCatmullRom(h.z,f.z,d.z,c.z,g,x,p)}else this.curveType==="catmullrom"&&(Ql.initCatmullRom(h.x,f.x,d.x,c.x,this.tension),jl.initCatmullRom(h.y,f.y,d.y,c.y,this.tension),tc.initCatmullRom(h.z,f.z,d.z,c.z,this.tension));return n.set(Ql.calc(l),jl.calc(l),tc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ld(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Ov(s,t){let e=1-s;return e*e*t}function Hv(s,t){return 2*(1-s)*s*t}function Vv(s,t){return s*s*t}function Nr(s,t,e,n){return Ov(s,t)+Hv(s,e)+Vv(s,n)}function Gv(s,t){let e=1-s;return e*e*e*t}function Wv(s,t){let e=1-s;return 3*e*e*s*t}function Xv(s,t){return 3*(1-s)*s*s*t}function qv(s,t){return s*s*s*t}function kr(s,t,e,n,i){return Gv(s,t)+Wv(s,e)+Xv(s,n)+qv(s,i)}var lo=class extends In{constructor(t=new Z,e=new Z,n=new Z,i=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Z){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(t,i.x,r.x,a.x,o.x),kr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ch=class extends In{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(t,i.x,r.x,a.x,o.x),kr(t,i.y,r.y,a.y,o.y),kr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},co=class extends In{constructor(t=new Z,e=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hh=class extends In{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ho=class extends In{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Nr(t,i.x,r.x,a.x),Nr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},or=class extends In{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Nr(t,i.x,r.x,a.x),Nr(t,i.y,r.y,a.y),Nr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Z){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],h=i[a],c=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(Ld(o,l.x,h.x,c.x,f.x),Ld(o,l.y,h.y,c.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Z().fromArray(i))}return this}},fo=Object.freeze({__proto__:null,ArcCurve:lh,CatmullRomCurve3:gs,CubicBezierCurve:lo,CubicBezierCurve3:ch,EllipseCurve:Hr,LineCurve:co,LineCurve3:hh,QuadraticBezierCurve:ho,QuadraticBezierCurve3:or,SplineCurve:uo}),uh=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let h=0;h<l.length;h++){let c=l[h];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new fo[i.type]().fromJSON(i))}return this}},Ai=class extends uh{constructor(t){super(),this.type="Path",this.currentPoint=new Z,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new co(this.currentPoint.clone(),new Z(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new ho(this.currentPoint.clone(),new Z(t,e),new Z(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new lo(this.currentPoint.clone(),new Z(t,e),new Z(n,i),new Z(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new uo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let h=new Hr(t,e,n,i,r,a,o,l);if(this.curves.length>0){let f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},wn=class s extends ue{constructor(t=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ke(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],h=[],c=1/e,f=new A,d=new Z,u=new A,g=new A,x=new A,p=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:p=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,u.x=m*1,u.y=-p,u.z=m*0,x.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,u.x=m*1,u.y=-p,u.z=m*0,g.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),l.push(u.x,u.y,u.z),x.copy(g)}for(let v=0;v<=e;v++){let y=n+v*c*i,_=Math.sin(y),C=Math.cos(y);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*_,f.y=t[w].y,f.z=t[w].x*C,a.push(f.x,f.y,f.z),d.x=v/e,d.y=w/(t.length-1),o.push(d.x,d.y);let R=l[3*w+0]*_,P=l[3*w+1],b=l[3*w+0]*C;h.push(R,P,b)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){let _=y+v*t.length,C=_,w=_+t.length,R=_+t.length+1,P=_+1;r.push(C,w,P),r.push(R,P,w)}this.setIndex(r),this.setAttribute("position",new Xt(a,3)),this.setAttribute("uv",new Xt(o,2)),this.setAttribute("normal",new Xt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},hn=class s extends wn{constructor(t=1,e=1,n=4,i=8){let r=new Ai;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},En=class s extends ue{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],h=new A,c=new Z;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=n+f/e*i;h.x=t*Math.cos(u),h.y=t*Math.sin(u),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[d]/t+1)/2,c.y=(a[d+1]/t+1)/2,l.push(c.x,c.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(o,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Zt=class s extends ue{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;i=Math.floor(i),r=Math.floor(r);let c=[],f=[],d=[],u=[],g=0,x=[],p=n/2,m=0;v(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(u,2));function v(){let _=new A,C=new A,w=0,R=(e-t)/n;for(let P=0;P<=r;P++){let b=[],M=P/r,T=M*(e-t)+t;for(let L=0;L<=i;L++){let U=L/i,B=U*l+o,q=Math.sin(B),H=Math.cos(B);C.x=T*q,C.y=-M*n+p,C.z=T*H,f.push(C.x,C.y,C.z),_.set(q,R,H).normalize(),d.push(_.x,_.y,_.z),u.push(U,1-M),b.push(g++)}x.push(b)}for(let P=0;P<i;P++)for(let b=0;b<r;b++){let M=x[b][P],T=x[b+1][P],L=x[b+1][P+1],U=x[b][P+1];(t>0||b!==0)&&(c.push(M,T,U),w+=3),(e>0||b!==r-1)&&(c.push(T,L,U),w+=3)}h.addGroup(m,w,0),m+=w}function y(_){let C=g,w=new Z,R=new A,P=0,b=_===!0?t:e,M=_===!0?1:-1;for(let L=1;L<=i;L++)f.push(0,p*M,0),d.push(0,M,0),u.push(.5,.5),g++;let T=g;for(let L=0;L<=i;L++){let B=L/i*l+o,q=Math.cos(B),H=Math.sin(B);R.x=b*H,R.y=p*M,R.z=b*q,f.push(R.x,R.y,R.z),d.push(0,M,0),w.x=q*.5+.5,w.y=H*.5*M+.5,u.push(w.x,w.y),g++}for(let L=0;L<i;L++){let U=C+L,B=T+L;_===!0?c.push(B,B+1,U):c.push(B+1,B,U),P+=3}h.addGroup(m,P,_===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},an=class s extends Zt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vr=class s extends ue{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),h(n),c(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let y=new A,_=new A,C=new A;for(let w=0;w<e.length;w+=3)u(e[w+0],y),u(e[w+1],_),u(e[w+2],C),l(y,_,C,v)}function l(v,y,_,C){let w=C+1,R=[];for(let P=0;P<=w;P++){R[P]=[];let b=v.clone().lerp(_,P/w),M=y.clone().lerp(_,P/w),T=w-P;for(let L=0;L<=T;L++)L===0&&P===w?R[P][L]=b:R[P][L]=b.clone().lerp(M,L/T)}for(let P=0;P<w;P++)for(let b=0;b<2*(w-P)-1;b++){let M=Math.floor(b/2);b%2===0?(d(R[P][M+1]),d(R[P+1][M]),d(R[P][M])):(d(R[P][M+1]),d(R[P+1][M+1]),d(R[P+1][M]))}}function h(v){let y=new A;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function c(){let v=new A;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let _=p(v)/2/Math.PI+.5,C=m(v)/Math.PI+.5;a.push(_,1-C)}g(),f()}function f(){for(let v=0;v<a.length;v+=6){let y=a[v+0],_=a[v+2],C=a[v+4],w=Math.max(y,_,C),R=Math.min(y,_,C);w>.9&&R<.1&&(y<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function u(v,y){let _=v*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function g(){let v=new A,y=new A,_=new A,C=new A,w=new Z,R=new Z,P=new Z;for(let b=0,M=0;b<r.length;b+=9,M+=6){v.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),w.set(a[M+0],a[M+1]),R.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),C.copy(v).add(y).add(_).divideScalar(3);let T=p(C);x(w,M+0,v,T),x(R,M+2,y,T),x(P,M+4,_,T)}}function x(v,y,_,C){C<0&&v.x===1&&(a[y]=v.x-1),_.x===0&&_.z===0&&(a[y]=C/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}},lr=class s extends Vr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var un=class extends Ai{constructor(t){super(t),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Ai().fromJSON(i))}return this}},Yv={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=hf(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,h,c,f,d,u;if(n&&(r=Qv(s,t,r,e)),s.length>80*e){o=h=s[0],l=c=s[1];for(let g=e;g<i;g+=e)f=s[g],d=s[g+1],f<o&&(o=f),d<l&&(l=d),f>h&&(h=f),d>c&&(c=d);u=Math.max(h-o,c-l),u=u!==0?32767/u:0}return Gr(r,a,e,o,l,u,0),a}};function hf(s,t,e,n,i){let r,a;if(i===cy(s,t,e,n)>0)for(r=t;r<e;r+=n)a=Dd(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=Dd(r,s[r],s[r+1],a);return a&&wo(a,a.next)&&(Xr(a),a=a.next),a}function xs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(wo(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Xr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Gr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&iy(s,n,i,r);let o=s,l,h;for(;s.prev!==s.next;){if(l=s.prev,h=s.next,r?Zv(s,n,i,r):$v(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(h.i/e|0),Xr(s),s=h.next,o=h.next;continue}if(s=h,s===o){a?a===1?(s=Jv(xs(s),t,e),Gr(s,t,e,n,i,r,2)):a===2&&Kv(s,t,e,n,i,r):Gr(xs(s),t,e,n,i,r,1);break}}}function $v(s){let t=s.prev,e=s,n=s.next;if(Ie(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,h=n.y,c=i<r?i<a?i:a:r<a?r:a,f=o<l?o<h?o:h:l<h?l:h,d=i>r?i>a?i:a:r>a?r:a,u=o>l?o>h?o:h:l>h?l:h,g=n.next;for(;g!==t;){if(g.x>=c&&g.x<=d&&g.y>=f&&g.y<=u&&Zs(i,o,r,l,a,h,g.x,g.y)&&Ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Zv(s,t,e,n){let i=s.prev,r=s,a=s.next;if(Ie(i,r,a)>=0)return!1;let o=i.x,l=r.x,h=a.x,c=i.y,f=r.y,d=a.y,u=o<l?o<h?o:h:l<h?l:h,g=c<f?c<d?c:d:f<d?f:d,x=o>l?o>h?o:h:l>h?l:h,p=c>f?c>d?c:d:f>d?f:d,m=dh(u,g,t,e,n),v=dh(x,p,t,e,n),y=s.prevZ,_=s.nextZ;for(;y&&y.z>=m&&_&&_.z<=v;){if(y.x>=u&&y.x<=x&&y.y>=g&&y.y<=p&&y!==i&&y!==a&&Zs(o,c,l,f,h,d,y.x,y.y)&&Ie(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=u&&_.x<=x&&_.y>=g&&_.y<=p&&_!==i&&_!==a&&Zs(o,c,l,f,h,d,_.x,_.y)&&Ie(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=m;){if(y.x>=u&&y.x<=x&&y.y>=g&&y.y<=p&&y!==i&&y!==a&&Zs(o,c,l,f,h,d,y.x,y.y)&&Ie(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=u&&_.x<=x&&_.y>=g&&_.y<=p&&_!==i&&_!==a&&Zs(o,c,l,f,h,d,_.x,_.y)&&Ie(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Jv(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!wo(i,r)&&uf(i,n,n.next,r)&&Wr(i,r)&&Wr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Xr(n),Xr(n.next),n=s=r),n=n.next}while(n!==s);return xs(n)}function Kv(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ay(a,o)){let l=df(a,o);a=xs(a,a.next),l=xs(l,l.next),Gr(a,t,e,n,i,r,0),Gr(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Qv(s,t,e,n){let i=[],r,a,o,l,h;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,h=hf(s,o,l,n,!1),h===h.next&&(h.steiner=!0),i.push(ry(h));for(i.sort(jv),r=0;r<i.length;r++)e=ty(i[r],e);return e}function jv(s,t){return s.x-t.x}function ty(s,t){let e=ey(s,t);if(!e)return t;let n=df(e,s);return xs(n,n.next),xs(e,e.next)}function ey(s,t){let e=t,n=-1/0,i,r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;let o=i,l=i.x,h=i.y,c=1/0,f;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Zs(a<h?r:n,a,l,h,a<h?n:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),Wr(e,s)&&(f<c||f===c&&(e.x>i.x||e.x===i.x&&ny(i,e)))&&(i=e,c=f)),e=e.next;while(e!==o);return i}function ny(s,t){return Ie(s.prev,s,t.prev)<0&&Ie(t.next,s,s.next)<0}function iy(s,t,e,n){let i=s;do i.z===0&&(i.z=dh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,sy(i)}function sy(s){let t,e,n,i,r,a,o,l,h=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<h&&(o++,n=n.nextZ,!!n);t++);for(l=h;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,h*=2}while(a>1);return s}function dh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ry(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Zs(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function ay(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!oy(s,t)&&(Wr(s,t)&&Wr(t,s)&&ly(s,t)&&(Ie(s.prev,s,t.prev)||Ie(s,t.prev,t))||wo(s,t)&&Ie(s.prev,s,s.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function wo(s,t){return s.x===t.x&&s.y===t.y}function uf(s,t,e,n){let i=Fa(Ie(s,t,e)),r=Fa(Ie(s,t,n)),a=Fa(Ie(e,n,s)),o=Fa(Ie(e,n,t));return!!(i!==r&&a!==o||i===0&&ka(s,e,t)||r===0&&ka(s,n,t)||a===0&&ka(e,s,n)||o===0&&ka(e,t,n))}function ka(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Fa(s){return s>0?1:s<0?-1:0}function oy(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&uf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Wr(s,t){return Ie(s.prev,s,s.next)<0?Ie(s,t,s.next)>=0&&Ie(s,s.prev,t)>=0:Ie(s,t,s.prev)<0||Ie(s,s.next,t)<0}function ly(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function df(s,t){let e=new fh(s.i,s.x,s.y),n=new fh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Dd(s,t,e,n){let i=new fh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Xr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function fh(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cy(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Wi=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Ud(t),Nd(n,t);let a=t.length;e.forEach(Ud);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Nd(n,e[l]);let o=Yv.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ud(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Nd(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var ri=class s extends ue{constructor(t=new un([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];a(h)}this.setAttribute("position",new Xt(i,3)),this.setAttribute("uv",new Xt(r,2)),this.computeVertexNormals();function a(o){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:hy,y,_=!1,C,w,R,P;m&&(y=m.getSpacedPoints(c),_=!0,d=!1,C=m.computeFrenetFrames(c,!1),w=new A,R=new A,P=new A),d||(p=0,u=0,g=0,x=0);let b=o.extractPoints(h),M=b.shape,T=b.holes;if(!Wi.isClockWise(M)){M=M.reverse();for(let X=0,nt=T.length;X<nt;X++){let D=T[X];Wi.isClockWise(D)&&(T[X]=D.reverse())}}let U=Wi.triangulateShape(M,T),B=M;for(let X=0,nt=T.length;X<nt;X++){let D=T[X];M=M.concat(D)}function q(X,nt,D){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(nt,D)}let H=M.length,j=U.length;function G(X,nt,D){let mt,st,ht,ft=X.x-nt.x,zt=X.y-nt.y,St=D.x-X.x,I=D.y-X.y,S=ft*ft+zt*zt,V=ft*I-zt*St;if(Math.abs(V)>Number.EPSILON){let Q=Math.sqrt(S),it=Math.sqrt(St*St+I*I),tt=nt.x-zt/Q,Pt=nt.y+ft/Q,yt=D.x-I/it,Mt=D.y+St/it,ee=((yt-tt)*I-(Mt-Pt)*St)/(ft*I-zt*St);mt=tt+ft*ee-X.x,st=Pt+zt*ee-X.y;let at=mt*mt+st*st;if(at<=2)return new Z(mt,st);ht=Math.sqrt(at/2)}else{let Q=!1;ft>Number.EPSILON?St>Number.EPSILON&&(Q=!0):ft<-Number.EPSILON?St<-Number.EPSILON&&(Q=!0):Math.sign(zt)===Math.sign(I)&&(Q=!0),Q?(mt=-zt,st=ft,ht=Math.sqrt(S)):(mt=ft,st=zt,ht=Math.sqrt(S/2))}return new Z(mt/ht,st/ht)}let rt=[];for(let X=0,nt=B.length,D=nt-1,mt=X+1;X<nt;X++,D++,mt++)D===nt&&(D=0),mt===nt&&(mt=0),rt[X]=G(B[X],B[D],B[mt]);let pt=[],vt,Ot=rt.concat();for(let X=0,nt=T.length;X<nt;X++){let D=T[X];vt=[];for(let mt=0,st=D.length,ht=st-1,ft=mt+1;mt<st;mt++,ht++,ft++)ht===st&&(ht=0),ft===st&&(ft=0),vt[mt]=G(D[mt],D[ht],D[ft]);pt.push(vt),Ot=Ot.concat(vt)}for(let X=0;X<p;X++){let nt=X/p,D=u*Math.cos(nt*Math.PI/2),mt=g*Math.sin(nt*Math.PI/2)+x;for(let st=0,ht=B.length;st<ht;st++){let ft=q(B[st],rt[st],mt);ct(ft.x,ft.y,-D)}for(let st=0,ht=T.length;st<ht;st++){let ft=T[st];vt=pt[st];for(let zt=0,St=ft.length;zt<St;zt++){let I=q(ft[zt],vt[zt],mt);ct(I.x,I.y,-D)}}}let $t=g+x;for(let X=0;X<H;X++){let nt=d?q(M[X],Ot[X],$t):M[X];_?(R.copy(C.normals[0]).multiplyScalar(nt.x),w.copy(C.binormals[0]).multiplyScalar(nt.y),P.copy(y[0]).add(R).add(w),ct(P.x,P.y,P.z)):ct(nt.x,nt.y,0)}for(let X=1;X<=c;X++)for(let nt=0;nt<H;nt++){let D=d?q(M[nt],Ot[nt],$t):M[nt];_?(R.copy(C.normals[X]).multiplyScalar(D.x),w.copy(C.binormals[X]).multiplyScalar(D.y),P.copy(y[X]).add(R).add(w),ct(P.x,P.y,P.z)):ct(D.x,D.y,f/c*X)}for(let X=p-1;X>=0;X--){let nt=X/p,D=u*Math.cos(nt*Math.PI/2),mt=g*Math.sin(nt*Math.PI/2)+x;for(let st=0,ht=B.length;st<ht;st++){let ft=q(B[st],rt[st],mt);ct(ft.x,ft.y,f+D)}for(let st=0,ht=T.length;st<ht;st++){let ft=T[st];vt=pt[st];for(let zt=0,St=ft.length;zt<St;zt++){let I=q(ft[zt],vt[zt],mt);_?ct(I.x,I.y+y[c-1].y,y[c-1].x+D):ct(I.x,I.y,f+D)}}}J(),ot();function J(){let X=i.length/3;if(d){let nt=0,D=H*nt;for(let mt=0;mt<j;mt++){let st=U[mt];k(st[2]+D,st[1]+D,st[0]+D)}nt=c+p*2,D=H*nt;for(let mt=0;mt<j;mt++){let st=U[mt];k(st[0]+D,st[1]+D,st[2]+D)}}else{for(let nt=0;nt<j;nt++){let D=U[nt];k(D[2],D[1],D[0])}for(let nt=0;nt<j;nt++){let D=U[nt];k(D[0]+H*c,D[1]+H*c,D[2]+H*c)}}n.addGroup(X,i.length/3-X,0)}function ot(){let X=i.length/3,nt=0;Rt(B,nt),nt+=B.length;for(let D=0,mt=T.length;D<mt;D++){let st=T[D];Rt(st,nt),nt+=st.length}n.addGroup(X,i.length/3-X,1)}function Rt(X,nt){let D=X.length;for(;--D>=0;){let mt=D,st=D-1;st<0&&(st=X.length-1);for(let ht=0,ft=c+p*2;ht<ft;ht++){let zt=H*ht,St=H*(ht+1),I=nt+mt+zt,S=nt+st+zt,V=nt+st+St,Q=nt+mt+St;W(I,S,V,Q)}}}function ct(X,nt,D){l.push(X),l.push(nt),l.push(D)}function k(X,nt,D){O(X),O(nt),O(D);let mt=i.length/3,st=v.generateTopUV(n,i,mt-3,mt-2,mt-1);lt(st[0]),lt(st[1]),lt(st[2])}function W(X,nt,D,mt){O(X),O(nt),O(mt),O(nt),O(D),O(mt);let st=i.length/3,ht=v.generateSideWallUV(n,i,st-6,st-3,st-2,st-1);lt(ht[0]),lt(ht[1]),lt(ht[3]),lt(ht[1]),lt(ht[2]),lt(ht[3])}function O(X){i.push(l[X*3+0]),i.push(l[X*3+1]),i.push(l[X*3+2])}function lt(X){r.push(X.x),r.push(X.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return uy(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new fo[i.type]().fromJSON(i)),new s(n,t.options)}},hy={generateTopUV:function(s,t,e,n,i){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],h=t[i*3],c=t[i*3+1];return[new Z(r,a),new Z(o,l),new Z(h,c)]},generateSideWallUV:function(s,t,e,n,i,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],h=t[n*3],c=t[n*3+1],f=t[n*3+2],d=t[i*3],u=t[i*3+1],g=t[i*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-c)<Math.abs(a-h)?[new Z(a,1-l),new Z(h,1-f),new Z(d,1-g),new Z(x,1-m)]:[new Z(o,1-l),new Z(c,1-f),new Z(u,1-g),new Z(p,1-m)]}};function uy(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var po=class s extends Vr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},cr=class s extends Vr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var mo=class s extends ue{constructor(t=new un([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Xt(i,3)),this.setAttribute("normal",new Xt(r,3)),this.setAttribute("uv",new Xt(a,2));function h(c){let f=i.length/3,d=c.extractPoints(e),u=d.shape,g=d.holes;Wi.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,m=g.length;p<m;p++){let v=g[p];Wi.isClockWise(v)===!0&&(g[p]=v.reverse())}let x=Wi.triangulateShape(u,g);for(let p=0,m=g.length;p<m;p++){let v=g[p];u=u.concat(v)}for(let p=0,m=u.length;p<m;p++){let v=u[p];i.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let p=0,m=x.length;p<m;p++){let v=x[p],y=v[0]+f,_=v[1]+f,C=v[2]+f;n.push(y,_,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return dy(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let a=e[t.shapes[i]];n.push(a)}return new s(n,t.curveSegments)}};function dy(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var be=class s extends ue{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),h=0,c=[],f=new A,d=new A,u=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let v=[],y=m/n,_=0;m===0&&a===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let C=0;C<=e;C++){let w=C/e;f.x=-t*Math.cos(i+w*r)*Math.sin(a+y*o),f.y=t*Math.cos(a+y*o),f.z=t*Math.sin(i+w*r)*Math.sin(a+y*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),p.push(w+_,1-y),v.push(h++)}c.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){let y=c[m][v+1],_=c[m][v],C=c[m+1][v],w=c[m+1][v+1];(m!==0||a>0)&&u.push(y,_,w),(m!==n-1||l<Math.PI)&&u.push(_,C,w)}this.setIndex(u),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Be=class s extends ue{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],h=[],c=new A,f=new A,d=new A;for(let u=0;u<=n;u++)for(let g=0;g<=i;g++){let x=g/i*r,p=u/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(x),f.y=(t+e*Math.cos(p))*Math.sin(x),f.z=e*Math.sin(p),o.push(f.x,f.y,f.z),c.x=t*Math.cos(x),c.y=t*Math.sin(x),d.subVectors(f,c).normalize(),l.push(d.x,d.y,d.z),h.push(g/i),h.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=i;g++){let x=(i+1)*u+g-1,p=(i+1)*(u-1)+g-1,m=(i+1)*(u-1)+g,v=(i+1)*u+g;a.push(x,p,v),a.push(p,m,v)}this.setIndex(a),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var $i=class s extends ue{constructor(t=new or(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,l=new A,h=new Z,c=new A,f=[],d=[],u=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(u,2));function x(){for(let y=0;y<e;y++)p(y);p(r===!1?e:0),v(),m()}function p(y){c=t.getPointAt(y/e,c);let _=a.normals[y],C=a.binormals[y];for(let w=0;w<=i;w++){let R=w/i*Math.PI*2,P=Math.sin(R),b=-Math.cos(R);l.x=b*_.x+P*C.x,l.y=b*_.y+P*C.y,l.z=b*_.z+P*C.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=c.x+n*l.x,o.y=c.y+n*l.y,o.z=c.z+n*l.z,f.push(o.x,o.y,o.z)}}function m(){for(let y=1;y<=e;y++)for(let _=1;_<=i;_++){let C=(i+1)*(y-1)+(_-1),w=(i+1)*y+(_-1),R=(i+1)*y+_,P=(i+1)*(y-1)+_;g.push(C,w,P),g.push(w,R,P)}}function v(){for(let y=0;y<=e;y++)for(let _=0;_<=i;_++)h.x=y/e,h.y=_/i,u.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new fo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var go=class extends Re{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Gt=class extends Ei{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qd,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function za(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function fy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var hr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ph=class extends hr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Iu,endingEnd:Iu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Lu:r=t,o=2*e-n;break;case Du:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lu:a=t,l=2*n-e;break;case Du:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let h=(n-e)*.5,c=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(l-n),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-e)/(i-e),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,v=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-u)*p+(1.5+u)*x+.5*g,_=u*p-u*x;for(let C=0;C!==o;++C)r[C]=m*a[c+C]+v*a[h+C]+y*a[l+C]+_*a[f+C];return r}},mh=class extends hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=(n-e)/(i-e),f=1-c;for(let d=0;d!==o;++d)r[d]=a[h+d]*f+a[l+d]*c;return r}},gh=class extends hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Vn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=za(e,this.TimeBufferType),this.values=za(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:za(t.times,Array),values:za(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new gh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new mh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ph(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Wa:e=this.InterpolantFactoryMethodDiscrete;break;case Hc:e=this.InterpolantFactoryMethodLinear;break;case bl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wa;case this.InterpolantFactoryMethodLinear:return Hc;case this.InterpolantFactoryMethodSmooth:return bl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&fy(i))for(let o=0,l=i.length;o!==l;++o){let h=i[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===bl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=t[o],c=t[o+1];if(h!==c&&(o!==1||h!==t[0]))if(i)l=!0;else{let f=o*n,d=f-n,u=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[d+g]||x!==e[u+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,d=a*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,h=0;h!==n;++h)e[l+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Hc;var vs=class extends Vn{constructor(t,e,n){super(t,e,n)}};vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Wa;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var xh=class extends Vn{};xh.prototype.ValueTypeName="color";var vh=class extends Vn{};vh.prototype.ValueTypeName="number";var yh=class extends hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),h=t*o;for(let c=h+o;h!==c;h+=4)we.slerpFlat(r,0,a,h-o,a,h,l);return r}},xo=class extends Vn{InterpolantFactoryMethodLinear(t){return new yh(this.times,this.values,this.getValueSize(),t)}};xo.prototype.ValueTypeName="quaternion";xo.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends Vn{constructor(t,e,n){super(t,e,n)}};ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Wa;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var _h=class extends Vn{};_h.prototype.ValueTypeName="vector";var Mh=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){o++,r===!1&&i.onStart!==void 0&&i.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,i.onProgress!==void 0&&i.onProgress(c,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return h.push(c,f),this},this.removeHandler=function(c){let f=h.indexOf(c);return f!==-1&&h.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=h.length;f<d;f+=2){let u=h[f],g=h[f+1];if(u.global&&(u.lastIndex=0),u.test(c))return g}return null}}},py=new Mh,bh=class{constructor(t){this.manager=t!==void 0?t:py,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};bh.DEFAULT_MATERIAL_NAME="__DEFAULT";var ur=class extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},vo=class extends ur{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ec=new te,kd=new A,Fd=new A,qr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;kd.setFromMatrixPosition(t.matrixWorld),e.position.copy(kd),Fd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fd),e.updateMatrixWorld(),ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ec)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Sh=class extends qr{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=qa*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},yo=class extends ur{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Sh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},zd=new te,Ir=new A,nc=new A,wh=class extends qr{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ir.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ir),nc.copy(n.position),nc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(nc),n.updateMatrixWorld(),i.makeTranslation(-Ir.x,-Ir.y,-Ir.z),zd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zd)}},dr=class extends ur{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Eh=class extends qr{constructor(){super(new rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yr=class extends ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new Eh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var _o=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Bd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Bd(){return performance.now()}var Vh="\\[\\]\\.:\\/",my=new RegExp("["+Vh+"]","g"),Gh="[^"+Vh+"]",gy="[^"+Vh.replace("\\.","")+"]",xy=/((?:WC+[\/:])*)/.source.replace("WC",Gh),vy=/(WCOD+)?/.source.replace("WCOD",gy),yy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gh),_y=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gh),My=new RegExp("^"+xy+vy+yy+_y+"$"),by=["material","materials","bones","map"],Th=class{constructor(t,e,n){let i=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(my,"")}static parseTrackName(t){let e=My.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);by.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[i];if(a===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Th;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var n_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Xn={mass:1520,inertia:[2700,3050,1050],cgHeight:.42,restLength:.64,maxTravel:.55,springK:29500,springProg:1.6,damperBump:2500,damperRebound:4300,antiRoll:14500,wheelRadius:.46,gripLat:1.5,gripLong:1.3,peakSlip:.145,slideFalloff:.74,rearGripHandbrake:.4,engineForce:12600,launchPunch:.38,topSpeed:36,brakeForce:21e3,brakeBias:.64,reverseSpeed:9,frontTorque:.42,dragCoef:.42,rollRes:9,maxSteer:.6,steerSpeedFalloff:.5,steerRate:5.6,steerReturn:8.5,driftSteerBoost:.55,airPitch:4.6,airRoll:1.8,airYaw:1.3,nitroForce:8200,nitroTopBoost:9,nitroDur:2.6,nitroCans:3,downforce:2.2,stability:1,rollStab:16,weightTransfer:.32,driftAssist:.6,yawDamping:.9,spinSlip:.78,counterCatch:7.5,assistStrength:1,chaserSpeedMul:1},Zr={low:{pixelRatio:.75,shadows:!1,shadowSize:0,bloom:!1,foliage:.45,drawDist:220,particles:.4,grain:!1,antialias:!1,pbr:!1,env:!1,rays:0,dof:!1},medium:{pixelRatio:1,shadows:!0,shadowSize:1024,bloom:!0,foliage:.7,drawDist:300,particles:.7,grain:!0,antialias:!1,pbr:!0,env:!0,rays:20,dof:!1},high:{pixelRatio:1.5,shadows:!0,shadowSize:2048,bloom:!0,foliage:1,drawDist:380,particles:1,grain:!0,antialias:!0,pbr:!0,env:!0,rays:36,dof:!0}},Jr={explorer:{name:"Explorer",chaser:.86,gap:.8,dmg:.6,startGap:70,fallDeath:!1},adventurer:{name:"Adventurer",chaser:1,gap:1,dmg:1,startGap:60,fallDeath:!1},legend:{name:"Legend",chaser:1.12,gap:1.15,dmg:1.4,startGap:50,fallDeath:!0}},_s=typeof navigator<"u"&&(/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Macintosh/.test(navigator.userAgent));var gt=(s,t,e)=>s<t?t:s>e?e:s,le=(s,t,e)=>s+(t-s)*e;var Zi=(s,t,e,n)=>le(s,t,1-Math.exp(-e*n)),re=(s,t,e)=>{let n=gt((e-s)/(t-s),0,1);return n*n*(3-2*n)};function Eo(s,t){let e=s*374761393+t*668265263;return e=(e^e>>>13)*1274126177,((e^e>>>16)>>>0)/4294967296}function Ri(s,t){let e=Math.floor(s),n=Math.floor(t),i=s-e,r=t-n,a=i*i*(3-2*i),o=r*r*(3-2*r),l=Eo(e,n),h=Eo(e+1,n),c=Eo(e,n+1),f=Eo(e+1,n+1);return le(le(l,h,a),le(c,f,a),o)}function Ji(s,t,e=4){let n=0,i=.5,r=1;for(let a=0;a<e;a++)n+=i*Ri(s*r,t*r),r*=2.03,i*=.5;return n}function ff(s){let t=2166136261;for(let e=0;e<s.length;e++)t^=s.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}var ce=class{constructor(t=1){this.s=t>>>0||1}next(){let t=this.s=this.s+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}chance(t){return this.next()<t}sign(){return this.next()<.5?-1:1}weighted(t){let e=0;for(let i of t)e+=i.w;let n=this.next()*e;for(let i of t)if(n-=i.w,n<=0)return i.v;return t[t.length-1].v}};var Wh={},Bt={on(s,t){(Wh[s]=Wh[s]||[]).push(t)},emit(s,t){let e=Wh[s];if(e)for(let n of e)n(t)}},ae={car:null,carS:0,carLat:0,time:0,running:!1,slowmo:1};var pf="relicrunner4x4.save.v1",Xh=()=>({gold:0,shards:0,relics:{},upgrades:{engine:0,nitro:0,suspension:0,armor:0},vehicle:"bessie",paint:"green",records:{bestDistance:0,bestScore:0,runs:0,totalDistance:0},expeditionLevel:1,missionsDone:0,missions:null,settings:{assist:_s?"full":"light",autoAccel:_s,difficulty:"adventurer",steerSens:1,camDist:1,comfort:!1,flashing:!1,rumble:!0,colorblind:!1,subtitle:1,music:.7,sfx:.9,quality:"auto",fps:60,touchMode:"stick",hoodCam:!1},seenIntro:!1});function mf(){try{let s=localStorage.getItem(pf);if(!s)return Xh();let t=JSON.parse(s),e=Xh();return{...e,...t,upgrades:{...e.upgrades,...t.upgrades},records:{...e.records,...t.records},settings:{...e.settings,...t.settings}}}catch{return Xh()}}function gf(s){try{localStorage.setItem(pf,JSON.stringify(s))}catch{}}var To=new A(-.55,.24,.8).normalize(),qh=new bt("#d2b98c"),Ao=class{constructor(t,e){this.canvas=t,this.qualityName=e==="auto"?_s?"low":"high":e,this.q=Zr[this.qualityName];let n=this.renderer=new io({canvas:t,antialias:this.q.antialias,powerPreference:"high-performance",stencil:!1});n.outputColorSpace=sn,n.toneMapping=$r,n.toneMappingExposure=1.05,n.shadowMap.enabled=this.q.shadows,n.shadowMap.type=Ah,this.resScale=1,this.scene=new Br,this.scene.fog=new so(qh,.0066),this.scene.background=qh.clone(),this.camera=new Qe(62,16/9,.3,900),this._lights(),this._sky(),this._far(),this._env(),this.time={value:0},this.lost=!1,t.addEventListener("webglcontextlost",i=>{i.preventDefault(),this.lost=!0}),t.addEventListener("webglcontextrestored",()=>{this.lost=!1}),this.resize()}setQuality(t){this.qualityName=t,this.q=Zr[t],this.renderer.shadowMap.enabled=this.q.shadows,this.sun.castShadow=this.q.shadows,this.q.shadows&&(this.sun.shadow.mapSize.set(this.q.shadowSize,this.q.shadowSize),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.scene.traverse(e=>{e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>i.needsUpdate=!0)}),this.resize()}_lights(){let t=this.scene;this.hemi=new vo("#d8e0c8","#4a3e22",this.q.env?.62:1.05),t.add(this.hemi);let e=this.sun=new Yr("#ffc47e",3.5);e.castShadow=this.q.shadows,e.shadow.mapSize.set(this.q.shadowSize||1024,this.q.shadowSize||1024);let n=e.shadow.camera;n.left=-38,n.right=38,n.top=38,n.bottom=-38,n.near=1,n.far=220,e.shadow.bias=-6e-4,e.shadow.normalBias=.04,t.add(e),t.add(e.target),this.fill=new Yr("#7fa6c4",.42),this.fill.position.set(10,8,-10),t.add(this.fill)}_sky(){let t=new be(800,32,16),e=new Re({side:je,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:To},top:{value:new bt("#5f8fb0")},mid:{value:new bt("#f2c98e")},hor:{value:qh}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 sunDir, top, mid, hor; varying vec3 vDir;
        void main(){ vec3 d = normalize(vDir); float h = d.y;
          vec3 c = mix(hor, mid, smoothstep(-0.02, 0.18, h)); c = mix(c, top, smoothstep(0.15, 0.75, h));
          float sd = max(dot(d, sunDir), 0.0);
          c += vec3(1.0,0.66,0.32) * pow(sd, 5.0) * 0.6 + vec3(1.0,0.82,0.55) * pow(sd, 40.0) * 0.6 + vec3(1.0,0.9,0.7) * pow(sd, 400.0) * 9.0;
          c = mix(c, vec3(0.98,0.62,0.4), smoothstep(0.25, -0.05, h) * pow(sd, 2.0) * 0.35);
          float cl = sin(d.x*9.0+d.z*4.0)*sin(d.z*11.0-d.x*3.0)*0.5+0.5; c = mix(c, vec3(1.0,0.93,0.8), smoothstep(0.55,0.95,cl)*smoothstep(0.05,0.3,h)*(1.0-smoothstep(0.3,0.6,h))*0.35);
          gl_FragColor = vec4(c, 1.0); }`});this.sky=new _t(t,e),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.scene.add(this.sky)}_far(){let t=new ne,e=new ce(5),n=(i,r,a,o)=>{let h=[],c=[];for(let u=0;u<=160;u++){let g=u/160*Math.PI*2,x=Math.pow(Ji(Math.cos(g)*3+o,Math.sin(g)*3,5),1.6)*r+10;h.push(Math.cos(g)*i,-30,Math.sin(g)*i,Math.cos(g)*i,x,Math.sin(g)*i)}for(let u=0;u<160;u++){let g=u*2;c.push(g,g+2,g+1,g+1,g+2,g+3)}let f=new ue;f.setAttribute("position",new Xt(h,3)),f.setIndex(c);let d=new _t(f,new We({color:a,fog:!1,side:_e,depthWrite:!1}));return d.renderOrder=-9,d};t.add(n(700,260,new bt("#c4ad8a"),1)),t.add(n(620,170,new bt("#9e9a74"),7));for(let i=0;i<5;i++){let r=e.range(0,6.28),a=e.range(520,590),o=e.range(26,46),l=new ne;for(let c=0;c<6;c++){let f=o*(1-c*.15),d=new _t(new It(f*2,o*.28,f*2),new We({color:new bt("#a39274").offsetHSL(0,0,-c*.01),fog:!1}));d.position.y=c*o*.28,l.add(d)}let h=new _t(new It(o*.6,o*.4,o*.6),new We({color:"#958668",fog:!1}));h.position.y=6*o*.28,l.add(h),l.position.set(Math.cos(r)*a,5,Math.sin(r)*a),l.children.forEach(c=>c.renderOrder=-8),t.add(l)}this.far=t,this.scene.add(t);{let r=[],a=[];for(let d=0;d<=360;d++){let u=d/360*Math.PI*2,g=26+Ji(Math.cos(u)*9+3,Math.sin(u)*9,4)*22+Math.abs(Math.sin(d*1.7))*3.5;r.push(Math.cos(u)*330,-60,Math.sin(u)*330,Math.cos(u)*330,g,Math.sin(u)*330)}for(let d=0;d<360;d++){let u=d*2;a.push(u,u+2,u+1,u+1,u+2,u+3)}let l=new ue;l.setAttribute("position",new Xt(r,3)),l.setIndex(a);let h=new Float32Array(361*6),c=new bt("#9d9067"),f=new bt("#b7a57a");for(let d=0;d<=360;d++)c.toArray(h,d*6),f.toArray(h,d*6+3);l.setAttribute("color",new ie(h,3)),this.nearRing=new _t(l,new We({vertexColors:!0,fog:!1,side:_e,depthWrite:!1})),this.nearRing.renderOrder=-7,this.nearRing.frustumCulled=!1,this.scene.add(this.nearRing)}}_env(){if(this.q.env)try{let t=new Br,e=new _t(new be(50,32,16),this.sky.material.clone());t.add(e);let n=new _t(new En(50,24).rotateX(-Math.PI/2),new We({color:"#3c3a22"}));n.position.y=-4,t.add(n);let i=new _t(new be(48,24,8,0,Math.PI*2,0,.6),new We({color:"#4b5a30",side:je}));t.add(i);let r=new ar(this.renderer);this.envRT=r.fromScene(t,.02),r.dispose(),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=.55}catch(t){console.warn("env",t)}}follow(t){this.sky.position.copy(this.camera.position),this.far.position.set(this.camera.position.x,t.y*.6,this.camera.position.z),this.nearRing&&this.nearRing.position.set(this.camera.position.x,t.y-18,this.camera.position.z),this.sun.position.copy(t).addScaledVector(To,120),this.sun.target.position.copy(t),this.sun.target.updateMatrixWorld()}resize(){let t=window.innerWidth,e=window.innerHeight,n=Math.min(window.devicePixelRatio||1,this.q.pixelRatio)*this.resScale;this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.w=t,this.h=e,this.pr=n,this.onResize&&this.onResize(t,e,n)}};var Ro={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var An=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Sy=new rr(-1,1,1,-1,0,1),Yh=class extends ue{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}},wy=new Yh,Ki=class{constructor(t){this._mesh=new _t(wy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Sy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ms=class extends An{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Re?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ai.clone(t.uniforms),this.material=new Re({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ki(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Kr=class extends An{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Co=class extends An{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Po=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Z);this._width=n.width,this._height=n.height,e=new cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ms(Ro),this.copyPass.material.blending=ni,this.clock=new _o}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Kr!==void 0&&(a instanceof Kr?n=!0:a instanceof Co&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Io=class extends An{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new bt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}};var xf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new bt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var mr=class s extends An{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Z(t.x,t.y):new Z(256,256),this.clearColor=new bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new cn(r,a,{type:Gn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let d=new cn(r,a,{type:Gn});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new cn(r,a,{type:Gn});u.texture.name="UnrealBloomPass.v"+f,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=xf;this.highPassUniforms=ai.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Re({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Z(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let c=Ro;this.copyUniforms=ai.clone(c.uniforms),this.blendMaterial=new Re({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:rn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new bt,this.oldClearAlpha=1,this.basic=new We,this.fsQuad=new Ki(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Z(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Re({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Z(.5,.5)},direction:{value:new Z(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Re({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};mr.BlurDirectionX=new Z(1,0);mr.BlurDirectionY=new Z(0,1);var vf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Lo=class extends An{constructor(){super();let t=vf;this.uniforms=ai.clone(t.uniforms),this.material=new go({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ki(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Rh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ch?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ph?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===$r?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ih?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var yf="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",Ey=s=>({uniforms:{tDiffuse:{value:null},sun:{value:new Z(.5,.8)},vis:{value:0},strength:{value:.36},aspect:{value:1.7}},vertexShader:yf,fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 sun; uniform float vis, strength, aspect; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){ vec4 c = texture2D(tDiffuse, vUv);
      if (vis <= 0.001) { gl_FragColor = c; return; }
      vec2 d = (sun - vUv) * (0.92 / float(${s})); vec2 uv = vUv + d * h(vUv * 700.0);
      float acc = 0.0, w = 1.0;
      for (int i = 0; i < ${s}; i++) { uv += d; vec3 s = texture2D(tDiffuse, clamp(uv, 0.0, 1.0)).rgb; float l = dot(s, vec3(0.3, 0.55, 0.15));
        acc += smoothstep(0.82, 1.6, l) * w; w *= 0.965; }
      acc /= float(${s});
      vec2 dd = (vUv - sun) * vec2(aspect, 1.0); float fall = 1.0 / (1.0 + dot(dd, dd) * 2.2);
      c.rgb += vec3(1.0, 0.72, 0.42) * acc * strength * vis * fall * 2.4;
      // soft sun halo / in-scatter around the disc even when occluded (haze)
      c.rgb += vec3(1.0, 0.7, 0.42) * vis * 0.04 * exp(-dot(dd, dd) * 7.0);
      gl_FragColor = c; }`}),Ty={uniforms:{tDiffuse:{value:null},time:{value:0},grain:{value:.04},vignette:{value:.9},danger:{value:0},flash:{value:0},dof:{value:0},focus:{value:new Z(.5,.55)},res:{value:new Z(1280,720)},fringe:{value:0}},vertexShader:yf,fragmentShader:`uniform sampler2D tDiffuse; uniform float time, grain, vignette, danger, flash, dof, fringe; uniform vec2 focus, res; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){ vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5;
      if (fringe > 0.0) { vec2 o = d * dot(d, d) * fringe * 0.012; c.r = texture2D(tDiffuse, vUv + o).r; c.b = texture2D(tDiffuse, vUv - o).b; }
      if (dof > 0.01) { // focus blur: subject (car) sharp, frame edges dreamy
        vec2 fd = (vUv - focus) * vec2(res.x / res.y, 1.0); float k = smoothstep(0.12, 0.55, length(fd)) * dof;
        if (k > 0.01) { vec3 acc = c.rgb; float r = k * 7.0; float a = h(vUv * 300.0) * 6.283;
          for (int i = 0; i < 10; i++) { float t = float(i) / 10.0; float ang = a + t * 6.283 * 2.618; vec2 o = vec2(cos(ang), sin(ang)) * sqrt(t + 0.05) * r / res; acc += texture2D(tDiffuse, vUv + o).rgb; }
          c.rgb = acc / 11.0; } }
      float l = dot(c.rgb, vec3(0.299,0.587,0.114));
      // split tone: teal-olive shadows, amber highlights; gentle S-curve; saturation
      c.rgb = mix(c.rgb * vec3(0.93, 1.0, 1.04), c.rgb * vec3(1.07, 1.0, 0.86), smoothstep(0.15, 0.85, l));
      c.rgb = mix(c.rgb, c.rgb * c.rgb * (3.0 - 2.0 * c.rgb), 0.22);
      c.rgb += vec3(0.010,0.016,0.012) * (1.0 - l);
      l = dot(c.rgb, vec3(0.299,0.587,0.114)); c.rgb = mix(vec3(l), c.rgb, 1.12);
      float v = 1.0 - dot(d, d) * vignette; c.rgb *= v;
      c.rgb = mix(c.rgb, c.rgb * vec3(1.25,0.7,0.6), danger * smoothstep(0.15, 0.7, length(d)));
      c.rgb += (h(vUv * 800.0 + time) - 0.5) * grain;
      c.rgb += flash;
      gl_FragColor = c; }`},Ci=new A,Do=class{constructor(t){this.world=t;let e=t.renderer;this.composer=new Po(e),this.composer.addPass(new Io(t.scene,t.camera));let n=t.q.rays||0;n&&(this.rays=new Ms(Ey(n)),this.composer.addPass(this.rays)),this.bloom=new mr(new Z(256,256),.34,.6,.86),this.composer.addPass(this.bloom),this.composer.addPass(new Lo),this.grade=new Ms(Ty),this.composer.addPass(this.grade),this.enabled=t.q.bloom,this.dof=0,this.focus=new A,this.resize()}resize(){let t=this.world;this.composer.setPixelRatio(t.pr),this.composer.setSize(t.w,t.h),this.bloom.resolution.set(t.w*t.pr*.5,t.h*t.pr*.5),this.grade.uniforms.res.value.set(t.w*t.pr,t.h*t.pr)}render(t,e){let n=this.world,i=n.q,r=n.camera,a=this.grade.uniforms;if(a.time.value=e%100,a.grain.value=i.grain?.03:0,a.fringe.value=i.dof?1:0,a.dof.value=i.dof?this.dof:0,i.dof&&this.dof>.01&&(Ci.copy(this.focus).project(r),a.focus.value.set(Ci.x*.5+.5,Ci.y*.5+.5)),this.rays){Ci.copy(r.position).addScaledVector(To,500).project(r);let o=Ci.z<1,l=Ci.x*.5+.5,h=Ci.y*.5+.5,c=Math.max(Math.abs(Ci.x),Math.abs(Ci.y));this.rays.uniforms.sun.value.set(l,h),this.rays.uniforms.aspect.value=n.w/n.h,this.rays.uniforms.vis.value=o?Math.max(0,Math.min(1,(1.8-c)/.8)):0,this.rays.enabled=this.rays.uniforms.vis.value>.001}this.enabled&&i.bloom?this.composer.render(t):n.renderer.render(n.scene,r)}};var Ye=1,Dt={OPEN:0,WALL:1,CLIFF:2},Wt={DIRT:0,MUD:1,STONE:2,PLANK:3,WATER:4,JUNGLE:5,VOID:6},_f=[1,.78,.95,.9,.7,.62,0],Mf=[0,.85,0,.1,2.4,2.6,0],Uo=class{constructor(){this.S=[],this.base=0,this.res={h:0,nx:0,ny:1,nz:0,surf:0,onRoad:!0,lat:0,idx:0,t:0,isVoid:!1,laneLat:0,lane:0}}get count(){return this.base+this.S.length}get(t){t=Math.floor(t),t<this.base&&(t=this.base);let e=this.count-1;return t>e&&(t=e),this.S[t-this.base]}has(t){return t>=this.base&&t<this.count}push(t){t.i=this.count,this.S.push(t)}trim(t){let e=Math.floor(t)-this.base;e>200&&(this.S.splice(0,e),this.base+=e)}sampleAtS(t){return this.get(t/Ye)}pointAt(t,e,n){let i=Math.floor(t/Ye),r=t/Ye-i,a=this.get(i),o=this.get(i+1),l=a.rx+(o.rx-a.rx)*r,h=a.rz+(o.rz-a.rz)*r;return n.x=a.x+(o.x-a.x)*r+l*e,n.z=a.z+(o.z-a.z)*r+h*e,n.y=a.y+(o.y-a.y)*r+e*(a.bank+(o.bank-a.bank)*r),n}headingAt(t){let e=Math.floor(t/Ye),n=t/Ye-e,i=this.get(e),r=this.get(e+1);return i.th+(r.th-i.th)*n}locate(t,e,n){let i=gt(Math.floor(n),this.base,this.count-2);for(let r=0;r<64;r++){let a=this.S[i-this.base];if((t-a.x)*a.fx+(e-a.z)*a.fz<0&&i>this.base){i--;continue}if(i+1<this.count-1){let l=this.S[i+1-this.base];if((t-l.x)*l.fx+(e-l.z)*l.fz>=0){i++;continue}}break}return i}roadY(t,e){return t.y+e*t.bank}terrainY(t,e){let n=t.fork+t.hw,i=Math.abs(e),r=e<0?t.edgeL:t.edgeR,a=Ji(t.s*.045+(e<0?17:3),i*.06,3);if(t.gap||t.bridge){let c=re(26,46,i);return t.floorY+a*2.5+c*(t.y-t.floorY+6+a*8)}if(t.fork>0&&i<t.fork-t.hw-.6){let c=t.fork-t.hw-.6,f=re(0,2.5,c-i);return t.y+.2+f*(1.6+a*2.2)}if(i<=n+.6)return this.roadY(t,gt(e,-n,n))-.12;let o=i-n;if(t.causeway){let c=this.roadY(t,Math.sign(e)*n);return le(c-.1,t.waterY-.9,re(.7,2.3,o))+re(24,46,o)*(t.y-t.waterY+3+a*6)}if(t.ledge&&Math.sign(e)===t.ledge)return this.roadY(t,Math.sign(e)*n)-.1+re(.4,4.5,o)*(13+a*9)+re(5,22,o)*(6+a*6);if(r===Dt.CLIFF){let c=re(24,44,o);return t.floorY+a*3+c*(t.y-t.floorY+10+a*10)+(o<1.6?(t.y-t.floorY)*(1-re(.6,1.6,o)):0)}let l=this.roadY(t,Math.sign(e)*n)-.15;t.ford&&(l=Math.min(l,t.waterY-.6+re(3,18,o)*2));let h=r===Dt.WALL?re(.5,5,o)*(1.2+a*1.5):0;return l+h+re(2,26,o)*(1.5+a*7)+(Ri(t.s*.4,o*.5)-.5)*.25*re(.5,3,o)}query(t,e,n){let i=this.res,r=this.locate(t,e,n),a=this.S[r-this.base],o=this.S[Math.min(r+1,this.count-1)-this.base],l=t-a.x,h=e-a.z,c=gt((l*a.fx+h*a.fz)/Ye,0,1),f=a.rx+(o.rx-a.rx)*c,d=a.rz+(o.rz-a.rz)*c,u=l*f+h*d;i.idx=r,i.t=c,i.lat=u;let g=c>.5?o:a,x=g.fork+g.hw,p=u,m=0;g.fork>0&&(m=u<0?-1:1,p=u-m*g.fork),i.laneLat=p,i.lane=m;let v=Math.abs(p)<=g.hw+.25,y=g.gap||g.hole,_=a.y+(o.y-a.y)*c,C=a.bank+(o.bank-a.bank)*c,w=(o.y-a.y)/Ye;if(v&&!y){if(i.onRoad=!0,i.isVoid=!1,i.surf=g.surf,g.pud){let pt=g.s+c*Ye;for(let vt of g.pud){let Ot=pt-vt.s;if(Ot*Ot<vt.r*vt.r){let $t=p-vt.lat;if(Ot*Ot+$t*$t<vt.r*vt.r){i.surf=Wt.WATER;break}}}}return i.h=_+u*C,g.bridge&&(i.h+=g.bridgeSway||0),g.bump&&(i.h+=g.bump(u,c)),this._normal(i,a,w,C),i}if(i.onRoad=!1,y&&Math.abs(u)<x+2.5)return i.isVoid=!0,i.surf=Wt.VOID,i.h=g.floorY,i.nx=0,i.ny=1,i.nz=0,i;let R=u<0?g.edgeL:g.edgeR,P=Math.abs(u)-x;if((R===Dt.CLIFF||g.bridge||g.gap)&&P>.7&&!(g.fork>0&&Math.abs(u)<g.fork))return i.isVoid=!0,i.surf=Wt.VOID,i.h=this.terrainY(g,u),i.nx=0,i.ny=1,i.nz=0,i;i.isVoid=!1,i.surf=g.ford?Wt.WATER:Wt.JUNGLE;let b=this.terrainY(a,u),M=this.terrainY(o,u);i.h=b+(M-b)*c;let T=.5,L=this.terrainY(g,u+T),U=this.terrainY(g,u-T),B=(L-U)/(2*T),q=(M-b)/Ye,H=-q*a.fx-B*a.rx,j=-q*a.fz-B*a.rz,G=1,rt=Math.hypot(H,G,j);return i.nx=H/rt,i.ny=G/rt,i.nz=j/rt,i}_normal(t,e,n,i){let r=-n*e.fx-i*e.rx,a=-n*e.fz-i*e.rz,o=1,l=Math.hypot(r,o,a);t.nx=r/l,t.ny=o/l,t.nz=a/l}limits(t){let e=t.fork+t.hw,n=t.edgeL===Dt.WALL?e+.35:t.edgeL===Dt.OPEN&&!t.bridge&&!t.gap?e+10:1/0,i=t.edgeR===Dt.WALL?e+.35:t.edgeR===Dt.OPEN&&!t.bridge&&!t.gap?e+10:1/0,r=t.fork>t.hw+.6?t.fork-t.hw-.35:0;return{L:n,R:i,island:r}}};var qn={vmax:33,accel:4.2,mu:1,launchEff:.84,minRadiusPerHw:2.6,headingWindow:1.2};function bs(s){return Math.sqrt(qn.mu*9.81*Math.max(s,1))*1.12}function Ln(s,t,e=qn.vmax){return Math.min(e,Math.sqrt(s*s+2*qn.accel*t))}function $h(s,t,e,n,i=3.2){let r=s*Math.cos(t),a=s*Math.sin(t),o=(e+i)/Math.max(r,.1);return a*o-.5*9.81*o*o>=-n+.25}function Ay(s,t,e){let n=0,i=80;for(let r=0;r<30;r++){let a=(n+i)/2;$h(s,t,a,e)?n=a:i=a}return n}function Zh(s,t,e){let n=s*Math.cos(t),i=e/n;return s*Math.sin(t)*i-.5*9.81*i*i}var No=class{constructor(){this.log=[],this.stats={gapsShrunk:0,runupsExtended:0,turnsWidened:0,headingFlips:0,forks:0,gapsOk:0,failures:0}}note(t){this.log.push(t),this.log.length>40&&this.log.shift()}planJump(t,e,n,i,r=18,a=90){let o=r,l=n;for(;;){let h=Ln(t,o+10)*qn.launchEff,c=Ay(h,e,i)*.9;if(l<=c)return this.stats.gapsOk++,{runup:o,gap:l,vLaunch:h/qn.launchEff};if(o<a){o+=8,this.stats.runupsExtended++;continue}return this.stats.gapsShrunk++,this.note(`gap ${n.toFixed(1)}\u2192${c.toFixed(1)} m`),{runup:o,gap:Math.max(5,c),vLaunch:h/qn.launchEff}}}checkTurn(t,e){let n=e*qn.minRadiusPerHw;return t<n?(this.stats.turnsWidened++,n):t}turnDir(t,e,n){let i=qn.headingWindow,r=a=>Math.abs(t+a*e)<=i;return r(n)?n:r(-n)?(this.stats.headingFlips++,-n):t>0?-1:1}checkSamples(t){let e=t[0],n=t[t.length-1],i=!0;n.fork>.01&&(i=!1,this.note("fork did not rejoin"));for(let r of t)if(!isFinite(r.x+r.y+r.z)){i=!1;break}return Math.abs(n.th)>qn.headingWindow+.35&&(i=!1,this.note("heading window exceeded")),i||this.stats.failures++,i&&!!e}};function Ry(s,t,e,n){let i=l=>{if(l<t)return-1e9;let h=-e,c=Math.min(n,l-t);for(let f=0;f<c;f++)h+=le(-.27,0,re(.3,1,f/n));return h},r=l=>{let h=s,c=l*Math.cos(h),f=l*Math.sin(h);for(let d=t;d<t+200;d+=.5){let u=d/c;if(f*u-4.905*u*u+.4<=i(d))return d}return 1e9},a=8,o=70;for(let l=0;l<24;l++){let h=(a+o)/2;r(h)<=t+n*.68?a=h:o=h}return a}function Cy(s,t,e){let n=5,i=80;for(let r=0;r<24;r++){let a=(n+i)/2;$h(a*qn.launchEff,s,t,e)?i=a:n=a}return i}var Jh=["bridgeCollapse","pillars","croc","waterfall","blades","statue"],Kh={bridgeCollapse:"Collapsing Rope Bridge",pillars:"Falling Pillars",croc:"Crocodile Ford",waterfall:"Waterfall Jump",blades:"Tunnel of Blades",statue:"Falling Colossus"},ko=class{constructor(t,e,n={}){this.track=t,this.rng=new ce(e),this.seed=e,this.val=new No,this.gapMul=n.gapMul||1,this.cur={x:0,y:0,z:0,th:0},this.pieces=[],this.pieceId=0,this.vDesign=0,this.nextSet=260,this.bag=[],this.forced=null,this.lastType="",this.sinceGap=999}get s(){return this.track.count*Ye}emit(t){let e=this.cur,n=e.th,i=Math.sin(n),r=Math.cos(n),a={x:e.x,y:e.y,z:e.z,th:n,fx:i,fz:r,rx:-r,rz:i,s:this.track.count*Ye,hw:t.hw??6,bank:t.bank??gt((t.k||0)*5,-.1,.1),surf:t.surf??Wt.DIRT,edgeL:t.edgeL??Dt.OPEN,edgeR:t.edgeR??Dt.OPEN,gap:!!t.gap,hole:!1,fork:t.fork||0,floorY:t.floorY??e.y-30,ford:!!t.ford,waterY:t.waterY??-999,bridge:!!t.bridge,tunnel:!!t.tunnel,k:t.k||0,hairpin:!!t.hairpin,ramp:t.ramp||0,piece:this._piece,lanes:t.lanes||null,bridgeSway:0,bump:null,causeway:!!t.causeway,ledge:t.ledge||0,plaza:!!t.plaza,pud:t.pud||null,stream:!!t.stream,kind:t.kind||""};return this.track.push(a),e.th+=(t.k||0)*Ye,e.x+=i*Ye,e.z+=r*Ye,e.y+=(t.grade||0)*Ye,a}begin(t,e={}){let n={id:this.pieceId++,type:t,i0:this.track.count,i1:0,s0:this.s,s1:0,seed:this.rng.int(1,1e9),pickups:[],set:null,...e};return this._piece=n,n}end(t){return t.i1=this.track.count-1,t.s1=this.s,this.pieces.push(t),this._piece=null,this.lastType=t.type,t}edgePick(t){return this.rng.weighted([{w:5,v:Dt.OPEN},{w:2.5,v:Dt.WALL},{w:1+t*2,v:Dt.CLIFF}])}homeGrade(){return gt(-this.cur.y*.004,-.05,.05)}coinLine(t,e,n,i,r=4){for(let a=e;a<=n;a+=r)t.pickups.push({kind:"coin",s:a,lat:i(a),y:.9})}straight(t,e=this.rng.range(34,70),n=0){let i=this.begin("straight"),r=this.rng,a=this.edgePick(t*.6),o=this.edgePick(t*.6),l=r.range(5.8,6.8),h=this.homeGrade(),c=r.range(.02,.07),f=r.range(0,6);for(let u=0;u<e;u++)this.emit({hw:l,grade:h+n+Math.sin(u/e*Math.PI*2+f)*c,edgeL:a,edgeR:o,surf:r.chance(.04)?Wt.MUD:Wt.DIRT});let d=r.range(-3,3);return this.coinLine(i,i.s0+8,i.s0+e-8,u=>d+Math.sin(u*.08)*2.2,4),r.chance(.25)&&i.pickups.push({kind:"nitro",s:i.s0+e*.6,lat:-d,y:1}),this.vDesign=Ln(this.vDesign,e),this.end(i)}curve(t,e=!1){let n=this.begin("curve"),i=this.rng,r=i.range(5.8,6.6),a=e?i.range(28,42):le(i.range(58,100),i.range(32,54),t);a=this.val.checkTurn(a,r);let o=i.range(.45,1.15),l=this.val.turnDir(this.cur.th,o,i.sign()),h=Math.round(o*a),c=l/a,f=l>0?"edgeR":"edgeL",d=l>0?"edgeL":"edgeR",u=i.chance(.3+t*.3)?Dt.CLIFF:i.chance(.5)?Dt.WALL:Dt.OPEN,g=this.homeGrade()+i.range(-.03,.03);for(let x=0;x<h;x++){let p=Math.min(re(0,.22,x/h),re(0,.22,1-x/h));this.emit({hw:r,k:c*(.35+.65*p)*1.18,grade:g,[f]:u,[d]:Dt.OPEN})}return this.coinLine(n,n.s0+6,n.s1-6,x=>-l*3*Math.sin((x-n.s0)/h*Math.PI),5),this.vDesign=Math.min(Ln(this.vDesign,h*.3),bs(a)),n.radius=a,n.dir=l,this.end(n)}sbend(t){return this.curve(t,this.rng.chance(t)),this.curve(t,!1)}hairpin(t,e=null){let n=this.begin("brakezone"),i=this.rng;for(let m=0;m<26;m++)this.emit({hw:6.2+m*.04,grade:this.homeGrade()});n.hint="hairpin",this.end(n);let r=this.begin("hairpin"),a=7.2,o=this.val.checkTurn(i.range(19,24),a),l=this.cur.th>.15?-i.range(.5,.9):this.cur.th<-.15?i.range(.5,.9):i.sign()*i.range(.5,.9),h=Math.abs(l-this.cur.th),c=Math.sign(l-this.cur.th),f=Math.round(h*o),d=c/o,u=c>0?"edgeR":"edgeL",g=c>0?"edgeL":"edgeR",x=i.chance(.55)?Dt.CLIFF:Dt.WALL,p=e??i.range(-.06,.06);for(let m=0;m<f;m++){let v=Math.min(re(0,.18,m/f),re(0,.18,1-m/f));this.emit({hw:a,k:d*(.3+.7*v)*1.12,grade:p,surf:Wt.STONE,[u]:x,[g]:Dt.WALL,hairpin:!0,bank:gt(d*3,-.07,.07)})}return this.coinLine(r,r.s0+4,r.s1-4,()=>-c*3.4,4),this.vDesign=bs(o),r.radius=o,r.dir=c,this.end(r)}crest(t){let e=this.begin("crest"),n=this.rng,i=n.range(24,32),r=n.range(30,40),a=n.range(.07,.11),o=-n.range(.1,.15);for(let l=0;l<i;l++)this.emit({hw:6.2,grade:a*re(0,.4,l/i)});for(let l=0;l<r;l++)this.emit({hw:6.2,grade:le(o,0,re(.5,1,l/r))});return this.coinLine(e,e.s0+i-6,e.s0+i+14,()=>0,3),e.pickups.forEach(l=>l.y=1.6),this.vDesign=Ln(this.vDesign,i+r),this.end(e)}gap(t,e=!1){let n=this.rng,i=e?4:2.2,r=e?.27:n.range(.21,.27),a=(e?le(18,26,t):le(8,17,t)*n.range(.85,1.1))*this.gapMul,o=80,l=1.22,h=r,c,f=0,d=0;for(let C=0;C<8&&(c=this.val.planJump(this.vDesign,h,a,i,e?40:22),d=Cy(h,c.gap,i)*1.1,f=Math.min(33,Ry(h*l,c.gap,i,o)),!(f>=Math.max(d+1.5,27)||h<.11));C++)h*=.92;r=h;let u=this.begin(e?"waterfall":"gap");u.gapLen=c.gap,u.vLaunch=c.vLaunch,u.angle=r;let g=e?6.4:6,x=this.cur.y-(e?42:30);for(let C=0;C<c.runup;C++)this.emit({hw:g,grade:0,edgeL:Dt.OPEN,edgeR:Dt.OPEN,floorY:C>c.runup-6?x:void 0});let p=11;for(let C=0;C<p;C++){let w=Math.tan(r)*re(0,1,(C+1)/p);this.emit({hw:g,grade:w,surf:Wt.STONE,ramp:w,edgeL:Dt.CLIFF,edgeR:Dt.CLIFF,floorY:x})}u.lipS=this.s;let m=this.cur.y,v=Math.round(c.gap);for(let C=0;C<v;C++){let w=C/v;this.emit({hw:g,gap:!0,grade:-i/v,floorY:x,edgeL:Dt.CLIFF,edgeR:Dt.CLIFF})}u.landS=this.s;for(let C=0;C<o;C++)this.emit({hw:g+.8,grade:le(-.27,0,re(.3,1,C/o)),surf:C<10?Wt.STONE:Wt.DIRT,edgeL:C<6?Dt.CLIFF:Dt.OPEN,edgeR:C<6?Dt.CLIFF:Dt.OPEN,floorY:C<8?x:void 0});let y=(u.vCap-1)*1,_=r;for(let C=2;C<v+14;C+=2.5){let w=Zh(y,r*1.2,C);if(w<-i-3)break;u.pickups.push({kind:"coin",s:u.lipS+C,lat:0,yAbs:m+w+1.1})}return e&&u.pickups.push({kind:"relic",s:u.lipS+v*.55,lat:0,yAbs:m+Zh(y,r*1.2,v*.55)+1.3}),u.vCap=Math.max(f,d+1.5),u.vNeed=d,this.vDesign=Ln(c.vLaunch*.8,o),this.sinceGap=0,this.end(u)}bridge(t,e=!1){let n=this.rng,i=Math.round(e?n.range(80,100):n.range(44,74)),r=this.begin("bridgeApproach");for(let u=0;u<14;u++)this.emit({hw:5.8-u*.17,grade:0,edgeL:Dt.WALL,edgeR:Dt.WALL,surf:Wt.STONE});this.end(r);let a=this.begin(e?"bridgeCollapse":"bridge"),o=this.cur.y-n.range(34,48),l=this.cur.y,h=Math.min(2.2,i*.025),c=e?0:n.chance(.4)?n.sign()*n.range(.002,.005):0,f=0;for(let u=0;u<i;u++){let g=(u+1)/i,x=-Math.sin(g*Math.PI)*h;this.emit({hw:3.3,grade:(x-f)/Ye,bridge:!0,surf:Wt.PLANK,edgeL:Dt.CLIFF,edgeR:Dt.CLIFF,floorY:o,k:c,bank:0}),f=x}this.cur.y=l+f,a.floorY=o,this.coinLine(a,a.s0+5,a.s1-5,()=>0,3.5),e&&a.pickups.push({kind:"relic",s:a.s0+i*.7,lat:0,y:1.1}),a.collapse=e,this.end(a);let d=this.begin("bridgeExit");for(let u=0;u<14;u++)this.emit({hw:3.5+u*.18,grade:0,edgeL:Dt.WALL,edgeR:Dt.WALL,surf:Wt.STONE});return this.end(d),this.vDesign=Math.min(this.vDesign,26),a}fork(t){let e=this.rng,n=this.begin("fork"),i=150,r=4.5,a=r+e.range(5,7.5);n.danger=e.sign();let o=this.homeGrade();for(let h=0;h<i;h++){let c=h/i,f=a*Math.min(re(0,.24,c),re(0,.24,1-c)),d=f>.05,u=Dt.CLIFF;this.emit({hw:d?r+(1-Math.min(1,f/a))*1.5:6,fork:d?f:0,grade:o,bank:0,edgeL:n.danger<0?u:Dt.WALL,edgeR:n.danger>0?u:Dt.WALL,surf:Wt.DIRT})}let l=n.s0+i/2;n.forkO=a,n.hazards=[];for(let h=n.s0+36;h<n.s0+i-36;h+=4)n.pickups.push({kind:"coin",s:h,lat:-n.danger*a,y:.9});for(let h=n.s0+34;h<n.s0+i-34;h+=2.5)n.pickups.push({kind:"coin",s:h,lat:n.danger*a+Math.sin(h*.3)*1.2,y:.9,value:2});n.pickups.push({kind:"relic",s:l+12,lat:n.danger*a,y:1.1,rare:!0});for(let h=0;h<4;h++)n.hazards.push({s:n.s0+44+h*14+e.range(-3,3),lat:n.danger*a+e.pick([-1.6,1.6,0])});return this.val.stats.forks++,this.vDesign=Math.min(Ln(this.vDesign,i),30),this.end(n)}ford(t,e=!1){let n=this.rng,i=this.begin(e?"croc":"ford"),r=e?70:44,a=e?7:6.4,o=this.cur.y,l=e?1.2:.85,h=o-l+(e?.75:.5),c=0;for(let f=0;f<r;f++){let d=(f+1)/r,u=-l*re(0,.3,d)*re(0,.3,1-d);this.emit({hw:a,grade:(u-c)/Ye,ford:!0,waterY:h,surf:d>.15&&d<.85?Wt.WATER:Wt.MUD,floorY:o-30}),c=u}return this.cur.y=o+c,i.waterY=h,this.coinLine(i,i.s0+6,i.s1-6,f=>Math.sin(f*.2)*3.4,4),e&&i.pickups.push({kind:"nitro",s:i.s1-4,lat:0,y:1}),this.vDesign=Math.min(this.vDesign,22),this.end(i)}colonnade(t,e){let n=this.rng,i=this.begin(e),r=e==="blades"?92:e==="statue"?120:150,a=e==="statue"?6.8:e==="blades"?5:6.6;for(let o=0;o<r;o++)this.emit({hw:a,grade:e==="blades"?-.02:this.homeGrade(),edgeL:Dt.WALL,edgeR:Dt.WALL,surf:Wt.STONE,tunnel:e==="blades"&&o>6&&o<r-6});return e!=="pillars"&&this.coinLine(i,i.s0+8,i.s1-8,()=>0,5),e==="statue"&&(i.side=n.sign()),this.vDesign=Ln(this.vDesign,r),this.end(i)}templeStart(){let t=this.begin("temple");for(let e=0;e<70;e++)this.emit({hw:e<30?8:le(8,6,re(30,70,e)),grade:0,edgeL:Dt.WALL,edgeR:Dt.WALL,surf:e<50?Wt.STONE:Wt.DIRT});return this.vDesign=18,t.valid=!0,this.end(t)}plaza(t){let e=this.rng,n=this.begin("plaza"),i=Math.round(e.range(78,96));for(let r=0;r<i;r++){let a=r/i,o=re(0,.22,a)*re(0,.22,1-a);this.emit({hw:6.2+o*5.6,grade:0,edgeL:Dt.WALL,edgeR:Dt.WALL,surf:Wt.STONE,plaza:o>.6})}n.fountainS=n.s0+i/2;for(let r=0;r<6.28;r+=.45)n.pickups.push({kind:"coin",s:n.fountainS+Math.cos(r)*6.4,lat:Math.sin(r)*6.4,y:.9});return e.chance(.4)&&n.pickups.push({kind:"nitro",s:n.s1-10,lat:e.range(-4,4),y:1}),n.decor="plaza",this.vDesign=Math.min(Ln(this.vDesign,i),27),this.end(n)}causeway(t){let e=this.rng,n=this.begin("causeway"),i=Math.round(e.range(90,130)),r=this.cur.y,a=r-e.range(2.6,3.4),o=e.chance(.5)?e.range(.002,.005):0,l=o?this.val.turnDir(this.cur.th,o*i,e.sign())*o:0,h=0;for(let c=0;c<i;c++){let f=(c+1)/i,d=Math.sin(f*Math.PI)*1.2;this.emit({hw:5.6,grade:(d-h)/Ye,k:l,edgeL:Dt.WALL,edgeR:Dt.WALL,surf:Wt.STONE,causeway:!0,waterY:a}),h=d}return this.cur.y=r+h,n.waterY=a,this.coinLine(n,n.s0+6,n.s1-6,c=>Math.sin(c*.12)*2.6,4),this.vDesign=Ln(this.vDesign,i),this.end(n)}ledge(t,e=!1){let n=this.rng,i=this.begin(e?"fallsLedge":"ledge"),r=Math.round(n.range(100,140)),a=n.sign(),o=n.range(.003,.0055),l=this.val.turnDir(this.cur.th,o*r*.87,-a),h=l*o,c=e?5.4:5.2,f=this.homeGrade()+n.range(-.035,.035),d=a<0?"edgeL":"edgeR",u=a<0?"edgeR":"edgeL";if(i.falls=[],e)for(let g=22;g<r-20;g+=n.range(30,44))i.falls.push(Math.round(g));for(let g=0;g<r;g++){let x=e&&i.falls.some(m=>Math.abs(g-m)<3.5),p=Math.min(re(0,.15,g/r),re(0,.15,1-g/r));this.emit({hw:c,k:h*p,grade:f,[d]:Dt.WALL,[u]:Dt.CLIFF,ledge:a,surf:x?Wt.WATER:Math.sin(g*.13)>.55?Wt.STONE:Wt.DIRT,stream:x,floorY:this.cur.y-40})}return i.side=a,this.coinLine(i,i.s0+8,i.s1-8,()=>a*1.8,4),e&&i.pickups.push({kind:"relic",s:i.s0+i.falls[0]+.5,lat:a*2.4,y:1.2}),this.vDesign=Math.min(Ln(this.vDesign,r),31),this.end(i)}mudflat(t){let e=this.rng,n=this.begin("mudflat"),i=Math.round(e.range(80,110)),r=[],a=this.homeGrade();for(let o=0;o<9;o++)r.push({s:this.s+e.range(12,i-10),lat:e.range(-6.5,6.5),r:e.range(1.8,3.6)});n.puddles=r;for(let o=0;o<i;o++){let l=o/i,h=re(0,.2,l)*re(0,.2,1-l);this.emit({hw:6.2+h*3.4,grade:a+Math.sin(o*.09)*.02,surf:Wt.MUD,edgeL:Dt.OPEN,edgeR:Dt.OPEN,pud:r})}return this.coinLine(n,n.s0+8,n.s1-8,o=>Math.sin(o*.07)*4.5,4),this.vDesign=Math.min(Ln(this.vDesign,i),24),this.end(n)}switchback(t){let e=this.cur.y<20?.055:-.05;return this.hairpin(t,e),this.straight(t,24,e*.6),this.hairpin(t,e)}nextSetPiece(){if(this.forced){let t=this.forced;return this.forced=null,t}if(!this.bag.length){this.bag=Jh.slice();for(let t=this.bag.length-1;t>0;t--){let e=this.rng.int(0,t);[this.bag[t],this.bag[e]]=[this.bag[e],this.bag[t]]}}return this.bag.pop()}emitSetPiece(t,e){switch(t){case"bridgeCollapse":{let n=this.bridge(e,!0);return n.set={type:t},n}case"croc":{let n=this.ford(e,!0);return n.set={type:t},n}case"waterfall":{let n=this.gap(e,!0);return n.set={type:t},n}default:{let n=this.colonnade(e,t);return n.set={type:t},n}}}generateNext(){let t=this.s,e=gt(t/4500,0,1),n=this.rng;if(this.track.count===0)return this.templeStart();let i=this.pieces.length;if(t>=this.nextSet||this.forced){let o=this.nextSetPiece();this.straight(e,24);let l=this.emitSetPiece(o,e);return this.nextSet=t+le(400,230,e)+n.range(-40,60),this.straight(e,22),this._check(i),l}this.sinceGap++;let r=n.weighted([{w:3,v:"straight"},{w:4,v:"curve"},{w:1.5+e*2,v:"sbend"},{w:.7+e*1.4,v:"hairpin"},{w:1.6,v:"crest"},{w:this.sinceGap>2?1.5+e*1.5:0,v:"gap"},{w:1.1,v:"bridge"},{w:this.lastType==="fork"?0:.9+e*.4,v:"fork"},{w:.7,v:"ford"},{w:this.lastType==="plaza"?0:.8,v:"plaza"},{w:this.lastType==="causeway"?0:.8,v:"causeway"},{w:this.lastType==="ledge"?0:1,v:"ledge"},{w:this.lastType==="fallsLedge"?0:.7,v:"fallsLedge"},{w:this.lastType==="mudflat"?0:.8,v:"mudflat"},{w:.5+e*.8,v:"switchback"}]);if(r==="fallsLedge"){let o=this.ledge(e,!0);return this._check(i),o}let a=this[r](e);return this._check(i),a}_check(t){for(let e=t;e<this.pieces.length;e++){let n=this.pieces[e],i=[];for(let r=n.i0;r<=n.i1;r++)i.push(this.track.get(r));n.valid=this.val.checkSamples(i)}}ensure(t){let e=0;for(;this.s<t&&e<50;)this.generateNext(),e++;return e}};var Lt={};function Dn(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function Pe(s,t=!0,e=!0){let n=new oo(s);return t&&(n.wrapS=n.wrapT=fs),n.anisotropy=4,e&&(n.colorSpace=sn),n.needsUpdate=!0,n}function Py(s,t,e){let n=new ce(e),i=new Float32Array(t*t);for(let a=0;a<i.length;a++)i[a]=n.next();let r=new Float32Array(s*s);for(let a=0;a<s;a++)for(let o=0;o<s;o++){let l=o/s*t,h=a/s*t,c=Math.floor(l),f=Math.floor(h),d=l-c,u=h-f,g=d*d*(3-2*d),x=u*u*(3-2*u),p=i[f%t*t+c%t],m=i[f%t*t+(c+1)%t],v=i[(f+1)%t*t+c%t],y=i[(f+1)%t*t+(c+1)%t];r[a*s+o]=(p+(m-p)*g)*(1-x)+(v+(y-v)*g)*x}return r}function Ne(s,t,e=5,n=4){let i=new Float32Array(s*s),r=.5,a=0;for(let o=0;o<e;o++){let l=Py(s,n<<o,t+o*31);for(let h=0;h<i.length;h++)i[h]+=l[h]*r;a+=r,r*=.5}for(let o=0;o<i.length;o++)i[o]/=a;return i}function dn(s,t){let e=Dn(s,s),n=e.getContext("2d"),i=n.createImageData(s,s),r=i.data;for(let a=0;a<s;a++)for(let o=0;o<s;o++){let l=a*s+o,h=t(o,a,l);r[l*4]=h[0],r[l*4+1]=h[1],r[l*4+2]=h[2],r[l*4+3]=h[3]??255}return n.putImageData(i,0,0),e}var Qh=(s,t,e)=>s+(t-s)*e,Le=(s,t,e)=>[Qh(s[0],t[0],e),Qh(s[1],t[1],e),Qh(s[2],t[2],e)],xn=s=>s<0?0:s>1?1:s;function jh(){if(Lt.dirt)return Lt.dirt;let s=512,t=Ne(s,11,6,4),e=Ne(s,77,3,16),n=dn(s,(i,r,a)=>{let o=i/s,l=Math.exp(-Math.pow((o-.3)/.05,2))+Math.exp(-Math.pow((o-.7)/.05,2)),h=e[a]>.72?(e[a]-.72)*3:0,c=Le([128,96,64],[92,70,46],t[a]);c=Le(c,[70,52,36],l*.55),c=Le(c,[168,150,120],h);let f=xn((Math.abs(o-.5)-.38)*9+(t[a]-.5)*2);return c=Le(c,[72,92,40],f*.85),c});return Lt.dirt=Pe(n)}function tu(){if(Lt.stone)return Lt.stone;let s=512,t=Ne(s,5,5,4),e=Ne(s,9,4,8),n=new ce(3),i=Dn(s,s),r=i.getContext("2d"),a=dn(s,(l,h,c)=>{let f=t[c],d=Le([118,110,92],[86,82,70],f);return d=Le(d,[64,86,44],xn((e[c]-.55)*3)),d});r.drawImage(a,0,0),r.strokeStyle="rgba(30,26,20,0.85)",r.lineWidth=5;let o=6;for(let l=0;l<o;l++){let h=l*s/o;r.beginPath(),r.moveTo(0,h),r.lineTo(s,h),r.stroke();let c=l%2*.5;for(let f=0;f<4;f++){let d=(f+c)/4*s+n.range(-10,10);r.beginPath(),r.moveTo(d,h),r.lineTo(d,h+s/o),r.stroke()}}r.strokeStyle="rgba(90,120,50,0.5)",r.lineWidth=2;for(let l=0;l<140;l++){r.beginPath();let h=n.range(0,s),c=n.range(0,s);r.moveTo(h,c),r.lineTo(h+n.range(-6,6),c+n.range(-6,6)),r.stroke()}return Lt.stone=Pe(i)}function eu(){if(Lt.ground)return Lt.ground;let s=512,t=Ne(s,21,6,4),e=Ne(s,41,4,12),n=dn(s,(i,r,a)=>{let o=Le([56,74,30],[92,98,40],t[a]);o=Le(o,[86,66,40],xn((e[a]-.55)*4)),o=Le(o,[118,128,56],xn((t[a]-.7)*5)*.5);let l=e[a]>.68?.4:0;return o=Le(o,[130,90,40],l*.5),o});return Lt.ground=Pe(n)}function Yn(){if(Lt.rock)return Lt.rock;let s=512,t=Ne(s,61,6,3),e=Ne(s,62,4,10),n=dn(s,(i,r,a)=>{let o=.5+.5*Math.sin(r/s*Math.PI*14+t[a]*6),l=Le([92,84,72],[140,128,108],t[a]*.7+o*.3);return l=Le(l,[58,84,40],xn((e[a]-.6)*3.5)*.8),l=Le(l,[40,36,30],xn((.3-t[a])*4)),l});return Lt.rock=Pe(n)}function oi(){if(Lt.ruin)return Lt.ruin;let s=512,t=Ne(s,71,6,4),e=Ne(s,72,5,6),n=new ce(9),i=dn(s,(o,l,h)=>{let c=Le([150,138,112],[104,98,84],t[h]);return c=Le(c,[70,96,44],xn((e[h]-.5)*3)*.9),c}),r=Dn(s,s),a=r.getContext("2d");a.drawImage(i,0,0),a.strokeStyle="rgba(36,30,22,0.8)",a.lineWidth=4;for(let o=0;o<=4;o++){let l=o*s/4;a.beginPath(),a.moveTo(0,l),a.lineTo(s,l),a.stroke();for(let h=0;h<3;h++){let c=(h+o%2*.5)/3*s;a.beginPath(),a.moveTo(c,l),a.lineTo(c,l+s/4),a.stroke()}}a.strokeStyle="rgba(40,34,26,0.55)",a.lineWidth=3;for(let o=0;o<10;o++){let l=n.range(20,s-60),h=n.range(20,s-60),c=n.range(18,34);a.strokeRect(l,h,c,c),a.beginPath(),a.arc(l+c/2,h+c/2,c/4,0,Math.PI*2),a.stroke()}return Lt.ruin=Pe(r)}function nu(){if(Lt.planks)return Lt.planks;let s=256,t=Ne(s,81,4,4),e=dn(s,(n,i,r)=>{let a=.5+.5*Math.sin(i*.35+t[r]*10),o=Le([118,82,48],[78,54,32],a*.6+t[r]*.4);return(n<4||n>s-4)&&(o=[40,28,18]),o});return Lt.planks=Pe(e)}function iu(){if(Lt.crate)return Lt.crate;let s=256,t=Ne(s,91,4,4),e=Dn(s,s),n=e.getContext("2d");return n.drawImage(dn(s,(i,r,a)=>{let o=.5+.5*Math.sin(i*.25+t[a]*8);return Le([168,124,72],[118,82,46],o*.5+t[a]*.5)}),0,0),n.strokeStyle="#3a2614",n.lineWidth=10,n.strokeRect(5,5,s-10,s-10),n.lineWidth=12,n.beginPath(),n.moveTo(10,10),n.lineTo(s-10,s-10),n.stroke(),n.fillStyle="rgba(40,24,12,0.7)",n.font="bold 30px serif",n.textAlign="center",n.fillText("FRAGILE",s/2,s/2+60),Lt.crate=Pe(e,!1)}function su(s=[74,88,52]){let t="paint"+s.join();if(Lt[t])return Lt[t];let e=512,n=Ne(e,101,5,4),i=new ce(5),r=Ne(e,102,4,16),a=Dn(e,e),o=a.getContext("2d");o.drawImage(dn(e,(l,h,c)=>{let f=Le(s,s.map(d=>d*.7),n[c]);return f=Le(f,[120,66,34],xn((r[c]-.74)*6)),f=Le(f,[150,130,100],xn((n[c]-.72)*4)*.5),f}),0,0),o.strokeStyle="rgba(200,190,160,0.35)",o.lineWidth=1;for(let l=0;l<220;l++){let h=i.range(0,e),c=i.range(0,e),f=i.range(0,6.28),d=i.range(4,26);o.beginPath(),o.moveTo(h,c),o.lineTo(h+Math.cos(f)*d,c+Math.sin(f)*d),o.stroke()}return Lt[t]=Pe(a)}function ru(){if(Lt.leather)return Lt.leather;let s=256,t=Ne(s,111,5,8);return Lt.leather=Pe(dn(s,(e,n,i)=>Le([92,52,28],[140,86,44],t[i])))}function au(){if(Lt.tire)return Lt.tire;let s=Dn(256,64),t=s.getContext("2d");t.fillStyle="#1d1a17",t.fillRect(0,0,256,64),t.fillStyle="#0c0b0a";for(let e=0;e<16;e++){let n=e*16;t.beginPath(),t.moveTo(n,0),t.lineTo(n+9,0),t.lineTo(n+3,30),t.lineTo(n+9,64),t.lineTo(n,64),t.lineTo(n-6,30),t.fill()}t.fillStyle="rgba(110,80,50,0.35)";for(let e=0;e<300;e++)t.fillRect(Math.random()*256,Math.random()*64,2,2);return Lt.tire=Pe(s)}function Fo(s="broad"){let t="leaf"+s;if(Lt[t])return Lt[t];let e=256,n=Dn(e,e),i=n.getContext("2d"),r=new ce(s.length*13),a=["#2f5a1e","#3d6e24","#4e7d2a","#27491a","#5d8a30"];if(s==="frond"){i.strokeStyle="#3a5a20",i.lineWidth=4,i.beginPath(),i.moveTo(e/2,e),i.lineTo(e/2,0),i.stroke();for(let l=0;l<26;l++){let h=e-l*(e/26),c=Math.sin(l/26*Math.PI)*e*.48+10;for(let f of[-1,1])i.fillStyle=a[r.int(0,4)],i.beginPath(),i.moveTo(e/2,h),i.quadraticCurveTo(e/2+f*c*.6,h-18,e/2+f*c,h-30),i.quadraticCurveTo(e/2+f*c*.5,h-8,e/2,h-6),i.fill()}}else if(s==="vine")for(let l=0;l<6;l++){let h=r.range(20,e-20);i.strokeStyle="#3b4f1c",i.lineWidth=3,i.beginPath(),i.moveTo(h,0);for(let c=0;c<e;c+=16)i.lineTo(h+Math.sin(c*.05+l)*8,c);i.stroke();for(let c=8;c<e*r.range(.6,1);c+=10)i.fillStyle=a[r.int(0,4)],i.beginPath(),i.ellipse(h+Math.sin(c*.05+l)*8+r.range(-8,8),c,7,4,r.range(0,3),0,6.3),i.fill()}else for(let l=0;l<70;l++){let h=r.range(30,e-30),c=r.range(30,e-30),f=r.range(0,6.28),d=r.range(18,40);i.save(),i.translate(h,c),i.rotate(f),i.fillStyle=a[r.int(0,4)],i.beginPath(),i.moveTo(0,-d),i.quadraticCurveTo(d*.55,0,0,d),i.quadraticCurveTo(-d*.55,0,0,-d),i.fill(),i.strokeStyle="rgba(160,190,90,0.35)",i.lineWidth=1.2,i.beginPath(),i.moveTo(0,-d),i.lineTo(0,d),i.stroke(),i.restore()}let o=Pe(n,!1);return Lt[t]=o}function Qr(){if(Lt.bark)return Lt.bark;let s=256,t=Ne(s,131,5,4);return Lt.bark=Pe(dn(s,(e,n,i)=>{let r=.5+.5*Math.sin(e/s*Math.PI*18+t[i]*5),a=Le([62,50,36],[104,88,66],r*.6+t[i]*.4);return a=Le(a,[70,96,44],xn((t[i]-.6)*3)),a}))}function Ss(){if(Lt.wn)return Lt.wn;let s=256,t=Ne(s,141,4,6),e=dn(s,(n,i,r)=>{let a=t[i*s+(n+1)%s]-t[r],o=t[(i+1)%s*s+n]-t[r];return[128+a*900,128+o*900,255]});return Lt.wn=Pe(e,!0,!1)}function zo(){if(Lt.streak)return Lt.streak;let s=256,t=Ne(s,151,4,8),e=dn(s,(n,i,r)=>{let a=t[i%s*s+n],o=Math.pow(xn(.4+.5*Math.sin(n*.4+t[n]*30)+a*.4),2);return[210+o*45,230+o*25,240,90+o*160]});return Lt.streak=Pe(e,!0)}function Pi(){if(Lt.dot)return Lt.dot;let s=Dn(64,64),t=s.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Lt.dot=Pe(s,!1)}function Sf(){if(Lt.shaft)return Lt.shaft;let s=Dn(128,256),t=s.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"rgba(255,230,170,0.9)"),e.addColorStop(1,"rgba(255,230,170,0)"),t.fillStyle=e,t.fillRect(0,0,128,256);let n=t.createLinearGradient(0,0,128,0);return n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.5,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,1)"),t.globalCompositeOperation="destination-out",t.fillStyle=n,t.fillRect(0,0,128,256),Lt.shaft=Pe(s,!1)}function wf(s){let t="glyph"+s;if(Lt[t])return Lt[t];let e=Dn(256,256),n=e.getContext("2d");if(n.drawImage(oi().image,0,0,256,256),n.lineWidth=12,n.lineCap="round",s==="safe"){n.strokeStyle="#e8c35a",n.fillStyle="#e8c35a",n.beginPath(),n.arc(128,128,38,0,6.3),n.fill();for(let i=0;i<12;i++){let r=i/12*6.283;n.beginPath(),n.moveTo(128+Math.cos(r)*56,128+Math.sin(r)*56),n.lineTo(128+Math.cos(r)*86,128+Math.sin(r)*86),n.stroke()}}else n.fillStyle="#d8462b",n.beginPath(),n.moveTo(128,30),n.lineTo(226,210),n.lineTo(30,210),n.closePath(),n.fill(),n.fillStyle="#1c140e",n.beginPath(),n.arc(128,132,34,0,6.3),n.fill(),n.fillRect(108,150,40,30),n.fillStyle="#d8462b",n.beginPath(),n.arc(114,128,9,0,6.3),n.arc(142,128,9,0,6.3),n.fill();return Lt[t]=Pe(e,!1)}function ou(s,t,e,n){let i=new Float32Array(t*t);for(let o=0;o<t;o++)for(let l=0;l<t;l++){let h=0;for(let c=-1;c<=1;c++)for(let f=-1;f<=1;f++)h+=s[(o+c+t)%t*t+(l+f+t)%t];i[o*t+l]=h/9}let r=dn(t,(o,l,h)=>{let c=i[l*t+(o-1+t)%t],f=i[l*t+(o+1)%t],d=i[(l-1+t)%t*t+o],u=i[(l+1)%t*t+o],g=(c-f)*e,x=(u-d)*e,p=1,m=Math.hypot(g,x,p);return g/=m,x/=m,p/=m,[128+g*127,128+x*127,128+p*127]}),a=n?dn(t,(o,l,h)=>{let c=xn(n(i[h],h))*255;return[c,c,c]}):null;return{nc:r,rc:a}}function bf(s,t=!1,e=1){let n=s.width,i=s.getContext("2d"),r=i.getImageData(0,0,n,n).data,a=new Float32Array(n*n);for(let o=0;o<n*n;o++){let l=(r[o*4]*.3+r[o*4+1]*.55+r[o*4+2]*.15)/255;t&&(l=1-l),a[o]=Math.pow(l,e)}return a}function ke(s,t={}){let e="pbr_"+s;if(Lt[e])return Lt[e];let n={dirt:jh,stone:tu,ground:eu,rock:Yn,ruin:oi,planks:nu,crate:iu,leather:ru,bark:Qr,tire:au}[s],i=n?n().image:t.canvas,r=bf(i,!!t.invert,t.gamma||1);if(i.width!==i.height){let g=Dn(256,256);g.getContext("2d").drawImage(i,0,0,256,256),r=bf(g,!!t.invert,t.gamma||1)}let a=Math.round(Math.sqrt(r.length)),o=t.detail?Ne(a,t.detail,4,16):null;if(o)for(let u=0;u<r.length;u++)r[u]=r[u]*.8+o[u]*.2;let l=t.rough??.85,h=t.roughVar??.15,{nc:c,rc:f}=ou(r,a,t.strength??4,u=>l+(.5-u)*h*2),d={normalMap:Pe(c,!0,!1),roughnessMap:Pe(f,!0,!1)};if(n){let u=n();d.normalMap.repeat.copy(u.repeat),d.roughnessMap.repeat.copy(u.repeat)}return Lt[e]=d}function Ef(){if(Lt.paintPBR)return Lt.paintPBR;let s=512,t=Ne(s,201,5,4),e=Ne(s,202,4,24),n=new ce(77),i=new Float32Array(s*s),r=new Float32Array(s*s);for(let l=0;l<s*s;l++){let h=e[l]>.74?-.6:0;i[l]=.5+(t[l]-.5)*.15+h,r[l]=.5+(e[l]>.74?.35:0)+xn((t[l]-.62)*2)*.25}for(let l=0;l<260;l++){let h=n.range(0,s),c=n.range(0,s),f=n.range(0,6.28),d=n.range(6,40);for(let u=0;u<d;u++){let g=(Math.floor(h+Math.cos(f)*u)%s+s)%s,x=(Math.floor(c+Math.sin(f)*u)%s+s)%s;i[x*s+g]-=.25,r[x*s+g]=.95}}let{nc:a}=ou(i,s,3.2,null),o=dn(s,(l,h,c)=>{let f=xn(r[c])*255;return[f,f,f]});return Lt.paintPBR={normalMap:Pe(a,!0,!1),roughnessMap:Pe(o,!0,!1)}}function Bo(s){let t="grain"+s;if(Lt[t])return Lt[t];let e=256,n=Ne(e,s.length*31+5,5,s==="canvas"?32:8),i=new ce(s.length),r=new Float32Array(e*e);for(let l=0;l<e;l++)for(let h=0;h<e;h++){let c=l*e+h,f=n[c];s==="canvas"&&(f=.5+.25*(Math.sin(h*1.6)+Math.sin(l*1.6))*.5+(n[c]-.5)*.4),s==="metal"&&(f=.5+(n[c]-.5)*.6+Math.sin(h*.9+n[c]*3)*.04),s==="rubber"&&(f=.5+(n[c]-.5)*.3),r[c]=f}let{nc:a,rc:o}=ou(r,e,s==="canvas"?2.5:1.6,l=>(s==="metal"?.42:s==="rubber"?.9:.95)+(.5-l)*.3);return Lt[t]={normalMap:Pe(a,!0,!1),roughnessMap:Pe(o,!0,!1)}}function lu(s=0){let t="gauge"+s;if(Lt[t])return Lt[t];let e=Dn(128,128),n=e.getContext("2d");n.fillStyle="#e9dfc4",n.beginPath(),n.arc(64,64,62,0,6.3),n.fill(),n.strokeStyle="#2a2016",n.lineWidth=3;for(let r=0;r<=10;r++){let a=Math.PI*(.75+r*.15);n.beginPath(),n.moveTo(64+Math.cos(a)*50,64+Math.sin(a)*50),n.lineTo(64+Math.cos(a)*(r%5?42:36),64+Math.sin(a)*(r%5?42:36)),n.stroke()}n.strokeStyle="#9a2a1a",n.lineWidth=4,n.beginPath();let i=Math.PI*(.9+s*.5);return n.moveTo(64,64),n.lineTo(64+Math.cos(i)*44,64+Math.sin(i)*44),n.stroke(),n.fillStyle="#2a2016",n.beginPath(),n.arc(64,64,6,0,6.3),n.fill(),Lt[t]=Pe(e,!1)}function ge(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new ue,h=0;for(let c=0;c<s.length;++c){let f=s[c],d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.attributes[u]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in f.morphAttributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(f.morphAttributes[u])}if(t){let u;if(e)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,u,c),h+=u}}if(e){let c=0,f=[];for(let d=0;d<s.length;++d){let u=s[d].index;for(let g=0;g<u.count;++g)f.push(u.getX(g)+c);c+=s[d].attributes.position.count}l.setIndex(f)}for(let c in r){let f=Tf(r[c]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,f)}for(let c in a){let f=a[c][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<f;++d){let u=[];for(let x=0;x<a[c].length;++x)u.push(a[c][x][d]);let g=Tf(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Tf(s){let t,e,n,i=-1,r=0;for(let h=0;h<s.length;++h){let c=s[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=c.gpuType),i!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*e}let a=new t(r),o=new ie(a,e,n),l=0;for(let h=0;h<s.length;++h){let c=s[h];if(c.isInterleavedBufferAttribute){let f=l/e;for(let d=0,u=c.count;d<u;d++)for(let g=0;g<e;g++){let x=c.getComponent(d,g);o.setComponent(d+f,g,x)}}else a.set(c.array,l);l+=c.count*e}return i!==void 0&&(o.gpuType=i),o}function jr(s,t,e=.35){return s.onBeforeCompile=n=>{n.uniforms.uTime=t,n.vertexShader=`uniform float uTime;
`+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
      #else
        vec3 ip = vec3(0.0);
      #endif
      float sway = max(position.y, 0.0) * ${e.toFixed(3)} * 0.08;
      transformed.x += sin(uTime * 1.3 + ip.x * 0.37 + ip.z * 0.11 + position.y * 0.4) * sway;
      transformed.z += cos(uTime * 1.1 + ip.z * 0.29 + position.x * 0.5) * sway * 0.7;`)},s.customProgramCacheKey=()=>"wind"+e,s}function Oo(s,t){let e=s.attributes.position.count,n=new Float32Array(e*3);for(let i=0;i<e;i++)n[i*3]=t.r,n[i*3+1]=t.g,n[i*3+2]=t.b;return s.setAttribute("color",new ie(n,3)),s}function Af(s,t,e="x"){let n=s.attributes.position;for(let i=0;i<n.count;i++){let r=n.getY(i);n.setX(i,n.getX(i)+(e==="x"?t*r*r:0)),n.setZ(i,n.getZ(i)+(e==="z"?t*r*r:0))}return s.computeVertexNormals(),s}function Ho(s,t,e){let n=new ce(e),i=s.attributes.position,r=new Map;for(let a=0;a<i.count;a++){let o=`${i.getX(a).toFixed(3)},${i.getY(a).toFixed(3)},${i.getZ(a).toFixed(3)}`,l=r.get(o);l||(l=[n.range(-t,t),n.range(-t,t),n.range(-t,t)],r.set(o,l)),i.setXYZ(a,i.getX(a)+l[0],i.getY(a)+l[1],i.getZ(a)+l[2])}return s.computeVertexNormals(),s}function Rf(s,t,e=0){let n=new Me(s,t,1,3);return n.translate(0,t/2+e,0),n}function Cf(s){let t={},e=jr(new Gt({map:Fo("broad"),alphaTest:.45,side:_e,roughness:.85,vertexColors:!0}),s,.5),n=jr(new Gt({map:Fo("frond"),alphaTest:.4,side:_e,roughness:.8,vertexColors:!0}),s,.7),i=jr(new Gt({map:Fo("vine"),alphaTest:.4,side:_e,roughness:.9}),s,.9),r=(c,f)=>{let d=ke(c,f);return{normalMap:d.normalMap,roughnessMap:d.roughnessMap}},a=new Gt({map:Qr(),roughness:1,side:_e,...r("bark",{strength:6,rough:.95})}),o=new Gt({map:oi(),roughness:1,...r("ruin",{strength:5,rough:.9})}),l=new Gt({map:Yn(),roughness:1,flatShading:!1,...r("rock",{strength:6,rough:.92})}),h=new bt(1,1,1);{let c=new ce(1),f=[],d=new Zt(.34,.72,16,9,4,!0);d.translate(0,8,0),Af(d,.006);{let x=d.attributes.position;for(let p=0;p<x.count;p++){let m=x.getX(p),v=x.getZ(p),y=x.getY(p),_=Math.atan2(v,m),C=1+Math.sin(_*5+y*.4)*.07+Math.sin(_*11-y*.9)*.03;x.setX(p,m*C),x.setZ(p,v*C)}d.computeVertexNormals()}f.push(d);for(let x=0;x<4;x++){let p=x/4*6.28+.4,m=new un;m.moveTo(0,0),m.lineTo(1.9,0),m.quadraticCurveTo(.7,.4,.3,3.2),m.lineTo(0,3.4),m.lineTo(0,0);let v=new mo(m,3);v.computeVertexNormals(),v.translate(.3,0,-.08),v.rotateY(-p),f.push(v)}let u=[];for(let x=0;x<4;x++){let p=x/4*6.28+c.range(-.4,.4),m=c.range(11,13.5),v=c.range(2.6,3.8),y=new or(new A(0,m,0),new A(Math.cos(p)*v*.5,m+1.2,Math.sin(p)*v*.5),new A(Math.cos(p)*v,m+2.6,Math.sin(p)*v));f.push(new $i(y,3,.16,4)),u.push(y.getPoint(1))}u.push(new A(0,16.5,0)),t.treeTrunk={geo:ge(f.map(x=>x.index?x.toNonIndexed():x).map(x=>{for(let p of Object.keys(x.attributes))["position","normal","uv"].includes(p)||x.deleteAttribute(p);return x})),mat:a};let g=[];for(let x of u)for(let p=0;p<6;p++){let m=Rf(c.range(3.2,5.2),c.range(2.8,4.2));m.rotateX(-c.range(.5,1.35)),m.rotateY(c.range(0,6.28)),m.translate(x.x+c.range(-1.4,1.4),x.y+c.range(-1.2,1),x.z+c.range(-1.4,1.4)),Oo(m,new bt().setHSL(.22+c.range(-.04,.04),.5+c.range(-.08,.08),c.range(.28,.5))),g.push(m)}t.treeCanopy={geo:ge(g),mat:e}}{let c=new ce(2),f=[],d=new Zt(.2,.34,9,7,8);d.translate(0,4.5,0),Af(d,.03),t.palmTrunk={geo:d,mat:a};for(let u=0;u<9;u++){let g=new Me(1.3,5.2,1,6);g.translate(0,2.6,0);let x=g.attributes.position;for(let p=0;p<x.count;p++){let m=x.getY(p);x.setZ(p,-m*m*.07)}g.rotateX(-1.1),g.rotateY(u/9*6.28+c.range(-.2,.2)),g.translate(.03*81,9,0),Oo(g,new bt().setHSL(.22+c.range(-.03,.03),.55,c.range(.32,.45))),f.push(g)}t.palmLeaves={geo:ge(f),mat:n}}{let c=new ce(3),f=[];for(let u=0;u<9;u++){let g=new Me(.9,2.6,1,4);g.translate(0,1.3,0);let x=g.attributes.position;for(let p=0;p<x.count;p++){let m=x.getY(p);x.setZ(p,-m*m*.12)}g.rotateY(u/9*6.28+c.range(-.3,.3)),Oo(g,new bt().setHSL(.25+c.range(-.04,.03),.55,c.range(.28,.42))),f.push(g)}t.fern={geo:ge(f),mat:n};let d=[];for(let u=0;u<7;u++){let g=Rf(c.range(2,3),c.range(1.6,2.4),-.3);g.rotateY(u*.9),g.rotateX(c.range(-.3,.3)),Oo(g,new bt().setHSL(.23+c.range(-.03,.03),.5,c.range(.25,.4))),d.push(g)}t.bush={geo:ge(d),mat:e}}{let c=[];for(let f=0;f<3;f++){let d=new Me(3,7,1,4);d.translate(f-1,-3.5,f*.3),c.push(d)}t.vines={geo:ge(c),mat:i}}{let c=new It(2.2,1.3,1.4,2,2,2);Ho(c,.06,4),t.block={geo:c,mat:o}}{let c=[new Zt(.62,.66,5.5,12,3).translate(0,2.75,0),new It(1.8,.5,1.8).translate(0,.25,0),new Zt(.85,.66,.5,12).translate(0,5.6,0)];t.column={geo:Ho(ge(c.map(f=>f.toNonIndexed())),.03,5),mat:o}}{let c=[new It(2.4,3,2.2,3,3,3),new It(2.8,.5,.6).translate(0,.45,1.1),new It(.6,1.1,.7).translate(0,-.2,1.3),new It(1.6,.35,.4).translate(0,-.95,1.15),new It(.5,.35,.3).translate(-.6,0,1.15),new It(.5,.35,.3).translate(.6,0,1.15),new It(3,.7,2.6).translate(0,1.7,0)];t.head={geo:Ho(ge(c.map(f=>f.toNonIndexed())),.05,6).translate(0,1.5,0),mat:o}}{let c=new lr(1.2,1);Ho(c,.28,7),c.scale(1.3,.8,1.1),t.rock={geo:c,mat:l}}{let c=new Zt(.12,.16,1.9,6).translate(0,.95,0);t.post={geo:c,mat:new Gt({color:"#5a4630",roughness:.9})}}return t.mats={leafBroad:e,leafFrond:n,vineMat:i,bark:a,ruin:o,rock:l},t}var Ee=class{constructor(t,e,n,i={}){this.mesh=new Ti(e.geo,e.mat,n),this.mesh.instanceMatrix.setUsage(Wn),this.mesh.castShadow=!!i.shadow,this.mesh.receiveShadow=i.receive!==!1,this.mesh.frustumCulled=!1,this.cap=n,this.free=[];for(let a=n-1;a>=0;a--)this.free.push(a);let r=new te().makeScale(0,0,0);for(let a=0;a<n;a++)this.mesh.setMatrixAt(a,r);i.color&&(this.mesh.instanceColor=new ms(new Float32Array(n*3).fill(1),3)),this.zero=r,this.dirty=!0,this.used=0,this.alive=new Uint8Array(n),this.hi=0,this.mesh.count=0,t.add(this.mesh)}add(t,e){let n=this.free.pop();return n===void 0?-1:(this.mesh.setMatrixAt(n,t),e&&this.mesh.instanceColor&&this.mesh.setColorAt(n,e),this.alive[n]=1,n>=this.hi&&(this.hi=n+1),this.dirty=!0,this.used++,n)}set(t,e){t>=0&&(this.mesh.setMatrixAt(t,e),this.dirty=!0)}release(t){if(!(t<0)){for(this.mesh.setMatrixAt(t,this.zero),this.free.push(t),this.alive[t]=0;this.hi>0&&!this.alive[this.hi-1];)this.hi--;this.dirty=!0,this.used--}}flush(){this.dirty&&(this.mesh.count=this.hi,this.free.sort((t,e)=>e-t),this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.dirty=!1)}};var Vo={},ta=s=>s.index?s.toNonIndexed():s;function If(s){s=ta(s);for(let t of Object.keys(s.attributes))["position","normal","uv"].includes(t)||s.deleteAttribute(t);return s.attributes.uv||s.setAttribute("uv",new ie(new Float32Array(s.attributes.position.count*2),2)),s}function Go(s,t){let e=s.attributes.position.count,n=new Float32Array(e*3);for(let i=0;i<e;i++)n[i*3]=t.r,n[i*3+1]=t.g,n[i*3+2]=t.b;return s.setAttribute("color",new ie(n,3)),s}function Lf(s){let t=ke("ruin",{strength:5,rough:.9}),e=new Gt({map:oi(),roughness:1,normalMap:t.normalMap,roughnessMap:t.roughnessMap}),n={};{let i=[[0,0],[.16,0],[.16,.08],[.1,.12],[.09,.2],[.15,.36],[.16,.46],[.1,.6],[.075,.7],[.12,.76],[.14,.8],[0,.8]].map(([r,a])=>new Z(r,a));n.baluster={geo:new wn(i,10),mat:e}}{let i=new It(1,.16,.36);i.translate(0,.08,0),n.rail={geo:i,mat:e}}{let i=ge([new It(.5,1,.5).translate(0,.5,0),new It(.62,.14,.62).translate(0,1.04,0),new be(.2,10,6).translate(0,1.26,0)].map(If));n.newel={geo:i,mat:e}}n.lily={geo:(()=>{let i=new En(.55,14,.25,Math.PI*2-.5).rotateX(-Math.PI/2);Go(i,new bt("#4f7a2e"));let r=new an(.12,.16,6).translate(.1,.08,.05);return Go(r,new bt("#f2c4d0")),ge([ta(i),ta(r)])})(),mat:new Gt({vertexColors:!0,roughness:.45,side:_e})};{let i=new ce(31),r=[];for(let a=0;a<11;a++){let o=i.range(1.2,2.2),l=new Me(.05,o,1,4);l.translate(0,o/2,0);let h=l.attributes.position,c=i.range(-.2,.2);for(let f=0;f<h.count;f++){let d=h.getY(f)/o;h.setX(f,h.getX(f)+c*d*d)}if(l.rotateY(i.range(0,6.28)),l.translate(i.range(-.3,.3),0,i.range(-.3,.3)),Go(l,new bt().setHSL(.2+i.range(-.03,.03),.45,i.range(.3,.42))),r.push(ta(l)),a%3===0){let f=new Zt(.035,.035,.22,6).translate(c+0,o-.05,0);Go(f,new bt("#5a3a1e")),r.push(ta(f))}}n.reed={geo:ge(r),mat:jr(new Gt({vertexColors:!0,side:_e,roughness:.8}),s,.6)}}{let i=new lr(.5,0),r=i.attributes.position,a=new ce(9);for(let l=0;l<r.count;l++)r.setXYZ(l,r.getX(l)*a.range(.8,1.2),r.getY(l)*.4,r.getZ(l)*a.range(.8,1.2));i.computeVertexNormals();let o=ke("dirt",{strength:6,rough:.5});n.clod={geo:i,mat:new Gt({color:"#4a3622",roughness:.55,normalMap:o.normalMap})}}{let i=ke("bark",{strength:5,rough:.95}),r=new Zt(.42,.5,6,10,3).rotateZ(Math.PI/2),a=r.attributes.position;for(let o=0;o<a.count;o++)a.setY(o,a.getY(o)+Math.sin(a.getX(o)*.8)*.08);r.computeVertexNormals(),n.log={geo:r,mat:new Gt({map:Qr(),normalMap:i.normalMap,roughness:1,color:"#9a9a7a"})}}return n}function Wo(s,t=!1){let e=new Re({transparent:!0,depthWrite:!1,side:_e,fog:!0,blending:t?rn:ii,uniforms:ai.merge([xt.fog,{uTime:{value:0},uOp:{value:s}}]),vertexShader:`varying vec2 vUv; #include <fog_pars_vertex>
      void main(){ vUv = uv; vec4 mvPosition = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mvPosition; #include <fog_vertex> }`.replace(/#include <(\w+)>/g,n=>`
`+n+`
`),fragmentShader:`uniform float uTime, uOp; varying vec2 vUv; #include <fog_pars_fragment>
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
      void main(){ vec2 uv = vUv; float t = uTime;
        float s = n(vec2(uv.x * 26.0, uv.y * 3.0 + t * 2.2)) * 0.6 + n(vec2(uv.x * 60.0, uv.y * 7.0 + t * 3.4)) * 0.4;
        float edge = smoothstep(0.0, 0.18 + n(vec2(uv.y * 6.0 + t, 1.0)) * 0.12, uv.x) * smoothstep(0.0, 0.18 + n(vec2(uv.y * 6.0 - t, 5.0)) * 0.12, 1.0 - uv.x);
        float foam = smoothstep(0.25, 0.0, uv.y);
        vec3 col = mix(vec3(0.62, 0.78, 0.76), vec3(1.0), clamp(s * 0.9 + foam, 0.0, 1.0));
        float a = (0.35 + s * 0.65) * edge * uOp * (1.0 - smoothstep(0.92, 1.0, uv.y) * 0.6);
        gl_FragColor = vec4(col, a);
        #include <fog_fragment>
      }`.replace(/#include <(\w+)>/g,n=>`
`+n+`
`)});return e.userData.k=t?1.3:1,Df.push(e),e}var Df=[];function Uf(s){for(let t of Df)t.uniforms.uTime.value=s*t.userData.k}function Xo(){if(Vo.m)return Vo.m;let s=ke("ruin",{strength:5,rough:.9}),t=ke("rock",{strength:6,rough:.92}),e=zo().clone();return e.needsUpdate=!0,e.wrapS=e.wrapT=fs,e.repeat.set(1.5,2),Vo.m={ruin:new Gt({map:oi(),roughness:1,normalMap:s.normalMap,roughnessMap:s.roughnessMap}),rock:new Gt({map:Yn(),roughness:1,normalMap:t.normalMap,roughnessMap:t.roughnessMap}),pool:new Gt({color:"#2f5a50",roughness:.05,metalness:.2,normalMap:Ss(),normalScale:new Z(.5,.5),transparent:!0,opacity:.88}),swamp:new Gt({color:"#1c2816",roughness:.32,metalness:0,envMapIntensity:.3,normalMap:Ss(),normalScale:new Z(.35,.35)}),puddle:new Gt({color:"#3a2c1a",roughness:.04,metalness:.25,normalMap:Ss(),normalScale:new Z(.2,.2),transparent:!0,opacity:.92,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),fall:Wo(.85),spray:Wo(.3),mist:new si({map:Pi(),color:"#eef3ea",transparent:!0,depthWrite:!1,opacity:.3}),stream:new Gt({color:"#3e5a4c",roughness:.08,metalness:.1,envMapIntensity:.5,normalMap:Ss(),normalScale:new Z(1.2,1.2),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),gold:new Gt({color:"#d8b04a",metalness:1,roughness:.28,emissive:"#3a2a04"})},Vo.m}function qo(s,t){return{p:s,ctx:t,obstacles:[],objs:[],t:0,done:!0,hits:0,add(e){return t.scene.add(e),this.objs.push(e),e},dispose(){for(let e of this.objs)t.scene.remove(e);this.objs.length=0,this.obstacles.length=0},update(){}}}var $n=(s,t,e,n={x:0,y:0,z:0})=>s.pointAt(t,e,n);function Iy(s,t){let e=qo(s,t),n=t.track,i=Xo(),r=t.builder,a=t.rec,o=new ce(s.seed+3),l=n.sampleAtS(s.fountainS),h=$n(n,s.fountainS,0),c=l.y,f=new ne;f.position.set(h.x,c,h.z),f.rotation.y=l.th;let d=(w,R,P,b)=>new Zt(w,R,P,8,1).translate(0,b+P/2,0),u=ge([d(3.3,3.45,.7,-.1),d(3,3,.1,.6),d(.7,.9,1.6,0),d(1.6,.6,.35,1.5),d(.35,.45,.9,1.8),d(.8,.3,.25,2.6),new Be(3.15,.18,6,8).rotateX(Math.PI/2).rotateY(Math.PI/8).translate(0,.62,0)].map(If)),g=new _t(u,i.ruin);g.castShadow=!0,g.receiveShadow=!0,f.add(g);for(let w=0;w<4;w++){let R=new _t(new It(.42,.4,.5),i.ruin),P=w*Math.PI/2;R.position.set(Math.sin(P)*.85,1.25,Math.cos(P)*.85),R.rotation.y=P,R.castShadow=!0,f.add(R)}let x=new _t(new En(2.95,8).rotateX(-Math.PI/2).rotateY(Math.PI/8),i.pool);x.position.y=.5,f.add(x);let p=new _t(new En(1.5,8).rotateX(-Math.PI/2),i.pool);p.position.y=1.86,f.add(p);let m=new _t(new Zt(1.55,2.2,1.4,16,1,!0).translate(0,1.15,0),i.spray);f.add(m);let v=new _t(new Zt(.75,1.2,.8,12,1,!0).translate(0,2.3,0),i.spray);f.add(v);let y=new _t(new cr(.28,0).scale(.8,1.3,.8),i.gold);y.position.y=3.1,f.add(y),e.add(f),e.obstacles.push({_s:s.fountainS,x:h.x,z:h.z,r:3.35,yMin:c-1,yMax:c+3,active:!0,solid:!0,bounce:.35,onHit:(w,R,P,b)=>{(b||0)>5&&(w.damage(4+(b||0)*.5,"fountain"),Bt.emit("crash",{}))}});let _=s.s0+18,C=s.s1-18;for(let w of[_,C])for(let R of[-1,1]){let P=n.sampleAtS(w),b=R*(P.hw+1.4),M=$n(n,w,b);r.inst(a,"column",M.x,n.roadY(P,R*P.hw)-.2,M.z,o.range(0,6),.9,o.range(.85,1.1))}for(let w=s.s0+12;w<s.s1-10;w+=9)for(let R of[-1,1]){let P=n.sampleAtS(w);if(P.hw<8)continue;let b=$n(n,w,R*(P.hw-.4));r.inst(a,"newel",b.x,n.roadY(P,R*P.hw),b.z,P.th,1,.7)}return e.update=w=>{e.t+=w,y.rotation.y+=w*1.2,y.position.y=3.1+Math.sin(e.t*2)*.08},e}function Ly(s,t){let e=qo(s,t),n=t.track,i=Xo(),r=t.builder,a=t.rec,o=new ce(s.seed+5),l=s.i0,h=s.i1,c=n.get(l+h>>1),f=h-l+60,d=new _t(new Me(110,f,1,1).rotateX(-Math.PI/2),i.swamp);d.position.set(c.x,s.waterY,c.z),d.rotation.y=c.th,d.receiveShadow=!0,e.add(d);let u=new te,g=new we,x=new A,p=new A,m=new Je;for(let v=l+1;v<h-1;v+=2){let y=n.get(v),_=n.get(v+2);for(let C of[-1,1]){let w=C*(y.hw+.25),R=n.roadY(y,C*y.hw);(v-l>>1)%6===0?r.inst(a,"newel",y.x+y.rx*w,R,y.z+y.rz*w,y.th,1,1):r.inst(a,"baluster",y.x+y.rx*w,R,y.z+y.rz*w,0,1,1);let P=_.x+_.rx*C*(_.hw+.25),b=_.z+_.rz*C*(_.hw+.25),M=n.roadY(_,C*_.hw),T=y.x+y.rx*w,L=y.z+y.rz*w,U=Math.hypot(P-T,b-L);g.setFromEuler(m.set(0,Math.atan2(-(b-L),P-T),Math.atan2(M-R,U),"YXZ")),x.set(U+.05,1,1),u.compose(p.set((T+P)/2,(R+M)/2+.8,(L+b)/2),g,x),r.instM(a,"rail",u)}if((v-l>>1)%7===3)for(let C of[-1,1]){let w=C*(y.hw+.4);p.set(y.x+y.rx*w,0,y.z+y.rz*w),r.inst(a,"block",p.x,s.waterY-.2,p.z,y.th,1.1,(y.y-s.waterY)*.8+.3)}}for(let v=0;v<70;v++){let y=Math.floor(o.range(l,h)),_=n.get(y),C=o.sign(),w=C*(_.hw+o.range(2.5,30)),R=o.range(.6,1.5);r.inst(a,"lily",_.x+_.rx*w,s.waterY+.02,_.z+_.rz*w,o.range(0,6.28),R,1)}for(let v=0;v<40;v++){let y=Math.floor(o.range(l,h)),_=n.get(y),C=o.sign(),w=C*(_.hw+o.range(3,34));r.inst(a,"reed",_.x+_.rx*w,s.waterY-.2,_.z+_.rz*w,o.range(0,6.28),o.range(.8,1.4))}for(let v=0;v<5;v++){let y=Math.floor(o.range(l,h)),_=n.get(y),C=o.sign(),w=C*(_.hw+o.range(6,26));r.inst(a,"log",_.x+_.rx*w,s.waterY+.05,_.z+_.rz*w,o.range(0,6.28),o.range(.8,1.3))}return e.update=v=>{i.swamp.normalMap.offset.x+=v*.005},e}function Pf(s,t){let e=qo(s,t),n=t.track,i=Xo(),r=t.builder,a=t.rec,o=new ce(s.seed+7),l=s.side;for(let f=s.i0;f<s.i1;f+=2){let d=n.get(f),u=d.hw;if(o.chance(.55)){let g=l*(u+o.range(.9,2.2)),x=new bt().setHSL(.08,.12,o.range(.33,.5));r.inst(a,"rock",d.x+d.rx*g,n.terrainY(d,g)-.3,d.z+d.rz*g,o.range(0,6),o.range(.5,1.3),void 0,x)}if(o.chance(.2)){let g=l*(u+o.range(3,7)),x=new bt().setHSL(.08,.1,o.range(.3,.45));r.inst(a,"rock",d.x+d.rx*g,n.terrainY(d,g)-1,d.z+d.rz*g,o.range(0,6),o.range(1.5,3.2),o.range(1.5,3),x)}if(o.chance(.18)){let g=l*(u+o.range(1,2.5));r.inst(a,"vines",d.x+d.rx*g,n.terrainY(d,g+l*3)+2,d.z+d.rz*g,d.th+(l>0?-1.57:1.57),o.range(.9,1.3))}if(o.chance(.3)){let g=l*(u+o.range(.6,1.6));r.inst(a,"fern",d.x+d.rx*g,n.terrainY(d,g)-.1,d.z+d.rz*g,o.range(0,6),o.range(.6,1.1))}}let h=[];if(s.falls&&s.falls.length)for(let f of s.falls){let d=s.s0+f,u=n.sampleAtS(d),g=n.terrainY(u,l*(u.hw+7))+3,x=u.y,p=$n(n,d,l*(u.hw+1.6)),m=Math.max(4,g-x),v=new _t(new Me(5.5,m,1,1),i.fall);v.position.set(p.x,x+m/2,p.z),v.rotation.y=u.th,v.renderOrder=3,e.add(v),h.push(v);let y=new _t(new Me(4.2,m,1,1),i.spray);y.position.set(p.x-u.rx*l*.4,x+m/2,p.z-u.rz*l*.4),y.rotation.y=u.th,e.add(y);let _=new _t(new Me(2*u.hw+1,5.6,1,1).rotateX(-Math.PI/2),i.stream),C=$n(n,d,0);_.position.set(C.x,u.y+.06,C.z),_.rotation.y=u.th+Math.PI/2,_.renderOrder=2,e.add(_);let w=$n(n,d,-l*(u.hw+1.2)),R=Math.max(10,x-u.floorY),P=new _t(new Me(6.5,R,1,1),i.fall);P.position.set(w.x,x-R/2+.2,w.z),P.rotation.y=u.th,P.renderOrder=3,e.add(P),h.push(P);for(let b=0;b<5;b++){let M=new Hn(i.mist),T=$n(n,d+o.range(-4,4),l*(u.hw+o.range(-2,2)));M.position.set(T.x,x+o.range(.6,3),T.z),M.scale.setScalar(o.range(3.5,6)),e.add(M)}for(let b=0;b<3;b++){let M=new Hn(i.mist),T=$n(n,d+o.range(-5,5),-l*(u.hw+o.range(6,16)));M.position.set(T.x,u.floorY+o.range(3,8),T.z),M.scale.setScalar(o.range(10,16)),e.add(M)}for(let b of[-1,1]){let M=$n(n,d+b*3.6,l*(u.hw+1.2));r.inst(a,"rock",M.x,x-.3,M.z,o.range(0,6),o.range(.7,1.1),void 0,new bt("#5a5a52"))}}let c=!1;return e.update=(f,d)=>{if(e.t+=f,i.stream.normalMap.offset.y+=f*.25,s.falls&&ae.car){let u=s.falls.some(g=>Math.abs(d-(s.s0+g))<3.2);if(u&&!c){c=!0;let g=ae.car;g.mud=Math.max(0,g.mud-.5),Bt.emit("fx",{kind:"water",x:g.pos.x,y:g.pos.y+.6,z:g.pos.z,n:36}),Bt.emit("sfx",{name:"splash"})}else u||(c=!1)}},e}function Dy(s,t){let e=qo(s,t),n=t.track,i=Xo(),r=t.builder,a=t.rec,o=new ce(s.seed+9);for(let l of s.puddles||[]){let h=n.sampleAtS(l.s),c=$n(n,l.s,l.lat),f=new En(l.r*1.08,20).rotateX(-Math.PI/2),d=f.attributes.position;for(let g=1;g<d.count;g++){let x=1+Math.sin(g*1.7+l.s)*.12;d.setX(g,d.getX(g)*x),d.setZ(g,d.getZ(g)*(x*.85))}let u=new _t(f,i.puddle);u.position.set(c.x,n.roadY(h,l.lat)+.035,c.z),u.rotation.y=h.th+o.range(-.3,.3),u.renderOrder=1,e.add(u);for(let g=0;g<6;g++){let x=o.range(0,6.28),p=l.r*o.range(.95,1.25),m=$n(n,l.s+Math.cos(x)*p,l.lat+Math.sin(x)*p);r.inst(a,"clod",m.x,n.roadY(h,l.lat)-.02,m.z,o.range(0,6),o.range(.4,.9),o.range(.6,1))}}for(let l=s.i0;l<s.i1;l+=3){let h=n.get(l);for(let c of[-1,1]){if(o.chance(.55)){let f=c*(h.hw+o.range(.4,6));r.inst(a,"reed",h.x+h.rx*f,n.terrainY(h,f)-.1,h.z+h.rz*f,o.range(0,6),o.range(.7,1.2))}if(o.chance(.3)){let f=c*o.range(1,h.hw-.5);r.inst(a,"clod",h.x+h.rx*f,n.roadY(h,f)-.05,h.z+h.rz*f,o.range(0,6),o.range(.4,.8),.6)}if(o.chance(.05)){let f=c*(h.hw+o.range(2,8));r.inst(a,"log",h.x+h.rx*f,n.terrainY(h,f)+.1,h.z+h.rz*f,h.th+o.range(-.5,.5),o.range(.7,1.1))}}}return e.update=l=>{i.puddle.normalMap.offset.x+=l*.01},e}var Nf={plaza:Iy,causeway:Ly,ledge:Pf,fallsLedge:Pf,mudflat:Dy};function kf(s){return!!Nf[s.type]}function Ff(s,t){return Nf[s.type](s,t)}var ea=new A;function Un(s,t,e,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;ea.copy(t),ea[n]=0,ea.normalize();let h=.5*a/(a+o),c=1-ea.angleTo(s)/l;return Math.sign(ea[e])===1?c*h:o/(a+o)+h+h*(1-c)}var li=class extends It{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new A,l=new A,h=new A(t,e,n).divideScalar(2).subScalar(r),c=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,u=c.length/6,g=new A,x=.5/i;for(let p=0,m=0;p<c.length;p+=3,m+=2)switch(o.fromArray(c,p),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),c[p+0]=h.x*Math.sign(o.x)+l.x*r,c[p+1]=h.y*Math.sign(o.y)+l.y*r,c[p+2]=h.z*Math.sign(o.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/u)){case 0:g.set(1,0,0),d[m+0]=Un(g,l,"z","y",r,n),d[m+1]=1-Un(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[m+0]=1-Un(g,l,"z","y",r,n),d[m+1]=1-Un(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[m+0]=1-Un(g,l,"x","z",r,t),d[m+1]=Un(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[m+0]=1-Un(g,l,"x","z",r,t),d[m+1]=1-Un(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[m+0]=1-Un(g,l,"x","y",r,t),d[m+1]=1-Un(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[m+0]=Un(g,l,"x","y",r,t),d[m+1]=1-Un(g,l,"y","x",r,e);break}}};var Yo=new te,$o=new we,zf=new Je,Zo=new A,Bf=new A,Jo={};function Es(){return Jo.m||(Jo.m={ruin:new Gt({map:oi(),roughness:1,normalMap:ke("ruin",{strength:5,rough:.9}).normalMap,roughnessMap:ke("ruin").roughnessMap}),rock:new Gt({map:Yn(),roughness:1,normalMap:ke("rock",{strength:6,rough:.92}).normalMap,roughnessMap:ke("rock").roughnessMap}),metal:new Gt({color:"#8a8478",metalness:.85,roughness:.38}),rust:new Gt({color:"#6e4a30",metalness:.5,roughness:.7}),croc:new Gt({color:"#46502c",roughness:.55,metalness:.05,normalMap:ke("rock").normalMap,normalScale:new Z(1.6,1.6)}),crocBelly:new Gt({color:"#8d8a5a",roughness:.7}),eye:new Gt({color:"#e6c440",emissive:"#a07a10",emissiveIntensity:.8}),flame:new si({map:Pi(),color:"#ffb050",blending:rn,transparent:!0,depthWrite:!1}),water:Wo(.9),mist:new si({map:Pi(),color:"#e8f0ea",transparent:!0,depthWrite:!1,opacity:.2}),spike:new Gt({color:"#6b6355",metalness:.6,roughness:.5}),gold:new Gt({color:"#d8b04a",metalness:1,roughness:.3,emissive:"#3a2a04"})}),Jo.m}function Qi(s,t){return{p:s,ctx:t,obstacles:[],objs:[],t:0,done:!1,hits:0,add(e){return t.scene.add(e),this.objs.push(e),e},dispose(){for(let e of this.objs)t.scene.remove(e);this.objs.length=0,this.obstacles.length=0},finish(e,n){this.done||(this.done=!0,Bt.emit("setpiece",{type:s.set?s.set.type:s.type,ok:e,label:n}))}}}var $e=(s,t,e,n={x:0,y:0,z:0})=>s.pointAt(t,e,n);function Uy(s,t){let e=Qi(s,t),n=t.track,i=t.builder.pools.plank,r=-1,a=!1,o=13.5;return e.update=(l,h)=>{if(!a&&h>s.s0+3&&(a=!0,r=s.s0-4,Bt.emit("bark",{who:"penny",text:"Dusty, the planks are going!"}),Bt.emit("sfx",{name:"crack"})),!!a){o=Math.min(o+l*.9,19),r=Math.min(r+o*l,h+30),r>s.s1+2&&!e.done&&e.finish(h>s.s1,"Bridge Crossed");for(let c of s.planks){if(!c.fallen&&c.i+.5<r){c.fallen=!0,c.vy=-le(1,4,Math.random()),c.rx=(Math.random()-.5)*4,c.rz=(Math.random()-.5)*6,c.ry=0,c.px=c.x,c.py=c.y,c.pz=c.z,c.a=c.pitch,c.b=0;let f=n.get(c.i);f.hole=!0,Math.random()<.2&&Bt.emit("fx",{kind:"splinter",x:c.x,y:c.y,z:c.z,n:6})}if(c.fallen&&c.py>s.floorY-5&&(c.vy-=18*l,c.py+=c.vy*l,c.a+=c.rx*l,c.b+=c.rz*l,$o.setFromEuler(zf.set(c.a,c.th,c.b,"YXZ")),Zo.set(1,1,1),Yo.compose(Bf.set(c.px,c.py,c.pz),$o,Zo),i.set(c.slot,Yo)),!c.fallen&&Math.abs(c.i-h)<14){let f=Math.sin(ae.time*9+c.i)*.03*(1-Math.abs(c.i-h)/14);$o.setFromEuler(zf.set(c.pitch,c.th,f,"YXZ")),Zo.set(1,1,1),Yo.compose(Bf.set(c.x,c.y+f,c.z),$o,Zo),i.set(c.slot,Yo)}}r>s.s0&&r<s.s1&&Bt.emit("shake",{amount:.08});for(let c of[s.rope0,s.rope1])c&&r>(s.s0+s.s1)/2&&(c.position.y-=l*6*re(s.s0,s.s1,r),c.rotation.z+=l*.02)}},e}function Ny(s,t){let e=Qi(s,t),n=t.track,i=Es(),r=new ce(s.seed),a=t.lib.column.geo,o=[],l=5,h=s.s1-s.s0;for(let c=0;c<l;c++){let f=s.s0+18+c*(h-30)/(l-1),d=c%2?1:-1,u=n.sampleAtS(f),g=u.hw,x=g+1.6,p=new ne,m=new _t(a,i.ruin);m.userData.shared=!0,m.castShadow=!0,m.scale.set(1.05,x/6.1,1.05),p.add(m);let v=$e(n,f,d*(g+.9));p.position.set(v.x,v.y-.1,v.z),p.rotation.order="YXZ",p.rotation.y=u.th,e.add(p),o.push({g:p,s:f,side:d,a:u,ang:0,w:0,state:0,length:x,ob:null,bp:v})}return e.apLat=c=>{let f=m=>-m.side*3.3,d=o.findIndex(m=>m.s>c);if(d<0)return f(o[o.length-1]);if(d===0)return f(o[0]);let u=o[d-1],g=o[d],x=(c-u.s)/(g.s-u.s),p=x<.3?0:x>.85?1:(1-Math.cos((x-.3)/.55*Math.PI))/2;return f(u)+(f(g)-f(u))*p},e.update=(c,f)=>{let d=Math.max(ae.car?ae.car.speed:20,12);for(let u of o)if(u.state===0&&u.s-f<d*1.55+8&&(u.state=1,Bt.emit("sfx",{name:"crack"})),u.state===1){if(u.w+=(3.2+Math.sin(u.ang)*9)*c,u.ang+=u.w*c,u.ang>=Math.PI/2){u.ang=Math.PI/2-.04,u.state=2;let g=$e(n,u.s+.8,u.side*(u.a.hw+.9-u.length));if(u.ob={x:u.bp.x,z:u.bp.z,x2:g.x,z2:g.z,r:.78,yMin:u.bp.y-1,yMax:u.bp.y+1.5,active:!0,solid:!0,bounce:.25,onHit:(x,p,m,v)=>{(v||0)>4&&(x.damage(6+(v||0)*.9,"pillar"),e.hits++,Bt.emit("crash",{}))}},e.obstacles.push(u.ob),Bt.emit("fx",{kind:"dust",x:(u.bp.x+g.x)/2,y:u.bp.y+.5,z:(u.bp.z+g.z)/2,n:18,spread:u.length/2}),Bt.emit("shake",{amount:.6,at:u.bp}),Bt.emit("sfx",{name:"slam"}),ae.car&&Math.abs(f-u.s)<2.2){let x=ae.carLat,p=u.side*(u.a.hw+.9),m=p-u.side*u.length;(x-m)*(x-p)<0&&(ae.car.damage(22,"pillar"),Bt.emit("crash",{}),e.hits++)}}u.g.rotation.z=-u.side*u.ang}!e.done&&f>s.s1-4&&e.finish(e.hits===0,e.hits===0?"Pillar Slalom!":"Pillars Survived")},e}function ky(s){let t=new ne,e=(p,m=s.croc)=>{let v=new _t(p,m);return v.castShadow=!0,v},n=[[0,-1.3],[.32,-1.25],[.5,-.8],[.56,-.1],[.52,.6],[.4,1.1],[.26,1.35],[0,1.4]].map(([p,m])=>new Z(p,m)),i=new wn(n,16).rotateX(Math.PI/2).scale(1.2,.52,1);{let p=i.attributes.position;for(let m=0;m<p.count;m++)p.getY(m)<0&&p.setY(m,p.getY(m)*.7);i.computeVertexNormals()}t.add(e(i));let r=e(new hn(.42,1.9,4,10).rotateX(Math.PI/2).scale(1.25,.3,1),s.crocBelly);r.position.y=-.14,t.add(r);let a=[];for(let p=-2;p<=2;p++)for(let m=0;m<9;m++){let v=1-m*.27,y=p*.14*(1-Math.abs(v)*.25),_=new an(.06,.1+(p===0?.05:0),4).translate(y,.27-Math.abs(p)*.025,v);a.push(_.toNonIndexed())}t.add(e(ge(a)));let o=new ne;o.position.z=-1.2,t.add(o);{let p=[];for(let m=0;m<7;m++){let v=m/7,y=.42*(1-v)+.05;p.push(new Zt(y*.9,y,.42,8).rotateX(Math.PI/2).scale(1,.62,1).translate(0,.02-v*.04,-.2-m*.38).toNonIndexed());for(let _ of m<4?[-.12,.12]:[0])p.push(new an(.05,.16*(1-v)+.06,4).translate(_*(1-v),y*.62+.04,-.2-m*.38).toNonIndexed())}o.add(e(ge(p)))}for(let[p,m]of[[1,.75],[-1,.75],[1,-.65],[-1,-.65]]){let v=ge([new hn(.1,.3,3,6).rotateZ(p*1.2).translate(p*.55,-.1,m).toNonIndexed(),new hn(.08,.24,3,6).translate(p*.8,-.3,m+.05).toNonIndexed(),new It(.24,.05,.26).translate(p*.84,-.44,m+.12).toNonIndexed()]);t.add(e(v))}let l=new ne;l.position.set(0,.05,1.3),t.add(l);let h=new un;h.moveTo(-.3,0),h.lineTo(-.25,.7),h.quadraticCurveTo(-.2,1.35,0,1.45),h.quadraticCurveTo(.2,1.35,.25,.7),h.lineTo(.3,0),h.lineTo(-.3,0);let c=new ri(h,{depth:.16,bevelEnabled:!0,bevelThickness:.04,bevelSize:.04,bevelSegments:2}).rotateX(Math.PI/2).translate(0,.16,0),f=[],d=[];for(let p=0;p<11;p++){let m=.1+p*.12,v=.27-m*.12;for(let y of[-1,1])f.push(new an(.022,.09,4).rotateX(Math.PI).translate(y*v,-.02,m).toNonIndexed()),d.push(new an(.02,.08,4).translate(y*(v-.03),.02,m+.06).toNonIndexed())}let u=new ne;l.add(u),u.add(e(c)),u.add(e(ge(f),s.crocBelly));for(let p of[-.17,.17]){let m=e(new be(.1,10,8).scale(1,.8,1.1));m.position.set(p,.2,.15),u.add(m);let v=new _t(new be(.06,10,8),s.eye);v.position.set(p*1.05,.25,.2),u.add(v)}for(let p of[-.05,.05]){let m=e(new be(.035,6,5));m.position.set(p,.17,1.38),u.add(m)}let g=new ne;l.add(g);let x=new ri(h,{depth:.1,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:1}).rotateX(Math.PI/2).scale(.92,1,.96).translate(0,-.02,.02);return g.add(e(x,s.crocBelly)),g.add(e(ge(d),s.crocBelly)),t.userData={jawU:u,jawL:g,tail:o},t}function Fy(s,t){let e=Qi(s,t),n=t.track,i=Es(),r=new ce(s.seed),a=[];for(let h=0;h<6;h++){let c=s.s0+10+h*(s.s1-s.s0-20)/5+r.range(-3,3),f=r.sign(),d=n.sampleAtS(c),u=ky(i),g=f*(d.hw+r.range(3,9)),x=$e(n,c,g);u.position.set(x.x,s.waterY-.12,x.z),u.rotation.y=d.th+(f>0?-1:1)*Math.PI/2+r.range(-.4,.4),u.traverse(m=>m.castShadow=!1),e.add(u);let p={g:u,s:c,lat:g,side:f,a:d,snap:0,bitten:!1,ph:r.range(0,6)};p.ob={x:x.x,z:x.z,r:.75,yMin:s.waterY-1,yMax:s.waterY+.4,active:!0,solid:!0,bounce:.4,onHit:m=>{m.damage(5,"croc")}},e.obstacles.push(p.ob),a.push(p)}let o=0,l=!1;return e.update=(h,c)=>{e.t+=h;let f=c>s.s0+6&&c<s.s1-6,d=ae.car?ae.car.speed:0;f&&!l&&(l=!0,Bt.emit("bark",{who:"penny",text:"Crocodiles! Keep it moving!"})),f&&d<9?o+=h:o=Math.max(0,o-h);for(let u of a){let g=u.s-c;if(Math.abs(g)<26){let p=gt(ae.carLat+u.side*2.2,-u.a.hw-4,u.a.hw+4);u.lat+=gt(p-u.lat,-3.5*h,3.5*h)}let x=$e(n,u.s,u.lat);if(u.g.position.x=x.x,u.g.position.z=x.z,u.g.position.y=s.waterY-.14+Math.sin(e.t*2+u.ph)*.04,u.ob.x=x.x,u.ob.z=x.z,u.g.userData.tail.rotation.y=Math.sin(e.t*4+u.ph)*.35,Math.abs(g)<5&&Math.abs(u.lat-ae.carLat)<3.6&&u.snap<=0&&(u.snap=.7,Bt.emit("sfx",{name:"snap"}),d<11&&!u.bitten&&(u.bitten=!0,ae.car.damage(11,"croc"),e.hits++,Bt.emit("bark",{who:"dusty",text:"Get off my tire, you overgrown handbag!"}),Bt.emit("shake",{amount:.4}))),u.snap>0){u.snap-=h;let p=Math.sin((.7-u.snap)/.7*Math.PI)*.7;u.g.userData.jawU.rotation.x=-p,u.g.userData.jawL.rotation.x=p*.4}}o>1.4&&(o=0,ae.car.damage(9,"croc"),e.hits++,Bt.emit("sfx",{name:"snap"}),Bt.emit("shake",{amount:.35})),!e.done&&c>s.s1-3&&e.finish(e.hits===0,e.hits===0?"Crocodile Ford Cleared":"Ford Crossed")},e}function zy(s,t){let e=Qi(s,t),n=t.track,i=Es(),r=(s.lipS+s.landS)/2,a=n.sampleAtS(r),o=$e(n,r,0),h=n.sampleAtS(s.lipS).y+15,c=ge([new It(34,4,7).translate(0,0,0).toNonIndexed(),new It(6,26,7).translate(-16,-13,0).toNonIndexed(),new It(6,26,7).translate(16,-13,0).toNonIndexed()]),f=c.attributes.position;for(let C=0;C<f.count;C++){let w=f.getX(C),R=f.getY(C),P=f.getZ(C);f.setXYZ(C,w+Math.sin(R*.7+P)*.6,R+Math.sin(w*.5)*.7,P+Math.cos(w*.6+R)*.5)}c.computeVertexNormals();let d=new _t(c,i.rock);d.position.set(o.x,h,o.z),d.rotation.y=a.th+Math.PI/2,d.castShadow=!0,e.add(d);let u=new _t(new Me(22,h-a.floorY+2,1,1),i.water);u.position.set(o.x,(h+a.floorY)/2,o.z),u.rotation.y=a.th+Math.PI/2,u.renderOrder=3,e.add(u);let g=u.clone();g.scale.set(.6,1.2,1);let x=$e(n,r+6,-24);g.position.set(x.x,u.position.y+4,x.z),g.rotation.y=a.th,e.add(g);let p=u.clone();p.scale.set(.5,1.1,1);let m=$e(n,r-4,26);p.position.set(m.x,u.position.y+2,m.z),p.rotation.y=a.th,e.add(p);let v=[];for(let C=0;C<14;C++){let w=new Hn(i.mist),R=$e(n,r+(Math.random()-.5)*14,(Math.random()-.5)*30);w.position.set(R.x,a.floorY+2+Math.random()*4,R.z),w.scale.setScalar(8+Math.random()*8),e.add(w),v.push(w)}let y=!1,_=!1;return e.update=(C,w)=>{if(e.t+=C,i.mist.opacity=.14+Math.sin(e.t)*.04,!y&&w>r-1){y=!0;let R=ae.car;R&&!R.grounded&&(Bt.emit("fx",{kind:"water",x:R.pos.x,y:R.pos.y+.5,z:R.pos.z,n:50}),R.mud=0,Bt.emit("sfx",{name:"splash"}),Bt.emit("bark",{who:"penny",text:"Well \u2014 that\u2019s one way to wash the car!"}))}!e.done&&w>s.landS+8&&ae.car&&ae.car.grounded&&e.finish(!0,"Waterfall Jump!")},e.slowmo={s:s.lipS+2},e}function By(s,t){let e=Qi(s,t),n=t.track,i=Es(),r=new ce(s.seed),a=s.s0+6,o=s.s1-6,l=Math.ceil(o-a)+1,h=11,c=[],f=[],d=[];for(let b=0;b<l;b++){let M=a+b,T=n.sampleAtS(M);for(let L=0;L<h;L++){let U=Math.PI*L/(h-1),B=-Math.cos(U)*(T.hw+1.1),q=Math.sin(U)*3.4+(L===0||L===h-1?0:3.2),H=$e(n,M,B);c.push(H.x,T.y-.3+q+(L===0||L===h-1,0),H.z),f.push(L/2,M/4)}}for(let b=0;b<l-1;b++)for(let M=0;M<h-1;M++){let T=b*h+M,L=T+h;d.push(T,L,T+1,T+1,L,L+1)}let u=new ue;u.setAttribute("position",new Xt(c,3)),u.setAttribute("uv",new Xt(f,2)),u.setIndex(d),u.computeVertexNormals();let g=i.tunnel||(i.tunnel=new Gt({map:oi(),roughness:.95,side:_e,color:"#b8a888"})),x=new _t(u,g);x.castShadow=!0,x.receiveShadow=!0,e.add(x);for(let b of[a,o]){let M=n.sampleAtS(b),T=$e(n,b,0),L=new _t(new It(2*M.hw+6,2.2,1.6),i.ruin);L.position.set(T.x,M.y+7.2,T.z),L.rotation.y=M.th,L.castShadow=!0,e.add(L);for(let U of[-1,1]){let B=$e(n,b,U*(M.hw+2.2)),q=new _t(new It(2.2,8,1.8),i.ruin);q.position.set(B.x,M.y+3.5,B.z),q.rotation.y=M.th,e.add(q)}}let p=[];for(let b=a+4;b<o;b+=9)for(let M of[-1,1]){let T=n.sampleAtS(b),L=$e(n,b,M*(T.hw+.7)),U=new Hn(i.flame);U.position.set(L.x,T.y+2.6,L.z),U.scale.setScalar(.9),e.add(U),p.push(U)}let m=new dr("#ffa040",0,26,1.6);e.add(m);let v=new un;v.moveTo(-1.6,0),v.quadraticCurveTo(0,-1.25,1.6,0),v.quadraticCurveTo(0,-.45,-1.6,0);let y=new ri(v,{depth:.08,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:1}).translate(0,0,-.04),_=new Zt(.07,.07,1,6).translate(0,-.5,0),C=[],w=5,R=5.1;for(let b=0;b<w;b++){let M=a+12+b*(o-a-22)/(w-1),T=n.sampleAtS(M),L=$e(n,M,0),U=new ne;U.position.set(L.x,T.y+6.6,L.z),U.rotation.order="YXZ",U.rotation.y=T.th;let B=new _t(_,i.rust);B.scale.y=R,U.add(B);let q=new _t(y,i.metal);q.position.y=-R,q.castShadow=!0,U.add(q),e.add(U);let H={pivot:U,s:M,a:T,ph:b*1.25+r.range(0,.5),per:r.range(2,2.5),amp:1.05,phi:0,cd:0};C.push(H)}let P=!1;return e.update=(b,M)=>{e.t+=b;for(let L of p)L.scale.setScalar(.8+Math.sin(e.t*23+L.position.x)*.12+Math.random()*.08);let T=M>a&&M<o;T&&!P&&(P=!0,Bt.emit("bark",{who:"penny",text:"Blades! Time the swings \u2014 now!"})),ae.car&&(m.position.set(ae.car.pos.x,ae.car.pos.y+2.4,ae.car.pos.z),m.intensity=T?26+Math.sin(e.t*17)*4:0);for(let L of C){L.phi=Math.sin(e.t*Math.PI*2/L.per+L.ph)*L.amp,L.pivot.rotation.z=L.phi;let U=-Math.sin(L.phi)*R,B=6.6-Math.cos(L.phi)*R;if(L.cd>0&&(L.cd-=b),ae.car&&Math.abs(M-L.s)<1.7&&B<2.05&&Math.abs(U-ae.carLat)<1.9&&L.cd<=0){L.cd=.8,e.hits++;let q=Math.cos(e.t*Math.PI*2/L.per+L.ph)>0?-1:1,H=ae.car;H.vel.x+=L.a.rx*q*5,H.vel.z+=L.a.rz*q*5,H.w.y+=q*1.2,H.damage(13,"blade"),Bt.emit("fx",{kind:"sparks",x:H.pos.x,y:H.pos.y+1,z:H.pos.z,n:30}),Bt.emit("shake",{amount:.5}),Bt.emit("sfx",{name:"clang"}),Bt.emit("crash",{})}ae.car&&Math.abs(M-L.s)<5&&Math.abs(L.phi)<.12&&L.cd<=0&&(L.cd=.3,Bt.emit("sfx",{name:"swoosh"}),Math.abs(M-L.s)<2.5&&!e.done&&Bt.emit("style",{kind:"nearmiss",label:"Close shave!",pts:150}))}!e.done&&M>o&&e.finish(e.hits===0,e.hits===0?"Untouched by the Blades!":"Through the Blades")},e.tunnel={s0:a,s1:o},e}function Oy(s){let t=new ne,e=(f,d,u,g,x=s.ruin)=>{let p=new _t(f,x);return p.position.set(d,u,g),p.castShadow=!0,p.receiveShadow=!0,t.add(p),p},n=(f,d,u,g=.12)=>new li(f,d,u,2,g);e(n(5.4,.9,4.4,.1),0,.45,0),e(n(5,1.4,4,.1),0,1.6,0),e(n(5.3,.4,4.3,.08),0,2.5,0);for(let f=0;f<5;f++)e(n(.7,.9,.12,.04),-2+f,1.6,2.03);for(let f of[-.9,.9])e(n(1.3,1.1,2.4,.3),f,3.25,.5),e(n(1.1,2,1.1,.25),f,3,1.45),e(n(1.2,.4,1.5,.12),f,2.9,1.9);let i=[[0,0],[1.6,0],[1.75,1.6],[2.05,3.6],[1.9,4.6],[0,4.7]].map(([f,d])=>new Z(f,d)),r=e(new wn(i,8).scale(1,1,.62),0,3.6,-.3);r.rotation.y=Math.PI/8,e(n(3,.5,2.3,.15),0,3.85,-.25);let a=new un;a.moveTo(-1.1,0),a.lineTo(1.1,0),a.lineTo(.7,-1.2),a.lineTo(0,-1.6),a.lineTo(-.7,-1.2),a.lineTo(-1.1,0),e(new ri(a,{depth:.2,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:1}),0,7.9,.95,s.gold);for(let f of[-1,1]){e(new be(.85,12,8).scale(1,.85,.9),f*2.15,8,-.3),e(new hn(.55,1.6,4,10),f*2.45,6.8,-.2).rotation.z=f*.12;let d=e(new hn(.48,1.5,4,10),f*2.5,5.4,.7);d.rotation.x=1.25,e(n(.95,.85,.95,.25),f*2.5,5.2,1.65),e(new Be(.52,.12,6,12).rotateX(Math.PI/2),f*2.47,6,-.1,s.gold)}e(new Zt(.7,.85,.8,10),0,8.6,-.25);let o=e(n(2.3,2.6,2.2,.35),0,10,-.2);e(n(2.4,.38,.5,.12),0,10.75,.8),e(new an(.32,.9,4).rotateX(-.25),0,10.2,1),e(n(1.4,.24,.3,.08),0,9.45,.92),e(n(2,.6,1.9,.25),0,8.95,-.1);for(let f of[-1,1])e(new Zt(.42,.42,.25,14).rotateZ(Math.PI/2),f*1.25,10,-.2,s.gold),e(new Zt(.2,.2,.3,10).rotateZ(Math.PI/2),f*1.3,10,-.2);let l=new _t(new It(1.7,.26,.16),s.gold);l.position.set(0,10.45,.95),t.add(l),e(n(2.8,.7,2.5,.15),0,11.55,-.2);for(let f=-4;f<=4;f++){let d=e(n(.42,2.4,.22,.1),Math.sin(f*.3)*2,12.6+Math.cos(f*.3)*.9,-.6);d.rotation.z=-f*.3}let h=new _t(new Zt(.16,.16,11,8),s.rust);h.position.set(2.5,7,1.65),h.castShadow=!0,t.add(h);let c=new _t(new an(.45,1.8,4).scale(1,1,.25),s.metal);return c.position.set(2.5,13.3,1.65),c.castShadow=!0,t.add(c),t}function Hy(s,t){let e=Qi(s,t),n=t.track,i=Es(),r=(s.s0+s.s1)/2+6,a=n.sampleAtS(r),o=s.side,l=a.hw,h=Math.max(1.2,(2*l+4.2)/13.8),c=13.8*h,f=o*(l+2),d=Oy(i);d.scale.setScalar(h),d.rotation.y=o*Math.PI/2;let u=$e(n,r,f),g=new ne;g.position.set(u.x,a.y-.2,u.z),g.add(d),g.rotation.order="YXZ",g.rotation.y=a.th,e.add(g);let x=-o*(l+.95),p=1.7,m=Math.asin(gt(Math.abs(f-x)/c,0,.98))+.04,v=0,y=0,_=0;e.apLat=()=>-o*(l-1.8);let C=()=>{for(let w=1;w<=8;w++){let R=w/8,P=R*c,b=f-o*Math.sin(y)*P,M=a.y-.2+Math.cos(y)*P*.93+1.2,T=$e(n,r,b),L=1.7*h*(R>.7?.8:1);e.obstacles.push({x:T.x,z:T.z,r:1.3,yMin:M-L,yMax:M+L,active:!0,solid:!0,bounce:.2,onHit:(U,B,q,H)=>{(H||0)>4&&(U.damage(8+(H||0),"statue"),e.hits++,Bt.emit("crash",{}))}})}};return e.update=(w,R)=>{let P=Math.max(ae.car?ae.car.speed:20,12);if(v===0&&r-R<P*2.4+18&&(v=1,Bt.emit("bark",{who:"dusty",text:"That statue\u2019s coming down \u2014 hang on!"}),Bt.emit("sfx",{name:"rumble"})),v===1){if(_+=(.45+Math.sin(y)*2.2)*w,y+=_*w,y>=m){y=m,v=2,Bt.emit("shake",{amount:1.2}),Bt.emit("sfx",{name:"slam"});let b=$e(n,r,x);Bt.emit("fx",{kind:"dust",x:(u.x+b.x)/2,y:a.y+1,z:(u.z+b.z)/2,n:70,spread:8}),C();let M=ae.car;if(M&&Math.abs(R-r)<2.6){let T=!1;for(let L of e.obstacles)Math.hypot(M.pos.x-L.x,M.pos.z-L.z)<L.r+1&&M.pos.y+1.2>L.yMin&&(T=!0);T&&(M.damage(28,"statue"),e.hits++,Bt.emit("crash",{}))}else M&&R>r&&R<r+16&&Bt.emit("style",{kind:"nearmiss",label:"Under the Colossus!",pts:400})}g.rotation.z=-o*y}!e.done&&R>s.s1-4&&e.finish(e.hits===0,e.hits===0?"Colossus Dodged!":"Colossus Survived")},e}function Of(s,t){let e=Qi(s,t),n=t.track,i=Es(),r=s.s0+26,a=n.sampleAtS(r);for(let h of[-1,1]){let c=h===s.danger?"danger":"safe",f=new Gt({map:wf(c),roughness:.8,emissive:c==="danger"?"#401006":"#3a2c04",emissiveIntensity:.6}),d=new ne,u=new _t(new It(2.1,2.1,.3),f);u.position.y=3.2,d.add(u);let g=new _t(new It(.45,3,.45),i.ruin);g.position.y=1.5,d.add(g);let x=$e(n,r,h*(a.fork-a.hw-1.4));d.position.set(x.x,n.terrainY(a,0)-.3,x.z),d.rotation.y=a.th+Math.PI,d.rotation.z=0,u.castShadow=!0,e.add(d)}let o=[],l=ge(Array.from({length:9},(h,c)=>new an(.16,1.1,5).translate((c%3-1)*.55,.55,(Math.floor(c/3)-1)*.55)));for(let h of s.hazards){let c=$e(n,h.s,h.lat),f=n.sampleAtS(h.s),d=new _t(l,i.spike);d.position.set(c.x,f.y-1.1,c.z),d.rotation.y=f.th,e.add(d);let u=new _t(new It(2,.05,2),new Gt({color:"#2a2014",roughness:1}));u.position.set(c.x,f.y+.03,c.z),u.rotation.y=f.th,e.add(u);let g={g:d,q:c,y0:f.y,ph:Math.random()*6,up:0};g.ob={x:c.x,z:c.z,r:.9,yMin:f.y-1,yMax:f.y+.9,active:!1,solid:!1,onHit:x=>{x.damage(9,"spikes"),x.vel.multiplyScalar(.8),Bt.emit("fx",{kind:"sparks",x:x.pos.x,y:x.pos.y,z:x.pos.z,n:16}),Bt.emit("sfx",{name:"clang"}),Bt.emit("crash",{})}},e.obstacles.push(g.ob),o.push(g)}return e.update=(h,c)=>{e.t+=h;for(let f of o){let d=Math.sin(e.t*2.4+f.ph)>.1?1:0;f.up+=(d-f.up)*Math.min(1,h*14),f.g.position.y=f.y0-1.1+f.up*1.05,f.ob.active=f.up>.55,f.ob._hitCd&&(f.ob._hitCd=Math.max(0,f.ob._hitCd-h))}!e.announced&&c>s.s0-30&&(e.announced=!0,Bt.emit("bark",{who:"penny",text:(s.danger>0?"Right":"Left")+" glyph says death\u2026 and treasure. Your call, Dusty."}))},e}function Hf(s,t){let e=Qi(s,t),n=t.track,i=Es(),r=n.get(s.i0+2),a=$e(n,r.s,0),o=new ne;o.position.set(a.x,r.y,a.z),o.rotation.y=r.th;let l=(d,u,g,x,p=i.ruin)=>{let m=new _t(d,p);return m.position.set(u,g,x),m.castShadow=!0,m.receiveShadow=!0,o.add(m),m};for(let d=0;d<6;d++)l(new It(44-d*6,4,26-d*3),0,2+d*4,-16-d*.5);l(new It(10,6,8),0,27,-18),l(new It(4,12,4),-8,6,-2.2),l(new It(4,12,4),8,6,-2.2),l(new It(22,3,4.5),0,13.2,-2.2);let h=l(new It(6,5,1.2),0,17.2,-.6),c=l(new It(3.6,.5,.3),0,17.8,.1,i.gold),f=[l(new It(6,11.5,.8),-3,5.75,-2.6),l(new It(6,11.5,.8),3,5.75,-2.6)];for(let d of[-1,1]){let u=new Hn(i.flame);u.position.set(d*6.3,3.4,1.5),u.scale.setScalar(1.3),o.add(u);let g=l(new Zt(.18,.25,3,6),d*6.3,1.5,1.5)}return e.add(o),e.update=d=>{if(e.t+=d,e.bursting)for(let u of f)u.userData.v=(u.userData.v||0)-18*d,u.position.z+=9*d,u.position.y=Math.max(.4,u.position.y+u.userData.v*d*.3),u.rotation.x=Math.min(1.5,u.rotation.x+d*3)},e.burst=()=>{e.bursting=!0,Bt.emit("fx",{kind:"dust",x:a.x-r.fx*2,y:r.y+4,z:a.z-r.fz*2,n:80,spread:7}),Bt.emit("shake",{amount:1.4}),Bt.emit("sfx",{name:"slam"})},e.doorPos=new A(a.x-r.fx*6,r.y,a.z-r.fz*6),t.builder.templeGate=e,e}function Vf(s,t){let e=s.set.type;return e==="bridgeCollapse"?Uy(s,t):e==="pillars"?Ny(s,t):e==="croc"?Fy(s,t):e==="waterfall"?zy(s,t):e==="blades"?By(s,t):e==="statue"?Hy(s,t):{update(){},dispose(){},obstacles:[]}}var Gf=210,cu=19,Zn=new te,ji=new we,hu=new Je,ts=new A,Ko=new A,vn=new bt,na=class{constructor(t,e,n,i={}){this.scene=t,this.mat=e,this.cols=n,this.free=[],this.opts=i,this.created=0}get(){let t=this.free.pop();if(!t){let e=new ue,n=Gf*this.cols;e.setAttribute("position",new ie(new Float32Array(n*3),3).setUsage(Wn)),e.setAttribute("normal",new ie(new Float32Array(n*3),3).setUsage(Wn)),e.setAttribute("uv",new ie(new Float32Array(n*2),2).setUsage(Wn)),this.opts.color&&e.setAttribute("color",new ie(new Float32Array(n*3),3).setUsage(Wn));let i=[];for(let r=0;r<Gf-1;r++)for(let a=0;a<this.cols-1;a++){let o=r*this.cols+a,l=o+this.cols;i.push(o,o+1,l,l,o+1,l+1)}e.setIndex(i),t=new _t(e,this.mat),t.receiveShadow=!0,t.castShadow=!!this.opts.cast,t.frustumCulled=!0,this.created++}return this.scene.add(t),t}put(t){this.scene.remove(t),this.free.push(t)}};function Vy(s,t){return s.onBeforeCompile=e=>{e.uniforms.tRock={value:t},e.vertexShader=`varying vec3 vWN; varying vec3 vWP;
`+e.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
      vWN = normalize(mat3(modelMatrix) * objectNormal); vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=`uniform sampler2D tRock; varying vec3 vWN; varying vec3 vWP;
`+e.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
      float steep = smoothstep(0.82, 0.55, vWN.y);
      if (steep > 0.01) { vec3 an = abs(vWN); vec2 uvr = an.x > an.z ? vWP.zy : vWP.xy;
        vec3 rc = texture2D(tRock, uvr * 0.09).rgb * vec3(1.02, 0.98, 0.92); rc *= 0.85 + 0.3 * texture2D(tRock, uvr * 0.023).g;
        diffuseColor.rgb = mix(diffuseColor.rgb, rc * (0.75 + 0.25 * smoothstep(0.3, 0.9, fract(vWP.y * 0.35))), steep); }`)},s.customProgramCacheKey=()=>"slopeRock",s}var Qo=class{constructor(t,e,n,i,r){this.scene=t,this.track=e,this.gen=n,this.time=i,this.q=r;let a=this.lib=Cf(i),o=jh(),l=tu(),h=eu(),c=(u,g)=>{if(!r.pbr)return{};let x=ke(u,g);return{normalMap:x.normalMap,roughnessMap:x.roughnessMap}};this.mats={dirt:new Gt({map:o,roughness:1,...c("dirt",{strength:5,rough:.92,roughVar:.2})}),stone:new Gt({map:l,roughness:1,...c("stone",{strength:7,rough:.78,roughVar:.3})}),terrain:Vy(new Gt({map:h,roughness:1,vertexColors:!0,...c("ground",{strength:4,rough:.95})}),Yn()),plank:new Gt({map:nu(),roughness:1,...c("planks",{strength:5,rough:.82})}),rope:new Gt({color:"#8b7348",roughness:1})},this.roadPools={dirt:new na(t,this.mats.dirt,9),stone:new na(t,this.mats.stone,9)},this.terrainPool=new na(t,this.mats.terrain,cu,{color:!0});let f=r.foliage,d=r.shadows;this.pools={treeTrunk:new Ee(t,a.treeTrunk,Math.round(700*f)+60,{shadow:d}),treeCanopy:new Ee(t,a.treeCanopy,Math.round(700*f)+60,{shadow:d}),palmTrunk:new Ee(t,a.palmTrunk,Math.round(420*f)+40,{shadow:d}),palmLeaves:new Ee(t,a.palmLeaves,Math.round(420*f)+40,{shadow:d}),fern:new Ee(t,a.fern,Math.round(1500*f)+80,{}),bush:new Ee(t,a.bush,Math.round(900*f)+60,{}),vines:new Ee(t,a.vines,Math.round(260*f)+30,{}),block:new Ee(t,a.block,1400,{shadow:d,color:!0}),column:new Ee(t,a.column,260,{shadow:d}),head:new Ee(t,a.head,60,{shadow:d}),rock:new Ee(t,a.rock,900,{shadow:d,color:!0}),post:new Ee(t,a.post,500,{}),plank:new Ee(t,{geo:new It(5.8,.12,.42),mat:this.mats.plank},1400,{shadow:d})};{let u=Lf(i),g=this.pools;g.baluster=new Ee(t,u.baluster,700,{shadow:d}),g.rail=new Ee(t,u.rail,700,{shadow:d}),g.newel=new Ee(t,u.newel,160,{shadow:d}),g.lily=new Ee(t,u.lily,260,{}),g.reed=new Ee(t,u.reed,Math.round(500*f)+40,{}),g.clod=new Ee(t,u.clod,500,{}),g.log=new Ee(t,u.log,60,{shadow:d})}this._pickupMeshes(),this._waterMats(),this.shaftMat=new We({map:Sf(),transparent:!0,depthWrite:!1,blending:rn,opacity:.22,side:_e,fog:!0}),this.shaftGeo=new Me(7,40).translate(0,-20,0),this.built=[],this.nextIdx=0,this.pickups=[]}_pickupMeshes(){let t=new Zt(.42,.42,.09,18).rotateX(Math.PI/2),e=new Gt({color:"#f0c24a",metalness:1,roughness:.25,emissive:"#6a4a08",emissiveIntensity:.6}),n=(h,c)=>(h.onBeforeCompile=f=>{f.uniforms.uTime=this.time,f.vertexShader=`uniform float uTime;
`+f.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float ph = instanceMatrix[3][0] * 0.3 + instanceMatrix[3][2] * 0.17; float a = uTime * ${c} + ph; float ca = cos(a), sa = sin(a);
        transformed = vec3(ca * transformed.x + sa * transformed.z, transformed.y + sin(uTime * 2.0 + ph) * 0.12, -sa * transformed.x + ca * transformed.z);
        objectNormal = vec3(ca * objectNormal.x + sa * objectNormal.z, objectNormal.y, -sa * objectNormal.x + ca * objectNormal.z);`).replace("#include <beginnormal_vertex>","#include <beginnormal_vertex>")},h.customProgramCacheKey=()=>"spin"+c,h),i=(h,c)=>(h.onBeforeCompile=f=>{f.uniforms.uTime=this.time,f.vertexShader=`uniform float uTime;
`+f.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        float ph = instanceMatrix[3][0] * 0.3 + instanceMatrix[3][2] * 0.17; float a = uTime * ${c} + ph; float ca = cos(a), sa = sin(a);
        objectNormal = vec3(ca * objectNormal.x + sa * objectNormal.z, objectNormal.y, -sa * objectNormal.x + ca * objectNormal.z);`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed = vec3(ca * transformed.x + sa * transformed.z, transformed.y + sin(uTime * 2.0 + ph) * 0.12, -sa * transformed.x + ca * transformed.z);`)},h.customProgramCacheKey=()=>"spin"+c,h);this.coinPool=new Ee(this.scene,{geo:t,mat:i(e,"3.0")},600,{});let r=new cr(.55,0).scale(.8,1.3,.8),a=new Gt({color:"#7fe0c0",metalness:.6,roughness:.15,emissive:"#1f8a6a",emissiveIntensity:1.6});this.relicPool=new Ee(this.scene,{geo:r,mat:i(a,"1.5")},30,{});let o=new Zt(.28,.28,.9,12),l=new Gt({color:"#c8322a",metalness:.7,roughness:.3,emissive:"#5a0a04",emissiveIntensity:.8});this.nitroPool=new Ee(this.scene,{geo:o,mat:i(l,"2.0")},40,{}),this.haloMat=new si({map:Pi(),color:"#9fffe0",transparent:!0,blending:rn,depthWrite:!1,opacity:.9})}_waterMats(){let t=Ss();this.waterMat=new Gt({color:"#2a4030",roughness:.16,metalness:.05,envMapIntensity:.45,normalMap:t,normalScale:new Z(.6,.6),transparent:!0,opacity:.86}),this.riverMat=new Gt({color:"#3a5a48",roughness:.14,metalness:.05,envMapIntensity:.5,normalMap:t,normalScale:new Z(.9,.9)}),this.foamMat=new We({map:zo(),transparent:!0,depthWrite:!1,opacity:.55})}update(t,e){let n=this.gen.pieces;for(;this.nextIdx<n.length-1&&n[this.nextIdx].s0<t+this.q.drawDist;)this.buildPiece(n[this.nextIdx]),this.nextIdx++;for(;this.built.length&&this.built[0].p.s1<t-140;)this.releasePiece(this.built.shift());for(let i of this.built)i.set&&i.set.update(e,t);Uf(this.time.value),this.waterMat.normalMap.offset.x+=e*.03,this.waterMat.normalMap.offset.y+=e*.05;for(let i in this.pools)this.pools[i].flush();this.coinPool.flush(),this.relicPool.flush(),this.nitroPool.flush()}get obstacles(){let t=[];for(let e of this.built)if(e.set&&e.set.obstacles)for(let n of e.set.obstacles)t.push(n);return t}buildPiece(t){let e=this.track,n={p:t,meshes:[],inst:[],objs:[],pk:[],set:null},i=new ce(t.seed),r=t.i0,a=Math.min(t.i1+1,e.count-1),o=this.terrainPool.get();this._fillTerrain(o,r,a),n.meshes.push(["terrain",o]);let l=null,h=()=>{if(l&&l.b-l.a>=1){let d=this.roadPools[l.kind].get();this._fillRoad(d,l.a,l.b,l.lane,l.kind),n.meshes.push([l.kind,d])}l=null};for(let f of t.type==="fork"?[-1,1]:[0]){for(let d=r;d<=a;d++){let u=e.get(d),g=u.gap||u.bridge,x=u.surf===Wt.STONE?"stone":"dirt";if(g){l&&(l.b=d,h());continue}l?l.kind!==x&&(l.b=d,h(),l={a:d,b:d,kind:x,lane:f}):l={a:d,b:d,kind:x,lane:f},l.b=d}h()}this._edgesAndProps(t,n,i,r,t.i1),(t.type==="bridge"||t.type==="bridgeCollapse")&&this._bridge(t,n),(t.type==="gap"||t.type==="waterfall"||t.type==="bridge"||t.type==="bridgeCollapse")&&this._river(t,n),(t.type==="ford"||t.type==="croc")&&this._ford(t,n);for(let f of t.pickups)this._addPickup(f,n);let c={scene:this.scene,track:e,lib:this.lib,mats:this.mats,builder:this,time:this.time,q:this.q};t.set?n.set=Vf(t,c):t.type==="fork"?n.set=Of(t,c):t.type==="temple"?n.set=Hf(t,c):kf(t)&&(n.set=Ff(t,{...c,rec:n})),this.built.push(n),this.onBuilt&&this.onBuilt(t,n)}releasePiece(t){for(let[e,n]of t.meshes)e==="terrain"?this.terrainPool.put(n):this.roadPools[e]?this.roadPools[e].put(n):(this.scene.remove(n),n.geometry.dispose());for(let[e,n]of t.inst)e.release(n);for(let e of t.objs)this.scene.remove(e),e.traverse?.(n=>{n.geometry&&!n.userData.shared&&n.geometry.dispose()});for(let e of t.pk)e.taken||e.pool.release(e.slot),e.halo&&this.scene.remove(e.halo),e.dead=!0;this.pickups=this.pickups.filter(e=>!e.dead),t.set&&t.set.dispose()}inst(t,e,n,i,r,a,o,l,h){ji.setFromEuler(hu.set(0,a,0)),ts.set(o,l??o,o),Zn.compose(Ko.set(n,i,r),ji,ts);let c=this.pools[e].add(Zn,h);return c>=0&&t.inst.push([this.pools[e],c]),c}instM(t,e,n,i){let r=this.pools[e].add(n,i);return r>=0&&t.inst.push([this.pools[e],r]),r}_fillTerrain(t,e,n){let i=this.track,r=t.geometry,a=r.attributes.position.array,o=r.attributes.uv.array,l=r.attributes.color.array,h=0;for(let c=e;c<=n;c++){let f=i.get(c),d=f.fork+f.hw,u=f.fork>f.hw+.6?f.fork-f.hw-.6:0,g=[-52,-36,-24,-14,-(d+6),-(d+2.4),-(d+.9),-(d+.2),-Math.max(u,.01)-0,-u*.5,0,u*.5,Math.max(u,.01),d+.2,d+.9,d+2.4,d+6,14,24];g[18]=36;let x=[-52,-36,-22,-(d+6),-(d+2.4),-(d+.9),-(d+.2),-(u||.02),-u*.5,0,u*.5,u||.02,d+.2,d+.9,d+2.4,d+6,22,36,52];for(let p=0;p<cu;p++){let m=x[p],v=i.terrainY(f,m);!f.gap&&!f.bridge&&Math.abs(m)<=d+.25&&!(u&&Math.abs(m)<u)&&(v=i.roadY(f,m)-.22),a[h*3]=f.x+f.rx*m,a[h*3+1]=v,a[h*3+2]=f.z+f.rz*m,o[h*2]=m/9,o[h*2+1]=f.s/9;let y=gt((f.y-v)/30,0,1),_=gt((v-f.y)/8,0,1);vn.setRGB(.95-y*.45+_*.1,.95-y*.3+_*.05,.85-y*.25),f.ford&&Math.abs(m)>d&&Math.abs(m)<d+16&&vn.multiplyScalar(.75),l[h*3]=vn.r,l[h*3+1]=vn.g,l[h*3+2]=vn.b,h++}}this._finish(r,n-e+1,cu)}_fillRoad(t,e,n,i,r){let a=r==="stone",o=this.track,l=t.geometry,h=l.attributes.position.array,c=l.attributes.uv.array,f=0;for(let d=e;d<=n;d++){let u=o.get(d),g=i*u.fork,x=u.hw,p=[-x-.35,-x,-x*.72,-x*.38,0,x*.38,x*.72,x,x+.35];for(let m=0;m<9;m++){let v=g+p[m],y=m===0||m===8,_=p[m]/x,C=y?0:.06*(1-_*_)-(Math.abs(Math.abs(_)-.55)<.2?.012:0);h[f*3]=u.x+u.rx*v,h[f*3+1]=o.roadY(u,v)+(y?-.2:.015+C),h[f*3+2]=u.z+u.rz*v,a?(c[f*2]=p[m]/3.2,c[f*2+1]=u.s/3.2):(c[f*2]=(p[m]+x)/(2*x)*.92+.04,c[f*2+1]=u.s/8),f++}}this._finish(l,n-e+1,9)}_finish(t,e,n){t.setDrawRange(0,(e-1)*(n-1)*6),t.attributes.position.needsUpdate=!0,t.attributes.uv.needsUpdate=!0,t.attributes.color&&(t.attributes.color.needsUpdate=!0);let i=t.attributes.position.array,r=t.attributes.normal.array;for(let d=0;d<e;d++)for(let u=0;u<n;u++){let g=d*n+u,x=d*n+Math.max(u-1,0),p=d*n+Math.min(u+1,n-1),m=Math.max(d-1,0)*n+u,v=Math.min(d+1,e-1)*n+u,y=i[p*3]-i[x*3],_=i[p*3+1]-i[x*3+1],C=i[p*3+2]-i[x*3+2],w=i[v*3]-i[m*3],R=i[v*3+1]-i[m*3+1],P=i[v*3+2]-i[m*3+2],b=_*P-C*R,M=C*w-y*P,T=y*R-_*w,L=Math.hypot(b,M,T)||1;M<0&&(b=-b,M=-M,T=-T),r[g*3]=b/L,r[g*3+1]=M/L,r[g*3+2]=T/L}t.attributes.normal.needsUpdate=!0,t.computeBoundingSphere();let a=t.boundingSphere,o=0,l=0,h=0,c=e*n;for(let d=0;d<c;d++)o+=i[d*3],l+=i[d*3+1],h+=i[d*3+2];o/=c,l/=c,h/=c;let f=0;for(let d=0;d<c;d++)f=Math.max(f,Math.hypot(i[d*3]-o,i[d*3+1]-l,i[d*3+2]-h));a.center.set(o,l,h),a.radius=f+2}_edgesAndProps(t,e,n,i,r){let a=this.track,o=this.q.foliage,l=t.type==="temple"||t.type==="pillars"||t.type==="statue"||t.type==="blades";for(let h=i;h<=r;h++){let c=a.get(h),f=c.fork+c.hw;for(let d of[-1,1]){let u=d<0?c.edgeL:c.edgeR;if(u===Dt.WALL&&!c.gap&&!c.bridge&&(h-i)%2===0&&!c.tunnel&&!c.causeway&&!(c.ledge&&Math.sign(c.ledge)===d)){let x=d*(f+.95),p=a.roadY(c,d*f);vn.setHSL(.13,.12,n.range(.42,.6)),this.inst(e,"block",c.x+c.rx*x,p+.35+n.range(-.1,.1),c.z+c.rz*x,c.th+n.range(-.08,.08),1,n.range(.8,1.25),vn),n.chance(.22)&&this.inst(e,"block",c.x+c.rx*x,p+1.5,c.z+c.rz*x,c.th+n.range(-.2,.2),n.range(.75,.95),1,vn),n.chance(.05*o*10/10)&&this.inst(e,"fern",c.x+c.rx*(x+d*.8),p+1.2,c.z+c.rz*(x+d*.8),n.range(0,6),n.range(.6,1))}if(u===Dt.CLIFF&&!c.gap&&!c.bridge&&(h-i)%3===0&&n.chance(.6)){let x=d*(f+.45);vn.setHSL(.1,.1,n.range(.4,.55)),this.inst(e,"rock",c.x+c.rx*x,a.roadY(c,d*f)-.15,c.z+c.rz*x,n.range(0,6),n.range(.22,.4),void 0,vn)}if(h%2)continue;if(c.gap||c.bridge){if(n.chance(.08*o)){let x=d*n.range(8,30);this._palm(e,n,c.x+c.rx*x,a.terrainY(c,x)-.3,c.z+c.rz*x,n.range(1.2,1.8))}if(n.chance(.12)){let x=d*n.range(4,34);vn.setHSL(.1,.1,n.range(.35,.55)),this.inst(e,"rock",c.x+c.rx*x,a.terrainY(c,x),c.z+c.rz*x,n.range(0,6),n.range(.8,2.6),void 0,vn)}if(n.chance(.18*o)){let x=d*n.range(32,46),p=a.terrainY(c,x);this._tree(e,n,c,x,p)}continue}let g=u===Dt.CLIFF;if(n.chance(.42*o)){let x=d*(f+(g?n.range(36,48):u===Dt.WALL?n.range(4.5,28):n.range(6.5,30)));this._tree(e,n,c,x,a.terrainY(c,x))}if(!g&&n.chance(.3*o)){let x=d*(f+n.range(3.5,20));this._palm(e,n,c.x+c.rx*x,a.terrainY(c,x)-.2,c.z+c.rz*x,n.range(.85,1.35))}if(!g&&n.chance(.85*o)){let x=d*(f+n.range(1.2,9));this.inst(e,"fern",c.x+c.rx*x,a.terrainY(c,x)-.1,c.z+c.rz*x,n.range(0,6),n.range(.7,1.5))}if(!g&&n.chance(.5*o)){let x=d*(f+n.range(4,22));this.inst(e,"bush",c.x+c.rx*x,a.terrainY(c,x),c.z+c.rz*x,n.range(0,6),n.range(.9,1.8))}if(n.chance(.06)){let x=d*(f+n.range(2,16));vn.setHSL(.1,.12,n.range(.35,.55)),this.inst(e,"rock",c.x+c.rx*x,a.terrainY(c,x)-.2,c.z+c.rz*x,n.range(0,6),n.range(.5,1.6),void 0,vn)}if(!g&&n.chance(l?.09:.025)){let x=d*(f+n.range(3,10));this.inst(e,"column",c.x+c.rx*x,a.terrainY(c,x)-.3,c.z+c.rz*x,n.range(0,6),1,n.chance(.5)?n.range(.35,.8):1)}if(!g&&n.chance(l?.02:.006)){let x=d*(f+n.range(4,9));this.inst(e,"head",c.x+c.rx*x,a.terrainY(c,x)-.6,c.z+c.rz*x,c.th+(d<0?1.57:-1.57)+n.range(-.4,.4),n.range(.9,1.4))}if(n.chance(.07*o)&&!c.tunnel){let x=d*(f+n.range(-.5,2.5));this.inst(e,"vines",c.x+c.rx*x,a.roadY(c,d*f)+n.range(8.5,11),c.z+c.rz*x,c.th+n.range(-.4,.4),n.range(.8,1.2))}}if(c.fork>c.hw+1.5&&h%3===0){let d=c.fork-c.hw-.6;n.chance(.5)&&this.inst(e,"fern",c.x,a.terrainY(c,0),c.z,n.range(0,6),n.range(.8,1.4)),d>2&&n.chance(.35)&&this._tree(e,n,c,n.range(-d+1,d-1),a.terrainY(c,0)),d>1.5&&n.chance(.15)&&this.inst(e,"column",c.x,a.terrainY(c,0)-.2,c.z,n.range(0,6),.9,n.range(.4,1))}if(h%37===0&&n.chance(.55)&&!c.tunnel){let d=new _t(this.shaftGeo,this.shaftMat);d.userData.shared=!0;let u=n.range(-f-4,f+4);d.position.set(c.x+c.rx*u,c.y+26,c.z+c.rz*u),d.rotation.set(0,c.th+n.range(-.6,.6),.38),d.rotation.order="YXZ",d.rotateZ(0),d.scale.set(n.range(.7,1.6),1,1),this.scene.add(d),e.objs.push(d)}}}_palm(t,e,n,i,r,a){ji.setFromEuler(hu.set(e.range(-.08,.08),e.range(0,6.28),e.range(-.08,.08))),ts.set(a,a,a),Zn.compose(Ko.set(n,i,r),ji,ts),this.instM(t,"palmTrunk",Zn),this.instM(t,"palmLeaves",Zn)}_tree(t,e,n,i,r){let a=e.range(.75,1.35),o=e.range(0,6.28),l=n.x+n.rx*i,h=n.z+n.rz*i;this.inst(t,"treeTrunk",l,r-.3,h,o,a,a*e.range(.9,1.25));let[c,f]=t.inst[t.inst.length-1]||[];c&&(c.mesh.getMatrixAt(f,Zn),this.instM(t,"treeCanopy",Zn))}_bridge(t,e){let n=this.track;t.planks=[];for(let r=t.i0;r<=t.i1;r++)for(let a=0;a<2;a++){let o=r+a*.5,l=n.get(r),h=n.get(r+1),c=a*.5,f=l.x+(h.x-l.x)*c,d=l.y+(h.y-l.y)*c-.07,u=l.z+(h.z-l.z)*c,g=Math.sin(o*12.9)*.5*.06;ji.setFromEuler(hu.set(Math.atan2(h.y-l.y,1)*-1,l.th+g,0,"YXZ")),ts.set(l.hw/2.6*(.94+Math.abs(g)),1,1),Zn.compose(Ko.set(f,d,u),ji,ts);let x=this.pools.plank.add(Zn);x>=0&&(e.inst.push([this.pools.plank,x]),t.planks.push({slot:x,i:r,x:f,y:d,z:u,th:l.th,pitch:Math.atan2(h.y-l.y,1)*-1,fallen:!1,vy:0,rx:0,rz:0}))}let i=[[],[]];for(let r=t.i0-2;r<=t.i1+2;r+=2){let a=n.get(r);for(let o=0;o<2;o++){let l=(o?1:-1)*(a.hw+.25);i[o].push(new A(a.x+a.rx*l,a.y+1.05,a.z+a.rz*l))}}for(let r=0;r<2;r++){let a=new gs(i[r]),o=new _t(new $i(a,i[r].length*2,.05,5),this.mats.rope);o.castShadow=!1,this.scene.add(o),e.objs.push(o),t["rope"+r]=o}for(let r=t.i0;r<=t.i1;r+=4){let a=n.get(r);for(let o of[-1,1])this.inst(e,"post",a.x+a.rx*o*(a.hw+.25),a.y-.75,a.z+a.rz*o*(a.hw+.25),a.th,1,1)}for(let r of[t.i0-1,t.i1+1]){let a=n.get(r);for(let o of[-1,1])this.inst(e,"column",a.x+a.rx*o*(a.hw+.9),a.y-.6,a.z+a.rz*o*(a.hw+.9),a.th,.6,.45)}}_river(t,e){let n=this.track,i=[],r=t.type.startsWith("bridge")?t.i0:Math.max(t.i0,Math.round(t.lipS)-4),a=t.type.startsWith("bridge")?t.i1:Math.round(t.landS)+4,o=n.get(r),l=n.get(a),h=n.get(r+a>>1),c=h.floorY+1.2,f=h.x,d=h.z,u=new Me(26+(a-r),120,1,1);u.rotateX(-Math.PI/2);let g=new _t(u,this.riverMat);g.position.set(f,c,d),g.rotation.y=h.th,g.receiveShadow=!0,this.scene.add(g),e.objs.push(g)}_ford(t,e){let n=this.track,i=n.get(t.i0+t.i1>>1),r=new Me(90,(t.i1-t.i0)*.78,1,1);r.rotateX(-Math.PI/2);let a=new _t(r,this.waterMat);a.position.set(i.x,t.waterY,i.z),a.rotation.y=i.th,a.renderOrder=2,this.scene.add(a),e.objs.push(a)}_addPickup(t,e){let n=this.track;if(!n.sampleAtS(t.s))return;let r=n.pointAt(t.s,t.lat,{x:0,y:0,z:0}),a=t.yAbs!==void 0?t.yAbs:r.y+(t.y||1),o=t.kind==="coin"?this.coinPool:t.kind==="relic"?this.relicPool:this.nitroPool;ji.identity(),ts.set(1,1,1),Zn.compose(Ko.set(r.x,a,r.z),ji,ts);let l=o.add(Zn);if(l<0)return;let h={kind:t.kind,x:r.x,y:a,z:r.z,s:t.s,pool:o,slot:l,taken:!1,value:t.value||1,rare:t.rare};if(t.kind==="relic"){let c=new Hn(this.haloMat);c.scale.set(3.2,3.2,1),c.position.set(r.x,a,r.z),this.scene.add(c),h.halo=c}e.pk.push(h),this.pickups.push(h)}take(t){t.taken=!0,t.pool.release(t.slot),t.halo&&(this.scene.remove(t.halo),t.halo=null)}stats(){let t=0;for(let e in this.pools)t+=this.pools[e].used;return{pieces:this.built.length,instances:t,ribbons:this.terrainPool.created+this.roadPools.dirt.created+this.roadPools.stone.created}}reset(){for(;this.built.length;)this.releasePiece(this.built.shift());this.nextIdx=0,this.pickups=[]}};var Fe=()=>new A,Wf=Fe(),Gy=Fe(),Oe=Fe(),He=Fe(),Ii=Fe(),De=Fe(),gr=Fe(),uu=Fe(),Jn=Fe(),fn=Fe(),Xf=Fe(),ia=new we,jo=new we,Wy=new A;function Xy(s,t,e,n){switch(s){case 2:{let i=Math.sin(t*3.3+Math.floor(e*.9)*1.7),r=Math.sin(e*2.9+Math.floor(t*1.1)*2.3);return .011*(i*r>.15?1:0)-.004}case 3:return t*2.05-Math.floor(t*2.05)>.86?-.022:.004*Math.sin(t*9.1+e);case 1:return-.05*n+.022*Math.sin(t*.7+e*.4)*Math.sin(t*.31-e*.2);case 4:return-.08*n;case 5:return .045*Math.sin(t*1.3+e*.9)*Math.sin(t*.53+e*1.7);default:return .013*Math.sin(t*.92+e*.35)*Math.sin(t*.41)+.006*Math.sin(t*4.7+e*3.1)}}var qf=[[.17,.72],[.21,.62],[.13,.82],[.14,.78],[.22,.58],[.2,.62],[.15,.7]],Yf=[[0,9,1],[9,16,.8],[16,23,.64],[23,30,.52],[30,99,.44]],tl=class{constructor(t,e){this.track=t,this.T=e,this.pos=Fe(),this.vel=Fe(),this.w=Fe(),this.q=new we,this.fwd=Fe(),this.up=Fe(),this.left=Fe();let n=.84,i=1.38,r=-1.3,a=.08;this.wheels=[{lp:new A(n,a,i),front:!0,side:1},{lp:new A(-n,a,i),front:!0,side:-1},{lp:new A(n,a,r),front:!1,side:1},{lp:new A(-n,a,r),front:!1,side:-1}].map(o=>({...o,comp:0,compPrev:0,contact:!1,hint:0,spin:0,rot:0,slipLat:0,slipLong:0,surf:0,load:0,cp:Fe(),center:Fe(),n:Fe(0,1,0),touchT:0})),this.probes=[];for(let o of[-.95,.95])for(let l of[-2.05,2.15])this.probes.push({lp:new A(o,-.32,l),roof:!1}),this.probes.push({lp:new A(o*.8,1.05,l*.55),roof:!0});this.probes.push({lp:new A(0,1.15,-.2),roof:!0}),this.wallPts=[];for(let o of[-.98,.98])for(let l of[-2.1,0,2.2])this.wallPts.push(new A(o,.1,l));this.events=[],this.setUpgrades({engine:0,nitro:0,suspension:0,armor:0}),this.reset(0,0,0,0,0)}setUpgrades(t){this.up_=t,this.maxHp=100+t.armor*25,this.dmgMul=1-t.armor*.07,this.nitroCap=this.T.nitroCans+Math.floor((t.nitro+1)/2),this.landTol=1+t.suspension*.14}reset(t,e,n,i,r,a=0){this.pos.set(t,e,n),this.q.setFromAxisAngle(Wf.set(0,1,0),i),this.updateAxes(),this.vel.copy(this.fwd).multiplyScalar(r),this.w.set(0,0,0);for(let o of this.wheels)o.comp=o.compPrev=.1,o.contact=!0,o.hint=a;this.hint=a,this.steer=0,this.airTime=0,this.grounded=!0,this.contacts=4,this.gear=0,this.rpm=900,this.shiftT=0,this.throttle=0,this.nitroT=0,this.nitroing=!1,this.flipT=0,this.stuckT=0,this.landing=null,this.roofHit=!1,this.drift=0,this.slipAngle=0,this.speed=r,this.fwdSpeed=r,this.accLong=0,this.accLat=0,this.flickT=0,this._wt=0,this.capped=!1,this.impactVn=0,this.wasAir=!1,this.lastSurf=0,this._preVel=new A().copy(this.vel),this.groundN=new A(0,1,0),this.hp===void 0&&(this.hp=this.maxHp,this.nitro=this.nitroCap,this.mud=0,this.wear=0)}fullReset(){this.hp=this.maxHp,this.nitro=this.nitroCap,this.mud=.05,this.wear=0,this.invincible=this.invincible||!1}updateAxes(){this.fwd.set(0,0,1).applyQuaternion(this.q),this.up.set(0,1,0).applyQuaternion(this.q),this.left.set(1,0,0).applyQuaternion(this.q)}damage(t,e){if(this.invincible)return;let n=t*this.dmgMul*(this.dmgScale||1);this.hp=Math.max(0,this.hp-n),this.wear=Math.min(1,this.wear+n/160),this.events.push({type:"damage",amount:n,why:e})}_angAcc(t,e){let n=this.T.inertia;return jo.copy(this.q).invert(),e.copy(t).applyQuaternion(jo),e.set(e.x/n[0],e.y/n[1],e.z/n[2]).applyQuaternion(this.q),e}_invMassAlong(t,e){return He.crossVectors(t,e),this._angAcc(He,Oe),Oe.cross(t),1/this.T.mass+Oe.dot(e)}applyImpulse(t,e){this.vel.addScaledVector(e,1/this.T.mass),fn.subVectors(t,this.pos),Xf.crossVectors(fn,e),this._angAcc(Xf,Oe),this.w.add(Oe)}step(t,e,n){let i=this.T,r=i.mass,a=this.track;this.updateAxes();let o=Wf.set(0,-9.81*r,0),l=Gy.set(0,0,0),h=(W,O)=>{o.add(W),fn.subVectors(O,this.pos),l.add(He.crossVectors(fn,W))},c=this.vel.length();this.speed=c;let f=this.vel.dot(this.fwd);this.fwdSpeed=f;let d=n.assist,u=n.steerSens||1,g=i.maxSteer/(1+Math.max(0,Math.abs(f)-4)*i.steerSpeedFalloff/10)*(1+this.drift*i.driftSteerBoost),x=gt(e.steer*u,-1,1)*g,p=this.drift>.2&&x*this.slipAngle<0,m=(Math.abs(x)<Math.abs(this.steer)?i.steerReturn:i.steerRate)*(p?1.8:1)*t;this.steer+=gt(x-this.steer,-m,m);let v=e.throttle,y=e.brake,_=Yf[this.gear];this.shiftT>0&&(this.shiftT-=t),f>_[1]+.5&&this.gear<4?(this.gear++,this.shiftT=.14,this.events.push({type:"shift",up:!0})):f<_[0]-1.5&&this.gear>0&&(this.gear--,this.events.push({type:"shift",up:!1}));let C=Yf[this.gear],w=gt((Math.abs(f)-C[0])/(C[1]-C[0]),0,1.15),R=this.grounded?1100+w*5200:1100+v*5600;this.rpm=le(this.rpm,Math.max(900+v*1200,R),1-Math.exp(-12*t));let P=this.up_,b=i.topSpeed+P.engine*1.7+(this.nitroing?i.nitroTopBoost+P.nitro*.8:0),M=.78+.22*Math.sin(gt((this.rpm-1e3)/5600,0,1)*Math.PI),T=n.speedCap||999;this.capped=f>T-1.5;let L=Math.min(b,Math.max(T,i.topSpeed*.8)),U=1+i.launchPunch*gt(1-Math.max(f,0)/14,0,1),B=v*i.engineForce*(1+P.engine*.08)*C[2]*M*U*gt(1-Math.pow(Math.max(f,0)/L,4),0,1);this.shiftT>0&&(B*=.35);let q=!1;y>0&&f<1&&v<.1&&(q=!0,B=-y*i.engineForce*.55*gt(1-Math.max(-f,0)/i.reverseSpeed,0,1)),e.nitroPressed&&!this.nitroing&&this.nitro>=1&&(this.nitro-=1,this.nitroing=!0,this.nitroT=i.nitroDur+P.nitro*.2,this.events.push({type:"nitro"})),this.nitroing&&(this.nitroT-=t,this.nitroT<=0&&(this.nitroing=!1)),this._wt=gt(-this.accLong/9.81,-.55,.7)*i.weightTransfer,this.flickT>0&&(this.flickT-=t);let H=e.steer;if(Math.abs(H)>.55){let W=Math.sign(H);this._flickSign&&W!==this._flickSign&&this._flickAge<.5&&c>12&&(this.flickT=.55,this.events.push({type:"flick"})),W!==this._flickSign&&(this._flickAge=0),this._flickSign=W}this._flickAge=(this._flickAge||0)+t;let j=0,G=Wy.set(0,0,0),rt=0,pt=0,vt=i.maxTravel+P.suspension*.04,Ot=i.restLength+i.wheelRadius,$t=e.handbrake;for(let W=0;W<4;W++){let O=this.wheels[W],lt=Ii.copy(O.lp).applyQuaternion(this.q).add(this.pos),X=a.query(lt.x,lt.z,O.hint);O.hint=X.idx,O.surf=X.surf,De.set(X.nx,X.ny,X.nz);let nt=this.up.dot(De),D=1/0;if(!X.isVoid&&nt>.25){let mt=Xy(X.surf,a.get(X.idx).s+X.t*1,X.lat,this._sinkMul||1);O.relief=mt,D=(lt.y-X.h-mt)*De.y/nt}if(O.compPrev=O.comp,D<Ot){O.comp=Math.min(Ot-D,vt+.12),O.contact||(O.touchT=this.airTime),O.contact=!0,j++,G.add(De),O.cp.copy(lt).addScaledVector(this.up,-D);let mt=(O.comp-O.compPrev)/t;O.cv=mt;let st=O.comp/vt,ht=i.springK*O.comp*(1+i.springProg*Math.max(0,st-.6)*Math.max(0,st-.6)*4),ft=Math.abs(mt)<1.2?mt:Math.sign(mt)*(1.2+(Math.abs(mt)-1.2)*.55);ht+=(mt>0?i.damperBump:i.damperRebound)*ft;let zt=vt-.07;if(O.comp>zt){let ut=O.comp-zt;ht+=ut*ut*22e5+Math.max(0,mt)*5200*Math.min(1,ut/.07),mt>2.5&&!O._bumped&&(O._bumped=!0,this.events.push({type:"bottom",k:W,cv:mt}))}else O._bumped=!1;let St=this.wheels[W^1];ht+=(O.comp-St.comp)*i.antiRoll,ht=Math.max(0,ht),O.load=ht,h(Oe.copy(this.up).multiplyScalar(ht),O.cp);let I=O.front?this.steer:0;gr.copy(this.fwd).multiplyScalar(Math.cos(I)).addScaledVector(this.left,-Math.sin(I)),gr.addScaledVector(De,-gr.dot(De)).normalize(),uu.crossVectors(De,gr),fn.subVectors(O.cp,this.pos),Jn.crossVectors(this.w,fn).add(this.vel);let S=Jn.dot(gr),V=Jn.dot(uu),Q=Math.min(ht,3.2*r*9.81/4),it=_f[X.surf]*(n.grip||1),tt=$t&&!O.front,Pt=Math.atan2(V,Math.max(Math.abs(S),3)),yt=qf[X.surf]||qf[0],Mt=Math.abs(Pt)/(yt[0]*i.peakSlip/.145),ee=Mt<1?1.5*Mt-.5*Mt*Mt*Mt:Math.max(Math.min(yt[1],i.slideFalloff+.08),1-(Mt-1)*.3),at=this._wt,At=i.gripLat*it*(tt?i.rearGripHandbrake:1)*(O.front?1+at:1-at*1.15)*(!O.front&&this.flickT>0?.86:1);!O.front&&this.drift>.2&&(At*=le(1,.8,d*0));let Ht=-Math.sign(V)*At*Q*ee;Math.abs(S)<2&&Math.abs(V)<1.5&&(Ht=gt(-V*r*.25/t/4,-At*Q,At*Q));let Vt=0,Ct=O.front?i.frontTorque/2:(1-i.frontTorque)/2;if(Vt+=B*Ct,y>0&&!q){let ut=i.brakeForce*(O.front?i.brakeBias:1-i.brakeBias)*.5*y;Vt-=gt(S*r/4/t,-ut,ut)}if(tt){let ut=i.gripLong*it*Q*.75;Vt=-gt(S*r/4/t,-ut,ut)}Vt-=S*(i.rollRes+Mf[X.surf]*42);let se=Math.max(i.gripLat,i.gripLong)*it*Q,qt=Math.hypot(Ht,Vt),de=0;if(qt>se&&qt>0){let ut=se/qt;de=1-ut,Ht*=ut,Vt*=ut}O.slipLat=Math.abs(Pt),O.slipLong=de,O.front||(rt+=Math.abs(Pt)*.5),pt+=X.surf===Wt.WATER?1:0;let N=Oe.copy(O.cp).addScaledVector(this.up,.62);h(He.copy(gr).multiplyScalar(Vt).addScaledVector(uu,Ht),N),O.spin=S/i.wheelRadius*(1+de*2)*(tt?0:1),O.center.copy(lt).addScaledVector(this.up,-(D-i.wheelRadius))}else O.contact=!1,O.comp=Math.max(0,O.comp-t*3),O.load=0,O.spin=le(O.spin,v*60,t*2),O.center.copy(lt).addScaledVector(this.up,-i.restLength);O.rot+=O.spin*t}this.contacts=j;let J=j>0;j?G.normalize():G.set(0,1,0),this.groundN.copy(G);let ot=Oe.copy(this.vel).addScaledVector(G,-this.vel.dot(G));this.slipAngle=c>4?Math.atan2(ot.dot(this.left),Math.max(.1,ot.dot(this.fwd))):0;let Rt=J&&c>9&&Math.abs(this.slipAngle)>.22;if(this.drift=Rt?Math.min(1,this.drift+t*3):Math.max(0,this.drift-t*4),h(Oe.copy(this.vel).multiplyScalar(-c*i.dragCoef),this.pos),j>=2&&h(Oe.copy(G).multiplyScalar(-i.downforce*c*c),this.pos),this.nitroing&&J){let W=gt((T-f)/2.5,0,1);h(Oe.copy(this.fwd).multiplyScalar(i.nitroForce*(1+P.nitro*.1)*W),this.pos)}if(J&&f>T+1&&h(Oe.copy(this.fwd).multiplyScalar(-r*4.5*gt((f-T-1)/3,0,1)),this.pos),J){let W=this.w.dot(this.up),O=2.68,lt=f*Math.tan(this.steer)/O*-1,X=Math.abs(this.slipAngle)-(i.spinSlip-d*.1);X>0&&l.addScaledVector(this.up,Math.sign(this.slipAngle)*X*i.inertia[1]*9*(.5+d)),l.addScaledVector(this.up,-(W-lt)*i.inertia[1]*i.yawDamping*($t?.15:.6+d*.6)*(Rt?.35:1)*(this.flickT>0?.45:1)),Rt&&this.steer*this.slipAngle<0&&l.addScaledVector(this.up,this.slipAngle*Math.min(1,Math.abs(this.steer)/(i.maxSteer*.5))*i.inertia[1]*i.counterCatch),Rt&&v>.2&&h(Oe.copy(ot).normalize().multiplyScalar(r*i.driftAssist*3.2*v),this.pos),He.crossVectors(this.up,G);let nt=He.dot(this.fwd),D=He.dot(this.left),mt=this.w.dot(this.fwd),st=this.w.dot(this.left);if(l.addScaledVector(this.fwd,(nt*i.rollStab-mt*3)*i.inertia[2]*i.stability),l.addScaledVector(this.left,(D*6-st*1.2)*i.inertia[0]*i.stability*.5),$t&&c>8&&l.addScaledVector(this.up,-this.steer*i.inertia[1]*3.2),n.lane&&d>0){let ht=n.lane,ft=Math.abs(ht.laneLat)/ht.hw,zt=d*(ht.narrow?1:.35)*gt((ft-.35)/.65,0,1)*(1-Math.abs(e.steer)*.6);if(zt>0){h(Oe.set(ht.rx,0,ht.rz).multiplyScalar(-Math.sign(ht.laneLat)*r*4.5*zt),this.pos);let St=Math.atan2(this.fwd.x,this.fwd.z)-ht.th,I=Math.atan2(Math.sin(St),Math.cos(St));l.addScaledVector(this.up,-I*i.inertia[1]*5*zt)}}}if(J)this.wasAir;else{this.airTime+=t,jo.copy(this.q).invert();let W=Oe.copy(this.w).applyQuaternion(jo),O=e.pitch,lt=e.steer;if(Math.abs(O)>.05&&(W.x=le(W.x,O*i.airPitch*.62,1-Math.exp(-3.2*t))),Math.abs(lt)>.05&&(W.z=le(W.z,lt*i.airRoll*.6,1-Math.exp(-2.2*t)),W.y=le(W.y,-lt*i.airYaw*.6,1-Math.exp(-2*t))),this.w.copy(W.applyQuaternion(this.q)).multiplyScalar(1-.25*t),n.landAssist>0&&n.landN){He.crossVectors(this.up,n.landN);let X=n.landAssist*(Math.abs(O)>.05?.35:1);l.addScaledVector(He,14*i.inertia[0]*X),l.addScaledVector(this.w,-2.2*i.inertia[0]*X)}}if(J&&this.airTime>.38&&!this.landing&&(this.landing={t:0,first:this.airTime,air:this.airTime,vn:-this._preVel.dot(G),ang:0,minUp:1,wheels:0}),this.landing){let W=this.landing;W.t+=t,W.minUp=Math.min(W.minUp,this.up.dot(G)),W.wheels=Math.max(W.wheels,j),(j>=3||W.t>.22||this.roofHit)&&this._judgeLanding()}J&&!this.landing&&(this.airTime=0),this.grounded=J,this._preVel=(this._preVel||Fe()).copy(this.vel),He.copy(this.vel),this.vel.addScaledVector(o,t/r),this._angAcc(l,Oe),this.w.addScaledVector(Oe,t),J&&this.w.multiplyScalar(1-.4*t);let ct=this.w.length();ct>9&&this.w.multiplyScalar(9/ct),this.pos.addScaledVector(this.vel,t);{let W=(this.vel.x-He.x)/t,O=(this.vel.y-He.y)/t+9.81,lt=(this.vel.z-He.z)/t,X=W*this.fwd.x+O*this.fwd.y+lt*this.fwd.z,nt=W*this.left.x+O*this.left.y+lt*this.left.z,D=1-Math.exp(-14*t);this.accLong+=(gt(X,-30,30)-this.accLong)*D,this.accLat+=(gt(nt,-30,30)-this.accLat)*D}if(ia.set(this.w.x*t*.5,this.w.y*t*.5,this.w.z*t*.5,0).multiply(this.q),this.q.x+=ia.x,this.q.y+=ia.y,this.q.z+=ia.z,this.q.w+=ia.w,this.q.normalize(),this._bodyCollide(t),this._walls(t,n),n.obstacles&&this._obstacles(n.obstacles),J){let W=this.wheels[2].surf;this.lastSurf=W,(W===Wt.MUD||W===Wt.JUNGLE||W===Wt.WATER)&&(this.mud=Math.min(1,this.mud+t*.04*Math.min(c,20)/20))}pt>1&&c>6&&this.events.push({type:"splash",speed:c}),this.throttle=v,this.up.y<.3&&c<5?this.flipT+=t:this.flipT=Math.max(0,this.flipT-t*2),e.throttle>.5&&c<1.2&&!this.landing?this.stuckT+=t:this.stuckT=Math.max(0,this.stuckT-t)}_judgeLanding(){let t=this.landing;this.landing=null;let e=this.landTol,n=Math.acos(gt(t.minUp,-1,1))*57.3,i=Math.max(0,t.vn),r=this.wheels.reduce((o,l)=>l.contact?Math.max(o,Math.abs(l.touchT-t.first)):o,0),a;this.roofHit||t.minUp<.25?a="CRASH":n<11*e&&i<12.5*e&&r<.14?a="PERFECT":n<22*e&&i<17*e?a="GOOD":n<48?a="ROUGH":a="CRASH",a==="PERFECT"&&this.vel.multiplyScalar(1.03),a==="ROUGH"&&(this.vel.multiplyScalar(.86),this.damage(5+i*.4,"landing")),a==="CRASH"&&(this.vel.multiplyScalar(.55),this.damage(14+i,"crash")),this.events.push({type:"land",quality:a,air:t.air,vn:i,ang:n}),this.airTime=0,this.roofHit=!1}_bodyCollide(t){let e=this.T.mass,n=!1;for(let r of this.probes){let a=Ii.copy(r.lp).applyQuaternion(this.q).add(this.pos),o=this.track.query(a.x,a.z,this.hint);if(o.isVoid)continue;let l=o.h-a.y;if(l<=0||l>2.5)continue;De.set(o.nx,o.ny,o.nz),fn.subVectors(a,this.pos),Jn.crossVectors(this.w,fn).add(this.vel);let h=Jn.dot(De);if(this.pos.addScaledVector(De,l*.35),h<0){let c=-1.18*h/this._invMassAlong(fn,De),f=Oe.copy(De).multiplyScalar(c);He.copy(Jn).addScaledVector(De,-h);let d=He.length();d>.01&&f.addScaledVector(He.normalize(),-Math.min(c*.55,d*e*.2)),this.applyImpulse(a,f),r.roof&&-h>1.5&&(n=!0),-h>4&&this.events.push({type:"impact",speed:-h,roof:r.roof}),-h>6&&this.damage((-h-6)*1.6,"body")}}n&&(this.roofHit=!0,!this.landing&&this.airTime>.2&&(this.landing={t:0,first:this.airTime,air:this.airTime,vn:0,minUp:this.up.y,wheels:0}));let i=this.track.query(this.pos.x,this.pos.z,this.hint);this.hint=i.idx,this.lat=i.lat,this.laneLat=i.laneLat,this.lane=i.lane,this.overVoid=i.isVoid,this.groundH=i.h,this.onRoad=i.onRoad}_walls(t,e){for(let n of this.wallPts){let i=Ii.copy(n).applyQuaternion(this.q).add(this.pos),r=this.track.query(i.x,i.z,this.hint),a=this.track.get(r.idx),o=this.track.limits(a),l=r.lat,h=0,c=0;if(l>o.R?(h=l-o.R,c=-1):l<-o.L?(h=-o.L-l,c=1):o.island>0&&Math.abs(l)<o.island&&i.y<a.y+2.5&&(h=o.island-Math.abs(l),c=Math.sign(l)||1),h<=0||i.y>a.y+3.2)continue;De.set(a.rx*c,0,a.rz*c),this.pos.addScaledVector(De,h*.8),fn.subVectors(i,this.pos),Jn.crossVectors(this.w,fn).add(this.vel);let f=Jn.dot(De);if(f<0){let d=-1.25*f/this._invMassAlong(fn,De),u=Oe.copy(De).multiplyScalar(d);He.copy(Jn).addScaledVector(De,-f),He.y=0;let g=He.length();g>.01&&u.addScaledVector(He.normalize(),-Math.min(d*.25,g*this.T.mass*.1)),this.applyImpulse(i,u);let x=this.w.dot(this.up);Math.abs(x)>1.1&&this.w.addScaledVector(this.up,(Math.sign(x)*1.1-x)*.6),-f>2.5&&this.events.push({type:"wall",speed:-f,x:i.x,y:i.y,z:i.z}),-f>7&&this.damage((-f-7)*1.3,"wall")}}}_obstacles(t){for(let e of t)if(e.active)for(let n=-1;n<=1;n++){let i=this.pos.x+this.fwd.x*n*1.45,r=this.pos.z+this.fwd.z*n*1.45,a=this.pos.y,o=e.x,l=e.z;if(e.x2!==void 0){let p=e.x2-e.x,m=e.z2-e.z,v=p*p+m*m,y=gt(((i-e.x)*p+(r-e.z)*m)/(v||1),0,1);o=e.x+p*y,l=e.z+m*y}let h=i-o,c=r-l,f=Math.hypot(h,c),d=e.r+1.05;if(f>=d||a+1.2<e.yMin||a-.6>e.yMax)continue;let u=f>.001?h/f:-this.fwd.x,g=f>.001?c/f:-this.fwd.z;if(e.solid===!1){e.onHit&&!e._hitCd&&(e.onHit(this,u,g),e._hitCd=.6);continue}this.pos.x+=u*(d-f)*.9,this.pos.z+=g*(d-f)*.9,De.set(u,0,g),Ii.set(i,a,r),fn.subVectors(Ii,this.pos),Jn.crossVectors(this.w,fn).add(this.vel);let x=Jn.dot(De);if(x<0){let p=-(1+(e.bounce??.3))*x/this._invMassAlong(fn,De);this.applyImpulse(Ii,Oe.copy(De).multiplyScalar(p)),e.onHit&&!e._hitCd&&(e.onHit(this,u,g,-x),e._hitCd=.5),this.events.push({type:"impact",speed:-x,x:Ii.x,y:Ii.y+.5,z:Ii.z})}}}};var Ts={green:[74,88,52],sand:[168,146,104],red:[138,46,34],safari:[196,176,128]};function xr(s,t){return s.onBeforeCompile=e=>{e.uniforms.uMud=t.mud,e.uniforms.uCarY=t.carY,e.uniforms.uWear=t.wear,e.vertexShader=`varying float vMudY; varying vec3 vMudP;
`+e.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
      vec4 mwp = modelMatrix * vec4(transformed, 1.0); vMudY = mwp.y; vMudP = mwp.xyz;`),e.fragmentShader=`uniform float uMud, uCarY, uWear; varying float vMudY; varying vec3 vMudP;
`+e.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
      float mn = fract(sin(dot(floor(vMudP.xz * 9.0), vec2(12.9898, 78.233))) * 43758.5453);
      float mn2 = fract(sin(dot(floor(vMudP.xy * 23.0 + vMudP.zz * 7.0), vec2(39.3468, 11.135))) * 24634.6345);
      float h = vMudY - uCarY;
      float mud = smoothstep(0.15 + uMud * 0.9, -0.35, h + (mn - 0.5) * 0.25 + (mn2 - 0.5) * 0.12) * clamp(uMud * 1.6, 0.0, 1.0);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.25, 0.185, 0.11) * (0.85 + mn2 * 0.3), mud * 0.88);
      diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.92, 0.88, 0.8) + vec3(0.05, 0.04, 0.02), clamp(uMud, 0.0, 1.0) * 0.35);
      diffuseColor.rgb *= 1.0 - uWear * 0.25 * mn;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
      roughnessFactor = mix(roughnessFactor, 0.55 + mn2 * 0.4, mud);`)},s.customProgramCacheKey=()=>"mud",s}var Ve=(s,t,e)=>new A(s,t,e);function sa(s,t,e=.025){let n=new un;n.moveTo(s[0][0],s[0][1]);for(let r=1;r<s.length;r++)n.lineTo(s[r][0],s[r][1]);n.closePath();let i=new ri(n,{depth:t,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:6});return i.translate(0,0,-t/2),i.rotateY(-Math.PI/2),i.scale(1,1,1),i}function du(s,t,e=.02){let n=new ri(s,{depth:t,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:10});return n.translate(0,0,-t/2),n}var $f=new Zt(1,1,1,10,1).translate(0,.5,0),vr=new A,fu=new A,Li=new A,el=new te,pu=new we,mu=new A,qy=new A(0,1,0);function Yy(s,t,e,n){Li.subVectors(e,t);let i=Math.max(Li.length(),1e-4);return Li.multiplyScalar(1/i),pu.setFromUnitVectors(qy,Li),mu.set(n,i,n),s.compose(t,pu,mu)}var nl=class{constructor(t,e="green",n={}){this.lite=!!n.lite,this.uni={mud:{value:.1},carY:{value:0},wear:{value:0}};let i=this.uni,r=Ef(),a=Bo("metal"),o=Bo("rubber"),l=Bo("canvas"),h=ke("leather",{strength:3,rough:.62}),c=ke("crate",{strength:5,rough:.88}),f=ke("tire",{strength:6,rough:.92}),d=k=>new Gt(k),u=this.mats={paint:xr(d({map:su(Ts[e]||Ts.green),normalMap:r.normalMap,roughnessMap:r.roughnessMap,roughness:.78,metalness:.32,normalScale:new Z(.45,.45)}),i),dark:xr(d({color:"#2a2722",roughness:.75,metalness:.65,normalMap:a.normalMap,roughnessMap:a.roughnessMap}),i),under:xr(d({color:"#1d1b18",roughness:.85,metalness:.5,normalMap:a.normalMap}),i),chrome:d({color:"#d8d2c2",roughness:.2,metalness:1,roughnessMap:a.roughnessMap}),brass:d({color:"#b48a3c",roughness:.35,metalness:1,roughnessMap:a.roughnessMap}),leather:d({map:ru(),normalMap:h.normalMap,roughnessMap:h.roughnessMap,roughness:.75}),wood:d({map:iu(),normalMap:c.normalMap,roughnessMap:c.roughnessMap,roughness:1}),canvas:d({color:"#9c8d68",roughness:1,normalMap:l.normalMap,roughnessMap:l.roughnessMap}),strap:d({color:"#5a3d22",roughness:.8,normalMap:h.normalMap}),rubber:xr(d({map:au(),color:"#bdb7ae",normalMap:f.normalMap,roughnessMap:o.roughnessMap,roughness:1,normalScale:new Z(1.2,1.2)}),i),rim:xr(d({color:"#6b7048",roughness:.5,metalness:.5,normalMap:a.normalMap,roughnessMap:r.roughnessMap}),i),glass:d({color:"#c8dcd8",roughness:.04,metalness:.3,transparent:!0,opacity:.2,depthWrite:!1}),lens:d({color:"#fff4d8",emissive:"#ffe2a0",emissiveIntensity:1.4,roughness:.1}),reflector:d({color:"#f4efe6",roughness:.08,metalness:1}),skin:d({color:"#c98d64",roughness:.62}),skin2:d({color:"#c98a62",roughness:.6}),eye:d({color:"#1a120c",roughness:.2}),jacket:d({color:"#6a3f22",roughness:.68,normalMap:h.normalMap}),shirt:d({color:"#b7a47c",roughness:.9,normalMap:l.normalMap}),khaki:d({color:"#b9a57a",roughness:.92,normalMap:l.normalMap}),hat:d({color:"#7a5c3c",roughness:.95,normalMap:l.normalMap}),band:d({color:"#3a2a1c",roughness:.8}),hair:d({color:"#8a3e1e",roughness:.75}),scarf:d({color:"#b8302a",roughness:.9,side:_e}),jerry:xr(d({color:"#4c5a34",roughness:.6,metalness:.4,normalMap:r.normalMap,roughnessMap:r.roughnessMap}),i),gauge0:d({map:lu(0),roughness:.3}),gauge1:d({map:lu(1),roughness:.3}),flame:new We({color:"#ffb46a",transparent:!0,opacity:.85,blending:rn,depthWrite:!1}),flameCore:new We({color:"#c8e4ff",transparent:!0,opacity:.9,blending:rn,depthWrite:!1}),tyreDark:d({color:"#1c1a17",roughness:.9})},g=this.root=new ne,x=this.body=new ne;g.add(x);let p=(k,W,O,lt,X,nt=x)=>{let D=new _t(k,W);return D.position.set(O,lt,X),D.castShadow=!0,D.receiveShadow=!0,nt.add(D),D},m=(k,W,O,lt=.05,X=1)=>new li(k,W,O,X,lt),v=(k,W,O,lt=16)=>new Zt(k,W,O,lt).rotateZ(Math.PI/2),y=(k,W,O,lt=16)=>new Zt(k,W,O,lt).rotateX(Math.PI/2),_=(k,W,O,lt=24,X=x)=>p(new $i(new gs(k.map(nt=>Ve(...nt))),lt,W,8),O,0,0,0,X);for(let k of[.5,-.5]){let W=sa([[-2,-.42],[2.05,-.42],[2.05,-.26],[1.5,-.26],[1.15,-.2],[-1,-.2],[-1.3,-.26],[-2,-.26]],.1,.01);p(W,u.under,k,0,0)}for(let k of[1.9,.6,-.6,-1.85])p(new It(1,.1,.1),u.under,0,-.3,k);p(m(.36,.28,.6,.05),u.under,0,-.32,.25),p(m(.5,.42,.75,.08),u.under,0,-.12,1.35),p(y(.12,.12,.14,14),u.dark,0,-.08,1.85);let C=1.62,w=[[-1.88,-.25],[.78,-.25],[.78,.36],[.62,.38],[.5,.24],[.14,.16],[-.12,.16],[-.26,.3],[-.5,.38],[-1.88,.38],[-1.92,.3]],R=p(sa(w,.05,.018),u.paint,C/2,0,0),P=p(sa(w,.05,.018),u.paint,-C/2,0,0);p(m(C-.04,.05,2.62,.02),u.dark,0,-.22,-.55),p(m(C,.6,.06,.03),u.paint,0,.07,-1.9);for(let k of[.5,-.5])p(m(.16,.14,.05,.02),u.dark,k,.16,-1.94);for(let k of[.5,-.5])p(y(.045,.045,.02,12),this._tail||(this._tail=d({color:"#7a1408",emissive:"#4a0802",roughness:.2})),k,.16,-1.97);for(let k of[C/2,-C/2])p(y(.03,.03,1.4,8),u.paint,k,.38,-1.18);p(v(.03,.03,C,8),u.paint,0,.38,-1.88);for(let k of[.64,-.64])p(m(.3,.32,.9,.08),u.paint,k,-.05,-1.3);let b=p(m(1.6,.56,.5,.08,2),u.paint,0,.12,.62);p(m(1.36,.22,.05,.03),u.dark,0,.3,.37);let M=[[.42,0],[.24,1],[.08,0],[-.3,1]];for(let[k,W]of M){p(y(.055,.055,.03,18),u.brass,k,.31,.345);let O=p(new En(.046,18),u.gauge0,k,.31,.328);O.rotation.y=Math.PI,O.castShadow=!1}p(m(.34,.14,.03,.02),u.dark,-.36,.2,.345);for(let k=0;k<3;k++)p(y(.012,.012,.05,6),u.chrome,0+k*.06-.06,.2,.33);let T=new un,L=.57;T.moveTo(-L,-.2),T.lineTo(-L,.14),T.quadraticCurveTo(-L,.24,-L+.12,.25),T.quadraticCurveTo(0,.31,L-.12,.25),T.quadraticCurveTo(L,.24,L,.14),T.lineTo(L,-.2),T.lineTo(-L,-.2);let U=p(du(T,1.28,.015),u.paint,0,.04,1.36);{let k=U.geometry.attributes.position;for(let W=0;W<k.count;W++){let O=k.getZ(W);if(O>0){let lt=O/.64;k.setY(W,k.getY(W)-(k.getY(W)>.1?lt*lt*.04:0))}}U.geometry.computeVertexNormals()}p(y(.012,.012,1.28,6),u.dark,0,.345,1.36);for(let k of[L+.01,-L-.01])for(let W=0;W<6;W++){let O=p(m(.03,.03,.2,.012),u.dark,k,.1+W%2*0,.9+W*.15);O.rotation.y=0,O.scale.set(1,1,1),O.position.y=.09,O.rotation.x=Math.PI/2}for(let k of[L+.02,-L-.02])p(m(.03,.1,.06,.012),u.chrome,k,.12,1.98);let B=new un;B.moveTo(-.5,-.32),B.lineTo(.5,-.32),B.lineTo(.5,.2),B.quadraticCurveTo(.5,.3,.38,.31),B.lineTo(-.38,.31),B.quadraticCurveTo(-.5,.3,-.5,.2),B.lineTo(-.5,-.32);let q=new Ai;q.moveTo(-.42,-.26),q.lineTo(.42,-.26),q.lineTo(.42,.2),q.quadraticCurveTo(.42,.25,.34,.25),q.lineTo(-.34,.25),q.quadraticCurveTo(-.42,.25,-.42,.2),q.lineTo(-.42,-.26),B.holes.push(q),p(du(B,.07,.02),u.paint,0,.02,2.04),p(new Me(.84,.5),u.under,0,.02,2.01).castShadow=!1;for(let k=0;k<8;k++)p(m(.84,.032,.05,.012),u.chrome,0,-.21+k*.058,2.05);p(m(.06,.5,.055,.015),u.dark,0,0,2.06);let H=[[2.08,-.12],[1.98,.04],[1.72,.17],[1.38,.2],[1,.16],[.82,.02],[.72,-.26],[.66,-.3],[.74,-.22],[.86,-.02],[1.02,.1],[1.38,.14],[1.7,.11],[1.94,-.02],[2.02,-.14]];for(let k of[.84,-.84]){p(sa(H,.44,.02),u.paint,k,-.06,0),p(sa([[-.82,-.08],[-.92,.06],[-1.3,.12],[-1.7,.06],[-1.8,-.08],[-1.72,-.06],[-1.3,.06],[-.9,-.02]],.36,.015),u.paint,k*.98,.02,0),p(m(.38,.04,1.3,.015),u.dark,k*1.03,-.33,0);for(let W=0;W<5;W++)p(new It(.34,.012,.03),u.chrome,k*1.03,-.305,-.5+W*.25)}this.lenses=[];for(let k of[.66,-.66]){let W=[Ve(0,-.12,0),Ve(.06,-.11,0),Ve(.12,-.06,0),Ve(.15,.03,0),Ve(.155,.08,0),Ve(.14,.09,0)].map(X=>new Z(X.x,X.y)),O=p(new wn(W,20).rotateX(Math.PI/2),u.paint,k,.34,1.82);p(new Be(.15,.016,8,22),u.chrome,0,0,.09,O),p(new En(.15,20).translate(0,0,.07),u.reflector,0,0,0,O).castShadow=!1;let lt=p(new be(.15,20,8,0,Math.PI*2,0,.55).rotateX(Math.PI/2).scale(1,1,.35),u.lens.clone(),0,0,.075,O);this.lenses.push(lt),p(new Zt(.025,.035,.22,8),u.dark,k,.17,1.8)}p(m(1.96,.18,.16,.03),u.dark,0,-.36,2.2);for(let k of[.88,-.88])p(m(.08,.26,.2,.02),u.dark,k,-.32,2.2);for(let k of[.74,-.74])p(new Be(.06,.018,6,12,Math.PI*1.4).rotateY(Math.PI/2),u.chrome,k,-.4,2.3);p(m(.66,.24,.24,.04),u.dark,0,-.18,2.24),p(v(.1,.1,.5,18),u.brass,0,-.18,2.26);for(let k of[.27,-.27])p(v(.13,.13,.03,18),u.dark,k,-.18,2.26);for(let k=0;k<9;k++)p(new Be(.105,.012,5,18).rotateY(Math.PI/2),u.dark,-.22+k*.055,-.18,2.26);_([[.05,-.08,2.3],[.05,-.1,2.38],[.02,-.28,2.4],[0,-.36,2.34]],.012,u.dark,12),p(new Be(.045,.014,6,12,Math.PI*1.5).rotateY(Math.PI/2),u.chrome,0,-.4,2.33),p(m(1.84,.15,.14,.03),u.dark,0,-.32,-1.92),p(new Be(.06,.018,6,12),u.chrome,0,-.42,-2);let j=new ne;j.position.set(0,.42,.82),j.rotation.x=-.12,x.add(j);let G=new un;G.moveTo(-.76,0),G.lineTo(.76,0),G.lineTo(.76,.62),G.lineTo(-.76,.62),G.lineTo(-.76,0);let rt=new Ai;rt.moveTo(-.7,.05),rt.lineTo(-.03,.05),rt.lineTo(-.03,.57),rt.lineTo(-.7,.57),rt.lineTo(-.7,.05),G.holes.push(rt);let pt=new Ai;pt.moveTo(.03,.05),pt.lineTo(.7,.05),pt.lineTo(.7,.57),pt.lineTo(.03,.57),pt.lineTo(.03,.05),G.holes.push(pt),p(du(G,.035,.008),u.paint,0,0,0,j);let vt=p(new Me(1.4,.52),u.glass,0,.31,0,j);vt.castShadow=!1,vt.material.side=_e;for(let k of[.78,-.78])p(v(.03,.03,.06,8),u.chrome,k,0,0,j);p(m(.1,.02,.5,.008),u.dark,.35,.6,-.02,j).rotation.z=.3,p(new Zt(.008,.008,.16,6),u.chrome,.8,.5,.8).rotation.z=-.5,p(y(.055,.055,.02,14),u.chrome,.86,.6,.8),this.wheelSteer=new ne,this.wheelSteer.position.set(.38,.6,.5),this.wheelSteer.rotation.x=-.75,x.add(this.wheelSteer);{let k=[new Be(.19,.018,8,26)];for(let O=0;O<3;O++){let lt=new It(.17,.02,.012);lt.translate(.085,0,0),lt.rotateZ(O/3*Math.PI*2+Math.PI/2),k.push(lt)}k.push(new Zt(.035,.035,.03,10).rotateX(Math.PI/2));let W=new _t(ge(k.map(O=>O.index?O.toNonIndexed():O).map(O=>{for(let lt of Object.keys(O.attributes))["position","normal","uv"].includes(lt)||O.deleteAttribute(lt);return O})),u.under);W.castShadow=!0,this.wheelSteer.add(W)}p(v(.016,.016,.5,6).rotateZ(Math.PI/2).rotateX(.82),u.under,.38,.45,.66);for(let[k,W]of[[.04,.25],[-.06,-.15]]){let O=p(new Zt(.012,.012,.42,6),u.chrome,k,.02,.2);O.rotation.z=W,O.rotation.x=-.25,p(new be(.03,8,6),u.band,k+Math.sin(-W)*.21,.22,.15)}for(let k of[.38,-.38]){p(m(.52,.14,.5,.06,2),u.leather,k,.3,.05);let W=p(m(.52,.56,.13,.06,2),u.leather,k,.6,-.24);W.rotation.x=-.12;for(let O=0;O<3;O++)p(new It(.48,.012,.012),u.strap,k,.42+O*.15,-.165);p(m(.06,.38,.4,.02),u.dark,k+.26,.15,.05)}p(m(1.32,.14,.48,.06,2),u.leather,0,.3,-.92),p(m(1.32,.42,.12,.05,2),u.leather,0,.53,-1.14),_([[-.76,.35,-.42],[-.74,.95,-.44],[-.62,1.2,-.45],[0,1.25,-.45],[.62,1.2,-.45],[.74,.95,-.44],[.76,.35,-.42]],.042,u.dark,32),_([[.7,1.1,-.45],[.72,.7,-1.2],[.74,.38,-1.7]],.032,u.dark,12),_([[-.7,1.1,-.45],[-.72,.7,-1.2],[-.74,.38,-1.7]],.032,u.dark,12);for(let k of[.76,-.76])p(v(.06,.06,.06,10),u.dark,k,.36,-.42);_([[-.34,.5,.6],[-.34,.6,.55],[-.14,.6,.55],[-.14,.5,.6]],.014,u.chrome,10),this.crates=[];let Ot=(k,W,O,lt,X,nt,D=0)=>{let mt=p(m(k,W,O,.02),u.wood,lt,X,nt);mt.rotation.y=D;for(let st of[-.3,.3]){let ht=p(new It(.04,W+.01,O+.01),u.strap,st*k,0,0,mt);ht.castShadow=!1}for(let st of[-1,1])for(let ht of[-1,1])p(new It(.05,W+.012,.05),u.dark,st*(k/2-.02),0,ht*(O/2-.02),mt);return this.crates.push(mt),mt};Ot(.62,.46,.5,.32,.61,-1.42,.05),Ot(.55,.42,.46,-.34,.59,-1.44,-.08),Ot(.46,.36,.4,.05,1,-1.44,.25);for(let k of[.89,-.89]){let W=p(m(.13,.44,.32,.025),u.jerry,k,.2,-1.42);for(let O of[-1,1]){let lt=p(new It(.012,.42,.03),u.jerry,k>0?.07:-.07,0,0,W);lt.rotation.x=O*.62}p(m(.04,.06,.16,.01),u.dark,0,.25,.02,W),p(v(.02,.02,.03,8),u.brass,0,.25,.13,W),p(m(.03,.5,.36,.01),u.dark,k>0?-.07:.07,0,0,W)}p(new Be(.19,.055,8,22).rotateX(Math.PI/2),u.canvas,-.38,.42,-.66),p(new Be(.15,.05,8,20).rotateX(Math.PI/2),u.canvas,-.38,.5,-.66),p(new hn(.13,.7,4,10).rotateZ(Math.PI/2),u.canvas,.05,.88,-1.05);for(let k of[-.25,.3])p(new Be(.135,.012,5,14).rotateY(Math.PI/2),u.strap,k,.88,-1.05);p(m(.03,.04,1,.01),u.strap,.84,.36,-.4).rotation.x=.06,p(m(.02,.2,.24,.01),u.dark,.84,.34,.2),p(m(.025,.035,.7,.01),u.strap,-.84,.3,-.6),p(m(.02,.16,.1,.01),u.chrome,-.84,.3,-.24);let $t=new ne;$t.position.set(0,.16,-2.04),x.add($t),this._makeWheel($t,!0),p(m(.2,.2,.08,.02),u.dark,0,.16,-1.95),_([[-.42,-.36,1.2],[-.5,-.4,.4],[-.55,-.42,-1.2],[-.56,-.42,-2]],.045,u.under,16),p(y(.055,.05,.14,12),u.chrome,-.56,-.42,-2.04);{let k=[],W=new be(.012,5,4);for(let O of[C/2+.03,-C/2-.03])for(let lt=0;lt<14;lt++){let X=W.clone();X.translate(O,-.18,-1.8+lt*.18),k.push(X)}for(let O=0;O<10;O++){let lt=W.clone();lt.translate(-.7+O*.155,-.15,-1.94),k.push(lt)}p(ge(k),u.dark,0,0,0)}this.dusty=this._person(.38,!0),this.penny=this._person(-.38,!1),this.flames=new ne,this.flames.position.set(-.56,-.42,-2.1),x.add(this.flames);let J=new _t(new an(.16,1.4,12,1,!0).rotateX(-Math.PI/2).translate(0,0,-.7),u.flame);this.flames.add(J);let ot=new _t(new an(.08,.8,10,1,!0).rotateX(-Math.PI/2).translate(0,0,-.4),u.flameCore);this.flames.add(ot),this.flames.visible=!1,this.flameLight=new dr("#ff9a40",0,8,2),this.flameLight.position.set(-.55,-.2,-2.6),x.add(this.flameLight),this.head=new yo("#ffe8c0",0,60,.55,.5,1.4),this.head.position.set(0,.4,2),this.head.target.position.set(0,-1.2,14),x.add(this.head),x.add(this.head.target),this.wheels=[];for(let k=0;k<4;k++){let W=new ne;g.add(W);let O=new ne;W.add(O),this._makeWheel(O,!1,k%2===1);let lt=k%2===0?-1:1;p(v(.2,.2,.1,16),u.under,lt*.2,0,0,W),p(m(.08,.22,.16,.03),u.under,lt*.27,0,0,W),this.wheels.push({g:W,spin:O})}this.rods=new Ti($f,u.under,12),this.rods.castShadow=!0,this.rods.frustumCulled=!1,g.add(this.rods),this.shafts=new Ti($f,u.chrome,4),this.shafts.castShadow=!1,this.shafts.frustumCulled=!1,g.add(this.shafts);{let k=[];for(let W=0;W<4;W++){let O=1.25-W*.22,lt=new It(.07,.022,O,1,1,8),X=lt.attributes.position;for(let nt=0;nt<X.count;nt++){let D=X.getZ(nt);X.setY(nt,X.getY(nt)-W*.024+(1-(2*D/1.25)**2)*-.06+.06)}lt.computeVertexNormals(),k.push(lt)}this.leafGeo=ge(k)}this.leaves=new Ti(this.leafGeo,u.under,4),this.leaves.castShadow=!0,this.leaves.frustumCulled=!1,g.add(this.leaves);let Rt=ge([new be(.17,14,10).scale(1,.95,1.1),y(.07,.09,.22,10).translate(0,0,.16)].map(k=>k.index?k.toNonIndexed():k));this.diffs=new Ti(Rt,u.under,2),this.diffs.castShadow=!0,this.diffs.frustumCulled=!1,g.add(this.diffs),this._susp={m:new te},this.root.traverse(k=>{k.isMesh&&k.material===u.glass&&(k.castShadow=!1)}),this._bake(j,[]);let ct=[...this.crates,this.wheelSteer,this.dusty.g,this.penny.g,this.flames,$t,j,this.head,this.head.target,this.flameLight];this._flatten(x,ct);for(let k of this.crates)this._bake(k,[]);for(let k of[this.dusty,this.penny]){this._flatten(k.g,[k.head,...k.arms.map(W=>W.sh)]),this._bakeVC(k.g),this._flatten(k.head,[]),this._bakeVC(k.head,[this.scarf,this.pony]);for(let W of k.arms)this._flatten(W.sh,[W.el]),this._bakeVC(W.sh),this._bakeVC(W.el)}this._bake(this.wheelSteer,[]),this._bake(x,[...this.crates,...this.lenses]);for(let k of this.wheels)this._bake(k.spin,[]),this._bake(k.g,[k.spin]);this._bake($t,[]),t.add(g),this.crateFall=[],this.lightsBroken=!1,this.sp={r:0,rv:0,p:0,pv:0,h:0,hv:0,wasAir:!1,hb:0,hbv:0},this.SPRING={w:2*Math.PI*1.6,z:.35,roll:.0085,pitch:.0075,maxRoll:.075,maxPitch:.06,heave:.016}}_flatten(t,e){t.updateMatrixWorld(!0);let n=[];t.traverse(i=>{if(i===t||!i.isMesh||i.isInstancedMesh)return;let r=i.parent;for(;r&&r!==t;){if(e.includes(r))return;r=r.parent}e.includes(i)||n.push(i)});for(let i of n)i.parent!==t&&t.attach(i);for(let i of[...t.children])!i.isMesh&&!i.isLight&&i.isGroup&&!e.includes(i)&&i.children.length===0&&t.remove(i)}_bakeVC(t,e=[]){let n=this.mats.crew||(this.mats.crew=new Gt({vertexColors:!0,roughness:.78,metalness:.02})),i=[],r=[],a=new bt;for(let l of t.children){if(!l.isMesh||e.includes(l)||l.children.length)continue;l.updateMatrix();let h=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();h.applyMatrix4(l.matrix);for(let d of Object.keys(h.attributes))["position","normal"].includes(d)||h.deleteAttribute(d);a.copy(l.material.color||a.set("#888")),l.material.map&&a.multiplyScalar(.8);let c=h.attributes.position.count,f=new Float32Array(c*3);for(let d=0;d<c;d++)f[d*3]=a.r,f[d*3+1]=a.g,f[d*3+2]=a.b;h.setAttribute("color",new ie(f,3)),i.push(h),r.push(l)}if(!i.length)return;for(let l of r)t.remove(l);let o=new _t(ge(i),n);o.castShadow=!0,o.receiveShadow=!0,t.add(o)}_bake(t,e){let n=new Map,i=[];t.updateMatrix();for(let r of t.children){if(!r.isMesh||r.isInstancedMesh||e.includes(r)||r.children.length)continue;r.updateMatrix();let a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(r.matrix);for(let o of Object.keys(a.attributes))["position","normal","uv"].includes(o)||a.deleteAttribute(o);a.attributes.uv||a.setAttribute("uv",new ie(new Float32Array(a.attributes.position.count*2),2)),n.has(r.material)||n.set(r.material,[]),n.get(r.material).push(a),i.push(r)}for(let r of i)t.remove(r);for(let[r,a]of n){let o=new _t(ge(a),r);o.castShadow=r!==this.mats.glass,o.receiveShadow=!0,t.add(o)}}_makeWheel(t,e,n){let i=this.mats,r=.46,a=.32,o=.27,l=n?-1:1,h={rubber:[],rim:[],chrome:[],dark:[]},c=[[o,-a/2],[r-.07,-a/2],[r-.035,-a/2+.02],[r-.012,-a/2+.06],[r-.02,-a/2+.1],[r-.02,a/2-.1],[r-.012,a/2-.06],[r-.035,a/2-.02],[r-.07,a/2],[o,a/2]].map(([x,p])=>new Z(x,p));h.rubber.push(new wn(c,this.lite?20:30).rotateZ(Math.PI/2));let f=new It(.12,.03,.06);for(let x=0;x<52;x++){if(this.lite&&x%2)continue;let p=x%2,m=Math.floor(x/2)/26*Math.PI*2+p*(Math.PI/26),v=f.clone();v.rotateY(p?-.45:.45),v.translate(p?-.075:.075,r-.012,0),v.rotateX(m),h.rubber.push(v)}let d=new It(.04,.05,.07);if(!this.lite)for(let x=0;x<26;x++){let p=x/26*Math.PI*2+Math.PI/52;for(let m of[-1,1]){let v=d.clone();v.translate(m*(a/2-.01),r-.045,0),v.rotateX(p),h.rubber.push(v)}}let u=[[.29,-.12],[.3,-.11],[.285,-.08],[.24,-.05],[.19,-.02],[.1,0],[.07,.02],[0,.03]].map(([x,p])=>new Z(x,p));h.rim.push(new wn(u,24).rotateZ(-Math.PI/2*l).translate(l*.1,0,0)),h.rim.push(new Zt(.285,.285,.24,24,1,!0).rotateZ(Math.PI/2));for(let x=0;x<6;x++){let p=x/6*Math.PI*2,m=new Zt(.022,.026,.04,6).rotateZ(Math.PI/2);m.translate(l*.13,Math.cos(p)*.12,Math.sin(p)*.12),h.chrome.push(m)}for(let x=0;x<8;x++){let p=(x+.5)/8*Math.PI*2,m=new Zt(.028,.028,.01,10).rotateZ(Math.PI/2);m.translate(l*.118,Math.cos(p)*.21,Math.sin(p)*.21),h.dark.push(m)}h.chrome.push(new be(.075,14,8,0,Math.PI*2,0,Math.PI/2).rotateZ(-Math.PI/2*l).translate(l*.13,0,0)),h.rim.push(...h.chrome,...h.dark),h.chrome=[],h.dark=[];let g={rubber:i.rubber,rim:i.rim,chrome:i.chrome,dark:i.under};for(let x of Object.keys(h)){if(!h[x].length)continue;let p=h[x].map(v=>{v=v.index?v.toNonIndexed():v;for(let y of Object.keys(v.attributes))["position","normal","uv"].includes(y)||v.deleteAttribute(y);return v.attributes.uv||v.setAttribute("uv",new ie(new Float32Array(v.attributes.position.count*2),2)),v}),m=new _t(ge(p),g[x]);m.castShadow=!0,m.receiveShadow=!0,t.add(m)}e&&(t.rotation.y=Math.PI/2)}_person(t,e){let n=this.mats,i=new ne;i.position.set(t,.4,0),this.body.add(i);let r=(d,u,g,x,p,m=i)=>{let v=new _t(d,u);return v.position.set(g,x,p),v.castShadow=!0,m.add(v),v},a=(d,u=16)=>new wn(d.map(([g,x])=>new Z(g,x)),u);r(a([[0,-.05],[.15,-.04],[.17,.08],[.16,.2],[.19,.36],[.17,.46],[.08,.52],[0,.53]],16),e?n.jacket:n.shirt,0,.1,-.06).scale.set(1.12,1,.78),e?(r(new Be(.1,.03,6,14,Math.PI*1.3).rotateX(Math.PI/2).rotateY(Math.PI*.85),n.jacket,0,.6,-.05),r(new Me(.1,.18),n.shirt,0,.5,.075).rotation.x=-.15,r(new It(.04,.5,.03),n.strap,.05,.36,.08).rotation.z=.62,r(li?new li(.16,.12,.06,2,.02):new It(.16,.12,.06),n.strap,-.15,.14,.08)):(r(new Be(.17,.02,6,16).rotateX(Math.PI/2),n.strap,0,.18,-.06).scale.set(1.12,.78,1),r(new It(.06,.05,.02),n.brass,0,.18,.08),r(new It(.03,.42,.02),n.strap,-.08,.38,.08).rotation.z=-.5,r(new Zt(.03,.03,.08,8).rotateX(Math.PI/2),n.under,.07,.24,.1),r(new Zt(.03,.03,.08,8).rotateX(Math.PI/2),n.under,0,.24,.1));let l=r(new Zt(.05,.055,.1,10),n.skin,0,.66,-.03),h=new ne;h.position.set(0,.79,-.02),i.add(h);let c=e?n.skin:n.skin2;r(new be(.115,14,10),c,0,0,0,h).scale.set(.9,1.08,.98),r(new be(.07,12,8),c,0,-.06,.04,h).scale.set(1.1,.8,1),r(new an(.02,.05,6).rotateX(Math.PI/2),c,0,0,.115,h);for(let d of[-.04,.04])r(new be(.014,8,6),n.eye,d,.025,.1,h);for(let d of[-.105,.105])r(new be(.025,8,6),c,d,0,0,h).scale.set(.5,1,.8);if(e)r(a([[0,0],[.12,0],[.2,.004],[.245,.02],[.255,.03],[.24,.024],[.19,.012],[.12,.014],[0,.014]],20),n.hat,0,.06,0,h).scale.set(1,1,1.12),r(a([[0,.17],[.07,.165],[.11,.14],[.13,.06],[.135,0]],20),n.hat,0,.065,0,h).scale.set(.95,1,1.08),r(new be(.05,10,6).scale(1.8,.4,.6),n.hat,0,.235,0,h),r(new Zt(.137,.137,.035,20),n.band,0,.085,0,h).scale.set(.95,1,1.08),r(new It(.15,.02,.02),$y("#4a3020"),0,-.075,.1,h);else{r(new be(.128,12,8,0,Math.PI*2,0,Math.PI*.62),n.hair,0,.012,-.012,h).scale.set(1,1.05,1.08);let d=r(new hn(.04,.16,4,8),n.hair,0,-.05,-.15,h);d.rotation.x=.5,this.pony=d,r(new Be(.12,.012,6,20).rotateX(Math.PI/2),n.strap,0,.07,0,h);for(let g of[-.05,.05])r(new Zt(.036,.036,.035,14).rotateX(Math.PI/2-.4),n.brass,g,.1,.095,h),r(new En(.028,12),n.reflector,g,.108,.115,h).rotation.x=-.4;r(new Be(.07,.03,6,14).rotateX(Math.PI/2),n.scarf,0,-.14,0,h);let u=r(new Me(.1,.5,1,6),n.scarf,.05,-.15,-.12,h);this.scarf=u}let f=[];for(let d of[-1,1]){let u=new ne;u.position.set(d*.2,.55,-.02),i.add(u),r(new be(.065,10,8),e?n.jacket:n.shirt,0,0,0,u),r(new hn(.052,.22,4,8),e?n.jacket:n.shirt,0,-.14,0,u);let g=new ne;g.position.set(0,-.28,0),u.add(g),r(new hn(.045,.2,4,8),e?n.jacket:c,0,-.12,0,g),r(new be(.045,10,8),e?n.strap:c,0,-.26,0,g).scale.set(.9,1.1,.7),u.rotation.x=-.9,g.rotation.x=-.7,f.push({sh:u,el:g})}for(let d of[-.09,.09])r(new hn(.065,.36,4,8),n.khaki,d,.02,.26).rotation.x=1.4,r(new hn(.055,.3,4,8),n.khaki,d,-.2,.46),r(li?new li(.1,.08,.2,2,.03):null,n.strap,d,-.38,.5);return{g:i,head:h,arms:f}}setPaint(t){this.mats.paint.map=su(Ts[t]||Ts.green),this.mats.paint.needsUpdate=!0}sync(t,e,n,i,r,a={}){this.root.position.copy(e),this.root.quaternion.copy(n),this.root.updateMatrixWorld();let o=this._inv||(this._inv=new te);o.copy(this.root.matrixWorld).invert();let l=this._wc||(this._wc=[Ve(),Ve(),Ve(),Ve()]);for(let b=0;b<4;b++){let M=t.wheels[b],T=this.wheels[b],L=l[b].copy(M.center).sub(t.pos).add(e).applyMatrix4(o);T.g.position.copy(L),T.g.rotation.set(0,M.front?-t.steer:0,0),T.spin.rotation.x=M.rot}let h=this.SPRING,c=this.sp,f=Math.min(i,1/30);if(f>0){let b=!t.grounded,M=b?0:Math.max(-h.maxRoll,Math.min(h.maxRoll,(t.accLat||0)*h.roll)),T=b?-.015:Math.max(-h.maxPitch,Math.min(h.maxPitch,-(t.accLong||0)*h.pitch)),L=h.w*h.w,U=2*h.z*h.w;if(c.wasAir&&!b){let j=Math.min(14,Math.max(2,t.impactVn||t._lastLandVn||6));c.hv-=j*h.heave*6,c.pv+=.25*j*.04*(Math.random()-.3),c.rv+=(Math.random()-.5)*j*.03}c.wasAir=b;let B=t.lastSurf|0,q=B===2||B===3?1:B===5?1.4:B===1?.5:.25,H=Math.min(1,t.speed/25);c.hv+=(Math.random()-.5)*q*H*.5*f*60*.012,c.rv+=(Math.random()-.5)*q*H*f*60*.004,c.rv+=(L*(M-c.r)-U*c.rv)*f,c.r+=c.rv*f,c.pv+=(L*(T-c.p)-U*c.pv)*f,c.p+=c.pv*f,c.hv+=(L*(0-c.h)-U*1.3*c.hv)*f,c.h+=c.hv*f,c.h=Math.max(-.1,Math.min(.07,c.h)),c.r=Math.max(-.12,Math.min(.12,c.r)),c.p=Math.max(-.1,Math.min(.1,c.p)),this.body.rotation.set(c.p,0,c.r),this.body.position.set(0,c.h,0)}this.body.updateMatrix();let d=this.body.matrix,u=this._susp.m,g=0,x=(b,M,T,L=this.rods)=>{Yy(u,b,M,T),L.setMatrixAt(L===this.rods?g++:this._si++,u)};this._si=0;let p=[0,0],m=[Ve(),Ve()];for(let b=0;b<2;b++){let M=l[b*2],T=l[b*2+1];vr.copy(M).setX(M.x-.22),fu.copy(T).setX(T.x+.22),x(vr,fu,.055),m[b].copy(M).add(T).multiplyScalar(.5),m[b].x+=.12*(b?1:-1),p[b]=m[b].y,el.makeRotationFromEuler(new Je(0,b?0:Math.PI,Math.atan2(M.y-T.y,M.x-T.x)*(b?-1:1))).setPosition(m[b]),this.diffs.setMatrixAt(b,el);for(let[L,U]of[[M,1],[T,-1]]){let B=Ve(U*.62,-.02,L.z+(b?-.22:.22)).applyMatrix4(d),q=Ve(L.x-U*.3,L.y+.06,L.z+(b?-.1:.1));Li.subVectors(B,q);let H=Li.length();Li.normalize(),x(q,vr.copy(q).addScaledVector(Li,H*.55),.045),x(vr.copy(q).addScaledVector(Li,H*.5),B,.016,this.shafts);let j=Ve(U*.5,(L.y+.06+(-.42+0))*.5+.03,L.z),G=Ve(U*.5,-.42,L.z).applyMatrix4(d).y,rt=Math.max(-.12,Math.min(.12,L.y+.08-G));el.compose(Ve(U*.5,(L.y+.06+G)*.5,L.z),pu.identity(),mu.set(1,1+rt*3,1)),this.leaves.setMatrixAt(b*2+(U>0?0:1),el)}}{let b=l[0],M=l[1];x(vr.set(b.x-.25,b.y-.04,b.z-.2),fu.set(M.x+.25,M.y-.04,M.z-.2),.022);let T=Ve(0,-.32,.25).applyMatrix4(d);x(T,m[0],.04),x(T,m[1],.04),x(Ve(.45,-.2,.9).applyMatrix4(d),vr.set(b.x-.3,b.y+.05,b.z-.15),.02)}this.rods.count=g,this.shafts.count=this._si,this.rods.instanceMatrix.needsUpdate=!0,this.shafts.instanceMatrix.needsUpdate=!0,this.leaves.instanceMatrix.needsUpdate=!0,this.diffs.instanceMatrix.needsUpdate=!0;let v=t.steer;this.wheelSteer.rotation.z=-v*2.2;let y=this.dusty,_=this.penny,C=-c.h*1.4;y.head.rotation.y=-v*.6,y.g.rotation.z=v*.1-c.r*1.6+Math.sin(r*13)*.01*Math.min(t.speed,30)/30,y.g.position.y=.4+C,y.head.rotation.x=c.p*2,y.arms[0].sh.rotation.z=-v*.4,y.arms[1].sh.rotation.z=-v*.4;let w=!t.grounded;if(_.g.rotation.z=v*.14-c.r*2,_.g.position.y=.4+C*1.2,_.head.rotation.y=a.lookBack?2.2:-v*.3,_.head.rotation.x=c.p*2.4,_.arms[0].sh.rotation.x=w?-2.6:-.9,_.arms[1].sh.rotation.x=w?-2.7:-.9,this.scarf&&(this.scarf.rotation.x=-.9-Math.min(t.speed,30)/30*.6+Math.sin(r*17)*.15),this.pony&&(this.pony.rotation.x=.5+Math.min(t.speed,30)/30*.6+Math.sin(r*11)*.08-c.hv*.5),this.flames.visible=t.nitroing,t.nitroing){let b=.8+Math.random()*.5;this.flames.scale.set(b,b,.8+Math.random()*.7),this.flameLight.intensity=6+Math.random()*4}else this.flameLight.intensity=0;this.head.intensity=this.lightsBroken?0:a.headlights?60:0;for(let b of this.lenses)b.material.emissiveIntensity=this.lightsBroken?0:a.headlights?3:.6;this.uni.mud.value+=(t.mud-this.uni.mud.value)*Math.min(1,i*3),this.uni.carY.value=e.y,this.uni.wear.value=t.wear;let R=t.hp/t.maxHp,P=R<.25?3:R<.5?2:R<.75?1:0;for(;this.crateFall.length<P&&this.crates.length>this.crateFall.length;){let b=this.crates[this.crates.length-1-this.crateFall.length],M=new A;b.getWorldPosition(M);let T=new we;b.getWorldQuaternion(T),b.visible=!1;let L=b.clone();L.visible=!0,L.position.copy(M),L.quaternion.copy(T),this.root.parent.add(L),this.crateFall.push({m:L,v:t.vel.clone().multiplyScalar(.6).add(new A((Math.random()-.5)*4,4,0)),w:new A(Math.random()*6,Math.random()*6,Math.random()*6),t:0,src:b}),this.onCrate&&this.onCrate(M)}for(let b of this.crateFall)b.t<3&&(b.t+=i,b.v.y-=9.8*i,b.m.position.addScaledVector(b.v,i),b.m.rotation.x+=b.w.x*i,b.m.rotation.y+=b.w.y*i,b.t>=3&&(b.m.visible=!1));R<.3&&!this.lightsBroken&&(this.lightsBroken=!0,this.onBreak&&this.onBreak())}repair(){for(let t of this.crateFall)this.root.parent&&this.root.parent.remove(t.m),t.src.visible=!0;this.crateFall=[],this.lightsBroken=!1,this.uni.mud.value=.05}};function $y(s){return new Gt({color:s,roughness:.8})}var il=class{constructor(t,e){this.track=e,this.R=6.2;let n=new po(this.R,6),i=n.attributes.position,r=new A;for(let h=0;h<i.count;h++){r.fromBufferAttribute(i,h).normalize();let c=Ji(r.x*2.2+3,r.y*2.2+r.z*1.7,4),f=Math.abs(Math.sin(r.x*7+r.z*5))*.15,d=this.R*(.9+c*.22+f*.4);i.setXYZ(h,r.x*d,r.y*d,r.z*d)}n.computeVertexNormals();let a=new Float32Array(i.count*3);for(let h=0;h<i.count;h++){r.fromBufferAttribute(i,h).normalize();let c=Math.abs(r.y)<.12?.62:1,f=.85+Ji(r.x*6,r.z*6+r.y*3,2)*.25;a[h*3]=f*c,a[h*3+1]=f*c*.96,a[h*3+2]=f*c*.88}n.setAttribute("color",new ie(a,3));let o=ke("rock",{strength:7,rough:.9}),l=new Gt({map:Yn(),roughness:1,vertexColors:!0,normalMap:o.normalMap,roughnessMap:o.roughnessMap,normalScale:new Z(1.4,1.4)});this.mesh=new _t(n,l),this.mesh.castShadow=!0,this.group=new ne,this.group.add(this.mesh),t.add(this.group),this.s=0,this.v=0,this.rot=0,this.active=!1,this.mul=1,this.pos=new A,this.q=new we,this._a=new A,this.dust=0}start(t,e){this.s=t,this.v=0,this.active=!0,this.mul=e,this.t=0}update(t,e,n,i=1){if(!this.active)return;this.t+=t;let r=e-this.s,a=(17.5+Math.min(e,6e3)/6e3*11)*this.mul*i,o=a;r>95?o=Math.max(a,n+4):r>60?o=Math.max(a,n*.92):r<22&&(o=a*.93);let l=gt(this.t/3.5,0,1);o*=l,this.v=le(this.v,o,1-Math.exp(-1.4*t)),this.s+=this.v*t;let h=this.track,c=Math.max(this.s,h.base+1),f=h.pointAt(c,0,this.pos),d=f.y;this.s<h.base+1;let u=h.sampleAtS(c);(u.gap||u.hole)&&(d=Math.max(u.floorY+this.R,d-6)),this.pos.set(f.x-(this.s<0?u.fx*-this.s:0),d+this.R*.92,f.z-(this.s<0?u.fz*-this.s:0)),this.group.position.lerp(this.pos,this.group.position.lengthSq()===0?1:1-Math.exp(-12*t)),this.rot+=this.v*t/this.R,this._a.set(-u.fz,0,u.fx).negate(),this.q.setFromAxisAngle(this._a.set(u.rx,0,u.rz).multiplyScalar(-1),this.rot),this.mesh.quaternion.copy(this.q),this.gap=r}};var Zy=new A,Jy=new A,ra=new A,sl=class{constructor(t,e){this.cam=t,this.track=e,this.pos=new A,this.look=new A,this.dir=new A(0,0,1),this.trauma=0,this.fov=62,this.mode="chase",this.cine=0,this.cineSide=1,this.t=0,this.distMul=1,this.comfort=!1,this.inited=!1,this.pull=0,this.dip=0,this.dipV=0,this.tilt=0,this.swing=0}addShake(t){this.comfort&&(t*=.3),this.trauma=Math.min(1.2,this.trauma+t)}snap(){this.inited=!1,this.pull=0,this.dip=0,this.dipV=0,this.tilt=0,this.swing=0}land(t){this.comfort&&(t*=.4),this.dipV-=Math.min(t,16)*.16,this.addShake(Math.min(t/40,.25))}update(t,e,n,i){this.t+=t;let r=this.cam,a=e.speed;ra.copy(e.vel),ra.y=0;let o=Zy.set(e.fwd.x,0,e.fwd.z).normalize();ra.lengthSq()>9&&(ra.normalize(),o.lerp(ra,gt(a/25,0,.6)).normalize()),this.inited||this.dir.copy(o),this.dir.lerp(o,1-Math.exp(-(e.grounded?4.5:1.2)*t)).normalize();let l=gt(a/36,0,1.2),h=gt((e.accLong||0)*.075,-.7,.9)+(e.nitroing&&!this.comfort?.9:0);this.pull=Zi(this.pull,e.grounded?h:this.pull*.98,2.6,t),this.swing=Zi(this.swing,gt((e.slipAngle||0)*-2.2,-1.6,1.6),2.2,t),this.tilt=Zi(this.tilt,this.comfort?0:gt((e.accLat||0)*-.0032,-.045,.045),3.5,t),this.dipV+=(-(13.9*13.9)*this.dip-2*.45*13.9*this.dipV)*t,this.dip+=this.dipV*t,this.dip=gt(this.dip,-.9,.5);let c=(le(6.9,5.7,l)+this.pull)*this.distMul,f=le(2.95,2.15,l)*(.9+this.distMul*.1),d=Jy.copy(n).addScaledVector(this.dir,-c);d.y+=f+this.dip,d.x+=-this.dir.z*this.swing,d.z+=this.dir.x*this.swing;let u=(this._lk||(this._lk=new A)).copy(n);u.y+=1.15+this.dip*.35,i.ahead&&u.lerp(i.ahead,.28);let g=i.cine&&!this.comfort;if(this.cine=Zi(this.cine,g?1:0,g?5:3,t),this.cine>.01){let w=new A(-this.dir.z,0,this.dir.x).multiplyScalar(this.cineSide),R=new A().copy(n).addScaledVector(w,9.5).addScaledVector(this.dir,3.5);R.y=n.y-.6,d=d.lerp(R,this.cine)}this.mode==="hood"&&(d.copy(n).addScaledVector(e.up,1.55).addScaledVector(e.fwd,.1),u.copy(n).addScaledVector(e.fwd,20).addScaledVector(e.up,1)),this.mode==="fall"&&(d.copy(this.pos),u.copy(n)),i.override&&(d.copy(i.override.pos),u.copy(i.override.look)),this.inited||(this.pos.copy(d),this.look.copy(u),this.inited=!0);let x=this.mode==="hood"?40:i.override?i.override.k||6:e.grounded?9:5;if(this.pos.lerp(d,1-Math.exp(-x*t)),this.look.lerp(u,1-Math.exp(-(this.mode==="hood"?40:14)*t)),this.mode!=="hood"){let w=this.track.query(this.pos.x,this.pos.z,e.hint);!w.isVoid&&this.pos.y<w.h+1.2&&(this.pos.y=w.h+1.2)}let p=60+l*l*12+(e.nitroing&&!this.comfort?10:0)+this.cine*6;this.fov=Zi(this.fov,p,3,t),r.fov=this.fov,r.updateProjectionMatrix(),this.trauma=Math.max(0,this.trauma-t*1.4);let m=i.rumble||0,v=Math.pow(Math.min(this.trauma,1),2)*.9+m*(this.comfort?.03:.12),y=e.lastSurf|0,_=!e.grounded||this.mode==="hood"?0:([.3,.15,.85,1,.25,1.1,0][y]||0)*gt(a/28,0,1)*(this.comfort?.2:1)*.022;r.position.copy(this.pos),r.position.x+=(Ri(this.t*22,1)-.5)*v,r.position.y+=(Ri(this.t*22,7)-.5)*v+(Ri(this.t*61,21)-.5)*_,r.position.z+=(Ri(this.t*22,13)-.5)*v*.5,r.lookAt(this.look);let C=(v>0?(Ri(this.t*15,3)-.5)*v*.08:0)+(this.mode==="chase"&&!i.override?this.tilt:0);C&&r.rotateZ(C)}};var rl={dust:{col:[.62,.52,.38],size:[1.3,3],life:[1.2,2.4],g:-.6,drag:1.6,alpha:.22,grow:1.6,add:!1},mud:{col:[.28,.2,.12],size:[.25,.5],life:[.6,1.1],g:14,drag:.4,alpha:.95,grow:.2,add:!1},water:{col:[.86,.93,.95],size:[.5,1.4],life:[.5,1.1],g:11,drag:.6,alpha:.7,grow:1.2,add:!1},smoke:{col:[.42,.4,.38],size:[1,2.2],life:[.8,1.6],g:-1.2,drag:1.2,alpha:.32,grow:2.2,add:!1},splinter:{col:[.45,.3,.16],size:[.18,.35],life:[1,1.8],g:14,drag:.2,alpha:1,grow:0,add:!1},sparks:{col:[1,.7,.3],size:[.12,.3],life:[.25,.6],g:12,drag:.3,alpha:1,grow:-.5,add:!0},coin:{col:[1,.85,.35],size:[.2,.45],life:[.35,.7],g:4,drag:1,alpha:1,grow:-.6,add:!0},relic:{col:[.6,1,.85],size:[.3,.8],life:[.8,1.5],g:-2,drag:1,alpha:1,grow:.5,add:!0},gravel:{col:[.36,.3,.24],size:[.08,.16],life:[.5,.9],g:18,drag:.25,alpha:1,grow:0,add:!1},clod:{col:[.22,.15,.09],size:[.16,.32],life:[.6,1],g:17,drag:.2,alpha:1,grow:0,add:!1},spray:{col:[.9,.95,.96],size:[.35,.9],life:[.4,.8],g:10,drag:1.1,alpha:.5,grow:1.1,add:!1},ring:{col:[.66,.55,.41],size:[1.6,3.2],life:[1,1.8],g:-.3,drag:2.4,alpha:.3,grow:2.6,add:!1},flame:{col:[1,.55,.2],size:[.4,.9],life:[.15,.3],g:-3,drag:2,alpha:.9,grow:1.5,add:!0}},al=class{constructor(t,e,n){this.cap=e,this.n=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.c=new Float32Array(e*4),this.s=new Float32Array(e),this.life=new Float32Array(e),this.max=new Float32Array(e),this.k=new Array(e);let i=this.geo=new ue;i.setAttribute("position",new ie(this.p,3).setUsage(Wn)),i.setAttribute("color",new ie(this.c,4).setUsage(Wn)),i.setAttribute("size",new ie(this.s,1).setUsage(Wn)),this.mat=new Re({uniforms:{map:{value:Pi()},scale:{value:600},fogColor:{value:new bt},fogDensity:{value:0}},vertexShader:`attribute float size; attribute vec4 color; varying vec4 vC; varying float vFog; uniform float scale, fogDensity;
        void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * scale / max(-mv.z, 0.1); gl_Position = projectionMatrix * mv; float d = -mv.z; vFog = 1.0 - exp(-fogDensity*fogDensity*d*d); }`,fragmentShader:`uniform sampler2D map; uniform vec3 fogColor; varying vec4 vC; varying float vFog; void main(){ vec4 t = texture2D(map, gl_PointCoord); vec4 c = vec4(vC.rgb, vC.a * t.a); ${n?"c.rgb *= c.a * (1.0 - vFog);":"c.rgb = mix(c.rgb, fogColor, vFog);"} if (c.a < 0.01) discard; gl_FragColor = c; }`,transparent:!0,depthWrite:!1,blending:n?rn:ii}),this.pts=new ao(i,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=5,t.add(this.pts)}spawn(t,e,n,i,r,a,o,l=1){if(this.n>=this.cap)return;let h=this.n++,c=rl[t];this.p[h*3]=e,this.p[h*3+1]=n,this.p[h*3+2]=i,this.v[h*3]=r,this.v[h*3+1]=a,this.v[h*3+2]=o,this.max[h]=this.life[h]=c.life[0]+Math.random()*(c.life[1]-c.life[0]),this.s[h]=(c.size[0]+Math.random()*(c.size[1]-c.size[0]))*l,this.k[h]=c;let f=.9+Math.random()*.2;this.c[h*4]=c.col[0]*f,this.c[h*4+1]=c.col[1]*f,this.c[h*4+2]=c.col[2]*f,this.c[h*4+3]=c.alpha}update(t){let e=0;for(;e<this.n;){if(this.life[e]-=t,this.life[e]<=0){let a=--this.n;if(e!==a){for(let o=0;o<3;o++)this.p[e*3+o]=this.p[a*3+o],this.v[e*3+o]=this.v[a*3+o];for(let o=0;o<4;o++)this.c[e*4+o]=this.c[a*4+o];this.s[e]=this.s[a],this.life[e]=this.life[a],this.max[e]=this.max[a],this.k[e]=this.k[a]}continue}let n=this.k[e],i=Math.exp(-n.drag*t);this.v[e*3]*=i,this.v[e*3+1]=this.v[e*3+1]*i-n.g*t,this.v[e*3+2]*=i,this.p[e*3]+=this.v[e*3]*t,this.p[e*3+1]+=this.v[e*3+1]*t,this.p[e*3+2]+=this.v[e*3+2]*t,this.s[e]=Math.max(.02,this.s[e]+n.grow*t);let r=this.life[e]/this.max[e];this.c[e*4+3]=n.alpha*Math.min(1,r*2.2)*Math.min(1,(1-r)*8+.2),e++}this.geo.setDrawRange(0,this.n),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0}},ol=class{constructor(t,e){this.q=e.particles,this.norm=new al(t,Math.round(1800*this.q)+200,!1),this.add=new al(t,Math.round(600*this.q)+100,!0)}setFog(t,e,n){for(let i of[this.norm,this.add])i.mat.uniforms.fogColor.value.copy(t.color),i.mat.uniforms.fogDensity.value=t.density,i.mat.uniforms.scale.value=e*n*.5}burst(t,e,n,i,r=10,a=4,o=.5,l=.5,h=1){r=Math.max(1,Math.round(r*this.q));let c=rl[t].add?this.add:this.norm;for(let f=0;f<r;f++){let d=Math.random()*6.283,u=Math.random();c.spawn(t,e+(Math.random()-.5)*o*2,n+Math.random()*o*.5,i+(Math.random()-.5)*o*2,Math.cos(d)*a*u,(l+Math.random())*a*.6,Math.sin(d)*a*u,h)}}ringBurst(t,e,n,i,r,a,o=1){r=Math.max(4,Math.round(r*this.q));let l=rl[t].add?this.add:this.norm;for(let h=0;h<r;h++){let c=h/r*6.283+Math.random()*.3,f=a*(.7+Math.random()*.5);l.spawn(t,e+Math.cos(c)*.9,n,i+Math.sin(c)*.9,Math.cos(c)*f,.4+Math.random()*.8,Math.sin(c)*f,o)}}emit(t,e,n,i,r,a,o,l){(rl[t].add?this.add:this.norm).spawn(t,e,n,i,r,a,o,l)}update(t){this.norm.update(t),this.add.update(t)}get count(){return this.norm.n+this.add.n}};var Zf=(s,t)=>{let e=Math.max(0,(Math.abs(s)-t)/(1-t));return Math.sign(s)*Math.min(1,.45*e+.55*e*e*e)},ll=class{constructor(t){this.settings=t,this.keys=new Set,this.pressed=new Set,this.out={steer:0,throttle:0,brake:0,handbrake:!1,pitch:0,nitroPressed:!1},this.touch={steer:0,pitch:0,nitro:!1,hb:!1,brake:!1,active:!1},this.tilt={gamma:0,zero:0,ok:!1},this.lastDevice="keyboard",addEventListener("keydown",e=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),this.keys.has(e.code)||this.pressed.add(e.code),this.keys.add(e.code),this.lastDevice="keyboard"}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("blur",()=>this.keys.clear()),this.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0}bindTouch(t){let e=t.querySelector("#tStick"),n=t.querySelector("#tKnob"),i=t.querySelector("#tBase"),r=null,a=0,o=0,l=this.touch;e.addEventListener("touchstart",d=>{d.preventDefault();let u=d.changedTouches[0];r=u.identifier,a=u.clientX,o=u.clientY,i.style.left=a+"px",i.style.top=o+"px",i.classList.add("on"),l.active=!0,this.lastDevice="touch"},{passive:!1});let h=d=>{for(let u of d.changedTouches)if(u.identifier===r){let g=u.clientX-a,x=u.clientY-o;l.steer=gt(g/55,-1,1),l.pitch=gt(-x/55,-1,1),n.style.transform=`translate(${gt(g,-55,55)}px, ${gt(x,-55,55)}px)`}},c=d=>{for(let u of d.changedTouches)u.identifier===r&&(r=null,l.steer=0,l.pitch=0,n.style.transform="",i.classList.remove("on"))};e.addEventListener("touchmove",h,{passive:!0}),e.addEventListener("touchend",c),e.addEventListener("touchcancel",c);let f=(d,u)=>{let g=t.querySelector(d),x=m=>{m.preventDefault(),l[u]=!0,g.classList.add("down"),u==="nitro"&&this.pressed.add("TouchNitro")},p=()=>{l[u]=!1,g.classList.remove("down")};g.addEventListener("touchstart",x,{passive:!1}),g.addEventListener("touchend",p),g.addEventListener("touchcancel",p),g.addEventListener("mousedown",x),g.addEventListener("mouseup",p)};f("#tNitro","nitro"),f("#tHB","hb"),f("#tBrake","brake")}async enableGyro(){try{return typeof DeviceOrientationEvent<"u"&&DeviceOrientationEvent.requestPermission&&await DeviceOrientationEvent.requestPermission()!=="granted"?!1:(addEventListener("deviceorientation",t=>{let e=Math.abs(window.orientation||0)===90||innerWidth>innerHeight;this.tilt.gamma=e?(t.beta||0)*(window.orientation===-90?-1:1):t.gamma||0,this.tilt.ok=!0}),!0)}catch{return!1}}calibrate(){this.tilt.zero=this.tilt.gamma}wasPressed(t){return this.pressed.has(t)}anyPressed(){return this.pressed.size>0}update(t){let e=this.keys,n=this.out,i=this.settings,r=0,a=0,o=0,l=!1,h=0,c=!1,f=performance.now(),d=Math.min(.05,Math.max(.001,(f-(this._lt||f))/1e3));this._lt=f;let u=0;(e.has("KeyA")||e.has("ArrowLeft"))&&(u-=1),(e.has("KeyD")||e.has("ArrowRight"))&&(u+=1);{let p=this._ks||0,m=u!==0&&Math.sign(u)!==Math.sign(p)&&p!==0,v=u===0?9:m?12:5.2+Math.abs(p)*2.5;this._ks=p+gt(u-p,-v*d,v*d),Math.abs(this._ks)<.01&&!u&&(this._ks=0)}r=this._ks,(e.has("KeyW")||e.has("ArrowUp"))&&(a=1),(e.has("KeyS")||e.has("ArrowDown"))&&(o=1),e.has("Space")&&(l=!0),(this.pressed.has("ShiftLeft")||this.pressed.has("ShiftRight"))&&(c=!0);let g=navigator.getGamepads?navigator.getGamepads():[];for(let p of g){if(!p)continue;let m=p.axes[0]||0,v=p.axes[1]||0;Math.abs(m)>.1&&(r=Zf(m,.1),this.lastDevice="pad");let y=p.buttons[7]?p.buttons[7].value:0,_=p.buttons[6]?p.buttons[6].value:0;y>.05&&(a=Math.max(a,y),this.lastDevice="pad"),_>.05&&(o=Math.max(o,_)),p.buttons[0]&&p.buttons[0].pressed&&(l=!0);let C=p.buttons[1]&&p.buttons[1].pressed;C&&!this._padB&&(c=!0),this._padB=C,t&&Math.abs(v)>.15&&(h=v);let w=p.buttons[9]&&p.buttons[9].pressed;w&&!this._padStart&&this.pressed.add("Escape"),this._padStart=w;let R=p.buttons[3]&&p.buttons[3].pressed;R&&!this._padY&&this.pressed.add("KeyC"),this._padY=R;let P=p.buttons[0]&&p.buttons[0].pressed;P&&!this._padA&&this.pressed.add("PadA"),this._padA=P,t&&Math.abs(v)>.15&&(h=-v)}let x=this.touch;if(i.touchMode==="tilt"&&this.tilt.ok){let p=this.tilt.gamma-this.tilt.zero;Math.abs(p)>1.5&&(r=gt(p/22,-1,1))}else x.active&&Math.abs(x.steer)>.06&&(r=Zf(x.steer,.06)*1.04);return x.active&&Math.abs(x.pitch)>.1&&t&&(h=x.pitch),x.hb&&(l=!0),x.brake&&(o=1),this.pressed.has("TouchNitro")&&(c=!0),i.autoAccel&&!o&&(a=Math.max(a,1)),t&&!h&&(h=(e.has("KeyW")||e.has("ArrowUp")?1:0)-(e.has("KeyS")||e.has("ArrowDown")?1:0)),n.steer=r,n.throttle=a,n.brake=o,n.handbrake=l,n.pitch=h,n.nitroPressed=c,n}endFrame(){this.pressed.clear()}};var ci=s=>440*Math.pow(2,(s-69)/12),Ky=[{r:50,ch:[62,65,69]},{r:46,ch:[58,62,65]},{r:48,ch:[60,64,67]},{r:45,ch:[61,64,69]}],Qy=[0,7,3,7,0,7,5,7,0,7,3,7,10,7,5,7],jy=[[0,62,1],[1,69,1],[2,74,3],[5,72,1],[6,69,2],[8,70,1.5],[9.5,69,.5],[10,67,2],[12,69,4]],cl=class{constructor(t){this.settings=t,this.ctx=null,this.started=!1,this.intensity=0,this.musicMode="title"}start(){if(this.started){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.started=!0,this.master=e.createGain(),this.master.gain.value=.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,this.master.connect(n),n.connect(e.destination),this.sfxBus=e.createGain(),this.sfxBus.connect(this.master),this.musBus=e.createGain(),this.musBus.connect(this.master),this.verb=e.createConvolver();let i=e.sampleRate*2.2,r=e.createBuffer(2,i,e.sampleRate);for(let l=0;l<2;l++){let h=r.getChannelData(l);for(let c=0;c<i;c++)h[c]=(Math.random()*2-1)*Math.pow(1-c/i,3)}this.verb.buffer=r;let a=e.createGain();a.gain.value=.22,this.verb.connect(a),a.connect(this.master),this.noiseBuf=e.createBuffer(1,e.sampleRate*2,e.sampleRate);let o=this.noiseBuf.getChannelData(0);for(let l=0;l<o.length;l++)o[l]=Math.random()*2-1;this._engine(),this._loops(),this.applyVolumes(),this.nextNote=e.currentTime+.1,this.step=0,this.timer=setInterval(()=>this._schedule(),60)}applyVolumes(){this.ctx&&(this.sfxBus.gain.value=this.settings.sfx,this.musBus.gain.value=this.settings.music*.55)}noise(t=!0){let e=this.ctx.createBufferSource();return e.buffer=this.noiseBuf,e.loop=t,e}_engine(){let t=this.ctx;this.eg=t.createGain(),this.eg.gain.value=0,this.eg.connect(this.sfxBus),this.elp=t.createBiquadFilter(),this.elp.type="lowpass",this.elp.frequency.value=600,this.elp.Q.value=2.5,this.elp.connect(this.eg);let e=t.createWaveShaper(),n=new Float32Array(256);for(let l=0;l<256;l++){let h=l/128-1;n[l]=Math.tanh(h*2.6)}e.curve=n,e.connect(this.elp),this.o1=t.createOscillator(),this.o1.type="sawtooth",this.o2=t.createOscillator(),this.o2.type="square",this.o3=t.createOscillator(),this.o3.type="sawtooth";let i=t.createGain(),r=t.createGain(),a=t.createGain();i.gain.value=.5,r.gain.value=.35,a.gain.value=.25,this.o1.connect(i),this.o2.connect(r),this.o3.connect(a),i.connect(e),r.connect(e),a.connect(e),this.lfo=t.createOscillator(),this.lfo.type="square";let o=t.createGain();o.gain.value=.18,this.lfo.connect(o),o.connect(i.gain),[this.o1,this.o2,this.o3,this.lfo].forEach(l=>l.start())}_loopNoise(t,e,n){let i=this.ctx,r=this.noise(),a=i.createBiquadFilter();a.type=t,a.frequency.value=e,a.Q.value=n;let o=i.createGain();return o.gain.value=0,r.connect(a),a.connect(o),o.connect(this.sfxBus),r.start(i.currentTime,Math.random()),{g:o,fl:a}}_loops(){this.skid=this._loopNoise("bandpass",1100,3),this.gravel=this._loopNoise("highpass",2400,.7),this.wind=this._loopNoise("lowpass",700,.5),this.water=this._loopNoise("bandpass",600,.6),this.rumble=this._loopNoise("lowpass",140,1.2);let t=this.ctx;this.rumbleOsc=t.createOscillator(),this.rumbleOsc.frequency.value=34;let e=t.createGain();e.gain.value=0,this.rumbleOsc.connect(e),e.connect(this.sfxBus),this.rumbleOsc.start(),this.rumbleG=e}update(t,e){if(!this.ctx)return;let n=this.ctx.currentTime,i=(l,h,c=.06)=>l.setTargetAtTime(h,n,c),r=e.rpm||900,a=r/60*1.5;i(this.o1.frequency,a),i(this.o2.frequency,a*.5),i(this.o3.frequency,a*1.01*2),i(this.lfo.frequency,a*.25),i(this.elp.frequency,280+r*.32*(.5+e.throttle*.7)+(e.nitro?900:0)),i(this.eg.gain,e.running?.16+e.throttle*.12:0,.1),i(this.skid.g.gain,e.running?gt(e.slip,0,1)*.22:0),i(this.gravel.g.gain,e.running&&e.grounded?gt(e.speed/30,0,1)*(e.surf===3?.05:.09):0),this.gravel.fl.frequency.value=e.surf===3?900:2400,i(this.wind.g.gain,e.running?gt(e.speed/40,0,1)**2*.22+(e.grounded?0:.05):0),i(this.water.g.gain,e.running&&e.inWater?.3:0);let o=gt(e.boulder||0,0,1);i(this.rumble.g.gain,o*.85),i(this.rumbleG.gain,o*.25),this.intensity=gt(e.intensity||0,0,1)}setMusic(t){this.musicMode=t}_schedule(){let t=this.ctx;if(!t)return;let e=this.musicMode==="run"?142:this.musicMode==="title"?92:100,n=60/e/4;for(;this.nextNote<t.currentTime+.25;)this._play(this.step,this.nextNote,n),this.nextNote+=n,this.step++}_tone(t,e,n,i,r,a,o={}){let l=this.ctx,h=l.createOscillator(),c=l.createGain();h.type=t,h.frequency.setValueAtTime(e,n),o.slide&&h.frequency.exponentialRampToValueAtTime(o.slide,n+i),o.detune&&(h.detune.value=o.detune);let f=o.a||.005;c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(r,n+f),c.gain.exponentialRampToValueAtTime(8e-4,n+i);let d=h;if(o.lp){let u=l.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(o.lp,n),o.lpEnd&&u.frequency.exponentialRampToValueAtTime(o.lpEnd,n+i),h.connect(u),d=u}d.connect(c),c.connect(a||this.musBus),o.verb&&c.connect(this.verb),h.start(n),h.stop(n+i+.05)}_hit(t,e,n,i,r,a=0,o=3e3){if(this._tone("sine",e,t,i,r,this.musBus,{slide:n}),a){let l=this.ctx,h=this.noise(!1),c=l.createBiquadFilter(),f=l.createGain();c.type="bandpass",c.frequency.value=o,c.Q.value=.8,f.gain.setValueAtTime(a,t),f.gain.exponentialRampToValueAtTime(.001,t+i*.5),h.connect(c),c.connect(f),f.connect(this.musBus),h.start(t,Math.random()),h.stop(t+i)}}_play(t,e,n){let i=this.musicMode;if(i==="off")return;let r=Math.floor(t/16)%4,a=t%16,o=Ky[r],l=i==="run"?this.intensity:i==="title"?.35:.15;if(a%4===0&&this._tone("sawtooth",ci(o.r-12),e,n*3.6,.13,this.musBus,{lp:420,lpEnd:160}),i==="run"||a%2===0){let h=o.r+12+Qy[a];this._tone("sawtooth",ci(h),e,n*1.6,.035+l*.02,this.musBus,{lp:1800,detune:6}),this._tone("sawtooth",ci(h),e,n*1.6,.025,this.musBus,{lp:1600,detune:-8})}if(a===0)for(let h of o.ch)this._tone("triangle",ci(h),e,n*15,.03,this.musBus,{a:.3,verb:!0});if(i==="run"?((a===0||a===10)&&this._hit(e,82,46,.5,.42,.05,800),l>.25&&(a===4||a===12)&&this._hit(e,180,120,.18,.12,.22,2400),l>.45&&a%2===0&&this._hit(e,110,70,.14,.12,.03,600),l>.75&&a%2===1&&this._hit(e,120,80,.1,.07,0,600)):a===0&&this._hit(e,70,45,.9,.25,.02,600),i==="run"&&l>.55||i==="title"&&Math.floor(t/64)%2===1){let h=t%64/4;for(let[c,f,d]of jy)if(Math.abs(h-c)<.01){let u=d*n*4,g=i==="run"?.06+l*.04:.045;this._tone("sawtooth",ci(f),e,u,g,this.musBus,{a:.04,lp:2600,lpEnd:900,verb:!0}),this._tone("sawtooth",ci(f-12),e,u,g*.6,this.musBus,{a:.05,lp:1400,lpEnd:500})}}}sfx(t,e=1){let n=this.ctx;if(!n)return;let i=n.currentTime,r=this.sfxBus,a=(o,l,h,c,f,d)=>{let u=this.noise(!1),g=n.createBiquadFilter(),x=n.createGain();g.type=l,g.frequency.setValueAtTime(h,i),d&&g.frequency.exponentialRampToValueAtTime(d,i+o),g.Q.value=c,x.gain.setValueAtTime(f,i),x.gain.exponentialRampToValueAtTime(.001,i+o),u.connect(g),g.connect(x),x.connect(r),u.start(i,Math.random()),u.stop(i+o+.05)};switch(t){case"coin":this._tone("sine",1568,i,.12,.08*e,r),this._tone("sine",2093,i+.05,.18,.07*e,r);break;case"relic":[0,4,7,12,16].forEach((o,l)=>this._tone("triangle",ci(74+o),i+l*.07,.9,.06,r,{verb:!0}));break;case"nitro":a(.9,"bandpass",300,.7,.4,2400),this._tone("sawtooth",60,i,.6,.15,r,{slide:30,lp:300});break;case"land":a(.25,"lowpass",300,1,.5*e),this._tone("sine",70,i,.25,.4*e,r,{slide:40});break;case"impact":a(.3,"lowpass",900,1,.5*e),this._tone("square",140,i,.12,.08*e,r,{slide:60});break;case"clang":[523,1187,1730,2410].forEach((o,l)=>this._tone("sine",o,i,.6-l*.1,.07,r,{verb:!0})),a(.1,"highpass",3e3,1,.3);break;case"crack":a(.35,"highpass",1800,1,.5);for(let o=0;o<5;o++)this._tone("square",300+Math.random()*500,i+o*.04,.03,.08,r);break;case"slam":a(1.4,"lowpass",400,1,.9,80),this._tone("sine",55,i,1,.6,r,{slide:28});break;case"snap":a(.08,"bandpass",1500,2,.6),this._tone("square",220,i,.05,.1,r);break;case"swoosh":a(.35,"bandpass",600,3,.35,2400);break;case"splash":a(.9,"bandpass",900,.6,.55,300);break;case"rumble":a(2.2,"lowpass",160,1,.8,60);break;case"shift":this._tone("square",90,i,.05,.05,r);break;case"ui":this._tone("triangle",880,i,.08,.06,r),this._tone("triangle",1320,i+.04,.1,.05,r);break;case"mission":[62,66,69,74].forEach((o,l)=>this._tone("sawtooth",ci(o),i+l*.11,.5,.05,r,{lp:2400,verb:!0}));break;case"perfect":[69,74,78].forEach((o,l)=>this._tone("triangle",ci(o+12),i+l*.06,.4,.06,r,{verb:!0}));break;case"crash":a(.8,"lowpass",1200,1,.8,200),this._tone("sawtooth",90,i,.4,.12,r,{slide:40,lp:500});break;case"gameover":[62,61,60,55].forEach((o,l)=>this._tone("sawtooth",ci(o-12),i+l*.35,.6,.08,r,{lp:900,verb:!0}));break}}voice(t,e){let n=this.ctx;if(!n)return;let i=n.currentTime,r=t==="penny"?330:t==="prof"?160:200,a=Math.min(14,Math.ceil(e.length/5));for(let o=0;o<a;o++)this._tone("square",r*(.85+Math.random()*.4),i+o*.075,.06,.025,this.sfxBus,{lp:1400})}};var gu={};function hl(s,t=128){if(gu[s])return gu[s];let e=document.createElement("canvas");e.width=e.height=t;let n=e.getContext("2d");n.scale(t/128,t/128);let i=n.createRadialGradient(64,50,10,64,64,80);i.addColorStop(0,s==="penny"?"#6a8a8a":s==="prof"?"#7a6a4a":"#8a6a3a"),i.addColorStop(1,"#2a1a0e"),n.fillStyle=i,n.fillRect(0,0,128,128);let r=s==="prof"?"#e0b898":"#d09468";if(n.fillStyle=s==="dusty"?"#6a3f22":s==="penny"?"#b9a57a":"#3a3a44",n.beginPath(),n.ellipse(64,132,52,34,0,0,6.3),n.fill(),s==="penny"&&(n.fillStyle="#b8302a",n.beginPath(),n.moveTo(40,104),n.quadraticCurveTo(64,120,88,104),n.lineTo(84,116),n.quadraticCurveTo(64,128,44,116),n.fill()),n.fillStyle=r,n.fillRect(54,84,20,18),s==="penny"&&(n.fillStyle="#8a3e1e",n.beginPath(),n.ellipse(64,58,34,38,0,0,6.3),n.fill()),n.fillStyle=r,n.beginPath(),n.ellipse(64,62,24,29,0,0,6.3),n.fill(),n.fillStyle="#1a120c",n.beginPath(),n.ellipse(55,60,3,3.6,0,0,6.3),n.ellipse(73,60,3,3.6,0,0,6.3),n.fill(),n.strokeStyle=s==="prof"?"#e8e8e0":"#3a2010",n.lineWidth=3,n.beginPath(),n.moveTo(48,52),n.lineTo(60,51),n.moveTo(68,51),n.lineTo(80,52),n.stroke(),n.strokeStyle="#6a2a1a",n.lineWidth=2.5,n.beginPath(),s==="dusty"?(n.moveTo(54,78),n.quadraticCurveTo(66,84,76,75)):n.arc(64,74,7,.3,2.8),n.stroke(),n.fillStyle="rgba(120,60,30,.35)",n.beginPath(),n.ellipse(64,68,4,6,0,0,6.3),n.fill(),s==="dusty")n.fillStyle="rgba(60,40,24,.35)",n.beginPath(),n.ellipse(64,80,20,10,0,0,Math.PI),n.fill(),n.fillStyle="#7a5c3c",n.beginPath(),n.ellipse(64,40,48,11,-.05,0,6.3),n.fill(),n.fillStyle="#6a4c30",n.beginPath(),n.moveTo(40,40),n.quadraticCurveTo(42,14,64,14),n.quadraticCurveTo(86,14,88,40),n.fill(),n.fillStyle="#3a2a1c",n.fillRect(41,33,46,6);else if(s==="penny"){n.fillStyle="#8a3e1e",n.beginPath(),n.ellipse(64,38,28,12,0,Math.PI,0),n.fill(),n.fillStyle="#b48a3c",n.strokeStyle="#5a4018",n.lineWidth=2;for(let a of[52,76])n.beginPath(),n.arc(a,38,9,0,6.3),n.fill(),n.stroke(),n.fillStyle="#9ad0d8",n.beginPath(),n.arc(a,38,5.5,0,6.3),n.fill(),n.fillStyle="#b48a3c"}else n.fillStyle="#ecece4",n.beginPath(),n.ellipse(40,50,8,14,0,0,6.3),n.ellipse(88,50,8,14,0,0,6.3),n.fill(),n.beginPath(),n.moveTo(50,72),n.quadraticCurveTo(64,64,78,72),n.quadraticCurveTo(64,78,50,72),n.fill(),n.strokeStyle="#8a6a32",n.lineWidth=2,n.beginPath(),n.arc(55,60,8,0,6.3),n.moveTo(81,60),n.arc(73,60,8,0,6.3),n.moveTo(63,60),n.lineTo(65,60),n.stroke();return gu[s]=e,e}var Jf={dusty:"DUSTY",penny:"PENNY",prof:"PROF. ABERNATHY"};var pn=(s,t=document)=>t.querySelector(s),ul=class{constructor(t){t.innerHTML=`
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
      <div class="hint hidden" id="hHint">BRAKE</div>`,this.root=t,this.el={dist:pn("#hDist",t),coins:pn("#hCoins",t),relics:pn("#hRelics",t),score:pn("#hScore",t),mult:pn("#hMult",t),missions:pn("#hMissions",t),danger:pn("#hDanger",t),dfill:pn("#hDFill",t),dlbl:pn("#hDLbl",t),bark:pn("#hBark",t),pops:pn("#hPops",t),banner:pn("#hBanner",t),hint:pn("#hHint",t)},this.mini=pn("#mini",t).getContext("2d"),this.speedo=pn("#speedo",t).getContext("2d"),this.barkQ=[],this.barkT=0,this.last={},this.mt=0}set(t,e){this.last[t]!==e&&(this.last[t]=e,this.el[t].textContent=e)}bark(t,e,n){this.barkQ.length>2&&this.barkQ.shift(),this.barkQ.push({who:t,text:e}),this.barkT<=0&&this._nextBark(n),this.audio=n}_nextBark(t){let e=this.barkQ.shift();if(!e){this.el.bark.classList.add("off");return}let i=this.el.bark.querySelector("canvas").getContext("2d");i.clearRect(0,0,128,128),i.drawImage(hl(e.who),0,0,128,128),this.el.bark.querySelector(".who").textContent=Jf[e.who],this.el.bark.querySelector(".txt").textContent=e.text,this.el.bark.classList.remove("off"),this.barkT=2.6+e.text.length*.03,t&&t.voice(e.who,e.text)}popup(t,e,n={}){let i=document.createElement("div");for(i.className="pop"+(n.big?" big":"")+(n.bad?" bad":""),i.innerHTML=t+(e?`<small>+${e.toLocaleString()}</small>`:""),this.el.pops.appendChild(i),setTimeout(()=>i.remove(),1400);this.el.pops.children.length>3;)this.el.pops.firstChild.remove();this.el.mult.classList.add("pop"),setTimeout(()=>this.el.mult.classList.remove("pop"),120)}banner(t,e){let n=document.createElement("div");n.className="banner",n.innerHTML=`${t}${e?`<small>${e}</small>`:""}`,this.el.banner.innerHTML="",this.el.banner.appendChild(n)}missions(t){let e=t.map(n=>n.id+":"+Math.floor(n.p)+(n.done?"d":"")).join("|");e!==this.mkey&&(this.mkey=e,this.el.missions.innerHTML='<div class="mtitle">FIELD JOURNAL</div>'+t.map(n=>`<div class="mcard ${n.p>=n.goal?"done":""}">${n.text}<div class="bar"><b style="width:${gt(n.p/n.goal,0,1)*100}%"></b></div></div>`).join(""))}update(t,e){this.set("dist",Math.floor(e.dist).toLocaleString()+" m"),this.set("coins",String(e.coins)),this.set("relics",String(e.relics)),this.set("score",e.score.toLocaleString()),this.set("mult","\xD7"+e.mult.toFixed(1));let n=gt(e.gap,0,120),i=gt(1-(n-8)/80,0,1);this.el.dfill.style.height=(i*100).toFixed(1)+"%",this.set("dlbl",Math.max(0,Math.round(n))+" m"),this.el.danger.classList.toggle("hot",i>.72),this.el.hint.classList.toggle("hidden",!e.brakeHint),this.el.hint.classList.toggle("cb",!!e.colorblind),this.barkT>0&&(this.barkT-=t,this.barkT<=0&&this._nextBark(this.audio)),this.mt-=t,this.mt<=0&&(this.mt=1/20,this._mini(e),this._speedo(e))}_mini(t){let e=this.mini,n=340,i=160;e.clearRect(0,0,n,n),e.save(),e.translate(n/2,n/2);let r=e.createRadialGradient(0,0,10,0,0,i);r.addColorStop(0,"#efdcb0"),r.addColorStop(.85,"#c8a870"),r.addColorStop(1,"#8a6a3a"),e.fillStyle=r,e.beginPath(),e.arc(0,0,i,0,6.3),e.fill(),e.lineWidth=12,e.strokeStyle="#a07a30",e.stroke(),e.lineWidth=3,e.strokeStyle="#f0d080",e.beginPath(),e.arc(0,0,i-7,0,6.3),e.stroke(),e.beginPath(),e.arc(0,0,i-12,0,6.3),e.clip();let a=t.trackPts,o=1.15,l=t.heading,h=Math.cos(l),c=Math.sin(l),f=(u,g)=>{let x=u-t.cx,p=g-t.cz,m=-(x*h-p*c),v=-(x*c+p*h);return[m*o,v*o]};if(a&&a.length){e.lineCap="round",e.lineJoin="round";for(let[g,x]of[[26,"rgba(90,60,30,.35)"],[12,"#7a5228"]]){e.lineWidth=g,e.strokeStyle=x,e.beginPath();let p=!0;for(let m of a){if(m.mark)continue;let[v,y]=f(m.x,m.z);p?(e.moveTo(v,y),p=!1):e.lineTo(v,y)}e.stroke()}e.setLineDash([6,8]),e.lineWidth=2,e.strokeStyle="#3a2410",e.beginPath();let u=!0;for(let g of a){if(g.mark)continue;let[x,p]=f(g.x,g.z);u?(e.moveTo(x,p),u=!1):e.lineTo(x,p)}e.stroke(),e.setLineDash([]);for(let g of a)if(g.mark){let[x,p]=f(g.x,g.z);e.fillStyle=g.mark==="set"?"#c83a1a":g.mark==="fork"?"#2a6a9a":"#e0a020",e.beginPath(),e.arc(x,p,7,0,6.3),e.fill()}}if(t.bx!==void 0){let[u,g]=f(t.bx,t.bz);e.fillStyle="#5a4a3a",e.strokeStyle="#d8402a",e.lineWidth=4,e.beginPath(),e.arc(u,g,13,0,6.3),e.fill(),e.stroke()}e.restore(),e.save(),e.translate(n/2,n/2),e.fillStyle="#c8321a",e.strokeStyle="#fff",e.lineWidth=2,e.beginPath(),e.moveTo(0,-16),e.lineTo(11,12),e.lineTo(0,6),e.lineTo(-11,12),e.closePath(),e.fill(),e.stroke();let d=l;e.rotate(d),e.fillStyle="#7a1a0a",e.font="bold 26px Cinzel, serif",e.textAlign="center",e.fillText("N",0,-i+38),e.restore()}_speedo(t){let e=this.speedo,n=460,i=400;e.clearRect(0,0,n,i);let r=250,a=220,o=170,l=e.createRadialGradient(r,a-30,20,r,a,o);l.addColorStop(0,"#3a2818"),l.addColorStop(1,"#160e08"),e.fillStyle=l,e.beginPath(),e.arc(r,a,o,0,6.3),e.fill(),e.lineWidth=14;let h=e.createLinearGradient(0,a-o,0,a+o);h.addColorStop(0,"#f0d080"),h.addColorStop(.5,"#a07a30"),h.addColorStop(1,"#5a4018"),e.strokeStyle=h,e.stroke();let c=Math.PI*.8,f=Math.PI*2.2,d=180;e.lineWidth=3,e.strokeStyle="#e8d8b0",e.fillStyle="#e8d8b0",e.font="600 22px Oswald, sans-serif",e.textAlign="center",e.textBaseline="middle";for(let p=0;p<=d;p+=10){let m=c+(f-c)*p/d,v=p%30===0;e.beginPath(),e.moveTo(r+Math.cos(m)*(o-14),a+Math.sin(m)*(o-14)),e.lineTo(r+Math.cos(m)*(o-(v?34:24)),a+Math.sin(m)*(o-(v?34:24))),e.stroke(),v&&e.fillText(p,r+Math.cos(m)*(o-56),a+Math.sin(m)*(o-56))}e.lineWidth=8,e.strokeStyle="rgba(216,70,43,.85)",e.beginPath(),e.arc(r,a,o-18,c+(f-c)*140/d,f),e.stroke();let u=t.speed*3.6,g=c+(f-c)*gt(u/d,0,1.03);e.lineWidth=7,e.strokeStyle="#ff5a30",e.lineCap="round",e.beginPath(),e.moveTo(r-Math.cos(g)*18,a-Math.sin(g)*18),e.lineTo(r+Math.cos(g)*(o-30),a+Math.sin(g)*(o-30)),e.stroke(),e.fillStyle="#c49a48",e.beginPath(),e.arc(r,a,16,0,6.3),e.fill(),e.fillStyle="#fff4d8",e.font="600 56px Oswald, sans-serif",e.fillText(Math.round(u),r,a+62),e.font="500 18px Oswald",e.fillStyle="#c8b890",e.fillText("KM/H  \xB7  GEAR "+(t.gear+1),r,a+100),e.textAlign="left",e.font="700 20px Oswald",e.fillStyle=t.nitroing?"#ffb060":"#f0d8a0",e.fillText("NITRO",12,30);for(let p=0;p<t.nitroCap;p++){let m=gt(t.nitro-p,0,1),v=12+p*30;e.fillStyle="#2a1a10",e.fillRect(v,46,22,46),e.fillStyle=m>=1?"#d8402a":"#8a3020",e.fillRect(v+2,48+42*(1-m),18,42*m),e.strokeStyle="#c49a48",e.lineWidth=2,e.strokeRect(v,46,22,46),e.fillStyle="#c49a48",e.fillRect(v+6,40,10,6)}let x=gt(t.hp/t.maxHp,0,1);e.fillStyle="#f0d8a0",e.fillText("HP",12,i-22),e.fillStyle="#2a1a10",e.fillRect(52,i-36,150,24),e.fillStyle=x>.5?"#7aa83a":x>.25?"#e0a020":"#d8402a",e.fillRect(54,i-34,146*x,20),e.strokeStyle="#c49a48",e.strokeRect(52,i-36,150,24)}};var dl=[{id:"jade_mask",name:"Jade Mask of Ix-Tamun",rarity:"common",shape:"mask",col:"#4fbf8a",lore:"Worn by a priest-king who never blinked. The eyes still follow you.",curse:"Wakes the Great Boulder."},{id:"sun_disc",name:"Sun Disc of Kaal",rarity:"common",shape:"disc",col:"#e8b84a",lore:"Hammered gold that hums at noon.",curse:"Doors seal behind the bearer."},{id:"serpent_staff",name:"Serpent Staff Head",rarity:"common",shape:"serpent",col:"#78c06a",lore:"Coiled bronze, tongue of obsidian.",curse:"River beasts grow hungry."},{id:"obsidian_blade",name:"Obsidian Sacrifice Blade",rarity:"common",shape:"blade",col:"#6b6a80",lore:"Sharper than any steel of 1936.",curse:"Blades swing in the dark."},{id:"feather_crown",name:"Crown of Quetzal Plumes",rarity:"rare",shape:"crown",col:"#3fb6c8",lore:"The feathers have not faded in a thousand years.",curse:"Bridges forget their ropes."},{id:"monkey_idol",name:"Laughing Monkey Idol",rarity:"common",shape:"idol",col:"#c9a24a",lore:"It is definitely laughing at you.",curse:"Pillars lose their footing."},{id:"rain_bowl",name:"Rain-Caller Bowl",rarity:"common",shape:"bowl",col:"#5aa0d8",lore:"Never empty, never spills.",curse:"Waterfalls roar louder."},{id:"jaguar_fang",name:"Jaguar Fang Necklace",rarity:"common",shape:"fang",col:"#e8dcc0",lore:"Each fang from a different legend.",curse:"Something stalks the canopy."},{id:"star_map",name:"Star Map Tablet",rarity:"rare",shape:"tablet",col:"#b8a070",lore:"Shows a sky that has not existed for ages.",curse:"Paths fork without warning."},{id:"colossus_eye",name:"Eye of the Colossus",rarity:"rare",shape:"eye",col:"#f0d060",lore:"Pried from a statue that did not appreciate it.",curse:"Giants fall toward the thief."},{id:"heart_stone",name:"Heartstone of the Deep Temple",rarity:"legendary",shape:"heart",col:"#e04848",lore:"Warm to the touch. It beats, faintly.",curse:"The whole temple wants it back."},{id:"emerald_skull",name:"Emerald Skull",rarity:"legendary",shape:"skull",col:"#38d080",lore:"Cut from a single stone. Nobody knows how.",curse:"Every trap remembers your face."}],t_={common:10,rare:3.5,legendary:1};function Qf(s,t){let e=dl.map(n=>({w:t_[n.rarity]*(t&&n.rarity!=="common"?2.5:1),v:n}));return s.weighted(e)}function jf(s,t=128,e=!0){let n=document.createElement("canvas");n.width=n.height=t;let i=n.getContext("2d"),r=t/128;i.scale(r,r);let a=i.createRadialGradient(64,60,4,64,64,64);a.addColorStop(0,e?"rgba(255,230,160,0.55)":"rgba(80,70,60,0.3)"),a.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=a,i.fillRect(0,0,128,128);let o=e?s.col:"#3a342c",l=e?"rgba(0,0,0,0.35)":"rgba(0,0,0,0.5)",h=i.createLinearGradient(30,20,100,110);h.addColorStop(0,e?"#fff6d8":"#4a443a"),h.addColorStop(.25,o),h.addColorStop(1,e?Kf(o,-.45):"#221e18"),i.fillStyle=h,i.strokeStyle=e?Kf(o,-.6):"#1a1612",i.lineWidth=3;let c=()=>{i.fill(),i.stroke()};switch(i.beginPath(),s.shape){case"mask":i.moveTo(64,18),i.bezierCurveTo(104,18,104,70,92,92),i.lineTo(64,112),i.lineTo(36,92),i.bezierCurveTo(24,70,24,18,64,18),c(),i.fillStyle=l,i.fillRect(42,50,16,8),i.fillRect(70,50,16,8),i.fillRect(54,82,20,6);break;case"disc":i.arc(64,64,44,0,6.3),c(),i.beginPath(),i.strokeStyle=l;for(let f=0;f<16;f++){let d=f/16*6.28;i.moveTo(64+Math.cos(d)*20,64+Math.sin(d)*20),i.lineTo(64+Math.cos(d)*38,64+Math.sin(d)*38)}i.stroke(),i.beginPath(),i.arc(64,64,14,0,6.3),i.fillStyle=l,i.fill();break;case"serpent":i.lineWidth=14,i.strokeStyle=o,i.moveTo(30,100),i.bezierCurveTo(10,60,110,70,90,34),i.stroke(),i.beginPath(),i.lineWidth=3,i.fillStyle=h,i.ellipse(90,30,14,10,-.5,0,6.3),i.fill();break;case"blade":i.moveTo(64,12),i.lineTo(82,70),i.lineTo(64,84),i.lineTo(46,70),i.closePath(),c(),i.fillStyle="#7a5030",i.fillRect(56,84,16,30);break;case"crown":i.moveTo(24,96),i.lineTo(30,46),i.lineTo(46,70),i.lineTo(64,26),i.lineTo(82,70),i.lineTo(98,46),i.lineTo(104,96),i.closePath(),c();break;case"idol":i.ellipse(64,46,24,22,0,0,6.3),c(),i.beginPath(),i.moveTo(44,64),i.lineTo(84,64),i.lineTo(92,112),i.lineTo(36,112),i.closePath(),c(),i.fillStyle=l,i.beginPath(),i.arc(56,44,4,0,6.3),i.arc(72,44,4,0,6.3),i.fill(),i.beginPath(),i.arc(64,54,8,.2,2.9),i.stroke();break;case"bowl":i.moveTo(20,60),i.lineTo(108,60),i.bezierCurveTo(104,100,24,100,20,60),c(),i.fillStyle="#9fd8ff",i.beginPath(),i.ellipse(64,60,44,8,0,0,6.3),i.fill();break;case"fang":for(let f=0;f<5;f++){i.beginPath();let d=28+f*18;i.moveTo(d-6,50),i.lineTo(d+6,50),i.lineTo(d,76+(f===2?14:0)),i.closePath(),c()}i.beginPath(),i.strokeStyle="#8a6a3a",i.lineWidth=3,i.moveTo(16,40),i.quadraticCurveTo(64,64,112,40),i.stroke();break;case"tablet":i.roundRect?i.roundRect(28,18,72,92,8):i.rect(28,18,72,92),c(),i.fillStyle=e?"#fff4c0":"#555";for(let f=0;f<9;f++)i.beginPath(),i.arc(40+f*37%50,32+f*8,2.5,0,6.3),i.fill();break;case"eye":i.moveTo(14,64),i.quadraticCurveTo(64,14,114,64),i.quadraticCurveTo(64,114,14,64),c(),i.beginPath(),i.fillStyle=l,i.arc(64,64,16,0,6.3),i.fill();break;case"heart":i.moveTo(64,108),i.bezierCurveTo(10,70,24,20,64,44),i.bezierCurveTo(104,20,118,70,64,108),c();break;case"skull":i.ellipse(64,56,34,32,0,0,6.3),c(),i.fillRect(46,80,36,22),i.strokeRect(46,80,36,22),i.fillStyle=l,i.beginPath(),i.ellipse(51,56,9,10,0,0,6.3),i.ellipse(77,56,9,10,0,0,6.3),i.fill();break}return e&&(i.globalCompositeOperation="lighter",i.fillStyle="rgba(255,255,255,0.25)",i.beginPath(),i.ellipse(52,36,12,5,-.6,0,6.3),i.fill()),n}function Kf(s,t){let e=parseInt(s.slice(1),16),n=e>>16,i=e>>8&255,r=e&255,a=o=>Math.round(Math.max(0,Math.min(255,o+o*t)));return`rgb(${a(n)},${a(i)},${a(r)})`}var tp=[{id:"engine",name:"Engine",desc:"More torque and top speed",icon:"\u2699"},{id:"nitro",name:"Nitro",desc:"More canisters, stronger burn",icon:"\u{1F525}"},{id:"suspension",name:"Suspension",desc:"Longer travel, softer landings",icon:"\u26D3"},{id:"armor",name:"Roll Cage & Armor",desc:"More HP, less damage",icon:"\u{1F6E1}"}],fl=5;function pl(s){return{gold:[150,350,700,1200,2e3][s]??1/0,shards:[0,0,2,4,8][s]??1/0}}function xu(s,t){let e=s.upgrades[t];if(e>=fl)return!1;let n=pl(e);return s.gold>=n.gold&&s.shards>=n.shards}function ep(s,t){if(!xu(s,t))return!1;let e=pl(s.upgrades[t]);return s.gold-=e.gold,s.shards-=e.shards,s.upgrades[t]++,!0}var yn=(s,t=document)=>t.querySelector(s),np=["Splendid haul, my boy! Though do try to bring the car back in one piece.","Every relic carries a curse, Dusty. Every single one. Do read the labels.","The museum board wants more legendary pieces. No pressure.","Miss Marlowe tells me you jumped a waterfall. On purpose?","Upgrade that suspension. My spine still remembers the last expedition."],ml=class{constructor(t,e){this.root=t,this.g=e,this.cur=null,this.tab="relics"}show(t,e){if(this.root.innerHTML="",this.cur=t,!t)return;let n=document.createElement("div");n.className="screen",n.id=t,this.root.appendChild(n),this["_"+t](n,e),n.querySelectorAll("button").forEach(r=>r.addEventListener("click",()=>this.g.audio.sfx("ui")));let i=n.querySelector("button.btn");i&&i.classList.add("sel")}_title(t){let e=this.g.save;t.innerHTML=`<div class="logo"><div class="l1">RELIC RUNNER</div><div class="l2">4\xD74</div><div class="tag">A PULP ADVENTURE \xB7 1936</div></div>
      <div class="menu"><button class="btn" id="bStart">START EXPEDITION</button><button class="btn alt" id="bMuseum">MUSEUM &amp; WORKSHOP</button><button class="btn alt" id="bOpt">OPTIONS</button></div>
      <div class="foot">${this.g.input.isTouch?"Touch: left thumb steers \xB7 auto-accelerate \xB7 NITRO / DRIFT buttons":"W/S throttle \xB7 brake \xB7 A/D steer \xB7 SPACE handbrake \xB7 SHIFT nitro \xB7 W/S in the air to pitch \xB7 C camera"}<br>Best: ${Math.floor(e.records.bestDistance).toLocaleString()} m \xB7 ${e.records.bestScore.toLocaleString()} pts \xB7 Expedition Lv ${e.expeditionLevel}</div>`,yn("#bStart",t).onclick=()=>this.g.startRun(),yn("#bMuseum",t).onclick=()=>this.g.toMuseum(),yn("#bOpt",t).onclick=()=>this.show("options",{back:"title"})}_museum(t){let e=this.g.save;t.classList.add("dim");let n=np[(e.records.runs+3)%np.length];t.innerHTML=`<div class="panel"><h1>THE ABERNATHY MUSEUM</h1>
      <div class="prof"><canvas width="128" height="128"></canvas><div><b>Prof. Abernathy</b><br><i>\u201C${n}\u201D</i></div></div>
      <div class="wallet"><span>\u{1FA99} ${e.gold.toLocaleString()} gold</span><span>\u25C6 ${e.shards} relic shards</span><span>\u2605 Expedition Lv ${e.expeditionLevel}</span></div>
      <div class="tabs">${["relics","workshop","missions","garage"].map(r=>`<div class="tab clickable ${this.tab===r?"on":""}" data-t="${r}">${r.toUpperCase()}</div>`).join("")}</div>
      <div id="tabBody"></div>
      <div class="row"><button class="btn" id="bGo">START EXPEDITION</button><button class="btn alt" id="bBack">BACK</button></div></div>`,t.querySelector(".prof canvas").getContext("2d").drawImage(hl("prof"),0,0),t.querySelectorAll(".tab").forEach(r=>r.onclick=()=>{this.tab=r.dataset.t,this.g.audio.sfx("ui"),this.show("museum")});let i=yn("#tabBody",t);if(this.tab==="relics"){let r=Object.keys(e.relics).length;i.innerHTML=`<h2>JUNGLE TEMPLE COLLECTION \u2014 ${r} / ${dl.length}</h2><div class="grid"></div>`;let a=yn(".grid",i);for(let o of dl){let l=e.relics[o.id]||0,h=document.createElement("div");h.className="relicCard",h.appendChild(jf(o,128,l>0)),h.insertAdjacentHTML("beforeend",`<b>${l?o.name:"???"}</b><span class="r ${o.rarity}">${o.rarity}${l>1?" \xD7"+l:""}</span><p>${l?o.lore+"<br><i>Curse: "+o.curse+"</i>":"Not yet recovered."}</p>`),a.appendChild(h)}}else this.tab==="workshop"?(i.innerHTML="<h2>WORKSHOP \u2014 OLD BESSIE</h2>"+tp.map(r=>{let a=e.upgrades[r.id],o=pl(a);return`<div class="upg"><div class="ic">${r.icon}</div><div class="nm"><b>${r.name}</b><br><small>${r.desc}</small><div class="pips">${"\u25CF".repeat(a)}${"\u25CB".repeat(fl-a)}</div></div><button class="btn" data-u="${r.id}" ${xu(e,r.id)?"":"disabled"}>${a>=fl?"MAXED":`${o.gold} \u{1FA99}${o.shards?" + "+o.shards+" \u25C6":""}`}</button></div>`}).join(""),i.querySelectorAll("button[data-u]").forEach(r=>r.onclick=()=>{ep(e,r.dataset.u)&&(this.g.persist(),this.g.audio.sfx("mission"),this.show("museum"))})):this.tab==="missions"?i.innerHTML="<h2>ACTIVE MISSIONS</h2>"+this.g.missions.active.map(r=>`<div class="upg"><div class="ic">\u{1F4DC}</div><div class="nm"><b>${r.text}</b><br><small>${Math.min(Math.floor(r.p),r.goal)} / ${r.goal}${r.perRun?" (in one run)":""}</small></div></div>`).join("")+`<p>Completing missions raises your Expedition Level: every level adds +10% to the final score. Missions done: ${e.missionsDone}.</p>`:(i.innerHTML=`<h2>GARAGE \u2014 PAINT</h2><div class="paints">${Object.keys(Ts).map(r=>`<div class="paint clickable ${e.paint===r?"on":""}" data-p="${r}" style="background: rgb(${Ts[r].join(",")})" title="${r}"></div>`).join("")}</div><p>Old Bessie: balanced 4\xD74, 4WD (42% front), long-travel suspension, winch, spare tire and far too many crates.<br>More vehicles (Army Scout Car, Desert Truck, Sidecar Motorcycle, Half-Track) arrive in later expeditions.</p>`,i.querySelectorAll(".paint").forEach(r=>r.onclick=()=>{e.paint=r.dataset.p,this.g.car3d.setPaint(e.paint),this.g.persist(),this.show("museum")}));yn("#bGo",t).onclick=()=>this.g.startRun(),yn("#bBack",t).onclick=()=>this.g.toTitle()}_results(t,e){t.classList.add("dim");let n=e.relics.map(i=>`<span title="${i.name}">${i.name}${i.isNew?" <b>(NEW)</b>":""}</span>`).join(", ")||"\u2014";t.innerHTML=`<div class="panel"><h1>${e.reason}</h1>
      <div style="display:flex;gap:24px;align-items:center;justify-content:center;flex-wrap:wrap"><div class="rank">${e.rank}</div><div style="font-family:Oswald;font-size:2.4rem">${e.score.toLocaleString()} pts${e.best?' <small style="color:#a8321a;font-size:1rem">NEW BEST!</small>':""}</div></div>
      <h2>EXPEDITION LOG</h2><div class="res">
        <div><span>Distance</span><b>${Math.floor(e.dist).toLocaleString()} m</b></div><div><span>Gold</span><b>${e.coins}</b></div>
        <div><span>Style points</span><b>${e.style.toLocaleString()}</b></div><div><span>Max combo</span><b>\xD7${e.maxMult.toFixed(1)}</b></div>
        <div><span>Landings P / G / R / C</span><b>${e.stats.perfect} / ${e.stats.good} / ${e.stats.rough} / ${e.stats.crash}</b></div><div><span>Airtime</span><b>${e.stats.air.toFixed(1)} s</b></div>
        <div><span>Set pieces clean</span><b>${e.stats.setClean} / ${e.stats.setTotal}</b></div><div><span>Top speed</span><b>${Math.round(e.stats.maxSpeed*3.6)} km/h</b></div>
        <div><span>Expedition multiplier</span><b>\xD7${e.expMul.toFixed(1)}</b></div><div><span>Relic shards</span><b>+${e.shardsGained}</b></div></div>
      <h2>RELICS RECOVERED</h2><p>${n}</p>
      ${e.missionsDone.length?`<h2>MISSIONS COMPLETE</h2><p>${e.missionsDone.map(i=>"\u2714 "+i.text).join("<br>")}</p>`:""}
      <div class="row"><button class="btn" id="bRetry">RUN AGAIN</button><button class="btn alt" id="bMus">MUSEUM &amp; WORKSHOP</button></div></div>`,yn("#bRetry",t).onclick=()=>this.g.startRun(),yn("#bMus",t).onclick=()=>this.g.toMuseum()}_pause(t){t.classList.add("dim"),t.innerHTML='<div class="panel" style="max-width:420px;text-align:center"><h1>PAUSED</h1><div class="menu"><button class="btn" id="bRes">RESUME</button><button class="btn alt" id="bOpt">OPTIONS</button><button class="btn alt" id="bQuit">ABANDON RUN</button></div></div>',yn("#bRes",t).onclick=()=>this.g.resume(),yn("#bOpt",t).onclick=()=>this.show("options",{back:"pause"}),yn("#bQuit",t).onclick=()=>this.g.endRun("EXPEDITION ABANDONED")}_options(t,e){t.classList.add("dim");let n=this.g.save.settings,i=(o,l)=>`<select data-k="${o}">${l.map(([h,c])=>`<option value="${h}" ${String(n[o])===String(h)?"selected":""}>${c}</option>`).join("")}</select>`,r=(o,l,h,c)=>`<input type="range" data-k="${o}" min="${l}" max="${h}" step="${c}" value="${n[o]}">`,a=o=>`<input type="checkbox" data-k="${o}" ${n[o]?"checked":""}>`;t.innerHTML=`<div class="panel" style="max-width:640px"><h1>OPTIONS</h1>
      <div class="opt"><span>Driving assist</span>${i("assist",[["full","Full"],["light","Light"],["off","Off (realistic)"]])}</div>
      <div class="opt"><span>Auto-accelerate</span>${a("autoAccel")}</div>
      <div class="opt"><span>Difficulty</span>${i("difficulty",[["explorer","Explorer"],["adventurer","Adventurer"],["legend","Legend"]])}</div>
      <div class="opt"><span>Steering sensitivity</span>${r("steerSens",.5,1.5,.05)}</div>
      <div class="opt"><span>Camera distance</span>${r("camDist",.8,1.3,.05)}</div>
      <div class="opt"><span>Touch steering</span>${i("touchMode",[["stick","Virtual stick"],["tilt","Tilt (gyro)"]])} <button class="btn alt" id="bGyro" style="min-width:0;padding:4px 10px;font-size:.8rem">ENABLE / CALIBRATE GYRO</button></div>
      <div class="opt"><span>Motion comfort (less shake &amp; FOV kick)</span>${a("comfort")}</div>
      <div class="opt"><span>Reduce flashing</span>${a("flashing")}</div>
      <div class="opt"><span>Controller rumble</span>${a("rumble")}</div>
      <div class="opt"><span>Colorblind-friendly hazard markers</span>${a("colorblind")}</div>
      <div class="opt"><span>Subtitle size</span>${r("subtitle",.8,1.6,.1)}</div>
      <div class="opt"><span>Music volume</span>${r("music",0,1,.05)}</div>
      <div class="opt"><span>Effects volume</span>${r("sfx",0,1,.05)}</div>
      <div class="opt"><span>Quality</span>${i("quality",[["auto","Auto"],["low","Low (mobile)"],["medium","Medium"],["high","High"]])}</div>
      <div class="opt"><span>Frame rate cap</span>${i("fps",[[60,"60 fps"],[30,"30 fps (battery)"]])}</div>
      <div class="row"><button class="btn" id="bDone">DONE</button></div></div>`,t.querySelectorAll("[data-k]").forEach(o=>o.addEventListener("input",()=>{let l=o.dataset.k;n[l]=o.type==="checkbox"?o.checked:o.type==="range"||l==="fps"?+o.value:o.value,this.g.applySettings(l)})),yn("#bGyro",t).onclick=async()=>{await this.g.input.enableGyro()&&(setTimeout(()=>this.g.input.calibrate(),300),n.touchMode="tilt",this.g.applySettings("touchMode"))},yn("#bDone",t).onclick=()=>{this.g.persist(),e&&e.back==="pause"?this.show("pause"):this.g.toTitle()}}};var gl=class{constructor(t,e){this.g=e,this.el=document.createElement("div"),this.el.id="debug",this.el.className="hidden",t.appendChild(this.el),this.el.innerHTML=`<div id="dbgTxt"></div><hr><div>Force set piece: ${Jh.map(n=>`<button data-sp="${n}">${n}</button>`).join("")}</div>
      <label><input type="checkbox" id="dbgInv"> invincible</label><hr>
      ${[["gripLat",.6,1.8,.02],["springK",18e3,7e4,1e3],["maxSteer",.3,.8,.01],["assistStrength",0,1,.05],["chaserSpeedMul",.5,1.5,.02],["airPitch",1,8,.1],["driftAssist",0,1.5,.05],["engineForce",5e3,16e3,200],["weightTransfer",0,.7,.01],["counterCatch",0,15,.5],["damperRebound",1500,8e3,100],["antiRoll",0,3e4,500]].map(([n,i,r,a])=>`<div>${n} <input type="range" data-t="${n}" min="${i}" max="${r}" step="${a}" value="${Xn[n]}"> <span>${Xn[n]}</span></div>`).join("")}`,this.txt=this.el.querySelector("#dbgTxt"),this.el.querySelectorAll("[data-sp]").forEach(n=>n.onclick=()=>{e.gen.forced=n.dataset.sp}),this.el.querySelector("#dbgInv").onchange=n=>{e.car.invincible=n.target.checked},this.el.querySelectorAll("[data-t]").forEach(n=>n.oninput=()=>{Xn[n.dataset.t]=+n.value,n.nextElementSibling.textContent=n.value}),this.on=!1,this.t=0}toggle(){this.on=!this.on,this.el.classList.toggle("hidden",!this.on)}update(t,e){if(!this.on||(this.t-=t,this.t>0))return;this.t=.2;let n=this.g.car,i=n.wheels;this.txt.innerHTML=`fps ${e.fps.toFixed(0)} \xB7 frame ${e.frameMs.toFixed(1)} ms \xB7 sim ${e.simMs.toFixed(2)} ms<br>draw calls ${e.calls} \xB7 tris ${(e.tris/1e3).toFixed(0)}k \xB7 quality ${e.quality} \xB7 res ${e.res.toFixed(2)}<br>
      speed ${(n.speed*3.6).toFixed(0)} km/h \xB7 gear ${n.gear+1} \xB7 rpm ${n.rpm.toFixed(0)} \xB7 slip ${(n.slipAngle*57.3).toFixed(0)}\xB0 \xB7 drift ${n.drift.toFixed(2)}<br>
      susp ${i.map(r=>r.comp.toFixed(2)).join(" ")} \xB7 contacts ${n.contacts} \xB7 air ${n.airTime.toFixed(2)}s<br>
      wheel slip lat ${i.map(r=>(r.slipLat*57.3).toFixed(0)).join(" ")}<br>hp ${n.hp.toFixed(0)}/${n.maxHp} \xB7 nitro ${n.nitro.toFixed(2)} \xB7 mud ${n.mud.toFixed(2)}<br>
      chaser gap ${e.gap.toFixed(1)} m \xB7 v ${(e.bv*3.6).toFixed(0)} km/h<br>piece ${e.piece} \xB7 biome JUNGLE TEMPLE \xB7 seed ${this.g.seed}<br>
      s ${this.g.carS.toFixed(0)} \xB7 built ${e.built.pieces} \xB7 inst ${e.built.instances} \xB7 particles ${e.particles}<br>validator ${JSON.stringify(this.g.gen.val.stats)}`}};var xl=class{constructor(){this.reset(1)}reset(t){this.dist=0,this.coins=0,this.relics=[],this.style=0,this.combo=0,this.comboT=0,this.expMul=1+(t-1)*.1,this.breakdown={landings:0,drift:0,air:0,nearMiss:0,setPieces:0,gaps:0},this.stats={perfect:0,good:0,rough:0,crash:0,air:0,maxAir:0,gaps:0,setClean:0,setTotal:0,hairpins:0,maxSpeed:0,nitroUsed:0,danger:0,falls:0},this.popups=[]}get mult(){return Math.min(8,1+this.combo*.1)}add(t,e,n){let i=Math.round(t*this.mult);return this.style+=i,n&&(this.breakdown[n]=(this.breakdown[n]||0)+i),this.combo+=1,this.comboT=5,e&&this.popups.push({label:e,pts:i}),i}breakCombo(){this.combo>0&&this.popups.push({label:"Combo lost",pts:0,bad:!0}),this.combo=0}update(t){this.comboT>0&&(this.comboT-=t,this.comboT<=0&&this.combo>0&&(this.combo=Math.max(0,this.combo-3),this.comboT=this.combo?2:0))}get total(){return Math.round((this.dist*1+this.coins*10+this.relics.length*500+this.style)*this.expMul)}rank(){let t=this.total;return t>6e4?"S":t>3e4?"A":t>14e3?"B":t>5e3?"C":"D"}};var vu=[{id:"gaps3",text:"Jump 3 gaps in a row",goal:3,ev:"gapStreak",perRun:!0},{id:"hairpin5",text:"Drift through 5 hairpins",goal:5,ev:"hairpinDrift"},{id:"nonitro500",text:"Outrun the boulder without nitro for 500 m",goal:500,ev:"noNitroDist",perRun:!0},{id:"perfect3",text:"Land 3 PERFECT jumps in one run",goal:3,ev:"perfect",perRun:!0},{id:"coins150",text:"Collect 150 gold in one run",goal:150,ev:"coins",perRun:!0},{id:"danger3",text:"Take the dangerous path 3 times",goal:3,ev:"danger"},{id:"bridges2",text:"Outrun 2 collapsing bridges",goal:2,ev:"bridgeCollapse"},{id:"dist2000",text:"Travel 2,000 m in one run",goal:2e3,ev:"distance",perRun:!0},{id:"setpieces4",text:"Clear 4 set pieces cleanly",goal:4,ev:"setClean"},{id:"air10",text:"Rack up 10 s of airtime in one run",goal:10,ev:"airtime",perRun:!0},{id:"relic2",text:"Find 2 relics in one run",goal:2,ev:"relic",perRun:!0},{id:"nearmiss3",text:"Pull 3 close calls with the boulder",goal:3,ev:"boulderClose"}],vl=class{constructor(t){this.save=t,(!t.missions||!Array.isArray(t.missions)||t.missions.length!==3)&&(t.missions=["gaps3","hairpin5","nonitro500"].map(e=>({id:e,p:0}))),this.justDone=[]}def(t){return vu.find(e=>e.id===t)}get active(){return this.save.missions.map(t=>({...this.def(t.id),p:t.p}))}startRun(){for(let t of this.save.missions)this.def(t.id).perRun&&(t.p=0);this.justDone=[]}report(t,e=1,n=!1){let i=[];for(let r of this.save.missions){let a=this.def(r.id);a.ev!==t||r.done||(r.p=n?Math.max(r.p,e):r.p+e,t==="gapStreak"&&e===0&&(r.p=0),r.p>=a.goal&&(r.done=!0,i.push(a)))}for(let r of i)this.justDone.push(r);return i}resetStreak(t){for(let e of this.save.missions)this.def(e.id).ev===t&&!e.done&&(e.p=0)}refresh(){let t=0,e=new Set(this.save.missions.map(n=>n.id));return this.save.missions=this.save.missions.map(n=>{if(!n.done)return n;t++;let i=vu.filter(a=>!e.has(a.id)),r=i[Math.floor(Math.random()*i.length)]||vu[0];return e.add(r.id),{id:r.id,p:0}}),t&&(this.save.missionsDone+=t,this.save.expeditionLevel=1+Math.floor(this.save.missionsDone/3),this.save.shards+=t*2),t}};var yl=class{constructor(t){this.track=t,this.lanePref=0,this.skill=1}update(t,e,n,i={}){let r=this.track,a=Math.max(t.speed,5),o=gt(a*.55,7,20),l=e+o,h=r.sampleAtS(l),c=0,f=!1;if(h.fork>0&&(c=(this.lanePref||i.danger||1)*h.fork),i.hint){let P=i.hint(l,e);P!=null&&(c=P,f=!0)}if(!f&&i.obstacles&&i.obstacles.length){let P=c,b=1e9;for(let M=-h.hw+1.2;M<=h.hw-1.2;M+=.6){let T=Math.abs(M-c)*.3;for(let L of i.obstacles){if(!L.active)continue;let U=L._s??(L._s=r.locate(L.x,L.z,e)),B=U-e;if(B<-2||B>40)continue;let H=r.query(L.x,L.z,U).lat,j=H;L.x2!==void 0&&(j=r.query(L.x2,L.z2,U).lat);let G=Math.min(H,j)-L.r-1.4,rt=Math.max(H,j)+L.r+1.4;M>G&&M<rt&&t.pos.y+1.2>L.yMin&&(T+=100)}T<b&&(b=T,P=M)}c=P}this.lat=this.lat===void 0?c:this.lat+(c-this.lat)*.25;let d=r.pointAt(l,this.lat,{x:0,y:0,z:0}),u=d.x-t.pos.x,g=d.z-t.pos.z,x=t.fwd.x,p=t.fwd.z,m=t.left.x,v=t.left.z,y=u*x+g*p,_=u*m+g*v,C=Math.atan2(_,Math.max(y,.5));n.steer=gt(-C*2.6,-1,1);let w=40,R=!1;for(let P=5;P<70;P+=5){let b=r.sampleAtS(e+P);if(Math.abs(b.k)>1e-4){let M=bs(1/Math.abs(b.k))*1.05,T=Math.sqrt(M*M+14*P);w=Math.min(w,T)}(b.gap||b.ramp>0)&&(R=!0),b.bridge&&(w=Math.min(w,30))}if(R&&(w=40),f&&(w=Math.min(w,i.hintV||21)),n.throttle=t.speed<w?1:0,n.brake=t.speed>w+2.5?1:0,n.handbrake=!1,n.pitch=0,n.nitroPressed=R&&t.nitro>=1&&!t.nitroing&&i.allowNitro!==!1&&t.speed<30,!t.grounded){let P=t.fwd.y+.12;n.pitch=gt(P*3,-1,1),n.steer=0}return n}};var hi=new URLSearchParams(location.search),yr=1/120,As=42,Rn=s=>document.getElementById(s),e_={full:1,light:.55,off:0},ip={start:[["dusty","Ha! Another one for the museum."],["penny","Dusty, the floor is humming. Floors should not hum."]],close:[["dusty","It's gaining on us!"],["penny","Faster, Dusty! It has our scent!"],["dusty","Come on, old girl, give me everything!"]],perfect:[["penny","Textbook landing! Nobody will ever believe me."],["dusty","Did you see that? Tell me you saw that."],["penny","Ten out of ten. Possibly eleven."]],crash:[["penny","My spine filed a complaint."],["dusty","She's fine! She's fine. Probably fine."]],lowhp:[["penny","Bessie's falling apart, Dusty!"],["dusty","Hold together, sweetheart, just a little longer!"]],relic:[["penny","Ooh \u2014 the {r}! Professor Abernathy will faint."],["dusty","Grab it! Yes \u2014 the {r}!"]],fall:[["penny","That was not a road, Dusty!"],["dusty","Well, that was a bad idea."]],danger:[["dusty","Danger path it is. Hold your hat!"],["penny","Why do we ALWAYS take the skull side?"]],nitro:[["dusty","Hang on to something!"]]},yu=class{constructor(){this.save=mf();let t=this.save.settings;hi.get("quality")&&(t.quality=hi.get("quality")),this.test={autopilot:hi.has("autopilot"),skipIntro:hi.has("skipIntro"),fixed:hi.has("fixed")},this.input=new ll(t),this.audio=new cl(t),this.world=new Ao(Rn("game"),t.quality),this.post=new Do(this.world),this.fx=new ol(this.world.scene,this.world.q),this.world.onResize=()=>{this.post.resize(),this.fx.setFog(this.world.scene.fog,this.world.h,this.world.pr)},this.fx.setFog(this.world.scene.fog,this.world.h,this.world.pr),this.time=this.world.time,this.seed=1,this._newTrack(this._pickSeed(!0)),this.builder=new Qo(this.world.scene,this.track,this.gen,this.time,this.world.q),this.car=new tl(this.track,Xn),this.car3d=new nl(this.world.scene,this.save.paint,{lite:this.world.qualityName==="low"}),this.car3d.onCrate=e=>{this.fx.burst("splinter",e.x,e.y,e.z,14,5,.6),this.audio.sfx("crash",.6)},this.car3d.onBreak=()=>this.bark("dusty","There go the headlights!",!0),this.boulder=new il(this.world.scene,this.track),this.cam=new sl(this.world.camera,this.track),this.autopilot=new yl(this.track),this.apOut={steer:0,throttle:0,brake:0,handbrake:!1,pitch:0,nitroPressed:!1},this.holdInp={steer:0,throttle:0,brake:0,handbrake:!0,pitch:0,nitroPressed:!1},this.score=new xl,this.missions=new vl(this.save),this.hud=new ul(Rn("hud")),this.screens=new ml(Rn("screens"),this),this.debug=new gl(Rn("ui"),this),this.input.bindTouch(Rn("touch")),document.body.classList.toggle("touch",this.input.isTouch),Rn("pauseBtn").addEventListener("click",()=>this.pause()),ae.car=this.car,this.prevPos=new A,this.prevQ=new we,this.rPos=new A,this.rQ=new we,this.acc=0,this.alpha=1,this.last=performance.now(),this.slow={t:0,scale:1},this.perf={fps:60,frameMs:16,simMs:0,realMs:16,win:0,winN:0,winT:0,drops:0},this.flash=0,this.carS=As,this.run={curPiece:null},this.landN=new A(0,1,0),this._ahead=new A,this._tmp={x:0,y:0,z:0},this.tunnel=0,this.lastBark=-99,this._bindBus(),this.applySettings("all"),addEventListener("pointerdown",()=>this.audio.start(),{once:!1}),addEventListener("keydown",()=>this.audio.start()),window.__rr=this,this.toTitle(),requestAnimationFrame(e=>this.loop(e))}_pickSeed(t){if(hi.has("daily")){let e=new Date;return ff("daily-"+e.getUTCFullYear()+"-"+e.getUTCMonth()+"-"+e.getUTCDate())}return hi.get("seed")?+hi.get("seed")+0>>>0:Math.random()*1e9>>>0}_newTrack(t){this.seed=t;let e=Jr[this.save.settings.difficulty]||Jr.adventurer;this.track=new Uo,this.gen=new ko(this.track,t,{gapMul:e.gap}),this.gen.ensure(900),this.builder&&(this.builder.reset(),this.builder.track=this.track,this.builder.gen=this.gen,this.builder.templeGate=null);for(let n of[this.car,this.boulder,this.cam,this.autopilot])n&&(n.track=this.track);this.pieceIdx=0}_placeCar(t,e=0){let n=this.track.sampleAtS(t),i=this.track.pointAt(t,0,this._tmp);this.car.reset(i.x,i.y+1,i.z,n.th,e,n.i),this.prevPos.copy(this.car.pos),this.prevQ.copy(this.car.q),this.carS=t,this.cam.snap()}_bindBus(){Bt.on("sfx",t=>this.audio.sfx(t.name,t.v??1)),Bt.on("bark",t=>this.bark(t.who,t.text,!0)),Bt.on("fx",t=>this.fx.burst(t.kind,t.x,t.y,t.z,t.n||10,t.speed||(t.kind==="dust"?3:5),t.spread||.6,.4,t.size||1)),Bt.on("shake",t=>{let e=t.amount;if(t.at){let n=this.car.pos.distanceTo(t.at);e*=gt(1-n/60,0,1)}this.cam.addShake(e)}),Bt.on("crash",()=>{this.state==="run"&&(this.score.breakCombo(),this.audio.sfx("crash",.8),this.cam.addShake(.5))}),Bt.on("style",t=>{if(this.state!=="run")return;let e=this.score.add(t.pts||100,t.label,t.kind==="nearmiss"?"nearMiss":void 0);this.hud.popup(t.label,e)}),Bt.on("setpiece",t=>{if(this.state!=="run")return;let e=this.score.stats;if(e.setTotal++,t.ok){e.setClean++;let n=this.score.add(1e3,t.label,"setPieces");this.hud.popup(t.label,n,{big:!0}),this._mission("setClean",1),t.type==="bridgeCollapse"&&this._mission("bridgeCollapse",1),this.audio.sfx("perfect")}else this.hud.popup(t.label||"Survived",0)})}applySettings(t){let e=this.save.settings;if(t==="all"||t==="quality"){let i=e.quality==="auto"?_s?"low":hi.get("quality")||this.world.qualityName:e.quality;Zr[i]&&i!==this.world.qualityName&&(this.world.setQuality(i),this.post.enabled=this.world.q.bloom)}(t==="all"||t==="music"||t==="sfx")&&this.audio.applyVolumes(),this.cam.distMul=e.camDist,this.cam.comfort=!!e.comfort,document.documentElement.style.setProperty("--sub",e.subtitle);let n=document.querySelector("#hBark .txt");n&&(n.style.fontSize=e.subtitle*100+"%")}persist(){gf(this.save)}bark(t,e,n){!n&&this.time.value-this.lastBark<6||(this.lastBark=this.time.value,this.hud.bark(t,e,this.audio))}_barkSet(t,e){let n=ip[t],[i,r]=n[Math.floor(Math.random()*n.length)];this.bark(i,e?r.replace("{r}",e):r,t==="relic")}_mission(t,e=1,n=!1){if(this.state!=="run"&&this.state!=="dead")return;let i=this.missions.report(t,e,n);for(let r of i)this.hud.banner("MISSION COMPLETE",r.text),this.bannerT=2.6,this.audio.sfx("mission")}_show(t,e){Rn("hud").classList.toggle("hidden",!t),Rn("touch").classList.toggle("hidden",!(e&&this.input.isTouch))}_startAttract(){this._newTrack(this._pickSeed(!0)),this.car.fullReset(),this.car.invincible=!0,this.car3d.repair(),this._placeCar(As+40,12),this.builder.update(this.carS,.016),this.boulder.active=!1,this.boulder.group.visible=!1,this.attract=!0,this.orbitT=0}toTitle(){this.state="title",this._show(!1,!1),Rn("letter").classList.remove("on"),this.attract||this._startAttract(),this.screens.show("title"),this.audio.setMusic("title")}toMuseum(){this.attract||this._startAttract(),this.state="museum",this._show(!1,!1),this.screens.show("museum"),this.audio.setMusic("museum")}startRun(){let t=this.save.settings,e=this.diff=Jr[t.difficulty]||Jr.adventurer;this.attract=!1,this._newTrack(this._pickSeed(!1)),this.car.invincible=!!window.__inv||this.car.invincible==="debug",this.car.setUpgrades(this.save.upgrades),this.car.fullReset(),this.car3d.repair();let n=this.save.upgrades;Xn.engineForce=12600*(1+n.engine*.06),Xn.topSpeed=36+n.engine*1.2,this.car.dmgScale=e.dmg,this._placeCar(As,0),this.builder.update(this.carS,.016),this.boulder.group.visible=!0,this.boulder.active=!1,this.boulder.s=As-e.startGap,this.boulder.v=0,this.boulder.active=!0,this.boulder.t=0,this.boulder.group.position.set(0,0,0),this.boulder.update(1e-4,this.carS,0),this.boulder.active=!1,this.score.reset(this.save.expeditionLevel),this.missions.startRun(),this.run={curPiece:null,startS:As,maxS:As,gapsDone:new Set,hairpins:new Map,forks:new Set,announced:new Set,noNitroS:As,close:!1,lowHp:!1,driftT:0,fallT:0,deadT:0,maxMult:1,t:0,brakeHint:!1},this.score.stats.maxSpeed=0,this.screens.show(null),this._show(!0,!0),this.hud.missions(this.missions.active),this.cam.mode=this.save.settings.hoodCam?"hood":"chase",this.audio.setMusic("run"),this.slow={t:0,scale:1},this.test.skipIntro||this.test.autopilot&&!hi.has("intro")?this._go(!0):(this.state="intro",this.introT=0,this.introFlags={},Rn("letter").classList.add("on"),this._show(!1,!1))}_go(t){this.state="run",Rn("letter").classList.remove("on"),this._show(!0,!0),this.builder.templeGate&&!this.builder.templeGate.bursting&&this.builder.templeGate.burst(),this.boulder.start(this.boulder.s,this.diff.chaser),t&&(this.boulder.t=2.5),this.hud.banner("FLOOR IT!","THE TEMPLE WANTS IT BACK"),this.bannerT=1.8,this.cam.snap()}pause(){this.state==="run"&&(this.state="pause",this.screens.show("pause"))}resume(){this.state==="pause"&&(this.state="run",this.screens.show(null),this.last=performance.now())}_die(t){this.state==="run"&&(this.state="dead",this.run.deadT=1.8,this.deathReason=t,this.slow={t:1.6,scale:.35},this.audio.sfx("crash"),this.cam.addShake(1),this.fx.burst("smoke",this.car.pos.x,this.car.pos.y+1,this.car.pos.z,30,3,1.2))}endRun(t){if(!["run","dead","pause","intro"].includes(this.state))return;let e=this.save,n=this.score,i=n.stats,r=this.run;n.dist=Math.max(0,r.maxS-r.startS),this._mission("distance",n.dist,!0),this._mission("coins",n.coins,!0),this._mission("airtime",i.air,!0),this.state="results";let a=0,o=[];for(let d of n.relics){let u=!e.relics[d.id];e.relics[d.id]=(e.relics[d.id]||0)+1,u||a++,o.push({name:d.name,isNew:u})}e.gold+=n.coins;let l=this.missions.justDone.slice(),h=e.shards;this.missions.refresh(),a+=e.shards-h,e.shards+=a-(e.shards-h);let c=n.total,f=c>e.records.bestScore;e.records.runs++,e.records.totalDistance+=n.dist,e.records.bestDistance=Math.max(e.records.bestDistance,n.dist),f&&(e.records.bestScore=c),e.seenIntro=!0,this.persist(),this._show(!1,!1),Rn("letter").classList.remove("on"),this.slow={t:0,scale:1},this.audio.setMusic("results"),this.audio.sfx("gameover"),this.lastResults={reason:t,rank:n.rank(),score:c,best:f,dist:n.dist,coins:n.coins,style:n.style,maxMult:r.maxMult,stats:i,expMul:n.expMul,shardsGained:a,relics:o,missionsDone:l},this.screens.show("results",this.lastResults)}loop(t){if(requestAnimationFrame(r=>this.loop(r)),this.save.settings.fps===30&&t-this.last<30)return;let n=Math.min(.1,(t-this.last)/1e3);this.perf.realMs=le(this.perf.realMs||16,t-this.last,.1),this.test.fixed&&(n=1/30),this.last=t,this._keys(),this.time.value+=n,ae.time=this.time.value,this.slow.t>0&&(this.slow.t-=n,this.slow.t<=0&&(this.slow.scale=1));let i=performance.now();this.state!=="pause"&&this.state!=="results"&&this.simulate(n*this.slow.scale,n),this.perf.simMs=le(this.perf.simMs,performance.now()-i,.1),this.render(n,n*this.slow.scale),this.input.endFrame(),this._autoQuality(n)}_keys(){let t=this.input;t.wasPressed("Backquote")&&this.debug.toggle(),(t.wasPressed("Escape")||t.wasPressed("KeyP"))&&(this.state==="run"?this.pause():this.state==="pause"&&this.resume()),t.wasPressed("KeyC")&&(this.state==="run"||this.state==="intro")&&(this.cam.mode=this.cam.mode==="hood"?"chase":"hood",this.save.settings.hoodCam=this.cam.mode==="hood",this.cam.snap()),this.state==="intro"&&this.introT>.4&&t.anyPressed()&&!t.wasPressed("Backquote")&&this._go(!1),(this.state==="title"||this.state==="results")&&(t.wasPressed("Enter")||t.wasPressed("PadA"))&&this.startRun()}warp(t,e=1/30){for(let n=0;n<t&&(this.time.value+=e,ae.time=this.time.value,this.slow.t>0&&(this.slow.t-=e,this.slow.t<=0&&(this.slow.scale=1)),!(this.state==="pause"||this.state==="results"));n+=e)this.simulate(e*this.slow.scale,e),this.render(e,e*this.slow.scale,!0)}simulate(t,e){let n=this.car,i=this.attract||this.test.autopilot,r=this.input.update(!n.grounded);this.acc+=t;let a=0;for(this._obs=this.builder.obstacles;this.acc>=yr&&a<14;)this._step(yr,i?null:r),this.acc-=yr,a++;this.acc>yr&&(this.acc=yr*.999),this.alpha=this.acc/yr,this._frame(t,e)}_step(t,e){let n=this.car,i=this.save.settings;if(this.state==="intro")e=this.holdInp;else if(!e){let f=d=>{for(let u of this.builder.built)if(u.set&&u.set.apLat&&d>u.p.s0&&d<u.p.s1)return u.set.apLat(d);return null};e=this.autopilot.update(n,this.carS,this.apOut,{danger:this.test.autopilot?1:0,obstacles:this._obs,hint:f,allowNitro:!this.attract||!0})}this.state==="dead"&&(e=this.holdInp);let r=this.track.get(n.hint),a=(this.attract||this.test.autopilot?1:e_[i.assist]??.55)*Xn.assistStrength,o=r.bridge||r.edgeL===Dt.CLIFF||r.edgeR===Dt.CLIFF,l=this._cfg||(this._cfg={lane:{}});l.assist=a,l.steerSens=i.steerSens,l.grip=1,l.obstacles=this._obs,l.speedCap=0;for(let f=this.pieceIdx,d=this.gen.pieces;f<Math.min(d.length,this.pieceIdx+3);f++){let u=d[f];if(u.vCap&&this.carS>u.s0-80&&this.carS<u.lipS+1){l.speedCap=u.vCap;break}}let h=l.lane;if(h.laneLat=n.laneLat??0,h.hw=r.hw,h.rx=r.rx,h.rz=r.rz,h.th=r.th,h.narrow=o,n.grounded)l.landAssist=0;else{let f=n.pos.x+n.vel.x*.35,d=n.pos.z+n.vel.z*.35,u=this.track.query(f,d,n.hint);this.landN.set(u.nx,u.ny,u.nz),l.landN=this.landN,l.landAssist=.25+a*.55}this.prevPos.copy(n.pos),this.prevQ.copy(n.q),n.step(t,e,l);let c=this.track.get(n.hint);if(this.carS=c.s+((n.pos.x-c.x)*c.fx+(n.pos.z-c.z)*c.fz),ae.carS=this.carS,ae.carLat=n.lat||0,n.events.length){for(let f of n.events)this._carEvent(f);n.events.length=0}}_carEvent(t){let e=this.car,n=this.score,i=n.stats,r=this.state==="run";switch(t.type){case"land":{let a=t.air>.9;{let o=e.lastSurf,l=e.pos.y-.75,h=o===Wt.WATER,c=o===Wt.MUD||o===Wt.JUNGLE;this.fx.ringBurst(h?"spray":"ring",e.pos.x,l,e.pos.z,a?30:16,a?7:4.5,h?1.2:1),this.fx.burst(h?"spray":c?"clod":"dust",e.pos.x,l+.2,e.pos.z,a?22:10,a?6:4,1.4,.3),!h&&!c&&this.fx.burst("gravel",e.pos.x,l+.1,e.pos.z,a?18:8,5,1.2,.6),this._hapKick=Math.min(1,(t.vn||4)/12)}if(this.audio.sfx("land",gt(t.vn/10,.3,1.2)),this.cam.addShake(gt(t.vn/25,.1,.7)),this.cam.land(t.vn||4),!r)break;if(i.air+=t.air,i.maxAir=Math.max(i.maxAir,t.air),t.quality==="PERFECT"){i.perfect++;let o=n.add(400+t.air*250,"PERFECT LANDING","landings");this.hud.popup("PERFECT LANDING",o,{big:!0}),this.audio.sfx("perfect"),this.save.settings.flashing||(this.flash=.22),this._mission("perfect",1),Math.random()<.35&&this._barkSet("perfect")}else if(t.quality==="GOOD"){i.good++;let o=n.add(200+t.air*120,"Good landing","landings");this.hud.popup("Good landing",o)}else t.quality==="ROUGH"?(i.rough++,this.hud.popup("Rough landing",0,{bad:!0})):(i.crash++,n.breakCombo(),this.hud.popup("CRASH LANDING",0,{bad:!0}),this.audio.sfx("crash"),Math.random()<.5&&this._barkSet("crash"));if(t.air>1.2&&t.quality!=="CRASH"){let o=n.add(t.air*150,"Big air "+t.air.toFixed(1)+"s","air")}break}case"impact":case"wall":t.speed>3&&(this.audio.sfx("impact",gt(t.speed/12,.3,1)),this.cam.addShake(gt(t.speed/20,.1,.6)),t.x!==void 0&&this.fx.burst("sparks",t.x,t.y,t.z,10,5,.3)),r&&t.speed>7&&n.breakCombo();break;case"damage":r&&t.amount>8&&Math.random()<.3&&this._barkSet("crash");break;case"flick":{let a=e.wheels[2];this.fx.burst(e.lastSurf===Wt.MUD?"clod":"gravel",a.cp.x,a.cp.y+.2,a.cp.z,10,5,.8,.5);break}case"bottom":this.cam.addShake(.12),this._hapKick=Math.max(this._hapKick||0,.6);break;case"nitro":this.audio.sfx("nitro"),this.cam.addShake(.25),r&&(i.nitroUsed++,this.run.noNitroS=this.carS,Math.random()<.3&&this._barkSet("nitro"));break;case"splash":if(Math.random()<.3){let a=e.wheels[2].cp;this.fx.burst("water",a.x,a.y+.3,a.z,6,5,.6,.6)}break;case"shift":this.audio.sfx("shift");break}}_frame(t,e){let n=this.car,i=this.track,r=this.run;this.gen.ensure(this.carS+this.world.q.drawDist+260),i.trim(Math.min(this.carS,this.boulder.active?this.boulder.s:this.carS)/1-260),this.builder.update(this.carS,t);let a=this.gen.pieces;for(;this.pieceIdx<a.length-1&&a[this.pieceIdx].s1<=this.carS;)this.pieceIdx++;for(;this.pieceIdx>0&&a[this.pieceIdx].s0>this.carS;)this.pieceIdx--;let o=a[this.pieceIdx];r.curPiece=o,this._wheelFx(t),this._haptics(t),this.fx.update(t),this.score.update(t);let l=i.get(n.hint);if(this.tunnel=Zi(this.tunnel,l.tunnel?1:0,4,t),this.world.hemi.intensity=le(1.05,.22,this.tunnel),this.world.sun.intensity=le(3.1,.25,this.tunnel),this.attract)return this._attractLogic(t);if(this.state==="intro")return this._intro(t);if(this.boulder.active&&(this.boulder.update(t,this.carS,n.speed,Xn.chaserSpeedMul),Math.random()<t*14)){let h=this.boulder.group.position;this.fx.burst("dust",h.x,h.y-5.5,h.z,3,4,3,.3)}if(this.state==="dead"){r.deadT-=e,r.deadT<=0&&this.endRun(this.deathReason);return}this.state==="run"&&this._runLogic(t,o,l)}_runLogic(t,e,n){let i=this.car,r=this.run,a=this.score,o=a.stats;if(r.t+=t,r.maxS=Math.max(r.maxS,this.carS),a.dist=r.maxS-r.startS,o.maxSpeed=Math.max(o.maxSpeed,i.speed),r.maxMult=Math.max(r.maxMult,a.mult),this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&(this.hud.el.banner.innerHTML="")),r.fallT>0){r.fallT-=t,r.fallT<=0&&this._respawn();return}if(i.overVoid&&i.pos.y<n.y-5.5){if(this.diff.fallDeath&&!i.invincible){this._die("LOST IN THE GORGE");return}r.fallT=1.1,r.pendingGap=null,this.cam.mode="fall",o.falls++,a.breakCombo(),this.missions.resetStreak("gapStreak"),this.audio.sfx("crash",.6),this._barkSet("fall");return}(i.flipT>1.4||i.stuckT>2.2)&&this._respawn(this.carS,!0);for(let h of this.builder.pickups){if(h.taken||Math.abs(h.s-this.carS)>5)continue;let c=h.x-i.pos.x,f=h.y-(i.pos.y+.4),d=h.z-i.pos.z,u=h.kind==="relic"?2.9:2.3;if(!(c*c+f*f*.6+d*d>u*u))if(this.builder.take(h),h.kind==="coin")a.coins+=h.value,this.audio.sfx("coin",.7),this.fx.burst("coin",h.x,h.y,h.z,5,2,.2);else if(h.kind==="nitro")i.nitro=Math.min(i.nitroCap,i.nitro+1),this.audio.sfx("coin",1.2),this.hud.popup("+1 NITRO",0);else{let g=Qf(this.relicRng||(this.relicRng=new ce(this.seed^23505)),h.rare);a.relics.push(g),this.audio.sfx("relic"),this.fx.burst("relic",h.x,h.y,h.z,30,4,.5);let x=a.add(500,"RELIC: "+g.name,"setPieces");this.hud.popup("RELIC: "+g.name,x,{big:!0}),this._mission("relic",1),this._barkSet("relic",g.name)}}if((e.type==="gap"||e.type==="waterfall")&&!r.gapsDone.has(e.id)&&this.carS>e.lipS&&(r.gapsDone.add(e.id),r.pendingGap=e),r.pendingGap&&i.grounded&&this.carS>r.pendingGap.landS&&i.speed>3){let h=r.pendingGap;r.pendingGap=null,o.gaps++;let c=a.add(250+h.gapLen*12,"Gap cleared "+Math.round(h.gapLen)+" m","gaps");this.hud.popup("Gap cleared "+Math.round(h.gapLen)+" m",c),this._mission("gapStreak",1)}if(e.type==="hairpin"){let h=r.hairpins.get(e.id)||{t:0,done:!1};if(r.hairpins.set(e.id,h),i.drift>.3&&i.grounded&&(h.t+=t),!h.done&&h.t>.6&&this.carS>e.s0+(e.s1-e.s0)*.6){h.done=!0,o.hairpins++;let c=a.add(350,"Hairpin drift!","drift");this.hud.popup("Hairpin drift!",c),this._mission("hairpinDrift",1)}}if(i.drift>.45&&i.grounded&&i.speed>11){if(r.driftT+=t,r.driftT>1.2){r.driftT=0;let h=a.add(120,"Drift","drift");this.hud.popup("Drift",h)}}else r.driftT=Math.max(0,r.driftT-t*2);if(e.type==="fork"&&!r.forks.has(e.id)&&this.carS>(e.s0+e.s1)/2&&(r.forks.add(e.id),Math.sign(i.lat)===e.danger)){o.danger++;let h=a.add(400,"Danger path!");this.hud.popup("Danger path!",h),this._mission("danger",1),this._barkSet("danger")}if(e.set&&!r.announced.has(e.id)&&this.carS>e.s0-25)r.announced.add(e.id),this.hud.banner(Kh[e.set.type].toUpperCase(),"SET PIECE"),this.bannerT=2.4,this.audio.sfx("rumble",.5);else if(!e.set){let h=this.gen.pieces[this.pieceIdx+1];h&&h.set&&!r.announced.has(h.id)&&this.carS>h.s0-25&&(r.announced.add(h.id),this.hud.banner(Kh[h.set.type].toUpperCase(),"SET PIECE"),this.bannerT=2.4,this.audio.sfx("rumble",.5))}(o.nitroUsed===0||this.carS-r.noNitroS>0)&&this._mission("noNitroDist",this.carS-r.noNitroS,!0),Math.floor(r.t*2)!==Math.floor((r.t-t)*2)&&(this._mission("distance",a.dist,!0),this._mission("coins",a.coins,!0),this._mission("airtime",o.air,!0),this.hud.missions(this.missions.active));let l=this.boulder.gap;if(l<12&&!r.close&&(r.close=!0),r.close&&l>24){r.close=!1;let h=a.add(300,"Close call!","nearMiss");this.hud.popup("Close call!",h),this._mission("boulderClose",1)}if(l<18&&Math.random()<t*.25&&this._barkSet("close"),l<6.8)if(i.invincible)this.boulder.s-=25;else{i.hp=0,this.cam.addShake(1.2),this._die("FLATTENED BY THE BOULDER");return}if(!r.lowHp&&i.hp<i.maxHp*.3&&(r.lowHp=!0,this._barkSet("lowhp")),i.hp<=0){this._die("OLD BESSIE GAVE OUT");return}r.brakeHint=!1;for(let h=15;h<75;h+=6){let c=this.track.sampleAtS(this.carS+h);if(c.hairpin){let f=bs(1/Math.max(Math.abs(c.k),.001));i.speed>f+5+h*.12&&(r.brakeHint=!0);break}}}_respawn(t,e){let n=this.car,i=this.track,r=this.run,a=Math.max(t??this.carS,r.maxS-40),o=u=>{let g=i.sampleAtS(u);return g.gap||g.hole||g.bridge||g.ford||g.ramp>0};e||(a+=4);for(let u=0;u<400;u++){let g=!0;for(let x=-2;x<14;x+=2)if(o(a+x)){g=!1;break}if(g)break;a+=2}let l=this.builder.obstacles.filter(u=>u.active&&u.solid!==!1),h=(u,g,x)=>l.some(p=>{let m=p.x,v=p.z;if(p.x2!==void 0){let y=p.x2-p.x,_=p.z2-p.z,C=y*y+_*_,w=gt(((u-p.x)*y+(g-p.z)*_)/(C||1),0,1);m=p.x+y*w,v=p.z+_*w}return Math.hypot(u-m,g-v)<p.r+2.6&&x+1.5>p.yMin&&x-1<p.yMax}),c=0,f=i.sampleAtS(a),d;for(let u=0;u<40;u++){f=i.sampleAtS(a);let g=f.fork>0?Math.sign(n.lat||1)*f.fork:0,x=!1;for(let p of[0,2,-2,3.5,-3.5,5,-5])if(!(Math.abs(p)>f.hw-1.4)&&(d=i.pointAt(a,g+p,this._tmp),!h(d.x,d.z,d.y)&&!o(a+6))){c=g+p,x=!0;break}if(x)break;a+=4}d=i.pointAt(a,c,this._tmp),n.reset(d.x,d.y+1,d.z,f.th,e?6:14,f.i),n.damage(e?4:14,e?"jolt":"fall"),this.prevPos.copy(n.pos),this.prevQ.copy(n.q),this.carS=a,this.cam.mode=this.save.settings.hoodCam?"hood":"chase",this.cam.snap(),this.boulder.gap<30&&(this.boulder.s=a-30),r.fallT=0,e||this.hud.popup("Back on track",0,{bad:!0})}_intro(t){let e=this.introFlags;this.introT+=t;let n=this.introT;!e.a&&n>.3&&(e.a=!0,this.bark("dusty",ip.start[0][1],!0)),!e.b&&n>1.3&&(e.b=!0,this.audio.sfx("rumble"),this.cam.addShake(.35)),!e.c&&n>1.9&&(e.c=!0,this.bark("penny","Dusty\u2026 what is that noise?",!0)),!e.d&&n>2.6&&(e.d=!0,this.builder.templeGate&&this.builder.templeGate.burst(),this.boulder.start(this.boulder.s,this.diff.chaser),this.boulder.t=1.2),e.d&&this.boulder.update(t,this.carS,0,Xn.chaserSpeedMul*.6),!e.e&&n>3.3&&(e.e=!0,this.bark("dusty","Oh no.",!0)),n>4.1&&this._go(!1)}_attractLogic(t){let e=this.car;if(this.orbitT+=t,e.flipT>1||e.stuckT>2||e.overVoid&&e.pos.y<this.track.get(e.hint).y-5||this.carS>4e3)if(this.carS>4e3)this._startAttract();else{let n=this.run;this.run={maxS:this.carS},this._respawn(this.carS,!0),this.run=n,e.hp=e.maxHp}for(let n of this.builder.pickups)!n.taken&&Math.abs(n.s-this.carS)<2.5&&this.builder.take(n)}_wheelFx(t){let e=this.car;if(!e.grounded||e.speed<3)return;let n=this.world.q.particles,i=e.speed,r=e.throttle||0,a=o=>Math.random()<o*n*t;for(let o=0;o<4;o++){let l=e.wheels[o];if(!l.contact)continue;let h=o>=2,c=Math.abs(l.slipLat)+e.drift*.6+(h?Math.abs(l.slipLong||0)*.8:0),f=-e.vel.x*.18,d=-e.vel.z*.18,u=e.left.x*l.side,g=e.left.z*l.side,x=l.cp.x,p=l.cp.y+.12,m=l.cp.z,v=()=>(Math.random()-.5)*2;switch(l.surf){case Wt.DIRT:h&&a((i/30+c*2.2)*22)&&this.fx.emit("dust",x,p+.1,m,f+v(),.6+Math.random(),d+v(),.5+c*.6),h&&a(c*60+r*i*.4)&&this.fx.emit("gravel",x,p,m,f*1.4+u*2+v()*1.5,1.5+Math.random()*2.5,d*1.4+g*2+v()*1.5,1);break;case Wt.MUD:case Wt.JUNGLE:a((i/25+c*2)*(h?26:8))&&this.fx.emit("clod",x,p,m,f*1.2+u*1.5+v()*1.2,2+Math.random()*3.5,d*1.2+g*1.5+v()*1.2,1),a((i/30+c)*10)&&this.fx.emit("mud",x,p,m,f+v(),.8+Math.random()*3,d+v(),1);break;case Wt.WATER:a(i*(h?1.3:.9))&&this.fx.emit("spray",x,p+.1,m,f*.6+u*(1.5+i*.12)+v(),1.5+i*.12+Math.random()*2,d*.6+g*(1.5+i*.12)+v(),.7+i*.02);break;case Wt.STONE:h&&c>.3&&a(c*30)&&this.fx.emit("smoke",x,p+.1,m,f+v(),.6,d+v(),1),h&&a(i/30*3)&&this.fx.emit("dust",x,p,m,f+v(),.3,d+v(),.35);break;case Wt.PLANK:h&&c>.25&&a(c*20)&&this.fx.emit("splinter",x,p,m,f+v(),1.2+Math.random(),d+v(),.6);break}}}_haptics(t){let e=this.input.lastDevice==="pad"&&navigator.getGamepads?[...navigator.getGamepads()].find(h=>h&&h.vibrationActuator):null;if(this._hapT=(this._hapT||0)-t,this._hapKick=Math.max(0,(this._hapKick||0)-t*3),!e||this._hapT>0||this.save.settings.rumble===!1)return;this._hapT=.07;let n=this.car,i=Math.min(1,n.speed/30),r=n.lastSurf,a=n.grounded?([.12,.2,.32,.38,.22,.42,0][r]||0)*i:0,o=Math.min(1,a+this._hapKick+(this.boulder.active?Math.max(0,1-(this.boulder.gap-8)/50)*.25:0)),l=Math.min(1,(n.grounded?Math.abs(n.slipAngle)*1.6+n.drift*.4:0)+(n.nitroing?.25:0));if(!(o<.02&&l<.02))try{e.vibrationActuator.playEffect("dual-rumble",{startDelay:0,duration:90,strongMagnitude:o,weakMagnitude:l})}catch{}}render(t,e,n){let i=this.car,r=this.world;this.rPos.lerpVectors(this.prevPos,i.pos,this.alpha),this.rQ.slerpQuaternions(this.prevQ,i.q,this.alpha);let a=this.tunnel>.3||this.state==="intro";this.car3d.sync(i,this.rPos,this.rQ,e,this.time.value,{headlights:a,lookBack:this.boulder.active&&this.boulder.gap<30});let o=this._camCtx||(this._camCtx={}),l=this.track.pointAt(this.carS+16,(i.lat||0)*.5,this._ahead);o.ahead=this._ahead.set(l.x,l.y+1,l.z);let h=this.track.get(i.hint),c=!i.grounded&&i.airTime>.3&&(h.gap||h.ramp>0||i.overVoid);if(c&&!this._wasCine&&(this.cam.cineSide=-this.cam.cineSide),this._wasCine=c,o.cine=c&&this.state==="run"&&!(this.run.curPiece&&this.run.curPiece.type==="waterfall"),o.rumble=this.boulder.active?gt(1-(this.boulder.gap-10)/60,0,1):0,o.override=null,this.attract?o.override=this._orbit():this.state==="intro"&&(o.override=this._introCam()),this.test&&this.test.camRel){let x=this.test.camRel,p=this._tc||(this._tc={pos:new A,look:new A,k:1e4});p.pos.copy(this.rPos).addScaledVector(i.left,x[0]).addScaledVector(i.up,x[1]).addScaledVector(i.fwd,x[2]),p.look.copy(this.rPos).addScaledVector(i.up,x[4]??.2).addScaledVector(i.fwd,x[3]??.2),o.override=p}this.cam.update(t,i,this.rPos,o),r.follow(this.rPos);let f=this.state==="run"||this.state==="dead"?o.rumble:0;this.flash=Math.max(0,this.flash-t*1.6),this.post.grade.uniforms.danger.value=f*.55,this.post.grade.uniforms.flash.value=this.flash;{let x=Math.max(this.cam.cine,this.state==="intro"?.6:0,this.slow&&this.slow.t>0?.8:0);this.post.dof+=(x-this.post.dof)*Math.min(1,t*4),this.post.focus.copy(this.rPos)}let d=Rn("vign"),u=(f*.5).toFixed(2);if(d._a!==u&&(d._a=u,d.style.boxShadow=`inset 0 0 160px 40px rgba(200,30,10,${u})`),(this.state==="run"||this.state==="dead"||this.state==="intro")&&this._hud(t),this.audio.update(t,{rpm:i.rpm,throttle:i.throttle||0,nitro:i.nitroing,running:this.state!=="results"&&this.state!=="pause",slip:Math.abs(i.slipAngle)*2+i.drift*.5,grounded:i.grounded,speed:i.speed,surf:i.lastSurf,inWater:i.lastSurf===Wt.WATER&&i.grounded,boulder:this.boulder.active?o.rumble:0,intensity:this.state==="run"?.3+o.rumble*.7:.2}),n)return;r.renderer.info.autoReset=!1,r.renderer.info.reset(),r.lost||this.post.render(t,this.time.value);let g=r.renderer.info;this.perf.calls=g.render.calls,this.perf.tris=g.render.triangles,this.debug.update(t,{fps:this.perf.fps,frameMs:this.perf.realMs,simMs:this.perf.simMs,calls:g.render.calls,tris:g.render.triangles,quality:r.qualityName,res:r.resScale,gap:this.boulder.gap||0,bv:this.boulder.v||0,piece:this.run.curPiece?this.run.curPiece.type:"-",built:this.builder.stats(),particles:this.fx.count})}_orbit(){let t=this.rPos,e=this.orbitT*.16,n=this.state==="museum"?9:11,i=this._orb||(this._orb={pos:new A,look:new A,k:3}),r=this.car.fwd,a=Math.atan2(r.x,r.z)+Math.PI*.75+Math.sin(e)*.9;return i.pos.set(t.x+Math.sin(a)*n,t.y+2.6+Math.sin(e*.7)*.8,t.z+Math.cos(a)*n),i.look.set(t.x+r.x*4,t.y+.9,t.z+r.z*4),i}_introCam(){let t=this.car,e=this.rPos,n=this.introT,i=this._ic||(this._ic={pos:new A,look:new A,k:3}),r=new A(-t.fwd.z,0,t.fwd.x);if(n<1.8)i.pos.copy(e).addScaledVector(t.fwd,7.5-n*.6).addScaledVector(r,2.2),i.pos.y+=1.8,i.look.copy(e),i.look.y+=1.2,i.k=4;else{let a=this.builder.templeGate?this.builder.templeGate.doorPos:e;i.pos.copy(e).addScaledVector(t.fwd,8).addScaledVector(r,3),i.pos.y+=2.6,i.look.copy(a),i.look.y+=4,i.look.lerp(e,.25),i.k=3}return i}_hud(t){let e=this.car,n=this.score,i=this.run,r=this.track,a=this._pts||(this._pts=[]);a.length=0;for(let f=Math.max(r.base+1,this.carS-70);f<this.carS+170;f+=6){let d=r.sampleAtS(f);a.push({x:d.x,z:d.z,mark:null})}for(let f of this.gen.pieces){if(f.s0<this.carS-20||f.s0>this.carS+170)continue;let d=r.sampleAtS(f.s0);f.set?a.push({x:d.x,z:d.z,mark:"set"}):f.type==="fork"&&a.push({x:d.x,z:d.z,mark:"fork"})}let o=a.filter(f=>!f.mark),l=a.filter(f=>f.mark),h=this._hd||(this._hd={});h.dist=i.maxS-i.startS,h.coins=n.coins,h.relics=n.relics.length,h.score=n.total,h.mult=n.mult,h.gap=this.boulder.active?this.boulder.gap:80,h.brakeHint=i.brakeHint,h.colorblind=this.save.settings.colorblind,h.trackPts=o,h.marks=l,h.heading=Math.atan2(e.fwd.x,e.fwd.z),h.cx=e.pos.x,h.cz=e.pos.z;let c=this.boulder.group.position;h.bx=this.boulder.active?c.x:void 0,h.bz=c.z,h.speed=e.speed,h.gear=e.gear,h.nitroing=e.nitroing,h.nitro=e.nitro,h.nitroCap=e.nitroCap,h.hp=e.hp,h.maxHp=e.maxHp,h.trackPts=o.concat(l),this.hud.update(t,h)}_autoQuality(t){let e=this.perf;if(e.fps=le(e.fps,1/Math.max(t,.001),.05),this.save.settings.quality!=="auto"||this.test.fixed||this.state!=="run"||(e.winT+=t,e.win+=t,e.winN++,e.winT<2.5))return;let n=e.winN/e.win;e.winT=0,e.win=0,e.winN=0;let i=this.world;n<45?i.resScale>.75?(i.resScale=Math.max(.7,i.resScale-.1),i.resize()):i.qualityName!=="low"&&(i.setQuality(i.qualityName==="high"?"medium":"low"),this.post.enabled=i.q.bloom,i.resScale=.9,i.resize()):n>58&&i.resScale<1&&(i.resScale=Math.min(1,i.resScale+.05),i.resize())}};function sp(){try{new yu}catch(t){console.error(t),document.getElementById("loading").textContent="Error: "+t.message;return}let s=document.getElementById("loading");s.style.opacity=0,setTimeout(()=>s.remove(),700)}document.fonts&&document.fonts.load?Promise.race([Promise.all([document.fonts.load("900 40px Cinzel"),document.fonts.load("700 20px Zilla"),document.fonts.load("600 20px Oswald")]),new Promise(s=>setTimeout(s,1500))]).then(()=>setTimeout(sp,30)):sp();})();
