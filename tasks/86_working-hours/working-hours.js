export function formatWorkingHours(data) {
  if (data.length === 0) {
    return [];
  }
  let daysInOrder = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  daysInOrder = daysInOrder.map((day) => {
    return data.find((dayObj) => {
      return dayObj['day'] === day;
    });
  });
  let result = [];
  for (let i = 0; i < daysInOrder.length; i++) {
    let schedulePart = [daysInOrder[i]];
    for (let j = i + 1; j < daysInOrder.length; j++) {
      if (daysInOrder[i]['from'] === daysInOrder[j]['from']) {
        schedulePart.push(daysInOrder[j]);
      } else {
        i += schedulePart.length - 1;
        break;
      }
    }

    if (schedulePart.length === 1) {
      result.push(
          schedulePart[0]['day'].toUpperCase() +
          ': ' +
          schedulePart[0]['from'] +
          ' - ' +
          schedulePart[0]['to']
      );
    } else {
      result.push(
          schedulePart[0]['day'].toUpperCase() +
          ' - ' +
          schedulePart[schedulePart.length - 1]['day'].toUpperCase() +
          ': ' +
          schedulePart[0]['from'] +
          ' - ' +
          schedulePart[0]['to']
      );
    }
  }
  return result;
}
