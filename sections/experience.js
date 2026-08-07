import { experiences } from '../data/experience.js';
import { educationList } from '../data/education.js';

export function renderExperience() {
  const host = document.querySelector('#experience-placeholder');
  if (!host) return;

  host.innerHTML = `
    <section id="experience" class="section experience">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Career</span>
          <h2>Experience & education</h2>
          <p class="lead">A mix of building real products for clients, leading a developer club, and formal computer-science training.</p>
        </div>

        <div class="exp-wrap t-wrap">
          <div class="exp-list">
            ${experiences.map((exp, i) => `
              <div class="exp-item reveal" style="transition-delay:${i * 60}ms">
                <div class="top">
                  <h3>${exp.role}</h3>
                  <span class="period">${exp.period}</span>
                </div>
                <div class="company">${exp.company}</div>
                <p class="summary">${exp.summary}</p>
                <ul>${exp.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
                <ul class="tags">${exp.tags.map(t => `<li>${t}</li>`).join('')}</ul>
              </div>`).join('')}
          </div>

          <div id="education">
            <div class="edu-list">
              ${educationList.map((edu, i) => `
                <div class="edu-item reveal" style="transition-delay:${i * 70}ms">
                  <span class="kicker">Education</span>
                  <h3>${edu.degree}</h3>
                  <p class="where">${edu.institution}</p>
                  <div class="meta">
                    <span>${edu.period}</span>
                    ${edu.gpa ? `<span>${edu.gpa}</span>` : ''}
                    ${edu.detail ? `<span>${edu.detail}</span>` : ''}
                  </div>
                </div>`).join('')}
              <div class="edu-item reveal">
                <span class="kicker">Languages</span>
                <div class="meta" style="margin-top:0.6rem">
                  <span>Bengali · Native</span>
                  <span>English · Professional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}