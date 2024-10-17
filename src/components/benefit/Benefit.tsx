import { Link } from "react-router-dom";
import { NewTag } from "../new-tag/NewTag";

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
        className="animation mx-auto flex w-[320px] flex-col justify-between gap-[16px] rounded-[16px] bg-card py-[16px] pl-[16px] pr-[24px] hover:shadow-md"
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

        <div className="flex h-[148px] w-[288px] items-center justify-center overflow-hidden rounded-[8px] bg-graphite bg-opacity-[0%]">
          {
            image ? (
              <img
                className="h-full w-full object-contain"
                src={image}
                alt="Taxi"
              />
            ) : null
            // <img
            //   className="h-[140px] w-[280px] object-contain"
            //   src={""}
            //   alt="Taxi"
            // />
          }
        </div>
      </Link>
    </>
  );
};
