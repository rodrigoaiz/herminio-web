document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('is-ready');

  const toggle = document.querySelector('.nav-toggle');
  const panel = document.getElementById('nav-principal');

  if (toggle && panel) {
    const closeMenu = () => {
      panel.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
      const isOpen = panel.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    panel.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        toggle.focus();
      }
    });
  }

  const header = document.querySelector('[data-header]');
  if (header) {
    const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
});
