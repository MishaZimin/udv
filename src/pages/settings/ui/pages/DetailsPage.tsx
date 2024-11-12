import { CreateBenefitLayout } from "../layouts/CreateBenefitLayout";
import { BenefitDetails } from "src/widgets/benefit-settings/benefit-details";

export const DetailsPage = () => {
  return (
    <CreateBenefitLayout>
      <BenefitDetails />
    </CreateBenefitLayout>
  );
};
