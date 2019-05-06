export function followTheSpy(arr) {
  let result = '';
  result = result.concat(arr[0][0] + ', ' + arr[0][1]);
  let j = 0;
  let place = arr[0][1];
  for (let i = 0; i < arr.length; ) {
    if (j === arr.length) {
      break;
    }
    if (arr[j][0] === place) {
      result = result.concat(', ' + arr[j][1]);
      place = arr[j][1];
      i++;
      j = 0;
      continue;
    }
    j++;
  }
  return result;
}
