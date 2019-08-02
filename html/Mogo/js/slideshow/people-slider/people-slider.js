import {components} from './people-components.js';
import {slide, moveRight, moveLeft} from '../helper-functions.js';

export function runPeopleSlider() {
  components.then(({peopleSlides, peopleNextBtn, peoplePrevBtn}) => {
    let currentSlideId = 0;

    slide(peopleSlides, 0);

    peopleNextBtn.addEventListener('click', () => {
      currentSlideId = moveRight(peopleSlides, currentSlideId);
    });

    peoplePrevBtn.addEventListener('click', () => {
      currentSlideId = moveLeft(peopleSlides, currentSlideId);
    });
  });
}
