import { Layout } from "src/app/layout/ui/Layout";
import { CreateBenefit } from "src/features/benefit";
import { AdminBenefits } from "src/widgets/admin-benefits";

export const AdminBenefitPage = () => {
  return (
    <Layout>
      <div className="grid gap-[32px] pb-[32px] pt-[16px] md:grid-cols-2 lg:grid-cols-3">
        <CreateBenefit />
        <AdminBenefits />
      </div>
    </Layout>
  );
};
