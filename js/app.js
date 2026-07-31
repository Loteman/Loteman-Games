const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Custom cursor - desktop only
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animateCursor() {
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    rx += (mx - rx) * 0.14; ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  // Hover effect on interactive elements
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '22px'; cursor.style.height = '22px';
      ring.style.width = '54px'; ring.style.height = '54px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '14px'; cursor.style.height = '14px';
      ring.style.width = '38px'; ring.style.height = '38px';
    });
  });

  } // end desktop-only cursor

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));