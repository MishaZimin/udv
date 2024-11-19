// src/features/survey/ui/SecondQuestion.tsx
import { useSecondQuestion } from "../model/hooks/use-second-question";

export const SecondQuestion = () => {
  const { smiles, selectedSmile, toggleSmile } = useSecondQuestion();

  return (
    <div className="flex flex-col gap-[40px]">
      <p className="text-left text-[28px] font-semibold leading-[36px]">
        Насколько вы довольны сервисом?
      </p>
      <div className="flex flex-row justify-center gap-[8px]">
        {smiles.map((smile) => (
          <button
            key={smile.id}
            onClick={() => toggleSmile(smile.id)}
            className={`animation h-[50px] w-[50px] rounded-full bg-graphite sm:h-16 sm:w-16 ${
              selectedSmile === smile.id
                ? ""
                : "bg-opacity-[4%] hover:bg-opacity-[8%]"
            }`}>
            <p className="text-[32px]">{smile.smile}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
