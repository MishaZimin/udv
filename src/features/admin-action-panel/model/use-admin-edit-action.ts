import { useBenefit } from "src/pages/benefit";
import { useNavigate } from "react-router-dom";
import {
  useCardStore,
  useImageStore,
  useCheckboxStore,
} from "src/shared/stores";
import { saveToLocalStorage } from "src/shared/lib";
import { IBenefitCard } from "src/entities/benefit";

export const useAdminAction = (benefit: IBenefitCard) => {
  const navigate = useNavigate();

  const setName = useCardStore((state) => state.setName);
  const setSubtext = useCardStore((state) => state.setSubtext);
  const setDescription = useCardStore((state) => state.setDescription);
  const setImageSrc = useImageStore((state) => state.setImageSrc);

  const { setCheckboxesFromResponse } = useCheckboxStore();
  const { setImageName } = useImageStore();

  const { benefitData, error, isLoading } = useBenefit(benefit.id);
  const handleButtonClick = () => {
    console.log(benefitData, !isLoading, !error);
    if (benefitData && !isLoading && !error) {
      setName(benefitData.name);
      setSubtext(benefitData.card_name);
      setDescription(benefitData.text);
      setCheckboxesFromResponse(benefitData.categories);
      setImageName("");
      setImageSrc(
        benefitData.cover_path
          ? "https://udv-benefits.ru/benefits/images/" + benefitData.cover_path
          : "",
      );

      saveToLocalStorage("edit-benefit-id", benefit.id);
      navigate("/create-benefit/details");
    }
  };

  return {
    handleButtonClick,
  };
};
