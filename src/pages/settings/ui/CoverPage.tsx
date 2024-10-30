import { CoverDropArea } from "src/features/cover-drop-area";
import { CreateBenefitLayout } from "../layout/ui/CreateBenefitLayout";

export const CoverPage = () => {
  return (
    <CreateBenefitLayout>
      <div className="flex w-full flex-col gap-[16px]">
        <CoverDropArea />
      </div>
    </CreateBenefitLayout>
  );
};
