import { Modal } from "src/shared/ui/modal";
import { Button } from "src/shared/ui";
import { useNavigate } from "react-router-dom";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  closeBtn: boolean;
};

export const ExitModal = ({ isOpen, closeModal }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("isAdministrator");
    localStorage.removeItem("token");

    navigate("/auth");
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="relative z-10 w-svw rounded-t-[16px] bg-card p-6 px-[40px] py-[48px] sm:w-[400px] sm:rounded-[16px]">
          <div className="flex flex-col gap-[32px]">
            <p className="text-center text-[20px] font-semibold leading-[28px]">
              Вы уверены, <br />
              что хотите выйти?
            </p>
            <div className="flex flex-col gap-[8px]">
              <Button
                onClick={handleClick}
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
