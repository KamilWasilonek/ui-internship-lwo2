export function convertToRoman(numToConvert) {
  const romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let romanNumber = '';
  // eslint-disable-next-line guard-for-in
  for (let i in romanNumbers) {
    while (numToConvert - romanNumbers[i] >= 0) {
      romanNumber += i;
      numToConvert -= romanNumbers[i];
    }
  }
  return romanNumber;
}
