import { renderNav } from './components/nav.js';
import { renderFooter } from './components/footer.js';
import { renderHero } from './sections/hero.js';
import { renderProjects } from './sections/projects.js';
import { renderAchievements } from './sections/achievements.js';
import { renderSkills } from './sections/skills.js';
import { renderProcess } from './sections/process.js';
import { renderExperience } from './sections/experience.js';
import { renderActivities } from './sections/activities.js';
import { renderStatement } from './sections/statement.js';
import { renderAbout } from './sections/about.js';
import { renderContact } from './sections/contact.js';

import {
  initPreloader,
  startAurora,
  initProgress,
  initCounters,
  initTilt,
  initMagnetic,
  initParallax,
  initShowcase,
  initTerminal,
  initTimeline
} from './utils/motion.js';

buildUI();

function buildUI() {
  initPreloader();
  startAurora(document.querySelector('#hero-canvas'));

  renderNav();
  renderHero();
  renderProjects();
  renderAchievements();
  renderSkills();
  renderProcess();
  renderExperience();
  renderActivities();
  renderStatement();
  renderAbout();
  renderContact();
  renderFooter();

  // The sections move into <main> as real sections, and the placeholders go
  flattenMain();

  initReveal();
  initActiveNav();
  initSmoothScroll();
  initProgress();
  initCounters();
  initTilt();
  initMagnetic();
  initParallax();
  initShowcase();
  initTerminal();
  initTimeline();

  // The moments loader scans the DOM, so it runs after the sections are in
  mountMoments();
}

/* ---------- taste-skill moments (giant type, liquid portrait) ---------- */
function mountMoments() {
  import('./assets/taste/moments/moments.js')
    .then((m) => (m.mountAll ? m.mountAll(document) : m.ready))
    .catch(() => { /* the page keeps its finished state without the effect */ });
}

/* Every part of <main> is a <section> — the wrappers are removed */
function flattenMain() {
  const main = document.getElementById('main');
  if (!main) return;
  main.querySelectorAll(':scope > div[id$="-placeholder"]').forEach((ph) => {
    while (ph.firstChild) main.appendChild(ph.firstChild);
    ph.remove();
  });
  // the footer is not a section of <main>: it follows it
  main.querySelectorAll(':scope > footer').forEach((f) => main.after(f));
}

// Subtle reveal-on-scroll — respects reduced motion via CSS
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  items.forEach(el => observer.observe(el));

  // Safety net: anything already in the viewport must never stay hidden,
  // even if IntersectionObserver misbehaves (older webviews, headless, etc.)
  const revealInViewport = () => {
    items.forEach(el => {
      if (el.classList.contains('visible')) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) el.classList.add('visible');
    });
  };
  setTimeout(revealInViewport, 800);
  window.addEventListener('load', revealInViewport);
  window.addEventListener('scroll', revealInViewport, { passive: true });
}

// Active link highlighting while scrolling
function initActiveNav() {
  const sections = [...document.querySelectorAll('main section[id]')];
  if (!sections.length) return;
  const links = document.querySelectorAll('.nav-links a[data-section], .mobile-panel a[data-section]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      links.forEach(link => link.classList.toggle('active', link.dataset.section === id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => observer.observe(s));
}

// Smooth scroll for same-page anchors
function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });
}
