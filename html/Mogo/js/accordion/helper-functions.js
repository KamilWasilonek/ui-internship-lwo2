import {accordion, panelElements} from './components.js';

export function hideEveryPanel() {
  for (let i = 0; i < panelElements.length; i++) {
    hidePanel(panelElements[i]);
    accordion[i].classList.remove('accordion--active');
    accordion[i].children[1].classList.remove('accordion__arrow--active');
  }
}

export function hidePanel(panelElement) {
  const localPanel = panelElement;
  localPanel.style.padding = '0';
  localPanel.style.maxHeight = null;
}

export function showPanel(panelElement) {
  const localPanel = panelElement;
  localPanel.style.padding = '10px';
  localPanel.style.maxHeight = panelElement.scrollHeight + 20 + 'px';
}
