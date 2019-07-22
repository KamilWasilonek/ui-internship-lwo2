const messageSlider = document.querySelector('.message-slider');
const messageSlides = messageSlider.querySelectorAll('.slider__slide');
const messageNextBtn = messageSlider.querySelector('.slider__next-btn');
const messagePrevBtn = messageSlider.querySelector('.slider__previous-btn');
let messageCurrentSlide = 0;

const peopleSlider = document.querySelector('.people-slider');
const peopleSlides = peopleSlider.querySelectorAll('.slider__slide');
const peopleNextBtn = peopleSlider.querySelector('.slider__next-btn');
const peoplePrevBtn = peopleSlider.querySelector('.slider__previous-btn');
let peopleCurrentSlide = 0;

export function runSlideshow() {
  document.addEventListener('DOMContentLoaded', () => {
    slide(messageSlides, 0);
    slide(peopleSlides, 0);
  });
}

messageNextBtn.addEventListener('click', () => {
  if (messageCurrentSlide === messageSlides.length - 1) {
    messageCurrentSlide = 0;
  } else {
    messageCurrentSlide += 1;
  }
  slide(messageSlides, messageCurrentSlide);
});

peopleNextBtn.addEventListener('click', () => {
  if (peopleCurrentSlide === peopleSlides.length - 1) {
    peopleCurrentSlide = 0;
  } else {
    peopleCurrentSlide += 1;
  }
  slide(peopleSlides, peopleCurrentSlide);
});

messagePrevBtn.addEventListener('click', () => {
  if (messageCurrentSlide === 0) {
    messageCurrentSlide = messageSlides.length - 1;
  } else {
    messageCurrentSlide -= 1;
  }
  slide(messageSlides, messageCurrentSlide);
});

peoplePrevBtn.addEventListener('click', () => {
  if (peopleCurrentSlide === 0) {
    peopleCurrentSlide = messageSlides.length - 1;
  } else {
    peopleCurrentSlide -= 1;
  }
  slide(peopleSlides, peopleCurrentSlide);
});

function slide(slides, slideId) {
  const localSlides = slides;
  for (let i = 0; i <= localSlides.length - 1; i++) {
    if (i === slideId) {
      localSlides[i].style.display = 'flex';
    } else {
      localSlides[i].style.display = 'none';
    }
  }
}
