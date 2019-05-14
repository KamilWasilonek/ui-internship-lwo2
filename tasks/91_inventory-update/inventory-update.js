export function updateInventory(currInv, newInv) {
  const joinedArr = currInv.concat(newInv).reduce((result, item) => {
    if (!result[item[1]]) {
      result[item[1]] = item[0];
    } else {
      result[item[1]] += item[0];
    }
    return result;
  }, {});
  return Object.keys(joinedArr)
      .sort((a, b) => a.localeCompare(b))
      .map((item) => [joinedArr[item], item]);
}
