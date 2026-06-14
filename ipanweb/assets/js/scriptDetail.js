  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal:not(.visible), .reveal-scale').forEach(el => {
    el.classList.remove('visible');
    observer.observe(el);
  });

  // Deliverable filter
  document.querySelectorAll('.deliv-filter button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.deliv-filter button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.deliv-item').forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        item.style.display = match ? '' : 'none';
      });
    });
  });