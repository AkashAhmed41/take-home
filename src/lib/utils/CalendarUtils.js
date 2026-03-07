import {
  JANUARY_INDEX,
  DECEMBER_INDEX,
  JS_SUNDAY_INDEX,
  CALENDAR_GRID_SIZE,
} from "@/lib/constants/ApplicationConstants";

export const MonthNames = {
  long: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  short: [
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
    "Dec",
  ],
};

export const WeekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export const getMonthDays = (month, year) => {
  const days = [];
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  let startDay = firstDayOfMonth.getDay();
  startDay = startDay === JS_SUNDAY_INDEX ? 6 : startDay - 1;

  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = startDay - 1; i >= 0; i--) {
    days.push({
      day: prevMonthLastDay - i,
      month: month === JANUARY_INDEX ? DECEMBER_INDEX : month - 1,
      year: month === JANUARY_INDEX ? year - 1 : year,
      currentMonth: false,
    });
  }

  const totalDays = lastDayOfMonth.getDate();
  for (let i = 1; i <= totalDays; i++) {
    days.push({
      day: i,
      month: month,
      year: year,
      currentMonth: true,
    });
  }

  const remainingCells = CALENDAR_GRID_SIZE - days.length;
  for (let i = 1; i <= remainingCells; i++) {
    days.push({
      day: i,
      month: month === DECEMBER_INDEX ? JANUARY_INDEX : month + 1,
      year: month === DECEMBER_INDEX ? year + 1 : year,
      currentMonth: false,
    });
  }

  return days;
};
