import { getLocalizedText } from "@/lib/utils/CommonUtils";

const text = getLocalizedText("CALENDAR");

export const MonthSelectionOptions = [
  { label: text("4_MONTHS"), value: 4 },
  { label: text("8_MONTHS"), value: 8 },
  { label: text("12_MONTHS"), value: 12 },
];
