import clsx from "clsx";
import CheckboxIcon from "src/shared/image/Checkbox.svg";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  text: string;
}

export function Checkbox({ checked, onChange, text }: CheckboxProps) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className="flex flex-row items-center gap-[8px]"
    >
      <div
        className={clsx(
          checked && "border-mint bg-mint",
          "animation flex h-[16px] w-[16px] items-center justify-center rounded-[4px] border hover:border-mint",
        )}
      >
        {checked && (
          <img className="h-[8px] w-[12px]" src={CheckboxIcon} alt="checked" />
        )}
      </div>

      <p className="text-[14px] text-black">{text}</p>
    </button>
  );
}
