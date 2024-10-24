// import AdminSidebar from "src/shared/assets/svgs/AdminSidebar.svg";
// import Employs from "src/shared/assets/svgs/Employs.svg";
// import Feedback from "src/shared/assets/svgs/Feedback.svg";
// import Details from "src/shared/assets/svgs/Details.svg";
// import Cover from "src/shared/assets/svgs/Cover.svg";
// import Availability from "src/shared/assets/svgs/Availability.svg";
// import BenefitSettings from "src/shared/assets/svgs/BenefitSettings.svg";

export type NavbarProps = {
  icons: string | null;
  name: string;
  link: string;
};

export const CREATEBENEFIT: NavbarProps[] = [
  {
    icons: null,
    name: "1. Детали",
    link: "/create-benefit/details",
  },
  {
    icons: null,
    name: "2. Обложка",
    link: "/create-benefit/cover",
  },
  {
    icons: null,
    name: "3. Доступность",
    link: "/create-benefit/availability",
  },
];

export const HEADERNAVBAR: NavbarProps[] = [
  {
    icons: null,
    name: "Мои бенефиты",
    link: "/",
  },
  {
    icons: null,
    name: "Настройка бенефитов",
    link: "/admin/benefit",
  },
  {
    icons: null,
    name: "Опрос и фидбек",
    link: "/admin/apeals",
  },
  {
    icons: null,
    name: "Сотрудники",
    link: "/admin/employees",
  },
];
