import {
  changeTabsHeight,
  setListeners,
  contentList,
} from './tab-transitions.js';

export function addTabSwitchingEffect() {
  document.addEventListener('DOMContentLoaded', function() {
    changeTabsHeight();
    contentList.children[0].children[0].style.opacity = '1';
    setListeners();
  });

  window.onresize = changeTabsHeight;
}
