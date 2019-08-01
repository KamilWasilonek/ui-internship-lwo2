import {components} from './navbar-components.js';
import {
  setNavbarBackground,
  changeNavbarBackground,
  scrollToSection,
  addEventToMenuItems,
  throttle,
  activateMenuLink,
} from './helper-functions.js';

export function runMenuAnimation() {
  components.then((response) => {
    const {
      navbar,
      navbarMenu,
      navbarMobileButton,
      navbarLogo,
      linksList,
      menuSectionsList,
    } = response;

    changeNavbarBackground(navbar, navbarMenu);
    addEventToMenuItems(navbarMenu);

    navbarMobileButton.addEventListener('click', () => {
      if (window.scrollY < 200) {
        setNavbarBackground(navbar);
      }

      navbarMenu.classList.toggle('navbar__menu--active');
    });

    // eslint-disable-next-line no-undef
    window.addEventListener(
        'scroll',
        throttle(activateMenuLink, {linksList, menuSectionsList}, 10)
    );

    window.addEventListener('scroll', () => {
      changeNavbarBackground(navbar, navbarMenu);
    });

    navbarLogo.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection(event.target);
    });
  });
}
