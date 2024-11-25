import { Button } from "src/shared/ui";
import { ExitModal } from "../../exit";
import { useModal } from "src/shared/ui";
import { useProfileStore } from "../stores/use-profile-modal-store";

type Props = {
  closeModal: () => void;
  isLoading: boolean;
};

export const ProfileModalFooter = ({ isLoading }: Props) => {
  const {
    isOpen: isExitOpen,
    openModal: openExitModal,
    closeModal: closeExitModal,
  } = useModal();
  const { activeTab } = useProfileStore();

  return (
    <>
      {activeTab === "info" && (
        <>
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
      )}
    </>
  );
};
