import clsx from "clsx";
import { Link } from "react-router-dom";
import { IMenuItem } from "./menu.data";

interface MenuItemProps {
  item: IMenuItem;
  isActive: boolean;
}

export const MenuItem = ({ item, isActive }: MenuItemProps) => {
  return (
    <div>
      <Link
        to={item.link}
        className={clsx(
          "animation flex cursor-pointer flex-row items-center gap-[8px] rounded-[8px] bg-graphite bg-opacity-[0%] py-[8px] pl-[8px] pr-[10px]",
          {
            "bg-opacity-[8%]": isActive,
          },
          {
            "hover:bg-opacity-[4%]": !isActive,
          },
        )}
      >
        {item.icons != null && (
          <img src={item.icons} className="h-[22px] w-[22px]" />
        )}
        <p className="text-[12px] text-graphite md:text-[16px]">{item.name}</p>
      </Link>
    </div>
  );
};
