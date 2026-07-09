export function initTyped(elementSelector = '#typedText') {
  const el = document.querySelector(elementSelector);
  if (!el) return;

  const phrases = [
    'Flutter Experiences',
    'Mobile Apps that Wow',
    'Pixel-Perfect UIs',
    'Cross-Platform Magic',
    'Beautiful Dart Code',
    'Robust Architectures',
  ];

  let phraseIdx = 0, charIdx = 0, isDeleting = false;

  function type() {
    const current = phrases[phraseIdx];
    if (isDeleting) {
      el.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(type, 400);
        return;
      }
      setTimeout(type, 40);
    } else {
      el.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        isDeleting = true;
        setTimeout(type, 2200);
        return;
      }
      setTimeout(type, 70);
    }
  }

  setTimeout(type, 1200);
}
