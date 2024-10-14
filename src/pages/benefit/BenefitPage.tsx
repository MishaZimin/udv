import { Menu } from "src/components/menu/Menu";
import { BENEFIT } from "src/components/menu/menu.data";
import TextEditor from "src/components/textEditior/TextEditor";
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
          <div className="flex flex-row gap-[32px]">
            <div>
              <Menu menu={BENEFIT} orientation="vertical" />
            </div>
            <div className="h-[500px] w-full rounded-[16px] bg-card p-[16px]">
              <TextEditor />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
