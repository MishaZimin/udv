// src/shared/stores/surveyStore.ts
import { create } from "zustand";

interface SurveyState {
  selectedBenefits: number[];
  selectedSmile: number | null;
  toggleBenefit: (id: number) => void;
  setSmile: (id: number | null) => void;
  resetSurvey: () => void;
}

export const useSurveyStore = create<SurveyState>((set) => ({
  selectedBenefits: [],
  selectedSmile: null,
  toggleBenefit: (id) =>
    set((state) => ({
      selectedBenefits: state.selectedBenefits.includes(id)
        ? state.selectedBenefits.filter((benefitId) => benefitId !== id)
        : [...state.selectedBenefits, id],
    })),
  setSmile: (id) => set({ selectedSmile: id }),
  resetSurvey: () =>
    set({
      selectedBenefits: [],
      selectedSmile: null,
    }),
}));
