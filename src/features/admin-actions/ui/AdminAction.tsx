import { useModal } from "src/shared/ui/modal";
import { ChangeBenefit, DeleteBenefit } from "src/features/benefit";
import { DeleteModal } from "src/features/modals/delete-modal/ui/DeleteModal";
import { IBenefitCard } from "src/widgets/benefits";

type Props = {
  benefit: IBenefitCard;
  isNewTag: boolean;
  link: string;
};

export const AdminAction = ({ link, isNewTag, benefit }: Props) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="absolute bottom-[8px] right-[8px] flex h-[30px] w-[60px] flex-row rounded-[8px] bg-card">
        <ChangeBenefit isNewTag={isNewTag} link={link} benefit={benefit} />
        <DeleteBenefit openModal={openModal} />
      </div>
      <DeleteModal
        benefitId={benefit.id}
        isOpen={isOpen}
        closeModal={closeModal}
        closeBtn={false}
      />
    </>
  );
};
