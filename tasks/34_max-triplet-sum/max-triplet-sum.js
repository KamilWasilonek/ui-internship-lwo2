export function maxTripletSum(arr) {
  arr = [...new Set(arr)];
  return arr
      .sort((a, b) => a - b)
      .slice(arr.length - 3, arr.length)
      .reduce((sum, next) => next + sum, 0);
}
