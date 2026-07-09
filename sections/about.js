export function renderAbout() {
  const aboutPlaceholder = document.querySelector('#about-placeholder');
  if (!aboutPlaceholder) return;

  aboutPlaceholder.innerHTML = `
    <section id="about" class="section about">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-tag">Who I Am</div>
          <h2 class="section-title">Crafting Digital <span class="gradient-text">Experiences</span></h2>
          <p class="section-subtitle">Passionate Flutter developer turning complex ideas into seamless mobile realities</p>
        </div>

        <div class="about-grid">
          <div class="about-visual reveal">
            <div class="about-image-card">
              <div class="about-image-glow"></div>
              <div class="code-window">
                <div class="code-window-header">
                  <div class="code-dots"><span></span><span></span><span></span></div>
                  <span class="code-file">main.dart</span>
                </div>
                <pre class="code-body"><code><span class="code-kw">class</span> <span class="code-cls">ArafathDev</span> <span class="code-kw">extends</span> <span class="code-cls">FlutterDeveloper</span> {

  <span class="code-kw">final</span> <span class="code-cls">String</span> name <span class="code-op">=</span> <span class="code-str">"Arafath"</span>;
  <span class="code-kw">final</span> <span class="code-cls">String</span> passion <span class="code-op">=</span> <span class="code-str">"Mobile Excellence"</span>;
  <span class="code-kw">final</span> <span class="code-cls">List</span><span class="code-op">&lt;</span><span class="code-cls">String</span><span class="code-op">&gt;</span> skills <span class="code-op">=</span> [
    <span class="code-str">"Flutter"</span>, <span class="code-str">"Dart"</span>, <span class="code-str">"Firebase"</span>,
    <span class="code-str">"REST API"</span>, <span class="code-str">"Provider"</span>, <span class="code-str">"Clean Code"</span>
  ];

  <span class="code-cls">Widget</span> <span class="code-fn">buildApp</span>(<span class="code-cls">Context</span> ctx) {
    <span class="code-kw">return</span> <span class="code-cls">PremiumApp</span>(
      quality<span class="code-op">:</span> <span class="code-cls">Quality</span>.exceptional,
      stateManagement<span class="code-op">:</span> <span class="code-cls">State</span>.provider,
    );
  }
}</code></pre>
                <div class="code-cursor-blink"></div>
              </div>
            </div>
          </div>

          <div class="about-content reveal">
            <div class="about-text">
              <p>A passionate and dedicated <strong>Flutter Developer</strong> with strong expertise in mobile application development, Firebase services, and REST API integration.</p>
              <p>Experienced in building smart, efficient, and user-friendly applications that solve real-world problems. Passionate about creating modern digital experiences, mentoring aspiring developers, and continuously learning new technologies.</p>
            </div>

            <div class="about-highlights">
              <div class="highlight-card">
                <div class="highlight-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <div>
                  <h4>Performance First</h4>
                  <p>Smooth animations, optimized build sizes</p>
                </div>
              </div>
              <div class="highlight-card">
                <div class="highlight-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <h4>Clean Architecture</h4>
                  <p>Scalable, testable, maintainable codebases</p>
                </div>
              </div>
              <div class="highlight-card">
                <div class="highlight-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div>
                  <h4>Cross-Platform</h4>
                  <p>Unified code implementation for Android & iOS</p>
                </div>
              </div>

            </div>

            <div class="about-cta">
              <a href="#contact" class="btn-primary">Let's Work Together</a>
              <div class="availability-badge">
                <div class="availability-dot"></div>
                <span>Available Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
