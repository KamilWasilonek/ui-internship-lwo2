/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-invalid-this */
import {changeTabsHeight, setListeners} from './tab-transitions.js';

document.addEventListener(
    'DOMContentLoaded',
    function() {
      changeTabsHeight();
      document.getElementById('tabs__content-list').children[0].children[0].style.opacity = '1';
      setListeners();
    },
    false
);

window.onresize = changeTabsHeight;
