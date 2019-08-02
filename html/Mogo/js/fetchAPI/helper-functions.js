function getMonthByValue(monthNumber) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  return months[monthNumber];
}

function setPostsAttributes(postElements, dataToSet) {
  postElements.img.setAttribute("src", dataToSet.newImg);
  postElements.title.innerHTML = dataToSet.newTitle;
  postElements.date.innerHTML = dataToSet.newDate;
}

function formatFooterDate(day, month, year) {
  return `${getMonthByValue(month)} ${day} , ${year}`;
}

export { getMonthByValue, setPostsAttributes, formatFooterDate };
