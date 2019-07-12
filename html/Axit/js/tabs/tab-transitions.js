/* eslint-disable no-invalid-this */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-console */
export function changeTabsHeight() {
  if (window.innerWidth <= 767) {
    let newHeight =
      document.getElementsByClassName('tabs__active')[0].offsetHeight + 240;
    document.getElementById('tabs').style.height = newHeight + 'px';
  }
}

function removeButtonActiveClass(listToCheck) {
  let listItems = listToCheck.getElementsByTagName('li');

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].children[0].classList.remove('tabs__btn--active');
  }
}

function hideContent(contentList) {
  for (let i = 0; i < contentList.children.length; i++) {
    contentList.children[i].children[0].classList.remove('tabs__active');
    contentList.children[i].children[0].style.opacity = '0';
  }
}

function showContent(id) {
  document
      .getElementById('tabs__content-list')
      .children[id].children[0].classList.add('tabs__active');
  document.getElementById('tabs__content-list').children[
      id
  ].children[0].style.opacity = '1';
}

function tabSwitch(buttonId) {
  let idNumber = buttonId.substr(-1) - 1;
  removeButtonActiveClass(document.getElementById('tabs__buttons-list'));
  hideContent(document.getElementById('tabs__content-list'));
  showContent(idNumber);
  document.getElementById(buttonId).classList.add('tabs__btn--active');
  changeTabsHeight();
}

export function setListeners() {
  let buttonsList = document.getElementById('tabs__buttons-list').getElementsByTagName('li');
  for (let i = 0; i < buttonsList.length; i++) {
    document.getElementById(buttonsList.item(i).children[0].id).addEventListener('click', function() {
      tabSwitch(this.id);
    });
  }
}
