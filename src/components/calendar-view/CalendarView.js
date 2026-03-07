"use client";

import React, { useState } from "react";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import { DEFAULT_MONTH_COUNT } from "@/lib/constants/ApplicationConstants";
import { CalendarDropdownOptions } from "@/lib/constants/default-data/CalendarDropdownOptions";
import { MonthSelectionOptions } from "@/lib/constants/default-data/MonthSelectionOptions";
import MonthView from "@/components/calendar-view/month-view/MonthView";
import ViewSelector from "@/components/common/view-selector/ViewSelector";
import Dropdown from "@/components/common/dropdown/Dropdown";
import HorizontalLine from "@/components/common/horizontal-line/HorizontalLine";
import styles from "./CalendarView.module.css";

const text = getLocalizedText("CALENDAR");
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
          <h2 className={styles["title"]}>{text("TITLE")}</h2>
          <p className={styles["subtitle"]}>{text("SUBTITLE")}</p>
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
        <ViewSelector
          options={MonthSelectionOptions}
          selectedValue={monthCount}
          onSelectionChange={setMonthCount}
        />
      </div>
    </div>
  );
};

export default CalendarView;
