import { Link } from "react-router-dom";
import { NewTag } from "src/entities/new-tag";

type Props = {
  title: string;
  subtext: string;
  image?: string | null;
  isNewTag: boolean;
  link: string;
};

export const Benefit = ({ title, subtext, link, isNewTag, image }: Props) => {
  return (
    <>
      <Link
        to={link}
        className="animation mx-auto flex w-full min-w-[320px] flex-col justify-between gap-[16px] rounded-[16px] bg-card px-[16px] py-[16px]"
      >
        {isNewTag && <NewTag />}
        <div className="flex flex-col gap-[8px]">
          <p className="h-[20px] text-left text-[16px] font-semibold leading-[20px]">
            {title}
          </p>
          <p className="h-[16px] text-left text-[12px] font-normal leading-[16px]">
            {subtext}
          </p>
        </div>
        <div className="flex w-full items-center justify-center overflow-hidden rounded-[8px] bg-graphite bg-opacity-[0%]">
          {image ? (
            <img
              className="min-h-[148px] w-full object-contain"
              src={image}
              alt=""
            />
          ) : (
            <div className="min-h-[148px]"></div>
          )}
        </div>
      </Link>
    </>
  );
};
