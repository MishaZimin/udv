import { useCardStore } from "../stores/useCardStore";
import { CreateBenefitLayout } from "../layout/CreateBenefitLayout";
import { SubmitButton } from "src/components/submit-benefit-btn/SubmitBenefitBtn";
import { NameInput } from "src/components/name-input/NameInput";
import { SubtextInput } from "src/components/subtext-input/SubtextInput";
import { DescriptionArea } from "src/components/block-inf/BlockInf";

export function DetailsPage() {
  const name = useCardStore((state) => state.name);
  const setName = useCardStore((state) => state.setName);

  const subtext = useCardStore((state) => state.subtext);
  const setSubtext = useCardStore((state) => state.setSubtext);

  const description = useCardStore((state) => state.description);
  const setDescription = useCardStore((state) => state.setDescription);

  return (
    <CreateBenefitLayout>
      <div className="flex flex-row gap-[32px]">
        <div className="flex w-full flex-col gap-[16px]">
          <div className="flex flex-col gap-[8px]">
            <NameInput name={name} setName={setName} />
            <SubtextInput subtext={subtext} setSubtext={setSubtext} />
          </div>
          <div className="flex flex-col gap-[24px]">
            <DescriptionArea
              description={description}
              setDescription={setDescription}
            />
          </div>
          <SubmitButton />
        </div>
      </div>
    </CreateBenefitLayout>
  );
}
