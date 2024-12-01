import { Benefit } from "src/entities/benefit";
import { IBenefitCard } from "..";
import { useBenefits } from "../api/queries/use-benefits";
// import { Loader } from "src/shared/ui";
import { CardLoader } from "src/shared/ui/loader/CardLoader";
import { LoadersList } from "src/shared/ui/loader/LoadersList";

export const BenefitsList = () => {
  const { benefits, error, isLoading } = useBenefits();

  console.log(benefits);

  if (error) {
    return <p>error</p>;
  }

  return (
    <>
      <div className="grid gap-[32px] pb-[32px] pt-[16px] md:grid-cols-2 lg:grid-cols-3">
        {!isLoading ? (
          benefits && benefits.length > 0 ? (
            benefits.map((benefit: IBenefitCard) => (
              <div key={benefit.id} className="md:w-full lg:w-[320px]">
                <Benefit benefit={benefit} isNewTag={false} />
              </div>
            ))
          ) : (
            <p>Здесь пока нет бенефитов</p>
          )
        ) : (
          <LoadersList count={6}>
            <CardLoader />
          </LoadersList>
        )}
        {}
        {}
      </div>
    </>
  );
};
