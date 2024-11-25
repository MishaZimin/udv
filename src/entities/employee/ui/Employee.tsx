import { EditEmployeeModal, DeleteEmployeeModal } from "src/features/modals";
import { useModal } from "src/shared/ui";
import { EmployeeText, EmployeeIcon } from "..";
import { IEmployee } from "../model/types/employee.type";
import Dots from "src/shared/assets/svgs/Dots.svg";
import { useEffect, useRef } from "react";

type EmployeeProps = {
  employee: IEmployee;
  onPendingChange?: (pending: boolean) => void;
  onToggle: (id: string | null) => void;
  isActive: boolean;
};

export const Employee = ({
  employee,
  onPendingChange,
  onToggle,
  isActive,
}: EmployeeProps) => {
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

  const dropdownRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      onToggle(null);
    }
  };

  useEffect(() => {
    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside, isActive]);

  const handleClick = () => {
    onToggle(!isActive ? employee.user_uuid : null);
  };

  const handleEditClick = () => {
    openEditModal();
    onToggle(null);
  };

  const handleDeleteClick = () => {
    openDeleteModal();
    onToggle(null);
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
      {isActive && (
        <div className="absolute right-[26px] z-40 -mt-[16px] flex justify-end rounded-[16px] bg-white">
          <div className="right-[100px] top-[0px] flex w-fit flex-col gap-2 rounded-[16px] bg-white p-2">
            <button
              className="h-[40px] px-4 pb-[10px] pt-2 text-left"
              onClick={handleEditClick}>
              <p>Редактировать</p>
            </button>
            <button
              className="h-[40px] px-4 pb-[10px] pt-2 text-left"
              onClick={handleDeleteClick}>
              <p>Удалить сотрудника</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
