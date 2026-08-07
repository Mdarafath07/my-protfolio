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
            <span class="eyebrow">About</span>
            <h2>I turn product ideas into apps people actually use.</h2>
            <p>
              I'm <strong>Arafath</strong>, a Flutter developer and software engineering student from Dhaka.
              I've spent the last few years building production apps — from an institute management ecosystem
              to a retail POS system — owning everything from UI and state management to Firebase backends and releases.
            </p>
            <p>
              My work is guided by three things: <strong>clean, maintainable code</strong>, apps that feel fast
              on any device, and honest communication with the people I build for. I also mentor other developers
              — teaching has made me far better at explaining and defending technical decisions.
            </p>
            <p style="margin-bottom:0">
              I'm currently open to <strong>full-time, remote and freelance Flutter roles</strong> internationally.
            </p>
          </div>

          <aside class="focus-card reveal">
            ${focus.map(f => `
              <div class="fc-item">
                <span class="fc-ico" aria-hidden="true">${f.i}</span>
                <div class="fc-body"><b>${f.t}</b><p>${f.d}</p></div>
              </div>`).join('')}
            <div style="margin-top:1.25rem">
              <button class="btn btn-primary" data-scroll="#contact" style="width:100%">
                Let's work together
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
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