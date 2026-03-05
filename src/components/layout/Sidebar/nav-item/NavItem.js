"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import styles from "./NavItem.module.css";

const text = getLocalizedText("SIDEBAR");

const NavItem = ({ icon: Icon = null, labelKey, redirectTo = null }) => {
  const pathname = usePathname();
  const isActive = pathname === redirectTo;

  return (
    <Link
      href={redirectTo || "#"}
      className={`${styles["nav-item"]} ${isActive ? styles["active"] : ""}`}
    >
      {Icon && <Icon />}
      <span className={styles["label"]}>{text(labelKey)}</span>
    </Link>
  );
};

export default NavItem;
