import React, { useMemo } from "react";
import {
  MIN_PAGE_NUMBER,
  MAX_PAGE_NUMBER,
} from "@/lib/constants/ApplicationConstants";
import { PaginationOptions } from "@/lib/constants/default-data/PaginationOptions";
import { PaginationControlType } from "@/lib/constants/enum/PaginationControlType";
import {
  DoubleLeftIcon,
  LeftIcon,
  RightIcon,
  DoubleRightIcon,
} from "@/lib/svg/DashboardIcons";
import ViewSelector from "@/components/common/view-selector/ViewSelector";
import styles from "./ThreatPagination.module.css";

const ThreatPagination = ({
  pageSize,
  setPageSize,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = useMemo(() => {
    const numbers = [];
    for (let i = MIN_PAGE_NUMBER; i <= MAX_PAGE_NUMBER; i++) {
      numbers.push(i);
    }
    return numbers;
  }, []);

  const paginationControls = [
    {
      icon: <DoubleLeftIcon />,
      action: () => setCurrentPage(MIN_PAGE_NUMBER),
      disabled: currentPage === MIN_PAGE_NUMBER,
      type: PaginationControlType.ICON,
    },
    {
      icon: <LeftIcon />,
      action: () =>
        setCurrentPage((prev) => Math.max(MIN_PAGE_NUMBER, prev - 1)),
      disabled: currentPage === MIN_PAGE_NUMBER,
      type: PaginationControlType.ICON,
    },
    ...pageNumbers.map((num) => ({
      value: num,
      action: () => setCurrentPage(num),
      active: currentPage === num,
      type: PaginationControlType.NUMBER,
    })),
    {
      icon: <RightIcon />,
      action: () =>
        setCurrentPage((prev) => Math.min(MAX_PAGE_NUMBER, prev + 1)),
      disabled: currentPage === MAX_PAGE_NUMBER,
      type: PaginationControlType.ICON,
    },
    {
      icon: <DoubleRightIcon />,
      action: () => setCurrentPage(MAX_PAGE_NUMBER),
      disabled: currentPage === MAX_PAGE_NUMBER,
      type: PaginationControlType.ICON,
    },
  ];

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(MIN_PAGE_NUMBER);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["left-content"]}>
        {paginationControls.map(
          ({ type, icon, action, disabled, active, value }, index) => (
            <div
              key={index}
              className={`${styles["page-button"]} ${disabled ? styles["disabled"] : ""} ${
                active ? styles["active"] : ""
              }`}
              onClick={() => !disabled && action()}
            >
              {type === PaginationControlType.ICON ? icon : value}
            </div>
          ),
        )}
      </div>
      <ViewSelector
        options={PaginationOptions}
        selectedValue={pageSize}
        onSelectionChange={handlePageSizeChange}
      />
    </div>
  );
};

export default ThreatPagination;
