import { useModal } from "src/shared/ui";
// import { ExitModal } from "src/features/modals";
import { useProfile } from "src/widgets/profile-info/api/queryes/use-profile";
import { formatName } from "..";
import { ProfileModal } from "src/features/modals/profile/ui/ProfileModal";

export const HeaderButtons = () => {
  // const { isOpen, openModal, closeModal } = useModal();
  const {
    isOpen: isProfileOpen,
    openModal: openProfileModal,
    closeModal: closeProfileModal,
  } = useModal();

  const { profile, error, isLoading } = useProfile();

  if (isLoading) {
    // return <Loader />;
    return <></>;
  }

  if (error) {
    return <p>error</p>;
  }

  const loaderName = (
    <div className="animation h-[28px] w-[120px] animate-pulse rounded-[8px] bg-card"></div>
  );

  return (
    <>
      <div className="my-auto mr-4 flex gap-4 sm:mr-10 lg:mr-0">
        {/* <Link to={"/profile"}>
          <div className="flex items-center h-full">
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
        </Link> */}
        <button onClick={openProfileModal}>
          <div className="flex h-full items-center">
            {!isLoading
              ? profile.full_name && (
                  <div>
                    <p className="block text-right sm:hidden">
                      {formatName(profile.full_name)}
                    </p>
                    <p className="hidden text-right sm:block">
                      {profile.full_name}
                    </p>
                  </div>
                )
              : loaderName}
            {}
          </div>
        </button>
        {/* <Button
          text={"Выйти"}
          textColor={"dark"}
          buttonType={"secondary"}
          size={"sm"}
          onClick={openModal}
        /> */}
      </div>

      {/* <ExitModal isOpen={isOpen} closeModal={closeModal} closeBtn={true} /> */}
      <ProfileModal isOpen={isProfileOpen} closeModal={closeProfileModal} />
    </>
  );
};
