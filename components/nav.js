import { contactInfo } from '../data/contact.js';

export function renderNav() {
  const navContainer = document.querySelector('#nav-placeholder');
  if (!navContainer) return;

  navContainer.innerHTML = `
    <nav class="nav" id="nav">
      <div class="nav-container">
        <a href="#home" class="nav-logo" id="navLogo">
          <span class="logo-bracket">{</span>
          <span class="logo-prefix">Dev-</span>
          <span class="logo-letter">A</span>
          <span class="logo-suffix">rafath</span>
          <span class="logo-bracket">}</span>
        </a>
        <ul class="nav-links" id="navLinks">
          <li><a href="#home" class="nav-link active" data-section="home">Home</a></li>
          <li><a href="#about" class="nav-link" data-section="about">About</a></li>
          <li><a href="#skills" class="nav-link" data-section="skills">Skills</a></li>
          <li><a href="#projects" class="nav-link" data-section="projects">Projects</a></li>
          <li><a href="#experience" class="nav-link" data-section="experience">Experience</a></li>
          <li><a href="#education" class="nav-link" data-section="education">Education</a></li>
          <li><a href="#contact" class="nav-link" data-section="contact">Contact</a></li>
        </ul>
        <div class="nav-actions">
          <a href="#contact" class="btn-hire" id="navHireBtn">Hire Me</a>
          <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- ===== MOBILE MENU ===== -->
    <div class="mobile-menu" id="mobileMenu">
      <button class="mobile-menu-close" id="mobileMenuClose" aria-label="Close menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <ul class="mobile-nav-links">
        <li><a href="#home" class="mobile-nav-link">Home</a></li>
        <li><a href="#about" class="mobile-nav-link">About</a></li>
        <li><a href="#skills" class="mobile-nav-link">Skills</a></li>
        <li><a href="#projects" class="mobile-nav-link">Projects</a></li>
        <li><a href="#experience" class="mobile-nav-link">Experience</a></li>
        <li><a href="#education" class="mobile-nav-link">Education</a></li>
        <li><a href="#contact" class="mobile-nav-link">Contact</a></li>
      </ul>
    </div>
  `;

  initNavLogic();
}

function initNavLogic() {
  const nav = document.querySelector('#nav');
  const toggle = document.querySelector('#navToggle');
  const menu = document.querySelector('#mobileMenu');
  const close = document.querySelector('#mobileMenuClose');
  const links = document.querySelectorAll('.mobile-nav-link');
  const logo = document.querySelector('#navLogo');

  if (!nav) return;

  // Scroll behavior
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 20);
    updateActiveLink(y);
  }, { passive: true });

  // Toggle mobile menu
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });

  close.addEventListener('click', closeMobileMenu);

  links.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  function closeMobileMenu() {
    toggle.classList.remove('active');
    menu.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Active link updater
  const sections = document.querySelectorAll('section[id]');
  function updateActiveLink(scrollY) {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (scrollY >= top) current = section.id;
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  }

  // Logo load animation (slide out to Dev-Arafath, then collapse)
  if (logo) {
    setTimeout(() => {
      logo.classList.add('logo-animate-in');
      setTimeout(() => {
        logo.classList.remove('logo-animate-in');
      }, 2500);
    }, 400);

    // Pulse-glow on click
    logo.addEventListener('click', () => {
      logo.style.animation = 'none';
      void logo.offsetWidth; // force reflow
      logo.style.animation = 'pulse-glow 0.5s ease';
    });
  }
}
