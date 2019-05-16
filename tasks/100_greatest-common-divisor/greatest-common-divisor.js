export function greatestCommonDivisor(arg1, arg2) {
  // arg = arg[0] > arg[1] ? arg.reverse() : arg;
  // let max = 1;
  // for (let i = 2; i <= arg[0]; i++) {
  //   if (arg[0] % i === 0 && arg[1] % i === 0) {
  //     max = i;
  //   }
  // }
  // return max;
  let tmp;
  let a = arg1;
  let b = arg2;
  while (b) {
    tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
}
