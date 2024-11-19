import { benefits } from "src/widgets/benefits-list";
import { useSurveyStore } from "../stores/use-survey";

export const useFirstQuestion = () => {
  const selectedBenefits = useSurveyStore((state) => state.selectedBenefits);
  const toggleBenefit = useSurveyStore((state) => state.toggleBenefit);

  return { benefits, selectedBenefits, toggleBenefit };
};
