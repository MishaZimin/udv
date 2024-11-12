import BoldIcon from "src/shared/assets/svgs/BoldBtn.svg";
import HeaderIcon from "src/shared/assets/svgs/HeaderBtn.svg";

import LinkIcon from "src/shared/assets/svgs/LinkBtn.svg";
import EyeIcon from "src/shared/assets/svgs/Eye.svg";
import OrderListIcon from "src/shared/assets/svgs/OrderListBtn.svg";
import UnorderedListIcon from "src/shared/assets/svgs/UnoderedListBtn.svg";

const icons = {
  Bold: BoldIcon,
  Header: HeaderIcon,
  Link: LinkIcon,
  Eye: EyeIcon,
  OrderList: OrderListIcon,
  UnorderedList: UnorderedListIcon,
};

const iconTooltips = {
  Bold: "Жирный",
  Header: "Заголовок",
  Link: "Ссылка",
  Eye: "Показать/скрыть предпросмотр",
  OrderList: "Маркированный список",
  UnorderedList: "Нумерованный список",
};

interface IconButtonProps {
  iconName: keyof typeof icons;
  onClick: () => void;
}

export const MarkdownActionBtn = ({ iconName, onClick }: IconButtonProps) => {
  return (
    <div className="group relative">
      <button
        className="animation h-6 w-6 rounded-[4px] p-[4px] hover:bg-graphite hover:bg-opacity-[4%]"
        onClick={onClick}>
        <img src={icons[iconName] || ""} alt={iconName} />
      </button>

      <p className="absolute bottom-[40px] left-1/2 z-50 hidden w-auto -translate-x-1/2 whitespace-nowrap rounded-[8px] bg-graphite p-2 text-[14px] leading-[20px] text-white group-hover:block">
        {iconTooltips[iconName]}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-[6px] border-transparent border-t-graphite"></span>
      </p>
    </div>
  );
};
