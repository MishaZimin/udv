import { create } from "zustand";

interface MyState {
    cost: number;
    setCost: (newDistance: number) => void;
}

export const useStore = create<MyState>((set) => ({
    cost: 1,
    setCost: (newCost: number) => set(() => ({ cost: newCost })),
}));
