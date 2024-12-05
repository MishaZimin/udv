import { BigModal } from "src/shared/ui/modal/ui/BigModal";
import { useEffect } from "react";
import { Employee } from "../model/type/employee.type";
import { useEditEmployeeModal } from "../model/hooks/use-edit-modal";
import { EditEmployeeContent } from "./EditEmployeeContent";
import { EditEmployeeFooter } from "./EditEmployeeFooter";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  employee?: Employee;
  id: string;
  onPendingChange?: (isPending: boolean) => void;
};

export const EditEmployeeModal = ({
  isOpen,
  closeModal,
  employee,
  id,
  onPendingChange,
}: Props) => {
  const {
    employeeData,
    isChecked,
    formError,
    isPending,
    error,
    handleChange,
    handleToggle,
    handleSubmit,
    resetForm,
  } = useEditEmployeeModal(employee, id, closeModal);

  useEffect(() => {
    if (onPendingChange) {
      onPendingChange(isPending);
    }
  }, [isPending, onPendingChange]);

  if (error) {
    return <p>Ошибка: {error.message}</p>;
  }

  return (
    !isPending &&
    isOpen && (
      <BigModal
        isOpen={isOpen}
        closeModal={() => {
          resetForm();
          closeModal();
        }}
        header="Редактирование сотрудника"
        children={
          <EditEmployeeContent
            employeeData={employeeData}
            handleChange={handleChange}
            isChecked={isChecked}
            handleToggle={handleToggle}
          />
        }
        footer={
          <EditEmployeeFooter
            formError={formError}
            handleSubmit={handleSubmit}
            closeModal={closeModal}
            isLoading={isPending}
          />
        }
      />
    )
  );
};
