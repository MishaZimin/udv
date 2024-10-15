import { AdminLayout } from "..";
import Layout from "src/components/layout/Layout";
import Button from "src/shared/ui/button/Button";

export function AdminApealsPage() {
  return (
    <Layout>
      <AdminLayout>
        <div className="h-[500px] w-full rounded-[16px] bg-white">
          <p className="pb-[32px]">Для обращений используем сервис Tally</p>
          <Button
            text={"Посмотреть обращения"}
            textColor={"light"}
            buttonType={"primary"}
            fullWidth={true}
          />
        </div>
      </AdminLayout>
    </Layout>
  );
}
