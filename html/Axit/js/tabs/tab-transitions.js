const tabsButtonsList = document.querySelector('.tabs__buttons-list');
export const contentList = document.querySelector('#tabs__content-list');

export function changeTabsHeight() {
  if (window.innerWidth <= 767) {
    let newHeight =
      document.querySelector('.tabs__active')[0].offsetHeight + 240;
    document.querySelector('.tabs').style.height = newHeight + 'px';
  }
}

function removeButtonActiveClass(listToCheck) {
  let listItems = listToCheck.getElementsByTagName('li');

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].children[0].classList.remove('tabs__btn--active');
  }
}

function hideContent(contentList) {
  const localContentList = contentList;
  for (let i = 0; i < contentList.children.length; i++) {
    localContentList.children[i].children[0].classList.remove('tabs__active');
    localContentList.children[i].children[0].style.opacity = '0';
  }
}

function showContent(id) {
  contentList.children[id].children[0].classList.add('tabs__active');
  contentList.children[id].children[0].style.opacity = '1';
}

function tabSwitch(buttonId) {
  let idNumber = buttonId.substr(-1) - 1;
  removeButtonActiveClass(tabsButtonsList);
  hideContent(contentList);
  showContent(idNumber);
  document.getElementById(buttonId).classList.add('tabs__btn--active');
  changeTabsHeight();
}

export function setListeners() {
  const buttonsList = tabsButtonsList.getElementsByTagName('li');
  for (let i = 0; i < buttonsList.length; i++) {
    document
        .getElementById(buttonsList.item(i).children[0].id)
        .addEventListener('click', function(event) {
          tabSwitch(event.target.id);
        });
  }
}
