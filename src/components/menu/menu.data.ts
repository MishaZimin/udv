import AdminSidebar from "src/shared/image/AdminSidebar.svg";
import Admin from "src/shared/image/Admin.svg";
import Profile from "src/shared/image/Profile.svg";
import Employs from "src/shared/image/Employs.svg";
import Categories from "src/shared/image/Categories.svg";
import Feedback from "src/shared/image/Feedback.svg";
import Details from "src/shared/image/Details.svg";
import Cover from "src/shared/image/Cover.svg";
import Availability from "src/shared/image/Availability.svg";

export interface IMenuItem {
    icons: string | null;
    name: string;
    link: string;
}
export const ADMINMENU: IMenuItem[] = [
    {
        icons: AdminSidebar,
        name: "Бенефиты",
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
    {
        icons: Categories,
        name: "Категории",
        link: "/admin/categories",
    },
];

export const CREATEBENEFIT: IMenuItem[] = [
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

export const HEADERMENU: IMenuItem[] = [
    {
        icons: AdminSidebar,
        name: "Мои бенефиты",
        link: "/",
    },
    {
        icons: Profile,
        name: "Профиль",
        link: "/profile",
    },
    {
        icons: Admin,
        name: "Админ-панель",
        link: "/admin/benefit",
    },
];

export const BENEFIT: IMenuItem[] = [
    {
        icons: null,
        name: "Описание",
        link: "",
    },
    {
        icons: null,
        name: "Правила",
        link: "",
    },
    {
        icons: null,
        name: "Как подключить",
        link: "",
    },
    {
        icons: null,
        name: "Особенности",
        link: "",
    },
];

export const EXPUDV: IMenuItem[] = [
    {
        icons: null,
        name: "До 3 месяцев",
        link: "",
    },
    {
        icons: null,
        name: "до 1 года",
        link: "",
    },
    {
        icons: null,
        name: "до 3 лет",
        link: "",
    },
    {
        icons: null,
        name: "больше 3 лет",
        link: "",
    },
];
