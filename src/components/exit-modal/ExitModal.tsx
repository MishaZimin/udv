import { useModal } from "../modal/hooks/useModal";
import Modal from "../modal/ui/Modal";
import Button from "src/shared/ui/button/Button";

const ExidModal = () => {
  const { isOpen, closeModal } = useModal();

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="relative z-10 w-[400px] rounded-[16px] bg-card p-6 px-[40px] py-[48px]">
          <div className="flex flex-col gap-[32px]">
            <p className="text-center text-[20px] font-semibold leading-[28px]">
              Вы уверены, <br />
              что хотите выйти?
            </p>
            <div className="flex flex-col gap-[8px]">
              <Button
                link={"/auth"}
                text={"Выйти"}
                textColor={"light"}
                buttonType={"red"}
              />
              <Button
                onClick={closeModal}
                text={"Отмена"}
                textColor={"dark"}
                buttonType={"secondary"}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ExidModal;
