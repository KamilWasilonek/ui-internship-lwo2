import {components} from './components.js';
export function addPopup() {
  components.then((response) => {
    const {
      body,
      gallery,
      popup,
      popupOverlay,
      imgToShow,
    } = response;

    gallery.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList[0] === 'gallery__details-box') {
        const srcPath = event.target.previousElementSibling.getAttribute('src');

        popup.style.top = window.scrollY + 'px';
        popup.style.display = 'block';

        imgToShow.setAttribute('src', srcPath);

        body.style.overflow = 'hidden';
      }
    });

    gallery.addEventListener('mouseout', (event) => {
      let target = event.target;
      if (target.classList[0] === 'gallery__details-box') {
        target.style.display = 'none';
      }
    });

    gallery.addEventListener('mouseover', (event) => {
      let target = event.target;
      if (target.classList[0] === 'gallery__image') {
        target.nextElementSibling.style.display = 'flex';
      }
    });

    popupOverlay.addEventListener('click', () => {
      popup.style.display = 'none';
      body.style.overflow = 'auto';
    });
  });
}
