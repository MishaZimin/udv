import React from "react";
import { BenefitsUsageCircle } from "./BenefitsUsageCircle";
import { BenefitUsageItems } from "./BenefitUsageItems";

export const UseBenefit: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <h1>Использование бенефитов</h1>
      <div className="flex h-auto flex-row gap-8">
        <BenefitUsageItems />
        <BenefitsUsageCircle />
      </div>
    </div>
  );
};
