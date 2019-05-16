export function updateInventory(currInv, newInv) {
  const joinedArr = currInv.concat(newInv).reduce((result, item) => {
    if (item[1] in result) {
      return Object.assign({}, result, {
        [item[1]]: result[item[1]] + item[0],
      });
      // return {
      //   ...result,
      //   [item[1]]: result[item[1]] + item[0],
      // };
    } else {
      return Object.assign({}, result, {[item[1]]: item[0]});
      // return {
      //   ...result,
      //   [item[1]]: item[0],
      // };
    }
  }, {});
  return Object.keys(joinedArr)
      .sort((a, b) => a.localeCompare(b))
      .map((item) => [joinedArr[item], item]);
}
