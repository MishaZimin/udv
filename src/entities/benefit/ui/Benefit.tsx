import { Link } from "react-router-dom";
import { NewTag } from "src/entities/new-tag";
import { IBenefitCard } from "src/widgets/benefits";

type Props = {
  link: string;
  isNewTag: boolean;
  benefit: IBenefitCard;
};

export const Benefit = ({ link, isNewTag, benefit }: Props) => {
  return (
    <>
      <Link
        to={`${link}?benefitId=${benefit.id}`}
        className="animation mx-auto flex w-full min-w-[320px] flex-col justify-between gap-[16px] rounded-[16px] bg-card px-[16px] py-[16px]"
      >
        {isNewTag && <NewTag />}
        <div className="flex flex-col gap-[8px]">
          <p className="h-[20px] text-left text-[16px] font-semibold leading-[20px]">
            {benefit.name}
          </p>
          <p className="h-[16px] text-left text-[12px] font-normal leading-[16px]">
            {benefit.card_name}
          </p>
        </div>
        <div
          className="relative flex w-full items-center justify-center overflow-hidden rounded-[8px] bg-graphite bg-opacity-[0%]"
          style={{ paddingBottom: "51.4%" }}
        >
          {benefit.cover_url ? (
            <img
              className="absolute left-0 top-0 h-full w-full object-contain"
              src={benefit.cover_url}
              alt="benefit img"
            />
          ) : (
            <div className="absolute left-0 top-0 h-full w-full object-contain"></div>
          )}
        </div>
      </Link>
    </>
  );
};
