import { Link } from "react-router-dom";
import {
  useCardStore,
  useImageStore,
  useCheckboxStore,
} from "src/pages/settings";
import CreateBenefitSvg from "src/shared/assets/svgs/CreateBenefit.svg";
import { saveToLocalStorage } from "src/shared/lib/local-storage";

export const CreateBenefit = () => {
  const setName = useCardStore((state) => state.setName);
  const setSubtext = useCardStore((state) => state.setSubtext);
  const setDescription = useCardStore((state) => state.setDescription);
  const { setCheckboxesFromResponse } = useCheckboxStore();

  const setImageSrc = useImageStore((state) => state.setImageSrc);

  return (
    <Link
      to={"/create-benefit/details"}
      onClick={() => {
        saveToLocalStorage("edit-benefit-id", null);

        setName("");
        setSubtext("");
        setDescription("");
        setCheckboxesFromResponse([]);
        setImageSrc("");
      }}
      className="animation min-h-[240px] w-full rounded-[16px] border border-dashed border-graphite border-opacity-[20%] bg-white"
    >
      <div className="flex flex-col justify-center h-full">
        <img className="mx-auto" src={CreateBenefitSvg} />
        <p className="text-center font-semibold leading-[20px]">
          Создать бенефит
        </p>
      </div>
    </Link>
  );
};
