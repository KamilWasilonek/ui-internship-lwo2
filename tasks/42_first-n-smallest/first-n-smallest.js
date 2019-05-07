export function firstNSmallest(arr, numToReturn) {
  if (numToReturn > arr.length) {
    return [];
  }
  let smallestSortedElements = arr
      .slice()
      .sort((a, b) => {
        return a - b;
      })
      .slice(0, numToReturn);
  return arr
      .filter((item) => smallestSortedElements.includes(item))
      .slice(0, numToReturn);
}

