export function leastCommonMultiple(arg1, arg2) {
  // let firstArgMultiply = arg1;
  // let secondArgMultiply = arg2;
  // let result = [arg1, arg2];
  // for (let i = 0; ; i++) {
  //   firstArgMultiply += arg1;
  //   secondArgMultiply += arg2;
  //   if (result.includes(firstArgMultiply)) {
  //     return firstArgMultiply;
  //   }
  //   if (result.includes(secondArgMultiply)) {
  //     return secondArgMultiply;
  //   }
  //   result.push(firstArgMultiply);
  //   result.push(secondArgMultiply);
  // }
  let a = arg1;
  let b = arg2;
  const argsMultiple = a * b;
  let tmp;
  while (b) {
    tmp = b;
    b = a % b;
    a = tmp;
  }
  return argsMultiple / a;
}
