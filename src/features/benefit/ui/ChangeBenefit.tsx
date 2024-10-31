import { useState, useEffect } from "react";
import Pencil from "src/shared/assets/svgs/Pencil.svg";
import {
  useCardStore,
  useCheckboxStore,
  useImageStore,
} from "src/pages/settings";
import { IBenefitCard } from "src/widgets/benefits";
import { useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "src/shared/lib/local-storage";
import { useBenefit } from "src/pages/benefit/model/hooks/useBenefit";
import Loader from "src/shared/ui/loader/Loader";

type Props = {
  benefit: IBenefitCard;
  isNewTag: boolean;
  link: string;
};

export const ChangeBenefit = ({ benefit }: Props) => {
  const navigate = useNavigate();

  const setName = useCardStore((state) => state.setName);
  const name = useCardStore((state) => state.name);

  const setSubtext = useCardStore((state) => state.setSubtext);
  const setDescription = useCardStore((state) => state.setDescription);
  const setImageSrc = useImageStore((state) => state.setImageSrc);
  const { setCheckboxesFromResponse } = useCheckboxStore();

  const [shouldFetch, setShouldFetch] = useState(false);

  const { benefitData, error, isLoading } = useBenefit(
    shouldFetch ? benefit.id : undefined,
    true,
  );

  useEffect(() => {
    if (benefitData && !isLoading && !error) {
      console.log("change benefit/benefitData: ", benefitData, name);
      setName(benefitData.name);
      setSubtext(benefitData.card_name);
      setImageSrc(
        benefitData.cover_path
          ? "89.169.137.145:8000/benefits/images/" + benefitData.cover_path
          : "",
      );
      setDescription(benefitData.text);
      setCheckboxesFromResponse(benefitData.categories);

      console.log("change benefit/setImageSrc: ", benefitData.cover_path);

      saveToLocalStorage("edit-benefit-id", benefit.id);
      navigate("/create-benefit/details");
    }
  }, [
    benefitData,
    isLoading,
    error,
    navigate,
    setName,
    setSubtext,
    setImageSrc,
    setDescription,
    setCheckboxesFromResponse,
    benefit.id,
    name,
  ]);

  const handleButtonClick = () => {
    setShouldFetch(true);
  };

  return (
    <>
      {isLoading && <Loader />}
      <button
        onClick={handleButtonClick}
        className="animation cursor-pointer rounded-[8px] p-[4px] hover:bg-graphite hover:bg-opacity-[8%]"
      >
        <img src={Pencil} />
      </button>
    </>
  );
};
