export const components = new Promise(resolve => {
  document.addEventListener("DOMContentLoaded", () => {
    const latestPostContainer = document.querySelector(
      ".latest-posts__container"
    );
    const footerBlogContainer = document
      .querySelector(".footer__blog")
      .querySelector(".blog__container");
    resolve({
      latestPostContainer,
      footerBlogContainer
    });
  });
});
