import React from "react";
import Image from "next/image";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import styles from "./UserAvatar.module.css";

const text = getLocalizedText("HEADER");

const UserAvatar = () => {
  return (
    <div className={styles["user-avatar"]}>
      <Image
        src="/avatar.png"
        alt="user avatar"
        width={30}
        height={30}
        className={styles["avatar"]}
      />
      <div className={styles["user-info"]}>
        <p className={styles["user-name"]}>{text("USER_NAME")}</p>
        <p className={styles["user-role"]}>{text("USER_ROLE")}</p>
      </div>
    </div>
  );
};

export default UserAvatar;
