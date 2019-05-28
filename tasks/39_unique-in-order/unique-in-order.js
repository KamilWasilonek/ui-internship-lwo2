export function uniqueInOrder(arg) {
  if (arg === undefined || arg.length === 0) {
    return [];
  }
  arg = [...arg];

  let result = arg.filter((val, index, arr) => {
    return arr[index] != arr[index + 1];
  });
  return result;
}
