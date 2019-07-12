export function nbMonths(
    startPriceOld,
    startPriceNew,
    savingsPerMonth,
    percentLossByMonth
) {
  let savedMoney = 0;
  let months = 0;
  let oldPrice = startPriceOld;
  let newPrice = startPriceNew;
  let percentOfLoss = percentLossByMonth;

  while (oldPrice + savedMoney <= newPrice) {
    oldPrice -= Math.round((oldPrice * (percentOfLoss / 100)));
    newPrice -= Math.round((newPrice * (percentOfLoss / 100)));
    savedMoney += savingsPerMonth;
    if (months % 2 === 0) {
      percentOfLoss += 0.5;
    }
    months++;
  }
  return [months, oldPrice + savedMoney - newPrice];
}
