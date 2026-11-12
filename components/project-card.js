const Icons = {
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.14v13.72L19 12 8 5.14z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18.5h2"/></svg>'
};

export function createProjectCard(project, featured = false, index = 0) {
  const detailHref = `pages/projects/${project.id}.html`;
  const allShots = project.screenshots || [];
  const shots = allShots.slice(0, 3);
  const extra = Math.max(0, allShots.length - shots.length);
  const num = String(index + 1).padStart(2, '0');

  return `
    <article class="pc-card card${featured ? ' is-featured' : ''}" data-project="${project.id}" data-showcase>
      <span class="pc-glow" aria-hidden="true"></span>
      <span class="pc-sheen" aria-hidden="true"></span>

      <div class="pc-media">
        <div class="pc-frame">
          <img class="pc-banner" src="${project.banner}" alt="${project.title} — app showcase" loading="lazy" />
        </div>
        <span class="pc-scrim" aria-hidden="true"></span>

        <div class="pc-tags">
          ${featured ? '<span class="pc-pill pc-pill--gold">Featured</span>' : ''}
          ${project.live ? `<span class="pc-pill pc-pill--live"><i class="pulse-dot"></i>Live</span>` : ''}
        </div>
        <span class="pc-year">${project.year || '2025'}</span>

        <div class="pc-rail">
          ${shots.map((s, i) => `
            <a class="pc-shot-link" href="${detailHref}" aria-label="Open ${project.title} case study" style="--i:${i}">
              <img class="pc-shot" src="${s}" alt="${project.title} app screen ${i + 1}" loading="lazy">
            </a>`).join('')}
          ${extra ? `<span class="pc-shot-more">+${extra}</span>` : ''}
        </div>

        <span class="pc-open" aria-hidden="true">
          <span>Open case study</span>${Icons.arrow}
        </span>
      </div>

      <div class="pc-body">
        <div class="pc-head">
          <h3 class="pc-title">
            <a href="${detailHref}">${project.title}</a>
          </h3>
          <span class="pc-index">${num}</span>
        </div>
        <p class="pc-desc">${project.desc}</p>

        <ul class="pc-metrics" aria-label="Key numbers">
          ${project.metrics.map(m => `
            <li class="pc-metric" data-value="${m.value}">
              <b>${m.value}</b><span>${m.label}</span>
            </li>`).join('')}
        </ul>

        <ul class="pc-achieves">
          ${project.achievements.map(a => `<li>${Icons.check}<span>${a}</span></li>`).join('')}
        </ul>
      </div>

      <div class="pc-foot">
        <ul class="pc-stack" aria-label="Tech stack">
          ${project.stack.map(t => `<li>${t}</li>`).join('')}
        </ul>
        <div class="pc-actions">
          ${project.live ? `<a class="pc-btn" href="${project.live}" target="_blank" rel="noopener">${Icons.play}Demo</a>` : ''}
          <a class="pc-btn" href="${project.github}" target="_blank" rel="noopener" aria-label="Source code on GitHub">${Icons.github}Source</a>
          <a class="pc-btn pc-btn--primary" href="${detailHref}">Case study${Icons.arrow}</a>
        </div>
      </div>
    </article>
  `;
}
