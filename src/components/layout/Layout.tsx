import Header from "../header/Header";
import { Menu } from "../menu/Menu";
import { HEADERMENU } from "../menu/menu.data";

interface Props {
    children: React.ReactNode;
}

const Layout = (props: Props) => {
    return (
        <>
            <div className=" mx-auto h-svh w-[1024px]">
                <Header />
                <div className="pt-[120px]"></div>
                <div className="pb-[32px]">
                    <Menu menu={HEADERMENU} orientation="horizontal" />
                </div>
                {props.children}
            </div>
        </>
    );
};

export default Layout;
