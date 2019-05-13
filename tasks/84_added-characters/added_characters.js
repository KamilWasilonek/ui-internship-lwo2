export function addedChar(strToSearch, strWithChars) {
  for (let i = 0; i < strToSearch.length; i++) {
    strWithChars = strWithChars.replace(strToSearch[i], '');
  }
  return [...new Set(strWithChars)].join('');
}
