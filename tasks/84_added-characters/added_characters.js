export function addedChar(strToSearch, strWithChars) {
  let result = strWithChars;
  for (let i = 0; i < strToSearch.length; i++) {
    result = result.replace(strToSearch[i], '');
  }
  return result[0];
}
