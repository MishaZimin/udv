import { AdminSidebar } from "src/components/adminSidebar/AdminSidebar";
import Layout from "src/components/layout/Layout";
import Button from "src/shared/ui/button/Button";

export function AdminApealsPage() {
    return (
        <Layout>
            <AdminSidebar>
                <div className="w-full h-[500px] bg-white rounded-[16px]">
                    <p className="pb-[32px]">
                        Для обращений используем сервис Tally
                    </p>
                    <Button
                        text={"Посмотреть обращения"}
                        textColor={"light"}
                        buttonType={"mint"}
                        fullWidth={true}
                    />
                </div>
            </AdminSidebar>
        </Layout>
    );
}
