import AdminSidebar from "src/shared/assets/svgs/AdminSidebar.svg";
import Employs from "src/shared/assets/svgs/Employs.svg";
import Feedback from "src/shared/assets/svgs/Feedback.svg";
import Details from "src/shared/assets/svgs/Details.svg";
import Cover from "src/shared/assets/svgs/Cover.svg";
import Availability from "src/shared/assets/svgs/Availability.svg";
import BenefitSettings from "src/shared/assets/svgs/BenefitSettings.svg";

export type MenuProps = {
  icons: string | null;
  name: string;
  link: string;
};

export const CREATEBENEFIT: MenuProps[] = [
  {
    icons: Details,
    name: "Детали",
    link: "/create-benefit/details",
  },
  {
    icons: Cover,
    name: "Обложка",
    link: "/create-benefit/cover",
  },
  {
    icons: Availability,
    name: "Доступность",
    link: "/create-benefit/availability",
  },
];

export const HEADERMENU: MenuProps[] = [
  {
    icons: AdminSidebar,
    name: "Мои бенефиты",
    link: "/",
  },
  {
    icons: BenefitSettings,
    name: "Настройка бенефитов",
    link: "/admin/benefit",
  },
  {
    icons: Feedback,
    name: "Обращения",
    link: "/admin/apeals",
  },
  {
    icons: Employs,
    name: "Сотрудники",
    link: "/admin/employees",
  },
];
