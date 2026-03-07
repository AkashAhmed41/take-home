import React, { useMemo } from "react";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import { generateThreatData } from "@/lib/utils/ThreatGenerationUtils";
import { DEFAULT_PAGE_SIZE } from "@/lib/constants/ApplicationConstants";
import ReactCountryFlag from "react-country-flag";
import styles from "./ThreatTable.module.css";

const text = getLocalizedText("THREAT_LIST");

const ThreatTable = ({ pageSize, currentPage }) => {
  const tableHeaders = [
    "TIMESTAMP",
    "COUNTRY",
    "THREAT_TYPE",
    "SOURCE_IP",
    "DESTINATION_DOMAIN",
    "DESTINATION_IP",
    "RISK",
  ];

  const tableData = useMemo(() => {
    return generateThreatData(DEFAULT_PAGE_SIZE);
  }, [currentPage, pageSize]);

  return (
    <div className={styles["table-container"]}>
      <div className={`${styles["row"]} ${styles["thead-row"]}`}>
        {tableHeaders.map((header) => (
          <div key={header} className={styles["cell"]}>
            {text(header)}
          </div>
        ))}
      </div>
      {tableData.map((threat) => {
        const {
          id,
          timestamp,
          country,
          countryCode,
          threatType,
          sourceIP,
          destinationDomain,
          destinationIP,
          risk,
        } = threat;

        const cells = [
          { content: timestamp },
          {
            content: (
              <span className={styles["country-cell"]}>
                <ReactCountryFlag
                  countryCode={countryCode}
                  svg
                  className={styles["country-flag"]}
                />
                {text(country)}
              </span>
            ),
          },
          { content: text(threatType) },
          { content: sourceIP },
          { content: destinationDomain },
          { content: destinationIP },
          {
            content: (
              <span
                className={`${styles["risk-badge"]} ${styles[risk.toLowerCase()]}`}
              >
                {text(risk)}
              </span>
            ),
          },
        ];

        return (
          <div key={id} className={`${styles["row"]} ${styles["tbody-row"]}`}>
            {cells.map((cell, index) => (
              <div key={index} className={styles["cell"]}>
                {cell.content}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ThreatTable;
