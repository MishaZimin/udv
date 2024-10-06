import create from "zustand";

type SidebarState = {
    orientation: "vertical" | "horizontal";
    items: string[];
    setOrientation: (orientation: "vertical" | "horizontal") => void;
    setItems: (items: string[]) => void;
};

export const useSidebarStore = create<SidebarState>((set) => ({
    orientation: "vertical",
    items: ["Item 1", "Item 2", "Item 3"],
    setOrientation: (orientation) => set({ orientation }),
    setItems: (items) => set({ items }),
}));
