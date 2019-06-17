export function findFriend(arr) {
  let numberOfFriends = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'red') {
      let actualIndex = i;
      if (
        (arr[actualIndex - 2] === 'blue' && arr[actualIndex - 1] === 'blue') ||
        (arr[actualIndex - 1] === 'blue' && arr[actualIndex + 1] === 'blue') ||
        (arr[actualIndex + 1] === 'blue' && arr[actualIndex + 2] === 'blue')
      ) {
        numberOfFriends++;
      }
    }
  }

  return numberOfFriends;
}
