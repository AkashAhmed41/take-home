"use client";

import React, { useState } from "react";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import {
  DEFAULT_PAGE_SIZE,
  DEFAULT_PAGE_NUMBER,
} from "@/lib/constants/ApplicationConstants";
import ThreatFilters from "@/components/threat-list/threat-filters/ThreatFilters";
import ThreatTable from "@/components/threat-list/threat-table/ThreatTable";
import ThreatPagination from "@/components/threat-list/threat-pagination/ThreatPagination";
import styles from "./ThreatList.module.css";

const text = getLocalizedText("THREAT_LIST");

const ThreatList = () => {
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE_NUMBER);

  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <h2 className={styles["title"]}>{text("TITLE")}</h2>
        <ThreatFilters />
      </div>
      <ThreatTable pageSize={pageSize} currentPage={currentPage} />
      <ThreatPagination
        pageSize={pageSize}
        setPageSize={setPageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ThreatList;
