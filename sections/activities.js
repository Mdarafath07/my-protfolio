import { activities, currently, terminalScript } from '../data/activities.js';

const icons = {
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/></svg>',
  git: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="9" r="2.5"/><path d="M6 8.5v7M18 11.5c0 3-3 3.5-6 3.5"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m8 6-6 6 6 6M16 6l6 6-6 6"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11"/></svg>',
  pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3z"/></svg>'
};

export function renderActivities() {
  const host = document.querySelector('#activities-placeholder');
  if (!host) return;

  host.innerHTML = `
    <section id="activities" class="section activities">
      <div class="container">
        <div class="act-grid">
          <div class="act-main">
            <div class="section-head reveal">
              <span class="eyebrow"><span class="idx">06</span> Beyond code</span>
              <h2>What I do <span class="it">off the clock</span></h2>
              <p class="lead">Apps are the output — but the habit behind them is what actually compounds. Here is what fills the rest of my week.</p>
            </div>

            <div class="act-cards">
              ${activities.map((a, i) => `
                <article class="act-card card reveal" data-tilt style="transition-delay:${i * 70}ms">
                  <span class="act-icon" aria-hidden="true">${icons[a.icon]}</span>
                  <h3>${a.title}</h3>
                  <p>${a.desc}</p>
                  <span class="act-tag">${a.tag}</span>
                </article>`).join('')}
            </div>
          </div>

          <aside class="act-aside">
            <div class="now-card reveal">
              <div class="now-head">
                <h3>Right now</h3>
                <span class="live-chip"><i class="pulse-dot"></i>Live</span>
              </div>
              <ul class="now-list">
                ${currently.map(c => `
                  <li>
                    <span class="now-label">${c.label}</span>
                    <span class="now-value">${c.value}</span>
                  </li>`).join('')}
              </ul>
            </div>

            <div class="term reveal" aria-hidden="true">
              <div class="term-bar">
                <span class="term-dots"><i></i><i></i><i></i></span>
                <span class="term-title">zsh — arafat</span>
              </div>
              <div class="term-body" id="termBody"></div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}
