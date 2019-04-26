export function rot13Encoder(str) {
  return str.split('')
      .map((letter) => {
        if (letter.charCodeAt() >=65 && letter.charCodeAt() <= 77) {
          return String.fromCharCode(letter.charCodeAt() + 13);
        } else if (letter.charCodeAt() > 77 && letter.charCodeAt() <= 90) {
          return String.fromCharCode(letter.charCodeAt() - 13);
        }
        return letter;
      })
      .join('');
}
