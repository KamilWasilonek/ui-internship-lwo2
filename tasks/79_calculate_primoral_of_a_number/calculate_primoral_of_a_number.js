export function numPrimorial(num) {
  let i = 2;
  let result = [];
  while (result.length != num) {
    if (isPrime(i)) {
      result.push(i);
    }
    i++;
  }
  return result.reduce((multiple, item) => {
    return multiple * item;
  });
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
