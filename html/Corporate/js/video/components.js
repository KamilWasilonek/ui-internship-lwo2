export const components = new Promise((resolve) => {
  document.addEventListener('DOMContentLoaded', () => {
    const videoBtn = document.querySelector('.banner__video-btn');
    const video = document.querySelector('.banner__video');
    resolve({
      videoBtn,
      video,
    });
  });
});
