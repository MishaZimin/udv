type Props = {
  inputType: "default" | "error";
  mail?: boolean;
  onChange: (value: string) => void;
  placeholder?: string;
  value: string;
  disabled?: boolean;
  errorText?: string;
  label?: string;
};

export const Input = ({
  inputType,
  mail,
  onChange,
  placeholder,
  value,
  disabled,
  errorText,
  label,
}: Props) => {
  const baseClasses =
    " w-full px-[12px] pt-[8px] pb-[10px] rounded-[8px] font-base border h-10 focus:outline-none animation";
  const inputTypeClasses = {
    default: "border-graphite border-opacity-[20%]",
    error: "border-rose border-opacity-[100%] focus:border-graphite",
  }[inputType];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <>
      <div className="relative">
        {label && (
          <p className="mb-1 text-[14px] leading-[20px] opacity-[60%]">
            {label}
          </p>
        )}
        <input
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          disabled={disabled}
          className={`${mail ? "pr-[88px]" : ""} ${baseClasses} ${inputTypeClasses} ${disabled ? "bg-graphite bg-opacity-[8%] text-graphite text-opacity-[20%]" : "bg-transparent"}`}
        />
        {mail && (
          <p className="absolute right-0 top-[8px] px-[12px] align-middle text-[16px] text-graphite opacity-[60%]">
            @udv.ru
          </p>
        )}
      </div>
      {inputType === "error" && (
        <p className="text-[12px] leading-[16px] text-rose">{errorText}</p>
      )}
    </>
  );
};
