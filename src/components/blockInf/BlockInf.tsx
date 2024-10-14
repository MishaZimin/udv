import { useBlockStore } from "src/pages/createBenefit/store/useBlockStore";
import { useState } from "react";

interface BlockInfProps {
  id: number;
}

export function BlockInf({ id }: BlockInfProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const block = useBlockStore((state: any) =>
    state.blocks.find((block: BlockInfProps) => block.id === id),
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateBlock = useBlockStore((state: any) => state.updateBlock);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [title, setTitle] = useState(block?.title || "");
  const [description, setDescription] = useState(block?.description || "");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const handleTitleChange = (value: string) => {
  //   setTitle(value);
  //   updateBlock(id, value, description);
  // };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescription(e.target.value);
    updateBlock(id, title, e.target.value);
  };

  return (
    <div className="flex flex-col gap-[8px]">
      {/* <p className="text-[20px] font-semibold">Блок с информацией</p> */}
      {/* <Input
        inputType={"default"}
        value={title}
        onChange={handleTitleChange}
        placeholder="Заголовок блока"
      /> */}
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Описание блока"
        className="animation min-h-[160px] w-full rounded-[8px] border border-graphite border-opacity-[20%] px-[12px] pb-[10px] pt-[8px] focus:border-opacity-[80%] focus:outline-none"
      />
    </div>
  );
}
