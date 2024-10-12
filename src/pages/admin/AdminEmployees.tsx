import { AdminSidebar } from "src/components/adminSidebar/AdminSidebar";
import Layout from "src/components/layout/Layout";
import { Employee } from "src/components/employee/Employee";

export function AdminEmployeesPage() {
  return (
    <Layout>
      <AdminSidebar>
        <div className="w-full rounded-[16px] bg-white">
          <div className="flex flex-row gap-[32px] py-[0px] text-left">
            <div className="my-auto h-[48px] min-w-[48px] rounded-full bg-white"></div>
            <div className="flex w-full flex-row gap-[32px]">
              <p className="my-auto w-[35%] text-left text-opacity-[60%]">
                Сотрудник
              </p>
              <p className="my-auto w-[35%] text-left text-opacity-[60%]">
                Должность
              </p>

              <p className="my-auto w-[30%] text-left text-opacity-[60%]">
                Опыт
              </p>
            </div>
          </div>
          <Employee
            name={"Константин Сергеев"}
            jobTitle={"Продуктовый дизайнер"}
            experience={"до 3 месяцев"}
          />
          <Employee
            name={"Иван Иванов"}
            jobTitle={"Разработчик"}
            experience={"до 1 года"}
          />
          <Employee
            name={"Александр Петров"}
            jobTitle={"Аналитик"}
            experience={"до 3 лет"}
          />
          <Employee
            name={"Вася Пупкин"}
            jobTitle={"HR"}
            experience={"больше 3 лет"}
          />
          <Employee
            name={"Роман Максимов"}
            jobTitle={"Менеджер"}
            experience={"до 3 лет"}
          />
        </div>
      </AdminSidebar>
    </Layout>
  );
}
