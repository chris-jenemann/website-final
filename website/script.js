const blur = document.getElementById('blur')
const brightness = document.getElementById('brightness')
const button = document.getElementById('main-button')
const aboutSection = document.querySelector('#about');

// Use a stable initial height — don't update on resize so toolbar
// show/hide never causes the background to jump or zoom.
const bg = document.getElementById('bg');
bg.style.height = window.screen.height + 'px';

function increaseBlur() {
  // Scroll progress: 0 at top, 1 when about section is reached
  const scrollProgress = Math.min(window.scrollY / (window.innerHeight * 0.85), 1);
  const maxBlur = 12; // px
  const blurAmount = scrollProgress * maxBlur;
  const darknessOpacity = scrollProgress * 0.45;

  blur.style.backdropFilter = `blur(${blurAmount}px)`;
  blur.style.webkitBackdropFilter = `blur(${blurAmount}px)`;
  brightness.style.opacity = darknessOpacity;
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