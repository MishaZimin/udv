// src/features/submit-benefit/ui/SubmitButton.tsx

import { Button } from "src/shared/ui";
import { Loader } from "src/shared/ui";
import { useSubmitBenefit } from "../model/hooks/use-submit";

export const SubmitButton = () => {
  const { handleClick, error, isPending, isValid } = useSubmitBenefit();

  if (error) {
    return <p>error</p>;
  }

  return (
    <>
      {isPending && <Loader />}
      <Button
        onClick={isValid ? handleClick : undefined}
        text={"Создать бенефит"}
        textColor={"light"}
        buttonType={"primary"}
        disabled={isPending || !isValid}
      />
    </>
  );
};
