const slides = document.querySelectorAll('.slide');
const pauseButton = document.querySelector('#pause');

let currentSlide = 0;
let isPlaying = true;
let timerID = null;

function nextSlide() {
  slides[currentSlide].classList.toggle('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide active';
}

function handler() {
  if (isPlaying) {
    clearInterval(timerID);
    pauseButton.innerHTML = 'Play';
    isPlaying = false;
  } else {
    timerID = setInterval(nextSlide, 2000);
    pauseButton.innerHTML = 'Pause';
    isPlaying = true;


  }
}
pauseButton.addEventListener('click', handler);

timerID = setInterval(nextSlide, 2000);
