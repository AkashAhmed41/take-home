"use client";

import React, { useState } from "react";
import { DownVectorIcon } from "@/lib/svg/DashboardIcons";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import styles from "./Dropdown.module.css";

const Dropdown = ({ selected, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useOutsideClick(() => setIsOpen(false));
  const [selectedOption, setSelectedOption] = useState(
    options.find((opt) => opt.value === selected) || options[0],
  );

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  return (
    <div className={styles["container"]} ref={containerRef}>
      <div className={styles["input-box"]} onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption.label}</span>
        <DownVectorIcon />
      </div>
      {isOpen && (
        <div className={styles["menu"]}>
          {options.map(({ label, value }) => (
            <div
              key={value}
              className={`${styles["item"]} ${
                value === selectedOption.value ? styles["active"] : ""
              }`}
              onClick={() => handleSelect({ label, value })}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
