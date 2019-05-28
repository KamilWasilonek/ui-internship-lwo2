export function humanYearsCatYearsDogYears(humanYears) {
  let catYears = 0;
  let dogYears = 0;
  if (humanYears >= 1) {
    catYears = 15;
    dogYears = 15;
    if (humanYears >= 2) {
      catYears += 9;
      dogYears += 9;
    }
    if (humanYears > 2) {
      catYears += 4 * (humanYears - 2);
      dogYears += 5 * (humanYears - 2);
    }
  }
  return [humanYears, catYears, dogYears];
}
