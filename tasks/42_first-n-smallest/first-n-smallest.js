export function firstNSmallest(arr, numToReturn) {
  if (numToReturn > arr.length) {
    return [];
  }
  let threeSortedElements = arr
      .slice()
      .sort((a, b) => {
        return a - b;
      })
      .slice(0, numToReturn);
  return arr
      .filter((item) => threeSortedElements.includes(item))
      .slice(0, numToReturn);
}

