import clsx from "clsx";
import { Link } from "react-router-dom";

interface IButton {
    onClick?: () => void;
    link?: string;
    text: string;
    textColor: "dark" | "light" | "unActive";
    buttonType: "mint" | "white" | "red" | "unActive";
    fullWidth?: boolean;
}

const Button = ({
    onClick,
    link,
    text,
    textColor,
    buttonType,
    fullWidth,
}: IButton) => {
    const baseClasses = clsx(
        "py-[16px] px-[8px] rounded-[8px] text-center transition duration-300 transform",
        fullWidth && "w-full"
    );
    const textColorClass = {
        dark: "text-graphite",
        light: "text-white",
        unActive: "text-graphite opacity-[40%]",
    }[textColor];
    const buttonTypeClasses = {
        mint: "bg-mint hover:bg-minthover active:bg-mintactive",
        white: "bg-white bg-opacity-[20%] border-[1px] border-graphite hover:bg-graphite hover:bg-opacity-[4%] hover:border-opacity-[0%] active:bg-graphite active:bg-opacity-[8%] active:border-opacity-[0%]",
        red: "bg-rose hover:bg-rosehover active:bg-roseactive",
        unActive:
            "bg-opacity-[8%] bg-graphite  hover:bg-opacity-[16%] active:bg-opacity-[24%]",
    }[buttonType];

    const content = <p className={textColorClass}>{text}</p>;

    const combinedClassName = `${baseClasses} ${buttonTypeClasses}`;

    return link ? (
        <Link to={link} className={combinedClassName}>
            {content}
        </Link>
    ) : (
        <button onClick={onClick} className={combinedClassName}>
            {content}
        </button>
    );
};

export default Button;
