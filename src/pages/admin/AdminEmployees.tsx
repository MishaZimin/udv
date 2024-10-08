import { AdminSidebar } from "src/components/adminSidebar/AdminSidebar";
import Layout from "src/components/layout/Layout";
import { Employee } from "src/components/employee/Employee";

export function AdminEmployeesPage() {
    return (
        <Layout>
            <AdminSidebar>
                <div className="w-full h-[500px] bg-white p-[0px] rounded-[16px]">
                    <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                </div>
            </AdminSidebar>
        </Layout>
    );
}
