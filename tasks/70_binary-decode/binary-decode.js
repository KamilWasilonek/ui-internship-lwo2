export function binaryDecode(binary = '') {
  return binary
      .split(' ')
      .map((letter) => {
        return String.fromCharCode(parseInt(letter, 2));
      })
      .join('');
}

