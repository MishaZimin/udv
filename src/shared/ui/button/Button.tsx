import clsx from "clsx";
import { Link } from "react-router-dom";

type Props = {
  onClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
  link?: string;
  text: string;
  textColor: "dark" | "light" | "yellow" | "darkblue" | "unActive" | "red";
  buttonType:
    | "primary"
    | "secondary"
    | "red"
    | "yellow"
    | "darkblue"
    | "unActive"
    | "none";
  fullWidth?: boolean;
  size?: "sm";
  disabled?: boolean;
  postion?: "left" | "center" | "right";
};

export const Button = ({
  onClick,
  link,
  text,
  textColor,
  buttonType,
  size,
  disabled,
  postion,
}: Props) => {
  const baseClasses = clsx(
    `rounded-[8px] text-center"  animation leading-[22px] disabled:bg-opacity-[8%] disabled:bg-graphite disabled:cursor-default disabled:border-none  `,
  );
  const textColorClass = {
    dark: "text-graphite ",
    light: "text-white ",
    yellow: "text-yellow",

    darkblue: "text-darkblue",

    unActive: "text-graphite opacity-[40%]",
    red: " text-roseactive",
  }[textColor];
  const buttonTypeClasses = {
    primary: "bg-mint hover:bg-minthover active:bg-mintactive  ",
    secondary:
      "bg-none border-opacity-[20%] border border-graphite hover:bg-graphite hover:bg-opacity-[4%] hover:border-opacity-[0%] active:bg-graphite active:bg-opacity-[8%] active:border-opacity-[0%]",
    red: "bg-rose hover:bg-rosehover active:bg-roseactive",
    unActive: "bg-opacity-[8%] bg-graphite cursor-default ",
    yellow: "bg-yellow hover:bg-yellowhover active:yellowactive rounded-full",
    darkblue:
      "bg-darkblue hover:bg-darkbluehover active:darkblueactive rounded-full",
    none: "border-none bg-none",
  }[buttonType];

  const content = (
    <p
      className={` ${textColorClass} ${size ? "leading-[20px]" : ""} ${disabled ? "!text-graphite opacity-[40%]" : ""}`}>
      {text}
    </p>
  );

  const combinedClassName = `${baseClasses} ${buttonTypeClasses}  ${size ? " pt-2 pb-2 px-4 leading-[18px]" : "pt-2 px-4 pb-[10px]"} ${postion == "right" ? "!p-0" : ""}`;

  return link ? (
    <Link to={link} className={combinedClassName}>
      {content}
    </Link>
  ) : (
    <button disabled={disabled} onClick={onClick} className={combinedClassName}>
      {content}
    </button>
  );
};
