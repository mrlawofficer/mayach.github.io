// assets/js/main.js - lazy load + simple lightbox
document.addEventListener('DOMContentLoaded', function(){
  // lazyload for images with data-src
  document.querySelectorAll('img[data-src]').forEach(img=>{
    img.setAttribute('src', img.getAttribute('data-src'));
    img.removeAttribute('data-src');
  });

  // simple lightbox (image click)
  document.body.insertAdjacentHTML('beforeend', '<div id="lightbox" style="display:none;position:fixed;inset:0;background:rgba(2,6,23,0.8);align-items:center;justify-content:center;z-index:2000"><img style="max-width:90%;max-height:90%;border-radius:10px"></div>');
  const lb = document.getElementById('lightbox');
  lb.addEventListener('click',()=> lb.style.display='none');
  document.querySelectorAll('.article-wrapper img, .img-grid img').forEach(img=>{
    img.style.cursor='zoom-in';
    img.addEventListener('click',()=>{
      lb.querySelector('img').src = img.src;
      lb.style.display = 'flex';
    });
  });
});

// main.js - iPad liquid micro interactions + dropdown keyboard accessible
document.addEventListener('DOMContentLoaded', function(){
  // hero parallax: optional (kept from previous)
  const hero = document.querySelector('.hero-card');
  if(hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('mousemove', e=>{
      const w = window.innerWidth, h = window.innerHeight;
      const x = (e.clientX - w/2) / (w/2);
      const y = (e.clientY - h/2) / (h/2);
      hero.style.transform = `translate3d(${x*6}px, ${y*6}px, 0)`;
    });
  }

  // accessible dropdown keyboard fallback
  document.querySelectorAll('.dropdown').forEach(drop=>{
    drop.addEventListener('keydown', e=>{
      if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const content = drop.querySelector('.dropdown-content');
        if(content) content.style.display = content.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
});

