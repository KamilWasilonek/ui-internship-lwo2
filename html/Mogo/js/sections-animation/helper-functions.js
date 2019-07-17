import {components} from './menu-elements.js';

const {navbar, navbarMenu} = components;

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
  const elementName = event.getAttribute('href');
  const element = document.querySelector('#' + elementName);
  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop,
  });
}

function addEventToMenuItems() {
  Array.from(navbarMenu.getElementsByTagName('li')).forEach((item) => {
    item.children[0].addEventListener('click', function(event) {
      event.preventDefault();
      addScrollEffect(event.target);
    });
  });
}

export const helperFunctions = {
  setNavbarBackground,
  changeNavbarBackground,
  addScrollEffect,
  addEventToMenuItems,
};
