/* ============================================================
   Motion engine — aurora canvas, tilt, magnetic, counters,
   timeline draw, preloader. Vanilla JS, transform/opacity only.
   All effects honour prefers-reduced-motion and pause when the
   tab is hidden.
   ============================================================ */

import { terminalScript } from '../data/activities.js';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ---------- Preloader ---------- */
export function initPreloader() {
  if (reduced()) {
    document.body.classList.add('ready');
    return;
  }

  const el = document.createElement('div');
  el.className = 'preloader';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = `
    <div class="pl-name">
      <span style="animation-delay:0.05s">{DEV-</span><span class="it" style="animation-delay:0.14s">ARAFATH}</span>
    </div>
    <div class="pl-bar"><i id="plFill"></i></div>
    <div class="pl-count" id="plCount">00</div>
  `;
  document.body.prepend(el);

  const fill = el.querySelector('#plFill');
  const count = el.querySelector('#plCount');
  let p = 0;

  const finish = () => {
    clearInterval(timer);
    fill.style.width = '100%';
    count.textContent = '100';
    setTimeout(() => {
      el.classList.add('done');
      document.body.classList.add('ready');
      setTimeout(() => el.remove(), 600);
    }, 180);
  };

  // Fast fake progress that completes on real load (or 2.2s cap)
  const timer = setInterval(() => {
    p = Math.min(p + Math.random() * 14 + 4, 92);
    fill.style.width = p + '%';
    count.textContent = String(Math.round(p)).padStart(2, '0');
  }, 90);

  const done = () => finish();
  window.addEventListener('load', done, { once: true });
  setTimeout(done, 2200); // never block longer than this
}

/* ---------- Aurora background canvas ---------- */
export function startAurora(canvas) {
  if (!canvas) return;

  if (reduced()) {
    canvas.style.background =
      'radial-gradient(60% 50% at 75% 10%, rgba(26,75,224,0.07), transparent 70%),' +
      'radial-gradient(55% 45% at 15% 30%, rgba(120,140,175,0.05), transparent 70%)';
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let w = 0, h = 0, dpr = 1, raf = 0, running = true, t = 0;

  const blobs = [
    { hueD: '77,124,255', hueL: '26,75,224',   a: 0.07,  rx: 0.42, ry: 0.38, sx: 0.82, sy: 0.18, spd: 0.00016, ph: 0.0 },
    { hueD: '150,170,210', hueL: '120,140,175', a: 0.055, rx: 0.5,  ry: 0.42, sx: 0.18, sy: 0.32, spd: 0.00021, ph: 2.1 },
    { hueD: '190,205,230', hueL: '150,165,190', a: 0.045, rx: 0.34, ry: 0.3,  sx: 0.55, sy: 0.65, spd: 0.00013, ph: 4.4 }
  ];

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 1.6);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  window.addEventListener('resize', resize, { passive: true });

  // Fewer pixels painted on small screens
  const isSmall = () => w < 640;

  const draw = () => {
    if (!running) return;
    t += isSmall() ? 0.6 : 1;
    const dark = document.documentElement.classList.contains('dark');
    ctx.clearRect(0, 0, w, h);

    for (const b of blobs) {
      const x = (b.sx + Math.sin(t * b.spd * 2 + b.ph) * 0.16) * w;
      const y = (b.sy + Math.cos(t * b.spd * 1.6 + b.ph) * 0.14) * h;
      const r = Math.max(w, h) * (isSmall() ? b.rx * 0.9 : b.rx);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${dark ? b.hueD : b.hueL},${dark ? b.a : b.a * 0.8})`);
      g.addColorStop(1, `rgba(${dark ? b.hueD : b.hueL},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }
    raf = requestAnimationFrame(draw);
  };

  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) { t = 0; raf = requestAnimationFrame(draw); }
    else cancelAnimationFrame(raf);
  });

  raf = requestAnimationFrame(draw);
}

/* ---------- Scroll progress bar ---------- */
export function initProgress() {
  const bar = document.querySelector('#progressBar');
  if (!bar) return;
  let ticking = false;

  const update = () => {
    ticking = false;
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    bar.style.width = (p * 100) + '%';
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
}

/* ---------- Stat counters ---------- */
export function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;

  const run = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.suffix || '';
    if (reduced()) { el.innerHTML = `${target}<em>${suffix}</em>`; return; }
    const dur = 1100;
    const start = performance.now();
    const step = (now) => {
      const k = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - k, 3); // ease-out cubic
      el.innerHTML = `${Math.round(target * eased)}<em>${suffix}</em>`;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { run(e.target); obs.unobserve(e.target); }
    });
  }, { threshold: 0.5 });

  els.forEach((el) => obs.observe(el));
}

/* ---------- 3D tilt on cards (desktop pointers only) ---------- */
export function initTilt() {
  if (!finePointer() || reduced()) return;

  document.querySelectorAll('[data-tilt]').forEach((card) => {
    const strength = 6;
    let raf = 0;

    const move = (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform =
          `perspective(900px) rotateX(${(-py * strength).toFixed(2)}deg) rotateY(${(px * strength).toFixed(2)}deg) translateY(-4px)`;
      });
    };

    const leave = () => {
      cancelAnimationFrame(raf);
      card.style.transform = '';
    };

    card.addEventListener('pointermove', move);
    card.addEventListener('pointerleave', leave);
  });
}

/* ---------- Magnetic buttons (desktop pointers only) ---------- */
export function initMagnetic() {
  if (!finePointer() || reduced()) return;

  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    const strength = 0.28;
    let raf = 0;

    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
      });
    });
    el.addEventListener('pointerleave', () => {
      cancelAnimationFrame(raf);
      el.style.transform = '';
    });
  });
}

/* ---------- Pointer 3D parallax — hero portrait & copy ---------- */
export function initParallax() {
  if (!finePointer() || reduced()) return;

  const media = document.querySelector('.hero-media');
  const copy = document.querySelector('.hero-copy');
  if (!media && !copy) return;

  let raf = 0;

  window.addEventListener('pointermove', (e) => {
    if (!document.body.classList.contains('ready')) return; // wait for entrance
    const nx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      if (media) {
        media.style.transform =
          `perspective(900px) translate3d(${(nx * 14).toFixed(1)}px, ${(ny * 10).toFixed(1)}px, 0) ` +
          `rotateY(${(nx * 5).toFixed(2)}deg) rotateX(${(-ny * 4).toFixed(2)}deg)`;
      }
      if (copy) {
        copy.style.transform = `translate3d(${(nx * -6).toFixed(1)}px, ${(ny * -4).toFixed(1)}px, 0)`;
      }
    });
  }, { passive: true });
}

/* ---------- Project showcase: 3D tilt, spotlight, parallax, counters ---------- */
export function initShowcase() {
  const cards = document.querySelectorAll('[data-showcase]');
  if (!cards.length) return;

  /* Metric count-up — runs for everyone (scroll into view) */
  const metricObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      metricObserver.unobserve(el);

      const raw = el.dataset.value || '';
      const match = raw.match(/^([\d.]+)(.*)$/);
      if (!match) return;

      const target = parseFloat(match[1]);
      const suffix = match[2] || '';
      const b = el.querySelector('b');
      if (!b) return;

      if (reduced() || !Number.isFinite(target)) {
        b.textContent = raw;
        return;
      }

      const dur = 1200;
      const start = performance.now();
      const decimals = (match[1].split('.')[1] || '').length;
      const step = (now) => {
        const k = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - k, 3);
        b.textContent = (target * eased).toFixed(decimals) + suffix;
        if (k < 1) requestAnimationFrame(step);
        else b.textContent = raw;
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.pc-metric').forEach((el) => metricObserver.observe(el));

  /* Pointer-driven 3D — desktop only */
  if (!finePointer() || reduced()) return;

  cards.forEach((card) => {
    const frame = card.querySelector('.pc-frame');
    const rail = card.querySelector('.pc-rail');
    let raf = 0;

    const move = (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const cx = px - 0.5;
      const cy = py - 0.5;

      card.style.setProperty('--gx', (px * 100).toFixed(1) + '%');
      card.style.setProperty('--gy', (py * 100).toFixed(1) + '%');

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform =
          `perspective(1300px) rotateX(${(-cy * 6).toFixed(2)}deg) rotateY(${(cx * 7).toFixed(2)}deg) translate3d(0,-6px,0)`;
        if (frame) {
          frame.style.transform =
            `translate3d(${(cx * -16).toFixed(1)}px, ${(cy * -12).toFixed(1)}px, 0) scale(1.06)`;
        }
        if (rail) {
          rail.style.transform =
            `translate3d(${(cx * 10).toFixed(1)}px, ${(cy * 6).toFixed(1)}px, 0)`;
        }
      });
    };

    const leave = () => {
      cancelAnimationFrame(raf);
      card.style.transform = '';
      if (frame) frame.style.transform = '';
      if (rail) rail.style.transform = '';
    };

    card.addEventListener('pointermove', move);
    card.addEventListener('pointerleave', leave);
  });
}

/* ---------- Animated terminal ---------- */
export function initTerminal() {
  const body = document.querySelector('#termBody');
  if (!body) return;

  const script = terminalScript;

  const reducedMode = reduced();

  const paint = (line) => {
    const row = document.createElement('div');
    row.className = 'term-row';
    row.innerHTML = `<span class="term-prompt">~</span><span class="term-cmd">${line.cmd}</span>`;
    body.appendChild(row);
    return row;
  };

  const output = (text, ok = true) => {
    const row = document.createElement('div');
    row.className = 'term-row term-out';
    row.innerHTML = `<span class="term-ok">${ok ? '✓' : '›'}</span><span>${text}</span>`;
    body.appendChild(row);
  };

  const typeInto = (row, text, done) => {
    const target = row.querySelector('.term-cmd');
    if (reducedMode) {
      target.textContent = text;
      done();
      return;
    }
    let i = 0;
    const tick = () => {
      target.textContent = text.slice(0, ++i);
      if (i < text.length) setTimeout(tick, 42);
      else done();
    };
    tick();
  };

  const run = () => {
    body.innerHTML = '';
    let idx = 0;
    const next = () => {
      if (idx >= script.length) return;
      const item = script[idx++];
      const row = paint(item);
      typeInto(row, item.cmd, () => {
        setTimeout(() => {
          output(item.out);
          body.scrollTop = body.scrollHeight;
          setTimeout(next, 620);
        }, reducedMode ? 0 : 320);
      });
    };
    next();
  };

  if (reducedMode) {
    run();
    return;
  }

  // Play once when the terminal scrolls into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      run();
    });
  }, { threshold: 0.35 });

  observer.observe(body);
}

/* ---------- Timeline draw + node lighting ---------- */
export function initTimeline() {
  const tl = document.querySelector('.timeline');
  if (!tl) return;
  const line = tl.querySelector('.tl-progress');
  const items = tl.querySelectorAll('.exp-item');
  if (!line || !items.length) return;

  if (reduced()) {
    line.classList.add('done');
    items.forEach((i) => i.classList.add('lit'));
    return;
  }

  const rect = () => tl.getBoundingClientRect();

  const update = () => {
    const r = rect();
    const focus = window.innerHeight * 0.65;
    const progress = Math.min(Math.max((focus - r.top) / r.height, 0), 1);
    line.style.height = `calc(${(progress * 100).toFixed(1)}% - ${progress > 0 ? 0 : 0}px)`;

    items.forEach((item) => {
      const ir = item.getBoundingClientRect();
      item.classList.toggle('lit', ir.top + 14 < focus);
    });
  };

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(() => { update(); ticking = false; }); }
  }, { passive: true });
  update();
}
