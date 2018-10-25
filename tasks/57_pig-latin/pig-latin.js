export function translatePigLatin(str) {
  let pigLatin = '';
  const regex = /[aeiou]/gi;
  if (str[0].match(regex)) {
    pigLatin = str + 'way';
  } else {
    let vowelIndice = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }
  return pigLatin;
}
