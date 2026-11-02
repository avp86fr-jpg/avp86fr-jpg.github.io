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
  // Searchable game library, combined with the existing genre filters
  var chips=Array.prototype.slice.call(d.querySelectorAll('.chip'));
  var cards=Array.prototype.slice.call(d.querySelectorAll('.card'));
  var gameCards=cards.filter(function(card){return card.dataset.genres!=='all'});
  var count=d.getElementById('count'),activeGenre='all',searchTerm='';
  var chipsWrap=d.querySelector('.chips');
  if(chipsWrap&&gameCards.length){
    var tools=d.createElement('div');
    tools.className='game-tools';
    tools.innerHTML='<label class="game-search"><span aria-hidden="true">⌕</span><span class="sr-only">Search games</span><input id="game-search" type="search" placeholder="Search games, genres or features…" autocomplete="off" aria-controls="game-grid"><kbd>/</kbd></label><button class="game-clear" type="button" hidden>Clear</button>';
    chipsWrap.parentNode.insertBefore(tools,chipsWrap);
    var search=d.getElementById('game-search'),clear=tools.querySelector('.game-clear');
    var style=d.createElement('style');
    style.textContent='.game-tools{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin:0 0 18px}.game-search{display:flex;align-items:center;gap:12px;flex:1 1 280px;max-width:560px;min-height:52px;padding:0 16px;border:1px solid rgba(255,255,255,.13);border-radius:14px;background:rgba(255,255,255,.045);color:var(--mute)}.game-search:focus-within{border-color:var(--cyan);box-shadow:0 0 0 3px rgba(79,243,255,.1)}.game-search>span:first-child{font-size:25px;color:var(--cyan)}.game-search input{width:100%;min-width:0;border:0;outline:0;background:transparent;color:var(--ink);font:600 15px var(--fb)}.game-search input::placeholder{color:var(--dim)}.game-search kbd{padding:3px 7px;border:1px solid var(--line);border-radius:5px;font:600 11px var(--fb);color:var(--dim)}.game-clear{min-height:42px;padding:0 14px;border:1px solid var(--line);border-radius:999px;background:rgba(255,255,255,.04);color:var(--mute);font:700 13px var(--fb);cursor:pointer}.game-clear:hover{border-color:var(--cyan);color:#fff}.game-clear[hidden]{display:none}@media(max-width:520px){.game-search{flex-basis:100%;max-width:none}}';
    d.head.appendChild(style);
    function applyFilters(){
      var shown=0;
      gameCards.forEach(function(card){
        var genreMatch=activeGenre==='all'||card.dataset.genres.split(' ').indexOf(activeGenre)>-1;
        var haystack=(card.textContent+' '+(card.dataset.genres||'')).toLowerCase();
        var visible=genreMatch&&(!searchTerm||haystack.indexOf(searchTerm)>-1);
        card.classList.toggle('is-hidden',!visible);
        if(visible){shown++;card.classList.add('is-in')}
      });
      cards.filter(function(card){return card.dataset.genres==='all'}).forEach(function(card){
        card.classList.toggle('is-hidden',!!searchTerm||activeGenre!=='all');
      });
      if(count)count.textContent=shown+' of '+gameCards.length+' games shown';
      clear.hidden=!searchTerm;
    }
    chips.forEach(function(chip){
      chip.addEventListener('click',function(){
        activeGenre=chip.dataset.f||'all';
        chips.forEach(function(item){var on=item===chip;item.classList.toggle('is-on',on);item.setAttribute('aria-pressed',String(on))});
        applyFilters();
      });
    });
    search.addEventListener('input',function(){searchTerm=search.value.trim().toLowerCase();applyFilters()});
    clear.addEventListener('click',function(){search.value='';searchTerm='';search.focus();applyFilters()});
    search.addEventListener('keydown',function(e){if(e.key==='Escape'){search.value='';searchTerm='';applyFilters()}});
    d.addEventListener('keydown',function(e){if(e.key==='/'&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!/INPUT|TEXTAREA|SELECT/.test(d.activeElement.tagName)){e.preventDefault();search.focus()}});
    applyFilters();
  }
})();