import { Feedback } from "src/features/feedback/ui/Feedback";
import { Header } from "src/widgets/header";
type Props = {
  children: React.ReactNode;
};

export const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <div className="mx-auto h-full w-full pt-[172px] lg:w-[1024px]">
        <div className="mx-4 sm:mx-10 lg:mx-0">{props.children}</div>
        <Feedback />
      </div>
    </>
  );
};
