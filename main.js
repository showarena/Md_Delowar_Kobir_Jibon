(function(){
  var root=document.documentElement,btn=document.getElementById('theme'),k='theme',saved=null;
  try{saved=localStorage.getItem(k)}catch(e){}
  var dark=saved?saved==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
  function apply(){root.dataset.theme=dark?'dark':'light';btn.textContent=dark?'☀️':'🌙'}
  apply();
  btn.onclick=function(){dark=!dark;apply();try{localStorage.setItem(k,dark?'dark':'light')}catch(e){}};
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
  document.getElementById('yr').textContent=new Date().getFullYear();
})();
