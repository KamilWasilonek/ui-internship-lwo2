export const components = new Promise((resolve) => {
  document.addEventListener('DOMContentLoaded', () => {
    const peopleSlider = document.querySelector('.people-slider');
    const peopleSlides = peopleSlider.querySelectorAll('.slider__slide');
    const peopleNextBtn = peopleSlider.querySelector('.slider__next-btn');
    const peoplePrevBtn = peopleSlider.querySelector('.slider__previous-btn');

    resolve({
      peopleSlider,
      peopleSlides,
      peopleNextBtn,
      peoplePrevBtn,
    });
  });
});
