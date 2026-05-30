const blur = document.getElementById('blur')
const brightness = document.getElementById('brightness')
const button = document.getElementById('main-button')
const aboutSection = document.querySelector('#about');

function decreaseBrighness()
{
  const scrollProgress = Math.min(window.scrollY / (window.innerHeight * 0.85), 1);
  const darknessOpacity = scrollProgress * 0.45;
  brightness.style.opacity = darknessOpacity;
}


function increaseBlur() {
if(screenX<640) return;
  const scrollProgress = Math.min(window.scrollY / (window.innerHeight * 0.85), 1);
  const maxBlur = 12; // px
  const blurAmount = scrollProgress * maxBlur;
  blur.style.backdropFilter = `blur(${blurAmount}px)`;
  blur.style.webkitBackdropFilter = `blur(${blurAmount}px)`;


}

function scrollDown() {
  aboutSection.scrollIntoView({ behavior: "smooth" });
}

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      increaseBlur();
      decreaseBrighness();
      ticking = false;
    });
    ticking = true;
  }
});

button.addEventListener('click', scrollDown);