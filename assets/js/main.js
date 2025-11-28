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
