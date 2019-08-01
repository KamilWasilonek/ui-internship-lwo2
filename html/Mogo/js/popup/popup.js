import {components} from './components.js';
export function addPopup() {
  components.then(({body, gallery, popup, popupOverlay, imgToShow}) => {
    gallery.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('gallery__details-box')) {
        const srcPath = event.target.previousElementSibling.getAttribute('src');

        // eslint-disable-next-line no-param-reassign
        popup.style.top = window.scrollY + 'px';

        popup.classList.add('gallery__show--active');

        imgToShow.setAttribute('src', srcPath);

        body.classList.add('popup-active');
      }
    });

    gallery.addEventListener('mouseout', (event) => {
      let target = event.target;
      if (target.classList.contains('gallery__details-box')) {
        target.classList.remove('gallery__details-box--active');
      }
    });

    gallery.addEventListener('mouseover', (event) => {
      let target = event.target;
      if (target.classList.contains('gallery__image')) {
        target.nextElementSibling.classList.add('gallery__details-box--active');
      }
    });

    popupOverlay.addEventListener('click', () => {
      popup.classList.remove('gallery__show--active');
      body.classList.remove('popup-active');
    });
  });
}
