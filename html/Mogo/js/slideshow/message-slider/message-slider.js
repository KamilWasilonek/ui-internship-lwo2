import {components} from './message-components.js';
import {
  slide,
  moveRight,
  moveLeft,
} from '../helper-functions.js';

export function runMessageSlider() {
  components.then(({messageSlides, messageNextBtn, messagePrevBtn}) => {
    let currentSlideId = 0;

    slide(messageSlides, 0);

    messageNextBtn.addEventListener('click', () => {
      currentSlideId = moveRight(messageSlides, currentSlideId);
    });

    messagePrevBtn.addEventListener('click', () => {
      currentSlideId = moveLeft(messageSlides, currentSlideId);
    });
  });
}
