import { useQuery } from "@tanstack/react-query";
import { GetMyApplications } from "../services/application.api";

export const useApplications = () => {
  return useQuery({
    queryKey: ["applications"],
    queryFn: GetMyApplications,
    staleTime: 0,
  });
};
