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
          <p className="my-auto w-[28%] text-left text-opacity-[60%]">
            Сотрудник
          </p>
          <p className="my-auto w-[28%] text-left text-opacity-[60%]">
            Должность
          </p>
          <p className="my-auto w-[14%] text-left text-opacity-[60%]">Опыт</p>
          <p className="my-auto w-[28%] text-left text-opacity-[60%]">Почта</p>
        </div>
        <div className="min-w-[22px]rounded-full my-auto mt-0 h-[22px] bg-opacity-[8%] bg-none">
          <img className="w-[22px]" src={""} />
        </div>
      </div>
      {/* {employees.map((employee: Props) => {
        <Employee
        employee={employee}
      />
      })} */}
      {/* <Employee
        name={"Константин Сергеев"}
        jobTitle={"Продуктовый дизайнер"}
        experience={"до 3 месяцев"}
        post={"andreev_andrey@udv.ru"}
      />
      <Employee
        name={"Иван Иванов"}
        jobTitle={"Разработчик"}
        experience={"до 1 года"}
        post={"morozov_dmintry@udv.ru"}
      />
      <Employee
        name={"Александр Петров"}
        jobTitle={"Аналитик"}
        experience={"до 3 лет"}
        post={"elena_sidorova@udv.ru"}
      />
      <Employee
        name={"Вася Пупкин"}
        jobTitle={"HR"}
        experience={"больше 3 лет"}
        post={"volkov@udv.ru"}
      />
      <Employee
        name={"Роман Максимов"}
        jobTitle={"Менеджер"}
        experience={"до 3 лет"}
        post={"popov_pavel@udv.ru"}
      /> */}
    </div>
  );
};
