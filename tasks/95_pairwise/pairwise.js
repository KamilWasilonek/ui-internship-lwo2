export function pairwise(arr, num) {
  let arrToSearch = arr;
  return arr.reduce((sum, item, index) => {
    for (let i = index + 1; i < arr.length; i++) {
      if (item + arr[i] === num) {
        arrToSearch[i] = '';
        return sum + index + i;
      }
    }
    return sum;
  }, 0);
}
