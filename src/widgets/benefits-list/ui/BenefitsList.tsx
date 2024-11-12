import { Benefit } from "src/entities/benefit";
import { IBenefitCard } from "..";
import { useBenefits } from "../api/queryes/use-benefits";
import { Loader } from "src/shared/ui";

export const BenefitsList = () => {
  const { benefits, error, isLoading } = useBenefits();

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>error</p>;
  }

  console.log("benefits: ", benefits);

  return (
    <>
      <div className="grid gap-[32px] pb-[32px] pt-[16px] md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit: IBenefitCard) => (
          <div key={benefit.id} className="md:w-full lg:w-[320px]">
            <Benefit
              benefit={benefit}
              isNewTag={Math.random() < 0.4}
              link={"/benefit"}
            />
          </div>
        ))}
      </div>
    </>
  );
};
