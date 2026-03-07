import React from "react";
import Dropdown from "@/components/common/dropdown/Dropdown";
import { FilterIcon } from "@/lib/svg/DashboardIcons";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import styles from "./ThreatFilters.module.css";

const text = getLocalizedText("THREAT_LIST");

const ThreatFilters = () => {
  const filters = [
    {
      options: [],
      placeholder: "SELECT_THREAT",
    },
    {
      options: [],
      placeholder: "COUNTRY",
    },
    {
      options: [],
      placeholder: "SELECT_RISK",
    },
    {
      options: [],
      placeholder: "DATE_RANGE",
      className: "date-dropdown",
      inputClassName: "date-input",
    },
  ];

  return (
    <div className={styles["wrapper"]}>
      {filters.map(
        ({ options, placeholder, className, inputClassName }, index) => (
          <Dropdown
            key={index}
            options={options}
            placeholder={text(placeholder)}
            className={styles[className || "filter-dropdown"]}
            inputClassName={styles[inputClassName || "filter-input"]}
          />
        ),
      )}
      <FilterIcon />
    </div>
  );
};

export default ThreatFilters;
