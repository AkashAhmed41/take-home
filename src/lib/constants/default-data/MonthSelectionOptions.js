import { getLocalizedText } from "@/lib/utils/CommonUtils";

const calendarText = getLocalizedText("CALENDAR");

export const MonthSelectionOptions = [
  { label: calendarText("4_MONTHS"), value: 4 },
  { label: calendarText("8_MONTHS"), value: 8 },
  { label: calendarText("12_MONTHS"), value: 12 },
];
