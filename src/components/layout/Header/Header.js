import React from "react";
import {
  CollapseIcon,
  GlobeIcon,
  BellIcon,
  ClockIcon,
} from "@/lib/svg/HeaderIcons";
import UserAvatar from "@/components/layout/header/user-avatar/UserAvatar";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import styles from "./Header.module.css";

const text = getLocalizedText("HEADER");

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["left-content"]}>
        <CollapseIcon />
        <h1 className={styles["title"]}>{text("DASHBOARD")}</h1>
      </div>
      <div className={styles["right-content"]}>
        <div className={styles["update-status"]}>
          <ClockIcon />
          <div className={styles["update-text"]}>
            <span className={styles["label"]}>{text("UPDATED")}</span>
            <span className={styles["mins-ago"]}>{text("MINS_AGO")}</span>
          </div>
        </div>
        <GlobeIcon />
        <BellIcon />
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;
