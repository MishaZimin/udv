import { Link } from "react-router-dom";
import { NewTag } from "../newTag/NewTag";
// import Taxi from "src/shared/image/Taxi.png";

export const Benefit = ({
  title,
  subtext,
  link,
  isNewTag,
  image,
}: {
  title: string;
  subtext: string;
  image?: string | null;
  isNewTag: boolean;
  link: string;
}) => {
  return (
    <>
      <Link
        to={link}
        className="animation mx-auto flex w-[320px] flex-col justify-between gap-[16px] rounded-[16px] bg-card py-[16px] pl-[16px] pr-[24px] hover:shadow-md"
      >
        {isNewTag && <NewTag />}
        <div className="flex flex-col gap-[8px]">
          <p className="text-left text-[16px] font-semibold leading-[20px]">
            {title}
          </p>
          <p className="text-left text-[12px] font-normal leading-[16px]">
            {subtext}
          </p>
        </div>

        <div className="flex h-[148px] w-[288px] items-center justify-center overflow-hidden rounded-[8px] bg-card">
          {
            image ? (
              <img
                className="h-[140px] w-[280px] object-contain"
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
