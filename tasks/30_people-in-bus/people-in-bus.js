export function peopleInBus(arr) {
  return arr.reduce((sum, item) => {
    return sum + item[0] - item[1];
  }, 0);
}
