import { IBenefitCard } from "src/widgets/benefits-list";
import { useBenefits } from "../api/queryes/use-benefits";
import { Loader } from "src/shared/ui";
import { Benefit } from "src/entities/benefit";
import { AdminActionPanel } from "src/features/admin-action-panel/ui/AdminActionPanel";

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
          <Benefit
            benefit={benefit}
            isNewTag={Math.random() < 0.4}
            link={"/benefit"}
            actionSlot={<AdminActionPanel benefit={benefit} />}
          />
        </div>
      ))}
    </>
  );
};
