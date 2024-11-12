import { IEmployee } from "../model/types/employee.type";

type EmployeeProps = {
  employee: IEmployee;
};

export const EmployeeText = ({ employee }: EmployeeProps) => {
  return (
    <div className="flex w-full flex-row items-start gap-[32px]">
      <p className="w-[30%] text-left">{employee.full_name}</p>
      <p className="w-[15%] text-left">{employee.position}</p>
      <p className="w-[15%] text-left">{employee.employment_date}</p>
      <p className="w-[40%] text-left">{employee.email}</p>
    </div>
  );
};
