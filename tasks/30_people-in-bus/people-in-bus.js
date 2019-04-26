export function peopleInBus(arr) {
  let sum = 0;
  arr.map((item) => (sum += item[0] - item[1]));
  return sum;
}
