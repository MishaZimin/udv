import { validateFields } from "src/pages/settings/helpers/validate";
import { Button } from "src/shared/ui";

export const SubmitButton = () => {
  return validateFields() ? (
    <Button
      link={"/"}
      text={"Создать бенефит"}
      textColor={"light"}
      buttonType={"primary"}
    />
  ) : (
    <Button
      text={"Создать бенефит"}
      textColor={"unActive"}
      buttonType={"unActive"}
    />
  );
};
