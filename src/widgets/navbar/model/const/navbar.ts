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
    name: "3. Настройки",
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
  // {
  //   icons: null,
  //   name: "Опрос и фидбек",
  //   link: "/admin/apeals",
  // },
  {
    icons: null,
    name: "Сотрудники",
    link: "/admin/employees",
  },
  {
    icons: null,
    name: "Заявки",
    link: "/admin/applications",
  },
];
