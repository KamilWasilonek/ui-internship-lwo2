export function findLetter(str) {
  let start = str[0];
  let stop = str[str.length - 1];
  let result = '';
  for (let i = start.charCodeAt() + 1; i < stop.charCodeAt(); i++) {
    let letter = String.fromCharCode(i);
    if (!str.includes(letter)) {
      result += letter;
    }
  }
  return result ? result : undefined;
}
