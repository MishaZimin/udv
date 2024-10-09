import clsx from "clsx";

interface IInput {
    inputType: "default" | "error";
    mail?: boolean;
    onChange: (value: string) => void;
    placeholder?: string;
    value: string;
}

const Input = ({ inputType, mail, onChange, placeholder, value }: IInput) => {
    const baseClasses =
        "w-full px-[12px] pt-[8px] pb-[10px] rounded-[8px] border border-opacity-[40%] focus:outline-none focus:border-opacity-[80%] transition duration-300 transform";
    const inputTypeClasses = {
        default: "border-graphite",
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
                        `${baseClasses} ${inputTypeClasses} ${mail}`
                    )}
                />
                {mail && (
                    <p className="absolute  top-[8px] right-0 px-[12px] align-middle text-graphite opacity-[40%] text-[16px]">
                        @udv.ru
                    </p>
                )}
            </div>
        </>
    );
};

export default Input;
