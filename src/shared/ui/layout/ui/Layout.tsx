import { getFromLocalStorage } from "src/shared/lib";
import { Header } from "src/widgets/header";
type Props = {
  children: React.ReactNode;
};

export const Layout = (props: Props) => {
  const isAdmin = getFromLocalStorage("isAdministrator");
  return (
    <>
      <Header />
      <div
        className={`mx-auto h-full w-full ${isAdmin ? "pt-[166px]" : "pt-[96px]"} lg:w-[1024px]`}>
        <div className="mx-4 sm:mx-10 lg:mx-0">{props.children}</div>
      </div>
    </>
  );
};
