export function setNavbarBackground(navbar) {
  navbar.classList.add('navbar--with-bg');
}

function removeNavbarBackground(navbar) {
  navbar.classList.remove('navbar--with-bg');
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

    let target = event.target;
    if (target.tagName === 'A') {
      scrollToSection(event.target);
    }
  });
}

export function throttle(fn, args, wait) {
  let time = Date.now();
  return function() {
    if (time + wait - Date.now() < 0) {
      fn(args);
      time = Date.now();
    }
  };
}

export function findSectionConectedToMenulink(menuSectionsList, sectionName) {
  let sectionElementName = Object.keys(menuSectionsList).find((item) => {
    return item === sectionName;
  });
  return menuSectionsList[sectionElementName];
}

export function activateMenuLink({linksList, menuSectionsList}) {
  let scrollPos = document.documentElement.scrollTop;

  for (let i = 0; i < linksList.length; i++) {
    let currLink = linksList[i];
    if (currLink.getAttribute('href') !== '#') {
      let sectionName = currLink.getAttribute('href');
      let sectionElement = findSectionConectedToMenulink(
          menuSectionsList,
          sectionName
      );
      if (
        sectionElement.offsetTop <= scrollPos &&
        sectionElement.offsetTop + sectionElement.scrollHeight > scrollPos
      ) {
        currLink.classList.add('navbar__menu-link--active');
      } else {
        currLink.classList.remove('navbar__menu-link--active');
      }
    }
  }
}
