export function slide(slides, slideId) {
  const localSlides = slides;
  for (let i = 0; i <= localSlides.length - 1; i++) {
    if (i === slideId) {
      localSlides[i].style.display = 'flex';
    } else {
      localSlides[i].style.display = 'none';
    }
  }
}
