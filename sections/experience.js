import { experiences } from '../data/experience.js';
import { educationList } from '../data/education.js';
import { contactInfo } from '../data/contact.js';

export function renderExperience() {
  const host = document.querySelector('#experience-placeholder');
  if (!host) return;

  host.innerHTML = `
    <section id="experience" class="section experience">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow"><span class="idx">05</span> Career</span>
          <h2>Experience &amp; <span class="it">education</span></h2>
          <p class="lead">A mix of building real products for clients, leading a developer club, and formal computer-science training.</p>
        </div>

        <div class="exp-wrap">
          <div class="timeline">
            <span class="tl-progress" aria-hidden="true"></span>
            ${experiences.map((exp, i) => `
              <div class="exp-item reveal">
                <div class="exp-main">
                  <div class="exp-meta">
                    <span class="period">${exp.period}</span>
                    <span class="company">${exp.company}</span>
                  </div>
                  <h3>${exp.role}</h3>
                  <p class="summary">${exp.summary}</p>
                  <ul class="bullets">${exp.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
                  <ul class="tags">${exp.tags.map(t => `<li>${t}</li>`).join('')}</ul>
                </div>
              </div>`).join('')}
          </div>

          <div id="education" class="edu-col">
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
              <div class="meta" style="margin-top:0.7rem">
                <span>Bengali · Native</span>
                <span>English · Professional</span>
              </div>
            </div>
            <div class="edu-item reveal">
              <span class="kicker">Based in</span>
              <h3 style="margin-top:0.5rem">${contactInfo.location}</h3>
              <p class="where">Open to remote &amp; on-site roles</p>
              <div class="meta">
                <span><a href="tel:${contactInfo.phone}" style="color:var(--text-2)">${contactInfo.phone}</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
