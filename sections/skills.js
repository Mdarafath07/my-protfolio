import { techStackCategories, technicalSkills, softSkills } from '../data/skills.js';

export function renderSkills() {
  const skillsPlaceholder = document.querySelector('#skills-placeholder');
  if (!skillsPlaceholder) return;

  // Generate Redesigned Tech Stack HTML
  const categoriesHtml = techStackCategories.map(cat => {
    const skillsListHtml = cat.skills.map(skill => `
      <div class="tech-stack-item" title="${skill.name}">
        <div class="tech-stack-icon-wrap">${skill.icon}</div>
        <span class="tech-stack-name">${skill.name}</span>
      </div>
    `).join('');

    return `
      <div class="skills-category-card reveal" style="--accent-color: ${cat.color}">
        <div class="category-card-glow"></div>
        <div class="category-header">
          <div class="category-icon-main" style="background: ${cat.color}15; color: ${cat.color}">
            ${cat.icon}
          </div>
          <div>
            <h3 class="category-title">${cat.title}</h3>
            <p class="category-subtitle">${cat.subtitle}</p>
          </div>
        </div>
        <div class="tech-stack-grid">
          ${skillsListHtml}
        </div>
      </div>
    `;
  }).join('');

  // Generate Technical Skills List HTML (no percentage — plain skill tags)
  const techSkillsHtml = technicalSkills.map(skill => `
    <div class="tech-pill reveal">
      <span class="tech-pill-dot" style="background: linear-gradient(135deg, #6366f1, #06b6d4)"></span>
      <span class="tech-pill-name">${skill}</span>
    </div>
  `).join('');

  // Generate Soft Skills Grid HTML (visually attractive cards)
  const softSkillsHtml = softSkills.map((skill, index) => `
    <div class="soft-skill-card reveal" style="--delay-idx: ${index}">
      <div class="soft-skill-glow"></div>
      <div class="soft-skill-icon">${skill.icon}</div>
      <h4 class="soft-skill-name">${skill.name}</h4>
      <p class="soft-skill-desc">${skill.desc}</p>
    </div>
  `).join('');

  skillsPlaceholder.innerHTML = `
    <section id="skills" class="section skills">
      <div class="section-bg-accent"></div>
      <div class="container">
        
        <!-- Part 1: Redesigned Tech Stack -->
        <div class="section-header reveal">
          <div class="section-tag">Expertise</div>
          <h2 class="section-title">My <span class="gradient-text">Tech Stack</span></h2>
          <p class="section-subtitle">Categorized technologies and approaches I use to build robust products</p>
        </div>

        <div class="tech-categories-grid">
          ${categoriesHtml}
        </div>

        <!-- Part 2: Technical Skills Grid -->
        <div class="tech-skills-section">
          <div class="section-header reveal" style="margin-top: 3rem; margin-bottom: 1.5rem;">
            <div class="section-tag">Capabilities</div>
            <h2 class="section-title">Technical <span class="gradient-text">Skills</span></h2>
            <p class="section-subtitle">In-depth development capabilities and framework features</p>
          </div>
          
          <div class="tech-pills-row">
            ${techSkillsHtml}
          </div>
        </div>

        <!-- Part 3: Soft Skills Grid -->
        <div class="soft-skills-section">
          <div class="section-header reveal" style="margin-top: 3rem; margin-bottom: 1.5rem;">
            <div class="section-tag">Core Qualities</div>
            <h2 class="section-title"><span class="gradient-text">Soft Skills</span></h2>
            <p class="section-subtitle">How I lead, collaborate, and manage execution workflows</p>
          </div>

          <div class="soft-skills-grid">
            ${softSkillsHtml}
          </div>
        </div>

      </div>
    </section>
  `;
}
