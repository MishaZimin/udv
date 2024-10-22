import { LogoUDV } from "src/shared/ui/logo/logo";
import { Link } from "react-router-dom";
import { Menu } from "../menu/ui/Menu";
import { HEADERMENU } from "../menu/data/menu.data";
import { useModal } from "../modal/hooks/useModal";
import Modal from "../modal/ui/Modal";
import Button from "src/shared/ui/button/Button";

const Header = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="fixed z-10 mr-[50px] w-full bg-white">
        <header className="py-auto mx-auto flex h-[102px] w-full justify-between px-[8px] align-middle lg:w-[1024px] lg:px-0">
          <div className="my-auto">
            <LogoUDV width={"w-[160px]"} />
          </div>
          <div className="mb-[32px] mt-[32px] flex gap-[16px]">
            <Link to={"/profile"}>
              <div className="flex h-full items-center">
                <p className="">Константин Сергеев</p>
              </div>
            </Link>
            <button
              onClick={openModal}
              className="animation rounded-[8px] border border-graphite border-opacity-20 px-4 py-2 hover:border-opacity-[0%] hover:bg-graphite hover:bg-opacity-[4%] active:bg-opacity-[8%]"
            >
              <p className="my-auto">Выйти</p>
            </button>
          </div>
        </header>
        <div className="mx-auto w-full px-[8px] pb-[32px] lg:w-[1024px] lg:px-0">
          <Menu menu={HEADERMENU} orientation="horizontal" />
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="relative z-10 w-[400px] rounded-[16px] bg-card p-6 px-[40px] py-[48px]">
          <div className="flex flex-col gap-[32px]">
            <p className="text-center text-[20px] font-semibold leading-[28px]">
              Вы уверены, <br />
              что хотите выйти?
            </p>
            <div className="flex flex-col gap-[8px]">
              <Button
                link={"/auth"}
                text={"Выйти"}
                textColor={"light"}
                buttonType={"red"}
              />
              <Button
                onClick={closeModal}
                text={"Отмена"}
                textColor={"dark"}
                buttonType={"secondary"}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Header;
