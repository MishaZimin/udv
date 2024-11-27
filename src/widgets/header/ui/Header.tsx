import { Navbar, HEADERNAVBAR } from "src/widgets/navbar";
import { getFromLocalStorage } from "src/shared/lib";
import { HeaderLogo, HeaderButtons } from "..";

export const Header = () => {
  return (
    <>
      <div className="fixed z-30 mr-[50px] w-full bg-white">
        <header className="py-auto z-20 mx-auto flex h-[96px] w-full justify-between align-middle lg:w-[1024px]">
          <HeaderLogo />
          <HeaderButtons />
        </header>
        {getFromLocalStorage("isAdministrator") && (
          <div className="z-20 mx-auto flex h-[70px] w-full items-start lg:w-[1024px]">
            <Navbar navbar={HEADERNAVBAR} orientation="horizontal" />
          </div>
        )}
      </div>
    </>
  );
};
