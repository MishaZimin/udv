import Logo from "src/shared/assets/svgs/Logo.svg";

export function LogoUDV({ width }: { width: string }) {
  return <img src={Logo} className={width} alt="udv logo" />;
}
