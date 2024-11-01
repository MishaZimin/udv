import { AdminBenefit } from "src/features/admin-benefit/ui/AdminBenefit";
import { IBenefitCard } from "src/widgets/benefits";
import { useBenefits } from "../model/hooks/useBenefits";
import Loader from "src/shared/ui/loader/Loader";
// import { useEffect } from "react";
// import { useCardStore } from "src/pages/settings";

export const AdminBenefits = () => {
  const { benefits, error, isLoading } = useBenefits();

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>error</p>;
  }
  console.log("benefits admin: ", benefits);

  return (
    <>
      {benefits.map((benefit: IBenefitCard) => (
        <div key={benefit.id} className="md:w-full lg:w-[320px]">
          <AdminBenefit
            benefit={benefit}
            isNewTag={Math.random() < 0.4}
            link={"/benefit"}
          />
        </div>
      ))}
    </>
  );
};
