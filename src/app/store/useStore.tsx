import { create } from "zustand";

interface MyState {
    cost: number;
    setCost: (newDistance: number) => void;
    mail: string;
    setMail: (newMail: string) => void;
}

export const useStore = create<MyState>((set) => ({
    cost: 1,
    setCost: (newCost: number) => set(() => ({ cost: newCost })),

    mail: "",
    setMail: (newMail: string) => set(() => ({ mail: newMail })),
}));
