import {components} from '../components.js';

export function startBannerVideo() {
  components.then((components) => {
    const {video, videoBtn} = components;
    videoBtn.addEventListener('click', function() {
      if (video.paused === true) {
        video.play();
        videoBtn.classList.toggle('banner__video-btn--play');
      } else {
        video.pause();
        videoBtn.classList.toggle('banner__video-btn--play');
      }
    });
  });
}
