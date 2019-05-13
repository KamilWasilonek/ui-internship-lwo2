export function sym(...args) {
  return args
      .reduce((result, curr) => {
        curr = [...new Set(curr)];
        curr.forEach((item) => {
          if (!result.includes(item)) {
            result.push(item);
          } else {
            result.splice(result.indexOf(item), 1);
          }
        });
        return result;
      }, [])
      .sort((a, b) => a - b);
}
