import { projects } from '../../data/projects.js';

export function renderInstituteDetail() {
  const project = projects.find(p => p.id === 'institute');
  const container = document.querySelector('#detail-app');
  if (!project || !container) return;

  const features = [
    { icon: '👥', title: 'Student Management', desc: 'Registration, profiles, and role-based access control for students, faculty, and admins' },
    { icon: '📋', title: 'Attendance & Routine', desc: 'Weekly timetable viewer with real-time Firestore updates and attendance tracking' },
    { icon: '📅', title: 'Exam Schedule System', desc: 'Department and semester-wise exam routine publishing and viewing' },
    { icon: '📢', title: 'Notice Board', desc: 'Targeted notice delivery with department and semester filtering' },
    { icon: '🔔', title: 'Push Notifications', desc: 'Topic-based FCM notifications dispatched from admin to student devices' },
    { icon: '🤖', title: 'AI Study Assistant', desc: 'Gemini 2.5 Flash-powered chatbot answering academic questions' }
  ];

  const roleItems = [
    { title: 'Flutter Developer', desc: 'End-to-end development of both student and admin applications using Flutter & Dart' },
    { title: 'UI/UX Implementation', desc: 'Custom animations with Lottie, staggered animations, and responsive layouts' },
    { title: 'Firebase Integration', desc: 'Authentication, Cloud Firestore, FCM, Crashlytics — full Firebase suite' },
    { title: 'State Management', desc: 'Provider-based architecture with multiple ChangeNotifier providers' },
    { title: 'Full Project Ownership', desc: 'Architecture design, development, testing, and deployment of the complete ecosystem' }
  ];

  const techStack = [
    { name: 'Flutter', color: '#54C5F8', bg: 'rgba(84,197,248,0.1)' },
    { name: 'Dart', color: '#0175C2', bg: 'rgba(1,117,194,0.1)' },
    { name: 'Firebase', color: '#FFCA28', bg: 'rgba(255,202,40,0.1)' },
    { name: 'Provider', color: '#6366f1', bg: 'rgba(99,102,241,0.1)' },
    { name: 'Gemini AI', color: '#4285F4', bg: 'rgba(66,133,244,0.1)' },
    { name: 'Hive', color: '#FF9A00', bg: 'rgba(255,154,0,0.1)' },
    { name: 'FCM', color: '#FF6F00', bg: 'rgba(255,111,0,0.1)' },
    { name: 'ImageBB', color: '#22c55e', bg: 'rgba(34,197,94,0.1)' }
  ];

  const screenshotHtml = project.screenshots.map((src, i) => `
    <div class="gallery-item" style="animation-delay: ${i * 60}ms">
      <div class="gallery-img-wrapper">
        <img src="../../${src}" alt="Screenshot ${i + 1}" loading="lazy" />
        <div class="gallery-img-overlay">
          <span>View</span>
        </div>
      </div>
    </div>
  `).join('');

  const featureHtml = features.map(f => `
    <div class="institute-feature-card">
      <div class="feature-card-icon">${f.icon}</div>
      <h4>${f.title}</h4>
      <p>${f.desc}</p>
    </div>
  `).join('');

  const roleHtml = roleItems.map(r => `
    <div class="role-item">
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

  container.innerHTML = `
    <div class="cursor-dot" id="cursorDot"></div>
    <div class="cursor-ring" id="cursorRing"></div>

    <div class="institute-detail">
      <!-- Header -->
      <header class="institute-header">
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
      <section class="institute-hero">
        <div class="institute-hero-bg">
          <img src="../../${project.banner}" alt="My Institute Banner" />
          <div class="institute-hero-overlay"></div>
        </div>
        <div class="container institute-hero-content">
          <div class="institute-hero-badge">Flutter Project</div>
          <h1 class="institute-hero-title">My Institute</h1>
          <p class="institute-hero-subtitle">Complete ecosystem for digitizing institute management — student app, admin panel, AI assistant.</p>
          <div class="institute-hero-actions">
            <a href="${project.github}" target="_blank" class="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Source Code
            </a>
          </div>
        </div>
        <div class="institute-hero-scroll">
          <span>Scroll</span>
          <div class="scroll-line"><div class="scroll-dot"></div></div>
        </div>
      </section>

      <!-- Overview -->
      <section class="institute-section">
        <div class="container">
          <div class="institute-section-header">
            <span class="section-tag">Overview</span>
            <h2 class="section-title">Project <span class="gradient-text">Overview</span></h2>
          </div>
          <div class="institute-overview-content">
            <div class="overview-text">
              <p>My Institute is a complete institute management ecosystem comprising two companion Flutter applications — a student-facing app and an admin panel. It digitizes and streamlines the daily operations of educational institutions, solving the problem of scattered communication, manual attendance tracking, and paper-based notice distribution.</p>
              <p>The platform serves <strong>three user groups</strong>: <em>students</em> who access routines, notices, and exam schedules; <em>faculty/staff</em> who manage content; and <em>admins</em> who oversee the entire system through a dedicated dashboard.</p>
            </div>
            <div class="overview-stats">
              <div class="stat-card">
                <span class="stat-num">2</span>
                <span class="stat-label">Apps Built</span>
              </div>
              <div class="stat-card">
                <span class="stat-num">3</span>
                <span class="stat-label">User Roles</span>
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
      <section class="institute-section institute-section-alt">
        <div class="container">
          <div class="institute-section-header">
            <span class="section-tag">Features</span>
            <h2 class="section-title">Key <span class="gradient-text">Features</span></h2>
            <p class="section-subtitle">Everything an institute needs to go completely paperless</p>
          </div>
          <div class="institute-features-grid">
            ${featureHtml}
          </div>
        </div>
      </section>

      <!-- Screenshots -->
      <section class="institute-section">
        <div class="container">
          <div class="institute-section-header">
            <span class="section-tag">Gallery</span>
            <h2 class="section-title">App <span class="gradient-text">Screenshots</span></h2>
            <p class="section-subtitle">Student app and admin panel in action</p>
          </div>
          <div class="institute-gallery">
            ${screenshotHtml}
          </div>
        </div>
      </section>

      <!-- My Role -->
      <section class="institute-section institute-section-alt">
        <div class="container">
          <div class="institute-section-header">
            <span class="section-tag">My Role</span>
            <h2 class="section-title">What I <span class="gradient-text">Built</span></h2>
          </div>
          <div class="institute-role-grid">
            <div class="role-list">${roleHtml}</div>
            <div class="role-extra">
              <div class="role-card">
                <h4>End-to-End Development</h4>
                <p>I developed both apps from the ground up — architecting the UI/UX, implementing full frontend with custom animations (Lottie, staggered animations), integrating Firebase services (Auth, Firestore, FCM, Crashlytics), managing state with Provider, building the FCM notification engine (HTTP v1 API), and integrating the Gemini AI assistant.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack -->
      <section class="institute-section">
        <div class="container">
          <div class="institute-section-header">
            <span class="section-tag">Tech Stack</span>
            <h2 class="section-title">Technologies <span class="gradient-text">Used</span></h2>
          </div>
          <div class="institute-tech-wrap">
            ${techHtml}
          </div>
        </div>
      </section>

      <!-- Outcome -->
      <section class="institute-section institute-section-alt">
        <div class="container">
          <div class="institute-section-header">
            <span class="section-tag">Outcome</span>
            <h2 class="section-title">Impact & <span class="gradient-text">Results</span></h2>
          </div>
          <div class="institute-outcome">
            <div class="outcome-card">
              <div class="outcome-icon">📱</div>
              <h4>Paperless Management</h4>
              <p>Administrators can publish schedules and announcements in seconds. Students get instant access to up-to-date academic information from their phones.</p>
            </div>
            <div class="outcome-card">
              <div class="outcome-icon">⚡</div>
              <h4>Real-Time Efficiency</h4>
              <p>Firestore stream listeners ensure timetables, notices, and exam schedules update instantly across all devices, eliminating communication delays.</p>
            </div>
            <div class="outcome-card">
              <div class="outcome-icon">🎓</div>
              <h4>AI-Powered Learning</h4>
              <p>The Gemini AI study assistant enhances the learning experience, making the app not just a management tool but a daily academic companion.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <section class="institute-footer-nav">
        <div class="container">
          <div class="next-project-link-card" style="background: linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(20,20,25,0.4) 100%)">
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

  initInstituteCursor();
}

function initInstituteCursor() {
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
    const target = e.target.closest('a, button, .gallery-item, .institute-feature-card, .role-item, .tech-badge, .outcome-card');
    if (target) ring.classList.add('expanded');
    else ring.classList.remove('expanded');
  });
}
