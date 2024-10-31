import Profile from "src/shared/assets/svgs/Profile.svg";
import Dots from "src/shared/assets/svgs/Dots.svg";

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
  return (
    <div className="flex flex-row gap-[32px] border-b px-[8px] py-[16px] text-left">
      <div className="min-w-[22px]rounded-full my-auto mt-0 min-h-[22px] bg-opacity-[8%] bg-none">
        <img className="w-[22px]" src={Profile} />
      </div>
      <div className="flex w-full flex-row items-start gap-[32px]">
        <p className="w-[30%] text-left">{employee.full_name}</p>
        <p className="w-[15%] text-left">{employee.position}</p>
        <p className="w-[15%] text-left">{employee.employment_date}</p>
        <p className="w-[40%] text-left">{employee.email}</p>
      </div>
      <button className="min-w-[22px]rounded-full my-auto mt-0 h-[22px] bg-opacity-[8%] bg-none">
        <img className="w-[22px]" src={Dots} />
      </button>
    </div>
  );
};
