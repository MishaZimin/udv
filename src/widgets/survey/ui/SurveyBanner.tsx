import { useState } from "react";
import { useModal } from "src/shared/ui/modal";
import { SurveyModal } from "../../../features/modals/survey-modal/ui/SurveyModal";
import { Button } from "src/shared/ui";
import closeLine from "src/shared/assets/svgs/closeLine.svg";

export const SurveyBanner = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [close, setClose] = useState(false);

  return (
    <>
      {!close && (
        <div className="w-full">
          <div className="item-start relative mb-4 flex flex-col justify-between gap-8 rounded-[16px] bg-card p-8 sm:flex-row sm:items-end">
            <div className="flex flex-col gap-[8px]">
              <p className="text-[20px] font-semibold leading-[28px]">
                Какими бенефитами пользуетесь?
              </p>
              <p className="leading-[22px]">
                Ответьте, чтобы сделать сервис лучше
              </p>
            </div>
            <div>
              <Button
                onClick={openModal}
                text={"Пройти опрос"}
                textColor={"darkblue"}
                buttonType={"yellow"}
              />
            </div>
            <button
              onClick={() => setClose(true)}
              className="absolute right-[8px] top-[8px] h-[22px] w-[22px]"
            >
              <img src={closeLine} />
            </button>
          </div>

          <SurveyModal
            isOpen={isOpen}
            closeModal={closeModal}
            closeBtn={true}
          />
        </div>
      )}
    </>
  );
};
