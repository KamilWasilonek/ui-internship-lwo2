export function fatFingers(strToTransform) {
  let shouldCapitalize = false;
  let transformedStr = strToTransform
      .split('')
      .map((letter, index) => {
        if (/[aA]/.test(letter)) {
          shouldCapitalize = !shouldCapitalize;
        }
        if (shouldCapitalize) {
          return letter.toUpperCase();
        }
        return letter;
      })
      .join('');
  transformedStr = transformedStr.replace(/[aA]/g, '');
  return transformedStr;
}
