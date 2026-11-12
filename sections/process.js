import { processSteps } from '../data/activities.js';

const icons = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m8 6-6 6 6 6M16 6l6 6-6 6"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>'
};

export function renderProcess() {
  const host = document.querySelector('#process-placeholder');
  if (!host) return;

  host.innerHTML = `
    <section id="process" class="section process">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow"><span class="idx">04</span> Process</span>
          <h2>From <span class="it">sketch</span> to store</h2>
          <p class="lead">The same four moves on every app — small enough to repeat, strict enough that nothing slips.</p>
        </div>

        <ol class="process-track">
          ${processSteps.map((s, i) => `
            <li class="process-step card reveal" data-tilt style="transition-delay:${i * 110}ms">
              <span class="step-icon" aria-hidden="true">${icons[s.icon]}</span>
              <span class="step-num">${String(i + 1).padStart(2, '0')}</span>
              <h3>${s.title}</h3>
              <p>${s.desc}</p>
            </li>`).join('')}
        </ol>
      </div>
    </section>
  `;
}
