// src/features/survey/model/useFirstQuestion.ts
import { useState } from "react";
import { benefits } from "src/widgets/benefits-list";

export const useFirstQuestion = () => {
  const [selectedBenefits, setSelectedBenefits] = useState<number[]>([]);

  const toggleBenefit = (id: number) => {
    setSelectedBenefits((prev) =>
      prev.includes(id)
        ? prev.filter((benefitId) => benefitId !== id)
        : [...prev, id],
    );
  };

  return { benefits, selectedBenefits, toggleBenefit };
};
