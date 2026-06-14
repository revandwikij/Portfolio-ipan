  // Interactive "heloipan" tile grid hero background
  (function() {
    const grid = document.getElementById('tiles');
    if (!grid) return;
    const word = 'heloipan';
    let wi = 0;

    const nextChar = () => {
      const ch = word[wi % word.length];
      wi++;
      return ch;
    };

    const createTile = () => {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      tile.textContent = nextChar();
      tile.onclick = (e) => {
        const target = e.target;
        target.classList.add('glow', 'glitch');
        setTimeout(() => target.classList.remove('glitch'), 250);
      };
      return tile;
    };

    const createGrid = () => {
      grid.innerHTML = '';
      wi = 0;
      const size = 64;
      const columns = Math.max(1, Math.floor(window.innerWidth / size));
      const rows = Math.max(1, Math.floor(window.innerHeight / size));
      grid.style.setProperty('--columns', columns);
      grid.style.setProperty('--rows', rows);
      const frag = document.createDocumentFragment();
      for (let i = 0; i < columns * rows; i++) {
        frag.appendChild(createTile());
      }
      grid.appendChild(frag);
    };

    const handleMouseMove = (e) => {
      const radius = window.innerWidth / 4;
      for (const tile of grid.children) {
        const rect = tile.getBoundingClientRect();
        const tx = rect.left + rect.width / 2;
        const ty = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - tx, e.clientY - ty);
        const intensity = Math.max(0, 1 - dist / radius);
        tile.style.setProperty('--intensity', intensity.toFixed(2));
        tile.classList.toggle('glow', intensity > 0.15);
      }
    };

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(createGrid, 200);
    });
    window.addEventListener('mousemove', handleMouseMove);

    createGrid();
  })();

  // Scroll-scale card animation (rotate/scale based on scroll progress) — desktop only
  (function() {
    const section = document.querySelector('.scroll-scale-section');
    const card = document.getElementById('scrollScaleCard');
    if (!section || !card) return;
    const isDesktop = () => window.innerWidth >= 1024;

    const onScroll = () => {
      if (!isDesktop()) {
        card.style.transform = '';
        return;
      }
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      let progress = total > 0 ? -rect.top / total : 1;
      progress = Math.min(1, Math.max(0, progress));

      const rotate = 20 * (1 - progress);
      const scale = 1.05 + (1 - 1.05) * progress;

      card.style.transform = `rotateX(${rotate}deg) scale(${scale})`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
  })();

  // Header scroll state
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Scroll-triggered reveal for elements not already visible
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

  // Portfolio filter (visual only)
  // Portfolio filter logic (Berfungsi menyaring konten)
const filterButtons = document.querySelectorAll('.portfolio-filter button');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // 1. Mengubah status tombol yang aktif
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 2. Mengambil value kategori dari data-filter
    const filterValue = btn.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');

      // Jika memilih 'all' ATAU kategori item cocok dengan tombol yang diklik
      if (filterValue === 'all' || filterValue === itemCategory) {
        item.style.display = 'block'; // Tampilkan elemen HTML kembali
        
        // Animasi memudar masuk yang halus
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        }, 10);
      } else {
        // Jika tidak cocok, sembunyikan dengan animasi mengecil dan memudar
        item.style.opacity = '0';
        item.style.transform = 'scale(0.95)';
        
        // Beri waktu animasi selesai (0.3s) baru hilangkan display-nya agar tidak patah
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  });
});