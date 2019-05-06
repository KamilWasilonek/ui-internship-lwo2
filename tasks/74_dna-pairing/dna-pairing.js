export function pairElement(str) {
  const DNAPairs = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G',
  };
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let DNAPair = new Array(str[i]);
    Object.keys(DNAPairs).forEach((key) => {
      if (key === str[i]) {
        DNAPair.push(DNAPairs[key]);
      }
    });
    result.push(DNAPair);
  }
  return result;
}
