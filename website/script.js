const blur = document.getElementById('blur')
const brightness = document.getElementById('brightness')
const button = document.getElementById('main-button')
const aboutSection = document.querySelector('#about');


function increaseBlur() {
  if (window.innerWidth <= 640) return;
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