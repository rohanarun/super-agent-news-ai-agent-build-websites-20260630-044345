(function(){
  try {
    var gsapScript = document.createElement('script');
    gsapScript.src = 'https://unpkg.com/gsap@3/dist/gsap.min.js';
    gsapScript.onload = function(){
      if (!window.gsap) return;
      gsap.from('.hero h1', { y: 24, opacity: 0, duration: 0.9, ease: 'power3.out' });
      gsap.from('.hero-sub', { y: 24, opacity: 0, duration: 0.9, delay: 0.1, ease: 'power3.out' });
      gsap.from('.hero-actions', { y: 24, opacity: 0, duration: 0.9, delay: 0.2, ease: 'power3.out' });
      gsap.from('.media-frame', { y: 32, opacity: 0, duration: 1.0, delay: 0.3, ease: 'power3.out' });
      document.querySelectorAll('.bento-item, .compare-card').forEach(function(el){
        gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 80%' }, y: 24, opacity: 0, duration: 0.6, ease: 'power3.out' });
      });
    };
    document.head.appendChild(gsapScript);
  } catch (e) {
    /* Animations optional */
  }
})();