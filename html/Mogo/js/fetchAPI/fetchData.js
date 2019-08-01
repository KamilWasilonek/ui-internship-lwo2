export const data = new Promise((resolve, reject) => {
  const url = 'https://simple-server-12345yui.herokuapp.com/api/blogs';
  fetch(url).then((response) => {
    response.json().then((json) => {
      if (json) {
        resolve(json);
      }
      reject('Fetch failed');
    });
  });
});
