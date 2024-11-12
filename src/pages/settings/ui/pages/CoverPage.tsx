import { BenefitImageUpload } from "src/widgets/benefit-settings/benefit-image-upload";
import { CreateBenefitLayout } from "../layouts/CreateBenefitLayout";

export const CoverPage = () => {
  return (
    <CreateBenefitLayout>
      <BenefitImageUpload />
    </CreateBenefitLayout>
  );
};
