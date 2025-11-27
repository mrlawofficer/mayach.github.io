// assets/js/main.js — subtle parallax + touch-safe micro interactions
(function(){
  // Respect reduced motion
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Hero parallax — move hero card subtly based on pointer
  const hero = document.querySelector('.hero-card');
  if(hero && !reduced){
    document.addEventListener('mousemove', e=>{
      const w = window.innerWidth, h = window.innerHeight;
      const x = (e.clientX - w/2) / (w/2);
      const y = (e.clientY - h/2) / (h/2);
      hero.style.transform = `translate3d(${x*6}px, ${y*6}px, 0)`;
    });
    // subtle reset on leave
    document.addEventListener('mouseleave', ()=> hero.style.transform = '');
  }

  // Card hover lift fallback for touch (no hover) - add tap animation
  document.querySelectorAll('.card, .blog-item').forEach(el=>{
    el.addEventListener('touchstart', ()=> el.style.transform = 'translateY(-8px)');
    el.addEventListener('touchend', ()=> setTimeout(()=> el.style.transform = '', 200));
  });

  // Lightbox: reuse existing pattern if present, else add simple
  if(!document.getElementById('ll-lightbox')){
    const lb = document.createElement('div');
    lb.id = 'll-lightbox';
    lb.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(8,12,20,0.78);align-items:center;justify-content:center;z-index:9999;padding:20px';
    lb.innerHTML = '<img id="ll-img" style="max-width:100%;max-height:100%;border-radius:12px;box-shadow:0 14px 40px rgba(0,0,0,0.5)">';
    lb.addEventListener('click', ()=> lb.style.display = 'none');
    document.body.appendChild(lb);
    document.querySelectorAll('.article-wrapper img, .img-grid img, .stack-card img').forEach(img=>{
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        document.getElementById('ll-img').src = img.src;
        lb.style.display = 'flex';
      });
    });
  }

})();