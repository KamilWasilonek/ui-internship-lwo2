import {components} from './helper-functions.js';
import {helperFunctions} from './helper-functions.js';

export function runMenuAnimation() {
  components.then((response) => {
    const {navbarMenu, navbarMobileButton, navbarLogo} = response;

    const {
      setNavbarBackground,
      changeNavbarBackground,
      addScrollEffect,
      addEventToMenuItems,
    } = helperFunctions;
    document.addEventListener('DOMContentLoaded', () => {
      changeNavbarBackground();
      addEventToMenuItems();
    });

    navbarMobileButton.addEventListener('click', () => {
      if (window.scrollY < 200) {
        setNavbarBackground();
      }

      navbarMenu.classList.toggle('navbar__menu--active');
    });

    window.addEventListener('scroll', () => {
      changeNavbarBackground();
    });

    navbarLogo.addEventListener('click', function(event) {
      event.preventDefault();
      addScrollEffect(event.target);
    });
  });
}
