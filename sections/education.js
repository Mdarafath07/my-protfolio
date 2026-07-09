import { educationList } from '../data/education.js';

export function renderEducation() {
  const educationPlaceholder = document.querySelector('#education-placeholder');
  if (!educationPlaceholder) return;

  const educationCardsHtml = educationList.map((edu, index) => `
    <div class="education-card reveal" style="--delay-idx: ${index}">
      <div class="education-card-glow"></div>
      <div class="education-card-header">
        <div class="education-icon-wrap" style="background: ${edu.iconColor}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c0 2 2.5 3 6 3s6-1 6-3v-5"/>
          </svg>
        </div>
        <div class="education-period">${edu.period}</div>
      </div>
      <div class="education-card-body">
        <h3 class="education-degree">${edu.degree}</h3>
        <p class="education-institution">${edu.institution}</p>
        <div class="education-gpa-badge">
          <span class="gpa-dot"></span>
          ${edu.gpa}
        </div>
      </div>
    </div>
  `).join('');

  educationPlaceholder.innerHTML = `
    <section id="education" class="section education">
      <div class="section-bg-accent section-bg-right"></div>
      <div class="container">
        <div class="section-header reveal">
          <div class="section-tag">Learning</div>
          <h2 class="section-title">Education <span class="gradient-text">Background</span></h2>
          <p class="section-subtitle">Academic milestones in computer science and foundational studies</p>
        </div>

        <div class="education-grid">
          ${educationCardsHtml}
        </div>
      </div>
    </section>
  `;
}
