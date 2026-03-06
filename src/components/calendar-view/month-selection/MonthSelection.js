import React from "react";
import styles from "./MonthSelection.module.css";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import { MonthSelectionOptions } from "@/lib/constants/default-data/MonthSelectionOptions";

const calendarText = getLocalizedText("CALENDAR");

const MonthSelection = ({ currentMonthCount, onMonthCountChange }) => {
  return (
    <div className={styles["container"]}>
      <span className={styles["label"]}>{calendarText("VIEWING")}</span>
      <div className={styles["selectors"]}>
        {MonthSelectionOptions.map(({ label, value }) => (
          <div
            key={value}
            className={`${styles["pill"]} ${currentMonthCount === value ? styles["active-pill"] : ""}`}
            onClick={() => onMonthCountChange(value)}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthSelection;
