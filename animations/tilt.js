export function initTilt(selector = '#profileCard') {
  const card = document.querySelector(selector);
  if (!card) return;

  const STRENGTH = 12;
  let rect;

  function updateRect() { rect = card.getBoundingClientRect(); }
  updateRect();
  window.addEventListener('resize', updateRect);

  card.addEventListener('mousemove', (e) => {
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top  - rect.height / 2;
    const rotX = (-y / rect.height) * STRENGTH;
    const rotY =  (x / rect.width)  * STRENGTH;
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = 'transform 0.1s';
    updateRect();
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    card.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
  });
}
