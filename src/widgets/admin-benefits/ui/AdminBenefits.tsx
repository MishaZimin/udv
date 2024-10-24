import { AdminBenefit } from "src/features/admin-benefit/ui/AdminBenefit";
import { IBenefit, benefits } from "src/widgets/benefits";

export const AdminBenefits = () => {
  return (
    <>
      {benefits.map((benefit: IBenefit) => (
        <div className="md:w-full lg:w-[320px]">
          <AdminBenefit
            key={benefit.id}
            title={benefit.title}
            subtext={benefit.subtext}
            image={benefit.image}
            isNewTag={Math.random() < 0.4}
            link={"/benefit"}
          />
        </div>
      ))}
    </>
  );
};
