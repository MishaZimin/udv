import { Link } from "react-router-dom";
import { Button, Loader, useModal } from "src/shared/ui";
import { ExitModal } from "src/features/modals";
import { useProfile } from "src/widgets/profile-info/api/queryes/use-profile";
import { formatName } from "..";

export const HeaderButtons = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const { profile, error, isLoading } = useProfile();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <>
      <div className="flex gap-4 my-auto mr-4 sm:mr-10 lg:mr-0">
        <Link to={"/profile"}>
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
        </Link>
        <Button
          text={"Выйти"}
          textColor={"dark"}
          buttonType={"secondary"}
          size={"sm"}
          onClick={openModal}
        />
      </div>

      <ExitModal isOpen={isOpen} closeModal={closeModal} closeBtn={true} />
    </>
  );
};
