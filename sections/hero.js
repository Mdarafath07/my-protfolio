import { contactInfo } from '../data/contact.js';
import { icons } from '../data/skills.js';

export function renderHero() {
  const heroPlaceholder = document.querySelector('#hero-placeholder');
  if (!heroPlaceholder) return;

  heroPlaceholder.innerHTML = `
    <section id="home" class="hero">
      <canvas id="heroCanvas" class="hero-canvas"></canvas>

      <!-- Floating Orbs -->
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>

      <!-- Grid Overlay -->
      <div class="hero-grid"></div>

      <div class="hero-container">
        <div class="hero-content" id="heroContent">

          <!-- Floating Tech Icons (using correct official SVGs) -->
          <div class="tech-orbit" id="techOrbit">
            <div class="tech-icon tech-flutter" title="Flutter">
              ${icons.flutter}
            </div>
            <div class="tech-icon tech-dart" title="Dart">
              ${icons.dart}
            </div>
            <div class="tech-icon tech-firebase" title="Firebase">
              ${icons.firebase}
            </div>
            <div class="tech-icon tech-figma" title="Figma">
              ${icons.figma}
            </div>
            <div class="tech-icon tech-git" title="Git">
              ${icons.git}
            </div>
            <div class="tech-icon tech-vs" title="VS Code">
              ${icons.vscode}
            </div>
          </div>

          <!-- Hero Text -->
          <div class="hero-text-block">
            <div class="hero-badge">
              <div class="badge-dot"></div>
              <span>Available for Work</span>
            </div>

            <h1 class="hero-name">
              <span class="hero-name-sub">Hi, I'm</span>
              <span class="hero-name-main" id="heroName">Arafath</span>
            </h1>

            <div class="hero-role">
              <span class="role-prefix">I craft</span>
              <div class="typed-wrapper">
                <span class="typed-text" id="typedText"></span>
                <span class="typed-cursor">|</span>
              </div>
            </div>

            <p class="hero-description">
              Engineering <span class="highlight">pixel-perfect</span> Flutter applications 
              with <span class="highlight">exceptional UX</span> — turning complex ideas 
              into fluid mobile experiences.
            </p>

            <div class="hero-stats">
              <div class="hero-stat">
                <span class="stat-num" data-target="20">0</span><span class="stat-suffix">+</span>
                <span class="stat-label">Projects</span>
              </div>
              <div class="hero-stat-divider"></div>
              <div class="hero-stat">
                <span class="stat-num" data-target="3">0</span><span class="stat-suffix">+</span>
                <span class="stat-label">Years Exp</span>
              </div>
              <div class="hero-stat-divider"></div>
              <div class="hero-stat">
                <span class="stat-num" data-target="15">0</span><span class="stat-suffix">+</span>
                <span class="stat-label">Happy Clients</span>
              </div>
            </div>

            <div class="hero-cta">
              <a href="#contact" class="btn-primary" id="hireMeBtn">
                <span class="btn-glow"></span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.94 2 2 0 0 1 3.59 2.76h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17"/>
                </svg>
                Hire Me
              </a>
              <a href="assets/resume/Md.Arafath's Resume.png" target="_blank" class="btn-secondary" id="resumeBtn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                View Resume
              </a>
            </div>

            <div class="hero-socials">
              <a href="${contactInfo.github}" target="_blank" class="social-link" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="${contactInfo.linkedin}" target="_blank" class="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Profile Card -->
          <div class="profile-card-wrapper" id="profileCardWrapper">
            <div class="profile-card" id="profileCard">
              <div class="profile-card-glow"></div>
              <div class="profile-card-inner">
                <div class="profile-image-wrap">
                  <div class="profile-image-ring"></div>
                  <div class="profile-image-ring ring-2"></div>
                  <div class="profile-avatar" id="profileAvatar">
                    <img src="assets/profile/me.jpg" alt="Arafath" class="profile-photo" />
                  </div>
                </div>
                <div class="profile-info">
                  <h3 class="profile-name">MOHAMMAD ARAFATH UDDIN</h3>
                  <p class="profile-role">Flutter Developer</p>
                  <div class="profile-badge-row">
                    <span class="profile-badge">🇧🇩 Bangladesh</span>
                    <span class="profile-badge active-badge">● Open to Work</span>
                  </div>
                </div>
                <div class="profile-skills-mini">
                  <span>Flutter</span>
                  <span>Dart</span>
                  <span>Firebase</span>
                </div>
              </div>
              <!-- Floating Chips -->
              <div class="floating-chip chip-1">
                <img src="assets/logo/android.png" alt="Android" style="width:14px;height:14px;object-fit:contain;" />
                <span>Android</span>
              </div>
              <div class="floating-chip chip-2">
                <img src="assets/logo/iphone.png" alt="iOS" style="width:14px;height:14px;object-fit:contain;" />
                <span>iOS</span>
              </div>
              <div class="floating-chip chip-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#22c55e"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Clean Code</span>
              </div>
              <div class="floating-chip chip-4">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>100% On-Time</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Scroll Indicator -->
        <div class="scroll-indicator">
          <span>Scroll</span>
          <div class="scroll-line"><div class="scroll-dot"></div></div>
        </div>
      </div>
    </section>
  `;
}
