// eslint-disable-next-line camelcase
export function validate_bet(range, bet) {
  range = range[0] > range[1] ? range.reverse() : range;
  const regex = /[^0-9\s,]/g;
  if (!regex.test(bet)) {
    bet = bet.match(/\d+/g);
    let allNumsInRange = bet.every((num) => {
      return num >= 1 && num <= range[1];
    });
    if (!allNumsInRange || bet.length < range[0]) {
      return 'None';
    }
    return bet.sort((a, b) => a - b);
  }
  return 'None';
}
