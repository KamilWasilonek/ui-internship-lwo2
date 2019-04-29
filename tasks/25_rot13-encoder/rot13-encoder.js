export function rot13Encoder(str) {
  return str
      .split('')
      .map((letter) => {
        let letterCode = letter.charCodeAt();
        if (letterCode >= 65 && letterCode <= 77) {
          return String.fromCharCode(letterCode + 13);
        } else if (letterCode > 77 && letterCode <= 90) {
          return String.fromCharCode(letterCode - 13);
        }
        return letter;
      })
      .join('');
}
