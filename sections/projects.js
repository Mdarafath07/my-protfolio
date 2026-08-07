import { projects } from '../data/projects.js';
import { contactInfo } from '../data/contact.js';
import { createProjectCard } from '../components/project-card.js';

export function renderProjects() {
  const host = document.querySelector('#projects-placeholder');
  if (!host) return;

  host.innerHTML = `
    <section id="projects" class="section projects">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Selected Work</span>
          <h2>Projects that ship</h2>
          <p class="lead">Three production apps, each owned end-to-end — design, architecture, backend, testing and release.</p>
        </div>

        <div class="projects-grid">
          ${projects.map((p, i) => `<div class="reveal" style="transition-delay:${i * 70}ms">${createProjectCard(p)}</div>`).join('')}
        </div>

        <div class="reveal" style="margin-top:2.25rem;display:flex;justify-content:center">
          <a class="btn btn-ghost" href="${contactInfo.github}?tab=repositories" target="_blank" rel="noopener">
            View more on GitHub
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 17 17 7M8 7h9v9"/></svg>
          </a>
        </div>
      </div>
    </section>
  `;
}