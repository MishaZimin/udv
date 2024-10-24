import ImageFood from "src/shared/assets/svgs/ImageFood.svg";
import ImageTaxi from "src/shared/assets/svgs/ImageTaxi.svg";
import ImageDMS from "src/shared/assets/svgs/ImageDMS.svg";
import ImageBus from "src/shared/assets/svgs/ImageBus.svg";
import ImageSport from "src/shared/assets/svgs/ImageSport.svg";
import ImageDefault from "src/shared/assets/svgs/ImageDefault.svg";
import ImageMassage from "src/shared/assets/svgs/ImageMassage.svg";

export type IBenefit = {
  id: number;
  title: string;
  subtext: string;
  isNewTag: boolean;
  link?: string;
  image: string;
};

export const benefits: IBenefit[] = [
  {
    id: 1,
    title: "Страхование",
    subtext: "ДМС, детский, родственников, командировок",
    isNewTag: true,
    image: ImageDMS,
  },
  {
    id: 2,
    title: "Компенсация питания",
    subtext: "400 рублей в день",
    isNewTag: true,

    image: ImageFood,
  },
  {
    id: 3,
    title: "Такси",
    subtext: "Поездки между офисами и в командировках",
    isNewTag: true,

    image: ImageTaxi,
  },
  {
    id: 4,
    title: "Автобусы",
    subtext: "Трансфер по городу от дома до офиса",
    isNewTag: true,

    image: ImageBus,
  },
  {
    id: 5,
    title: "Спорт",
    subtext: "Компенсация по чекам до 2000 рублей",
    isNewTag: true,

    image: ImageSport,
  },
  {
    id: 6,
    title: "Массаж",
    subtext: "Бесплатный массаж для всех сотрудников",
    isNewTag: true,

    image: ImageMassage,
  },
  {
    id: 7,
    title: "Корпоративная йога",
    isNewTag: true,

    subtext: "",
    image: ImageDefault,
  },
  {
    id: 8,
    title: "Английский",
    subtext: "Компенсация занятий в Skyeng",
    isNewTag: true,

    image: ImageDefault,
  },
  {
    id: 9,
    title: "Апгрейд рабочего места",
    subtext: "Обновление кресла/клавиатуры/монитора",
    isNewTag: true,

    image: ImageDefault,
  },
  {
    id: 10,
    title: "Подписки за U-койны",
    subtext: "Яндекс Плюс, VK музыка, Okko, IVI",
    isNewTag: true,

    image: ImageDefault,
  },
  {
    id: 11,
    title: "Мерч",
    subtext: "Кофты, кружки, рюкзаки",
    isNewTag: true,

    image: ImageDefault,
  },
];
