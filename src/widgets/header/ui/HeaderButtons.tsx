import { useModal } from "src/shared/ui";
import { useProfile } from "src/widgets/profile-info/api/queryes/use-profile";
import { ProfileModal } from "src/features/modals/profile/ui/ProfileModal";
import { ImageLoader } from "src/shared/ui/loader/ImageLoader";
import { formatName } from "..";

export const HeaderButtons = () => {
  const {
    isOpen: isProfileOpen,
    openModal: openProfileModal,
    closeModal: closeProfileModal,
  } = useModal();

  const { profile, error, isLoading } = useProfile();

  if (error) {
    return <p>error</p>;
  }

  return (
    <>
      <div className="my-auto mr-4 flex gap-4 sm:mr-10 lg:mr-0">
        {isLoading ? (
          <p className="w-[115px]">
            <ImageLoader height="22px" />
          </p>
        ) : (
          <button onClick={openProfileModal}>
            <div className="flex h-full items-center">
              {profile.full_name && (
                <div>
                  <p className="block text-right sm:hidden">
                    {formatName(profile.full_name)}
                  </p>
                  <p className="hidden text-right sm:block">
                    {profile.full_name}
                  </p>
                </div>
              )}
            </div>
          </button>
        )}
      </div>

      {isProfileOpen && (
        <ProfileModal isOpen={isProfileOpen} closeModal={closeProfileModal} />
      )}
    </>
  );
};
