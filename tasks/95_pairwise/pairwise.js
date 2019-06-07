export function pairwise(arr, expectedSum) {
  let arrToSearch = arr.slice();
  return arrToSearch.reduce((sum, item, index) => {
    for (let i = index + 1; i < arrToSearch.length; i++) {
      if (item + arrToSearch[i] === expectedSum) {
        arrToSearch[i] = '';
        return sum + index + i;
      }
    }
    return sum;
  }, 0);
}
