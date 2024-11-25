import { create } from "zustand";

type ActiveTab = "info" | "requests";

interface ProfileStore {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  activeTab: "info",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
