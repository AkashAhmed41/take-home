import React from "react";
import styles from "./MonthView.module.css";
import { WeekDays, getMonthDays, MonthNames } from "@/lib/utils/CalendarUtils";

const MonthView = ({ month, year }) => {
  const days = getMonthDays(month, year);
  const monthName = MonthNames[month];

  return (
    <div className={styles["container"]}>
      <div className={styles["month-header"]}>
        <div className={styles["month-container"]}>
          <p className={styles["month-name"]}>{monthName}</p>
        </div>
      </div>
      <div className={styles["weekdays"]}>
        {WeekDays.map((weekday) => (
          <div key={weekday} className={styles["weekday"]}>
            {weekday}
          </div>
        ))}
      </div>
      <div className={styles["days-grid"]}>
        {days.map(({ day, currentMonth }, index) => (
          <div
            key={index}
            className={`${styles["day"]} ${
              !currentMonth ? styles["disabled"] : ""
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthView;
