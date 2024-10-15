import Layout from "src/components/layout/Layout";
import { ExpUDV } from "src/components/exp-udv/ExpUDV";
import { AdminLayout } from "..";

export function AdminCategoriesPage() {
  return (
    <Layout>
      <AdminLayout>
        <div className="flex w-full flex-col gap-[32px]">
          <ExpUDV />
        </div>
      </AdminLayout>
    </Layout>
  );
}
