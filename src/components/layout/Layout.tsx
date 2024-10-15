import Header from "src/components/header/Header";
import { Feedback } from "src/components/feedback/Feedback";
type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <div className="mx-auto h-full w-full pt-[172px] lg:w-[1024px]">
        {props.children}
        <Feedback />
      </div>
    </>
  );
};

export default Layout;
