function highlightButton(btn) {
  btn.classList.add('tabs__btn--active');
}

function removeButtonActiveClass(buttons) {
  buttons.forEach((element) => {
    element.classList.remove('tabs__btn--active');
  });
}

function hideContent(contentList) {
  for (let i = 0; i < contentList.length; i++) {
    // eslint-disable-next-line no-param-reassign
    contentList[i].style.opacity = '0';
  }
}

function showElement(elementToShow) {
  // eslint-disable-next-line no-param-reassign
  elementToShow.style.opacity = '1';
}

function findContent(id, contentList) {
  for (let i = 0; i < contentList.length; i++) {
    if (id === contentList[i].dataset.id) {
      return contentList[i];
    }
  }
}

function changeSectionHeight(visibleTab, tabs) {
  if (window.innerWidth <= 767) {
    let newHeight = visibleTab.offsetHeight + 240;
    // eslint-disable-next-line no-param-reassign
    tabs.style.height = newHeight + 'px';
  }
}

export {
  highlightButton,
  removeButtonActiveClass,
  hideContent,
  showElement,
  findContent,
  changeSectionHeight,
};
