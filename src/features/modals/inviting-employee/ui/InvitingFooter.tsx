import { Button } from "src/shared/ui";
import { useState } from "react";

type Props = {
  validationError: string | null;
  handleSubmit: () => void;
  closeModal: () => void;
  isLoading: boolean;
};

export const InvitingFooter = ({
  validationError,
  handleSubmit,
  closeModal,
  isLoading,
}: Props) => {
  const [, setValidationError] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-2">
      {validationError && <p className="text-red-500">{validationError}</p>}

      <div className="flex flex-row gap-[8px]">
        <Button
          text="Пригласить"
          textColor="light"
          buttonType="primary"
          onClick={handleSubmit}
          size="sm"
          disabled={isLoading}
        />
        <Button
          onClick={() => {
            setValidationError(null);
            closeModal();
          }}
          text="Отмена"
          textColor="dark"
          buttonType="secondary"
          size="sm"
          disabled={isLoading}
        />
      </div>
    </div>
  );
};
