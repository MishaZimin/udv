import { useState } from "react";
import { useModal, Button, ButtonCross } from "src/shared/ui";
import { SurveyModal } from "src/features/modals/survey/ui/SurveyModal";
import { SurveyText } from "./SurveyText";

export const SurveyBanner = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [close, setClose] = useState(false);

  return (
    <>
      {!close && (
        <div className="w-full">
          <div className="item-start relative mb-4 flex flex-col justify-between gap-8 rounded-[16px] bg-card p-8 sm:flex-row sm:items-end">
            <SurveyText />
            <div>
              <Button
                onClick={openModal}
                text={"Пройти опрос"}
                textColor={"darkblue"}
                buttonType={"yellow"}
              />
            </div>
            <ButtonCross onClick={() => setClose(true)} />
          </div>
          <SurveyModal isOpen={isOpen} closeModal={closeModal} />
        </div>
      )}
    </>
  );
};
