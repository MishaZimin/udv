import { useQuery } from "@tanstack/react-query";
import { CancelMyApplications } from "../services/application.api";

export const useCancelApplications = (id: number) => {
  return useQuery({
    queryKey: ["cancelApplications"],
    queryFn: () => CancelMyApplications(id),
    staleTime: 0,
  });
};
