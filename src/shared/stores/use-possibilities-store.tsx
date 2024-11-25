import { create } from "zustand";
import { saveToLocalStorage, getFromLocalStorage } from "../lib";

type PossibilitiesStore = {
  isCheckedApplication: boolean;
  toggleApplication: () => void;

  isCheckedReceipt: boolean;
  toggleReceipt: () => void;
};

export const usePossibilitiesStore = create<PossibilitiesStore>((set) => ({
  isCheckedApplication: getFromLocalStorage("isCheckedApplication") ?? false,
  toggleApplication: () =>
    set((state) => {
      const newValue = !state.isCheckedApplication;
      saveToLocalStorage("isCheckedApplication", newValue);
      return { isCheckedApplication: newValue };
    }),

  isCheckedReceipt: getFromLocalStorage("isCheckedReceipt") ?? false,
  toggleReceipt: () =>
    set((state) => {
      const newValue = !state.isCheckedReceipt;
      saveToLocalStorage("isCheckedReceipt", newValue);
      return { isCheckedReceipt: newValue };
    }),
}));
