export function palindrome(str) {
  // eslint-disable-next-line no-param-reassign
  str = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
  // const reversed = str
  //     .split('')
  //     .reverse()
  //     .join('');
  // return str === reversed;
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
