import { useEffect } from "react";
import { Modal } from "src/shared/ui/modal";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  closeBigModal: () => void;
  closeBtn: boolean;
};

export const SuccessModal = ({
  isOpen,
  closeModal,
  closeBtn,
  closeBigModal,
}: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
      // closeBigModal();
    }, 5000);

    return () => clearTimeout(timer);
  }, [closeModal, closeBigModal]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal} closeBtn={closeBtn}>
      <div className="relative z-10 w-svw rounded-t-[16px] bg-card p-6 px-[40px] py-[48px] sm:w-[420px] sm:rounded-[16px]">
        <div className="flex flex-col gap-[16px] rounded-[16px] bg-card">
          <p className="text-center text-[28px] font-semibold leading-[36px]">
            Заявка на подключение
            <br /> отправлена
          </p>
        </div>
      </div>
    </Modal>
  );
};
