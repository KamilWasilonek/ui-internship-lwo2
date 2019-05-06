export function binaryEncode(text = '') {
  const arr = text
      .split('')
      .map((item) => {
        return item
            .split('')
            .map((letter, index) => {
              let binary = item.charCodeAt(index).toString(2);
              let padding = 8 - binary.length;
              binary = '0'.repeat(padding) + binary;
              return binary;
            })
            .join('');
      })
      .join(' ');
  return arr;
}
