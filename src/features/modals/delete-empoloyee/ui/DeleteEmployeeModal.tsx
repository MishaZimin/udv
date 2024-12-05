import { Modal } from "src/shared/ui/modal";
import { Button, Loader } from "src/shared/ui";
import { useDeleteEmployee } from "../model/hooks/use-delete-employee";
import { useEmployees } from "src/widgets/employees-list/api/queries/use-employees";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  employeeId: string;
};

export const DeleteEmployeeModal = ({
  isOpen,
  closeModal,
  employeeId,
}: Props) => {
  const { mutate: deleteBenefit, isPending, error } = useDeleteEmployee();
  const { refetch } = useEmployees();

  const handleDelete = () => {
    deleteBenefit(employeeId, {
      onSuccess: () => {
        refetch();
        closeModal();
      },
    });
  };

  if (error) {
    return <>error</>;
  }

  return (
    <>
      {!isPending ? (
        <Modal isOpen={isOpen} onClose={closeModal}>
          <div className="relative z-10 w-svw rounded-t-[16px] bg-card p-6 px-[40px] py-[48px] sm:w-[400px] sm:rounded-[16px]">
            <div className="flex flex-col gap-[32px]">
              <p className="text-center text-[20px] font-semibold leading-[28px]">
                Вы уверены, <br />
                что хотите удалить сотрудника?
              </p>
              <div className="flex flex-col gap-[8px]">
                <Button
                  onClick={handleDelete}
                  text={"Удалить"}
                  textColor={"light"}
                  buttonType={"red"}
                />
                <Button
                  onClick={closeModal}
                  text={"Отмена"}
                  textColor={"dark"}
                  buttonType={"secondary"}
                />
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        <Loader />
      )}
    </>
  );
};
