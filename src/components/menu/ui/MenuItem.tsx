import clsx from "clsx";
import { Link } from "react-router-dom";
import { MenuProps } from "../data/menu.data";

type Props = {
  item: MenuProps;
  isActive: boolean;
};

export const MenuItem = ({ item, isActive }: Props) => {
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
          <div className="h-[22px] w-[22px]">
            <img src={item.icons} className="w-full" />
          </div>
        )}
        <p className="text-[12px] text-graphite md:text-[16px]">{item.name}</p>
      </Link>
    </div>
  );
};
