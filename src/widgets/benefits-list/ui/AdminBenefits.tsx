import { IBenefitCard } from "src/widgets/benefits-list";
import { useBenefits } from "../api/queries/use-benefits";
// import { Loader } from "src/shared/ui";
import { Benefit } from "src/entities/benefit";
import { AdminActionPanel } from "src/features/admin-action-panel/ui/AdminActionPanel";
import { CardLoader } from "src/shared/ui/loader/CardLoader";
import { LoadersList } from "src/shared/ui/loader/LoadersList";

export const AdminBenefits = () => {
  const { benefits, error, isLoading } = useBenefits();

  if (error) {
    return <p>error</p>;
  }
  if (!isLoading) {
    console.log("benefits admin: ", benefits);
  }

  return (
    <>
      {!isLoading ? (
        benefits.map((benefit: IBenefitCard) => (
          <div key={benefit.id} className="md:w-full lg:w-[320px]">
            <Benefit
              benefit={benefit}
              // isNewTag={Math.random() < 0.4}
              isNewTag={false}
              actionSlot={<AdminActionPanel benefit={benefit} />}
            />
          </div>
        ))
      ) : (
        // <LoadersList count={8}>
        //   <CardLoader />
        // </LoadersList>
        <LoadersList count={8}>
          <CardLoader />
        </LoadersList>
      )}
      {}
    </>
  );
};
