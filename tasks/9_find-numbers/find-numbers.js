export function getNumbers(text) {
  return text.match(/\d+/g).map((num) => parseInt(num));
}
