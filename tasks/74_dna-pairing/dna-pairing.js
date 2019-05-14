export function pairElement(str) {
  const DNAPairs = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G',
  };
  return [...str].reduce((result, item) => {
    return [...result, [item, DNAPairs[item]]];
  }, []);
}
