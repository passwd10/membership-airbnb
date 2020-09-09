const $calendarViewCheckIn = document.querySelector('.calendar_view.check_in');
const $calendarViewCheckOut = document.querySelector('.calendar_view.check_out');

const getDays = (year, month) => {
  const days = new Array(42);
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);
  let cnt = 0;

  return days.fill().map((day, i) => {
    if (i >= startDate.getDay() && cnt < endDate.getDate()) {
      cnt += 1;
      return day = cnt;
    }
    return '';
  });
};

const renderCalendar = (year, month, node) => {
  const $monthIndicator = document.createElement('h3');
  const $dayOfWeek = document.createElement('ul');
  const $dateGrid = document.createElement('div');

  $monthIndicator.classList.add('month-indicator');
  $dayOfWeek.classList.add('day-of-week');
  $dateGrid.classList.add('date-grid');

  renderMonthIndicator(year, month, $monthIndicator, node);
  renderDayOfWeek($dayOfWeek, node);
  renderDateGrid(year, month, $dateGrid, node);
};

const renderMonthIndicator = (year, month, $monthIndicator, node) => {
  const thisMonth = `${year}년 ${month}월`;
  $monthIndicator.appendChild(document.createTextNode(thisMonth));
  return node.appendChild($monthIndicator);
};

const renderDayOfWeek = ($dayOfWeek, node) => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  week.forEach(dayOfWeek => {
    const $day = document.createElement('li');
    const $dayTextNode = document.createTextNode(dayOfWeek);
    $day.appendChild($dayTextNode);
    $dayOfWeek.appendChild($day);
  });
  return node.appendChild($dayOfWeek);
};

const renderDateGrid = (year, month, $dateGrid, node) => {
  const days = getDays(year, month);
  let $week = document.createElement('ul');

  days.forEach((day, i) => {
    const $day = document.createElement('li');
    $day.appendChild(document.createTextNode(day));
    $week.appendChild($day);

    if (Number.isInteger((i + 1) / 7) && i > -1) {
      $dateGrid.appendChild($week);
      $week.classList.add('week');
      $week = document.createElement('ul');
    }
  });

  return node.appendChild($dateGrid);
};

renderCalendar(2020, 9, $calendarViewCheckIn);
renderCalendar(2020, 10, $calendarViewCheckOut);
