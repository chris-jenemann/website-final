const blur = document.getElementById('blur')
const brightness = document.getElementById('brightness')
const button = document.getElementById('main-button')
const aboutSection = document.querySelector('#about');

function increaseBlur() {
  const scrollProgress = window.scrollY / (window.innerHeight * 2);
  const maxBlur = window.innerHeight * 0.1;
  const blurValue = scrollProgress * maxBlur;
  const darknessOpacity = Math.min(scrollProgress * 0.5, 0.5); // max 50% dark overlay

  blur.style.backdropFilter = `blur(${blurValue}px)`;
  brightness.style.opacity = darknessOpacity;
}
    

function scrollDown(){
aboutSection.scrollIntoView({behavior: "smooth"})

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

button.addEventListener('click', scrollDown)