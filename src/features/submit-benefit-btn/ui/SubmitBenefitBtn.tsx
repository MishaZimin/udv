import { validateFields } from "src/pages/settings/helpers/validate";
import { useCreateBenefitLogic } from "src/features/submit-benefit-btn/model/hooks/create/useCreateBenefitLogic";
import { Button } from "src/shared/ui";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "src/shared/lib/local-storage";
import { useEditBenefitLogic } from "../model/hooks/edit/useEditBenefitLogic";

export const SubmitButton = () => {
  const { handleSubmit, errorCreate } = useCreateBenefitLogic();
  const { handleEdit, errorEdit } = useEditBenefitLogic();

  if (errorCreate || errorEdit) {
    return <p>error</p>;
  }

  const handleClick = () => {
    if (getFromLocalStorage("edit-benefit-id")) {
      handleEdit();
    } else {
      handleSubmit();
    }
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
