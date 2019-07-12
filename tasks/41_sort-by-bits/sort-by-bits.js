export function sortByBits(arr) {
  return arr.sort((a, b) => {
    let numOfBitsInA = (a.toString(2).match(/1/g) || []).length;
    let numOfBitsInB = (b.toString(2).match(/1/g) || []).length;
    if (numOfBitsInA < numOfBitsInB) {
      return -1;
    }
    if (numOfBitsInA > numOfBitsInB) {
      return 1;
    }
    return a - b;
  });
}
