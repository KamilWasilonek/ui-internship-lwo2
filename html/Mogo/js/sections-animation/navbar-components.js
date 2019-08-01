export const components = new Promise((resolve) => {
  document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navbarMenu = document.querySelector('.navbar__menu');
    const navbarMobileButton = document.querySelector('.navbar__mobile-btn');
    const navbarLogo = document.querySelector('.navbar__logo');
    const linksList = document.getElementsByClassName('navbar__menu-link');

    const menuSectionsList = {
      'about': document.querySelector('#about'),
      'company-offer': document.querySelector('#company-offer'),
      'services': document.querySelector('#services'),
      'blog': document.querySelector('#blog'),
      'footer': document.querySelector('#footer'),
    };

    resolve({
      navbar,
      navbarMenu,
      navbarMobileButton,
      navbarLogo,
      linksList,
      menuSectionsList,
    });
  });
});
