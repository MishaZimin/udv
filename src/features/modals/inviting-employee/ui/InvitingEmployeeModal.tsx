import { BigModal } from "src/shared/ui/modal/ui/BigModal";
import { useInvitingEmployee } from "../model/hooks/use-inviting-employee";
import { InvitingContent } from "./InvitingContent";
import { InvitingFooter } from "./InvitingFooter";
import { useEffect } from "react";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  onPendingChange?: (isPending: boolean) => void;
};

export const InvitingEmployeeModal = ({
  isOpen,
  closeModal,
  onPendingChange,
}: Props) => {
  const {
    employeeData,
    isChecked,
    validationError,
    isPending,
    error,
    handleChange,
    handleToggle,
    handleSubmit,
  } = useInvitingEmployee(closeModal);

  useEffect(() => {
    if (onPendingChange) {
      onPendingChange(isPending);
    }
  }, [isPending, onPendingChange]);

  if (error) {
    return <p>error {error.message}</p>;
  }

  return (
    <>
      {!isPending && (
        <BigModal
          isOpen={isOpen}
          closeModal={closeModal}
          header="Приглашение сотрудника"
          children={
            <InvitingContent
              employeeData={employeeData}
              handleChange={handleChange}
              isChecked={isChecked}
              handleToggle={handleToggle}
            />
          }
          footer={
            <InvitingFooter
              validationError={validationError}
              handleSubmit={handleSubmit}
              closeModal={closeModal}
              isLoading={isPending}
            />
          }></BigModal>
      )}
    </>
  );
};
