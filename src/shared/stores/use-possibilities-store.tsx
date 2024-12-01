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
      const newApplicationState = !state.isCheckedApplication;

      if (!newApplicationState) {
        saveToLocalStorage("isCheckedReceipt", false);
        saveToLocalStorage("isCheckedApplication", false);
        return {
          isCheckedApplication: false,
          isCheckedReceipt: false,
        };
      }

      saveToLocalStorage("isCheckedApplication", newApplicationState);
      return { isCheckedApplication: newApplicationState };
    }),
  resetApplication: () => {
    saveToLocalStorage("isCheckedApplication", false);
    saveToLocalStorage("isCheckedReceipt", false);
    set({
      isCheckedApplication: false,
      isCheckedReceipt: false,
    });
  },

  isCheckedReceipt: getFromLocalStorage("isCheckedReceipt") ?? false,
  toggleReceipt: () =>
    set((state) => {
      let newApplicationState = state.isCheckedApplication;

      if (!state.isCheckedApplication) {
        newApplicationState = true;
        saveToLocalStorage("isCheckedApplication", true);
      }

      const newReceiptState = !state.isCheckedReceipt;
      saveToLocalStorage("isCheckedReceipt", newReceiptState);

      return {
        isCheckedApplication: newApplicationState,
        isCheckedReceipt: newReceiptState,
      };
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
