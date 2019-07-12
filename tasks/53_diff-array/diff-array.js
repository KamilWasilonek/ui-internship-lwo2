export function diffArray(firstArr, secondArr) {
  let arr = firstArr.concat(secondArr);
  arr = [...new Set([...arr])];
  return arr.filter((item) => {
    return !(firstArr.includes(item) && secondArr.includes(item));
  });
}
