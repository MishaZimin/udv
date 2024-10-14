import { CreateBenefitLayout } from "../layout/CreateBenefitLayout";
import { Preview } from "src/components/preview/Preview";
import { CoverDropArea } from "src/components/coverDropArea/CoverDropArea";
import { SubmitButton } from "src/components/submitBenefitBtn/SubmitBenefitBtn";
// import Input from "src/shared/ui/input/Input";
// import { useBlockStore } from "../store/useBlockStore";

export function CoverPage() {
  // const name = useBlockStore((state) => state.name);
  // const setName = useBlockStore((state) => state.setName);

  // const subtext = useBlockStore((state) => state.subtext);
  // const setSubtext = useBlockStore((state) => state.setSubtext);

  return (
    <CreateBenefitLayout>
      <div className="flex flex-row gap-[32px]">
        <div className="flex w-full flex-col gap-[16px]">
          {/* <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[8px]">
              <p className="text-[20px] font-semibold">Название бенефита</p>
              <Input
                inputType={"default"}
                placeholder="Название бенефита"
                value={name}
                onChange={(value) => setName(value)}
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <p className="text-[20px] font-semibold">Подпись в карточке</p>
              <Input
                inputType={"default"}
                placeholder="Подпись в карточке"
                value={subtext}
                onChange={(value) => setSubtext(value)}
              />
            </div>
          </div> */}
          <CoverDropArea />
          <SubmitButton />
        </div>
        <Preview />
      </div>
    </CreateBenefitLayout>
  );
}
