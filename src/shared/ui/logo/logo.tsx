import Logo from "src/shared/assets/svgs/Logo.svg";
import LogoMini from "src/shared/assets/svgs/LogoMini.svg";

type Props = {
  type?: "default" | "mini";
};

export const LogoUDV = ({ type = "default" }: Props) => {
  return (
    <>
      {type === "default" ? (
        <img src={Logo} className="w-[160px]" alt="udv logo" />
      ) : (
        <img src={LogoMini} className="w-[32px]" alt="udv logo mini" />
      )}
    </>
  );
};
