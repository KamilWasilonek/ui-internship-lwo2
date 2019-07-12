export function findElement(arr, func) {
  return arr.filter((item) => {
    return func(item);
  })[0];
}
