import { useMutation } from "@tanstack/react-query";
import { BenefitApi } from "src/widgets/benefits/api/benefit.api";

interface UploadBenefitCoverParams {
  benefitId: number;
  imageFile: File;
}

export const useUploadBenefitCover = () => {
  return useMutation({
    mutationFn: async ({ benefitId, imageFile }: UploadBenefitCoverParams) => {
      const response = await BenefitApi.uploadBenefitCover(
        benefitId,
        imageFile,
      );
      return response;
    },
    onSuccess: (data) => {
      console.log("Upload success:", data);
    },
    onError: (error) => {
      console.error("Error uploading cover:", error);
    },
  });
};
