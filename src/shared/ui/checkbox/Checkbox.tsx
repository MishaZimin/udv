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
            className="flex flex-row gap-[8px] items-center">
            <div
                className={clsx(
                    checked && "bg-mint border-mint",
                    "flex items-center justify-center w-[16px] h-[16px] rounded-[4px] border hover:border-mint transition duration-300 transform"
                )}>
                {checked && (
                    <img
                        className=" w-[12px] h-[8px]"
                        src={CheckboxIcon}
                        alt="checked"
                    />
                )}
            </div>

            <p className="text-black text-[14px]">{text}</p>
        </button>
    );
}
