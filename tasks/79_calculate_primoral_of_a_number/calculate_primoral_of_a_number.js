export function numPrimorial(num) {
  let i = 2;
  let result = 1;
  while (num) {
    if (isPrime(i)) {
      result *= i;
      num--;
    }
    i++;
  }
  return result;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
