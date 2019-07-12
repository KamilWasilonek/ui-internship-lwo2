export function uniteUnique(...arr) {
  // eslint-disable-next-line no-param-reassign
  arr = arr.reduce((sum, item) => {
    return sum.concat(item);
  });
  return [...new Set(arr)];
}
