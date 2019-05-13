export function removeFalsyValues(arr) {
  return arr.filter((item) => Boolean(item));
}

