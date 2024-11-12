// src/features/benefit-create/ui/CreateBenefitLayout.tsx
import { Navbar, CREATEBENEFIT } from "src/widgets/navbar";
import { BackButton } from "src/shared/ui/button/BackButton";
import { Preview } from "src/widgets/preview/ui/Preview";
import { SubmitButton } from "src/features/submit-benefit";

export const CreateBenefitLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="mx-auto h-svh w-[1024px]">
      <div className="flex flex-col">
        <div className="flex flex-row gap-[8px] py-[32px]">
          <BackButton link={"/admin/benefit"} />
          <p className="text-[32px] font-semibold leading-[40px]">
            Создание бенефита
          </p>
        </div>
        <div className="mb-[32px] flex flex-col gap-[32px]">
          <Navbar navbar={CREATEBENEFIT} orientation="horizontal" />
          <div className="flex w-full flex-row gap-[32px] rounded-[16px] bg-white p-[0px]">
            <div className="flex w-full flex-col gap-6">
              {children}
              <SubmitButton />
            </div>
            <Preview />
          </div>
        </div>
      </div>
    </div>
  );
};
