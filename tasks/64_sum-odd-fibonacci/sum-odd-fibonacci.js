export function sumFibs(num) {
  let numbers = [1, 1];
  for (let i = 2; i <= num; i++) {
    let sum = numbers[i - 1] + numbers[i - 2];
    if (sum <= num) {
      numbers.push(sum);
    }
  }
  return numbers.reduce((sum, item) => {
    return item % 2 != 0 ? sum + item : sum;
  }, 0);
}

