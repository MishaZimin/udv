import { Link } from "react-router-dom";
import { NewTag } from "../newTag/NewTag";

// eslint-disable-next-line no-empty-pattern
export const Benefit = ({
    isNewTag,
}: {
    title: string;
    subtext: string;
    isNewTag: boolean;
}) => {
    return (
        <>
            <Link
                to={"/benefit"}
                className="mx-auto flex flex-col w-[320px] h-[240px] bg-card py-[16px] pl-[16px] pr-[16px] justify-between rounded-[16px] transition duration-300 transform hover:shadow-md gap-[8px]">
                {isNewTag && <NewTag />}

                <div>
                    {/* <p className="font-semibold text-[16px] text-left">
                        {title}
                    </p>
                    <p className="font-normal  text-[12px] text-left">
                        {subtext}
                    </p> */}
                    <p className="font-semibold text-[16px] text-left">
                        Развивающая среда
                    </p>
                    <p className="font-normal  text-[12px] text-left">
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
