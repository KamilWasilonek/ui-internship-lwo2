export function getVowelCount(str) {
  // let count = 0;
  // for (let letter of str.toLowerCase()) {
  //   if (letter === 'a'
  //     || letter === 'e'
  //     || letter === 'i'
  //     || letter === 'o'
  //     || letter === 'u') {
  //     count++;
  //   }
  // }
  // return count;

  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}
