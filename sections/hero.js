import { contactInfo } from '../data/contact.js';
import { projects } from '../data/projects.js';

const socials = [
  { href: contactInfo.github, label: 'GitHub', d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
  { href: contactInfo.linkedin, label: 'LinkedIn', d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }
];

const roles = ['Flutter Developer', 'App Architect', 'Problem Solver'];

// The collage shows the real product: each set is one app, its banner and its screens.
const collageSets = [
  {
    pieces: [
      { src: 'assets/my institute/my institute banner.jpg', left: 34, top: 30, w: 62, h: 66, fit: 'cover' },
      { src: 'assets/my institute/Screenshot_2026-06-22-13-11-42-865_com.example.amar_institute.jpg', left: 4, top: 8, w: 26, h: 46 },
      { src: 'assets/my institute/Screenshot_2026-06-22-13-12-14-024_com.example.amar_institute.jpg', left: 4, top: 58, w: 24, h: 38 },
      { src: 'assets/my institute/Screenshot_2026-06-22-13-13-01-298_com.example.amar_institute_admin.jpg', left: 60, top: 6, w: 30, h: 30 },
      { html: '<span class="pc-mono"><i>{</i>A<i>}</i></span><b>Flutter &amp; Firebase</b><small>3 apps shipped</small>', left: 44, top: 76, w: 34, h: 20 }
    ]
  },
  {
    pieces: [
      { src: 'assets/movie dekhba/movie dekhba banner.jpg', left: 30, top: 26, w: 66, h: 70, fit: 'cover' },
      { src: 'assets/movie dekhba/Screenshot 2026-06-22 143529.jpg', left: 3, top: 6, w: 30, h: 40 },
      { src: 'assets/movie dekhba/Screenshot_2026-06-22-14-32-03-461_com.moviedekhba.movie_dekhba.jpg', left: 4, top: 52, w: 24, h: 40 },
      { src: 'assets/movie dekhba/Screenshot_2026-06-22-14-33-08-060_com.moviedekhba.movie_dekhba.jpg', left: 62, top: 4, w: 28, h: 32 }
    ]
  },
  {
    pieces: [
      { src: 'assets/smartstock/smartstockbannar.jpg', left: 32, top: 28, w: 64, h: 68, fit: 'cover' },
      { src: 'assets/smartstock/Screenshot_2026-07-08-22-26-40-405_com.smartstock.smartstock.jpg', left: 4, top: 6, w: 28, h: 44 },
      { src: 'assets/smartstock/Screenshot_2026-07-08-22-30-54-099_com.smartstock.smartstock.jpg', left: 3, top: 56, w: 26, h: 38 },
      { src: 'assets/smartstock/Screenshot_2026-07-08-22-33-35-143_com.smartstock.smartstock.jpg', left: 58, top: 4, w: 32, h: 32 }
    ]
  }
];

export function renderHero() {
  const host = document.querySelector('#hero-placeholder');
  if (!host) return;

  const shipped = projects.length;

  host.innerHTML = `
    <section id="home" class="hero hero--triptych" data-enter aria-labelledby="hero-h">
      <div class="wrap">
        <div class="hero__masthead">
          <div class="hero__nameblock">
            <p class="hero__firstname">Mohammad</p>
            <h1 id="hero-h" class="hero__name"><span class="hero__given">Arafath</span><span class="hero__family">Uddin</span><span class="hero__name-dot">.</span></h1>
            <svg class="hero__sign" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8C40 2 70 11 110 5s65-2 88 2"/></svg>
            <p class="hero__proof"><b data-count="10" data-suffix="+">0<em>+</em></b><span>Production apps shipped</span></p>
            <p class="hero__handle"><span>{DEV-ARAFATH}</span> · Flutter Developer</p>
          </div>

          <div class="hero__idblock">
            <p class="hero__eyebrow"><span class="hero__dot"></span>Available for work — Dhaka, Bangladesh</p>
            <p class="hero__role"><span id="typed"></span><span class="hero__cursor">|</span></p>
            <p class="hero__idnote">Designed, built, tested and released end to end — Android, iOS and the web.</p>
          </div>
        </div>

        <div class="hero-text grid hero__grid">

          <div class="span-3 hero__intro">
            <p class="hero__lead">
              I design and build <strong>fast, reliable mobile apps</strong> with Flutter and Firebase —
              from the first sketch to a store release.
            </p>

            <ul class="hero__statlist" aria-label="Highlights">
              <li><b>2+</b><span>Years building</span></li>
              <li><b>3</b><span>Platforms shipped</span></li>
            </ul>
          </div>

          <div class="ly-collage span-6 start-4" role="img"
               aria-label="The three shipped apps: the institute student and admin apps, the Movie Dekhba streaming app and the SmartStock point of sale, each shown with its own screens">
            ${collageSets.map((set, i) => `
              <div class="ly-collage__set${i === 0 ? ' is-on' : ''}"${i === 0 ? '' : ' aria-hidden="true"'}>
                ${set.pieces.map(p => `
                  <div class="ly-piece${p.html ? ' ly-piece--card' : ''}" style="left:${p.left}%;top:${p.top}%;width:${p.w}%;height:${p.h}%">
                    ${p.html ? p.html : `<img src="${p.src}" alt="" loading="${i === 0 ? 'eager' : 'lazy'}"${p.fit ? ` style="object-fit:${p.fit}"` : ''}>`}
                  </div>`).join('')}
              </div>`).join('')}
          </div>

          <div class="span-3 start-10 hero__cta">
            <a class="btn btn--primary btn--lg" href="#contact" data-magnetic>
              Hire Arafath
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>
            </a>
            <a class="btn btn--secondary" href="#projects">See the apps</a>
            <p class="hero__note">Android · iOS · Web</p>
          </div>

        </div>
      </div>

      <div class="wrap">
        <div class="hero__foot">
          <div class="hero-socials">
            <span>Find me on</span>
            ${socials.map(s => `
              <a class="icon-btn" href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="${s.d}"/></svg>
              </a>`).join('')}
          </div>
          <a class="hero__resume" href="assets/resume/Mohammad-Arafath-Uddin-Resume.pdf" target="_blank" rel="noopener">
            Résumé PDF
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          </a>
        </div>
      </div>
    </section>

    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        ${[0, 1].map(() => `
          <div class="marquee-part">
            ${['Flutter', 'Dart', 'Firebase', 'Firestore', 'FCM', 'REST API', 'Provider', 'Riverpod', 'Hive', 'Android Studio', 'Git & GitHub', 'Postman', 'Figma']
              .map(t => `<li>${t}</li>`).join('')}
          </div>`).join('')}
      </div>
    </div>
  `;

  initTyping();
}

/* The role rotates once the page is up — it never fades in on scroll */
function initTyping() {
  const el = document.querySelector('#typed');
  if (!el) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = roles[0];
    return;
  }

  let i = 0;
  let len = 0;
  let deleting = false;

  const tick = () => {
    const word = roles[i];
    el.textContent = word.slice(0, len);

    if (!deleting) {
      len++;
      if (len === word.length) { deleting = true; setTimeout(tick, 1900); return; }
      setTimeout(tick, 62);
    } else {
      len--;
      if (len === 0) { deleting = false; i = (i + 1) % roles.length; setTimeout(tick, 320); return; }
      setTimeout(tick, 30);
    }
  };

  setTimeout(tick, 900);
}
