import { AdminSidebar } from 'src/components/adminSidebar/AdminSidebar';
import Layout from 'src/components/layout/Layout';
import { ExpUDV } from 'src/components/expUDV/ExpUDV';

export function AdminCategoriesPage() {
  return (
    <Layout>
      <AdminSidebar>
        <div className="flex flex-col gap-[32px] w-full">
          <ExpUDV />
        </div>
      </AdminSidebar>
    </Layout>
  );
}
