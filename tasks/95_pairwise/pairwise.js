export function pairwise(arr, num) {
  return arr.reduce((sum, item, index) => {
    for (let i = index + 1; i < arr.length; i++) {
      if (item + arr[i] === num) {
        arr[index] = '';
        arr[i] = '';
        return sum + index + i;
      }
    }
    return sum;
  }, 0);
}
