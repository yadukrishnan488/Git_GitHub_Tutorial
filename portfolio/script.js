// Small script: year and mobile nav toggle and smooth scrolling
document.addEventListener('DOMContentLoaded', function(){
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      if(nav.style.display === 'block') nav.style.display = '';
      else nav.style.display = 'block';
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const target = this.getAttribute('href');
      if(target.length>1){
        e.preventDefault();
        const el = document.querySelector(target);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
});