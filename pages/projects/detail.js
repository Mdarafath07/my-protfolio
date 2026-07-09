import { projects } from '../../data/projects.js';

export function renderProjectDetail(projectId) {
  const project = projects.find(p => p.id === projectId);
  const appContainer = document.querySelector('#detail-app');
  if (!project || !appContainer) {
    if (appContainer) {
      appContainer.innerHTML = `<div class="error-container"><h2>Project Not Found</h2><a href="/#projects">Back to Home</a></div>`;
    }
    return;
  }

  // Preloader or fade-in transition triggers
  document.body.classList.add('detail-loaded');

  const liveButtonHtml = project.live 
    ? `<a href="${project.live}" target="_blank" class="btn-primary detail-cta-btn">
         <span class="btn-glow"></span>
         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
           <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
         </svg>
         Live Demo
       </a>`
    : '';

  const featuresListHtml = project.features.map(feat => `
    <li class="detail-feature-item">
      <span class="feature-bullet"></span>
      <span class="feature-text">${feat}</span>
    </li>
  `).join('');

  const techStackListHtml = project.stack.map(tech => `
    <span class="detail-tech-pill">${tech}</span>
  `).join('');

  // Find next project for quick navigation
  const currentIdx = projects.findIndex(p => p.id === projectId);
  const nextProject = projects[(currentIdx + 1) % projects.length];

  // Screenshots grid — support both local paths and URLs
  const isLocalImg = (path) => !path.startsWith('http://') && !path.startsWith('https://');
  const galleryHtml = project.screenshots.map((src, index) => `
    <div class="gallery-item" style="animation-delay: ${index * 100}ms">
      <div class="gallery-img-wrapper">
        ${isLocalImg(src)
          ? `<img src="../../${src}" alt="Screenshot ${index + 1}" loading="lazy" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0" />`
          : `<div class="gallery-mock-content" style="background: ${project.gradient}">
               <span class="gallery-mock-icon">${project.icon}</span>
               <span class="gallery-mock-label">${project.title.split(' — ')[0]} Mock #${index + 1}</span>
             </div>`
        }
        <div class="gallery-overlay">
          <span>Screenshot #${index + 1}</span>
        </div>
      </div>
    </div>
  `).join('');

  appContainer.innerHTML = `
    <!-- ===== CURSOR ===== -->
    <div class="cursor-dot" id="cursorDot"></div>
    <div class="cursor-ring" id="cursorRing"></div>

    <div class="detail-layout">
      <!-- Back Navigation -->
      <header class="detail-header">
        <div class="container header-container">
          <a href="../../#projects" class="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            <span>Back to Projects</span>
          </a>
          <div class="detail-nav-logo">
            <span class="logo-bracket">{</span>A<span class="logo-bracket">}</span>
          </div>
        </div>
      </header>

      <!-- Project Hero Section -->
      <section class="detail-hero" style="background: linear-gradient(180deg, ${project.gradient}10 0%, rgba(10,10,12,0) 100%)">
        <div class="container hero-container-grid">
          <div class="hero-left">
            <div class="detail-badge" style="border-color: ${project.gradient.split('#')[1]?.substring(0, 6) ? '#' + project.gradient.split('#')[1].substring(0, 6) : '#6366f1'}">
              <span>Flutter Project</span>
            </div>
            <h1 class="detail-title">${project.title}</h1>
            <p class="detail-subtitle">${project.desc}</p>
            
            <div class="detail-cta-row">
              ${liveButtonHtml}
              <a href="${project.github}" target="_blank" class="btn-secondary detail-cta-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Code
              </a>
            </div>
          </div>
          
          <div class="hero-right">
            <div class="detail-hero-mockup" style="background: ${project.gradient}">
              <div class="detail-mockup-icon">${project.icon}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- App Gallery Section -->
      <section class="detail-gallery-section">
        <div class="container">
          <h2 class="section-title-small">App <span class="gradient-text">Gallery</span></h2>
          <div class="gallery-grid">
            ${galleryHtml}
          </div>
        </div>
      </section>

      <!-- Content Core Grid -->
      <section class="detail-content-section">
        <div class="container content-grid">
          
          <div class="content-left">
            <div class="detail-card overview-card">
              <h3>Project Overview</h3>
              <p>${project.overview}</p>
            </div>

            <div class="detail-card architecture-card">
              <h3>Architecture & Patterns</h3>
              <p>${project.architecture}</p>
            </div>

            <div class="detail-card challenges-card">
              <h3>Challenges Solved</h3>
              <p>${project.challenges}</p>
            </div>

            <div class="detail-card process-card">
              <h3>Development Process</h3>
              <p>${project.process}</p>
            </div>
          </div>

          <div class="content-right">
            <div class="detail-sidebar-card">
              <h3>Technologies Used</h3>
              <div class="detail-tech-grid">
                ${techStackListHtml}
              </div>
            </div>

            <div class="detail-sidebar-card">
              <h3>Core Features</h3>
              <ul class="detail-features-list">
                ${featuresListHtml}
              </ul>
            </div>
          </div>

        </div>
      </section>

      <!-- Next Project Navigation -->
      <section class="detail-footer-nav">
        <div class="container">
          <div class="next-project-link-card" style="background: linear-gradient(135deg, ${nextProject.gradient}15 0%, rgba(20,20,25,0.4) 100%)">
            <div class="next-label">Next Project</div>
            <a href="${nextProject.id}.html" class="next-title-link">
              <h2>${nextProject.title}</h2>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <!-- Minimalist Footer -->
      <footer class="detail-footer">
        <div class="container">
          <p>© ${new Date().getFullYear()} Arafath. Crafted with Flutter principles.</p>
        </div>
      </footer>
    </div>
  `;

  initCursorLogic();
}

function initCursorLogic() {
  const dot = document.querySelector('#cursorDot');
  const ring = document.querySelector('#cursorRing');
  if (!dot || !ring) return;
  if (window.matchMedia('(hover: none)').matches) return;

  let ringX = 0, ringY = 0, dotX = 0, dotY = 0;

  document.addEventListener('mousemove', (e) => {
    dotX = e.clientX; 
    dotY = e.clientY;
  });

  function animateCursor() {
    ringX += (dotX - ringX) * 0.12;
    ringY += (dotY - ringY) * 0.12;
    dot.style.transform  = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('a, button, .gallery-item, .detail-cta-btn');
    if (target) ring.classList.add('expanded');
    else ring.classList.remove('expanded');
  });
}
