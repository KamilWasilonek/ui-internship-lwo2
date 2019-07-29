import {components} from './navbar-components.js';
import {
  setNavbarBackground,
  changeNavbarBackground,
  scrollToSection,
  addEventToMenuItems,
  removeMenuItemBackground,
} from './helper-functions.js';

export function runMenuAnimation() {
  components.then((response) => {
    const {navbar, navbarMenu, navbarMobileButton, navbarLogo} = response;

    changeNavbarBackground(navbar, navbarMenu);
    addEventToMenuItems(navbarMenu);

    navbarMobileButton.addEventListener('click', () => {
      if (window.scrollY < 200) {
        setNavbarBackground(navbar);
      }

      navbarMenu.classList.toggle('navbar__menu--active');
    });

    window.addEventListener('scroll', () => {
      changeNavbarBackground(navbar, navbarMenu);
      if (window.scrollY < 200) {
        removeMenuItemBackground();
      }
    });

    navbarLogo.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection(event.target);
    });
  });
}
