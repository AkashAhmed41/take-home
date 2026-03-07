import React, { useState, useMemo } from "react";
import { WeekDays, getMonthDays, MonthNames } from "@/lib/utils/CalendarUtils";
import {
  generateThreatStats,
  getFormattedDateTime,
} from "@/lib/utils/ThreatGenerationUtils";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import ThreatStats from "@/components/calendar-view/threat-stats/ThreatStats";
import styles from "./MonthView.module.css";

const ThreatOpacities = [0.1, 0.3, 0.5, 0.7, 1.0];
const OpacityInterval = 10;
const OpacityThreshold = 0.5;

const MonthView = ({ month, year }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const containerRef = useOutsideClick(() => setSelectedDay(null));

  const daysWithThreats = useMemo(() => {
    const days = getMonthDays(month, year);
    return days.map((dayObj) => ({
      ...dayObj,
      threatStats: dayObj.currentMonth
        ? generateThreatStats(dayObj.day, month, year)
        : null,
      ...getFormattedDateTime(dayObj.day, month, year),
    }));
  }, [month, year]);

  const monthName = MonthNames.long[month];

  const getDayStyle = (total) => {
    if (!total) return {};
    const opacityIndex = Math.ceil(total / OpacityInterval) - 1;
    const opacity = ThreatOpacities[opacityIndex] || ThreatOpacities[0];

    return {
      backgroundColor: `rgba(0, 105, 247, ${opacity})`,
      color: opacity > OpacityThreshold ? "#ffffff" : "inherit",
    };
  };

  return (
    <div className={styles["container"]} ref={containerRef}>
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
        {daysWithThreats.map((dayObj, index) => {
          const columnIndex = index % 7;
          let align = "center";
          if (columnIndex < 2) align = "left";
          else if (columnIndex > 4) align = "right";

          return (
            <div
              key={index}
              className={`${styles["day"]} ${
                !dayObj.currentMonth ? styles["disabled"] : ""
              }`}
              style={
                dayObj.currentMonth ? getDayStyle(dayObj.threatStats.total) : {}
              }
              onClick={() =>
                dayObj.currentMonth &&
                setSelectedDay(selectedDay === dayObj ? null : dayObj)
              }
            >
              {dayObj.day}
              {selectedDay === dayObj && (
                <ThreatStats
                  dateStr={dayObj.dateStr}
                  timeStr={dayObj.timeStr}
                  stats={dayObj.threatStats}
                  align={align}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthView;
