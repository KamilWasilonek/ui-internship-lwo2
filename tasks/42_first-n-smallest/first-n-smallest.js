export function firstNSmallest(arr, numToReturn) {
  while (numToReturn < arr.length) {
    let largest = Math.max(...arr);
    arr.splice(arr.lastIndexOf(largest), 1);
  }
  return arr;
}

