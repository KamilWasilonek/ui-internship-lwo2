export function expressionMatter(a, b, c) {
  let result = [];
  [a, b, c] = [a, b, c].sort((a, b) => a - b);

  result.push(a * (b + c));

  result.push(a * b * c);

  result.push(a + b + c);

  result.push((a + b) * c);

  return Math.max(...result);
}
