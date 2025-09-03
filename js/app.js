// Light/Dark toggle & year
(function(){
  const btn = document.querySelector('.theme-toggle');
  const key = 'theme-pref';
  const saved = localStorage.getItem(key);
  if(saved){ document.documentElement.setAttribute('data-theme', saved); }
  if(btn){
    btn.addEventListener('click', ()=>{
      const cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', cur);
      localStorage.setItem(key, cur);
    });
  }
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }
})();