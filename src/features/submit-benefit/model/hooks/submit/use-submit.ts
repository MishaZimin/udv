import { getFromLocalStorage, saveToLocalStorage } from "src/shared/lib";
import { useBenefits } from "src/widgets/benefits-list/api/queryes/use-benefits";
import { useProfile } from "src/widgets/profile-info/api/queryes/use-profile";
import { validateFields } from "src/features/submit-benefit/model/utils/validate";
import { useCreateBenefitLogic } from "../create/use-create-benefit-logic";
import { useEditBenefitLogic } from "../edit/use-edit-benefit-logic";

export const useSubmitBenefit = () => {
  const { handleSubmit, errorCreate } = useCreateBenefitLogic();
  const { handleEdit, errorEdit, isPending } = useEditBenefitLogic();
  const { refetch: refetchBenefits } = useBenefits();
  const { refetch: refetchProfile } = useProfile();

  const handleClick = async () => {
    if (getFromLocalStorage("edit-benefit-id")) {
      await handleEdit();
    } else {
      await handleSubmit();
    }
    saveToLocalStorage("edit-benefit-id", null);
    refetchBenefits();
    refetchProfile();
  };

  const hasError = errorCreate || errorEdit;

  return {
    handleClick,
    hasError,
    isPending,
    isValid: validateFields(),
  };
};
