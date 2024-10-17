import ImageFood from "src/shared/assets/svgs/ImageFood.svg";
import ImageTaxi from "src/shared/assets/svgs/ImageTaxi.svg";
import ImageDMS from "src/shared/assets/svgs/ImageDMS.svg";
import ImageBus from "src/shared/assets/svgs/ImageBus.svg";
import ImageSport from "src/shared/assets/svgs/ImageSport.svg";
import ImageDefault from "src/shared/assets/svgs/ImageDefault.svg";

export type IBenefit = {
  id: number;
  title: string;
  subtext: string;
  image: string;
};

export const benefits: IBenefit[] = [
  {
    id: 1,
    title: "Страхование",
    subtext: "ДМС, детский, родственников, командировок",
    image: ImageDMS,
  },
  {
    id: 2,
    title: "Компенсация питания",
    subtext: "400 рублей в день",
    image: ImageFood,
  },
  {
    id: 3,
    title: "Такси",
    subtext: "Поездки между офисами и в командировках",
    image: ImageTaxi,
  },
  {
    id: 4,
    title: "Автобусы",
    subtext: "Трансфер по городу от дома до офиса",
    image: ImageBus,
  },
  {
    id: 5,
    title: "Спорт",
    subtext: "Компенсация по чекам до 2000 рублей",
    image: ImageSport,
  },
  {
    id: 6,
    title: "Массаж",
    subtext: "ДМС, детский, родственников, командировок",
    image: ImageDefault,
  },
  {
    id: 7,
    title: "Корпоративная йога",
    subtext: "",
    image: ImageDefault,
  },
  {
    id: 8,
    title: "Английский",
    subtext: "Компенсация занятий в Skyeng",
    image: ImageDefault,
  },
  {
    id: 9,
    title: "Апгрейд рабочего места",
    subtext: "Обновление кресла/клавиатуры/монитора",
    image: ImageDefault,
  },
  {
    id: 10,
    title: "Подписки за U-койны",
    subtext: "Яндекс Плюс, VK музыка, Okko, IVI",
    image: ImageDefault,
  },
  {
    id: 11,
    title: "Мерч",
    subtext: "Кофты, кружки, рюкзаки",
    image: ImageDefault,
  },
];
