import { contactInfo } from '../data/contact.js';

const links = [
  { id: 'home', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
];

export function renderNav() {
  const host = document.querySelector('#nav-placeholder');
  if (!host) return;

  host.innerHTML = `
    <nav class="site-nav" id="siteNav" aria-label="Primary">
      <div class="container nav-inner">
        <a class="brand" href="#home" aria-label="Back to top">
          <span class="brace">{</span>Arafath<span class="brace">}</span>
        </a>
        <ul class="nav-links">
          ${links.map(l => `<li><a href="#${l.id}" data-section="${l.id}">${l.label}</a></li>`).join('')}
        </ul>
        <div class="nav-actions">
          <a href="${contactInfo.github}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm hide-sm" aria-label="GitHub profile">
            GitHub
          </a>
          <a href="assets/resume/Md.Arafath%27s%20Resume.png" target="_blank" class="btn btn-primary btn-sm">Resume</a>
          <button class="nav-burger" id="navToggle" aria-expanded="false" aria-controls="mobilePanel" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>

    <div class="mobile-panel" id="mobilePanel" aria-hidden="true">
      ${links.map((l, i) => `
        <a href="#${l.id}" class="mob-link" data-section="${l.id}">
          ${l.label}
          <small>0${i + 1}</small>
        </a>`).join('')}
      <div class="mob-actions">
        <a href="${contactInfo.github}" target="_blank" rel="noopener" class="btn btn-ghost" style="flex:1">GitHub</a>
        <a href="#contact" class="btn btn-primary" style="flex:1">Hire Me</a>
      </div>
    </div>
  `;

  initNav();
}

function initNav() {
  const nav = document.querySelector('#siteNav');
  const toggle = document.querySelector('#navToggle');
  const panel = document.querySelector('#mobilePanel');

  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    panel.classList.toggle('open', open);
    panel.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('no-scroll', open);
  };

  toggle.addEventListener('click', () => setOpen(!panel.classList.contains('open')));
  panel.querySelectorAll('.mob-link').forEach(a =>
    a.addEventListener('click', () => setOpen(false))
  );
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
}