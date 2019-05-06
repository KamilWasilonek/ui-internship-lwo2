export function addTogether(a, b) {
  if (a && b) {
    if (typeof a === 'number' && typeof b == 'number') {
      return a + b;
    } else {
      return undefined;
    }
  }

  if (a || b) {
    if (typeof a !== 'number') {
      return undefined;
    } else {
      return (num) => {
        if (typeof num !== 'number') {
          return undefined;
        } else {
          return a + num;
        }
      };
    }
  }
  return undefined;
}
