"use client";

import React, { useState } from "react";
import { isEmptyArray } from "@/lib/utils/ObjectUtils";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { DownVectorIcon } from "@/lib/svg/DashboardIcons";
import styles from "./Dropdown.module.css";

const Dropdown = ({
  selected,
  options,
  onChange,
  placeholder = "Select",
  className = "",
  inputClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useOutsideClick(() => setIsOpen(false));
  const [selectedOption, setSelectedOption] = useState(
    options.find((opt) => opt.value === selected) || null,
  );

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  return (
    <div className={`${styles["container"]} ${className}`} ref={containerRef}>
      <div
        className={`${styles["input-box"]} ${inputClassName}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <DownVectorIcon />
      </div>
      {isOpen && !isEmptyArray(options) && (
        <div className={styles["menu"]}>
          {options.map(({ label, value }) => (
            <div
              key={value}
              className={`${styles["item"]} ${
                selectedOption && value === selectedOption.value
                  ? styles["active"]
                  : ""
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
