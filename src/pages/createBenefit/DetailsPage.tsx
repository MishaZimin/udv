import { useBlockStore } from "./store/useBlockStore";
import { CreateBenefitLayout } from "./CreateBenefitLayout";
import Input from "src/shared/ui/input/Input";
import { BlockInf } from "src/components/blockInf/BlockInf";
import Button from "src/shared/ui/button/Button";

export function DetailsPage() {
  const name = useBlockStore((state) => state.name);
  const setName = useBlockStore((state) => state.setName);

  const blocks = useBlockStore((state) => state.blocks);
  const addBlock = useBlockStore((state) => state.addBlock);
  const deleteBlock = useBlockStore((state) => state.deleteBlock);

  return (
    <CreateBenefitLayout>
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[20px] font-semibold">Название бенефита</p>
          <Input
            inputType={"default"}
            placeholder="Название бенефита"
            value={name}
            onChange={(value) => {
              setName(value);
            }}
          />
        </div>

        <div className="flex flex-col gap-[24px]">
          {blocks.map((block: { id: number }) => (
            <BlockInf key={block.id} id={block.id} />
          ))}
        </div>

        <div className="flex flex-col gap-[8px]">
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
        </div>
      </div>
    </CreateBenefitLayout>
  );
}
