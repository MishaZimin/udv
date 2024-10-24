import { CoverDropArea } from "src/features/cover-drop-area/ui/CoverDropArea";
import { SubmitButton } from "src/features/submit-benefit-btn/ui/SubmitBenefitBtn";
import { CreateBenefitLayout } from "../layout/CreateBenefitLayout";

export const CoverPage = () => {
  return (
    <CreateBenefitLayout>
      <div className="flex w-full flex-col gap-[16px]">
        <CoverDropArea />
        <SubmitButton />
      </div>
    </CreateBenefitLayout>
  );
};
