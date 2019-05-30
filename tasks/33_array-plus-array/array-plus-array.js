export function arrayPlusArray(...arr) {
  const maxLength = Math.max(arr[0].length, arr[1].length);
  let firstVector = arr[0];
  let secondVector = arr[1];
  let result = [];

  for (let i = 0; i < maxLength; i++) {
    firstVector[i] = firstVector[i] || 0;
    secondVector[i] = secondVector[i] || 0;
    result.push(firstVector[i] + secondVector[i]);
  }
  return result;
}
