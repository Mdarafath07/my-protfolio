import { contactInfo } from '../data/contact.js';

const links = [
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Awards' },
  { id: 'skills', label: 'Skills' },
  { id: 'process', label: 'Process' },
  { id: 'experience', label: 'Experience' },
  { id: 'activities', label: 'Beyond code' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
];

export function renderNav() {
  const host = document.querySelector('#nav-placeholder');
  if (!host) return;

  host.innerHTML = `
    <nav class="site-nav" id="siteNav" aria-label="Primary">
      <div class="container nav-inner">
        <a class="brand" href="#home" aria-label="Mohammad Arafath Uddin — back to top">
          <span class="brace">{</span><span>DEV-ARAFATH<i class="dot" style="font-style:normal">}</i></span>
        </a>
        <ul class="nav-links">
          ${links.map(l => `<li><a href="#${l.id}" data-section="${l.id}">${l.label}</a></li>`).join('')}
        </ul>
        <div class="nav-actions">
          <button class="nav-burger" id="navToggle" aria-expanded="false" aria-controls="mobilePanel" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
          <button class="btn btn-ghost btn-sm theme-toggle" id="themeToggle" aria-label="Toggle light / dark theme">
            <svg class="sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
            <svg class="moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
            <span class="tt-label">Dark</span>
          </button>
          <a href="${contactInfo.github}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm hide-sm" aria-label="GitHub profile">
            GitHub
          </a>
          <a href="assets/resume/Mohammad-Arafath-Uddin-Resume.pdf" target="_blank" class="btn btn-primary btn-sm">Resume</a>
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

  // Theme toggle — class already applied pre-paint by inline head script
  const themeBtn = document.querySelector('#themeToggle');
  const syncThemeLabel = () => {
    const dark = document.documentElement.classList.contains('dark');
    const label = themeBtn?.querySelector('.tt-label');
    if (label) label.textContent = dark ? 'Light' : 'Dark';
  };
  syncThemeLabel();
  themeBtn?.addEventListener('click', () => {
    const dark = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', dark);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? '#0a0d14' : '#f6f4ee';
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) { /* private mode */ }
    syncThemeLabel();
  });

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
