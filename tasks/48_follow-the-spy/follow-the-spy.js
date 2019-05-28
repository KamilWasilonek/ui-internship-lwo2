export function followTheSpy(arr) {
  let result = [arr[0][0], arr[0][1]];
  let actualPlace = result[1];
  arr.map(() => {
    let nextTarget = arr.find((item) => item[0] === actualPlace);
    if (nextTarget) {
      actualPlace = nextTarget[1];
      result.push(nextTarget[1]);
    }
  });
  return result.join(', ');
}
