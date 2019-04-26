export function removeDuplicates(arr) {
  let unique = [];
  for (let item of arr) {
    if (unique.indexOf(item) === -1 ) {
      unique.push(item);
    }
  }
  return unique;
}
