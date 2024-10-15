import create from "zustand";

export interface CardState {
  name: string;
  setName: (name: string) => void;

  subtext: string;
  setSubtext: (subtext: string) => void;

  description: string;
  setDescription: (description: string) => void;
}

export const useCardStore = create<CardState>((set) => ({
  name: "",
  setName: (name: string) => set({ name }),

  subtext: "",
  setSubtext: (subtext: string) => set({ subtext }),

  description: "",
  setDescription: (description: string) => set({ description }),
}));
