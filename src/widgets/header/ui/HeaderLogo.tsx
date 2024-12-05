import { LogoUDV } from "src/shared/ui";
import { useNavigate } from "react-router-dom";

export const HeaderLogo = () => {
  const navigate = useNavigate();
  return (
    <button
      className="my-auto ml-4 min-w-[32px] sm:ml-10 lg:ml-0"
      onClick={() => {
        navigate("/");
      }}>
      <div className="block sm:hidden">
        <LogoUDV type="mini" />
      </div>
      <div className="hidden sm:block">
        <LogoUDV type="big" />
      </div>
    </button>
  );
};
