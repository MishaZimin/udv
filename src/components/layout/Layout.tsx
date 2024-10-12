import Header from "../header/Header";
import { Feedback } from "../feedback/Feedback";
interface Props {
    children: React.ReactNode;
}

const Layout = (props: Props) => {
    return (
        <>
            <Header />
            {/* <div className="w-full "> */}
            <div className="  h-full lg:w-[1024px] w-full  mx-auto ">
                <div className="pt-[190px]"></div>
                {props.children}
                <div className="fixed bottom-[84px] right-[-16px] left-0">
                    <div className="mx-auto max-w-[1024px] relative">
                        <div className="absolute right-[8px]">
                            <Feedback />
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default Layout;
