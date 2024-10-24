import clsx from "clsx";
import CheckboxIcon from "src/shared/assets/svgs/Checkbox.svg";

type Props = {
  text: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const Checkbox = ({ checked, onChange, text }: Props) => {
  return (
    <button
      onClick={() => onChange(!checked)}
      className="flex flex-row items-center gap-[8px]"
    >
      <div
        className={clsx(
          checked && "border-mint bg-mint",
          "animation flex h-[16px] w-[16px] items-center justify-center rounded-[4px] border border-graphite border-opacity-[20%] hover:border-mint",
        )}
      >
        {checked && (
          <img className="h-[8px] w-[12px]" src={CheckboxIcon} alt="checked" />
        )}
      </div>

      <p className="text-[14px] leading-[20px] text-black">{text}</p>
    </button>
  );
};
