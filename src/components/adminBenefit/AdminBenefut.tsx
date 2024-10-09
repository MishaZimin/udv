import { Link } from "react-router-dom";

import { Benefit } from "src/components/benefit/Benefit";

import Delete from "src/shared/image/Delete.svg";
import Pencil from "src/shared/image/Pencil.svg";

export function AdminBenefit() {
    return (
        <div className="relative">
            <Benefit
                title={""}
                subtext={""}
                isNewTag={false}
                link={"/benefit"}
            />
            <div className="absolute flex flex-row bottom-[8px] right-[8px] h-[30px] w-[60px] bg-graphite bg-opacity-[4%] rounded-[8px]">
                <Link
                    to={"/create-benefit/details"}
                    className="p-[4px] cursor-pointer hover:bg-graphite hover:bg-opacity-[8%] rounded-[8px] transition duration-300 transform">
                    <img src={Pencil} />
                </Link>
                <Link
                    to={""}
                    className="p-[4px] cursor-pointer hover:bg-graphite hover:bg-opacity-[8%] rounded-[8px] transition duration-300 transform">
                    <img src={Delete} />
                </Link>
            </div>
        </div>
    );
}
