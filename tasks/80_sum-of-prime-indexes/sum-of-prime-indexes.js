export function sumPrimeIndexedElements(arr) {
  let primeIndexes = [];
  for (let i = 2; i < arr.length; i++) {
    if (isPrime([i])) {
      primeIndexes.push(i);
    }
  }
  return primeIndexes.reduce((sum, item) => {
    return sum + arr[item];
  }, 0);
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
