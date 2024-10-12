import { AdminSidebar } from "src/components/adminSidebar/AdminSidebar";
import Layout from "src/components/layout/Layout";
import { Employee } from "src/components/employee/Employee";

export function AdminEmployeesPage() {
    return (
        <Layout>
            <AdminSidebar>
                <div className="w-full bg-white rounded-[16px]">
                    <div className="flex flex-row gap-[32px]  text-left  py-[0px]">
                        <div className="min-w-[48px] h-[48px] rounded-full bg-white my-auto"></div>
                        <div className="w-full flex flex-row  gap-[32px]">
                            <p className="my-auto text-left w-[35%] text-opacity-[60%]">
                                Сотрудник
                            </p>
                            <p className="my-auto  text-left w-[35%] text-opacity-[60%]">
                                Должность
                            </p>

                            <p className="my-auto text-left w-[30%] text-opacity-[60%]">
                                Опыт
                            </p>
                        </div>
                    </div>
                    <Employee
                        name={
                            "Константин Константин Константин Константин Константин Константин"
                        }
                        jobTitle={"Продуктовый дизайнер"}
                        experience={"до 3 месяцев"}
                    />
                    <Employee
                        name={"Константин "}
                        jobTitle={
                            "Продуктовый Продуктовый Продуктовый Продуктовый"
                        }
                        experience={"до 2 года"}
                    />
                    <Employee
                        name={"Константин "}
                        jobTitle={"Продуктовый дизайнер"}
                        experience={"более 3 года"}
                    />
                    <Employee
                        name={"Константин Сергеев"}
                        jobTitle={"Продуктовый "}
                        experience={"до 3 месяцев"}
                    />
                    <Employee
                        name={"Константин "}
                        jobTitle={"Продуктовый дизайнер"}
                        experience={"до 3 лет до 3 лет до 3 лет до 3 лет"}
                    />
                </div>
            </AdminSidebar>
        </Layout>
    );
}
