export function stringExpansion(str) {
  if (!str.length) {
    return '';
  }
  if (!(/[0-9]/g).test(str)) {
    return str;
  }
  let result = '';
  let howManyRepeats = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (!isNaN(str[i])) {
      howManyRepeats = str[i];
    }
    if ((/[a-z]/i).test(str[i + 1])) {
      result = result.concat(str[i + 1].repeat(howManyRepeats));
    }
  }
  return result;
}
