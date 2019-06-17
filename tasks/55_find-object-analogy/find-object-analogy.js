export function whatIsInAName(arr, property) {
  const propertiesToFound = Object.keys(property);
  const values = propertiesToFound.map((item) => {
    return property[item];
  });
  return arr.filter((item) => {
    return propertiesToFound.every((prop, index) => {
      return item.hasOwnProperty(prop) && item[prop] === values[index];
    });
  });
}
