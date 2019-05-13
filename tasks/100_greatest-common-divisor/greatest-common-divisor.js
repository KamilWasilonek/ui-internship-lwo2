export function greatestCommonDivisor(...arg) {
  arg = arg[0] > arg[1] ? arg.reverse() : arg;
  let max = 1;
  for (let i = 2; i <= arg[0]; i++) {
    if (arg[0] % i === 0 && arg[1] % i === 0) {
      max = i;
    }
  }
  return max;
}
