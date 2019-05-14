export function deepClone(objToClone) {
  let clone = {};
  Object.keys(objToClone).forEach((key) => {
    if (objToClone[key] !== null && typeof objToClone[key] === 'object') {
      clone[key] = deepClone(objToClone[key]);
    } else {
      clone[key] = objToClone[key];
    }
  });
  return clone;
}
