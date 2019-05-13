export function nbMonths(
    startPriceOld,
    startPriceNew,
    savingsPerMonth,
    percentLossByMonth
) {
  let savedMoney = 0;
  let months = 0;
  while (startPriceOld + savedMoney <= startPriceNew) {
    startPriceOld -= (startPriceOld * (percentLossByMonth / 100)).toFixed();
    startPriceNew -= (startPriceNew * (percentLossByMonth / 100)).toFixed();
    savedMoney += savingsPerMonth;
    if (months % 2 === 0) {
      percentLossByMonth += 0.5;
    }
    months++;
  }
  return [months, startPriceOld + savedMoney - startPriceNew];
}
