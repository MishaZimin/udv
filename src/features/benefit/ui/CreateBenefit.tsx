import { Link } from "react-router-dom";
import { useCardStore, useImageStore } from "src/pages/settings";
import CreateBenefitSvg from "src/shared/assets/svgs/CreateBenefit.svg";

export const CreateBenefit = () => {
  const setName = useCardStore((state) => state.setName);
  const setSubtext = useCardStore((state) => state.setSubtext);
  const setDescription = useCardStore((state) => state.setDescription);
  const setImageSrc = useImageStore((state) => state.setImageSrc);

  return (
    <Link
      to={"/create-benefit/details"}
      onClick={() => {
        setName("");
        setSubtext("");
        setDescription("");
        setImageSrc("");
      }}
      className="animation min-h-[240px] w-full rounded-[16px] border border-dashed border-graphite border-opacity-[20%] bg-white"
    >
      <div className="flex h-full flex-col justify-center">
        <img className="mx-auto" src={CreateBenefitSvg} />
        <p className="text-center font-semibold leading-[20px]">
          Создать бенефит
        </p>
      </div>
    </Link>
  );
};
