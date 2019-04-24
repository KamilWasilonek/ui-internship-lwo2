export function trimWhiteSpaces(textToTrim) {
  // let text = textToTrim.split(' ');
  // return text.join('');
  return textToTrim.replace(/\s/g, '');
}
