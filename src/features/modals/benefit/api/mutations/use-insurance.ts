import { useMutation } from "@tanstack/react-query";
import { ApplyApi } from "../services/apply.api";

interface SubmitInsuranceParams {
  benefitId: number;
  insuranceMember: string;
  insuranceType: string;
  files: File[];
}

export const useSubmitInsuranceRequest = () => {
  return useMutation({
    mutationFn: (params: SubmitInsuranceParams) =>
      ApplyApi.submitInsuranceRequest(
        params.benefitId,
        params.insuranceMember,
        params.insuranceType,
        params.files,
      ),
    onError: (error: Error) => {
      console.error("Ошибка отправки запроса:", error);
    },
    onSuccess: (data) => {
      console.log("Запрос успешно отправлен:", data);
    },
  });
};
