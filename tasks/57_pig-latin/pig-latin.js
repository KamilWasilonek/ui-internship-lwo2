export function translatePigLatin(str) {
  if (isVowel(str[0])) {
    return str + 'way';
  } else {
    let i;
    let consonant = str[0];
    for (i = 1; i < str.length; i++) {
      if (isVowel(str[i])) {
        break;
      }
      consonant += str[i];
    }
    return str.slice(i) + consonant + 'ay';
  }
}
function isVowel(letter) {
  return /[aeiouy]/gi.test(letter);
}
