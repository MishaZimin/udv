import { Link } from "react-router-dom";
import { AdminSidebar } from "src/components/adminSidebar/AdminSidebar";
import { ExpUDV } from "src/components/expUDV/exp";

import Layout from "src/components/layout/Layout";
import CreateBenefit from "src/shared/image/CreateBenefit.svg";

import { AdminBenefit } from "src/components/adminBenefit/AdminBenefut";

export function AdminBenefitPage() {
    return (
        <Layout>
            <AdminSidebar>
                <div className="flex flex-col gap-[32px] w-full">
                    <ExpUDV />
                    <div className="flex ">
                        <div className="grid grid-cols-2 gap-[32px]  bg-white p-[0px] rounded-[16px] mb-[32px]">
                            <Link
                                to={"/create-benefit/details"}
                                className="w-[320px] h-[240px] bg-white rounded-[16px] border-dashed border border-graphite border-opacity-[40%] hover:shadow-md">
                                <div className="flex flex-col justify-center h-full">
                                    <img
                                        className="mx-auto"
                                        src={CreateBenefit}
                                    />
                                    <p className="font-semibold text-center">
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
