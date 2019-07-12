export function smallestCommons(arr) {
  arr = arr[0] > arr[1] ? arr.reverse() : arr;
  let numbersBetween = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    numbersBetween.push(i);
  }
  let smallerCommonMultiple = arr[1];
  while (
    !numbersBetween.every(
        (numberInRange) => smallerCommonMultiple % numberInRange === 0
    )
  ) {
    smallerCommonMultiple++;
  }
  return smallerCommonMultiple;
}
