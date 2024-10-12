import Header from "src/components/header/Header";
import { Feedback } from "src/components/feedback/Feedback";
interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <div className="mx-auto h-full w-full pt-[190px] lg:w-[1024px]">
        {props.children}
        <Feedback />
      </div>
    </>
  );
};

export default Layout;
