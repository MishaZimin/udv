import { Loader } from "src/shared/ui";
import { BigModal } from "src/shared/ui/modal/ui/BigModal";
import { useProfile } from "src/widgets/profile-info";
import { ProfileMain } from "./ProfileMain";
import { ProfileModalFooter } from "./ProfileModalFooter";
import { TextLoader } from "src/shared/ui/loader/TextLoader";
import { useProfileStore } from "../stores/use-profile-modal-store";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

export const ProfileModal = ({ isOpen, closeModal }: Props) => {
  const { profile, error, isLoading } = useProfile();
  const { activeTab } = useProfileStore();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>error {error.message}</p>;
  }

  const header = isLoading ? (
    <TextLoader height="36px" backgroundColor="bg-white" />
  ) : (
    <>{activeTab === "info" ? profile.full_name : "Мои заявки"}</>
  );
  const children = <ProfileMain profile={profile} isLoading={isLoading} />;
  const footer =
    activeTab === "info" ? (
      <ProfileModalFooter closeModal={closeModal} isLoading={isLoading} />
    ) : null;

  return (
    <BigModal
      isOpen={isOpen}
      closeModal={closeModal}
      header={header}
      footer={footer}
      children={children}></BigModal>
  );
};
