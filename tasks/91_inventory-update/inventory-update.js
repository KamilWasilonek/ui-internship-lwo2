export function updateInventory(currInv, newInv) {
  let joinedArr = currInv.concat(newInv).reduce((result, item) => {
    if (!result[item[1]]) {
      result[item[1]] = item[0];
    } else {
      result[item[1]] += item[0];
    }
    return result;
  }, {});
  return Object.keys(joinedArr)
      .sort((a, b) => {
        return a.localeCompare(b);
      })
      .map((item) => {
        return [joinedArr[item], item];
      });
}
