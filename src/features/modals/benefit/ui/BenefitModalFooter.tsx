// components/Footer.tsx
import { Button } from "src/shared/ui";

export const Footer = ({
  isLoading,
  needConfirmation,
  submitRequest,
  closeModal,
  isSubmitLoading,
}: {
  isLoading: boolean;
  needConfirmation: boolean;
  submitRequest: () => void;
  closeModal: () => void;
  isSubmitLoading: boolean;
}) => {
  return !isLoading && needConfirmation ? (
    <>
      <Button
        text={"Отправить заявку"}
        textColor={"light"}
        buttonType={"primary"}
        onClick={submitRequest}
        disabled={isSubmitLoading}
      />
      <Button
        text={"Отменить"}
        textColor={"dark"}
        buttonType={"secondary"}
        onClick={closeModal}
        disabled={isSubmitLoading}
      />
    </>
  ) : null;
};
