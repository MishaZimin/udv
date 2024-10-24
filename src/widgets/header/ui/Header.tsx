import { Link } from "react-router-dom";
import { LogoUDV } from "src/shared/ui";
import { Navbar, HEADERNAVBAR } from "src/widgets/navbar";
import { useModal } from "src/shared/ui/modal";
import {
  ExitModal,
  // EditEmployeeModal,
  // InvitingEmployeeModal,
} from "src/features/modals";

export const Header = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="fixed z-10 mr-[50px] w-full bg-white">
        <header className="py-auto mx-auto flex h-[102px] w-full justify-between align-middle lg:w-[1024px]">
          <div className="my-auto ml-4 min-w-[32px] sm:ml-10 lg:ml-0">
            <div className="block sm:hidden">
              <LogoUDV type="mini" />
            </div>

            <div className="hidden sm:block">
              <LogoUDV type="default" />
            </div>
          </div>

          <div className="flex gap-4 mt-8 mb-8 mr-4 sm:mr-10 lg:mr-0">
            <Link to={"/profile"}>
              <div className="flex items-center h-full">
                <p className="block text-right sm:hidden">Константин С.</p>
                <p className="hidden text-right sm:block">Константин Сергеев</p>
              </div>
            </Link>
            <button
              onClick={openModal}
              className="animation rounded-[8px] border border-graphite border-opacity-20 px-4 py-2 hover:border-opacity-[0%] hover:bg-graphite hover:bg-opacity-[4%] active:bg-opacity-[8%]"
            >
              <p className="my-auto leading-[20px]">Выйти</p>
            </button>
          </div>
        </header>
        <div className="mx-auto flex h-[70px] w-full items-start lg:w-[1024px]">
          <Navbar navbar={HEADERNAVBAR} orientation="horizontal" />
        </div>
      </div>

      <ExitModal isOpen={isOpen} closeModal={closeModal} closeBtn={true} />
    </>
  );
};
