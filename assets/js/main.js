// small interactions
document.addEventListener('DOMContentLoaded', function(){
  // mobile nav toggle
  var btn = document.getElementById('nav-toggle');
  btn && btn.addEventListener('click', function(){
    var nav = document.querySelector('.top-nav');
    if(!nav) return;
    if(nav.style.display === 'flex'){ nav.style.display = 'none'; }
    else { nav.style.display = 'flex'; nav.style.flexDirection = 'column'; nav.style.gap = '12px'; }
  });
});
