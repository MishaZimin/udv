import { Link } from "react-router-dom";
import { AdminSidebar } from "src/components/adminSidebar/AdminSidebar";
import { ExpUDV } from "src/components/expUDV/ExpUDV";

import Layout from "src/components/layout/Layout";
import CreateBenefit from "src/shared/image/CreateBenefit.svg";

import { AdminBenefit } from "src/components/adminBenefit/AdminBenefut";

export function AdminBenefitPage() {
  return (
    <Layout>
      <AdminSidebar>
        <div className="flex w-full flex-col gap-[32px]">
          <ExpUDV />
          <div className="flex">
            <div className="mb-[32px] grid grid-cols-2 gap-[32px] rounded-[16px] bg-white p-[0px]">
              <Link
                to={"/create-benefit/details"}
                className="h-[240px] w-[320px] rounded-[16px] border border-dashed border-graphite border-opacity-[40%] bg-white hover:shadow-md"
              >
                <div className="flex h-full flex-col justify-center">
                  <img className="mx-auto" src={CreateBenefit} />
                  <p className="text-center font-semibold leading-[20px] opacity-[80%]">
                    Создать бенефит
                  </p>
                </div>
              </Link>
              <AdminBenefit />
              <AdminBenefit />
              <AdminBenefit />
              <AdminBenefit />
              <AdminBenefit />
            </div>
          </div>
        </div>
      </AdminSidebar>
    </Layout>
  );
}
