import {components} from './components.js';

export function helperFunctions() {
  components.then((response) => {
    const {accordion, panelElements} = response;

    function hideEveryPanel() {
      for (let i = 0; i < panelElements.length; i++) {
        hidePanel(panelElements[i]);
        accordion[i].classList.remove('accordion--active');
        accordion[i].children[1].classList.remove('accordion__arrow--active');
      }
    }

    function hidePanel(panelElement) {
      const localPanel = panelElement;
      localPanel.style.padding = '0';
      localPanel.style.maxHeight = null;
    }

    function showPanel(panelElement) {
      const localPanel = panelElement;
      localPanel.style.padding = '10px';
      localPanel.style.maxHeight = panelElement.scrollHeight + 20 + 'px';
    }

    return {
      hideEveryPanel,
      hidePanel,
      showPanel,
    };
  });
}
