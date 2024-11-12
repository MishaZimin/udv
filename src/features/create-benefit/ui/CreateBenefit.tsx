import { Link } from "react-router-dom";
import CreateBenefitSvg from "src/shared/assets/svgs/CreateBenefit.svg";
import { resetCreateBenefit } from "..";

export const CreateBenefit = () => {
  return (
    <Link
      to={"/create-benefit/details"}
      onClick={resetCreateBenefit}
      className="animation min-h-[240px] w-full rounded-[16px] border border-dashed border-graphite border-opacity-[20%] bg-white">
      <div className="flex h-full flex-col justify-center">
        <img className="mx-auto" src={CreateBenefitSvg} />
        <p className="text-center font-semibold leading-[20px]">
          Создать бенефит
        </p>
      </div>
    </Link>
  );
};
