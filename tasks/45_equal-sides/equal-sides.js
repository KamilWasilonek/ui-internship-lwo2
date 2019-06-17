export function findEqualIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let left = sumElements(arr.slice(0, i));
    let right = sumElements(arr.slice(i + 1));
    if (left === right) {
      return i;
    }
  }
  return -1;
}

function sumElements(arrToSum) {
  return arrToSum.reduce((sum, val) => sum + val, 0);
}
