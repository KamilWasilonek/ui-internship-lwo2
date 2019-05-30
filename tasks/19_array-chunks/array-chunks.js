export function arrayChunks(arr, groupSize) {
  let chunksArray = [];
  for (let i = 0; i < arr.length; i += groupSize) {
    chunksArray.push(arr.slice(i, i + groupSize));
  }
  return chunksArray;
}
