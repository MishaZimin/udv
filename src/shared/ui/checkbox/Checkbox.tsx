import clsx from "clsx";
import CheckboxIcon from "src/shared/image/Checkbox.svg";

interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export function Checkbox({ checked, onChange }: CheckboxProps) {
    return (
        <button
            onClick={() => onChange(!checked)}
            className={clsx(
                checked && "bg-mint border-mint",
                "w-[16px] h-[16px] rounded-[4px] border hover:border-mint transition duration-300 transform"
            )}>
            {checked && (
                <img
                    className="m-auto w-[12px] h-[8px]"
                    src={CheckboxIcon}
                    alt="checked"
                />
            )}
        </button>
    );
}
