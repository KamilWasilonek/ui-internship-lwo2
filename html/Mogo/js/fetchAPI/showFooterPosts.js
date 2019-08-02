import { getPostFromServer } from "./fetchData.js";
import { components } from "./components.js";
import { setPostsAttributes, formatFooterDate } from "./helper-functions.js";

export function generateFooterPosts() {
  const postsFromServer = getPostFromServer(
    "https://simple-server-12345yui.herokuapp.com/api/blogs"
  );
  Promise.all([postsFromServer, components]).then(
    ([postsFromServer, components]) => {
      const {
        blogs
      } = postsFromServer;

      const {
        footerBlogContainer
      } = components
     
      const maxTitleLength = 40;
      let postIndex = blogs.length - 1;

      for (let i = 0; i < 3; i++, postIndex--) {
        let actualPost = footerBlogContainer.children[i];

        // DOM elements
        const imgElement = actualPost.querySelector(".blog__post-img");
        const titleElement = actualPost.querySelector(".blog__post-title");
        const dateElement = actualPost.querySelector(".blog__post-date");

        // Date
        const date = new Date(blogs[postIndex].published);

        const postElements = {
          img: imgElement,
          title: titleElement,
          date: dateElement,
        }

        const dataToSet = {
          newImg: blogs[postIndex].previewImg,
          newTitle:
            blogs[postIndex].title.slice(0, maxTitleLength) + "...",
          newDate: formatFooterDate(
            date.getDate(),
            date.getMonth(),
            date.getFullYear()
          )
        }
        setPostsAttributes(postElements,dataToSet);
      }
    }
  );
}
