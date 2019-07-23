/* eslint-disable max-len */
import {data} from './fetchData.js';
import {components} from './components.js';
import {getMonthByValue} from './helper-functions.js';

export function generateLatesPosts() {
  Promise.all([data, components]).then(
      (response) => {
        const {latest, blogs} = response[0];
        const {latestPostContainer} = response[1];
        const maxTitleLength = 60;
        const maxDescLength = 150;
        const howManyPosts = latest.length;

        for (let i = 0; i < howManyPosts; i++) {
          const article = createContainer(
              'article',
              'article latest-posts__article'
          );

          // Image
          const imgContainer = createContainer('div', 'article__image');
          const img = createPostImg('img', blogs[i].previewImg, 'article__img');

          const date = new Date(blogs[i].published);
          const imgDate = createImgDate(
              'div',
              date.getDate(),
              getMonthByValue(date.getMonth()),
              'article__date'
          );

          imgContainer.appendChild(img);
          imgContainer.appendChild(imgDate);

          // Title
          let titleContent = blogs[i].title.slice(0, maxTitleLength) + '...';
          let title = createPostTitle(
              'h4',
              titleContent,
              'small-title article__title'
          );

          // Description
          let descContent = blogs[i].description.slice(0, maxDescLength) + '...';
          let desc = createPostDesc(
              'p',
              descContent,
              'section-description article__description'
          );

          // Views
          let viewContainer = createContainer('div', 'article__views');
          let viewIcons = createPostImg(
              'img',
              './assests/images/latest-posts/view.svg'
          );
          let commentsIcons = createPostImg(
              'img',
              './assests/images/latest-posts/comment-white-oval-bubble.png'
          );
          let views = createPostDesc('p', blogs[i].watched);
          let comment = createPostDesc('p', blogs[i].comments);
          let viewsElements = [viewIcons, views, commentsIcons, comment];
          viewsElements.forEach((element) => {
            viewContainer.appendChild(element);
          });

          // Joing elements
          const elements = [imgContainer, title, desc, viewContainer];
          for (let j = 0; j < elements.length; j++) {
            article.appendChild(elements[j]);
          }
          latestPostContainer.appendChild(article);
        }

        function createContainer(type, classList = '') {
          const imgContainer = document.createElement(type);
          imgContainer.className = classList;
          return imgContainer;
        }

        function createPostImg(type, imgSrc, classList = '') {
          const img = document.createElement(type);
          img.className = classList;
          img.setAttribute('src', imgSrc);
          return img;
        }

        function createImgDate(type, day, month, classList = '') {
          const date = document.createElement(type);
          date.className = classList;

          const dayBox = document.createElement('span');
          dayBox.innerHTML = day;

          const localMonth = document.createTextNode(month);

          date.appendChild(dayBox);
          date.appendChild(localMonth);
          return date;
        }

        function createPostTitle(type, content, classList = '') {
          const title = document.createElement(type);
          const titleLink = document.createElement('a');
          title.className = classList;
          titleLink.innerHTML = content;
          title.appendChild(titleLink);
          return title;
        }

        function createPostDesc(type, content, classList = '') {
          const desc = document.createElement(type);
          desc.className = classList;
          desc.innerHTML = content;
          return desc;
        }
      },
      (response) => {
        window.alert(response);
      }
  );
}
