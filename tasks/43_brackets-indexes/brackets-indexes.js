export function findCloseIndex(str, index) {
  if (str[index] !== '(') {
    return -1;
  } else {
    let bracketsCounter = 0;
    for (let i = index + 1; i < str.length; i++) {
      if (str[i] === '(') {
        bracketsCounter++;
      }
      if (str[i] === ')' && bracketsCounter === 0) {
        return i;
      }
      if (str[i] === ')') {
        bracketsCounter--;
      }
    }
  }
}
