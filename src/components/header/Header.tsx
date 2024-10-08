import { LogoUDV } from "src/shared/ui/logo/logo";
import { Link } from "react-router-dom";
// import { Menu } from "../menu/Menu";
// import { HEADERMENU } from "../menu/menu.data";
import Profile from "src/shared/image/Profile.svg";
import Logout from "src/shared/image/Logout.svg";
import { Menu } from "../menu/Menu";
import { HEADERMENU } from "../menu/menu.data";

const Header = () => {
    return (
        <>
            <div className="fixed z-10  bg-white mr-[50px] w-full">
                <header className="flex justify-between align-middle py-auto h-[120px] lg:w-[1024px] w-full mx-auto lg:px-0 px-[8px]">
                    <div className="my-auto pb-[12px]">
                        <LogoUDV width={"w-[160px]"} />
                    </div>
                    {/* <div className="my-auto pb-[12px]">
                        <Menu menu={HEADERMENU} orientation="horizontal" />
                    </div> */}
                    <div className="flex mt-[32px] mb-[48px] gap-[16px]">
                        <Link to={"/profile"}>
                            <div className="w-[40px] rounded-full bg-card duration-300 transform hover:shadow-sm">
                                <img
                                    src={Profile}
                                    alt="avatar"
                                    className="w-full p-[8px]"
                                />
                            </div>
                        </Link>
                        <Link to={"/exit"}>
                            <button className=" flex flex-row gap-[8px] py-[8px] px-[16px] bg-graphite bg-opacity-0 rounded-[8px] duration-300 transform hover:bg-opacity-[4%] focus:bg-opacity-[8%] my-[1px]">
                                <img src={Logout} className="m-auto" />
                                <p>Выйти</p>
                            </button>
                        </Link>
                    </div>
                </header>
                <div className="lg:w-[1024px] w-full mx-auto lg:px-0 px-[8px] pb-[32px]">
                    <Menu menu={HEADERMENU} orientation="horizontal" />
                </div>
            </div>
        </>
    );
};

export default Header;
