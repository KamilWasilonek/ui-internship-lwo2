import {components} from './tabs-components.js';

export function addTabSwitchingEffect() {
  components.then((response) => {
    const {tabsButtonsList, contentList, activeTab, tabs, buttons} = response;

    (function initFirstTab() {
      activeTab.style.opacity = 1;
    })();

    let visibleTab = activeTab;

    changeSectionHeight();

    window.addEventListener('resize', () => {
      changeSectionHeight();
    });

    tabsButtonsList.addEventListener('click', (event) => {
      let target = event.target;
      if (target.tagName === 'BUTTON') {
        removeButtonActiveClass();
        highlightButton(target);
        let elementToShow = findContent(target.dataset.id);
        hideContent();
        showElement(elementToShow);
        visibleTab = elementToShow;
        changeSectionHeight();
      }

      function highlightButton(btn) {
        btn.classList.add('tabs__btn--active');
      }

      function removeButtonActiveClass() {
        buttons.forEach((element) => {
          element.classList.remove('tabs__btn--active');
        });
      }

      function hideContent() {
        for (let i = 0; i < contentList.length; i++) {
          contentList[i].style.opacity = '0';
        }
      }

      function showElement(elementToShow) {
        const localEl = elementToShow;
        localEl.style.opacity = '1';
      }

      function findContent(id) {
        for (let i = 0; i < contentList.length; i++) {
          if (id === contentList[i].dataset.id) {
            return contentList[i];
          }
        }
      }
    });

    function changeSectionHeight() {
      if (window.innerWidth <= 767) {
        let newHeight = visibleTab.offsetHeight + 240;
        tabs.style.height = newHeight + 'px';
      }
    }
  });
}
