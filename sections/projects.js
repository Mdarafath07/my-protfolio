import { projects } from '../data/projects.js';
import { contactInfo } from '../data/contact.js';
import { createProjectCard } from '../components/project-card.js';

export function renderProjects() {
  const host = document.querySelector('#projects-placeholder');
  if (!host) return;

  const stats = [
    { value: '03', label: 'Apps shipped' },
    { value: '04+', label: 'Platforms' },
    { value: '100%', label: 'Owned end-to-end' }
  ];

  host.innerHTML = `
    <section id="projects" class="section projects">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow"><span class="idx">01</span> Selected Work</span>
          <h2>Apps that <span class="it">actually ship</span></h2>
          <p class="lead">Three production apps, each owned end-to-end — design, architecture, backend, testing and release. Tap a card for the full case study.</p>
          <ul class="pc-stats">
            ${stats.map(s => `<li><b>${s.value}</b><span>${s.label}</span></li>`).join('')}
          </ul>
        </div>

        <div class="projects-grid">
          ${projects.map((p, i) => `<div class="reveal" style="transition-delay:${i * 90}ms">${createProjectCard(p, i === 0, i)}</div>`).join('')}
        </div>

        <div class="reveal" style="margin-top:2.5rem;display:flex;justify-content:center">
          <a class="btn btn-ghost" href="${contactInfo.github}?tab=repositories" target="_blank" rel="noopener" data-magnetic>
            View more on GitHub
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 17 17 7M8 7h9v9"/></svg>
          </a>
        </div>
      </div>
    </section>
  `;
}
