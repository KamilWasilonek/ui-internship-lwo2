export function minNumberToPrime(arr) {
  let arrElementsSum = arr.reduce((sum, val) => {
    return sum + val;
  }, 0);
  for (let i = 0; ; i++) {
    let isPrime = true;
    for (let i = 2; i < Math.sqrt(arrElementsSum); i++) {
      if (arrElementsSum % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return i;
    } else {
      arrElementsSum += 1;
    }
  }
}
