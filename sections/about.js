export function renderAbout() {
  const host = document.querySelector('#about-placeholder');
  if (!host) return;

  const focus = [
    {
      t: 'Performance & polish',
      d: 'Animations at 60fps, small binary sizes, snappy first paint.',
      i: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>'
    },
    {
      t: 'Clean architecture',
      d: 'Provider, Riverpod, repository patterns — code that scales and reads well.',
      i: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></svg>'
    },
    {
      t: 'Ship to production',
      d: 'Firebase, FCM, APKs and web builds — I follow features from idea to release.',
      i: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>'
    }
  ];

  host.innerHTML = `
    <section id="about" class="section about">
      <div class="container">
        <div class="about-grid">
          <div class="about-copy reveal">
            <span class="eyebrow"><span class="idx">07</span> About</span>
            <h2>I turn product ideas into apps people <span class="it">actually use.</span></h2>
            <p>
              I'm <strong>Mohammad Arafath Uddin</strong> — Arafath to friends — a Flutter developer from Dhaka, Bangladesh.
              I've spent the last few years building production-grade mobile applications — ranging from an
              institute management ecosystem to inventory and POS solutions. I own everything from UI/UX design
              and state management to Firebase backend integration and app store releases.
            </p>
            <p>
              My engineering philosophy is rooted in <strong>clean, maintainable code</strong> and intuitive design.
              Whether I'm managing club operations as President of the Compact Polytechnic ICT Club,
              leading student mentorship programs, or solving complex retail inventory challenges, I focus on
              delivering practical solutions that create real-world value.
            </p>
            <p style="margin-bottom:0">
              I am currently pursuing a <strong>B.Sc. in Computer Science and Engineering</strong> at Eastern University,
              and am open to <strong>challenging Flutter development and technical support roles</strong> internationally.
            </p>
          </div>

          <aside class="about-side reveal">
            <figure class="about-photo" data-moment="liquid-hover" data-moment-opts='{"strength": 0.75}'>
              <img src="assets/profile/me.jpg" alt="Mohammad Arafath Uddin, Flutter developer, in Dhaka" width="400" height="460" />
            </figure>

            <div class="focus-card">
            ${focus.map(f => `
              <div class="fc-item">
                <span class="fc-ico" aria-hidden="true">${f.i}</span>
                <div class="fc-body"><b>${f.t}</b><p>${f.d}</p></div>
              </div>`).join('')}
            <div style="margin-top:1.4rem">
              <button class="btn btn-primary btn-block" data-scroll="#contact" data-magnetic>
                Let's work together
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;

  const btn = host.querySelector('[data-scroll="#contact"]');
  btn.addEventListener('click', () => {
    const target = document.querySelector('#contact');
    if (target) target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });
}
