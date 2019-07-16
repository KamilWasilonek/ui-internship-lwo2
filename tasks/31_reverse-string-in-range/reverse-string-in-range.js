export function reverseStringInRange(str, index) {
  const partOfText = str.slice(index[0], index[1] + 1);
  const revertedPart = partOfText
      .split('')
      .reverse()
      .join('');
  // eslint-disable-next-line no-param-reassign
  return (str = str.replace(partOfText, revertedPart));
}
