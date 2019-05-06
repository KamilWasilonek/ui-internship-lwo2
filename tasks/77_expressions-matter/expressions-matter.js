export function expressionMatter(...arr) {
  let result = [];
  arr = arr.sort((a, b) => a - b);
  result.push(arr[0] * (arr[1] + arr[2]));

  result.push(arr[0] * arr[1] * arr[2]);

  result.push(arr[0] + arr[1] + arr[2]);

  result.push((arr[0] + arr[1]) * arr[2]);

  return Math.max(...result);
}
