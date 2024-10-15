import { BackButton } from "src/shared/ui/button/BackButton";

export function BenefitPage() {
  return (
    <>
      <div className="mx-auto h-svh w-[1024px]">
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-[8px] py-[32px]">
            <BackButton link="back" />
            <p className="text-[32px] font-semibold leading-[40px]">
              Развивающая среда
            </p>
          </div>
          <div className="ml-[64px] h-[500px] w-full rounded-[16px] bg-card p-[16px]"></div>
        </div>
      </div>
    </>
  );
}
