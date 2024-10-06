import Logo from "src/shared/image/Logo.svg";

export function LogoUDV({ width }: { width: string }) {
    return <img src={Logo} className={width} alt="udv logo" />;
}
