import Layout from "src/components/layout/Layout";
import { Employee } from "src/components/employee/Employee";
import { AdminLayout } from "..";

export function AdminEmployeesPage() {
  return (
    <Layout>
      <AdminLayout>
        <div className="w-full rounded-[16px] bg-white">
          <div className="flex flex-row gap-[32px] border-b px-[8px] py-[16px] text-left">
            <div className="my-auto h-[22px] min-w-[22px] rounded-full bg-white"></div>
            <div className="flex w-full flex-row gap-[32px]">
              <p className="my-auto w-[28%] text-left text-opacity-[60%]">
                Сотрудник
              </p>
              <p className="my-auto w-[28%] text-left text-opacity-[60%]">
                Должность
              </p>
              <p className="my-auto w-[14%] text-left text-opacity-[60%]">
                Опыт
              </p>
              <p className="my-auto w-[28%] text-left text-opacity-[60%]">
                Почта
              </p>
            </div>
          </div>
          <Employee
            name={"Константин Сергеев"}
            jobTitle={"Продуктовый дизайнер"}
            experience={"до 3 месяцев"}
            post={"andreev_andrey@udv.ru"}
          />
          <Employee
            name={"Иван Иванов"}
            jobTitle={"Разработчик"}
            experience={"до 1 года"}
            post={"andreev_andrey@udv.ru"}
          />
          <Employee
            name={"Александр Петров"}
            jobTitle={"Аналитик"}
            experience={"до 3 лет"}
            post={"andreev_andrey@udv.ru"}
          />
          <Employee
            name={"Вася Пупкин"}
            jobTitle={"HR"}
            experience={"больше 3 лет"}
            post={"andreev_andrey@udv.ru"}
          />
          <Employee
            name={"Роман Максимов"}
            jobTitle={"Менеджер"}
            experience={"до 3 лет"}
            post={"andreev_andrey@udv.ru"}
          />
        </div>
      </AdminLayout>
    </Layout>
  );
}
