import {components} from './people-components.js';
import {slide} from '../helper-functions.js';

export function runPeopleSlider() {
  components.then((response) => {
    const {
      peopleSlides,
      peopleNextBtn,
      peoplePrevBtn,
    } = response;

    let peopleCurrentSlide = 0;

    slide(peopleSlides, 0);

    peopleNextBtn.addEventListener('click', () => {
      if (peopleCurrentSlide === peopleSlides.length - 1) {
        peopleCurrentSlide = 0;
      } else {
        peopleCurrentSlide += 1;
      }
      slide(peopleSlides, peopleCurrentSlide);
    });

    peoplePrevBtn.addEventListener('click', () => {
      if (peopleCurrentSlide === 0) {
        peopleCurrentSlide = peopleSlides.length - 1;
      } else {
        peopleCurrentSlide -= 1;
      }
      slide(peopleSlides, peopleCurrentSlide);
    });
  });
}
