import { useQuery } from "@tanstack/react-query";
import { getAnalyticsByBenefits } from "../services/analytics.api";

export const useAnalyticsByBenefits = () => {
  return useQuery({
    queryKey: ["analyticsByBenefits"],
    queryFn: getAnalyticsByBenefits,
    staleTime: 500,
    refetchOnWindowFocus: false,
  });
};
