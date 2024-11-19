import { Loader } from "src/shared/ui";
import { BigModal } from "src/shared/ui/modal/ui/BigModal";
import { useProfile } from "src/widgets/profile-info";
import { ProfileInfo } from "./ProfileText";
import { ProfileModalFooter } from "./ProfileModalFooter";
import { TextLoader } from "src/shared/ui/loader/TextLoader";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

export const ProfileModal = ({ isOpen, closeModal }: Props) => {
  const { profile, error, isLoading } = useProfile();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>error {error.message}</p>;
  }

  const footerBtn = (
    <ProfileModalFooter closeModal={closeModal} isLoading={isLoading} />
  );
  const children = <ProfileInfo profile={profile} isLoading={isLoading} />;
  const header = isLoading ? (
    <TextLoader height="36px" backgroundColor="bg-white" />
  ) : (
    <>{profile.full_name}</>
    // <TextLoader height="36px" backgroundColor="bg-white" />
  );

  return (
    <BigModal
      isOpen={isOpen}
      onClose={closeModal}
      closeModal={closeModal}
      header={header}
      footer={footerBtn}
      children={children}></BigModal>
  );
};
