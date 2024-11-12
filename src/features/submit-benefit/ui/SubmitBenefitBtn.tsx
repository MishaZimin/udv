// src/features/submit-benefit/ui/SubmitButton.tsx

import { Button } from "src/shared/ui";
import { Loader } from "src/shared/ui";
import { useSubmitBenefit } from "../model/hooks/submit/use-submit";

export const SubmitButton = () => {
  const { handleClick, hasError, isPending, isValid } = useSubmitBenefit();

  if (hasError) {
    return <p>error</p>;
  }

  if (isPending) {
    return <Loader />;
  }

  return (
    <Button
      onClick={isValid ? handleClick : undefined}
      text={"Создать бенефит"}
      textColor={isValid ? "light" : "unActive"}
      buttonType={isValid ? "primary" : "unActive"}
    />
  );
};
