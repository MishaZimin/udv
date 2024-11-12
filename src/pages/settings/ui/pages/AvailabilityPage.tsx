import { CreateBenefitLayout } from "../layouts/CreateBenefitLayout";
import { BenefitAvailability } from "src/widgets/benefit-settings/benefit-availability/ui/BenefitAvailability";

export const AvailabilityPage = () => {
  return (
    <CreateBenefitLayout>
      <BenefitAvailability />
    </CreateBenefitLayout>
  );
};
