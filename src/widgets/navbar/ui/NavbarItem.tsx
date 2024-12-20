import { Link } from "react-router-dom";
import { NavbarProps } from "../model/const/navbar";

type Props = {
  item: NavbarProps;
  isActive: boolean;
  onClick?: () => void;
};

export const NavbarItem = ({ item, isActive, onClick }: Props) => {
  return (
    <>
      {onClick ? (
        <button
          onClick={onClick}
          className={`animation flex cursor-pointer flex-row items-center gap-[8px] rounded-[8px] bg-graphite bg-opacity-[0%] px-[12px] py-[8px] ${isActive ? "bg-opacity-[8%]" : "hover:bg-opacity-[4%]"} `}>
          <p className="text-[16px] text-graphite md:text-[16px]">
            {item.name}
          </p>
        </button>
      ) : (
        <Link
          to={item.link}
          className={`animation flex cursor-pointer flex-row items-center gap-[8px] rounded-[8px] bg-graphite bg-opacity-[0%] px-[12px] pb-[10px] pt-[8px] ${isActive ? "bg-opacity-[8%]" : "hover:bg-opacity-[4%]"} `}>
          {item.icons != null && (
            <div className="h-[22px] w-[22px]">
              <img src={item.icons} className="w-full" />
            </div>
          )}
          <p className="text-[16px] text-graphite md:text-[16px]">
            {item.name}
          </p>
        </Link>
      )}
    </>
  );
};
