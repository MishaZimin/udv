import DeleteIcon from "src/shared/assets/svgs/Delete.svg";
import EditIcon from "src/shared/assets/svgs/Pencil.svg";

const icons = {
  Delete: DeleteIcon,
  Edit: EditIcon,
};

interface IconButtonProps {
  iconName: keyof typeof icons;
  onClick: () => void;
}

export const ButtonIcon = ({ iconName, onClick }: IconButtonProps) => {
  const iconSrc = icons[iconName];

  if (!iconSrc) {
    console.warn(`"${iconName}" не найдена.`);
    return null;
  }

  return (
    <button
      onClick={onClick}
      className="animation min-w-[30px] cursor-pointer rounded-[8px] p-[4px] hover:bg-graphite hover:bg-opacity-[8%]">
      <img src={iconSrc} alt={iconName} />
    </button>
  );
};
