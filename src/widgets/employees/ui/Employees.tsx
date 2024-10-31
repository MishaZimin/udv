import { Employee } from "src/entities/employee";

type Employee = {
  administration: boolean;
  email: string;
  employment_date: string;
  full_name: string;
  place_of_employment: string;
  position: string;
  user_uuid: string;
};

type EmployeesProps = {
  employees: Employee[];
};

export const Employees = ({ employees }: EmployeesProps) => {
  return (
    <div className="w-full overflow-x-auto bg-white">
      <div className="it flex flex-row gap-[32px] border-b px-[8px] py-[16px] text-left">
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
        <div className="min-w-[22px]rounded-full my-auto mt-0 h-[22px] bg-opacity-[8%] bg-none">
          <img className="w-[22px]" src={""} />
        </div>
      </div>
      {employees.map((employee: Employee) => {
        return (
          <div key={employee.user_uuid}>
            <Employee employee={employee} />
          </div>
        );
      })}
    </div>
  );
};
