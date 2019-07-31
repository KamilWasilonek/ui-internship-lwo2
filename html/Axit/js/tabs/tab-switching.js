import {components} from './tabs-components.js';
import {
  highlightButton,
  removeButtonActiveClass,
  hideContent,
  showElement,
  findContent,
  changeSectionHeight,
} from './helper-functions.js';

export function addTabSwitchingEffect() {
  components.then(
      ({tabsButtonsList, contentList, activeTab, tabs, buttons}) => {
        (function initFirstTab() {
        // eslint-disable-next-line no-param-reassign
          activeTab.style.opacity = 1;
        })();

        changeSectionHeight(activeTab, tabs);

        window.addEventListener('resize', () => {
          changeSectionHeight(activeTab, tabs);
        });

        tabsButtonsList.addEventListener('click', (event) => {
          let target = event.target;
          if (target.tagName === 'BUTTON') {
            removeButtonActiveClass(buttons);
            highlightButton(target);
            const elementToShow = findContent(target.dataset.id, contentList);
            hideContent(contentList);
            showElement(elementToShow);
            // eslint-disable-next-line no-param-reassign
            activeTab = elementToShow;
            changeSectionHeight(activeTab, tabs);
          }
        });
      }
  );
}
