import {runPeopleSlider} from './slideshow/people-slider/people-slider.js';
import {runMessageSlider} from './slideshow/message-slider/message-slider.js';
import {runMenuAnimation} from './sections-animation/animate-scroll.js';
import {addPopup} from './popup/popup.js';
import {addAccordionEffect} from './accordion/accordion.js';
// import {generateLatesPosts} from './fetchAPI/showLatestPosts.js';
// import {generateFooterPosts} from './fetchAPI/showFooterPosts.js';

// generateLatesPosts();
// generateFooterPosts();
runPeopleSlider();
runMessageSlider();
runMenuAnimation();
addPopup();
addAccordionEffect();
