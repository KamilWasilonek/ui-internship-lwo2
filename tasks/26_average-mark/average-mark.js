export function getAverage(arr) {
  return Math.round((arr.reduce(((sum, value) => sum + value), 0)/arr.length));
}
