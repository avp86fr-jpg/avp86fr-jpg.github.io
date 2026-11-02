(function(){
  var d=document,root=d.documentElement;root.classList.add('js');
  var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine=matchMedia('(hover: hover) and (pointer: fine)').matches;
  // sticky nav
  var nav=d.getElementById('nav');
  function onScroll(){nav.classList.toggle('is-solid',scrollY>40)}
  onScroll();addEventListener('scroll',onScroll,{passive:true});
  // reveal
  var els=d.querySelectorAll('.reveal,.card');
  if('IntersectionObserver' in window&&!rm){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:.08});
    els.forEach(function(el,i){if(el.classList.contains('card'))el.style.transitionDelay=(i%3)*70+'ms';io.observe(el)});
  }else els.forEach(function(el){el.classList.add('is-in')});
  // parallax (hero only)
  if(!rm){
    var par=d.querySelectorAll('[data-par]'),ticking=false,hero=d.querySelector('.hero');
    function px(){ticking=false;var y=scrollY;if(y>hero.offsetHeight*1.2)return;
      par.forEach(function(el){el.style.transform='translate3d(0,'+(y*parseFloat(el.dataset.par)).toFixed(1)+'px,0)'})}
    addEventListener('scroll',function(){if(!ticking){ticking=true;requestAnimationFrame(px)}},{passive:true});
  }
  // tilt (fine pointer only)
  if(fine&&!rm){
    d.querySelectorAll('.card,.tilt').forEach(function(el){
      el.addEventListener('pointermove',function(e){var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
        el.classList.add('tilting');el.style.transform='perspective(900px) rotateX('+(-y*6).toFixed(2)+'deg) rotateY('+(x*8).toFixed(2)+'deg) translateY(-4px)'});
      el.addEventListener('pointerleave',function(){el.classList.remove('tilting');el.style.transform=''});
    });
  }
  // filters
  var chips=d.querySelectorAll('.chip'),cards=d.querySelectorAll('.card'),count=d.getElementById('count');
  chips.forEach(function(c){c.addEventListener('click',function(){
    var f=c.dataset.f,n=0;
    chips.forEach(function(x){var on=x===c;x.classList.toggle('is-on',on);x.setAttribute('aria-pressed',on)});
    cards.forEach(function(k){var show=f==='all'||k.dataset.genres==='all'||k.dataset.genres.split(' ').indexOf(f)>-1;k.classList.toggle('is-hidden',!show);if(show){n++;k.classList.add('is-in')}});
    count.textContent=(n-1)+' games shown';
  })});
  // YouTube lite facade
  d.querySelectorAll('.yt[data-yt]').forEach(function(a){a.addEventListener('click',function(e){
    e.preventDefault();var f=d.createElement('iframe');
    f.src='https://www.youtube-nocookie.com/embed/'+a.dataset.yt+'?autoplay=1&rel=0&playsinline=1';
    f.title='14 Free Browser Games in 2 Minutes';f.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    f.allowFullscreen=true;f.referrerPolicy='strict-origin-when-cross-origin';a.parentNode.replaceChild(f,a);f.focus();
  })});
})();
