export function initHeroCanvas(canvasSelector = '#heroCanvas') {
  const canvas = document.querySelector(canvasSelector);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const particles = [];
  let W, H, animId;

  const CONFIG = {
    count: 80,
    maxDist: 130,
    speed: 0.25,
    dotSize: 1.4,
    mouseRadius: 200,
    mouseForce: 0.4,
  };

  class Particle {
    constructor() { this.reset(true); }
    reset(init) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : -10;
      this.vx = (Math.random() - 0.5) * CONFIG.speed;
      this.vy = (Math.random() - 0.5) * CONFIG.speed;
      this.size = Math.random() * CONFIG.dotSize + 0.5;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.hue = Math.random() > 0.6 ? 230 : 190; // purple or cyan
    }
    update(mx, my) {
      const dx = this.x - mx, dy = this.y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CONFIG.mouseRadius) {
        const force = (CONFIG.mouseRadius - dist) / CONFIG.mouseRadius * CONFIG.mouseForce;
        this.vx += (dx / dist) * force * 0.5;
        this.vy += (dy / dist) * force * 0.5;
      }
      this.vx *= 0.99;
      this.vy *= 0.99;
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0) this.x = W;
      if (this.x > W) this.x = 0;
      if (this.y < 0) this.y = H;
      if (this.y > H) this.y = 0;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${this.alpha})`;
      ctx.fill();
    }
  }

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function initParticles() {
    particles.length = 0;
    for (let i = 0; i < CONFIG.count; i++) particles.push(new Particle());
  }

  let mouseX = -9999, mouseY = -9999;
  document.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < CONFIG.maxDist) {
          const alpha = (1 - d / CONFIG.maxDist) * 0.12;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(99,102,241,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(mouseX, mouseY); p.draw(); });
    drawConnections();
    animId = requestAnimationFrame(animate);
  }

  resize();
  initParticles();
  animate();

  const ro = new ResizeObserver(() => { resize(); initParticles(); });
  ro.observe(canvas);
}

export function initContactCanvas(canvasSelector = '#contactCanvas') {
  const canvas = document.querySelector(canvasSelector);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H;
  const DOTS = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  class FloatingDot {
    constructor() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.r = Math.random() * 1.5 + 0.5;
      this.vy = -(Math.random() * 0.3 + 0.1);
      this.alpha = Math.random() * 0.4 + 0.05;
      this.color = Math.random() > 0.5 ? '99,102,241' : '6,182,212';
    }
    update() {
      this.y += this.vy;
      if (this.y < -10) { this.y = H + 10; this.x = Math.random() * W; }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
      ctx.fill();
    }
  }

  resize();
  for (let i = 0; i < 40; i++) DOTS.push(new FloatingDot());

  (function loop() {
    ctx.clearRect(0, 0, W, H);
    DOTS.forEach(d => { d.update(); d.draw(); });
    requestAnimationFrame(loop);
  })();

  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
}
