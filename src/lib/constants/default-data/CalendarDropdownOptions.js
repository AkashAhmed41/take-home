import { getLocalizedText } from "@/lib/utils/CommonUtils";

const currentYear = new Date().getFullYear();
const calendarText = getLocalizedText("CALENDAR");

export const CalendarDropdownOptions = [
  { label: calendarText("THIS_YEAR"), value: currentYear },
  { label: calendarText("LAST_YEAR"), value: currentYear - 1 },
];
