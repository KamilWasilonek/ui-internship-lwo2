export function getIndexToInsert(arr, valueToInsert) {
  return arr.sort((a, b) => a-b)
      .filter((item) => item < valueToInsert).length;
}
