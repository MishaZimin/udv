import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

type SidebarProps = {
    orientation: "vertical" | "horizontal";
    items: string[];
    onSelectItem: (item: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({
    orientation,
    items,
    onSelectItem,
}) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(items[0]);

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
        onSelectItem(item);
    };

    return (
        <div className="flex">
            <div
                className={clsx(
                    "flex bg-card p-[8px] gap-[8px] rounded-[16px]",
                    orientation === "vertical"
                        ? "w-[224px] flex-col"
                        : "h-[54px] w-auto flex-row"
                )}>
                {items.map((item, index) => (
                    <Link
                        to={`/benefit-editor/${item}`}
                        key={index}
                        onClick={() => handleItemClick(item)}
                        className={clsx(
                            "py-[8px] pl-[8px] pr-[10px] rounded-[8px] bg-text cursor-pointer",
                            selectedItem === item
                                ? "bg-opacity-[8%]"
                                : "bg-opacity-[0%] hover:bg-opacity-[4%] transition duration-300 transform"
                        )}>
                        <p className="text-left text-black">{item}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
