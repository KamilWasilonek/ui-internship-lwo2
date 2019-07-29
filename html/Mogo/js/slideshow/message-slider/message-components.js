export const components = new Promise((resolve) => {
  document.addEventListener('DOMContentLoaded', () => {
    const messageSlider = document.querySelector('.message-slider');
    const messageSlides = messageSlider.querySelectorAll('.slider__slide');
    const messageNextBtn = messageSlider.querySelector('.slider__next-btn');
    const messagePrevBtn = messageSlider.querySelector('.slider__previous-btn');

    resolve({
      messageSlider,
      messageSlides,
      messageNextBtn,
      messagePrevBtn,
    });
  });
});
