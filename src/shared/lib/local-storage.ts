export const getFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : "";
  }
  return "";
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveToLocalStorage = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
