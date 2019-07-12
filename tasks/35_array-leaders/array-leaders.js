export function arrayLeaders(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let sumRightsEl = arr
        .slice(i + 1, arr.length)
        .reduce((sum, next) => sum + next, 0);
    if (arr[i] > sumRightsEl) {
      result.push(arr[i]);
    }
  }
  return result;
}

