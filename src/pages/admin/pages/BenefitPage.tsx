import { useNavigate } from "react-router-dom";
import Layout from "src/components/layout/Layout";

import { AdminBenefit } from "src/components/admin-benefit/AdminBenefit";
import CreateBenefit from "src/shared/assets/svgs/CreateBenefit.svg";
import { benefits } from "src/components/benefits/data/benefits.data";
import { IBenefit } from "src/components/benefits/data/benefits.data";
import { useCardStore } from "src/pages/create";
import { useImageStore } from "src/pages/create";

export function AdminBenefitPage() {
  const setName = useCardStore((state) => state.setName);
  const setSubtext = useCardStore((state) => state.setSubtext);
  const setImageSrc = useImageStore((state) => state.setImageSrc);

  const navigation = useNavigate();

  return (
    <Layout>
      <div className="flex w-full flex-col gap-[32px]">
        <div className="flex">
          <div className="mb-[32px] grid grid-cols-3 gap-[32px] rounded-[16px] bg-white p-[0px] pt-[16px]">
            <button
              onClick={() => {
                setName("");
                setSubtext("");
                setImageSrc("");
                navigation("/create-benefit/details");
              }}
              className="animation h-[240px] w-[320px] rounded-[16px] border border-dashed border-graphite border-opacity-[20%] bg-white hover:shadow-md"
            >
              <div className="flex h-full flex-col justify-center">
                <img className="mx-auto" src={CreateBenefit} />
                <p className="text-center font-semibold leading-[20px] opacity-[80%]">
                  Создать бенефит
                </p>
              </div>
            </button>

            {benefits.map((benefit: IBenefit) => (
              <AdminBenefit
                key={benefit.id}
                title={benefit.title}
                subtext={benefit.subtext}
                image={benefit.image}
                isNewTag={Math.random() < 0.4}
                link={"/benefit"}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
