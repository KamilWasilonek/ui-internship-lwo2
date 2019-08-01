import {generateLatesPosts} from './fetchAPI/showLatestPosts.js';
import {generateFooterPosts} from './fetchAPI/showFooterPosts.js';
import {runMenuAnimation} from './sections-animation/animate-scroll.js';

generateLatesPosts();
generateFooterPosts();
runMenuAnimation();

