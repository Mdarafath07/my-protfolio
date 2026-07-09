export function createProjectCard(project) {
  const hasLive = project.live ? '' : 'style="display:none;"';
  
  // Custom inside-the-mockup HTML structure for each project
  let innerMockupHtml = '';
  if (project.id === 'institute' || project.id === 'movie') {
    innerMockupHtml = ''; // Not used — full banner layout instead
  }

  // Create list items of stack tags
  const stackTags = project.stack.map(tech => `<span>${tech}</span>`).join('');

  const isBannerCard = project.id === 'institute' || project.id === 'movie' || project.id === 'smartstock';
  const prefix = project.id === 'smartstock' ? 'smartstock' : 'institute';

  const bannerSrc = project.id === 'institute'
    ? 'assets/my institute/my institute banner.png'
    : project.id === 'movie'
    ? 'assets/movie dekhba/movie dekhba banner.png'
    : 'assets/smartstock/smartstockbannar.png';

  const bannerLabel = project.id === 'institute' ? '🏛️ My Institute' : project.id === 'movie' ? '🎬 Movie Dekhba' : '📊 SmartStock';
  const bannerCardClass = project.id === 'smartstock' ? 'smartstock-card' : 'institute-card';
  const detailPage = project.id === 'institute' ? 'institute.html' : project.id === 'movie' ? 'movie.html' : 'smartstock.html';

  const previewHtml = isBannerCard ? `
    <div class="project-preview institute-banner-preview">
      <img src="${bannerSrc}" alt="" class="${prefix}-banner-img" />
      <div class="${prefix}-banner-overlay">
        <span class="${prefix}-banner-label">${bannerLabel}</span>
      </div>
      <div class="project-overlay">
        <div class="project-links">
          <a href="pages/projects/${detailPage}" class="project-link-btn view-details-btn" aria-label="View Details">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
            Details
          </a>
          <a href="${project.github}" target="_blank" class="project-link-btn project-link-ghost github-link-btn" aria-label="Source Code">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  ` : `
    <div class="project-preview">
      <div class="project-preview-bg" style="background: ${project.gradient}">
        <div class="project-mockup">
          <div class="phone-frame">
            <div class="phone-screen" style="background: #0f0f1a">
              <div class="phone-status-bar"><span>9:41</span><span>●●●</span></div>
              ${innerMockupHtml}
            </div>
          </div>
        </div>
      </div>
      <div class="project-overlay">
        <div class="project-links">
          <a href="pages/projects/${project.id}.html" class="project-link-btn view-details-btn" aria-label="View Details">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
            Details
          </a>
          <a href="${project.github}" target="_blank" class="project-link-btn project-link-ghost github-link-btn" aria-label="Source Code">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  `;

  return `
    <article class="project-card clickable-card${isBannerCard ? ' ' + bannerCardClass : ''}" data-category="${project.category}" data-id="${project.id}">
      <div class="project-card-inner">
        ${previewHtml}
        <div class="project-info">
          <div class="project-meta">
            <span class="project-category">Flutter Developer</span>
            <span class="project-year">${project.year}</span>
          </div>
          <h3 class="project-title">${project.title.split(' — ')[0]}</h3>
          <p class="project-desc">${project.desc}</p>
          <div class="project-stack">
            ${stackTags}
          </div>
        </div>
      </div>
    </article>
  `;
}

export function initProjectCardsLogic() {
  const cards = document.querySelectorAll('.clickable-card');
  
  cards.forEach(card => {
    // Navigate to the detail page on click, but ignore it if the user clicks external links directly
    card.addEventListener('click', (e) => {
      const isAnchor = e.target.closest('a');
      if (isAnchor) {
        // If clicking GitHub or Demo link specifically, allow normal navigation
        if (isAnchor.classList.contains('github-link-btn')) {
          return;
        }
      }
      
      // Otherwise, redirect to details page
      const projectId = card.dataset.id;
      window.location.href = `pages/projects/${projectId}.html`;
    });
  });
}
