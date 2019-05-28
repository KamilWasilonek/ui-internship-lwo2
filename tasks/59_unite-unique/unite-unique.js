export function uniteUnique(...arr) {
  arr = arr.reduce((sum, item) => {
    return sum.concat(item);
  });
  return [...new Set(arr)];
}
