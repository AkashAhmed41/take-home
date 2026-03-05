"use client";

import React from "react";
import NavItem from "../NavItem/NavItem";
import { NavItems } from "@/lib/constants/default-data/NavItems";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  const mainNavItems = NavItems.slice(0, -1);
  const settingsNav = NavItems[NavItems.length - 1];

  return (
    <div className={styles["nav-container"]}>
      <div className={styles["main-nav"]}>
        {mainNavItems.map(({ icon, labelKey, redirectTo }) => (
          <NavItem
            key={labelKey}
            icon={icon}
            labelKey={labelKey}
            redirectTo={redirectTo}
          />
        ))}
      </div>
      <NavItem
        icon={settingsNav.icon}
        labelKey={settingsNav.labelKey}
        redirectTo={settingsNav.redirectTo}
      />
    </div>
  );
};

export default NavLinks;
