export function DNAStrand(str) {
  const DNAPairs = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G',
  };
  let result = '';
  for (let i = 0; i < str.length; i++) {
    Object.keys(DNAPairs).forEach((key) => {
      if (key === str[i]) {
        result += DNAPairs[key];
      }
    });
  }
  return result;
}
