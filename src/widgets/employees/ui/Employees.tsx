import { Employee } from "src/entities/employee";
import { InvitingEmployeeModal } from "src/features/modals";
import { useEmployees } from "src/pages/admin/ui/employees/model/hooks/useEmployees";
import { Button } from "src/shared/ui";
import Loader from "src/shared/ui/loader/Loader";
import { useModal } from "src/shared/ui/modal";

type Employee = {
  administration: boolean;
  email: string;
  employment_date: string;
  full_name: string;
  place_of_employment: string;
  position: string;
  user_uuid: string;
};

// type EmployeesProps = {
//   employees: Employee[];
// };

export const Employees = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const { employees, error, isLoading } = useEmployees();

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>error</p>;
  }
  console.log(employees);

  return (
    <div className="w-full overflow-x-auto bg-white">
      <div className="relative flex flex-row gap-[32px] border-b px-[8px] py-[16px] text-left">
        <div className="my-auto h-[22px] min-w-[22px] rounded-full bg-white"></div>
        <div className="flex w-full flex-row gap-[32px]">
          <p className="my-auto w-[30%] text-left text-opacity-[60%]">
            Сотрудник
          </p>
          <p className="my-auto w-[15%] text-left text-opacity-[60%]">
            Должность
          </p>
          <p className="my-auto w-[15%] text-left text-opacity-[60%]">Опыт</p>
          <p className="my-auto w-[40%] text-left text-opacity-[60%]">Почта</p>
        </div>
        <div className="my-auto mt-0 h-[22px] min-w-[60px] rounded-full bg-opacity-[8%] bg-none">
          <img className="w-[22px]" src={""} />
        </div>
        <div className="absolute right-0 top-2">
          <Button
            onClick={openModal}
            text={"Пригласить"}
            textColor={"dark"}
            buttonType={"secondary"}
            size={"sm"}
          />
        </div>
      </div>
      {employees.map((employee: Employee) => {
        return (
          <div key={employee.user_uuid}>
            <Employee employee={employee} />
          </div>
        );
      })}

      <InvitingEmployeeModal
        isOpen={isOpen}
        closeModal={closeModal}
        closeBtn={true}
      />
    </div>
  );
};
