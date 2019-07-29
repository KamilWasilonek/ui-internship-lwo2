let boxToHightlight;
export function setNavbarBackground(navbar) {
  navbar.classList.add('navbar--with-bg');
}

function removeNavbarBackground(navbar) {
  navbar.classList.remove('navbar--with-bg');
}

export function removeMenuItemBackground() {
  if (boxToHightlight) {
    boxToHightlight.classList.remove('navbar__menu-item--active');
  }
}

export function changeNavbarBackground(navbar, navbarMenu) {
  if (window.scrollY >= 200) {
    setNavbarBackground(navbar);
  } else if (!navbarMenu.classList.contains('navbar__menu--active')) {
    removeNavbarBackground(navbar);
  }
}

export function scrollToSection(eventTarget) {
  if (eventTarget.getAttribute('href') === '#') {
    return;
  }
  const elementName = eventTarget.getAttribute('href');
  const element = document.querySelector('#' + elementName);
  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop,
  });
}

export function addEventToMenuItems(navbarMenu) {
  navbarMenu.addEventListener('click', (event) => {
    event.preventDefault();
    if (boxToHightlight) {
      boxToHightlight.classList.remove('navbar__menu-item--active');
    }
    let target = event.target;
    if (target.tagName === 'A') {
      scrollToSection(event.target);
      boxToHightlight = target.parentElement;
    } else if (target.tagName === 'LI') {
      scrollToSection(event.target.firstElementChild);
      boxToHightlight = target;
    }
    boxToHightlight.classList.add('navbar__menu-item--active');
  });
}
