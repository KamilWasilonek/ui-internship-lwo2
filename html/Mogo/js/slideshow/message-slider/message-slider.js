import {components} from './message-components.js';
import {slide} from '../helper-functions.js';

export function runMessageSlider() {
  components.then((response) => {
    const {
      messageSlides,
      messageNextBtn,
      messagePrevBtn,
    } = response;

    let messageCurrentSlide = 0;

    slide(messageSlides, 0);

    messageNextBtn.addEventListener('click', () => {
      if (messageCurrentSlide === messageSlides.length - 1) {
        messageCurrentSlide = 0;
      } else {
        messageCurrentSlide += 1;
      }
      slide(messageSlides, messageCurrentSlide);
    });

    messagePrevBtn.addEventListener('click', () => {
      if (messageCurrentSlide === 0) {
        messageCurrentSlide = messageSlides.length - 1;
      } else {
        messageCurrentSlide -= 1;
      }
      slide(messageSlides, messageCurrentSlide);
    });
  });
}
