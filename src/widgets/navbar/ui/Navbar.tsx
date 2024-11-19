import { useLocation } from "react-router-dom";
import { NavbarItem } from "./NavbarItem";
import { NavbarProps } from "../model/const/navbar";

export type Props = {
  navbar: NavbarProps[];
  orientation: "horizontal" | "vertical";
};

export const Navbar = ({ navbar, orientation }: Props) => {
  const location = useLocation();

  return (
    <div
      className={`" animation mx-4 flex w-full gap-[8px] overflow-x-auto whitespace-nowrap bg-none sm:mx-10 lg:mx-0 lg:w-[1024px] ${orientation === "vertical" ? "flex-col" : "flex-row"}`}>
      {navbar.map((item: NavbarProps) => (
        <NavbarItem
          key={item.name}
          item={item}
          isActive={location.pathname === item.link}
        />
      ))}
    </div>
  );
};
