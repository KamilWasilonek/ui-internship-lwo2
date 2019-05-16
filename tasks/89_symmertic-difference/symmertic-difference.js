export function sym(...args) {
  const symmetricDifference = args.reduce((result, curr) => {
    const currSet = new Set(curr);
    currSet.forEach((item) => {
      if (result.has(item)) {
        result.delete(item);
      } else {
        result.add(item);
      }
    });
    return result;
  }, new Set());
  return [...symmetricDifference].sort((a, b) => a - b);
}
