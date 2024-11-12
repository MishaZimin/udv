import { Link } from "react-router-dom";
import { Badge } from "src/shared/ui/badge/Badge";
import { BenefitText, BenefitImage, IBenefitCard } from "..";
import { ReactNode } from "react";

type Props = {
  link: string;
  isNewTag: boolean;
  benefit: IBenefitCard;
  actionSlot?: ReactNode;
};

export const Benefit = ({ link, isNewTag, benefit, actionSlot }: Props) => {
  return (
    <div className="relative">
      <Link
        to={`${link}?benefitId=${benefit.id}`}
        className="animation relative mx-auto flex w-full min-w-[320px] flex-col justify-between gap-[16px] rounded-[16px] bg-card px-[16px] py-[16px]">
        {isNewTag && <Badge text={"Новое"} />}
        <BenefitText name={benefit.name} card_name={benefit.card_name} />
        <BenefitImage cover_url={benefit.cover_url} />
      </Link>

      {actionSlot && (
        <div className="absolute bottom-[8px] right-[8px]">{actionSlot}</div>
      )}
    </div>
  );
};
