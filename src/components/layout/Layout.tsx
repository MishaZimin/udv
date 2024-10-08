import Header from "../header/Header";
import { Menu } from "../menu/Menu";
import { HEADERMENU } from "../menu/menu.data";
import { Feedback } from "../feedback/Feedback";
interface Props {
    children: React.ReactNode;
}

const Layout = (props: Props) => {
    return (
        <>
            <Header />
            <div className=" mx-auto h-svh lg:w-[1024px] w-full ">
                <div className="pt-[120px]"></div>
                <div className="pb-[32px]">
                    <Menu menu={HEADERMENU} orientation="horizontal" />
                </div>
                {props.children}
                <div className="fixed bottom-[112px] right-[-16px] left-0">
                    <div className="mx-auto max-w-[1024px] relative">
                        <div className="absolute right-[8px]">
                            <Feedback />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
