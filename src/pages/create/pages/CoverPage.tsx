import { CoverDropArea } from "src/components/cover-drop-area/CoverDropArea";
import { SubmitButton } from "src/components/submit-benefit-btn/SubmitBenefitBtn";
import { CreateBenefitLayout } from "../layout/CreateBenefitLayout";

export function CoverPage() {
  return (
    <CreateBenefitLayout>
      <div className="flex flex-row gap-[32px]">
        <div className="flex w-full flex-col gap-[16px]">
          <CoverDropArea />
          <SubmitButton />
        </div>
      </div>
    </CreateBenefitLayout>
  );
}
