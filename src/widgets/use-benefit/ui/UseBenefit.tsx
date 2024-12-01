import { useAnalyticsByBenefits } from "../api/queries/use-analytics";
import { BenefitsUsageCircle } from "./BenefitsUsageCircle";

export const UseBenefit = () => {
  const { data, isLoading, error } = useAnalyticsByBenefits();

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  console.log(data);
  return (
    <div className="flex flex-col items-start gap-4">
      <h1>Использование бенефитов</h1>
      <div className="flex h-auto w-full flex-row gap-8">
        <BenefitsUsageCircle data={data} />
      </div>
    </div>
  );
};
