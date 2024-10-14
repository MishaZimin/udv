import { useBlockStore } from "../store/useBlockStore";
import { CreateBenefitLayout } from "../layout/CreateBenefitLayout";
import { BlockInf } from "src/components/blockInf/BlockInf";
import { Preview } from "src/components/preview/Preview";
import { SubmitButton } from "src/components/submitBenefitBtn/SubmitBenefitBtn";
import { NameInput } from "src/components/nameInput/NameInput";
import { SubtextInput } from "src/components/subtextInput/SubtextInput";

export function DetailsPage() {
  const name = useBlockStore((state) => state.name);
  const setName = useBlockStore((state) => state.setName);

  const subtext = useBlockStore((state) => state.subtext);
  const setSubtext = useBlockStore((state) => state.setSubtext);

  const blocks = useBlockStore((state) => state.blocks);

  return (
    <CreateBenefitLayout>
      <div className="flex flex-row gap-[32px]">
        <div className="flex w-full flex-col gap-[16px]">
          <div className="flex flex-col gap-[8px]">
            <NameInput name={name} setName={setName} />
            <SubtextInput subtext={subtext} setSubtext={setSubtext} />
          </div>

          <div className="flex flex-col gap-[24px]">
            {blocks.map((block: { id: number }) => (
              <BlockInf key={block.id} id={block.id} />
            ))}
          </div>

          <SubmitButton />
          {/* <div className="flex flex-col gap-[8px]">
            <Button
              text={"Удалить блок"}
              textColor={blocks.length > 1 ? "light" : "unActive"}
              buttonType={blocks.length > 1 ? "red" : "unActive"}
              onClick={deleteBlock}
            />
            <Button
              text={"Добавить блок"}
              textColor={"light"}
              buttonType={"mint"}
              onClick={addBlock}
            />
          </div> */}
        </div>
        <Preview />
      </div>
    </CreateBenefitLayout>
  );
}
