import { Menu } from "../menu/Menu";
import { ADMINMENU } from "../menu/menu.data";

interface Props {
  children: React.ReactNode;
}

export const AdminSidebar = (props: Props) => {
  return (
    <>
      <div className="flex flex-row gap-[32px]">
        <div>
          <Menu menu={ADMINMENU} orientation="vertical" />
        </div>
        {props.children}
      </div>
    </>
  );
};
