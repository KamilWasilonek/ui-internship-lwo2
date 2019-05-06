export function sortByBits(arr) {
  return arr
      .map((item) => {
        return item.toString(2);
      })
      .sort((a, b) => {
        let numOfBitsInA = (a.match(/1/g) || []).length;
        let numOfBitsInB = (b.match(/1/g) || []).length;
        if (numOfBitsInA < numOfBitsInB) {
          return -1;
        }
        if (numOfBitsInA === numOfBitsInB) {
          let decimalA = parseInt(a, 2);
          let decimalB = parseInt(b, 2);
          if (decimalA < decimalB) {
            return -1;
          }
          if (decimalA > decimalB) {
            return 1;
          }
          return 0;
        }
        if (numOfBitsInA > numOfBitsInB) {
          return 1;
        }
      })
      .map((item) => {
        return parseInt(item, 2);
      });
}
