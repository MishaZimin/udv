interface IInput {
    inputType: "default" | "focus" | "error";
    mail?: boolean;
}

const Input = ({ inputType }: IInput) => {
    const baseClasses = "px-[12px] pt-[8px] pb-[10px] rounded-[8px]";
    // const textColorClass = textColor === "dark" ? "text-text" : "text-white";

    const inputTypeClasses = {
        default: "",
        focus: "",
        error: "",
    }[inputType];
    return (
        <>
            <input className={`${baseClasses} ${inputTypeClasses}`} />
        </>
    );
};

export default Input;
