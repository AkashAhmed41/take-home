import React from "react";
import Link from "next/link";
import { Logo } from "@/lib/svg/icons";
import NavLinks from "./NavLinks/NavLinks";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles["sidebar"]}>
      <Link href="#" className={styles["logo-link"]}>
        <Logo />
      </Link>
      <NavLinks />
    </aside>
  );
};

export default Sidebar;
