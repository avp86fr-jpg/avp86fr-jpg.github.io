(()=>{var yp=0,Nu=1,_p=2;var $d=1,Nh=2,_i=3,Yi=0,en=1,be=2,ri=0,ai=1,on=2,Fu=3,zu=4,Mp=5,ps=100,bp=101,wp=102,Sp=103,Ep=104,Tp=200,Ap=201,Rp=202,Cp=203,dc=204,fc=205,Pp=206,Ip=207,Lp=208,Dp=209,Up=210,kp=211,Np=212,Fp=213,zp=214,pc=0,mc=1,gc=2,ir=3,xc=4,vc=5,yc=6,_c=7,Zd=0,Bp=1,Op=2,Xi=0,Fh=1,zh=2,Bh=3,ea=4,Hp=5,Oh=6,Hh=7;var Jd=300,sr=301,rr=302,Mc=303,bc=304,Co=306,vs=1e3,gs=1001,wc=1002,Tn=1003,Vp=1004;var ga=1005;var ii=1006,Pl=1007;var xs=1008;var Ei=1009,Kd=1010,Qd=1011,Wr=1012,Vh=1013,ys=1014,si=1015,$n=1016,Gh=1017,Wh=1018,ar=1020,jd=35902,tf=1021,ef=1022,Wn=1023,nf=1024,sf=1025,tr=1026,or=1027,Xh=1028,qh=1029,rf=1030,Yh=1031;var $h=1033,Ya=33776,$a=33777,Za=33778,Ja=33779,Sc=35840,Ec=35841,Tc=35842,Ac=35843,Rc=36196,Cc=37492,Pc=37496,Ic=37808,Lc=37809,Dc=37810,Uc=37811,kc=37812,Nc=37813,Fc=37814,zc=37815,Bc=37816,Oc=37817,Hc=37818,Vc=37819,Gc=37820,Wc=37821,Ka=36492,Xc=36494,qc=36495,af=36283,Yc=36284,$c=36285,Zc=36286;var Qa=2300,Jc=2301,Il=2302,Bu=2400,Ou=2401,Hu=2402;var Gp=3200,Wp=3201;var of=0,Xp=1,Gi="",an="srgb",xr="srgb-linear",Po="linear",me="srgb";var Ds=7680;var Vu=519,qp=512,Yp=513,$p=514,lf=515,Zp=516,Jp=517,Kp=518,Qp=519,Kc=35044,Rn=35048;var Gu="300 es",bi=2e3,ja=2001,$i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ll=Math.PI/180,to=180/Math.PI;function wi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[s&255]+sn[s>>8&255]+sn[s>>16&255]+sn[s>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function je(s,t,e){return Math.max(t,Math.min(e,s))}function jp(s,t){return(s%t+t)%t}function Dl(s,t,e){return(1-e)*s+e*t}function ni(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function _e(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Z=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},te=class s{constructor(t,e,n,i,r,a,o,c,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,h)}set(t,e,n,i,r,a,o,c,h){let l=this.elements;return l[0]=t,l[1]=i,l[2]=o,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=a,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],l=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=i[0],p=i[3],g=i[6],v=i[1],_=i[4],y=i[7],R=i[2],w=i[5],C=i[8];return r[0]=a*x+o*v+c*R,r[3]=a*p+o*_+c*w,r[6]=a*g+o*y+c*C,r[1]=h*x+l*v+u*R,r[4]=h*p+l*_+u*w,r[7]=h*g+l*y+u*C,r[2]=f*x+d*v+m*R,r[5]=f*p+d*_+m*w,r[8]=f*g+d*y+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8];return e*a*l-e*o*h-n*r*l+n*o*c+i*r*h-i*a*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],u=l*a-o*h,f=o*c-l*r,d=h*r-a*c,m=e*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(i*h-l*n)*x,t[2]=(o*n-i*a)*x,t[3]=f*x,t[4]=(l*e-i*c)*x,t[5]=(i*r-o*e)*x,t[6]=d*x,t[7]=(n*c-h*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-i*h,i*c,-i*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ul.makeScale(t,e)),this}rotate(t){return this.premultiply(Ul.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ul.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ul=new te;function cf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function eo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function t0(){let s=eo("canvas");return s.style.display="block",s}var Wu={};function Br(s){s in Wu||(Wu[s]=!0,console.warn(s))}function e0(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function n0(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function i0(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var le={enabled:!0,workingColorSpace:xr,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(s.r=er(s.r),s.g=er(s.g),s.b=er(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gi?Po:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Si(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function er(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Xu=[.64,.33,.3,.6,.15,.06],qu=[.2126,.7152,.0722],Yu=[.3127,.329],$u=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[xr]:{primaries:Xu,whitePoint:Yu,transfer:Po,toXYZ:$u,fromXYZ:Zu,luminanceCoefficients:qu,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:Xu,whitePoint:Yu,transfer:me,toXYZ:$u,fromXYZ:Zu,luminanceCoefficients:qu,outputColorSpaceConfig:{drawingBufferColorSpace:an}}});var Us,Qc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Us===void 0&&(Us=eo("canvas")),Us.width=t.width,Us.height=t.height;let n=Us.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Us}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=eo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Si(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},s0=0,no=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=wi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(kl(i[a].image)):r.push(kl(i[a]))}else r=kl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function kl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var r0=0,vn=class s extends $i{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=gs,i=gs,r=ii,a=xs,o=Wn,c=Ei,h=s.DEFAULT_ANISOTROPY,l=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=wi(),this.name="",this.source=new no(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vs:t.x=t.x-Math.floor(t.x);break;case gs:t.x=t.x<0?0:1;break;case wc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vs:t.y=t.y-Math.floor(t.y);break;case gs:t.y=t.y<0?0:1;break;case wc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Jd;vn.DEFAULT_ANISOTROPY=1;var Me=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,h=c[0],l=c[4],u=c[8],f=c[1],d=c[5],m=c[9],x=c[2],p=c[6],g=c[10];if(Math.abs(l-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(l+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(h+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(h+1)/2,y=(d+1)/2,R=(g+1)/2,w=(l+f)/4,C=(u+x)/4,P=(m+p)/4;return _>y&&_>R?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=w/n,r=C/n):y>R?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=w/i,r=P/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=C/r,i=P/r),this.set(n,i,r,e),this}let v=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(f-l)*(f-l));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(u-x)/v,this.z=(f-l)/v,this.w=Math.acos((h+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jc=class extends $i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new vn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new no(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends jc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},io=class extends vn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var th=class extends vn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ye=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],h=n[i+1],l=n[i+2],u=n[i+3],f=r[a+0],d=r[a+1],m=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==f||h!==d||l!==m){let p=1-o,g=c*f+h*d+l*m+u*x,v=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){let R=Math.sqrt(_),w=Math.atan2(R,g*v);p=Math.sin(p*w)/R,o=Math.sin(o*w)/R}let y=o*v;if(c=c*p+f*y,h=h*p+d*y,l=l*p+m*y,u=u*p+x*y,p===1-o){let R=1/Math.sqrt(c*c+h*h+l*l+u*u);c*=R,h*=R,l*=R,u*=R}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],c=n[i+1],h=n[i+2],l=n[i+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+l*u+c*d-h*f,t[e+1]=c*m+l*f+h*u-o*d,t[e+2]=h*m+l*d+o*f-c*u,t[e+3]=l*m-o*u-c*f-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),l=o(i/2),u=o(r/2),f=c(n/2),d=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=f*l*u+h*d*m,this._y=h*d*u-f*l*m,this._z=h*l*m+f*d*u,this._w=h*l*u-f*d*m;break;case"YXZ":this._x=f*l*u+h*d*m,this._y=h*d*u-f*l*m,this._z=h*l*m-f*d*u,this._w=h*l*u+f*d*m;break;case"ZXY":this._x=f*l*u-h*d*m,this._y=h*d*u+f*l*m,this._z=h*l*m+f*d*u,this._w=h*l*u-f*d*m;break;case"ZYX":this._x=f*l*u-h*d*m,this._y=h*d*u+f*l*m,this._z=h*l*m-f*d*u,this._w=h*l*u+f*d*m;break;case"YZX":this._x=f*l*u+h*d*m,this._y=h*d*u+f*l*m,this._z=h*l*m-f*d*u,this._w=h*l*u-f*d*m;break;case"XZY":this._x=f*l*u-h*d*m,this._y=h*d*u-f*l*m,this._z=h*l*m+f*d*u,this._w=h*l*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],l=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(l-c)*d,this._y=(r-h)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(l-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+h)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-h)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+l)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+h)/d,this._y=(c+l)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+a*o+i*h-r*c,this._y=i*l+a*c+r*o-n*h,this._z=r*l+a*h+n*c-i*o,this._w=a*l-n*o-i*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),l=Math.atan2(h,o),u=Math.sin((1-e)*l)/h,f=Math.sin(e*l)/h;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ju.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ju.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*i-o*n),l=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+c*h+a*u-o*l,this.y=n+c*l+o*h-r*u,this.z=i+c*u+r*l-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Nl.copy(this).projectOnVector(t),this.sub(Nl)}reflect(t){return this.sub(Nl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nl=new A,Ju=new ye,Ti=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xa.copy(n.boundingBox)),xa.applyMatrix4(t.matrixWorld),this.union(xa)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cr),va.subVectors(this.max,Cr),ks.subVectors(t.a,Cr),Ns.subVectors(t.b,Cr),Fs.subVectors(t.c,Cr),Fi.subVectors(Ns,ks),zi.subVectors(Fs,Ns),os.subVectors(ks,Fs);let e=[0,-Fi.z,Fi.y,0,-zi.z,zi.y,0,-os.z,os.y,Fi.z,0,-Fi.x,zi.z,0,-zi.x,os.z,0,-os.x,-Fi.y,Fi.x,0,-zi.y,zi.x,0,-os.y,os.x,0];return!Fl(e,ks,Ns,Fs,va)||(e=[1,0,0,0,1,0,0,0,1],!Fl(e,ks,Ns,Fs,va))?!1:(ya.crossVectors(Fi,zi),e=[ya.x,ya.y,ya.z],Fl(e,ks,Ns,Fs,va))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},mi=[new A,new A,new A,new A,new A,new A,new A,new A],Hn=new A,xa=new Ti,ks=new A,Ns=new A,Fs=new A,Fi=new A,zi=new A,os=new A,Cr=new A,va=new A,ya=new A,ls=new A;function Fl(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ls.fromArray(s,r);let o=i.x*Math.abs(ls.x)+i.y*Math.abs(ls.y)+i.z*Math.abs(ls.z),c=t.dot(ls),h=e.dot(ls),l=n.dot(ls);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}var a0=new Ti,Pr=new A,zl=new A,Zi=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):a0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pr.subVectors(t,this.center);let e=Pr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Pr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pr.copy(t.center).add(zl)),this.expandByPoint(Pr.copy(t.center).sub(zl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},gi=new A,Bl=new A,_a=new A,Bi=new A,Ol=new A,Ma=new A,Hl=new A,so=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Bl.copy(t).add(e).multiplyScalar(.5),_a.copy(e).sub(t).normalize(),Bi.copy(this.origin).sub(Bl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(_a),o=Bi.dot(this.direction),c=-Bi.dot(_a),h=Bi.lengthSq(),l=Math.abs(1-a*a),u,f,d,m;if(l>0)if(u=a*c-o,f=a*o-c,m=r*l,u>=0)if(f>=-m)if(f<=m){let x=1/l;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+h}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+h;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+h;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+h):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+h):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+h);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Bl).addScaledVector(_a,f),d}intersectSphere(t,e){gi.subVectors(t.center,this.origin);let n=gi.dot(this.direction),i=gi.dot(gi)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c,h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,i=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,i=(t.min.x-f.x)*h),l>=0?(r=(t.min.y-f.y)*l,a=(t.max.y-f.y)*l):(r=(t.max.y-f.y)*l,a=(t.min.y-f.y)*l),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,n,i,r){Ol.subVectors(e,t),Ma.subVectors(n,t),Hl.crossVectors(Ol,Ma);let a=this.direction.dot(Hl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bi.subVectors(this.origin,t);let c=o*this.direction.dot(Ma.crossVectors(Bi,Ma));if(c<0)return null;let h=o*this.direction.dot(Ol.cross(Bi));if(h<0||c+h>a)return null;let l=-o*Bi.dot(Hl);return l<0?null:this.at(l/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class s{constructor(t,e,n,i,r,a,o,c,h,l,u,f,d,m,x,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,h,l,u,f,d,m,x,p)}set(t,e,n,i,r,a,o,c,h,l,u,f,d,m,x,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=h,g[6]=l,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/zs.setFromMatrixColumn(t,0).length(),r=1/zs.setFromMatrixColumn(t,1).length(),a=1/zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),h=Math.sin(i),l=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*l,d=a*u,m=o*l,x=o*u;e[0]=c*l,e[4]=-c*u,e[8]=h,e[1]=d+m*h,e[5]=f-x*h,e[9]=-o*c,e[2]=x-f*h,e[6]=m+d*h,e[10]=a*c}else if(t.order==="YXZ"){let f=c*l,d=c*u,m=h*l,x=h*u;e[0]=f+x*o,e[4]=m*o-d,e[8]=a*h,e[1]=a*u,e[5]=a*l,e[9]=-o,e[2]=d*o-m,e[6]=x+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*l,d=c*u,m=h*l,x=h*u;e[0]=f-x*o,e[4]=-a*u,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*l,e[9]=x-f*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*l,d=a*u,m=o*l,x=o*u;e[0]=c*l,e[4]=m*h-d,e[8]=f*h+x,e[1]=c*u,e[5]=x*h+f,e[9]=d*h-m,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,d=a*h,m=o*c,x=o*h;e[0]=c*l,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=a*l,e[9]=-o*l,e[2]=-h*l,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*c,d=a*h,m=o*c,x=o*h;e[0]=c*l,e[4]=-u,e[8]=h*l,e[1]=f*u+x,e[5]=a*l,e[9]=d*u-m,e[2]=m*u-d,e[6]=o*l,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(o0,t,l0)}lookAt(t,e,n){let i=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Oi.crossVectors(n,Sn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Oi.crossVectors(n,Sn)),Oi.normalize(),ba.crossVectors(Sn,Oi),i[0]=Oi.x,i[4]=ba.x,i[8]=Sn.x,i[1]=Oi.y,i[5]=ba.y,i[9]=Sn.y,i[2]=Oi.z,i[6]=ba.z,i[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],l=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],p=n[10],g=n[14],v=n[3],_=n[7],y=n[11],R=n[15],w=i[0],C=i[4],P=i[8],M=i[12],b=i[1],E=i[5],L=i[9],U=i[13],N=i[2],G=i[6],O=i[10],J=i[14],H=i[3],lt=i[7],ot=i[11],ut=i[15];return r[0]=a*w+o*b+c*N+h*H,r[4]=a*C+o*E+c*G+h*lt,r[8]=a*P+o*L+c*O+h*ot,r[12]=a*M+o*U+c*J+h*ut,r[1]=l*w+u*b+f*N+d*H,r[5]=l*C+u*E+f*G+d*lt,r[9]=l*P+u*L+f*O+d*ot,r[13]=l*M+u*U+f*J+d*ut,r[2]=m*w+x*b+p*N+g*H,r[6]=m*C+x*E+p*G+g*lt,r[10]=m*P+x*L+p*O+g*ot,r[14]=m*M+x*U+p*J+g*ut,r[3]=v*w+_*b+y*N+R*H,r[7]=v*C+_*E+y*G+R*lt,r[11]=v*P+_*L+y*O+R*ot,r[15]=v*M+_*U+y*J+R*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],l=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],p=t[11],g=t[15];return m*(+r*c*u-i*h*u-r*o*f+n*h*f+i*o*d-n*c*d)+x*(+e*c*d-e*h*f+r*a*f-i*a*d+i*h*l-r*c*l)+p*(+e*h*u-e*o*d-r*a*u+n*a*d+r*o*l-n*h*l)+g*(-i*o*l-e*c*u+e*o*f+i*a*u-n*a*f+n*c*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],p=t[14],g=t[15],v=u*p*h-x*f*h+x*c*d-o*p*d-u*c*g+o*f*g,_=m*f*h-l*p*h-m*c*d+a*p*d+l*c*g-a*f*g,y=l*x*h-m*u*h+m*o*d-a*x*d-l*o*g+a*u*g,R=m*u*c-l*x*c-m*o*f+a*x*f+l*o*p-a*u*p,w=e*v+n*_+i*y+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return t[0]=v*C,t[1]=(x*f*r-u*p*r-x*i*d+n*p*d+u*i*g-n*f*g)*C,t[2]=(o*p*r-x*c*r+x*i*h-n*p*h-o*i*g+n*c*g)*C,t[3]=(u*c*r-o*f*r-u*i*h+n*f*h+o*i*d-n*c*d)*C,t[4]=_*C,t[5]=(l*p*r-m*f*r+m*i*d-e*p*d-l*i*g+e*f*g)*C,t[6]=(m*c*r-a*p*r-m*i*h+e*p*h+a*i*g-e*c*g)*C,t[7]=(a*f*r-l*c*r+l*i*h-e*f*h-a*i*d+e*c*d)*C,t[8]=y*C,t[9]=(m*u*r-l*x*r-m*n*d+e*x*d+l*n*g-e*u*g)*C,t[10]=(a*x*r-m*o*r+m*n*h-e*x*h-a*n*g+e*o*g)*C,t[11]=(l*o*r-a*u*r-l*n*h+e*u*h+a*n*d-e*o*d)*C,t[12]=R*C,t[13]=(l*x*i-m*u*i+m*n*f-e*x*f-l*n*p+e*u*p)*C,t[14]=(m*o*i-a*x*i-m*n*c+e*x*c+a*n*p-e*o*p)*C,t[15]=(a*u*i-l*o*i+l*n*c-e*u*c-a*n*f+e*o*f)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,l=r*o;return this.set(h*a+n,h*o-i*c,h*c+i*o,0,h*o+i*c,l*o+n,l*c-i*a,0,h*c-i*o,l*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,l=a+a,u=o+o,f=r*h,d=r*l,m=r*u,x=a*l,p=a*u,g=o*u,v=c*h,_=c*l,y=c*u,R=n.x,w=n.y,C=n.z;return i[0]=(1-(x+g))*R,i[1]=(d+y)*R,i[2]=(m-_)*R,i[3]=0,i[4]=(d-y)*w,i[5]=(1-(f+g))*w,i[6]=(p+v)*w,i[7]=0,i[8]=(m+_)*C,i[9]=(p-v)*C,i[10]=(1-(f+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=zs.set(i[0],i[1],i[2]).length(),a=zs.set(i[4],i[5],i[6]).length(),o=zs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Vn.copy(this);let h=1/r,l=1/a,u=1/o;return Vn.elements[0]*=h,Vn.elements[1]*=h,Vn.elements[2]*=h,Vn.elements[4]*=l,Vn.elements[5]*=l,Vn.elements[6]*=l,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,e.setFromRotationMatrix(Vn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=bi){let c=this.elements,h=2*r/(e-t),l=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,m;if(o===bi)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===ja)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=l,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=bi){let c=this.elements,h=1/(e-t),l=1/(n-i),u=1/(a-r),f=(e+t)*h,d=(n+i)*l,m,x;if(o===bi)m=(a+r)*u,x=-2*u;else if(o===ja)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},zs=new A,Vn=new Kt,o0=new A(0,0,0),l0=new A(1,1,1),Oi=new A,ba=new A,Sn=new A,Ku=new Kt,Qu=new ye,He=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],h=i[5],l=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-je(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ku.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ku,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};He.DEFAULT_ORDER="XYZ";var ro=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},c0=0,ju=new A,Bs=new ye,xi=new Kt,wa=new A,Ir=new A,h0=new A,u0=new ye,td=new A(1,0,0),ed=new A(0,1,0),nd=new A(0,0,1),id={type:"added"},d0={type:"removed"},Os={type:"childadded",child:null},Vl={type:"childremoved",child:null},Ge=class s extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new A,e=new He,n=new ye,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kt},normalMatrix:{value:new te}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(td,t)}rotateY(t){return this.rotateOnAxis(ed,t)}rotateZ(t){return this.rotateOnAxis(nd,t)}translateOnAxis(t,e){return ju.copy(t).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(td,t)}translateY(t){return this.translateOnAxis(ed,t)}translateZ(t){return this.translateOnAxis(nd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wa.copy(t):wa.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Ir,wa,this.up):xi.lookAt(wa,Ir,this.up),this.quaternion.setFromRotationMatrix(xi),i&&(xi.extractRotation(i.matrixWorld),Bs.setFromRotationMatrix(xi),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(id),Os.child=t,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(d0),Vl.child=t,this.dispatchEvent(Vl),Vl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(id),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,t,h0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,u0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let u=c[h];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),l=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let c=[];for(let h in o){let l=o[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ge.DEFAULT_UP=new A(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gn=new A,vi=new A,Gl=new A,yi=new A,Hs=new A,Vs=new A,sd=new A,Wl=new A,Xl=new A,ql=new A,Yl=new Me,$l=new Me,Zl=new Me,Wi=class s{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Gn.subVectors(t,e),i.cross(Gn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Gn.subVectors(i,e),vi.subVectors(n,e),Gl.subVectors(t,e);let a=Gn.dot(Gn),o=Gn.dot(vi),c=Gn.dot(Gl),h=vi.dot(vi),l=vi.dot(Gl),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(h*c-o*l)*f,m=(a*l-o*c)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yi.x),c.addScaledVector(a,yi.y),c.addScaledVector(o,yi.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Yl.setScalar(0),$l.setScalar(0),Zl.setScalar(0),Yl.fromBufferAttribute(t,e),$l.fromBufferAttribute(t,n),Zl.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Yl,r.x),a.addScaledVector($l,r.y),a.addScaledVector(Zl,r.z),a}static isFrontFacing(t,e,n,i){return Gn.subVectors(n,e),vi.subVectors(t,e),Gn.cross(vi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Gn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Hs.subVectors(i,n),Vs.subVectors(r,n),Wl.subVectors(t,n);let c=Hs.dot(Wl),h=Vs.dot(Wl);if(c<=0&&h<=0)return e.copy(n);Xl.subVectors(t,i);let l=Hs.dot(Xl),u=Vs.dot(Xl);if(l>=0&&u<=l)return e.copy(i);let f=c*u-l*h;if(f<=0&&c>=0&&l<=0)return a=c/(c-l),e.copy(n).addScaledVector(Hs,a);ql.subVectors(t,r);let d=Hs.dot(ql),m=Vs.dot(ql);if(m>=0&&d<=m)return e.copy(r);let x=d*h-c*m;if(x<=0&&h>=0&&m<=0)return o=h/(h-m),e.copy(n).addScaledVector(Vs,o);let p=l*m-d*u;if(p<=0&&u-l>=0&&d-m>=0)return sd.subVectors(r,i),o=(u-l)/(u-l+(d-m)),e.copy(i).addScaledVector(sd,o);let g=1/(p+x+f);return a=x*g,o=f*g,e.copy(n).addScaledVector(Hs,a).addScaledVector(Vs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function Jl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=jp(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Jl(a,r,t+1/3),this.g=Jl(a,r,t),this.b=Jl(a,r,t-1/3)}return le.toWorkingColorSpace(this,i),this}setStyle(t,e=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){let n=hf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return le.fromWorkingColorSpace(rn.copy(this),t),Math.round(je(rn.r*255,0,255))*65536+Math.round(je(rn.g*255,0,255))*256+Math.round(je(rn.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(rn.copy(this),e);let n=rn.r,i=rn.g,r=rn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,h,l=(o+a)/2;if(o===a)c=0,h=0;else{let u=a-o;switch(h=l<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=an){le.fromWorkingColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,i=rn.b;return t!==an?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(Sa);let n=Dl(Hi.h,Sa.h,e),i=Dl(Hi.s,Sa.s,e),r=Dl(Hi.l,Sa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new yt;yt.NAMES=hf;var f0=0,Ai=class extends $i{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=wi(),this.name="",this.blending=ai,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=fc,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==Yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==fc&&(n.blendDst=this.blendDst),this.blendEquation!==ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},We=class extends Ai{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new He,this.combine=Zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Oe=new A,Ea=new Z,ne=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kc,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ea.fromBufferAttribute(this,e),Ea.applyMatrix3(t),this.setXY(e,Ea.x,Ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),i=_e(i,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kc&&(t.usage=this.usage),t}};var ao=class extends ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var oo=class extends ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var qt=class extends ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},p0=0,Ln=new Kt,Kl=new Ge,Gs=new A,En=new Ti,Lr=new Ti,Ke=new A,de=class s extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cf(t)?oo:ao)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return Kl.lookAt(t),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(En.min,Lr.min),En.expandByPoint(Ke),Ke.addVectors(En.max,Lr.max),En.expandByPoint(Ke)):(En.expandByPoint(Lr.min),En.expandByPoint(Lr.max))}En.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ke.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ke));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)Ke.fromBufferAttribute(o,h),c&&(Gs.fromBufferAttribute(t,h),Ke.add(Gs)),i=Math.max(i,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ne(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new A,c[P]=new A;let h=new A,l=new A,u=new A,f=new Z,d=new Z,m=new Z,x=new A,p=new A;function g(P,M,b){h.fromBufferAttribute(n,P),l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,M),m.fromBufferAttribute(r,b),l.sub(h),u.sub(h),d.sub(f),m.sub(f);let E=1/(d.x*m.y-m.x*d.y);isFinite(E)&&(x.copy(l).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(E),p.copy(u).multiplyScalar(d.x).addScaledVector(l,-m.x).multiplyScalar(E),o[P].add(x),o[M].add(x),o[b].add(x),c[P].add(p),c[M].add(p),c[b].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,M=v.length;P<M;++P){let b=v[P],E=b.start,L=b.count;for(let U=E,N=E+L;U<N;U+=3)g(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let _=new A,y=new A,R=new A,w=new A;function C(P){R.fromBufferAttribute(i,P),w.copy(R);let M=o[P];_.copy(M),_.sub(R.multiplyScalar(R.dot(M))).normalize(),y.crossVectors(w,M);let E=y.dot(c[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,E)}for(let P=0,M=v.length;P<M;++P){let b=v[P],E=b.start,L=b.count;for(let U=E,N=E+L;U<N;U+=3)C(t.getX(U+0)),C(t.getX(U+1)),C(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new A,r=new A,a=new A,o=new A,c=new A,h=new A,l=new A,u=new A;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),l.subVectors(a,r),u.subVectors(i,r),l.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,p),o.add(l),c.add(l),h.add(l),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),l.subVectors(a,r),u.subVectors(i,r),l.cross(u),n.setXYZ(f+0,l.x,l.y,l.z),n.setXYZ(f+1,l.x,l.y,l.z),n.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,c){let h=o.array,l=o.itemSize,u=o.normalized,f=new h.constructor(c.length*l),d=0,m=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*l;for(let g=0;g<l;g++)f[m++]=h[d++]}return new ne(f,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],h=t(c,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let l=0,u=h.length;l<u;l++){let f=h[l],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let u=0,f=h.length;u<f;u++){let d=h[u];l.push(d.toJSON(t.data))}l.length>0&&(i[c]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let h in i){let l=i[h];this.setAttribute(h,l.clone(e))}let r=t.morphAttributes;for(let h in r){let l=[],u=r[h];for(let f=0,d=u.length;f<d;f++)l.push(u[f].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,l=a.length;h<l;h++){let u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rd=new Kt,cs=new so,Ta=new Zi,ad=new A,Aa=new A,Ra=new A,Ca=new A,Ql=new A,Pa=new A,od=new A,Ia=new A,_t=class extends Ge{constructor(t=new de,e=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Pa.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let l=o[c],u=r[c];l!==0&&(Ql.fromBufferAttribute(u,t),a?Pa.addScaledVector(Ql,l):Pa.addScaledVector(Ql.sub(e),l))}e.add(Pa)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(r),cs.copy(t.ray).recast(t.near),!(Ta.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Ta,ad)===null||cs.origin.distanceToSquared(ad)>(t.far-t.near)**2))&&(rd.copy(r).invert(),cs.copy(t.ray).applyMatrix4(rd),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let p=f[m],g=a[p.materialIndex],v=Math.max(p.start,d.start),_=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=v,R=_;y<R;y+=3){let w=o.getX(y),C=o.getX(y+1),P=o.getX(y+2);i=La(this,g,t,n,h,l,u,w,C,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let v=o.getX(p),_=o.getX(p+1),y=o.getX(p+2);i=La(this,a,t,n,h,l,u,v,_,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let p=f[m],g=a[p.materialIndex],v=Math.max(p.start,d.start),_=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let y=v,R=_;y<R;y+=3){let w=y,C=y+1,P=y+2;i=La(this,g,t,n,h,l,u,w,C,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let v=p,_=p+1,y=p+2;i=La(this,a,t,n,h,l,u,v,_,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function m0(s,t,e,n,i,r,a,o){let c;if(t.side===en?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Yi,o),c===null)return null;Ia.copy(o),Ia.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(Ia);return h<e.near||h>e.far?null:{distance:h,point:Ia.clone(),object:s}}function La(s,t,e,n,i,r,a,o,c,h){s.getVertexPosition(o,Aa),s.getVertexPosition(c,Ra),s.getVertexPosition(h,Ca);let l=m0(s,t,e,n,Aa,Ra,Ca,od);if(l){let u=new A;Wi.getBarycoord(od,Aa,Ra,Ca,u),i&&(l.uv=Wi.getInterpolatedAttribute(i,o,c,h,u,new Z)),r&&(l.uv1=Wi.getInterpolatedAttribute(r,o,c,h,u,new Z)),a&&(l.normal=Wi.getInterpolatedAttribute(a,o,c,h,u,new A),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let f={a:o,b:c,c:h,normal:new A,materialIndex:0};Wi.getNormal(Aa,Ra,Ca,f.normal),l.face=f,l.barycoord=u}return l}var Ct=class s extends de{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],l=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(u,2));function m(x,p,g,v,_,y,R,w,C,P,M){let b=y/C,E=R/P,L=y/2,U=R/2,N=w/2,G=C+1,O=P+1,J=0,H=0,lt=new A;for(let ot=0;ot<O;ot++){let ut=ot*E-U;for(let Pt=0;Pt<G;Pt++){let Ht=Pt*b-L;lt[x]=Ht*v,lt[p]=ut*_,lt[g]=N,h.push(lt.x,lt.y,lt.z),lt[x]=0,lt[p]=0,lt[g]=w>0?1:-1,l.push(lt.x,lt.y,lt.z),u.push(Pt/C),u.push(1-ot/P),J+=1}}for(let ot=0;ot<P;ot++)for(let ut=0;ut<C;ut++){let Pt=f+ut+G*ot,Ht=f+ut+G*(ot+1),j=f+(ut+1)+G*(ot+1),at=f+(ut+1)+G*ot;c.push(Pt,Ht,at),c.push(Ht,j,at),H+=6}o.addGroup(d,H,M),d+=H,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function lr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function cn(s){let t={};for(let e=0;e<s.length;e++){let n=lr(s[e]);for(let i in n)t[i]=n[i]}return t}function g0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function uf(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var ci={clone:lr,merge:cn},x0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ce=class extends Ai{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x0,this.fragmentShader=v0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lr(t.uniforms),this.uniformsGroups=g0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},lo=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vi=new A,ld=new Z,cd=new Z,tn=class extends lo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=to*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ll*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return to*2*Math.atan(Math.tan(Ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,ld,cd),e.subVectors(cd,ld)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ll*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/h,i*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ws=-90,Xs=1,eh=class extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new tn(Ws,Xs,t,e);i.layers=this.layers,this.add(i);let r=new tn(Ws,Xs,t,e);r.layers=this.layers,this.add(r);let a=new tn(Ws,Xs,t,e);a.layers=this.layers,this.add(a);let o=new tn(Ws,Xs,t,e);o.layers=this.layers,this.add(o);let c=new tn(Ws,Xs,t,e);c.layers=this.layers,this.add(c);let h=new tn(Ws,Xs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(let h of e)this.remove(h);if(t===bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ja)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,l]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,l),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},co=class extends vn{constructor(t,e,n,i,r,a,o,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:sr,super(t,e,n,i,r,a,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nh=class extends hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new co(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ii}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ct(5,5,5),r=new Ce({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:ri});r.uniforms.tEquirect.value=e;let a=new _t(i,r),o=e.minFilter;return e.minFilter===xs&&(e.minFilter=ii),new eh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},jl=new A,y0=new A,_0=new te,Mi=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=jl.subVectors(n,e).cross(y0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(jl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||_0.getNormalMatrix(t),i=this.coplanarPoint(jl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},hs=new Zi,Da=new A,Xr=class{constructor(t=new Mi,e=new Mi,n=new Mi,i=new Mi,r=new Mi,a=new Mi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bi){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],h=i[4],l=i[5],u=i[6],f=i[7],d=i[8],m=i[9],x=i[10],p=i[11],g=i[12],v=i[13],_=i[14],y=i[15];if(n[0].setComponents(c-r,f-h,p-d,y-g).normalize(),n[1].setComponents(c+r,f+h,p+d,y+g).normalize(),n[2].setComponents(c+a,f+l,p+m,y+v).normalize(),n[3].setComponents(c-a,f-l,p-m,y-v).normalize(),n[4].setComponents(c-o,f-u,p-x,y-_).normalize(),e===bi)n[5].setComponents(c+o,f+u,p+x,y+_).normalize();else if(e===ja)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Da.x=i.normal.x>0?t.max.x:t.min.x,Da.y=i.normal.y>0?t.max.y:t.min.y,Da.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Da)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function df(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function M0(s){let t=new WeakMap;function e(o,c){let h=o.array,l=o.usage,u=h.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,h,l),o.onUploadCallback();let d;if(h instanceof Float32Array)d=s.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=s.SHORT;else if(h instanceof Uint32Array)d=s.UNSIGNED_INT;else if(h instanceof Int32Array)d=s.INT;else if(h instanceof Int8Array)d=s.BYTE;else if(h instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,h){let l=c.array,u=c.updateRanges;if(s.bindBuffer(h,o),u.length===0)s.bufferSubData(h,0,l);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];s.bufferSubData(h,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let l=t.get(o);(!l||l.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:i,remove:r,update:a}}var Se=class s extends de{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),h=o+1,l=c+1,u=t/o,f=e/c,d=[],m=[],x=[],p=[];for(let g=0;g<l;g++){let v=g*f-a;for(let _=0;_<h;_++){let y=_*u-r;m.push(y,-v,0),x.push(0,0,1),p.push(_/o),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<o;v++){let _=v+h*g,y=v+h*(g+1),R=v+1+h*(g+1),w=v+1+h*g;d.push(_,y,w),d.push(y,R,w)}this.setIndex(d),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},b0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
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
#endif`,S0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
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
#endif`,C0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P0=`#ifdef USE_BATCHING
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
#endif`,I0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k0=`#ifdef USE_IRIDESCENCE
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
#endif`,N0=`#ifdef USE_BUMPMAP
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
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,X0=`#define PI 3.141592653589793
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
} // validated`,q0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Y0=`vec3 transformedNormal = objectNormal;
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
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
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
}`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
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
#endif`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
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
#endif`,_m=`struct PhysicalMaterial {
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
}`,Mm=`
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
#endif`,bm=`#if defined( RE_IndirectDiffuse )
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Em=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Im=`#if defined( USE_POINTS_UV )
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
#endif`,Lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`#ifdef USE_MORPHTARGETS
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
#endif`,zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
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
#endif`,Xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ag=`float getShadowMask() {
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
}`,og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hg=`#ifdef USE_SKINNING
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
#endif`,ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#ifdef USE_TRANSMISSION
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bg=`uniform sampler2D t2D;
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`#include <common>
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
}`,Rg=`#if DEPTH_PACKING == 3200
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
}`,Cg=`#define DISTANCE
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
}`,Pg=`#define DISTANCE
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`uniform float scale;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Fg=`#define LAMBERT
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
}`,zg=`#define LAMBERT
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
}`,Bg=`#define MATCAP
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
}`,Og=`#define MATCAP
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
}`,Hg=`#define NORMAL
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
}`,Vg=`#define NORMAL
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
}`,Gg=`#define PHONG
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
}`,Wg=`#define PHONG
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
}`,Xg=`#define STANDARD
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
}`,qg=`#define STANDARD
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
}`,Yg=`#define TOON
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
}`,$g=`#define TOON
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
}`,Zg=`uniform float size;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,Qg=`uniform vec3 color;
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
}`,jg=`uniform float rotation;
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
}`,tx=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:b0,alphahash_pars_fragment:w0,alphamap_fragment:S0,alphamap_pars_fragment:E0,alphatest_fragment:T0,alphatest_pars_fragment:A0,aomap_fragment:R0,aomap_pars_fragment:C0,batching_pars_vertex:P0,batching_vertex:I0,begin_vertex:L0,beginnormal_vertex:D0,bsdfs:U0,iridescence_fragment:k0,bumpmap_pars_fragment:N0,clipping_planes_fragment:F0,clipping_planes_pars_fragment:z0,clipping_planes_pars_vertex:B0,clipping_planes_vertex:O0,color_fragment:H0,color_pars_fragment:V0,color_pars_vertex:G0,color_vertex:W0,common:X0,cube_uv_reflection_fragment:q0,defaultnormal_vertex:Y0,displacementmap_pars_vertex:$0,displacementmap_vertex:Z0,emissivemap_fragment:J0,emissivemap_pars_fragment:K0,colorspace_fragment:Q0,colorspace_pars_fragment:j0,envmap_fragment:tm,envmap_common_pars_fragment:em,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:am,fog_fragment:om,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_pars_fragment:hm,lights_lambert_fragment:um,lights_lambert_pars_fragment:dm,lights_pars_begin:fm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:xm,lights_phong_pars_fragment:vm,lights_physical_fragment:ym,lights_physical_pars_fragment:_m,lights_fragment_begin:Mm,lights_fragment_maps:bm,lights_fragment_end:wm,logdepthbuf_fragment:Sm,logdepthbuf_pars_fragment:Em,logdepthbuf_pars_vertex:Tm,logdepthbuf_vertex:Am,map_fragment:Rm,map_pars_fragment:Cm,map_particle_fragment:Pm,map_particle_pars_fragment:Im,metalnessmap_fragment:Lm,metalnessmap_pars_fragment:Dm,morphinstance_vertex:Um,morphcolor_vertex:km,morphnormal_vertex:Nm,morphtarget_pars_vertex:Fm,morphtarget_vertex:zm,normal_fragment_begin:Bm,normal_fragment_maps:Om,normal_pars_fragment:Hm,normal_pars_vertex:Vm,normal_vertex:Gm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:Xm,clearcoat_normal_fragment_maps:qm,clearcoat_pars_fragment:Ym,iridescence_pars_fragment:$m,opaque_fragment:Zm,packing:Jm,premultiplied_alpha_fragment:Km,project_vertex:Qm,dithering_fragment:jm,dithering_pars_fragment:tg,roughnessmap_fragment:eg,roughnessmap_pars_fragment:ng,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:sg,shadowmap_vertex:rg,shadowmask_pars_fragment:ag,skinbase_vertex:og,skinning_pars_vertex:lg,skinning_vertex:cg,skinnormal_vertex:hg,specularmap_fragment:ug,specularmap_pars_fragment:dg,tonemapping_fragment:fg,tonemapping_pars_fragment:pg,transmission_fragment:mg,transmission_pars_fragment:gg,uv_pars_fragment:xg,uv_pars_vertex:vg,uv_vertex:yg,worldpos_vertex:_g,background_vert:Mg,background_frag:bg,backgroundCube_vert:wg,backgroundCube_frag:Sg,cube_vert:Eg,cube_frag:Tg,depth_vert:Ag,depth_frag:Rg,distanceRGBA_vert:Cg,distanceRGBA_frag:Pg,equirect_vert:Ig,equirect_frag:Lg,linedashed_vert:Dg,linedashed_frag:Ug,meshbasic_vert:kg,meshbasic_frag:Ng,meshlambert_vert:Fg,meshlambert_frag:zg,meshmatcap_vert:Bg,meshmatcap_frag:Og,meshnormal_vert:Hg,meshnormal_frag:Vg,meshphong_vert:Gg,meshphong_frag:Wg,meshphysical_vert:Xg,meshphysical_frag:qg,meshtoon_vert:Yg,meshtoon_frag:$g,points_vert:Zg,points_frag:Jg,shadow_vert:Kg,shadow_frag:Qg,sprite_vert:jg,sprite_frag:tx},xt={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},ei={basic:{uniforms:cn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:cn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new yt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:cn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:cn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:cn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new yt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:cn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:cn([xt.points,xt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:cn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:cn([xt.common,xt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:cn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:cn([xt.sprite,xt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:cn([xt.common,xt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:cn([xt.lights,xt.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};ei.physical={uniforms:cn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var Ua={r:0,b:0,g:0},us=new He,ex=new Kt;function nx(s,t,e,n,i,r,a){let o=new yt(0),c=r===!0?0:1,h,l,u=null,f=0,d=null;function m(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function x(v){let _=!1,y=m(v);y===null?g(o,c):y&&y.isColor&&(g(y,1),_=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(v,_){let y=m(_);y&&(y.isCubeTexture||y.mapping===Co)?(l===void 0&&(l=new _t(new Ct(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:lr(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),us.copy(_.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ex.makeRotationFromEuler(us)),l.material.toneMapped=le.getTransfer(y.colorSpace)!==me,(u!==y||f!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new _t(new Se(2,2),new Ce({name:"BackgroundMaterial",uniforms:lr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=le.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function g(v,_){v.getRGB(Ua,uf(s)),n.buffers.color.setClear(Ua.r,Ua.g,Ua.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),c=_,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,g(o,c)},render:x,addToRenderList:p}}function ix(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(b,E,L,U,N){let G=!1,O=u(U,L,E);r!==O&&(r=O,h(r.object)),G=d(b,U,L,N),G&&m(b,U,L,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(b,E,L,U),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return s.createVertexArray()}function h(b){return s.bindVertexArray(b)}function l(b){return s.deleteVertexArray(b)}function u(b,E,L){let U=L.wireframe===!0,N=n[b.id];N===void 0&&(N={},n[b.id]=N);let G=N[E.id];G===void 0&&(G={},N[E.id]=G);let O=G[U];return O===void 0&&(O=f(c()),G[U]=O),O}function f(b){let E=[],L=[],U=[];for(let N=0;N<e;N++)E[N]=0,L[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:L,attributeDivisors:U,object:b,attributes:{},index:null}}function d(b,E,L,U){let N=r.attributes,G=E.attributes,O=0,J=L.getAttributes();for(let H in J)if(J[H].location>=0){let ot=N[H],ut=G[H];if(ut===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ut=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ut=b.instanceColor)),ot===void 0||ot.attribute!==ut||ut&&ot.data!==ut.data)return!0;O++}return r.attributesNum!==O||r.index!==U}function m(b,E,L,U){let N={},G=E.attributes,O=0,J=L.getAttributes();for(let H in J)if(J[H].location>=0){let ot=G[H];ot===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ot=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ot=b.instanceColor));let ut={};ut.attribute=ot,ot&&ot.data&&(ut.data=ot.data),N[H]=ut,O++}r.attributes=N,r.attributesNum=O,r.index=U}function x(){let b=r.newAttributes;for(let E=0,L=b.length;E<L;E++)b[E]=0}function p(b){g(b,0)}function g(b,E){let L=r.newAttributes,U=r.enabledAttributes,N=r.attributeDivisors;L[b]=1,U[b]===0&&(s.enableVertexAttribArray(b),U[b]=1),N[b]!==E&&(s.vertexAttribDivisor(b,E),N[b]=E)}function v(){let b=r.newAttributes,E=r.enabledAttributes;for(let L=0,U=E.length;L<U;L++)E[L]!==b[L]&&(s.disableVertexAttribArray(L),E[L]=0)}function _(b,E,L,U,N,G,O){O===!0?s.vertexAttribIPointer(b,E,L,N,G):s.vertexAttribPointer(b,E,L,U,N,G)}function y(b,E,L,U){x();let N=U.attributes,G=L.getAttributes(),O=E.defaultAttributeValues;for(let J in G){let H=G[J];if(H.location>=0){let lt=N[J];if(lt===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(lt=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(lt=b.instanceColor)),lt!==void 0){let ot=lt.normalized,ut=lt.itemSize,Pt=t.get(lt);if(Pt===void 0)continue;let Ht=Pt.buffer,j=Pt.type,at=Pt.bytesPerElement,Rt=j===s.INT||j===s.UNSIGNED_INT||lt.gpuType===Vh;if(lt.isInterleavedBufferAttribute){let dt=lt.data,F=dt.stride,it=lt.offset;if(dt.isInstancedInterleavedBuffer){for(let W=0;W<H.locationSize;W++)g(H.location+W,dt.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let W=0;W<H.locationSize;W++)p(H.location+W);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let W=0;W<H.locationSize;W++)_(H.location+W,ut/H.locationSize,j,ot,F*at,(it+ut/H.locationSize*W)*at,Rt)}else{if(lt.isInstancedBufferAttribute){for(let dt=0;dt<H.locationSize;dt++)g(H.location+dt,lt.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let dt=0;dt<H.locationSize;dt++)p(H.location+dt);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let dt=0;dt<H.locationSize;dt++)_(H.location+dt,ut/H.locationSize,j,ot,ut*at,ut/H.locationSize*dt*at,Rt)}}else if(O!==void 0){let ot=O[J];if(ot!==void 0)switch(ot.length){case 2:s.vertexAttrib2fv(H.location,ot);break;case 3:s.vertexAttrib3fv(H.location,ot);break;case 4:s.vertexAttrib4fv(H.location,ot);break;default:s.vertexAttrib1fv(H.location,ot)}}}}v()}function R(){P();for(let b in n){let E=n[b];for(let L in E){let U=E[L];for(let N in U)l(U[N].object),delete U[N];delete E[L]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;let E=n[b.id];for(let L in E){let U=E[L];for(let N in U)l(U[N].object),delete U[N];delete E[L]}delete n[b.id]}function C(b){for(let E in n){let L=n[E];if(L[b.id]===void 0)continue;let U=L[b.id];for(let N in U)l(U[N].object),delete U[N];delete L[b.id]}}function P(){M(),a=!0,r!==i&&(r=i,h(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function sx(s,t,e){let n;function i(h){n=h}function r(h,l){s.drawArrays(n,h,l),e.update(l,n,1)}function a(h,l,u){u!==0&&(s.drawArraysInstanced(n,h,l,u),e.update(l,n,u))}function o(h,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,u);let d=0;for(let m=0;m<u;m++)d+=l[m];e.update(d,n,1)}function c(h,l,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<h.length;m++)a(h[m],l[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,h,0,l,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=l[x]*f[x];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function rx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==Wn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let P=C===$n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ei&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==si&&!P)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:R,maxSamples:w}}function ax(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Mi,o=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=l(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=s.get(u);if(!i||m===null||m.length===0||r&&!p)r?l(null):h();else{let v=r?0:n,_=v*4,y=g.clippingState||null;c.value=y,y=l(m,f,_,d);for(let R=0;R!==_;++R)y[R]=e[R];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(u,f,d,m){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,m!==!0||p===null){let g=d+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let _=0,y=d;_!==x;++_,y+=4)a.copy(u[_]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function ox(s){let t=new WeakMap;function e(a,o){return o===Mc?a.mapping=sr:o===bc&&(a.mapping=rr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Mc||o===bc)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let h=new nh(c.height);return h.fromEquirectangularTexture(s,a),t.set(a,h),a.addEventListener("dispose",i),e(h.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var cr=class extends lo{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Qs=4,hd=[.125,.215,.35,.446,.526,.582],ms=20,tc=new cr,ud=new yt,ec=null,nc=0,ic=0,sc=!1,fs=(1+Math.sqrt(5))/2,qs=1/fs,dd=[new A(-fs,qs,0),new A(fs,qs,0),new A(-qs,0,fs),new A(qs,0,fs),new A(0,fs,-qs),new A(0,fs,qs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],hr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ec=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ec,nc,ic),this._renderer.xr.enabled=sc,t.scissorTest=!1,ka(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sr||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ec=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:$n,format:Wn,colorSpace:xr,depthBuffer:!1},i=fd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lx(r)),this._blurMaterial=cx(r,t,e)}return i}_compileMaterial(t){let e=new _t(this._lodPlanes[0],t);this._renderer.compile(e,tc)}_sceneToCubeUV(t,e,n,i){let o=new tn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,f=l.toneMapping;l.getClearColor(ud),l.toneMapping=Xi,l.autoClear=!1;let d=new We({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),m=new _t(new Ct,d),x=!1,p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,x=!0):(d.color.copy(ud),x=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(o.up.set(0,c[g],0),o.lookAt(h[g],0,0)):v===1?(o.up.set(0,0,c[g]),o.lookAt(0,h[g],0)):(o.up.set(0,c[g],0),o.lookAt(0,0,h[g]));let _=this._cubeSize;ka(i,v*_,g>2?_:0,_,_),l.setRenderTarget(i),x&&l.render(m,o),l.render(t,o)}m.geometry.dispose(),m.material.dispose(),l.toneMapping=f,l.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===sr||t.mapping===rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pd());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;ka(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,tc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=dd[(i-r-1)%dd.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,u=new _t(this._lodPlanes[i],h),f=h.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ms-1),x=r/m,p=isFinite(r)?1+Math.floor(l*x):ms;p>ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ms}`);let g=[],v=0;for(let C=0;C<ms;++C){let P=C/x,M=Math.exp(-P*P/2);g.push(M),C===0?v+=M:C<p&&(v+=2*M)}for(let C=0;C<g.length;C++)g[C]=g[C]/v;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;let y=this._sizeLods[i],R=3*y*(i>_-Qs?i-_+Qs:0),w=4*(this._cubeSize-y);ka(e,R,w,3*y,2*y),c.setRenderTarget(e),c.render(u,tc)}};function lx(s){let t=[],e=[],n=[],i=s,r=s-Qs+1+hd.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Qs?c=hd[a-s+Qs-1]:a===0&&(c=0),n.push(c);let h=1/(o-2),l=-h,u=1+h,f=[l,l,u,l,u,u,l,l,u,u,l,u],d=6,m=6,x=3,p=2,g=1,v=new Float32Array(x*m*d),_=new Float32Array(p*m*d),y=new Float32Array(g*m*d);for(let w=0;w<d;w++){let C=w%3*2/3-1,P=w>2?0:-1,M=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];v.set(M,x*m*w),_.set(f,p*m*w);let b=[w,w,w,w,w,w];y.set(b,g*m*w)}let R=new de;R.setAttribute("position",new ne(v,x)),R.setAttribute("uv",new ne(_,p)),R.setAttribute("faceIndex",new ne(y,g)),t.push(R),i>Qs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fd(s,t,e){let n=new hn(s,t,e);return n.texture.mapping=Co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ka(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function cx(s,t,e){let n=new Float32Array(ms),i=new A(0,1,0);return new Ce({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zh(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function pd(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zh(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function md(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Zh(){return`

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
	`}function hx(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,h=c===Mc||c===bc,l=c===sr||c===rr;if(h||l){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new hr(s)),u=h?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return h&&d&&d.height>0||l&&d&&i(d)?(e===null&&(e=new hr(s)),u=h?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0,h=6;for(let l=0;l<h;l++)o[l]!==void 0&&c++;return c===h}function r(o){let c=o.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ux(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Br("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function dx(s,t,e,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let x=f.morphAttributes[m];for(let p=0,g=x.length;p<g;p++)t.remove(x[p])}f.removeEventListener("dispose",a),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let m in f)t.update(f[m],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let m in d){let x=d[m];for(let p=0,g=x.length;p<g;p++)t.update(x[p],s.ARRAY_BUFFER)}}function h(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(d!==null){let v=d.array;x=d.version;for(let _=0,y=v.length;_<y;_+=3){let R=v[_+0],w=v[_+1],C=v[_+2];f.push(R,w,w,C,C,R)}}else if(m!==void 0){let v=m.array;x=m.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let R=_+0,w=_+1,C=_+2;f.push(R,w,w,C,C,R)}}else return;let p=new(cf(f)?oo:ao)(f,1);p.version=x;let g=r.get(u);g&&t.remove(g),r.set(u,p)}function l(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:l}}function fx(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*a),e.update(d,n,1)}function h(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*a,m),e.update(d,n,m))}function l(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g];e.update(p,n,1)}function u(f,d,m,x){if(m===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f.length;g++)h(f[g]/a,d[g],x[g]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,m);let g=0;for(let v=0;v<m;v++)g+=d[v]*x[v];e.update(g,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function px(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function mx(s,t,e){let n=new WeakMap,i=new Me;function r(a,o,c){let h=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l!==void 0?l.length:0,f=n.get(o);if(f===void 0||f.count!==u){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],_=0;d===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let y=o.attributes.position.count*_,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*R*4*u),C=new io(w,y,R,u);C.type=si,C.needsUpdate=!0;let P=_*4;for(let b=0;b<u;b++){let E=p[b],L=g[b],U=v[b],N=y*R*4*b;for(let G=0;G<E.count;G++){let O=G*P;d===!0&&(i.fromBufferAttribute(E,G),w[N+O+0]=i.x,w[N+O+1]=i.y,w[N+O+2]=i.z,w[N+O+3]=0),m===!0&&(i.fromBufferAttribute(L,G),w[N+O+4]=i.x,w[N+O+5]=i.y,w[N+O+6]=i.z,w[N+O+7]=0),x===!0&&(i.fromBufferAttribute(U,G),w[N+O+8]=i.x,w[N+O+9]=i.y,w[N+O+10]=i.z,w[N+O+11]=U.itemSize===4?i.w:1)}}f={count:u,texture:C,size:new Z(y,R)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<h.length;x++)d+=h[x];let m=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function gx(s,t,e,n){let i=new WeakMap;function r(c){let h=n.render.frame,l=c.geometry,u=t.get(c,l);if(i.get(u)!==h&&(t.update(u),i.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==h&&(f.update(),i.set(f,h))}return u}function a(){i=new WeakMap}function o(c){let h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}var ho=class extends vn{constructor(t,e,n,i,r,a,o,c,h,l=tr){if(l!==tr&&l!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===tr&&(n=ys),n===void 0&&l===or&&(n=ar),super(null,i,r,a,o,c,l,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Tn,this.minFilter=c!==void 0?c:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ff=new vn,gd=new ho(1,1),pf=new io,mf=new th,gf=new co,xd=[],vd=[],yd=new Float32Array(16),_d=new Float32Array(9),Md=new Float32Array(4);function vr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=xd[i];if(r===void 0&&(r=new Float32Array(i),xd[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Xe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function qe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Io(s,t){let e=vd[t];e===void 0&&(e=new Int32Array(t),vd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function xx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function vx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2fv(this.addr,t),qe(e,t)}}function yx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;s.uniform3fv(this.addr,t),qe(e,t)}}function _x(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4fv(this.addr,t),qe(e,t)}}function Mx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Md.set(n),s.uniformMatrix2fv(this.addr,!1,Md),qe(e,n)}}function bx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;_d.set(n),s.uniformMatrix3fv(this.addr,!1,_d),qe(e,n)}}function wx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;yd.set(n),s.uniformMatrix4fv(this.addr,!1,yd),qe(e,n)}}function Sx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ex(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2iv(this.addr,t),qe(e,t)}}function Tx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;s.uniform3iv(this.addr,t),qe(e,t)}}function Ax(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4iv(this.addr,t),qe(e,t)}}function Rx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Cx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2uiv(this.addr,t),qe(e,t)}}function Px(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;s.uniform3uiv(this.addr,t),qe(e,t)}}function Ix(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4uiv(this.addr,t),qe(e,t)}}function Lx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(gd.compareFunction=lf,r=gd):r=ff,e.setTexture2D(t||r,i)}function Dx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||mf,i)}function Ux(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||gf,i)}function kx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||pf,i)}function Nx(s){switch(s){case 5126:return xx;case 35664:return vx;case 35665:return yx;case 35666:return _x;case 35674:return Mx;case 35675:return bx;case 35676:return wx;case 5124:case 35670:return Sx;case 35667:case 35671:return Ex;case 35668:case 35672:return Tx;case 35669:case 35673:return Ax;case 5125:return Rx;case 36294:return Cx;case 36295:return Px;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return kx}}function Fx(s,t){s.uniform1fv(this.addr,t)}function zx(s,t){let e=vr(t,this.size,2);s.uniform2fv(this.addr,e)}function Bx(s,t){let e=vr(t,this.size,3);s.uniform3fv(this.addr,e)}function Ox(s,t){let e=vr(t,this.size,4);s.uniform4fv(this.addr,e)}function Hx(s,t){let e=vr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Vx(s,t){let e=vr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Gx(s,t){let e=vr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Wx(s,t){s.uniform1iv(this.addr,t)}function Xx(s,t){s.uniform2iv(this.addr,t)}function qx(s,t){s.uniform3iv(this.addr,t)}function Yx(s,t){s.uniform4iv(this.addr,t)}function $x(s,t){s.uniform1uiv(this.addr,t)}function Zx(s,t){s.uniform2uiv(this.addr,t)}function Jx(s,t){s.uniform3uiv(this.addr,t)}function Kx(s,t){s.uniform4uiv(this.addr,t)}function Qx(s,t,e){let n=this.cache,i=t.length,r=Io(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||ff,r[a])}function jx(s,t,e){let n=this.cache,i=t.length,r=Io(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||mf,r[a])}function tv(s,t,e){let n=this.cache,i=t.length,r=Io(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||gf,r[a])}function ev(s,t,e){let n=this.cache,i=t.length,r=Io(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||pf,r[a])}function nv(s){switch(s){case 5126:return Fx;case 35664:return zx;case 35665:return Bx;case 35666:return Ox;case 35674:return Hx;case 35675:return Vx;case 35676:return Gx;case 5124:case 35670:return Wx;case 35667:case 35671:return Xx;case 35668:case 35672:return qx;case 35669:case 35673:return Yx;case 5125:return $x;case 36294:return Zx;case 36295:return Jx;case 36296:return Kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return ev}}var ih=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Nx(e.type)}},sh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nv(e.type)}},rh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},rc=/(\w+)(\])?(\[|\.)?/g;function bd(s,t){s.seq.push(t),s.map[t.id]=t}function iv(s,t,e){let n=s.name,i=n.length;for(rc.lastIndex=0;;){let r=rc.exec(n),a=rc.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===i){bd(e,h===void 0?new ih(o,s,t):new sh(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new rh(o),bd(e,u)),e=u}}}var nr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);iv(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function wd(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var sv=37297,rv=0;function av(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Sd=new te;function ov(s){le._getMatrix(Sd,le.workingColorSpace,s);let t=`mat3( ${Sd.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(s)){case Po:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ed(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+av(s.getShaderSource(t),a)}else return i}function lv(s,t){let e=ov(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cv(s,t){let e;switch(t){case Fh:e="Linear";break;case zh:e="Reinhard";break;case Bh:e="Cineon";break;case ea:e="ACESFilmic";break;case Oh:e="AgX";break;case Hh:e="Neutral";break;case Hp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Na=new A;function hv(){le.getLuminanceCoefficients(Na);let s=Na.x.toFixed(4),t=Na.y.toFixed(4),e=Na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function dv(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fv(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Or(s){return s!==""}function Td(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ad(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ah(s){return s.replace(pv,gv)}var mv=new Map;function gv(s,t){let e=ee[t];if(e===void 0){let n=mv.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ah(e)}var xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(s){return s.replace(xv,vv)}function vv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Cd(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function yv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===$d?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Nh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===_i&&(t="SHADOWMAP_TYPE_VSM"),t}function _v(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case sr:case rr:t="ENVMAP_TYPE_CUBE";break;case Co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mv(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===rr&&(t="ENVMAP_MODE_REFRACTION"),t}function bv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zd:t="ENVMAP_BLENDING_MULTIPLY";break;case Bp:t="ENVMAP_BLENDING_MIX";break;case Op:t="ENVMAP_BLENDING_ADD";break}return t}function wv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Sv(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=yv(e),h=_v(e),l=Mv(e),u=bv(e),f=wv(e),d=uv(e),m=dv(r),x=i.createProgram(),p,g,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Or).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Or).join(`
`),g.length>0&&(g+=`
`)):(p=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),g=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?ee.tonemapping_pars_fragment:"",e.toneMapping!==Xi?cv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,lv("linearToOutputTexel",e.outputColorSpace),hv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),a=ah(a),a=Td(a,e),a=Ad(a,e),o=ah(o),o=Td(o,e),o=Ad(o,e),a=Rd(a),o=Rd(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=v+p+a,y=v+g+o,R=wd(i,i.VERTEX_SHADER,_),w=wd(i,i.FRAGMENT_SHADER,y);i.attachShader(x,R),i.attachShader(x,w),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(E){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(x).trim(),U=i.getShaderInfoLog(R).trim(),N=i.getShaderInfoLog(w).trim(),G=!0,O=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,R,w);else{let J=Ed(i,R,"vertex"),H=Ed(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+L+`
`+J+`
`+H)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(U===""||N==="")&&(O=!1);O&&(E.diagnostics={runnable:G,programLog:L,vertexShader:{log:U,prefix:p},fragmentShader:{log:N,prefix:g}})}i.deleteShader(R),i.deleteShader(w),P=new nr(i,x),M=fv(i,x)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(x,sv)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=w,this}var Ev=0,oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new lh(t),e.set(t,n)),n}},lh=class{constructor(t){this.id=Ev++,this.code=t,this.usedTimes=0}};function Tv(s,t,e,n,i,r,a){let o=new ro,c=new oh,h=new Set,l=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return h.add(M),M===0?"uv":`uv${M}`}function p(M,b,E,L,U){let N=L.fog,G=U.geometry,O=M.isMeshStandardMaterial?L.environment:null,J=(M.isMeshStandardMaterial?e:t).get(M.envMap||O),H=J&&J.mapping===Co?J.image.height:null,lt=m[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let ot=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ut=ot!==void 0?ot.length:0,Pt=0;G.morphAttributes.position!==void 0&&(Pt=1),G.morphAttributes.normal!==void 0&&(Pt=2),G.morphAttributes.color!==void 0&&(Pt=3);let Ht,j,at,Rt;if(lt){let ve=ei[lt];Ht=ve.vertexShader,j=ve.fragmentShader}else Ht=M.vertexShader,j=M.fragmentShader,c.update(M),at=c.getVertexShaderID(M),Rt=c.getFragmentShaderID(M);let dt=s.getRenderTarget(),F=s.state.buffers.depth.getReversed(),it=U.isInstancedMesh===!0,W=U.isBatchedMesh===!0,$=!!M.map,X=!!M.matcap,Q=!!J,D=!!M.aoMap,Mt=!!M.lightMap,st=!!M.bumpMap,gt=!!M.normalMap,ct=!!M.displacementMap,Vt=!!M.emissiveMap,bt=!!M.metalnessMap,I=!!M.roughnessMap,S=M.anisotropy>0,V=M.clearcoat>0,tt=M.dispersion>0,rt=M.iridescence>0,nt=M.sheen>0,Dt=M.transmission>0,mt=S&&!!M.anisotropyMap,wt=V&&!!M.clearcoatMap,ie=V&&!!M.clearcoatNormalMap,ht=V&&!!M.clearcoatRoughnessMap,It=rt&&!!M.iridescenceMap,Gt=rt&&!!M.iridescenceThicknessMap,Wt=nt&&!!M.sheenColorMap,At=nt&&!!M.sheenRoughnessMap,Zt=!!M.specularMap,Jt=!!M.specularColorMap,xe=!!M.specularIntensityMap,k=Dt&&!!M.transmissionMap,vt=Dt&&!!M.thicknessMap,K=!!M.gradientMap,et=!!M.alphaMap,Tt=M.alphaTest>0,St=!!M.alphaHash,Qt=!!M.extensions,Ne=Xi;M.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Ne=s.toneMapping);let nn={shaderID:lt,shaderType:M.type,shaderName:M.name,vertexShader:Ht,fragmentShader:j,defines:M.defines,customVertexShaderID:at,customFragmentShaderID:Rt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:W,batchingColor:W&&U._colorsTexture!==null,instancing:it,instancingColor:it&&U.instanceColor!==null,instancingMorph:it&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:dt===null?s.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:xr,alphaToCoverage:!!M.alphaToCoverage,map:$,matcap:X,envMap:Q,envMapMode:Q&&J.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:Mt,bumpMap:st,normalMap:gt,displacementMap:f&&ct,emissiveMap:Vt,normalMapObjectSpace:gt&&M.normalMapType===Xp,normalMapTangentSpace:gt&&M.normalMapType===of,metalnessMap:bt,roughnessMap:I,anisotropy:S,anisotropyMap:mt,clearcoat:V,clearcoatMap:wt,clearcoatNormalMap:ie,clearcoatRoughnessMap:ht,dispersion:tt,iridescence:rt,iridescenceMap:It,iridescenceThicknessMap:Gt,sheen:nt,sheenColorMap:Wt,sheenRoughnessMap:At,specularMap:Zt,specularColorMap:Jt,specularIntensityMap:xe,transmission:Dt,transmissionMap:k,thicknessMap:vt,gradientMap:K,opaque:M.transparent===!1&&M.blending===ai&&M.alphaToCoverage===!1,alphaMap:et,alphaTest:Tt,alphaHash:St,combine:M.combine,mapUv:$&&x(M.map.channel),aoMapUv:D&&x(M.aoMap.channel),lightMapUv:Mt&&x(M.lightMap.channel),bumpMapUv:st&&x(M.bumpMap.channel),normalMapUv:gt&&x(M.normalMap.channel),displacementMapUv:ct&&x(M.displacementMap.channel),emissiveMapUv:Vt&&x(M.emissiveMap.channel),metalnessMapUv:bt&&x(M.metalnessMap.channel),roughnessMapUv:I&&x(M.roughnessMap.channel),anisotropyMapUv:mt&&x(M.anisotropyMap.channel),clearcoatMapUv:wt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:At&&x(M.sheenRoughnessMap.channel),specularMapUv:Zt&&x(M.specularMap.channel),specularColorMapUv:Jt&&x(M.specularColorMap.channel),specularIntensityMapUv:xe&&x(M.specularIntensityMap.channel),transmissionMapUv:k&&x(M.transmissionMap.channel),thicknessMapUv:vt&&x(M.thicknessMap.channel),alphaMapUv:et&&x(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(gt||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&($||et),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:F,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Pt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&E.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ne,decodeVideoTexture:$&&M.map.isVideoTexture===!0&&le.getTransfer(M.map.colorSpace)===me,decodeVideoTextureEmissive:Vt&&M.emissiveMap.isVideoTexture===!0&&le.getTransfer(M.emissiveMap.colorSpace)===me,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===be,flipSided:M.side===en,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Qt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&M.extensions.multiDraw===!0||W)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return nn.vertexUv1s=h.has(1),nn.vertexUv2s=h.has(2),nn.vertexUv3s=h.has(3),h.clear(),nn}function g(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let E in M.defines)b.push(E),b.push(M.defines[E]);return M.isRawShaderMaterial===!1&&(v(b,M),_(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function v(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function _(M,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){let b=m[M.type],E;if(b){let L=ei[b];E=ci.clone(L.uniforms)}else E=M.uniforms;return E}function R(M,b){let E;for(let L=0,U=l.length;L<U;L++){let N=l[L];if(N.cacheKey===b){E=N,++E.usedTimes;break}}return E===void 0&&(E=new Sv(s,b,M,r),l.push(E)),E}function w(M){if(--M.usedTimes===0){let b=l.indexOf(M);l[b]=l[l.length-1],l.pop(),M.destroy()}}function C(M){c.remove(M)}function P(){c.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:y,acquireProgram:R,releaseProgram:w,releaseShaderCache:C,programs:l,dispose:P}}function Av(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Rv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Pd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Id(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,m,x,p){let g=s[t];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:p},s[t]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=x,g.group=p),t++,g}function o(u,f,d,m,x,p){let g=a(u,f,d,m,x,p);d.transmission>0?n.push(g):d.transparent===!0?i.push(g):e.push(g)}function c(u,f,d,m,x,p){let g=a(u,f,d,m,x,p);d.transmission>0?n.unshift(g):d.transparent===!0?i.unshift(g):e.unshift(g)}function h(u,f){e.length>1&&e.sort(u||Rv),n.length>1&&n.sort(f||Pd),i.length>1&&i.sort(f||Pd)}function l(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:l,sort:h}}function Cv(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Id,s.set(n,[a])):i>=r.length?(a=new Id,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Pv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new yt};break;case"SpotLight":e={position:new A,direction:new A,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function Iv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Lv=0;function Dv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Uv(s){let t=new Pv,e=Iv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new A);let i=new A,r=new Kt,a=new Kt;function o(h){let l=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,m=0,x=0,p=0,g=0,v=0,_=0,y=0,R=0,w=0,C=0;h.sort(Dv);for(let M=0,b=h.length;M<b;M++){let E=h[M],L=E.color,U=E.intensity,N=E.distance,G=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)l+=L.r*U,u+=L.g*U,f+=L.b*U;else if(E.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(E.sh.coefficients[O],U);C++}else if(E.isDirectionalLight){let O=t.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let J=E.shadow,H=e.get(E);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=E.shadow.matrix,v++}n.directional[d]=O,d++}else if(E.isSpotLight){let O=t.get(E);O.position.setFromMatrixPosition(E.matrixWorld),O.color.copy(L).multiplyScalar(U),O.distance=N,O.coneCos=Math.cos(E.angle),O.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),O.decay=E.decay,n.spot[x]=O;let J=E.shadow;if(E.map&&(n.spotLightMap[R]=E.map,R++,J.updateMatrices(E),E.castShadow&&w++),n.spotLightMatrix[x]=J.matrix,E.castShadow){let H=e.get(E);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=G,y++}x++}else if(E.isRectAreaLight){let O=t.get(E);O.color.copy(L).multiplyScalar(U),O.halfWidth.set(E.width*.5,0,0),O.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=O,p++}else if(E.isPointLight){let O=t.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),O.distance=E.distance,O.decay=E.decay,E.castShadow){let J=E.shadow,H=e.get(E);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=E.shadow.matrix,_++}n.point[m]=O,m++}else if(E.isHemisphereLight){let O=t.get(E);O.skyColor.copy(E.color).multiplyScalar(U),O.groundColor.copy(E.groundColor).multiplyScalar(U),n.hemi[g]=O,g++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==p||P.hemiLength!==g||P.numDirectionalShadows!==v||P.numPointShadows!==_||P.numSpotShadows!==y||P.numSpotMaps!==R||P.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,P.directionalLength=d,P.pointLength=m,P.spotLength=x,P.rectAreaLength=p,P.hemiLength=g,P.numDirectionalShadows=v,P.numPointShadows=_,P.numSpotShadows=y,P.numSpotMaps=R,P.numLightProbes=C,n.version=Lv++)}function c(h,l){let u=0,f=0,d=0,m=0,x=0,p=l.matrixWorldInverse;for(let g=0,v=h.length;g<v;g++){let _=h[g];if(_.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),u++}else if(_.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(_.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:n}}function Ld(s){let t=new Uv(s),e=[],n=[];function i(l){h.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function a(l){n.push(l)}function o(){t.setup(e)}function c(l){t.setupView(e,l)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function kv(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Ld(s),t.set(i,[o])):r>=a.length?(o=new Ld(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ch=class extends Ai{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hh=class extends Ai{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fv=`uniform sampler2D shadow_pass;
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
}`;function zv(s,t,e){let n=new Xr,i=new Z,r=new Z,a=new Me,o=new ch({depthPacking:Wp}),c=new hh,h={},l=e.maxTextureSize,u={[Yi]:en,[en]:Yi,[be]:be},f=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:Nv,fragmentShader:Fv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new de;m.setAttribute("position",new ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new _t(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$d;let g=this.type;this.render=function(w,C,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;let M=s.getRenderTarget(),b=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),L=s.state;L.setBlending(ri),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=g!==_i&&this.type===_i,N=g===_i&&this.type!==_i;for(let G=0,O=w.length;G<O;G++){let J=w[G],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let lt=H.getFrameExtents();if(i.multiply(lt),r.copy(H.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(r.x=Math.floor(l/lt.x),i.x=r.x*lt.x,H.mapSize.x=r.x),i.y>l&&(r.y=Math.floor(l/lt.y),i.y=r.y*lt.y,H.mapSize.y=r.y)),H.map===null||U===!0||N===!0){let ut=this.type!==_i?{minFilter:Tn,magFilter:Tn}:{};H.map!==null&&H.map.dispose(),H.map=new hn(i.x,i.y,ut),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let ot=H.getViewportCount();for(let ut=0;ut<ot;ut++){let Pt=H.getViewport(ut);a.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),L.viewport(a),H.updateMatrices(J,ut),n=H.getFrustum(),y(C,P,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===_i&&v(H,P),H.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(M,b,E)};function v(w,C){let P=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new hn(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,P,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,P,d,x,null)}function _(w,C,P,M){let b=null,E=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)b=E;else if(b=P.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let L=b.uuid,U=C.uuid,N=h[L];N===void 0&&(N={},h[L]=N);let G=N[U];G===void 0&&(G=b.clone(),N[U]=G,C.addEventListener("dispose",R)),b=G}if(b.visible=C.visible,b.wireframe=C.wireframe,M===_i?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let L=s.properties.get(b);L.light=P}return b}function y(w,C,P,M,b){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===_i)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);let U=t.update(w),N=w.material;if(Array.isArray(N)){let G=U.groups;for(let O=0,J=G.length;O<J;O++){let H=G[O],lt=N[H.materialIndex];if(lt&&lt.visible){let ot=_(w,lt,M,b);w.onBeforeShadow(s,w,C,P,U,ot,H),s.renderBufferDirect(P,null,U,ot,w,H),w.onAfterShadow(s,w,C,P,U,ot,H)}}}else if(N.visible){let G=_(w,N,M,b);w.onBeforeShadow(s,w,C,P,U,G,null),s.renderBufferDirect(P,null,U,G,w,null),w.onAfterShadow(s,w,C,P,U,G,null)}}let L=w.children;for(let U=0,N=L.length;U<N;U++)y(L[U],C,P,M,b)}function R(w){w.target.removeEventListener("dispose",R);for(let P in h){let M=h[P],b=w.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var Bv={[pc]:mc,[gc]:yc,[xc]:_c,[ir]:vc,[mc]:pc,[yc]:gc,[_c]:xc,[vc]:ir};function Ov(s,t){function e(){let k=!1,vt=new Me,K=null,et=new Me(0,0,0,0);return{setMask:function(Tt){K!==Tt&&!k&&(s.colorMask(Tt,Tt,Tt,Tt),K=Tt)},setLocked:function(Tt){k=Tt},setClear:function(Tt,St,Qt,Ne,nn){nn===!0&&(Tt*=Ne,St*=Ne,Qt*=Ne),vt.set(Tt,St,Qt,Ne),et.equals(vt)===!1&&(s.clearColor(Tt,St,Qt,Ne),et.copy(vt))},reset:function(){k=!1,K=null,et.set(-1,0,0,0)}}}function n(){let k=!1,vt=!1,K=null,et=null,Tt=null;return{setReversed:function(St){if(vt!==St){let Qt=t.get("EXT_clip_control");vt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT);let Ne=Tt;Tt=null,this.setClear(Ne)}vt=St},getReversed:function(){return vt},setTest:function(St){St?dt(s.DEPTH_TEST):F(s.DEPTH_TEST)},setMask:function(St){K!==St&&!k&&(s.depthMask(St),K=St)},setFunc:function(St){if(vt&&(St=Bv[St]),et!==St){switch(St){case pc:s.depthFunc(s.NEVER);break;case mc:s.depthFunc(s.ALWAYS);break;case gc:s.depthFunc(s.LESS);break;case ir:s.depthFunc(s.LEQUAL);break;case xc:s.depthFunc(s.EQUAL);break;case vc:s.depthFunc(s.GEQUAL);break;case yc:s.depthFunc(s.GREATER);break;case _c:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}et=St}},setLocked:function(St){k=St},setClear:function(St){Tt!==St&&(vt&&(St=1-St),s.clearDepth(St),Tt=St)},reset:function(){k=!1,K=null,et=null,Tt=null,vt=!1}}}function i(){let k=!1,vt=null,K=null,et=null,Tt=null,St=null,Qt=null,Ne=null,nn=null;return{setTest:function(ve){k||(ve?dt(s.STENCIL_TEST):F(s.STENCIL_TEST))},setMask:function(ve){vt!==ve&&!k&&(s.stencilMask(ve),vt=ve)},setFunc:function(ve,Bn,fi){(K!==ve||et!==Bn||Tt!==fi)&&(s.stencilFunc(ve,Bn,fi),K=ve,et=Bn,Tt=fi)},setOp:function(ve,Bn,fi){(St!==ve||Qt!==Bn||Ne!==fi)&&(s.stencilOp(ve,Bn,fi),St=ve,Qt=Bn,Ne=fi)},setLocked:function(ve){k=ve},setClear:function(ve){nn!==ve&&(s.clearStencil(ve),nn=ve)},reset:function(){k=!1,vt=null,K=null,et=null,Tt=null,St=null,Qt=null,Ne=null,nn=null}}}let r=new e,a=new n,o=new i,c=new WeakMap,h=new WeakMap,l={},u={},f=new WeakMap,d=[],m=null,x=!1,p=null,g=null,v=null,_=null,y=null,R=null,w=null,C=new yt(0,0,0),P=0,M=!1,b=null,E=null,L=null,U=null,N=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,J=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=J>=2);let lt=null,ot={},ut=s.getParameter(s.SCISSOR_BOX),Pt=s.getParameter(s.VIEWPORT),Ht=new Me().fromArray(ut),j=new Me().fromArray(Pt);function at(k,vt,K,et){let Tt=new Uint8Array(4),St=s.createTexture();s.bindTexture(k,St),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qt=0;Qt<K;Qt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(vt,0,s.RGBA,1,1,et,0,s.RGBA,s.UNSIGNED_BYTE,Tt):s.texImage2D(vt+Qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Tt);return St}let Rt={};Rt[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),Rt[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Rt[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(s.DEPTH_TEST),a.setFunc(ir),st(!1),gt(Nu),dt(s.CULL_FACE),D(ri);function dt(k){l[k]!==!0&&(s.enable(k),l[k]=!0)}function F(k){l[k]!==!1&&(s.disable(k),l[k]=!1)}function it(k,vt){return u[k]!==vt?(s.bindFramebuffer(k,vt),u[k]=vt,k===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=vt),k===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=vt),!0):!1}function W(k,vt){let K=d,et=!1;if(k){K=f.get(vt),K===void 0&&(K=[],f.set(vt,K));let Tt=k.textures;if(K.length!==Tt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let St=0,Qt=Tt.length;St<Qt;St++)K[St]=s.COLOR_ATTACHMENT0+St;K.length=Tt.length,et=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,et=!0);et&&s.drawBuffers(K)}function $(k){return m!==k?(s.useProgram(k),m=k,!0):!1}let X={[ps]:s.FUNC_ADD,[bp]:s.FUNC_SUBTRACT,[wp]:s.FUNC_REVERSE_SUBTRACT};X[Sp]=s.MIN,X[Ep]=s.MAX;let Q={[Tp]:s.ZERO,[Ap]:s.ONE,[Rp]:s.SRC_COLOR,[dc]:s.SRC_ALPHA,[Up]:s.SRC_ALPHA_SATURATE,[Lp]:s.DST_COLOR,[Pp]:s.DST_ALPHA,[Cp]:s.ONE_MINUS_SRC_COLOR,[fc]:s.ONE_MINUS_SRC_ALPHA,[Dp]:s.ONE_MINUS_DST_COLOR,[Ip]:s.ONE_MINUS_DST_ALPHA,[kp]:s.CONSTANT_COLOR,[Np]:s.ONE_MINUS_CONSTANT_COLOR,[Fp]:s.CONSTANT_ALPHA,[zp]:s.ONE_MINUS_CONSTANT_ALPHA};function D(k,vt,K,et,Tt,St,Qt,Ne,nn,ve){if(k===ri){x===!0&&(F(s.BLEND),x=!1);return}if(x===!1&&(dt(s.BLEND),x=!0),k!==Mp){if(k!==p||ve!==M){if((g!==ps||y!==ps)&&(s.blendEquation(s.FUNC_ADD),g=ps,y=ps),ve)switch(k){case ai:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case on:s.blendFunc(s.ONE,s.ONE);break;case Fu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ai:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case on:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}v=null,_=null,R=null,w=null,C.set(0,0,0),P=0,p=k,M=ve}return}Tt=Tt||vt,St=St||K,Qt=Qt||et,(vt!==g||Tt!==y)&&(s.blendEquationSeparate(X[vt],X[Tt]),g=vt,y=Tt),(K!==v||et!==_||St!==R||Qt!==w)&&(s.blendFuncSeparate(Q[K],Q[et],Q[St],Q[Qt]),v=K,_=et,R=St,w=Qt),(Ne.equals(C)===!1||nn!==P)&&(s.blendColor(Ne.r,Ne.g,Ne.b,nn),C.copy(Ne),P=nn),p=k,M=!1}function Mt(k,vt){k.side===be?F(s.CULL_FACE):dt(s.CULL_FACE);let K=k.side===en;vt&&(K=!K),st(K),k.blending===ai&&k.transparent===!1?D(ri):D(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let et=k.stencilWrite;o.setTest(et),et&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Vt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):F(s.SAMPLE_ALPHA_TO_COVERAGE)}function st(k){b!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),b=k)}function gt(k){k!==yp?(dt(s.CULL_FACE),k!==E&&(k===Nu?s.cullFace(s.BACK):k===_p?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):F(s.CULL_FACE),E=k}function ct(k){k!==L&&(O&&s.lineWidth(k),L=k)}function Vt(k,vt,K){k?(dt(s.POLYGON_OFFSET_FILL),(U!==vt||N!==K)&&(s.polygonOffset(vt,K),U=vt,N=K)):F(s.POLYGON_OFFSET_FILL)}function bt(k){k?dt(s.SCISSOR_TEST):F(s.SCISSOR_TEST)}function I(k){k===void 0&&(k=s.TEXTURE0+G-1),lt!==k&&(s.activeTexture(k),lt=k)}function S(k,vt,K){K===void 0&&(lt===null?K=s.TEXTURE0+G-1:K=lt);let et=ot[K];et===void 0&&(et={type:void 0,texture:void 0},ot[K]=et),(et.type!==k||et.texture!==vt)&&(lt!==K&&(s.activeTexture(K),lt=K),s.bindTexture(k,vt||Rt[k]),et.type=k,et.texture=vt)}function V(){let k=ot[lt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function tt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(k){Ht.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Ht.copy(k))}function At(k){j.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),j.copy(k))}function Zt(k,vt){let K=h.get(vt);K===void 0&&(K=new WeakMap,h.set(vt,K));let et=K.get(k);et===void 0&&(et=s.getUniformBlockIndex(vt,k.name),K.set(k,et))}function Jt(k,vt){let et=h.get(vt).get(k);c.get(vt)!==et&&(s.uniformBlockBinding(vt,et,k.__bindingPointIndex),c.set(vt,et))}function xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},lt=null,ot={},u={},f=new WeakMap,d=[],m=null,x=!1,p=null,g=null,v=null,_=null,y=null,R=null,w=null,C=new yt(0,0,0),P=0,M=!1,b=null,E=null,L=null,U=null,N=null,Ht.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:F,bindFramebuffer:it,drawBuffers:W,useProgram:$,setBlending:D,setMaterial:Mt,setFlipSided:st,setCullFace:gt,setLineWidth:ct,setPolygonOffset:Vt,setScissorTest:bt,activeTexture:I,bindTexture:S,unbindTexture:V,compressedTexImage2D:tt,compressedTexImage3D:rt,texImage2D:It,texImage3D:Gt,updateUBOMapping:Zt,uniformBlockBinding:Jt,texStorage2D:ie,texStorage3D:ht,texSubImage2D:nt,texSubImage3D:Dt,compressedTexSubImage2D:mt,compressedTexSubImage3D:wt,scissor:Wt,viewport:At,reset:xe}}function Dd(s,t,e,n){let i=Hv(n);switch(e){case tf:return s*t;case nf:return s*t;case sf:return s*t*2;case Xh:return s*t/i.components*i.byteLength;case qh:return s*t/i.components*i.byteLength;case rf:return s*t*2/i.components*i.byteLength;case Yh:return s*t*2/i.components*i.byteLength;case ef:return s*t*3/i.components*i.byteLength;case Wn:return s*t*4/i.components*i.byteLength;case $h:return s*t*4/i.components*i.byteLength;case Ya:case $a:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Za:case Ja:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ec:case Ac:return Math.max(s,16)*Math.max(t,8)/4;case Sc:case Tc:return Math.max(s,8)*Math.max(t,8)/2;case Rc:case Cc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Pc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case kc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case zc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Hc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Vc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Gc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Wc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ka:case Xc:case qc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case af:case Yc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case $c:case Zc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hv(s){switch(s){case Ei:case Kd:return{byteLength:1,components:1};case Wr:case Qd:case $n:return{byteLength:2,components:1};case Gh:case Wh:return{byteLength:2,components:4};case ys:case Vh:case si:return{byteLength:4,components:1};case jd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Vv(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Z,l=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,S){return d?new OffscreenCanvas(I,S):eo("canvas")}function x(I,S,V){let tt=1,rt=bt(I);if((rt.width>V||rt.height>V)&&(tt=V/Math.max(rt.width,rt.height)),tt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let nt=Math.floor(tt*rt.width),Dt=Math.floor(tt*rt.height);u===void 0&&(u=m(nt,Dt));let mt=S?m(nt,Dt):u;return mt.width=nt,mt.height=Dt,mt.getContext("2d").drawImage(I,0,0,nt,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+nt+"x"+Dt+")."),mt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),I;return I}function p(I){return I.generateMipmaps}function g(I){s.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(I,S,V,tt,rt=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let nt=S;if(S===s.RED&&(V===s.FLOAT&&(nt=s.R32F),V===s.HALF_FLOAT&&(nt=s.R16F),V===s.UNSIGNED_BYTE&&(nt=s.R8)),S===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(nt=s.R8UI),V===s.UNSIGNED_SHORT&&(nt=s.R16UI),V===s.UNSIGNED_INT&&(nt=s.R32UI),V===s.BYTE&&(nt=s.R8I),V===s.SHORT&&(nt=s.R16I),V===s.INT&&(nt=s.R32I)),S===s.RG&&(V===s.FLOAT&&(nt=s.RG32F),V===s.HALF_FLOAT&&(nt=s.RG16F),V===s.UNSIGNED_BYTE&&(nt=s.RG8)),S===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(nt=s.RG8UI),V===s.UNSIGNED_SHORT&&(nt=s.RG16UI),V===s.UNSIGNED_INT&&(nt=s.RG32UI),V===s.BYTE&&(nt=s.RG8I),V===s.SHORT&&(nt=s.RG16I),V===s.INT&&(nt=s.RG32I)),S===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(nt=s.RGB8UI),V===s.UNSIGNED_SHORT&&(nt=s.RGB16UI),V===s.UNSIGNED_INT&&(nt=s.RGB32UI),V===s.BYTE&&(nt=s.RGB8I),V===s.SHORT&&(nt=s.RGB16I),V===s.INT&&(nt=s.RGB32I)),S===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(nt=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(nt=s.RGBA16UI),V===s.UNSIGNED_INT&&(nt=s.RGBA32UI),V===s.BYTE&&(nt=s.RGBA8I),V===s.SHORT&&(nt=s.RGBA16I),V===s.INT&&(nt=s.RGBA32I)),S===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(nt=s.RGB9_E5),S===s.RGBA){let Dt=rt?Po:le.getTransfer(tt);V===s.FLOAT&&(nt=s.RGBA32F),V===s.HALF_FLOAT&&(nt=s.RGBA16F),V===s.UNSIGNED_BYTE&&(nt=Dt===me?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(nt=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(nt=s.RGB5_A1)}return(nt===s.R16F||nt===s.R32F||nt===s.RG16F||nt===s.RG32F||nt===s.RGBA16F||nt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function y(I,S){let V;return I?S===null||S===ys||S===ar?V=s.DEPTH24_STENCIL8:S===si?V=s.DEPTH32F_STENCIL8:S===Wr&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ys||S===ar?V=s.DEPTH_COMPONENT24:S===si?V=s.DEPTH_COMPONENT32F:S===Wr&&(V=s.DEPTH_COMPONENT16),V}function R(I,S){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Tn&&I.minFilter!==ii?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function w(I){let S=I.target;S.removeEventListener("dispose",w),P(S),S.isVideoTexture&&l.delete(S)}function C(I){let S=I.target;S.removeEventListener("dispose",C),b(S)}function P(I){let S=n.get(I);if(S.__webglInit===void 0)return;let V=I.source,tt=f.get(V);if(tt){let rt=tt[S.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&M(I),Object.keys(tt).length===0&&f.delete(V)}n.remove(I)}function M(I){let S=n.get(I);s.deleteTexture(S.__webglTexture);let V=I.source,tt=f.get(V);delete tt[S.__cacheKey],a.memory.textures--}function b(I){let S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(S.__webglFramebuffer[tt]))for(let rt=0;rt<S.__webglFramebuffer[tt].length;rt++)s.deleteFramebuffer(S.__webglFramebuffer[tt][rt]);else s.deleteFramebuffer(S.__webglFramebuffer[tt]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[tt])}else{if(Array.isArray(S.__webglFramebuffer))for(let tt=0;tt<S.__webglFramebuffer.length;tt++)s.deleteFramebuffer(S.__webglFramebuffer[tt]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let tt=0;tt<S.__webglColorRenderbuffer.length;tt++)S.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[tt]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let V=I.textures;for(let tt=0,rt=V.length;tt<rt;tt++){let nt=n.get(V[tt]);nt.__webglTexture&&(s.deleteTexture(nt.__webglTexture),a.memory.textures--),n.remove(V[tt])}n.remove(I)}let E=0;function L(){E=0}function U(){let I=E;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),E+=1,I}function N(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function G(I,S){let V=n.get(I);if(I.isVideoTexture&&ct(I),I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){let tt=I.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(V,I,S);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+S)}function O(I,S){let V=n.get(I);if(I.version>0&&V.__version!==I.version){j(V,I,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+S)}function J(I,S){let V=n.get(I);if(I.version>0&&V.__version!==I.version){j(V,I,S);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+S)}function H(I,S){let V=n.get(I);if(I.version>0&&V.__version!==I.version){at(V,I,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+S)}let lt={[vs]:s.REPEAT,[gs]:s.CLAMP_TO_EDGE,[wc]:s.MIRRORED_REPEAT},ot={[Tn]:s.NEAREST,[Vp]:s.NEAREST_MIPMAP_NEAREST,[ga]:s.NEAREST_MIPMAP_LINEAR,[ii]:s.LINEAR,[Pl]:s.LINEAR_MIPMAP_NEAREST,[xs]:s.LINEAR_MIPMAP_LINEAR},ut={[qp]:s.NEVER,[Qp]:s.ALWAYS,[Yp]:s.LESS,[lf]:s.LEQUAL,[$p]:s.EQUAL,[Kp]:s.GEQUAL,[Zp]:s.GREATER,[Jp]:s.NOTEQUAL};function Pt(I,S){if(S.type===si&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ii||S.magFilter===Pl||S.magFilter===ga||S.magFilter===xs||S.minFilter===ii||S.minFilter===Pl||S.minFilter===ga||S.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,lt[S.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,lt[S.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,lt[S.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ot[S.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ot[S.minFilter]),S.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,ut[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Tn||S.minFilter!==ga&&S.minFilter!==xs||S.type===si&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ht(I,S){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",w));let tt=S.source,rt=f.get(tt);rt===void 0&&(rt={},f.set(tt,rt));let nt=N(S);if(nt!==I.__cacheKey){rt[nt]===void 0&&(rt[nt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),rt[nt].usedTimes++;let Dt=rt[I.__cacheKey];Dt!==void 0&&(rt[I.__cacheKey].usedTimes--,Dt.usedTimes===0&&M(S)),I.__cacheKey=nt,I.__webglTexture=rt[nt].texture}return V}function j(I,S,V){let tt=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(tt=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(tt=s.TEXTURE_3D);let rt=Ht(I,S),nt=S.source;e.bindTexture(tt,I.__webglTexture,s.TEXTURE0+V);let Dt=n.get(nt);if(nt.version!==Dt.__version||rt===!0){e.activeTexture(s.TEXTURE0+V);let mt=le.getPrimaries(le.workingColorSpace),wt=S.colorSpace===Gi?null:le.getPrimaries(S.colorSpace),ie=S.colorSpace===Gi||mt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ht=x(S.image,!1,i.maxTextureSize);ht=Vt(S,ht);let It=r.convert(S.format,S.colorSpace),Gt=r.convert(S.type),Wt=_(S.internalFormat,It,Gt,S.colorSpace,S.isVideoTexture);Pt(tt,S);let At,Zt=S.mipmaps,Jt=S.isVideoTexture!==!0,xe=Dt.__version===void 0||rt===!0,k=nt.dataReady,vt=R(S,ht);if(S.isDepthTexture)Wt=y(S.format===or,S.type),xe&&(Jt?e.texStorage2D(s.TEXTURE_2D,1,Wt,ht.width,ht.height):e.texImage2D(s.TEXTURE_2D,0,Wt,ht.width,ht.height,0,It,Gt,null));else if(S.isDataTexture)if(Zt.length>0){Jt&&xe&&e.texStorage2D(s.TEXTURE_2D,vt,Wt,Zt[0].width,Zt[0].height);for(let K=0,et=Zt.length;K<et;K++)At=Zt[K],Jt?k&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,At.width,At.height,It,Gt,At.data):e.texImage2D(s.TEXTURE_2D,K,Wt,At.width,At.height,0,It,Gt,At.data);S.generateMipmaps=!1}else Jt?(xe&&e.texStorage2D(s.TEXTURE_2D,vt,Wt,ht.width,ht.height),k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht.width,ht.height,It,Gt,ht.data)):e.texImage2D(s.TEXTURE_2D,0,Wt,ht.width,ht.height,0,It,Gt,ht.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Jt&&xe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,vt,Wt,Zt[0].width,Zt[0].height,ht.depth);for(let K=0,et=Zt.length;K<et;K++)if(At=Zt[K],S.format!==Wn)if(It!==null)if(Jt){if(k)if(S.layerUpdates.size>0){let Tt=Dd(At.width,At.height,S.format,S.type);for(let St of S.layerUpdates){let Qt=At.data.subarray(St*Tt/At.data.BYTES_PER_ELEMENT,(St+1)*Tt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,St,At.width,At.height,1,It,Qt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,At.width,At.height,ht.depth,It,At.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,Wt,At.width,At.height,ht.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?k&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,At.width,At.height,ht.depth,It,Gt,At.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,Wt,At.width,At.height,ht.depth,0,It,Gt,At.data)}else{Jt&&xe&&e.texStorage2D(s.TEXTURE_2D,vt,Wt,Zt[0].width,Zt[0].height);for(let K=0,et=Zt.length;K<et;K++)At=Zt[K],S.format!==Wn?It!==null?Jt?k&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,At.width,At.height,It,At.data):e.compressedTexImage2D(s.TEXTURE_2D,K,Wt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?k&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,At.width,At.height,It,Gt,At.data):e.texImage2D(s.TEXTURE_2D,K,Wt,At.width,At.height,0,It,Gt,At.data)}else if(S.isDataArrayTexture)if(Jt){if(xe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,vt,Wt,ht.width,ht.height,ht.depth),k)if(S.layerUpdates.size>0){let K=Dd(ht.width,ht.height,S.format,S.type);for(let et of S.layerUpdates){let Tt=ht.data.subarray(et*K/ht.data.BYTES_PER_ELEMENT,(et+1)*K/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,ht.width,ht.height,1,It,Gt,Tt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,It,Gt,ht.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Wt,ht.width,ht.height,ht.depth,0,It,Gt,ht.data);else if(S.isData3DTexture)Jt?(xe&&e.texStorage3D(s.TEXTURE_3D,vt,Wt,ht.width,ht.height,ht.depth),k&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,It,Gt,ht.data)):e.texImage3D(s.TEXTURE_3D,0,Wt,ht.width,ht.height,ht.depth,0,It,Gt,ht.data);else if(S.isFramebufferTexture){if(xe)if(Jt)e.texStorage2D(s.TEXTURE_2D,vt,Wt,ht.width,ht.height);else{let K=ht.width,et=ht.height;for(let Tt=0;Tt<vt;Tt++)e.texImage2D(s.TEXTURE_2D,Tt,Wt,K,et,0,It,Gt,null),K>>=1,et>>=1}}else if(Zt.length>0){if(Jt&&xe){let K=bt(Zt[0]);e.texStorage2D(s.TEXTURE_2D,vt,Wt,K.width,K.height)}for(let K=0,et=Zt.length;K<et;K++)At=Zt[K],Jt?k&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,It,Gt,At):e.texImage2D(s.TEXTURE_2D,K,Wt,It,Gt,At);S.generateMipmaps=!1}else if(Jt){if(xe){let K=bt(ht);e.texStorage2D(s.TEXTURE_2D,vt,Wt,K.width,K.height)}k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,It,Gt,ht)}else e.texImage2D(s.TEXTURE_2D,0,Wt,It,Gt,ht);p(S)&&g(tt),Dt.__version=nt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function at(I,S,V){if(S.image.length!==6)return;let tt=Ht(I,S),rt=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+V);let nt=n.get(rt);if(rt.version!==nt.__version||tt===!0){e.activeTexture(s.TEXTURE0+V);let Dt=le.getPrimaries(le.workingColorSpace),mt=S.colorSpace===Gi?null:le.getPrimaries(S.colorSpace),wt=S.colorSpace===Gi||Dt===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let ie=S.isCompressedTexture||S.image[0].isCompressedTexture,ht=S.image[0]&&S.image[0].isDataTexture,It=[];for(let et=0;et<6;et++)!ie&&!ht?It[et]=x(S.image[et],!0,i.maxCubemapSize):It[et]=ht?S.image[et].image:S.image[et],It[et]=Vt(S,It[et]);let Gt=It[0],Wt=r.convert(S.format,S.colorSpace),At=r.convert(S.type),Zt=_(S.internalFormat,Wt,At,S.colorSpace),Jt=S.isVideoTexture!==!0,xe=nt.__version===void 0||tt===!0,k=rt.dataReady,vt=R(S,Gt);Pt(s.TEXTURE_CUBE_MAP,S);let K;if(ie){Jt&&xe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,Zt,Gt.width,Gt.height);for(let et=0;et<6;et++){K=It[et].mipmaps;for(let Tt=0;Tt<K.length;Tt++){let St=K[Tt];S.format!==Wn?Wt!==null?Jt?k&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,0,0,St.width,St.height,Wt,St.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,Zt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,0,0,St.width,St.height,Wt,At,St.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,Zt,St.width,St.height,0,Wt,At,St.data)}}}else{if(K=S.mipmaps,Jt&&xe){K.length>0&&vt++;let et=bt(It[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,Zt,et.width,et.height)}for(let et=0;et<6;et++)if(ht){Jt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,It[et].width,It[et].height,Wt,At,It[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Zt,It[et].width,It[et].height,0,Wt,At,It[et].data);for(let Tt=0;Tt<K.length;Tt++){let Qt=K[Tt].image[et].image;Jt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,0,0,Qt.width,Qt.height,Wt,At,Qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,Zt,Qt.width,Qt.height,0,Wt,At,Qt.data)}}else{Jt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Wt,At,It[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Zt,Wt,At,It[et]);for(let Tt=0;Tt<K.length;Tt++){let St=K[Tt];Jt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,0,0,Wt,At,St.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,Zt,Wt,At,St.image[et])}}}p(S)&&g(s.TEXTURE_CUBE_MAP),nt.__version=rt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Rt(I,S,V,tt,rt,nt){let Dt=r.convert(V.format,V.colorSpace),mt=r.convert(V.type),wt=_(V.internalFormat,Dt,mt,V.colorSpace),ie=n.get(S),ht=n.get(V);if(ht.__renderTarget=S,!ie.__hasExternalTextures){let It=Math.max(1,S.width>>nt),Gt=Math.max(1,S.height>>nt);rt===s.TEXTURE_3D||rt===s.TEXTURE_2D_ARRAY?e.texImage3D(rt,nt,wt,It,Gt,S.depth,0,Dt,mt,null):e.texImage2D(rt,nt,wt,It,Gt,0,Dt,mt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),gt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,rt,ht.__webglTexture,0,st(S)):(rt===s.TEXTURE_2D||rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,tt,rt,ht.__webglTexture,nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(I,S,V){if(s.bindRenderbuffer(s.RENDERBUFFER,I),S.depthBuffer){let tt=S.depthTexture,rt=tt&&tt.isDepthTexture?tt.type:null,nt=y(S.stencilBuffer,rt),Dt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=st(S);gt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt,nt,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,nt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,nt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Dt,s.RENDERBUFFER,I)}else{let tt=S.textures;for(let rt=0;rt<tt.length;rt++){let nt=tt[rt],Dt=r.convert(nt.format,nt.colorSpace),mt=r.convert(nt.type),wt=_(nt.internalFormat,Dt,mt,nt.colorSpace),ie=st(S);V&&gt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,wt,S.width,S.height):gt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,wt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,wt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function F(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let tt=n.get(S.depthTexture);tt.__renderTarget=S,(!tt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);let rt=tt.__webglTexture,nt=st(S);if(S.depthTexture.format===tr)gt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0);else if(S.depthTexture.format===or)gt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function it(I){let S=n.get(I),V=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let tt=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),tt){let rt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,tt.removeEventListener("dispose",rt)};tt.addEventListener("dispose",rt),S.__depthDisposeCallback=rt}S.__boundDepthTexture=tt}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");F(S.__webglFramebuffer,I)}else if(V){S.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[tt]),S.__webglDepthbuffer[tt]===void 0)S.__webglDepthbuffer[tt]=s.createRenderbuffer(),dt(S.__webglDepthbuffer[tt],I,!1);else{let rt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=S.__webglDepthbuffer[tt];s.bindRenderbuffer(s.RENDERBUFFER,nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),dt(S.__webglDepthbuffer,I,!1);else{let tt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,rt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function W(I,S,V){let tt=n.get(I);S!==void 0&&Rt(tt.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&it(I)}function $(I){let S=I.texture,V=n.get(I),tt=n.get(S);I.addEventListener("dispose",C);let rt=I.textures,nt=I.isWebGLCubeRenderTarget===!0,Dt=rt.length>1;if(Dt||(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=S.version,a.memory.textures++),nt){V.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[mt]=[];for(let wt=0;wt<S.mipmaps.length;wt++)V.__webglFramebuffer[mt][wt]=s.createFramebuffer()}else V.__webglFramebuffer[mt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let mt=0;mt<S.mipmaps.length;mt++)V.__webglFramebuffer[mt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Dt)for(let mt=0,wt=rt.length;mt<wt;mt++){let ie=n.get(rt[mt]);ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture(),a.memory.textures++)}if(I.samples>0&&gt(I)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let mt=0;mt<rt.length;mt++){let wt=rt[mt];V.__webglColorRenderbuffer[mt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[mt]);let ie=r.convert(wt.format,wt.colorSpace),ht=r.convert(wt.type),It=_(wt.internalFormat,ie,ht,wt.colorSpace,I.isXRRenderTarget===!0),Gt=st(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,It,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,V.__webglColorRenderbuffer[mt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(V.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(nt){e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),Pt(s.TEXTURE_CUBE_MAP,S);for(let mt=0;mt<6;mt++)if(S.mipmaps&&S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)Rt(V.__webglFramebuffer[mt][wt],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,wt);else Rt(V.__webglFramebuffer[mt],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);p(S)&&g(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let mt=0,wt=rt.length;mt<wt;mt++){let ie=rt[mt],ht=n.get(ie);e.bindTexture(s.TEXTURE_2D,ht.__webglTexture),Pt(s.TEXTURE_2D,ie),Rt(V.__webglFramebuffer,I,ie,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,0),p(ie)&&g(s.TEXTURE_2D)}e.unbindTexture()}else{let mt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(mt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(mt,tt.__webglTexture),Pt(mt,S),S.mipmaps&&S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)Rt(V.__webglFramebuffer[wt],I,S,s.COLOR_ATTACHMENT0,mt,wt);else Rt(V.__webglFramebuffer,I,S,s.COLOR_ATTACHMENT0,mt,0);p(S)&&g(mt),e.unbindTexture()}I.depthBuffer&&it(I)}function X(I){let S=I.textures;for(let V=0,tt=S.length;V<tt;V++){let rt=S[V];if(p(rt)){let nt=v(I),Dt=n.get(rt).__webglTexture;e.bindTexture(nt,Dt),g(nt),e.unbindTexture()}}}let Q=[],D=[];function Mt(I){if(I.samples>0){if(gt(I)===!1){let S=I.textures,V=I.width,tt=I.height,rt=s.COLOR_BUFFER_BIT,nt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=n.get(I),mt=S.length>1;if(mt)for(let wt=0;wt<S.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let wt=0;wt<S.length;wt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(rt|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(rt|=s.STENCIL_BUFFER_BIT)),mt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Dt.__webglColorRenderbuffer[wt]);let ie=n.get(S[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ie,0)}s.blitFramebuffer(0,0,V,tt,0,0,V,tt,rt,s.NEAREST),c===!0&&(Q.length=0,D.length=0,Q.push(s.COLOR_ATTACHMENT0+wt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Q.push(nt),D.push(nt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),mt)for(let wt=0;wt<S.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,Dt.__webglColorRenderbuffer[wt]);let ie=n.get(S[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,ie,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let S=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function st(I){return Math.min(i.maxSamples,I.samples)}function gt(I){let S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ct(I){let S=a.render.frame;l.get(I)!==S&&(l.set(I,S),I.update())}function Vt(I,S){let V=I.colorSpace,tt=I.format,rt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==xr&&V!==Gi&&(le.getTransfer(V)===me?(tt!==Wn||rt!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function bt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=G,this.setTexture2DArray=O,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=W,this.setupRenderTarget=$,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=gt}function Gv(s,t){function e(n,i=Gi){let r,a=le.getTransfer(i);if(n===Ei)return s.UNSIGNED_BYTE;if(n===Gh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Wh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===jd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Kd)return s.BYTE;if(n===Qd)return s.SHORT;if(n===Wr)return s.UNSIGNED_SHORT;if(n===Vh)return s.INT;if(n===ys)return s.UNSIGNED_INT;if(n===si)return s.FLOAT;if(n===$n)return s.HALF_FLOAT;if(n===tf)return s.ALPHA;if(n===ef)return s.RGB;if(n===Wn)return s.RGBA;if(n===nf)return s.LUMINANCE;if(n===sf)return s.LUMINANCE_ALPHA;if(n===tr)return s.DEPTH_COMPONENT;if(n===or)return s.DEPTH_STENCIL;if(n===Xh)return s.RED;if(n===qh)return s.RED_INTEGER;if(n===rf)return s.RG;if(n===Yh)return s.RG_INTEGER;if(n===$h)return s.RGBA_INTEGER;if(n===Ya||n===$a||n===Za||n===Ja)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sc||n===Ec||n===Tc||n===Ac)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rc||n===Cc||n===Pc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rc||n===Cc)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ic||n===Lc||n===Dc||n===Uc||n===kc||n===Nc||n===Fc||n===zc||n===Bc||n===Oc||n===Hc||n===Vc||n===Gc||n===Wc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ic)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ka||n===Xc||n===qc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ka)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===af||n===Yc||n===$c||n===Zc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ar?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var uh=class extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},se=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wv={type:"move"},Hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),g=this._getHandJoint(h,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=l.position.distanceTo(u.position),d=.02,m=.005;h.inputState.pinching&&f>d+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=d-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wv)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qv=`
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

}`,dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new vn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ce({vertexShader:Xv,fragmentShader:qv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new Se(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fh=class extends $i{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,h=null,l=null,u=null,f=null,d=null,m=null,x=new dh,p=e.getContextAttributes(),g=null,v=null,_=[],y=[],R=new Z,w=null,C=new tn;C.viewport=new Me;let P=new tn;P.viewport=new Me;let M=[C,P],b=new uh,E=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let at=_[j];return at===void 0&&(at=new Hr,_[j]=at),at.getTargetRaySpace()},this.getControllerGrip=function(j){let at=_[j];return at===void 0&&(at=new Hr,_[j]=at),at.getGripSpace()},this.getHand=function(j){let at=_[j];return at===void 0&&(at=new Hr,_[j]=at),at.getHandSpace()};function U(j){let at=y.indexOf(j.inputSource);if(at===-1)return;let Rt=_[at];Rt!==void 0&&(Rt.update(j.inputSource,j.frame,h||a),Rt.dispatchEvent({type:j.type,data:j.inputSource}))}function N(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",G);for(let j=0;j<_.length;j++){let at=y[j];at!==null&&(y[j]=null,_[j].disconnect(at))}E=null,L=null,x.reset(),t.setRenderTarget(g),d=null,f=null,u=null,i=null,v=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(j){h=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",N),i.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){let at={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,at),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new hn(d.framebufferWidth,d.framebufferHeight,{format:Wn,type:Ei,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let at=null,Rt=null,dt=null;p.depth&&(dt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=p.stencil?or:tr,Rt=p.stencil?ar:ys);let F={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(F),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new hn(f.textureWidth,f.textureHeight,{format:Wn,type:Ei,depthTexture:new ho(f.textureWidth,f.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await i.requestReferenceSpace(o),Ht.setContext(i),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(j){for(let at=0;at<j.removed.length;at++){let Rt=j.removed[at],dt=y.indexOf(Rt);dt>=0&&(y[dt]=null,_[dt].disconnect(Rt))}for(let at=0;at<j.added.length;at++){let Rt=j.added[at],dt=y.indexOf(Rt);if(dt===-1){for(let it=0;it<_.length;it++)if(it>=y.length){y.push(Rt),dt=it;break}else if(y[it]===null){y[it]=Rt,dt=it;break}if(dt===-1)break}let F=_[dt];F&&F.connect(Rt)}}let O=new A,J=new A;function H(j,at,Rt){O.setFromMatrixPosition(at.matrixWorld),J.setFromMatrixPosition(Rt.matrixWorld);let dt=O.distanceTo(J),F=at.projectionMatrix.elements,it=Rt.projectionMatrix.elements,W=F[14]/(F[10]-1),$=F[14]/(F[10]+1),X=(F[9]+1)/F[5],Q=(F[9]-1)/F[5],D=(F[8]-1)/F[0],Mt=(it[8]+1)/it[0],st=W*D,gt=W*Mt,ct=dt/(-D+Mt),Vt=ct*-D;if(at.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Vt),j.translateZ(ct),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),F[10]===-1)j.projectionMatrix.copy(at.projectionMatrix),j.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let bt=W+ct,I=$+ct,S=st-Vt,V=gt+(dt-Vt),tt=X*$/I*bt,rt=Q*$/I*bt;j.projectionMatrix.makePerspective(S,V,tt,rt,bt,I),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function lt(j,at){at===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(at.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let at=j.near,Rt=j.far;x.texture!==null&&(x.depthNear>0&&(at=x.depthNear),x.depthFar>0&&(Rt=x.depthFar)),b.near=P.near=C.near=at,b.far=P.far=C.far=Rt,(E!==b.near||L!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,L=b.far),C.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,b.layers.mask=C.layers.mask|P.layers.mask;let dt=j.parent,F=b.cameras;lt(b,dt);for(let it=0;it<F.length;it++)lt(F[it],dt);F.length===2?H(b,C,P):b.projectionMatrix.copy(C.projectionMatrix),ot(j,b,dt)};function ot(j,at,Rt){Rt===null?j.matrix.copy(at.matrixWorld):(j.matrix.copy(Rt.matrixWorld),j.matrix.invert(),j.matrix.multiply(at.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(at.projectionMatrix),j.projectionMatrixInverse.copy(at.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=to*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let ut=null;function Pt(j,at){if(l=at.getViewerPose(h||a),m=at,l!==null){let Rt=l.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let dt=!1;Rt.length!==b.cameras.length&&(b.cameras.length=0,dt=!0);for(let it=0;it<Rt.length;it++){let W=Rt[it],$=null;if(d!==null)$=d.getViewport(W);else{let Q=u.getViewSubImage(f,W);$=Q.viewport,it===0&&(t.setRenderTargetTextures(v,Q.colorTexture,f.ignoreDepthValues?void 0:Q.depthStencilTexture),t.setRenderTarget(v))}let X=M[it];X===void 0&&(X=new tn,X.layers.enable(it),X.viewport=new Me,M[it]=X),X.matrix.fromArray(W.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(W.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set($.x,$.y,$.width,$.height),it===0&&(b.matrix.copy(X.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),dt===!0&&b.cameras.push(X)}let F=i.enabledFeatures;if(F&&F.includes("depth-sensing")){let it=u.getDepthInformation(Rt[0]);it&&it.isValid&&it.texture&&x.init(t,it,i.renderState)}}for(let Rt=0;Rt<_.length;Rt++){let dt=y[Rt],F=_[Rt];dt!==null&&F!==void 0&&F.update(dt,at,h||a)}ut&&ut(j,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),m=null}let Ht=new df;Ht.setAnimationLoop(Pt),this.setAnimationLoop=function(j){ut=j},this.dispose=function(){}}},ds=new He,Yv=new Kt;function $v(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,uf(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,_,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),l(p,g)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?c(p,g,v,_):g.isSpriteMaterial?h(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===en&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===en&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=t.get(g),_=v.envMap,y=v.envMapRotation;_&&(p.envMap.value=_,ds.copy(y),ds.x*=-1,ds.y*=-1,ds.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),p.envMapRotation.value.setFromMatrix4(Yv.makeRotationFromEuler(ds)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,v,_){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=_*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,v){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===en&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let v=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Zv(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){let y=_.program;n.uniformBlockBinding(v,y)}function h(v,_){let y=i[v.id];y===void 0&&(m(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",p));let R=_.program;n.updateUBOMapping(v,R);let w=t.render.frame;r[v.id]!==w&&(f(v),r[v.id]=w)}function l(v){let _=u();v.__bindingPointIndex=_;let y=s.createBuffer(),R=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let _=i[v.id],y=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let w=0,C=y.length;w<C;w++){let P=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,b=P.length;M<b;M++){let E=P[M];if(d(E,w,M,R)===!0){let L=E.__offset,U=Array.isArray(E.value)?E.value:[E.value],N=0;for(let G=0;G<U.length;G++){let O=U[G],J=x(O);typeof O=="number"||typeof O=="boolean"?(E.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,L+N,E.__data)):O.isMatrix3?(E.__data[0]=O.elements[0],E.__data[1]=O.elements[1],E.__data[2]=O.elements[2],E.__data[3]=0,E.__data[4]=O.elements[3],E.__data[5]=O.elements[4],E.__data[6]=O.elements[5],E.__data[7]=0,E.__data[8]=O.elements[6],E.__data[9]=O.elements[7],E.__data[10]=O.elements[8],E.__data[11]=0):(O.toArray(E.__data,N),N+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,_,y,R){let w=v.value,C=_+"_"+y;if(R[C]===void 0)return typeof w=="number"||typeof w=="boolean"?R[C]=w:R[C]=w.clone(),!0;{let P=R[C];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[C]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function m(v){let _=v.uniforms,y=0,R=16;for(let C=0,P=_.length;C<P;C++){let M=Array.isArray(_[C])?_[C]:[_[C]];for(let b=0,E=M.length;b<E;b++){let L=M[b],U=Array.isArray(L.value)?L.value:[L.value];for(let N=0,G=U.length;N<G;N++){let O=U[N],J=x(O),H=y%R,lt=H%J.boundary,ot=H+lt;y+=lt,ot!==0&&R-ot<J.storage&&(y+=R-ot),L.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=J.storage}}}let w=y%R;return w>0&&(y+=R-w),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){let _=v.target;_.removeEventListener("dispose",p);let y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function g(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:h,dispose:g}}var uo=class{constructor(t={}){let{canvas:e=t0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let m=new Uint32Array(4),x=new Int32Array(4),p=null,g=null,v=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this.toneMapping=Xi,this.toneMappingExposure=1;let y=this,R=!1,w=0,C=0,P=null,M=-1,b=null,E=new Me,L=new Me,U=null,N=new yt(0),G=0,O=e.width,J=e.height,H=1,lt=null,ot=null,ut=new Me(0,0,O,J),Pt=new Me(0,0,O,J),Ht=!1,j=new Xr,at=!1,Rt=!1,dt=new Kt,F=new Kt,it=new A,W=new Me,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},X=!1;function Q(){return P===null?H:1}let D=n;function Mt(T,z){return e.getContext(T,z)}try{let T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",St,!1),D===null){let z="webgl2";if(D=Mt(z,T),D===null)throw Mt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let st,gt,ct,Vt,bt,I,S,V,tt,rt,nt,Dt,mt,wt,ie,ht,It,Gt,Wt,At,Zt,Jt,xe,k;function vt(){st=new ux(D),st.init(),Jt=new Gv(D,st),gt=new rx(D,st,t,Jt),ct=new Ov(D,st),gt.reverseDepthBuffer&&f&&ct.buffers.depth.setReversed(!0),Vt=new px(D),bt=new Av,I=new Vv(D,st,ct,bt,gt,Jt,Vt),S=new ox(y),V=new hx(y),tt=new M0(D),xe=new ix(D,tt),rt=new dx(D,tt,Vt,xe),nt=new gx(D,rt,tt,Vt),Wt=new mx(D,gt,I),ht=new ax(bt),Dt=new Tv(y,S,V,st,gt,xe,ht),mt=new $v(y,bt),wt=new Cv,ie=new kv(st),Gt=new nx(y,S,V,ct,nt,d,c),It=new zv(y,nt,gt),k=new Zv(D,Vt,gt,ct),At=new sx(D,st,Vt),Zt=new fx(D,st,Vt),Vt.programs=Dt.programs,y.capabilities=gt,y.extensions=st,y.properties=bt,y.renderLists=wt,y.shadowMap=It,y.state=ct,y.info=Vt}vt();let K=new fh(y,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=st.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=st.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(O,J,!1))},this.getSize=function(T){return T.set(O,J)},this.setSize=function(T,z,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,J=z,e.width=Math.floor(T*H),e.height=Math.floor(z*H),q===!0&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(O*H,J*H).floor()},this.setDrawingBufferSize=function(T,z,q){O=T,J=z,H=q,e.width=Math.floor(T*q),e.height=Math.floor(z*q),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(ut)},this.setViewport=function(T,z,q,Y){T.isVector4?ut.set(T.x,T.y,T.z,T.w):ut.set(T,z,q,Y),ct.viewport(E.copy(ut).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(Pt)},this.setScissor=function(T,z,q,Y){T.isVector4?Pt.set(T.x,T.y,T.z,T.w):Pt.set(T,z,q,Y),ct.scissor(L.copy(Pt).multiplyScalar(H).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(T){ct.setScissorTest(Ht=T)},this.setOpaqueSort=function(T){lt=T},this.setTransparentSort=function(T){ot=T},this.getClearColor=function(T){return T.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(T=!0,z=!0,q=!0){let Y=0;if(T){let B=!1;if(P!==null){let pt=P.texture.format;B=pt===$h||pt===Yh||pt===qh}if(B){let pt=P.texture.type,Et=pt===Ei||pt===ys||pt===Wr||pt===ar||pt===Gh||pt===Wh,kt=Gt.getClearColor(),Nt=Gt.getClearAlpha(),Yt=kt.r,jt=kt.g,Ft=kt.b;Et?(m[0]=Yt,m[1]=jt,m[2]=Ft,m[3]=Nt,D.clearBufferuiv(D.COLOR,0,m)):(x[0]=Yt,x[1]=jt,x[2]=Ft,x[3]=Nt,D.clearBufferiv(D.COLOR,0,x))}else Y|=D.COLOR_BUFFER_BIT}z&&(Y|=D.DEPTH_BUFFER_BIT),q&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),wt.dispose(),ie.dispose(),bt.dispose(),S.dispose(),V.dispose(),nt.dispose(),xe.dispose(),k.dispose(),Dt.dispose(),K.dispose(),K.removeEventListener("sessionstart",Ru),K.removeEventListener("sessionend",Cu),as.stop()};function et(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let T=Vt.autoReset,z=It.enabled,q=It.autoUpdate,Y=It.needsUpdate,B=It.type;vt(),Vt.autoReset=T,It.enabled=z,It.autoUpdate=q,It.needsUpdate=Y,It.type=B}function St(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Qt(T){let z=T.target;z.removeEventListener("dispose",Qt),Ne(z)}function Ne(T){nn(T),bt.remove(T)}function nn(T){let z=bt.get(T).programs;z!==void 0&&(z.forEach(function(q){Dt.releaseProgram(q)}),T.isShaderMaterial&&Dt.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,q,Y,B,pt){z===null&&(z=$);let Et=B.isMesh&&B.matrixWorld.determinant()<0,kt=gp(T,z,q,Y,B);ct.setMaterial(Y,Et);let Nt=q.index,Yt=1;if(Y.wireframe===!0){if(Nt=rt.getWireframeAttribute(q),Nt===void 0)return;Yt=2}let jt=q.drawRange,Ft=q.attributes.position,he=jt.start*Yt,Ee=(jt.start+jt.count)*Yt;pt!==null&&(he=Math.max(he,pt.start*Yt),Ee=Math.min(Ee,(pt.start+pt.count)*Yt)),Nt!==null?(he=Math.max(he,0),Ee=Math.min(Ee,Nt.count)):Ft!=null&&(he=Math.max(he,0),Ee=Math.min(Ee,Ft.count));let Ae=Ee-he;if(Ae<0||Ae===1/0)return;xe.setup(B,Y,kt,q,Nt);let xn,fe=At;if(Nt!==null&&(xn=tt.get(Nt),fe=Zt,fe.setIndex(xn)),B.isMesh)Y.wireframe===!0?(ct.setLineWidth(Y.wireframeLinewidth*Q()),fe.setMode(D.LINES)):fe.setMode(D.TRIANGLES);else if(B.isLine){let Bt=Y.linewidth;Bt===void 0&&(Bt=1),ct.setLineWidth(Bt*Q()),B.isLineSegments?fe.setMode(D.LINES):B.isLineLoop?fe.setMode(D.LINE_LOOP):fe.setMode(D.LINE_STRIP)}else B.isPoints?fe.setMode(D.POINTS):B.isSprite&&fe.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)fe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))fe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Bt=B._multiDrawStarts,pi=B._multiDrawCounts,pe=B._multiDrawCount,On=Nt?tt.get(Nt).bytesPerElement:1,Ls=bt.get(Y).currentProgram.getUniforms();for(let wn=0;wn<pe;wn++)Ls.setValue(D,"_gl_DrawID",wn),fe.render(Bt[wn]/On,pi[wn])}else if(B.isInstancedMesh)fe.renderInstances(he,Ae,B.count);else if(q.isInstancedBufferGeometry){let Bt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,pi=Math.min(q.instanceCount,Bt);fe.renderInstances(he,Ae,pi)}else fe.render(he,Ae)};function ve(T,z,q){T.transparent===!0&&T.side===be&&T.forceSinglePass===!1?(T.side=en,T.needsUpdate=!0,ma(T,z,q),T.side=Yi,T.needsUpdate=!0,ma(T,z,q),T.side=be):ma(T,z,q)}this.compile=function(T,z,q=null){q===null&&(q=T),g=ie.get(q),g.init(z),_.push(g),q.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),T!==q&&T.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights();let Y=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let pt=B.material;if(pt)if(Array.isArray(pt))for(let Et=0;Et<pt.length;Et++){let kt=pt[Et];ve(kt,q,B),Y.add(kt)}else ve(pt,q,B),Y.add(pt)}),_.pop(),g=null,Y},this.compileAsync=function(T,z,q=null){let Y=this.compile(T,z,q);return new Promise(B=>{function pt(){if(Y.forEach(function(Et){bt.get(Et).currentProgram.isReady()&&Y.delete(Et)}),Y.size===0){B(T);return}setTimeout(pt,10)}st.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Bn=null;function fi(T){Bn&&Bn(T)}function Ru(){as.stop()}function Cu(){as.start()}let as=new df;as.setAnimationLoop(fi),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(T){Bn=T,K.setAnimationLoop(T),T===null?as.stop():as.start()},K.addEventListener("sessionstart",Ru),K.addEventListener("sessionend",Cu),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(z),z=K.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,z,P),g=ie.get(T,_.length),g.init(z),_.push(g),F.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),j.setFromProjectionMatrix(F),Rt=this.localClippingEnabled,at=ht.init(this.clippingPlanes,Rt),p=wt.get(T,v.length),p.init(),v.push(p),K.enabled===!0&&K.isPresenting===!0){let pt=y.xr.getDepthSensingMesh();pt!==null&&Cl(pt,z,-1/0,y.sortObjects)}Cl(T,z,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(lt,ot),X=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,X&&Gt.addToRenderList(p,T),this.info.render.frame++,at===!0&&ht.beginShadows();let q=g.state.shadowsArray;It.render(q,T,z),at===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=p.opaque,B=p.transmissive;if(g.setupLights(),z.isArrayCamera){let pt=z.cameras;if(B.length>0)for(let Et=0,kt=pt.length;Et<kt;Et++){let Nt=pt[Et];Iu(Y,B,T,Nt)}X&&Gt.render(T);for(let Et=0,kt=pt.length;Et<kt;Et++){let Nt=pt[Et];Pu(p,T,Nt,Nt.viewport)}}else B.length>0&&Iu(Y,B,T,z),X&&Gt.render(T),Pu(p,T,z);P!==null&&(I.updateMultisampleRenderTarget(P),I.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(y,T,z),xe.resetDefaultState(),M=-1,b=null,_.pop(),_.length>0?(g=_[_.length-1],at===!0&&ht.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Cl(T,z,q,Y){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){Y&&W.setFromMatrixPosition(T.matrixWorld).applyMatrix4(F);let Et=nt.update(T),kt=T.material;kt.visible&&p.push(T,Et,kt,q,W.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||j.intersectsObject(T))){let Et=nt.update(T),kt=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),W.copy(T.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),W.copy(Et.boundingSphere.center)),W.applyMatrix4(T.matrixWorld).applyMatrix4(F)),Array.isArray(kt)){let Nt=Et.groups;for(let Yt=0,jt=Nt.length;Yt<jt;Yt++){let Ft=Nt[Yt],he=kt[Ft.materialIndex];he&&he.visible&&p.push(T,Et,he,q,W.z,Ft)}}else kt.visible&&p.push(T,Et,kt,q,W.z,null)}}let pt=T.children;for(let Et=0,kt=pt.length;Et<kt;Et++)Cl(pt[Et],z,q,Y)}function Pu(T,z,q,Y){let B=T.opaque,pt=T.transmissive,Et=T.transparent;g.setupLightsView(q),at===!0&&ht.setGlobalState(y.clippingPlanes,q),Y&&ct.viewport(E.copy(Y)),B.length>0&&pa(B,z,q),pt.length>0&&pa(pt,z,q),Et.length>0&&pa(Et,z,q),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Iu(T,z,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new hn(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?$n:Ei,minFilter:xs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let pt=g.state.transmissionRenderTarget[Y.id],Et=Y.viewport||E;pt.setSize(Et.z,Et.w);let kt=y.getRenderTarget();y.setRenderTarget(pt),y.getClearColor(N),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),X&&Gt.render(q);let Nt=y.toneMapping;y.toneMapping=Xi;let Yt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),at===!0&&ht.setGlobalState(y.clippingPlanes,Y),pa(T,q,Y),I.updateMultisampleRenderTarget(pt),I.updateRenderTargetMipmap(pt),st.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Ft=0,he=z.length;Ft<he;Ft++){let Ee=z[Ft],Ae=Ee.object,xn=Ee.geometry,fe=Ee.material,Bt=Ee.group;if(fe.side===be&&Ae.layers.test(Y.layers)){let pi=fe.side;fe.side=en,fe.needsUpdate=!0,Lu(Ae,q,Y,xn,fe,Bt),fe.side=pi,fe.needsUpdate=!0,jt=!0}}jt===!0&&(I.updateMultisampleRenderTarget(pt),I.updateRenderTargetMipmap(pt))}y.setRenderTarget(kt),y.setClearColor(N,G),Yt!==void 0&&(Y.viewport=Yt),y.toneMapping=Nt}function pa(T,z,q){let Y=z.isScene===!0?z.overrideMaterial:null;for(let B=0,pt=T.length;B<pt;B++){let Et=T[B],kt=Et.object,Nt=Et.geometry,Yt=Y===null?Et.material:Y,jt=Et.group;kt.layers.test(q.layers)&&Lu(kt,z,q,Nt,Yt,jt)}}function Lu(T,z,q,Y,B,pt){T.onBeforeRender(y,z,q,Y,B,pt),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(y,z,q,Y,T,pt),B.transparent===!0&&B.side===be&&B.forceSinglePass===!1?(B.side=en,B.needsUpdate=!0,y.renderBufferDirect(q,z,Y,B,T,pt),B.side=Yi,B.needsUpdate=!0,y.renderBufferDirect(q,z,Y,B,T,pt),B.side=be):y.renderBufferDirect(q,z,Y,B,T,pt),T.onAfterRender(y,z,q,Y,B,pt)}function ma(T,z,q){z.isScene!==!0&&(z=$);let Y=bt.get(T),B=g.state.lights,pt=g.state.shadowsArray,Et=B.state.version,kt=Dt.getParameters(T,B.state,pt,z,q),Nt=Dt.getProgramCacheKey(kt),Yt=Y.programs;Y.environment=T.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(T.isMeshStandardMaterial?V:S).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Yt===void 0&&(T.addEventListener("dispose",Qt),Yt=new Map,Y.programs=Yt);let jt=Yt.get(Nt);if(jt!==void 0){if(Y.currentProgram===jt&&Y.lightsStateVersion===Et)return Uu(T,kt),jt}else kt.uniforms=Dt.getUniforms(T),T.onBeforeCompile(kt,y),jt=Dt.acquireProgram(kt,Nt),Yt.set(Nt,jt),Y.uniforms=kt.uniforms;let Ft=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ft.clippingPlanes=ht.uniform),Uu(T,kt),Y.needsLights=vp(T),Y.lightsStateVersion=Et,Y.needsLights&&(Ft.ambientLightColor.value=B.state.ambient,Ft.lightProbe.value=B.state.probe,Ft.directionalLights.value=B.state.directional,Ft.directionalLightShadows.value=B.state.directionalShadow,Ft.spotLights.value=B.state.spot,Ft.spotLightShadows.value=B.state.spotShadow,Ft.rectAreaLights.value=B.state.rectArea,Ft.ltc_1.value=B.state.rectAreaLTC1,Ft.ltc_2.value=B.state.rectAreaLTC2,Ft.pointLights.value=B.state.point,Ft.pointLightShadows.value=B.state.pointShadow,Ft.hemisphereLights.value=B.state.hemi,Ft.directionalShadowMap.value=B.state.directionalShadowMap,Ft.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ft.spotShadowMap.value=B.state.spotShadowMap,Ft.spotLightMatrix.value=B.state.spotLightMatrix,Ft.spotLightMap.value=B.state.spotLightMap,Ft.pointShadowMap.value=B.state.pointShadowMap,Ft.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=jt,Y.uniformsList=null,jt}function Du(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=nr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Uu(T,z){let q=bt.get(T);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function gp(T,z,q,Y,B){z.isScene!==!0&&(z=$),I.resetTextureUnits();let pt=z.fog,Et=Y.isMeshStandardMaterial?z.environment:null,kt=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:xr,Nt=(Y.isMeshStandardMaterial?V:S).get(Y.envMap||Et),Yt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,jt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ft=!!q.morphAttributes.position,he=!!q.morphAttributes.normal,Ee=!!q.morphAttributes.color,Ae=Xi;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ae=y.toneMapping);let xn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,fe=xn!==void 0?xn.length:0,Bt=bt.get(Y),pi=g.state.lights;if(at===!0&&(Rt===!0||T!==b)){let In=T===b&&Y.id===M;ht.setState(Y,T,In)}let pe=!1;Y.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==pi.state.version||Bt.outputColorSpace!==kt||B.isBatchedMesh&&Bt.batching===!1||!B.isBatchedMesh&&Bt.batching===!0||B.isBatchedMesh&&Bt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Bt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Bt.instancing===!1||!B.isInstancedMesh&&Bt.instancing===!0||B.isSkinnedMesh&&Bt.skinning===!1||!B.isSkinnedMesh&&Bt.skinning===!0||B.isInstancedMesh&&Bt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Bt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Bt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Bt.instancingMorph===!1&&B.morphTexture!==null||Bt.envMap!==Nt||Y.fog===!0&&Bt.fog!==pt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ht.numPlanes||Bt.numIntersection!==ht.numIntersection)||Bt.vertexAlphas!==Yt||Bt.vertexTangents!==jt||Bt.morphTargets!==Ft||Bt.morphNormals!==he||Bt.morphColors!==Ee||Bt.toneMapping!==Ae||Bt.morphTargetsCount!==fe)&&(pe=!0):(pe=!0,Bt.__version=Y.version);let On=Bt.currentProgram;pe===!0&&(On=ma(Y,z,B));let Ls=!1,wn=!1,Ar=!1,Re=On.getUniforms(),ti=Bt.uniforms;if(ct.useProgram(On.program)&&(Ls=!0,wn=!0,Ar=!0),Y.id!==M&&(M=Y.id,wn=!0),Ls||b!==T){ct.buffers.depth.getReversed()?(dt.copy(T.projectionMatrix),n0(dt),i0(dt),Re.setValue(D,"projectionMatrix",dt)):Re.setValue(D,"projectionMatrix",T.projectionMatrix),Re.setValue(D,"viewMatrix",T.matrixWorldInverse);let ki=Re.map.cameraPosition;ki!==void 0&&ki.setValue(D,it.setFromMatrixPosition(T.matrixWorld)),gt.logarithmicDepthBuffer&&Re.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Re.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,wn=!0,Ar=!0)}if(B.isSkinnedMesh){Re.setOptional(D,B,"bindMatrix"),Re.setOptional(D,B,"bindMatrixInverse");let In=B.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Re.setValue(D,"boneTexture",In.boneTexture,I))}B.isBatchedMesh&&(Re.setOptional(D,B,"batchingTexture"),Re.setValue(D,"batchingTexture",B._matricesTexture,I),Re.setOptional(D,B,"batchingIdTexture"),Re.setValue(D,"batchingIdTexture",B._indirectTexture,I),Re.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&Re.setValue(D,"batchingColorTexture",B._colorsTexture,I));let Rr=q.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0)&&Wt.update(B,q,On),(wn||Bt.receiveShadow!==B.receiveShadow)&&(Bt.receiveShadow=B.receiveShadow,Re.setValue(D,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ti.envMap.value=Nt,ti.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(ti.envMapIntensity.value=z.environmentIntensity),wn&&(Re.setValue(D,"toneMappingExposure",y.toneMappingExposure),Bt.needsLights&&xp(ti,Ar),pt&&Y.fog===!0&&mt.refreshFogUniforms(ti,pt),mt.refreshMaterialUniforms(ti,Y,H,J,g.state.transmissionRenderTarget[T.id]),nr.upload(D,Du(Bt),ti,I)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(nr.upload(D,Du(Bt),ti,I),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Re.setValue(D,"center",B.center),Re.setValue(D,"modelViewMatrix",B.modelViewMatrix),Re.setValue(D,"normalMatrix",B.normalMatrix),Re.setValue(D,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let In=Y.uniformsGroups;for(let ki=0,Ni=In.length;ki<Ni;ki++){let ku=In[ki];k.update(ku,On),k.bind(ku,On)}}return On}function xp(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function vp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,z,q){bt.get(T.texture).__webglTexture=z,bt.get(T.depthTexture).__webglTexture=q;let Y=bt.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){let q=bt.get(T);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,q=0){P=T,w=z,C=q;let Y=!0,B=null,pt=!1,Et=!1;if(T){let Nt=bt.get(T);if(Nt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(Nt.__webglFramebuffer===void 0)I.setupRenderTarget(T);else if(Nt.__hasExternalTextures)I.rebindTextures(T,bt.get(T.texture).__webglTexture,bt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ft=T.depthTexture;if(Nt.__boundDepthTexture!==Ft){if(Ft!==null&&bt.has(Ft)&&(T.width!==Ft.image.width||T.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(T)}}let Yt=T.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Et=!0);let jt=bt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(jt[z])?B=jt[z][q]:B=jt[z],pt=!0):T.samples>0&&I.useMultisampledRTT(T)===!1?B=bt.get(T).__webglMultisampledFramebuffer:Array.isArray(jt)?B=jt[q]:B=jt,E.copy(T.viewport),L.copy(T.scissor),U=T.scissorTest}else E.copy(ut).multiplyScalar(H).floor(),L.copy(Pt).multiplyScalar(H).floor(),U=Ht;if(ct.bindFramebuffer(D.FRAMEBUFFER,B)&&Y&&ct.drawBuffers(T,B),ct.viewport(E),ct.scissor(L),ct.setScissorTest(U),pt){let Nt=bt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Nt.__webglTexture,q)}else if(Et){let Nt=bt.get(T.texture),Yt=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nt.__webglTexture,q||0,Yt)}M=-1},this.readRenderTargetPixels=function(T,z,q,Y,B,pt,Et){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(kt=kt[Et]),kt){ct.bindFramebuffer(D.FRAMEBUFFER,kt);try{let Nt=T.texture,Yt=Nt.format,jt=Nt.type;if(!gt.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-Y&&q>=0&&q<=T.height-B&&D.readPixels(z,q,Y,B,Jt.convert(Yt),Jt.convert(jt),pt)}finally{let Nt=P!==null?bt.get(P).__webglFramebuffer:null;ct.bindFramebuffer(D.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(T,z,q,Y,B,pt,Et){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(kt=kt[Et]),kt){let Nt=T.texture,Yt=Nt.format,jt=Nt.type;if(!gt.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-Y&&q>=0&&q<=T.height-B){ct.bindFramebuffer(D.FRAMEBUFFER,kt);let Ft=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ft),D.bufferData(D.PIXEL_PACK_BUFFER,pt.byteLength,D.STREAM_READ),D.readPixels(z,q,Y,B,Jt.convert(Yt),Jt.convert(jt),0);let he=P!==null?bt.get(P).__webglFramebuffer:null;ct.bindFramebuffer(D.FRAMEBUFFER,he);let Ee=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await e0(D,Ee,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ft),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pt),D.deleteBuffer(Ft),D.deleteSync(Ee),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,q=0){T.isTexture!==!0&&(Br("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);let Y=Math.pow(2,-q),B=Math.floor(T.image.width*Y),pt=Math.floor(T.image.height*Y),Et=z!==null?z.x:0,kt=z!==null?z.y:0;I.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,Et,kt,B,pt),ct.unbindTexture()},this.copyTextureToTexture=function(T,z,q=null,Y=null,B=0){T.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,T=arguments[1],z=arguments[2],B=arguments[3]||0,q=null);let pt,Et,kt,Nt,Yt,jt,Ft,he,Ee,Ae=T.isCompressedTexture?T.mipmaps[B]:T.image;q!==null?(pt=q.max.x-q.min.x,Et=q.max.y-q.min.y,kt=q.isBox3?q.max.z-q.min.z:1,Nt=q.min.x,Yt=q.min.y,jt=q.isBox3?q.min.z:0):(pt=Ae.width,Et=Ae.height,kt=Ae.depth||1,Nt=0,Yt=0,jt=0),Y!==null?(Ft=Y.x,he=Y.y,Ee=Y.z):(Ft=0,he=0,Ee=0);let xn=Jt.convert(z.format),fe=Jt.convert(z.type),Bt;z.isData3DTexture?(I.setTexture3D(z,0),Bt=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(I.setTexture2DArray(z,0),Bt=D.TEXTURE_2D_ARRAY):(I.setTexture2D(z,0),Bt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);let pi=D.getParameter(D.UNPACK_ROW_LENGTH),pe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),On=D.getParameter(D.UNPACK_SKIP_PIXELS),Ls=D.getParameter(D.UNPACK_SKIP_ROWS),wn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ae.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ae.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Nt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Yt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,jt);let Ar=T.isDataArrayTexture||T.isData3DTexture,Re=z.isDataArrayTexture||z.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let ti=bt.get(T),Rr=bt.get(z),In=bt.get(ti.__renderTarget),ki=bt.get(Rr.__renderTarget);ct.bindFramebuffer(D.READ_FRAMEBUFFER,In.__webglFramebuffer),ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Ni=0;Ni<kt;Ni++)Ar&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(T).__webglTexture,B,jt+Ni),T.isDepthTexture?(Re&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(z).__webglTexture,B,Ee+Ni),D.blitFramebuffer(Nt,Yt,pt,Et,Ft,he,pt,Et,D.DEPTH_BUFFER_BIT,D.NEAREST)):Re?D.copyTexSubImage3D(Bt,B,Ft,he,Ee+Ni,Nt,Yt,pt,Et):D.copyTexSubImage2D(Bt,B,Ft,he,Ee+Ni,Nt,Yt,pt,Et);ct.bindFramebuffer(D.READ_FRAMEBUFFER,null),ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Re?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Bt,B,Ft,he,Ee,pt,Et,kt,xn,fe,Ae.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Bt,B,Ft,he,Ee,pt,Et,kt,xn,Ae.data):D.texSubImage3D(Bt,B,Ft,he,Ee,pt,Et,kt,xn,fe,Ae):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,Ft,he,pt,Et,xn,fe,Ae.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,Ft,he,Ae.width,Ae.height,xn,Ae.data):D.texSubImage2D(D.TEXTURE_2D,B,Ft,he,pt,Et,xn,fe,Ae);D.pixelStorei(D.UNPACK_ROW_LENGTH,pi),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,On),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ls),D.pixelStorei(D.UNPACK_SKIP_IMAGES,wn),B===0&&z.generateMipmaps&&D.generateMipmap(Bt),ct.unbindTexture()},this.copyTextureToTexture3D=function(T,z,q=null,Y=null,B=0){return T.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,T=arguments[2],z=arguments[3],B=arguments[4]||0),Br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,q,Y,B)},this.initRenderTarget=function(T){bt.get(T).__webglFramebuffer===void 0&&I.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?I.setTextureCube(T,0):T.isData3DTexture?I.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?I.setTexture2DArray(T,0):I.setTexture2D(T,0),ct.unbindTexture()},this.resetState=function(){w=0,C=0,P=null,ct.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}},fo=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new yt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var qr=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new He,this.environmentIntensity=1,this.environmentRotation=new He,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},po=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kc,this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new A,Yr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ni(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ni(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ni(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ni(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),i=_e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),i=_e(i,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},oi=class extends Ai{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ys,Dr=new A,$s=new A,Zs=new A,Js=new Z,Ur=new Z,xf=new Kt,Fa=new A,kr=new A,za=new A,Ud=new Z,ac=new Z,kd=new Z,Xn=class extends Ge{constructor(t=new oi){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new de;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new po(e,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new Yr(n,3,0,!1)),Ys.setAttribute("uv",new Yr(n,2,3,!1))}this.geometry=Ys,this.material=t,this.center=new Z(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),xf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-Zs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Ba(Fa.set(-.5,-.5,0),Zs,a,$s,i,r),Ba(kr.set(.5,-.5,0),Zs,a,$s,i,r),Ba(za.set(.5,.5,0),Zs,a,$s,i,r),Ud.set(0,0),ac.set(1,0),kd.set(1,1);let o=t.ray.intersectTriangle(Fa,kr,za,!1,Dr);if(o===null&&(Ba(kr.set(-.5,.5,0),Zs,a,$s,i,r),ac.set(0,1),o=t.ray.intersectTriangle(Fa,za,kr,!1,Dr),o===null))return;let c=t.ray.origin.distanceTo(Dr);c<t.near||c>t.far||e.push({distance:c,point:Dr.clone(),uv:Wi.getInterpolation(Dr,Fa,kr,za,Ud,ac,kd,new Z),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ba(s,t,e,n,i,r){Js.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ur.x=r*Js.x-i*Js.y,Ur.y=i*Js.x+r*Js.y):Ur.copy(Js),s.copy(t),s.x+=Ur.x,s.y+=Ur.y,s.applyMatrix4(xf)}var ph=class extends vn{constructor(t=null,e=1,n=1,i,r,a,o,c,h=Tn,l=Tn,u,f){super(null,a,o,c,h,l,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ri=class extends ne{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ks=new Kt,Nd=new Kt,Oa=[],Fd=new Ti,Jv=new Kt,Nr=new _t,Fr=new Zi,qn=class extends _t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ri(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Jv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),Fd.copy(t.boundingBox).applyMatrix4(Ks),this.boundingBox.union(Fd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),Fr.copy(t.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(Fr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),t.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ks),Nd.multiplyMatrices(n,Ks),Nr.matrixWorld=Nd,Nr.raycast(t,Oa);for(let a=0,o=Oa.length;a<o;a++){let c=Oa[a];c.instanceId=r,c.object=this,e.push(c)}Oa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ri(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ph(new Float32Array(i*this.count),i,this.count,Xh,si));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var mh=class extends Ai{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},zd=new Kt,gh=new so,Ha=new Zi,Va=new A,mo=class extends Ge{constructor(t=new de,e=new mh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(i),Ha.radius+=r,t.ray.intersectsSphere(Ha)===!1)return;zd.copy(i).invert(),gh.copy(t.ray).applyMatrix4(zd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let m=f,x=d;m<x;m++){let p=h.getX(m);Va.fromBufferAttribute(u,p),Bd(Va,p,c,i,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,x=d;m<x;m++)Va.fromBufferAttribute(u,m),Bd(Va,m,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Bd(s,t,e,n,i,r,a){let o=gh.distanceSqToPoint(s);if(o<e){let c=new A;gh.closestPointToPoint(s,c),c.applyMatrix4(n);let h=i.ray.origin.distanceTo(c);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var go=class extends vn{constructor(t,e,n,i,r,a,o,c,h){super(t,e,n,i,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),h=n[i]-a,h<0)o=i+1;else if(h>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let l=n[i],f=n[i+1]-l,d=(a-l)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new Z:new A);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new A,i=[],r=[],a=[],o=new A,c=new Kt;for(let d=0;d<=t;d++){let m=d/t;i[d]=this.getTangentAt(m,new A)}r[0]=new A,a[0]=new A;let h=Number.MAX_VALUE,l=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);l<=h&&(h=l,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),f<=h&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(je(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,m))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(je(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],d*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},$r=class extends Dn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new Z){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=h-this.aY;c=f*l-d*u+this.aX,h=f*u+d*l+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},xh=class extends $r{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Jh(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){i(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,l,u){let f=(a-r)/h-(o-r)/(h+l)+(o-a)/l,d=(o-a)/l-(c-a)/(l+u)+(c-o)/u;f*=l,d*=l,i(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var Ga=new A,oc=new Jh,lc=new Jh,cc=new Jh,_s=class extends Dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,l;this.closed||o>0?h=i[(o-1)%r]:(Ga.subVectors(i[0],i[1]).add(i[0]),h=Ga);let u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?l=i[(o+2)%r]:(Ga.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=Ga),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(h.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(l),d);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),oc.initNonuniformCatmullRom(h.x,u.x,f.x,l.x,m,x,p),lc.initNonuniformCatmullRom(h.y,u.y,f.y,l.y,m,x,p),cc.initNonuniformCatmullRom(h.z,u.z,f.z,l.z,m,x,p)}else this.curveType==="catmullrom"&&(oc.initCatmullRom(h.x,u.x,f.x,l.x,this.tension),lc.initCatmullRom(h.y,u.y,f.y,l.y,this.tension),cc.initCatmullRom(h.z,u.z,f.z,l.z,this.tension));return n.set(oc.calc(c),lc.calc(c),cc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Od(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function Kv(s,t){let e=1-s;return e*e*t}function Qv(s,t){return 2*(1-s)*s*t}function jv(s,t){return s*s*t}function Vr(s,t,e,n){return Kv(s,t)+Qv(s,e)+jv(s,n)}function ty(s,t){let e=1-s;return e*e*e*t}function ey(s,t){let e=1-s;return 3*e*e*s*t}function ny(s,t){return 3*(1-s)*s*s*t}function iy(s,t){return s*s*s*t}function Gr(s,t,e,n,i){return ty(s,t)+ey(s,e)+ny(s,n)+iy(s,i)}var xo=class extends Dn{constructor(t=new Z,e=new Z,n=new Z,i=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Z){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gr(t,i.x,r.x,a.x,o.x),Gr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vh=class extends Dn{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gr(t,i.x,r.x,a.x,o.x),Gr(t,i.y,r.y,a.y,o.y),Gr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vo=class extends Dn{constructor(t=new Z,e=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yh=class extends Dn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yo=class extends Dn{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Vr(t,i.x,r.x,a.x),Vr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ur=class extends Dn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Vr(t,i.x,r.x,a.x),Vr(t,i.y,r.y,a.y),Vr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_o=class extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Z){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],h=i[a],l=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Od(o,c.x,h.x,l.x,u.x),Od(o,c.y,h.y,l.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Z().fromArray(i))}return this}},Mo=Object.freeze({__proto__:null,ArcCurve:xh,CatmullRomCurve3:_s,CubicBezierCurve:xo,CubicBezierCurve3:vh,EllipseCurve:$r,LineCurve:vo,LineCurve3:yh,QuadraticBezierCurve:yo,QuadraticBezierCurve3:ur,SplineCurve:_o}),_h=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let h=0;h<c.length;h++){let l=c[h];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Mo[i.type]().fromJSON(i))}return this}},Ci=class extends _h{constructor(t){super(),this.type="Path",this.currentPoint=new Z,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new vo(this.currentPoint.clone(),new Z(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new yo(this.currentPoint.clone(),new Z(t,e),new Z(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new xo(this.currentPoint.clone(),new Z(t,e),new Z(n,i),new Z(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new _o(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){let h=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+h,e+l,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){let h=new $r(t,e,n,i,r,a,o,c);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let l=h.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},un=class s extends de{constructor(t=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=je(i,0,Math.PI*2);let r=[],a=[],o=[],c=[],h=[],l=1/e,u=new A,f=new Z,d=new A,m=new A,x=new A,p=0,g=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:p=t[v+1].x-t[v].x,g=t[v+1].y-t[v].y,d.x=g*1,d.y=-p,d.z=g*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:p=t[v+1].x-t[v].x,g=t[v+1].y-t[v].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(m)}for(let v=0;v<=e;v++){let _=n+v*l*i,y=Math.sin(_),R=Math.cos(_);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*y,u.y=t[w].y,u.z=t[w].x*R,a.push(u.x,u.y,u.z),f.x=v/e,f.y=w/(t.length-1),o.push(f.x,f.y);let C=c[3*w+0]*y,P=c[3*w+1],M=c[3*w+0]*R;h.push(C,P,M)}}for(let v=0;v<e;v++)for(let _=0;_<t.length-1;_++){let y=_+v*t.length,R=y,w=y+t.length,C=y+t.length+1,P=y+1;r.push(R,w,P),r.push(C,P,w)}this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("uv",new qt(o,2)),this.setAttribute("normal",new qt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},dn=class s extends un{constructor(t=1,e=1,n=4,i=8){let r=new Ci;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},An=class s extends de{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],c=[],h=new A,l=new Z;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;h.x=t*Math.cos(d),h.y=t*Math.sin(d),a.push(h.x,h.y,h.z),o.push(0,0,1),l.x=(a[f]/t+1)/2,l.y=(a[f+1]/t+1)/2,c.push(l.x,l.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},$t=class s extends de{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;i=Math.floor(i),r=Math.floor(r);let l=[],u=[],f=[],d=[],m=0,x=[],p=n/2,g=0;v(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(l),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(d,2));function v(){let y=new A,R=new A,w=0,C=(e-t)/n;for(let P=0;P<=r;P++){let M=[],b=P/r,E=b*(e-t)+t;for(let L=0;L<=i;L++){let U=L/i,N=U*c+o,G=Math.sin(N),O=Math.cos(N);R.x=E*G,R.y=-b*n+p,R.z=E*O,u.push(R.x,R.y,R.z),y.set(G,C,O).normalize(),f.push(y.x,y.y,y.z),d.push(U,1-b),M.push(m++)}x.push(M)}for(let P=0;P<i;P++)for(let M=0;M<r;M++){let b=x[M][P],E=x[M+1][P],L=x[M+1][P+1],U=x[M][P+1];(t>0||M!==0)&&(l.push(b,E,U),w+=3),(e>0||M!==r-1)&&(l.push(E,L,U),w+=3)}h.addGroup(g,w,0),g+=w}function _(y){let R=m,w=new Z,C=new A,P=0,M=y===!0?t:e,b=y===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,p*b,0),f.push(0,b,0),d.push(.5,.5),m++;let E=m;for(let L=0;L<=i;L++){let N=L/i*c+o,G=Math.cos(N),O=Math.sin(N);C.x=M*O,C.y=p*b,C.z=M*G,u.push(C.x,C.y,C.z),f.push(0,b,0),w.x=G*.5+.5,w.y=O*.5*b+.5,d.push(w.x,w.y),m++}for(let L=0;L<i;L++){let U=R+L,N=E+L;y===!0?l.push(N,N+1,U):l.push(N+1,N,U),P+=3}h.addGroup(g,P,y===!0?1:2),g+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ye=class s extends $t{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zr=class s extends de{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),h(n),l(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let _=new A,y=new A,R=new A;for(let w=0;w<e.length;w+=3)d(e[w+0],_),d(e[w+1],y),d(e[w+2],R),c(_,y,R,v)}function c(v,_,y,R){let w=R+1,C=[];for(let P=0;P<=w;P++){C[P]=[];let M=v.clone().lerp(y,P/w),b=_.clone().lerp(y,P/w),E=w-P;for(let L=0;L<=E;L++)L===0&&P===w?C[P][L]=M:C[P][L]=M.clone().lerp(b,L/E)}for(let P=0;P<w;P++)for(let M=0;M<2*(w-P)-1;M++){let b=Math.floor(M/2);M%2===0?(f(C[P][b+1]),f(C[P+1][b]),f(C[P][b])):(f(C[P][b+1]),f(C[P+1][b+1]),f(C[P+1][b]))}}function h(v){let _=new A;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function l(){let v=new A;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=p(v)/2/Math.PI+.5,R=g(v)/Math.PI+.5;a.push(y,1-R)}m(),u()}function u(){for(let v=0;v<a.length;v+=6){let _=a[v+0],y=a[v+2],R=a[v+4],w=Math.max(_,y,R),C=Math.min(_,y,R);w>.9&&C<.1&&(_<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),R<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,_){let y=v*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function m(){let v=new A,_=new A,y=new A,R=new A,w=new Z,C=new Z,P=new Z;for(let M=0,b=0;M<r.length;M+=9,b+=6){v.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),w.set(a[b+0],a[b+1]),C.set(a[b+2],a[b+3]),P.set(a[b+4],a[b+5]),R.copy(v).add(_).add(y).divideScalar(3);let E=p(R);x(w,b+0,v,E),x(C,b+2,_,E),x(P,b+4,y,E)}}function x(v,_,y,R){R<0&&v.x===1&&(a[_]=v.x-1),y.x===0&&y.z===0&&(a[_]=R/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}},dr=class s extends Zr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var fn=class extends Ci{constructor(t){super(t),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Ci().fromJSON(i))}return this}},sy={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=vf(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,h,l,u,f,d;if(n&&(r=cy(s,t,r,e)),s.length>80*e){o=h=s[0],c=l=s[1];for(let m=e;m<i;m+=e)u=s[m],f=s[m+1],u<o&&(o=u),f<c&&(c=f),u>h&&(h=u),f>l&&(l=f);d=Math.max(h-o,l-c),d=d!==0?32767/d:0}return Jr(r,a,e,o,c,d,0),a}};function vf(s,t,e,n,i){let r,a;if(i===_y(s,t,e,n)>0)for(r=t;r<e;r+=n)a=Hd(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=Hd(r,s[r],s[r+1],a);return a&&Lo(a,a.next)&&(Qr(a),a=a.next),a}function Ms(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Lo(e,e.next)||De(e.prev,e,e.next)===0)){if(Qr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Jr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&py(s,n,i,r);let o=s,c,h;for(;s.prev!==s.next;){if(c=s.prev,h=s.next,r?ay(s,n,i,r):ry(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(h.i/e|0),Qr(s),s=h.next,o=h.next;continue}if(s=h,s===o){a?a===1?(s=oy(Ms(s),t,e),Jr(s,t,e,n,i,r,2)):a===2&&ly(s,t,e,n,i,r):Jr(Ms(s),t,e,n,i,r,1);break}}}function ry(s){let t=s.prev,e=s,n=s.next;if(De(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,h=n.y,l=i<r?i<a?i:a:r<a?r:a,u=o<c?o<h?o:h:c<h?c:h,f=i>r?i>a?i:a:r>a?r:a,d=o>c?o>h?o:h:c>h?c:h,m=n.next;for(;m!==t;){if(m.x>=l&&m.x<=f&&m.y>=u&&m.y<=d&&js(i,o,r,c,a,h,m.x,m.y)&&De(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ay(s,t,e,n){let i=s.prev,r=s,a=s.next;if(De(i,r,a)>=0)return!1;let o=i.x,c=r.x,h=a.x,l=i.y,u=r.y,f=a.y,d=o<c?o<h?o:h:c<h?c:h,m=l<u?l<f?l:f:u<f?u:f,x=o>c?o>h?o:h:c>h?c:h,p=l>u?l>f?l:f:u>f?u:f,g=Mh(d,m,t,e,n),v=Mh(x,p,t,e,n),_=s.prevZ,y=s.nextZ;for(;_&&_.z>=g&&y&&y.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=p&&_!==i&&_!==a&&js(o,l,c,u,h,f,_.x,_.y)&&De(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=x&&y.y>=m&&y.y<=p&&y!==i&&y!==a&&js(o,l,c,u,h,f,y.x,y.y)&&De(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=g;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=p&&_!==i&&_!==a&&js(o,l,c,u,h,f,_.x,_.y)&&De(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=p&&y!==i&&y!==a&&js(o,l,c,u,h,f,y.x,y.y)&&De(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function oy(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Lo(i,r)&&yf(i,n,n.next,r)&&Kr(i,r)&&Kr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Qr(n),Qr(n.next),n=s=r),n=n.next}while(n!==s);return Ms(n)}function ly(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xy(a,o)){let c=_f(a,o);a=Ms(a,a.next),c=Ms(c,c.next),Jr(a,t,e,n,i,r,0),Jr(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function cy(s,t,e,n){let i=[],r,a,o,c,h;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,h=vf(s,o,c,n,!1),h===h.next&&(h.steiner=!0),i.push(gy(h));for(i.sort(hy),r=0;r<i.length;r++)e=uy(i[r],e);return e}function hy(s,t){return s.x-t.x}function uy(s,t){let e=dy(s,t);if(!e)return t;let n=_f(e,s);return Ms(n,n.next),Ms(e,e.next)}function dy(s,t){let e=t,n=-1/0,i,r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let o=i,c=i.x,h=i.y,l=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&js(a<h?r:n,a,c,h,a<h?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Kr(e,s)&&(u<l||u===l&&(e.x>i.x||e.x===i.x&&fy(i,e)))&&(i=e,l=u)),e=e.next;while(e!==o);return i}function fy(s,t){return De(s.prev,s,t.prev)<0&&De(t.next,s,s.next)<0}function py(s,t,e,n){let i=s;do i.z===0&&(i.z=Mh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,my(i)}function my(s){let t,e,n,i,r,a,o,c,h=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<h&&(o++,n=n.nextZ,!!n);t++);for(c=h;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,h*=2}while(a>1);return s}function Mh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function gy(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function js(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function xy(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!vy(s,t)&&(Kr(s,t)&&Kr(t,s)&&yy(s,t)&&(De(s.prev,s,t.prev)||De(s,t.prev,t))||Lo(s,t)&&De(s.prev,s,s.next)>0&&De(t.prev,t,t.next)>0)}function De(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Lo(s,t){return s.x===t.x&&s.y===t.y}function yf(s,t,e,n){let i=Xa(De(s,t,e)),r=Xa(De(s,t,n)),a=Xa(De(e,n,s)),o=Xa(De(e,n,t));return!!(i!==r&&a!==o||i===0&&Wa(s,e,t)||r===0&&Wa(s,n,t)||a===0&&Wa(e,s,n)||o===0&&Wa(e,t,n))}function Wa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Xa(s){return s>0?1:s<0?-1:0}function vy(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&yf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Kr(s,t){return De(s.prev,s,s.next)<0?De(s,t,s.next)>=0&&De(s,s.prev,t)>=0:De(s,t,s.prev)<0||De(s,s.next,t)<0}function yy(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function _f(s,t){let e=new bh(s.i,s.x,s.y),n=new bh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Hd(s,t,e,n){let i=new bh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function bh(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _y(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var qi=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Vd(t),Gd(n,t);let a=t.length;e.forEach(Vd);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,Gd(n,e[c]);let o=sy.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Vd(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Gd(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var li=class s extends de{constructor(t=new fn([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,c=t.length;o<c;o++){let h=t[o];a(h)}this.setAttribute("position",new qt(i,3)),this.setAttribute("uv",new qt(r,2)),this.computeVertexNormals();function a(o){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,l=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:My,_,y=!1,R,w,C,P;g&&(_=g.getSpacedPoints(l),y=!0,f=!1,R=g.computeFrenetFrames(l,!1),w=new A,C=new A,P=new A),f||(p=0,d=0,m=0,x=0);let M=o.extractPoints(h),b=M.shape,E=M.holes;if(!qi.isClockWise(b)){b=b.reverse();for(let X=0,Q=E.length;X<Q;X++){let D=E[X];qi.isClockWise(D)&&(E[X]=D.reverse())}}let U=qi.triangulateShape(b,E),N=b;for(let X=0,Q=E.length;X<Q;X++){let D=E[X];b=b.concat(D)}function G(X,Q,D){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(Q,D)}let O=b.length,J=U.length;function H(X,Q,D){let Mt,st,gt,ct=X.x-Q.x,Vt=X.y-Q.y,bt=D.x-X.x,I=D.y-X.y,S=ct*ct+Vt*Vt,V=ct*I-Vt*bt;if(Math.abs(V)>Number.EPSILON){let tt=Math.sqrt(S),rt=Math.sqrt(bt*bt+I*I),nt=Q.x-Vt/tt,Dt=Q.y+ct/tt,mt=D.x-I/rt,wt=D.y+bt/rt,ie=((mt-nt)*I-(wt-Dt)*bt)/(ct*I-Vt*bt);Mt=nt+ct*ie-X.x,st=Dt+Vt*ie-X.y;let ht=Mt*Mt+st*st;if(ht<=2)return new Z(Mt,st);gt=Math.sqrt(ht/2)}else{let tt=!1;ct>Number.EPSILON?bt>Number.EPSILON&&(tt=!0):ct<-Number.EPSILON?bt<-Number.EPSILON&&(tt=!0):Math.sign(Vt)===Math.sign(I)&&(tt=!0),tt?(Mt=-Vt,st=ct,gt=Math.sqrt(S)):(Mt=ct,st=Vt,gt=Math.sqrt(S/2))}return new Z(Mt/gt,st/gt)}let lt=[];for(let X=0,Q=N.length,D=Q-1,Mt=X+1;X<Q;X++,D++,Mt++)D===Q&&(D=0),Mt===Q&&(Mt=0),lt[X]=H(N[X],N[D],N[Mt]);let ot=[],ut,Pt=lt.concat();for(let X=0,Q=E.length;X<Q;X++){let D=E[X];ut=[];for(let Mt=0,st=D.length,gt=st-1,ct=Mt+1;Mt<st;Mt++,gt++,ct++)gt===st&&(gt=0),ct===st&&(ct=0),ut[Mt]=H(D[Mt],D[gt],D[ct]);ot.push(ut),Pt=Pt.concat(ut)}for(let X=0;X<p;X++){let Q=X/p,D=d*Math.cos(Q*Math.PI/2),Mt=m*Math.sin(Q*Math.PI/2)+x;for(let st=0,gt=N.length;st<gt;st++){let ct=G(N[st],lt[st],Mt);dt(ct.x,ct.y,-D)}for(let st=0,gt=E.length;st<gt;st++){let ct=E[st];ut=ot[st];for(let Vt=0,bt=ct.length;Vt<bt;Vt++){let I=G(ct[Vt],ut[Vt],Mt);dt(I.x,I.y,-D)}}}let Ht=m+x;for(let X=0;X<O;X++){let Q=f?G(b[X],Pt[X],Ht):b[X];y?(C.copy(R.normals[0]).multiplyScalar(Q.x),w.copy(R.binormals[0]).multiplyScalar(Q.y),P.copy(_[0]).add(C).add(w),dt(P.x,P.y,P.z)):dt(Q.x,Q.y,0)}for(let X=1;X<=l;X++)for(let Q=0;Q<O;Q++){let D=f?G(b[Q],Pt[Q],Ht):b[Q];y?(C.copy(R.normals[X]).multiplyScalar(D.x),w.copy(R.binormals[X]).multiplyScalar(D.y),P.copy(_[X]).add(C).add(w),dt(P.x,P.y,P.z)):dt(D.x,D.y,u/l*X)}for(let X=p-1;X>=0;X--){let Q=X/p,D=d*Math.cos(Q*Math.PI/2),Mt=m*Math.sin(Q*Math.PI/2)+x;for(let st=0,gt=N.length;st<gt;st++){let ct=G(N[st],lt[st],Mt);dt(ct.x,ct.y,u+D)}for(let st=0,gt=E.length;st<gt;st++){let ct=E[st];ut=ot[st];for(let Vt=0,bt=ct.length;Vt<bt;Vt++){let I=G(ct[Vt],ut[Vt],Mt);y?dt(I.x,I.y+_[l-1].y,_[l-1].x+D):dt(I.x,I.y,u+D)}}}j(),at();function j(){let X=i.length/3;if(f){let Q=0,D=O*Q;for(let Mt=0;Mt<J;Mt++){let st=U[Mt];F(st[2]+D,st[1]+D,st[0]+D)}Q=l+p*2,D=O*Q;for(let Mt=0;Mt<J;Mt++){let st=U[Mt];F(st[0]+D,st[1]+D,st[2]+D)}}else{for(let Q=0;Q<J;Q++){let D=U[Q];F(D[2],D[1],D[0])}for(let Q=0;Q<J;Q++){let D=U[Q];F(D[0]+O*l,D[1]+O*l,D[2]+O*l)}}n.addGroup(X,i.length/3-X,0)}function at(){let X=i.length/3,Q=0;Rt(N,Q),Q+=N.length;for(let D=0,Mt=E.length;D<Mt;D++){let st=E[D];Rt(st,Q),Q+=st.length}n.addGroup(X,i.length/3-X,1)}function Rt(X,Q){let D=X.length;for(;--D>=0;){let Mt=D,st=D-1;st<0&&(st=X.length-1);for(let gt=0,ct=l+p*2;gt<ct;gt++){let Vt=O*gt,bt=O*(gt+1),I=Q+Mt+Vt,S=Q+st+Vt,V=Q+st+bt,tt=Q+Mt+bt;it(I,S,V,tt)}}}function dt(X,Q,D){c.push(X),c.push(Q),c.push(D)}function F(X,Q,D){W(X),W(Q),W(D);let Mt=i.length/3,st=v.generateTopUV(n,i,Mt-3,Mt-2,Mt-1);$(st[0]),$(st[1]),$(st[2])}function it(X,Q,D,Mt){W(X),W(Q),W(Mt),W(Q),W(D),W(Mt);let st=i.length/3,gt=v.generateSideWallUV(n,i,st-6,st-3,st-2,st-1);$(gt[0]),$(gt[1]),$(gt[3]),$(gt[1]),$(gt[2]),$(gt[3])}function W(X){i.push(c[X*3+0]),i.push(c[X*3+1]),i.push(c[X*3+2])}function $(X){r.push(X.x),r.push(X.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return by(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Mo[i.type]().fromJSON(i)),new s(n,t.options)}},My={generateTopUV:function(s,t,e,n,i){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],h=t[i*3],l=t[i*3+1];return[new Z(r,a),new Z(o,c),new Z(h,l)]},generateSideWallUV:function(s,t,e,n,i,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],h=t[n*3],l=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],m=t[i*3+2],x=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(o-l)<Math.abs(a-h)?[new Z(a,1-c),new Z(h,1-u),new Z(f,1-m),new Z(x,1-g)]:[new Z(o,1-c),new Z(l,1-u),new Z(d,1-m),new Z(p,1-g)]}};function by(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var bo=class s extends Zr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},fr=class s extends Zr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var wo=class s extends de{constructor(t=new fn([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)h(t);else for(let l=0;l<t.length;l++)h(t[l]),this.addGroup(o,c,l),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new qt(i,3)),this.setAttribute("normal",new qt(r,3)),this.setAttribute("uv",new qt(a,2));function h(l){let u=i.length/3,f=l.extractPoints(e),d=f.shape,m=f.holes;qi.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,g=m.length;p<g;p++){let v=m[p];qi.isClockWise(v)===!0&&(m[p]=v.reverse())}let x=qi.triangulateShape(d,m);for(let p=0,g=m.length;p<g;p++){let v=m[p];d=d.concat(v)}for(let p=0,g=d.length;p<g;p++){let v=d[p];i.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let p=0,g=x.length;p<g;p++){let v=x[p],_=v[0]+u,y=v[1]+u,R=v[2]+u;n.push(_,y,R),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return wy(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let a=e[t.shapes[i]];n.push(a)}return new s(n,t.curveSegments)}};function wy(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var ge=class s extends de{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),h=0,l=[],u=new A,f=new A,d=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){let v=[],_=g/n,y=0;g===0&&a===0?y=.5/e:g===n&&c===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){let w=R/e;u.x=-t*Math.cos(i+w*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(i+w*r)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(w+y,1-_),v.push(h++)}l.push(v)}for(let g=0;g<n;g++)for(let v=0;v<e;v++){let _=l[g][v+1],y=l[g][v],R=l[g+1][v],w=l[g+1][v+1];(g!==0||a>0)&&d.push(_,y,w),(g!==n-1||c<Math.PI)&&d.push(y,R,w)}this.setIndex(d),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ue=class s extends de{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],h=[],l=new A,u=new A,f=new A;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){let x=m/i*r,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),l.x=t*Math.cos(x),l.y=t*Math.sin(x),f.subVectors(u,l).normalize(),c.push(f.x,f.y,f.z),h.push(m/i),h.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){let x=(i+1)*d+m-1,p=(i+1)*(d-1)+m-1,g=(i+1)*(d-1)+m,v=(i+1)*d+m;a.push(x,p,v),a.push(p,g,v)}this.setIndex(a),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ji=class s extends de{constructor(t=new ur(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,c=new A,h=new Z,l=new A,u=[],f=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(d,2));function x(){for(let _=0;_<e;_++)p(_);p(r===!1?e:0),v(),g()}function p(_){l=t.getPointAt(_/e,l);let y=a.normals[_],R=a.binormals[_];for(let w=0;w<=i;w++){let C=w/i*Math.PI*2,P=Math.sin(C),M=-Math.cos(C);c.x=M*y.x+P*R.x,c.y=M*y.y+P*R.y,c.z=M*y.z+P*R.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=l.x+n*c.x,o.y=l.y+n*c.y,o.z=l.z+n*c.z,u.push(o.x,o.y,o.z)}}function g(){for(let _=1;_<=e;_++)for(let y=1;y<=i;y++){let R=(i+1)*(_-1)+(y-1),w=(i+1)*_+(y-1),C=(i+1)*_+y,P=(i+1)*(_-1)+y;m.push(R,w,P),m.push(w,C,P)}}function v(){for(let _=0;_<=e;_++)for(let y=0;y<=i;y++)h.x=_/e,h.y=y/i,d.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Mo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var So=class extends Ce{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},zt=class extends Ai{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=of,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new He,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function qa(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Sy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var pr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wh=class extends pr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bu,endingEnd:Bu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ou:r=t,o=2*e-n;break;case Hu:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ou:a=t,c=2*n-e;break;case Hu:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}let h=(n-e)*.5,l=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-n),this._offsetPrev=r*l,this._offsetNext=a*l}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,l=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),x=m*m,p=x*m,g=-f*p+2*f*x-f*m,v=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*m+1,_=(-1-d)*p+(1.5+d)*x+.5*m,y=d*p-d*x;for(let R=0;R!==o;++R)r[R]=g*a[l+R]+v*a[h+R]+_*a[c+R]+y*a[u+R];return r}},Sh=class extends pr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,l=(n-e)/(i-e),u=1-l;for(let f=0;f!==o;++f)r[f]=a[h+f]*u+a[c+f]*l;return r}},Eh=class extends pr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Yn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qa(e,this.TimeBufferType),this.values=qa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qa(t.times,Array),values:qa(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Eh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qa:e=this.InterpolantFactoryMethodDiscrete;break;case Jc:e=this.InterpolantFactoryMethodLinear;break;case Il:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qa;case this.InterpolantFactoryMethodLinear:return Jc;case this.InterpolantFactoryMethodSmooth:return Il}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&Sy(i))for(let o=0,c=i.length;o!==c;++o){let h=i[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Il,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=t[o],l=t[o+1];if(h!==l&&(o!==1||h!==t[0]))if(i)c=!0;else{let u=o*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[f+m]||x!==e[d+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=Jc;var bs=class extends Yn{constructor(t,e,n){super(t,e,n)}};bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Qa;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Th=class extends Yn{};Th.prototype.ValueTypeName="color";var Ah=class extends Yn{};Ah.prototype.ValueTypeName="number";var Rh=class extends pr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e),h=t*o;for(let l=h+o;h!==l;h+=4)ye.slerpFlat(r,0,a,h-o,a,h,c);return r}},Eo=class extends Yn{InterpolantFactoryMethodLinear(t){return new Rh(this.times,this.values,this.getValueSize(),t)}};Eo.prototype.ValueTypeName="quaternion";Eo.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends Yn{constructor(t,e,n){super(t,e,n)}};ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=Qa;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Ch=class extends Yn{};Ch.prototype.ValueTypeName="vector";var Ph=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,a,o),r=!0},this.itemEnd=function(l){a++,i.onProgress!==void 0&&i.onProgress(l,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,u){return h.push(l,u),this},this.removeHandler=function(l){let u=h.indexOf(l);return u!==-1&&h.splice(u,2),this},this.getHandler=function(l){for(let u=0,f=h.length;u<f;u+=2){let d=h[u],m=h[u+1];if(d.global&&(d.lastIndex=0),d.test(l))return m}return null}}},Ey=new Ph,Ih=class{constructor(t){this.manager=t!==void 0?t:Ey,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ih.DEFAULT_MATERIAL_NAME="__DEFAULT";var mr=class extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},To=class extends mr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},hc=new Kt,Wd=new A,Xd=new A,jr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Wd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wd),Xd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xd),e.updateMatrixWorld(),hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Lh=class extends jr{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=to*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ao=class extends mr{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Lh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},qd=new Kt,zr=new A,uc=new A,Dh=class extends jr{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zr.setFromMatrixPosition(t.matrixWorld),n.position.copy(zr),uc.copy(n.position),uc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(uc),n.updateMatrixWorld(),i.makeTranslation(-zr.x,-zr.y,-zr.z),qd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qd)}},gr=class extends mr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Dh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Uh=class extends jr{constructor(){super(new cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ta=class extends mr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new Uh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ro=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Yd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Yd(){return performance.now()}var Kh="\\[\\]\\.:\\/",Ty=new RegExp("["+Kh+"]","g"),Qh="[^"+Kh+"]",Ay="[^"+Kh.replace("\\.","")+"]",Ry=/((?:WC+[\/:])*)/.source.replace("WC",Qh),Cy=/(WCOD+)?/.source.replace("WCOD",Ay),Py=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qh),Iy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qh),Ly=new RegExp("^"+Ry+Cy+Py+Iy+"$"),Dy=["material","materials","bones","map"],kh=class{constructor(t,e,n){let i=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ty,"")}static parseTrackName(t){let e=Ly.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Dy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===h){h=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[i];if(a===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=kh;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var __=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Zn={mass:1680,inertia:[3e3,3150,1100],cgHeight:.42,restLength:.66,maxTravel:.6,springK:25500,springProg:1.8,damperBump:2200,damperRebound:3900,antiRoll:11e3,wheelRadius:.46,gripLat:1.46,gripLong:1.32,rearGripBias:.95,peakSlip:.145,slideFalloff:.74,rearGripHandbrake:.4,engineForce:13600,launchPunch:.38,topSpeed:36,brakeForce:22500,brakeBias:.64,reverseSpeed:9,frontTorque:.42,dragCoef:.4,rollRes:9,maxSteer:.6,steerSpeedFalloff:.5,steerRate:6.2,steerReturn:8.5,driftSteerBoost:.55,airPitch:4.6,airRoll:1.8,airYaw:1.3,nitroForce:8200,nitroTopBoost:9,nitroDur:2.6,nitroCans:3,downforce:2.2,stability:1,rollStab:12,weightTransfer:.42,driftAssist:.6,yawDamping:.85,spinSlip:.78,counterCatch:7.5,assistStrength:1,chaserSpeedMul:1},na={low:{pixelRatio:.75,shadows:!1,shadowSize:0,bloom:!1,foliage:.45,drawDist:220,particles:.4,grain:!1,antialias:!1,pbr:!1,env:!1,rays:0,dof:!1},medium:{pixelRatio:1,shadows:!0,shadowSize:1024,bloom:!0,foliage:.7,drawDist:300,particles:.7,grain:!0,antialias:!1,pbr:!0,env:!0,rays:20,dof:!1},high:{pixelRatio:1.5,shadows:!0,shadowSize:2048,bloom:!0,foliage:1,drawDist:380,particles:1,grain:!0,antialias:!0,pbr:!0,env:!0,rays:36,dof:!0}},ia={explorer:{name:"Explorer",chaser:.86,gap:.8,dmg:.6,startGap:70,fallDeath:!1},adventurer:{name:"Adventurer",chaser:1,gap:1,dmg:1,startGap:60,fallDeath:!1},legend:{name:"Legend",chaser:1.12,gap:1.15,dmg:1.4,startGap:50,fallDeath:!0}},Ss=typeof navigator<"u"&&(/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Macintosh/.test(navigator.userAgent));var ft=(s,t,e)=>s<t?t:s>e?e:s,re=(s,t,e)=>s+(t-s)*e;var Ki=(s,t,e,n)=>re(s,t,1-Math.exp(-e*n)),ae=(s,t,e)=>{let n=ft((e-s)/(t-s),0,1);return n*n*(3-2*n)};function Do(s,t){let e=s*374761393+t*668265263;return e=(e^e>>>13)*1274126177,((e^e>>>16)>>>0)/4294967296}function Pi(s,t){let e=Math.floor(s),n=Math.floor(t),i=s-e,r=t-n,a=i*i*(3-2*i),o=r*r*(3-2*r),c=Do(e,n),h=Do(e+1,n),l=Do(e,n+1),u=Do(e+1,n+1);return re(re(c,h,a),re(l,u,a),o)}function Qi(s,t,e=4){let n=0,i=.5,r=1;for(let a=0;a<e;a++)n+=i*Pi(s*r,t*r),r*=2.03,i*=.5;return n}function Mf(s){let t=2166136261;for(let e=0;e<s.length;e++)t^=s.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}var ce=class{constructor(t=1){this.s=t>>>0||1}next(){let t=this.s=this.s+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}chance(t){return this.next()<t}sign(){return this.next()<.5?-1:1}weighted(t){let e=0;for(let i of t)e+=i.w;let n=this.next()*e;for(let i of t)if(n-=i.w,n<=0)return i.v;return t[t.length-1].v}};var jh={},Ot={on(s,t){(jh[s]=jh[s]||[]).push(t)},emit(s,t){let e=jh[s];if(e)for(let n of e)n(t)}},oe={car:null,carS:0,carLat:0,time:0,running:!1,slowmo:1};var bf="relicrunner4x4.save.v1",tu=()=>({gold:0,shards:0,relics:{},upgrades:{engine:0,nitro:0,suspension:0,armor:0},vehicle:"bessie",paint:"green",records:{bestDistance:0,bestScore:0,runs:0,totalDistance:0},expeditionLevel:1,missionsDone:0,missions:null,settings:{assist:Ss?"full":"light",autoAccel:Ss,difficulty:"adventurer",steerSens:1,camDist:1,comfort:!1,flashing:!1,rumble:!0,colorblind:!1,subtitle:1,music:.7,sfx:.9,quality:"auto",fps:60,touchMode:"stick",hoodCam:!1},seenIntro:!1});function wf(){try{let s=localStorage.getItem(bf);if(!s)return tu();let t=JSON.parse(s),e=tu();return{...e,...t,upgrades:{...e.upgrades,...t.upgrades},records:{...e.records,...t.records},settings:{...e.settings,...t.settings}}}catch{return tu()}}function Sf(s){try{localStorage.setItem(bf,JSON.stringify(s))}catch{}}var Uo=new A(-.55,.24,.8).normalize(),eu=new yt("#d2b98c"),ko=class{constructor(t,e){this.canvas=t,this.qualityName=e==="auto"?Ss?"low":"high":e,this.q=na[this.qualityName];let n=this.renderer=new uo({canvas:t,antialias:this.q.antialias,powerPreference:"high-performance",stencil:!1});n.outputColorSpace=an,n.toneMapping=ea,n.toneMappingExposure=1.05,n.shadowMap.enabled=this.q.shadows,n.shadowMap.type=Nh,this.resScale=1,this.scene=new qr,this.scene.fog=new fo(eu,.0066),this.scene.background=eu.clone(),this.camera=new tn(62,16/9,.3,900),this._lights(),this._sky(),this._far(),this._env(),this.time={value:0},this.lost=!1,t.addEventListener("webglcontextlost",i=>{i.preventDefault(),this.lost=!0}),t.addEventListener("webglcontextrestored",()=>{this.lost=!1}),this.resize()}setQuality(t){this.qualityName=t,this.q=na[t],this.renderer.shadowMap.enabled=this.q.shadows,this.sun.castShadow=this.q.shadows,this.q.shadows&&(this.sun.shadow.mapSize.set(this.q.shadowSize,this.q.shadowSize),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.scene.traverse(e=>{e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>i.needsUpdate=!0)}),this.resize()}_lights(){let t=this.scene;this.hemi=new To("#d8e0c8","#4a3e22",this.q.env?.62:1.05),t.add(this.hemi);let e=this.sun=new ta("#ffc47e",3.5);e.castShadow=this.q.shadows,e.shadow.mapSize.set(this.q.shadowSize||1024,this.q.shadowSize||1024);let n=e.shadow.camera;n.left=-38,n.right=38,n.top=38,n.bottom=-38,n.near=1,n.far=220,e.shadow.bias=-6e-4,e.shadow.normalBias=.04,t.add(e),t.add(e.target),this.fill=new ta("#7fa6c4",.42),this.fill.position.set(10,8,-10),t.add(this.fill)}_sky(){let t=new ge(800,32,16),e=new Ce({side:en,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:Uo},top:{value:new yt("#5f8fb0")},mid:{value:new yt("#f2c98e")},hor:{value:eu}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 sunDir, top, mid, hor; varying vec3 vDir;
        void main(){ vec3 d = normalize(vDir); float h = d.y;
          vec3 c = mix(hor, mid, smoothstep(-0.02, 0.18, h)); c = mix(c, top, smoothstep(0.15, 0.75, h));
          float sd = max(dot(d, sunDir), 0.0);
          c += vec3(1.0,0.66,0.32) * pow(sd, 5.0) * 0.6 + vec3(1.0,0.82,0.55) * pow(sd, 40.0) * 0.6 + vec3(1.0,0.9,0.7) * pow(sd, 400.0) * 9.0;
          c = mix(c, vec3(0.98,0.62,0.4), smoothstep(0.25, -0.05, h) * pow(sd, 2.0) * 0.35);
          float cl = sin(d.x*9.0+d.z*4.0)*sin(d.z*11.0-d.x*3.0)*0.5+0.5; c = mix(c, vec3(1.0,0.93,0.8), smoothstep(0.55,0.95,cl)*smoothstep(0.05,0.3,h)*(1.0-smoothstep(0.3,0.6,h))*0.35);
          gl_FragColor = vec4(c, 1.0); }`});this.sky=new _t(t,e),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.scene.add(this.sky)}_far(){let t=new se,e=new ce(5),n=(i,r,a,o)=>{let h=[],l=[];for(let d=0;d<=160;d++){let m=d/160*Math.PI*2,x=Math.pow(Qi(Math.cos(m)*3+o,Math.sin(m)*3,5),1.6)*r+10;h.push(Math.cos(m)*i,-30,Math.sin(m)*i,Math.cos(m)*i,x,Math.sin(m)*i)}for(let d=0;d<160;d++){let m=d*2;l.push(m,m+2,m+1,m+1,m+2,m+3)}let u=new de;u.setAttribute("position",new qt(h,3)),u.setIndex(l);let f=new _t(u,new We({color:a,fog:!1,side:be,depthWrite:!1}));return f.renderOrder=-9,f};t.add(n(700,260,new yt("#c4ad8a"),1)),t.add(n(620,170,new yt("#9e9a74"),7));for(let i=0;i<5;i++){let r=e.range(0,6.28),a=e.range(520,590),o=e.range(26,46),c=new se;for(let l=0;l<6;l++){let u=o*(1-l*.15),f=new _t(new Ct(u*2,o*.28,u*2),new We({color:new yt("#a39274").offsetHSL(0,0,-l*.01),fog:!1}));f.position.y=l*o*.28,c.add(f)}let h=new _t(new Ct(o*.6,o*.4,o*.6),new We({color:"#958668",fog:!1}));h.position.y=6*o*.28,c.add(h),c.position.set(Math.cos(r)*a,5,Math.sin(r)*a),c.children.forEach(l=>l.renderOrder=-8),t.add(c)}this.far=t,this.scene.add(t);{let r=[],a=[];for(let f=0;f<=360;f++){let d=f/360*Math.PI*2,m=26+Qi(Math.cos(d)*9+3,Math.sin(d)*9,4)*22+Math.abs(Math.sin(f*1.7))*3.5;r.push(Math.cos(d)*330,-60,Math.sin(d)*330,Math.cos(d)*330,m,Math.sin(d)*330)}for(let f=0;f<360;f++){let d=f*2;a.push(d,d+2,d+1,d+1,d+2,d+3)}let c=new de;c.setAttribute("position",new qt(r,3)),c.setIndex(a);let h=new Float32Array(361*6),l=new yt("#9d9067"),u=new yt("#b7a57a");for(let f=0;f<=360;f++)l.toArray(h,f*6),u.toArray(h,f*6+3);c.setAttribute("color",new ne(h,3)),this.nearRing=new _t(c,new We({vertexColors:!0,fog:!1,side:be,depthWrite:!1})),this.nearRing.renderOrder=-7,this.nearRing.frustumCulled=!1,this.scene.add(this.nearRing)}}_env(){if(this.q.env)try{let t=new qr,e=new _t(new ge(50,32,16),this.sky.material.clone());t.add(e);let n=new _t(new An(50,24).rotateX(-Math.PI/2),new We({color:"#3c3a22"}));n.position.y=-4,t.add(n);let i=new _t(new ge(48,24,8,0,Math.PI*2,0,.6),new We({color:"#4b5a30",side:en}));t.add(i);let r=new hr(this.renderer);this.envRT=r.fromScene(t,.02),r.dispose(),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=.55}catch(t){console.warn("env",t)}}follow(t){this.sky.position.copy(this.camera.position),this.far.position.set(this.camera.position.x,t.y*.6,this.camera.position.z),this.nearRing&&this.nearRing.position.set(this.camera.position.x,t.y-18,this.camera.position.z),this.sun.position.copy(t).addScaledVector(Uo,120),this.sun.target.position.copy(t),this.sun.target.updateMatrixWorld()}resize(){let t=window.innerWidth,e=window.innerHeight,n=Math.min(window.devicePixelRatio||1,this.q.pixelRatio)*this.resScale;this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.w=t,this.h=e,this.pr=n,this.onResize&&this.onResize(t,e,n)}};var No={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Cn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Uy=new cr(-1,1,1,-1,0,1),nu=class extends de{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}},ky=new nu,ji=class{constructor(t){this._mesh=new _t(ky,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Uy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Es=class extends Cn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ci.clone(t.uniforms),this.material=new Ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ji(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var sa=class extends Cn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Fo=class extends Cn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var zo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Z);this._width=n.width,this._height=n.height,e=new hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$n}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Es(No),this.copyPass.material.blending=ri,this.clock=new Ro}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}sa!==void 0&&(a instanceof sa?n=!0:a instanceof Fo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Bo=class extends Cn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new yt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}};var Ef={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new yt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var yr=class s extends Cn{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Z(t.x,t.y):new Z(256,256),this.clearColor=new yt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new hn(r,a,{type:$n}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new hn(r,a,{type:$n});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new hn(r,a,{type:$n});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Ef;this.highPassUniforms=ci.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ce({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Z(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let l=No;this.copyUniforms=ci.clone(l.uniforms),this.blendMaterial=new Ce({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:on,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new yt,this.oldClearAlpha=1,this.basic=new We,this.fsQuad=new ji(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Z(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ce({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Z(.5,.5)},direction:{value:new Z(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ce({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};yr.BlurDirectionX=new Z(1,0);yr.BlurDirectionY=new Z(0,1);var Tf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Oo=class extends Cn{constructor(){super();let t=Tf;this.uniforms=ci.clone(t.uniforms),this.material=new So({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ji(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===zh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ea?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Oh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Hh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Af="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",Ny=s=>({uniforms:{tDiffuse:{value:null},sun:{value:new Z(.5,.8)},vis:{value:0},strength:{value:.36},aspect:{value:1.7}},vertexShader:Af,fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 sun; uniform float vis, strength, aspect; varying vec2 vUv;
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
      gl_FragColor = c; }`}),Fy={uniforms:{tDiffuse:{value:null},time:{value:0},grain:{value:.04},vignette:{value:.9},danger:{value:0},flash:{value:0},dof:{value:0},focus:{value:new Z(.5,.55)},res:{value:new Z(1280,720)},fringe:{value:0}},vertexShader:Af,fragmentShader:`uniform sampler2D tDiffuse; uniform float time, grain, vignette, danger, flash, dof, fringe; uniform vec2 focus, res; varying vec2 vUv;
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
      gl_FragColor = c; }`},Ii=new A,Ho=class{constructor(t){this.world=t;let e=t.renderer;this.composer=new zo(e),this.composer.addPass(new Bo(t.scene,t.camera));let n=t.q.rays||0;n&&(this.rays=new Es(Ny(n)),this.composer.addPass(this.rays)),this.bloom=new yr(new Z(256,256),.34,.6,.86),this.composer.addPass(this.bloom),this.composer.addPass(new Oo),this.grade=new Es(Fy),this.composer.addPass(this.grade),this.enabled=t.q.bloom,this.dof=0,this.focus=new A,this.resize()}resize(){let t=this.world;this.composer.setPixelRatio(t.pr),this.composer.setSize(t.w,t.h),this.bloom.resolution.set(t.w*t.pr*.5,t.h*t.pr*.5),this.grade.uniforms.res.value.set(t.w*t.pr,t.h*t.pr)}render(t,e){let n=this.world,i=n.q,r=n.camera,a=this.grade.uniforms;if(a.time.value=e%100,a.grain.value=i.grain?.03:0,a.fringe.value=i.dof?1:0,a.dof.value=i.dof?this.dof:0,i.dof&&this.dof>.01&&(Ii.copy(this.focus).project(r),a.focus.value.set(Ii.x*.5+.5,Ii.y*.5+.5)),this.rays){Ii.copy(r.position).addScaledVector(Uo,500).project(r);let o=Ii.z<1,c=Ii.x*.5+.5,h=Ii.y*.5+.5,l=Math.max(Math.abs(Ii.x),Math.abs(Ii.y));this.rays.uniforms.sun.value.set(c,h),this.rays.uniforms.aspect.value=n.w/n.h,this.rays.uniforms.vis.value=o?Math.max(0,Math.min(1,(1.8-l)/.8)):0,this.rays.enabled=this.rays.uniforms.vis.value>.001}this.enabled&&i.bloom?this.composer.render(t):n.renderer.render(n.scene,r)}};var $e=1,Ut={OPEN:0,WALL:1,CLIFF:2},Xt={DIRT:0,MUD:1,STONE:2,PLANK:3,WATER:4,JUNGLE:5,VOID:6},Rf=[1,.78,.95,.9,.7,.62,0],Cf=[0,.85,0,.1,2.4,2.6,0],Vo=class{constructor(){this.S=[],this.base=0,this.res={h:0,nx:0,ny:1,nz:0,surf:0,onRoad:!0,lat:0,idx:0,t:0,isVoid:!1,laneLat:0,lane:0}}get count(){return this.base+this.S.length}get(t){t=Math.floor(t),t<this.base&&(t=this.base);let e=this.count-1;return t>e&&(t=e),this.S[t-this.base]}has(t){return t>=this.base&&t<this.count}push(t){t.i=this.count,this.S.push(t)}trim(t){let e=Math.floor(t)-this.base;e>200&&(this.S.splice(0,e),this.base+=e)}sampleAtS(t){return this.get(t/$e)}pointAt(t,e,n){let i=Math.floor(t/$e),r=t/$e-i,a=this.get(i),o=this.get(i+1),c=a.rx+(o.rx-a.rx)*r,h=a.rz+(o.rz-a.rz)*r;return n.x=a.x+(o.x-a.x)*r+c*e,n.z=a.z+(o.z-a.z)*r+h*e,n.y=a.y+(o.y-a.y)*r+e*(a.bank+(o.bank-a.bank)*r),n}headingAt(t){let e=Math.floor(t/$e),n=t/$e-e,i=this.get(e),r=this.get(e+1);return i.th+(r.th-i.th)*n}locate(t,e,n){let i=ft(Math.floor(n),this.base,this.count-2);for(let r=0;r<64;r++){let a=this.S[i-this.base];if((t-a.x)*a.fx+(e-a.z)*a.fz<0&&i>this.base){i--;continue}if(i+1<this.count-1){let c=this.S[i+1-this.base];if((t-c.x)*c.fx+(e-c.z)*c.fz>=0){i++;continue}}break}return i}roadY(t,e){return t.y+e*t.bank}terrainY(t,e){let n=t.fork+t.hw,i=Math.abs(e),r=e<0?t.edgeL:t.edgeR,a=Qi(t.s*.045+(e<0?17:3),i*.06,3);if(t.gap||t.bridge){let l=ae(26,46,i);return t.floorY+a*2.5+l*(t.y-t.floorY+6+a*8)}if(t.fork>0&&i<t.fork-t.hw-.6){let l=t.fork-t.hw-.6,u=ae(0,2.5,l-i);return t.y+.2+u*(1.6+a*2.2)}if(i<=n+.6)return this.roadY(t,ft(e,-n,n))-.12;let o=i-n;if(t.causeway){let l=this.roadY(t,Math.sign(e)*n);return re(l-.1,t.waterY-.9,ae(.7,2.3,o))+ae(24,46,o)*(t.y-t.waterY+3+a*6)}if(t.ledge&&Math.sign(e)===t.ledge)return this.roadY(t,Math.sign(e)*n)-.1+ae(.4,4.5,o)*(13+a*9)+ae(5,22,o)*(6+a*6);if(r===Ut.CLIFF){let l=ae(24,44,o);return t.floorY+a*3+l*(t.y-t.floorY+10+a*10)+(o<1.6?(t.y-t.floorY)*(1-ae(.6,1.6,o)):0)}let c=this.roadY(t,Math.sign(e)*n)-.15;t.ford&&(c=Math.min(c,t.waterY-.6+ae(3,18,o)*2));let h=r===Ut.WALL?ae(.5,5,o)*(1.2+a*1.5):0;return c+h+ae(2,26,o)*(1.5+a*7)+(Pi(t.s*.4,o*.5)-.5)*.25*ae(.5,3,o)}query(t,e,n){let i=this.res,r=this.locate(t,e,n),a=this.S[r-this.base],o=this.S[Math.min(r+1,this.count-1)-this.base],c=t-a.x,h=e-a.z,l=ft((c*a.fx+h*a.fz)/$e,0,1),u=a.rx+(o.rx-a.rx)*l,f=a.rz+(o.rz-a.rz)*l,d=c*u+h*f;i.idx=r,i.t=l,i.lat=d;let m=l>.5?o:a,x=m.fork+m.hw,p=d,g=0;m.fork>0&&(g=d<0?-1:1,p=d-g*m.fork),i.laneLat=p,i.lane=g;let v=Math.abs(p)<=m.hw+.25,_=m.gap||m.hole,y=a.y+(o.y-a.y)*l,R=a.bank+(o.bank-a.bank)*l,w=(o.y-a.y)/$e;if(v&&!_){if(i.onRoad=!0,i.isVoid=!1,i.surf=m.surf,m.pud){let ot=m.s+l*$e;for(let ut of m.pud){let Pt=ot-ut.s;if(Pt*Pt<ut.r*ut.r){let Ht=p-ut.lat;if(Pt*Pt+Ht*Ht<ut.r*ut.r){i.surf=Xt.WATER;break}}}}return i.h=y+d*R,m.bridge&&(i.h+=m.bridgeSway||0),m.bump&&(i.h+=m.bump(d,l)),this._normal(i,a,w,R),i}if(i.onRoad=!1,_&&Math.abs(d)<x+2.5)return i.isVoid=!0,i.surf=Xt.VOID,i.h=m.floorY,i.nx=0,i.ny=1,i.nz=0,i;let C=d<0?m.edgeL:m.edgeR,P=Math.abs(d)-x;if((C===Ut.CLIFF||m.bridge||m.gap)&&P>.7&&!(m.fork>0&&Math.abs(d)<m.fork))return i.isVoid=!0,i.surf=Xt.VOID,i.h=this.terrainY(m,d),i.nx=0,i.ny=1,i.nz=0,i;i.isVoid=!1,i.surf=m.ford?Xt.WATER:Xt.JUNGLE;let M=this.terrainY(a,d),b=this.terrainY(o,d);i.h=M+(b-M)*l;let E=.5,L=this.terrainY(m,d+E),U=this.terrainY(m,d-E),N=(L-U)/(2*E),G=(b-M)/$e,O=-G*a.fx-N*a.rx,J=-G*a.fz-N*a.rz,H=1,lt=Math.hypot(O,H,J);return i.nx=O/lt,i.ny=H/lt,i.nz=J/lt,i}_normal(t,e,n,i){let r=-n*e.fx-i*e.rx,a=-n*e.fz-i*e.rz,o=1,c=Math.hypot(r,o,a);t.nx=r/c,t.ny=o/c,t.nz=a/c}limits(t){let e=t.fork+t.hw,n=t.edgeL===Ut.WALL?e+.35:t.edgeL===Ut.OPEN&&!t.bridge&&!t.gap?e+10:1/0,i=t.edgeR===Ut.WALL?e+.35:t.edgeR===Ut.OPEN&&!t.bridge&&!t.gap?e+10:1/0,r=t.fork>t.hw+.6?t.fork-t.hw-.35:0;return{L:n,R:i,island:r}}};var Jn={vmax:33,accel:4.2,mu:1,launchEff:.84,minRadiusPerHw:2.6,headingWindow:1.2};function Ts(s){return Math.sqrt(Jn.mu*9.81*Math.max(s,1))*1.12}function Un(s,t,e=Jn.vmax){return Math.min(e,Math.sqrt(s*s+2*Jn.accel*t))}function iu(s,t,e,n,i=3.2){let r=s*Math.cos(t),a=s*Math.sin(t),o=(e+i)/Math.max(r,.1);return a*o-.5*9.81*o*o>=-n+.25}function zy(s,t,e){let n=0,i=80;for(let r=0;r<30;r++){let a=(n+i)/2;iu(s,t,a,e)?n=a:i=a}return n}function su(s,t,e){let n=s*Math.cos(t),i=e/n;return s*Math.sin(t)*i-.5*9.81*i*i}var Go=class{constructor(){this.log=[],this.stats={gapsShrunk:0,runupsExtended:0,turnsWidened:0,headingFlips:0,forks:0,gapsOk:0,failures:0}}note(t){this.log.push(t),this.log.length>40&&this.log.shift()}planJump(t,e,n,i,r=18,a=90){let o=r,c=n;for(;;){let h=Un(t,o+10)*Jn.launchEff,l=zy(h,e,i)*.9;if(c<=l)return this.stats.gapsOk++,{runup:o,gap:c,vLaunch:h/Jn.launchEff};if(o<a){o+=8,this.stats.runupsExtended++;continue}return this.stats.gapsShrunk++,this.note(`gap ${n.toFixed(1)}\u2192${l.toFixed(1)} m`),{runup:o,gap:Math.max(5,l),vLaunch:h/Jn.launchEff}}}checkTurn(t,e){let n=e*Jn.minRadiusPerHw;return t<n?(this.stats.turnsWidened++,n):t}turnDir(t,e,n){let i=Jn.headingWindow,r=a=>Math.abs(t+a*e)<=i;return r(n)?n:r(-n)?(this.stats.headingFlips++,-n):t>0?-1:1}checkSamples(t){let e=t[0],n=t[t.length-1],i=!0;n.fork>.01&&(i=!1,this.note("fork did not rejoin"));for(let r of t)if(!isFinite(r.x+r.y+r.z)){i=!1;break}return Math.abs(n.th)>Jn.headingWindow+.35&&(i=!1,this.note("heading window exceeded")),i||this.stats.failures++,i&&!!e}};function By(s,t,e,n){let i=c=>{if(c<t)return-1e9;let h=-e,l=Math.min(n,c-t);for(let u=0;u<l;u++)h+=re(-.27,0,ae(.3,1,u/n));return h},r=c=>{let h=s,l=c*Math.cos(h),u=c*Math.sin(h);for(let f=t;f<t+200;f+=.5){let d=f/l;if(u*d-4.905*d*d+.4<=i(f))return f}return 1e9},a=8,o=70;for(let c=0;c<24;c++){let h=(a+o)/2;r(h)<=t+n*.68?a=h:o=h}return a}function Oy(s,t,e){let n=5,i=80;for(let r=0;r<24;r++){let a=(n+i)/2;iu(a*Jn.launchEff,s,t,e)?i=a:n=a}return i}var ru=["bridgeCollapse","pillars","croc","waterfall","blades","statue"],au={bridgeCollapse:"Collapsing Rope Bridge",pillars:"Falling Pillars",croc:"Crocodile Ford",waterfall:"Waterfall Jump",blades:"Tunnel of Blades",statue:"Falling Colossus"},Wo=class{constructor(t,e,n={}){this.track=t,this.rng=new ce(e),this.seed=e,this.val=new Go,this.gapMul=n.gapMul||1,this.cur={x:0,y:0,z:0,th:0},this.pieces=[],this.pieceId=0,this.vDesign=0,this.nextSet=260,this.bag=[],this.forced=null,this.lastType="",this.sinceGap=999}get s(){return this.track.count*$e}emit(t){let e=this.cur,n=e.th,i=Math.sin(n),r=Math.cos(n),a={x:e.x,y:e.y,z:e.z,th:n,fx:i,fz:r,rx:-r,rz:i,s:this.track.count*$e,hw:t.hw??6,bank:t.bank??ft((t.k||0)*5,-.1,.1),surf:t.surf??Xt.DIRT,edgeL:t.edgeL??Ut.OPEN,edgeR:t.edgeR??Ut.OPEN,gap:!!t.gap,hole:!1,fork:t.fork||0,floorY:t.floorY??e.y-30,ford:!!t.ford,waterY:t.waterY??-999,bridge:!!t.bridge,tunnel:!!t.tunnel,k:t.k||0,hairpin:!!t.hairpin,ramp:t.ramp||0,piece:this._piece,lanes:t.lanes||null,bridgeSway:0,bump:null,causeway:!!t.causeway,ledge:t.ledge||0,plaza:!!t.plaza,pud:t.pud||null,stream:!!t.stream,kind:t.kind||""};return this.track.push(a),e.th+=(t.k||0)*$e,e.x+=i*$e,e.z+=r*$e,e.y+=(t.grade||0)*$e,a}begin(t,e={}){let n={id:this.pieceId++,type:t,i0:this.track.count,i1:0,s0:this.s,s1:0,seed:this.rng.int(1,1e9),pickups:[],set:null,...e};return this._piece=n,n}end(t){return t.i1=this.track.count-1,t.s1=this.s,this.pieces.push(t),this._piece=null,this.lastType=t.type,t}edgePick(t){return this.rng.weighted([{w:5,v:Ut.OPEN},{w:2.5,v:Ut.WALL},{w:1+t*2,v:Ut.CLIFF}])}homeGrade(){return ft(-this.cur.y*.004,-.05,.05)}coinLine(t,e,n,i,r=4){for(let a=e;a<=n;a+=r)t.pickups.push({kind:"coin",s:a,lat:i(a),y:.9})}straight(t,e=this.rng.range(34,70),n=0){let i=this.begin("straight"),r=this.rng,a=this.edgePick(t*.6),o=this.edgePick(t*.6),c=r.range(5.8,6.8),h=this.homeGrade(),l=r.range(.02,.07),u=r.range(0,6);for(let d=0;d<e;d++)this.emit({hw:c,grade:h+n+Math.sin(d/e*Math.PI*2+u)*l,edgeL:a,edgeR:o,surf:r.chance(.04)?Xt.MUD:Xt.DIRT});let f=r.range(-3,3);return this.coinLine(i,i.s0+8,i.s0+e-8,d=>f+Math.sin(d*.08)*2.2,4),r.chance(.25)&&i.pickups.push({kind:"nitro",s:i.s0+e*.6,lat:-f,y:1}),this.vDesign=Un(this.vDesign,e),this.end(i)}curve(t,e=!1){let n=this.begin("curve"),i=this.rng,r=i.range(5.8,6.6),a=e?i.range(28,42):re(i.range(58,100),i.range(32,54),t);a=this.val.checkTurn(a,r);let o=i.range(.45,1.15),c=this.val.turnDir(this.cur.th,o,i.sign()),h=Math.round(o*a),l=c/a,u=c>0?"edgeR":"edgeL",f=c>0?"edgeL":"edgeR",d=i.chance(.3+t*.3)?Ut.CLIFF:i.chance(.5)?Ut.WALL:Ut.OPEN,m=this.homeGrade()+i.range(-.03,.03);for(let x=0;x<h;x++){let p=Math.min(ae(0,.22,x/h),ae(0,.22,1-x/h));this.emit({hw:r,k:l*(.35+.65*p)*1.18,grade:m,[u]:d,[f]:Ut.OPEN})}return this.coinLine(n,n.s0+6,n.s1-6,x=>-c*3*Math.sin((x-n.s0)/h*Math.PI),5),this.vDesign=Math.min(Un(this.vDesign,h*.3),Ts(a)),n.radius=a,n.dir=c,this.end(n)}sbend(t){return this.curve(t,this.rng.chance(t)),this.curve(t,!1)}hairpin(t,e=null){let n=this.begin("brakezone"),i=this.rng;for(let g=0;g<26;g++)this.emit({hw:6.2+g*.04,grade:this.homeGrade()});n.hint="hairpin",this.end(n);let r=this.begin("hairpin"),a=7.2,o=this.val.checkTurn(i.range(19,24),a),c=this.cur.th>.15?-i.range(.5,.9):this.cur.th<-.15?i.range(.5,.9):i.sign()*i.range(.5,.9),h=Math.abs(c-this.cur.th),l=Math.sign(c-this.cur.th),u=Math.round(h*o),f=l/o,d=l>0?"edgeR":"edgeL",m=l>0?"edgeL":"edgeR",x=i.chance(.55)?Ut.CLIFF:Ut.WALL,p=e??i.range(-.06,.06);for(let g=0;g<u;g++){let v=Math.min(ae(0,.18,g/u),ae(0,.18,1-g/u));this.emit({hw:a,k:f*(.3+.7*v)*1.12,grade:p,surf:Xt.STONE,[d]:x,[m]:Ut.WALL,hairpin:!0,bank:ft(f*3,-.07,.07)})}return this.coinLine(r,r.s0+4,r.s1-4,()=>-l*3.4,4),this.vDesign=Ts(o),r.radius=o,r.dir=l,this.end(r)}crest(t){let e=this.begin("crest"),n=this.rng,i=n.range(24,32),r=n.range(30,40),a=n.range(.07,.11),o=-n.range(.1,.15);for(let c=0;c<i;c++)this.emit({hw:6.2,grade:a*ae(0,.4,c/i)});for(let c=0;c<r;c++)this.emit({hw:6.2,grade:re(o,0,ae(.5,1,c/r))});return this.coinLine(e,e.s0+i-6,e.s0+i+14,()=>0,3),e.pickups.forEach(c=>c.y=1.6),this.vDesign=Un(this.vDesign,i+r),this.end(e)}gap(t,e=!1){let n=this.rng,i=e?4:2.2,r=e?.27:n.range(.21,.27),a=(e?re(18,26,t):re(8,17,t)*n.range(.85,1.1))*this.gapMul,o=80,c=1.22,h=r,l,u=0,f=0;for(let R=0;R<8&&(l=this.val.planJump(this.vDesign,h,a,i,e?40:22),f=Oy(h,l.gap,i)*1.1,u=Math.min(33,By(h*c,l.gap,i,o)),!(u>=Math.max(f+1.5,27)||h<.11));R++)h*=.92;r=h;let d=this.begin(e?"waterfall":"gap");d.gapLen=l.gap,d.vLaunch=l.vLaunch,d.angle=r;let m=e?6.4:6,x=this.cur.y-(e?42:30);for(let R=0;R<l.runup;R++)this.emit({hw:m,grade:0,edgeL:Ut.OPEN,edgeR:Ut.OPEN,floorY:R>l.runup-6?x:void 0});let p=11;for(let R=0;R<p;R++){let w=Math.tan(r)*ae(0,1,(R+1)/p);this.emit({hw:m,grade:w,surf:Xt.STONE,ramp:w,edgeL:Ut.CLIFF,edgeR:Ut.CLIFF,floorY:x})}d.lipS=this.s;let g=this.cur.y,v=Math.round(l.gap);for(let R=0;R<v;R++){let w=R/v;this.emit({hw:m,gap:!0,grade:-i/v,floorY:x,edgeL:Ut.CLIFF,edgeR:Ut.CLIFF})}d.landS=this.s;for(let R=0;R<o;R++)this.emit({hw:m+.8,grade:re(-.27,0,ae(.3,1,R/o)),surf:R<10?Xt.STONE:Xt.DIRT,edgeL:R<6?Ut.CLIFF:Ut.OPEN,edgeR:R<6?Ut.CLIFF:Ut.OPEN,floorY:R<8?x:void 0});let _=(d.vCap-1)*1,y=r;for(let R=2;R<v+14;R+=2.5){let w=su(_,r*1.2,R);if(w<-i-3)break;d.pickups.push({kind:"coin",s:d.lipS+R,lat:0,yAbs:g+w+1.1})}return e&&d.pickups.push({kind:"relic",s:d.lipS+v*.55,lat:0,yAbs:g+su(_,r*1.2,v*.55)+1.3}),d.vCap=Math.max(u,f+1.5),d.vNeed=f,this.vDesign=Un(l.vLaunch*.8,o),this.sinceGap=0,this.end(d)}bridge(t,e=!1){let n=this.rng,i=Math.round(e?n.range(80,100):n.range(44,74)),r=this.begin("bridgeApproach");for(let d=0;d<14;d++)this.emit({hw:5.8-d*.17,grade:0,edgeL:Ut.WALL,edgeR:Ut.WALL,surf:Xt.STONE});this.end(r);let a=this.begin(e?"bridgeCollapse":"bridge"),o=this.cur.y-n.range(34,48),c=this.cur.y,h=Math.min(2.2,i*.025),l=e?0:n.chance(.4)?n.sign()*n.range(.002,.005):0,u=0;for(let d=0;d<i;d++){let m=(d+1)/i,x=-Math.sin(m*Math.PI)*h;this.emit({hw:3.3,grade:(x-u)/$e,bridge:!0,surf:Xt.PLANK,edgeL:Ut.CLIFF,edgeR:Ut.CLIFF,floorY:o,k:l,bank:0}),u=x}this.cur.y=c+u,a.floorY=o,this.coinLine(a,a.s0+5,a.s1-5,()=>0,3.5),e&&a.pickups.push({kind:"relic",s:a.s0+i*.7,lat:0,y:1.1}),a.collapse=e,this.end(a);let f=this.begin("bridgeExit");for(let d=0;d<14;d++)this.emit({hw:3.5+d*.18,grade:0,edgeL:Ut.WALL,edgeR:Ut.WALL,surf:Xt.STONE});return this.end(f),this.vDesign=Math.min(this.vDesign,26),a}fork(t){let e=this.rng,n=this.begin("fork"),i=150,r=4.5,a=r+e.range(5,7.5);n.danger=e.sign();let o=this.homeGrade();for(let h=0;h<i;h++){let l=h/i,u=a*Math.min(ae(0,.24,l),ae(0,.24,1-l)),f=u>.05,d=Ut.CLIFF;this.emit({hw:f?r+(1-Math.min(1,u/a))*1.5:6,fork:f?u:0,grade:o,bank:0,edgeL:n.danger<0?d:Ut.WALL,edgeR:n.danger>0?d:Ut.WALL,surf:Xt.DIRT})}let c=n.s0+i/2;n.forkO=a,n.hazards=[];for(let h=n.s0+36;h<n.s0+i-36;h+=4)n.pickups.push({kind:"coin",s:h,lat:-n.danger*a,y:.9});for(let h=n.s0+34;h<n.s0+i-34;h+=2.5)n.pickups.push({kind:"coin",s:h,lat:n.danger*a+Math.sin(h*.3)*1.2,y:.9,value:2});n.pickups.push({kind:"relic",s:c+12,lat:n.danger*a,y:1.1,rare:!0});for(let h=0;h<4;h++)n.hazards.push({s:n.s0+44+h*14+e.range(-3,3),lat:n.danger*a+e.pick([-1.6,1.6,0])});return this.val.stats.forks++,this.vDesign=Math.min(Un(this.vDesign,i),30),this.end(n)}ford(t,e=!1){let n=this.rng,i=this.begin(e?"croc":"ford"),r=e?70:44,a=e?7:6.4,o=this.cur.y,c=e?1.2:.85,h=o-c+(e?.75:.5),l=0;for(let u=0;u<r;u++){let f=(u+1)/r,d=-c*ae(0,.3,f)*ae(0,.3,1-f);this.emit({hw:a,grade:(d-l)/$e,ford:!0,waterY:h,surf:f>.15&&f<.85?Xt.WATER:Xt.MUD,floorY:o-30}),l=d}return this.cur.y=o+l,i.waterY=h,this.coinLine(i,i.s0+6,i.s1-6,u=>Math.sin(u*.2)*3.4,4),e&&i.pickups.push({kind:"nitro",s:i.s1-4,lat:0,y:1}),this.vDesign=Math.min(this.vDesign,22),this.end(i)}colonnade(t,e){let n=this.rng,i=this.begin(e),r=e==="blades"?92:e==="statue"?120:150,a=e==="statue"?6.8:e==="blades"?5:6.6;for(let o=0;o<r;o++)this.emit({hw:a,grade:e==="blades"?-.02:this.homeGrade(),edgeL:Ut.WALL,edgeR:Ut.WALL,surf:Xt.STONE,tunnel:e==="blades"&&o>6&&o<r-6});return e!=="pillars"&&this.coinLine(i,i.s0+8,i.s1-8,()=>0,5),e==="statue"&&(i.side=n.sign()),this.vDesign=Un(this.vDesign,r),this.end(i)}templeStart(){let t=this.begin("temple");for(let e=0;e<70;e++)this.emit({hw:e<30?8:re(8,6,ae(30,70,e)),grade:0,edgeL:Ut.WALL,edgeR:Ut.WALL,surf:e<50?Xt.STONE:Xt.DIRT});return this.vDesign=18,t.valid=!0,this.end(t)}plaza(t){let e=this.rng,n=this.begin("plaza"),i=Math.round(e.range(78,96));for(let r=0;r<i;r++){let a=r/i,o=ae(0,.22,a)*ae(0,.22,1-a);this.emit({hw:6.2+o*5.6,grade:0,edgeL:Ut.WALL,edgeR:Ut.WALL,surf:Xt.STONE,plaza:o>.6})}n.fountainS=n.s0+i/2;for(let r=0;r<6.28;r+=.45)n.pickups.push({kind:"coin",s:n.fountainS+Math.cos(r)*6.4,lat:Math.sin(r)*6.4,y:.9});return e.chance(.4)&&n.pickups.push({kind:"nitro",s:n.s1-10,lat:e.range(-4,4),y:1}),n.decor="plaza",this.vDesign=Math.min(Un(this.vDesign,i),27),this.end(n)}causeway(t){let e=this.rng,n=this.begin("causeway"),i=Math.round(e.range(90,130)),r=this.cur.y,a=r-e.range(2.6,3.4),o=e.chance(.5)?e.range(.002,.005):0,c=o?this.val.turnDir(this.cur.th,o*i,e.sign())*o:0,h=0;for(let l=0;l<i;l++){let u=(l+1)/i,f=Math.sin(u*Math.PI)*1.2;this.emit({hw:5.6,grade:(f-h)/$e,k:c,edgeL:Ut.WALL,edgeR:Ut.WALL,surf:Xt.STONE,causeway:!0,waterY:a}),h=f}return this.cur.y=r+h,n.waterY=a,this.coinLine(n,n.s0+6,n.s1-6,l=>Math.sin(l*.12)*2.6,4),this.vDesign=Un(this.vDesign,i),this.end(n)}ledge(t,e=!1){let n=this.rng,i=this.begin(e?"fallsLedge":"ledge"),r=Math.round(n.range(100,140)),a=n.sign(),o=n.range(.003,.0055),c=this.val.turnDir(this.cur.th,o*r*.87,-a),h=c*o,l=e?5.4:5.2,u=this.homeGrade()+n.range(-.035,.035),f=a<0?"edgeL":"edgeR",d=a<0?"edgeR":"edgeL";if(i.falls=[],e)for(let m=22;m<r-20;m+=n.range(30,44))i.falls.push(Math.round(m));for(let m=0;m<r;m++){let x=e&&i.falls.some(g=>Math.abs(m-g)<3.5),p=Math.min(ae(0,.15,m/r),ae(0,.15,1-m/r));this.emit({hw:l,k:h*p,grade:u,[f]:Ut.WALL,[d]:Ut.CLIFF,ledge:a,surf:x?Xt.WATER:Math.sin(m*.13)>.55?Xt.STONE:Xt.DIRT,stream:x,floorY:this.cur.y-40})}return i.side=a,this.coinLine(i,i.s0+8,i.s1-8,()=>a*1.8,4),e&&i.pickups.push({kind:"relic",s:i.s0+i.falls[0]+.5,lat:a*2.4,y:1.2}),this.vDesign=Math.min(Un(this.vDesign,r),31),this.end(i)}mudflat(t){let e=this.rng,n=this.begin("mudflat"),i=Math.round(e.range(80,110)),r=[],a=this.homeGrade();for(let o=0;o<9;o++)r.push({s:this.s+e.range(12,i-10),lat:e.range(-6.5,6.5),r:e.range(1.8,3.6)});n.puddles=r;for(let o=0;o<i;o++){let c=o/i,h=ae(0,.2,c)*ae(0,.2,1-c);this.emit({hw:6.2+h*3.4,grade:a+Math.sin(o*.09)*.02,surf:Xt.MUD,edgeL:Ut.OPEN,edgeR:Ut.OPEN,pud:r})}return this.coinLine(n,n.s0+8,n.s1-8,o=>Math.sin(o*.07)*4.5,4),this.vDesign=Math.min(Un(this.vDesign,i),24),this.end(n)}switchback(t){let e=this.cur.y<20?.055:-.05;return this.hairpin(t,e),this.straight(t,24,e*.6),this.hairpin(t,e)}nextSetPiece(){if(this.forced){let t=this.forced;return this.forced=null,t}if(!this.bag.length){this.bag=ru.slice();for(let t=this.bag.length-1;t>0;t--){let e=this.rng.int(0,t);[this.bag[t],this.bag[e]]=[this.bag[e],this.bag[t]]}}return this.bag.pop()}emitSetPiece(t,e){switch(t){case"bridgeCollapse":{let n=this.bridge(e,!0);return n.set={type:t},n}case"croc":{let n=this.ford(e,!0);return n.set={type:t},n}case"waterfall":{let n=this.gap(e,!0);return n.set={type:t},n}default:{let n=this.colonnade(e,t);return n.set={type:t},n}}}generateNext(){let t=this.s,e=ft(t/4500,0,1),n=this.rng;if(this.track.count===0)return this.templeStart();let i=this.pieces.length;if(t>=this.nextSet||this.forced){let o=this.nextSetPiece();this.straight(e,24);let c=this.emitSetPiece(o,e);return this.nextSet=t+re(400,230,e)+n.range(-40,60),this.straight(e,22),this._check(i),c}this.sinceGap++;let r=n.weighted([{w:3,v:"straight"},{w:4,v:"curve"},{w:1.5+e*2,v:"sbend"},{w:.7+e*1.4,v:"hairpin"},{w:1.6,v:"crest"},{w:this.sinceGap>2?1.5+e*1.5:0,v:"gap"},{w:1.1,v:"bridge"},{w:this.lastType==="fork"?0:.9+e*.4,v:"fork"},{w:.7,v:"ford"},{w:this.lastType==="plaza"?0:.8,v:"plaza"},{w:this.lastType==="causeway"?0:.8,v:"causeway"},{w:this.lastType==="ledge"?0:1,v:"ledge"},{w:this.lastType==="fallsLedge"?0:.7,v:"fallsLedge"},{w:this.lastType==="mudflat"?0:.8,v:"mudflat"},{w:.5+e*.8,v:"switchback"}]);if(r==="fallsLedge"){let o=this.ledge(e,!0);return this._check(i),o}let a=this[r](e);return this._check(i),a}_check(t){for(let e=t;e<this.pieces.length;e++){let n=this.pieces[e],i=[];for(let r=n.i0;r<=n.i1;r++)i.push(this.track.get(r));n.valid=this.val.checkSamples(i)}}ensure(t){let e=0;for(;this.s<t&&e<50;)this.generateNext(),e++;return e}};var Lt={};function kn(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function Ie(s,t=!0,e=!0){let n=new go(s);return t&&(n.wrapS=n.wrapT=vs),n.anisotropy=4,e&&(n.colorSpace=an),n.needsUpdate=!0,n}function Hy(s,t,e){let n=new ce(e),i=new Float32Array(t*t);for(let a=0;a<i.length;a++)i[a]=n.next();let r=new Float32Array(s*s);for(let a=0;a<s;a++)for(let o=0;o<s;o++){let c=o/s*t,h=a/s*t,l=Math.floor(c),u=Math.floor(h),f=c-l,d=h-u,m=f*f*(3-2*f),x=d*d*(3-2*d),p=i[u%t*t+l%t],g=i[u%t*t+(l+1)%t],v=i[(u+1)%t*t+l%t],_=i[(u+1)%t*t+(l+1)%t];r[a*s+o]=(p+(g-p)*m)*(1-x)+(v+(_-v)*m)*x}return r}function Fe(s,t,e=5,n=4){let i=new Float32Array(s*s),r=.5,a=0;for(let o=0;o<e;o++){let c=Hy(s,n<<o,t+o*31);for(let h=0;h<i.length;h++)i[h]+=c[h]*r;a+=r,r*=.5}for(let o=0;o<i.length;o++)i[o]/=a;return i}function pn(s,t){let e=kn(s,s),n=e.getContext("2d"),i=n.createImageData(s,s),r=i.data;for(let a=0;a<s;a++)for(let o=0;o<s;o++){let c=a*s+o,h=t(o,a,c);r[c*4]=h[0],r[c*4+1]=h[1],r[c*4+2]=h[2],r[c*4+3]=h[3]??255}return n.putImageData(i,0,0),e}var ou=(s,t,e)=>s+(t-s)*e,ke=(s,t,e)=>[ou(s[0],t[0],e),ou(s[1],t[1],e),ou(s[2],t[2],e)],_n=s=>s<0?0:s>1?1:s;function lu(){if(Lt.dirt)return Lt.dirt;let s=512,t=Fe(s,11,6,4),e=Fe(s,77,3,16),n=pn(s,(i,r,a)=>{let o=i/s,c=Math.exp(-Math.pow((o-.3)/.05,2))+Math.exp(-Math.pow((o-.7)/.05,2)),h=e[a]>.72?(e[a]-.72)*3:0,l=ke([128,96,64],[92,70,46],t[a]);l=ke(l,[70,52,36],c*.55),l=ke(l,[168,150,120],h);let u=_n((Math.abs(o-.5)-.38)*9+(t[a]-.5)*2);return l=ke(l,[72,92,40],u*.85),l});return Lt.dirt=Ie(n)}function cu(){if(Lt.stone)return Lt.stone;let s=512,t=Fe(s,5,5,4),e=Fe(s,9,4,8),n=new ce(3),i=kn(s,s),r=i.getContext("2d"),a=pn(s,(c,h,l)=>{let u=t[l],f=ke([118,110,92],[86,82,70],u);return f=ke(f,[64,86,44],_n((e[l]-.55)*3)),f});r.drawImage(a,0,0),r.strokeStyle="rgba(30,26,20,0.85)",r.lineWidth=5;let o=6;for(let c=0;c<o;c++){let h=c*s/o;r.beginPath(),r.moveTo(0,h),r.lineTo(s,h),r.stroke();let l=c%2*.5;for(let u=0;u<4;u++){let f=(u+l)/4*s+n.range(-10,10);r.beginPath(),r.moveTo(f,h),r.lineTo(f,h+s/o),r.stroke()}}r.strokeStyle="rgba(90,120,50,0.5)",r.lineWidth=2;for(let c=0;c<140;c++){r.beginPath();let h=n.range(0,s),l=n.range(0,s);r.moveTo(h,l),r.lineTo(h+n.range(-6,6),l+n.range(-6,6)),r.stroke()}return Lt.stone=Ie(i)}function hu(){if(Lt.ground)return Lt.ground;let s=512,t=Fe(s,21,6,4),e=Fe(s,41,4,12),n=pn(s,(i,r,a)=>{let o=ke([56,74,30],[92,98,40],t[a]);o=ke(o,[86,66,40],_n((e[a]-.55)*4)),o=ke(o,[118,128,56],_n((t[a]-.7)*5)*.5);let c=e[a]>.68?.4:0;return o=ke(o,[130,90,40],c*.5),o});return Lt.ground=Ie(n)}function Kn(){if(Lt.rock)return Lt.rock;let s=512,t=Fe(s,61,6,3),e=Fe(s,62,4,10),n=pn(s,(i,r,a)=>{let o=.5+.5*Math.sin(r/s*Math.PI*14+t[a]*6),c=ke([92,84,72],[140,128,108],t[a]*.7+o*.3);return c=ke(c,[58,84,40],_n((e[a]-.6)*3.5)*.8),c=ke(c,[40,36,30],_n((.3-t[a])*4)),c});return Lt.rock=Ie(n)}function Nn(){if(Lt.ruin)return Lt.ruin;let s=512,t=Fe(s,71,6,4),e=Fe(s,72,5,6),n=new ce(9),i=pn(s,(o,c,h)=>{let l=ke([150,138,112],[104,98,84],t[h]);return l=ke(l,[70,96,44],_n((e[h]-.5)*3)*.9),l}),r=kn(s,s),a=r.getContext("2d");a.drawImage(i,0,0),a.strokeStyle="rgba(36,30,22,0.8)",a.lineWidth=4;for(let o=0;o<=4;o++){let c=o*s/4;a.beginPath(),a.moveTo(0,c),a.lineTo(s,c),a.stroke();for(let h=0;h<3;h++){let l=(h+o%2*.5)/3*s;a.beginPath(),a.moveTo(l,c),a.lineTo(l,c+s/4),a.stroke()}}a.strokeStyle="rgba(40,34,26,0.55)",a.lineWidth=3;for(let o=0;o<10;o++){let c=n.range(20,s-60),h=n.range(20,s-60),l=n.range(18,34);a.strokeRect(c,h,l,l),a.beginPath(),a.arc(c+l/2,h+l/2,l/4,0,Math.PI*2),a.stroke()}return Lt.ruin=Ie(r)}function _r(){if(Lt.planks)return Lt.planks;let s=256,t=Fe(s,81,4,4),e=pn(s,(n,i,r)=>{let a=.5+.5*Math.sin(i*.35+t[r]*10),o=ke([118,82,48],[78,54,32],a*.6+t[r]*.4);return(n<4||n>s-4)&&(o=[40,28,18]),o});return Lt.planks=Ie(e)}function ra(){if(Lt.crate)return Lt.crate;let s=256,t=Fe(s,91,4,4),e=kn(s,s),n=e.getContext("2d");return n.drawImage(pn(s,(i,r,a)=>{let o=.5+.5*Math.sin(i*.25+t[a]*8);return ke([168,124,72],[118,82,46],o*.5+t[a]*.5)}),0,0),n.strokeStyle="#3a2614",n.lineWidth=10,n.strokeRect(5,5,s-10,s-10),n.lineWidth=12,n.beginPath(),n.moveTo(10,10),n.lineTo(s-10,s-10),n.stroke(),n.fillStyle="rgba(40,24,12,0.7)",n.font="bold 30px serif",n.textAlign="center",n.fillText("FRAGILE",s/2,s/2+60),Lt.crate=Ie(e,!1)}function uu(s=[74,88,52]){let t="paint"+s.join();if(Lt[t])return Lt[t];let e=512,n=Fe(e,101,5,4),i=new ce(5),r=Fe(e,102,4,16),a=kn(e,e),o=a.getContext("2d");o.drawImage(pn(e,(c,h,l)=>{let u=ke(s,s.map(f=>f*.7),n[l]);return u=ke(u,[120,66,34],_n((r[l]-.74)*6)),u=ke(u,[150,130,100],_n((n[l]-.72)*4)*.5),u}),0,0),o.strokeStyle="rgba(200,190,160,0.35)",o.lineWidth=1;for(let c=0;c<220;c++){let h=i.range(0,e),l=i.range(0,e),u=i.range(0,6.28),f=i.range(4,26);o.beginPath(),o.moveTo(h,l),o.lineTo(h+Math.cos(u)*f,l+Math.sin(u)*f),o.stroke()}return Lt[t]=Ie(a)}function du(){if(Lt.leather)return Lt.leather;let s=256,t=Fe(s,111,5,8);return Lt.leather=Ie(pn(s,(e,n,i)=>ke([92,52,28],[140,86,44],t[i])))}function fu(){if(Lt.tire)return Lt.tire;let s=kn(256,64),t=s.getContext("2d");t.fillStyle="#1d1a17",t.fillRect(0,0,256,64),t.fillStyle="#0c0b0a";for(let e=0;e<16;e++){let n=e*16;t.beginPath(),t.moveTo(n,0),t.lineTo(n+9,0),t.lineTo(n+3,30),t.lineTo(n+9,64),t.lineTo(n,64),t.lineTo(n-6,30),t.fill()}t.fillStyle="rgba(110,80,50,0.35)";for(let e=0;e<300;e++)t.fillRect(Math.random()*256,Math.random()*64,2,2);return Lt.tire=Ie(s)}function Xo(s="broad"){let t="leaf"+s;if(Lt[t])return Lt[t];let e=256,n=kn(e,e),i=n.getContext("2d"),r=new ce(s.length*13),a=["#2f5a1e","#3d6e24","#4e7d2a","#27491a","#5d8a30"];if(s==="frond"){i.strokeStyle="#3a5a20",i.lineWidth=4,i.beginPath(),i.moveTo(e/2,e),i.lineTo(e/2,0),i.stroke();for(let c=0;c<26;c++){let h=e-c*(e/26),l=Math.sin(c/26*Math.PI)*e*.48+10;for(let u of[-1,1])i.fillStyle=a[r.int(0,4)],i.beginPath(),i.moveTo(e/2,h),i.quadraticCurveTo(e/2+u*l*.6,h-18,e/2+u*l,h-30),i.quadraticCurveTo(e/2+u*l*.5,h-8,e/2,h-6),i.fill()}}else if(s==="vine")for(let c=0;c<6;c++){let h=r.range(20,e-20);i.strokeStyle="#3b4f1c",i.lineWidth=3,i.beginPath(),i.moveTo(h,0);for(let l=0;l<e;l+=16)i.lineTo(h+Math.sin(l*.05+c)*8,l);i.stroke();for(let l=8;l<e*r.range(.6,1);l+=10)i.fillStyle=a[r.int(0,4)],i.beginPath(),i.ellipse(h+Math.sin(l*.05+c)*8+r.range(-8,8),l,7,4,r.range(0,3),0,6.3),i.fill()}else for(let c=0;c<70;c++){let h=r.range(30,e-30),l=r.range(30,e-30),u=r.range(0,6.28),f=r.range(18,40);i.save(),i.translate(h,l),i.rotate(u),i.fillStyle=a[r.int(0,4)],i.beginPath(),i.moveTo(0,-f),i.quadraticCurveTo(f*.55,0,0,f),i.quadraticCurveTo(-f*.55,0,0,-f),i.fill(),i.strokeStyle="rgba(160,190,90,0.35)",i.lineWidth=1.2,i.beginPath(),i.moveTo(0,-f),i.lineTo(0,f),i.stroke(),i.restore()}let o=Ie(n,!1);return Lt[t]=o}function aa(){if(Lt.bark)return Lt.bark;let s=256,t=Fe(s,131,5,4);return Lt.bark=Ie(pn(s,(e,n,i)=>{let r=.5+.5*Math.sin(e/s*Math.PI*18+t[i]*5),a=ke([62,50,36],[104,88,66],r*.6+t[i]*.4);return a=ke(a,[70,96,44],_n((t[i]-.6)*3)),a}))}function As(){if(Lt.wn)return Lt.wn;let s=256,t=Fe(s,141,4,6),e=pn(s,(n,i,r)=>{let a=t[i*s+(n+1)%s]-t[r],o=t[(i+1)%s*s+n]-t[r];return[128+a*900,128+o*900,255]});return Lt.wn=Ie(e,!0,!1)}function qo(){if(Lt.streak)return Lt.streak;let s=256,t=Fe(s,151,4,8),e=pn(s,(n,i,r)=>{let a=t[i%s*s+n],o=Math.pow(_n(.4+.5*Math.sin(n*.4+t[n]*30)+a*.4),2);return[210+o*45,230+o*25,240,90+o*160]});return Lt.streak=Ie(e,!0)}function Li(){if(Lt.dot)return Lt.dot;let s=kn(64,64),t=s.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Lt.dot=Ie(s,!1)}function If(){if(Lt.shaft)return Lt.shaft;let s=kn(128,256),t=s.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"rgba(255,230,170,0.9)"),e.addColorStop(1,"rgba(255,230,170,0)"),t.fillStyle=e,t.fillRect(0,0,128,256);let n=t.createLinearGradient(0,0,128,0);return n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.5,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,1)"),t.globalCompositeOperation="destination-out",t.fillStyle=n,t.fillRect(0,0,128,256),Lt.shaft=Ie(s,!1)}function Lf(s){let t="glyph"+s;if(Lt[t])return Lt[t];let e=kn(256,256),n=e.getContext("2d");if(n.drawImage(Nn().image,0,0,256,256),n.lineWidth=12,n.lineCap="round",s==="safe"){n.strokeStyle="#e8c35a",n.fillStyle="#e8c35a",n.beginPath(),n.arc(128,128,38,0,6.3),n.fill();for(let i=0;i<12;i++){let r=i/12*6.283;n.beginPath(),n.moveTo(128+Math.cos(r)*56,128+Math.sin(r)*56),n.lineTo(128+Math.cos(r)*86,128+Math.sin(r)*86),n.stroke()}}else n.fillStyle="#d8462b",n.beginPath(),n.moveTo(128,30),n.lineTo(226,210),n.lineTo(30,210),n.closePath(),n.fill(),n.fillStyle="#1c140e",n.beginPath(),n.arc(128,132,34,0,6.3),n.fill(),n.fillRect(108,150,40,30),n.fillStyle="#d8462b",n.beginPath(),n.arc(114,128,9,0,6.3),n.arc(142,128,9,0,6.3),n.fill();return Lt[t]=Ie(e,!1)}function pu(s,t,e,n){let i=new Float32Array(t*t);for(let o=0;o<t;o++)for(let c=0;c<t;c++){let h=0;for(let l=-1;l<=1;l++)for(let u=-1;u<=1;u++)h+=s[(o+l+t)%t*t+(c+u+t)%t];i[o*t+c]=h/9}let r=pn(t,(o,c,h)=>{let l=i[c*t+(o-1+t)%t],u=i[c*t+(o+1)%t],f=i[(c-1+t)%t*t+o],d=i[(c+1)%t*t+o],m=(l-u)*e,x=(d-f)*e,p=1,g=Math.hypot(m,x,p);return m/=g,x/=g,p/=g,[128+m*127,128+x*127,128+p*127]}),a=n?pn(t,(o,c,h)=>{let l=_n(n(i[h],h))*255;return[l,l,l]}):null;return{nc:r,rc:a}}function Pf(s,t=!1,e=1){let n=s.width,i=s.getContext("2d"),r=i.getImageData(0,0,n,n).data,a=new Float32Array(n*n);for(let o=0;o<n*n;o++){let c=(r[o*4]*.3+r[o*4+1]*.55+r[o*4+2]*.15)/255;t&&(c=1-c),a[o]=Math.pow(c,e)}return a}function Le(s,t={}){let e="pbr_"+s;if(Lt[e])return Lt[e];let n={dirt:lu,stone:cu,ground:hu,rock:Kn,ruin:Nn,planks:_r,crate:ra,leather:du,bark:aa,tire:fu}[s],i=n?n().image:t.canvas,r=Pf(i,!!t.invert,t.gamma||1);if(i.width!==i.height){let m=kn(256,256);m.getContext("2d").drawImage(i,0,0,256,256),r=Pf(m,!!t.invert,t.gamma||1)}let a=Math.round(Math.sqrt(r.length)),o=t.detail?Fe(a,t.detail,4,16):null;if(o)for(let d=0;d<r.length;d++)r[d]=r[d]*.8+o[d]*.2;let c=t.rough??.85,h=t.roughVar??.15,{nc:l,rc:u}=pu(r,a,t.strength??4,d=>c+(.5-d)*h*2),f={normalMap:Ie(l,!0,!1),roughnessMap:Ie(u,!0,!1)};if(n){let d=n();f.normalMap.repeat.copy(d.repeat),f.roughnessMap.repeat.copy(d.repeat)}return Lt[e]=f}function Df(){if(Lt.paintPBR)return Lt.paintPBR;let s=512,t=Fe(s,201,5,4),e=Fe(s,202,4,24),n=new ce(77),i=new Float32Array(s*s),r=new Float32Array(s*s);for(let c=0;c<s*s;c++){let h=e[c]>.74?-.6:0;i[c]=.5+(t[c]-.5)*.15+h,r[c]=.5+(e[c]>.74?.35:0)+_n((t[c]-.62)*2)*.25}for(let c=0;c<260;c++){let h=n.range(0,s),l=n.range(0,s),u=n.range(0,6.28),f=n.range(6,40);for(let d=0;d<f;d++){let m=(Math.floor(h+Math.cos(u)*d)%s+s)%s,x=(Math.floor(l+Math.sin(u)*d)%s+s)%s;i[x*s+m]-=.25,r[x*s+m]=.95}}let{nc:a}=pu(i,s,3.2,null),o=pn(s,(c,h,l)=>{let u=_n(r[l])*255;return[u,u,u]});return Lt.paintPBR={normalMap:Ie(a,!0,!1),roughnessMap:Ie(o,!0,!1)}}function Yo(s){let t="grain"+s;if(Lt[t])return Lt[t];let e=256,n=Fe(e,s.length*31+5,5,s==="canvas"?32:8),i=new ce(s.length),r=new Float32Array(e*e);for(let c=0;c<e;c++)for(let h=0;h<e;h++){let l=c*e+h,u=n[l];s==="canvas"&&(u=.5+.25*(Math.sin(h*1.6)+Math.sin(c*1.6))*.5+(n[l]-.5)*.4),s==="metal"&&(u=.5+(n[l]-.5)*.6+Math.sin(h*.9+n[l]*3)*.04),s==="rubber"&&(u=.5+(n[l]-.5)*.3),r[l]=u}let{nc:a,rc:o}=pu(r,e,s==="canvas"?2.5:1.6,c=>(s==="metal"?.42:s==="rubber"?.9:.95)+(.5-c)*.3);return Lt[t]={normalMap:Ie(a,!0,!1),roughnessMap:Ie(o,!0,!1)}}function mu(s=0){let t="gauge"+s;if(Lt[t])return Lt[t];let e=kn(128,128),n=e.getContext("2d");n.fillStyle="#e9dfc4",n.beginPath(),n.arc(64,64,62,0,6.3),n.fill(),n.strokeStyle="#2a2016",n.lineWidth=3;for(let r=0;r<=10;r++){let a=Math.PI*(.75+r*.15);n.beginPath(),n.moveTo(64+Math.cos(a)*50,64+Math.sin(a)*50),n.lineTo(64+Math.cos(a)*(r%5?42:36),64+Math.sin(a)*(r%5?42:36)),n.stroke()}n.strokeStyle="#9a2a1a",n.lineWidth=4,n.beginPath();let i=Math.PI*(.9+s*.5);return n.moveTo(64,64),n.lineTo(64+Math.cos(i)*44,64+Math.sin(i)*44),n.stroke(),n.fillStyle="#2a2016",n.beginPath(),n.arc(64,64,6,0,6.3),n.fill(),Lt[t]=Ie(e,!1)}function ue(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new de,h=0;for(let l=0;l<s.length;++l){let u=s[l],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,d,l),h+=d}}if(e){let l=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+l);l+=s[f].attributes.position.count}c.setIndex(u)}for(let l in r){let u=Uf(r[l]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,u)}for(let l in a){let u=a[l][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<a[l].length;++x)d.push(a[l][x][f]);let m=Uf(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(m)}}return c}function Uf(s){let t,e,n,i=-1,r=0;for(let h=0;h<s.length;++h){let l=s[h];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=l.gpuType),i!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*e}let a=new t(r),o=new ne(a,e,n),c=0;for(let h=0;h<s.length;++h){let l=s[h];if(l.isInterleavedBufferAttribute){let u=c/e;for(let f=0,d=l.count;f<d;f++)for(let m=0;m<e;m++){let x=l.getComponent(f,m);o.setComponent(f+u,m,x)}}else a.set(l.array,c);c+=l.count*e}return i!==void 0&&(o.gpuType=i),o}function oa(s,t,e=.35){return s.onBeforeCompile=n=>{n.uniforms.uTime=t,n.vertexShader=`uniform float uTime;
`+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
      #else
        vec3 ip = vec3(0.0);
      #endif
      float sway = max(position.y, 0.0) * ${e.toFixed(3)} * 0.08;
      transformed.x += sin(uTime * 1.3 + ip.x * 0.37 + ip.z * 0.11 + position.y * 0.4) * sway;
      transformed.z += cos(uTime * 1.1 + ip.z * 0.29 + position.x * 0.5) * sway * 0.7;`)},s.customProgramCacheKey=()=>"wind"+e,s}function $o(s,t){let e=s.attributes.position.count,n=new Float32Array(e*3);for(let i=0;i<e;i++)n[i*3]=t.r,n[i*3+1]=t.g,n[i*3+2]=t.b;return s.setAttribute("color",new ne(n,3)),s}function kf(s,t,e="x"){let n=s.attributes.position;for(let i=0;i<n.count;i++){let r=n.getY(i);n.setX(i,n.getX(i)+(e==="x"?t*r*r:0)),n.setZ(i,n.getZ(i)+(e==="z"?t*r*r:0))}return s.computeVertexNormals(),s}function Zo(s,t,e){let n=new ce(e),i=s.attributes.position,r=new Map;for(let a=0;a<i.count;a++){let o=`${i.getX(a).toFixed(3)},${i.getY(a).toFixed(3)},${i.getZ(a).toFixed(3)}`,c=r.get(o);c||(c=[n.range(-t,t),n.range(-t,t),n.range(-t,t)],r.set(o,c)),i.setXYZ(a,i.getX(a)+c[0],i.getY(a)+c[1],i.getZ(a)+c[2])}return s.computeVertexNormals(),s}function Nf(s,t,e=0){let n=new Se(s,t,1,3);return n.translate(0,t/2+e,0),n}function Ff(s){let t={},e=oa(new zt({map:Xo("broad"),alphaTest:.45,side:be,roughness:.85,vertexColors:!0}),s,.5),n=oa(new zt({map:Xo("frond"),alphaTest:.4,side:be,roughness:.8,vertexColors:!0}),s,.7),i=oa(new zt({map:Xo("vine"),alphaTest:.4,side:be,roughness:.9}),s,.9),r=(l,u)=>{let f=Le(l,u);return{normalMap:f.normalMap,roughnessMap:f.roughnessMap}},a=new zt({map:aa(),roughness:1,side:be,...r("bark",{strength:6,rough:.95})}),o=new zt({map:Nn(),roughness:1,...r("ruin",{strength:5,rough:.9})}),c=new zt({map:Kn(),roughness:1,flatShading:!1,...r("rock",{strength:6,rough:.92})}),h=new yt(1,1,1);{let l=new ce(1),u=[],f=new $t(.34,.72,16,9,4,!0);f.translate(0,8,0),kf(f,.006);{let x=f.attributes.position;for(let p=0;p<x.count;p++){let g=x.getX(p),v=x.getZ(p),_=x.getY(p),y=Math.atan2(v,g),R=1+Math.sin(y*5+_*.4)*.07+Math.sin(y*11-_*.9)*.03;x.setX(p,g*R),x.setZ(p,v*R)}f.computeVertexNormals()}u.push(f);for(let x=0;x<4;x++){let p=x/4*6.28+.4,g=new fn;g.moveTo(0,0),g.lineTo(1.9,0),g.quadraticCurveTo(.7,.4,.3,3.2),g.lineTo(0,3.4),g.lineTo(0,0);let v=new wo(g,3);v.computeVertexNormals(),v.translate(.3,0,-.08),v.rotateY(-p),u.push(v)}let d=[];for(let x=0;x<4;x++){let p=x/4*6.28+l.range(-.4,.4),g=l.range(11,13.5),v=l.range(2.6,3.8),_=new ur(new A(0,g,0),new A(Math.cos(p)*v*.5,g+1.2,Math.sin(p)*v*.5),new A(Math.cos(p)*v,g+2.6,Math.sin(p)*v));u.push(new Ji(_,3,.16,4)),d.push(_.getPoint(1))}d.push(new A(0,16.5,0)),t.treeTrunk={geo:ue(u.map(x=>x.index?x.toNonIndexed():x).map(x=>{for(let p of Object.keys(x.attributes))["position","normal","uv"].includes(p)||x.deleteAttribute(p);return x})),mat:a};let m=[];for(let x of d)for(let p=0;p<6;p++){let g=Nf(l.range(3.2,5.2),l.range(2.8,4.2));g.rotateX(-l.range(.5,1.35)),g.rotateY(l.range(0,6.28)),g.translate(x.x+l.range(-1.4,1.4),x.y+l.range(-1.2,1),x.z+l.range(-1.4,1.4)),$o(g,new yt().setHSL(.22+l.range(-.04,.04),.5+l.range(-.08,.08),l.range(.28,.5))),m.push(g)}t.treeCanopy={geo:ue(m),mat:e}}{let l=new ce(2),u=[],f=new $t(.2,.34,9,7,8);f.translate(0,4.5,0),kf(f,.03),t.palmTrunk={geo:f,mat:a};for(let d=0;d<9;d++){let m=new Se(1.3,5.2,1,6);m.translate(0,2.6,0);let x=m.attributes.position;for(let p=0;p<x.count;p++){let g=x.getY(p);x.setZ(p,-g*g*.07)}m.rotateX(-1.1),m.rotateY(d/9*6.28+l.range(-.2,.2)),m.translate(.03*81,9,0),$o(m,new yt().setHSL(.22+l.range(-.03,.03),.55,l.range(.32,.45))),u.push(m)}t.palmLeaves={geo:ue(u),mat:n}}{let l=new ce(3),u=[];for(let d=0;d<9;d++){let m=new Se(.9,2.6,1,4);m.translate(0,1.3,0);let x=m.attributes.position;for(let p=0;p<x.count;p++){let g=x.getY(p);x.setZ(p,-g*g*.12)}m.rotateY(d/9*6.28+l.range(-.3,.3)),$o(m,new yt().setHSL(.25+l.range(-.04,.03),.55,l.range(.28,.42))),u.push(m)}t.fern={geo:ue(u),mat:n};let f=[];for(let d=0;d<7;d++){let m=Nf(l.range(2,3),l.range(1.6,2.4),-.3);m.rotateY(d*.9),m.rotateX(l.range(-.3,.3)),$o(m,new yt().setHSL(.23+l.range(-.03,.03),.5,l.range(.25,.4))),f.push(m)}t.bush={geo:ue(f),mat:e}}{let l=[];for(let u=0;u<3;u++){let f=new Se(3,7,1,4);f.translate(u-1,-3.5,u*.3),l.push(f)}t.vines={geo:ue(l),mat:i}}{let l=new Ct(2.2,1.3,1.4,2,2,2);Zo(l,.06,4),t.block={geo:l,mat:o}}{let l=[new $t(.62,.66,5.5,12,3).translate(0,2.75,0),new Ct(1.8,.5,1.8).translate(0,.25,0),new $t(.85,.66,.5,12).translate(0,5.6,0)];t.column={geo:Zo(ue(l.map(u=>u.toNonIndexed())),.03,5),mat:o}}{let l=[new Ct(2.4,3,2.2,3,3,3),new Ct(2.8,.5,.6).translate(0,.45,1.1),new Ct(.6,1.1,.7).translate(0,-.2,1.3),new Ct(1.6,.35,.4).translate(0,-.95,1.15),new Ct(.5,.35,.3).translate(-.6,0,1.15),new Ct(.5,.35,.3).translate(.6,0,1.15),new Ct(3,.7,2.6).translate(0,1.7,0)];t.head={geo:Zo(ue(l.map(u=>u.toNonIndexed())),.05,6).translate(0,1.5,0),mat:o}}{let l=new dr(1.2,1);Zo(l,.28,7),l.scale(1.3,.8,1.1),t.rock={geo:l,mat:c}}{let l=new $t(.12,.16,1.9,6).translate(0,.95,0);t.post={geo:l,mat:new zt({color:"#5a4630",roughness:.9})}}return t.mats={leafBroad:e,leafFrond:n,vineMat:i,bark:a,ruin:o,rock:c},t}var we=class{constructor(t,e,n,i={}){this.mesh=new qn(e.geo,e.mat,n),this.mesh.instanceMatrix.setUsage(Rn),this.mesh.castShadow=!!i.shadow,this.mesh.receiveShadow=i.receive!==!1,this.mesh.frustumCulled=!1,this.cap=n,this.free=[];for(let a=n-1;a>=0;a--)this.free.push(a);let r=new Kt().makeScale(0,0,0);for(let a=0;a<n;a++)this.mesh.setMatrixAt(a,r);i.color&&(this.mesh.instanceColor=new Ri(new Float32Array(n*3).fill(1),3)),this.zero=r,this.dirty=!0,this.used=0,this.alive=new Uint8Array(n),this.hi=0,this.mesh.count=0,t.add(this.mesh)}add(t,e){let n=this.free.pop();return n===void 0?-1:(this.mesh.setMatrixAt(n,t),e&&this.mesh.instanceColor&&this.mesh.setColorAt(n,e),this.alive[n]=1,n>=this.hi&&(this.hi=n+1),this.dirty=!0,this.used++,n)}set(t,e){t>=0&&(this.mesh.setMatrixAt(t,e),this.dirty=!0)}release(t){if(!(t<0)){for(this.mesh.setMatrixAt(t,this.zero),this.free.push(t),this.alive[t]=0;this.hi>0&&!this.alive[this.hi-1];)this.hi--;this.dirty=!0,this.used--}}flush(){this.dirty&&(this.mesh.count=this.hi,this.free.sort((t,e)=>e-t),this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.dirty=!1)}};var Jo={},la=s=>s.index?s.toNonIndexed():s;function Bf(s){s=la(s);for(let t of Object.keys(s.attributes))["position","normal","uv"].includes(t)||s.deleteAttribute(t);return s.attributes.uv||s.setAttribute("uv",new ne(new Float32Array(s.attributes.position.count*2),2)),s}function Ko(s,t){let e=s.attributes.position.count,n=new Float32Array(e*3);for(let i=0;i<e;i++)n[i*3]=t.r,n[i*3+1]=t.g,n[i*3+2]=t.b;return s.setAttribute("color",new ne(n,3)),s}function Of(s){let t=Le("ruin",{strength:5,rough:.9}),e=new zt({map:Nn(),roughness:1,normalMap:t.normalMap,roughnessMap:t.roughnessMap}),n={};{let i=[[0,0],[.16,0],[.16,.08],[.1,.12],[.09,.2],[.15,.36],[.16,.46],[.1,.6],[.075,.7],[.12,.76],[.14,.8],[0,.8]].map(([r,a])=>new Z(r,a));n.baluster={geo:new un(i,10),mat:e}}{let i=new Ct(1,.16,.36);i.translate(0,.08,0),n.rail={geo:i,mat:e}}{let i=ue([new Ct(.5,1,.5).translate(0,.5,0),new Ct(.62,.14,.62).translate(0,1.04,0),new ge(.2,10,6).translate(0,1.26,0)].map(Bf));n.newel={geo:i,mat:e}}n.lily={geo:(()=>{let i=new An(.55,14,.25,Math.PI*2-.5).rotateX(-Math.PI/2);Ko(i,new yt("#4f7a2e"));let r=new Ye(.12,.16,6).translate(.1,.08,.05);return Ko(r,new yt("#f2c4d0")),ue([la(i),la(r)])})(),mat:new zt({vertexColors:!0,roughness:.45,side:be})};{let i=new ce(31),r=[];for(let a=0;a<11;a++){let o=i.range(1.2,2.2),c=new Se(.05,o,1,4);c.translate(0,o/2,0);let h=c.attributes.position,l=i.range(-.2,.2);for(let u=0;u<h.count;u++){let f=h.getY(u)/o;h.setX(u,h.getX(u)+l*f*f)}if(c.rotateY(i.range(0,6.28)),c.translate(i.range(-.3,.3),0,i.range(-.3,.3)),Ko(c,new yt().setHSL(.2+i.range(-.03,.03),.45,i.range(.3,.42))),r.push(la(c)),a%3===0){let u=new $t(.035,.035,.22,6).translate(l+0,o-.05,0);Ko(u,new yt("#5a3a1e")),r.push(la(u))}}n.reed={geo:ue(r),mat:oa(new zt({vertexColors:!0,side:be,roughness:.8}),s,.6)}}{let i=new dr(.5,0),r=i.attributes.position,a=new ce(9);for(let c=0;c<r.count;c++)r.setXYZ(c,r.getX(c)*a.range(.8,1.2),r.getY(c)*.4,r.getZ(c)*a.range(.8,1.2));i.computeVertexNormals();let o=Le("dirt",{strength:6,rough:.5});n.clod={geo:i,mat:new zt({color:"#4a3622",roughness:.55,normalMap:o.normalMap})}}{let i=Le("bark",{strength:5,rough:.95}),r=new $t(.42,.5,6,10,3).rotateZ(Math.PI/2),a=r.attributes.position;for(let o=0;o<a.count;o++)a.setY(o,a.getY(o)+Math.sin(a.getX(o)*.8)*.08);r.computeVertexNormals(),n.log={geo:r,mat:new zt({map:aa(),normalMap:i.normalMap,roughness:1,color:"#9a9a7a"})}}return n}function Qo(s,t=!1){let e=new Ce({transparent:!0,depthWrite:!1,side:be,fog:!0,blending:t?on:ai,uniforms:ci.merge([xt.fog,{uTime:{value:0},uOp:{value:s}}]),vertexShader:`varying vec2 vUv; #include <fog_pars_vertex>
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
`)});return e.userData.k=t?1.3:1,Hf.push(e),e}var Hf=[];function Vf(s){for(let t of Hf)t.uniforms.uTime.value=s*t.userData.k}function jo(){if(Jo.m)return Jo.m;let s=Le("ruin",{strength:5,rough:.9}),t=Le("rock",{strength:6,rough:.92}),e=qo().clone();return e.needsUpdate=!0,e.wrapS=e.wrapT=vs,e.repeat.set(1.5,2),Jo.m={ruin:new zt({map:Nn(),roughness:1,normalMap:s.normalMap,roughnessMap:s.roughnessMap}),rock:new zt({map:Kn(),roughness:1,normalMap:t.normalMap,roughnessMap:t.roughnessMap}),pool:new zt({color:"#2f5a50",roughness:.05,metalness:.2,normalMap:As(),normalScale:new Z(.5,.5),transparent:!0,opacity:.88}),swamp:new zt({color:"#1c2816",roughness:.32,metalness:0,envMapIntensity:.3,normalMap:As(),normalScale:new Z(.35,.35)}),puddle:new zt({color:"#3a2c1a",roughness:.04,metalness:.25,normalMap:As(),normalScale:new Z(.2,.2),transparent:!0,opacity:.92,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),fall:Qo(.85),spray:Qo(.3),mist:new oi({map:Li(),color:"#eef3ea",transparent:!0,depthWrite:!1,opacity:.3}),stream:new zt({color:"#3e5a4c",roughness:.08,metalness:.1,envMapIntensity:.5,normalMap:As(),normalScale:new Z(1.2,1.2),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),gold:new zt({color:"#d8b04a",metalness:1,roughness:.28,emissive:"#3a2a04"})},Jo.m}function tl(s,t){return{p:s,ctx:t,obstacles:[],objs:[],t:0,done:!0,hits:0,add(e){return t.scene.add(e),this.objs.push(e),e},dispose(){for(let e of this.objs)t.scene.remove(e);this.objs.length=0,this.obstacles.length=0},update(){}}}var Qn=(s,t,e,n={x:0,y:0,z:0})=>s.pointAt(t,e,n);function Vy(s,t){let e=tl(s,t),n=t.track,i=jo(),r=t.builder,a=t.rec,o=new ce(s.seed+3),c=n.sampleAtS(s.fountainS),h=Qn(n,s.fountainS,0),l=c.y,u=new se;u.position.set(h.x,l,h.z),u.rotation.y=c.th;let f=(w,C,P,M)=>new $t(w,C,P,8,1).translate(0,M+P/2,0),d=ue([f(3.3,3.45,.7,-.1),f(3,3,.1,.6),f(.7,.9,1.6,0),f(1.6,.6,.35,1.5),f(.35,.45,.9,1.8),f(.8,.3,.25,2.6),new Ue(3.15,.18,6,8).rotateX(Math.PI/2).rotateY(Math.PI/8).translate(0,.62,0)].map(Bf)),m=new _t(d,i.ruin);m.castShadow=!0,m.receiveShadow=!0,u.add(m);for(let w=0;w<4;w++){let C=new _t(new Ct(.42,.4,.5),i.ruin),P=w*Math.PI/2;C.position.set(Math.sin(P)*.85,1.25,Math.cos(P)*.85),C.rotation.y=P,C.castShadow=!0,u.add(C)}let x=new _t(new An(2.95,8).rotateX(-Math.PI/2).rotateY(Math.PI/8),i.pool);x.position.y=.5,u.add(x);let p=new _t(new An(1.5,8).rotateX(-Math.PI/2),i.pool);p.position.y=1.86,u.add(p);let g=new _t(new $t(1.55,2.2,1.4,16,1,!0).translate(0,1.15,0),i.spray);u.add(g);let v=new _t(new $t(.75,1.2,.8,12,1,!0).translate(0,2.3,0),i.spray);u.add(v);let _=new _t(new fr(.28,0).scale(.8,1.3,.8),i.gold);_.position.y=3.1,u.add(_),e.add(u),e.obstacles.push({_s:s.fountainS,x:h.x,z:h.z,r:3.35,yMin:l-1,yMax:l+3,active:!0,solid:!0,bounce:.35,onHit:(w,C,P,M)=>{(M||0)>5&&(w.damage(4+(M||0)*.5,"fountain"),Ot.emit("crash",{}))}});let y=s.s0+18,R=s.s1-18;for(let w of[y,R])for(let C of[-1,1]){let P=n.sampleAtS(w),M=C*(P.hw+1.4),b=Qn(n,w,M);r.inst(a,"column",b.x,n.roadY(P,C*P.hw)-.2,b.z,o.range(0,6),.9,o.range(.85,1.1))}for(let w=s.s0+12;w<s.s1-10;w+=9)for(let C of[-1,1]){let P=n.sampleAtS(w);if(P.hw<8)continue;let M=Qn(n,w,C*(P.hw-.4));r.inst(a,"newel",M.x,n.roadY(P,C*P.hw),M.z,P.th,1,.7)}return e.update=w=>{e.t+=w,_.rotation.y+=w*1.2,_.position.y=3.1+Math.sin(e.t*2)*.08},e}function Gy(s,t){let e=tl(s,t),n=t.track,i=jo(),r=t.builder,a=t.rec,o=new ce(s.seed+5),c=s.i0,h=s.i1,l=n.get(c+h>>1),u=h-c+60,f=new _t(new Se(110,u,1,1).rotateX(-Math.PI/2),i.swamp);f.position.set(l.x,s.waterY,l.z),f.rotation.y=l.th,f.receiveShadow=!0,e.add(f);let d=new Kt,m=new ye,x=new A,p=new A,g=new He;for(let v=c+1;v<h-1;v+=2){let _=n.get(v),y=n.get(v+2);for(let R of[-1,1]){let w=R*(_.hw+.25),C=n.roadY(_,R*_.hw);(v-c>>1)%6===0?r.inst(a,"newel",_.x+_.rx*w,C,_.z+_.rz*w,_.th,1,1):r.inst(a,"baluster",_.x+_.rx*w,C,_.z+_.rz*w,0,1,1);let P=y.x+y.rx*R*(y.hw+.25),M=y.z+y.rz*R*(y.hw+.25),b=n.roadY(y,R*y.hw),E=_.x+_.rx*w,L=_.z+_.rz*w,U=Math.hypot(P-E,M-L);m.setFromEuler(g.set(0,Math.atan2(-(M-L),P-E),Math.atan2(b-C,U),"YXZ")),x.set(U+.05,1,1),d.compose(p.set((E+P)/2,(C+b)/2+.8,(L+M)/2),m,x),r.instM(a,"rail",d)}if((v-c>>1)%7===3)for(let R of[-1,1]){let w=R*(_.hw+.4);p.set(_.x+_.rx*w,0,_.z+_.rz*w),r.inst(a,"block",p.x,s.waterY-.2,p.z,_.th,1.1,(_.y-s.waterY)*.8+.3)}}for(let v=0;v<70;v++){let _=Math.floor(o.range(c,h)),y=n.get(_),R=o.sign(),w=R*(y.hw+o.range(2.5,30)),C=o.range(.6,1.5);r.inst(a,"lily",y.x+y.rx*w,s.waterY+.02,y.z+y.rz*w,o.range(0,6.28),C,1)}for(let v=0;v<40;v++){let _=Math.floor(o.range(c,h)),y=n.get(_),R=o.sign(),w=R*(y.hw+o.range(3,34));r.inst(a,"reed",y.x+y.rx*w,s.waterY-.2,y.z+y.rz*w,o.range(0,6.28),o.range(.8,1.4))}for(let v=0;v<5;v++){let _=Math.floor(o.range(c,h)),y=n.get(_),R=o.sign(),w=R*(y.hw+o.range(6,26));r.inst(a,"log",y.x+y.rx*w,s.waterY+.05,y.z+y.rz*w,o.range(0,6.28),o.range(.8,1.3))}return e.update=v=>{i.swamp.normalMap.offset.x+=v*.005},e}function zf(s,t){let e=tl(s,t),n=t.track,i=jo(),r=t.builder,a=t.rec,o=new ce(s.seed+7),c=s.side;for(let u=s.i0;u<s.i1;u+=2){let f=n.get(u),d=f.hw;if(o.chance(.55)){let m=c*(d+o.range(.9,2.2)),x=new yt().setHSL(.08,.12,o.range(.33,.5));r.inst(a,"rock",f.x+f.rx*m,n.terrainY(f,m)-.3,f.z+f.rz*m,o.range(0,6),o.range(.5,1.3),void 0,x)}if(o.chance(.2)){let m=c*(d+o.range(3,7)),x=new yt().setHSL(.08,.1,o.range(.3,.45));r.inst(a,"rock",f.x+f.rx*m,n.terrainY(f,m)-1,f.z+f.rz*m,o.range(0,6),o.range(1.5,3.2),o.range(1.5,3),x)}if(o.chance(.18)){let m=c*(d+o.range(1,2.5));r.inst(a,"vines",f.x+f.rx*m,n.terrainY(f,m+c*3)+2,f.z+f.rz*m,f.th+(c>0?-1.57:1.57),o.range(.9,1.3))}if(o.chance(.3)){let m=c*(d+o.range(.6,1.6));r.inst(a,"fern",f.x+f.rx*m,n.terrainY(f,m)-.1,f.z+f.rz*m,o.range(0,6),o.range(.6,1.1))}}let h=[];if(s.falls&&s.falls.length)for(let u of s.falls){let f=s.s0+u,d=n.sampleAtS(f),m=n.terrainY(d,c*(d.hw+7))+3,x=d.y,p=Qn(n,f,c*(d.hw+1.6)),g=Math.max(4,m-x),v=new _t(new Se(5.5,g,1,1),i.fall);v.position.set(p.x,x+g/2,p.z),v.rotation.y=d.th,v.renderOrder=3,e.add(v),h.push(v);let _=new _t(new Se(4.2,g,1,1),i.spray);_.position.set(p.x-d.rx*c*.4,x+g/2,p.z-d.rz*c*.4),_.rotation.y=d.th,e.add(_);let y=new _t(new Se(2*d.hw+1,5.6,1,1).rotateX(-Math.PI/2),i.stream),R=Qn(n,f,0);y.position.set(R.x,d.y+.06,R.z),y.rotation.y=d.th+Math.PI/2,y.renderOrder=2,e.add(y);let w=Qn(n,f,-c*(d.hw+1.2)),C=Math.max(10,x-d.floorY),P=new _t(new Se(6.5,C,1,1),i.fall);P.position.set(w.x,x-C/2+.2,w.z),P.rotation.y=d.th,P.renderOrder=3,e.add(P),h.push(P);for(let M=0;M<5;M++){let b=new Xn(i.mist),E=Qn(n,f+o.range(-4,4),c*(d.hw+o.range(-2,2)));b.position.set(E.x,x+o.range(.6,3),E.z),b.scale.setScalar(o.range(3.5,6)),e.add(b)}for(let M=0;M<3;M++){let b=new Xn(i.mist),E=Qn(n,f+o.range(-5,5),-c*(d.hw+o.range(6,16)));b.position.set(E.x,d.floorY+o.range(3,8),E.z),b.scale.setScalar(o.range(10,16)),e.add(b)}for(let M of[-1,1]){let b=Qn(n,f+M*3.6,c*(d.hw+1.2));r.inst(a,"rock",b.x,x-.3,b.z,o.range(0,6),o.range(.7,1.1),void 0,new yt("#5a5a52"))}}let l=!1;return e.update=(u,f)=>{if(e.t+=u,i.stream.normalMap.offset.y+=u*.25,s.falls&&oe.car){let d=s.falls.some(m=>Math.abs(f-(s.s0+m))<3.2);if(d&&!l){l=!0;let m=oe.car;m.mud=Math.max(0,m.mud-.5),Ot.emit("fx",{kind:"water",x:m.pos.x,y:m.pos.y+.6,z:m.pos.z,n:36}),Ot.emit("sfx",{name:"splash"})}else d||(l=!1)}},e}function Wy(s,t){let e=tl(s,t),n=t.track,i=jo(),r=t.builder,a=t.rec,o=new ce(s.seed+9);for(let c of s.puddles||[]){let h=n.sampleAtS(c.s),l=Qn(n,c.s,c.lat),u=new An(c.r*1.08,20).rotateX(-Math.PI/2),f=u.attributes.position;for(let m=1;m<f.count;m++){let x=1+Math.sin(m*1.7+c.s)*.12;f.setX(m,f.getX(m)*x),f.setZ(m,f.getZ(m)*(x*.85))}let d=new _t(u,i.puddle);d.position.set(l.x,n.roadY(h,c.lat)+.035,l.z),d.rotation.y=h.th+o.range(-.3,.3),d.renderOrder=1,e.add(d);for(let m=0;m<6;m++){let x=o.range(0,6.28),p=c.r*o.range(.95,1.25),g=Qn(n,c.s+Math.cos(x)*p,c.lat+Math.sin(x)*p);r.inst(a,"clod",g.x,n.roadY(h,c.lat)-.02,g.z,o.range(0,6),o.range(.4,.9),o.range(.6,1))}}for(let c=s.i0;c<s.i1;c+=3){let h=n.get(c);for(let l of[-1,1]){if(o.chance(.55)){let u=l*(h.hw+o.range(.4,6));r.inst(a,"reed",h.x+h.rx*u,n.terrainY(h,u)-.1,h.z+h.rz*u,o.range(0,6),o.range(.7,1.2))}if(o.chance(.3)){let u=l*o.range(1,h.hw-.5);r.inst(a,"clod",h.x+h.rx*u,n.roadY(h,u)-.05,h.z+h.rz*u,o.range(0,6),o.range(.4,.8),.6)}if(o.chance(.05)){let u=l*(h.hw+o.range(2,8));r.inst(a,"log",h.x+h.rx*u,n.terrainY(h,u)+.1,h.z+h.rz*u,h.th+o.range(-.5,.5),o.range(.7,1.1))}}}return e.update=c=>{i.puddle.normalMap.offset.x+=c*.01},e}var Gf={plaza:Vy,causeway:Gy,ledge:zf,fallsLedge:zf,mudflat:Wy};function Wf(s){return!!Gf[s.type]}function Xf(s,t){return Gf[s.type](s,t)}var Xy=s=>new yt(s);function Te(s,t,e=0,n=0,i=0,r=0,a=0,o=0){s=s.index?s.toNonIndexed():s;for(let u of Object.keys(s.attributes))["position","normal","uv"].includes(u)||s.deleteAttribute(u);s.rotateX(r),s.rotateY(a),s.rotateZ(o),s.translate(e,n,i);let c=Xy(t),h=s.attributes.position.count,l=new Float32Array(h*3);for(let u=0;u<h;u++)l[u*3]=c.r,l[u*3+1]=c.g,l[u*3+2]=c.b;return s.setAttribute("color",new ne(l,3)),s}var Fn=(s,t,e)=>new Ct(s,t,e),Rs=(s,t,e,n=8)=>new $t(s,t,e,n),gu={crate:{r:.62,h:1.15,breakAt:1.2,slow:.025,pts:50,label:"Smash",n:9,cols:["#9a7040","#7a5530","#b08050"],sz:[.55,.07,.2],snd:"smash"},pot:{r:.42,h:.95,breakAt:.8,slow:.01,pts:40,label:"Smash",n:8,cols:["#b0603e","#8e4630","#c87a52"],sz:[.22,.05,.2],snd:"shatter"},fence:{r:.22,half:1.6,h:1.2,breakAt:1.6,slow:.035,pts:60,label:"Fence down",n:10,cols:["#c9b26a","#a8904e","#6b5430"],sz:[.9,.08,.08],snd:"smash"},stall:{r:1.35,h:2.6,breakAt:4.5,slow:.08,pts:150,label:"Market wrecked",n:16,cols:["#8a6438","#b8462e","#d9b25a","#4a7a3a"],sz:[.8,.06,.3],snd:"smash"},idol:{r:.5,h:1.6,breakAt:7,slow:.12,pts:120,label:"Idol toppled",n:10,cols:["#8f8a74","#6f6a58","#a39c80"],sz:[.32,.25,.28],snd:"crack"},bamboo:{r:.5,h:2.6,breakAt:1.2,slow:.015,pts:40,label:"Smash",n:9,cols:["#b9b45a","#8f9a3e","#d2c674"],sz:[1.1,.07,.07],snd:"smash"},sign:{r:.22,h:2.3,breakAt:1.2,slow:.01,pts:30,label:"Signpost",n:5,cols:["#7a5a34","#5c4226"],sz:[.7,.06,.18],snd:"snap"}};function qy(s){let t=[];switch(s){case"crate":{t.push(Te(Fn(1,1,1),"#ffffff",0,1/2,0));for(let n of[.06,1-.06])for(let i of[-1,1])t.push(Te(Fn(1+.04,.1,.1),"#70502c",0,n,i*1/2)),t.push(Te(Fn(.1,.1,1+.04),"#70502c",i*1/2,n,0));break}case"pot":{let e=[];for(let n=0;n<=10;n++){let i=n/10;e.push(new Z(.12+Math.sin(i*Math.PI*.95)*.3+(i>.85?.04:0),i*.9))}t.push(Te(new un(e,10),"#c27050")),t.push(Te(new Ue(.17,.035,5,10),"#8e4a30",0,.9,0,Math.PI/2)),t.push(Te(Fn(.62,.05,.1),"#e8d0a0",0,.5,.34));break}case"fence":{for(let e of[-1.6,0,1.6])t.push(Te(Rs(.07,.08,1.25,6),"#8a6a3a",e,.62,0));for(let e of[.4,.85])t.push(Te(Rs(.05,.05,3.3,6),"#d2bc72",0,e,0,0,0,Math.PI/2));for(let e=-1.4;e<=1.41;e+=.35)t.push(Te(Rs(.035,.035,.9,5),"#c4ad62",e,.6,.06));break}case"stall":{for(let e of[-1.1,1.1])for(let n of[-.8,.8])t.push(Te(Rs(.06,.07,2.4,6),"#7a5a34",e,1.2,n));t.push(Te(Fn(2.3,.08,1.7),"#8a6438",0,.85,0)),t.push(Te(Fn(2.4,.08,1.8),"#b8462e",0,2.45,0,.12)),t.push(Te(Fn(2.4,.04,.3),"#e0c070",0,2.38,.95,.5));for(let e=0;e<6;e++)t.push(Te(new ge(.11,6,4),["#e2a22a","#c7402a","#6a9a3a"][e%3],-.8+e*.32,.98,-.2+e%2*.35));t.push(Te(Fn(.5,.4,.4),"#9a7040",.7,.2,.4));break}case"idol":{t.push(Te(Fn(.7,.3,.7),"#7d7864",0,.15,0)),t.push(Te(Rs(.24,.3,.8,8),"#a09a80",0,.7,0)),t.push(Te(new ge(.26,8,6),"#a39c80",0,1.3,0)),t.push(Te(Fn(.5,.08,.1),"#5a5544",0,1.33,.22)),t.push(Te(new Ye(.2,.3,6),"#8f8a74",0,1.62,0));break}case"bamboo":{for(let e=0;e<7;e++){let n=e*2.4,i=.12+e%3*.1;t.push(Te(Rs(.06,.07,2.4+e%3*.2,6),e%2?"#b9b45a":"#9fa648",Math.cos(n)*i,1.2,Math.sin(n)*i,Math.cos(n)*.08,0,Math.sin(n)*.08))}t.push(Te(new Ue(.3,.04,4,10),"#6b5430",0,.9,0,Math.PI/2));break}case"sign":{t.push(Te(Rs(.07,.08,2.3,6),"#6b4e2c",0,1.15,0)),t.push(Te(Fn(1.1,.32,.06),"#b08a54",.35,1.9,0,0,0,.05)),t.push(Te(new Ye(.17,.2,3),"#b08a54",.98,1.9,0,0,0,-Math.PI/2)),t.push(Te(Fn(.9,.28,.06),"#9a7444",-.25,1.45,0,0,0,-.06));break}}return ue(t)}var Mr=new Kt,el=new ye,es=new He,qf=new A,Yf=new A,$f=new yt,Yy=new A,$y=220,nl=class{constructor(t,e){this.scene=t,this.events=[];let n=e.pbr?(l,u)=>Zy(Le(l,u)):()=>({}),i=new zt({map:_r(),vertexColors:!0,roughness:.9,...n("planks",{strength:3})}),r=new zt({map:ra(),vertexColors:!0,roughness:.85,...n("crate",{strength:3})}),a=new zt({map:Nn(),vertexColors:!0,roughness:.9,...n("ruin",{strength:4})}),o={crate:r,pot:a,idol:a,fence:i,stall:i,bamboo:i,sign:i};this.pools={};let c=e.shadows!==!1&&e.shadowSize>=1024;for(let l in gu)this.pools[l]=new we(t,{geo:qy(l),mat:o[l]},l==="stall"||l==="idol"?16:48,{shadow:c});this.dn=Math.round($y*Math.max(.45,e.particles||1)),this.debris=new qn(new Ct(1,1,1),new zt({map:_r(),roughness:.9}),this.dn),this.debris.instanceMatrix.setUsage(Rn),this.debris.castShadow=c,this.debris.frustumCulled=!1,this.debris.instanceColor=new Ri(new Float32Array(this.dn*3).fill(1),3),this.debris.count=0,t.add(this.debris);let h=this.dn;this.P=new Float32Array(h*3),this.V=new Float32Array(h*3),this.Q=[],this.W=new Float32Array(h*3),this.S=new Float32Array(h*3),this.L=new Float32Array(h),this.rest=new Uint8Array(h),this.hint=new Int32Array(h);for(let l=0;l<h;l++)this.Q.push(new ye);this.next=0,this.live=0,this.smashed=0}populate(t,e,n,i){if(e.brk=[],t.set||["gap","bridge","ford","fork","temple","ledge","fallsLedge","causeway","hairpin"].includes(t.type))return;let r=h=>{let l=i.sampleAtS(h);return l&&!(l.gap||l.hole||l.bridge||l.ford||l.ramp>0||l.tunnel)},a=t.s1-t.s0,o=t.s0+n.range(10,24),c=t.type==="plaza"?1.6:t.type==="mudflat"||t.type==="straight"?1:.75;for(;o<t.s1-10;){if(r(o)&&r(o+4)&&r(o-4)){let h=i.sampleAtS(o),l=n.sign(),u=h.hw-.9,f=n.next();if(f<.2){let d=l*(u-1.2);this._add(e,i,"stall",o,d,h.th+n.range(-.15,.15));for(let m=0;m<n.int(2,4);m++)this._add(e,i,n.chance(.5)?"crate":"pot",o+n.range(-4.5,4.5)+(m%2?2.6:-2.6),l*(u-n.range(.2,2.2)),n.range(0,6.28))}else if(f<.38){let d=l*(u-.3);for(let m=0;m<n.int(2,4);m++)this._add(e,i,"fence",o+m*3.3,d,0,!0)}else if(f<.62){let d=n.chance(.3)?n.range(-h.hw+2,h.hw-2):l*(u-n.range(.4,1.8)),m=n.chance(.5)?"crate":"pot";for(let x=0;x<n.int(1,4);x++)this._add(e,i,m,o+n.range(-1.4,1.4),d+n.range(-1.2,1.2),n.range(0,6.28))}else f<.78?this._add(e,i,"bamboo",o,l*(u-.3),n.range(0,6.28)):f<.9?this._add(e,i,"sign",o,l*(u-.2),h.th+(l>0?Math.PI/2:-Math.PI/2)):this._add(e,i,"idol",o,l*(u-.5),h.th+Math.PI)}o+=n.range(16,32)/c}}_add(t,e,n,i,r,a,o=!1){let c=gu[n],h=this.pools[n],l=e.pointAt(i,r,Yf),u=e.sampleAtS(i),f=-u.rz,d=u.rx;o&&(a=Math.atan2(-d,f));let m=n==="crate"?.8+Math.random()*.35:1;el.setFromEuler(es.set(0,a,0)),Mr.compose(l,el,qf.set(m,m,m));let x=h.add(Mr);if(x<0)return;let p={x:l.x,z:l.z,r:c.r*m,yMin:l.y-.5,yMax:l.y+c.h,active:!0,solid:!0,breakAt:c.breakAt,slow:c.slow,kind:n,_s:i,_lat:r,brk:!0,y:l.y,ry:a,sc:m};if(o||c.half){let g=(c.half||1)*m;p.x=l.x-f*g,p.z=l.z-d*g,p.x2=l.x+f*g,p.z2=l.z+d*g,p._lat=r}p.onBreak=(g,v,_,y)=>this._break(p,g,v,_,y),p._pool=h,p._slot=x,p.cx=l.x,p.cz=l.z,t.brk.push(p)}release(t){if(t.brk){for(let e of t.brk)e._slot>=0&&(e._pool.release(e._slot),e._slot=-1);t.brk.length=0}}_break(t,e,n,i,r){let a=gu[t.kind];t._slot>=0&&(t._pool.release(t._slot),t._slot=-1),t.active=!1,this.smashed++;let o=e.vel.x,c=e.vel.z,h=a.n;for(let l=0;l<h;l++){let u=this.next;this.next=(this.next+1)%this.dn,this.L[u]<=0&&this.live++;let f=u*3,d=a.sz,m=.6+Math.random()*.7;this.P[f]=t.cx+(Math.random()-.5)*a.r*1.6,this.P[f+1]=t.y+.2+Math.random()*a.h*.8,this.P[f+2]=t.cz+(Math.random()-.5)*a.r*1.6;let x=.45+Math.random()*.5,p=2+r*.25;this.V[f]=o*x+n*r*.3+(Math.random()-.5)*p,this.V[f+1]=2+Math.random()*(2.5+r*.18),this.V[f+2]=c*x+i*r*.3+(Math.random()-.5)*p,this.W[f]=(Math.random()-.5)*18,this.W[f+1]=(Math.random()-.5)*18,this.W[f+2]=(Math.random()-.5)*18,this.S[f]=d[0]*m,this.S[f+1]=d[1]*(.8+Math.random()*.5),this.S[f+2]=d[2]*m,this.Q[u].setFromEuler(es.set(Math.random()*6,Math.random()*6,Math.random()*6)),this.L[u]=5+Math.random()*2,this.rest[u]=0,this.hint[u]=e.hint||0,$f.set(a.cols[l%a.cols.length]),this.debris.setColorAt(u,$f)}this.debris.instanceColor.needsUpdate=!0,this.events.push({kind:t.kind,pts:a.pts,label:a.label,snd:a.snd,x:t.cx,y:t.y+.6,z:t.cz,speed:r})}update(t,e,n){if(!this.live){this.debris.count=0;return}let i=0,r=0,a=n.pos.x,o=n.pos.y,c=n.pos.z;for(let h=0;h<this.dn;h++){if(this.L[h]<=0)continue;this.L[h]-=t;let l=h*3;if(this.L[h]<=0){Mr.makeScale(0,0,0),this.debris.setMatrixAt(h,Mr);continue}r++,i=h+1;let u=this.P[l]-a,f=this.P[l+2]-c;if(u*u+f*f<2.6&&Math.abs(this.P[l+1]-o)<1.4&&n.speed>3&&(this.V[l]=n.vel.x*.8+u*2,this.V[l+1]=1.5+n.speed*.08,this.V[l+2]=n.vel.z*.8+f*2,this.rest[h]=0,this.W[l]=(Math.random()-.5)*14,this.W[l+2]=(Math.random()-.5)*14),!this.rest[h]){this.V[l+1]-=9.81*t,this.P[l]+=this.V[l]*t,this.P[l+1]+=this.V[l+1]*t,this.P[l+2]+=this.V[l+2]*t;let m=e.query(this.P[l],this.P[l+2],this.hint[h]);this.hint[h]=m.idx;let x=m.isVoid?-1e9:m.h+this.S[l+1]*.5;if(this.P[l+1]<x)if(this.P[l+1]=x,this.V[l+1]<-1.2)this.V[l+1]*=-.3,this.V[l]*=.65,this.V[l+2]*=.65,this.W[l]*=.6,this.W[l+1]*=.6,this.W[l+2]*=.6;else{this.V[l+1]=0;let g=Math.max(0,1-t*6);this.V[l]*=g,this.V[l+2]*=g,this.W[l]*=g,this.W[l+1]*=g,this.W[l+2]*=g,this.V[l]*this.V[l]+this.V[l+2]*this.V[l+2]<.04&&(this.rest[h]=1,es.setFromQuaternion(this.Q[h]),es.x=Math.round(es.x/(Math.PI/2))*Math.PI/2,es.z=Math.round(es.z/(Math.PI/2))*Math.PI/2,this.Q[h].setFromEuler(es))}let p=Math.hypot(this.W[l],this.W[l+1],this.W[l+2]);p>.001&&!this.rest[h]&&(el.setFromAxisAngle(Yy.set(this.W[l]/p,this.W[l+1]/p,this.W[l+2]/p),p*t),this.Q[h].premultiply(el))}let d=Math.min(1,this.L[h]/.6);Mr.compose(Yf.set(this.P[l],this.P[l+1]-(1-d)*.2,this.P[l+2]),this.Q[h],qf.set(this.S[l]*d,this.S[l+1]*d,this.S[l+2]*d)),this.debris.setMatrixAt(h,Mr)}this.live=r,this.debris.count=i,this.debris.instanceMatrix.needsUpdate=!0}bumpAt(t,e,n){if(!this.live)return 0;let i=0;for(let r=0;r<this.dn;r++){if(this.L[r]<=0)continue;let a=r*3,o=t-this.P[a],c=e-this.P[a+2],h=Math.max(this.S[a],this.S[a+2])*.5+.15;if(o*o+c*c<h*h&&Math.abs(this.P[a+1]-n)<.6){let l=this.S[a+1]*(1-Math.hypot(o,c)/h)*1.2;l>i&&(i=l)}}return Math.min(i,.14)}flush(){for(let t in this.pools)this.pools[t].flush()}reset(){for(let t=0;t<this.dn;t++)this.L[t]=0;this.live=0,this.debris.count=0,this.events.length=0}};function Zy(s){return{normalMap:s.normalMap,roughnessMap:s.roughnessMap}}var ca=new A;function zn(s,t,e,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),c=Math.PI/4;ca.copy(t),ca[n]=0,ca.normalize();let h=.5*a/(a+o),l=1-ca.angleTo(s)/c;return Math.sign(ca[e])===1?l*h:o/(a+o)+h+h*(1-l)}var hi=class extends Ct{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new A,c=new A,h=new A(t,e,n).divideScalar(2).subScalar(r),l=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=l.length/6,m=new A,x=.5/i;for(let p=0,g=0;p<l.length;p+=3,g+=2)switch(o.fromArray(l,p),c.copy(o),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),l[p+0]=h.x*Math.sign(o.x)+c.x*r,l[p+1]=h.y*Math.sign(o.y)+c.y*r,l[p+2]=h.z*Math.sign(o.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/d)){case 0:m.set(1,0,0),f[g+0]=zn(m,c,"z","y",r,n),f[g+1]=1-zn(m,c,"y","z",r,e);break;case 1:m.set(-1,0,0),f[g+0]=1-zn(m,c,"z","y",r,n),f[g+1]=1-zn(m,c,"y","z",r,e);break;case 2:m.set(0,1,0),f[g+0]=1-zn(m,c,"x","z",r,t),f[g+1]=zn(m,c,"z","x",r,n);break;case 3:m.set(0,-1,0),f[g+0]=1-zn(m,c,"x","z",r,t),f[g+1]=1-zn(m,c,"z","x",r,n);break;case 4:m.set(0,0,1),f[g+0]=1-zn(m,c,"x","y",r,t),f[g+1]=1-zn(m,c,"y","x",r,e);break;case 5:m.set(0,0,-1),f[g+0]=zn(m,c,"x","y",r,t),f[g+1]=1-zn(m,c,"y","x",r,e);break}}};var il=new Kt,sl=new ye,Zf=new He,rl=new A,Jf=new A,al={};function Cs(){return al.m||(al.m={ruin:new zt({map:Nn(),roughness:1,normalMap:Le("ruin",{strength:5,rough:.9}).normalMap,roughnessMap:Le("ruin").roughnessMap}),rock:new zt({map:Kn(),roughness:1,normalMap:Le("rock",{strength:6,rough:.92}).normalMap,roughnessMap:Le("rock").roughnessMap}),metal:new zt({color:"#8a8478",metalness:.85,roughness:.38}),rust:new zt({color:"#6e4a30",metalness:.5,roughness:.7}),croc:new zt({color:"#46502c",roughness:.55,metalness:.05,normalMap:Le("rock").normalMap,normalScale:new Z(1.6,1.6)}),crocBelly:new zt({color:"#8d8a5a",roughness:.7}),eye:new zt({color:"#e6c440",emissive:"#a07a10",emissiveIntensity:.8}),flame:new oi({map:Li(),color:"#ffb050",blending:on,transparent:!0,depthWrite:!1}),water:Qo(.9),mist:new oi({map:Li(),color:"#e8f0ea",transparent:!0,depthWrite:!1,opacity:.2}),spike:new zt({color:"#6b6355",metalness:.6,roughness:.5}),gold:new zt({color:"#d8b04a",metalness:1,roughness:.3,emissive:"#3a2a04"})}),al.m}function ns(s,t){return{p:s,ctx:t,obstacles:[],objs:[],t:0,done:!1,hits:0,add(e){return t.scene.add(e),this.objs.push(e),e},dispose(){for(let e of this.objs)t.scene.remove(e);this.objs.length=0,this.obstacles.length=0},finish(e,n){this.done||(this.done=!0,Ot.emit("setpiece",{type:s.set?s.set.type:s.type,ok:e,label:n}))}}}var Ze=(s,t,e,n={x:0,y:0,z:0})=>s.pointAt(t,e,n);function Jy(s,t){let e=ns(s,t),n=t.track,i=t.builder.pools.plank,r=-1,a=!1,o=13.5;return e.update=(c,h)=>{if(!a&&h>s.s0+3&&(a=!0,r=s.s0-4,Ot.emit("bark",{who:"penny",text:"Dusty, the planks are going!"}),Ot.emit("sfx",{name:"crack"})),!!a){o=Math.min(o+c*.9,19),r=Math.min(r+o*c,h+30),r>s.s1+2&&!e.done&&e.finish(h>s.s1,"Bridge Crossed");for(let l of s.planks){if(!l.fallen&&l.i+.5<r){l.fallen=!0,l.vy=-re(1,4,Math.random()),l.rx=(Math.random()-.5)*4,l.rz=(Math.random()-.5)*6,l.ry=0,l.px=l.x,l.py=l.y,l.pz=l.z,l.a=l.pitch,l.b=0;let u=n.get(l.i);u.hole=!0,Math.random()<.2&&Ot.emit("fx",{kind:"splinter",x:l.x,y:l.y,z:l.z,n:6})}if(l.fallen&&l.py>s.floorY-5&&(l.vy-=18*c,l.py+=l.vy*c,l.a+=l.rx*c,l.b+=l.rz*c,sl.setFromEuler(Zf.set(l.a,l.th,l.b,"YXZ")),rl.set(1,1,1),il.compose(Jf.set(l.px,l.py,l.pz),sl,rl),i.set(l.slot,il)),!l.fallen&&Math.abs(l.i-h)<14){let u=Math.sin(oe.time*9+l.i)*.03*(1-Math.abs(l.i-h)/14);sl.setFromEuler(Zf.set(l.pitch,l.th,u,"YXZ")),rl.set(1,1,1),il.compose(Jf.set(l.x,l.y+u,l.z),sl,rl),i.set(l.slot,il)}}r>s.s0&&r<s.s1&&Ot.emit("shake",{amount:.08});for(let l of[s.rope0,s.rope1])l&&r>(s.s0+s.s1)/2&&(l.position.y-=c*6*ae(s.s0,s.s1,r),l.rotation.z+=c*.02)}},e}function Ky(s,t){let e=ns(s,t),n=t.track,i=Cs(),r=new ce(s.seed),a=t.lib.column.geo,o=[],c=5,h=s.s1-s.s0;for(let l=0;l<c;l++){let u=s.s0+18+l*(h-30)/(c-1),f=l%2?1:-1,d=n.sampleAtS(u),m=d.hw,x=m+1.6,p=new se,g=new _t(a,i.ruin);g.userData.shared=!0,g.castShadow=!0,g.scale.set(1.05,x/6.1,1.05),p.add(g);let v=Ze(n,u,f*(m+.9));p.position.set(v.x,v.y-.1,v.z),p.rotation.order="YXZ",p.rotation.y=d.th,e.add(p),o.push({g:p,s:u,side:f,a:d,ang:0,w:0,state:0,length:x,ob:null,bp:v})}return e.apLat=l=>{let u=g=>-g.side*3.3,f=o.findIndex(g=>g.s>l);if(f<0)return u(o[o.length-1]);if(f===0)return u(o[0]);let d=o[f-1],m=o[f],x=(l-d.s)/(m.s-d.s),p=x<.3?0:x>.85?1:(1-Math.cos((x-.3)/.55*Math.PI))/2;return u(d)+(u(m)-u(d))*p},e.update=(l,u)=>{let f=Math.max(oe.car?oe.car.speed:20,12);for(let d of o)if(d.state===0&&d.s-u<f*1.55+8&&(d.state=1,Ot.emit("sfx",{name:"crack"})),d.state===1){if(d.w+=(3.2+Math.sin(d.ang)*9)*l,d.ang+=d.w*l,d.ang>=Math.PI/2){d.ang=Math.PI/2-.04,d.state=2;let m=Ze(n,d.s+.8,d.side*(d.a.hw+.9-d.length));if(d.ob={x:d.bp.x,z:d.bp.z,x2:m.x,z2:m.z,r:.78,yMin:d.bp.y-1,yMax:d.bp.y+1.5,active:!0,solid:!0,bounce:.25,onHit:(x,p,g,v)=>{(v||0)>4&&(x.damage(6+(v||0)*.9,"pillar"),e.hits++,Ot.emit("crash",{}))}},e.obstacles.push(d.ob),Ot.emit("fx",{kind:"dust",x:(d.bp.x+m.x)/2,y:d.bp.y+.5,z:(d.bp.z+m.z)/2,n:18,spread:d.length/2}),Ot.emit("shake",{amount:.6,at:d.bp}),Ot.emit("sfx",{name:"slam"}),oe.car&&Math.abs(u-d.s)<2.2){let x=oe.carLat,p=d.side*(d.a.hw+.9),g=p-d.side*d.length;(x-g)*(x-p)<0&&(oe.car.damage(22,"pillar"),Ot.emit("crash",{}),e.hits++)}}d.g.rotation.z=-d.side*d.ang}!e.done&&u>s.s1-4&&e.finish(e.hits===0,e.hits===0?"Pillar Slalom!":"Pillars Survived")},e}function Qy(s){let t=new se,e=(p,g=s.croc)=>{let v=new _t(p,g);return v.castShadow=!0,v},n=[[0,-1.3],[.32,-1.25],[.5,-.8],[.56,-.1],[.52,.6],[.4,1.1],[.26,1.35],[0,1.4]].map(([p,g])=>new Z(p,g)),i=new un(n,16).rotateX(Math.PI/2).scale(1.2,.52,1);{let p=i.attributes.position;for(let g=0;g<p.count;g++)p.getY(g)<0&&p.setY(g,p.getY(g)*.7);i.computeVertexNormals()}t.add(e(i));let r=e(new dn(.42,1.9,4,10).rotateX(Math.PI/2).scale(1.25,.3,1),s.crocBelly);r.position.y=-.14,t.add(r);let a=[];for(let p=-2;p<=2;p++)for(let g=0;g<9;g++){let v=1-g*.27,_=p*.14*(1-Math.abs(v)*.25),y=new Ye(.06,.1+(p===0?.05:0),4).translate(_,.27-Math.abs(p)*.025,v);a.push(y.toNonIndexed())}t.add(e(ue(a)));let o=new se;o.position.z=-1.2,t.add(o);{let p=[];for(let g=0;g<7;g++){let v=g/7,_=.42*(1-v)+.05;p.push(new $t(_*.9,_,.42,8).rotateX(Math.PI/2).scale(1,.62,1).translate(0,.02-v*.04,-.2-g*.38).toNonIndexed());for(let y of g<4?[-.12,.12]:[0])p.push(new Ye(.05,.16*(1-v)+.06,4).translate(y*(1-v),_*.62+.04,-.2-g*.38).toNonIndexed())}o.add(e(ue(p)))}for(let[p,g]of[[1,.75],[-1,.75],[1,-.65],[-1,-.65]]){let v=ue([new dn(.1,.3,3,6).rotateZ(p*1.2).translate(p*.55,-.1,g).toNonIndexed(),new dn(.08,.24,3,6).translate(p*.8,-.3,g+.05).toNonIndexed(),new Ct(.24,.05,.26).translate(p*.84,-.44,g+.12).toNonIndexed()]);t.add(e(v))}let c=new se;c.position.set(0,.05,1.3),t.add(c);let h=new fn;h.moveTo(-.3,0),h.lineTo(-.25,.7),h.quadraticCurveTo(-.2,1.35,0,1.45),h.quadraticCurveTo(.2,1.35,.25,.7),h.lineTo(.3,0),h.lineTo(-.3,0);let l=new li(h,{depth:.16,bevelEnabled:!0,bevelThickness:.04,bevelSize:.04,bevelSegments:2}).rotateX(Math.PI/2).translate(0,.16,0),u=[],f=[];for(let p=0;p<11;p++){let g=.1+p*.12,v=.27-g*.12;for(let _ of[-1,1])u.push(new Ye(.022,.09,4).rotateX(Math.PI).translate(_*v,-.02,g).toNonIndexed()),f.push(new Ye(.02,.08,4).translate(_*(v-.03),.02,g+.06).toNonIndexed())}let d=new se;c.add(d),d.add(e(l)),d.add(e(ue(u),s.crocBelly));for(let p of[-.17,.17]){let g=e(new ge(.1,10,8).scale(1,.8,1.1));g.position.set(p,.2,.15),d.add(g);let v=new _t(new ge(.06,10,8),s.eye);v.position.set(p*1.05,.25,.2),d.add(v)}for(let p of[-.05,.05]){let g=e(new ge(.035,6,5));g.position.set(p,.17,1.38),d.add(g)}let m=new se;c.add(m);let x=new li(h,{depth:.1,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:1}).rotateX(Math.PI/2).scale(.92,1,.96).translate(0,-.02,.02);return m.add(e(x,s.crocBelly)),m.add(e(ue(f),s.crocBelly)),t.userData={jawU:d,jawL:m,tail:o},t}function jy(s,t){let e=ns(s,t),n=t.track,i=Cs(),r=new ce(s.seed),a=[];for(let h=0;h<6;h++){let l=s.s0+10+h*(s.s1-s.s0-20)/5+r.range(-3,3),u=r.sign(),f=n.sampleAtS(l),d=Qy(i),m=u*(f.hw+r.range(3,9)),x=Ze(n,l,m);d.position.set(x.x,s.waterY-.12,x.z),d.rotation.y=f.th+(u>0?-1:1)*Math.PI/2+r.range(-.4,.4),d.traverse(g=>g.castShadow=!1),e.add(d);let p={g:d,s:l,lat:m,side:u,a:f,snap:0,bitten:!1,ph:r.range(0,6)};p.ob={x:x.x,z:x.z,r:.75,yMin:s.waterY-1,yMax:s.waterY+.4,active:!0,solid:!0,bounce:.4,onHit:g=>{g.damage(5,"croc")}},e.obstacles.push(p.ob),a.push(p)}let o=0,c=!1;return e.update=(h,l)=>{e.t+=h;let u=l>s.s0+6&&l<s.s1-6,f=oe.car?oe.car.speed:0;u&&!c&&(c=!0,Ot.emit("bark",{who:"penny",text:"Crocodiles! Keep it moving!"})),u&&f<9?o+=h:o=Math.max(0,o-h);for(let d of a){let m=d.s-l;if(Math.abs(m)<26){let p=ft(oe.carLat+d.side*2.2,-d.a.hw-4,d.a.hw+4);d.lat+=ft(p-d.lat,-3.5*h,3.5*h)}let x=Ze(n,d.s,d.lat);if(d.g.position.x=x.x,d.g.position.z=x.z,d.g.position.y=s.waterY-.14+Math.sin(e.t*2+d.ph)*.04,d.ob.x=x.x,d.ob.z=x.z,d.g.userData.tail.rotation.y=Math.sin(e.t*4+d.ph)*.35,Math.abs(m)<5&&Math.abs(d.lat-oe.carLat)<3.6&&d.snap<=0&&(d.snap=.7,Ot.emit("sfx",{name:"snap"}),f<11&&!d.bitten&&(d.bitten=!0,oe.car.damage(11,"croc"),e.hits++,Ot.emit("bark",{who:"dusty",text:"Get off my tire, you overgrown handbag!"}),Ot.emit("shake",{amount:.4}))),d.snap>0){d.snap-=h;let p=Math.sin((.7-d.snap)/.7*Math.PI)*.7;d.g.userData.jawU.rotation.x=-p,d.g.userData.jawL.rotation.x=p*.4}}o>1.4&&(o=0,oe.car.damage(9,"croc"),e.hits++,Ot.emit("sfx",{name:"snap"}),Ot.emit("shake",{amount:.35})),!e.done&&l>s.s1-3&&e.finish(e.hits===0,e.hits===0?"Crocodile Ford Cleared":"Ford Crossed")},e}function t_(s,t){let e=ns(s,t),n=t.track,i=Cs(),r=(s.lipS+s.landS)/2,a=n.sampleAtS(r),o=Ze(n,r,0),h=n.sampleAtS(s.lipS).y+15,l=ue([new Ct(34,4,7).translate(0,0,0).toNonIndexed(),new Ct(6,26,7).translate(-16,-13,0).toNonIndexed(),new Ct(6,26,7).translate(16,-13,0).toNonIndexed()]),u=l.attributes.position;for(let R=0;R<u.count;R++){let w=u.getX(R),C=u.getY(R),P=u.getZ(R);u.setXYZ(R,w+Math.sin(C*.7+P)*.6,C+Math.sin(w*.5)*.7,P+Math.cos(w*.6+C)*.5)}l.computeVertexNormals();let f=new _t(l,i.rock);f.position.set(o.x,h,o.z),f.rotation.y=a.th+Math.PI/2,f.castShadow=!0,e.add(f);let d=new _t(new Se(22,h-a.floorY+2,1,1),i.water);d.position.set(o.x,(h+a.floorY)/2,o.z),d.rotation.y=a.th+Math.PI/2,d.renderOrder=3,e.add(d);let m=d.clone();m.scale.set(.6,1.2,1);let x=Ze(n,r+6,-24);m.position.set(x.x,d.position.y+4,x.z),m.rotation.y=a.th,e.add(m);let p=d.clone();p.scale.set(.5,1.1,1);let g=Ze(n,r-4,26);p.position.set(g.x,d.position.y+2,g.z),p.rotation.y=a.th,e.add(p);let v=[];for(let R=0;R<14;R++){let w=new Xn(i.mist),C=Ze(n,r+(Math.random()-.5)*14,(Math.random()-.5)*30);w.position.set(C.x,a.floorY+2+Math.random()*4,C.z),w.scale.setScalar(8+Math.random()*8),e.add(w),v.push(w)}let _=!1,y=!1;return e.update=(R,w)=>{if(e.t+=R,i.mist.opacity=.14+Math.sin(e.t)*.04,!_&&w>r-1){_=!0;let C=oe.car;C&&!C.grounded&&(Ot.emit("fx",{kind:"water",x:C.pos.x,y:C.pos.y+.5,z:C.pos.z,n:50}),C.mud=0,Ot.emit("sfx",{name:"splash"}),Ot.emit("bark",{who:"penny",text:"Well \u2014 that\u2019s one way to wash the car!"}))}!e.done&&w>s.landS+8&&oe.car&&oe.car.grounded&&e.finish(!0,"Waterfall Jump!")},e.slowmo={s:s.lipS+2},e}function e_(s,t){let e=ns(s,t),n=t.track,i=Cs(),r=new ce(s.seed),a=s.s0+6,o=s.s1-6,c=Math.ceil(o-a)+1,h=11,l=[],u=[],f=[];for(let M=0;M<c;M++){let b=a+M,E=n.sampleAtS(b);for(let L=0;L<h;L++){let U=Math.PI*L/(h-1),N=-Math.cos(U)*(E.hw+1.1),G=Math.sin(U)*3.4+(L===0||L===h-1?0:3.2),O=Ze(n,b,N);l.push(O.x,E.y-.3+G+(L===0||L===h-1,0),O.z),u.push(L/2,b/4)}}for(let M=0;M<c-1;M++)for(let b=0;b<h-1;b++){let E=M*h+b,L=E+h;f.push(E,L,E+1,E+1,L,L+1)}let d=new de;d.setAttribute("position",new qt(l,3)),d.setAttribute("uv",new qt(u,2)),d.setIndex(f),d.computeVertexNormals();let m=i.tunnel||(i.tunnel=new zt({map:Nn(),roughness:.95,side:be,color:"#b8a888"})),x=new _t(d,m);x.castShadow=!0,x.receiveShadow=!0,e.add(x);for(let M of[a,o]){let b=n.sampleAtS(M),E=Ze(n,M,0),L=new _t(new Ct(2*b.hw+6,2.2,1.6),i.ruin);L.position.set(E.x,b.y+7.2,E.z),L.rotation.y=b.th,L.castShadow=!0,e.add(L);for(let U of[-1,1]){let N=Ze(n,M,U*(b.hw+2.2)),G=new _t(new Ct(2.2,8,1.8),i.ruin);G.position.set(N.x,b.y+3.5,N.z),G.rotation.y=b.th,e.add(G)}}let p=[];for(let M=a+4;M<o;M+=9)for(let b of[-1,1]){let E=n.sampleAtS(M),L=Ze(n,M,b*(E.hw+.7)),U=new Xn(i.flame);U.position.set(L.x,E.y+2.6,L.z),U.scale.setScalar(.9),e.add(U),p.push(U)}let g=new gr("#ffa040",0,26,1.6);e.add(g);let v=new fn;v.moveTo(-1.6,0),v.quadraticCurveTo(0,-1.25,1.6,0),v.quadraticCurveTo(0,-.45,-1.6,0);let _=new li(v,{depth:.08,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:1}).translate(0,0,-.04),y=new $t(.07,.07,1,6).translate(0,-.5,0),R=[],w=5,C=5.1;for(let M=0;M<w;M++){let b=a+12+M*(o-a-22)/(w-1),E=n.sampleAtS(b),L=Ze(n,b,0),U=new se;U.position.set(L.x,E.y+6.6,L.z),U.rotation.order="YXZ",U.rotation.y=E.th;let N=new _t(y,i.rust);N.scale.y=C,U.add(N);let G=new _t(_,i.metal);G.position.y=-C,G.castShadow=!0,U.add(G),e.add(U);let O={pivot:U,s:b,a:E,ph:M*1.25+r.range(0,.5),per:r.range(2,2.5),amp:1.05,phi:0,cd:0};R.push(O)}let P=!1;return e.update=(M,b)=>{e.t+=M;for(let L of p)L.scale.setScalar(.8+Math.sin(e.t*23+L.position.x)*.12+Math.random()*.08);let E=b>a&&b<o;E&&!P&&(P=!0,Ot.emit("bark",{who:"penny",text:"Blades! Time the swings \u2014 now!"})),oe.car&&(g.position.set(oe.car.pos.x,oe.car.pos.y+2.4,oe.car.pos.z),g.intensity=E?26+Math.sin(e.t*17)*4:0);for(let L of R){L.phi=Math.sin(e.t*Math.PI*2/L.per+L.ph)*L.amp,L.pivot.rotation.z=L.phi;let U=-Math.sin(L.phi)*C,N=6.6-Math.cos(L.phi)*C;if(L.cd>0&&(L.cd-=M),oe.car&&Math.abs(b-L.s)<1.7&&N<2.05&&Math.abs(U-oe.carLat)<1.9&&L.cd<=0){L.cd=.8,e.hits++;let G=Math.cos(e.t*Math.PI*2/L.per+L.ph)>0?-1:1,O=oe.car;O.vel.x+=L.a.rx*G*5,O.vel.z+=L.a.rz*G*5,O.w.y+=G*1.2,O.damage(13,"blade"),Ot.emit("fx",{kind:"sparks",x:O.pos.x,y:O.pos.y+1,z:O.pos.z,n:30}),Ot.emit("shake",{amount:.5}),Ot.emit("sfx",{name:"clang"}),Ot.emit("crash",{})}oe.car&&Math.abs(b-L.s)<5&&Math.abs(L.phi)<.12&&L.cd<=0&&(L.cd=.3,Ot.emit("sfx",{name:"swoosh"}),Math.abs(b-L.s)<2.5&&!e.done&&Ot.emit("style",{kind:"nearmiss",label:"Close shave!",pts:150}))}!e.done&&b>o&&e.finish(e.hits===0,e.hits===0?"Untouched by the Blades!":"Through the Blades")},e.tunnel={s0:a,s1:o},e}function n_(s){let t=new se,e=(u,f,d,m,x=s.ruin)=>{let p=new _t(u,x);return p.position.set(f,d,m),p.castShadow=!0,p.receiveShadow=!0,t.add(p),p},n=(u,f,d,m=.12)=>new hi(u,f,d,2,m);e(n(5.4,.9,4.4,.1),0,.45,0),e(n(5,1.4,4,.1),0,1.6,0),e(n(5.3,.4,4.3,.08),0,2.5,0);for(let u=0;u<5;u++)e(n(.7,.9,.12,.04),-2+u,1.6,2.03);for(let u of[-.9,.9])e(n(1.3,1.1,2.4,.3),u,3.25,.5),e(n(1.1,2,1.1,.25),u,3,1.45),e(n(1.2,.4,1.5,.12),u,2.9,1.9);let i=[[0,0],[1.6,0],[1.75,1.6],[2.05,3.6],[1.9,4.6],[0,4.7]].map(([u,f])=>new Z(u,f)),r=e(new un(i,8).scale(1,1,.62),0,3.6,-.3);r.rotation.y=Math.PI/8,e(n(3,.5,2.3,.15),0,3.85,-.25);let a=new fn;a.moveTo(-1.1,0),a.lineTo(1.1,0),a.lineTo(.7,-1.2),a.lineTo(0,-1.6),a.lineTo(-.7,-1.2),a.lineTo(-1.1,0),e(new li(a,{depth:.2,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:1}),0,7.9,.95,s.gold);for(let u of[-1,1]){e(new ge(.85,12,8).scale(1,.85,.9),u*2.15,8,-.3),e(new dn(.55,1.6,4,10),u*2.45,6.8,-.2).rotation.z=u*.12;let f=e(new dn(.48,1.5,4,10),u*2.5,5.4,.7);f.rotation.x=1.25,e(n(.95,.85,.95,.25),u*2.5,5.2,1.65),e(new Ue(.52,.12,6,12).rotateX(Math.PI/2),u*2.47,6,-.1,s.gold)}e(new $t(.7,.85,.8,10),0,8.6,-.25);let o=e(n(2.3,2.6,2.2,.35),0,10,-.2);e(n(2.4,.38,.5,.12),0,10.75,.8),e(new Ye(.32,.9,4).rotateX(-.25),0,10.2,1),e(n(1.4,.24,.3,.08),0,9.45,.92),e(n(2,.6,1.9,.25),0,8.95,-.1);for(let u of[-1,1])e(new $t(.42,.42,.25,14).rotateZ(Math.PI/2),u*1.25,10,-.2,s.gold),e(new $t(.2,.2,.3,10).rotateZ(Math.PI/2),u*1.3,10,-.2);let c=new _t(new Ct(1.7,.26,.16),s.gold);c.position.set(0,10.45,.95),t.add(c),e(n(2.8,.7,2.5,.15),0,11.55,-.2);for(let u=-4;u<=4;u++){let f=e(n(.42,2.4,.22,.1),Math.sin(u*.3)*2,12.6+Math.cos(u*.3)*.9,-.6);f.rotation.z=-u*.3}let h=new _t(new $t(.16,.16,11,8),s.rust);h.position.set(2.5,7,1.65),h.castShadow=!0,t.add(h);let l=new _t(new Ye(.45,1.8,4).scale(1,1,.25),s.metal);return l.position.set(2.5,13.3,1.65),l.castShadow=!0,t.add(l),t}function i_(s,t){let e=ns(s,t),n=t.track,i=Cs(),r=(s.s0+s.s1)/2+6,a=n.sampleAtS(r),o=s.side,c=a.hw,h=Math.max(1.2,(2*c+4.2)/13.8),l=13.8*h,u=o*(c+2),f=n_(i);f.scale.setScalar(h),f.rotation.y=o*Math.PI/2;let d=Ze(n,r,u),m=new se;m.position.set(d.x,a.y-.2,d.z),m.add(f),m.rotation.order="YXZ",m.rotation.y=a.th,e.add(m);let x=-o*(c+.95),p=1.7,g=Math.asin(ft(Math.abs(u-x)/l,0,.98))+.04,v=0,_=0,y=0;e.apLat=()=>-o*(c-1.8);let R=()=>{for(let w=1;w<=8;w++){let C=w/8,P=C*l,M=u-o*Math.sin(_)*P,b=a.y-.2+Math.cos(_)*P*.93+1.2,E=Ze(n,r,M),L=1.7*h*(C>.7?.8:1);e.obstacles.push({x:E.x,z:E.z,r:1.3,yMin:b-L,yMax:b+L,active:!0,solid:!0,bounce:.2,onHit:(U,N,G,O)=>{(O||0)>4&&(U.damage(8+(O||0),"statue"),e.hits++,Ot.emit("crash",{}))}})}};return e.update=(w,C)=>{let P=Math.max(oe.car?oe.car.speed:20,12);if(v===0&&r-C<P*2.4+18&&(v=1,Ot.emit("bark",{who:"dusty",text:"That statue\u2019s coming down \u2014 hang on!"}),Ot.emit("sfx",{name:"rumble"})),v===1){if(y+=(.45+Math.sin(_)*2.2)*w,_+=y*w,_>=g){_=g,v=2,Ot.emit("shake",{amount:1.2}),Ot.emit("sfx",{name:"slam"});let M=Ze(n,r,x);Ot.emit("fx",{kind:"dust",x:(d.x+M.x)/2,y:a.y+1,z:(d.z+M.z)/2,n:70,spread:8}),R();let b=oe.car;if(b&&Math.abs(C-r)<2.6){let E=!1;for(let L of e.obstacles)Math.hypot(b.pos.x-L.x,b.pos.z-L.z)<L.r+1&&b.pos.y+1.2>L.yMin&&(E=!0);E&&(b.damage(28,"statue"),e.hits++,Ot.emit("crash",{}))}else b&&C>r&&C<r+16&&Ot.emit("style",{kind:"nearmiss",label:"Under the Colossus!",pts:400})}m.rotation.z=-o*_}!e.done&&C>s.s1-4&&e.finish(e.hits===0,e.hits===0?"Colossus Dodged!":"Colossus Survived")},e}function Kf(s,t){let e=ns(s,t),n=t.track,i=Cs(),r=s.s0+26,a=n.sampleAtS(r);for(let h of[-1,1]){let l=h===s.danger?"danger":"safe",u=new zt({map:Lf(l),roughness:.8,emissive:l==="danger"?"#401006":"#3a2c04",emissiveIntensity:.6}),f=new se,d=new _t(new Ct(2.1,2.1,.3),u);d.position.y=3.2,f.add(d);let m=new _t(new Ct(.45,3,.45),i.ruin);m.position.y=1.5,f.add(m);let x=Ze(n,r,h*(a.fork-a.hw-1.4));f.position.set(x.x,n.terrainY(a,0)-.3,x.z),f.rotation.y=a.th+Math.PI,f.rotation.z=0,d.castShadow=!0,e.add(f)}let o=[],c=ue(Array.from({length:9},(h,l)=>new Ye(.16,1.1,5).translate((l%3-1)*.55,.55,(Math.floor(l/3)-1)*.55)));for(let h of s.hazards){let l=Ze(n,h.s,h.lat),u=n.sampleAtS(h.s),f=new _t(c,i.spike);f.position.set(l.x,u.y-1.1,l.z),f.rotation.y=u.th,e.add(f);let d=new _t(new Ct(2,.05,2),new zt({color:"#2a2014",roughness:1}));d.position.set(l.x,u.y+.03,l.z),d.rotation.y=u.th,e.add(d);let m={g:f,q:l,y0:u.y,ph:Math.random()*6,up:0};m.ob={x:l.x,z:l.z,r:.9,yMin:u.y-1,yMax:u.y+.9,active:!1,solid:!1,onHit:x=>{x.damage(9,"spikes"),x.vel.multiplyScalar(.8),Ot.emit("fx",{kind:"sparks",x:x.pos.x,y:x.pos.y,z:x.pos.z,n:16}),Ot.emit("sfx",{name:"clang"}),Ot.emit("crash",{})}},e.obstacles.push(m.ob),o.push(m)}return e.update=(h,l)=>{e.t+=h;for(let u of o){let f=Math.sin(e.t*2.4+u.ph)>.1?1:0;u.up+=(f-u.up)*Math.min(1,h*14),u.g.position.y=u.y0-1.1+u.up*1.05,u.ob.active=u.up>.55,u.ob._hitCd&&(u.ob._hitCd=Math.max(0,u.ob._hitCd-h))}!e.announced&&l>s.s0-30&&(e.announced=!0,Ot.emit("bark",{who:"penny",text:(s.danger>0?"Right":"Left")+" glyph says death\u2026 and treasure. Your call, Dusty."}))},e}function Qf(s,t){let e=ns(s,t),n=t.track,i=Cs(),r=n.get(s.i0+2),a=Ze(n,r.s,0),o=new se;o.position.set(a.x,r.y,a.z),o.rotation.y=r.th;let c=(f,d,m,x,p=i.ruin)=>{let g=new _t(f,p);return g.position.set(d,m,x),g.castShadow=!0,g.receiveShadow=!0,o.add(g),g};for(let f=0;f<6;f++)c(new Ct(44-f*6,4,26-f*3),0,2+f*4,-16-f*.5);c(new Ct(10,6,8),0,27,-18),c(new Ct(4,12,4),-8,6,-2.2),c(new Ct(4,12,4),8,6,-2.2),c(new Ct(22,3,4.5),0,13.2,-2.2);let h=c(new Ct(6,5,1.2),0,17.2,-.6),l=c(new Ct(3.6,.5,.3),0,17.8,.1,i.gold),u=[c(new Ct(6,11.5,.8),-3,5.75,-2.6),c(new Ct(6,11.5,.8),3,5.75,-2.6)];for(let f of[-1,1]){let d=new Xn(i.flame);d.position.set(f*6.3,3.4,1.5),d.scale.setScalar(1.3),o.add(d);let m=c(new $t(.18,.25,3,6),f*6.3,1.5,1.5)}return e.add(o),e.update=f=>{if(e.t+=f,e.bursting)for(let d of u)d.userData.v=(d.userData.v||0)-18*f,d.position.z+=9*f,d.position.y=Math.max(.4,d.position.y+d.userData.v*f*.3),d.rotation.x=Math.min(1.5,d.rotation.x+f*3)},e.burst=()=>{e.bursting=!0,Ot.emit("fx",{kind:"dust",x:a.x-r.fx*2,y:r.y+4,z:a.z-r.fz*2,n:80,spread:7}),Ot.emit("shake",{amount:1.4}),Ot.emit("sfx",{name:"slam"})},e.doorPos=new A(a.x-r.fx*6,r.y,a.z-r.fz*6),t.builder.templeGate=e,e}function jf(s,t){let e=s.set.type;return e==="bridgeCollapse"?Jy(s,t):e==="pillars"?Ky(s,t):e==="croc"?jy(s,t):e==="waterfall"?t_(s,t):e==="blades"?e_(s,t):e==="statue"?i_(s,t):{update(){},dispose(){},obstacles:[]}}var tp=210,xu=19,jn=new Kt,is=new ye,vu=new He,ss=new A,ol=new A,Mn=new yt,ha=class{constructor(t,e,n,i={}){this.scene=t,this.mat=e,this.cols=n,this.free=[],this.opts=i,this.created=0}get(){let t=this.free.pop();if(!t){let e=new de,n=tp*this.cols;e.setAttribute("position",new ne(new Float32Array(n*3),3).setUsage(Rn)),e.setAttribute("normal",new ne(new Float32Array(n*3),3).setUsage(Rn)),e.setAttribute("uv",new ne(new Float32Array(n*2),2).setUsage(Rn)),this.opts.color&&e.setAttribute("color",new ne(new Float32Array(n*3),3).setUsage(Rn));let i=[];for(let r=0;r<tp-1;r++)for(let a=0;a<this.cols-1;a++){let o=r*this.cols+a,c=o+this.cols;i.push(o,o+1,c,c,o+1,c+1)}e.setIndex(i),t=new _t(e,this.mat),t.receiveShadow=!0,t.castShadow=!!this.opts.cast,t.frustumCulled=!0,this.created++}return this.scene.add(t),t}put(t){this.scene.remove(t),this.free.push(t)}};function s_(s,t){return s.onBeforeCompile=e=>{e.uniforms.tRock={value:t},e.vertexShader=`varying vec3 vWN; varying vec3 vWP;
`+e.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
      vWN = normalize(mat3(modelMatrix) * objectNormal); vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=`uniform sampler2D tRock; varying vec3 vWN; varying vec3 vWP;
`+e.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
      float steep = smoothstep(0.82, 0.55, vWN.y);
      if (steep > 0.01) { vec3 an = abs(vWN); vec2 uvr = an.x > an.z ? vWP.zy : vWP.xy;
        vec3 rc = texture2D(tRock, uvr * 0.09).rgb * vec3(1.02, 0.98, 0.92); rc *= 0.85 + 0.3 * texture2D(tRock, uvr * 0.023).g;
        diffuseColor.rgb = mix(diffuseColor.rgb, rc * (0.75 + 0.25 * smoothstep(0.3, 0.9, fract(vWP.y * 0.35))), steep); }`)},s.customProgramCacheKey=()=>"slopeRock",s}var ll=class{constructor(t,e,n,i,r){this.scene=t,this.track=e,this.gen=n,this.time=i,this.q=r,this.brk=new nl(t,r);let a=this.lib=Ff(i),o=lu(),c=cu(),h=hu(),l=(d,m)=>{if(!r.pbr)return{};let x=Le(d,m);return{normalMap:x.normalMap,roughnessMap:x.roughnessMap}};this.mats={dirt:new zt({map:o,roughness:1,...l("dirt",{strength:5,rough:.92,roughVar:.2})}),stone:new zt({map:c,roughness:1,...l("stone",{strength:7,rough:.78,roughVar:.3})}),terrain:s_(new zt({map:h,roughness:1,vertexColors:!0,...l("ground",{strength:4,rough:.95})}),Kn()),plank:new zt({map:_r(),roughness:1,...l("planks",{strength:5,rough:.82})}),rope:new zt({color:"#8b7348",roughness:1})},this.roadPools={dirt:new ha(t,this.mats.dirt,9),stone:new ha(t,this.mats.stone,9)},this.terrainPool=new ha(t,this.mats.terrain,xu,{color:!0});let u=r.foliage,f=r.shadows;this.pools={treeTrunk:new we(t,a.treeTrunk,Math.round(700*u)+60,{shadow:f}),treeCanopy:new we(t,a.treeCanopy,Math.round(700*u)+60,{shadow:f}),palmTrunk:new we(t,a.palmTrunk,Math.round(420*u)+40,{shadow:f}),palmLeaves:new we(t,a.palmLeaves,Math.round(420*u)+40,{shadow:f}),fern:new we(t,a.fern,Math.round(1500*u)+80,{}),bush:new we(t,a.bush,Math.round(900*u)+60,{}),vines:new we(t,a.vines,Math.round(260*u)+30,{}),block:new we(t,a.block,1400,{shadow:f,color:!0}),column:new we(t,a.column,260,{shadow:f}),head:new we(t,a.head,60,{shadow:f}),rock:new we(t,a.rock,900,{shadow:f,color:!0}),post:new we(t,a.post,500,{}),plank:new we(t,{geo:new Ct(5.8,.12,.42),mat:this.mats.plank},1400,{shadow:f})};{let d=Of(i),m=this.pools;m.baluster=new we(t,d.baluster,700,{shadow:f}),m.rail=new we(t,d.rail,700,{shadow:f}),m.newel=new we(t,d.newel,160,{shadow:f}),m.lily=new we(t,d.lily,260,{}),m.reed=new we(t,d.reed,Math.round(500*u)+40,{}),m.clod=new we(t,d.clod,500,{}),m.log=new we(t,d.log,60,{shadow:f})}this._pickupMeshes(),this._waterMats(),this.shaftMat=new We({map:If(),transparent:!0,depthWrite:!1,blending:on,opacity:.22,side:be,fog:!0}),this.shaftGeo=new Se(7,40).translate(0,-20,0),this.built=[],this.nextIdx=0,this.pickups=[]}_pickupMeshes(){let t=new $t(.42,.42,.09,18).rotateX(Math.PI/2),e=new zt({color:"#f0c24a",metalness:1,roughness:.25,emissive:"#6a4a08",emissiveIntensity:.6}),n=(h,l)=>(h.onBeforeCompile=u=>{u.uniforms.uTime=this.time,u.vertexShader=`uniform float uTime;
`+u.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float ph = instanceMatrix[3][0] * 0.3 + instanceMatrix[3][2] * 0.17; float a = uTime * ${l} + ph; float ca = cos(a), sa = sin(a);
        transformed = vec3(ca * transformed.x + sa * transformed.z, transformed.y + sin(uTime * 2.0 + ph) * 0.12, -sa * transformed.x + ca * transformed.z);
        objectNormal = vec3(ca * objectNormal.x + sa * objectNormal.z, objectNormal.y, -sa * objectNormal.x + ca * objectNormal.z);`).replace("#include <beginnormal_vertex>","#include <beginnormal_vertex>")},h.customProgramCacheKey=()=>"spin"+l,h),i=(h,l)=>(h.onBeforeCompile=u=>{u.uniforms.uTime=this.time,u.vertexShader=`uniform float uTime;
`+u.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        float ph = instanceMatrix[3][0] * 0.3 + instanceMatrix[3][2] * 0.17; float a = uTime * ${l} + ph; float ca = cos(a), sa = sin(a);
        objectNormal = vec3(ca * objectNormal.x + sa * objectNormal.z, objectNormal.y, -sa * objectNormal.x + ca * objectNormal.z);`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed = vec3(ca * transformed.x + sa * transformed.z, transformed.y + sin(uTime * 2.0 + ph) * 0.12, -sa * transformed.x + ca * transformed.z);`)},h.customProgramCacheKey=()=>"spin"+l,h);this.coinPool=new we(this.scene,{geo:t,mat:i(e,"3.0")},600,{});let r=new fr(.55,0).scale(.8,1.3,.8),a=new zt({color:"#7fe0c0",metalness:.6,roughness:.15,emissive:"#1f8a6a",emissiveIntensity:1.6});this.relicPool=new we(this.scene,{geo:r,mat:i(a,"1.5")},30,{});let o=new $t(.28,.28,.9,12),c=new zt({color:"#c8322a",metalness:.7,roughness:.3,emissive:"#5a0a04",emissiveIntensity:.8});this.nitroPool=new we(this.scene,{geo:o,mat:i(c,"2.0")},40,{}),this.haloMat=new oi({map:Li(),color:"#9fffe0",transparent:!0,blending:on,depthWrite:!1,opacity:.9})}_waterMats(){let t=As();this.waterMat=new zt({color:"#2a4030",roughness:.16,metalness:.05,envMapIntensity:.45,normalMap:t,normalScale:new Z(.6,.6),transparent:!0,opacity:.86}),this.riverMat=new zt({color:"#3a5a48",roughness:.14,metalness:.05,envMapIntensity:.5,normalMap:t,normalScale:new Z(.9,.9)}),this.foamMat=new We({map:qo(),transparent:!0,depthWrite:!1,opacity:.55})}update(t,e){let n=this.gen.pieces;for(;this.nextIdx<n.length-1&&n[this.nextIdx].s0<t+this.q.drawDist;)this.buildPiece(n[this.nextIdx]),this.nextIdx++;for(;this.built.length&&this.built[0].p.s1<t-140;)this.releasePiece(this.built.shift());for(let i of this.built)i.set&&i.set.update(e,t);Vf(this.time.value),this.waterMat.normalMap.offset.x+=e*.03,this.waterMat.normalMap.offset.y+=e*.05;for(let i in this.pools)this.pools[i].flush();this.coinPool.flush(),this.relicPool.flush(),this.nitroPool.flush(),this.brk&&this.brk.flush()}get obstacles(){let t=this._obsArr||(this._obsArr=[]);t.length=0;for(let e of this.built){if(e.set&&e.set.obstacles)for(let n of e.set.obstacles)t.push(n);if(e.brk)for(let n of e.brk)n.active&&t.push(n)}return t}buildPiece(t){let e=this.track,n={p:t,meshes:[],inst:[],objs:[],pk:[],set:null},i=new ce(t.seed),r=t.i0,a=Math.min(t.i1+1,e.count-1),o=this.terrainPool.get();this._fillTerrain(o,r,a),n.meshes.push(["terrain",o]);let c=null,h=()=>{if(c&&c.b-c.a>=1){let f=this.roadPools[c.kind].get();this._fillRoad(f,c.a,c.b,c.lane,c.kind),n.meshes.push([c.kind,f])}c=null};for(let u of t.type==="fork"?[-1,1]:[0]){for(let f=r;f<=a;f++){let d=e.get(f),m=d.gap||d.bridge,x=d.surf===Xt.STONE?"stone":"dirt";if(m){c&&(c.b=f,h());continue}c?c.kind!==x&&(c.b=f,h(),c={a:f,b:f,kind:x,lane:u}):c={a:f,b:f,kind:x,lane:u},c.b=f}h()}this._edgesAndProps(t,n,i,r,t.i1),(t.type==="bridge"||t.type==="bridgeCollapse")&&this._bridge(t,n),(t.type==="gap"||t.type==="waterfall"||t.type==="bridge"||t.type==="bridgeCollapse")&&this._river(t,n),(t.type==="ford"||t.type==="croc")&&this._ford(t,n);for(let u of t.pickups)this._addPickup(u,n);let l={scene:this.scene,track:e,lib:this.lib,mats:this.mats,builder:this,time:this.time,q:this.q};t.set?n.set=jf(t,l):t.type==="fork"?n.set=Kf(t,l):t.type==="temple"?n.set=Qf(t,l):Wf(t)&&(n.set=Xf(t,{...l,rec:n})),this.brk&&this.brk.populate(t,n,new ce(t.seed^23505),e),this.built.push(n),this.onBuilt&&this.onBuilt(t,n)}releasePiece(t){for(let[e,n]of t.meshes)e==="terrain"?this.terrainPool.put(n):this.roadPools[e]?this.roadPools[e].put(n):(this.scene.remove(n),n.geometry.dispose());for(let[e,n]of t.inst)e.release(n);for(let e of t.objs)this.scene.remove(e),e.traverse?.(n=>{n.geometry&&!n.userData.shared&&n.geometry.dispose()});for(let e of t.pk)e.taken||e.pool.release(e.slot),e.halo&&this.scene.remove(e.halo),e.dead=!0;this.pickups=this.pickups.filter(e=>!e.dead),t.set&&t.set.dispose(),this.brk&&this.brk.release(t)}inst(t,e,n,i,r,a,o,c,h){is.setFromEuler(vu.set(0,a,0)),ss.set(o,c??o,o),jn.compose(ol.set(n,i,r),is,ss);let l=this.pools[e].add(jn,h);return l>=0&&t.inst.push([this.pools[e],l]),l}instM(t,e,n,i){let r=this.pools[e].add(n,i);return r>=0&&t.inst.push([this.pools[e],r]),r}_fillTerrain(t,e,n){let i=this.track,r=t.geometry,a=r.attributes.position.array,o=r.attributes.uv.array,c=r.attributes.color.array,h=0;for(let l=e;l<=n;l++){let u=i.get(l),f=u.fork+u.hw,d=u.fork>u.hw+.6?u.fork-u.hw-.6:0,m=[-52,-36,-24,-14,-(f+6),-(f+2.4),-(f+.9),-(f+.2),-Math.max(d,.01)-0,-d*.5,0,d*.5,Math.max(d,.01),f+.2,f+.9,f+2.4,f+6,14,24];m[18]=36;let x=[-52,-36,-22,-(f+6),-(f+2.4),-(f+.9),-(f+.2),-(d||.02),-d*.5,0,d*.5,d||.02,f+.2,f+.9,f+2.4,f+6,22,36,52];for(let p=0;p<xu;p++){let g=x[p],v=i.terrainY(u,g);!u.gap&&!u.bridge&&Math.abs(g)<=f+.25&&!(d&&Math.abs(g)<d)&&(v=i.roadY(u,g)-.22),a[h*3]=u.x+u.rx*g,a[h*3+1]=v,a[h*3+2]=u.z+u.rz*g,o[h*2]=g/9,o[h*2+1]=u.s/9;let _=ft((u.y-v)/30,0,1),y=ft((v-u.y)/8,0,1);Mn.setRGB(.95-_*.45+y*.1,.95-_*.3+y*.05,.85-_*.25),u.ford&&Math.abs(g)>f&&Math.abs(g)<f+16&&Mn.multiplyScalar(.75),c[h*3]=Mn.r,c[h*3+1]=Mn.g,c[h*3+2]=Mn.b,h++}}this._finish(r,n-e+1,xu)}_fillRoad(t,e,n,i,r){let a=r==="stone",o=this.track,c=t.geometry,h=c.attributes.position.array,l=c.attributes.uv.array,u=0;for(let f=e;f<=n;f++){let d=o.get(f),m=i*d.fork,x=d.hw,p=[-x-.35,-x,-x*.72,-x*.38,0,x*.38,x*.72,x,x+.35];for(let g=0;g<9;g++){let v=m+p[g],_=g===0||g===8,y=p[g]/x,R=_?0:.06*(1-y*y)-(Math.abs(Math.abs(y)-.55)<.2?.012:0);h[u*3]=d.x+d.rx*v,h[u*3+1]=o.roadY(d,v)+(_?-.2:.015+R),h[u*3+2]=d.z+d.rz*v,a?(l[u*2]=p[g]/3.2,l[u*2+1]=d.s/3.2):(l[u*2]=(p[g]+x)/(2*x)*.92+.04,l[u*2+1]=d.s/8),u++}}this._finish(c,n-e+1,9)}_finish(t,e,n){t.setDrawRange(0,(e-1)*(n-1)*6),t.attributes.position.needsUpdate=!0,t.attributes.uv.needsUpdate=!0,t.attributes.color&&(t.attributes.color.needsUpdate=!0);let i=t.attributes.position.array,r=t.attributes.normal.array;for(let f=0;f<e;f++)for(let d=0;d<n;d++){let m=f*n+d,x=f*n+Math.max(d-1,0),p=f*n+Math.min(d+1,n-1),g=Math.max(f-1,0)*n+d,v=Math.min(f+1,e-1)*n+d,_=i[p*3]-i[x*3],y=i[p*3+1]-i[x*3+1],R=i[p*3+2]-i[x*3+2],w=i[v*3]-i[g*3],C=i[v*3+1]-i[g*3+1],P=i[v*3+2]-i[g*3+2],M=y*P-R*C,b=R*w-_*P,E=_*C-y*w,L=Math.hypot(M,b,E)||1;b<0&&(M=-M,b=-b,E=-E),r[m*3]=M/L,r[m*3+1]=b/L,r[m*3+2]=E/L}t.attributes.normal.needsUpdate=!0,t.computeBoundingSphere();let a=t.boundingSphere,o=0,c=0,h=0,l=e*n;for(let f=0;f<l;f++)o+=i[f*3],c+=i[f*3+1],h+=i[f*3+2];o/=l,c/=l,h/=l;let u=0;for(let f=0;f<l;f++)u=Math.max(u,Math.hypot(i[f*3]-o,i[f*3+1]-c,i[f*3+2]-h));a.center.set(o,c,h),a.radius=u+2}_edgesAndProps(t,e,n,i,r){let a=this.track,o=this.q.foliage,c=t.type==="temple"||t.type==="pillars"||t.type==="statue"||t.type==="blades";for(let h=i;h<=r;h++){let l=a.get(h),u=l.fork+l.hw;for(let f of[-1,1]){let d=f<0?l.edgeL:l.edgeR;if(d===Ut.WALL&&!l.gap&&!l.bridge&&(h-i)%2===0&&!l.tunnel&&!l.causeway&&!(l.ledge&&Math.sign(l.ledge)===f)){let x=f*(u+.95),p=a.roadY(l,f*u);Mn.setHSL(.13,.12,n.range(.42,.6)),this.inst(e,"block",l.x+l.rx*x,p+.35+n.range(-.1,.1),l.z+l.rz*x,l.th+n.range(-.08,.08),1,n.range(.8,1.25),Mn),n.chance(.22)&&this.inst(e,"block",l.x+l.rx*x,p+1.5,l.z+l.rz*x,l.th+n.range(-.2,.2),n.range(.75,.95),1,Mn),n.chance(.05*o*10/10)&&this.inst(e,"fern",l.x+l.rx*(x+f*.8),p+1.2,l.z+l.rz*(x+f*.8),n.range(0,6),n.range(.6,1))}if(d===Ut.CLIFF&&!l.gap&&!l.bridge&&(h-i)%3===0&&n.chance(.6)){let x=f*(u+.45);Mn.setHSL(.1,.1,n.range(.4,.55)),this.inst(e,"rock",l.x+l.rx*x,a.roadY(l,f*u)-.15,l.z+l.rz*x,n.range(0,6),n.range(.22,.4),void 0,Mn)}if(h%2)continue;if(l.gap||l.bridge){if(n.chance(.08*o)){let x=f*n.range(8,30);this._palm(e,n,l.x+l.rx*x,a.terrainY(l,x)-.3,l.z+l.rz*x,n.range(1.2,1.8))}if(n.chance(.12)){let x=f*n.range(4,34);Mn.setHSL(.1,.1,n.range(.35,.55)),this.inst(e,"rock",l.x+l.rx*x,a.terrainY(l,x),l.z+l.rz*x,n.range(0,6),n.range(.8,2.6),void 0,Mn)}if(n.chance(.18*o)){let x=f*n.range(32,46),p=a.terrainY(l,x);this._tree(e,n,l,x,p)}continue}let m=d===Ut.CLIFF;if(n.chance(.42*o)){let x=f*(u+(m?n.range(36,48):d===Ut.WALL?n.range(4.5,28):n.range(6.5,30)));this._tree(e,n,l,x,a.terrainY(l,x))}if(!m&&n.chance(.3*o)){let x=f*(u+n.range(3.5,20));this._palm(e,n,l.x+l.rx*x,a.terrainY(l,x)-.2,l.z+l.rz*x,n.range(.85,1.35))}if(!m&&n.chance(.85*o)){let x=f*(u+n.range(1.2,9));this.inst(e,"fern",l.x+l.rx*x,a.terrainY(l,x)-.1,l.z+l.rz*x,n.range(0,6),n.range(.7,1.5))}if(!m&&n.chance(.5*o)){let x=f*(u+n.range(4,22));this.inst(e,"bush",l.x+l.rx*x,a.terrainY(l,x),l.z+l.rz*x,n.range(0,6),n.range(.9,1.8))}if(n.chance(.06)){let x=f*(u+n.range(2,16));Mn.setHSL(.1,.12,n.range(.35,.55)),this.inst(e,"rock",l.x+l.rx*x,a.terrainY(l,x)-.2,l.z+l.rz*x,n.range(0,6),n.range(.5,1.6),void 0,Mn)}if(!m&&n.chance(c?.09:.025)){let x=f*(u+n.range(3,10));this.inst(e,"column",l.x+l.rx*x,a.terrainY(l,x)-.3,l.z+l.rz*x,n.range(0,6),1,n.chance(.5)?n.range(.35,.8):1)}if(!m&&n.chance(c?.02:.006)){let x=f*(u+n.range(4,9));this.inst(e,"head",l.x+l.rx*x,a.terrainY(l,x)-.6,l.z+l.rz*x,l.th+(f<0?1.57:-1.57)+n.range(-.4,.4),n.range(.9,1.4))}if(n.chance(.07*o)&&!l.tunnel){let x=f*(u+n.range(-.5,2.5));this.inst(e,"vines",l.x+l.rx*x,a.roadY(l,f*u)+n.range(8.5,11),l.z+l.rz*x,l.th+n.range(-.4,.4),n.range(.8,1.2))}}if(l.fork>l.hw+1.5&&h%3===0){let f=l.fork-l.hw-.6;n.chance(.5)&&this.inst(e,"fern",l.x,a.terrainY(l,0),l.z,n.range(0,6),n.range(.8,1.4)),f>2&&n.chance(.35)&&this._tree(e,n,l,n.range(-f+1,f-1),a.terrainY(l,0)),f>1.5&&n.chance(.15)&&this.inst(e,"column",l.x,a.terrainY(l,0)-.2,l.z,n.range(0,6),.9,n.range(.4,1))}if(h%37===0&&n.chance(.55)&&!l.tunnel){let f=new _t(this.shaftGeo,this.shaftMat);f.userData.shared=!0;let d=n.range(-u-4,u+4);f.position.set(l.x+l.rx*d,l.y+26,l.z+l.rz*d),f.rotation.set(0,l.th+n.range(-.6,.6),.38),f.rotation.order="YXZ",f.rotateZ(0),f.scale.set(n.range(.7,1.6),1,1),this.scene.add(f),e.objs.push(f)}}}_palm(t,e,n,i,r,a){is.setFromEuler(vu.set(e.range(-.08,.08),e.range(0,6.28),e.range(-.08,.08))),ss.set(a,a,a),jn.compose(ol.set(n,i,r),is,ss),this.instM(t,"palmTrunk",jn),this.instM(t,"palmLeaves",jn)}_tree(t,e,n,i,r){let a=e.range(.75,1.35),o=e.range(0,6.28),c=n.x+n.rx*i,h=n.z+n.rz*i;this.inst(t,"treeTrunk",c,r-.3,h,o,a,a*e.range(.9,1.25));let[l,u]=t.inst[t.inst.length-1]||[];l&&(l.mesh.getMatrixAt(u,jn),this.instM(t,"treeCanopy",jn))}_bridge(t,e){let n=this.track;t.planks=[];for(let r=t.i0;r<=t.i1;r++)for(let a=0;a<2;a++){let o=r+a*.5,c=n.get(r),h=n.get(r+1),l=a*.5,u=c.x+(h.x-c.x)*l,f=c.y+(h.y-c.y)*l-.07,d=c.z+(h.z-c.z)*l,m=Math.sin(o*12.9)*.5*.06;is.setFromEuler(vu.set(Math.atan2(h.y-c.y,1)*-1,c.th+m,0,"YXZ")),ss.set(c.hw/2.6*(.94+Math.abs(m)),1,1),jn.compose(ol.set(u,f,d),is,ss);let x=this.pools.plank.add(jn);x>=0&&(e.inst.push([this.pools.plank,x]),t.planks.push({slot:x,i:r,x:u,y:f,z:d,th:c.th,pitch:Math.atan2(h.y-c.y,1)*-1,fallen:!1,vy:0,rx:0,rz:0}))}let i=[[],[]];for(let r=t.i0-2;r<=t.i1+2;r+=2){let a=n.get(r);for(let o=0;o<2;o++){let c=(o?1:-1)*(a.hw+.25);i[o].push(new A(a.x+a.rx*c,a.y+1.05,a.z+a.rz*c))}}for(let r=0;r<2;r++){let a=new _s(i[r]),o=new _t(new Ji(a,i[r].length*2,.05,5),this.mats.rope);o.castShadow=!1,this.scene.add(o),e.objs.push(o),t["rope"+r]=o}for(let r=t.i0;r<=t.i1;r+=4){let a=n.get(r);for(let o of[-1,1])this.inst(e,"post",a.x+a.rx*o*(a.hw+.25),a.y-.75,a.z+a.rz*o*(a.hw+.25),a.th,1,1)}for(let r of[t.i0-1,t.i1+1]){let a=n.get(r);for(let o of[-1,1])this.inst(e,"column",a.x+a.rx*o*(a.hw+.9),a.y-.6,a.z+a.rz*o*(a.hw+.9),a.th,.6,.45)}}_river(t,e){let n=this.track,i=[],r=t.type.startsWith("bridge")?t.i0:Math.max(t.i0,Math.round(t.lipS)-4),a=t.type.startsWith("bridge")?t.i1:Math.round(t.landS)+4,o=n.get(r),c=n.get(a),h=n.get(r+a>>1),l=h.floorY+1.2,u=h.x,f=h.z,d=new Se(26+(a-r),120,1,1);d.rotateX(-Math.PI/2);let m=new _t(d,this.riverMat);m.position.set(u,l,f),m.rotation.y=h.th,m.receiveShadow=!0,this.scene.add(m),e.objs.push(m)}_ford(t,e){let n=this.track,i=n.get(t.i0+t.i1>>1),r=new Se(90,(t.i1-t.i0)*.78,1,1);r.rotateX(-Math.PI/2);let a=new _t(r,this.waterMat);a.position.set(i.x,t.waterY,i.z),a.rotation.y=i.th,a.renderOrder=2,this.scene.add(a),e.objs.push(a)}_addPickup(t,e){let n=this.track;if(!n.sampleAtS(t.s))return;let r=n.pointAt(t.s,t.lat,{x:0,y:0,z:0}),a=t.yAbs!==void 0?t.yAbs:r.y+(t.y||1),o=t.kind==="coin"?this.coinPool:t.kind==="relic"?this.relicPool:this.nitroPool;is.identity(),ss.set(1,1,1),jn.compose(ol.set(r.x,a,r.z),is,ss);let c=o.add(jn);if(c<0)return;let h={kind:t.kind,x:r.x,y:a,z:r.z,s:t.s,pool:o,slot:c,taken:!1,value:t.value||1,rare:t.rare};if(t.kind==="relic"){let l=new Xn(this.haloMat);l.scale.set(3.2,3.2,1),l.position.set(r.x,a,r.z),this.scene.add(l),h.halo=l}e.pk.push(h),this.pickups.push(h)}take(t){t.taken=!0,t.pool.release(t.slot),t.halo&&(this.scene.remove(t.halo),t.halo=null)}stats(){let t=0;for(let e in this.pools)t+=this.pools[e].used;return{pieces:this.built.length,instances:t,ribbons:this.terrainPool.created+this.roadPools.dirt.created+this.roadPools.stone.created}}reset(){for(;this.built.length;)this.releasePiece(this.built.shift());this.nextIdx=0,this.pickups=[]}};var Be=()=>new A,ep=Be(),r_=Be(),Je=Be(),ze=Be(),rs=Be(),Qe=Be(),br=Be(),yu=Be(),Di=Be(),mn=Be(),np=Be(),ua=new ye,wr=new ye,a_=new A;function o_(s,t,e,n){switch(s){case 2:{let i=Math.sin(t*3.3+Math.floor(e*.9)*1.7),r=Math.sin(e*2.9+Math.floor(t*1.1)*2.3);return .011*(i*r>.15?1:0)-.004}case 3:return t*2.05-Math.floor(t*2.05)>.86?-.022:.004*Math.sin(t*9.1+e);case 1:return-.05*n+.03*Math.sin(t*.7+e*.4)*Math.sin(t*.31-e*.2);case 4:return-.08*n;case 5:return .062*Math.sin(t*1.3+e*.9)*Math.sin(t*.53+e*1.7);default:return .019*Math.sin(t*.92+e*.35)*Math.sin(t*.41)+.007*Math.sin(t*4.7+e*3.1)}}var l_=new A(0,1,0),c_=new A,ip=[[.17,.74],[.22,.7],[.13,.82],[.14,.78],[.22,.62],[.21,.69],[.15,.7]],sp=[[0,9,1],[9,16,.8],[16,23,.64],[23,30,.52],[30,99,.44]],cl=class{constructor(t,e){this.track=t,this.T=e,this.pos=Be(),this.vel=Be(),this.w=Be(),this.q=new ye,this.fwd=Be(),this.up=Be(),this.left=Be();let n=.84,i=1.38,r=-1.3,a=.08;this.wheels=[{lp:new A(n,a,i),front:!0,side:1},{lp:new A(-n,a,i),front:!0,side:-1},{lp:new A(n,a,r),front:!1,side:1},{lp:new A(-n,a,r),front:!1,side:-1}].map(o=>({...o,comp:0,compPrev:0,contact:!1,hint:0,spin:0,rot:0,slipLat:0,slipLong:0,surf:0,load:0,cp:Be(),center:Be(),n:Be(0,1,0),touchT:0})),this.probes=[];for(let o of[-.95,.95])for(let c of[-2.05,2.15])this.probes.push({lp:new A(o,-.32,c),roof:!1}),this.probes.push({lp:new A(o*.8,1.05,c*.55),roof:!0});this.probes.push({lp:new A(0,1.15,-.2),roof:!0}),this.hull=[];for(let[o,c]of[[.98,2.2],[-.98,2.2],[.98,-2.08],[-.98,-2.08],[.98,1.1],[-.98,1.1],[.98,-1],[-.98,-1],[0,2.3],[0,-2.15]])this.hull.push(new A(o,.1,c));this.wallPts=this.hull,this.events=[],this.setUpgrades({engine:0,nitro:0,suspension:0,armor:0}),this.reset(0,0,0,0,0)}setUpgrades(t){this.up_=t,this.maxHp=100+t.armor*25,this.dmgMul=1-t.armor*.07,this.nitroCap=this.T.nitroCans+Math.floor((t.nitro+1)/2),this.landTol=1+t.suspension*.14}reset(t,e,n,i,r,a=0){this.pos.set(t,e,n),this.q.setFromAxisAngle(ep.set(0,1,0),i),this.updateAxes(),this.vel.copy(this.fwd).multiplyScalar(r),this.w.set(0,0,0);for(let o of this.wheels)o.comp=o.compPrev=.1,o.contact=!0,o.hint=a;this.hint=a,this.steer=0,this.airTime=0,this.grounded=!0,this.contacts=4,this.gear=0,this.rpm=900,this.shiftT=0,this.throttle=0,this.nitroT=0,this.nitroing=!1,this.flipT=0,this.stuckT=0,this.landing=null,this.roofHit=!1,this.drift=0,this.slipAngle=0,this.speed=r,this.fwdSpeed=r,this.accLong=0,this.accLat=0,this.flickT=0,this._wt=0,this.capped=!1,this.impactVn=0,this.wasAir=!1,this.lastSurf=0,this._preVel=new A().copy(this.vel),this.groundN=new A(0,1,0),this.hp===void 0&&(this.hp=this.maxHp,this.nitro=this.nitroCap,this.mud=0,this.wear=0)}fullReset(){this.hp=this.maxHp,this.nitro=this.nitroCap,this.mud=.05,this.wear=0,this.invincible=this.invincible||!1}updateAxes(){this.fwd.set(0,0,1).applyQuaternion(this.q),this.up.set(0,1,0).applyQuaternion(this.q),this.left.set(1,0,0).applyQuaternion(this.q)}damage(t,e){if(this.invincible)return;let n=t*this.dmgMul*(this.dmgScale||1);this.hp=Math.max(0,this.hp-n),this.wear=Math.min(1,this.wear+n/160),this.events.push({type:"damage",amount:n,why:e})}_angAcc(t,e){let n=this.T.inertia;return wr.copy(this.q).invert(),e.copy(t).applyQuaternion(wr),e.set(e.x/n[0],e.y/n[1],e.z/n[2]).applyQuaternion(this.q),e}_invMassAlong(t,e){return ze.crossVectors(t,e),this._angAcc(ze,Je),Je.cross(t),1/this.T.mass+Je.dot(e)}applyImpulse(t,e){this.vel.addScaledVector(e,1/this.T.mass),mn.subVectors(t,this.pos),np.crossVectors(mn,e),this._angAcc(np,Je),this.w.add(Je)}step(t,e,n){let i=this.T,r=i.mass,a=this.track;this.updateAxes();let o=ep.set(0,-9.81*r,0),c=r_.set(0,0,0),h=(W,$)=>{o.add(W),mn.subVectors($,this.pos),c.add(ze.crossVectors(mn,W))},l=this.vel.length();this.speed=l;let u=this.vel.dot(this.fwd);this.fwdSpeed=u;let f=n.assist,d=n.steerSens||1,m=i.maxSteer/(1+Math.max(0,Math.abs(u)-4)*i.steerSpeedFalloff/10)*(1+this.drift*i.driftSteerBoost),x=ft(e.steer*d,-1,1)*m,p=this.drift>.2&&x*this.slipAngle<0,g=(Math.abs(x)<Math.abs(this.steer)?i.steerReturn:i.steerRate)*(p?1.8:1)*t;this.steer+=ft(x-this.steer,-g,g);let v=e.throttle,_=e.brake,y=sp[this.gear];this.shiftT>0&&(this.shiftT-=t),u>y[1]+.5&&this.gear<4?(this.gear++,this.shiftT=.14,this.events.push({type:"shift",up:!0})):u<y[0]-1.5&&this.gear>0&&(this.gear--,this.events.push({type:"shift",up:!1}));let R=sp[this.gear],w=ft((Math.abs(u)-R[0])/(R[1]-R[0]),0,1.15),C=this.grounded?1100+w*5200:1100+v*5600;this.rpm=re(this.rpm,Math.max(900+v*1200,C),1-Math.exp(-12*t));let P=this.up_,M=i.topSpeed+P.engine*1.7+(this.nitroing?i.nitroTopBoost+P.nitro*.8:0),b=.78+.22*Math.sin(ft((this.rpm-1e3)/5600,0,1)*Math.PI),E=n.speedCap||999;this.capped=u>E-1.5;let L=Math.min(M,Math.max(E,i.topSpeed*.8)),U=1+i.launchPunch*ft(1-Math.max(u,0)/14,0,1),N=v*i.engineForce*(1+P.engine*.08)*R[2]*b*U*ft(1-Math.pow(Math.max(u,0)/L,4),0,1);this.shiftT>0&&(N*=.35);let G=!1;_>0&&u<1&&v<.1&&(G=!0,N=-_*i.engineForce*.55*ft(1-Math.max(-u,0)/i.reverseSpeed,0,1)),e.nitroPressed&&!this.nitroing&&this.nitro>=1&&(this.nitro-=1,this.nitroing=!0,this.nitroT=i.nitroDur+P.nitro*.2,this.events.push({type:"nitro"})),this.nitroing&&(this.nitroT-=t,this.nitroT<=0&&(this.nitroing=!1)),this._wt=ft(-this.accLong/9.81,-.55,.7)*i.weightTransfer,this.flickT>0&&(this.flickT-=t);let O=e.steer;if(Math.abs(O)>.55){let W=Math.sign(O);this._flickSign&&W!==this._flickSign&&this._flickAge<.5&&l>12&&(this.flickT=.55,this.events.push({type:"flick"})),W!==this._flickSign&&(this._flickAge=0),this._flickSign=W}this._flickAge=(this._flickAge||0)+t;let J=0,H=a_.set(0,0,0),lt=0,ot=0,ut=i.maxTravel+P.suspension*.04,Pt=i.restLength+i.wheelRadius;this.hbAmt=e.handbrake?Math.min(1,(this.hbAmt||0)+t*9):Math.max(0,(this.hbAmt||0)-t*3.2);let Ht=this.hbAmt,j=Ht>.5;for(let W=0;W<4;W++){let $=this.wheels[W],X=rs.copy($.lp).applyQuaternion(this.q).add(this.pos),Q=a.query(X.x,X.z,$.hint);$.hint=Q.idx,$.surf=Q.surf,Qe.set(Q.nx,Q.ny,Q.nz);let D=this.up.dot(Qe),Mt=1/0;if(!Q.isVoid&&D>.25){let st=o_(Q.surf,a.get(Q.idx).s+Q.t*1,Q.lat,this._sinkMul||1),gt=n.bump?n.bump.bumpAt(X.x,X.z,Q.h):0;$.relief=st+gt,Mt=(X.y-Q.h-st-gt)*Qe.y/D}if($.compPrev=$.comp,Mt<Pt){$.comp=Math.min(Pt-Mt,ut+.12),$.contact||($.touchT=this.airTime),$.contact=!0,J++,H.add(Qe),$.cp.copy(X).addScaledVector(this.up,-Mt);let st=($.comp-$.compPrev)/t;$.cv=st;let gt=$.comp/ut,ct=i.springK*$.comp*(1+i.springProg*Math.max(0,gt-.6)*Math.max(0,gt-.6)*4),Vt=Math.abs(st)<1.2?st:Math.sign(st)*(1.2+(Math.abs(st)-1.2)*.55);ct+=(st>0?i.damperBump:i.damperRebound)*Vt;let bt=ut-.07;if($.comp>bt){let et=$.comp-bt;ct+=et*et*22e5+Math.max(0,st)*5200*Math.min(1,et/.07),st>2.5&&!$._bumped&&($._bumped=!0,this.events.push({type:"bottom",k:W,cv:st}))}else $._bumped=!1;let I=this.wheels[W^1];ct+=($.comp-I.comp)*i.antiRoll,ct=Math.max(0,ct),$.load=ct,h(Je.copy(this.up).multiplyScalar(ct),$.cp);let S=$.front?this.steer:0;br.copy(this.fwd).multiplyScalar(Math.cos(S)).addScaledVector(this.left,-Math.sin(S)),br.addScaledVector(Qe,-br.dot(Qe)).normalize(),yu.crossVectors(Qe,br),mn.subVectors($.cp,this.pos),Di.crossVectors(this.w,mn).add(this.vel);let V=Di.dot(br),tt=Di.dot(yu),rt=Math.min(ct,3.2*r*9.81/4),nt=Rf[Q.surf]*(n.grip||1),Dt=j&&!$.front,mt=$.front?0:Ht,wt=Math.atan2(tt,Math.max(Math.abs(V),3)),ie=ip[Q.surf]||ip[0],ht=Math.abs(wt)/(ie[0]*i.peakSlip/.145),It=ht<1?1.5*ht-.5*ht*ht*ht:Math.max(Math.min(ie[1],i.slideFalloff+.08),1-(ht-1)*.3),Gt=this._wt,Wt=i.gripLat*nt*re(1,i.rearGripHandbrake,mt)*($.front?1+Gt:(1-Gt*1.15)*i.rearGripBias)*(!$.front&&this.flickT>0?.86:1);!$.front&&this.drift>.2&&(Wt*=re(1,.8,f*0));let At=-Math.sign(tt)*Wt*rt*It;Math.abs(V)<2&&Math.abs(tt)<1.5&&(At=ft(-tt*r*.25/t/4,-Wt*rt,Wt*rt));let Zt=0,Jt=$.front?i.frontTorque/2:(1-i.frontTorque)/2;if(Zt+=N*Jt,_>0&&!G){let et=i.brakeForce*($.front?i.brakeBias:1-i.brakeBias)*.5*_;Zt-=ft(V*r/4/t,-et,et)}if(mt>.05){let et=i.gripLong*nt*rt*.75*mt;Zt=re(Zt,-ft(V*r/4/t,-et,et),mt)}Zt-=V*(i.rollRes+Cf[Q.surf]*42);let xe=Math.max(i.gripLat,i.gripLong)*nt*rt,k=Math.hypot(At,Zt),vt=0;if(k>xe&&k>0){let et=xe/k;vt=1-et,At*=et,Zt*=et}$.slipLat=Math.abs(wt),$.slipLong=vt,$.front||(lt+=Math.abs(wt)*.5),ot+=Q.surf===Xt.WATER?1:0;let K=Je.copy($.cp).addScaledVector(this.up,.62);h(ze.copy(br).multiplyScalar(Zt).addScaledVector(yu,At),K),$.spin=V/i.wheelRadius*(1+vt*2)*(Dt?0:1),$.center.copy(X).addScaledVector(this.up,-(Mt-i.wheelRadius))}else $.contact=!1,$.comp=Math.max(0,$.comp-t*3),$.load=0,$.spin=re($.spin,v*60,t*2),$.center.copy(X).addScaledVector(this.up,-i.restLength);$.rot+=$.spin*t}this.contacts=J;let at=J>0;J?H.normalize():H.set(0,1,0),this.groundN.copy(H);let Rt=Je.copy(this.vel).addScaledVector(H,-this.vel.dot(H));this.slipAngle=l>4?Math.atan2(Rt.dot(this.left),Math.max(.1,Rt.dot(this.fwd))):0;let dt=at&&l>9&&Math.abs(this.slipAngle)>.22;if(this.drift=dt?Math.min(1,this.drift+t*3):Math.max(0,this.drift-t*4),h(Je.copy(this.vel).multiplyScalar(-l*i.dragCoef),this.pos),J>=2&&h(Je.copy(H).multiplyScalar(-i.downforce*l*l),this.pos),this.nitroing&&at){let W=ft((E-u)/2.5,0,1);h(Je.copy(this.fwd).multiplyScalar(i.nitroForce*(1+P.nitro*.1)*W),this.pos)}if(at&&u>E+1&&h(Je.copy(this.fwd).multiplyScalar(-r*4.5*ft((u-E-1)/3,0,1)),this.pos),at){let W=this.w.dot(this.up),$=2.68,X=u*Math.tan(this.steer)/$*-1,Q=Math.abs(this.slipAngle)-(i.spinSlip-f*.1);Q>0&&c.addScaledVector(this.up,Math.sign(this.slipAngle)*Q*i.inertia[1]*9*(.5+f)),c.addScaledVector(this.up,-(W-X)*i.inertia[1]*i.yawDamping*re(.6+f*.6,.15,Ht)*(dt?.35:1)*(this.flickT>0?.45:1)),this.hitT>0&&(this.hitT-=t,c.addScaledVector(this.up,-(W-X)*i.inertia[1]*3.5*(this.hitT/.7))),dt&&this.steer*this.slipAngle<0&&c.addScaledVector(this.up,this.slipAngle*Math.min(1,Math.abs(this.steer)/(i.maxSteer*.5))*i.inertia[1]*i.counterCatch),dt&&v>.2&&h(Je.copy(Rt).normalize().multiplyScalar(r*i.driftAssist*3.2*v),this.pos),ze.crossVectors(this.up,H);let D=ze.dot(this.fwd),Mt=ze.dot(this.left),st=this.w.dot(this.fwd),gt=this.w.dot(this.left);if(c.addScaledVector(this.fwd,(D*i.rollStab-st*3)*i.inertia[2]*i.stability),c.addScaledVector(this.left,(Mt*5-gt*1.1)*i.inertia[0]*i.stability*.5),Ht>.05&&e.handbrake&&l>8&&c.addScaledVector(this.up,-this.steer*i.inertia[1]*2.7*Ht),n.lane&&f>0){let ct=n.lane,Vt=Math.abs(ct.laneLat)/ct.hw,bt=f*(ct.narrow?1:.35)*ft((Vt-.35)/.65,0,1)*(1-Math.abs(e.steer)*.6);if(bt>0){h(Je.set(ct.rx,0,ct.rz).multiplyScalar(-Math.sign(ct.laneLat)*r*4.5*bt),this.pos);let I=Math.atan2(this.fwd.x,this.fwd.z)-ct.th,S=Math.atan2(Math.sin(I),Math.cos(I));c.addScaledVector(this.up,-S*i.inertia[1]*5*bt)}}}if(at)this.wasAir;else{this.airTime+=t,wr.copy(this.q).invert();let W=Je.copy(this.w).applyQuaternion(wr),$=e.pitch,X=e.steer;if(Math.abs($)>.05&&(W.x=re(W.x,$*i.airPitch*.62,1-Math.exp(-3.2*t))),Math.abs(X)>.05&&(W.z=re(W.z,X*i.airRoll*.6,1-Math.exp(-2.2*t)),W.y=re(W.y,-X*i.airYaw*.6,1-Math.exp(-2*t))),this.w.copy(W.applyQuaternion(this.q)).multiplyScalar(1-.25*t),n.landAssist>0&&n.landN){ze.crossVectors(this.up,n.landN);let Q=n.landAssist*(Math.abs($)>.05?.35:1);c.addScaledVector(ze,14*i.inertia[0]*Q),c.addScaledVector(this.w,-2.2*i.inertia[0]*Q)}if(f>.7){let Q=(f-.7)/.3*(Math.abs($)>.05||Math.abs(X)>.05?.3:1);ze.crossVectors(this.up,n.landN||l_),c.addScaledVector(ze,7*i.inertia[0]*Q),wr.copy(this.q).invert();let D=c_.copy(this.w).applyQuaternion(wr);D.z*=Math.exp(-2.5*t*Q),D.y*=Math.exp(-1.5*t*Q),this.w.copy(D.applyQuaternion(this.q))}}if(at&&this.airTime>.38&&!this.landing&&(this.landing={t:0,first:this.airTime,air:this.airTime,vn:-this._preVel.dot(H),ang:0,minUp:1,wheels:0}),this.landing){let W=this.landing;W.t+=t,W.minUp=Math.min(W.minUp,this.up.dot(H)),W.wheels=Math.max(W.wheels,J),(J>=3||W.t>.22||this.roofHit)&&this._judgeLanding()}at&&!this.landing&&(this.airTime=0),this.grounded=at,this._preVel=(this._preVel||Be()).copy(this.vel),ze.copy(this.vel),this.vel.addScaledVector(o,t/r),this._angAcc(c,Je),this.w.addScaledVector(Je,t),at&&this.w.multiplyScalar(1-.4*t);let F=this.w.length();F>9&&this.w.multiplyScalar(9/F),this._prevX=this.pos.x,this._prevZ=this.pos.z,this.pos.addScaledVector(this.vel,t);{let W=(this.vel.x-ze.x)/t,$=(this.vel.y-ze.y)/t+9.81,X=(this.vel.z-ze.z)/t,Q=W*this.fwd.x+$*this.fwd.y+X*this.fwd.z,D=W*this.left.x+$*this.left.y+X*this.left.z,Mt=1-Math.exp(-14*t);this.accLong+=(ft(Q,-30,30)-this.accLong)*Mt,this.accLat+=(ft(D,-30,30)-this.accLat)*Mt}if(ua.set(this.w.x*t*.5,this.w.y*t*.5,this.w.z*t*.5,0).multiply(this.q),this.q.x+=ua.x,this.q.y+=ua.y,this.q.z+=ua.z,this.q.w+=ua.w,this.q.normalize(),this._bodyCollide(t),this._walls(t,n),n.obstacles&&this._obstacles(n.obstacles),at){let W=this.wheels[2].surf;this.lastSurf=W,(W===Xt.MUD||W===Xt.JUNGLE||W===Xt.WATER)&&(this.mud=Math.min(1,this.mud+t*.04*Math.min(l,20)/20))}ot>1&&l>6&&this.events.push({type:"splash",speed:l}),this.throttle=v,this.up.y<.3&&l<5?this.flipT+=t:this.flipT=Math.max(0,this.flipT-t*2),e.throttle>.5&&l<1.2&&!this.landing?this.stuckT+=t:this.stuckT=Math.max(0,this.stuckT-t)}_judgeLanding(){let t=this.landing;this.landing=null;let e=this.landTol,n=Math.acos(ft(t.minUp,-1,1))*57.3,i=Math.max(0,t.vn),r=this.wheels.reduce((o,c)=>c.contact?Math.max(o,Math.abs(c.touchT-t.first)):o,0),a;this.roofHit||t.minUp<.25?a="CRASH":n<15*e&&i<14*e&&r<.2?a="PERFECT":n<28*e&&i<19*e?a="GOOD":n<48?a="ROUGH":a="CRASH",a==="PERFECT"&&this.vel.multiplyScalar(1.03),a==="ROUGH"&&(this.vel.multiplyScalar(.86),this.damage(5+i*.4,"landing")),a==="CRASH"&&(this.vel.multiplyScalar(.55),this.damage(14+i,"crash")),this.events.push({type:"land",quality:a,air:t.air,vn:i,ang:n}),this.airTime=0,this.roofHit=!1}_bodyCollide(t){let e=this.T.mass,n=!1;for(let r of this.probes){let a=rs.copy(r.lp).applyQuaternion(this.q).add(this.pos),o=this.track.query(a.x,a.z,this.hint);if(o.isVoid)continue;let c=o.h-a.y;if(c<=0||c>2.5)continue;Qe.set(o.nx,o.ny,o.nz),mn.subVectors(a,this.pos),Di.crossVectors(this.w,mn).add(this.vel);let h=Di.dot(Qe);if(this.pos.addScaledVector(Qe,c*.35),h<0){let l=-1.18*h/this._invMassAlong(mn,Qe),u=Je.copy(Qe).multiplyScalar(l);ze.copy(Di).addScaledVector(Qe,-h);let f=ze.length();f>.01&&u.addScaledVector(ze.normalize(),-Math.min(l*.55,f*e*.2)),this.applyImpulse(a,u),r.roof&&-h>1.5&&(n=!0),-h>4&&this.events.push({type:"impact",speed:-h,roof:r.roof}),-h>6&&this.damage((-h-6)*1.6,"body")}}n&&(this.roofHit=!0,!this.landing&&this.airTime>.2&&(this.landing={t:0,first:this.airTime,air:this.airTime,vn:0,minUp:this.up.y,wheels:0}));let i=this.track.query(this.pos.x,this.pos.z,this.hint);this.hint=i.idx,this.lat=i.lat,this.laneLat=i.laneLat,this.lane=i.lane,this.overVoid=i.isVoid,this.groundH=i.h,this.onRoad=i.onRoad}_contact(t,e,n,i,r,a){let o=this.T.mass,c=Math.min(i,r==="wall"?.2:.12);Qe.set(e,0,n),mn.subVectors(t,this.pos),mn.y=Math.min(mn.y,.2),Di.crossVectors(this.w,mn).add(this.vel);let h=Di.dot(Qe);if(h>=0)return 0;ze.copy(Di).addScaledVector(Qe,-h),ze.y=0;let l=ze.length(),u=ft(-h/Math.max(Math.hypot(h,l),.1),0,1),f=r==="wall"?.08+.22*u*u:.06+(a&&a.bounce!=null?a.bounce:.3)*u*u,d=ft(1-(-h-6)/18,.2,1),m=this._invMassAlong(mn,Qe),x=a&&a.mass?a.mass:0,p=-(1+f*d)*h/(m+(x?1/x:0)),g=Je.copy(Qe).multiplyScalar(p),v=r==="wall"?.16+.2*u:.3;l>.05&&g.addScaledVector(ze.multiplyScalar(1/l),-Math.min(v*p,l*o*.5));let _=this.w.x,y=this.w.y,R=this.w.z;this.applyImpulse(mn.add(this.pos),g);let w=this.w.x-_,C=this.w.y-y,P=this.w.z-R,M=this.up,b=w*M.x+C*M.y+P*M.z,E=ft(b,-1.2,1.2);this.w.set(_+(w-M.x*b)*.3+M.x*E,y+(C-M.y*b)*.3+M.y*E,R+(P-M.z*b)*.3+M.z*E);{let U=this.w.dot(this.up),N=r==="wall"?1.6:2.4;Math.abs(U)>N&&this.w.addScaledVector(this.up,Math.sign(U)*N-U)}this.vel.y>2.5&&this.grounded&&(this.vel.y=2.5);let L=-h;if(L>4&&(this.hitT=.7),r==="wall"||!x){(L>2.2||l>6)&&this.events.push({type:L>2.2?"wall":"scrape",speed:L,scrape:l,headOn:u,x:t.x,y:t.y,z:t.z});let U=6.5-u*1.5;r==="wall"&&L>U&&this.damage((L-U)*(1+u*.4),r)}return p}_walls(t,e){let n=this.hull;for(let i=0;i<n.length;i++){let r=rs.copy(n[i]).applyQuaternion(this.q).add(this.pos),a=this.track.query(r.x,r.z,this.hint),o=this.track.get(a.idx),c=this.track.limits(o),h=a.lat,l=0,u=0;h>c.R?(l=h-c.R,u=-1):h<-c.L?(l=-c.L-h,u=1):c.island>0&&Math.abs(h)<c.island&&r.y<o.y+2.5&&(l=c.island-Math.abs(h),u=Math.sign(h)||1),!(l<=0||r.y>o.y+3.2)&&this._contact(r,o.rx*u,o.rz*u,l,"wall",null)}}_obstacles(t){let r=this.fwd.x,a=this.fwd.z,o=Math.hypot(r,a)||1,c=r/o,h=a/o,l=h,u=-c,f=this._prevX??this.pos.x,d=this._prevZ??this.pos.z;for(let m of t){if(!m.active||m.bump)continue;let x=this.pos.y;if(x+1.2<m.yMin||x-.6>m.yMax)continue;let p=m.x,g=m.z;if(m.x2!==void 0){let ot=m.x2-m.x,ut=m.z2-m.z,Pt=ot*ot+ut*ut,Ht=ft(((this.pos.x-m.x)*ot+(this.pos.z-m.z)*ut)/(Pt||1),0,1);p=m.x+ot*Ht,g=m.z+ut*Ht}let v=p-this.pos.x,_=g-this.pos.z;if(v*v+_*_>(m.r+3)*(m.r+3)){let ot=this.pos.x-f,ut=this.pos.z-d,Pt=ot*ot+ut*ut;if(Pt<.04)continue;let Ht=ft(((p-f)*ot+(g-d)*ut)/Pt,0,1),j=f+ot*Ht,at=d+ut*Ht;if((p-j)**2+(g-at)**2>(m.r+.98)**2||Ht>=1)continue;this.pos.x=j-ot*.05,this.pos.z=at-ut*.05,v=p-this.pos.x,_=g-this.pos.z}let y=v*l+_*u,R=v*c+_*h,w=ft(y,-.98,.98),C=ft(R,-2.08,2.2),P,M,b,E=w,L=C,U=y-w,N=R-C,G=Math.hypot(U,N);if(G>1e-4){if(G>=m.r)continue;b=m.r-G,P=-U/G,M=-N/G}else{let ot=.98-y,ut=y+.98,Pt=2.2-R,Ht=R+2.08,j=Math.min(ot,ut,Pt,Ht);j===ot?(P=-1,M=0,E=.98):j===ut?(P=1,M=0,E=-.98):j===Pt?(P=0,M=-1,L=2.2):(P=0,M=1,L=-2.08),b=j+m.r}if(M!==0&&Math.abs(M)>.7){let ot=Math.abs(y)/.98;if(ot>.4){let ut=Math.min(1.3,(ot-.4)*1.6);P-=Math.sign(y)*ut;let Pt=Math.hypot(P,M);P/=Pt,M/=Pt}}let O=P*l+M*c,J=P*u+M*h;if(rs.set(this.pos.x+E*l+L*c,x+.1,this.pos.z+E*u+L*h),m.solid===!1){m.onHit&&!m._hitCd&&(m.onHit(this,O,J,0),m._hitCd=.6);continue}let H=-(this.vel.x*O+this.vel.z*J);if(m.breakAt!==void 0&&H>m.breakAt){m.active=!1,this.vel.multiplyScalar(1-(m.slow??.03)),m.onBreak&&m.onBreak(this,-O,-J,H);continue}let lt=this._contact(rs,O,J,b,"prop",m);lt>0&&(m.mass&&m.onPush&&m.onPush(-O*lt/m.mass,-J*lt/m.mass),m.onHit&&!m._hitCd&&(m.onHit(this,O,J,H),m._hitCd=.5),!m.mass&&H>2&&this.events.push({type:"impact",speed:H,x:rs.x,y:rs.y+.4,z:rs.z}))}}};var Ps={green:[74,88,52],sand:[168,146,104],red:[138,46,34],safari:[196,176,128]};function Sr(s,t){return s.onBeforeCompile=e=>{e.uniforms.uMud=t.mud,e.uniforms.uCarY=t.carY,e.uniforms.uWear=t.wear,e.vertexShader=`varying float vMudY; varying vec3 vMudP;
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
      roughnessFactor = mix(roughnessFactor, 0.55 + mn2 * 0.4, mud);`)},s.customProgramCacheKey=()=>"mud",s}var Ve=(s,t,e)=>new A(s,t,e);function da(s,t,e=.025){let n=new fn;n.moveTo(s[0][0],s[0][1]);for(let r=1;r<s.length;r++)n.lineTo(s[r][0],s[r][1]);n.closePath();let i=new li(n,{depth:t,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:6});return i.translate(0,0,-t/2),i.rotateY(-Math.PI/2),i.scale(1,1,1),i}function _u(s,t,e=.02){let n=new li(s,{depth:t,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:10});return n.translate(0,0,-t/2),n}var rp=new $t(1,1,1,10,1).translate(0,.5,0),Er=new A,Mu=new A,Ui=new A,hl=new Kt,bu=new ye,wu=new A,h_=new A(0,1,0);function u_(s,t,e,n){Ui.subVectors(e,t);let i=Math.max(Ui.length(),1e-4);return Ui.multiplyScalar(1/i),bu.setFromUnitVectors(h_,Ui),wu.set(n,i,n),s.compose(t,bu,wu)}var ul=class{constructor(t,e="green",n={}){this.lite=!!n.lite,this.uni={mud:{value:.1},carY:{value:0},wear:{value:0}};let i=this.uni,r=Df(),a=Yo("metal"),o=Yo("rubber"),c=Yo("canvas"),h=Le("leather",{strength:3,rough:.62}),l=Le("crate",{strength:5,rough:.88}),u=Le("tire",{strength:6,rough:.92}),f=F=>new zt(F),d=this.mats={paint:Sr(f({map:uu(Ps[e]||Ps.green),normalMap:r.normalMap,roughnessMap:r.roughnessMap,roughness:.78,metalness:.32,normalScale:new Z(.45,.45)}),i),dark:Sr(f({color:"#2a2722",roughness:.75,metalness:.65,normalMap:a.normalMap,roughnessMap:a.roughnessMap}),i),under:Sr(f({color:"#1d1b18",roughness:.85,metalness:.5,normalMap:a.normalMap}),i),chrome:f({color:"#d8d2c2",roughness:.2,metalness:1,roughnessMap:a.roughnessMap}),brass:f({color:"#b48a3c",roughness:.35,metalness:1,roughnessMap:a.roughnessMap}),leather:f({map:du(),normalMap:h.normalMap,roughnessMap:h.roughnessMap,roughness:.75}),wood:f({map:ra(),normalMap:l.normalMap,roughnessMap:l.roughnessMap,roughness:1}),canvas:f({color:"#9c8d68",roughness:1,normalMap:c.normalMap,roughnessMap:c.roughnessMap}),strap:f({color:"#5a3d22",roughness:.8,normalMap:h.normalMap}),rubber:Sr(f({map:fu(),color:"#bdb7ae",normalMap:u.normalMap,roughnessMap:o.roughnessMap,roughness:1,normalScale:new Z(1.2,1.2)}),i),rim:Sr(f({color:"#6b7048",roughness:.5,metalness:.5,normalMap:a.normalMap,roughnessMap:r.roughnessMap}),i),glass:f({color:"#c8dcd8",roughness:.04,metalness:.3,transparent:!0,opacity:.2,depthWrite:!1}),lens:f({color:"#fff4d8",emissive:"#ffe2a0",emissiveIntensity:1.4,roughness:.1}),reflector:f({color:"#f4efe6",roughness:.08,metalness:1}),skin:f({color:"#c98d64",roughness:.62}),skin2:f({color:"#c98a62",roughness:.6}),eye:f({color:"#1a120c",roughness:.2}),jacket:f({color:"#6a3f22",roughness:.68,normalMap:h.normalMap}),shirt:f({color:"#b7a47c",roughness:.9,normalMap:c.normalMap}),khaki:f({color:"#b9a57a",roughness:.92,normalMap:c.normalMap}),hat:f({color:"#7a5c3c",roughness:.95,normalMap:c.normalMap}),band:f({color:"#3a2a1c",roughness:.8}),hair:f({color:"#8a3e1e",roughness:.75}),scarf:f({color:"#b8302a",roughness:.9,side:be}),jerry:Sr(f({color:"#4c5a34",roughness:.6,metalness:.4,normalMap:r.normalMap,roughnessMap:r.roughnessMap}),i),gauge0:f({map:mu(0),roughness:.3}),gauge1:f({map:mu(1),roughness:.3}),flame:new We({color:"#ffb46a",transparent:!0,opacity:.85,blending:on,depthWrite:!1}),flameCore:new We({color:"#c8e4ff",transparent:!0,opacity:.9,blending:on,depthWrite:!1}),tyreDark:f({color:"#1c1a17",roughness:.9})},m=this.root=new se,x=this.body=new se;m.add(x);let p=(F,it,W,$,X,Q=x)=>{let D=new _t(F,it);return D.position.set(W,$,X),D.castShadow=!0,D.receiveShadow=!0,Q.add(D),D},g=(F,it,W,$=.05,X=1)=>new hi(F,it,W,X,$),v=(F,it,W,$=16)=>new $t(F,it,W,$).rotateZ(Math.PI/2),_=(F,it,W,$=16)=>new $t(F,it,W,$).rotateX(Math.PI/2),y=(F,it,W,$=24,X=x)=>p(new Ji(new _s(F.map(Q=>Ve(...Q))),$,it,8),W,0,0,0,X);for(let F of[.5,-.5]){let it=da([[-2,-.42],[2.05,-.42],[2.05,-.26],[1.5,-.26],[1.15,-.2],[-1,-.2],[-1.3,-.26],[-2,-.26]],.1,.01);p(it,d.under,F,0,0)}for(let F of[1.9,.6,-.6,-1.85])p(new Ct(1,.1,.1),d.under,0,-.3,F);p(g(.36,.28,.6,.05),d.under,0,-.32,.25),p(g(.5,.42,.75,.08),d.under,0,-.12,1.35),p(_(.12,.12,.14,14),d.dark,0,-.08,1.85);let R=1.62,w=[[-1.88,-.25],[.78,-.25],[.78,.36],[.62,.38],[.5,.24],[.14,.16],[-.12,.16],[-.26,.3],[-.5,.38],[-1.88,.38],[-1.92,.3]],C=p(da(w,.05,.018),d.paint,R/2,0,0),P=p(da(w,.05,.018),d.paint,-R/2,0,0);p(g(R-.04,.05,2.62,.02),d.dark,0,-.22,-.55),p(g(R,.6,.06,.03),d.paint,0,.07,-1.9);for(let F of[.5,-.5])p(g(.16,.14,.05,.02),d.dark,F,.16,-1.94);for(let F of[.5,-.5])p(_(.045,.045,.02,12),this._tail||(this._tail=f({color:"#7a1408",emissive:"#4a0802",roughness:.2})),F,.16,-1.97);for(let F of[R/2,-R/2])p(_(.03,.03,1.4,8),d.paint,F,.38,-1.18);p(v(.03,.03,R,8),d.paint,0,.38,-1.88);for(let F of[.64,-.64])p(g(.3,.32,.9,.08),d.paint,F,-.05,-1.3);let M=p(g(1.6,.56,.5,.08,2),d.paint,0,.12,.62);p(g(1.36,.22,.05,.03),d.dark,0,.3,.37);let b=[[.42,0],[.24,1],[.08,0],[-.3,1]];for(let[F,it]of b){p(_(.055,.055,.03,18),d.brass,F,.31,.345);let W=p(new An(.046,18),d.gauge0,F,.31,.328);W.rotation.y=Math.PI,W.castShadow=!1}p(g(.34,.14,.03,.02),d.dark,-.36,.2,.345);for(let F=0;F<3;F++)p(_(.012,.012,.05,6),d.chrome,0+F*.06-.06,.2,.33);let E=new fn,L=.57;E.moveTo(-L,-.2),E.lineTo(-L,.14),E.quadraticCurveTo(-L,.24,-L+.12,.25),E.quadraticCurveTo(0,.31,L-.12,.25),E.quadraticCurveTo(L,.24,L,.14),E.lineTo(L,-.2),E.lineTo(-L,-.2);let U=p(_u(E,1.28,.015),d.paint,0,.04,1.36);{let F=U.geometry.attributes.position;for(let it=0;it<F.count;it++){let W=F.getZ(it);if(W>0){let $=W/.64;F.setY(it,F.getY(it)-(F.getY(it)>.1?$*$*.04:0))}}U.geometry.computeVertexNormals()}p(_(.012,.012,1.28,6),d.dark,0,.345,1.36);for(let F of[L+.01,-L-.01])for(let it=0;it<6;it++){let W=p(g(.03,.03,.2,.012),d.dark,F,.1+it%2*0,.9+it*.15);W.rotation.y=0,W.scale.set(1,1,1),W.position.y=.09,W.rotation.x=Math.PI/2}for(let F of[L+.02,-L-.02])p(g(.03,.1,.06,.012),d.chrome,F,.12,1.98);let N=new fn;N.moveTo(-.5,-.32),N.lineTo(.5,-.32),N.lineTo(.5,.2),N.quadraticCurveTo(.5,.3,.38,.31),N.lineTo(-.38,.31),N.quadraticCurveTo(-.5,.3,-.5,.2),N.lineTo(-.5,-.32);let G=new Ci;G.moveTo(-.42,-.26),G.lineTo(.42,-.26),G.lineTo(.42,.2),G.quadraticCurveTo(.42,.25,.34,.25),G.lineTo(-.34,.25),G.quadraticCurveTo(-.42,.25,-.42,.2),G.lineTo(-.42,-.26),N.holes.push(G),p(_u(N,.07,.02),d.paint,0,.02,2.04),p(new Se(.84,.5),d.under,0,.02,2.01).castShadow=!1;for(let F=0;F<8;F++)p(g(.84,.032,.05,.012),d.chrome,0,-.21+F*.058,2.05);p(g(.06,.5,.055,.015),d.dark,0,0,2.06);let O=[[2.08,-.12],[1.98,.04],[1.72,.17],[1.38,.2],[1,.16],[.82,.02],[.72,-.26],[.66,-.3],[.74,-.22],[.86,-.02],[1.02,.1],[1.38,.14],[1.7,.11],[1.94,-.02],[2.02,-.14]];for(let F of[.84,-.84]){p(da(O,.44,.02),d.paint,F,-.06,0),p(da([[-.82,-.08],[-.92,.06],[-1.3,.12],[-1.7,.06],[-1.8,-.08],[-1.72,-.06],[-1.3,.06],[-.9,-.02]],.36,.015),d.paint,F*.98,.02,0),p(g(.38,.04,1.3,.015),d.dark,F*1.03,-.33,0);for(let it=0;it<5;it++)p(new Ct(.34,.012,.03),d.chrome,F*1.03,-.305,-.5+it*.25)}this.lenses=[];for(let F of[.66,-.66]){let it=[Ve(0,-.12,0),Ve(.06,-.11,0),Ve(.12,-.06,0),Ve(.15,.03,0),Ve(.155,.08,0),Ve(.14,.09,0)].map(X=>new Z(X.x,X.y)),W=p(new un(it,20).rotateX(Math.PI/2),d.paint,F,.34,1.82);p(new Ue(.15,.016,8,22),d.chrome,0,0,.09,W),p(new An(.15,20).translate(0,0,.07),d.reflector,0,0,0,W).castShadow=!1;let $=p(new ge(.15,20,8,0,Math.PI*2,0,.55).rotateX(Math.PI/2).scale(1,1,.35),d.lens.clone(),0,0,.075,W);this.lenses.push($),p(new $t(.025,.035,.22,8),d.dark,F,.17,1.8)}p(g(1.96,.18,.16,.03),d.dark,0,-.36,2.2);for(let F of[.88,-.88])p(g(.08,.26,.2,.02),d.dark,F,-.32,2.2);for(let F of[.74,-.74])p(new Ue(.06,.018,6,12,Math.PI*1.4).rotateY(Math.PI/2),d.chrome,F,-.4,2.3);p(g(.66,.24,.24,.04),d.dark,0,-.18,2.24),p(v(.1,.1,.5,18),d.brass,0,-.18,2.26);for(let F of[.27,-.27])p(v(.13,.13,.03,18),d.dark,F,-.18,2.26);for(let F=0;F<9;F++)p(new Ue(.105,.012,5,18).rotateY(Math.PI/2),d.dark,-.22+F*.055,-.18,2.26);y([[.05,-.08,2.3],[.05,-.1,2.38],[.02,-.28,2.4],[0,-.36,2.34]],.012,d.dark,12),p(new Ue(.045,.014,6,12,Math.PI*1.5).rotateY(Math.PI/2),d.chrome,0,-.4,2.33),p(g(1.84,.15,.14,.03),d.dark,0,-.32,-1.92),p(new Ue(.06,.018,6,12),d.chrome,0,-.42,-2);let J=new se;J.position.set(0,.42,.82),J.rotation.x=-.12,x.add(J);let H=new fn;H.moveTo(-.76,0),H.lineTo(.76,0),H.lineTo(.76,.62),H.lineTo(-.76,.62),H.lineTo(-.76,0);let lt=new Ci;lt.moveTo(-.7,.05),lt.lineTo(-.03,.05),lt.lineTo(-.03,.57),lt.lineTo(-.7,.57),lt.lineTo(-.7,.05),H.holes.push(lt);let ot=new Ci;ot.moveTo(.03,.05),ot.lineTo(.7,.05),ot.lineTo(.7,.57),ot.lineTo(.03,.57),ot.lineTo(.03,.05),H.holes.push(ot),p(_u(H,.035,.008),d.paint,0,0,0,J);let ut=p(new Se(1.4,.52),d.glass,0,.31,0,J);ut.castShadow=!1,ut.material.side=be;for(let F of[.78,-.78])p(v(.03,.03,.06,8),d.chrome,F,0,0,J);p(g(.1,.02,.5,.008),d.dark,.35,.6,-.02,J).rotation.z=.3,p(new $t(.008,.008,.16,6),d.chrome,.8,.5,.8).rotation.z=-.5,p(_(.055,.055,.02,14),d.chrome,.86,.6,.8),this.wheelSteer=new se,this.wheelSteer.position.set(.38,.6,.5),this.wheelSteer.rotation.x=-.75,x.add(this.wheelSteer);{let F=[new Ue(.19,.018,8,26)];for(let W=0;W<3;W++){let $=new Ct(.17,.02,.012);$.translate(.085,0,0),$.rotateZ(W/3*Math.PI*2+Math.PI/2),F.push($)}F.push(new $t(.035,.035,.03,10).rotateX(Math.PI/2));let it=new _t(ue(F.map(W=>W.index?W.toNonIndexed():W).map(W=>{for(let $ of Object.keys(W.attributes))["position","normal","uv"].includes($)||W.deleteAttribute($);return W})),d.under);it.castShadow=!0,this.wheelSteer.add(it)}p(v(.016,.016,.5,6).rotateZ(Math.PI/2).rotateX(.82),d.under,.38,.45,.66);for(let[F,it]of[[.04,.25],[-.06,-.15]]){let W=p(new $t(.012,.012,.42,6),d.chrome,F,.02,.2);W.rotation.z=it,W.rotation.x=-.25,p(new ge(.03,8,6),d.band,F+Math.sin(-it)*.21,.22,.15)}for(let F of[.38,-.38]){p(g(.52,.14,.5,.06,2),d.leather,F,.3,.05);let it=p(g(.52,.56,.13,.06,2),d.leather,F,.6,-.24);it.rotation.x=-.12;for(let W=0;W<3;W++)p(new Ct(.48,.012,.012),d.strap,F,.42+W*.15,-.165);p(g(.06,.38,.4,.02),d.dark,F+.26,.15,.05)}p(g(1.32,.14,.48,.06,2),d.leather,0,.3,-.92),p(g(1.32,.42,.12,.05,2),d.leather,0,.53,-1.14),y([[-.76,.35,-.42],[-.74,.95,-.44],[-.62,1.2,-.45],[0,1.25,-.45],[.62,1.2,-.45],[.74,.95,-.44],[.76,.35,-.42]],.042,d.dark,32),y([[.7,1.1,-.45],[.72,.7,-1.2],[.74,.38,-1.7]],.032,d.dark,12),y([[-.7,1.1,-.45],[-.72,.7,-1.2],[-.74,.38,-1.7]],.032,d.dark,12);for(let F of[.76,-.76])p(v(.06,.06,.06,10),d.dark,F,.36,-.42);y([[-.34,.5,.6],[-.34,.6,.55],[-.14,.6,.55],[-.14,.5,.6]],.014,d.chrome,10),this.crates=[];let Pt=(F,it,W,$,X,Q,D=0)=>{let Mt=p(g(F,it,W,.02),d.wood,$,X,Q);Mt.rotation.y=D;for(let st of[-.3,.3]){let gt=p(new Ct(.04,it+.01,W+.01),d.strap,st*F,0,0,Mt);gt.castShadow=!1}for(let st of[-1,1])for(let gt of[-1,1])p(new Ct(.05,it+.012,.05),d.dark,st*(F/2-.02),0,gt*(W/2-.02),Mt);return this.crates.push(Mt),Mt};Pt(.62,.46,.5,.32,.61,-1.42,.05),Pt(.55,.42,.46,-.34,.59,-1.44,-.08),Pt(.46,.36,.4,.05,1,-1.44,.25);for(let F of[.89,-.89]){let it=p(g(.13,.44,.32,.025),d.jerry,F,.2,-1.42);for(let W of[-1,1]){let $=p(new Ct(.012,.42,.03),d.jerry,F>0?.07:-.07,0,0,it);$.rotation.x=W*.62}p(g(.04,.06,.16,.01),d.dark,0,.25,.02,it),p(v(.02,.02,.03,8),d.brass,0,.25,.13,it),p(g(.03,.5,.36,.01),d.dark,F>0?-.07:.07,0,0,it)}p(new Ue(.19,.055,8,22).rotateX(Math.PI/2),d.canvas,-.38,.42,-.66),p(new Ue(.15,.05,8,20).rotateX(Math.PI/2),d.canvas,-.38,.5,-.66),p(new dn(.13,.7,4,10).rotateZ(Math.PI/2),d.canvas,.05,.88,-1.05);for(let F of[-.25,.3])p(new Ue(.135,.012,5,14).rotateY(Math.PI/2),d.strap,F,.88,-1.05);p(g(.03,.04,1,.01),d.strap,.84,.36,-.4).rotation.x=.06,p(g(.02,.2,.24,.01),d.dark,.84,.34,.2),p(g(.025,.035,.7,.01),d.strap,-.84,.3,-.6),p(g(.02,.16,.1,.01),d.chrome,-.84,.3,-.24);let Ht=new se;Ht.position.set(0,.16,-2.04),x.add(Ht),this._makeWheel(Ht,!0),p(g(.2,.2,.08,.02),d.dark,0,.16,-1.95),y([[-.42,-.36,1.2],[-.5,-.4,.4],[-.55,-.42,-1.2],[-.56,-.42,-2]],.045,d.under,16),p(_(.055,.05,.14,12),d.chrome,-.56,-.42,-2.04);{let F=[],it=new ge(.012,5,4);for(let W of[R/2+.03,-R/2-.03])for(let $=0;$<14;$++){let X=it.clone();X.translate(W,-.18,-1.8+$*.18),F.push(X)}for(let W=0;W<10;W++){let $=it.clone();$.translate(-.7+W*.155,-.15,-1.94),F.push($)}p(ue(F),d.dark,0,0,0)}this.dusty=this._person(.38,!0),this.penny=this._person(-.38,!1),this.flames=new se,this.flames.position.set(-.56,-.42,-2.1),x.add(this.flames);let j=new _t(new Ye(.16,1.4,12,1,!0).rotateX(-Math.PI/2).translate(0,0,-.7),d.flame);this.flames.add(j);let at=new _t(new Ye(.08,.8,10,1,!0).rotateX(-Math.PI/2).translate(0,0,-.4),d.flameCore);this.flames.add(at),this.flames.visible=!1,this.flameLight=new gr("#ff9a40",0,8,2),this.flameLight.position.set(-.55,-.2,-2.6),x.add(this.flameLight),this.head=new Ao("#ffe8c0",0,60,.55,.5,1.4),this.head.position.set(0,.4,2),this.head.target.position.set(0,-1.2,14),x.add(this.head),x.add(this.head.target),this.wheels=[];for(let F=0;F<4;F++){let it=new se;m.add(it);let W=new se;it.add(W),this._makeWheel(W,!1,F%2===1);let $=F%2===0?-1:1;p(v(.2,.2,.1,16),d.under,$*.2,0,0,it),p(g(.08,.22,.16,.03),d.under,$*.27,0,0,it),this.wheels.push({g:it,spin:W})}this.rods=new qn(rp,d.under,12),this.rods.castShadow=!0,this.rods.frustumCulled=!1,m.add(this.rods),this.shafts=new qn(rp,d.chrome,4),this.shafts.castShadow=!1,this.shafts.frustumCulled=!1,m.add(this.shafts);{let F=[];for(let it=0;it<4;it++){let W=1.25-it*.22,$=new Ct(.07,.022,W,1,1,8),X=$.attributes.position;for(let Q=0;Q<X.count;Q++){let D=X.getZ(Q);X.setY(Q,X.getY(Q)-it*.024+(1-(2*D/1.25)**2)*-.06+.06)}$.computeVertexNormals(),F.push($)}this.leafGeo=ue(F)}this.leaves=new qn(this.leafGeo,d.under,4),this.leaves.castShadow=!0,this.leaves.frustumCulled=!1,m.add(this.leaves);let Rt=ue([new ge(.17,14,10).scale(1,.95,1.1),_(.07,.09,.22,10).translate(0,0,.16)].map(F=>F.index?F.toNonIndexed():F));this.diffs=new qn(Rt,d.under,2),this.diffs.castShadow=!0,this.diffs.frustumCulled=!1,m.add(this.diffs),this._susp={m:new Kt},this.root.traverse(F=>{F.isMesh&&F.material===d.glass&&(F.castShadow=!1)}),this._bake(J,[]);let dt=[...this.crates,this.wheelSteer,this.dusty.g,this.penny.g,this.flames,Ht,J,this.head,this.head.target,this.flameLight];this._flatten(x,dt);for(let F of this.crates)this._bake(F,[]);for(let F of[this.dusty,this.penny]){this._flatten(F.g,[F.head,...F.arms.map(it=>it.sh)]),this._bakeVC(F.g),this._flatten(F.head,[]),this._bakeVC(F.head,[this.scarf,this.pony]);for(let it of F.arms)this._flatten(it.sh,[it.el]),this._bakeVC(it.sh),this._bakeVC(it.el)}this._bake(this.wheelSteer,[]),this._bake(x,[...this.crates,...this.lenses]);for(let F of this.wheels)this._bake(F.spin,[]),this._bake(F.g,[F.spin]);this._bake(Ht,[]),t.add(m),this.crateFall=[],this.lightsBroken=!1,this.sp={r:0,rv:0,p:0,pv:0,h:0,hv:0,wasAir:!1,hb:0,hbv:0},this.SPRING={w:2*Math.PI*1.6,z:.35,roll:.0085,pitch:.0075,maxRoll:.075,maxPitch:.06,heave:.016}}_flatten(t,e){t.updateMatrixWorld(!0);let n=[];t.traverse(i=>{if(i===t||!i.isMesh||i.isInstancedMesh)return;let r=i.parent;for(;r&&r!==t;){if(e.includes(r))return;r=r.parent}e.includes(i)||n.push(i)});for(let i of n)i.parent!==t&&t.attach(i);for(let i of[...t.children])!i.isMesh&&!i.isLight&&i.isGroup&&!e.includes(i)&&i.children.length===0&&t.remove(i)}_bakeVC(t,e=[]){let n=this.mats.crew||(this.mats.crew=new zt({vertexColors:!0,roughness:.78,metalness:.02})),i=[],r=[],a=new yt;for(let c of t.children){if(!c.isMesh||e.includes(c)||c.children.length)continue;c.updateMatrix();let h=c.geometry.index?c.geometry.toNonIndexed():c.geometry.clone();h.applyMatrix4(c.matrix);for(let f of Object.keys(h.attributes))["position","normal"].includes(f)||h.deleteAttribute(f);a.copy(c.material.color||a.set("#888")),c.material.map&&a.multiplyScalar(.8);let l=h.attributes.position.count,u=new Float32Array(l*3);for(let f=0;f<l;f++)u[f*3]=a.r,u[f*3+1]=a.g,u[f*3+2]=a.b;h.setAttribute("color",new ne(u,3)),i.push(h),r.push(c)}if(!i.length)return;for(let c of r)t.remove(c);let o=new _t(ue(i),n);o.castShadow=!0,o.receiveShadow=!0,t.add(o)}_bake(t,e){let n=new Map,i=[];t.updateMatrix();for(let r of t.children){if(!r.isMesh||r.isInstancedMesh||e.includes(r)||r.children.length)continue;r.updateMatrix();let a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(r.matrix);for(let o of Object.keys(a.attributes))["position","normal","uv"].includes(o)||a.deleteAttribute(o);a.attributes.uv||a.setAttribute("uv",new ne(new Float32Array(a.attributes.position.count*2),2)),n.has(r.material)||n.set(r.material,[]),n.get(r.material).push(a),i.push(r)}for(let r of i)t.remove(r);for(let[r,a]of n){let o=new _t(ue(a),r);o.castShadow=r!==this.mats.glass,o.receiveShadow=!0,t.add(o)}}_makeWheel(t,e,n){let i=this.mats,r=.46,a=.32,o=.27,c=n?-1:1,h={rubber:[],rim:[],chrome:[],dark:[]},l=[[o,-a/2],[r-.07,-a/2],[r-.035,-a/2+.02],[r-.012,-a/2+.06],[r-.02,-a/2+.1],[r-.02,a/2-.1],[r-.012,a/2-.06],[r-.035,a/2-.02],[r-.07,a/2],[o,a/2]].map(([x,p])=>new Z(x,p));h.rubber.push(new un(l,this.lite?20:30).rotateZ(Math.PI/2));let u=new Ct(.12,.03,.06);for(let x=0;x<52;x++){if(this.lite&&x%2)continue;let p=x%2,g=Math.floor(x/2)/26*Math.PI*2+p*(Math.PI/26),v=u.clone();v.rotateY(p?-.45:.45),v.translate(p?-.075:.075,r-.012,0),v.rotateX(g),h.rubber.push(v)}let f=new Ct(.04,.05,.07);if(!this.lite)for(let x=0;x<26;x++){let p=x/26*Math.PI*2+Math.PI/52;for(let g of[-1,1]){let v=f.clone();v.translate(g*(a/2-.01),r-.045,0),v.rotateX(p),h.rubber.push(v)}}let d=[[.29,-.12],[.3,-.11],[.285,-.08],[.24,-.05],[.19,-.02],[.1,0],[.07,.02],[0,.03]].map(([x,p])=>new Z(x,p));h.rim.push(new un(d,24).rotateZ(-Math.PI/2*c).translate(c*.1,0,0)),h.rim.push(new $t(.285,.285,.24,24,1,!0).rotateZ(Math.PI/2));for(let x=0;x<6;x++){let p=x/6*Math.PI*2,g=new $t(.022,.026,.04,6).rotateZ(Math.PI/2);g.translate(c*.13,Math.cos(p)*.12,Math.sin(p)*.12),h.chrome.push(g)}for(let x=0;x<8;x++){let p=(x+.5)/8*Math.PI*2,g=new $t(.028,.028,.01,10).rotateZ(Math.PI/2);g.translate(c*.118,Math.cos(p)*.21,Math.sin(p)*.21),h.dark.push(g)}h.chrome.push(new ge(.075,14,8,0,Math.PI*2,0,Math.PI/2).rotateZ(-Math.PI/2*c).translate(c*.13,0,0)),h.rim.push(...h.chrome,...h.dark),h.chrome=[],h.dark=[];let m={rubber:i.rubber,rim:i.rim,chrome:i.chrome,dark:i.under};for(let x of Object.keys(h)){if(!h[x].length)continue;let p=h[x].map(v=>{v=v.index?v.toNonIndexed():v;for(let _ of Object.keys(v.attributes))["position","normal","uv"].includes(_)||v.deleteAttribute(_);return v.attributes.uv||v.setAttribute("uv",new ne(new Float32Array(v.attributes.position.count*2),2)),v}),g=new _t(ue(p),m[x]);g.castShadow=!0,g.receiveShadow=!0,t.add(g)}e&&(t.rotation.y=Math.PI/2)}_person(t,e){let n=this.mats,i=new se;i.position.set(t,.4,0),this.body.add(i);let r=(f,d,m,x,p,g=i)=>{let v=new _t(f,d);return v.position.set(m,x,p),v.castShadow=!0,g.add(v),v},a=(f,d=16)=>new un(f.map(([m,x])=>new Z(m,x)),d);r(a([[0,-.05],[.15,-.04],[.17,.08],[.16,.2],[.19,.36],[.17,.46],[.08,.52],[0,.53]],16),e?n.jacket:n.shirt,0,.1,-.06).scale.set(1.12,1,.78),e?(r(new Ue(.1,.03,6,14,Math.PI*1.3).rotateX(Math.PI/2).rotateY(Math.PI*.85),n.jacket,0,.6,-.05),r(new Se(.1,.18),n.shirt,0,.5,.075).rotation.x=-.15,r(new Ct(.04,.5,.03),n.strap,.05,.36,.08).rotation.z=.62,r(hi?new hi(.16,.12,.06,2,.02):new Ct(.16,.12,.06),n.strap,-.15,.14,.08)):(r(new Ue(.17,.02,6,16).rotateX(Math.PI/2),n.strap,0,.18,-.06).scale.set(1.12,.78,1),r(new Ct(.06,.05,.02),n.brass,0,.18,.08),r(new Ct(.03,.42,.02),n.strap,-.08,.38,.08).rotation.z=-.5,r(new $t(.03,.03,.08,8).rotateX(Math.PI/2),n.under,.07,.24,.1),r(new $t(.03,.03,.08,8).rotateX(Math.PI/2),n.under,0,.24,.1));let c=r(new $t(.05,.055,.1,10),n.skin,0,.66,-.03),h=new se;h.position.set(0,.79,-.02),i.add(h);let l=e?n.skin:n.skin2;r(new ge(.115,14,10),l,0,0,0,h).scale.set(.9,1.08,.98),r(new ge(.07,12,8),l,0,-.06,.04,h).scale.set(1.1,.8,1),r(new Ye(.02,.05,6).rotateX(Math.PI/2),l,0,0,.115,h);for(let f of[-.04,.04])r(new ge(.014,8,6),n.eye,f,.025,.1,h);for(let f of[-.105,.105])r(new ge(.025,8,6),l,f,0,0,h).scale.set(.5,1,.8);if(e)r(a([[0,0],[.12,0],[.2,.004],[.245,.02],[.255,.03],[.24,.024],[.19,.012],[.12,.014],[0,.014]],20),n.hat,0,.06,0,h).scale.set(1,1,1.12),r(a([[0,.17],[.07,.165],[.11,.14],[.13,.06],[.135,0]],20),n.hat,0,.065,0,h).scale.set(.95,1,1.08),r(new ge(.05,10,6).scale(1.8,.4,.6),n.hat,0,.235,0,h),r(new $t(.137,.137,.035,20),n.band,0,.085,0,h).scale.set(.95,1,1.08),r(new Ct(.15,.02,.02),d_("#4a3020"),0,-.075,.1,h);else{r(new ge(.128,12,8,0,Math.PI*2,0,Math.PI*.62),n.hair,0,.012,-.012,h).scale.set(1,1.05,1.08);let f=r(new dn(.04,.16,4,8),n.hair,0,-.05,-.15,h);f.rotation.x=.5,this.pony=f,r(new Ue(.12,.012,6,20).rotateX(Math.PI/2),n.strap,0,.07,0,h);for(let m of[-.05,.05])r(new $t(.036,.036,.035,14).rotateX(Math.PI/2-.4),n.brass,m,.1,.095,h),r(new An(.028,12),n.reflector,m,.108,.115,h).rotation.x=-.4;r(new Ue(.07,.03,6,14).rotateX(Math.PI/2),n.scarf,0,-.14,0,h);let d=r(new Se(.1,.5,1,6),n.scarf,.05,-.15,-.12,h);this.scarf=d}let u=[];for(let f of[-1,1]){let d=new se;d.position.set(f*.2,.55,-.02),i.add(d),r(new ge(.065,10,8),e?n.jacket:n.shirt,0,0,0,d),r(new dn(.052,.22,4,8),e?n.jacket:n.shirt,0,-.14,0,d);let m=new se;m.position.set(0,-.28,0),d.add(m),r(new dn(.045,.2,4,8),e?n.jacket:l,0,-.12,0,m),r(new ge(.045,10,8),e?n.strap:l,0,-.26,0,m).scale.set(.9,1.1,.7),d.rotation.x=-.9,m.rotation.x=-.7,u.push({sh:d,el:m})}for(let f of[-.09,.09])r(new dn(.065,.36,4,8),n.khaki,f,.02,.26).rotation.x=1.4,r(new dn(.055,.3,4,8),n.khaki,f,-.2,.46),r(hi?new hi(.1,.08,.2,2,.03):null,n.strap,f,-.38,.5);return{g:i,head:h,arms:u}}setPaint(t){this.mats.paint.map=uu(Ps[t]||Ps.green),this.mats.paint.needsUpdate=!0}sync(t,e,n,i,r,a={}){this.root.position.copy(e),this.root.quaternion.copy(n),this.root.updateMatrixWorld();let o=this._inv||(this._inv=new Kt);o.copy(this.root.matrixWorld).invert();let c=this._wc||(this._wc=[Ve(),Ve(),Ve(),Ve()]);for(let M=0;M<4;M++){let b=t.wheels[M],E=this.wheels[M],L=c[M].copy(b.center).sub(t.pos).add(e).applyMatrix4(o);E.g.position.copy(L),E.g.rotation.set(0,b.front?-t.steer:0,0),E.spin.rotation.x=b.rot}let h=this.SPRING,l=this.sp,u=Math.min(i,1/30);if(u>0){let M=!t.grounded,b=M?0:Math.max(-h.maxRoll,Math.min(h.maxRoll,(t.accLat||0)*h.roll)),E=M?-.015:Math.max(-h.maxPitch,Math.min(h.maxPitch,-(t.accLong||0)*h.pitch)),L=h.w*h.w,U=2*h.z*h.w;if(l.wasAir&&!M){let J=Math.min(14,Math.max(2,t.impactVn||t._lastLandVn||6));l.hv-=J*h.heave*6,l.pv+=.25*J*.04*(Math.random()-.3),l.rv+=(Math.random()-.5)*J*.03}l.wasAir=M;let N=t.lastSurf|0,G=N===2||N===3?1:N===5?1.4:N===1?.5:.25,O=Math.min(1,t.speed/25);l.hv+=(Math.random()-.5)*G*O*.5*u*60*.012,l.rv+=(Math.random()-.5)*G*O*u*60*.004,l.rv+=(L*(b-l.r)-U*l.rv)*u,l.r+=l.rv*u,l.pv+=(L*(E-l.p)-U*l.pv)*u,l.p+=l.pv*u,l.hv+=(L*(0-l.h)-U*1.3*l.hv)*u,l.h+=l.hv*u,l.h=Math.max(-.1,Math.min(.07,l.h)),l.r=Math.max(-.12,Math.min(.12,l.r)),l.p=Math.max(-.1,Math.min(.1,l.p)),this.body.rotation.set(l.p,0,l.r),this.body.position.set(0,l.h,0)}this.body.updateMatrix();let f=this.body.matrix,d=this._susp.m,m=0,x=(M,b,E,L=this.rods)=>{u_(d,M,b,E),L.setMatrixAt(L===this.rods?m++:this._si++,d)};this._si=0;let p=[0,0],g=[Ve(),Ve()];for(let M=0;M<2;M++){let b=c[M*2],E=c[M*2+1];Er.copy(b).setX(b.x-.22),Mu.copy(E).setX(E.x+.22),x(Er,Mu,.055),g[M].copy(b).add(E).multiplyScalar(.5),g[M].x+=.12*(M?1:-1),p[M]=g[M].y,hl.makeRotationFromEuler(new He(0,M?0:Math.PI,Math.atan2(b.y-E.y,b.x-E.x)*(M?-1:1))).setPosition(g[M]),this.diffs.setMatrixAt(M,hl);for(let[L,U]of[[b,1],[E,-1]]){let N=Ve(U*.62,-.02,L.z+(M?-.22:.22)).applyMatrix4(f),G=Ve(L.x-U*.3,L.y+.06,L.z+(M?-.1:.1));Ui.subVectors(N,G);let O=Ui.length();Ui.normalize(),x(G,Er.copy(G).addScaledVector(Ui,O*.55),.045),x(Er.copy(G).addScaledVector(Ui,O*.5),N,.016,this.shafts);let J=Ve(U*.5,(L.y+.06+(-.42+0))*.5+.03,L.z),H=Ve(U*.5,-.42,L.z).applyMatrix4(f).y,lt=Math.max(-.12,Math.min(.12,L.y+.08-H));hl.compose(Ve(U*.5,(L.y+.06+H)*.5,L.z),bu.identity(),wu.set(1,1+lt*3,1)),this.leaves.setMatrixAt(M*2+(U>0?0:1),hl)}}{let M=c[0],b=c[1];x(Er.set(M.x-.25,M.y-.04,M.z-.2),Mu.set(b.x+.25,b.y-.04,b.z-.2),.022);let E=Ve(0,-.32,.25).applyMatrix4(f);x(E,g[0],.04),x(E,g[1],.04),x(Ve(.45,-.2,.9).applyMatrix4(f),Er.set(M.x-.3,M.y+.05,M.z-.15),.02)}this.rods.count=m,this.shafts.count=this._si,this.rods.instanceMatrix.needsUpdate=!0,this.shafts.instanceMatrix.needsUpdate=!0,this.leaves.instanceMatrix.needsUpdate=!0,this.diffs.instanceMatrix.needsUpdate=!0;let v=t.steer;this.wheelSteer.rotation.z=-v*2.2;let _=this.dusty,y=this.penny,R=-l.h*1.4;_.head.rotation.y=-v*.6,_.g.rotation.z=v*.1-l.r*1.6+Math.sin(r*13)*.01*Math.min(t.speed,30)/30,_.g.position.y=.4+R,_.head.rotation.x=l.p*2,_.arms[0].sh.rotation.z=-v*.4,_.arms[1].sh.rotation.z=-v*.4;let w=!t.grounded;if(y.g.rotation.z=v*.14-l.r*2,y.g.position.y=.4+R*1.2,y.head.rotation.y=a.lookBack?2.2:-v*.3,y.head.rotation.x=l.p*2.4,y.arms[0].sh.rotation.x=w?-2.6:-.9,y.arms[1].sh.rotation.x=w?-2.7:-.9,this.scarf&&(this.scarf.rotation.x=-.9-Math.min(t.speed,30)/30*.6+Math.sin(r*17)*.15),this.pony&&(this.pony.rotation.x=.5+Math.min(t.speed,30)/30*.6+Math.sin(r*11)*.08-l.hv*.5),this.flames.visible=t.nitroing,t.nitroing){let M=.8+Math.random()*.5;this.flames.scale.set(M,M,.8+Math.random()*.7),this.flameLight.intensity=6+Math.random()*4}else this.flameLight.intensity=0;this.head.intensity=this.lightsBroken?0:a.headlights?60:0;for(let M of this.lenses)M.material.emissiveIntensity=this.lightsBroken?0:a.headlights?3:.6;this.uni.mud.value+=(t.mud-this.uni.mud.value)*Math.min(1,i*3),this.uni.carY.value=e.y,this.uni.wear.value=t.wear;let C=t.hp/t.maxHp,P=C<.25?3:C<.5?2:C<.75?1:0;for(;this.crateFall.length<P&&this.crates.length>this.crateFall.length;){let M=this.crates[this.crates.length-1-this.crateFall.length],b=new A;M.getWorldPosition(b);let E=new ye;M.getWorldQuaternion(E),M.visible=!1;let L=M.clone();L.visible=!0,L.position.copy(b),L.quaternion.copy(E),this.root.parent.add(L),this.crateFall.push({m:L,v:t.vel.clone().multiplyScalar(.6).add(new A((Math.random()-.5)*4,4,0)),w:new A(Math.random()*6,Math.random()*6,Math.random()*6),t:0,src:M}),this.onCrate&&this.onCrate(b)}for(let M of this.crateFall)M.t<3&&(M.t+=i,M.v.y-=9.8*i,M.m.position.addScaledVector(M.v,i),M.m.rotation.x+=M.w.x*i,M.m.rotation.y+=M.w.y*i,M.t>=3&&(M.m.visible=!1));C<.3&&!this.lightsBroken&&(this.lightsBroken=!0,this.onBreak&&this.onBreak())}repair(){for(let t of this.crateFall)this.root.parent&&this.root.parent.remove(t.m),t.src.visible=!0;this.crateFall=[],this.lightsBroken=!1,this.uni.mud.value=.05}};function d_(s){return new zt({color:s,roughness:.8})}var dl=class{constructor(t,e){this.track=e,this.R=6.2;let n=new bo(this.R,6),i=n.attributes.position,r=new A;for(let h=0;h<i.count;h++){r.fromBufferAttribute(i,h).normalize();let l=Qi(r.x*2.2+3,r.y*2.2+r.z*1.7,4),u=Math.abs(Math.sin(r.x*7+r.z*5))*.15,f=this.R*(.9+l*.22+u*.4);i.setXYZ(h,r.x*f,r.y*f,r.z*f)}n.computeVertexNormals();let a=new Float32Array(i.count*3);for(let h=0;h<i.count;h++){r.fromBufferAttribute(i,h).normalize();let l=Math.abs(r.y)<.12?.62:1,u=.85+Qi(r.x*6,r.z*6+r.y*3,2)*.25;a[h*3]=u*l,a[h*3+1]=u*l*.96,a[h*3+2]=u*l*.88}n.setAttribute("color",new ne(a,3));let o=Le("rock",{strength:7,rough:.9}),c=new zt({map:Kn(),roughness:1,vertexColors:!0,normalMap:o.normalMap,roughnessMap:o.roughnessMap,normalScale:new Z(1.4,1.4)});this.mesh=new _t(n,c),this.mesh.castShadow=!0,this.group=new se,this.group.add(this.mesh),t.add(this.group),this.s=0,this.v=0,this.rot=0,this.active=!1,this.mul=1,this.pos=new A,this.q=new ye,this._a=new A,this.dust=0}start(t,e){this.s=t,this.v=0,this.active=!0,this.mul=e,this.t=0}update(t,e,n,i=1){if(!this.active)return;this.t+=t;let r=e-this.s,a=(17.5+Math.min(e,6e3)/6e3*11)*this.mul*i,o=a;r>95?o=Math.max(a,n+4):r>60?o=Math.max(a,n*.92):r<22&&(o=a*.93);let c=ft(this.t/3.5,0,1);o*=c,this.v=re(this.v,o,1-Math.exp(-1.4*t)),this.s+=this.v*t;let h=this.track,l=Math.max(this.s,h.base+1),u=h.pointAt(l,0,this.pos),f=u.y;this.s<h.base+1;let d=h.sampleAtS(l);(d.gap||d.hole)&&(f=Math.max(d.floorY+this.R,f-6)),this.pos.set(u.x-(this.s<0?d.fx*-this.s:0),f+this.R*.92,u.z-(this.s<0?d.fz*-this.s:0)),this.group.position.lerp(this.pos,this.group.position.lengthSq()===0?1:1-Math.exp(-12*t)),this.rot+=this.v*t/this.R,this._a.set(-d.fz,0,d.fx).negate(),this.q.setFromAxisAngle(this._a.set(d.rx,0,d.rz).multiplyScalar(-1),this.rot),this.mesh.quaternion.copy(this.q),this.gap=r}};var f_=new A,p_=new A,fa=new A,fl=class{constructor(t,e){this.cam=t,this.track=e,this.pos=new A,this.look=new A,this.dir=new A(0,0,1),this.trauma=0,this.fov=62,this.mode="chase",this.cine=0,this.cineSide=1,this.t=0,this.distMul=1,this.comfort=!1,this.inited=!1,this.pull=0,this.dip=0,this.dipV=0,this.tilt=0,this.swing=0}addShake(t){this.comfort&&(t*=.3),this.trauma=Math.min(1.2,this.trauma+t)}snap(){this.inited=!1,this.pull=0,this.dip=0,this.dipV=0,this.tilt=0,this.swing=0}land(t){this.comfort&&(t*=.4),this.dipV-=Math.min(t,16)*.16,this.addShake(Math.min(t/40,.25))}update(t,e,n,i){this.t+=t;let r=this.cam,a=e.speed;fa.copy(e.vel),fa.y=0;let o=f_.set(e.fwd.x,0,e.fwd.z).normalize();fa.lengthSq()>9&&(fa.normalize(),o.lerp(fa,ft(a/25,0,.6)).normalize()),this.inited||this.dir.copy(o),this.dir.lerp(o,1-Math.exp(-(e.grounded?4.5:1.2)*t)).normalize();let c=ft(a/36,0,1.2),h=ft((e.accLong||0)*.075,-.7,.9)+(e.nitroing&&!this.comfort?.9:0);this.pull=Ki(this.pull,e.grounded?h:this.pull*.98,2.6,t),this.swing=Ki(this.swing,ft((e.slipAngle||0)*-2.2,-1.6,1.6),2.2,t),this.tilt=Ki(this.tilt,this.comfort?0:ft((e.accLat||0)*-.0032,-.045,.045),3.5,t),this.dipV+=(-(13.9*13.9)*this.dip-2*.45*13.9*this.dipV)*t,this.dip+=this.dipV*t,this.dip=ft(this.dip,-.9,.5);let l=(re(6.9,5.7,c)+this.pull)*this.distMul,u=re(2.95,2.15,c)*(.9+this.distMul*.1),f=p_.copy(n).addScaledVector(this.dir,-l);f.y+=u+this.dip,f.x+=-this.dir.z*this.swing,f.z+=this.dir.x*this.swing;let d=(this._lk||(this._lk=new A)).copy(n);d.y+=1.15+this.dip*.35,i.ahead&&d.lerp(i.ahead,.28);let m=i.cine&&!this.comfort;if(this.cine=Ki(this.cine,m?1:0,m?5:3,t),this.cine>.01){let w=new A(-this.dir.z,0,this.dir.x).multiplyScalar(this.cineSide),C=new A().copy(n).addScaledVector(w,9.5).addScaledVector(this.dir,3.5);C.y=n.y-.6,f=f.lerp(C,this.cine)}this.mode==="hood"&&(f.copy(n).addScaledVector(e.up,1.55).addScaledVector(e.fwd,.1),d.copy(n).addScaledVector(e.fwd,20).addScaledVector(e.up,1)),this.mode==="fall"&&(f.copy(this.pos),d.copy(n)),i.override&&(f.copy(i.override.pos),d.copy(i.override.look)),this.inited||(this.pos.copy(f),this.look.copy(d),this.inited=!0);let x=this.mode==="hood"?40:i.override?i.override.k||6:e.grounded?9:5;if(this.pos.lerp(f,1-Math.exp(-x*t)),this.look.lerp(d,1-Math.exp(-(this.mode==="hood"?40:14)*t)),this.mode!=="hood"){let w=this.track.query(this.pos.x,this.pos.z,e.hint);!w.isVoid&&this.pos.y<w.h+1.2&&(this.pos.y=w.h+1.2)}let p=60+c*c*12+(e.nitroing&&!this.comfort?10:0)+this.cine*6;this.fov=Ki(this.fov,p,3,t),r.fov=this.fov,r.updateProjectionMatrix(),this.trauma=Math.max(0,this.trauma-t*1.4);let g=i.rumble||0,v=Math.pow(Math.min(this.trauma,1),2)*.9+g*(this.comfort?.03:.12),_=e.lastSurf|0,y=!e.grounded||this.mode==="hood"?0:([.3,.15,.85,1,.25,1.1,0][_]||0)*ft(a/28,0,1)*(this.comfort?.2:1)*.022;r.position.copy(this.pos),r.position.x+=(Pi(this.t*22,1)-.5)*v,r.position.y+=(Pi(this.t*22,7)-.5)*v+(Pi(this.t*61,21)-.5)*y,r.position.z+=(Pi(this.t*22,13)-.5)*v*.5,r.lookAt(this.look);let R=(v>0?(Pi(this.t*15,3)-.5)*v*.08:0)+(this.mode==="chase"&&!i.override?this.tilt:0);R&&r.rotateZ(R)}};var pl={dust:{col:[.62,.52,.38],size:[1.3,3],life:[1.2,2.4],g:-.6,drag:1.6,alpha:.22,grow:1.6,add:!1},mud:{col:[.28,.2,.12],size:[.25,.5],life:[.6,1.1],g:14,drag:.4,alpha:.95,grow:.2,add:!1},water:{col:[.86,.93,.95],size:[.5,1.4],life:[.5,1.1],g:11,drag:.6,alpha:.7,grow:1.2,add:!1},smoke:{col:[.42,.4,.38],size:[1,2.2],life:[.8,1.6],g:-1.2,drag:1.2,alpha:.32,grow:2.2,add:!1},splinter:{col:[.45,.3,.16],size:[.18,.35],life:[1,1.8],g:14,drag:.2,alpha:1,grow:0,add:!1},sparks:{col:[1,.7,.3],size:[.12,.3],life:[.25,.6],g:12,drag:.3,alpha:1,grow:-.5,add:!0},coin:{col:[1,.85,.35],size:[.2,.45],life:[.35,.7],g:4,drag:1,alpha:1,grow:-.6,add:!0},relic:{col:[.6,1,.85],size:[.3,.8],life:[.8,1.5],g:-2,drag:1,alpha:1,grow:.5,add:!0},gravel:{col:[.36,.3,.24],size:[.08,.16],life:[.5,.9],g:18,drag:.25,alpha:1,grow:0,add:!1},clod:{col:[.22,.15,.09],size:[.16,.32],life:[.6,1],g:17,drag:.2,alpha:1,grow:0,add:!1},spray:{col:[.9,.95,.96],size:[.35,.9],life:[.4,.8],g:10,drag:1.1,alpha:.5,grow:1.1,add:!1},ring:{col:[.66,.55,.41],size:[1.6,3.2],life:[1,1.8],g:-.3,drag:2.4,alpha:.3,grow:2.6,add:!1},flame:{col:[1,.55,.2],size:[.4,.9],life:[.15,.3],g:-3,drag:2,alpha:.9,grow:1.5,add:!0}},ml=class{constructor(t,e,n){this.cap=e,this.n=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.c=new Float32Array(e*4),this.s=new Float32Array(e),this.life=new Float32Array(e),this.max=new Float32Array(e),this.k=new Array(e);let i=this.geo=new de;i.setAttribute("position",new ne(this.p,3).setUsage(Rn)),i.setAttribute("color",new ne(this.c,4).setUsage(Rn)),i.setAttribute("size",new ne(this.s,1).setUsage(Rn)),this.mat=new Ce({uniforms:{map:{value:Li()},scale:{value:600},fogColor:{value:new yt},fogDensity:{value:0}},vertexShader:`attribute float size; attribute vec4 color; varying vec4 vC; varying float vFog; uniform float scale, fogDensity;
        void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * scale / max(-mv.z, 0.1); gl_Position = projectionMatrix * mv; float d = -mv.z; vFog = 1.0 - exp(-fogDensity*fogDensity*d*d); }`,fragmentShader:`uniform sampler2D map; uniform vec3 fogColor; varying vec4 vC; varying float vFog; void main(){ vec4 t = texture2D(map, gl_PointCoord); vec4 c = vec4(vC.rgb, vC.a * t.a); ${n?"c.rgb *= c.a * (1.0 - vFog);":"c.rgb = mix(c.rgb, fogColor, vFog);"} if (c.a < 0.01) discard; gl_FragColor = c; }`,transparent:!0,depthWrite:!1,blending:n?on:ai}),this.pts=new mo(i,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=5,t.add(this.pts)}spawn(t,e,n,i,r,a,o,c=1){if(this.n>=this.cap)return;let h=this.n++,l=pl[t];this.p[h*3]=e,this.p[h*3+1]=n,this.p[h*3+2]=i,this.v[h*3]=r,this.v[h*3+1]=a,this.v[h*3+2]=o,this.max[h]=this.life[h]=l.life[0]+Math.random()*(l.life[1]-l.life[0]),this.s[h]=(l.size[0]+Math.random()*(l.size[1]-l.size[0]))*c,this.k[h]=l;let u=.9+Math.random()*.2;this.c[h*4]=l.col[0]*u,this.c[h*4+1]=l.col[1]*u,this.c[h*4+2]=l.col[2]*u,this.c[h*4+3]=l.alpha}update(t){let e=0;for(;e<this.n;){if(this.life[e]-=t,this.life[e]<=0){let a=--this.n;if(e!==a){for(let o=0;o<3;o++)this.p[e*3+o]=this.p[a*3+o],this.v[e*3+o]=this.v[a*3+o];for(let o=0;o<4;o++)this.c[e*4+o]=this.c[a*4+o];this.s[e]=this.s[a],this.life[e]=this.life[a],this.max[e]=this.max[a],this.k[e]=this.k[a]}continue}let n=this.k[e],i=Math.exp(-n.drag*t);this.v[e*3]*=i,this.v[e*3+1]=this.v[e*3+1]*i-n.g*t,this.v[e*3+2]*=i,this.p[e*3]+=this.v[e*3]*t,this.p[e*3+1]+=this.v[e*3+1]*t,this.p[e*3+2]+=this.v[e*3+2]*t,this.s[e]=Math.max(.02,this.s[e]+n.grow*t);let r=this.life[e]/this.max[e];this.c[e*4+3]=n.alpha*Math.min(1,r*2.2)*Math.min(1,(1-r)*8+.2),e++}this.geo.setDrawRange(0,this.n),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0}},gl=class{constructor(t,e){this.q=e.particles,this.norm=new ml(t,Math.round(1800*this.q)+200,!1),this.add=new ml(t,Math.round(600*this.q)+100,!0)}setFog(t,e,n){for(let i of[this.norm,this.add])i.mat.uniforms.fogColor.value.copy(t.color),i.mat.uniforms.fogDensity.value=t.density,i.mat.uniforms.scale.value=e*n*.5}burst(t,e,n,i,r=10,a=4,o=.5,c=.5,h=1){r=Math.max(1,Math.round(r*this.q));let l=pl[t].add?this.add:this.norm;for(let u=0;u<r;u++){let f=Math.random()*6.283,d=Math.random();l.spawn(t,e+(Math.random()-.5)*o*2,n+Math.random()*o*.5,i+(Math.random()-.5)*o*2,Math.cos(f)*a*d,(c+Math.random())*a*.6,Math.sin(f)*a*d,h)}}ringBurst(t,e,n,i,r,a,o=1){r=Math.max(4,Math.round(r*this.q));let c=pl[t].add?this.add:this.norm;for(let h=0;h<r;h++){let l=h/r*6.283+Math.random()*.3,u=a*(.7+Math.random()*.5);c.spawn(t,e+Math.cos(l)*.9,n,i+Math.sin(l)*.9,Math.cos(l)*u,.4+Math.random()*.8,Math.sin(l)*u,o)}}emit(t,e,n,i,r,a,o,c){(pl[t].add?this.add:this.norm).spawn(t,e,n,i,r,a,o,c)}update(t){this.norm.update(t),this.add.update(t)}get count(){return this.norm.n+this.add.n}};var ap=(s,t)=>{let e=Math.max(0,(Math.abs(s)-t)/(1-t));return Math.sign(s)*Math.min(1,.45*e+.55*e*e*e)},xl=class{constructor(t){this.settings=t,this.keys=new Set,this.pressed=new Set,this.out={steer:0,throttle:0,brake:0,handbrake:!1,pitch:0,nitroPressed:!1},this.touch={steer:0,pitch:0,nitro:!1,hb:!1,brake:!1,active:!1},this.tilt={gamma:0,zero:0,ok:!1},this.lastDevice="keyboard",addEventListener("keydown",e=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),this.keys.has(e.code)||this.pressed.add(e.code),this.keys.add(e.code),this.lastDevice="keyboard"}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("blur",()=>this.keys.clear()),this.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0}bindTouch(t){let e=t.querySelector("#tStick"),n=t.querySelector("#tKnob"),i=t.querySelector("#tBase"),r=null,a=0,o=0,c=this.touch;e.addEventListener("touchstart",f=>{f.preventDefault();let d=f.changedTouches[0];r=d.identifier,a=d.clientX,o=d.clientY,i.style.left=a+"px",i.style.top=o+"px",i.classList.add("on"),c.active=!0,this.lastDevice="touch"},{passive:!1});let h=f=>{for(let d of f.changedTouches)if(d.identifier===r){let m=d.clientX-a,x=d.clientY-o;c.steer=ft(m/55,-1,1),c.pitch=ft(-x/55,-1,1),n.style.transform=`translate(${ft(m,-55,55)}px, ${ft(x,-55,55)}px)`}},l=f=>{for(let d of f.changedTouches)d.identifier===r&&(r=null,c.steer=0,c.pitch=0,n.style.transform="",i.classList.remove("on"))};e.addEventListener("touchmove",h,{passive:!0}),e.addEventListener("touchend",l),e.addEventListener("touchcancel",l);let u=(f,d)=>{let m=t.querySelector(f),x=g=>{g.preventDefault(),c[d]=!0,m.classList.add("down"),d==="nitro"&&this.pressed.add("TouchNitro")},p=()=>{c[d]=!1,m.classList.remove("down")};m.addEventListener("touchstart",x,{passive:!1}),m.addEventListener("touchend",p),m.addEventListener("touchcancel",p),m.addEventListener("mousedown",x),m.addEventListener("mouseup",p)};u("#tNitro","nitro"),u("#tHB","hb"),u("#tBrake","brake")}async enableGyro(){try{return typeof DeviceOrientationEvent<"u"&&DeviceOrientationEvent.requestPermission&&await DeviceOrientationEvent.requestPermission()!=="granted"?!1:(addEventListener("deviceorientation",t=>{let e=Math.abs(window.orientation||0)===90||innerWidth>innerHeight;this.tilt.gamma=e?(t.beta||0)*(window.orientation===-90?-1:1):t.gamma||0,this.tilt.ok=!0}),!0)}catch{return!1}}calibrate(){this.tilt.zero=this.tilt.gamma}wasPressed(t){return this.pressed.has(t)}anyPressed(){return this.pressed.size>0}update(t){let e=this.keys,n=this.out,i=this.settings,r=0,a=0,o=0,c=!1,h=0,l=!1,u=performance.now(),f=Math.min(.05,Math.max(.001,(u-(this._lt||u))/1e3));this._lt=u;let d=0;(e.has("KeyA")||e.has("ArrowLeft"))&&(d-=1),(e.has("KeyD")||e.has("ArrowRight"))&&(d+=1);{let p=this._ks||0,g=d!==0&&Math.sign(d)!==Math.sign(p)&&p!==0,v=d===0?9:g?12:5.2+Math.abs(p)*2.5;this._ks=p+ft(d-p,-v*f,v*f),Math.abs(this._ks)<.01&&!d&&(this._ks=0)}r=this._ks,(e.has("KeyW")||e.has("ArrowUp"))&&(a=1),(e.has("KeyS")||e.has("ArrowDown"))&&(o=1),e.has("Space")&&(c=!0),(this.pressed.has("ShiftLeft")||this.pressed.has("ShiftRight"))&&(l=!0);let m=navigator.getGamepads?navigator.getGamepads():[];for(let p of m){if(!p)continue;let g=p.axes[0]||0,v=p.axes[1]||0;Math.abs(g)>.1&&(r=ap(g,.1),this.lastDevice="pad");let _=p.buttons[7]?p.buttons[7].value:0,y=p.buttons[6]?p.buttons[6].value:0;_>.05&&(a=Math.max(a,_),this.lastDevice="pad"),y>.05&&(o=Math.max(o,y)),p.buttons[0]&&p.buttons[0].pressed&&(c=!0);let R=p.buttons[1]&&p.buttons[1].pressed;R&&!this._padB&&(l=!0),this._padB=R,t&&Math.abs(v)>.15&&(h=v);let w=p.buttons[9]&&p.buttons[9].pressed;w&&!this._padStart&&this.pressed.add("Escape"),this._padStart=w;let C=p.buttons[3]&&p.buttons[3].pressed;C&&!this._padY&&this.pressed.add("KeyC"),this._padY=C;let P=p.buttons[0]&&p.buttons[0].pressed;P&&!this._padA&&this.pressed.add("PadA"),this._padA=P,t&&Math.abs(v)>.15&&(h=-v)}let x=this.touch;if(i.touchMode==="tilt"&&this.tilt.ok){let p=this.tilt.gamma-this.tilt.zero;Math.abs(p)>1.5&&(r=ft(p/22,-1,1))}else x.active&&Math.abs(x.steer)>.06&&(r=ap(x.steer,.06)*1.04);return x.active&&Math.abs(x.pitch)>.1&&t&&(h=x.pitch),x.hb&&(c=!0),x.brake&&(o=1),this.pressed.has("TouchNitro")&&(l=!0),i.autoAccel&&!o&&(a=Math.max(a,1)),t&&!h&&(h=(e.has("KeyW")||e.has("ArrowUp")?1:0)-(e.has("KeyS")||e.has("ArrowDown")?1:0)),n.steer=r,n.throttle=a,n.brake=o,n.handbrake=c,n.pitch=h,n.nitroPressed=l,n}endFrame(){this.pressed.clear()}};var ui=s=>440*Math.pow(2,(s-69)/12),m_=[{r:50,ch:[62,65,69]},{r:46,ch:[58,62,65]},{r:48,ch:[60,64,67]},{r:45,ch:[61,64,69]}],g_=[0,7,3,7,0,7,5,7,0,7,3,7,10,7,5,7],x_=[[0,62,1],[1,69,1],[2,74,3],[5,72,1],[6,69,2],[8,70,1.5],[9.5,69,.5],[10,67,2],[12,69,4]],vl=class{constructor(t){this.settings=t,this.ctx=null,this.started=!1,this.intensity=0,this.musicMode="title"}start(){if(this.started){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.started=!0,this.master=e.createGain(),this.master.gain.value=.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,this.master.connect(n),n.connect(e.destination),this.sfxBus=e.createGain(),this.sfxBus.connect(this.master),this.musBus=e.createGain(),this.musBus.connect(this.master),this.verb=e.createConvolver();let i=e.sampleRate*2.2,r=e.createBuffer(2,i,e.sampleRate);for(let c=0;c<2;c++){let h=r.getChannelData(c);for(let l=0;l<i;l++)h[l]=(Math.random()*2-1)*Math.pow(1-l/i,3)}this.verb.buffer=r;let a=e.createGain();a.gain.value=.22,this.verb.connect(a),a.connect(this.master),this.noiseBuf=e.createBuffer(1,e.sampleRate*2,e.sampleRate);let o=this.noiseBuf.getChannelData(0);for(let c=0;c<o.length;c++)o[c]=Math.random()*2-1;this._engine(),this._loops(),this.applyVolumes(),this.nextNote=e.currentTime+.1,this.step=0,this.timer=setInterval(()=>this._schedule(),60)}applyVolumes(){this.ctx&&(this.sfxBus.gain.value=this.settings.sfx,this.musBus.gain.value=this.settings.music*.55)}noise(t=!0){let e=this.ctx.createBufferSource();return e.buffer=this.noiseBuf,e.loop=t,e}_engine(){let t=this.ctx;this.eg=t.createGain(),this.eg.gain.value=0,this.eg.connect(this.sfxBus),this.elp=t.createBiquadFilter(),this.elp.type="lowpass",this.elp.frequency.value=600,this.elp.Q.value=2.5,this.elp.connect(this.eg);let e=t.createWaveShaper(),n=new Float32Array(256);for(let c=0;c<256;c++){let h=c/128-1;n[c]=Math.tanh(h*2.6)}e.curve=n,e.connect(this.elp),this.o1=t.createOscillator(),this.o1.type="sawtooth",this.o2=t.createOscillator(),this.o2.type="square",this.o3=t.createOscillator(),this.o3.type="sawtooth";let i=t.createGain(),r=t.createGain(),a=t.createGain();i.gain.value=.5,r.gain.value=.35,a.gain.value=.25,this.o1.connect(i),this.o2.connect(r),this.o3.connect(a),i.connect(e),r.connect(e),a.connect(e),this.lfo=t.createOscillator(),this.lfo.type="square";let o=t.createGain();o.gain.value=.18,this.lfo.connect(o),o.connect(i.gain),[this.o1,this.o2,this.o3,this.lfo].forEach(c=>c.start())}_loopNoise(t,e,n){let i=this.ctx,r=this.noise(),a=i.createBiquadFilter();a.type=t,a.frequency.value=e,a.Q.value=n;let o=i.createGain();return o.gain.value=0,r.connect(a),a.connect(o),o.connect(this.sfxBus),r.start(i.currentTime,Math.random()),{g:o,fl:a}}_loops(){this.skid=this._loopNoise("bandpass",1100,3),this.gravel=this._loopNoise("highpass",2400,.7),this.wind=this._loopNoise("lowpass",700,.5),this.water=this._loopNoise("bandpass",600,.6),this.rumble=this._loopNoise("lowpass",140,1.2);let t=this.ctx;this.rumbleOsc=t.createOscillator(),this.rumbleOsc.frequency.value=34;let e=t.createGain();e.gain.value=0,this.rumbleOsc.connect(e),e.connect(this.sfxBus),this.rumbleOsc.start(),this.rumbleG=e}update(t,e){if(!this.ctx)return;let n=this.ctx.currentTime,i=(c,h,l=.06)=>c.setTargetAtTime(h,n,l),r=e.rpm||900,a=r/60*1.5;i(this.o1.frequency,a),i(this.o2.frequency,a*.5),i(this.o3.frequency,a*1.01*2),i(this.lfo.frequency,a*.25),i(this.elp.frequency,280+r*.32*(.5+e.throttle*.7)+(e.nitro?900:0)),i(this.eg.gain,e.running?.16+e.throttle*.12:0,.1),i(this.skid.g.gain,e.running?ft(e.slip,0,1)*.22:0),i(this.gravel.g.gain,e.running&&e.grounded?ft(e.speed/30,0,1)*(e.surf===3?.05:.09):0),this.gravel.fl.frequency.value=e.surf===3?900:2400,i(this.wind.g.gain,e.running?ft(e.speed/40,0,1)**2*.22+(e.grounded?0:.05):0),i(this.water.g.gain,e.running&&e.inWater?.3:0);let o=ft(e.boulder||0,0,1);i(this.rumble.g.gain,o*.85),i(this.rumbleG.gain,o*.25),this.intensity=ft(e.intensity||0,0,1)}setMusic(t){this.musicMode=t}_schedule(){let t=this.ctx;if(!t)return;let e=this.musicMode==="run"?142:this.musicMode==="title"?92:100,n=60/e/4;for(;this.nextNote<t.currentTime+.25;)this._play(this.step,this.nextNote,n),this.nextNote+=n,this.step++}_tone(t,e,n,i,r,a,o={}){let c=this.ctx,h=c.createOscillator(),l=c.createGain();h.type=t,h.frequency.setValueAtTime(e,n),o.slide&&h.frequency.exponentialRampToValueAtTime(o.slide,n+i),o.detune&&(h.detune.value=o.detune);let u=o.a||.005;l.gain.setValueAtTime(0,n),l.gain.linearRampToValueAtTime(r,n+u),l.gain.exponentialRampToValueAtTime(8e-4,n+i);let f=h;if(o.lp){let d=c.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(o.lp,n),o.lpEnd&&d.frequency.exponentialRampToValueAtTime(o.lpEnd,n+i),h.connect(d),f=d}f.connect(l),l.connect(a||this.musBus),o.verb&&l.connect(this.verb),h.start(n),h.stop(n+i+.05)}_hit(t,e,n,i,r,a=0,o=3e3){if(this._tone("sine",e,t,i,r,this.musBus,{slide:n}),a){let c=this.ctx,h=this.noise(!1),l=c.createBiquadFilter(),u=c.createGain();l.type="bandpass",l.frequency.value=o,l.Q.value=.8,u.gain.setValueAtTime(a,t),u.gain.exponentialRampToValueAtTime(.001,t+i*.5),h.connect(l),l.connect(u),u.connect(this.musBus),h.start(t,Math.random()),h.stop(t+i)}}_play(t,e,n){let i=this.musicMode;if(i==="off")return;let r=Math.floor(t/16)%4,a=t%16,o=m_[r],c=i==="run"?this.intensity:i==="title"?.35:.15;if(a%4===0&&this._tone("sawtooth",ui(o.r-12),e,n*3.6,.13,this.musBus,{lp:420,lpEnd:160}),i==="run"||a%2===0){let h=o.r+12+g_[a];this._tone("sawtooth",ui(h),e,n*1.6,.035+c*.02,this.musBus,{lp:1800,detune:6}),this._tone("sawtooth",ui(h),e,n*1.6,.025,this.musBus,{lp:1600,detune:-8})}if(a===0)for(let h of o.ch)this._tone("triangle",ui(h),e,n*15,.03,this.musBus,{a:.3,verb:!0});if(i==="run"?((a===0||a===10)&&this._hit(e,82,46,.5,.42,.05,800),c>.25&&(a===4||a===12)&&this._hit(e,180,120,.18,.12,.22,2400),c>.45&&a%2===0&&this._hit(e,110,70,.14,.12,.03,600),c>.75&&a%2===1&&this._hit(e,120,80,.1,.07,0,600)):a===0&&this._hit(e,70,45,.9,.25,.02,600),i==="run"&&c>.55||i==="title"&&Math.floor(t/64)%2===1){let h=t%64/4;for(let[l,u,f]of x_)if(Math.abs(h-l)<.01){let d=f*n*4,m=i==="run"?.06+c*.04:.045;this._tone("sawtooth",ui(u),e,d,m,this.musBus,{a:.04,lp:2600,lpEnd:900,verb:!0}),this._tone("sawtooth",ui(u-12),e,d,m*.6,this.musBus,{a:.05,lp:1400,lpEnd:500})}}}sfx(t,e=1){let n=this.ctx;if(!n)return;let i=n.currentTime,r=this.sfxBus,a=(o,c,h,l,u,f)=>{let d=this.noise(!1),m=n.createBiquadFilter(),x=n.createGain();m.type=c,m.frequency.setValueAtTime(h,i),f&&m.frequency.exponentialRampToValueAtTime(f,i+o),m.Q.value=l,x.gain.setValueAtTime(u,i),x.gain.exponentialRampToValueAtTime(.001,i+o),d.connect(m),m.connect(x),x.connect(r),d.start(i,Math.random()),d.stop(i+o+.05)};switch(t){case"coin":this._tone("sine",1568,i,.12,.08*e,r),this._tone("sine",2093,i+.05,.18,.07*e,r);break;case"relic":[0,4,7,12,16].forEach((o,c)=>this._tone("triangle",ui(74+o),i+c*.07,.9,.06,r,{verb:!0}));break;case"nitro":a(.9,"bandpass",300,.7,.4,2400),this._tone("sawtooth",60,i,.6,.15,r,{slide:30,lp:300});break;case"land":a(.25,"lowpass",300,1,.5*e),this._tone("sine",70,i,.25,.4*e,r,{slide:40});break;case"impact":a(.3,"lowpass",900,1,.5*e),this._tone("square",140,i,.12,.08*e,r,{slide:60});break;case"clang":[523,1187,1730,2410].forEach((o,c)=>this._tone("sine",o,i,.6-c*.1,.07,r,{verb:!0})),a(.1,"highpass",3e3,1,.3);break;case"crack":a(.35,"highpass",1800,1,.5);for(let o=0;o<5;o++)this._tone("square",300+Math.random()*500,i+o*.04,.03,.08,r);break;case"slam":a(1.4,"lowpass",400,1,.9,80),this._tone("sine",55,i,1,.6,r,{slide:28});break;case"smash":a(.3,"bandpass",1100,1.2,.6*e);for(let o=0;o<6;o++)this._tone("square",180+Math.random()*380,i+o*.025,.04,.06*e,r);a(.5,"lowpass",500,1,.35*e);break;case"shatter":a(.25,"highpass",2600,1,.5*e);for(let o=0;o<7;o++)this._tone("triangle",900+Math.random()*1800,i+o*.02,.06,.04*e,r);break;case"scrape":a(.16,"bandpass",2200+Math.random()*800,4,.35*e);break;case"snap":a(.08,"bandpass",1500,2,.6),this._tone("square",220,i,.05,.1,r);break;case"swoosh":a(.35,"bandpass",600,3,.35,2400);break;case"splash":a(.9,"bandpass",900,.6,.55,300);break;case"rumble":a(2.2,"lowpass",160,1,.8,60);break;case"shift":this._tone("square",90,i,.05,.05,r);break;case"ui":this._tone("triangle",880,i,.08,.06,r),this._tone("triangle",1320,i+.04,.1,.05,r);break;case"mission":[62,66,69,74].forEach((o,c)=>this._tone("sawtooth",ui(o),i+c*.11,.5,.05,r,{lp:2400,verb:!0}));break;case"perfect":[69,74,78].forEach((o,c)=>this._tone("triangle",ui(o+12),i+c*.06,.4,.06,r,{verb:!0}));break;case"crash":a(.8,"lowpass",1200,1,.8,200),this._tone("sawtooth",90,i,.4,.12,r,{slide:40,lp:500});break;case"gameover":[62,61,60,55].forEach((o,c)=>this._tone("sawtooth",ui(o-12),i+c*.35,.6,.08,r,{lp:900,verb:!0}));break}}voice(t,e){let n=this.ctx;if(!n)return;let i=n.currentTime,r=t==="penny"?330:t==="prof"?160:200,a=Math.min(14,Math.ceil(e.length/5));for(let o=0;o<a;o++)this._tone("square",r*(.85+Math.random()*.4),i+o*.075,.06,.025,this.sfxBus,{lp:1400})}};var Su={};function yl(s,t=128){if(Su[s])return Su[s];let e=document.createElement("canvas");e.width=e.height=t;let n=e.getContext("2d");n.scale(t/128,t/128);let i=n.createRadialGradient(64,50,10,64,64,80);i.addColorStop(0,s==="penny"?"#6a8a8a":s==="prof"?"#7a6a4a":"#8a6a3a"),i.addColorStop(1,"#2a1a0e"),n.fillStyle=i,n.fillRect(0,0,128,128);let r=s==="prof"?"#e0b898":"#d09468";if(n.fillStyle=s==="dusty"?"#6a3f22":s==="penny"?"#b9a57a":"#3a3a44",n.beginPath(),n.ellipse(64,132,52,34,0,0,6.3),n.fill(),s==="penny"&&(n.fillStyle="#b8302a",n.beginPath(),n.moveTo(40,104),n.quadraticCurveTo(64,120,88,104),n.lineTo(84,116),n.quadraticCurveTo(64,128,44,116),n.fill()),n.fillStyle=r,n.fillRect(54,84,20,18),s==="penny"&&(n.fillStyle="#8a3e1e",n.beginPath(),n.ellipse(64,58,34,38,0,0,6.3),n.fill()),n.fillStyle=r,n.beginPath(),n.ellipse(64,62,24,29,0,0,6.3),n.fill(),n.fillStyle="#1a120c",n.beginPath(),n.ellipse(55,60,3,3.6,0,0,6.3),n.ellipse(73,60,3,3.6,0,0,6.3),n.fill(),n.strokeStyle=s==="prof"?"#e8e8e0":"#3a2010",n.lineWidth=3,n.beginPath(),n.moveTo(48,52),n.lineTo(60,51),n.moveTo(68,51),n.lineTo(80,52),n.stroke(),n.strokeStyle="#6a2a1a",n.lineWidth=2.5,n.beginPath(),s==="dusty"?(n.moveTo(54,78),n.quadraticCurveTo(66,84,76,75)):n.arc(64,74,7,.3,2.8),n.stroke(),n.fillStyle="rgba(120,60,30,.35)",n.beginPath(),n.ellipse(64,68,4,6,0,0,6.3),n.fill(),s==="dusty")n.fillStyle="rgba(60,40,24,.35)",n.beginPath(),n.ellipse(64,80,20,10,0,0,Math.PI),n.fill(),n.fillStyle="#7a5c3c",n.beginPath(),n.ellipse(64,40,48,11,-.05,0,6.3),n.fill(),n.fillStyle="#6a4c30",n.beginPath(),n.moveTo(40,40),n.quadraticCurveTo(42,14,64,14),n.quadraticCurveTo(86,14,88,40),n.fill(),n.fillStyle="#3a2a1c",n.fillRect(41,33,46,6);else if(s==="penny"){n.fillStyle="#8a3e1e",n.beginPath(),n.ellipse(64,38,28,12,0,Math.PI,0),n.fill(),n.fillStyle="#b48a3c",n.strokeStyle="#5a4018",n.lineWidth=2;for(let a of[52,76])n.beginPath(),n.arc(a,38,9,0,6.3),n.fill(),n.stroke(),n.fillStyle="#9ad0d8",n.beginPath(),n.arc(a,38,5.5,0,6.3),n.fill(),n.fillStyle="#b48a3c"}else n.fillStyle="#ecece4",n.beginPath(),n.ellipse(40,50,8,14,0,0,6.3),n.ellipse(88,50,8,14,0,0,6.3),n.fill(),n.beginPath(),n.moveTo(50,72),n.quadraticCurveTo(64,64,78,72),n.quadraticCurveTo(64,78,50,72),n.fill(),n.strokeStyle="#8a6a32",n.lineWidth=2,n.beginPath(),n.arc(55,60,8,0,6.3),n.moveTo(81,60),n.arc(73,60,8,0,6.3),n.moveTo(63,60),n.lineTo(65,60),n.stroke();return Su[s]=e,e}var op={dusty:"DUSTY",penny:"PENNY",prof:"PROF. ABERNATHY"};var gn=(s,t=document)=>t.querySelector(s),_l=class{constructor(t){t.innerHTML=`
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
      <div class="hint hidden" id="hHint">BRAKE</div>`,this.root=t,this.el={dist:gn("#hDist",t),coins:gn("#hCoins",t),relics:gn("#hRelics",t),score:gn("#hScore",t),mult:gn("#hMult",t),missions:gn("#hMissions",t),danger:gn("#hDanger",t),dfill:gn("#hDFill",t),dlbl:gn("#hDLbl",t),bark:gn("#hBark",t),pops:gn("#hPops",t),banner:gn("#hBanner",t),hint:gn("#hHint",t)},this.mini=gn("#mini",t).getContext("2d"),this.speedo=gn("#speedo",t).getContext("2d"),this.barkQ=[],this.barkT=0,this.last={},this.mt=0}set(t,e){this.last[t]!==e&&(this.last[t]=e,this.el[t].textContent=e)}bark(t,e,n){this.barkQ.length>2&&this.barkQ.shift(),this.barkQ.push({who:t,text:e}),this.barkT<=0&&this._nextBark(n),this.audio=n}_nextBark(t){let e=this.barkQ.shift();if(!e){this.el.bark.classList.add("off");return}let i=this.el.bark.querySelector("canvas").getContext("2d");i.clearRect(0,0,128,128),i.drawImage(yl(e.who),0,0,128,128),this.el.bark.querySelector(".who").textContent=op[e.who],this.el.bark.querySelector(".txt").textContent=e.text,this.el.bark.classList.remove("off"),this.barkT=2.6+e.text.length*.03,t&&t.voice(e.who,e.text)}popup(t,e,n={}){let i=document.createElement("div");for(i.className="pop"+(n.big?" big":"")+(n.bad?" bad":""),i.innerHTML=t+(e?`<small>+${e.toLocaleString()}</small>`:""),this.el.pops.appendChild(i),setTimeout(()=>i.remove(),1400);this.el.pops.children.length>3;)this.el.pops.firstChild.remove();this.el.mult.classList.add("pop"),setTimeout(()=>this.el.mult.classList.remove("pop"),120)}banner(t,e){let n=document.createElement("div");n.className="banner",n.innerHTML=`${t}${e?`<small>${e}</small>`:""}`,this.el.banner.innerHTML="",this.el.banner.appendChild(n)}missions(t){let e=t.map(n=>n.id+":"+Math.floor(n.p)+(n.done?"d":"")).join("|");e!==this.mkey&&(this.mkey=e,this.el.missions.innerHTML='<div class="mtitle">FIELD JOURNAL</div>'+t.map(n=>`<div class="mcard ${n.p>=n.goal?"done":""}">${n.text}<div class="bar"><b style="width:${ft(n.p/n.goal,0,1)*100}%"></b></div></div>`).join(""))}update(t,e){this.set("dist",Math.floor(e.dist).toLocaleString()+" m"),this.set("coins",String(e.coins)),this.set("relics",String(e.relics)),this.set("score",e.score.toLocaleString()),this.set("mult","\xD7"+e.mult.toFixed(1));let n=ft(e.gap,0,120),i=ft(1-(n-8)/80,0,1);this.el.dfill.style.height=(i*100).toFixed(1)+"%",this.set("dlbl",Math.max(0,Math.round(n))+" m"),this.el.danger.classList.toggle("hot",i>.72),this.el.hint.classList.toggle("hidden",!e.brakeHint),this.el.hint.classList.toggle("cb",!!e.colorblind),this.barkT>0&&(this.barkT-=t,this.barkT<=0&&this._nextBark(this.audio)),this.mt-=t,this.mt<=0&&(this.mt=1/20,this._mini(e),this._speedo(e))}_mini(t){let e=this.mini,n=340,i=160;e.clearRect(0,0,n,n),e.save(),e.translate(n/2,n/2);let r=e.createRadialGradient(0,0,10,0,0,i);r.addColorStop(0,"#efdcb0"),r.addColorStop(.85,"#c8a870"),r.addColorStop(1,"#8a6a3a"),e.fillStyle=r,e.beginPath(),e.arc(0,0,i,0,6.3),e.fill(),e.lineWidth=12,e.strokeStyle="#a07a30",e.stroke(),e.lineWidth=3,e.strokeStyle="#f0d080",e.beginPath(),e.arc(0,0,i-7,0,6.3),e.stroke(),e.beginPath(),e.arc(0,0,i-12,0,6.3),e.clip();let a=t.trackPts,o=1.15,c=t.heading,h=Math.cos(c),l=Math.sin(c),u=(d,m)=>{let x=d-t.cx,p=m-t.cz,g=-(x*h-p*l),v=-(x*l+p*h);return[g*o,v*o]};if(a&&a.length){e.lineCap="round",e.lineJoin="round";for(let[m,x]of[[26,"rgba(90,60,30,.35)"],[12,"#7a5228"]]){e.lineWidth=m,e.strokeStyle=x,e.beginPath();let p=!0;for(let g of a){if(g.mark)continue;let[v,_]=u(g.x,g.z);p?(e.moveTo(v,_),p=!1):e.lineTo(v,_)}e.stroke()}e.setLineDash([6,8]),e.lineWidth=2,e.strokeStyle="#3a2410",e.beginPath();let d=!0;for(let m of a){if(m.mark)continue;let[x,p]=u(m.x,m.z);d?(e.moveTo(x,p),d=!1):e.lineTo(x,p)}e.stroke(),e.setLineDash([]);for(let m of a)if(m.mark){let[x,p]=u(m.x,m.z);e.fillStyle=m.mark==="set"?"#c83a1a":m.mark==="fork"?"#2a6a9a":"#e0a020",e.beginPath(),e.arc(x,p,7,0,6.3),e.fill()}}if(t.bx!==void 0){let[d,m]=u(t.bx,t.bz);e.fillStyle="#5a4a3a",e.strokeStyle="#d8402a",e.lineWidth=4,e.beginPath(),e.arc(d,m,13,0,6.3),e.fill(),e.stroke()}e.restore(),e.save(),e.translate(n/2,n/2),e.fillStyle="#c8321a",e.strokeStyle="#fff",e.lineWidth=2,e.beginPath(),e.moveTo(0,-16),e.lineTo(11,12),e.lineTo(0,6),e.lineTo(-11,12),e.closePath(),e.fill(),e.stroke();let f=c;e.rotate(f),e.fillStyle="#7a1a0a",e.font="bold 26px Cinzel, serif",e.textAlign="center",e.fillText("N",0,-i+38),e.restore()}_speedo(t){let e=this.speedo,n=460,i=400;e.clearRect(0,0,n,i);let r=250,a=220,o=170,c=e.createRadialGradient(r,a-30,20,r,a,o);c.addColorStop(0,"#3a2818"),c.addColorStop(1,"#160e08"),e.fillStyle=c,e.beginPath(),e.arc(r,a,o,0,6.3),e.fill(),e.lineWidth=14;let h=e.createLinearGradient(0,a-o,0,a+o);h.addColorStop(0,"#f0d080"),h.addColorStop(.5,"#a07a30"),h.addColorStop(1,"#5a4018"),e.strokeStyle=h,e.stroke();let l=Math.PI*.8,u=Math.PI*2.2,f=180;e.lineWidth=3,e.strokeStyle="#e8d8b0",e.fillStyle="#e8d8b0",e.font="600 22px Oswald, sans-serif",e.textAlign="center",e.textBaseline="middle";for(let p=0;p<=f;p+=10){let g=l+(u-l)*p/f,v=p%30===0;e.beginPath(),e.moveTo(r+Math.cos(g)*(o-14),a+Math.sin(g)*(o-14)),e.lineTo(r+Math.cos(g)*(o-(v?34:24)),a+Math.sin(g)*(o-(v?34:24))),e.stroke(),v&&e.fillText(p,r+Math.cos(g)*(o-56),a+Math.sin(g)*(o-56))}e.lineWidth=8,e.strokeStyle="rgba(216,70,43,.85)",e.beginPath(),e.arc(r,a,o-18,l+(u-l)*140/f,u),e.stroke();let d=t.speed*3.6,m=l+(u-l)*ft(d/f,0,1.03);e.lineWidth=7,e.strokeStyle="#ff5a30",e.lineCap="round",e.beginPath(),e.moveTo(r-Math.cos(m)*18,a-Math.sin(m)*18),e.lineTo(r+Math.cos(m)*(o-30),a+Math.sin(m)*(o-30)),e.stroke(),e.fillStyle="#c49a48",e.beginPath(),e.arc(r,a,16,0,6.3),e.fill(),e.fillStyle="#fff4d8",e.font="600 56px Oswald, sans-serif",e.fillText(Math.round(d),r,a+62),e.font="500 18px Oswald",e.fillStyle="#c8b890",e.fillText("KM/H  \xB7  GEAR "+(t.gear+1),r,a+100),e.textAlign="left",e.font="700 20px Oswald",e.fillStyle=t.nitroing?"#ffb060":"#f0d8a0",e.fillText("NITRO",12,30);for(let p=0;p<t.nitroCap;p++){let g=ft(t.nitro-p,0,1),v=12+p*30;e.fillStyle="#2a1a10",e.fillRect(v,46,22,46),e.fillStyle=g>=1?"#d8402a":"#8a3020",e.fillRect(v+2,48+42*(1-g),18,42*g),e.strokeStyle="#c49a48",e.lineWidth=2,e.strokeRect(v,46,22,46),e.fillStyle="#c49a48",e.fillRect(v+6,40,10,6)}let x=ft(t.hp/t.maxHp,0,1);e.fillStyle="#f0d8a0",e.fillText("HP",12,i-22),e.fillStyle="#2a1a10",e.fillRect(52,i-36,150,24),e.fillStyle=x>.5?"#7aa83a":x>.25?"#e0a020":"#d8402a",e.fillRect(54,i-34,146*x,20),e.strokeStyle="#c49a48",e.strokeRect(52,i-36,150,24)}};var Ml=[{id:"jade_mask",name:"Jade Mask of Ix-Tamun",rarity:"common",shape:"mask",col:"#4fbf8a",lore:"Worn by a priest-king who never blinked. The eyes still follow you.",curse:"Wakes the Great Boulder."},{id:"sun_disc",name:"Sun Disc of Kaal",rarity:"common",shape:"disc",col:"#e8b84a",lore:"Hammered gold that hums at noon.",curse:"Doors seal behind the bearer."},{id:"serpent_staff",name:"Serpent Staff Head",rarity:"common",shape:"serpent",col:"#78c06a",lore:"Coiled bronze, tongue of obsidian.",curse:"River beasts grow hungry."},{id:"obsidian_blade",name:"Obsidian Sacrifice Blade",rarity:"common",shape:"blade",col:"#6b6a80",lore:"Sharper than any steel of 1936.",curse:"Blades swing in the dark."},{id:"feather_crown",name:"Crown of Quetzal Plumes",rarity:"rare",shape:"crown",col:"#3fb6c8",lore:"The feathers have not faded in a thousand years.",curse:"Bridges forget their ropes."},{id:"monkey_idol",name:"Laughing Monkey Idol",rarity:"common",shape:"idol",col:"#c9a24a",lore:"It is definitely laughing at you.",curse:"Pillars lose their footing."},{id:"rain_bowl",name:"Rain-Caller Bowl",rarity:"common",shape:"bowl",col:"#5aa0d8",lore:"Never empty, never spills.",curse:"Waterfalls roar louder."},{id:"jaguar_fang",name:"Jaguar Fang Necklace",rarity:"common",shape:"fang",col:"#e8dcc0",lore:"Each fang from a different legend.",curse:"Something stalks the canopy."},{id:"star_map",name:"Star Map Tablet",rarity:"rare",shape:"tablet",col:"#b8a070",lore:"Shows a sky that has not existed for ages.",curse:"Paths fork without warning."},{id:"colossus_eye",name:"Eye of the Colossus",rarity:"rare",shape:"eye",col:"#f0d060",lore:"Pried from a statue that did not appreciate it.",curse:"Giants fall toward the thief."},{id:"heart_stone",name:"Heartstone of the Deep Temple",rarity:"legendary",shape:"heart",col:"#e04848",lore:"Warm to the touch. It beats, faintly.",curse:"The whole temple wants it back."},{id:"emerald_skull",name:"Emerald Skull",rarity:"legendary",shape:"skull",col:"#38d080",lore:"Cut from a single stone. Nobody knows how.",curse:"Every trap remembers your face."}],v_={common:10,rare:3.5,legendary:1};function cp(s,t){let e=Ml.map(n=>({w:v_[n.rarity]*(t&&n.rarity!=="common"?2.5:1),v:n}));return s.weighted(e)}function hp(s,t=128,e=!0){let n=document.createElement("canvas");n.width=n.height=t;let i=n.getContext("2d"),r=t/128;i.scale(r,r);let a=i.createRadialGradient(64,60,4,64,64,64);a.addColorStop(0,e?"rgba(255,230,160,0.55)":"rgba(80,70,60,0.3)"),a.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=a,i.fillRect(0,0,128,128);let o=e?s.col:"#3a342c",c=e?"rgba(0,0,0,0.35)":"rgba(0,0,0,0.5)",h=i.createLinearGradient(30,20,100,110);h.addColorStop(0,e?"#fff6d8":"#4a443a"),h.addColorStop(.25,o),h.addColorStop(1,e?lp(o,-.45):"#221e18"),i.fillStyle=h,i.strokeStyle=e?lp(o,-.6):"#1a1612",i.lineWidth=3;let l=()=>{i.fill(),i.stroke()};switch(i.beginPath(),s.shape){case"mask":i.moveTo(64,18),i.bezierCurveTo(104,18,104,70,92,92),i.lineTo(64,112),i.lineTo(36,92),i.bezierCurveTo(24,70,24,18,64,18),l(),i.fillStyle=c,i.fillRect(42,50,16,8),i.fillRect(70,50,16,8),i.fillRect(54,82,20,6);break;case"disc":i.arc(64,64,44,0,6.3),l(),i.beginPath(),i.strokeStyle=c;for(let u=0;u<16;u++){let f=u/16*6.28;i.moveTo(64+Math.cos(f)*20,64+Math.sin(f)*20),i.lineTo(64+Math.cos(f)*38,64+Math.sin(f)*38)}i.stroke(),i.beginPath(),i.arc(64,64,14,0,6.3),i.fillStyle=c,i.fill();break;case"serpent":i.lineWidth=14,i.strokeStyle=o,i.moveTo(30,100),i.bezierCurveTo(10,60,110,70,90,34),i.stroke(),i.beginPath(),i.lineWidth=3,i.fillStyle=h,i.ellipse(90,30,14,10,-.5,0,6.3),i.fill();break;case"blade":i.moveTo(64,12),i.lineTo(82,70),i.lineTo(64,84),i.lineTo(46,70),i.closePath(),l(),i.fillStyle="#7a5030",i.fillRect(56,84,16,30);break;case"crown":i.moveTo(24,96),i.lineTo(30,46),i.lineTo(46,70),i.lineTo(64,26),i.lineTo(82,70),i.lineTo(98,46),i.lineTo(104,96),i.closePath(),l();break;case"idol":i.ellipse(64,46,24,22,0,0,6.3),l(),i.beginPath(),i.moveTo(44,64),i.lineTo(84,64),i.lineTo(92,112),i.lineTo(36,112),i.closePath(),l(),i.fillStyle=c,i.beginPath(),i.arc(56,44,4,0,6.3),i.arc(72,44,4,0,6.3),i.fill(),i.beginPath(),i.arc(64,54,8,.2,2.9),i.stroke();break;case"bowl":i.moveTo(20,60),i.lineTo(108,60),i.bezierCurveTo(104,100,24,100,20,60),l(),i.fillStyle="#9fd8ff",i.beginPath(),i.ellipse(64,60,44,8,0,0,6.3),i.fill();break;case"fang":for(let u=0;u<5;u++){i.beginPath();let f=28+u*18;i.moveTo(f-6,50),i.lineTo(f+6,50),i.lineTo(f,76+(u===2?14:0)),i.closePath(),l()}i.beginPath(),i.strokeStyle="#8a6a3a",i.lineWidth=3,i.moveTo(16,40),i.quadraticCurveTo(64,64,112,40),i.stroke();break;case"tablet":i.roundRect?i.roundRect(28,18,72,92,8):i.rect(28,18,72,92),l(),i.fillStyle=e?"#fff4c0":"#555";for(let u=0;u<9;u++)i.beginPath(),i.arc(40+u*37%50,32+u*8,2.5,0,6.3),i.fill();break;case"eye":i.moveTo(14,64),i.quadraticCurveTo(64,14,114,64),i.quadraticCurveTo(64,114,14,64),l(),i.beginPath(),i.fillStyle=c,i.arc(64,64,16,0,6.3),i.fill();break;case"heart":i.moveTo(64,108),i.bezierCurveTo(10,70,24,20,64,44),i.bezierCurveTo(104,20,118,70,64,108),l();break;case"skull":i.ellipse(64,56,34,32,0,0,6.3),l(),i.fillRect(46,80,36,22),i.strokeRect(46,80,36,22),i.fillStyle=c,i.beginPath(),i.ellipse(51,56,9,10,0,0,6.3),i.ellipse(77,56,9,10,0,0,6.3),i.fill();break}return e&&(i.globalCompositeOperation="lighter",i.fillStyle="rgba(255,255,255,0.25)",i.beginPath(),i.ellipse(52,36,12,5,-.6,0,6.3),i.fill()),n}function lp(s,t){let e=parseInt(s.slice(1),16),n=e>>16,i=e>>8&255,r=e&255,a=o=>Math.round(Math.max(0,Math.min(255,o+o*t)));return`rgb(${a(n)},${a(i)},${a(r)})`}var up=[{id:"engine",name:"Engine",desc:"More torque and top speed",icon:"\u2699"},{id:"nitro",name:"Nitro",desc:"More canisters, stronger burn",icon:"\u{1F525}"},{id:"suspension",name:"Suspension",desc:"Longer travel, softer landings",icon:"\u26D3"},{id:"armor",name:"Roll Cage & Armor",desc:"More HP, less damage",icon:"\u{1F6E1}"}],bl=5;function wl(s){return{gold:[150,350,700,1200,2e3][s]??1/0,shards:[0,0,2,4,8][s]??1/0}}function Eu(s,t){let e=s.upgrades[t];if(e>=bl)return!1;let n=wl(e);return s.gold>=n.gold&&s.shards>=n.shards}function dp(s,t){if(!Eu(s,t))return!1;let e=wl(s.upgrades[t]);return s.gold-=e.gold,s.shards-=e.shards,s.upgrades[t]++,!0}var bn=(s,t=document)=>t.querySelector(s),fp=["Splendid haul, my boy! Though do try to bring the car back in one piece.","Every relic carries a curse, Dusty. Every single one. Do read the labels.","The museum board wants more legendary pieces. No pressure.","Miss Marlowe tells me you jumped a waterfall. On purpose?","Upgrade that suspension. My spine still remembers the last expedition."],Sl=class{constructor(t,e){this.root=t,this.g=e,this.cur=null,this.tab="relics"}show(t,e){if(this.root.innerHTML="",this.cur=t,!t)return;let n=document.createElement("div");n.className="screen",n.id=t,this.root.appendChild(n),this["_"+t](n,e),n.querySelectorAll("button").forEach(r=>r.addEventListener("click",()=>this.g.audio.sfx("ui")));let i=n.querySelector("button.btn");i&&i.classList.add("sel")}_title(t){let e=this.g.save;t.innerHTML=`<div class="logo"><div class="l1">RELIC RUNNER</div><div class="l2">4\xD74</div><div class="tag">A PULP ADVENTURE \xB7 1936</div></div>
      <div class="menu"><button class="btn" id="bStart">START EXPEDITION</button><button class="btn alt" id="bMuseum">MUSEUM &amp; WORKSHOP</button><button class="btn alt" id="bOpt">OPTIONS</button></div>
      <div class="foot">${this.g.input.isTouch?"Touch: left thumb steers \xB7 auto-accelerate \xB7 NITRO / DRIFT buttons":"W/S throttle \xB7 brake \xB7 A/D steer \xB7 SPACE handbrake \xB7 SHIFT nitro \xB7 W/S in the air to pitch \xB7 C camera"}<br>Best: ${Math.floor(e.records.bestDistance).toLocaleString()} m \xB7 ${e.records.bestScore.toLocaleString()} pts \xB7 Expedition Lv ${e.expeditionLevel}</div>`,bn("#bStart",t).onclick=()=>this.g.startRun(),bn("#bMuseum",t).onclick=()=>this.g.toMuseum(),bn("#bOpt",t).onclick=()=>this.show("options",{back:"title"})}_museum(t){let e=this.g.save;t.classList.add("dim");let n=fp[(e.records.runs+3)%fp.length];t.innerHTML=`<div class="panel"><h1>THE ABERNATHY MUSEUM</h1>
      <div class="prof"><canvas width="128" height="128"></canvas><div><b>Prof. Abernathy</b><br><i>\u201C${n}\u201D</i></div></div>
      <div class="wallet"><span>\u{1FA99} ${e.gold.toLocaleString()} gold</span><span>\u25C6 ${e.shards} relic shards</span><span>\u2605 Expedition Lv ${e.expeditionLevel}</span></div>
      <div class="tabs">${["relics","workshop","missions","garage"].map(r=>`<div class="tab clickable ${this.tab===r?"on":""}" data-t="${r}">${r.toUpperCase()}</div>`).join("")}</div>
      <div id="tabBody"></div>
      <div class="row"><button class="btn" id="bGo">START EXPEDITION</button><button class="btn alt" id="bBack">BACK</button></div></div>`,t.querySelector(".prof canvas").getContext("2d").drawImage(yl("prof"),0,0),t.querySelectorAll(".tab").forEach(r=>r.onclick=()=>{this.tab=r.dataset.t,this.g.audio.sfx("ui"),this.show("museum")});let i=bn("#tabBody",t);if(this.tab==="relics"){let r=Object.keys(e.relics).length;i.innerHTML=`<h2>JUNGLE TEMPLE COLLECTION \u2014 ${r} / ${Ml.length}</h2><div class="grid"></div>`;let a=bn(".grid",i);for(let o of Ml){let c=e.relics[o.id]||0,h=document.createElement("div");h.className="relicCard",h.appendChild(hp(o,128,c>0)),h.insertAdjacentHTML("beforeend",`<b>${c?o.name:"???"}</b><span class="r ${o.rarity}">${o.rarity}${c>1?" \xD7"+c:""}</span><p>${c?o.lore+"<br><i>Curse: "+o.curse+"</i>":"Not yet recovered."}</p>`),a.appendChild(h)}}else this.tab==="workshop"?(i.innerHTML="<h2>WORKSHOP \u2014 OLD BESSIE</h2>"+up.map(r=>{let a=e.upgrades[r.id],o=wl(a);return`<div class="upg"><div class="ic">${r.icon}</div><div class="nm"><b>${r.name}</b><br><small>${r.desc}</small><div class="pips">${"\u25CF".repeat(a)}${"\u25CB".repeat(bl-a)}</div></div><button class="btn" data-u="${r.id}" ${Eu(e,r.id)?"":"disabled"}>${a>=bl?"MAXED":`${o.gold} \u{1FA99}${o.shards?" + "+o.shards+" \u25C6":""}`}</button></div>`}).join(""),i.querySelectorAll("button[data-u]").forEach(r=>r.onclick=()=>{dp(e,r.dataset.u)&&(this.g.persist(),this.g.audio.sfx("mission"),this.show("museum"))})):this.tab==="missions"?i.innerHTML="<h2>ACTIVE MISSIONS</h2>"+this.g.missions.active.map(r=>`<div class="upg"><div class="ic">\u{1F4DC}</div><div class="nm"><b>${r.text}</b><br><small>${Math.min(Math.floor(r.p),r.goal)} / ${r.goal}${r.perRun?" (in one run)":""}</small></div></div>`).join("")+`<p>Completing missions raises your Expedition Level: every level adds +10% to the final score. Missions done: ${e.missionsDone}.</p>`:(i.innerHTML=`<h2>GARAGE \u2014 PAINT</h2><div class="paints">${Object.keys(Ps).map(r=>`<div class="paint clickable ${e.paint===r?"on":""}" data-p="${r}" style="background: rgb(${Ps[r].join(",")})" title="${r}"></div>`).join("")}</div><p>Old Bessie: balanced 4\xD74, 4WD (42% front), long-travel suspension, winch, spare tire and far too many crates.<br>More vehicles (Army Scout Car, Desert Truck, Sidecar Motorcycle, Half-Track) arrive in later expeditions.</p>`,i.querySelectorAll(".paint").forEach(r=>r.onclick=()=>{e.paint=r.dataset.p,this.g.car3d.setPaint(e.paint),this.g.persist(),this.show("museum")}));bn("#bGo",t).onclick=()=>this.g.startRun(),bn("#bBack",t).onclick=()=>this.g.toTitle()}_results(t,e){t.classList.add("dim");let n=e.relics.map(i=>`<span title="${i.name}">${i.name}${i.isNew?" <b>(NEW)</b>":""}</span>`).join(", ")||"\u2014";t.innerHTML=`<div class="panel"><h1>${e.reason}</h1>
      <div style="display:flex;gap:24px;align-items:center;justify-content:center;flex-wrap:wrap"><div class="rank">${e.rank}</div><div style="font-family:Oswald;font-size:2.4rem">${e.score.toLocaleString()} pts${e.best?' <small style="color:#a8321a;font-size:1rem">NEW BEST!</small>':""}</div></div>
      <h2>EXPEDITION LOG</h2><div class="res">
        <div><span>Distance</span><b>${Math.floor(e.dist).toLocaleString()} m</b></div><div><span>Gold</span><b>${e.coins}</b></div>
        <div><span>Style points</span><b>${e.style.toLocaleString()}</b></div><div><span>Max combo</span><b>\xD7${e.maxMult.toFixed(1)}</b></div>
        <div><span>Landings P / G / R / C</span><b>${e.stats.perfect} / ${e.stats.good} / ${e.stats.rough} / ${e.stats.crash}</b></div><div><span>Airtime</span><b>${e.stats.air.toFixed(1)} s</b></div>
        <div><span>Set pieces clean</span><b>${e.stats.setClean} / ${e.stats.setTotal}</b></div><div><span>Top speed</span><b>${Math.round(e.stats.maxSpeed*3.6)} km/h</b></div>
        <div><span>Expedition multiplier</span><b>\xD7${e.expMul.toFixed(1)}</b></div><div><span>Relic shards</span><b>+${e.shardsGained}</b></div></div>
      <h2>RELICS RECOVERED</h2><p>${n}</p>
      ${e.missionsDone.length?`<h2>MISSIONS COMPLETE</h2><p>${e.missionsDone.map(i=>"\u2714 "+i.text).join("<br>")}</p>`:""}
      <div class="row"><button class="btn" id="bRetry">RUN AGAIN</button><button class="btn alt" id="bMus">MUSEUM &amp; WORKSHOP</button></div></div>`,bn("#bRetry",t).onclick=()=>this.g.startRun(),bn("#bMus",t).onclick=()=>this.g.toMuseum()}_pause(t){t.classList.add("dim"),t.innerHTML='<div class="panel" style="max-width:420px;text-align:center"><h1>PAUSED</h1><div class="menu"><button class="btn" id="bRes">RESUME</button><button class="btn alt" id="bOpt">OPTIONS</button><button class="btn alt" id="bQuit">ABANDON RUN</button></div></div>',bn("#bRes",t).onclick=()=>this.g.resume(),bn("#bOpt",t).onclick=()=>this.show("options",{back:"pause"}),bn("#bQuit",t).onclick=()=>this.g.endRun("EXPEDITION ABANDONED")}_options(t,e){t.classList.add("dim");let n=this.g.save.settings,i=(o,c)=>`<select data-k="${o}">${c.map(([h,l])=>`<option value="${h}" ${String(n[o])===String(h)?"selected":""}>${l}</option>`).join("")}</select>`,r=(o,c,h,l)=>`<input type="range" data-k="${o}" min="${c}" max="${h}" step="${l}" value="${n[o]}">`,a=o=>`<input type="checkbox" data-k="${o}" ${n[o]?"checked":""}>`;t.innerHTML=`<div class="panel" style="max-width:640px"><h1>OPTIONS</h1>
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
      <div class="row"><button class="btn" id="bDone">DONE</button></div></div>`,t.querySelectorAll("[data-k]").forEach(o=>o.addEventListener("input",()=>{let c=o.dataset.k;n[c]=o.type==="checkbox"?o.checked:o.type==="range"||c==="fps"?+o.value:o.value,this.g.applySettings(c)})),bn("#bGyro",t).onclick=async()=>{await this.g.input.enableGyro()&&(setTimeout(()=>this.g.input.calibrate(),300),n.touchMode="tilt",this.g.applySettings("touchMode"))},bn("#bDone",t).onclick=()=>{this.g.persist(),e&&e.back==="pause"?this.show("pause"):this.g.toTitle()}}};var El=class{constructor(t,e){this.g=e,this.el=document.createElement("div"),this.el.id="debug",this.el.className="hidden",t.appendChild(this.el),this.el.innerHTML=`<div id="dbgTxt"></div><hr><div>Force set piece: ${ru.map(n=>`<button data-sp="${n}">${n}</button>`).join("")}</div>
      <label><input type="checkbox" id="dbgInv"> invincible</label><hr>
      ${[["gripLat",.6,1.8,.02],["springK",18e3,7e4,1e3],["maxSteer",.3,.8,.01],["assistStrength",0,1,.05],["chaserSpeedMul",.5,1.5,.02],["airPitch",1,8,.1],["driftAssist",0,1.5,.05],["engineForce",5e3,16e3,200],["weightTransfer",0,.7,.01],["counterCatch",0,15,.5],["damperRebound",1500,8e3,100],["antiRoll",0,3e4,500]].map(([n,i,r,a])=>`<div>${n} <input type="range" data-t="${n}" min="${i}" max="${r}" step="${a}" value="${Zn[n]}"> <span>${Zn[n]}</span></div>`).join("")}`,this.txt=this.el.querySelector("#dbgTxt"),this.el.querySelectorAll("[data-sp]").forEach(n=>n.onclick=()=>{e.gen.forced=n.dataset.sp}),this.el.querySelector("#dbgInv").onchange=n=>{e.car.invincible=n.target.checked},this.el.querySelectorAll("[data-t]").forEach(n=>n.oninput=()=>{Zn[n.dataset.t]=+n.value,n.nextElementSibling.textContent=n.value}),this.on=!1,this.t=0}toggle(){this.on=!this.on,this.el.classList.toggle("hidden",!this.on)}update(t,e){if(!this.on||(this.t-=t,this.t>0))return;this.t=.2;let n=this.g.car,i=n.wheels;this.txt.innerHTML=`fps ${e.fps.toFixed(0)} \xB7 frame ${e.frameMs.toFixed(1)} ms \xB7 sim ${e.simMs.toFixed(2)} ms<br>draw calls ${e.calls} \xB7 tris ${(e.tris/1e3).toFixed(0)}k \xB7 quality ${e.quality} \xB7 res ${e.res.toFixed(2)}<br>
      speed ${(n.speed*3.6).toFixed(0)} km/h \xB7 gear ${n.gear+1} \xB7 rpm ${n.rpm.toFixed(0)} \xB7 slip ${(n.slipAngle*57.3).toFixed(0)}\xB0 \xB7 drift ${n.drift.toFixed(2)}<br>
      susp ${i.map(r=>r.comp.toFixed(2)).join(" ")} \xB7 contacts ${n.contacts} \xB7 air ${n.airTime.toFixed(2)}s<br>
      wheel slip lat ${i.map(r=>(r.slipLat*57.3).toFixed(0)).join(" ")}<br>hp ${n.hp.toFixed(0)}/${n.maxHp} \xB7 nitro ${n.nitro.toFixed(2)} \xB7 mud ${n.mud.toFixed(2)}<br>
      chaser gap ${e.gap.toFixed(1)} m \xB7 v ${(e.bv*3.6).toFixed(0)} km/h<br>piece ${e.piece} \xB7 biome JUNGLE TEMPLE \xB7 seed ${this.g.seed}<br>
      s ${this.g.carS.toFixed(0)} \xB7 built ${e.built.pieces} \xB7 inst ${e.built.instances} \xB7 particles ${e.particles}<br>validator ${JSON.stringify(this.g.gen.val.stats)}`}};var Tl=class{constructor(){this.reset(1)}reset(t){this.dist=0,this.coins=0,this.relics=[],this.style=0,this.combo=0,this.comboT=0,this.expMul=1+(t-1)*.1,this.breakdown={landings:0,drift:0,air:0,nearMiss:0,setPieces:0,gaps:0},this.stats={perfect:0,good:0,rough:0,crash:0,air:0,maxAir:0,gaps:0,setClean:0,setTotal:0,hairpins:0,maxSpeed:0,nitroUsed:0,danger:0,falls:0},this.popups=[]}get mult(){return Math.min(8,1+this.combo*.1)}add(t,e,n){let i=Math.round(t*this.mult);return this.style+=i,n&&(this.breakdown[n]=(this.breakdown[n]||0)+i),this.combo+=1,this.comboT=5,e&&this.popups.push({label:e,pts:i}),i}breakCombo(){this.combo>0&&this.popups.push({label:"Combo lost",pts:0,bad:!0}),this.combo=0}update(t){this.comboT>0&&(this.comboT-=t,this.comboT<=0&&this.combo>0&&(this.combo=Math.max(0,this.combo-3),this.comboT=this.combo?2:0))}get total(){return Math.round((this.dist*1+this.coins*10+this.relics.length*500+this.style)*this.expMul)}rank(){let t=this.total;return t>6e4?"S":t>3e4?"A":t>14e3?"B":t>5e3?"C":"D"}};var Tu=[{id:"gaps3",text:"Jump 3 gaps in a row",goal:3,ev:"gapStreak",perRun:!0},{id:"hairpin5",text:"Drift through 5 hairpins",goal:5,ev:"hairpinDrift"},{id:"nonitro500",text:"Outrun the boulder without nitro for 500 m",goal:500,ev:"noNitroDist",perRun:!0},{id:"perfect3",text:"Land 3 PERFECT jumps in one run",goal:3,ev:"perfect",perRun:!0},{id:"coins150",text:"Collect 150 gold in one run",goal:150,ev:"coins",perRun:!0},{id:"danger3",text:"Take the dangerous path 3 times",goal:3,ev:"danger"},{id:"bridges2",text:"Outrun 2 collapsing bridges",goal:2,ev:"bridgeCollapse"},{id:"dist2000",text:"Travel 2,000 m in one run",goal:2e3,ev:"distance",perRun:!0},{id:"setpieces4",text:"Clear 4 set pieces cleanly",goal:4,ev:"setClean"},{id:"air10",text:"Rack up 10 s of airtime in one run",goal:10,ev:"airtime",perRun:!0},{id:"relic2",text:"Find 2 relics in one run",goal:2,ev:"relic",perRun:!0},{id:"nearmiss3",text:"Pull 3 close calls with the boulder",goal:3,ev:"boulderClose"}],Al=class{constructor(t){this.save=t,(!t.missions||!Array.isArray(t.missions)||t.missions.length!==3)&&(t.missions=["gaps3","hairpin5","nonitro500"].map(e=>({id:e,p:0}))),this.justDone=[]}def(t){return Tu.find(e=>e.id===t)}get active(){return this.save.missions.map(t=>({...this.def(t.id),p:t.p}))}startRun(){for(let t of this.save.missions)this.def(t.id).perRun&&(t.p=0);this.justDone=[]}report(t,e=1,n=!1){let i=[];for(let r of this.save.missions){let a=this.def(r.id);a.ev!==t||r.done||(r.p=n?Math.max(r.p,e):r.p+e,t==="gapStreak"&&e===0&&(r.p=0),r.p>=a.goal&&(r.done=!0,i.push(a)))}for(let r of i)this.justDone.push(r);return i}resetStreak(t){for(let e of this.save.missions)this.def(e.id).ev===t&&!e.done&&(e.p=0)}refresh(){let t=0,e=new Set(this.save.missions.map(n=>n.id));return this.save.missions=this.save.missions.map(n=>{if(!n.done)return n;t++;let i=Tu.filter(a=>!e.has(a.id)),r=i[Math.floor(Math.random()*i.length)]||Tu[0];return e.add(r.id),{id:r.id,p:0}}),t&&(this.save.missionsDone+=t,this.save.expeditionLevel=1+Math.floor(this.save.missionsDone/3),this.save.shards+=t*2),t}};var Rl=class{constructor(t){this.track=t,this.lanePref=0,this.skill=1}update(t,e,n,i={}){let r=this.track,a=Math.max(t.speed,5),o=ft(a*.55,7,20),c=e+o,h=r.sampleAtS(c),l=0,u=!1;if(h.fork>0&&(l=(this.lanePref||i.danger||1)*h.fork),i.hint){let P=i.hint(c,e);P!=null&&(l=P,u=!0)}if(!u&&i.obstacles&&i.obstacles.length){let P=l,M=1e9,b=h.fork>0?l:0;for(let E=b-h.hw+1.2;E<=b+h.hw-1.2;E+=.6){let L=Math.abs(E-l)*.3;for(let U of i.obstacles){if(!U.active||U.breakAt<4)continue;let N=U._s??(U._s=r.locate(U.x,U.z,e)),G=N-e;if(G<-2||G>40)continue;let O,J;U._lat!==void 0?O=J=U._lat:(O=r.query(U.x,U.z,N).lat,J=O,U.x2!==void 0&&(J=r.query(U.x2,U.z2,N).lat));let H=Math.min(O,J)-U.r-1.4,lt=Math.max(O,J)+U.r+1.4;E>H&&E<lt&&t.pos.y+1.2>U.yMin&&(L+=100)}L<M&&(M=L,P=E)}l=P}this.lat=this.lat===void 0?l:this.lat+(l-this.lat)*.25;let f=r.pointAt(c,this.lat,{x:0,y:0,z:0}),d=f.x-t.pos.x,m=f.z-t.pos.z,x=t.fwd.x,p=t.fwd.z,g=t.left.x,v=t.left.z,_=d*x+m*p,y=d*g+m*v,R=Math.atan2(y,Math.max(_,.5));n.steer=ft(-R*2.6,-1,1);let w=40,C=!1;for(let P=5;P<70;P+=5){let M=r.sampleAtS(e+P);if(Math.abs(M.k)>1e-4){let b=Ts(1/Math.abs(M.k))*1.05,E=Math.sqrt(b*b+14*P);w=Math.min(w,E)}(M.gap||M.ramp>0)&&(C=!0),M.bridge&&(w=Math.min(w,30))}if(C&&(w=40),u&&(w=Math.min(w,i.hintV||21)),n.throttle=t.speed<w?1:0,n.brake=t.speed>w+2.5?1:0,n.handbrake=!1,n.pitch=0,n.nitroPressed=C&&t.nitro>=1&&!t.nitroing&&i.allowNitro!==!1&&t.speed<30,!t.grounded){let P=t.fwd.y+.12;n.pitch=ft(P*3,-1,1),n.steer=0}return n}};var di=new URLSearchParams(location.search),Tr=1/120,Is=42,Pn=s=>document.getElementById(s),y_={full:1,light:.55,off:0},pp={start:[["dusty","Ha! Another one for the museum."],["penny","Dusty, the floor is humming. Floors should not hum."]],close:[["dusty","It's gaining on us!"],["penny","Faster, Dusty! It has our scent!"],["dusty","Come on, old girl, give me everything!"]],perfect:[["penny","Textbook landing! Nobody will ever believe me."],["dusty","Did you see that? Tell me you saw that."],["penny","Ten out of ten. Possibly eleven."]],crash:[["penny","My spine filed a complaint."],["dusty","She's fine! She's fine. Probably fine."]],lowhp:[["penny","Bessie's falling apart, Dusty!"],["dusty","Hold together, sweetheart, just a little longer!"]],relic:[["penny","Ooh \u2014 the {r}! Professor Abernathy will faint."],["dusty","Grab it! Yes \u2014 the {r}!"]],fall:[["penny","That was not a road, Dusty!"],["dusty","Well, that was a bad idea."]],danger:[["dusty","Danger path it is. Hold your hat!"],["penny","Why do we ALWAYS take the skull side?"]],nitro:[["dusty","Hang on to something!"]]},Au=class{constructor(){this.save=wf();let t=this.save.settings;di.get("quality")&&(t.quality=di.get("quality")),this.test={autopilot:di.has("autopilot"),skipIntro:di.has("skipIntro"),fixed:di.has("fixed")},this.input=new xl(t),this.audio=new vl(t),this.world=new ko(Pn("game"),t.quality),this.post=new Ho(this.world),this.fx=new gl(this.world.scene,this.world.q),this.world.onResize=()=>{this.post.resize(),this.fx.setFog(this.world.scene.fog,this.world.h,this.world.pr)},this.fx.setFog(this.world.scene.fog,this.world.h,this.world.pr),this.time=this.world.time,this.seed=1,this._newTrack(this._pickSeed(!0)),this.builder=new ll(this.world.scene,this.track,this.gen,this.time,this.world.q),this.car=new cl(this.track,Zn),this.car3d=new ul(this.world.scene,this.save.paint,{lite:this.world.qualityName==="low"}),this.car3d.onCrate=e=>{this.fx.burst("splinter",e.x,e.y,e.z,14,5,.6),this.audio.sfx("crash",.6)},this.car3d.onBreak=()=>this.bark("dusty","There go the headlights!",!0),this.boulder=new dl(this.world.scene,this.track),this.cam=new fl(this.world.camera,this.track),this.autopilot=new Rl(this.track),this.apOut={steer:0,throttle:0,brake:0,handbrake:!1,pitch:0,nitroPressed:!1},this.holdInp={steer:0,throttle:0,brake:0,handbrake:!0,pitch:0,nitroPressed:!1},this.score=new Tl,this.missions=new Al(this.save),this.hud=new _l(Pn("hud")),this.screens=new Sl(Pn("screens"),this),this.debug=new El(Pn("ui"),this),this.input.bindTouch(Pn("touch")),document.body.classList.toggle("touch",this.input.isTouch),Pn("pauseBtn").addEventListener("click",()=>this.pause()),oe.car=this.car,this.prevPos=new A,this.prevQ=new ye,this.rPos=new A,this.rQ=new ye,this.acc=0,this.alpha=1,this.last=performance.now(),this.slow={t:0,scale:1},this.perf={fps:60,frameMs:16,simMs:0,realMs:16,win:0,winN:0,winT:0,drops:0},this.flash=0,this.carS=Is,this.run={curPiece:null},this.landN=new A(0,1,0),this._ahead=new A,this._tmp={x:0,y:0,z:0},this.tunnel=0,this.lastBark=-99,this._bindBus(),this.applySettings("all"),addEventListener("pointerdown",()=>this.audio.start(),{once:!1}),addEventListener("keydown",()=>this.audio.start()),window.__rr=this,this.toTitle(),requestAnimationFrame(e=>this.loop(e))}_pickSeed(t){if(di.has("daily")){let e=new Date;return Mf("daily-"+e.getUTCFullYear()+"-"+e.getUTCMonth()+"-"+e.getUTCDate())}return di.get("seed")?+di.get("seed")+0>>>0:Math.random()*1e9>>>0}_newTrack(t){this.seed=t;let e=ia[this.save.settings.difficulty]||ia.adventurer;this.track=new Vo,this.gen=new Wo(this.track,t,{gapMul:e.gap}),this.gen.ensure(900),this.builder&&(this.builder.reset(),this.builder.brk.reset(),this.builder.track=this.track,this.builder.gen=this.gen,this.builder.templeGate=null);for(let n of[this.car,this.boulder,this.cam,this.autopilot])n&&(n.track=this.track);this.pieceIdx=0}_placeCar(t,e=0){let n=this.track.sampleAtS(t),i=this.track.pointAt(t,0,this._tmp);this.car.reset(i.x,i.y+1,i.z,n.th,e,n.i),this.prevPos.copy(this.car.pos),this.prevQ.copy(this.car.q),this.carS=t,this.cam.snap()}_bindBus(){Ot.on("sfx",t=>this.audio.sfx(t.name,t.v??1)),Ot.on("bark",t=>this.bark(t.who,t.text,!0)),Ot.on("fx",t=>this.fx.burst(t.kind,t.x,t.y,t.z,t.n||10,t.speed||(t.kind==="dust"?3:5),t.spread||.6,.4,t.size||1)),Ot.on("shake",t=>{let e=t.amount;if(t.at){let n=this.car.pos.distanceTo(t.at);e*=ft(1-n/60,0,1)}this.cam.addShake(e)}),Ot.on("crash",()=>{this.state==="run"&&(this.score.breakCombo(),this.audio.sfx("crash",.8),this.cam.addShake(.5))}),Ot.on("style",t=>{if(this.state!=="run")return;let e=this.score.add(t.pts||100,t.label,t.kind==="nearmiss"?"nearMiss":void 0);this.hud.popup(t.label,e)}),Ot.on("setpiece",t=>{if(this.state!=="run")return;let e=this.score.stats;if(e.setTotal++,t.ok){e.setClean++;let n=this.score.add(1e3,t.label,"setPieces");this.hud.popup(t.label,n,{big:!0}),this._mission("setClean",1),t.type==="bridgeCollapse"&&this._mission("bridgeCollapse",1),this.audio.sfx("perfect")}else this.hud.popup(t.label||"Survived",0)})}applySettings(t){let e=this.save.settings;if(t==="all"||t==="quality"){let i=e.quality==="auto"?Ss?"low":di.get("quality")||this.world.qualityName:e.quality;na[i]&&i!==this.world.qualityName&&(this.world.setQuality(i),this.post.enabled=this.world.q.bloom)}(t==="all"||t==="music"||t==="sfx")&&this.audio.applyVolumes(),this.cam.distMul=e.camDist,this.cam.comfort=!!e.comfort,document.documentElement.style.setProperty("--sub",e.subtitle);let n=document.querySelector("#hBark .txt");n&&(n.style.fontSize=e.subtitle*100+"%")}persist(){Sf(this.save)}bark(t,e,n){!n&&this.time.value-this.lastBark<6||(this.lastBark=this.time.value,this.hud.bark(t,e,this.audio))}_barkSet(t,e){let n=pp[t],[i,r]=n[Math.floor(Math.random()*n.length)];this.bark(i,e?r.replace("{r}",e):r,t==="relic")}_mission(t,e=1,n=!1){if(this.state!=="run"&&this.state!=="dead")return;let i=this.missions.report(t,e,n);for(let r of i)this.hud.banner("MISSION COMPLETE",r.text),this.bannerT=2.6,this.audio.sfx("mission")}_show(t,e){Pn("hud").classList.toggle("hidden",!t),Pn("touch").classList.toggle("hidden",!(e&&this.input.isTouch))}_startAttract(){this._newTrack(this._pickSeed(!0)),this.car.fullReset(),this.car.invincible=!0,this.car3d.repair(),this._placeCar(Is+40,12),this.builder.update(this.carS,.016),this.boulder.active=!1,this.boulder.group.visible=!1,this.attract=!0,this.orbitT=0}toTitle(){this.state="title",this._show(!1,!1),Pn("letter").classList.remove("on"),this.attract||this._startAttract(),this.screens.show("title"),this.audio.setMusic("title")}toMuseum(){this.attract||this._startAttract(),this.state="museum",this._show(!1,!1),this.screens.show("museum"),this.audio.setMusic("museum")}startRun(){let t=this.save.settings,e=this.diff=ia[t.difficulty]||ia.adventurer;this.attract=!1,this._newTrack(this._pickSeed(!1)),this.car.invincible=!!window.__inv||this.car.invincible==="debug",this.car.setUpgrades(this.save.upgrades),this.car.fullReset(),this.car3d.repair();let n=this.save.upgrades;Zn.engineForce=13600*(1+n.engine*.06),Zn.topSpeed=36+n.engine*1.2,this.car.dmgScale=e.dmg,this._placeCar(Is,0),this.builder.update(this.carS,.016),this.boulder.group.visible=!0,this.boulder.active=!1,this.boulder.s=Is-e.startGap,this.boulder.v=0,this.boulder.active=!0,this.boulder.t=0,this.boulder.group.position.set(0,0,0),this.boulder.update(1e-4,this.carS,0),this.boulder.active=!1,this.score.reset(this.save.expeditionLevel),this.missions.startRun(),this.run={curPiece:null,startS:Is,maxS:Is,gapsDone:new Set,hairpins:new Map,forks:new Set,announced:new Set,noNitroS:Is,close:!1,lowHp:!1,driftT:0,fallT:0,deadT:0,maxMult:1,t:0,brakeHint:!1},this.score.stats.maxSpeed=0,this.screens.show(null),this._show(!0,!0),this.hud.missions(this.missions.active),this.cam.mode=this.save.settings.hoodCam?"hood":"chase",this.audio.setMusic("run"),this.slow={t:0,scale:1},this.test.skipIntro||this.test.autopilot&&!di.has("intro")?this._go(!0):(this.state="intro",this.introT=0,this.introFlags={},Pn("letter").classList.add("on"),this._show(!1,!1))}_go(t){this.state="run",Pn("letter").classList.remove("on"),this._show(!0,!0),this.builder.templeGate&&!this.builder.templeGate.bursting&&this.builder.templeGate.burst(),this.boulder.start(this.boulder.s,this.diff.chaser),t&&(this.boulder.t=2.5),this.hud.banner("FLOOR IT!","THE TEMPLE WANTS IT BACK"),this.bannerT=1.8,this.cam.snap()}pause(){this.state==="run"&&(this.state="pause",this.screens.show("pause"))}resume(){this.state==="pause"&&(this.state="run",this.screens.show(null),this.last=performance.now())}_die(t){this.state==="run"&&(this.state="dead",this.run.deadT=1.8,this.deathReason=t,this.slow={t:1.6,scale:.35},this.audio.sfx("crash"),this.cam.addShake(1),this.fx.burst("smoke",this.car.pos.x,this.car.pos.y+1,this.car.pos.z,30,3,1.2))}endRun(t){if(!["run","dead","pause","intro"].includes(this.state))return;let e=this.save,n=this.score,i=n.stats,r=this.run;n.dist=Math.max(0,r.maxS-r.startS),this._mission("distance",n.dist,!0),this._mission("coins",n.coins,!0),this._mission("airtime",i.air,!0),this.state="results";let a=0,o=[];for(let f of n.relics){let d=!e.relics[f.id];e.relics[f.id]=(e.relics[f.id]||0)+1,d||a++,o.push({name:f.name,isNew:d})}e.gold+=n.coins;let c=this.missions.justDone.slice(),h=e.shards;this.missions.refresh(),a+=e.shards-h,e.shards+=a-(e.shards-h);let l=n.total,u=l>e.records.bestScore;e.records.runs++,e.records.totalDistance+=n.dist,e.records.bestDistance=Math.max(e.records.bestDistance,n.dist),u&&(e.records.bestScore=l),e.seenIntro=!0,this.persist(),this._show(!1,!1),Pn("letter").classList.remove("on"),this.slow={t:0,scale:1},this.audio.setMusic("results"),this.audio.sfx("gameover"),this.lastResults={reason:t,rank:n.rank(),score:l,best:u,dist:n.dist,coins:n.coins,style:n.style,maxMult:r.maxMult,stats:i,expMul:n.expMul,shardsGained:a,relics:o,missionsDone:c},this.screens.show("results",this.lastResults)}loop(t){if(requestAnimationFrame(r=>this.loop(r)),this.save.settings.fps===30&&t-this.last<30)return;let n=Math.min(.1,(t-this.last)/1e3);this.perf.realMs=re(this.perf.realMs||16,t-this.last,.1),this.test.fixed&&(n=1/30),this.last=t,this._keys(),this.time.value+=n,oe.time=this.time.value,this.slow.t>0&&(this.slow.t-=n,this.slow.t<=0&&(this.slow.scale=1));let i=performance.now();this.state!=="pause"&&this.state!=="results"&&this.simulate(n*this.slow.scale,n),this.perf.simMs=re(this.perf.simMs,performance.now()-i,.1),this.render(n,n*this.slow.scale),this.input.endFrame(),this._autoQuality(n)}_keys(){let t=this.input;t.wasPressed("Backquote")&&this.debug.toggle(),(t.wasPressed("Escape")||t.wasPressed("KeyP"))&&(this.state==="run"?this.pause():this.state==="pause"&&this.resume()),t.wasPressed("KeyC")&&(this.state==="run"||this.state==="intro")&&(this.cam.mode=this.cam.mode==="hood"?"chase":"hood",this.save.settings.hoodCam=this.cam.mode==="hood",this.cam.snap()),this.state==="intro"&&this.introT>.4&&t.anyPressed()&&!t.wasPressed("Backquote")&&this._go(!1),(this.state==="title"||this.state==="results")&&(t.wasPressed("Enter")||t.wasPressed("PadA"))&&this.startRun()}warp(t,e=1/30){for(let n=0;n<t&&(this.time.value+=e,oe.time=this.time.value,this.slow.t>0&&(this.slow.t-=e,this.slow.t<=0&&(this.slow.scale=1)),!(this.state==="pause"||this.state==="results"));n+=e)this.simulate(e*this.slow.scale,e),this.render(e,e*this.slow.scale,!0)}simulate(t,e){let n=this.car,i=this.attract||this.test.autopilot,r=this.input.update(!n.grounded);this.acc+=t;let a=0;for(this._obs=this.builder.obstacles;this.acc>=Tr&&a<14;)this._step(Tr,i?null:r),this.acc-=Tr,a++;this.acc>Tr&&(this.acc=Tr*.999),this.alpha=this.acc/Tr,this._frame(t,e)}_step(t,e){this.clockT=(this.clockT||0)+t;let n=this.car,i=this.save.settings;if(this.state==="intro")e=this.holdInp;else if(!e){let u=f=>{if(this.test.aimLat!==void 0&&f>this.test.aimS0&&f<this.test.aimS1)return this.test.aimLat;for(let d of this.builder.built)if(d.set&&d.set.apLat&&f>d.p.s0&&f<d.p.s1)return d.set.apLat(f);return null};e=this.autopilot.update(n,this.carS,this.apOut,{danger:this.test.autopilot?1:0,obstacles:this._obs,hint:u,allowNitro:!this.attract||!0})}this.state==="dead"&&(e=this.holdInp);let r=this.track.get(n.hint),a=(this.attract||this.test.autopilot?1:y_[i.assist]??.55)*Zn.assistStrength,o=r.bridge||r.edgeL===Ut.CLIFF||r.edgeR===Ut.CLIFF,c=this._cfg||(this._cfg={lane:{}});c.assist=a,c.steerSens=i.steerSens,c.grip=1,c.obstacles=this._obs,c.bump=this.builder.brk,c.speedCap=0;for(let u=this.pieceIdx,f=this.gen.pieces;u<Math.min(f.length,this.pieceIdx+3);u++){let d=f[u];if(d.vCap&&this.carS>d.s0-80&&this.carS<d.lipS+1){c.speedCap=d.vCap;break}}let h=c.lane;if(h.laneLat=n.laneLat??0,h.hw=r.hw,h.rx=r.rx,h.rz=r.rz,h.th=r.th,h.narrow=o,n.grounded)c.landAssist=0;else{let u=n.pos.x+n.vel.x*.35,f=n.pos.z+n.vel.z*.35,d=this.track.query(u,f,n.hint);this.landN.set(d.nx,d.ny,d.nz),c.landN=this.landN,c.landAssist=.25+a*.55}this.prevPos.copy(n.pos),this.prevQ.copy(n.q),n.step(t,e,c);let l=this.track.get(n.hint);if(this.carS=l.s+((n.pos.x-l.x)*l.fx+(n.pos.z-l.z)*l.fz),oe.carS=this.carS,oe.carLat=n.lat||0,n.events.length){for(let u of n.events)this._carEvent(u);n.events.length=0}}_carEvent(t){let e=this.car,n=this.score,i=n.stats,r=this.state==="run";switch(t.type){case"land":{let a=t.air>.9;{let o=e.lastSurf,c=e.pos.y-.75,h=o===Xt.WATER,l=o===Xt.MUD||o===Xt.JUNGLE;this.fx.ringBurst(h?"spray":"ring",e.pos.x,c,e.pos.z,a?30:16,a?7:4.5,h?1.2:1),this.fx.burst(h?"spray":l?"clod":"dust",e.pos.x,c+.2,e.pos.z,a?22:10,a?6:4,1.4,.3),!h&&!l&&this.fx.burst("gravel",e.pos.x,c+.1,e.pos.z,a?18:8,5,1.2,.6),this._hapKick=Math.min(1,(t.vn||4)/12)}if(this.audio.sfx("land",ft(t.vn/10,.3,1.2)),this.cam.addShake(ft(t.vn/25,.1,.7)),this.cam.land(t.vn||4),!r)break;if(i.air+=t.air,i.maxAir=Math.max(i.maxAir,t.air),t.quality==="PERFECT"){i.perfect++;let o=n.add(400+t.air*250,"PERFECT LANDING","landings");this.hud.popup("PERFECT LANDING",o,{big:!0}),this.audio.sfx("perfect"),this.save.settings.flashing||(this.flash=.22),this._mission("perfect",1),Math.random()<.35&&this._barkSet("perfect")}else if(t.quality==="GOOD"){i.good++;let o=n.add(200+t.air*120,"Good landing","landings");this.hud.popup("Good landing",o)}else t.quality==="ROUGH"?(i.rough++,this.hud.popup("Rough landing",0,{bad:!0})):(i.crash++,n.breakCombo(),this.hud.popup("CRASH LANDING",0,{bad:!0}),this.audio.sfx("crash"),Math.random()<.5&&this._barkSet("crash"));if(t.air>1.2&&t.quality!=="CRASH"){let o=n.add(t.air*150,"Big air "+t.air.toFixed(1)+"s","air")}break}case"impact":case"wall":{let a=t.headOn===void 0?1:.4+t.headOn*.6,o=this.clockT||0;if(o-(this._impT||-9)<.18&&t.speed<(this._impV||0)*1.5){t.scrape>5&&t.x!==void 0&&this._scrapeFx(t);break}this._impT=o,this._impV=t.speed,t.speed>3&&(this.audio.sfx(t.headOn>.6||t.type==="impact"?"crash":"impact",ft(t.speed/12,.3,1)),this.cam.addShake(ft(t.speed/18,.1,.7)*a),this._hapKick=Math.max(this._hapKick||0,ft(t.speed/12,.2,1)),t.x!==void 0&&(this.fx.burst("sparks",t.x,t.y,t.z,8+t.speed*1.2,4+t.speed*.3,.3),this.fx.burst("dust",t.x,t.y,t.z,3+t.speed*.4,2.5,.6,.3,.7),t.speed>6&&this.fx.burst("splinter",t.x,t.y+.3,t.z,6,4,.4,.6))),t.scrape>5&&t.x!==void 0&&this._scrapeFx(t),r&&t.speed>7&&a>.7&&n.breakCombo();break}case"scrape":this._scrapeFx(t);break;case"damage":r&&t.amount>8&&Math.random()<.3&&this._barkSet("crash");break;case"flick":{let a=e.wheels[2];this.fx.burst(e.lastSurf===Xt.MUD?"clod":"gravel",a.cp.x,a.cp.y+.2,a.cp.z,10,5,.8,.5);break}case"bottom":this.cam.addShake(.12),this._hapKick=Math.max(this._hapKick||0,.6);break;case"nitro":this.audio.sfx("nitro"),this.cam.addShake(.25),r&&(i.nitroUsed++,this.run.noNitroS=this.carS,Math.random()<.3&&this._barkSet("nitro"));break;case"splash":if(Math.random()<.3){let a=e.wheels[2].cp;this.fx.burst("water",a.x,a.y+.3,a.z,6,5,.6,.6)}break;case"shift":this.audio.sfx("shift");break}}_scrapeFx(t){if((this._scrT||0)>0)return;this._scrT=.06;let e=this.car.vel;this.fx.emit("sparks",t.x,t.y+.2,t.z,e.x*.6+(Math.random()-.5)*2,1+Math.random()*2,e.z*.6+(Math.random()-.5)*2,1),this.fx.burst("sparks",t.x,t.y+.2,t.z,3,3,.2,.4),this.fx.burst("dust",t.x,t.y,t.z,2,1.5,.4,.2),this.audio.sfx("scrape",ft(t.scrape/20,.2,.8)),this._hapKick=Math.max(this._hapKick||0,.25),this.cam.addShake(.05)}_breakFx(){let t=this.builder.brk,e=this.score,n=this.state==="run";for(let i of t.events){let r=i.kind!=="pot"&&i.kind!=="idol";if(this.fx.burst(r?"splinter":"gravel",i.x,i.y,i.z,r?14:10,4+i.speed*.2,.6,.6),this.fx.burst("dust",i.x,i.y-.3,i.z,i.kind==="stall"||i.kind==="idol"?8:3,2.5,.8,.3,.6),this.audio.sfx(i.snd,.8),this.cam.addShake(i.kind==="idol"||i.kind==="stall"?.25:.08),this._hapKick=Math.max(this._hapKick||0,.35),n){e.stats.smashed=(e.stats.smashed||0)+1;let a=e.add(i.pts,i.label,"smash");(i.pts>=100||Math.random()<.5)&&this.hud.popup(i.label,a),this._mission("smash",1)}}t.events.length=0}_frame(t,e){let n=this.car,i=this.track,r=this.run;this.gen.ensure(this.carS+this.world.q.drawDist+260),i.trim(Math.min(this.carS,this.boulder.active?this.boulder.s:this.carS)/1-260),this.builder.update(this.carS,t),this._scrT=(this._scrT||0)-t,this.builder.brk.update(t,i,n),this.builder.brk.events.length&&this._breakFx();let a=this.gen.pieces;for(;this.pieceIdx<a.length-1&&a[this.pieceIdx].s1<=this.carS;)this.pieceIdx++;for(;this.pieceIdx>0&&a[this.pieceIdx].s0>this.carS;)this.pieceIdx--;let o=a[this.pieceIdx];r.curPiece=o,this._wheelFx(t),this._haptics(t),this.fx.update(t),this.score.update(t);let c=i.get(n.hint);if(this.tunnel=Ki(this.tunnel,c.tunnel?1:0,4,t),this.world.hemi.intensity=re(1.05,.22,this.tunnel),this.world.sun.intensity=re(3.1,.25,this.tunnel),this.attract)return this._attractLogic(t);if(this.state==="intro")return this._intro(t);if(this.boulder.active){this.boulder.update(t,this.carS,n.speed,Zn.chaserSpeedMul);{let h=this.boulder.group.position,l=ft(1-(this.boulder.gap-10)/45,0,1),u=i.get(n.hint);if(Math.random()<t*(10+l*30)){let f=Math.random()<.5?-1:1,d=3+Math.random()*3;this.fx.burst("dust",h.x+u.rx*f*d,h.y-5.6,h.z+u.rz*f*d,2+Math.round(l*4),3+l*3,2.5,.5,1+l*.8)}l>.3&&Math.random()<t*12*l&&this.fx.burst("gravel",h.x,h.y-5.5,h.z,4,6,3,.9)}}if(this.state==="dead"){r.deadT-=e,r.deadT<=0&&this.endRun(this.deathReason);return}this.state==="run"&&this._runLogic(t,o,c)}_runLogic(t,e,n){let i=this.car,r=this.run,a=this.score,o=a.stats,c=this.track,h=!0;if(r.t+=t,r.maxS=Math.max(r.maxS,this.carS),a.dist=r.maxS-r.startS,o.maxSpeed=Math.max(o.maxSpeed,i.speed),r.maxMult=Math.max(r.maxMult,a.mult),this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&(this.hud.el.banner.innerHTML="")),r.fallT>0){r.fallT-=t,r.fallT<=0&&this._respawn();return}if(i.overVoid&&i.pos.y<n.y-5.5){if(this.diff.fallDeath&&!i.invincible){this._die("LOST IN THE GORGE");return}r.fallT=1.1,r.pendingGap=null,this.cam.mode="fall",o.falls++,a.breakCombo(),this.missions.resetStreak("gapStreak"),this.audio.sfx("crash",.6),this._barkSet("fall");return}(i.flipT>1.4||i.stuckT>2.2)&&this._respawn(this.carS,!0);for(let u of this.builder.pickups){if(u.taken||Math.abs(u.s-this.carS)>5)continue;let f=u.x-i.pos.x,d=u.y-(i.pos.y+.4),m=u.z-i.pos.z,x=u.kind==="relic"?2.9:2.3;if(!(f*f+d*d*.6+m*m>x*x))if(this.builder.take(u),u.kind==="coin")a.coins+=u.value,this.audio.sfx("coin",.7),this.fx.burst("coin",u.x,u.y,u.z,5,2,.2);else if(u.kind==="nitro")i.nitro=Math.min(i.nitroCap,i.nitro+1),this.audio.sfx("coin",1.2),this.hud.popup("+1 NITRO",0);else{let p=cp(this.relicRng||(this.relicRng=new ce(this.seed^23505)),u.rare);a.relics.push(p),this.audio.sfx("relic"),this.fx.burst("relic",u.x,u.y,u.z,30,4,.5);let g=a.add(500,"RELIC: "+p.name,"setPieces");this.hud.popup("RELIC: "+p.name,g,{big:!0}),this._mission("relic",1),this._barkSet("relic",p.name)}}if((e.type==="gap"||e.type==="waterfall")&&!r.gapsDone.has(e.id)&&this.carS>e.lipS&&(r.gapsDone.add(e.id),r.pendingGap=e),r.pendingGap&&i.grounded&&this.carS>r.pendingGap.landS&&i.speed>3){let u=r.pendingGap;r.pendingGap=null,o.gaps++;let f=a.add(250+u.gapLen*12,"Gap cleared "+Math.round(u.gapLen)+" m","gaps");this.hud.popup("Gap cleared "+Math.round(u.gapLen)+" m",f),this._mission("gapStreak",1)}if(e.type==="hairpin"){let u=r.hairpins.get(e.id)||{t:0,done:!1};if(r.hairpins.set(e.id,u),i.drift>.3&&i.grounded&&(u.t+=t),!u.done&&u.t>.6&&this.carS>e.s0+(e.s1-e.s0)*.6){u.done=!0,o.hairpins++;let f=a.add(350,"Hairpin drift!","drift");this.hud.popup("Hairpin drift!",f),this._mission("hairpinDrift",1)}}if(i.drift>.45&&i.grounded&&i.speed>11){if(r.driftT+=t,r.driftT>1.2){r.driftT=0;let u=a.add(120,"Drift","drift");this.hud.popup("Drift",u)}}else r.driftT=Math.max(0,r.driftT-t*2);if(e.type==="fork"&&!r.forks.has(e.id)&&this.carS>(e.s0+e.s1)/2&&(r.forks.add(e.id),Math.sign(i.lat)===e.danger)){o.danger++;let u=a.add(400,"Danger path!");this.hud.popup("Danger path!",u),this._mission("danger",1),this._barkSet("danger")}if(e.set&&!r.announced.has(e.id)&&this.carS>e.s0-25)r.announced.add(e.id),this.hud.banner(au[e.set.type].toUpperCase(),"SET PIECE"),this.bannerT=2.4,this.audio.sfx("rumble",.5);else if(!e.set){let u=this.gen.pieces[this.pieceIdx+1];u&&u.set&&!r.announced.has(u.id)&&this.carS>u.s0-25&&(r.announced.add(u.id),this.hud.banner(au[u.set.type].toUpperCase(),"SET PIECE"),this.bannerT=2.4,this.audio.sfx("rumble",.5))}(o.nitroUsed===0||this.carS-r.noNitroS>0)&&this._mission("noNitroDist",this.carS-r.noNitroS,!0),Math.floor(r.t*2)!==Math.floor((r.t-t)*2)&&(this._mission("distance",a.dist,!0),this._mission("coins",a.coins,!0),this._mission("airtime",o.air,!0),this.hud.missions(this.missions.active)),i.grounded?r.slowJump=!1:!r.slowJump&&i.airTime>.3&&Math.abs(i.vel.y)<2.2&&i.pos.y-i.groundH>3.2&&i.speed>18&&this.save.settings.slowmo!==!1&&(r.slowJump=!0,this.slow={t:.75,scale:.42},this.audio.sfx("swoosh",.6));let l=this.boulder.gap;if(l<12&&!r.close&&(r.close=!0),r.close&&l>24){r.close=!1;let u=a.add(300,"Close call!","nearMiss");this.hud.popup("Close call!",u),this._mission("boulderClose",1)}if(l<18&&Math.random()<t*.25&&this._barkSet("close"),this._bCd=Math.max(0,(this._bCd||0)-t),this.boulder.active&&l<14){let u=this.boulder,f=u.pos,d=i.pos.x-f.x,m=i.pos.y-f.y,x=i.pos.z-f.z,p=Math.hypot(d,m,x),g=u.R*.93+1.5;if(p<g){let v=d/p,_=Math.max(.15,m/p),y=x/p,R=Math.hypot(v,_,y),w=c.get(i.hint),C=w.fx*u.v,P=w.fz*u.v,M=((C-i.vel.x)*v+(0-i.vel.y)*_+(P-i.vel.z)*y)/R;if(i.pos.x+=v/R*(g-p)*.6,i.pos.z+=y/R*(g-p)*.6,M>0){let b=i.T.mass*M*1.25,E=this._tmp2||(this._tmp2=new A);E.set(i.pos.x-v*1.6,i.pos.y+.3,i.pos.z-y*1.6),i.applyImpulse(E,(this._tmp3||(this._tmp3=new A)).set(v/R*b,_/R*b*.6,y/R*b)),this._bCd||(this._bCd=.7,this.cam.addShake(.9),this.audio.sfx("slam",.9),this._hapKick=1,this.fx.burst("dust",E.x,E.y,E.z,24,5,1.5,.4),this.fx.burst("sparks",E.x,E.y,E.z,16,6,.5),i.invincible||i.damage(14+M*3,"boulder"),h&&(this.hud.popup("BOULDER HIT!",0,{bad:!0}),this.score.breakCombo()))}}}if(l<5.6)if(i.invincible)this.boulder.s-=25;else{i.hp=0,this.cam.addShake(1.2),this._die("FLATTENED BY THE BOULDER");return}if(!r.lowHp&&i.hp<i.maxHp*.3&&(r.lowHp=!0,this._barkSet("lowhp")),i.hp<=0){this._die("OLD BESSIE GAVE OUT");return}r.brakeHint=!1;for(let u=15;u<75;u+=6){let f=this.track.sampleAtS(this.carS+u);if(f.hairpin){let d=Ts(1/Math.max(Math.abs(f.k),.001));i.speed>d+5+u*.12&&(r.brakeHint=!0);break}}}_respawn(t,e){let n=this.car,i=this.track,r=this.run,a=Math.max(t??this.carS,r.maxS-40),o=d=>{let m=i.sampleAtS(d);return m.gap||m.hole||m.bridge||m.ford||m.ramp>0};e||(a+=4);for(let d=0;d<400;d++){let m=!0;for(let x=-2;x<14;x+=2)if(o(a+x)){m=!1;break}if(m)break;a+=2}let c=this.builder.obstacles.filter(d=>d.active&&d.solid!==!1),h=(d,m,x)=>c.some(p=>{let g=p.x,v=p.z;if(p.x2!==void 0){let _=p.x2-p.x,y=p.z2-p.z,R=_*_+y*y,w=ft(((d-p.x)*_+(m-p.z)*y)/(R||1),0,1);g=p.x+_*w,v=p.z+y*w}return Math.hypot(d-g,m-v)<p.r+2.6&&x+1.5>p.yMin&&x-1<p.yMax}),l=0,u=i.sampleAtS(a),f;for(let d=0;d<40;d++){u=i.sampleAtS(a);let m=u.fork>0?Math.sign(n.lat||1)*u.fork:0,x=!1;for(let p of[0,2,-2,3.5,-3.5,5,-5])if(!(Math.abs(p)>u.hw-1.4)&&(f=i.pointAt(a,m+p,this._tmp),!h(f.x,f.z,f.y)&&!o(a+6))){l=m+p,x=!0;break}if(x)break;a+=4}f=i.pointAt(a,l,this._tmp),n.reset(f.x,f.y+1,f.z,u.th,e?6:14,u.i),n.damage(e?4:14,e?"jolt":"fall"),this.prevPos.copy(n.pos),this.prevQ.copy(n.q),this.carS=a,this.cam.mode=this.save.settings.hoodCam?"hood":"chase",this.cam.snap(),this.boulder.gap<30&&(this.boulder.s=a-30),r.fallT=0,e||this.hud.popup("Back on track",0,{bad:!0})}_intro(t){let e=this.introFlags;this.introT+=t;let n=this.introT;!e.a&&n>.3&&(e.a=!0,this.bark("dusty",pp.start[0][1],!0)),!e.b&&n>1.3&&(e.b=!0,this.audio.sfx("rumble"),this.cam.addShake(.35)),!e.c&&n>1.9&&(e.c=!0,this.bark("penny","Dusty\u2026 what is that noise?",!0)),!e.d&&n>2.6&&(e.d=!0,this.builder.templeGate&&this.builder.templeGate.burst(),this.boulder.start(this.boulder.s,this.diff.chaser),this.boulder.t=1.2),e.d&&this.boulder.update(t,this.carS,0,Zn.chaserSpeedMul*.6),!e.e&&n>3.3&&(e.e=!0,this.bark("dusty","Oh no.",!0)),n>4.1&&this._go(!1)}_attractLogic(t){let e=this.car;if(this.orbitT+=t,e.flipT>1||e.stuckT>2||e.overVoid&&e.pos.y<this.track.get(e.hint).y-5||this.carS>4e3)if(this.carS>4e3)this._startAttract();else{let n=this.run;this.run={maxS:this.carS},this._respawn(this.carS,!0),this.run=n,e.hp=e.maxHp}for(let n of this.builder.pickups)!n.taken&&Math.abs(n.s-this.carS)<2.5&&this.builder.take(n)}_wheelFx(t){let e=this.car;if(!e.grounded||e.speed<3)return;let n=this.world.q.particles,i=e.speed,r=e.throttle||0,a=o=>Math.random()<o*n*t;for(let o=0;o<4;o++){let c=e.wheels[o];if(!c.contact)continue;let h=o>=2,l=Math.abs(c.slipLat)+e.drift*.6+(h?Math.abs(c.slipLong||0)*.8:0),u=-e.vel.x*.18,f=-e.vel.z*.18,d=e.left.x*c.side,m=e.left.z*c.side,x=c.cp.x,p=c.cp.y+.12,g=c.cp.z,v=()=>(Math.random()-.5)*2;switch(c.surf){case Xt.DIRT:h&&a((i/30+l*2.2)*22)&&this.fx.emit("dust",x,p+.1,g,u+v(),.6+Math.random(),f+v(),.5+l*.6),h&&a(l*60+r*i*.4)&&this.fx.emit("gravel",x,p,g,u*1.4+d*2+v()*1.5,1.5+Math.random()*2.5,f*1.4+m*2+v()*1.5,1);break;case Xt.MUD:case Xt.JUNGLE:a((i/25+l*2)*(h?26:8))&&this.fx.emit("clod",x,p,g,u*1.2+d*1.5+v()*1.2,2+Math.random()*3.5,f*1.2+m*1.5+v()*1.2,1),a((i/30+l)*10)&&this.fx.emit("mud",x,p,g,u+v(),.8+Math.random()*3,f+v(),1);break;case Xt.WATER:a(i*(h?1.3:.9))&&this.fx.emit("spray",x,p+.1,g,u*.6+d*(1.5+i*.12)+v(),1.5+i*.12+Math.random()*2,f*.6+m*(1.5+i*.12)+v(),.7+i*.02);break;case Xt.STONE:h&&l>.3&&a(l*30)&&this.fx.emit("smoke",x,p+.1,g,u+v(),.6,f+v(),1),h&&a(i/30*3)&&this.fx.emit("dust",x,p,g,u+v(),.3,f+v(),.35);break;case Xt.PLANK:h&&l>.25&&a(l*20)&&this.fx.emit("splinter",x,p,g,u+v(),1.2+Math.random(),f+v(),.6);break}}}_haptics(t){let e=this.input.lastDevice==="pad"&&navigator.getGamepads?[...navigator.getGamepads()].find(h=>h&&h.vibrationActuator):null;if(this._hapT=(this._hapT||0)-t,this._hapKick=Math.max(0,(this._hapKick||0)-t*3),!e||this._hapT>0||this.save.settings.rumble===!1)return;this._hapT=.07;let n=this.car,i=Math.min(1,n.speed/30),r=n.lastSurf,a=n.grounded?([.12,.2,.32,.38,.22,.42,0][r]||0)*i:0,o=Math.min(1,a+this._hapKick+(this.boulder.active?Math.max(0,1-(this.boulder.gap-8)/50)*.25:0)),c=Math.min(1,(n.grounded?Math.abs(n.slipAngle)*1.6+n.drift*.4:0)+(n.nitroing?.25:0));if(!(o<.02&&c<.02))try{e.vibrationActuator.playEffect("dual-rumble",{startDelay:0,duration:90,strongMagnitude:o,weakMagnitude:c})}catch{}}render(t,e,n){let i=this.car,r=this.world;this.rPos.lerpVectors(this.prevPos,i.pos,this.alpha),this.rQ.slerpQuaternions(this.prevQ,i.q,this.alpha);let a=this.tunnel>.3||this.state==="intro";this.car3d.sync(i,this.rPos,this.rQ,e,this.time.value,{headlights:a,lookBack:this.boulder.active&&this.boulder.gap<30});let o=this._camCtx||(this._camCtx={}),c=this.track.pointAt(this.carS+16,(i.lat||0)*.5,this._ahead);o.ahead=this._ahead.set(c.x,c.y+1,c.z);let h=this.track.get(i.hint),l=!i.grounded&&i.airTime>.3&&(h.gap||h.ramp>0||i.overVoid);if(l&&!this._wasCine&&(this.cam.cineSide=-this.cam.cineSide),this._wasCine=l,o.cine=l&&this.state==="run"&&!(this.run.curPiece&&this.run.curPiece.type==="waterfall"),o.rumble=this.boulder.active?ft(1-(this.boulder.gap-10)/60,0,1):0,o.override=null,this.attract?o.override=this._orbit():this.state==="intro"&&(o.override=this._introCam()),this.test&&this.test.camRel){let x=this.test.camRel,p=this._tc||(this._tc={pos:new A,look:new A,k:1e4});p.pos.copy(this.rPos).addScaledVector(i.left,x[0]).addScaledVector(i.up,x[1]).addScaledVector(i.fwd,x[2]),p.look.copy(this.rPos).addScaledVector(i.up,x[4]??.2).addScaledVector(i.fwd,x[3]??.2),o.override=p}this.cam.update(t,i,this.rPos,o),r.follow(this.rPos);let u=this.state==="run"||this.state==="dead"?o.rumble:0;this.flash=Math.max(0,this.flash-t*1.6),this.post.grade.uniforms.danger.value=u*.55,this.post.grade.uniforms.flash.value=this.flash;{let x=Math.max(this.cam.cine,this.state==="intro"?.6:0,this.slow&&this.slow.t>0?.8:0);this.post.dof+=(x-this.post.dof)*Math.min(1,t*4),this.post.focus.copy(this.rPos)}let f=Pn("vign"),d=(u*.5).toFixed(2);if(f._a!==d&&(f._a=d,f.style.boxShadow=`inset 0 0 160px 40px rgba(200,30,10,${d})`),(this.state==="run"||this.state==="dead"||this.state==="intro")&&this._hud(t),this.audio.update(t,{rpm:i.rpm,throttle:i.throttle||0,nitro:i.nitroing,running:this.state!=="results"&&this.state!=="pause",slip:Math.abs(i.slipAngle)*2+i.drift*.5,grounded:i.grounded,speed:i.speed,surf:i.lastSurf,inWater:i.lastSurf===Xt.WATER&&i.grounded,boulder:this.boulder.active?o.rumble:0,intensity:this.state==="run"?.3+o.rumble*.7:.2}),n)return;r.renderer.info.autoReset=!1,r.renderer.info.reset(),r.lost||this.post.render(t,this.time.value);let m=r.renderer.info;this.perf.calls=m.render.calls,this.perf.tris=m.render.triangles,this.debug.update(t,{fps:this.perf.fps,frameMs:this.perf.realMs,simMs:this.perf.simMs,calls:m.render.calls,tris:m.render.triangles,quality:r.qualityName,res:r.resScale,gap:this.boulder.gap||0,bv:this.boulder.v||0,piece:this.run.curPiece?this.run.curPiece.type:"-",built:this.builder.stats(),particles:this.fx.count})}_orbit(){let t=this.rPos,e=this.orbitT*.16,n=this.state==="museum"?9:11,i=this._orb||(this._orb={pos:new A,look:new A,k:3}),r=this.car.fwd,a=Math.atan2(r.x,r.z)+Math.PI*.75+Math.sin(e)*.9;return i.pos.set(t.x+Math.sin(a)*n,t.y+2.6+Math.sin(e*.7)*.8,t.z+Math.cos(a)*n),i.look.set(t.x+r.x*4,t.y+.9,t.z+r.z*4),i}_introCam(){let t=this.car,e=this.rPos,n=this.introT,i=this._ic||(this._ic={pos:new A,look:new A,k:3}),r=new A(-t.fwd.z,0,t.fwd.x);if(n<1.8)i.pos.copy(e).addScaledVector(t.fwd,7.5-n*.6).addScaledVector(r,2.2),i.pos.y+=1.8,i.look.copy(e),i.look.y+=1.2,i.k=4;else{let a=this.builder.templeGate?this.builder.templeGate.doorPos:e;i.pos.copy(e).addScaledVector(t.fwd,8).addScaledVector(r,3),i.pos.y+=2.6,i.look.copy(a),i.look.y+=4,i.look.lerp(e,.25),i.k=3}return i}_hud(t){let e=this.car,n=this.score,i=this.run,r=this.track,a=this._pts||(this._pts=[]);a.length=0;for(let u=Math.max(r.base+1,this.carS-70);u<this.carS+170;u+=6){let f=r.sampleAtS(u);a.push({x:f.x,z:f.z,mark:null})}for(let u of this.gen.pieces){if(u.s0<this.carS-20||u.s0>this.carS+170)continue;let f=r.sampleAtS(u.s0);u.set?a.push({x:f.x,z:f.z,mark:"set"}):u.type==="fork"&&a.push({x:f.x,z:f.z,mark:"fork"})}let o=a.filter(u=>!u.mark),c=a.filter(u=>u.mark),h=this._hd||(this._hd={});h.dist=i.maxS-i.startS,h.coins=n.coins,h.relics=n.relics.length,h.score=n.total,h.mult=n.mult,h.gap=this.boulder.active?this.boulder.gap:80,h.brakeHint=i.brakeHint,h.colorblind=this.save.settings.colorblind,h.trackPts=o,h.marks=c,h.heading=Math.atan2(e.fwd.x,e.fwd.z),h.cx=e.pos.x,h.cz=e.pos.z;let l=this.boulder.group.position;h.bx=this.boulder.active?l.x:void 0,h.bz=l.z,h.speed=e.speed,h.gear=e.gear,h.nitroing=e.nitroing,h.nitro=e.nitro,h.nitroCap=e.nitroCap,h.hp=e.hp,h.maxHp=e.maxHp,h.trackPts=o.concat(c),this.hud.update(t,h)}_autoQuality(t){let e=this.perf;if(e.fps=re(e.fps,1/Math.max(t,.001),.05),this.save.settings.quality!=="auto"||this.test.fixed||this.state!=="run"||(e.winT+=t,e.win+=t,e.winN++,e.winT<2.5))return;let n=e.winN/e.win;e.winT=0,e.win=0,e.winN=0;let i=this.world;n<45?i.resScale>.75?(i.resScale=Math.max(.7,i.resScale-.1),i.resize()):i.qualityName!=="low"&&(i.setQuality(i.qualityName==="high"?"medium":"low"),this.post.enabled=i.q.bloom,i.resScale=.9,i.resize()):n>58&&i.resScale<1&&(i.resScale=Math.min(1,i.resScale+.05),i.resize())}};function mp(){try{new Au}catch(t){console.error(t),document.getElementById("loading").textContent="Error: "+t.message;return}let s=document.getElementById("loading");s.style.opacity=0,setTimeout(()=>s.remove(),700)}document.fonts&&document.fonts.load?Promise.race([Promise.all([document.fonts.load("900 40px Cinzel"),document.fonts.load("700 20px Zilla"),document.fonts.load("600 20px Oswald")]),new Promise(s=>setTimeout(s,1500))]).then(()=>setTimeout(mp,30)):mp();})();
