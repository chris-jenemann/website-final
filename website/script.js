const blur= document.getElementById('blur')
const backdrop= document.getElementById('bg')
const button = document.getElementById('main-button')
const aboutSection = document.querySelector('#about');
function increaseBlur()
{
  const scrollProgress = window.scrollY / (window.innerHeight * 2);
  const maxBlur = window.innerHeight * 0.1; // max blur at bottom of page
  const blurValue = scrollProgress * maxBlur;
  const brightnessValue=Math.max(1 - scrollProgress, 0.5);
  blur.setAttribute("style", `backdrop-filter: blur(${blurValue}px)`);
  backdrop.style.filter = `brightness(${brightnessValue})`;
  console.log( brightnessValue);
  //console.log(scrollProgress)
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