export function binaryEncode(text = '') {
  return text
      .split('')
      .map((item) => {
        return item
            .charCodeAt()
            .toString(2)
            .padStart(8, 0);
      })
      .join(' ');
}
