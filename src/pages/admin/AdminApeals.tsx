import { AdminSidebar } from "src/components/adminSidebar/AdminSidebar";
import Layout from "src/components/layout/Layout";

export function AdminApealsPage() {
    return (
        <Layout>
            <AdminSidebar>
                <div className="w-full h-[500px] bg-card p-[16px] rounded-[16px]">
                    <p className="">Обращения</p>
                </div>
            </AdminSidebar>
        </Layout>
    );
}
