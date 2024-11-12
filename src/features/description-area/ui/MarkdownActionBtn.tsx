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

interface IconButtonProps {
  iconName: keyof typeof icons;
  onClick: () => void;
}

export const MarkdownActionBtn = ({ iconName, onClick }: IconButtonProps) => {
  return (
    <button
      className="animation h-6 w-6 rounded-[4px] p-[4px] hover:bg-graphite hover:bg-opacity-[4%]"
      onClick={onClick}>
      <img src={icons[iconName] || ""} alt={iconName} />
    </button>
  );
};
