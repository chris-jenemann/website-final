const blur= document.getElementById('blur')
const backdrop= document.getElementById('bg')
const button = document.getElementById('main-button')
const aboutSection = document.querySelector('#about');
function increaseBlur()
{
  const scrollProgress = window.scrollY / (window.innerHeight * 2);
  const maxBlur = window.innerHeight * 0.1; // max blur at bottom of page
  const blurValue = scrollProgress * maxBlur;
  const brightnessValue= Math.max(Math.abs(1-scrollProgress),.5);
  blur.setAttribute("style", `backdrop-filter: blur(${blurValue}px)`);
  backdrop.style.filter = `brightness(${brightnessValue})`;
  console.log( brightnessValue);
  //console.log(scrollProgress)
}
    

function scrollDown(){
aboutSection.scrollIntoView({behavior: "smooth"})

}





window.addEventListener('scroll',increaseBlur)
button.addEventListener('click', scrollDown)