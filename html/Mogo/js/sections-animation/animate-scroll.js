import {components} from './menu-elements.js';
import {helperFunctions} from './helper-functions.js';

const {navbarLogo, navbarMenu, navbarMobileButton} = components;

const {
  setNavbarBackground,
  changeNavbarBackground,
  addScrollEffect,
  addEventToMenuItems,
} = helperFunctions;

export function runMenuAnimation() {
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
}
