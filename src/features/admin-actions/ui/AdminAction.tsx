import { useModal } from "src/shared/ui/modal";
import { ChangeBenefit, DeleteBenefit } from "src/features/benefit";
import { DeleteModal } from "src/features/modals/delete-modal/ui/DeleteModal";

type Props = {
  title: string;
  subtext: string;
  image?: string;
  isNewTag: boolean;
  link: string;
};

export const AdminAction = ({
  title,
  subtext,
  link,
  isNewTag,
  image,
}: Props) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="absolute bottom-[8px] right-[8px] flex h-[30px] w-[60px] flex-row rounded-[8px] bg-card">
        <ChangeBenefit
          title={title}
          subtext={subtext}
          isNewTag={isNewTag}
          link={link}
          image={image}
        />
        <DeleteBenefit openModal={openModal} />
      </div>
      <DeleteModal isOpen={isOpen} closeModal={closeModal} closeBtn={false} />
    </>
  );
};
