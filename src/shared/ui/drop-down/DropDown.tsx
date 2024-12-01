import { useState } from "react";
import ArrowDown from "src/shared/assets/svgs/arrowDown.svg";

type Props = {
  inputType: "default" | "error";
  options: string[];
  onChange: (value: string) => void;
  value: string;
  disabled?: boolean;
  errorText?: string;
  label?: string;
};

export const DropDown = ({
  inputType,
  options,
  onChange,
  value,
  disabled,
  errorText,
  label,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const baseClasses =
    "w-full px-[12px] pt-[8px] pb-[10px] rounded-[8px] font-base border h-10 focus:outline-none animation";
  const inputTypeClasses = {
    default: "border-graphite border-opacity-[20%]",
    error: "border-rose border-opacity-[100%] focus:border-graphite",
  }[inputType];

  const handleChange = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative">
        {label && (
          <p className="mb-1 text-[14px] leading-[20px] opacity-[60%]">
            {label}
          </p>
        )}
        <div
          onClick={() => !disabled && setIsOpen((prev) => !prev)}
          className={`relative ${baseClasses} ${inputTypeClasses} ${
            disabled
              ? "bg-graphite bg-opacity-[8%] text-graphite text-opacity-[20%]"
              : "bg-transparent"
          }`}>
          <p className={`${value ? "" : "text-opacity-40"}`}>
            {value || "Выберите из списка"}
          </p>
          <img
            className={`absolute right-[12px] top-1/2 h-[24px] w-[24px] -translate-y-1/2 transition-transform duration-300 ${
              isOpen ? "" : "-rotate-90"
            }`}
            src={ArrowDown}
            alt=""
          />
        </div>

        {isOpen && !disabled && (
          <div
            className="absolute z-10 mt-[4px] flex w-full flex-col gap-2 rounded-[16px] bg-white p-2 leading-[20px] text-graphite"
            style={{ overflowY: "auto" }}>
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleChange(option)}
                className="h-[40px] cursor-pointer rounded-[6px] px-[12px] py-[8px] hover:bg-graphite hover:bg-opacity-[4%]">
                <p>{option}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {inputType === "error" && (
        <p className="text-[12px] leading-[16px] text-rose">{errorText}</p>
      )}
    </>
  );
};
