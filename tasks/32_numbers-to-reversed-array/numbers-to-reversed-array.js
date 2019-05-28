export function numberToReversedArray(num) {
  return num
      .toString()
      .split('')
      .reverse()
      .map((item) => parseInt(item));
}
