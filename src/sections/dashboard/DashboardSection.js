import React from "react";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import CalendarView from "@/components/calendar-view/CalendarView";
import ThreatList from "@/components/threat-list/ThreatList";
import { RightVectorIcon } from "@/lib/svg/DashboardIcons";
import styles from "./DashboardSection.module.css";

const headerText = getLocalizedText("HEADER");

const DashboardSection = () => {
  return (
    <div className={styles["section"]}>
      <div className={styles["header"]}>
        <span>{headerText("DASHBOARD")}</span>
        <RightVectorIcon />
        <span>{headerText("DASHBOARD")}</span>
      </div>
      <CalendarView />
      <ThreatList />
    </div>
  );
};

export default DashboardSection;
