import { renderNav } from './components/nav.js';
import { renderFooter } from './components/footer.js';
import { renderHero } from './sections/hero.js';
import { renderProjects } from './sections/projects.js';
import { renderSkills } from './sections/skills.js';
import { renderExperience } from './sections/experience.js';
import { renderAbout } from './sections/about.js';
import { renderContact } from './sections/contact.js';

buildUI();

function buildUI() {
  renderNav();
  renderHero();
  renderProjects();
  renderSkills();
  renderExperience();
  renderAbout();
  renderContact();
  renderFooter();

  initReveal();
  initActiveNav();
  initSmoothScroll();
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
  const links = document.querySelectorAll('.nav-links a[data-section]');

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