import { CreateBenefitLayout } from "../layouts/CreateBenefitLayout";
import { BenefitAvailability } from "src/widgets/benefit-settings/benefit-availability/ui/BenefitAvailability";
import { Possibilities } from "src/widgets/possibilities/ui/Possibilities";

export const AvailabilityPage = () => {
  return (
    <CreateBenefitLayout>
      <BenefitAvailability />
      <Possibilities />
    </CreateBenefitLayout>
  );
};
