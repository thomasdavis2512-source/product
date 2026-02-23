// Animações ao rolar: seções ganham .is-visible quando entram na tela
(function () {
  if (typeof window === 'undefined' || !window.IntersectionObserver) return;

  var sections = document.querySelectorAll('.section');
  if (!sections.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.1
    }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();
