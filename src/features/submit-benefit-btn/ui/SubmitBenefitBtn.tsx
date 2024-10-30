import { useCardStore, useCheckboxStore } from "src/pages/settings";
import { validateFields } from "src/pages/settings/helpers/validate";
import { useCreateBenefitLogic } from "src/features/submit-benefit-btn/model/hooks/create/useCreateBenefitLogic";
import { useEditBenefit } from "src/features/submit-benefit-btn/model/hooks/edit/useEditBenefit";
import { Button } from "src/shared/ui";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "src/shared/lib/local-storage";
import { useEditBenefitLogic } from "../model/hooks/edit/useEditBenefitLogic";
import Loader from "src/shared/ui/loader/Loader";

export const SubmitButton = () => {
  const { handleSubmit, errorCreate } = useCreateBenefitLogic();
  const { handleEdit, errorEdit } = useEditBenefitLogic();

  if (errorCreate || errorEdit) {
    return <p>error</p>;
  }

  const handleClick = () => {
    getFromLocalStorage("edit-benefit-id") ? handleEdit() : handleSubmit();
    saveToLocalStorage("edit-benefit-id", null);
  };

  return validateFields() ? (
    <>
      <Button
        onClick={handleClick}
        text={"Создать бенефит"}
        textColor={"light"}
        buttonType={"primary"}
      />
    </>
  ) : (
    <Button
      text={"Создать бенефит"}
      textColor={"unActive"}
      buttonType={"unActive"}
    />
  );
};
