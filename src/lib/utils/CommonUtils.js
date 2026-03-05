import en from "@/lib/localization/en.json";

export const getLocalizedText = (section) => (key) => {
  const sectionData = en[section];
  return sectionData?.[key] || key;
};
