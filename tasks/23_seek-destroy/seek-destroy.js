export function destroyer(arr, ...args) {
  return arr.filter((item) => args.indexOf(item) === -1 );
}


