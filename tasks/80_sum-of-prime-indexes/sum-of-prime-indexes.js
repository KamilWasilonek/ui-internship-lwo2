export function sumPrimeIndexedElements(arr) {
  let elementsSum = 0;
  for (let i = 2; i < arr.length; i++) {
    if (isPrime([i])) {
      elementsSum += arr[i];
    }
  }
  return elementsSum;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
