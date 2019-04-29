export function rowWeights(arr) {
  let sum = [];
  sum[0] = arr.reduce((total, val, index) => {
    return index % 2 === 0 ? total + val : total;
  }, 0);
  sum[1] = arr.reduce((total, val, index) => {
    return index % 2 != 0 ? total + val : total;
  }, 0);
  return sum;

  // Second Solution
  // let evenSum = 0;
  // let oddSum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (i % 2 === 0) {
  //     evenSum += arr[i];
  //   } else {
  //     oddSum += arr[i];
  //   }
  // }
  // return [evenSum, oddSum];
}
