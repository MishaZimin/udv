import { AdminSidebar } from "src/components/adminSidebar/AdminSidebar";
import Layout from "src/components/layout/Layout";
import { ExpUDV } from "src/components/expUDV/exp";

export function AdminCategoriesPage() {
    return (
        <Layout>
            <AdminSidebar>
                {/* <div className="w-full h-[500px] bg-card p-[16px] rounded-[16px]">
                    <p>Категории</p>
                </div> */}
                <div className="flex flex-col gap-[32px] w-full">
                    <ExpUDV />
                    {/* <div className="w-full h-[400px] bg-card p-[16px] rounded-[16px]">
                        <p>Категории</p>
                    </div> */}
                </div>
            </AdminSidebar>
        </Layout>
    );
}
