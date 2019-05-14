export function squares(howManyNumbers) {
  // let result = 0;
  // for (let i = 1; i <= howManyNumbers; i++) {
  //   if (i % 2 !== 0 || i % 4 === 0) {
  //     result++;
  //   }
  // }
  // return result;
  return Math.floor((howManyNumbers + 1) / 2) + Math.floor(howManyNumbers / 4);
}
