import { getFromLocalStorage, saveToLocalStorage } from "src/shared/lib";
import { validateFields } from "src/features/submit-benefit/model/utils/validate";
import { useCreateBenefitLogic } from "./use-create-benefit-logic";
import { useEditBenefitLogic } from "./use-edit-benefit-logic";
import { useNavigate } from "react-router-dom";

export const useSubmitBenefit = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    error: errorCreate,
    isPending: isPendingCreate,
  } = useCreateBenefitLogic();
  const {
    handleEdit,
    error: errorEdit,
    isPending: isPendingEdit,
  } = useEditBenefitLogic();

  const handleClick = async () => {
    if (getFromLocalStorage("edit-benefit-id")) {
      await handleEdit();
    } else {
      await handleSubmit();
    }
    navigate("/admin/benefit");
    saveToLocalStorage("edit-benefit-id", null);
  };
  const isPending = getFromLocalStorage("edit-benefit-id")
    ? isPendingEdit
    : isPendingCreate;

  return {
    handleClick,
    error: errorCreate || errorEdit,
    isPending,
    isValid: validateFields(),
  };
};
