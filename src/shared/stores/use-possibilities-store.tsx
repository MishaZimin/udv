import { create } from "zustand";
import { saveToLocalStorage, getFromLocalStorage } from "../lib";

type PossibilitiesStore = {
  isCheckedApplication: boolean;
  toggleApplication: () => void;
  resetApplication: () => void;

  isCheckedReceipt: boolean;
  toggleReceipt: () => void;
  resetReceipt: () => void;

  resetAll: () => void;
};

export const usePossibilitiesStore = create<PossibilitiesStore>((set) => ({
  isCheckedApplication: getFromLocalStorage("isCheckedApplication") ?? false,
  toggleApplication: () =>
    set((state) => {
      const newValue = !state.isCheckedApplication;
      saveToLocalStorage("isCheckedApplication", newValue);
      return { isCheckedApplication: newValue };
    }),
  resetApplication: () => {
    saveToLocalStorage("isCheckedApplication", false);
    set({ isCheckedApplication: false });
  },

  isCheckedReceipt: getFromLocalStorage("isCheckedReceipt") ?? false,
  toggleReceipt: () =>
    set((state) => {
      const newValue = !state.isCheckedReceipt;
      saveToLocalStorage("isCheckedReceipt", newValue);
      return { isCheckedReceipt: newValue };
    }),
  resetReceipt: () => {
    saveToLocalStorage("isCheckedReceipt", false);
    set({ isCheckedReceipt: false });
  },
  resetAll: () => {
    saveToLocalStorage("isCheckedApplication", false);
    saveToLocalStorage("isCheckedReceipt", false);
    set({
      isCheckedApplication: false,
      isCheckedReceipt: false,
    });
  },
}));
