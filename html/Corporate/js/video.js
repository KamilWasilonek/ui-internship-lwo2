/* eslint-disable no-undef */
document
    .getElementById('banner__video-btn')
    .addEventListener('click', function() {
      let video = document.getElementById('banner__video');
      if (video.paused === true) {
        video.play();
        document
            .getElementById('banner__video-btn')
            .classList.toggle('banner__video-btn--play');
      } else {
        video.pause();
        document
            .getElementById('banner__video-btn')
            .classList.toggle('banner__video-btn--play');
      }
    });
