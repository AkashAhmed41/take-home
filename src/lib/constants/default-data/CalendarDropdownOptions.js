import { getLocalizedText } from "@/lib/utils/CommonUtils";

const currentYear = new Date().getFullYear();
const text = getLocalizedText("CALENDAR");

export const CalendarDropdownOptions = [
  { label: text("THIS_YEAR"), value: currentYear },
  { label: text("LAST_YEAR"), value: currentYear - 1 },
];
