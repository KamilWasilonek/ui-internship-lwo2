export function stringExpansion(str) {
  if (!str.length) {
    return '';
  }
  if (!str.match(/[0-9]/g)) {
    return str;
  }
  let result = '';
  let howManyRepeats = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (!isNaN(str[i])) {
      howManyRepeats = str[i];
    }
    if (str[i + 1].match(/[a-z]/i)) {
      result = result.concat(str[i + 1].repeat(howManyRepeats));
    }
  }
  return result;
}

