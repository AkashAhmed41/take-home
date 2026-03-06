"use client";

import React, { useState } from "react";
import styles from "./CalendarView.module.css";
import MonthView from "./month-view/MonthView";
import MonthSelection from "./month-selection/MonthSelection";
import Dropdown from "@/components/common/dropdown/Dropdown";
import { CalendarDropdownOptions } from "@/lib/constants/default-data/CalendarDropdownOptions";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import HorizontalLine from "@/components/common/horizontal-line/HorizontalLine";
import { DEFAULT_MONTH_COUNT } from "@/lib/constants/ApplicationConstants";

const calendarText = getLocalizedText("CALENDAR");
const currentYear = new Date().getFullYear();

const CalendarView = () => {
  const [year, setYear] = useState(currentYear);
  const [monthCount, setMonthCount] = useState(DEFAULT_MONTH_COUNT);

  const months = Array.from({ length: monthCount }, (_, i) => ({
    month: i,
    year,
  }));

  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <div className={styles["header-text"]}>
          <h2 className={styles["title"]}>{calendarText("TITLE")}</h2>
          <p className={styles["subtitle"]}>{calendarText("SUBTITLE")}</p>
        </div>
        <Dropdown
          selected={year}
          options={CalendarDropdownOptions}
          onChange={(option) => setYear(option.value)}
        />
      </div>
      <HorizontalLine />
      <div className={styles["months-grid"]}>
        {months.map((month) => (
          <MonthView key={`${month.year}-${month.month}`} {...month} />
        ))}
      </div>
      <div className={styles["footer"]}>
        <MonthSelection
          currentMonthCount={monthCount}
          onMonthCountChange={setMonthCount}
        />
      </div>
    </div>
  );
};

export default CalendarView;
