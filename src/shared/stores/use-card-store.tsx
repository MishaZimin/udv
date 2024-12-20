import { create } from "zustand";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "src/shared/lib/local-storage";

type Props = {
  name: string;
  setName: (name: string) => void;

  subtext: string;
  setSubtext: (subtext: string) => void;

  description: string;
  setDescription: (description: string) => void;
};

export const useCardStore = create<Props>((set) => ({
  name: getFromLocalStorage("name"),
  setName: (name: string) => {
    set({ name });
    saveToLocalStorage("name", name);
  },

  subtext: getFromLocalStorage("subtext"),
  setSubtext: (subtext: string) => {
    set({ subtext });
    saveToLocalStorage("subtext", subtext);
  },

  description: getFromLocalStorage("description"),
  setDescription: (description: string) => {
    set({ description });
    saveToLocalStorage("description", description);
  },
}));
