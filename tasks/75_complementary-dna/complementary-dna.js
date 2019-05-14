export function DNAStrand(str) {
  const DNAPairs = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G',
  };
  return [...str].reduce((result, letter) => {
    return result.concat(DNAPairs[letter]);
  }, '');
}
