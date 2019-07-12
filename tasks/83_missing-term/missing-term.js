export function findMissing(arr) {
  let difference = arr[1] - arr[0];
  if (difference > arr[arr.length - 1] - arr[arr.length - 2]) {
    difference = arr[arr.length - 1] - arr[arr.length - 2];
  }
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(arr[i] + difference)) {
      return arr[i] + difference;
    }
  }
}
