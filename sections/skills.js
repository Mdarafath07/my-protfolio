import { skillGroups, focusStack } from '../data/skills.js';

const icons = {
  mobile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>',
  database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m8 6-6 6 6 6M16 6l6 6-6 6"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></svg>'
};

export function renderSkills() {
  const host = document.querySelector('#skills-placeholder');
  if (!host) return;

  host.innerHTML = `
    <section id="skills" class="section skills">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Stack</span>
          <h2>Tools I build with</h2>
          <p class="lead">A focused, production-tested toolkit for building cross-platform apps that stay fast and easy to maintain.</p>
        </div>

        <div class="focus-row reveal">
          <span class="label">Core focus</span>
          ${focusStack.map(t => `<li>${t}</li>`).join('')}
        </div>

        <div class="skills-grid">
          ${skillGroups.map((g, i) => `
            <div class="skill-group reveal" style="transition-delay:${i * 60}ms">
              <h3>
                <span class="gi" aria-hidden="true">${icons[g.icon]}</span>
                ${g.title}
              </h3>
              <ul>${g.skills.map(s => `<li>${s}</li>`).join('')}</ul>
            </div>`).join('')}
        </div>
      </div>
    </section>
  `;
}