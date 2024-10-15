import clsx from "clsx";
import { Link } from "react-router-dom";

type Props = {
  onClick?: () => void;
  link?: string;
  text: string;
  textColor: "dark" | "light" | "unActive";
  buttonType: "primary" | "secondary" | "red" | "unActive";
  fullWidth?: boolean;
};

const Button = ({
  onClick,
  link,
  text,
  textColor,
  buttonType,
  fullWidth,
}: Props) => {
  const baseClasses = clsx(
    "py-[16px] px-[8px] rounded-[8px] text-center animation font-semibold ",
    fullWidth && "w-full",
  );
  const textColorClass = {
    dark: "text-graphite",
    light: "text-white",
    unActive: "text-graphite opacity-[40%]",
  }[textColor];
  const buttonTypeClasses = {
    primary: "bg-mint hover:bg-minthover active:bg-mintactive",
    secondary:
      "bg-none border-opacity-[20%] border border-graphite hover:bg-graphite hover:bg-opacity-[4%] hover:border-opacity-[0%] active:bg-graphite active:bg-opacity-[8%] active:border-opacity-[0%]",
    red: "bg-rose hover:bg-rosehover active:bg-roseactive",
    unActive: "bg-opacity-[8%] bg-graphite cursor-default ",
  }[buttonType];

  const content = <p className={`leading-[20px] ${textColorClass}`}>{text}</p>;

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
