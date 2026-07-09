import { projects } from '../../data/projects.js';

export function renderMovieDetail() {
  const project = projects.find(p => p.id === 'movie');
  const container = document.querySelector('#detail-app');
  if (!project || !container) return;

  const features = [
    { icon: '🔥', title: 'Content Discovery', desc: 'Trending carousel, popular/top-rated/upcoming sections, and infinite-scroll genre-based explore views' },
    { icon: '▶️', title: 'Multi-Server Playback', desc: 'In-app player with multiple embed sources and automatic server fallback options' },
    { icon: '📺', title: 'TV Show Support', desc: 'Per-season episode browsing with cast, crew, ratings, and trailers' },
    { icon: '🔐', title: 'User Authentication', desc: 'Email/password registration and Google Sign-In with Firebase Auth persistence' },
    { icon: '❤️', title: 'Personalized Library', desc: 'Favorites and watchlist synced across devices via Cloud Firestore' },
    { icon: '🎯', title: 'Continue Watching', desc: 'Recent playback history with automatic session tracking for the last 20 items' }
  ];

  const roleItems = [
    { title: 'Full-Stack Flutter Developer', desc: 'End-to-end architecture, UI layer, state management, and business logic implementation' },
    { title: 'UI/UX Design Implementation', desc: 'Netflix-style Material 3 interface with custom theming, animations, and responsive layouts' },
    { title: 'TMDB API Integration', desc: 'Robust Dio-based HTTP client consuming 30+ REST API endpoints with Bearer auth and error handling' },
    { title: 'Streaming Infrastructure', desc: 'Multi-server video playback engine with dynamic URL generation and user-selectable source fallback' },
    { title: 'Cross-Platform Support', desc: 'Consistent behavior across Android, iOS, and Web with platform-specific WebView implementations' }
  ];

  const techStack = [
    { name: 'Flutter', color: '#54C5F8', bg: 'rgba(84,197,248,0.1)' },
    { name: 'Dart', color: '#0175C2', bg: 'rgba(1,117,194,0.1)' },
    { name: 'Riverpod', color: '#7C3AED', bg: 'rgba(124,58,237,0.1)' },
    { name: 'Firebase', color: '#FFCA28', bg: 'rgba(255,202,40,0.1)' },
    { name: 'TMDB API', color: '#01D277', bg: 'rgba(1,210,119,0.1)' },
    { name: 'Dio', color: '#2196F3', bg: 'rgba(33,150,243,0.1)' },
    { name: 'GoRouter', color: '#FF5252', bg: 'rgba(255,82,82,0.1)' },
    { name: 'CustomPainter', color: '#FFCA28', bg: 'rgba(255,202,40,0.1)' }
  ];

  const screenshotHtml = project.screenshots.map((src, i) => `
    <div class="movie-gallery-item" style="animation-delay: ${i * 60}ms">
      <div class="gallery-img-wrapper">
        <img src="../../${src}" alt="Screenshot ${i + 1}" loading="lazy" />
        <div class="gallery-img-overlay">
          <span>View</span>
        </div>
      </div>
    </div>
  `).join('');

  const featureHtml = features.map(f => `
    <div class="movie-feature-card">
      <div class="feature-card-icon">${f.icon}</div>
      <h4>${f.title}</h4>
      <p>${f.desc}</p>
    </div>
  `).join('');

  const roleHtml = roleItems.map(r => `
    <div class="movie-role-item">
      <div class="role-item-dot"></div>
      <div class="role-item-content">
        <h4>${r.title}</h4>
        <p>${r.desc}</p>
      </div>
    </div>
  `).join('');

  const techHtml = techStack.map(t => `
    <div class="tech-badge" style="background: ${t.bg}; border-color: ${t.color}30; color: ${t.color}">
      <span class="tech-badge-dot" style="background: ${t.color}; box-shadow: 0 0 6px ${t.color}"></span>
      ${t.name}
    </div>
  `).join('');

  const liveHtml = project.live
    ? `<a href="${project.live}" target="_blank" class="btn-primary">
         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
         Live Demo
       </a>`
    : '';

  container.innerHTML = `
    <div class="cursor-dot" id="cursorDot"></div>
    <div class="cursor-ring" id="cursorRing"></div>

    <div class="movie-detail">
      <!-- Header -->
      <header class="movie-header">
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

      <!-- Hero Banner -->
      <section class="movie-hero">
        <div class="movie-hero-bg">
          <img src="../../${project.banner}" alt="Movie Dekhba Banner" />
          <div class="movie-hero-overlay"></div>
        </div>
        <div class="container movie-hero-content">
          <div class="movie-hero-badge">Flutter Project</div>
          <h1 class="movie-hero-title">Movie Dekhba</h1>
          <p class="movie-hero-subtitle">Netflix-style movie & TV show discovery and streaming platform with multi-server playback.</p>
          <div class="movie-hero-actions">
            ${liveHtml}
            <a href="${project.github}" target="_blank" class="btn-primary" style="background:rgba(255,255,255,0.08);box-shadow:none">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Source Code
            </a>
          </div>
        </div>
        <div class="movie-hero-scroll">
          <span>Scroll</span>
          <div class="scroll-line"><div class="scroll-dot"></div></div>
        </div>
      </section>

      <!-- Overview -->
      <section class="movie-section">
        <div class="container">
          <div class="movie-section-header">
            <span class="section-tag">Overview</span>
            <h2 class="section-title">Project <span class="gradient-text">Overview</span></h2>
          </div>
          <div class="movie-overview-content">
            <div class="overview-text">
              <p>Movie Dekhba is a full-featured, production-grade mobile application for discovering, browsing, and streaming movies and TV shows. Built with Flutter and powered by The Movie Database (TMDB) API, the app delivers a Netflix-style content experience with seamless authentication, personalized watchlists, multi-server video playback, and cross-platform support across Android, iOS, and Web.</p>
              <p>The application addresses a common gap in media consumption: there is no single, well-designed interface that aggregates trending content, <strong>personalized libraries</strong>, and <em>multi-source streaming</em> into one cohesive, beautifully designed experience.</p>
            </div>
            <div class="overview-stats">
              <div class="stat-card">
                <span class="stat-num">30+</span>
                <span class="stat-label">API Endpoints</span>
              </div>
              <div class="stat-card">
                <span class="stat-num">3</span>
                <span class="stat-label">Platforms</span>
              </div>
              <div class="stat-card">
                <span class="stat-num">10+</span>
                <span class="stat-label">Core Features</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="movie-section movie-section-alt">
        <div class="container">
          <div class="movie-section-header">
            <span class="section-tag">Features</span>
            <h2 class="section-title">Key <span class="gradient-text">Features</span></h2>
            <p class="section-subtitle">A complete streaming platform experience</p>
          </div>
          <div class="movie-features-grid">
            ${featureHtml}
          </div>
        </div>
      </section>

      <!-- Screenshots -->
      <section class="movie-section">
        <div class="container">
          <div class="movie-section-header">
            <span class="section-tag">Gallery</span>
            <h2 class="section-title">App <span class="gradient-text">Screenshots</span></h2>
            <p class="section-subtitle">Movie discovery and streaming in action</p>
          </div>
          <div class="movie-gallery">
            ${screenshotHtml}
          </div>
        </div>
      </section>

      <!-- My Role -->
      <section class="movie-section movie-section-alt">
        <div class="container">
          <div class="movie-section-header">
            <span class="section-tag">My Role</span>
            <h2 class="section-title">What I <span class="gradient-text">Built</span></h2>
          </div>
          <div class="movie-role-grid">
            <div class="role-list">${roleHtml}</div>
            <div class="role-extra">
              <div class="role-card" style="background:linear-gradient(135deg, rgba(239,68,68,0.08), rgba(249,115,22,0.05));border-color:rgba(239,68,68,0.15)">
                <h4>End-to-End Ownership</h4>
                <p>As the sole developer, I was responsible for the complete delivery — from architecture design and TMDB API integration (30+ endpoints) to Firebase Auth/Firestore configuration, multi-server video playback engine, cross-platform WebView handling, Riverpod state management, and Material 3 UI implementation with 45+ custom SVG icons drawn with CustomPainter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack -->
      <section class="movie-section">
        <div class="container">
          <div class="movie-section-header">
            <span class="section-tag">Tech Stack</span>
            <h2 class="section-title">Technologies <span class="gradient-text">Used</span></h2>
          </div>
          <div class="movie-tech-wrap">
            ${techHtml}
          </div>
        </div>
      </section>

      <!-- Outcome -->
      <section class="movie-section movie-section-alt">
        <div class="container">
          <div class="movie-section-header">
            <span class="section-tag">Outcome</span>
            <h2 class="section-title">Impact & <span class="gradient-text">Results</span></h2>
          </div>
          <div class="movie-outcome">
            <div class="outcome-card">
              <div class="outcome-icon">🎬</div>
              <h4>Production-Grade App</h4>
              <p>A fully functional media streaming application demonstrating complete ownership of a non-trivial cross-platform project from concept to deployment.</p>
            </div>
            <div class="outcome-card">
              <div class="outcome-icon">🔧</div>
              <h4>Clean Architecture</h4>
              <p>Feature-based layered architecture with Riverpod state management, Repository pattern, and proper separation of concerns ensures testability and maintainability.</p>
            </div>
            <div class="outcome-card">
              <div class="outcome-icon">🌐</div>
              <h4>Real-World API Integration</h4>
              <p>Consumes TMDB's REST API (30+ endpoints) with authentication, pagination, rate-limit handling, and graceful error recovery for a smooth user experience.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <section class="movie-footer-nav">
        <div class="container">
          <div class="next-project-link-card" style="background: linear-gradient(135deg, rgba(239,68,68,0.08) 0%, rgba(20,20,25,0.4) 100%)">
            <div class="next-label">Check Out More Projects</div>
            <a href="../../#projects" class="next-title-link">
              <h2>View All Projects</h2>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer class="detail-footer">
        <div class="container">
          <p>&copy; ${new Date().getFullYear()} Arafath. Crafted with Flutter principles.</p>
        </div>
      </footer>
    </div>
  `;

  initMovieCursor();
}

function initMovieCursor() {
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
    dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('a, button, .movie-gallery-item, .movie-feature-card, .movie-role-item, .tech-badge, .outcome-card');
    if (target) ring.classList.add('expanded');
    else ring.classList.remove('expanded');
  });
}
