// src/pages/components/SubmitButton.tsx
import { validateFields } from "src/pages/createBenefit/modal/validate";
import Button from "src/shared/ui/button/Button";

export function SubmitButton() {
  return validateFields() ? (
    <Button
      link={"/"}
      text={"Создать бенефит"}
      textColor={"light"}
      buttonType={"mint"}
    />
  ) : (
    <Button
      text={"Создать бенефит"}
      textColor={"unActive"}
      buttonType={"unActive"}
    />
  );
}
