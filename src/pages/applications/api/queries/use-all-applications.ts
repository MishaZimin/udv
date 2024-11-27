import { useQuery } from "@tanstack/react-query";
import { ApplicationsApi } from "../services/applications.api";

export const useAllApplications = () => {
  const {
    data: applications,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allApplications"],
    queryFn: async () => {
      const response = await ApplicationsApi.getApplications();
      return response;
    },
    retry: 1,
  });

  return { applications, error, isLoading, refetch };
};
