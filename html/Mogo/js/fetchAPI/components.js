export const components = new Promise((resolve) => {
  document.addEventListener('DOMContentLoaded', () => {
    const latestPostArticles = document.getElementsByClassName(
        'latest-posts__article'
    );
    const latestPostContainer = document.querySelector(
        '.latest-posts__container'
    );
    const footerBlogContainer = document
        .querySelector('.footer__blog')
        .querySelector('.blog__container');
    resolve({
      latestPostArticles: latestPostArticles,
      latestPostContainer: latestPostContainer,
      footerBlogContainer: footerBlogContainer,
    });
  });
});
