export function findLongestWord(str) {
  return str.split(' ')
      .reduce((maxLength, word) => Math.max(maxLength, word.length), 0);
}
