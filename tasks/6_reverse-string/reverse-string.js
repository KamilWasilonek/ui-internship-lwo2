export function reverseString(stringToReverse) {
  stringToReverse = stringToReverse.split('');
  stringToReverse.reverse();
  return stringToReverse.join('');
}
