import { achievements } from '../data/achievements.js';

const medals = {
  trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6m12 5h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22m10-7.34V17c0 .55.47.98.97 1.21C19.15 18.75 20 20.24 20 22M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>',
  medal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
};

const icons = { 'best-performance': 'star', 'excellence': 'medal', 'first-place': 'trophy' };

export function renderAchievements() {
  const host = document.querySelector('#achievements-placeholder');
  if (!host) return;

  host.innerHTML = `
    <section id="achievements" class="section achievements">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow"><span class="idx">02</span> Recognition</span>
          <h2>Work that got <span class="it">noticed</span></h2>
          <p class="lead">Certificates, crests and a first-place finish — earned through internships, leadership and shipped projects.</p>
        </div>

        <div class="ach-grid">
          ${achievements.map((a, i) => `
            <article class="ach-card card reveal" data-tilt style="transition-delay:${i * 80}ms">
              <span class="year-tag" aria-hidden="true">${a.date}</span>
              <span class="medal" aria-hidden="true">${medals[icons[a.id] || 'medal']}</span>
              <h3>${a.title}</h3>
              <p class="issuer"><b>${a.issuer}</b></p>
              <p class="summary">${a.summary}</p>
              <div class="meta">${a.tags.map(t => `<span>${t}</span>`).join('')}</div>
            </article>`).join('')}
        </div>
      </div>
    </section>
  `;
}
