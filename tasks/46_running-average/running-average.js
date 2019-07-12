export function runningAverage() {
  let avg = 0;
  let calls = 0;
  return (arg) => {
    return (avg += arg) / ++calls;
  };
}
