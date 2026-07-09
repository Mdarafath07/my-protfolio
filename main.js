import { renderNav } from './components/nav.js';
import { renderFooter } from './components/footer.js';
import { renderHero } from './sections/hero.js';
import { renderAbout } from './sections/about.js';
import { renderSkills } from './sections/skills.js';
import { renderProjects } from './sections/projects.js';
import { renderExperience } from './sections/experience.js';
import { renderEducation } from './sections/education.js';
import { renderContact } from './sections/contact.js';

import { initHeroCanvas, initContactCanvas } from './animations/particles.js';
import { initTyped } from './animations/typed.js';
import { initReveal, initTimelineReveal, initCounters, initCardGlow } from './animations/reveal.js';
import { initTilt } from './animations/tilt.js';

// Global state
const state = {
  isLoaded: false
};

// Start preloading visual sequence instantly
document.body.classList.add('preloading');
const preloaderFill = document.querySelector('#preloaderFill');
const preloaderText = document.querySelector('#preloaderText');

const steps = [
  { pct: 15, msg: 'Loading assets...' },
  { pct: 40, msg: 'Initializing canvas...' },
  { pct: 65, msg: 'Building UI...' },
  { pct: 85, msg: 'Preparing animations...' },
  { pct: 100, msg: 'Welcome!' },
];

let idx = 0;
const interval = setInterval(() => {
  if (idx >= steps.length) {
    clearInterval(interval);
    setTimeout(completeInitialization, 300);
    return;
  }
  const { pct, msg } = steps[idx++];
  if (preloaderFill) preloaderFill.style.width = pct + '%';
  if (preloaderText) preloaderText.textContent = msg;
}, 150);

// Initialize all HTML content components synchronously
function buildUI() {
  renderNav();
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderExperience();
  renderEducation();
  renderContact();
  renderFooter();
}

// Complete preloader hide and start interactive animations
function completeInitialization() {
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    preloader.classList.add('hidden');
  }
  document.body.classList.remove('preloading');
  state.isLoaded = true;

  // Initialize animations after UI layout is built
  initHeroCanvas('#heroCanvas');
  initContactCanvas('#contactCanvas');
  initTyped('#typedText');
  initReveal();
  initTimelineReveal();
  initCounters();
  initTilt('#profileCard');
  initCardGlow();
  initCursor();
  initSmoothScroll();

  console.log('%c{Arafath Portfolio — Modular System}', 'color:#818cf8;font-size:18px;font-weight:700;font-family:monospace');
  console.log('%cRestructured with Clean Architecture principles ⚡', 'color:#22d3ee;font-size:12px;font-family:monospace');
}

// Custom cursor mechanics
function initCursor() {
  const dot = document.querySelector('#cursorDot');
  const ring = document.querySelector('#cursorRing');
  if (!dot || !ring) return;
  if (window.matchMedia('(hover: none)').matches) return;

  let ringX = 0, ringY = 0, dotX = 0, dotY = 0;

  document.addEventListener('mousemove', (e) => {
    dotX = e.clientX; 
    dotY = e.clientY;
  });

  function animateCursor() {
    ringX += (dotX - ringX) * 0.12;
    ringY += (dotY - ringY) * 0.12;
    dot.style.transform  = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover expand delegate listener to handle dynamically rendered elements
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('a, button, .skills-category-card, .project-card, .filter-btn, .contact-item, .soft-skill-card, .education-card');
    if (target) ring.classList.add('expanded');
    else ring.classList.remove('expanded');
  });
}

// Smooth scroll for anchor clicks
function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
}

// Boot UI rendering
buildUI();
