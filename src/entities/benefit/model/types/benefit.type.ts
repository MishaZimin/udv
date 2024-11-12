export type IBenefitCard = {
  id: number;
  name: string;
  card_name: string;
  cover_url: string;
};

export type IBenefit = {
  id: number;
  title: string;
  subtext: string;
  image: string;
  isNewTag: boolean;
  link?: string;
};

export type IBenefitInfo = {
  name: string;
  card_name: string;
  text: string;
  categories: number[];
};
