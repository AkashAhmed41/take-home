export const isEmptyArray = (arr) => {
  return !arr || !Array.isArray(arr) || arr.length === 0;
};

export const isEmptyObj = (obj) => {
  return !obj || typeof obj !== "object" || isEmptyArray(Object.keys(obj));
};
