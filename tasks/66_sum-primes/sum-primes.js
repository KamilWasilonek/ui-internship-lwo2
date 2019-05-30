export function sumPrimes(num) {
  let result = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result.reduce((sum, item) => {
    return sum + item;
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
