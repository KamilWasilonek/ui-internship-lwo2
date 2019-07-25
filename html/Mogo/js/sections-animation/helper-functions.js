import {components} from './navbar-components.js';

components.then((response) => {
  const {navbar, navbarMenu} = response;

  document.addEventListener('DOMContentLoaded', () => {
    function setNavbarBackground() {
      navbar.classList.add('navbar--with-bg');
    }

    function removeNavbarBackground() {
      navbar.classList.remove('navbar--with-bg');
    }

    function changeNavbarBackground() {
      if (window.scrollY >= 200) {
        setNavbarBackground();
      } else if (!navbarMenu.classList.contains('navbar__menu--active')) {
        removeNavbarBackground();
      }
    }

    function addScrollEffect(event) {
      if (event.getAttribute('href') === '#') {
        return;
      }
      const elementName = event.getAttribute('href');
      const element = document.querySelector('#' + elementName);
      window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop,
      });
    }

    function addEventToMenuItems() {
      let boxToHightlight;
      navbarMenu.addEventListener('click', (event) => {
        event.preventDefault();
        if (boxToHightlight) {
          boxToHightlight.style.background = 'none';
        }
        let target = event.target;
        if (target.tagName === 'A') {
          addScrollEffect(event.target);
          boxToHightlight = target.parentElement;
        } else if (target.tagName === 'LI') {
          addScrollEffect(event.target.firstElementChild);
          boxToHightlight = target;
        }
        boxToHightlight.style.background = 'rgba(121, 121, 121, 0.8)';
      });
    }

    resolve({
      setNavbarBackground,
      changeNavbarBackground,
      addScrollEffect,
      addEventToMenuItems,
    });
  });
});
