import Modal from "../modal/ui/Modal";
import { benefits } from "../benefits/data/benefits.data";
import Button from "src/shared/ui/button/Button";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  closeBtn: boolean;
};

const SurveyMoodal = ({ isOpen, closeModal, closeBtn }: Props) => {
  const [selectedBenefits, setSelectedBenefits] = useState<number[]>([]);

  const toggleBenefit = (id: number) => {
    setSelectedBenefits((prev: number[]) =>
      prev.includes(id)
        ? prev.filter((benefitId: number) => benefitId !== id)
        : [...prev, id],
    );
  };

  console.log(selectedBenefits);

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal} closeBtn={closeBtn}>
        <div className="relative z-10 w-[600px] rounded-[16px] bg-card p-6 px-[40px] py-[48px]">
          <div className="flex flex-col gap-[32px]">
            <p className="text-left text-[28px] font-semibold leading-[36px]">
              Какими бенефитами пользуетесь?
            </p>
            <div className="flex w-full flex-wrap gap-[8px] bg-card">
              {benefits.map((benefit) => (
                <button
                  key={benefit.id}
                  onClick={() => toggleBenefit(benefit.id)}
                  className={`animation rounded-full px-[16px] py-[12px] ${
                    selectedBenefits.includes(benefit.id)
                      ? "bg-black text-white"
                      : "bg-graphite bg-opacity-[4%] hover:bg-opacity-[8%]"
                  }`}
                >
                  <p
                    className={`text-center leading-[22px] ${
                      selectedBenefits.includes(benefit.id) ? "text-white" : ""
                    }`}
                  >
                    {benefit.title}
                  </p>
                </button>
              ))}
            </div>
            <Button
              text={"Отправить"}
              textColor={"dark"}
              buttonType={"yellow"}
              onClick={closeModal}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SurveyMoodal;
