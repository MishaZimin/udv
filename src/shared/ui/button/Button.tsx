import { Link } from "react-router-dom";

interface IButton {
    onClick?: () => void;
    link?: string;
    text: string;
    textColor: "dark" | "light";
    buttonType: "mint" | "white" | "red";
}

const Button = ({ onClick, link, text, textColor, buttonType }: IButton) => {
    const baseClasses =
        "py-[16px] px-[8px] rounded-[8px] text-center transition duration-300 transform";
    const textColorClass = {
        dark: "text-graphite",
        light: "text-white",
    }[textColor];
    const buttonTypeClasses = {
        mint: "bg-mint hover:bg-minthover active:bg-mintactive",
        white: "bg-white bg-opacity-[20%] border-[1px] border-graphite hover:bg-graphite hover:bg-opacity-[4%] hover:border-opacity-[0%] active:bg-graphite active:bg-opacity-[8%] active:border-opacity-[0%]",
        red: "bg-rose hover:bg-rosehover active:bg-roseactive",
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
