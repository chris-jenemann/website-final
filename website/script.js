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


function scrollDown() {
  aboutSection.scrollIntoView({ behavior: "smooth" });
}

let ticking = false;
window.addEventListener('scroll', decreaseBrighness);

button.addEventListener('click', scrollDown);