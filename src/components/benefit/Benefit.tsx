import { Link } from "react-router-dom";
import { NewTag } from "../newTag/NewTag";

// eslint-disable-next-line no-empty-pattern
export const Benefit = ({
    link,
    isNewTag,
}: {
    title: string;
    subtext: string;
    isNewTag: boolean;
    link: string;
}) => {
    return (
        <>
            <Link
                to={link}
                className="mx-auto flex flex-col w-[320px]  bg-card py-[16px] pl-[16px] pr-[24px] justify-between rounded-[16px] transition duration-300 transform hover:shadow-md  gap-[16px]">
                {isNewTag && <NewTag />}

                {/* <p className="font-semibold text-[16px] text-left">
                        {title}
                    </p>
                    <p className="font-normal  text-[12px] text-left">
                        {subtext}
                    </p> */}
                <div className="flex flex-col gap-[8px]">
                    <p className="font-semibold text-left text-[16px] leading-[20px]">
                        Развивающая среда
                    </p>
                    <p className="font-normal text-[12px] text-left leading-[16px]">
                        Постоянная льгота
                    </p>
                </div>

                <div className="h-[148px] w-[288px] bg-graphite rounded-[8px] opacity-[4%]">
                    <img className="" />
                </div>
            </Link>
        </>
    );
};
