import { LogoUDV } from "src/shared/ui";

export const HeaderLogo = () => {
  return (
    <div className="my-auto ml-4 min-w-[32px] sm:ml-10 lg:ml-0">
      <div className="block sm:hidden">
        <LogoUDV type="mini" />
      </div>
      <div className="hidden sm:block">
        <LogoUDV type="big" />
      </div>
    </div>
  );
};
