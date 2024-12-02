import { LoadersList } from "src/shared/ui/loader/LoadersList";
import { useAnalyticsByBenefits } from "../api/queries/use-analytics";
import { BenefitsUsageCircle } from "./BenefitsUsageCircle";
import { TextLoader } from "src/shared/ui/loader/TextLoader";

export const UseBenefit = () => {
  const { data, isLoading, error } = useAnalyticsByBenefits();

  if (error instanceof Error) return <div>Error: {error.message}</div>;
  // if (!data) return <div>Нет данных</div>;

  return (
    <div className="flex flex-col items-start gap-4">
      <h1>Использование бенефитов</h1>
      <div className="flex h-auto w-full flex-row gap-8">
        {isLoading ? (
          <div className="flex w-1/3 flex-col gap-2">
            <LoadersList count={3}>
              <TextLoader height="38px" />
            </LoadersList>
          </div>
        ) : (
          <BenefitsUsageCircle data={data} />
        )}
      </div>
    </div>
  );
};
