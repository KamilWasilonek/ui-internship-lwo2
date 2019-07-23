import {data} from './fetchData.js';
import {components} from './components.js';
import {setPostsAttributes, formatFooterDate} from './helper-functions.js';

export function generateFooterPosts() {
  Promise.all([data, components]).then((response) => {
    const [data, components] = response;
    const maxTitleLength = 40;
    let postIndex = data.blogs.length - 1;

    for (let i = 0; i < 3; i++, postIndex--) {
      let actualPost = components.footerBlogContainer.children[i];

      // DOM elements
      let imgElement = actualPost.querySelector('.blog__post-img');
      let titleElement = actualPost.querySelector('.blog__post-title');
      let dateElement = actualPost.querySelector('.blog__post-date');

      // Date
      let date = new Date(data.blogs[postIndex].published);

      let postAttributes = {
        img: imgElement,
        newImg: data.blogs[postIndex].previewImg,
        title: titleElement,
        newTitle: data.blogs[postIndex].title.slice(0, maxTitleLength) + '...',
        date: dateElement,
        newDate: formatFooterDate(
            date.getDate(),
            date.getMonth(),
            date.getFullYear()
        ),
      };
      setPostsAttributes(postAttributes);
    }
  });
}
