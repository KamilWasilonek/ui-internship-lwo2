const videoBtn = document.querySelector('.banner__video-btn');
const video = document.querySelector('.banner__video');

export function runBannerVideo() {
  videoBtn.addEventListener('click', function() {
    if (video.paused === true) {
      video.play();
      videoBtn.classList.toggle('banner__video-btn--play');
    } else {
      video.pause();
      videoBtn.classList.toggle('banner__video-btn--play');
    }
  });
}
