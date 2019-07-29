export const components = new Promise((resolve) => {
  document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementsByTagName('body')[0];
    const gallery = document.querySelector('.gallery');
    const popup = document.querySelector('.gallery__show');
    const popupOverlay = document.querySelector('.gallery__overlay');
    const imgToShow = document.querySelector('.gallery__img-show img');

    resolve({
      body,
      gallery,
      popup,
      popupOverlay,
      imgToShow,
    });
  });
});
