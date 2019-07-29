function getMonthByValue(value) {
  const months = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };
  return Object.keys(months).find((key) => months[key] === value);
}

function setPostsAttributes(attributes) {
  const localAttributes = attributes;
  localAttributes.img.setAttribute('src', localAttributes.newImg);
  localAttributes.title.innerHTML = localAttributes.newTitle;
  localAttributes.date.innerHTML = localAttributes.newDate;
}

function formatFooterDate(day, month, year) {
  return getMonthByValue(month) + ' ' + day + ' , ' + year;
}

export {getMonthByValue, setPostsAttributes, formatFooterDate};
