import { Button } from "src/shared/ui/button/Button";

type Props = {
  formError: string | null;
  handleSubmit: () => void;
  closeModal: () => void;
  isLoading: boolean;
};

export const EditEmployeeFooter = ({
  formError,
  handleSubmit,
  closeModal,
  isLoading,
}: Props) => {
  return (
    <div className="">
      {formError && <p className="text-red-500">{formError}</p>}
      <div className="flex flex-row gap-2">
        <Button
          text={"Сохранить"}
          buttonType={"primary"}
          size="sm"
          onClick={handleSubmit}
          disabled={isLoading}
          textColor={"light"}
        />
        <Button
          text={"Отмена"}
          buttonType={"secondary"}
          size="sm"
          textColor={"dark"}
          onClick={closeModal}
          disabled={isLoading}
        />
      </div>
    </div>
  );
};
