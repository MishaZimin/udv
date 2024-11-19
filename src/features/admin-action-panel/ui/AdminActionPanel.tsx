import { DeleteModal } from "src/features/modals/delete-benefit";

import { ButtonIcon, useModal } from "src/shared/ui";

import { IBenefitCard } from "src/entities/benefit";
import { ActionPanel } from "src/entities/action-panel";
import { useAdminAction } from "..";

type Props = {
  benefit: IBenefitCard;
};

export const AdminActionPanel = ({ benefit }: Props) => {
  const { isOpen, openModal, closeModal } = useModal();

  const { handleButtonClick } = useAdminAction(benefit);

  return (
    <>
      <ActionPanel>
        <ButtonIcon iconName={"Edit"} onClick={handleButtonClick} />
        <ButtonIcon iconName={"Delete"} onClick={openModal} />
      </ActionPanel>

      <DeleteModal
        benefitId={benefit.id}
        isOpen={isOpen}
        closeModal={closeModal}
        closeBtn={false}
      />
    </>
  );
};
