import Modal from "../modal/ui/Modal";
import { benefits } from "../benefits/data/benefits.data";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  closeBtn: boolean;
};

const SurveyMoodal = ({ isOpen, closeModal, closeBtn }: Props) => {
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
                  className="animation rounded-full bg-graphite bg-opacity-[4%] px-[16px] py-[12px] hover:bg-opacity-[8%]"
                >
                  <p className="text-center">{benefit.title}</p>
                </button>
              ))}
            </div>
            <button
              className="animation h-[60px] rounded-full bg-yellow text-center hover:bg-yellowhover active:bg-yellowactive"
              onClick={closeModal}
            >
              <p className="my-auto text-[20px] font-semibold leading-[28px]">
                Отправить
              </p>
            </button>

            {/* <Button
              text={"Отправить"}
              textColor={"dark"}
              buttonType={"yellow"}
            /> */}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SurveyMoodal;
