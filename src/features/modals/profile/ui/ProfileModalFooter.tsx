import { Button } from "src/shared/ui";
import { ExitModal } from "../../exit";
import { useModal } from "src/shared/ui";

type Props = {
  closeModal: () => void;
  isLoading: boolean;
};

export const ProfileModalFooter = ({ closeModal, isLoading }: Props) => {
  const {
    isOpen: isExitOpen,
    openModal: openExitModal,
    closeModal: closeExitModal,
  } = useModal();

  return (
    <>
      <Button
        text={"Связаться с нами"}
        textColor={"light"}
        buttonType={"primary"}
        onClick={closeModal}
        disabled={isLoading}
      />
      <Button
        text={"Выйти"}
        textColor={"dark"}
        buttonType={"secondary"}
        onClick={openExitModal}
        disabled={isLoading}
      />
      <ExitModal
        isOpen={isExitOpen}
        closeModal={closeExitModal}
        closeBtn={true}
      />
    </>
  );
};
