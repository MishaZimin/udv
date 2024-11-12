import { Modal } from "src/shared/ui/modal";
import { Button } from "src/shared/ui";
import { FirstQuestion } from "./FirstQuestion";
import { SecondQuestion } from "src/features/modals/survey/ui/SecondQuestion";
import { Thank } from "./Thank";
import { useSurveyModal } from "../model/use-survey-modal";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  closeBtn: boolean;
};

export const SurveyModal = ({ isOpen, closeModal, closeBtn }: Props) => {
  const { currentQuestion, handleNext } = useSurveyModal(isOpen, closeModal);

  const questionComponents: Record<number, JSX.Element> = {
    0: <FirstQuestion />,
    1: <SecondQuestion />,
    2: <Thank />,
  };

  const renderQuestion = () => questionComponents[currentQuestion] || null;

  return (
    <Modal isOpen={isOpen} onClose={closeModal} closeBtn={closeBtn}>
      <div
        className={`relative z-10 w-svw rounded-t-[16px] bg-card p-6 px-[40px] py-[48px] ${
          currentQuestion == 0 ? "sm:w-[600px]" : "sm:w-[500px]"
        } sm:rounded-[16px]`}>
        <div className="flex flex-col gap-[32px]">
          {renderQuestion()}
          {currentQuestion !== 2 && (
            <Button
              text={currentQuestion < 2 ? "Далее" : "Отправить"}
              textColor="dark"
              buttonType="yellow"
              onClick={handleNext}
            />
          )}
        </div>
      </div>
    </Modal>
  );
};
