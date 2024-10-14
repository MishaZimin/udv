import { useEffect } from "react";
import { Menu } from "src/components/menu/Menu";
import { BackButton } from "src/shared/ui/button/BackButton";
import { CREATEBENEFIT } from "src/components/menu/menu.data";
import { validateFields } from "../modal/validate";

export function CreateBenefitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log(validateFields());
  });

  return (
    <>
      <div className="mx-auto h-svh w-[1024px]">
        <div className="flex flex-col">
          <div className="flex flex-row gap-[8px] py-[32px]">
            <BackButton link={"/admin/benefit"} />
            <p className="text-[32px] font-semibold leading-[40px]">
              Создание бенефита
            </p>
          </div>
          <div className="mb-[32px] flex flex-row gap-[32px]">
            <Menu menu={CREATEBENEFIT} orientation="vertical" />
            <div className="w-full rounded-[16px] bg-white p-[0px]">
              <div className="flex flex-col gap-[24px]">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
