import Profile from "src/shared/assets/svgs/Profile.svg";
import Admin from "src/shared/assets/svgs/Admin.svg";

import { useModal } from "src/shared/ui/modal";
import { EditEmployeeModal } from "src/features/modals";
import { DeleteBenefit } from "src/features/benefit";
import Pencil from "src/shared/assets/svgs/Pencil.svg";
import { DeleteEmployeeModal } from "src/features/modals/delete-empoloyee-modal";

type Employee = {
  administration: boolean;
  email: string;
  employment_date: string;
  full_name: string;
  place_of_employment: string;
  position: string;
  user_uuid: string;
};

type EmployeeProps = {
  employee: Employee;
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
    <div className="flex flex-row gap-[32px] border-b px-[8px] py-[16px] text-left">
      <div className="min-w-[22px]rounded-full my-auto mt-0 min-h-[22px] bg-opacity-[8%] bg-none">
        {employeeData.administration ? (
          <img className="w-[22px]" src={Admin} />
        ) : (
          <img className="w-[22px]" src={Profile} />
        )}
      </div>
      <div className="flex w-full flex-row items-start gap-[32px]">
        <p className="w-[30%] text-left">{employee.full_name}</p>
        <p className="w-[15%] text-left">{employee.position}</p>
        <p className="w-[15%] text-left">{employee.employment_date}</p>
        <p className="w-[40%] text-left">{employee.email}</p>
      </div>
      {/* <button
        onClick={openModal}
        className="min-w-[22px] rounded-full my-auto mt-0 h-[22px] bg-opacity-[8%] bg-none"
      >
        <img className="w-[22px]" src={Dots} />
      </button> */}

      <div className="bottom-[8px] right-[8px] flex h-[30px] min-w-[60px] flex-row rounded-[8px] bg-card">
        <button
          onClick={openEditModal}
          className="animation cursor-pointer rounded-[8px] p-[4px] hover:bg-graphite hover:bg-opacity-[8%]"
        >
          <img src={Pencil} />
        </button>
        <DeleteBenefit openModal={openDeleteModal} />
      </div>

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
