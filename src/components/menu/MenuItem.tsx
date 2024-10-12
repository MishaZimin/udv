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
                    "flex flex-row items-center gap-[8px] py-[8px] pl-[8px] pr-[10px] rounded-[8px] bg-graphite cursor-pointer bg-opacity-[0%]  transition duration-300 transform",
                    {
                        "bg-opacity-[8%] ": isActive,
                    },
                    {
                        "hover:bg-opacity-[4%] ": !isActive,
                    }
                )}>
                {item.icons != null && (
                    <img src={item.icons} className="w-[22px] h-[22px]" />
                )}
                <p className="text-graphite text-[12px] md:text-[16px]">
                    {item.name}
                </p>
            </Link>
        </div>
    );
};
