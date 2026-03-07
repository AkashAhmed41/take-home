import {
  MAX_HIGH_THREATS,
  MAX_MEDIUM_THREATS,
  MAX_LOW_THREATS,
  THREAT_SEED_OFFSETS,
  DEFAULT_PAGE_SIZE,
} from "@/lib/constants/ApplicationConstants";
import { MonthNames } from "@/lib/utils/CalendarUtils";
import { ThreatType } from "@/lib/constants/enum/ThreatType";
import { RiskType } from "@/lib/constants/enum/RiskType";
import { CountryList } from "@/lib/constants/default-data/CountryList";

const SEED_YEAR_MULTIPLIER = 1000;
const SEED_MONTH_MULTIPLIER = 100;
const SEEDED_RANDOM_MULTIPLIER = 10000;

const getDateSeed = (day, month, year) => {
  return year * SEED_YEAR_MULTIPLIER + month * SEED_MONTH_MULTIPLIER + day;
};

const getSeededRandom = (seed) => {
  const x = Math.sin(seed) * SEEDED_RANDOM_MULTIPLIER;
  return x - Math.floor(x);
};

export const generateThreatStats = (day, month, year) => {
  const seed = getDateSeed(day, month, year);

  const high =
    Math.floor(
      getSeededRandom(seed + THREAT_SEED_OFFSETS.HIGH) * MAX_HIGH_THREATS,
    ) + 1;
  const medium =
    Math.floor(
      getSeededRandom(seed + THREAT_SEED_OFFSETS.MEDIUM) * MAX_MEDIUM_THREATS,
    ) + 1;
  const low =
    Math.floor(
      getSeededRandom(seed + THREAT_SEED_OFFSETS.LOW) * MAX_LOW_THREATS,
    ) + 1;
  const total = high + medium + low;

  return { high, medium, low, total };
};

export const getFormattedDateTime = (day, month, year, extraSeed = 0) => {
  const seed = getDateSeed(day, month, year) + extraSeed;
  const monthName = MonthNames.short[month];
  const dateStr = `${monthName} ${day}, ${year}`;

  const hours = String(
    Math.floor(getSeededRandom(seed + THREAT_SEED_OFFSETS.HOURS) * 24),
  ).padStart(2, "0");
  const minutes = String(
    Math.floor(getSeededRandom(seed + THREAT_SEED_OFFSETS.MINUTES) * 60),
  ).padStart(2, "0");
  const timeStr = `${hours}:${minutes}`;

  return { dateStr, timeStr };
};

export const generateThreatData = (count = DEFAULT_PAGE_SIZE) => {
  const threatTypes = Object.values(ThreatType);
  const riskTypes = Object.values(RiskType);

  return Array.from({ length: count }, (_, i) => {
    const seed = i + Date.now();
    const country =
      CountryList[Math.floor(getSeededRandom(seed) * CountryList.length)];

    const now = new Date();
    const { dateStr, timeStr } = getFormattedDateTime(
      now.getDate(),
      now.getMonth(),
      now.getFullYear(),
      i,
    );

    return {
      id: i + 1,
      timestamp: `${dateStr} ${timeStr}`,
      country: country.name,
      countryCode: country.code,
      threatType:
        threatTypes[Math.floor(getSeededRandom(seed + 1) * threatTypes.length)],
      sourceIP: `103.248.15.${42 + i}`,
      destinationDomain: "neapay.com",
      destinationIP: `106.10.236.${137 + i}`,
      risk: riskTypes[Math.floor(getSeededRandom(seed + 2) * riskTypes.length)],
    };
  });
};
