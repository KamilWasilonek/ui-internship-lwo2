export const components = new Promise((resolve) => {
  const tabsButtonsList = document.querySelector('.tabs__buttons-list');
  const contentList = document
      .querySelector('.tabs__content-list')
      .querySelectorAll('.tabs__details-container');
  const activeTab = document.querySelector('.tabs__active');
  const tabs = document.querySelector('.tabs');
  const buttons = document.querySelectorAll('.tabs__btn');

  resolve({tabsButtonsList, contentList, activeTab, tabs, buttons});
});
