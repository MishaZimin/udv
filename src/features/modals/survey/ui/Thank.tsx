import { useSurveyStore } from "../model/stores/use-survey";

export const Thank = () => {
  const selectedBenefits = useSurveyStore((state) => state.selectedBenefits);
  const selectedSmile = useSurveyStore((state) => state.selectedSmile);

  console.log(selectedBenefits, selectedSmile);

  return (
    <div className="flex flex-col gap-[16px]">
      <p className="text-center text-[28px] font-semibold leading-[36px]">
        Спасибо за ответы
      </p>
      <p className="text-center text-[16px] leading-[22px] text-opacity-60">
        Вы сделали сервис чуточку лучше
      </p>
    </div>
  );
};
