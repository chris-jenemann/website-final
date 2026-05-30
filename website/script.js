const blur = document.getElementById('blur')
const brightness = document.getElementById('brightness')
const button = document.getElementById('main-button')
const aboutSection = document.querySelector('#about');

function increaseBlur() {
  if (window.innerWidth <= 640) return;
  const scrollProgress = window.scrollY / (window.innerHeight * 2);
  const darknessOpacity = Math.min(scrollProgress * 0.5, 0.5);
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