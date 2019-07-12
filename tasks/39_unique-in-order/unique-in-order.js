export function uniqueInOrder(arg) {
  if (arg === undefined || arg.length === 0) {
    return [];
  }
  // eslint-disable-next-line no-param-reassign
  arg = [...arg];

  let result = arg.filter((val, index, arr) => {
    return arr[index] !== arr[index + 1];
  });
  return result;
}
