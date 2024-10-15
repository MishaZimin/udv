import { Link } from "react-router-dom";
import Layout from "src/components/layout/Layout";

import { AdminBenefit } from "src/components/admin-benefit/AdminBenefut";
import CreateBenefit from "src/shared/assets/svgs/CreateBenefit.svg";

export function AdminBenefitPage() {
  return (
    <Layout>
      <div className="flex w-full flex-col gap-[32px]">
        <div className="flex">
          <div className="mb-[32px] grid grid-cols-3 gap-[32px] rounded-[16px] bg-white p-[0px] pt-[16px]">
            <Link
              to={"/create-benefit/details"}
              className="animation h-[240px] w-[320px] rounded-[16px] border border-dashed border-graphite border-opacity-[20%] bg-white hover:shadow-md"
            >
              <div className="flex h-full flex-col justify-center">
                <img className="mx-auto" src={CreateBenefit} />
                <p className="text-center font-semibold leading-[20px] opacity-[80%]">
                  Создать бенефит
                </p>
              </div>
            </Link>
            <AdminBenefit
              title={"Такси"}
              subtext={"Поездки между офисами и в командировках"}
              isNewTag={Math.random() < 0.4}
              link={"/benefit"}
            />
            <AdminBenefit
              title={"Такси"}
              subtext={"Поездки между офисами и в командировках"}
              isNewTag={Math.random() < 0.4}
              link={"/benefit"}
            />
            <AdminBenefit
              title={"Такси"}
              subtext={"Поездки между офисами и в командировках"}
              isNewTag={Math.random() < 0.4}
              link={"/benefit"}
            />
            <AdminBenefit
              title={"Такси"}
              subtext={"Поездки между офисами и в командировках"}
              isNewTag={Math.random() < 0.4}
              link={"/benefit"}
            />
            <AdminBenefit
              title={"Такси"}
              subtext={"Поездки между офисами и в командировках"}
              isNewTag={Math.random() < 0.4}
              link={"/benefit"}
            />
            <AdminBenefit
              title={"Такси"}
              subtext={"Поездки между офисами и в командировках"}
              isNewTag={Math.random() < 0.4}
              link={"/benefit"}
            />
            <AdminBenefit
              title={"Такси"}
              subtext={"Поездки между офисами и в командировках"}
              isNewTag={Math.random() < 0.4}
              link={"/benefit"}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
