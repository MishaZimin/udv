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
        benefits.length > 0 ? (
          benefits &&
          benefits.map((benefit: IBenefitCard) => (
            <div key={benefit.id} className="md:w-full lg:w-[320px]">
              <Benefit
                benefit={benefit}
                isNewTag={false}
                actionSlot={
                  benefit.id !== 102 && <AdminActionPanel benefit={benefit} />
                }
                preview={true}
              />
            </div>
          ))
        ) : (
          <p>Здесь пока нет бенефитов</p>
        )
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
