export function formatWorkingHours(data) {
  if (data.length === 0) {
    return [];
  }

  const days = {
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6,
    sun: 7,
  };

  const daysInOrder = data.sort((a, b) => {
    return days[a.day] - days[b.day];
  });

  const result = [];
  for (let i = 0; i < daysInOrder.length; i++) {
    let schedulePart = [daysInOrder[i]];
    for (let j = i + 1; j < daysInOrder.length; j++) {
      if (
        daysInOrder[i]['from'] === daysInOrder[j]['from'] &&
        daysInOrder[i]['to'] === daysInOrder[j]['to']
      ) {
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

