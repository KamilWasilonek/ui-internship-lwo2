export function swapCases(str) {
  return [...str]
      .map((item) => {
        return /[A-Z]/.test(item) ? item.toLowerCase() : item.toUpperCase();
      })
      .join('');
}
