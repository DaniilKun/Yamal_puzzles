// const slider = document.querySelector('.slider')
// const slideDiv = document.querySelectorAll('#slideDiv')
// const sliderLine = document.querySelector('.slider__line')

// const sliderNext = document.querySelector('#sliderNext')

// let sliderCount = 0
// let sliderWidth = slider.offsetWidth

// sliderNext.addEventListener('click', nextSlide)

// function nextSlide() {
//   sliderCount++
//   console.log(sliderCount);
//   if (sliderCount >=slideDiv.length) {
//     sliderCount = 0
//   }
//   rollSlider()
// }

// function rollSlider() {
//   sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
// }

// setInterval(
//   () => {
//     nextSlide()
//   },3000
// )
const slide = Array.from(document.querySelectorAll(".slide"));

let activeSlide = 0;
let time = 5000
slide[activeSlide].classList.add("slide_active");

function changeSlide() {
  if (activeSlide < slide.length - 1) {
    slide[activeSlide].classList.remove("slide_active");
    activeSlide++;
    slide[activeSlide].classList.add("slide_active");
  } else {
    slide[activeSlide].classList.remove("slide_active");
    activeSlide = 0
    slide[activeSlide].classList.add("slide_active");
  }
  setTimeout('changeSlide()', time)
}
changeSlide()