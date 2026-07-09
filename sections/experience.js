import { experiences } from '../data/experience.js';

export function renderExperience() {
  const experiencePlaceholder = document.querySelector('#experience-placeholder');
  if (!experiencePlaceholder) return;

  const timelineItemsHtml = experiences.map(exp => {
    const bulletsHtml = exp.bullets.map(b => `<li>${b}</li>`).join('');
    const tagsHtml = exp.tags.map(t => `<span>${t}</span>`).join('');

    return `
      <div class="timeline-item reveal" data-side="${exp.side}">
        <div class="timeline-dot">
          <div class="timeline-dot-inner"></div>
        </div>
        <div class="timeline-card">
          <div class="timeline-card-header">
            <div class="timeline-company-icon" style="background: ${exp.iconColor}">
              ${exp.iconSvg}
            </div>
            <div>
              <h3 class="timeline-role">${exp.role}</h3>
              <p class="timeline-company">${exp.company}</p>
            </div>
            <div class="timeline-period">${exp.period}</div>
          </div>
          <ul class="timeline-bullets">
            ${bulletsHtml}
          </ul>
          <div class="timeline-tags">
            ${tagsHtml}
          </div>
        </div>
      </div>
    `;
  }).join('');

  experiencePlaceholder.innerHTML = `
    <section id="experience" class="section experience">
      <div class="section-bg-accent section-bg-left"></div>
      <div class="container">
        <div class="section-header reveal">
          <div class="section-tag">Journey</div>
          <h2 class="section-title">Work <span class="gradient-text">Experience</span></h2>
          <p class="section-subtitle">My professional journey building mobile products, leading teams, and mentoring developers</p>
        </div>

        <div class="timeline" id="timeline">
          <div class="timeline-line"></div>
          ${timelineItemsHtml}
        </div>
      </div>
    </section>
  `;
}
