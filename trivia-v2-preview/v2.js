/* Tournament Trivia v2 visuals. Keeps score hooks untouched. */
(function(){
  const ready = () => new Promise(res=>{
    if (window.TQ) return res();
    const t = setInterval(()=>{ if(window.TQ){ clearInterval(t); res(); } }, 50);
    setTimeout(()=>{ clearInterval(t); res(); }, 15000);
  });

  function sparks(kind){
    const root = document.getElementById('v2fx') || (function(){
      const d=document.createElement('div'); d.id='v2fx'; document.body.appendChild(d); return d;
    })();
    const n = kind==='good'? 28 : kind==='lock'? 12 : 8;
    const color = kind==='bad'? '#ff5a3a' : '#ffd36a';
    for(let i=0;i<n;i++){
      const s=document.createElement('i');
      s.className='v2-spark';
      s.style.background=color;
      s.style.left=(40+Math.random()*20)+'%';
      s.style.top=(45+Math.random()*20)+'%';
      s.style.setProperty('--dx', (Math.random()-.5)*420+'px');
      s.style.setProperty('--dy', (Math.random()*-320-20)+'px');
      s.style.animationDuration=(.6+Math.random()*.5)+'s';
      root.appendChild(s);
      setTimeout(()=>s.remove(), 1100);
    }
  }

  function shake(){
    document.body.classList.add('v2-shake');
    setTimeout(()=>document.body.classList.remove('v2-shake'), 450);
  }

  function watchFlash(){
    const flash=document.getElementById('flash');
    if(!flash) return;
    const mo=new MutationObserver(()=>{
      if(flash.classList.contains('good')) sparks('good');
      if(flash.classList.contains('bad')){ sparks('bad'); shake(); }
      if(flash.classList.contains('lock')) sparks('lock');
    });
    mo.observe(flash,{attributes:true,attributeFilter:['class']});
  }

  function enhanceStudio(){
    const st = window.TQ && window.TQ.studio;
    if(!st || !st.scene || !window.THREE && !st.THREE) return;
    const Z = st.THREE;
    if(!Z) return;
    // Lights — no shadows, cheap, gold/orange
    try{
      if(st.renderer && st.renderer.toneMappingExposure!=null){
        st.renderer.toneMappingExposure = Math.max(st.renderer.toneMappingExposure||1.25, 1.35);
      }
      const key = new Z.SpotLight(0xffc14a, 40, 48, 0.42, 0.55, 1.3);
      key.position.set(-4, 13, 6);
      key.target.position.set(0, 0, 0);
      st.scene.add(key, key.target);
      const rim = new Z.PointLight(0xff6a20, 18, 28, 1.5);
      rim.position.set(0, 2.2, 4);
      st.scene.add(rim);
      // LED wash planes (additive, low cost)
      const ledMat = new Z.MeshBasicMaterial({
        color: 0xff8a20, transparent:true, opacity:.07,
        blending: Z.AdditiveBlending, depthWrite:false, side: Z.DoubleSide
      });
      const led = new Z.Mesh(new Z.CylinderGeometry(16.2,16.2,6,48,1,true, Math.PI*.5, Math.PI), ledMat);
      led.position.set(0, 5.2, 3.5);
      led.rotation.y = Math.PI;
      st.scene.add(led);
      st._v2 = {key, rim, led, t:0};
    }catch(e){ /* keep 60fps path even if enhance fails */ }
  }

  window.TQv2 = {
    tick(dt){
      const v = window.TQ && window.TQ.studio && window.TQ.studio._v2;
      if(!v) return;
      v.t += dt;
      if(v.led && v.led.material){
        v.led.material.opacity = 0.05 + Math.sin(v.t*2.1)*0.025;
      }
      if(v.rim){ v.rim.intensity = 16 + Math.sin(v.t*1.4)*4; }
    }
  };

  ready().then(()=>{
    // Unnamed host label if the build still has a name
    const tag=document.getElementById('hostTag');
    if(tag) tag.textContent='THE HOST';
    watchFlash();
    // Studio hook may appear slightly after TQ
    let n=0;
    const i=setInterval(()=>{
      n++;
      if((window.TQ&&window.TQ.studio&&window.TQ.studio.scene) || n>40){
        clearInterval(i);
        enhanceStudio();
      }
    }, 100);
  });
})();
