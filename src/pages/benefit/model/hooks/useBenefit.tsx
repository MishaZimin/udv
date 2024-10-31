import { useQuery } from "@tanstack/react-query";
import { BenefitApi } from "src/widgets/benefits/api/benefit.api";

export const useBenefit = (id?: number, isEdit?: boolean) => {
  const {
    data: benefitData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["benefit", id, isEdit],
    queryFn: async () => {
      if (!id) return null;
      const response = await BenefitApi.getBenefit(id);
      return response;
    },
    staleTime: 0,
  });

  return { benefitData, error, isLoading };
};
