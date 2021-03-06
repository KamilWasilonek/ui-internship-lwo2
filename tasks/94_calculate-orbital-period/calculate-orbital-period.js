const GM = 398600.4418;
const EARTH_RADIUS = 6367.4447;

export function orbitalPeriod(arr) {
  return arr.map((item) => {
    const radius = EARTH_RADIUS + item.avgAlt;
    const velocity = Math.sqrt(GM / radius);
    const orbitalPeriod = Math.round((2 * Math.PI * radius) / velocity);
    return {
      name: item.name,
      orbitalPeriod: orbitalPeriod,
    };
  });
}
