import { useFirstQuestion } from "../model/hooks/use-first-question";

export const FirstQuestion = () => {
  const { benefits, selectedBenefits, toggleBenefit } = useFirstQuestion();

  return (
    <div className="flex flex-col gap-[32px]">
      <p className="text-left text-[28px] font-semibold leading-[36px]">
        Какими бенефитами пользуетесь?
      </p>
      <div className="flex w-full flex-wrap gap-[8px] bg-card">
        {benefits.map((benefit) => (
          <button
            key={benefit.id}
            onClick={() => toggleBenefit(benefit.id)}
            className={`animation rounded-full bg-graphite px-4 py-3 ${
              selectedBenefits.includes(benefit.id)
                ? "text-white"
                : "bg-opacity-[4%] hover:bg-opacity-[8%]"
            }`}>
            <p
              className={`text-center leading-[22px] ${
                selectedBenefits.includes(benefit.id) ? "text-white" : ""
              }`}>
              {benefit.title}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};
