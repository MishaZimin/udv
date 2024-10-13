import { LogoUDV } from "src/shared/ui/logo/logo";
import { Link } from "react-router-dom";

import Logout from "src/shared/image/Logout.svg";
import { Menu } from "../menu/Menu";
import { HEADERMENU } from "../menu/menu.data";
import { useModal } from "../modal/useModal";
import Modal from "../modal/Modal";
import Button from "src/shared/ui/button/Button";

const Header = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="fixed z-10 mr-[50px] w-full bg-white">
        <header className="py-auto mx-auto flex h-[120px] w-full justify-between px-[8px] align-middle lg:w-[1024px] lg:px-0">
          <div className="my-auto pb-[12px]">
            <LogoUDV width={"w-[160px]"} />
          </div>
          <div className="mb-[48px] mt-[32px] flex gap-[16px]">
            <Link to={"/profile"}>
              <div className="">
                <p className="mt-[9px]">Имя Фамилия</p>
              </div>
            </Link>
            {/* <Link to={"/exit"}> */}
            <button
              onClick={openModal}
              className="my-[1px] flex transform flex-row gap-[8px] rounded-[8px] bg-graphite bg-opacity-0 px-[16px] py-[8px] duration-300 hover:bg-opacity-[4%] focus:bg-opacity-[8%]"
            >
              <img src={Logout} className="m-auto" />
              <p>Выйти</p>
            </button>
            {/* </Link> */}
          </div>
        </header>
        <div className="mx-auto w-full px-[8px] pb-[32px] lg:w-[1024px] lg:px-0">
          <Menu menu={HEADERMENU} orientation="horizontal" />
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
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
              buttonType={"white"}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Header;
