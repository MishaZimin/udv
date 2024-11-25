import { EditEmployeeModal, DeleteEmployeeModal } from "src/features/modals";
import { useModal } from "src/shared/ui";
import { EmployeeText, EmployeeIcon } from "..";
import { IEmployee } from "../model/types/employee.type";
import Dots from "src/shared/assets/svgs/Dots.svg";
import { useState } from "react";

type EmployeeProps = {
  employee: IEmployee;
  onPendingChange?: (pending: boolean) => void;
};

export const Employee = ({ employee, onPendingChange }: EmployeeProps) => {
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

  const [isOpenPanel, setIsOpenPanel] = useState(false);

  const handleClick = () => {
    setIsOpenPanel(!isOpenPanel);
  };

  return (
    <div className="relative">
      <div className="flex flex-row gap-8 px-2 py-4 text-left">
        <EmployeeIcon isAdministration={employee.administration} />
        <EmployeeText employee={employee} />

        <button className="min-w-[22px]" onClick={handleClick}>
          <img src={Dots} />
        </button>

        <DeleteEmployeeModal
          employeeId={employee.user_uuid}
          isOpen={isDeleteOpen}
          closeModal={closeDeleteModal}
          closeBtn={false}
        />
        <EditEmployeeModal
          isOpen={isEditOpen}
          closeModal={closeEditModal}
          employee={employee}
          id={employee.user_uuid}
          onPendingChange={onPendingChange}
        />
      </div>
      {isOpenPanel && (
        <div className="absolute right-6 z-40 -mt-[16px] flex justify-end rounded-[16px] bg-white">
          <div className="right-[100px] top-[0px] flex w-fit flex-col gap-2 rounded-[16px] bg-white p-2">
            <button
              className="h-[40px] px-4 pb-[10px] pt-2 text-left"
              onClick={openEditModal}>
              <p>Редактировать</p>
            </button>
            <button
              className="h-[40px] px-4 pb-[10px] pt-2 text-left"
              onClick={openDeleteModal}>
              <p>Удалить сотрудника</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
