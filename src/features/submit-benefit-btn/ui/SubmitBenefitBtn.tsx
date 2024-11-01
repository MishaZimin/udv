import { validateFields } from "src/pages/settings/helpers/validate";
import { useCreateBenefitLogic } from "src/features/submit-benefit-btn/model/hooks/create/useCreateBenefitLogic";
import { Button } from "src/shared/ui";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "src/shared/lib/local-storage";
import { useEditBenefitLogic } from "../model/hooks/edit/useEditBenefitLogic";
import Loader from "src/shared/ui/loader/Loader";
import { useBenefits } from "src/widgets/benefits/model/hooks/useBenefits";

export const SubmitButton = () => {
  const { handleSubmit, errorCreate } = useCreateBenefitLogic();
  const { handleEdit, errorEdit, isPending } = useEditBenefitLogic();
  const { refetch } = useBenefits();

  if (errorCreate || errorEdit) {
    return <p>error</p>;
  }
  if (isPending) {
    return <Loader />;
  }

  const handleClick = async () => {
    if (getFromLocalStorage("edit-benefit-id")) {
      await handleEdit();
    } else {
      await handleSubmit();
    }

    refetch();

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
