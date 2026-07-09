import { projects } from '../data/projects.js';
import { createProjectCard, initProjectCardsLogic } from '../components/project-card.js';

export function renderProjects() {
  const projectsPlaceholder = document.querySelector('#projects-placeholder');
  if (!projectsPlaceholder) return;

  const initialCount = 3;
  const totalCount = projects.length;
  const hasMore = totalCount > initialCount;

  const cardsHtml = projects.map((proj, i) => {
    const hidden = hasMore && i >= initialCount ? ' style="display:none"' : '';
    return `<div class="project-card-wrap" data-index="${i}"${hidden}>${createProjectCard(proj)}</div>`;
  }).join('');

  projectsPlaceholder.innerHTML = `
    <section id="projects" class="section projects">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-tag">Portfolio</div>
          <h2 class="section-title">Featured <span class="gradient-text">Projects</span></h2>
          <p class="section-subtitle">Mobile apps built with passion, precision, and clean architecture</p>
        </div>

        <div class="project-filters reveal">
          <button class="filter-btn active" data-filter="all">All Projects</button>
          <button class="filter-btn" data-filter="apps">Mobile Apps</button>
        </div>

        <div class="projects-grid" id="projectsGrid">
          ${cardsHtml}
        </div>

        ${hasMore ? `
        <div class="projects-seemore reveal" id="projectsSeeMore">
          <button class="btn-secondary see-more-btn" id="seeMoreBtn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/>
            </svg>
            <span>See More Projects</span>
          </button>
        </div>
        ` : ''}

        <div class="projects-more reveal">
          <a href="https://github.com/Mdarafath07" target="_blank" class="btn-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  `;

  initFilterLogic();
  initProjectCardsLogic();

  if (hasMore) {
    initSeeMoreLogic();
  }
}

function initSeeMoreLogic() {
  const btn = document.querySelector('#seeMoreBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const wraps = document.querySelectorAll('.project-card-wrap[style*="display: none"]');
    let delay = 0;

    wraps.forEach((wrap, i) => {
      setTimeout(() => {
        wrap.style.display = '';
        wrap.style.animation = 'fadeScaleIn 0.5s ease both';
        const card = wrap.querySelector('.project-card');
        if (card) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        }
      }, delay);
      delay += 200;
    });

    btn.disabled = true;
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      <span>All Projects Loaded</span>
    `;
    btn.classList.add('loaded');
    setTimeout(() => {
      const container = document.querySelector('#projectsSeeMore');
      if (container) {
        container.style.transition = 'opacity 0.5s ease';
        container.style.opacity = '0';
        setTimeout(() => container.remove(), 500);
      }
    }, delay + 500);
  });
}

function initFilterLogic() {
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach(card => {
        const cat = card.dataset.category;
        const show = filter === 'all' || cat === filter;
        if (show) {
          card.classList.remove('filtered-out');
          card.style.display = '';
        } else {
          card.classList.add('filtered-out');
          setTimeout(() => {
            if (card.classList.contains('filtered-out')) {
              card.style.display = 'none';
            }
          }, 300);
        }
      });
    });
  });
}
