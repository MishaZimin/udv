import clsx from "clsx";

type Props = {
  inputType: "default" | "error";
  mail?: boolean;
  onChange: (value: string) => void;
  placeholder?: string;
  value: string;
};

export const Input = ({
  inputType,
  mail,
  onChange,
  placeholder,
  value,
}: Props) => {
  const baseClasses =
    "bg-transparent w-full px-[12px] pt-[8px] pb-[10px] rounded-[8px] border h-10 focus:outline-none focus:border-opacity-[80%] animation";
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
        <input
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className={clsx(
            mail ? "pr-[88px]" : "",
            `${baseClasses} ${inputTypeClasses} ${mail}`,
          )}
        />
        {mail && (
          <p className="absolute right-0 top-[8px] px-[12px] align-middle text-[16px] text-graphite opacity-[60%]">
            @udv.ru
          </p>
        )}
      </div>
    </>
  );
};
