import closeLine from "src/shared/assets/svgs/closeLine.svg";
import { useModal } from "../modal/hooks/useModal";
import SurveyMoodal from "./SurveyModal";
import { useState } from "react";

const Survey = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [close, setClose] = useState(false);
  return (
    <>
      {!close && (
        <div className="relative">
          <div className="mb-[16px] flex h-[122px] w-full flex-row justify-between gap-[8px] rounded-[16px] bg-card p-[32px]">
            <div className="my-auto flex flex-col gap-[8px]">
              <p className="text-[20px] font-semibold leading-[28px]">
                Какими бенефитами пользуетесь?
              </p>
              <p className="leading-[22px]">
                Ответьте, чтобы сделать сервис лучше
              </p>
            </div>
            <button
              onClick={openModal}
              className="my-auto rounded-[8px] bg-yellow px-[24px] py-[12px]"
            >
              <p className="font-semibold">Пройти опрос</p>
            </button>
          </div>
          <button
            onClick={() => setClose(true)}
            className="absolute right-[8px] top-[8px] h-[22px] w-[22px]"
          >
            <img src={closeLine} />
          </button>
          <SurveyMoodal
            isOpen={isOpen}
            closeModal={closeModal}
            closeBtn={true}
          />
        </div>
      )}
    </>
  );
};

export default Survey;
