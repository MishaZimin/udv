import closeLine from "src/shared/assets/svgs/closeLine.svg";

type Props = {
  onClick: () => void;
};

export const ButtonCross = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-[8px] top-[8px] h-[22px] w-[22px]"
    >
      <img src={closeLine} />
    </button>
  );
};
