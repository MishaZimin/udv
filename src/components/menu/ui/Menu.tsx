import clsx from "clsx";
import { MenuItem } from "./MenuItem";
import { useLocation } from "react-router-dom";
import { MenuProps } from "../data/menu.data";

type Props = {
  menu: MenuProps[];
  orientation: "horizontal" | "vertical";
};

export const Menu = ({ menu, orientation }: Props) => {
  const location = useLocation();
  // const path = `/${location.pathname.split("/")[1]}`;

  return (
    <div className="flex">
      <div
        className={clsx(
          "flex gap-[16px] rounded-[16px] bg-white p-[0px]",
          orientation === "vertical"
            ? "w-[224px] flex-col"
            : "h-[38px] w-auto flex-row",
        )}
      >
        {menu.map((item: MenuProps) => (
          <MenuItem
            key={item.name}
            item={item}
            isActive={location.pathname === item.link}
          />
        ))}
      </div>
    </div>
  );
};
