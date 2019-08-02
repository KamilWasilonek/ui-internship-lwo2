function slide(messageSlides, currentSlideId) {
  for (let i = 0; i <= messageSlides.length - 1; i++) {
    if (i === currentSlideId) {
      messageSlides[i].classList.add('slider__slide--active');
    } else {
      messageSlides[i].classList.remove('slider__slide--active');
    }
  }
}

function moveRight(slides, currentSlideId) {
  // eslint-disable-next-line no-param-reassign
  currentSlideId = ++currentSlideId % slides.length;
  slide(slides, currentSlideId);
  return currentSlideId;
}

function moveLeft(slides, currentSlideId) {
  if (currentSlideId === 0) {
    // eslint-disable-next-line no-param-reassign
    currentSlideId = slides.length - 1;
  } else {
    // eslint-disable-next-line no-param-reassign
    currentSlideId -= 1;
  }
  slide(slides, currentSlideId);
  return currentSlideId;
}

export {slide, moveRight, moveLeft};
