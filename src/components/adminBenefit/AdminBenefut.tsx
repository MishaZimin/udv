import { Link } from "react-router-dom";

import { Benefit } from "src/components/benefit/Benefit";

import Delete from "src/shared/image/Delete.svg";
import Pencil from "src/shared/image/Pencil.svg";

export function AdminBenefit() {
  return (
    <div className="relative">
      <Benefit
        title={"Такси"}
        subtext={"Поездки между офисами и в командировках"}
        isNewTag={false}
        link={"/benefit"}
      />
      <div className="absolute bottom-[8px] right-[8px] flex h-[30px] w-[60px] flex-row rounded-[8px] bg-graphite bg-opacity-[4%]">
        <Link
          to={"/create-benefit/details"}
          className="animation cursor-pointer rounded-[8px] p-[4px] hover:bg-graphite hover:bg-opacity-[8%]"
        >
          <img src={Pencil} />
        </Link>
        <Link
          to={""}
          className="animation cursor-pointer rounded-[8px] p-[4px] hover:bg-graphite hover:bg-opacity-[8%]"
        >
          <img src={Delete} />
        </Link>
      </div>
    </div>
  );
}
