import { EditEmployeeModal, DeleteEmployeeModal } from "src/features/modals";
import { ActionPanel } from "src/entities/action-panel";
import { useModal, ButtonIcon } from "src/shared/ui";
import { EmployeeIcon } from "./EmployeeIcon";
import { IEmployee } from "../model/types/employee.type";
import { EmployeeInfo } from "./EmployeeInfo";

type EmployeeProps = {
  employee: IEmployee;
};

export const Employee = ({ employee }: EmployeeProps) => {
  const {
    isOpen: isEditOpen,
    openModal: openEditModal,
    closeModal: closeEditModal,
  } = useModal();
  const {
    isOpen: isDeleteOpen,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = useModal();

  const employeeData = {
    full_name: employee.full_name,
    place_of_employment: employee.place_of_employment,
    position: employee.position,
    employment_date: employee.employment_date,
    email: employee.email,
    administration: employee.administration,
  };

  return (
    <div className="flex flex-row gap-8 px-2 py-4 text-left">
      <EmployeeIcon isAdministration={employeeData.administration} />
      <EmployeeInfo employee={employee} />

      <ActionPanel>
        <ButtonIcon iconName={"Edit"} onClick={openEditModal} />
        <ButtonIcon iconName={"Delete"} onClick={openDeleteModal} />
      </ActionPanel>

      <DeleteEmployeeModal
        employeeId={employee.user_uuid}
        isOpen={isDeleteOpen}
        closeModal={closeDeleteModal}
        closeBtn={false}
      />
      <EditEmployeeModal
        isOpen={isEditOpen}
        closeModal={closeEditModal}
        employee={employeeData}
        id={employee.user_uuid}
      />
    </div>
  );
};
