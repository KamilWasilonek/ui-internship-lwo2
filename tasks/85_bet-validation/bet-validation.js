// eslint-disable-next-line camelcase
export function validate_bet(range, bet) {
  let rangeOfNumbers = range.slice();
  let result = bet;

  if (rangeOfNumbers[0] > rangeOfNumbers[1]) {
    rangeOfNumbers = rangeOfNumbers.reverse();
  }

  const regex = /[^0-9\s,]/g;
  if (!regex.test(result)) {
    result = [...new Set(result.match(/\d+/g))];
    if (result.length !== rangeOfNumbers[0]) {
      return 'None';
    }
    const allNumsInRange = result.every((num) => {
      return num >= 1 && num <= rangeOfNumbers[1];
    });
    if (!allNumsInRange) {
      return 'None';
    }
    return result.sort((a, b) => a - b).slice(0, rangeOfNumbers[0]);
  }
  return 'None';
}
