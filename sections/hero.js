import { contactInfo } from '../data/contact.js';

const roles = ['Software Engineer', 'Problem Solver', 'Clean Architecture'];

const socials = [
  { href: contactInfo.github, label: 'GitHub', d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
  { href: contactInfo.linkedin, label: 'LinkedIn', d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }
];

const stats = [
  { value: '15<em>+</em>', label: 'Projects' },
  { value: '3<em>+</em>', label: 'Years' },
  { value: '10<em>+</em>', label: 'Features/app' }
];

export function renderHero() {
  const host = document.querySelector('#hero-placeholder');
  if (!host) return;

  host.innerHTML = `
    <section id="home" class="hero">
      <div class="container hero-inner">
        <div class="hero-copy">
          <div class="hero-badge"><span class="pulse"></span> Available for work — Dhaka, Bangladesh</div>
          <h1>Hi, I'm<br>Arafath<span class="accent">.</span></h1>
          <div class="hero-role">
            Flutter Developer
            <span class="sep">·</span>
            <span class="typing"><span id="typed"></span><span class="cursor">|</span></span>
          </div>
          <p class="hero-desc">
            I design and build <strong style="color:var(--text)">fast, reliable mobile apps</strong> with Flutter,
            Firebase and clean architecture — from idea to store release on iOS, Android and the web.
          </p>
          <div class="hero-cta">
            <a href="#contact" class="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              Start a project
            </a>
            <a href="${contactInfo.resume}" target="_blank" class="btn btn-ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Download Resume
            </a>
          </div>
          <div class="hero-socials">
            <span style="font-family:var(--font-mono);font-size:0.76rem;letter-spacing:0.1em;color:var(--text-3)">Find me on</span>
            ${socials.map(s => `
              <a class="icon-btn" href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="${s.d}"/></svg>
              </a>`).join('')}
          </div>
        </div>

        <div class="hero-media">
          <figure class="frame">
            <img src="assets/profile/me.jpg" alt="Portrait of Mohammad Arafath Uddin" width="400" height="420" fetchpriority="high" />
            <figcaption class="card">
              <strong style="display:block">Mohammad Arafath Uddin</strong>
              <span><i></i> Open to remote · Flutter</span>
            </figcaption>
          </figure>
        </div>
      </div>

      <div class="container">
        <div class="hero-stats" aria-label="Highlights">
          ${stats.map(s => `
            <div class="hero-stat">
              <div class="v">${s.value}</div>
              <div class="l">${s.label}</div>
            </div>`).join('')}
        </div>
      </div>
    </section>
  `;

  initTyping();
}

function initTyping() {
  const el = document.querySelector('#typed');
  if (!el) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = roles[0];
    return;
  }
  let i = 0, len = 0, deleting = false;
  let t;
  const tick = () => {
    const word = roles[i];
    el.textContent = word.slice(0, len);
    if (!deleting) {
      len++;
      if (len === word.length) { deleting = true; t = setTimeout(tick, 2000); return; }
      t = setTimeout(tick, 55);
    } else {
      len--;
      if (len === 0) { deleting = false; i = (i + 1) % roles.length; t = setTimeout(tick, 300); return; }
      t = setTimeout(tick, 28);
    }
  };
  t = setTimeout(tick, 900);
}