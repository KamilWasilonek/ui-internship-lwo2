export function maxProduct(arr) {
  let sum = [];
  for (let i = 0; i < arr.length - 1; i++) {
    sum[i] = arr[i] * arr[i + 1];
  }
  return Math.max(...sum);
}

