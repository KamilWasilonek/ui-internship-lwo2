export const components = new Promise((resolve) => {
  document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navbarMenu = document.querySelector('.navbar__menu');
    const navbarMobileButton = document.querySelector('.navbar__mobile-btn');
    const navbarLogo = document.querySelector('.navbar__logo');

    resolve({
      navbar,
      navbarMenu,
      navbarMobileButton,
      navbarLogo,
    });
  });
});
