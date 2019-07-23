export const data = new Promise((resolve, reject) => {
  const url = 'http://localhost:3000/api/blogs';
  fetch(url).then((response) => {
    response.json().then((json) => {
      if (json) {
        resolve(json);
      }
      reject('Fetch failed');
    });
  });
});
