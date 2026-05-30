const blur = document.getElementById('blur')
const brightness = document.getElementById('brightness')
const button = document.getElementById('main-button')
const aboutSection = document.querySelector('#about');

const bg = document.getElementById('bg');
bg.style.height = window.screen.height + 'px';

function increaseBlur() {
  const scrollProgress = Math.min(window.scrollY / (window.innerHeight * 0.85), 1);

  // Fade in the pre-blurred layer — opacity only, compositor-only change
  blur.style.opacity = scrollProgress;
  brightness.style.opacity = scrollProgress * 0.45;
}

function scrollDown() {
  aboutSection.scrollIntoView({ behavior: "smooth" });
}

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      increaseBlur();
      ticking = false;
    });
    ticking = true;
  }
});

button.addEventListener('click', scrollDown);