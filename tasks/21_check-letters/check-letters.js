export function checkLetters(arr) {
  for (let letter of arr[1].toLowerCase()) {
    if (arr[0].toLowerCase().indexOf(letter) === -1) {
      return false;
    }
  }
  return true;
}
