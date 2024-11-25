import { getFromLocalStorage, saveToLocalStorage } from "src/shared/lib";
import { create } from "zustand";

interface MailState {
  mail: string;
  setMail: (mail: string) => void;
}

export const useMailStore = create<MailState>((set) => ({
  mail: getFromLocalStorage("inputMail"),
  setMail: (mail) => {
    set({ mail });
    saveToLocalStorage("inputMail", mail);
  },
}));
