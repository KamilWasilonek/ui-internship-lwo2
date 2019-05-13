export function findCloseIndex(str, index) {
  if (str[index] !== '(') {
    return -1;
  } else {
    let stack = [];
    for (let i = index; i < str.length; i++) {
      if (str[i] === '(') {
        stack.push(str[i]);
      }
      if (str[i] === ')') {
        stack.pop(str[i]);
      }
      if (str[i] === ')' && stack.length === 0) {
        return i;
      }
    }
  }
}
