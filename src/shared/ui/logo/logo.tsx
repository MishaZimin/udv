import LogoText from "src/shared/assets/svgs/logo3.svg";
import Logo from "src/shared/assets/svgs/Logo.svg";
import LogoMini from "src/shared/assets/svgs/LogoMini.svg";

type Props = {
  type?: "default" | "mini" | "big";
};

export const LogoUDV = ({ type = "default" }: Props) => {
  return (
    <>
      {type === "big" ? (
        <img src={LogoText} className="w-[360px]" alt="udv logo" />
      ) : type === "mini" ? (
        <img src={LogoMini} className="w-[32px]" alt="udv logo mini" />
      ) : (
        <img src={Logo} className="w-[160px]" alt="udv logo" />
      )}
    </>
  );
};
