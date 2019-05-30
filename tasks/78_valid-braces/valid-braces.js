export function validBraces(str) {
  const braces = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (/[[({]/.test(str[i])) {
      stack.push(str[i]);
    }
    if (stack[stack.length - 1] === braces[str[i]]) {
      stack.pop();
    }
  }
  return stack.length === 0;
}

