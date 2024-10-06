import clsx from "clsx";
import { MenuItem } from "./MenuItem";
import { useLocation } from "react-router-dom";
import { IMenuItem } from "./menu.data";

interface IMenu {
    menu: IMenuItem[];
    orientation: "horizontal" | "vertical";
}

export const Menu = ({ menu, orientation }: IMenu) => {
    const location = useLocation();
    const path = `/${location.pathname.split("/")[1]}`;

    return (
        <div className="flex">
            <div
                className={clsx(
                    "flex  bg-card p-[8px] gap-[8px] rounded-[16px]",
                    orientation === "vertical"
                        ? "flex-col w-[224px] "
                        : "flex-row h-[54px] w-auto "
                )}>
                {menu.map((item: IMenuItem) => (
                    <MenuItem
                        key={item.name}
                        item={item}
                        isActive={
                            location.pathname === item.link ||
                            (path == "/admin" &&
                                orientation == "horizontal" &&
                                item.link.includes(path))
                        }
                    />
                ))}
            </div>
        </div>
    );
};
