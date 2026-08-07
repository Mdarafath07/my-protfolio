import { projects } from '../../data/projects.js';
import { contactInfo } from '../../data/contact.js';

const icons = {
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
  'wifi-off': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.86a10 10 0 0 1 14 0M8.5 16.43a5 5 0 0 1 7 0"/><path d="m2 2 20 20"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="6 3 20 12 6 21 6 3"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  tv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="15" rx="2"/><path d="m17 2-5 5-5-5"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.27 6.96 8.73 5.04 8.73-5.04M12 22.08V12"/></svg>',
  barcode: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 5v14M8 5v14M12 5v14M17 5v14M21 5v14"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3v18h18"/><path d="M7 15v-3M12 15V8M17 15v-6"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'
};

export function renderProjectDetail(projectId) {
  const container = document.querySelector('#detail-app');
  const project = projects.find(p => p.id === projectId);
  if (!project || !container) {
    if (container) container.innerHTML = '<p style="padding:4rem;text-align:center">Project not found.</p>';
    return;
  }

  const idx = projects.findIndex(p => p.id === projectId);
  const next = projects[(idx + 1) % projects.length];
  const isLocal = s => !/^https?:/.test(s);

  container.innerHTML = `
    <div class="detail-shell">
      <nav class="dnav" aria-label="Project navigation">
        <div class="container dnav-inner">
          <a class="back-link" href="../../index.html#projects">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Projects
          </a>
          <a class="brand" href="../../index.html"><span class="brace">{</span>Arafath<span class="brace">}</span></a>
          <a class="btn btn-ghost btn-sm" href="${project.github}" target="_blank" rel="noopener">Source</a>
        </div>
      </nav>

      <header class="d-hero">
        <div class="container d-hero-inner">
          <span class="d-badge"><i></i> Case study · Flutter &amp; Firebase · ${project.year || '2025'}</span>
          <h1>${project.title}</h1>
          <p class="tagline">${project.desc}</p>
          <div class="actions">
            ${project.live
              ? `<a class="btn btn-primary" href="${project.live}" target="_blank" rel="noopener">${icons.external}<span>${project.live.includes('.apk') ? 'Download APK' : 'Live demo'}</span></a>`
              : ''}
            <a class="btn btn-ghost" href="${project.github}" target="_blank" rel="noopener">${icons.github}<span>${project.live ? 'View source' : 'View source'}</span></a>
          </div>
          <div class="d-metrics">
            ${project.metrics.map(m => `
              <div class="m"><b>${m.value}</b><span>${m.label}</span></div>`).join('')}
          </div>
          <div class="d-banner">
            <img src="../../${project.banner}" alt="${project.title} — showcase" fetchpriority="high" />
          </div>
        </div>
      </header>

      <section class="d-section">
        <div class="container">
          <span class="sec-k">Highlights</span>
          <h2>Why it exists</h2>
          <div class="hl-grid">
            ${project.highlights.map(h => `
              <div class="hl-item">
                <span class="hi" aria-hidden="true">${icons[h.icon] || icons.bolt}</span>
                <h4>${h.title}</h4>
                <p>${h.desc}</p>
              </div>`).join('')}
          </div>
        </div>
      </section>

      <section class="d-section d-section--alt">
        <div class="container d-content">
          <div>
            <div class="d-card">
              <h3>Overview</h3>
              <p>${project.overview}</p>
              ${project.role ? `<p style="margin-top:0.9rem;padding-top:0.9rem;border-top:1px solid var(--border)"><strong style="color:var(--text)">My role. </strong>${project.role}</p>` : ''}
            </div>
            <div class="d-card">
              <h3>Key features</h3>
              <ul class="features-list">${project.features.map(f => `<li>${f}</li>`).join('')}</ul>
            </div>
            <div class="d-card">
              <h3>Architecture</h3>
              <p>${project.architecture}</p>
            </div>
            <div class="d-card">
              <h3>Hard parts</h3>
              <p>${project.challenges}</p>
            </div>
          </div>

          <aside class="d-side">
            <div class="d-card">
              <h3>Tech stack</h3>
              <ul class="d-stack">${project.stack.map(t => `<li>${t}</li>`).join('')}</ul>
            </div>
            <div class="d-card">
              <h3>Links</h3>
              <div style="display:grid;gap:0.6rem">
                <a class="btn btn-ghost btn-sm" href="${project.github}" target="_blank" rel="noopener">${icons.github}<span>GitHub repository</span></a>
                ${project.live ? `<a class="btn btn-primary btn-sm" href="${project.live}" target="_blank" rel="noopener">${icons.external}<span>Live site / download</span></a>` : ''}
              </div>
            </div>
            <div class="d-card">
              <h3>Process</h3>
              <p style="font-size:0.86rem">${project.process}</p>
            </div>
          </aside>
        </div>
      </section>

      <section class="d-section">
        <div class="container">
          <span class="sec-k">Gallery</span>
          <h2>Screens</h2>
          <div class="gallery-grid">
            ${project.screenshots.map((src, i) => `
              <button type="button" class="gallery-item" data-src="${isLocal(src) ? '../../' + src : src}" aria-label="Preview screenshot ${i + 1}">
                <img src="${isLocal(src) ? '../../' + src : src}" alt="Screenshot ${i + 1} of ${project.title}" loading="lazy" />
              </button>`).join('')}
          </div>
        </div>
      </section>

      <section class="d-section" style="padding-top:0">
        <div class="container">
          <a class="d-next" href="./${next.id}.html">
            <span><span class="k">Next project</span><b>${next.title}</b></span>
            ${icons.arrow}
          </a>
        </div>
      </section>

      <footer class="detail-footer">
        <div class="container">
          <p>© ${new Date().getFullYear()} Mohammad Arafath Uddin — ${contactInfo.location} · Built with Flutter principles</p>
        </div>
      </footer>
    </div>

    <div class="lightbox" id="lightbox" aria-hidden="true">
      <button class="lb-close" aria-label="Close preview">×</button>
      <img alt="Screenshot preview" />
    </div>
  `;

  initLightbox(container);
}

function initLightbox(root) {
  const box = root.querySelector('#lightbox');
  const img = box.querySelector('img');
  const closeBtn = box.querySelector('.lb-close');

  const open = (src) => {
    img.src = src;
    box.classList.add('open');
    box.setAttribute('aria-hidden', 'false');
  };
  const close = () => {
    box.classList.remove('open');
    box.setAttribute('aria-hidden', 'true');
  };

  root.querySelectorAll('.gallery-item').forEach(item =>
    item.addEventListener('click', () => open(item.dataset.src))
  );
  closeBtn.addEventListener('click', close);
  box.addEventListener('click', (e) => { if (e.target === box) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

// Backdrop flag used by old pages' "Back" — harmless
export { icons };