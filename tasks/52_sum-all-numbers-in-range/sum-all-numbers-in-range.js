export function sumAll(arr) {
  arr = arr[0] > arr[1] ? arr.reverse() : arr;
  let sum = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}
