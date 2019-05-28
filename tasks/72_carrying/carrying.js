export function addTogether(...args) {
  let isNums = args.every((item) => typeof item === 'number');
  if (!isNums) {
    return;
  }
  if (typeof args[1] !== 'number') {
    return (number) => {
      if (typeof number === 'number') {
        return args[0] + number;
      }
    };
  }
  return args[0] + args[1];
}
