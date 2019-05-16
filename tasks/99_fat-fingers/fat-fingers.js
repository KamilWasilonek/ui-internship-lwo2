export function fatFingers(strToTransform) {
  let shouldCapitalize = false;
  return [...strToTransform].reduce((result, letter) => {
    if (/[aA]/.test(letter)) {
      shouldCapitalize = !shouldCapitalize;
      return result;
    }
    if (shouldCapitalize) {
      return result + letter.toUpperCase();
    }
    return result + letter;
  }, '');
}
