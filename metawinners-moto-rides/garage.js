import * as THREE from './vendor/three.module.js';
import { createRiderBike, animateRiderBike, disposeRiderBike } from './models.js';

/** Fit the actual headgear, collar and chest, including narrow phone viewports. */
export function getPortraitFraming(model,aspect=1,fov=34){
  model.updateWorldMatrix(true,true);
  const head=model.userData?.head,torso=model.userData?.torso;
  if(!head||!torso)return{distance:1.82,focusY:1.43,focusX:0,focusZ:0,elevation:.86};
  const bounds=new THREE.Box3().setFromObject(torso),headBounds=new THREE.Box3().setFromObject(head);bounds.min.y=Math.max(bounds.min.y,.86);bounds.union(headBounds).expandByScalar(.025);
  return fitStudioBounds(bounds,aspect,fov);
}
function fitStudioBounds(bounds,aspect,fov){
  const center=bounds.getCenter(new THREE.Vector3()),camera=new THREE.PerspectiveCamera(fov,Math.max(.45,aspect),.05,60),point=new THREE.Vector3();
  const fits=distance=>{
    let extent=0;for(let angleIndex=0;angleIndex<8;angleIndex++){const angle=3.02+angleIndex*Math.PI/4;camera.position.set(center.x+Math.sin(angle)*distance,center.y+.1,center.z+Math.cos(angle)*distance);camera.lookAt(center);camera.updateMatrixWorld(true);
      for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){point.set(x,y,z).project(camera);if(point.z<=-1||point.z>=1)return false;extent=Math.max(extent,Math.abs(point.x),Math.abs(point.y));}
    }
    return extent<=.88;
  };
  let near=.5,far=2;for(let i=0;i<16&&!fits(far);i++)far*=1.5;
  for(let i=0;i<14;i++){const middle=(near+far)/2;if(fits(middle))far=middle;else near=middle;}
  const distance=far;
  return{distance,focusY:center.y,focusX:center.x,focusZ:center.z,elevation:center.y*.55+.1,bounds};
}
/** Cache one full attack envelope per selected model; no mesh bounds run in the render loop. */
export function getStrikeFraming(model,aspect=1,fov=34){
  if(!model.userData?.weapon)return{distance:3,focusY:1.2,focusX:0,focusZ:0,elevation:.86};
  let bounds=model.userData.studioStrikeBounds;
  if(!bounds){
    bounds=new THREE.Box3().setFromObject(model.userData.torso);bounds.min.y=Math.max(.86,bounds.min.y);const part=new THREE.Box3();
    for(const side of [-1,1])for(let i=1;i<20;i++){animateRiderBike(model,{speed:0,time:0,attack:i/20,attackSide:side},1/60);model.updateMatrixWorld(true);for(const object of [model.userData.weapon,model.userData.armLeft,model.userData.armRight,model.userData.head])bounds.union(part.setFromObject(object));}
    for(let i=0;i<30;i++)animateRiderBike(model,{speed:0,time:0,attack:0},1/60);bounds.expandByScalar(.035);model.userData.studioStrikeBounds=bounds;
  }
  return fitStudioBounds(bounds,aspect,fov);
}

/** An interactive, on-demand studio preview of the actual race model. */
export class GaragePreview {
  constructor(canvas) {
    this.disposed=false;this.inView=true;this.pointer=null;this.reducedMotion=!!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;this.autoRotate=!this.reducedMotion;this.canvas=canvas;this.running=false;this.frame=0;this.last=0;this.time=0;this.view='portrait';this.pose='idle';this.poseTime=0;this.poseState={speed:0,lean:0,steer:0,attack:0,attackSide:1,boost:false,hit:0,crash:0,time:0};this.cameraPosition=new THREE.Vector3();this.cameraLook=new THREE.Vector3();this.cameraTarget=new THREE.Vector3();this.cameraInitialized=false;this.angle=2.48;this.elevation=1.15;this.distance=4;this.dragging=false;this.lastInteraction=0;
    this.renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'low-power'});
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,window.matchMedia?.('(pointer: coarse)').matches?1.25:1.6));
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.05;
    this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    this.scene=new THREE.Scene();this.scene.background=new THREE.Color('#0c0d10');this.scene.fog=new THREE.Fog('#0c0d10',12,28);this.scene.environmentIntensity=.78;
    this.camera=new THREE.PerspectiveCamera(34,1,.05,60);
    this.scene.add(new THREE.HemisphereLight('#c8d5dc','#192126',1.35));
    this.key=new THREE.DirectionalLight('#f1f9ff',3.2);this.key.position.set(-3,5,-4);this.key.castShadow=true;this.key.shadow.mapSize.set(1024,1024);this.key.shadow.camera.left=-4;this.key.shadow.camera.right=4;this.key.shadow.camera.top=4;this.key.shadow.camera.bottom=-4;this.key.shadow.camera.near=.1;this.key.shadow.camera.far=16;this.key.shadow.bias=-.001;this.scene.add(this.key);
    const cool=new THREE.DirectionalLight('#9ce3f4',1.5);cool.position.set(4,2,1);this.scene.add(cool);
    this.rim=new THREE.PointLight('#75f4ed',15,10,2);this.rim.position.set(-2,2.4,2.5);this.scene.add(this.rim);
    const front=new THREE.DirectionalLight('#ffffff',.55);front.position.set(0,1,-5);this.scene.add(front);
    this.studio=new THREE.Group();this.scene.add(this.studio);
    const floor=new THREE.Mesh(new THREE.PlaneGeometry(80,80),new THREE.MeshStandardMaterial({color:'#17191e',roughness:.38,metalness:.28}));floor.rotation.x=-Math.PI/2;floor.position.y=-.08;floor.receiveShadow=true;this.studio.add(floor);
    const podium=new THREE.Mesh(new THREE.CylinderGeometry(2.08,2.15,.08,80),new THREE.MeshStandardMaterial({color:'#24262c',roughness:.3,metalness:.75}));podium.position.y=-.045;podium.receiveShadow=true;this.studio.add(podium);
    this.ring=new THREE.Mesh(new THREE.TorusGeometry(2.1,.012,8,96),new THREE.MeshBasicMaterial({color:'#75f4ed'}));this.ring.rotation.x=Math.PI/2;this.ring.position.y=-.005;this.studio.add(this.ring);
    const lines=new THREE.GridHelper(36,36,'#51493b','#28292b');lines.position.y=-.07;lines.material.transparent=true;lines.material.opacity=.22;this.studio.add(lines);
    // Tall studio practicals frame the real model and produce clean armor highlights.
    for(const side of [-1,1]){const plinth=new THREE.Mesh(new THREE.BoxGeometry(.24,3.7,.24),new THREE.MeshStandardMaterial({color:'#11151a',roughness:.35,metalness:.7}));plinth.position.set(side*2.7,1.77,1.4);this.studio.add(plinth);const strip=new THREE.Mesh(new THREE.BoxGeometry(.022,3.15,.252),new THREE.MeshBasicMaterial({color:side<0?'#ddbb77':'#dbe9ed'}));strip.position.copy(plinth.position);this.studio.add(strip);}
    const mark=document.createElement('canvas');mark.width=1024;mark.height=192;const markContext=mark.getContext('2d');if(markContext){markContext.fillStyle='#9eb7bf';markContext.font='600 82px sans-serif';markContext.textAlign='center';markContext.fillText('M E T A W I N N E R S',512,110);this.brandTexture=new THREE.CanvasTexture(mark);this.brandTexture.colorSpace=THREE.SRGBColorSpace;const brand=new THREE.Mesh(new THREE.PlaneGeometry(2.4,.45),new THREE.MeshBasicMaterial({map:this.brandTexture,transparent:true,opacity:.33,depthWrite:false}));brand.rotation.x=-Math.PI/2;brand.rotation.z=Math.PI;brand.position.set(0,.002,-1.65);this.studio.add(brand);}
    this._makeEnvironment();
    this._down=e=>{if(this.disposed||this.pointer!==null||e.button>0)return;e.preventDefault();this.pointer=e.pointerId;this.touchDrag=e.pointerType==='touch';this.dragging=true;this.lastX=e.clientX;this.lastY=e.clientY;this.lastInteraction=performance.now();canvas.setPointerCapture?.(e.pointerId);canvas.classList.add('dragging');};
    this._move=e=>{if(!this.dragging||e.pointerId!==this.pointer)return;e.preventDefault();this.angle-=(e.clientX-this.lastX)*.009;if(!this.touchDrag)this.elevation=THREE.MathUtils.clamp(this.elevation+(e.clientY-this.lastY)*.006,.65,2.8);this.lastX=e.clientX;this.lastY=e.clientY;this.lastInteraction=performance.now();};
    this._up=e=>{if(e&&e.pointerId!==this.pointer)return;this.pointer=null;this.dragging=false;this.lastInteraction=performance.now();canvas.classList.remove('dragging');};
    this._wheel=e=>{e.preventDefault();this.distance=THREE.MathUtils.clamp(this.distance+e.deltaY*.003,this.view==='portrait'?1.3:3.1,this.viewMaxDistance||6.2);this.lastInteraction=performance.now();};
    this._key=e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','-'].includes(e.key))return;e.preventDefault();e.stopPropagation();if(e.key==='ArrowLeft')this.angle-=.16;if(e.key==='ArrowRight')this.angle+=.16;if(e.key==='ArrowUp')this.elevation=Math.min(2.8,this.elevation+.15);if(e.key==='ArrowDown')this.elevation=Math.max(.65,this.elevation-.15);if(e.key==='+')this.distance=Math.max(this.view==='portrait'?1.3:3.1,this.distance-.25);if(e.key==='-')this.distance=Math.min(this.viewMaxDistance||6.2,this.distance+.25);this.lastInteraction=performance.now();};
    this._resize=()=>this.resize();
    canvas.addEventListener('pointerdown',this._down);canvas.addEventListener('pointermove',this._move);canvas.addEventListener('pointerup',this._up);canvas.addEventListener('pointercancel',this._up);canvas.addEventListener('lostpointercapture',this._up);canvas.addEventListener('wheel',this._wheel,{passive:false});canvas.addEventListener('keydown',this._key);window.addEventListener('resize',this._resize);
    if(typeof ResizeObserver!=='undefined'){this.observer=new ResizeObserver(this._resize);this.observer.observe(canvas);}
    if(typeof IntersectionObserver!=='undefined'){this.visibilityObserver=new IntersectionObserver(entries=>{const entry=entries.find(item=>item.target===canvas);if(!entry||this.disposed)return;this.inView=entry.isIntersecting;if(this.inView)this.resume();else this.pause();},{threshold:0});this.visibilityObserver.observe(canvas);}
    this.resize();
  }
  _makeEnvironment(){
    const c=document.createElement('canvas');c.width=512;c.height=256;const ctx=c.getContext('2d');if(!ctx)return;
    const g=ctx.createLinearGradient(0,0,0,256);g.addColorStop(0,'#c8e1ed');g.addColorStop(.36,'#829eac');g.addColorStop(.52,'#213c4c');g.addColorStop(1,'#07121b');ctx.fillStyle=g;ctx.fillRect(0,0,512,256);
    ctx.fillStyle='#ffffff';ctx.fillRect(45,38,55,105);ctx.fillRect(270,20,90,72);ctx.fillStyle='#b4c9ef';ctx.fillRect(410,44,34,132);
    const texture=new THREE.CanvasTexture(c);texture.mapping=THREE.EquirectangularReflectionMapping;texture.colorSpace=THREE.SRGBColorSpace;
    const pmrem=new THREE.PMREMGenerator(this.renderer);this.environment=pmrem.fromEquirectangular(texture);this.scene.environment=this.environment.texture;texture.dispose();pmrem.dispose();
  }
  setRider(rider,weapon='bat'){
    if(this.disposed)return;
    const next=createRiderBike(rider,{weapon,quality:'high'});
    if(this.model){this.scene.remove(this.model);this._disposeModel(this.model);}
    this.model=next;this.scene.add(this.model);
    this.model.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
    const box=new THREE.Box3().setFromObject(this.model),size=box.getSize(new THREE.Vector3());this.focusY=Math.max(.7,(box.min.y+box.max.y)*.5);const visibleHeight=Math.max(size.y,Math.max(size.x,size.z)/Math.max(.8,this.camera.aspect));this.distance=THREE.MathUtils.clamp(visibleHeight/(2*Math.tan(THREE.MathUtils.degToRad(this.camera.fov/2)))*1.23,3.3,5.8);
    this.defaultFocus=this.focusY;this.defaultDistance=this.distance;this.rim.color.set(rider.model?.glow||rider.color||'#75f4ed');this.ring.material.color.set(rider.model?.glow||rider.color||'#75f4ed');this.setView(this.view);this.resume();
  }
  setView(view='hero'){this.view=['hero','portrait','rear'].includes(view)?view:'hero';this.focusY=this.defaultFocus||.93;this.focusX=0;this.focusZ=0;this.distance=this.defaultDistance||4;this.elevation=1.15;if(this.view==='portrait'){const framing=this.model?(this.pose==='strike'?getStrikeFraming:getPortraitFraming)(this.model,this.camera.aspect,this.camera.fov):{distance:1.82,focusY:1.43,focusX:0,focusZ:0,elevation:.86};Object.assign(this,framing);this.angle=3.02;}else if(this.view==='rear'){this.angle=.45;this.elevation=1.05;}else this.angle=2.48;this.viewMaxDistance=this.view==='portrait'?Math.max(3.5,this.distance+1.2):6.2;this.lastInteraction=performance.now();}
  setPose(pose='idle'){this.pose=['idle','corner','strike'].includes(pose)?pose:'idle';this.poseTime=0;this.setView(this.view);}
  zoomBy(amount){if(this.disposed||!Number.isFinite(amount))return;this.distance=THREE.MathUtils.clamp(this.distance+amount,this.view==='portrait'?1.3:3.1,this.viewMaxDistance||6.2);this.lastInteraction=performance.now();}
  setAutoRotate(enabled){this.autoRotate=!!enabled;this.lastInteraction=performance.now();}
  _disposeModel(model){disposeRiderBike(model);}
  resize(){if(this.disposed)return;const r=this.canvas.getBoundingClientRect();const w=Math.max(1,r.width),h=Math.max(1,r.height),aspect=w/h,changed=Math.abs(this.camera.aspect-aspect)>.001;this.renderer.setSize(w,h,false);this.camera.aspect=aspect;this.camera.updateProjectionMatrix();if(changed&&this.model&&this.view==='portrait')this.setView(this.view);}
  _tick(t){if(!this.running||this.disposed)return;if(document.hidden){this.pause();return;}const dt=this.last?Math.min((t-this.last)/1000,.04):.016;this.last=t;this.time+=dt;this.poseTime+=dt;if(this.autoRotate&&!this.dragging&&t-this.lastInteraction>2600)this.angle+=dt*.11;
    if(this.model){const state=this.poseState,cycle=this.poseTime%2.4;state.time=this.reducedMotion?0:this.time;state.lean=this.pose==='corner'?.48:0;state.steer=this.pose==='corner'?.38:0;state.steeringAngle=this.pose==='corner'?.07:0;state.attack=this.pose==='strike'?(this.reducedMotion?.5:cycle<.58?1-cycle/.58:0):0;state.attackSide=this.reducedMotion?1:Math.floor(this.poseTime/2.4)%2?-1:1;this.model.rotation.z+=(state.lean*.38-this.model.rotation.z)*(this.reducedMotion?1:1-Math.exp(-dt*10));animateRiderBike(this.model,state,dt);}
    this.cameraPosition.set((this.focusX||0)+Math.sin(this.angle)*this.distance,this.elevation+this.focusY*.45,(this.focusZ||0)+Math.cos(this.angle)*this.distance);this.cameraLook.set(this.focusX||0,this.focusY||1,this.focusZ||0);if(!this.cameraInitialized||this.reducedMotion){this.camera.position.copy(this.cameraPosition);this.cameraTarget.copy(this.cameraLook);this.cameraInitialized=true;}else{const blend=1-Math.exp(-dt*10);this.camera.position.lerp(this.cameraPosition,blend);this.cameraTarget.lerp(this.cameraLook,blend);}this.camera.lookAt(this.cameraTarget);this.renderer.render(this.scene,this.camera);this.frame=requestAnimationFrame(v=>this._tick(v));
  }
  pause(){this.running=false;cancelAnimationFrame(this.frame);this.frame=0;this.last=0;const pointer=this.pointer;this._up();if(pointer!==null)try{this.canvas.releasePointerCapture?.(pointer);}catch{}}
  resume(){if(this.running||this.disposed||document.hidden||!this.inView)return;this.running=true;this.last=0;this.resize();this.frame=requestAnimationFrame(v=>this._tick(v));}
  dispose(){if(this.disposed)return;this.pause();this.disposed=true;this.observer?.disconnect();this.visibilityObserver?.disconnect();window.removeEventListener('resize',this._resize);for(const[type,fn]of[['pointerdown',this._down],['pointermove',this._move],['pointerup',this._up],['pointercancel',this._up],['lostpointercapture',this._up],['wheel',this._wheel],['keydown',this._key]])this.canvas.removeEventListener(type,fn);if(this.model){this.scene.remove(this.model);this._disposeModel(this.model);this.model=null;}this.studio.traverse(o=>{o.geometry?.dispose();if(o.material){for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});this.brandTexture?.dispose();this.environment?.dispose();this.key.shadow.dispose();this.renderer.dispose();}
}
