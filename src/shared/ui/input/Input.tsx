import clsx from "clsx";

interface IInput {
    inputType: "default" | "error";
    mail?: boolean;
}

const Input = ({ inputType, mail }: IInput) => {
    const baseClasses =
        "w-full px-[12px] pt-[8px] pb-[10px] rounded-[8px] border border-opacity-[40%] focus:outline-none focus:border-opacity-[80%] transition duration-300 transform";
    const inputTypeClasses = {
        default: "border-graphite",
        error: "border-rose border-opacity-[100%] focus:border-graphite",
    }[inputType];

    return (
        <>
            <div className="relative h-[40px]">
                <input
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
