import { useEffect } from "react";
import { Layout } from "src/shared/ui/layout/ui/Layout";
import { CreateBenefit } from "src/features/create-benefit";
import { saveToLocalStorage } from "src/shared/lib";
import { AdminBenefits } from "src/widgets/benefits-list";

export const AdminBenefitPage = () => {
  useEffect(() => {
    saveToLocalStorage("edit-benefit-id", null);
  });

  return (
    <Layout>
      <div className="grid gap-[32px] pb-[32px] pt-[16px] md:grid-cols-2 lg:grid-cols-3">
        <CreateBenefit />
        <AdminBenefits />
      </div>
    </Layout>
  );
};
