import { useEffect, useState } from "react";
import { Modal } from "src/shared/ui/modal";
import { Button } from "src/shared/ui";
// import { benefits } from "src/widgets/benefits";
import { SecondQuestion } from "src/features/modals/survey-modal/ui/SecondQuestion";
import { FirstQuestion } from "./FirstQuestion";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  closeBtn: boolean;
};

export const SurveyModal = ({ isOpen, closeModal, closeBtn }: Props) => {
  const [, setSelectedBenefits] = useState<number[]>([]);
  const [btn, setBtn] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setSelectedBenefits([]);
      setBtn(false);
    }
  }, [isOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal} closeBtn={closeBtn}>
        <div className="relative z-10 w-svw rounded-t-[16px] bg-card p-6 px-[40px] py-[48px] sm:w-[600px] sm:rounded-[16px]">
          <div className="flex flex-col gap-[32px]">
            {!btn ? <FirstQuestion /> : <SecondQuestion />}
            <Button
              text={"Отправить"}
              textColor={"dark"}
              buttonType={"yellow"}
              onClick={
                btn
                  ? closeModal
                  : () => {
                      setBtn(true);
                    }
              }
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
