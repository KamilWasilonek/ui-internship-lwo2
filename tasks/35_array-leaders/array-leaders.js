/* eslint "require-jsdoc": 0 */
export const arrayLeaders = (arr) => {
  let resArr = [];
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    let subArr = (arr.slice(i + 1, arrLength));
    subArr.push(0);
    let subArrSum = subArr.reduce((a, b) => {
      return a + b;
    });
    if (arr[i] > subArrSum) {
      resArr.push(arr[i]);
    }
  }
  return resArr;
};
