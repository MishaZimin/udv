import { useQuery } from "@tanstack/react-query";
import { BenefitApi } from "src/widgets/benefits/api/benefit.api";

export const useBenefit = (id?: number) => {
  const {
    data: benefitData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["benefit", id],
    queryFn: async () => {
      if (!id) return null;
      const response = await BenefitApi.getBenefit(id);
      return response;
    },
    enabled: !!id,
    // retry: 1,
    // staleTime: 5000,
  });

  return { benefitData, error, isLoading };
};
