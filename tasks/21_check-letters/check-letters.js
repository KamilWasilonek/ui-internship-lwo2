export function checkLetters(arr) {
  for (let letter of arr[1].toLowerCase()) {
    if (!arr[0].toLowerCase().includes(letter)) {
      return false;
    }
  }
  return true;
}
