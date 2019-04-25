export function factorialize(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorialize(number - 1);
  }
}
