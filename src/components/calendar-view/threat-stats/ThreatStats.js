import React from "react";
import styles from "./ThreatStats.module.css";
import { CalendarIcon, InfoIcon } from "@/lib/svg/DashboardIcons";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import { isEmptyObj } from "@/lib/utils/ObjectUtils";
import { ThreatSeverityType } from "@/lib/constants/enum/ThreatSeverityType";
import HorizontalLine from "@/components/common/horizontal-line/HorizontalLine";

const text = getLocalizedText("CALENDAR");

const ThreatStats = ({ dateStr, timeStr, stats }) => {
  if (isEmptyObj(stats)) return null;

  const { total, high, medium, low } = stats;
  const threats = [
    {
      key: ThreatSeverityType.HIGH,
      value: high,
      className: "high",
    },
    {
      key: ThreatSeverityType.MEDIUM,
      value: medium,
      className: "medium",
    },
    {
      key: ThreatSeverityType.LOW,
      value: low,
      className: "low",
    },
  ];

  return (
    <div className={styles["overlay"]}>
      <div className={styles["container"]}>
        <div className={styles["header"]}>
          <h3 className={styles["title"]}>{text("TITLE")}</h3>
          <div className={styles["date-time"]}>
            <CalendarIcon />
            <span className={styles["time-string"]}>
              {dateStr} {timeStr}
            </span>
          </div>
        </div>
        <div className={styles["info-section"]}>
          <HorizontalLine />
          <div className={styles["total-card"]}>
            <div className={styles["label-wrapper"]}>
              <InfoIcon />
              <span className={styles["total-label"]}>
                {text("TOTAL_THREATS")}
              </span>
            </div>
            <span className={styles["total-count"]}>{total}</span>
          </div>
          <HorizontalLine />
        </div>
        <div className={styles["stats-list"]}>
          {threats.map((threat) => (
            <div
              key={threat.key}
              className={`${styles["stat-item"]} ${styles[threat.className]}`}
            >
              <span>{text(threat.key)}</span>
              <span>{threat.value}</span>
            </div>
          ))}
        </div>
        <div className={styles["pointer"]} />
      </div>
    </div>
  );
};

export default ThreatStats;
