import React from "react";
import styles from "./ViewSelector.module.css";
import { getLocalizedText } from "@/lib/utils/CommonUtils";

const text = getLocalizedText("COMMON");

const ViewSelector = ({ options, selectedValue, onSelectionChange }) => {
  return (
    <div className={styles["container"]}>
      <span className={styles["label"]}>{text("VIEWING")}</span>
      <div className={styles["selectors"]}>
        {options.map(({ label, value }) => (
          <div
            key={value}
            className={`${styles["pill"]} ${selectedValue === value ? styles["active-pill"] : ""}`}
            onClick={() => onSelectionChange(value)}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewSelector;
